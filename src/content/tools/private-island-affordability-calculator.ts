import { CalculatorContent } from '@/types';

export const PrivateIslandAffordabilityCalculatorContent: CalculatorContent = {
  title: 'Private Island Affordability Calculator',
  description: 'Calculate if you can afford to buy a private island, including purchase price, development costs, maintenance, and operating expenses',
  icon: '🏝️',
  category: 'Additional Tools',
  slug: 'private-island-affordability-calculator',
  
  metaTitle: 'Private Island Affordability Calculator - Can You Buy an Island? | Property Tools',
  metaDescription: 'Calculate if you can afford a private island. Get comprehensive cost analysis including purchase price, development, infrastructure, maintenance, and annual operating costs.',
  
  article: {
    title: 'Private Island Affordability Calculator - Determine Your Island Purchase Budget',
    content: `
      <h2>Private Island Affordability Calculator</h2>
      <p>Dreaming of owning a private island? Beyond the purchase price, calculate all the costs involved including development, infrastructure, maintenance, and ongoing operations for your tropical paradise.</p>

      <h3>Private Island Price Ranges (2025)</h3>
      
      <h4>By Region</h4>
      <ul>
        <li><strong>Caribbean:</strong> $500,000-$100,000,000+</li>
        <li><strong>Central America (Belize, Panama):</strong> $300,000-$50,000,000</li>
        <li><strong>South Pacific (Fiji, Vanuatu):</strong> $400,000-$75,000,000</li>
        <li><strong>Canadian Islands:</strong> $100,000-$10,000,000</li>
        <li><strong>Scottish Islands:</strong> $200,000-$20,000,000</li>
        <li><strong>United States:</strong> $500,000-$50,000,000+</li>
      </ul>

      <h4>By Development Level</h4>
      <ul>
        <li><strong>Undeveloped (raw land):</strong> $50,000-$5,000,000</li>
        <li><strong>Basic Development:</strong> $500,000-$15,000,000</li>
        <li><strong>Partially Developed:</strong> $2,000,000-$30,000,000</li>
        <li><strong>Fully Developed Resort:</strong> $10,000,000-$200,000,000+</li>
      </ul>

      <h3>Development Costs (Beyond Purchase)</h3>
      
      <h4>Infrastructure (20-50% of Island Price)</h4>
      <ul>
        <li><strong>Dock/Marina:</strong> $100,000-$2,000,000</li>
        <li><strong>Airstrip (if feasible):</strong> $500,000-$5,000,000</li>
        <li><strong>Roads/Paths:</strong> $50,000-$500,000</li>
        <li><strong>Utilities installation:</strong> $200,000-$3,000,000</li>
      </ul>

      <h4>Utilities & Power (15-30%)</h4>
      <ul>
        <li><strong>Solar power system:</strong> $150,000-$1,000,000</li>
        <li><strong>Diesel generators:</strong> $50,000-$300,000</li>
        <li><strong>Wind turbines:</strong> $100,000-$800,000</li>
        <li><strong>Submarine cable (if near mainland):</strong> $500,000-$5,000,000+</li>
        <li><strong>Battery storage:</strong> $100,000-$600,000</li>
      </ul>

      <h4>Water Systems (10-20%)</h4>
      <ul>
        <li><strong>Desalination plant:</strong> $150,000-$2,000,000</li>
        <li><strong>Rainwater collection:</strong> $50,000-$300,000</li>
        <li><strong>Wells (if freshwater available):</strong> $30,000-$200,000</li>
        <li><strong>Water treatment:</strong> $75,000-$500,000</li>
        <li><strong>Storage tanks:</strong> $40,000-$300,000</li>
      </ul>

      <h4>Buildings & Structures (30-60%)</h4>
      <ul>
        <li><strong>Main residence:</strong> $500,000-$20,000,000+</li>
        <li><strong>Guest houses:</strong> $200,000-$2,000,000 each</li>
        <li><strong>Staff quarters:</strong> $100,000-$800,000</li>
        <li><strong>Utility buildings:</strong> $50,000-$400,000</li>
        <li><strong>Beach pavilion/entertainment:</strong> $100,000-$1,500,000</li>
      </ul>

      <h4>Telecommunications</h4>
      <ul>
        <li><strong>Satellite internet:</strong> $50,000-$200,000 setup + $1,000-$5,000/month</li>
        <li><strong>Cell tower (if needed):</strong> $250,000-$1,500,000</li>
        <li><strong>Radio communications:</strong> $20,000-$100,000</li>
      </ul>

      <h3>Annual Operating Costs</h3>
      
      <h4>Maintenance (2-5% of Property Value)</h4>
      <ul>
        <li><strong>Undeveloped island:</strong> $5,000-$30,000/year</li>
        <li><strong>Developed private residence:</strong> $100,000-$500,000/year</li>
        <li><strong>Luxury resort island:</strong> $500,000-$5,000,000+/year</li>
      </ul>

      <h4>Staffing Costs</h4>
      <ul>
        <li><strong>Caretaker (full-time):</strong> $30,000-$80,000/year</li>
        <li><strong>Property manager:</strong> $50,000-$120,000/year</li>
        <li><strong>Maintenance crew (2-4 people):</strong> $80,000-$200,000/year</li>
        <li><strong>Chef/cook:</strong> $40,000-$100,000/year</li>
        <li><strong>Security:</strong> $60,000-$150,000/year</li>
        <li><strong>Total staff (basic):</strong> $100,000-$350,000/year</li>
        <li><strong>Total staff (luxury):</strong> $500,000-$2,000,000+/year</li>
      </ul>

      <h4>Utilities & Operations</h4>
      <ul>
        <li><strong>Fuel (generators/boats):</strong> $30,000-$200,000/year</li>
        <li><strong>Satellite internet:</strong> $12,000-$60,000/year</li>
        <li><strong>Water treatment/desalination:</strong> $20,000-$100,000/year</li>
        <li><strong>Waste management:</strong> $15,000-$75,000/year</li>
        <li><strong>Supplies & groceries:</strong> $40,000-$200,000/year</li>
      </ul>

      <h4>Transportation</h4>
      <ul>
        <li><strong>Boat maintenance & fuel:</strong> $30,000-$150,000/year</li>
        <li><strong>Helicopter operations (if applicable):</strong> $200,000-$1,000,000+/year</li>
        <li><strong>Seaplane/aircraft:</strong> $100,000-$500,000/year</li>
        <li><strong>Dock maintenance:</strong> $10,000-$75,000/year</li>
      </ul>

      <h4>Insurance & Taxes</h4>
      <ul>
        <li><strong>Property insurance:</strong> $25,000-$300,000/year</li>
        <li><strong>Hurricane/disaster insurance:</strong> $50,000-$500,000/year</li>
        <li><strong>Liability insurance:</strong> $15,000-$100,000/year</li>
        <li><strong>Property taxes:</strong> Varies by jurisdiction ($0-$200,000+/year)</li>
      </ul>

      <h3>Most Affordable Private Island Locations</h3>
      
      <h4>Budget-Friendly (Under $1M)</h4>
      <ul>
        <li><strong>Canada (Ontario, Nova Scotia):</strong> $100,000-$800,000</li>
        <li><strong>Finland:</strong> $150,000-$900,000</li>
        <li><strong>Panama:</strong> $200,000-$900,000</li>
        <li><strong>Belize:</strong> $250,000-$1,000,000</li>
        <li><strong>Philippines:</strong> $150,000-$800,000</li>
      </ul>

      <h4>Mid-Range ($1M-$10M)</h4>
      <ul>
        <li><strong>Bahamas:</strong> $1,000,000-$50,000,000</li>
        <li><strong>Caribbean (various):</strong> $1,500,000-$30,000,000</li>
        <li><strong>Central America:</strong> $800,000-$15,000,000</li>
        <li><strong>South Pacific:</strong> $1,000,000-$25,000,000</li>
      </ul>

      <h4>Luxury ($10M+)</h4>
      <ul>
        <li><strong>Turks & Caicos:</strong> $10,000,000-$100,000,000+</li>
        <li><strong>Private Bahamas (Exumas):</strong> $15,000,000-$75,000,000+</li>
        <li><strong>French Polynesia:</strong> $20,000,000-$100,000,000+</li>
        <li><strong>Maldives:</strong> $25,000,000-$150,000,000+</li>
      </ul>

      <h3>Island Ownership Considerations</h3>
      
      <h4>Legal & Regulatory</h4>
      <ul>
        <li>Foreign ownership restrictions in some countries</li>
        <li>Environmental regulations and protected areas</li>
        <li>Building permits and development restrictions</li>
        <li>Import duties on construction materials</li>
        <li>Residency requirements in some jurisdictions</li>
      </ul>

      <h4>Practical Challenges</h4>
      <ul>
        <li>Distance from mainland (access difficulty)</li>
        <li>Weather/hurricane exposure</li>
        <li>Medical emergencies (evacuation planning)</li>
        <li>Supply logistics and delivery</li>
        <li>Communication and internet reliability</li>
        <li>Erosion and climate change impacts</li>
      </ul>

      <h3>Ways to Offset Costs</h3>
      
      <h4>Revenue Generation</h4>
      <ul>
        <li><strong>Luxury vacation rental:</strong> $5,000-$50,000+/week</li>
        <li><strong>Eco-resort development:</strong> $200,000-$2,000,000+/year</li>
        <li><strong>Event venue rental:</strong> $50,000-$500,000 per event</li>
        <li><strong>Film location fees:</strong> $25,000-$250,000 per production</li>
        <li><strong>Dive/adventure tourism:</strong> Variable income</li>
      </ul>

      <h3>Famous Private Island Purchases</h3>
      <ul>
        <li><strong>Richard Branson - Necker Island (BVI):</strong> $180,000 (1978) now worth $100M+</li>
        <li><strong>Leonardo DiCaprio - Blackadore Caye (Belize):</strong> $1,750,000</li>
        <li><strong>Tyler Perry - White Bay Cay (Bahamas):</strong> $13,500,000</li>
        <li><strong>Johnny Depp - Little Hall's Pond Cay (Bahamas):</strong> $3,600,000</li>
        <li><strong>Oracle's Larry Ellison - Lanai (Hawaii):</strong> $300,000,000 (98% of island)</li>
      </ul>

      <h3>Affordability Rules of Thumb</h3>
      <ul>
        <li>Island purchase price should be 25% or less of net worth</li>
        <li>Annual operating costs = 3-7% of purchase price</li>
        <li>Development budget = 50-100% of purchase price (undeveloped)</li>
        <li>Total investment (purchase + development) ≤ 40% of net worth</li>
        <li>Annual income should be 10x+ annual operating costs</li>
      </ul>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Can I really buy a private island?</h4>
      <p>Yes! Islands start as low as $50,000 for small Canadian or European islands. Tropical islands typically start around $300,000-$500,000.</p>

      <h4>What's the cheapest way to own a private island?</h4>
      <p>Buy an undeveloped island in Canada, Finland, or Panama ($100,000-$400,000). Camp or build a small cabin yourself. Annual costs can be under $10,000.</p>

      <h4>Can foreigners buy islands?</h4>
      <p>Depends on the country. Most Caribbean nations allow foreign ownership. Some countries restrict island sales to citizens only. Always verify local laws.</p>

      <h4>How much money do I need to maintain a private island?</h4>
      <p>Minimum $50,000-$100,000/year for basic caretaking. Developed islands with staff require $200,000-$1,000,000+/year.</p>

      <p><strong>Calculate your private island affordability above!</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'netWorth',
        label: 'Your Net Worth ($)',
        type: 'number',
        defaultValue: '10000000',
        placeholder: '10000000',
      },
      {
        name: 'annualIncome',
        label: 'Annual Income ($)',
        type: 'number',
        defaultValue: '500000',
        placeholder: '500000',
      },
      {
        name: 'islandPrice',
        label: 'Island Purchase Price ($)',
        type: 'number',
        defaultValue: '2000000',
        placeholder: '2000000',
      },
      {
        name: 'developmentLevel',
        label: 'Development Level',
        type: 'select',
        options: [
          { value: 'undeveloped', label: 'Undeveloped (Raw Land)' },
          { value: 'basic', label: 'Basic Infrastructure' },
          { value: 'partial', label: 'Partially Developed' },
          { value: 'full', label: 'Fully Developed Resort' },
        ],
        defaultValue: 'basic',
      },
    ],
    results: [
      { label: 'Affordability Assessment', isCurrency: false },
      { label: 'Total Investment Required', isCurrency: true },
      { label: 'Annual Operating Costs', isCurrency: true },
      { label: 'Development Costs', isCurrency: true },
      { label: '10-Year Total Cost of Ownership', isCurrency: true },
      { label: 'Detailed Analysis', isCurrency: false },
    ],
    calculate: (values) => {
      const netWorth = Number(values.netWorth) || 10000000;
      const annualIncome = Number(values.annualIncome) || 500000;
      const islandPrice = Number(values.islandPrice) || 2000000;
      const developmentLevel = values.developmentLevel || 'basic';

      const developmentCosts: Record<string, number> = {
        undeveloped: islandPrice * 0.80,
        basic: islandPrice * 0.40,
        partial: islandPrice * 0.15,
        full: 0,
      };

      const annualCostRates: Record<string, number> = {
        undeveloped: 0.02,
        basic: 0.04,
        partial: 0.05,
        full: 0.06,
      };

      const developmentCost = developmentCosts[developmentLevel];
      const totalInvestment = islandPrice + developmentCost;
      const annualOperatingCost = (islandPrice + developmentCost) * annualCostRates[developmentLevel];
      const tenYearCost = totalInvestment + (annualOperatingCost * 10);

      const percentOfNetWorth = (totalInvestment / netWorth) * 100;
      const incomeToOperatingRatio = annualIncome / annualOperatingCost;

      let affordability = '';
      let recommendation = '';

      if (percentOfNetWorth > 50 || incomeToOperatingRatio < 5) {
        affordability = '❌ NOT AFFORDABLE';
        recommendation = `This island is beyond your financial means. The total investment of $${totalInvestment.toLocaleString()} represents ${percentOfNetWorth.toFixed(1)}% of your net worth (should be under 40%). Your annual income can only cover ${incomeToOperatingRatio.toFixed(1)}x the operating costs (should be 10x+). Consider a less expensive island or wait until your wealth increases.`;
      } else if (percentOfNetWorth > 40 || incomeToOperatingRatio < 8) {
        affordability = '⚠️ FINANCIALLY STRETCHED';
        recommendation = `You can technically afford this island, but it will consume ${percentOfNetWorth.toFixed(1)}% of your net worth and your income is only ${incomeToOperatingRatio.toFixed(1)}x the annual operating costs. This leaves little room for other investments or emergencies. Consider a smaller island or reduce development scope.`;
      } else if (percentOfNetWorth > 25 || incomeToOperatingRatio < 12) {
        affordability = '✅ MARGINALLY AFFORDABLE';
        recommendation = `This island is within your budget. The investment represents ${percentOfNetWorth.toFixed(1)}% of your net worth and your income can cover ${incomeToOperatingRatio.toFixed(1)}x the operating costs. You should be comfortable, but budget carefully for unexpected expenses like hurricane damage or major repairs.`;
      } else if (percentOfNetWorth > 15 || incomeToOperatingRatio < 20) {
        affordability = '✅ COMFORTABLY AFFORDABLE';
        recommendation = `This island is well within your means! The investment is only ${percentOfNetWorth.toFixed(1)}% of your net worth and your income covers ${incomeToOperatingRatio.toFixed(1)}x the annual costs. You'll have plenty of cushion for unexpected expenses and can enjoy your island without financial stress.`;
      } else {
        affordability = '💎 EASILY AFFORDABLE';
        recommendation = `This island is a small fraction (${percentOfNetWorth.toFixed(1)}%) of your net worth and your income is ${incomeToOperatingRatio.toFixed(1)}x the operating costs. You could afford a much more expensive island or develop this one into a world-class resort. Consider upgrading your island choice or investing heavily in luxury amenities.`;
      }

      const breakdown = `
<strong>🏝️ Private Island Affordability Analysis:</strong>

<strong>Your Financial Position:</strong>
• Net Worth: $${netWorth.toLocaleString()}
• Annual Income: $${annualIncome.toLocaleString()}

<strong>Island Investment:</strong>
• Purchase Price: $${islandPrice.toLocaleString()}
• Development Level: ${developmentLevel === 'undeveloped' ? 'Undeveloped (Raw Land)' : developmentLevel === 'basic' ? 'Basic Infrastructure' : developmentLevel === 'partial' ? 'Partially Developed' : 'Fully Developed Resort'}
• Development Costs: $${developmentCost.toLocaleString()}
• <strong>Total Investment: $${totalInvestment.toLocaleString()}</strong>

<strong>Investment as % of Net Worth:</strong>
• ${percentOfNetWorth.toFixed(1)}% of your total wealth
• Recommended maximum: 40%
• ${percentOfNetWorth <= 40 ? '✓ Within recommended range' : '✗ Exceeds recommended maximum'}

<strong>Annual Operating Budget:</strong>
• Estimated Annual Costs: $${annualOperatingCost.toLocaleString()}/year
• Staff (caretaker, maintenance): $${(annualOperatingCost * 0.40).toLocaleString()}
• Utilities & fuel: $${(annualOperatingCost * 0.25).toLocaleString()}
• Insurance & taxes: $${(annualOperatingCost * 0.20).toLocaleString()}
• Maintenance & repairs: $${(annualOperatingCost * 0.15).toLocaleString()}

<strong>Income Coverage Ratio:</strong>
• Your income covers annual costs ${incomeToOperatingRatio.toFixed(1)}x
• Recommended minimum: 10x
• ${incomeToOperatingRatio >= 10 ? '✓ Excellent coverage' : incomeToOperatingRatio >= 5 ? '⚠ Marginal coverage' : '✗ Insufficient coverage'}

<strong>10-Year Ownership Projection:</strong>
• Total 10-year cost: $${tenYearCost.toLocaleString()}
• Average annual expense: $${(annualOperatingCost).toLocaleString()}
• This assumes: ${developmentLevel === 'undeveloped' ? 'Full development in Year 1, then operating costs' : developmentLevel === 'basic' ? 'Infrastructure buildout + operations' : 'Ongoing operations and maintenance only'}

<strong>Development Timeline & Costs:</strong>
${developmentLevel === 'undeveloped' ? `
• Dock/Marina: $300,000-$1,000,000
• Solar power system: $250,000-$600,000
• Desalination plant: $200,000-$800,000
• Main residence: $800,000-$3,000,000
• Roads/paths: $100,000-$300,000
• Timeline: 2-4 years to fully develop
` : developmentLevel === 'basic' ? `
• Additional buildings: $400,000-$1,500,000
• Enhanced utilities: $200,000-$600,000
• Landscaping & amenities: $100,000-$400,000
• Timeline: 1-2 years to complete
` : developmentLevel === 'partial' ? `
• Finishing work: $150,000-$500,000
• Additional guest houses: $200,000-$800,000
• Timeline: 6-12 months
` : `
• Already fully developed
• Immediate move-in ready
• Focus on operations & maintenance
`}

<strong>Ways to Reduce Costs:</strong>
• Rent out island when not using: Generate $250,000-$2,000,000/year
• Eco-resort development: Create sustainable income stream
• Reduce staff to minimal caretaker: Save $100,000-$300,000/year
• DIY development work: Save 20-40% on construction
• Share ownership with partners/friends: Split costs 50-75%

<strong>💡 Financial Recommendation:</strong>
${recommendation}

<strong>Alternative Options to Consider:</strong>
${percentOfNetWorth > 40 ? `
• Look for islands priced at $${(netWorth * 0.25).toLocaleString()} or less (25% of net worth)
• Consider Canadian or European islands (more affordable)
• Start with smaller, undeveloped island and upgrade later
• Partner with friends/family to share costs
` : `
• You could afford islands up to $${(netWorth * 0.40).toLocaleString()}
• Consider upgrading to a larger or better-located island
• Develop luxury resort for rental income
• Add premium amenities (helicopter pad, yacht dock, etc.)
`}
`;

      return [
        { label: 'Affordability Assessment', value: `${affordability}\n\n${recommendation}`, isCurrency: false },
        { label: 'Total Investment Required', value: totalInvestment, isCurrency: true },
        { label: 'Annual Operating Costs', value: annualOperatingCost, isCurrency: true },
        { label: 'Development Costs', value: developmentCost, isCurrency: true },
        { label: '10-Year Total Cost of Ownership', value: tenYearCost, isCurrency: true },
        { label: 'Detailed Analysis', value: breakdown, isCurrency: false },
      ];
    },
  },
};
