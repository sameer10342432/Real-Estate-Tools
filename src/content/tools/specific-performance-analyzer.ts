import { CalculatorContent } from '@/types';

export const SPECIFIC_PERFORMANCE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Specific Performance (Real Estate) Analyzer',
  description: 'Analyze likelihood of obtaining court-ordered specific performance to force completion of a real estate sale',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'specific-performance-analyzer',
  article: {
    title: "Specific Performance in Real Estate - Forcing Completion of Property Sales",
    content: `
    <h2>What is Specific Performance?</h2>
    <p>Specific performance is a legal remedy where a court orders the breaching party to perform their obligations under the contract - specifically, to complete the real estate sale as agreed. Unlike monetary damages, specific performance forces the actual transaction to occur. It's unique to real estate because each property is considered legally "unique," making money damages inadequate compensation.</p>
    
    <h3>Why Specific Performance Exists</h3>
    <ul>
      <li><strong>Unique Property Doctrine:</strong> Every piece of real estate is legally considered one-of-a-kind</li>
      <li><strong>Inadequate Money Damages:</strong> Buyer can't simply "buy another one" - this particular property has unique value</li>
      <li><strong>Historical Remedy:</strong> Equity courts have enforced specific performance for centuries</li>
      <li><strong>Stronger Than Damages:</strong> Forces performance rather than just paying compensation</li>
      <li><strong>Mutual Availability:</strong> Both buyers and sellers can seek this remedy</li>
    </ul>
    
    <h3>When Specific Performance is Awarded</h3>
    <p>Courts grant specific performance when these elements are met:</p>
    <ul>
      <li><strong>Valid Contract:</strong> Enforceable written agreement (Statute of Frauds requires real estate contracts in writing)</li>
      <li><strong>Definite Terms:</strong> Clear price, property description, parties, closing date</li>
      <li><strong>Mutual Assent:</strong> Both parties agreed and signed</li>
      <li><strong>Breach Occurred:</strong> One party refused to perform without legal excuse</li>
      <li><strong>Plaintiff Ready to Perform:</strong> Party seeking remedy was able and willing to close</li>
      <li><strong>Money Damages Inadequate:</strong> Property is unique (presumed for all real estate)</li>
      <li><strong>No Legal Defense:</strong> Breaching party has no valid excuse (fraud, mistake, impossibility)</li>
      <li><strong>Clean Hands:</strong> Plaintiff didn't breach or act in bad faith</li>
    </ul>
    
    <h3>Seller Breach - Buyer Seeking Specific Performance</h3>
    <p>Most common scenario - seller backs out, buyer sues to force sale:</p>
    
    <p><strong>Why Sellers Breach:</strong></p>
    <ul>
      <li>Received higher offer after signing contract</li>
      <li>Market prices increased significantly</li>
      <li>Seller changed mind about moving</li>
      <li>Inherited property and heirs disagree</li>
      <li>Divorce/family issues complicated sale</li>
      <li>Seller's new home purchase fell through</li>
    </ul>
    
    <p><strong>Buyer's Likelihood of Success:</strong></p>
    <ul>
      <li><strong>VERY HIGH:</strong> If contract valid, buyer ready to close, seller just changed mind</li>
      <li><strong>Courts Generally Favor Buyers:</strong> Strong presumption for specific performance</li>
      <li><strong>Burden on Seller:</strong> Seller must prove why they shouldn't be forced to sell</li>
      <li><strong>Practical Issues:</strong> Process takes 6-18 months, significant attorney fees</li>
      <li><strong>Market Risk:</strong> If market declines during lawsuit, buyer may no longer want property</li>
    </ul>
    
    <h3>Buyer Breach - Seller Seeking Specific Performance</h3>
    <p>Less common but increasing - seller sues buyer to force purchase:</p>
    
    <p><strong>Why Buyers Breach:</strong></p>
    <ul>
      <li>Financing fell through</li>
      <li>Found better property</li>
      <li>Job loss or income change</li>
      <li>Cold feet or changed mind</li>
      <li>Inspection revealed issues</li>
      <li>Market prices declined</li>
    </ul>
    
    <p><strong>Seller's Likelihood of Success:</strong></p>
    <ul>
      <li><strong>MODERATE:</strong> Courts historically less likely to force buyer to purchase</li>
      <li><strong>Buyer Defenses:</strong> Financing contingency, inspection issues, undisclosed defects</li>
      <li><strong>Practical Problems:</strong> If buyer genuinely can't afford property, how can they be forced?</li>
      <li><strong>Seller's Alternative:</strong> Keep earnest money as liquidated damages (faster, easier)</li>
      <li><strong>Increasing Trend:</strong> More sellers winning specific performance in rising markets</li>
    </ul>
    
    <h3>Process and Timeline</h3>
    <p>How specific performance lawsuits proceed:</p>
    <ol>
      <li><strong>Breach Occurs (Day 0):</strong> Party refuses to close</li>
      <li><strong>Demand Letter (Weeks 1-2):</strong> Attorney sends formal demand to perform</li>
      <li><strong>File Lawsuit (Month 1):</strong> Complaint filed in court seeking specific performance</li>
      <li><strong>Defendant Served (Month 1-2):</strong> Breaching party receives lawsuit</li>
      <li><strong>Answer Filed (Month 2-3):</strong> Defendant responds with defenses</li>
      <li><strong>Discovery (Months 3-9):</strong> Document requests, depositions, interrogatories</li>
      <li><strong>Motions (Months 6-12):</strong> Summary judgment motions to decide case early</li>
      <li><strong>Trial (Months 12-18):</strong> If not settled, case goes to trial</li>
      <li><strong>Judgment (Month 18+):</strong> Court orders specific performance or denies</li>
      <li><strong>Appeal Possible:</strong> Can add 1-2 more years</li>
    </ol>
    
    <h3>Costs of Pursuing Specific Performance</h3>
    <ul>
      <li><strong>Attorney Fees:</strong> $10,000-$50,000+ (not recoverable in most states)</li>
      <li><strong>Court Filing Fees:</strong> $300-$600</li>
      <li><strong>Expert Witnesses:</strong> $3,000-$10,000 (appraisers, title experts)</li>
      <li><strong>Deposition Costs:</strong> $2,000-$5,000</li>
      <li><strong>Title Company Fees:</strong> For extended title search, escrow maintenance</li>
      <li><strong>Opportunity Cost:</strong> Money tied up 1-2 years, can't buy another property</li>
      <li><strong>Emotional Toll:</strong> Stressful, time-consuming litigation</li>
      <li><strong>Total Cost:</strong> Often $20,000-$75,000</li>
    </ul>
    
    <h3>Defenses Against Specific Performance</h3>
    <p>Arguments breaching party can raise:</p>
    <ul>
      <li><strong>Contract Defects:</strong> Missing signatures, vague terms, not in writing</li>
      <li><strong>Fraud/Misrepresentation:</strong> Other party lied about material facts</li>
      <li><strong>Mistake:</strong> Mutual mistake about property (boundary, zoning)</li>
      <li><strong>Impossibility:</strong> Performance impossible (property destroyed, title defect can't be cleared)</li>
      <li><strong>Unclean Hands:</strong> Plaintiff also breached or acted in bad faith</li>
      <li><strong>Laches:</strong> Plaintiff waited too long to sue (unreasonable delay)</li>
      <li><strong>Waiver:</strong> Plaintiff accepted return of deposit, indicating waiver of right</li>
      <li><strong>Hardship:</strong> Extreme hardship to defendant outweighs benefit to plaintiff</li>
      <li><strong>Public Policy:</strong> Forcing sale violates public policy (rare)</li>
    </ul>
    
    <h3>Recent Trends</h3>
    <ul>
      <li><strong>Rising Markets = More Cases:</strong> When prices surge, more sellers breach and buyers sue</li>
      <li><strong>Sellers Winning More:</strong> Courts increasingly granting specific performance to sellers against buyers</li>
      <li><strong>Cash Buyers Favored:</strong> If buyer paying cash, harder to claim inability to perform</li>
      <li><strong>Liquidated Damages Preference:</strong> Some courts push parties toward liquidated damages instead</li>
      <li><strong>Alternative Dispute Resolution:</strong> More courts requiring mediation before trial</li>
    </ul>
    
    <h3>Alternatives to Specific Performance</h3>
    
    <h4>1. Monetary Damages</h4>
    <ul>
      <li><strong>Benefit of Bargain:</strong> Difference between contract price and current market value</li>
      <li><strong>Out-of-Pocket:</strong> Inspection, appraisal, loan fees, moving costs</li>
      <li><strong>Consequential:</strong> Temporary housing, storage, lost deposits on another property</li>
      <li><strong>Faster Resolution:</strong> Damages cases resolve quicker than specific performance</li>
      <li><strong>Risk:</strong> Must prove amount with evidence</li>
    </ul>
    
    <h4>2. Liquidated Damages</h4>
    <ul>
      <li>If contract includes clause, seller keeps earnest money</li>
      <li>Much faster and cheaper than lawsuit</li>
      <li>Usually 1-3% of purchase price</li>
      <li>Limited to earnest money amount</li>
    </ul>
    
    <h4>3. Rescission</h4>
    <ul>
      <li>Cancel contract and return to pre-contract status</li>
      <li>Plaintiff gets earnest money back</li>
      <li>No further obligations on either side</li>
      <li>Appropriate if contract was fraudulent or mistaken</li>
    </ul>
    
    <h4>4. Settlement Negotiation</h4>
    <ul>
      <li>Breaching party pays premium to be released</li>
      <li>Common: Seller pays buyer $10,000-$50,000 to walk away</li>
      <li>Avoids litigation costs and uncertainty</li>
      <li>Faster resolution - parties move on quickly</li>
    </ul>
    
    <h3>Strategic Considerations</h3>
    
    <p><strong>When to Pursue Specific Performance:</strong></p>
    <ul>
      <li>Property truly unique (waterfront, historical, perfect location)</li>
      <li>Market prices rising rapidly - property appreciating during lawsuit</li>
      <li>Contract price significantly below current value</li>
      <li>You have emotional attachment to property</li>
      <li>Strong financial position to weather 1-2 year litigation</li>
      <li>Breach is clear and defensible seller has no valid excuse</li>
      <li>Attorney advises high likelihood of success</li>
    </ul>
    
    <p><strong>When to Accept Damages Instead:</strong></p>
    <ul>
      <li>Property not truly unique - comparable alternatives exist</li>
      <li>Market declining - property value dropping</li>
      <li>Can't wait 1-2 years - need to buy something now</li>
      <li>Litigation costs approaching property value gain</li>
      <li>Uncertain outcome - defenses may prevail</li>
      <li>Seller judgment-proof (no assets to satisfy judgment)</li>
      <li>Prefer money now over property later</li>
    </ul>
    
    <h3>State Variations</h3>
    <ul>
      <li><strong>California:</strong> Specific performance favored for buyers, increasingly for sellers</li>
      <li><strong>Florida:</strong> Courts readily grant specific performance for real estate</li>
      <li><strong>Texas:</strong> Strong preference for specific performance if contract valid</li>
      <li><strong>New York:</strong> Liquidated damages clauses may limit specific performance</li>
      <li><strong>Illinois:</strong> Courts will grant if contract clear and breach proven</li>
      <li><strong>Some States:</strong> Allow "dual remedy" - specific performance OR damages, plaintiff chooses</li>
    </ul>
    
    <h3>Recent Case Examples</h3>
    <ul>
      <li><strong>Seller Breach (Hot Market):</strong> Seller signed $1.2M contract, market rose to $1.8M, seller refused to close. Buyer sued, won specific performance after 14-month case. Attorney fees $35K.</li>
      <li><strong>Buyer Breach (Cash Buyer):</strong> Cash buyer backed out citing "financing issues" (false). Seller sued for specific performance. Court ordered buyer to close - $800K property forced sale.</li>
      <li><strong>Denied (Contract Defect):</strong> Buyer sued for specific performance but contract missing property legal description. Court denied - contract too vague to enforce.</li>
      <li><strong>Settled Mid-Litigation):</strong> Seller breached, buyer sued. After $20K in attorney fees, parties settled - seller paid buyer $75K and kept property.</li>
    </ul>
    
    <h3>Practical Advice</h3>
    
    <p><strong>If You're the Breaching Party:</strong></p>
    <ul>
      <li>Consult attorney immediately - don't just stop communicating</li>
      <li>Evaluate your defenses (contingencies, undisclosed defects, fraud)</li>
      <li>Calculate cost of performance vs. fighting lawsuit</li>
      <li>Attempt to negotiate release (pay premium to other party)</li>
      <li>Document any legitimate reasons for non-performance</li>
      <li>Don't hide or sell property to third party (court can undo sale)</li>
      <li>Consider whether completing sale is actually better than litigation</li>
    </ul>
    
    <p><strong>If You're the Non-Breaching Party:</strong></p>
    <ul>
      <li>Document breach thoroughly with dated communications</li>
      <li>Send formal demand letter giving opportunity to cure</li>
      <li>Consult experienced real estate litigation attorney</li>
      <li>Get updated appraisal showing property value vs. contract price</li>
      <li>File lis pendens (notice of pending lawsuit) to cloud title</li>
      <li>Calculate litigation costs vs. potential gain</li>
      <li>Consider settlement - bird in hand vs. two in bush</li>
      <li>Act quickly - don't delay filing suit (laches defense)</li>
      <li>Be prepared for 1-2 year process</li>
    </ul>
    
    <h3>Lis Pendens (Notice of Lawsuit)</h3>
    <ul>
      <li><strong>Purpose:</strong> Clouds title, prevents seller from selling to someone else</li>
      <li><strong>Filing:</strong> Recorded with county recorder when lawsuit filed</li>
      <li><strong>Effect:</strong> Warns world of pending claim on property</li>
      <li><strong>Removal:</strong> Automatically removed if plaintiff loses or dismisses case</li>
      <li><strong>Abuse:</strong> Filing frivolous lis pendens can result in penalties</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "contractPrice",
        label: "Contract Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "currentValue",
        label: "Current Market Value",
        type: "number",
        placeholder: "600000",
        defaultValue: "600000",
      },
      {
        name: "whoBreached",
        label: "Who Breached the Contract?",
        type: "select",
        options: [
          "Seller refused to close",
          "Buyer refused to close",
          "No breach - just researching"
        ],
        defaultValue: "No breach - just researching",
      },
      {
        name: "reasonForBreach",
        label: "Reason for Breach",
        type: "select",
        options: [
          "Changed mind / Got better offer",
          "Financing fell through",
          "Inspection revealed issues",
          "Undisclosed defects discovered",
          "Family/personal circumstances",
          "Market conditions changed",
          "No legitimate reason given"
        ],
        defaultValue: "No legitimate reason given",
      },
      {
        name: "contractValidity",
        label: "Contract Quality",
        type: "select",
        options: [
          "Written, signed, all terms clear",
          "Written but some terms vague",
          "Missing signatures or dates",
          "Verbal agreement only",
          "Not sure"
        ],
        defaultValue: "Written, signed, all terms clear",
      },
      {
        name: "uniqueness",
        label: "Property Uniqueness",
        type: "select",
        options: [
          "Truly unique (waterfront, historical, one-of-kind)",
          "Unique location (perfect neighborhood)",
          "Somewhat special features",
          "Standard property - many comparables",
          "Not sure"
        ],
        defaultValue: "Not sure",
      },
    ],
    results: [
      { label: "Specific Performance Likelihood", isCurrency: false },
      { label: "Financial Analysis", isCurrency: false },
      { label: "Recommended Strategy", isCurrency: false },
      { label: "Timeline & Costs", isCurrency: false },
      { label: "Alternatives to Consider", isCurrency: false },
    ],
    calculate: (data: any) => {
      const contractPrice = Number(data.contractPrice) || 500000;
      const currentValue = Number(data.currentValue) || 600000;
      const whoBreached = data.whoBreached || "No breach - just researching";
      const reasonForBreach = data.reasonForBreach || "No legitimate reason given";
      const contractValidity = data.contractValidity || "Written, signed, all terms clear";
      const uniqueness = data.uniqueness || "Not sure";
      
      const equityGain = currentValue - contractPrice;
      const gainPercent = (equityGain / contractPrice) * 100;
      
      let successScore = 50; // Base score
      let factors = [];
      
      // Contract validity is crucial
      if (contractValidity === "Written, signed, all terms clear") {
        successScore += 25;
        factors.push("✅ Strong contract - signed and clear");
      } else if (contractValidity === "Written but some terms vague") {
        successScore += 10;
        factors.push("⚠️ Vague terms may cause issues");
      } else if (contractValidity === "Missing signatures or dates") {
        successScore -= 30;
        factors.push("🚩 Contract defects - major problem");
      } else if (contractValidity === "Verbal agreement only") {
        successScore -= 50;
        factors.push("❌ Statute of Frauds violation - unenforceable");
      }
      
      // Who breached and why
      if (whoBreached === "Seller refused to close") {
        successScore += 20;
        factors.push("💪 Seller breach - courts favor buyers");
        
        if (reasonForBreach === "Changed mind / Got better offer" || reasonForBreach === "No legitimate reason given") {
          successScore += 15;
          factors.push("🎯 No valid excuse - strong case");
        } else if (reasonForBreach === "Undisclosed defects discovered") {
          successScore -= 25;
          factors.push("⚖️ Seller may have defense");
        }
      } else if (whoBreached === "Buyer refused to close") {
        successScore -= 10;
        factors.push("📊 Buyer breach - seller must prove buyer can perform");
        
        if (reasonForBreach === "Financing fell through") {
          successScore -= 30;
          factors.push("💰 Financing issue - may block specific performance");
        } else if (reasonForBreach === "Inspection revealed issues") {
          successScore -= 20;
          factors.push("🔍 Inspection defense possible");
        } else if (reasonForBreach === "Changed mind / Got better offer") {
          successScore += 10;
          factors.push("🎯 No valid excuse helps seller");
        }
      }
      
      // Property uniqueness
      if (uniqueness === "Truly unique (waterfront, historical, one-of-kind)") {
        successScore += 15;
        factors.push("🏆 Truly unique property - prime for specific performance");
      } else if (uniqueness === "Unique location (perfect neighborhood)") {
        successScore += 10;
        factors.push("📍 Special location helps case");
      } else if (uniqueness === "Standard property - many comparables") {
        successScore -= 10;
        factors.push("🏠 Comparable properties - damages may suffice");
      }
      
      // Equity gain matters for decision
      if (equityGain > 100000 && whoBreached === "Seller refused to close") {
        successScore += 10;
        factors.push("💵 Large equity gain ($" + equityGain.toLocaleString() + ") motivates lawsuit");
      } else if (equityGain < 0 && whoBreached === "Seller refused to close") {
        successScore -= 20;
        factors.push("📉 Property declined in value - may not want to force sale");
      }
      
      // Determine likelihood
      let likelihood = "";
      if (successScore >= 80) {
        likelihood = "🟢 VERY HIGH (80-90% chance) - Strong specific performance case";
      } else if (successScore >= 60) {
        likelihood = "🟢 HIGH (60-80% chance) - Good likelihood of success";
      } else if (successScore >= 40) {
        likelihood = "🟡 MODERATE (40-60% chance) - Uncertain outcome";
      } else if (successScore >= 20) {
        likelihood = "🟠 LOW (20-40% chance) - Significant obstacles";
      } else {
        likelihood = "🔴 VERY LOW (<20% chance) - Major defenses exist";
      }
      
      const factorsText = factors.join(" | ");
      
      // Financial analysis
      const estimatedAttorneyFees = 25000;
      const estimatedTimeMonths = 15;
      const totalCost = estimatedAttorneyFees;
      
      let financialAnalysis = "";
      if (equityGain > totalCost * 2) {
        financialAnalysis = `💰 FINANCIALLY WORTH IT: Potential gain ($${equityGain.toLocaleString()}) significantly exceeds litigation costs (~$${totalCost.toLocaleString()}). Net benefit ~$${(equityGain - totalCost).toLocaleString()}. However, consider ${estimatedTimeMonths}-month timeline and market risk.`;
      } else if (equityGain > totalCost) {
        financialAnalysis = `📊 MARGINAL BENEFIT: Potential gain ($${equityGain.toLocaleString()}) exceeds costs (~$${totalCost.toLocaleString()}) but margin is thin. Net ~$${(equityGain - totalCost).toLocaleString()}. Settlement may be wiser.`;
      } else if (equityGain > 0) {
        financialAnalysis = `⚠️ NOT ECONOMICAL: Litigation costs (~$${totalCost.toLocaleString()}) exceed potential gain ($${equityGain.toLocaleString()}). Would LOSE $${(totalCost - equityGain).toLocaleString()} overall. Pursue only if property is irreplaceable to you emotionally.`;
      } else {
        financialAnalysis = `❌ NO FINANCIAL INCENTIVE: Property value DECLINED by $${Math.abs(equityGain).toLocaleString()}. Forcing this sale makes no economic sense. Walk away unless contract terms are still favorable for other reasons.`;
      }
      
      // Strategy recommendation
      let strategy = "";
      if (successScore >= 70 && equityGain > totalCost * 2) {
        strategy = "PURSUE SPECIFIC PERFORMANCE: (1) Hire experienced real estate litigation attorney immediately, (2) Send formal demand letter giving 10 days to cure breach, (3) File lawsuit and lis pendens if they don't comply, (4) Prepare for 12-18 month process, (5) Budget $20K-$40K for attorney fees, (6) Consider settlement offers but don't accept less than 70% of equity gain, (7) Be ready to close - court will order you to perform too. Strong case worth pursuing.";
      } else if (successScore >= 50 && equityGain > 50000) {
        strategy = "NEGOTIATE SETTLEMENT FIRST: (1) Consult attorney about strength of case, (2) Send demand letter proposing settlement (pay you $X to release contract), (3) Suggest 50-70% of equity gain as settlement, (4) Give 15-day deadline, (5) If they refuse, evaluate filing lawsuit, (6) Consider mediation as middle ground, (7) Weigh litigation costs/time vs. settlement. Don't rush into lawsuit - try settlement first.";
      } else if (successScore >= 50 && equityGain < 50000) {
        strategy = "LIKELY NOT WORTH IT: (1) Potential gain too small for litigation costs, (2) If seller breached, negotiate return of earnest money plus $10K-$20K compensation, (3) If buyer breached, consider accepting liquidated damages, (4) Move on and find comparable property, (5) Only sue if property has irreplaceable sentimental value. Economics don't support lawsuit.";
      } else if (successScore < 50) {
        strategy = "WEAK CASE - AVOID LITIGATION: (1) You have significant obstacles to specific performance, (2) If seller breached, negotiate return of deposits and out-of-pocket costs, (3) If buyer breached, keep earnest money and relist, (4) Consult attorney but expect negative assessment, (5) Consider actual damages lawsuit instead if losses are provable, (6) Don't throw good money after bad - litigation unlikely to succeed. Cut your losses.";
      } else {
        strategy = "ASSESS YOUR OPTIONS: (1) Consult experienced real estate litigator for case evaluation ($300-$500), (2) Consider uniqueness of property vs. comparables, (3) Calculate your actual damages if specific performance denied, (4) Evaluate timeline - can you wait 18+ months?, (5) Get updated appraisal showing current value, (6) Explore settlement possibilities, (7) Make informed decision based on complete picture.";
      }
      
      // Timeline and costs
      const timelineCosts = `⏰ TIMELINE: 12-18 months from filing to judgment (add 12-24 months if appealed) | 💰 COSTS: Attorney fees $20K-$50K, court fees $500-$1,000, expert witnesses $3K-$10K, depositions $2K-$5K | Total: $25K-$65K+ | ⚖️ NOTE: Attorney fees generally NOT recoverable from losing party in most states - you pay your own costs even if you win.`;
      
      // Alternatives
      let alternatives = "";
      if (whoBreached === "Seller refused to close") {
        alternatives = "Alternative Remedies: (1) MONETARY DAMAGES - Sue for difference between contract price and current market value ($" + equityGain.toLocaleString() + ") plus out-of-pocket costs, faster than specific performance, (2) SETTLEMENT - Negotiate payment of $" + (equityGain * 0.6).toLocaleString() + "-$" + (equityGain * 0.8).toLocaleString() + " (60-80% of gain) to release seller, (3) RESCISSION - Cancel contract, get earnest money back, find comparable property, (4) WAIT - If seller can't sell to others (lis pendens filed), they may eventually close.";
      } else if (whoBreached === "Buyer refused to close") {
        alternatives = "Alternative Remedies: (1) LIQUIDATED DAMAGES - Keep earnest money deposit (fastest, easiest), (2) MONETARY DAMAGES - Sue for carrying costs, price decline, relisting expenses, (3) FIND NEW BUYER - Relist immediately, market may support same/higher price, (4) SETTLEMENT - Negotiate with buyer to pay X amount to be released from contract, (5) WAIT - Buyer may change mind if you give a few weeks.";
      } else {
        alternatives = "General Information: If facing breach, you have multiple remedy options: (1) Specific Performance - force sale, (2) Monetary Damages - sue for financial losses, (3) Liquidated Damages - keep/get earnest money, (4) Rescission - cancel and return to pre-contract status, (5) Settlement - negotiate buyout. Choose based on property uniqueness, financial gain, litigation costs, and timeline. Consult attorney for case-specific advice.";
      }

      return [
        { label: "Specific Performance Likelihood", value: `${likelihood} | SCORE: ${successScore}/100 | ${factorsText}`, isCurrency: false },
        { label: "Financial Analysis", value: financialAnalysis, isCurrency: false },
        { label: "Recommended Strategy", value: strategy, isCurrency: false },
        { label: "Timeline & Costs", value: timelineCosts, isCurrency: false },
        { label: "Alternatives to Consider", value: alternatives, isCurrency: false },
      ];
    },
  },
};
