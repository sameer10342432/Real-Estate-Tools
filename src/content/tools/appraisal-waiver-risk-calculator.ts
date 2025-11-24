import { CalculatorContent } from '@/types';

export const AppraisalWaiverRiskCalculatorContent: CalculatorContent = {
  title: 'Appraisal Waiver Risk Calculator - Home Appraisal Contingency Analysis Tool',
  description: 'Evaluate the risks and benefits of waiving appraisal contingencies for buyers and sellers, calculate potential gap coverage scenarios, and assess financial exposure in competitive real estate markets',
  icon: '📊',
  category: 'Additional Tools',
  slug: 'appraisal-waiver-risk-calculator',
  
  article: {
    title: 'Appraisal Waiver Risk Calculator and Strategy Guide',
    content: `
      <h2>Appraisal Waiver Risk Calculator</h2>
      <p>In competitive markets, buyers increasingly waive appraisal contingencies to strengthen offers. The Appraisal Waiver Risk Calculator helps buyers and sellers understand the financial risks and strategic implications of appraisal waivers, calculate potential appraisal gap scenarios, evaluate coverage options, and make informed decisions about this increasingly common negotiation tool.</p>

      <h3>Understanding Appraisal Contingencies</h3>
      <p>Standard appraisal contingency protection:</p>
      <ul>
        <li><strong>Purpose:</strong> Protects buyer if home appraises below purchase price</li>
        <li><strong>How It Works:</strong> Buyer can renegotiate or walk away if appraisal comes in low</li>
        <li><strong>Seller Risk:</strong> Deal may fall through or require price reduction</li>
        <li><strong>Buyer Protection:</strong> Not forced to overpay beyond market value</li>
        <li><strong>Lender Requirement:</strong> Lender won't finance more than appraised value</li>
        <li><strong>Standard Practice:</strong> Typical in most residential transactions</li>
      </ul>

      <h3>What is an Appraisal Waiver?</h3>
      <p>Waiving the appraisal contingency means:</p>
      <ul>
        <li><strong>Commitment to Price:</strong> Buyer agrees to purchase at offer price regardless of appraisal</li>
        <li><strong>Gap Coverage:</strong> Buyer must cover difference between appraised value and purchase price</li>
        <li><strong>Cash Difference:</strong> Extra funds needed beyond planned down payment</li>
        <li><strong>No Renegotiation:</strong> Can't use low appraisal to renegotiate price</li>
        <li><strong>Stronger Offer:</strong> Makes offer more attractive to sellers</li>
        <li><strong>Risk Transfer:</strong> Buyer assumes all appraisal risk</li>
      </ul>

      <h3>Why Buyers Waive Appraisal Contingencies</h3>
      <p>Strategic motivations:</p>
      <ul>
        <li><strong>Competitive Advantage:</strong> Stand out in multiple offer situations</li>
        <li><strong>Seller Preference:</strong> Reduces seller's risk of deal falling through</li>
        <li><strong>Hot Markets:</strong> Often necessary to compete effectively</li>
        <li><strong>Confidence in Value:</strong> Buyer believes price is fair regardless of appraisal</li>
        <li><strong>Cash Available:</strong> Buyer has funds to cover potential gap</li>
        <li><strong>Winning Strategy:</strong> May be deciding factor between similar offers</li>
      </ul>

      <h3>Buyer Risks of Waiving Appraisal</h3>
      <p>Financial exposures to understand:</p>
      <ul>
        <li><strong>Appraisal Gap:</strong> Must pay cash difference if appraisal low</li>
        <li><strong>Larger Down Payment:</strong> May need significantly more cash than planned</li>
        <li><strong>Overpaying Risk:</strong> Purchasing above independent market assessment</li>
        <li><strong>Future Refinance:</strong> Harder to refinance if you overpaid</li>
        <li><strong>Resale Concerns:</strong> May take longer to build equity</li>
        <li><strong>Limited Recourse:</strong> No ability to renegotiate based on appraisal</li>
      </ul>

      <h3>How This Calculator Works</h3>
      <p><strong>Step 1: Enter Offer Details</strong></p>
      <p>Input your offer price, down payment, and loan amount.</p>
      
      <p><strong>Step 2: Estimate Appraisal Scenarios</strong></p>
      <p>Calculate potential outcomes if appraisal comes in 5%, 10%, 15% below offer price.</p>
      
      <p><strong>Step 3: Assess Coverage Capability</strong></p>
      <p>Determine if you have cash reserves to cover potential gaps.</p>
      
      <p><strong>Step 4: Evaluate Risk Level</strong></p>
      <p>Understand your financial exposure and decision implications.</p>
      
      <p><strong>Step 5: Make Informed Decision</strong></p>
      <p>Decide whether to waive, partially waive, or keep appraisal contingency.</p>

      <h3>Calculating Appraisal Gap Scenarios</h3>
      <p>Understanding potential financial exposure:</p>
      
      <p><strong>Example Scenario:</strong></p>
      <ul>
        <li>Offer Price: $500,000</li>
        <li>Planned Down Payment: 20% ($100,000)</li>
        <li>Planned Loan: 80% ($400,000)</li>
      </ul>

      <p><strong>If Appraisal Comes In At $475,000 (5% low):</strong></p>
      <ul>
        <li>Lender will only finance 80% of $475,000 = $380,000</li>
        <li>You need $500,000 - $380,000 = $120,000 cash</li>
        <li>Additional cash needed: $20,000 beyond planned down payment</li>
        <li>Your effective down payment: 24%</li>
      </ul>

      <p><strong>If Appraisal Comes In At $450,000 (10% low):</strong></p>
      <ul>
        <li>Lender will only finance 80% of $450,000 = $360,000</li>
        <li>You need $500,000 - $360,000 = $140,000 cash</li>
        <li>Additional cash needed: $40,000 beyond planned down payment</li>
        <li>Your effective down payment: 28%</li>
      </ul>

      <h3>Partial Appraisal Gap Coverage</h3>
      <p>Middle-ground negotiation strategy:</p>
      <ul>
        <li><strong>Limited Waiver:</strong> Agree to cover gap up to specific dollar amount</li>
        <li><strong>Example:</strong> "Buyer will cover up to $20,000 appraisal gap"</li>
        <li><strong>Risk Management:</strong> Limits buyer exposure to known amount</li>
        <li><strong>Seller Appeal:</strong> Still reduces seller risk compared to full contingency</li>
        <li><strong>Competitive Edge:</strong> Stronger than standard contingency, safer than full waiver</li>
        <li><strong>Negotiation Tool:</strong> Can adjust gap coverage amount strategically</li>
      </ul>

      <h3>Appraisal Gap Coverage Strategies</h3>
      <p><strong>Full Waiver:</strong></p>
      <p>"Buyer waives appraisal contingency entirely—will purchase at $500K regardless of appraised value"</p>
      <ul>
        <li>Strongest offer position</li>
        <li>Unlimited buyer risk</li>
        <li>Requires significant cash reserves</li>
      </ul>

      <p><strong>Partial Coverage:</strong></p>
      <p>"Buyer will cover appraisal gap up to $25,000"</p>
      <ul>
        <li>Balanced risk/reward</li>
        <li>Predictable maximum exposure</li>
        <li>Still competitive in many markets</li>
      </ul>

      <p><strong>Percentage Coverage:</strong></p>
      <p>"Buyer will cover up to 5% appraisal gap"</p>
      <ul>
        <li>Scales with purchase price</li>
        <li>Clear percentage calculation</li>
        <li>Easy to understand for all parties</li>
      </ul>

      <h3>When to Waive Appraisal Contingency</h3>
      <p><strong>Good Scenarios:</strong></p>
      <ul>
        <li>You have substantial cash reserves beyond down payment</li>
        <li>You've researched comps and believe price is fair</li>
        <li>Multiple offer situation requires competitive edge</li>
        <li>You're purchasing as your forever home (less concerned with short-term value)</li>
        <li>You're willing and able to bring additional cash if needed</li>
        <li>Recent sales in area support your offer price</li>
      </ul>

      <p><strong>Risky Scenarios:</strong></p>
      <ul>
        <li>You're stretching financially with minimal reserves</li>
        <li>Offer price significantly exceeds recent comparables</li>
        <li>You're relying on maximum loan amount possible</li>
        <li>Property is unique/hard to compare (valuation uncertainty)</li>
        <li>Market is rapidly appreciating (appraisals lag current prices)</li>
        <li>You plan to refinance or sell soon</li>
      </ul>

      <h3>Cash Reserve Requirements</h3>
      <p>Financial preparedness assessment:</p>
      <ul>
        <li><strong>Minimum Reserve:</strong> Have cash for at least 5-10% gap coverage</li>
        <li><strong>Comfortable Reserve:</strong> Cover 10-15% gap without financial strain</li>
        <li><strong>Strong Position:</strong> Could cover 15-20% gap if absolutely necessary</li>
        <li><strong>Emergency Fund:</strong> Maintain separate emergency fund even after purchase</li>
        <li><strong>Closing Costs:</strong> Remember you still need standard closing costs too</li>
        <li><strong>Moving/Furnishing:</strong> Budget for move-in expenses beyond purchase</li>
      </ul>

      <h3>Seller Perspective on Appraisal Waivers</h3>
      <p>Why sellers value appraisal waivers:</p>
      <ul>
        <li><strong>Deal Certainty:</strong> Reduces risk of renegotiation or deal falling through</li>
        <li><strong>Closing Confidence:</strong> More likely to close at agreed price</li>
        <li><strong>Buyer Strength:</strong> Indicates buyer has substantial financial resources</li>
        <li><strong>Timeline Protection:</strong> Won't lose time if appraisal issues arise</li>
        <li><strong>Backup Offers:</strong> Can decline backup offers with more confidence</li>
        <li><strong>Competitive Value:</strong> Waiver may outweigh slightly higher price from other buyer</li>
      </ul>

      <h3>Alternatives to Full Waiver</h3>
      <p>Options that balance risk and competitiveness:</p>
      <ul>
        <li><strong>Partial Gap Coverage:</strong> Cover specific dollar amount (e.g., $15,000)</li>
        <li><strong>Escalation Clause with Waiver:</strong> Price increases but appraisal stays waived</li>
        <li><strong>Split the Difference:</strong> Agree to split any appraisal gap 50/50</li>
        <li><strong>Higher Earnest Money:</strong> Show commitment without waiving appraisal</li>
        <li><strong>Quick Appraisal:</strong> Order appraisal immediately, shorten contingency period</li>
        <li><strong>Pre-Inspection:</strong> Strengthen offer in other ways instead</li>
      </ul>

      <h3>Legal and Contractual Considerations</h3>
      <p>Important documentation details:</p>
      <ul>
        <li><strong>Written Agreement:</strong> Appraisal waiver must be explicitly in contract</li>
        <li><strong>Clear Language:</strong> Specify exactly what you're waiving</li>
        <li><strong>Financing Contingency:</strong> Separate from appraisal waiver—keep this</li>
        <li><strong>Gap Coverage Limit:</strong> If partial waiver, specify exact dollar amount</li>
        <li><strong>Attorney Review:</strong> Have real estate attorney review terms</li>
        <li><strong>Lender Awareness:</strong> Ensure lender understands the waiver</li>
      </ul>

      <h3>Common Misconceptions</h3>
      <ul>
        <li><strong>Myth:</strong> "Waiving appraisal means waiving financing contingency"</li>
        <li><strong>Reality:</strong> These are separate—keep financing contingency</li>
        <li><strong>Myth:</strong> "Appraisal will match offer price if I waive it"</li>
        <li><strong>Reality:</strong> Appraisal is independent—still may come in low</li>
        <li><strong>Myth:</strong> "I can back out if I can't cover the gap"</li>
        <li><strong>Reality:</strong> You're contractually obligated—could lose earnest money</li>
        <li><strong>Myth:</strong> "Waiving appraisal guarantees my offer wins"</li>
        <li><strong>Reality:</strong> Helpful but not the only factor sellers consider</li>
      </ul>

      <h3>Impact on Financing</h3>
      <p>How appraisal waiver affects your loan:</p>
      <ul>
        <li><strong>Loan-to-Value (LTV):</strong> Calculated on lower of purchase price or appraised value</li>
        <li><strong>Higher LTV:</strong> If appraisal low, your LTV increases</li>
        <li><strong>PMI Implications:</strong> Higher LTV may require PMI even if you planned to avoid it</li>
        <li><strong>Interest Rate:</strong> May affect rate if LTV exceeds certain thresholds</li>
        <li><strong>Loan Approval:</strong> Lender still must approve based on appraised value</li>
        <li><strong>Additional Documentation:</strong> May need to prove source of gap coverage funds</li>
      </ul>

      <h3>Red Flags and Warning Signs</h3>
      <p>When NOT to waive appraisal contingency:</p>
      <ul>
        <li>You're financially stretched with no cash reserves</li>
        <li>Property is overpriced based on comparable sales</li>
        <li>You're relying on gift funds that won't cover potential gap</li>
        <li>Market is declining or unstable</li>
        <li>Property is unique and difficult to appraise</li>
        <li>You'll need to sell/refinance soon</li>
        <li>Agent or lender strongly advises against it</li>
      </ul>

      <h3>Who Benefits from This Tool</h3>
      <ul>
        <li><strong>Homebuyers:</strong> Understand financial risks before waiving appraisal</li>
        <li><strong>Buyer's Agents:</strong> Educate clients on gap coverage scenarios</li>
        <li><strong>Sellers:</strong> Evaluate strength of waiver offers</li>
        <li><strong>Listing Agents:</strong> Advise sellers on offer comparison</li>
        <li><strong>Loan Officers:</strong> Help buyers understand financing implications</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Waiving or limiting the appraisal contingency can strengthen your offer significantly in competitive markets, but it comes with real financial risk. The Appraisal Waiver Risk Calculator helps you understand potential scenarios, calculate gap coverage requirements, and make informed decisions based on your financial situation and risk tolerance. Use this tool to model different appraisal outcomes, assess your cash reserve needs, and determine the right strategy for your situation. Remember: never waive an appraisal contingency unless you have the financial resources to cover a potential gap and understand the risks involved. When used strategically by well-prepared buyers, appraisal waivers can be the competitive edge that wins the home—but only if you can truly afford the potential downside.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'offerPrice',
        label: 'Offer/Purchase Price',
        type: 'number',
        defaultValue: '500000',
        placeholder: 'e.g., 500000',
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment Percentage',
        type: 'number',
        defaultValue: '20',
        placeholder: 'e.g., 20',
      },
      {
        name: 'cashReserves',
        label: 'Available Cash Reserves (Beyond Down Payment)',
        type: 'number',
        defaultValue: '50000',
        placeholder: 'e.g., 50000',
      },
    ],
    results: [
      { 
        label: 'Appraisal Gap Scenarios', 
        isCurrency: false 
      },
      { 
        label: 'Risk Assessment', 
        isCurrency: false 
      },
      { 
        label: 'Recommendations', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const offerPrice = parseFloat(values.offerPrice as string) || 500000;
      const downPaymentPercent = parseFloat(values.downPaymentPercent as string) || 20;
      const cashReserves = parseFloat(values.cashReserves as string) || 50000;

      const downPaymentAmount = (offerPrice * downPaymentPercent) / 100;
      const loanAmount = offerPrice - downPaymentAmount;
      const loanToValue = (loanAmount / offerPrice) * 100;

      const scenarios = [];
      const gapPercentages = [0, 2, 5, 7, 10, 15];
      
      for (const gapPercent of gapPercentages) {
        const appraisedValue = offerPrice * (1 - gapPercent / 100);
        const maxLoan = appraisedValue * (100 - downPaymentPercent) / 100;
        const cashNeeded = offerPrice - maxLoan;
        const additionalCash = cashNeeded - downPaymentAmount;
        const canCover = additionalCash <= cashReserves;
        const effectiveDownPayment = (cashNeeded / offerPrice) * 100;
        
        scenarios.push({
          gapPercent,
          appraisedValue,
          maxLoan,
          cashNeeded,
          additionalCash,
          canCover,
          effectiveDownPayment
        });
      }

      const formatCurrency = (num: number) => {
        return '$' + Math.round(num).toLocaleString();
      };

      const scenariosOutput = `APPRAISAL GAP SCENARIOS

Offer Price: ${formatCurrency(offerPrice)}
Planned Down Payment: ${downPaymentPercent}% (${formatCurrency(downPaymentAmount)})
Planned Loan: ${formatCurrency(loanAmount)}
Available Cash Reserves: ${formatCurrency(cashReserves)}

┌───────────────────────────────────────────────────────────────┐
│ SCENARIO ANALYSIS: What if appraisal comes in low?           │
└───────────────────────────────────────────────────────────────┘

${scenarios.map((s, i) => {
  if (s.gapPercent === 0) {
    return `✓ BEST CASE: Appraisal At Offer Price (${formatCurrency(s.appraisedValue)})
   → Loan Amount: ${formatCurrency(s.maxLoan)}
   → Cash Needed: ${formatCurrency(s.cashNeeded)}
   → Additional Cash: $0
   → Status: No gap—everything proceeds as planned!`;
  } else {
    return `${s.canCover ? '✓' : '⚠️'} ${s.gapPercent}% LOW: Appraisal At ${formatCurrency(s.appraisedValue)}
   → Lender Will Finance: ${formatCurrency(s.maxLoan)}
   → Total Cash Needed: ${formatCurrency(s.cashNeeded)}
   → Additional Cash Required: ${formatCurrency(s.additionalCash)}
   → Effective Down Payment: ${s.effectiveDownPayment.toFixed(1)}%
   → Can You Cover Gap? ${s.canCover ? 'YES ✓' : 'NO - INSUFFICIENT RESERVES ⚠️'}`;
  }
}).join('\n\n')}

┌───────────────────────────────────────────────────────────────┐
│ MAXIMUM GAP YOU CAN COVER                                     │
└───────────────────────────────────────────────────────────────┘

With ${formatCurrency(cashReserves)} in reserves:
• Maximum additional cash available: ${formatCurrency(cashReserves)}
• Maximum total down payment: ${formatCurrency(downPaymentAmount + cashReserves)}
• This equals: ${((downPaymentAmount + cashReserves) / offerPrice * 100).toFixed(1)}% of purchase price

Minimum appraisal you can handle: ${formatCurrency(offerPrice - ((downPaymentAmount + cashReserves) / (100 - downPaymentPercent)) * 100)}
Maximum gap percentage: ~${((cashReserves / offerPrice) * 100).toFixed(1)}%

${cashReserves >= offerPrice * 0.05 ? '✓ GOOD: You can cover a 5% appraisal gap' : '⚠️ LIMITED: You cannot cover a 5% appraisal gap'}
${cashReserves >= offerPrice * 0.10 ? '✓ EXCELLENT: You can cover a 10% appraisal gap' : '⚠️ RISK: You cannot cover a 10% appraisal gap'}
${cashReserves >= offerPrice * 0.15 ? '✓ OUTSTANDING: You can cover a 15% appraisal gap' : ''}`;

      const maxCoverableGap = (cashReserves / offerPrice) * 100;
      const riskLevel = maxCoverableGap >= 10 ? 'LOW' : maxCoverableGap >= 5 ? 'MODERATE' : 'HIGH';
      
      const riskAssessment = `RISK ASSESSMENT

FINANCIAL POSITION:
Offer Price: ${formatCurrency(offerPrice)}
Cash Reserves: ${formatCurrency(cashReserves)}
Reserve Ratio: ${((cashReserves / offerPrice) * 100).toFixed(1)}% of purchase price

RISK LEVEL: ${riskLevel}

${riskLevel === 'LOW' ? `✓ LOW RISK PROFILE
• You have substantial cash reserves (${formatCurrency(cashReserves)})
• Can cover gaps up to ~${maxCoverableGap.toFixed(1)}% of offer price
• Well-positioned to waive appraisal contingency
• Strong financial cushion for unexpected scenarios
• Comfortable position for competitive markets

STRENGTHS:
→ Can handle significant appraisal shortfall
→ Won't be financially stressed by moderate gap
→ Maintains reserves even after gap coverage
→ Competitive offer position` : riskLevel === 'MODERATE' ? `⚠️ MODERATE RISK PROFILE
• You have adequate cash reserves (${formatCurrency(cashReserves)})
• Can cover gaps up to ~${maxCoverableGap.toFixed(1)}% of offer price
• Partial appraisal waiver is appropriate
• Full waiver carries some risk
• Competitive in many market conditions

CONSIDERATIONS:
→ Consider partial gap coverage limit
→ Research comparable sales carefully
→ Ensure reserves remain after gap coverage
→ May want to limit waiver to $${Math.round(cashReserves * 0.75).toLocaleString()}
→ Keep emergency fund intact` : `⚠️ HIGH RISK PROFILE
• Limited cash reserves (${formatCurrency(cashReserves)})
• Can only cover gaps up to ~${maxCoverableGap.toFixed(1)}% of offer price
• Full appraisal waiver is RISKY
• Proceed with caution on any waiver
• Consider keeping standard contingency

WARNINGS:
→ Cannot cover significant appraisal gaps
→ Very limited margin for error
→ May exhaust all reserves if gap occurs
→ High risk of financial strain
→ Consider alternative offer strengthening methods
→ DO NOT waive if you can't cover at least 5% gap`}

APPRAISAL PROBABILITY ANALYSIS:
${offerPrice && downPaymentAmount ? `
Based on current market conditions and your offer:
• Probability of appraisal at offer price: Moderate to High*
• Most common gap if low: 2-5% below offer
• Significant gaps (10%+): Less common but possible
• Average gap (when it occurs): $${Math.round(offerPrice * 0.03).toLocaleString()}

*Actual probability depends on local market conditions, 
recent comparable sales, and property characteristics` : ''}

YOUR MAXIMUM SAFE WAIVER:
${maxCoverableGap >= 15 ? `→ FULL WAIVER: You can safely waive appraisal contingency entirely` : 
  maxCoverableGap >= 10 ? `→ STRONG PARTIAL: Waive up to ${formatCurrency(offerPrice * 0.10)} gap` :
  maxCoverableGap >= 5 ? `→ LIMITED PARTIAL: Waive up to ${formatCurrency(offerPrice * 0.05)} gap` :
  `→ KEEP CONTINGENCY: Do not waive—financial risk too high`}

STRESS TEST:
If 5% appraisal gap occurs:
• Additional cash needed: ${formatCurrency(offerPrice * 0.05)}
• Your coverage ability: ${cashReserves >= offerPrice * 0.05 ? 'CAN COVER ✓' : 'CANNOT COVER ⚠️'}
• Remaining reserves: ${formatCurrency(Math.max(0, cashReserves - offerPrice * 0.05))}

If 10% appraisal gap occurs:
• Additional cash needed: ${formatCurrency(offerPrice * 0.10)}
• Your coverage ability: ${cashReserves >= offerPrice * 0.10 ? 'CAN COVER ✓' : 'CANNOT COVER ⚠️'}
• Remaining reserves: ${formatCurrency(Math.max(0, cashReserves - offerPrice * 0.10))}

POST-COVERAGE FINANCIAL HEALTH:
After covering a 5% gap, you would have:
• Remaining cash: ${formatCurrency(Math.max(0, cashReserves - offerPrice * 0.05))}
• ${cashReserves - offerPrice * 0.05 > 20000 ? '✓ Adequate emergency fund remains' : '⚠️ Limited emergency fund after gap coverage'}
• ${cashReserves - offerPrice * 0.05 > 10000 ? '✓ Cushion for closing costs/moving' : '⚠️ Little room for unexpected expenses'}`;

      const recommendations = `STRATEGIC RECOMMENDATIONS

Based on your financial profile, here's how to proceed:

${riskLevel === 'LOW' ? `✓ RECOMMENDED: FULL APPRAISAL WAIVER

You are in excellent position to waive appraisal contingency:

OFFER LANGUAGE:
"Buyer waives appraisal contingency and will purchase property at 
$${offerPrice.toLocaleString()} regardless of appraised value."

WHY THIS WORKS FOR YOU:
• Strong cash reserves provide cushion (${formatCurrency(cashReserves)})
• Can handle realistic appraisal gap scenarios
• Significantly strengthens your offer competitiveness
• Low financial risk given your resources
• Positions you as serious, well-qualified buyer

EXECUTION STRATEGY:
☐ Include full appraisal waiver in initial offer
☐ Ensure lender is aware of waiver
☐ Keep financing contingency (separate protection)
☐ Maintain reserves for closing costs and emergencies
☐ Be prepared to bring extra funds if needed

COMPETITIVE ADVANTAGE:
→ Stand out in multiple offer situations
→ Appeal to sellers seeking certainty
→ Demonstrate financial strength
→ Increase offer acceptance probability
→ May negotiate better on other terms` : riskLevel === 'MODERATE' ? `⚠️ RECOMMENDED: PARTIAL APPRAISAL GAP COVERAGE

You should offer limited gap coverage, not full waiver:

OFFER LANGUAGE:
"Buyer will cover appraisal gap up to $${Math.round(cashReserves * 0.6).toLocaleString()}, 
representing approximately ${((cashReserves * 0.6 / offerPrice) * 100).toFixed(1)}% of purchase price."

OR

"Buyer will purchase at offer price if appraisal is within 
${Math.min(5, maxCoverableGap).toFixed(0)}% of $${offerPrice.toLocaleString()}."

WHY PARTIAL COVERAGE:
• Provides competitive edge over standard contingency
• Limits your financial exposure to manageable amount
• Still demonstrates commitment to seller
• Preserves emergency reserves
• Reduces risk of financial overextension

EXECUTION STRATEGY:
☐ Clearly state maximum gap coverage in contract
☐ Maintain emergency fund after coverage
☐ Research comparable sales to validate price
☐ Get lender's input on realistic appraisal range
☐ Be prepared to walk if gap exceeds your limit

ALTERNATIVE LANGUAGE OPTIONS:
Option 1: "Cover up to $${Math.round(offerPrice * 0.05).toLocaleString()} gap"
Option 2: "Cover up to 5% gap"
Option 3: "Split any gap 50/50 up to $${Math.round(cashReserves * 0.8).toLocaleString()}"

BALANCE RISK AND REWARD:
→ Competitive without overextending
→ Defined maximum exposure
→ Maintains financial safety net
→ Still attractive to sellers
→ Room for other unexpected costs` : `⚠️ RECOMMENDED: KEEP STANDARD APPRAISAL CONTINGENCY

DO NOT waive appraisal contingency in your situation:

WHY NOT TO WAIVE:
• Limited cash reserves (${formatCurrency(cashReserves)})
• Cannot safely cover realistic appraisal gaps
• High financial risk if appraisal comes in low
• Would exhaust reserves with moderate gap
• Alternative strategies available

ALTERNATIVE COMPETITIVE STRATEGIES:
Instead of waiving appraisal, strengthen offer through:

1. HIGHER EARNEST MONEY:
   → Increase to 2-3% of purchase price
   → Shows commitment without financial risk

2. QUICK CLOSING:
   → Offer 21-day close if possible
   → Seller convenience can outweigh waiver

3. MINIMAL CONTINGENCIES:
   → Shorten inspection period to 7 days
   → Limit repair request scope

4. CLEAN FINANCING:
   → Conventional over FHA/VA if possible
   → Large down payment shows strength

5. FLEXIBILITY:
   → Accommodate seller's closing date
   → Offer rent-back if seller needs it

6. PRE-INSPECTION:
   → Inspect before offer
   → Remove inspection contingency instead

IF YOU MUST COMPETE WITH APPRAISAL WAIVER:
Maximum safe gap coverage: $${Math.round(cashReserves * 0.5).toLocaleString()}
Language: "Buyer will cover gap up to $${Math.round(cashReserves * 0.5).toLocaleString()} only"

⚠️ WARNING: Even this limited waiver carries risk in your situation`}

COMPARATIVE SALES RESEARCH:
Before any waiver, research thoroughly:
☐ Review 3-5 recent comparable sales
☐ Check list-to-sale price ratios in area
☐ Verify sales within last 90 days
☐ Confirm offer price aligns with market
☐ Consult with your agent on valuation

LENDER COORDINATION:
☐ Inform lender of appraisal waiver plan
☐ Confirm maximum loan amount
☐ Understand LTV implications
☐ Verify source of gap funds documentation
☐ Get pre-approval at offer amount

CONTINGENCY PROTECTION:
Even with appraisal waiver, KEEP:
✓ Financing contingency (lender approval)
✓ Inspection contingency (structural issues)
✓ Title contingency (clean title verification)

Never waive financing contingency with appraisal waiver—
they are separate protections!

DECISION FRAMEWORK:
Ask yourself:
□ Can I truly afford the maximum potential gap?
□ Will I have emergency fund after gap coverage?
□ Does offer price align with recent sales?
□ Am I comfortable with this level of risk?
□ Have I researched alternatives to waiver?
□ Has my agent reviewed this strategy?
□ Does my lender support this approach?

If you answer NO to any of these, reconsider the waiver.

FINAL RECOMMENDATION:
${riskLevel === 'LOW' ? 'PROCEED with full appraisal waiver—you are well-positioned' :
  riskLevel === 'MODERATE' ? 'PROCEED with partial gap coverage—balanced approach' :
  'DO NOT WAIVE—explore alternative competitive strategies instead'}`;

      return [
        { 
          label: 'Appraisal Gap Scenarios', 
          value: scenariosOutput, 
          isCurrency: false 
        },
        { 
          label: 'Risk Assessment', 
          value: riskAssessment, 
          isCurrency: false 
        },
        { 
          label: 'Recommendations', 
          value: recommendations, 
          isCurrency: false 
        },
      ];
    },
  },
};
