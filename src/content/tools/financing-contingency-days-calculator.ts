import { CalculatorContent } from '@/types';

export const FinancingContingencyDaysCalculatorContent: CalculatorContent = {
  title: 'Financing Contingency Days Calculator - Mortgage Timeline & Deadline Tool',
  description: 'Calculate optimal financing contingency periods for real estate contracts, understand lender processing timelines, manage mortgage approval deadlines, and balance buyer protection with competitive offer terms',
  icon: '🏦',
  category: 'Additional Tools',
  slug: 'financing-contingency-days-calculator',
  
  article: {
    title: 'Financing Contingency Days Calculator and Timeline Guide',
    content: `
      <h2>Financing Contingency Days Calculator</h2>
      <p>The financing contingency protects buyers by allowing contract cancellation if they cannot obtain loan approval. The Financing Contingency Days Calculator helps buyers, agents, and lenders determine appropriate financing contingency timeframes, understand mortgage processing timelines, calculate critical deadlines, and balance adequate protection time with competitive offer terms that appeal to sellers in various market conditions.</p>

      <h3>Understanding Financing Contingencies</h3>
      <p>Financing contingency basics:</p>
      <ul>
        <li><strong>Purpose:</strong> Protects buyer if lender doesn't approve loan</li>
        <li><strong>Time-Limited:</strong> Expires after specified number of days</li>
        <li><strong>Earnest Money Protection:</strong> Can cancel and recover deposit if financing denied</li>
        <li><strong>Lender Requirements:</strong> Must meet lender's approval conditions</li>
        <li><strong>Good Faith Effort:</strong> Buyer must actively pursue financing</li>
        <li><strong>Standard Practice:</strong> Nearly universal except cash offers</li>
      </ul>

      <h3>Typical Financing Contingency Periods</h3>
      <p>Standard timeframes by loan type and market:</p>
      <ul>
        <li><strong>Conventional Loans:</strong> 21-30 days (most common: 21 days)</li>
        <li><strong>FHA/VA Loans:</strong> 30-45 days (more documentation, longer process)</li>
        <li><strong>Jumbo Loans:</strong> 30-45 days (extensive underwriting)</li>
        <li><strong>Strong Pre-Approval:</strong> 14-21 days (minimal conditions)</li>
        <li><strong>Hot Markets:</strong> 14-21 days (competitive pressure to shorten)</li>
        <li><strong>Buyer's Markets:</strong> 30-45 days (buyers have leverage)</li>
      </ul>

      <h3>What Happens During Financing Contingency Period</h3>
      <p>Critical milestones in the mortgage process:</p>
      <ul>
        <li><strong>Day 1-3:</strong> Submit full loan application to lender</li>
        <li><strong>Day 3-7:</strong> Lender orders appraisal and title search</li>
        <li><strong>Day 7-14:</strong> Submit additional documentation (pay stubs, tax returns, bank statements)</li>
        <li><strong>Day 10-18:</strong> Appraisal completed and reviewed</li>
        <li><strong>Day 14-21:</strong> Underwriter reviews file, may request conditions</li>
        <li><strong>Day 18-25:</strong> Clear underwriting conditions</li>
        <li><strong>By Deadline:</strong> Receive clear-to-close or cancel contract</li>
      </ul>

      <h3>How This Calculator Works</h3>
      <p><strong>Step 1: Select Loan Type</strong></p>
      <p>Choose conventional, FHA, VA, jumbo, or other financing type.</p>
      
      <p><strong>Step 2: Assess Pre-Approval Strength</strong></p>
      <p>Evaluate how thoroughly pre-approved you are (conditions, documentation).</p>
      
      <p><strong>Step 3: Consider Market Conditions</strong></p>
      <p>Factor in whether it's seller's market (shorter) or buyer's market (longer).</p>
      
      <p><strong>Step 4: Calculate Optimal Period</strong></p>
      <p>Determine recommended financing contingency days based on inputs.</p>
      
      <p><strong>Step 5: Plan Timeline</strong></p>
      <p>Create detailed timeline with key milestones and deadlines.</p>

      <h3>Factors Affecting Financing Timeline</h3>
      <p><strong>Lender Speed:</strong></p>
      <ul>
        <li>Direct/portfolio lenders: Faster (14-21 days possible)</li>
        <li>Large banks: Moderate (21-30 days typical)</li>
        <li>Mortgage brokers: Variable (depends on wholesale lender)</li>
        <li>Credit unions: Often slower (30-45 days)</li>
      </ul>

      <p><strong>Buyer Documentation:</strong></p>
      <ul>
        <li>W-2 employee: Faster, straightforward income verification</li>
        <li>Self-employed: Slower, requires 2 years tax returns and extensive docs</li>
        <li>Multiple income sources: Moderate complexity</li>
        <li>Recent job change: May require additional explanation</li>
        <li>Large deposits: Need sourcing documentation</li>
      </ul>

      <p><strong>Property Type:</strong></p>
      <ul>
        <li>Single-family home: Standard timeline</li>
        <li>Condo: Slower, requires HOA review and approval</li>
        <li>Multi-family: Slower, more complex underwriting</li>
        <li>Rural property: Slower, appraisal challenges</li>
        <li>New construction: Variable, depends on completion status</li>
      </ul>

      <h3>Shortening Financing Contingency Strategically</h3>
      <p>When and how to offer shorter periods:</p>
      <ul>
        <li><strong>Strong Pre-Approval:</strong> Full underwriting completed, minimal conditions</li>
        <li><strong>All Docs Ready:</strong> Pay stubs, bank statements, tax returns prepared</li>
        <li><strong>Local Lender:</strong> Faster communication and processing</li>
        <li><strong>Simple Income:</strong> W-2 employee with straightforward finances</li>
        <li><strong>Competitive Offer:</strong> Shorter period appeals to sellers</li>
        <li><strong>Lender Commitment:</strong> Lender confirms they can meet timeline</li>
      </ul>

      <h3>Risks of Too-Short Financing Period</h3>
      <p>Dangers of inadequate time:</p>
      <ul>
        <li><strong>Rushed Process:</strong> Mistakes and oversights more likely</li>
        <li><strong>Missed Deadline:</strong> Lose contingency protection if period expires</li>
        <li><strong>Forced Extension:</strong> Must negotiate with seller to extend</li>
        <li><strong>Earnest Money Risk:</strong> At risk if you can't close after contingency expires</li>
        <li><strong>Deal Falls Through:</strong> Insufficient time may doom transaction</li>
        <li><strong>Stress:</strong> Constant pressure to meet aggressive timeline</li>
      </ul>

      <h3>Extending Financing Contingency</h3>
      <p>When original period proves insufficient:</p>
      <ul>
        <li><strong>Request in Writing:</strong> Formal addendum to contract required</li>
        <li><strong>Before Expiration:</strong> Request extension before current period ends</li>
        <li><strong>Seller Approval:</strong> Seller must agree (they can refuse)</li>
        <li><strong>Provide Reason:</strong> Explain delay (appraisal, underwriting conditions)</li>
        <li><strong>Show Progress:</strong> Demonstrate loan is progressing, not stalled</li>
        <li><strong>Offer Concession:</strong> May need to give something (reduce price, shorten inspection)</li>
        <li><strong>Typical Extensions:</strong> 7-14 additional days</li>
      </ul>

      <h3>Financing vs. Appraisal Contingency</h3>
      <p>Understanding the distinction:</p>
      <ul>
        <li><strong>Separate Contingencies:</strong> Two distinct protections</li>
        <li><strong>Financing Contingency:</strong> Lender approves you and your loan</li>
        <li><strong>Appraisal Contingency:</strong> Property value supports loan amount</li>
        <li><strong>Can Waive Separately:</strong> Independent decisions</li>
        <li><strong>Timing Coordination:</strong> Often overlap but not identical</li>
        <li><strong>Keep Financing:</strong> Even if waiving appraisal, keep financing contingency</li>
      </ul>

      <h3>Communicating Progress to Seller</h3>
      <p>Maintaining seller confidence:</p>
      <ul>
        <li>Provide loan status updates weekly</li>
        <li>Share loan processor contact info</li>
        <li>Submit documents promptly</li>
        <li>Communicate any delays immediately</li>
        <li>Show good-faith effort throughout</li>
        <li>Clear conditions quickly when requested</li>
        <li>Provide clear-to-close letter ASAP</li>
      </ul>

      <h3>Good Faith Effort Requirement</h3>
      <p>Buyer obligations during contingency:</p>
      <ul>
        <li><strong>Pursue Financing:</strong> Actively work with lender</li>
        <li><strong>Timely Application:</strong> Submit full application within 3 days</li>
        <li><strong>Provide Documents:</strong> Supply requested info promptly</li>
        <li><strong>No Major Changes:</strong> Don't change jobs, open credit, make large purchases</li>
        <li><strong>Cooperate:</strong> Respond to lender requests immediately</li>
        <li><strong>Can't Back Out for Convenience:</strong> Must have legitimate financing denial</li>
        <li><strong>Seller Can Challenge:</strong> If you don't make good-faith effort</li>
      </ul>

      <h3>Common Delays and How to Avoid Them</h3>
      <p><strong>Appraisal Delays:</strong></p>
      <ul>
        <li>Order appraisal immediately (Day 1)</li>
        <li>Schedule access promptly</li>
        <li>Rural areas may have appraiser shortages</li>
        <li>Allow extra time in contingency period</li>
      </ul>

      <p><strong>Documentation Issues:</strong></p>
      <ul>
        <li>Gather all docs before going under contract</li>
        <li>2 years tax returns, 2 months bank statements, 30 days pay stubs</li>
        <li>Source any large deposits in advance</li>
        <li>Respond to lender requests same day</li>
      </ul>

      <p><strong>Underwriting Conditions:</strong></p>
      <ul>
        <li>Address conditions immediately</li>
        <li>Don't wait—every day counts</li>
        <li>Work with employer/accountant for needed letters</li>
        <li>Keep lender informed of progress</li>
      </ul>

      <h3>Market-Specific Strategies</h3>
      <p><strong>Seller's Market (Multiple Offers):</strong></p>
      <ul>
        <li>Offer 14-21 days if you have strong pre-approval</li>
        <li>Demonstrate lender's ability to perform quickly</li>
        <li>Provide detailed pre-approval letter</li>
        <li>Consider mortgage approval letter (beyond pre-approval)</li>
        <li>Show you're serious and capable</li>
      </ul>

      <p><strong>Buyer's Market (Negotiating Power):</strong></p>
      <ul>
        <li>Take standard 30-45 days</li>
        <li>Don't rush the process unnecessarily</li>
        <li>Ensure adequate time for thorough review</li>
        <li>Focus on protection over speed</li>
      </ul>

      <h3>Coordination with Other Contingencies</h3>
      <p>Timeline alignment:</p>
      <ul>
        <li><strong>Inspection:</strong> Usually expires before financing (7-10 days)</li>
        <li><strong>Appraisal:</strong> Embedded within financing timeline</li>
        <li><strong>Title:</strong> Often runs concurrent with financing</li>
        <li><strong>HOA Documents:</strong> Shortest period (3-5 days typically)</li>
        <li><strong>Closing Date:</strong> Set 3-7 days after financing deadline for buffer</li>
      </ul>

      <h3>Financing Contingency Removal</h3>
      <p>Formally removing the contingency:</p>
      <ul>
        <li><strong>Clear to Close:</strong> Lender issues clear-to-close letter</li>
        <li><strong>Written Removal:</strong> Sign contingency removal form</li>
        <li><strong>Non-Refundable Earnest Money:</strong> Becomes at-risk after removal</li>
        <li><strong>Committed to Close:</strong> Can no longer back out due to financing</li>
        <li><strong>Timing:</strong> Can remove early if approved, or expires automatically</li>
        <li><strong>Seller Relief:</strong> Seller knows deal is solid</li>
      </ul>

      <h3>Who Benefits from This Tool</h3>
      <ul>
        <li><strong>Homebuyers:</strong> Calculate appropriate financing contingency periods</li>
        <li><strong>Buyer's Agents:</strong> Advise clients on optimal timelines</li>
        <li><strong>Loan Officers:</strong> Set realistic expectations with borrowers</li>
        <li><strong>Listing Agents:</strong> Evaluate financing strength of offers</li>
        <li><strong>Sellers:</strong> Understand buyer financing timelines and risks</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Setting the right financing contingency period balances buyer protection with seller appeal. Too short and you risk losing your earnest money if financing falls through; too long and your offer may be less competitive. The Financing Contingency Days Calculator helps you determine optimal timelines based on loan type, pre-approval strength, property complexity, and market conditions. Use this tool to calculate realistic deadlines, create detailed timelines with milestones, and structure offers that protect your interests while remaining competitive. Remember: your financing contingency is critical protection—never waive it unless you're paying cash. Work closely with your lender to ensure the timeline you commit to is achievable, then execute flawlessly to close on time and secure your new home.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'text',
        defaultValue: 'Conventional',
        placeholder: 'e.g., Conventional, FHA, VA, Jumbo',
      },
      {
        name: 'preApprovalStrength',
        label: 'Pre-Approval Strength',
        type: 'text',
        defaultValue: 'Standard',
        placeholder: 'e.g., Full Underwriting, Strong, Standard, Weak',
      },
      {
        name: 'marketCondition',
        label: 'Market Condition',
        type: 'text',
        defaultValue: 'Balanced',
        placeholder: 'e.g., Seller\'s Market, Balanced, Buyer\'s Market',
      },
      {
        name: 'employmentType',
        label: 'Employment Type',
        type: 'text',
        defaultValue: 'W-2 Employee',
        placeholder: 'e.g., W-2 Employee, Self-Employed, Multiple Sources',
      },
    ],
    results: [
      { 
        label: 'Recommended Timeline', 
        isCurrency: false 
      },
      { 
        label: 'Detailed Milestones', 
        isCurrency: false 
      },
      { 
        label: 'Execution Checklist', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { loanType, preApprovalStrength, marketCondition, employmentType } = values;

      let baseDays = 21;
      
      // Adjust for loan type
      if (loanType?.toLowerCase().includes('fha') || loanType?.toLowerCase().includes('va')) {
        baseDays = 30;
      } else if (loanType?.toLowerCase().includes('jumbo')) {
        baseDays = 35;
      }

      // Adjust for pre-approval strength
      if (preApprovalStrength?.toLowerCase().includes('full') || preApprovalStrength?.toLowerCase().includes('underwriting')) {
        baseDays -= 7;
      } else if (preApprovalStrength?.toLowerCase().includes('weak')) {
        baseDays += 7;
      }

      // Adjust for market
      if (marketCondition?.toLowerCase().includes('seller')) {
        baseDays -= 5;
      } else if (marketCondition?.toLowerCase().includes('buyer')) {
        baseDays += 7;
      }

      // Adjust for employment
      if (employmentType?.toLowerCase().includes('self')) {
        baseDays += 7;
      }

      // Floor and ceiling
      baseDays = Math.max(14, Math.min(45, baseDays));

      const recommended = `RECOMMENDED FINANCING CONTINGENCY TIMELINE

LOAN PROFILE:
• Loan Type: ${loanType || 'Conventional'}
• Pre-Approval: ${preApprovalStrength || 'Standard'}
• Employment: ${employmentType || 'W-2 Employee'}
• Market Conditions: ${marketCondition || 'Balanced'}

RECOMMENDED FINANCING CONTINGENCY: ${baseDays} DAYS

${baseDays <= 18 ? `⚡ AGGRESSIVE TIMELINE (${baseDays} Days)

This is a very tight financing timeline. Only appropriate if:
✓ You have strong/full underwriting pre-approval
✓ All documentation is ready and organized
✓ Simple W-2 employment income
✓ Local lender committed to fast turnaround
✓ Conventional loan (not FHA/VA/Jumbo)
✓ Competitive market requires speed

RISKS:
⚠️ Very little margin for error or delays
⚠️ Appraisal delays could jeopardize timeline
⚠️ Any underwriting conditions must be cleared immediately
⚠️ May need to request extension if issues arise

REQUIREMENTS FOR SUCCESS:
→ Submit loan application Day 1
→ Respond to all lender requests same day
→ Have all documents pre-organized
→ Order appraisal immediately
→ Clear any conditions within 24-48 hours
→ Daily communication with loan officer

COMPETITIVE ADVANTAGE:
✓ ${baseDays}-day financing appeals to sellers
✓ Demonstrates you're serious and qualified
✓ Shows confidence in your financing
✓ May win in multiple offer situation` :
baseDays <= 25 ? `✓ COMPETITIVE TIMELINE (${baseDays} Days)

This is a reasonable financing timeline that balances:
• Adequate time for normal processing
• Competitive appeal to sellers
• Protection for buyer

APPROPRIATE WHEN:
✓ You have solid pre-approval
✓ Documentation is mostly ready
✓ Conventional or simple loan program
✓ ${marketCondition?.toLowerCase().includes('seller') ? 'Seller\'s market requires competitiveness' : 'Standard market conditions'}
✓ Experienced lender with good track record

TIMELINE FEASIBILITY:
✓ Enough time for appraisal (7-10 days)
✓ Room for underwriting review
✓ Buffer for clearing conditions
✓ Allows document collection
✓ Standard processing timeframe

SUCCESS FACTORS:
→ Submit application within 3 days
→ Organize documents immediately
→ Respond to requests within 24 hours
→ Stay in close contact with lender
→ Clear conditions promptly` :
baseDays <= 35 ? `✓ STANDARD TIMELINE (${baseDays} Days)

This is a comfortable, conventional financing timeline:
• Adequate time for thorough processing
• Minimal stress and rush
• Standard seller expectation
• Good protection for buyer

APPROPRIATE WHEN:
✓ ${loanType?.toLowerCase().includes('fha') || loanType?.toLowerCase().includes('va') ? loanType + ' loan requires extra time' : 'Standard loan processing'}
✓ ${employmentType?.toLowerCase().includes('self') ? 'Self-employed income requires additional documentation' : 'W-2 employment is straightforward'}
✓ Balanced or buyer's market
✓ Want adequate buffer for contingencies

TIMELINE BENEFITS:
✓ Room for appraisal delays
✓ Time to address underwriting conditions
✓ Comfortable document submission schedule
✓ Buffer for unexpected issues
✓ Standard seller expectation

RECOMMENDED APPROACH:
→ Submit application within 5 days
→ Provide documents as requested
→ Normal response timeframes
→ Less pressure than shorter periods` :
`⏱️ EXTENDED TIMELINE (${baseDays} Days)

This is a longer financing timeline appropriate for:
• Complex loan scenarios
• Jumbo or non-QM financing
• Self-employed borrowers
• Multiple income sources
• Buyer's market with leverage

REASONS FOR EXTENDED PERIOD:
${loanType?.toLowerCase().includes('jumbo') ? '• Jumbo loans require extensive underwriting' : ''}
${employmentType?.toLowerCase().includes('self') ? '• Self-employed income verification takes time' : ''}
${marketCondition?.toLowerCase().includes('buyer') ? '• Buyer\'s market allows longer timelines' : ''}

TIMELINE ADVANTAGES:
✓ Ample time for complex underwriting
✓ Room for multiple rounds of conditions
✓ Stress-free document gathering
✓ Buffer for any delays
✓ Thorough due diligence

EXECUTION:
→ Submit application within 7 days
→ Methodical document submission
→ Time to address complex issues
→ Room for lender thoroughness`}

ALTERNATIVE STRATEGIES:
${baseDays < 21 ? `• If timeline feels too tight, consider ${baseDays + 7} days
• Provide proof of lender's ability to perform quickly
• Get mortgage approval letter (beyond pre-approval)` : ''}
${baseDays > 30 ? `• If you want to be more competitive, try ${baseDays - 7} days
• Only if your loan is straightforward
• Confirm lender can meet shorter timeline` : ''}

LENDER COORDINATION:
☐ Confirm lender can meet ${baseDays}-day timeline
☐ Discuss potential challenges specific to your loan
☐ Get commitment in writing if possible
☐ Understand what you must provide and when
☐ Set expectations for communication frequency

COMPARISON TO INDUSTRY STANDARDS:
• FHA/VA Loans: Typically 30-45 days
• Conventional: Typically 21-30 days
• Jumbo: Typically 30-45 days
• Cash (no financing): 0 days

Your ${baseDays}-day timeline: ${baseDays <= 21 ? 'AGGRESSIVE' : baseDays <= 30 ? 'COMPETITIVE' : 'CONSERVATIVE'}`;

      const today = new Date();
      const addDays = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toLocaleDateString();
      };

      const milestones = `DETAILED FINANCING CONTINGENCY MILESTONES

CONTRACT DATE: ${today.toLocaleDateString()} (Day 0)
FINANCING CONTINGENCY DEADLINE: ${addDays(today, baseDays)} (Day ${baseDays})

┌─────────────────────────────────────────────────────────────────┐
│ WEEK 1: APPLICATION AND INITIAL PROCESSING (Days 1-7)          │
└─────────────────────────────────────────────────────────────────┘

Day 1-3: ${addDays(today, 1)} - ${addDays(today, 3)}
☐ Submit full loan application to lender
☐ Provide basic documentation (ID, income proof)
☐ Lender orders appraisal
☐ Sign disclosures and initial paperwork
☐ Pay appraisal fee

Day 3-7: ${addDays(today, 3)} - ${addDays(today, 7)}
☐ Submit complete documentation package:
  • 2 years tax returns (if self-employed)
  • 2 months bank statements
  • 30 days pay stubs
  • W-2s (2 years)
  • Retirement/investment account statements
☐ Appraisal scheduled with property access arranged
☐ Lender completes initial file review

┌─────────────────────────────────────────────────────────────────┐
│ WEEK 2: APPRAISAL AND UNDERWRITING (Days 8-14)                 │
└─────────────────────────────────────────────────────────────────┘

Day 8-12: ${addDays(today, 8)} - ${addDays(today, 12)}
☐ Appraisal inspection conducted
☐ Appraisal report delivered to lender
☐ File submitted to underwriter
☐ Title search ordered/completed
☐ Initial underwriting review begins

Day 12-14: ${addDays(today, 12)} - ${addDays(today, 14)}
☐ Underwriter reviews complete file
☐ May request additional documents (conditions)
☐ Respond to any conditions immediately
☐ Provide explanations for credit/deposit items

┌─────────────────────────────────────────────────────────────────┐
│ WEEK 3: CLEARING CONDITIONS (Days 15-21)                       │
└─────────────────────────────────────────────────────────────────┘

Day 15-18: ${addDays(today, 15)} - ${addDays(today, 18)}
☐ Clear all underwriting conditions
☐ Provide letters of explanation as needed
☐ Final verification of employment (VOE)
☐ Final verification of deposit accounts
☐ Any required additional documentation

Day ${Math.max(18, baseDays - 3)}-${baseDays}: ${addDays(today, Math.max(18, baseDays - 3))} - ${addDays(today, baseDays)}
☐ Final underwriting approval
☐ Receive "clear to close" letter from lender
☐ Remove financing contingency (or expires automatically)
☐ Notify seller financing is approved
☐ Schedule closing

${baseDays > 21 ? `
┌─────────────────────────────────────────────────────────────────┐
│ WEEK 4+: FINAL CLEARANCE (Days 22-${baseDays})                 │
└─────────────────────────────────────────────────────────────────┘

Day 22-${baseDays - 3}: ${addDays(today, 22)} - ${addDays(today, baseDays - 3)}
☐ Address any final conditions
☐ Final file review by underwriter
☐ Quality control checks
☐ Prepare closing documents

Day ${baseDays - 2}-${baseDays}: ${addDays(today, baseDays - 2)} - ${addDays(today, baseDays)}
☐ Receive clear to close
☐ Remove contingency
☐ Prepare for closing
` : ''}

CRITICAL DEADLINE: ${addDays(today, baseDays)}
By this date you MUST have clear-to-close or financing contingency expires!

POST-CONTINGENCY (Days ${baseDays}-${Math.min(baseDays + 10, 45)}):
☐ Final walkthrough scheduled
☐ Homeowner's insurance bound
☐ Wire transfer funds prepared
☐ Closing appointment confirmed
☐ Final conditions cleared

CLOSING DATE: ${addDays(today, Math.min(baseDays + 7, 45))} (Typically ${Math.min(baseDays + 7, 45)} days)

KEY COORDINATION POINTS:
• Inspection contingency likely expires Day ${Math.min(10, baseDays - 5)}
• Appraisal should complete by Day ${Math.min(12, baseDays - 8)}
• Underwriting should begin by Day ${Math.min(10, baseDays - 10)}
• Clear-to-close needed by Day ${baseDays}
• Closing typically 5-7 days after financing deadline

TIME BUFFERS:
${baseDays >= 30 ? '✓ COMFORTABLE: 7-10 day buffer for unexpected delays' : 
  baseDays >= 21 ? '✓ ADEQUATE: 3-5 day buffer for minor issues' :
  '⚠️ TIGHT: Minimal buffer—everything must go smoothly'}`;

      const checklist = `FINANCING CONTINGENCY EXECUTION CHECKLIST

PRE-CONTRACT PREPARATION:
☐ Get strong pre-approval letter from lender
☐ Gather all financial documents in advance
☐ Review credit report for accuracy
☐ Confirm lender can meet ${baseDays}-day timeline
☐ Understand your loan program requirements
☐ Have funds for appraisal ready

DAY 1-3 ACTIONS:
☐ Submit completed loan application immediately
☐ Provide lender with executed purchase contract
☐ Sign initial disclosures promptly
☐ Pay appraisal and credit report fees
☐ Schedule appraisal inspection
☐ Open communication line with loan officer

WEEK 1 PRIORITIES:
☐ Submit complete document package:
  ☐ 2 years tax returns (W-2s or 1040s)
  ☐ 2 months complete bank statements
  ☐ 30 days recent pay stubs
  ☐ Employment verification permission
  ☐ Gift letter if using gift funds
  ☐ Explanation letters for credit items
☐ Arrange property access for appraiser
☐ Don't make ANY financial changes (job, credit, purchases)

WEEK 2 PRIORITIES:
☐ Appraisal completed
☐ Respond to lender requests within 24 hours
☐ Provide any additional documentation requested
☐ Source any large deposits in accounts
☐ Maintain regular communication with loan officer
☐ Update seller's agent on progress weekly

WEEK 3 PRIORITIES:
☐ Clear all underwriting conditions
☐ Provide letters of explanation as needed
☐ Final employment verification completed
☐ Final asset verification completed
☐ Quality control review passed
☐ Receive clear-to-close letter

FINAL WEEK (Days ${Math.max(baseDays - 7, 14)}-${baseDays}):
☐ Clear-to-close issued by lender
☐ Remove financing contingency in writing
☐ Notify seller financing is approved
☐ Confirm closing date with all parties
☐ Begin final closing preparations

THINGS TO AVOID DURING CONTINGENCY PERIOD:
❌ DON'T change jobs or employment status
❌ DON'T open new credit accounts
❌ DON'T make large purchases (car, furniture, etc.)
❌ DON'T transfer large sums between accounts
❌ DON'T pay off collections without lender approval
❌ DON'T co-sign loans for others
❌ DON'T let bills go to collections

COMMUNICATION REQUIREMENTS:
☐ Provide weekly status updates to seller's agent
☐ Respond to lender within 24 hours always
☐ Inform your agent of any delays immediately
☐ Keep all parties informed of progress

IF DELAYS OCCUR:
☐ Notify your agent immediately (don't wait)
☐ Request extension BEFORE contingency expires
☐ Provide seller with explanation and timeline
☐ Show good-faith effort and progress
☐ Typical extension request: 7-14 days
☐ May need to offer concession for extension

CONTINGENCY REMOVAL:
☐ Receive clear-to-close from lender
☐ Review all final loan terms
☐ Sign contingency removal form
☐ Submit to escrow/title company
☐ Understand earnest money is now at risk
☐ Committed to close—can't back out for financing

POST-REMOVAL REQUIREMENTS:
☐ Continue to avoid financial changes
☐ Complete final walkthrough
☐ Bind homeowner's insurance
☐ Arrange for closing funds (wire transfer)
☐ Review closing disclosure
☐ Attend closing appointment

TIMELINE SUMMARY:
Days 1-7: Application & Documentation
Days 8-14: Appraisal & Initial Underwriting
Days 15-${baseDays}: Clear Conditions & Final Approval
Day ${baseDays}: FINANCING CONTINGENCY DEADLINE
Days ${baseDays + 1}-${Math.min(baseDays + 10, 45)}: Close Preparation
Day ${Math.min(baseDays + 7, 45)}: Target Closing Date

SUCCESS FACTORS:
✓ Respond to lender requests IMMEDIATELY
✓ Stay organized with all documents
✓ Don't make financial changes
✓ Communicate proactively
✓ Meet all deadlines
✓ Work collaboratively with lender

Your ${baseDays}-day financing timeline is:
${baseDays <= 18 ? '⚡ AGGRESSIVE—Requires perfect execution' :
  baseDays <= 25 ? '✓ COMPETITIVE—Feasible with good preparation' :
  baseDays <= 35 ? '✓ STANDARD—Comfortable timeline' :
  '✓ CONSERVATIVE—Ample time for complex scenarios'}`;

      return [
        { 
          label: 'Recommended Timeline', 
          value: recommended, 
          isCurrency: false 
        },
        { 
          label: 'Detailed Milestones', 
          value: milestones, 
          isCurrency: false 
        },
        { 
          label: 'Execution Checklist', 
          value: checklist, 
          isCurrency: false 
        },
      ];
    },
  },
};
