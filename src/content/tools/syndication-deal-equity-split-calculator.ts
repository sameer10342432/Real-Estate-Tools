import { CalculatorContent } from "@/types";

export const SYNDICATION_DEAL_EQUITY_SPLIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Syndication Deal Equity Split Calculator",
  description: "Calculate equity ownership splits, capital contributions, and profit distributions for real estate syndication partnerships.",
  icon: "Icon",
  category: "Real Estate",
  slug: "syndication-deal-equity-split-calculator",
  article: {
    title: "Syndication Deal Equity Split Calculator - Partnership Structure Analysis",
    content: `
    A syndication deal equity split calculator helps syndicators and investors determine fair ownership percentages, capital contributions, and profit distributions in real estate partnerships.

    ### Understanding Equity Splits in Syndications

    Equity split refers to how ownership and profits are divided among partners in a real estate syndication. Unlike waterfall distributions (which govern profit-sharing tiers), equity splits determine fundamental ownership stakes.

    **Two Main Components:**
    1. **Capital Contributions:** Who puts in how much money
    2. **Sweat Equity:** Value of GP's time, expertise, and deal sourcing

    ### Common Syndication Structures

    **1. Pro-Rata Based on Capital**
    - Simplest structure
    - Each partner owns % equal to their capital contribution
    - Example: $900K LP + $100K GP = 90/10 ownership
    - Rare in syndications (doesn't reward GP effort)

    **2. Capital + Promote Structure (Most Common)**
    - LPs receive ownership based on capital
    - GP receives smaller ownership % but larger profit share via promote
    - Example: 95% LP ownership, 5% GP ownership, but 70/30 profit split after pref

    **3. Sweat Equity Grant**
    - GP receives ownership for value brought to deal
    - Based on: deal sourcing, underwriting, financing, management
    - Typical: 10-30% equity for finding and executing deal
    - LPs provide 100% of capital but own 70-90%

    **4. Hybrid Structures**
    - Combination of methods
    - GP contributes some capital + receives sweat equity
    - Example: GP puts in 5% of capital, gets additional 20% for sweat equity = 25% total

    ### Factors Influencing Equity Split

    **GP Value Proposition:**

    **Deal Sourcing (10-15% equity value)**
    - Off-market opportunities
    - Proprietary deal flow
    - Relationship advantages
    - Better pricing secured

    **Underwriting & Due Diligence (5-10%)**
    - Financial analysis expertise
    - Market research
    - Risk assessment
    - Property inspection management

    **Financing Expertise (5-10%)**
    - Lender relationships
    - Better loan terms negotiated
    - Creative financing structures
    - Debt placement success

    **Operational Expertise (10-20%)**
    - Property management capability
    - Renovation/repositioning experience
    - Leasing expertise
    - Value-add execution

    **Track Record (5-15%)**
    - Proven success in prior deals
    - Repeat investor confidence
    - Industry reputation
    - Past returns delivered

    ### Calculating Fair Sweat Equity

    **Method 1: Market Rate for Services**
    Add up what services would cost:
    - Acquisition fee: 1-2% of purchase price
    - Asset management: 1-2% of revenue annually
    - Disposition fee: 1-2% of sale price
    - Total: 5-8% of deal value

    **Method 2: Percentage of Equity Created**
    Value created by GP above replacement manager:
    - Off-market discount secured: 10% below market
    - Better financing: Saves 1% on rate = $X value
    - Operational improvements: Increased NOI 20%
    - Total value created ÷ Total equity = Sweat equity %

    **Method 3: Industry Standard**
    - Simple deals, experienced LPs: 10-15%
    - Moderate complexity: 15-20%
    - Complex deals, first-time LPs: 20-30%
    - Turnaround/heavy value-add: 25-35%

    ### LP Considerations in Equity Split

    **What LPs Should Evaluate:**

    **Is GP's Equity Fair?**
    - Does it align with value brought?
    - Is it market competitive?
    - Does GP have skin in the game (cash investment)?

    **Voting Rights**
    - Who controls major decisions?
    - What requires LP approval?
    - Typical: GP manages day-to-day, major items need LP vote

    **Capital Calls**
    - Can GP call additional capital?
    - Pro-rata or dilutive to non-participants?
    - What happens if LP can't contribute?

    **Exit Rights**
    - Can LPs force a sale?
    - GP buyout options?
    - Transfer restrictions?

    ### GP Considerations in Equity Split

    **Balancing Act:**

    **Don't Give Away Too Much:**
    - Maintain meaningful ownership (15-30%)
    - Control decision-making
    - Adequate compensation for risk and effort

    **Don't Ask for Too Much:**
    - Must be fair to attract capital
    - Greedy structures hurt fundraising
    - Long-term relationship focus

    **Co-Investment Shows Confidence:**
    - 5-10% of equity from GP capital
    - Aligns interests with LPs
    - Demonstrates conviction
    - Reduces risk perception

    ### Common Equity Split Scenarios

    **Scenario 1: First-Time Syndicator**
    - Limited track record
    - Strong operational skills
    - Moderate deal complexity

    **Structure:**
    - LP: 80-85% equity
    - GP: 15-20% equity (mostly sweat equity)
    - GP also invests 5-10% of capital

    **Scenario 2: Experienced Syndicator**
    - Proven track record (3+ successful deals)
    - Proprietary deal source
    - Complex value-add project

    **Structure:**
    - LP: 70-75% equity
    - GP: 25-30% equity
    - GP invests 5-10% of capital
    - Higher promote in waterfall (GP gets 25-30% of profits)

    **Scenario 3: Institutional-Quality Deal**
    - Large deal ($20M+)
    - Multiple LP investors
    - Professional management

    **Structure:**
    - LP: 90-95% equity
    - GP: 5-10% equity
    - Promote structure compensates GP (20-30% of profits)
    - GP fees for services

    ### Vesting Schedules

    **Why Use Vesting?**
    - Protects LPs if GP leaves early
    - Incentivizes GP to see deal through
    - Standard in long-term partnerships

    **Common Vesting:**
    - Immediate: 25-30% of GP equity
    - Ratable: 70-75% vests monthly over 3-5 years
    - Cliff: Some deals have 1-year cliff before vesting starts

    **Example:**
    GP has 20% equity:
    - 5% vests immediately
    - 15% vests monthly over 4 years (0.3125% per month)
    - If GP leaves in Year 2, keeps 5% + 7.5% vested = 12.5% total

    ### Capital Account Tracking

    **What is a Capital Account?**
    - Running ledger of each partner's investment and distributions
    - Starts with initial capital contribution
    - Increases with additional contributions
    - Decreases with distributions received

    **Example:**
    LP invests $100K:
    - Year 1: Capital account = $100K
    - Year 2: Receives $10K distribution, capital account = $90K
    - Year 3: Contributes $20K more, capital account = $110K
    - Year 5: Sale, receives $200K, gain = $200K - $110K = $90K

    ### Tax Implications

    **Partnership Taxation:**
    - Syndications taxed as partnerships (pass-through)
    - Each partner receives K-1 showing their share of income/loss
    - Taxed at individual rates (not double taxation)

    **Equity vs. Profit Split:**
    - Can be different (often are in syndications)
    - Equity: Ownership percentage
    - Profit split: Distribution percentage (via waterfall)
    - Must be clearly documented in operating agreement

    **Special Allocations:**
    - Can allocate certain items differently than ownership %
    - Example: Depreciation allocated 90% to LPs, 10% to GP
    - Must have "substantial economic effect"

    ### Protecting Both Parties

    **For LPs:**
    - Key person clause (if GP leaves, LPs can exit)
    - Major decision approval rights
    - GP removal for cause
    - Regular reporting requirements
    - Annual audits for larger deals

    **For GPs:**
    - Limits on LP involvement (passive role)
    - Protection from LP withdrawal
    - Management fee guarantees
    - Non-compete for LPs
    - Indemnification from LP actions

    ### Red Flags in Equity Splits

    **For LPs:**
    - GP receives >35% equity with no capital contribution
    - No GP co-investment ("no skin in the game")
    - Unclear voting rights
    - GP can take unlimited fees
    - No transparency in decision-making

    **For GPs:**
    - LPs demand excessive control
    - Unreasonable equity demands (>95%)
    - Refusal to acknowledge sweat equity value
    - Unwilling to pay market-rate fees

    ### Documenting the Equity Split

    **Operating Agreement Must Include:**
    - Capital contributions of each partner
    - Equity ownership percentages
    - Profit distribution waterfall
    - Voting rights and control
    - Capital call procedures
    - Exit and sale provisions
    - Dispute resolution
    - GP and LP roles and responsibilities

    ### How This Calculator Works

    This calculator determines:

    1. **Each Partner's Equity Percentage** based on cash and sweat equity contributions
    2. **Ownership Breakdown** showing LP vs. GP allocations
    3. **Capital Contributions** tracking who put in how much cash
    4. **Sweat Equity Valuation** GP's non-cash contribution value
    5. **Profit Distribution Preview** how profits would split based on equity
    6. **Return on Equity** for each partner class

    Use this calculator to structure fair syndication partnerships, negotiate equity splits, and ensure all parties receive appropriate ownership for their contributions to the deal.
  `,
  },
  calculator: {
    fields: [
      {
        name: "totalEquityNeeded",
        label: "Total Equity Needed for Deal",
        type: "number",
        defaultValue: "2000000",
      },
      {
        name: "lpCapitalContribution",
        label: "Total LP Capital Contribution",
        type: "number",
        defaultValue: "1900000",
      },
      {
        name: "gpCapitalContribution",
        label: "GP Capital Contribution",
        type: "number",
        defaultValue: "100000",
      },
      {
        name: "gpSweatEquityPercent",
        label: "GP Sweat Equity (%)",
        type: "number",
        defaultValue: "20",
      },
      {
        name: "totalProfitAtExit",
        label: "Total Profit at Exit",
        type: "number",
        defaultValue: "1500000",
      },
      {
        name: "useWaterfall",
        label: "Use Waterfall Distribution? (0=No, 1=Yes)",
        type: "number",
        defaultValue: "0",
      },
      {
        name: "preferredReturn",
        label: "Preferred Return (% if waterfall used)",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "lpPromoteShare",
        label: "LP Promote Share (% if waterfall used)",
        type: "number",
        defaultValue: "70",
      },
    ],
    results: [
      { label: "Total Capital Raised", isCurrency: true },
      { label: "GP Sweat Equity Value", isCurrency: true },
      { label: "Total Deal Value (Capital + Sweat Equity)", isCurrency: true },
      { label: "LP Equity Ownership", isCurrency: false },
      { label: "GP Equity Ownership", isCurrency: false },
      { label: "LP Profit Distribution", isCurrency: true },
      { label: "GP Profit Distribution", isCurrency: true },
      { label: "LP Return on Investment", isCurrency: false },
      { label: "GP Return on Investment", isCurrency: false },
      { label: "LP Return Multiple", isCurrency: false },
      { label: "GP Return Multiple", isCurrency: false },
    ],
    calculate: (values) => {
      const {
        totalEquityNeeded, lpCapitalContribution, gpCapitalContribution,
        gpSweatEquityPercent, totalProfitAtExit, useWaterfall,
        preferredReturn, lpPromoteShare
      } = values;
      
      const totalCapitalRaised = lpCapitalContribution + gpCapitalContribution;
      const gpSweatEquityValue = totalEquityNeeded * (gpSweatEquityPercent / 100);
      const totalDealValue = totalCapitalRaised + gpSweatEquityValue;
      
      const lpEquityOwnership = (lpCapitalContribution / totalDealValue) * 100;
      const gpEquityOwnership = ((gpCapitalContribution + gpSweatEquityValue) / totalDealValue) * 100;
      
      let lpProfitDistribution = 0;
      let gpProfitDistribution = 0;
      
      if (useWaterfall === 1) {
        const holdPeriod = 5;
        const lpPrefAmount = lpCapitalContribution * (preferredReturn / 100) * holdPeriod;
        const gpPrefAmount = gpCapitalContribution * (preferredReturn / 100) * holdPeriod;
        
        let remainingProfit = totalProfitAtExit;
        
        if (remainingProfit >= lpPrefAmount) {
          lpProfitDistribution += lpPrefAmount;
          remainingProfit -= lpPrefAmount;
          
          const gpCatchUp = Math.min(gpPrefAmount, remainingProfit);
          gpProfitDistribution += gpCatchUp;
          remainingProfit -= gpCatchUp;
          
          lpProfitDistribution += remainingProfit * (lpPromoteShare / 100);
          gpProfitDistribution += remainingProfit * (1 - lpPromoteShare / 100);
        } else {
          lpProfitDistribution = remainingProfit;
        }
      } else {
        lpProfitDistribution = totalProfitAtExit * (lpEquityOwnership / 100);
        gpProfitDistribution = totalProfitAtExit * (gpEquityOwnership / 100);
      }
      
      const lpROI = lpCapitalContribution > 0 ? (lpProfitDistribution / lpCapitalContribution) * 100 : 0;
      const gpROI = gpCapitalContribution > 0 ? (gpProfitDistribution / gpCapitalContribution) * 100 : 0;
      const lpMultiple = lpCapitalContribution > 0 ? (lpCapitalContribution + lpProfitDistribution) / lpCapitalContribution : 0;
      const gpMultiple = gpCapitalContribution > 0 ? (gpCapitalContribution + gpProfitDistribution) / gpCapitalContribution : 0;

      return [
        { label: "Total Capital Raised", value: totalCapitalRaised.toFixed(2), isCurrency: true },
        { label: "GP Sweat Equity Value", value: gpSweatEquityValue.toFixed(2), isCurrency: true },
        { label: "Total Deal Value (Capital + Sweat Equity)", value: totalDealValue.toFixed(2), isCurrency: true },
        { label: "LP Equity Ownership", value: `${lpEquityOwnership.toFixed(2)}%`, isCurrency: false },
        { label: "GP Equity Ownership", value: `${gpEquityOwnership.toFixed(2)}%`, isCurrency: false },
        { label: "LP Profit Distribution", value: lpProfitDistribution.toFixed(2), isCurrency: true },
        { label: "GP Profit Distribution", value: gpProfitDistribution.toFixed(2), isCurrency: true },
        { label: "LP Return on Investment", value: `${lpROI.toFixed(2)}%`, isCurrency: false },
        { label: "GP Return on Investment", value: `${gpROI.toFixed(2)}%`, isCurrency: false },
        { label: "LP Return Multiple", value: `${lpMultiple.toFixed(2)}x`, isCurrency: false },
        { label: "GP Return Multiple", value: `${gpMultiple.toFixed(2)}x`, isCurrency: false },
      ];
    },
  },
};
