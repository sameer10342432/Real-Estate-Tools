import { CalculatorContent } from '@/types';

export const ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Arkansas Transfer Tax Calculator - Real Estate Transfer Costs',
  description: 'Calculate Arkansas documentary stamp tax ($3.30 per $1,000) and recording fees for real estate transactions',
  slug: 'arkansas-transfer-tax-calculator',
  icon: '🏞️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Arkansas Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Arkansas Transfer Tax Guide</h2>
    <p>Arkansas charges a <strong>documentary stamp tax of $3.30 per $1,000</strong> of sale price (0.33%) on most real estate transactions exceeding $100. This is one of the more affordable transfer tax rates in the United States.</p>
    
    <h3>Arkansas Transfer Tax Rate</h3>
    <p><strong>State Rate:</strong> $3.30 per $1,000 of sale price (0.33%)</p>
    <p><strong>Minimum Transaction:</strong> Applies to sales over $100</p>
    <p><strong>No Local Taxes:</strong> Arkansas has no additional county or city transfer taxes</p>
    
    <p>The tax is calculated on the full purchase price and paid through documentary stamps purchased at Department of Finance and Administration Revenue Offices or through title companies, banks, and savings & loan associations.</p>

    <h3>Who Pays Arkansas Transfer Tax?</h3>
    <p>Traditionally, the <strong>seller pays the documentary stamp tax</strong> in Arkansas. However, this is negotiable in the purchase agreement. In some cases, buyers may agree to pay a portion of the transfer tax to make their offer more competitive.</p>
    <p>The tax must be paid and stamps affixed (or exemption noted) before the deed can be recorded.</p>

    <h3>Arkansas Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $250,000 home</strong></p>
    <p>$250,000 ÷ $1,000 × $3.30 = <strong>$825 transfer tax</strong></p>
    
    <p><strong>Example 2: $400,000 home</strong></p>
    <p>$400,000 ÷ $1,000 × $3.30 = <strong>$1,320 transfer tax</strong></p>
    
    <p><strong>Example 3: $150,500 home</strong></p>
    <p>$150,500 ÷ $1,000 × $3.30 = <strong>$496.65 transfer tax</strong></p>

    <h3>Arkansas Recording Fees</h3>
    <p>In addition to transfer tax, Arkansas counties charge recording fees to file deeds and mortgages:</p>
    <p><strong>Deeds, Mortgages, Releases, Powers of Attorney:</strong></p>
    <ul>
      <li>First page: $15</li>
      <li>Each additional page: $5</li>
      <li>Two-sided pages count as two pages</li>
    </ul>
    
    <p><strong>Multiple Instrument Releases:</strong></p>
    <ul>
      <li>First listed instrument: No fee</li>
      <li>Each additional instrument: $15 (maximum $300)</li>
    </ul>
    
    <p><strong>Non-Standard Size Documents:</strong></p>
    <ul>
      <li>Additional $25 fee if document exceeds 8½" × 11"</li>
    </ul>
    
    <p><strong>Notice of Default & Intent to Sell:</strong></p>
    <ul>
      <li>$140 plus recording fee ($15 first page + $5 per additional page)</li>
    </ul>

    <h3>Arkansas Transfer Tax Exemptions</h3>
    <p>Common exemptions from Arkansas transfer tax include:</p>
    <ul>
      <li><strong>Transfers to Arkansas or U.S. Government:</strong> No tax on governmental transfers</li>
      <li><strong>Divorce Decree Transfers:</strong> Property transfers pursuant to divorce</li>
      <li><strong>Corrective Deeds:</strong> Deeds correcting errors in prior conveyances</li>
      <li><strong>Certain Trust Transfers:</strong> With specific conditions met</li>
    </ul>
    <p>When claiming an exemption, you must file a Real Property Transfer Tax Affidavit of Compliance form with the county circuit clerk.</p>

    <h3>Documentary Stamp Tax Certification</h3>
    <p>Arkansas law requires a <strong>certification statement</strong> on all recorded deeds, signed by the grantee (buyer):</p>
    <p style="font-style: italic;">"I certify under penalty of false swearing that documentary stamps or a documentary symbol in the legally correct amount has been placed on this instrument."</p>
    <p>This certification confirms that the correct amount of transfer tax has been paid or that the transfer qualifies for an exemption.</p>

    <h3>Arkansas Recording Requirements</h3>
    <p>To record a deed in Arkansas, you must meet these requirements:</p>
    <ul>
      <li>Documentary stamps in correct amount (or exemption statement)</li>
      <li>Grantee certification statement signed</li>
      <li>Preparer name and address on first page</li>
      <li>Notarized signatures</li>
      <li>Paper size: 8½" × 11"</li>
      <li>Margins: 2½" top-right on first page; ½" sides/bottoms; 2½" bottom of last page</li>
    </ul>

    <h3>Arkansas vs Neighboring States Transfer Tax</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Arkansas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.33%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$990</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Tennessee</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.37%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,110</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Missouri</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mississippi</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oklahoma</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450</td>
      </tr>
    </table>

    <h3>Arkansas Seller Closing Costs</h3>
    <p>Beyond transfer tax, Arkansas sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (5-6% of sale price)</li>
      <li>Owner's title insurance policy</li>
      <li>Recording fees for release of mortgage</li>
      <li>Property tax prorations</li>
      <li>HOA transfer fees (if applicable)</li>
      <li>Attorney fees (if using closing attorney)</li>
      <li>Outstanding liens or judgments</li>
    </ul>
    <p>Total seller costs in Arkansas typically range from 8-10% of the sale price, with commissions being the largest expense.</p>

    <h3>Special Situations in Arkansas</h3>
    <p><strong>New Construction:</strong> Transfer tax applies—builder pays on first sale to buyer</p>
    <p><strong>Inherited Property:</strong> May qualify for exemption if transferred via will</p>
    <p><strong>Foreclosure Sales:</strong> Transfer tax typically paid from proceeds</p>
    <p><strong>FSBO Sales:</strong> Seller must purchase documentary stamps independently</p>
    <p><strong>Contract for Deed:</strong> Tax may be deferred until deed actually transfers</p>

    <h3>How to Purchase Documentary Stamps</h3>
    <p>Arkansas documentary stamps can be purchased at:</p>
    <ul>
      <li><strong>Title Companies:</strong> Most common—included in closing costs</li>
      <li><strong>DFA Revenue Offices:</strong> Direct purchase from state offices</li>
      <li><strong>Banks and S&Ls:</strong> Some financial institutions sell stamps</li>
      <li><strong>County Circuit Clerks:</strong> Available at time of recording</li>
    </ul>

    <h3>Tips for Arkansas Real Estate Closings</h3>
    <p>Budget $3.30 per $1,000 for transfer tax in your net proceeds. Use a title company to handle stamp purchase and certification. Ensure preparer information is on first page of deed. Verify all exemption claims are properly documented. Keep copies of transfer tax receipts for tax records. Factor in both transfer tax and recording fees when calculating costs. Allow extra time for document preparation if going FSBO. Confirm all signatures are properly notarized before recording.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter the property sale price. Enter the number of pages in your deed (typically 2-4 pages). The calculator will compute your Arkansas documentary stamp tax, recording fees, and total transfer costs. Results show both dollar amounts and percentage of sale price.</p>
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
    ],
    results: [
      { label: 'Arkansas Documentary Stamp Tax', isCurrency: true },
      { label: 'Recording Fees (Deed)', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Transfer Tax Rate', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, deedPages } = values;

      const transferTaxRate = 3.30 / 1000;
      const documentaryStampTax = (salePrice / 1000) * 3.30;
      
      const recordingFees = deedPages === 1 ? 15 : 15 + ((deedPages - 1) * 5);
      
      const totalCosts = documentaryStampTax + recordingFees;
      const percentageOfSale = (totalCosts / salePrice) * 100;

      return [
        { label: 'Arkansas Documentary Stamp Tax', value: documentaryStampTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees (Deed)', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Transfer Tax Rate', value: '$3.30 per $1,000 (0.33%)' },
      ];
    },
  },
};
