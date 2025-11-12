import { CalculatorContent } from "@/types";

export const REAL_ESTATE_FUND_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Real Estate Fund Fee Calculator",
  description: "Calculate total fees, net returns, and fee impact for real estate funds including management fees, performance fees, and carry.",
  icon: "Icon",
  category: "Real Estate",
  slug: "real-estate-fund-fee-calculator",
  article: {
    title: "Real Estate Fund Fee Calculator - Analyze Fund Costs and Net Returns",
    content: `
    A real estate fund fee calculator helps investors understand the total cost of investing in real estate funds, private equity funds, and syndications by analyzing management fees, performance fees, and their impact on returns.

    ### Understanding Real Estate Fund Fees

    Real estate funds charge various fees to cover operations and compensate managers. These fees can significantly impact investor returns, often reducing gross returns by 2-5% annually.

    **The "2 and 20" Model (Traditional)**
    - 2% annual management fee on committed capital or NAV
    - 20% performance fee (carry) on profits above hurdle rate
    - Common in private equity, less so in modern real estate funds

    ### Types of Fees

    **1. Management Fees**

    **What They Cover:**
    - Fund operations and administration
    - Salaries and office expenses
    - Due diligence costs
    - Asset management oversight
    - Investor reporting and compliance

    **Calculation Methods:**

    **On Committed Capital:**
    - Most common in closed-end funds
    - Charged on total commitments regardless of deployment
    - Example: $100M committed × 2% = $2M annually
    - Higher cost early in fund life (before capital deployed)

    **On Invested Capital:**
    - Only charged on capital actually deployed
    - More investor-friendly
    - Example: $60M invested × 2% = $1.2M annually

    **On NAV (Net Asset Value):**
    - Common in open-end funds (REITs)
    - Adjusts as portfolio value changes
    - Example: $120M NAV × 1.5% = $1.8M annually

    **Declining Fee Schedule:**
    - Reduces over fund life
    - Years 1-3: 2.0%
    - Years 4-6: 1.5%
    - Years 7+: 1.0%
    - Aligns with reduced workload

    **2. Performance Fees (Carried Interest)**

    **What is Carry?**
    - Percentage of profits paid to fund manager
    - Typically 15-20% of profits above hurdle
    - Only paid after investors receive minimum return

    **Hurdle Rate (Preferred Return):**
    - Minimum return before carry kicks in
    - Typical: 6-10% IRR
    - Protects investors from paying fees on mediocre performance

    **Catch-Up Provision:**
    - After hurdle is met, GP gets 100% of next dollars until catch-up
    - Brings GP to their full carry percentage on all profits
    - Example: After 8% hurdle, GP gets 100% of next returns until they have 20% of total profits

    **European vs. American Waterfall:**
    - European (Whole Fund): Carry calculated on cumulative fund performance
    - American (Deal-by-Deal): Carry calculated on each investment separately
    - European is more LP-friendly

    **3. Acquisition Fees**

    **Charged at Purchase:**
    - 0.5-2% of property acquisition price
    - Covers due diligence, legal, closing costs
    - Separate from or included in management fees

    **Example:**
    - $50M property purchase
    - 1.5% acquisition fee = $750,000

    **4. Disposition Fees**

    **Charged at Sale:**
    - 0.5-2% of sale price
    - Covers marketing, legal, broker coordination
    - Sometimes waived if carry is substantial

    **Example:**
    - $70M sale price
    - 1.5% disposition fee = $1.05M

    **5. Financing Fees**

    **Loan Arrangement Fees:**
    - 0.5-1% of loan amount
    - Charged when securing or refinancing debt
    - Covers lender relationships and negotiations

    **Example:**
    - $40M refinance
    - 0.75% financing fee = $300,000

    **6. Other Fees**

    **Construction Management:**
    - 2-5% of construction budget
    - For development or value-add projects

    **Property Management:**
    - 3-5% of gross revenues
    - If GP manages properties directly

    **Monitoring Fees:**
    - Quarterly or annual board fees
    - Common in larger funds

    ### Fee Impact on Returns

    **Example: $10M Investment over 10 Years**

    **Gross Returns: 15% IRR**

    **Fee Scenario 1: Low-Fee Fund**
    - 1.25% management fee on invested capital
    - 15% carry above 8% hurdle
    - Total fees: ~$2.5M over 10 years
    - Net IRR to investors: ~12.8%
    - **Fee drag: 2.2%**

    **Fee Scenario 2: High-Fee Fund**
    - 2% management fee on committed capital
    - 20% carry above 6% hurdle
    - Acquisition fees: 1.5%
    - Disposition fees: 1.5%
    - Total fees: ~$4.8M over 10 years
    - Net IRR to investors: ~10.5%
    - **Fee drag: 4.5%**

    **$10M → $40.5M (Gross) vs. $34.2M (Net)**
    Difference: $6.3M left on the table due to fees!

    ### Evaluating Fund Fees

    **Benchmarks by Fund Type:**

    **Core Funds (Low Risk)**
    - Management: 0.75-1.25%
    - Carry: 10-15% above 6-7% hurdle
    - Total fee drag: 1.5-2.5%

    **Core-Plus Funds**
    - Management: 1.25-1.75%
    - Carry: 15-20% above 7-8% hurdle
    - Total fee drag: 2.0-3.0%

    **Value-Add Funds**
    - Management: 1.5-2.0%
    - Carry: 20% above 8-10% hurdle
    - Total fee drag: 2.5-4.0%

    **Opportunistic Funds**
    - Management: 1.75-2.5%
    - Carry: 20-25% above 10-12% hurdle
    - Total fee drag: 3.0-5.0%

    ### Investor Protections

    **Fee Offsets:**
    - Property management fees paid to GP may offset management fee
    - Acquisition/disposition fees may reduce carry
    - Aligns GP interests with returns, not just fee collection

    **Clawback Provisions:**
    - Requires GP to return excess carry if final returns don't meet hurdle
    - Calculated at fund liquidation
    - Typically GP keeps holdback reserve (10-20% of carry) until fund closes

    **No-Fault Divorce Clause:**
    - LPs can remove GP and terminate fund
    - Requires super-majority vote (67-75%)
    - Ensures GP stays accountable

    **Most Favored Nation (MFN):**
    - If GP offers better terms to new LPs, existing LPs get same terms
    - Prevents preferential treatment

    ### Fee Negotiation Strategies

    **For Large Investors ($5M+):**

    **Management Fee Breaks:**
    - Reduced fees for larger commitments
    - Example: 2% standard, 1.75% for $5M+, 1.5% for $10M+

    **Co-Investment Rights:**
    - Invest alongside fund without paying fees
    - Typical: 10-20% of deal size
    - Participate in upside without additional management fees

    **Reduced Carry:**
    - Negotiate lower performance fee
    - Example: 15% vs. 20% standard

    ### Red Flags in Fee Structures

    **Avoid These Funds:**

    **Excessive Layering:**
    - Multiple fees that overlap
    - Example: Management fee + asset management fee + monitoring fee + board fees
    - Total >3% annually is excessive

    **High Fees, Low Performance:**
    - 2%+ management fee with no track record
    - Hurdle rate below 6%
    - Carry above 20% without justification

    **Lack of Transparency:**
    - Fees not clearly disclosed
    - "Other expenses" without detail
    - Fund-level expenses passed through without limitation

    **GP Doesn't Eat Own Cooking:**
    - No GP capital committed to fund
    - GP takes fees but has no skin in game
    - Look for 1-5% GP co-investment minimum

    ### Institutional vs. Individual Minimums

    **Institutional Funds:**
    - Minimums: $5M-$25M
    - Lower fees due to scale
    - Sophisticated terms and protections

    **High Net Worth Funds:**
    - Minimums: $250K-$1M
    - Higher fees (smaller fund size)
    - Less negotiating power

    **Retail REIT/Interval Funds:**
    - Minimums: $2,500-$25K
    - Highest fees (2-3% management + loads)
    - Most accessible but most expensive

    ### Tax Implications of Fees

    **Management Fees:**
    - Generally not deductible for individual investors (post-TCJA)
    - May reduce K-1 income for partnership interests
    - Institutional investors may have different treatment

    **Performance Fees:**
    - Reduce investor's share of profits
    - Shown on K-1 as allocation to GP
    - Not separately deductible

    ### Comparing Funds

    **Use Net-of-Fee Returns:**
    - Always compare net IRR, not gross
    - Request audited net returns for past funds
    - Look at consistency across vintages

    **Fee Transparency:**
    - Request detailed fee disclosure
    - Understand all costs (fees + expenses)
    - Calculate total expense ratio

    **Historical Performance:**
    - Net returns vs. benchmark
    - Fee impact over time
    - Percentage of deals that hit hurdle

    ### How This Calculator Works

    This calculator analyzes:

    1. **Annual Management Fees** based on chosen calculation method
    2. **Performance Fees** (carry) after hurdle rate is achieved
    3. **Transaction Fees** (acquisition, disposition, financing)
    4. **Total Fund Costs** over investment period
    5. **Net Returns to Investors** after all fees
    6. **Fee Drag** - the % return reduction due to fees
    7. **Break-Even Hurdle** - gross return needed to achieve target net return

    Use this calculator to evaluate fund fee structures, compare investment opportunities, and understand the true cost of real estate fund investing before committing capital.
  `,
  },
  calculator: {
    fields: [
      {
        name: "investmentAmount",
        label: "Investment Amount",
        type: "number",
        defaultValue: "1000000",
      },
      {
        name: "fundSize",
        label: "Total Fund Size",
        type: "number",
        defaultValue: "100000000",
      },
      {
        name: "managementFeePercent",
        label: "Annual Management Fee (%)",
        type: "number",
        defaultValue: "1.75",
      },
      {
        name: "feeCalculationBasis",
        label: "Fee Basis (0=Committed, 1=Invested, 2=NAV)",
        type: "number",
        defaultValue: "1",
      },
      {
        name: "investmentPeriod",
        label: "Investment Period (Years)",
        type: "number",
        defaultValue: "10",
      },
      {
        name: "grossIRR",
        label: "Projected Gross IRR (%)",
        type: "number",
        defaultValue: "18",
      },
      {
        name: "hurdleRate",
        label: "Hurdle Rate (%)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "carryPercent",
        label: "Carry / Performance Fee (%)",
        type: "number",
        defaultValue: "20",
      },
      {
        name: "acquisitionFee",
        label: "Acquisition Fee (%)",
        type: "number",
        defaultValue: "1.5",
      },
      {
        name: "dispositionFee",
        label: "Disposition Fee (%)",
        type: "number",
        defaultValue: "1.5",
      },
    ],
    results: [
      { label: "Total Management Fees (Over Investment Period)", isCurrency: true },
      { label: "Acquisition Fee", isCurrency: true },
      { label: "Disposition Fee", isCurrency: true },
      { label: "Gross Investment Value at Exit", isCurrency: true },
      { label: "Hurdle Return to Investors", isCurrency: true },
      { label: "Profit Above Hurdle", isCurrency: true },
      { label: "Performance Fee (Carry)", isCurrency: true },
      { label: "Total Fees Paid", isCurrency: true },
      { label: "Net Proceeds to Investor", isCurrency: true },
      { label: "Gross IRR", isCurrency: false },
      { label: "Net IRR (After All Fees)", isCurrency: false },
      { label: "Fee Drag (IRR Reduction)", isCurrency: false },
      { label: "Total Return Multiple (Gross)", isCurrency: false },
      { label: "Total Return Multiple (Net)", isCurrency: false },
    ],
    calculate: (values) => {
      const {
        investmentAmount, fundSize, managementFeePercent, feeCalculationBasis,
        investmentPeriod, grossIRR, hurdleRate, carryPercent,
        acquisitionFee, dispositionFee
      } = values;
      
      const grossMultiple = Math.pow(1 + grossIRR / 100, investmentPeriod);
      const grossValue = investmentAmount * grossMultiple;
      
      const acqFee = investmentAmount * (acquisitionFee / 100);
      const dispFee = grossValue * (dispositionFee / 100);
      
      let totalManagementFees = 0;
      const baseFee = feeCalculationBasis === 0 ? investmentAmount : 
                      feeCalculationBasis === 1 ? investmentAmount : 
                      investmentAmount * 1.1;
      
      for (let year = 0; year < investmentPeriod; year++) {
        const yearlyBase = feeCalculationBasis === 2 ? 
          investmentAmount * Math.pow(1 + grossIRR / 100, year) : baseFee;
        totalManagementFees += yearlyBase * (managementFeePercent / 100);
      }
      
      const hurdleReturnAmount = investmentAmount * (Math.pow(1 + hurdleRate / 100, investmentPeriod) - 1);
      const grossProfit = grossValue - investmentAmount;
      const profitAboveHurdle = Math.max(0, grossProfit - hurdleReturnAmount);
      const performanceFee = profitAboveHurdle * (carryPercent / 100);
      
      const totalFees = totalManagementFees + acqFee + dispFee + performanceFee;
      const netProceeds = grossValue - totalFees;
      const netMultiple = netProceeds / investmentAmount;
      const netIRR = (Math.pow(netMultiple, 1 / investmentPeriod) - 1) * 100;
      const feeDrag = grossIRR - netIRR;

      return [
        { label: "Total Management Fees (Over Investment Period)", value: totalManagementFees.toFixed(2), isCurrency: true },
        { label: "Acquisition Fee", value: acqFee.toFixed(2), isCurrency: true },
        { label: "Disposition Fee", value: dispFee.toFixed(2), isCurrency: true },
        { label: "Gross Investment Value at Exit", value: grossValue.toFixed(2), isCurrency: true },
        { label: "Hurdle Return to Investors", value: hurdleReturnAmount.toFixed(2), isCurrency: true },
        { label: "Profit Above Hurdle", value: profitAboveHurdle.toFixed(2), isCurrency: true },
        { label: "Performance Fee (Carry)", value: performanceFee.toFixed(2), isCurrency: true },
        { label: "Total Fees Paid", value: totalFees.toFixed(2), isCurrency: true },
        { label: "Net Proceeds to Investor", value: netProceeds.toFixed(2), isCurrency: true },
        { label: "Gross IRR", value: `${grossIRR.toFixed(2)}%`, isCurrency: false },
        { label: "Net IRR (After All Fees)", value: `${netIRR.toFixed(2)}%`, isCurrency: false },
        { label: "Fee Drag (IRR Reduction)", value: `${feeDrag.toFixed(2)}%`, isCurrency: false },
        { label: "Total Return Multiple (Gross)", value: `${grossMultiple.toFixed(2)}x`, isCurrency: false },
        { label: "Total Return Multiple (Net)", value: `${netMultiple.toFixed(2)}x`, isCurrency: false },
      ];
    },
  },
};
