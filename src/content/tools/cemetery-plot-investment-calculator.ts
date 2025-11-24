import { CalculatorContent } from '@/types';

export const CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cemetery Plot Investment Calculator',
  description: 'Analyze the costs and potential returns of investing in cemetery plots for resale or family planning',
  icon: 'Icon',
  category: 'Real Estate Investment',
  slug: 'cemetery-plot-investment-calculator',
  article: {
    title: "Cemetery Plot Investment: Understanding Costs and Returns",
    content: `
    <h2>Cemetery Plot as a Real Estate Investment</h2>
    <p>Cemetery plots represent a unique niche in real estate investment. While unconventional, they can serve both personal estate planning needs and investment purposes. Understanding the costs and potential returns is essential before purchasing.</p>
    
    <h3>Types of Cemetery Plots</h3>
    <ul>
      <li><strong>Single Plot:</strong> Space for one burial ($1,000-$5,000 average)</li>
      <li><strong>Companion/Double Plot:</strong> Side-by-side spaces for couples ($2,000-$10,000)</li>
      <li><strong>Family Plot:</strong> Multiple adjacent spaces (varies widely)</li>
      <li><strong>Mausoleum Crypts:</strong> Above-ground entombment ($4,000-$20,000+)</li>
      <li><strong>Green/Natural Burial Plots:</strong> Eco-friendly options ($1,000-$4,000)</li>
    </ul>
    
    <h3>Initial Purchase Costs</h3>
    <p>When buying a cemetery plot, expect to pay:</p>
    <ul>
      <li><strong>Plot Price:</strong> Varies by location, cemetery prestige, and plot type</li>
      <li><strong>Transfer/Deed Fees:</strong> Administrative costs ($100-$500)</li>
      <li><strong>Recording Fees:</strong> Official documentation ($50-$200)</li>
      <li><strong>Broker Commission:</strong> If buying through a resale broker (10-20%)</li>
    </ul>
    
    <h3>Ongoing Costs</h3>
    <p>Cemetery plots may have perpetual care fees or annual maintenance charges:</p>
    <ul>
      <li><strong>Perpetual Care Fee:</strong> One-time fee for eternal maintenance (often included)</li>
      <li><strong>Annual Maintenance:</strong> Some cemeteries charge ongoing fees ($25-$200/year)</li>
      <li><strong>Property Taxes:</strong> Rare, but some locations tax cemetery property</li>
    </ul>
    
    <h3>Future Burial Costs (Not Included in Plot Price)</h3>
    <p>Remember that the plot is just the land. Actual burial involves additional costs:</p>
    <ul>
      <li>Opening and closing the grave ($800-$3,000)</li>
      <li>Casket or urn ($500-$10,000+)</li>
      <li>Headstone or grave marker ($1,000-$5,000+)</li>
      <li>Funeral service costs (varies widely)</li>
    </ul>
    
    <h3>Resale Market Considerations</h3>
    <p>Cemetery plots can appreciate, especially in desirable locations or sold-out cemeteries:</p>
    <ul>
      <li><strong>Appreciation Rate:</strong> Typically 3-8% annually in high-demand areas</li>
      <li><strong>Resale Restrictions:</strong> Some cemeteries limit or prohibit resale</li>
      <li><strong>Right of First Refusal:</strong> Cemetery may have first right to buy back</li>
      <li><strong>Transfer Fees:</strong> Cemeteries often charge to transfer ownership</li>
      <li><strong>Market Liquidity:</strong> Can take time to find buyers</li>
    </ul>
    
    <h3>Investment Strategy: When It Makes Sense</h3>
    <p><strong>Personal/Family Use:</strong> Buying ahead locks in current prices, avoiding future inflation</p>
    <p><strong>Investment Purpose:</strong> Works best in:</p>
    <ul>
      <li>Sold-out or nearly-full prestigious cemeteries</li>
      <li>Historic cemeteries with limited space</li>
      <li>Fast-growing metropolitan areas</li>
      <li>Locations with cultural significance</li>
    </ul>
    
    <h3>Risks and Considerations</h3>
    <ul>
      <li><strong>Illiquid Asset:</strong> Can take months or years to sell</li>
      <li><strong>No Rental Income:</strong> Unlike most real estate, generates no cash flow</li>
      <li><strong>Emotional Factor:</strong> Some buyers are uncomfortable with the concept</li>
      <li><strong>Legal Restrictions:</strong> State and cemetery rules may limit resale profits</li>
      <li><strong>Cemetery Financial Health:</strong> Financially troubled cemeteries can be problematic</li>
    </ul>
    
    <h3>Tax Implications</h3>
    <ul>
      <li>Cemetery plots for personal use: No tax deduction</li>
      <li>Investment plots: Capital gains tax may apply on profits</li>
      <li>Estate planning: May be included in estate valuation</li>
      <li>Donated plots: Potential charitable deduction if given to cemetery</li>
    </ul>
    
    <h3>Due Diligence Checklist</h3>
    <p>Before purchasing a cemetery plot as an investment:</p>
    <ul>
      <li>✓ Research the cemetery's financial stability and reputation</li>
      <li>✓ Read all contracts carefully for resale restrictions</li>
      <li>✓ Understand transfer fees and processes</li>
      <li>✓ Check local comparable plot prices</li>
      <li>✓ Verify perpetual care arrangements</li>
      <li>✓ Investigate market demand in the area</li>
      <li>✓ Consult with a real estate attorney familiar with cemetery law</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "plotPurchasePrice",
        label: "Plot Purchase Price",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "transferFees",
        label: "Transfer/Deed Fees",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "brokerCommission",
        label: "Broker Commission (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "annualMaintenanceFee",
        label: "Annual Maintenance Fee",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "yearsHeld",
        label: "Years Held Before Selling",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "annualAppreciation",
        label: "Expected Annual Appreciation (%)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "sellingFees",
        label: "Selling/Transfer Fees at Resale",
        type: "number",
        placeholder: "400",
        defaultValue: "400",
      },
    ],
    results: [
      { label: "Total Initial Investment", isCurrency: true },
      { label: "Total Maintenance Costs Over Time", isCurrency: true },
      { label: "Total Investment", isCurrency: true },
      { label: "Estimated Future Value", isCurrency: true },
      { label: "Gross Profit", isCurrency: true },
      { label: "Net Profit (After Selling Fees)", isCurrency: true },
      { label: "ROI (%)", isCurrency: false },
      { label: "Investment Rating", isCurrency: false },
    ],
    calculate: (data: any) => {
      const plotPurchasePrice = Number(data.plotPurchasePrice) || 0;
      const transferFees = Number(data.transferFees) || 0;
      const brokerCommission = Number(data.brokerCommission) || 0;
      const annualMaintenanceFee = Number(data.annualMaintenanceFee) || 0;
      const yearsHeld = Number(data.yearsHeld) || 10;
      const annualAppreciation = Number(data.annualAppreciation) || 5;
      const sellingFees = Number(data.sellingFees) || 0;
      
      // Initial investment
      const totalInitialInvestment = plotPurchasePrice + transferFees + brokerCommission;
      
      // Maintenance costs over time
      const totalMaintenanceCosts = annualMaintenanceFee * yearsHeld;
      
      // Total investment
      const totalInvestment = totalInitialInvestment + totalMaintenanceCosts;
      
      // Future value with appreciation
      const futureValue = plotPurchasePrice * Math.pow(1 + (annualAppreciation / 100), yearsHeld);
      
      // Profit calculations
      const grossProfit = futureValue - totalInvestment;
      const netProfit = grossProfit - sellingFees;
      
      // ROI calculation
      const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;
      
      let investmentRating = "";
      if (roi > 50) {
        investmentRating = "✅ Excellent ROI - Strong investment potential";
      } else if (roi > 25) {
        investmentRating = "✅ Good ROI - Solid investment";
      } else if (roi > 0) {
        investmentRating = "💡 Modest ROI - Consider personal use value";
      } else {
        investmentRating = "⚠️ Negative ROI - Better for personal/family use than investment";
      }

      return [
        { label: "Total Initial Investment", value: `${totalInitialInvestment.toFixed(2)}`, isCurrency: true },
        { label: "Total Maintenance Costs Over Time", value: `${totalMaintenanceCosts.toFixed(2)}`, isCurrency: true },
        { label: "Total Investment", value: `${totalInvestment.toFixed(2)}`, isCurrency: true },
        { label: "Estimated Future Value", value: `${futureValue.toFixed(2)}`, isCurrency: true },
        { label: "Gross Profit", value: `${grossProfit.toFixed(2)}`, isCurrency: true },
        { label: "Net Profit (After Selling Fees)", value: `${netProfit.toFixed(2)}`, isCurrency: true },
        { label: "ROI (%)", value: `${roi.toFixed(2)}%`, isCurrency: false },
        { label: "Investment Rating", value: investmentRating, isCurrency: false },
      ];
    },
  },
};