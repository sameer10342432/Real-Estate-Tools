import { CalculatorContent } from '@/types';

export const BLENDED_MORTGAGE_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Blended Mortgage Rate Calculator',
  description: 'Calculate the weighted average interest rate when combining multiple loans or mortgages',
  slug: 'blended-mortgage-rate-calculator',
  icon: '🔀',
  category: 'Basic Calculators',
  article: {
    title: 'Understanding Blended Mortgage Rates',
    content: `
    <h2>What is a Blended Mortgage Rate?</h2>
    <p>A blended rate is a weighted average interest rate calculated from multiple loans or debts. It's commonly used when:</p>
    <ul>
      <li><strong>Cash-Out Refinancing:</strong> Paying off high-interest debt (credit cards, student loans) with a new mortgage</li>
      <li><strong>Second Mortgages:</strong> Combining your first mortgage with a HELOC or second mortgage</li>
      <li><strong>Blend and Extend:</strong> Refinancing early by blending your existing low rate with current market rates</li>
      <li><strong>Debt Consolidation:</strong> Merging multiple debts into one loan</li>
    </ul>

    <h3>Blended Rate Formula</h3>
    <p>The formula for calculating a blended rate is:</p>
    <p><strong>Blended Rate = [(Balance₁ × Rate₁) + (Balance₂ × Rate₂) + ... + (Balanceₙ × Rateₙ)] ÷ Total Balance</strong></p>
    <p>This weighted average accounts for both the interest rate AND the balance of each loan.</p>

    <h3>Example Calculation</h3>
    <p><strong>Scenario:</strong> You want to consolidate debts with a cash-out refinance</p>
    <ul>
      <li>Current Mortgage: $250,000 @ 4.5%</li>
      <li>Student Loan: $50,000 @ 7.5%</li>
      <li>Credit Card: $25,000 @ 18%</li>
    </ul>
    <p><strong>Calculation:</strong></p>
    <pre>
Weighted Sum:
  ($250,000 × 0.045) = $11,250
  ($50,000 × 0.075) = $3,750
  ($25,000 × 0.18) = $4,500
  Total = $19,500

Total Balance: $325,000

Blended Rate: $19,500 ÷ $325,000 = 0.06 = 6.0%
    </pre>
    <p>Your current blended rate is 6.0%. If you can refinance all this debt at 5.5%, you'll save money.</p>

    <h3>When to Use Blended Rate Analysis</h3>
    <p><strong>Cash-Out Refinance Decision:</strong></p>
    <ul>
      <li>Calculate your current blended debt rate</li>
      <li>Compare to available refinance rates</li>
      <li>If refinance rate < blended rate, consolidation saves money</li>
      <li>Consider closing costs and break-even timeline</li>
    </ul>

    <p><strong>Blend and Extend (Early Refinance):</strong></p>
    <ul>
      <li>Keep part of your low existing rate</li>
      <li>Blend with new money at current rates</li>
      <li>Avoid prepayment penalties</li>
      <li>Extend term to reduce payments</li>
    </ul>

    <h3>Real-World Application Examples</h3>
    
    <h4>Example 1: Student Loan Payoff</h4>
    <p><strong>Current Situation:</strong></p>
    <ul>
      <li>Mortgage: $300,000 @ 3.5% = $1,347/month</li>
      <li>Student Loans: $100,000 @ 6.5% = $1,136/month</li>
      <li>Total Monthly: $2,483</li>
      <li>Blended Rate: 4.25%</li>
    </ul>
    <p><strong>Refinance Option:</strong></p>
    <ul>
      <li>New Mortgage: $400,000 @ 4.0% = $1,910/month</li>
      <li>Monthly Savings: $573</li>
      <li>Annual Savings: $6,876</li>
    </ul>

    <h4>Example 2: Credit Card Consolidation</h4>
    <p><strong>Current Situation:</strong></p>
    <ul>
      <li>Mortgage: $200,000 @ 5.0%</li>
      <li>Credit Card 1: $15,000 @ 19.99%</li>
      <li>Credit Card 2: $10,000 @ 22.99%</li>
      <li>Blended Rate: 6.9%</li>
    </ul>
    <p><strong>Cash-Out Refinance:</strong></p>
    <ul>
      <li>New Mortgage: $225,000 @ 5.5%</li>
      <li>Eliminates $500/month in credit card minimums</li>
      <li>Saves $30,000+ in interest over life of debts</li>
    </ul>

    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Closing Costs:</strong> Factor in 2-5% of loan amount for refinancing</li>
      <li><strong>Tax Deductibility:</strong> Mortgage interest may be deductible; credit card interest is not</li>
      <li><strong>Collateral Risk:</strong> Consolidating unsecured debt into mortgage puts your home at risk</li>
      <li><strong>Discipline Required:</strong> Don't run up credit cards again after consolidation</li>
      <li><strong>Loan Term Extension:</strong> Lower payments may mean more interest over time</li>
    </ul>

    <h3>Blend and Extend Strategy</h3>
    <p>This strategy is used when refinancing before your term ends:</p>
    <p><strong>Formula:</strong></p>
    <p>Blended Rate = [(Months Remaining × Old Rate) + (New Term Months × New Rate)] ÷ Total Months</p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>3 years left on 5-year mortgage @ 3%</li>
      <li>Extending with new 5-year term @ 2%</li>
      <li>Blended rate ≈ 2.4-2.6%</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following for each loan you want to include:</p>
    <ol>
      <li><strong>Loan Balance:</strong> Current outstanding balance</li>
      <li><strong>Interest Rate:</strong> Annual interest rate (as percentage)</li>
    </ol>
    <p>The calculator supports up to 4 different loans and will show:</p>
    <ul>
      <li>Weighted blended rate</li>
      <li>Total combined balance</li>
      <li>Potential refinance analysis</li>
    </ul>

    <h3>Decision Framework</h3>
    <p>Use this framework to decide if consolidation makes sense:</p>
    <ol>
      <li><strong>Calculate blended rate</strong> of all current debts</li>
      <li><strong>Get refinance quotes</strong> for total amount needed</li>
      <li><strong>Compare rates</strong> - is refinance rate lower than blended rate?</li>
      <li><strong>Calculate break-even</strong> - closing costs ÷ monthly savings</li>
      <li><strong>Consider timeline</strong> - will you keep the loan past break-even?</li>
      <li><strong>Assess behavior</strong> - can you avoid running up debt again?</li>
    </ol>

    <h3>FAQs</h3>
    <h4>Should I always consolidate if the blended rate is higher than refinance rates?</h4>
    <p>Not necessarily. Consider closing costs, loan term extension, and whether you're exchanging unsecured debt for secured debt against your home.</p>

    <h4>What if I have a really low mortgage rate from a few years ago?</h4>
    <p>If you have a 3% mortgage but 20% credit cards, your blended rate might be 5-7%. Even a 6% cash-out refinance could save money by eliminating high-interest debt, though you give up that low rate.</p>

    <h4>Is there a difference between blended rate and weighted average?</h4>
    <p>No, they're the same thing. Both terms refer to calculating an average that accounts for the different balances of each loan.</p>

    <h4>Can I use this for investment property analysis?</h4>
    <p>Yes, it's useful for calculating your overall cost of capital when using multiple financing sources for real estate investments.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loan1Balance',
        label: 'Loan 1 Balance ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'loan1Rate',
        label: 'Loan 1 Rate (%)',
        type: 'number',
        defaultValue: 4.5,
      },
      {
        name: 'loan2Balance',
        label: 'Loan 2 Balance ($)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'loan2Rate',
        label: 'Loan 2 Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loan3Balance',
        label: 'Loan 3 Balance (Optional) ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'loan3Rate',
        label: 'Loan 3 Rate (%)',
        type: 'number',
        defaultValue: 18.0,
      },
      {
        name: 'loan4Balance',
        label: 'Loan 4 Balance (Optional) ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'loan4Rate',
        label: 'Loan 4 Rate (%)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Total Combined Balance', isCurrency: true },
      { label: 'Blended Interest Rate', isCurrency: false },
      { label: 'Weighted Interest Cost', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const { loan1Balance, loan1Rate, loan2Balance, loan2Rate, loan3Balance, loan3Rate, loan4Balance, loan4Rate } = values;
      
      const totalBalance = loan1Balance + loan2Balance + loan3Balance + loan4Balance;
      
      if (totalBalance <= 0) {
        return [
          { label: 'Total Combined Balance', value: '0.00', isCurrency: true },
          { label: 'Blended Interest Rate', value: '0.000%', isCurrency: false },
          { label: 'Weighted Interest Cost', value: '0.00', isCurrency: true },
          { label: 'Recommendation', value: 'Enter at least one loan balance', isCurrency: false },
        ];
      }
      
      const weightedSum = (loan1Balance * loan1Rate) + (loan2Balance * loan2Rate) + (loan3Balance * loan3Rate) + (loan4Balance * loan4Rate);
      const blendedRate = weightedSum / totalBalance;
      const annualInterestCost = totalBalance * (blendedRate / 100);
      
      let recommendation = '';
      if (blendedRate > 7) {
        recommendation = 'High blended rate - consider refinancing if rates below ' + blendedRate.toFixed(2) + '%';
      } else if (blendedRate > 5) {
        recommendation = 'Moderate blended rate - compare with current market rates';
      } else {
        recommendation = 'Good blended rate - refinancing may not provide significant savings';
      }

      return [
        { label: 'Total Combined Balance', value: totalBalance.toFixed(2), isCurrency: true },
        { label: 'Blended Interest Rate', value: blendedRate.toFixed(3) + '%', isCurrency: false },
        { label: 'Weighted Interest Cost', value: annualInterestCost.toFixed(2), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
