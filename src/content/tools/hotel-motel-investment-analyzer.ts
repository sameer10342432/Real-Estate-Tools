import { CalculatorContent } from "@/types";

export const HOTEL_MOTEL_INVESTMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: "Hotel/Motel Investment Analyzer",
  description: "Analyze hotel and motel investments with occupancy rates, RevPAR, ADR, and comprehensive financial projections.",
  icon: "Icon",
  category: "Real Estate",
  slug: "hotel-motel-investment-analyzer",
  article: {
    title: "Hotel/Motel Investment Analyzer - Hospitality Property Analysis",
    content: `
    A hotel/motel investment analyzer helps investors evaluate the financial performance and return potential of hospitality properties including full-service hotels, limited-service hotels, motels, and boutique properties.

    ### Understanding Hotel/Motel Investments

    Hotel properties are unique commercial real estate investments with:

    - **Daily revenue generation:** Income from nightly room rentals
    - **Operational complexity:** Require active management and staffing
    - **Market sensitivity:** Performance tied to tourism, business travel, and economy
    - **High capital requirements:** Significant upfront investment and working capital
    - **Franchise opportunities:** Brand affiliation benefits and requirements

    ### Key Performance Metrics

    **1. Occupancy Rate**
    Percentage of available rooms occupied during a given period. Industry average: 60-70%.

    **2. Average Daily Rate (ADR)**
    Average rental income per occupied room. Calculated as: Room Revenue ÷ Rooms Sold.

    **3. Revenue Per Available Room (RevPAR)**
    Key industry metric combining occupancy and ADR. Calculated as: ADR × Occupancy Rate.

    **4. Gross Operating Profit Per Available Room (GOPPAR)**
    Measures property profitability per room. More comprehensive than RevPAR as it accounts for expenses.

    **5. Flow-Through**
    Percentage of revenue increase that flows to bottom line. Benchmarks: 40-60%.

    ### Hotel Property Types

    **Full-Service Hotels**
    - On-site restaurants and bars
    - Meeting and event spaces
    - Concierge and room service
    - Higher ADR ($150-$500+)
    - More operational complexity

    **Limited-Service Hotels**
    - No restaurant (continental breakfast only)
    - Limited amenities
    - Lower operating costs
    - ADR: $80-$150
    - Popular with investors

    **Extended-Stay Hotels**
    - Kitchen facilities in rooms
    - Weekly/monthly rates
    - Business and relocating guests
    - More stable occupancy
    - ADR: $70-$120

    **Boutique Hotels**
    - Unique design and character
    - Typically under 100 rooms
    - Premium pricing potential
    - Niche market appeal
    - Higher renovation costs

    **Motels**
    - Exterior corridors and parking
    - Budget-friendly rates
    - Lower construction/acquisition costs
    - ADR: $50-$90
    - Highway and roadside locations

    ### Revenue Streams

    **Room Revenue (Primary)**
    - Standard rooms
    - Suites and premium rooms
    - Group bookings
    - Corporate contracts

    **Food & Beverage (F&B)**
    - Restaurant sales
    - Bar/lounge revenue
    - Room service
    - Catering and events
    - Typically 15-30% of total revenue

    **Other Revenue**
    - Meeting room rentals
    - Parking fees
    - Resort fees
    - Spa and recreation
    - Laundry services
    - Telephone and internet
    - Gift shop sales

    ### Operating Expenses

    **Departmental Expenses (40-50% of revenue)**
    - Rooms department: Housekeeping, front desk, reservations
    - F&B department: Kitchen staff, servers, food costs
    - Other departments: Spa, recreation, parking

    **Undistributed Operating Expenses (20-30%)**
    - Administrative and general
    - Sales and marketing
    - Property operations and maintenance
    - Utilities and energy costs

    **Fixed Charges (10-15%)**
    - Property taxes and insurance
    - Management fees (3-5% of revenue)
    - Franchise fees (4-6% of revenue if applicable)

    ### Franchise vs. Independent

    **Franchised Properties**
    **Benefits:**
    - Brand recognition and loyalty
    - Centralized reservations system
    - Marketing support
    - Operating standards and training
    - Proven business model

    **Costs:**
    - Initial franchise fee: $25,000-$100,000
    - Ongoing royalties: 4-6% of room revenue
    - Marketing fees: 2-3% of room revenue
    - Required property improvements
    - Strict brand standards

    **Independent Properties**
    **Benefits:**
    - No franchise fees (8-9% savings)
    - Full operational control
    - Unique positioning
    - Lower upfront costs

    **Challenges:**
    - Must build brand recognition
    - Higher marketing costs
    - No reservation system support
    - More difficult financing

    ### Market Analysis Considerations

    **Demand Generators:**
    - Corporate offices and business parks
    - Tourist attractions and destinations
    - Convention centers
    - Airports and transportation hubs
    - Educational institutions
    - Medical facilities

    **Competitive Analysis:**
    - Existing hotel supply in market
    - Pipeline of new developments
    - Competitive ADR and occupancy
    - Market segmentation
    - Penetration and fair share analysis

    **Economic Factors:**
    - Local employment trends
    - Population growth
    - Income levels
    - Tourism statistics
    - Business travel patterns

    ### Value-Add Strategies

    **Revenue Enhancement:**
    - Implement dynamic pricing/revenue management
    - Upgrade to higher brand tier
    - Add revenue-generating amenities
    - Improve online presence and reviews
    - Develop corporate and group sales
    - Enhance F&B offerings

    **Expense Reduction:**
    - Energy efficiency upgrades
    - Technology implementation (automated check-in, digital marketing)
    - Renegotiate vendor contracts
    - Optimize staffing levels
    - Preventive maintenance programs

    ### Financing Hotel Properties

    **Traditional Hotel Loans**
    - 25-35% down payment
    - Rates 1-2% higher than other CRE
    - Shorter terms (5-10 years)
    - Proven operating history required
    - Personal guarantees common

    **SBA 504 Loans**
    - 10% down payment option
    - For owner-occupied properties
    - Fixed rates up to 25 years
    - Must meet size standards
    - Job creation requirements

    **Franchise-Affiliated Lending**
    - Preferred lenders for major brands
    - Better terms with brand affiliation
    - Streamlined approval process

    ### How This Calculator Works

    This analyzer calculates:

    1. **Gross Operating Revenue:** From rooms, F&B, and other sources
    2. **Gross Operating Profit:** After all operating expenses
    3. **Net Operating Income:** After management and franchise fees
    4. **Cash Flow:** After debt service
    5. **Key Metrics:** RevPAR, ADR, GOPPAR, Cash-on-Cash Return
    6. **Break-Even Analysis:** Minimum occupancy needed

    ### Investment Success Factors

    **Before Purchasing:**
    - Review 3+ years of STR reports (Smith Travel Research)
    - Analyze property improvement plan (PIP) requirements
    - Evaluate management company options
    - Assess franchise agreement terms
    - Review environmental and zoning compliance
    - Inspect all building systems (HVAC, plumbing, electrical)
    - Budget for FF&E (furniture, fixtures, equipment) reserves

    **Common Pitfalls:**
    - Underestimating operating expenses (45-50% is normal)
    - Ignoring franchise requirements and costs
    - Insufficient working capital reserves
    - Overestimating occupancy and ADR
    - Not accounting for seasonality
    - Inadequate due diligence on competition

    Use this calculator to model different scenarios and understand the unique economics of hotel/motel investments before committing capital.
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: "5000000",
      },
      {
        name: "numberOfRooms",
        label: "Number of Rooms",
        type: "number",
        defaultValue: "80",
      },
      {
        name: "averageDailyRate",
        label: "Average Daily Rate (ADR)",
        type: "number",
        defaultValue: "120",
      },
      {
        name: "occupancyRate",
        label: "Occupancy Rate (%)",
        type: "number",
        defaultValue: "68",
      },
      {
        name: "foodBeverageRevenue",
        label: "Annual F&B Revenue",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "otherRevenue",
        label: "Annual Other Revenue",
        type: "number",
        defaultValue: "150000",
      },
      {
        name: "departmentalExpenses",
        label: "Departmental Expenses (% of Total Revenue)",
        type: "number",
        defaultValue: "45",
      },
      {
        name: "undistributedExpenses",
        label: "Undistributed Expenses (% of Total Revenue)",
        type: "number",
        defaultValue: "25",
      },
      {
        name: "propertyTaxes",
        label: "Annual Property Taxes",
        type: "number",
        defaultValue: "80000",
      },
      {
        name: "insurance",
        label: "Annual Insurance",
        type: "number",
        defaultValue: "50000",
      },
      {
        name: "managementFee",
        label: "Management Fee (% of Total Revenue)",
        type: "number",
        defaultValue: "4",
      },
      {
        name: "franchiseFee",
        label: "Franchise Fee (% of Room Revenue)",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "downPayment",
        label: "Down Payment",
        type: "number",
        defaultValue: "1500000",
      },
      {
        name: "interestRate",
        label: "Loan Interest Rate (%)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "25",
      },
      {
        name: "closingCosts",
        label: "Closing Costs",
        type: "number",
        defaultValue: "100000",
      },
    ],
    results: [
      { label: "Annual Room Revenue", isCurrency: true },
      { label: "Total Annual Revenue", isCurrency: true },
      { label: "RevPAR (Revenue Per Available Room)", isCurrency: true },
      { label: "Gross Operating Profit", isCurrency: true },
      { label: "GOPPAR (Gross Operating Profit Per Available Room)", isCurrency: true },
      { label: "Net Operating Income (NOI)", isCurrency: true },
      { label: "Annual Debt Service", isCurrency: true },
      { label: "Annual Cash Flow", isCurrency: true },
      { label: "Total Cash Invested", isCurrency: true },
      { label: "Cash-on-Cash Return", isCurrency: false },
      { label: "Cap Rate", isCurrency: false },
      { label: "Break-Even Occupancy", isCurrency: false },
    ],
    calculate: (values) => {
      const {
        purchasePrice, numberOfRooms, averageDailyRate, occupancyRate,
        foodBeverageRevenue, otherRevenue, departmentalExpenses, undistributedExpenses,
        propertyTaxes, insurance, managementFee, franchiseFee,
        downPayment, interestRate, loanTerm, closingCosts
      } = values;
      
      const roomsOccupiedPerYear = numberOfRooms * 365 * (occupancyRate / 100);
      const annualRoomRevenue = roomsOccupiedPerYear * averageDailyRate;
      const totalAnnualRevenue = annualRoomRevenue + foodBeverageRevenue + otherRevenue;
      const revPAR = (annualRoomRevenue / (numberOfRooms * 365));
      
      const departmentalExpensesAmount = totalAnnualRevenue * (departmentalExpenses / 100);
      const undistributedExpensesAmount = totalAnnualRevenue * (undistributedExpenses / 100);
      const grossOperatingProfit = totalAnnualRevenue - departmentalExpensesAmount - undistributedExpensesAmount;
      const goppar = grossOperatingProfit / (numberOfRooms * 365);
      
      const managementFeeAmount = totalAnnualRevenue * (managementFee / 100);
      const franchiseFeeAmount = annualRoomRevenue * (franchiseFee / 100);
      const fixedCharges = propertyTaxes + insurance + managementFeeAmount + franchiseFeeAmount;
      const noi = grossOperatingProfit - fixedCharges;
      
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const annualDebtService = monthlyPayment * 12;
      
      const annualCashFlow = noi - annualDebtService;
      const totalCashInvested = downPayment + closingCosts;
      const cashOnCashReturn = (annualCashFlow / totalCashInvested) * 100;
      const capRate = (noi / purchasePrice) * 100;
      
      const totalExpenses = departmentalExpensesAmount + undistributedExpensesAmount + fixedCharges + annualDebtService;
      const breakEvenOccupancy = (totalExpenses / (numberOfRooms * 365 * averageDailyRate)) * 100;

      return [
        { label: "Annual Room Revenue", value: annualRoomRevenue.toFixed(2), isCurrency: true },
        { label: "Total Annual Revenue", value: totalAnnualRevenue.toFixed(2), isCurrency: true },
        { label: "RevPAR (Revenue Per Available Room)", value: revPAR.toFixed(2), isCurrency: true },
        { label: "Gross Operating Profit", value: grossOperatingProfit.toFixed(2), isCurrency: true },
        { label: "GOPPAR (Gross Operating Profit Per Available Room)", value: goppar.toFixed(2), isCurrency: true },
        { label: "Net Operating Income (NOI)", value: noi.toFixed(2), isCurrency: true },
        { label: "Annual Debt Service", value: annualDebtService.toFixed(2), isCurrency: true },
        { label: "Annual Cash Flow", value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: "Total Cash Invested", value: totalCashInvested.toFixed(2), isCurrency: true },
        { label: "Cash-on-Cash Return", value: `${cashOnCashReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Cap Rate", value: `${capRate.toFixed(2)}%`, isCurrency: false },
        { label: "Break-Even Occupancy", value: `${breakEvenOccupancy.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
