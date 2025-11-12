import { CalculatorContent } from '@/types';

export const MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Minnesota Transfer Tax Calculator - Deed Tax Calculator',
  description: 'Calculate Minnesota deed tax, recording fees, and agricultural conservation fees for real estate transactions',
  slug: 'minnesota-transfer-tax-calculator',
  icon: '🏒',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Minnesota Deed Tax & Transfer Costs',
    content: `
    <h2>Minnesota Deed Tax Guide</h2>
    <p>Minnesota imposes a <strong>deed tax</strong> (also called transfer tax) on real property transfers. This state-level tax is one of the key closing costs sellers and buyers should budget for when buying or selling property in Minnesota.</p>
    
    <h3>Minnesota Deed Tax Rates</h3>
    <p><strong>Standard Rate:</strong> 0.33% of net consideration (equivalent to $1.65 per $500 or $3.30 per $1,000)</p>
    <p><strong>Hennepin & Ramsey Counties:</strong> 0.34% (includes 0.01% Environmental Response Fund tax)</p>
    <p><strong>Minimum Tax:</strong> $1.65 statewide ($1.70 in Hennepin/Ramsey) for deeds with consideration ≤ $3,000</p>
    <p>Minnesota deed tax is calculated by multiplying the sale price by 0.0033 (or 0.0034 for Hennepin/Ramsey counties).</p>

    <h3>Who Pays Minnesota Deed Tax?</h3>
    <p>Traditionally, the <strong>seller pays deed tax</strong> in Minnesota. However, this is negotiable between parties in the purchase agreement. Counties collect the deed tax at the time of recording, and you cannot record a deed without paying the tax.</p>

    <h3>Minnesota Recording Fees (2025)</h3>
    <p>In addition to deed tax, Minnesota charges recording fees per statute 357.18:</p>
    <p><strong>Basic deed recording:</strong> $46</p>
    <p><strong>Well disclosure certificate:</strong> $50 (before July 1, 2025) or $54 (after July 1, 2025)</p>
    <p><strong>Agricultural Conservation Fee:</strong> $5 (if deed tax is payable; applies in 11 metro counties)</p>
    <p><strong>Certified copy:</strong> $10</p>

    <h3>Minnesota Agricultural Conservation Fee</h3>
    <p>The following counties charge a $5 Agricultural Conservation Fee when deed tax is payable:</p>
    <ul>
      <li>Anoka County</li>
      <li>Carver County</li>
      <li>Dakota County</li>
      <li>Hennepin County</li>
      <li>Ramsey County</li>
      <li>Scott County</li>
      <li>Waseca County</li>
      <li>Washington County</li>
      <li>Winona County</li>
      <li>Wright County</li>
    </ul>

    <h3>Hennepin & Ramsey County Special Rate</h3>
    <p>Hennepin and Ramsey Counties charge a slightly higher rate due to the Environmental Response Fund tax:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Standard Minnesota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.33%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$660</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Hennepin/Ramsey</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.34%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$680</td>
      </tr>
    </table>

    <h3>Minnesota Deed Tax Examples</h3>
    <p><strong>Example 1: $300,000 Home (Standard County)</strong></p>
    <ul>
      <li>Sale Price: $300,000</li>
      <li>Deed Tax: $300,000 × 0.0033 = $990</li>
      <li>Recording Fee: $46</li>
      <li>Well Disclosure: $50</li>
      <li>Total Transfer Cost: $1,086</li>
    </ul>

    <p><strong>Example 2: $450,000 Home (Hennepin County)</strong></p>
    <ul>
      <li>Sale Price: $450,000</li>
      <li>Deed Tax: $450,000 × 0.0034 = $1,530</li>
      <li>Recording Fee: $46</li>
      <li>Well Disclosure: $54</li>
      <li>Agricultural Fee: $5</li>
      <li>Total Transfer Cost: $1,635</li>
    </ul>

    <p><strong>Example 3: $150,000 Property (Ramsey County)</strong></p>
    <ul>
      <li>Sale Price: $150,000</li>
      <li>Deed Tax: $150,000 × 0.0034 = $510</li>
      <li>Recording Fee: $46</li>
      <li>Well Disclosure: $50</li>
      <li>Agricultural Fee: $5</li>
      <li>Total Transfer Cost: $611</li>
    </ul>

    <h3>Certificate of Real Estate Value (eCRV)</h3>
    <p>For properties with consideration exceeding $3,000, Minnesota requires a <strong>Certificate of Real Estate Value (eCRV)</strong>. This electronic form must be filed with the county and includes:</p>
    <ul>
      <li>Property address and legal description</li>
      <li>Purchase price and terms</li>
      <li>Buyer and seller information</li>
      <li>Property classification</li>
      <li>Deed tax calculation</li>
    </ul>
    <p>The eCRV can be filed online through the Minnesota Department of Revenue portal.</p>

    <h3>Exemptions from Minnesota Deed Tax</h3>
    <p>Deed tax does NOT apply to the following transfers:</p>
    <ul>
      <li>Transfers involving the US government</li>
      <li>Gifts between family members (parent-child, spouse)</li>
      <li>Estate distributions (personal representative deeds)</li>
      <li>Foreclosure deeds</li>
      <li>Easements</li>
      <li>Revocable trust ↔ grantor transfers</li>
      <li>Mergers/consolidations (minimum $1.65 tax applies)</li>
      <li>Deeds of confirmation or correction with no new consideration</li>
    </ul>

    <h3>Well Disclosure Requirements</h3>
    <p>Minnesota law requires a <strong>well disclosure certificate</strong> with most deed recordings. Sellers must either:</p>
    <ul>
      <li>Certify that a well exists and provide well information (Well Certificate)</li>
      <li>Certify that no wells exist on the property</li>
      <li>Provide a statement that well status hasn't changed since last transfer</li>
    </ul>
    <p>The well disclosure fee is $50 (increasing to $54 after July 1, 2025).</p>

    <h3>How Minnesota Compares to Other States</h3>
    <p>At 0.33-0.34%, Minnesota's deed tax is moderate compared to other states:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), New York (1-2%), Delaware (4%)</li>
      <li><strong>Higher than:</strong> Texas (0%), Louisiana (0%), Indiana (0%)</li>
      <li><strong>Similar to:</strong> Wisconsin (0.3%), South Dakota (0.5%)</li>
    </ul>

    <h3>Minnesota Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Minnesota (on a $350,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $17,500-$21,000</li>
      <li>Deed Tax (0.33%): $1,155</li>
      <li>Title Insurance: $1,200-$1,800</li>
      <li>Recording Fees: $46-$100</li>
      <li>Well Disclosure: $50-$54</li>
      <li>Attorney Fees: $500-$1,500 (optional)</li>
      <li><strong>Total: ~$20,500-$25,500 (5.9-7.3%)</strong></li>
    </ul>

    <h3>Tips to Reduce Minnesota Transfer Costs</h3>
    <p><strong>Negotiate in contract:</strong> Ask buyer to pay portion of deed tax</p>
    <p><strong>Seller concessions:</strong> Offer to cover buyer costs instead of price reduction</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but still pay deed tax</p>
    <p><strong>Title insurance shopping:</strong> Minnesota allows title insurance rate competition</p>
    <p><strong>Attorney review:</strong> Not required but recommended for complex transactions</p>

    <h3>Minnesota Real Estate Closing Process</h3>
    <p>Minnesota uses <strong>attorney closings</strong> or <strong>title company closings</strong>, varying by region:</p>
    <ul>
      <li><strong>Twin Cities Metro:</strong> Typically attorney or title company</li>
      <li><strong>Greater Minnesota:</strong> More title company closings</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Abstract of Title:</strong> Minnesota uses abstract continuation system</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing</li>
    </ul>

    <h3>Special Considerations for Minnesota Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Deed tax applies to every sale - factor into flip calculations</li>
      <li>1031 exchanges still require deed tax payment</li>
      <li>Wholesaling contracts may owe deed tax on assignment</li>
      <li>LLC transfers may trigger deed tax (consult tax advisor)</li>
      <li>Agricultural conservation fee applies in metro counties</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Minnesota deed tax (state transfer tax)</li>
      <li>Recording fees</li>
      <li>Well disclosure certificate fee</li>
      <li>Agricultural conservation fee (if applicable)</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
    </ul>

    <h3>Common Minnesota Deed Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Forgetting Hennepin/Ramsey counties have higher rates</p>
    <p><strong>Mistake 2:</strong> Not budgeting for agricultural conservation fee in metro counties</p>
    <p><strong>Mistake 3:</strong> Overlooking well disclosure requirements and fees</p>
    <p><strong>Mistake 4:</strong> Failing to file Certificate of Real Estate Value (eCRV) for sales over $3,000</p>
    <p><strong>Mistake 5:</strong> Assuming all family transfers are exempt without proper documentation</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'Minnesota County',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard Minnesota County (0.33%)' },
          { value: 'hennepin_ramsey', label: 'Hennepin or Ramsey County (0.34%)' },
        ],
        defaultValue: 'standard',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'agConservationFee',
        label: 'Agricultural Conservation Fee ($5)?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes - Metro County (Anoka, Carver, Dakota, etc.)' },
          { value: 'no', label: 'No - Other County' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'wellDisclosure',
        label: 'Well Disclosure Required?',
        type: 'select',
        options: [
          { value: 'before_july', label: 'Yes - Before July 1, 2025 ($50)' },
          { value: 'after_july', label: 'Yes - After July 1, 2025 ($54)' },
          { value: 'no', label: 'No - Not Required' },
        ],
        defaultValue: 'before_july',
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [
      { label: 'Minnesota Deed Tax', isCurrency: true },
      { label: 'Recording Fee', isCurrency: true },
      { label: 'Well Disclosure Fee', isCurrency: true },
      { label: 'Agricultural Conservation Fee', isCurrency: true },
      { label: 'Title Insurance (Estimate)', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        county,
        salePrice,
        agConservationFee,
        wellDisclosure,
        titleInsurance,
      } = values;

      // Deed tax rates
      const deedTaxRate = county === 'hennepin_ramsey' ? 0.0034 : 0.0033;
      
      // Calculate deed tax with minimum
      let deedTax = salePrice * deedTaxRate;
      if (county === 'hennepin_ramsey') {
        deedTax = Math.max(deedTax, 1.70);
      } else {
        deedTax = Math.max(deedTax, 1.65);
      }

      // Recording fee
      const recordingFee = 46;

      // Well disclosure fee
      let wellFee = 0;
      if (wellDisclosure === 'before_july') {
        wellFee = 50;
      } else if (wellDisclosure === 'after_july') {
        wellFee = 54;
      }

      // Agricultural conservation fee
      const agFee = agConservationFee === 'yes' ? 5 : 0;

      // Total costs
      const totalCosts = deedTax + recordingFee + wellFee + agFee + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'Minnesota Deed Tax', value: deedTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Well Disclosure Fee', value: wellFee.toFixed(2), isCurrency: true },
        { label: 'Agricultural Conservation Fee', value: agFee.toFixed(2), isCurrency: true },
        { label: 'Title Insurance (Estimate)', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
