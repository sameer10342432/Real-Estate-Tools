import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../server/storage';
import { blogPosts, postTags } from '../../../../../../shared/schema';
import { requireAuth } from '@/lib/auth';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, parseInt(id))).limit(1);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const body = await request.json();

    const {
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      metaTitle,
      metaDescription,
      metaKeywords,
      status,
      categoryId,
      tags,
    } = body;

    const updateData: any = { updatedAt: new Date() };

    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (content !== undefined) updateData.content = content;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (featuredImage !== undefined) updateData.featuredImage = featuredImage;
    if (metaTitle !== undefined) updateData.metaTitle = metaTitle;
    if (metaDescription !== undefined) updateData.metaDescription = metaDescription;
    if (metaKeywords !== undefined) updateData.metaKeywords = metaKeywords;
    if (status !== undefined) {
      updateData.status = status;
      if (status === 'published') {
        const [existingPost] = await db.select().from(blogPosts).where(eq(blogPosts.id, parseInt(id))).limit(1);
        if (existingPost && !existingPost.publishedAt) {
          updateData.publishedAt = new Date();
        }
      }
    }
    if (categoryId !== undefined) updateData.categoryId = categoryId;

    const [updatedPost] = await db
      .update(blogPosts)
      .set(updateData)
      .where(eq(blogPosts.id, parseInt(id)))
      .returning();

    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    if (tags !== undefined) {
      await db.delete(postTags).where(eq(postTags.postId, parseInt(id)));

      if (tags.length > 0) {
        for (const tagId of tags) {
          await db.insert(postTags).values({
            postId: parseInt(id),
            tagId,
          });
        }
      }
    }

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;

    await db.delete(blogPosts).where(eq(blogPosts.id, parseInt(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
