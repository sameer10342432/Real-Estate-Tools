import { CalculatorContent } from '@/types';

export const SALE_TO_LIST_PRICE_RATIO_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sale-to-List Price Ratio Calculator',
  description: 'Calculate the sale-to-list price ratio to analyze market strength and pricing accuracy',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'sale-to-list-price-ratio-calculator',
  metaTitle: 'Sale-to-List Price Ratio Calculator - Market Strength Analyzer',
  metaDescription: 'Calculate sale-to-list price ratio for real estate. Analyze market conditions, pricing accuracy, and negotiation power. Compare to benchmarks for market insights.',
  metaKeywords: 'sale to list ratio, pricing ratio, market analysis, real estate metrics, sale price vs list price, market strength',
  article: {
    title: "Understanding Sale-to-List Price Ratio",
    content: `
    <h2>Understanding Sale-to-List Price Ratio</h2>
    <p>The sale-to-list price ratio is a key metric that compares the final sale price to the original list price. This ratio provides valuable insights into market conditions, pricing accuracy, and negotiation dynamics.</p>
    
    <h3>What is Sale-to-List Price Ratio?</h3>
    <p>Formula: <strong>Sale-to-List Ratio = (Sale Price ÷ List Price) × 100</strong></p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>List Price: $400,000</li>
      <li>Sale Price: $410,000</li>
      <li>Ratio: ($410,000 ÷ $400,000) × 100 = 102.5%</li>
    </ul>
    
    <h3>Interpreting the Ratio</h3>
    <p><strong>100%+ (At or Above List):</strong></p>
    <ul>
      <li>✅ Strong seller's market</li>
      <li>✅ High demand, low inventory</li>
      <li>✅ Multiple offer situations common</li>
      <li>✅ Properties priced accurately or conservatively</li>
      <li>✅ Sellers have strong negotiating position</li>
    </ul>
    
    <p><strong>97-100% (Slight Discount):</strong></p>
    <ul>
      <li>📊 Balanced market conditions</li>
      <li>📊 Normal negotiations</li>
      <li>📊 Fair pricing</li>
      <li>📊 Typical buyer concessions</li>
    </ul>
    
    <p><strong>95-97% (Moderate Discount):</strong></p>
    <ul>
      <li>⚠️ Slight buyer's market</li>
      <li>⚠️ Room for negotiation</li>
      <li>⚠️ May indicate initial overpricing</li>
      <li>⚠️ More time needed to sell</li>
    </ul>
    
    <p><strong>Below 95% (Significant Discount):</strong></p>
    <ul>
      <li>🔴 Strong buyer's market</li>
      <li>🔴 High inventory, low demand</li>
      <li>🔴 Overpricing or property issues</li>
      <li>🔴 Motivated or distressed sellers</li>
      <li>🔴 Buyers have strong negotiating position</li>
    </ul>
    
    <h3>Market Analysis Using Ratio</h3>
    <p><strong>Aggregate Market Ratio:</strong></p>
    <p>Looking at the average ratio across all sales in an area provides market condition insights:</p>
    <ul>
      <li><strong>Hot Market:</strong> Average ratio 100-105%</li>
      <li><strong>Normal Market:</strong> Average ratio 97-100%</li>
      <li><strong>Cool Market:</strong> Average ratio 93-97%</li>
      <li><strong>Distressed Market:</strong> Average ratio below 93%</li>
    </ul>
    
    <h3>Factors Affecting the Ratio</h3>
    <p><strong>Market-Level Factors:</strong></p>
    <ul>
      <li>Supply and demand balance</li>
      <li>Interest rates</li>
      <li>Economic conditions</li>
      <li>Seasonal timing</li>
      <li>Local job market</li>
      <li>Migration patterns</li>
    </ul>
    
    <p><strong>Property-Specific Factors:</strong></p>
    <ul>
      <li>Initial pricing strategy</li>
      <li>Property condition</li>
      <li>Days on market</li>
      <li>Number of price reductions</li>
      <li>Inspection findings</li>
      <li>Appraisal value</li>
      <li>Seller motivation</li>
    </ul>
    
    <h3>Using Ratio for Pricing Strategy</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li><strong>Market Above 100%:</strong> Can price aggressively or at market value and likely get asking price or above</li>
      <li><strong>Market 97-100%:</strong> Price at true market value, expect minor negotiations</li>
      <li><strong>Market Below 97%:</strong> Must price very accurately or below comps to attract buyers</li>
    </ul>
    
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li><strong>Market Above 100%:</strong> Prepare to offer at or above asking with minimal contingencies</li>
      <li><strong>Market 97-100%:</strong> Can negotiate but expect to pay close to asking</li>
      <li><strong>Market Below 97%:</strong> Strong negotiating position, can often get 5-10% below asking</li>
    </ul>
    
    <h3>Ratio Trends Over Time</h3>
    <p>Tracking ratio changes reveals market shifts:</p>
    <ul>
      <li><strong>Rising Ratio:</strong> Market heating up, seller's market emerging</li>
      <li><strong>Falling Ratio:</strong> Market cooling, buyer's market emerging</li>
      <li><strong>Stable Ratio:</strong> Market equilibrium</li>
    </ul>
    
    <h3>Neighborhood and Price Tier Variations</h3>
    <p>Ratios often vary by:</p>
    <ul>
      <li><strong>Luxury Properties ($1M+):</strong> Often lower ratios due to smaller buyer pool</li>
      <li><strong>Starter Homes:</strong> Often higher ratios due to high demand</li>
      <li><strong>Prime Locations:</strong> Higher ratios than secondary locations</li>
      <li><strong>School Districts:</strong> Top-rated schools typically see higher ratios</li>
    </ul>
    
    <h3>Multiple List Price Scenario</h3>
    <p>When properties have price reductions:</p>
    <ul>
      <li>Calculate from <strong>original list price</strong> for true pricing accuracy</li>
      <li>Calculate from <strong>final list price</strong> for negotiation analysis</li>
      <li>Both metrics provide different insights</li>
    </ul>
    
    <h3>Seasonal Patterns</h3>
    <p><strong>Spring (March-May):</strong></p>
    <ul>
      <li>Highest ratios of the year</li>
      <li>Peak buyer activity</li>
      <li>Multiple offers common</li>
      <li>Average ratio: 99-102%</li>
    </ul>
    
    <p><strong>Summer (June-August):</strong></p>
    <ul>
      <li>Strong ratios continue</li>
      <li>Slight moderation from spring</li>
      <li>Average ratio: 98-100%</li>
    </ul>
    
    <p><strong>Fall (September-November):</strong></p>
    <ul>
      <li>Declining ratios</li>
      <li>More negotiation room</li>
      <li>Average ratio: 96-99%</li>
    </ul>
    
    <p><strong>Winter (December-February):</strong></p>
    <ul>
      <li>Lowest ratios of the year</li>
      <li>Best time for buyer negotiations</li>
      <li>Average ratio: 95-98%</li>
    </ul>
    
    <h3>Red Flags in Sale-to-List Ratio</h3>
    <p><strong>Your Property vs. Market:</strong></p>
    <ul>
      <li>If your ratio is 5%+ below market average: Pricing or property issue</li>
      <li>If your ratio is significantly above market: Lucky timing or underpriced</li>
      <li>Consistent low ratios in area: Overall market weakness</li>
    </ul>
    
    <h3>Using Ratio with Other Metrics</h3>
    <p>Combine with:</p>
    <ul>
      <li><strong>Days on Market:</strong> Low ratio + high DOM = overpriced initially</li>
      <li><strong>Absorption Rate:</strong> Confirms market strength/weakness</li>
      <li><strong>Months of Supply:</strong> Explains ratio trends</li>
      <li><strong>List Price Changes:</strong> Shows pricing journey</li>
    </ul>
    
    <h3>Case Studies</h3>
    <p><strong>Example 1: Hot Market</strong></p>
    <ul>
      <li>List: $500,000 | Sale: $535,000 (107%)</li>
      <li>Strong demand, multiple offers, bidding war</li>
      <li>Seller accepted best offer above asking</li>
    </ul>
    
    <p><strong>Example 2: Overpriced Property</strong></p>
    <ul>
      <li>Original List: $600,000 | Final List: $550,000 | Sale: $525,000</li>
      <li>Ratio to original list: 87.5%</li>
      <li>Ratio to final list: 95.5%</li>
      <li>Property sat too long, multiple price drops needed</li>
    </ul>
    
    <p><strong>Example 3: Balanced Market</strong></p>
    <ul>
      <li>List: $400,000 | Sale: $392,000 (98%)</li>
      <li>Normal negotiations, inspection credits</li>
      <li>Typical market conditions</li>
    </ul>
    
    <h3>Ratio Benchmarks by Property Type</h3>
    <p><strong>Single-Family Homes:</strong></p>
    <ul>
      <li>Typical range: 97-100%</li>
      <li>Hot markets: 100-105%</li>
    </ul>
    
    <p><strong>Condos/Townhomes:</strong></p>
    <ul>
      <li>Typical range: 95-98%</li>
      <li>More price sensitivity</li>
    </ul>
    
    <p><strong>Luxury Homes ($1M+):</strong></p>
    <ul>
      <li>Typical range: 92-97%</li>
      <li>Longer negotiation periods</li>
    </ul>
    
    <p><strong>New Construction:</strong></p>
    <ul>
      <li>Typical range: 98-100%</li>
      <li>Less negotiation room</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "originalListPrice",
        label: "Original List Price",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "finalListPrice",
        label: "Final List Price (if reduced)",
        type: "number",
        placeholder: "435000",
        defaultValue: "435000",
      },
      {
        name: "salePrice",
        label: "Final Sale Price",
        type: "number",
        placeholder: "430000",
        defaultValue: "430000",
      },
      {
        name: "marketAverageRatio",
        label: "Market Average Ratio (%)",
        type: "number",
        placeholder: "98",
        defaultValue: "98",
      },
      {
        name: "daysOnMarket",
        label: "Days on Market",
        type: "number",
        placeholder: "35",
        defaultValue: "35",
      },
    ],
    results: [
      { label: "Sale-to-Original List Ratio", isCurrency: false },
      { label: "Sale-to-Final List Ratio", isCurrency: false },
      { label: "Comparison to Market Average", isCurrency: false },
      { label: "Total Price Reduction", isCurrency: true },
      { label: "Market Condition Analysis", isCurrency: false },
      { label: "Pricing Accuracy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const originalListPrice = Number(data.originalListPrice) || 0;
      const finalListPrice = Number(data.finalListPrice) || originalListPrice;
      const salePrice = Number(data.salePrice) || 0;
      const marketAverageRatio = Number(data.marketAverageRatio) || 98;
      const daysOnMarket = Number(data.daysOnMarket) || 0;
      
      // Calculate ratios
      const saleToOriginalRatio = originalListPrice > 0 ? (salePrice / originalListPrice) * 100 : 0;
      const saleToFinalRatio = finalListPrice > 0 ? (salePrice / finalListPrice) * 100 : 0;
      
      // Price reduction
      const totalReduction = originalListPrice - salePrice;
      const reductionPercent = originalListPrice > 0 ? (totalReduction / originalListPrice) * 100 : 0;
      
      // Comparison to market
      const ratioVsMarket = saleToOriginalRatio - marketAverageRatio;
      let marketComparison = "";
      if (ratioVsMarket > 2) {
        marketComparison = `✅ ${ratioVsMarket.toFixed(1)}% ABOVE market avg - Strong sale`;
      } else if (ratioVsMarket > 0) {
        marketComparison = `📊 ${ratioVsMarket.toFixed(1)}% above market avg`;
      } else if (ratioVsMarket > -2) {
        marketComparison = `📊 ${Math.abs(ratioVsMarket).toFixed(1)}% below market avg`;
      } else {
        marketComparison = `⚠️ ${Math.abs(ratioVsMarket).toFixed(1)}% BELOW market avg - Weak sale`;
      }
      
      // Market condition
      let marketCondition = "";
      if (saleToOriginalRatio >= 100) {
        marketCondition = "🔥 Strong Seller's Market - At or above list price";
      } else if (saleToOriginalRatio >= 98) {
        marketCondition = "📊 Balanced Market - Minor negotiations";
      } else if (saleToOriginalRatio >= 95) {
        marketCondition = "⚠️ Slight Buyer's Market - Moderate discounting";
      } else {
        marketCondition = "🔴 Strong Buyer's Market - Significant discounting";
      }
      
      // Pricing accuracy
      let pricingAccuracy = "";
      if (reductionPercent === 0 && saleToOriginalRatio >= 100) {
        pricingAccuracy = "🎯 Perfect Pricing - Sold at or above list";
      } else if (reductionPercent <= 3) {
        pricingAccuracy = "✅ Accurate Pricing - Minimal reduction needed";
      } else if (reductionPercent <= 7) {
        pricingAccuracy = "⚠️ Moderately Overpriced - Some reduction needed";
      } else {
        pricingAccuracy = "🔴 Significantly Overpriced - Major reduction needed";
      }
      
      // Add DOM context
      if (daysOnMarket > 90 && reductionPercent > 5) {
        pricingAccuracy += " (Extended DOM confirms overpricing)";
      } else if (daysOnMarket < 14 && saleToOriginalRatio >= 100) {
        pricingAccuracy += " (Quick sale confirms good pricing)";
      }

      return [
        { 
          label: "Sale-to-Original List Ratio", 
          value: `${saleToOriginalRatio.toFixed(2)}%`, 
          isCurrency: false 
        },
        { 
          label: "Sale-to-Final List Ratio", 
          value: `${saleToFinalRatio.toFixed(2)}%`, 
          isCurrency: false 
        },
        { 
          label: "Comparison to Market Average", 
          value: marketComparison, 
          isCurrency: false 
        },
        { 
          label: "Total Price Reduction", 
          value: `${totalReduction.toFixed(2)} (${reductionPercent.toFixed(1)}%)`, 
          isCurrency: true 
        },
        { 
          label: "Market Condition Analysis", 
          value: marketCondition, 
          isCurrency: false 
        },
        { 
          label: "Pricing Accuracy", 
          value: pricingAccuracy, 
          isCurrency: false 
        },
      ];
    },
  },
};
