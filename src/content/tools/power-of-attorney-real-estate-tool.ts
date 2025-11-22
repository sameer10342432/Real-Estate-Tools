import { CalculatorContent } from '@/types';

export const POWER_OF_ATTORNEY_REAL_ESTATE_TOOL_CONTENT: CalculatorContent = {
  title: 'Power of Attorney (Real Estate) Tool',
  description: 'Understand real estate powers of attorney, authorization requirements, risks, and proper execution for property transactions',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'power-of-attorney-real-estate-tool',
  article: {
    title: "Power of Attorney for Real Estate - Authorizing Property Transactions",
    content: `
    <h2>What is a Real Estate Power of Attorney?</h2>
    <p>A real estate power of attorney (POA) is a legal document that authorizes another person (the "attorney-in-fact" or "agent") to act on your behalf in property transactions. This allows someone else to buy, sell, mortgage, or manage real estate when you cannot be present. It's a powerful legal tool that requires careful consideration and proper execution.</p>
    
    <h3>Types of Real Estate Powers of Attorney</h3>
    
    <h4>1. General Power of Attorney (Real Estate)</h4>
    <ul>
      <li><strong>Scope:</strong> Broad authority over all real estate matters</li>
      <li><strong>Powers Granted:</strong> Buy, sell, lease, mortgage, refinance any property</li>
      <li><strong>Duration:</strong> Effective immediately, ends when revoked or principal dies</li>
      <li><strong>Risk Level:</strong> HIGH - Agent has extensive control</li>
      <li><strong>Common Use:</strong> Rare - most use limited POA instead</li>
    </ul>
    
    <h4>2. Limited (Specific) Power of Attorney</h4>
    <ul>
      <li><strong>Scope:</strong> Restricted to specific transaction or property</li>
      <li><strong>Powers Granted:</strong> Only what's explicitly stated (e.g., "sell 123 Main St only")</li>
      <li><strong>Duration:</strong> Usually expires after transaction closes or specific date</li>
      <li><strong>Risk Level:</strong> MODERATE - Limited to defined actions</li>
      <li><strong>Common Use:</strong> MOST COMMON - preferred for safety</li>
      <li><strong>Example:</strong> "Agent authorized to sign closing documents for sale of [specific property] only"</li>
    </ul>
    
    <h4>3. Durable Power of Attorney</h4>
    <ul>
      <li><strong>Scope:</strong> Remains valid even if principal becomes incapacitated</li>
      <li><strong>Powers Granted:</strong> Can be general or limited</li>
      <li><strong>Duration:</strong> Survives mental incapacity, ends at death</li>
      <li><strong>Common Use:</strong> Estate planning, elderly care, disability planning</li>
      <li><strong>Language:</strong> Must include "This power of attorney shall not be affected by my subsequent disability or incapacity"</li>
    </ul>
    
    <h4>4. Springing Power of Attorney</h4>
    <ul>
      <li><strong>Scope:</strong> Only becomes effective upon specific event</li>
      <li><strong>Trigger:</strong> Usually incapacity, determined by doctor certification</li>
      <li><strong>Duration:</strong> Once triggered, continues until death or revocation</li>
      <li><strong>Challenge:</strong> Proving trigger event occurred can delay transactions</li>
      <li><strong>Common Use:</strong> Backup plan if principal becomes unable to act</li>
    </ul>
    
    <h3>Common Scenarios Requiring Real Estate POA</h3>
    <ul>
      <li><strong>Military Deployment:</strong> Service member stationed overseas during home sale/purchase</li>
      <li><strong>Medical Issues:</strong> Illness, surgery, hospitalization preventing attendance at closing</li>
      <li><strong>Geographic Distance:</strong> Living far from property being sold</li>
      <li><strong>Business Travel:</strong> Unavoidable trip during closing period</li>
      <li><strong>Elderly Parents:</strong> Adult children managing aging parents' property</li>
      <li><strong>Disability:</strong> Physical limitations preventing signing documents</li>
      <li><strong>Investment Properties:</strong> Out-of-state investors using local agents</li>
      <li><strong>Incarceration:</strong> Person in prison selling property</li>
      <li><strong>Timeshare Issues:</strong> Co-owners unable to be present simultaneously</li>
    </ul>
    
    <h3>Powers That Can Be Granted</h3>
    <p>Agent can be authorized to:</p>
    <ul>
      <li><strong>Sell Real Estate:</strong> List, negotiate, accept offers, sign deed</li>
      <li><strong>Purchase Property:</strong> Make offers, sign contracts, attend closing</li>
      <li><strong>Refinance Mortgages:</strong> Apply for loans, sign loan documents</li>
      <li><strong>Lease/Rent:</strong> Execute leases as landlord or tenant</li>
      <li><strong>Manage Property:</strong> Collect rent, hire contractors, make repairs</li>
      <li><strong>Access Safe Deposit Box:</strong> Retrieve deeds and documents</li>
      <li><strong>Pay Property Expenses:</strong> Taxes, insurance, utilities, HOA fees</li>
      <li><strong>Grant Easements:</strong> Allow utility or access rights</li>
      <li><strong>Subdivide Land:</strong> Split parcels, apply for permits</li>
      <li><strong>Contest Tax Assessments:</strong> Appeal property valuations</li>
    </ul>
    
    <h3>Legal Requirements for Valid POA</h3>
    <p>To be enforceable, real estate POA must:</p>
    <ul>
      <li><strong>Be in Writing:</strong> Oral POA is invalid for real estate (Statute of Frauds)</li>
      <li><strong>Signed by Principal:</strong> Property owner must personally sign</li>
      <li><strong>Notarized:</strong> REQUIRED in all states for real estate POA</li>
      <li><strong>Witnessed:</strong> Many states require 1-2 witnesses in addition to notary</li>
      <li><strong>Specific Language:</strong> Clear, unambiguous grant of authority</li>
      <li><strong>Identify Principal & Agent:</strong> Full legal names, addresses</li>
      <li><strong>Describe Powers:</strong> Explicitly state what agent can do</li>
      <li><strong>Property Description:</strong> For limited POA, legal description of property</li>
      <li><strong>Effective Date:</strong> When authority begins</li>
      <li><strong>Expiration Date:</strong> Optional but recommended</li>
      <li><strong>Recordable Form:</strong> Meets county recorder requirements</li>
    </ul>
    
    <h3>Execution Process</h3>
    <ol>
      <li><strong>Draft Document:</strong> Attorney prepares POA specific to transaction</li>
      <li><strong>Review Carefully:</strong> Principal reviews all terms before signing</li>
      <li><strong>Sign Before Notary:</strong> Principal signs in notary's physical presence</li>
      <li><strong>Notarization:</strong> Notary verifies identity, witnesses signature, affixes seal</li>
      <li><strong>Witness Signatures:</strong> If state requires, witnesses sign</li>
      <li><strong>Make Copies:</strong> Keep certified copies for principal and agent</li>
      <li><strong>Deliver to Agent:</strong> Provide original to attorney-in-fact</li>
      <li><strong>Record (if needed):</strong> Some transactions require recording with county</li>
      <li><strong>Notify Third Parties:</strong> Inform title company, lender, buyer/seller</li>
    </ol>
    
    <h3>Title Company and Lender Requirements</h3>
    <p>Before accepting POA, they typically require:</p>
    <ul>
      <li><strong>Original POA:</strong> Not copies (some accept certified copies)</li>
      <li><strong>Recent Execution:</strong> Usually within 90 days (some 30-60 days)</li>
      <li><strong>Specific Language:</strong> Must explicitly authorize the transaction type</li>
      <li><strong>Attorney Opinion:</strong> Letter from attorney confirming validity</li>
      <li><strong>Photo ID of Agent:</strong> Government-issued identification</li>
      <li><strong>No Red Flags:</strong> Verify principal is alive, POA not revoked</li>
      <li><strong>Insurance Coverage:</strong> Title insurance may have POA exceptions</li>
      <li><strong>Special Forms:</strong> Some lenders have their own POA forms</li>
      <li><strong>Affidavit:</strong> Agent may need to sign affidavit of authority</li>
    </ul>
    
    <h3>Risks and Dangers of POA</h3>
    
    <p><strong>For Principal (Person Granting POA):</strong></p>
    <ul>
      <li><strong>Fraud/Theft:</strong> Dishonest agent could steal property or money</li>
      <li><strong>Unauthorized Transactions:</strong> Agent exceeds authority</li>
      <li><strong>Below-Market Sales:</strong> Agent sells to friend/family at low price</li>
      <li><strong>Secret Profits:</strong> Agent takes kickbacks from buyer/seller</li>
      <li><strong>Mortgage Fraud:</strong> Agent takes out unauthorized loans against property</li>
      <li><strong>Quitclaim to Self:</strong> Agent transfers property to themselves</li>
      <li><strong>Tax Consequences:</strong> Transactions trigger unexpected taxes</li>
      <li><strong>Loss of Control:</strong> Can't easily monitor agent's actions</li>
    </ul>
    
    <p><strong>For Agent (Attorney-in-Fact):</strong></p>
    <ul>
      <li><strong>Fiduciary Duty:</strong> Legal obligation to act in principal's best interest</li>
      <li><strong>Personal Liability:</strong> Can be sued for breach of duty</li>
      <li><strong>Criminal Charges:</strong> Fraud, theft, embezzlement possible</li>
      <li><strong>Accounting Required:</strong> Must document all transactions</li>
      <li><strong>No Self-Dealing:</strong> Cannot buy property yourself (conflict of interest)</li>
      <li><strong>Signature Liability:</strong> Personally liable if sign incorrectly</li>
    </ul>
    
    <h3>How to Properly Sign Using POA</h3>
    <p>Agent must sign correctly to avoid personal liability:</p>
    
    <p><strong>CORRECT Signature Format:</strong></p>
    <ul>
      <li>"John Smith, by Jane Doe, his attorney-in-fact"</li>
      <li>"Jane Doe, attorney-in-fact for John Smith"</li>
      <li>"Jane Doe, as attorney-in-fact for John Smith under Power of Attorney dated [date]"</li>
    </ul>
    
    <p><strong>INCORRECT (Creates Personal Liability):</strong></p>
    <ul>
      <li>"Jane Doe" (agent's name only - personally liable)</li>
      <li>"John Smith" (forged signature - criminal)</li>
      <li>"Jane Doe POA" (unclear - may be personally bound)</li>
    </ul>
    
    <h3>Protecting Against POA Abuse</h3>
    
    <p><strong>For Principals:</strong></p>
    <ul>
      <li>Choose TRUSTWORTHY agent - family doesn't automatically mean trustworthy</li>
      <li>Use LIMITED POA - only grant specific powers needed</li>
      <li>Set EXPIRATION DATE - auto-terminates after transaction</li>
      <li>Require ACCOUNTING - agent must document all actions</li>
      <li>Name CO-AGENTS - require both to act together</li>
      <li>Restrict SALE PRICE - "Cannot sell for less than $X"</li>
      <li>Exclude GIFTING - "Agent cannot make gifts of property"</li>
      <li>Monitor regularly - check public records for unauthorized filings</li>
      <li>Revoke IMMEDIATELY if concerns arise</li>
      <li>Consider BOND - require agent to post insurance bond</li>
    </ul>
    
    <p><strong>For Third Parties (buyers, lenders):</strong></p>
    <ul>
      <li>Verify POA is ORIGINAL or certified copy</li>
      <li>Check EFFECTIVE DATE and expiration</li>
      <li>Confirm SPECIFIC AUTHORITY for this transaction</li>
      <li>Contact PRINCIPAL to verify POA still valid</li>
      <li>Search for REVOCATION filings in public records</li>
      <li>Require ATTORNEY OPINION letter</li>
      <li>Obtain TITLE INSURANCE covering POA risk</li>
      <li>Verify PRINCIPAL IS ALIVE (death auto-revokes POA)</li>
      <li>Check AGENT'S ID matches POA</li>
      <li>Document EVERYTHING for later proof</li>
    </ul>
    
    <h3>Revoking a Power of Attorney</h3>
    <p>To cancel POA before expiration:</p>
    <ol>
      <li><strong>Written Revocation:</strong> Create formal revocation document</li>
      <li><strong>Sign & Notarize:</strong> Principal must sign before notary</li>
      <li><strong>Notify Agent:</strong> Deliver revocation to attorney-in-fact</li>
      <li><strong>Notify Third Parties:</strong> Tell anyone who received original POA (title companies, banks)</li>
      <li><strong>Record Revocation:</strong> If POA was recorded, record revocation too</li>
      <li><strong>Retrieve Copies:</strong> Get back all copies of POA from agent</li>
      <li><strong>Timeline:</strong> Effective immediately upon notification to agent</li>
    </ol>
    
    <p><strong>Automatic Termination Events:</strong></p>
    <ul>
      <li>Death of principal (POA dies with person)</li>
      <li>Death of agent</li>
      <li>Principal revokes POA</li>
      <li>Expiration date passes</li>
      <li>Specific purpose accomplished (limited POA)</li>
      <li>Principal becomes incapacitated (unless "durable")</li>
      <li>Divorce (if agent was spouse, in some states)</li>
    </ul>
    
    <h3>State-Specific Requirements</h3>
    <ul>
      <li><strong>California:</strong> Statutory POA form, must be recorded if affects real estate</li>
      <li><strong>Florida:</strong> Super-specific - must explicitly list each power</li>
      <li><strong>Texas:</strong> Durable unless states otherwise, recording recommended</li>
      <li><strong>New York:</strong> Statutory short form POA, very specific requirements</li>
      <li><strong>Illinois:</strong> Must use statutory form or substantial compliance</li>
      <li><strong>All States:</strong> Notarization required for real estate POA</li>
    </ul>
    
    <h3>Alternatives to POA</h3>
    
    <h4>1. Remote Online Notarization (RON)</h4>
    <ul>
      <li>Sign closing documents via video call</li>
      <li>Legal in all 50 states post-COVID</li>
      <li>No need to be physically present</li>
      <li>More secure than POA</li>
      <li>Widely accepted by title companies</li>
    </ul>
    
    <h4>2. Living Trust</h4>
    <ul>
      <li>Transfer property to trust</li>
      <li>Trustee manages without POA</li>
      <li>Better for long-term management</li>
      <li>More expensive to set up</li>
      <li>Avoids probate</li>
    </ul>
    
    <h4>3. Joint Ownership</h4>
    <ul>
      <li>Add co-owner who can sign</li>
      <li>Co-owner has equal rights</li>
      <li>Creates gift tax issues</li>
      <li>Hard to reverse</li>
      <li>Not recommended for POA purposes</li>
    </ul>
    
    <h4>4. Postpone Closing</h4>
    <ul>
      <li>Delay until you can attend</li>
      <li>Safest option if possible</li>
      <li>Avoids POA risks entirely</li>
    </ul>
    
    <h3>Red Flags and Warning Signs</h3>
    <p>Be cautious if you see:</p>
    <ul>
      <li>Agent is BENEFICIARY of sale (gets money)</li>
      <li>POA signed when principal had DEMENTIA</li>
      <li>POA executed DAY BEFORE transaction (suspicious timing)</li>
      <li>GENERIC POA form (not specific to transaction)</li>
      <li>Principal is ELDERLY and agent is caregiver (undue influence risk)</li>
      <li>Agent refuses to LET YOU CONTACT principal</li>
      <li>BELOW-MARKET price when agent involved</li>
      <li>Agent has HISTORY of fraud or financial crimes</li>
      <li>Multiple RECENT POAs for same principal (confusion or fraud)</li>
      <li>Witnesses are RELATED to agent</li>
    </ul>
    
    <h3>Sample Limited POA Language</h3>
    <p>Example of properly drafted limited real estate POA:</p>
    
    <p><em>"I, [Principal Name], of [Address], hereby appoint [Agent Name], of [Address], as my attorney-in-fact for the LIMITED and SPECIFIC purpose of selling the real property located at [Legal Description/Address], including but not limited to: executing listing agreements, negotiating price and terms, accepting offers, signing purchase and sale agreements, executing deeds and closing documents, and performing all acts reasonably necessary to complete the sale. This Power of Attorney shall EXPIRE on [Date] or upon completion of the sale, whichever occurs first. My attorney-in-fact shall have NO authority to act beyond this specific transaction."</em></p>
    
    <h3>Costs</h3>
    <ul>
      <li><strong>Attorney Drafting:</strong> $200-$600 for limited POA</li>
      <li><strong>Notarization:</strong> $15-$30 per signature</li>
      <li><strong>Recording Fee:</strong> $25-$100 (if recording required)</li>
      <li><strong>Certified Copies:</strong> $10-$25 each</li>
      <li><strong>Attorney Opinion Letter:</strong> $300-$800 (if lender requires)</li>
      <li><strong>Total:</strong> $250-$1,500 depending on complexity</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Use attorney to draft POA - don't use internet forms</li>
      <li>Make it LIMITED to specific transaction</li>
      <li>Include EXPIRATION date</li>
      <li>Choose trustworthy agent carefully</li>
      <li>Keep POA NARROW in scope</li>
      <li>Consider remote notarization instead if possible</li>
      <li>Monitor agent's actions closely</li>
      <li>Revoke immediately when transaction complete</li>
      <li>Never sign blank POA</li>
      <li>Read every word before signing</li>
      <li>Get legal advice if uncertain</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "poaType",
        label: "Type of POA Needed",
        type: "select",
        options: [
          "Limited POA - specific sale/purchase",
          "General POA - multiple properties",
          "Durable POA - incapacity planning",
          "Property management POA",
          "Not sure what I need"
        ],
        defaultValue: "Limited POA - specific sale/purchase",
      },
      {
        name: "reason",
        label: "Reason for POA",
        type: "select",
        options: [
          "Military deployment",
          "Medical issue/hospitalization",
          "Geographic distance (out of state/country)",
          "Business travel conflict",
          "Elderly parent needs help",
          "Disability/incapacity",
          "General convenience",
          "Other"
        ],
        defaultValue: "Geographic distance (out of state/country)",
      },
      {
        name: "agentRelationship",
        label: "Relationship to Agent",
        type: "select",
        options: [
          "Spouse",
          "Adult child",
          "Parent",
          "Sibling",
          "Other family member",
          "Close friend",
          "Attorney/professional",
          "Business partner",
          "Caregiver",
          "Haven't chosen yet"
        ],
        defaultValue: "Haven't chosen yet",
      },
      {
        name: "transactionType",
        label: "Transaction Type",
        type: "select",
        options: [
          "Selling property",
          "Buying property",
          "Refinancing mortgage",
          "Managing rental property",
          "Multiple transactions",
          "Not decided yet"
        ],
        defaultValue: "Selling property",
      },
      {
        name: "timeframe",
        label: "How Soon Needed?",
        type: "select",
        options: [
          "Closing in 1-2 weeks",
          "Closing in 3-4 weeks",
          "Closing in 1-2 months",
          "Future planning (no specific date)",
          "Immediate emergency"
        ],
        defaultValue: "Closing in 3-4 weeks",
      },
    ],
    results: [
      { label: "Recommended POA Type", isCurrency: false },
      { label: "Risk Assessment", isCurrency: false },
      { label: "Essential Protections", isCurrency: false },
      { label: "Action Steps", isCurrency: false },
      { label: "Estimated Cost & Timeline", isCurrency: false },
    ],
    calculate: (data: any) => {
      const poaType = data.poaType || "Limited POA - specific sale/purchase";
      const reason = data.reason || "Geographic distance (out of state/country)";
      const agentRelationship = data.agentRelationship || "Haven't chosen yet";
      const transactionType = data.transactionType || "Selling property";
      const timeframe = data.timeframe || "Closing in 3-4 weeks";
      
      let recommendedType = "";
      let riskLevel = "";
      let riskFactors = [];
      let essentialProtections = [];
      
      // Determine recommended POA type
      if (transactionType.includes("Multiple") || poaType.includes("General")) {
        recommendedType = "⚠️ GENERAL POA - Broader authority for multiple properties/transactions. HIGHER RISK but necessary for your situation.";
        riskLevel = "🟠 HIGH RISK";
        riskFactors.push("Broad authority increases fraud risk");
      } else if (reason.includes("Elderly") || reason.includes("Disability") || poaType.includes("Durable")) {
        recommendedType = "📋 DURABLE LIMITED POA - Remains valid if you become incapacitated, but LIMITED to specific transactions for safety.";
        riskLevel = "🟡 MODERATE RISK";
        riskFactors.push("Long-term authority requires strong safeguards");
      } else if (transactionType.includes("Managing rental")) {
        recommendedType = "🏠 PROPERTY MANAGEMENT POA - Specific authority for landlord duties (collect rent, repairs, leases) but NOT selling property.";
        riskLevel = "🟡 MODERATE RISK";
        riskFactors.push("Ongoing authority needs oversight");
      } else {
        recommendedType = "✅ LIMITED (SPECIFIC) POA - RECOMMENDED. Authority restricted to ONE specific transaction (sell/buy [address]). SAFEST option.";
        riskLevel = "🟢 LOW RISK";
        riskFactors.push("Limited scope minimizes exposure");
      }
      
      // Agent relationship risk assessment
      if (agentRelationship === "Spouse" || agentRelationship === "Adult child") {
        riskFactors.push("✅ Family relationship - generally trustworthy");
      } else if (agentRelationship === "Close friend" || agentRelationship === "Sibling") {
        riskFactors.push("📊 Friend/sibling - ensure high trust level");
      } else if (agentRelationship === "Caregiver") {
        riskFactors.push("🚩 CAREGIVER RED FLAG - High risk of undue influence/exploitation");
        riskLevel = "🔴 VERY HIGH RISK";
      } else if (agentRelationship === "Business partner") {
        riskFactors.push("⚠️ Business relationship - potential conflicts of interest");
      } else if (agentRelationship === "Attorney/professional") {
        riskFactors.push("✅ Professional agent - bonded and licensed");
      } else if (agentRelationship === "Haven't chosen yet") {
        riskFactors.push("⏸️ No agent selected - choose carefully before proceeding");
      }
      
      // Reason-based considerations
      if (reason.includes("Military")) {
        essentialProtections.push("Set EXPIRATION date for after expected return");
        essentialProtections.push("Include contact info for commanding officer");
      } else if (reason.includes("Medical") || reason.includes("Disability") || reason.includes("Elderly")) {
        essentialProtections.push("Consider DURABLE language if risk of incapacity");
        essentialProtections.push("Require medical documentation if springing POA");
        essentialProtections.push("Name successor agent in case primary becomes unable");
      }
      
      // Standard protections for all POAs
      essentialProtections.push("Include SPECIFIC expiration date (recommended: transaction close date + 30 days)");
      essentialProtections.push("Limit to SPECIFIC PROPERTY (legal description/address)");
      essentialProtections.push("State EXACT powers granted (e.g., 'sign deed' not 'handle real estate')");
      essentialProtections.push("Exclude GIFTING authority ('agent cannot make gifts of property')");
      
      if (!poaType.includes("General") && !poaType.includes("management")) {
        essentialProtections.push("Auto-terminate upon completion of transaction");
      }
      
      if (agentRelationship === "Caregiver" || riskLevel.includes("HIGH")) {
        essentialProtections.push("🚨 REQUIRE BOND - Agent posts insurance against fraud/theft");
        essentialProtections.push("🚨 MANDATORY ACCOUNTING - Agent must document all actions");
        essentialProtections.push("🚨 NAME CO-AGENT - Require two people to act together");
      }
      
      const riskFactorsText = riskFactors.join(" | ");
      const protectionsText = essentialProtections.join(" | ");
      
      // Action steps
      let actionSteps = "";
      if (timeframe.includes("Immediate") || timeframe.includes("1-2 weeks")) {
        actionSteps = "⏰ URGENT TIMELINE: (1) Contact real estate attorney TODAY - explain emergency, (2) Draft limited POA immediately (attorney can do same-day), (3) Sign before notary ASAP (notary can meet you at hospital/home), (4) Deliver to agent and title company immediately, (5) Alert title company in advance of POA usage, (6) Consider remote online notarization as faster alternative. COST: $400-$800 for rush service. May need to pay extra for mobile notary ($100-$200).";
      } else if (timeframe.includes("3-4 weeks")) {
        actionSteps = "📅 STANDARD TIMELINE: (1) Consult real estate attorney this week ($200-$600 for POA), (2) Discuss specific transaction and draft limited POA, (3) Schedule notary appointment (7-10 days lead time sufficient), (4) Execute POA with witnesses if state requires, (5) Deliver original to agent, provide certified copy to title company, (6) Confirm title company accepts POA before closing date, (7) Consider recording POA with county recorder ($25-$100 fee). TOTAL COST: $250-$1,000.";
      } else if (timeframe.includes("1-2 months") || timeframe.includes("Future")) {
        actionSteps = "✅ AMPLE TIME: (1) Research attorneys specializing in real estate/elder law, (2) Schedule consultation to discuss options (limited vs. durable vs. general), (3) Review state-specific requirements for your property location, (4) Choose agent carefully - discuss fiduciary duties with them, (5) Have attorney draft custom POA with all recommended protections, (6) Review draft thoroughly before signing, (7) Execute before notary with witnesses, (8) Store original securely, provide certified copies as needed, (9) If durable POA, consider recording for public notice. COST: $200-$600 (not rushed).";
      } else {
        actionSteps = "GENERAL STEPS: (1) Hire experienced real estate attorney (not general practice), (2) Explain your specific situation and transaction, (3) Attorney drafts limited POA tailored to needs, (4) Review all terms - understand every provision, (5) Sign before notary public with proper ID, (6) Witnesses sign if state requires (check state law), (7) Make certified copies, (8) Deliver original to agent with instructions, (9) Notify title company/lender of POA usage, (10) Revoke immediately after transaction closes.";
      }
      
      // Cost and timeline
      let costTimeline = "";
      if (timeframe.includes("Immediate")) {
        costTimeline = "💰 COST: $400-$1,200 (rush fees) | ⏰ TIMELINE: 1-3 days (emergency basis) | Attorney fees: $400-$800 (same-day), Notary: $50-$200 (mobile), Recording: $25-$100 | 🚨 NOTE: Some title companies may reject POA executed less than 30 days before closing - discuss with them first!";
      } else if (timeframe.includes("1-2 weeks") || timeframe.includes("3-4 weeks")) {
        costTimeline = "💰 COST: $250-$800 | ⏰ TIMELINE: 5-10 business days | Attorney drafting: $200-$600, Notarization: $15-$30, Witnesses: usually free, Recording (optional): $25-$100, Certified copies: $10-$25 each | ✅ Sufficient time for proper execution";
      } else {
        costTimeline = "💰 COST: $200-$600 (standard) | ⏰ TIMELINE: Flexible - can take 2-4 weeks | Attorney consultation: $150-$300/hour, POA drafting: $200-$600 flat fee, Notary: $15-$30, Recording: $25-$100 if needed | 📋 NO RUSH FEES - can shop for best attorney";
      }
      
      // Alternatives to consider
      let alternatives = "ALTERNATIVES TO POA: (1) REMOTE ONLINE NOTARIZATION (RON) - Sign documents via video call, legal in all states, SAFER than POA, costs $25-$50, takes 15 minutes | (2) POSTPONE CLOSING - Delay 1-2 weeks if possible, attend in person (safest), no POA needed | (3) MOBILE NOTARY - Notary travels to you (hospital, home, office), costs $100-$200, still requires your presence | (4) LIVING TRUST - If long-term issue, transfer property to trust, trustee manages without POA (expensive: $1,500-$3,000 setup). RECOMMENDATION: Try remote notarization FIRST before using POA.";

      return [
        { label: "Recommended POA Type", value: recommendedType, isCurrency: false },
        { label: "Risk Assessment", value: `${riskLevel} | ${riskFactorsText}`, isCurrency: false },
        { label: "Essential Protections", value: protectionsText, isCurrency: false },
        { label: "Action Steps", value: actionSteps, isCurrency: false },
        { label: "Estimated Cost & Timeline", value: `${costTimeline} | ${alternatives}`, isCurrency: false },
      ];
    },
  },
};
