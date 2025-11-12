import { CalculatorContent } from '@/types';

export const DELAWARE_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Delaware Transfer Tax Calculator - 4% Realty Transfer Tax Calculator',
  description: 'Calculate Delaware real estate transfer tax (4% total) with first-time homebuyer exemption and 50/50 split between buyer and seller',
  slug: 'delaware-transfer-tax-calculator',
  icon: '🏖️',
  category: 'Seller Tools',
  metaTitle: 'Delaware Transfer Tax Calculator 2025 - 4% Realty Transfer Tax',
  metaDescription: 'Free Delaware transfer tax calculator. Calculate 4% realty transfer tax ($4 per $100) with first-time homebuyer exemption. Includes buyer/seller split calculator.',
  article: {
    title: 'Understanding Delaware Real Estate Transfer Tax & First-Time Buyer Exemption',
    content: `
    <h2>Delaware Transfer Tax Guide</h2>
    <p>Delaware has one of the <strong>highest real estate transfer taxes</strong> in the United States at <strong>4% of the property sale price</strong>. This significant cost is typically split 50/50 between buyer and seller, though first-time homebuyers can receive substantial exemptions.</p>
    
    <h3>Delaware Transfer Tax Rate</h3>
    <p><strong>Total rate: 4%</strong> of property sale price (expressed as <strong>$4.00 per $100</strong> of value)</p>

    <p><strong>Breakdown:</strong></p>
    <ul>
      <li><strong>State portion:</strong> 2.5% ($2.50 per $100)</li>
      <li><strong>County/municipal portion:</strong> 1.5% ($1.50 per $100)</li>
      <li><strong>Combined:</strong> 4% ($4.00 per $100)</li>
    </ul>

    <p><em>Note: If property is located outside municipal limits with no local transfer tax, state rate is 3% total</em></p>

    <h3>Standard 50/50 Split</h3>
    <p><strong>Delaware law splits transfer tax equally by custom:</strong></p>
    <ul>
      <li><strong>Buyer pays:</strong> 2% (1.25% state + 0.75% county)</li>
      <li><strong>Seller pays:</strong> 2% (1.25% state + 0.75% county)</li>
    </ul>

    <p><strong>Important:</strong> This split is customary practice in Delaware but is <strong>negotiable</strong> in the purchase contract</p>
    <ul>
      <li>Seller's market: Buyers may agree to pay more/all transfer tax</li>
      <li>Buyer's market: Sellers may pay more to incentivize sales</li>
      <li>Quick sales: Sellers sometimes pay entire 4% to attract offers</li>
    </ul>

    <h3>First-Time Home Buyer Exemption</h3>
    <p>Delaware offers a significant transfer tax reduction for qualified first-time homebuyers:</p>

    <p><strong>State exemption (0.5%):</strong></p>
    <ul>
      <li>Applies to first <strong>$400,000</strong> of purchase price</li>
      <li>Buyer's state portion drops from 1.25% to <strong>0.75%</strong></li>
      <li>Saves $2,000 on a $400,000 purchase</li>
    </ul>

    <p><strong>County exemption (0.75%):</strong></p>
    <ul>
      <li>Available in all three Delaware counties (New Castle, Kent, Sussex)</li>
      <li>Only applies to properties <strong>outside municipal limits</strong></li>
      <li>Buyer's county portion drops from 0.75% to <strong>0%</strong></li>
    </ul>

    <p><strong>Combined first-time buyer rate:</strong></p>
    <ul>
      <li><strong>Inside municipal limits:</strong> Buyer pays 0.75% (vs. 2% normally) – saves 1.25%</li>
      <li><strong>Outside municipal limits:</strong> Buyer pays 0.75% (vs. 2% normally) – full county exemption included</li>
      <li>Seller still pays standard 2% regardless</li>
    </ul>

    <h3>First-Time Buyer Qualification Requirements</h3>
    <p>To qualify for Delaware's first-time homebuyer transfer tax exemption:</p>
    <ul>
      <li><strong>Never owned residential real estate</strong> (including investment properties, anywhere in US)</li>
      <li><strong>Must occupy property within 90 days</strong> of closing as primary residence</li>
      <li><strong>$400,000 cap:</strong> Exemption only applies to first $400,000; amounts above pay full 1.25% state rate</li>
      <li><strong>Apply at closing:</strong> Claim exemption when filing transfer tax declaration</li>
    </ul>

    <h3>Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $300,000 Home - Regular Buyer</strong></p>
    <ul>
      <li>Total transfer tax: $300,000 × 4% = <strong>$12,000</strong></li>
      <li>Buyer pays: $6,000 (2%)</li>
      <li>Seller pays: $6,000 (2%)</li>
    </ul>

    <p><strong>Example 2: $300,000 Home - First-Time Buyer (Inside Municipality)</strong></p>
    <ul>
      <li>Buyer's tax: $300,000 × 0.75% = <strong>$2,250</strong></li>
      <li>Seller's tax: $300,000 × 2% = <strong>$6,000</strong></li>
      <li>Total: $8,250</li>
      <li><strong>First-time buyer saves: $3,750</strong></li>
    </ul>

    <p><strong>Example 3: $600,000 Home - First-Time Buyer</strong></p>
    <ul>
      <li>First $400,000: $400,000 × 0.75% = $3,000</li>
      <li>Next $200,000: $200,000 × 1.25% = $2,500 (no exemption above $400K)</li>
      <li>Buyer total: <strong>$5,500</strong></li>
      <li>Seller: $600,000 × 2% = <strong>$12,000</strong></li>
      <li>Saves $6,500 vs. non-first-time buyer (who would pay $12,000)</li>
    </ul>

    <p><strong>Example 4: $1,000,000 Luxury Home - Standard Split</strong></p>
    <ul>
      <li>Total transfer tax: $1,000,000 × 4% = <strong>$40,000</strong></li>
      <li>Buyer pays: $20,000</li>
      <li>Seller pays: $20,000</li>
    </ul>

    <h3>How Delaware Compares to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500K Home</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1M Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Delaware</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>4%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$20,000</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$40,000</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Jersey</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.78-1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,900-$7,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,800-$15,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Maryland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.5-1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500-$7,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,000-$15,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <p><strong>Delaware ranks #1 for highest transfer tax</strong> among all US states</p>

    <h3>Transfer Tax History & Rate Increase</h3>
    <p><strong>August 1, 2017:</strong> Delaware increased transfer tax from 3% to 4%</p>
    <p><strong>August 30, 2018:</strong> First-time homebuyer exemption enacted (retroactive to Aug 1, 2017)</p>
    <p>The 2017 increase added $10,000 to closing costs on a $1M property sale</p>

    <h3>Exemptions and Special Cases</h3>
    <p>Certain transfers may be exempt or reduced:</p>
    <ul>
      <li>Transfers between spouses or domestic partners</li>
      <li>Divorce-related transfers pursuant to court decree</li>
      <li>Inheritance through estate/probate</li>
      <li>Gifts with no valuable consideration (proper gift tax reporting required)</li>
      <li>Transfers to government entities</li>
      <li>Foreclosure deeds</li>
      <li>Corrections to previously recorded deeds</li>
      <li>First-time homebuyers (partial exemption on first $400K)</li>
    </ul>

    <h3>Payment and Filing Process</h3>
    <ol>
      <li>Transfer tax calculated at closing by title company or attorney</li>
      <li>Buyer and seller each pay their portion (2% each by custom)</li>
      <li>Tax paid to county Recorder of Deeds before deed recording</li>
      <li>Realty Transfer Tax Declaration filed with deed</li>
      <li>Deed stamped as "tax paid" and recorded in land records</li>
      <li>First-time buyers must claim exemption on declaration form</li>
    </ol>

    <h3>Recording Fees (Separate from Transfer Tax)</h3>
    <p>Delaware counties charge additional recording fees:</p>
    <ul>
      <li>Deed recording: $40-$75 depending on county and pages</li>
      <li>Mortgage recording: $125-$200</li>
      <li>Total typical recording costs: $165-$275</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>IRS position:</strong> Transfer taxes are NOT deductible as a "tax" on Schedule A</p>
    <p><strong>Alternative benefit for sellers:</strong> Include transfer tax in property's cost basis to reduce capital gains tax</p>
    <p>Example: $20,000 transfer tax can reduce your taxable gain by $20,000, saving ~$3,000-$4,000 in federal capital gains tax (15-20% rate)</p>

    <h3>Delaware Seller Closing Costs</h3>
    <p>Typical seller costs on a $500,000 Delaware home:</p>
    <ul>
      <li>Real estate commission (5-6%): $25,000-$30,000</li>
      <li>Transfer tax (seller's 2%): $10,000</li>
      <li>Attorney fees: $800-$1,500</li>
      <li>Title insurance (if seller pays): $2,000-$3,000</li>
      <li>Recording fees: $75-$150</li>
      <li>Property tax prorations: Varies</li>
      <li>Municipal lien certificate: $50-$100</li>
      <li><strong>Total: ~$37,925-$44,750 (7.6-9.0%)</strong></li>
    </ul>

    <p>Delaware has some of the highest seller closing costs in the nation primarily due to the 4% transfer tax</p>

    <h3>Strategic Considerations</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Budget 2% of sale price for transfer tax in net proceeds calculation</li>
      <li>Consider offering to pay buyer's share to attract offers (costs 4% total)</li>
      <li>Market to first-time buyers who receive transfer tax exemptions</li>
      <li>Price property accounting for 9% total closing costs</li>
    </ul>

    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>First-time buyers should claim exemption to save $2,000+ on first $400K</li>
      <li>Budget 2% for transfer tax in closing cost estimates</li>
      <li>Negotiate who pays transfer tax in competitive markets</li>
      <li>Consider properties just under $400K to maximize first-time exemption value</li>
    </ul>

    <h3>Legislative Background</h3>
    <p>Delaware's transfer tax funds:</p>
    <ul>
      <li>State general fund</li>
      <li>County and municipal operations</li>
      <li>Affordable housing initiatives (via first-time buyer credit)</li>
      <li>Infrastructure and public services</li>
    </ul>

    <p>The 2017 increase to 4% was enacted to address state budget shortfalls and infrastructure needs</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Total Delaware transfer tax (4% standard rate)</li>
      <li>Buyer's share (2% or reduced for first-time buyers)</li>
      <li>Seller's share (2% standard)</li>
      <li>First-time homebuyer exemption savings</li>
      <li>State and county/municipal breakdown</li>
      <li>Custom allocation options (seller pays all, buyer pays all, 50/50)</li>
    </ul>

    <h3>Delaware County Information</h3>
    <p><strong>New Castle County:</strong> Includes Wilmington, Newark, most populous county</p>
    <p><strong>Kent County:</strong> Includes Dover (state capital), central Delaware</p>
    <p><strong>Sussex County:</strong> Includes beach towns (Rehoboth, Dewey, Bethany)</p>

    <h3>Tips for Delaware Property Transactions</h3>
    <p>First-time buyers: Claim exemption at closing to save thousands. Budget 2% of purchase price for transfer tax (if not exempt). Include transfer tax in all closing cost calculators. Verify first-time buyer qualification before relying on exemption. Consider timing: Transfer tax due regardless of financing contingencies. Negotiate allocation in purchase agreement, not at closing. Factor Delaware's high transfer tax into affordability calculations.</p>

    <h3>Resources</h3>
    <p><strong>Delaware Division of Revenue:</strong> Official transfer tax guidance and first-time buyer credit info</p>
    <p><strong>County Recorder of Deeds:</strong> Verify exact rates and recording fees for your county</p>
    <p><strong>Title Companies:</strong> Provide detailed closing cost estimates including transfer tax</p>
    <p><strong>Real Estate Attorneys:</strong> Advise on exemptions, negotiations, and tax planning</p>
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
        name: 'firstTimeBuyer',
        label: 'First-Time Homebuyer?',
        type: 'select',
        options: [
          { value: 'no', label: 'No - Standard 2%/2% split' },
          { value: 'yes', label: 'Yes - Buyer gets exemption' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'location',
        label: 'Property Location',
        type: 'select',
        options: [
          { value: 'municipal', label: 'Inside municipality (1.5% county tax applies)' },
          { value: 'outside', label: 'Outside municipality (0.75% state, 0% county for first-time)' },
        ],
        defaultValue: 'municipal',
      },
      {
        name: 'splitOption',
        label: 'Who Pays Transfer Tax?',
        type: 'select',
        options: [
          { value: '50/50', label: '50/50 split (Delaware custom)' },
          { value: 'seller', label: 'Seller pays 100%' },
          { value: 'buyer', label: 'Buyer pays 100%' },
        ],
        defaultValue: '50/50',
      },
    ],
    results: [
      { label: 'Total Transfer Tax', isCurrency: true },
      { label: 'State Portion (2.5%)', isCurrency: true },
      { label: 'County/Municipal Portion (1.5%)', isCurrency: true },
      { label: 'Buyer Share', isCurrency: true },
      { label: 'Seller Share', isCurrency: true },
      { label: 'First-Time Buyer Savings', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, firstTimeBuyer, location, splitOption } = values;

      let buyerRate = 0.02; // 2% standard
      const sellerRate = 0.02; // 2% always for seller

      if (firstTimeBuyer === 'yes') {
        const exemptAmount = Math.min(salePrice, 400000);
        const overAmount = Math.max(0, salePrice - 400000);
        
        if (location === 'municipal') {
          buyerRate = 0.0075; // 0.75% total (0.75% state, 0% county on first $400K)
        } else {
          buyerRate = 0.0075; // 0.75% state only outside municipality
        }
        
        const buyerTaxExempt = exemptAmount * buyerRate;
        const buyerTaxOver = overAmount * 0.0125; // Full 1.25% state rate on amount over $400K
        var buyerTax = buyerTaxExempt + buyerTaxOver;
      } else {
        var buyerTax = salePrice * buyerRate;
      }

      const sellerTax = salePrice * sellerRate;
      const totalTax = buyerTax + sellerTax;

      const statePortion = salePrice * 0.025;
      const countyPortion = salePrice * 0.015;

      const standardBuyerTax = salePrice * 0.02;
      const firstTimeBuyerSavings = firstTimeBuyer === 'yes' ? standardBuyerTax - buyerTax : 0;

      let buyerShare = buyerTax;
      let sellerShare = sellerTax;

      if (splitOption === 'seller') {
        sellerShare = totalTax;
        buyerShare = 0;
      } else if (splitOption === 'buyer') {
        buyerShare = totalTax;
        sellerShare = 0;
      }

      const effectiveTaxRate = ((totalTax / salePrice) * 100).toFixed(2) + '%';

      return [
        { label: 'Total Transfer Tax', value: totalTax.toFixed(2), isCurrency: true },
        { label: 'State Portion (2.5%)', value: statePortion.toFixed(2), isCurrency: true },
        { label: 'County/Municipal Portion (1.5%)', value: countyPortion.toFixed(2), isCurrency: true },
        { label: 'Buyer Share', value: buyerShare.toFixed(2), isCurrency: true },
        { label: 'Seller Share', value: sellerShare.toFixed(2), isCurrency: true },
        { label: 'First-Time Buyer Savings', value: firstTimeBuyerSavings.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: effectiveTaxRate },
      ];
    },
  },
};
