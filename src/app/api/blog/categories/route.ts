import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../server/storage';
import { blogCategories } from '../../../../../shared/schema';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    const categories = await db.select().from(blogCategories);
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    const body = await request.json();
    const { name, slug, description } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    const [category] = await db
      .insert(blogCategories)
      .values({ name, slug, description })
      .returning();

    return NextResponse.json({ category }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
