import { CalculatorContent } from '@/types';

export const NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Hampshire Current Use Tax Calculator',
  description: 'Calculate property tax savings under New Hampshire Current Use Assessment program for farm, forest, and open space land',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'new-hampshire-current-use-tax-calculator',
  article: {
    title: "Understanding New Hampshire's Current Use Tax Program",
    content: `
    <h2>What is Current Use Assessment?</h2>
    <p>New Hampshire's Current Use Assessment program (RSA 79-A) provides significant property tax relief for landowners who keep their land in agricultural, forest, or unproductive uses. Properties enrolled pay taxes based on current use value rather than "highest and best use" market value.</p>
    
    <h3>Eligibility Requirements</h3>
    <p>To qualify for Current Use taxation:</p>
    <ul>
      <li><strong>Minimum Size:</strong> 10 acres for farmland or forest land (no minimum for wetlands)</li>
      <li><strong>Land Types:</strong> Farm land, forest land, unproductive land, wetlands, or land under conservation restriction</li>
      <li><strong>Active Use:</strong> Land must be actively devoted to qualifying use</li>
      <li><strong>Application:</strong> Must apply by April 15th of the year seeking assessment</li>
      <li><strong>Stewardship:</strong> Forest land requires approved stewardship plan</li>
    </ul>
    
    <h3>Qualifying Land Categories</h3>
    <ul>
      <li><strong>Farm Land:</strong> Actively cultivated land producing agricultural products ($310/acre assessed value in 2023)</li>
      <li><strong>Forest Land:</strong> Managed timber land with stewardship plan ($165/acre assessed value)</li>
      <li><strong>Forest Land with Stewardship:</strong> Enhanced management practices ($150/acre assessed value)</li>
      <li><strong>Unproductive Land:</strong> Wetlands, rocky areas, steep slopes ($50/acre assessed value)</li>
      <li><strong>Wetlands:</strong> Certified wetland areas ($30/acre assessed value)</li>
    </ul>
    
    <h3>Tax Savings Example</h3>
    <p>A 50-acre property with $500,000 market value:</p>
    <ul>
      <li><strong>Regular Property Tax (at $25/$1,000):</strong> $12,500/year</li>
      <li><strong>Current Use Tax (50 acres × $165/acre × $25/$1,000):</strong> $206/year</li>
      <li><strong>Annual Savings:</strong> $12,294/year</li>
    </ul>
    
    <h3>Land Use Change Tax (LUCT)</h3>
    <p>When you remove land from Current Use or develop it:</p>
    <ul>
      <li><strong>Penalty Tax:</strong> 10% of full market value at time of change</li>
      <li><strong>Assessment:</strong> Based on fair market value determined by municipality</li>
      <li><strong>Payment:</strong> Due within 30 days of assessment notice</li>
      <li><strong>Exceptions:</strong> Certain transfers to family members may be exempt</li>
    </ul>
    
    <h3>Application Process</h3>
    <ul>
      <li>Submit application to town assessor by April 15th</li>
      <li>Include property maps and land use documentation</li>
      <li>For forest land, provide approved stewardship plan</li>
      <li>Pay $100 application fee per parcel</li>
      <li>Annual renewal not required unless land use changes</li>
    </ul>
    
    <h3>Management Requirements</h3>
    <ul>
      <li><strong>Farm Land:</strong> Maintain active agricultural production</li>
      <li><strong>Forest Land:</strong> Follow approved stewardship plan, update every 10 years</li>
      <li><strong>Record Keeping:</strong> Document management activities</li>
      <li><strong>Access:</strong> Allow town assessors reasonable access for verification</li>
    </ul>
    
    <h3>Benefits Beyond Tax Savings</h3>
    <ul>
      <li>Preserves working landscapes and rural character</li>
      <li>Encourages sustainable forestry and farming</li>
      <li>Protects wildlife habitat and water quality</li>
      <li>Maintains open space for recreation and scenic value</li>
      <li>Can be combined with conservation easements for additional protection</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li>Program is voluntary and can be discontinued by landowner</li>
      <li>LUCT penalty can be substantial - plan development carefully</li>
      <li>Residential structures and 2 acres surrounding them are excluded</li>
      <li>Commercial timber harvests may temporarily affect classification</li>
      <li>Death or family transfers may trigger LUCT unless properly structured</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "acres",
        label: "Total Acres Enrolled",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "landType",
        label: "Primary Land Type",
        type: "select",
        options: [
          "Farm Land ($310/acre)",
          "Forest Land ($165/acre)",
          "Forest with Stewardship ($150/acre)",
          "Unproductive Land ($50/acre)",
          "Wetlands ($30/acre)"
        ],
        defaultValue: "Forest Land ($165/acre)",
      },
      {
        name: "marketValue",
        label: "Estimated Market Value (full property)",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "taxRate",
        label: "Local Tax Rate (per $1,000 of value)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
    ],
    results: [
      { label: "Current Use Assessed Value", isCurrency: true },
      { label: "Current Use Annual Tax", isCurrency: true },
      { label: "Regular Market Value Tax", isCurrency: true },
      { label: "Annual Tax Savings", isCurrency: true },
      { label: "Potential LUCT Penalty", isCurrency: true },
    ],
    calculate: (data: any) => {
      const acres = Number(data.acres) || 0;
      const marketValue = Number(data.marketValue) || 0;
      const taxRate = Number(data.taxRate) || 25;
      const landType = data.landType || "Forest Land ($165/acre)";
      
      // Determine per-acre value based on land type
      let perAcreValue = 165;
      if (landType.includes("Farm Land")) perAcreValue = 310;
      else if (landType.includes("Forest with Stewardship")) perAcreValue = 150;
      else if (landType.includes("Unproductive")) perAcreValue = 50;
      else if (landType.includes("Wetlands")) perAcreValue = 30;
      
      const currentUseValue = acres * perAcreValue;
      const currentUseTax = (currentUseValue / 1000) * taxRate;
      const regularTax = (marketValue / 1000) * taxRate;
      const savings = regularTax - currentUseTax;
      const luctPenalty = marketValue * 0.10;

      return [
        { label: "Current Use Assessed Value", value: currentUseValue, isCurrency: true },
        { label: "Current Use Annual Tax", value: currentUseTax, isCurrency: true },
        { label: "Regular Market Value Tax", value: regularTax, isCurrency: true },
        { label: "Annual Tax Savings", value: savings, isCurrency: true },
        { label: "Potential LUCT Penalty", value: luctPenalty, isCurrency: true },
      ];
    },
  },
};
