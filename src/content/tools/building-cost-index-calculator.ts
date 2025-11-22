import { CalculatorContent } from '@/types';

export const BUILDING_COST_INDEX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Building Cost Index (Local)',
  description: 'Calculate local construction cost index to estimate building expenses and compare markets',
  icon: 'Icon',
  category: 'Construction & Development',
  slug: 'building-cost-index-calculator',
  article: {
    title: "Understanding Local Building Cost Index",
    content: `
    <h2>What is Building Cost Index?</h2>
    <p>The Building Cost Index (BCI) measures the cost of construction in a specific market relative to a national baseline (typically 100). It accounts for local labor costs, material prices, permitting fees, and market conditions.</p>
    
    <h3>Why Local Cost Index Matters</h3>
    <ul>
      <li><strong>Development Feasibility:</strong> Determine if new construction is profitable</li>
      <li><strong>Market Comparison:</strong> Compare construction costs across cities</li>
      <li><strong>Budget Accuracy:</strong> Adjust national cost estimates to local reality</li>
      <li><strong>Renovation Decisions:</strong> Decide between new build vs renovation</li>
      <li><strong>Insurance Valuations:</strong> Proper replacement cost estimates</li>
    </ul>
    
    <h3>What Drives Local Construction Costs?</h3>
    <ul>
      <li><strong>Labor Costs:</strong> Union vs non-union, local wage rates (40-50% of total)</li>
      <li><strong>Material Costs:</strong> Transportation, local availability (30-40%)</li>
      <li><strong>Land Costs:</strong> Expensive land = more expensive overall project</li>
      <li><strong>Regulations:</strong> Strict codes increase costs by 10-30%</li>
      <li><strong>Climate:</strong> Extreme weather requires special materials/design</li>
      <li><strong>Market Competition:</strong> Contractor availability and pricing</li>
    </ul>
    
    <h3>Interpreting Building Cost Index</h3>
    <ul>
      <li><strong>Index = 100:</strong> National average cost</li>
      <li><strong>Index = 120:</strong> 20% more expensive than national average</li>
      <li><strong>Index = 85:</strong> 15% cheaper than national average</li>
    </ul>
    
    <h3>Highest Cost Markets (Index 130-150+)</h3>
    <ul>
      <li>New York City (145-155)</li>
      <li>San Francisco (140-150)</li>
      <li>Honolulu (135-145)</li>
      <li>Boston (130-140)</li>
      <li>Los Angeles (125-135)</li>
    </ul>
    
    <h3>Lowest Cost Markets (Index 75-90)</h3>
    <ul>
      <li>Rural Midwest and South</li>
      <li>Oklahoma City</li>
      <li>Memphis</li>
      <li>Little Rock</li>
    </ul>
    
    <h3>Using BCI for Investment Decisions</h3>
    <ol>
      <li><strong>Calculate Total Project Cost:</strong> National estimate × (Local Index / 100)</li>
      <li><strong>Compare to Market Values:</strong> If build cost > 70% of sale price, avoid new construction</li>
      <li><strong>Identify Value-Add Plays:</strong> Low-cost markets may favor new builds</li>
      <li><strong>Renovation vs New Build:</strong> High BCI favors renovation; low BCI favors new build</li>
    </ol>
    
    <h3>Data Sources</h3>
    <p>Get BCI data from RSMeans (now Gordian), Engineering News-Record, local builder associations, and construction cost estimating firms.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "cityName",
        label: "City/Market Name",
        type: "text",
        placeholder: "e.g., Denver, CO",
        defaultValue: "",
      },
      {
        name: "avgLaborCostPerHour",
        label: "Average Labor Cost ($/hour)",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "nationalAvgLabor",
        label: "National Average Labor ($/hour)",
        type: "number",
        placeholder: "40",
        defaultValue: "40",
      },
      {
        name: "materialIndexLocal",
        label: "Local Material Price Index",
        type: "number",
        placeholder: "108",
        defaultValue: "108",
      },
      {
        name: "permitCostPctOfBuild",
        label: "Permit Costs (% of build)",
        type: "number",
        placeholder: "3.5",
        defaultValue: "3.5",
      },
    ],
    results: [
      { label: "Local Building Cost Index", isCurrency: false },
      { label: "Cost Comparison to National Avg", isCurrency: false },
      { label: "Market Type", isCurrency: false },
      { label: "Development Strategy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const avgLaborCost = Number(data.avgLaborCostPerHour) || 40;
      const nationalAvgLabor = Number(data.nationalAvgLabor) || 40;
      const materialIndexLocal = Number(data.materialIndexLocal) || 100;
      const permitCostPct = Number(data.permitCostPctOfBuild) || 2;
      
      // Calculate labor component (50% weight)
      const laborIndex = nationalAvgLabor > 0 ? (avgLaborCost / nationalAvgLabor) * 100 : 100;
      
      // Material component (40% weight) - already an index
      const materialComponent = materialIndexLocal;
      
      // Permit/regulatory component (10% weight)
      const permitIndex = (permitCostPct / 2) * 100; // Normalize around 2% baseline
      
      // Weighted Building Cost Index
      const buildingCostIndex = (laborIndex * 0.50) + (materialComponent * 0.40) + (permitIndex * 0.10);
      
      // Cost comparison
      const costDiff = buildingCostIndex - 100;
      let comparison = "";
      if (costDiff > 0) {
        comparison = `${costDiff.toFixed(1)}% MORE expensive than national average`;
      } else if (costDiff < 0) {
        comparison = `${Math.abs(costDiff).toFixed(1)}% CHEAPER than national average`;
      } else {
        comparison = "Equal to national average";
      }
      
      // Market type
      let marketType = "";
      if (buildingCostIndex >= 140) marketType = "💰💰💰 Extremely High-Cost Market";
      else if (buildingCostIndex >= 120) marketType = "💰💰 High-Cost Market";
      else if (buildingCostIndex >= 105) marketType = "💰 Above Average Cost";
      else if (buildingCostIndex >= 95) marketType = "⚖️ Average Cost Market";
      else if (buildingCostIndex >= 85) marketType = "💵 Below Average Cost";
      else marketType = "💵💵 Low-Cost Market";
      
      // Strategy
      let strategy = "";
      if (buildingCostIndex >= 130) {
        strategy = "🏗️ Avoid new construction; Focus on renovation & redevelopment";
      } else if (buildingCostIndex >= 110) {
        strategy = "⚠️ New builds challenging; Consider adaptive reuse";
      } else if (buildingCostIndex >= 95) {
        strategy = "✅ New construction viable with good margins";
      } else {
        strategy = "🚀 Excellent for new development & ground-up construction";
      }

      return [
        { label: "Local Building Cost Index", value: buildingCostIndex.toFixed(1), isCurrency: false },
        { label: "Cost Comparison to National Avg", value: comparison, isCurrency: false },
        { label: "Market Type", value: marketType, isCurrency: false },
        { label: "Development Strategy", value: strategy, isCurrency: false },
      ];
    },
  },
};