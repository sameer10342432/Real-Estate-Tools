import { CalculatorContent } from '@/types';

export const MORTGAGE_POINTS_PAYBACK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Points Payback Period Calculator',
  description: 'Calculate how long it takes to recoup the cost of buying mortgage discount points',
  slug: 'mortgage-points-payback-calculator',
  icon: '📉',
  category: 'Basic Calculators',
  article: {
    title: 'Understanding Mortgage Points and Payback Period',
    content: `
    <h2>What Are Mortgage Discount Points?</h2>
    <p>Mortgage discount points, also known as "buying down the rate," are upfront fees paid to the lender at closing to reduce your interest rate. Each point typically costs 1% of your loan amount and generally reduces your rate by about 0.25%.</p>
    
    <h3>How Mortgage Points Work</h3>
    <p>When you buy discount points, you're essentially prepaying some interest to get a lower rate for the life of your loan. This results in:</p>
    <ul>
      <li><strong>Lower Monthly Payment:</strong> Reduced interest rate means lower monthly principal and interest payments</li>
      <li><strong>Higher Upfront Cost:</strong> Points are paid at closing, increasing your initial cash requirement</li>
      <li><strong>Long-term Savings:</strong> Over time, the monthly savings can exceed the upfront cost</li>
      <li><strong>Tax Deduction:</strong> Points may be tax-deductible in the year paid (consult tax advisor)</li>
    </ul>

    <h3>Understanding Payback Period</h3>
    <p>The payback period (or break-even point) is the time it takes for your monthly payment savings to equal the upfront cost of the points. The formula is:</p>
    <p><strong>Payback Period = Cost of Points ÷ Monthly Payment Savings</strong></p>
    <p>For example, if you pay $3,000 for points and save $100/month, your payback period is 30 months.</p>

    <h3>When Should You Buy Points?</h3>
    <p>Buying mortgage points makes sense when:</p>
    <ul>
      <li><strong>Long-term ownership:</strong> You plan to keep the home and loan longer than the payback period</li>
      <li><strong>Extra cash available:</strong> You have surplus funds after down payment and reserves</li>
      <li><strong>Low rates available:</strong> Current rates are already favorable, making further reduction valuable</li>
      <li><strong>High income bracket:</strong> Tax deduction provides additional benefit</li>
      <li><strong>No prepayment penalty:</strong> You're not restricted from refinancing later</li>
    </ul>

    <h3>When to Avoid Buying Points</h3>
    <ul>
      <li><strong>Short-term ownership:</strong> Planning to sell or refinance before break-even</li>
      <li><strong>Limited cash:</strong> Better to use funds for larger down payment to avoid PMI</li>
      <li><strong>Uncertain timeline:</strong> Job relocation or life changes may be coming</li>
      <li><strong>High rates:</strong> When rates are elevated, points offer less value</li>
      <li><strong>Seller credits available:</strong> Seller concessions might be better used for other costs</li>
    </ul>

    <h3>Points vs. Higher Down Payment</h3>
    <p>Compare these alternatives:</p>
    <ul>
      <li><strong>Buy Points:</strong> Lower rate, same loan amount, higher closing costs</li>
      <li><strong>Larger Down Payment:</strong> Smaller loan amount, same rate, potentially avoid PMI</li>
      <li><strong>Cash Reserves:</strong> Keep liquidity for emergencies, home improvements, or investments</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate your payback period, you'll need:</p>
    <ol>
      <li><strong>Loan Amount:</strong> The mortgage principal (home price minus down payment)</li>
      <li><strong>Original Interest Rate:</strong> The rate without buying points</li>
      <li><strong>Interest Rate with Points:</strong> The reduced rate after buying points</li>
      <li><strong>Number of Points:</strong> How many points you're buying (each point = 1% of loan)</li>
      <li><strong>Loan Term:</strong> Length of mortgage (typically 15 or 30 years)</li>
    </ol>
    <p>The calculator will show you the monthly savings, total cost of points, payback period in months, and long-term savings if you keep the loan for its full term.</p>

    <h3>Real-World Example</h3>
    <p><strong>Scenario:</strong> $400,000 loan, 30-year term</p>
    <ul>
      <li>Without points: 7.0% rate = $2,661/month</li>
      <li>With 2 points ($8,000): 6.5% rate = $2,528/month</li>
      <li>Monthly savings: $133</li>
      <li>Payback period: 60 months (5 years)</li>
      <li>Total 30-year savings: $47,880 - $8,000 = $39,880</li>
    </ul>
    <p>If you keep this loan for at least 5 years, buying points saves you nearly $40,000 over the loan's life.</p>

    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Refinancing Impact:</strong> If you refinance before break-even, you lose the benefit</li>
      <li><strong>Opportunity Cost:</strong> Consider what else you could do with that money</li>
      <li><strong>Rate Environment:</strong> In falling rate markets, points may not be optimal</li>
      <li><strong>Lender Credits:</strong> Sometimes lenders offer credits for accepting higher rates</li>
      <li><strong>Types of Points:</strong> Discount points (lower rate) vs. origination points (lender fees)</li>
    </ul>

    <h3>FAQs</h3>
    <h4>Can I negotiate the cost of points?</h4>
    <p>Yes, some lenders may offer different point-to-rate ratios. Shop around and compare offers from multiple lenders.</p>

    <h4>Are mortgage points tax-deductible?</h4>
    <p>Generally yes for primary residence purchases, but rules vary. Consult with a tax professional for your specific situation.</p>

    <h4>What's a good payback period?</h4>
    <p>Most experts suggest buying points only if your payback period is 3-5 years or less, and you're confident you'll keep the loan that long.</p>

    <h4>Can I use seller concessions to buy points?</h4>
    <p>Yes, if the seller agrees to closing cost credits, you can use those funds to buy points instead of paying out of pocket.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'originalRate',
        label: 'Original Interest Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'rateWithPoints',
        label: 'Rate with Points (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'numberOfPoints',
        label: 'Number of Points',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Cost of Points', isCurrency: true },
      { label: 'Original Monthly Payment', isCurrency: true },
      { label: 'New Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Payback Period (Months)', isCurrency: false },
      { label: 'Total Lifetime Savings', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, originalRate, rateWithPoints, numberOfPoints, loanTerm } = values;
      
      const costOfPoints = loanAmount * (numberOfPoints / 100);
      const monthlyRateOriginal = originalRate / 100 / 12;
      const monthlyRateNew = rateWithPoints / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const originalPayment = loanAmount * (monthlyRateOriginal * Math.pow(1 + monthlyRateOriginal, numberOfPayments)) / (Math.pow(1 + monthlyRateOriginal, numberOfPayments) - 1);
      const newPayment = loanAmount * (monthlyRateNew * Math.pow(1 + monthlyRateNew, numberOfPayments)) / (Math.pow(1 + monthlyRateNew, numberOfPayments) - 1);
      
      const monthlySavings = originalPayment - newPayment;
      
      let paybackPeriod = 'N/A - No savings';
      let lifetimeSavings = (monthlySavings * numberOfPayments) - costOfPoints;
      
      if (monthlySavings > 0) {
        const paybackMonths = costOfPoints / monthlySavings;
        paybackPeriod = paybackMonths.toFixed(1) + ' months';
      } else if (monthlySavings < 0) {
        paybackPeriod = 'Never - Points increase payment';
        lifetimeSavings = monthlySavings * numberOfPayments;
      }

      return [
        { label: 'Cost of Points', value: costOfPoints.toFixed(2), isCurrency: true },
        { label: 'Original Monthly Payment', value: originalPayment.toFixed(2), isCurrency: true },
        { label: 'New Monthly Payment', value: newPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Payback Period', value: paybackPeriod, isCurrency: false },
        { label: 'Total Lifetime Savings', value: lifetimeSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
