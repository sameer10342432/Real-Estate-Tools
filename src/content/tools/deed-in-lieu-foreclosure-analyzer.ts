import { CalculatorContent } from '@/types';

export const DEED_IN_LIEU_FORECLOSURE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Deed in Lieu (of Foreclosure) Analyzer',
  description: 'Analyze deed in lieu as foreclosure alternative, compare with other options, and understand credit and financial implications',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'deed-in-lieu-foreclosure-analyzer',
  article: {
    title: "Deed in Lieu of Foreclosure - Voluntary Transfer to Avoid Foreclosure Process",
    content: `
    <h2>What is a Deed in Lieu of Foreclosure?</h2>
    <p>A deed in lieu of foreclosure (DIL) is a transaction where a homeowner voluntarily transfers the property deed to the mortgage lender to satisfy the loan and avoid formal foreclosure proceedings. Essentially, you give the bank the house in exchange for them releasing you from the mortgage debt. It's often called "friendly foreclosure" or "voluntary foreclosure."</p>
    
    <h3>How Deed in Lieu Works</h3>
    <ol>
      <li><strong>Homeowner Falls Behind:</strong> Unable to make mortgage payments</li>
      <li><strong>Attempts to Sell Fail:</strong> Can't sell property or short sale doesn't work</li>
      <li><strong>Requests DIL:</strong> Homeowner asks lender to accept deed instead of foreclosing</li>
      <li><strong>Lender Evaluates:</strong> Bank reviews finances, property condition, title</li>
      <li><strong>Negotiation:</strong> Terms discussed (moving assistance, deficiency waiver, timing)</li>
      <li><strong>Agreement Signed:</strong> DIL agreement outlining all terms</li>
      <li><strong>Deed Transfer:</strong> Homeowner signs deed transferring property to lender</li>
      <li><strong>Move Out:</strong> Homeowner vacates property (usually 30-90 days)</li>
      <li><strong>Debt Released:</strong> Lender releases homeowner from mortgage obligation (ideally)</li>
      <li><strong>Property to Lender:</strong> Bank takes possession, sells as REO property</li>
    </ol>
    
    <h3>When Deed in Lieu Makes Sense</h3>
    <ul>
      <li><strong>Property Underwater:</strong> Owe more than home is worth (negative equity)</li>
      <li><strong>Financial Hardship:</strong> Job loss, medical bills, divorce, can't afford payments</li>
      <li><strong>Failed Sale Attempts:</strong> Tried to sell but no buyers or short sale denied</li>
      <li><strong>Want to Avoid Foreclosure:</strong> Foreclosure more damaging to credit</li>
      <li><strong>Need Clean Break:</strong> Want to move on without legal battle</li>
      <li><strong>No Second Liens:</strong> Only one mortgage (lenders won't accept DIL with junior liens)</li>
      <li><strong>Cooperative Lender:</strong> Bank willing to negotiate (not all are)</li>
      <li><strong>Can't Afford Bankruptcy:</strong> Bankruptcy more expensive or complex</li>
    </ul>
    
    <h3>Advantages of Deed in Lieu</h3>
    <ul>
      <li><strong>Less Credit Damage:</strong> Less severe than foreclosure (though still significant)</li>
      <li><strong>Faster Process:</strong> Months instead of 1-3 years for foreclosure</li>
      <li><strong>No Public Auction:</strong> Avoids embarrassment of foreclosure sale</li>
      <li><strong>Certainty:</strong> Know exactly when you need to move (vs. unpredictable foreclosure)</li>
      <li><strong>Possible Cash for Keys:</strong> Lender may pay $2,000-$10,000 to vacate</li>
      <li><strong>Deficiency Waiver:</strong> Can negotiate forgiveness of remaining debt</li>
      <li><strong>Relocation Assistance:</strong> Some programs provide moving money</li>
      <li><strong>Less Legal Fees:</strong> Simpler process, lower attorney costs</li>
      <li><strong>Maintain Dignity:</strong> Voluntary vs. forced removal</li>
      <li><strong>Preserve Relationships:</strong> Less adversarial than fighting foreclosure</li>
    </ul>
    
    <h3>Disadvantages and Risks</h3>
    <ul>
      <li><strong>Still Damages Credit:</strong> 50-150 point drop, 2-4 years recovery</li>
      <li><strong>Loss of Home:</strong> You lose the property permanently</li>
      <li><strong>Possible Deficiency:</strong> May still owe difference if lender doesn't waive</li>
      <li><strong>Tax Consequences:</strong> Forgiven debt may be taxable income</li>
      <li><strong>Future Lending Challenges:</strong> Harder to get mortgage for 2-4 years</li>
      <li><strong>Lender May Refuse:</strong> Not obligated to accept DIL</li>
      <li><strong>Junior Liens Problem:</strong> Second mortgages complicate/prevent DIL</li>
      <li><strong>No Stay Period:</strong> Must vacate per agreement, can't delay</li>
      <li><strong>Judgment Risk:</strong> Lender could still pursue deficiency judgment</li>
      <li><strong>Lost Equity:</strong> If property has any equity, you forfeit it</li>
    </ul>
    
    <h3>Lender's Requirements for DIL</h3>
    <p>Banks typically require:</p>
    <ul>
      <li><strong>Demonstrated Hardship:</strong> Proof of income loss, medical emergency, etc.</li>
      <li><strong>Property Marketing:</strong> Must try to sell property first (90-120 days)</li>
      <li><strong>Clear Title:</strong> No second mortgages, tax liens, judgments</li>
      <li><strong>Property Access:</strong> Allow inspections and appraisals</li>
      <li><strong>Good Condition:</strong> Property maintained, not damaged or vandalized</li>
      <li><strong>Borrower Cooperation:</strong> Responsive, provides documents, follows process</li>
      <li><strong>No Bankruptcy:</strong> Not in active bankruptcy proceedings</li>
      <li><strong>Application Package:</strong> Hardship letter, financials, tax returns</li>
    </ul>
    
    <h3>DIL vs. Other Foreclosure Alternatives</h3>
    
    <table border="1" cellpadding="8">
      <tr>
        <th>Option</th>
        <th>Credit Impact</th>
        <th>Timeline</th>
        <th>Keep Home?</th>
        <th>Best For</th>
      </tr>
      <tr>
        <td>Loan Modification</td>
        <td>Minor (if current)</td>
        <td>2-6 months</td>
        <td>Yes</td>
        <td>Temporary hardship, want to keep home</td>
      </tr>
      <tr>
        <td>Forbearance</td>
        <td>Minimal</td>
        <td>3-12 months</td>
        <td>Yes (temporary)</td>
        <td>Short-term income loss, will recover</td>
      </tr>
      <tr>
        <td>Short Sale</td>
        <td>Moderate (-100 pts)</td>
        <td>3-9 months</td>
        <td>No</td>
        <td>Underwater, can find buyer</td>
      </tr>
      <tr>
        <td>Deed in Lieu</td>
        <td>Moderate (-100 pts)</td>
        <td>2-6 months</td>
        <td>No</td>
        <td>Can't sell, no junior liens, want quick exit</td>
      </tr>
      <tr>
        <td>Foreclosure</td>
        <td>Severe (-150+ pts)</td>
        <td>6-36 months</td>
        <td>No</td>
        <td>None - worst option</td>
      </tr>
      <tr>
        <td>Bankruptcy (Ch13)</td>
        <td>Severe (-200 pts)</td>
        <td>3-5 years</td>
        <td>Possibly</td>
        <td>Multiple debts, need protection</td>
      </tr>
    </table>
    
    <h3>Credit Score Impact Comparison</h3>
    <ul>
      <li><strong>Deed in Lieu:</strong> -85 to -135 points typically</li>
      <li><strong>Short Sale:</strong> -85 to -135 points (similar to DIL)</li>
      <li><strong>Foreclosure:</strong> -150 to -240 points</li>
      <li><strong>Bankruptcy:</strong> -200 to -240 points</li>
      <li><strong>Late Payments Leading to DIL:</strong> Already lost 60-100 points before DIL</li>
    </ul>
    
    <p><strong>Credit Reporting:</strong> DIL appears on credit report as "deed in lieu of foreclosure" or sometimes "settled/paid in full for less than owed"</p>
    
    <h3>Timeline Comparison</h3>
    <ul>
      <li><strong>Deed in Lieu:</strong> 2-6 months total (faster)</li>
      <li><strong>Short Sale:</strong> 3-9 months (depends on buyer)</li>
      <li><strong>Foreclosure (Judicial):</strong> 12-36 months (long court process)</li>
      <li><strong>Foreclosure (Non-Judicial):</strong> 4-12 months (faster but still longer than DIL)</li>
      <li><strong>Loan Modification:</strong> 2-6 months (keeps home)</li>
    </ul>
    
    <h3>The DIL Process Step-by-Step</h3>
    
    <p><strong>Phase 1: Initial Request (Weeks 1-4)</strong></p>
    <ol>
      <li>Contact lender's loss mitigation department</li>
      <li>Request deed in lieu as foreclosure alternative</li>
      <li>Complete application for mortgage assistance</li>
      <li>Submit hardship letter explaining situation</li>
      <li>Provide financial documents (pay stubs, tax returns, bank statements)</li>
    </ol>
    
    <p><strong>Phase 2: Property Marketing (Months 2-4)</strong></p>
    <ol>
      <li>List property for sale (usually required for 90-120 days)</li>
      <li>Price at or below market value</li>
      <li>Provide documentation of marketing efforts to lender</li>
      <li>If property doesn't sell, strengthens DIL case</li>
    </ol>
    
    <p><strong>Phase 3: Evaluation (Months 3-5)</strong></p>
    <ol>
      <li>Lender orders BPO (broker price opinion) or appraisal</li>
      <li>Title search conducted to verify no junior liens</li>
      <li>Lender reviews financial hardship documentation</li>
      <li>Bank decides whether to accept or deny DIL</li>
    </ol>
    
    <p><strong>Phase 4: Negotiation (Month 5-6)</strong></p>
    <ol>
      <li>If approved, receive DIL agreement</li>
      <li>Review terms (move-out date, deficiency waiver, cash for keys)</li>
      <li>Negotiate improvements if possible</li>
      <li>Consult attorney before signing</li>
    </ol>
    
    <p><strong>Phase 5: Execution (Month 6)</strong></p>
    <ol>
      <li>Sign DIL agreement and deed</li>
      <li>Receive any relocation assistance payment</li>
      <li>Coordinate move-out date</li>
      <li>Vacate property in broom-clean condition</li>
      <li>Turn over keys to lender</li>
      <li>Receive confirmation of debt satisfaction</li>
    </ol>
    
    <h3>Negotiation Leverage Points</h3>
    <p>What you can try to negotiate:</p>
    <ul>
      <li><strong>Deficiency Waiver:</strong> CRITICAL - get written waiver of any remaining debt</li>
      <li><strong>Cash for Keys:</strong> Request $2,000-$10,000 relocation assistance</li>
      <li><strong>Move-Out Time:</strong> Negotiate 60-90 days instead of 30</li>
      <li><strong>1099-C Timing:</strong> Request forgiveness occur in year beneficial for taxes</li>
      <li><strong>Credit Reporting:</strong> Ask for favorable reporting language (rarely granted)</li>
      <li><strong>Personal Property:</strong> Time to remove all belongings</li>
      <li><strong>Utilities:</strong> Who pays utilities during transition</li>
    </ul>
    
    <h3>Junior Liens - The DIL Killer</h3>
    <p>Second mortgages/HELOCs prevent most DILs:</p>
    <ul>
      <li><strong>Problem:</strong> First lender won't accept DIL with junior liens (complicates title)</li>
      <li><strong>Solution Options:</strong></li>
      <ul>
        <li>Negotiate junior lien release (second lender must agree to $0)</li>
        <li>First lender pays off junior lien (rare)</li>
        <li>Pursue short sale instead (easier with multiple liens)</li>
        <li>File bankruptcy to strip junior lien if underwater (Chapter 13)</li>
      </ul>
      <li><strong>HOA/Tax Liens:</strong> Also must be cleared before DIL</li>
    </ul>
    
    <h3>Deficiency Balance Issue</h3>
    <p>After DIL, you may still owe money:</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Mortgage Balance: $250,000</li>
      <li>Property Value (BPO): $200,000</li>
      <li>Deficiency: $50,000</li>
    </ul>
    
    <p><strong>Without Deficiency Waiver:</strong> Lender could pursue $50K judgment against you</p>
    
    <p><strong>With Deficiency Waiver:</strong> Lender forgives $50K (CRITICAL to get in writing)</p>
    
    <p><strong>State Anti-Deficiency Laws:</strong></p>
    <ul>
      <li><strong>California:</strong> No deficiency on purchase money loans (home you bought to live in)</li>
      <li><strong>Arizona:</strong> Anti-deficiency for homes on 2.5 acres or less</li>
      <li><strong>Montana, North Dakota:</strong> No deficiency judgments allowed</li>
      <li><strong>Most Other States:</strong> Lender CAN pursue deficiency unless waived</li>
    </ul>
    
    <h3>Tax Consequences</h3>
    <p>Forgiven mortgage debt may be taxable income:</p>
    
    <p><strong>1099-C (Cancellation of Debt):</strong></p>
    <ul>
      <li>Lender sends 1099-C for forgiven deficiency amount</li>
      <li>IRS treats forgiven debt as income</li>
      <li>Example: $50K deficiency forgiven = $50K taxable income</li>
      <li>Tax bill: $50K × 22% = $11,000 owed to IRS</li>
    </ul>
    
    <p><strong>Exceptions (May Avoid Tax):</strong></p>
    <ul>
      <li><strong>Mortgage Forgiveness Debt Relief Act:</strong> Expired 2020, sometimes extended by Congress</li>
      <li><strong>Insolvency Exception:</strong> If liabilities exceed assets, debt forgiveness not taxed</li>
      <li><strong>Bankruptcy Exception:</strong> Debt forgiven in bankruptcy not taxable</li>
      <li><strong>Principal Residence:</strong> Some relief for primary homes (check current tax law)</li>
    </ul>
    
    <p><strong>Action:</strong> Consult tax professional BEFORE signing DIL to understand tax impact</p>
    
    <h3>Impact on Future Homeownership</h3>
    <ul>
      <li><strong>Waiting Period for New Mortgage:</strong></li>
      <ul>
        <li>FHA Loan: 3 years after DIL (with extenuating circumstances)</li>
        <li>Conventional Loan: 4 years typically</li>
        <li>VA Loan: 2 years with extenuating circumstances</li>
        <li>USDA Loan: 3 years</li>
        <li>Manual Underwriting: May be possible sooner with good explanation</li>
      </ul>
      <li><strong>Credit Score Recovery:</strong> 2-4 years to recover to "good" range</li>
      <li><strong>Larger Down Payment:</strong> May need 10-20% down vs. 3-5% normally</li>
      <li><strong>Higher Interest Rates:</strong> Rates may be 0.5-1.5% higher</li>
    </ul>
    
    <h3>When Lender Will Reject DIL</h3>
    <ul>
      <li>Junior liens exist (second mortgages, HELOCs)</li>
      <li>Property has significant value/equity</li>
      <li>Title issues or clouds on title</li>
      <li>Property damaged or in disrepair</li>
      <li>Borrower didn't try to sell property first</li>
      <li>Homeowner uncooperative or unreachable</li>
      <li>Bankruptcy filed (automatic stay prevents DIL)</li>
      <li>Occupant refuses to vacate</li>
      <li>Foreclosure already advanced too far</li>
    </ul>
    
    <h3>Alternatives to Consider First</h3>
    
    <h4>1. Loan Modification</h4>
    <ul>
      <li>Keeps home, adjusts payment/terms</li>
      <li>Less credit damage if current on payments</li>
      <li>Better if hardship is temporary</li>
      <li>Try THIS FIRST before DIL</li>
    </ul>
    
    <h4>2. Short Sale</h4>
    <ul>
      <li>Sell property for less than owed</li>
      <li>Similar credit impact as DIL</li>
      <li>Better if you can find buyer</li>
      <li>Works with multiple liens (better than DIL)</li>
      <li>Takes longer but more control</li>
    </ul>
    
    <h4>3. Forbearance</h4>
    <ul>
      <li>Temporary pause or reduction in payments</li>
      <li>Minimal credit impact</li>
      <li>Must resume payments later (catch-up or modification)</li>
      <li>Good for short-term crisis (COVID, medical emergency)</li>
    </ul>
    
    <h4>4. Rent Out Property</h4>
    <ul>
      <li>Rental income covers mortgage</li>
      <li>Keep asset, build equity long-term</li>
      <li>Become landlord (responsibilities)</li>
      <li>Wait for market to improve</li>
    </ul>
    
    <h4>5. Chapter 13 Bankruptcy</h4>
    <ul>
      <li>Restructure all debts, not just mortgage</li>
      <li>Can keep home with repayment plan</li>
      <li>Can strip second mortgage if underwater</li>
      <li>More severe credit impact</li>
      <li>3-5 year repayment plan</li>
    </ul>
    
    <h3>DIL Scams to Avoid</h3>
    <ul>
      <li><strong>Foreclosure Rescue Scams:</strong> Company offers to "save" home, steals equity or title</li>
      <li><strong>Phantom Help:</strong> Charge fees but provide no actual assistance</li>
      <li><strong>Lease-Back Scams:</strong> Transfer deed but "rent" back home - lose ownership</li>
      <li><strong>Equity Stripping:</strong> Refinance at terrible terms, steal equity</li>
      <li><strong>Red Flags:</strong> Upfront fees, guaranteed approval, high-pressure tactics, requests to sign blank documents</li>
    </ul>
    
    <p><strong>Safe Resources:</strong></p>
    <ul>
      <li>HUD-Approved Housing Counselors (free): 1-800-569-4287</li>
      <li>State Attorney General Consumer Protection</li>
      <li>Nonprofit credit counseling agencies</li>
      <li>Your mortgage servicer directly (no middleman)</li>
    </ul>
    
    <h3>Documentation to Keep</h3>
    <p>Save these permanently:</p>
    <ul>
      <li>Signed DIL agreement with deficiency waiver</li>
      <li>Recorded deed showing transfer to lender</li>
      <li>1099-C form (tax reporting)</li>
      <li>Release of mortgage lien</li>
      <li>Proof of property condition at turnover (photos)</li>
      <li>Move-out agreement and cash for keys payment</li>
      <li>All correspondence with lender</li>
      <li>Credit reports before and after</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Exhaust all alternatives before DIL (modification, short sale)</li>
      <li>Consult HUD counselor for free guidance</li>
      <li>Hire real estate attorney to review DIL agreement ($500-$1,500)</li>
      <li>NEVER sign without deficiency waiver in writing</li>
      <li>Get tax advice before completing DIL</li>
      <li>Document everything in writing</li>
      <li>Leave property in good condition</li>
      <li>Plan move 60-90 days ahead</li>
      <li>Continue negotiating until signed</li>
      <li>Understand all tax and credit consequences</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "mortgageBalance",
        label: "Current Mortgage Balance",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "propertyValue",
        label: "Current Property Value (Estimate)",
        type: "number",
        placeholder: "250000",
        defaultValue: "250000",
      },
      {
        name: "monthsBehind",
        label: "Months Behind on Payments",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "juniorLiens",
        label: "Second Mortgages/HELOCs?",
        type: "select",
        options: [
          "No - only one mortgage",
          "Yes - second mortgage exists",
          "Yes - HELOC exists",
          "Yes - multiple junior liens",
          "Not sure"
        ],
        defaultValue: "No - only one mortgage",
      },
      {
        name: "hardshipType",
        label: "Type of Hardship",
        type: "select",
        options: [
          "Job loss/income reduction",
          "Medical emergency/disability",
          "Divorce/separation",
          "Business failure",
          "Death of wage earner",
          "Military deployment/relocation",
          "Adjustable rate increase",
          "Multiple hardships",
          "Other"
        ],
        defaultValue: "Job loss/income reduction",
      },
      {
        name: "propertyStatus",
        label: "Property Condition",
        type: "select",
        options: [
          "Good condition - well maintained",
          "Average condition - normal wear",
          "Poor condition - needs repairs",
          "Damaged/vandalized",
          "Not sure"
        ],
        defaultValue: "Average condition - normal wear",
      },
    ],
    results: [
      { label: "DIL Feasibility", isCurrency: false },
      { label: "Financial Impact Analysis", isCurrency: false },
      { label: "Recommended Strategy", isCurrency: false },
      { label: "Timeline & Process", isCurrency: false },
      { label: "Key Negotiation Points", isCurrency: false },
    ],
    calculate: (data: any) => {
      const mortgageBalance = Number(data.mortgageBalance) || 300000;
      const propertyValue = Number(data.propertyValue) || 250000;
      const monthsBehind = Number(data.monthsBehind) || 6;
      const juniorLiens = data.juniorLiens || "No - only one mortgage";
      const hardshipType = data.hardshipType || "Job loss/income reduction";
      const propertyStatus = data.propertyStatus || "Average condition - normal wear";
      
      const deficiency = mortgageBalance - propertyValue;
      const equityPosition = propertyValue - mortgageBalance;
      const ltvRatio = (mortgageBalance / propertyValue) * 100;
      
      let feasibilityScore = 50; // Base score
      let obstacles = [];
      let advantages = [];
      
      // Underwater assessment
      if (deficiency > 0) {
        feasibilityScore += 25;
        advantages.push(`✅ Property underwater by $${deficiency.toLocaleString()} - favors DIL`);
      } else {
        feasibilityScore -= 30;
        obstacles.push(`❌ Property has $${Math.abs(equityPosition).toLocaleString()} equity - lender unlikely to accept DIL`);
      }
      
      // Junior liens - biggest obstacle
      if (juniorLiens === "No - only one mortgage") {
        feasibilityScore += 30;
        advantages.push("✅ No junior liens - major requirement met");
      } else if (juniorLiens.includes("Yes")) {
        feasibilityScore -= 40;
        obstacles.push("🚩 MAJOR OBSTACLE: Junior liens exist - most lenders reject DIL with second mortgages/HELOCs");
      }
      
      // Months behind
      if (monthsBehind >= 3 && monthsBehind <= 12) {
        feasibilityScore += 15;
        advantages.push("✅ Delinquency timeline supports DIL request");
      } else if (monthsBehind > 12) {
        feasibilityScore -= 10;
        obstacles.push("⚠️ Very behind - foreclosure may be advanced, act quickly");
      } else if (monthsBehind < 3) {
        obstacles.push("📊 May need to try loan modification first");
      }
      
      // Property condition
      if (propertyStatus === "Good condition - well maintained" || propertyStatus === "Average condition - normal wear") {
        feasibilityScore += 10;
        advantages.push("✅ Property condition acceptable for DIL");
      } else if (propertyStatus === "Damaged/vandalized") {
        feasibilityScore -= 20;
        obstacles.push("🚩 Damaged property may cause lender to reject or demand repairs");
      }
      
      // Hardship legitimacy
      if (hardshipType.includes("Job loss") || hardshipType.includes("Medical") || hardshipType.includes("Death")) {
        feasibilityScore += 10;
        advantages.push("✅ Legitimate hardship - supports request");
      }
      
      // Determine feasibility
      let feasibility = "";
      if (feasibilityScore >= 75) {
        feasibility = "🟢 GOOD CANDIDATE for Deed in Lieu";
      } else if (feasibilityScore >= 50) {
        feasibility = "🟡 POSSIBLE but challenges exist";
      } else if (feasibilityScore >= 30) {
        feasibility = "🟠 DIFFICULT - significant obstacles";
      } else {
        feasibility = "🔴 UNLIKELY - consider alternatives";
      }
      
      const advantagesText = advantages.length > 0 ? advantages.join(" | ") : "Limited advantages";
      const obstaclesText = obstacles.length > 0 ? obstacles.join(" | ") : "No major obstacles identified";
      
      const feasibilityText = `${feasibility} | SCORE: ${feasibilityScore}/100 | ADVANTAGES: ${advantagesText} | OBSTACLES: ${obstaclesText}`;
      
      // Financial impact
      const arrears = monthsBehind * 2000; // Estimate $2K/month payment
      const estimatedCreditDrop = 100;
      const waitingPeriodYears = 3;
      
      const taxOnDeficiency = deficiency > 0 ? deficiency * 0.22 : 0; // Estimate 22% tax bracket
      
      let financialImpact = "";
      if (deficiency > 0) {
        financialImpact = `💰 DEFICIENCY: $${deficiency.toLocaleString()} owed above property value | ⚠️ CRITICAL: Must negotiate WRITTEN DEFICIENCY WAIVER or you could owe this amount | 📉 TAX IMPACT: If deficiency forgiven, potential tax bill ~$${taxOnDeficiency.toLocaleString()} (22% bracket) unless insolvency exception applies | 📊 CREDIT: ~${estimatedCreditDrop} point drop, ${waitingPeriodYears} year waiting period for new mortgage | 💵 ARREARS: $${arrears.toLocaleString()} in missed payments (typically forgiven in DIL) | 🏠 CASH FOR KEYS: May negotiate $2,000-$10,000 relocation assistance`;
      } else {
        financialImpact = `⚠️ EQUITY EXISTS: Property worth $${Math.abs(equityPosition).toLocaleString()} more than owed - DIL means forfeiting this equity | 🚫 LENDER UNLIKELY TO ACCEPT: Banks rarely accept DIL when property has equity (they'd rather you sell) | ✅ ALTERNATIVE: List property for sale, keep the equity instead of giving to bank`;
      }
      
      // Strategy recommendation
      let strategy = "";
      if (feasibilityScore >= 60 && deficiency > 0 && !juniorLiens.includes("Yes")) {
        strategy = "PROCEED WITH DIL REQUEST: (1) Contact lender's loss mitigation department immediately - don't wait, (2) Request DIL application package, (3) Prepare hardship letter explaining situation in detail, (4) Gather financials: last 2 years tax returns, 2 months pay stubs, 2 months bank statements, (5) List property for sale for 90-120 days (lender requirement) - price at/below market, (6) Document marketing efforts to show good faith, (7) When property doesn't sell, resubmit DIL request with proof, (8) CRITICAL: Hire attorney to review DIL agreement ($500-$1,500), (9) Negotiate deficiency waiver in writing - non-negotiable, (10) Request cash for keys ($2,000-$10,000), (11) Consult CPA about tax consequences BEFORE signing, (12) Get 60-90 day move-out period. DIL appears to be viable option for your situation.";
      } else if (juniorLiens.includes("Yes")) {
        strategy = "JUNIOR LIENS PROBLEM: (1) DIL very difficult with second mortgages/HELOCs - lenders typically refuse, (2) ALTERNATIVE 1: Pursue SHORT SALE instead - works better with multiple liens, (3) ALTERNATIVE 2: Negotiate junior lien release (second lender agrees to $0) - rare but possible, (4) ALTERNATIVE 3: Chapter 13 bankruptcy - can strip junior lien if property underwater, keeps home with repayment plan, (5) Contact HUD housing counselor for free guidance: 1-800-569-4287, (6) If short sale fails, THEN attempt DIL (first lender may pay off junior). Bottom line: Junior liens are dealbreaker for most DILs - explore other options first.";
      } else if (equityPosition > 0) {
        strategy = "DON'T DO DIL - YOU HAVE EQUITY: (1) SELL THE PROPERTY traditionally - you'll net $${Math.abs(equityPosition).toLocaleString()} instead of giving it to bank for free, (2) List with aggressive agent at competitive price, (3) Use equity to pay off mortgage and walk away with cash, (4) If can't sell quickly, try LOAN MODIFICATION - keep home and equity, (5) Last resort: Short sale (if equity isn't enough to cover all costs), (6) DIL makes NO SENSE when property has value - you're forfeiting money. Banks love when people DIL properties with equity - they get free money. Don't be that person.";
      } else if (monthsBehind < 3) {
        strategy = "TRY ALTERNATIVES FIRST: (1) LOAN MODIFICATION - Contact lender for payment reduction/term extension, submit hardship package, (2) FORBEARANCE - Request temporary payment pause (3-12 months), resume later with catch-up plan, (3) REFINANCE - If some equity, refinance to lower payment (requires current payments), (4) RENTAL - Rent out property, rental income covers mortgage, (5) Only pursue DIL after exhausting other options. You're not far enough behind yet - lender may not even consider DIL until 90+ days delinquent. Use this time to explore alternatives that let you keep home.";
      } else {
        strategy = "MIXED SITUATION: (1) Assess your goals - do you WANT to keep home or ready to let go?, (2) If want to keep: Pursue loan modification aggressively, get HUD counselor help, (3) If ready to leave: Try short sale first (90-120 days), then DIL if doesn't sell, (4) Understand credit impact is similar for DIL and short sale (~100 point drop), (5) DIL is faster (2-6 months) vs. short sale (3-9 months), (6) Both better than foreclosure (150+ point drop, 1-3 years), (7) Address obstacles noted above - especially property condition and junior liens, (8) Document hardship thoroughly - increases approval odds. Decision depends on whether you want to fight to keep home or need clean exit.";
      }
      
      // Timeline and process
      const timelineProcess = `⏰ DIL TIMELINE: 3-6 months typical | 📋 PROCESS: (1) Initial contact with lender (Week 1-2), (2) Submit DIL application + financials (Week 2-4), (3) List property for sale - lender required (Months 2-4 = 90-120 days), (4) Lender orders appraisal/BPO + title search (Month 4), (5) Lender decision on DIL request (Month 4-5), (6) Negotiate terms if approved (Month 5), (7) Sign agreement and deed (Month 6), (8) Vacate property (30-90 days after signing), (9) Debt released and property transferred | ⚖️ LEGAL: Hire attorney to review DIL agreement ($500-$1,500) - non-negotiable | 💼 TAX: Consult CPA about 1099-C and income tax on forgiven debt ($200-$500 consultation)`;
      
      // Key negotiation points
      let negotiationPoints = "";
      if (deficiency > 0) {
        negotiationPoints = `🎯 TOP PRIORITY: DEFICIENCY WAIVER - Get WRITTEN agreement that bank will NOT pursue $${deficiency.toLocaleString()} deficiency. This is absolutely critical - DO NOT sign without it. | 💵 CASH FOR KEYS: Request $${Math.min(10000, deficiency * 0.1).toLocaleString()}-$10,000 relocation assistance (lender may pay to get property quickly) | 📅 MOVE-OUT TIME: Negotiate 60-90 days instead of 30 days to move | 🏠 PROPERTY CONDITION: Clarify expectations - leave broom-clean, no requirement for repairs | 📊 CREDIT REPORTING: Request favorable language (rarely granted but worth asking) | 📄 1099-C TIMING: Ask for debt forgiveness in tax year beneficial to you | ✅ WRITTEN AGREEMENT: Everything in writing before signing deed - verbal promises worthless`;
      } else {
        negotiationPoints = `⚠️ WARNING: Since property has equity, DIL negotiations unlikely. Bank would prefer you sell and pay them in full. If you proceed anyway: (1) Lender has NO incentive to negotiate, (2) You're giving away $${Math.abs(equityPosition).toLocaleString()} for nothing, (3) Strongly reconsider - list property for sale instead, (4) Only scenario where this makes sense: extreme hardship preventing sale + need immediate exit. Otherwise, sell the property and keep your equity!`;
      }

      return [
        { label: "DIL Feasibility", value: feasibilityText, isCurrency: false },
        { label: "Financial Impact Analysis", value: financialImpact, isCurrency: false },
        { label: "Recommended Strategy", value: strategy, isCurrency: false },
        { label: "Timeline & Process", value: timelineProcess, isCurrency: false },
        { label: "Key Negotiation Points", value: negotiationPoints, isCurrency: false },
      ];
    },
  },
};
