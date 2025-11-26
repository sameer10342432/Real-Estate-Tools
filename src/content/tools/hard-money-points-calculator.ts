import { CalculatorContent } from '@/types';

export const HARD_MONEY_POINTS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hard Money Points Calculator',
  description: 'Calculate origination points and fees for hard money loans. Understand total upfront costs including lender points, broker points, and additional fees.',
  icon: '📈',
  slug: 'hard-money-points-calculator',
  category: 'Investment Analysis',
  metaTitle: 'Hard Money Points Calculator | Calculate Origination Fees',
  metaDescription: 'Free Hard Money Points Calculator. Calculate total origination points, lender fees, broker fees, and upfront costs for hard money loans. Plan your financing costs accurately.',
  article: {
    title: 'Understanding Hard Money Loan Points and Fees',
    content: `
    <h2>What Are Origination Points?</h2>
    <p>Origination points are upfront fees charged by hard money lenders, calculated as a percentage of the loan amount. One point equals 1% of the loan. For example, 2 points on a $300,000 loan equals $6,000 in fees. These points are paid at closing and represent a significant cost that must be factored into your investment analysis.</p>

    <h3>Types of Points in Hard Money Lending</h3>
    <p>Understanding the different types of points helps you negotiate better terms:</p>
    <ul>
      <li><strong>Lender Points:</strong> Fees charged directly by the hard money lender for originating the loan. Typically 1-3 points.</li>
      <li><strong>Broker Points:</strong> If you're working with a mortgage broker, they may charge additional points for their services. Usually 0.5-2 points.</li>
      <li><strong>Exit Points:</strong> Some lenders charge points when you pay off the loan. Less common but worth asking about.</li>
      <li><strong>Extension Points:</strong> Additional points charged if you need to extend the loan beyond the original term.</li>
    </ul>

    <h3>Typical Fee Structure for Hard Money Loans</h3>
    <p>Beyond points, expect these additional fees:</p>
    <ul>
      <li><strong>Processing Fee:</strong> $500 - $1,500</li>
      <li><strong>Underwriting Fee:</strong> $500 - $2,000</li>
      <li><strong>Document Preparation:</strong> $250 - $750</li>
      <li><strong>Appraisal Fee:</strong> $400 - $800</li>
      <li><strong>Title Insurance:</strong> Varies by state and loan amount</li>
      <li><strong>Escrow/Closing Fees:</strong> $500 - $1,500</li>
      <li><strong>Wire Transfer Fees:</strong> $25 - $75</li>
    </ul>

    <h3>How Points Affect Your Investment Return</h3>
    <p>Points significantly impact your overall return on investment. Consider this example:</p>
    <p>On a $300,000 fix-and-flip loan with 3 points ($9,000) and a 6-month hold period, those points effectively add 6% to your annualized borrowing cost (3% over 6 months = 6% annualized). Combined with a 12% interest rate, your true cost of capital exceeds 18% annually.</p>

    <h3>Points vs. Interest Rate Trade-Off</h3>
    <p>Some lenders offer flexibility between points and interest rates:</p>
    <ul>
      <li><strong>Higher Points, Lower Rate:</strong> Better for longer-term holds where you'll benefit from lower monthly payments</li>
      <li><strong>Lower Points, Higher Rate:</strong> Often better for quick flips where you'll pay less total interest</li>
    </ul>
    <p>Calculate both scenarios to determine which saves you money based on your expected timeline.</p>

    <h3>How to Use This Calculator</h3>
    <p>This calculator helps you understand the full upfront cost picture:</p>
    <ul>
      <li><strong>Total Points Fee:</strong> Combined lender and broker points in dollars</li>
      <li><strong>Total Upfront Costs:</strong> Points plus all additional fees</li>
      <li><strong>Cost Per Month:</strong> Amortized cost if spread over the loan term</li>
      <li><strong>Percentage of Loan:</strong> Total fees as a percentage of loan amount</li>
    </ul>

    <h3>Tips for Minimizing Points and Fees</h3>
    <ul>
      <li><strong>Shop Multiple Lenders:</strong> Points vary significantly between lenders</li>
      <li><strong>Negotiate:</strong> Everything is negotiable, especially for experienced investors</li>
      <li><strong>Consider No-Broker Options:</strong> Direct lenders may offer lower total costs</li>
      <li><strong>Ask About Fee Waivers:</strong> Some lenders waive certain fees for repeat clients</li>
      <li><strong>Review the Fee Schedule:</strong> Get a detailed breakdown before committing</li>
      <li><strong>Calculate Break-Even:</strong> Understand when higher points might still make sense</li>
    </ul>

    <h3>Tax Implications of Points</h3>
    <p>Points paid on hard money loans for investment properties are typically deductible as business expenses. Consult with a tax professional to understand how to properly deduct these costs based on your specific situation and whether you're an active real estate professional.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'lenderPoints',
        label: 'Lender Points (%)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'brokerPoints',
        label: 'Broker Points (%)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'additionalFees',
        label: 'Additional Fees ($)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'loanTermMonths',
        label: 'Loan Term (Months)',
        type: 'number',
        defaultValue: 12,
      },
    ],
    calculate: (values) => {
      const { loanAmount, lenderPoints, brokerPoints, additionalFees, loanTermMonths } = values;
      
      const lenderPointsFee = loanAmount * (lenderPoints / 100);
      const brokerPointsFee = loanAmount * (brokerPoints / 100);
      const totalPointsFee = lenderPointsFee + brokerPointsFee;
      const totalPoints = lenderPoints + brokerPoints;
      
      const totalUpfrontCosts = totalPointsFee + additionalFees;
      const costPerMonth = totalUpfrontCosts / loanTermMonths;
      const totalCostPercentage = (totalUpfrontCosts / loanAmount) * 100;
      const annualizedCostPercentage = (totalCostPercentage / loanTermMonths) * 12;
      
      const netLoanProceeds = loanAmount - totalUpfrontCosts;
      
      let costAssessment = '';
      if (totalPoints <= 2) {
        costAssessment = 'Competitive - Below average points';
      } else if (totalPoints <= 3) {
        costAssessment = 'Standard - Typical market rates';
      } else if (totalPoints <= 4) {
        costAssessment = 'Above Average - Consider negotiating';
      } else {
        costAssessment = 'High - Shop for better terms';
      }

      return [
        { label: 'Lender Points Fee', value: lenderPointsFee.toFixed(2), isCurrency: true },
        { label: 'Broker Points Fee', value: brokerPointsFee.toFixed(2), isCurrency: true },
        { label: 'Total Points Fee', value: totalPointsFee.toFixed(2), isCurrency: true },
        { label: 'Total Points (%)', value: `${totalPoints.toFixed(2)}%` },
        { label: 'Total Upfront Costs', value: totalUpfrontCosts.toFixed(2), isCurrency: true },
        { label: 'Net Loan Proceeds', value: netLoanProceeds.toFixed(2), isCurrency: true },
        { label: 'Cost Per Month (Spread)', value: costPerMonth.toFixed(2), isCurrency: true },
        { label: 'Total Cost as % of Loan', value: `${totalCostPercentage.toFixed(2)}%` },
        { label: 'Annualized Fee Cost', value: `${annualizedCostPercentage.toFixed(2)}%` },
        { label: 'Cost Assessment', value: costAssessment },
      ];
    },
  },
};
