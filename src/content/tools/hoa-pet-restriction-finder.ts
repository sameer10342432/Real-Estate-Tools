import { CalculatorContent } from '@/types';

export const HOA_PET_RESTRICTION_FINDER_CONTENT: CalculatorContent = {
  title: 'HOA Pet Restriction Finder',
  description: 'Analyze HOA pet policies, breed restrictions, size limits, and pet-related fees',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'hoa-pet-restriction-finder',
  article: {
    title: "Understanding HOA Pet Restrictions and Policies",
    content: `
    <h2>What are HOA Pet Restrictions?</h2>
    <p>HOA pet restrictions are rules governing pet ownership in planned communities, condos, and townhomes. These restrictions can include breed bans, weight limits, quantity limits, and pet-related fees that homeowners must comply with.</p>
    
    <h3>Common HOA Pet Restrictions</h3>
    <ul>
      <li><strong>Breed Restrictions:</strong> Bans on "aggressive" breeds like Pit Bulls, Rottweilers, German Shepherds</li>
      <li><strong>Weight Limits:</strong> Common limits of 25-50 lbs per pet</li>
      <li><strong>Pet Quantity:</strong> Usually 1-2 pets maximum per unit</li>
      <li><strong>Pet Deposits:</strong> One-time fees of $200-$500 per pet</li>
      <li><strong>Monthly Pet Rent:</strong> $25-$50 per pet per month</li>
      <li><strong>Leash Requirements:</strong> Pets must be on leash in common areas</li>
      <li><strong>Pet Waste Rules:</strong> Owners must clean up after pets</li>
      <li><strong>Noise Restrictions:</strong> Excessive barking prohibited</li>
    </ul>
    
    <h3>Service Animals vs. Pets</h3>
    <p>Important distinction: HOAs cannot restrict legitimate service animals under the Americans with Disabilities Act (ADA) or emotional support animals (ESAs) under the Fair Housing Act (FHA), even if they have pet restrictions. However, ESAs may require documentation from a healthcare provider.</p>
    
    <h3>Financial Impact of Pet Restrictions</h3>
    <ul>
      <li><strong>Pet Deposits:</strong> Typically non-refundable fees added to closing costs</li>
      <li><strong>Monthly Pet Fees:</strong> Add $25-$100/month to HOA dues</li>
      <li><strong>Violation Fines:</strong> $100-$500 per violation for unauthorized pets</li>
      <li><strong>Resale Impact:</strong> Pet-friendly communities may have higher demand from pet owners</li>
    </ul>
    
    <h3>Key Considerations for Pet Owners</h3>
    <ul>
      <li><strong>Review CC&Rs:</strong> Read pet policies before purchasing</li>
      <li><strong>DNA Testing:</strong> Some HOAs require pet DNA registration for waste enforcement</li>
      <li><strong>Pet Registration:</strong> Register pets with HOA within specified timeframe</li>
      <li><strong>Changing Rules:</strong> HOAs can modify pet policies; attend board meetings</li>
      <li><strong>Insurance:</strong> Some breeds may increase homeowners insurance costs</li>
      <li><strong>Common Area Access:</strong> Restrictions on where pets can walk/play</li>
    </ul>
    
    <h3>Legal Protections</h3>
    <p>While HOAs have broad authority to restrict pets, they cannot discriminate against service animals or violate fair housing laws. Some states provide additional protections for pet owners, so check local regulations.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "petWeight",
        label: "Pet Weight (lbs)",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "numberOfPets",
        label: "Number of Pets",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "hoaWeightLimit",
        label: "HOA Weight Limit (lbs)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "hoaPetLimit",
        label: "HOA Pet Quantity Limit",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "petDeposit",
        label: "Pet Deposit (per pet)",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "monthlyPetFee",
        label: "Monthly Pet Fee (per pet)",
        type: "number",
        placeholder: "35",
        defaultValue: "35",
      },
    ],
    results: [
      { label: "Weight Limit Compliance", isCurrency: false },
      { label: "Quantity Limit Compliance", isCurrency: false },
      { label: "Total Pet Deposit", isCurrency: true },
      { label: "Monthly Pet Fees", isCurrency: true },
      { label: "Annual Pet Costs", isCurrency: true },
      { label: "10-Year Pet Ownership Cost", isCurrency: true },
      { label: "Compliance Status", isCurrency: false },
    ],
    calculate: (data: any) => {
      const petWeight = Number(data.petWeight) || 0;
      const numberOfPets = Number(data.numberOfPets) || 0;
      const hoaWeightLimit = Number(data.hoaWeightLimit) || 0;
      const hoaPetLimit = Number(data.hoaPetLimit) || 0;
      const petDeposit = Number(data.petDeposit) || 0;
      const monthlyPetFee = Number(data.monthlyPetFee) || 0;

      const weightCompliant = petWeight <= hoaWeightLimit;
      const quantityCompliant = numberOfPets <= hoaPetLimit;
      
      const weightStatus = weightCompliant ? "✓ Compliant" : "✗ Exceeds Limit";
      const quantityStatus = quantityCompliant ? "✓ Compliant" : "✗ Exceeds Limit";
      
      const totalDeposit = petDeposit * numberOfPets;
      const monthlyFees = monthlyPetFee * numberOfPets;
      const annualCost = monthlyFees * 12;
      const tenYearCost = totalDeposit + (annualCost * 10);
      
      let complianceStatus = "Full Compliance";
      if (!weightCompliant && !quantityCompliant) {
        complianceStatus = "Non-Compliant (Weight & Quantity)";
      } else if (!weightCompliant) {
        complianceStatus = "Non-Compliant (Weight Exceeds Limit)";
      } else if (!quantityCompliant) {
        complianceStatus = "Non-Compliant (Too Many Pets)";
      }

      return [
        { label: "Weight Limit Compliance", value: weightStatus, isCurrency: false },
        { label: "Quantity Limit Compliance", value: quantityStatus, isCurrency: false },
        { label: "Total Pet Deposit", value: `${totalDeposit.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Pet Fees", value: `${monthlyFees.toFixed(2)}`, isCurrency: true },
        { label: "Annual Pet Costs", value: `${annualCost.toFixed(2)}`, isCurrency: true },
        { label: "10-Year Pet Ownership Cost", value: `${tenYearCost.toFixed(2)}`, isCurrency: true },
        { label: "Compliance Status", value: complianceStatus, isCurrency: false },
      ];
    },
  },
};
