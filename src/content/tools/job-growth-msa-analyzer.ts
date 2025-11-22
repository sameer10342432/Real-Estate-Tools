import { CalculatorContent } from '@/types';

export const JOB_GROWTH_MSA_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Job Growth (by MSA) Analyzer',
  description: 'Analyze job growth trends by Metropolitan Statistical Area to identify strong real estate markets',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'job-growth-msa-analyzer',
  article: {
    title: "Understanding Job Growth and Real Estate Markets",
    content: `
    <h2>Why Job Growth Matters for Real Estate</h2>
    <p>Metropolitan Statistical Area (MSA) job growth is one of the most reliable indicators of future real estate demand. When jobs increase in a region, housing demand typically follows within 12-18 months.</p>
    
    <h3>How to Use This Analyzer</h3>
    <p>Track job growth data for your target MSA to:</p>
    <ul>
      <li><strong>Identify Emerging Markets:</strong> Areas with 3%+ annual job growth often see property appreciation</li>
      <li><strong>Predict Rental Demand:</strong> New workers need housing, increasing rental demand</li>
      <li><strong>Time Your Investments:</strong> Buy before job growth accelerates prices</li>
      <li><strong>Diversify Portfolio:</strong> Invest in multiple growing MSAs to reduce risk</li>
    </ul>
    
    <h3>Key Metrics to Track</h3>
    <ul>
      <li><strong>Annual Job Growth Rate:</strong> >3% is excellent, 1-3% is good, <1% is concerning</li>
      <li><strong>Industry Diversity:</strong> Multiple growing industries indicate stable growth</li>
      <li><strong>Wage Growth:</strong> Higher wages support higher home prices</li>
      <li><strong>Population Growth:</strong> Should align with job growth</li>
    </ul>
    
    <h3>Top Job Growth MSAs (Recent Trends)</h3>
    <p>Historically strong performers include Austin, Raleigh, Nashville, and Boise. However, always verify current data as trends can shift.</p>
    
    <h3>Red Flags to Watch</h3>
    <ul>
      <li>Negative job growth for 2+ consecutive quarters</li>
      <li>Single-industry dependence (e.g., oil, manufacturing)</li>
      <li>Job growth without wage growth (low-quality jobs)</li>
      <li>Population decline despite job growth</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "msaName",
        label: "MSA Name",
        type: "text",
        placeholder: "e.g., Austin-Round Rock, TX",
        defaultValue: "",
      },
      {
        name: "currentJobs",
        label: "Current Total Jobs",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "previousYearJobs",
        label: "Previous Year Total Jobs",
        type: "number",
        placeholder: "970000",
        defaultValue: "970000",
      },
      {
        name: "averageWage",
        label: "Average Annual Wage ($)",
        type: "number",
        placeholder: "65000",
        defaultValue: "65000",
      },
      {
        name: "populationGrowth",
        label: "Population Growth Rate (%)",
        type: "number",
        placeholder: "2.5",
        defaultValue: "2.5",
      },
    ],
    results: [
      { label: "Annual Job Growth Rate", isCurrency: false },
      { label: "Jobs Added", isCurrency: false },
      { label: "Market Strength Rating", isCurrency: false },
      { label: "Investment Outlook", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentJobs = Number(data.currentJobs) || 0;
      const previousYearJobs = Number(data.previousYearJobs) || 0;
      const averageWage = Number(data.averageWage) || 0;
      const populationGrowth = Number(data.populationGrowth) || 0;
      
      const jobsAdded = currentJobs - previousYearJobs;
      const growthRate = previousYearJobs > 0 ? ((jobsAdded / previousYearJobs) * 100) : 0;
      
      // Determine market strength
      let strength = "";
      if (growthRate >= 3) strength = "🔥 Excellent";
      else if (growthRate >= 2) strength = "✅ Very Good";
      else if (growthRate >= 1) strength = "👍 Good";
      else if (growthRate >= 0) strength = "⚠️ Weak";
      else strength = "❌ Declining";
      
      // Investment outlook based on job growth + wage + population alignment
      let outlook = "";
      const wageScore = averageWage >= 70000 ? 2 : averageWage >= 55000 ? 1 : 0;
      const popAligned = Math.abs(growthRate - populationGrowth) < 1;
      
      if (growthRate >= 2.5 && wageScore >= 1 && popAligned) {
        outlook = "🚀 Strong Buy Market";
      } else if (growthRate >= 1.5 && wageScore >= 0) {
        outlook = "✅ Favorable Market";
      } else if (growthRate >= 0.5) {
        outlook = "⚠️ Proceed with Caution";
      } else {
        outlook = "❌ Avoid This Market";
      }

      return [
        { label: "Annual Job Growth Rate", value: `${growthRate.toFixed(2)}%`, isCurrency: false },
        { label: "Jobs Added", value: jobsAdded.toLocaleString(), isCurrency: false },
        { label: "Market Strength Rating", value: strength, isCurrency: false },
        { label: "Investment Outlook", value: outlook, isCurrency: false },
      ];
    },
  },
};