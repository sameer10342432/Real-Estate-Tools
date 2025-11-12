import { CalculatorContent } from '@/types';

export const IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Idaho Transfer Tax Calculator - Real Estate Recording Fees',
  description: 'Calculate Idaho real estate costs. No state transfer tax - only county recording fees ($15-$30). Learn actual ID closing costs',
  slug: 'idaho-transfer-tax-calculator',
  icon: '🥔',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Idaho Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Idaho Transfer Tax Guide</h2>
    <p>Idaho does <strong>not impose a state transfer tax</strong> on real estate transactions, making it one of the most seller-friendly states for closing costs. This saves Idaho sellers thousands of dollars compared to high-tax states.</p>
    
    <h3>Why Idaho Has No State Transfer Tax</h3>
    <p>Idaho is one of approximately 15 states without a state-level transfer or excise tax on real estate sales. This policy makes Idaho attractive for real estate investors and sellers, as they avoid the significant closing costs associated with transfer taxes in other states.</p>
    <p>For comparison, states like Pennsylvania charge 2% transfer tax, Delaware charges 4%, and Washington state charges 1.78% - all of which can add thousands to tens of thousands of dollars to closing costs.</p>

    <h3>What You Do Pay in Idaho</h3>
    <p>While Idaho has no state transfer tax, sellers and buyers still encounter these costs:</p>
    <ul>
      <li><strong>County Recording Fees:</strong> Typically $15-$30 per document</li>
      <li><strong>Title Insurance:</strong> One-time premium based on property value</li>
      <li><strong>Title Search Fees:</strong> $200-$400 for examination</li>
      <li><strong>Deed Preparation:</strong> Attorney or title company fees ($150-$350)</li>
      <li><strong>Survey Costs:</strong> If required by lender ($400-$800)</li>
    </ul>

    <h3>Local Transfer Taxes in Idaho</h3>
    <p><strong>Important:</strong> While Idaho has no state transfer tax, some individual cities or counties may impose their own local transfer taxes. Always verify with:</p>
    <ul>
      <li>Your county recorder's office</li>
      <li>Title company or closing attorney</li>
      <li>Real estate agent familiar with your market</li>
    </ul>
    <p>Most Idaho counties do not charge local transfer taxes, but confirmation is essential for your specific transaction.</p>

    <h3>Idaho Recording Fees by County</h3>
    <p>Recording fees in Idaho are relatively modest and vary by county:</p>
    <p><strong>Ada County (Boise):</strong> ~$20-$25 per document</p>
    <p><strong>Canyon County (Nampa/Caldwell):</strong> ~$18-$22 per document</p>
    <p><strong>Kootenai County (Coeur d'Alene):</strong> ~$20-$25 per document</p>
    <p><strong>Bannock County (Pocatello):</strong> ~$18-$22 per document</p>
    <p><strong>Bonneville County (Idaho Falls):</strong> ~$20-$24 per document</p>
    <p>Most deeds are recorded as a single document, so total recording costs are typically $15-$30.</p>

    <h3>Who Pays Closing Costs in Idaho?</h3>
    <p>Idaho follows traditional closing cost allocations:</p>
    <ul>
      <li><strong>Seller typically pays:</strong> Real estate commissions, owner's title insurance (sometimes negotiable), deed preparation, recording release of mortgage</li>
      <li><strong>Buyer typically pays:</strong> Lender's title insurance, recording deed and mortgage, appraisal, inspection, loan origination fees</li>
      <li><strong>Negotiable:</strong> All costs can be negotiated in the purchase contract</li>
    </ul>
    <p>In competitive buyer's markets, sellers may offer to pay some or all of the buyer's closing costs as an incentive.</p>

    <h3>Idaho Real Estate Advantages</h3>
    <p><strong>No State Transfer Tax:</strong> Saves 0.5-4% compared to other states</p>
    <p><strong>Affordable Recording Fees:</strong> Among the lowest in the nation</p>
    <p><strong>Homestead Exemption:</strong> Protection from creditors for primary residence</p>
    <p><strong>Growing Market:</strong> Strong population and economic growth</p>
    <p><strong>Simple Closing Process:</strong> Fewer fees and less complexity than high-tax states</p>

    <h3>Example: Selling a $450,000 Idaho Home</h3>
    <p><strong>Transfer Tax (Idaho):</strong> $0</p>
    <p><strong>Recording Fee:</strong> $22 (estimated)</p>
    <p><strong>Deed Preparation:</strong> $250</p>
    <p><strong>Title Insurance (owner's):</strong> $1,200 (if seller pays)</p>
    <p><strong>Total Transfer-Related Costs:</strong> $1,472</p>
    <p>Compare this to selling the same home in Pennsylvania ($9,000 in transfer taxes) or Delaware ($18,000 in transfer taxes).</p>

    <h3>Special Situations in Idaho</h3>
    <p><strong>New Construction:</strong> No transfer tax; only recording fees and title costs</p>
    <p><strong>Inherited Property:</strong> No transfer tax; only recording fees and probate costs</p>
    <p><strong>Gift Deeds:</strong> No transfer tax; minimal recording fees</p>
    <p><strong>Quitclaim Deeds:</strong> Same recording fees as warranty deeds</p>
    <p><strong>Trust Transfers:</strong> Recording fees only if ownership actually changes</p>
    <p><strong>Divorce Transfers:</strong> No transfer tax; just recording fees</p>
    <p><strong>Agricultural Land:</strong> Same rules apply; no special transfer tax</p>

    <h3>Idaho vs Western States Transfer Tax</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $400K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Idaho</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Utah</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Montana</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0-0.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0-$400</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.78%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,120</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.39-0.51%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,560-$2,040</td>
      </tr>
    </table>

    <h3>Property Taxes in Idaho</h3>
    <p>While there's no transfer tax, Idaho property owners pay annual property taxes. The average effective property tax rate in Idaho is approximately 0.63% of market value, which is below the national average.</p>
    <p><strong>Circuit Breaker Program:</strong> Idaho offers property tax relief for senior citizens and disabled individuals with limited income.</p>
    <p><strong>Homestead Exemption:</strong> Up to $125,000 of assessed value protected from creditors for primary residences.</p>

    <h3>Idaho Seller Closing Costs</h3>
    <p>Beyond transfer fees (which are $0), Idaho sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (sometimes negotiable)</li>
      <li>Property tax prorations</li>
      <li>Deed preparation ($150-$350)</li>
      <li>Recording release of mortgage ($15-$30)</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty for buyer (if offered)</li>
      <li>HOA transfer fees (if applicable)</li>
    </ul>
    <p>Total seller costs typically range from 6-8% of sale price, significantly lower than states with transfer taxes.</p>

    <h3>What Gets Recorded in Idaho</h3>
    <p>Idaho county recorders office records these property-related documents:</p>
    <ul>
      <li>Real estate deeds (warranty, quitclaim, etc.)</li>
      <li>Mortgages and deeds of trust</li>
      <li>Foreclosure documents</li>
      <li>Liens (mechanics, tax, judgment)</li>
      <li>Easements and right-of-way</li>
      <li>Subdivision declarations</li>
      <li>Water rights (critical in Idaho)</li>
    </ul>

    <h3>Water Rights in Idaho</h3>
    <p>Idaho follows the Prior Appropriation Doctrine for water rights, making water rights a critical component of real estate transactions, especially for:</p>
    <ul>
      <li>Agricultural properties</li>
      <li>Properties with wells</li>
      <li>Riverfront or lakefront properties</li>
      <li>Properties using irrigation water</li>
    </ul>
    <p>Water rights transfers require separate documentation and filing with the Idaho Department of Water Resources.</p>

    <h3>Tips for Idaho Real Estate Closings</h3>
    <p>Verify if your county has any local transfer taxes (rare but possible). Budget for modest recording fees ($15-$30 per document). Use a reputable title company familiar with Idaho law. Understand water rights if buying/selling property with water access. Consider Idaho's homestead exemption for primary residence. Factor in property tax relief programs if eligible (seniors, disabled). Keep all closing documents for tax records. Allow 30-45 days for typical residential closing.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price. Enter estimated recording fees for your county ($15-$30 typical). Add optional costs like deed preparation and title insurance. The calculator shows your total closing costs without any state transfer tax. Compare savings versus high-transfer-tax states like Washington or Nevada.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 450000,
      },
      {
        name: 'recordingFee',
        label: 'County Recording Fee',
        type: 'number',
        defaultValue: 22,
      },
      {
        name: 'deedPreparation',
        label: 'Deed Preparation Fee',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'titleInsurance',
        label: 'Title Insurance (if seller pays)',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [
      { label: 'Idaho State Transfer Tax', isCurrency: true },
      { label: 'County Recording Fee', isCurrency: true },
      { label: 'Deed Preparation', isCurrency: true },
      { label: 'Title Insurance', isCurrency: true },
      { label: 'Total Transfer & Recording Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Washington (1.78%)', isCurrency: true },
      { label: 'Savings vs Nevada (0.39%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, recordingFee, deedPreparation, titleInsurance } = values;

      const stateTransferTax = 0;
      const totalCosts = recordingFee + deedPreparation + titleInsurance;
      const percentageOfSale = (totalCosts / salePrice) * 100;
      
      const washingtonTax = salePrice * 0.0178;
      const nevadaTax = salePrice * 0.0039;

      return [
        { label: 'Idaho State Transfer Tax', value: '0.00', isCurrency: true },
        { label: 'County Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Deed Preparation', value: deedPreparation.toFixed(2), isCurrency: true },
        { label: 'Title Insurance', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer & Recording Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Washington (1.78%)', value: washingtonTax.toFixed(2), isCurrency: true },
        { label: 'Savings vs Nevada (0.39%)', value: nevadaTax.toFixed(2), isCurrency: true },
      ];
    },
  },
};
