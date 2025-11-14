# Overview

Property Tools is a comprehensive Next.js web application providing 420 interactive calculators and educational content for real estate professionals, investors, and homebuyers. It covers a wide array of real estate facets including mortgage analysis, investment evaluation, tax calculations, seller tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, location-specific tools, and AI-powered content. The platform features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project aims to be a leading resource in real estate analytics and decision-making, with a business vision to empower informed real estate decisions and capture a significant market share in property tech.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: Next.js 15 (App Router) with React 18 and TypeScript.
- **UI**: Shadcn/ui + Radix UI components, Tailwind CSS for styling, CVA for variants, with dark mode support.
- **State Management**: Zustand with local storage persistence for user-specific data (saved scenarios, history, favorites).
- **Form Handling**: React Hook Form with Zod for validation.
- **Visualization**: Recharts for data visualization.

## Backend
- **Framework**: Next.js API Routes for server-side logic and authentication.
- **Database**: PostgreSQL accessed via Drizzle ORM for type-safe queries.
- **Authentication**: Custom session-based authentication using signed cookies, HMAC-SHA256, and bcryptjs for password hashing.

## Content Management
- **Blog System**: Admin panel includes a block-based rich text editor for articles, supporting multimedia, draft/publish workflow, and SEO metadata.
- **Calculator Content**: Centralized data system (`src/content/tools/`) acts as a single source of truth for all 420 calculators across various categories, including specialized tools for commercial real estate, state-specific taxes, location intelligence, estate planning, and AI-powered content. Each calculator entry includes title, description, icon, category, slug, article, and calculation logic.

## Core Features
- **Calculator System**: Modular architecture supporting 420 professional tools with features like what-if analysis, real-time updates, search/filter, and responsive UI. Supports text-based results for qualitative assessments.
- **Enhancement Features**: Scenario Manager for comparisons, export utilities (CSV, JSON, PDF), shareable links, smart insights, calculation history, notes, favorites, and goals tracking.
- **Client Storage**: Custom `StorageManager` handles localStorage with quota management (5MB limit) and usage monitoring.

## System Design Choices
- The application is configured for Replit autoscale deployment, running on port 5000 with 0.0.0.0 binding.
- Database management uses `drizzle-kit` for migrations and seeding.
- Code quality is maintained through ESLint, Prettier, and TypeScript strict mode.

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