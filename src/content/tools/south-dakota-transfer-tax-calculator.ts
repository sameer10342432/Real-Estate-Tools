import { CalculatorContent } from '@/types';

export const SOUTH_DAKOTA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'South Dakota Transfer Tax Calculator - Real Estate Deed Stamps',
  description: 'Calculate South Dakota real estate transfer tax and deed stamps at $0.50 per $500 of sale price',
  slug: 'south-dakota-transfer-tax-calculator',
  icon: '🦌',
  category: 'Seller Tools',
  metaTitle: 'South Dakota Transfer Tax Calculator 2025 - $0.50 per $500 Deed Stamps',
  metaDescription: 'Free South Dakota transfer tax calculator. Calculate deed stamps at $0.50 per $500. Seller typically pays. Includes exemptions and Certificate of Real Estate Value.',
  article: {
    title: 'Understanding South Dakota Real Estate Transfer Tax & Deed Stamps',
    content: `
    <h2>South Dakota Transfer Tax Guide</h2>
    <p>South Dakota has one of the <strong>lowest real estate transfer taxes</strong> in the United States at just <strong>$0.50 per $500</strong> (0.1% of sale price). This minimal transfer tax makes South Dakota an attractive state for both buyers and sellers.</p>
    
    <h3>South Dakota Transfer Tax Rate</h3>
    <p><strong>State rate: $0.50 per $500</strong> of the property's sale price</p>
    <ul>
      <li>Effective rate: 0.1% of sale price</li>
      <li>Example: $300,000 home = $300 transfer tax</li>
      <li>Example: $500,000 home = $500 transfer tax</li>
      <li>Example: $1,000,000 property = $1,000 transfer tax</li>
    </ul>

    <p><strong>Local fees:</strong> Some South Dakota cities may charge additional local recording fees on top of the state transfer tax</p>
    <ul>
      <li>Most localities: No additional transfer taxes</li>
      <li>Check with your county Register of Deeds for local fees</li>
      <li>Recording fees separate from transfer tax (typically $30-$50)</li>
    </ul>

    <h3>Who Pays South Dakota Transfer Tax?</h3>
    <p><strong>Seller typically pays</strong> the transfer tax in South Dakota</p>
    <ul>
      <li>Standard practice: Seller responsible for transfer tax</li>
      <li>Negotiable: Can be allocated differently in purchase contract</li>
      <li>Sometimes split 50/50 between buyer and seller</li>
      <li>Buyer's market: Seller may pay to attract offers</li>
      <li>Seller's market: Buyer may agree to pay as concession</li>
    </ul>

    <h3>Certificate of Real Estate Value (PT 56 Form)</h3>
    <p>South Dakota requires a <strong>Certificate of Real Estate Value (Form PT 56)</strong> with every deed recording:</p>

    <p><strong>What is Form PT 56?</strong></p>
    <ul>
      <li>Official state form disclosing property transaction details</li>
      <li>Used by Department of Revenue for property tax administration</li>
      <li>Required before deed can be recorded with county</li>
      <li>Ensures accurate property valuations for tax assessments</li>
    </ul>

    <p><strong>Information required on PT 56:</strong></p>
    <ul>
      <li>Property sale price (full consideration)</li>
      <li>Property address and legal description</li>
      <li>Buyer and seller names and addresses</li>
      <li>Transaction type (sale, gift, inheritance, etc.)</li>
      <li>Property characteristics and improvements</li>
      <li>Financing details and terms</li>
    </ul>

    <p><strong>Who completes it:</strong></p>
    <ul>
      <li>Typically completed by closing attorney or title company</li>
      <li>Filed simultaneously with deed recording</li>
      <li>Submitted to county Register of Deeds</li>
      <li>No separate filing fee (included with recording)</li>
    </ul>

    <h3>South Dakota Transfer Tax Exemptions</h3>
    <p>The following transfers are <strong>exempt</strong> from South Dakota transfer tax:</p>

    <p><strong>Family & Marital:</strong></p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Parent-to-child transfers (with only nominal consideration)</li>
      <li>Divorce or legal separation transfers (pursuant to court order)</li>
    </ul>

    <p><strong>Estate & Gifts:</strong></p>
    <ul>
      <li>Pure gifts (no consideration exchanged)</li>
      <li>Inheritance through probate/estate distribution</li>
      <li>Transfer-on-death deeds</li>
    </ul>

    <p><strong>Foreclosure & Distressed:</strong></p>
    <ul>
      <li>Deeds of foreclosure</li>
      <li>Deeds in lieu of foreclosure</li>
      <li>Sheriff's sale deeds</li>
    </ul>

    <p><strong>Government & Corrections:</strong></p>
    <ul>
      <li>Transfers to/from government entities</li>
      <li>Corrections to previously recorded deeds (no new consideration)</li>
      <li>Quitclaim deeds correcting errors</li>
    </ul>

    <h3>How South Dakota Compares to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300K Home</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>South Dakota</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>0.1%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$300</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$500</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">North Dakota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nebraska</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.225%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$675</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,125</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Minnesota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.33%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$990</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,650</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <p><strong>South Dakota ranks among the lowest transfer tax states,</strong> saving thousands compared to high-tax states</p>

    <h3>Recording Fees (Separate from Transfer Tax)</h3>
    <p>In addition to transfer tax, South Dakota counties charge recording fees:</p>
    <ul>
      <li>Deed recording: $30-$50 (varies by county)</li>
      <li>Mortgage recording: $30-$50</li>
      <li>Certificate of Real Estate Value: No separate fee</li>
      <li>Total typical recording costs: $60-$100</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>Federal taxes:</strong> Transfer taxes are NOT deductible as a "tax" on Schedule A</p>
    <p><strong>Capital gains benefit:</strong> Sellers can add transfer tax to their property's cost basis, reducing taxable capital gains</p>
    <p>Example: $500 transfer tax can reduce your taxable gain by $500, saving ~$75-$100 in capital gains tax</p>

    <h3>South Dakota Seller Closing Costs</h3>
    <p>Typical seller costs on a $300,000 South Dakota home:</p>
    <ul>
      <li>Real estate commission (5-6%): $15,000-$18,000</li>
      <li>Transfer tax: $300</li>
      <li>Title insurance: $800-$1,200</li>
      <li>Recording fees: $30-$50</li>
      <li>Attorney fees (if used): $500-$1,000</li>
      <li>Property tax prorations: Varies</li>
      <li>Survey (if seller pays): $300-$600</li>
      <li><strong>Total: ~$16,930-$21,150 (5.6-7.1%)</strong></li>
    </ul>

    <p>South Dakota's low transfer tax contributes to overall affordable closing costs</p>

    <h3>Payment Process</h3>
    <ol>
      <li>Transfer tax calculated at closing (sale price ÷ 500 × $0.50)</li>
      <li>Seller pays transfer tax (unless negotiated otherwise)</li>
      <li>Certificate of Real Estate Value (PT 56) completed</li>
      <li>Both documents submitted to county Register of Deeds</li>
      <li>Transfer tax payment verified before deed recording</li>
      <li>Deed recorded in public land records</li>
    </ol>

    <h3>Special Transaction Types</h3>
    <p><strong>Quitclaim deeds:</strong> Transfer tax based on actual consideration; exempt if correcting errors with no new consideration</p>
    <p><strong>New construction:</strong> Transfer tax applies to full purchase price from builder</p>
    <p><strong>1031 exchanges:</strong> Transfer tax still required even though federal taxes deferred</p>
    <p><strong>Contract for deed:</strong> Transfer tax typically paid when deed finally transfers</p>
    <p><strong>LLC/entity transfers:</strong> May avoid transfer tax if no actual ownership change; consult attorney</p>

    <h3>South Dakota Property Tax Context</h3>
    <p>While transfer tax is low, consider South Dakota property taxes:</p>
    <ul>
      <li>Average effective rate: 1.12% of home value annually</li>
      <li>Property reassessed upon sale in some counties</li>
      <li>Owner-occupied property gets lower tax classification</li>
      <li>Property taxes due in two installments (May 1 and November 1)</li>
    </ul>

    <h3>Why South Dakota's Transfer Tax is Low</h3>
    <p>South Dakota maintains minimal transfer tax as part of its pro-business, low-tax philosophy:</p>
    <ul>
      <li>No state income tax</li>
      <li>No inheritance or estate tax</li>
      <li>Low regulatory burden</li>
      <li>Minimal transaction costs to promote real estate activity</li>
      <li>Attracts retirees and businesses from high-tax states</li>
    </ul>

    <h3>County Variations</h3>
    <p><strong>Major South Dakota counties:</strong></p>
    <ul>
      <li>Minnehaha County (Sioux Falls): Standard $0.50/$500 rate</li>
      <li>Pennington County (Rapid City): Standard $0.50/$500 rate</li>
      <li>Lincoln County: Standard $0.50/$500 rate</li>
      <li>Brookings County: Standard $0.50/$500 rate</li>
    </ul>
    <p>Most counties follow state rate with no additional local transfer taxes</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price to calculate:</p>
    <ul>
      <li>South Dakota transfer tax ($0.50 per $500)</li>
      <li>Effective tax rate as percentage</li>
      <li>Comparison to neighboring states (North Dakota, Nebraska, Minnesota)</li>
      <li>Savings vs. high-tax states like Delaware</li>
      <li>Total transfer costs including recording fees</li>
    </ul>

    <h3>Tips for South Dakota Property Transactions</h3>
    <p>Budget just $0.50 per $500 for transfer tax (~0.1% of sale price). Complete Certificate of Real Estate Value accurately to avoid recording delays. Verify who pays transfer tax in purchase contract (seller typically pays). Consider South Dakota's low transfer tax when pricing property. Add $30-$50 for recording fees in total closing cost estimates. Claim exemption if transaction qualifies (divorce, inheritance, gift). Highlight low transfer tax to out-of-state buyers comparing costs.</p>

    <h3>Resources</h3>
    <p><strong>South Dakota Department of Revenue:</strong> Official transfer tax guidance and PT 56 forms</p>
    <p><strong>County Register of Deeds:</strong> Verify exact rates and recording fees for your county</p>
    <p><strong>Title Companies:</strong> Provide comprehensive closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Advise on exemptions and complex transactions</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'whoPays',
        label: 'Who Pays Transfer Tax?',
        type: 'select',
        options: [
          { value: 'seller', label: 'Seller pays (South Dakota custom)' },
          { value: '50/50', label: '50/50 split' },
          { value: 'buyer', label: 'Buyer pays' },
        ],
        defaultValue: 'seller',
      },
    ],
    results: [
      { label: 'South Dakota Transfer Tax', isCurrency: true },
      { label: 'Recording Fees (estimated)', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
      { label: 'Buyer Share', isCurrency: true },
      { label: 'Seller Share', isCurrency: true },
      { label: 'Savings vs Delaware (4%)', isCurrency: true },
      { label: 'Savings vs Nebraska (0.225%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, whoPays } = values;

      const transferTax = (salePrice / 500) * 0.50;
      const recordingFees = 40;
      const totalCosts = transferTax + recordingFees;
      const effectiveTaxRate = ((transferTax / salePrice) * 100).toFixed(3) + '%';

      let buyerShare = 0;
      let sellerShare = 0;

      if (whoPays === 'seller') {
        sellerShare = transferTax;
      } else if (whoPays === '50/50') {
        buyerShare = transferTax / 2;
        sellerShare = transferTax / 2;
      } else {
        buyerShare = transferTax;
      }

      const delawareTransferTax = salePrice * 0.04;
      const nebraskaTransferTax = salePrice * 0.00225;
      const savingsVsDelaware = delawareTransferTax - transferTax;
      const savingsVsNebraska = nebraskaTransferTax - transferTax;

      return [
        { label: 'South Dakota Transfer Tax', value: transferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees (estimated)', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: effectiveTaxRate },
        { label: 'Buyer Share', value: buyerShare.toFixed(2), isCurrency: true },
        { label: 'Seller Share', value: sellerShare.toFixed(2), isCurrency: true },
        { label: 'Savings vs Delaware (4%)', value: savingsVsDelaware.toFixed(2), isCurrency: true },
        { label: 'Savings vs Nebraska (0.225%)', value: savingsVsNebraska.toFixed(2), isCurrency: true },
      ];
    },
  },
};
