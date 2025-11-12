import { CalculatorContent } from '@/types';

export const OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Oklahoma Transfer Tax Calculator - Documentary Stamp Tax Calculator',
  description: 'Calculate Oklahoma documentary stamp tax and recording fees for real estate transactions',
  slug: 'oklahoma-transfer-tax-calculator',
  icon: '🌾',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Oklahoma Documentary Stamp Tax & Transfer Costs',
    content: `
    <h2>Oklahoma Documentary Stamp Tax Guide</h2>
    <p>Oklahoma imposes a <strong>documentary stamp tax</strong> (also called transfer tax) on real property transfers. At 0.15%, Oklahoma's documentary stamp tax is one of the lowest in the nation, making it an affordable state for real estate transactions.</p>
    
    <h3>Oklahoma Documentary Stamp Tax Rate</h3>
    <p><strong>State Rate:</strong> $0.75 per $500 (or fraction thereof) of property value (0.15%)</p>
    <p><strong>Alternative expression:</strong> $1.50 per $1,000</p>
    <p><strong>NO mortgage tax:</strong> Oklahoma does not charge a separate mortgage recording tax</p>
    <p>Oklahoma's documentary stamp tax is uniform statewide with no county or city additions allowed.</p>

    <h3>Who Pays Oklahoma Documentary Stamp Tax?</h3>
    <p>In Oklahoma, documentary stamp tax responsibility is traditionally allocated as follows:</p>
    <p><strong>Documentary Stamp Tax:</strong> Typically paid by the <strong>seller</strong>, though negotiable in the purchase agreement</p>
    <p><strong>Recording Fees:</strong> Usually paid by the <strong>buyer</strong></p>
    <p>The tax is collected at closing by the title company and remitted to the Oklahoma Tax Commission.</p>

    <h3>Oklahoma Documentary Stamp Tax Calculation</h3>
    <p>Documentary stamp tax is calculated by dividing the sale price by $500, rounding up to the nearest whole number, then multiplying by $0.75:</p>
    <p><strong>Formula:</strong> (Sale Price ÷ $500, rounded up) × $0.75</p>
    <p><strong>Example:</strong> $250,000 home = 500 increments × $0.75 = $375 documentary stamp tax</p>

    <h3>Oklahoma Documentary Stamp Tax Examples</h3>
    <p><strong>Example 1: $200,000 Single-Family Home</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>Documentary Stamp Tax: 400 increments × $0.75 = $300</li>
      <li>Recording Fee: $25 (typical)</li>
      <li><strong>Total State Transfer Costs: $325</strong></li>
    </ul>

    <p><strong>Example 2: $300,000 Home in Oklahoma City</strong></p>
    <ul>
      <li>Sale Price: $300,000</li>
      <li>Documentary Stamp Tax: 600 increments × $0.75 = $450</li>
      <li>Recording Fee: $25</li>
      <li><strong>Total State Transfer Costs: $475</strong></li>
    </ul>

    <p><strong>Example 3: $450,000 Property in Tulsa</strong></p>
    <ul>
      <li>Sale Price: $450,000</li>
      <li>Documentary Stamp Tax: 900 increments × $0.75 = $675</li>
      <li>Recording Fee: $25</li>
      <li><strong>Total State Transfer Costs: $700</strong></li>
    </ul>

    <h3>Oklahoma Recording Fees</h3>
    <p>In addition to documentary stamp tax, Oklahoma counties charge recording fees:</p>
    <p><strong>Standard Recording Fees:</strong></p>
    <ul>
      <li>First page: $10-$15 (deed or mortgage)</li>
      <li>Additional pages: $2-$5 per page</li>
      <li>Typical deed (3-5 pages): $20-$35</li>
      <li>Typical mortgage (5-10 pages): $30-$55</li>
      <li>Combined recording: $50-$90</li>
    </ul>
    <p><strong>County-Specific Variations:</strong> Some counties charge slightly different rates, but most follow similar fee schedules.</p>

    <h3>No Mortgage Recording Tax in Oklahoma</h3>
    <p>Good news for Oklahoma homebuyers: <strong>Oklahoma does NOT charge mortgage recording tax</strong>. You only pay the standard recording fee ($30-$55), making Oklahoma more affordable than states with mortgage taxes.</p>

    <h3>No County or Municipal Documentary Stamp Taxes</h3>
    <p>Oklahoma state law prohibits counties and cities from imposing additional transfer or documentary stamp taxes. The state rate of $0.75 per $500 is the maximum you'll pay anywhere in Oklahoma.</p>

    <h3>Exemptions from Oklahoma Documentary Stamp Tax</h3>
    <p>Certain transactions are exempt from Oklahoma documentary stamp tax:</p>
    <ul>
      <li>Transfers between spouses or to former spouse per divorce decree</li>
      <li>Transfers from parent to child or child to parent (with no consideration)</li>
      <li>Foreclosure deeds and deeds in lieu of foreclosure</li>
      <li>Quitclaim deeds with no consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Gifts with no monetary consideration</li>
      <li>Inheritance and estate distributions</li>
      <li>Transfers to correct errors in prior deeds</li>
      <li>Transfers solely to create/terminate joint tenancy</li>
    </ul>

    <h3>How Oklahoma Compares to Other States</h3>
    <p>At 0.15% documentary stamp tax, Oklahoma has one of the lowest rates in the nation:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), Tennessee (0.37%)</li>
      <li><strong>Higher than:</strong> Texas (0%), Louisiana (0%), Utah (0%), Kentucky (0.1%)</li>
      <li><strong>Similar to:</strong> Mississippi (0.15%), Colorado (0.01%)</li>
    </ul>
    <p>The absence of mortgage recording tax gives Oklahoma an additional advantage.</p>

    <h3>Tax Deductibility of Oklahoma Documentary Stamp Tax</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Documentary stamp tax counts as a selling expense, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $300,000, bought for $250,000, $450 in stamp tax → Taxable gain is $49,550 instead of $50,000</p>

    <h3>Oklahoma Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Oklahoma (on a $250,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $12,500-$15,000</li>
      <li>Documentary Stamp Tax (0.15%): $375</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Recording Fees (seller portion): $15-$25</li>
      <li>Attorney Fees: $300-$600 (if used)</li>
      <li>Survey: $250-$400 (if required)</li>
      <li>Property Tax Prorations: Varies</li>
      <li><strong>Total: ~$14,200-$17,600 (5.7-7.0%)</strong></li>
    </ul>

    <h3>Oklahoma Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Oklahoma (on a $250,000 home with 80% financing):</p>
    <ul>
      <li>NO Mortgage Tax: $0 (major savings vs. other states)</li>
      <li>Recording Fees: $40-$70</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Loan Origination (1%): $2,000</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $300-$500</li>
      <li>Survey: $250-$400</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$3,800-$4,800 (1.5-1.9%)</strong></li>
    </ul>

    <h3>Tips to Reduce Oklahoma Transfer Costs</h3>
    <p><strong>Negotiate in contract:</strong> Ask buyer to pay portion of documentary stamp tax</p>
    <p><strong>Already low:</strong> At 0.15%, Oklahoma documentary stamp tax is minimal</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but still pay documentary stamp tax</p>
    <p><strong>Shop title insurance:</strong> Oklahoma allows rate competition</p>
    <p><strong>Attorney optional:</strong> Not required but recommended for complex deals</p>
    <p><strong>No mortgage tax advantage:</strong> Oklahoma buyers already save compared to other states</p>

    <h3>Oklahoma Real Estate Closing Process</h3>
    <p>Oklahoma uses <strong>title company closings</strong> (not attorney closings):</p>
    <ul>
      <li><strong>Oklahoma City/Tulsa Metro:</strong> Title company closings standard</li>
      <li><strong>Rural Oklahoma:</strong> Also uses title companies</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Title Search:</strong> 50+ years of ownership history reviewed</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing (TRID rule)</li>
      <li><strong>Settlement:</strong> Funds disbursed same day or next business day</li>
    </ul>

    <h3>Special Considerations for Oklahoma Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Low documentary stamp tax (0.15%) makes Oklahoma attractive for flipping</li>
      <li>No mortgage tax reduces refinancing costs</li>
      <li>1031 exchanges still require documentary stamp tax payment on sales</li>
      <li>Wholesaling: Assignment fees may be subject to documentary stamp tax (consult attorney)</li>
      <li>LLC transfers typically exempt if no consideration changes hands</li>
      <li>Short-term rental income is taxable (state + local taxes apply)</li>
    </ul>

    <h3>Regional Variations in Oklahoma</h3>
    <p>While documentary stamp tax is uniform statewide, other costs vary by region:</p>
    <p><strong>Oklahoma City/Tulsa Metro:</strong></p>
    <ul>
      <li>Higher property values = higher absolute documentary stamp tax</li>
      <li>More competitive title insurance rates</li>
      <li>Title company fees: $300-$600</li>
    </ul>
    <p><strong>Rural Oklahoma:</strong></p>
    <ul>
      <li>Lower property values = lower absolute documentary stamp tax</li>
      <li>Fewer title company options</li>
      <li>Title company fees: $250-$500</li>
    </ul>

    <h3>Oklahoma vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Mortgage Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$250,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oklahoma</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$375</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.26%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$520+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Arkansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.30 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$825</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Missouri</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0-500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New Mexico</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0-250</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Oklahoma documentary stamp tax (transfer tax)</li>
      <li>Recording fees estimate</li>
      <li>Title insurance estimate</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Comparison savings vs. other states</li>
    </ul>

    <h3>Common Oklahoma Documentary Stamp Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Assuming counties can add local transfer taxes (they can't)</p>
    <p><strong>Mistake 2:</strong> Forgetting documentary stamp tax when calculating flip profits</p>
    <p><strong>Mistake 3:</strong> Confusing documentary stamp tax ($0.75/$500) with recording fees ($10-15/page)</p>
    <p><strong>Mistake 4:</strong> Not claiming valid exemptions (family transfers, foreclosures)</p>
    <p><strong>Mistake 5:</strong> Paying documentary stamp tax on exempt quitclaim deeds</p>

    <h3>Oklahoma Documentary Stamp Tax Payment Process</h3>
    <p>Documentary stamp tax is collected at closing:</p>
    <ol>
      <li><strong>Title company calculates</strong> documentary stamp tax based on sale price</li>
      <li><strong>Tax appears</strong> on Closing Disclosure (typically seller responsibility)</li>
      <li><strong>Funds collected</strong> at closing table along with other closing costs</li>
      <li><strong>Stamps affixed</strong> to deed showing tax paid</li>
      <li><strong>Deed recorded</strong> with county clerk's office</li>
      <li><strong>Taxes remitted</strong> to Oklahoma Tax Commission by title company</li>
    </ol>

    <h3>Oklahoma Property Tax vs. Documentary Stamp Tax</h3>
    <p>Don't confuse these two different taxes:</p>
    <p><strong>Documentary Stamp Tax (Transfer Tax):</strong></p>
    <ul>
      <li>One-time tax when property changes hands</li>
      <li>0.15% of sale price ($0.75 per $500)</li>
      <li>Collected at closing</li>
      <li>Goes to state revenue</li>
    </ul>
    <p><strong>Property Tax (Ad Valorem Tax):</strong></p>
    <ul>
      <li>Annual tax on property ownership</li>
      <li>Based on assessed value (varies by county)</li>
      <li>Typically 0.8-1.1% of assessed value annually</li>
      <li>Goes to local government (county, city, school district)</li>
    </ul>

    <h3>Oklahoma Tax Commission Resources</h3>
    <p>For official information:</p>
    <ul>
      <li><strong>Documentary Stamp Tax Information:</strong> Oklahoma Statutes Title 68, Section 3202</li>
      <li><strong>Oklahoma Tax Commission:</strong> tax.ok.gov</li>
      <li><strong>County Clerk Offices:</strong> Handle deed recording in each county</li>
      <li><strong>Oklahoma Real Estate Commission:</strong> ok.gov/OREC</li>
    </ul>

    <h3>Oklahoma Real Estate Market Considerations</h3>
    <p>Oklahoma's low documentary stamp tax complements its affordable real estate market:</p>
    <ul>
      <li><strong>Median Home Price:</strong> ~$190,000 (varies by region)</li>
      <li><strong>Oklahoma City Market:</strong> Growing urban market with affordable housing</li>
      <li><strong>Tulsa Market:</strong> Revitalizing downtown with increased demand</li>
      <li><strong>Rural Markets:</strong> Very affordable with minimal transaction costs</li>
      <li><strong>Energy Market Impact:</strong> Oil/gas industry affects local markets</li>
    </ul>

    <h3>Oklahoma Title Insurance Requirements</h3>
    <p>Oklahoma title insurance practices:</p>
    <ul>
      <li><strong>Lender's Policy:</strong> Required by mortgage lenders</li>
      <li><strong>Owner's Policy:</strong> Optional but recommended</li>
      <li><strong>Rates:</strong> Set by Oklahoma Insurance Department</li>
      <li><strong>Simultaneous Issue Rate:</strong> Discount when issuing both policies together</li>
      <li><strong>Reissue Rate:</strong> Discount if refinancing within 10 years</li>
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
        name: 'recordingFees',
        label: 'Estimated Recording Fees',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Oklahoma Documentary Stamp Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, recordingFees, titleInsurance } = values;

      const documentaryStampTaxIncrements = Math.ceil(salePrice / 500);
      const documentaryStampTax = documentaryStampTaxIncrements * 0.75;

      const totalCosts = documentaryStampTax + recordingFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'Oklahoma Documentary Stamp Tax', value: documentaryStampTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
