import { CalculatorContent } from '@/types';

export const ABSORPTION_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Absorption Rate Calculator (Real Estate)',
  description: 'Calculate market absorption rate to determine how quickly properties are selling',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'absorption-rate-calculator',
  metaTitle: 'Absorption Rate Calculator - Real Estate Market Analysis Tool',
  metaDescription: 'Calculate real estate absorption rate to analyze market conditions. Determine how fast properties sell, identify seller\'s vs buyer\'s market, and forecast inventory levels.',
  metaKeywords: 'absorption rate, market analysis, real estate metrics, inventory turnover, market speed, buyer seller market',
  article: {
    title: "Understanding Real Estate Absorption Rate",
    content: `
    <h2>Understanding Real Estate Absorption Rate</h2>
    <p>The absorption rate is a fundamental real estate metric that measures the rate at which available properties are sold in a specific market during a given time period. It's essential for understanding market dynamics and making informed decisions.</p>
    
    <h3>What is Absorption Rate?</h3>
    <p><strong>Formula:</strong> Absorption Rate = Homes Sold ÷ Months in Period</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>120 homes sold in last 3 months</li>
      <li>Absorption Rate = 120 ÷ 3 = 40 homes per month</li>
    </ul>
    
    <h3>Market Classification by Absorption Rate</h3>
    <p>When combined with current inventory (months of supply):</p>
    
    <p><strong>Seller's Market:</strong></p>
    <ul>
      <li>Less than 5 months of supply</li>
      <li>High absorption rate relative to inventory</li>
      <li>Properties sell quickly</li>
      <li>Prices trending upward</li>
      <li>Multiple offers common</li>
      <li>Sellers have negotiating power</li>
    </ul>
    
    <p><strong>Balanced Market:</strong></p>
    <ul>
      <li>5-6 months of supply</li>
      <li>Moderate absorption rate</li>
      <li>Normal pace of sales</li>
      <li>Stable pricing</li>
      <li>Fair negotiations</li>
      <li>Neither party has strong advantage</li>
    </ul>
    
    <p><strong>Buyer's Market:</strong></p>
    <ul>
      <li>More than 6 months of supply</li>
      <li>Low absorption rate relative to inventory</li>
      <li>Properties take longer to sell</li>
      <li>Prices trending downward or flat</li>
      <li>Fewer competing buyers</li>
      <li>Buyers have negotiating power</li>
    </ul>
    
    <h3>How to Calculate Absorption Rate</h3>
    <p><strong>Step-by-Step Process:</strong></p>
    <ol>
      <li>Determine time period (typically 30, 60, or 90 days)</li>
      <li>Count total homes sold in that period</li>
      <li>Divide by number of months in period</li>
      <li>Result is homes absorbed per month</li>
    </ol>
    
    <p><strong>Using Absorption Rate with Current Inventory:</strong></p>
    <ol>
      <li>Calculate absorption rate (homes/month)</li>
      <li>Count current active listings</li>
      <li>Divide active listings by absorption rate</li>
      <li>Result is "months of supply" (time to sell all current inventory)</li>
    </ol>
    
    <h3>Months of Supply Calculation</h3>
    <p><strong>Formula:</strong> Months of Supply = Current Inventory ÷ Absorption Rate</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Current inventory: 200 homes</li>
      <li>Absorption rate: 40 homes/month</li>
      <li>Months of supply: 200 ÷ 40 = 5 months</li>
      <li>Interpretation: At current pace, all inventory would sell in 5 months</li>
    </ul>
    
    <h3>Factors Affecting Absorption Rate</h3>
    <p><strong>Economic Factors:</strong></p>
    <ul>
      <li>Interest rates (lower rates = higher absorption)</li>
      <li>Employment levels</li>
      <li>Wage growth</li>
      <li>Consumer confidence</li>
      <li>Stock market performance</li>
    </ul>
    
    <p><strong>Market Factors:</strong></p>
    <ul>
      <li>New construction activity</li>
      <li>Population growth or decline</li>
      <li>Migration patterns</li>
      <li>School quality changes</li>
      <li>Infrastructure development</li>
    </ul>
    
    <p><strong>Seasonal Factors:</strong></p>
    <ul>
      <li>Spring: Highest absorption rate</li>
      <li>Summer: High absorption continues</li>
      <li>Fall: Declining absorption</li>
      <li>Winter: Lowest absorption rate</li>
    </ul>
    
    <h3>Using Absorption Rate for Different Purposes</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li><strong>High Absorption:</strong> Can price aggressively, expect quick sale</li>
      <li><strong>Low Absorption:</strong> Must price competitively, prepare for longer market time</li>
      <li><strong>Timing:</strong> List when absorption is rising (spring/summer)</li>
      <li><strong>Expectations:</strong> Adjust timeline based on current absorption</li>
    </ul>
    
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li><strong>High Absorption:</strong> Must act quickly, prepare for competition</li>
      <li><strong>Low Absorption:</strong> Can take time, negotiate favorable terms</li>
      <li><strong>Strategy:</strong> Buy when absorption is low (winter/fall)</li>
      <li><strong>Offers:</strong> Adjust offer strategy based on absorption rate</li>
    </ul>
    
    <p><strong>For Investors:</strong></p>
    <ul>
      <li>High absorption = Appreciating market (good for buy-and-hold)</li>
      <li>Low absorption = Opportunity for deals (good for value investors)</li>
      <li>Rising absorption = Enter market before prices rise</li>
      <li>Falling absorption = Wait or focus on cash flow properties</li>
    </ul>
    
    <p><strong>For Real Estate Agents:</strong></p>
    <ul>
      <li>Set realistic client expectations</li>
      <li>Justify pricing recommendations</li>
      <li>Predict market trends</li>
      <li>Plan marketing timelines</li>
      <li>Forecast commission income</li>
    </ul>
    
    <h3>Absorption Rate by Property Type</h3>
    <p>Different property types often have different absorption rates:</p>
    <ul>
      <li><strong>Starter Homes ($200K-$400K):</strong> Typically highest absorption</li>
      <li><strong>Move-Up Homes ($400K-$800K):</strong> Moderate absorption</li>
      <li><strong>Luxury Homes ($1M+):</strong> Lowest absorption, smaller buyer pool</li>
      <li><strong>Condos:</strong> Varies by location and building</li>
      <li><strong>Townhomes:</strong> Similar to starter homes in hot markets</li>
    </ul>
    
    <h3>Geographic Segmentation</h3>
    <p>Calculate absorption rate for specific areas:</p>
    <ul>
      <li><strong>Entire City/Metro:</strong> Broad market overview</li>
      <li><strong>ZIP Code:</strong> More specific local conditions</li>
      <li><strong>Neighborhood:</strong> Most accurate for comparable properties</li>
      <li><strong>School District:</strong> Useful for family-focused markets</li>
      <li><strong>Price Range:</strong> Same area can have different rates by price</li>
    </ul>
    
    <h3>Time Period Selection</h3>
    <p><strong>30-Day Period:</strong></p>
    <ul>
      <li>Most current snapshot</li>
      <li>Can be volatile</li>
      <li>Best for fast-moving markets</li>
    </ul>
    
    <p><strong>90-Day Period:</strong></p>
    <ul>
      <li>Most commonly used</li>
      <li>Smooths out volatility</li>
      <li>Balances current vs. historical</li>
    </ul>
    
    <p><strong>12-Month Period:</strong></p>
    <ul>
      <li>Accounts for seasonal variations</li>
      <li>Best for long-term trends</li>
      <li>Less reactive to recent changes</li>
    </ul>
    
    <h3>Absorption Rate Trends</h3>
    <p><strong>Rising Absorption Rate:</strong></p>
    <ul>
      <li>Market strengthening</li>
      <li>Inventory being depleted faster</li>
      <li>Prices likely to rise</li>
      <li>Shifting toward seller's market</li>
      <li>Good time to list properties</li>
    </ul>
    
    <p><strong>Falling Absorption Rate:</strong></p>
    <ul>
      <li>Market cooling</li>
      <li>Inventory accumulating</li>
      <li>Prices may soften</li>
      <li>Shifting toward buyer's market</li>
      <li>Good time to buy properties</li>
    </ul>
    
    <p><strong>Stable Absorption Rate:</strong></p>
    <ul>
      <li>Market equilibrium</li>
      <li>Predictable conditions</li>
      <li>Prices stable</li>
      <li>Balanced negotiations</li>
    </ul>
    
    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li><strong>Using Too Small Sample:</strong> Need sufficient sales data for accuracy</li>
      <li><strong>Ignoring Seasonality:</strong> Compare same periods year-over-year</li>
      <li><strong>Wrong Geographic Area:</strong> Use relevant comparable area</li>
      <li><strong>Mixing Property Types:</strong> Calculate separately for different types</li>
      <li><strong>Outdated Data:</strong> Use most recent sales information</li>
      <li><strong>Ignoring Trends:</strong> One snapshot isn't enough - track over time</li>
    </ul>
    
    <h3>Advanced Applications</h3>
    <p><strong>New Construction Absorption:</strong></p>
    <ul>
      <li>Measures how quickly builder sells new homes</li>
      <li>Helps builders plan future phases</li>
      <li>Indicates overall market strength</li>
      <li>Different calculation may include unsold spec homes</li>
    </ul>
    
    <p><strong>Commercial Real Estate:</strong></p>
    <ul>
      <li>Measures office, retail, industrial space absorption</li>
      <li>Usually measured in square feet, not units</li>
      <li>Longer time periods (quarters or years)</li>
      <li>Critical for development decisions</li>
    </ul>
    
    <h3>Data Sources</h3>
    <p>Where to find absorption rate data:</p>
    <ul>
      <li>Local MLS reports (most accurate)</li>
      <li>Real estate association reports</li>
      <li>Title company market reports</li>
      <li>Online real estate platforms (Zillow, Redfin)</li>
      <li>Local real estate agents</li>
      <li>County recorder's office (public records)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homesSold",
        label: "Homes Sold in Period",
        type: "number",
        placeholder: "120",
        defaultValue: "120",
      },
      {
        name: "timePeriodMonths",
        label: "Time Period (Months)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "currentInventory",
        label: "Current Active Listings",
        type: "number",
        placeholder: "250",
        defaultValue: "250",
      },
      {
        name: "newListings",
        label: "New Listings in Period",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
    ],
    results: [
      { label: "Absorption Rate (homes/month)", isCurrency: false },
      { label: "Months of Supply", isCurrency: false },
      { label: "Market Condition", isCurrency: false },
      { label: "Inventory Turnover Rate", isCurrency: false },
      { label: "Net Inventory Change", isCurrency: false },
      { label: "Market Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homesSold = Number(data.homesSold) || 0;
      const timePeriodMonths = Number(data.timePeriodMonths) || 1;
      const currentInventory = Number(data.currentInventory) || 0;
      const newListings = Number(data.newListings) || 0;
      
      // Absorption rate
      const absorptionRate = timePeriodMonths > 0 ? homesSold / timePeriodMonths : 0;
      
      // Months of supply
      const monthsOfSupply = absorptionRate > 0 ? currentInventory / absorptionRate : 0;
      
      // Market condition
      let marketCondition = "";
      if (monthsOfSupply < 3) {
        marketCondition = "🔥 Very Strong Seller's Market - Extremely low inventory";
      } else if (monthsOfSupply < 5) {
        marketCondition = "✅ Seller's Market - Favorable for sellers";
      } else if (monthsOfSupply <= 6) {
        marketCondition = "⚖️ Balanced Market - Fair conditions for both parties";
      } else if (monthsOfSupply <= 9) {
        marketCondition = "📊 Slight Buyer's Market - Some negotiating power for buyers";
      } else {
        marketCondition = "🔴 Strong Buyer's Market - High inventory, buyer advantage";
      }
      
      // Inventory turnover rate (annual)
      const annualTurnover = absorptionRate > 0 ? (12 / monthsOfSupply) : 0;
      const turnoverDescription = `${annualTurnover.toFixed(2)} times per year (${(annualTurnover * 100 / 12).toFixed(1)}% monthly)`;
      
      // Net inventory change
      const netInventoryChange = newListings - homesSold;
      let inventoryTrend = "";
      if (netInventoryChange > 0) {
        inventoryTrend = `📈 Inventory GROWING by ${netInventoryChange} homes (${((netInventoryChange / homesSold) * 100).toFixed(1)}%)`;
      } else if (netInventoryChange < 0) {
        inventoryTrend = `📉 Inventory SHRINKING by ${Math.abs(netInventoryChange)} homes (${((Math.abs(netInventoryChange) / homesSold) * 100).toFixed(1)}%)`;
      } else {
        inventoryTrend = "➡️ Inventory STABLE - New listings = Sales";
      }
      
      // Market recommendation
      let recommendation = "";
      if (monthsOfSupply < 5 && netInventoryChange < 0) {
        recommendation = "🏡 SELLERS: Excellent time to list. BUYERS: Expect competition, move quickly.";
      } else if (monthsOfSupply > 7 && netInventoryChange > 0) {
        recommendation = "💰 BUYERS: Great opportunities, negotiate hard. SELLERS: Price competitively.";
      } else if (monthsOfSupply >= 5 && monthsOfSupply <= 6) {
        recommendation = "⚖️ Balanced market - Normal conditions for buying and selling.";
      } else if (netInventoryChange > homesSold * 0.2) {
        recommendation = "⚠️ Inventory rising fast - Market shifting toward buyers.";
      } else if (netInventoryChange < -homesSold * 0.2) {
        recommendation = "⚠️ Inventory dropping fast - Market shifting toward sellers.";
      } else {
        recommendation = "📊 Moderate conditions - Monitor trends closely.";
      }

      return [
        { 
          label: "Absorption Rate (homes/month)", 
          value: `${absorptionRate.toFixed(2)} homes per month`, 
          isCurrency: false 
        },
        { 
          label: "Months of Supply", 
          value: `${monthsOfSupply.toFixed(2)} months`, 
          isCurrency: false 
        },
        { 
          label: "Market Condition", 
          value: marketCondition, 
          isCurrency: false 
        },
        { 
          label: "Inventory Turnover Rate", 
          value: turnoverDescription, 
          isCurrency: false 
        },
        { 
          label: "Net Inventory Change", 
          value: inventoryTrend, 
          isCurrency: false 
        },
        { 
          label: "Market Recommendation", 
          value: recommendation, 
          isCurrency: false 
        },
      ];
    },
  },
};
