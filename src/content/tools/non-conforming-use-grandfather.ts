import { CalculatorContent } from '@/types';

export const NON_CONFORMING_USE_GRANDFATHER_CONTENT: CalculatorContent = {
  title: 'Non-Conforming Use (Grandfather) Calculator',
  description: 'Analyze grandfathered property rights, non-conforming use restrictions, expansion limitations, and compliance requirements for properties that predate current zoning laws.',
  icon: 'Icon',
  category: 'Zoning & Land Use',
  slug: 'non-conforming-use-grandfather',
  article: {
    title: 'Non-Conforming Use & Grandfathered Rights: Complete Guide',
    content: `
A non-conforming use (also called a "grandfathered" use) is a property use that was legal when established but no longer conforms to current zoning regulations.

### What is Non-Conforming Use?

**Legal Definition:**
- Use that existed before new zoning laws
- Legally established under prior regulations
- Protected from immediate elimination
- Subject to specific restrictions and limitations

**Common Examples:**
- Commercial business in residential zone
- Multi-family home in single-family district
- Industrial use in commercial area
- Oversized structures or setback violations

### Types of Non-Conforming Uses

**1. Non-Conforming Use of Land**
- Land used in way not permitted by current zoning
- Example: Junkyard in residential zone
- Most restricted type
- Cannot usually expand or intensify

**2. Non-Conforming Structure**
- Building that violates current regulations
- Example: Building too close to property line
- Structure size, height, or setback violations
- May continue but often can't expand

**3. Non-Conforming Lot**
- Lot that doesn't meet minimum size requirements
- Example: 5,000 sq ft lot in 10,000 sq ft minimum zone
- Can still build with proper permits
- Subject to current setback rules

### Grandfathered Rights Protection

**What's Protected:**
- Right to continue existing use
- Maintenance and ordinary repairs
- Like-for-like replacements
- Normal business operations

**What's NOT Protected:**
- Expansion of non-conforming use
- Change to different non-conforming use
- Rebuilding after substantial damage (often >50%)
- Transfer to more intensive use
- Abandonment and resumption

### Expansion and Modification Rules

**Expansion Limitations:**

**Prohibited Expansions:**
- Physical expansion of building footprint
- Increase in intensity of use
- Extension to additional properties
- Conversion to more intensive use

**Allowed Modifications:**
- Interior renovations maintaining same use
- Repairs and maintenance
- Updates to meet health/safety codes
- Minor alterations not changing character

**Percentage Rules:**
- Many jurisdictions: 25-50% expansion allowed
- Over 50% damage: Lose non-conforming status
- Renovation over certain % triggers compliance
- Check local ordinances for specifics

### Abandonment and Loss of Rights

**Abandonment Triggers:**

**Time-Based Abandonment:**
- 6 months to 2 years of non-use (varies by jurisdiction)
- Intentional cessation of use
- Failure to maintain business operations
- Change to conforming use

**Damage-Based Loss:**
- Destruction over 50% of value (common threshold)
- Natural disasters: Some jurisdictions grant exceptions
- Fire or other damage: Must rebuild within timeframe
- Insurance considerations critical

**Change of Use:**
- Voluntary change to conforming use
- Cannot revert to non-conforming
- Any change may trigger current compliance
- Consult attorney before changes

### Rebuilding After Damage

**Substantial Damage Rules:**

**50% Rule (Most Common):**
- Damage < 50% of value: Can rebuild non-conforming
- Damage > 50% of value: Must conform to current zoning
- Assessed value vs. replacement cost
- Market value determination varies

**Rebuild Timeframes:**
- 6 months to 2 years typical (varies by location)
- Must begin construction within timeframe
- Continuous progress required
- Extensions may be available with application

**Insurance Planning:**
- Standard policies may not cover zoning changes
- Zoning ordinance insurance available
- Covers cost to bring into compliance
- Additional premium but critical protection

### Legal Protections and Limitations

**Constitutional Protections:**
- Takings Clause protections
- Vested rights doctrine
- Due process requirements
- Amortization periods (phase-out timelines)

**Amortization Provisions:**
- Gradual phase-out over time
- 1-20 years depending on investment
- Courts evaluate reasonableness
- Compensation considerations

**Variance vs. Non-Conforming Use:**
- Non-conforming: Pre-existing right
- Variance: Permission for new non-conforming use
- Different legal standards
- Different procedures and protections

### Transfer and Sale Considerations

**Transferability:**

**Generally Transferable:**
- Non-conforming use runs with the land
- New owner inherits grandfathered rights
- Same restrictions apply to new owner
- Must continue same use

**Documentation Requirements:**
- Proof of pre-existing use
- Historical permits and approvals
- Tax records showing use
- Photographs and business records
- Affidavits from prior owners

**Due Diligence for Buyers:**
- Verify grandfathered status
- Review zoning compliance history
- Check for violations or cease-and-desist orders
- Understand expansion limitations
- Review applicable ordinances

### Valuation Impact

**Property Value Considerations:**

**Positive Impacts:**
- Unique use creates scarcity value
- Higher income potential than conforming use
- Limited competition
- Established business location

**Negative Impacts:**
- Limited expansion potential
- Risk of loss through damage/abandonment
- Financing challenges
- Higher insurance costs
- Uncertainty of rights

**Appraisal Challenges:**
- Difficult to find comparables
- Discount for non-conforming status: 10-40%
- Income approach often most reliable
- Risk adjustment necessary

### Lender and Insurance Issues

**Financing Challenges:**
- Many lenders avoid non-conforming properties
- Higher down payment requirements: 25-40%
- Higher interest rates: 0.5-2% premium
- Shorter loan terms possible
- Commercial loans may be required

**Insurance Considerations:**
- Standard policies may exclude zoning issues
- Ordinance or law coverage essential
- Higher premiums: 10-30% increase
- Coverage for bringing into compliance
- Business interruption considerations

### Strategies for Property Owners

**Protecting Your Rights:**

**Documentation:**
- Maintain comprehensive records
- Document continuous use
- Keep all permits and approvals
- Photograph property regularly
- Track all improvements and costs

**Operational Best Practices:**
- Never abandon use for extended period
- Maintain continuous business operations
- Don't voluntarily change to conforming use
- Keep property in good repair
- Obtain permits for all work

**Planning for Changes:**
- Consult zoning attorney before modifications
- Apply for variances when needed
- Consider rezoning applications
- Negotiate with planning department
- Plan succession carefully

### How to Use This Calculator

Enter your property details:
1. Current property value
2. Years of non-conforming use
3. Estimated expansion value if allowed
4. Percentage of property damaged (if applicable)
5. Annual revenue from non-conforming use

Get detailed analysis including:
- Grandfathered status validity
- Expansion limitations
- Abandonment risk timeline
- Rebuilding rights after damage
- Estimated value impact of non-conforming status
- Insurance and financing considerations

This calculator helps property owners, buyers, and investors understand the complexities and risks associated with non-conforming uses and make informed decisions about purchasing, operating, or developing such properties.
`,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Current Property Value',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'yearsNonConforming',
        label: 'Years of Non-Conforming Use',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'annualRevenue',
        label: 'Annual Revenue from Use',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'damagePercent',
        label: 'Property Damage Percentage (%)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'expansionValue',
        label: 'Value of Potential Expansion',
        type: 'number',
        defaultValue: 150000,
      },
    ],
    results: [
      { label: 'Grandfathered Status', isCurrency: false },
      { label: 'Rebuild Rights After Damage', isCurrency: false },
      { label: 'Non-Conforming Value Premium', isCurrency: true },
      { label: 'Annual Income Value', isCurrency: true },
      { label: 'Expansion Allowed', isCurrency: false },
      { label: 'Zoning Insurance Recommended', isCurrency: true },
    ],
    calculate: (data) => {
      const { propertyValue, yearsNonConforming, annualRevenue, damagePercent, expansionValue } = data;
      
      const yearsNum = parseFloat(yearsNonConforming);
      const damageNum = parseFloat(damagePercent);
      const revenueNum = parseFloat(annualRevenue);
      const valueNum = parseFloat(propertyValue);
      const expansionNum = parseFloat(expansionValue);
      
      // Grandfathered status determination
      const grandfatheredStatus = yearsNum >= 1 ? 'Protected (Pre-existing Use)' : 'Not Grandfathered';
      
      // Rebuild rights based on damage percentage
      let rebuildRights = '';
      if (damageNum === 0) {
        rebuildRights = 'Full rebuild rights (No damage)';
      } else if (damageNum < 50) {
        rebuildRights = 'Can rebuild non-conforming';
      } else {
        rebuildRights = 'Must conform to current zoning';
      }
      
      // Value premium from non-conforming use (10-30% premium if revenue generating)
      const valuePremium = revenueNum > 0 ? valueNum * 0.20 : 0;
      
      // Income capitalization value (Cap rate ~8%)
      const incomeValue = revenueNum / 0.08;
      
      // Expansion allowed (typically not allowed for non-conforming uses)
      const expansionAllowed = 'Generally Prohibited - Seek Variance';
      
      // Recommended zoning insurance coverage
      const zoningInsurance = valueNum * 0.25; // 25% of property value coverage recommended
      
      return [
        { label: 'Grandfathered Status', value: grandfatheredStatus },
        { label: 'Rebuild Rights After Damage', value: rebuildRights },
        { label: 'Non-Conforming Value Premium', value: `$${valuePremium.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Annual Income Value', value: `$${incomeValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Expansion Allowed', value: expansionAllowed },
        { label: 'Zoning Insurance Recommended', value: `$${zoningInsurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
      ];
    },
  },
};
