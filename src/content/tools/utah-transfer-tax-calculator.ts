import { CalculatorContent } from '@/types';

export const UTAH_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Utah Transfer Tax Calculator - Recording Fee Calculator',
  description: 'Calculate Utah recording fees for real estate transactions - Utah has NO state transfer tax',
  slug: 'utah-transfer-tax-calculator',
  icon: '⛰️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Utah Recording Fees & Transfer Costs (NO Transfer Tax)',
    content: `
    <h2>Utah Transfer Tax Guide</h2>
    <p>Utah is one of only <strong>13 states in the nation that does NOT impose a state transfer tax</strong>. This makes Utah one of the most affordable states for real estate transfer costs, with buyers and sellers only paying minimal recording fees.</p>
    
    <h3>Utah Transfer Tax Rates</h3>
    <p><strong>State Transfer Tax:</strong> $0 - Utah law PROHIBITS state transfer taxes</p>
    <p><strong>County Transfer Tax:</strong> $0 - Counties are NOT allowed to impose transfer taxes</p>
    <p><strong>Municipal Transfer Tax:</strong> $0 - Cities are NOT allowed to impose transfer taxes</p>
    <p><strong>Recording Fees Only:</strong> $50-$75 per document (varies by county)</p>
    <p>Utah's prohibition on transfer taxes makes it one of the most seller-friendly and buyer-friendly states in the nation.</p>

    <h3>Who Pays Utah Recording Fees?</h3>
    <p>In Utah, recording fee responsibility is typically allocated as follows:</p>
    <p><strong>Deed Recording Fees:</strong> Usually paid by the <strong>buyer</strong></p>
    <p><strong>Mortgage Recording Fees:</strong> Paid by the <strong>buyer</strong></p>
    <p><strong>Seller Costs:</strong> Sellers typically pay no recording-related fees</p>
    <p>Utah uses <strong>title company/escrow closings</strong> handled by licensed escrow officers (not attorneys).</p>

    <h3>Utah Recording Fees</h3>
    <p>Each Utah county charges fees to record deeds and mortgages:</p>
    <p><strong>Standard County Recording Fees:</strong></p>
    <ul>
      <li>Entry Fee (per document): $30-$50</li>
      <li>Per Page Fee: $2-$10 per page</li>
      <li>Typical Deed (3-5 pages): $40-$75</li>
      <li>Typical Mortgage (5-10 pages): $50-$100</li>
      <li>Combined typical cost: $90-$175</li>
    </ul>
    <p><strong>Major County Variations:</strong></p>
    <ul>
      <li>Salt Lake County: $50 entry + $10/page</li>
      <li>Utah County (Provo): $40 entry + $5/page</li>
      <li>Davis County: $45 entry + $5/page</li>
      <li>Weber County (Ogden): $40 entry + $5/page</li>
      <li>Washington County (St. George): $50 entry + $10/page</li>
    </ul>

    <h3>13 States with NO Transfer Tax</h3>
    <p>Utah is part of an exclusive group of states without transfer taxes:</p>
    <ol>
      <li>Alaska</li>
      <li>Idaho</li>
      <li>Indiana</li>
      <li>Louisiana (except Orleans Parish)</li>
      <li>Kansas (state level - some counties charge)</li>
      <li>Mississippi (state level - some counties charge)</li>
      <li>Missouri (state level - some counties charge)</li>
      <li>Montana</li>
      <li>New Mexico</li>
      <li>North Dakota</li>
      <li>Oregon (except Washington County)</li>
      <li>Texas</li>
      <li><strong>Utah</strong></li>
      <li>Wyoming</li>
    </ol>

    <h3>Utah Recording Fee Examples</h3>
    <p><strong>Example 1: $300,000 Home in Salt Lake County</strong></p>
    <ul>
      <li>Sale Price: $300,000</li>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>Deed Recording Fee: $70</li>
      <li>Mortgage Recording Fee: $90</li>
      <li><strong>Total Transfer Costs: $160 (0.05%)</strong></li>
    </ul>

    <p><strong>Example 2: $500,000 Home in Utah County (Provo)</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>Deed Recording Fee: $60</li>
      <li>Mortgage Recording Fee: $70</li>
      <li><strong>Total Transfer Costs: $130 (0.03%)</strong></li>
    </ul>

    <p><strong>Example 3: $750,000 Home in Washington County (St. George)</strong></p>
    <ul>
      <li>Sale Price: $750,000</li>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>Deed Recording Fee: $80</li>
      <li>Mortgage Recording Fee: $100</li>
      <li><strong>Total Transfer Costs: $180 (0.02%)</strong></li>
    </ul>

    <h3>How Utah Compares to Other States</h3>
    <p>Utah has the <strong>lowest transfer costs</strong> in the nation (tied with other no-transfer-tax states):</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Utah</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$130-180</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100-150</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Idaho</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$120-170</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Colorado</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.01 per $100</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,295-2,590</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.10 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550+</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <h3>Tax Deductibility of Utah Recording Fees</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Recording fees count as selling expenses, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $500,000, bought for $400,000, $65 in recording fees → Taxable gain is $99,935 instead of $100,000</p>
    <p>The impact is minimal given Utah's low fees.</p>

    <h3>Utah Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Utah (on a $500,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $25,000-$30,000</li>
      <li>State Transfer Tax: $0</li>
      <li>Recording Fees (seller portion): $0 (buyer pays)</li>
      <li>Escrow Fees: $300-$600</li>
      <li>Title Insurance (owner's policy): $1,500-$2,500</li>
      <li>Property Tax Prorations: Varies</li>
      <li>HOA Transfer Fees: $0-$300</li>
      <li><strong>Total: ~$26,800-$33,400 (5.4-6.7%)</strong></li>
    </ul>

    <h3>Utah Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Utah (on a $500,000 home with 80% financing):</p>
    <ul>
      <li>NO Transfer Tax: $0 (major savings vs. other states)</li>
      <li>Recording Fees: $130-$180</li>
      <li>Escrow Fees: $300-$600</li>
      <li>Title Insurance (lender's policy): $800-$1,200</li>
      <li>Loan Origination (1%): $4,000</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $400-$600</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$6,100-$7,200 (1.2-1.4%)</strong></li>
    </ul>

    <h3>Why Utah Has No Transfer Tax</h3>
    <p>Utah's transfer tax prohibition has historical and policy reasons:</p>
    <ul>
      <li><strong>Conservative Tax Philosophy:</strong> Utah favors low taxes and limited government</li>
      <li><strong>Property Rights:</strong> Transfer taxes seen as burden on property ownership</li>
      <li><strong>Economic Development:</strong> Low transaction costs encourage real estate activity</li>
      <li><strong>Pro-Business Climate:</strong> Utah ranks among the best states for business</li>
      <li><strong>Population Growth:</strong> No transfer tax helps accommodate rapid population growth</li>
    </ul>

    <h3>Utah Escrow Closing System</h3>
    <p>Utah uses <strong>escrow/title company closings</strong> (not attorney closings):</p>
    <ul>
      <li><strong>Escrow Company:</strong> Licensed companies handle closings</li>
      <li><strong>Escrow Officer:</strong> Neutral third party facilitates transaction</li>
      <li><strong>Escrow Fees:</strong> $600-$1,200 total, typically split 50/50</li>
      <li><strong>Title Insurance:</strong> Required by lenders, optional for cash buyers</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>No Attorney Required:</strong> Attorneys optional (common in East Coast states)</li>
    </ul>

    <h3>Tips for Utah Buyers & Sellers</h3>
    <p><strong>Enjoy the savings:</strong> No transfer tax means you keep more money at closing</p>
    <p><strong>FSBO friendly:</strong> For Sale By Owner has no transfer tax penalty</p>
    <p><strong>Investor advantage:</strong> Flipping properties has minimal transfer costs</p>
    <p><strong>Shop escrow fees:</strong> Escrow company fees vary - get multiple quotes</p>
    <p><strong>Title insurance:</strong> Utah allows rate competition on owner's policy</p>

    <h3>Special Considerations for Utah Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>No transfer tax makes Utah ideal for flipping (save 1-4% vs. other states)</li>
      <li>No transfer tax on multiple transactions = more profit retained</li>
      <li>1031 exchanges have minimal Utah-specific costs</li>
      <li>Wholesaling: No transfer tax even on multiple assignments</li>
      <li>Short-term rentals regulated in some cities (Salt Lake, Park City)</li>
      <li>Fast-growing market with strong appreciation</li>
    </ul>

    <h3>Utah Major Markets</h3>
    <p>Utah's real estate markets all benefit from no transfer tax:</p>
    <p><strong>Wasatch Front (Salt Lake City, Provo, Ogden):</strong></p>
    <ul>
      <li>80% of Utah's population</li>
      <li>Strong job growth (tech, finance)</li>
      <li>Recording fees: $90-$160 typical</li>
    </ul>
    <p><strong>Southern Utah (St. George, Cedar City):</strong></p>
    <ul>
      <li>Retirement and second-home market</li>
      <li>Lower property values than Wasatch Front</li>
      <li>Recording fees: $100-$180 typical</li>
    </ul>
    <p><strong>Park City/Summit County:</strong></p>
    <ul>
      <li>Luxury ski resort market</li>
      <li>Higher property values</li>
      <li>No transfer tax even on $5M+ homes = huge savings</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Utah recording fees (no transfer tax)</li>
      <li>Escrow fee estimates</li>
      <li>Title insurance costs</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Comparison savings vs. states with transfer taxes</li>
    </ul>

    <h3>Common Utah Transfer Cost Mistakes</h3>
    <p><strong>Mistake 1:</strong> Assuming there must be some transfer tax (there isn't!)</p>
    <p><strong>Mistake 2:</strong> Not shopping escrow companies for competitive fees</p>
    <p><strong>Mistake 3:</strong> Forgetting title insurance (lender requires it)</p>
    <p><strong>Mistake 4:</strong> Not understanding Utah's low closing costs advantage</p>
    <p><strong>Mistake 5:</strong> Paying unnecessary attorney fees (attorneys not required)</p>

    <h3>Utah Real Estate Transfer Process</h3>
    <p>Utah's streamlined closing process:</p>
    <ol>
      <li><strong>Purchase agreement signed:</strong> Typically with 30-45 day closing</li>
      <li><strong>Escrow opened:</strong> Buyer deposits earnest money</li>
      <li><strong>Title search:</strong> Title company examines ownership history</li>
      <li><strong>Inspections/contingencies:</strong> Buyer completes due diligence</li>
      <li><strong>Loan approval:</strong> Lender approves financing</li>
      <li><strong>Final walkthrough:</strong> Buyer inspects property before closing</li>
      <li><strong>Closing/Signing:</strong> Sign documents at escrow office or remotely</li>
      <li><strong>Recording:</strong> Deed filed with county recorder</li>
      <li><strong>Funds disbursed:</strong> Seller receives proceeds same day or next day</li>
    </ol>

    <h3>Utah Property Tax vs. Transfer Tax</h3>
    <p>Don't confuse these two different taxes:</p>
    <p><strong>Transfer Tax:</strong></p>
    <ul>
      <li>Utah does NOT have a transfer tax</li>
      <li>$0 state, county, and municipal transfer tax</li>
      <li>Only minimal recording fees</li>
    </ul>
    <p><strong>Property Tax (Annual):</strong></p>
    <ul>
      <li>Annual tax on property ownership</li>
      <li>Based on assessed value (varies by county)</li>
      <li>Typically 0.5-0.7% of market value annually</li>
      <li>Utah has relatively low property taxes compared to many states</li>
    </ul>

    <h3>Utah's Competitive Advantage</h3>
    <p>Utah's lack of transfer tax gives it a major competitive advantage:</p>
    <ul>
      <li><strong>Attracting Residents:</strong> Lower transaction costs make moving to Utah affordable</li>
      <li><strong>Real Estate Activity:</strong> No transfer tax encourages buying/selling</li>
      <li><strong>Investor Friendly:</strong> Flippers and wholesalers save thousands per deal</li>
      <li><strong>Business Relocation:</strong> Companies relocating pay no transfer tax on facilities</li>
      <li><strong>Economic Growth:</strong> Contributes to Utah's rapid economic expansion</li>
    </ul>

    <h3>Resources for Utah Buyers & Sellers</h3>
    <ul>
      <li><strong>Utah Division of Real Estate:</strong> realestate.utah.gov</li>
      <li><strong>County Recorder Offices:</strong> Each county maintains recording fee schedules</li>
      <li><strong>Utah Land Title Association:</strong> ulta.org</li>
      <li><strong>Salt Lake Board of Realtors:</strong> slrealtors.com</li>
    </ul>

    <h3>Utah Market Trends & Transfer Cost Impact</h3>
    <p>Utah's real estate market dynamics:</p>
    <ul>
      <li><strong>Rapid Appreciation:</strong> Utah home values have grown significantly</li>
      <li><strong>No Transfer Tax Drag:</strong> Sellers keep more equity without 1-4% transfer tax</li>
      <li><strong>Population Growth:</strong> Utah is one of fastest-growing states</li>
      <li><strong>Tech Hub Development:</strong> Silicon Slopes driving demand</li>
      <li><strong>Affordable Transactions:</strong> No transfer tax keeps trading costs low</li>
    </ul>
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
        name: 'county',
        label: 'Utah County',
        type: 'select',
        options: [
          { value: 'salt_lake', label: 'Salt Lake County ($50 entry + $10/page)' },
          { value: 'utah', label: 'Utah County - Provo ($40 entry + $5/page)' },
          { value: 'davis', label: 'Davis County ($45 entry + $5/page)' },
          { value: 'weber', label: 'Weber County - Ogden ($40 entry + $5/page)' },
          { value: 'washington', label: 'Washington County - St. George ($50 entry + $10/page)' },
        ],
        defaultValue: 'salt_lake',
      },
      {
        name: 'escrowFees',
        label: 'Estimated Escrow Fees (Total)',
        type: 'number',
        defaultValue: 900,
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
      { label: 'County Transfer Tax', isCurrency: true },
      { label: 'Deed Recording Fee', isCurrency: true },
      { label: 'Mortgage Recording Fee', isCurrency: true },
      { label: 'Escrow Fees', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, county, escrowFees, titleInsurance } = values;

      const stateTransferTax = 0;
      const countyTransferTax = 0;

      let deedRecordingFee = 0;
      let mortgageRecordingFee = 0;

      switch (county) {
        case 'salt_lake':
        case 'washington':
          deedRecordingFee = 50 + (5 * 10);
          mortgageRecordingFee = 50 + (8 * 10);
          break;
        case 'utah':
        case 'weber':
          deedRecordingFee = 40 + (5 * 5);
          mortgageRecordingFee = 40 + (8 * 5);
          break;
        case 'davis':
          deedRecordingFee = 45 + (5 * 5);
          mortgageRecordingFee = 45 + (8 * 5);
          break;
        default:
          deedRecordingFee = 50 + (5 * 10);
          mortgageRecordingFee = 50 + (8 * 10);
      }

      const totalCosts = stateTransferTax + countyTransferTax + deedRecordingFee + mortgageRecordingFee + escrowFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'State Transfer Tax', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'County Transfer Tax', value: countyTransferTax.toFixed(2), isCurrency: true },
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
