import { CalculatorContent } from '@/types';

export const ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Alabama Transfer Tax Calculator - Deed & Mortgage Tax Calculator',
  description: 'Calculate Alabama transfer tax, mortgage tax, and recording fees for real estate transactions',
  slug: 'alabama-transfer-tax-calculator',
  icon: '🏈',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Alabama Transfer Tax & Mortgage Tax',
    content: `
    <h2>Alabama Transfer Tax Guide</h2>
    <p>Alabama imposes both a <strong>transfer tax</strong> and a <strong>mortgage tax</strong> on real property transactions. These state-level taxes are key closing costs that buyers and sellers should budget for when buying or selling property in Alabama.</p>
    
    <h3>Alabama Transfer Tax Rates</h3>
    <p><strong>Transfer Tax Rate:</strong> $0.50 per $500 (or fraction thereof) of property value (0.10%)</p>
    <p><strong>Alternative expression:</strong> $1.00 per $1,000</p>
    <p><strong>Mortgage Tax Rate:</strong> $0.15 per $100 (or fraction thereof) of mortgage amount</p>
    <p>Alabama's transfer tax is one of the lowest in the nation, making it an attractive state for real estate transactions.</p>

    <h3>Who Pays Alabama Transfer Tax?</h3>
    <p>In Alabama, transfer tax payment responsibility varies by custom and negotiation:</p>
    <p><strong>Transfer Tax:</strong> Typically paid by the <strong>seller</strong>, though negotiable in the purchase agreement</p>
    <p><strong>Mortgage Tax:</strong> Paid by the <strong>buyer</strong> when obtaining a mortgage loan</p>
    <p>The taxes are collected at closing by the attorney or closing agent and remitted to the Alabama Department of Revenue.</p>

    <h3>Alabama Transfer Tax Calculation</h3>
    <p>Transfer tax is calculated by dividing the sale price by $500, rounding up to the nearest whole number, then multiplying by $0.50:</p>
    <p><strong>Formula:</strong> (Sale Price ÷ $500, rounded up) × $0.50</p>
    <p><strong>Example:</strong> $250,000 home = 500 increments × $0.50 = $250 transfer tax</p>

    <h3>Alabama Mortgage Tax Calculation</h3>
    <p>Mortgage tax is calculated by dividing the mortgage amount by $100, rounding up, then multiplying by $0.15:</p>
    <p><strong>Formula:</strong> (Mortgage Amount ÷ $100, rounded up) × $0.15</p>
    <p><strong>Example:</strong> $200,000 mortgage = 2,000 increments × $0.15 = $300 mortgage tax</p>

    <h3>Alabama Transfer Tax Examples</h3>
    <p><strong>Example 1: $200,000 Home with 80% Financing</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>Transfer Tax: 400 increments × $0.50 = $200</li>
      <li>Mortgage Amount: $160,000</li>
      <li>Mortgage Tax: 1,600 increments × $0.15 = $240</li>
      <li><strong>Total State Taxes: $440</strong></li>
    </ul>

    <p><strong>Example 2: $350,000 Home with 90% Financing</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>Transfer Tax: 700 increments × $0.50 = $350</li>
      <li>Mortgage Amount: $315,000</li>
      <li>Mortgage Tax: 3,150 increments × $0.15 = $472.50</li>
      <li><strong>Total State Taxes: $822.50</strong></li>
    </ul>

    <p><strong>Example 3: $500,000 Cash Purchase (No Mortgage)</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Transfer Tax: 1,000 increments × $0.50 = $500</li>
      <li>Mortgage Tax: $0 (cash purchase)</li>
      <li><strong>Total State Taxes: $500</strong></li>
    </ul>

    <h3>Alabama Recording Fees</h3>
    <p>In addition to transfer and mortgage taxes, Alabama counties charge recording fees:</p>
    <p><strong>Deed Recording:</strong> $15-$35 per document (varies by county)</p>
    <p><strong>Mortgage Recording:</strong> $15-$35 per document</p>
    <p><strong>Additional Pages:</strong> $1-$5 per page over base document</p>
    <p>Total recording fees typically range from $50-$150 depending on the county and document complexity.</p>

    <h3>No County or Municipal Transfer Taxes</h3>
    <p>Alabama does NOT allow counties or municipalities to impose additional transfer taxes beyond the state rate. The $0.50 per $500 transfer tax is uniform statewide.</p>

    <h3>Exemptions from Alabama Transfer Tax</h3>
    <p>Certain transactions are exempt from Alabama transfer and mortgage taxes:</p>
    <ul>
      <li>Transfers between spouses or to former spouse per divorce decree</li>
      <li>Foreclosure deeds and deeds in lieu of foreclosure</li>
      <li>Quitclaim deeds with no consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Gifts with no monetary consideration</li>
      <li>Inheritance and estate distributions</li>
      <li>Corrections deeds with no new consideration</li>
      <li>Transfers solely to create or terminate a joint tenancy</li>
    </ul>

    <h3>How Alabama Compares to Other States</h3>
    <p>At 0.10% transfer tax, Alabama has one of the lowest rates in the nation:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), Georgia (0.1% + county taxes)</li>
      <li><strong>Higher than:</strong> Texas (0%), Louisiana (0%), Utah (0%), Idaho (0%)</li>
      <li><strong>Similar to:</strong> Mississippi (0.15%), Colorado ($0.01 per $100 = 0.01%)</li>
    </ul>
    <p>The mortgage tax of $0.15 per $100 (0.15%) is moderate compared to other states that charge mortgage recording taxes.</p>

    <h3>Tax Deductibility of Alabama Transfer Costs</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Transfer tax counts as a selling expense, lowering your taxable profit</p>
    <p><strong>Mortgage tax:</strong> Not deductible but adds to your cost basis in the property</p>
    <p><strong>Example:</strong> Sell for $300,000, bought for $250,000, $300 in transfer tax → Taxable gain is $49,700 instead of $50,000</p>

    <h3>Alabama Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Alabama (on a $250,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $12,500-$15,000</li>
      <li>Transfer Tax (0.1%): $250</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Recording Fees: $50-$100</li>
      <li>Attorney Fees: $300-$800 (if used)</li>
      <li>Survey: $300-$500 (if required)</li>
      <li>Property Tax Prorations: Varies</li>
      <li><strong>Total: ~$14,200-$17,800 (5.7-7.1%)</strong></li>
    </ul>

    <h3>Alabama Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Alabama (on a $250,000 home with 80% financing):</p>
    <ul>
      <li>Mortgage Tax (0.15% of loan): $300</li>
      <li>Recording Fees: $50-$100</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Loan Origination (1%): $2,000</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $300-$500</li>
      <li>Survey: $300-$500</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$4,200-$5,250 (1.7-2.1%)</strong></li>
    </ul>

    <h3>Tips to Reduce Alabama Transfer Costs</h3>
    <p><strong>Negotiate in contract:</strong> Ask buyer to pay portion of transfer tax</p>
    <p><strong>Cash purchase:</strong> Eliminates $300+ in mortgage tax for buyers</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but still pay transfer tax</p>
    <p><strong>Shop title insurance:</strong> Alabama allows rate competition</p>
    <p><strong>Use attorney selectively:</strong> Not required but recommended for complex deals</p>
    <p><strong>Larger down payment:</strong> Reduces mortgage amount and thus mortgage tax</p>

    <h3>Alabama Real Estate Closing Process</h3>
    <p>Alabama uses <strong>attorney closings</strong> or <strong>title company closings</strong>, varying by region:</p>
    <ul>
      <li><strong>North Alabama:</strong> Attorney closings more common</li>
      <li><strong>Central/South Alabama:</strong> Title company closings prevalent</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Title Search:</strong> 30-60 years of ownership history reviewed</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing (TRID rule)</li>
      <li><strong>Settlement:</strong> Funds disbursed same day or next business day</li>
    </ul>

    <h3>Special Considerations for Alabama Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Low transfer tax makes Alabama attractive for flipping (0.1% vs 2%+ in other states)</li>
      <li>Mortgage tax applies to refinances and cash-out refinances</li>
      <li>1031 exchanges still require transfer tax payment on the sale</li>
      <li>Wholesaling: Assignment fees may be subject to transfer tax (consult attorney)</li>
      <li>LLC transfers typically exempt if no consideration changes hands</li>
      <li>Short-term rental income is taxable (state + local sales tax may apply)</li>
    </ul>

    <h3>Regional Variations in Alabama</h3>
    <p>While transfer tax is uniform statewide, other costs vary by region:</p>
    <p><strong>Birmingham/Huntsville/Mobile Metro:</strong></p>
    <ul>
      <li>Higher attorney fees ($500-$800)</li>
      <li>More competitive title insurance rates</li>
      <li>Faster closing timelines</li>
    </ul>
    <p><strong>Rural Alabama:</strong></p>
    <ul>
      <li>Lower attorney fees ($300-$500)</li>
      <li>Fewer title company options</li>
      <li>Survey requirements more common</li>
    </ul>

    <h3>Alabama vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Alabama</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.10%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Georgia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1% + county</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-$600</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tennessee</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.37 per $100</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,110</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mississippi</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.70 per $100</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,100</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Alabama transfer tax (deed tax)</li>
      <li>Alabama mortgage tax (if financing)</li>
      <li>Recording fees estimate</li>
      <li>Title insurance estimate</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Buyer vs. seller cost allocation</li>
    </ul>

    <h3>Common Alabama Transfer Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Forgetting mortgage tax when financing (buyer's responsibility)</p>
    <p><strong>Mistake 2:</strong> Not negotiating who pays transfer tax in purchase agreement</p>
    <p><strong>Mistake 3:</strong> Confusing transfer tax ($0.50/$500) with recording fees ($15-35)</p>
    <p><strong>Mistake 4:</strong> Not claiming valid exemptions (spousal transfer, foreclosure)</p>
    <p><strong>Mistake 5:</strong> Forgetting that refinances trigger mortgage tax</p>

    <h3>Alabama Transfer Tax Payment Process</h3>
    <p>Transfer and mortgage taxes are collected at closing:</p>
    <ol>
      <li><strong>Closing agent calculates</strong> transfer and mortgage tax based on deed and mortgage amounts</li>
      <li><strong>Taxes appear</strong> on Closing Disclosure (seller: transfer tax, buyer: mortgage tax)</li>
      <li><strong>Funds collected</strong> at closing table along with other closing costs</li>
      <li><strong>Closing agent remits</strong> taxes to Alabama Department of Revenue within 30 days</li>
      <li><strong>Deed and mortgage</strong> are recorded with county probate judge's office</li>
    </ol>

    <h3>Alabama Department of Revenue Resources</h3>
    <p>For official information:</p>
    <ul>
      <li><strong>Transfer Tax Information:</strong> Alabama Code § 40-22-1 through 40-22-12</li>
      <li><strong>Mortgage Tax Information:</strong> Alabama Code § 40-22-1</li>
      <li><strong>Alabama Department of Revenue:</strong> revenue.alabama.gov</li>
      <li><strong>County Probate Courts:</strong> Handle deed and mortgage recording</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'mortgageAmount',
        label: 'Mortgage Amount (enter 0 for cash purchase)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'recordingFees',
        label: 'Estimated Recording Fees',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Transfer Tax (Seller)', isCurrency: true },
      { label: 'Mortgage Tax (Buyer)', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, mortgageAmount, recordingFees, titleInsurance } = values;

      const transferTaxIncrements = Math.ceil(salePrice / 500);
      const transferTax = transferTaxIncrements * 0.50;

      const mortgageTaxIncrements = mortgageAmount > 0 ? Math.ceil(mortgageAmount / 100) : 0;
      const mortgageTax = mortgageTaxIncrements * 0.15;

      const totalCosts = transferTax + mortgageTax + recordingFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'Transfer Tax (Seller)', value: transferTax.toFixed(2), isCurrency: true },
        { label: 'Mortgage Tax (Buyer)', value: mortgageTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
