import { CalculatorContent } from '@/types';

export const LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Louisiana Transfer Tax Calculator - Parish Recording Fee Calculator',
  description: 'Calculate Louisiana parish recording fees and Orleans Parish transfer tax for real estate transactions',
  slug: 'louisiana-transfer-tax-calculator',
  icon: '⚜️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Louisiana Recording Fees & Transfer Costs',
    content: `
    <h2>Louisiana Transfer Tax Guide</h2>
    <p>Louisiana is one of the few states with <strong>NO state-level transfer tax or deed recording tax</strong>. However, parishes (Louisiana's equivalent of counties) charge recording fees, and <strong>Orleans Parish</strong> has a unique transfer tax.</p>
    
    <h3>Louisiana Transfer Tax Rates</h3>
    <p><strong>Statewide:</strong> $0 - Louisiana does NOT impose a state transfer tax</p>
    <p><strong>Most Parishes:</strong> Recording fees only ($105 for 1-5 pages, varies by parish)</p>
    <p><strong>Orleans Parish ONLY:</strong> $325 flat transfer tax + recording fees</p>
    <p>Louisiana's lack of state transfer tax makes it one of the most affordable states for real estate transfer costs.</p>

    <h3>Who Pays Louisiana Transfer Fees?</h3>
    <p>In Louisiana, cost allocation is typically negotiable but follows these customs:</p>
    <p><strong>Recording Fees:</strong> Usually paid by the <strong>buyer</strong></p>
    <p><strong>Orleans Parish Transfer Tax:</strong> Typically paid by the <strong>seller</strong></p>
    <p><strong>Notary Fees:</strong> Split between buyer and seller, or paid by buyer</p>
    <p>Louisiana uses a unique <strong>notarial system</strong> where notaries (not attorneys) handle most real estate closings.</p>

    <h3>Louisiana Parish Recording Fees</h3>
    <p>Each parish (county) charges fees to record deeds and mortgages:</p>
    <p><strong>Standard Parish Fees (Most Parishes):</strong></p>
    <ul>
      <li>Deed Recording: $105 for documents of 1-5 pages</li>
      <li>Additional Pages: $5-$10 per page over 5 pages</li>
      <li>Mortgage Recording: $105 for 1-5 pages</li>
      <li>Additional Documents: $50-$150 each</li>
    </ul>
    <p><strong>Parish-Specific Variations:</strong> Some parishes charge slightly different rates ($90-$150 for basic recording)</p>

    <h3>Orleans Parish Transfer Tax - The Exception</h3>
    <p><strong>Orleans Parish ONLY</strong> (New Orleans area) charges a transfer tax:</p>
    <p><strong>Rate:</strong> $325 flat fee (not percentage-based)</p>
    <p><strong>Applies to:</strong> All property sales in Orleans Parish regardless of price</p>
    <p><strong>Who pays:</strong> Typically the seller, though negotiable</p>
    <p><strong>Plus recording fees:</strong> $325 transfer tax + $105 recording fee = $430 minimum</p>

    <h3>Louisiana Recording Fee Examples</h3>
    <p><strong>Example 1: $200,000 Home in East Baton Rouge Parish</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Parish Recording Fee: $105</li>
      <li>Mortgage Recording: $105</li>
      <li><strong>Total Transfer Costs: $210 (0.11%)</strong></li>
    </ul>

    <p><strong>Example 2: $350,000 Home in Orleans Parish (New Orleans)</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Orleans Parish Transfer Tax: $325</li>
      <li>Parish Recording Fee: $105</li>
      <li>Mortgage Recording: $105</li>
      <li><strong>Total Transfer Costs: $535 (0.15%)</strong></li>
    </ul>

    <p><strong>Example 3: $500,000 Home in Jefferson Parish</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Parish Recording Fee: $105</li>
      <li>Mortgage Recording: $105</li>
      <li><strong>Total Transfer Costs: $210 (0.04%)</strong></li>
    </ul>

    <h3>Major Louisiana Parishes</h3>
    <p>Recording fees by major parish (approximate):</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parish</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Main City</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Recording Fee</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Orleans</td>
        <td style="border: 1px solid #ddd; padding: 8px;">New Orleans</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$325</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">East Baton Rouge</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Baton Rouge</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Jefferson</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Metairie</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">St. Tammany</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Slidell</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Lafayette</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Lafayette</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Caddo</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Shreveport</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <h3>Louisiana Notarial Closing System</h3>
    <p>Louisiana uses a unique <strong>civil law system</strong> (based on Napoleonic Code) with notarial closings:</p>
    <ul>
      <li><strong>Notary Public:</strong> Licensed professionals who prepare and execute real estate acts</li>
      <li><strong>Acts of Sale:</strong> Louisiana's version of a deed, prepared by notary</li>
      <li><strong>Notary Fees:</strong> $500-$1,500 depending on transaction complexity</li>
      <li><strong>No Title Insurance:</strong> Louisiana uses "title opinions" instead of title insurance in many cases</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
    </ul>

    <h3>How Louisiana Compares to Other States</h3>
    <p>Louisiana has the <strong>lowest transfer costs</strong> in the nation (excluding Orleans Parish):</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), Georgia (0.1% + county)</li>
      <li><strong>Similar to:</strong> Texas ($0), Utah ($0), Idaho ($0), Wyoming ($0)</li>
      <li><strong>Orleans Parish:</strong> Still lower than most states even with $325 flat fee</li>
    </ul>
    <p><strong>On a $300,000 home:</strong></p>
    <ul>
      <li>Louisiana (non-Orleans): ~$210 (0.07%)</li>
      <li>Louisiana (Orleans): ~$430 (0.14%)</li>
      <li>Pennsylvania: $6,000 (2%)</li>
      <li>Delaware: $12,000 (4%)</li>
    </ul>

    <h3>Tax Deductibility of Louisiana Recording Fees</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Recording fees count as selling expenses, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $300,000, bought for $250,000, $210 in fees → Taxable gain is $49,790 instead of $50,000</p>

    <h3>Louisiana Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Louisiana (on a $300,000 home in East Baton Rouge Parish):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $15,000-$18,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Parish Recording Fee: $105</li>
      <li>Notary Fees: $500-$1,000</li>
      <li>Title Opinion/Abstract: $300-$600</li>
      <li>Property Tax Prorations: Varies</li>
      <li>Survey (if required): $300-$500</li>
      <li><strong>Total: ~$16,200-$20,200 (5.4-6.7%)</strong></li>
    </ul>
    <p><strong>In Orleans Parish, add $325 transfer tax to total</strong></p>

    <h3>Louisiana Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Louisiana (on a $300,000 home with 80% financing):</p>
    <ul>
      <li>Mortgage Recording Fee: $105</li>
      <li>Notary Fees: $500-$1,000</li>
      <li>Title Opinion/Abstract: $300-$600</li>
      <li>Loan Origination (1%): $2,400</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $300-$500</li>
      <li>Survey: $300-$500</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$4,300-$5,700 (1.4-1.9%)</strong></li>
    </ul>

    <h3>Louisiana Title Practices</h3>
    <p>Louisiana has unique title practices compared to other states:</p>
    <p><strong>Title Opinion System:</strong></p>
    <ul>
      <li>Attorneys examine abstracts and issue title opinions</li>
      <li>Less common to use title insurance</li>
      <li>Abstract of title shows ownership history</li>
      <li>Title opinion letter certifies merchantable title</li>
    </ul>
    <p><strong>Title Insurance (Available but Optional):</strong></p>
    <ul>
      <li>Owner's title insurance: $300-$1,000</li>
      <li>Lender's title insurance: Usually required by lenders</li>
      <li>ALTA policies available for national lenders</li>
    </ul>

    <h3>Tips to Reduce Louisiana Transfer Costs</h3>
    <p><strong>No transfer tax advantage:</strong> Louisiana already has minimal costs</p>
    <p><strong>Negotiate notary fees:</strong> Shop multiple notaries for competitive rates</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission with no transfer tax penalty</p>
    <p><strong>Title opinion vs. insurance:</strong> Title opinion often cheaper than insurance</p>
    <p><strong>Avoid Orleans Parish:</strong> Buy in Jefferson or St. Tammany Parish to save $325</p>

    <h3>Special Considerations for Louisiana Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Extremely low transfer costs make Louisiana ideal for flipping</li>
      <li>No transfer tax on multiple transactions = more profit retained</li>
      <li>Orleans Parish $325 fee still minimal compared to other states</li>
      <li>1031 exchanges have minimal Louisiana-specific costs</li>
      <li>Wholesaling: No transfer tax even on multiple assignments</li>
      <li>Short-term rentals taxed (4.45% state + parish sales tax)</li>
    </ul>

    <h3>Exemptions from Louisiana Recording Fees</h3>
    <p>While there's no state transfer tax to be exempt from, recording fees may be reduced/waived for:</p>
    <ul>
      <li>Government entity transfers</li>
      <li>Some non-profit organizations</li>
      <li>Certain veterans (varies by parish)</li>
      <li>Corrective instruments with no new consideration</li>
    </ul>
    <p>Orleans Parish transfer tax exemptions are limited - consult a Louisiana notary.</p>

    <h3>Louisiana vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Louisiana (non-Orleans)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$105-210</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Louisiana (Orleans)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$325 flat</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$430-535</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100-200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mississippi</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Arkansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.30 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$990</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Louisiana parish recording fees</li>
      <li>Orleans Parish transfer tax (if applicable)</li>
      <li>Notary fee estimates</li>
      <li>Title opinion/insurance costs</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
    </ul>

    <h3>Common Louisiana Transfer Cost Mistakes</h3>
    <p><strong>Mistake 1:</strong> Assuming all of Louisiana has $0 transfer costs (Orleans Parish has $325)</p>
    <p><strong>Mistake 2:</strong> Confusing title insurance with title opinion (Louisiana uses both)</p>
    <p><strong>Mistake 3:</strong> Not budgeting for notary fees ($500-$1,500)</p>
    <p><strong>Mistake 4:</strong> Forgetting mortgage recording fees ($105)</p>
    <p><strong>Mistake 5:</strong> Not verifying parish-specific recording fee schedules</p>

    <h3>Louisiana Real Estate Transfer Process</h3>
    <p>Louisiana's unique closing process:</p>
    <ol>
      <li><strong>Purchase agreement signed:</strong> Typically with 30-45 day closing</li>
      <li><strong>Title examination:</strong> Attorney reviews abstract of title</li>
      <li><strong>Title opinion issued:</strong> Attorney certifies merchantable title</li>
      <li><strong>Act of Sale prepared:</strong> Notary drafts the conveyance document</li>
      <li><strong>Closing (Passing):</strong> Parties sign before notary</li>
      <li><strong>Recording:</strong> Act of Sale filed with parish Clerk of Court</li>
      <li><strong>Funds disbursed:</strong> Same day or next business day</li>
    </ol>

    <h3>Why Louisiana Has No Transfer Tax</h3>
    <p>Louisiana's civil law tradition and economic development policy:</p>
    <ul>
      <li><strong>Civil Law Heritage:</strong> Based on Napoleonic Code, not English common law</li>
      <li><strong>Pro-Business Climate:</strong> No transfer tax encourages real estate transactions</li>
      <li><strong>Tourism Economy:</strong> Low barriers to property ownership</li>
      <li><strong>Post-Katrina Development:</strong> Keeping transaction costs low to encourage rebuilding</li>
    </ul>

    <h3>Resources for Louisiana Buyers & Sellers</h3>
    <ul>
      <li><strong>Louisiana Notarial Association:</strong> lna.org</li>
      <li><strong>Parish Clerk of Court:</strong> Each parish maintains recording offices</li>
      <li><strong>Louisiana Real Estate Commission:</strong> lrec.gov</li>
      <li><strong>Orleans Parish Civil District Court:</strong> For New Orleans area recordings</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'parish',
        label: 'Louisiana Parish',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard Parish (No Transfer Tax)' },
          { value: 'orleans', label: 'Orleans Parish (New Orleans - $325 Transfer Tax)' },
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
        name: 'deedRecordingFee',
        label: 'Deed Recording Fee',
        type: 'number',
        defaultValue: 105,
      },
      {
        name: 'mortgageRecordingFee',
        label: 'Mortgage Recording Fee (if applicable)',
        type: 'number',
        defaultValue: 105,
      },
      {
        name: 'notaryFees',
        label: 'Estimated Notary Fees',
        type: 'number',
        defaultValue: 750,
      },
      {
        name: 'titleCosts',
        label: 'Title Opinion/Insurance',
        type: 'number',
        defaultValue: 450,
      },
    ],
    results: [
      { label: 'State Transfer Tax', isCurrency: true },
      { label: 'Orleans Parish Transfer Tax', isCurrency: true },
      { label: 'Deed Recording Fee', isCurrency: true },
      { label: 'Mortgage Recording Fee', isCurrency: true },
      { label: 'Notary Fees', isCurrency: true },
      { label: 'Title Opinion/Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        parish,
        salePrice,
        deedRecordingFee,
        mortgageRecordingFee,
        notaryFees,
        titleCosts,
      } = values;

      const stateTransferTax = 0;
      const orleansTransferTax = parish === 'orleans' ? 325 : 0;

      const totalCosts = stateTransferTax + orleansTransferTax + deedRecordingFee + mortgageRecordingFee + notaryFees + titleCosts;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'State Transfer Tax', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'Orleans Parish Transfer Tax', value: orleansTransferTax.toFixed(2), isCurrency: true },
        { label: 'Deed Recording Fee', value: deedRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Mortgage Recording Fee', value: mortgageRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Notary Fees', value: notaryFees.toFixed(2), isCurrency: true },
        { label: 'Title Opinion/Insurance', value: titleCosts.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
