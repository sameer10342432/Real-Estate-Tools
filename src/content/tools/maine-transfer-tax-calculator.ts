import { CalculatorContent } from '@/types';

export const MAINE_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Maine Transfer Tax Calculator - Real Estate Transfer Tax Rates',
  description: 'Calculate Maine real estate transfer tax with progressive rates for properties over $1 million effective November 2025',
  slug: 'maine-transfer-tax-calculator',
  icon: '🦞',
  category: 'Seller Tools',
  metaTitle: 'Maine Transfer Tax Calculator 2025 - Progressive Transfer Tax Rates',
  metaDescription: 'Free Maine transfer tax calculator. Calculate real estate transfer tax with new progressive rates ($2.20-$6.00 per $500) effective November 1, 2025.',
  article: {
    title: 'Understanding Maine Real Estate Transfer Tax & 2025 Rate Changes',
    content: `
    <h2>Maine Transfer Tax Guide</h2>
    <p>Maine imposes a <strong>real estate transfer tax</strong> on property sales, with significant rate changes taking effect <strong>November 1, 2025</strong>. The new progressive tax structure charges higher rates on luxury properties over $1 million to fund affordable housing programs.</p>
    
    <h3>Maine Transfer Tax Rates</h3>
    <p><strong>Current rates (through October 31, 2025):</strong></p>
    <ul>
      <li><strong>$2.20 per $500</strong> (0.44%) on all properties regardless of value</li>
      <li>Example: $500,000 home = $2,200 in transfer tax</li>
    </ul>

    <p><strong>New progressive rates (effective November 1, 2025):</strong></p>
    <ul>
      <li><strong>Properties ≤ $1 million:</strong> $2.20 per $500 (0.44%)</li>
      <li><strong>Properties > $1 million:</strong> $2.20 per $500 on first $1M + $6.00 per $500 (1.2%) on amount over $1M</li>
    </ul>

    <h3>Progressive Rate Examples</h3>
    <p><strong>Example 1: $750,000 Home (Under $1M threshold)</strong></p>
    <ul>
      <li>Before Nov 1, 2025: $3,300 (0.44%)</li>
      <li>After Nov 1, 2025: $3,300 (0.44%)</li>
      <li><strong>No change for properties under $1 million</strong></li>
    </ul>

    <p><strong>Example 2: $2,000,000 Luxury Home</strong></p>
    <ul>
      <li>Before Nov 1, 2025: $8,800 (0.44%)</li>
      <li>After Nov 1, 2025:
        <ul>
          <li>First $1,000,000 @ $2.20 per $500: $4,400</li>
          <li>Next $1,000,000 @ $6.00 per $500: $12,000</li>
          <li><strong>Total: $16,400 (0.82%)</strong></li>
        </ul>
      </li>
      <li>Increase: $7,600 (86% higher)</li>
    </ul>

    <p><strong>Example 3: $5,000,000 Estate</strong></p>
    <ul>
      <li>Before Nov 1, 2025: $22,000</li>
      <li>After Nov 1, 2025:
        <ul>
          <li>First $1M: $4,400</li>
          <li>Next $4M @ $6.00 per $500: $48,000</li>
          <li><strong>Total: $52,400</strong></li>
        </ul>
      </li>
      <li>Increase: $30,400 (138% higher)</li>
    </ul>

    <h3>Who Pays Maine Transfer Tax?</h3>
    <p><strong>Legal requirement:</strong> Tax is split <strong>50/50</strong> between buyer and seller by statute</p>
    <ul>
      <li>Grantor (seller): Pays 50%</li>
      <li>Grantee (buyer): Pays 50%</li>
    </ul>

    <p><strong>Negotiable in practice:</strong> While legally split, the allocation is negotiable in the purchase agreement</p>
    <ul>
      <li>Seller's market: Buyers may agree to pay full amount</li>
      <li>Buyer's market: Sellers may pay entire tax to attract offers</li>
      <li>Quick sales: Sellers often cover full tax as incentive</li>
    </ul>

    <h3>Maine Transfer Tax Exemptions</h3>
    <p>The following transfers are <strong>exempt</strong> from Maine transfer tax:</p>

    <p><strong>Family & Estate Transfers:</strong></p>
    <ul>
      <li>Transfers between spouses or domestic partners</li>
      <li>Transfer-on-death deeds (effective at death)</li>
      <li>Divorce or legal separation transfers pursuant to court order</li>
      <li>Inherited property through probate (no transfer tax)</li>
    </ul>

    <p><strong>Government & Public Purpose:</strong></p>
    <ul>
      <li>Transfers to/from U.S. government or State of Maine</li>
      <li>Property to Department of Transportation</li>
      <li>Maine Turnpike Authority acquisitions</li>
      <li>Nonprofit land conservation organizations transferring to government</li>
    </ul>

    <p><strong>Mortgage-Related:</strong></p>
    <ul>
      <li>Mortgage deeds and partial releases</li>
      <li>Deeds of foreclosure</li>
      <li>Deeds in lieu of foreclosure (mortgagor exempt only)</li>
      <li>Mortgage discharges</li>
    </ul>

    <p><strong>Business & Entity:</strong></p>
    <ul>
      <li>Name changes without ownership change</li>
      <li>Entity type changes (LLC to corp) with same beneficial owners</li>
      <li>Controlling interest transfers (separate tax may apply)</li>
    </ul>

    <p><strong>First-Time Homebuyers (Starting November 1, 2025):</strong></p>
    <ul>
      <li>Buyers receiving financial assistance through <strong>Maine State Housing Authority</strong> first-time homebuyer mortgage programs</li>
      <li><strong>Both buyer and seller</strong> are exempt from transfer tax</li>
      <li>Designed to reduce barriers to homeownership for first-time buyers</li>
    </ul>

    <h3>Real Estate Transfer Tax Declaration (RETTD)</h3>
    <p>All property transfers in Maine require filing a <strong>Real Estate Transfer Tax Declaration</strong> with the county Register of Deeds</p>
    <ul>
      <li>Must disclose full consideration (sale price)</li>
      <li>Declare exemption status if applicable</li>
      <li>Filed simultaneously with deed recording</li>
      <li>Tax payment due before deed can be recorded</li>
      <li>Declaration becomes public record</li>
    </ul>

    <h3>Where the Money Goes</h3>
    <p><strong>County retention:</strong> Counties keep 9.2% of collected transfer tax for administrative costs</p>
    <p><strong>State programs:</strong> Remaining 90.8% funds Maine State Housing Authority programs including:</p>
    <ul>
      <li>Affordable housing development</li>
      <li>First-time homebuyer assistance</li>
      <li>Rental assistance programs</li>
      <li>Housing rehabilitation grants</li>
      <li>Homeless prevention services</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>Federal taxes:</strong> Transfer taxes are NOT deductible as a "tax" on Schedule A</p>
    <p><strong>Capital gains reduction:</strong> Sellers can add transfer tax to property's cost basis, reducing taxable capital gains</p>
    <p>Example: If you paid $3,000 in transfer tax when selling, add it to your original purchase costs to lower reportable gain</p>

    <h3>Comparison to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500K Home</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2M Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Maine (before Nov 2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,800</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Maine (after Nov 2025)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.44-1.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$16,400</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vermont</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.47-3.62%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,350</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$29,400</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New Hampshire</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$80,000</td>
      </tr>
    </table>

    <h3>Special Situations</h3>
    <p><strong>1031 Exchanges:</strong> Still require transfer tax payment even though federal taxes deferred</p>
    <p><strong>Cash sales:</strong> Same transfer tax as financed purchases</p>
    <p><strong>New construction:</strong> Transfer tax applies to full purchase price</p>
    <p><strong>Mobile home parks:</strong> Exempt if sold to majority of park residents who are Maine residents</p>
    <p><strong>Quitclaim deeds:</strong> Transfer tax based on actual consideration exchanged</p>

    <h3>Recording Fees (Separate from Transfer Tax)</h3>
    <p>In addition to transfer tax, Maine counties charge recording fees:</p>
    <ul>
      <li>First page: $20-$30 (varies by county)</li>
      <li>Additional pages: $4-$5 per page</li>
      <li>Total recording costs: Typically $25-$50</li>
    </ul>

    <h3>Payment Process</h3>
    <p>Transfer tax must be paid at closing before deed recording:</p>
    <ol>
      <li>Closing attorney or title company calculates exact tax</li>
      <li>Payment included in closing settlement statement</li>
      <li>Tax paid to county Register of Deeds with deed submission</li>
      <li>County stamps deed as "paid" before recording</li>
      <li>Declaration filed as public record</li>
    </ol>

    <h3>Seller Closing Costs in Maine</h3>
    <p>Typical seller costs on a $400,000 home sale:</p>
    <ul>
      <li>Real estate commission (5-6%): $20,000-$24,000</li>
      <li>Transfer tax (50% if split): $880 (before Nov 2025) or $880 (under $1M)</li>
      <li>Attorney fees: $500-$1,500</li>
      <li>Title search: $200-$400</li>
      <li>Property tax prorations: Varies</li>
      <li>Deed preparation: $100-$300</li>
      <li><strong>Total: ~$21,680-$26,280 (5.4-6.6%)</strong></li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and closing date to calculate:</p>
    <ul>
      <li>Total Maine transfer tax based on applicable rate period</li>
      <li>Buyer's share (50% by statute, adjustable)</li>
      <li>Seller's share (50% by statute, adjustable)</li>
      <li>Effective tax rate as percentage</li>
      <li>Comparison of before/after November 2025 rates</li>
    </ul>

    <h3>Tips for Maine Property Transactions</h3>
    <p>Close before November 1, 2025 if selling luxury property to save on transfer tax. Negotiate who pays transfer tax in purchase agreement. First-time buyers should explore Maine State Housing Authority programs for exemption. Budget for both transfer tax and recording fees. Verify county-specific recording fee schedules. Consider transfer tax in net proceeds calculation.</p>

    <h3>Legislative Background</h3>
    <p>Maine's progressive transfer tax was enacted through LD 1082 to address affordable housing shortages. The law:</p>
    <ul>
      <li>Targets luxury properties over $1 million</li>
      <li>Exempts first-time homebuyers using MSHA programs</li>
      <li>Dedicates revenue to affordable housing initiatives</li>
      <li>Does not affect properties under $1 million</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 750000,
      },
      {
        name: 'closingAfterNov2025',
        label: 'Closing After November 1, 2025?',
        type: 'select',
        options: [
          { value: 'no', label: 'No - Use current rate ($2.20/$500)' },
          { value: 'yes', label: 'Yes - Use new progressive rates' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'splitPercentage',
        label: 'Buyer/Seller Split',
        type: 'select',
        options: [
          { value: '50/50', label: '50/50 (Legal default)' },
          { value: '0/100', label: 'Seller pays 100%' },
          { value: '100/0', label: 'Buyer pays 100%' },
        ],
        defaultValue: '50/50',
      },
    ],
    results: [
      { label: 'Total Transfer Tax', isCurrency: true },
      { label: 'Buyer Share', isCurrency: true },
      { label: 'Seller Share', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
      { label: 'Tax Per $500', isCurrency: false },
      { label: 'Old Rate (Before Nov 2025)', isCurrency: true },
      { label: 'Savings/Additional Cost', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, closingAfterNov2025, splitPercentage } = values;

      let totalTax = 0;
      let taxPer500 = '';

      if (closingAfterNov2025 === 'no') {
        totalTax = (salePrice / 500) * 2.20;
        taxPer500 = '$2.20';
      } else {
        if (salePrice <= 1000000) {
          totalTax = (salePrice / 500) * 2.20;
          taxPer500 = '$2.20';
        } else {
          const firstMillion = (1000000 / 500) * 2.20;
          const overMillion = ((salePrice - 1000000) / 500) * 6.00;
          totalTax = firstMillion + overMillion;
          taxPer500 = '$2.20 (≤$1M) + $6.00 (>$1M)';
        }
      }

      const oldRateTax = (salePrice / 500) * 2.20;
      const savingsOrCost = oldRateTax - totalTax;

      let buyerShare = 0;
      let sellerShare = 0;

      if (splitPercentage === '50/50') {
        buyerShare = totalTax / 2;
        sellerShare = totalTax / 2;
      } else if (splitPercentage === '0/100') {
        sellerShare = totalTax;
        buyerShare = 0;
      } else {
        buyerShare = totalTax;
        sellerShare = 0;
      }

      const effectiveTaxRate = ((totalTax / salePrice) * 100).toFixed(3) + '%';

      return [
        { label: 'Total Transfer Tax', value: totalTax.toFixed(2), isCurrency: true },
        { label: 'Buyer Share', value: buyerShare.toFixed(2), isCurrency: true },
        { label: 'Seller Share', value: sellerShare.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: effectiveTaxRate },
        { label: 'Tax Per $500', value: taxPer500 },
        { label: 'Old Rate (Before Nov 2025)', value: oldRateTax.toFixed(2), isCurrency: true },
        { 
          label: 'Savings/Additional Cost', 
          value: savingsOrCost >= 0 ? `$${savingsOrCost.toFixed(2)} saved` : `$${Math.abs(savingsOrCost).toFixed(2)} additional cost`
        },
      ];
    },
  },
};
