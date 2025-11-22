import { CalculatorContent } from "@/types";

export const tilaDisclosureAnalyzer: CalculatorContent = {
  title: "TILA Disclosure Analyzer",
  description: "Analyze Truth in Lending Act (TILA) disclosure compliance. Check APR calculations, fee disclosures, and timing requirements for mortgage lending.",
  icon: 'Icon',
  category: "Real Estate Compliance",
  slug: "tila-disclosure-analyzer",
  article: {
    title: "TILA Disclosure Analyzer - Truth in Lending Act Compliance Checker",
    content: `
    ## What Is TILA?

    The Truth in Lending Act (TILA) is a federal law that requires lenders to disclose the true cost of credit to borrowers in a clear, standardized format. TILA aims to promote informed use of consumer credit by requiring clear disclosure of key terms.

    ### Purpose of TILA

    **Consumer Protection:**
    - Enables comparison shopping among lenders
    - Protects against inaccurate and unfair credit billing
    - Provides cancellation rights (right of rescission)
    - Requires clear disclosure of finance charges
    - Mandates uniform calculation of Annual Percentage Rate (APR)

    **Transparency Requirements:**
    - Full disclosure of credit costs
    - Standardized terms and definitions
    - Clear payment schedules
    - Total interest charges over loan life

    ### Key TILA Requirements

    **Loan Estimate (LE):**
    Must be provided within 3 business days of loan application, including:
    - Loan amount and interest rate
    - Estimated monthly payment
    - Estimated closing costs
    - Annual Percentage Rate (APR)
    - Loan features (prepayment penalties, balloon payments)
    - Estimated cash needed to close

    **Closing Disclosure (CD):**
    Must be provided at least 3 business days before closing, including:
    - Final loan terms and projected payments
    - Closing costs and who pays them
    - Loan costs breakdown
    - Other costs breakdown
    - Calculating cash to close
    - Summaries of transaction details

    ### APR Disclosure Requirements

    **What Is APR?**
    Annual Percentage Rate represents the true yearly cost of credit, including:
    - Interest rate
    - Origination fees
    - Discount points
    - Mortgage insurance (if required)
    - Other finance charges

    **APR Tolerance:**
    - APR must be within 0.125% of disclosed amount
    - If exceeded, new disclosures required
    - Redisclosure triggers 3-day waiting period

    **APR vs. Interest Rate:**
    - Interest rate is cost of borrowing principal
    - APR includes interest + fees
    - APR is always equal to or higher than interest rate

    ### TRID Rule (TILA-RESPA Integrated Disclosure)

    **Combined Disclosures:**
    TRID integrated TILA and RESPA requirements into:
    - Loan Estimate (replaced GFE and early TIL disclosure)
    - Closing Disclosure (replaced HUD-1 and final TIL disclosure)

    **Timing Requirements:**
    - Loan Estimate: Within 3 business days of application
    - Closing Disclosure: At least 3 business days before consummation
    - Changes trigger redisclosure and new 3-day waiting period

    ### Finance Charges Under TILA

    **Must Be Included in Finance Charge:**
    - Interest
    - Origination fees
    - Discount points
    - Mortgage insurance premiums
    - PMI (if required)
    - Loan-level price adjustments
    - Underwriting fees
    - Document preparation fees
    - Application fees (if retained)

    **Excluded from Finance Charge:**
    - Title fees (in most states)
    - Appraisal fees
    - Credit report fees
    - Recording fees
    - Transfer taxes
    - Owner's title insurance
    - Survey fees
    - Home inspection fees

    ### Right of Rescission

    **3-Day Cancellation Right:**
    For refinances and home equity loans on primary residence:
    - Borrower has 3 business days to cancel
    - Countdown starts after latest of:
      * Closing
      * Receipt of TILA disclosures
      * Receipt of two copies of rescission notice
    - Lender cannot disburse funds until rescission period expires
    - Saturdays count as business days

    **Transactions With No Rescission Right:**
    - Purchase money loans (home purchases)
    - Refinances of investment properties
    - Second homes (some cases)
    - New credit from current lender (some cases)

    **Extended Rescission Rights:**
    If proper disclosures not provided:
    - Right extends up to 3 years
    - Borrower can rescind and receive refund of finance charges
    - Serious lender liability

    ### TILA Violations and Penalties

    **Civil Penalties:**
    - Actual damages plus statutory damages
    - Statutory damages: Lesser of $4,000 or:
      * Individual actions: 2x finance charge
      * Class actions: $500,000 or 1% of creditor's net worth
    - Attorney's fees and costs
    - Equitable and declaratory relief

    **Criminal Penalties:**
    - Willful violations: Up to $5,000 fine
    - Up to 1 year imprisonment
    - Both fine and imprisonment

    **Regulatory Penalties:**
    - CFPB enforcement actions
    - Consent orders
    - Compliance monitoring
    - License revocation

    ### Common TILA Violations

    **Disclosure Timing Violations:**
    - Failing to provide Loan Estimate within 3 days
    - Not providing Closing Disclosure 3 days before closing
    - Missing redisclosure deadlines
    - Inaccurate business day calculations

    **APR Calculation Errors:**
    - Excluding required fees from APR
    - Mathematical errors in APR calculation
    - Exceeding APR tolerance thresholds
    - Misclassifying fees

    **Content Errors:**
    - Omitting required disclosures
    - Inaccurate payment amounts
    - Wrong loan terms disclosed
    - Missing or incorrect total of payments
    - Failure to disclose prepayment penalties

    **Rescission Violations:**
    - Not providing rescission notices
    - Disbursing funds before rescission period ends
    - Inadequate rescission notice content
    - Failure to honor rescission request

    ### Changed Circumstances

    **When Redisclosure Required:**
    - APR increases by more than 0.125%
    - Loan product changes
    - Creditor uses different settlement service provider
    - Fees outside tolerance limits
    - Consumer requests changes

    **Tolerance Categories:**
    - **Zero Tolerance:** Cannot increase
      * Creditor fees
      * Affiliated service provider fees (if consumer couldn't shop)
    - **10% Cumulative Tolerance:** Limited increase
      * Fees for services consumer could shop for but didn't
    - **Good Faith:** Unlimited increase if in good faith
      * Fees for services consumer selected
      * Prepaid interest
      * Property insurance premiums
      * Transfer taxes

    ### TILA-RESPA Integration

    **Overlapping Requirements:**
    - TILA focuses on credit terms
    - RESPA focuses on settlement services
    - TRID combines both into unified disclosures
    - Single set of forms (LE and CD)

    **Compliance Challenges:**
    - Must satisfy both TILA and RESPA
    - Different penalty structures
    - Coordination between requirements
    - Ongoing regulatory updates

    ### Special TILA Rules

    **High-Cost Mortgages (Section 32/HOEPA):**
    Mortgages exceeding certain thresholds trigger additional protections:
    - 3-day waiting period after receiving disclosures
    - Prohibition on prepayment penalties
    - Restrictions on balloon payments
    - Counseling requirements
    - Additional disclosure requirements

    **Higher-Priced Mortgage Loans (HPMLs):**
    Loans with APR exceeding benchmark require:
    - Escrow account for taxes and insurance
    - Additional appraisal protections
    - Restrictions on certain features

    ### Advertising Requirements

    **Regulation Z Advertising Rules:**
    If you advertise specific credit terms, must disclose:
    - APR
    - Payment amount
    - Payment terms
    - Total of payments
    - All triggering terms
    - Clear and conspicuous disclosure

    **Triggering Terms:**
    If ad includes amount of down payment, payment amount, number of payments, or period of repayment:
    - Must disclose all material terms
    - Cannot be misleading
    - Must use actual examples

    ### How This Analyzer Works

    This tool evaluates:

    - **Timing Compliance:** Whether disclosures met deadline requirements
    - **APR Accuracy:** Whether APR calculation is within tolerance
    - **Content Completeness:** Whether all required disclosures provided
    - **Fee Disclosure:** Whether fees properly disclosed and categorized
    - **Rescission Compliance:** Whether rescission rights properly communicated
    - **Tolerance Analysis:** Whether fee changes exceeded limits
    - **Overall Risk Assessment:** Likelihood of TILA violation

    ### CFPB Enforcement Priorities

    The Consumer Financial Protection Bureau focuses on:
    - Timing violations
    - APR calculation errors
    - Failure to provide required disclosures
    - Rescission violations
    - Tolerance limit violations
    - Advertising violations

    ### Best Practices for TILA Compliance

    **For Lenders:**
    1. Implement robust compliance management systems
    2. Train staff thoroughly on TILA requirements
    3. Use compliant technology and forms
    4. Conduct regular audits
    5. Document changed circumstances
    6. Monitor tolerance limits throughout process
    7. Verify APR calculations
    8. Ensure timely delivery of disclosures

    **For Loan Officers:**
    1. Understand disclosure timing rules
    2. Collect complete application information early
    3. Communicate changes promptly
    4. Don't make promises inconsistent with disclosures
    5. Ensure borrowers understand key terms
    6. Document all borrower communications

    **For Closing Agents:**
    1. Review Closing Disclosure for accuracy
    2. Verify 3-day waiting period satisfied
    3. Ensure all parties received required docs
    4. Don't proceed if disclosures incorrect
    5. Coordinate with lender on any changes

    ### Record Retention

    **TILA requires lenders to keep:**
    - Loan Estimate: 3 years
    - Closing Disclosure: 5 years
    - Evidence of delivery: 3 years
    - APR calculations and supporting documents: 2 years
    - Compliance policies and procedures: Duration of program

    ### Recent TILA Updates

    **Know Before You Owe:**
    - TRID rule effective October 2015
    - Integrated TILA-RESPA disclosures
    - Enhanced consumer understanding
    - Stricter timing requirements

    **Ongoing Changes:**
    - Regular CFPB updates and clarifications
    - Court interpretations
    - Regulatory guidance
    - Industry best practices evolution

    ### When to Seek Legal Counsel

    Consult a TILA attorney when:
    - Facing CFPB investigation
    - Receiving borrower complaints about disclosures
    - Implementing new loan programs
    - Uncertain about disclosure requirements
    - Dealing with complex transactions
    - Responding to examination findings
    - Defending against TILA lawsuit
  `,
  },
  calculator: {
    fields: [
      {
        name: 'disclosureType',
        label: 'Disclosure Type Being Analyzed',
        type: 'select',
        options: [
          'Loan Estimate (LE)',
          'Closing Disclosure (CD)',
          'Both LE and CD',
        ],
        defaultValue: 'Closing Disclosure (CD)',
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'disclosedAPR',
        label: 'Disclosed APR (%)',
        type: 'number',
        defaultValue: 6.75,
      },
      {
        name: 'actualAPR',
        label: 'Actual Calculated APR (%)',
        type: 'number',
        defaultValue: 6.8,
      },
      {
        name: 'timingCompliance',
        label: 'Disclosure Timing',
        type: 'select',
        options: [
          'Loan Estimate: Provided within 3 business days of application',
          'Closing Disclosure: Provided 3+ business days before closing',
          'Disclosure provided late (after deadline)',
          'Disclosure not yet provided',
        ],
        defaultValue: 'Closing Disclosure: Provided 3+ business days before closing',
      },
      {
        name: 'changedCircumstances',
        label: 'Changed Circumstances During Process',
        type: 'select',
        options: [
          'No changed circumstances',
          'Changed circumstances - proper redisclosure made',
          'Changed circumstances - no redisclosure made',
          'Material changes without changed circumstances justification',
        ],
        defaultValue: 'No changed circumstances',
      },
      {
        name: 'toleranceViolations',
        label: 'Fee Tolerance Violations',
        type: 'select',
        options: [
          'No tolerance violations',
          'Minor violation within cure period',
          'Zero-tolerance fees increased',
          '10% cumulative tolerance exceeded',
          'Multiple tolerance violations',
        ],
        defaultValue: 'No tolerance violations',
      },
      {
        name: 'rescissionCompliance',
        label: 'Rescission Rights (if applicable)',
        type: 'select',
        options: [
          'Not applicable - purchase transaction',
          'Rescission notices properly provided',
          'Rescission notices incomplete',
          'No rescission notices provided',
          'Funds disbursed before rescission period expired',
        ],
        defaultValue: 'Not applicable - purchase transaction',
      },
      {
        name: 'disclosureCompleteness',
        label: 'Disclosure Completeness',
        type: 'select',
        options: [
          'All required disclosures complete and accurate',
          'Minor omissions or errors',
          'Material errors in key terms',
          'Multiple missing required disclosures',
        ],
        defaultValue: 'All required disclosures complete and accurate',
      },
    ],
    results: [
      { label: 'Overall TILA Compliance Status', isText: true },
      { label: 'APR Variance from Disclosed', isPercentage: true },
      { label: 'APR Tolerance Status', isText: true },
      { label: 'Timing Compliance Status', isText: true },
      { label: 'Tolerance Compliance Status', isText: true },
      { label: 'Rescission Compliance Status', isText: true },
      { label: 'Critical Violations Found', isNumeric: true },
      { label: 'Compliance Risk Level', isText: true },
      { label: 'Potential Statutory Damages', isCurrency: true },
      { label: 'Primary Compliance Issues', isText: true },
      { label: 'Recommended Corrective Actions', isText: true },
    ],
    calculate: (values) => {
      const {
        loanAmount,
        disclosedAPR,
        actualAPR,
        timingCompliance,
        changedCircumstances,
        toleranceViolations,
        rescissionCompliance,
        disclosureCompleteness,
      } = values;

      let riskScore = 0;
      let criticalViolations = 0;
      const issues: string[] = [];

      // APR variance
      const aprVariance = Math.abs(actualAPR - disclosedAPR);
      let aprStatus = '';
      
      if (aprVariance <= 0.125) {
        aprStatus = '✓ COMPLIANT - APR within 0.125% tolerance';
      } else if (aprVariance <= 0.25) {
        aprStatus = '⚠ VIOLATION - APR exceeds tolerance by ' + aprVariance.toFixed(3) + '%';
        riskScore += 8;
        criticalViolations += 1;
        issues.push('APR exceeds 0.125% tolerance');
      } else {
        aprStatus = '🔴 SERIOUS VIOLATION - APR exceeds tolerance by ' + aprVariance.toFixed(3) + '%';
        riskScore += 10;
        criticalViolations += 1;
        issues.push('APR significantly exceeds tolerance');
      }

      // Timing compliance
      let timingStatus = '';
      if (timingCompliance.includes('within 3 business days') || timingCompliance.includes('3+ business days before')) {
        timingStatus = '✓ COMPLIANT - Timely disclosure';
      } else if (timingCompliance.includes('provided late')) {
        timingStatus = '🔴 VIOLATION - Late disclosure';
        riskScore += 9;
        criticalViolations += 1;
        issues.push('Disclosure timing violation');
      } else {
        timingStatus = '🔴 CRITICAL - Disclosure not provided';
        riskScore += 10;
        criticalViolations += 1;
        issues.push('Missing required disclosure');
      }

      // Changed circumstances
      if (changedCircumstances.includes('no redisclosure made')) {
        riskScore += 7;
        criticalViolations += 1;
        issues.push('Failed to redisclose changed circumstances');
      } else if (changedCircumstances.includes('Material changes without')) {
        riskScore += 8;
        criticalViolations += 1;
        issues.push('Material changes without proper justification');
      }

      // Tolerance violations
      let toleranceStatus = '';
      if (toleranceViolations.includes('No tolerance violations')) {
        toleranceStatus = '✓ COMPLIANT - All fees within tolerance';
      } else if (toleranceViolations.includes('Minor violation')) {
        toleranceStatus = '⚠ Minor violation - within cure period';
        riskScore += 3;
      } else if (toleranceViolations.includes('Zero-tolerance fees increased')) {
        toleranceStatus = '🔴 VIOLATION - Zero-tolerance fees exceeded';
        riskScore += 10;
        criticalViolations += 1;
        issues.push('Zero-tolerance fee violation');
      } else if (toleranceViolations.includes('10% cumulative')) {
        toleranceStatus = '🔴 VIOLATION - 10% cumulative tolerance exceeded';
        riskScore += 8;
        criticalViolations += 1;
        issues.push('10% tolerance violation');
      } else {
        toleranceStatus = '🔴 SERIOUS - Multiple tolerance violations';
        riskScore += 10;
        criticalViolations += 2;
        issues.push('Multiple tolerance violations');
      }

      // Rescission compliance
      let rescissionStatus = '';
      if (rescissionCompliance.includes('Not applicable')) {
        rescissionStatus = 'N/A - Purchase transaction';
      } else if (rescissionCompliance.includes('properly provided')) {
        rescissionStatus = '✓ COMPLIANT - Proper rescission notices';
      } else if (rescissionCompliance.includes('incomplete')) {
        rescissionStatus = '⚠ VIOLATION - Incomplete rescission notices';
        riskScore += 7;
        criticalViolations += 1;
        issues.push('Inadequate rescission notices');
      } else if (rescissionCompliance.includes('No rescission')) {
        rescissionStatus = '🔴 SERIOUS VIOLATION - Missing rescission notices';
        riskScore += 10;
        criticalViolations += 1;
        issues.push('Missing rescission notices (3-year extension risk)');
      } else if (rescissionCompliance.includes('Funds disbursed before')) {
        rescissionStatus = '🔴 CRITICAL VIOLATION - Premature fund disbursement';
        riskScore += 10;
        criticalViolations += 1;
        issues.push('Funds disbursed before rescission period expired');
      }

      // Disclosure completeness
      if (disclosureCompleteness.includes('Material errors')) {
        riskScore += 8;
        criticalViolations += 1;
        issues.push('Material errors in key terms');
      } else if (disclosureCompleteness.includes('Multiple missing')) {
        riskScore += 10;
        criticalViolations += 2;
        issues.push('Multiple missing required disclosures');
      } else if (disclosureCompleteness.includes('Minor omissions')) {
        riskScore += 3;
      }

      // Overall status
      let overallStatus = '';
      if (criticalViolations >= 3) {
        overallStatus = '🔴 SIGNIFICANT NON-COMPLIANCE - Multiple critical TILA violations';
      } else if (criticalViolations >= 1) {
        overallStatus = '🔴 NON-COMPLIANT - Critical TILA violation(s) present';
      } else if (riskScore >= 5) {
        overallStatus = '🟡 PARTIAL COMPLIANCE - Some violations present';
      } else if (riskScore >= 2) {
        overallStatus = '🟡 MOSTLY COMPLIANT - Minor issues only';
      } else {
        overallStatus = '✓ COMPLIANT - Meets TILA requirements';
      }

      // Risk level
      let riskLevel = '';
      if (riskScore >= 25) {
        riskLevel = '🔴 SEVERE - High risk of penalties and litigation';
      } else if (riskScore >= 15) {
        riskLevel = '🔴 HIGH - Significant enforcement risk';
      } else if (riskScore >= 8) {
        riskLevel = '🟡 MODERATE - Some compliance exposure';
      } else {
        riskLevel = '🟢 LOW - Minimal compliance risk';
      }

      // Potential damages
      // Statutory damages: lesser of $4,000 or 2x finance charge
      const estimatedFinanceCharge = loanAmount * 0.02; // Simplified
      const statutoryDamages = Math.min(4000, estimatedFinanceCharge * 2);

      // Primary issues
      const primaryIssues = issues.length > 0 
        ? issues.slice(0, 3).join('; ')
        : 'No significant compliance issues';

      // Recommendations
      let recommendations = '';
      if (criticalViolations >= 2) {
        recommendations = '🚨 URGENT: Do not proceed. Cure all violations. Provide corrected disclosures. Consult TILA attorney immediately.';
      } else if (criticalViolations === 1) {
        recommendations = '⚠ Cure violation before closing. Issue corrected disclosures. Reset waiting periods. Document corrections.';
      } else if (riskScore >= 5) {
        recommendations = 'Address identified issues. Enhance quality control. Provide supplemental disclosures if needed.';
      } else {
        recommendations = '✓ Maintain current compliance practices. Proceed with transaction.';
      }

      return {
        'Overall TILA Compliance Status': overallStatus,
        'APR Variance from Disclosed': aprVariance,
        'APR Tolerance Status': aprStatus,
        'Timing Compliance Status': timingStatus,
        'Tolerance Compliance Status': toleranceStatus,
        'Rescission Compliance Status': rescissionStatus,
        'Critical Violations Found': criticalViolations,
        'Compliance Risk Level': riskLevel,
        'Potential Statutory Damages': statutoryDamages,
        'Primary Compliance Issues': primaryIssues,
        'Recommended Corrective Actions': recommendations,
      };
    },
  },
  metaTitle: "TILA Disclosure Analyzer - Truth in Lending Act Compliance Checker",
  metaDescription: "Free TILA disclosure analyzer. Check Truth in Lending Act compliance, verify APR calculations, assess timing requirements, analyze fee tolerances, and ensure proper rescission rights disclosure.",
};
