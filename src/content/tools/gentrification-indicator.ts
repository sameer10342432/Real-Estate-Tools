import { CalculatorContent } from '@/types';

export const GENTRIFICATION_INDICATOR_CONTENT: CalculatorContent = {
  title: 'Gentrification Indicator Tool',
  description: 'Analyze neighborhood gentrification trends and predict property value appreciation potential',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'gentrification-indicator',
  article: {
    title: "Understanding Gentrification Indicators",
    content: `
    <h2>What is Gentrification?</h2>
    <p>Gentrification is the process of neighborhood transformation when higher-income residents move into historically lower-income areas, leading to rising property values, changing business landscape, and demographic shifts. Understanding gentrification patterns can help investors identify emerging markets and make informed property investment decisions.</p>
    
    <h3>Key Gentrification Indicators</h3>
    <ul>
      <li><strong>Median Income Growth:</strong> Rapid increases in median household income signal incoming affluent residents</li>
      <li><strong>New Business Development:</strong> Upscale coffee shops, restaurants, and boutiques replacing older establishments</li>
      <li><strong>Property Value Appreciation:</strong> Home prices rising faster than citywide averages</li>
      <li><strong>Rent Increases:</strong> Above-average rental cost growth year-over-year</li>
      <li><strong>Educational Attainment:</strong> Increasing percentage of college-educated residents</li>
      <li><strong>Demographic Changes:</strong> Shifts in age, race, and income distribution</li>
    </ul>
    
    <h3>Stages of Gentrification</h3>
    <p><strong>Stage 1 - Early:</strong> Artists and young professionals discover affordable housing. Property values stable but beginning to rise.</p>
    <p><strong>Stage 2 - Mid:</strong> New businesses open, renovation activity increases. Property values accelerate. Best time for investment.</p>
    <p><strong>Stage 3 - Advanced:</strong> Higher-income residents dominate. Property values peak. Rental yields may decline due to high prices.</p>
    <p><strong>Stage 4 - Mature:</strong> Transformation complete. Limited upside potential. Market stabilizes at higher price point.</p>
    
    <h3>Investment Opportunities</h3>
    <ul>
      <li><strong>Buy-and-Hold:</strong> Purchase in Stage 1-2 for maximum appreciation potential</li>
      <li><strong>Fix-and-Flip:</strong> Renovate older properties to meet demands of incoming residents</li>
      <li><strong>Rental Properties:</strong> Target young professionals seeking urban living</li>
      <li><strong>Mixed-Use Development:</strong> Capitalize on demand for ground-floor retail</li>
    </ul>
    
    <h3>Risks and Considerations</h3>
    <ul>
      <li>Not all transitioning neighborhoods gentrify successfully</li>
      <li>Community displacement and social impact concerns</li>
      <li>Potential for policy intervention (rent control, zoning changes)</li>
      <li>Economic downturns can reverse gentrification trends</li>
      <li>Over-development can saturate the market</li>
    </ul>
    
    <h3>Data Sources for Analysis</h3>
    <p>Use these resources to gather gentrification data:</p>
    <ul>
      <li>U.S. Census Bureau data (American Community Survey)</li>
      <li>Local business licensing records</li>
      <li>MLS property sales data</li>
      <li>Crime statistics trends</li>
      <li>School district performance improvements</li>
      <li>Transit development and infrastructure investments</li>
    </ul>
    
    <p><strong>Pro Tip:</strong> Look for neighborhoods near existing high-value areas with good transit access, improving schools, and emerging cultural amenities. These are prime candidates for gentrification.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "medianIncomeGrowth",
        label: "Median Income Growth (% past 5 years)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "propertyValueIncrease",
        label: "Property Value Increase (% past 5 years)",
        type: "number",
        placeholder: "35",
        defaultValue: "35",
      },
      {
        name: "newBusinessCount",
        label: "New Upscale Businesses (past 2 years)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "rentGrowth",
        label: "Rent Growth Rate (% annually)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "collegeDegreeIncrease",
        label: "College Degree Holders Growth (%)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "crimeRateChange",
        label: "Crime Rate Change (% - negative is improvement)",
        type: "number",
        placeholder: "-15",
        defaultValue: "-15",
      },
    ],
    results: [
      { label: "Gentrification Score", isCurrency: false },
      { label: "Gentrification Stage", isCurrency: false },
      { label: "Investment Rating", isCurrency: false },
      { label: "Risk Level", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const medianIncomeGrowth = Number(data.medianIncomeGrowth) || 0;
      const propertyValueIncrease = Number(data.propertyValueIncrease) || 0;
      const newBusinessCount = Number(data.newBusinessCount) || 0;
      const rentGrowth = Number(data.rentGrowth) || 0;
      const collegeDegreeIncrease = Number(data.collegeDegreeIncrease) || 0;
      const crimeRateChange = Number(data.crimeRateChange) || 0;
      
      // Calculate weighted gentrification score
      const incomeScore = Math.min(medianIncomeGrowth / 3, 20);
      const propertyScore = Math.min(propertyValueIncrease / 4, 25);
      const businessScore = Math.min(newBusinessCount / 2, 15);
      const rentScore = Math.min(rentGrowth * 2, 20);
      const educationScore = Math.min(collegeDegreeIncrease, 10);
      const crimeScore = Math.min(Math.abs(crimeRateChange) / 2, 10);
      
      const gentrificationScore = incomeScore + propertyScore + businessScore + rentScore + educationScore + crimeScore;
      
      let stage = "";
      let investmentRating = "";
      let riskLevel = "";
      let recommendation = "";
      
      if (gentrificationScore < 25) {
        stage = "📍 Pre-Gentrification / Stable";
        investmentRating = "⭐⭐ Low Potential";
        riskLevel = "🟡 Medium Risk";
        recommendation = "Monitor for emerging trends. Not recommended for investment yet.";
      } else if (gentrificationScore >= 25 && gentrificationScore < 50) {
        stage = "🌱 Early Stage";
        investmentRating = "⭐⭐⭐⭐ High Potential";
        riskLevel = "🟢 Low-Medium Risk";
        recommendation = "Strong buy signal! Ideal time for investment before prices surge.";
      } else if (gentrificationScore >= 50 && gentrificationScore < 75) {
        stage = "🚀 Mid-Stage (Active)";
        investmentRating = "⭐⭐⭐⭐⭐ Excellent Potential";
        riskLevel = "🟢 Low Risk";
        recommendation = "Peak investment period! High appreciation likely. Act quickly.";
      } else {
        stage = "🏙️ Advanced/Mature";
        investmentRating = "⭐⭐⭐ Moderate Potential";
        riskLevel = "🟡 Medium Risk";
        recommendation = "Market matured. Limited upside. Consider other emerging areas.";
      }

      return [
        { label: "Gentrification Score", value: `${gentrificationScore.toFixed(1)} / 100`, isCurrency: false },
        { label: "Gentrification Stage", value: stage, isCurrency: false },
        { label: "Investment Rating", value: investmentRating, isCurrency: false },
        { label: "Risk Level", value: riskLevel, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
