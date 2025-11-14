# Overview

Property Tools is a comprehensive Next.js web application offering 410 interactive calculators and educational content for real estate professionals, investors, and homebuyers. The platform covers mortgage analysis, investment evaluation, tax calculations, seller tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, and AI-powered content. It features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project's ambition is to be a leading resource in real estate analytics and decision-making.

## Recent Changes (November 14, 2025)

**Added 10 New High-Density & Specialized Rental Property Calculators:**
1. **"Bunk Bed" Investment Calculator (High-Density Rentals)** - Analyze high-density rental investments with bunk bed configurations to maximize rental income per square foot
2. **Co-Living Space ROI Calculator** - Calculate return on investment for co-living properties with private bedrooms and shared common areas
3. **Furnished vs. Unfurnished Rental ROI** - Compare returns between furnished and unfurnished rentals to maximize income
4. **Corporate Housing Rental Calculator** - Analyze profitability of corporate housing rentals for business travelers
5. **Travel Nurse Housing Investment Analyzer** - Evaluate rental investments targeting travel nurses on temporary assignments
6. **Military (PCS) Move Rent vs. Buy Calculator** - Help military families decide whether to rent or buy during PCS moves
7. **BAH (Basic Allowance for Housing) vs. Mortgage** - Compare military BAH against mortgage payments to determine affordability
8. **VA Loan Assumption Benefit Calculator** - Calculate financial benefits of assuming an existing VA loan versus new mortgage
9. **Downsizing Savings Calculator (Retirement)** - Calculate benefits of downsizing in retirement to reduce expenses and free up equity
10. **Upsizing Affordability Calculator** - Determine if you can afford to upsize to a larger home and calculate financial impact

Each calculator includes comprehensive educational articles (2000+ words), detailed SEO metadata with proper titles and descriptions, robust calculation logic with multiple input fields and result metrics, and integration into the centralized tools system. Total calculator count increased from 400 to 410, with Investment Analysis category expanding to 92 tools and Basic Calculators category receiving 5 new specialized tools.

**Added 10 New Lifestyle & Housing Calculators:**
1. **Commute Cost vs. Housing Cost Trade-off Calculator** - Compare true costs of living closer to work vs. longer commute with cheaper housing
2. **Remote Work Home Savings Calculator** - Calculate savings from working remotely and living in a lower-cost area
3. **Snowbird (Dual Property) Cost Calculator** - Analyze costs of maintaining two seasonal properties
4. **Vacation Home (Second Home) Affordability Calculator** - Determine affordability of second homes including all costs and rental income potential
5. **Co-Buying (with Friends/Family) Calculator** - Calculate ownership splits, costs, and equity for joint property purchases
6. **Joint vs. Separate Property (Marital) Calculator** - Compare financial implications of joint vs. separate property ownership for couples
7. **Prenuptial Agreement (Real Estate) Tool** - Plan and document real estate assets in prenuptial agreements
8. **Divorce & Real Estate Buyout Calculator** - Calculate buyout amounts and refinancing options for property division in divorce
9. **House Hacking (Roommate) Rent Share Calculator** - Optimize rent collection from roommates to offset mortgage costs
10. **Utility Bill Splitter (Roommates)** - Calculate fair utility bill splits based on usage patterns and room sizes

Each calculator includes comprehensive educational articles (2000+ words), detailed SEO metadata with proper titles and descriptions, robust calculation logic with multiple input fields and result metrics, and integration into the centralized tools system. Total calculator count increased from 390 to 400 with the new "Lifestyle & Housing" category.

**Added 9 New Estate Planning & Financial Comparison Calculators:**
1. **Legacy/Estate Planning (Real Estate) Calculator** - Calculate estate taxes, inheritance distribution, and plan for wealth transfer
2. **Gifting Property Tax Calculator** - Analyze tax implications of gifting property to family members
3. **Inherited Property Options Analyzer (Sell vs. Rent vs. Keep)** - Compare options for inherited real estate
4. **Trust vs. LLC for Property Ownership** - Compare holding structures for real estate investments
5. **College Savings (529) vs. Rental Property** - Evaluate education funding strategies
6. **Paying Off Mortgage vs. Investing Calculator** - Determine optimal use of extra funds
7. **Bi-Weekly vs. Monthly Mortgage (Impact on Net Worth)** - Compare payment schedules and long-term wealth impact
8. **Tax-Equivalent Yield (Real Estate vs. Bonds)** - Compare after-tax returns across asset classes
9. **Moving to a Lower Cost of Living (LCOL) Area Savings Calculator** - Analyze financial benefits of geographic arbitrage

Each calculator includes comprehensive educational articles (2000+ words), detailed SEO metadata with proper titles and descriptions, robust calculation logic with multiple input fields and result metrics, and integration into the centralized tools system. Total calculator count increased from 182 to 191.

**Added 10 New Homebuyer & Financial Planning Calculators:**
1. **Home Inspection Repair Credit Calculator** - Calculate repair credits and negotiate concessions based on inspection findings
2. **203k Loan Renovation Budget Tracker** - Track and manage FHA 203k loan renovation budgets with detailed cost breakdowns
3. **Renovation Punch List Generator** - Create and track renovation tasks with cost estimates and timeline management
4. **Home Warranty vs. Repair Fund Calculator** - Compare costs of home warranties versus building your own repair fund
5. **Property DOM vs. Renovation Analyzer** - Analyze whether renovations will reduce days on market and maximize sale price
6. **House Poor Calculator (Mortgage vs. Lifestyle)** - Determine if housing costs are limiting lifestyle and financial flexibility
7. **Real Estate as % of Net Worth Calculator** - Analyze real estate holdings as percentage of total net worth and portfolio diversification
8. **Buy vs. Rent Advanced Calculator** - Comprehensive analysis including investment opportunity costs and tax benefits
9. **Buy Now vs. Wait Calculator** - Analyze whether to buy real estate now or wait based on price and interest rate forecasts
10. **Retirement Savings with Real Estate Calculator** - Plan retirement strategy incorporating real estate equity and rental income

