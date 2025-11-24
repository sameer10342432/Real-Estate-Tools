import { CalculatorContent } from '@/types';

export const MAINE_TREE_GROWTH_TAX_LAW_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Maine Tree Growth Tax Law Calculator',
  description: 'Calculate property tax savings under Maine Tree Growth Tax Law for forest land owners and analyze withdrawal penalties',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'maine-tree-growth-tax-law-calculator',
  article: {
    title: "Understanding Maine's Tree Growth Tax Law",
    content: `
    <h2>What is Maine's Tree Growth Tax Law?</h2>
    <p>Maine's Tree Growth Tax Law (36 M.R.S.A. § 574-A) provides substantial property tax relief for owners of forested land who practice sustainable forestry. Enrolled land is taxed based on its value for growing trees, not its development value.</p>
    
    <h3>Eligibility Requirements</h3>
    <p>To qualify for Tree Growth taxation:</p>
    <ul>
      <li><strong>Minimum Size:</strong> 10 acres of forested land</li>
      <li><strong>Stocking Standards:</strong> Must meet minimum basal area requirements per acre</li>
      <li><strong>Management Plan:</strong> Requires approved forest management and harvest plan</li>
      <li><strong>Commitment:</strong> Land must be managed for commercial timber production</li>
      <li><strong>Application:</strong> Filed with municipal assessor by April 1st</li>
    </ul>
    
    <h3>Forest Types and Assessed Values (2024)</h3>
    <ul>
      <li><strong>Softwood:</strong> $262/acre</li>
      <li><strong>Mixed Wood:</strong> $408/acre</li>
      <li><strong>Hardwood:</strong> $532/acre</li>
      <li><strong>Uninhabitable Land:</strong> $23/acre (swamps, bogs, cliffs)</li>
    </ul>
    
    <h3>Significant Tax Savings</h3>
    <p>Example: 100-acre hardwood forest worth $300,000 market value</p>
    <ul>
      <li><strong>Regular Property Tax (at $20/$1,000):</strong> $6,000/year</li>
      <li><strong>Tree Growth Tax (100 acres × $532/acre × $20/$1,000):</strong> $1,064/year</li>
      <li><strong>Annual Savings:</strong> $4,936/year</li>
    </ul>
    
    <h3>Withdrawal Penalties</h3>
    <p>When land is removed from Tree Growth or developed:</p>
    <ul>
      <li><strong>Recapture Tax:</strong> Based on stumpage value at time of withdrawal</li>
      <li><strong>Penalty Calculation:</strong> Difference between market value and Tree Growth value for each of the past 5 years, plus interest</li>
      <li><strong>Subdivision Penalty:</strong> Additional penalty if subdividing for development</li>
      <li><strong>Partial Withdrawal:</strong> Can withdraw portions without affecting entire parcel</li>
    </ul>
    
    <h3>Management Plan Requirements</h3>
    <ul>
      <li>Prepared by licensed forester</li>
      <li>Must describe forest stands and stocking levels</li>
      <li>Include planned management activities for next 10 years</li>
      <li>Updated every 10 years or after major harvest</li>
      <li>Available for review by town assessor</li>
    </ul>
    
    <h3>Stocking Standards</h3>
    <p>Minimum basal area requirements (square feet per acre):</p>
    <ul>
      <li><strong>Softwood:</strong> 30 sq ft/acre</li>
      <li><strong>Mixed Wood:</strong> 40 sq ft/acre</li>
      <li><strong>Hardwood:</strong> 40 sq ft/acre</li>
      <li><strong>Regeneration:</strong> Minimum 150 well-distributed seedlings/acre after harvest</li>
    </ul>
    
    <h3>Harvest Reporting</h3>
    <ul>
      <li>Notify town assessor before commercial harvesting</li>
      <li>File harvest report within 30 days of completion</li>
      <li>Report must include volume harvested and post-harvest stocking</li>
      <li>Failure to report can result in program removal</li>
    </ul>
    
    <h3>Application Process</h3>
    <ul>
      <li>Hire licensed forester to create management plan</li>
      <li>Submit application and plan to town assessor by April 1st</li>
      <li>Assessor has 60 days to approve or deny</li>
      <li>Appeals can be made to State Tax Assessor</li>
      <li>Once enrolled, automatic annual renewal unless withdrawn</li>
    </ul>
    
    <h3>Benefits of Participation</h3>
    <ul>
      <li>Immediate and substantial property tax reduction</li>
      <li>Encourages long-term forest stewardship</li>
      <li>Maintains working forests and rural character</li>
      <li>Provides wildlife habitat and recreational opportunities</li>
      <li>Compatible with conservation easements</li>
      <li>Allows sustainable timber income while reducing taxes</li>
    </ul>
    
    <h3>Special Considerations</h3>
    <ul>
      <li><strong>Estate Planning:</strong> Transfer to heirs maintains enrollment but requires new application</li>
      <li><strong>Partial Withdrawal:</strong> Can remove building lots without affecting entire parcel</li>
      <li><strong>Natural Disasters:</strong> Wind or ice damage doesn't trigger penalties</li>
      <li><strong>Public Access:</strong> No requirement to allow public access</li>
      <li><strong>Compatible Uses:</strong> Maple sugaring, hunting camps, and trails are allowed</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "acres",
        label: "Total Forested Acres",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "forestType",
        label: "Primary Forest Type",
        type: "select",
        options: [
          "Softwood ($262/acre)",
          "Mixed Wood ($408/acre)",
          "Hardwood ($532/acre)",
          "Uninhabitable ($23/acre)"
        ],
        defaultValue: "Mixed Wood ($408/acre)",
      },
      {
        name: "marketValue",
        label: "Estimated Market Value",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "taxRate",
        label: "Local Tax Rate (per $1,000)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "withdrawalAcres",
        label: "Acres to Withdraw (optional)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Tree Growth Assessed Value", isCurrency: true },
      { label: "Tree Growth Annual Tax", isCurrency: true },
      { label: "Regular Tax (Market Value)", isCurrency: true },
      { label: "Annual Tax Savings", isCurrency: true },
      { label: "Estimated Withdrawal Penalty", isCurrency: true },
    ],
    calculate: (data: any) => {
      const acres = Number(data.acres) || 0;
      const marketValue = Number(data.marketValue) || 0;
      const taxRate = Number(data.taxRate) || 20;
      const withdrawalAcres = Number(data.withdrawalAcres) || 0;
      const forestType = data.forestType || "Mixed Wood ($408/acre)";
      
      // Determine per-acre value
      let perAcreValue = 408;
      if (forestType.includes("Softwood")) perAcreValue = 262;
      else if (forestType.includes("Hardwood")) perAcreValue = 532;
      else if (forestType.includes("Uninhabitable")) perAcreValue = 23;
      
      const treeGrowthValue = acres * perAcreValue;
      const treeGrowthTax = (treeGrowthValue / 1000) * taxRate;
      const regularTax = (marketValue / 1000) * taxRate;
      const savings = regularTax - treeGrowthTax;
      
      // Estimate withdrawal penalty (simplified - actual calculation is complex)
      // Assumes withdrawal penalty is roughly 5 years of tax differential plus 20% penalty
      const withdrawalValuePerAcre = withdrawalAcres > 0 ? marketValue / acres : 0;
      const fiveYearDifferential = withdrawalAcres * ((withdrawalValuePerAcre - perAcreValue) / 1000) * taxRate * 5;
      const penaltyAmount = fiveYearDifferential * 1.20; // Add 20% penalty

      return [
        { label: "Tree Growth Assessed Value", value: treeGrowthValue, isCurrency: true },
        { label: "Tree Growth Annual Tax", value: treeGrowthTax, isCurrency: true },
        { label: "Regular Tax (Market Value)", value: regularTax, isCurrency: true },
        { label: "Annual Tax Savings", value: savings, isCurrency: true },
        { label: "Estimated Withdrawal Penalty", value: withdrawalAcres > 0 ? penaltyAmount : 0, isCurrency: true },
      ];
    },
  },
};
