import { CalculatorContent } from '@/types';

export const CO_OP_FLIP_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Co-op Flip Tax Calculator',
  description: 'Calculate co-op flip tax on resale and analyze seller closing costs',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'co-op-flip-tax-calculator',
  article: {
    title: "Understanding Co-op Flip Tax",
    content: `
    <h2>What is a Co-op Flip Tax?</h2>
    <p>A co-op flip tax is a fee charged by the cooperative corporation when a unit is sold. Unlike government transfer taxes, flip taxes go directly to the co-op's reserve fund to benefit all shareholders. This fee can significantly impact seller net proceeds.</p>
    
    <h3>How Flip Tax is Calculated</h3>
    <ul>
      <li><strong>Percentage of Sale Price:</strong> Most common (1-3% of gross sale price)</li>
      <li><strong>Percentage of Profit:</strong> 10-20% of capital gain (sale price minus purchase price)</li>
      <li><strong>Per-Share Fee:</strong> Fixed amount per share owned</li>
      <li><strong>Flat Fee:</strong> Fixed dollar amount regardless of sale price</li>
      <li><strong>Tiered Structure:</strong> Different rates based on holding period or profit</li>
    </ul>
    
    <h3>Typical Flip Tax Rates</h3>
    <p>In major markets like New York City:</p>
    <ul>
      <li><strong>NYC Average:</strong> 1-3% of sale price or 10-20% of profit</li>
      <li><strong>Luxury Buildings:</strong> Often 2-3% of sale price</li>
      <li><strong>Starter Co-ops:</strong> May be 1% or have flat fees</li>
      <li><strong>Who Pays:</strong> Usually seller, but can be negotiated with buyer</li>
    </ul>
    
    <h3>Purpose of Flip Tax</h3>
    <ul>
      <li><strong>Revenue Generation:</strong> Funds capital improvements without assessments</li>
      <li><strong>Reduce Speculation:</strong> Discourages quick flips and turnover</li>
      <li><strong>Maintenance Deferral:</strong> Allows boards to defer maintenance fee increases</li>
      <li><strong>Reserve Building:</strong> Strengthens financial position for major projects</li>
    </ul>
    
    <h3>Flip Tax vs. Transfer Tax</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Flip Tax</th>
        <th>Transfer Tax</th>
      </tr>
      <tr>
        <td>Payee</td>
        <td>Co-op Corporation</td>
        <td>Government</td>
      </tr>
      <tr>
        <td>Amount</td>
        <td>Varies by co-op</td>
        <td>Set by state/city</td>
      </tr>
      <tr>
        <td>Negotiable</td>
        <td>Buyer/seller can negotiate</td>
        <td>Required by law</td>
      </tr>
      <tr>
        <td>Tax Deductible</td>
        <td>Not typically</td>
        <td>Not typically</td>
      </tr>
    </table>
    
    <h3>Impact on Sellers</h3>
    <p>Flip tax can add $10,000-$50,000+ to closing costs on expensive co-ops. Sellers must factor this into net proceeds calculations and pricing strategy. Some co-ops allow negotiation of who pays the flip tax.</p>
    
    <h3>Considerations for Buyers</h3>
    <ul>
      <li><strong>Future Resale:</strong> Higher flip tax reduces future resale proceeds</li>
      <li><strong>Negotiation:</strong> Sometimes buyers agree to pay flip tax for price reduction</li>
      <li><strong>Building Financials:</strong> Flip tax revenue strengthens building reserves</li>
      <li><strong>Investment Analysis:</strong> Factor into total cost of ownership</li>
    </ul>
    
    <h3>Legal Aspects</h3>
    <p>Flip taxes must be outlined in the co-op's governing documents (proprietary lease or bylaws). Boards can modify flip tax structures, but typically need shareholder approval. Always review co-op financial statements and bylaws before purchasing.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "salePrice",
        label: "Sale Price",
        type: "number",
        placeholder: "750000",
        defaultValue: "750000",
      },
      {
        name: "originalPurchasePrice",
        label: "Original Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "flipTaxType",
        label: "Flip Tax Type",
        type: "select",
        options: [
          { value: "percent_sale", label: "Percentage of Sale Price" },
          { value: "percent_profit", label: "Percentage of Profit" },
          { value: "per_share", label: "Per Share" },
          { value: "flat_fee", label: "Flat Fee" },
        ],
        defaultValue: "percent_sale",
      },
      {
        name: "flipTaxRate",
        label: "Flip Tax Rate (% or $ amount)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "numberOfShares",
        label: "Number of Shares (if per-share)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "brokerCommission",
        label: "Broker Commission (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
    ],
    results: [
      { label: "Capital Gain", isCurrency: true },
      { label: "Flip Tax Amount", isCurrency: true },
      { label: "Broker Commission", isCurrency: true },
      { label: "Total Closing Costs (Est.)", isCurrency: true },
      { label: "Net Proceeds to Seller", isCurrency: true },
      { label: "Flip Tax as % of Sale Price", isCurrency: false },
      { label: "Effective Return on Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const salePrice = Number(data.salePrice) || 0;
      const originalPurchasePrice = Number(data.originalPurchasePrice) || 0;
      const flipTaxType = data.flipTaxType || "percent_sale";
      const flipTaxRate = Number(data.flipTaxRate) || 0;
      const numberOfShares = Number(data.numberOfShares) || 0;
      const brokerCommission = Number(data.brokerCommission) || 0;

      const capitalGain = salePrice - originalPurchasePrice;
      
      let flipTax = 0;
      if (flipTaxType === "percent_sale") {
        flipTax = salePrice * (flipTaxRate / 100);
      } else if (flipTaxType === "percent_profit") {
        flipTax = capitalGain > 0 ? capitalGain * (flipTaxRate / 100) : 0;
      } else if (flipTaxType === "per_share") {
        flipTax = numberOfShares * flipTaxRate;
      } else if (flipTaxType === "flat_fee") {
        flipTax = flipTaxRate;
      }
      
      const brokerFee = salePrice * (brokerCommission / 100);
      const estimatedOtherCosts = 5000;
      const totalClosingCosts = flipTax + brokerFee + estimatedOtherCosts;
      
      const netProceeds = salePrice - totalClosingCosts;
      const flipTaxPercent = salePrice > 0 ? (flipTax / salePrice) * 100 : 0;
      
      const totalReturn = originalPurchasePrice > 0 ? ((netProceeds - originalPurchasePrice) / originalPurchasePrice) * 100 : 0;

      return [
        { label: "Capital Gain", value: `${capitalGain.toFixed(2)}`, isCurrency: true },
        { label: "Flip Tax Amount", value: `${flipTax.toFixed(2)}`, isCurrency: true },
        { label: "Broker Commission", value: `${brokerFee.toFixed(2)}`, isCurrency: true },
        { label: "Total Closing Costs (Est.)", value: `${totalClosingCosts.toFixed(2)}`, isCurrency: true },
        { label: "Net Proceeds to Seller", value: `${netProceeds.toFixed(2)}`, isCurrency: true },
        { label: "Flip Tax as % of Sale Price", value: `${flipTaxPercent.toFixed(2)}%`, isCurrency: false },
        { label: "Effective Return on Investment", value: `${totalReturn.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
