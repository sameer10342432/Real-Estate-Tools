import { CalculatorContent } from '@/types';

export const PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Prescriptive Easement Analyzer - Evaluate Easement by Prescription Claims',
  description: 'Analyze prescriptive easement claims based on continuous use period, state requirements, and legal eligibility for establishing property access rights through adverse use',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'prescriptive-easement-analyzer',
  article: {
    title: "Prescriptive Easement Analyzer: Acquiring Rights Through Use",
    content: `
    <h2>What is a Prescriptive Easement?</h2>
    <p>A prescriptive easement is a legal right to use someone else's property, acquired through open, continuous, and hostile use for a statutory period (typically 7-20 years depending on state). It's similar to adverse possession, but only grants use rights, not ownership.</p>
    
    <h3>Requirements for Prescriptive Easement</h3>
    <p>To establish a prescriptive easement, use must be:</p>
    
    <p><strong>1. Open and Notorious</strong></p>
    <ul>
      <li>Use is visible and obvious, not secret or hidden</li>
      <li>Property owner could reasonably discover the use</li>
      <li>Example: Driving across land in plain view</li>
    </ul>
    
    <p><strong>2. Continuous and Uninterrupted</strong></p>
    <ul>
      <li>Use must continue for entire statutory period</li>
      <li>Regular, consistent use (doesn't need to be daily)</li>
      <li>Breaks in use can restart the clock</li>
      <li>Use pattern similar to how an easement holder would use it</li>
    </ul>
    
    <p><strong>3. Hostile (Adverse)</strong></p>
    <ul>
      <li>Use is without owner's permission</li>
      <li>Permissive use does NOT create prescriptive rights</li>
      <li>Owner's protest or "no trespassing" signs can prevent claim</li>
      <li>"Hostile" doesn't mean aggressive - just without permission</li>
    </ul>
    
    <p><strong>4. Exclusive to Claimant</strong></p>
    <ul>
      <li>Use by claimant, not shared with general public</li>
      <li>Claimant uses as if they had legal right</li>
      <li>Public roads or paths don't qualify</li>
    </ul>
    
    <h3>State-Specific Statutory Periods</h3>
    <p>Time required for prescriptive easement varies by state:</p>
    <ul>
      <li><strong>7 Years:</strong> Florida, Montana</li>
      <li><strong>10 Years:</strong> Arizona, California, Colorado, Louisiana, New York, Pennsylvania, Texas</li>
      <li><strong>15 Years:</strong> Connecticut, Georgia, Kansas, Kentucky, Maryland, Massachusetts, North Carolina, Virginia</li>
      <li><strong>20 Years:</strong> Alabama, Illinois, Indiana, Michigan, Minnesota, Missouri, New Jersey, Ohio, Tennessee, Washington, Wisconsin</li>
      <li><strong>Varies:</strong> Some states have different periods for different circumstances</li>
    </ul>
    
    <h3>Common Prescriptive Easement Uses</h3>
    <ul>
      <li><strong>Access Roads:</strong> Driveway or road across neighbor's property</li>
      <li><strong>Pathways:</strong> Foot paths for accessing your property</li>
      <li><strong>Utilities:</strong> Power lines, water lines (less common)</li>
      <li><strong>Parking:</strong> Using portion of neighbor's land for parking</li>
    </ul>
    
    <h3>Preventing Prescriptive Easements</h3>
    <p>Property owners can prevent prescriptive easement claims by:</p>
    <ul>
      <li><strong>Posting "No Trespassing" Signs:</strong> Clearly mark property boundaries</li>
      <li><strong>Written Permission:</strong> Give written permission for use (makes it permissive, not hostile)</li>
      <li><strong>Gates and Locks:</strong> Physical barriers showing lack of consent</li>
      <li><strong>Objection Letters:</strong> Written objections to use sent to user</li>
      <li><strong>Legal Action:</strong> Sue for trespass within statutory period</li>
      <li><strong>Periodic Closure:</strong> Block access periodically (1 day/year often sufficient)</li>
    </ul>
    
    <h3>Establishing a Prescriptive Easement</h3>
    <p>To legally establish prescriptive easement:</p>
    <ol>
      <li><strong>Document Use History:</strong> Photos, witness statements, dated evidence</li>
      <li><strong>Hire Attorney:</strong> Experienced in easement law</li>
      <li><strong>Collect Evidence:</strong> Proof of continuous, open, hostile use</li>
      <li><strong>File Quiet Title Action:</strong> Court proceeding to establish easement</li>
      <li><strong>Prove All Elements:</strong> Must prove open, continuous, hostile, exclusive use</li>
      <li><strong>Court Judgment:</strong> Judge determines if easement exists</li>
      <li><strong>Record Easement:</strong> File court order in county land records</li>
    </ol>
    
    <h3>Defenses Against Prescriptive Easement Claims</h3>
    <p>Property owners can defend against claims by showing:</p>
    <ul>
      <li>Use was permissive (had owner's consent)</li>
      <li>Use was not continuous for full statutory period</li>
      <li>Use was not open and notorious</li>
      <li>Owner took steps to prevent use (gates, signs, objections)</li>
      <li>Use was shared with public (not exclusive)</li>
      <li>Statutory period was interrupted</li>
    </ul>
    
    <h3>Important Distinctions</h3>
    <p><strong>Prescriptive Easement vs. Adverse Possession:</strong></p>
    <ul>
      <li>Prescriptive easement: Right to use property (access, pathway)</li>
      <li>Adverse possession: Ownership of property</li>
      <li>Both require similar elements, but adverse possession is harder to prove</li>
    </ul>
    
    <h3>Legal Costs</h3>
    <ul>
      <li><strong>Attorney Fees:</strong> $5,000-$25,000 for quiet title action</li>
      <li><strong>Survey Costs:</strong> $2,000-$5,000 to define easement boundaries</li>
      <li><strong>Expert Witnesses:</strong> $2,000-$10,000 if needed</li>
      <li><strong>Court Costs:</strong> $500-$2,000 filing and administrative fees</li>
      <li><strong>Total Typical Cost:</strong> $10,000-$40,000+</li>
    </ul>
    
    <h3>Considerations Before Claiming</h3>
    <ul>
      <li>Litigation is expensive and uncertain</li>
      <li>May damage neighbor relationships</li>
      <li>Consider negotiating purchase of easement instead</li>
      <li>Court may grant easement but require compensation</li>
      <li>Burden of proof is on claimant</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "yearsOfUse",
        label: "Years of Continuous Use",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "stateRequirement",
        label: "State Statutory Requirement (Years)",
        type: "select",
        options: [
          { value: "7", label: "7 Years (FL, MT)" },
          { value: "10", label: "10 Years (AZ, CA, CO, LA, NY, PA, TX)" },
          { value: "15", label: "15 Years (CT, GA, KS, KY, MD, MA, NC, VA)" },
          { value: "20", label: "20 Years (AL, IL, IN, MI, MN, MO, NJ, OH, TN, WA, WI)" },
        ],
        defaultValue: "15",
      },
      {
        name: "hasPermission",
        label: "Use With Owner Permission?",
        type: "select",
        options: [
          { value: "no", label: "No - Hostile Use" },
          { value: "yes", label: "Yes - Permissive Use" },
        ],
        defaultValue: "no",
      },
      {
        name: "isOpenNotorious",
        label: "Use is Open and Obvious?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        defaultValue: "yes",
      },
      {
        name: "isContinuous",
        label: "Use is Continuous and Regular?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [
      { label: "Statutory Requirement Met?", isCurrency: false },
      { label: "Years Required", isCurrency: false },
      { label: "Years Completed", isCurrency: false },
      { label: "Eligible for Claim?", isCurrency: false },
      { label: "Estimated Legal Costs", isCurrency: true },
    ],
    calculate: (data: any) => {
      const yearsOfUse = Number(data.yearsOfUse) || 0;
      const stateRequirement = Number(data.stateRequirement) || 15;
      const hasPermission = data.hasPermission === "yes";
      const isOpenNotorious = data.isOpenNotorious === "yes";
      const isContinuous = data.isContinuous === "yes";
      
      const requirementMet = yearsOfUse >= stateRequirement;
      const yearsRemaining = Math.max(0, stateRequirement - yearsOfUse);
      
      // Check if eligible based on all factors
      const isEligible = requirementMet && 
                        !hasPermission && 
                        isOpenNotorious && 
                        isContinuous;
      
      // Estimate legal costs
      const baseLegalCosts = 15000; // Average attorney fees
      const surveyCosts = 3000;
      const courtCosts = 1500;
      const totalLegalCosts = baseLegalCosts + surveyCosts + courtCosts;
      
      let eligibilityStatus = "";
      if (isEligible) {
        eligibilityStatus = "✅ Potentially Eligible - Consult Attorney";
      } else if (hasPermission) {
        eligibilityStatus = "❌ Not Eligible - Use is Permissive";
      } else if (!isOpenNotorious) {
        eligibilityStatus = "❌ Not Eligible - Use Not Open/Notorious";
      } else if (!isContinuous) {
        eligibilityStatus = "❌ Not Eligible - Use Not Continuous";
      } else {
        eligibilityStatus = `⏳ Not Yet - Need ${yearsRemaining} more years`;
      }

      return [
        { label: "Statutory Requirement Met?", value: requirementMet ? "✅ Yes" : `❌ No (${yearsRemaining} years remaining)`, isCurrency: false },
        { label: "Years Required", value: stateRequirement.toString(), isCurrency: false },
        { label: "Years Completed", value: yearsOfUse.toString(), isCurrency: false },
        { label: "Eligible for Claim?", value: eligibilityStatus, isCurrency: false },
        { label: "Estimated Legal Costs", value: `${totalLegalCosts.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
