import { CalculatorContent } from '@/types';

export const COOLING_MARKETS_FINDER_CONTENT: CalculatorContent = {
  title: 'Cooling Markets (Price Drop) Finder',
  description: 'Identify cooling real estate markets with price drops and increasing inventory for potential opportunities',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'cooling-markets-finder',
  article: {
    title: "Understanding Cooling Real Estate Markets",
    content: `
    <h2>What is a Cooling Market?</h2>
    <p>A cooling market is characterized by declining prices, increasing days on market, growing inventory, and reduced buyer competition. While often viewed negatively, cooling markets can present unique opportunities for strategic buyers.</p>
    
    <h3>Signs of Market Cooling</h3>
    <ul>
      <li><strong>Price Reductions:</strong> Increasing percentage of listings with price cuts</li>
      <li><strong>Rising Inventory:</strong> More homes for sale than previous months</li>
      <li><strong>Longer DOM:</strong> Properties sitting on market 45+ days</li>
      <li><strong>Falling Sale-to-List:</strong> Homes selling below asking price</li>
      <li><strong>Declining YoY Prices:</strong> Negative year-over-year appreciation</li>
    </ul>
    
    <h3>Opportunities in Cooling Markets</h3>
    <ul>
      <li><strong>Buyer Leverage:</strong> Negotiate better prices and terms</li>
      <li><strong>Less Competition:</strong> Fewer bidding wars and better inspection periods</li>
      <li><strong>Long-term Value:</strong> Buy at discounts during temporary slowdowns</li>
      <li><strong>Distressed Properties:</strong> More motivated sellers and foreclosures</li>
      <li><strong>Rental Opportunities:</strong> Buy at lower prices, rent until recovery</li>
    </ul>
    
    <h3>When to Avoid Cooling Markets</h3>
    <p>Not all cooling is equal. Avoid markets with:</p>
    <ul>
      <li>Major employer closures or relocations</li>
      <li>Persistent negative job growth</li>
      <li>Population exodus (3+ years of decline)</li>
      <li>Structural issues (crime, failing schools, infrastructure decay)</li>
      <li>Overbuilding: New construction far exceeds demand</li>
    </ul>
    
    <h3>Investment Strategies</h3>
    <ol>
      <li><strong>Buy and Hold:</strong> Purchase during cooling, sell during recovery</li>
      <li><strong>Rental Focus:</strong> Cash flow while waiting for appreciation</li>
      <li><strong>Renovation Plays:</strong> Buy distressed, renovate, create value</li>
      <li><strong>Wholesale/Assignment:</strong> Flip contracts to other investors</li>
    </ol>
    
    <h3>Timing the Bottom</h3>
    <p>Look for stabilization indicators:</p>
    <ul>
      <li>Inventory plateaus (stops growing)</li>
      <li>Days on market stabilizes</li>
      <li>Price declines slow to <2% annually</li>
      <li>First-time buyer activity increases</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "marketName",
        label: "Market/City Name",
        type: "text",
        placeholder: "e.g., Phoenix, AZ",
        defaultValue: "",
      },
      {
        name: "currentMedianPrice",
        label: "Current Median Price ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "priceChange",
        label: "YoY Price Change (%)",
        type: "number",
        placeholder: "-5.5",
        defaultValue: "-5.5",
      },
      {
        name: "inventoryChange",
        label: "YoY Inventory Change (%)",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "daysOnMarket",
        label: "Average Days on Market",
        type: "number",
        placeholder: "65",
        defaultValue: "65",
      },
      {
        name: "priceReductionPct",
        label: "% of Listings with Price Cuts",
        type: "number",
        placeholder: "35",
        defaultValue: "35",
      },
    ],
    results: [
      { label: "Cooling Score (0-100)", isCurrency: false },
      { label: "Market Status", isCurrency: false },
      { label: "Buyer Advantage Level", isCurrency: false },
      { label: "Investment Strategy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const priceChange = Number(data.priceChange) || 0;
      const inventoryChange = Number(data.inventoryChange) || 0;
      const daysOnMarket = Number(data.daysOnMarket) || 30;
      const priceReductionPct = Number(data.priceReductionPct) || 0;
      
      // Calculate cooling score (0-100, higher = more cooling)
      let coolingScore = 0;
      
      // Price decline (30 points max)
      if (priceChange <= -10) coolingScore += 30;
      else if (priceChange <= -7) coolingScore += 25;
      else if (priceChange <= -5) coolingScore += 20;
      else if (priceChange <= -3) coolingScore += 15;
      else if (priceChange <= -1) coolingScore += 10;
      else if (priceChange < 2) coolingScore += 5;
      
      // Inventory surge (25 points max)
      if (inventoryChange >= 50) coolingScore += 25;
      else if (inventoryChange >= 40) coolingScore += 20;
      else if (inventoryChange >= 30) coolingScore += 15;
      else if (inventoryChange >= 20) coolingScore += 10;
      else if (inventoryChange >= 10) coolingScore += 5;
      
      // Days on market (25 points max)
      if (daysOnMarket >= 75) coolingScore += 25;
      else if (daysOnMarket >= 60) coolingScore += 20;
      else if (daysOnMarket >= 50) coolingScore += 15;
      else if (daysOnMarket >= 40) coolingScore += 10;
      else if (daysOnMarket >= 30) coolingScore += 5;
      
      // Price reductions (20 points max)
      if (priceReductionPct >= 50) coolingScore += 20;
      else if (priceReductionPct >= 40) coolingScore += 16;
      else if (priceReductionPct >= 30) coolingScore += 12;
      else if (priceReductionPct >= 20) coolingScore += 8;
      else if (priceReductionPct >= 10) coolingScore += 4;
      
      // Market status
      let status = "";
      if (coolingScore >= 80) status = "🧊 Deep Freeze (Severe Cooling)";
      else if (coolingScore >= 65) status = "❄️❄️ Very Cool (Strong Cooling)";
      else if (coolingScore >= 50) status = "❄️ Cooling Rapidly";
      else if (coolingScore >= 35) status = "🌡️ Slight Cooling";
      else if (coolingScore >= 20) status = "⚖️ Balanced Market";
      else status = "🔥 Still Hot/Stable";
      
      // Buyer advantage
      let buyerAdvantage = "";
      if (coolingScore >= 70) buyerAdvantage = "🎯 Maximum Negotiating Power";
      else if (coolingScore >= 55) buyerAdvantage = "💪 Strong Buyer Market";
      else if (coolingScore >= 40) buyerAdvantage = "👍 Moderate Buyer Advantage";
      else if (coolingScore >= 25) buyerAdvantage = "🤝 Slight Buyer Edge";
      else buyerAdvantage = "⚠️ Seller Still Has Leverage";
      
      // Strategy recommendation
      let strategy = "";
      if (coolingScore >= 75 && priceChange >= -8) {
        strategy = "🎯 Excellent Buy Opportunity - Negotiate Aggressively";
      } else if (coolingScore >= 60) {
        strategy = "✅ Good Entry Point - Buy & Hold Strategy";
      } else if (coolingScore >= 45) {
        strategy = "⚠️ Wait for Further Cooling - Monitor Market";
      } else if (coolingScore >= 30) {
        strategy = "🤔 Mixed Signals - Be Selective";
      } else {
        strategy = "❌ Not Cooling Enough - Look Elsewhere";
      }

      return [
        { label: "Cooling Score (0-100)", value: coolingScore.toFixed(0), isCurrency: false },
        { label: "Market Status", value: status, isCurrency: false },
        { label: "Buyer Advantage Level", value: buyerAdvantage, isCurrency: false },
        { label: "Investment Strategy", value: strategy, isCurrency: false },
      ];
    },
  },
};