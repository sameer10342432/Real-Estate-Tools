import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { db } from '../../server/storage';
import { adminUsers } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

export interface AdminUser {
  id: number;
  email: string;
  name: string;
}

function getSessionSecret(): string {
  if (process.env.SESSION_SECRET) {
    return process.env.SESSION_SECRET;
  }
  
  if (process.env.NODE_ENV === 'production') {
    throw new Error('SESSION_SECRET environment variable must be set in production');
  }
  
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL or SESSION_SECRET environment variable must be set');
  }
  
  const hash = crypto.createHash('sha256');
  hash.update(process.env.DATABASE_URL);
  hash.update('session-secret-salt-v1');
  const derivedSecret = hash.digest('hex');
  
  console.warn('WARNING: Using derived session secret from DATABASE_URL. Set SESSION_SECRET environment variable for production.');
  
  return derivedSecret;
}

const SESSION_SECRET = getSessionSecret();

function signData(data: string): string {
  const hmac = crypto.createHmac('sha256', SESSION_SECRET);
  hmac.update(data);
  return hmac.digest('hex');
}

function verifySignature(data: string, signature: string): boolean {
  const expectedSignature = signData(data);
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function createSession(userId: number, email: string, name: string) {
  const cookieStore = await cookies();
  const sessionData = JSON.stringify({ userId, email, name });
  const encodedSession = Buffer.from(sessionData).toString('base64');
  const signature = signData(encodedSession);
  const signedSession = `${encodedSession}.${signature}`;
  
  cookieStore.set('admin_session', signedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function getSession(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');
    
    if (!session) {
      return null;
    }

    const parts = session.value.split('.');
    if (parts.length !== 2) {
      return null;
    }

    const [encodedSession, signature] = parts;
    
    if (!verifySignature(encodedSession, signature)) {
      return null;
    }

    const sessionData = Buffer.from(encodedSession, 'base64').toString('utf-8');
    const user = JSON.parse(sessionData) as AdminUser;
    
    const dbUser = await db.select().from(adminUsers).where(eq(adminUsers.id, user.id)).limit(1);
    
    if (dbUser.length === 0) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}

export async function requireAuth(): Promise<AdminUser> {
  const user = await getSession();
  
  if (!user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}
