import { CalculatorContent } from '@/types';

export const MONTHS_OF_SUPPLY_INVENTORY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Months of Supply (Inventory) Calculator',
  description: 'Calculate real estate inventory levels and months of supply to gauge market strength',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'months-of-supply-inventory-calculator',
  metaTitle: 'Months of Supply Calculator - Real Estate Inventory Analysis',
  metaDescription: 'Calculate months of supply for real estate inventory. Analyze market balance, predict price trends, and determine optimal buying or selling time based on inventory levels.',
  metaKeywords: 'months of supply, inventory calculator, real estate market, housing supply, market analysis, buyer seller market indicator',
  article: {
    title: "Understanding Months of Supply in Real Estate",
    content: `
    <h2>Understanding Months of Supply in Real Estate</h2>
    <p>Months of Supply (also called Months of Inventory) is one of the most important indicators of market health. It tells buyers, sellers, and investors whether they're in a buyer's market, seller's market, or balanced market.</p>
    
    <h3>What is Months of Supply?</h3>
    <p>Months of Supply represents how long it would take to sell all current inventory at the current sales pace, assuming no new listings come to market.</p>
    
    <p><strong>Formula:</strong> Months of Supply = Active Listings ÷ Monthly Sales Rate</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Current active listings: 300 homes</li>
      <li>Homes sold last month: 50</li>
      <li>Months of supply: 300 ÷ 50 = 6 months</li>
      <li>Interpretation: At current pace, all inventory would sell in 6 months</li>
    </ul>
    
    <h3>Market Classification</h3>
    <p><strong>Seller's Market (Low Inventory):</strong></p>
    <ul>
      <li><strong>0-3 Months:</strong> Very strong seller's market
        <ul>
          <li>Severe inventory shortage</li>
          <li>Properties sell very quickly</li>
          <li>Multiple offers common</li>
          <li>Prices rising rapidly</li>
          <li>Bidding wars expected</li>
        </ul>
      </li>
      <li><strong>3-5 Months:</strong> Seller's market
        <ul>
          <li>Low inventory</li>
          <li>Properties sell quickly</li>
          <li>Sellers have advantage</li>
          <li>Prices rising steadily</li>
          <li>Limited negotiation for buyers</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>Balanced Market:</strong></p>
    <ul>
      <li><strong>5-7 Months:</strong> Balanced market
        <ul>
          <li>Normal inventory levels</li>
          <li>Moderate sales pace</li>
          <li>Fair negotiations</li>
          <li>Stable prices</li>
          <li>Neither buyers nor sellers have strong advantage</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>Buyer's Market (High Inventory):</strong></p>
    <ul>
      <li><strong>7-9 Months:</strong> Slight buyer's market
        <ul>
          <li>Higher inventory</li>
          <li>Slower sales pace</li>
          <li>Buyers gain negotiating power</li>
          <li>Prices stable or slightly declining</li>
          <li>More options for buyers</li>
        </ul>
      </li>
      <li><strong>9+ Months:</strong> Strong buyer's market
        <ul>
          <li>Excess inventory</li>
          <li>Very slow sales</li>
          <li>Buyers have strong advantage</li>
          <li>Prices declining</li>
          <li>Motivated sellers common</li>
        </ul>
      </li>
    </ul>
    
    <h3>Why Months of Supply Matters</h3>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li><strong>Low Supply (0-5 months):</strong>
        <ul>
          <li>Must act quickly on listings</li>
          <li>Prepare for competition</li>
          <li>Make strong offers</li>
          <li>Waive contingencies if possible</li>
          <li>Expect to pay at or above asking</li>
        </ul>
      </li>
      <li><strong>High Supply (7+ months):</strong>
        <ul>
          <li>Can take time to find right property</li>
          <li>Strong negotiating position</li>
          <li>Can request repairs/credits</li>
          <li>Likely to get price reductions</li>
          <li>More inventory to choose from</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li><strong>Low Supply (0-5 months):</strong>
        <ul>
          <li>Can price aggressively</li>
          <li>Expect quick sale</li>
          <li>Multiple offers likely</li>
          <li>May sell above asking</li>
          <li>Strong negotiating position</li>
        </ul>
      </li>
      <li><strong>High Supply (7+ months):</strong>
        <ul>
          <li>Must price competitively</li>
          <li>Expect longer market time</li>
          <li>May need price reductions</li>
          <li>Should improve staging/marketing</li>
          <li>May offer seller concessions</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>For Investors:</strong></p>
    <ul>
      <li>Low supply = Appreciation opportunity but less inventory</li>
      <li>High supply = Better deals available, more negotiating power</li>
      <li>Track trends to time market entry/exit</li>
      <li>Different strategies for different inventory levels</li>
    </ul>
    
    <h3>Tracking Months of Supply Trends</h3>
    <p><strong>Declining Months of Supply (Supply Tightening):</strong></p>
    <ul>
      <li>Inventory being absorbed faster than new listings arrive</li>
      <li>Market shifting toward sellers</li>
      <li>Prices likely to rise</li>
      <li>Competition among buyers increasing</li>
      <li><strong>Strategy:</strong> Sellers should list soon; Buyers should act before market heats up more</li>
    </ul>
    
    <p><strong>Increasing Months of Supply (Supply Growing):</strong></p>
    <ul>
      <li>New listings outpacing sales</li>
      <li>Market shifting toward buyers</li>
      <li>Prices may soften</li>
      <li>Properties staying on market longer</li>
      <li><strong>Strategy:</strong> Buyers can wait for better deals; Sellers should act before conditions worsen</li>
    </ul>
    
    <p><strong>Stable Months of Supply:</strong></p>
    <ul>
      <li>Balanced market conditions</li>
      <li>Predictable pace of sales</li>
      <li>Stable pricing</li>
      <li><strong>Strategy:</strong> Normal buying and selling strategies apply</li>
    </ul>
    
    <h3>Regional and Segment Variations</h3>
    <p>Months of supply can vary significantly by:</p>
    
    <p><strong>Geography:</strong></p>
    <ul>
      <li>City-wide vs. neighborhood levels</li>
      <li>Urban vs. suburban vs. rural</li>
      <li>High-demand vs. emerging areas</li>
      <li>School districts (top-rated often have lower supply)</li>
    </ul>
    
    <p><strong>Price Segments:</strong></p>
    <ul>
      <li>Entry-level homes: Often lowest supply</li>
      <li>Mid-range homes: Typically moderate supply</li>
      <li>Luxury homes: Usually highest supply</li>
    </ul>
    
    <p><strong>Property Types:</strong></p>
    <ul>
      <li>Single-family homes</li>
      <li>Condos/townhomes</li>
      <li>Multi-family properties</li>
      <li>Land</li>
    </ul>
    
    <h3>Seasonal Patterns</h3>
    <p><strong>Spring (March-May):</strong></p>
    <ul>
      <li>Inventory increases as sellers list</li>
      <li>But demand increases even more</li>
      <li>Net effect: Usually declining months of supply</li>
      <li>Competitive market conditions</li>
    </ul>
    
    <p><strong>Summer (June-August):</strong></p>
    <ul>
      <li>Peak inventory levels</li>
      <li>High sales activity continues</li>
      <li>Relatively stable months of supply</li>
      <li>Healthy market conditions</li>
    </ul>
    
    <p><strong>Fall (September-November):</strong></p>
    <ul>
      <li>Inventory begins to decline</li>
      <li>Sales activity slows more than listings drop</li>
      <li>Months of supply may increase</li>
      <li>Market cooling off</li>
    </ul>
    
    <p><strong>Winter (December-February):</strong></p>
    <ul>
      <li>Lowest inventory of year</li>
      <li>Lowest sales activity</li>
      <li>Months of supply can be variable</li>
      <li>Serious buyers and sellers only</li>
    </ul>
    
    <h3>Historical Context</h3>
    <p><strong>2005-2007 Housing Bubble:</strong></p>
    <ul>
      <li>Months of supply: 3-4 months nationally</li>
      <li>Very strong seller's market</li>
      <li>Rapid price appreciation</li>
      <li>Unsustainable conditions</li>
    </ul>
    
    <p><strong>2008-2012 Housing Crash:</strong></p>
    <ul>
      <li>Months of supply peaked at 12+ months</li>
      <li>Extreme buyer's market</li>
      <li>Significant price declines</li>
      <li>High foreclosure inventory</li>
    </ul>
    
    <p><strong>2020-2022 COVID Boom:</strong></p>
    <ul>
      <li>Months of supply dropped to 1-2 months</li>
      <li>Historic seller's market</li>
      <li>Record price appreciation</li>
      <li>Multiple offer situations standard</li>
    </ul>
    
    <p><strong>2023-2024 Normalization:</strong></p>
    <ul>
      <li>Months of supply rising to 3-5 months</li>
      <li>Market rebalancing</li>
      <li>Price growth moderating</li>
      <li>More normal conditions returning</li>
    </ul>
    
    <h3>Using Months of Supply with Other Metrics</h3>
    <p><strong>Combined Analysis:</strong></p>
    <ul>
      <li><strong>+ Days on Market:</strong> Confirms market pace</li>
      <li><strong>+ Sale-to-List Ratio:</strong> Shows pricing power</li>
      <li><strong>+ Absorption Rate:</strong> Alternative way to express same concept</li>
      <li><strong>+ New Listings:</strong> Shows inventory pipeline</li>
      <li><strong>+ Pending Sales:</strong> Leading indicator of future supply</li>
    </ul>
    
    <h3>Limitations and Considerations</h3>
    <ul>
      <li><strong>Snapshot in Time:</strong> Can change quickly with market shifts</li>
      <li><strong>Doesn't Account for Quality:</strong> All listings counted equally</li>
      <li><strong>Seasonal Adjustments:</strong> Compare year-over-year for accuracy</li>
      <li><strong>Local Variations:</strong> National data less useful than local</li>
      <li><strong>New Construction:</strong> May not be fully captured in MLS data</li>
      <li><strong>Shadow Inventory:</strong> Potential listings not yet on market</li>
    </ul>
    
    <h3>Impact on Pricing</h3>
    <p><strong>Price Appreciation by Supply Level:</strong></p>
    <ul>
      <li><strong>0-3 months supply:</strong> 8-15% annual appreciation (hot market)</li>
      <li><strong>3-5 months supply:</strong> 4-8% annual appreciation (healthy growth)</li>
      <li><strong>5-7 months supply:</strong> 2-4% annual appreciation (stable)</li>
      <li><strong>7-9 months supply:</strong> 0-2% annual appreciation (flat)</li>
      <li><strong>9+ months supply:</strong> Negative appreciation possible (declining)</li>
    </ul>
    
    <h3>Forecasting Future Conditions</h3>
    <p>Track these leading indicators:</p>
    <ul>
      <li>New listings trend (increasing or decreasing?)</li>
      <li>Pending sales trend (future closed sales)</li>
      <li>Interest rate direction (affects demand)</li>
      <li>Economic indicators (employment, wages)</li>
      <li>New construction permits (future supply)</li>
      <li>Population migration (demand changes)</li>
    </ul>
    
    <h3>Where to Find Data</h3>
    <ul>
      <li>Local MLS reports (most accurate)</li>
      <li>Real estate association monthly reports</li>
      <li>National Association of Realtors (national data)</li>
      <li>Zillow, Redfin, Realtor.com market reports</li>
      <li>Local real estate agents</li>
      <li>Title companies market reports</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "activeListings",
        label: "Current Active Listings",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "salesLastMonth",
        label: "Homes Sold Last Month",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "newListingsLastMonth",
        label: "New Listings Last Month",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "pendingSales",
        label: "Current Pending Sales",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
    ],
    results: [
      { label: "Months of Supply", isCurrency: false },
      { label: "Market Classification", isCurrency: false },
      { label: "Adjusted Supply (After Pendings)", isCurrency: false },
      { label: "Inventory Trend", isCurrency: false },
      { label: "Price Outlook", isCurrency: false },
      { label: "Strategy Recommendations", isCurrency: false },
    ],
    calculate: (data: any) => {
      const activeListings = Number(data.activeListings) || 0;
      const salesLastMonth = Number(data.salesLastMonth) || 0;
      const newListingsLastMonth = Number(data.newListingsLastMonth) || 0;
      const pendingSales = Number(data.pendingSales) || 0;
      
      // Months of supply
      const monthsOfSupply = salesLastMonth > 0 ? activeListings / salesLastMonth : 0;
      
      // Market classification
      let marketClassification = "";
      if (monthsOfSupply < 3) {
        marketClassification = "🔥 Very Strong Seller's Market - Severe shortage";
      } else if (monthsOfSupply < 5) {
        marketClassification = "✅ Seller's Market - Low inventory favors sellers";
      } else if (monthsOfSupply <= 7) {
        marketClassification = "⚖️ Balanced Market - Fair conditions for all";
      } else if (monthsOfSupply <= 9) {
        marketClassification = "📊 Slight Buyer's Market - Some buyer advantage";
      } else {
        marketClassification = "🔴 Strong Buyer's Market - High inventory favors buyers";
      }
      
      // Adjusted supply after pending sales close
      const adjustedInventory = activeListings - pendingSales;
      const adjustedMonthsOfSupply = salesLastMonth > 0 ? adjustedInventory / salesLastMonth : 0;
      const adjustedSupplyText = `${adjustedMonthsOfSupply.toFixed(2)} months (${adjustedInventory} active after pendings)`;
      
      // Inventory trend
      const inventoryChange = newListingsLastMonth - salesLastMonth;
      const inventoryChangePercent = salesLastMonth > 0 ? (inventoryChange / salesLastMonth) * 100 : 0;
      let inventoryTrend = "";
      if (inventoryChange > salesLastMonth * 0.2) {
        inventoryTrend = `📈 Rapidly Growing: +${inventoryChange} homes (+${inventoryChangePercent.toFixed(1)}%)`;
      } else if (inventoryChange > 0) {
        inventoryTrend = `📈 Growing: +${inventoryChange} homes (+${inventoryChangePercent.toFixed(1)}%)`;
      } else if (inventoryChange < -salesLastMonth * 0.2) {
        inventoryTrend = `📉 Rapidly Shrinking: ${inventoryChange} homes (${inventoryChangePercent.toFixed(1)}%)`;
      } else if (inventoryChange < 0) {
        inventoryTrend = `📉 Shrinking: ${inventoryChange} homes (${inventoryChangePercent.toFixed(1)}%)`;
      } else {
        inventoryTrend = "➡️ Stable: New listings = Sales";
      }
      
      // Price outlook
      let priceOutlook = "";
      if (monthsOfSupply < 3 && inventoryChange < 0) {
        priceOutlook = "📈 Strong Appreciation Expected (8-15% annually)";
      } else if (monthsOfSupply < 5) {
        priceOutlook = "📈 Moderate Appreciation (4-8% annually)";
      } else if (monthsOfSupply <= 7) {
        priceOutlook = "📊 Stable Prices (2-4% annually)";
      } else if (monthsOfSupply <= 9) {
        priceOutlook = "📊 Flat to Slight Growth (0-2% annually)";
      } else {
        priceOutlook = "📉 Declining Prices Possible (negative growth risk)";
      }
      
      if (inventoryChange > salesLastMonth * 0.3) {
        priceOutlook += " - WARNING: Inventory surge may pressure prices down";
      } else if (inventoryChange < -salesLastMonth * 0.3) {
        priceOutlook += " - Inventory shortage should support higher prices";
      }
      
      // Strategy recommendations
      let recommendations = "";
      if (monthsOfSupply < 5) {
        recommendations = "🏡 SELLERS: Excellent time to list - price competitively and expect quick sale. BUYERS: Act fast, make strong offers, minimal contingencies.";
      } else if (monthsOfSupply <= 7) {
        recommendations = "⚖️ BALANCED: Normal market - Standard strategies apply. Fair negotiations expected.";
      } else {
        recommendations = "💰 BUYERS: Great opportunity - Take your time, negotiate hard, request concessions. SELLERS: Price aggressively, improve staging, consider incentives.";
      }
      
      // Add trend-based advice
      if (inventoryChange > salesLastMonth * 0.2) {
        recommendations += " ⚠️ Inventory rising fast - Market shifting toward buyers.";
      } else if (inventoryChange < -salesLastMonth * 0.2) {
        recommendations += " ⚠️ Inventory dropping fast - Market shifting toward sellers.";
      }

      return [
        { 
          label: "Months of Supply", 
          value: `${monthsOfSupply.toFixed(2)} months`, 
          isCurrency: false 
        },
        { 
          label: "Market Classification", 
          value: marketClassification, 
          isCurrency: false 
        },
        { 
          label: "Adjusted Supply (After Pendings)", 
          value: adjustedSupplyText, 
          isCurrency: false 
        },
        { 
          label: "Inventory Trend", 
          value: inventoryTrend, 
          isCurrency: false 
        },
        { 
          label: "Price Outlook", 
          value: priceOutlook, 
          isCurrency: false 
        },
        { 
          label: "Strategy Recommendations", 
          value: recommendations, 
          isCurrency: false 
        },
      ];
    },
  },
};
