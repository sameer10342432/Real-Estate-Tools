import { CalculatorContent } from '@/types';

export const MORTGAGE_ASSUMPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Assumption Calculator',
  description: 'Calculate costs and savings when assuming an existing mortgage with a low interest rate',
  slug: 'mortgage-assumption-calculator',
  icon: '🔁',
  category: 'Basic Calculators',
  article: {
    title: 'Understanding Mortgage Assumptions',
    content: `
    <h2>What is a Mortgage Assumption?</h2>
    <p>A mortgage assumption occurs when a homebuyer takes over (assumes) the seller's existing mortgage loan—keeping the same interest rate, remaining balance, and loan terms. This can save thousands when assuming a loan with a lower rate than current market rates.</p>

    <h3>Which Loans Are Assumable?</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Loan Type</th>
        <th>Assumable?</th>
        <th>Requirements</th>
      </tr>
      <tr>
        <td><strong>FHA Loans</strong></td>
        <td>✅ Yes</td>
        <td>Credit score 580-620+, DTI ≤43-50%, lender approval</td>
      </tr>
      <tr>
        <td><strong>VA Loans</strong></td>
        <td>✅ Yes</td>
        <td>Anyone can assume (even non-veterans), lender approval for loans after 1988</td>
      </tr>
      <tr>
        <td><strong>USDA Loans</strong></td>
        <td>✅ Yes</td>
        <td>Income limits, property in eligible rural area, lender approval</td>
      </tr>
      <tr>
        <td><strong>Conventional</strong></td>
        <td>❌ Mostly No</td>
        <td>Due-on-sale clause prevents transfer (rare exceptions: divorce, death)</td>
      </tr>
    </table>

    <h3>How Mortgage Assumptions Work</h3>
    <p><strong>Example Scenario:</strong></p>
    <ul>
      <li><strong>Home Purchase Price:</strong> $400,000</li>
      <li><strong>Existing FHA Loan Balance:</strong> $250,000 @ 3.5%</li>
      <li><strong>Current Market Rate:</strong> 7.0%</li>
      <li><strong>Equity Gap (Your Down Payment):</strong> $150,000</li>
    </ul>
    <p>You assume the $250,000 loan at 3.5% and pay the seller $150,000 in cash.</p>

    <h3>Costs of Assuming a Mortgage</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Fee Type</th>
        <th>Typical Amount</th>
      </tr>
      <tr>
        <td>Assumption Fee</td>
        <td>0.5% to 1% of loan balance</td>
      </tr>
      <tr>
        <td>FHA Assumption Fee</td>
        <td>$500 max (or $125 for simple assumption)</td>
      </tr>
      <tr>
        <td>VA Assumption Fee</td>
        <td>$300 + possible VA funding fee</td>
      </tr>
      <tr>
        <td>Equity Payment to Seller</td>
        <td>Home price - loan balance</td>
      </tr>
      <tr>
        <td>Closing Costs</td>
        <td>$2,000-$5,000 (title, escrow, transfer taxes)</td>
      </tr>
    </table>

    <h3>Calculating Monthly Savings</h3>
    <p>The value of an assumption comes from the interest rate difference:</p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Assumed loan: $250,000 @ 3.5% = $1,123/month</li>
      <li>New loan: $250,000 @ 7.0% = $1,663/month</li>
      <li><strong>Monthly savings: $540</strong></li>
      <li><strong>Annual savings: $6,480</strong></li>
      <li><strong>Lifetime savings (27 years): $175,000+</strong></li>
    </ul>

    <h3>Covering the Equity Gap</h3>
    <p>The equity gap is the difference between home price and remaining loan balance. Options include:</p>
    <ul>
      <li><strong>Cash Payment:</strong> Pay seller the full difference at closing</li>
      <li><strong>Seller Financing:</strong> Seller holds a second mortgage for part of the gap</li>
      <li><strong>Second Mortgage:</strong> Get a HELOC or second loan to cover the gap</li>
      <li><strong>Combination:</strong> Mix of cash + seller note + second mortgage</li>
    </ul>

    <h4>Example with Seller Financing:</h4>
    <ul>
      <li>Home price: $400,000</li>
      <li>Assumed VA loan: $250,000 @ 3.25%</li>
      <li>Buyer cash down: $50,000</li>
      <li>Seller carries second: $100,000 @ 6%</li>
      <li>Total financing: $350,000 (blended rate ~4.0%)</li>
    </ul>

    <h3>The Assumption Process</h3>
    <ol>
      <li><strong>Verify Assumability:</strong> Check loan documents or contact lender</li>
      <li><strong>Submit Application:</strong> Complete credit application with existing lender</li>
      <li><strong>Credit & Income Check:</strong> Lender verifies qualifications (like a new loan)</li>
      <li><strong>Appraisal:</strong> Property must appraise at purchase price</li>
      <li><strong>Pay Assumption Fee:</strong> Typically 0.5-1% of balance</li>
      <li><strong>Close Transaction:</strong> Pay equity gap, sign assumption agreement</li>
      <li><strong>Release of Liability:</strong> Seller gets released from original loan (novation)</li>
    </ol>

    <h3>Assumption Value Calculation</h3>
    <p>The "Assumption Value" is the present value of your payment savings:</p>
    <p><strong>Method:</strong></p>
    <ul>
      <li>Calculate payment difference (new loan rate vs. assumed rate)</li>
      <li>Multiply monthly savings × remaining months</li>
      <li>This represents total savings over life of loan</li>
    </ul>
    <p><strong>Example:</strong></p>
    <pre>
Monthly savings: $540
Remaining term: 27 years (324 months)
Gross savings: $540 × 324 = $174,960
Minus assumption costs: $174,960 - $5,000 = $169,960
    </pre>

    <h3>When Assumption Makes Sense</h3>
    <p>✅ <strong>Good situations for assumption:</strong></p>
    <ul>
      <li>Seller's rate is 2%+ below current market rates</li>
      <li>You have cash or financing for the equity gap</li>
      <li>You plan to keep the home long-term (5+ years)</li>
      <li>The loan has many years remaining (20+ years left)</li>
      <li>Assumption fees are reasonable (≤1% of balance)</li>
    </ul>

    <p>❌ <strong>When assumption may not work:</strong></p>
    <ul>
      <li>Rate difference is small (< 1%)</li>
      <li>Only a few years left on the loan</li>
      <li>Can't cover the large equity gap</li>
      <li>High assumption fees eat into savings</li>
      <li>Seller won't cooperate or loan terms aren't favorable</li>
    </ul>

    <h3>Risks and Considerations</h3>
    <ul>
      <li><strong>Large Down Payment Required:</strong> Equity gap can be $100,000-$300,000+ in hot markets</li>
      <li><strong>Seller Release:</strong> Ensure seller gets full release of liability (novation)</li>
      <li><strong>VA Entitlement:</strong> Non-veterans can assume VA loans, but seller's entitlement stays tied up</li>
      <li><strong>Lender Approval:</strong> Must qualify just like a new loan application</li>
      <li><strong>Second Mortgage Risk:</strong> Using second mortgage to cover gap increases total debt service</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate assumption savings and costs, enter:</p>
    <ol>
      <li><strong>Home Purchase Price:</strong> Agreed-upon sale price</li>
      <li><strong>Existing Loan Balance:</strong> Remaining principal on seller's mortgage</li>
      <li><strong>Assumed Interest Rate:</strong> Rate on the existing loan</li>
      <li><strong>Current Market Rate:</strong> Rate you'd get on a new mortgage today</li>
      <li><strong>Remaining Loan Term:</strong> Years left on the existing mortgage</li>
      <li><strong>Assumption Fee:</strong> Lender's fee (typically 0.5-1%)</li>
    </ol>

    <h3>FAQs</h3>
    <h4>Can I assume a conventional loan?</h4>
    <p>Very rarely. Almost all conventional loans have a "due-on-sale" clause requiring full payoff when the property transfers. Only FHA, VA, and USDA loans are generally assumable.</p>

    <h4>Will the seller's low rate stay the same?</h4>
    <p>Yes! That's the whole benefit. You take over the exact same rate, term, and payment schedule. The loan continues as if nothing changed.</p>

    <h4>Do I need to be a veteran to assume a VA loan?</h4>
    <p>No. Anyone can assume a VA loan regardless of military status. However, if a non-veteran assumes, the veteran seller's VA entitlement remains tied to that loan until it's paid off.</p>

    <h4>How long does the assumption process take?</h4>
    <p>Typically 30-60 days, similar to a new loan. The lender must review credit, income, and appraisal before approving the assumption.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Purchase Price ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'loanBalance',
        label: 'Existing Loan Balance ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'assumedRate',
        label: 'Assumed Interest Rate (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'marketRate',
        label: 'Current Market Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'remainingYears',
        label: 'Remaining Loan Term (Years)',
        type: 'number',
        defaultValue: 27,
      },
      {
        name: 'assumptionFee',
        label: 'Assumption Fee ($)',
        type: 'number',
        defaultValue: 2500,
      },
    ],
    results: [
      { label: 'Equity Gap (Down Payment)', isCurrency: true },
      { label: 'Monthly Payment (Assumed)', isCurrency: true },
      { label: 'Monthly Payment (New Loan)', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Lifetime Savings', isCurrency: true },
      { label: 'Net Savings (After Fees)', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, loanBalance, assumedRate, marketRate, remainingYears, assumptionFee } = values;
      
      const equityGap = homePrice - loanBalance;
      
      if (loanBalance <= 0 || remainingYears <= 0) {
        return [
          { label: 'Equity Gap (Down Payment)', value: equityGap.toFixed(2), isCurrency: true },
          { label: 'Monthly Payment (Assumed)', value: '0.00', isCurrency: true },
          { label: 'Monthly Payment (New Loan)', value: '0.00', isCurrency: true },
          { label: 'Monthly Savings', value: '0.00', isCurrency: true },
          { label: 'Lifetime Savings', value: '0.00', isCurrency: true },
          { label: 'Net Savings (After Fees)', value: (0 - assumptionFee).toFixed(2), isCurrency: true },
        ];
      }
      
      const monthlyRateAssumed = assumedRate / 100 / 12;
      const monthlyRateMarket = marketRate / 100 / 12;
      const numberOfPayments = remainingYears * 12;

      const assumedPayment = loanBalance * (monthlyRateAssumed * Math.pow(1 + monthlyRateAssumed, numberOfPayments)) / (Math.pow(1 + monthlyRateAssumed, numberOfPayments) - 1);
      const newPayment = loanBalance * (monthlyRateMarket * Math.pow(1 + monthlyRateMarket, numberOfPayments)) / (Math.pow(1 + monthlyRateMarket, numberOfPayments) - 1);
      
      const monthlySavings = newPayment - assumedPayment;
      const lifetimeSavings = monthlySavings * numberOfPayments;
      const netSavings = lifetimeSavings - assumptionFee;

      return [
        { label: 'Equity Gap (Down Payment)', value: equityGap.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (Assumed)', value: assumedPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (New Loan)', value: newPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Lifetime Savings', value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: 'Net Savings (After Fees)', value: netSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
