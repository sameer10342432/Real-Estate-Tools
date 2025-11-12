import { CalculatorContent } from '@/types';

export const NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Nebraska Transfer Tax Calculator - Documentary Stamp Tax',
  description: 'Calculate Nebraska documentary stamp tax ($2.25-$2.32 per $1,000) effective through 2025. Free calculator for NE real estate transfer costs',
  slug: 'nebraska-transfer-tax-calculator',
  icon: '🌽',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Nebraska Real Estate Documentary Stamp Tax',
    content: `
    <h2>Nebraska Documentary Stamp Tax Guide</h2>
    <p>Nebraska charges a <strong>documentary stamp tax of $2.25 per $1,000</strong> of property value (0.225%) on most real estate transfers. This rate increased to <strong>$2.32 per $1,000 (0.232%) effective September 3, 2025</strong>.</p>
    
    <h3>Nebraska Transfer Tax Rates</h3>
    <p><strong>Current Rate (through September 2, 2025):</strong> $2.25 per $1,000 (0.225%)</p>
    <p><strong>New Rate (effective September 3, 2025):</strong> $2.32 per $1,000 (0.232%)</p>
    <p>The tax is calculated on the full value of real property being transferred and is due when the deed is recorded.</p>

    <h3>Documentary Stamp Tax Distribution</h3>
    <p>Of each $2.25 collected:</p>
    <ul>
      <li><strong>Counties retain:</strong> $0.50 per $2.25</li>
      <li><strong>State receives:</strong> $1.75 per $2.25</li>
    </ul>
    <p>State funds are allocated to:</p>
    <ul>
      <li>Affordable Housing Trust Fund</li>
      <li>Site Development</li>
      <li>Homeless Shelter Assistance Program</li>
      <li>Behavioral Health Services</li>
    </ul>

    <h3>Who Pays Nebraska Transfer Tax?</h3>
    <p>Nebraska law requires the <strong>grantor (seller)</strong> to pay the documentary stamp tax. However, this can be negotiated in the purchase agreement, and in some cases, buyers may agree to pay a portion or all of the tax.</p>
    <p>The tax must be paid before the deed can be recorded with the Register of Deeds.</p>

    <h3>Nebraska Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $350,000 home (before Sept 3, 2025)</strong></p>
    <p>$350,000 ÷ $1,000 × $2.25 = <strong>$787.50 transfer tax</strong></p>
    
    <p><strong>Example 2: $350,000 home (after Sept 3, 2025)</strong></p>
    <p>$350,000 ÷ $1,000 × $2.32 = <strong>$812.00 transfer tax</strong></p>
    
    <p><strong>Example 3: $500,000 home (after Sept 3, 2025)</strong></p>
    <p>$500,000 ÷ $1,000 × $2.32 = <strong>$1,160 transfer tax</strong></p>

    <h3>Form 521: Real Estate Transfer Statement</h3>
    <p>Nebraska requires <strong>Form 521 (Real Estate Transfer Statement)</strong> to be filed with all deed recordings. This form includes:</p>
    <ul>
      <li>Property description and parcel number</li>
      <li>Sale price or property value</li>
      <li>Documentary stamp tax calculation</li>
      <li>Exemption claims (if applicable)</li>
      <li>Buyer and seller information</li>
    </ul>
    <p>The form must be completed accurately and submitted to the county Register of Deeds along with the deed and tax payment.</p>

    <h3>Nebraska Documentary Stamp Tax Exemptions</h3>
    <p>Common exemptions from Nebraska transfer tax include:</p>
    <ul>
      <li><strong>Transfers to/from family members:</strong> Certain family entity transfers qualify</li>
      <li><strong>Divorce transfers:</strong> Property transfers pursuant to divorce decree</li>
      <li><strong>Inheritance:</strong> Transfers by will or intestate succession</li>
      <li><strong>Government transfers:</strong> To or from government entities</li>
      <li><strong>Trust transfers:</strong> With specific conditions met</li>
      <li><strong>Partnership/LLC changes:</strong> Where no actual sale occurs</li>
      <li><strong>Corrective deeds:</strong> Fixing errors in prior conveyances</li>
    </ul>
    <p>Exemptions must be properly claimed on Form 521 with supporting documentation.</p>

    <h3>Nebraska Recording Fees</h3>
    <p>In addition to documentary stamp tax, counties charge recording fees:</p>
    <p><strong>Douglas County (Omaha):</strong></p>
    <ul>
      <li>First page: $25</li>
      <li>Additional pages: $3 per page</li>
    </ul>
    <p><strong>Lancaster County (Lincoln):</strong></p>
    <ul>
      <li>Similar fee structure, approximately $25-$35 total</li>
    </ul>
    <p><strong>Sarpy County (Bellevue):</strong></p>
    <ul>
      <li>Recording fees approximately $20-$30</li>
    </ul>

    <h3>Nebraska vs Neighboring States Transfer Tax</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $400K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nebraska (2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.232%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$928</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nebraska (pre-Sept 2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.225%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$900</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Missouri</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Iowa</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.16%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$640</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South Dakota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
      </tr>
    </table>

    <h3>Nebraska Seller Closing Costs</h3>
    <p>Beyond documentary stamp tax, Nebraska sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (negotiable)</li>
      <li>Property tax prorations</li>
      <li>Recording fees for mortgage releases</li>
      <li>Deed preparation ($200-$400)</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty (if offered)</li>
    </ul>
    <p>Total seller costs typically range from 7-9% of sale price.</p>

    <h3>How Documentary Stamps Are Paid</h3>
    <p>Documentary stamps can be paid via:</p>
    <ul>
      <li><strong>Title company:</strong> Most common—handled automatically at closing</li>
      <li><strong>Register of Deeds:</strong> Direct payment when recording deed</li>
      <li><strong>Online portals:</strong> Some counties accept electronic payment</li>
    </ul>
    <p>The title company typically collects the tax from the seller at closing and remits it when filing the deed.</p>

    <h3>Special Situations in Nebraska</h3>
    <p><strong>New Construction:</strong> Documentary stamp tax applies to first sale</p>
    <p><strong>Agricultural Land:</strong> Same rates apply to farmland transfers</p>
    <p><strong>Contract for Deed:</strong> Tax may be paid when contract is executed or when deed transfers</p>
    <p><strong>1031 Exchanges:</strong> Documentary stamp tax still applies to replacement property</p>
    <p><strong>Foreclosure Sales:</strong> Tax typically paid from sale proceeds</p>

    <h3>2025 Rate Increase Details</h3>
    <p>Legislative action increased Nebraska's documentary stamp tax from $2.25 to $2.32 per $1,000, effective September 3, 2025. This represents a 3.1% increase in the tax rate.</p>
    <p><strong>Impact on transactions:</strong></p>
    <ul>
      <li>$300,000 home: $21 increase ($675 to $696)</li>
      <li>$500,000 home: $35 increase ($1,125 to $1,160)</li>
      <li>$1,000,000 property: $70 increase ($2,250 to $2,320)</li>
    </ul>

    <h3>Tips for Nebraska Real Estate Closings</h3>
    <p>Budget for 0.232% documentary stamp tax (after Sept 3, 2025). Complete Form 521 accurately to avoid recording delays. Claim exemptions if eligible—can save hundreds. Use a reputable title company familiar with Nebraska requirements. Verify county recording fees in advance. Keep all Form 521 documentation for tax records. Factor in rate increase if closing after September 3, 2025. Consider closing before Sept 3 if possible to avoid higher rate.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and expected closing date. The calculator will apply the correct rate ($2.25 or $2.32 per $1,000). See your documentary stamp tax amount instantly. Add recording fees for total transfer costs. Compare Nebraska to neighboring zero-tax states.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'closingAfterSept3',
        label: 'Closing After September 3, 2025?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes - Use $2.32 per $1,000 rate' },
          { value: 'no', label: 'No - Use $2.25 per $1,000 rate' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'recordingFee',
        label: 'Estimated Recording Fee',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      { label: 'Documentary Stamp Tax Rate', isCurrency: false },
      { label: 'Documentary Stamp Tax', isCurrency: true },
      { label: 'Recording Fee', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'County Portion ($0.50 per $2.25+)', isCurrency: true },
      { label: 'State Portion (Affordable Housing Fund)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, closingAfterSept3, recordingFee } = values;

      const rate = closingAfterSept3 === 'yes' ? 2.32 : 2.25;
      const documentaryStampTax = (salePrice / 1000) * rate;
      
      const increments = salePrice / 1000;
      const countyPortion = increments * 0.50;
      const statePortion = documentaryStampTax - countyPortion;
      
      const totalCosts = documentaryStampTax + recordingFee;
      const percentageOfSale = (totalCosts / salePrice) * 100;

      return [
        { label: 'Documentary Stamp Tax Rate', value: `$${rate.toFixed(2)} per $1,000 (${(rate/10).toFixed(3)}%)` },
        { label: 'Documentary Stamp Tax', value: documentaryStampTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'County Portion ($0.50 per $2.25+)', value: countyPortion.toFixed(2), isCurrency: true },
        { label: 'State Portion (Affordable Housing Fund)', value: statePortion.toFixed(2), isCurrency: true },
      ];
    },
  },
};
