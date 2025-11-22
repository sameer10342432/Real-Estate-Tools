import { CalculatorContent } from '@/types';

export const HOTTEST_ZIP_CODES_FINDER_CONTENT: CalculatorContent = {
  title: 'Hottest ZIP Codes (US) Finder',
  description: 'Identify the hottest ZIP codes with rapid price appreciation and high demand across the United States',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'hottest-zip-codes-finder',
  article: {
    title: "Finding the Hottest Real Estate ZIP Codes",
    content: `
    <h2>What Makes a ZIP Code "Hot"?</h2>
    <p>Hot ZIP codes combine rapid price appreciation, low days on market, high buyer competition, and strong neighborhood fundamentals. These areas often represent the best opportunities for appreciation and quick sales.</p>
    
    <h3>Key Indicators of Hot ZIP Codes</h3>
    <ul>
      <li><strong>Price Appreciation:</strong> YoY growth >10% indicates high demand</li>
      <li><strong>Days on Market:</strong> <30 days shows seller's market conditions</li>
      <li><strong>Sale-to-List Ratio:</strong> >100% means bidding wars</li>
      <li><strong>Inventory Levels:</strong> <2 months supply indicates scarcity</li>
      <li><strong>Price per Sq Ft Growth:</strong> Tracks actual value increases</li>
    </ul>
    
    <h3>How to Use This Finder</h3>
    <p>Enter local market data for any ZIP code to get a comprehensive "hotness" score:</p>
    <ol>
      <li>Gather current market statistics from MLS or Redfin</li>
      <li>Input year-over-year comparison data</li>
      <li>Review the hotness score and recommendations</li>
      <li>Compare multiple ZIP codes to find the best opportunities</li>
    </ol>
    
    <h3>Investment Strategies for Hot Markets</h3>
    <ul>
      <li><strong>Quick Flips:</strong> Strong demand enables fast resale</li>
      <li><strong>New Construction:</strong> Build where demand exceeds supply</li>
      <li><strong>Premium Rentals:</strong> High-end rentals perform well in hot markets</li>
      <li><strong>Buy Before Peak:</strong> Enter early in the appreciation cycle</li>
    </ul>
    
    <h3>Risks in Hot Markets</h3>
    <p>Be cautious of:</p>
    <ul>
      <li>Overheating: Unsustainable appreciation rates >20% annually</li>
      <li>Speculation bubbles: Prices detached from fundamentals</li>
      <li>Timing risk: Buying at peak before cooling</li>
      <li>Overpaying: Competition can drive prices above value</li>
    </ul>
    
    <h3>Data Sources</h3>
    <p>Get accurate ZIP code data from Zillow, Redfin, Realtor.com, local MLS systems, or county assessor records.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "zipCode",
        label: "ZIP Code",
        type: "text",
        placeholder: "e.g., 78701",
        defaultValue: "",
      },
      {
        name: "medianPrice",
        label: "Current Median Home Price ($)",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "priceYoY",
        label: "YoY Price Appreciation (%)",
        type: "number",
        placeholder: "12.5",
        defaultValue: "12.5",
      },
      {
        name: "daysOnMarket",
        label: "Average Days on Market",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "saleToListRatio",
        label: "Sale-to-List Price Ratio (%)",
        type: "number",
        placeholder: "102",
        defaultValue: "102",
      },
      {
        name: "monthsSupply",
        label: "Months of Inventory Supply",
        type: "number",
        placeholder: "1.5",
        defaultValue: "1.5",
      },
    ],
    results: [
      { label: "Hotness Score (0-100)", isCurrency: false },
      { label: "Market Temperature", isCurrency: false },
      { label: "Competition Level", isCurrency: false },
      { label: "Investment Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const priceYoY = Number(data.priceYoY) || 0;
      const daysOnMarket = Number(data.daysOnMarket) || 60;
      const saleToListRatio = Number(data.saleToListRatio) || 100;
      const monthsSupply = Number(data.monthsSupply) || 6;
      
      // Calculate hotness score (0-100)
      let score = 0;
      
      // Price appreciation (30 points max)
      if (priceYoY >= 15) score += 30;
      else if (priceYoY >= 10) score += 25;
      else if (priceYoY >= 7) score += 20;
      else if (priceYoY >= 5) score += 15;
      else if (priceYoY >= 3) score += 10;
      else if (priceYoY >= 0) score += 5;
      
      // Days on market (25 points max)
      if (daysOnMarket <= 15) score += 25;
      else if (daysOnMarket <= 25) score += 20;
      else if (daysOnMarket <= 35) score += 15;
      else if (daysOnMarket <= 45) score += 10;
      else if (daysOnMarket <= 60) score += 5;
      
      // Sale-to-list ratio (25 points max)
      if (saleToListRatio >= 105) score += 25;
      else if (saleToListRatio >= 102) score += 20;
      else if (saleToListRatio >= 100) score += 15;
      else if (saleToListRatio >= 98) score += 10;
      else if (saleToListRatio >= 95) score += 5;
      
      // Inventory supply (20 points max)
      if (monthsSupply <= 1) score += 20;
      else if (monthsSupply <= 2) score += 16;
      else if (monthsSupply <= 3) score += 12;
      else if (monthsSupply <= 4) score += 8;
      else if (monthsSupply <= 5) score += 4;
      
      // Determine temperature
      let temperature = "";
      if (score >= 85) temperature = "🔥🔥🔥 Scorching Hot";
      else if (score >= 70) temperature = "🔥🔥 Very Hot";
      else if (score >= 55) temperature = "🔥 Hot";
      else if (score >= 40) temperature = "🌡️ Warm";
      else if (score >= 25) temperature = "❄️ Cool";
      else temperature = "🧊 Cold";
      
      // Competition level
      let competition = "";
      if (saleToListRatio >= 105) competition = "🥊 Extreme Bidding Wars";
      else if (saleToListRatio >= 102) competition = "💪 Very Competitive";
      else if (saleToListRatio >= 100) competition = "👥 Competitive";
      else if (saleToListRatio >= 98) competition = "🤝 Moderate";
      else competition = "😌 Low Competition";
      
      // Investment recommendation
      let recommendation = "";
      if (score >= 80) recommendation = "🚀 Excellent for Quick Flip/Appreciation";
      else if (score >= 65) recommendation = "✅ Strong Buy Market";
      else if (score >= 50) recommendation = "👍 Good Opportunity";
      else if (score >= 35) recommendation = "⚠️ Moderate Potential";
      else recommendation = "❌ Look for Better Markets";

      return [
        { label: "Hotness Score (0-100)", value: score.toFixed(0), isCurrency: false },
        { label: "Market Temperature", value: temperature, isCurrency: false },
        { label: "Competition Level", value: competition, isCurrency: false },
        { label: "Investment Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};