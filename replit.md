# Overview

Property Tools is a comprehensive Next.js web application offering 677 interactive calculators and extensive educational content for real estate professionals, investors, and homebuyers. It covers a broad spectrum of real estate domains, including mortgage analysis, investment evaluation, tax calculations, seller and agent tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, location-specific insights, sustainability, legal & compliance, construction, and AI-powered content. The platform features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project's vision is to become a leading resource in real estate analytics, empowering informed decisions and capturing a significant share of the property technology market.

# Recent Changes

## November 24, 2025 - Added 10 Advanced Tax Strategy Calculators
- **Mansion Tax Calculator (NY, NJ, CT)**: Calculate luxury property transfer taxes for high-value real estate purchases in New York, New Jersey, and Connecticut with state-specific thresholds and rates.
- **Capital Gains vs Ordinary Income Calculator**: Compare tax implications of short-term vs long-term holding periods for house flipping and determine the most tax-efficient investment strategy.
- **Section 121 Primary Residence Exclusion Calculator**: Calculate capital gains tax exclusion on primary residence sales under IRS Section 121, determining eligibility for up to $500,000 tax-free gain.
- **Unmarried Partners Section 121 Calculator**: Calculate individual Section 121 exclusions for unmarried couples who co-own a primary residence with separate ownership interests.
- **Recaptured Depreciation Calculator**: Calculate depreciation recapture tax at 25% when selling rental properties, accounting for previously claimed depreciation deductions.
- **Passive Activity Loss (PAL) Calculator**: Determine deductible passive activity losses from rental real estate based on income level and active participation status.
- **Material Participation Test Calculator**: Evaluate whether rental activities meet one of seven IRS material participation tests to avoid passive activity loss limitations.
- **Real Estate Professional Qualifier**: Determine if you qualify as a real estate professional under IRS rules to deduct unlimited rental losses against ordinary income.
- **Short-Term Rental Tax Loophole Calculator**: Calculate tax benefits from the short-term rental strategy, determining if properties qualify for non-passive treatment and immediate loss deductions.
- **Augusta Rule (14-Day Rental) Tax Calculator**: Calculate tax-free rental income under Section 280A, allowing up to 14 days of rental income without tax obligations.

## November 24, 2025 - Added 10 Financial & State-Specific Tax Calculators
- **Debt Yield Calculator (Commercial)**: Calculate commercial real estate debt yield to assess lender risk and property performance independent of interest rates.
- **Fixed Asset Turnover Calculator**: Measure how efficiently a real estate company uses its property assets to generate revenue.
- **Solvency Ratio Calculator (Real Estate)**: Evaluate long-term financial health and ability to meet long-term debt obligations.
- **Liquidity Ratio Calculator (Real Estate)**: Assess short-term financial health and ability to cover immediate liabilities.
- **Quick Ratio Calculator (Real Estate)**: Calculate the most conservative liquidity measure excluding inventory and prepaid expenses.
- **California Prop 13 Tax Calculator**: Calculate property tax under California's Proposition 13 with 2% annual cap and reassessment rules.
- **Texas Homestead Cap Loss Calculator**: Estimate property tax savings under Texas homestead exemption with 10% cap loss limit.
- **Florida Save Our Homes Calculator**: Calculate property tax benefits under Florida's Save Our Homes amendment with 3% cap.
- **NYC 421-a Tax Abatement Estimator**: Estimate tax abatement benefits for new residential construction in New York City.
- **Illinois Senior Freeze Exemption Calculator**: Calculate property tax freeze benefits for eligible Illinois seniors.

## November 23, 2025 - Added 10 Advanced Investment Analysis Calculators
- **Correlation Calculator (Real Estate vs. Bonds)**: Analyze the correlation between real estate and bond investments to optimize portfolio diversification strategies.
- **Monte Carlo Simulator (Real Estate)**: Run probabilistic simulations to understand investment outcomes and risk probabilities.
- **Sensitivity Analysis (Cap Rate)**: Analyze how cap rate changes affect property valuation and investment returns.
- **Sensitivity Analysis (Rent Growth)**: Project future rental income and property values under different rent growth scenarios.
- **Sensitivity Analysis (Vacancy Rate)**: Assess how vacancy rate fluctuations impact NOI and cash flow.
- **Breakeven Vacancy Rate Calculator**: Calculate the maximum vacancy rate a property can sustain before becoming cash flow negative.
- **Breakeven Rent Per Sq. Ft. Calculator**: Determine minimum rent per square foot needed to achieve target cash flow.
- **Hurdle Rate Calculator (Real Estate)**: Calculate minimum acceptable return rates based on risk and opportunity cost.
- **Equity Multiple Calculator**: Measure total investment return as a multiple of initial equity invested.
- **Loan Constant Calculator**: Evaluate financing terms by calculating annual debt service as a percentage of loan amount.

## November 23, 2025 - Added 10 Commercial Real Estate Calculators
- **CAM Fee Calculator**: Calculate Common Area Maintenance fees for commercial leases with pro-rata share calculations.
- **Loss Factor Calculator**: Determine the difference between rentable and usable square footage in commercial properties.
- **Rentable vs Usable Square Footage Calculator**: Compare load factors and calculate true cost per usable square foot.
- **Parking Ratio Calculator**: Calculate parking requirements for commercial properties (spaces per 1,000 SF).
- **Tenant Improvement (TI) Allowance Calculator**: Estimate buildout costs and TI contributions for commercial leases.
- **Percentage Rent Calculator**: Calculate retail lease percentage rent with breakpoint and overage calculations.
- **Net Effective Rent Calculator**: Determine true lease value factoring in concessions and free rent periods.
- **EBITDA Calculator**: Analyze property operating performance with comprehensive EBITDA calculations.
- **NOI Calculator**: Enhanced Net Operating Income calculator with detailed expense breakdowns.
- **IRR Calculator**: Calculate Internal Rate of Return for real estate investment analysis.

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
- **Calculator Content**: Centralized data system (`src/content/tools/`) serves as a single source of truth for all 677 calculators across various categories, including specialized tools for commercial real estate, state-specific taxes, location intelligence, estate planning, agent tools, sustainability, legal & compliance, tax strategy & entity planning, market analysis, and AI-powered content. Each entry includes title, description, icon, category, slug, article, and calculation logic.

## Core Features
- **Calculator System**: Modular architecture supporting 677 professional tools with features like what-if analysis, real-time updates, search/filter, and responsive UI, including text-based qualitative assessments.
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