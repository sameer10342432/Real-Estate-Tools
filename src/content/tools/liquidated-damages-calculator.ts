import { CalculatorContent } from '@/types';

export const LIQUIDATED_DAMAGES_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Liquidated Damages Calculator (Contract Breach)',
  description: 'Calculate liquidated damages for real estate contract breaches and understand enforcement, limitations, and alternatives',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'liquidated-damages-calculator',
  article: {
    title: "Liquidated Damages in Real Estate - Contract Breach Remedies and Calculations",
    content: `
    <h2>What are Liquidated Damages?</h2>
    <p>Liquidated damages are pre-determined compensation amounts specified in a real estate contract that one party must pay to the other if they breach the agreement. Rather than proving actual damages in court, the parties agree in advance to a specific remedy - typically the forfeiture of the buyer's earnest money deposit if the buyer backs out without legal justification.</p>
    
    <h3>Purpose of Liquidated Damages Clauses</h3>
    <ul>
      <li><strong>Certainty:</strong> Both parties know consequences of breach upfront</li>
      <li><strong>Avoid Litigation:</strong> Eliminates need to prove actual damages in court</li>
      <li><strong>Quick Resolution:</strong> Allows seller to move on and relist property</li>
      <li><strong>Fair Compromise:</strong> Reasonable middle ground between no damages and unlimited liability</li>
      <li><strong>Risk Allocation:</strong> Defines maximum loss for buyer (earnest money)</li>
      <li><strong>Efficient Remedy:</strong> Simpler than suing for specific performance or actual damages</li>
    </ul>
    
    <h3>How Liquidated Damages Work in Real Estate</h3>
    <p><strong>Typical Scenario:</strong></p>
    <ol>
      <li>Buyer and seller sign purchase agreement</li>
      <li>Buyer deposits earnest money (usually 1-3% of purchase price)</li>
      <li>Contract includes liquidated damages clause</li>
      <li>Buyer breaches contract (backs out without legal excuse)</li>
      <li>Seller keeps earnest money as liquidated damages</li>
      <li>Seller cannot sue for additional damages (in most cases)</li>
    </ol>
    
    <h3>Standard Liquidated Damages Language</h3>
    <p>Common contractual provisions:</p>
    <ul>
      <li>"If Buyer defaults, Seller may elect to treat Buyer's earnest money deposit as liquidated damages"</li>
      <li>"Parties agree that actual damages would be difficult to ascertain"</li>
      <li>"Earnest money represents fair and reasonable estimate of Seller's damages"</li>
      <li>"Liquidated damages shall be Seller's sole and exclusive remedy"</li>
      <li>"Buyer's liability shall be limited to forfeiture of earnest money"</li>
      <li>"This is not a penalty but a reasonable pre-estimate of damages"</li>
    </ul>
    
    <h3>Buyer Breach Scenarios</h3>
    <p>When buyer may lose earnest money:</p>
    <ul>
      <li><strong>Cold Feet:</strong> Buyer changes mind without legal contingency</li>
      <li><strong>Better Deal:</strong> Buyer finds another property they prefer</li>
      <li><strong>Financing Failure (buyer's fault):</strong> Buyer quits job, makes large purchase affecting credit</li>
      <li><strong>Missed Deadlines:</strong> Buyer fails to remove contingencies or close on time</li>
      <li><strong>Buyer Defaults on Obligations:</strong> Doesn't apply for loan, won't sign documents</li>
      <li><strong>Bad Faith:</strong> Buyer invokes contingency falsely (e.g., fake inspection issues)</li>
    </ul>
    
    <h3>Lawful Buyer Cancellation (Keep Earnest Money)</h3>
    <p>Buyer can cancel and get deposit back if:</p>
    <ul>
      <li><strong>Contingencies Not Met:</strong> Inspection reveals issues, financing denied, appraisal comes low</li>
      <li><strong>Seller Breach:</strong> Seller refuses to perform, misrepresented property, won't clear title</li>
      <li><strong>Within Contingency Periods:</strong> Buyer acts within allowed timeframes</li>
      <li><strong>Mutual Agreement:</strong> Both parties agree to cancel</li>
      <li><strong>Force Majeure:</strong> Natural disaster, government action makes closing impossible</li>
      <li><strong>Title Defects:</strong> Seller can't deliver clear title</li>
      <li><strong>Property Destroyed:</strong> Fire, flood before closing (depending on contract)</li>
    </ul>
    
    <h3>Seller Breach Scenarios</h3>
    <p>When seller may owe damages to buyer:</p>
    <ul>
      <li><strong>Backs Out for Better Offer:</strong> Seller accepts higher bid after contract signed</li>
      <li><strong>Refuses to Close:</strong> Seller changes mind, won't sign documents</li>
      <li><strong>Can't Deliver Title:</strong> Seller unable to clear liens, resolve ownership issues</li>
      <li><strong>Fraud/Misrepresentation:</strong> Seller lied about material facts</li>
      <li><strong>Won't Make Required Repairs:</strong> Seller agreed to repairs, then refuses</li>
    </ul>
    
    <p><strong>Buyer's Remedies for Seller Breach:</strong></p>
    <ul>
      <li><strong>Return of Earnest Money:</strong> Immediate refund of deposit</li>
      <li><strong>Specific Performance:</strong> Court order forcing seller to complete sale</li>
      <li><strong>Actual Damages:</strong> Difference between contract price and current market price</li>
      <li><strong>Out-of-Pocket Expenses:</strong> Inspection costs, appraisal, loan fees</li>
      <li><strong>Consequential Damages:</strong> Moving costs, temporary housing if seller's breach caused harm</li>
    </ul>
    
    <h3>Earnest Money Amounts by Purchase Price</h3>
    <p>Typical earnest money deposits (2024 standards):</p>
    <ul>
      <li><strong>$0-$250,000:</strong> $1,000-$5,000 (1-2%)</li>
      <li><strong>$250,000-$500,000:</strong> $5,000-$15,000 (1-3%)</li>
      <li><strong>$500,000-$1,000,000:</strong> $15,000-$30,000 (2-3%)</li>
      <li><strong>$1,000,000+:</strong> $30,000-$100,000+ (3-5%)</li>
      <li><strong>Hot Markets:</strong> Often 3-5% to show commitment</li>
      <li><strong>Buyer's Markets:</strong> May negotiate down to 1-2%</li>
      <li><strong>Cash Offers:</strong> May be higher (5-10%) to demonstrate seriousness</li>
      <li><strong>New Construction:</strong> Often lower ($1,000-$5,000 fixed amount)</li>
    </ul>
    
    <h3>Enforceability Requirements</h3>
    <p>For liquidated damages clause to be enforceable, courts require:</p>
    <ul>
      <li><strong>Reasonable Amount:</strong> Proportionate to anticipated damages, not punitive</li>
      <li><strong>Difficult to Prove Damages:</strong> Actual harm would be hard to calculate</li>
      <li><strong>Made at Contract Time:</strong> Agreed to when deal made, not after breach</li>
      <li><strong>Clear Language:</strong> Unambiguous terms both parties understood</li>
      <li><strong>Mutual Consent:</strong> Both parties voluntarily agreed</li>
      <li><strong>Not a Penalty:</strong> Designed to compensate, not punish</li>
    </ul>
    
    <h3>Penalty vs. Liquidated Damages</h3>
    <p>Courts will strike down penalties but enforce liquidated damages:</p>
    
    <table border="1" cellpadding="8">
      <tr>
        <th>Liquidated Damages (Enforceable)</th>
        <th>Penalty (Unenforceable)</th>
      </tr>
      <tr>
        <td>Reasonable estimate of actual harm</td>
        <td>Excessive, punitive amount</td>
      </tr>
      <tr>
        <td>1-3% of purchase price typical</td>
        <td>10-20% of purchase price</td>
      </tr>
      <tr>
        <td>Compensates for seller's lost time, costs</td>
        <td>Designed to punish, deter breach</td>
      </tr>
      <tr>
        <td>Proportionate to contract value</td>
        <td>Grossly disproportionate</td>
      </tr>
      <tr>
        <td>Both parties benefited from certainty</td>
        <td>One-sided, unconscionable</td>
      </tr>
    </table>
    
    <h3>Seller's Actual Damages from Buyer Breach</h3>
    <p>What seller loses when buyer backs out:</p>
    <ul>
      <li><strong>Lost Time:</strong> Property off market 30-60 days (opportunity cost)</li>
      <li><strong>Potential Price Decline:</strong> Market may have shifted lower during contract period</li>
      <li><strong>Carrying Costs:</strong> Mortgage, taxes, insurance, utilities during delay</li>
      <li><strong>Marketing Costs:</strong> Re-listing fees, new photos, staging</li>
      <li><strong>Stigma:</strong> Property perceived as "problem" if multiple failed deals</li>
      <li><strong>Alternative Offers Lost:</strong> May have rejected backup offers</li>
      <li><strong>Attorney Fees:</strong> Legal costs for contract preparation, dispute</li>
      <li><strong>Emotional Distress:</strong> Generally not recoverable in real estate</li>
    </ul>
    
    <h3>Earnest Money Disputes</h3>
    <p>When parties disagree over who gets earnest money:</p>
    <ul>
      <li><strong>Escrow Holder Stuck:</strong> Cannot release without both signatures or court order</li>
      <li><strong>Mediation:</strong> Neutral third party helps negotiate resolution</li>
      <li><strong>Arbitration:</strong> Binding decision by arbitrator (if contract requires)</li>
      <li><strong>Lawsuit:</strong> Either party can sue for release of funds</li>
      <li><strong>Small Claims Court:</strong> Option if earnest money under state limit ($5,000-$25,000)</li>
      <li><strong>Interpleader Action:</strong> Escrow holder deposits money with court, lets parties fight it out</li>
      <li><strong>Timeline:</strong> Can take 6-18 months if litigated</li>
    </ul>
    
    <h3>Alternatives to Liquidated Damages</h3>
    
    <h4>1. Specific Performance</h4>
    <ul>
      <li>Court orders breaching party to complete the sale</li>
      <li>Available for real estate (each property unique)</li>
      <li>Seller more often seeks this remedy than buyer</li>
      <li>Takes 6-12+ months to obtain court order</li>
      <li>Can be appealed, dragging out process</li>
    </ul>
    
    <h4>2. Actual Damages Lawsuit</h4>
    <ul>
      <li>Sue for provable financial losses from breach</li>
      <li>Must prove amount with evidence</li>
      <li>Can include lost profits, increased costs</li>
      <li>Litigation expensive and time-consuming</li>
      <li>Outcome uncertain</li>
    </ul>
    
    <h4>3. Dual Remedy Contract</h4>
    <ul>
      <li>Seller can choose between liquidated damages OR actual damages/specific performance</li>
      <li>Gives seller flexibility based on market conditions</li>
      <li>Some states allow, others don't</li>
      <li>Buyer has more risk with this structure</li>
    </ul>
    
    <h3>State-Specific Rules</h3>
    <p>Liquidated damages laws vary by state:</p>
    <ul>
      <li><strong>California:</strong> Presumed valid if 3% or less of purchase price</li>
      <li><strong>Florida:</strong> Common in purchase contracts, enforced if reasonable</li>
      <li><strong>Texas:</strong> Strictly enforced if contract is clear</li>
      <li><strong>New York:</strong> May allow seller to pursue actual damages instead</li>
      <li><strong>Illinois:</strong> Courts closely scrutinize for reasonableness</li>
      <li><strong>Massachusetts:</strong> Liquidated damages or specific performance, seller chooses</li>
    </ul>
    
    <h3>Tax Implications</h3>
    <ul>
      <li><strong>Seller Keeping Earnest Money:</strong> Generally treated as ordinary income (taxable)</li>
      <li><strong>Buyer Forfeiting Deposit:</strong> May be deductible as investment loss (consult CPA)</li>
      <li><strong>IRS Form 1099-S:</strong> Required if earnest money retained exceeds $600</li>
      <li><strong>Capital Gain/Loss:</strong> Treatment depends on buyer's intent (personal vs. investment)</li>
    </ul>
    
    <h3>Negotiation Strategies</h3>
    
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Negotiate smaller earnest money to limit liquidated damages risk</li>
      <li>Include strong contingencies to preserve escape routes</li>
      <li>Ensure liquidated damages is seller's "sole and exclusive" remedy</li>
      <li>Avoid dual remedy clauses that give seller choice of remedies</li>
      <li>Document good faith efforts to perform (loan applications, inspections)</li>
    </ul>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Request higher earnest money (3-5%) in strong markets</li>
      <li>Shorten contingency periods to reduce time at risk</li>
      <li>Consider dual remedy clause allowing choice between liquidated damages and lawsuit</li>
      <li>Require non-refundable deposits for certain milestones</li>
      <li>Include attorney fee reimbursement clause if buyer breaches</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Read liquidated damages clause carefully before signing</li>
      <li>Understand conditions under which you lose/keep earnest money</li>
      <li>Act in good faith and meet all contractual obligations</li>
      <li>Document everything in writing (emails, texts)</li>
      <li>Remove contingencies only when confident you'll close</li>
      <li>If you must breach, consult attorney first to minimize damages</li>
      <li>Never threaten breach as negotiation tactic - may backfire</li>
      <li>If dispute arises, attempt mediation before litigation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "earnestMoneyPercent",
        label: "Earnest Money (%)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "daysOnMarket",
        label: "Days Property Was Off Market",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "sellerCarryingCosts",
        label: "Seller's Monthly Carrying Costs",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "breachType",
        label: "Type of Breach",
        type: "select",
        options: [
          "Buyer backed out - no legal excuse",
          "Buyer failed to remove contingencies on time",
          "Buyer couldn't get financing (buyer's fault)",
          "Seller backed out for better offer",
          "Seller can't deliver clear title",
          "Mutual agreement to cancel",
          "No breach - just estimating"
        ],
        defaultValue: "No breach - just estimating",
      },
      {
        name: "marketChange",
        label: "Market Price Change During Contract",
        type: "select",
        options: [
          "Increased 5-10%",
          "Stayed the same",
          "Decreased 5-10%",
          "Decreased 10-20%",
          "Don't know"
        ],
        defaultValue: "Stayed the same",
      },
    ],
    results: [
      { label: "Liquidated Damages Amount", isCurrency: true },
      { label: "Seller's Estimated Actual Damages", isCurrency: true },
      { label: "Reasonableness Assessment", isCurrency: false },
      { label: "Legal Analysis", isCurrency: false },
      { label: "Recommended Action", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 400000;
      const earnestMoneyPercent = Number(data.earnestMoneyPercent) || 2;
      const daysOnMarket = Number(data.daysOnMarket) || 45;
      const sellerCarryingCosts = Number(data.sellerCarryingCosts) || 3000;
      const breachType = data.breachType || "No breach - just estimating";
      const marketChange = data.marketChange || "Stayed the same";
      
      // Calculate liquidated damages (earnest money)
      const liquidatedDamages = purchasePrice * (earnestMoneyPercent / 100);
      
      // Calculate seller's actual damages
      const monthsDelay = daysOnMarket / 30;
      const carryingCostsTotal = sellerCarryingCosts * monthsDelay;
      
      let marketLossValue = 0;
      if (marketChange === "Decreased 5-10%") {
        marketLossValue = purchasePrice * 0.075; // Average 7.5%
      } else if (marketChange === "Decreased 10-20%") {
        marketLossValue = purchasePrice * 0.15; // Average 15%
      } else if (marketChange === "Increased 5-10%") {
        marketLossValue = -(purchasePrice * 0.075); // Seller actually gained
      }
      
      const relistingCosts = 2000; // Estimated marketing, photos, etc.
      const attorneyFees = 1500; // Legal costs
      
      const actualDamages = carryingCostsTotal + marketLossValue + relistingCosts + attorneyFees;
      const estimatedActualDamages = Math.max(0, actualDamages);
      
      // Reasonableness assessment
      const percentOfPrice = (liquidatedDamages / purchasePrice) * 100;
      let reasonableness = "";
      let enforceable = true;
      
      if (percentOfPrice <= 3) {
        reasonableness = `✅ REASONABLE - ${percentOfPrice.toFixed(1)}% of purchase price is within standard range (1-3%). Likely enforceable as liquidated damages, not penalty.`;
        enforceable = true;
      } else if (percentOfPrice <= 5) {
        reasonableness = `⚠️ BORDERLINE - ${percentOfPrice.toFixed(1)}% is higher than typical (1-3%). May be challenged as penalty in some states. Enforceability depends on actual damages and state law.`;
        enforceable = true;
      } else if (percentOfPrice <= 10) {
        reasonableness = `🟠 HIGH RISK - ${percentOfPrice.toFixed(1)}% is excessive. Likely to be challenged as penalty rather than liquidated damages. Court may reduce or invalidate.`;
        enforceable = false;
      } else {
        reasonableness = `🔴 PENALTY - ${percentOfPrice.toFixed(1)}% is clearly punitive and grossly disproportionate. Almost certainly unenforceable. Court will likely invalidate entirely or reduce to reasonable amount.`;
        enforceable = false;
      }
      
      // Compare to actual damages
      if (liquidatedDamages < estimatedActualDamages * 0.5) {
        reasonableness += ` | Liquidated damages are LESS than estimated actual damages - good deal for buyer, seller may pursue actual damages instead if contract allows.`;
      } else if (liquidatedDamages > estimatedActualDamages * 2) {
        reasonableness += ` | Liquidated damages EXCEED actual damages significantly - may strengthen penalty argument.`;
      } else {
        reasonableness += ` | Liquidated damages reasonably approximate actual damages - supports enforceability.`;
      }
      
      // Legal analysis
      let legalAnalysis = "";
      if (breachType === "Buyer backed out - no legal excuse" || breachType === "Buyer failed to remove contingencies on time") {
        legalAnalysis = `BUYER BREACH: Seller has right to retain earnest money of $${liquidatedDamages.toLocaleString()} as liquidated damages. If contract includes "sole and exclusive remedy" language, seller cannot sue for additional damages. If contract allows dual remedies, seller could choose to pursue actual damages ($${estimatedActualDamages.toLocaleString()}) or specific performance instead. Buyer has no legal defense and will lose earnest money.`;
      } else if (breachType === "Buyer couldn't get financing (buyer's fault)") {
        legalAnalysis = `FINANCING CONTINGENCY ISSUE: If buyer was denied financing despite good faith efforts, financing contingency protects buyer and earnest money should be returned. However, if buyer CAUSED the denial (quit job, made large purchases, failed to apply promptly), this constitutes breach and seller keeps earnest money. Key question: Did buyer act in good faith? Document timeline and actions.`;
      } else if (breachType === "Seller backed out for better offer" || breachType === "Seller can't deliver clear title") {
        legalAnalysis = `SELLER BREACH: Buyer entitled to full refund of earnest money ($${liquidatedDamages.toLocaleString()}) PLUS buyer can choose: (1) Specific Performance - sue to force seller to complete sale, OR (2) Actual Damages - sue for difference between contract price and current market price plus out-of-pocket expenses (inspection, appraisal, loan fees). Buyer in strong position. Seller faces significant liability beyond just returning deposit.`;
      } else if (breachType === "Mutual agreement to cancel") {
        legalAnalysis = `MUTUAL CANCELLATION: No breach occurred. Parties agreed to terminate contract. Earnest money should be returned to buyer in full unless contract specifies different arrangement. Both parties released from obligations with no penalties or damages owed.`;
      } else {
        legalAnalysis = `NO BREACH SCENARIO: This is informational calculation. If buyer breaches without legal excuse, seller would retain $${liquidatedDamages.toLocaleString()} as liquidated damages (if enforceable). If seller breaches, buyer gets deposit back plus can pursue actual damages or specific performance. Always consult contract and real estate attorney before breaching or claiming breach.`;
      }
      
      // Recommendation
      let recommendation = "";
      if (breachType.includes("Buyer") && !breachType.includes("financing") && !breachType.includes("no legal excuse")) {
        recommendation = "BUYER ACTION: You will likely lose earnest money. Before accepting this: (1) Review contract carefully for any contingencies still active, (2) Document why you believe you have legal right to cancel, (3) Consult real estate attorney BEFORE canceling, (4) If no legal excuse, negotiate with seller - they may accept partial earnest money to avoid dispute, (5) Consider whether closing might be better than losing full deposit. Act quickly - don't just walk away without legal review.";
      } else if (breachType === "Buyer couldn't get financing (buyer's fault)") {
        recommendation = "FINANCING DISPUTE: (1) Document ALL loan application efforts - when applied, what lender requested, how you responded, (2) Get written denial letter from lender with specific reasons, (3) If denied due to factors beyond your control (lender policy change, property issues), you should get earnest money back, (4) If denied because you quit job, bought car, etc., seller will likely keep deposit, (5) Consult attorney if significant amount at stake, (6) Review financing contingency language carefully. Good faith efforts are key.";
      } else if (breachType.includes("Seller")) {
        recommendation = "SELLER BREACH - BUYER ACTION: (1) Document breach thoroughly with dates, communications, (2) Send formal notice demanding return of earnest money, (3) Consult real estate attorney about pursuing: Specific Performance (force sale) if you love the home and market rising, OR Actual Damages (sue for losses) if you don't want the house anymore, (4) Calculate your damages: Price increase on comparable homes, out-of-pocket expenses (inspection $300-500, appraisal $400-600, loan fees $500-2000), temporary housing if you sold your home, moving costs, (5) Consider market conditions - if prices increased significantly, specific performance may be worth pursuing, (6) Send demand letter before filing lawsuit, (7) File suit within statute of limitations (2-4 years typically). You have strong legal position.";
      } else if (percentOfPrice > 5 && enforceable === false) {
        recommendation = "PENALTY ISSUE: This liquidated damages amount is likely unenforceable as an illegal penalty. (1) If you're the buyer and lost this deposit, consult attorney about challenging forfeiture, (2) If you're the seller trying to keep this amount, expect buyer to fight it - may need to accept lesser amount, (3) Consider negotiating settlement for more reasonable amount (1-3% of price), (4) If litigated, court will likely reduce to reasonable estimate of actual damages, (5) Factor in litigation costs vs. settlement, (6) Review state-specific case law on liquidated damages enforceability. Penalties are void and unenforceable.";
      } else {
        recommendation = "GENERAL GUIDANCE: (1) Liquidated damages clauses are ONLY triggered by breach without legal excuse, (2) If you have active contingency (inspection, financing, appraisal), you can cancel and get deposit back, (3) Once contingencies removed, you're committed - breach costs you earnest money, (4) Always act in good faith and meet deadlines, (5) Document everything in writing, (6) Before breaching, consult attorney - may have defenses you don't know about, (7) If dispute, try mediation before litigation - cheaper and faster, (8) Review your specific contract - language matters greatly. When in doubt, seek legal counsel BEFORE acting.";
      }

      return [
        { label: "Liquidated Damages Amount", value: liquidatedDamages.toFixed(0), isCurrency: true },
        { label: "Seller's Estimated Actual Damages", value: estimatedActualDamages.toFixed(0), isCurrency: true },
        { label: "Reasonableness Assessment", value: reasonableness, isCurrency: false },
        { label: "Legal Analysis", value: legalAnalysis, isCurrency: false },
        { label: "Recommended Action", value: recommendation, isCurrency: false },
      ];
    },
  },
};
