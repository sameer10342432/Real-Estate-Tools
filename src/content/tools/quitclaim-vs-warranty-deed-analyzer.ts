import { CalculatorContent } from '@/types';

export const QUITCLAIM_VS_WARRANTY_DEED_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Quitclaim vs. Warranty Deed Analyzer',
  description: 'Compare deed types, analyze risks and protections, and choose the right deed for property transfers',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'quitclaim-vs-warranty-deed-analyzer',
  article: {
    title: "Quitclaim vs. Warranty Deed - Understanding Property Transfer Documents",
    content: `
    <h2>What is a Deed?</h2>
    <p>A deed is the legal document that transfers ownership of real property from one party (grantor) to another (grantee). The type of deed determines what warranties and protections the buyer receives. Understanding deed types is critical because once signed and recorded, they're very difficult to undo.</p>
    
    <h3>The Three Main Types of Deeds</h3>
    
    <h4>1. Warranty Deed (General Warranty Deed)</h4>
    <p><strong>Description:</strong> Provides maximum protection to buyer with six covenants (promises) from seller.</p>
    
    <p><strong>Seller's Warranties:</strong></p>
    <ul>
      <li><strong>Covenant of Seisin:</strong> Seller owns the property and has right to sell it</li>
      <li><strong>Covenant Against Encumbrances:</strong> No undisclosed liens, easements, or restrictions</li>
      <li><strong>Covenant of Right to Convey:</strong> Seller legally authorized to transfer title</li>
      <li><strong>Covenant of Warranty:</strong> Seller will defend title against all claims</li>
      <li><strong>Covenant of Quiet Enjoyment:</strong> Buyer won't be disturbed by superior title claims</li>
      <li><strong>Covenant of Further Assurance:</strong> Seller will fix any title defects discovered later</li>
    </ul>
    
    <p><strong>Seller's Liability:</strong> Responsible for title problems dating back to the property's ENTIRE HISTORY, not just their ownership period.</p>
    
    <p><strong>When Used:</strong> Standard in most real estate sales, refinances, purchase from strangers</p>
    
    <p><strong>Protection Level:</strong> 🟢🟢🟢🟢🟢 MAXIMUM (5/5)</p>
    
    <h4>2. Special Warranty Deed (Limited Warranty Deed)</h4>
    <p><strong>Description:</strong> Seller warrants title only during their ownership period, not prior history.</p>
    
    <p><strong>Seller's Warranties:</strong></p>
    <ul>
      <li>Seller has not encumbered property during their ownership</li>
      <li>No title defects occurred while seller owned it</li>
      <li>Defends against claims arising from seller's period of ownership only</li>
    </ul>
    
    <p><strong>Seller's Liability:</strong> LIMITED to problems that occurred during seller's ownership. Not responsible for prior defects.</p>
    
    <p><strong>When Used:</strong> Commercial real estate, REO/bank foreclosures, estate sales, corporate transfers</p>
    
    <p><strong>Protection Level:</strong> 🟢🟢🟢⚪⚪ MODERATE (3/5)</p>
    
    <h4>3. Quitclaim Deed</h4>
    <p><strong>Description:</strong> Transfers whatever interest grantor has, if any, with ZERO warranties.</p>
    
    <p><strong>Seller's Warranties:</strong> NONE. Seller makes NO promises about:</p>
    <ul>
      <li>Whether they own the property</li>
      <li>Whether title is clear</li>
      <li>Whether there are liens or encumbrances</li>
      <li>Whether they have right to transfer</li>
    </ul>
    
    <p><strong>Seller's Liability:</strong> ZERO. "Here's whatever I have, if anything - good luck."</p>
    
    <p><strong>When Used:</strong> Family transfers, divorce, clearing title clouds, adding/removing spouse, correcting deeds</p>
    
    <p><strong>Protection Level:</strong> 🔴⚪⚪⚪⚪ MINIMAL (0/5)</p>
    
    <h3>Side-by-Side Comparison</h3>
    
    <table border="1" cellpadding="8">
      <tr>
        <th>Feature</th>
        <th>Warranty Deed</th>
        <th>Special Warranty</th>
        <th>Quitclaim</th>
      </tr>
      <tr>
        <td>Seller's Promises</td>
        <td>Six full covenants</td>
        <td>Limited covenants</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Historical Coverage</td>
        <td>All time (forever)</td>
        <td>Seller's ownership only</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Buyer Protection</td>
        <td>Maximum</td>
        <td>Moderate</td>
        <td>Zero</td>
      </tr>
      <tr>
        <td>Seller Liability</td>
        <td>Highest</td>
        <td>Limited</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Title Insurance</td>
        <td>Strongly recommended</td>
        <td>Highly recommended</td>
        <td>CRITICAL</td>
      </tr>
      <tr>
        <td>Typical Use</td>
        <td>Standard sales</td>
        <td>Commercial/bank sales</td>
        <td>Family transfers</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Standard</td>
        <td>Standard</td>
        <td>Cheaper (DIY possible)</td>
      </tr>
    </table>
    
    <h3>When to Use Each Deed Type</h3>
    
    <p><strong>USE WARRANTY DEED when:</strong></p>
    <ul>
      <li>Purchasing property from stranger/third party</li>
      <li>Standard arm's-length sale</li>
      <li>Buyer paying full market value</li>
      <li>Buyer obtaining mortgage (lender will require)</li>
      <li>Seller has owned property long enough to be confident in title</li>
      <li>Maximum buyer protection desired</li>
    </ul>
    
    <p><strong>USE SPECIAL WARRANTY DEED when:</strong></p>
    <ul>
      <li>Commercial real estate transactions</li>
      <li>Bank-owned foreclosure/REO property</li>
      <li>Estate/probate sales</li>
      <li>Corporate-owned property transfers</li>
      <li>Property with complex title history seller doesn't want to warrant</li>
      <li>Seller is fiduciary (executor, trustee, guardian)</li>
    </ul>
    
    <p><strong>USE QUITCLAIM DEED when:</strong></p>
    <ul>
      <li>Transferring between family members (gift)</li>
      <li>Divorce - removing ex-spouse from title</li>
      <li>Adding spouse to title after marriage</li>
      <li>Transferring to trust for estate planning</li>
      <li>Correcting name on deed (typos)</li>
      <li>Clearing title clouds or defects</li>
      <li>Releasing potential claims to property</li>
      <li>Abandoning interest in property</li>
    </ul>
    
    <p><strong>NEVER use quitclaim when:</strong></p>
    <ul>
      <li>Buying property from non-family member</li>
      <li>Paying significant money for property</li>
      <li>Property has unknown title history</li>
      <li>Lender involved (they won't accept quitclaim)</li>
    </ul>
    
    <h3>Risks of Quitclaim Deeds</h3>
    
    <p><strong>Buyer Risks:</strong></p>
    <ul>
      <li><strong>No Ownership Guarantee:</strong> Grantor might not even own property</li>
      <li><strong>Hidden Liens:</strong> Tax liens, mechanic's liens, judgments not disclosed</li>
      <li><strong>Mortgage Surprise:</strong> Property still mortgaged (buyer doesn't assume debt but property is collateral)</li>
      <li><strong>Encumbrances:</strong> Easements, restrictions, leases not revealed</li>
      <li><strong>Competing Claims:</strong> Other people might have superior ownership claims</li>
      <li><strong>Boundary Disputes:</strong> Property lines unclear or disputed</li>
      <li><strong>Fraud:</strong> Grantor forged documents, imposter, lacking capacity</li>
      <li><strong>No Recourse:</strong> Can't sue grantor for title defects</li>
    </ul>
    
    <p><strong>Example Disaster Scenario:</strong></p>
    <p>Mother "gifts" house to son via quitclaim. Son discovers: (1) Property has $50K tax lien, (2) Mother never actually owned it - grandmother did and never transferred to mother, (3) Sister claims half-interest through inheritance, (4) Easement allows neighbor access through backyard. Son paid $10K for property thinking it was gift. Mother has no liability under quitclaim - son is stuck.</p>
    
    <h3>Due Diligence with Quitclaim</h3>
    <p>If receiving quitclaim deed, MUST do:</p>
    <ul>
      <li><strong>Title Search:</strong> Hire title company to research ownership history ($200-$500)</li>
      <li><strong>Title Insurance:</strong> Purchase owner's policy ($500-$2,000) - CRITICAL</li>
      <li><strong>Lien Search:</strong> Check for tax liens, judgments, mechanics liens</li>
      <li><strong>Survey:</strong> Determine exact boundaries and encroachments ($400-$800)</li>
      <li><strong>HOA Check:</strong> Verify no unpaid HOA dues or special assessments</li>
      <li><strong>Tax Verification:</strong> Confirm property taxes current</li>
      <li><strong>Mortgage Check:</strong> Search for existing mortgages</li>
      <li><strong>Judgment Search:</strong> Look for judgments against current owner</li>
    </ul>
    
    <p><strong>Cost of Due Diligence:</strong> $1,500-$4,000 but ESSENTIAL with quitclaim</p>
    
    <h3>Title Insurance Implications</h3>
    
    <p><strong>With Warranty Deed:</strong></p>
    <ul>
      <li>Title insurance recommended but seller's warranties provide backup</li>
      <li>Easier to obtain coverage</li>
      <li>Standard rates apply</li>
      <li>Seller AND title insurance both liable</li>
    </ul>
    
    <p><strong>With Quitclaim Deed:</strong></p>
    <ul>
      <li>Title insurance ABSOLUTELY CRITICAL - only protection</li>
      <li>May be harder to obtain</li>
      <li>Possibly higher rates or exclusions</li>
      <li>Title insurance is SOLE recourse if problems arise</li>
      <li>Some title companies refuse quitclaim deeds</li>
    </ul>
    
    <h3>Mortgage Lender Requirements</h3>
    <p>If buyer is financing purchase:</p>
    <ul>
      <li><strong>Conventional Loans:</strong> Require warranty deed (or special warranty minimum)</li>
      <li><strong>FHA/VA Loans:</strong> Require warranty deed, strict title requirements</li>
      <li><strong>Hard Money:</strong> May accept special warranty</li>
      <li><strong>Quitclaim:</strong> NO LENDER accepts quitclaim for purchase money loan</li>
    </ul>
    
    <p><strong>Exception:</strong> Quitclaim used to transfer property from individual to their own trust (refinance may still use quitclaim back)</p>
    
    <h3>Common Myths About Quitclaim Deeds</h3>
    
    <p><strong>MYTH: "Quitclaim means gift/no money"</strong></p>
    <p>FALSE. Quitclaim is about warranties, not price. Can sell for money using quitclaim (though unwise for buyer).</p>
    
    <p><strong>MYTH: "Quitclaim removes me from mortgage"</strong></p>
    <p>FALSE. Deed and mortgage are separate. Quitclaiming property doesn't remove mortgage obligation. Still owe debt.</p>
    
    <p><strong>MYTH: "Quitclaim protects me from liability"</strong></p>
    <p>FALSE. Environmental liens, tax liens may follow you even after transfer.</p>
    
    <p><strong>MYTH: "Quitclaim is faster/easier than warranty"</strong></p>
    <p>PARTIALLY TRUE. Form is simpler, but smart buyer will still do full title search (same time).</p>
    
    <p><strong>MYTH: "Family transfers are always quitclaim"</strong></p>
    <p>FALSE. Can use warranty deed between family members for added protection.</p>
    
    <h3>Deed Preparation and Recording</h3>
    
    <p><strong>Required Elements of Valid Deed:</strong></p>
    <ul>
      <li>Grantor name (seller) and grantee name (buyer)</li>
      <li>Legal description of property (not just address)</li>
      <li>Granting language ("grants and conveys" or "quitclaims")</li>
      <li>Consideration statement (price or "love and affection")</li>
      <li>Grantor signature</li>
      <li>Notarization (required in all states)</li>
      <li>Witnesses (some states require 1-2)</li>
    </ul>
    
    <p><strong>Recording Process:</strong></p>
    <ol>
      <li>Execute deed before notary</li>
      <li>Obtain witnesses if state requires</li>
      <li>Take original deed to county recorder's office</li>
      <li>Pay recording fee ($25-$200)</li>
      <li>Pay transfer tax if applicable (varies by state/county)</li>
      <li>Receive recorded deed back with stamp</li>
      <li>Deed becomes public record</li>
    </ol>
    
    <p><strong>Recording Fees by Type:</strong></p>
    <ul>
      <li><strong>Quitclaim:</strong> $15-$100 (varies by county)</li>
      <li><strong>Warranty:</strong> $25-$200</li>
      <li><strong>Transfer Taxes:</strong> 0-2% of sales price (state/county dependent)</li>
      <li><strong>Documentary Stamps:</strong> Some states charge per $100 of value</li>
    </ul>
    
    <h3>Tax Implications</h3>
    
    <p><strong>For Grantor (Seller):</strong></p>
    <ul>
      <li><strong>Sale:</strong> Capital gains tax on profit (if sold)</li>
      <li><strong>Gift:</strong> May owe gift tax if value over $18,000 (2024 annual exclusion)</li>
      <li><strong>Divorce:</strong> Usually tax-neutral under IRC 1041</li>
      <li><strong>Stepped-up Basis Lost:</strong> Gifting property loses step-up at death benefit</li>
    </ul>
    
    <p><strong>For Grantee (Buyer):</strong></p>
    <ul>
      <li><strong>Purchase:</strong> Basis = purchase price</li>
      <li><strong>Gift:</strong> Basis = grantor's basis (carryover)</li>
      <li><strong>Inheritance:</strong> Basis = fair market value at death (stepped-up)</li>
      <li><strong>Property Tax:</strong> May trigger reassessment in some states (CA Prop 13)</li>
    </ul>
    
    <h3>Special Situations</h3>
    
    <h4>Divorce Property Division</h4>
    <ul>
      <li>Use quitclaim to remove ex-spouse from title</li>
      <li>Doesn't remove from mortgage - need refinance</li>
      <li>Consider warranty to protect transferee spouse</li>
      <li>Include in divorce decree/settlement</li>
    </ul>
    
    <h4>Adding Spouse to Title</h4>
    <ul>
      <li>Quitclaim from individual to "John and Jane Smith"</li>
      <li>Creates tenancy by entirety (marital ownership) in some states</li>
      <li>May trigger "due on sale" clause in mortgage</li>
      <li>Consult lender before doing this</li>
    </ul>
    
    <h4>Transfer to Living Trust</h4>
    <ul>
      <li>Quitclaim from individual to trust common</li>
      <li>Some lenders require warranty deed</li>
      <li>Title insurance may need endorsement</li>
      <li>Usually doesn't trigger transfer taxes</li>
    </ul>
    
    <h4>Correcting Deed Errors</h4>
    <ul>
      <li>Quitclaim deed used to fix name misspellings</li>
      <li>Or use "corrective deed" (scrivener's affidavit)</li>
      <li>Must be same parties, just fixing error</li>
      <li>Should reference original deed being corrected</li>
    </ul>
    
    <h3>State Variations</h3>
    <ul>
      <li><strong>California:</strong> Grant deed commonly used (between quitclaim and warranty)</li>
      <li><strong>Florida:</strong> Warranty deed standard, quitclaim often used for quick transfers</li>
      <li><strong>Texas:</strong> General warranty deed most common</li>
      <li><strong>New York:</strong> Bargain and sale deed (similar to special warranty)</li>
      <li><strong>Illinois:</strong> Warranty deed standard</li>
    </ul>
    
    <h3>Red Flags and Warning Signs</h3>
    <p>Be suspicious if:</p>
    <ul>
      <li>Seller insists on quitclaim for arms-length sale</li>
      <li>Quitclaim used in transaction with stranger</li>
      <li>Buyer paying significant money but getting quitclaim</li>
      <li>Seller won't explain why not warranty deed</li>
      <li>Title company refuses to insure</li>
      <li>Lender won't accept deed type</li>
      <li>Property has complicated ownership history</li>
    </ul>
    
    <h3>Costs Summary</h3>
    <ul>
      <li><strong>Attorney Preparation:</strong> $200-$600 (warranty), $150-$400 (quitclaim)</li>
      <li><strong>DIY Quitclaim:</strong> $50-$150 (legal form + notary)</li>
      <li><strong>Recording Fee:</strong> $25-$200</li>
      <li><strong>Transfer Tax:</strong> 0-2% of value (state dependent)</li>
      <li><strong>Title Search:</strong> $200-$500</li>
      <li><strong>Title Insurance:</strong> $500-$2,000</li>
      <li><strong>Total (Warranty with insurance):</strong> $1,500-$4,000</li>
      <li><strong>Total (Quitclaim DIY, no insurance):</strong> $100-$500 (HIGH RISK)</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Use warranty deed for all arms-length sales</li>
      <li>Reserve quitclaim for family, divorce, corrections</li>
      <li>ALWAYS get title insurance, especially with quitclaim</li>
      <li>Have attorney review deed before signing</li>
      <li>Ensure proper legal description (not just address)</li>
      <li>Record deed promptly after signing</li>
      <li>Keep certified copy of recorded deed forever</li>
      <li>If uncertain, err on side of warranty deed</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "relationshipToGrantor",
        label: "Relationship to Person Transferring Property",
        type: "select",
        options: [
          "Purchasing from stranger/third party",
          "Immediate family member (parent, child, sibling)",
          "Spouse (adding/removing from title)",
          "Ex-spouse (divorce settlement)",
          "Other family member",
          "Trust transfer (my own trust)",
          "Business partner",
          "I am the grantor - giving property"
        ],
        defaultValue: "Purchasing from stranger/third party",
      },
      {
        name: "purposeOfTransfer",
        label: "Purpose of Transfer",
        type: "select",
        options: [
          "Purchasing property (paying money)",
          "Gift between family members",
          "Divorce - removing spouse from title",
          "Adding spouse to title",
          "Estate planning - transfer to trust",
          "Correcting deed error",
          "Clearing title cloud",
          "Other"
        ],
        defaultValue: "Purchasing property (paying money)",
      },
      {
        name: "paymentAmount",
        label: "Amount Being Paid (if any)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "titleHistory",
        label: "Property Title History",
        type: "select",
        options: [
          "Clean title - grantor owned for many years",
          "Recent purchase by grantor",
          "Inherited property - complex history",
          "Foreclosure/REO property",
          "Unknown/unclear history",
          "Don't know"
        ],
        defaultValue: "Don't know",
      },
      {
        name: "financingMethod",
        label: "How Are You Financing?",
        type: "select",
        options: [
          "Cash - no loan",
          "Conventional mortgage",
          "FHA/VA loan",
          "Refinancing existing mortgage",
          "No financing - gift",
          "Not sure yet"
        ],
        defaultValue: "Cash - no loan",
      },
    ],
    results: [
      { label: "Recommended Deed Type", isCurrency: false },
      { label: "Risk Analysis", isCurrency: false },
      { label: "Required Protections", isCurrency: false },
      { label: "Cost Estimate", isCurrency: false },
      { label: "Action Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const relationship = data.relationshipToGrantor || "Purchasing from stranger/third party";
      const purpose = data.purposeOfTransfer || "Purchasing property (paying money)";
      const paymentAmount = Number(data.paymentAmount) || 0;
      const titleHistory = data.titleHistory || "Don't know";
      const financing = data.financingMethod || "Cash - no loan";
      
      let recommendedDeed = "";
      let riskLevel = "";
      let requiredProtections = [];
      let costEstimate = "";
      let warnings = [];
      
      // Determine recommended deed type
      if (relationship === "Purchasing from stranger/third party" && paymentAmount > 10000) {
        recommendedDeed = "✅ WARRANTY DEED REQUIRED - You're paying significant money to a stranger. NEVER accept quitclaim in this situation.";
        riskLevel = "🔴 CRITICAL if using quitclaim";
        requiredProtections.push("MUST use Warranty Deed");
        requiredProtections.push("Obtain title insurance ($500-$2,000)");
        requiredProtections.push("Professional title search required");
        warnings.push("⚠️ NEVER use quitclaim when paying money to non-family member");
      } else if (purpose === "Purchasing property (paying money)" && paymentAmount > 50000) {
        recommendedDeed = "✅ WARRANTY DEED STRONGLY RECOMMENDED - Protect your investment with maximum warranties.";
        riskLevel = "🟠 HIGH RISK with quitclaim";
        requiredProtections.push("Warranty deed for maximum protection");
        requiredProtections.push("Title insurance essential");
        requiredProtections.push("Survey recommended");
      } else if (purpose === "Gift between family members" || purpose === "Estate planning - transfer to trust") {
        recommendedDeed = "📋 QUITCLAIM DEED ACCEPTABLE - Family transfer, but consider warranty for added protection. Quitclaim is common and acceptable here.";
        riskLevel = "🟢 LOW RISK (family transfer)";
        requiredProtections.push("Title insurance still recommended ($500-$1,500)");
        requiredProtections.push("Title search advisable even for family gifts");
        warnings.push("💡 Even family members can unknowingly transfer clouded title");
      } else if (purpose === "Divorce - removing spouse from title" || purpose === "Adding spouse to title") {
        recommendedDeed = "📋 QUITCLAIM DEED STANDARD - Common for marital property adjustments. Consider warranty for extra protection.";
        riskLevel = "🟢 LOW to MODERATE RISK";
        requiredProtections.push("Include in divorce decree/settlement");
        requiredProtections.push("Note: Doesn't remove mortgage obligation - refinance needed");
        warnings.push("⚠️ Check with lender - may trigger due-on-sale clause");
      } else if (purpose === "Correcting deed error" || purpose === "Clearing title cloud") {
        recommendedDeed = "📋 QUITCLAIM DEED APPROPRIATE - Standard tool for corrections and clearing title clouds.";
        riskLevel = "🟢 LOW RISK (administrative)";
        requiredProtections.push("Reference original deed being corrected");
      } else if (titleHistory === "Foreclosure/REO property" || titleHistory === "Inherited property - complex history") {
        recommendedDeed = "⚠️ SPECIAL WARRANTY DEED MINIMUM - Given complex history, seller likely won't give full warranty. INSIST on special warranty at minimum.";
        riskLevel = "🟡 MODERATE RISK";
        requiredProtections.push("Special or general warranty deed");
        requiredProtections.push("Enhanced title insurance coverage");
        requiredProtections.push("Thorough title search going back 30+ years");
        warnings.push("🚨 Complex title history increases risk - extra diligence required");
      } else {
        recommendedDeed = "Deed type depends on your specific situation. See analysis below.";
        riskLevel = "Varies based on circumstances";
      }
      
      // Financing impacts
      if (financing === "Conventional mortgage" || financing === "FHA/VA loan") {
        requiredProtections.push("🏦 LENDER REQUIRES WARRANTY DEED - No choice, must use warranty or special warranty");
        warnings.push("⛔ Lender will NOT accept quitclaim deed for purchase money loan");
      }
      
      // Additional protections based on payment
      if (paymentAmount > 100000) {
        requiredProtections.push("Survey to verify boundaries ($400-$800)");
        requiredProtections.push("Attorney review of all documents ($500-$1,000)");
        requiredProtections.push("Extended title search coverage");
      }
      
      const protectionsText = requiredProtections.join(" | ");
      const warningsText = warnings.length > 0 ? warnings.join(" | ") : "No special warnings for this situation";
      
      // Cost estimation
      let estimatedCost = 0;
      let costBreakdown = "";
      
      if (recommendedDeed.includes("WARRANTY DEED")) {
        estimatedCost = paymentAmount > 100000 ? 3500 : 2000;
        costBreakdown = `Attorney deed prep: $400-$600 | Title search: $300-$500 | Title insurance: $${paymentAmount > 500000 ? "1,500-$3,000" : "800-$1,500"} | Recording: $50-$200 | Transfer tax: ${paymentAmount > 0 ? "~$" + (paymentAmount * 0.01).toLocaleString() : "$0"} (varies by state) | TOTAL: ~$${estimatedCost.toLocaleString()}`;
      } else if (purpose.includes("Gift") || purpose.includes("trust") || purpose.includes("Divorce")) {
        estimatedCost = 800;
        costBreakdown = "Quitclaim prep: $200-$400 (attorney) or $50-$150 (DIY) | Title insurance (recommended): $500-$1,000 | Recording: $25-$100 | Notary: $15-$30 | TOTAL: $300-$1,500 (with insurance ~$800)";
      } else {
        estimatedCost = 1500;
        costBreakdown = "Typical costs: Attorney: $300-$600 | Title search: $200-$500 | Title insurance: $500-$1,500 | Recording: $50-$150 | Total: $1,000-$2,500";
      }
      
      costEstimate = `💰 ESTIMATED COST: $${estimatedCost.toLocaleString()} | ${costBreakdown}`;
      
      // Action steps
      let actionSteps = "";
      if (recommendedDeed.includes("WARRANTY DEED REQUIRED") || paymentAmount > 50000) {
        actionSteps = "CRITICAL ACTION STEPS: (1) ⛔ DO NOT proceed with quitclaim deed - insist on warranty deed, (2) Hire real estate attorney to review transaction ($300-$600), (3) Order title search and title insurance ($1,000-$2,500 total), (4) Review title commitment for exceptions before closing, (5) If seller refuses warranty deed, WALK AWAY or demand significant price reduction, (6) Get attorney opinion on title before closing, (7) Ensure deed properly drafted with legal description, (8) Record deed immediately after closing. DO NOT CUT CORNERS - you're paying significant money.";
      } else if (purpose.includes("Gift") || purpose.includes("trust")) {
        actionSteps = "FAMILY TRANSFER STEPS: (1) Decide between quitclaim (simpler, no warranties) vs. warranty (more protection), (2) Have attorney draft deed or use state-specific quitclaim form ($50-$400), (3) Consider title search even for family - surprises happen ($200-$500), (4) Purchase title insurance to protect yourself ($500-$1,000), (5) Sign before notary with proper ID, (6) Record with county recorder within 30 days ($25-$100), (7) Update property insurance, (8) File gift tax return if value over $18,000 (2024). Quitclaim is acceptable but not mandatory - warranty offers more protection.";
      } else if (purpose.includes("Divorce")) {
        actionSteps = "DIVORCE TRANSFER STEPS: (1) Include property transfer in divorce decree/settlement, (2) Use quitclaim to remove ex-spouse from title (standard), (3) Important: Quitclaim doesn't remove mortgage - must refinance separately, (4) Check with lender BEFORE transfer - may accelerate loan, (5) Sign quitclaim before notary ($15-$30), (6) Record deed ($25-$100), (7) Notify homeowner's insurance of title change, (8) If keeping house, refinance in your name only, (9) If selling, wait until divorce final to avoid tax issues. Consult divorce attorney and real estate attorney.";
      } else if (titleHistory === "Foreclosure/REO property") {
        actionSteps = "FORECLOSURE PROPERTY STEPS: (1) Bank/REO properties typically use special warranty deed (acceptable), (2) Get full title search going back 30+ years ($400-$600), (3) Purchase enhanced title insurance with no exclusions ($1,000-$2,000), (4) Hire attorney to review title commitment ($500-$800), (5) Look for unresolved liens, judgments, HOA dues, (6) Request bank clear any title clouds before closing, (7) Budget for potential hidden issues, (8) Consider home warranty for property condition issues. REO properties have higher title risk - extra due diligence essential.";
      } else {
        actionSteps = "GENERAL DEED TRANSFER STEPS: (1) Consult real estate attorney about which deed type appropriate ($150-$300 consultation), (2) Determine if warranty, special warranty, or quitclaim fits situation, (3) Have attorney draft deed with proper legal description ($200-$600), (4) Complete title search ($200-$500), (5) Purchase title insurance - amount depends on property value ($500-$2,000), (6) Review title commitment before signing, (7) Sign deed before notary public with government ID, (8) Record deed with county recorder ($25-$200), (9) Pay applicable transfer taxes (0-2% of value), (10) Keep certified copy of recorded deed permanently.";
      }
      
      // Risk analysis
      const riskAnalysis = `${riskLevel} | ${warningsText}`;

      return [
        { label: "Recommended Deed Type", value: recommendedDeed, isCurrency: false },
        { label: "Risk Analysis", value: riskAnalysis, isCurrency: false },
        { label: "Required Protections", value: protectionsText, isCurrency: false },
        { label: "Cost Estimate", value: costEstimate, isCurrency: false },
        { label: "Action Steps", value: actionSteps, isCurrency: false },
      ];
    },
  },
};
