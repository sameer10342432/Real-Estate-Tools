import { CalculatorContent } from '@/types';

export const IOWA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Iowa Transfer Tax Calculator - Real Estate Transfer Tax Calculator',
  description: 'Calculate Iowa real estate transfer tax and recording fees with first $500 exemption',
  slug: 'iowa-transfer-tax-calculator',
  icon: '🌽',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Iowa Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Iowa Real Estate Transfer Tax Guide</h2>
    <p>Iowa imposes a <strong>real estate transfer tax</strong> on property transfers with a unique feature: <strong>the first $500 of consideration is exempt</strong>. This makes Iowa's effective transfer tax rate slightly lower than the nominal rate.</p>
    
    <h3>Iowa Real Estate Transfer Tax Rate</h3>
    <p><strong>State Rate:</strong> $0.80 per $500 (or fraction thereof) of consideration ABOVE $500 (0.16% effective)</p>
    <p><strong>Alternative expression:</strong> $1.60 per $1,000 (after first $500 exempt)</p>
    <p><strong>First $500 Exempt:</strong> No transfer tax on the first $500 of sale price</p>
    <p><strong>NO county/city taxes:</strong> Iowa does not allow local transfer tax additions</p>

    <h3>Who Pays Iowa Transfer Tax?</h3>
    <p>In Iowa, transfer tax responsibility is split by law:</p>
    <p><strong>Statutory Split:</strong> 50% seller, 50% buyer (unless contract specifies otherwise)</p>
    <p><strong>Customary Practice:</strong> Most contracts follow the 50/50 split</p>
    <p><strong>Negotiable:</strong> Parties can agree to different allocation in purchase agreement</p>
    <p>The tax is collected at closing and remitted to the Iowa Department of Revenue by the county recorder.</p>

    <h3>Iowa Transfer Tax Calculation with $500 Exemption</h3>
    <p>The calculation accounts for the first $500 being tax-free:</p>
    <p><strong>Formula:</strong> (Sale Price - $500) ÷ $500 (rounded up) × $0.80</p>
    <p><strong>Example 1:</strong> $200,000 home = ($200,000 - $500) ÷ $500 = 399 increments × $0.80 = $319.20</p>
    <p><strong>Example 2:</strong> $300,000 home = ($300,000 - $500) ÷ $500 = 599 increments × $0.80 = $479.20</p>

    <h3>Iowa Transfer Tax Examples</h3>
    <p><strong>Example 1: $200,000 Single-Family Home</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>Taxable Amount: $200,000 - $500 = $199,500</li>
      <li>Transfer Tax: 399 increments × $0.80 = $319.20</li>
      <li>Seller Share (50%): $159.60</li>
      <li>Buyer Share (50%): $159.60</li>
      <li>Recording Fee: $30 (typical)</li>
      <li><strong>Total Transfer Costs: $349.20</strong></li>
    </ul>

    <p><strong>Example 2: $350,000 Home in Des Moines</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>Taxable Amount: $350,000 - $500 = $349,500</li>
      <li>Transfer Tax: 699 increments × $0.80 = $559.20</li>
      <li>Seller Share (50%): $279.60</li>
      <li>Buyer Share (50%): $279.60</li>
      <li>Recording Fee: $30</li>
      <li><strong>Total Transfer Costs: $589.20</strong></li>
    </ul>

    <p><strong>Example 3: $500,000 Property in Iowa City</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Taxable Amount: $500,000 - $500 = $499,500</li>
      <li>Transfer Tax: 999 increments × $0.80 = $799.20</li>
      <li>Seller Share (50%): $399.60</li>
      <li>Buyer Share (50%): $399.60</li>
      <li>Recording Fee: $30</li>
      <li><strong>Total Transfer Costs: $829.20</strong></li>
    </ul>

    <h3>Iowa County Recording Fees</h3>
    <p>In addition to transfer tax, Iowa counties charge recording fees:</p>
    <p><strong>Standard Recording Fees:</strong></p>
    <ul>
      <li>Deed Recording: $25-$35 per document</li>
      <li>Mortgage Recording: $25-$35 per document</li>
      <li>Additional Pages: $1-$3 per page over base</li>
      <li>Combined typical cost: $50-$70</li>
    </ul>
    <p><strong>Major County Variations:</strong></p>
    <ul>
      <li>Polk County (Des Moines): $30 base fee</li>
      <li>Linn County (Cedar Rapids): $28 base fee</li>
      <li>Scott County (Davenport): $30 base fee</li>
      <li>Johnson County (Iowa City): $32 base fee</li>
    </ul>

    <h3>How the $500 Exemption Works</h3>
    <p>Iowa's $500 exemption provides a small savings on every transaction:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Without Exemption</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">With $500 Exemption</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$320.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$319.20</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.80</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$480.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$479.20</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.80</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$799.20</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.80</td>
      </tr>
    </table>

    <h3>No County or Municipal Transfer Taxes</h3>
    <p>Iowa state law prohibits counties and cities from imposing additional transfer taxes. The state rate of $0.80 per $500 (after $500 exemption) is uniform statewide.</p>

    <h3>Exemptions from Iowa Transfer Tax</h3>
    <p>Certain transactions are exempt from Iowa real estate transfer tax:</p>
    <ul>
      <li>Transfers between spouses or to former spouse per divorce decree</li>
      <li>Transfers from parent to child or child to parent (lineal descendants)</li>
      <li>Foreclosure deeds and sheriff's deeds</li>
      <li>Quitclaim deeds with no consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Gifts with no monetary consideration</li>
      <li>Estate distributions and inheritance transfers</li>
      <li>Transfers to correct errors in prior deeds</li>
      <li>Transfers solely to create/terminate joint tenancy</li>
      <li>Partition deeds among co-owners (no consideration)</li>
    </ul>

    <h3>How Iowa Compares to Other States</h3>
    <p>At 0.16% (after $500 exemption), Iowa's transfer tax is moderate:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), New York (1-2%), Tennessee (0.37%)</li>
      <li><strong>Higher than:</strong> Texas (0%), Louisiana (0%), Utah (0%), Kentucky (0.1%)</li>
      <li><strong>Similar to:</strong> Oklahoma (0.15%), Colorado (0.01%), Alabama (0.1%)</li>
    </ul>

    <h3>Tax Deductibility of Iowa Transfer Tax</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Transfer tax counts as a selling expense, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $300,000, bought for $250,000, $479 in transfer tax → Taxable gain is $49,521 instead of $50,000</p>

    <h3>Iowa Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Iowa (on a $250,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $12,500-$15,000</li>
      <li>Transfer Tax (50% share): $200</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Recording Fees (seller portion): $15-$25</li>
      <li>Attorney Fees: $500-$1,000 (common in Iowa)</li>
      <li>Property Tax Prorations: Varies</li>
      <li><strong>Total: ~$14,000-$17,400 (5.6-7.0%)</strong></li>
    </ul>

    <h3>Iowa Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Iowa (on a $250,000 home with 80% financing):</p>
    <ul>
      <li>Transfer Tax (50% share): $200</li>
      <li>Recording Fees: $50-$70</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Loan Origination (1%): $2,000</li>
      <li>Appraisal: $400-$600</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $300-$500</li>
      <li>Attorney Fees: $500-$1,000</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$4,300-$5,600 (1.7-2.2%)</strong></li>
    </ul>

    <h3>Tips to Reduce Iowa Transfer Costs</h3>
    <p><strong>Negotiate split:</strong> Ask buyer to pay more than 50% of transfer tax</p>
    <p><strong>Already low:</strong> At 0.16% effective rate, Iowa transfer tax is minimal</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but still pay transfer tax</p>
    <p><strong>Shop attorney fees:</strong> Attorney closings common in Iowa - get multiple quotes</p>
    <p><strong>Title insurance:</strong> Iowa allows rate competition</p>
    <p><strong>Claim exemptions:</strong> Ensure valid exemptions (family transfers) are claimed</p>

    <h3>Iowa Real Estate Closing Process</h3>
    <p>Iowa uses <strong>attorney closings</strong> or <strong>title company closings</strong>, varying by region:</p>
    <ul>
      <li><strong>Eastern Iowa:</strong> Attorney closings more common</li>
      <li><strong>Western Iowa:</strong> Mix of attorney and title company closings</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Title Search:</strong> 40+ years of ownership history reviewed</li>
      <li><strong>Abstract Continuation:</strong> Iowa uses abstract of title system</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing (TRID rule)</li>
    </ul>

    <h3>Special Considerations for Iowa Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Low transfer tax (0.16%) makes Iowa affordable for flipping</li>
      <li>$500 exemption provides small savings on every deal</li>
      <li>1031 exchanges still require transfer tax payment on sales</li>
      <li>Wholesaling: Assignment fees may be subject to transfer tax (consult attorney)</li>
      <li>LLC transfers typically exempt if no consideration changes hands</li>
      <li>Agricultural land transfers common in Iowa - same rates apply</li>
    </ul>

    <h3>Iowa Agricultural Land Transfers</h3>
    <p>Iowa is a major agricultural state with unique land transfer considerations:</p>
    <ul>
      <li><strong>Same transfer tax:</strong> Farmland sales subject to same $0.80 per $500 rate</li>
      <li><strong>Agricultural exemptions:</strong> Family farm transfers may qualify for exemptions</li>
      <li><strong>High land values:</strong> Iowa farmland ($7,000-$12,000/acre) generates significant transfer tax</li>
      <li><strong>Example:</strong> 160-acre farm at $10,000/acre = $1.6M sale × 0.16% = ~$2,559 transfer tax</li>
    </ul>

    <h3>Regional Variations in Iowa</h3>
    <p>While transfer tax is uniform statewide, other costs vary by region:</p>
    <p><strong>Des Moines Metro (Polk County):</strong></p>
    <ul>
      <li>Higher property values = higher absolute transfer tax</li>
      <li>Attorney closings common</li>
      <li>Attorney fees: $600-$1,200</li>
    </ul>
    <p><strong>Iowa City/Cedar Rapids (Eastern Iowa):</strong></p>
    <ul>
      <li>Attorney closings predominant</li>
      <li>University town market (Iowa City)</li>
      <li>Attorney fees: $500-$1,000</li>
    </ul>
    <p><strong>Rural Iowa:</strong></p>
    <ul>
      <li>Lower property values = lower absolute transfer tax</li>
      <li>Agricultural land transfers common</li>
      <li>Attorney fees: $400-$800</li>
    </ul>

    <h3>Iowa vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300,000 Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Iowa</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.16% (after $500 exempt)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$479.20</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nebraska</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.25 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$675</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">South Dakota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.50 per $500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Minnesota</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.33%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$990</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Wisconsin</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.30%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$900</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Illinois</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies by county</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-1,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Missouri</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies by county</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0-600</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Iowa real estate transfer tax (with $500 exemption)</li>
      <li>Buyer and seller shares (50/50 split)</li>
      <li>Recording fees estimate</li>
      <li>Attorney fees estimate</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
    </ul>

    <h3>Common Iowa Transfer Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Forgetting to subtract $500 exemption (overpaying by $0.80)</p>
    <p><strong>Mistake 2:</strong> Assuming seller pays 100% (it's 50/50 split by law)</p>
    <p><strong>Mistake 3:</strong> Not claiming valid exemptions (family transfers, foreclosures)</p>
    <p><strong>Mistake 4:</strong> Confusing transfer tax ($0.80/$500) with recording fees ($25-35)</p>
    <p><strong>Mistake 5:</strong> Not budgeting for attorney fees (common in Iowa closings)</p>

    <h3>Iowa Transfer Tax Declaration Form</h3>
    <p>Iowa requires a Real Estate Transfer Tax Declaration:</p>
    <ul>
      <li><strong>Form 54-028:</strong> Iowa Real Estate Transfer Tax Declaration</li>
      <li><strong>Information required:</strong> Property address, consideration, exemption claims</li>
      <li><strong>Filed with:</strong> County recorder at time of deed recording</li>
      <li><strong>State copy:</strong> Forwarded to Iowa Department of Revenue</li>
      <li><strong>Public record:</strong> Declaration is part of public land records</li>
    </ul>

    <h3>Iowa Abstract of Title System</h3>
    <p>Iowa uses a traditional abstract continuation system:</p>
    <ul>
      <li><strong>Abstract of Title:</strong> Chronological summary of ownership history</li>
      <li><strong>Abstract Continuation:</strong> Abstracter updates abstract with new transaction</li>
      <li><strong>Attorney Opinion:</strong> Attorney examines abstract and issues title opinion</li>
      <li><strong>Title Insurance:</strong> Optional but increasingly common (required by lenders)</li>
      <li><strong>Abstracter Fees:</strong> $300-$600 for continuation</li>
    </ul>

    <h3>Resources for Iowa Buyers & Sellers</h3>
    <ul>
      <li><strong>Iowa Department of Revenue:</strong> tax.iowa.gov</li>
      <li><strong>County Recorder Offices:</strong> Each county handles deed recording</li>
      <li><strong>Iowa State Bar Association:</strong> iowabar.org for attorney referrals</li>
      <li><strong>Iowa Association of Realtors:</strong> iowarealtors.com</li>
    </ul>

    <h3>Iowa Property Tax vs. Transfer Tax</h3>
    <p>Don't confuse these two different taxes:</p>
    <p><strong>Transfer Tax:</strong></p>
    <ul>
      <li>One-time tax when property changes hands</li>
      <li>0.16% of sale price (after first $500 exempt)</li>
      <li>Collected at closing</li>
      <li>Split 50/50 between buyer and seller</li>
    </ul>
    <p><strong>Property Tax (Annual):</strong></p>
    <ul>
      <li>Annual tax on property ownership</li>
      <li>Based on assessed value (varies by county)</li>
      <li>Iowa property taxes are moderate (1.4-1.8% of assessed value typical)</li>
      <li>Goes to local government (county, city, school district)</li>
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
        name: 'attorneyFees',
        label: 'Estimated Attorney Fees (if applicable)',
        type: 'number',
        defaultValue: 750,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance/Abstract',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Iowa Transfer Tax (Total)', isCurrency: true },
      { label: 'Seller Share (50%)', isCurrency: true },
      { label: 'Buyer Share (50%)', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Attorney Fees', isCurrency: true },
      { label: 'Title Insurance/Abstract', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, recordingFees, attorneyFees, titleInsurance } = values;

      const taxableAmount = Math.max(0, salePrice - 500);
      const transferTaxIncrements = Math.ceil(taxableAmount / 500);
      const totalTransferTax = transferTaxIncrements * 0.80;

      const sellerShare = totalTransferTax / 2;
      const buyerShare = totalTransferTax / 2;

      const totalCosts = totalTransferTax + recordingFees + attorneyFees + titleInsurance;
      const percentage = (totalCosts / salePrice) * 100;

      return [
        { label: 'Iowa Transfer Tax (Total)', value: totalTransferTax.toFixed(2), isCurrency: true },
        { label: 'Seller Share (50%)', value: sellerShare.toFixed(2), isCurrency: true },
        { label: 'Buyer Share (50%)', value: buyerShare.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Attorney Fees', value: attorneyFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance/Abstract', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
      ];
    },
  },
};
