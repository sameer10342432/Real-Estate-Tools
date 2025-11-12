import { CalculatorContent } from '@/types';

export const WRAPAROUND_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wraparound Mortgage Calculator',
  description: 'Calculate seller financing profits when wrapping a new loan around an existing mortgage',
  slug: 'wraparound-mortgage-calculator',
  icon: '🔄',
  category: 'Basic Calculators',
  article: {
    title: 'Understanding Wraparound Mortgages',
    content: `
    <h2>What is a Wraparound Mortgage?</h2>
    <p>A wraparound mortgage (also called "wrap" or "all-inclusive mortgage") is a creative financing technique where the buyer's new loan "wraps around" the seller's existing mortgage. The seller continues paying their original loan while collecting higher-rate payments from the buyer.</p>

    <h3>How Wraparound Mortgages Work</h3>
    <p><strong>Traditional Sale:</strong></p>
    <ul>
      <li>Seller pays off existing mortgage at closing</li>
      <li>Buyer gets new loan from bank</li>
      <li>Seller receives net proceeds</li>
    </ul>

    <p><strong>Wraparound Sale:</strong></p>
    <ul>
      <li>Seller keeps existing mortgage (doesn't pay it off)</li>
      <li>Buyer makes payments to seller at higher rate</li>
      <li>Seller pockets difference and continues paying original loan</li>
      <li>Seller earns interest rate spread profit</li>
    </ul>

    <h3>Wraparound Formula Components</h3>
    <p><strong>Wraparound Amount Calculation:</strong></p>
    <pre>
Wrap Amount = Sale Price - Down Payment
    OR
Wrap Amount = Existing Mortgage Balance + Seller Equity
    </pre>

    <p><strong>Seller's Monthly Profit:</strong></p>
    <pre>
Seller's Net = Buyer's Payment - Seller's Original Payment
    </pre>

    <h3>Real-World Example</h3>
    <p><strong>Property Details:</strong></p>
    <ul>
      <li><strong>Sale Price:</strong> $300,000</li>
      <li><strong>Buyer's Down Payment:</strong> $30,000</li>
      <li><strong>Seller's Existing Mortgage:</strong> $75,000 @ 5%</li>
      <li><strong>Seller's Monthly Payment:</strong> $402/month</li>
      <li><strong>Wraparound Rate:</strong> 7%</li>
      <li><strong>Term:</strong> 30 years</li>
    </ul>

    <p><strong>Calculations:</strong></p>
    <pre>
Wraparound Amount: $300,000 - $30,000 = $270,000

Buyer's Payment @ 7%: $1,796/month

Seller's Net Cash Flow:
  Buyer pays: $1,796
  Seller pays bank: -$402
  Seller keeps: $1,394/month

Seller's Total Return:
  Down payment: $30,000
  Monthly profit: $1,394 × 360 months = $501,840
  Total: $531,840 over 30 years
    </pre>

    <h3>Benefits to Seller</h3>
    <ul>
      <li><strong>Higher Returns:</strong> Earn 2-3% spread on the wrapped amount</li>
      <li><strong>Leverage Advantage:</strong> High yield on actual equity invested</li>
      <li><strong>Monthly Income:</strong> Reliable passive income stream</li>
      <li><strong>Tax Deferral:</strong> Installment sale treatment spreads capital gains</li>
      <li><strong>Faster Sale:</strong> Attract buyers who can't qualify for traditional loans</li>
      <li><strong>Higher Price:</strong> Can command premium for financing flexibility</li>
    </ul>

    <h3>Benefits to Buyer</h3>
    <ul>
      <li><strong>Easier Qualification:</strong> Seller sets credit standards, not bank</li>
      <li><strong>Faster Closing:</strong> No bank underwriting delays</li>
      <li><strong>Lower Closing Costs:</strong> No origination fees, appraisal less critical</li>
      <li><strong>Flexible Terms:</strong> Negotiate rate, down payment, and terms</li>
      <li><strong>Build Credit:</strong> Opportunity to improve credit while in home</li>
    </ul>

    <h3>Risks and Legal Considerations</h3>
    
    <h4>For Sellers:</h4>
    <ul>
      <li><strong>Due-on-Sale Clause:</strong> Original lender may call loan due if they discover the sale</li>
      <li><strong>Buyer Default Risk:</strong> Seller still liable for original mortgage if buyer stops paying</li>
      <li><strong>Liability Exposure:</strong> Remain responsible until original loan paid off</li>
      <li><strong>Collection Burden:</strong> Must handle defaults and possible foreclosure</li>
      <li><strong>State Regulations:</strong> Some states (like Texas) have strict requirements</li>
    </ul>

    <h4>For Buyers:</h4>
    <ul>
      <li><strong>Lien Priority:</strong> Wraparound is junior/secondary lien position</li>
      <li><strong>Seller Default Risk:</strong> If seller doesn't pay original loan, buyer could lose property</li>
      <li><strong>Due-on-Sale Risk:</strong> Original lender could accelerate loan</li>
      <li><strong>Title Issues:</strong> More complex than traditional financing</li>
    </ul>

    <h3>Legal Requirements (Texas Example)</h3>
    <p>Texas Finance Code Chapter 159 requires:</p>
    <ul>
      <li>Specific disclosure statements to buyer</li>
      <li>Insurance and tax escrow accounts</li>
      <li>Annual accounting to buyer</li>
      <li>Deed of trust securing the wrap</li>
      <li>Potential penalties for non-compliance</li>
    </ul>
    <p>Always consult real estate attorney in your state!</p>

    <h3>Calculating Seller's Yield (ROI)</h3>
    <p>The seller's true return is higher than the interest spread alone due to leverage:</p>
    <p><strong>Example:</strong></p>
    <pre>
Seller's Net Equity at Risk:
  Wrap Amount: $270,000
  Minus Existing Balance: -$75,000
  Net Equity: $195,000

Monthly Net Cash Flow: $1,394

Actual Yield (IRR): ~8.5-10%
(Higher than 2% spread due to leverage effect)
    </pre>

    <h3>Payment Structure Options</h3>
    <ul>
      <li><strong>Fully Amortizing:</strong> Equal payments over full term (30 years)</li>
      <li><strong>Balloon Payment:</strong> 5-10 year balloon forces refinance/sale</li>
      <li><strong>Interest-Only:</strong> Lower payments, large balloon at end</li>
      <li><strong>Graduated Payments:</strong> Start low, increase over time</li>
    </ul>

    <h3>Wraparound vs. Traditional Seller Financing</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Feature</th>
        <th>Wraparound</th>
        <th>Traditional Seller Financing</th>
      </tr>
      <tr>
        <td>Existing Mortgage</td>
        <td>Stays in place</td>
        <td>Paid off at closing</td>
      </tr>
      <tr>
        <td>Seller's Equity Needed</td>
        <td>Less (leveraged)</td>
        <td>More (full equity)</td>
      </tr>
      <tr>
        <td>Interest Spread Profit</td>
        <td>Yes (on full wrap amount)</td>
        <td>Yes (on seller financing only)</td>
      </tr>
      <tr>
        <td>Due-on-Sale Risk</td>
        <td>Higher</td>
        <td>Lower (mortgage paid off)</td>
      </tr>
      <tr>
        <td>Seller Yield</td>
        <td>Higher (leverage)</td>
        <td>Lower (no leverage)</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>To analyze a wraparound mortgage deal, enter:</p>
    <ol>
      <li><strong>Home Sale Price:</strong> Agreed purchase price</li>
      <li><strong>Down Payment:</strong> Buyer's cash down payment</li>
      <li><strong>Existing Loan Balance:</strong> Seller's remaining mortgage balance</li>
      <li><strong>Existing Interest Rate:</strong> Rate on seller's current mortgage</li>
      <li><strong>Wraparound Rate:</strong> Rate buyer will pay (typically 2-3% higher)</li>
      <li><strong>Loan Term:</strong> Number of years (15, 20, 30, etc.)</li>
    </ol>

    <h3>Best Practices</h3>
    <ul>
      <li><strong>Legal Review:</strong> Have real estate attorney structure the deal</li>
      <li><strong>Title Insurance:</strong> Ensure buyer gets proper title insurance</li>
      <li><strong>Escrow Account:</strong> Use third-party to collect payments and pay original loan</li>
      <li><strong>Insurance & Taxes:</strong> Maintain proper insurance and tax payments</li>
      <li><strong>Record Documents:</strong> Properly record deed of trust/mortgage</li>
      <li><strong>Default Plan:</strong> Have clear procedures for handling defaults</li>
    </ul>

    <h3>FAQs</h3>
    <h4>Is a wraparound mortgage legal?</h4>
    <p>Yes, but regulations vary by state. Texas has strict disclosure requirements. Some states restrict or prohibit wraps on certain property types. Always consult a local real estate attorney.</p>

    <h4>What happens if the original lender discovers the wraparound?</h4>
    <p>They could invoke the due-on-sale clause and demand immediate full payoff. In practice, if payments continue on time, many lenders don't enforce this. However, it's a real risk to consider.</p>

    <h4>Can you do a wraparound on a property with a VA or FHA loan?</h4>
    <p>Yes, and VA/FHA loans are often assumable, which actually makes them safer than conventional loans for wraparounds. The buyer could formally assume the loan instead.</p>

    <h4>What rate should I charge on a wraparound?</h4>
    <p>Typically 2-3% above your existing mortgage rate. Check current market rates—buyers should save vs. traditional financing, but you should profit from the spread.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Home Sale Price ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'existingBalance',
        label: 'Existing Loan Balance ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'existingRate',
        label: 'Existing Interest Rate (%)',
        type: 'number',
        defaultValue: 5.0,
      },
      {
        name: 'wrapRate',
        label: 'Wraparound Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Wraparound Amount', isCurrency: true },
      { label: 'Buyer\'s Monthly Payment', isCurrency: true },
      { label: 'Seller\'s Original Payment', isCurrency: true },
      { label: 'Seller\'s Monthly Profit', isCurrency: true },
      { label: 'Interest Rate Spread', isCurrency: false },
      { label: 'Total Seller Return (30 yrs)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, downPayment, existingBalance, existingRate, wrapRate, loanTerm } = values;
      
      const wrapAmount = salePrice - downPayment;
      
      if (wrapAmount <= 0 || existingBalance <= 0 || loanTerm <= 0) {
        return [
          { label: 'Wraparound Amount', value: Math.max(wrapAmount, 0).toFixed(2), isCurrency: true },
          { label: 'Buyer\'s Monthly Payment', value: '0.00', isCurrency: true },
          { label: 'Seller\'s Original Payment', value: '0.00', isCurrency: true },
          { label: 'Seller\'s Monthly Profit', value: '0.00', isCurrency: true },
          { label: 'Interest Rate Spread', value: (wrapRate - existingRate).toFixed(2) + '%', isCurrency: false },
          { label: 'Total Seller Return (30 yrs)', value: downPayment.toFixed(2), isCurrency: true },
        ];
      }
      
      const monthlyRateWrap = wrapRate / 100 / 12;
      const monthlyRateExisting = existingRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const buyerPayment = wrapAmount * (monthlyRateWrap * Math.pow(1 + monthlyRateWrap, numberOfPayments)) / (Math.pow(1 + monthlyRateWrap, numberOfPayments) - 1);
      const sellerPayment = existingBalance * (monthlyRateExisting * Math.pow(1 + monthlyRateExisting, numberOfPayments)) / (Math.pow(1 + monthlyRateExisting, numberOfPayments) - 1);
      
      const monthlyProfit = buyerPayment - sellerPayment;
      const rateSpread = wrapRate - existingRate;
      const totalReturn = downPayment + (monthlyProfit * numberOfPayments);

      return [
        { label: 'Wraparound Amount', value: wrapAmount.toFixed(2), isCurrency: true },
        { label: 'Buyer\'s Monthly Payment', value: buyerPayment.toFixed(2), isCurrency: true },
        { label: 'Seller\'s Original Payment', value: sellerPayment.toFixed(2), isCurrency: true },
        { label: 'Seller\'s Monthly Profit', value: monthlyProfit.toFixed(2), isCurrency: true },
        { label: 'Interest Rate Spread', value: rateSpread.toFixed(2) + '%', isCurrency: false },
        { label: 'Total Seller Return (30 yrs)', value: totalReturn.toFixed(2), isCurrency: true },
      ];
    },
  },
};
