import { CalculatorContent } from '@/types';

export const MODIFIED_GROSS_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Modified Gross Lease Calculator',
  description: 'Calculate commercial modified gross lease costs with customizable expense sharing between landlord and tenant',
  slug: 'modified-gross-lease-calculator',
  icon: '📝',
  category: 'Rental & Income',
  article: {
    title: 'Understanding Modified Gross Leases',
    content: `
    <h2>What is a Modified Gross Lease?</h2>
    <p>A modified gross lease (also called "modified net lease") is a flexible commercial lease structure where the landlord and tenant negotiate which operating expenses each party will pay. It's a hybrid between a gross lease (landlord pays all) and NNN lease (tenant pays all).</p>

    <h3>Common Modified Gross Structures</h3>
    <p>There's no standard modified gross lease—each deal is custom. Common arrangements include:</p>

    <h4>Type 1: Landlord Pays Base Year Expenses</h4>
    <ul>
      <li>Tenant pays base rent</li>
      <li>Landlord pays first year's operating expenses</li>
      <li>Tenant pays increases above base year (escalations)</li>
      <li>Most common in multi-tenant office buildings</li>
    </ul>

    <h4>Type 2: Expense Split</h4>
    <ul>
      <li>Tenant pays base rent</li>
      <li>Landlord pays: Property taxes, insurance</li>
      <li>Tenant pays: Utilities, janitorial for their space</li>
      <li>Common in smaller office/retail spaces</li>
    </ul>

    <h4>Type 3: CAM Only</h4>
    <ul>
      <li>Tenant pays base rent plus CAM</li>
      <li>Landlord pays: Property taxes and insurance</li>
      <li>Tenant pays: Common area maintenance charges</li>
    </ul>

    <h3>Modified Gross vs. Other Lease Types</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Lease Type</th>
        <th>Base Rent Includes</th>
        <th>Tenant Also Pays</th>
      </tr>
      <tr>
        <td><strong>Gross Lease</strong></td>
        <td>All expenses</td>
        <td>Nothing extra</td>
      </tr>
      <tr>
        <td><strong>Modified Gross</strong></td>
        <td>Some expenses (negotiated)</td>
        <td>Other expenses (negotiated)</td>
      </tr>
      <tr>
        <td><strong>NN Lease</strong></td>
        <td>CAM only</td>
        <td>Taxes + Insurance</td>
      </tr>
      <tr>
        <td><strong>NNN Lease</strong></td>
        <td>Nothing</td>
        <td>Taxes + Insurance + CAM</td>
      </tr>
    </table>

    <h3>Base Year Expense Stop Explained</h3>
    <p>This is the most common modified gross structure for office buildings:</p>
    <p><strong>How It Works:</strong></p>
    <ol>
      <li><strong>Year 1 (Base Year):</strong> Tenant pays only base rent. Landlord pays all expenses (taxes, insurance, CAM)</li>
      <li><strong>Year 2+:</strong> Tenant pays base rent PLUS any expense increases above base year</li>
    </ol>

    <p><strong>Example:</strong></p>
    <pre>
Year 1 (Base Year):
  Base rent: $25/sq ft = $50,000 for 2,000 sq ft
  Operating expenses: $8/sq ft = $16,000
  Landlord pays: $16,000
  Tenant pays: $50,000

Year 2:
  Base rent: $25/sq ft = $50,000
  Operating expenses: $9/sq ft = $18,000
  Expense increase: $1/sq ft = $2,000
  Landlord pays: $16,000 (base year amount)
  Tenant pays: $50,000 + $2,000 = $52,000

Year 3:
  Base rent: $25/sq ft = $50,000
  Operating expenses: $9.50/sq ft = $19,000
  Expense increase: $1.50/sq ft = $3,000
  Landlord pays: $16,000 (base year amount)
  Tenant pays: $50,000 + $3,000 = $53,000
    </pre>

    <h3>Pro-Rata Share Calculations</h3>
    <p>In multi-tenant buildings, expenses are allocated by square footage:</p>
    <p><strong>Tenant's Share = (Your Sq Ft ÷ Total Building Sq Ft) × Total Expense</strong></p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Building: 50,000 sq ft</li>
      <li>Your space: 3,000 sq ft (6% of building)</li>
      <li>Total building CAM: $250,000</li>
      <li>Your CAM share: 6% × $250,000 = $15,000/year</li>
    </ul>

    <h3>Typical Expense Allocations</h3>

    <h4>Landlord Usually Pays:</h4>
    <ul>
      <li>Property taxes (or base year amount)</li>
      <li>Building insurance</li>
      <li>Structural repairs (roof, foundation, exterior)</li>
      <li>Common area utilities</li>
      <li>Property management</li>
    </ul>

    <h4>Tenant Usually Pays:</h4>
    <ul>
      <li>Interior utilities (electric, gas in your space)</li>
      <li>Interior maintenance and repairs</li>
      <li>Janitorial for your space</li>
      <li>Expense increases above base year</li>
    </ul>

    <h3>Advantages of Modified Gross Leases</h3>

    <h4>For Tenants:</h4>
    <ul>
      <li><strong>Predictable First Year:</strong> Fixed rent with no surprise expenses</li>
      <li><strong>Protection from Volatility:</strong> Base year locks in initial expense level</li>
      <li><strong>Simpler Than NNN:</strong> Fewer reconciliations and expense categories</li>
      <li><strong>Negotiation Flexibility:</strong> Can customize to your needs</li>
    </ul>

    <h4>For Landlords:</h4>
    <ul>
      <li><strong>Competitive Offering:</strong> More attractive than straight NNN for many tenants</li>
      <li><strong>Expense Protection:</strong> Increases passed through after base year</li>
      <li><strong>Simplified Marketing:</strong> Easier to quote than fully variable NNN</li>
      <li><strong>Tenant Retention:</strong> Predictable costs keep tenants longer</li>
    </ul>

    <h3>Key Negotiation Points</h3>
    <ul>
      <li><strong>Expense Categories:</strong> Clearly define what's included/excluded</li>
      <li><strong>Base Year:</strong> When does it start? Actual expenses or projected?</li>
      <li><strong>Expense Caps:</strong> Limit annual increases (e.g., 5% max per year)</li>
      <li><strong>Controllable vs. Uncontrollable:</strong> Cap controllable expenses only</li>
      <li><strong>Gross-Up Clause:</strong> How expenses calculated if building not fully leased</li>
      <li><strong>Audit Rights:</strong> Right to verify expense calculations</li>
    </ul>

    <h3>Gross-Up Clause Explained</h3>
    <p>This protects tenants when building isn't fully occupied:</p>
    <p><strong>Problem:</strong> Variable expenses (utilities, janitorial) are lower when building is half-empty</p>
    <p><strong>Solution:</strong> Gross-up clause calculates expenses as if building were 95% occupied</p>
    <p><strong>Example:</strong></p>
    <pre>
Building 50% Occupied:
  Actual CAM: $100,000
  Per sq ft: $4/sq ft

Building 95% Grossed-Up:
  Projected CAM: $190,000
  Per sq ft: $4/sq ft (same!)

This prevents your share from spiking when others move out.
    </pre>

    <h3>Real-World Example Comparison</h3>
    <p><strong>Same Office Space - Different Lease Types:</strong></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Component</th>
        <th>Gross</th>
        <th>Modified Gross</th>
        <th>NNN</th>
      </tr>
      <tr>
        <td>Quoted Rent</td>
        <td>$35/sq ft</td>
        <td>$28/sq ft</td>
        <td>$22/sq ft</td>
      </tr>
      <tr>
        <td>Expenses</td>
        <td>Included</td>
        <td>$4/sq ft (increases)</td>
        <td>$8/sq ft (all)</td>
      </tr>
      <tr>
        <td><strong>Year 1 Total</strong></td>
        <td>$35/sq ft</td>
        <td>$28/sq ft</td>
        <td>$30/sq ft</td>
      </tr>
      <tr>
        <td><strong>Year 5 Total</strong></td>
        <td>$35/sq ft</td>
        <td>$32/sq ft</td>
        <td>$32/sq ft</td>
      </tr>
    </table>

    <h3>Common Pitfalls</h3>
    <ul>
      <li><strong>Vague Expense Definitions:</strong> "Tenant pays utilities" - which ones?</li>
      <li><strong>No Gross-Up:</strong> Costs spike when other tenants leave</li>
      <li><strong>Uncapped Escalations:</strong> Protect against runaway increases</li>
      <li><strong>Hidden Capital Expenses:</strong> New roof shouldn't be in base year increases</li>
      <li><strong>Management Fees in CAM:</strong> Watch for excessive administrative charges</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate your modified gross lease costs, enter:</p>
    <ol>
      <li><strong>Space Size:</strong> Square footage you're leasing</li>
      <li><strong>Base Rent:</strong> $/sq ft/year quoted by landlord</li>
      <li><strong>Expense Items:</strong> Check which expenses tenant pays (customize)</li>
      <li><strong>Rates:</strong> Enter $/sq ft/year for each expense category</li>
    </ol>

    <h3>FAQs</h3>
    <h4>Is modified gross better than NNN for tenants?</h4>
    <p>It depends. Modified gross provides more predictability in year one and protection via base year, but NNN offers more transparency and potential savings if expenses are managed well.</p>

    <h4>What happens if expenses decrease after the base year?</h4>
    <p>In most modified gross leases, you only pay increases—you don't get reductions if expenses drop below base year. This should be negotiated upfront.</p>

    <h4>Can the landlord change what's included mid-lease?</h4>
    <p>No, expense allocations are defined in the lease and cannot change without both parties agreeing to an amendment.</p>

    <h4>How often are expenses reconciled?</h4>
    <p>Typically annually. You pay estimated amounts monthly and receive annual statements showing actual expenses and any true-up owed or credited.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Space Size (Sq Ft)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'baseRent',
        label: 'Base Rent ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 28,
      },
      {
        name: 'propertyTax',
        label: 'Property Tax ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'insurance',
        label: 'Insurance ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'cam',
        label: 'CAM or Expense Increases ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 4,
      },
    ],
    results: [
      { label: 'Monthly Base Rent', isCurrency: true },
      { label: 'Monthly Tenant Expenses', isCurrency: true },
      { label: 'Total Monthly Rent', isCurrency: true },
      { label: 'Total Annual Rent', isCurrency: true },
      { label: 'Effective Rate ($/Sq Ft/Year)', isCurrency: false },
    ],
    calculate: (values) => {
      const { squareFootage, baseRent, propertyTax, insurance, cam } = values;
      
      if (squareFootage <= 0) {
        return [
          { label: 'Monthly Base Rent', value: '0.00', isCurrency: true },
          { label: 'Monthly Tenant Expenses', value: '0.00', isCurrency: true },
          { label: 'Total Monthly Rent', value: '0.00', isCurrency: true },
          { label: 'Total Annual Rent', value: '0.00', isCurrency: true },
          { label: 'Effective Rate ($/Sq Ft/Year)', value: '$0.00', isCurrency: false },
        ];
      }
      
      const annualBaseRent = squareFootage * baseRent;
      const annualTenantExpenses = squareFootage * (propertyTax + insurance + cam);
      
      const monthlyBaseRent = annualBaseRent / 12;
      const monthlyTenantExpenses = annualTenantExpenses / 12;
      
      const totalMonthly = monthlyBaseRent + monthlyTenantExpenses;
      const totalAnnual = totalMonthly * 12;
      const effectiveRate = totalAnnual / squareFootage;

      return [
        { label: 'Monthly Base Rent', value: monthlyBaseRent.toFixed(2), isCurrency: true },
        { label: 'Monthly Tenant Expenses', value: monthlyTenantExpenses.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Rent', value: totalMonthly.toFixed(2), isCurrency: true },
        { label: 'Total Annual Rent', value: totalAnnual.toFixed(2), isCurrency: true },
        { label: 'Effective Rate ($/Sq Ft/Year)', value: '$' + effectiveRate.toFixed(2), isCurrency: false },
      ];
    },
  },
};
