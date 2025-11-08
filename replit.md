# Overview

Property Tools is a comprehensive Next.js web application that provides real estate professionals, investors, and homebuyers with a suite of interactive calculators and educational content. The platform offers **72 professional tools and calculators** covering mortgage analysis, investment property evaluation, tax calculations, and various real estate investment strategies. Built with modern web technologies, it features a robust admin panel for content management, centralized tools data system, client-side calculation storage, and enhanced user experiences through scenario comparison, export capabilities, and smart insights.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 15 (App Router) with React 18
- Server and client components architecture using the `app/` directory structure
- TypeScript for type safety across the application
- Geist Sans and Geist Mono fonts for consistent typography

**UI Components**: Shadcn/ui + Radix UI primitives
- Reusable component library built on Radix UI primitives (@radix-ui/react-*)
- Tailwind CSS for styling with custom design tokens
- Class variance authority (CVA) for component variants
- Dark mode support via CSS variables and Tailwind's dark mode class strategy

**State Management**: Zustand with persistence
- `calculatorEnhancementsStore` handles saved scenarios, calculation history, favorites, and goals
- Local storage persistence for user data
- Client-side only state (no server state management needed)

**Form Handling**: React Hook Form + Zod
- Form validation using Zod schemas
- @hookform/resolvers for Zod integration
- Custom hooks for calculator-specific form logic

**Visualization**: Recharts
- Chart components for data visualization in calculators
- Line, bar, pie, and area chart support for financial projections

## Backend Architecture

**Framework**: Next.js API Routes
- Server-side API endpoints under `/api` directory
- Authentication endpoints for admin login/logout
- No separate backend server; API routes handle all server logic

**Database**: PostgreSQL via Drizzle ORM
- Drizzle ORM for type-safe database queries
- `postgres` npm package for PostgreSQL connection
- Database schema defined in `shared/schema.ts`

**Database Schema**:
- `admin_users`: Admin authentication and user management
- `blog_posts`: Content management for blog articles with rich metadata (SEO, categories, tags)
- `blog_categories`: Organizational taxonomy for blog content
- `blog_tags`: Tagging system for content discovery
- `post_tags`: Many-to-many relationship between posts and tags

**Authentication**: Custom bcrypt-based auth
- Session-based authentication using signed cookies
- HMAC-SHA256 signatures for session integrity
- bcryptjs for password hashing
- No third-party auth providers (custom implementation)
- Session secret derived from DATABASE_URL in development, must be set explicitly in production

## Content Management

**Blog System**: Admin panel with rich text editing
- Block-based content editor for flexible article composition
- Three block types: headings (h1-h3), paragraphs, and images
- Content stored as JSON blocks, converted to HTML for display
- Image upload support with alt text for accessibility
- Draft/published status workflow
- SEO metadata (meta title, description, keywords)
- View counting and publish date tracking

**Calculator Content**: Centralized tools data system
- **Centralized tools data** in `src/data/tools.ts` - single source of truth for all 72 tools
- Complete tool interface with name, description, category, icon, and path
- Helper functions: `getToolsByCategory()`, `getCategoryCount()`, `getTotalToolsCount()`
- Organized into 9 categories: Basic Calculators (8), Investment Analysis (26), Property Valuation (6), Rental & Income (9), Market Analysis (6), Financial Planning (10), Risk Assessment (2), Advanced Analytics (3), Additional Tools (2)
- All tools verified against actual page implementations - no 404 errors
- Calculator definitions in `src/content/tools/` directory
- Each calculator exports a content object with title, description, icon, category, slug, article, and calculation logic
- Content consumed by dynamic calculator components

## Core Features

**Calculator System**:
- Modular calculator architecture with shared components
- Generic `Calculator` component accepts inputs, results schema, and calculation function
- Enhanced calculator wrapper adds scenario management, export, share, and insights
- **72 professional tools and calculators** including mortgage, investment analysis, ROI, tax calculations, property valuation, rental income, market analysis, and more
- What-if analysis and sensitivity testing
- Real-time calculation updates on input change
- **Centralized tools data** ensures consistency across homepage and tools page
- Search and filter functionality for easy tool discovery
- Responsive card-based UI with icons and category badges

**Enhancement Features**:
- Scenario Manager: Save, compare, and manage multiple calculation scenarios
- Export utilities: CSV, JSON, PDF export with jsPDF and jsPDF-autoTable
- Share functionality: Generate shareable links with encoded calculation data
- Smart Insights: Context-aware recommendations based on calculation results
- Calculation History: Track previous calculations per calculator
- Notes & Annotations: Add custom notes to saved scenarios
- Favorites: Mark frequently-used calculators for quick access
- Goals Tracking: Set and track financial goals with milestones

**Client Storage Management**:
- Custom `StorageManager` class for localStorage with quota management
- 5MB storage limit with automatic cleanup
- Error handling for quota exceeded scenarios
- Storage usage monitoring and warnings at 80% capacity
- Custom event dispatching for UI notifications

## Development Tools

**Database Management**:
- `drizzle-kit` for migrations and schema management
- Seeding scripts in `scripts/` directory for admin user creation
- `npm run db:push` to push schema changes
- `npm run db:seed` to create default admin user

**Code Quality**:
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled
- Custom fix-lint-errors.js utility (note: incomplete implementation)

**Development Server**:
- Runs on port 5000 with 0.0.0.0 binding for network access
- Hot module replacement for rapid development
- Accessible at http://localhost:5000

# External Dependencies

## Database
- **PostgreSQL**: Primary data store for admin users and blog content
- Connection managed via `DATABASE_URL` environment variable
- Required for application functionality

## Third-Party Libraries

**UI & Styling**:
- Tailwind CSS: Utility-first styling framework
- Heroicons: Icon library (@heroicons/react)
- Lucide React: Additional icon set
- React Icons: Supplementary icons
- Framer Motion: Animation library for enhanced UX
- Tremor React: Data visualization components

**Maps & Geospatial**:
- Leaflet: Interactive maps library
- React Leaflet: React bindings for Leaflet
- @types/leaflet: TypeScript definitions

**Document Generation**:
- jsPDF: PDF generation library
- jsPDF-autoTable: Table plugin for jsPDF
- html2canvas: HTML to canvas conversion (for visual exports)

**Rich Text Editing**:
- React Quill: WYSIWYG editor for admin blog content
- Quill editor with custom toolbar configuration

**Form & Validation**:
- Zod: Schema validation library
- React Hook Form: Form state management
- @hookform/resolvers: Integration between RHF and Zod

**Database & ORM**:
- Drizzle ORM: Type-safe database toolkit
- Drizzle Kit: Migration and introspection tools
- postgres: PostgreSQL client for Node.js

**Utilities**:
- bcryptjs: Password hashing for authentication
- clsx + tailwind-merge: Conditional className utilities
- inquirer: CLI prompts for scripts (unused in production)

## Environment Variables

**Required**:
- `DATABASE_URL`: PostgreSQL connection string (required for all environments)
- `SESSION_SECRET`: Secret key for session signing (required in production, derived from DATABASE_URL in development)

**Optional**:
- `NODE_ENV`: Environment identifier (development/production)

## Build & Deployment

- Designed for deployment on Vercel (Next.js native platform)
- Static asset optimization via next/font
- Image optimization via next/image
- No custom server configuration required
- Port 5000 for both development and production start scripts