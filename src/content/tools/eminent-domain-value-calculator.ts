import { CalculatorContent } from '@/types';

export const EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Eminent Domain Value Calculator',
  description: 'Estimate fair market value and just compensation for property taken through eminent domain/condemnation',
  icon: 'Icon',
  category: 'Legal & Contracts',
  slug: 'eminent-domain-value-calculator',
  article: {
    title: "Understanding Eminent Domain and Just Compensation",
    content: `
    <h2>What is Eminent Domain?</h2>
    <p>Eminent domain is the power of the government to take private property for public use, with payment of "just compensation" to the owner. Also known as condemnation, this constitutional right (5th Amendment) allows federal, state, and local governments to acquire land for public projects like roads, schools, utilities, and infrastructure.</p>
    
    <h3>Types of Government Takings</h3>
    <p><strong>Complete Taking (Total Condemnation):</strong> Government acquires entire property</p>
    <ul>
      <li>Owner loses all rights to the property</li>
      <li>Entitled to full fair market value</li>
      <li>Must relocate business or residence</li>
    </ul>
    
    <p><strong>Partial Taking:</strong> Government acquires portion of property</p>
    <ul>
      <li>Owner retains remainder of property</li>
      <li>Compensated for land taken PLUS damages to remaining property</li>
      <li>Example: Highway takes front 50 feet of commercial lot</li>
    </ul>
    
    <p><strong>Temporary Taking:</strong> Government uses property for limited time</p>
    <ul>
      <li>Construction easement during project</li>
      <li>Compensation for rental value plus damages</li>
      <li>Property returned after temporary use</li>
    </ul>
    
    <p><strong>Easement/Right-of-Way:</strong> Government acquires limited use rights</p>
    <ul>
      <li>Utility lines, pipelines, access roads</li>
      <li>Owner keeps property but with restrictions</li>
      <li>Compensation based on value of rights taken</li>
    </ul>
    
    <h3>The Eminent Domain Process</h3>
    <p><strong>Step 1: Public Use Determination</strong> - Government must prove taking is for legitimate public purpose</p>
    <p><strong>Step 2: Notice to Owner</strong> - Written notice of intent to acquire property</p>
    <p><strong>Step 3: Appraisal</strong> - Government appraises property to determine offer</p>
    <p><strong>Step 4: Written Offer</strong> - Government makes formal offer of "just compensation"</p>
    <p><strong>Step 5: Negotiation Period</strong> - Owner can accept, reject, or negotiate (30-90 days typical)</p>
    <p><strong>Step 6: Condemnation Action</strong> - If no agreement, government files lawsuit</p>
    <p><strong>Step 7: Trial/Settlement</strong> - Court determines just compensation if parties don't settle</p>
    <p><strong>Step 8: Payment & Transfer</strong> - Government pays, takes possession</p>
    
    <h3>"Just Compensation" - What You're Entitled To</h3>
    <p><strong>Primary Components:</strong></p>
    <ul>
      <li><strong>Fair Market Value:</strong> Price willing buyer would pay willing seller</li>
      <li><strong>Severance Damages:</strong> Loss in value to remaining property (partial takings)</li>
      <li><strong>Business Damages:</strong> Loss of goodwill, relocation costs (in some states)</li>
      <li><strong>Property Improvements:</strong> Recent additions, landscaping, structures</li>
      <li><strong>Special Assessments:</strong> Benefits or damages unique to your property</li>
    </ul>
    
    <p><strong>What's NOT Typically Included:</strong></p>
    <ul>
      <li>Attorney fees (though some states allow recovery)</li>
      <li>Sentimental value</li>
      <li>Future speculative value beyond current use</li>
      <li>Business profits (unless state law allows)</li>
    </ul>
    
    <h3>Valuation Methods for Eminent Domain</h3>
    <p><strong>1. Sales Comparison Approach:</strong> Most common method</p>
    <ul>
      <li>Compare to recent sales of similar properties</li>
      <li>Adjust for differences in size, location, condition</li>
      <li>Preferred for residential properties</li>
    </ul>
    
    <p><strong>2. Income Approach:</strong> For income-producing properties</p>
    <ul>
      <li>Capitalize net operating income</li>
      <li>Used for rental properties, commercial buildings</li>
      <li>Considers rental income and cap rates</li>
    </ul>
    
    <p><strong>3. Cost Approach:</strong> For special-use properties</p>
    <ul>
      <li>Land value + replacement cost of improvements</li>
      <li>Used when comparable sales don't exist</li>
      <li>Churches, schools, unique facilities</li>
    </ul>
    
    <h3>Severance Damages (Partial Takings)</h3>
    <p>When government takes only part of your property, remaining portion may lose value:</p>
    <ul>
      <li><strong>Access Impairment:</strong> Lost street frontage, difficult ingress/egress</li>
      <li><strong>Size Reduction:</strong> Remaining parcel too small for intended use</li>
      <li><strong>Irregular Shape:</strong> Odd configuration reduces utility</li>
      <li><strong>Zoning Compliance:</strong> Remainder no longer meets setback/parking requirements</li>
      <li><strong>Business Impact:</strong> Lost visibility, parking, customer access</li>
    </ul>
    
    <p><strong>Severance Calculation Formula:</strong></p>
    <p>Before Value (entire property) - After Value (remaining property) - Value of Part Taken = Severance Damages</p>
    
    <h3>Business Relocation Assistance (Federal/Some States)</h3>
    <p>If government taking displaces your business, you may be entitled to:</p>
    <ul>
      <li>Moving expenses (equipment, inventory, fixtures)</li>
      <li>Re-establishment costs (new location setup)</li>
      <li>Business signage replacement</li>
      <li>Lost goodwill compensation (some states)</li>
      <li>Search costs for replacement property</li>
      <li>Increased rent differential (up to 3-5 years)</li>
    </ul>
    
    <h3>Common Eminent Domain Projects</h3>
    <ul>
      <li><strong>Transportation:</strong> Highways, roads, bridges, railroads, airports</li>
      <li><strong>Utilities:</strong> Power lines, gas pipelines, water/sewer systems</li>
      <li><strong>Public Facilities:</strong> Schools, parks, government buildings, fire stations</li>
      <li><strong>Infrastructure:</strong> Flood control, drainage, public parking</li>
      <li><strong>Economic Development:</strong> Controversial - "public use" debate (Kelo v. New London)</li>
    </ul>
    
    <h3>Challenging the Government's Offer</h3>
    <p><strong>When to Fight:</strong></p>
    <ul>
      <li>Government's appraisal is significantly below market value</li>
      <li>Severance damages not adequately considered</li>
      <li>Business relocation costs underestimated</li>
      <li>Special value not recognized (corner lot, highest/best use)</li>
    </ul>
    
    <p><strong>Building Your Case:</strong></p>
    <ul>
      <li>Hire independent appraiser (MAI-certified recommended)</li>
      <li>Gather comparable sales data</li>
      <li>Document all improvements and special features</li>
      <li>Calculate true severance damages</li>
      <li>Retain eminent domain attorney early</li>
    </ul>
    
    <h3>Legal Representation Costs</h3>
    <ul>
      <li><strong>Attorney Fees:</strong> $10,000-$100,000+ (complex cases)</li>
      <li><strong>Appraisal Fees:</strong> $3,000-$15,000 for expert appraisal</li>
      <li><strong>Engineering Studies:</strong> $5,000-$25,000 (if needed for severance damages)</li>
      <li><strong>Expert Witnesses:</strong> $300-$500/hour for trial testimony</li>
      <li><strong>NOTE:</strong> Some states allow recovery of these costs if you prevail</li>
    </ul>
    
    <h3>Negotiation Strategy</h3>
    <p><strong>Don't Accept First Offer:</strong> Government's initial offer is often low (70-85% of fair value)</p>
    <p><strong>Get Second Opinion:</strong> Independent appraisal usually finds 10-30% more value</p>
    <p><strong>Document Everything:</strong> Photos, improvements, business records, comparable sales</p>
    <p><strong>Consider Timing:</strong> Government needs property by deadline, may improve offer close to trial</p>
    <p><strong>Know Your Rights:</strong> Can't be forced to sell before compensation deposited with court</p>
    
    <h3>Tax Implications of Condemnation</h3>
    <ul>
      <li><strong>Capital Gains:</strong> Sale proceeds above basis are taxable</li>
      <li><strong>Section 1033 Exchange:</strong> Can defer taxes by buying replacement property within 2-3 years</li>
      <li><strong>Principal Residence Exclusion:</strong> $250K/$500K exclusion may apply</li>
      <li><strong>Severance Damages:</strong> May be tax-free as compensation for property damage</li>
      <li><strong>Consult Tax Professional:</strong> Complex rules, planning opportunities exist</li>
    </ul>
    
    <h3>Timeline Expectations</h3>
    <ul>
      <li><strong>Simple Residential Taking:</strong> 6-12 months from notice to settlement</li>
      <li><strong>Complex Commercial Taking:</strong> 1-3 years (litigation typical)</li>
      <li><strong>Partial Taking with Severance:</strong> 1-2 years (valuation disputes common)</li>
      <li><strong>Trial Process:</strong> 6-18 months after condemnation suit filed</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Full Property Fair Market Value",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "percentageTaken",
        label: "Percentage of Property Taken (%)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "severanceDamagePercent",
        label: "Severance Damage to Remainder (%)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "businessRelocationCosts",
        label: "Business Relocation Costs (if applicable)",
        type: "number",
        placeholder: "25000",
        defaultValue: "0",
      },
      {
        name: "improvementValue",
        label: "Recent Improvements Not in FMV",
        type: "number",
        placeholder: "15000",
        defaultValue: "0",
      },
      {
        name: "governmentOffer",
        label: "Government's Initial Offer",
        type: "number",
        placeholder: "85000",
        defaultValue: "85000",
      },
      {
        name: "appraisalFees",
        label: "Independent Appraisal Fees",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "attorneyFees",
        label: "Estimated Attorney Fees",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
    ],
    results: [
      { label: "Value of Property Taken", isCurrency: true },
      { label: "Remaining Property Value (Before)", isCurrency: true },
      { label: "Severance Damages to Remainder", isCurrency: true },
      { label: "Total Just Compensation (Before Costs)", isCurrency: true },
      { label: "Total with Relocation & Improvements", isCurrency: true },
      { label: "Government's Offer", isCurrency: true },
      { label: "Difference (Potential Additional Recovery)", isCurrency: true },
      { label: "Legal/Appraisal Costs to Challenge", isCurrency: true },
      { label: "Net Benefit of Challenging Offer", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const percentageTaken = Number(data.percentageTaken) || 25;
      const severanceDamagePercent = Number(data.severanceDamagePercent) || 15;
      const businessRelocationCosts = Number(data.businessRelocationCosts) || 0;
      const improvementValue = Number(data.improvementValue) || 0;
      const governmentOffer = Number(data.governmentOffer) || 0;
      const appraisalFees = Number(data.appraisalFees) || 5000;
      const attorneyFees = Number(data.attorneyFees) || 15000;
      
      // Value calculations
      const valueOfPropertyTaken = propertyValue * (percentageTaken / 100);
      const remainingPropertyValue = propertyValue * (1 - percentageTaken / 100);
      const severanceDamages = remainingPropertyValue * (severanceDamagePercent / 100);
      
      // Total just compensation
      const totalJustCompensation = valueOfPropertyTaken + severanceDamages;
      const totalWithExtras = totalJustCompensation + businessRelocationCosts + improvementValue;
      
      // Analysis of government offer
      const additionalRecoveryPotential = totalWithExtras - governmentOffer;
      const totalLegalCosts = appraisalFees + attorneyFees;
      const netBenefit = additionalRecoveryPotential - totalLegalCosts;
      
      let recommendation = "";
      if (netBenefit > 50000) {
        recommendation = "✅ STRONGLY RECOMMENDED: Challenge offer - significant undercompensation likely";
      } else if (netBenefit > 20000) {
        recommendation = "✅ Recommended: Hire attorney and appraiser - substantial recovery possible";
      } else if (netBenefit > 5000) {
        recommendation = "💡 Consider Challenging: Modest potential gain, negotiate first";
      } else if (netBenefit > 0) {
        recommendation = "⚖️ Marginal: Try negotiating before hiring attorney";
      } else {
        recommendation = "⚠️ Government offer appears fair - legal costs may exceed additional recovery";
      }

      return [
        { label: "Value of Property Taken", value: `${valueOfPropertyTaken.toFixed(2)}`, isCurrency: true },
        { label: "Remaining Property Value (Before)", value: `${remainingPropertyValue.toFixed(2)}`, isCurrency: true },
        { label: "Severance Damages to Remainder", value: `${severanceDamages.toFixed(2)}`, isCurrency: true },
        { label: "Total Just Compensation (Before Costs)", value: `${totalJustCompensation.toFixed(2)}`, isCurrency: true },
        { label: "Total with Relocation & Improvements", value: `${totalWithExtras.toFixed(2)}`, isCurrency: true },
        { label: "Government's Offer", value: `${governmentOffer.toFixed(2)}`, isCurrency: true },
        { label: "Difference (Potential Additional Recovery)", value: `${additionalRecoveryPotential.toFixed(2)}`, isCurrency: true },
        { label: "Legal/Appraisal Costs to Challenge", value: `${totalLegalCosts.toFixed(2)}`, isCurrency: true },
        { label: "Net Benefit of Challenging Offer", value: `${netBenefit.toFixed(2)}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};