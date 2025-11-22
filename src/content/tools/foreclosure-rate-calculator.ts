import { CalculatorContent } from '@/types';

export const FORECLOSURE_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Foreclosure Rate (by County)',
  description: 'Track and analyze foreclosure rates by county to identify distressed property opportunities and market risk',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'foreclosure-rate-calculator',
  article: {
    title: "Understanding Foreclosure Rates and Investment Opportunities",
    content: `
    <h2>What is Foreclosure Rate?</h2>
    <p>Foreclosure rate measures the percentage of homes in a county or market that are in foreclosure proceedings. It's a key indicator of market distress and can signal both opportunities and risks for investors.</p>
    
    <h3>Why Track Foreclosure Rates?</h3>
    <ul>
      <li><strong>Investment Opportunities:</strong> Find below-market properties from motivated sellers</li>
      <li><strong>Market Health:</strong> Low rates indicate healthy market fundamentals</li>
      <li><strong>Risk Assessment:</strong> High rates may signal economic problems</li>
      <li><strong>Competitive Analysis:</strong> Understand supply dynamics in your market</li>
    </ul>
    
    <h3>Foreclosure Rate Benchmarks</h3>
    <ul>
      <li><strong>0-0.5%:</strong> Healthy market with minimal distress</li>
      <li><strong>0.5-1%:</strong> Normal range for most markets</li>
      <li><strong>1-2%:</strong> Elevated, watch for deterioration</li>
      <li><strong>2-3%:</strong> High distress, opportunities emerging</li>
      <li><strong>3%+:</strong> Severe distress (crisis levels)</li>
    </ul>
    
    <h3>Investment Strategies by Foreclosure Rate</h3>
    
    <h4>Low Foreclosure Markets (<1%)</h4>
    <ul>
      <li>Focus on traditional purchases and appreciation plays</li>
      <li>Rental properties with stable, long-term tenants</li>
      <li>New construction in growing areas</li>
    </ul>
    
    <h4>Moderate Foreclosure Markets (1-2%)</h4>
    <ul>
      <li>Seek pre-foreclosure deals directly from owners</li>
      <li>Buy at foreclosure auctions for 20-30% discounts</li>
      <li>REO (bank-owned) properties for quick flips</li>
    </ul>
    
    <h4>High Foreclosure Markets (2%+)</h4>
    <ul>
      <li>Bulk purchases of distressed properties</li>
      <li>Renovation and repositioning strategies</li>
      <li>Long-term holds for eventual market recovery</li>
      <li>Rental conversions (buy low, rent, wait for appreciation)</li>
    </ul>
    
    <h3>Risks of High Foreclosure Markets</h3>
    <ul>
      <li>Declining property values may continue</li>
      <li>Neighborhood deterioration and crime increases</li>
      <li>Difficulty securing financing</li>
      <li>Lower appraisal values</li>
      <li>Extended time to recovery</li>
    </ul>
    
    <h3>Data Sources</h3>
    <p>Find foreclosure data from RealtyTrac, ATTOM Data, county court records, or local MLS foreclosure listings.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "countyName",
        label: "County Name",
        type: "text",
        placeholder: "e.g., Maricopa County, AZ",
        defaultValue: "",
      },
      {
        name: "totalHomes",
        label: "Total Housing Units in County",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "foreclosureFilings",
        label: "Foreclosure Filings (Annual)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "medianHomePrice",
        label: "Median Home Price ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "unemploymentRate",
        label: "County Unemployment Rate (%)",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
    ],
    results: [
      { label: "Foreclosure Rate", isCurrency: false },
      { label: "Market Health Status", isCurrency: false },
      { label: "Investment Opportunity Level", isCurrency: false },
      { label: "Recommended Strategy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const totalHomes = Number(data.totalHomes) || 0;
      const foreclosureFilings = Number(data.foreclosureFilings) || 0;
      const unemploymentRate = Number(data.unemploymentRate) || 0;
      
      // Calculate foreclosure rate
      const foreclosureRate = totalHomes > 0 ? (foreclosureFilings / totalHomes) * 100 : 0;
      
      // One in X homes
      const oneInX = foreclosureRate > 0 ? Math.round(100 / foreclosureRate) : 0;
      
      // Market health
      let marketHealth = "";
      if (foreclosureRate >= 3) marketHealth = "🔴 Severe Distress";
      else if (foreclosureRate >= 2) marketHealth = "🟠 High Distress";
      else if (foreclosureRate >= 1) marketHealth = "🟡 Moderate Concern";
      else if (foreclosureRate >= 0.5) marketHealth = "🟢 Normal Range";
      else marketHealth = "🟢🟢 Very Healthy";
      
      // Opportunity level
      let opportunityLevel = "";
      if (foreclosureRate >= 2.5 && unemploymentRate < 7) {
        opportunityLevel = "🎯 High Opportunity (Distressed + Stable Jobs)";
      } else if (foreclosureRate >= 2) {
        opportunityLevel = "✅ Good Opportunity (Many Distressed Properties)";
      } else if (foreclosureRate >= 1) {
        opportunityLevel = "👍 Moderate Opportunities Available";
      } else if (foreclosureRate >= 0.5) {
        opportunityLevel = "⚠️ Limited Opportunities";
      } else {
        opportunityLevel = "❌ Very Few Distressed Properties";
      }
      
      // Strategy
      let strategy = "";
      if (foreclosureRate >= 2.5) {
        strategy = "🏢 Bulk buying, Auctions, REO Properties";
      } else if (foreclosureRate >= 1.5) {
        strategy = "🔨 Pre-foreclosures, Fix & Flip, Rentals";
      } else if (foreclosureRate >= 0.8) {
        strategy = "🏘️ Selective distressed deals, MLS foreclosures";
      } else if (foreclosureRate >= 0.3) {
        strategy = "🏠 Traditional purchases, Focus on fundamentals";
      } else {
        strategy = "✨ Premium market, New construction, Luxury";
      }

      return [
        { label: "Foreclosure Rate", value: `${foreclosureRate.toFixed(2)}% (1 in ${oneInX} homes)`, isCurrency: false },
        { label: "Market Health Status", value: marketHealth, isCurrency: false },
        { label: "Investment Opportunity Level", value: opportunityLevel, isCurrency: false },
        { label: "Recommended Strategy", value: strategy, isCurrency: false },
      ];
    },
  },
};