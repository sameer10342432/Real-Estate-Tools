import { CalculatorContent } from '@/types';

export const NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Nevada Transfer Tax Calculator - Real Estate Transfer Costs',
  description: 'Calculate Nevada real estate transfer tax and county surcharges for Clark, Washoe, and all NV counties',
  slug: 'nevada-transfer-tax-calculator',
  icon: '🎰',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Nevada Real Estate Transfer Tax & County Surcharges',
    content: `
    <h2>Nevada Transfer Tax Guide</h2>
    <p>Nevada imposes a <strong>state transfer tax of $1.95 per $500</strong> of property value (or fraction thereof) on most real estate transactions. Additionally, several counties add surcharges, making Nevada's transfer tax structure more complex than many other states.</p>
    
    <h3>Nevada Transfer Tax Rates by County</h3>
    <p><strong>Statewide Base Rate:</strong> $1.95 per $500 (or 0.39% of sale price)</p>
    <p><strong>Clark County (Las Vegas):</strong> $2.55 per $500 ($0.60 surcharge)</p>
    <p><strong>Washoe County (Reno):</strong> $2.05 per $500 ($0.10 surcharge)</p>
    <p><strong>Churchill County:</strong> $2.05 per $500 ($0.10 surcharge)</p>
    <p><strong>All Other Nevada Counties:</strong> $1.95 per $500 (base rate only)</p>

    <h3>Who Pays Nevada Transfer Tax?</h3>
    <p>Nevada law states that both the <strong>grantor (seller) and grantee (buyer) are jointly and severally liable</strong> for the transfer tax. In practice, the seller typically pays the entire transfer tax, but this is negotiable in the purchase contract.</p>
    <p>The tax must be paid before the deed can be recorded with the county recorder's office.</p>

    <h3>Nevada Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $400,000 home in Las Vegas (Clark County)</strong></p>
    <p>$400,000 ÷ $500 = 800 increments × $2.55 = <strong>$2,040 transfer tax</strong></p>
    
    <p><strong>Example 2: $400,000 home in Reno (Washoe County)</strong></p>
    <p>$400,000 ÷ $500 = 800 increments × $2.05 = <strong>$1,640 transfer tax</strong></p>
    
    <p><strong>Example 3: $400,000 home in Carson City</strong></p>
    <p>$400,000 ÷ $500 = 800 increments × $1.95 = <strong>$1,560 transfer tax</strong></p>

    <h3>Clark County Surcharge Explained</h3>
    <p>Clark County, which includes Las Vegas, North Las Vegas, and Henderson, has the highest transfer tax rate in Nevada at $2.55 per $500. This includes:</p>
    <ul>
      <li>$1.95 state base rate</li>
      <li>$0.60 Clark County surcharge</li>
    </ul>
    <p>On a $500,000 home in Las Vegas, this results in $2,550 in transfer taxes—$600 more than the same home would cost in a base-rate county.</p>

    <h3>Nevada Transfer Tax Exemptions</h3>
    <p>Nevada law provides <strong>14 exemptions</strong> from transfer tax, including:</p>
    <ul>
      <li><strong>Transfers between parent and child:</strong> No tax if transferring to/from direct family</li>
      <li><strong>Divorce transfers:</strong> Property transfers pursuant to divorce decree</li>
      <li><strong>Trust transfers:</strong> Transfers to/from trusts with certificate of trust and no consideration</li>
      <li><strong>Gift deeds:</strong> Transfers with no consideration (must still file declaration)</li>
      <li><strong>Government transfers:</strong> Transfers to or from government entities</li>
      <li><strong>Inherited property:</strong> Property transferred by will in some counties</li>
      <li><strong>Partnership/LLC reorganizations:</strong> With identical ownership percentages</li>
    </ul>
    <p>To claim an exemption, you must complete a Declaration of Value form and submit it with the deed.</p>

    <h3>Declaration of Value Form</h3>
    <p>Every deed recorded in Nevada must include a <strong>Declaration of Value</strong> form, even if the transfer is exempt. This form requires:</p>
    <ul>
      <li>Property address and assessor's parcel number (APN)</li>
      <li>Sale price or estimated value</li>
      <li>Verification of tax paid or exemption claimed</li>
      <li>Buyer and seller signatures</li>
    </ul>
    <p>Forms are available at county recorder's offices or on the Nevada Department of Taxation website.</p>

    <h3>Paying Nevada Transfer Tax</h3>
    <p>Transfer tax can be paid via:</p>
    <ul>
      <li><strong>Title company:</strong> Most common—handled automatically at closing</li>
      <li><strong>County recorder's office:</strong> Direct payment when recording deed</li>
      <li><strong>Online:</strong> Some counties accept online payments</li>
    </ul>
    <p>The title company typically collects transfer tax funds from the seller at closing and remits payment to the county when recording the deed.</p>

    <h3>Nevada vs Other Western States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada (Clark County)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.51%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,550</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nevada (other counties)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.39%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,950</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Arizona</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~0.11%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Utah</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11-6%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550-$30,000+</td>
      </tr>
    </table>

    <h3>Nevada Seller Closing Costs</h3>
    <p>Beyond transfer tax, Nevada sellers typically pay:</p>
    <ul>
      <li>Real estate commissions (5-6% of sale price)</li>
      <li>Title insurance (owner's policy)</li>
      <li>Escrow/closing fees (split with buyer)</li>
      <li>Recording fees for payoff documents</li>
      <li>HOA transfer fees ($200-$500 if applicable)</li>
      <li>Property tax prorations (credit to buyer)</li>
      <li>Outstanding liens or judgments</li>
    </ul>
    <p>Total seller costs typically range from 8-10% of the sale price.</p>

    <h3>Special Situations in Nevada</h3>
    <p><strong>New Construction:</strong> Transfer tax applies to new builds—builder pays tax on first sale</p>
    <p><strong>Short Sales/Foreclosures:</strong> Transfer tax still due; typically paid from proceeds</p>
    <p><strong>1031 Exchanges:</strong> Transfer tax still applies to replacement property</p>
    <p><strong>Lease with Option to Purchase:</strong> Tax due when option is exercised and deed transfers</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Seller responsible for ensuring tax is paid and form filed</p>

    <h3>Tips for Nevada Real Estate Closings</h3>
    <p>Verify your county's exact rate—Clark County costs significantly more. Budget transfer tax as part of closing costs in net sheet. Consider negotiating transfer tax in competitive markets. File declaration of value accurately to avoid penalties. Claim exemptions if eligible—can save thousands. Use a reputable title company to handle recording and tax payment. Keep copies of all transfer tax receipts for tax records. Factor in transfer tax when calculating investment returns.</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Select your Nevada county from the dropdown. Enter the property sale price. The calculator will automatically apply the correct rate (base rate or county surcharge). See your total transfer tax cost instantly. Compare costs across different Nevada counties.</p>
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
        label: 'Nevada County',
        type: 'select',
        options: [
          { value: 'clark', label: 'Clark County (Las Vegas) - $2.55 per $500' },
          { value: 'washoe', label: 'Washoe County (Reno) - $2.05 per $500' },
          { value: 'churchill', label: 'Churchill County - $2.05 per $500' },
          { value: 'other', label: 'All Other Counties - $1.95 per $500' },
        ],
        defaultValue: 'clark',
      },
    ],
    results: [
      { label: 'State Base Rate', isCurrency: false },
      { label: 'County Surcharge', isCurrency: true },
      { label: 'Total Transfer Tax Rate', isCurrency: false },
      { label: 'Transfer Tax Amount', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Increments Taxed (per $500)', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, county } = values;

      let ratePerIncrement = 1.95;
      let surcharge = 0;

      if (county === 'clark') {
        ratePerIncrement = 2.55;
        surcharge = 0.60;
      } else if (county === 'washoe' || county === 'churchill') {
        ratePerIncrement = 2.05;
        surcharge = 0.10;
      }

      const increments = Math.ceil(salePrice / 500);
      const transferTax = increments * ratePerIncrement;
      const surchargeAmount = increments * surcharge;
      const percentageOfSale = (transferTax / salePrice) * 100;

      return [
        { label: 'State Base Rate', value: '$1.95 per $500' },
        { label: 'County Surcharge', value: surchargeAmount.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Tax Rate', value: `$${ratePerIncrement.toFixed(2)} per $500` },
        { label: 'Transfer Tax Amount', value: transferTax.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Increments Taxed (per $500)', value: increments.toString() },
      ];
    },
  },
};
