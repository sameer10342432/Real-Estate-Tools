import { CalculatorContent } from '@/types';

export const BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Builder Upgrade ROI Calculator',
  description: 'Calculate the return on investment for new construction builder upgrades and determine which upgrades recoup costs at resale',
  icon: 'Icon',
  category: 'Insurance & Protection',
  slug: 'builder-upgrade-roi-calculator',
  article: {
    title: "Understanding Builder Upgrade ROI",
    content: `
    <h2>Understanding Builder Upgrade ROI</h2>
    <p>Builder upgrades during new construction can range from $5,000 to $100,000+ in additional costs. Understanding which upgrades provide the best return on investment helps you make smart decisions during the design phase.</p>
    
    <h3>What Are Builder Upgrades?</h3>
    <p>Builder upgrades are optional improvements beyond the standard base package:</p>
    <ul>
      <li><strong>Structural Changes:</strong> Extended garage, extra rooms, ceiling height increases</li>
      <li><strong>Finish Upgrades:</strong> Premium flooring, countertops, cabinets, fixtures</li>
      <li><strong>Appliance Upgrades:</strong> Premium brands, built-in features, smart appliances</li>
      <li><strong>Technology Upgrades:</strong> Smart home systems, security, automation</li>
      <li><strong>Energy Efficiency:</strong> Solar panels, upgraded insulation, high-efficiency HVAC</li>
      <li><strong>Outdoor Spaces:</strong> Extended patio, outdoor kitchen, upgraded landscaping</li>
    </ul>
    
    <h3>ROI by Upgrade Category</h3>
    
    <h4>High ROI Upgrades (80-100%+ Recovery)</h4>
    <ul>
      <li><strong>Kitchen Countertop Upgrade:</strong> Granite/quartz upgrade cost: $3,000-$8,000, ROI: 85-95%</li>
      <li><strong>Hardwood Flooring (Main Areas):</strong> Upgrade cost: $5,000-$12,000, ROI: 80-90%</li>
      <li><strong>Primary Bathroom Upgrade:</strong> Dual vanity, separate tub/shower cost: $8,000-$15,000, ROI: 75-85%</li>
      <li><strong>Additional Garage Bay:</strong> Cost: $12,000-$20,000, ROI: 80-100%</li>
      <li><strong>Energy-Efficient Windows:</strong> Cost: $3,000-$8,000, ROI: 70-85% (plus ongoing savings)</li>
    </ul>
    
    <h4>Moderate ROI Upgrades (50-75% Recovery)</h4>
    <ul>
      <li><strong>Upgraded Appliances:</strong> Stainless steel premium brands cost: $4,000-$8,000, ROI: 50-70%</li>
      <li><strong>Crown Molding & Trim Packages:</strong> Cost: $2,000-$6,000, ROI: 50-65%</li>
      <li><strong>Covered Patio Extension:</strong> Cost: $8,000-$15,000, ROI: 60-75%</li>
      <li><strong>Smart Home Pre-Wiring:</strong> Cost: $1,500-$4,000, ROI: 55-70%</li>
      <li><strong>Upgraded Lighting Packages:</strong> Cost: $2,000-$5,000, ROI: 50-65%</li>
    </ul>
    
    <h4>Low ROI Upgrades (25-50% Recovery)</h4>
    <ul>
      <li><strong>Built-In Entertainment Centers:</strong> Cost: $5,000-$12,000, ROI: 30-45%</li>
      <li><strong>High-End Light Fixtures:</strong> Designer fixtures cost: $3,000-$8,000, ROI: 25-40%</li>
      <li><strong>Luxury Tile Work:</strong> Decorative/mosaic tiles cost: $4,000-$10,000, ROI: 35-50%</li>
      <li><strong>Audio/Visual Pre-Wiring:</strong> Whole-home A/V cost: $3,000-$8,000, ROI: 30-45%</li>
      <li><strong>Custom Paint Colors:</strong> Beyond standard cost: $800-$2,500, ROI: 25-40%</li>
    </ul>
    
    <h4>Poor ROI Upgrades (0-25% Recovery)</h4>
    <ul>
      <li><strong>Builder Landscaping Packages:</strong> Cost: $8,000-$25,000, ROI: 15-30% (DIY saves 50-70%)</li>
      <li><strong>Home Theater Rooms:</strong> Dedicated theater cost: $15,000-$50,000, ROI: 20-35%</li>
      <li><strong>Wine Cellars:</strong> Cost: $10,000-$40,000, ROI: 15-25%</li>
      <li><strong>Luxury Wallpaper:</strong> Cost: $2,000-$6,000, ROI: 10-20% (trends change)</li>
      <li><strong>Decorative Tile Backsplash:</strong> Elaborate designs cost: $2,000-$6,000, ROI: 20-35%</li>
    </ul>
    
    <h3>Builder Markup Reality</h3>
    <p>Builders typically markup upgrades 30-100% over retail cost:</p>
    <ul>
      <li><strong>Flooring:</strong> 40-60% markup (can often save by arranging yourself)</li>
      <li><strong>Appliances:</strong> 30-50% markup (compare to retail prices)</li>
      <li><strong>Countertops:</strong> 50-80% markup (significant builder profit)</li>
      <li><strong>Structural Changes:</strong> 30-40% markup (harder to DIY, more reasonable)</li>
      <li><strong>Smart Home Tech:</strong> 60-100% markup (easy to add after closing)</li>
    </ul>
    
    <h3>Must-Do Upgrades (Do During Construction)</h3>
    <p>Some upgrades are difficult or impossible to add later:</p>
    <ul>
      <li><strong>Structural Changes:</strong> Extra rooms, extended garage, ceiling height (must do now)</li>
      <li><strong>In-Wall Wiring:</strong> Ethernet, speaker wire, conduit (cheap now, expensive later)</li>
      <li><strong>Plumbing Locations:</strong> Gas lines for outdoor kitchen, extra water lines (do now)</li>
      <li><strong>Foundation Prep:</strong> Basement rough-in bathroom, future finished space (must do now)</li>
      <li><strong>HVAC Zoning:</strong> Multi-zone system setup (cost-effective during construction)</li>
      <li><strong>Energy Efficiency:</strong> Insulation upgrades, radiant barriers (sealed in walls)</li>
    </ul>
    
    <h3>Wait-and-DIY Upgrades (Save 40-70%)</h3>
    <p>Upgrades better done after closing or DIY:</p>
    <ul>
      <li><strong>Landscaping:</strong> Save $5,000-$15,000 by hiring landscaper yourself</li>
      <li><strong>Window Treatments:</strong> Builder charges $3,000-$8,000, you pay $1,000-$3,000</li>
      <li><strong>Light Fixtures:</strong> Easy to swap after closing, buy at retail</li>
      <li><strong>Hardware:</strong> Cabinet pulls, door handles (simple DIY)</li>
      <li><strong>Backsplash:</strong> Can add for $500-$1,500 vs. builder's $2,000-$4,000</li>
      <li><strong>Smart Home Devices:</strong> Install yourself for fraction of builder cost</li>
    </ul>
    
    <h3>Negotiating Builder Upgrades</h3>
    <p><strong>Best Times to Negotiate:</strong></p>
    <ul>
      <li><strong>Market Slowdown:</strong> When builder has excess inventory</li>
      <li><strong>End of Quarter:</strong> Builders have sales quotas</li>
      <li><strong>Last Lot in Phase:</strong> Builder wants to finish and move on</li>
      <li><strong>Model Home Purchase:</strong> Upgrades already installed</li>
    </ul>
    
    <p><strong>Negotiation Strategies:</strong></p>
    <ul>
      <li><strong>Free Upgrade Packages:</strong> Ask for $5,000-$15,000 in free upgrades</li>
      <li><strong>Upgrade Credits:</strong> Negotiate allowance instead of price reduction</li>
      <li><strong>Bundling:</strong> "I'll take extended garage if you include granite counters"</li>
      <li><strong>Closing Cost Credits:</strong> Sometimes easier to get than upgrade discounts</li>
    </ul>
    
    <h3>Location-Based ROI Variations</h3>
    <p><strong>Luxury Markets ($600K+):</strong></p>
    <ul>
      <li>Premium finishes expected - granite/quartz standard</li>
      <li>High-end appliances recover 60-75% vs. 50% in average market</li>
      <li>Smart home features more valued</li>
    </ul>
    
    <p><strong>Mid-Range Markets ($300K-$600K):</strong></p>
    <ul>
      <li>Flooring and countertop upgrades provide best ROI</li>
      <li>Structural additions (garage, rooms) strong return</li>
      <li>Luxury finishes over-improve property</li>
    </ul>
    
    <p><strong>Entry-Level Markets (Under $300K):</strong></p>
    <ul>
      <li>Basic upgrades only - avoid over-improving</li>
      <li>Focus on energy efficiency for resale appeal</li>
      <li>Structural changes best ROI</li>
    </ul>
    
    <h3>Financing Upgrade Costs</h3>
    <p><strong>Roll Into Mortgage:</strong></p>
    <ul>
      <li>Advantage: Spread cost over 30 years, low interest rate</li>
      <li>Example: $20,000 upgrade = $95/month payment at 6.5%</li>
      <li>Total interest paid: $14,200 over life of loan</li>
    </ul>
    
    <p><strong>Pay Cash:</strong></p>
    <ul>
      <li>Advantage: No interest costs, immediate equity</li>
      <li>Disadvantage: Depletes reserves</li>
      <li>Best for: High ROI structural upgrades you'll enjoy long-term</li>
    </ul>
    
    <h3>Energy Efficiency Upgrade ROI</h3>
    <p>Calculate payback through energy savings:</p>
    
    <p><strong>Solar Panels:</strong></p>
    <ul>
      <li>Upgrade cost: $15,000-$30,000</li>
      <li>Annual savings: $1,200-$2,400</li>
      <li>Payback period: 12-18 years</li>
      <li>Resale ROI: 50-80% (but ongoing savings add value)</li>
    </ul>
    
    <p><strong>High-Efficiency HVAC:</strong></p>
    <ul>
      <li>Upgrade cost: $2,000-$5,000 over standard</li>
      <li>Annual savings: $200-$500</li>
      <li>Payback period: 5-15 years</li>
      <li>Resale ROI: 60-75%</li>
    </ul>
    
    <p><strong>Spray Foam Insulation:</strong></p>
    <ul>
      <li>Upgrade cost: $5,000-$12,000 over standard</li>
      <li>Annual savings: $300-$700</li>
      <li>Payback period: 10-20 years</li>
      <li>Resale ROI: 55-70%</li>
    </ul>
    
    <h3>Builder Upgrade Decisions Framework</h3>
    <p><strong>Priority 1 - Must Do Now:</strong></p>
    <ul>
      <li>Structural changes (rooms, garage, ceiling height)</li>
      <li>Foundation prep (future basement finish)</li>
      <li>In-wall wiring (ethernet, speakers, conduit)</li>
      <li>Plumbing rough-ins (future additions)</li>
    </ul>
    
    <p><strong>Priority 2 - High ROI Upgrades:</strong></p>
    <ul>
      <li>Flooring upgrades (hardwood in main areas)</li>
      <li>Kitchen countertops (granite/quartz)</li>
      <li>Primary bathroom enhancements</li>
      <li>Energy-efficient windows</li>
    </ul>
    
    <p><strong>Priority 3 - Enjoyment Value:</strong></p>
    <ul>
      <li>Upgrades you'll enjoy daily (low ROI but high personal value)</li>
      <li>Example: Chef's kitchen if you love cooking</li>
      <li>Example: Home office if you work remotely</li>
    </ul>
    
    <p><strong>Priority 4 - Skip or DIY Later:</strong></p>
    <ul>
      <li>Landscaping (do yourself or hire directly)</li>
      <li>Light fixtures (easy to change)</li>
      <li>Window treatments (significant savings)</li>
      <li>Hardware and accessories</li>
    </ul>
    
    <h3>Time Horizon Impact on ROI</h3>
    <p><strong>Selling Within 5 Years:</strong> Focus only on high-ROI upgrades (80%+)</p>
    <p><strong>Staying 5-10 Years:</strong> Balance ROI with personal enjoyment</p>
    <p><strong>Forever Home (10+ Years):</strong> Focus on what you'll enjoy, ROI less critical</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "upgradeCategory",
        label: "Upgrade Category",
        type: "select",
        options: [
          { value: "structural", label: "Structural (Garage, Rooms, Ceiling)" },
          { value: "flooring", label: "Flooring (Hardwood, Tile)" },
          { value: "kitchen", label: "Kitchen (Counters, Cabinets, Appliances)" },
          { value: "bathroom", label: "Bathroom (Fixtures, Finishes)" },
          { value: "energy", label: "Energy Efficiency (HVAC, Insulation, Solar)" },
          { value: "outdoor", label: "Outdoor (Patio, Landscaping)" },
          { value: "tech", label: "Technology (Smart Home, A/V)" },
          { value: "finishes", label: "Finishes (Trim, Lighting, Paint)" },
        ],
        defaultValue: "kitchen",
      },
      {
        name: "upgradeCost",
        label: "Builder Upgrade Cost",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "marketSegment",
        label: "Home Market Segment",
        type: "select",
        options: [
          { value: "entry", label: "Entry-Level (Under $300K)" },
          { value: "midrange", label: "Mid-Range ($300K-$600K)" },
          { value: "luxury", label: "Luxury ($600K+)" },
        ],
        defaultValue: "midrange",
      },
      {
        name: "timeHorizon",
        label: "Expected Ownership Duration",
        type: "select",
        options: [
          { value: "short", label: "Short-Term (1-5 years)" },
          { value: "medium", label: "Medium-Term (5-10 years)" },
          { value: "longterm", label: "Long-Term/Forever (10+ years)" },
        ],
        defaultValue: "medium",
      },
      {
        name: "annualEnergySavings",
        label: "Annual Energy Savings (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Upgrade Cost", isCurrency: true },
      { label: "Expected Resale Recovery", isCurrency: true },
      { label: "Recovery Percentage", isCurrency: false },
      { label: "Net Cost (Loss)", isCurrency: true },
      { label: "Annual Energy Savings (if applicable)", isCurrency: true },
      { label: "Payback Period (Years)", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const upgradeCategory = data.upgradeCategory || "kitchen";
      const upgradeCost = Number(data.upgradeCost) || 0;
      const marketSegment = data.marketSegment || "midrange";
      const timeHorizon = data.timeHorizon || "medium";
      const annualEnergySavings = Number(data.annualEnergySavings) || 0;
      
      let baseRecoveryRate = 0;
      
      if (upgradeCategory === "structural") {
        baseRecoveryRate = 0.90;
      } else if (upgradeCategory === "flooring") {
        baseRecoveryRate = 0.85;
      } else if (upgradeCategory === "kitchen") {
        baseRecoveryRate = 0.80;
      } else if (upgradeCategory === "bathroom") {
        baseRecoveryRate = 0.75;
      } else if (upgradeCategory === "energy") {
        baseRecoveryRate = 0.65;
      } else if (upgradeCategory === "outdoor") {
        baseRecoveryRate = 0.60;
      } else if (upgradeCategory === "tech") {
        baseRecoveryRate = 0.45;
      } else {
        baseRecoveryRate = 0.55;
      }
      
      let marketMultiplier = 1.0;
      if (marketSegment === "entry") {
        marketMultiplier = 0.85;
      } else if (marketSegment === "midrange") {
        marketMultiplier = 1.0;
      } else {
        marketMultiplier = 1.15;
      }
      
      const adjustedRecoveryRate = baseRecoveryRate * marketMultiplier;
      const resaleRecovery = upgradeCost * adjustedRecoveryRate;
      const recoveryPercentage = adjustedRecoveryRate * 100;
      const netCost = upgradeCost - resaleRecovery;
      
      let paybackPeriod = "N/A";
      if (annualEnergySavings > 0) {
        const years = netCost / annualEnergySavings;
        paybackPeriod = `${years.toFixed(1)} years`;
      }
      
      let recommendation = "";
      
      if (recoveryPercentage >= 90) {
        recommendation = "🎯 Excellent ROI - Highly recommended upgrade";
      } else if (recoveryPercentage >= 75) {
        recommendation = "✅ Good ROI - Worthwhile investment";
      } else if (recoveryPercentage >= 60) {
        recommendation = "⚠️ Moderate ROI - Consider personal value vs. cost";
      } else if (recoveryPercentage >= 40) {
        recommendation = "⚠️ Low ROI - Only if you'll enjoy it long-term";
      } else {
        recommendation = "❌ Poor ROI - Consider DIY or skip this upgrade";
      }
      
      if (timeHorizon === "longterm" && recoveryPercentage < 60) {
        recommendation += " (Forever home: personal enjoyment matters more)";
      } else if (timeHorizon === "short" && recoveryPercentage < 75) {
        recommendation = "❌ Poor Short-Term ROI - Avoid if selling within 5 years";
      }

      return [
        { label: "Upgrade Cost", value: `${upgradeCost.toFixed(2)}`, isCurrency: true },
        { label: "Expected Resale Recovery", value: `${resaleRecovery.toFixed(2)}`, isCurrency: true },
        { label: "Recovery Percentage", value: `${recoveryPercentage.toFixed(1)}%`, isCurrency: false },
        { label: "Net Cost (Loss)", value: `${netCost.toFixed(2)}`, isCurrency: true },
        { label: "Annual Energy Savings (if applicable)", value: `${annualEnergySavings.toFixed(2)}`, isCurrency: true },
        { label: "Payback Period (Years)", value: paybackPeriod, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
