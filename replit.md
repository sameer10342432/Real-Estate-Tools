# Overview

Property Tools is a comprehensive Next.js web application that provides real estate professionals, investors, and homebuyers with a suite of interactive calculators and educational content. The platform offers **162 professional tools and calculators** covering mortgage analysis, investment property evaluation, tax calculations, seller-focused tools, land development, opportunity zones, market analysis (location intelligence, disaster risks, environmental hazards), closing cost estimators, and AI-powered content generation tools. Built with modern web technologies, it features a robust admin panel for content management, centralized tools data system, client-side calculation storage, and enhanced user experiences through scenario comparison, export capabilities, and smart insights.

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
- **Centralized tools data** in `src/data/tools.ts` - single source of truth for all 172 tools
- Complete tool interface with name, description, category, icon, and path
- Helper functions: `getToolsByCategory()`, `getCategoryCount()`, `getTotalToolsCount()`
- Organized into 11 categories: Basic Calculators (31), Investment Analysis (39), Property Valuation (6), Rental & Income (20), Market Analysis (16), Financial Planning (13), Risk Assessment (2), Advanced Analytics (5), **Tax Strategy & Entity Planning (3)**, **Seller Tools (21)**, Additional Tools (9)
- **Latest additions (November 10, 2025 - 4th batch - 10 new state-specific transfer tax calculators)**:
  - **Seller Tools - State Transfer Tax Calculators**: Texas Transfer Tax Calculator, Florida Transfer Tax (Doc Stamps) Calculator, New York Transfer Tax Calculator, Pennsylvania Transfer Tax Calculator, Illinois Transfer Tax Calculator, Ohio Transfer Tax Calculator, Georgia Transfer Tax Calculator, North Carolina Transfer Tax Calculator, Michigan Transfer Tax Calculator, New Jersey Transfer Tax Calculator
  - Each calculator features comprehensive articles on state-specific rates, exemptions, who pays, recording fees, and detailed cost breakdowns
  - Covers major US states with varying transfer tax structures (from 0% in Texas to 2-4% in PA/NY)
- **Previous additions (November 10, 2025 - 3rd batch)**:
  - **Market Analysis**: Local Property Tax Rate Finder (by County), Natural Disaster Risk Score (by Address), Environmental Hazard Checker
  - **Additional Tools - Closing Costs & Fees**: Title Insurance Cost Estimator, Home Appraisal Fee Estimator, Survey Cost Estimator, Legal Fee Estimator (Real Estate)
  - **Additional Tools - AI-Powered**: AI Property Listing Description Generator, AI Real Estate Blog Post Idea Generator, AI Renovation Idea Generator (by Photo)
- **Previous additions (November 10, 2025 - 2nd batch)**: 
  - **Tax Strategy & Entity Planning**: Real Estate Professional (REPs) Status Tax Benefit Calculator, Cost Segregation Benefit Calculator, LLC vs. Sole Proprietorship (Real Estate) Analyzer
  - **Market Analysis - Location Intelligence**: FEMA Flood Zone Checker (by Address), Crime Rate by Address Analyzer, School Rating by Address, Local Rent Control Law Finder (by City/State), Property History Analyzer (Sales/Price), US ZIP Code Demographics Analyzer, Proximity to Amenities Calculator
- Previous additions (November 10, 2025 - 1st batch): Raw Land Investment Calculator, New Construction Budget Calculator, Cost to Build House Estimator, Land Development Cost Calculator, Homestead Exemption Calculator, MACRS Depreciation Calculator, Property Tax Appeal Analyzer, Transfer Tax Calculator, Opportunity Zone Investment Calculator, Eviction Cost & Timeline Estimator
- All tools verified against actual page implementations - no 404 errors
- Calculator definitions in `src/content/tools/` directory
- Each calculator exports a content object with title, description, icon, category, slug, article, and calculation logic
- Content consumed by dynamic calculator components

## Core Features

**Calculator System**:
- Modular calculator architecture with shared components
- Generic `Calculator` component accepts inputs, results schema, and calculation function
- Enhanced calculator wrapper adds scenario management, export, share, and insights
- **172 professional tools and calculators** including mortgage, investment analysis, ROI, tax calculations, property valuation, rental income, market analysis, seller tools (now with 10 state-specific transfer tax calculators), land development, opportunity zones, MACRS depreciation, REPs status, cost segregation, entity structuring, location intelligence (flood zones, crime rates, school ratings, rent control, demographics, amenities), and more
- What-if analysis and sensitivity testing
- Real-time calculation updates on input change
- **Centralized tools data** ensures consistency across homepage and tools page
- Search and filter functionality for easy tool discovery
- Responsive card-based UI with icons and category badges
- **Text-based calculator results** supported via `isCurrency: false` (for qualitative assessments, status indicators, recommendations)

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

- **Successfully migrated from Vercel to Replit** (November 10, 2025) ✅
- Configured for Replit autoscale deployment
- Development server runs on port 5000 with host 0.0.0.0 for Replit environment
- Production deployment uses `npm run build` and `npm run start`
- Database: Replit PostgreSQL (Neon-backed) with schema managed via Drizzle
- Static asset optimization via next/font
- Image optimization via next/image
- No custom server configuration required

### Replit Configuration
- **Workflow**: `dev` workflow runs `npm run dev` on port 5000 with webview output
- **Next.js Config**: Server actions configured with `allowedOrigins: ["https://*.replit.dev", "https://*.repl.co"]` for Replit compatibility
- **Database**: PostgreSQL database created and schema synced with `npm run db:push`
- **Deployment Target**: Autoscale (stateless web application)
- **Build Command**: `npm run build`
- **Start Command**: `npm run start` (runs on port 5000 with 0.0.0.0 host binding)
- **Environment Variables**: DATABASE_URL (configured), SESSION_SECRET (configured)
- **Port & Host Binding**: All scripts configured to use PORT 5000 and HOST 0.0.0.0 for Replit's networking model
- **Status**: ✅ Fully operational - app renders correctly and runs without errors

### Migration Notes (November 12, 2025)
- Successfully migrated from Vercel to Replit with zero downtime
- All npm dependencies installed successfully (564 packages)
- Development server configured to run on port 5000 with 0.0.0.0 binding (required for Replit ingress)
- Production deployment configured for autoscale with proper build and start commands
- Database connectivity verified (DATABASE_URL and SESSION_SECRET environment variables confirmed)
- Workflow configured and running without errors - homepage loads successfully
- No security vulnerabilities introduced during migration
- Minor cross-origin warning in logs (informational only, does not affect functionality)
- Ready for production deployment via Replit's deployment system