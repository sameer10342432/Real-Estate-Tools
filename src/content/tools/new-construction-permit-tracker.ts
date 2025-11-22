import { CalculatorContent } from '@/types';

export const NEW_CONSTRUCTION_PERMIT_TRACKER_CONTENT: CalculatorContent = {
  title: 'New Construction Permit Tracker',
  description: 'Track new construction permits to identify growing markets and development opportunities',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'new-construction-permit-tracker',
  article: {
    title: "Using Construction Permits to Predict Market Trends",
    content: `
    <h2>Why Track Construction Permits?</h2>
    <p>New construction permits are a leading indicator of real estate market trends. They signal developer confidence, population growth expectations, and future housing supply that will impact prices and rents.</p>
    
    <h3>Key Permit Metrics to Track</h3>
    <ul>
      <li><strong>Permit Volume:</strong> Total number of permits issued monthly or annually</li>
      <li><strong>Year-over-Year Growth:</strong> Increasing permits = growing market confidence</li>
      <li><strong>Permit Types:</strong> Single-family vs multi-family distribution</li>
      <li><strong>Permits per 1,000 Residents:</strong> Normalized growth metric</li>
      <li><strong>Permit-to-Population Ratio:</strong> Measures supply relative to demand</li>
    </ul>
    
    <h3>What Permit Data Tells You</h3>
    
    <h4>Rising Permits (20%+ YoY Growth)</h4>
    <ul>
      <li><strong>Bullish Signal:</strong> Developers expect strong demand</li>
      <li><strong>Job Growth:</strong> Construction creates employment</li>
      <li><strong>Caution:</strong> Oversupply risk if permits far exceed population growth</li>
    </ul>
    
    <h4>Declining Permits (Negative YoY)</h4>
    <ul>
      <li><strong>Bearish Signal:</strong> Developers pulling back</li>
      <li><strong>Supply Shortage:</strong> May lead to price increases later</li>
      <li><strong>Market Uncertainty:</strong> Builders concerned about demand</li>
    </ul>
    
    <h3>Investment Strategies Based on Permits</h3>
    
    <h4>High Growth Markets (Permits Growing 30%+)</h4>
    <ul>
      <li>Buy land ahead of development</li>
      <li>Invest in rental properties (new population needs housing)</li>
      <li>Commercial real estate near new developments</li>
      <li>Watch for oversupply: If permits exceed population growth by 3x, be cautious</li>
    </ul>
    
    <h4>Low Permit Markets (Flat or Declining)</h4>
    <ul>
      <li>Existing home inventory becomes more valuable</li>
      <li>Renovation plays (less new competition)</li>
      <li>Infill development opportunities</li>
      <li>Rent growth potential from limited new supply</li>
    </ul>
    
    <h3>Red Flags: Overbuilding</h3>
    <p>Watch for these warning signs:</p>
    <ul>
      <li>Permits exceed population growth by 3-4x</li>
      <li>Multi-family permits surge beyond historical norms</li>
      <li>Rapid permit growth in declining population markets</li>
      <li>Speculative condo/luxury development spikes</li>
    </ul>
    
    <h3>Data Sources</h3>
    <p>Access permit data from US Census Building Permits Survey, local building departments, or real estate data providers like BuildFax and ATTOM.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "marketName",
        label: "Market/City Name",
        type: "text",
        placeholder: "e.g., Austin, TX",
        defaultValue: "",
      },
      {
        name: "currentPermits",
        label: "Current Year Permits Issued",
        type: "number",
        placeholder: "25000",
        defaultValue: "25000",
      },
      {
        name: "previousPermits",
        label: "Previous Year Permits Issued",
        type: "number",
        placeholder: "20000",
        defaultValue: "20000",
      },
      {
        name: "population",
        label: "Current Population",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "populationGrowth",
        label: "Annual Population Growth Rate (%)",
        type: "number",
        placeholder: "2.8",
        defaultValue: "2.8",
      },
    ],
    results: [
      { label: "Permit Growth Rate", isCurrency: false },
      { label: "Permits per 1,000 Residents", isCurrency: false },
      { label: "Market Development Status", isCurrency: false },
      { label: "Supply Risk Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentPermits = Number(data.currentPermits) || 0;
      const previousPermits = Number(data.previousPermits) || 0;
      const population = Number(data.population) || 0;
      const populationGrowth = Number(data.populationGrowth) || 0;
      
      // Calculate metrics
      const permitGrowth = previousPermits > 0 ? ((currentPermits - previousPermits) / previousPermits) * 100 : 0;
      const permitsPer1000 = population > 0 ? (currentPermits / population) * 1000 : 0;
      const supplyToPopGrowthRatio = populationGrowth > 0 ? permitGrowth / populationGrowth : 0;
      
      // Development status
      let devStatus = "";
      if (permitGrowth >= 40) devStatus = "🚀 Explosive Growth";
      else if (permitGrowth >= 25) devStatus = "📈 Rapid Expansion";
      else if (permitGrowth >= 10) devStatus = "✅ Healthy Growth";
      else if (permitGrowth >= 0) devStatus = "➡️ Stable/Slow Growth";
      else if (permitGrowth >= -10) devStatus = "⚠️ Slight Decline";
      else devStatus = "🔴 Sharp Decline";
      
      // Supply risk
      let supplyRisk = "";
      if (supplyToPopGrowthRatio >= 4) {
        supplyRisk = "🚨 HIGH OVERSUPPLY RISK - Permits far exceed population growth";
      } else if (supplyToPopGrowthRatio >= 2.5) {
        supplyRisk = "⚠️ Moderate Oversupply Risk - Monitor carefully";
      } else if (supplyToPopGrowthRatio >= 1.5) {
        supplyRisk = "✅ Balanced Growth - Permits aligned with demand";
      } else if (supplyToPopGrowthRatio >= 0.5) {
        supplyRisk = "💎 Undersupply - Limited new competition";
      } else if (permitGrowth > 0) {
        supplyRisk = "💰 Excellent - Low permit growth vs high population growth";
      } else {
        supplyRisk = "🏗️ Construction Slowdown - Future supply constraints";
      }

      return [
        { label: "Permit Growth Rate", value: `${permitGrowth.toFixed(1)}% YoY (${(currentPermits - previousPermits).toLocaleString()} new permits)`, isCurrency: false },
        { label: "Permits per 1,000 Residents", value: permitsPer1000.toFixed(2), isCurrency: false },
        { label: "Market Development Status", value: devStatus, isCurrency: false },
        { label: "Supply Risk Assessment", value: supplyRisk, isCurrency: false },
      ];
    },
  },
};