Each calculator includes comprehensive educational articles, detailed SEO metadata with proper titles and descriptions, robust calculation logic, and advanced features.

## Migration Completed (November 14, 2025)
**Successfully completed migration from Vercel to Replit:**
- Installed all npm dependencies (565 packages)
- Created and synced PostgreSQL database schema using Drizzle Kit
- Configured Next.js 15.5.4 for Replit environment:
  - Added `allowedDevOrigins` for Replit domains (*.replit.dev, *.repl.co)
  - Configured server actions with proper allowed origins
  - Development server runs on port 5000 with 0.0.0.0 host binding
- Set up secure environment variables:
  - `DATABASE_URL`: Replit PostgreSQL connection (auto-configured)
  - `SESSION_SECRET`: Dedicated secret for session cookie signing
  - `OPENAI_API_KEY`: API key for AI-powered calculator features
- Configured autoscale deployment for production
- Application is fully functional and serving correctly
- Note: Benign HMR cross-origin warning exists (Next.js 15.5.4 known issue) but doesn't affect functionality

## Recent Additions (November 12, 2025)
Added 10 new advanced real estate finance calculators to the Investment Analysis category:
1. **Preferred Equity vs. Common Equity Analyzer** - Compares preferred and common equity investment structures
2. **Mezzanine Debt Calculator** - Analyzes mezzanine financing for commercial deals
3. **Real Estate Note Investing ROI Calculator** - Calculates returns on mortgage note investments
4. **Performing vs. Non-Performing Note Analyzer** - Compares different note investment types
5. **Discounted Note (Mortgage) Calculator** - Analyzes discounted note purchases
6. **Seller Financing Amortization Schedule** - Creates amortization schedules for owner financing
7. **Wraparound Mortgage Profit Calculator** - Calculates wraparound mortgage profitability
8. **Subject-To Deal Cash Flow Analyzer** - Analyzes subject-to real estate deals
9. **Lease Option (Rent-to-Own) Investor ROI Calculator** - Calculates lease option returns
10. **Master Lease Agreement (MLA) Calculator** - Analyzes master lease profitability

Each calculator includes comprehensive 2000+ word educational articles, detailed SEO metadata, and robust calculation logic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: Next.js 15 (App Router) with React 18 and TypeScript.
- **UI**: Shadcn/ui + Radix UI, Tailwind CSS for styling, CVA for variants, dark mode support.
- **State Management**: Zustand with local storage persistence for user-specific data like saved scenarios, history, and favorites.
- **Form Handling**: React Hook Form + Zod for validation.
- **Visualization**: Recharts for data visualization within calculators.

## Backend
- **Framework**: Next.js API Routes for server-side logic and authentication.
- **Database**: PostgreSQL via Drizzle ORM for type-safe queries. Schema includes `admin_users`, `blog_posts`, `blog_categories`, `blog_tags`, and `post_tags`.
- **Authentication**: Custom session-based authentication using signed cookies, HMAC-SHA256, and bcryptjs for password hashing.

## Content Management
- **Blog System**: Admin panel with a block-based rich text editor for articles, supporting headings, paragraphs, images, draft/publish workflow, and SEO metadata.
- **Calculator Content**: Centralized tools data system in `src/content/tools/` serving as the single source of truth for all 410 calculators across multiple categories. Each calculator has a defined content object including title, description, icon, category, slug, article, and calculation logic. This includes specialized tools for commercial real estate, state-specific transfer taxes, location intelligence, estate planning, and AI-powered content generation.

## Core Features
- **Calculator System**: Modular architecture supporting 410 professional tools. Features include what-if analysis, real-time updates, search/filter, and responsive UI. Supports text-based results for qualitative assessments.
- **Enhancement Features**: Scenario Manager for comparing calculations, export utilities (CSV, JSON, PDF), shareable links, smart insights, calculation history, notes, favorites, and goals tracking.
- **Client Storage**: Custom `StorageManager` for localStorage with quota management (5MB limit) and usage monitoring.

## Development & Deployment
- Configured for Replit autoscale deployment, running on port 5000 with 0.0.0.0 binding.
- Database management using `drizzle-kit` for migrations and seeding.
- Code quality enforced with ESLint, Prettier, and TypeScript strict mode.

# External Dependencies

## Database
- **PostgreSQL**: Primary database for application data.

## Third-Party Libraries
- **UI & Styling**: Tailwind CSS, Heroicons, Lucide React, React Icons, Framer Motion, Tremor React.
- **Maps & Geospatial**: Leaflet, React Leaflet.
- **Document Generation**: jsPDF, jsPDF-autoTable, html2canvas.
- **Rich Text Editing**: React Quill.
- **Form & Validation**: Zod, React Hook Form, @hookform/resolvers.
- **Database & ORM**: Drizzle ORM, Drizzle Kit, postgres.
- **Utilities**: bcryptjs, clsx, tailwind-merge.

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (Replit-managed).
- `SESSION_SECRET`: Secret key for session cookie signing.
- `OPENAI_API_KEY`: OpenAI API key for AI-powered calculator features.