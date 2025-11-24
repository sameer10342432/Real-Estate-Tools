import { CalculatorContent } from '@/types';

export const CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Co-op Board Approval Analyzer',
  description: 'Analyze co-op board approval requirements, financial criteria, and application success probability',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'co-op-board-approval-analyzer',
  article: {
    title: "Understanding Co-op Board Approval Process",
    content: `
    <h2>What is Co-op Board Approval?</h2>
    <p>Co-op board approval is a rigorous vetting process where the cooperative's board of directors reviews and approves or rejects potential buyers. Unlike condos, co-ops can reject buyers for almost any reason (except protected classes), making the approval process more challenging.</p>
    
    <h3>Financial Requirements for Co-op Approval</h3>
    <ul>
      <li><strong>Debt-to-Income Ratio:</strong> Typically must be below 25-30%</li>
      <li><strong>Post-Closing Liquidity:</strong> 1-2 years of maintenance fees + mortgage</li>
      <li><strong>Down Payment:</strong> Usually 20-50% minimum</li>
      <li><strong>Cash Reserves:</strong> Substantial savings beyond down payment</li>
      <li><strong>Income Verification:</strong> Tax returns (2-3 years), pay stubs, bank statements</li>
      <li><strong>Credit Score:</strong> Typically 700+ required</li>
      <li><strong>Net Worth:</strong> Some boards require specific net worth multiples</li>
    </ul>
    
    <h3>The Board Application Process</h3>
    <ul>
      <li><strong>Purchase Application:</strong> Detailed financial disclosure (50+ pages)</li>
      <li><strong>Reference Letters:</strong> Personal and professional references</li>
      <li><strong>Board Package Review:</strong> Board reviews all submitted materials</li>
      <li><strong>Interview:</strong> Face-to-face meeting with board members</li>
      <li><strong>Decision:</strong> Approval, rejection, or request for more information</li>
      <li><strong>Timeline:</strong> 4-8 weeks typical process</li>
    </ul>
    
    <h3>Common Rejection Reasons</h3>
    <ul>
      <li><strong>Insufficient Financials:</strong> Not enough post-closing liquidity</li>
      <li><strong>High Debt-to-Income:</strong> Monthly obligations too high</li>
      <li><strong>Incomplete Application:</strong> Missing required documents</li>
      <li><strong>Employment Concerns:</strong> Self-employed or irregular income</li>
      <li><strong>Intended Use:</strong> Plans to rent out (many co-ops prohibit)</li>
      <li><strong>Personality Fit:</strong> Board interview performance</li>
      <li><strong>Background Issues:</strong> Legal problems, bankruptcy history</li>
    </ul>
    
    <h3>Preparing for Board Approval</h3>
    <ul>
      <li><strong>Financial Review:</strong> Ensure DTI and liquidity meet requirements</li>
      <li><strong>Document Organization:</strong> Gather all financial documents early</li>
      <li><strong>Reference Selection:</strong> Choose strong professional references</li>
      <li><strong>Interview Preparation:</strong> Practice common board questions</li>
      <li><strong>Presentation Matters:</strong> Professional, respectful communication</li>
      <li><strong>Transparency:</strong> Disclose all required information upfront</li>
    </ul>
    
    <h3>Co-op vs. Condo Approval</h3>
    <p>Condos typically have "right of first refusal" but rarely reject qualified buyers. Co-ops have full discretion to reject buyers, making them more restrictive but also more selective about community composition.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "annualIncome",
        label: "Annual Gross Income",
        type: "number",
        placeholder: "150000",
        defaultValue: "150000",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "purchasePrice",
        label: "Co-op Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "monthlyMaintenance",
        label: "Monthly Maintenance Fee",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "liquidAssets",
        label: "Liquid Assets (Cash, Stocks)",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "interestRate",
        label: "Mortgage Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
    ],
    results: [
      { label: "Debt-to-Income Ratio", isCurrency: false },
      { label: "DTI Approval Status", isCurrency: false },
      { label: "Post-Closing Liquidity", isCurrency: true },
      { label: "Months of Reserves", isCurrency: false },
      { label: "Liquidity Approval Status", isCurrency: false },
      { label: "Down Payment Amount", isCurrency: true },
      { label: "Down Payment Adequacy", isCurrency: false },
      { label: "Overall Approval Probability", isCurrency: false },
    ],
    calculate: (data: any) => {
      const annualIncome = Number(data.annualIncome) || 0;
      const monthlyDebts = Number(data.monthlyDebts) || 0;
      const purchasePrice = Number(data.purchasePrice) || 0;
      const downPaymentPercent = Number(data.downPaymentPercent) || 0;
      const monthlyMaintenance = Number(data.monthlyMaintenance) || 0;
      const liquidAssets = Number(data.liquidAssets) || 0;
      const interestRate = (Number(data.interestRate) || 0) / 100 / 12;

      const monthlyIncome = annualIncome / 12;
      const downPaymentAmount = purchasePrice * (downPaymentPercent / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      
      const loanTerm = 30 * 12;
      let monthlyMortgage = 0;
      if (interestRate > 0 && loanTerm > 0) {
        monthlyMortgage = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
      }
      
      const totalMonthlyHousing = monthlyMortgage + monthlyMaintenance;
      const totalMonthlyObligations = totalMonthlyHousing + monthlyDebts;
      const dti = monthlyIncome > 0 ? (totalMonthlyObligations / monthlyIncome) * 100 : 0;
      
      let dtiStatus = "Excellent (<25%)";
      if (dti > 35) {
        dtiStatus = "Poor - Likely Rejection (>35%)";
      } else if (dti > 30) {
        dtiStatus = "Borderline (30-35%)";
      } else if (dti > 25) {
        dtiStatus = "Acceptable (25-30%)";
      }
      
      const postClosingLiquidity = liquidAssets - downPaymentAmount;
      const monthsOfReserves = totalMonthlyHousing > 0 ? postClosingLiquidity / totalMonthlyHousing : 0;
      
      let liquidityStatus = "Excellent (24+ months)";
      if (monthsOfReserves < 12) {
        liquidityStatus = "Poor - Likely Rejection (<12 months)";
      } else if (monthsOfReserves < 18) {
        liquidityStatus = "Borderline (12-18 months)";
      } else if (monthsOfReserves < 24) {
        liquidityStatus = "Acceptable (18-24 months)";
      }
      
      let downPaymentStatus = "Strong (≥20%)";
      if (downPaymentPercent < 20) {
        downPaymentStatus = "Insufficient - Most Co-ops Require 20%+";
      } else if (downPaymentPercent < 30) {
        downPaymentStatus = "Adequate (20-30%)";
      } else {
        downPaymentStatus = "Excellent (30%+)";
      }
      
      let approvalProbability = "High - Strong Candidate";
      if (dti > 30 || monthsOfReserves < 12 || downPaymentPercent < 20) {
        approvalProbability = "Low - Significant Concerns";
      } else if (dti > 25 || monthsOfReserves < 18) {
        approvalProbability = "Moderate - Some Concerns";
      }

      return [
        { label: "Debt-to-Income Ratio", value: `${dti.toFixed(2)}%`, isCurrency: false },
        { label: "DTI Approval Status", value: dtiStatus, isCurrency: false },
        { label: "Post-Closing Liquidity", value: `${postClosingLiquidity.toFixed(2)}`, isCurrency: true },
        { label: "Months of Reserves", value: `${monthsOfReserves.toFixed(1)} months`, isCurrency: false },
        { label: "Liquidity Approval Status", value: liquidityStatus, isCurrency: false },
        { label: "Down Payment Amount", value: `${downPaymentAmount.toFixed(2)}`, isCurrency: true },
        { label: "Down Payment Adequacy", value: downPaymentStatus, isCurrency: false },
        { label: "Overall Approval Probability", value: approvalProbability, isCurrency: false },
      ];
    },
  },
};
