import { CalculatorContent } from '@/types';

export const InspectionWaiverRiskCalculatorContent: Calculator Content = {
  title: 'Inspection Waiver Risk Calculator - Home Inspection Contingency Analysis',
  description: 'Evaluate the risks and benefits of waiving home inspection contingencies, assess potential repair costs, understand buyer protection trade-offs, and make informed decisions in competitive real estate markets',
  icon: '🔍',
  category: 'Additional Tools',
  slug: 'inspection-waiver-risk-calculator',
  
  article: {
    title: 'Inspection Waiver Risk Calculator and Strategic Guide',
    content: `
      <h2>Inspection Waiver Risk Calculator</h2>
      <p>In competitive markets, buyers sometimes waive inspection contingencies to strengthen offers. The Inspection Waiver Risk Calculator helps buyers understand the significant risks of waiving inspections, evaluate alternative strategies like informational-only inspections, assess potential hidden repair costs, and make informed decisions that balance competitiveness with protection of their largest investment.</p>

      <h3>Understanding Inspection Contingencies</h3>
      <p>Standard inspection contingency protection:</p>
      <ul>
        <li><strong>Purpose:</strong> Allows buyer to discover property defects before finalizing purchase</li>
        <li><strong>Negotiation Rights:</strong> Request repairs, credits, or price reduction based on findings</li>
        <li><strong>Walk-Away Protection:</strong> Cancel contract if issues are unacceptable</li>
        <li><strong>Due Diligence Period:</strong> Typically 7-14 days to complete inspection</li>
        <li><strong>Professional Assessment:</strong> Licensed inspector evaluates systems and structure</li>
        <li><strong>Standard Practice:</strong> Nearly universal in residential real estate</li>
      </ul>

      <h3>What is an Inspection Waiver?</h3>
      <p>Waiving inspection contingency means:</p>
      <ul>
        <li><strong>No Inspection Rights:</strong> Forgoing professional property evaluation (risky!)</li>
        <li><strong>Accept As-Is:</strong> Purchasing property in current condition regardless of issues</li>
        <li><strong>No Negotiation:</strong> Cannot request repairs or credits based on condition</li>
        <li><strong>No Exit:</strong> Cannot cancel due to inspection findings</li>
        <li><strong>Risk Acceptance:</strong> Buyer assumes all liability for unknown defects</li>
        <li><strong>Competitive Edge:</strong> Makes offer more attractive to sellers</li>
      </ul>

      <h3>Types of Inspection Strategies</h3>
      <p><strong>1. Full Inspection Contingency (Standard):</strong></p>
      <ul>
        <li>Complete inspection with full negotiation rights</li>
        <li>Can request repairs or credits</li>
        <li>Can walk away for any reason during period</li>
        <li>Maximum buyer protection</li>
      </ul>

      <p><strong>2. Informational Only Inspection:</strong></p>
      <ul>
        <li>Conduct inspection but waive negotiation/cancellation rights</li>
        <li>Learn about property condition</li>
        <li>Cannot renegotiate based on findings</li>
        <li>Balanced approach—knowledge without leverage</li>
      </ul>

      <p><strong>3. Pre-Offer Inspection:</strong></p>
      <ul>
        <li>Inspect before submitting offer</li>
        <li>Make informed offer knowing condition</li>
        <li>Waive inspection in offer with confidence</li>
        <li>Demonstrates serious intent to sellers</li>
      </ul>

      <p><strong>4. Complete Waiver (No Inspection):</strong></p>
      <ul>
        <li>No inspection conducted at all</li>
        <li>Highest risk—buying blind</li>
        <li>Strongest competitive position</li>
        <li>Only for cash buyers or very aggressive offers</li>
      </ul>

      <h3>Risks of Waiving Inspection</h3>
      <p>Potential hidden issues buyers could face:</p>
      <ul>
        <li><strong>Structural Problems:</strong> Foundation cracks, settling, structural damage ($20K-$100K+)</li>
        <li><strong>Roof Defects:</strong> Leaks, missing shingles, needed replacement ($10K-$30K)</li>
        <li><strong>Electrical Issues:</strong> Outdated wiring, safety hazards, code violations ($5K-$25K)</li>
        <li><strong>Plumbing Problems:</strong> Leaks, sewer line issues, galvanized pipes ($3K-$20K)</li>
        <li><strong>HVAC Failures:</strong> Broken furnace/AC, ductwork issues ($5K-$15K)</li>
        <li><strong>Water Damage:</strong> Hidden mold, rot, moisture intrusion ($10K-$50K+)</li>
        <li><strong>Pest Infestations:</strong> Termites, carpenter ants, rodents ($2K-$10K)</li>
        <li><strong>Environmental Hazards:</strong> Asbestos, lead paint, radon ($5K-$50K)</li>
      </ul>

      <h3>Average Inspection Finding Costs</h3>
      <p>What inspections typically reveal:</p>
      <ul>
        <li><strong>Minor Issues:</strong> $500-$2,000 (caulking, weatherstripping, minor repairs)</li>
        <li><strong>Moderate Issues:</strong> $2,000-$10,000 (water heater, electrical panel, roof repairs)</li>
        <li><strong>Major Issues:</strong> $10,000-$50,000 (HVAC replacement, foundation work, re-roofing)</li>
        <li><strong>Catastrophic Issues:</strong> $50,000+ (structural failure, major water damage, complete systems)</li>
        <li><strong>Average Findings:</strong> Most inspections find $3,000-$8,000 worth of items</li>
      </ul>

      <h3>How This Calculator Works</h3>
      <p><strong>Step 1: Enter Property Details</strong></p>
      <p>Input property age, type, and purchase price.</p>
      
      <p><strong>Step 2: Assess Risk Factors</strong></p>
      <p>Evaluate property condition, age, and visible concerns.</p>
      
      <p><strong>Step 3: Calculate Potential Exposure</strong></p>
      <p>Estimate possible hidden repair costs based on property profile.</p>
      
      <p><strong>Step 4: Evaluate Alternative Strategies</strong></p>
      <p>Compare full waiver vs. informational-only vs. pre-inspection options.</p>
      
      <p><strong>Step 5: Make Informed Decision</strong></p>
      <p>Determine appropriate inspection strategy for your situation and risk tolerance.</p>

      <h3>When Inspection Waiver Might Be Appropriate</h3>
      <p><strong>Lower-Risk Scenarios:</strong></p>
      <ul>
        <li>New construction (under 5 years old) with builder warranty</li>
        <li>You've conducted thorough pre-offer inspection</li>
        <li>Property appears very well-maintained</li>
        <li>You're experienced contractor/investor who assessed property</li>
        <li>You have significant cash reserves for unexpected repairs</li>
        <li>Property is being sold as-is anyway (foreclosure, estate)</li>
        <li>Multiple offer situation requires maximum competitiveness</li>
      </ul>

      <p><strong>High-Risk Scenarios to Avoid Waiver:</strong></p>
      <ul>
        <li>Older home (50+ years) with original systems</li>
        <li>Visible deferred maintenance or poor condition</li>
        <li>Property sold "as-is" with disclosure of known issues</li>
        <li>Historic home with unique/complex systems</li>
        <li>You're first-time buyer with limited repair budget</li>
        <li>Property has additions/renovations of unknown quality</li>
        <li>Any red flags during showings (odors, stains, settling)</li>
      </ul>

      <h3>Pre-Offer Inspection Strategy</h3>
      <p>Best of both worlds approach:</p>
      <ul>
        <li><strong>Schedule Inspection Before Offer:</strong> Coordinate with listing agent</li>
        <li><strong>Know What You're Buying:</strong> Full disclosure of condition upfront</li>
        <li><strong>Make Informed Offer:</strong> Adjust price or terms based on findings</li>
        <li><strong>Waive with Confidence:</strong> No inspection contingency needed in offer</li>
        <li><strong>Competitive Advantage:</strong> Demonstrate serious, prepared buyer</li>
        <li><strong>Faster Closing:</strong> Eliminate inspection period from timeline</li>
        <li><strong>Cost:</strong> $300-$600 invested before knowing if offer accepted</li>
      </ul>

      <h3>Informational-Only Inspection</h3>
      <p>Middle-ground strategy that balances knowledge and competitiveness:</p>
      <ul>
        <li><strong>Conduct Inspection:</strong> Hire professional inspector as usual</li>
        <li><strong>Learn About Property:</strong> Understand condition and future needs</li>
        <li><strong>No Negotiation Rights:</strong> Cannot request repairs or credits</li>
        <li><strong>No Cancellation Rights:</strong> Cannot walk away based on findings</li>
        <li><strong>Plan for Repairs:</strong> Budget for known issues after closing</li>
        <li><strong>Seller Appeal:</strong> More attractive than full contingency</li>
        <li><strong>Buyer Knowledge:</strong> Not buying completely blind</li>
      </ul>

      <h3>Partial Inspection Waiver Strategies</h3>
      <p>Negotiate limited inspection protection:</p>
      <ul>
        <li><strong>Major Systems Only:</strong> Right to cancel for foundation/structural/roof issues only</li>
        <li><strong>Dollar Threshold:</strong> Can renegotiate if repairs exceed $10K</li>
        <li><strong>Safety Issues Only:</strong> Can address electrical/plumbing/structural hazards</li>
        <li><strong>Shortened Period:</strong> 3-5 days instead of standard 7-10 days</li>
        <li><strong>No Cosmetic Items:</strong> Waive right to request cosmetic/minor repairs</li>
        <li><strong>Credit Cap:</strong> Seller agrees to credit up to $5K, buyer accepts rest</li>
      </ul>

      <h3>Financial Impact Assessment</h3>
      <p>Calculate potential exposure:</p>
      <ul>
        <li><strong>Purchase Price:</strong> $500,000</li>
        <li><strong>Best Case (No Issues):</strong> $0 unexpected costs</li>
        <li><strong>Likely Case (Minor-Moderate):</strong> $3,000-$10,000 in first-year repairs</li>
        <li><strong>Concerning Case (Major Issues):</strong> $15,000-$50,000 needed soon</li>
        <li><strong>Worst Case (Catastrophic):</strong> $50,000-$100,000+ major systems</li>
        <li><strong>Your Risk Exposure:</strong> Accepting full downside without inspection</li>
      </ul>

      <h3>Age-Based Risk Assessment</h3>
      <p>Property age significantly affects inspection importance:</p>
      <ul>
        <li><strong>0-10 Years:</strong> Lower risk, systems under warranty, modern codes</li>
        <li><strong>10-20 Years:</strong> Moderate risk, some systems approaching end of life</li>
        <li><strong>20-40 Years:</strong> Higher risk, multiple systems likely need replacement</li>
        <li><strong>40-60 Years:</strong> Significant risk, outdated systems and materials</li>
        <li><strong>60+ Years:</strong> Very high risk, historic issues, unique systems</li>
      </ul>

      <h3>Red Flags That Demand Inspection</h3>
      <p>Never waive inspection if you notice:</p>
      <ul>
        <li>Visible foundation cracks or settlement</li>
        <li>Water stains on ceilings or walls</li>
        <li>Musty odors suggesting mold/moisture</li>
        <li>Sagging roofline or missing shingles</li>
        <li>Electrical panel with rust or burn marks</li>
        <li>Uneven floors or stuck doors/windows</li>
        <li>Evidence of pest activity or damage</li>
        <li>Seller disclosure of known defects</li>
      </ul>

      <h3>Alternatives to Inspection Waiver</h3>
      <p>Strengthen offer without waiving inspection:</p>
      <ul>
        <li><strong>Shorten Inspection Period:</strong> 5 days instead of 10</li>
        <li><strong>Limit Repair Requests:</strong> Only major items over $1,000</li>
        <li><strong>As-Is After Inspection:</strong> Informational only, no renegotiation</li>
        <li><strong>Pre-Inspection:</strong> Inspect before offer, then waive</li>
        <li><strong>Higher Price:</strong> Offer more money, keep protection</li>
        <li><strong>Larger Earnest Money:</strong> Show commitment differently</li>
        <li><strong>Faster Closing:</strong> Convenience instead of risk</li>
      </ul>

      <h3>Legal and Practical Considerations</h3>
      <ul>
        <li><strong>Written Waiver:</strong> Must be explicitly stated in contract</li>
        <li><strong>Seller Disclosure:</strong> Doesn't absolve seller of disclosure requirements</li>
        <li><strong>Fraud Protection:</strong> Can still cancel if seller knowingly concealed defects</li>
        <li><strong>Lender Requirements:</strong> Some loans (FHA/VA) may require inspections</li>
        <li><strong>Insurance Impacts:</strong> Some issues may affect insurability</li>
        <li><strong>Attorney Review:</strong> Have real estate attorney review waiver language</li>
        <li><strong>No Recourse:</strong> Generally cannot sue for undisclosed defects if you waived</li>
      </ul>

      <h3>Post-Purchase Protection</h3>
      <p>If you do waive inspection:</p>
      <ul>
        <li><strong>Home Warranty:</strong> Purchase comprehensive home warranty ($500-$1,000/year)</li>
        <li><strong>Post-Closing Inspection:</strong> Hire inspector after purchase for future planning</li>
        <li><strong>Emergency Fund:</strong> Maintain 1-2% of home value for repairs</li>
        <li><strong>System Evaluations:</strong> Have HVAC, electrical, plumbing pros evaluate</li>
        <li><strong>Insurance Review:</strong> Ensure adequate coverage for risks</li>
        <li><strong>Maintenance Plan:</strong> Proactive upkeep to prevent issues</li>
      </ul>

      <h3>Common Misconceptions</h3>
      <ul>
        <li><strong>Myth:</strong> "Waiving inspection means I can't get an inspection"</li>
        <li><strong>Reality:</strong> You can inspect, but waive right to negotiate/cancel</li>
        <li><strong>Myth:</strong> "New homes don't need inspections"</li>
        <li><strong>Reality:</strong> New construction often has defects—always inspect</li>
        <li><strong>Myth:</strong> "Seller disclosure covers everything"</li>
        <li><strong>Reality:</strong> Sellers only disclose what they know about</li>
        <li><strong>Myth:</strong> "I can still back out if I find major issues"</li>
        <li><strong>Reality:</strong> Waiving inspection usually means you can't cancel</li>
      </ul>

      <h3>Who Benefits from This Tool</h3>
      <ul>
        <li><strong>Homebuyers:</strong> Understand risks before waiving inspection protection</li>
        <li><strong>Buyer's Agents:</strong> Educate clients on inspection waiver implications</li>
        <li><strong>First-Time Buyers:</strong> Learn importance of professional inspections</li>
        <li><strong>Investors:</strong> Assess risk/reward of competitive waiver strategies</li>
        <li><strong>Sellers:</strong> Understand buyer perspective on inspection waivers</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Waiving home inspection is one of the riskiest decisions a buyer can make. While it can provide competitive advantage in hot markets, it exposes you to potentially massive unexpected costs. The Inspection Waiver Risk Calculator helps you evaluate whether waiving inspection makes sense for your specific situation, property, and risk tolerance. In most cases, better strategies exist: pre-offer inspections, informational-only inspections, or partial waivers that maintain some protection. Use this tool to understand your financial exposure, evaluate alternatives, and make informed decisions. Remember: a $400 inspection could save you $40,000 in hidden repairs. Unless you have compelling reasons and substantial reserves, maintain your inspection rights—it's your most important buyer protection.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: '500000',
        placeholder: 'e.g., 500000',
      },
      {
        name: 'propertyAge',
        label: 'Property Age (Years)',
        type: 'number',
        defaultValue: '25',
        placeholder: 'e.g., 25',
      },
      {
        name: 'repairReserves',
        label: 'Available Repair Reserves',
        type: 'number',
        defaultValue: '20000',
        placeholder: 'e.g., 20000',
      },
      {
        name: 'propertyCondition',
        label: 'Apparent Condition',
        type: 'text',
        defaultValue: 'Average',
        placeholder: 'e.g., Excellent, Good, Average, Poor',
      },
    ],
    results: [
      { 
        label: 'Risk Analysis', 
        isCurrency: false 
      },
      { 
        label: 'Cost Exposure Scenarios', 
        isCurrency: false 
      },
      { 
        label: 'Strategic Recommendations', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const purchasePrice = parseFloat(values.purchasePrice as string) || 500000;
      const propertyAge = parseFloat(values.propertyAge as string) || 25;
      const repairReserves = parseFloat(values.repairReserves as string) || 20000;
      const condition = values.propertyCondition as string || 'Average';

      const formatCurrency = (num: number) => '$' + Math.round(num).toLocaleString();

      let ageRisk = 'MODERATE';
      let ageMultiplier = 1.0;
      if (propertyAge < 10) { ageRisk = 'LOW'; ageMultiplier = 0.5; }
      else if (propertyAge < 20) { ageRisk = 'MODERATE'; ageMultiplier = 0.8; }
      else if (propertyAge < 40) { ageRisk = 'MODERATE-HIGH'; ageMultiplier = 1.2; }
      else if (propertyAge < 60) { ageRisk = 'HIGH'; ageMultiplier = 1.5; }
      else { ageRisk = 'VERY HIGH'; ageMultiplier = 2.0; }

      let conditionMultiplier = 1.0;
      if (condition.toLowerCase().includes('excellent')) conditionMultiplier = 0.6;
      else if (condition.toLowerCase().includes('good')) conditionMultiplier = 0.8;
      else if (condition.toLowerCase().includes('poor') || condition.toLowerCase().includes('fair')) conditionMultiplier = 1.4;

      const baseMinorCost = 2000;
      const baseModerateCost = 7000;
      const baseMajorCost = 30000;
      const baseCatastrophicCost = 75000;

      const minorCost = baseMinorCost * ageMultiplier * conditionMultiplier;
      const moderateCost = baseModerateCost * ageMultiplier * conditionMultiplier;
      const majorCost = baseMajorCost * ageMultiplier * conditionMultiplier;
      const catastrophicCost = baseCatastrophicCost * ageMultiplier * conditionMultiplier;

      const overallRisk = (propertyAge >= 40 || condition.toLowerCase().includes('poor')) ? 'HIGH' :
                         (propertyAge >= 20 || condition.toLowerCase().includes('fair')) ? 'MODERATE-HIGH' :
                         (propertyAge >= 10) ? 'MODERATE' : 'LOW';

      const riskAnalysis = `INSPECTION WAIVER RISK ANALYSIS

Property Profile:
• Purchase Price: ${formatCurrency(purchasePrice)}
• Property Age: ${propertyAge} years
• Apparent Condition: ${condition}
• Repair Reserves: ${formatCurrency(repairReserves)}

AGE-BASED RISK ASSESSMENT: ${ageRisk}

${propertyAge < 10 ? `✓ NEWER PROPERTY (${propertyAge} years)
• Lower risk of major system failures
• Likely under builder warranty if < 5 years
• Modern building codes and materials
• Systems have substantial remaining life
• Inspection waiver is less risky here` :
propertyAge < 20 ? `⚠️ ESTABLISHED PROPERTY (${propertyAge} years)
• Some systems approaching mid-life
• Original components may need replacement soon
• Generally reliable but increasing risk
• Inspection still recommended
• Consider informational-only inspection` :
propertyAge < 40 ? `⚠️ MATURE PROPERTY (${propertyAge} years)
• Multiple systems likely near end of useful life
• Higher probability of deferred maintenance
• Expect significant near-term repairs
• Inspection STRONGLY recommended
• Waiving inspection is risky` :
propertyAge < 60 ? `⚠️ OLDER PROPERTY (${propertyAge} years)
• Most original systems beyond useful life
• Likely outdated electrical, plumbing
• Potential code compliance issues
• Deferred maintenance common
• DO NOT waive inspection` :
`⚠️ HISTORIC PROPERTY (${propertyAge}+ years)
• Very high risk of hidden issues
• Outdated/obsolete systems
• Potential structural concerns
• Lead paint, asbestos likely present
• NEVER waive inspection on properties this old`}

CONDITION ASSESSMENT: ${condition}

${condition.toLowerCase().includes('excellent') ? `✓ EXCELLENT CONDITION
• Well-maintained property
• Lower likelihood of surprises
• Still recommend inspection but risk lower
• Could consider informational-only approach` :
condition.toLowerCase().includes('good') ? `✓ GOOD CONDITION  
• Appears well-cared-for
• Standard risk level for age
• Professional inspection advisable
• Moderate waiver risk` :
condition.toLowerCase().includes('poor') || condition.toLowerCase().includes('fair') ? `⚠️ CONCERNING CONDITION
• Visible deferred maintenance
• High probability of hidden issues
• Expect significant repair costs
• NEVER waive inspection in this condition
• May want multiple specialist inspections` :
`⚠️ AVERAGE CONDITION
• Normal wear and tear for age
• Unknown maintenance history
• Standard risk—inspection recommended
• Waiving carries moderate-high risk`}

OVERALL WAIVER RISK: ${overallRisk}

${overallRisk === 'HIGH' ? `⚠️ HIGH RISK - DO NOT WAIVE INSPECTION

This property profile presents HIGH RISK for inspection waiver:
• Age and/or condition suggest likely issues
• Probability of expensive surprises is significant
• Waiving inspection could cost you tens of thousands
• Your ${formatCurrency(repairReserves)} in reserves may be insufficient
• Standard inspection contingency is ESSENTIAL

STRONG RECOMMENDATION: Do not waive inspection protection` :
overallRisk === 'MODERATE-HIGH' ? `⚠️ MODERATE-HIGH RISK - WAIVER NOT ADVISED

This property presents elevated risk for inspection waiver:
• Age or condition indicate higher-than-average risk
• Hidden issues are likely
• Consider pre-offer inspection if must compete
• Informational-only inspection as compromise
• Full waiver not recommended

RECOMMENDATION: Maintain inspection contingency or use pre-inspection strategy` :
overallRisk === 'MODERATE' ? `⚠️ MODERATE RISK - PROCEED WITH CAUTION

This property presents moderate risk:
• Age and condition are average
• Some issues likely but not catastrophic
• If waiving, strongly consider pre-offer inspection
• Informational-only inspection is reasonable compromise
• Full waiver possible but carries risk

RECOMMENDATION: Pre-inspect or use informational-only inspection` :
`✓ LOWER RISK - WAIVER POSSIBLE WITH PRECAUTIONS

This property presents lower risk for inspection waiver:
• Newer construction or excellent condition
• Reduced probability of major surprises
• Waiver more reasonable here than older properties
• Still recommend informational-only inspection
• Maintain reserves for unexpected issues

RECOMMENDATION: Consider pre-inspection or informational-only approach`}

FINANCIAL PREPAREDNESS:
Repair Reserves: ${formatCurrency(repairReserves)}
Reserve Ratio: ${((repairReserves / purchasePrice) * 100).toFixed(1)}% of purchase price

${repairReserves >= purchasePrice * 0.05 ? '✓ ADEQUATE: Reserves exceed 5% of purchase price' : '⚠️ LIMITED: Reserves below recommended 5% threshold'}
${repairReserves >= purchasePrice * 0.10 ? '✓ STRONG: Reserves exceed 10% of purchase price—well positioned for surprises' : ''}`;

      const costExposure = `POTENTIAL COST EXPOSURE SCENARIOS

Based on property age (${propertyAge} years) and condition (${condition}):

┌────────────────────────────────────────────────────────────────┐
│ SCENARIO 1: BEST CASE (No Major Issues)                       │
└────────────────────────────────────────────────────────────────┘
Estimated Cost: ${formatCurrency(minorCost)}
Probability: 20-30%

Minor cosmetic and maintenance items:
• Caulking, weatherstripping, minor repairs
• Paint touch-ups, gutter cleaning
• Small plumbing fixes, outlet repairs
• Normal wear items

Your Reserves Adequate: ${repairReserves >= minorCost ? 'YES ✓' : 'NO ⚠️'}
Remaining After Repairs: ${formatCurrency(Math.max(0, repairReserves - minorCost))}

┌────────────────────────────────────────────────────────────────┐
│ SCENARIO 2: LIKELY CASE (Moderate Issues)                     │
└────────────────────────────────────────────────────────────────┘
Estimated Cost: ${formatCurrency(moderateCost)}
Probability: 40-50%

Typical findings requiring attention:
• Water heater replacement
• Minor electrical updates
• Plumbing repairs
• HVAC servicing or minor repairs
• Roof repairs (not full replacement)
• Drainage/grading corrections

Your Reserves Adequate: ${repairReserves >= moderateCost ? 'YES ✓' : 'NO ⚠️'}
Remaining After Repairs: ${formatCurrency(Math.max(0, repairReserves - moderateCost))}

┌────────────────────────────────────────────────────────────────┐
│ SCENARIO 3: CONCERNING CASE (Major Issues)                    │
└────────────────────────────────────────────────────────────────┘
Estimated Cost: ${formatCurrency(majorCost)}
Probability: 15-25%

Significant systems requiring replacement/repair:
• HVAC system replacement
• Electrical panel upgrade
• Plumbing re-pipe
• Partial roof replacement
• Foundation repairs
• Extensive water damage remediation

Your Reserves Adequate: ${repairReserves >= majorCost ? 'YES ✓' : 'NO - INSUFFICIENT ⚠️'}
Shortfall if occurs: ${repairReserves < majorCost ? formatCurrency(majorCost - repairReserves) : '$0'}

┌────────────────────────────────────────────────────────────────┐
│ SCENARIO 4: WORST CASE (Catastrophic Problems)                │
└────────────────────────────────────────────────────────────────┘
Estimated Cost: ${formatCurrency(catastrophicCost)}
Probability: 5-10%

Major structural or system failures:
• Foundation failure requiring extensive repair
• Complete roof replacement
• Entire HVAC system (multiple units)
• Full electrical rewiring
• Extensive mold remediation
• Multiple concurrent major system failures

Your Reserves Adequate: ${repairReserves >= catastrophicCost ? 'YES ✓' : 'NO - SEVERELY INSUFFICIENT ⚠️'}
Shortfall if occurs: ${repairReserves < catastrophicCost ? formatCurrency(catastrophicCost - repairReserves) : '$0'}

┌────────────────────────────────────────────────────────────────┐
│ EXPECTED VALUE ANALYSIS                                        │
└────────────────────────────────────────────────────────────────┘

Probability-weighted expected repair cost:
• Best case (25%): ${formatCurrency(minorCost * 0.25)}
• Likely case (45%): ${formatCurrency(moderateCost * 0.45)}
• Concerning (20%): ${formatCurrency(majorCost * 0.20)}
• Worst case (10%): ${formatCurrency(catastrophicCost * 0.10)}

EXPECTED TOTAL: ${formatCurrency(minorCost * 0.25 + moderateCost * 0.45 + majorCost * 0.20 + catastrophicCost * 0.10)}

This is the average amount you should budget for repairs in Year 1
based on property age and condition probability distributions.

YOUR FINANCIAL POSITION:
Reserves Available: ${formatCurrency(repairReserves)}
Expected Costs: ${formatCurrency(minorCost * 0.25 + moderateCost * 0.45 + majorCost * 0.20 + catastrophicCost * 0.10)}
${repairReserves >= (minorCost * 0.25 + moderateCost * 0.45 + majorCost * 0.20 + catastrophicCost * 0.10) ? 
  '✓ Reserves cover expected costs' : 
  '⚠️ Reserves below expected costs'}

RISK OF INSUFFICIENT FUNDS:
${repairReserves < majorCost ? `⚠️ HIGH: ${((15 + 5) * (repairReserves < moderateCost ? 2 : 1)).toFixed(0)}% chance repairs exceed your reserves` :
  repairReserves < catastrophicCost ? `⚠️ MODERATE: ~5-10% chance repairs exceed your reserves` :
  `✓ LOW: Reserves cover even worst-case scenarios`}`;

      const recommendations = `STRATEGIC RECOMMENDATIONS

Based on your property profile and financial position:

${overallRisk === 'HIGH' || overallRisk === 'MODERATE-HIGH' ? `
┌────────────────────────────────────────────────────────────────┐
│ RECOMMENDATION: DO NOT WAIVE INSPECTION                        │
└────────────────────────────────────────────────────────────────┘

❌ FULL WAIVER: NOT RECOMMENDED

Property age (${propertyAge} years) and/or condition (${condition}) present 
too much risk for inspection waiver. Hidden issues are likely.

ALTERNATIVE STRATEGIES:

✓ STRATEGY 1: FULL INSPECTION CONTINGENCY (BEST)
• Maintain standard 10-day inspection period
• Full negotiation and cancellation rights
• Professional evaluation of all systems
• Protect your investment
• Request repairs or credits as needed

✓ STRATEGY 2: SHORTENED INSPECTION PERIOD
• Reduce to 5-7 days (faster than standard)
• Shows seller you'll move quickly
• Maintains your protection
• Still competitive in many markets

✓ STRATEGY 3: LIMITED REPAIR REQUESTS
• Inspect fully but limit negotiation scope
• "Will only request repairs over $5,000"
• "Major systems and safety issues only"
• Balances protection with seller appeal

✓ STRATEGY 4: PRE-OFFER INSPECTION (IF TIMING ALLOWS)
• Inspect before submitting offer
• Know exactly what you're buying
• Make informed offer with issues priced in
• Then waive inspection in offer
• Cost: $400-600 before offer accepted
• Best approach if seller/timing allows

STRENGTHEN OFFER WITHOUT WAIVING INSPECTION:
→ Offer higher price
→ Faster closing timeline
→ Larger earnest money deposit
→ Accommodate seller's preferred dates
→ Reduce other contingency periods
→ Waive appraisal instead (less risky)

WHY THIS MATTERS:
With ${formatCurrency(repairReserves)} in reserves and expected costs 
of ${formatCurrency(minorCost * 0.25 + moderateCost * 0.45 + majorCost * 0.20 + catastrophicCost * 0.10)}, 
you're at risk of significant financial strain if major issues emerge.

An inspection costs $400-600 but could reveal $${Math.round(majorCost).toLocaleString()}+ 
in needed repairs—potentially saving you from a disastrous purchase.` :
`
┌────────────────────────────────────────────────────────────────┐
│ RECOMMENDATION: INFORMATIONAL-ONLY OR PRE-INSPECTION          │
└────────────────────────────────────────────────────────────────┘

This property presents moderate risk. Full waiver possible but not ideal.

✓ BEST APPROACH: PRE-OFFER INSPECTION
1. Schedule inspection before submitting offer
2. Review findings and assess condition
3. Adjust offer price to account for needed repairs
4. Submit offer with inspection contingency waived
5. Competitive + informed + confident

Benefits:
→ Know exactly what you're buying
→ No surprises after contract
→ Can waive inspection confidently
→ Demonstrate serious buyer intent
→ Faster closing (no inspection period)

Cost: $400-600 upfront (before offer acceptance)
Worth it if: You're serious about this property

✓ ALTERNATIVE: INFORMATIONAL-ONLY INSPECTION
• Conduct inspection during contingency period
• Learn about property condition
• NO right to request repairs/credits
• NO right to cancel based on findings
• Budget for repairs post-closing

Offer Language:
"Buyer will conduct inspection for informational purposes only and 
waives right to request repairs, credits, or price reduction based 
on inspection findings."

Benefits:
→ More competitive than full contingency
→ Still learn about property condition
→ Plan for future repairs
→ Some protection vs. complete blind purchase

✓ IF YOU MUST COMPETE WITH FULL WAIVER:
Given your ${formatCurrency(repairReserves)} reserves:
• Ensure reserves cover at least ${formatCurrency(majorCost)} (major issues scenario)
• Purchase comprehensive home warranty ($500-1,000/year)
• Have HVAC, electrical, plumbing evaluated post-closing
• Budget 1-2% of purchase price annually for maintenance
• Maintain separate emergency fund

POST-PURCHASE PROTECTION:
☐ Buy home warranty covering major systems
☐ Schedule post-closing inspection for planning
☐ Have specialists evaluate major systems
☐ Create 5-year capital improvement budget
☐ Build repair reserves to ${formatCurrency(purchasePrice * 0.05)}

FINAL DECISION CHECKLIST:
□ Property age < 15 years OR excellent condition
□ No visible red flags (stains, cracks, odors, settling)
□ Reserves exceed ${formatCurrency(majorCost)}
□ Comfortable accepting unknown repairs
□ Competitive situation requires waiver
□ Agent/contractor has assessed property
□ Willing to purchase home warranty

If you check ALL boxes above, proceed with caution.
If ANY box is unchecked, maintain inspection contingency.`}

INSPECTION COST VS. BENEFIT:
Inspection Cost: $400-600
Average Issues Found: $${Math.round(moderateCost).toLocaleString()}
Potential Major Issues: $${Math.round(majorCost).toLocaleString()}+

ROI of Inspection: ${((moderateCost / 500) * 100).toFixed(0)}:1 return on investment

An inspection is the BEST $500 you'll spend in the home buying process.

REMEMBER:
• Inspection is your #1 buyer protection
• Sellers must disclose only what they KNOW
• Many issues are hidden from casual observation
• ${propertyAge} year old homes have systems approaching end of life
• You're making a ${formatCurrency(purchasePrice)} decision
• ${formatCurrency(500)} inspection could save ${formatCurrency(majorCost)}+

Unless you have compelling competitive reasons and substantial reserves,
MAINTAIN your inspection contingency protection.`;

      return [
        { 
          label: 'Risk Analysis', 
          value: riskAnalysis, 
          isCurrency: false 
        },
        { 
          label: 'Cost Exposure Scenarios', 
          value: costExposure, 
          isCurrency: false 
        },
        { 
          label: 'Strategic Recommendations', 
          value: recommendations, 
          isCurrency: false 
        },
      ];
    },
  },
};
