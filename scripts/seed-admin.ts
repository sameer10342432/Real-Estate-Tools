import { db } from '../server/storage';
import { adminUsers } from '../shared/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

async function seedAdmin() {
  try {
    const email = 'sameerliaqat81@gmail.com';
    const password = '#~yM9bGzT592';
    const name = 'Admin';

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingAdmin = await db.select().from(adminUsers).where(eq(adminUsers.email, email));

    if (existingAdmin.length > 0) {
      console.log('Admin user already exists');
      return;
    }

    await db.insert(adminUsers).values({
      email,
      password: hashedPassword,
      name,
    });

    console.log('Admin user created successfully');
    console.log('Email:', email);
    console.log('Password: [REDACTED for security]');
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
  process.exit(0);
}

seedAdmin();
