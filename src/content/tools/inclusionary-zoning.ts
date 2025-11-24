import { CalculatorContent } from '@/types';

export const INCLUSIONARY_ZONING_CONTENT: CalculatorContent = {
  title: 'Inclusionary Zoning Calculator',
  description: 'Calculate affordable housing requirements, density bonuses, fee-in-lieu payments, and financial impacts of inclusionary zoning mandates on residential developments.',
  icon: 'Icon',
  category: 'Zoning & Land Use',
  slug: 'inclusionary-zoning',
  article: {
    title: 'Inclusionary Zoning: Developer Guide & Financial Impact',
    content: `
Inclusionary zoning policies require or incentivize developers to include affordable housing units in residential developments or pay fees to support affordable housing.

### What is Inclusionary Zoning?

**Definition:**
- Zoning ordinance requiring affordable housing
- Percentage of units must be below-market rate
- Applies to new residential developments
- Can be mandatory or voluntary
- Intended to create mixed-income communities

**Common Requirements:**
- 10-30% of units must be affordable
- Affordable to households at 50-120% AMI (Area Median Income)
- Affordability period: 30-99 years
- On-site or off-site options
- Fee-in-lieu alternative in some jurisdictions

### How Inclusionary Zoning Works

**Mandatory Programs:**
- All developments above threshold must comply
- Typical threshold: 5-20 units
- No choice - must provide affordable units
- Strict enforcement and penalties
- Examples: San Francisco, Montgomery County MD

**Voluntary/Incentive-Based:**
- Developer chooses to participate
- Receives density bonus or other incentives
- More flexible requirements
- Encourages rather than mandates
- Examples: New York City, Los Angeles

### Affordable Housing Requirements

**Income Targeting:**

**Very Low Income (30-50% AMI):**
- Most restrictive affordability level
- Highest subsidy required from developer
- Typical rent: $800-1,200/month (1-BR)
- Deepest affordability requirements

**Low Income (50-80% AMI):**
- Common targeting level
- Moderate subsidy required
- Typical rent: $1,200-1,800/month (1-BR)
- Balance of affordability and feasibility

**Moderate Income (80-120% AMI):**
- Workforce housing focus
- Lower subsidy required
- Typical rent: $1,800-2,400/month (1-BR)
- Easier to achieve financially

**Percentage Requirements by City:**
- San Francisco: 12-20% on-site, 33% off-site
- New York City: 25-30% (voluntary with bonus)
- Boston: 13% on-site
- Washington DC: 8-10% depending on zone
- Denver: 10% on-site or 16% off-site

### Developer Compliance Options

**1. On-Site Units:**

**Requirements:**
- Build affordable units within development
- Same building or separate building on-site
- Comparable size and quality to market-rate
- Indistinguishable from market units

**Financial Impact:**
- Direct subsidy from market-rate units
- Cross-subsidy model
- Lost revenue: $50,000-$150,000 per affordable unit
- Higher per-unit cost for market units

**2. Off-Site Units:**

**Requirements:**
- Build affordable units at different location
- Usually within same jurisdiction
- Higher percentage required (1.5-2x on-site)
- Subject to approval

**Financial Impact:**
- Acquire land elsewhere
- Development costs at second site
- Coordination complexity
- May be cheaper in high-cost areas

**3. Fee-in-Lieu:**

**Requirements:**
- Pay cash fee instead of building units
- Fee funds affordable housing elsewhere
- Calculated per market-rate unit
- Not available in all jurisdictions

**Typical Fees:**
- San Francisco: $333,000+ per unit
- Boston: $200,000-300,000 per unit
- Denver: $275,000 per unit
- Los Angeles: $250,000-400,000 per unit

**4. Land Dedication:**
- Donate land for affordable housing
- Another entity builds affordable units
- Less common option
- Value credited against requirement

### Density Bonuses and Incentives

**Common Incentives:**

**Density Bonus:**
- 20-50% additional units allowed
- Offsets cost of affordable units
- Increases project feasibility
- Most common incentive

**Height/FAR Increases:**
- Exceed normal height limits
- Higher floor-area-ratio (FAR)
- More sellable space
- Valuable in dense urban areas

**Parking Reductions:**
- Lower parking requirements
- Reduces development cost: $30,000-80,000 per space
- Particularly valuable in expensive markets

**Fast-Track Processing:**
- Expedited permitting and approvals
- Save 6-18 months in timeline
- Reduce carrying costs
- Lower risk

**Fee Waivers:**
- Waive impact fees
- Reduce building permit fees
- Savings: $10,000-40,000 per unit

### Financial Impact Analysis

**Cost to Developer:**

**Per Affordable Unit Cost (On-Site):**
- Lost revenue vs. market-rate: $75,000-200,000
- Additional complexity: $5,000-15,000
- Ongoing compliance monitoring: $500-2,000/year
- **Total: $80,000-$220,000 per affordable unit**

**Example: 100-Unit Development, 15% Affordable:**
- 15 affordable units required
- Lost revenue: 15 × $150,000 = $2,250,000
- Developer must spread across 85 market units
- Increase per market unit: ~$26,500
- Or reduce land price by $2.25M

**Density Bonus Value:**
- If 30% density bonus allowed: 30 additional units
- Value of 30 units: 30 × $400,000 = $12,000,000
- Minus cost to build: 30 × $200,000 = $6,000,000
- **Net benefit: $6,000,000**
- **Exceeds cost of affordable requirement**

### Pro Forma Impact

**Without Inclusionary Zoning:**
- 100 units @ $400,000 = $40,000,000
- Development cost @ $200,000 = $20,000,000
- Profit: $20,000,000 (50% margin)

**With Inclusionary Zoning (Mandatory, No Bonus):**
- 85 market units @ $400,000 = $34,000,000
- 15 affordable @ $200,000 = $3,000,000
- Total revenue: $37,000,000
- Development cost: 100 × $200,000 = $20,000,000
- Profit: $17,000,000 (46% margin)
- **Profit reduction: $3,000,000**

**With Density Bonus:**
- 110 market units @ $400,000 = $44,000,000
- 20 affordable @ $200,000 = $4,000,000
- Total revenue: $48,000,000
- Development cost: 130 × $200,000 = $26,000,000
- Profit: $22,000,000 (46% margin)
- **Profit increase: $2,000,000 vs. original**

### Property Tax and Operating Considerations

**Property Tax Impact:**
- Affordable units assessed at restricted value
- Lower property tax revenue to municipality
- Market-rate units subsidize infrastructure
- HOA/condo fee implications

**HOA/Condo Association:**
- Affordable units pay full HOA dues
- Revenue-neutral to association
- Cannot discriminate in services
- Same voting rights

**Operating and Management:**
- Income verification required annually
- Resale restrictions enforcement
- Ongoing compliance monitoring
- City audits and reporting

### Legal and Compliance Requirements

**Duration of Affordability:**
- 30 years minimum (most common)
- 55 years (California state density bonus)
- 99 years (Montgomery County MD)
- In perpetuity (some jurisdictions)

**Resale Restrictions:**
- Affordable units must remain affordable
- Restrictions run with the land
- Limited resale price appreciation
- Qualified buyer requirements

**Income Verification:**
- Initial occupant income certification
- Annual recertification in some programs
- Third-party verification
- Tenant turnover certification

**Penalties for Non-Compliance:**
- Fines: $5,000-$50,000 per violation
- Stop-work orders
- Withholding certificate of occupancy
- Litigation by city or tenants

### Market Impact and Controversy

**Arguments in Favor:**
- Creates affordable housing without public funding
- Mixed-income communities
- Housing for teachers, nurses, service workers
- Reduces displacement
- Developer pays fair share

**Arguments Against:**
- Increases market-rate housing costs
- Reduces overall housing production
- Economically inefficient
- Discourages development
- Constitutional takings concerns

**Research on Impacts:**
- May reduce overall housing production by 5-15%
- Increases market-rate prices by 2-8%
- Creates some affordable units: 10,000-50,000 nationally/year
- Effectiveness varies widely by market

### How to Use This Calculator

Enter your development details:
1. Total number of units in development
2. Required affordable percentage (%)
3. Average market-rate unit price
4. Average affordable unit price
5. Density bonus percentage offered (%)

Get comprehensive analysis including:
- Number of affordable units required
- Lost revenue from affordability requirement
- Value of density bonus
- Net financial impact
- Fee-in-lieu alternative cost
- Recommended compliance strategy

This calculator helps developers, planners, and policymakers understand the financial implications of inclusionary zoning requirements and optimize development strategies.
`,
  },
  calculator: {
    fields: [
      {
        name: 'totalUnits',
        label: 'Total Units in Development',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'affordablePercent',
        label: 'Required Affordable Percentage (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'marketUnitPrice',
        label: 'Average Market-Rate Unit Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'affordableUnitPrice',
        label: 'Average Affordable Unit Price',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'densityBonus',
        label: 'Density Bonus Offered (%)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Affordable Units Required', isCurrency: false },
      { label: 'Market-Rate Units Allowed', isCurrency: false },
      { label: 'Lost Revenue from Affordability', isCurrency: true },
      { label: 'Bonus Units Value', isCurrency: true },
      { label: 'Net Financial Impact', isCurrency: true },
      { label: 'Fee-in-Lieu Alternative', isCurrency: true },
    ],
    calculate: (data) => {
      const { totalUnits, affordablePercent, marketUnitPrice, affordableUnitPrice, densityBonus } = data;
      
      const units = parseFloat(totalUnits);
      const affordablePct = parseFloat(affordablePercent) / 100;
      const marketPrice = parseFloat(marketUnitPrice);
      const affordablePrice = parseFloat(affordableUnitPrice);
      const bonus = parseFloat(densityBonus) / 100;
      
      // Calculate affordable units required
      const affordableUnits = Math.ceil(units * affordablePct);
      const marketUnits = units - affordableUnits;
      
      // Lost revenue from affordable requirement
      const lostRevenue = affordableUnits * (marketPrice - affordablePrice);
      
      // Density bonus units
      const bonusUnits = Math.floor(units * bonus);
      const bonusValue = bonusUnits * marketPrice;
      
      // Net impact (bonus value - lost revenue)
      const netImpact = bonusValue - lostRevenue;
      
      // Fee-in-lieu (typically $250,000-300,000 per affordable unit)
      const feeInLieu = affordableUnits * 275000;
      
      return [
        { label: 'Affordable Units Required', value: `${affordableUnits} units` },
        { label: 'Market-Rate Units Allowed', value: `${marketUnits + bonusUnits} units` },
        { label: 'Lost Revenue from Affordability', value: `$${lostRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Bonus Units Value', value: `$${bonusValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Net Financial Impact', value: `${netImpact >= 0 ? '+' : ''}$${netImpact.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Fee-in-Lieu Alternative', value: `$${feeInLieu.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
      ];
    },
  },
};
