import { CalculatorContent } from '@/types';

export const TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Tax Loss Harvesting Calculator for Real Estate | Offset Capital Gains',
  description: 'Calculate tax savings from harvesting real estate losses to offset capital gains. Strategic tool for investors to minimize tax liability through property loss recognition and tax planning.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'tax-loss-harvesting-real-estate-calculator',
  article: {
    title: "Tax Loss Harvesting Strategies for Real Estate Investors",
    content: `
    <h2>What is Tax Loss Harvesting in Real Estate?</h2>
    <p>Tax loss harvesting is the strategic sale of underperforming properties to realize capital losses that can offset capital gains from other investments. It's a powerful tax planning strategy for real estate investors.</p>
    
    <h3>How Tax Loss Harvesting Works</h3>
    <p>When you sell a property for less than your adjusted basis, you realize a capital loss. These losses can:</p>
    <ul>
      <li><strong>Offset Capital Gains:</strong> Reduce or eliminate taxes on profitable real estate sales</li>
      <li><strong>Offset Other Income:</strong> Up to $3,000 per year of ordinary income</li>
      <li><strong>Carry Forward:</strong> Unused losses carry forward indefinitely to future years</li>
    </ul>
    
    <h3>Capital Loss Rules</h3>
    <p><strong>Investment Property:</strong> Capital losses fully deductible against capital gains</p>
    <p><strong>Primary Residence:</strong> Losses on sale of personal residence are NOT deductible</p>
    <p><strong>Loss Limitation:</strong> $3,000 maximum deduction against ordinary income per year ($1,500 if married filing separately)</p>
    
    <h3>Strategic Timing Considerations</h3>
    <ul>
      <li><strong>Year-End Planning:</strong> Review portfolio before December 31 to harvest losses</li>
      <li><strong>Match Gains and Losses:</strong> Time sales to offset gains in same tax year</li>
      <li><strong>Multi-Year Strategy:</strong> Plan for loss carryforwards if losses exceed gains</li>
      <li><strong>Consider Holding Period:</strong> Short-term vs long-term capital loss treatment</li>
    </ul>
    
    <h3>Wash Sale Rules Don't Apply to Real Estate</h3>
    <p>Unlike stocks, the wash sale rule (30-day repurchase restriction) does NOT apply to real estate. You could theoretically:</p>
    <ul>
      <li>Sell a property to realize a loss</li>
      <li>Immediately repurchase a similar property</li>
      <li>Still claim the tax loss (consult tax advisor)</li>
    </ul>
    <p><strong>Warning:</strong> The IRS may challenge if transaction lacks economic substance or is solely for tax avoidance.</p>
    
    <h3>Example Tax Loss Harvesting Scenario</h3>
    <p><strong>Situation:</strong></p>
    <ul>
      <li>Sold rental property A: $200,000 gain</li>
      <li>Underperforming rental property B: $50,000 unrealized loss</li>
    </ul>
    <p><strong>Strategy:</strong></p>
    <ul>
      <li>Sell property B before year-end to realize $50,000 loss</li>
      <li>Loss offsets $50,000 of the gain from property A</li>
      <li>Only pay tax on $150,000 net gain instead of $200,000</li>
      <li>Tax savings: $50,000 × 20% = $10,000 (plus state taxes)</li>
    </ul>
    
    <h3>Depreciation Recapture Considerations</h3>
    <p>When selling at a loss:</p>
    <ul>
      <li>No depreciation recapture if sold below adjusted basis</li>
      <li>Capital loss = Adjusted Basis - Sale Price</li>
      <li>Make sure to account for all depreciation taken in basis calculation</li>
    </ul>
    
    <h3>Alternative Strategies</h3>
    <p><strong>Installment Sale:</strong> Spread gain recognition over multiple years</p>
    <p><strong>1031 Exchange:</strong> Defer gains entirely by exchanging for like-kind property</p>
    <p><strong>Opportunity Zones:</strong> Defer and potentially eliminate some capital gains</p>
    
    <h3>When NOT to Harvest Losses</h3>
    <ul>
      <li>Property has strong potential for recovery</li>
      <li>Selling costs exceed tax benefit</li>
      <li>No offsetting gains this year and minimal projected future gains</li>
      <li>Property provides valuable cash flow despite paper loss</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "capitalGains",
        label: "Capital Gains to Offset",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "propertyBasis",
        label: "Adjusted Basis of Loss Property",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "salePrice",
        label: "Expected Sale Price",
        type: "number",
        placeholder: "250000",
        defaultValue: "250000",
      },
      {
        name: "sellingCosts",
        label: "Selling Costs (Commission, Fees)",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
      {
        name: "taxRate",
        label: "Capital Gains Tax Rate (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "stateTaxRate",
        label: "State Tax Rate (%)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Capital Loss Realized", isCurrency: true },
      { label: "Net Capital Gains After Offset", isCurrency: true },
      { label: "Federal Tax Savings", isCurrency: true },
      { label: "State Tax Savings", isCurrency: true },
      { label: "Total Tax Savings", isCurrency: true },
      { label: "Remaining Loss Carryforward", isCurrency: true },
    ],
    calculate: (data: any) => {
      const capitalGains = Number(data.capitalGains) || 0;
      const propertyBasis = Number(data.propertyBasis) || 0;
      const salePrice = Number(data.salePrice) || 0;
      const sellingCosts = Number(data.sellingCosts) || 0;
      const taxRate = Number(data.taxRate) || 20;
      const stateTaxRate = Number(data.stateTaxRate) || 5;
      
      const capitalLoss = Math.max(0, propertyBasis - salePrice - sellingCosts);
      const netGains = Math.max(0, capitalGains - capitalLoss);
      const federalSavings = Math.min(capitalGains, capitalLoss) * (taxRate / 100);
      const stateSavings = Math.min(capitalGains, capitalLoss) * (stateTaxRate / 100);
      const totalSavings = federalSavings + stateSavings;
      const carryforward = Math.max(0, capitalLoss - capitalGains);

      return [
        { label: "Capital Loss Realized", value: `${capitalLoss.toFixed(2)}`, isCurrency: true },
        { label: "Net Capital Gains After Offset", value: `${netGains.toFixed(2)}`, isCurrency: true },
        { label: "Federal Tax Savings", value: `${federalSavings.toFixed(2)}`, isCurrency: true },
        { label: "State Tax Savings", value: `${stateSavings.toFixed(2)}`, isCurrency: true },
        { label: "Total Tax Savings", value: `${totalSavings.toFixed(2)}`, isCurrency: true },
        { label: "Remaining Loss Carryforward", value: `${carryforward.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
