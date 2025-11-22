import { CalculatorContent } from '@/types';

export const DAYS_ON_MARKET_DOM_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Days on Market (DOM) Analyzer',
  description: 'Analyze property days on market trends and pricing strategy by ZIP code',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'days-on-market-dom-analyzer',
  metaTitle: 'Days on Market (DOM) Analyzer - Real Estate Market Analysis Tool',
  metaDescription: 'Analyze days on market (DOM) trends, compare to market average, and optimize pricing strategy. Calculate market strength and listing competitiveness by ZIP code.',
  metaKeywords: 'days on market, DOM calculator, real estate market analysis, pricing strategy, market time, listing analysis',
  article: {
    title: "Understanding Days on Market (DOM)",
    content: `
    <h2>Understanding Days on Market (DOM)</h2>
    <p>Days on Market (DOM) is a critical real estate metric that measures how long a property has been actively listed for sale. DOM provides valuable insights into market conditions, pricing accuracy, and property appeal.</p>
    
    <h3>What is Days on Market (DOM)?</h3>
    <p>DOM represents the number of calendar days between when a property is first listed on the MLS and when it goes under contract or sells. Different MLSs may calculate DOM differently.</p>
    
    <p><strong>DOM Calculation Variations:</strong></p>
    <ul>
      <li><strong>Cumulative DOM (CDOM):</strong> Includes all time on market, even if delisted and relisted</li>
      <li><strong>DOM:</strong> Days since current listing period began (resets if withdrawn and relisted)</li>
      <li><strong>Active DOM:</strong> Only days property was actively available (excludes pending periods)</li>
    </ul>
    
    <h3>DOM as Market Indicator</h3>
    <p><strong>Market Conditions by Average DOM:</strong></p>
    <ul>
      <li><strong>Seller's Market:</strong> 0-30 days average DOM
        <ul>
          <li>High demand, low inventory</li>
          <li>Multiple offers common</li>
          <li>Properties sell at or above asking price</li>
          <li>Sellers have negotiating power</li>
        </ul>
      </li>
      <li><strong>Balanced Market:</strong> 30-60 days average DOM
        <ul>
          <li>Supply and demand in equilibrium</li>
          <li>Fair negotiations between parties</li>
          <li>Properties sell near asking price</li>
          <li>Normal market conditions</li>
        </ul>
      </li>
      <li><strong>Buyer's Market:</strong> 60+ days average DOM
        <ul>
          <li>Low demand, high inventory</li>
          <li>Buyers have negotiating power</li>
          <li>Price reductions common</li>
          <li>Longer negotiation periods</li>
        </ul>
      </li>
    </ul>
    
    <h3>DOM and Pricing Strategy</h3>
    <p><strong>Price vs. DOM Relationship:</strong></p>
    <ul>
      <li><strong>Overpriced Properties:</strong> Tend to have significantly higher DOM</li>
      <li><strong>Market-Priced Properties:</strong> Sell within average DOM for area</li>
      <li><strong>Underpriced Properties:</strong> Sell quickly, often below average DOM</li>
    </ul>
    
    <p><strong>DOM Thresholds and Actions:</strong></p>
    <ul>
      <li><strong>0-14 days:</strong> Strong interest, pricing likely optimal or low</li>
      <li><strong>15-30 days:</strong> Normal market time, continue current strategy</li>
      <li><strong>31-60 days:</strong> Consider small price adjustment (3-5%)</li>
      <li><strong>61-90 days:</strong> Significant price adjustment needed (5-10%)</li>
      <li><strong>90+ days:</strong> Major repricing or strategy overhaul (10%+)</li>
    </ul>
    
    <h3>Factors Affecting DOM</h3>
    <p><strong>Property-Specific Factors:</strong></p>
    <ul>
      <li>Condition and appeal</li>
      <li>Price relative to market value</li>
      <li>Location and neighborhood desirability</li>
      <li>Unique features or limitations</li>
      <li>Property type (single-family, condo, etc.)</li>
      <li>Size and layout</li>
      <li>Marketing quality and exposure</li>
    </ul>
    
    <p><strong>Market-Wide Factors:</strong></p>
    <ul>
      <li>Local inventory levels</li>
      <li>Interest rates</li>
      <li>Seasonal trends</li>
      <li>Economic conditions</li>
      <li>Local employment and population growth</li>
      <li>School quality and boundaries</li>
    </ul>
    
    <h3>Seasonal DOM Patterns</h3>
    <p><strong>Spring (March-May):</strong></p>
    <ul>
      <li>Lowest average DOM of year</li>
      <li>Highest buyer activity</li>
      <li>Families want to move before school year</li>
      <li>Best time to list in most markets</li>
    </ul>
    
    <p><strong>Summer (June-August):</strong></p>
    <ul>
      <li>Moderately low DOM</li>
      <li>High inventory can increase competition</li>
      <li>Vacation schedules may slow transactions</li>
    </ul>
    
    <p><strong>Fall (September-November):</strong></p>
    <ul>
      <li>Rising DOM</li>
      <li>Serious buyers still active</li>
      <li>Less competition from other listings</li>
    </ul>
    
    <p><strong>Winter (December-February):</strong></p>
    <ul>
      <li>Highest DOM of year</li>
      <li>Lowest buyer activity</li>
      <li>Motivated buyers and sellers</li>
      <li>Less competition, but longer market time</li>
    </ul>
    
    <h3>DOM and Buyer Perception</h3>
    <p><strong>Low DOM (0-30 days):</strong></p>
    <ul>
      <li>✅ Property perceived as desirable</li>
      <li>✅ Creates urgency among buyers</li>
      <li>✅ Signals competitive market</li>
      <li>✅ Often results in multiple offers</li>
    </ul>
    
    <p><strong>High DOM (60+ days):</strong></p>
    <ul>
      <li>⚠️ Buyers wonder "what's wrong with it?"</li>
      <li>⚠️ Assumption of overpricing</li>
      <li>⚠️ Signals weak negotiating position</li>
      <li>⚠️ Invites lowball offers</li>
      <li>⚠️ May indicate property defects or issues</li>
    </ul>
    
    <h3>Strategies to Reduce DOM</h3>
    <p><strong>Pre-Listing:</strong></p>
    <ul>
      <li>Professional staging</li>
      <li>Deep cleaning and decluttering</li>
      <li>Needed repairs and updates</li>
      <li>Professional photography and videography</li>
      <li>Accurate pricing from the start</li>
    </ul>
    
    <p><strong>Marketing:</strong></p>
    <ul>
      <li>Maximize MLS exposure</li>
      <li>Social media marketing</li>
      <li>Open houses and showings</li>
      <li>Virtual tours and 3D walkthroughs</li>
      <li>Targeted digital advertising</li>
    </ul>
    
    <p><strong>During Listing:</strong></p>
    <ul>
      <li>Monitor showing feedback closely</li>
      <li>Respond quickly to showing requests</li>
      <li>Make property easy to show</li>
      <li>Adjust price if needed (don't wait too long)</li>
      <li>Consider seller concessions</li>
    </ul>
    
    <h3>DOM Benchmarking</h3>
    <p><strong>Compare Your DOM To:</strong></p>
    <ul>
      <li>ZIP code average DOM</li>
      <li>Similar properties (comp DOM)</li>
      <li>Same neighborhood DOM</li>
      <li>Price range DOM</li>
      <li>Property type DOM</li>
    </ul>
    
    <h3>Price Adjustment Guidelines Based on DOM</h3>
    <p><strong>DOM 30-45 Days Above Average:</strong></p>
    <ul>
      <li>First reduction: 3-5% price drop</li>
      <li>Increase marketing efforts</li>
      <li>Review showing feedback</li>
      <li>Consider minor updates</li>
    </ul>
    
    <p><strong>DOM 60+ Days Above Average:</strong></p>
    <ul>
      <li>Significant reduction: 7-10% price drop</li>
      <li>Complete marketing refresh</li>
      <li>New photos/staging</li>
      <li>Consider new listing to reset DOM</li>
    </ul>
    
    <h3>DOM Reset Strategies</h3>
    <p><strong>Delisting and Relisting:</strong></p>
    <ul>
      <li>Some sellers withdraw listing for 30+ days then relist</li>
      <li>Resets DOM in some MLSs (but not CDOM)</li>
      <li>Controversial practice - check MLS rules</li>
      <li>Can be viewed as deceptive by some buyers</li>
    </ul>
    
    <p><strong>Price Improvements:</strong></p>
    <ul>
      <li>Significant price drops can generate new interest</li>
      <li>May trigger new MLS notifications to buyers</li>
      <li>Shows seller motivation</li>
      <li>Can reset buyer perception</li>
    </ul>
    
    <h3>Using DOM Data for Buyers</h3>
    <ul>
      <li>High DOM suggests room for negotiation</li>
      <li>Low DOM indicates need to move quickly</li>
      <li>Track DOM trends in target areas</li>
      <li>Use DOM to identify motivated sellers</li>
      <li>Compare DOM to price changes</li>
    </ul>
    
    <h3>Using DOM Data for Sellers</h3>
    <ul>
      <li>Set realistic pricing expectations</li>
      <li>Time listing strategically</li>
      <li>Monitor competitive landscape</li>
      <li>Make proactive adjustments</li>
      <li>Understand buyer psychology around DOM</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentDOM",
        label: "Current Days on Market",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "zipCodeAverageDOM",
        label: "ZIP Code Average DOM",
        type: "number",
        placeholder: "32",
        defaultValue: "32",
      },
      {
        name: "listPrice",
        label: "Current List Price",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "estimatedValue",
        label: "Estimated Market Value",
        type: "number",
        placeholder: "425000",
        defaultValue: "425000",
      },
      {
        name: "numberOfShowings",
        label: "Number of Showings",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
    ],
    results: [
      { label: "DOM vs. Market Average", isCurrency: false },
      { label: "Market Condition", isCurrency: false },
      { label: "Pricing Analysis", isCurrency: false },
      { label: "Showing Activity", isCurrency: false },
      { label: "Recommended Price Adjustment", isCurrency: true },
      { label: "Recommended Actions", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentDOM = Number(data.currentDOM) || 0;
      const zipCodeAverageDOM = Number(data.zipCodeAverageDOM) || 30;
      const listPrice = Number(data.listPrice) || 0;
      const estimatedValue = Number(data.estimatedValue) || 0;
      const numberOfShowings = Number(data.numberOfShowings) || 0;
      
      // DOM comparison
      const domDifference = currentDOM - zipCodeAverageDOM;
      const domPercentage = zipCodeAverageDOM > 0 ? (domDifference / zipCodeAverageDOM) * 100 : 0;
      const domComparison = domDifference > 0 ? 
        `${domDifference} days ABOVE average (${domPercentage.toFixed(0)}% higher)` : 
        domDifference < 0 ? 
        `${Math.abs(domDifference)} days BELOW average (performing well)` : 
        "At market average";
      
      // Market condition
      let marketCondition = "";
      if (zipCodeAverageDOM <= 30) {
        marketCondition = "🔥 Seller's Market - Fast moving";
      } else if (zipCodeAverageDOM <= 60) {
        marketCondition = "⚖️ Balanced Market - Normal pace";
      } else {
        marketCondition = "🐌 Buyer's Market - Slow moving";
      }
      
      // Pricing analysis
      const priceDifference = listPrice - estimatedValue;
      const priceDifferencePercent = estimatedValue > 0 ? (priceDifference / estimatedValue) * 100 : 0;
      let pricingAnalysis = "";
      if (priceDifferencePercent > 10) {
        pricingAnalysis = `⚠️ Overpriced by ${priceDifferencePercent.toFixed(1)}% - Major issue`;
      } else if (priceDifferencePercent > 5) {
        pricingAnalysis = `⚠️ Overpriced by ${priceDifferencePercent.toFixed(1)}% - Price adjustment needed`;
      } else if (priceDifferencePercent > 0) {
        pricingAnalysis = `📊 Slightly above market by ${priceDifferencePercent.toFixed(1)}%`;
      } else if (priceDifferencePercent > -5) {
        pricingAnalysis = `✅ Priced at market value - Good pricing`;
      } else {
        pricingAnalysis = `💰 Below market by ${Math.abs(priceDifferencePercent).toFixed(1)}% - Should sell quickly`;
      }
      
      // Showing activity
      const showingsPerWeek = currentDOM > 0 ? (numberOfShowings / currentDOM) * 7 : 0;
      let showingActivity = "";
      if (showingsPerWeek >= 3) {
        showingActivity = `✅ Strong: ${showingsPerWeek.toFixed(1)} showings/week - Price likely good`;
      } else if (showingsPerWeek >= 1) {
        showingActivity = `📊 Moderate: ${showingsPerWeek.toFixed(1)} showings/week - Monitor closely`;
      } else {
        showingActivity = `⚠️ Weak: ${showingsPerWeek.toFixed(1)} showings/week - Marketing or price issue`;
      }
      
      // Recommended price adjustment
      let priceAdjustment = 0;
      if (currentDOM >= zipCodeAverageDOM + 60) {
        priceAdjustment = listPrice * -0.10; // 10% reduction
      } else if (currentDOM >= zipCodeAverageDOM + 30) {
        priceAdjustment = listPrice * -0.05; // 5% reduction
      } else if (currentDOM >= zipCodeAverageDOM + 14) {
        priceAdjustment = listPrice * -0.03; // 3% reduction
      }
      
      // Recommended actions
      let actions = "";
      if (currentDOM < zipCodeAverageDOM) {
        actions = "✅ Continue current strategy - Property performing well";
      } else if (currentDOM < zipCodeAverageDOM + 14) {
        actions = "📊 Monitor closely - Consider refreshing marketing";
      } else if (currentDOM < zipCodeAverageDOM + 30) {
        actions = "⚠️ Price adjustment 3-5% + improve staging/photos";
      } else if (currentDOM < zipCodeAverageDOM + 60) {
        actions = "🚨 Major price drop 5-10% + relist with new photos";
      } else {
        actions = "🆘 Major strategy overhaul needed - 10%+ price drop or withdraw";
      }

      return [
        { 
          label: "DOM vs. Market Average", 
          value: domComparison, 
          isCurrency: false 
        },
        { 
          label: "Market Condition", 
          value: marketCondition, 
          isCurrency: false 
        },
        { 
          label: "Pricing Analysis", 
          value: pricingAnalysis, 
          isCurrency: false 
        },
        { 
          label: "Showing Activity", 
          value: showingActivity, 
          isCurrency: false 
        },
        { 
          label: "Recommended Price Adjustment", 
          value: priceAdjustment.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Recommended Actions", 
          value: actions, 
          isCurrency: false 
        },
      ];
    },
  },
};
