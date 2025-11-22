import { CalculatorContent } from "@/types";

export const constructiveReceipt1031Analyzer: CalculatorContent = {
  title: "Constructive Receipt 1031 Analyzer",
  description: "Analyze constructive receipt risks in 1031 exchanges. Ensure proper qualified intermediary use and avoid disqualification from premature access to sale proceeds.",
  icon: 'Icon',
  category: "Real Estate Tax",
  slug: "constructive-receipt-1031-analyzer",
  article: {
    title: "Constructive Receipt in 1031 Exchanges - Avoid Disqualification",
    content: `
    ## What is Constructive Receipt?

    Constructive receipt is a tax doctrine that states income is taxable when it becomes available to you, regardless of whether you physically receive it. In 1031 exchanges, constructive receipt is one of the most common reasons for exchange disqualification.

    ### Why Constructive Receipt Matters

    If you have constructive receipt of sale proceeds during a 1031 exchange:
    - The exchange is immediately disqualified
    - All deferred gain becomes immediately taxable
    - You cannot restart the exchange
    - The IRS will assess taxes, interest, and potential penalties

    ### The Danger Period

    Constructive receipt risk exists from:
    - **Start:** When you sell your relinquished property
    - **End:** When you acquire the replacement property

    During this period (up to 180 days), you must NOT have access to the sale proceeds.

    ### Common Constructive Receipt Violations

    **1. Direct Receipt of Funds**
    - Receiving the sale proceeds directly
    - Having funds deposited into your account
    - Getting a check made out to you

    **2. Control Over Funds**
    - Directing where QI invests the funds
    - Having the ability to withdraw funds
    - Acting as signatory on the QI account

    **3. Related Party QI**
    - Using your attorney as QI
    - Using your accountant as QI
    - Using your real estate agent as QI
    - Using a family member as QI

    **4. Security Interest**
    - Taking a security interest in the funds
    - Having funds pledged as collateral
    - Obtaining a loan secured by exchange funds

    **5. Improper Documentation**
    - Signing exchange agreement after the sale
    - Missing required QI agreement provisions
    - Inadequate restrictions on fund access

    ### Safe Harbor Protection

    To avoid constructive receipt, use a **Qualified Intermediary (QI)** with these protections:

    **Qualified Intermediary Requirements:**
    - Must not be a related party (defined in IRC § 1031(f))
    - Must have contractual control over sale proceeds
    - Must hold funds in a separate account
    - Must not allow you to access funds during exchange period

    **Exchange Agreement Must Include:**
    - Assignment of your rights in the sales contract to QI
    - Restriction preventing you from receiving proceeds
    - QI's obligation to acquire replacement property on your behalf
    - Clear statement that you have no access to funds

    ### Who CANNOT Be Your QI?

    These parties are considered "disqualified persons":

    **Within 2 Years Before Exchange:**
    - Your employee or agent
    - Your accountant or attorney
    - Your real estate agent or broker
    - Your investment banker or advisor

    **Family Members:**
    - Spouse
    - Parents and grandparents
    - Children and grandchildren
    - Siblings

    **Related Entities:**
    - Corporation where you own >10%
    - Partnership where you own >10%
    - Trust or estate where you're beneficiary

    ### Permitted Fund Holding

    **Who Can Hold Exchange Funds:**
    - Professional qualified intermediary companies
    - Title companies (if structured properly)
    - Banks (with proper exchange agreement)
    - Specialized 1031 exchange companies

    **Where Funds Can Be Held:**
    - QI's separate exchange account
    - Qualified escrow account
    - Qualified trust account

    ### Interest Earnings

    **Interest on Exchange Funds:**
    - You MAY receive interest earned on exchange funds
    - Interest is taxable as ordinary income
    - Receiving interest does NOT trigger constructive receipt of principal
    - Must be structured properly in QI agreement

    ### Emergency Access Situations

    **What If You Need the Money?**
    
    Once funds are with the QI, accessing them means:
    - Immediate exchange disqualification
    - Full tax liability on the gain
    - No "do-over" allowed

    **Limited Exceptions:**
    - After 180 days, any unused funds can be released
    - After identifying all properties, funds for non-identified properties may be released
    - If exchange fails for legitimate reasons beyond your control

    ### Reverse Exchanges

    In reverse exchanges (buying before selling), constructive receipt rules still apply:
    - EAT (Exchange Accommodation Titleholder) holds property
    - You cannot have control over the EAT
    - Parking arrangement must be arms-length

    ### Build-to-Suit Exchanges

    When constructing on replacement property:
    - QI pays for improvements directly
    - You cannot receive construction draws
    - Contractors must be paid by QI
    - You cannot have signature authority over construction funds

    ### IRS Scrutiny Areas

    **Red Flags for Audits:**
    - QI is a related party
    - You have signature authority on exchange account
    - Funds flow through your accounts
    - QI agreement signed after closing
    - Missing or incomplete assignment documents
    - You directed specific investments of exchange funds

    ### Documentation Requirements

    **Before Closing:**
    - Signed QI agreement
    - Assignment of sales contract to QI
    - Notice to buyer of assignment

    **At Closing:**
    - QI receives all proceeds directly
    - Settlement statement shows QI as seller
    - No checks to you from sale

    **During Exchange Period:**
    - Written identification of replacement property
    - No contact with exchange funds
    - QI handles all fund movements

    **At Replacement Property Closing:**
    - QI purchases property on your behalf
    - QI conveys property to you
    - Settlement statement shows QI as buyer

    ### Penalties for Violation

    **Tax Consequences:**
    - Immediate recognition of all deferred gain
    - Capital gains tax at full rate
    - Depreciation recapture tax
    - State income taxes

    **Additional Penalties:**
    - Late payment penalties
    - Interest from original sale date
    - Potential accuracy-related penalties (20%)
    - Possible fraud penalties if intentional

    ### How This Analyzer Works

    This tool evaluates:

    - **QI Relationship Status:** Whether your QI is properly qualified
    - **Fund Control Analysis:** Whether you have improper access to funds
    - **Timeline Compliance:** Whether critical deadlines are met
    - **Documentation Completeness:** Whether required agreements are in place
    - **Risk Assessment:** Overall risk of constructive receipt disqualification
    - **Corrective Actions:** Steps to remediate any issues

    ### Best Practices

    1. **Select QI Early:** Engage QI before listing property
    2. **Use Independent QI:** Never use your advisor or family member
    3. **Sign Agreement First:** Execute QI agreement before closing
    4. **No Fund Contact:** Never ask about or try to access funds
    5. **Follow QI Instructions:** Let QI handle all fund movements
    6. **Document Everything:** Keep all exchange-related documents
    7. **Use Experienced QI:** Choose QI with proven track record

    ### When to Seek Professional Help

    Consult a tax attorney or CPA if:
    - You need to access funds during exchange
    - Your QI may be a disqualified person
    - You received funds directly by mistake
    - Exchange documentation is incomplete
    - You're being audited on a prior exchange
  `,
  },
  calculator: {
    fields: [
      {
        name: 'qiType',
        label: 'Qualified Intermediary Type',
        type: 'select',
        options: [
          'Professional QI Company (Independent)',
          'Title Company',
          'Attorney (not my attorney)',
          'My Personal Attorney',
          'My Accountant/CPA',
          'Family Member',
          'My Real Estate Agent',
          'Other Related Party',
        ],
        defaultValue: 'Professional QI Company (Independent)',
      },
      {
        name: 'qiRelationship',
        label: 'Prior Relationship with QI (last 2 years)',
        type: 'select',
        options: [
          'No prior relationship',
          'Provided unrelated services',
          'Acted as my agent',
          'Provided tax/legal advice',
          'Family or business relationship',
        ],
        defaultValue: 'No prior relationship',
      },
      {
        name: 'agreementSigned',
        label: 'When Was QI Agreement Signed?',
        type: 'select',
        options: [
          'Before listing property for sale',
          'Before closing on relinquished property',
          'At closing on relinquished property',
          'After closing on relinquished property',
          'Not signed yet',
        ],
        defaultValue: 'Before closing on relinquished property',
      },
      {
        name: 'fundControl',
        label: 'Who Controls Exchange Funds?',
        type: 'select',
        options: [
          'QI exclusively - I have no access',
          'QI holds but I can request distribution',
          'Held in account I can access',
          'Held in my account',
          'I received funds directly',
        ],
        defaultValue: 'QI exclusively - I have no access',
      },
      {
        name: 'accountSignatory',
        label: 'Who Is Signatory on Exchange Account?',
        type: 'select',
        options: [
          'QI only',
          'QI and third party (not me)',
          'QI and me (joint)',
          'Me only',
        ],
        defaultValue: 'QI only',
      },
      {
        name: 'assignmentDocumentation',
        label: 'Assignment of Sales Contract to QI',
        type: 'select',
        options: [
          'Yes - properly documented before closing',
          'Yes - but signed at closing',
          'Yes - but signed after closing',
          'No assignment documentation',
        ],
        defaultValue: 'Yes - properly documented before closing',
      },
      {
        name: 'proceedsPath',
        label: 'How Were Sale Proceeds Handled?',
        type: 'select',
        options: [
          'Went directly to QI at closing',
          'Went to title company, then to QI',
          'Went to my account temporarily',
          'I received check, then forwarded to QI',
          'I still have the proceeds',
        ],
        defaultValue: 'Went directly to QI at closing',
      },
      {
        name: 'exchangePeriodDays',
        label: 'Days Since Relinquished Property Sale',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'hasIdentified',
        label: 'Have You Identified Replacement Property?',
        type: 'select',
        options: [
          'Yes - within 45 days',
          'Yes - but after 45 days',
          'No - still within 45 days',
          'No - past 45 days',
        ],
        defaultValue: 'Yes - within 45 days',
      },
      {
        name: 'deferredGain',
        label: 'Total Deferred Gain at Risk',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'capitalGainsRate',
        label: 'Applicable Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 20,
      },
    ],
    results: [
      { label: 'QI Qualification Status', isText: true },
      { label: 'Constructive Receipt Risk Level', isText: true },
      { label: 'Critical Issues Found', isNumeric: true },
      { label: 'Compliance Score', isPercentage: true },
      { label: 'Exchange Status', isText: true },
      { label: 'Days Remaining to Close (180-day rule)', isNumeric: true },
      { label: 'Potential Tax if Disqualified', isCurrency: true },
      { label: 'Primary Risk Factor', isText: true },
      { label: 'Recommended Immediate Action', isText: true },
    ],
    calculate: (values) => {
      const {
        qiType,
        qiRelationship,
        agreementSigned,
        fundControl,
        accountSignatory,
        assignmentDocumentation,
        proceedsPath,
        exchangePeriodDays,
        hasIdentified,
        deferredGain,
        capitalGainsRate,
      } = values;

      let riskScore = 0;
      let criticalIssues = 0;
      let primaryRisk = '';
      let qiStatus = '';

      // QI Type Assessment
      if (qiType.includes('Professional QI Company')) {
        qiStatus = '✓ Qualified - Independent professional QI';
      } else if (qiType.includes('Title Company')) {
        qiStatus = '✓ Generally Qualified - Verify independence';
        riskScore += 1;
      } else if (qiType.includes('Attorney (not my attorney)')) {
        qiStatus = '⚠ Possibly Qualified - Verify no prior relationship';
        riskScore += 2;
      } else {
        qiStatus = '❌ DISQUALIFIED - Related party QI';
        riskScore += 10;
        criticalIssues += 1;
        primaryRisk = 'Disqualified QI (related party)';
      }

      // QI Relationship
      if (qiRelationship.includes('Family') || qiRelationship.includes('agent') || qiRelationship.includes('tax/legal')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'Prior relationship makes QI disqualified';
      }

      // Agreement Timing
      if (agreementSigned.includes('After closing')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'QI agreement signed too late';
      } else if (agreementSigned.includes('At closing')) {
        riskScore += 3;
      } else if (agreementSigned.includes('Not signed')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'No QI agreement';
      }

      // Fund Control
      if (fundControl.includes('I received funds directly')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'Direct receipt of funds - CONSTRUCTIVE RECEIPT';
      } else if (fundControl.includes('Held in my account')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'Funds in your account - CONSTRUCTIVE RECEIPT';
      } else if (fundControl.includes('I can request distribution')) {
        riskScore += 5;
      } else if (fundControl.includes('I can access')) {
        riskScore += 8;
        if (!primaryRisk) primaryRisk = 'Improper fund access';
      }

      // Account Signatory
      if (accountSignatory.includes('Me only')) {
        riskScore += 10;
        criticalIssues += 1;
      } else if (accountSignatory.includes('joint')) {
        riskScore += 8;
        criticalIssues += 1;
      }

      // Assignment Documentation
      if (assignmentDocumentation.includes('No assignment')) {
        riskScore += 8;
        criticalIssues += 1;
      } else if (assignmentDocumentation.includes('after closing')) {
        riskScore += 6;
      } else if (assignmentDocumentation.includes('at closing')) {
        riskScore += 2;
      }

      // Proceeds Path
      if (proceedsPath.includes('I still have the proceeds')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'You still have proceeds - IMMEDIATE CONSTRUCTIVE RECEIPT';
      } else if (proceedsPath.includes('I received check')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'Direct receipt of proceeds';
      } else if (proceedsPath.includes('my account temporarily')) {
        riskScore += 10;
        criticalIssues += 1;
        if (!primaryRisk) primaryRisk = 'Funds passed through your account';
      }

      // Risk Level
      let riskLevel = '';
      if (riskScore >= 10) {
        riskLevel = '🔴 SEVERE - Exchange likely disqualified';
      } else if (riskScore >= 5) {
        riskLevel = '🟡 HIGH - Significant constructive receipt risk';
      } else if (riskScore >= 2) {
        riskLevel = '🟡 MODERATE - Some compliance concerns';
      } else {
        riskLevel = '✓ LOW - Proper structure maintained';
      }

      // Compliance Score
      const complianceScore = Math.max(0, 100 - (riskScore * 10));

      // Exchange Status
      let exchangeStatus = '';
      const daysRemaining = Math.max(0, 180 - exchangePeriodDays);
      
      if (criticalIssues > 0) {
        exchangeStatus = '⚠ AT RISK - Critical issues threaten exchange';
      } else if (exchangePeriodDays > 180) {
        exchangeStatus = '❌ EXPIRED - 180-day period exceeded';
      } else if (hasIdentified.includes('Yes - within 45 days')) {
        exchangeStatus = `✓ ON TRACK - ${daysRemaining} days to close`;
      } else if (hasIdentified.includes('No - past 45 days')) {
        exchangeStatus = '❌ FAILED - Missed 45-day identification deadline';
      } else {
        exchangeStatus = `IN PROGRESS - ${Math.max(0, 45 - exchangePeriodDays)} days to identify`;
      }

      // Potential tax
      const potentialTax = deferredGain * (capitalGainsRate / 100);

      // Set primary risk if not already set
      if (!primaryRisk && riskScore >= 5) {
        primaryRisk = 'Multiple compliance issues detected';
      } else if (!primaryRisk) {
        primaryRisk = 'None - Proper structure';
      }

      // Recommended Action
      let recommendedAction = '';
      if (criticalIssues >= 2) {
        recommendedAction = '🚨 URGENT: Consult tax attorney immediately. Exchange may be disqualified.';
      } else if (criticalIssues === 1) {
        recommendedAction = '⚠ Contact tax attorney to remedy critical issue before proceeding.';
      } else if (riskScore >= 5) {
        recommendedAction = 'Strengthen documentation and ensure QI maintains exclusive control.';
      } else {
        recommendedAction = 'Continue with exchange. Maintain current compliant structure.';
      }

      return {
        'QI Qualification Status': qiStatus,
        'Constructive Receipt Risk Level': riskLevel,
        'Critical Issues Found': criticalIssues,
        'Compliance Score': complianceScore,
        'Exchange Status': exchangeStatus,
        'Days Remaining to Close (180-day rule)': daysRemaining,
        'Potential Tax if Disqualified': potentialTax,
        'Primary Risk Factor': primaryRisk,
        'Recommended Immediate Action': recommendedAction,
      };
    },
  },
  metaTitle: "Constructive Receipt 1031 Analyzer - Avoid Exchange Disqualification",
  metaDescription: "Free Constructive Receipt analyzer for 1031 exchanges. Check qualified intermediary compliance, assess fund control risks, verify documentation, and avoid exchange disqualification.",
};
