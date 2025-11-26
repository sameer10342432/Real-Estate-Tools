import { CalculatorContent } from '@/types';

export const HARD_MONEY_LTV_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hard Money LTV Calculator',
  description: 'Calculate maximum loan amount based on Loan-to-Value ratio for hard money loans. Essential tool for real estate investors.',
  icon: '📊',
  slug: 'hard-money-ltv-calculator',
  category: 'Investment Analysis',
  metaTitle: 'Hard Money LTV Calculator | Calculate Maximum Loan Amount',
  metaDescription: 'Free Hard Money LTV Calculator. Determine your maximum loan amount based on property value and LTV ratio. Calculate equity requirements for hard money loans.',
  article: {
    title: 'Understanding LTV for Hard Money Loans',
    content: `
    <h2>What is Loan-to-Value (LTV) Ratio?</h2>
    <p>The Loan-to-Value (LTV) ratio is one of the most critical metrics in hard money lending. It represents the percentage of the property's value that a lender is willing to finance. For hard money loans, LTV ratios typically range from 60% to 75%, though some lenders may go higher depending on the deal and borrower experience.</p>

    <h3>Why LTV Matters for Hard Money Loans</h3>
    <p>Hard money lenders use LTV as their primary risk assessment tool. Unlike traditional lenders who focus heavily on credit scores and income verification, hard money lenders are primarily concerned with the collateral—the property itself. A lower LTV means:</p>
    <ul>
      <li><strong>Lower Risk for Lender:</strong> More equity cushion in case of default and foreclosure</li>
      <li><strong>Better Loan Terms:</strong> Lower LTV often translates to better interest rates</li>
      <li><strong>Faster Approval:</strong> Conservative LTV deals are approved more quickly</li>
      <li><strong>Higher Equity Requirement:</strong> Borrowers need more cash for down payment</li>
    </ul>

    <h3>Common LTV Limits in Hard Money Lending</h3>
    <p>Different types of hard money loans have varying LTV caps:</p>
    <ul>
      <li><strong>Fix and Flip Loans:</strong> 65-75% of ARV (After Repair Value) or 80-90% of purchase price</li>
      <li><strong>Bridge Loans:</strong> 65-80% of current property value</li>
      <li><strong>Ground-Up Construction:</strong> 60-70% of completed project value</li>
      <li><strong>Rental Property Loans:</strong> 70-75% of property value</li>
    </ul>

    <h3>LTV vs. ARV-Based Lending</h3>
    <p>Some hard money lenders calculate their maximum loan based on the After Repair Value (ARV) rather than the current value. This is common in fix-and-flip scenarios where the property's value will increase significantly after renovation. Understanding whether your lender uses LTV or ARV-based calculations is crucial for accurate planning.</p>

    <h3>How to Use This Calculator</h3>
    <p>This Hard Money LTV Calculator helps you determine:</p>
    <ul>
      <li><strong>Maximum Loan Amount:</strong> Based on property value and desired LTV ratio</li>
      <li><strong>Required Equity:</strong> The down payment or cash you need to bring to the deal</li>
      <li><strong>LTV Assessment:</strong> How your requested LTV compares to typical lender caps</li>
    </ul>
    <p>Enter your property value, desired LTV percentage, and the lender's maximum LTV cap to see your financing options clearly.</p>

    <h3>Tips for Negotiating LTV</h3>
    <p>To potentially secure better LTV terms:</p>
    <ul>
      <li>Demonstrate experience with successful projects</li>
      <li>Provide detailed renovation plans and budgets</li>
      <li>Show strong exit strategy (sale or refinance)</li>
      <li>Offer additional collateral if available</li>
      <li>Consider paying higher points for higher LTV</li>
    </ul>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'ltvRatio',
        label: 'Desired LTV Ratio (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'lenderLtvCap',
        label: 'Lender LTV Cap (%)',
        type: 'number',
        defaultValue: 75,
      },
    ],
    calculate: (values) => {
      const { propertyValue, ltvRatio, lenderLtvCap } = values;
      
      const effectiveLtv = Math.min(ltvRatio, lenderLtvCap);
      const maxLoanAmount = propertyValue * (effectiveLtv / 100);
      const equityRequired = propertyValue - maxLoanAmount;
      const equityPercentage = 100 - effectiveLtv;
      
      let ltvAssessment = '';
      if (effectiveLtv <= 60) {
        ltvAssessment = 'Conservative - Excellent terms likely';
      } else if (effectiveLtv <= 70) {
        ltvAssessment = 'Moderate - Good terms available';
      } else if (effectiveLtv <= 75) {
        ltvAssessment = 'Standard - Typical hard money range';
      } else {
        ltvAssessment = 'Aggressive - Limited lender options';
      }
      
      const atLenderCap = ltvRatio >= lenderLtvCap;

      return [
        { label: 'Maximum Loan Amount', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Equity Required', value: equityRequired.toFixed(2), isCurrency: true },
        { label: 'Equity Percentage', value: `${equityPercentage.toFixed(1)}%` },
        { label: 'Effective LTV', value: `${effectiveLtv.toFixed(1)}%` },
        { label: 'LTV Assessment', value: ltvAssessment },
        { label: 'At Lender Cap', value: atLenderCap ? 'Yes - Consider lower LTV' : 'No - Room available' },
      ];
    },
  },
};
