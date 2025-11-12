import { CalculatorContent } from '@/types';

export const APR_VS_INTEREST_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'APR vs. Interest Rate Calculator',
  description: 'Compare APR and interest rate to understand the true cost of your mortgage loan',
  slug: 'apr-vs-interest-rate-calculator',
  icon: '📊',
  category: 'Basic Calculators',
  article: {
    title: 'Understanding APR vs. Interest Rate',
    content: `
    <h2>What's the Difference Between APR and Interest Rate?</h2>
    <p>While both APR (Annual Percentage Rate) and interest rate are expressed as percentages, they represent different costs:</p>
    <ul>
      <li><strong>Interest Rate:</strong> The cost of borrowing the principal loan amount, expressed as a percentage</li>
      <li><strong>APR (Annual Percentage Rate):</strong> The total cost of the loan including interest rate plus lender fees, points, and other charges, expressed as a yearly rate</li>
    </ul>

    <h3>Why APR is Always Higher Than Interest Rate</h3>
    <p>APR includes additional costs beyond just the interest rate:</p>
    <ul>
      <li><strong>Origination Fees:</strong> Lender charges for processing the loan (0.5% to 1% of loan)</li>
      <li><strong>Discount Points:</strong> Upfront fees paid to reduce the interest rate</li>
      <li><strong>Broker Fees:</strong> Commissions paid to mortgage brokers</li>
      <li><strong>Underwriting Fees:</strong> Cost of evaluating and approving your application</li>
      <li><strong>Processing Fees:</strong> Administrative costs</li>
      <li><strong>Mortgage Insurance:</strong> Some calculations include PMI or MIP premiums</li>
    </ul>
    <p>By law, lenders must disclose APR, making it easier to compare loan offers from different lenders on an apples-to-apples basis.</p>

    <h3>What's NOT Included in APR</h3>
    <p>Some closing costs are excluded from APR calculations:</p>
    <ul>
      <li>Appraisal fees</li>
      <li>Home inspection costs</li>
      <li>Title insurance and search fees</li>
      <li>Attorney fees</li>
      <li>Recording fees</li>
      <li>Credit report fees</li>
      <li>Notary fees</li>
    </ul>
    <p>These are considered third-party costs, not lender charges.</p>

    <h3>How to Use APR for Loan Comparison</h3>
    <p>APR is most useful when comparing similar loan offers:</p>
    <ul>
      <li><strong>Same loan amount and term:</strong> Compare 30-year loans with 30-year loans</li>
      <li><strong>Same loan type:</strong> Fixed-rate to fixed-rate, ARM to ARM</li>
      <li><strong>Same property use:</strong> Primary residence vs. investment property</li>
    </ul>
    <p><strong>Example Comparison:</strong></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Lender</th>
        <th>Interest Rate</th>
        <th>Closing Costs</th>
        <th>APR</th>
        <th>Winner</th>
      </tr>
      <tr>
        <td>Lender A</td>
        <td>6.5%</td>
        <td>$2,000</td>
        <td>6.65%</td>
        <td>✓ Lower total cost</td>
      </tr>
      <tr>
        <td>Lender B</td>
        <td>6.25%</td>
        <td>$8,000</td>
        <td>6.75%</td>
        <td></td>
      </tr>
    </table>
    <p>Lender A has a higher interest rate but lower APR, indicating better overall value.</p>

    <h3>When APR Can Be Misleading</h3>
    <p>APR assumes you'll keep the loan for its full term. It can be misleading when:</p>
    <ul>
      <li><strong>Short-term ownership:</strong> If you plan to sell or refinance in 3-5 years, upfront costs matter more than APR</li>
      <li><strong>Adjustable-rate mortgages:</strong> APR estimates future rate changes, which may not be accurate</li>
      <li><strong>No-cost loans:</strong> Higher rate with zero fees may show higher APR but cost less short-term</li>
      <li><strong>Different loan terms:</strong> Comparing 15-year vs. 30-year loans with APR alone is not meaningful</li>
    </ul>

    <h3>Calculating APR</h3>
    <p>The APR calculation spreads all upfront lender fees across the life of the loan. The formula is complex, but essentially:</p>
    <ol>
      <li>Add all lender fees to determine total finance charges</li>
      <li>Calculate the interest rate that would produce the same monthly payment including those fees</li>
      <li>Express that rate as an annual percentage</li>
    </ol>
    <p>This calculator performs this computation automatically.</p>

    <h3>Real-World Example</h3>
    <p><strong>Loan Details:</strong></p>
    <ul>
      <li>Loan Amount: $300,000</li>
      <li>Interest Rate: 6.75%</li>
      <li>Loan Term: 30 years</li>
      <li>Total Lender Fees: $4,500</li>
    </ul>
    <p><strong>Results:</strong></p>
    <ul>
      <li>Monthly Payment (P&I): $1,946</li>
      <li>APR: 6.95%</li>
      <li>Difference: 0.20%</li>
    </ul>
    <p>The 0.20% difference represents the cost of the $4,500 in lender fees spread over 30 years.</p>

    <h3>How to Get the Lowest APR</h3>
    <ul>
      <li><strong>Shop multiple lenders:</strong> Get at least 3-5 loan estimates</li>
      <li><strong>Negotiate fees:</strong> Many lender fees are negotiable</li>
      <li><strong>Compare Loan Estimates:</strong> Use the standardized form required by law</li>
      <li><strong>Consider no-point loans:</strong> Sometimes paying no points yields best APR</li>
      <li><strong>Improve credit score:</strong> Higher scores qualify for better rates and terms</li>
      <li><strong>Larger down payment:</strong> More equity can reduce rates and fees</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate APR and compare to interest rate, enter:</p>
    <ol>
      <li><strong>Loan Amount:</strong> Principal borrowed</li>
      <li><strong>Interest Rate:</strong> The note rate on your loan</li>
      <li><strong>Loan Term:</strong> Length in years (15, 20, 30, etc.)</li>
      <li><strong>Total Lender Fees:</strong> Sum of origination, discount points, processing, underwriting, etc.</li>
    </ol>
    <p>The calculator will show your monthly payment, calculated APR, and the percentage point difference between APR and interest rate.</p>

    <h3>Understanding Your Loan Estimate</h3>
    <p>The Loan Estimate form (page 1) shows:</p>
    <ul>
      <li><strong>Interest Rate:</strong> Listed in the "Loan Terms" section</li>
      <li><strong>APR:</strong> Displayed prominently in the same section</li>
      <li><strong>Monthly Payment:</strong> Principal, interest, and escrow breakdown</li>
      <li><strong>Closing Costs:</strong> Detailed on page 2</li>
    </ul>
    <p>Compare these across multiple lenders within the same 3-day window for accuracy.</p>

    <h3>FAQs</h3>
    <h4>Is a lower APR always better?</h4>
    <p>Generally yes, but consider your timeline. If you're selling or refinancing soon, a loan with higher APR but lower upfront costs might be better.</p>

    <h4>How much higher should APR be than interest rate?</h4>
    <p>Typically 0.125% to 0.5% higher. A difference larger than 0.5% suggests high fees and warrants investigation.</p>

    <h4>Does APR include property taxes and insurance?</h4>
    <p>No, APR only includes lender-related costs, not escrow items like property taxes, homeowners insurance, or HOA fees.</p>

    <h4>Can APR change after I lock my rate?</h4>
    <p>The interest rate is locked, but if lender fees change, the APR can change too. Review your Closing Disclosure carefully.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.75,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'lenderFees',
        label: 'Total Lender Fees ($)',
        type: 'number',
        defaultValue: 4500,
      },
    ],
    results: [
      { label: 'Monthly Payment (P&I)', isCurrency: true },
      { label: 'Interest Rate', isCurrency: false },
      { label: 'Calculated APR', isCurrency: false },
      { label: 'APR - Rate Difference', isCurrency: false },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'True Cost (Interest + Fees)', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm, lenderFees } = values;
      
      if (loanAmount <= 0 || loanTerm <= 0) {
        return [
          { label: 'Monthly Payment (P&I)', value: '0.00', isCurrency: true },
          { label: 'Interest Rate', value: '0.000%', isCurrency: false },
          { label: 'Calculated APR', value: '0.000%', isCurrency: false },
          { label: 'APR - Rate Difference', value: '0.000%', isCurrency: false },
          { label: 'Total Interest Paid', value: '0.00', isCurrency: true },
          { label: 'True Cost (Interest + Fees)', value: '0.00', isCurrency: true },
        ];
      }
      
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
      const trueCost = totalInterest + lenderFees;
      
      const effectiveLoanAmount = Math.max(loanAmount - lenderFees, 1);
      
      let aprGuess = interestRate / 100;
      for (let i = 0; i < 20; i++) {
        const monthlyApr = aprGuess / 12;
        const calculatedPayment = effectiveLoanAmount * (monthlyApr * Math.pow(1 + monthlyApr, numberOfPayments)) / (Math.pow(1 + monthlyApr, numberOfPayments) - 1);
        const diff = calculatedPayment - monthlyPayment;
        if (Math.abs(diff) < 0.01) break;
        aprGuess += diff > 0 ? -0.0001 : 0.0001;
      }
      
      const apr = aprGuess * 100;
      const difference = apr - interestRate;

      return [
        { label: 'Monthly Payment (P&I)', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Interest Rate', value: interestRate.toFixed(3) + '%', isCurrency: false },
        { label: 'Calculated APR', value: apr.toFixed(3) + '%', isCurrency: false },
        { label: 'APR - Rate Difference', value: difference.toFixed(3) + '%', isCurrency: false },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'True Cost (Interest + Fees)', value: trueCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
