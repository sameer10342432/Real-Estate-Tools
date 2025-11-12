import { CalculatorContent } from '@/types';

export const WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'West Virginia Transfer Tax Calculator - Real Estate Excise Tax',
  description: 'Calculate West Virginia transfer tax ($1.10 per $500 state + county add-ons). Includes Berkeley, Harrison, Marion county rates',
  slug: 'west-virginia-transfer-tax-calculator',
  icon: '⛰️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding West Virginia Real Estate Transfer Tax & County Excise Taxes',
    content: `
    <h2>West Virginia Transfer Tax Guide</h2>
    <p>West Virginia charges a <strong>state excise tax of $1.10 per $500</strong> of property value (0.22%). Additionally, counties can impose their own excise taxes up to <strong>$1.65 per $500</strong>, resulting in significant variation across the state.</p>
    
    <h3>West Virginia Transfer Tax Rates by County</h3>
    <p><strong>State Base Rate:</strong> $1.10 per $500 (0.22% of value)</p>
    
    <p><strong>Total Rates by County (State + County):</strong></p>
    <ul>
      <li><strong>Marion & Monongalia Counties:</strong> $4.40 per $1,000 (0.44%)</li>
      <li><strong>Harrison County:</strong> $7.00 per $1,000 (0.70%)</li>
      <li><strong>Berkeley County:</strong> $7.70 per $1,000 (0.77%)</li>
      <li><strong>Most Other Counties:</strong> $4.40 per $1,000 (0.44%)</li>
    </ul>

    <h3>Who Pays West Virginia Transfer Tax?</h3>
    <p>West Virginia law requires the <strong>seller to pay the transfer tax</strong> in most transactions. However:</p>
    <ul>
      <li>Trustee sales and tax sales → <strong>buyer pays</strong></li>
      <li>Private transactions → negotiable in contract</li>
      <li>The tax must be paid before the deed can be recorded</li>
    </ul>

    <h3>West Virginia Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $300,000 home in Charleston (Kanawha County)</strong></p>
    <p>$300,000 ÷ $1,000 × $4.40 = <strong>$1,320 transfer tax</strong></p>
    
    <p><strong>Example 2: $300,000 home in Berkeley County</strong></p>
    <p>$300,000 ÷ $1,000 × $7.70 = <strong>$2,310 transfer tax</strong></p>
    
    <p><strong>Example 3: $500,000 home in Harrison County</strong></p>
    <p>$500,000 ÷ $1,000 × $7.00 = <strong>$3,500 transfer tax</strong></p>

    <h3>County Retention of Transfer Tax</h3>
    <p>West Virginia counties retain an increasing percentage of transfer tax revenues:</p>
    <ul>
      <li><strong>2021:</strong> 10% county retention</li>
      <li><strong>2022:</strong> 20% county retention</li>
      <li><strong>2023 and beyond:</strong> 30% county retention</li>
    </ul>
    <p>The remaining portion goes to the state general fund.</p>

    <h3>Transfer Tax as Selling Cost for Capital Gains</h3>
    <p>While West Virginia transfer tax is <strong>not federally tax-deductible</strong>, it can be used to reduce capital gains when selling property:</p>
    <ul>
      <li>Transfer tax is added to your cost basis as a selling expense</li>
      <li>This reduces your taxable capital gain</li>
      <li>Consult a tax professional for specific guidance</li>
    </ul>

    <h3>West Virginia Transfer Tax Exemptions</h3>
    <p>Common exemptions from West Virginia transfer tax include:</p>
    <ul>
      <li><strong>Divorce transfers:</strong> Property transfers pursuant to divorce decree</li>
      <li><strong>Bankruptcy transfers:</strong> Court-ordered property transfers</li>
      <li><strong>Foreclosure sales:</strong> Certain foreclosure situations</li>
      <li><strong>Spouse to spouse:</strong> Transfers between married couples</li>
      <li><strong>Family transfers:</strong> Certain intrafamily conveyances</li>
      <li><strong>Government transfers:</strong> To or from government entities</li>
    </ul>
    <p>Exemptions must be properly documented when recording the deed.</p>

    <h3>Berkeley County: Highest Transfer Tax</h3>
    <p>Berkeley County has the <strong>highest total transfer tax rate</strong> in West Virginia at $7.70 per $1,000 (0.77%). This can significantly impact closing costs:</p>
    <p><strong>On a $400,000 home:</strong> $3,080 in transfer taxes</p>
    <p><strong>On a $750,000 home:</strong> $5,775 in transfer taxes</p>
    <p>Sellers in Berkeley County should budget accordingly for these higher costs.</p>

    <h3>Recording Fees in West Virginia</h3>
    <p>Beyond transfer tax, West Virginia counties charge recording fees:</p>
    <ul>
      <li>Deed recording: Typically $30-$50</li>
      <li>Mortgage recording: Typically $30-$50</li>
      <li>Release recording: Typically $30-$50</li>
    </ul>
    <p>Fees vary by county and document length.</p>

    <h3>West Virginia vs Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State/County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">West Virginia (most counties)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,320</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">West Virginia (Berkeley County)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.77%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,310</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ohio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kentucky</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500-$2,000+</td>
      </tr>
    </table>

    <h3>West Virginia Seller Closing Costs</h3>
    <p>Beyond transfer tax, West Virginia sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Owner's title insurance (negotiable)</li>
      <li>Property tax prorations</li>
      <li>Recording fees for mortgage releases</li>
      <li>Deed preparation ($150-$350)</li>
      <li>Outstanding liens or judgments</li>
      <li>Coal and timber rights documentation (in some areas)</li>
    </ul>
    <p>Total seller costs typically range from 8-10% of sale price in most counties, higher in Berkeley County.</p>

    <h3>Special Situations in West Virginia</h3>
    <p><strong>Coal Rights:</strong> Separate mineral rights may have different transfer tax treatment</p>
    <p><strong>Timber Rights:</strong> Standing timber conveyances may be taxed separately</p>
    <p><strong>New Construction:</strong> Transfer tax applies to first sale</p>
    <p><strong>Land Contracts:</strong> Tax may be deferred until deed transfers</p>
    <p><strong>Foreclosure Sales:</strong> Buyer typically pays transfer tax</p>

    <h3>Mineral and Timber Rights in West Virginia</h3>
    <p>West Virginia is unique in that coal, oil, gas, and timber rights are often severed from surface rights. When selling property:</p>
    <ul>
      <li>Verify what rights are included in the sale</li>
      <li>Mineral rights transfers may have different tax implications</li>
      <li>Timber rights may be conveyed separately</li>
      <li>Disclosure of severed rights is required</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Select your West Virginia county from the dropdown. Enter the property sale price. The calculator will apply the correct rate (standard 0.44% or county-specific rate). See your state and county transfer tax amounts separately. Compare total transfer costs across different West Virginia counties.</p>

    <h3>Tips for West Virginia Real Estate Closings</h3>
    <p>Verify your county's exact transfer tax rate before listing. Berkeley County has the highest rate at 0.77%. Budget transfer tax as a significant closing cost (0.44-0.77%). Claim exemptions if eligible—can save thousands. Use transfer tax as a selling expense for capital gains. Understand mineral and timber rights implications. Use a title company familiar with West Virginia law. Keep all transfer tax receipts for tax records. Factor in 30% county retention when calculating state revenue.</p>
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
        name: 'county',
        label: 'West Virginia County',
        type: 'select',
        options: [
          { value: 'standard', label: 'Most Counties - $4.40 per $1,000 (0.44%)' },
          { value: 'harrison', label: 'Harrison County - $7.00 per $1,000 (0.70%)' },
          { value: 'berkeley', label: 'Berkeley County - $7.70 per $1,000 (0.77%)' },
        ],
        defaultValue: 'standard',
      },
    ],
    results: [
      { label: 'State Base Rate', isCurrency: false },
      { label: 'County Excise Tax', isCurrency: true },
      { label: 'Total Transfer Tax Rate', isCurrency: false },
      { label: 'Total Transfer Tax Amount', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'County Retention (30%)', isCurrency: true },
      { label: 'State Portion (70%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, county } = values;

      let totalRatePerThousand = 4.40;
      if (county === 'harrison') totalRatePerThousand = 7.00;
      if (county === 'berkeley') totalRatePerThousand = 7.70;

      const stateBase = 2.20;
      const countyTax = ((totalRatePerThousand - stateBase) / 1000) * salePrice;
      
      const totalTransferTax = (salePrice / 1000) * totalRatePerThousand;
      const percentageOfSale = (totalTransferTax / salePrice) * 100;
      
      const countyRetention = totalTransferTax * 0.30;
      const statePortion = totalTransferTax * 0.70;

      return [
        { label: 'State Base Rate', value: '$1.10 per $500 ($2.20 per $1,000)' },
        { label: 'County Excise Tax', value: countyTax.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Tax Rate', value: `$${totalRatePerThousand.toFixed(2)} per $1,000 (${(totalRatePerThousand/10).toFixed(2)}%)` },
        { label: 'Total Transfer Tax Amount', value: totalTransferTax.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'County Retention (30%)', value: countyRetention.toFixed(2), isCurrency: true },
        { label: 'State Portion (70%)', value: statePortion.toFixed(2), isCurrency: true },
      ];
    },
  },
};
