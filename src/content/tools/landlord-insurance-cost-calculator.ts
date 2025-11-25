import { CalculatorContent } from '@/types';

export const LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Landlord Insurance Cost Calculator',
  description: 'Calculate landlord insurance premiums for rental properties including property damage, liability coverage, and loss of rental income protection',
  icon: 'Icon',
  category: 'Insurance & Protection',
  slug: 'landlord-insurance-cost-calculator',
  article: {
    title: "Understanding Landlord Insurance Costs",
    content: `
    <h2>Understanding Landlord Insurance Costs</h2>
    <p>Landlord insurance (also called rental property insurance or dwelling fire insurance) provides specialized coverage for investment properties. Premiums typically run 15-25% higher than standard homeowners insurance due to increased risks.</p>
    
    <h3>What Does Landlord Insurance Cover?</h3>
    <p>Comprehensive landlord insurance includes:</p>
    <ul>
      <li><strong>Property Damage:</strong> Structure, built-in appliances, and building systems</li>
      <li><strong>Liability Protection:</strong> Legal defense and settlements for tenant injuries ($300K-$1M)</li>
      <li><strong>Loss of Rental Income:</strong> Reimbursement if property becomes uninhabitable (typically 6-12 months)</li>
      <li><strong>Legal Expenses:</strong> Eviction costs and tenant disputes</li>
      <li><strong>Fair Rental Value:</strong> Coverage if you need temporary housing during repairs</li>
    </ul>
    
    <h3>Premium Calculation Factors</h3>
    <ul>
      <li><strong>Property Value:</strong> Replacement cost drives base premium</li>
      <li><strong>Location:</strong> Crime rates, weather risk, and local building costs affect pricing</li>
      <li><strong>Property Type:</strong> Single-family homes cost less than multi-unit buildings</li>
      <li><strong>Tenant Type:</strong> Long-term rentals have lower premiums than short-term/vacation rentals</li>
      <li><strong>Coverage Limits:</strong> Higher liability limits increase premiums 10-30%</li>
      <li><strong>Deductible:</strong> $1,000-$5,000 deductible can reduce premiums 15-35%</li>
      <li><strong>Claims History:</strong> Prior claims increase rates 20-50%</li>
      <li><strong>Property Age:</strong> Older properties (30+ years) pay 25-40% more</li>
    </ul>
    
    <h3>Average Landlord Insurance Costs</h3>
    <p><strong>Single-Family Home:</strong> $1,200-$2,500/year ($100-$208/month)</p>
    <p><strong>Duplex:</strong> $1,800-$3,500/year ($150-$292/month)</p>
    <p><strong>Triplex/Fourplex:</strong> $2,500-$5,000/year ($208-$417/month)</p>
    <p><strong>Vacation Rental:</strong> $2,000-$4,000/year (50-100% premium over long-term rental)</p>
    
    <h3>Coverage Types</h3>
    <p><strong>DP-1 (Basic Form):</strong> Named perils only - cheapest but limited coverage</p>
    <p><strong>DP-2 (Broad Form):</strong> Broader named perils coverage - mid-tier pricing</p>
    <p><strong>DP-3 (Special Form):</strong> "All-risk" coverage except exclusions - most comprehensive and expensive</p>
    
    <h3>Optional Add-Ons (Increase Premium 10-50%)</h3>
    <ul>
      <li><strong>Ordinance and Law Coverage:</strong> Upgrades required by new building codes</li>
      <li><strong>Equipment Breakdown:</strong> HVAC, water heater, appliances</li>
      <li><strong>Flood Insurance:</strong> Separate NFIP policy ($400-$2,000/year)</li>
      <li><strong>Earthquake Coverage:</strong> Separate policy (1-15% of property value)</li>
      <li><strong>Umbrella Policy:</strong> Extra liability protection ($150-$300/year per $1M)</li>
    </ul>
    
    <h3>When is Landlord Insurance Required?</h3>
    <p><strong>Always Required:</strong> By mortgage lenders if property has a loan</p>
    <p><strong>Highly Recommended:</strong> Even for properties owned free and clear</p>
    <p><strong>Legally Mandated:</strong> Some states require minimum liability coverage for rental properties</p>
    
    <h3>Cost-Saving Strategies</h3>
    <p><strong>Bundle Policies:</strong> Insure multiple properties with same carrier for 15-25% multi-policy discount</p>
    <p><strong>Increase Deductible:</strong> Raising deductible from $1,000 to $5,000 can save 20-30% annually</p>
    <p><strong>Pay Annually:</strong> Avoid monthly payment fees (typically 5-10% surcharge)</p>
    <p><strong>Tenant Screening:</strong> Quality tenants = fewer claims = lower premiums over time</p>
    <p><strong>Security Features:</strong> Security systems, deadbolts, fire alarms can reduce premiums 5-15%</p>
    <p><strong>Claims-Free Discount:</strong> 3-5 years without claims earns 10-20% discount</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Value (Replacement Cost)",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          { value: "single", label: "Single-Family Home" },
          { value: "duplex", label: "Duplex" },
          { value: "triplex", label: "Triplex/Fourplex" },
          { value: "vacation", label: "Vacation/Short-Term Rental" },
        ],
        defaultValue: "single",
      },
      {
        name: "coverageType",
        label: "Coverage Level",
        type: "select",
        options: [
          { value: "dp1", label: "DP-1 (Basic)" },
          { value: "dp2", label: "DP-2 (Broad)" },
          { value: "dp3", label: "DP-3 (Special/All-Risk)" },
        ],
        defaultValue: "dp3",
      },
      {
        name: "liabilityCoverage",
        label: "Liability Coverage",
        type: "select",
        options: [
          { value: "300000", label: "$300,000" },
          { value: "500000", label: "$500,000" },
          { value: "1000000", label: "$1,000,000" },
        ],
        defaultValue: "500000",
      },
      {
        name: "deductible",
        label: "Deductible Amount",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "lossOfIncomeMonths",
        label: "Loss of Income Coverage (Months)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "propertyAge",
        label: "Property Age (Years)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
    ],
    results: [
      { label: "Estimated Annual Premium", isCurrency: true },
      { label: "Monthly Premium", isCurrency: true },
      { label: "Premium as % of Property Value", isCurrency: false },
      { label: "Liability Coverage", isCurrency: true },
      { label: "Deductible (Per Claim)", isCurrency: true },
      { label: "Cost Compared to Homeowners", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const propertyType = data.propertyType || "single";
      const coverageType = data.coverageType || "dp3";
      const liabilityCoverage = Number(data.liabilityCoverage) || 500000;
      const deductible = Number(data.deductible) || 0;
      const lossOfIncomeMonths = Number(data.lossOfIncomeMonths) || 12;
      const propertyAge = Number(data.propertyAge) || 0;
      
      let baseRate = 0.006;
      
      if (propertyType === "single") {
        baseRate = 0.006;
      } else if (propertyType === "duplex") {
        baseRate = 0.008;
      } else if (propertyType === "triplex") {
        baseRate = 0.01;
      } else if (propertyType === "vacation") {
        baseRate = 0.012;
      }
      
      let coverageMultiplier = 1.0;
      if (coverageType === "dp1") {
        coverageMultiplier = 0.75;
      } else if (coverageType === "dp2") {
        coverageMultiplier = 0.9;
      } else {
        coverageMultiplier = 1.0;
      }
      
      let liabilityFee = 0;
      if (liabilityCoverage >= 1000000) {
        liabilityFee = 200;
      } else if (liabilityCoverage >= 500000) {
        liabilityFee = 100;
      } else {
        liabilityFee = 50;
      }
      
      let deductibleDiscount = 1.0;
      if (deductible >= 5000) {
        deductibleDiscount = 0.7;
      } else if (deductible >= 2500) {
        deductibleDiscount = 0.85;
      } else if (deductible >= 1000) {
        deductibleDiscount = 0.95;
      }
      
      const lossOfIncomeFee = lossOfIncomeMonths * 15;
      
      let ageMultiplier = 1.0;
      if (propertyAge >= 30) {
        ageMultiplier = 1.35;
      } else if (propertyAge >= 20) {
        ageMultiplier = 1.2;
      } else if (propertyAge >= 10) {
        ageMultiplier = 1.05;
      }
      
      const basePremium = propertyValue * baseRate * coverageMultiplier * deductibleDiscount * ageMultiplier;
      const annualPremium = basePremium + liabilityFee + lossOfIncomeFee;
      const monthlyPremium = annualPremium / 12;
      const premiumPercentage = (annualPremium / propertyValue) * 100;
      const homeownersPremium = propertyValue * 0.0035;
      const comparisonPercentage = ((annualPremium - homeownersPremium) / homeownersPremium) * 100;

      return [
        { label: "Estimated Annual Premium", value: `${annualPremium.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Premium", value: `${monthlyPremium.toFixed(2)}`, isCurrency: true },
        { label: "Premium as % of Property Value", value: `${premiumPercentage.toFixed(2)}%`, isCurrency: false },
        { label: "Liability Coverage", value: `${liabilityCoverage.toFixed(2)}`, isCurrency: true },
        { label: "Deductible (Per Claim)", value: `${deductible.toFixed(2)}`, isCurrency: true },
        { label: "Cost Compared to Homeowners", value: `+${comparisonPercentage.toFixed(0)}% higher`, isCurrency: false },
      ];
    },
  },
};
