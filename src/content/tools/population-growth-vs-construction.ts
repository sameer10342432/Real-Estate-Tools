import { CalculatorContent } from '@/types';

export const POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT: CalculatorContent = {
  title: 'Population Growth vs. Construction Analyzer',
  description: 'Analyze market dynamics by comparing population growth rates to new housing construction to identify supply-demand imbalances',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'population-growth-vs-construction',
  article: {
    title: "Understanding Supply and Demand Dynamics in Housing Markets",
    content: `
    <h2>The Population vs. Construction Equation</h2>
    <p>The relationship between population growth and new housing construction is fundamental to predicting property values and market trends. When population grows faster than housing supply, prices rise. When construction outpaces population growth, prices may decline or flatten.</p>
    
    <h3>The Formula for Market Health</h3>
    <p><strong>Balanced Market:</strong> New households = New housing units (±10%)</p>
    <p><strong>Undersupplied Market:</strong> Population growth > Construction (20%+ gap) = Rising prices</p>
    <p><strong>Oversupplied Market:</strong> Construction > Population growth (20%+ gap) = Falling/flat prices</p>
    
    <h3>Real-World Examples</h3>
    <p><strong>Austin, TX (2020-2023) - Undersupplied:</strong></p>
    <ul>
      <li>Population growth: 30% (adding 600K people)</li>
      <li>New housing units: 15% (adding 100K units)</li>
      <li>Result: 45% median home price increase, severe shortage</li>
      <li>Lesson: Major tech migration overwhelmed construction capacity</li>
    </ul>
    
    <p><strong>Phoenix, AZ (2020-2024) - Well Supplied:</strong></p>
    <ul>
      <li>Population growth: 12% (adding 250K people)</li>
      <li>New housing units: 14% (adding 120K units)</li>
      <li>Result: Moderate 20% price increase, balanced market</li>
      <li>Lesson: Developer-friendly policies kept pace with demand</li>
    </ul>
    
    <p><strong>Miami, FL (2021-2024) - Potential Oversupply:</strong></p>
    <ul>
      <li>Population growth: 8% (post-COVID surge slowing)</li>
      <li>New construction: 25% (massive condo pipeline)</li>
      <li>Result: Inventory building, price growth slowing</li>
      <li>Risk: If demand slows, oversupply could cause correction</li>
    </ul>
    
    <p><strong>San Francisco, CA (2020-2024) - Population Decline:</strong></p>
    <ul>
      <li>Population growth: -6% (exodus during COVID)</li>
      <li>New construction: Limited due to NIMBY restrictions</li>
      <li>Result: Prices down 15-20% from 2021 peak</li>
      <li>Lesson: Even limited supply can't support declining demand</li>
    </ul>
    
    <h3>Leading Indicators to Watch</h3>
    <ul>
      <li><strong>Building Permits Issued:</strong> 12-18 month leading indicator of supply</li>
      <li><strong>Job Growth:</strong> Predicts population growth 6-12 months ahead</li>
      <li><strong>Migration Patterns:</strong> U-Haul rates, census data, LinkedIn profiles</li>
      <li><strong>Rental Vacancy Rates:</strong> Below 5% = tight market, above 10% = oversupply</li>
      <li><strong>Days on Market:</strong> Decreasing = shortage, increasing = surplus</li>
      <li><strong>Construction Pipeline:</strong> Permits vs. completions shows future supply</li>
    </ul>
    
    <h3>Markets to Watch (2024-2025)</h3>
    <p><strong>High Growth, Under-Built (Buy Signals):</strong></p>
    <ul>
      <li>Raleigh, NC - Tech growth, limited new construction</li>
      <li>Nashville, TN - No income tax attracting workers, supply constraints</li>
      <li>Boise, ID - Migration destination, topographic limits on building</li>
    </ul>
    
    <p><strong>High Growth, Over-Building (Caution):</strong></p>
    <ul>
      <li>Charlotte, NC - Rapid apartment construction may outpace demand</li>
      <li>Tampa, FL - Massive condo pipeline, insurance concerns</li>
      <li>Dallas, TX - Strong construction can moderate price growth</li>
    </ul>
    
    <p><strong>Slow Growth, Under-Built (Stable):</strong></p>
    <ul>
      <li>Portland, OR - Slow growth, limited supply keeps prices elevated</li>
      <li>Seattle, WA - Post-tech boom slowdown but still constrained supply</li>
    </ul>
    
    <p><strong>Declining Population, Still Building (Avoid):</strong></p>
    <ul>
      <li>Some Midwest cities - Population decline but speculative construction</li>
      <li>Certain California metros - Exodus not reflected in construction plans</li>
    </ul>
    
    <h3>Investment Strategies by Market Type</h3>
    <p><strong>Undersupplied Markets (Pop Growth > Construction):</strong></p>
    <ul>
      <li>Best for appreciation plays</li>
      <li>Strong rental demand, low vacancy</li>
      <li>Can command rent increases above inflation</li>
      <li>Buy before construction catches up</li>
      <li>Risk: Eventually supply catches up and appreciation slows</li>
    </ul>
    
    <p><strong>Balanced Markets (Pop Growth ≈ Construction):</strong></p>
    <ul>
      <li>Steady, predictable appreciation (3-5% annually)</li>
      <li>Lower risk, lower reward</li>
      <li>Good for buy-and-hold strategies</li>
      <li>Rental yields remain stable</li>
    </ul>
    
    <p><strong>Oversupplied Markets (Construction > Pop Growth):</strong></p>
    <ul>
      <li>Weak or negative appreciation</li>
      <li>Higher rental vacancy, rent concessions</li>
      <li>Opportunity: Buy at discount if temporary oversupply</li>
      <li>Risk: Extended downturn if fundamental demand isn't there</li>
      <li>Strategy: Wait for absorption before buying</li>
    </ul>
    
    <h3>Data Sources</h3>
    <ul>
      <li><strong>U.S. Census Bureau:</strong> Population estimates, ACS data</li>
      <li><strong>Local Planning Departments:</strong> Building permits, zoning changes</li>
      <li><strong>Bureau of Labor Statistics:</strong> Employment data by metro</li>
      <li><strong>NAHB (National Association of Home Builders):</strong> Construction statistics</li>
      <li><strong>Apartment List, Zillow:</strong> Rental market data</li>
      <li><strong>CoreLogic, RealPage:</strong> Professional market analysis</li>
    </ul>
    
    <h3>Critical Ratios to Calculate</h3>
    <p><strong>Housing Units Per Capita:</strong> Declining ratio = shortage</p>
    <p><strong>Construction Per New Resident:</strong> Should be ~1 unit per 2.5 people</p>
    <p><strong>Absorption Rate:</strong> How fast new supply is absorbed (months)</p>
    <p><strong>Permits to Completions:</strong> Gap indicates construction delays</p>
    
    <h3>Timing Your Investment</h3>
    <p><strong>Early Stage (Population growing, construction planning):</strong></p>
    <ul>
      <li>Best time to buy - before supply response</li>
      <li>Strongest appreciation potential</li>
      <li>Example: Austin 2018-2020</li>
    </ul>
    
    <p><strong>Mid Stage (Population strong, construction ramping):</strong></p>
    <ul>
      <li>Still good time to buy</li>
      <li>Appreciation continues but moderating</li>
      <li>Example: Phoenix 2021-2023</li>
    </ul>
    
    <p><strong>Late Stage (Supply catching up to demand):</strong></p>
    <ul>
      <li>Appreciation slowing</li>
      <li>Consider taking profits</li>
      <li>Example: Denver 2023-2024</li>
    </ul>
    
    <p><strong>Correction Stage (Oversupply emerging):</strong></p>
    <ul>
      <li>Wait on sidelines or look elsewhere</li>
      <li>Opportunity for contrarian buyers if fundamentals strong</li>
      <li>Example: Miami condos 2024-2025 (pending)</li>
    </ul>
    
    <h3>Long-Term Trends to Monitor</h3>
    <ul>
      <li><strong>Climate Migration:</strong> Movement from coasts to interior, North to South</li>
      <li><strong>Remote Work:</strong> Redistributing population to quality-of-life destinations</li>
      <li><strong>Aging Population:</strong> Seniors downsizing, preference for single-level homes</li>
      <li><strong>Millennial Household Formation:</strong> Largest generation entering peak buying years</li>
      <li><strong>Immigration:</strong> Federal policy changes can swing demand significantly</li>
      <li><strong>Zoning Reform:</strong> Some states loosening restrictions = more supply</li>
    </ul>
    
    <p><strong>Pro Tip:</strong> The best markets for investment have strong population growth (2%+ annually) from in-migration, combined with geographic or regulatory constraints on new construction. This creates sustained undersupply and consistent appreciation. Look for growing tech/healthcare/education hubs with restrictive zoning or limited developable land.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "populationGrowth",
        label: "Population Growth Rate (% per year)",
        type: "number",
        placeholder: "2.5",
        defaultValue: "2.5",
      },
      {
        name: "constructionRate",
        label: "New Housing Construction Rate (% per year)",
        type: "number",
        placeholder: "1.8",
        defaultValue: "1.8",
      },
      {
        name: "currentPopulation",
        label: "Current Population",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "currentHousingUnits",
        label: "Current Housing Units",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
    ],
    results: [
      { label: "Supply-Demand Balance", isCurrency: false },
      { label: "Market Classification", isCurrency: false },
      { label: "5-Year Supply Gap/Surplus", isCurrency: false },
      { label: "Price Pressure Indicator", isCurrency: false },
      { label: "Investment Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const popGrowth = Number(data.populationGrowth) || 0;
      const constructionRate = Number(data.constructionRate) || 0;
      const currentPop = Number(data.currentPopulation) || 0;
      const currentUnits = Number(data.currentHousingUnits) || 0;
      
      const avgHouseholdSize = 2.5; // National average
      
      // Calculate 5-year projections
      const futurePopulation = currentPop * Math.pow((1 + popGrowth / 100), 5);
      const newPopulation = futurePopulation - currentPop;
      const householdsNeeded = newPopulation / avgHouseholdSize;
      
      const futureHousingUnits = currentUnits * Math.pow((1 + constructionRate / 100), 5);
      const newUnitsBuilt = futureHousingUnits - currentUnits;
      
      const supplyGap = householdsNeeded - newUnitsBuilt;
      const supplyGapPercentage = (supplyGap / householdsNeeded) * 100;
      
      let balance = "";
      let classification = "";
      let pricePressure = "";
      let recommendation = "";
      
      if (supplyGapPercentage > 30) {
        balance = "🔴 Severe Shortage";
        classification = "Extremely Undersupplied Market";
        pricePressure = "⬆️⬆️⬆️ Very Strong Upward Pressure (15-25%+ annually)";
        recommendation = "✅ STRONG BUY - High appreciation potential, act fast";
      } else if (supplyGapPercentage > 15) {
        balance = "🟠 Moderate Shortage";
        classification = "Undersupplied Market";
        pricePressure = "⬆️⬆️ Strong Upward Pressure (8-15% annually)";
        recommendation = "✅ BUY - Good appreciation expected, favorable market";
      } else if (supplyGapPercentage > -10 && supplyGapPercentage <= 15) {
        balance = "🟡 Balanced";
        classification = "Well-Supplied Market";
        pricePressure = "⬆️ Moderate Upward Pressure (3-7% annually)";
        recommendation = "✓ HOLD - Stable market, normal appreciation expected";
      } else if (supplyGapPercentage > -25) {
        balance = "🟢 Slight Surplus";
        classification = "Slightly Oversupplied";
        pricePressure = "➡️ Flat to Slight Upward (0-3% annually)";
        recommendation = "⚠️ WAIT - Oversupply developing, price growth limited";
      } else {
        balance = "🔵 Major Surplus";
        classification = "Severely Oversupplied Market";
        pricePressure = "⬇️ Downward Pressure (negative to flat)";
        recommendation = "❌ AVOID - Oversupply will pressure prices downward";
      }

      return [
        { label: "Supply-Demand Balance", value: balance, isCurrency: false },
        { label: "Market Classification", value: classification, isCurrency: false },
        { label: "5-Year Supply Gap/Surplus", value: `${Math.abs(supplyGap).toFixed(0)} units ${supplyGap > 0 ? 'shortage' : 'surplus'}`, isCurrency: false },
        { label: "Price Pressure Indicator", value: pricePressure, isCurrency: false },
        { label: "Investment Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
