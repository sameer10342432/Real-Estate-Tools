import { CalculatorContent } from "@/types";

export const respaViolationChecker: CalculatorContent = {
  title: "RESPA Violation Checker",
  description: "Check for RESPA (Real Estate Settlement Procedures Act) violations in real estate transactions. Analyze kickbacks, referral fees, and settlement service compliance.",
  icon: 'Icon',
  category: "Real Estate Compliance",
  slug: "respa-violation-checker",
  article: {
    title: "RESPA Violation Checker - Real Estate Settlement Procedures Act Compliance",
    content: `
    ## What Is RESPA?

    RESPA (Real Estate Settlement Procedures Act) is a federal law that regulates the real estate settlement process to protect consumers from abusive practices. It requires disclosure of settlement costs and prohibits kickbacks and referral fees that increase costs.

    ### Who Must Comply with RESPA?

    **Covered Transactions:**
    - Purchase loans for residential properties (1-4 units)
    - Refinance loans
    - Home equity lines of credit
    - Reverse mortgages
    - Property improvement loans
    - Assumptions where lender's consent is required

    **Covered Parties:**
    - Mortgage lenders and brokers
    - Real estate agents and brokers
    - Title insurance companies
    - Settlement service providers
    - Home inspectors
    - Appraisers
    - Credit reporting agencies
    - Any party providing settlement services

    ### Core RESPA Prohibitions

    **Section 8(a) - Kickbacks and Referral Fees:**
    Prohibits giving or receiving anything of value for referrals of settlement service business.

    **Section 8(b) - Fee Splitting:**
    Prohibits splitting fees for services not actually performed.

    **Section 8(c) - Unearned Fees:**
    Prohibits charging fees for services not actually provided.

    **Section 9 - Seller Required Services:**
    Prohibits sellers from requiring buyers to use specific title insurance companies.

    ### What Constitutes a RESPA Violation?

    **Illegal Kickbacks:**
    - Real estate agent receives fee for referring client to lender
    - Lender pays real estate agent for loan referrals
    - Title company gives gifts to real estate agents for referrals
    - Builder requires use of affiliated lender in exchange for discounts
    - Settlement service provider pays for referrals

    **Illegal Fee Splitting:**
    - Two parties split fee but only one provided service
    - Marking up third-party fees beyond actual cost
    - Charging co-settlement fees without providing proportional service

    **Unearned Fees:**
    - Charging for services never provided
    - Excessive fees for minimal work
    - Duplicate charges for same service

    **Illegal Seller Requirements:**
    - Requiring buyer to use seller's title company
    - Conditioning sale on use of specific settlement provider
    - Requiring use of seller's lender as condition of purchase

    ### Legal vs. Illegal Payments

    **LEGAL - These Are Allowed:**
    - Payment for goods or services actually provided
    - Payment for marketing or advertising services
    - Normal compensation for services rendered
    - Affiliated business arrangements (with proper disclosure)
    - Promotional items of de minimis value ($25 or less)
    - Employer payment to employee
    - Returns on ownership interest

    **ILLEGAL - These Violate RESPA:**
    - Cash or gifts for referrals
    - Free or discounted services in exchange for referrals
    - Cross-referrals between service providers
    - Prizes, vacations, or entertainment for referrals
    - "Marketing agreements" that are really referral fees
    - Pad ding invoices to provide kickbacks

    ### Affiliated Business Arrangements (AfBAs)

    **What Are AfBAs?**
    Arrangements where a settlement service provider refers customers to an affiliated company.

    **Requirements to Be Legal:**
    1. **Disclosure:** Written disclosure to consumer at time of referral (AfBA Disclosure Statement)
    2. **No Requirement:** Consumer cannot be required to use affiliate
    3. **Return on Investment Only:** Affiliate can only receive return on ownership interest, not per-referral payments
    4. **Other Providers Available:** Consumer must be informed they can shop for other providers

    **Common AfBAs:**
    - Real estate brokerage owns title company
    - Lender owns appraisal company
    - Builder owns mortgage company

    ### RESPA Disclosure Requirements

    **Good Faith Estimate (GFE) / Loan Estimate:**
    Lender must provide detailed estimate of settlement costs within 3 business days of application.

    **HUD-1 Settlement Statement / Closing Disclosure:**
    Itemized list of all charges at closing, provided at least 3 business days before closing.

    **AfBA Disclosure Statement:**
    Required when referring to affiliated service provider.

    **Servicing Disclosure Statement:**
    Disclosure of loan servicing transfer history and policies.

    ### Penalties for RESPA Violations

    **Criminal Penalties:**
    - Up to $10,000 fine per violation
    - Up to 1 year imprisonment
    - Both fine and imprisonment possible

    **Civil Penalties:**
    - Private right of action
    - Consumer can sue for 3x the amount of kickback
    - Plus attorney's fees and costs
    - Statute of limitations: 1 year from violation

    **Administrative Penalties:**
    - CFPB enforcement actions
    - State licensing board sanctions
    - Loss of professional license
    - Mandatory compliance monitoring
    - Reputation damage

    **Class Action Risk:**
    - Systematic violations can lead to class action lawsuits
    - Massive liability exposure
    - Punitive damages possible

    ### Red Flags for RESPA Violations

    **Marketing Services Agreements (MSAs):**
    - Payment for "marketing" that's really for referrals
    - Fees disproportionate to actual marketing value
    - No documented marketing activities
    - Payments correlate with number of referrals

    **Captive Reinsurance Arrangements:**
    - Title agent shares premiums with real estate agent
    - Insurance premiums used as disguised kickbacks
    - Complex offshore structures

    **Yield Spread Premiums (YSPs):**
    - Lender pays broker for higher-rate loan
    - Not always illegal, but requires disclosure
    - Can be used to disguise kickbacks

    **Sham Business Arrangements:**
    - Payments for no actual service
    - Service marked up excessively
    - Related parties creating circular payments

    ### Safe Harbor Provisions

    **Employer-Employee Exemption:**
    Employers can pay employees for referrals without RESPA violation.

    **Bona Fide Salary/Compensation:**
    Normal employee compensation and bonuses are allowed.

    **Promotional Items:**
    Items worth $25 or less per year per person are permissible.

    **Cooperative Advertising:**
    Shared advertising costs proportional to benefit are allowed.

    ### How to Ensure RESPA Compliance

    **For Real Estate Agents:**
    1. Never accept referral fees from lenders or service providers
    2. Provide clients with multiple provider options
    3. Disclose all affiliations in writing
    4. Don't require use of preferred vendors
    5. Keep documentation of all payments received

    **For Lenders:**
    1. Provide timely, accurate disclosures
    2. Don't pay for referrals
    3. Ensure marketing agreements are legitimate
    4. Disclose all affiliated business relationships
    5. Train staff on RESPA compliance

    **For Title Companies:**
    1. Don't pay for referrals
    2. Charge only for services actually provided
    3. Properly disclose affiliated relationships
    4. Avoid excessive promotional items or entertainment
    5. Ensure marketing payments are for actual marketing services

    **For Settlement Service Providers:**
    1. Understand what constitutes a referral fee
    2. Keep detailed records of services provided
    3. Don't participate in fee-splitting arrangements
    4. Disclose all business relationships
    5. Consult legal counsel on questionable arrangements

    ### How This Checker Works

    This tool evaluates:

    - **Referral Fee Analysis:** Whether payments constitute illegal kickbacks
    - **Fee Splitting Assessment:** Whether fee arrangements violate RESPA
    - **AfBA Compliance:** Whether affiliated business arrangements meet requirements
    - **Disclosure Adequacy:** Whether proper disclosures were provided
    - **Risk Scoring:** Overall compliance risk level
    - **Violation Likelihood:** Probability of RESPA violation
    - **Corrective Actions:** Steps to remediate issues

    ### Common RESPA Violation Scenarios

    **Scenario 1: Agent Steering for Kickbacks**
    Real estate agent receives $500 per referral from title company.
    - **Verdict:** CLEAR VIOLATION
    - **Penalty Risk:** Criminal and civil penalties

    **Scenario 2: Marketing Service Agreement**
    Title company pays real estate brokerage $5,000/month for "marketing services."
    - **Question:** Are actual marketing services being provided?
    - **Red Flag:** If payment correlates with referrals, likely violation

    **Scenario 3: Builder-Preferred Lender**
    Builder offers $10,000 discount if buyer uses builder's preferred lender.
    - **Analysis:** May violate RESPA if discount is conditioned on lender use
    - **Legal Alternative:** Offer discount regardless of lender, or properly structure AfBA

    **Scenario 4: Title Agent Reinsurance**
    Title agent shares premiums with real estate agent who refers business.
    - **Verdict:** HIGH RISK - Often considered disguised kickback
    - **Scrutiny:** Subject to CFPB enforcement

    ### CFPB Enforcement Priorities

    The Consumer Financial Protection Bureau actively enforces RESPA and focuses on:
    - Captive reinsurance schemes
    - Marketing services agreements
    - Affiliated business arrangement violations
    - Steering and kickbacks
    - Disclosure violations

    ### Recent RESPA Developments

    **TRID Rule (TILA-RESPA Integrated Disclosure):**
    - Combined RESPA and TILA disclosures
    - Loan Estimate replaces GFE
    - Closing Disclosure replaces HUD-1
    - Stricter timing requirements

    **Increased Enforcement:**
    - CFPB has increased RESPA enforcement
    - Higher penalties and settlements
    - More focus on systemic violations

    ### Defenses to RESPA Violations

    **Good Faith Reliance:**
    - Relied on advice of counsel
    - Believed arrangement was legal
    - Reasonable interpretation of law

    **Payment for Value:**
    - Actual services were provided
    - Payment was for legitimate services
    - Value was proportional to payment

    **Lack of Knowledge:**
    - No knowledge of referral
    - No agreement to exchange referrals
    - Coincidental business relationship

    ### When to Seek Legal Counsel

    Consult a RESPA attorney when:
    - Structuring affiliated business arrangements
    - Entering marketing services agreements
    - Accused of RESPA violation
    - Receiving CFPB inquiry or investigation
    - Creating referral or co-marketing programs
    - Unsure about compliance of business practice
  `,
  },
  calculator: {
    fields: [
      {
        name: 'scenarioType',
        label: 'Transaction Scenario Type',
        type: 'select',
        options: [
          'Referral fee payment',
          'Marketing services agreement',
          'Affiliated business arrangement',
          'Fee splitting arrangement',
          'Seller-required service provider',
          'Promotional items/gifts',
          'Other business arrangement',
        ],
        defaultValue: 'Referral fee payment',
      },
      {
        name: 'paymentAmount',
        label: 'Payment/Fee Amount ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'paymentFrequency',
        label: 'Payment Frequency',
        type: 'select',
        options: [
          'One-time',
          'Per transaction/referral',
          'Monthly retainer',
          'Quarterly',
          'Annual',
        ],
        defaultValue: 'Per transaction/referral',
      },
      {
        name: 'serviceProvided',
        label: 'Service Actually Provided in Exchange',
        type: 'select',
        options: [
          'No service - purely for referral',
          'Minimal service, disproportionate to payment',
          'Some legitimate service provided',
          'Substantial service proportional to payment',
          'Full service fully commensurate with payment',
        ],
        defaultValue: 'No service - purely for referral',
      },
      {
        name: 'disclosureProvided',
        label: 'Was Disclosure Provided to Consumer?',
        type: 'select',
        options: [
          'Yes - full written disclosure before transaction',
          'Yes - partial disclosure',
          'Verbal disclosure only',
          'No disclosure provided',
        ],
        defaultValue: 'No disclosure provided',
      },
      {
        name: 'relationshipType',
        label: 'Relationship Between Parties',
        type: 'select',
        options: [
          'Affiliated companies (common ownership)',
          'Employer-employee',
          'Independent businesses - no affiliation',
          'Joint venture partners',
          'Unclear/undisclosed relationship',
        ],
        defaultValue: 'Independent businesses - no affiliation',
      },
      {
        name: 'consumerChoice',
        label: 'Consumer Choice Regarding Service Provider',
        type: 'select',
        options: [
          'Consumer required to use specific provider',
          'Consumer pressured but not required',
          'Consumer given multiple options',
          'Consumer shopped freely',
        ],
        defaultValue: 'Consumer given multiple options',
      },
      {
        name: 'documentation',
        label: 'Documentation of Arrangement',
        type: 'select',
        options: [
          'Written agreement detailing services and compensation',
          'Informal written agreement',
          'Verbal agreement only',
          'No documented agreement',
        ],
        defaultValue: 'No documented agreement',
      },
    ],
    results: [
      { label: 'RESPA Violation Risk Level', isText: true },
      { label: 'Primary Violation Concerns', isText: true },
      { label: 'Compliance Score', isPercentage: true },
      { label: 'Section 8(a) Risk (Kickbacks)', isText: true },
      { label: 'Section 8(b) Risk (Fee Splitting)', isText: true },
      { label: 'Section 9 Risk (Required Services)', isText: true },
      { label: 'Potential Criminal Penalties', isCurrency: true },
      { label: 'Potential Civil Liability (3x damages)', isCurrency: true },
      { label: 'Recommended Corrective Actions', isText: true },
    ],
    calculate: (values) => {
      const {
        scenarioType,
        paymentAmount,
        paymentFrequency,
        serviceProvided,
        disclosureProvided,
        relationshipType,
        consumerChoice,
        documentation,
      } = values;

      let riskScore = 0;
      const concerns: string[] = [];

      // Scenario type scoring
      if (scenarioType.includes('Referral fee')) {
        riskScore += 8;
        concerns.push('Direct referral fee payment');
      } else if (scenarioType.includes('Marketing services')) {
        riskScore += 5;
        concerns.push('Marketing services agreement (high scrutiny)');
      } else if (scenarioType.includes('Fee splitting')) {
        riskScore += 7;
        concerns.push('Fee splitting arrangement');
      } else if (scenarioType.includes('Seller-required')) {
        riskScore += 9;
        concerns.push('Seller-required service provider');
      } else if (scenarioType.includes('Promotional')) {
        if (paymentAmount > 25) {
          riskScore += 4;
          concerns.push('Promotional items exceed $25 safe harbor');
        }
      }

      // Payment frequency risk
      if (paymentFrequency.includes('Per transaction')) {
        riskScore += 6;
        concerns.push('Per-transaction payments suggest kickback');
      } else if (paymentFrequency.includes('Monthly retainer')) {
        riskScore += 2;
      }

      // Service provided scoring
      if (serviceProvided.includes('No service')) {
        riskScore += 10;
        concerns.push('No service provided - clear violation');
      } else if (serviceProvided.includes('Minimal service')) {
        riskScore += 8;
        concerns.push('Service disproportionate to payment');
      } else if (serviceProvided.includes('Some legitimate')) {
        riskScore += 4;
      } else if (serviceProvided.includes('Substantial service')) {
        riskScore += 1;
      }

      // Disclosure scoring
      if (disclosureProvided.includes('No disclosure')) {
        riskScore += 5;
        concerns.push('No consumer disclosure');
      } else if (disclosureProvided.includes('Verbal')) {
        riskScore += 3;
        concerns.push('Inadequate disclosure (verbal only)');
      } else if (disclosureProvided.includes('partial')) {
        riskScore += 2;
      }

      // Relationship type
      if (relationshipType.includes('employer-employee')) {
        riskScore -= 5; // Safer under employer exemption
      } else if (relationshipType.includes('Affiliated companies')) {
        if (!disclosureProvided.includes('full written disclosure')) {
          riskScore += 4;
          concerns.push('AfBA without proper disclosure');
        }
      }

      // Consumer choice
      if (consumerChoice.includes('required')) {
        riskScore += 10;
        concerns.push('Consumer required to use provider');
      } else if (consumerChoice.includes('pressured')) {
        riskScore += 6;
        concerns.push('Consumer pressured to use provider');
      }

      // Documentation
      if (documentation.includes('No documented')) {
        riskScore += 4;
        concerns.push('No written documentation');
      } else if (documentation.includes('Verbal')) {
        riskScore += 3;
      }

      // Calculate risk level
      let riskLevel = '';
      if (riskScore >= 25) {
        riskLevel = '🔴 SEVERE - Clear RESPA violation likely';
      } else if (riskScore >= 15) {
        riskLevel = '🔴 HIGH - Substantial violation risk';
      } else if (riskScore >= 8) {
        riskLevel = '🟡 MODERATE - Compliance concerns present';
      } else if (riskScore >= 4) {
        riskLevel = '🟡 LOW-MODERATE - Some risk factors';
      } else {
        riskLevel = '✓ LOW - Appears compliant';
      }

      // Section-specific risks
      let section8aRisk = '';
      if (serviceProvided.includes('No service') && paymentFrequency.includes('Per transaction')) {
        section8aRisk = '🔴 HIGH - Likely kickback/referral fee violation';
      } else if (riskScore >= 10) {
        section8aRisk = '🟡 MODERATE - Potential kickback concerns';
      } else {
        section8aRisk = '✓ LOW - No apparent kickback';
      }

      let section8bRisk = '';
      if (scenarioType.includes('Fee splitting') && serviceProvided.includes('Minimal')) {
        section8bRisk = '🔴 HIGH - Unearned fee splitting likely';
      } else if (scenarioType.includes('Fee splitting')) {
        section8bRisk = '🟡 MODERATE - Verify services provided';
      } else {
        section8bRisk = '✓ LOW - No fee splitting';
      }

      let section9Risk = '';
      if (consumerChoice.includes('required')) {
        section9Risk = '🔴 HIGH - Required service provider violation';
      } else if (consumerChoice.includes('pressured')) {
        section9Risk = '🟡 MODERATE - Improper steering possible';
      } else {
        section9Risk = '✓ LOW - Consumer free choice';
      }

      // Compliance score
      const complianceScore = Math.max(0, 100 - (riskScore * 3));

      // Potential penalties
      const criminalPenalty = 10000; // Per violation
      const civilLiability = paymentAmount * 3; // Treble damages

      // Primary concerns
      const primaryConcerns = concerns.length > 0 
        ? concerns.slice(0, 3).join('; ')
        : 'No major concerns identified';

      // Recommended actions
      let recommendations = '';
      if (riskScore >= 20) {
        recommendations = '🚨 URGENT: Cease arrangement immediately. Consult RESPA attorney. High risk of enforcement action.';
      } else if (riskScore >= 15) {
        recommendations = '⚠ Restructure arrangement to ensure compliance. Obtain legal review. Enhance documentation and disclosures.';
      } else if (riskScore >= 8) {
        recommendations = 'Strengthen compliance: document services, enhance disclosures, ensure consumer choice, maintain records.';
      } else {
        recommendations = '✓ Continue with current compliance practices. Maintain documentation.';
      }

      return {
        'RESPA Violation Risk Level': riskLevel,
        'Primary Violation Concerns': primaryConcerns,
        'Compliance Score': complianceScore,
        'Section 8(a) Risk (Kickbacks)': section8aRisk,
        'Section 8(b) Risk (Fee Splitting)': section8bRisk,
        'Section 9 Risk (Required Services)': section9Risk,
        'Potential Criminal Penalties': criminalPenalty,
        'Potential Civil Liability (3x damages)': civilLiability,
        'Recommended Corrective Actions': recommendations,
      };
    },
  },
  metaTitle: "RESPA Violation Checker - Real Estate Settlement Procedures Act Compliance",
  metaDescription: "Free RESPA violation checker. Analyze kickbacks, referral fees, fee splitting, and settlement service compliance. Check for Real Estate Settlement Procedures Act violations and assess penalty risk.",
};
