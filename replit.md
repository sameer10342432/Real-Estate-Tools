# Overview

Property Tools is a comprehensive Next.js web application designed for real estate professionals, investors, and homebuyers. It provides 803 interactive calculators and extensive educational content spanning mortgage analysis, investment evaluation, tax calculations, seller and agent tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, location-specific insights, sustainability, legal & compliance, construction, home inspections & disclosures, insurance & protection, and AI-powered content. The platform features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, and export capabilities. The vision is to become a leading resource in real estate analytics, empowering informed decisions and capturing a significant market share.

**Recent Addition (November 2025)**: Added 9 specialized mortgage documentation and verification tools (Seasoned Funds Calculator, Fund Sourcing Calculator, Verification of Deposit Calculator, Verification of Employment Calculator, Verification of Rent Calculator, Tax Return Analyzer for Self-Employed, P&L Statement Calculator for Self-Employed, Asset Depletion Loan Calculator, Asset-Based Loan Calculator) expanding total tools to 803. Organized into three new categories: Mortgage Qualification, Self-Employed Loans, and Non-QM Loans. Previously added 10 specialized financial/loan calculators, 10 specialized construction and building tools, 9 specialized insurance and warranty calculators, 11 specialized home inspection and disclosure calculators, 9 specialized zoning and real estate agent/broker tools, 10 specialized HOA/Condo/Co-op calculator tools, and 10 specialized regulatory and legal analysis tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: Next.js 15 (App Router) with React 18 and TypeScript.
- **UI**: Shadcn/ui + Radix UI components, Tailwind CSS, CVA, with dark mode support.
- **State Management**: Zustand with local storage persistence.
- **Form Handling**: React Hook Form with Zod for validation.
- **Visualization**: Recharts for data visualization.

## Backend
- **Framework**: Next.js API Routes for server-side logic and authentication.
- **Database**: PostgreSQL accessed via Drizzle ORM.
- **Authentication**: Custom session-based authentication using signed cookies, HMAC-SHA256, and bcryptjs.

## Content Management
- **Blog System**: Admin panel with a block-based rich text editor, supporting multimedia, draft/publish workflow, and SEO.
- **Calculator Content**: Dual data system with `src/content/tools/` for detailed calculator configurations (431 full-featured calculators) and `src/data/tools.ts` for all 803 tools metadata used across the platform. Each calculator entry includes title, description, icon, category, slug, article, and calculation logic.

## Core Features
- **Calculator System**: Modular architecture supporting 803 professional tools with features like what-if analysis, real-time updates, search/filter, responsive UI, and text-based qualitative assessments.
- **Enhancement Features**: Scenario Manager for comparisons, export utilities (CSV, JSON, PDF), shareable links, smart insights, calculation history, notes, favorites, and goals tracking.
- **Client Storage**: Custom `StorageManager` handles localStorage with quota management.

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
- **OpenAI**: Utilized for AI-powered calculator features.