import { CalculatorContent } from '@/types';

export const CONTINGENCY_CLAUSE_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Contingency Clause Generator (Financing, Inspection, Appraisal)',
  description: 'Generate customized purchase contract contingency clauses for financing, inspection, appraisal, and other protections',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'contingency-clause-generator',
  article: {
    title: "Real Estate Contingency Clauses - Essential Protections for Buyers and Sellers",
    content: `
    <h2>What are Contingency Clauses?</h2>
    <p>Contingency clauses are conditions in a real estate purchase contract that must be satisfied for the deal to proceed. They protect buyers (and sometimes sellers) by providing legal "escape hatches" to cancel the transaction without penalty if specified conditions aren't met. Contingencies are your safety net in real estate transactions.</p>
    
    <h3>Why Contingencies Matter</h3>
    <ul>
      <li><strong>Risk Protection:</strong> Limit your exposure to unforeseen problems</li>
      <li><strong>Due Diligence Time:</strong> Provide opportunity to thoroughly evaluate property</li>
      <li><strong>Negotiation Power:</strong> Use findings to renegotiate terms or price</li>
      <li><strong>Earnest Money Protection:</strong> Get deposit back if contingencies not met</li>
      <li><strong>Legal Exit Strategy:</strong> Cancel deal without breach of contract</li>
      <li><strong>Financing Security:</strong> Not obligated if you can't secure loan</li>
    </ul>
    
    <h3>The Big Three Contingencies</h3>
    
    <h4>1. Financing/Mortgage Contingency</h4>
    <p>Allows buyer to cancel if unable to obtain loan approval.</p>
    <ul>
      <li><strong>Purpose:</strong> Protects buyer if financing falls through</li>
      <li><strong>Timeline:</strong> Usually 30-45 days</li>
      <li><strong>Key Terms:</strong> Loan amount, interest rate cap, loan type (conventional, FHA, VA)</li>
      <li><strong>Buyer Obligations:</strong> Apply promptly, provide requested documentation, act in good faith</li>
      <li><strong>Removal:</strong> Once loan approved and commitment letter received</li>
      <li><strong>Failure:</strong> If denied, buyer gets earnest money back</li>
    </ul>
    
    <p><strong>Sample Language:</strong> "This offer is contingent upon Buyer obtaining a firm written commitment for a mortgage loan in the amount of $________, at an interest rate not to exceed ___%, for a term of ___ years. Buyer shall make application for such financing within ___ days of acceptance and use best efforts to obtain approval. If Buyer is unable to obtain such financing within ___ days, this agreement shall be void and Buyer's earnest money deposit shall be returned."</p>
    
    <h4>2. Home Inspection Contingency</h4>
    <p>Gives buyer right to professional inspection and negotiation/cancellation based on findings.</p>
    <ul>
      <li><strong>Purpose:</strong> Discover property defects before committing</li>
      <li><strong>Timeline:</strong> Usually 7-14 days for inspection, 3-7 days to negotiate</li>
      <li><strong>Inspections Included:</strong> General home inspection, pest, radon, mold, etc.</li>
      <li><strong>Options if Issues Found:</strong> Request repairs, negotiate price reduction, request credit, walk away</li>
      <li><strong>Seller Response Time:</strong> Typically 3-5 days to respond to repair requests</li>
      <li><strong>Material Defects:</strong> Significant issues that affect value, safety, habitability</li>
    </ul>
    
    <p><strong>Sample Language:</strong> "This offer is contingent upon a professional home inspection satisfactory to Buyer. Buyer may have property inspected at Buyer's expense within ___ days. If inspection reveals material defects, Buyer may: (1) Request Seller make repairs, (2) Request price reduction, (3) Request closing cost credit, or (4) Terminate agreement. Seller has ___ days to respond to repair requests. If parties cannot agree, either party may cancel and earnest money returned to Buyer."</p>
    
    <h4>3. Appraisal Contingency</h4>
    <p>Protects buyer if property doesn't appraise at purchase price.</p>
    <ul>
      <li><strong>Purpose:</strong> Ensures paying fair market value, lender will finance</li>
      <li><strong>Timeline:</strong> Usually 14-21 days</li>
      <li><strong>Appraisal Gap:</strong> Difference between contract price and appraised value</li>
      <li><strong>Options if Low Appraisal:</strong> Seller lowers price, buyer pays difference in cash, meet in middle, cancel deal</li>
      <li><strong>Lender Requirement:</strong> Will only lend based on lower of price or appraisal</li>
      <li><strong>Cash Buyers:</strong> May still include for price negotiation leverage</li>
    </ul>
    
    <p><strong>Sample Language:</strong> "This offer is contingent upon property appraising at or above the purchase price of $_______. If appraisal is lower, Buyer may: (1) Request Seller reduce price to appraised value, (2) Terminate agreement and receive return of earnest money, or (3) Proceed with additional cash down payment to cover gap. Seller may choose to reduce price or allow cancellation."</p>
    
    <h3>Other Common Contingencies</h3>
    
    <h4>Home Sale Contingency</h4>
    <ul>
      <li>Buyer must sell current home before purchasing new one</li>
      <li>Protects buyer from owning two homes simultaneously</li>
      <li>Seller may require "kick-out clause" to accept backup offers</li>
      <li>Timeline: Usually 30-60 days, can be longer</li>
      <li>Weakens offer competitiveness significantly</li>
    </ul>
    
    <h4>Title Contingency</h4>
    <ul>
      <li>Purchase contingent on clear/marketable title</li>
      <li>Protects against liens, encumbrances, ownership disputes</li>
      <li>Usually 30 days to resolve title issues</li>
      <li>Seller must provide clear title or buyer can cancel</li>
    </ul>
    
    <h4>Homeowners Insurance Contingency</h4>
    <ul>
      <li>Buyer must obtain insurance at reasonable rates</li>
      <li>Important in flood zones, high-risk areas, older homes</li>
      <li>If insurance unavailable/unaffordable, buyer can exit</li>
    </ul>
    
    <h4>HOA Review Contingency</h4>
    <ul>
      <li>Review HOA documents, financials, bylaws, restrictions</li>
      <li>Usually 5-10 days to review</li>
      <li>Can cancel if HOA rules unacceptable or financially unstable</li>
    </ul>
    
    <h4>Survey Contingency</h4>
    <ul>
      <li>Professional survey shows property boundaries</li>
      <li>Identifies encroachments, easements, boundary disputes</li>
      <li>Can cancel if survey reveals significant issues</li>
    </ul>
    
    <h4>Lead Paint Contingency (Pre-1978 Homes)</h4>
    <ul>
      <li>Federal law requires 10-day inspection period</li>
      <li>Buyer can test for lead paint hazards</li>
      <li>Can cancel within 10 days regardless of findings</li>
    </ul>
    
    <h4>Well and Septic Contingency</h4>
    <ul>
      <li>Testing and inspection of private well water quality</li>
      <li>Septic system inspection and pumping test</li>
      <li>Can cancel if systems fail or repairs exceed agreed amount</li>
    </ul>
    
    <h4>Attorney Review Contingency</h4>
    <ul>
      <li>Attorney reviews contract within 3-7 days</li>
      <li>Common in NY, NJ, some other states</li>
      <li>Attorney can modify terms or cancel on behalf of client</li>
    </ul>
    
    <h3>Contingency Timelines and Deadlines</h3>
    <p>Typical timeline in a 30-45 day escrow:</p>
    <ul>
      <li><strong>Day 0:</strong> Contract accepted</li>
      <li><strong>Days 1-3:</strong> Attorney review period (if applicable)</li>
      <li><strong>Days 1-5:</strong> Apply for financing, schedule inspections</li>
      <li><strong>Days 7-14:</strong> Complete home inspections</li>
      <li><strong>Days 10-14:</strong> Receive preliminary title report</li>
      <li><strong>Days 12-17:</strong> Inspection negotiation period</li>
      <li><strong>Days 14-21:</strong> Appraisal completed</li>
      <li><strong>Days 17-21:</strong> Remove inspection contingency</li>
      <li><strong>Days 21-30:</strong> Resolve title issues if any</li>
      <li><strong>Days 30-40:</strong> Final loan approval and commitment letter</li>
      <li><strong>Days 35-40:</strong> Remove financing contingency</li>
      <li><strong>Day 40-45:</strong> Final walkthrough, closing</li>
    </ul>
    
    <h3>Removing Contingencies</h3>
    <p>When and how to remove protection:</p>
    <ul>
      <li><strong>Written Removal:</strong> Must be done in writing, signed by buyer</li>
      <li><strong>Active Removal:</strong> Buyer must affirmatively remove, not automatic</li>
      <li><strong>Passive Removal:</strong> Some contracts auto-remove if not invoked by deadline</li>
      <li><strong>Partial Removal:</strong> Can remove some contingencies while keeping others</li>
      <li><strong>Point of No Return:</strong> Once removed, cannot reinstate - earnest money at risk</li>
      <li><strong>Strategic Timing:</strong> Remove in order: inspection, appraisal, financing (last)</li>
    </ul>
    
    <h3>Competitive Market Considerations</h3>
    <p>In hot markets, buyers face pressure to waive contingencies:</p>
    
    <p><strong>Low-Risk Waiv ers (if confident):</strong></p>
    <ul>
      <li>Appraisal contingency (if bringing extra cash)</li>
      <li>Home sale contingency (already sold or renting)</li>
      <li>HOA review (if reviewed beforehand)</li>
    </ul>
    
    <p><strong>NEVER Waive These:</strong></p>
    <ul>
      <li>Financing contingency (unless paying cash)</li>
      <li>Title contingency (protects against ownership issues)</li>
      <li>Inspection contingency (unless you're experienced investor buying as-is)</li>
    </ul>
    
    <p><strong>Compromise Options:</strong></p>
    <ul>
      <li><strong>Shorter Timelines:</strong> 7-day inspection instead of 14-day</li>
      <li><strong>Limited Scope:</strong> "Inspection for information only, repairs for issues over $5,000"</li>
      <li><strong>Pre-Inspection:</strong> Inspect before making offer, waive contingency</li>
      <li><strong>As-Is Acknowledgment:</strong> Accept property condition but keep inspection right to discover unknowns</li>
      <li><strong>Appraisal Gap Coverage:</strong> "Will cover up to $10,000 appraisal gap"</li>
    </ul>
    
    <h3>Seller Contingencies</h3>
    <p>Protections sellers can include:</p>
    <ul>
      <li><strong>Kick-Out Clause:</strong> Seller can accept backup offer, buyer has 72 hours to remove home sale contingency</li>
      <li><strong>Rent-Back:</strong> Seller rents property from buyer after closing (30-60 days typical)</li>
      <li><strong>Leaseback Contingency:</strong> Seller's purchase of new home contingent on selling current</li>
      <li><strong>Sale of Current Home:</strong> Seller must find suitable replacement before selling</li>
    </ul>
    
    <h3>Contingency Pitfalls to Avoid</h3>
    <ul>
      <li><strong>Missing Deadlines:</strong> Failure to act within timeline = automatic waiver</li>
      <li><strong>Not in Writing:</strong> Verbal agreements don't count - put it in contract</li>
      <li><strong>Vague Language:</strong> "Satisfactory to buyer" is better than "major issues only"</li>
      <li><strong>Failing to Apply:</strong> Financing contingency void if buyer doesn't apply for loan</li>
      <li><strong>Bad Faith:</strong> Can't invent excuses to invoke contingency unfairly</li>
      <li><strong>Not Reading Fine Print:</strong> Some contracts auto-waive, others require active removal</li>
    </ul>
    
    <h3>Best Practices</h3>
    
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Include all applicable contingencies in initial offer</li>
      <li>Set realistic but not excessive timelines</li>
      <li>Act quickly to schedule inspections/loan application</li>
      <li>Track deadlines in calendar with reminders</li>
      <li>Remove contingencies in writing, one at a time</li>
      <li>Get everything in writing - no verbal modifications</li>
      <li>Consult real estate attorney before removing major protections</li>
    </ul>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Accept reasonable contingencies to get deal done</li>
      <li>Prefer shorter timelines when possible</li>
      <li>Include kick-out clause if accepting home sale contingency</li>
      <li>Monitor buyer's compliance with deadlines</li>
      <li>Respond promptly to repair requests</li>
      <li>Don't accept offers with unreasonable or unusual contingencies</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "buyerType",
        label: "Buyer Type",
        type: "select",
        options: [
          "First-time buyer with financing",
          "Repeat buyer with financing",
          "Cash buyer",
          "Investor",
          "Need to sell current home first"
        ],
        defaultValue: "First-time buyer with financing",
      },
      {
        name: "marketCondition",
        label: "Market Conditions",
        type: "select",
        options: [
          "Hot seller's market (multiple offers)",
          "Balanced market",
          "Buyer's market",
          "Not sure"
        ],
        defaultValue: "Balanced market",
      },
      {
        name: "propertyCondition",
        label: "Property Condition",
        type: "select",
        options: [
          "New construction",
          "Move-in ready/excellent",
          "Good condition - minor updates",
          "Needs some work",
          "Needs significant renovation",
          "As-is/distressed",
          "Haven't seen yet"
        ],
        defaultValue: "Haven't seen yet",
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          "Single-family home",
          "Condo/Townhouse with HOA",
          "Multi-family (2-4 units)",
          "Rural property (well/septic)",
          "Pre-1978 (lead paint concern)",
          "Other"
        ],
        defaultValue: "Single-family home",
      },
      {
        name: "financingStatus",
        label: "Financing Status",
        type: "select",
        options: [
          "Pre-approved with lender",
          "Pre-qualified only",
          "Haven't applied yet",
          "Paying cash - no financing",
          "Unsure about approval"
        ],
        defaultValue: "Haven't applied yet",
      },
    ],
    results: [
      { label: "Recommended Contingencies", isCurrency: false },
      { label: "Timeline Suggestions", isCurrency: false },
      { label: "Sample Financing Clause", isCurrency: false },
      { label: "Sample Inspection Clause", isCurrency: false },
      { label: "Additional Protections", isCurrency: false },
    ],
    calculate: (data: any) => {
      const buyerType = data.buyerType || "First-time buyer with financing";
      const marketCondition = data.marketCondition || "Balanced market";
      const propertyCondition = data.propertyCondition || "Haven't seen yet";
      const propertyType = data.propertyType || "Single-family home";
      const financingStatus = data.financingStatus || "Haven't applied yet";
      
      let contingencies = [];
      let timelines = [];
      let additionalProtections = [];
      
      // Financing contingency
      if (!financingStatus.includes("cash")) {
        contingencies.push("✅ FINANCING CONTINGENCY (CRITICAL)");
        
        if (marketCondition.includes("Hot seller's market")) {
          timelines.push("Financing: 21-30 days (shortened for competitive offer)");
        } else {
          timelines.push("Financing: 30-45 days (standard timeline)");
        }
      } else {
        contingencies.push("🚫 No financing contingency needed (cash buyer)");
      }
      
      // Inspection contingency
      if (propertyCondition === "As-is/distressed" || propertyCondition === "Needs significant renovation") {
        contingencies.push("✅ INSPECTION CONTINGENCY (CRITICAL - detailed inspections needed)");
        timelines.push("Inspection: 14-21 days (allow time for multiple specialists)");
        additionalProtections.push("Consider structural engineer, contractor estimates");
      } else if (propertyCondition === "New construction") {
        contingencies.push("✅ INSPECTION CONTINGENCY (final walkthrough for defects)");
        timelines.push("Inspection: 7-10 days (new construction final inspection)");
        additionalProtections.push("Include builder warranty review");
      } else if (marketCondition.includes("Hot seller's market")) {
        contingencies.push("✅ INSPECTION CONTINGENCY (shortened timeline for competition)");
        timelines.push("Inspection: 7 days (competitive market - act fast)");
        additionalProtections.push("Consider pre-inspection before offer to shorten timeline");
      } else {
        contingencies.push("✅ INSPECTION CONTINGENCY (standard protection)");
        timelines.push("Inspection: 10-14 days (standard timeline)");
      }
      
      // Appraisal contingency
      if (financingStatus.includes("cash")) {
        contingencies.push("⚠️ APPRAISAL CONTINGENCY (optional for cash - but recommended for value protection)");
        additionalProtections.push("Even cash buyers benefit from appraisal to ensure fair price");
      } else {
        contingencies.push("✅ APPRAISAL CONTINGENCY (lender requirement)");
        timelines.push("Appraisal: 14-21 days from contract");
      }
      
      // Home sale contingency
      if (buyerType === "Need to sell current home first") {
        contingencies.push("✅ HOME SALE CONTINGENCY (accept seller kick-out clause to stay competitive)");
        timelines.push("Home sale: 45-60 days (or current home under contract first)");
        additionalProtections.push("Seller may require kick-out clause - have backup plan");
      }
      
      // Property-specific contingencies
      if (propertyType.includes("HOA")) {
        contingencies.push("✅ HOA REVIEW CONTINGENCY");
        timelines.push("HOA documents: 5-10 days to review bylaws, financials, restrictions");
        additionalProtections.push("Review HOA financial health, special assessments, rules");
      }
      
      if (propertyType.includes("well/septic")) {
        contingencies.push("✅ WELL & SEPTIC CONTINGENCY");
        timelines.push("Well/septic testing: 10-14 days");
        additionalProtections.push("Water quality test, septic inspection and pumping test required");
      }
      
      if (propertyType.includes("Pre-1978")) {
        contingencies.push("✅ LEAD PAINT INSPECTION (federal requirement)");
        timelines.push("Lead paint: 10-day inspection period (federally mandated)");
        additionalProtections.push("Federal law requires 10-day right to inspect for lead");
      }
      
      // Title contingency
      contingencies.push("✅ TITLE CONTINGENCY (always include)");
      timelines.push("Title review: 21-30 days to resolve any title issues");
      
      const contingenciesText = contingencies.join(" | ");
      const timelinesText = timelines.join(" | ");
      const additionalText = additionalProtections.length > 0 
        ? additionalProtections.join(" | ") 
        : "No additional contingencies recommended for this situation";
      
      // Sample clauses
      const financingClause = !financingStatus.includes("cash")
        ? `"This offer is contingent upon Buyer obtaining a firm written commitment for a mortgage loan in the amount of $________, at an interest rate not to exceed ____%, for a term of ___ years. Buyer shall make application for such financing within 5 business days of acceptance and shall diligently pursue approval. If Buyer is unable to obtain loan commitment within ${marketCondition.includes("Hot") ? "21" : "30"} days of acceptance due to Buyer's inability to qualify (not lender delays), Seller may cancel this agreement. If unable to obtain financing despite Buyer's good faith efforts, Buyer may cancel and earnest money shall be returned."`
        : "N/A - Cash purchase, no financing contingency needed";
      
      const inspectionClause = propertyCondition === "As-is/distressed"
        ? `"This offer is contingent upon professional home inspection and specialized inspections (structural, pest, mold, etc.) satisfactory to Buyer in Buyer's sole discretion. Buyer shall complete all inspections within 14 days of acceptance. If inspections reveal ANY defects, conditions, or issues that Buyer finds unsatisfactory, Buyer may: (1) Request Seller make specific repairs, (2) Request price reduction equal to estimated repair costs, (3) Request closing cost credit, or (4) Terminate this agreement. Seller has 5 days to respond to Buyer's requests. If parties cannot reach agreement, Buyer may terminate and receive full refund of earnest money. Buyer acknowledges property being sold AS-IS but retains full right to inspect and cancel based on findings."`
        : `"This offer is contingent upon a professional home inspection satisfactory to Buyer. Buyer may have property professionally inspected at Buyer's expense within ${marketCondition.includes("Hot") ? "7" : "10"} days of acceptance. If inspection reveals material defects affecting value, safety, or habitability, Buyer may request repairs, price reduction, or closing cost credit. Seller has 3 business days to respond. If parties cannot agree on resolution of material defects, Buyer may terminate agreement and earnest money shall be returned."`;

      return [
        { label: "Recommended Contingencies", value: contingenciesText, isCurrency: false },
        { label: "Timeline Suggestions", value: timelinesText, isCurrency: false },
        { label: "Sample Financing Clause", value: financingClause, isCurrency: false },
        { label: "Sample Inspection Clause", value: inspectionClause, isCurrency: false },
        { label: "Additional Protections", value: additionalText, isCurrency: false },
      ];
    },
  },
};
