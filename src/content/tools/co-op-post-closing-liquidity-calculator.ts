import { CalculatorContent } from '@/types';

export const CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Co-op Post-Closing Liquidity Calculator',
  description: 'Calculate post-closing liquid reserves required for co-op board approval',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'co-op-post-closing-liquidity-calculator',
  article: {
    title: "Co-op Post-Closing Liquidity Requirements",
    content: `
    <h2>What is Post-Closing Liquidity?</h2>
    <p>Post-closing liquidity refers to liquid assets (cash, stocks, bonds) remaining AFTER the co-op purchase closes. Co-op boards require substantial reserves to ensure shareholders can continue paying maintenance fees during financial hardships like job loss or emergencies.</p>
    
    <h3>Why Co-ops Require High Liquidity</h3>
    <ul>
      <li><strong>Financial Stability:</strong> Ensures shareholders can pay maintenance during hardship</li>
      <li><strong>Building Protection:</strong> Reduces risk of defaults affecting all shareholders</li>
      <li><strong>Community Quality:</strong> Attracts financially stable residents</li>
      <li><strong>Loan Security:</strong> Underlying mortgage lenders require strong financials</li>
    </ul>
    
    <h3>Typical Post-Closing Liquidity Requirements</h3>
    <ul>
      <li><strong>Standard Co-ops:</strong> 1-2 years of total housing costs</li>
      <li><strong>Luxury Buildings:</strong> 2-3 years of total housing costs</li>
      <li><strong>Ultra-Luxury:</strong> 3+ years or specific dollar amounts ($500K+)</li>
      <li><strong>Housing Costs Include:</strong> Mortgage + maintenance + property taxes</li>
    </ul>
    
    <h3>What Counts as Liquid Assets</h3>
    <p><strong>Acceptable:</strong></p>
    <ul>
      <li>Cash in checking/savings accounts</li>
      <li>Money market accounts</li>
      <li>Stocks and bonds (sometimes discounted 10-20%)</li>
      <li>Mutual funds and ETFs</li>
      <li>Certificates of Deposit (CDs)</li>
    </ul>
    
    <p><strong>Not Accepted:</strong></p>
    <ul>
      <li>Retirement accounts (401k, IRA) - not liquid without penalty</li>
      <li>Home equity or real estate</li>
      <li>Business assets or inventory</li>
      <li>Collectibles, artwork, vehicles</li>
      <li>Unvested stock options</li>
    </ul>
    
    <h3>Calculation Example</h3>
    <p>Purchase Price: $800,000</p>
    <p>Down Payment (20%): $160,000</p>
    <p>Closing Costs: $25,000</p>
    <p>Monthly Mortgage: $3,200</p>
    <p>Monthly Maintenance: $1,500</p>
    <p>Monthly Property Tax: $500</p>
    
    <p><strong>Total Out of Pocket:</strong> $185,000</p>
    <p><strong>Monthly Housing Cost:</strong> $5,200</p>
    <p><strong>Required Liquidity (2 years):</strong> $124,800</p>
    <p><strong>Total Liquid Assets Needed:</strong> $309,800 minimum</p>
    
    <h3>Strategies to Meet Liquidity Requirements</h3>
    <ul>
      <li><strong>Increase Down Payment:</strong> Reduces mortgage and monthly costs</li>
      <li><strong>All-Cash Purchase:</strong> Eliminates mortgage payment from calculation</li>
      <li><strong>Gift Funds:</strong> Properly documented gifts count as liquid assets</li>
      <li><strong>Stock Portfolios:</strong> Maintain investment accounts (may be discounted)</li>
      <li><strong>Choose Less Expensive Unit:</strong> Lower maintenance fees reduce requirements</li>
      <li><strong>Co-Borrower:</strong> Combine liquid assets with spouse or partner</li>
    </ul>
    
    <h3>Common Rejection Reasons</h3>
    <ul>
      <li><strong>Insufficient Liquidity:</strong> Not enough reserves after closing</li>
      <li><strong>Retirement-Heavy Assets:</strong> Too much wealth in 401k/IRA</li>
      <li><strong>Illiquid Net Worth:</strong> High net worth but not liquid enough</li>
      <li><strong>Recent Asset Transfer:</strong> Moving money right before application raises flags</li>
    </ul>
    
    <h3>Board Package Documentation</h3>
    <p>You'll need to provide comprehensive proof of liquid assets including:</p>
    <ul>
      <li>Bank statements (3-6 months)</li>
      <li>Investment account statements</li>
      <li>Stock portfolio valuations</li>
      <li>Gift letters if applicable</li>
      <li>Tax returns showing asset history</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Co-op Purchase Price",
        type: "number",
        placeholder: "800000",
        defaultValue: "800000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "closingCosts",
        label: "Estimated Closing Costs",
        type: "number",
        placeholder: "25000",
        defaultValue: "25000",
      },
      {
        name: "monthlyMortgage",
        label: "Monthly Mortgage Payment",
        type: "number",
        placeholder: "3200",
        defaultValue: "3200",
      },
      {
        name: "monthlyMaintenance",
        label: "Monthly Maintenance Fee",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "monthlyPropertyTax",
        label: "Monthly Property Tax (if not in maintenance)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "liquidAssets",
        label: "Total Liquid Assets Available",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
    ],
    results: [
      { label: "Down Payment Amount", isCurrency: true },
      { label: "Total Out-of-Pocket at Closing", isCurrency: true },
      { label: "Post-Closing Liquid Assets", isCurrency: true },
      { label: "Monthly Housing Costs", isCurrency: true },
      { label: "Months of Reserves", isCurrency: false },
      { label: "1-Year Requirement Met", isCurrency: false },
      { label: "2-Year Requirement Met", isCurrency: false },
      { label: "Board Approval Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const downPaymentPercent = Number(data.downPaymentPercent) || 0;
      const closingCosts = Number(data.closingCosts) || 0;
      const monthlyMortgage = Number(data.monthlyMortgage) || 0;
      const monthlyMaintenance = Number(data.monthlyMaintenance) || 0;
      const monthlyPropertyTax = Number(data.monthlyPropertyTax) || 0;
      const liquidAssets = Number(data.liquidAssets) || 0;

      const downPaymentAmount = purchasePrice * (downPaymentPercent / 100);
      const totalOutOfPocket = downPaymentAmount + closingCosts;
      const postClosingLiquidity = liquidAssets - totalOutOfPocket;
      
      const monthlyHousingCosts = monthlyMortgage + monthlyMaintenance + monthlyPropertyTax;
      const monthsOfReserves = monthlyHousingCosts > 0 ? postClosingLiquidity / monthlyHousingCosts : 0;
      
      const oneYearReserves = monthlyHousingCosts * 12;
      const twoYearReserves = monthlyHousingCosts * 24;
      
      const oneYearMet = postClosingLiquidity >= oneYearReserves ? "✓ Yes" : "✗ No";
      const twoYearMet = postClosingLiquidity >= twoYearReserves ? "✓ Yes" : "✗ No";
      
      let boardAssessment = "Excellent - Strong Candidate";
      if (monthsOfReserves < 12) {
        boardAssessment = "Poor - Likely Rejection (<1 year reserves)";
      } else if (monthsOfReserves < 18) {
        boardAssessment = "Borderline - Risky (1-1.5 years)";
      } else if (monthsOfReserves < 24) {
        boardAssessment = "Acceptable - May Be Questioned (1.5-2 years)";
      } else if (monthsOfReserves < 36) {
        boardAssessment = "Good - Meets Standards (2-3 years)";
      }

      return [
        { label: "Down Payment Amount", value: `${downPaymentAmount.toFixed(2)}`, isCurrency: true },
        { label: "Total Out-of-Pocket at Closing", value: `${totalOutOfPocket.toFixed(2)}`, isCurrency: true },
        { label: "Post-Closing Liquid Assets", value: `${postClosingLiquidity.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Housing Costs", value: `${monthlyHousingCosts.toFixed(2)}`, isCurrency: true },
        { label: "Months of Reserves", value: `${monthsOfReserves.toFixed(1)} months`, isCurrency: false },
        { label: "1-Year Requirement Met", value: oneYearMet, isCurrency: false },
        { label: "2-Year Requirement Met", value: twoYearMet, isCurrency: false },
        { label: "Board Approval Assessment", value: boardAssessment, isCurrency: false },
      ];
    },
  },
};
