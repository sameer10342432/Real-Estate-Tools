export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string;
  path: string;
}

export const allTools: Tool[] = [
  // Basic Calculators (50 tools)
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
    path: '/tools/dti-calculator-for-fha-loans'
  },
  {
    name: 'DTI Calculator for VA Loans',
    description: 'Calculate debt-to-income ratio for VA loans with flexible 41% DTI allowance',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/dti-calculator-for-va-loans'
  },
  {
    name: 'DTI Calculator for Conventional Loans',
    description: 'Calculate DTI ratio for conventional loans with 43% standard limit',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/dti-calculator-for-conventional-loans'
  },
  {
    name: 'Front-End DTI Calculator',
    description: 'Calculate front-end debt-to-income ratio (housing ratio) - target 28% or lower',
    category: 'Basic Calculators',
    icon: '🏡',
    path: '/tools/front-end-dti-calculator'
  },
  {
    name: 'Back-End DTI Calculator',
    description: 'Calculate back-end debt-to-income ratio (total debt ratio) - target 43% or lower',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/back-end-dti-calculator'
  },
  {
    name: 'VA Monthly Payment Calculator',
    description: 'Calculate monthly VA loan payments with funding fee, taxes, and insurance',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/va-monthly-payment-calculator'
  },
  {
    name: 'USDA Monthly Payment Calculator',
    description: 'Calculate monthly USDA loan payments with 100% financing and guarantee fees',
    category: 'Basic Calculators',
    icon: '🌾',
    path: '/tools/usda-monthly-payment-calculator'
  },
  {
    name: 'Jumbo Loan Monthly Payment Calculator',
    description: 'Calculate monthly payments for jumbo loans above conforming limits',
    category: 'Basic Calculators',
    icon: '🏰',
    path: '/tools/jumbo-loan-monthly-payment-calculator'
  },
  {
    name: 'FHA MIP vs. Conventional PMI Calculator',
    description: 'Compare FHA mortgage insurance vs conventional PMI costs side-by-side',
    category: 'Basic Calculators',
    icon: '⚖️',
    path: '/tools/fha-mip-vs-conventional-pmi-calculator'
  },
  {
    name: 'Conforming Loan Limit Checker',
    description: 'Check 2024 conforming loan limits by county ($766,550 to $1,149,825)',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/conforming-loan-limit-checker'
  },
  {
    name: 'FHA Loan Down Payment Assistance Calculator',
    description: 'Calculate available down payment assistance programs and grants for FHA loans',
    category: 'Basic Calculators',
    icon: '💰',
    path: '/tools/fha-loan-down-payment-assistance-calculator'
  },
  {
    name: 'VA Loan Certificate of Eligibility (COE) Checker',
    description: 'Check VA loan eligibility requirements and how to get your COE',
    category: 'Basic Calculators',
    icon: '✅',
    path: '/tools/va-loan-coe-checker'
  },
  {
    name: 'Remaining VA Loan Entitlement Calculator',
    description: 'Calculate remaining VA entitlement and maximum purchase price for second home',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/remaining-va-loan-entitlement-calculator'
  },
  {
    name: 'Seller Concessions Calculator (FHA)',
    description: 'Calculate FHA seller concessions up to 6% of sales price for closing costs',
    category: 'Basic Calculators',
    icon: '💵',
    path: '/tools/seller-concessions-calculator-fha'
  },
  {
    name: 'Seller Concessions Calculator (VA)',
    description: 'Calculate VA seller concessions up to 4% of sales price to reduce costs',
    category: 'Basic Calculators',
    icon: '💳',
    path: '/tools/seller-concessions-calculator-va'
  },
  {
    name: '5/1 ARM vs. 30-Year Fixed Calculator',
    description: 'Compare a 5/1 ARM with a 30-year fixed mortgage to find the best loan option',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/5-1-arm-vs-30-year-fixed-calculator'
  },
  {
    name: '7/1 ARM vs. 30-Year Fixed Calculator',
    description: 'Compare a 7/1 ARM with a 30-year fixed mortgage over your ownership period',
    category: 'Basic Calculators',
    icon: '📈',
    path: '/tools/7-1-arm-vs-30-year-fixed-calculator'
  },
  {
    name: 'Interest-Only Mortgage Calculator',
    description: 'Calculate interest-only mortgage payments and understand payment shock risks',
    category: 'Basic Calculators',
    icon: '💸',
    path: '/tools/interest-only-mortgage-calculator'
  },
  {
    name: 'Balloon Mortgage Calculator',
    description: 'Calculate balloon mortgage payments and balloon payment amounts',
    category: 'Basic Calculators',
    icon: '🎈',
    path: '/tools/balloon-mortgage-calculator'
  },
  {
    name: 'Bridge Loan Calculator',
    description: 'Calculate bridge loan costs and fees for temporary real estate financing',
    category: 'Basic Calculators',
    icon: '🌉',
    path: '/tools/bridge-loan-calculator'
  },
  {
    name: 'Bank Statement Loan Calculator',
    description: 'Calculate mortgage qualification for self-employed using bank statements',
    category: 'Basic Calculators',
    icon: '📄',
    path: '/tools/bank-statement-loan-calculator'
  },
  {
    name: '1099 Earner Mortgage Qualifier',
    description: 'Calculate mortgage qualification for 1099 contractors and freelancers',
    category: 'Basic Calculators',
    icon: '📋',
    path: '/tools/1099-earner-mortgage-qualifier'
  },
  {
    name: 'W-2 Earner Mortgage Qualifier',
    description: 'Calculate mortgage qualification for W-2 employees with salary and bonuses',
    category: 'Basic Calculators',
    icon: '💼',
    path: '/tools/w2-earner-mortgage-qualifier'
  },

  // Investment Analysis (50 tools)
  {
    name: 'BRRRR Calculator',
    description: 'Analyze Buy, Rehab, Rent, Refinance, and Repeat (BRRRR) deals',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/brrrr-calculator'
  },
  {
    name: 'AI "What If" Scenario Planner (Investment)',
    description: 'Model and compare multiple investment scenarios with AI-powered projections, risk analysis, and recommendations',
    category: 'Investment Analysis',
    icon: '🎯',
    path: '/tools/ai-what-if-scenario-planner'
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
  {
    name: 'Commercial Real Estate Loan Calculator',
    description: 'Calculate monthly payments, total costs, and amortization for commercial property loans',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/commercial-real-estate-loan-calculator'
  },
  {
    name: 'Apartment Building ROI Calculator',
    description: 'Calculate return on investment for multifamily apartment buildings with detailed income, expense, and financing analysis',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/apartment-building-roi-calculator'
  },
  {
    name: 'Hotel/Motel Investment Analyzer',
    description: 'Analyze hotel and motel investments with occupancy rates, RevPAR, ADR, and comprehensive financial projections',
    category: 'Investment Analysis',
    icon: '🏨',
    path: '/tools/hotel-motel-investment-analyzer'
  },
  {
    name: 'Retail Strip Mall ROI Calculator',
    description: 'Analyze strip mall and retail center investments with detailed tenant mix, lease analysis, and return calculations',
    category: 'Investment Analysis',
    icon: '🛍️',
    path: '/tools/retail-strip-mall-roi-calculator'
  },
  {
    name: 'Office Building Investment Calculator',
    description: 'Evaluate office building investments with tenant mix analysis, lease structures, and comprehensive financial modeling',
    category: 'Investment Analysis',
    icon: '🏬',
    path: '/tools/office-building-investment-calculator'
  },
  {
    name: 'Warehouse/Industrial Property Calculator',
    description: 'Analyze warehouse, distribution center, and industrial property investments with lease analysis and return calculations',
    category: 'Investment Analysis',
    icon: '🏭',
    path: '/tools/warehouse-industrial-property-calculator'
  },
  {
    name: 'Build-to-Suit Development Calculator',
    description: 'Analyze build-to-suit development projects with construction costs, tenant lease analysis, and developer returns',
    category: 'Investment Analysis',
    icon: '🏗️',
    path: '/tools/build-to-suit-development-calculator'
  },
  {
    name: 'Real Estate Syndication Waterfall Calculator',
    description: 'Calculate syndication waterfall distributions with preferred returns, catch-up provisions, and promote structures',
    category: 'Investment Analysis',
    icon: '💧',
    path: '/tools/real-estate-syndication-waterfall-calculator'
  },
  {
    name: 'Syndication Deal Equity Split Calculator',
    description: 'Calculate equity ownership splits, capital contributions, and profit distributions for real estate syndication partnerships',
    category: 'Investment Analysis',
    icon: '🤝',
    path: '/tools/syndication-deal-equity-split-calculator'
  },
  {
    name: 'Real Estate Fund Fee Calculator',
    description: 'Calculate total fees, net returns, and fee impact for real estate funds including management fees and performance fees',
    category: 'Investment Analysis',
    icon: '💼',
    path: '/tools/real-estate-fund-fee-calculator'
  },
  {
    name: 'Land Banking ROI Calculator',
    description: 'Calculate returns on land banking investments including appreciation, holding costs, and exit strategies for raw land speculation',
    category: 'Investment Analysis',
    icon: '🏞️',
    path: '/tools/land-banking-roi-calculator'
  },
  {
    name: 'Land Subdivision Cost Estimator',
    description: 'Estimate total costs and profitability for subdividing raw land into individual lots including infrastructure, permitting, and development expenses',
    category: 'Investment Analysis',
    icon: '🗺️',
    path: '/tools/land-subdivision-cost-estimator'
  },
  {
    name: 'Zoning Variance Feasibility Checker',
    description: 'Analyze the feasibility and financial impact of pursuing zoning variances for real estate development projects including costs, timeline, and approval probability',
    category: 'Investment Analysis',
    icon: '📋',
    path: '/tools/zoning-variance-feasibility-checker'
  },
  {
    name: 'Highest and Best Use Analyzer (Land)',
    description: 'Determine the most profitable use for raw land by comparing residential, commercial, industrial, and agricultural development scenarios',
    category: 'Investment Analysis',
    icon: '🎯',
    path: '/tools/highest-and-best-use-analyzer'
  },
  {
    name: 'Cost to Clear Land Estimator',
    description: 'Estimate land clearing costs including tree removal, brush clearing, grading, and debris disposal for development projects',
    category: 'Investment Analysis',
    icon: '🌳',
    path: '/tools/cost-to-clear-land-estimator'
  },
  {
    name: 'Timber Land Investment Calculator',
    description: 'Calculate returns on timberland investments including timber growth, harvest revenue, land appreciation, and recreational income',
    category: 'Investment Analysis',
    icon: '🌲',
    path: '/tools/timber-land-investment-calculator'
  },
  {
    name: 'Farm/Agricultural Land ROI Calculator',
    description: 'Calculate returns on farmland investments including crop income, land appreciation, government payments, and tax benefits',
    category: 'Investment Analysis',
    icon: '🚜',
    path: '/tools/farm-agricultural-land-roi-calculator'
  },
  {
    name: 'Water Rights Value Estimator',
    description: 'Estimate the value of water rights for agricultural, commercial, or municipal use based on acre-feet, priority date, and market conditions',
    category: 'Investment Analysis',
    icon: '💧',
    path: '/tools/water-rights-value-estimator'
  },
  {
    name: 'Mineral Rights Value Estimator',
    description: 'Estimate the value of mineral rights including oil, gas, coal, and other subsurface resources based on reserves, production, and royalty rates',
    category: 'Investment Analysis',
    icon: '⛏️',
    path: '/tools/mineral-rights-value-estimator'
  },
  {
    name: 'Student Housing Investment Calculator',
    description: 'Calculate returns on student housing investments including rental income, occupancy rates, turnover costs, and cash flow for properties near universities',
    category: 'Investment Analysis',
    icon: '🎓',
    path: '/tools/student-housing-investment-calculator'
  },
  {
    name: 'Ground Lease Calculator',
    description: 'Calculate ground lease payments, land value analysis, and long-term investment returns for ground lease transactions',
    category: 'Investment Analysis',
    icon: '🏗️',
    path: '/tools/ground-lease-calculator'
  },
  {
    name: 'Home Equity to Invest Calculator',
    description: 'Analyze the potential returns and risks of using home equity to invest in stocks, real estate, or other assets',
    category: 'Investment Analysis',
    icon: '🏡',
    path: '/tools/home-equity-to-invest-calculator'
  },
  {
    name: '401k vs. Real Estate Investment Analyzer',
    description: 'Compare retirement savings potential between 401k investing and real estate property investments',
    category: 'Investment Analysis',
    icon: '📊',
    path: '/tools/401k-vs-real-estate-analyzer'
  },
  {
    name: 'Stocks vs. Real Estate (Historical) Analyzer',
    description: 'Compare historical returns between stock market investments and real estate properties over different time periods',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/stocks-vs-real-estate-historical-analyzer'
  },
  {
    name: 'REIT vs. Direct Ownership Calculator',
    description: 'Compare returns, liquidity, and effort between REIT investments and directly owning rental properties',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/reit-vs-direct-ownership-calculator'
  },
  {
    name: 'Real Estate Portfolio Diversification Score',
    description: 'Assess your real estate portfolio risk and diversification across property types, locations, and tenant classes',
    category: 'Investment Analysis',
    icon: '📊',
    path: '/tools/real-estate-portfolio-diversification-score'
  },
  {
    name: 'Inflation Hedge Calculator (Real Estate)',
    description: 'Calculate how real estate protects your wealth against inflation compared to cash and bonds',
    category: 'Investment Analysis',
    icon: '💹',
    path: '/tools/inflation-hedge-real-estate-calculator'
  },
  {
    name: '"Bunk Bed" Investment Calculator (High-Density Rentals)',
    description: 'Analyze high-density rental investments with bunk bed configurations to maximize rental income per square foot',
    category: 'Investment Analysis',
    icon: '🛏️',
    path: '/tools/bunk-bed-investment-calculator'
  },
  {
    name: 'Co-Living Space ROI Calculator',
    description: 'Calculate the return on investment for co-living properties with private bedrooms and shared common areas',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/co-living-space-roi-calculator'
  },
  {
    name: 'Furnished vs. Unfurnished Rental ROI',
    description: 'Compare the return on investment between furnished and unfurnished rental properties to maximize rental income',
    category: 'Investment Analysis',
    icon: '🛋️',
    path: '/tools/furnished-vs-unfurnished-rental-roi'
  },
  {
    name: 'Corporate Housing Rental Calculator',
    description: 'Analyze the profitability of corporate housing rentals for business travelers and relocating professionals',
    category: 'Investment Analysis',
    icon: '💼',
    path: '/tools/corporate-housing-rental-calculator'
  },
  {
    name: 'Travel Nurse Housing Investment Analyzer',
    description: 'Analyze rental property investments targeting travel nurses and medical professionals on temporary assignments',
    category: 'Investment Analysis',
    icon: '⚕️',
    path: '/tools/travel-nurse-housing-investment-analyzer'
  },
  {
    name: 'Military (PCS) Move Rent vs. Buy Calculator',
    description: 'Help military families decide whether to rent or buy during a PCS (Permanent Change of Station) move',
    category: 'Basic Calculators',
    icon: '🎖️',
    path: '/tools/military-pcs-move-rent-vs-buy-calculator'
  },
  {
    name: 'BAH (Basic Allowance for Housing) vs. Mortgage',
    description: 'Compare military BAH against mortgage payments to determine affordable home prices and maximize housing benefits',
    category: 'Basic Calculators',
    icon: '🏠',
    path: '/tools/bah-vs-mortgage-calculator'
  },
  {
    name: 'VA Loan Assumption Benefit Calculator',
    description: 'Calculate the financial benefits of assuming an existing VA loan with a lower interest rate versus getting a new mortgage',
    category: 'Basic Calculators',
    icon: '📋',
    path: '/tools/va-loan-assumption-benefit-calculator'
  },
  {
    name: 'Downsizing Savings Calculator (Retirement)',
    description: 'Calculate the financial benefits of downsizing your home in retirement to reduce expenses and free up equity',
    category: 'Basic Calculators',
    icon: '🏡',
    path: '/tools/downsizing-savings-calculator'
  },
  {
    name: 'Upsizing Affordability Calculator',
    description: 'Determine if you can afford to upsize to a larger home and calculate the financial impact on your budget',
    category: 'Basic Calculators',
    icon: '🏠',
    path: '/tools/upsizing-affordability-calculator'
  },

  // FIRE Calculators (4 tools)
  {
    name: 'FIRE with Real Estate Calculator',
    description: 'Calculate when you can achieve Financial Independence and Retire Early using rental property income',
    category: 'FIRE Calculators',
    icon: '🔥',
    path: '/tools/fire-with-real-estate-calculator'
  },
  {
    name: 'Coast FIRE with Real Estate Calculator',
    description: 'Calculate when your rental properties will grow enough to support retirement without additional contributions',
    category: 'FIRE Calculators',
    icon: '🏖️',
    path: '/tools/coast-fire-real-estate-calculator'
  },
  {
    name: 'Barista FIRE with Real Estate Calculator',
    description: 'Calculate how rental income combined with part-time work can achieve early semi-retirement',
    category: 'FIRE Calculators',
    icon: '☕',
    path: '/tools/barista-fire-real-estate-calculator'
  },
  {
    name: 'Fat FIRE with Real Estate Calculator',
    description: 'Calculate path to luxury retirement with high-end rental properties and premium lifestyle expenses',
    category: 'FIRE Calculators',
    icon: '💎',
    path: '/tools/fat-fire-real-estate-calculator'
  },

  // Property Valuation (7 tools)
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
  {
    name: 'Air Rights Value Estimator',
    description: 'Estimate the value of air rights, calculate transferable development rights (TDR), and analyze vertical development opportunities',
    category: 'Property Valuation',
    icon: '🏙️',
    path: '/tools/air-rights-value-estimator'
  },

  // Rental & Income (35 tools)
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
  {
    name: "Landlord's Monthly Cash Flow Tracker",
    description: 'Track monthly rental income and expenses, calculate net cash flow, monitor property performance, and analyze landlord profitability',
    category: 'Rental & Income',
    icon: '💰',
    path: '/tools/landlord-monthly-cash-flow-tracker'
  },
  {
    name: 'Rental Property Expense Tracker',
    description: 'Track and categorize all rental property expenses, calculate tax deductions, analyze spending by category, and generate annual expense summaries',
    category: 'Rental & Income',
    icon: '📊',
    path: '/tools/rental-property-expense-tracker'
  },
  {
    name: 'Security Deposit Interest Calculator (by State)',
    description: 'Calculate required security deposit interest by state, determine interest rates, holding requirements, and landlord obligations for tenant deposits',
    category: 'Rental & Income',
    icon: '🏦',
    path: '/tools/security-deposit-interest-calculator'
  },
  {
    name: 'Prorated Rent Calculator',
    description: 'Calculate prorated rent for partial months, mid-month move-ins/move-outs, daily rent rates, and proportional rent adjustments',
    category: 'Rental & Income',
    icon: '📅',
    path: '/tools/prorated-rent-calculator'
  },
  {
    name: 'Move-In/Move-Out Inspection Checklist Generator',
    description: 'Generate comprehensive property inspection checklists, document condition, protect security deposits, and prevent tenant disputes',
    category: 'Rental & Income',
    icon: '📋',
    path: '/tools/move-in-move-out-inspection-checklist'
  },
  {
    name: 'Preventive Maintenance ROI Calculator',
    description: 'Calculate ROI on preventive maintenance programs, compare costs vs emergency repairs, and optimize maintenance schedules for maximum savings',
    category: 'Rental & Income',
    icon: '🔧',
    path: '/tools/preventive-maintenance-roi-calculator'
  },
  {
    name: 'CapEx Reserve Calculator',
    description: 'Calculate capital expenditure reserves for rental properties, plan for major repairs, and ensure adequate funding for property improvements',
    category: 'Rental & Income',
    icon: '💰',
    path: '/tools/capex-reserve-calculator'
  },
  {
    name: '5/10 Rule for Rental Property Maintenance',
    description: 'Apply the 5/10 maintenance rule to budget property upkeep, estimate annual costs, and plan for repairs and replacements',
    category: 'Rental & Income',
    icon: '📐',
    path: '/tools/5-10-rule-rental-maintenance'
  },
  {
    name: 'Appliance Depreciation Calculator (for Landlords)',
    description: 'Calculate appliance depreciation for rental properties, track useful life, plan replacements, and optimize tax deductions',
    category: 'Rental & Income',
    icon: '🏠',
    path: '/tools/appliance-depreciation-calculator-landlords'
  },
  {
    name: 'Tenant Buyout Calculator (Rent Stabilized)',
    description: 'Calculate tenant buyout offers for rent-stabilized apartments, analyze costs vs benefits, and negotiate fair buyout agreements',
    category: 'Rental & Income',
    icon: '🤝',
    path: '/tools/tenant-buyout-calculator-rent-stabilized'
  },
  {
    name: 'Section 8 Housing Rent Calculator (FMR)',
    description: 'Calculate Section 8 housing rent based on Fair Market Rent, determine payment standards, and optimize rental income for subsidized housing',
    category: 'Rental & Income',
    icon: '🏘️',
    path: '/tools/section-8-housing-rent-calculator'
  },
  {
    name: 'Fair Market Rent (FMR) Finder (by County)',
    description: 'Find Fair Market Rent rates by county, compare HUD FMR data, and analyze rental pricing for Section 8 and market-rate properties',
    category: 'Rental & Income',
    icon: '🗺️',
    path: '/tools/fair-market-rent-finder-by-county'
  },
  {
    name: 'Rental Vacancy Rate Calculator',
    description: 'Calculate rental property vacancy rates, analyze market conditions, and optimize pricing strategies to minimize vacant periods',
    category: 'Rental & Income',
    icon: '📊',
    path: '/tools/rental-vacancy-rate-calculator'
  },
  {
    name: 'Rental Unit Breakeven Occupancy Rate',
    description: 'Calculate breakeven occupancy rate for rental properties, determine minimum occupancy needed for profitability, and optimize pricing',
    category: 'Rental & Income',
    icon: '⚖️',
    path: '/tools/rental-unit-breakeven-occupancy-rate'
  },
  {
    name: 'Lease Renewal Increase Calculator',
    description: 'Calculate optimal lease renewal rent increases, analyze market rates, tenant retention costs, and maximize rental income while minimizing turnover',
    category: 'Rental & Income',
    icon: '📈',
    path: '/tools/lease-renewal-increase-calculator'
  },
  {
    name: 'Tenant Lifetime Value (TLV) Calculator',
    description: 'Calculate the long-term financial value of a tenant to maximize retention and revenue',
    category: 'Rental & Income',
    icon: '💎',
    path: '/tools/tenant-lifetime-value-calculator'
  },
  {
    name: 'Utility Bill-Back (RUBS) Calculator',
    description: 'Calculate fair utility cost allocation per unit using the Ratio Utility Billing System',
    category: 'Rental & Income',
    icon: '💡',
    path: '/tools/utility-bill-back-calculator'
  },
  {
    name: 'Landlord Tax Deduction Finder',
    description: 'Identify all eligible tax deductions for rental property owners and calculate potential savings',
    category: 'Rental & Income',
    icon: '💰',
    path: '/tools/landlord-tax-deduction-finder'
  },
  {
    name: 'Eviction Notice Generator (by State)',
    description: 'Generate state-specific eviction notices with proper legal language and required timelines',
    category: 'Rental & Income',
    icon: '📋',
    path: '/tools/eviction-notice-generator'
  },
  {
    name: 'Lease Agreement Clause Generator',
    description: 'Generate professional lease clauses covering rent, security deposits, maintenance, and more',
    category: 'Rental & Income',
    icon: '📝',
    path: '/tools/lease-agreement-clause-generator'
  },
  {
    name: 'Co-signer vs. Guarantor Requirement Tool',
    description: 'Determine whether to require a co-signer or guarantor based on tenant qualifications and risk factors',
    category: 'Rental & Income',
    icon: '🤝',
    path: '/tools/cosigner-vs-guarantor-tool'
  },
  {
    name: 'Rental Property Partnership Agreement Tool',
    description: 'Generate partnership agreements for co-investing in rental properties with proper ownership structure',
    category: 'Rental & Income',
    icon: '🤝',
    path: '/tools/rental-property-partnership-agreement-tool'
  },
  {
    name: 'Subletting Agreement Generator',
    description: 'Create legal subletting agreements with proper terms, rent, and landlord approval requirements',
    category: 'Rental & Income',
    icon: '📄',
    path: '/tools/subletting-agreement-generator'
  },
  {
    name: 'Roommate Rent Split Calculator',
    description: 'Calculate fair rent splits for roommates based on room size, bathrooms, and other factors',
    category: 'Rental & Income',
    icon: '🏠',
    path: '/tools/roommate-rent-split-calculator'
  },
  {
    name: 'Tenant Welcome Letter Generator',
    description: 'Generate professional welcome letters for new tenants with important property information and contacts',
    category: 'Rental & Income',
    icon: '✉️',
    path: '/tools/tenant-welcome-letter-generator'
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

  // Additional Tools (7 tools)
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
  {
    name: 'AI HOA Document Analyzer (Red Flag Finder)',
    description: 'Analyze HOA documents, CC&Rs, bylaws, and financials to identify red flags, restrictions, fees, and potential issues before buying',
    category: 'Additional Tools',
    icon: '📋',
    path: '/tools/ai-hoa-document-analyzer'
  },
  {
    name: 'AI Zoning Code Lookup & Interpreter',
    description: 'Instantly look up and understand zoning codes, permitted uses, restrictions, and development regulations for any property address',
    category: 'Additional Tools',
    icon: '📍',
    path: '/tools/ai-zoning-code-lookup'
  },
  {
    name: 'AI Mortgage Underwriting Risk Analyzer',
    description: 'Analyze your mortgage application risk factors, predict approval likelihood, and identify issues before applying',
    category: 'Additional Tools',
    icon: '🔍',
    path: '/tools/ai-mortgage-underwriting-risk-analyzer'
  },
  {
    name: 'AI Real Estate Acronym Buster',
    description: 'Instantly decode real estate acronyms, jargon, and industry terms with AI-powered explanations and context',
    category: 'Additional Tools',
    icon: '🔤',
    path: '/tools/ai-real-estate-acronym-buster'
  },

  // Seller Tools (55 tools)
  {
    name: 'Net Proceeds from Home Sale Calculator',
    description: 'Calculate your net proceeds from selling your home after all costs, commissions, and fees',
    category: 'Seller Tools',
    icon: '💰',
    path: '/tools/net-proceeds-from-home-sale-calculator'
  },
  {
    name: 'Kitchen Renovation ROI Calculator',
    description: 'Calculate return on investment for kitchen remodeling projects including minor updates, major remodels, and upscale renovations',
    category: 'Seller Tools',
    icon: '🍳',
    path: '/tools/kitchen-renovation-roi-calculator'
  },
  {
    name: 'Bathroom Renovation ROI Calculator',
    description: 'Calculate return on investment for bathroom remodeling projects including powder rooms, full baths, and master bathroom renovations',
    category: 'Seller Tools',
    icon: '🛁',
    path: '/tools/bathroom-renovation-roi-calculator'
  },
  {
    name: 'Basement Finishing ROI Calculator',
    description: 'Calculate return on investment for finishing your basement including bedrooms, bathrooms, rec rooms, and rental units',
    category: 'Seller Tools',
    icon: '🏚️',
    path: '/tools/basement-finishing-roi-calculator'
  },
  {
    name: 'Deck/Patio Addition ROI Calculator',
    description: 'Calculate return on investment for deck and patio additions including wood decks, composite decks, concrete patios, and pavers',
    category: 'Seller Tools',
    icon: '🏞️',
    path: '/tools/deck-patio-addition-roi-calculator'
  },
  {
    name: 'Swimming Pool Installation ROI Calculator',
    description: 'Calculate return on investment for swimming pool installations including in-ground, above-ground, and luxury pool projects',
    category: 'Seller Tools',
    icon: '🏊',
    path: '/tools/swimming-pool-installation-roi-calculator'
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
  {
    name: 'Minnesota Transfer Tax Calculator',
    description: 'Calculate Minnesota deed tax (0.33-0.34%), recording fees, well disclosure, and agricultural conservation fees for Hennepin, Ramsey, and all MN counties',
    category: 'Seller Tools',
    icon: '🏒',
    path: '/tools/minnesota-transfer-tax-calculator'
  },
  {
    name: 'South Carolina Transfer Tax Calculator',
    description: 'Calculate South Carolina deed recording fee ($1.85 per $500), state and county portions, and total transfer costs for all SC counties',
    category: 'Seller Tools',
    icon: '🏝️',
    path: '/tools/south-carolina-transfer-tax-calculator'
  },
  {
    name: 'Alabama Transfer Tax Calculator',
    description: 'Calculate Alabama deed tax ($0.50/$500) and mortgage recording tax ($0.15/$100). Learn who pays and actual closing costs in AL',
    category: 'Seller Tools',
    icon: '🏈',
    path: '/tools/alabama-transfer-tax-calculator'
  },
  {
    name: 'Louisiana Transfer Tax Calculator',
    description: 'Calculate Louisiana parish recording fees. No state transfer tax except Orleans Parish $325 flat fee. Learn LA closing costs by parish',
    category: 'Seller Tools',
    icon: '⚜️',
    path: '/tools/louisiana-transfer-tax-calculator'
  },
  {
    name: 'Kentucky Transfer Tax Calculator',
    description: 'Calculate Kentucky deed tax ($0.50 per $500 = 0.1%). No mortgage tax. Statewide uniform rate for all KY counties',
    category: 'Seller Tools',
    icon: '🐴',
    path: '/tools/kentucky-transfer-tax-calculator'
  },
  {
    name: 'Oregon Transfer Tax Calculator',
    description: 'Calculate Oregon real estate costs. No state transfer tax (prohibited by law) except Washington County (0.1%). Learn OR closing costs',
    category: 'Seller Tools',
    icon: '🌲',
    path: '/tools/oregon-transfer-tax-calculator'
  },
  {
    name: 'Oklahoma Transfer Tax Calculator',
    description: 'Calculate Oklahoma documentary stamp tax ($0.75 per $500 = 0.15%) and recording fees for Tulsa, OKC, and all OK counties',
    category: 'Seller Tools',
    icon: '🌾',
    path: '/tools/oklahoma-transfer-tax-calculator'
  },
  {
    name: 'Connecticut Transfer Tax Calculator',
    description: 'Calculate Connecticut tiered conveyance tax (0.75%-2.25%) plus municipal tax (0.25%-0.5%). Includes all CT cities and targeted investment communities',
    category: 'Seller Tools',
    icon: '⚓',
    path: '/tools/connecticut-transfer-tax-calculator'
  },
  {
    name: 'Utah Transfer Tax Calculator',
    description: 'Calculate Utah real estate costs. No state transfer tax - one of 13 states with $0. Learn actual UT closing costs and seller expenses',
    category: 'Seller Tools',
    icon: '⛰️',
    path: '/tools/utah-transfer-tax-calculator'
  },
  {
    name: 'Iowa Transfer Tax Calculator',
    description: 'Calculate Iowa transfer tax ($0.80 per $500 with first $500 exempt) and recording fees for Des Moines, Cedar Rapids, and all IA counties',
    category: 'Seller Tools',
    icon: '🌽',
    path: '/tools/iowa-transfer-tax-calculator'
  },
  {
    name: 'Nevada Transfer Tax Calculator',
    description: 'Calculate Nevada real estate transfer tax and county surcharges for Clark, Washoe, and all NV counties',
    category: 'Seller Tools',
    icon: '🎰',
    path: '/tools/nevada-transfer-tax-calculator'
  },
  {
    name: 'Arkansas Transfer Tax Calculator',
    description: 'Calculate Arkansas documentary stamp tax ($3.30 per $1,000) and recording fees for real estate transactions',
    category: 'Seller Tools',
    icon: '🏞️',
    path: '/tools/arkansas-transfer-tax-calculator'
  },
  {
    name: 'Mississippi Transfer Tax Calculator',
    description: 'Calculate Mississippi real estate transfer costs. Mississippi has no state transfer tax - learn actual closing costs and recording fees',
    category: 'Seller Tools',
    icon: '🎺',
    path: '/tools/mississippi-transfer-tax-calculator'
  },
  {
    name: 'Kansas Transfer Tax Calculator',
    description: 'Calculate Kansas real estate costs. No state transfer tax since 2019 - only county recording fees. Learn actual KS closing costs',
    category: 'Seller Tools',
    icon: '🌻',
    path: '/tools/kansas-transfer-tax-calculator'
  },
  {
    name: 'New Mexico Transfer Tax Calculator',
    description: 'Calculate New Mexico real estate costs. No state transfer tax - only county recording fees. Learn actual NM closing costs',
    category: 'Seller Tools',
    icon: '🌵',
    path: '/tools/new-mexico-transfer-tax-calculator'
  },
  {
    name: 'Nebraska Transfer Tax Calculator',
    description: 'Calculate Nebraska documentary stamp tax ($2.25-$2.32 per $1,000) effective through 2025. Free calculator for NE real estate transfer costs',
    category: 'Seller Tools',
    icon: '🌽',
    path: '/tools/nebraska-transfer-tax-calculator'
  },
  {
    name: 'West Virginia Transfer Tax Calculator',
    description: 'Calculate West Virginia transfer tax ($1.10 per $500 state + county add-ons). Includes Berkeley, Harrison, Marion county rates',
    category: 'Seller Tools',
    icon: '⛰️',
    path: '/tools/west-virginia-transfer-tax-calculator'
  },
  {
    name: 'Idaho Transfer Tax Calculator',
    description: 'Calculate Idaho real estate costs. No state transfer tax - only county recording fees ($15-$30). Learn actual ID closing costs',
    category: 'Seller Tools',
    icon: '🥔',
    path: '/tools/idaho-transfer-tax-calculator'
  },
  {
    name: 'Hawaii Transfer Tax Calculator',
    description: 'Calculate Hawaii conveyance tax with tiered rates ($0.10-$1.25 per $100) and owner-occupant exemptions. Free HI real estate transfer cost calculator',
    category: 'Seller Tools',
    icon: '🌺',
    path: '/tools/hawaii-transfer-tax-calculator'
  },
  {
    name: 'New Hampshire Transfer Tax Calculator',
    description: 'Calculate New Hampshire transfer tax ($0.75 per $100 each for buyer and seller = 1.5% total). Free NH real estate transfer cost calculator',
    category: 'Seller Tools',
    icon: '🍁',
    path: '/tools/new-hampshire-transfer-tax-calculator'
  },
  {
    name: 'Maine Transfer Tax Calculator',
    description: 'Calculate Maine real estate transfer tax with progressive rates ($2.20-$6.00 per $500) effective November 2025 for properties over $1 million',
    category: 'Seller Tools',
    icon: '🦞',
    path: '/tools/maine-transfer-tax-calculator'
  },
  {
    name: 'Rhode Island Transfer Tax Calculator',
    description: 'Calculate Rhode Island documentary stamps (conveyance tax) with 63% rate increase to $3.75 per $500 effective October 2025',
    category: 'Seller Tools',
    icon: '⚓',
    path: '/tools/rhode-island-transfer-tax-calculator'
  },
  {
    name: 'Montana Transfer Tax Calculator',
    description: 'Montana has NO real estate transfer tax. Calculate recording fees ($8/page) and learn about Realty Transfer Certificate requirements',
    category: 'Seller Tools',
    icon: '🏔️',
    path: '/tools/montana-transfer-tax-calculator'
  },
  {
    name: 'Delaware Transfer Tax Calculator',
    description: 'Calculate Delaware 4% realty transfer tax (highest in US) with first-time homebuyer exemption on first $400K',
    category: 'Seller Tools',
    icon: '🏖️',
    path: '/tools/delaware-transfer-tax-calculator'
  },
  {
    name: 'South Dakota Transfer Tax Calculator',
    description: 'Calculate South Dakota real estate deed stamps at $0.50 per $500 (0.1% rate). One of lowest transfer taxes in US',
    category: 'Seller Tools',
    icon: '🦌',
    path: '/tools/south-dakota-transfer-tax-calculator'
  },
  {
    name: 'North Dakota Transfer Tax Calculator',
    description: 'North Dakota has NO real estate transfer tax or deed tax. Calculate recording fees only (~$50)',
    category: 'Seller Tools',
    icon: '🌾',
    path: '/tools/north-dakota-transfer-tax-calculator'
  },
  {
    name: 'Alaska Transfer Tax Calculator',
    description: 'Alaska has NO state transfer tax and no local transfer taxes. Calculate recording fees only',
    category: 'Seller Tools',
    icon: '🐻',
    path: '/tools/alaska-transfer-tax-calculator'
  },
  {
    name: 'Vermont Transfer Tax Calculator',
    description: 'Calculate Vermont property transfer tax with complex tiered rates (0.5-3.62%) - principal residence vs second home/vacation property',
    category: 'Seller Tools',
    icon: '🍁',
    path: '/tools/vermont-transfer-tax-calculator'
  },
  {
    name: 'Wyoming Transfer Tax Calculator',
    description: 'Wyoming has NO real estate transfer tax or documentary stamp tax. Calculate recording fees only',
    category: 'Seller Tools',
    icon: '🦬',
    path: '/tools/wyoming-transfer-tax-calculator'
  },
  {
    name: 'Contractor Bid Comparison Tool',
    description: 'Compare multiple contractor bids side-by-side with detailed breakdowns, payment schedules, and total cost analysis',
    category: 'Seller Tools',
    icon: '📋',
    path: '/tools/contractor-bid-comparison-tool'
  },
  {
    name: 'Construction Loan Interest Calculator',
    description: 'Calculate interest costs for construction loans with draw schedules, interest-only payments, and conversion to permanent mortgage',
    category: 'Basic Calculators',
    icon: '🏗️',
    path: '/tools/construction-loan-interest-calculator'
  },
  {
    name: 'Materials vs. Labor Cost Breakdown Calculator',
    description: 'Break down renovation costs between materials and labor to understand pricing, compare contractor bids, and identify DIY savings opportunities',
    category: 'Seller Tools',
    icon: '⚡',
    path: '/tools/materials-vs-labor-cost-breakdown-calculator'
  },
  {
    name: 'Renovation Project Timeline Generator',
    description: 'Create realistic renovation timelines with detailed phase schedules, permit times, and buffer periods for delays',
    category: 'Seller Tools',
    icon: '📅',
    path: '/tools/renovation-project-timeline-generator'
  },
  {
    name: 'Renovation Overrun (Contingency) Budget Calculator',
    description: 'Calculate appropriate contingency reserves for your renovation project based on scope, complexity, and risk factors',
    category: 'Seller Tools',
    icon: '💰',
    path: '/tools/renovation-overrun-contingency-budget-calculator'
  },
  {
    name: 'Sweat Equity Calculator',
    description: 'Calculate the dollar value of your DIY labor on renovation projects and potential savings vs. hiring professionals',
    category: 'Seller Tools',
    icon: '💪',
    path: '/tools/sweat-equity-calculator'
  },
  {
    name: 'Energy Efficient Upgrade Rebate Finder',
    description: 'Find available rebates, tax credits, and incentives for energy-efficient home improvements including solar, HVAC, windows, and insulation',
    category: 'Seller Tools',
    icon: '⚡',
    path: '/tools/energy-efficient-upgrade-rebate-finder'
  },
  {
    name: 'Aging in Place Renovation Cost Estimator',
    description: 'Calculate costs for home modifications to support aging in place - accessibility upgrades, safety features, and universal design improvements',
    category: 'Seller Tools',
    icon: '🏠',
    path: '/tools/aging-in-place-renovation-cost-estimator'
  },
  {
    name: 'Foundation Repair Cost Estimator',
    description: 'Calculate costs for foundation repair including cracks, settling, bowing walls, and structural reinforcement solutions',
    category: 'Seller Tools',
    icon: '🏗️',
    path: '/tools/foundation-repair-cost-estimator'
  },
  {
    name: 'FHA Monthly Payment Calculator',
    description: 'Calculate total FHA monthly payment including principal, interest, MIP (mortgage insurance premium), property tax, and homeowners insurance',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/fha-monthly-payment-calculator'
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
  {
    name: 'Historic Tax Credit (HTC) Benefit Calculator',
    description: 'Calculate federal and state historic preservation tax credits, qualified rehabilitation expenditures, and total project benefits',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏛️',
    path: '/tools/historic-tax-credit-calculator'
  },
  {
    name: 'Low-Income Housing Tax Credit (LIHTC) Calculator',
    description: 'Calculate 9% and 4% LIHTC credits, eligible basis, qualified allocation plan scoring, and affordable housing project returns',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏘️',
    path: '/tools/low-income-housing-tax-credit-calculator'
  },
  {
    name: 'New Markets Tax Credit (NMTC) Calculator',
    description: 'Calculate NMTC allocation benefits, qualified equity investment, and total credit value for community development projects',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏗️',
    path: '/tools/new-markets-tax-credit-calculator'
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

  // Additional Tools - AI-Powered Tools (15 tools)
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
    name: 'AI Blog Post (Home Selling Guide)',
    description: 'Generate comprehensive, SEO-optimized blog posts about home selling topics with AI assistance. Create engaging content for your real estate blog in seconds',
    category: 'Additional Tools',
    icon: '📝',
    path: '/tools/ai-blog-post-home-selling-guide'
  },
  {
    name: 'AI Zillow Agent Profile Bio Generator',
    description: 'Create compelling, professional bio content for your Zillow agent profile that attracts clients and showcases your expertise',
    category: 'Additional Tools',
    icon: '👤',
    path: '/tools/ai-zillow-agent-profile-bio-generator'
  },
  {
    name: 'AI Realtor.com Profile Bio Generator',
    description: 'Generate professional, engaging bio content for your Realtor.com agent profile that builds trust and attracts quality leads',
    category: 'Additional Tools',
    icon: '🏘️',
    path: '/tools/ai-realtor-com-profile-bio-generator'
  },
  {
    name: 'AI Real Estate Website \'About Me\' Page Generator',
    description: 'Generate compelling \'About Me\' page content for your real estate website that builds trust, showcases personality, and converts visitors into clients',
    category: 'Additional Tools',
    icon: '👋',
    path: '/tools/ai-real-estate-website-about-me-page-generator'
  },
  {
    name: 'AI Property Feature to Buyer Benefit Converter',
    description: 'Transform bland property features into compelling buyer benefits that connect emotionally and drive offers. Convert "3 bedrooms" into lifestyle advantages',
    category: 'Additional Tools',
    icon: '✨',
    path: '/tools/ai-property-feature-to-buyer-benefit-converter'
  },
  {
    name: 'AI Negative Home Feature Spinner',
    description: 'Reframe potential property negatives into positive selling points. Turn "small" into "cozy" and "fixer-upper" into "opportunity" professionally and ethically',
    category: 'Additional Tools',
    icon: '🔄',
    path: '/tools/ai-negative-home-feature-spinner'
  },
  {
    name: 'AI Offer Rejection Letter Generator (Polite)',
    description: 'Generate professional, polite offer rejection letters that maintain relationships and keep doors open for future negotiations',
    category: 'Additional Tools',
    icon: '📋',
    path: '/tools/ai-offer-rejection-letter-generator'
  },
  {
    name: 'AI Counter-Offer Letter Generator',
    description: 'Create professional counter-offer letters that clearly communicate seller terms, maintain negotiation leverage, and move toward successful agreements',
    category: 'Additional Tools',
    icon: '🤝',
    path: '/tools/ai-counter-offer-letter-generator'
  },
  {
    name: 'AI Buyer Persona Generator (for Marketing)',
    description: 'Create detailed buyer personas for targeted real estate marketing. Understand your ideal clients\' demographics, motivations, pain points, and preferences',
    category: 'Additional Tools',
    icon: '👥',
    path: '/tools/ai-buyer-persona-generator'
  },
  {
    name: 'AI Seller Lead Scoring Tool',
    description: 'Automatically score and prioritize seller leads based on motivation, timeline, property value, and readiness to list. Focus on leads most likely to convert',
    category: 'Additional Tools',
    icon: '📊',
    path: '/tools/ai-seller-lead-scoring-tool'
  },
  {
    name: 'AI Buyer Lead Scoring Tool',
    description: 'Score and prioritize buyer leads using AI analysis of budget, motivation, timeline, and readiness. Focus your efforts on the most qualified prospects',
    category: 'Additional Tools',
    icon: '🎯',
    path: '/tools/ai-buyer-lead-scoring-tool'
  },
  {
    name: 'AI Real Estate Ad Copy Generator (Google Ads)',
    description: 'Generate high-converting Google Ads copy for real estate listings. Create compelling headlines, descriptions, and CTAs optimized for search campaigns',
    category: 'Additional Tools',
    icon: '🔍',
    path: '/tools/ai-google-ads-copy-generator'
  },
  {
    name: 'AI Real Estate Ad Copy (Facebook Ads)',
    description: 'Create engaging Facebook and Instagram ad copy for property listings. Generate scroll-stopping headlines and persuasive ad text that drives leads',
    category: 'Additional Tools',
    icon: '📱',
    path: '/tools/ai-facebook-ads-copy-generator'
  },
  {
    name: 'AI Property Valuation (AVM) Model',
    description: 'Estimate property values using AI-powered automated valuation model (AVM). Analyze comparable sales, market trends, and property features for accurate pricing',
    category: 'Additional Tools',
    icon: '🏠',
    path: '/tools/ai-property-valuation-avm'
  },
  {
    name: 'AI Renovation ROI Predictor',
    description: 'Predict return on investment for home renovations using AI analysis. Evaluate which improvements add the most value based on market data and trends',
    category: 'Additional Tools',
    icon: '🔨',
    path: '/tools/ai-renovation-roi-predictor'
  },
  {
    name: 'AI Home Price Appreciation Forecaster',
    description: 'Forecast future home price appreciation using AI-powered market analysis. Predict property value growth over 1, 5, and 10-year periods',
    category: 'Additional Tools',
    icon: '📈',
    path: '/tools/ai-home-price-appreciation-forecaster'
  },
  {
    name: 'AI Neighborhood Gentrification Predictor',
    description: 'Identify neighborhoods showing early signs of gentrification using AI analysis of demographics, development, and economic indicators',
    category: 'Additional Tools',
    icon: '🏘️',
    path: '/tools/ai-neighborhood-gentrification-predictor'
  },
  {
    name: 'AI "Next Hot Neighborhood" Finder',
    description: 'Discover emerging real estate markets before they peak. AI analyzes trends, development, and indicators to find the next hot neighborhoods for investment',
    category: 'Additional Tools',
    icon: '🔥',
    path: '/tools/ai-next-hot-neighborhood-finder'
  },
  {
    name: 'AI Comp (Comparable) Selection Tool',
    description: 'Automatically select the best comparable properties for accurate valuations using AI analysis of location, features, and market conditions',
    category: 'Additional Tools',
    icon: '🏘️',
    path: '/tools/ai-comp-selection-tool'
  },
  {
    name: 'AI CMA (Comparative Market Analysis) Report Generator',
    description: 'Generate comprehensive CMA reports instantly using AI. Analyze market trends, comparable sales, and pricing strategies for professional presentations',
    category: 'Additional Tools',
    icon: '📊',
    path: '/tools/ai-cma-report-generator'
  },
  {
    name: 'AI Investment Risk Score Calculator',
    description: 'Analyze investment property risks using AI to calculate comprehensive risk scores. Evaluate market, property, financial, and location factors for informed decisions',
    category: 'Additional Tools',
    icon: '⚠️',
    path: '/tools/ai-investment-risk-score-calculator'
  },
  {
    name: 'AI Property Description Keyword Analyzer',
    description: 'Optimize property listings with AI keyword analysis. Identify high-value keywords, improve SEO strength, and create compelling descriptions that attract buyers',
    category: 'Additional Tools',
    icon: '🔤',
    path: '/tools/ai-property-description-keyword-analyzer'
  },
  {
    name: 'AI Listing Photo Quality Analyzer',
    description: 'Evaluate real estate listing photos using AI. Get detailed scores for composition, lighting, staging, and coverage with actionable improvement recommendations',
    category: 'Additional Tools',
    icon: '📸',
    path: '/tools/ai-listing-photo-quality-analyzer'
  },
  {
    name: 'AI Virtual Staging Idea Generator',
    description: 'Generate professional virtual staging ideas using AI. Get furniture placement, color palettes, and design concepts tailored to your target buyers',
    category: 'Additional Tools',
    icon: '🛋️',
    path: '/tools/ai-virtual-staging-idea-generator'
  },
  {
    name: 'AI Curb Appeal Suggestion Tool',
    description: 'Boost property curb appeal with AI-powered suggestions. Get landscaping ideas, paint colors, lighting tips, and cost-effective improvements',
    category: 'Additional Tools',
    icon: '🏡',
    path: '/tools/ai-curb-appeal-suggestion-tool'
  },
  {
    name: 'AI Interior Design Style Suggester',
    description: 'Discover perfect interior design styles using AI analysis. Get personalized recommendations with furniture, colors, and decor for any room',
    category: 'Additional Tools',
    icon: '🎨',
    path: '/tools/ai-interior-design-style-suggester'
  },
  {
    name: 'AI Floor Plan Generator',
    description: 'Create optimized floor plan concepts with AI. Generate detailed layouts, room dimensions, and flow descriptions for any property type',
    category: 'Additional Tools',
    icon: '📐',
    path: '/tools/ai-floor-plan-generator'
  },
  {
    name: 'AI Renovation Cost Estimator (from Description)',
    description: 'Estimate renovation costs instantly using AI. Get detailed breakdowns, labor and material costs, timelines, and budget ranges for any project',
    category: 'Additional Tools',
    icon: '💰',
    path: '/tools/ai-renovation-cost-estimator-from-description'
  },
  {
    name: 'AI Home Inspection Report Summarizer',
    description: 'Simplify complex inspection reports with AI. Get clear summaries of critical issues, repair costs, safety hazards, and negotiation points',
    category: 'Additional Tools',
    icon: '🔍',
    path: '/tools/ai-home-inspection-report-summarizer'
  },
  {
    name: 'AI Legal Document (Lease) Summarizer',
    description: 'Understand legal documents instantly using AI. Get plain-language summaries of leases and contracts with key terms, obligations, and red flags highlighted',
    category: 'Additional Tools',
    icon: '📋',
    path: '/tools/ai-legal-document-lease-summarizer'
  },
  {
    name: 'What if Prices Drop (LTV) Calculator',
    description: 'Calculate how falling home prices affect your loan-to-value ratio, equity, and potential underwater mortgage risk',
    category: 'Additional Tools',
    icon: '📉',
    path: '/tools/what-if-prices-drop-ltv-tool'
  },
  {
    name: 'Mortgage Application Document Checklist',
    description: 'Complete checklist of all documents needed for mortgage application - tailored by loan type, employment status, and property type',
    category: 'Additional Tools',
    icon: '📋',
    path: '/tools/mortgage-application-document-checklist'
  },
  {
    name: 'Real Estate Glossary & Jargon Buster',
    description: 'Comprehensive dictionary of 500+ real estate terms, definitions, and jargon explained in plain English for buyers, sellers, and investors',
    category: 'Additional Tools',
    icon: '📖',
    path: '/tools/real-estate-glossary-jargon-buster'
  },
  {
    name: 'Acronym Buster (REIT, FHA, VA, PITI...)',
    description: 'Decode 200+ real estate acronyms instantly - from REIT to FHA, VA, PITI, HOA, and everything in between',
    category: 'Additional Tools',
    icon: '🔤',
    path: '/tools/acronym-buster-reit-fha-va-piti'
  },
  {
    name: 'What Style is My House? (AI Photo Tool)',
    description: 'Upload a photo and let AI identify your home\'s architectural style - from Victorian to Mid-Century Modern, Colonial to Contemporary',
    category: 'Additional Tools',
    icon: '🏛️',
    path: '/tools/what-style-is-my-house-ai-photo-tool'
  },
  {
    name: 'Feng Shui (Home) Calculator',
    description: 'Analyze your home\'s feng shui energy flow using the Bagua map, determine your Kua number, and get personalized recommendations for harmony and prosperity',
    category: 'Additional Tools',
    icon: '☯️',
    path: '/tools/feng-shui-home-calculator'
  },
  {
    name: 'Color Palette Generator (Interior Design)',
    description: 'Generate professional interior design color palettes based on room type, style, mood, and lighting - get paint codes and coordinating recommendations',
    category: 'Additional Tools',
    icon: '🎨',
    path: '/tools/color-palette-generator-interior-design'
  },
  {
    name: 'Which Renovation Adds Most Value? Quiz',
    description: 'Find out which home improvements deliver the best ROI based on your home type, location, budget, and market - from kitchen remodels to landscaping',
    category: 'Additional Tools',
    icon: '🔨',
    path: '/tools/which-renovation-adds-most-value-quiz'
  },
  {
    name: 'Am I Ready to Buy a House? Quiz',
    description: 'Comprehensive readiness assessment covering finances, credit, savings, debt, job stability, and emotional preparedness for homeownership',
    category: 'Additional Tools',
    icon: '🏠',
    path: '/tools/am-i-ready-to-buy-house-quiz'
  },
  {
    name: 'Am I Ready to Sell My House? Quiz',
    description: 'Comprehensive assessment covering market conditions, home equity, relocation plans, financial readiness, and optimal timing to sell your property',
    category: 'Additional Tools',
    icon: '🏡',
    path: '/tools/am-i-ready-to-sell-house-quiz'
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
  },
  {
    name: 'Preferred Equity vs. Common Equity Analyzer',
    description: 'Compare preferred equity and common equity returns to determine the best investment structure for your real estate deal',
    category: 'Investment Analysis',
    icon: '📊',
    path: '/tools/preferred-equity-vs-common-equity-analyzer'
  },
  {
    name: 'Mezzanine Debt Calculator',
    description: 'Calculate returns and analyze mezzanine debt financing for commercial real estate deals including interest rates, fees, and total costs',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/mezzanine-debt-calculator'
  },
  {
    name: 'Real Estate Note Investing ROI Calculator',
    description: 'Calculate returns on mortgage note investments including yield, cash flow, and total ROI for performing and non-performing notes',
    category: 'Investment Analysis',
    icon: '📝',
    path: '/tools/real-estate-note-investing-roi-calculator'
  },
  {
    name: 'Performing vs. Non-Performing Note Analyzer',
    description: 'Compare returns between performing and non-performing mortgage notes to make informed investment decisions',
    category: 'Investment Analysis',
    icon: '⚖️',
    path: '/tools/performing-vs-non-performing-note-analyzer'
  },
  {
    name: 'Discounted Note (Mortgage) Calculator',
    description: 'Calculate returns when purchasing mortgage notes at a discount, including yield, profit potential, and break-even analysis',
    category: 'Investment Analysis',
    icon: '💵',
    path: '/tools/discounted-note-mortgage-calculator'
  },
  {
    name: 'Seller Financing Amortization Schedule',
    description: 'Create complete amortization schedules for seller-financed real estate deals including payment breakdowns and interest calculations',
    category: 'Investment Analysis',
    icon: '📅',
    path: '/tools/seller-financing-amortization-schedule'
  },
  {
    name: 'Wraparound Mortgage Profit Calculator',
    description: 'Calculate profit potential from wraparound mortgages (All-Inclusive Trust Deeds) including interest rate spreads and cash flow analysis',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/wraparound-mortgage-profit-calculator'
  },
  {
    name: 'Subject-To (Sub-To) Deal Cash Flow Analyzer',
    description: 'Analyze cash flow and profitability of subject-to real estate deals where you take over existing mortgage payments',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/subject-to-deal-cash-flow-analyzer'
  },
  {
    name: 'Lease Option (Rent-to-Own) Investor ROI Calculator',
    description: 'Calculate returns on lease option investments including option fees, monthly spreads, and total profit potential',
    category: 'Investment Analysis',
    icon: '🔑',
    path: '/tools/lease-option-rent-to-own-investor-roi-calculator'
  },
  {
    name: 'Master Lease Agreement (MLA) Calculator',
    description: 'Calculate cash flow and profitability from master lease agreements including rent spreads, control benefits, and exit strategies',
    category: 'Investment Analysis',
    icon: '📋',
    path: '/tools/master-lease-agreement-mla-calculator'
  },
  {
    name: 'Senior Living Facility ROI Calculator',
    description: 'Analyze investment returns for senior living facilities including assisted living, memory care, and independent living communities',
    category: 'Investment Analysis',
    icon: '🏥',
    path: '/tools/senior-living-facility-roi-calculator'
  },
  {
    name: 'Medical Office Building (MOB) Investment Calculator',
    description: 'Calculate ROI and cash flow for medical office building investments with specialized tenant considerations and healthcare market analysis',
    category: 'Investment Analysis',
    icon: '🏥',
    path: '/tools/medical-office-building-mob-investment-calculator'
  },
  {
    name: 'Data Center Investment Calculator',
    description: 'Analyze returns on data center investments including power density, connectivity premiums, and technology infrastructure costs',
    category: 'Investment Analysis',
    icon: '💾',
    path: '/tools/data-center-investment-calculator'
  },
  {
    name: 'Car Wash Business ROI Calculator',
    description: 'Calculate profitability and returns for car wash investments including self-serve, automatic, and express wash formats',
    category: 'Investment Analysis',
    icon: '🚗',
    path: '/tools/car-wash-business-roi-calculator'
  },
  {
    name: 'Laundromat Business ROI Calculator',
    description: 'Analyze investment returns for laundromat businesses including equipment costs, utility expenses, and revenue projections',
    category: 'Investment Analysis',
    icon: '🧺',
    path: '/tools/laundromat-business-roi-calculator'
  },
  {
    name: 'RV Park/Campground ROI Calculator',
    description: 'Calculate returns on RV park and campground investments including site development, amenities, and seasonal revenue patterns',
    category: 'Investment Analysis',
    icon: '🏕️',
    path: '/tools/rv-park-campground-roi-calculator'
  },
  {
    name: '1031 Exchange (Starker) Calculator',
    description: 'Calculate tax deferral benefits and identify suitable replacement properties for 1031 like-kind exchanges',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/1031-exchange-starker-calculator'
  },
  {
    name: 'Reverse 1031 Exchange Calculator',
    description: 'Analyze reverse 1031 exchanges where you acquire replacement property before selling relinquished property',
    category: 'Investment Analysis',
    icon: '↩️',
    path: '/tools/reverse-1031-exchange-calculator'
  },
  {
    name: 'Tenant in Common (TIC) Investment Calculator',
    description: 'Calculate returns and analyze co-ownership investments through Tenant in Common fractional real estate structures',
    category: 'Investment Analysis',
    icon: '🤝',
    path: '/tools/tenant-in-common-tic-investment-calculator'
  },
  {
    name: 'Delaware Statutory Trust (DST) Investment Analyzer',
    description: 'Analyze Delaware Statutory Trust investments including passive income, 1031 exchange eligibility, and institutional-grade properties',
    category: 'Investment Analysis',
    icon: '🏛️',
    path: '/tools/delaware-statutory-trust-dst-investment-analyzer'
  },

  // Home Improvement & Renovation (11 tools)
  {
    name: 'Window Replacement ROI Calculator',
    description: 'Calculate the return on investment for window replacement including energy savings, home value increase, and payback period',
    category: 'Home Improvement',
    icon: '🪟',
    path: '/tools/window-replacement-roi-calculator'
  },
  {
    name: 'Roof Replacement ROI Calculator',
    description: 'Calculate the return on investment for roof replacement including home value increase, insurance savings, and resale impact',
    category: 'Home Improvement',
    icon: '🏠',
    path: '/tools/roof-replacement-roi-calculator'
  },
  {
    name: 'HVAC Replacement ROI Calculator',
    description: 'Calculate the return on investment for HVAC replacement including energy savings, comfort improvements, and home value increase',
    category: 'Home Improvement',
    icon: '❄️',
    path: '/tools/hvac-replacement-roi-calculator'
  },
  {
    name: 'Solar Panel Installation ROI Calculator',
    description: 'Calculate the return on investment for solar panel installation including energy savings, tax credits, home value increase, and payback period',
    category: 'Home Improvement',
    icon: '☀️',
    path: '/tools/solar-panel-installation-roi-calculator'
  },
  {
    name: 'Home Addition (Sq. Ft.) ROI Calculator',
    description: 'Calculate the return on investment for home additions including cost per square foot, home value increase, and resale impact',
    category: 'Home Improvement',
    icon: '🏗️',
    path: '/tools/home-addition-sq-ft-roi-calculator'
  },
  {
    name: 'Paint Job Cost Estimator',
    description: 'Estimate professional painting costs for interior and exterior projects including labor, materials, and preparation work',
    category: 'Home Improvement',
    icon: '🎨',
    path: '/tools/paint-job-cost-estimator'
  },
  {
    name: 'Flooring Cost Estimator (Hardwood vs Carpet vs LVP)',
    description: 'Compare costs for hardwood, carpet, and luxury vinyl plank (LVP) flooring including materials, installation, and long-term value',
    category: 'Home Improvement',
    icon: '🪵',
    path: '/tools/flooring-cost-estimator-hardwood-carpet-lvp'
  },
  {
    name: 'Kitchen Countertop Cost Estimator',
    description: 'Estimate kitchen countertop costs for granite, quartz, marble, laminate, and other materials including installation',
    category: 'Home Improvement',
    icon: '🍳',
    path: '/tools/kitchen-countertop-cost-estimator'
  },
  {
    name: 'Cabinet Refinishing vs Replacement Calculator',
    description: 'Compare the cost and return on investment of cabinet refinishing versus full cabinet replacement for kitchen and bathroom renovations',
    category: 'Home Improvement',
    icon: '🚪',
    path: '/tools/cabinet-refinishing-vs-replacement-calculator'
  },
  {
    name: 'DIY vs Pro Contractor Cost Calculator',
    description: 'Calculate the cost comparison between DIY and hiring a professional contractor including materials, labor, time value, and quality considerations',
    category: 'Home Improvement',
    icon: '🔨',
    path: '/tools/diy-vs-pro-contractor-cost-calculator'
  },
  {
    name: 'Building Permit Fee Estimator',
    description: 'Estimate building permit fees for construction, renovation, and home improvement projects based on project value and location',
    category: 'Home Improvement',
    icon: '📋',
    path: '/tools/building-permit-fee-estimator'
  },
  {
    name: 'Mold Remediation Cost Estimator',
    description: 'Calculate the cost of professional mold remediation including inspection, removal, and prevention for residential and commercial properties',
    category: 'Additional Tools',
    icon: '🦠',
    path: '/tools/mold-remediation-cost-estimator'
  },
  {
    name: 'Asbestos Removal Cost Estimator',
    description: 'Calculate professional asbestos abatement costs including testing, removal, and disposal for homes and commercial buildings',
    category: 'Additional Tools',
    icon: '⚠️',
    path: '/tools/asbestos-removal-cost-estimator'
  },
  {
    name: 'Termite Damage Repair Cost Estimator',
    description: 'Calculate the cost of repairing termite damage including structural repairs, wood replacement, and prevention treatment',
    category: 'Additional Tools',
    icon: '🐜',
    path: '/tools/termite-damage-repair-cost-estimator'
  },
  {
    name: 'Septic System vs. Sewer Hookup Cost',
    description: 'Compare the costs of installing a septic system versus connecting to municipal sewer, including installation, maintenance, and long-term expenses',
    category: 'Additional Tools',
    icon: '🚽',
    path: '/tools/septic-system-vs-sewer-hookup-cost'
  },
  {
    name: 'Well Drilling vs. City Water Cost',
    description: 'Compare the costs of drilling a private well versus connecting to municipal water, including installation, testing, and long-term expenses',
    category: 'Additional Tools',
    icon: '💧',
    path: '/tools/well-drilling-vs-city-water-cost'
  },
  {
    name: 'Driveway Paving Cost Estimator',
    description: 'Calculate driveway paving costs for asphalt, concrete, pavers, and gravel including installation, materials, and long-term maintenance',
    category: 'Additional Tools',
    icon: '🚗',
    path: '/tools/driveway-paving-cost-estimator'
  },
  {
    name: 'Landscaping Budget Calculator',
    description: 'Calculate comprehensive landscaping costs including design, plants, hardscaping, irrigation, and maintenance for residential and commercial properties',
    category: 'Additional Tools',
    icon: '🌳',
    path: '/tools/landscaping-budget-calculator'
  },
  {
    name: 'Fence Installation Cost Estimator',
    description: 'Calculate fence installation costs for wood, vinyl, chain link, and other materials including labor, materials, and gate expenses',
    category: 'Additional Tools',
    icon: '🏡',
    path: '/tools/fence-installation-cost-estimator'
  },
  {
    name: 'Smart Home Conversion Cost Calculator',
    description: 'Calculate the cost of converting your home to smart technology including lighting, security, climate control, and automation systems',
    category: 'Additional Tools',
    icon: '🏠',
    path: '/tools/smart-home-conversion-cost-calculator'
  },
  {
    name: 'Home Theater Installation Cost Estimator',
    description: 'Calculate home theater installation costs including projectors, screens, sound systems, seating, and professional setup',
    category: 'Additional Tools',
    icon: '🎬',
    path: '/tools/home-theater-installation-cost-estimator'
  },
  {
    name: 'Home Office Conversion ROI Calculator',
    description: 'Calculate the return on investment for converting a spare room or space into a functional home office',
    category: 'Home Improvement',
    icon: '💼',
    path: '/tools/home-office-conversion-roi-calculator'
  },
  {
    name: 'Garage Conversion (ADU) Cost Calculator',
    description: 'Estimate the cost of converting your garage into an Accessory Dwelling Unit (ADU) or additional living space',
    category: 'Home Improvement',
    icon: '🏘️',
    path: '/tools/garage-conversion-adu-cost-calculator'
  },
  {
    name: 'Exterior Siding Replacement Cost Calculator',
    description: 'Calculate the cost of replacing your home\'s siding with different materials including vinyl, fiber cement, wood, and more',
    category: 'Home Improvement',
    icon: '🏗️',
    path: '/tools/exterior-siding-replacement-cost-calculator'
  },
  {
    name: 'Gutter Installation/Replacement Cost Calculator',
    description: 'Calculate the cost of installing or replacing gutters and downspouts for your home with various material options',
    category: 'Home Improvement',
    icon: '🌧️',
    path: '/tools/gutter-installation-replacement-cost-calculator'
  },
  {
    name: 'Home Demolition Cost Estimator',
    description: 'Estimate the cost of demolishing a house or structure including permits, labor, and disposal fees',
    category: 'Home Improvement',
    icon: '🏚️',
    path: '/tools/home-demolition-cost-estimator'
  },
  {
    name: 'Architect Fee Calculator',
    description: 'Calculate architectural fees for residential and commercial projects based on project scope and fee structure',
    category: 'Home Improvement',
    icon: '📐',
    path: '/tools/architect-fee-calculator'
  },
  {
    name: 'Interior Designer Fee Calculator',
    description: 'Calculate interior designer fees based on project scope, fee structure, and design complexity',
    category: 'Home Improvement',
    icon: '🛋️',
    path: '/tools/interior-designer-fee-calculator'
  },
  {
    name: 'Structural Engineer Fee Estimator',
    description: 'Calculate structural engineering fees for residential and commercial projects including inspections and calculations',
    category: 'Home Improvement',
    icon: '🏗️',
    path: '/tools/structural-engineer-fee-estimator'
  },
  {
    name: 'General Contractor Fee Calculator',
    description: 'Calculate general contractor fees and markup for construction projects including overhead and profit margins',
    category: 'Home Improvement',
    icon: '👷',
    path: '/tools/general-contractor-fee-calculator'
  },
  {
    name: 'Subcontractor Markup Calculator',
    description: 'Calculate appropriate markup on subcontractor labor and materials for general contractors and construction managers',
    category: 'Home Improvement',
    icon: '🔧',
    path: '/tools/subcontractor-markup-calculator'
  },
  // Lifestyle & Housing Calculators (10 tools)
  {
    name: 'Commute Cost vs. Housing Cost Trade-off',
    description: 'Compare the true cost of living closer to work vs. a longer commute with cheaper housing to make an informed housing decision',
    category: 'Lifestyle & Housing',
    icon: '🚗',
    path: '/tools/commute-cost-vs-housing-cost-tradeoff'
  },
  {
    name: 'Remote Work Home Savings Calculator',
    description: 'Calculate how much money you save by working from home including commute costs, meals, wardrobe, and other expenses',
    category: 'Lifestyle & Housing',
    icon: '🏠',
    path: '/tools/remote-work-home-savings-calculator'
  },
  {
    name: 'Snowbird (Dual Property) Cost Calculator',
    description: 'Calculate the total cost of owning and maintaining two properties for seasonal living - compare the costs vs. benefits of the snowbird lifestyle',
    category: 'Lifestyle & Housing',
    icon: '🦩',
    path: '/tools/snowbird-dual-property-cost-calculator'
  },
  {
    name: 'Vacation Home (Second Home) Affordability',
    description: 'Determine if you can afford a vacation home by calculating total costs, potential rental income, and analyzing your financial readiness for a second property',
    category: 'Lifestyle & Housing',
    icon: '🏖️',
    path: '/tools/vacation-home-second-home-affordability'
  },
  {
    name: 'Co-Buying (with Friends/Family) Calculator',
    description: 'Calculate cost splits, equity shares, and monthly expenses when buying property with friends or family members. Plan fair ownership arrangements',
    category: 'Lifestyle & Housing',
    icon: '🤝',
    path: '/tools/co-buying-with-friends-family-calculator'
  },
  {
    name: 'Joint vs. Separate Property (Marital) Calculator',
    description: 'Compare the financial implications of holding marital property jointly versus separately. Understand tax benefits, liability, and estate planning considerations',
    category: 'Lifestyle & Housing',
    icon: '💑',
    path: '/tools/joint-vs-separate-property-marital-calculator'
  },
  {
    name: 'Prenuptial Agreement (Real Estate) Tool',
    description: 'Calculate and plan real estate provisions for prenuptial agreements including property valuation, equity splits, and buyout scenarios',
    category: 'Lifestyle & Housing',
    icon: '💍',
    path: '/tools/prenuptial-agreement-real-estate-tool'
  },
  {
    name: 'Divorce & Real Estate Buyout Calculator',
    description: 'Calculate fair buyout amounts for real estate division in divorce. Determine equity splits, payment options, and tax implications for both parties',
    category: 'Lifestyle & Housing',
    icon: '⚖️',
    path: '/tools/divorce-real-estate-buyout-calculator'
  },
  {
    name: 'House Hacking (Roommate) Rent Share Calculator',
    description: 'Calculate fair rent splits for roommates or house hacking scenarios. Factor in room sizes, amenities, and utilities for equitable cost sharing',
    category: 'Lifestyle & Housing',
    icon: '🏡',
    path: '/tools/house-hacking-roommate-rent-share-calculator'
  },
  {
    name: 'Utility Bill Splitter (Roommates)',
    description: 'Fairly split utility bills among roommates accounting for different usage patterns, room sizes, and special circumstances like home offices or AC usage',
    category: 'Lifestyle & Housing',
    icon: '💡',
    path: '/tools/utility-bill-splitter-roommates'
  },
  {
    name: 'Tennessee Hall Income Tax (Real Estate)',
    description: 'Calculate the former Tennessee Hall Income Tax on real estate investment income before its 2021 repeal',
    category: 'State-Specific Tools',
    icon: '🏛️',
    path: '/tools/tennessee-hall-income-tax-real-estate'
  },
  {
    name: 'Nevada No-State-Income-Tax Benefit Calculator',
    description: 'Calculate tax savings from Nevada\'s no-income-tax status compared to high-tax states for real estate investors',
    category: 'State-Specific Tools',
    icon: '🎰',
    path: '/tools/nevada-no-state-income-tax-benefit-calculator'
  },
  {
    name: 'Prop 19 (California) Tax Basis Transfer Calculator',
    description: 'Calculate property tax impacts of Prop 19 for inherited properties and parent-child transfers in California',
    category: 'State-Specific Tools',
    icon: '📜',
    path: '/tools/prop-19-california-tax-basis-transfer-calculator'
  },
  {
    name: 'Austin (TX) McMansion Ordinance Checker',
    description: 'Check if your Austin property complies with residential design standards and FAR (floor area ratio) limits',
    category: 'State-Specific Tools',
    icon: '🏗️',
    path: '/tools/austin-tx-mcmansion-ordinance-checker'
  },
  {
    name: 'San Francisco (CA) Rent Control Calculator',
    description: 'Calculate maximum allowable rent increases under San Francisco rent control ordinance',
    category: 'State-Specific Tools',
    icon: '🌉',
    path: '/tools/san-francisco-ca-rent-control-calculator'
  },
  {
    name: 'Los Angeles (CA) Rent Stabilization (RSO) Tool',
    description: 'Calculate maximum allowable rent increases for Los Angeles Rent Stabilization Ordinance (RSO) properties',
    category: 'State-Specific Tools',
    icon: '🌴',
    path: '/tools/los-angeles-ca-rent-stabilization-rso-tool'
  },
  {
    name: 'Miami (FL) Flood Zone Impact Calculator',
    description: 'Calculate flood insurance costs and property value impacts for different FEMA flood zones in Miami',
    category: 'State-Specific Tools',
    icon: '🌊',
    path: '/tools/miami-fl-flood-zone-impact-calculator'
  },
  {
    name: 'New Orleans (LA) Short-Term Rental Law Checker',
    description: 'Check New Orleans short-term rental regulations, zoning compliance, licensing requirements, and permit eligibility for Airbnb and VRBO properties',
    category: 'State-Specific Tools',
    icon: '🎷',
    path: '/tools/new-orleans-la-short-term-rental-law-checker'
  },
  {
    name: 'Denver (CO) ADU Feasibility Checker',
    description: 'Determine if your Denver property qualifies for an ADU (accessory dwelling unit) with zoning, lot size, and cost analysis',
    category: 'State-Specific Tools',
    icon: '🏔️',
    path: '/tools/denver-co-adu-feasibility-checker'
  },
  {
    name: 'Seattle (WA) Duvall Fee Estimator',
    description: 'Calculate Seattle and King County development impact fees, transportation fees, park fees, and school impact fees for new construction',
    category: 'State-Specific Tools',
    icon: '☔',
    path: '/tools/seattle-wa-duvall-fee-estimator'
  },
  {
    name: 'Portland (OR) Home Energy Score Cost',
    description: 'Calculate the cost and value of Portland\'s required Home Energy Score assessment and energy efficiency improvements',
    category: 'State-Specific Tools',
    icon: '🌲',
    path: '/tools/portland-or-home-energy-score-cost'
  },
  {
    name: 'Atlanta (GA) BeltLine Property Value Premium',
    description: 'Calculate property value premium for homes near Atlanta\'s BeltLine trail system and estimate appreciation potential',
    category: 'State-Specific Tools',
    icon: '🍑',
    path: '/tools/atlanta-ga-beltline-property-value-premium'
  },
  {
    name: 'Las Vegas (NV) Water Smart Landscape Rebate',
    description: 'Calculate rebates for converting grass to desert landscaping in Las Vegas with water savings analysis',
    category: 'State-Specific Tools',
    icon: '💧',
    path: '/tools/las-vegas-nv-water-smart-landscape-rebate'
  },
  {
    name: 'Houston (TX) MUD Fee Calculator',
    description: 'Calculate MUD (Municipal Utility District) fees and taxes for Houston-area properties',
    category: 'State-Specific Tools',
    icon: '🌟',
    path: '/tools/houston-tx-mud-fee-calculator'
  },
  {
    name: 'Dallas (TX) Property Tax Rate Analyzer',
    description: 'Calculate and compare Dallas-area property tax rates by school district with exemption analysis',
    category: 'State-Specific Tools',
    icon: '🤠',
    path: '/tools/dallas-tx-property-tax-rate-analyzer'
  },
  {
    name: 'Phoenix (AZ) Heat Island Effect Cost',
    description: 'Calculate cooling costs and mitigation strategies for Phoenix urban heat island effects',
    category: 'State-Specific Tools',
    icon: '☀️',
    path: '/tools/phoenix-az-heat-island-effect-cost'
  },
  {
    name: 'Bay Area (CA) Commute vs. Housing Calculator',
    description: 'Compare total costs of living closer vs. farther from work in the San Francisco Bay Area',
    category: 'State-Specific Tools',
    icon: '🌉',
    path: '/tools/bay-area-ca-commute-vs-housing-calculator'
  },
  {
    name: 'California Wildfire Risk (CAL FIRE) Score',
    description: 'Calculate California wildfire risk score for your property using CAL FIRE methodology and FHSZ classifications',
    category: 'Risk Assessment',
    icon: '🔥',
    path: '/tools/california-wildfire-risk-cal-fire-score'
  },
  {
    name: 'California Earthquake Insurance Estimator',
    description: 'Calculate California earthquake insurance costs including CEA coverage options, deductibles, and regional risk premiums',
    category: 'Insurance Tools',
    icon: '🌊',
    path: '/tools/california-earthquake-insurance-estimator'
  },
  {
    name: 'New York "STAR" Exemption Calculator',
    description: 'Calculate New York School Tax Relief (STAR) exemption benefits for Basic and Enhanced STAR programs by county',
    category: 'Tax Strategy & Entity Planning',
    icon: '⭐',
    path: '/tools/new-york-star-exemption-calculator'
  },
  {
    name: 'Florida CDD (Community Development District) Fee Calculator',
    description: 'Calculate Florida CDD fees including debt service, O&M costs, and long-term financial impact on homeownership',
    category: 'State-Specific Tools',
    icon: '🏘️',
    path: '/tools/florida-cdd-fee-calculator'
  },
  {
    name: 'Massachusetts "Title 5" (Septic) Cost Estimator',
    description: 'Estimate Massachusetts Title 5 septic system inspection and repair costs with pass/fail likelihood analysis',
    category: 'Home Improvement',
    icon: '🚰',
    path: '/tools/massachusetts-title-5-septic-cost-estimator'
  },
  {
    name: 'Ohio "Dower" Rights Real Estate Tool',
    description: 'Understand Ohio dower rights impact on property transactions including spousal consent requirements and valuation',
    category: 'State-Specific Tools',
    icon: '💍',
    path: '/tools/ohio-dower-rights-real-estate-tool'
  },
  {
    name: 'Pennsylvania Realty Transfer Tax (Local vs. State)',
    description: 'Calculate Pennsylvania realty transfer tax including state and local rates with county-specific calculations',
    category: 'Tax Strategy & Entity Planning',
    icon: '🔔',
    path: '/tools/pennsylvania-realty-transfer-tax-calculator'
  },
  {
    name: 'South Carolina Property Tax (4% vs. 6%)',
    description: 'Calculate South Carolina property taxes with 4% owner-occupied vs. 6% non-owner assessment ratios and exemptions',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏛️',
    path: '/tools/south-carolina-property-tax-calculator'
  },
  {
    name: 'Utah Property Tax "Truth in Taxation"',
    description: 'Calculate Utah property tax changes under Truth in Taxation law with certified rate analysis and public hearing impact',
    category: 'Tax Strategy & Entity Planning',
    icon: '⛰️',
    path: '/tools/utah-property-tax-truth-in-taxation-tool'
  },
  {
    name: 'Virginia "Car Tax" (Personal Property) Housing Tool',
    description: 'Calculate Virginia personal property tax on vehicles with car tax relief program and locality-specific rates',
    category: 'State-Specific Tools',
    icon: '🚗',
    path: '/tools/virginia-car-tax-personal-property-housing-tool'
  },
  {
    name: 'Wisconsin Use-Value Assessment (Farms)',
    description: 'Calculate property tax savings for Wisconsin farmland enrolled in the Use-Value Assessment program',
    category: 'State-Specific Tools',
    icon: '🌾',
    path: '/tools/wisconsin-use-value-assessment-calculator'
  },
  {
    name: 'Michigan Principal Residence Exemption (PRE)',
    description: 'Calculate property tax savings with Michigan\'s PRE exemption from school operating tax',
    category: 'State-Specific Tools',
    icon: '🏠',
    path: '/tools/michigan-pre-calculator'
  },
  {
    name: 'Arizona Proposition 117 Tax Cap',
    description: 'Calculate how Arizona\'s Proposition 117 limits annual property value increases to protect against rapid tax increases',
    category: 'State-Specific Tools',
    icon: '🏜️',
    path: '/tools/arizona-proposition-117-calculator'
  },
  {
    name: 'Connecticut Property Tax (Mill Rate)',
    description: 'Calculate Connecticut property taxes using the mill rate system with assessment ratios',
    category: 'State-Specific Tools',
    icon: '⚖️',
    path: '/tools/connecticut-mill-rate-calculator'
  },
  {
    name: 'Montana Property Tax Biennial Reappraisal',
    description: 'Calculate property tax changes under Montana\'s biennial reappraisal cycle',
    category: 'State-Specific Tools',
    icon: '⛰️',
    path: '/tools/montana-biennial-reappraisal-calculator'
  },
  {
    name: 'First-Time Home Buyer Tax Credit Finder',
    description: 'Find available first-time home buyer tax credits and incentives based on your location and income',
    category: 'First-Time Homebuyer Tools',
    icon: '🎯',
    path: '/tools/first-time-homebuyer-tax-credit-finder'
  },
  {
    name: 'First-Time Home Buyer Savings Plan',
    description: 'Calculate how much to save monthly for your first home purchase with a personalized timeline',
    category: 'First-Time Homebuyer Tools',
    icon: '💰',
    path: '/tools/first-time-homebuyer-savings-plan'
  },
  {
    name: 'Down Payment Assistance (DPA) Program Finder',
    description: 'Find and estimate eligibility for down payment assistance programs including grants and forgivable loans',
    category: 'First-Time Homebuyer Tools',
    icon: '🎁',
    path: '/tools/down-payment-assistance-finder'
  },
  {
    name: 'Mortgage Credit Certificate (MCC) Calculator',
    description: 'Calculate annual federal tax savings from a Mortgage Credit Certificate program',
    category: 'First-Time Homebuyer Tools',
    icon: '📜',
    path: '/tools/mortgage-credit-certificate-calculator'
  },
  {
    name: 'What Can I Afford (Renter) Calculator',
    description: 'Calculate the maximum rent you can afford based on your income and financial goals',
    category: 'Rent & Lease Tools',
    icon: '🏘️',
    path: '/tools/renter-affordability-calculator'
  },
  {
    name: 'What Can I Afford Calculator (Buyer)',
    description: 'Calculate the maximum home price you can afford based on your income, debt, down payment, and credit score with detailed affordability analysis',
    category: 'Buyer Tools',
    icon: '🏡',
    path: '/tools/what-can-i-afford-buyer-calculator'
  },
  {
    name: 'Rent vs. Buy Calculator (Simple)',
    description: 'Quick comparison tool to determine whether renting or buying makes more financial sense for your situation',
    category: 'Buyer Tools',
    icon: '⚖️',
    path: '/tools/rent-vs-buy-simple-calculator'
  },
  {
    name: 'Cost of Moving Calculator (Renter)',
    description: 'Calculate the total cost of moving to a new rental including deposits, moving expenses, and setup costs',
    category: 'Renter Tools',
    icon: '📦',
    path: '/tools/cost-of-moving-renter-calculator'
  },
  {
    name: 'Cost of Moving Calculator (Buyer)',
    description: 'Calculate comprehensive moving costs for homebuyers including closing costs, moving expenses, immediate repairs, and setup costs',
    category: 'Buyer Tools',
    icon: '🚚',
    path: '/tools/cost-of-moving-buyer-calculator'
  },
  {
    name: 'Renter\'s Insurance Cost Estimator',
    description: 'Estimate the cost of renter\'s insurance based on coverage amount, location, deductible, and personal factors',
    category: 'Renter Tools',
    icon: '🛡️',
    path: '/tools/renters-insurance-cost-estimator'
  },
  {
    name: 'Broker Fee Calculator (Renting)',
    description: 'Calculate rental broker fees and compare costs across different fee structures to understand total move-in expenses',
    category: 'Renter Tools',
    icon: '💼',
    path: '/tools/broker-fee-renting-calculator'
  },
  {
    name: 'Security Deposit Return Checklist',
    description: 'Comprehensive move-out checklist to maximize your security deposit return with cleaning and repair guidelines',
    category: 'Renter Tools',
    icon: '✅',
    path: '/tools/security-deposit-return-checklist'
  },
  {
    name: 'Apartment Hunting Checklist Generator',
    description: 'Generate a personalized apartment hunting checklist based on your priorities, lifestyle, and must-have features',
    category: 'Renter Tools',
    icon: '🔍',
    path: '/tools/apartment-hunting-checklist-generator'
  },
  {
    name: 'Rental Application Document Checklist',
    description: 'Complete checklist of documents needed for rental applications to speed up approval and secure your apartment',
    category: 'Renter Tools',
    icon: '📋',
    path: '/tools/rental-application-document-checklist'
  },
  {
    name: 'Should I Get a Roommate? Calculator',
    description: 'Analyze the financial and lifestyle tradeoffs of living with a roommate to make an informed decision',
    category: 'Renter Tools',
    icon: '👥',
    path: '/tools/should-i-get-a-roommate-calculator'
  },
  
  // New Buyer Tools (10 tools)
  {
    name: 'Rate Lock Cost vs. Benefit Calculator',
    description: 'Compare the cost of locking your mortgage rate versus the potential savings or risks',
    category: 'Buyer Tools',
    icon: '🔒',
    path: '/tools/rate-lock-cost-vs-benefit-calculator'
  },
  {
    name: 'Buyer\'s Agent vs. Dual Agent Comparison',
    description: 'Compare the benefits and risks of using a buyer\'s agent versus dual agency',
    category: 'Buyer Tools',
    icon: '🤝',
    path: '/tools/buyers-agent-vs-dual-agent'
  },
  {
    name: 'Open House Feedback Tracker',
    description: 'Track and analyze feedback from open house visits to make better buying decisions',
    category: 'Buyer Tools',
    icon: '🏠',
    path: '/tools/open-house-feedback-tracker'
  },
  {
    name: 'Property Viewing Scorecard',
    description: 'Rate and score properties during viewings with a comprehensive evaluation system',
    category: 'Buyer Tools',
    icon: '📋',
    path: '/tools/property-viewing-scorecard'
  },
  {
    name: 'Love Letter to Seller Generator',
    description: 'Generate a heartfelt personalized letter to sellers that helps your offer stand out',
    category: 'Buyer Tools',
    icon: '💌',
    path: '/tools/love-letter-to-seller-generator'
  },
  {
    name: 'What Happens at Closing Checklist',
    description: 'Complete step-by-step guide to the home closing process and what to expect',
    category: 'Buyer Tools',
    icon: '✍️',
    path: '/tools/what-happens-at-closing-checklist'
  },
  {
    name: 'Final Walk-Through Checklist',
    description: 'Comprehensive checklist for your final property inspection before closing',
    category: 'Buyer Tools',
    icon: '🔍',
    path: '/tools/final-walk-through-checklist'
  },
  {
    name: 'Moving Truck Rental Cost Estimator',
    description: 'Calculate the total cost of renting a moving truck including all fees and fuel',
    category: 'Buyer Tools',
    icon: '🚚',
    path: '/tools/moving-truck-rental-cost-estimator'
  },
  {
    name: 'Packing Supplies Budget Calculator',
    description: 'Calculate the cost and quantity of moving boxes and packing supplies needed',
    category: 'Buyer Tools',
    icon: '📦',
    path: '/tools/packing-supplies-budget-calculator'
  },
  {
    name: 'Change of Address Checklist',
    description: 'Complete checklist for updating your address with all important organizations',
    category: 'Buyer Tools',
    icon: '📮',
    path: '/tools/change-of-address-checklist'
  },

  // Agent Tools (40 tools)
  {
    name: 'E&O Insurance Cost Calculator',
    description: 'Calculate Errors & Omissions insurance costs based on coverage level, experience, and claims history',
    category: 'Agent Tools',
    icon: '🛡️',
    path: '/tools/eo-insurance-cost-calculator'
  },
  {
    name: 'MLS Fee Tracker',
    description: 'Track and calculate total MLS fees including membership, listing fees, and additional services',
    category: 'Agent Tools',
    icon: '📊',
    path: '/tools/mls-fee-tracker'
  },
  {
    name: 'Realtor Association Dues Tracker',
    description: 'Calculate total association dues including NAR, state, and local board memberships',
    category: 'Agent Tools',
    icon: '💼',
    path: '/tools/realtor-association-dues-tracker'
  },
  {
    name: 'Agent Marketing Budget Calculator',
    description: 'Calculate recommended marketing budget based on income goals and business stage',
    category: 'Agent Tools',
    icon: '💰',
    path: '/tools/agent-marketing-budget-calculator'
  },
  {
    name: 'Zillow Premier Agent ROI Calculator',
    description: 'Calculate ROI for Zillow Premier Agent advertising and lead generation costs',
    category: 'Agent Tools',
    icon: '📈',
    path: '/tools/zillow-premier-agent-roi-calculator'
  },
  {
    name: 'Realtor.com Leads ROI Calculator',
    description: 'Calculate ROI for Realtor.com ReadyConnect Concierge exclusive leads program',
    category: 'Agent Tools',
    icon: '💡',
    path: '/tools/realtor-com-leads-roi-calculator'
  },
  {
    name: 'PPC for Real Estate ROI Calculator',
    description: 'Calculate ROI for Google Ads and pay-per-click campaigns in real estate',
    category: 'Agent Tools',
    icon: '🎯',
    path: '/tools/ppc-real-estate-roi-calculator'
  },
  {
    name: 'Facebook Ads for Real Estate ROI Calculator',
    description: 'Calculate ROI for Facebook and Instagram ad campaigns targeting real estate leads',
    category: 'Agent Tools',
    icon: '📱',
    path: '/tools/facebook-ads-real-estate-roi-calculator'
  },
  {
    name: 'Open House ROI Calculator',
    description: 'Calculate ROI for open houses as a lead generation and marketing strategy',
    category: 'Agent Tools',
    icon: '🏡',
    path: '/tools/open-house-roi-calculator'
  },
  {
    name: 'Direct Mail (Postcard) ROI Calculator',
    description: 'Calculate ROI for direct mail postcard campaigns targeting farm areas',
    category: 'Agent Tools',
    icon: '📬',
    path: '/tools/direct-mail-postcard-roi-calculator'
  },
  {
    name: 'CRM ROI Calculator',
    description: 'Calculate the return on investment for your real estate CRM system and analyze cost savings, productivity gains, and revenue improvements',
    category: 'Agent Tools',
    icon: '💻',
    path: '/tools/crm-roi-calculator'
  },
  {
    name: 'Cost Per Lead (CPL) Calculator',
    description: 'Calculate your marketing cost per lead and optimize your real estate lead generation budget across different channels',
    category: 'Agent Tools',
    icon: '📊',
    path: '/tools/cost-per-lead-calculator'
  },
  {
    name: 'Cost Per Acquisition (CPA) Calculator',
    description: 'Calculate your cost per acquisition for real estate clients and optimize your marketing spend to maximize profitability',
    category: 'Agent Tools',
    icon: '🎯',
    path: '/tools/cost-per-acquisition-calculator'
  },
  {
    name: 'Lead Conversion Rate Calculator',
    description: 'Calculate and analyze your real estate lead conversion rates across different stages of the sales funnel to optimize your conversion strategy',
    category: 'Agent Tools',
    icon: '📈',
    path: '/tools/lead-conversion-rate-calculator'
  },
  {
    name: 'Sphere of Influence (SOI) Potential Calculator',
    description: 'Calculate the potential business value of your sphere of influence and develop a strategy to maximize referrals and repeat business',
    category: 'Agent Tools',
    icon: '👥',
    path: '/tools/sphere-of-influence-potential-calculator'
  },
  {
    name: 'Client Lifetime Value (CLV) Calculator',
    description: 'Calculate the total lifetime value of your real estate clients including repeat business, referrals, and long-term relationship potential',
    category: 'Agent Tools',
    icon: '💎',
    path: '/tools/client-lifetime-value-calculator'
  },
  {
    name: 'Agent Team (Split vs. Salary) Calculator',
    description: 'Compare commission split versus salary compensation models for building and managing your real estate team to determine the most profitable structure',
    category: 'Agent Tools',
    icon: '👨‍💼',
    path: '/tools/agent-team-split-vs-salary-calculator'
  },
  {
    name: "Buyer's Agent Commission Calculator",
    description: "Calculate buyer's agent commission earnings including split structures, transaction fees, and net take-home pay from buyer representation deals",
    category: 'Agent Tools',
    icon: '🏠',
    path: '/tools/buyers-agent-commission-calculator'
  },
  {
    name: 'Listing Agent Commission Calculator',
    description: 'Calculate listing agent commission earnings including co-broke splits, brokerage fees, transaction costs, and net proceeds from seller representation',
    category: 'Agent Tools',
    icon: '📋',
    path: '/tools/listing-agent-commission-calculator'
  },
  {
    name: 'Transaction Coordinator (TC) Cost vs. Benefit Calculator',
    description: 'Calculate the ROI of hiring a transaction coordinator by analyzing time savings, increased capacity, and stress reduction versus the cost of TC services',
    category: 'Agent Tools',
    icon: '📝',
    path: '/tools/transaction-coordinator-cost-vs-benefit-calculator'
  },
  {
    name: 'Virtual Assistant (VA) for Real Estate ROI',
    description: 'Calculate the ROI of hiring a virtual assistant including cost savings, time efficiency, and productivity gains for your real estate business',
    category: 'Agent Tools',
    icon: '💼',
    path: '/tools/virtual-assistant-roi-calculator'
  },
  {
    name: 'Staging Certification ROI Calculator',
    description: 'Calculate the return on investment for obtaining a home staging certification including increased listings, higher commissions, and additional revenue streams',
    category: 'Agent Tools',
    icon: '🏡',
    path: '/tools/staging-certification-roi-calculator'
  },
  {
    name: 'Broker License ROI Calculator',
    description: 'Calculate the ROI of upgrading to a broker license including higher commission splits, team building potential, and brokerage ownership opportunities',
    category: 'Agent Tools',
    icon: '📜',
    path: '/tools/broker-license-roi-calculator'
  },
  {
    name: 'Continuing Education (CE) Tracker',
    description: 'Track your required continuing education credits, course costs, renewal dates, and certification requirements to maintain your real estate license',
    category: 'Agent Tools',
    icon: '📚',
    path: '/tools/continuing-education-tracker'
  },
  {
    name: 'Agent Business Plan Generator',
    description: 'Generate a comprehensive real estate business plan including income goals, marketing strategies, lead generation plans, and financial projections',
    category: 'Agent Tools',
    icon: '📋',
    path: '/tools/agent-business-plan-generator'
  },
  {
    name: 'My Unique Value Proposition (UVP) Generator',
    description: 'Create a compelling unique value proposition that differentiates you from other agents and attracts your ideal clients',
    category: 'Agent Tools',
    icon: '⭐',
    path: '/tools/unique-value-proposition-generator'
  },
  {
    name: 'Client Testimonial Request Generator',
    description: 'Generate professional testimonial request messages customized for email, text, or social media to collect powerful client reviews',
    category: 'Agent Tools',
    icon: '💬',
    path: '/tools/client-testimonial-request-generator'
  },
  {
    name: 'Referral Partner (Loan Officer) Tracker',
    description: 'Track and manage relationships with loan officers, mortgage brokers, and other referral partners including lead exchanges and closed deals',
    category: 'Agent Tools',
    icon: '🤝',
    path: '/tools/referral-partner-tracker'
  },
  {
    name: 'Broker Profitability (Per-Agent) Calculator',
    description: 'Calculate per-agent profitability for brokerages including desk fees, splits, overhead costs, and net profit per agent',
    category: 'Agent Tools',
    icon: '💰',
    path: '/tools/broker-profitability-calculator'
  },
  {
    name: 'Agent SWOT Analysis Generator',
    description: 'Generate a comprehensive SWOT analysis identifying your Strengths, Weaknesses, Opportunities, and Threats as a real estate agent',
    category: 'Agent Tools',
    icon: '🎯',
    path: '/tools/agent-swot-analysis-generator'
  },
  {
    name: 'Agent Website Cost vs. Benefit Calculator',
    description: 'Calculate the ROI of having a professional real estate agent website by comparing costs against lead generation value and client acquisition benefits',
    category: 'Agent Tools',
    icon: '💻',
    path: '/tools/agent-website-cost-vs-benefit'
  },
  {
    name: 'Drone Photography ROI Calculator',
    description: 'Calculate the return on investment for drone photography in real estate listings by analyzing cost vs increased sale price, faster sales, and competitive advantages',
    category: 'Agent Tools',
    icon: '🚁',
    path: '/tools/drone-photography-roi-calculator'
  },
  {
    name: '3D Matterport Tour ROI Calculator',
    description: 'Calculate the return on investment for 3D virtual tours in real estate listings by analyzing cost vs increased engagement, qualified leads, and faster sales',
    category: 'Agent Tools',
    icon: '🏘️',
    path: '/tools/3d-matterport-tour-roi-calculator'
  },
  {
    name: 'Floor Plan Creation Cost Calculator',
    description: 'Calculate the cost and value of professional floor plans for real estate listings, including 2D, 3D, and interactive floor plan options with ROI analysis',
    category: 'Agent Tools',
    icon: '📐',
    path: '/tools/floor-plan-creation-cost'
  },
  {
    name: 'CMA Report Generator',
    description: 'Generate professional comparative market analysis reports for sellers and buyers with accurate pricing analysis, market trends, and competitive property comparisons',
    category: 'Agent Tools',
    icon: '📊',
    path: '/tools/cma-report-generator'
  },
  {
    name: 'Buyer\'s Packet Generator',
    description: 'Create comprehensive buyer packets with educational materials, process guides, checklists, and market information to help buyers navigate their home purchase journey',
    category: 'Agent Tools',
    icon: '📁',
    path: '/tools/buyers-packet-generator'
  },
  {
    name: 'Seller\'s Packet (Listing Presentation) Generator',
    description: 'Create professional listing presentation packets for sellers with market analysis, pricing strategies, marketing plans, and comprehensive selling guides to win more listings',
    category: 'Agent Tools',
    icon: '📋',
    path: '/tools/sellers-packet-generator'
  },
  {
    name: 'Net Sheet Generator (for Seller Clients)',
    description: 'Generate accurate net proceeds calculations for sellers showing exact costs, commissions, and estimated proceeds from their home sale with detailed line-item breakdown',
    category: 'Agent Tools',
    icon: '💵',
    path: '/tools/net-sheet-generator'
  },
  {
    name: 'Property Showing Feedback Form',
    description: 'Collect structured feedback from buyer showings with professional feedback forms that help sellers understand buyer reactions and adjust strategy accordingly',
    category: 'Agent Tools',
    icon: '📝',
    path: '/tools/property-showing-feedback-form'
  },
  {
    name: 'Client Onboarding Checklist (Buyer)',
    description: 'Comprehensive buyer client onboarding checklist ensuring smooth process from first contact to closing with all necessary steps, documents, and communications',
    category: 'Agent Tools',
    icon: '✅',
    path: '/tools/client-onboarding-checklist-buyer'
  },
  {
    name: 'Cool Roof (Reflective) ROI Calculator',
    description: 'Calculate energy savings and return on investment for reflective cool roofing systems that reduce cooling costs and extend roof lifespan',
    category: 'Home Improvement',
    icon: '🏠',
    path: '/tools/cool-roof-reflective-roi-calculator'
  },
  {
    name: 'Green Roof (Living Roof) Cost vs. Benefit',
    description: 'Analyze costs and benefits of installing a green roof including energy savings, stormwater management, and environmental impact',
    category: 'Home Improvement',
    icon: '🌿',
    path: '/tools/green-roof-living-roof-cost-vs-benefit'
  },
  {
    name: 'Geothermal Heating/Cooling ROI Calculator',
    description: 'Calculate installation costs and long-term savings of geothermal HVAC systems with payback period and lifetime energy savings analysis',
    category: 'Home Improvement',
    icon: '🌍',
    path: '/tools/geothermal-heating-cooling-roi-calculator'
  },
  {
    name: 'Tankless Water Heater ROI Calculator',
    description: 'Compare tankless water heater costs vs. traditional tank systems including energy savings, lifespan, and return on investment',
    category: 'Home Improvement',
    icon: '💧',
    path: '/tools/tankless-water-heater-roi-calculator'
  },
  {
    name: 'Heat Pump ROI Calculator',
    description: 'Calculate costs, energy savings, and ROI for heat pump installation vs. traditional HVAC systems with utility rebate analysis',
    category: 'Home Improvement',
    icon: '♨️',
    path: '/tools/heat-pump-roi-calculator'
  },
  {
    name: 'Net Zero Home Cost Calculator',
    description: 'Estimate total costs to build or retrofit a net zero energy home including solar, insulation, and energy-efficient systems',
    category: 'Home Improvement',
    icon: '⚡',
    path: '/tools/net-zero-home-cost-calculator'
  },
  {
    name: 'LEED Certification Cost vs. Benefit',
    description: 'Analyze LEED certification costs, process timeline, and benefits including property value increase and operational savings',
    category: 'Home Improvement',
    icon: '🏆',
    path: '/tools/leed-certification-cost-vs-benefit'
  },
  {
    name: 'HERS Index Score Calculator',
    description: 'Calculate your home energy rating (HERS) score and estimate energy efficiency improvements needed for better ratings',
    category: 'Home Improvement',
    icon: '📊',
    path: '/tools/hers-index-score-calculator'
  },
  {
    name: 'Energy Efficient Mortgage (EEM) Savings',
    description: 'Calculate potential savings and financing options with Energy Efficient Mortgages for green home improvements',
    category: 'Home Improvement',
    icon: '💚',
    path: '/tools/energy-efficient-mortgage-eem-savings'
  },
  {
    name: 'Cash for Clunkers (Appliance) Rebate Finder',
    description: 'Find available rebates and incentives for replacing old appliances with energy-efficient models including federal, state, and utility programs',
    category: 'Home Improvement',
    icon: '🔌',
    path: '/tools/cash-for-clunkers-appliance-rebate-finder'
  },
  {
    name: 'Home Electrification Cost Calculator',
    description: 'Calculate the cost and ROI of converting your home from gas to all-electric appliances including HVAC, water heater, stove, and dryer',
    category: 'Energy Efficiency',
    icon: '⚡',
    path: '/tools/home-electrification-cost-calculator'
  },
  {
    name: 'EV Charger Installation ROI Calculator',
    description: 'Calculate the cost and ROI of installing a Level 2 EV charger at home including installation costs, energy savings vs gas, and tax credits',
    category: 'Energy Efficiency',
    icon: '🔌',
    path: '/tools/ev-charger-installation-roi-calculator'
  },
  {
    name: 'Home Wind Turbine ROI Calculator',
    description: 'Calculate the cost and ROI of installing a residential wind turbine including equipment, tower, installation, and energy production',
    category: 'Energy Efficiency',
    icon: '💨',
    path: '/tools/home-wind-turbine-roi-calculator'
  },
  {
    name: 'Rainwater Harvesting System ROI',
    description: 'Calculate the cost and ROI of installing a rainwater harvesting system including tanks, filtration, plumbing, and water savings',
    category: 'Water Conservation',
    icon: '💧',
    path: '/tools/rainwater-harvesting-system-roi'
  },
  {
    name: 'Greywater System Cost Estimator',
    description: 'Calculate the cost and savings of installing a greywater recycling system for landscape irrigation using shower, sink, and laundry water',
    category: 'Water Conservation',
    icon: '♻️',
    path: '/tools/greywater-system-cost-estimator'
  },
  {
    name: 'Xeriscaping (Low-Water) ROI Calculator',
    description: 'Calculate the cost and water savings of converting your lawn to xeriscape with drought-tolerant plants, reducing irrigation needs by 50-75%',
    category: 'Water Conservation',
    icon: '🌵',
    path: '/tools/xeriscaping-low-water-roi-calculator'
  },
  {
    name: 'Drip Irrigation ROI Calculator',
    description: 'Calculate the cost and water savings of converting from spray irrigation to drip irrigation, reducing water use by 30-50%',
    category: 'Water Conservation',
    icon: '💦',
    path: '/tools/drip-irrigation-roi-calculator'
  },
  {
    name: 'Smart Thermostat ROI Calculator',
    description: 'Calculate the cost and energy savings of installing a smart thermostat, reducing HVAC costs by 10-23% annually',
    category: 'Energy Efficiency',
    icon: '🌡️',
    path: '/tools/smart-thermostat-roi-calculator'
  },
  {
    name: 'Smart Lightbulb ROI Calculator',
    description: 'Calculate the cost and energy savings of replacing traditional bulbs with smart LED bulbs, reducing lighting costs by 75-92%',
    category: 'Energy Efficiency',
    icon: '💡',
    path: '/tools/smart-lightbulb-roi-calculator'
  },
  {
    name: 'Double-Pane vs Triple-Pane Window ROI',
    description: 'Compare the cost and energy savings of double-pane vs triple-pane windows to determine which offers better ROI for your climate',
    category: 'Energy Efficiency',
    icon: '🪟',
    path: '/tools/double-pane-vs-triple-pane-window-roi'
  },
  {
    name: 'Insulation ROI Calculator',
    description: 'Calculate return on investment for attic and wall insulation upgrades including energy savings, installation costs, and payback period',
    category: 'Green & Sustainable',
    icon: '🏠',
    path: '/tools/insulation-roi-calculator'
  },
  {
    name: 'Home Energy Tax Credit Finder',
    description: 'Find federal and state tax credits and rebates for home energy efficiency upgrades including solar, insulation, HVAC, and windows',
    category: 'Green & Sustainable',
    icon: '💰',
    path: '/tools/home-energy-tax-credit-finder'
  },
  {
    name: 'Carbon Footprint of Home Calculator',
    description: 'Calculate your home\'s carbon footprint from energy use, heating, cooling, and identify opportunities to reduce greenhouse gas emissions',
    category: 'Green & Sustainable',
    icon: '🌍',
    path: '/tools/carbon-footprint-home-calculator'
  },
  {
    name: 'Sustainable Building Materials Calculator',
    description: 'Calculate costs and environmental impact of sustainable building materials vs conventional options for green home construction and renovation',
    category: 'Green & Sustainable',
    icon: '🌱',
    path: '/tools/sustainable-building-materials-calculator'
  },
  {
    name: 'Green Mortgage Lender Finder',
    description: 'Find green mortgage lenders offering special financing for energy-efficient homes including FHA EEM, Fannie Mae HomeStyle Energy, and green home loans',
    category: 'Green & Sustainable',
    icon: '🏦',
    path: '/tools/green-mortgage-lender-finder'
  },
  {
    name: 'ADU (Green Build) Cost Estimator',
    description: 'Estimate costs for building a sustainable, energy-efficient ADU with green materials, solar panels, and efficient systems',
    category: 'Green & Sustainable',
    icon: '🏡',
    path: '/tools/adu-green-build-cost-estimator'
  },
  {
    name: 'Off-Grid Home Feasibility Calculator',
    description: 'Calculate costs and feasibility of going off-grid with solar power, water systems, septic, and energy storage for self-sufficient living',
    category: 'Green & Sustainable',
    icon: '⚡',
    path: '/tools/off-grid-home-feasibility-calculator'
  },
  {
    name: 'Passive House Cost vs Benefit Calculator',
    description: 'Calculate costs and benefits of building to Passive House standard including construction premium, energy savings, and comfort benefits',
    category: 'Green & Sustainable',
    icon: '🏠',
    path: '/tools/passive-house-cost-benefit-calculator'
  },
  {
    name: 'Home Composting Waste Savings Calculator',
    description: 'Calculate savings on waste bills and environmental impact from home composting food scraps and yard waste',
    category: 'Green & Sustainable',
    icon: '♻️',
    path: '/tools/home-composting-waste-savings-calculator'
  },
  {
    name: 'Local Green Rebate Finder by ZIP Code',
    description: 'Find local, state, and utility green rebates and incentives for energy efficiency upgrades by ZIP code',
    category: 'Green & Sustainable',
    icon: '🔍',
    path: '/tools/green-rebate-finder-by-zip'
  },
  {
    name: 'Inflate-Proof Home (Energy) Calculator',
    description: 'Calculate long-term energy savings and protection against rising utility costs with energy-efficient home improvements',
    category: 'Green & Sustainable',
    icon: '🛡️',
    path: '/tools/inflate-proof-home-energy-calculator'
  },
  {
    name: 'Drought-Tolerant Landscaping Cost Calculator',
    description: 'Calculate costs and water savings from drought-resistant landscaping and xeriscaping',
    category: 'Green & Sustainable',
    icon: '🌵',
    path: '/tools/drought-tolerant-landscaping-cost'
  },
  {
    name: 'Deconstruction vs Demolition Value Calculator',
    description: 'Compare costs and benefits of deconstructing vs demolishing a building, including material salvage value and tax deductions',
    category: 'Green & Sustainable',
    icon: '🔨',
    path: '/tools/deconstruction-vs-demolition-value'
  },
  {
    name: 'Reclaimed Materials Value Estimator',
    description: 'Estimate the market value of reclaimed building materials for renovation or resale',
    category: 'Green & Sustainable',
    icon: '♻️',
    path: '/tools/reclaimed-materials-value-estimator'
  },
  {
    name: 'Walk Score vs Driving Cost Calculator',
    description: 'Compare the financial impact of walkable neighborhoods vs car-dependent locations',
    category: 'Green & Sustainable',
    icon: '🚶',
    path: '/tools/walk-score-vs-driving-cost-calculator'
  },
  {
    name: 'Bike Score (Impact on Health Savings) Calculator',
    description: 'Calculate health and financial benefits from living in bike-friendly neighborhoods',
    category: 'Green & Sustainable',
    icon: '🚴',
    path: '/tools/bike-score-health-savings-calculator'
  },
  {
    name: 'Proximity to Public Transit Savings Calculator',
    description: 'Calculate financial benefits of living near quality public transportation',
    category: 'Green & Sustainable',
    icon: '🚇',
    path: '/tools/transit-proximity-savings-calculator'
  },
  {
    name: 'Community Solar vs Rooftop Solar Calculator',
    description: 'Compare costs and benefits of community solar programs vs installing rooftop solar panels',
    category: 'Green & Sustainable',
    icon: '☀️',
    path: '/tools/community-solar-vs-rooftop-solar'
  },
  {
    name: 'Aging in Place (Green) Renovation Calculator',
    description: 'Calculate costs and benefits of eco-friendly home modifications for aging in place',
    category: 'Green & Sustainable',
    icon: '🏡',
    path: '/tools/aging-in-place-green-renovation'
  },
  {
    name: 'Non-Toxic Building Material Finder',
    description: 'Find and compare costs of healthy, non-toxic building materials vs conventional options',
    category: 'Green & Sustainable',
    icon: '🌿',
    path: '/tools/non-toxic-building-material-finder'
  },
  {
    name: 'Home Air Quality (IAQ) Improvement ROI Calculator',
    description: 'Calculate the return on investment for improving indoor air quality with air purifiers, HVAC upgrades, and ventilation systems',
    category: 'Green & Sustainable',
    icon: '🌬️',
    path: '/tools/home-air-quality-iaq-improvement-roi'
  },
  {
    name: 'Radon Mitigation System Cost Calculator',
    description: 'Estimate the cost of installing a radon mitigation system and calculate long-term health benefits and home value impact',
    category: 'Green & Sustainable',
    icon: '☢️',
    path: '/tools/radon-mitigation-system-cost'
  },
  {
    name: 'Water-Efficient Fixture ROI Calculator',
    description: 'Calculate savings from installing water-efficient toilets, faucets, and showerheads with payback period and environmental impact',
    category: 'Green & Sustainable',
    icon: '💧',
    path: '/tools/water-efficient-fixture-roi'
  },
  {
    name: 'Pool Solar Heater ROI Calculator',
    description: 'Calculate the return on investment for solar pool heating systems including installation costs, energy savings, and extended swimming season value',
    category: 'Green & Sustainable',
    icon: '🏊',
    path: '/tools/pool-solar-heater-roi-calculator'
  },
  {
    name: 'Sustainable Home Feature Value-Add Calculator',
    description: 'Calculate how much green and sustainable home features add to your property value including solar, smart tech, and energy-efficient upgrades',
    category: 'Green & Sustainable',
    icon: '🏡',
    path: '/tools/sustainable-home-feature-value-add'
  },
  {
    name: 'Real Estate Contract Review Checklist',
    description: 'Comprehensive checklist to review purchase agreements, spot red flags, and ensure all critical contract elements are properly addressed before signing',
    category: 'Legal & Compliance',
    icon: '📋',
    path: '/tools/real-estate-contract-review-checklist'
  },
  {
    name: 'Title Search "Red Flag" Finder',
    description: 'Identify potential title issues, liens, encumbrances, and ownership problems before closing to protect your real estate investment',
    category: 'Legal & Compliance',
    icon: '🚩',
    path: '/tools/title-search-red-flag-finder'
  },
  {
    name: 'Cloud on Title Risk Calculator',
    description: 'Assess the financial and legal risk of purchasing property with a "cloud on title" - defects that impair clear ownership',
    category: 'Legal & Compliance',
    icon: '⚠️',
    path: '/tools/cloud-on-title-risk-calculator'
  },
  {
    name: 'Easement Finder (by Address)',
    description: 'Discover potential easements affecting your property and understand their impact on ownership rights, land use, and property value',
    category: 'Legal & Compliance',
    icon: '🗺️',
    path: '/tools/easement-finder-by-address'
  },
  {
    name: 'Property Line (Encroachment) Analyzer',
    description: 'Identify and assess potential property line encroachment issues including fences, structures, driveways, and trees that cross boundary lines',
    category: 'Legal & Compliance',
    icon: '📏',
    path: '/tools/property-line-encroachment-analyzer'
  },
  {
    name: 'Adverse Possession (Squatter\'s Rights) Checker',
    description: 'Analyze potential adverse possession claims and understand squatter\'s rights laws by state',
    category: 'Legal & Compliance',
    icon: '⚖️',
    path: '/tools/adverse-possession-checker'
  },
  {
    name: 'HOA Special Assessment Risk Calculator',
    description: 'Evaluate the risk of unexpected HOA special assessments and estimate potential costs',
    category: 'Legal & Compliance',
    icon: '🏘️',
    path: '/tools/hoa-special-assessment-risk-calculator'
  },
  {
    name: 'HOA Document (CC&Rs) Red Flag Finder',
    description: 'Identify potential red flags and restrictive covenants in HOA CC&Rs before you buy',
    category: 'Legal & Compliance',
    icon: '🚩',
    path: '/tools/hoa-ccrs-red-flag-finder'
  },
  {
    name: 'Lis Pendens (Pending Lawsuit) Checker',
    description: 'Assess the risk and impact of a lis pendens notice on property purchase or sale',
    category: 'Legal & Compliance',
    icon: '⚠️',
    path: '/tools/lis-pendens-checker'
  },
  {
    name: 'Mechanic\'s Lien Risk Analyzer',
    description: 'Assess the risk of mechanic\'s liens on property and calculate potential exposure',
    category: 'Legal & Compliance',
    icon: '🔧',
    path: '/tools/mechanics-lien-risk-analyzer'
  },
  {
    name: 'Due on Sale Clause Analyzer',
    description: 'Analyze due-on-sale clause implications and creative financing strategies',
    category: 'Legal & Compliance',
    icon: '📜',
    path: '/tools/due-on-sale-clause-analyzer'
  },
  {
    name: 'Acceleration Clause Analyzer',
    description: 'Understand acceleration clauses in mortgages and how they affect default scenarios',
    category: 'Legal & Compliance',
    icon: '⏩',
    path: '/tools/acceleration-clause-analyzer'
  },
  {
    name: 'Prepayment Penalty Calculator',
    description: 'Calculate prepayment penalties when paying off your mortgage early or refinancing',
    category: 'Financial Analysis',
    icon: '💰',
    path: '/tools/prepayment-penalty-calculator'
  },
  {
    name: 'Usury Law (Loan Shark) Checker by State',
    description: 'Check if an interest rate violates usury laws and maximum legal rates by state',
    category: 'Legal & Compliance',
    icon: '🏦',
    path: '/tools/usury-law-checker'
  },
  {
    name: 'Seasoning Requirement (Flipping) Checker',
    description: 'Check seasoning requirements for property flips and rapid resales to avoid lending issues',
    category: 'Legal & Compliance',
    icon: '🔄',
    path: '/tools/seasoning-requirement-checker'
  },
  {
    name: 'Short Sale vs. Foreclosure Calculator',
    description: 'Compare the financial and credit impact of short sale versus foreclosure',
    category: 'Legal & Compliance',
    icon: '🏚️',
    path: '/tools/short-sale-vs-foreclosure-calculator'
  },
  {
    name: 'Probate (Real Estate) Process Estimator',
    description: 'Estimate timeline, costs, and steps for probate real estate transactions',
    category: 'Legal & Compliance',
    icon: '⚖️',
    path: '/tools/probate-real-estate-process-estimator'
  },
  {
    name: 'Intestate (No Will) Succession Calculator',
    description: 'Calculate how assets are distributed when someone dies without a will',
    category: 'Legal & Compliance',
    icon: '👨‍👩‍👧‍👦',
    path: '/tools/intestate-no-will-succession-calculator'
  },
  {
    name: 'Land Trust (Privacy) Setup Cost',
    description: 'Calculate costs to establish a land trust for property privacy and asset protection',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏞️',
    path: '/tools/land-trust-privacy-setup-cost'
  },
  {
    name: 'Series LLC vs. Traditional LLC (for Investors)',
    description: 'Compare costs and benefits of Series LLC versus multiple traditional LLCs for real estate portfolios',
    category: 'Tax Strategy & Entity Planning',
    icon: '🏢',
    path: '/tools/series-llc-vs-traditional-llc-calculator'
  },
  {
    name: 'Days on Market (DOM) Analyzer (by ZIP Code)',
    description: 'Analyze property days on market trends and pricing strategy by ZIP code',
    category: 'Market Analysis',
    icon: '📅',
    path: '/tools/days-on-market-dom-analyzer'
  },
  {
    name: 'Sale-to-List Price Ratio Calculator',
    description: 'Calculate the sale-to-list price ratio to analyze market strength and pricing accuracy',
    category: 'Market Analysis',
    icon: '📊',
    path: '/tools/sale-to-list-price-ratio-calculator'
  },
  {
    name: 'Absorption Rate Calculator (Real Estate)',
    description: 'Calculate market absorption rate to determine how quickly properties are selling',
    category: 'Market Analysis',
    icon: '📈',
    path: '/tools/absorption-rate-calculator'
  },
  {
    name: 'Months of Supply (Inventory) Calculator',
    description: 'Calculate real estate inventory levels and months of supply to gauge market strength',
    category: 'Market Analysis',
    icon: '📦',
    path: '/tools/months-of-supply-inventory-calculator'
  },
  {
    name: 'Housing Affordability Index (Local)',
    description: 'Calculate local housing affordability index to compare income vs. home prices',
    category: 'Market Analysis',
    icon: '🏘️',
    path: '/tools/housing-affordability-index-local'
  },
  {
    name: 'Price-to-Rent Ratio Calculator',
    description: 'Calculate price-to-rent ratio to determine if buying or renting is more financially beneficial',
    category: 'Market Analysis',
    icon: '🏠',
    path: '/tools/price-to-rent-ratio-calculator'
  },
  {
    name: 'Gentrification Indicator Tool',
    description: 'Analyze neighborhood gentrification trends and predict property value appreciation potential',
    category: 'Market Analysis',
    icon: '📊',
    path: '/tools/gentrification-indicator'
  },
  {
    name: 'Best Place to Live Quiz',
    description: 'Find your ideal city based on climate, cost of living, job market, and lifestyle preferences',
    category: 'Lifestyle Planning',
    icon: '🗺️',
    path: '/tools/best-place-to-live-quiz'
  },
  {
    name: 'Best Place to Retire Calculator',
    description: 'Find the best retirement cities based on cost of living, healthcare, climate, and taxes',
    category: 'Lifestyle Planning',
    icon: '🏖️',
    path: '/tools/best-place-to-retire-calculator'
  },
  {
    name: 'Best City For Analyzer',
    description: 'Find the best US cities for specific professions, industries, or lifestyles',
    category: 'Market Analysis',
    icon: '🌆',
    path: '/tools/best-city-for-analyzer'
  },
  {
    name: 'Where Can I Afford to Live Map',
    description: 'Calculate which US cities you can afford based on your income and housing budget',
    category: 'Financial Planning',
    icon: '🗺️',
    path: '/tools/where-can-i-afford-to-live-map'
  },
  {
    name: 'Commute Time vs Affordability Map',
    description: 'Analyze the trade-off between housing affordability and commute time',
    category: 'Market Analysis',
    icon: '🚗',
    path: '/tools/commute-time-vs-affordability-map'
  },
  {
    name: 'School District vs Property Value',
    description: 'Analyze how school quality affects property values and calculate the premium',
    category: 'Market Analysis',
    icon: '🎓',
    path: '/tools/school-district-vs-property-value'
  },
  {
    name: 'Median Income vs Median Home Price',
    description: 'Analyze housing affordability by comparing median income to median home prices',
    category: 'Market Analysis',
    icon: '📈',
    path: '/tools/median-income-vs-median-home-price'
  },
  {
    name: 'Population Growth vs Construction',
    description: 'Analyze market dynamics by comparing population growth to new housing construction',
    category: 'Market Analysis',
    icon: '🏗️',
    path: '/tools/population-growth-vs-construction'
  },
  {
    name: 'Job Growth (by MSA) Analyzer',
    description: 'Analyze job growth trends by Metropolitan Statistical Area to identify strong real estate markets',
    category: 'Market Analysis',
    icon: '💼',
    path: '/tools/job-growth-msa-analyzer'
  },
  {
    name: 'Hottest ZIP Codes (US) Finder',
    description: 'Identify the hottest ZIP codes with rapid price appreciation and high demand across the United States',
    category: 'Market Analysis',
    icon: '🔥',
    path: '/tools/hottest-zip-codes-finder'
  },
  {
    name: 'Cooling Markets (Price Drop) Finder',
    description: 'Identify cooling real estate markets with price drops and increasing inventory for potential opportunities',
    category: 'Market Analysis',
    icon: '❄️',
    path: '/tools/cooling-markets-finder'
  },
  {
    name: 'Foreclosure Rate (by County)',
    description: 'Track and analyze foreclosure rates by county to identify distressed property opportunities and market risk',
    category: 'Market Analysis',
    icon: '🏚️',
    path: '/tools/foreclosure-rate-calculator'
  },
  {
    name: 'New Construction Permit Tracker',
    description: 'Track new construction permits to identify growing markets and development opportunities',
    category: 'Market Analysis',
    icon: '🏗️',
    path: '/tools/new-construction-permit-tracker'
  },
  {
    name: 'Building Cost Index (Local)',
    description: 'Calculate local construction cost index to estimate building expenses and compare markets',
    category: 'Construction & Development',
    icon: '💰',
    path: '/tools/building-cost-index-calculator'
  },
  {
    name: 'Lumber Price Impact on Home Cost',
    description: 'Calculate how lumber price fluctuations impact new home construction costs and project budgets',
    category: 'Construction & Development',
    icon: '🪵',
    path: '/tools/lumber-price-impact-calculator'
  },
  {
    name: 'Concrete Price Impact on Home Cost',
    description: 'Calculate how concrete price changes affect foundation and construction costs for residential projects',
    category: 'Construction & Development',
    icon: '🏗️',
    path: '/tools/concrete-price-impact-calculator'
  },
  {
    name: 'Interest Rate vs Home Price Simulator',
    description: 'Simulate how interest rate changes affect home prices and affordability in real-time',
    category: 'Market Analysis',
    icon: '📊',
    path: '/tools/interest-rate-home-price-simulator'
  },
  {
    name: 'What if Rates Drop (Refinance) Tool',
    description: 'Calculate potential savings and break-even timeline if mortgage rates drop and you refinance',
    category: 'Mortgage & Financing',
    icon: '💸',
    path: '/tools/refinance-rate-drop-calculator'
  },

  // New Additional Tools - Lifestyle & Investment Quizzes and Comparisons
  {
    name: 'Am I Ready to Be a Landlord? Quiz',
    description: 'Assess if you\'re financially and emotionally prepared for landlord responsibilities. Evaluate your capital, risk tolerance, time commitment, and property management readiness',
    category: 'Additional Tools',
    icon: '🏘️',
    path: '/tools/am-i-ready-to-be-a-landlord-quiz'
  },
  {
    name: 'Am I a Fix-and-Flipper? Quiz',
    description: 'Discover if house flipping is right for you. Assess your capital, construction knowledge, risk tolerance, time availability, and market expertise for successful flips',
    category: 'Additional Tools',
    icon: '🔨',
    path: '/tools/am-i-a-fix-and-flipper-quiz'
  },
  {
    name: 'What\'s My Investor Profile? Quiz',
    description: 'Identify your real estate investor profile based on risk tolerance, capital, experience, goals, and time horizon. Get personalized investment strategy recommendations',
    category: 'Additional Tools',
    icon: '📊',
    path: '/tools/whats-my-investor-profile-quiz'
  },
  {
    name: 'Celebrity Home Price Guesser',
    description: 'Test your knowledge of celebrity real estate! Guess the prices of famous mansions, estates, and luxury homes owned by celebrities. Fun property valuation game',
    category: 'Additional Tools',
    icon: '🌟',
    path: '/tools/celebrity-home-price-guesser'
  },
  {
    name: 'How Much is This Famous House?',
    description: 'Test your real estate knowledge! Guess the value of famous houses from movies, TV shows, and history. Learn about iconic properties and their market values',
    category: 'Additional Tools',
    icon: '🎬',
    path: '/tools/famous-house-price-quiz'
  },
  {
    name: 'Dream Home Budget Generator',
    description: 'Generate a personalized budget for your dream home based on income, savings, lifestyle preferences, and financial goals. Plan your ideal home purchase realistically',
    category: 'Additional Tools',
    icon: '💭',
    path: '/tools/dream-home-budget-generator'
  },
  {
    name: 'Tiny Home vs Single-Family Home Cost Calculator',
    description: 'Compare the total costs of tiny home living vs traditional single-family homes. Analyze purchase price, utilities, maintenance, insurance, and lifestyle trade-offs',
    category: 'Additional Tools',
    icon: '🏡',
    path: '/tools/tiny-home-vs-sfh-cost-calculator'
  },
  {
    name: 'Van Life vs Renting Cost Calculator',
    description: 'Compare the total costs of van life vs traditional renting. Analyze vehicle costs, gas, insurance, gym memberships, rent, utilities, and lifestyle factors',
    category: 'Additional Tools',
    icon: '🚐',
    path: '/tools/van-life-vs-renting-cost'
  },
  {
    name: 'Houseboat vs Condo Cost Calculator',
    description: 'Compare the costs of houseboat living vs condo ownership. Analyze purchase price, moorage fees, maintenance, utilities, insurance, and unique considerations',
    category: 'Additional Tools',
    icon: '⚓',
    path: '/tools/houseboat-vs-condo-cost'
  },
  {
    name: 'Shipping Container Home Cost Estimator',
    description: 'Estimate the total cost to build a shipping container home. Calculate container purchase, modifications, foundation, utilities, permits, and finishing costs',
    category: 'Additional Tools',
    icon: '📦',
    path: '/tools/shipping-container-home-cost-estimator'
  },
  {
    name: 'iBuyer Offer Estimator',
    description: 'Estimate what Opendoor, Offerpad, and other iBuyers might offer for your home. Compare instant cash offers vs traditional sale prices',
    category: 'Seller Tools',
    icon: '🏢',
    path: '/tools/ibuyer-offer-estimator'
  },
  {
    name: 'Real Estate Scam Checker',
    description: 'Identify common real estate scams and warning signs. Protect yourself from fraud, fake listings, wire fraud, and rental scams',
    category: 'Risk Assessment',
    icon: '🚨',
    path: '/tools/real-estate-scam-checker'
  },
  {
    name: 'Real Estate Agent Red Flag Checker',
    description: 'Evaluate your real estate agent for warning signs. Check credentials, experience, reviews, and identify potential red flags before hiring',
    category: 'Agent Tools',
    icon: '🔍',
    path: '/tools/real-estate-agent-red-flag-checker'
  },
  {
    name: 'Contractor Red Flag Checker',
    description: 'Vet contractors before hiring. Check licenses, insurance, reviews, and identify warning signs to avoid fraudulent or unreliable contractors',
    category: 'Construction & Development',
    icon: '⚠️',
    path: '/tools/contractor-red-flag-checker'
  },
  {
    name: 'Title Company Fee Estimator',
    description: 'Estimate title company fees including title search, title insurance, settlement fees, and closing costs for your property transaction',
    category: 'Legal & Compliance',
    icon: '📜',
    path: '/tools/title-company-fee-estimator'
  },
  {
    name: 'Home Appraiser Fee Estimator',
    description: 'Calculate home appraisal costs based on property type, size, location, and appraisal complexity. Compare typical fees across different markets',
    category: 'Property Valuation',
    icon: '📋',
    path: '/tools/home-appraiser-fee-estimator'
  },
  {
    name: 'Land Surveyor Fee Estimator',
    description: 'Estimate land surveying costs including boundary surveys, topographic surveys, ALTA surveys, and subdivision plats based on property characteristics',
    category: 'Legal & Compliance',
    icon: '🗺️',
    path: '/tools/land-surveyor-fee-estimator'
  },
  {
    name: 'Home Inspector Fee Estimator',
    description: 'Calculate home inspection costs based on property size, age, type, and additional inspections like radon, mold, or termite testing',
    category: 'Risk Assessment',
    icon: '🔎',
    path: '/tools/home-inspector-fee-estimator'
  },
  {
    name: 'Real Estate Attorney Fee Estimator',
    description: 'Estimate real estate attorney fees for closings, contract reviews, title disputes, and legal consultations based on transaction complexity',
    category: 'Legal & Compliance',
    icon: '⚖️',
    path: '/tools/real-estate-attorney-fee-estimator'
  },
  {
    name: 'Property Manager Fee Calculator',
    description: 'Calculate commercial property management fees including monthly management, leasing commissions, maintenance markups, and additional service costs',
    category: 'Rental & Income',
    icon: '🏬',
    path: '/tools/property-manager-commercial-fee-calculator'
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
  'Agent Tools',
  'Tax Strategy & Entity Planning',
  'Additional Tools',
  'Home Improvement',
  'Lifestyle & Housing',
  'Lifestyle Planning',
  'State-Specific Tools',
  'First-Time Homebuyer Tools',
  'Buyer Tools',
  'Renter Tools',
  'Rent & Lease Tools',
  'Energy Efficiency',
  'Water Conservation',
  'Green & Sustainable',
  'Legal & Compliance',
  'Construction & Development',
  'Mortgage & Financing'
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
