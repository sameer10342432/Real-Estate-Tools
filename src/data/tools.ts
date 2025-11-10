export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string;
  path: string;
}

export const allTools: Tool[] = [
  // Basic Calculators (18 tools)
  {
    name: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments, interest, and amortization schedules',
    category: 'Basic Calculators',
    icon: '🏠',
    path: '/tools/mortgage-calculator'
  },
  {
    name: 'FHA Loan Calculator',
    description: 'Calculate FHA loan payments with low down payment (3.5%) and MIP costs',
    category: 'Basic Calculators',
    icon: '🏡',
    path: '/tools/fha-loan-calculator'
  },
  {
    name: 'VA Loan Calculator',
    description: 'Calculate VA loan payments with zero down for veterans and military',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/va-loan-calculator'
  },
  {
    name: 'USDA Loan Calculator',
    description: 'Calculate USDA rural loan payments with 100% financing',
    category: 'Basic Calculators',
    icon: '🌾',
    path: '/tools/usda-loan-calculator'
  },
  {
    name: 'Jumbo Loan Calculator',
    description: 'Calculate jumbo mortgage payments for luxury homes above $766,550',
    category: 'Basic Calculators',
    icon: '🏰',
    path: '/tools/jumbo-loan-calculator'
  },
  {
    name: 'FHA 203k Loan Calculator',
    description: 'Calculate FHA renovation loan combining purchase and rehab costs',
    category: 'Basic Calculators',
    icon: '🔧',
    path: '/tools/fha-203k-loan-calculator'
  },
  {
    name: 'Affordability Calculator',
    description: 'Determine how much house you can afford based on your income',
    category: 'Basic Calculators',
    icon: '💰',
    path: '/tools/affordability-calculator'
  },
  {
    name: 'Down Payment Calculator',
    description: 'Calculate required down payment and savings timeline',
    category: 'Basic Calculators',
    icon: '💳',
    path: '/tools/down-payment-calculator'
  },
  {
    name: 'PMI Calculator',
    description: 'Calculate private mortgage insurance costs and monthly payments',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/pmi-calculator'
  },
  {
    name: 'PMI Removal Calculator',
    description: 'Find out when you can cancel PMI and how much you will save',
    category: 'Basic Calculators',
    icon: '🗑️',
    path: '/tools/pmi-removal-calculator'
  },
  {
    name: 'FHA MIP Calculator',
    description: 'Calculate FHA mortgage insurance premium - upfront and annual costs',
    category: 'Basic Calculators',
    icon: '🛡️',
    path: '/tools/fha-mip-calculator'
  },
  {
    name: 'VA Loan Funding Fee Calculator',
    description: 'Calculate VA funding fee based on loan type and service history',
    category: 'Basic Calculators',
    icon: '💵',
    path: '/tools/va-loan-funding-fee-calculator'
  },
  {
    name: 'FHA vs Conventional Analyzer',
    description: 'Compare FHA and conventional loans side-by-side to find best option',
    category: 'Basic Calculators',
    icon: '⚖️',
    path: '/tools/fha-vs-conventional-loan-analyzer'
  },
  {
    name: 'Loan Eligibility Checker',
    description: 'Check your eligibility for different types of property loans',
    category: 'Basic Calculators',
    icon: '✅',
    path: '/tools/loan-eligibility-checker'
  },
  {
    name: 'Refinance Calculator',
    description: 'Analyze refinancing options and potential savings',
    category: 'Basic Calculators',
    icon: '🔄',
    path: '/tools/refinance-calculator'
  },
  {
    name: 'Amortization Schedule Calculator',
    description: 'Generate detailed loan amortization schedules',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/amortization-schedule-calculator'
  },
  {
    name: 'Property Tax Estimator',
    description: 'Estimate annual property taxes for any location',
    category: 'Basic Calculators',
    icon: '🏛️',
    path: '/tools/property-tax-estimator'
  },
  {
    name: 'HELOC Calculator',
    description: 'Estimate your Home Equity Line of Credit',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/heloc-calculator'
  },
  {
    name: 'VA vs. Conventional Loan Comparison',
    description: 'Compare VA and Conventional loans side-by-side to find the best mortgage option',
    category: 'Basic Calculators',
    icon: '⚖️',
    path: '/tools/va-vs-conventional-loan-comparison'
  },
  {
    name: 'USDA Loan Eligibility Checker',
    description: 'Check your eligibility for USDA rural development home loans',
    category: 'Basic Calculators',
    icon: '🌾',
    path: '/tools/usda-loan-eligibility-checker'
  },
  {
    name: 'FHA Loan Limit Finder',
    description: 'Find current FHA loan limits for your county and property type',
    category: 'Basic Calculators',
    icon: '💵',
    path: '/tools/fha-loan-limit-finder'
  },
  {
    name: 'VA Loan Entitlement Calculator',
    description: 'Calculate your available VA loan entitlement and maximum purchase price',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/va-loan-entitlement-calculator'
  },
  {
    name: 'Debt-to-Income (DTI) Ratio Calculator',
    description: 'Calculate your DTI ratio to determine mortgage eligibility',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/debt-to-income-calculator'
  },
  {
    name: 'Loan-to-Value (LTV) Calculator',
    description: 'Calculate your LTV ratio to determine equity and PMI requirements',
    category: 'Basic Calculators',
    icon: '📈',
    path: '/tools/loan-to-value-calculator'
  },
  {
    name: 'Mortgage Pre-Approval Calculator',
    description: 'Estimate your pre-approval amount based on income, debts, and credit',
    category: 'Basic Calculators',
    icon: '✅',
    path: '/tools/mortgage-pre-approval-calculator'
  },
  {
    name: 'Mortgage Rate by Credit Score Estimator',
    description: 'Estimate mortgage interest rates based on your credit score',
    category: 'Basic Calculators',
    icon: '💳',
    path: '/tools/mortgage-rate-credit-score-estimator'
  },
  {
    name: 'DTI Calculator for FHA Loans',
    description: 'Calculate DTI ratio specifically for FHA loan qualification',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/dti-calculator-fha-loans'
  },
  {
    name: 'DTI Calculator for VA Loans',
    description: 'Calculate debt-to-income ratio for VA loans with flexible 41% DTI allowance',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/dti-calculator-va-loans'
  },
  {
    name: 'DTI Calculator for Conventional Loans',
    description: 'Calculate DTI ratio for conventional loans with 43% standard limit',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/dti-calculator-conventional-loans'
  },
  {
    name: 'Front-End DTI Calculator',
    description: 'Calculate front-end debt-to-income ratio (housing ratio) - target 28% or lower',
    category: 'Basic Calculators',
    icon: '🏡',
    path: '/tools/frontend-dti-calculator'
  },
  {
    name: 'Back-End DTI Calculator',
    description: 'Calculate back-end debt-to-income ratio (total debt ratio) - target 43% or lower',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/backend-dti-calculator'
  },

  // Investment Analysis (39 tools)
  {
    name: 'BRRRR Calculator',
    description: 'Analyze Buy, Rehab, Rent, Refinance, and Repeat (BRRRR) deals',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/brrrr-calculator'
  },
  {
    name: 'Fix and Flip Calculator',
    description: 'Analyze the profitability of fix and flip projects',
    category: 'Investment Analysis',
    icon: '🔨',
    path: '/tools/fix-and-flip-calculator'
  },
  {
    name: 'Investment Property Calculator',
    description: 'Analyze the financial performance of an investment property',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/investment-property-calculator'
  },
  {
    name: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate for investments',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/compound-annual-growth-rate-calculator'
  },
  {
    name: 'Property Flipping ROI Calculator',
    description: 'Calculate the ROI and net profit of your property flipping projects',
    category: 'Investment Analysis',
    icon: '🏗️',
    path: '/tools/property-flipping-roi-calculator'
  },
  {
    name: 'Capital Gain Tax Calculator',
    description: 'Calculate the capital gain tax on your property investment',
    category: 'Investment Analysis',
    icon: '💸',
    path: '/tools/capital-gain-tax-calculator'
  },
  {
    name: 'Property ROI Calculator',
    description: 'Calculate the ROI for your property investment',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/property-roi-calculator'
  },
  {
    name: 'ROI Calculator',
    description: 'Calculate return on investment for property purchases',
    category: 'Investment Analysis',
    icon: '📊',
    path: '/tools/roi-calculator'
  },
  {
    name: 'Cash Flow Analyzer',
    description: 'Analyze monthly cash flow from rental properties',
    category: 'Investment Analysis',
    icon: '💵',
    path: '/tools/cash-flow-analyzer'
  },
  {
    name: 'ARV Calculator',
    description: 'Estimate the After Repair Value (ARV) of a property',
    category: 'Investment Analysis',
    icon: '🛠️',
    path: '/tools/arv-calculator'
  },
  {
    name: 'Cap Rate Calculator',
    description: 'Calculate capitalization rates for investment properties',
    category: 'Investment Analysis',
    icon: '🎯',
    path: '/tools/capitalization-rate-calculator'
  },
  {
    name: 'Cash-on-Cash Return Calculator',
    description: 'Calculate cash-on-cash returns for leveraged investments',
    category: 'Investment Analysis',
    icon: '💰',
    path: '/tools/cash-on-cash-return-calculator'
  },
  {
    name: 'Payback Period Calculator',
    description: 'Determine how long it will take to recover your initial investment',
    category: 'Investment Analysis',
    icon: '⏳',
    path: '/tools/payback-period-calculator'
  },
  {
    name: 'Investment Growth Simulator',
    description: 'Simulate long-term investment growth scenarios',
    category: 'Investment Analysis',
    icon: '🚀',
    path: '/tools/investment-growth-simulator'
  },
  {
    name: 'Break-Even Analysis Calculator',
    description: 'Calculate break-even points for property investments',
    category: 'Investment Analysis',
    icon: '⚖️',
    path: '/tools/break-even-analysis-calculator'
  },
  {
    name: 'Debt Service Coverage Calculator',
    description: 'Calculate debt service coverage ratios for commercial properties',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/debt-service-coverage-calculator'
  },
  {
    name: '1% Rule Calculator',
    description: 'Evaluate rental properties using the 1% rule',
    category: 'Investment Analysis',
    icon: '1️⃣',
    path: '/tools/1-percent-rule-calculator'
  },
  {
    name: '70% Rule Calculator',
    description: 'Calculate maximum purchase price for fix and flip properties',
    category: 'Investment Analysis',
    icon: '7️⃣',
    path: '/tools/70-percent-rule-calculator'
  },
  {
    name: '1031 Exchange Calculator',
    description: 'Analyze tax benefits of 1031 like-kind exchanges',
    category: 'Investment Analysis',
    icon: '🔁',
    path: '/tools/1031-exchange-calculator'
  },
  {
    name: 'Discounted Cash Flow Calculator',
    description: 'Calculate property value using DCF analysis',
    category: 'Investment Analysis',
    icon: '📉',
    path: '/tools/discounted-cash-flow-calculator'
  },
  {
    name: 'Loan to Value Calculator',
    description: 'Calculate LTV ratio for property financing',
    category: 'Investment Analysis',
    icon: '📊',
    path: '/tools/loan-to-value-calculator'
  },
  {
    name: 'Debt to Income Ratio Calculator',
    description: 'Calculate your debt-to-income ratio for loan qualification',
    category: 'Investment Analysis',
    icon: '💳',
    path: '/tools/debt-to-income-ratio-calculator'
  },
  {
    name: 'Internal Rate of Return Calculator',
    description: 'Calculate IRR for investment properties',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/internal-rate-of-return-calculator'
  },
  {
    name: 'Gross Rent Multiplier Calculator',
    description: 'Calculate GRM for quick property valuation',
    category: 'Investment Analysis',
    icon: '✖️',
    path: '/tools/gross-rent-multiplier-calculator'
  },
  {
    name: 'Hard Money Loan Calculator',
    description: 'Calculate hard money loan terms and costs',
    category: 'Investment Analysis',
    icon: '💰',
    path: '/tools/hard-money-loan-calculator'
  },
  {
    name: 'House Flip Analyzer',
    description: 'Analyze profitability and risks of house flipping',
    category: 'Investment Analysis',
    icon: '🏠',
    path: '/tools/house-flip-analyzer'
  },
  {
    name: 'Airbnb Host Fee Calculator',
    description: 'Calculate Airbnb host service fees, guest fees, and your actual net income after all platform charges',
    category: 'Investment Analysis',
    icon: '🏡',
    path: '/tools/airbnb-host-fee-calculator'
  },
  {
    name: 'Multi-Family Property Calculator (5+ Units)',
    description: 'Analyze multi-family apartment buildings with 5+ units including NOI, cap rate, cash flow, and ROI calculations',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/multi-family-property-calculator'
  },
  {
    name: 'Commercial Property ROI Calculator',
    description: 'Calculate return on investment for commercial properties including office buildings, retail centers, and industrial warehouses',
    category: 'Investment Analysis',
    icon: '🏬',
    path: '/tools/commercial-property-roi-calculator'
  },
  {
    name: 'Self-Storage Facility ROI Calculator',
    description: 'Calculate ROI for self-storage facilities including occupancy rates, rental income per unit, and operating expenses',
    category: 'Investment Analysis',
    icon: '🏪',
    path: '/tools/self-storage-facility-roi-calculator'
  },
  {
    name: 'Mobile Home Park Investment Calculator',
    description: 'Analyze mobile home park investments including lot rent, occupancy rates, infrastructure costs, and NOI calculations',
    category: 'Investment Analysis',
    icon: '🏕️',
    path: '/tools/mobile-home-park-investment-calculator'
  },
  {
    name: 'ADU ROI Calculator',
    description: 'Calculate return on investment for building an ADU including construction costs, rental income, and property value increase',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/adu-roi-calculator'
  },
  {
    name: 'Cost to Build ADU Estimator',
    description: 'Estimate total costs to build an ADU including design, permits, materials, labor, and site work based on size and type',
    category: 'Investment Analysis',
    icon: '💰',
    path: '/tools/cost-to-build-adu-estimator'
  },
  {
    name: 'Seller Financing Calculator',
    description: 'Calculate seller financing payments, interest, and cash flow for both buyers and sellers in owner-financed real estate deals',
    category: 'Investment Analysis',
    icon: '🤝',
    path: '/tools/seller-financing-calculator'
  },
  {
    name: '"Subject-To" Deal Analyzer',
    description: 'Analyze subject-to real estate deals where you acquire property while leaving existing mortgage in place',
    category: 'Investment Analysis',
    icon: '📝',
    path: '/tools/subject-to-deal-analyzer'
  },
  {
    name: 'Lease-Option (Rent-to-Own) Calculator',
    description: 'Calculate lease-option (rent-to-own) deals including option fees, rent credits, purchase price, and cash flow',
    category: 'Investment Analysis',
    icon: '🔑',
    path: '/tools/lease-option-calculator'
  },
  {
    name: 'Raw Land Investment Calculator',
    description: 'Calculate ROI, holding costs, and profit potential for raw land investments',
    category: 'Investment Analysis',
    icon: '🏞️',
    path: '/tools/raw-land-investment-calculator'
  },
  {
    name: 'Land Development Cost Calculator',
    description: 'Calculate subdivision, infrastructure, and development costs for raw land projects',
    category: 'Investment Analysis',
    icon: '🚧',
    path: '/tools/land-development-cost-calculator'
  },
  {
    name: 'Opportunity Zone (OZ) Investment Calculator',
    description: 'Calculate tax benefits from Qualified Opportunity Zone investments and deferrals',
    category: 'Investment Analysis',
    icon: '🎯',
    path: '/tools/opportunity-zone-calculator'
  },

  // Property Valuation (6 tools)
  {
    name: 'Property Valuation',
    description: 'Get accurate property valuations using multiple methods',
    category: 'Property Valuation',
    icon: '🏘️',
    path: '/tools/property-valuation'
  },
  {
    name: 'Property Comparison Tool',
    description: 'Compare multiple properties side by side',
    category: 'Property Valuation',
    icon: '🔍',
    path: '/tools/property-comparison-tool'
  },
  {
    name: 'Property Appreciation Calculator',
    description: 'Calculate historical and projected property appreciation',
    category: 'Property Valuation',
    icon: '📊',
    path: '/tools/property-appreciation-calculator'
  },
  {
    name: 'Depreciation Calculator',
    description: 'Calculate tax depreciation for investment properties',
    category: 'Property Valuation',
    icon: '📉',
    path: '/tools/depreciation-calculator'
  },
  {
    name: 'Property Equity Calculator',
    description: 'Track and analyze your property equity over time',
    category: 'Property Valuation',
    icon: '💎',
    path: '/tools/property-equity-calculator'
  },
  {
    name: 'Property Comparison',
    description: 'Advanced property comparison with detailed metrics',
    category: 'Property Valuation',
    icon: '⚖️',
    path: '/tools/property-comparison'
  },

  // Rental & Income (20 tools)
  {
    name: 'Rental Price Estimator',
    description: 'Estimate optimal rental prices for your property',
    category: 'Rental & Income',
    icon: '🏠',
    path: '/tools/rental-price-estimator'
  },
  {
    name: 'Rental Yield Calculator',
    description: 'Calculate gross and net rental yields',
    category: 'Rental & Income',
    icon: '💰',
    path: '/tools/rental-yield-calculator'
  },
  {
    name: 'Short-Term Rental Estimator',
    description: 'Estimate Airbnb and vacation rental income',
    category: 'Rental & Income',
    icon: '🏖️',
    path: '/tools/short-term-rental-estimator'
  },
  {
    name: 'Rental Income Tax Calculator',
    description: 'Calculate taxes on rental income and deductions',
    category: 'Rental & Income',
    icon: '📋',
    path: '/tools/rental-income-tax-calculator'
  },
  {
    name: 'Property Management Calculator',
    description: 'Calculate property management costs and fees',
    category: 'Rental & Income',
    icon: '🔧',
    path: '/tools/property-management-calculator'
  },
  {
    name: 'Tenant Screening Checklist',
    description: 'Comprehensive tenant screening and evaluation tool',
    category: 'Rental & Income',
    icon: '👥',
    path: '/tools/tenant-screening-checklist'
  },
  {
    name: 'Lease Agreement Generator',
    description: 'Generate comprehensive lease agreements for rental properties',
    category: 'Rental & Income',
    icon: '📝',
    path: '/tools/lease-agreement-generator'
  },
  {
    name: 'Maintenance Tracker',
    description: 'Track property maintenance costs and schedules',
    category: 'Rental & Income',
    icon: '🔨',
    path: '/tools/maintenance-tracker'
  },
  {
    name: 'Rent vs Buy Calculator',
    description: 'Compare the costs of renting versus buying',
    category: 'Rental & Income',
    icon: '🆚',
    path: '/tools/rent-vs-buy-calculator'
  },
  {
    name: 'House Hacking Calculator',
    description: 'Calculate net housing costs by house hacking - live in one unit, rent the others',
    category: 'Rental & Income',
    icon: '🏘️',
    path: '/tools/house-hacking-calculator'
  },
  {
    name: 'Live for Free Calculator',
    description: 'Calculate how to eliminate housing costs by renting out extra space in your home',
    category: 'Rental & Income',
    icon: '🆓',
    path: '/tools/live-for-free-calculator'
  },
  {
    name: 'Duplex House Hacking Analyzer',
    description: 'Analyze duplex house hacking - live in one unit, rent the other for reduced costs',
    category: 'Rental & Income',
    icon: '🏘️',
    path: '/tools/duplex-house-hacking-analyzer'
  },
  {
    name: 'Triplex House Hacking Analyzer',
    description: 'Analyze triplex opportunities - maximize cash flow with 3-unit house hacking',
    category: 'Rental & Income',
    icon: '🏘️',
    path: '/tools/triplex-house-hacking-analyzer'
  },
  {
    name: 'Quadplex House Hacking Analyzer',
    description: 'Analyze fourplex deals - maximum rental income from 4-unit house hacking',
    category: 'Rental & Income',
    icon: '🏘️',
    path: '/tools/quadplex-house-hacking-analyzer'
  },
  {
    name: 'Airbnb Income Estimator',
    description: 'Estimate monthly and annual Airbnb rental income with occupancy and fees',
    category: 'Rental & Income',
    icon: '🏠',
    path: '/tools/airbnb-income-estimator'
  },
  {
    name: 'VRBO Income Calculator',
    description: 'Calculate VRBO vacation rental income with commission and subscription fees',
    category: 'Rental & Income',
    icon: '🏖️',
    path: '/tools/vrbo-income-calculator'
  },
  {
    name: 'STR Occupancy Rate Calculator',
    description: 'Calculate short-term rental occupancy rates and optimize booking performance',
    category: 'Rental & Income',
    icon: '📊',
    path: '/tools/str-occupancy-rate-calculator'
  },
  {
    name: 'STR vs LTR Profitability Analyzer',
    description: 'Compare short-term rental vs. long-term rental profitability and ROI',
    category: 'Rental & Income',
    icon: '⚖️',
    path: '/tools/str-vs-ltr-profitability-analyzer'
  },
  {
    name: 'Airbnb Arbitrage Calculator',
    description: 'Calculate Airbnb arbitrage profits from subletting long-term rentals as STRs',
    category: 'Rental & Income',
    icon: '💼',
    path: '/tools/airbnb-arbitrage-calculator'
  },
  {
    name: 'Eviction Cost & Timeline Estimator',
    description: 'Estimate eviction costs, legal fees, and timeline for tenant removal by state',
    category: 'Rental & Income',
    icon: '⚖️',
    path: '/tools/eviction-cost-calculator'
  },

  // Market Analysis (6 tools)
  {
    name: 'Market Trend Analyzer',
    description: 'Analyze local real estate market trends and data',
    category: 'Market Analysis',
    icon: '📈',
    path: '/tools/market-trend-analyzer'
  },
  {
    name: 'School District Finder',
    description: 'Find and compare school districts for property locations',
    category: 'Market Analysis',
    icon: '🎓',
    path: '/tools/school-district-finder'
  },
  {
    name: 'Neighborhood Safety Score',
    description: 'Analyze neighborhood safety and crime statistics',
    category: 'Market Analysis',
    icon: '🛡️',
    path: '/tools/neighborhood-safety-score'
  },
  {
    name: 'Walkability & Commute Score',
    description: 'Evaluate walkability and commute options',
    category: 'Market Analysis',
    icon: '🚶',
    path: '/tools/walkability-commute-score'
  },
  {
    name: 'Real Estate Market Analysis Tool',
    description: 'Comprehensive market analysis and reporting',
    category: 'Market Analysis',
    icon: '🏙️',
    path: '/tools/real-estate-market-analysis-tool'
  },
  {
    name: 'Zoning Compliance Checker',
    description: 'Check zoning laws and compliance requirements',
    category: 'Market Analysis',
    icon: '📋',
    path: '/tools/zoning-compliance-checker'
  },

  // Financial Planning (13 tools)
  {
    name: 'Closing Costs Calculator',
    description: 'Calculate all closing costs for property purchases',
    category: 'Financial Planning',
    icon: '📄',
    path: '/tools/closing-cost-calculator'
  },
  {
    name: 'Stamp Duty Calculator',
    description: 'Calculate stamp duty and transfer taxes',
    category: 'Financial Planning',
    icon: '📜',
    path: '/tools/stamp-duty-calculator'
  },
  {
    name: 'Moving Cost Estimator',
    description: 'Estimate costs for relocating to a new property',
    category: 'Financial Planning',
    icon: '📦',
    path: '/tools/moving-cost-estimator'
  },
  {
    name: 'HOA Fee Calculator',
    description: 'Calculate and analyze HOA fees and assessments',
    category: 'Financial Planning',
    icon: '🏘️',
    path: '/tools/hoa-fee-calculator'
  },
  {
    name: 'Property Insurance Calculator',
    description: 'Calculate property insurance costs and coverage',
    category: 'Financial Planning',
    icon: '🛡️',
    path: '/tools/property-insurance-calculator'
  },
  {
    name: 'Commission Calculator',
    description: 'Calculate real estate agent commissions and fees',
    category: 'Financial Planning',
    icon: '💼',
    path: '/tools/commission-calculator'
  },
  {
    name: 'Energy Savings Calculator',
    description: 'Calculate energy efficiency savings and costs',
    category: 'Financial Planning',
    icon: '⚡',
    path: '/tools/energy-savings-calculator'
  },
  {
    name: 'Loan Amortization Calculator',
    description: 'Calculate loan amortization schedules',
    category: 'Financial Planning',
    icon: '📊',
    path: '/tools/loan-amortization-calculator'
  },
  {
    name: 'Home Renovation ROI Calculator',
    description: 'Calculate ROI for home renovation projects',
    category: 'Financial Planning',
    icon: '🏗️',
    path: '/tools/home-renovation-roi-calculator'
  },
  {
    name: 'NOI Calculator',
    description: 'Calculate Net Operating Income for properties',
    category: 'Financial Planning',
    icon: '💵',
    path: '/tools/noi-calculator'
  },
  {
    name: 'Credit Score Improvement Simulator (for Mortgage)',
    description: 'Simulate credit score improvements and see how different actions impact your mortgage',
    category: 'Financial Planning',
    icon: '📈',
    path: '/tools/credit-score-improvement-simulator'
  },
  {
    name: 'Rapid Rescore ROI Calculator',
    description: 'Calculate ROI on rapid credit rescoring - see if boosting score saves money',
    category: 'Financial Planning',
    icon: '📈',
    path: '/tools/rapid-rescore-roi-calculator'
  },
  {
    name: 'Points vs. No-Points Mortgage Calculator',
    description: 'Compare paying mortgage points upfront vs taking zero-points loan',
    category: 'Financial Planning',
    icon: '⚖️',
    path: '/tools/points-vs-no-points-calculator'
  },
  {
    name: 'Mortgage Discount Points Calculator',
    description: 'Calculate mortgage discount points cost, rate reduction, and breakeven period',
    category: 'Financial Planning',
    icon: '💰',
    path: '/tools/mortgage-discount-points-calculator'
  },
  {
    name: 'Rate-and-Term Refinance Calculator',
    description: 'Calculate refinance savings, breakeven period, and monthly payment reduction',
    category: 'Financial Planning',
    icon: '🔄',
    path: '/tools/rate-and-term-refinance-calculator'
  },
  {
    name: 'Cash-Out Refinance Calculator',
    description: 'Calculate how much cash you can extract from home equity and new payment',
    category: 'Financial Planning',
    icon: '💵',
    path: '/tools/cash-out-refinance-calculator'
  },
  {
    name: 'HELOC vs. Cash-Out Refinance Calculator',
    description: 'Compare HELOC and cash-out refinance side-by-side to determine best option',
    category: 'Financial Planning',
    icon: '⚖️',
    path: '/tools/heloc-vs-cashout-refinance-calculator'
  },
  {
    name: 'Homestead Exemption Calculator',
    description: 'Calculate property tax savings from homestead exemptions across different states',
    category: 'Financial Planning',
    icon: '🏠',
    path: '/tools/homestead-exemption-calculator'
  },
  {
    name: 'MACRS Depreciation Calculator',
    description: 'Calculate Modified Accelerated Cost Recovery System depreciation for rental property',
    category: 'Financial Planning',
    icon: '📉',
    path: '/tools/macrs-depreciation-calculator'
  },
  {
    name: 'Property Tax Appeal Analyzer',
    description: 'Determine if appealing your property tax assessment will save you money',
    category: 'Financial Planning',
    icon: '⚖️',
    path: '/tools/property-tax-appeal-analyzer'
  },

  // Risk Assessment (2 tools)
  {
    name: 'Construction Cost Estimator',
    description: 'Estimate construction and renovation costs',
    category: 'Risk Assessment',
    icon: '🏗️',
    path: '/tools/construction-cost-estimator'
  },
  {
    name: 'Renovation Cost Estimator',
    description: 'Estimate costs for property renovations and improvements',
    category: 'Risk Assessment',
    icon: '🔨',
    path: '/tools/renovation-cost-estimator'
  },

  // Advanced Analytics (5 tools)
  {
    name: 'Property Investment Metrics Dashboard',
    description: 'Comprehensive dashboard for investment property metrics',
    category: 'Advanced Analytics',
    icon: '📊',
    path: '/tools/property-investment-metrics-dashboard'
  },
  {
    name: 'Real Estate Portfolio Tracker',
    description: 'Track and manage your entire real estate portfolio',
    category: 'Advanced Analytics',
    icon: '📈',
    path: '/tools/real-estate-portfolio-tracker'
  },
  {
    name: 'Investment Property Comparison Tool',
    description: 'Advanced comparison tool for multiple investment properties',
    category: 'Advanced Analytics',
    icon: '⚖️',
    path: '/tools/investment-property-comparison-tool'
  },
  {
    name: 'New Construction Budget Calculator',
    description: 'Estimate total construction costs including materials, labor, permits, and contingency',
    category: 'Advanced Analytics',
    icon: '🏗️',
    path: '/tools/new-construction-budget-calculator'
  },
  {
    name: 'Cost to Build a House Estimator',
    description: 'Estimate home construction costs by quality level, size, and regional factors',
    category: 'Advanced Analytics',
    icon: '🏡',
    path: '/tools/cost-to-build-house-estimator'
  },

  // Additional Tools (2 tools)
  {
    name: 'Interior Design Estimator',
    description: 'Estimate interior design and furnishing costs',
    category: 'Additional Tools',
    icon: '🎨',
    path: '/tools/interior-design-estimator'
  },
  {
    name: 'Home Inspection Checklist',
    description: 'Comprehensive home inspection checklist and guide',
    category: 'Additional Tools',
    icon: '🔍',
    path: '/tools/home-inspection-checklist'
  },

  // Seller Tools (21 tools)
  {
    name: 'Net Proceeds from Home Sale Calculator',
    description: 'Calculate your net proceeds from selling your home after all costs, commissions, and fees',
    category: 'Seller Tools',
    icon: '💰',
    path: '/tools/net-proceeds-from-home-sale-calculator'
  },
  {
    name: "Seller's Net Sheet",
    description: 'Generate a comprehensive breakdown of all costs associated with selling your property',
    category: 'Seller Tools',
    icon: '📋',
    path: '/tools/sellers-net-sheet-calculator'
  },
  {
    name: 'Home Staging ROI Calculator',
    description: 'Calculate the return on investment for home staging to determine if professional staging is worth the cost',
    category: 'Seller Tools',
    icon: '🛋️',
    path: '/tools/home-staging-roi-calculator'
  },
  {
    name: 'Curb Appeal ROI Calculator',
    description: 'Calculate the return on investment for exterior home improvements to boost curb appeal and sale price',
    category: 'Seller Tools',
    icon: '🌳',
    path: '/tools/curb-appeal-roi-calculator'
  },
  {
    name: 'FSBO vs Agent Savings Calculator',
    description: 'Compare the costs and benefits of selling your home yourself (For Sale By Owner) versus using a real estate agent',
    category: 'Seller Tools',
    icon: '🏷️',
    path: '/tools/fsbo-vs-agent-savings-calculator'
  },
  {
    name: 'iBuyer vs Traditional Sale Calculator',
    description: 'Compare instant cash offers from iBuyers (Opendoor, Offerpad, Zillow) versus traditional home sales through an agent',
    category: 'Seller Tools',
    icon: '⚡',
    path: '/tools/ibuyer-vs-traditional-sale-calculator'
  },
  {
    name: 'Best Time to Sell Analyzer',
    description: 'Analyze market conditions and personal factors to determine the optimal time to sell your home',
    category: 'Seller Tools',
    icon: '📅',
    path: '/tools/best-time-to-sell-analyzer'
  },
  {
    name: 'Home Appraisal Value Calculator',
    description: 'Estimate your home\'s market value using multiple appraisal methods including comparable sales and square footage',
    category: 'Seller Tools',
    icon: '🏘️',
    path: '/tools/home-appraisal-value-calculator'
  },
  {
    name: 'Seller Closing Cost Estimator',
    description: 'Estimate all closing costs you\'ll pay as a seller, including agent commissions, title fees, and transfer taxes',
    category: 'Seller Tools',
    icon: '💵',
    path: '/tools/seller-closing-cost-estimator'
  },
  {
    name: 'Real Estate Agent Commission Split Calculator',
    description: 'Calculate commission splits between listing and buyer\'s agents, brokerages, and team members',
    category: 'Seller Tools',
    icon: '🤝',
    path: '/tools/real-estate-agent-commission-split-calculator'
  },
  {
    name: 'State-Specific Transfer Tax Calculator',
    description: 'Calculate real estate transfer taxes and recording fees by state',
    category: 'Seller Tools',
    icon: '📜',
    path: '/tools/transfer-tax-calculator'
  },
  {
    name: 'Texas Transfer Tax Calculator',
    description: 'Calculate Texas real estate transfer costs and county recording fees. Texas has no state transfer tax - learn actual closing costs',
    category: 'Seller Tools',
    icon: '🏛️',
    path: '/tools/texas-transfer-tax-calculator'
  },
  {
    name: 'Florida Transfer Tax (Doc Stamps) Calculator',
    description: 'Calculate Florida documentary stamp tax, intangible tax, and recording fees including Miami-Dade special rates',
    category: 'Seller Tools',
    icon: '🌴',
    path: '/tools/florida-transfer-tax-calculator'
  },
  {
    name: 'New York Transfer Tax Calculator',
    description: 'Calculate New York State transfer tax, NYC transfer tax, mansion tax, and mortgage recording tax',
    category: 'Seller Tools',
    icon: '🗽',
    path: '/tools/new-york-transfer-tax-calculator'
  },
  {
    name: 'Pennsylvania Transfer Tax Calculator',
    description: 'Calculate Pennsylvania state (1%) and local (1%) transfer tax including Philadelphia and Pittsburgh special rates',
    category: 'Seller Tools',
    icon: '🔔',
    path: '/tools/pennsylvania-transfer-tax-calculator'
  },
  {
    name: 'Illinois Transfer Tax Calculator',
    description: 'Calculate Illinois state transfer tax and Chicago city transfer tax including Cook County rates',
    category: 'Seller Tools',
    icon: '🌆',
    path: '/tools/illinois-transfer-tax-calculator'
  },
  {
    name: 'Ohio Transfer Tax Calculator',
    description: 'Calculate Ohio county conveyance fees by county. Ohio has no state transfer tax - only county fees',
    category: 'Seller Tools',
    icon: '🌰',
    path: '/tools/ohio-transfer-tax-calculator'
  },
  {
    name: 'Georgia Transfer Tax Calculator',
    description: 'Calculate Georgia state transfer tax (0.1%) and intangible recording tax (0.3%) for mortgages',
    category: 'Seller Tools',
    icon: '🍑',
    path: '/tools/georgia-transfer-tax-calculator'
  },
  {
    name: 'North Carolina Transfer Tax Calculator',
    description: 'Calculate North Carolina excise tax (0.2%) and recording fees. No county or city transfer taxes in NC',
    category: 'Seller Tools',
    icon: '🌲',
    path: '/tools/north-carolina-transfer-tax-calculator'
  },
  {
    name: 'Michigan Transfer Tax Calculator',
    description: 'Calculate Michigan state (0.75%) and county (0.11%) transfer tax for combined 0.86% rate',
    category: 'Seller Tools',
    icon: '🏞️',
    path: '/tools/michigan-transfer-tax-calculator'
  },
  {
    name: 'New Jersey Transfer Tax Calculator',
    description: 'Calculate New Jersey realty transfer fee (1%) and mansion tax (1% over $1M) for properties',
    category: 'Seller Tools',
    icon: '🌊',
    path: '/tools/new-jersey-transfer-tax-calculator'
  },
  {
    name: 'California Transfer Tax Calculator',
    description: 'Calculate California county and city transfer tax including San Francisco, Oakland, LA rates. Progressive rates up to 6% for luxury properties',
    category: 'Seller Tools',
    icon: '🏖️',
    path: '/tools/california-transfer-tax-calculator'
  },
  {
    name: 'Indiana Transfer Tax Calculator',
    description: 'Calculate Indiana real estate costs. No state transfer tax - only county recording fees. Learn actual Indiana closing costs',
    category: 'Seller Tools',
    icon: '🏁',
    path: '/tools/indiana-transfer-tax-calculator'
  },
  {
    name: 'Missouri Transfer Tax Calculator',
    description: 'Calculate Missouri real estate costs. No state transfer tax - only county recording fees for St. Louis, Kansas City, and all MO markets',
    category: 'Seller Tools',
    icon: '🎸',
    path: '/tools/missouri-transfer-tax-calculator'
  },
  {
    name: 'Maryland Transfer Tax Calculator',
    description: 'Calculate Maryland state (0.5%) and county (1.5%) transfer tax plus recordation tax for Baltimore and all MD counties',
    category: 'Seller Tools',
    icon: '🦀',
    path: '/tools/maryland-transfer-tax-calculator'
  },
  {
    name: 'Wisconsin Transfer Tax Calculator',
    description: 'Calculate Wisconsin state transfer fee (0.3%) for Milwaukee, Madison, and all WI counties',
    category: 'Seller Tools',
    icon: '🧀',
    path: '/tools/wisconsin-transfer-tax-calculator'
  },
  {
    name: 'Colorado Transfer Tax Calculator',
    description: 'Calculate Colorado county transfer fees. No state tax but varies by city. Includes Denver, Boulder, Aspen, Vail rates',
    category: 'Seller Tools',
    icon: '⛰️',
    path: '/tools/colorado-transfer-tax-calculator'
  },
  
  // Tax Strategy & Entity Planning (3 tools)
  {
    name: 'Real Estate Professional (REPs) Status Tax Benefit Calculator',
    description: 'Calculate potential tax benefits of qualifying as a Real Estate Professional under IRS rules and how it affects rental property losses',
    category: 'Tax Strategy & Entity Planning',
    icon: '👔',
    path: '/tools/reps-status-calculator'
  },
  {
    name: 'Cost Segregation Benefit Calculator',
    description: 'Estimate tax savings from cost segregation studies that accelerate depreciation deductions on commercial and residential rental properties',
    category: 'Tax Strategy & Entity Planning',
    icon: '📋',
    path: '/tools/cost-segregation-calculator'
  },
  {
    name: 'LLC vs. Sole Proprietorship (Real Estate) Analyzer',
    description: 'Compare LLC and Sole Proprietorship structures for real estate investing - analyze tax implications, liability protection, and administrative costs',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏢',
    path: '/tools/llc-vs-sole-proprietorship-analyzer'
  },
  
  // Market Analysis - Location Intelligence (7 tools)
  {
    name: 'FEMA Flood Zone Checker (by Address)',
    description: 'Check FEMA flood zone designation for any property address to assess flood risk and insurance requirements',
    category: 'Market Analysis',
    icon: '🌊',
    path: '/tools/fema-flood-zone-checker'
  },
  {
    name: 'Crime Rate by Address Analyzer',
    description: 'Analyze crime statistics and safety metrics for any neighborhood to assess property investment risk and tenant appeal',
    category: 'Market Analysis',
    icon: '🚨',
    path: '/tools/crime-rate-analyzer'
  },
  {
    name: 'School Rating by Address',
    description: 'Check school quality ratings and rankings for any address to assess family appeal and property value impact',
    category: 'Market Analysis',
    icon: '🎓',
    path: '/tools/school-rating-analyzer'
  },
  {
    name: 'Local Rent Control Law Finder (by City/State)',
    description: 'Search rent control laws and regulations by location to understand rental property restrictions, rent increase caps, and landlord obligations',
    category: 'Market Analysis',
    icon: '⚖️',
    path: '/tools/rent-control-law-finder'
  },
  {
    name: 'Property History Analyzer (Sales/Price)',
    description: 'Analyze property sales history, price trends, and transaction patterns to identify opportunities and assess appreciation potential',
    category: 'Market Analysis',
    icon: '📈',
    path: '/tools/property-history-analyzer'
  },
  {
    name: 'US ZIP Code Demographics Analyzer',
    description: 'Analyze ZIP code demographics including population, income, age, education, and housing data to identify target markets for investment',
    category: 'Market Analysis',
    icon: '📊',
    path: '/tools/zip-code-demographics-analyzer'
  },
  {
    name: 'Proximity to Amenities Calculator',
    description: 'Evaluate property location score based on proximity to key amenities including transit, schools, shopping, parks, and employment centers',
    category: 'Market Analysis',
    icon: '📍',
    path: '/tools/proximity-to-amenities-calculator'
  },

  // Market Analysis - Additional Location Tools (3 tools)
  {
    name: 'Local Property Tax Rate Finder (by County)',
    description: 'Find and compare local property tax rates by county across the United States. Research county, city, and school district tax rates before buying property',
    category: 'Market Analysis',
    icon: '🗺️',
    path: '/tools/local-property-tax-finder'
  },
  {
    name: 'Natural Disaster Risk Score (by Address)',
    description: 'Assess comprehensive natural disaster risks for any property including flood zones, earthquake risk, wildfire hazard, hurricane exposure, and tornado probability',
    category: 'Market Analysis',
    icon: '⚠️',
    path: '/tools/natural-disaster-risk-score'
  },
  {
    name: 'Environmental Hazard Checker',
    description: 'Check environmental hazards near properties including EPA Superfund sites, soil contamination, air quality issues, and toxic waste locations',
    category: 'Market Analysis',
    icon: '🌿',
    path: '/tools/environmental-hazard-checker'
  },

  // Additional Tools - Closing Costs & Fees (4 tools)
  {
    name: 'Title Insurance Cost Estimator',
    description: 'Estimate title insurance costs for home purchase including owner\'s policy, lender\'s policy, and optional endorsements based on purchase price and location',
    category: 'Additional Tools',
    icon: '📜',
    path: '/tools/title-insurance-cost-estimator'
  },
  {
    name: 'Home Appraisal Fee Estimator',
    description: 'Estimate home appraisal costs based on property type, size, location, and loan program (FHA, VA, conventional, jumbo)',
    category: 'Additional Tools',
    icon: '🏠',
    path: '/tools/home-appraisal-fee-estimator'
  },
  {
    name: 'Survey Cost Estimator',
    description: 'Estimate property survey costs based on lot size, terrain, survey type (boundary, ALTA, topographic), and access difficulty',
    category: 'Additional Tools',
    icon: '📐',
    path: '/tools/survey-cost-estimator'
  },
  {
    name: 'Legal Fee Estimator (Real Estate)',
    description: 'Estimate real estate attorney fees for property transactions including purchase, sale, refinance, contract review, and title work',
    category: 'Additional Tools',
    icon: '⚖️',
    path: '/tools/legal-fee-estimator'
  },

  // Additional Tools - AI-Powered Tools (7 tools)
  {
    name: 'AI Property Listing Description Generator',
    description: 'Generate professional, compelling property listing descriptions with AI assistance. Create engaging MLS listings that highlight features and attract buyers',
    category: 'Additional Tools',
    icon: '✨',
    path: '/tools/ai-property-listing-generator'
  },
  {
    name: 'AI Real Estate Blog Post Idea Generator',
    description: 'Generate creative real estate blog post ideas and content topics tailored to your market, audience, and expertise using AI assistance',
    category: 'Additional Tools',
    icon: '💡',
    path: '/tools/ai-blog-post-idea-generator'
  },
  {
    name: 'AI Renovation Idea Generator (by Photo)',
    description: 'Get AI-powered renovation ideas and design suggestions based on room type, style preferences, and budget constraints',
    category: 'Additional Tools',
    icon: '🎨',
    path: '/tools/ai-renovation-idea-generator'
  },
  {
    name: 'AI Zillow Listing Summary Tool',
    description: 'Automatically summarize Zillow property listings with key highlights, pros, cons, and investment potential using AI analysis',
    category: 'Additional Tools',
    icon: '🏘️',
    path: '/tools/ai-zillow-listing-summary-tool'
  },
  {
    name: 'AI "Ask a US Realtor" Bot',
    description: 'Get instant answers to real estate questions from an AI-powered realtor bot trained on US real estate laws, practices, and market insights',
    category: 'Additional Tools',
    icon: '🤖',
    path: '/tools/ai-ask-a-us-realtor-bot'
  },
  {
    name: 'California Property Tax Calculator (Prop 13)',
    description: 'Calculate California property taxes under Proposition 13 with 1% base rate plus local assessments and annual 2% increase cap',
    category: 'Financial Planning',
    icon: '🏖️',
    path: '/tools/california-property-tax-calculator'
  },
  {
    name: 'Texas Property Tax Calculator',
    description: 'Calculate Texas property taxes with no state income tax but variable county and school district rates. Includes homestead exemptions',
    category: 'Financial Planning',
    icon: '⭐',
    path: '/tools/texas-property-tax-calculator'
  }
];

export const categories = [
  'All Tools',
  'Basic Calculators',
  'Investment Analysis',
  'Property Valuation',
  'Rental & Income',
  'Market Analysis',
  'Financial Planning',
  'Risk Assessment',
  'Advanced Analytics',
  'Seller Tools',
  'Tax Strategy & Entity Planning',
  'Additional Tools'
];

export const getToolsByCategory = (category: string): Tool[] => {
  if (category === 'All Tools') {
    return allTools;
  }
  return allTools.filter(tool => tool.category === category);
};

export const getTotalToolsCount = (): number => {
  return allTools.length;
};

export const getCategoryCount = (category: string): number => {
  if (category === 'All Tools') {
    return allTools.length;
  }
  return allTools.filter(tool => tool.category === category).length;
};
