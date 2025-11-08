import { pgTable, serial, varchar, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 500 }).notNull(),
  slug: varchar('slug', { length: 500 }).notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  featuredImage: varchar('featured_image', { length: 1000 }),
  metaTitle: varchar('meta_title', { length: 500 }),
  metaDescription: text('meta_description'),
  metaKeywords: text('meta_keywords'),
  status: varchar('status', { length: 20 }).notNull().default('draft'),
  authorId: integer('author_id').notNull().references(() => adminUsers.id),
  categoryId: integer('category_id').references(() => blogCategories.id),
  viewCount: integer('view_count').default(0),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const blogCategories = pgTable('blog_categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const blogTags = pgTable('blog_tags', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const postTags = pgTable('post_tags', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').notNull().references(() => blogPosts.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => blogTags.id, { onDelete: 'cascade' }),
});

export const adminUsersRelations = relations(adminUsers, ({ many }) => ({
  posts: many(blogPosts),
}));

export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
  author: one(adminUsers, {
    fields: [blogPosts.authorId],
    references: [adminUsers.id],
  }),
  category: one(blogCategories, {
    fields: [blogPosts.categoryId],
    references: [blogCategories.id],
  }),
  postTags: many(postTags),
}));

export const blogCategoriesRelations = relations(blogCategories, ({ many }) => ({
  posts: many(blogPosts),
}));

export const blogTagsRelations = relations(blogTags, ({ many }) => ({
  postTags: many(postTags),
}));

export const postTagsRelations = relations(postTags, ({ one }) => ({
  post: one(blogPosts, {
    fields: [postTags.postId],
    references: [blogPosts.id],
  }),
  tag: one(blogTags, {
    fields: [postTags.tagId],
    references: [blogTags.id],
  }),
}));
