import { CalculatorContent } from '@/types';

export const NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Mexico Transfer Tax Calculator - Real Estate Recording Fees',
  description: 'Calculate New Mexico real estate costs. No state transfer tax - only county recording fees. Learn actual NM closing costs',
  slug: 'new-mexico-transfer-tax-calculator',
  icon: '🌵',
  category: 'Seller Tools',
  article: {
    title: 'Understanding New Mexico Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>New Mexico Transfer Tax Guide</h2>
    <p>New Mexico does <strong>not impose a state-level real estate transfer tax</strong> on property sales. This makes New Mexico one of the more affordable states for real estate transactions, saving sellers and buyers significant closing costs.</p>
    
    <h3>Why New Mexico Has No State Transfer Tax</h3>
    <p>New Mexico joins a select group of states (including Texas, Utah, Idaho, and others) that do not charge a state transfer tax. There have been legislative proposals to introduce a transfer tax, but as of 2025, no such tax has been enacted.</p>
    <p>A bill (HB0019) was proposed that would have created transfer tax rates of 0.75% on properties $500K-$750K and 1.25% on properties over $750K, but this was <strong>not passed into law</strong>.</p>

    <h3>What You Do Pay in New Mexico</h3>
    <p>While New Mexico has no state transfer tax, sellers and buyers still encounter these costs:</p>
    <ul>
      <li><strong>County Recording Fees:</strong> Vary by county, typically $15-$30 per document</li>
      <li><strong>Title Insurance:</strong> One-time premium based on property value</li>
      <li><strong>Title Search Fees:</strong> $200-$400 for title examination</li>
      <li><strong>Deed Preparation:</strong> Attorney or title company fees ($150-$350)</li>
      <li><strong>Survey Costs:</strong> If required ($400-$800)</li>
    </ul>

    <h3>Local Transfer Taxes in New Mexico</h3>
    <p><strong>Important:</strong> While New Mexico has no state transfer tax, some individual cities or counties may impose local transfer taxes. Always verify with:</p>
    <ul>
      <li>Your county clerk's office</li>
      <li>Title company or closing attorney</li>
      <li>Real estate agent familiar with your market</li>
    </ul>
    <p>Most New Mexico counties do not charge local transfer taxes, but confirmation is essential for your specific transaction.</p>

    <h3>New Mexico Recording Fees by County</h3>
    <p>Recording fees vary by county but are generally modest:</p>
    <p><strong>Bernalillo County (Albuquerque):</strong> ~$25 per document</p>
    <p><strong>Santa Fe County:</strong> ~$20 per document</p>
    <p><strong>Doña Ana County (Las Cruces):</strong> ~$20 per document</p>
    <p><strong>Sandoval County (Rio Rancho):</strong> ~$22 per document</p>
    <p><strong>Valencia County:</strong> ~$20 per document</p>

    <h3>Who Pays Closing Costs in New Mexico?</h3>
    <p>New Mexico follows these traditional cost allocations:</p>
    <ul>
      <li><strong>Seller typically pays:</strong> Real estate commissions, owner's title insurance (negotiable), deed preparation, recording release of liens</li>
      <li><strong>Buyer typically pays:</strong> Lender's title insurance, recording deed and mortgage, appraisal, inspection, loan fees</li>
      <li><strong>Negotiable:</strong> All costs can be negotiated in the purchase contract</li>
    </ul>

    <h3>New Mexico Real Estate Advantages</h3>
    <p><strong>No State Transfer Tax:</strong> Saves 0.5-4% compared to transfer tax states</p>
    <p><strong>Affordable Recording Fees:</strong> Among the lowest in the Southwest</p>
    <p><strong>Property Tax Relief:</strong> Various exemptions available for veterans, seniors, and disabled</p>
    <p><strong>Stable Tax Environment:</strong> No surprise transfer tax additions</p>
    <p><strong>Simple Closing Process:</strong> Fewer government fees to calculate</p>

    <h3>Example: Selling a $350,000 New Mexico Home</h3>
    <p><strong>Transfer Tax (New Mexico):</strong> $0</p>
    <p><strong>Recording Fee:</strong> $25 (estimated)</p>
    <p><strong>Deed Preparation:</strong> $250</p>
    <p><strong>Title Search:</strong> $300</p>
    <p><strong>Total Transfer-Related Costs:</strong> $575</p>
    <p>Compare this to selling the same home in Pennsylvania ($7,000 in transfer taxes) or Delaware ($14,000 in transfer taxes).</p>

    <h3>Special Situations in New Mexico</h3>
    <p><strong>New Construction:</strong> No transfer tax; only recording fees</p>
    <p><strong>Inherited Property:</strong> No transfer tax; only recording and probate fees</p>
    <p><strong>Gift Deeds:</strong> No transfer tax; minimal recording fees</p>
    <p><strong>Community Land Grants:</strong> Special rules may apply; consult attorney</p>
    <p><strong>Pueblo Land:</strong> Different transfer requirements; specific to tribal lands</p>
    <p><strong>Water Rights Transfers:</strong> Separate filing and fees may apply</p>

    <h3>New Mexico vs Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $350K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Mexico</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oklahoma</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$525</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Colorado</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.01%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$35+ (varies)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Arizona</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~0.11%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$385</td>
      </tr>
    </table>

    <h3>Property Taxes in New Mexico</h3>
    <p>While there's no transfer tax, New Mexico property owners pay annual property taxes. The average effective property tax rate is approximately 0.8% of market value.</p>
    <p><strong>Property Tax Exemptions Available:</strong></p>
    <ul>
      <li>Veterans' Exemption: Up to $4,000 assessed value for qualifying veterans</li>
      <li>Head of Family Exemption: $2,000 off assessed value</li>
      <li>Low-Income Exemption: For seniors and disabled with limited income</li>
    </ul>

    <h3>Proposed Transfer Tax (Not Enacted)</h3>
    <p>Be aware that HB0019 proposed the following (but was NOT passed):</p>
    <ul>
      <li>0.75% on properties $500,000-$750,000</li>
      <li>1.25% on properties over $750,000</li>
      <li>Exemption for properties under $500,000</li>
    </ul>
    <p>As of 2025, this remains a proposal only and is not law. However, it's worth monitoring future legislative sessions.</p>

    <h3>New Mexico Seller Closing Costs</h3>
    <p>Beyond transfer fees (which are $0), New Mexico sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (negotiable)</li>
      <li>Property tax prorations</li>
      <li>HOA transfer fees (if applicable)</li>
      <li>Deed preparation ($150-$350)</li>
      <li>Outstanding liens or judgments</li>
      <li>Water rights documentation (in some areas)</li>
    </ul>
    <p>Total seller costs typically range from 6-8% of sale price.</p>

    <h3>Water Rights in New Mexico</h3>
    <p>New Mexico is unique in that water rights are often separate from land ownership. When selling property:</p>
    <ul>
      <li>Verify water rights are properly documented</li>
      <li>File separate water rights transfer with State Engineer</li>
      <li>May incur additional filing fees ($50-$200)</li>
      <li>Essential in rural and agricultural properties</li>
    </ul>

    <h3>Tips for New Mexico Real Estate Closings</h3>
    <p>Verify no local transfer taxes in your county or city. Budget for recording fees and title insurance in your net proceeds. Understand water rights if buying/selling rural property. Use a reputable title company familiar with New Mexico law. Consider property tax exemptions if eligible (veterans, seniors). Factor in unique New Mexico considerations like community land grants. Keep all closing documents for tax records. Allow 30-60 days for residential closings.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price. Enter estimated recording fees for your county ($15-$30 typical). Add optional costs like deed preparation and title insurance. The calculator shows your total closing costs without any state transfer tax. Compare savings versus states with high transfer taxes.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'recordingFee',
        label: 'County Recording Fee',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'deedPreparation',
        label: 'Deed Preparation Fee',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'titleSearch',
        label: 'Title Search Fee',
        type: 'number',
        defaultValue: 300,
      },
    ],
    results: [
      { label: 'New Mexico State Transfer Tax', isCurrency: true },
      { label: 'County Recording Fee', isCurrency: true },
      { label: 'Deed Preparation', isCurrency: true },
      { label: 'Title Search', isCurrency: true },
      { label: 'Total Transfer & Recording Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, recordingFee, deedPreparation, titleSearch } = values;

      const stateTransferTax = 0;
      const totalCosts = recordingFee + deedPreparation + titleSearch;
      const percentageOfSale = (totalCosts / salePrice) * 100;
      
      const pennsylvaniaTax = salePrice * 0.02;

      return [
        { label: 'New Mexico State Transfer Tax', value: '0.00', isCurrency: true },
        { label: 'County Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Deed Preparation', value: deedPreparation.toFixed(2), isCurrency: true },
        { label: 'Title Search', value: titleSearch.toFixed(2), isCurrency: true },
        { label: 'Total Transfer & Recording Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Pennsylvania (2%)', value: pennsylvaniaTax.toFixed(2), isCurrency: true },
      ];
    },
  },
};
