import { CalculatorContent } from '@/types';

export const BEST_CITY_FOR_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Best City For Analyzer (e.g., "Tech Jobs", "Families", "Artists")',
  description: 'Find the best US cities for specific professions, industries, or lifestyles with data-driven recommendations',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'best-city-for-analyzer',
  article: {
    title: "Finding the Best City for Your Profession or Lifestyle",
    content: `
    <h2>How to Find the Best City for Your Career</h2>
    <p>The right city can accelerate your career, provide better opportunities, and improve your quality of life. This tool helps you identify the best cities for specific industries, professions, and lifestyles.</p>
    
    <h3>Best Cities by Industry</h3>
    <p><strong>Technology:</strong> San Francisco, Seattle, Austin, Boston, Denver - High salaries, innovation hubs, networking</p>
    <p><strong>Finance:</strong> New York, Charlotte, Chicago, San Francisco, Boston - Wall Street, banking centers, fintech</p>
    <p><strong>Healthcare:</strong> Boston, Houston, Baltimore, Rochester MN, Nashville - Major medical centers, research</p>
    <p><strong>Entertainment/Media:</strong> Los Angeles, New York, Nashville, Atlanta - Film, TV, music production</p>
    <p><strong>Education:</strong> Boston, Ann Arbor, Madison, Chapel Hill - Universities, research institutions</p>
    <p><strong>Manufacturing:</strong> Detroit, Indianapolis, Milwaukee, Louisville - Industrial heritage, logistics</p>
    
    <h3>Best Cities for Families</h3>
    <ul>
      <li><strong>Madison, WI:</strong> Excellent schools, safe neighborhoods, parks, college town culture</li>
      <li><strong>Raleigh, NC:</strong> Growing economy, great schools, affordable housing, research triangle</li>
      <li><strong>Portland, OR:</strong> Family-friendly culture, outdoor activities, progressive values</li>
      <li><strong>Minneapolis, MN:</strong> Strong schools, parks, cultural activities, bike-friendly</li>
      <li><strong>Austin, TX:</strong> No income tax, job growth, outdoor lifestyle, family activities</li>
    </ul>
    
    <h3>Best Cities for Artists/Creatives</h3>
    <ul>
      <li><strong>Portland, OR:</strong> Creative community, affordable studio space, supportive culture</li>
      <li><strong>Santa Fe, NM:</strong> Art galleries, creative history, inspiring landscape</li>
      <li><strong>Asheville, NC:</strong> Growing arts scene, affordable, mountain beauty</li>
      <li><strong>New Orleans, LA:</strong> Music heritage, festivals, vibrant culture</li>
      <li><strong>Brooklyn, NY:</strong> Art scene, networking, cultural diversity (expensive)</li>
    </ul>
    
    <h3>Best Cities for Entrepreneurs</h3>
    <ul>
      <li><strong>Austin, TX:</strong> Startup ecosystem, VC funding, no state income tax</li>
      <li><strong>Miami, FL:</strong> Growing tech scene, international connections, tax benefits</li>
      <li><strong>Denver, CO:</strong> Educated workforce, quality of life, growing economy</li>
      <li><strong>Nashville, TN:</strong> Low taxes, healthcare hub, music industry</li>
      <li><strong>Raleigh, NC:</strong> Research Triangle, talent pool, affordable</li>
    </ul>
    
    <h3>Key Evaluation Criteria</h3>
    <ul>
      <li><strong>Job Market Strength:</strong> Employment rate, job growth, salary levels</li>
      <li><strong>Industry Concentration:</strong> Number of companies in your field</li>
      <li><strong>Cost of Living vs. Salaries:</strong> Real purchasing power</li>
      <li><strong>Networking Opportunities:</strong> Meetups, conferences, professional groups</li>
      <li><strong>Quality of Life:</strong> Housing, schools, safety, recreation</li>
      <li><strong>Growth Potential:</strong> City's economic trajectory</li>
    </ul>
    
    <h3>Making the Move</h3>
    <p>Before relocating for career opportunities:</p>
    <ul>
      <li>Research average salaries for your position</li>
      <li>Calculate real cost of living (not just housing)</li>
      <li>Join industry groups in the target city (remotely first)</li>
      <li>Visit during a typical work week</li>
      <li>Secure a job or have 6-12 months savings</li>
      <li>Consider commute times and traffic</li>
      <li>Research neighborhoods for your lifestyle</li>
    </ul>
    
    <p><strong>Remote Work Impact:</strong> Many careers now offer remote options, allowing you to choose location based on lifestyle while earning a competitive salary. Consider tax-friendly states if working remotely for a company in a high-tax state.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "industryType",
        label: "Industry Focus (1=Creative, 5=Mixed, 10=Tech/Corporate)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "salaryExpectation",
        label: "Minimum Annual Salary Needed ($K)",
        type: "number",
        placeholder: "80",
        defaultValue: "80",
      },
      {
        name: "costOfLivingTolerance",
        label: "Cost of Living Tolerance (1=Low, 10=High)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "networkingImportance",
        label: "Networking/Scene Importance (1=Low, 10=High)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "lifestyleBalance",
        label: "Work-Life Balance Priority (1=Low, 10=High)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
    ],
    results: [
      { label: "Best City Category", isCurrency: false },
      { label: "Top Recommended Cities", isCurrency: false },
      { label: "Expected Salary Range", isCurrency: false },
      { label: "Cost of Living Index", isCurrency: false },
      { label: "Career Growth Potential", isCurrency: false },
    ],
    calculate: (data: any) => {
      const industry = Number(data.industryType) || 5;
      const salary = Number(data.salaryExpectation) || 60;
      const costTolerance = Number(data.costOfLivingTolerance) || 5;
      const networking = Number(data.networkingImportance) || 5;
      const lifestyle = Number(data.lifestyleBalance) || 5;
      
      let cityCategory = "";
      let recommended = "";
      let salaryRange = "";
      let costIndex = "";
      let growthPotential = "";
      
      // Determine best cities based on industry and preferences
      if (industry >= 8 && salary >= 100 && costTolerance >= 7) {
        cityCategory = "💻 Major Tech Hubs";
        recommended = "San Francisco, Seattle, New York, Boston, Austin";
        salaryRange = `$${salary}K - $${salary * 1.5}K`;
        costIndex = "High (120-180% of national average)";
        growthPotential = "⭐⭐⭐⭐⭐ Excellent - Top tier opportunities";
      } else if (industry >= 8 && salary >= 70 && costTolerance <= 6) {
        cityCategory = "🚀 Emerging Tech Cities";
        recommended = "Austin, Denver, Raleigh, Portland, Nashville";
        salaryRange = `$${salary}K - $${salary * 1.3}K`;
        costIndex = "Moderate (90-110% of national average)";
        growthPotential = "⭐⭐⭐⭐ Very Good - Fast growing markets";
      } else if (industry <= 3 && networking >= 7) {
        cityCategory = "🎨 Creative/Arts Hubs";
        recommended = "Portland, Santa Fe, Asheville, New Orleans, Providence";
        salaryRange = `$${salary * 0.7}K - $${salary}K`;
        costIndex = "Low to Moderate (80-100% of national average)";
        growthPotential = "⭐⭐⭐ Good - Strong creative communities";
      } else if (lifestyle >= 8 && costTolerance <= 5) {
        cityCategory = "🏡 Quality of Life Cities";
        recommended = "Madison, Minneapolis, Boulder, Boise, Des Moines";
        salaryRange = `$${salary * 0.85}K - $${salary * 1.15}K`;
        costIndex = "Moderate (85-105% of national average)";
        growthPotential = "⭐⭐⭐⭐ Very Good - Balanced growth";
      } else if (industry >= 5 && salary >= 90 && costTolerance >= 6) {
        cityCategory = "💼 Major Business Centers";
        recommended = "New York, Chicago, Los Angeles, Miami, Atlanta";
        salaryRange = `$${salary}K - $${salary * 1.4}K`;
        costIndex = "High (110-150% of national average)";
        growthPotential = "⭐⭐⭐⭐⭐ Excellent - Diverse opportunities";
      } else {
        cityCategory = "🌟 Balanced Growth Cities";
        recommended = "Columbus, Indianapolis, Pittsburgh, Richmond, Salt Lake City";
        salaryRange = `$${salary * 0.9}K - $${salary * 1.2}K`;
        costIndex = "Low to Moderate (75-95% of national average)";
        growthPotential = "⭐⭐⭐ Good - Steady growth, affordable";
      }

      return [
        { label: "Best City Category", value: cityCategory, isCurrency: false },
        { label: "Top Recommended Cities", value: recommended, isCurrency: false },
        { label: "Expected Salary Range", value: salaryRange, isCurrency: false },
        { label: "Cost of Living Index", value: costIndex, isCurrency: false },
        { label: "Career Growth Potential", value: growthPotential, isCurrency: false },
      ];
    },
  },
};
