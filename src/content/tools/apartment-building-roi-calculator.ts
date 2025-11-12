import { CalculatorContent } from "@/types";

export const APARTMENT_BUILDING_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Apartment Building ROI Calculator",
  description: "Calculate return on investment for multifamily apartment buildings with detailed income, expense, and financing analysis.",
  icon: "Icon",
  category: "Real Estate",
  slug: "apartment-building-roi-calculator",
  article: {
    title: "Apartment Building ROI Calculator - Analyze Multifamily Investments",
    content: `
    An apartment building ROI calculator helps real estate investors evaluate the profitability and return potential of multifamily properties ranging from small duplexes to large apartment complexes.

    ### Understanding Apartment Building Investments

    Multifamily properties are one of the most popular commercial real estate investments due to their:

    - **Stable cash flow:** Multiple tenants reduce vacancy risk
    - **Economies of scale:** Lower per-unit operating costs
    - **Appreciation potential:** Value based on income, not just comps
    - **Financing advantages:** Better loan terms than smaller properties
    - **Tax benefits:** Depreciation, cost segregation, and 1031 exchanges

    ### Key ROI Metrics for Apartment Buildings

    **1. Cash-on-Cash Return**
    Annual pre-tax cash flow divided by total cash invested. Target: 8-12%+ for most markets.

    **2. Cap Rate (Capitalization Rate)**
    Net operating income divided by purchase price. Varies by market and property class (4-10%).

    **3. Internal Rate of Return (IRR)**
    Time-weighted return including cash flow and appreciation. Target: 15-20%+ for value-add deals.

    **4. Equity Multiple**
    Total cash returned divided by total cash invested. Target: 2.0x+ over 5-7 years.

    **5. Gross Rent Multiplier (GRM)**
    Purchase price divided by gross annual income. Lower is better (quick screening tool).

    ### Property Classifications

    **Class A Properties**
    - Newest buildings (0-10 years old)
    - Premium locations and amenities
    - Highest rents, lowest cap rates (3-5%)
    - Professional management required
    - Best appreciation potential

    **Class B Properties**
    - Mid-age buildings (10-25 years old)
    - Good locations, standard amenities
    - Moderate rents and cap rates (5-7%)
    - Balance of cash flow and appreciation
    - Most popular with investors

    **Class C Properties**
    - Older buildings (25+ years old)
    - Workforce housing areas
    - Lower rents, higher cap rates (7-10%)
    - Higher cash flow, more management intensive
    - Value-add opportunities

    ### Income Analysis

    **Gross Rental Income**
    Total potential rental income if 100% occupied at market rates.

    **Effective Rental Income**
    Gross rental income minus vacancy and collection losses (typically 5-10%).

    **Other Income**
    - Laundry facilities
    - Parking fees
    - Pet fees
    - Storage rentals
    - Application fees
    - Late fees
    - Utility bill-backs

    **Total Operating Income**
    Effective rental income plus other income sources.

    ### Operating Expenses

    **Fixed Expenses (Unavoidable)**
    - Property taxes (1-2% of property value annually)
    - Insurance (0.3-0.7% of property value)
    - Property management (3-10% of gross income)

    **Variable Expenses**
    - Utilities (if owner-paid): Water, sewer, trash, electricity, gas
    - Maintenance and repairs (5-10% of gross income)
    - Landscaping and snow removal
    - Pest control
    - Common area cleaning

    **Reserves**
    - Capital expenditures (CapEx): 5-10% of gross income
    - Replacement reserves for: Roofs, HVAC, appliances, parking lots, etc.

    ### The 50% Rule

    A quick estimation method: Operating expenses typically equal 50% of gross rental income (not including debt service). This helps with initial screening before detailed analysis.

    ### Value-Add Strategies for Apartment Buildings

    **Rental Income Increases**
    - Unit renovations (kitchens, bathrooms, flooring)
    - Adding washers/dryers in units
    - Cosmetic upgrades (paint, fixtures, hardware)
    - Improving curb appeal and common areas
    - Adding amenities (gym, pet areas, covered parking)

    **Expense Reductions**
    - Energy-efficient upgrades (LED lighting, low-flow fixtures)
    - Separate utility metering (bill tenants directly)
    - Renegotiate service contracts
    - Implement preventive maintenance programs
    - Use technology for operations efficiency

    **Other Income Opportunities**
    - Install coin-op laundry or upgrade to card systems
    - Charge for covered/reserved parking
    - Implement pet fees/rent
    - Add storage units
    - Install vending machines
    - Offer furnished units at premium

    ### Financing Apartment Buildings

    **Conventional Loans**
    - 20-30% down payment
    - Fixed or variable rates
    - 5-10 year terms with 25-30 year amortization
    - Requires 1.25x DSCR minimum

    **Agency Loans (Fannie Mae / Freddie Mac)**
    - Best rates for properties 5+ units
    - Non-recourse options available
    - Longer terms (7-10 years)
    - Strict underwriting standards

    **Commercial Bridge Loans**
    - For value-add acquisitions
    - 12-24 month terms
    - Higher rates (7-12%)
    - Interest-only payments common

    ### How This Calculator Works

    This calculator provides comprehensive analysis including:

    1. **Gross Operating Income:** Total income from all sources
    2. **Net Operating Income:** After all operating expenses
    3. **Cash Flow:** After debt service
    4. **Cash-on-Cash Return:** Annual return on invested capital
    5. **Cap Rate:** Property's income yield
    6. **ROI Percentage:** Total return on investment
    7. **Break-Even Occupancy:** Minimum occupancy needed to cover expenses

    ### Tips for Successful Apartment Investing

    **Due Diligence Checklist:**
    - Review 3+ years of actual income/expense statements
    - Verify rent roll and occupancy history
    - Inspect all units and common areas
    - Review lease terms and tenant profiles
    - Analyze local market rent trends
    - Check deferred maintenance items
    - Verify property taxes (may increase after sale)
    - Review zoning and development plans nearby

    **Common Mistakes to Avoid:**
    - Underestimating operating expenses
    - Using projected instead of actual rents
    - Ignoring capital expenditure needs
    - Over-leveraging with high debt service
    - Buying in declining markets
    - Insufficient reserves for vacancies
    - Not accounting for management time/costs

    Use this calculator to model different scenarios and make data-driven investment decisions on multifamily apartment properties.
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: "3000000",
      },
      {
        name: "numberOfUnits",
        label: "Number of Units",
        type: "number",
        defaultValue: "24",
      },
      {
        name: "averageRentPerUnit",
        label: "Average Monthly Rent per Unit",
        type: "number",
        defaultValue: "1200",
      },
      {
        name: "otherIncome",
        label: "Other Monthly Income (Laundry, Parking, etc.)",
        type: "number",
        defaultValue: "800",
      },
      {
        name: "vacancyRate",
        label: "Vacancy Rate (%)",
        type: "number",
        defaultValue: "7",
      },
      {
        name: "propertyTaxes",
        label: "Annual Property Taxes",
        type: "number",
        defaultValue: "36000",
      },
      {
        name: "insurance",
        label: "Annual Insurance",
        type: "number",
        defaultValue: "12000",
      },
      {
        name: "utilities",
        label: "Monthly Utilities (Owner-Paid)",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "maintenance",
        label: "Monthly Maintenance & Repairs",
        type: "number",
        defaultValue: "2000",
      },
      {
        name: "propertyManagement",
        label: "Property Management (% of Gross Income)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "capexReserve",
        label: "CapEx Reserve (% of Gross Income)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "downPayment",
        label: "Down Payment",
        type: "number",
        defaultValue: "750000",
      },
      {
        name: "interestRate",
        label: "Loan Interest Rate (%)",
        type: "number",
        defaultValue: "7",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
      {
        name: "closingCosts",
        label: "Closing Costs",
        type: "number",
        defaultValue: "60000",
      },
    ],
    results: [
      { label: "Gross Annual Income", isCurrency: true },
      { label: "Effective Annual Income", isCurrency: true },
      { label: "Total Operating Expenses", isCurrency: true },
      { label: "Net Operating Income (NOI)", isCurrency: true },
      { label: "Annual Debt Service", isCurrency: true },
      { label: "Annual Cash Flow", isCurrency: true },
      { label: "Total Cash Invested", isCurrency: true },
      { label: "Cap Rate", isCurrency: false },
      { label: "Cash-on-Cash Return", isCurrency: false },
      { label: "ROI", isCurrency: false },
      { label: "Break-Even Occupancy", isCurrency: false },
      { label: "Gross Rent Multiplier (GRM)", isCurrency: false },
    ],
    calculate: (values) => {
      const { 
        purchasePrice, numberOfUnits, averageRentPerUnit, otherIncome, vacancyRate,
        propertyTaxes, insurance, utilities, maintenance, propertyManagement, capexReserve,
        downPayment, interestRate, loanTerm, closingCosts
      } = values;
      
      const grossMonthlyRentalIncome = numberOfUnits * averageRentPerUnit;
      const grossAnnualIncome = (grossMonthlyRentalIncome + otherIncome) * 12;
      const vacancyLoss = grossAnnualIncome * (vacancyRate / 100);
      const effectiveAnnualIncome = grossAnnualIncome - vacancyLoss;
      
      const annualUtilities = utilities * 12;
      const annualMaintenance = maintenance * 12;
      const managementFees = grossAnnualIncome * (propertyManagement / 100);
      const capexReserves = grossAnnualIncome * (capexReserve / 100);
      
      const totalOperatingExpenses = propertyTaxes + insurance + annualUtilities + annualMaintenance + managementFees + capexReserves;
      const noi = effectiveAnnualIncome - totalOperatingExpenses;
      
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const annualDebtService = monthlyPayment * 12;
      
      const annualCashFlow = noi - annualDebtService;
      const totalCashInvested = downPayment + closingCosts;
      const capRate = (noi / purchasePrice) * 100;
      const cashOnCashReturn = (annualCashFlow / totalCashInvested) * 100;
      const roi = ((annualCashFlow * loanTerm) / totalCashInvested) * 100;
      
      const breakEvenOccupancy = ((totalOperatingExpenses + annualDebtService) / grossAnnualIncome) * 100;
      const grm = purchasePrice / grossAnnualIncome;

      return [
        { label: "Gross Annual Income", value: grossAnnualIncome.toFixed(2), isCurrency: true },
        { label: "Effective Annual Income", value: effectiveAnnualIncome.toFixed(2), isCurrency: true },
        { label: "Total Operating Expenses", value: totalOperatingExpenses.toFixed(2), isCurrency: true },
        { label: "Net Operating Income (NOI)", value: noi.toFixed(2), isCurrency: true },
        { label: "Annual Debt Service", value: annualDebtService.toFixed(2), isCurrency: true },
        { label: "Annual Cash Flow", value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: "Total Cash Invested", value: totalCashInvested.toFixed(2), isCurrency: true },
        { label: "Cap Rate", value: `${capRate.toFixed(2)}%`, isCurrency: false },
        { label: "Cash-on-Cash Return", value: `${cashOnCashReturn.toFixed(2)}%`, isCurrency: false },
        { label: "ROI", value: `${roi.toFixed(2)}%`, isCurrency: false },
        { label: "Break-Even Occupancy", value: `${breakEvenOccupancy.toFixed(2)}%`, isCurrency: false },
        { label: "Gross Rent Multiplier (GRM)", value: grm.toFixed(2), isCurrency: false },
      ];
    },
  },
};
