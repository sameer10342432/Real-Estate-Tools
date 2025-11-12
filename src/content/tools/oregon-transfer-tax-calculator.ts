import { CalculatorContent } from '@/types';

export const OREGON_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Oregon Transfer Tax Calculator - Recording Fee Calculator',
  description: 'Calculate Oregon recording fees and Washington County transfer tax for real estate transactions',
  slug: 'oregon-transfer-tax-calculator',
  icon: '🌲',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Oregon Recording Fees & Transfer Costs',
    content: `
    <h2>Oregon Transfer Tax Guide</h2>
    <p>Oregon is one of 13 states that <strong>PROHIBITS state-level transfer taxes by law</strong>. However, counties charge recording fees, and <strong>Washington County</strong> is the ONLY Oregon county with a local transfer tax.</p>
    
    <h3>Oregon Transfer Tax Rates</h3>
    <p><strong>Statewide:</strong> $0 - Oregon law PROHIBITS state transfer taxes</p>
    <p><strong>Most Counties:</strong> Recording fees only ($140-$220 typical)</p>
    <p><strong>Washington County ONLY:</strong> $1 per $1,000 (0.1%) transfer tax + recording fees</p>
    <p>Oregon's prohibition on transfer taxes makes it one of the most affordable states for real estate transfer costs.</p>

    <h3>Who Pays Oregon Transfer Fees?</h3>
    <p>In Oregon, cost allocation is typically negotiable but follows these customs:</p>
    <p><strong>Recording Fees:</strong> Usually paid by the <strong>buyer</strong></p>
    <p><strong>Washington County Transfer Tax:</strong> Typically split between buyer and seller, or paid by seller</p>
    <p><strong>Title Insurance:</strong> Split between buyer (lender's policy) and seller (owner's policy)</p>
    <p>Oregon uses <strong>escrow closings</strong> handled by title companies (not attorneys).</p>

    <h3>Oregon County Recording Fees</h3>
    <p>Each Oregon county charges fees to record deeds and mortgages:</p>
    <p><strong>Standard County Fees (Most Counties):</strong></p>
    <ul>
      <li>Deed Recording: $115-$165 for first page</li>
      <li>Additional Pages: $5 per page</li>
      <li>Mortgage Recording: $115-$165 for first page</li>
      <li>Additional Pages: $5 per page</li>
      <li>Combined typical cost: $240-$350</li>
    </ul>
    <p><strong>County-Specific Variations:</strong></p>
    <ul>
      <li>Multnomah County (Portland): $140 base fee</li>
      <li>Lane County (Eugene): $120 base fee</li>
      <li>Deschutes County (Bend): $130 base fee</li>
      <li>Jackson County (Medford): $115 base fee</li>
    </ul>

    <h3>Washington County Transfer Tax - The ONLY Exception</h3>
    <p><strong>Washington County ONLY</strong> (Beaverton, Hillsboro, Tigard area) charges a transfer tax:</p>
    <p><strong>Rate:</strong> $1 per $1,000 of sale price (0.1%)</p>
    <p><strong>Applies to:</strong> All property sales in Washington County</p>
    <p><strong>Who pays:</strong> Typically split 50/50 or paid by seller</p>
    <p><strong>Plus recording fees:</strong> Transfer tax + $140-$160 recording fees</p>
    <p><strong>Why unique:</strong> Established before Oregon's transfer tax ban took effect</p>

    <h3>Oregon Recording Fee Examples</h3>
    <p><strong>Example 1: $400,000 Home in Multnomah County (Portland)</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>Deed Recording Fee: $140</li>
      <li>Mortgage Recording Fee: $140</li>
      <li><strong>Total Transfer Costs: $280 (0.07%)</strong></li>
    </ul>

    <p><strong>Example 2: $500,000 Home in Washington County (Beaverton)</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Washington County Transfer Tax: $500 (0.1%)</li>
      <li>Deed Recording Fee: $150</li>
      <li>Mortgage Recording Fee: $150</li>
      <li><strong>Total Transfer Costs: $800 (0.16%)</strong></li>
    </ul>

    <p><strong>Example 3: $350,000 Home in Lane County (Eugene)</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>Deed Recording Fee: $120</li>
      <li>Mortgage Recording Fee: $120</li>
      <li><strong>Total Transfer Costs: $240 (0.07%)</strong></li>
    </ul>

    <h3>Major Oregon Counties</h3>
    <p>Recording fees and transfer taxes by county:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Main City</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Recording Fee</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Multnomah</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Portland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$140</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Beaverton</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Clackamas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$135</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Lane</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Eugene</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$120</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Deschutes</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Bend</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$130</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Jackson</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Medford</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$115</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <h3>Oregon Escrow Closing System</h3>
    <p>Oregon uses <strong>escrow closings</strong> handled by title companies:</p>
    <ul>
      <li><strong>Title/Escrow Company:</strong> Licensed companies handle closings (not attorneys)</li>
      <li><strong>Escrow Officer:</strong> Neutral third party facilitates transaction</li>
      <li><strong>Escrow Fees:</strong> $400-$800 split between buyer and seller</li>
      <li><strong>Title Insurance:</strong> Standard practice in Oregon (required by lenders)</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>No Attorney Required:</strong> Attorneys optional (unlike East Coast states)</li>
    </ul>

    <h3>How Oregon Compares to Other States</h3>
    <p>Oregon has among the <strong>lowest transfer costs</strong> in the nation:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), California (0.11% + city taxes)</li>
      <li><strong>Similar to:</strong> Texas ($0), Utah ($0), Louisiana ($0), Idaho ($0)</li>
      <li><strong>Washington County:</strong> Still lower than most states even with 0.1% tax</li>
    </ul>
    <p><strong>On a $500,000 home:</strong></p>
    <ul>
      <li>Oregon (non-Washington): ~$280 (0.06%)</li>
      <li>Oregon (Washington County): ~$780 (0.16%)</li>
      <li>California: $550 + city taxes (0.11%+)</li>
      <li>Washington State: $8,650 (1.73%)</li>
    </ul>

    <h3>Why Oregon Prohibits Transfer Taxes</h3>
    <p>Oregon's transfer tax ban has historical and policy reasons:</p>
    <ul>
      <li><strong>Voter Initiative:</strong> Oregon voters have historically opposed transfer taxes</li>
      <li><strong>Economic Development:</strong> Low transaction costs encourage real estate activity</li>
      <li><strong>Property Rights Philosophy:</strong> Transfer taxes seen as barrier to ownership</li>
      <li><strong>Washington County Exception:</strong> Grandfathered before statewide ban</li>
    </ul>

    <h3>Tax Deductibility of Oregon Recording Fees</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Recording fees count as selling expenses, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $500,000, bought for $400,000, $280 in fees → Taxable gain is $99,720 instead of $100,000</p>

    <h3>Oregon Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Oregon (on a $500,000 home in Portland):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $25,000-$30,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Recording Fees (seller portion): $70-$100</li>
      <li>Escrow Fees: $200-$400</li>
      <li>Title Insurance (owner's policy): $1,500-$2,500</li>
      <li>Property Tax Prorations: Varies</li>
      <li>HOA Transfer Fees: $0-$300</li>
      <li><strong>Total: ~$26,800-$33,300 (5.4-6.7%)</strong></li>
    </ul>
    <p><strong>In Washington County, add $500 transfer tax (0.1%)</strong></p>

    <h3>Oregon Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Oregon (on a $500,000 home with 80% financing):</p>
    <ul>
      <li>Recording Fees: $140-$160</li>
      <li>Escrow Fees: $200-$400</li>
      <li>Title Insurance (lender's policy): $1,000-$1,500</li>
      <li>Loan Origination (1%): $4,000</li>
      <li>Appraisal: $500-$700</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $400-$600</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$6,300-$7,400 (1.3-1.5%)</strong></li>
    </ul>
    <p><strong>In Washington County, add $250-$500 transfer tax (buyer/seller split)</strong></p>

    <h3>Tips to Reduce Oregon Transfer Costs</h3>
    <p><strong>Already minimal:</strong> Oregon has no transfer tax to avoid (except Washington County)</p>
    <p><strong>Negotiate escrow fees:</strong> Shop multiple escrow companies for competitive rates</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission with no transfer tax penalty</p>
    <p><strong>Title insurance shopping:</strong> Oregon allows rate competition on owner's policy</p>
    <p><strong>Avoid Washington County:</strong> Buy in Multnomah or Clackamas to save 0.1%</p>

    <h3>Special Considerations for Oregon Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>No transfer tax makes Oregon ideal for flipping (save 1-2% vs. other states)</li>
      <li>Washington County 0.1% tax still minimal compared to California/Washington</li>
      <li>1031 exchanges have minimal Oregon-specific costs</li>
      <li>Wholesaling: No transfer tax even on multiple assignments</li>
      <li>Short-term rentals regulated heavily in Portland (lodging tax applies)</li>
      <li>Portland Metro has urban growth boundary affecting land values</li>
    </ul>

    <h3>Exemptions from Oregon Recording Fees</h3>
    <p>While there's no state transfer tax to be exempt from, recording fees may be reduced/waived for:</p>
    <ul>
      <li>Government entity transfers</li>
      <li>Some non-profit organizations</li>
      <li>Certain veterans (varies by county)</li>
      <li>Corrective instruments with no new consideration</li>
    </ul>
    <p>Washington County transfer tax exemptions are limited - check with county assessor.</p>

    <h3>Oregon vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon (non-Washington)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$280</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon (Washington Co.)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$780</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington State</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.28-3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,650+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11% + city</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550-2,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Idaho</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150-250</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,295-2,590</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Oregon county recording fees</li>
      <li>Washington County transfer tax (if applicable)</li>
      <li>Escrow fee estimates</li>
      <li>Title insurance costs</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Savings vs. other states</li>
    </ul>

    <h3>Common Oregon Transfer Cost Mistakes</h3>
    <p><strong>Mistake 1:</strong> Assuming all of Oregon has $0 transfer costs (Washington County has 0.1%)</p>
    <p><strong>Mistake 2:</strong> Not budgeting for escrow fees ($400-$800 total)</p>
    <p><strong>Mistake 3:</strong> Forgetting title insurance (lender requires it)</p>
    <p><strong>Mistake 4:</strong> Confusing recording fees with transfer tax</p>
    <p><strong>Mistake 5:</strong> Not shopping escrow companies for competitive fees</p>

    <h3>Oregon Real Estate Transfer Process</h3>
    <p>Oregon's escrow-based closing process:</p>
    <ol>
      <li><strong>Purchase agreement signed:</strong> Typically with 30-45 day closing</li>
      <li><strong>Escrow opened:</strong> Buyer deposits earnest money with escrow company</li>
      <li><strong>Title search:</strong> Title company examines ownership history</li>
      <li><strong>Inspections/contingencies:</strong> Buyer completes due diligence</li>
      <li><strong>Loan approval:</strong> Lender approves financing</li>
      <li><strong>Final walkthrough:</strong> Buyer inspects property before closing</li>
      <li><strong>Closing/Signing:</strong> Parties sign documents at escrow office or remotely</li>
      <li><strong>Recording:</strong> Deed filed with county clerk</li>
      <li><strong>Funds disbursed:</strong> Seller receives proceeds same day or next day</li>
    </ol>

    <h3>Portland Metro Specific Considerations</h3>
    <p>Portland area has unique real estate factors:</p>
    <ul>
      <li><strong>Urban Growth Boundary:</strong> Limits development, affects land values</li>
      <li><strong>Short-Term Rental Rules:</strong> Portland heavily regulates STRs</li>
      <li><strong>Metro Affordable Housing Bond:</strong> May create future transfer taxes (proposed)</li>
      <li><strong>Three-County Metro:</strong> Multnomah (no transfer tax), Washington (0.1%), Clackamas (no transfer tax)</li>
    </ul>

    <h3>Resources for Oregon Buyers & Sellers</h3>
    <ul>
      <li><strong>Oregon Real Estate Agency:</strong> oregon.gov/rea</li>
      <li><strong>County Recording Offices:</strong> Each county maintains recording fee schedules</li>
      <li><strong>Oregon Land Title Association:</strong> olta.org</li>
      <li><strong>Portland Regional Realtors:</strong> portlandrealtors.com</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'Oregon County',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard County (No Transfer Tax)' },
          { value: 'washington', label: 'Washington County (Beaverton/Hillsboro - 0.1% Transfer Tax)' },
        ],
        defaultValue: 'standard',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'deedRecordingFee',
        label: 'Deed Recording Fee',
        type: 'number',
        defaultValue: 140,
      },
      {
        name: 'mortgageRecordingFee',
        label: 'Mortgage Recording Fee (if applicable)',
        type: 'number',
        defaultValue: 140,
      },
      {
        name: 'escrowFees',
        label: 'Estimated Escrow Fees (Total)',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'titleInsurance',
        label: 'Title Insurance (Owner\'s + Lender\'s)',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [
      { label: 'State Transfer Tax', isCurrency: true },
      { label: 'Washington County Transfer Tax', isCurrency: true },
      { label: 'Deed Recording Fee', isCurrency: true },
      { label: 'Mortgage Recording Fee', isCurrency: true },
      { label: 'Escrow Fees', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        county,
        salePrice,
        deedRecordingFee,
        mortgageRecordingFee,
        escrowFees,
        titleInsurance,
      } = values;

      const stateTransferTax = 0;
      const washingtonCountyTransferTax = county === 'washington' ? (salePrice / 1000) * 1 : 0;

      const totalCosts = stateTransferTax + washingtonCountyTransferTax + deedRecordingFee + mortgageRecordingFee + escrowFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'State Transfer Tax', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'Washington County Transfer Tax', value: washingtonCountyTransferTax.toFixed(2), isCurrency: true },
        { label: 'Deed Recording Fee', value: deedRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Mortgage Recording Fee', value: mortgageRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Escrow Fees', value: escrowFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
