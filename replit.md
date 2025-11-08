# Property Tools - Real Estate Calculator Suite

## Overview

Property Tools is a Next.js-based web application that provides a comprehensive suite of 50+ free real estate calculators and tools for buyers, sellers, investors, and real estate agents. The application offers professional-grade calculation tools including mortgage calculators, property valuation, ROI analysis, investment calculators, and various specialized real estate analysis tools. All calculations are performed client-side in the browser, ensuring user privacy and instant results.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15.5.4 with App Router
- Server-side rendering (SSR) and static site generation (SSG) capabilities
- TypeScript for type safety and improved developer experience
- Modern React 18.3.1 with hooks-based components
- Client-side navigation and routing through Next.js App Router

**UI Component Strategy**:
- Radix UI primitives for accessible, unstyled component foundations (checkbox, label, progress, select, separator, slider, slot, switch, tabs)
- Tailwind CSS v4 for utility-first styling with custom theme configuration
- Class Variance Authority (CVA) for managing component variants
- Shadcn/ui-style component architecture for reusable UI components
- Framer Motion for animations and transitions
- Geist font family for optimized typography

**State Management**:
- Zustand for global state management
- React Hook Form for form state and validation
- Local component state using React hooks
- Client-side only calculations (no server-side data storage)

**Styling Approach**:
- Tailwind CSS with PostCSS processing
- Custom design tokens for colors and typography
- Dark mode support through CSS custom properties
- Responsive design with mobile-first approach
- Gradient backgrounds and modern UI patterns

### Calculator Architecture

**Calculator Pattern**:
- Reusable `Calculator` component accepting configuration objects
- Standardized input/output interface through `CalculatorContent` type
- Individual calculator pages in `/app` directory routing to specific tools
- Form validation using Zod schemas and react-hook-form resolvers
- Real-time calculation updates on input change

**Calculator Categories**:
1. **Basic Calculators**: Mortgage, affordability, down payment, loan eligibility, refinance, amortization
2. **Investment Calculators**: ROI, cap rate, cash-on-cash return, rental property analysis, BRRRR method
3. **Specialized Tools**: Fix-and-flip, 1031 exchange, ARV, hard money loans, house hacking
4. **Analysis Tools**: Rent vs. buy, property valuation, commission, capital gains tax, gross rent multiplier
5. **Financial Planning**: Retirement savings, college savings, credit card payoff, personal loans

**Calculation Logic**:
- Pure functions for mathematical operations
- No external API calls for calculations
- Results computed entirely in browser JavaScript
- Utility functions in `/lib/utils.ts` for number formatting

### Data Storage

**Database**: PostgreSQL (Neon-backed via Replit)
- Drizzle ORM for type-safe database queries
- PostgreSQL database for blog content and admin authentication
- Database migrations managed via `npm run db:push`
- Environment variables for database connection (DATABASE_URL, etc.)

**Database Schema**:
- `admin_users`: Secure admin authentication with bcrypt-hashed passwords
- `blog_posts`: WordPress-like blog posts with rich content, SEO metadata, and status management
- `blog_categories`: Post categorization system
- `blog_tags`: Tagging system for posts
- `post_tags`: Many-to-many relationship between posts and tags

**Client-Side Storage**:
- LocalStorage for calculator data persistence (optional)
- Storage quota management system (`StorageManager` class)
- 5MB storage limit with automatic cleanup mechanisms
- Storage error handling with user notifications

**Storage Strategy**:
- All calculator inputs are ephemeral by default
- Blog content stored in PostgreSQL database
- Storage usage monitoring and quota exceeded events
- Emergency cleanup procedures when approaching limits

### Content Management

**Static Content**:
- Calculator definitions in `/src/content/tools/` directory
- Markdown-style content for educational articles
- Type-safe content structures using TypeScript interfaces
- Centralized constants in `/src/constants/` files

**Content Structure**:
- Each calculator has title, description, icon, category, slug
- Associated educational article with title and HTML content
- Calculator configuration with fields and calculation function
- Results display configuration

**Blog Management System** (Added November 8, 2025):
- WordPress-style blog CMS with admin panel
- Secure authentication with bcrypt password hashing
- Rich text editor (React Quill) for content creation
- Complete SEO features (meta title, description, keywords)
- Category and tag organization
- Draft/Published status management
- Featured images and excerpts
- Public-facing blog pages at `/blog`
- Admin panel at `/admin` with dashboard, post management, categories, and tags

