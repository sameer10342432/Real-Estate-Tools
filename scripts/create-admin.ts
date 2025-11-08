import { db } from '../server/storage';
import { adminUsers } from '../shared/schema';
import { hashPassword } from '../src/lib/auth';
import { eq } from 'drizzle-orm';

async function createAdmin() {
  const email = 'sameerliaqat81@gmail.com';
  const password = '#~yM9bGzT592';
  const name = 'Admin User';

  try {
    // Check if admin already exists
    const existing = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);

    if (existing.length > 0) {
      console.log('✓ Admin user already exists with email:', email);
      return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the admin user
    await db.insert(adminUsers).values({
      email,
      password: hashedPassword,
      name,
    });

    console.log('✓ Admin user created successfully!');
    console.log('Email:', email);
    console.log('\nYou can now login at: /admin/login');
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }

  process.exit(0);
}

createAdmin();
