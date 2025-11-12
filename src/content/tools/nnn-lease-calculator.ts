import { CalculatorContent } from '@/types';

export const NNN_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'NNN (Triple Net) Lease Calculator',
  description: 'Calculate total costs for commercial triple net leases including base rent, taxes, insurance, and CAM charges',
  slug: 'nnn-lease-calculator',
  icon: '🏢',
  category: 'Rental & Income',
  article: {
    title: 'Understanding Triple Net (NNN) Leases',
    content: `
    <h2>What is a Triple Net (NNN) Lease?</h2>
    <p>A triple net (NNN) lease is a commercial lease structure where the tenant pays <strong>base rent PLUS three additional expense categories</strong>:</p>
    <ol>
      <li><strong>Property Taxes</strong> - Real estate taxes for the building</li>
      <li><strong>Building Insurance</strong> - Property and liability insurance</li>
      <li><strong>CAM (Common Area Maintenance)</strong> - Utilities, cleaning, repairs, landscaping, parking lot maintenance, snow removal, etc.</li>
    </ol>
    <p>The landlord receives predictable base rent income while passing most operating expenses to the tenant.</p>

    <h3>NNN Lease Cost Formula</h3>
    <p><strong>Total Monthly Rent = Base Rent + NNN Expenses</strong></p>
    <p>Where NNN Expenses = Property Taxes + Insurance + CAM Costs</p>

    <h4>Calculation Steps:</h4>
    <pre>
Step 1: Annual Base Rent = Base Rent ($/sq ft) × Square Footage
Step 2: Monthly Base Rent = Annual Base Rent ÷ 12

Step 3: Annual NNN Expenses = NNN Rate ($/sq ft) × Square Footage
Step 4: Monthly NNN Expenses = Annual NNN Expenses ÷ 12

Step 5: Total Monthly Rent = Monthly Base Rent + Monthly NNN Expenses
    </pre>

    <h3>Real-World Example</h3>
    <p><strong>Retail Space Lease:</strong></p>
    <ul>
      <li>Property size: 2,500 sq ft</li>
      <li>Base rent: $25/sq ft/year</li>
      <li>Estimated NNN: $6/sq ft/year</li>
    </ul>
    <p><strong>Calculation:</strong></p>
    <pre>
Base Rent:
  Annual: $25 × 2,500 = $62,500
  Monthly: $62,500 ÷ 12 = $5,208

NNN Expenses:
  Annual: $6 × 2,500 = $15,000
  Monthly: $15,000 ÷ 12 = $1,250

Total Payment:
  Monthly: $5,208 + $1,250 = $6,458
  Annual: $62,500 + $15,000 = $77,500
    </pre>

    <h3>How Lease Rates Are Advertised</h3>
    <p>Commercial leases are typically advertised as:</p>
    <p><strong>"$20.00/sq ft NNN"</strong></p>
    <p><strong>"Estimated NNN: $3.25/sq ft"</strong></p>
    <p>Translation:</p>
    <ul>
      <li>Base rent = $20/sq ft/year</li>
      <li>Additional NNN = $3.25/sq ft/year</li>
      <li><strong>Total = $23.25/sq ft/year</strong></li>
    </ul>

    <h3>What Tenants Pay in NNN Leases</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Cost Category</th>
        <th>Examples</th>
        <th>Who Pays</th>
      </tr>
      <tr>
        <td><strong>Property Taxes</strong></td>
        <td>Annual real estate taxes (prorated by sq ft)</td>
        <td>Tenant</td>
      </tr>
      <tr>
        <td><strong>Building Insurance</strong></td>
        <td>Property insurance, liability coverage</td>
        <td>Tenant</td>
      </tr>
      <tr>
        <td><strong>CAM</strong></td>
        <td>Utilities, janitorial, landscaping, parking lot, snow removal, repairs</td>
        <td>Tenant</td>
      </tr>
      <tr>
        <td><strong>Structural Repairs</strong></td>
        <td>Roof, foundation, HVAC replacement (varies)</td>
        <td>Usually Landlord</td>
      </tr>
      <tr>
        <td><strong>Interior Maintenance</strong></td>
        <td>Interior walls, fixtures, equipment</td>
        <td>Tenant</td>
      </tr>
    </table>

    <h3>Multi-Tenant Building Cost Allocation</h3>
    <p>When multiple tenants share a building, NNN costs are allocated by square footage:</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Tenant's NNN Share = (Tenant Sq Ft ÷ Total Building Sq Ft) × Total NNN Costs</strong></p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Building: 20,000 sq ft</li>
      <li>Your space: 3,000 sq ft (15% of building)</li>
      <li>Total annual property tax: $40,000</li>
      <li>Your share: (3,000 ÷ 20,000) × $40,000 = $6,000/year</li>
    </ul>

    <h3>Annual Reconciliation</h3>
    <p>NNN expenses are estimated at lease signing and reconciled annually based on actual costs:</p>
    <ul>
      <li><strong>Estimate:</strong> Landlord estimates NNN costs at $6/sq ft</li>
      <li><strong>Monthly Billing:</strong> Tenant pays estimated amount monthly</li>
      <li><strong>Annual True-Up:</strong> At year-end, actual costs are calculated</li>
      <li><strong>Adjustment:</strong> Tenant receives credit or pays additional amount</li>
    </ul>
    <p>Example: If actual costs were $6.50/sq ft but you paid based on $6/sq ft estimate, you'd owe the $0.50/sq ft difference.</p>

    <h3>NNN Lease Benefits for Tenants</h3>
    <ul>
      <li><strong>Transparency:</strong> See exactly what you're paying for</li>
      <li><strong>Control:</strong> More influence over maintenance and service quality</li>
      <li><strong>Lower Base Rent:</strong> Base rent often lower than full-service leases</li>
      <li><strong>Predictability:</strong> With expense caps, can budget more accurately</li>
    </ul>

    <h3>NNN Lease Benefits for Landlords</h3>
    <ul>
      <li><strong>Stable Income:</strong> Predictable base rent, expenses passed through</li>
      <li><strong>Lower Management:</strong> Tenant handles more responsibilities</li>
      <li><strong>Inflation Protection:</strong> Expenses rise with costs</li>
      <li><strong>Investment Appeal:</strong> NNN properties are popular with investors</li>
    </ul>

    <h3>Key Negotiation Points</h3>
    <ul>
      <li><strong>Expense Caps:</strong> Negotiate maximum annual increases (e.g., 3% per year)</li>
      <li><strong>Base Year:</strong> Fix NNN costs at year-one level, you pay increases only</li>
      <li><strong>Expense Exclusions:</strong> Exclude capital improvements, structural repairs</li>
      <li><strong>Audit Rights:</strong> Right to review landlord's books and expense records</li>
      <li><strong>CAM Definition:</strong> Clearly define what's included in CAM charges</li>
    </ul>

    <h3>Common CAM Expense Components</h3>
    <ul>
      <li>Parking lot maintenance, striping, sweeping</li>
      <li>Landscaping, irrigation, tree trimming</li>
      <li>Snow removal, ice control</li>
      <li>Common area utilities (lights, HVAC)</li>
      <li>Common area cleaning, janitorial</li>
      <li>Property management fees (typically 3-5% of rent)</li>
      <li>Security services</li>
      <li>Trash removal</li>
      <li>Signage maintenance</li>
    </ul>

    <h3>Red Flags to Watch For</h3>
    <ul>
      <li><strong>High historical increases:</strong> Check 3-5 years of expense history</li>
      <li><strong>Vague CAM definitions:</strong> Ensure contract clearly defines inclusions</li>
      <li><strong>No expense caps:</strong> Protect against runaway cost increases</li>
      <li><strong>Capital improvements in CAM:</strong> These should be landlord's responsibility</li>
      <li><strong>Administrative fees:</strong> Watch for excessive management charges</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>To calculate your NNN lease costs, enter:</p>
    <ol>
      <li><strong>Space Size:</strong> Square footage you're leasing</li>
      <li><strong>Base Rent Rate:</strong> $/sq ft/year (from listing)</li>
      <li><strong>Property Tax ($/sq ft/year):</strong> Estimated annual property tax portion</li>
      <li><strong>Insurance ($/sq ft/year):</strong> Estimated building insurance portion</li>
      <li><strong>CAM ($/sq ft/year):</strong> Common area maintenance estimate</li>
    </ol>
    <p>The calculator will show monthly and annual costs broken down by category.</p>

    <h3>Typical NNN Rates by Property Type</h3>
    <table border="1" cellpadding="5">
      <tr>
        <th>Property Type</th>
        <th>Typical Base Rent</th>
        <th>Typical NNN</th>
        <th>Total $/sq ft/yr</th>
      </tr>
      <tr>
        <td>Strip Center Retail</td>
        <td>$18-$30</td>
        <td>$4-$8</td>
        <td>$22-$38</td>
      </tr>
      <tr>
        <td>Office Building</td>
        <td>$20-$40</td>
        <td>$5-$12</td>
        <td>$25-$52</td>
      </tr>
      <tr>
        <td>Industrial/Warehouse</td>
        <td>$6-$12</td>
        <td>$2-$5</td>
        <td>$8-$17</td>
      </tr>
      <tr>
        <td>Restaurant</td>
        <td>$25-$50</td>
        <td>$6-$10</td>
        <td>$31-$60</td>
      </tr>
      <tr>
        <td>Medical Office</td>
        <td>$22-$35</td>
        <td>$6-$10</td>
        <td>$28-$45</td>
      </tr>
    </table>

    <h3>FAQs</h3>
    <h4>What's the difference between NNN and gross lease?</h4>
    <p>In a gross lease, base rent includes all expenses. In NNN, you pay base rent plus separate charges for taxes, insurance, and CAM. Total cost may be similar, but NNN provides more transparency.</p>

    <h4>Can NNN expenses increase every year?</h4>
    <p>Yes, they typically increase with actual costs. That's why negotiating annual caps (e.g., 3% max increase) is important. Property taxes and insurance usually rise 2-5% annually.</p>

    <h4>Who pays for roof repairs in a NNN lease?</h4>
    <p>Typically the landlord pays for structural repairs including roof, foundation, and major systems. However, routine maintenance and minor repairs may fall on the tenant. Check your lease carefully!</p>

    <h4>How are NNN costs verified?</h4>
    <p>Landlords must provide annual expense statements. Most leases include audit rights allowing you to review supporting documentation. If expenses seem high, exercise your audit right.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Space Size (Sq Ft)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'baseRent',
        label: 'Base Rent ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'propertyTax',
        label: 'Property Tax ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 2.5,
      },
      {
        name: 'insurance',
        label: 'Building Insurance ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 1.5,
      },
      {
        name: 'cam',
        label: 'CAM Costs ($/Sq Ft/Year)',
        type: 'number',
        defaultValue: 2.0,
      },
    ],
    results: [
      { label: 'Monthly Base Rent', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Monthly CAM', isCurrency: true },
      { label: 'Total Monthly Rent', isCurrency: true },
      { label: 'Total Annual Rent', isCurrency: true },
      { label: 'Effective Rate ($/Sq Ft/Year)', isCurrency: false },
    ],
    calculate: (values) => {
      const { squareFootage, baseRent, propertyTax, insurance, cam } = values;
      
      if (squareFootage <= 0) {
        return [
          { label: 'Monthly Base Rent', value: '0.00', isCurrency: true },
          { label: 'Monthly Property Tax', value: '0.00', isCurrency: true },
          { label: 'Monthly Insurance', value: '0.00', isCurrency: true },
          { label: 'Monthly CAM', value: '0.00', isCurrency: true },
          { label: 'Total Monthly Rent', value: '0.00', isCurrency: true },
          { label: 'Total Annual Rent', value: '0.00', isCurrency: true },
          { label: 'Effective Rate ($/Sq Ft/Year)', value: '$0.00', isCurrency: false },
        ];
      }
      
      const annualBaseRent = squareFootage * baseRent;
      const annualPropertyTax = squareFootage * propertyTax;
      const annualInsurance = squareFootage * insurance;
      const annualCAM = squareFootage * cam;
      
      const monthlyBaseRent = annualBaseRent / 12;
      const monthlyPropertyTax = annualPropertyTax / 12;
      const monthlyInsurance = annualInsurance / 12;
      const monthlyCAM = annualCAM / 12;
      
      const totalMonthly = monthlyBaseRent + monthlyPropertyTax + monthlyInsurance + monthlyCAM;
      const totalAnnual = totalMonthly * 12;
      const effectiveRate = totalAnnual / squareFootage;

      return [
        { label: 'Monthly Base Rent', value: monthlyBaseRent.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Monthly CAM', value: monthlyCAM.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Rent', value: totalMonthly.toFixed(2), isCurrency: true },
        { label: 'Total Annual Rent', value: totalAnnual.toFixed(2), isCurrency: true },
        { label: 'Effective Rate ($/Sq Ft/Year)', value: '$' + effectiveRate.toFixed(2), isCurrency: false },
      ];
    },
  },
};
