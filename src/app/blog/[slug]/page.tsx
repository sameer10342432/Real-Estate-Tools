import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '../../../../server/storage';
import { blogPosts, blogCategories, adminUsers } from '../../../../shared/schema';
import { eq } from 'drizzle-orm';
import type { Metadata } from 'next';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featuredImage: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  publishedAt: Date | null;
  status: string;
  author: {
    name: string;
    email: string;
  } | null;
  category: {
    name: string;
    slug: string;
  } | null;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await db
    .select({
      id: blogPosts.id,
      title: blogPosts.title,
      slug: blogPosts.slug,
      content: blogPosts.content,
      excerpt: blogPosts.excerpt,
      featuredImage: blogPosts.featuredImage,
      metaTitle: blogPosts.metaTitle,
      metaDescription: blogPosts.metaDescription,
      publishedAt: blogPosts.publishedAt,
      status: blogPosts.status,
      author: adminUsers,
      category: blogCategories,
    })
    .from(blogPosts)
    .leftJoin(adminUsers, eq(blogPosts.authorId, adminUsers.id))
    .leftJoin(blogCategories, eq(blogPosts.categoryId, blogCategories.id))
    .where(eq(blogPosts.slug, slug))
    .limit(1);

  const post = posts[0] as BlogPost;
  
  if (!post || post.status !== 'published') {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to Blog
        </Link>

        {post.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          {post.category && (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
              {post.category.name}
            </span>
          )}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>{post.author?.name || 'Admin'}</span>
            <span>•</span>
            {post.publishedAt && (
              <time dateTime={post.publishedAt.toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none bg-white rounded-lg shadow-lg p-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}

export const dynamic = 'force-dynamic';
