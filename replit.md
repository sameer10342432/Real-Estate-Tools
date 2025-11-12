# Overview

Property Tools is a comprehensive Next.js web application offering 172 interactive calculators and educational content for real estate professionals, investors, and homebuyers. The platform covers mortgage analysis, investment evaluation, tax calculations, seller tools, land development, opportunity zones, market analysis, closing costs, and AI-powered content. It features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project's ambition is to be a leading resource in real estate analytics and decision-making.

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
- **Calculator Content**: Centralized tools data system in `src/data/tools.ts` serving as the single source of truth for all 162 calculators across 11 categories. Each calculator has a defined content object including title, description, icon, category, slug, article, and calculation logic. This includes specialized tools for commercial real estate, state-specific transfer taxes, location intelligence, and AI-powered content generation.

## Core Features
- **Calculator System**: Modular architecture supporting 182 professional tools. Features include what-if analysis, real-time updates, search/filter, and responsive UI. Supports text-based results for qualitative assessments.
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
- `DATABASE_URL`: PostgreSQL connection string.
- `SESSION_SECRET`: Secret key for session signing.