import { CalculatorContent } from '@/types';

export const AiSellerLeadScoringToolContent: CalculatorContent = {
  title: 'AI Seller Lead Scoring Tool',
  description: 'Automatically score and prioritize seller leads based on motivation, timeline, property value, and readiness to list. Focus on leads most likely to convert',
  icon: '📊',
  category: 'Additional Tools',
  slug: 'ai-seller-lead-scoring-tool',
  
  article: {
    title: 'Intelligent Seller Lead Scoring and Prioritization',
    content: `
      <h2>AI Seller Lead Scoring Tool</h2>
      <p>Not all seller leads are created equal. Top-performing agents know that success comes from focusing time and energy on the highest-quality, most motivated sellers while efficiently filtering out tire-kickers and long-shot prospects. The AI Seller Lead Scoring Tool helps real estate professionals systematically evaluate, score, and prioritize seller leads based on objective criteria, ensuring you invest your valuable time where it's most likely to produce signed listings and closed deals.</p>

      <h3>Why Lead Scoring Matters for Listing Agents</h3>
      <p>Without systematic lead scoring, agents waste time on unqualified prospects:</p>
      <ul>
        <li><strong>Time ROI:</strong> Focus on leads with highest conversion probability</li>
        <li><strong>Revenue Maximization:</strong> Prioritize high-value properties and motivated sellers</li>
        <li><strong>Pipeline Visibility:</strong> Understand which leads need immediate attention vs. long-term nurturing</li>
        <li><strong>Resource Allocation:</strong> Match effort level to lead quality</li>
        <li><strong>Conversion Improvement:</strong> Pursue leads when they're ready, not too early or too late</li>
        <li><strong>Team Coordination:</strong> Assign appropriate team members to different lead tiers</li>
        <li><strong>Follow-Up Strategy:</strong> Customize communication frequency based on lead score</li>
      </ul>

      <h3>Key Scoring Factors</h3>
      <p><strong>Motivation Level (Highest Weight: 30%):</strong></p>
      <ul>
        <li>Already listed with expired/cancelled listing: 10 points</li>
        <li>Life event forcing sale (job relocation, divorce, inheritance): 9 points</li>
        <li>Strong desire to sell, clear timeline: 7-8 points</li>
        <li>Considering selling, somewhat motivated: 4-6 points</li>
        <li>Just curious, no urgency: 1-3 points</li>
      </ul>

      <p><strong>Timeline (High Weight: 25%):</strong></p>
      <ul>
        <li>Ready to list within 1 month: 10 points</li>
        <li>Planning to list in 1-3 months: 7-8 points</li>
        <li>Targeting 3-6 months: 5-6 points</li>
        <li>6-12 months out: 3-4 points</li>
        <li>Over 12 months or uncertain: 1-2 points</li>
      </ul>

      <p><strong>Property Value/Commission Potential (Medium Weight: 20%):</strong></p>
      <ul>
        <li>$1M+ (luxury tier): 10 points</li>
        <li>$500K-$1M (strong commission): 7-8 points</li>
        <li>$300K-$500K (good commission): 5-6 points</li>
        <li>$150K-$300K (moderate commission): 3-4 points</li>
        <li>Under $150K (lower commission): 1-2 points</li>
      </ul>

      <p><strong>Realistic Price Expectations (Medium Weight: 15%):</strong></p>
      <ul>
        <li>Aligned with market comps, open to advice: 10 points</li>
        <li>Slightly high but open to data: 7-8 points</li>
        <li>Uncertain about pricing: 5-6 points</li>
        <li>High expectations but might adjust: 3-4 points</li>
        <li>Unrealistic, inflexible on price: 1-2 points</li>
      </ul>

      <p><strong>Property Condition (Low-Medium Weight: 10%):</strong></p>
      <ul>
        <li>Move-in ready, well-maintained: 10 points</li>
        <li>Good condition, minor cosmetic needs: 7-8 points</li>
        <li>Average condition, some updates needed: 5-6 points</li>
        <li>Dated, needs significant work but sellable: 3-4 points</li>
        <li>Major issues, extensive repairs needed: 1-2 points</li>
      </ul>

      <h3>Additional Scoring Modifiers</h3>
      <p>Apply these bonus points or deductions to fine-tune scores:</p>
      <ul>
        <li><strong>+5 points:</strong> Referral from past client or trusted source</li>
        <li><strong>+3 points:</strong> Pre-qualified for next purchase (buying and selling)</li>
        <li><strong>+3 points:</strong> Unique/desirable property type for your market</li>
        <li><strong>+2 points:</strong> Multiple decision-makers aligned on selling</li>
        <li><strong>+2 points:</strong> Property already vacant or easy to show</li>
        <li><strong>-3 points:</strong> Difficult property to sell (unique, limited market)</li>
        <li><strong>-3 points:</strong> Owner difficult to reach or communicate with</li>
        <li><strong>-2 points:</strong> Interviewing many agents (beauty contest)</li>
        <li><strong>-2 points:</strong> Wants to sell FSBO first</li>
      </ul>

      <h3>Lead Score Interpretation</h3>
      <p><strong>90-100 Points: "Hot Lead" - Immediate Priority</strong></p>
      <ul>
        <li>Action: Contact within hours, schedule appointment same/next day</li>
        <li>Effort Level: Maximum - in-person meeting, full CMA, comprehensive presentation</li>
        <li>Follow-Up: Daily until decision made</li>
        <li>Probability: 60-80% conversion rate</li>
      </ul>

      <p><strong>70-89 Points: "Warm Lead" - High Priority</strong></p>
      <ul>
        <li>Action: Contact within 24 hours, schedule appointment within week</li>
        <li>Effort Level: High - thorough preparation, professional presentation</li>
        <li><strong>Follow-Up:</strong> 2-3 times per week</li>
        <li>Probability: 40-60% conversion rate</li>
      </ul>

      <p><strong>50-69 Points: "Qualified Lead" - Medium Priority</strong></p>
      <ul>
        <li>Action: Contact within 2-3 days, schedule appointment when convenient</li>
        <li>Effort Level: Moderate - good preparation, solid presentation</li>
        <li>Follow-Up: Weekly, provide value and education</li>
        <li>Probability: 20-40% conversion rate</li>
      </ul>

      <p><strong>30-49 Points: "Nurture Lead" - Low Priority Active</strong></p>
      <ul>
        <li>Action: Contact within week, assess and qualify further</li>
        <li>Effort Level: Light - phone conversation, email resources</li>
        <li>Follow-Up: Bi-weekly or monthly email nurture</li>
        <li>Probability: 5-20% conversion rate (timeline dependent)</li>
      </ul>

      <p><strong>Below 30 Points: "Long-Term Nurture" - Passive</strong></p>
      <ul>
        <li>Action: Add to email list, occasional check-ins</li>
        <li>Effort Level: Minimal - automated nurture campaign</li>
        <li>Follow-Up: Monthly email newsletter, quarterly personal reach-out</li>
        <li>Probability: Under 5% near-term conversion</li>
      </ul>

      <h3>How to Use This Scoring Tool</h3>
      <p><strong>Step 1: Initial Lead Capture</strong></p>
      <p>When a seller lead comes in, gather key information through initial conversation, lead form, or intake questionnaire.</p>
      
      <p><strong>Step 2: Input Data</strong></p>
      <p>Enter property details, seller motivation, timeline, condition, pricing expectations, and any special circumstances.</p>
      
      <p><strong>Step 3: Review Auto-Generated Score</strong></p>
      <p>The AI calculates an objective score based on proven conversion factors and best practices.</p>
      
      <p><strong>Step 4: Prioritize Your Response</strong></p>
      <p>Use the score tier to determine urgency, effort level, and follow-up strategy.</p>
      
      <p><strong>Step 5: Track and Update</strong></p>
      <p>Re-score leads as circumstances change (timeline moves up, motivation increases, price expectations adjust).</p>

      <h3>Integrating Scores into Your Workflow</h3>
      <p><strong>Daily Action Plan:</strong></p>
      <ul>
        <li>Morning: Follow up with all 90+ point hot leads first</li>
        <li>Mid-day: Contact new 70-89 point warm leads</li>
        <li>Afternoon: Nurture 50-69 point qualified leads</li>
        <li>Weekly: Check in with 30-49 point nurture leads</li>
        <li>Monthly: Send value to under-30 point long-term prospects</li>
      </ul>

      <p><strong>CRM Tagging:</strong></p>
      <ul>
        <li>Tag leads with their score tier in your CRM</li>
        <li>Create automated workflows for each tier</li>
        <li>Set reminders based on priority level</li>
        <li>Track conversion rates by score range</li>
      </ul>

      <p><strong>Team Assignment:</strong></p>
      <ul>
        <li>Top producers handle 90+ point hot leads</li>
        <li>Experienced agents work 70-89 point warm leads</li>
        <li>Newer team members qualify and nurture 50-69 leads</li>
        <li>ISAs or admins manage long-term nurture for under-50 leads</li>
      </ul>

      <h3>Improving Lead Quality Over Time</h3>
      <p>Use scoring data to optimize lead generation:</p>
      <ul>
        <li><strong>Source Analysis:</strong> Which lead sources produce highest-scoring leads?</li>
        <li><strong>Budget Allocation:</strong> Invest more in channels generating 70+ point leads</li>
        <li><strong>Messaging Refinement:</strong> Test messaging that attracts more motivated sellers</li>
        <li><strong>Qualification Improvement:</strong> Add questions that help identify high-scoring leads early</li>
        <li><strong>Conversion Tracking:</strong> Measure if score tiers predict actual conversions</li>
      </ul>

      <h3>Red Flags That Lower Scores</h3>
      <p>Watch for these warning signs:</p>
      <ul>
        <li>Wants valuation but has no plans to sell</li>
        <li>Interviewing 5+ agents (low conversion, high effort)</li>
        <li>Unrealistic timeline combined with high price expectations</li>
        <li>Can't make time to meet for weeks</li>
        <li>Wants you to do work before committing</li>
        <li>Vague or evasive about motivation</li>
        <li>Property has been on/off market multiple times</li>
        <li>Owner-occupant resistance to feedback or staging</li>
      </ul>

      <h3>Green Flags That Raise Scores</h3>
      <p>Positive indicators of quality leads:</p>
      <ul>
        <li>Clear, specific reason for selling with urgency</li>
        <li>Already researching agents before contacting you</li>
        <li>Asks thoughtful questions about process and marketing</li>
        <li>Referenced by someone you trust</li>
        <li>Flexible on timing but has general target</li>
        <li>Acknowledges need for competitive pricing</li>
        <li>Property shows well or owner willing to prepare it</li>
        <li>Quick to respond to communications</li>
      </ul>

      <h3>Rescoring Leads as Circumstances Change</h3>
      <p>Lead scores aren't permanent—update them when:</p>
      <ul>
        <li>Timeline accelerates (job offer accepted, contract on new home)</li>
        <li>Motivation increases (life event, financial need)</li>
        <li>Price expectations become more realistic after education</li>
        <li>Property condition improves (repairs completed, staging added)</li>
        <li>Competition emerges (neighbor listing forces action)</li>
        <li>Market conditions shift favorably</li>
      </ul>

      <h3>Common Lead Scoring Mistakes</h3>
      <ul>
        <li><strong>Focusing Only on Property Value:</strong> A $2M seller with no motivation scores lower than a $400K seller ready to list next week</li>
        <li><strong>Ignoring Timeline:</strong> "Someday" sellers rarely convert regardless of other factors</li>
        <li><strong>Overweighting Enthusiasm:</strong> Excitement without action doesn't equal a listing</li>
        <li><strong>Neglecting Price Reality:</strong> Unrealistic pricing kills deals regardless of motivation</li>
        <li><strong>Not Updating Scores:</strong> Yesterday's cold lead may be today's hot prospect</li>
        <li><strong>Equal Effort for All:</strong> Spending same time on 30-point and 90-point leads wastes resources</li>
      </ul>

      <h3>Measuring Scoring Effectiveness</h3>
      <p>Track these metrics to validate your scoring system:</p>
      <ul>
        <li>Conversion rate by score tier (are 90+ leads really converting better?)</li>
        <li>Time to listing agreement by score (do high scores list faster?)</li>
        <li>Commission value by tier (does value correlation hold true?)</li>
        <li>Effort ROI (hours invested vs. closed deals by tier)</li>
        <li>Score accuracy (how often do low scores surprise you by converting?)</li>
      </ul>

      <h3>Who Benefits from This Tool</h3>
      <ul>
        <li><strong>Solo Agents:</strong> Maximize productivity by focusing on best opportunities</li>
        <li><strong>Team Leaders:</strong> Assign leads appropriately based on objective scoring</li>
        <li><strong>ISAs:</strong> Qualify and prioritize leads for agent follow-up</li>
        <li><strong>Brokers:</strong> Improve lead distribution and conversion tracking</li>
        <li><strong>New Agents:</strong> Learn what makes a quality listing lead</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Time is your most valuable asset as a real estate agent. The AI Seller Lead Scoring Tool helps you invest that time wisely by objectively evaluating and prioritizing seller leads based on proven conversion factors. Stop wasting hours chasing low-probability prospects while high-quality leads grow cold. Use this tool to systematically identify your best opportunities, allocate effort appropriately, and dramatically improve your listing conversion rate. Remember: working smarter, not just harder, is the path to sustainable success in real estate.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'motivation',
        label: 'Seller Motivation Level (1-10)',
        type: 'number',
        defaultValue: '',
        placeholder: 'e.g., 8 - Must sell due to job relocation',
      },
      {
        name: 'timeline',
        label: 'Timeline to List',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., Within 1 month, 3-6 months, 12+ months',
      },
      {
        name: 'propertyValue',
        label: 'Estimated Property Value',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., $450,000',
      },
      {
        name: 'condition',
        label: 'Property Condition',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., Move-in ready, Needs minor updates, Major repairs needed',
      },
      {
        name: 'priceExpectations',
        label: 'Price Expectations',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., Realistic, Slightly high, Unrealistic',
      },
      {
        name: 'leadSource',
        label: 'Lead Source',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., Referral, Zillow, Website, FSBO',
      },
    ],
    results: [
      { 
        label: 'Lead Score & Priority', 
        isCurrency: false 
      },
      { 
        label: 'Recommended Actions', 
        isCurrency: false 
      },
      { 
        label: 'Follow-Up Strategy', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { motivation, timeline, propertyValue, condition, priceExpectations, leadSource } = values;
      
      if (!motivation || motivation === '') {
        return [
          { 
            label: 'Lead Score & Priority', 
            value: 'Please enter seller motivation level to calculate lead score.', 
            isCurrency: false 
          },
          { label: 'Recommended Actions', value: '', isCurrency: false },
          { label: 'Follow-Up Strategy', value: '', isCurrency: false },
        ];
      }

      const motivationScore = parseFloat(motivation) || 5;
      const timelineText = timeline || 'not specified';
      const value = propertyValue || '[property value]';
      const conditionText = condition || 'unknown';
      const expectationsText = priceExpectations || 'unknown';
      const source = leadSource || 'unknown source';

      const baseScore = motivationScore * 10;
      const estimatedTotal = baseScore + 20;

      let tier = 'Unknown';
      let priority = 'Medium';
      if (estimatedTotal >= 90) {
        tier = 'HOT LEAD';
        priority = 'IMMEDIATE';
      } else if (estimatedTotal >= 70) {
        tier = 'WARM LEAD';
        priority = 'HIGH';
      } else if (estimatedTotal >= 50) {
        tier = 'QUALIFIED LEAD';
        priority = 'MEDIUM';
      } else if (estimatedTotal >= 30) {
        tier = 'NURTURE LEAD';
        priority = 'LOW';
      } else {
        tier = 'LONG-TERM';
        priority = 'PASSIVE';
      }

      return [
        { 
          label: 'Lead Score & Priority', 
          value: `This is a demo response. In production, this would calculate a detailed lead score.

SELLER LEAD SCORE ANALYSIS

Overall Score: ${estimatedTotal}/100
Tier: ${tier}
Priority Level: ${priority}

===== SCORING BREAKDOWN =====

Motivation (30%): ${motivationScore}/10
→ Score contribution: ${motivationScore * 3} points
${motivationScore >= 8 ? '✓ STRONG motivation' : motivationScore >= 6 ? '~ MODERATE motivation' : '✗ LOW motivation'}

Timeline (25%): ${timelineText}
→ Estimated contribution: [Based on timeline]
${timelineText.toLowerCase().includes('month') && !timelineText.includes('12') ? '✓ Near-term timeline' : '~ Extended timeline'}

Property Value (20%): ${value}
→ Commission potential: [Calculate from value]
${parseFloat(value.replace(/[^0-9.]/g, '')) > 500000 ? '✓ HIGH value property' : '~ Standard value range'}

Price Expectations (15%): ${expectationsText}
→ Realistic factor: [Assessment]
${expectationsText.toLowerCase().includes('realistic') ? '✓ ALIGNED with market' : '~ May need education'}

Property Condition (10%): ${conditionText}
→ Marketability: [Assessment]
${conditionText.toLowerCase().includes('ready') ? '✓ MOVE-IN ready' : '~ Needs preparation'}

Lead Source: ${source}
${source.toLowerCase().includes('referral') ? '→ BONUS +5 pts (trusted source)' : '→ Standard source'}

===== FINAL ASSESSMENT =====

Priority Tier: ${tier}
Recommended Action: ${priority} priority response
Conversion Probability: ${estimatedTotal >= 90 ? '60-80%' : estimatedTotal >= 70 ? '40-60%' : estimatedTotal >= 50 ? '20-40%' : estimatedTotal >= 30 ? '5-20%' : 'Under 5%'}

This ${tier} requires ${priority.toLowerCase()} priority attention and resources.`, 
          isCurrency: false 
        },
        { 
          label: 'Recommended Actions', 
          value: `Action Plan for ${tier}:

🎯 IMMEDIATE NEXT STEPS:

${estimatedTotal >= 90 ? `
1. Contact within HOURS (same day)
2. Schedule in-person appointment ASAP
3. Prepare comprehensive CMA
4. Full listing presentation ready
5. Bring marketing materials and contract

Time Investment: MAXIMUM
Meeting Type: In-person at property
Preparation Level: Complete and thorough
Goal: Secure listing agreement this week
` : estimatedTotal >= 70 ? `
1. Contact within 24 hours
2. Schedule appointment within week
3. Prepare solid CMA
4. Professional presentation materials
5. Research property and neighborhood

Time Investment: HIGH
Meeting Type: In-person preferred
Preparation Level: Professional and complete
Goal: Build relationship, secure listing within 2 weeks
` : estimatedTotal >= 50 ? `
1. Contact within 2-3 days
2. Phone consultation first
3. Basic CMA preparation
4. Educational materials ready
5. Assess and qualify further

Time Investment: MODERATE
Meeting Type: Phone then in-person if qualified
Preparation Level: Good but efficient
Goal: Educate and move toward listing
` : estimatedTotal >= 30 ? `
1. Contact within week
2. Brief phone conversation
3. Assess timeline and motivation
4. Provide initial value
5. Add to nurture campaign

Time Investment: LIGHT
Meeting Type: Phone consultation
Preparation Level: Basic
Goal: Qualify and nurture for future
` : `
1. Add to email newsletter
2. Quarterly personal check-in
3. Monitor for changes
4. Provide market updates
5. Stay top-of-mind passively

Time Investment: MINIMAL
Meeting Type: Email/occasional calls
Preparation Level: Automated
Goal: Long-term relationship building
`}

📞 FIRST CONTACT APPROACH:

Opening: "Hi [Name], I received your inquiry about ${value ? 'selling your ' + value + ' property' : 'selling your home'}. ${motivationScore >= 7 ? 'I understand you need to sell due to [reason]. I\'d love to help make this as smooth as possible for you.' : 'I\'d be happy to discuss your real estate goals and how I can help.'}"

Key Questions to Ask:
• Confirm timeline: "${timelineText}"
• Understand motivation: What's driving the sale?
• Gauge price expectations: What price range are you considering?
• Assess condition: Is the property move-in ready?
• Qualify commitment: Are you interviewing other agents?

🎁 VALUE TO PROVIDE:
${motivationScore >= 7 ? '• Immediate market analysis\n• Personalized selling strategy\n• Timeline and process overview\n• Marketing plan preview' : '• General market update\n• Educational resources\n• Neighborhood insights\n• Long-term consultation'}`, 
          isCurrency: false 
        },
        { 
          label: 'Follow-Up Strategy', 
          value: `Follow-Up Plan for ${tier}:

⏰ CONTACT FREQUENCY:

${estimatedTotal >= 90 ? `
AGGRESSIVE FOLLOW-UP (Hot Lead):
• Day 1: Initial contact + appointment set
• Day 2: Confirmation + pre-meeting CMA
• Day 3: Property visit + presentation
• Day 4: Follow-up call
• Day 5-7: Daily check-ins until decision

DO NOT let this lead go cold!
` : estimatedTotal >= 70 ? `
ACTIVE FOLLOW-UP (Warm Lead):
• Week 1: Initial contact + appointment
• Week 1: Meeting + presentation
• Week 2: Follow-up call + additional info
• Week 2-3: 2-3 touches per week
• Ongoing: Weekly until listed

Maintain momentum and engagement.
` : estimatedTotal >= 50 ? `
STEADY FOLLOW-UP (Qualified):
• Week 1: Initial contact
• Week 1-2: Phone consultation
• Week 2-4: Weekly value-add touches
• Month 2+: Bi-weekly check-ins
• Ongoing: Monthly market updates

Balance persistence with patience.
` : estimatedTotal >= 30 ? `
NURTURE SEQUENCE (Low Priority):
• Week 1: Initial contact + qualify
• Month 1: Add to email nurture
• Month 1-6: Bi-weekly/monthly emails
• Quarterly: Personal check-in call
• Semi-annual: Re-qualification attempt

Stay present without being pushy.
` : `
PASSIVE NURTURE (Long-term):
• Add to monthly newsletter
• Quarterly market report
• Semi-annual personal touch
• Annual check-in call
• Monitor for trigger events

Minimal effort, stay top-of-mind.
`}

📧 EMAIL SEQUENCE:

Email 1 (Immediately):
Subject: "Your ${value ? value : '[Property Value]'} Home Valuation + Next Steps"
Content: ${motivationScore >= 7 ? 'Address their urgent need, provide immediate value, schedule meeting' : 'Thank them for inquiry, offer initial insights, soft CTA'}

${estimatedTotal >= 70 ? `
Email 2 (Day 3):
Subject: "Quick Market Update for ${timelineText ? 'Your ' + timelineText + ' Timeline' : 'Your Area'}"
Content: Recent sales data, current market conditions, positioning for success

Email 3 (Week 1):
Subject: "How to Maximize Your Home's Value"
Content: Staging tips, minor updates with high ROI, marketing strategies
` : `
Email 2 (Week 2):
Subject: "Preparing to Sell: What You Need to Know"
Content: Educational content, selling process overview, resources

Email 3 (Month 1):
Subject: "${timelineText ? timelineText + ' ' : ''}Market Snapshot"
Content: Local market trends, sold data, insights relevant to their property
`}

📱 COMMUNICATION CHANNELS:

Primary: ${motivationScore >= 8 ? 'Phone calls (immediate, personal)' : motivationScore >= 6 ? 'Email + Phone (professional mix)' : 'Email (low-pressure nurture)'}
Secondary: ${estimatedTotal >= 70 ? 'Text (quick updates, confirmations)' : 'Social media (stay visible)'}
Tertiary: ${source.toLowerCase().includes('referral') ? 'Through referral source if appropriate' : 'LinkedIn/professional network'}

🔄 PROGRESSION TRIGGERS:

Move to Higher Priority IF:
✓ Timeline accelerates unexpectedly
✓ Motivation increases (life event occurs)
✓ Price expectations become realistic
✓ They engage actively with content
✓ They mention they're ready to move forward

Move to Lower Priority IF:
✗ Timeline pushes out significantly
✗ Responsiveness drops off
✗ Price expectations remain unrealistic
✗ They go silent for extended period
✗ They explicitly ask for space

🎯 SUCCESS METRICS:

Track for this lead:
• Response rate to outreach
• Engagement with content sent
• Questions asked (interest level)
• Timeline changes (progression)
• Final outcome and conversion time

Goal: ${estimatedTotal >= 70 ? 'Listing agreement within 30 days' : estimatedTotal >= 50 ? 'Listing agreement within 90 days' : 'Stay connected for future opportunity'}

Remember: Lead score can change - reassess regularly as circumstances evolve!`, 
          isCurrency: false 
        },
      ];
    },
  },
};