**Blog Features**:
- Create, edit, delete blog posts
- Rich WYSIWYG editor with formatting, images, links, and tables
- Auto-generated slugs from titles
- Author attribution
- Publication date tracking
- View counts
- Category-based organization
- Tag-based filtering
- SEO-optimized with custom meta tags
- Responsive design matching site theme

**Admin Panel Access**:
- Login page: `/admin/login`
- Dashboard: `/admin/dashboard`
- Posts management: `/admin/blog/posts`
- Categories: `/admin/blog/categories`
- Tags: `/admin/blog/tags`
- Session-based authentication with HMAC-signed secure cookies

**Security Implementation**:
- Bcrypt password hashing (10 rounds) for admin credentials
- HMAC-SHA256 signed session cookies to prevent forgery
- Session secret management:
  * Uses SESSION_SECRET environment variable if provided
  * Throws error in production if SESSION_SECRET not set
  * Derives secure secret from DATABASE_URL in development
- All admin API endpoints protected with authentication
- Draft posts are not accessible via public routes
- includeUnpublished parameter requires authentication
- HttpOnly, SameSite, and Secure cookies in production

**Production Deployment Requirements**:
- Set SESSION_SECRET environment variable with a strong random secret (recommended: 64+ characters)
- Ensure DATABASE_URL is configured correctly
- Admin credentials seeded via `npm run db:seed` script

### Visualization & Reporting

**Chart Library**: Recharts for data visualization
- Interactive charts for amortization schedules
- Property value projections
- Investment return comparisons

**Document Generation**:
- jsPDF for PDF report generation
- jspdf-autotable for tabular data in PDFs
- html2canvas for screenshot capabilities
- Downloadable calculation results

### External Dependencies

**UI Libraries**:
- Tremor React for advanced data visualization components
- Lucide React for iconography
- React Icons for additional icon sets
- Heroicons for utility icons

**Form Management**:
- React Hook Form for form state management
- Hookform Resolvers for Zod schema integration
- Zod for runtime type validation and schema definition

**Utility Libraries**:
- clsx and tailwind-merge for conditional className management
- Inquirer for potential CLI interactions
- Prettier for code formatting

**Development Tools**:
- ESLint for code quality
- TypeScript for static type checking
- Next.js built-in optimization (fonts, images)

### Navigation & Layout

**Header/Footer Pattern**:
- Persistent header with navigation to tools and contact pages
- Footer with quick links, legal pages, and social links
- Responsive mobile navigation with hamburger menu
- Centralized navigation data in component data files

**Page Structure**:
- Hero sections for landing and informational pages
- Tool/calculator grid layouts for browsing
- Legal pages (privacy, terms, disclaimer) with structured content
- Contact page with form and information sections

### Privacy & Legal Considerations

**Data Handling Philosophy**:
- No collection or storage of user calculation data
- Client-side only computation
- Privacy policy, terms of service, and disclaimer pages
- Clear disclaimers about professional advice limitations

**Educational Purpose**:
- All calculators labeled for educational/informational purposes
- Emphasis on consulting professionals for final decisions
- Accuracy disclaimers for estimation-only results

### Deployment Configuration

**Hosting Target**: Replit deployment (migrated from Vercel on November 8, 2025)
- Next.js 15.5.4 configured for Replit environment
- Development server: `next dev -p 5000 -H 0.0.0.0`
- Production server: `next start -p 5000 -H 0.0.0.0`
- Port 5000 binding for Replit's webview
- Network exposure to 0.0.0.0 for iframe compatibility
- Autoscale deployment target for stateless operation

**Build Configuration**:
- TypeScript compilation with strict mode
- ESNext target for modern JavaScript features
- Path aliases for clean imports (@/* → ./src/*)
- Incremental builds for development speed
- npm package manager for dependency management

**Recent Changes** (November 8, 2025):
- Migrated from Vercel to Replit
- Removed insecure wildcard allowedOrigins configuration
- Configured proper port binding for Replit environment
- Set up development workflow and deployment configuration
- All 69 calculator tools verified working on Replit platform