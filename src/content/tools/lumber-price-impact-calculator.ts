import { CalculatorContent } from '@/types';

export const LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Lumber Price Impact on Home Cost',
  description: 'Calculate how lumber price fluctuations impact new home construction costs and project budgets',
  icon: 'Icon',
  category: 'Construction & Development',
  slug: 'lumber-price-impact-calculator',
  article: {
    title: "Understanding Lumber Prices and Construction Costs",
    content: `
    <h2>Why Lumber Prices Matter</h2>
    <p>Lumber accounts for 15-20% of the total cost of building a new single-family home. Price swings of 50-300% can add or subtract $10,000-$50,000+ from project costs, dramatically affecting feasibility and profitability.</p>
    
    <h3>Historical Lumber Price Volatility</h3>
    <ul>
      <li><strong>Pre-2020 Baseline:</strong> ~$350-400 per 1,000 board feet</li>
      <li><strong>COVID Peak (May 2021):</strong> $1,686 per 1,000 board feet (+370%)</li>
      <li><strong>Post-Pandemic:</strong> Volatility between $400-900</li>
      <li><strong>Current Range:</strong> $450-600 (varies by type and region)</li>
    </ul>
    
    <h3>How Much Lumber Does a Home Need?</h3>
    <ul>
      <li><strong>1,500 sq ft home:</strong> ~15,000-16,000 board feet</li>
      <li><strong>2,000 sq ft home:</strong> ~18,000-22,000 board feet</li>
      <li><strong>2,500 sq ft home:</strong> ~22,000-28,000 board feet</li>
      <li><strong>3,000 sq ft home:</strong> ~28,000-35,000 board feet</li>
    </ul>
    
    <h3>Impact of Lumber Price Changes</h3>
    
    <h4>Example: 2,000 sq ft Home (20,000 board feet)</h4>
    <table>
      <tr><th>Lumber Price</th><th>Lumber Cost</th><th>Impact on Total Build</th></tr>
      <tr><td>$350/MBF</td><td>$7,000</td><td>Baseline</td></tr>
      <tr><td>$500/MBF</td><td>$10,000</td><td>+$3,000 (+1.5% total cost)</td></tr>
      <tr><td>$750/MBF</td><td>$15,000</td><td>+$8,000 (+4% total cost)</td></tr>
      <tr><td>$1,200/MBF</td><td>$24,000</td><td>+$17,000 (+8.5% total cost)</td></tr>
    </table>
    
    <h3>Strategies for Managing Lumber Costs</h3>
    
    <h4>For Builders/Developers</h4>
    <ul>
      <li><strong>Futures Contracts:</strong> Lock in lumber prices for planned projects</li>
      <li><strong>Bulk Purchasing:</strong> Buy lumber during price dips</li>
      <li><strong>Material Substitution:</strong> Use steel, engineered lumber, or SIPs when economical</li>
      <li><strong>Price Escalation Clauses:</strong> Include in contracts with buyers</li>
      <li><strong>Project Timing:</strong> Delay starts during extreme price peaks</li>
    </ul>
    
    <h4>For Buyers</h4>
    <ul>
      <li><strong>Price Locks:</strong> Get builder to lock lumber price for 60-90 days</li>
      <li><strong>Timing:</strong> Wait for lumber price normalization if possible</li>
      <li><strong>Alternative Materials:</strong> Consider homes with less lumber (concrete, steel frame)</li>
      <li><strong>Negotiate:</strong> Share risk with builder on price changes</li>
    </ul>
    
    <h3>Tracking Lumber Prices</h3>
    <p>Monitor lumber futures prices through:</p>
    <ul>
      <li>CME Random Length Lumber Futures</li>
      <li>National Association of Home Builders (NAHB)</li>
      <li>Random Lengths (industry publication)</li>
      <li>Local lumber yards and suppliers</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "currentLumberPrice",
        label: "Current Lumber Price ($/1000 board feet)",
        type: "number",
        placeholder: "550",
        defaultValue: "550",
      },
      {
        name: "baselineLumberPrice",
        label: "Baseline/Expected Price ($/1000 board feet)",
        type: "number",
        placeholder: "400",
        defaultValue: "400",
      },
      {
        name: "totalBuildCost",
        label: "Total Build Cost (excluding lumber) ($)",
        type: "number",
        placeholder: "180000",
        defaultValue: "180000",
      },
    ],
    results: [
      { label: "Estimated Board Feet Needed", isCurrency: false },
      { label: "Lumber Cost at Current Price", isCurrency: true },
      { label: "Lumber Cost Impact vs Baseline", isCurrency: true },
      { label: "Total Project Cost Impact", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homeSize = Number(data.homeSize) || 2000;
      const currentLumberPrice = Number(data.currentLumberPrice) || 550;
      const baselineLumberPrice = Number(data.baselineLumberPrice) || 400;
      const totalBuildCost = Number(data.totalBuildCost) || 180000;
      
      // Estimate board feet (roughly 10-11 board feet per sq ft for typical frame home)
      const boardFeet = homeSize * 10.5;
      
      // Calculate costs
      const currentLumberCost = (boardFeet / 1000) * currentLumberPrice;
      const baselineLumberCost = (boardFeet / 1000) * baselineLumberPrice;
      const costDifference = currentLumberCost - baselineLumberCost;
      
      // Total project impact
      const totalProjectCost = totalBuildCost + currentLumberCost;
      const baselineTotalCost = totalBuildCost + baselineLumberCost;
      const projectImpactPct = baselineTotalCost > 0 ? ((totalProjectCost - baselineTotalCost) / baselineTotalCost) * 100 : 0;
      
      let impactAssessment = "";
      if (costDifference > 10000) {
        impactAssessment = `${projectImpactPct.toFixed(1)}% increase - 🚨 MAJOR impact, consider delaying project`;
      } else if (costDifference > 5000) {
        impactAssessment = `${projectImpactPct.toFixed(1)}% increase - ⚠️ Significant impact on margins`;
      } else if (costDifference > 2000) {
        impactAssessment = `${projectImpactPct.toFixed(1)}% increase - 💰 Moderate cost increase`;
      } else if (costDifference > 0) {
        impactAssessment = `${projectImpactPct.toFixed(1)}% increase - ✅ Minor impact`;
      } else if (costDifference < -5000) {
        impactAssessment = `${Math.abs(projectImpactPct).toFixed(1)}% decrease - 🎉 Major savings opportunity!`;
      } else if (costDifference < 0) {
        impactAssessment = `${Math.abs(projectImpactPct).toFixed(1)}% decrease - 💚 Favorable pricing`;
      } else {
        impactAssessment = "No change from baseline";
      }

      return [
        { label: "Estimated Board Feet Needed", value: boardFeet.toLocaleString(), isCurrency: false },
        { label: "Lumber Cost at Current Price", value: currentLumberCost.toFixed(0), isCurrency: true },
        { label: "Lumber Cost Impact vs Baseline", value: `${costDifference >= 0 ? '+' : ''}${costDifference.toFixed(0)}`, isCurrency: true },
        { label: "Total Project Cost Impact", value: impactAssessment, isCurrency: false },
      ];
    },
  },
};