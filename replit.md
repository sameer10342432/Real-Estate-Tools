# Overview

Property Tools is a comprehensive Next.js web application offering 627 interactive calculators and extensive educational content for real estate professionals, investors, and homebuyers. It covers a broad spectrum of real estate domains, including mortgage analysis, investment evaluation, tax calculations, seller and agent tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, location-specific insights, sustainability, legal & compliance, construction, and AI-powered content. The platform features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project's vision is to become a leading resource in real estate analytics, empowering informed decisions and capturing a significant share of the property technology market.

# Recent Changes

## November 23, 2025 - Added 10 Professional Service Tools
- **iBuyer Offer Estimator**: Estimates what iBuyers like Opendoor and Offerpad might offer for your home, comparing instant cash offers vs traditional sale prices.
- **Real Estate Scam Checker**: Identifies common real estate scams and warning signs to protect from fraud, fake listings, wire fraud, and rental scams.
- **Real Estate Agent Red Flag Checker**: Evaluates real estate agents by checking credentials, reviews, experience, and professionalism.
- **Contractor Red Flag Checker**: Assesses contractors for licensing, insurance, references, and warning signs.
- **Title Company Fee Estimator**: Estimates title company fees based on property value, location, and service type.
- **Home Appraiser Fee Estimator**: Calculates home appraisal costs for different property types and purposes.
- **Land Surveyor Fee Estimator**: Estimates land survey costs based on property size and survey type.
- **Home Inspector Fee Estimator**: Calculates home inspection fees for different property types and inspection scopes.
- **Real Estate Attorney Fee Estimator**: Estimates attorney fees for real estate transactions.
- **Property Manager Commercial Fee Calculator**: Calculates property management fees for commercial properties.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: Next.js 15 (App Router) with React 18 and TypeScript.
- **UI**: Shadcn/ui + Radix UI components, Tailwind CSS for styling, CVA for variants, with dark mode support.
- **State Management**: Zustand with local storage persistence for user-specific data.
- **Form Handling**: React Hook Form with Zod for validation.
- **Visualization**: Recharts for data visualization.

## Backend
- **Framework**: Next.js API Routes for server-side logic and authentication.
- **Database**: PostgreSQL accessed via Drizzle ORM.
- **Authentication**: Custom session-based authentication using signed cookies, HMAC-SHA256, and bcryptjs.

## Content Management
- **Blog System**: Admin panel with a block-based rich text editor, supporting multimedia, draft/publish workflow, and SEO metadata.
- **Calculator Content**: Centralized data system (`src/content/tools/`) serves as a single source of truth for all 627 calculators across various categories, including specialized tools for commercial real estate, state-specific taxes, location intelligence, estate planning, agent tools, sustainability, legal & compliance, tax strategy & entity planning, market analysis, and AI-powered content. Each entry includes title, description, icon, category, slug, article, and calculation logic.

## Core Features
- **Calculator System**: Modular architecture supporting 627 professional tools with features like what-if analysis, real-time updates, search/filter, and responsive UI, including text-based qualitative assessments.
- **Enhancement Features**: Scenario Manager for comparisons, export utilities (CSV, JSON, PDF), shareable links, smart insights, calculation history, notes, favorites, and goals tracking.
- **Client Storage**: Custom `StorageManager` handles localStorage with quota management (5MB limit) and usage monitoring.

## System Design Choices
- Configured for Replit autoscale deployment, running on port 5000 with 0.0.0.0 binding.
- Database management uses `drizzle-kit` for migrations and seeding.
- Code quality maintained with ESLint, Prettier, and TypeScript strict mode.

# External Dependencies

## Database
- **PostgreSQL**: Primary database for all application data.

## Third-Party Libraries
- **UI & Styling**: Tailwind CSS, Heroicons, Lucide React, React Icons, Framer Motion, Tremor React.
- **Maps & Geospatial**: Leaflet, React Leaflet.
- **Document Generation**: jsPDF, jsPDF-autoTable, html2canvas.
- **Rich Text Editing**: React Quill.
- **Form & Validation**: Zod, React Hook Form, @hookform/resolvers.
- **Database & ORM**: Drizzle ORM, Drizzle Kit, postgres.
- **Utilities**: bcryptjs, clsx, tailwind-merge.

## External Services
- **OpenAI**: Utilized for AI-powered calculator features via `OPENAI_API_KEY`.