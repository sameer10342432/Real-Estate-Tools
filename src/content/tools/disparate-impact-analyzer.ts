import { CalculatorContent } from '@/types';

export const DISPARATE_IMPACT_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Disparate Impact (Fair Housing) Analyzer',
  description: 'Analyze rental policies for potential disparate impact discrimination under Fair Housing laws',
  icon: 'Icon',
  category: 'Rental Property',
  slug: 'disparate-impact-analyzer',
  metaTitle: 'Disparate Impact Analyzer | Fair Housing Compliance',
  metaDescription: 'Analyze rental policies for disparate impact discrimination. Check screening criteria, income requirements, and Fair Housing Act compliance.',
  metaKeywords: 'disparate impact, Fair Housing Act, housing discrimination, criminal background screening, source of income discrimination, rental screening policies, Section 8 discrimination, protected classes, HUD guidelines, fair housing compliance',
  article: {
    title: "Understanding Disparate Impact in Fair Housing",
    content: `
    <h2>Disparate Impact Discrimination</h2>
    <p>Disparate impact (also called "disparate effect" or "adverse impact") is a legal theory that holds landlords liable for discrimination even when policies appear neutral on their face but disproportionately harm protected classes.</p>
    
    <h3>What Is Disparate Impact?</h3>
    <p>Disparate impact occurs when a seemingly neutral policy, practice, or requirement has an unjustified discriminatory effect on people in a protected class, even without intentional discrimination.</p>
    
    <h4>Two Types of Discrimination:</h4>
    <ul>
      <li><strong>Disparate Treatment (Intentional):</strong> Treating someone differently because of protected class (e.g., "No families with children")</li>
      <li><strong>Disparate Impact (Unintentional):</strong> Neutral policy that disproportionately excludes protected class (e.g., minimum income requirement that excludes minorities)</li>
    </ul>
    
    <h3>Protected Classes Under Fair Housing Act</h3>
    <p>Federal law protects these classes:</p>
    <ul>
      <li>Race</li>
      <li>Color</li>
      <li>National origin</li>
      <li>Religion</li>
      <li>Sex (including gender identity, sexual orientation)</li>
      <li>Familial status (families with children under 18)</li>
      <li>Disability</li>
    </ul>
    
    <p>Many states/cities add:</p>
    <ul>
      <li>Source of income (Section 8, disability benefits)</li>
      <li>Age</li>
      <li>Sexual orientation (now included under "sex" federally)</li>
      <li>Gender identity (now included under "sex" federally)</li>
      <li>Marital status</li>
      <li>Military/veteran status</li>
    </ul>
    
    <h3>Common Policies with Disparate Impact Risk</h3>
    
    <h4>1. Criminal History Screening</h4>
    <p><strong>Why Risky:</strong> Disproportionately excludes Black and Latino applicants due to racial disparities in criminal justice system.</p>
    <ul>
      <li><strong>High Risk:</strong> Blanket bans on anyone with criminal record</li>
      <li><strong>High Risk:</strong> Denying arrests without convictions</li>
      <li><strong>Lower Risk:</strong> Individualized assessment of convictions</li>
      <li><strong>Lower Risk:</strong> Considering time since offense, nature of crime, evidence of rehabilitation</li>
      <li><strong>Safe:</strong> Only denying for crimes that threaten property safety (violent crimes, arson, drug manufacturing)</li>
    </ul>
    
    <h4>HUD Guidance (2016):</h4>
    <ul>
      <li>Arrests are not proof of criminal activity - cannot deny based on arrest alone</li>
      <li>Must conduct individualized assessment</li>
      <li>Must consider nature, severity, recency of crime</li>
      <li>Cannot have blanket bans</li>
      <li>Must show screening is necessary for tenant safety/property protection</li>
    </ul>
    
    <h4>2. Minimum Income Requirements</h4>
    <p><strong>Why Risky:</strong> Can disproportionately exclude racial minorities, families with children, and persons with disabilities.</p>
    <ul>
      <li><strong>High Risk:</strong> Requiring income 4-5x rent</li>
      <li><strong>Moderate Risk:</strong> Requiring income 3x rent</li>
      <li><strong>Lower Risk:</strong> Requiring income 2.5x rent</li>
      <li><strong>Must:</strong> Count all lawful income sources (including Section 8, disability benefits, alimony)</li>
    </ul>
    
    <h4>3. Source of Income Discrimination</h4>
    <p><strong>Why Risky:</strong> Refusing Section 8 or other subsidy vouchers disproportionately affects racial minorities.</p>
    <ul>
      <li><strong>Illegal in Many States/Cities:</strong> CA, OR, WA, NYC, DC, NJ, MA, CT, and 20+ other jurisdictions</li>
      <li><strong>High Risk:</strong> Blanket "No Section 8" policy</li>
      <li><strong>Cannot:</strong> Refuse because of voucher processing time</li>
      <li><strong>Cannot:</strong> Charge higher deposit because of voucher</li>
      <li><strong>Must:</strong> Treat voucher income same as employment income</li>
    </ul>
    
    <h4>4. Credit Score Requirements</h4>
    <p><strong>Why Risky:</strong> Minorities statistically have lower credit scores due to systemic factors.</p>
    <ul>
      <li><strong>High Risk:</strong> Requiring 700+ credit score</li>
      <li><strong>Moderate Risk:</strong> Requiring 650+ credit score</li>
      <li><strong>Lower Risk:</strong> Flexible screening considering explanations</li>
      <li><strong>Best Practice:</strong> Consider rental history more than credit score</li>
    </ul>
    
    <h4>5. "No Children" or Child-Limiting Policies</h4>
    <p><strong>Why Illegal:</strong> Direct familial status discrimination (also disparate treatment).</p>
    <ul>
      <li><strong>Illegal:</strong> "Adults only" buildings (unless qualified senior housing)</li>
      <li><strong>Illegal:</strong> Limiting number of children</li>
      <li><strong>Illegal:</strong> Higher deposit for families with children</li>
      <li><strong>Illegal:</strong> Steering families away from certain units/floors</li>
    </ul>
    
    <h4>6. Occupancy Standards</h4>
    <p><strong>Why Risky:</strong> Too-strict occupancy limits disproportionately exclude families with children.</p>
    <ul>
      <li><strong>Federal Standard:</strong> 2 persons per bedroom is reasonable (HUD guideline)</li>
      <li><strong>High Risk:</strong> 1 person per bedroom limit</li>
      <li><strong>Moderate Risk:</strong> Stricter than 2 per bedroom</li>
      <li><strong>Safe:</strong> 2 persons per bedroom + some flexibility</li>
      <li><strong>Must Consider:</strong> Size of bedrooms, overall unit size, local housing codes</li>
    </ul>
    
    <h4>7. English Language Requirements</h4>
    <p><strong>Why Risky:</strong> Disproportionately excludes national origin minorities.</p>
    <ul>
      <li><strong>Illegal:</strong> Requiring English-speaking only tenants</li>
      <li><strong>Illegal:</strong> Refusing applications not in English (must provide translation)</li>
      <li><strong>Legal:</strong> Requiring someone who can receive notices in English (interpreter, family member)</li>
    </ul>
    
    <h4>8. Student Housing Restrictions</h4>
    <p><strong>Why Risky:</strong> "No students" can disproportionately affect national origin (international students) and age.</p>
    <ul>
      <li><strong>High Risk:</strong> Blanket "no students" policy</li>
      <li><strong>Legal:</strong> Enforcing noise/party rules equally</li>
      <li><strong>Legal:</strong> Requiring proof of income (students must meet same requirements)</li>
    </ul>
    
    <h4>9. Employment Requirements</h4>
    <p><strong>Why Risky:</strong> Can exclude persons with disabilities, elderly on fixed income, stay-at-home parents.</p>
    <ul>
      <li><strong>Illegal:</strong> Requiring current employment (must accept other lawful income)</li>
      <li><strong>Legal:</strong> Verifying sufficient income from any lawful source</li>
      <li><strong>Must Accept:</strong> Social Security, disability benefits, retirement, alimony, child support</li>
    </ul>
    
    <h4>10. "Good Neighbors" or Subjective Standards</h4>
    <p><strong>Why Risky:</strong> Vague standards allow implicit bias to affect decisions.</p>
    <ul>
      <li><strong>High Risk:</strong> Subjective "good fit" assessment</li>
      <li><strong>High Risk:</strong> "Professional" appearance requirement</li>
      <li><strong>Safe:</strong> Objective, specific criteria applied equally</li>
    </ul>
    
    <h3>The Three-Part Test for Disparate Impact</h3>
    
    <h4>Step 1: Plaintiff's Burden</h4>
    <p>Tenant/applicant must show:</p>
    <ul>
      <li>Landlord's policy/practice exists</li>
      <li>Policy has statistically significant discriminatory effect on protected class</li>
    </ul>
    
    <h4>Step 2: Landlord's Burden</h4>
    <p>If plaintiff succeeds, landlord must prove:</p>
    <ul>
      <li>Policy is necessary for legitimate, nondiscriminatory business purpose</li>
      <li><strong>Examples:</strong> Tenant safety, property protection, legal compliance</li>
    </ul>
    
    <h4>Step 3: Plaintiff's Rebuttal</h4>
    <p>If landlord proves business necessity, plaintiff can still win by showing:</p>
    <ul>
      <li>There is a less discriminatory alternative that serves same purpose</li>
      <li>Landlord refuses to adopt the alternative</li>
    </ul>
    
    <h3>Defenses Against Disparate Impact Claims</h3>
    
    <h4>Valid Defenses:</h4>
    <ul>
      <li><strong>Business Necessity:</strong> Policy is necessary for legitimate business reason (tenant safety, property protection)</li>
      <li><strong>No Alternative:</strong> No less discriminatory alternative exists</li>
      <li><strong>Uniformly Applied:</strong> Policy is applied consistently to everyone</li>
      <li><strong>Legal Requirement:</strong> Policy is required by law</li>
    </ul>
    
    <h4>Invalid Defenses:</h4>
    <ul>
      <li>"That's how we've always done it"</li>
      <li>"Other tenants prefer it this way"</li>
      <li>"I didn't intend to discriminate"</li>
      <li>"The policy affects everyone equally" (if impact is disparate)</li>
      <li>Insurance company requirements (must get different insurance)</li>
    </ul>
    
    <h3>Best Practices to Avoid Disparate Impact</h3>
    
    <h4>1. Review All Policies for Discriminatory Effect</h4>
    <ul>
      <li>Analyze who is excluded by each policy</li>
      <li>Consider whether protected classes are disproportionately affected</li>
      <li>Question whether policy is truly necessary</li>
    </ul>
    
    <h4>2. Use Objective, Transparent Criteria</h4>
    <ul>
      <li>Written, specific screening criteria</li>
      <li>Applied uniformly to all applicants</li>
      <li>Related to legitimate business needs</li>
      <li>No subjective "gut feeling" decisions</li>
    </ul>
    
    <h4>3. Criminal History Screening</h4>
    <ul>
      <li>Don't ask about arrests (only convictions)</li>
      <li>Conduct individualized assessment</li>
      <li>Consider time since offense (e.g., 7 years)</li>
      <li>Consider nature of crime (only deny for safety-related crimes)</li>
      <li>Allow applicant to explain and provide rehabilitation evidence</li>
    </ul>
    
    <h4>4. Income Requirements</h4>
    <ul>
      <li>Keep requirements reasonable (2.5-3x rent maximum)</li>
      <li>Accept ALL lawful income sources</li>
      <li>Don't discriminate against voucher holders</li>
      <li>Consider total household income, not just one person</li>
    </ul>
    
    <h4>5. Occupancy Standards</h4>
    <ul>
      <li>Follow HUD guideline: 2 persons per bedroom</li>
      <li>Consider overall unit size</li>
      <li>Don't limit based on age of occupants</li>
    </ul>
    
    <h4>6. Documentation</h4>
    <ul>
      <li>Document business reasons for all policies</li>
      <li>Keep records of how policies are applied</li>
      <li>Document denial reasons (objective, specific)</li>
      <li>Keep statistics on applicant demographics and outcomes</li>
    </ul>
    
    <h3>Penalties for Disparate Impact Violations</h3>
    <ul>
      <li>HUD complaints and investigations</li>
      <li>Lawsuits by rejected applicants or tenants</li>
      <li>Class action lawsuits</li>
      <li>Damages: Actual damages, emotional distress, punitive damages</li>
      <li>Attorneys fees for prevailing plaintiffs</li>
      <li>Federal fines: $16,000+ first violation, $65,000+ repeat violations</li>
      <li>Injunction to change policies</li>
      <li>Mandatory Fair Housing training</li>
      <li>Monitoring by HUD</li>
    </ul>
    
    <h3>Examples: Risky vs Safer Policies</h3>
    
    <h4>❌ HIGH RISK:</h4>
    <ul>
      <li>"No felons" blanket ban</li>
      <li>"No Section 8" policy (illegal in many states)</li>
      <li>Requiring 4x rent income</li>
      <li>700+ credit score requirement</li>
      <li>"Adults only" building</li>
      <li>"Professional tenants only"</li>
      <li>"Must be employed"</li>
      <li>"No college students"</li>
    </ul>
    
    <h4>✅ LOWER RISK:</h4>
    <ul>
      <li>Individualized criminal screening (recent violent crimes only)</li>
      <li>Accept all lawful income sources including vouchers</li>
      <li>2.5-3x rent income requirement</li>
      <li>Flexible credit review with explanations</li>
      <li>2 persons per bedroom occupancy standard</li>
      <li>Objective qualification criteria applied equally</li>
      <li>Verify sufficient income (from any legal source)</li>
      <li>Enforce behavior rules equally (noise, parties)</li>
    </ul>
    
    <h3>Recent Cases and Trends</h3>
    <ul>
      <li><strong>Criminal history:</strong> Increasing scrutiny of blanket criminal bans</li>
      <li><strong>Source of income:</strong> Growing number of jurisdictions banning voucher discrimination</li>
      <li><strong>Algorithms:</strong> Automated screening tools being challenged for disparate impact</li>
      <li><strong>Citizenship:</strong> Requiring citizenship or specific immigration status is illegal national origin discrimination</li>
    </ul>
    
    <h3>When to Consult an Attorney</h3>
    <ul>
      <li>Before implementing new screening policies</li>
      <li>If policies are challenged</li>
      <li>If HUD complaint is filed</li>
      <li>If statistical analysis shows disparate outcomes</li>
      <li>Before making changes to accommodate protected classes</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "policyType",
        label: "Policy Being Analyzed",
        type: "select",
        options: [
          { value: "Criminal history screening", label: "Criminal history screening" },
          { value: "Minimum income requirement", label: "Minimum income requirement" },
          { value: "Source of income restrictions", label: "Source of income restrictions" },
          { value: "Credit score requirement", label: "Credit score requirement" },
          { value: "Occupancy limits", label: "Occupancy limits" },
          { value: "Employment requirement", label: "Employment requirement" },
          { value: "Student restrictions", label: "Student restrictions" },
          { value: "Other", label: "Other" }
        ],
        defaultValue: "Criminal history screening",
      },
      {
        name: "policyDetails",
        label: "Policy Details",
        type: "text",
        placeholder: "e.g., Require 3x rent income, No felonies, etc.",
        defaultValue: "",
      },
      {
        name: "businessJustification",
        label: "Business Justification",
        type: "select",
        options: [
          { value: "Tenant safety", label: "Tenant safety" },
          { value: "Property protection", label: "Property protection" },
          { value: "Legal requirement", label: "Legal requirement" },
          { value: "Financial risk reduction", label: "Financial risk reduction" },
          { value: "No clear justification", label: "No clear justification" }
        ],
        defaultValue: "Financial risk reduction",
      },
      {
        name: "appliedUniformly",
        label: "Applied Uniformly to All Applicants?",
        type: "select",
        options: [
          { value: "Yes - Applied to everyone equally", label: "Yes - Applied to everyone equally" },
          { value: "No - Applied selectively", label: "No - Applied selectively" },
          { value: "Unsure", label: "Unsure" }
        ],
        defaultValue: "Yes - Applied to everyone equally",
      },
    ],
    results: [
      { label: "Disparate Impact Risk Level", isCurrency: false },
      { label: "Protected Class Likely Affected", isCurrency: false },
      { label: "Business Justification Strength", isCurrency: false },
      { label: "Legal Compliance", isCurrency: false },
      { label: "Recommended Action", isCurrency: false },
    ],
    calculate: (data: any) => {
      const policyType = data.policyType || "Criminal history screening";
      const businessJustification = data.businessJustification || "Financial risk reduction";
      const appliedUniformly = data.appliedUniformly || "Yes - Applied to everyone equally";

      let riskLevel = "🟡 Moderate Risk";
      let protectedClass = "Various";
      let justificationStrength = "Moderate";
      let legalCompliance = "⚠️ Requires Review";
      let recommendedAction = "Review policy with Fair Housing attorney";

      // Analyze risk based on policy type
      if (policyType === "Criminal history screening") {
        riskLevel = "🔴 HIGH RISK";
        protectedClass = "Race (Black, Latino), National Origin";
        
        if (businessJustification === "Tenant safety" || businessJustification === "Property protection") {
          justificationStrength = "Strong (if limited to relevant crimes)";
          legalCompliance = "⚠️ MUST use individualized assessment";
          recommendedAction = "Revise to: (1) Only consider convictions, not arrests, (2) Individualized assessment, (3) Only safety-related crimes, (4) Consider time since offense";
        } else {
          justificationStrength = "Weak";
          legalCompliance = "❌ Likely violates Fair Housing Act";
          recommendedAction = "URGENT: Revise policy immediately - blanket bans likely illegal";
        }
      } else if (policyType === "Minimum income requirement") {
        protectedClass = "Race, Familial Status (families with children), Disability";
        
        if (businessJustification === "Financial risk reduction") {
          justificationStrength = "Moderate";
          riskLevel = "🟡 Moderate Risk (if 3x rent or less)";
          legalCompliance = "⚠️ Must accept ALL lawful income sources";
          recommendedAction = "Keep at 2.5-3x rent max, accept vouchers/benefits, count all household income";
        } else {
          riskLevel = "🔴 HIGH RISK";
          justificationStrength = "Weak";
          recommendedAction = "Justify requirement with financial analysis, reduce if possible";
        }
      } else if (policyType === "Source of income restrictions") {
        riskLevel = "🔴 HIGH RISK / ILLEGAL in many jurisdictions";
        protectedClass = "Race, National Origin, Disability";
        justificationStrength = "Weak (usually not valid justification)";
        legalCompliance = "❌ Illegal in CA, OR, WA, NYC, DC, NJ, MA, CT, and 20+ jurisdictions";
        recommendedAction = "STOP: Check local laws - likely ILLEGAL. Must accept Section 8 and other lawful income";
      } else if (policyType === "Credit score requirement") {
        riskLevel = "🟡 Moderate-High Risk";
        protectedClass = "Race, National Origin";
        
        if (businessJustification === "Financial risk reduction") {
          justificationStrength = "Moderate";
          legalCompliance = "⚠️ Must not be only factor";
          recommendedAction = "Use flexible screening, consider explanations, emphasize rental history over credit score";
        } else {
          justificationStrength = "Weak";
          recommendedAction = "Reconsider necessity of strict credit requirements";
        }
      } else if (policyType === "Occupancy limits") {
        riskLevel = "🔴 HIGH RISK (if stricter than 2 per bedroom)";
        protectedClass = "Familial Status (families with children)";
        justificationStrength = "Moderate (must justify if stricter than HUD standard)";
        legalCompliance = "⚠️ Must follow HUD 2-per-bedroom guideline";
        recommendedAction = "Use HUD standard: 2 persons per bedroom minimum, consider unit size";
      } else if (policyType === "Employment requirement") {
        riskLevel = "🔴 HIGH RISK";
        protectedClass = "Disability, Age (elderly), Familial Status";
        justificationStrength = "Weak";
        legalCompliance = "❌ Likely illegal - must accept other income sources";
        recommendedAction = "REVISE: Remove employment requirement, verify income from any lawful source";
      } else if (policyType === "Student restrictions") {
        riskLevel = "🔴 HIGH RISK";
        protectedClass = "National Origin (international students), Age";
        justificationStrength = "Weak (cannot categorically exclude)";
        legalCompliance = "❌ Blanket student bans likely illegal";
        recommendedAction = "Remove student restriction, enforce behavior rules equally for all tenants";
      }

      // Adjust for uniform application
      if (appliedUniformly === "No - Applied selectively") {
        riskLevel = "🔴 EXTREME RISK - Selective application suggests disparate treatment";
        legalCompliance = "❌ Likely violates Fair Housing Act";
        recommendedAction = "CRITICAL: Apply all policies uniformly or face discrimination claims";
      }

      return [
        { label: "Disparate Impact Risk Level", value: riskLevel, isCurrency: false },
        { label: "Protected Class Likely Affected", value: protectedClass, isCurrency: false },
        { label: "Business Justification Strength", value: justificationStrength, isCurrency: false },
        { label: "Legal Compliance", value: legalCompliance, isCurrency: false },
        { label: "Recommended Action", value: recommendedAction, isCurrency: false },
      ];
    },
  },
};
