import { CalculatorContent } from '@/types';

export const CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Connecticut Transfer Tax Calculator - Conveyance Tax Calculator',
  description: 'Calculate Connecticut conveyance tax and municipal transfer tax with tiered rates for real estate transactions',
  slug: 'connecticut-transfer-tax-calculator',
  icon: '⚓',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Connecticut Conveyance Tax & Municipal Transfer Tax',
    content: `
    <h2>Connecticut Conveyance Tax Guide</h2>
    <p>Connecticut imposes a <strong>tiered conveyance tax</strong> (also called transfer tax) on real property transfers. Connecticut has one of the most complex transfer tax structures in the nation, with rates that increase based on property value and additional municipal taxes.</p>
    
    <h3>Connecticut Conveyance Tax Rates (Tiered Structure)</h3>
    <p><strong>Residential Property (1-3 family homes):</strong></p>
    <ul>
      <li>0.75% on first $800,000</li>
      <li>1.25% on amount from $800,000 to $2,500,000</li>
      <li>2.25% on amount over $2,500,000</li>
    </ul>
    <p><strong>Commercial/Non-Residential Property:</strong></p>
    <ul>
      <li>Flat rate: 1.11% on entire sale price</li>
    </ul>
    <p><strong>Municipal Conveyance Tax (Additional):</strong></p>
    <ul>
      <li>Standard: 0.25% in most municipalities</li>
      <li>Targeted municipalities: 0.50% (about 20 towns including Westport, Greenwich, New Canaan, Darien)</li>
    </ul>
    <p>Connecticut's tiered system means higher-priced homes pay significantly more in transfer taxes.</p>

    <h3>Who Pays Connecticut Conveyance Tax?</h3>
    <p>In Connecticut, conveyance tax is typically split:</p>
    <p><strong>State Conveyance Tax:</strong> Split 50/50 between buyer and seller (customary, but negotiable)</p>
    <p><strong>Municipal Conveyance Tax:</strong> Typically paid by <strong>seller</strong></p>
    <p><strong>Total burden:</strong> Usually seller pays ~60-70% of total transfer taxes</p>
    <p>The taxes are collected at closing by the attorney and remitted to the State of Connecticut and municipality.</p>

    <h3>Connecticut Tiered Tax Calculation Examples</h3>
    <p><strong>Example 1: $500,000 Residential Home</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>State Conveyance Tax: $500,000 × 0.75% = $3,750</li>
      <li>Municipal Tax (0.25%): $500,000 × 0.25% = $1,250</li>
      <li><strong>Total Transfer Taxes: $5,000 (1.0%)</strong></li>
    </ul>

    <p><strong>Example 2: $1,200,000 Residential Home</strong></p>
    <ul>
      <li>Sale Price: $1,200,000</li>
      <li>State Conveyance Tax:</li>
      <li>- First $800,000 × 0.75% = $6,000</li>
      <li>- Next $400,000 × 1.25% = $5,000</li>
      <li>- Total State Tax: $11,000</li>
      <li>Municipal Tax (0.25%): $1,200,000 × 0.25% = $3,000</li>
      <li><strong>Total Transfer Taxes: $14,000 (1.17%)</strong></li>
    </ul>

    <p><strong>Example 3: $3,000,000 Luxury Home</strong></p>
    <ul>
      <li>Sale Price: $3,000,000</li>
      <li>State Conveyance Tax:</li>
      <li>- First $800,000 × 0.75% = $6,000</li>
      <li>- Next $1,700,000 × 1.25% = $21,250</li>
      <li>- Next $500,000 × 2.25% = $11,250</li>
      <li>- Total State Tax: $38,500</li>
      <li>Municipal Tax (0.50% in targeted town): $3,000,000 × 0.50% = $15,000</li>
      <li><strong>Total Transfer Taxes: $53,500 (1.78%)</strong></li>
    </ul>

    <h3>Targeted Municipalities with 0.50% Rate</h3>
    <p>The following Connecticut towns charge 0.50% municipal conveyance tax (double the standard rate):</p>
    <ul>
      <li>Bethel</li>
      <li>Bridgeport</li>
      <li>Danbury</li>
      <li>Darien</li>
      <li>Greenwich</li>
      <li>New Canaan</li>
      <li>Norwalk</li>
      <li>Shelton</li>
      <li>Stamford</li>
      <li>Stratford</li>
      <li>Westport</li>
      <li>Wilton</li>
      <li>And several other municipalities</li>
    </ul>

    <h3>Connecticut Recording Fees</h3>
    <p>In addition to conveyance taxes, Connecticut charges recording fees:</p>
    <p><strong>Town Clerk Recording Fees:</strong></p>
    <ul>
      <li>First page: $53-$63 (varies by town)</li>
      <li>Additional pages: $4-$5 per page</li>
      <li>Typical deed: $70-$90</li>
      <li>Typical mortgage: $80-$100</li>
    </ul>

    <h3>How Connecticut Compares to Other States</h3>
    <p>Connecticut has among the <strong>highest transfer tax rates</strong> in the nation:</p>
    <ul>
      <li><strong>Higher than:</strong> Most states including Texas (0%), California (0.11%), Florida (0.7%)</li>
      <li><strong>Lower than:</strong> Delaware (4% on total price), Washington DC (varies up to 2.2%+)</li>
      <li><strong>Complex tier system:</strong> Only a few states use tiered structures</li>
    </ul>
    <p><strong>On a $1,000,000 home:</strong></p>
    <ul>
      <li>Connecticut: $11,000-$14,000 (1.1-1.4%)</li>
      <li>Pennsylvania: $20,000 (2%)</li>
      <li>Delaware: $40,000 (4%)</li>
      <li>Texas: $0</li>
    </ul>

    <h3>Exemptions from Connecticut Conveyance Tax</h3>
    <p>Certain transactions are exempt from Connecticut conveyance tax:</p>
    <ul>
      <li>Transfers to/from spouse (or former spouse per divorce decree)</li>
      <li>Gifts to lineal descendants (children, grandchildren)</li>
      <li>Transfers for consideration less than $2,000</li>
      <li>Foreclosure deeds</li>
      <li>Quitclaim deeds with no consideration</li>
      <li>Government entity transfers</li>
      <li>Religious/charitable organization transfers (qualified)</li>
      <li>Partition deeds among co-owners</li>
      <li>Corrective deeds with no new consideration</li>
    </ul>

    <h3>Tax Deductibility of Connecticut Conveyance Tax</h3>
    <p><strong>Not deductible</strong> on federal income tax returns as a direct expense.</p>
    <p><strong>Can reduce capital gains:</strong> Conveyance tax counts as a selling expense, lowering your taxable profit</p>
    <p><strong>Example:</strong> Sell for $1M, bought for $800K, $11K in conveyance tax → Taxable gain is $189K instead of $200K</p>

    <h3>Connecticut Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Connecticut (on a $1,000,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $50,000-$60,000</li>
      <li>State Conveyance Tax (50% share): $4,750</li>
      <li>Municipal Conveyance Tax (100%): $2,500-$5,000</li>
      <li>Title Insurance: $2,000-$3,000</li>
      <li>Recording Fees (seller portion): $50-$100</li>
      <li>Attorney Fees: $1,500-$3,000</li>
      <li>Property Tax Prorations: Varies</li>
      <li><strong>Total: ~$60,800-$76,100 (6.1-7.6%)</strong></li>
    </ul>

    <h3>Connecticut Buyer Closing Costs Breakdown</h3>
    <p>Typical buyer closing costs in Connecticut (on a $1,000,000 home with 80% financing):</p>
    <ul>
      <li>State Conveyance Tax (50% share): $4,750</li>
      <li>Recording Fees: $80-$120</li>
      <li>Title Insurance: $2,000-$3,000</li>
      <li>Loan Origination (1%): $8,000</li>
      <li>Appraisal: $500-$800</li>
      <li>Credit Report: $25-$50</li>
      <li>Home Inspection: $500-$800</li>
      <li>Attorney Fees: $1,500-$3,000</li>
      <li>Property Tax & Insurance Escrow: Varies</li>
      <li><strong>Total: ~$17,400-$20,500 (1.7-2.1%)</strong></li>
    </ul>

    <h3>Tips to Reduce Connecticut Transfer Costs</h3>
    <p><strong>Negotiate split:</strong> Buyer/seller can negotiate different split from 50/50</p>
    <p><strong>Avoid targeted towns:</strong> Buy in standard municipality to save 0.25% on municipal tax</p>
    <p><strong>Consider property type:</strong> Commercial flat rate (1.11%) may be better than high-tier residential</p>
    <p><strong>Shop attorney fees:</strong> Connecticut requires attorney closings - get multiple quotes</p>
    <p><strong>Claim exemptions:</strong> Ensure valid exemptions (family transfers, low consideration) are claimed</p>

    <h3>Connecticut Real Estate Closing Process</h3>
    <p>Connecticut uses <strong>attorney closings</strong> (required by law):</p>
    <ul>
      <li><strong>Attorney required:</strong> CT law requires licensed attorney for closings</li>
      <li><strong>Timeline:</strong> 45-60 days from contract to closing (longer than most states)</li>
      <li><strong>Title Search:</strong> 50+ years of ownership history reviewed</li>
      <li><strong>Municipal Searches:</strong> Building, zoning, tax, water/sewer liens checked</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing (TRID rule)</li>
      <li><strong>Settlement:</strong> In-person closing with attorneys for both parties</li>
      <li><strong>Recording:</strong> Deed filed with town clerk (not county)</li>
    </ul>

    <h3>Special Considerations for Connecticut Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>High transfer taxes (1-2%) significantly impact flip profitability</li>
      <li>Tiered structure makes luxury flips expensive ($2.5M+ pays 2.25% on top tier)</li>
      <li>Municipal tax varies 2x between standard (0.25%) and targeted (0.5%) towns</li>
      <li>1031 exchanges still require conveyance tax payment on sales</li>
      <li>Commercial properties pay flat 1.11% regardless of price</li>
      <li>Factor high transfer costs into ARV calculations</li>
    </ul>

    <h3>Fairfield County Considerations</h3>
    <p>Fairfield County (southwestern CT) has unique real estate factors:</p>
    <ul>
      <li><strong>High property values:</strong> Median homes $600K-$1M+</li>
      <li><strong>Many targeted municipalities:</strong> Greenwich, Westport, Darien, New Canaan all charge 0.5%</li>
      <li><strong>NYC commuter market:</strong> Prices influenced by Manhattan proximity</li>
      <li><strong>Transfer tax impact:</strong> $1.5M home in Greenwich pays ~$24,500 in transfer taxes</li>
    </ul>

    <h3>Connecticut vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1M Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Connecticut (standard town)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0-1.5% tiered</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Connecticut (targeted town)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.25-2.0% tiered</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.4-2.075%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Massachusetts</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.56 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,560</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Rhode Island</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.30 per $500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,600</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Connecticut tiered state conveyance tax</li>
      <li>Municipal conveyance tax (0.25% or 0.50%)</li>
      <li>Recording fees estimate</li>
      <li>Attorney fees estimate</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
      <li>Buyer/seller split allocation</li>
    </ul>

    <h3>Common Connecticut Conveyance Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Not accounting for tiered rates (many assume flat 0.75%)</p>
    <p><strong>Mistake 2:</strong> Forgetting municipal tax (adds 0.25-0.5% to total)</p>
    <p><strong>Mistake 3:</strong> Using wrong municipal rate (0.25% vs 0.50% in targeted towns)</p>
    <p><strong>Mistake 4:</strong> Not budgeting for mandatory attorney fees ($1,500-$3,000)</p>
    <p><strong>Mistake 5:</strong> Assuming 50/50 split is required (it's customary but negotiable)</p>

    <h3>Connecticut Conveyance Tax Declaration</h3>
    <p>Connecticut requires a Conveyance Tax Declaration form for all transfers:</p>
    <ul>
      <li><strong>Form OP-236:</strong> Conveyance Tax Declaration</li>
      <li><strong>Information required:</strong> Property address, consideration, exemption claims</li>
      <li><strong>Filed with:</strong> Town clerk at time of recording</li>
      <li><strong>State copy:</strong> Automatically forwarded to Connecticut DRS</li>
      <li><strong>Public record:</strong> Declaration is part of public land records</li>
    </ul>

    <h3>Resources for Connecticut Buyers & Sellers</h3>
    <ul>
      <li><strong>Connecticut Department of Revenue Services:</strong> portal.ct.gov/DRS</li>
      <li><strong>Town Clerk Offices:</strong> Each town handles recording (not county)</li>
      <li><strong>Connecticut Bar Association:</strong> ctbar.org for attorney referrals</li>
      <li><strong>CT Realtors:</strong> ctrealtor.com</li>
    </ul>

    <h3>Connecticut Property Tax vs. Conveyance Tax</h3>
    <p>Don't confuse these two different taxes:</p>
    <p><strong>Conveyance Tax (Transfer Tax):</strong></p>
    <ul>
      <li>One-time tax when property changes hands</li>
      <li>0.75-2.25% tiered + 0.25-0.5% municipal</li>
      <li>Collected at closing</li>
      <li>Goes to state and municipality</li>
    </ul>
    <p><strong>Property Tax (Annual):</strong></p>
    <ul>
      <li>Annual tax on property ownership</li>
      <li>Based on assessed value (70% of market value)</li>
      <li>Mill rate varies widely by town (20-65 mills typical)</li>
      <li>Connecticut has some of the highest property taxes in the nation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential (1-3 Family) - Tiered Rates' },
          { value: 'commercial', label: 'Commercial/Non-Residential - Flat 1.11%' },
        ],
        defaultValue: 'residential',
      },
      {
        name: 'municipalRate',
        label: 'Municipal Conveyance Tax Rate',
        type: 'select',
        options: [
          { value: '0.0025', label: 'Standard Municipality (0.25%)' },
          { value: '0.005', label: 'Targeted Municipality (0.50%) - Greenwich, Westport, etc.' },
        ],
        defaultValue: '0.0025',
      },
      {
        name: 'recordingFees',
        label: 'Estimated Recording Fees',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'attorneyFees',
        label: 'Estimated Attorney Fees (Both Parties)',
        type: 'number',
        defaultValue: 4000,
      },
    ],
    results: [
      { label: 'State Conveyance Tax', isCurrency: true },
      { label: 'Municipal Conveyance Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Attorney Fees', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Costs as % of Sale Price', isCurrency: false },
      { label: 'Typical Seller Share (60%)', isCurrency: true },
      { label: 'Typical Buyer Share (40%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, propertyType, municipalRate, recordingFees, attorneyFees } = values;

      let stateConveyanceTax = 0;

      if (propertyType === 'residential') {
        if (salePrice <= 800000) {
          stateConveyanceTax = salePrice * 0.0075;
        } else if (salePrice <= 2500000) {
          stateConveyanceTax = (800000 * 0.0075) + ((salePrice - 800000) * 0.0125);
        } else {
          stateConveyanceTax = (800000 * 0.0075) + (1700000 * 0.0125) + ((salePrice - 2500000) * 0.0225);
        }
      } else {
        stateConveyanceTax = salePrice * 0.0111;
      }

      const municipalConveyanceTax = salePrice * parseFloat(municipalRate);

      const totalCosts = stateConveyanceTax + municipalConveyanceTax + recordingFees + attorneyFees;
      const percentage = (totalCosts / salePrice) * 100;

      const sellerShare = (stateConveyanceTax * 0.5) + municipalConveyanceTax + (recordingFees * 0.5) + (attorneyFees * 0.5);
      const buyerShare = (stateConveyanceTax * 0.5) + (recordingFees * 0.5) + (attorneyFees * 0.5);

      return [
        { label: 'State Conveyance Tax', value: stateConveyanceTax.toFixed(2), isCurrency: true },
        { label: 'Municipal Conveyance Tax', value: municipalConveyanceTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Attorney Fees', value: attorneyFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Costs as % of Sale Price', value: `${percentage.toFixed(2)}%` },
        { label: 'Typical Seller Share (60%)', value: sellerShare.toFixed(2), isCurrency: true },
        { label: 'Typical Buyer Share (40%)', value: buyerShare.toFixed(2), isCurrency: true },
      ];
    },
  },
};
