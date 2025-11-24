import { CalculatorContent } from '@/types';

export const InspectionContingencyDaysCalculatorContent: CalculatorContent = {
  title: 'Inspection Contingency Days Calculator - Home Inspection Timeline Tool',
  description: 'Calculate optimal inspection contingency periods, schedule home inspections efficiently, manage repair negotiation deadlines, and balance due diligence with competitive offer appeal in real estate transactions',
  icon: '🏚️',
  category: 'Additional Tools',
  slug: 'inspection-contingency-days-calculator',
  
  article: {
    title: 'Inspection Contingency Days Calculator - Timeline and Strategy Guide',
    content: `
      <h2>Inspection Contingency Days Calculator</h2>
      <p>The inspection contingency allows buyers to evaluate property condition before finalizing purchase. The Inspection Contingency Days Calculator helps buyers and agents determine appropriate inspection periods, schedule inspections efficiently, manage negotiation timelines, and balance thorough due diligence with competitive offer terms that appeal to sellers in different market conditions.</p>

      <h3>Standard Inspection Periods</h3>
      <p>Typical timeframes by market and complexity:</p>
      <ul>
        <li><strong>Hot Seller's Market:</strong> 5-7 days (pressure to move quickly)</li>
        <li><strong>Balanced Market:</strong> 7-10 days (standard professional timeline)</li>
        <li><strong>Buyer's Market:</strong> 10-14 days (buyers have leverage)</li>
        <li><strong>Complex Properties:</strong> 10-14 days (large, old, or unique homes)</li>
        <li><strong>Simple Properties:</strong> 5-7 days (newer, smaller, standard homes)</li>
        <li><strong>Condos/Townhomes:</strong> 7-10 days (HOA documents add complexity)</li>
      </ul>

      <h3>What Happens During Inspection Period</h3>
      <p>Critical activities and timeline:</p>
      <ul>
        <li><strong>Day 1-2:</strong> Hire inspector, schedule inspection appointment</li>
        <li><strong>Day 2-4:</strong> Inspection conducted (2-4 hours typically)</li>
        <li><strong>Day 3-5:</strong> Receive detailed inspection report</li>
        <li><strong>Day 4-7:</strong> Review findings, consult with agent/contractors</li>
        <li><strong>Day 5-8:</strong> Decide: accept as-is, request repairs, or negotiate</li>
        <li><strong>Day 6-10:</strong> Submit repair requests or remove contingency</li>
        <li><strong>By Deadline:</strong> Remove contingency, negotiate, or cancel contract</li>
      </ul>

      <h3>Inspection Contingency Options</h3>
      <p>Different levels of protection:</p>
      <ul>
        <li><strong>Full Contingency:</strong> Can cancel or negotiate for any reason</li>
        <li><strong>Informational Only:</strong> Inspect but can't renegotiate or cancel</li>
        <li><strong>Major Issues Only:</strong> Can negotiate only for significant defects</li>
        <li><strong>Dollar Threshold:</strong> Renegotiate only if repairs exceed $X</li>
        <li><strong>Safety/Structural Only:</strong> Limited to major system failures</li>
        <li><strong>Pre-Inspection + Waiver:</strong> Inspect before offer, then waive</li>
      </ul>

      <h3>Factors Affecting Inspection Timeline</h3>
      <p><strong>Property Factors:</strong></p>
      <ul>
        <li>Property Age: Older homes take longer to inspect thoroughly</li>
        <li>Property Size: Larger homes need more inspection time</li>
        <li>Property Type: Single-family vs. condo vs. multi-family</li>
        <li>Systems Complexity: Multiple HVAC units, pools, outbuildings</li>
        <li>Accessibility: Remote locations, scheduling challenges</li>
      </ul>

      <p><strong>Market Factors:</strong></p>
      <ul>
        <li>Inspector Availability: Busy markets = longer waits</li>
        <li>Competitive Pressure: Multiple offers = shorter periods</li>
        <li>Seller Expectations: May dictate preferred timeline</li>
        <li>Time of Year: Spring/summer busier = harder scheduling</li>
      </ul>

      <h3>Specialist Inspections</h3>
      <p>Additional inspections that may extend timeline:</p>
      <ul>
        <li><strong>Structural Engineer:</strong> Foundation/structural concerns (+2-3 days)</li>
        <li><strong>Roof Specialist:</strong> Detailed roof evaluation (+1-2 days)</li>
        <li><strong>HVAC Technician:</strong> System performance testing (+1-2 days)</li>
        <li><strong>Plumber:</strong> Sewer scope, water quality (+1-2 days)</li>
        <li><strong>Electrician:</strong> Panel, wiring evaluation (+1-2 days)</li>
        <li><strong>Pest Inspector:</strong> Termites, wood-destroying insects (+1-2 days)</li>
        <li><strong>Radon Testing:</strong> 48-hour minimum test period (+3-4 days)</li>
        <li><strong>Well/Septic:</strong> Water quality, septic pumping inspection (+2-3 days)</li>
      </ul>

      <h3>Strategic Timeline Decisions</h3>
      <p><strong>Shorter Period (5-7 Days) When:</strong></p>
      <ul>
        <li>Competitive multiple offer situation</li>
        <li>Newer home in good condition</li>
        <li>You've pre-screened property during showings</li>
        <li>Inspector available immediately</li>
        <li>Simple property without complex systems</li>
        <li>You're prepared to act quickly on findings</li>
      </ul>

      <p><strong>Standard Period (7-10 Days) When:</strong></p>
      <ul>
        <li>Balanced market conditions</li>
        <li>Average property age and complexity</li>
        <li>Want adequate time for thorough review</li>
        <li>May need specialist follow-up inspections</li>
        <li>Standard negotiation timeline needed</li>
      </ul>

      <p><strong>Longer Period (10-14 Days) When:</strong></p>
      <ul>
        <li>Older or complex property</li>
        <li>Large estate requiring extensive inspection</li>
        <li>Multiple specialist inspections anticipated</li>
        <li>Rural property with well/septic</li>
        <li>Buyer's market allows extended timeline</li>
        <li>Need time to get contractor estimates</li>
      </ul>

      <h3>Repair Negotiation Strategies</h3>
      <p>Options after receiving inspection report:</p>
      <ul>
        <li><strong>Request Repairs:</strong> Ask seller to fix specific items before closing</li>
        <li><strong>Request Credit:</strong> Ask for closing cost credit to cover repairs yourself</li>
        <li><strong>Request Price Reduction:</strong> Lower purchase price by estimated repair costs</li>
        <li><strong>Accept As-Is:</strong> Remove contingency, accept property in current condition</li>
        <li><strong>Cancel Contract:</strong> Walk away and recover earnest money</li>
        <li><strong>Combination:</strong> Seller fixes major items, credit for minor items</li>
      </ul>

      <h3>Common Inspection Findings</h3>
      <p>What inspectors typically discover:</p>
      <ul>
        <li><strong>Minor (Cosmetic):</strong> Caulking, weatherstripping, paint ($200-$1,000)</li>
        <li><strong>Moderate:</strong> Water heater, electrical outlets, gutters ($1,000-$5,000)</li>
        <li><strong>Major:</strong> HVAC, roof, foundation repairs ($5,000-$25,000)</li>
        <li><strong>Safety:</strong> Electrical hazards, structural issues (price negotiable)</li>
        <li><strong>Deal-Breakers:</strong> Major foundation failure, extensive damage (may cancel)</li>
      </ul>

      <h3>Inspection Contingency Removal</h3>
      <p>How to finalize inspection phase:</p>
      <ul>
        <li><strong>Written Removal:</strong> Sign contingency removal form</li>
        <li><strong>Before Deadline:</strong> Must remove or cancel before period expires</li>
        <li><strong>After Removal:</strong> Cannot cancel due to inspection findings</li>
        <li><strong>Earnest Money:</strong> At risk after contingency removed</li>
        <li><strong>Automatic Expiration:</strong> If you don't act, contingency expires</li>
        <li><strong>Negotiation Completion:</strong> Often follows repair negotiation agreement</li>
      </ul>

      <h3>Who Benefits from This Tool</h3>
      <ul>
        <li><strong>Homebuyers:</strong> Plan inspection timelines efficiently</li>
        <li><strong>Buyer's Agents:</strong> Advise clients on appropriate periods</li>
        <li><strong>Home Inspectors:</strong> Understand client timeline constraints</li>
        <li><strong>Sellers:</strong> Set expectations for inspection phase</li>
        <li><strong>Listing Agents:</strong> Evaluate inspection terms in offers</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Setting the right inspection contingency period balances thorough due diligence with competitive offer appeal. The Inspection Contingency Days Calculator helps you determine optimal timelines based on property characteristics, market conditions, and your due diligence needs. Use this tool to create realistic schedules, coordinate multiple inspections efficiently, and structure offers that protect your interests while remaining attractive to sellers. Remember: the inspection is your most important buyer protection—allocate sufficient time to do it right, but don't drag it out unnecessarily in competitive markets.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'propertyAge',
        label: 'Property Age (Years)',
        type: 'number',
        defaultValue: '20',
        placeholder: 'e.g., 20',
      },
      {
        name: 'propertySize',
        label: 'Property Size (Sq Ft)',
        type: 'number',
        defaultValue: '2000',
        placeholder: 'e.g., 2000',
      },
      {
        name: 'marketCondition',
        label: 'Market Condition',
        type: 'text',
        defaultValue: 'Balanced',
        placeholder: 'e.g., Seller\'s Market, Balanced, Buyer\'s Market',
      },
      {
        name: 'specialistNeeded',
        label: 'Specialist Inspections Anticipated',
        type: 'text',
        defaultValue: 'None',
        placeholder: 'e.g., Roof, Structural, Sewer, None',
      },
    ],
    results: [
      { 
        label: 'Recommended Timeline', 
        isCurrency: false 
      },
      { 
        label: 'Inspection Schedule', 
        isCurrency: false 
      },
      { 
        label: 'Action Checklist', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const age = parseFloat(values.propertyAge as string) || 20;
      const size = parseFloat(values.propertySize as string) || 2000;
      const market = values.marketCondition as string || 'Balanced';
      const specialist = values.specialistNeeded as string || 'None';

      let baseDays = 10;

      // Adjust for property age
      if (age < 10) baseDays -= 2;
      else if (age > 40) baseDays += 2;

      // Adjust for size
      if (size < 1500) baseDays -= 1;
      else if (size > 3000) baseDays += 2;

      // Adjust for market
      if (market.toLowerCase().includes('seller')) baseDays -= 3;
      else if (market.toLowerCase().includes('buyer')) baseDays += 2;

      // Adjust for specialists
      if (!specialist.toLowerCase().includes('none')) baseDays += 2;

      // Floor and ceiling
      baseDays = Math.max(5, Math.min(14, baseDays));

      const timeline = `RECOMMENDED INSPECTION CONTINGENCY TIMELINE

PROPERTY PROFILE:
• Property Age: ${age} years
• Property Size: ${size.toLocaleString()} sq ft
• Market Conditions: ${market}
• Specialist Inspections: ${specialist}

RECOMMENDED INSPECTION PERIOD: ${baseDays} DAYS

${baseDays <= 7 ? `⚡ TIGHT TIMELINE (${baseDays} Days)

This is an aggressive inspection schedule appropriate for:
✓ Competitive seller's market
✓ ${age < 15 ? 'Newer property in good condition' : 'Well-maintained property'}
✓ ${size < 2000 ? 'Smaller, simpler property' : 'Standard property'}
✓ Quick decision-making capability

EXECUTION REQUIREMENTS:
→ Schedule inspector IMMEDIATELY (Day 1)
→ Inspection must occur Day 2-3
→ Review report Day 3-4
→ Make decision Day 5-${baseDays}
→ No time for multiple specialists
→ Be prepared to act quickly

${specialist.toLowerCase().includes('none') ? '✓ No specialist inspections—timeline is feasible' : '⚠️ Specialist inspections may be challenging in this timeline'}` :
baseDays <= 10 ? `✓ STANDARD TIMELINE (${baseDays} Days)

This is a balanced inspection schedule that provides:
• Adequate time for thorough inspection
• Room for review and consultation
• Competitive appeal to sellers
• ${specialist.toLowerCase().includes('none') ? 'Time for one specialist inspection if needed' : 'Adequate time for specialist inspections'}

TYPICAL SCHEDULE:
→ Day 1-2: Schedule inspector
→ Day 2-4: Inspection conducted
→ Day 3-5: Receive and review report
→ Day 5-${Math.floor(baseDays * 0.7)}: Consult with contractors/specialists
→ Day ${Math.floor(baseDays * 0.7)}-${baseDays}: Make decision, negotiate, or remove` :
`✓ EXTENDED TIMELINE (${baseDays} Days)

This is a comprehensive inspection schedule for:
• ${age > 40 ? 'Older property requiring thorough evaluation' : 'Complex property'}
• ${size > 3000 ? 'Large property needing extensive inspection' : 'Property with multiple systems'}
• ${!specialist.toLowerCase().includes('none') ? 'Multiple specialist inspections planned' : 'Thorough due diligence'}
• Buyer's market allowing extended timeline

DETAILED SCHEDULE:
→ Days 1-3: Schedule general and specialist inspections
→ Days 3-6: Conduct general home inspection
→ Days 5-${Math.floor(baseDays * 0.6)}: Specialist inspections as needed
→ Days ${Math.floor(baseDays * 0.6)}-${Math.floor(baseDays * 0.8)}: Review all reports, get estimates
→ Days ${Math.floor(baseDays * 0.8)}-${baseDays}: Negotiate repairs or remove contingency`}

COMPETITIVE ANALYSIS:
Industry Standard: 7-10 days
Your Timeline: ${baseDays} days (${baseDays < 7 ? 'AGGRESSIVE' : baseDays <= 10 ? 'COMPETITIVE' : 'CONSERVATIVE'})

${baseDays < 7 ? '✓ Highly competitive in multiple offer situations' : ''}
${baseDays <= 10 ? '✓ Balanced approach—protection with appeal' : ''}
${baseDays > 10 ? '⚠️ May be less competitive in hot markets' : ''}

ALTERNATIVE OPTIONS:
${baseDays < 10 ? `• If you want more time: Consider ${baseDays + 3} days
• Pre-inspection strategy: Inspect before offer, then waive` : ''}
${baseDays > 10 ? `• If you want to be more competitive: Try ${baseDays - 3} days
• Ensure you can execute efficiently` : ''}`;

      const today = new Date();
      const addDays = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toLocaleDateString();
      };

      const schedule = `DETAILED INSPECTION SCHEDULE

CONTRACT DATE: ${today.toLocaleDateString()} (Day 0)
INSPECTION DEADLINE: ${addDays(today, baseDays)} (Day ${baseDays})

DAY 1: ${addDays(today, 1)}
☐ Hire licensed home inspector
☐ Schedule inspection appointment (ASAP)
☐ Coordinate property access with listing agent
☐ ${specialist.toLowerCase().includes('none') ? 'Consider if any specialists are needed' : 'Schedule specialist inspections: ' + specialist}

DAY 2-${Math.min(3, Math.floor(baseDays * 0.3))}: ${addDays(today, 2)} - ${addDays(today, Math.min(3, Math.floor(baseDays * 0.3)))}
☐ General home inspection conducted (2-4 hours)
☐ Inspector evaluates:
  • Structure and foundation
  • Roof and attic
  • Electrical systems
  • Plumbing systems
  • HVAC systems
  • Appliances
  • Windows and doors
  • Exterior/drainage
☐ Take notes, ask questions during inspection

DAY ${Math.min(3, Math.floor(baseDays * 0.3))}-${Math.min(5, Math.floor(baseDays * 0.5))}: ${addDays(today, Math.min(3, Math.floor(baseDays * 0.3)))} - ${addDays(today, Math.min(5, Math.floor(baseDays * 0.5)))}
☐ Receive detailed inspection report (24-48 hours after inspection)
☐ Review findings carefully with your agent
☐ Identify major vs. minor issues
☐ Flag safety concerns or deal-breakers
${specialist.toLowerCase().includes('none') ? '☐ Determine if specialist inspections are now needed based on findings' : '☐ Conduct specialist inspections as scheduled'}

DAY ${Math.min(5, Math.floor(baseDays * 0.5))}-${Math.floor(baseDays * 0.7)}: ${addDays(today, Math.min(5, Math.floor(baseDays * 0.5)))} - ${addDays(today, Math.floor(baseDays * 0.7))}
☐ Get contractor estimates for major repairs if needed
☐ Consult with specialist inspectors
☐ Calculate total repair costs
☐ Assess which items are deal-breakers vs. negotiable
☐ Discuss strategy with your agent

DAY ${Math.floor(baseDays * 0.7)}-${baseDays - 1}: ${addDays(today, Math.floor(baseDays * 0.7))} - ${addDays(today, baseDays - 1)}
☐ Decide on negotiation strategy:
  Option A: Request specific repairs
  Option B: Request credit at closing
  Option C: Request price reduction
  Option D: Accept as-is and remove contingency
  Option E: Cancel contract
☐ Submit repair request/response to seller
☐ Negotiate if seller counters your request
☐ Reach agreement or make final decision

DAY ${baseDays}: ${addDays(today, baseDays)} - DEADLINE
☐ Remove inspection contingency (in writing) OR
☐ Cancel contract if issues unacceptable
☐ If no action taken, contingency expires automatically

SPECIALIST INSPECTION COORDINATION:
${specialist.toLowerCase().includes('roof') ? '• Roof Specialist: Days 3-5, Report by Day 6' : ''}
${specialist.toLowerCase().includes('structural') || specialist.toLowerCase().includes('engineer') ? '• Structural Engineer: Days 3-6, Report by Day 7' : ''}
${specialist.toLowerCase().includes('sewer') || specialist.toLowerCase().includes('plumb') ? '• Sewer Scope: Days 3-5, Report by Day 6' : ''}
${specialist.toLowerCase().includes('hvac') ? '• HVAC Technician: Days 4-6, Report by Day 7' : ''}
${specialist.toLowerCase().includes('none') ? '• No specialists currently planned' : ''}

TIME BUFFERS:
${baseDays >= 12 ? '✓ COMFORTABLE: 2-3 day buffer for negotiations' :
  baseDays >= 8 ? '✓ ADEQUATE: 1-2 day buffer for review' :
  '⚠️ TIGHT: Minimal buffer—must execute efficiently'}`;

      const checklist = `INSPECTION CONTINGENCY ACTION CHECKLIST

PRE-INSPECTION (Day 1):
☐ Research and hire qualified home inspector
  • Check license and certifications
  • Read reviews and references
  • Confirm they can meet ${baseDays}-day timeline
  • Typical cost: $350-$600
☐ Schedule inspection for Day 2-3
☐ Arrange property access with listing agent
☐ Plan to attend inspection if possible
☐ Prepare list of specific concerns to address

DURING INSPECTION (Days 2-3):
☐ Attend inspection (highly recommended)
☐ Ask questions about findings
☐ Take photos/notes of major issues
☐ Understand severity of each issue
☐ Ask for maintenance recommendations
☐ Discuss areas of concern in detail

REPORT REVIEW (Days 3-5):
☐ Read entire inspection report carefully
☐ Categorize findings:
  • Safety/structural issues (highest priority)
  • Major system failures (HVAC, roof, etc.)
  • Moderate repairs needed
  • Minor maintenance items
  • Cosmetic issues (lowest priority)
☐ Calculate estimated repair costs
☐ Determine deal-breakers vs. negotiables

SPECIALIST DECISIONS (Days 4-6):
${specialist.toLowerCase().includes('none') ? 
`☐ Based on inspection, determine if specialists needed:
  • Foundation cracks → Structural engineer
  • Roof concerns → Roof specialist
  • HVAC issues → HVAC technician
  • Plumbing concerns → Plumber/sewer scope
  • Electrical problems → Licensed electrician` :
`☐ Coordinate scheduled specialist inspections:
  • ${specialist}
☐ Review specialist reports as received
☐ Get cost estimates for recommended work`}

DECISION PHASE (Days ${Math.floor(baseDays * 0.6)}-${baseDays - 2}):
☐ Calculate total estimated repair costs
☐ Decide which issues to address with seller:
  ☐ Safety issues (always negotiate)
  ☐ Major systems (often negotiate)
  ☐ Code violations (negotiate)
  ☐ Moderate repairs (sometimes negotiate)
  ☐ Minor items (usually accept)
☐ Choose negotiation approach:
  Option 1: Seller Repairs Before Closing
    Pro: Work done before you own
    Con: No control over contractor quality
  
  Option 2: Closing Cost Credit
    Pro: You control repairs
    Con: Need cash for repairs post-closing
  
  Option 3: Price Reduction
    Pro: Lower purchase price
    Con: Lender may not approve if too low
  
  Option 4: Accept As-Is
    Pro: Strong signal to seller
    Con: You pay for all repairs
  
  Option 5: Cancel Contract
    Pro: Walk away from problem property
    Con: Back to house hunting

NEGOTIATION (Days ${Math.floor(baseDays * 0.7)}-${baseDays - 1}):
☐ Submit repair request in writing
☐ Provide inspection report to seller
☐ Highlight priority items (safety, major systems)
☐ Be reasonable—don't request every minor item
☐ Wait for seller response
☐ Negotiate if seller counters
☐ Reach mutually acceptable agreement OR
☐ Decide to accept as-is OR
☐ Decide to cancel

CONTINGENCY REMOVAL (Day ${baseDays}):
☐ Sign inspection contingency removal form
☐ Submit to title/escrow company
☐ Or: Submit cancellation notice if unacceptable
☐ Understand earnest money is now at risk (if removed)
☐ Cannot cancel for inspection reasons after removal

WHAT NOT TO REQUEST:
❌ Cosmetic items (paint, landscaping)
❌ Normal wear and tear
❌ Minor caulking/weatherstripping
❌ Seller's personal taste differences
❌ Everything in the inspection report

WHAT TO ALWAYS REQUEST:
✓ Safety hazards (electrical, structural)
✓ Major system failures (HVAC, water heater)
✓ Roof leaks or imminent replacement
✓ Foundation/structural issues
✓ Code violations
✓ Water damage/mold issues

TIMELINE SUMMARY:
Day 1: Hire inspector, schedule appointment
Days 2-3: Inspection conducted
Days 3-5: Review report, assess findings
Days 5-${Math.floor(baseDays * 0.7)}: Get estimates, consult specialists
Days ${Math.floor(baseDays * 0.7)}-${baseDays - 1}: Negotiate with seller
Day ${baseDays}: Remove contingency or cancel

SUCCESS TIPS:
✓ Act quickly—don't waste days
✓ Attend the inspection if at all possible
✓ Be reasonable in repair requests
✓ Focus on major issues, not cosmetics
✓ Get contractor estimates for big items
✓ Negotiate in good faith
✓ Meet your ${baseDays}-day deadline

Your ${baseDays}-day inspection timeline is:
${baseDays <= 7 ? '⚡ AGGRESSIVE—Requires immediate action and quick decisions' :
  baseDays <= 10 ? '✓ COMPETITIVE—Standard timeline with adequate buffer' :
  '✓ COMFORTABLE—Ample time for thorough evaluation'}`;

      return [
        { 
          label: 'Recommended Timeline', 
          value: timeline, 
          isCurrency: false 
        },
        { 
          label: 'Inspection Schedule', 
          value: schedule, 
          isCurrency: false 
        },
        { 
          label: 'Action Checklist', 
          value: checklist, 
          isCurrency: false 
        },
      ];
    },
  },
};
