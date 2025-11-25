import { CalculatorContent } from '@/types';

export const SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sinkhole Insurance Cost Calculator',
  description: 'Calculate sinkhole insurance premiums based on property location, coverage type, and risk factors for comprehensive property protection',
  icon: 'Icon',
  category: 'Insurance & Protection',
  slug: 'sinkhole-insurance-cost-calculator',
  article: {
    title: "Understanding Sinkhole Insurance Costs",
    content: `
    <h2>Understanding Sinkhole Insurance Costs</h2>
    <p>Sinkhole insurance provides crucial protection for properties in areas prone to ground collapse. Understanding the cost helps homeowners make informed decisions about coverage options.</p>
    
    <h3>What is Sinkhole Insurance?</h3>
    <p>Sinkhole insurance covers damage caused by the collapse or shifting of the ground beneath your property. This specialized coverage is particularly important in areas with:</p>
    <ul>
      <li><strong>Limestone Bedrock:</strong> Areas with soluble rock formations</li>
      <li><strong>High Water Tables:</strong> Regions where groundwater can erode subsurface materials</li>
      <li><strong>Historical Activity:</strong> Locations with documented sinkhole incidents</li>
      <li><strong>Mining Areas:</strong> Properties near old mining operations</li>
    </ul>
    
    <h3>Types of Sinkhole Coverage</h3>
    <p><strong>Full Sinkhole Coverage:</strong> Comprehensive protection including damage from subsidence, ground movement, and catastrophic collapse. Typically 2-5% of property value as annual premium.</p>
    <p><strong>Catastrophic Ground Cover Collapse (CGCC):</strong> Basic coverage for severe, sudden sinkholes meeting specific criteria. Generally 0.5-1.5% of property value.</p>
    <p><strong>Optional Endorsement:</strong> Added to standard homeowners policy. Usually 1-3% of property value depending on risk level.</p>
    
    <h3>Premium Calculation Factors</h3>
    <ul>
      <li><strong>Property Value:</strong> Higher home values increase premium amounts</li>
      <li><strong>Location Risk:</strong> Properties in high-risk zones pay significantly more</li>
      <li><strong>Coverage Type:</strong> Full coverage costs 2-4x more than CGCC</li>
      <li><strong>Deductible:</strong> Higher deductibles ($2,500-$10,000) reduce premiums by 15-30%</li>
      <li><strong>Claims History:</strong> Previous sinkhole claims can increase rates 25-50%</li>
      <li><strong>Property Age:</strong> Older homes may face higher premiums</li>
    </ul>
    
    <h3>High-Risk Areas</h3>
    <p>Sinkhole insurance is most critical in:</p>
    <ul>
      <li><strong>Sinkhole Alley:</strong> Central Florida counties (Pasco, Hernando, Hillsborough)</li>
      <li><strong>Karst Regions:</strong> Kentucky, Tennessee, Missouri, Pennsylvania</li>
      <li><strong>Texas:</strong> Areas with limestone formations and drought conditions</li>
      <li><strong>Alabama:</strong> Northern regions with extensive cave systems</li>
    </ul>
    
    <h3>Is Sinkhole Insurance Worth It?</h3>
    <p><strong>Recommended If:</strong></p>
    <ul>
      <li>Property is in a documented high-risk area</li>
      <li>Neighborhood has history of sinkhole activity</li>
      <li>Home shows warning signs (cracks, doors sticking, tilting)</li>
      <li>Property value exceeds $300,000</li>
    </ul>
    
    <p><strong>May Skip If:</strong></p>
    <ul>
      <li>Property is in low-risk geological area</li>
      <li>Recent geological survey shows stable bedrock</li>
      <li>Home is newer construction with modern foundation</li>
      <li>Cost exceeds 5% of property value annually</li>
    </ul>
    
    <h3>Cost-Saving Strategies</h3>
    <p><strong>Foundation Inspection:</strong> Professional geological assessment may qualify you for lower rates.</p>
    <p><strong>Bundle Coverage:</strong> Adding sinkhole coverage to existing homeowners policy often costs less than standalone policy.</p>
    <p><strong>Risk Mitigation:</strong> Installing proper drainage and foundation monitoring systems can reduce premiums 10-20%.</p>
    <p><strong>Shop Around:</strong> Premiums can vary 40-60% between carriers for identical coverage.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Value",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "coverageType",
        label: "Coverage Type",
        type: "select",
        options: [
          { value: "full", label: "Full Sinkhole Coverage" },
          { value: "cgcc", label: "Catastrophic Ground Cover Collapse (CGCC)" },
          { value: "endorsement", label: "Optional Endorsement" },
        ],
        defaultValue: "full",
      },
      {
        name: "riskLevel",
        label: "Location Risk Level",
        type: "select",
        options: [
          { value: "low", label: "Low Risk Area" },
          { value: "moderate", label: "Moderate Risk Area" },
          { value: "high", label: "High Risk Area" },
          { value: "extreme", label: "Extreme Risk (Sinkhole Alley)" },
        ],
        defaultValue: "moderate",
      },
      {
        name: "deductible",
        label: "Deductible Amount",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "claimsHistory",
        label: "Previous Sinkhole Claims",
        type: "select",
        options: [
          { value: "none", label: "No Claims" },
          { value: "one", label: "1 Claim" },
          { value: "multiple", label: "2+ Claims" },
        ],
        defaultValue: "none",
      },
    ],
    results: [
      { label: "Estimated Annual Premium", isCurrency: true },
      { label: "Monthly Premium", isCurrency: true },
      { label: "Premium as % of Property Value", isCurrency: false },
      { label: "Coverage Amount", isCurrency: true },
      { label: "Out-of-Pocket (Deductible)", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const coverageType = data.coverageType || "full";
      const riskLevel = data.riskLevel || "moderate";
      const deductible = Number(data.deductible) || 0;
      const claimsHistory = data.claimsHistory || "none";
      
      let baseRate = 0;
      if (coverageType === "full") {
        baseRate = 0.035;
      } else if (coverageType === "cgcc") {
        baseRate = 0.01;
      } else {
        baseRate = 0.02;
      }
      
      let riskMultiplier = 1.0;
      if (riskLevel === "low") {
        riskMultiplier = 0.6;
      } else if (riskLevel === "moderate") {
        riskMultiplier = 1.0;
      } else if (riskLevel === "high") {
        riskMultiplier = 1.5;
      } else {
        riskMultiplier = 2.5;
      }
      
      let deductibleDiscount = 1.0;
      if (deductible >= 10000) {
        deductibleDiscount = 0.7;
      } else if (deductible >= 5000) {
        deductibleDiscount = 0.85;
      } else if (deductible >= 2500) {
        deductibleDiscount = 0.95;
      }
      
      let claimsMultiplier = 1.0;
      if (claimsHistory === "one") {
        claimsMultiplier = 1.3;
      } else if (claimsHistory === "multiple") {
        claimsMultiplier = 1.5;
      }
      
      const annualPremium = propertyValue * baseRate * riskMultiplier * deductibleDiscount * claimsMultiplier;
      const monthlyPremium = annualPremium / 12;
      const premiumPercentage = (annualPremium / propertyValue) * 100;
      const coverageAmount = propertyValue;
      
      let recommendation = "";
      if (premiumPercentage > 5) {
        recommendation = "⚠️ Very Expensive - Consider higher deductible or CGCC coverage only";
      } else if (premiumPercentage > 3) {
        recommendation = "⚠️ High Cost - Evaluate if full coverage is necessary for your risk level";
      } else if (premiumPercentage > 1.5) {
        recommendation = "✅ Reasonable Cost - Recommended for high-risk areas";
      } else {
        recommendation = "✅ Affordable - Good value for peace of mind";
      }

      return [
        { label: "Estimated Annual Premium", value: `${annualPremium.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Premium", value: `${monthlyPremium.toFixed(2)}`, isCurrency: true },
        { label: "Premium as % of Property Value", value: `${premiumPercentage.toFixed(2)}%`, isCurrency: false },
        { label: "Coverage Amount", value: `${coverageAmount.toFixed(2)}`, isCurrency: true },
        { label: "Out-of-Pocket (Deductible)", value: `${deductible.toFixed(2)}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
