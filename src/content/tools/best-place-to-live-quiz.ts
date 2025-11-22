import { CalculatorContent } from '@/types';

export const BEST_PLACE_TO_LIVE_QUIZ_CONTENT: CalculatorContent = {
  title: 'Best Place to Live Quiz (Based on User Preferences)',
  description: 'Find your ideal city based on climate, cost of living, job market, lifestyle preferences, and personal priorities',
  icon: 'Icon',
  category: 'Lifestyle Planning',
  slug: 'best-place-to-live-quiz',
  article: {
    title: "Finding Your Perfect Place to Live",
    content: `
    <h2>How to Choose Where to Live</h2>
    <p>Choosing where to live is one of life's most important decisions. It affects your career, finances, lifestyle, and happiness. This tool helps you identify cities that match your personal preferences and priorities.</p>
    
    <h3>Key Factors to Consider</h3>
    <ul>
      <li><strong>Climate Preferences:</strong> Warm vs. cold, sunny vs. rainy, seasonal variety</li>
      <li><strong>Cost of Living:</strong> Housing costs, taxes, everyday expenses</li>
      <li><strong>Job Market:</strong> Industry opportunities, unemployment rate, average salaries</li>
      <li><strong>Lifestyle:</strong> Urban vs. suburban, nightlife, cultural activities</li>
      <li><strong>Education:</strong> School quality, college access</li>
      <li><strong>Safety:</strong> Crime rates, emergency services</li>
      <li><strong>Healthcare:</strong> Hospital quality, doctor availability</li>
      <li><strong>Outdoor Activities:</strong> Parks, hiking, beaches, recreation</li>
    </ul>
    
    <h3>Popular City Categories</h3>
    <p><strong>Tech Hubs:</strong> Austin, Seattle, San Francisco, Boston - High salaries, innovation, but expensive</p>
    <p><strong>Affordable Cities:</strong> Pittsburgh, Nashville, Raleigh - Balance of opportunity and affordability</p>
    <p><strong>Beach Cities:</strong> San Diego, Miami, Charleston - Ocean lifestyle, tourism-driven economies</p>
    <p><strong>College Towns:</strong> Madison, Boulder, Chapel Hill - Young population, cultural events, education focus</p>
    <p><strong>Retirement Havens:</strong> Phoenix, Tampa, Sarasota - Warm weather, senior-friendly, lower taxes</p>
    
    <h3>Making the Decision</h3>
    <p>After identifying potential cities:</p>
    <ul>
      <li>Visit for at least a week (not just vacation)</li>
      <li>Talk to locals about pros and cons</li>
      <li>Explore different neighborhoods</li>
      <li>Research job opportunities in your field</li>
      <li>Calculate actual cost of living for your lifestyle</li>
      <li>Consider proximity to family and friends</li>
      <li>Evaluate long-term growth potential</li>
    </ul>
    
    <h3>Remote Work Considerations</h3>
    <p>With remote work becoming common, more people can choose where to live based on lifestyle rather than job location:</p>
    <ul>
      <li>Lower cost of living = higher effective salary</li>
      <li>Choose climate and activities you love</li>
      <li>Be near family or in preferred environment</li>
      <li>Consider time zones if working with specific teams</li>
      <li>Check internet infrastructure quality</li>
    </ul>
    
    <p><strong>Remember:</strong> No city is perfect for everyone. The best place to live is where YOUR priorities align with what the city offers. This quiz helps you identify cities worth exploring further.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "climatePreference",
        label: "Climate Preference (1=Cold, 10=Warm)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
      {
        name: "costOfLivingPriority",
        label: "Cost of Living Priority (1=Low, 10=High)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "jobMarketImportance",
        label: "Job Market Importance (1=Low, 10=High)",
        type: "number",
        placeholder: "9",
        defaultValue: "9",
      },
      {
        name: "urbanVsSuburban",
        label: "Lifestyle (1=Suburban, 10=Urban)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "outdoorActivities",
        label: "Outdoor Activities Priority (1=Low, 10=High)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
      {
        name: "culturalActivities",
        label: "Cultural Activities Priority (1=Low, 10=High)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Best Match City Type", isCurrency: false },
      { label: "Recommended Cities", isCurrency: false },
      { label: "Lifestyle Score", isCurrency: false },
      { label: "Key Priorities", isCurrency: false },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const climate = Number(data.climatePreference) || 5;
      const costOfLiving = Number(data.costOfLivingPriority) || 5;
      const jobMarket = Number(data.jobMarketImportance) || 5;
      const urbanSuburban = Number(data.urbanVsSuburban) || 5;
      const outdoor = Number(data.outdoorActivities) || 5;
      const cultural = Number(data.culturalActivities) || 5;
      
      const lifestyleScore = ((climate + outdoor + cultural + urbanSuburban) / 40) * 100;
      
      let cityType = "";
      let recommended = "";
      let priorities = "";
      let nextSteps = "";
      
      // Determine city type based on preferences
      if (jobMarket >= 8 && urbanSuburban >= 7 && costOfLiving <= 5) {
        cityType = "🏙️ Major Tech Hub";
        recommended = "Austin, Seattle, Denver, Boston, Portland";
        priorities = "Career growth, urban lifestyle, innovation";
      } else if (costOfLiving >= 7 && jobMarket >= 6 && urbanSuburban <= 6) {
        cityType = "🏘️ Affordable Metro";
        recommended = "Raleigh, Nashville, Pittsburgh, Indianapolis, Kansas City";
        priorities = "Affordability, job opportunities, balanced lifestyle";
      } else if (climate >= 8 && outdoor >= 7) {
        cityType = "🌴 Warm Weather Paradise";
        recommended = "San Diego, Tampa, Phoenix, Charleston, Sarasota";
        priorities = "Warm climate, outdoor living, active lifestyle";
      } else if (cultural >= 8 && urbanSuburban >= 8) {
        cityType = "🎭 Cultural Center";
        recommended = "New York, Chicago, San Francisco, Boston, Washington DC";
        priorities = "Arts, culture, dining, urban excitement";
      } else if (outdoor >= 8 && climate <= 6) {
        cityType = "⛰️ Outdoor Adventure Hub";
        recommended = "Denver, Salt Lake City, Boise, Portland, Asheville";
        priorities = "Mountain access, hiking, skiing, nature";
      } else {
        cityType = "🏡 Balanced Lifestyle City";
        recommended = "Minneapolis, Madison, Des Moines, Columbus, Rochester";
        priorities = "Quality of life, family-friendly, four seasons";
      }
      
      nextSteps = "Research these cities, visit if possible, join local online communities, check job boards";

      return [
        { label: "Best Match City Type", value: cityType, isCurrency: false },
        { label: "Recommended Cities", value: recommended, isCurrency: false },
        { label: "Lifestyle Score", value: `${lifestyleScore.toFixed(0)}/100`, isCurrency: false },
        { label: "Key Priorities", value: priorities, isCurrency: false },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
