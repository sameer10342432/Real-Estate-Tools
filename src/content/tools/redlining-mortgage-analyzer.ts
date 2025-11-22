import { CalculatorContent } from '@/types';

export const REDLINING_MORTGAGE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Redlining (Mortgage) Analyzer',
  description: 'Detect modern redlining practices where lenders deny or restrict mortgages based on neighborhood demographics rather than credit worthiness',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'redlining-mortgage-analyzer',
  article: {
    title: "Understanding Redlining - Discriminatory Lending Practices and Your Rights",
    content: `
    <h2>What is Redlining?</h2>
    <p>Redlining is the discriminatory practice where lenders refuse to provide mortgages or offer less favorable terms to borrowers in certain neighborhoods based on the racial or ethnic composition of those areas, rather than on the creditworthiness of individual applicants. The term comes from the literal red lines drawn on maps to denote areas where banks would not invest.</p>
    
    <h3>Historical Background</h3>
    <p>Redlining has deep historical roots:</p>
    <ul>
      <li><strong>1930s-1960s:</strong> Federal Housing Administration (FHA) created "residential security maps" with red lines marking predominantly Black neighborhoods as "hazardous" for lending</li>
      <li><strong>Systemic Denial:</strong> Banks refused mortgages in redlined areas regardless of applicant qualifications</li>
      <li><strong>Wealth Gap Creation:</strong> Practice prevented Black families from building homeownership wealth for generations</li>
      <li><strong>Neighborhood Decline:</strong> Lack of investment led to deterioration of redlined communities</li>
      <li><strong>Fair Housing Act 1968:</strong> Made redlining illegal, but discriminatory patterns persist</li>
    </ul>
    
    <h3>Modern Redlining Tactics</h3>
    <p>Today's redlining is more subtle but still harmful:</p>
    <ul>
      <li><strong>Denial Patterns:</strong> Higher mortgage denial rates in minority neighborhoods for equally qualified applicants</li>
      <li><strong>Higher Rates:</strong> Charging higher interest rates/fees in certain ZIP codes</li>
      <li><strong>Limited Products:</strong> Not offering certain loan products in specific areas</li>
      <li><strong>Branch Deserts:</strong> Closing branches in minority neighborhoods while opening in white areas</li>
      <li><strong>Marketing Discrimination:</strong> Directing predatory loans to minority communities while promoting prime loans elsewhere</li>
      <li><strong>Appraisal Bias:</strong> Systematically undervaluing homes in minority neighborhoods</li>
      <li><strong>Reverse Redlining:</strong> Targeting minority areas for predatory high-cost loans</li>
    </ul>
    
    <h3>Red Flags of Possible Redlining</h3>
    <p>Watch for these warning signs:</p>
    <ul>
      <li>Loan denial despite good credit, income, and down payment</li>
      <li>Lender says they "don't service that area" or ZIP code</li>
      <li>Required to pay higher rates/fees than similarly qualified buyers elsewhere</li>
      <li>Lender suggests you look in "different neighborhoods"</li>
      <li>Property appraises significantly lower than comparable homes in different areas</li>
      <li>Lender discourages applications for homes in certain neighborhoods</li>
      <li>Unusual documentation requirements not asked of others</li>
      <li>Long delays or "lost" applications for properties in certain areas</li>
    </ul>
    
    <h3>Laws Prohibiting Redlining</h3>
    <ul>
      <li><strong>Fair Housing Act (1968):</strong> Prohibits housing discrimination based on race, color, religion, national origin, sex, disability, familial status</li>
      <li><strong>Equal Credit Opportunity Act (1974):</strong> Prohibits credit discrimination</li>
      <li><strong>Home Mortgage Disclosure Act (1975):</strong> Requires lenders to report lending data to detect patterns</li>
      <li><strong>Community Reinvestment Act (1977):</strong> Requires banks to serve all communities fairly</li>
      <li><strong>State Fair Lending Laws:</strong> Additional protections in many states</li>
    </ul>
    
    <h3>Reverse Redlining - The Flip Side</h3>
    <p>Reverse redlining is targeting minority communities for predatory loans:</p>
    <ul>
      <li><strong>Subprime Steering:</strong> Pushing borrowers who qualify for prime loans into expensive subprime mortgages</li>
      <li><strong>Excessive Fees:</strong> Charging inflated origination fees and closing costs</li>
      <li><strong>Prepayment Penalties:</strong> Trapping borrowers in high-cost loans</li>
      <li><strong>Balloon Payments:</strong> Offering unsustainable payment structures</li>
      <li><strong>Yield Spread Premiums:</strong> Brokers earn more by placing borrowers in higher-rate loans</li>
    </ul>
    
    <h3>How to Detect Redlining</h3>
    <p>Steps to identify if you're being redlined:</p>
    <ol>
      <li><strong>Compare Rates:</strong> Get quotes from multiple lenders for same property</li>
      <li><strong>Apply Multiple Places:</strong> If one lender denies, try others</li>
      <li><strong>Request Denial Reason:</strong> Lender must provide specific written reason</li>
      <li><strong>Check HMDA Data:</strong> Review lender's approval/denial rates by neighborhood at CFPB website</li>
      <li><strong>Get Second Appraisal:</strong> If appraisal seems low, request another</li>
      <li><strong>Document Everything:</strong> Keep all communications, applications, denials</li>
      <li><strong>Compare Similar Applicants:</strong> Research if others with your qualifications got approved</li>
    </ol>
    
    <h3>Your Rights as a Borrower</h3>
    <ul>
      <li>Right to apply for mortgage regardless of neighborhood</li>
      <li>Right to be judged on individual creditworthiness, not area demographics</li>
      <li>Right to written explanation of denial within 30 days</li>
      <li>Right to access your credit report referenced in denial</li>
      <li>Right to same rates/terms as similarly qualified borrowers</li>
      <li>Right to file complaint if you suspect discrimination</li>
      <li>Right to sue lender for discriminatory practices</li>
    </ul>
    
    <h3>What to Do If You Suspect Redlining</h3>
    <ol>
      <li><strong>Document Thoroughly:</strong> Save all paperwork, emails, notes from conversations</li>
      <li><strong>Get Denial Letter:</strong> Lender must provide written adverse action notice</li>
      <li><strong>Request Specifics:</strong> Ask exactly why you were denied or given worse terms</li>
      <li><strong>Apply to Other Lenders:</strong> See if multiple lenders have same issue with that property/area</li>
      <li><strong>Check HMDA Data:</strong> Review lender's lending patterns at consumerfinance.gov/hmda</li>
      <li><strong>File Complaint:</strong> Report to CFPB, HUD, state attorney general</li>
      <li><strong>Consult Attorney:</strong> Fair lending lawyers can evaluate your case</li>
      <li><strong>Contact Fair Housing Group:</strong> Local organizations provide free investigation</li>
    </ol>
    
    <h3>Filing a Redlining Complaint</h3>
    <p>Multiple agencies accept complaints:</p>
    <ul>
      <li><strong>Consumer Financial Protection Bureau:</strong> consumerfinance.gov/complaint or 855-411-2372</li>
      <li><strong>HUD Office of Fair Housing:</strong> HUD.gov/fairhousing or 800-669-9777</li>
      <li><strong>Federal Reserve (for banks):</strong> Federal Reserve consumer help</li>
      <li><strong>FDIC (for state banks):</strong> FDIC consumer response center</li>
      <li><strong>OCC (for national banks):</strong> HelpWithMyBank.gov</li>
      <li><strong>State Attorney General:</strong> Consumer protection division</li>
      <li><strong>State Banking Regulator:</strong> Oversees state-chartered banks</li>
    </ul>
    
    <h3>Evidence to Collect</h3>
    <ul>
      <li>Loan application with timestamp</li>
      <li>Denial letter with stated reasons</li>
      <li>Credit reports showing your qualifications</li>
      <li>Income documentation proving ability to pay</li>
      <li>Property appraisal and comparable sales</li>
      <li>Communications with loan officer (emails, notes)</li>
      <li>HMDA data showing lender's approval patterns</li>
      <li>Statements from others denied in same neighborhood</li>
      <li>Approvals you received from other lenders for same property</li>
    </ul>
    
    <h3>Penalties for Redlining</h3>
    <p>Lenders caught redlining face serious consequences:</p>
    <ul>
      <li><strong>Civil Penalties:</strong> Millions in fines from federal regulators</li>
      <li><strong>Compensatory Damages:</strong> Payment to victims for actual losses</li>
      <li><strong>Punitive Damages:</strong> Additional penalties to punish and deter</li>
      <li><strong>Injunctive Relief:</strong> Court orders to change lending practices</li>
      <li><strong>Loan Subsidies:</strong> Required to offer favorable loans in affected areas</li>
      <li><strong>Community Investment:</strong> Mandated investment in previously redlined neighborhoods</li>
      <li><strong>Public Disclosure:</strong> Settlement terms made public, damaging reputation</li>
    </ul>
    
    <h3>Recent Redlining Cases</h3>
    <ul>
      <li><strong>Wells Fargo (2022):</strong> $3.7M settlement for redlining in Philadelphia</li>
      <li><strong>Trustmark National Bank (2023):</strong> $5M settlement for redlining in Memphis</li>
      <li><strong>Cadence Bank (2023):</strong> $4M for avoiding lending in Black neighborhoods</li>
      <li><strong>Lakeland Bank (2022):</strong> $10M for redlining Latino/Black neighborhoods in NJ</li>
      <li><strong>Numerous Ongoing Cases:</strong> CFPB and DOJ actively investigating many lenders</li>
    </ul>
    
    <h3>Alternatives If Denied</h3>
    <p>Options if you experience lending discrimination:</p>
    <ul>
      <li>Apply with other lenders - approval rates vary widely</li>
      <li>Use FHA/VA loans with more flexible requirements</li>
      <li>Explore community development financial institutions (CDFIs)</li>
      <li>Check local/state homebuyer assistance programs</li>
      <li>Consider credit unions with Community Reinvestment obligations</li>
      <li>Work with HUD-approved housing counselors for guidance</li>
      <li>Improve specific issues cited in denial letter</li>
    </ul>
    
    <h3>Resources and Support</h3>
    <ul>
      <li><strong>CFPB:</strong> consumerfinance.gov | 855-411-2372</li>
      <li><strong>HUD Fair Housing:</strong> HUD.gov/fairhousing | 800-669-9777</li>
      <li><strong>National Fair Housing Alliance:</strong> nationalfairhousing.org</li>
      <li><strong>HMDA Data:</strong> ffiec.gov/hmda - Research lender patterns</li>
      <li><strong>Local Fair Lending Groups:</strong> Free investigation and legal help</li>
      <li><strong>HUD Housing Counselors:</strong> Free homebuying guidance</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "creditScore",
        label: "Your Credit Score",
        type: "number",
        placeholder: "720",
        defaultValue: "720",
      },
      {
        name: "debtToIncome",
        label: "Debt-to-Income Ratio (%)",
        type: "number",
        placeholder: "35",
        defaultValue: "35",
      },
      {
        name: "downPayment",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "lenderResponse",
        label: "Lender's Response",
        type: "select",
        options: [
          "Denied - no specific reason given",
          "Denied - cited neighborhood/location",
          "Denied - required higher down payment for this area",
          "Approved - but higher rate than expected",
          "Approved - but restricted loan products",
          "Lender won't service this ZIP code/area",
          "Still pending/researching",
          "Approved - standard terms"
        ],
        defaultValue: "Still pending/researching",
      },
      {
        name: "neighborhoodType",
        label: "Property Neighborhood Demographics",
        type: "select",
        options: [
          "Predominantly minority (Black/Hispanic/Asian)",
          "Racially diverse/mixed",
          "Predominantly white",
          "Don't know demographics"
        ],
        defaultValue: "Don't know demographics",
      },
      {
        name: "otherLenders",
        label: "Applied to Other Lenders?",
        type: "select",
        options: [
          "Yes - all denied for same property",
          "Yes - some approved, some denied",
          "Yes - all approved elsewhere",
          "No - only this lender",
          "Haven't applied yet"
        ],
        defaultValue: "Haven't applied yet",
      },
    ],
    results: [
      { label: "Redlining Risk Level", isCurrency: false },
      { label: "Your Qualifications", isCurrency: false },
      { label: "Discrimination Indicators", isCurrency: false },
      { label: "Recommended Action", isCurrency: false },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const creditScore = Number(data.creditScore) || 720;
      const debtToIncome = Number(data.debtToIncome) || 35;
      const downPayment = Number(data.downPayment) || 20;
      const lenderResponse = data.lenderResponse || "Still pending/researching";
      const neighborhoodType = data.neighborhoodType || "Don't know demographics";
      const otherLenders = data.otherLenders || "Haven't applied yet";
      
      let riskScore = 0;
      let qualificationLevel = "";
      let indicators = [];
      
      // Assess borrower qualifications
      if (creditScore >= 740 && debtToIncome <= 36 && downPayment >= 20) {
        qualificationLevel = "💪 Excellent - Prime borrower, should easily qualify";
      } else if (creditScore >= 680 && debtToIncome <= 43 && downPayment >= 10) {
        qualificationLevel = "✅ Good - Qualified for conventional mortgages";
      } else if (creditScore >= 620 && debtToIncome <= 50 && downPayment >= 5) {
        qualificationLevel = "📊 Fair - Should qualify for FHA or some conventional";
      } else {
        qualificationLevel = "⚠️ Marginal - May need to improve qualifications";
      }
      
      const isWellQualified = creditScore >= 680 && debtToIncome <= 43 && downPayment >= 10;
      
      // Assess lender response for discrimination
      if (lenderResponse === "Denied - cited neighborhood/location") {
        riskScore += 50;
        indicators.push("🚩 MAJOR RED FLAG: Citing location is potential redlining");
      } else if (lenderResponse === "Lender won't service this ZIP code/area") {
        riskScore += 60;
        indicators.push("🚩 CRITICAL: Refusing to lend in area is clear redlining signal");
      } else if (lenderResponse === "Denied - required higher down payment for this area") {
        riskScore += 45;
        indicators.push("🚩 RED FLAG: Different requirements by area suggests discrimination");
      } else if (lenderResponse === "Approved - but higher rate than expected" && isWellQualified) {
        riskScore += 30;
        indicators.push("⚠️ WARNING: Higher rates for qualified borrowers may indicate bias");
      } else if (lenderResponse === "Approved - but restricted loan products") {
        riskScore += 25;
        indicators.push("⚠️ CAUTION: Limited products in certain areas can be discrimination");
      } else if (lenderResponse === "Denied - no specific reason given") {
        riskScore += 20;
        indicators.push("⚠️ Suspicious: Lender must provide written reason for denial");
      }
      
      // Neighborhood demographics correlation
      if (neighborhoodType === "Predominantly minority (Black/Hispanic/Asian)" && riskScore > 0) {
        riskScore += 20;
        indicators.push("📊 PATTERN: Denial in minority area strengthens redlining concern");
      }
      
      // Other lender comparison (key evidence)
      if (otherLenders === "Yes - all approved elsewhere" && lenderResponse.includes("Denied")) {
        riskScore += 40;
        indicators.push("💥 STRONG EVIDENCE: Other lenders approved - suggests this lender's bias");
      } else if (otherLenders === "Yes - some approved, some denied") {
        riskScore += 15;
        indicators.push("📊 Mixed results: Some variation normal, but document patterns");
      } else if (otherLenders === "Yes - all denied for same property") {
        riskScore -= 10; // Less likely redlining if all deny
        indicators.push("🤔 Consistent denials: May be property issue, not neighborhood discrimination");
      }
      
      // Borrower qualification impact
      if (isWellQualified && riskScore >= 40) {
        riskScore += 15;
        indicators.push("⚖️ IMPORTANT: Your strong qualifications make discrimination more evident");
      }
      
      let riskLevel = "";
      if (riskScore >= 70) {
        riskLevel = "🔴 HIGH RISK - Strong Redlining Indicators";
      } else if (riskScore >= 50) {
        riskLevel = "🟠 ELEVATED RISK - Possible Redlining";
      } else if (riskScore >= 30) {
        riskLevel = "🟡 MODERATE RISK - Some Concerns";
      } else if (riskScore >= 10) {
        riskLevel = "🟢 LOW RISK - Minor Issues";
      } else {
        riskLevel = "✅ NO RISK - Normal Process";
      }
      
      const indicatorsText = indicators.length > 0 ? indicators.join(" | ") : "No discrimination indicators detected";
      
      // Recommendations
      let recommendation = "";
      if (riskScore >= 70) {
        recommendation = "STRONG REDLINING EVIDENCE: (1) File complaint with CFPB immediately at consumerfinance.gov/complaint or 855-411-2372, (2) File with HUD at 800-669-9777, (3) Request written denial letter citing specific reasons, (4) Check HMDA data at ffiec.gov/hmda to see lender's approval patterns, (5) Contact local fair housing organization for free investigation, (6) Consult fair lending attorney - you may have lawsuit, (7) Apply with other lenders - document approval/denial differences. This appears to be illegal discrimination.";
      } else if (riskScore >= 50) {
        recommendation = "POSSIBLE REDLINING: (1) Apply to 2-3 other lenders for same property and compare results, (2) Request specific written reason for denial/higher rate, (3) Research lender's HMDA data for patterns, (4) Document everything - dates, conversations, emails, (5) If pattern emerges, file CFPB and HUD complaints, (6) Contact fair housing center for consultation, (7) Ask lender to reconsider decision with written appeal. You have strong qualifications - push back.";
      } else if (riskScore >= 30) {
        recommendation = "SOME CONCERNS: (1) Get written explanation from lender for their decision, (2) Shop at least 2 other lenders - compare rates and terms, (3) If you're denied, request adverse action notice, (4) Check your credit report for accuracy, (5) Research if property has issues (title, condition, appraisal), (6) Monitor situation - if pattern continues, file complaint, (7) Consider working with mortgage broker who can access multiple lenders.";
      } else {
        recommendation = "LOW/NO DISCRIMINATION RISK: Continue normal mortgage process. General advice: (1) Shop multiple lenders for best rate (3+ quotes), (2) Get pre-approved before house hunting, (3) Review credit report for errors, (4) Save all documentation, (5) Know your rights - lenders must judge you individually, not by neighborhood, (6) If denied, you'll receive written explanation within 30 days, (7) Keep learning about fair lending protections.";
      }
      
      // Next steps
      let nextSteps = "";
      if (riskScore >= 50) {
        nextSteps = "File complaints with CFPB (consumerfinance.gov) and HUD (800-669-9777) | Research lender's lending patterns at ffiec.gov/hmda | Apply to other lenders | Contact fair housing organization | Consult fair lending attorney";
      } else if (riskScore >= 30) {
        nextSteps = "Get written denial/rate explanation | Shop other lenders | Review HMDA data | Document all interactions | Prepare to file complaint if pattern emerges";
      } else {
        nextSteps = "Continue normal application process | Shop multiple lenders | Keep documentation | Know your fair lending rights | Monitor for any discrimination signs";
      }

      return [
        { label: "Redlining Risk Level", value: riskLevel, isCurrency: false },
        { label: "Your Qualifications", value: qualificationLevel, isCurrency: false },
        { label: "Discrimination Indicators", value: indicatorsText, isCurrency: false },
        { label: "Recommended Action", value: recommendation, isCurrency: false },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
