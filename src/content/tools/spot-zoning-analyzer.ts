import { CalculatorContent } from '@/types';

export const SPOT_ZONING_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Spot Zoning Analyzer',
  description: 'Analyze spot zoning risks, legal challenges, property value impacts, and identify questionable zoning changes that benefit specific properties or developers.',
  icon: 'Icon',
  category: 'Zoning & Land Use',
  slug: 'spot-zoning-analyzer',
  article: {
    title: 'Spot Zoning: Legal Analysis & Property Impact Guide',
    content: `
Spot zoning refers to the rezoning of a small parcel of land in a way that benefits the owner but is incompatible with surrounding zoning and community plans.

### What is Spot Zoning?

**Legal Definition:**
- Rezoning of single property or small area
- Creates island of different use
- Not in accordance with comprehensive plan
- Primarily benefits specific property owner
- Often legally challenged and invalid

**Key Characteristics:**
- Small area rezoned (single lot or few parcels)
- Inconsistent with surrounding zoning
- Lacks comprehensive planning justification
- Benefits particular owner or developer
- Not in public interest

### Spot Zoning vs. Legitimate Rezoning

**Spot Zoning (Often Invalid):**
- Benefits single property owner
- No comprehensive plan support
- Arbitrary and capricious decision
- Creates incompatible island use
- Lacks public purpose justification

**Legitimate Rezoning:**
- Consistent with comprehensive plan
- Benefits broader community
- Supported by planning analysis
- Transitions between zones appropriately
- Serves legitimate public purpose

**Gray Areas:**
- Small-scale amendments with justification
- Planned Unit Developments (PUDs)
- Transitional zoning areas
- Floating zones properly applied
- Conditional use permits

### Legal Standards and Tests

**Courts Evaluate Several Factors:**

**1. Comprehensive Plan Consistency:**
- Does rezoning align with master plan?
- Has comprehensive plan been updated?
- Is there planning justification?

**2. Public Benefit Test:**
- Does change serve public interest?
- Or solely benefit private party?
- Community impact analysis

**3. Arbitrary and Capricious Standard:**
- Is there rational basis for change?
- Was proper procedure followed?
- Evidence supporting decision?

**4. Changed Conditions:**
- Have neighborhood conditions changed?
- Mistake in original zoning?
- New public need emerged?

### Common Spot Zoning Scenarios

**Red Flag Examples:**

**1. Commercial in Residential:**
- Single lot rezoned for gas station
- One property becomes shopping center
- Restaurant in middle of subdivision
- **Risk Level:** Very High

**2. Density Increase:**
- One lot gets multi-family in single-family zone
- Higher density than surrounding parcels
- Spot upzoning for specific developer
- **Risk Level:** High

**3. Industrial/Commercial Mix:**
- Heavy industrial in light industrial zone
- Single property different use class
- Incompatible use insertion
- **Risk Level:** High

**Potentially Valid Examples:**

**1. Transitional Zoning:**
- Property between two different zones
- Creates appropriate buffer/transition
- Supported by planning analysis
- **Risk Level:** Low

**2. Correcting Error:**
- Original zoning was mistake
- Property characteristics support change
- Makes sense with surroundings
- **Risk Level:** Low

**3. Changed Conditions:**
- Neighborhood character has evolved
- Infrastructure now supports new use
- Comprehensive plan updated
- **Risk Level:** Medium

### Impact on Property Values

**Subject Property (Rezoned):**

**If Upzoned (More Intensive Use):**
- Value increase: 20-200%+ depending on change
- Residential to commercial: +50-150%
- Low density to high density: +30-100%
- Development potential unlocked

**If Challenged/Overturned:**
- Value may revert to original zoning
- Development plans disrupted
- Legal costs: $25,000-$150,000+
- Time delays: 1-3 years

**Surrounding Properties:**

**Negative Impacts:**
- Incompatible use decreases values: -5-20%
- Increased traffic and noise
- Character change concerns
- Precedent for additional changes

**Positive Impacts (Rare):**
- Improved amenities nearby: +3-10%
- Infrastructure improvements
- Commercial services access

### Legal Challenge Process

**Who Can Challenge:**
- Neighboring property owners
- Community groups
- Taxpayers with standing
- Municipal governing body (different faction)

**Grounds for Challenge:**
- Inconsistent with comprehensive plan
- Arbitrary and capricious decision
- Improper procedure followed
- Lack of public benefit
- Spot zoning characteristics present

**Timeline and Costs:**

**Challenge Timeline:**
- File lawsuit: 30-90 days after approval
- Discovery: 3-6 months
- Court hearings: 6-12 months
- Decision: 12-24 months total
- Appeals: +12-18 months

**Legal Costs:**
- Plaintiff legal fees: $25,000-$100,000+
- Defendant legal fees: $50,000-$200,000+
- Expert witnesses: $10,000-$30,000
- Success rate of challenges: 30-50%

### Developer Considerations

**Risks of Spot Zoning Approval:**

**Litigation Risk:**
- Neighbor challenges: 40-60% probability
- Delay in development: 1-3 years
- Legal costs: $50,000-$200,000
- Potential reversal: 30-50% of challenges succeed

**Mitigation Strategies:**
- Obtain variance instead of rezoning
- Seek conditional use permit
- Apply for PUD designation
- Demonstrate comprehensive plan consistency
- Conduct community outreach
- Provide offsetting public benefits

**Due Diligence:**
- Review comprehensive plan alignment
- Analyze surrounding zoning patterns
- Assess litigation risk
- Budget for legal challenges
- Obtain legal opinion on validity

### Neighboring Property Owner Actions

**If You're Affected:**

**1. Research and Document (Weeks 1-2):**
- Review comprehensive plan
- Compare to surrounding zoning
- Document incompatibilities
- Research case law in your jurisdiction

**2. Administrative Remedies (Weeks 2-4):**
- Attend public hearings
- Submit written objections
- Organize neighbors
- Request reconsideration

**3. Legal Action (Months 1-2):**
- Consult land use attorney
- File lawsuit if approved
- Seek injunction against development
- Discovery process

**4. Settlement Negotiations:**
- Buffer zones
- Use restrictions
- Design modifications
- Property purchase offers

### Financial Analysis

**Cost-Benefit for Property Owner:**

**Benefits of Rezoning:**
- Property value increase
- Higher development potential
- Increased income possibilities
- Flexibility for use

**Costs and Risks:**
- Rezoning application: $5,000-$25,000
- Legal/planning consultants: $15,000-$75,000
- Community opposition efforts: $5,000-$20,000
- Litigation if challenged: $50,000-$200,000
- Time delays: 6-36 months
- Failure risk: Lose all costs if denied/overturned

**Break-Even Analysis:**
- Value increase must exceed total costs
- Account for time value of money
- Risk-adjust for challenge probability
- Consider alternative strategies

### How to Use This Analyzer

Enter your situation:
1. Property current value
2. Property value if rezoned
3. Size of rezoned area (square feet)
4. Number of neighboring properties
5. Consistency with comprehensive plan (%)

Get detailed analysis including:
- Spot zoning risk assessment
- Legal challenge probability
- Estimated litigation costs
- Property value impact
- Timeline for resolution
- Recommended actions

This analyzer helps property owners, developers, neighbors, and attorneys evaluate the validity and risks associated with questionable rezoning decisions.
`,
  },
  calculator: {
    fields: [
      {
        name: 'currentValue',
        label: 'Current Property Value',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'rezonedValue',
        label: 'Value If Rezoned',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'rezonedArea',
        label: 'Rezoned Area (sq ft)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'neighboringProperties',
        label: 'Number of Neighboring Properties',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'planConsistency',
        label: 'Comprehensive Plan Consistency (%)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Spot Zoning Risk Level', isCurrency: false },
      { label: 'Legal Challenge Probability', isCurrency: false },
      { label: 'Estimated Value Gain', isCurrency: true },
      { label: 'Potential Litigation Costs', isCurrency: true },
      { label: 'Timeline Risk', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (data) => {
      const { currentValue, rezonedValue, rezonedArea, neighboringProperties, planConsistency } = data;
      
      const currentVal = parseFloat(currentValue);
      const rezonedVal = parseFloat(rezonedValue);
      const area = parseFloat(rezonedArea);
      const neighbors = parseFloat(neighboringProperties);
      const consistency = parseFloat(planConsistency);
      
      // Risk level calculation
      let riskLevel = 'Low Risk';
      let challengeProbability = '20-30%';
      
      if (consistency < 40 && area < 43560) { // Less than 1 acre
        riskLevel = 'Very High Risk - Spot Zoning';
        challengeProbability = '60-80%';
      } else if (consistency < 60 && area < 87120) { // Less than 2 acres
        riskLevel = 'High Risk';
        challengeProbability = '40-60%';
      } else if (consistency < 75) {
        riskLevel = 'Moderate Risk';
        challengeProbability = '25-40%';
      }
      
      // Value gain
      const valueGain = rezonedVal - currentVal;
      
      // Litigation costs (higher risk = higher costs)
      let litigationCosts = 50000;
      if (riskLevel.includes('Very High')) {
        litigationCosts = 150000;
      } else if (riskLevel.includes('High')) {
        litigationCosts = 100000;
      } else if (riskLevel.includes('Moderate')) {
        litigationCosts = 75000;
      }
      
      // Timeline risk
      const timelineRisk = riskLevel.includes('Very High') || riskLevel.includes('High') 
        ? '18-36 months delay likely' 
        : '6-12 months possible';
      
      // Recommendation
      let recommendation = '';
      if (consistency < 40) {
        recommendation = 'Seek variance or conditional use instead';
      } else if (consistency < 60) {
        recommendation = 'High litigation risk - budget accordingly';
      } else if (consistency < 75) {
        recommendation = 'Proceed with caution - get legal opinion';
      } else {
        recommendation = 'Legitimate rezoning - low spot zoning risk';
      }
      
      return [
        { label: 'Spot Zoning Risk Level', value: riskLevel },
        { label: 'Legal Challenge Probability', value: challengeProbability },
        { label: 'Estimated Value Gain', value: `$${valueGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Potential Litigation Costs', value: `$${litigationCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Timeline Risk', value: timelineRisk },
        { label: 'Recommendation', value: recommendation },
      ];
    },
  },
};
