import { CalculatorContent } from "@/types";

export const REAL_ESTATE_SYNDICATION_WATERFALL_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Real Estate Syndication Waterfall Calculator",
  description: "Calculate syndication waterfall distributions with preferred returns, catch-up provisions, and promote structures for real estate deals.",
  icon: "Icon",
  category: "Real Estate",
  slug: "real-estate-syndication-waterfall-calculator",
  article: {
    title: "Real Estate Syndication Waterfall Calculator - LP/GP Distribution Analysis",
    content: `
    A real estate syndication waterfall calculator helps sponsors (General Partners) and investors (Limited Partners) understand cash flow distributions in multi-tier return structures with preferred returns and promote.

    ### What is a Syndication Waterfall?

    A waterfall distribution structure dictates how cash flows and profits are split between limited partners (LPs - passive investors) and general partners (GPs - sponsors/operators) in a tiered system based on return thresholds.

    **Common Structure:**
    - **Tier 1:** LPs receive preferred return (e.g., 8%)
    - **Tier 2:** GP receives "catch-up" to equalize returns
    - **Tier 3:** Remaining profits split based on promote (e.g., 70/30 or 80/20)

    ### Key Terms Explained

    **Limited Partners (LPs)**
    - Passive investors providing capital
    - Typical investment: $50K - $1M+ each
    - Limited liability (can only lose investment)
    - No operational involvement
    - Receive preferred returns first

    **General Partners (GPs) / Sponsors**
    - Active operators managing the deal
    - Provide expertise and sweat equity
    - Unlimited liability
    - Day-to-day management
    - Earn fees and promote

    **Preferred Return (Pref)**
    - Minimum return paid to LPs before GP participates
    - Typical: 6-10% annualized
    - Can be cumulative or non-cumulative
    - Paid from cash flow and/or sale proceeds

    **Catch-Up**
    - After pref is paid, GP receives distributions to "catch up" to LPs
    - Typically 100% to GP until they've earned pref on their capital
    - Equalizes returns before splitting additional profits

    **Promote (Carried Interest)**
    - GP's share of profits above preferred return
    - Typical splits: 70/30, 75/25, or 80/20 (LP/GP)
    - GP earns disproportionate share for superior performance
    - Aligns interests and rewards execution

    ### Types of Waterfall Structures

    **European/Whole Deal Waterfall**
    - Calculated on cumulative returns over entire hold period
    - LPs get pref on all capital across all years
    - Most common in real estate syndications
    - Fair to LPs, accounts for time value of money

    **American/Period-by-Period Waterfall**
    - Calculated annually or per distribution
    - Pref calculated only on capital outstanding that period
    - More favorable to GPs
    - Less common in real estate

    **Hurdle-Based Waterfall**
    - Multiple tiers based on IRR hurdles
    - Example: 
      - 0-8% IRR: 100% to LPs
      - 8-12% IRR: 90/10 split
      - 12-15% IRR: 80/20 split
      - 15%+ IRR: 70/30 split

    ### Common Waterfall Scenarios

    **Scenario 1: Basic Pref + Promote**
    - Tier 1: 100% to LPs until 8% pref
    - Tier 2: 80% LP / 20% GP on remaining

    **Example:**
    - $1M invested by LPs
    - $200K profit
    - LP gets: $80K pref (8% on $1M) + $96K (80% of $120K) = $176K
    - GP gets: $24K (20% of $120K)

    **Scenario 2: Pref + Catch-Up + Promote**
    - Tier 1: 100% to LPs until 8% pref ($80K)
    - Tier 2: 100% to GP until they earn 8% on their capital
    - Tier 3: 70/30 split on remaining

    **Scenario 3: Multiple Hurdles**
    - 0-8% IRR: 100% to LPs
    - 8-12% IRR: 90/10 split (LP/GP)
    - 12-15% IRR: 80/20 split
    - 15%+ IRR: 70/30 split

    ### GP Compensation Components

    **Acquisition Fee**
    - 1-3% of purchase price
    - Paid at closing
    - Covers due diligence costs and deal sourcing

    **Asset Management Fee**
    - 1-2% of gross revenue or invested capital annually
    - Covers ongoing operations and oversight
    - Paid from operating cash flow

    **Refinance Fee**
    - 0.5-1% of loan amount
    - Paid when refinancing
    - Covers time and effort to secure financing

    **Disposition Fee**
    - 1-2% of sale price
    - Paid at sale
    - Covers marketing and sale process

    **Promote (Carried Interest)**
    - 20-30% of profits above pref
    - Largest component of GP compensation
    - Performance-based, aligns interests

    ### Cumulative vs. Non-Cumulative Pref

    **Cumulative Preferred Return**
    - Unpaid pref accrues year-over-year
    - Must be paid before any GP promote
    - More investor-friendly
    - Standard in real estate

    **Example:**
    Year 1: $0 cash flow (no distributions)
    Year 2: $100K cash flow
    - Cumulative: LPs get full $100K (covers Year 1 + partial Year 2 pref)
    - Non-Cumulative: Split based on Year 2 pref only

    **Non-Cumulative**
    - Pref calculated only on current period
    - Unpaid pref doesn't carry forward
    - More GP-friendly
    - Less common, higher risk for LPs

    ### Lookback Provisions (Clawback)

    **What is it?**
    - Mechanism to "true up" distributions at final sale
    - Ensures LPs receive full cumulative pref over entire hold
    - GP may need to return previous distributions

    **Example:**
    - Years 1-4: Strong cash flow, GP receives promote
    - Year 5: Sale proceeds lower than expected
    - Lookback shows LPs didn't receive full cumulative pref
    - GP claws back portion of prior promote to LPs

    **GP Protection:**
    - Holdback reserves (keep 10-20% of promote in escrow)
    - Only apply clawback to promote (not fees)

    ### Investor Considerations

    **What LPs Should Evaluate:**

    **Preferred Return:**
    - Is it competitive? (8% is standard)
    - Cumulative or non-cumulative?
    - Accruing or compounding?

    **GP Promote:**
    - Is it reasonable for the risk? (20-30% typical)
    - Multiple hurdles based on performance?
    - Catch-up provision fair?

    **Fees:**
    - Total fees typically 5-8% of deal
    - Are they market competitive?
    - Are they disclosed clearly?

    **GP Co-Investment:**
    - Does GP invest own capital? (5-10% typical)
    - Skin in the game aligns interests
    - Shows confidence in deal

    ### GP/Sponsor Considerations

    **Structuring the Waterfall:**

    **Balance Interests:**
    - Competitive pref to attract capital
    - Adequate promote to reward performance
    - Sustainable fee structure

    **Set Realistic Projections:**
    - Don't overpromise returns
    - Conservative underwriting
    - Maintain credibility

    **Align Incentives:**
    - Invest own capital (5-10%)
    - Share in downside risk
    - Long-term value creation focus

    ### Tax Considerations

    **K-1 Distributions:**
    - Syndications are typically taxed as partnerships
    - Investors receive K-1 (not 1099)
    - Income taxed at investor's rate
    - Depreciation can offset income

    **Promote Taxation:**
    - Carried interest may qualify for capital gains treatment
    - Holding period > 3 years required
    - Consult tax advisor

    **Depreciation Benefits:**
    - Cost segregation studies
    - Bonus depreciation
    - Passive loss limitations (non-real estate professionals)

    ### Red Flags for Investors

    **Avoid These Structures:**
    - Non-cumulative pref without explanation
    - Excessive fees (>8-10% total)
    - No GP co-investment
    - Unclear waterfall language
    - No lookback/clawback provision
    - Promote above 30-35%
    - Unrealistic return projections

    ### Sample Waterfall Calculation

    **Deal Parameters:**
    - LP Investment: $1,000,000
    - GP Investment: $100,000
    - Preferred Return: 8% cumulative
    - Promote: 70/30 (LP/GP) after pref

    **Year 5 Sale:**
    - Total Profit: $600,000

    **Distribution:**
    - Tier 1 (Pref): $400K to LPs (8% × 5 years × $1M)
    - Tier 2 (GP Catch-up): $40K to GP (8% × 5 years × $100K)
    - Tier 3 (Promote): Remaining $160K split 70/30
      - LPs: $112K
      - GP: $48K

    **Final Distribution:**
    - LPs: $512K (51.2% return = 10.2% IRR)
    - GP: $88K (88% return on $100K)

    ### How This Calculator Works

    This calculator models:

    1. **Tier 1 Distributions:** Preferred return to LPs
    2. **Tier 2 Distributions:** Catch-up to GP (if applicable)
    3. **Tier 3 Distributions:** Promote split on remaining profits
    4. **Final Returns:** LP and GP total returns and IRRs
    5. **Sensitivity Analysis:** Impact of different return scenarios

    Use this calculator to structure syndication deals, negotiate terms, and understand how profits flow through waterfall structures in real estate partnerships.
  `,
  },
  calculator: {
    fields: [
      {
        name: "lpInvestment",
        label: "Total LP Investment",
        type: "number",
        defaultValue: "2000000",
      },
      {
        name: "gpInvestment",
        label: "GP Co-Investment",
        type: "number",
        defaultValue: "200000",
      },
      {
        name: "preferredReturn",
        label: "Preferred Return (%)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "holdPeriod",
        label: "Hold Period (Years)",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "totalProfit",
        label: "Total Profit at Sale",
        type: "number",
        defaultValue: "1200000",
      },
      {
        name: "catchUpPercentage",
        label: "GP Catch-Up Percentage (0-100%)",
        type: "number",
        defaultValue: "100",
      },
      {
        name: "lpPromoteShare",
        label: "LP Share of Promote (%)",
        type: "number",
        defaultValue: "70",
      },
    ],
    results: [
      { label: "Total Capital Invested", isCurrency: true },
      { label: "LP Preferred Return Amount", isCurrency: true },
      { label: "GP Catch-Up Amount", isCurrency: true },
      { label: "Remaining Profit for Promote", isCurrency: true },
      { label: "LP Share of Promote", isCurrency: true },
      { label: "GP Share of Promote", isCurrency: true },
      { label: "Total LP Distribution", isCurrency: true },
      { label: "Total GP Distribution", isCurrency: true },
      { label: "LP Total Return (%)", isCurrency: false },
      { label: "GP Total Return (%)", isCurrency: false },
      { label: "LP IRR (Approximate)", isCurrency: false },
      { label: "GP IRR (Approximate)", isCurrency: false },
    ],
    calculate: (values) => {
      const { lpInvestment, gpInvestment, preferredReturn, holdPeriod, totalProfit, catchUpPercentage, lpPromoteShare } = values;
      
      const totalCapitalInvested = lpInvestment + gpInvestment;
      const lpPrefAmount = lpInvestment * (preferredReturn / 100) * holdPeriod;
      const gpPrefAmount = gpInvestment * (preferredReturn / 100) * holdPeriod;
      
      let remainingProfit = totalProfit;
      let lpDistribution = 0;
      let gpDistribution = 0;
      
      if (remainingProfit >= lpPrefAmount) {
        lpDistribution += lpPrefAmount;
        remainingProfit -= lpPrefAmount;
        
        const gpCatchUpAmount = Math.min(gpPrefAmount * (catchUpPercentage / 100), remainingProfit);
        gpDistribution += gpCatchUpAmount;
        remainingProfit -= gpCatchUpAmount;
        
        const lpPromoteAmount = remainingProfit * (lpPromoteShare / 100);
        const gpPromoteAmount = remainingProfit * (1 - lpPromoteShare / 100);
        lpDistribution += lpPromoteAmount;
        gpDistribution += gpPromoteAmount;
      } else {
        lpDistribution = remainingProfit;
        remainingProfit = 0;
      }
      
      const lpTotalReturn = ((lpDistribution / lpInvestment) - 1) * 100;
      const gpTotalReturn = gpInvestment > 0 ? ((gpDistribution / gpInvestment) - 1) * 100 : 0;
      
      const lpIRR = holdPeriod > 0 ? (Math.pow(1 + (lpTotalReturn / 100), 1 / holdPeriod) - 1) * 100 : 0;
      const gpIRR = holdPeriod > 0 && gpInvestment > 0 ? (Math.pow(1 + (gpTotalReturn / 100), 1 / holdPeriod) - 1) * 100 : 0;
      
      const remainingForPromote = totalProfit - lpPrefAmount - (gpDistribution > 0 ? Math.min(gpPrefAmount * (catchUpPercentage / 100), totalProfit - lpPrefAmount) : 0);

      return [
        { label: "Total Capital Invested", value: totalCapitalInvested.toFixed(2), isCurrency: true },
        { label: "LP Preferred Return Amount", value: lpPrefAmount.toFixed(2), isCurrency: true },
        { label: "GP Catch-Up Amount", value: (gpDistribution - (remainingForPromote > 0 ? totalProfit - lpPrefAmount - remainingForPromote : 0)).toFixed(2), isCurrency: true },
        { label: "Remaining Profit for Promote", value: Math.max(0, remainingForPromote).toFixed(2), isCurrency: true },
        { label: "LP Share of Promote", value: (Math.max(0, remainingForPromote) * (lpPromoteShare / 100)).toFixed(2), isCurrency: true },
        { label: "GP Share of Promote", value: (Math.max(0, remainingForPromote) * (1 - lpPromoteShare / 100)).toFixed(2), isCurrency: true },
        { label: "Total LP Distribution", value: lpDistribution.toFixed(2), isCurrency: true },
        { label: "Total GP Distribution", value: gpDistribution.toFixed(2), isCurrency: true },
        { label: "LP Total Return (%)", value: `${lpTotalReturn.toFixed(2)}%`, isCurrency: false },
        { label: "GP Total Return (%)", value: `${gpTotalReturn.toFixed(2)}%`, isCurrency: false },
        { label: "LP IRR (Approximate)", value: `${lpIRR.toFixed(2)}%`, isCurrency: false },
        { label: "GP IRR (Approximate)", value: `${gpIRR.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
