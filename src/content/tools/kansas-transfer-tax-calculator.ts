import { CalculatorContent } from '@/types';

export const KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Kansas Transfer Tax Calculator - Real Estate Recording Fees',
  description: 'Calculate Kansas real estate costs. No state transfer tax since 2019 - only county recording fees. Learn actual KS closing costs',
  slug: 'kansas-transfer-tax-calculator',
  icon: '🌻',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Kansas Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Kansas Transfer Tax Guide</h2>
    <p>Kansas <strong>eliminated its real estate transfer tax on January 1, 2019</strong>, becoming one of 15 states with no transfer tax on real estate transactions. This was a major victory for Kansas homebuyers, sellers, and real estate investors.</p>
    
    <h3>Kansas Transfer Tax History</h3>
    <p>Prior to 2019, Kansas charged:</p>
    <ul>
      <li><strong>Transfer Tax:</strong> Variable rate eliminated</li>
      <li><strong>Mortgage Registration Fee:</strong> 0.26% of loan amount (later reduced to 0.2%)</li>
    </ul>
    <p>Both taxes were <strong>completely repealed effective January 1, 2019</strong>, saving Kansas homebuyers and sellers thousands of dollars per transaction.</p>

    <h3>What You Do Pay in Kansas (2025)</h3>
    <p>While Kansas has no transfer tax or mortgage registration tax, sellers and buyers still pay recording fees:</p>
    <p><strong>Document Recording Fees (per page):</strong></p>
    <ul>
      <li>Deed (first page): $21.00</li>
      <li>Deed (each additional page): $4.00</li>
      <li>Mortgage (first page): $21.00</li>
      <li>Mortgage (each additional page): $4.00</li>
      <li>Release/Assignment (first page): $20.00</li>
      <li>Release (each additional page): $4.00</li>
    </ul>
    
    <p><strong>Additional Fees Included:</strong></p>
    <ul>
      <li>Technology Fee (included in rates above)</li>
      <li>Heritage Trust Fund Fee ($1 per page)</li>
    </ul>

    <h3>Mortgage Cap for Small Loans</h3>
    <p>For <strong>single-family principal residences</strong> where the mortgage amount is <strong>$75,000 or less</strong>, Kansas caps recording fees at <strong>$125 total</strong>.</p>
    <p><strong>To qualify:</strong> A Mortgage Cap Affidavit must be attached to the mortgage document when filed with the Register of Deeds.</p>

    <h3>Who Pays What in Kansas?</h3>
    <p>Traditional Kansas closing cost allocations:</p>
    <ul>
      <li><strong>Buyer typically pays:</strong> Recording fees for deed and mortgage, lender's title insurance, appraisal, inspection, loan origination fees</li>
      <li><strong>Seller typically pays:</strong> Owner's title insurance policy, real estate commissions, deed preparation</li>
      <li><strong>No transfer tax to negotiate:</strong> Since Kansas doesn't have one!</li>
    </ul>
    <p>All costs are negotiable in the purchase agreement.</p>

    <h3>Kansas Real Estate Advantages</h3>
    <p><strong>No State Transfer Tax:</strong> Saves 0.5-4% compared to transfer tax states</p>
    <p><strong>No Mortgage Registration Tax:</strong> Previously cost 0.2% of loan amount</p>
    <p><strong>Low Recording Fees:</strong> Typically $21-$29 per document</p>
    <p><strong>Affordable Housing Market:</strong> Lower median home prices than national average</p>
    <p><strong>Simple Closing Process:</strong> Fewer fees and less complexity</p>

    <h3>Example: Buying a $300,000 Kansas Home</h3>
    <p><strong>Transfer Tax (Kansas):</strong> $0 (eliminated in 2019)</p>
    <p><strong>Mortgage Registration Tax:</strong> $0 (eliminated in 2019)</p>
    <p><strong>Recording Fee (Deed - 3 pages):</strong> $21 + $8 = $29</p>
    <p><strong>Recording Fee (Mortgage - 15 pages):</strong> Capped at $125 (if loan ≤$75K) or ~$77 regular</p>
    <p><strong>Total Government Transfer Costs:</strong> $29-$106</p>
    
    <p>Compare to what Kansas buyers paid before 2019:</p>
    <ul>
      <li>Transfer tax: Variable (eliminated)</li>
      <li>Mortgage registration on $240K loan @ 0.2%: $480 (eliminated)</li>
      <li><strong>Savings: $480+ per transaction!</strong></li>
    </ul>

    <h3>Kansas County Recording Fees</h3>
    <p>Recording fees are standardized across Kansas counties per state statute K.S.A. 28-115:</p>
    <p><strong>Johnson County (Overland Park/Olathe):</strong> $21 first page + $4 additional</p>
    <p><strong>Sedgwick County (Wichita):</strong> $21 first page + $4 additional</p>
    <p><strong>Shawnee County (Topeka):</strong> $21 first page + $4 additional</p>
    <p><strong>Douglas County (Lawrence):</strong> $21 first page + $4 additional</p>
    <p><strong>Wyandotte County (Kansas City):</strong> $21 first page + $4 additional</p>

    <h3>Special Situations in Kansas</h3>
    <p><strong>New Construction:</strong> No transfer tax; only recording fees</p>
    <p><strong>Inherited Property:</strong> No transfer tax; only recording fees and probate costs</p>
    <p><strong>Gift Deeds:</strong> No transfer tax; minimal recording fees</p>
    <p><strong>Quitclaim Deeds:</strong> Same recording fees as warranty deeds</p>
    <p><strong>Trust Transfers:</strong> Recording fees only</p>
    <p><strong>Refinances:</strong> No mortgage registration tax (saved 0.2% of loan)</p>

    <h3>Kansas vs Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Missouri</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oklahoma</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nebraska</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.225-0.232%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$675-$696</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Colorado</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.01%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$30+ (varies by city)</td>
      </tr>
    </table>

    <h3>Impact of 2019 Tax Repeal</h3>
    <p>The elimination of Kansas transfer and mortgage registration taxes has:</p>
    <ul>
      <li>Saved homebuyers hundreds to thousands per transaction</li>
      <li>Made Kansas more competitive with neighboring states</li>
      <li>Simplified the closing process</li>
      <li>Reduced barriers to homeownership</li>
      <li>Eliminated refinance penalties (no more mortgage tax)</li>
    </ul>
    <p>This was championed by the Kansas Association of REALTORS® and has been widely praised by the real estate industry.</p>

    <h3>Kansas Seller Closing Costs</h3>
    <p>Beyond transfer fees (which are $0), Kansas sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (negotiable)</li>
      <li>Property tax prorations</li>
      <li>Deed preparation ($200-$400)</li>
      <li>Recording release of mortgage ($20-$28)</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty (if offered to buyer)</li>
    </ul>
    <p>Total seller costs typically range from 6-8% of sale price, significantly lower than states with transfer taxes.</p>

    <h3>Tips for Kansas Real Estate Closings</h3>
    <p>Celebrate Kansas's zero transfer tax policy—you're saving hundreds to thousands. Budget only for modest recording fees ($21-$29 per document). Use mortgage cap affidavit if loan is $75K or less. Choose a reputable title company for smooth closing. Verify all recording fees with your county Register of Deeds. Keep closing documents for tax records. Consider homestead exemption to reduce property taxes. Factor in savings when comparing Kansas to other markets.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and loan amount (if buying). Enter the number of pages in your deed and mortgage documents. The calculator shows recording fees only—no transfer tax in Kansas! See your total closing costs and savings compared to states with transfer taxes. Compare what you would have paid under the old Kansas tax system.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'deedPages',
        label: 'Number of Deed Pages',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'mortgageAmount',
        label: 'Mortgage Amount (if applicable)',
        type: 'number',
        defaultValue: 240000,
      },
      {
        name: 'mortgagePages',
        label: 'Number of Mortgage Pages',
        type: 'number',
        defaultValue: 15,
      },
    ],
    results: [
      { label: 'Kansas State Transfer Tax', isCurrency: true },
      { label: 'Mortgage Registration Tax', isCurrency: true },
      { label: 'Deed Recording Fee', isCurrency: true },
      { label: 'Mortgage Recording Fee', isCurrency: true },
      { label: 'Total Recording Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Old KS System (0.2% mortgage tax)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, deedPages, mortgageAmount, mortgagePages } = values;

      const stateTransferTax = 0;
      const mortgageRegTax = 0;
      
      const deedRecordingFee = deedPages === 1 ? 21 : 21 + ((deedPages - 1) * 4);
      
      let mortgageRecordingFee = 0;
      if (mortgageAmount > 0) {
        const calculatedMortgageFee = mortgagePages === 1 ? 21 : 21 + ((mortgagePages - 1) * 4);
        if (mortgageAmount <= 75000) {
          mortgageRecordingFee = Math.min(calculatedMortgageFee, 125);
        } else {
          mortgageRecordingFee = calculatedMortgageFee;
        }
      }
      
      const totalCosts = deedRecordingFee + mortgageRecordingFee;
      const percentageOfSale = (totalCosts / salePrice) * 100;
      
      const oldMortgageTax = mortgageAmount * 0.002;

      return [
        { label: 'Kansas State Transfer Tax', value: '0.00', isCurrency: true },
        { label: 'Mortgage Registration Tax', value: '0.00', isCurrency: true },
        { label: 'Deed Recording Fee', value: deedRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Mortgage Recording Fee', value: mortgageRecordingFee.toFixed(2), isCurrency: true },
        { label: 'Total Recording Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Old KS System (0.2% mortgage tax)', value: oldMortgageTax.toFixed(2), isCurrency: true },
      ];
    },
  },
};
