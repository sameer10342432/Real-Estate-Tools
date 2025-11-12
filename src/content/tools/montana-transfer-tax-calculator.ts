import { CalculatorContent } from '@/types';

export const MONTANA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Montana Transfer Tax Calculator - No Transfer Tax State',
  description: 'Montana has no real estate transfer tax. Calculate recording fees and Realty Transfer Certificate requirements instead.',
  slug: 'montana-transfer-tax-calculator',
  icon: '🏔️',
  category: 'Seller Tools',
  metaTitle: 'Montana Transfer Tax Calculator - No Transfer Tax | Recording Fees Only',
  metaDescription: 'Montana has NO real estate transfer tax. Learn about recording fees ($8/page) and Realty Transfer Certificate (RTC) filing requirements for property sales.',
  article: {
    title: 'Montana Real Estate Transfer Tax - Why Montana Has Zero Transfer Tax',
    content: `
    <h2>Montana Transfer Tax Guide</h2>
    <p>Montana is one of the few states in the US that <strong>does NOT charge</strong> a real estate transfer tax or deed tax. This makes Montana one of the most seller-friendly states for property transactions, saving thousands compared to high-tax states.</p>
    
    <h3>No Transfer Tax in Montana</h3>
    <p><strong>Montana's transfer tax rate: 0%</strong></p>
    <ul>
      <li>No state-level transfer tax or excise tax</li>
      <li>No county or municipal transfer taxes</li>
      <li>No documentary stamp requirements</li>
      <li>No deed tax of any kind</li>
    </ul>

    <p>Montana is one of only 13-14 states without transfer taxes, joining:</p>
    <ul>
      <li>Alaska</li>
      <li>Idaho</li>
      <li>Indiana</li>
      <li>Louisiana</li>
      <li>Mississippi</li>
      <li>Missouri</li>
      <li>Montana</li>
      <li>New Mexico</li>
      <li>North Dakota</li>
      <li>Oregon</li>
      <li>Texas</li>
      <li>Utah</li>
      <li>Wyoming</li>
    </ul>

    <h3>What You DO Pay: Recording Fees</h3>
    <p>While Montana has no transfer tax, you'll still pay deed recording fees:</p>
    <ul>
      <li><strong>$8 per page</strong> for recording the deed</li>
      <li><strong>+$10 penalty</strong> if deed doesn't meet Montana formatting requirements</li>
      <li>Typical deed: 2-4 pages = $16-$32 total recording cost</li>
    </ul>

    <p><strong>Formatting requirements to avoid $10 penalty:</strong></p>
    <ul>
      <li>8.5" x 11" or 8.5" x 14" paper size</li>
      <li>1-inch margins on all sides</li>
      <li>Minimum 10-point font</li>
      <li>Clear, legible black ink</li>
      <li>3" x 5" blank space at top right for recorder's stamp</li>
    </ul>

    <h3>Montana Realty Transfer Certificate (RTC) Requirement</h3>
    <p>Even though there's no monetary transfer tax, Montana requires a <strong>Realty Transfer Certificate (RTC)</strong> with every deed recording:</p>

    <p><strong>What is the RTC?</strong></p>
    <ul>
      <li>Official form required by Montana Department of Revenue</li>
      <li>Captures property transaction data for tax administration</li>
      <li>Used to ensure income tax compliance</li>
      <li>Helps administer property tax reassessments</li>
    </ul>

    <p><strong>What information must be reported:</strong></p>
    <ul>
      <li>Property sale price (actual consideration)</li>
      <li>Property address and legal description</li>
      <li>Buyer and seller names and addresses</li>
      <li>Transaction type (sale, gift, inheritance, etc.)</li>
      <li>Property characteristics and use</li>
      <li>Financing details</li>
    </ul>

    <p><strong>Who completes it:</strong></p>
    <ul>
      <li>Typically the closing real estate agent or title company</li>
      <li>Must be completed before deed recording</li>
      <li>Filed with county Clerk and Recorder</li>
      <li>No fee to file (it's informational only)</li>
    </ul>

    <h3>Who Pays What in Montana Closings</h3>
    <p>Since there's no transfer tax, Montana closing cost customs focus on other items:</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Cost Item</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Who Typically Pays</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Deed Recording Fees</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Buyer</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mortgage/Release Document Recording</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Seller</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Owner's Title Insurance Policy</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Seller</strong> (negotiable)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Lender's Title Insurance Policy</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Buyer</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Survey Charges</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Seller</strong> (sometimes split)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Closing/Escrow Fees</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">Negotiable (often split 50/50)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Property Tax Prorations</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">Both (split by ownership days)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Real Estate Commissions</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>Seller</strong></td>
      </tr>
    </table>

    <p><strong>Important:</strong> All closing costs are negotiable in Montana. These are customary practices but can be allocated differently in the purchase agreement.</p>

    <h3>Montana Property Tax Considerations</h3>
    <p>While Montana has no transfer tax, property tax reassessment at sale creates significant cost implications:</p>

    <p><strong>Property Tax Facts for 2024-2025:</strong></p>
    <ul>
      <li>Average effective rate: <strong>0.68%</strong> of home value annually</li>
      <li>Property reassessed at market value upon sale (Prop 13-style effects)</li>
      <li>Due dates: November 30 (first half) and May 31 (second half)</li>
      <li>2025-2026 valuations based on January 1, 2024 market values</li>
      <li>New buyers may see significant property tax increase vs. previous owner</li>
    </ul>

    <p><strong>2024 Property Tax Rebate:</strong></p>
    <ul>
      <li>Up to <strong>$400 rebate</strong> for qualifying homeowners</li>
      <li>Must own and occupy home for 7+ months in 2024</li>
      <li>Application window: August 15 – October 1, 2025</li>
    </ul>

    <h3>Montana Capital Gains Tax on Property Sales</h3>
    <p>While there's no transfer tax, Montana taxes capital gains from property sales:</p>

    <p><strong>Long-term capital gains (held >1 year):</strong></p>
    <ul>
      <li>Montana state tax: <strong>4.1%</strong></li>
      <li>Federal exclusion applies: $250K single / $500K married (primary residence)</li>
      <li>Gains above exclusion taxed at Montana's 4.1% rate</li>
    </ul>

    <p><strong>Short-term capital gains (held ≤1 year):</strong></p>
    <ul>
      <li>Taxed as ordinary income at <strong>5.9%</strong> Montana rate</li>
      <li>Plus federal ordinary income tax rates</li>
    </ul>

    <h3>How Montana Compares to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500K Home</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1M Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Montana</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>0%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$0</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$0</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington State</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.78%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,900</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$17,800</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">California (base)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,100</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <p><strong>Savings example:</strong> Selling a $750,000 home in Montana vs. Delaware saves <strong>$30,000</strong> in transfer taxes alone!</p>

    <h3>Seller Closing Costs in Montana</h3>
    <p>Typical seller costs on a $400,000 Montana home:</p>
    <ul>
      <li>Real estate commission (5-6%): $20,000-$24,000</li>
      <li><strong>Transfer tax: $0</strong></li>
      <li>Owner's title insurance: $1,000-$1,500</li>
      <li>Deed recording release documents: $16-$32</li>
      <li>Property tax prorations: Varies</li>
      <li>Survey (if seller pays): $400-$800</li>
      <li>Closing/escrow fee (if split): $200-$400</li>
      <li><strong>Total: ~$21,616-$26,732 (5.4-6.7%)</strong></li>
    </ul>

    <p>Compare to same home in Pennsylvania: Add $8,000 transfer tax = $29,616-$34,732 total (7.4-8.7%)</p>

    <h3>Special Transaction Types</h3>
    <p><strong>Gifts:</strong> No transfer tax; still need RTC and recording fees</p>
    <p><strong>Inheritance:</strong> No transfer tax; probate fees apply; still need RTC</p>
    <p><strong>Divorce transfers:</strong> No transfer tax; court-ordered property divisions exempt from reassessment</p>
    <p><strong>1031 exchanges:</strong> No transfer tax; federal tax deferral still applies</p>
    <p><strong>LLC/entity transfers:</strong> May avoid recording if structured correctly; consult attorney</p>

    <h3>Why Montana Chose No Transfer Tax</h3>
    <p>Montana's decision to forgo transfer taxes reflects state policy priorities:</p>
    <ul>
      <li>Promote property ownership and real estate investment</li>
      <li>Avoid double taxation (property already taxed annually)</li>
      <li>Reduce barriers to buying/selling property</li>
      <li>Keep closing costs predictable and low</li>
      <li>Attract buyers from high-tax states</li>
      <li>Support rural property markets</li>
    </ul>

    <h3>Recording Process in Montana</h3>
    <ol>
      <li>Prepare deed meeting Montana formatting requirements</li>
      <li>Complete Montana Realty Transfer Certificate (RTC)</li>
      <li>Submit both documents to county Clerk and Recorder</li>
      <li>Pay $8 per page recording fee ($10 penalty if improper format)</li>
      <li>Clerk records deed and files RTC with Montana Department of Revenue</li>
      <li>Buyer receives recorded deed within 2-4 weeks</li>
    </ol>

    <h3>How to Use This Calculator</h3>
    <p>Since Montana has no transfer tax, this calculator helps you:</p>
    <ul>
      <li>Estimate recording fees based on deed page count</li>
      <li>Compare Montana's $0 transfer tax to other states</li>
      <li>Calculate total seller closing costs in Montana</li>
      <li>See savings vs. high-tax states like Delaware, Pennsylvania, Washington</li>
      <li>Understand actual costs (recording fees only, not transfer taxes)</li>
    </ul>

    <h3>Additional Resources</h3>
    <p><strong>Montana Department of Revenue - Property Division:</strong> Official RTC forms and instructions</p>
    <p><strong>County Clerk and Recorder Offices:</strong> Verify recording fees and formatting requirements</p>
    <p><strong>Title Companies:</strong> Provide comprehensive closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Advise on complex transactions and entity structuring</p>

    <h3>Tips for Montana Property Sellers</h3>
    <p>Ensure deed meets Montana formatting to avoid $10 penalty fee. Budget $8 per page for recording (typically $16-$32 total). Complete Realty Transfer Certificate accurately to avoid delays. Consider Montana's zero transfer tax when pricing property competitively. Highlight transfer tax savings to out-of-state buyers. Factor property tax reassessment into buyer's carrying costs. Consult tax advisor about capital gains tax planning.</p>
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
        name: 'deedPages',
        label: 'Number of Deed Pages',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'meetsFormatting',
        label: 'Deed Meets Montana Formatting Requirements?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes - No penalty' },
          { value: 'no', label: 'No - $10 penalty' },
        ],
        defaultValue: 'yes',
      },
    ],
    results: [
      { label: 'Montana State Transfer Tax', isCurrency: true },
      { label: 'Recording Fees ($8/page)', isCurrency: true },
      { label: 'Formatting Penalty (if applicable)', isCurrency: true },
      { label: 'Total Montana Transfer Costs', isCurrency: true },
      { label: 'Savings vs Delaware (4%)', isCurrency: true },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
      { label: 'Savings vs Washington State (1.78%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, deedPages, meetsFormatting } = values;

      const stateTransferTax = 0;
      const recordingFees = deedPages * 8;
      const formattingPenalty = meetsFormatting === 'no' ? 10 : 0;
      const totalMontanaCosts = recordingFees + formattingPenalty;

      const delawareTransferTax = salePrice * 0.04;
      const pennsylvaniaTransferTax = salePrice * 0.02;
      const washingtonTransferTax = salePrice * 0.0178;

      const savingsVsDelaware = delawareTransferTax - totalMontanaCosts;
      const savingsVsPennsylvania = pennsylvaniaTransferTax - totalMontanaCosts;
      const savingsVsWashington = washingtonTransferTax - totalMontanaCosts;

      return [
        { label: 'Montana State Transfer Tax', value: '0.00', isCurrency: true },
        { label: 'Recording Fees ($8/page)', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Formatting Penalty (if applicable)', value: formattingPenalty.toFixed(2), isCurrency: true },
        { label: 'Total Montana Transfer Costs', value: totalMontanaCosts.toFixed(2), isCurrency: true },
        { label: 'Savings vs Delaware (4%)', value: savingsVsDelaware.toFixed(2), isCurrency: true },
        { label: 'Savings vs Pennsylvania (2%)', value: savingsVsPennsylvania.toFixed(2), isCurrency: true },
        { label: 'Savings vs Washington State (1.78%)', value: savingsVsWashington.toFixed(2), isCurrency: true },
      ];
    },
  },
};
