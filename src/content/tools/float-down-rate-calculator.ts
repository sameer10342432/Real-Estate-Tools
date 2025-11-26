import { CalculatorContent } from '@/types';

export const FLOAT_DOWN_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Float Down Rate Calculator',
  description: 'Calculate the value of a float-down option on your mortgage to capture lower rates while staying protected from increases.',
  slug: 'float-down-rate-calculator',
  icon: '📉',
  category: 'Mortgage & Financing',
  metaTitle: 'Float Down Rate Calculator - Mortgage Float-Down Option Analysis | Free Tool',
  metaDescription: 'Free float-down calculator to analyze if a mortgage float-down option is worth the cost. Calculate potential savings and break-even points for this rate protection strategy.',
  article: {
    title: 'Understanding Float-Down Rate Options',
    content: `
    <h2>What is a Float-Down Option?</h2>
    <p>A float-down option (also called a "float-down provision" or "one-time float-down") is a mortgage feature that allows borrowers to lock in a rate for protection against increases while retaining the ability to capture a lower rate if market rates drop before closing. It's the best of both worlds - protection and opportunity.</p>
    
    <h3>How Float-Down Options Work</h3>
    <ul>
      <li><strong>Initial Lock:</strong> You lock in a rate at current market levels</li>
      <li><strong>Float-Down Trigger:</strong> If rates drop by a specified amount (often 0.25% or more)</li>
      <li><strong>One-Time Use:</strong> Typically can only exercise the option once</li>
      <li><strong>Timing Window:</strong> Must exercise before a cutoff date (often 15-20 days before closing)</li>
      <li><strong>New Rate Terms:</strong> You get the new lower rate for the remaining lock period</li>
    </ul>

    <h3>Float-Down Option Costs</h3>
    <p>This valuable protection comes at a price:</p>
    <ul>
      <li><strong>Upfront Fee:</strong> Typically 0.125% to 0.50% of loan amount</li>
      <li><strong>Rate Premium:</strong> Some lenders build cost into a slightly higher rate</li>
      <li><strong>Partial Savings:</strong> You may only get part of the rate drop (e.g., 50%)</li>
      <li><strong>Minimum Decrease:</strong> Rates must drop by minimum amount to trigger</li>
    </ul>

    <h3>Float-Down vs. Regular Lock</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Regular Lock</th>
        <th>Float-Down Lock</th>
      </tr>
      <tr>
        <td>Protection from Increases</td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Benefit from Decreases</td>
        <td>No</td>
        <td>Yes (one-time)</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Usually free (30-45 days)</td>
        <td>0.125% - 0.50% fee</td>
      </tr>
      <tr>
        <td>Stress Level</td>
        <td>Set and forget</td>
        <td>May need to monitor rates</td>
      </tr>
    </table>

    <h3>When Float-Down Makes Sense</h3>
    <ul>
      <li><strong>Volatile Markets:</strong> Rates are fluctuating significantly</li>
      <li><strong>Long Lock Period:</strong> You're locking 60+ days before closing</li>
      <li><strong>Rate Uncertainty:</strong> Fed policy or economic news pending</li>
      <li><strong>Large Loan:</strong> Bigger loans mean bigger savings potential</li>
      <li><strong>Close to Thresholds:</strong> Current rate is near a round number (7.00%)</li>
    </ul>

    <h3>When to Skip the Float-Down</h3>
    <ul>
      <li>Rates are at historic lows and likely to rise</li>
      <li>Your lock period is short (30 days or less)</li>
      <li>The float-down fee is excessive</li>
      <li>You're comfortable with your locked rate</li>
      <li>The minimum rate decrease trigger is too high</li>
    </ul>

    <h3>Float-Down Restrictions</h3>
    <p>Read the fine print for these common limitations:</p>
    <ul>
      <li>Minimum rate decrease required (often 0.125% - 0.25%)</li>
      <li>Must exercise by specific date before closing</li>
      <li>Can only use once during the lock period</li>
      <li>May only capture portion of rate decrease</li>
      <li>Some loan types may not be eligible</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Analyze whether a float-down option is worth the cost:</p>
    <ul>
      <li><strong>Loan Amount:</strong> Your mortgage size</li>
      <li><strong>Locked Rate:</strong> Your initial locked rate</li>
      <li><strong>Float-Down Fee:</strong> Cost of the option</li>
      <li><strong>Potential Rate Drop:</strong> Estimated rate decrease scenario</li>
      <li><strong>Savings Share:</strong> What percentage of the drop you get</li>
    </ul>

    <h3>Maximizing Float-Down Value</h3>
    <ul>
      <li>Negotiate the float-down fee - it's often flexible</li>
      <li>Ask for lower minimum trigger requirements</li>
      <li>Time your lock around major economic announcements</li>
      <li>Monitor rates daily to optimize exercise timing</li>
      <li>Consider the option as insurance, not speculation</li>
    </ul>

    <h3>Alternatives to Float-Down</h3>
    <ul>
      <li><strong>Shorter Lock:</strong> Lock closer to closing to reduce uncertainty</li>
      <li><strong>Floating:</strong> Don't lock and take full market risk</li>
      <li><strong>Multiple Locks:</strong> Get quotes from multiple lenders</li>
      <li><strong>Re-Lock:</strong> Some lenders allow re-locking at market rates</li>
    </ul>
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
        name: 'lockedRate',
        label: 'Initially Locked Rate (%)',
        type: 'number',
        defaultValue: 6.75,
      },
      {
        name: 'floatDownFeePercent',
        label: 'Float-Down Fee (%)',
        type: 'number',
        defaultValue: 0.25,
      },
      {
        name: 'potentialRateDrop',
        label: 'Potential Rate Drop (%)',
        type: 'number',
        defaultValue: 0.375,
      },
      {
        name: 'savingsSharePercent',
        label: 'Savings Share You Receive (%)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'minimumTrigger',
        label: 'Minimum Trigger Required (%)',
        type: 'number',
        defaultValue: 0.125,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Float-Down Fee Cost', isCurrency: true },
      { label: 'Original Monthly Payment', isCurrency: true },
      { label: 'New Monthly Payment (If Used)', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Lifetime Interest Savings', isCurrency: true },
      { label: 'Net Savings After Fee', isCurrency: true },
      { label: 'Break-Even Rate Drop', isCurrency: false },
      { label: 'Float-Down Value Assessment', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, lockedRate, floatDownFeePercent, potentialRateDrop, savingsSharePercent, minimumTrigger, loanTerm } = values;
      
      const floatDownFee = (loanAmount * floatDownFeePercent) / 100;
      const numberOfPayments = loanTerm * 12;
      
      const actualRateDrop = potentialRateDrop >= minimumTrigger ? 
        (potentialRateDrop * savingsSharePercent / 100) : 0;
      
      const originalMonthlyRate = lockedRate / 100 / 12;
      const originalMonthly = loanAmount * 
        (originalMonthlyRate * Math.pow(1 + originalMonthlyRate, numberOfPayments)) / 
        (Math.pow(1 + originalMonthlyRate, numberOfPayments) - 1);
      
      const newRate = lockedRate - actualRateDrop;
      const newMonthlyRate = newRate / 100 / 12;
      const newMonthly = loanAmount * 
        (newMonthlyRate * Math.pow(1 + newMonthlyRate, numberOfPayments)) / 
        (Math.pow(1 + newMonthlyRate, numberOfPayments) - 1);
      
      const monthlySavings = originalMonthly - newMonthly;
      const lifetimeSavings = monthlySavings * numberOfPayments;
      const netSavings = lifetimeSavings - floatDownFee;
      
      const breakEvenMonthlyRate = floatDownFee / numberOfPayments;
      const breakEvenDrop = (breakEvenMonthlyRate * 12 / loanAmount) * 10000;
      
      let assessment = "Evaluate based on rate expectations";
      if (potentialRateDrop < minimumTrigger) {
        assessment = "Rate drop doesn't meet minimum trigger";
      } else if (netSavings > floatDownFee * 3) {
        assessment = "Excellent value - significant savings expected";
      } else if (netSavings > 0) {
        assessment = "Good value - savings exceed cost";
      } else if (netSavings < 0) {
        assessment = "Not worth it - costs exceed potential savings";
      }

      return [
        { label: 'Float-Down Fee Cost', value: floatDownFee.toFixed(2), isCurrency: true },
        { label: 'Original Monthly Payment', value: originalMonthly.toFixed(2), isCurrency: true },
        { label: 'New Monthly Payment (If Used)', value: newMonthly.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Lifetime Interest Savings', value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: 'Net Savings After Fee', value: netSavings.toFixed(2), isCurrency: true },
        { label: 'Break-Even Rate Drop', value: breakEvenDrop.toFixed(3) + '%', isCurrency: false },
        { label: 'Float-Down Value Assessment', value: assessment, isCurrency: false },
      ];
    },
  },
};
