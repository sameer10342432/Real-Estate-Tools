import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { db } from '../../server/storage';
import { adminUsers } from '../../shared/schema';
import { eq } from 'drizzle-orm';

export interface AdminUser {
  id: number;
  email: string;
  name: string;
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
  
  cookieStore.set('admin_session', encodedSession, {
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

    const sessionData = Buffer.from(session.value, 'base64').toString('utf-8');
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
