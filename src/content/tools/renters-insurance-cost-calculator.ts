import { CalculatorContent } from '@/types';

export const RENTERS_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Renter's Insurance Cost Calculator",
  description: "Calculate renter's insurance premiums based on personal property value, liability coverage, and location to protect your belongings and liability exposure",
  icon: 'Icon',
  category: 'Insurance & Protection',
  slug: 'renters-insurance-cost-calculator',
  article: {
    title: "Understanding Renter's Insurance Costs",
    content: `
    <h2>Understanding Renter's Insurance Costs</h2>
    <p>Renter's insurance is one of the most affordable types of insurance, averaging $15-$30 per month nationwide. Despite low costs, nearly 60% of renters remain uninsured, leaving their belongings and liability exposure unprotected.</p>
    
    <h3>What Does Renter's Insurance Cover?</h3>
    <ul>
      <li><strong>Personal Property:</strong> Furniture, electronics, clothing, jewelry (up to coverage limit)</li>
      <li><strong>Liability Protection:</strong> Legal defense if someone is injured in your rental ($100K-$500K typical)</li>
      <li><strong>Additional Living Expenses (ALE):</strong> Hotel and food costs if rental becomes uninhabitable</li>
      <li><strong>Medical Payments:</strong> Guest injuries regardless of fault ($1,000-$5,000)</li>
      <li><strong>Loss of Use:</strong> Temporary housing during covered repairs</li>
    </ul>
    
    <h3>Average Renter's Insurance Costs by State (2024)</h3>
    <p><strong>Most Expensive States:</strong></p>
    <ul>
      <li>Louisiana: $258/year ($22/month)</li>
      <li>Mississippi: $247/year ($21/month)</li>
      <li>Oklahoma: $228/year ($19/month)</li>
      <li>Texas: $226/year ($19/month)</li>
    </ul>
    
    <p><strong>Least Expensive States:</strong></p>
    <ul>
      <li>Wyoming: $128/year ($11/month)</li>
      <li>South Dakota: $134/year ($11/month)</li>
      <li>Idaho: $140/year ($12/month)</li>
      <li>North Dakota: $147/year ($12/month)</li>
    </ul>
    
    <h3>Premium Calculation Factors</h3>
    <ul>
      <li><strong>Coverage Amount:</strong> $20K-$50K typical personal property limits</li>
      <li><strong>Deductible:</strong> $500-$2,000 (higher deductible = lower premium)</li>
      <li><strong>Location:</strong> Crime rate, weather risk, and state regulations</li>
      <li><strong>Liability Limit:</strong> $100K-$500K coverage</li>
      <li><strong>Claims History:</strong> Prior claims increase rates 20-40%</li>
      <li><strong>Building Features:</strong> Security systems, sprinklers, gated access reduce premiums</li>
      <li><strong>Pet Ownership:</strong> Dogs (especially certain breeds) can increase liability premium $25-$50/year</li>
    </ul>
    
    <h3>Common Coverage Limits</h3>
    <p><strong>Personal Property:</strong></p>
    <ul>
      <li>$15,000-$20,000: Basic coverage for minimal belongings</li>
      <li>$30,000-$40,000: Standard coverage for average renter</li>
      <li>$50,000-$75,000: High coverage for extensive possessions</li>
    </ul>
    
    <p><strong>Liability Coverage:</strong></p>
    <ul>
      <li>$100,000: Minimum recommended coverage</li>
      <li>$300,000: Standard coverage for most renters</li>
      <li>$500,000: High coverage for additional protection</li>
    </ul>
    
    <h3>What's NOT Covered</h3>
    <ul>
      <li><strong>Flooding:</strong> Requires separate NFIP flood policy ($400-$800/year)</li>
      <li><strong>Earthquakes:</strong> Separate earthquake coverage needed</li>
      <li><strong>Roommate's Belongings:</strong> Each roommate needs separate policy</li>
      <li><strong>Expensive Jewelry/Art:</strong> May need scheduled personal property rider</li>
      <li><strong>Business Equipment:</strong> Requires business insurance</li>
      <li><strong>Car Contents:</strong> Covered by auto insurance, not renters</li>
    </ul>
    
    <h3>Cost-Saving Strategies</h3>
    <p><strong>Bundle with Auto Insurance:</strong> Save 15-25% when combining policies</p>
    <p><strong>Increase Deductible:</strong> Raising from $500 to $1,000 can save 10-15% annually</p>
    <p><strong>Pay Annually:</strong> Avoid monthly payment fees (typically 5-8% surcharge)</p>
    <p><strong>Security Discounts:</strong> Smoke detectors, burglar alarms, deadbolts save 5-15%</p>
    <p><strong>Claims-Free Discount:</strong> 3+ years without claims earns 5-10% discount</p>
    <p><strong>Paperless/Auto-Pay:</strong> Save $5-$10/year with electronic billing</p>
    
    <h3>Do You Need Renter's Insurance?</h3>
    <p><strong>Required By:</strong> Many landlords now mandate renters insurance in lease agreements</p>
    <p><strong>Highly Recommended If:</strong></p>
    <ul>
      <li>Personal belongings worth more than 3 months' rent</li>
      <li>You have a pet (liability protection)</li>
      <li>You host guests frequently</li>
      <li>Building lacks modern fire/security systems</li>
      <li>You rent in high-crime or disaster-prone area</li>
    </ul>
    
    <h3>How Much Coverage Do You Need?</h3>
    <p>Create a home inventory of belongings to determine coverage amount. Most renters underestimate the replacement value of possessions by 40-50%. A typical one-bedroom apartment contains $20,000-$30,000 in personal property.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "personalProperty",
        label: "Personal Property Coverage",
        type: "number",
        placeholder: "30000",
        defaultValue: "30000",
      },
      {
        name: "liabilityCoverage",
        label: "Liability Coverage",
        type: "select",
        options: [
          { value: "100000", label: "$100,000" },
          { value: "300000", label: "$300,000" },
          { value: "500000", label: "$500,000" },
        ],
        defaultValue: "300000",
      },
      {
        name: "deductible",
        label: "Deductible Amount",
        type: "select",
        options: [
          { value: "500", label: "$500" },
          { value: "1000", label: "$1,000" },
          { value: "2000", label: "$2,000" },
        ],
        defaultValue: "1000",
      },
      {
        name: "stateRiskLevel",
        label: "State Risk Level",
        type: "select",
        options: [
          { value: "low", label: "Low Risk (WY, SD, ID)" },
          { value: "moderate", label: "Moderate Risk (Most States)" },
          { value: "high", label: "High Risk (LA, MS, OK, TX)" },
        ],
        defaultValue: "moderate",
      },
      {
        name: "buildingFeatures",
        label: "Building Security Features",
        type: "select",
        options: [
          { value: "basic", label: "Basic (No special features)" },
          { value: "standard", label: "Standard (Smoke detectors, deadbolts)" },
          { value: "enhanced", label: "Enhanced (Alarm system, gated access, sprinklers)" },
        ],
        defaultValue: "standard",
      },
      {
        name: "hasPet",
        label: "Do you have a pet (dog)?",
        type: "select",
        options: [
          { value: "no", label: "No Pet" },
          { value: "yes", label: "Yes - Pet Owner" },
        ],
        defaultValue: "no",
      },
    ],
    results: [
      { label: "Estimated Annual Premium", isCurrency: true },
      { label: "Monthly Premium", isCurrency: true },
      { label: "Premium per Day", isCurrency: true },
      { label: "Personal Property Coverage", isCurrency: true },
      { label: "Liability Protection", isCurrency: true },
      { label: "Deductible (Per Claim)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const personalProperty = Number(data.personalProperty) || 0;
      const liabilityCoverage = Number(data.liabilityCoverage) || 300000;
      const deductible = Number(data.deductible) || 1000;
      const stateRiskLevel = data.stateRiskLevel || "moderate";
      const buildingFeatures = data.buildingFeatures || "standard";
      const hasPet = data.hasPet || "no";
      
      let baseRate = 0.006;
      
      if (stateRiskLevel === "low") {
        baseRate = 0.0045;
      } else if (stateRiskLevel === "moderate") {
        baseRate = 0.006;
      } else {
        baseRate = 0.0085;
      }
      
      let liabilityFee = 0;
      if (liabilityCoverage >= 500000) {
        liabilityFee = 50;
      } else if (liabilityCoverage >= 300000) {
        liabilityFee = 30;
      } else {
        liabilityFee = 15;
      }
      
      let deductibleDiscount = 1.0;
      if (deductible >= 2000) {
        deductibleDiscount = 0.85;
      } else if (deductible >= 1000) {
        deductibleDiscount = 0.925;
      }
      
      let securityDiscount = 1.0;
      if (buildingFeatures === "enhanced") {
        securityDiscount = 0.85;
      } else if (buildingFeatures === "standard") {
        securityDiscount = 0.95;
      }
      
      const petSurcharge = hasPet === "yes" ? 35 : 0;
      
      const basePremium = personalProperty * baseRate * deductibleDiscount * securityDiscount;
      const annualPremium = basePremium + liabilityFee + petSurcharge;
      const monthlyPremium = annualPremium / 12;
      const dailyPremium = annualPremium / 365;

      return [
        { label: "Estimated Annual Premium", value: `${annualPremium.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Premium", value: `${monthlyPremium.toFixed(2)}`, isCurrency: true },
        { label: "Premium per Day", value: `${dailyPremium.toFixed(2)}`, isCurrency: true },
        { label: "Personal Property Coverage", value: `${personalProperty.toFixed(2)}`, isCurrency: true },
        { label: "Liability Protection", value: `${liabilityCoverage.toFixed(2)}`, isCurrency: true },
        { label: "Deductible (Per Claim)", value: `${deductible.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
