import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../server/storage';
import { blogPosts, blogCategories, adminUsers, postTags, blogTags } from '../../../../../shared/schema';
import { requireAuth } from '@/lib/auth';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const includeUnpublished = searchParams.get('includeUnpublished') === 'true';

    let query = db
      .select({
        post: blogPosts,
        author: adminUsers,
        category: blogCategories,
      })
      .from(blogPosts)
      .leftJoin(adminUsers, eq(blogPosts.authorId, adminUsers.id))
      .leftJoin(blogCategories, eq(blogPosts.categoryId, blogCategories.id))
      .orderBy(desc(blogPosts.createdAt));

    const posts = await query;

    const filteredPosts = includeUnpublished
      ? posts
      : posts.filter((p) => p.post.status === 'published');

    const postsWithTags = await Promise.all(
      filteredPosts.map(async (item) => {
        const tags = await db
          .select({ tag: blogTags })
          .from(postTags)
          .leftJoin(blogTags, eq(postTags.tagId, blogTags.id))
          .where(eq(postTags.postId, item.post.id));

        return {
          ...item.post,
          author: item.author,
          category: item.category,
          tags: tags.map((t) => t.tag).filter(Boolean),
        };
      })
    );

    return NextResponse.json({ posts: postsWithTags });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
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

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    const [post] = await db
      .insert(blogPosts)
      .values({
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        metaKeywords,
        status: status || 'draft',
        authorId: user.id,
        categoryId: categoryId || null,
        publishedAt: status === 'published' ? new Date() : null,
      })
      .returning();

    if (tags && tags.length > 0) {
      for (const tagId of tags) {
        await db.insert(postTags).values({
          postId: post.id,
          tagId,
        });
      }
    }

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
