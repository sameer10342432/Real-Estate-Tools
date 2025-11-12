import { CalculatorContent } from '@/types';

export const NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Hampshire Transfer Tax Calculator - Real Estate Transfer Tax',
  description: 'Calculate New Hampshire transfer tax ($0.75 per $100 each for buyer and seller = 1.5% total). Free NH real estate transfer cost calculator',
  slug: 'new-hampshire-transfer-tax-calculator',
  icon: '🍁',
  category: 'Seller Tools',
  article: {
    title: 'Understanding New Hampshire Real Estate Transfer Tax',
    content: `
    <h2>New Hampshire Transfer Tax Guide</h2>
    <p>New Hampshire charges a <strong>real estate transfer tax of $0.75 per $100</strong> of sale price (0.75%) imposed on <strong>both the buyer and seller</strong>, resulting in a combined rate of <strong>$1.50 per $100 (1.5%)</strong> of the property value.</p>
    
    <h3>New Hampshire Transfer Tax Rate</h3>
    <p><strong>Seller Pays:</strong> $0.75 per $100 (0.75% of sale price)</p>
    <p><strong>Buyer Pays:</strong> $0.75 per $100 (0.75% of sale price)</p>
    <p><strong>Combined Total:</strong> $1.50 per $100 (1.5% of sale price)</p>
    <p><strong>Minimum Tax:</strong> $40 total ($20 each party) for transactions of $4,000 or less</p>

    <h3>How New Hampshire Transfer Tax Works</h3>
    <p>New Hampshire is unique in that the transfer tax is <strong>split equally between buyer and seller</strong>. Both parties are legally responsible for their respective portions:</p>
    <ul>
      <li>Each party pays 0.75% of the sale price</li>
      <li>Tax collected at closing by the registry of deeds</li>
      <li>Required before deed can be recorded</li>
      <li>Both portions must be paid together when recording</li>
    </ul>

    <h3>Who Pays New Hampshire Transfer Tax?</h3>
    <p>By statute, <strong>both the buyer (grantee) and seller (grantor) are jointly liable</strong> for the transfer tax. Each party pays $0.75 per $100:</p>
    <ul>
      <li><strong>Seller's portion:</strong> 0.75% - typically paid from sale proceeds</li>
      <li><strong>Buyer's portion:</strong> 0.75% - usually included in buyer's closing costs</li>
      <li><strong>Negotiable:</strong> Parties can negotiate who pays what in the purchase agreement</li>
    </ul>
    <p>In practice, each party pays their designated portion, but this can be negotiated in competitive markets.</p>

    <h3>New Hampshire Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $400,000 home</strong></p>
    <p>Seller pays: $400,000 × 0.75% = <strong>$3,000</strong></p>
    <p>Buyer pays: $400,000 × 0.75% = <strong>$3,000</strong></p>
    <p>Total transfer tax: <strong>$6,000</strong></p>
    
    <p><strong>Example 2: $600,000 home</strong></p>
    <p>Seller pays: $600,000 × 0.75% = <strong>$4,500</strong></p>
    <p>Buyer pays: $600,000 × 0.75% = <strong>$4,500</strong></p>
    <p>Total transfer tax: <strong>$9,000</strong></p>
    
    <p><strong>Example 3: $3,500 transaction (minimum tax)</strong></p>
    <p>Seller pays: <strong>$20</strong> (minimum)</p>
    <p>Buyer pays: <strong>$20</strong> (minimum)</p>
    <p>Total transfer tax: <strong>$40</strong></p>

    <h3>New Hampshire Transfer Tax Statute</h3>
    <p>New Hampshire transfer tax is governed by <strong>RSA 78-B</strong> (Real Estate Transfer Tax). Key provisions include:</p>
    <ul>
      <li>Tax rate: $0.75 per $100 for each party</li>
      <li>Collected by registry of deeds at time of recording</li>
      <li>Both buyer and seller must pay before deed records</li>
      <li>Certain exemptions available (see below)</li>
    </ul>

    <h3>Additional Fees and Local Taxes</h3>
    <p>Beyond the state transfer tax, some New Hampshire cities and counties may impose <strong>additional local transfer taxes</strong>:</p>
    <ul>
      <li>Verify with your local registry of deeds</li>
      <li>Title company will know local requirements</li>
      <li>Local taxes added to state $1.50 per $100</li>
    </ul>
    <p>Most New Hampshire municipalities do not have local transfer taxes, but always confirm for your specific location.</p>

    <h3>New Hampshire Transfer Tax Exemptions</h3>
    <p>Certain transfers are exempt from New Hampshire transfer tax:</p>
    <ul>
      <li><strong>Gifts:</strong> Transfers without consideration (true gifts)</li>
      <li><strong>Inheritance:</strong> Transfers by will or intestate succession</li>
      <li><strong>Divorce:</strong> Property transfers pursuant to divorce decree</li>
      <li><strong>Spouse to spouse:</strong> Transfers between married couples</li>
      <li><strong>Partnership changes:</strong> With identical ownership percentages</li>
      <li><strong>Government transfers:</strong> To or from government entities</li>
      <li><strong>Corrective deeds:</strong> Fixing errors in prior conveyances</li>
    </ul>
    <p>Exemptions must be claimed when filing the transfer tax declaration.</p>

    <h3>Transfer Tax Declaration Form</h3>
    <p>New Hampshire requires a <strong>Transfer Tax Declaration</strong> to be filed with all deed recordings:</p>
    <ul>
      <li>Form available at county registry of deeds</li>
      <li>Must include sale price and tax calculation</li>
      <li>Both buyer and seller must sign</li>
      <li>Exemption claims must be documented</li>
      <li>Title company typically prepares and files</li>
    </ul>

    <h3>New Hampshire Recording Fees</h3>
    <p>In addition to transfer tax, New Hampshire charges recording fees:</p>
    <ul>
      <li>Deed recording: Approximately $20-$50</li>
      <li>Mortgage recording: Approximately $20-$50</li>
      <li>Release recording: Approximately $20-$50</li>
    </ul>
    <p>Fees vary by county and document length.</p>

    <h3>New Hampshire vs New England States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Hampshire</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5% (0.75% each)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Massachusetts</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.456%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,280</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vermont</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.25-2.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,250-$10,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Maine</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,200</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Connecticut</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75-2.25%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750-$11,250+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rhode Island</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.46%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,300</td>
      </tr>
    </table>
    <p>New Hampshire has one of the <strong>highest transfer tax rates in New England</strong> at 1.5% combined.</p>

    <h3>New Hampshire Seller Closing Costs</h3>
    <p>Beyond transfer tax, New Hampshire sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (sometimes negotiable)</li>
      <li>Property tax prorations</li>
      <li>Deed preparation ($200-$400)</li>
      <li>Recording fees for mortgage release</li>
      <li>Outstanding liens or judgments</li>
      <li>Municipal lien certificate ($25-$75)</li>
    </ul>
    <p>Total seller costs typically range from 8-10% of sale price.</p>

    <h3>New Hampshire Buyer Closing Costs</h3>
    <p>Buyers in New Hampshire pay:</p>
    <ul>
      <li>Transfer tax (0.75% of sale price)</li>
      <li>Lender's title insurance</li>
      <li>Recording fees for deed and mortgage</li>
      <li>Appraisal and inspection fees</li>
      <li>Loan origination fees</li>
      <li>Attorney fees (if using closing attorney)</li>
    </ul>

    <h3>Special Situations in New Hampshire</h3>
    <p><strong>New Construction:</strong> Transfer tax applies—builder and buyer each pay 0.75%</p>
    <p><strong>Foreclosure Sales:</strong> Transfer tax typically paid—each party pays their portion</p>
    <p><strong>Short Sales:</strong> Transfer tax negotiated in contract, often from proceeds</p>
    <p><strong>Land Contracts:</strong> Transfer tax typically paid when deed transfers</p>
    <p><strong>1031 Exchanges:</strong> Transfer tax still applies to replacement property</p>

    <h3>Impact of 1.5% Transfer Tax</h3>
    <p>New Hampshire's 1.5% combined transfer tax is significant:</p>
    <ul>
      <li>$300,000 home: $4,500 total ($2,250 each party)</li>
      <li>$500,000 home: $7,500 total ($3,750 each party)</li>
      <li>$1,000,000 home: $15,000 total ($7,500 each party)</li>
    </ul>
    <p>This is one of the <strong>highest transfer taxes in the United States</strong>, rivaling Vermont and approaching Delaware's rates.</p>

    <h3>Tips for New Hampshire Real Estate Closings</h3>
    <p>Budget 1.5% of sale price for combined transfer tax (0.75% each party). Understand both parties must pay before deed records. Negotiate who pays what in purchase agreement (though statute requires split). Claim exemptions if eligible—can save thousands. Use a title company or attorney familiar with NH requirements. File transfer tax declaration accurately to avoid delays. Keep all transfer tax receipts for tax records. Factor in high transfer tax when calculating investment returns.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price. The calculator automatically splits the 1.5% transfer tax equally between buyer and seller (0.75% each). See individual amounts for each party and combined total. Compare New Hampshire's rate to neighboring states. Calculate total closing costs including transfer tax.</p>
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
    ],
    results: [
      { label: 'Seller Transfer Tax (0.75%)', isCurrency: true },
      { label: 'Buyer Transfer Tax (0.75%)', isCurrency: true },
      { label: 'Combined Transfer Tax (1.5%)', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Transfer Tax Per $100', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice } = values;

      let sellerTax = salePrice * 0.0075;
      let buyerTax = salePrice * 0.0075;
      
      if (salePrice <= 4000) {
        sellerTax = 20;
        buyerTax = 20;
      }
      
      const combinedTax = sellerTax + buyerTax;
      const percentageOfSale = (combinedTax / salePrice) * 100;

      return [
        { label: 'Seller Transfer Tax (0.75%)', value: sellerTax.toFixed(2), isCurrency: true },
        { label: 'Buyer Transfer Tax (0.75%)', value: buyerTax.toFixed(2), isCurrency: true },
        { label: 'Combined Transfer Tax (1.5%)', value: combinedTax.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Transfer Tax Per $100', value: '$1.50 total ($0.75 each party)' },
      ];
    },
  },
};
