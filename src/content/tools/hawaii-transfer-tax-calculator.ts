import { CalculatorContent } from '@/types';

export const HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hawaii Transfer Tax Calculator - Conveyance Tax Calculator',
  description: 'Calculate Hawaii conveyance tax with tiered rates ($0.10-$1.25 per $100) and owner-occupant exemptions. Free HI real estate transfer cost calculator',
  slug: 'hawaii-transfer-tax-calculator',
  icon: '🌺',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Hawaii Conveyance Tax & Real Estate Transfer Costs',
    content: `
    <h2>Hawaii Conveyance Tax Guide</h2>
    <p>Hawaii charges a <strong>conveyance tax</strong> instead of a traditional transfer tax. This tiered tax system ranges from <strong>$0.10 to $1.25 per $100</strong> of sale price (0.1% to 1.25%), depending on the property value and whether the buyer qualifies as an owner-occupant.</p>
    
    <h3>Hawaii Conveyance Tax Rates (2025)</h3>
    <p>Hawaii uses a progressive bracket system with lower rates for owner-occupants:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Owner-Occupant</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Non Owner-Occupant</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Less than $600,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.10 per $100 (0.1%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.15 per $100 (0.15%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$600,000 - $999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.20 per $100 (0.2%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.25 per $100 (0.25%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1M - $1,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.30 per $100 (0.3%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.40 per $100 (0.4%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$2M - $3,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.50 per $100 (0.5%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.60 per $100 (0.6%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$4M - $5,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.70 per $100 (0.7%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.85 per $100 (0.85%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$6M - $9,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.90 per $100 (0.9%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.10 per $100 (1.1%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$10M or more</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.00 per $100 (1.0%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.25 per $100 (1.25%)</td>
      </tr>
    </table>

    <h3>Owner-Occupant Exemption</h3>
    <p>To qualify for the lower owner-occupant rates, the <strong>buyer must intend to occupy the property as their primary residence</strong>. Requirements include:</p>
    <ul>
      <li>Filing a Homeowner's Exemption claim form</li>
      <li>Registering home ownership with the Bureau of Conveyances</li>
      <li>Actual intent to occupy as primary residence</li>
      <li>Results in lower tax rates across all price brackets</li>
    </ul>
    <p>Investment properties, second homes, and vacation homes do not qualify for owner-occupant rates.</p>

    <h3>Who Pays Hawaii Conveyance Tax?</h3>
    <p>Traditionally, the <strong>seller pays the conveyance tax</strong> in Hawaii. However, this is negotiable in the purchase contract. The tax must be paid before the deed can be recorded at the Bureau of Conveyances.</p>

    <h3>Hawaii Conveyance Tax Calculation Examples</h3>
    <p><strong>Example 1: $850,000 home - Owner-Occupant</strong></p>
    <p>First $600,000 @ 0.1% = $600</p>
    <p>Next $250,000 @ 0.2% = $500</p>
    <p><strong>Total: $1,100</strong></p>
    
    <p><strong>Example 2: $850,000 home - Non Owner-Occupant (Investment)</strong></p>
    <p>First $600,000 @ 0.15% = $900</p>
    <p>Next $250,000 @ 0.25% = $625</p>
    <p><strong>Total: $1,525</strong></p>
    
    <p><strong>Example 3: $5M luxury property - Non Owner-Occupant</strong></p>
    <p>First $600K @ 0.15% = $900</p>
    <p>$600K-$1M @ 0.25% = $1,000</p>
    <p>$1M-$2M @ 0.4% = $4,000</p>
    <p>$2M-$4M @ 0.6% = $12,000</p>
    <p>$4M-$5M @ 0.85% = $8,500</p>
    <p><strong>Total: $26,400</strong></p>

    <h3>Conveyance Tax Certificate Forms</h3>
    <p>Hawaii requires a <strong>Conveyance Tax Certificate</strong> (Form P-64A or P-64B) to be filed with all deed recordings:</p>
    <ul>
      <li><strong>Form P-64A:</strong> Standard conveyance tax form</li>
      <li><strong>Form P-64B:</strong> Supplemental form for complex transactions</li>
      <li>Must include sale price and tax calculation</li>
      <li>Requires seller and buyer signatures</li>
      <li>Handled by escrow company or attorney</li>
    </ul>

    <h3>Where the Conveyance Tax Money Goes</h3>
    <p>Hawaii conveyance tax revenues are allocated to:</p>
    <ul>
      <li><strong>10% (max $6.8M):</strong> Land Conservation Fund</li>
      <li><strong>50% (max $38M):</strong> Rental Housing Revolving Fund</li>
      <li><strong>Remainder:</strong> State General Fund</li>
    </ul>

    <h3>Proposed 2025 Legislative Changes</h3>
    <p>Several bills are under consideration in 2025 that could:</p>
    <ul>
      <li>Switch to marginal rates (taxing only the portion in each bracket)</li>
      <li>Increase rates for higher-value properties</li>
      <li>Impose 3% tax on non-resident buyers (those without HI tax returns in 4 years)</li>
    </ul>
    <p><strong>Important:</strong> These are NOT yet law as of November 2025, but are under active consideration by the legislature.</p>

    <h3>Hawaii Conveyance Tax for Leases</h3>
    <p>Hawaii's conveyance tax applies not only to property sales but also to long-term leases:</p>
    <ul>
      <li>Leases with 5+ years remaining are subject to conveyance tax</li>
      <li>Tax calculated based on lease value</li>
      <li>Common for Hawaii's extensive leasehold land system</li>
    </ul>

    <h3>Minimum Tax</h3>
    <p>Hawaii has a <strong>$1.00 minimum conveyance tax</strong> for all transactions, even those with nominal consideration.</p>

    <h3>Hawaii vs Other States Transfer Tax</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $850K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hawaii (owner-occupant)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1-0.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,100</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Hawaii (non-occupant)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15-0.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,525</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11-6%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$935-$51,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.78%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,130</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada (Clark)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.51%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,335</td>
      </tr>
    </table>

    <h3>Hawaii Seller Closing Costs</h3>
    <p>Beyond conveyance tax, Hawaii sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (usually seller pays in Hawaii)</li>
      <li>Escrow fees (split with buyer)</li>
      <li>Property tax prorations</li>
      <li>Recording fees for deed and releases</li>
      <li>CPR maintenance fees (if condo)</li>
      <li>FIRPTA withholding (if foreign seller)</li>
    </ul>
    <p>Total seller costs typically range from 8-10% of sale price.</p>

    <h3>Special Hawaii Considerations</h3>
    <p><strong>Leasehold Properties:</strong> Common in Hawaii; different rules apply for lease assignments</p>
    <p><strong>CPR Properties:</strong> Condominiums require additional documentation</p>
    <p><strong>Agricultural Land:</strong> Special use classifications may affect taxation</p>
    <p><strong>HARPTA Withholding:</strong> Hawaii withholding tax (7.25% for out-of-state sellers)</p>
    <p><strong>Non-Resident Sellers:</strong> May face both FIRPTA and HARPTA withholding</p>

    <h3>Tips for Hawaii Real Estate Closings</h3>
    <p>Qualify for owner-occupant rates if buying as primary residence—saves significantly. Budget conveyance tax using tiered rates (not flat percentage). Use experienced Hawaii escrow company familiar with conveyance tax. Complete all Bureau of Conveyances forms accurately. Factor in HARPTA withholding if selling from out of state. Understand leasehold vs fee simple property differences. Consider timing of sale if legislative changes are pending. Keep all conveyance tax certificates for tax records.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price. Select whether buyer qualifies as owner-occupant. The calculator applies Hawaii's progressive tiered rates. See conveyance tax for each bracket and total amount. Compare owner-occupant vs non-occupant rates instantly.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 850000,
      },
      {
        name: 'ownerOccupant',
        label: 'Buyer Status',
        type: 'select',
        options: [
          { value: 'yes', label: 'Owner-Occupant (Lower Rates)' },
          { value: 'no', label: 'Non Owner-Occupant / Investment' },
        ],
        defaultValue: 'yes',
      },
    ],
    results: [
      { label: 'Conveyance Tax Amount', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings with Owner-Occupant Status', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, ownerOccupant } = values;

      const isOwnerOccupant = ownerOccupant === 'yes';
      
      const brackets = [
        { max: 600000, ownerRate: 0.001, nonOwnerRate: 0.0015 },
        { max: 1000000, ownerRate: 0.002, nonOwnerRate: 0.0025 },
        { max: 2000000, ownerRate: 0.003, nonOwnerRate: 0.004 },
        { max: 4000000, ownerRate: 0.005, nonOwnerRate: 0.006 },
        { max: 6000000, ownerRate: 0.007, nonOwnerRate: 0.0085 },
        { max: 10000000, ownerRate: 0.009, nonOwnerRate: 0.011 },
        { max: Infinity, ownerRate: 0.01, nonOwnerRate: 0.0125 },
      ];

      let remaining = salePrice;
      let conveyanceTax = 0;
      let previousMax = 0;

      for (const bracket of brackets) {
        if (remaining <= 0) break;
        
        const taxableInBracket = Math.min(remaining, bracket.max - previousMax);
        const rate = isOwnerOccupant ? bracket.ownerRate : bracket.nonOwnerRate;
        conveyanceTax += taxableInBracket * rate;
        
        remaining -= taxableInBracket;
        previousMax = bracket.max;
      }

      const effectiveRate = (conveyanceTax / salePrice) * 100;
      
      let nonOwnerTax = 0;
      if (isOwnerOccupant) {
        let remainingNonOwner = salePrice;
        let prevMax = 0;
        for (const bracket of brackets) {
          if (remainingNonOwner <= 0) break;
          const taxable = Math.min(remainingNonOwner, bracket.max - prevMax);
          nonOwnerTax += taxable * bracket.nonOwnerRate;
          remainingNonOwner -= taxable;
          prevMax = bracket.max;
        }
      }
      const savings = isOwnerOccupant ? nonOwnerTax - conveyanceTax : 0;

      return [
        { label: 'Conveyance Tax Amount', value: conveyanceTax.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: `${effectiveRate.toFixed(3)}%` },
        { label: 'Percentage of Sale Price', value: `${effectiveRate.toFixed(3)}%` },
        { label: 'Savings with Owner-Occupant Status', value: savings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
