import { CalculatorContent } from '@/types';

export const COMMERCIAL_PROPERTY_PROFORMA_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Commercial Property Pro-Forma Generator',
  description: 'Generate comprehensive financial projections for commercial real estate investments including NOI, cash flow, and returns',
  slug: 'commercial-property-proforma-generator',
  icon: '📈',
  category: 'Investment Analysis',
  article: {
    title: 'Commercial Real Estate Pro Forma Analysis',
    content: `
    <h2>What is a Commercial Property Pro Forma?</h2>
    <p>A pro forma is a financial projection that forecasts income, expenses, and cash flows for a commercial property investment over a defined holding period. It's the foundational document for evaluating deals and determining property value.</p>

    <h3>Core Pro Forma Structure</h3>
    <p>All commercial property pro formas follow this formula sequence:</p>
    <pre>
1. Potential Gross Income (PGI)
   - Maximum revenue if 100% leased

2. − Vacancy & Credit Loss (5-10%)
   - Expected downtime and uncollectible rent

3. + Other Income
   - Parking, storage, laundry, pet fees

4. = Effective Gross Income (EGI)

5. − Operating Expenses
   - Taxes, insurance, utilities, management, maintenance

6. = Net Operating Income (NOI)
   - Most important metric for valuation

7. − Debt Service (mortgage payments)

8. = Before-Tax Cash Flow (BTCF)
   - Annual cash profit to investor
    </pre>

    <h3>Key Valuation Formulas</h3>

    <h4>Property Value (Income Approach):</h4>
    <p><strong>Property Value = NOI ÷ Cap Rate</strong></p>
    <p><em>Example: $100,000 NOI ÷ 5% cap rate = $2,000,000 value</em></p>

    <h4>Cash-on-Cash Return:</h4>
    <p><strong>CoC Return = Annual Before-Tax Cash Flow ÷ Total Equity Invested</strong></p>
    <p><em>Example: $25,000 cash flow ÷ $500,000 equity = 5% CoC</em></p>

    <h4>Debt Coverage Ratio (DCR):</h4>
    <p><strong>DCR = NOI ÷ Annual Debt Service</strong></p>
    <p><em>Lenders typically require 1.25x minimum</em></p>
    <p><em>Example: $100,000 NOI ÷ $75,000 debt service = 1.33 DCR</em></p>

    <h4>Cap Rate:</h4>
    <p><strong>Cap Rate = NOI ÷ Property Value</strong></p>
    <p><em>Example: $100,000 NOI ÷ $2,000,000 value = 5.0% cap</em></p>

    <h3>Complete Pro Forma Example</h3>
    <p><strong>20,000 sq ft office building:</strong></p>
    <pre>
INCOME:
  Potential Gross Income:
    20,000 sq ft × $25/sq ft = $500,000
  
  Vacancy & Credit Loss (7%):
    $500,000 × 0.07 = −$35,000
  
  Other Income (parking):
    50 spaces × $50/month × 12 = +$30,000
  
  Effective Gross Income: $495,000

OPERATING EXPENSES:
  Property Taxes: $60,000 (3% of value)
  Insurance: $20,000 (1% of value)
  Utilities: $35,000
  Property Management (4%): $19,800
  Repairs & Maintenance: $30,000
  Landscaping: $8,000
  Administrative: $12,000
  Reserves: $10,000
  
  Total Operating Expenses: $194,800

NET OPERATING INCOME: $300,200

FINANCING:
  Purchase Price: $2,000,000
  Down Payment (25%): $500,000
  Loan Amount: $1,500,000
  Interest Rate: 6.5%
  Term: 25 years
  Annual Debt Service: $122,592

BEFORE-TAX CASH FLOW: $177,608

RETURNS:
  Cap Rate: $300,200 ÷ $2,000,000 = 15.01%
  Cash-on-Cash: $177,608 ÷ $500,000 = 35.5%
  Debt Coverage: $300,200 ÷ $122,592 = 2.45
    </pre>

    <h3>Operating Expense Categories</h3>

    <h4>Fixed Expenses (consistent):</h4>
    <ul>
      <li><strong>Property Taxes:</strong> 1-3% of property value annually</li>
      <li><strong>Insurance:</strong> 0.5-2% of property value annually</li>
      <li><strong>Property Management:</strong> 3-6% of EGI</li>
    </ul>

    <h4>Variable Expenses (usage-based):</h4>
    <ul>
      <li><strong>Utilities:</strong> Electric, gas, water, sewer (unless NNN)</li>
      <li><strong>Repairs & Maintenance:</strong> $1-3 per sq ft</li>
      <li><strong>Landscaping:</strong> $0.25-1 per sq ft</li>
      <li><strong>Janitorial:</strong> $0.50-2 per sq ft</li>
    </ul>

    <h4>Reserves:</h4>
    <ul>
      <li><strong>Capital Reserves:</strong> $0.25-0.50 per sq ft for major repairs</li>
      <li><strong>Tenant Improvements:</strong> $5-25 per sq ft for new leases</li>
      <li><strong>Leasing Commissions:</strong> 3-6% of lease value</li>
    </ul>

    <h3>Income Growth Assumptions</h3>
    <p>Project future income increases:</p>
    <ul>
      <li><strong>Rent Growth:</strong> 2-4% annually (market dependent)</li>
      <li><strong>Expense Growth:</strong> 3% annually (inflation)</li>
      <li><strong>Occupancy:</strong> Start conservative (85-90%), stabilize at 95%</li>
    </ul>

    <h3>5-Year Cash Flow Projection</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Year</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
      <tr>
        <td><strong>PGI</strong></td>
        <td>$500,000</td>
        <td>$515,000</td>
        <td>$530,450</td>
        <td>$546,364</td>
        <td>$562,755</td>
      </tr>
      <tr>
        <td><strong>Vacancy (7%)</strong></td>
        <td>($35,000)</td>
        <td>($36,050)</td>
        <td>($37,132)</td>
        <td>($38,245)</td>
        <td>($39,393)</td>
      </tr>
      <tr>
        <td><strong>EGI</strong></td>
        <td>$495,000</td>
        <td>$509,950</td>
        <td>$525,318</td>
        <td>$541,119</td>
        <td>$557,362</td>
      </tr>
      <tr>
        <td><strong>Op Ex</strong></td>
        <td>$194,800</td>
        <td>$200,644</td>
        <td>$206,663</td>
        <td>$212,863</td>
        <td>$219,249</td>
      </tr>
      <tr>
        <td><strong>NOI</strong></td>
        <td>$300,200</td>
        <td>$309,306</td>
        <td>$318,655</td>
        <td>$328,256</td>
        <td>$338,113</td>
      </tr>
      <tr>
        <td><strong>Debt Service</strong></td>
        <td>$122,592</td>
        <td>$122,592</td>
        <td>$122,592</td>
        <td>$122,592</td>
        <td>$122,592</td>
      </tr>
      <tr>
        <td><strong>BTCF</strong></td>
        <td>$177,608</td>
        <td>$186,714</td>
        <td>$196,063</td>
        <td>$205,664</td>
        <td>$215,521</td>
      </tr>
    </table>

    <h3>Exit/Reversion Analysis</h3>
    <p>Calculate sale proceeds at year 5:</p>
    <pre>
Year 5 NOI: $338,113
Exit Cap Rate: 5.5% (0.50% higher than entry)
Sale Price: $338,113 ÷ 0.055 = $6,147,509

Selling Costs:
  Broker commission (5%): $307,375
  Closing costs (1%): $61,475
  Total: $368,850

Net Sale Proceeds: $6,147,509 − $368,850 = $5,778,659

Loan Payoff (after 5 years): ~$1,407,000

Cash to Seller: $5,778,659 − $1,407,000 = $4,371,659

Return on Investment:
  Initial equity: $500,000
  Total cash flow (5 years): $981,570
  Sale proceeds: $4,371,659
  Total return: $5,353,229
  
  IRR: ~45% (annualized)
  Equity Multiple: 10.7x
    </pre>

    <h3>Common Pro Forma Mistakes</h3>
    <ul>
      <li><strong>Overly Optimistic Vacancy:</strong> Use 5-10%, not 0-2%</li>
      <li><strong>Understating Expenses:</strong> Get actual historical data from seller</li>
      <li><strong>Ignoring CapEx:</strong> Reserves for roof, HVAC, parking lot essential</li>
      <li><strong>No Rent Growth:</strong> Rents should increase 2-4% annually</li>
      <li><strong>Aggressive Exit Cap:</strong> Use 0.25-0.50% higher than entry cap</li>
      <li><strong>Forgetting Commissions:</strong> Leasing commissions and TIs cost 10-15% of rent</li>
    </ul>

    <h3>Expense Ratio Benchmarks</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Property Type</th>
        <th>Operating Expense Ratio</th>
        <th>$/Sq Ft/Year</th>
      </tr>
      <tr>
        <td>Office Building</td>
        <td>35-45% of EGI</td>
        <td>$8-14</td>
      </tr>
      <tr>
        <td>Retail Center</td>
        <td>30-40% of EGI</td>
        <td>$6-12</td>
      </tr>
      <tr>
        <td>Industrial</td>
        <td>25-35% of EGI</td>
        <td>$3-7</td>
      </tr>
      <tr>
        <td>Multifamily</td>
        <td>40-50% of EGI</td>
        <td>$4-8</td>
      </tr>
    </table>

    <h3>Underwriting Standards</h3>
    <p>Professional investors look for:</p>
    <ul>
      <li><strong>Cap Rate:</strong> 5-10% depending on market and property quality</li>
      <li><strong>Cash-on-Cash:</strong> Minimum 7-10%</li>
      <li><strong>IRR:</strong> Target 15-20%+ over 5-7 years</li>
      <li><strong>Debt Coverage:</strong> 1.25-1.35 minimum</li>
      <li><strong>Occupancy:</strong> Stabilized 90-95%</li>
      <li><strong>Expense Ratio:</strong> Within benchmarks for property type</li>
    </ul>

    <h3>Sensitivity Analysis</h3>
    <p>Test how changes affect returns:</p>
    <ul>
      <li><strong>Vacancy:</strong> What if vacancy is 10% vs. 5%?</li>
      <li><strong>Rent Growth:</strong> How sensitive to 1% vs. 3% growth?</li>
      <li><strong>Exit Cap:</strong> What if cap rates rise 1%?</li>
      <li><strong>Expenses:</strong> Impact of 10% expense increase?</li>
      <li><strong>Interest Rates:</strong> Effect of 1% higher mortgage rate?</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To generate a basic pro forma, enter:</p>
    <ol>
      <li><strong>Property Size:</strong> Total rentable square footage</li>
      <li><strong>Annual Rent:</strong> Per square foot per year</li>
      <li><strong>Vacancy Rate:</strong> Expected vacancy percentage (5-10%)</li>
      <li><strong>Operating Expenses:</strong> Per square foot per year (or % of income)</li>
      <li><strong>Purchase Price:</strong> Total acquisition cost</li>
      <li><strong>Down Payment:</strong> Percentage (20-30% typical)</li>
      <li><strong>Interest Rate:</strong> Commercial mortgage rate</li>
      <li><strong>Loan Term:</strong> Amortization period (15-30 years)</li>
    </ol>

    <h3>Beyond Basic Pro Forma</h3>
    <p>Advanced pro formas include:</p>
    <ul>
      <li><strong>Rent Roll Analysis:</strong> Tenant-by-tenant lease details</li>
      <li><strong>Lease Expiration Schedule:</strong> Rollover risk and renewal assumptions</li>
      <li><strong>Capital Improvements:</strong> Major repair and renovation budgets</li>
      <li><strong>Tax Analysis:</strong> Depreciation, interest deductions, capital gains</li>
      <li><strong>Partnership Waterfall:</strong> Preferred returns, profit splits</li>
      <li><strong>Multiple Scenarios:</strong> Base case, best case, worst case</li>
    </ul>

    <h3>FAQs</h3>
    <h4>What's a good NOI for commercial property?</h4>
    <p>It depends on property value. Focus on cap rate (NOI ÷ value) instead. Good cap rates vary by market: 4-6% for stable class A, 7-10%+ for value-add or secondary markets.</p>

    <h4>Should I include mortgage principal paydown in cash flow?</h4>
    <p>No, BTCF is just NOI minus debt service. Principal paydown builds equity but isn't "cash in hand" until you sell or refinance.</p>

    <h4>How do I account for future rent increases?</h4>
    <p>Project rent growth annually (2-4% typical). Conservative underwriting uses lower growth rates and assumes some turnover costs when leases renew.</p>

    <h4>What if my DCR is below 1.25?</h4>
    <p>You'll struggle to get financing. Improve DCR by: 1) larger down payment, 2) negotiate lower price, 3) increase rents, or 4) reduce expenses.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Property Size (Sq Ft)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'annualRent',
        label: 'Annual Rent ($/Sq Ft)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'operatingExpenses',
        label: 'Operating Expenses ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      { label: 'Potential Gross Income', isCurrency: true },
      { label: 'Effective Gross Income', isCurrency: true },
      { label: 'Total Operating Expenses', isCurrency: true },
      { label: 'Net Operating Income (NOI)', isCurrency: true },
      { label: 'Annual Debt Service', isCurrency: true },
      { label: 'Before-Tax Cash Flow', isCurrency: true },
      { label: 'Cap Rate', isCurrency: false },
      { label: 'Cash-on-Cash Return', isCurrency: false },
      { label: 'Debt Coverage Ratio', isCurrency: false },
    ],
    calculate: (values) => {
      const { squareFootage, annualRent, vacancyRate, operatingExpenses, purchasePrice, downPayment, interestRate, loanTerm } = values;
      
      if (squareFootage <= 0 || purchasePrice <= 0 || loanTerm <= 0) {
        return [
          { label: 'Potential Gross Income', value: '0.00', isCurrency: true },
          { label: 'Effective Gross Income', value: '0.00', isCurrency: true },
          { label: 'Total Operating Expenses', value: '0.00', isCurrency: true },
          { label: 'Net Operating Income (NOI)', value: '0.00', isCurrency: true },
          { label: 'Annual Debt Service', value: '0.00', isCurrency: true },
          { label: 'Before-Tax Cash Flow', value: '0.00', isCurrency: true },
          { label: 'Cap Rate', value: '0.00%', isCurrency: false },
          { label: 'Cash-on-Cash Return', value: '0.00%', isCurrency: false },
          { label: 'Debt Coverage Ratio', value: '0.00x', isCurrency: false },
        ];
      }
      
      const pgi = squareFootage * annualRent;
      const vacancyLoss = pgi * (vacancyRate / 100);
      const egi = pgi - vacancyLoss;
      
      const opex = squareFootage * operatingExpenses;
      const noi = egi - opex;
      
      const downPaymentAmount = purchasePrice * (downPayment / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount > 0 ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1) : 0;
      const annualDebtService = monthlyPayment * 12;
      
      const btcf = noi - annualDebtService;
      const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;
      const cocReturn = downPaymentAmount > 0 ? (btcf / downPaymentAmount) * 100 : 0;
      const dcr = annualDebtService > 0 ? noi / annualDebtService : 0;

      return [
        { label: 'Potential Gross Income', value: pgi.toFixed(2), isCurrency: true },
        { label: 'Effective Gross Income', value: egi.toFixed(2), isCurrency: true },
        { label: 'Total Operating Expenses', value: opex.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Before-Tax Cash Flow', value: btcf.toFixed(2), isCurrency: true },
        { label: 'Cap Rate', value: capRate.toFixed(2) + '%', isCurrency: false },
        { label: 'Cash-on-Cash Return', value: cocReturn.toFixed(2) + '%', isCurrency: false },
        { label: 'Debt Coverage Ratio', value: dcr.toFixed(2) + 'x', isCurrency: false },
      ];
    },
  },
};
