import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../server/storage';
import { blogTags } from '../../../../../shared/schema';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    const tags = await db.select().from(blogTags);
    return NextResponse.json({ tags });
  } catch (error) {
    console.error('Error fetching tags:', error);
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
    const { name, slug } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    const [tag] = await db
      .insert(blogTags)
      .values({ name, slug })
      .returning();

    return NextResponse.json({ tag }, { status: 201 });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
