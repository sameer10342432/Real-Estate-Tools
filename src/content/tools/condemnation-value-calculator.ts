import { CalculatorContent } from '@/types';

export const CONDEMNATION_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Condemnation Value Calculator',
  description: 'Calculate fair compensation for condemned property including building value, land value, and relocation expenses',
  icon: 'Icon',
  category: 'Legal & Contracts',
  slug: 'condemnation-value-calculator',
  article: {
    title: "Property Condemnation: Understanding Your Rights and Compensation",
    content: `
    <h2>What is Property Condemnation?</h2>
    <p>Property condemnation occurs when a government authority declares a property unfit for use or takes it for public purposes. There are two main types: regulatory condemnation (property deemed unsafe/uninhabitable) and eminent domain condemnation (government taking for public use). This calculator focuses on eminent domain condemnation compensation.</p>
    
    <h3>Types of Condemnation Actions</h3>
    <p><strong>1. Direct Condemnation (Eminent Domain):</strong> Government takes property for public use</p>
    <ul>
      <li>Roads, highways, infrastructure projects</li>
      <li>Public buildings, schools, parks</li>
      <li>Utilities, pipelines, power lines</li>
      <li>Owner entitled to "just compensation"</li>
    </ul>
    
    <p><strong>2. Inverse Condemnation:</strong> Government action renders property unusable</p>
    <ul>
      <li>Government doesn't formally take property</li>
      <li>But actions destroy value (flooding, access blockage)</li>
      <li>Owner initiates lawsuit claiming compensation</li>
      <li>Burden on owner to prove government responsibility</li>
    </ul>
    
    <p><strong>3. Regulatory Taking:</strong> Regulations eliminate all economic use</p>
    <ul>
      <li>Zoning changes that prohibit current use</li>
      <li>Environmental restrictions (wetlands, endangered species)</li>
      <li>May require compensation if "too far"</li>
      <li>Complex legal analysis required</li>
    </ul>
    
    <h3>Components of Just Compensation</h3>
    <p><strong>Primary Elements You're Entitled To:</strong></p>
    
    <p><strong>1. Fair Market Value:</strong> What willing buyer would pay willing seller</p>
    <ul>
      <li>Based on highest and best use of property</li>
      <li>Not limited to current use if property has development potential</li>
      <li>Measured at date of taking, not original notice</li>
      <li>Includes land + improvements</li>
    </ul>
    
    <p><strong>2. Fixtures & Improvements:</strong> All attached property value</p>
    <ul>
      <li>Buildings, structures, sheds, garages</li>
      <li>Landscaping, fences, paving</li>
      <li>Wells, septic systems, utilities</li>
      <li>Irrigation systems, agricultural improvements</li>
    </ul>
    
    <p><strong>3. Business/Trade Fixtures:</strong> Equipment attached to property</p>
    <ul>
      <li>Built-in shelving, display cases</li>
      <li>Installed machinery and equipment</li>
      <li>HVAC systems, specialized electrical</li>
      <li>Some states include removable equipment</li>
    </ul>
    
    <p><strong>4. Consequential Damages:</strong> Harm beyond property taken</p>
    <ul>
      <li><strong>Severance Damages:</strong> Loss in value to remaining property (partial taking)</li>
      <li><strong>Business Interruption:</strong> Lost profits during relocation (some states)</li>
      <li><strong>Goodwill Loss:</strong> Customer base tied to location (limited states)</li>
      <li><strong>Increased Operating Costs:</strong> New location more expensive (rare)</li>
    </ul>
    
    <h3>Relocation Benefits (Federal/State Programs)</h3>
    <p>If condemnation displaces you, additional benefits may include:</p>
    
    <p><strong>Residential Displacement:</strong></p>
    <ul>
      <li><strong>Moving Expenses:</strong> $1,000-$5,000 for household goods</li>
      <li><strong>Replacement Housing Payment:</strong> Up to $31,000 for price differential</li>
      <li><strong>Rental Assistance:</strong> Up to $7,200 for increased rent (42 months)</li>
      <li><strong>Last Resort Housing:</strong> Additional funds if comparable housing unavailable</li>
    </ul>
    
    <p><strong>Business/Farm Displacement:</strong></p>
    <ul>
      <li><strong>Moving Costs:</strong> Actual costs to move equipment, inventory, fixtures</li>
      <li><strong>Re-establishment Expenses:</strong> Up to $10,000 for new location setup</li>
      <li><strong>Lost Goodwill Payment:</strong> Alternative to moving (varies by state)</li>
      <li><strong>Fixture Replacement:</strong> Costs to reinstall attached equipment</li>
      <li><strong>Business Consultant Fees:</strong> For site selection, planning</li>
    </ul>
    
    <h3>Partial Taking: Special Considerations</h3>
    <p>When only part of your property is condemned:</p>
    
    <p><strong>Before and After Valuation Method:</strong></p>
    <ul>
      <li>Step 1: Appraise entire property before taking</li>
      <li>Step 2: Appraise remaining property after taking</li>
      <li>Step 3: Difference = Total compensation owed</li>
      <li>Example: $500K before - $300K after = $200K compensation</li>
    </ul>
    
    <p><strong>Factors Causing Severance Damage:</strong></p>
    <ul>
      <li>Loss of access or frontage</li>
      <li>Irregular shape of remainder</li>
      <li>Violation of zoning setbacks</li>
      <li>Inadequate size for intended use</li>
      <li>Loss of parking or loading areas</li>
      <li>Noise/pollution from new public use</li>
    </ul>
    
    <h3>Appraisal Process</h3>
    <p><strong>Government Appraisal:</strong></p>
    <ul>
      <li>Conducted by state/federal appraiser</li>
      <li>Forms basis for initial offer</li>
      <li>Often conservative (70-85% of true value)</li>
      <li>May not fully account for highest/best use</li>
    </ul>
    
    <p><strong>Independent Appraisal (Your Rights):</strong></p>
    <ul>
      <li>Hire MAI-certified appraiser at your expense</li>
      <li>Typically finds 10-30% more value than government</li>
      <li>Cost: $3,000-$15,000+ depending on complexity</li>
      <li>Essential for challenging low offers</li>
    </ul>
    
    <h3>Timeline and Process</h3>
    <p><strong>Phase 1: Pre-Condemnation (3-12 months)</strong></p>
    <ul>
      <li>Government studies and plans project</li>
      <li>Property identified for acquisition</li>
      <li>Initial contact with property owner</li>
    </ul>
    
    <p><strong>Phase 2: Negotiation (2-6 months)</strong></p>
    <ul>
      <li>Government appraisal completed</li>
      <li>Formal written offer made</li>
      <li>Owner considers, negotiates, or rejects</li>
      <li>Settlement possible at this stage</li>
    </ul>
    
    <p><strong>Phase 3: Legal Action (6-24 months)</strong></p>
    <ul>
      <li>Government files condemnation lawsuit</li>
      <li>Discovery, depositions, expert reports</li>
      <li>Often settle before trial</li>
      <li>Trial if no settlement reached</li>
    </ul>
    
    <p><strong>Phase 4: Resolution</strong></p>
    <ul>
      <li>Court verdict or settlement agreement</li>
      <li>Government deposits funds, takes possession</li>
      <li>Owner vacates property</li>
    </ul>
    
    <h3>When to Hire Legal Representation</h3>
    <p><strong>HIRE ATTORNEY IF:</strong></p>
    <ul>
      <li>✓ Property value exceeds $100,000</li>
      <li>✓ Government offer is more than 20% below your estimate</li>
      <li>✓ Partial taking with complex severance damages</li>
      <li>✓ Business relocation involved</li>
      <li>✓ Income-producing or commercial property</li>
      <li>✓ Unique property without good comparables</li>
    </ul>
    
    <p><strong>Legal Costs to Expect:</strong></p>
    <ul>
      <li>Attorney fees: $10,000-$100,000 (hourly or contingency)</li>
      <li>Expert appraisal: $5,000-$20,000</li>
      <li>Engineering/environmental studies: $3,000-$15,000</li>
      <li>Trial experts: $5,000-$25,000</li>
      <li>NOTE: Many states allow fee recovery if you prevail substantially</li>
    </ul>
    
    <h3>Challenging the Government Offer</h3>
    <p><strong>Common Undervaluation Issues:</strong></p>
    <ul>
      <li>Government used old comparable sales</li>
      <li>Didn't recognize highest and best use</li>
      <li>Failed to account for special features</li>
      <li>Inadequate severance damage calculation</li>
      <li>Ignored recent improvements</li>
      <li>Business value not properly considered</li>
    </ul>
    
    <p><strong>Building Your Case:</strong></p>
    <ul>
      <li>1. Get independent professional appraisal</li>
      <li>2. Research recent comparable sales yourself</li>
      <li>3. Document all property improvements with photos, receipts</li>
      <li>4. Calculate true severance damages (before/after method)</li>
      <li>5. Itemize all relocation costs and business impacts</li>
      <li>6. Hire eminent domain attorney early in process</li>
    </ul>
    
    <h3>Tax Implications</h3>
    <ul>
      <li><strong>Involuntary Conversion:</strong> IRS Section 1033 applies</li>
      <li><strong>Gain Calculation:</strong> Compensation - Adjusted Basis = Gain</li>
      <li><strong>Tax Deferral:</strong> Can defer by buying replacement property within 2-3 years</li>
      <li><strong>Principal Residence:</strong> $250K/$500K exclusion may apply</li>
      <li><strong>Severance Payments:</strong> May be tax-free as compensation for damages</li>
      <li><strong>Relocation Benefits:</strong> Generally not taxable income</li>
    </ul>
    
    <h3>Special Situations</h3>
    <p><strong>Historic Properties:</strong> May be entitled to premium for historic value</p>
    <p><strong>Contaminated Property:</strong> Government must still pay fair value (pre-contamination)</p>
    <p><strong>Leased Property:</strong> Both landlord and tenant have compensation rights</p>
    <p><strong>Family Farm:</strong> Additional relocation benefits and considerations</p>
    <p><strong>Affordable Housing:</strong> Special relocation protections for low-income tenants</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "landValue",
        label: "Land Value",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "buildingValue",
        label: "Building/Improvement Value",
        type: "number",
        placeholder: "250000",
        defaultValue: "250000",
      },
      {
        name: "fixturesValue",
        label: "Business Fixtures & Equipment Value",
        type: "number",
        placeholder: "30000",
        defaultValue: "0",
      },
      {
        name: "isPartialTaking",
        label: "Is this a partial taking? (1 = Yes, 0 = No)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "severanceDamage",
        label: "Severance Damage to Remainder (if partial)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "movingCosts",
        label: "Moving/Relocation Costs",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "businessRelocation",
        label: "Business Re-establishment Costs",
        type: "number",
        placeholder: "15000",
        defaultValue: "0",
      },
      {
        name: "replacementHousingDiff",
        label: "Replacement Housing Price Differential",
        type: "number",
        placeholder: "25000",
        defaultValue: "0",
      },
      {
        name: "governmentOffer",
        label: "Government's Offer",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
    ],
    results: [
      { label: "Total Property Value (Land + Buildings)", isCurrency: true },
      { label: "Severance Damages (if partial taking)", isCurrency: true },
      { label: "Total Property Compensation", isCurrency: true },
      { label: "Relocation Benefits", isCurrency: true },
      { label: "Total Just Compensation", isCurrency: true },
      { label: "Government's Offer", isCurrency: true },
      { label: "Potential Additional Recovery", isCurrency: true },
      { label: "Compensation Gap (%)", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const landValue = Number(data.landValue) || 0;
      const buildingValue = Number(data.buildingValue) || 0;
      const fixturesValue = Number(data.fixturesValue) || 0;
      const isPartialTaking = Number(data.isPartialTaking) || 0;
      const severanceDamage = Number(data.severanceDamage) || 0;
      const movingCosts = Number(data.movingCosts) || 0;
      const businessRelocation = Number(data.businessRelocation) || 0;
      const replacementHousingDiff = Number(data.replacementHousingDiff) || 0;
      const governmentOffer = Number(data.governmentOffer) || 0;
      
      // Total property value
      const totalPropertyValue = landValue + buildingValue + fixturesValue;
      
      // Apply severance damages if partial taking
      const severanceDamages = isPartialTaking === 1 ? severanceDamage : 0;
      
      // Total property compensation
      const totalPropertyCompensation = totalPropertyValue + severanceDamages;
      
      // Relocation benefits
      const totalRelocationBenefits = movingCosts + businessRelocation + replacementHousingDiff;
      
      // Total just compensation
      const totalJustCompensation = totalPropertyCompensation + totalRelocationBenefits;
      
      // Gap analysis
      const additionalRecovery = totalJustCompensation - governmentOffer;
      const compensationGap = governmentOffer > 0 ? ((additionalRecovery / governmentOffer) * 100) : 0;
      
      let recommendation = "";
      if (compensationGap > 30) {
        recommendation = "🚨 URGENT: Government offer severely undervalues property - hire attorney immediately";
      } else if (compensationGap > 20) {
        recommendation = "✅ STRONGLY RECOMMENDED: Significant undercompensation - legal representation advised";
      } else if (compensationGap > 10) {
        recommendation = "💡 Recommended: Consider hiring attorney - substantial recovery possible";
      } else if (compensationGap > 5) {
        recommendation = "⚖️ Marginal: Try negotiating directly before hiring attorney";
      } else if (compensationGap >= 0) {
        recommendation = "✓ Government offer appears reasonable - minor negotiation may help";
      } else {
        recommendation = "✅ Government offer is fair or generous - consider accepting";
      }

      return [
        { label: "Total Property Value (Land + Buildings)", value: `${totalPropertyValue.toFixed(2)}`, isCurrency: true },
        { label: "Severance Damages (if partial taking)", value: `${severanceDamages.toFixed(2)}`, isCurrency: true },
        { label: "Total Property Compensation", value: `${totalPropertyCompensation.toFixed(2)}`, isCurrency: true },
        { label: "Relocation Benefits", value: `${totalRelocationBenefits.toFixed(2)}`, isCurrency: true },
        { label: "Total Just Compensation", value: `${totalJustCompensation.toFixed(2)}`, isCurrency: true },
        { label: "Government's Offer", value: `${governmentOffer.toFixed(2)}`, isCurrency: true },
        { label: "Potential Additional Recovery", value: `${additionalRecovery.toFixed(2)}`, isCurrency: true },
        { label: "Compensation Gap (%)", value: `${compensationGap.toFixed(2)}%`, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};