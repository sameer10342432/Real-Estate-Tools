import { CalculatorContent } from '@/types';

export const KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Kentucky Transfer Tax Calculator - Deed Tax Calculator',
  description: 'Calculate Kentucky deed tax and recording fees for real estate transactions',
  slug: 'kentucky-transfer-tax-calculator',
  icon: '🐎',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Kentucky Deed Tax & Transfer Costs',
    content: `
    <h2>Kentucky Deed Tax Guide</h2>
    <p>Kentucky imposes a <strong>deed tax</strong> (also called transfer tax) on real property transfers. At 0.1%, Kentucky has one of the lowest deed taxes in the nation, making it an affordable state for real estate transactions.</p>
    
    <h3>Kentucky Deed Tax Rate</h3>
    <p><strong>State Rate:</strong> $0.50 per $500 (or fraction thereof) of property value (0.10%)</p>
    <p><strong>Alternative expression:</strong> $1.00 per $1,000</p>
    <p><strong>NO mortgage tax:</strong> Unlike neighboring states, Kentucky does not charge a separate mortgage recording tax</p>
    <p>Kentucky's deed tax is uniform statewide with no county or city additions allowed.</p>

    <h3>Who Pays Kentucky Deed Tax?</h3>
    <p>In Kentucky, deed tax responsibility is traditionally allocated as follows:</p>
    <p><strong>Deed Tax:</strong> Typically paid by the <strong>seller</strong>, though negotiable in the purchase agreement</p>
    <p><strong>Recording Fees:</strong> Usually paid by the <strong>buyer</strong></p>
    <p>The tax is collected at closing by the attorney or title company and remitted to the Kentucky Department of Revenue.</p>

    <h3>Kentucky Deed Tax Calculation</h3>
    <p>Deed tax is calculated by dividing the sale price by $500, rounding up to the nearest whole number, then multiplying by $0.50:</p>
    <p><strong>Formula:</strong> (Sale Price ÷ $500, rounded up) × $0.50</p>
    <p><strong>Example:</strong> $300,000 home = 600 increments × $0.50 = $300 deed tax</p>

    <h3>Kentucky Deed Tax Examples</h3>
    <p><strong>Example 1: $200,000 Single-Family Home</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>Deed Tax: 400 increments × $0.50 = $200</li>
      <li>Recording Fee: $33 (typical)</li>
      <li><strong>Total State Transfer Costs: $233</strong></li>
    </ul>

    <p><strong>Example 2: $350,000 Home in Louisville</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>Deed Tax: 700 increments × $0.50 = $350</li>
      <li>Recording Fee: $33</li>
      <li><strong>Total State Transfer Costs: $383</strong></li>
    </ul>

    <p><strong>Example 3: $500,000 Property in Lexington</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Deed Tax: 1,000 increments × $0.50 = $500</li>
      <li>Recording Fee: $33</li>
      <li><strong>Total State Transfer Costs: $533</strong></li>
    </ul>

    <h3>Kentucky Recording Fees</h3>
    <p>In addition to deed tax, Kentucky counties charge recording fees:</p>
    <p><strong>Standard Recording Fees:</strong></p>
    <ul>
      <li>First page: $5 (deed or mortgage)</li>
      <li>Additional pages: $3 per page</li>
      <li>Typical deed (3-5 pages): $14-$20</li>
      <li>Typical mortgage (5-10 pages): $20-$33</li>
      <li>Combined recording: $33-$50</li>
    </ul>
    <p><strong>County-Specific Variations:</strong> Some counties charge slightly different rates, but most follow the state fee schedule.</p>

    <h3>No Mortgage Recording Tax in Kentucky</h3>
    <p>Good news for Kentucky homebuyers: <strong>Kentucky does NOT charge mortgage recording tax</strong>. You only pay the standard recording fee ($20-$33), making Kentucky more affordable than states with mortgage taxes like:</p>
    <ul>
      <li>Alabama: $0.15 per $100 (0.15% of loan amount)</li>
      <li>Tennessee: $0.115 per $100 (0.115% of loan amount)</li>
      <li>Florida: Documentary stamp tax on mortgages</li>
    </ul>

    <h3>No County or Municipal Deed Taxes</h3>
    <p>Kentucky state law prohibits counties and cities from imposing additional transfer or deed taxes. The state rate of $0.50 per $500 is the maximum you'll pay anywhere in Kentucky.</p>

    <h3>Exemptions from Kentucky Deed Tax</h3>
    <p>Certain transactions are exempt from Kentucky deed tax:</p>
    <ul>
      <li>Transfers between spouses or to former spouse per divorce decree</li>
      <li>Transfers from parent to child or child to parent (with no consideration)</li>
      <li>Foreclosure deeds and deeds in lieu of foreclosure</li>
      <li>Quitclaim deeds with no consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Gifts with no monetary consideration</li>
      <li>Inheritance and estate distributions</li>
      <li>Transfers to correct errors in prior deeds</li>
      <li>Transfers solely to create/terminate joint tenancy between spouses</li>
    </ul>

    <h3>How Kentucky Compares to Other States</h3>
    <p>At 0.10% deed tax, Kentucky has one of the lowest rates in the nation:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), Tennessee (0.37%)</li>
      <li><strong>Higher than:</strong> Texas (0%), Louisiana (0%), Utah (0%), Idaho (0%)</li>
      <li><strong>Similar to:</strong> Alabama (0.1%), Mississippi (0.15%), Colorado (0.01%)</li>
    </ul>
    <p>The absence of mortgage recording tax gives Kentucky an additional advantage over many neighboring states.</p>

    <h3>Tax Deductibility of Kentucky Deed Tax</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Deed tax counts as a selling expense, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $300,000, bought for $250,000, $300 in deed tax → Taxable gain is $49,700 instead of $50,000</p>

    <h3>Kentucky Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Kentucky (on a $300,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $15,000-$18,000</li>
      <li>Deed Tax (0.1%): $300</li>
      <li>Title Insurance: $1,000-$1,500</li>
      <li>Recording Fees (seller portion): $15-$25</li>
      <li>Attorney Fees: $500-$1,000 (if used)</li>
      <li>Survey: $300-$500 (if required)</li>
      <li>Property Tax Prorations: Varies</li>
      <li><strong>Total: ~$17,100-$21,500 (5.7-7.2%)</strong></li>
    </ul>

    <h3>Kentucky Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Kentucky (on a $300,000 home with 80% financing):</p>
    <ul>
      <li>NO Mortgage Tax: $0 (major savings vs. other states)</li>
      <li>Recording Fees: $30-$50</li>
      <li>Title Insurance: $1,000-$1,500</li>
      <li>Loan Origination (1%): $2,400</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $300-$500</li>
      <li>Survey: $300-$500</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$4,500-$5,600 (1.5-1.9%)</strong></li>
    </ul>

    <h3>Tips to Reduce Kentucky Transfer Costs</h3>
    <p><strong>Negotiate in contract:</strong> Ask buyer to pay portion of deed tax</p>
    <p><strong>Already low:</strong> At 0.1%, Kentucky deed tax is minimal</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but still pay deed tax</p>
    <p><strong>Shop title insurance:</strong> Kentucky allows rate competition</p>
    <p><strong>Attorney optional:</strong> Not required but recommended for complex deals</p>
    <p><strong>No mortgage tax advantage:</strong> Kentucky buyers already save compared to other states</p>

    <h3>Kentucky Real Estate Closing Process</h3>
    <p>Kentucky uses <strong>attorney closings</strong> or <strong>title company closings</strong>, varying by region:</p>
    <ul>
      <li><strong>Louisville/Lexington Metro:</strong> Title company closings more common</li>
      <li><strong>Northern Kentucky:</strong> Mix of attorney and title company</li>
      <li><strong>Rural Kentucky:</strong> Attorney closings more prevalent</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Title Search:</strong> 50+ years of ownership history reviewed</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing (TRID rule)</li>
    </ul>

    <h3>Special Considerations for Kentucky Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Low deed tax (0.1%) makes Kentucky attractive for flipping</li>
      <li>No mortgage tax reduces refinancing costs</li>
      <li>1031 exchanges still require deed tax payment on sales</li>
      <li>Wholesaling: Assignment fees may be subject to deed tax (consult attorney)</li>
      <li>LLC transfers typically exempt if no consideration changes hands</li>
      <li>Short-term rental income is taxable (6% state sales tax applies)</li>
    </ul>

    <h3>Regional Variations in Kentucky</h3>
    <p>While deed tax is uniform statewide, other costs vary by region:</p>
    <p><strong>Louisville/Lexington Metro:</strong></p>
    <ul>
      <li>Higher property values = higher absolute deed tax</li>
      <li>More competitive title insurance rates</li>
      <li>Attorney fees: $500-$1,000</li>
    </ul>
    <p><strong>Northern Kentucky (Cincinnati area):</strong></p>
    <ul>
      <li>Similar to Ohio market practices</li>
      <li>Title insurance common</li>
      <li>Attorney fees: $600-$1,200</li>
    </ul>
    <p><strong>Rural Kentucky:</strong></p>
    <ul>
      <li>Lower property values = lower absolute deed tax</li>
      <li>Attorney closings more common</li>
      <li>Attorney fees: $400-$800</li>
    </ul>

    <h3>Kentucky vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Mortgage Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kentucky</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.10%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Tennessee</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.37 per $100</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.115%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,110+</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ohio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-900</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Indiana</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">West Virginia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.10 per $500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$660</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-900</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Kentucky deed tax (transfer tax)</li>
      <li>Recording fees estimate</li>
      <li>Title insurance estimate</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Comparison savings vs. other states</li>
    </ul>

    <h3>Common Kentucky Deed Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Assuming counties can add local transfer taxes (they can't)</p>
    <p><strong>Mistake 2:</strong> Forgetting deed tax when calculating flip profits</p>
    <p><strong>Mistake 3:</strong> Confusing deed tax ($0.50/$500) with recording fees ($3-$5/page)</p>
    <p><strong>Mistake 4:</strong> Not claiming valid exemptions (family transfers, foreclosures)</p>
    <p><strong>Mistake 5:</strong> Paying deed tax on exempt quitclaim deeds</p>

    <h3>Kentucky Deed Tax Payment Process</h3>
    <p>Deed tax is collected at closing:</p>
    <ol>
      <li><strong>Closing agent calculates</strong> deed tax based on sale price</li>
      <li><strong>Tax appears</strong> on Closing Disclosure (typically seller responsibility)</li>
      <li><strong>Funds collected</strong> at closing table along with other closing costs</li>
      <li><strong>County clerk stamps</strong> deed showing tax paid</li>
      <li><strong>Deed recorded</strong> with county clerk's office</li>
      <li><strong>Taxes remitted</strong> to Kentucky Department of Revenue by clerk</li>
    </ol>

    <h3>Kentucky Property Tax vs. Deed Tax</h3>
    <p>Don't confuse these two different taxes:</p>
    <p><strong>Deed Tax (Transfer Tax):</strong></p>
    <ul>
      <li>One-time tax when property changes hands</li>
      <li>0.1% of sale price ($0.50 per $500)</li>
      <li>Collected at closing</li>
      <li>Goes to state revenue</li>
    </ul>
    <p><strong>Property Tax (Ad Valorem Tax):</strong></p>
    <ul>
      <li>Annual tax on property ownership</li>
      <li>Based on assessed value (varies by county)</li>
      <li>Typically 0.8-1.2% of assessed value annually</li>
      <li>Goes to local government (county, city, school district)</li>
    </ul>

    <h3>Kentucky Department of Revenue Resources</h3>
    <p>For official information:</p>
    <ul>
      <li><strong>Deed Tax Information:</strong> Kentucky Revised Statutes (KRS) 142.050</li>
      <li><strong>Kentucky Department of Revenue:</strong> revenue.ky.gov</li>
      <li><strong>County Clerk Offices:</strong> Handle deed recording in each county</li>
      <li><strong>Kentucky Real Estate Commission:</strong> krec.ky.gov</li>
    </ul>

    <h3>Kentucky Real Estate Market Considerations</h3>
    <p>Kentucky's low deed tax complements its affordable real estate market:</p>
    <ul>
      <li><strong>Median Home Price:</strong> ~$200,000 (varies by region)</li>
      <li><strong>Louisville Market:</strong> Growing urban market with higher values</li>
      <li><strong>Lexington Market:</strong> University town with stable demand</li>
      <li><strong>Northern Kentucky:</strong> Cincinnati metro spillover market</li>
      <li><strong>Rural Markets:</strong> Very affordable with low transaction costs</li>
    </ul>
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
        name: 'recordingFees',
        label: 'Estimated Recording Fees',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [
      { label: 'Kentucky Deed Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, recordingFees, titleInsurance } = values;

      const deedTaxIncrements = Math.ceil(salePrice / 500);
      const deedTax = deedTaxIncrements * 0.50;

      const totalCosts = deedTax + recordingFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'Kentucky Deed Tax', value: deedTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
