import { CalculatorContent } from '@/types';

export const COMMERCIAL_LEASE_VS_BUY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commercial Lease vs. Buy Calculator',
  description: 'Compare costs and ROI of leasing commercial space versus purchasing your own property',
  slug: 'commercial-lease-vs-buy-calculator',
  icon: '⚖️',
  category: 'Investment Analysis',
  article: {
    title: 'Commercial Lease vs. Buy Decision Analysis',
    content: `
    <h2>Lease or Buy Commercial Real Estate?</h2>
    <p>One of the biggest financial decisions business owners face is whether to lease or purchase commercial property. The right choice depends on your capital, growth plans, tax situation, and market conditions.</p>

    <h3>Key Factors in the Decision</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Factor</th>
        <th>Favor Leasing</th>
        <th>Favor Buying</th>
      </tr>
      <tr>
        <td><strong>Capital</strong></td>
        <td>Limited cash, need it for operations</td>
        <td>Strong cash position, low-cost financing</td>
      </tr>
      <tr>
        <td><strong>Growth</strong></td>
        <td>Rapid growth, uncertain space needs</td>
        <td>Stable business, predictable space requirements</td>
      </tr>
      <tr>
        <td><strong>Timeline</strong></td>
        <td>Short-term presence (< 5 years)</td>
        <td>Long-term commitment (7+ years)</td>
      </tr>
      <tr>
        <td><strong>Market</strong></td>
        <td>Rising property values, high prices</td>
        <td>Favorable market, good acquisition opportunity</td>
      </tr>
      <tr>
        <td><strong>Flexibility</strong></td>
        <td>Need to relocate easily</td>
        <td>Committed to location</td>
      </tr>
    </table>

    <h3>5-Year Cost Comparison</h3>
    <p>Compare total costs over a 5-year period:</p>

    <h4>Leasing Costs:</h4>
    <ul>
      <li>Base rent (increasing 2-3% annually)</li>
      <li>NNN expenses (taxes, insurance, CAM)</li>
      <li>Security deposit (refundable)</li>
      <li>Tenant improvements (TI allowance may offset)</li>
      <li>No building equity or appreciation</li>
    </ul>

    <h4>Buying Costs:</h4>
    <ul>
      <li>Down payment (20-30% typically)</li>
      <li>Mortgage payments (principal + interest)</li>
      <li>Property taxes</li>
      <li>Building insurance</li>
      <li>Maintenance and repairs</li>
      <li>Closing costs (2-4% of purchase)</li>
      <li>Plus: Building equity and potential appreciation</li>
    </ul>

    <h3>Example Comparison: 5,000 Sq Ft Office</h3>
    <p><strong>Lease Option:</strong></p>
    <pre>
Annual rent: $30/sq ft × 5,000 = $150,000
NNN expenses: $8/sq ft × 5,000 = $40,000
Total year 1: $190,000

5-year cost (3% escalations):
  Year 1: $190,000
  Year 2: $195,700
  Year 3: $201,571
  Year 4: $207,618
  Year 5: $213,847
  Total: $1,008,736
  Minus refunded deposit: -$50,000
  Net 5-year cost: $958,736
    </pre>

    <p><strong>Purchase Option:</strong></p>
    <pre>
Purchase price: $1,500,000
Down payment (25%): $375,000
Loan amount: $1,125,000 @ 7% for 25 years
Monthly payment: $7,950 ($95,400/year)

5-year costs:
  Mortgage payments: $477,000
  Property taxes ($8/sq ft): $200,000
  Insurance ($2/sq ft): $50,000
  Maintenance ($1/sq ft): $25,000
  Closing costs (3%): $45,000
  Total cash out: $797,000

5-year equity built:
  Principal paid down: ~$85,000
  Appreciation (3%/year): ~$239,000
  Total equity: $699,000 (down payment + equity)

Net position: $797,000 out - $699,000 equity = $98,000 net cost
    </pre>

    <p><strong>Result:</strong> Purchasing saves ~$860,000 over 5 years in this scenario!</p>

    <h3>Tax Benefits Comparison</h3>

    <h4>Leasing Tax Benefits:</h4>
    <ul>
      <li><strong>Rent Expense:</strong> 100% deductible as ordinary business expense</li>
      <li><strong>No Depreciation:</strong> Can't depreciate property you don't own</li>
      <li><strong>Simplicity:</strong> Straightforward deduction, no complex calculations</li>
    </ul>

    <h4>Owning Tax Benefits:</h4>
    <ul>
      <li><strong>Depreciation:</strong> Commercial property depreciates over 39 years (~2.56%/year)</li>
      <li><strong>Mortgage Interest:</strong> Deductible as business expense</li>
      <li><strong>Property Taxes:</strong> Fully deductible</li>
      <li><strong>Section 179:</strong> Accelerated depreciation on certain improvements</li>
      <li><strong>Capital Gains:</strong> Profit on sale may qualify for lower rates</li>
      <li><strong>1031 Exchange:</strong> Defer taxes by exchanging for another property</li>
    </ul>

    <h3>Break-Even Timeline</h3>
    <p>Calculate how long before purchasing becomes cheaper than leasing:</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Break-Even Years = Total Purchase Costs ÷ Annual Lease Savings</strong></p>
    <p>Or use cumulative cash flow analysis year-by-year until ownership costs are lower.</p>

    <h3>Cash Flow Considerations</h3>

    <h4>Leasing Cash Flow:</h4>
    <ul>
      <li><strong>Lower upfront cost:</strong> Typically 1-3 months' rent deposit</li>
      <li><strong>Predictable monthly:</strong> Fixed lease payments (with escalations)</li>
      <li><strong>No surprise repairs:</strong> Landlord handles major repairs</li>
      <li><strong>No sale proceeds:</strong> No equity or appreciation at end</li>
    </ul>

    <h4>Ownership Cash Flow:</h4>
    <ul>
      <li><strong>High upfront cost:</strong> 20-30% down payment + closing costs</li>
      <li><strong>Variable expenses:</strong> Repairs, insurance, taxes can fluctuate</li>
      <li><strong>Equity building:</strong> Mortgage principal pays down monthly</li>
      <li><strong>Sale proceeds:</strong> Potential large payout when sold</li>
    </ul>

    <h3>Advantages of Leasing</h3>
    <ul>
      <li><strong>Capital Preservation:</strong> Keep cash for business operations and growth</li>
      <li><strong>Flexibility:</strong> Easier to relocate, downsize, or expand</li>
      <li><strong>No Maintenance Burden:</strong> Landlord handles major repairs and systems</li>
      <li><strong>No Market Risk:</strong> Not affected by property value declines</li>
      <li><strong>Better Locations:</strong> Access prime locations you couldn't afford to buy</li>
      <li><strong>Simpler Accounting:</strong> Rent is a straightforward expense</li>
    </ul>

    <h3>Advantages of Owning</h3>
    <ul>
      <li><strong>Equity Building:</strong> Mortgage payments build wealth</li>
      <li><strong>Appreciation:</strong> Property value may increase 2-4% annually</li>
      <li><strong>Control:</strong> Modify space without landlord approval</li>
      <li><strong>Fixed Costs:</strong> Mortgage payment stays constant (if fixed-rate)</li>
      <li><strong>Rental Income:</strong> Lease excess space to other tenants</li>
      <li><strong>Forced Savings:</strong> Principal paydown is automatic wealth building</li>
      <li><strong>Exit Strategy:</strong> Sell property for retirement funding</li>
    </ul>

    <h3>Hidden Costs of Ownership</h3>
    <ul>
      <li><strong>Vacancy Risk:</strong> If you move out, property may sit empty</li>
      <li><strong>Maintenance:</strong> HVAC, roof, parking lot can be $10,000-$50,000+</li>
      <li><strong>Property Management:</strong> 4-10% of rent if leasing to others</li>
      <li><strong>Insurance Increases:</strong> Can spike 20-30% after claims</li>
      <li><strong>Market Decline:</strong> Property could lose value</li>
      <li><strong>Opportunity Cost:</strong> Down payment could earn returns elsewhere</li>
    </ul>

    <h3>When to Lease</h3>
    <p>✅ <strong>Leasing makes sense when:</strong></p>
    <ul>
      <li>You need capital for business operations or growth</li>
      <li>Your space needs are uncertain or changing</li>
      <li>You're in a short-term location (< 5 years)</li>
      <li>The property market is overheated</li>
      <li>You don't want property management responsibilities</li>
      <li>Your business has seasonal cash flow</li>
      <li>You're a startup or in early growth phase</li>
    </ul>

    <h3>When to Buy</h3>
    <p>✅ <strong>Buying makes sense when:</strong></p>
    <ul>
      <li>You'll be in same location for 7+ years</li>
      <li>You have 25-30% down payment available</li>
      <li>Your business is stable with predictable cash flow</li>
      <li>Interest rates are favorable</li>
      <li>Property prices are reasonable or depressed</li>
      <li>You can handle 10-20% of rent in annual maintenance</li>
      <li>You want to build wealth through real estate</li>
      <li>Rental rates are high relative to purchase prices</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To compare leasing vs. buying, enter:</p>
    <ol>
      <li><strong>Property Size:</strong> Square footage needed</li>
      <li><strong>Lease Rate:</strong> Annual rent per square foot</li>
      <li><strong>Purchase Price:</strong> Cost to buy comparable property</li>
      <li><strong>Down Payment:</strong> Percentage you'd put down (20-30%)</li>
      <li><strong>Interest Rate:</strong> Commercial mortgage rate</li>
      <li><strong>Loan Term:</strong> Years (typically 15-25)</li>
      <li><strong>Appreciation Rate:</strong> Expected annual property appreciation (2-4%)</li>
    </ol>

    <h3>FAQs</h3>
    <h4>What if I outgrow the property I buy?</h4>
    <p>You can lease excess space to other tenants (creating income) or sell the property using a 1031 exchange to defer taxes and upgrade to a larger building.</p>

    <h4>Can I use my 401(k) to buy commercial property?</h4>
    <p>Yes, through a self-directed 401(k) or by forming a real estate IRA. However, there are strict rules and potential penalties. Consult a tax advisor first.</p>

    <h4>What's a good rent-to-price ratio for the buy decision?</h4>
    <p>If annual rent exceeds 7-8% of purchase price, buying may be favorable. If it's below 5%, leasing might be better. This is a rough rule of thumb—run full analysis!</p>

    <h4>Should I form an LLC to buy commercial property?</h4>
    <p>Often yes. An LLC provides liability protection, separating business and property assets. However, financing may be harder. Consult legal and tax professionals.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Property Size (Sq Ft)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'leaseRate',
        label: 'Annual Lease Rate ($/Sq Ft)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'interestRate',
        label: 'Mortgage Interest Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'appreciationRate',
        label: 'Annual Appreciation Rate (%)',
        type: 'number',
        defaultValue: 3.0,
      },
    ],
    results: [
      { label: '5-Year Lease Cost', isCurrency: true },
      { label: '5-Year Purchase Cost', isCurrency: true },
      { label: 'Equity Built (5 Years)', isCurrency: true },
      { label: 'Property Value (5 Years)', isCurrency: true },
      { label: 'Net Cost Difference', isCurrency: true },
      { label: 'Better Option', isCurrency: false },
    ],
    calculate: (values) => {
      const { squareFootage, leaseRate, purchasePrice, downPayment, interestRate, loanTerm, appreciationRate } = values;
      
      if (squareFootage <= 0 || purchasePrice <= 0 || loanTerm <= 0) {
        return [
          { label: '5-Year Lease Cost', value: '0.00', isCurrency: true },
          { label: '5-Year Purchase Cost', value: '0.00', isCurrency: true },
          { label: 'Equity Built (5 Years)', value: '0.00', isCurrency: true },
          { label: 'Property Value (5 Years)', value: '0.00', isCurrency: true },
          { label: 'Net Cost Difference', value: '0.00', isCurrency: true },
          { label: 'Better Option', value: 'Invalid inputs', isCurrency: false },
        ];
      }
      
      const annualLease = squareFootage * leaseRate;
      const fiveYearLease = annualLease * 5 * 1.15;
      
      const downPaymentAmount = purchasePrice * (downPayment / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount > 0 ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1) : 0;
      const fiveYearMortgage = monthlyPayment * 60;
      
      const propertyTaxes = purchasePrice * 0.012 * 5;
      const insurance = purchasePrice * 0.005 * 5;
      const maintenance = squareFootage * 1 * 5;
      const closingCosts = purchasePrice * 0.03;
      
      const fiveYearPurchase = downPaymentAmount + fiveYearMortgage + propertyTaxes + insurance + maintenance + closingCosts;
      
      const principalPaid = (monthlyPayment * 60) - (loanAmount - (loanAmount * Math.pow(1 + monthlyRate, -numberOfPayments + 60)));
      const futureValue = purchasePrice * Math.pow(1 + appreciationRate / 100, 5);
      const appreciation = futureValue - purchasePrice;
      const totalEquity = downPaymentAmount + principalPaid + appreciation;
      
      const netCostDifference = fiveYearLease - (fiveYearPurchase - totalEquity);
      const betterOption = netCostDifference > 0 ? 'Buying is better (saves $' + Math.abs(netCostDifference).toFixed(0) + ')' : 'Leasing is better (saves $' + Math.abs(netCostDifference).toFixed(0) + ')';

      return [
        { label: '5-Year Lease Cost', value: fiveYearLease.toFixed(2), isCurrency: true },
        { label: '5-Year Purchase Cost', value: fiveYearPurchase.toFixed(2), isCurrency: true },
        { label: 'Equity Built (5 Years)', value: totalEquity.toFixed(2), isCurrency: true },
        { label: 'Property Value (5 Years)', value: futureValue.toFixed(2), isCurrency: true },
        { label: 'Net Cost Difference', value: Math.abs(netCostDifference).toFixed(2), isCurrency: true },
        { label: 'Better Option', value: betterOption, isCurrency: false },
      ];
    },
  },
};
