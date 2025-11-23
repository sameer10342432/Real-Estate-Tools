import { CalculatorContent } from '@/types';

export const EBITDA_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'EBITDA Calculator (Real Estate)',
  description: 'Calculate EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) for real estate investments. Analyze property operating performance and value.',
  slug: 'ebitda-calculator',
  icon: '📈',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding EBITDA in Real Estate Investment',
    content: `
    <h2>What is EBITDA in Real Estate?</h2>
    <p>EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) measures a property's operating performance by showing cash flow before financing and accounting adjustments. In real estate, EBITDA is closely related to NOI but includes additional operating metrics.</p>
    
    <h3>EBITDA vs. NOI</h3>
    <p>While similar, there are key differences:</p>
    <ul>
      <li><strong>NOI (Net Operating Income):</strong> Revenue - Operating Expenses</li>
      <li><strong>EBITDA:</strong> NOI + certain add-backs (management fees, etc.)</li>
      <li><strong>NOI:</strong> More common for property valuation</li>
      <li><strong>EBITDA:</strong> More common for corporate real estate entities</li>
    </ul>

    <h3>EBITDA Formula for Real Estate</h3>
    <p><strong>EBITDA = Total Revenue - Operating Expenses (excluding interest, taxes, depreciation, amortization)</strong></p>
    
    <p><strong>Or more specifically:</strong></p>
    <p>EBITDA = Gross Rental Income + Other Income - Operating Expenses</p>

    <h3>What's Included in Revenue</h3>
    <ul>
      <li><strong>Gross Rental Income:</strong> Base rent from all tenants</li>
      <li><strong>Percentage Rent:</strong> Overage rent from retail tenants</li>
      <li><strong>Parking Income:</strong> Paid parking revenue</li>
      <li><strong>Amenity Income:</strong> Gym, storage, laundry facilities</li>
      <li><strong>Late Fees:</strong> Tenant late payment charges</li>
      <li><strong>Antenna/Billboard:</strong> Third-party income</li>
      <li><strong>Vending/Other:</strong> Miscellaneous income</li>
    </ul>

    <h3>Operating Expenses (Deducted from Revenue)</h3>
    <ul>
      <li><strong>Property Management:</strong> Management company fees (3-5% of revenue)</li>
      <li><strong>Repairs & Maintenance:</strong> Ongoing property upkeep</li>
      <li><strong>Utilities:</strong> Common area electricity, water, gas</li>
      <li><strong>Insurance:</strong> Property and liability insurance</li>
      <li><strong>Property Taxes:</strong> Annual real estate taxes</li>
      <li><strong>Marketing & Leasing:</strong> Advertising, broker fees</li>
      <li><strong>Legal & Professional:</strong> Attorneys, accountants</li>
      <li><strong>Landscaping & Grounds:</strong> Exterior maintenance</li>
      <li><strong>Security:</strong> Security guards, systems</li>
    </ul>

    <h3>What's NOT Included (Excluded from EBITDA)</h3>
    <ul>
      <li><strong>Interest:</strong> Debt service payments</li>
      <li><strong>Income Taxes:</strong> Federal, state, local taxes</li>
      <li><strong>Depreciation:</strong> Non-cash accounting charge</li>
      <li><strong>Amortization:</strong> Loan amortization, intangible assets</li>
      <li><strong>Capital Expenditures:</strong> Major improvements (roof, HVAC)</li>
    </ul>

    <h3>Why EBITDA Matters</h3>
    <ul>
      <li><strong>Operating Performance:</strong> Pure measure of property performance</li>
      <li><strong>Comparison Tool:</strong> Compare properties regardless of financing</li>
      <li><strong>Valuation Metric:</strong> Used in portfolio valuations</li>
      <li><strong>Lending Decisions:</strong> Banks evaluate debt service coverage</li>
      <li><strong>Sale Pricing:</strong> Properties often priced as multiple of EBITDA</li>
    </ul>

    <h3>EBITDA Multiples in Real Estate</h3>
    <p>Properties are often valued using EBITDA multiples:</p>
    <ul>
      <li><strong>Multifamily:</strong> 10-15x EBITDA</li>
      <li><strong>Office (Class A):</strong> 12-16x EBITDA</li>
      <li><strong>Retail (Anchored):</strong> 11-14x EBITDA</li>
      <li><strong>Industrial:</strong> 13-17x EBITDA</li>
      <li><strong>Self-Storage:</strong> 14-18x EBITDA</li>
    </ul>
    <p>Note: Multiples vary by market, location, property quality, and economic conditions.</p>

    <h3>EBITDA Margin</h3>
    <p><strong>EBITDA Margin = (EBITDA ÷ Total Revenue) × 100</strong></p>
    <p>Typical margins by property type:</p>
    <ul>
      <li><strong>Multifamily:</strong> 50-65%</li>
      <li><strong>Office:</strong> 45-60%</li>
      <li><strong>Retail:</strong> 40-55%</li>
      <li><strong>Industrial:</strong> 60-75% (lower operating costs)</li>
      <li><strong>Self-Storage:</strong> 65-80% (minimal expenses)</li>
    </ul>

    <h3>Improving EBITDA</h3>
    <p><strong>Increase Revenue:</strong></p>
    <ul>
      <li>Raise rents to market rates</li>
      <li>Add amenity income streams</li>
      <li>Reduce vacancy through better marketing</li>
      <li>Implement rent escalations</li>
    </ul>

    <p><strong>Reduce Operating Expenses:</strong></p>
    <ul>
      <li>Negotiate better vendor contracts</li>
      <li>Energy efficiency improvements</li>
      <li>Self-manage vs. third-party management</li>
      <li>Bulk purchasing for materials</li>
    </ul>

    <h3>EBITDA in Different Real Estate Contexts</h3>
    <ul>
      <li><strong>REIT Analysis:</strong> Public REITs report EBITDA for portfolio performance</li>
      <li><strong>Property Sales:</strong> Marketing materials highlight EBITDA multiples</li>
      <li><strong>Fund Performance:</strong> Private equity funds track EBITDA growth</li>
      <li><strong>Refinancing:</strong> Lenders evaluate EBITDA for debt capacity</li>
    </ul>

    <h3>Limitations of EBITDA</h3>
    <ul>
      <li><strong>Ignores CapEx:</strong> Doesn't account for capital improvements needed</li>
      <li><strong>No Debt Service:</strong> Doesn't show if property can cover mortgage</li>
      <li><strong>Non-GAAP Metric:</strong> Not standardized accounting measure</li>
      <li><strong>Can Be Manipulated:</strong> Different definitions can inflate numbers</li>
      <li><strong>Ignores Cash Flow Timing:</strong> Accrual basis, not cash basis</li>
    </ul>

    <h3>Adjusted EBITDA</h3>
    <p>Often adjusted to normalize for:</p>
    <ul>
      <li>One-time expenses (legal settlements, major repairs)</li>
      <li>Non-recurring income (insurance proceeds)</li>
      <li>Owner-specific expenses (above-market management fees)</li>
      <li>Market rent adjustments (below-market leases)</li>
    </ul>

    <h3>EBITDA vs. Cash Flow</h3>
    <p>EBITDA ≠ Cash Flow because it doesn't include:</p>
    <ul>
      <li>Debt service (principal + interest)</li>
      <li>Capital expenditures (roof, HVAC, parking lot)</li>
      <li>Tenant improvement costs</li>
      <li>Leasing commissions</li>
      <li>Changes in working capital</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate EBITDA for property analysis:</p>
    <ul>
      <li><strong>Total Revenue:</strong> All income sources</li>
      <li><strong>Operating Expenses:</strong> Property management, maintenance, insurance, taxes</li>
      <li><strong>Property Value (Optional):</strong> To calculate EBITDA multiple</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'grossRentalIncome',
        label: 'Gross Rental Income (Annual) ($)',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'otherIncome',
        label: 'Other Income (Parking, Fees, etc.) ($)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'propertyManagement',
        label: 'Property Management Fees ($)',
        type: 'number',
        defaultValue: 40000,
      },
      {
        name: 'repairsMaintenance',
        label: 'Repairs & Maintenance ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'utilities',
        label: 'Utilities ($)',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'insurance',
        label: 'Insurance ($)',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'propertyTaxes',
        label: 'Property Taxes ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'otherExpenses',
        label: 'Other Operating Expenses ($)',
        type: 'number',
        defaultValue: 70000,
      },
      {
        name: 'propertyValue',
        label: 'Property Value (Optional) ($)',
        type: 'number',
        defaultValue: 8000000,
      },
    ],
    results: [
      { label: 'Total Revenue', isCurrency: true },
      { label: 'Total Operating Expenses', isCurrency: true },
      { label: 'EBITDA', isCurrency: true },
      { label: 'EBITDA Margin (%)', isCurrency: false },
      { label: 'EBITDA Per Month', isCurrency: true },
      { label: 'EBITDA Multiple (if property value provided)', isCurrency: false },
      { label: 'Implied Cap Rate (%)', isCurrency: false },
    ],
    calculate: (values) => {
      const { grossRentalIncome, otherIncome, propertyManagement, repairsMaintenance, utilities, insurance, propertyTaxes, otherExpenses, propertyValue } = values;
      
      // Calculate total revenue
      const totalRevenue = grossRentalIncome + otherIncome;
      
      // Calculate total operating expenses
      const totalOperatingExpenses = propertyManagement + repairsMaintenance + utilities + insurance + propertyTaxes + otherExpenses;
      
      // Calculate EBITDA
      const ebitda = totalRevenue - totalOperatingExpenses;
      
      // Calculate EBITDA margin
      const ebitdaMargin = (ebitda / totalRevenue) * 100;
      
      // Calculate monthly EBITDA
      const ebitdaPerMonth = ebitda / 12;
      
      // Calculate EBITDA multiple if property value is provided
      const ebitdaMultiple = propertyValue > 0 ? propertyValue / ebitda : 0;
      
      // Calculate implied cap rate
      const impliedCapRate = propertyValue > 0 ? (ebitda / propertyValue) * 100 : 0;

      return [
        { label: 'Total Revenue', value: totalRevenue.toFixed(2), isCurrency: true },
        { label: 'Total Operating Expenses', value: totalOperatingExpenses.toFixed(2), isCurrency: true },
        { label: 'EBITDA', value: ebitda.toFixed(2), isCurrency: true },
        { label: 'EBITDA Margin (%)', value: ebitdaMargin.toFixed(2), isCurrency: false },
        { label: 'EBITDA Per Month', value: ebitdaPerMonth.toFixed(2), isCurrency: true },
        { label: 'EBITDA Multiple (if property value provided)', value: ebitdaMultiple > 0 ? ebitdaMultiple.toFixed(2) + 'x' : 'N/A', isCurrency: false },
        { label: 'Implied Cap Rate (%)', value: impliedCapRate > 0 ? impliedCapRate.toFixed(2) : 'N/A', isCurrency: false },
      ];
    },
  },
};
