import { CalculatorContent } from '@/types';

export const NN_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'NN (Double Net) Lease Calculator',
  description: 'Calculate commercial double net lease costs where tenant pays rent plus property taxes and insurance',
  slug: 'nn-lease-calculator',
  icon: '🏬',
  category: 'Rental & Income',
  article: {
    title: 'Understanding Double Net (NN) Leases',
    content: `
    <h2>What is a Double Net (NN) Lease?</h2>
    <p>A double net (NN) lease is a commercial lease structure where the tenant pays <strong>base rent PLUS two expense categories</strong>:</p>
    <ol>
      <li><strong>Property Taxes</strong> - Real estate taxes for the building</li>
      <li><strong>Building Insurance</strong> - Property and liability insurance</li>
    </ol>
    <p>The landlord covers CAM (Common Area Maintenance) costs including utilities, cleaning, repairs, and landscaping.</p>

    <h3>NN vs. NNN vs. Gross Leases</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Lease Type</th>
        <th>Tenant Pays</th>
        <th>Landlord Pays</th>
      </tr>
      <tr>
        <td><strong>Gross Lease</strong></td>
        <td>Base rent only</td>
        <td>Taxes, insurance, CAM, all expenses</td>
      </tr>
      <tr>
        <td><strong>NN (Double Net)</strong></td>
        <td>Rent + Taxes + Insurance</td>
        <td>CAM costs</td>
      </tr>
      <tr>
        <td><strong>NNN (Triple Net)</strong></td>
        <td>Rent + Taxes + Insurance + CAM</td>
        <td>Structural repairs only</td>
      </tr>
    </table>

    <h3>NN Lease Cost Formula</h3>
    <p><strong>Total Monthly Rent = Base Rent + Property Taxes + Insurance</strong></p>
    
    <h4>Calculation Steps:</h4>
    <pre>
Step 1: Annual Base Rent = Base Rent ($/sq ft) × Square Footage
Step 2: Monthly Base Rent = Annual Base Rent ÷ 12

Step 3: Annual Property Taxes = Tax Rate ($/sq ft) × Square Footage
Step 4: Monthly Property Taxes = Annual Property Taxes ÷ 12

Step 5: Annual Insurance = Insurance Rate ($/sq ft) × Square Footage
Step 6: Monthly Insurance = Annual Insurance ÷ 12

Step 7: Total Monthly Rent = Monthly Base + Monthly Taxes + Monthly Insurance
    </pre>

    <h3>Real-World Example</h3>
    <p><strong>Office Space Lease:</strong></p>
    <ul>
      <li>Property size: 3,000 sq ft</li>
      <li>Base rent: $22/sq ft/year</li>
      <li>Property tax: $3/sq ft/year</li>
      <li>Insurance: $1.50/sq ft/year</li>
    </ul>
    <p><strong>Calculation:</strong></p>
    <pre>
Base Rent:
  Annual: $22 × 3,000 = $66,000
  Monthly: $66,000 ÷ 12 = $5,500

Property Tax:
  Annual: $3 × 3,000 = $9,000
  Monthly: $9,000 ÷ 12 = $750

Insurance:
  Annual: $1.50 × 3,000 = $4,500
  Monthly: $4,500 ÷ 12 = $375

Total Payment:
  Monthly: $5,500 + $750 + $375 = $6,625
  Annual: $66,000 + $9,000 + $4,500 = $79,500
  Effective rate: $79,500 ÷ 3,000 = $26.50/sq ft/year
    </pre>

    <h3>When NN Leases Are Common</h3>
    <p>Double net leases are less common than NNN or gross leases but appear in certain situations:</p>
    <ul>
      <li><strong>Older Office Buildings:</strong> Landlord maintains common areas, elevators, HVAC</li>
      <li><strong>Multi-Tenant Properties:</strong> Easier to manage CAM centrally</li>
      <li><strong>Transitional Arrangements:</strong> Moving from gross to NNN structure</li>
      <li><strong>Small Retail Centers:</strong> Where landlord prefers CAM control</li>
    </ul>

    <h3>What Tenants Pay in NN Leases</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Expense Category</th>
        <th>Who Pays</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td><strong>Base Rent</strong></td>
        <td>Tenant</td>
        <td>Per square foot annual rate</td>
      </tr>
      <tr>
        <td><strong>Property Taxes</strong></td>
        <td>Tenant</td>
        <td>Prorated by square footage</td>
      </tr>
      <tr>
        <td><strong>Building Insurance</strong></td>
        <td>Tenant</td>
        <td>Prorated by square footage</td>
      </tr>
      <tr>
        <td><strong>CAM</strong></td>
        <td>Landlord</td>
        <td>Utilities, cleaning, landscaping, repairs</td>
      </tr>
      <tr>
        <td><strong>Structural Repairs</strong></td>
        <td>Landlord</td>
        <td>Roof, foundation, HVAC systems</td>
      </tr>
      <tr>
        <td><strong>Interior Maintenance</strong></td>
        <td>Tenant</td>
        <td>Your space only</td>
      </tr>
    </table>

    <h3>Advantages of NN Leases</h3>
    
    <h4>For Tenants:</h4>
    <ul>
      <li><strong>Predictable CAM Costs:</strong> No surprise increases in maintenance charges</li>
      <li><strong>Less Management Burden:</strong> Landlord handles common area upkeep</li>
      <li><strong>Simpler Accounting:</strong> Fewer expense categories to track</li>
      <li><strong>Quality Control:</strong> Landlord maintains property to protect their investment</li>
    </ul>

    <h4>For Landlords:</h4>
    <ul>
      <li><strong>Predictable Tax/Insurance:</strong> Pass these volatile costs to tenants</li>
      <li><strong>CAM Control:</strong> Maintain quality and standards directly</li>
      <li><strong>Competitive Positioning:</strong> More attractive than NNN for some tenants</li>
      <li><strong>Operational Efficiency:</strong> Centralized maintenance often cheaper</li>
    </ul>

    <h3>Property Tax Considerations</h3>
    <p>Property taxes in NN leases are handled similarly to NNN leases:</p>
    <ul>
      <li><strong>Pro-Rata Share:</strong> Based on your percentage of total building square footage</li>
      <li><strong>Annual Reconciliation:</strong> Estimated monthly, trued up annually</li>
      <li><strong>Increases:</strong> Typically 2-4% annually depending on location</li>
      <li><strong>Appeals:</strong> Landlord usually handles tax appeals, savings passed through</li>
    </ul>

    <h3>Insurance in NN Leases</h3>
    <p>Building insurance costs are passed through to tenants:</p>
    <ul>
      <li><strong>Building Coverage:</strong> Structure, common areas, liability</li>
      <li><strong>Not Included:</strong> Tenant's contents, business interruption (you buy separately)</li>
      <li><strong>Typical Costs:</strong> $0.50-$2.00 per sq ft annually</li>
      <li><strong>Increases:</strong> Can spike 10-30% after claims or market changes</li>
    </ul>

    <h3>Key Negotiation Points</h3>
    <ul>
      <li><strong>Tax/Insurance Caps:</strong> Limit annual increases (e.g., 5% per year)</li>
      <li><strong>Base Year:</strong> Fix costs at year one, pay only increases thereafter</li>
      <li><strong>Audit Rights:</strong> Verify actual tax and insurance bills</li>
      <li><strong>CAM Standards:</strong> Define quality expectations for landlord's CAM</li>
      <li><strong>Expense Exclusions:</strong> Capital improvements shouldn't be passed through</li>
    </ul>

    <h3>Comparing NN to Other Lease Types</h3>
    <p><strong>Example: 2,000 sq ft office space</strong></p>
    <table border="1" cellpadding="5">
      <tr>
        <th>Component</th>
        <th>Gross Lease</th>
        <th>NN Lease</th>
        <th>NNN Lease</th>
      </tr>
      <tr>
        <td>Base Rent</td>
        <td>$32/sq ft</td>
        <td>$22/sq ft</td>
        <td>$20/sq ft</td>
      </tr>
      <tr>
        <td>Taxes</td>
        <td>Included</td>
        <td>+ $3/sq ft</td>
        <td>+ $3/sq ft</td>
      </tr>
      <tr>
        <td>Insurance</td>
        <td>Included</td>
        <td>+ $1.50/sq ft</td>
        <td>+ $1.50/sq ft</td>
      </tr>
      <tr>
        <td>CAM</td>
        <td>Included</td>
        <td>Included</td>
        <td>+ $5.50/sq ft</td>
      </tr>
      <tr>
        <td><strong>Total Cost</strong></td>
        <td>$32/sq ft</td>
        <td>$26.50/sq ft</td>
        <td>$30/sq ft</td>
      </tr>
    </table>
    <p>NN often falls between gross and NNN in total cost, but provides more transparency than gross.</p>

    <h3>Red Flags in NN Leases</h3>
    <ul>
      <li><strong>Deferred Maintenance:</strong> If landlord isn't maintaining CAM items properly</li>
      <li><strong>Vague Insurance Terms:</strong> Unclear what's covered by building insurance</li>
      <li><strong>Tax Assessment Appeals:</strong> Will you benefit from successful appeals?</li>
      <li><strong>Future CAM Costs:</strong> Will landlord pass CAM to tenants later via modification?</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate your NN lease costs, enter:</p>
    <ol>
      <li><strong>Space Size:</strong> Square footage you're leasing</li>
      <li><strong>Base Rent Rate:</strong> $/sq ft/year</li>
      <li><strong>Property Tax Rate:</strong> $/sq ft/year (get estimate from landlord)</li>
      <li><strong>Insurance Rate:</strong> $/sq ft/year (get estimate from landlord)</li>
    </ol>
    <p>The calculator shows monthly and annual costs broken down by category.</p>

    <h3>FAQs</h3>
    <h4>Why would I choose NN over NNN?</h4>
    <p>NN leases reduce your management burden since the landlord handles CAM. This means fewer expense reconciliations and less risk of surprise CAM increases. However, total cost may be slightly higher.</p>

    <h4>Can the landlord increase my rent to cover their CAM costs?</h4>
    <p>Only if the lease allows it. That's why you should negotiate rent escalation clauses carefully. Base rent increases should be capped (e.g., 2-3% annually or tied to CPI).</p>

    <h4>What happens if property taxes decrease?</h4>
    <p>You should receive a credit or reduction in your tax portion. Annual reconciliation works both ways—if actual costs are less than estimated, you get money back.</p>

    <h4>Do I need separate insurance beyond what's passed through?</h4>
    <p>Yes! The building insurance covers structure and liability, but you need your own business insurance for contents, equipment, business interruption, and tenant liability.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Space Size (Sq Ft)',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'baseRent',
        label: 'Base Rent ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 22,
      },
      {
        name: 'propertyTax',
        label: 'Property Tax ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 3.0,
      },
      {
        name: 'insurance',
        label: 'Building Insurance ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 1.5,
      },
    ],
    results: [
      { label: 'Monthly Base Rent', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Total Monthly Rent', isCurrency: true },
      { label: 'Total Annual Rent', isCurrency: true },
      { label: 'Effective Rate ($/Sq Ft/Year)', isCurrency: false },
    ],
    calculate: (values) => {
      const { squareFootage, baseRent, propertyTax, insurance } = values;
      
      if (squareFootage <= 0) {
        return [
          { label: 'Monthly Base Rent', value: '0.00', isCurrency: true },
          { label: 'Monthly Property Tax', value: '0.00', isCurrency: true },
          { label: 'Monthly Insurance', value: '0.00', isCurrency: true },
          { label: 'Total Monthly Rent', value: '0.00', isCurrency: true },
          { label: 'Total Annual Rent', value: '0.00', isCurrency: true },
          { label: 'Effective Rate ($/Sq Ft/Year)', value: '$0.00', isCurrency: false },
        ];
      }
      
      const annualBaseRent = squareFootage * baseRent;
      const annualPropertyTax = squareFootage * propertyTax;
      const annualInsurance = squareFootage * insurance;
      
      const monthlyBaseRent = annualBaseRent / 12;
      const monthlyPropertyTax = annualPropertyTax / 12;
      const monthlyInsurance = annualInsurance / 12;
      
      const totalMonthly = monthlyBaseRent + monthlyPropertyTax + monthlyInsurance;
      const totalAnnual = totalMonthly * 12;
      const effectiveRate = totalAnnual / squareFootage;

      return [
        { label: 'Monthly Base Rent', value: monthlyBaseRent.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Rent', value: totalMonthly.toFixed(2), isCurrency: true },
        { label: 'Total Annual Rent', value: totalAnnual.toFixed(2), isCurrency: true },
        { label: 'Effective Rate ($/Sq Ft/Year)', value: '$' + effectiveRate.toFixed(2), isCurrency: false },
      ];
    },
  },
};
