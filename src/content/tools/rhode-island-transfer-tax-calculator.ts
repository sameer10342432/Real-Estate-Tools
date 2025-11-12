import { CalculatorContent } from '@/types';

export const RHODE_ISLAND_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rhode Island Transfer Tax Calculator - Documentary Stamps Calculator',
  description: 'Calculate Rhode Island real estate conveyance tax (documentary stamps) with 63% rate increase effective October 2025',
  slug: 'rhode-island-transfer-tax-calculator',
  icon: '⚓',
  category: 'Seller Tools',
  metaTitle: 'Rhode Island Transfer Tax Calculator 2025 - Conveyance Tax & Doc Stamps',
  metaDescription: 'Free Rhode Island transfer tax calculator. Calculate documentary stamps with new rates ($3.75/$500) effective October 1, 2025. Includes residential property surcharge.',
  article: {
    title: 'Understanding Rhode Island Real Estate Conveyance Tax & Documentary Stamps',
    content: `
    <h2>Rhode Island Transfer Tax (Conveyance Tax) Guide</h2>
    <p>Rhode Island charges a <strong>real estate conveyance tax</strong>, commonly called "documentary stamps," on property sales. A <strong>63% rate increase</strong> takes effect <strong>October 1, 2025</strong>, significantly impacting seller closing costs across the state.</p>
    
    <h3>Rhode Island Conveyance Tax Rates</h3>
    <p><strong>Current rates (through September 30, 2025):</strong></p>
    <ul>
      <li><strong>Tier 1 (Base Rate):</strong> $2.30 per $500 (0.46% of sale price)</li>
      <li><strong>Tier 2 (Residential over $800,000):</strong> Additional $2.30 per $500 on amount exceeding $800,000</li>
      <li>Example: $500,000 home = $2,300 in transfer tax</li>
      <li>Example: $1,000,000 home = $4,600 base + $920 (on $200K over $800K) = $5,520 total</li>
    </ul>

    <p><strong>New rates (effective October 1, 2025):</strong></p>
    <ul>
      <li><strong>Tier 1 (Base Rate):</strong> $3.75 per $500 (0.75% of sale price) – <strong>63% increase</strong></li>
      <li><strong>Tier 2 (Residential over $800,000):</strong> Additional $3.75 per $500 on amount exceeding $800,000</li>
      <li>Example: $500,000 home = $3,750 (increase of $1,450)</li>
      <li>Example: $1,000,000 home = $7,500 base + $1,500 (on $200K over $800K) = $9,000 total</li>
    </ul>

    <h3>Rate Comparison: Before vs After October 2025</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Before Oct 1, 2025</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">After Oct 1, 2025</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Increase</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,380</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,250</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$870 (63%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,300</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$1,450 (63%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,450</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,625</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$2,175 (63%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,520</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$3,480 (63%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$14,760</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$24,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$9,240 (63%)</td>
      </tr>
    </table>

    <h3>Who Pays Rhode Island Transfer Tax?</h3>
    <p><strong>Sellers are responsible</strong> for paying the conveyance tax in Rhode Island by default</p>
    <ul>
      <li>Standard practice: Seller pays entire documentary stamp tax</li>
      <li>Negotiable: Can be allocated differently in purchase agreement</li>
      <li>Competitive markets: Buyers may agree to pay to strengthen offer</li>
      <li>Seller concessions: Sometimes seller offers to cover buyer's closing costs instead</li>
    </ul>

    <p><strong>Payment timing:</strong> Tax must be paid before deed can be recorded at closing</p>
    <p><strong>Proof of payment:</strong> Documentary stamps are stamped on the recorded deed as evidence of payment</p>

    <h3>Residential Property Tier 2 Surcharge</h3>
    <p>Properties classified as <strong>residential</strong> and valued <strong>over $800,000</strong> pay an additional tier 2 rate:</p>
    <ul>
      <li>Applies only to residential real estate (based on local city/town classification)</li>
      <li>Commercial properties: Pay only Tier 1 rate regardless of value</li>
      <li>$800,000 threshold will be adjusted annually for inflation starting January 1, 2026</li>
    </ul>

    <p><strong>Residential property calculation example ($1.2M home, after Oct 2025):</strong></p>
    <ul>
      <li>First $800,000: ($800,000 ÷ 500) × $3.75 = $6,000</li>
      <li>Next $400,000: ($400,000 ÷ 500) × $3.75 = $3,000</li>
      <li><strong>Total: $9,000</strong> (0.75% effective rate)</li>
    </ul>

    <h3>Exemptions and Reduced Rates</h3>
    <p>Certain transfers may be exempt or pay reduced rates:</p>
    <ul>
      <li><strong>Consideration of $100 or less:</strong> No transfer tax owed</li>
      <li>Transfers between spouses or domestic partners</li>
      <li>Divorce-related transfers pursuant to court order</li>
      <li>Inheritance through estate/probate</li>
      <li>Gifts with no valuable consideration</li>
      <li>Transfers to government entities</li>
      <li>Foreclosure deeds</li>
      <li>Corrections to previously recorded deeds</li>
    </ul>

    <h3>Important Date: October 1, 2025</h3>
    <p><strong>The closing date determines which rate applies, not the contract signing date</strong></p>
    <ul>
      <li>Close before October 1, 2025: Pay $2.30 per $500 rate</li>
      <li>Close on or after October 1, 2025: Pay $3.75 per $500 rate</li>
      <li>Strategic timing can save thousands on higher-value properties</li>
    </ul>

    <p><strong>Example: $600,000 home sale</strong></p>
    <ul>
      <li>Close September 30, 2025: $2,760 transfer tax</li>
      <li>Close October 1, 2025: $4,500 transfer tax</li>
      <li><strong>Difference: $1,740 by closing one day earlier</strong></li>
    </ul>

    <h3>How Rhode Island Compares to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Rhode Island (Before Oct 2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.46%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rhode Island (After Oct 2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Massachusetts</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.456%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,280</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Connecticut</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <h3>Recording Process</h3>
    <p>Transfer tax payment and deed recording occur simultaneously:</p>
    <ol>
      <li>Closing attorney calculates exact transfer tax</li>
      <li>Seller pays tax at closing (included in settlement statement)</li>
      <li>Tax payment submitted to city/town recorder or Register of Deeds</li>
      <li>Official stamps "documentary stamps" on deed as proof of payment</li>
      <li>Deed recorded in land evidence records as public document</li>
    </ol>

    <h3>Recording Fees (Separate from Transfer Tax)</h3>
    <p>In addition to transfer tax, Rhode Island charges deed recording fees:</p>
    <ul>
      <li>First page: $42.50 (state fee)</li>
      <li>Additional pages: $1.50 per page</li>
      <li>Typical total: $45-$60 for standard deed</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>IRS position:</strong> Transfer taxes are NOT deductible as a "tax" on federal income tax returns</p>
    <p><strong>Alternative benefit:</strong> Sellers can include transfer tax in their property's cost basis to reduce capital gains tax liability</p>
    <p>Example: If you paid $3,750 in transfer tax when selling, add it to your original purchase costs to lower your reportable capital gain</p>

    <h3>Seller Closing Costs in Rhode Island</h3>
    <p>Typical seller costs on a $500,000 home (after October 1, 2025):</p>
    <ul>
      <li>Real estate commission (5-6%): $25,000-$30,000</li>
      <li>Documentary stamps (transfer tax): $3,750</li>
      <li>Attorney fees: $800-$1,500</li>
      <li>Recording fees: $50-$75</li>
      <li>Title search: $200-$400</li>
      <li>Municipal lien certificate: $25-$50</li>
      <li>Property tax prorations: Varies</li>
      <li><strong>Total: ~$29,825-$35,775 (5.97-7.16%)</strong></li>
    </ul>

    <h3>Legislative Background</h3>
    <p>Rhode Island's transfer tax increase was enacted in the 2026 state budget (H.6001) to address:</p>
    <ul>
      <li>State revenue shortfalls</li>
      <li>Affordable housing funding gaps</li>
      <li>Infrastructure maintenance needs</li>
      <li>Property tax relief initiatives</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Total Rhode Island conveyance tax (documentary stamps)</li>
      <li>Applicable rate based on closing date and property value</li>
      <li>Tier 1 and Tier 2 breakdown (for residential over $800K)</li>
      <li>Effective tax rate as percentage of sale price</li>
      <li>Comparison of old vs new rates</li>
      <li>Potential savings by closing before October 1, 2025</li>
    </ul>

    <h3>Tips for Rhode Island Sellers</h3>
    <p>Consider closing before October 1, 2025 to save 63% on transfer tax. Budget $3.75 per $500 for transactions closing after October 1, 2025. Factor transfer tax into net proceeds calculations when pricing property. Consult with closing attorney about timing strategies. Verify whether property qualifies for any exemptions. Consider offering other concessions instead of paying buyer's transfer tax.</p>

    <h3>Future Adjustments</h3>
    <p>Starting January 1, 2026, the $800,000 Tier 2 threshold will be adjusted annually for inflation using the Consumer Price Index (CPI). This means the threshold will gradually increase over time to account for rising property values.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'closingAfterOct2025',
        label: 'Closing Date',
        type: 'select',
        options: [
          { value: 'before', label: 'Before October 1, 2025 ($2.30/$500)' },
          { value: 'after', label: 'On/After October 1, 2025 ($3.75/$500)' },
        ],
        defaultValue: 'after',
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial (Tier 2 exempt)' },
        ],
        defaultValue: 'residential',
      },
    ],
    results: [
      { label: 'Total Transfer Tax (Documentary Stamps)', isCurrency: true },
      { label: 'Tier 1 Tax (Base)', isCurrency: true },
      { label: 'Tier 2 Tax (Amount Over $800K)', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
      { label: 'Old Rate Comparison', isCurrency: true },
      { label: 'Savings/Additional Cost vs Old Rate', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, closingAfterOct2025, propertyType } = values;

      const ratePerSection = closingAfterOct2025 === 'before' ? 2.30 : 3.75;
      const oldRate = 2.30;

      let tier1Tax = 0;
      let tier2Tax = 0;
      let totalTax = 0;

      if (propertyType === 'commercial' || salePrice <= 800000) {
        tier1Tax = (salePrice / 500) * ratePerSection;
        tier2Tax = 0;
        totalTax = tier1Tax;
      } else {
        tier1Tax = (800000 / 500) * ratePerSection;
        tier2Tax = ((salePrice - 800000) / 500) * ratePerSection;
        totalTax = tier1Tax + tier2Tax;
      }

      const oldRateTotal = propertyType === 'commercial' || salePrice <= 800000
        ? (salePrice / 500) * oldRate
        : (800000 / 500) * oldRate + ((salePrice - 800000) / 500) * oldRate;

      const savingsOrCost = oldRateTotal - totalTax;
      const effectiveTaxRate = ((totalTax / salePrice) * 100).toFixed(3) + '%';

      return [
        { label: 'Total Transfer Tax (Documentary Stamps)', value: totalTax.toFixed(2), isCurrency: true },
        { label: 'Tier 1 Tax (Base)', value: tier1Tax.toFixed(2), isCurrency: true },
        { label: 'Tier 2 Tax (Amount Over $800K)', value: tier2Tax.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: effectiveTaxRate },
        { label: 'Old Rate Comparison', value: oldRateTotal.toFixed(2), isCurrency: true },
        { 
          label: 'Savings/Additional Cost vs Old Rate', 
          value: savingsOrCost >= 0 
            ? `$${savingsOrCost.toFixed(2)} saved` 
            : `$${Math.abs(savingsOrCost).toFixed(2)} additional cost`
        },
      ];
    },
  },
};
