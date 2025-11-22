import { CalculatorContent } from "@/types";

export const exchange1031RelatedPartyRules: CalculatorContent = {
  title: "1031 Exchange Related Party Rules Analyzer",
  description: "Analyze related party 1031 exchanges for IRS compliance. Check two-year holding period requirements, anti-abuse rules, and relationship classifications.",
  icon: 'Icon',
  category: "Real Estate Tax",
  slug: "1031-exchange-related-party-rules",
  article: {
    title: "1031 Exchange Related Party Rules - IRS Compliance Analyzer",
    content: `
    ## What Are Related Party 1031 Exchanges?

    A related party 1031 exchange involves the exchange of properties between parties that have certain defined relationships. While these exchanges are permitted under IRC Section 1031, they come with strict rules and additional scrutiny from the IRS due to potential abuse.

    ### Who Is Considered a Related Party?

    Under IRC Section 1031(f) and 267, related parties include:

    **Family Members:**
    - Spouse
    - Siblings (including half-siblings)
    - Parents and grandparents
    - Children and grandchildren
    - In-laws (varies by situation)

    **Business Entities:**
    - Corporations where you own more than 50% (directly or indirectly)
    - Partnerships where you own more than 50% of capital or profits
    - S Corporations where you're a more than 50% shareholder
    - LLCs where you have more than 50% ownership interest

    **Trusts and Estates:**
    - Trusts where you're a grantor or beneficiary
    - Estates where you're a beneficiary or executor

    **Controlled Entities:**
    - Two corporations that are part of the same controlled group
    - Partnerships with overlapping ownership exceeding 50%
    - Any entity where you have control through attribution rules

    ### The Two-Year Holding Period Rule

    The most critical rule for related party exchanges is the **two-year holding period requirement**:

    **What It Means:**
    Both you and the related party must hold the exchanged properties for at least **2 years** after the exchange date.

    **If Violated:**
    - The exchange is disqualified retroactively
    - All deferred gain becomes immediately taxable
    - You'll owe capital gains tax plus potential penalties and interest
    - The IRS may classify it as a tax avoidance scheme

    **Holding Period Starts:**
    The date of the last transfer in the exchange

    **Exceptions to the Two-Year Rule:**
    1. Death of either party during the holding period
    2. Involuntary conversion (fire, condemnation, etc.)
    3. Non-tax avoidance transactions (burden of proof on taxpayer)

    ### Anti-Abuse Provisions

    The IRS enacted these rules to prevent tax avoidance schemes where:
    
    **Scenario 1: Quick Flip Scheme**
    - Person A exchanges with related Person B
    - Person B immediately sells to unrelated Person C for cash
    - Person A gets the benefit of deferral while effectively cashing out
    - **Result:** This violates the holding period and disqualifies the exchange

    **Scenario 2: Step Transaction Doctrine**
    - Multiple related party transactions that, when viewed together, constitute a sale
    - The IRS can collapse the transactions and treat them as a single taxable event

    ### Safe Harbor Provisions

    **Bona Fide Business Purpose:**
    If you can demonstrate a legitimate, non-tax business reason for the related party exchange, the IRS may allow it even if one party sells within 2 years.

    **Documentation Required:**
    - Written business plan
    - Evidence of operational use
    - Market analysis
    - Financial projections
    - Management decisions and meeting minutes

    ### Common Related Party Exchange Scenarios

    **Parent-Child Exchanges:**
    - Most common type
    - Often used for estate planning
    - Subject to strict scrutiny
    - Must demonstrate business purpose beyond tax deferral

    **Partnership-Partner Exchanges:**
    - Partner exchanges property with partnership
    - Ownership percentages matter
    - Attribution rules apply

    **Sister Corporation Exchanges:**
    - Two corporations with common ownership
    - Aggregation rules apply
    - Must track holding periods carefully

    ### Constructive Ownership (Attribution Rules)

    You may be deemed to own property held by:
    - Your spouse
    - Your children, grandchildren, or parents
    - Your trust or estate
    - Your partnership or corporation (proportional to ownership)

    These attribution rules can create unexpected related party relationships.

    ### Special Considerations

    **LLCs and Partnerships:**
    - Disregarded entity status matters
    - Look-through rules apply
    - Member-to-member exchanges need careful structuring

    **Divorce Situations:**
    - Ex-spouses may still be considered related parties
    - Divorce property settlements have special rules

    **Estate Planning:**
    - Related party exchanges often used in succession planning
    - Must balance tax deferral with estate tax considerations

    ### Penalties for Violation

    **Tax Consequences:**
    - Full gain recognition
    - Capital gains tax at current rates
    - Depreciation recapture
    - Potential 20% accuracy-related penalties

    **Interest Charges:**
    - Calculated from the original exchange date
    - Compounds over the holding period
    - Can add 20-30% to the tax bill

    **Fraud Penalties:**
    - If deemed intentional, up to 75% civil fraud penalty
    - Potential criminal prosecution

    ### Best Practices for Related Party Exchanges

    1. **Document Everything:** Keep detailed records of business purpose
    2. **Plan for Full Holding Period:** Don't assume exceptions will apply
    3. **Get Professional Advice:** Work with experienced 1031 intermediary and tax attorney
    4. **Structure Properly:** Consider using multiple LLCs or trusts
    5. **File Form 8824:** Properly report the exchange and related party information
    6. **Track Dates Carefully:** Monitor all critical dates and deadlines
    7. **Maintain Business Use:** Ensure property is actually used in trade or business

    ### How This Analyzer Works

    This tool helps you:

    - **Identify Related Party Status:** Determine if parties are considered related under IRS rules
    - **Track Holding Periods:** Calculate time elapsed and time remaining
    - **Assess Compliance Risk:** Evaluate potential red flags
    - **Check Attribution Rules:** Determine if indirect ownership creates related party status
    - **Evaluate Business Purpose:** Assess strength of non-tax justifications
    - **Calculate At-Risk Amount:** Estimate potential tax liability if exchange is disqualified

    ### When to Avoid Related Party Exchanges

    - When either party plans to sell within 2 years
    - If the primary purpose is tax avoidance
    - When you can't document a legitimate business purpose
    - If the transaction structure is overly complex
    - When you're in a high-audit-risk category

    ### Professional Guidance Required

    Related party exchanges are among the most scrutinized 1031 transactions. Always consult:
    - Qualified Intermediary with related party experience
    - Tax attorney specializing in 1031 exchanges
    - CPA familiar with IRC Section 1031(f)
    - Estate planning attorney (if applicable)
  `,
  },
  calculator: {
    fields: [
      {
        name: 'relationshipType',
        label: 'Type of Related Party Relationship',
        type: 'select',
        options: [
          'Immediate Family (spouse, parent, child)',
          'Extended Family (sibling, grandparent, grandchild)',
          'Corporation (>50% ownership)',
          'Partnership (>50% interest)',
          'LLC (>50% ownership)',
          'Trust or Estate',
          'Controlled Group Entities',
          'Not Sure / Need Analysis'
        ],
        defaultValue: 'Immediate Family (spouse, parent, child)',
      },
      {
        name: 'exchangeDate',
        label: 'Exchange Completion Date',
        type: 'date',
        defaultValue: '2023-06-15',
      },
      {
        name: 'currentDate',
        label: 'Current Date (or Planned Sale Date)',
        type: 'date',
        defaultValue: '2025-11-22',
      },
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'number',
        defaultValue: 750000,
      },
      {
        name: 'deferredGain',
        label: 'Total Deferred Gain at Risk',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'businessPurpose',
        label: 'Documented Business Purpose',
        type: 'select',
        options: [
          'Strong - Extensive documentation and clear business rationale',
          'Moderate - Some documentation, reasonable business purpose',
          'Weak - Minimal documentation, primarily tax-motivated',
          'None - Purely for tax deferral'
        ],
        defaultValue: 'Moderate - Some documentation, reasonable business purpose',
      },
      {
        name: 'propertyUse',
        label: 'How Has Property Been Used?',
        type: 'select',
        options: [
          'Active rental with tenants',
          'Business operations',
          'Investment holding',
          'Personal use (partial)',
          'Vacant/minimal use'
        ],
        defaultValue: 'Active rental with tenants',
      },
      {
        name: 'capitalGainsRate',
        label: 'Applicable Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'stateIncomeTaxRate',
        label: 'State Income Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      { label: 'Days Since Exchange', isNumeric: true },
      { label: 'Days Remaining in Holding Period', isNumeric: true },
      { label: 'Months Held', isNumeric: true },
      { label: 'Months Remaining', isNumeric: true },
      { label: 'Holding Period Completion Date', isDate: true },
      { label: 'Holding Period Status', isText: true },
      { label: 'Compliance Risk Level', isText: true },
      { label: 'Potential Tax if Disqualified (Federal)', isCurrency: true },
      { label: 'Potential State Tax if Disqualified', isCurrency: true },
      { label: 'Total Potential Tax Liability', isCurrency: true },
      { label: 'Estimated Interest Penalty', isCurrency: true },
      { label: 'Potential Accuracy Penalty (20%)', isCurrency: true },
      { label: 'Total Exposure if Disqualified', isCurrency: true },
      { label: 'Business Purpose Strength', isText: true },
      { label: 'Recommended Action', isText: true },
    ],
    calculate: (values) => {
      const {
        relationshipType,
        exchangeDate,
        currentDate,
        propertyValue,
        deferredGain,
        businessPurpose,
        propertyUse,
        capitalGainsRate,
        stateIncomeTaxRate,
      } = values;

      const exchangeDateObj = new Date(exchangeDate);
      const currentDateObj = new Date(currentDate);
      const twoYearsLater = new Date(exchangeDateObj);
      twoYearsLater.setFullYear(twoYearsLater.getFullYear() + 2);

      // Calculate days
      const msPerDay = 1000 * 60 * 60 * 24;
      const daysSinceExchange = Math.floor((currentDateObj.getTime() - exchangeDateObj.getTime()) / msPerDay);
      const totalDaysRequired = 730; // 2 years
      const daysRemaining = Math.max(0, totalDaysRequired - daysSinceExchange);

      // Calculate months
      const monthsHeld = Math.floor(daysSinceExchange / 30.44);
      const monthsRemaining = Math.max(0, Math.ceil(daysRemaining / 30.44));

      // Holding period status
      let holdingStatus = '';
      if (daysSinceExchange >= totalDaysRequired) {
        holdingStatus = '✓ SATISFIED - Two-year holding period complete';
      } else if (daysSinceExchange >= 365) {
        holdingStatus = `IN PROGRESS - ${monthsRemaining} months remaining`;
      } else {
        holdingStatus = `EARLY STAGE - ${monthsRemaining} months remaining`;
      }

      // Risk assessment
      let riskLevel = '';
      let riskScore = 0;

      // Risk factors
      if (relationshipType.includes('Immediate Family')) riskScore += 2;
      else if (relationshipType.includes('Extended Family')) riskScore += 1;
      else if (relationshipType.includes('Corporation') || relationshipType.includes('Partnership')) riskScore += 3;

      if (businessPurpose.includes('None')) riskScore += 4;
      else if (businessPurpose.includes('Weak')) riskScore += 3;
      else if (businessPurpose.includes('Moderate')) riskScore += 1;

      if (propertyUse.includes('Vacant')) riskScore += 3;
      else if (propertyUse.includes('Personal')) riskScore += 2;
      else if (propertyUse.includes('Investment')) riskScore += 1;

      if (daysSinceExchange < 365) riskScore += 2;
      else if (daysSinceExchange < 730) riskScore += 1;

      if (riskScore >= 8) riskLevel = '🔴 HIGH RISK - Exchange likely to be challenged';
      else if (riskScore >= 5) riskLevel = '🟡 MODERATE RISK - Some audit exposure';
      else if (riskScore >= 2) riskLevel = '🟢 LOW RISK - Appears compliant';
      else riskLevel = '✓ MINIMAL RISK - Strong compliance position';

      // Calculate potential tax liability
      const federalTax = deferredGain * (capitalGainsRate / 100);
      const stateTax = deferredGain * (stateIncomeTaxRate / 100);
      const totalTax = federalTax + stateTax;

      // Calculate interest penalty (assuming 5% annual rate for simplicity)
      const yearsElapsed = daysSinceExchange / 365;
      const interestPenalty = totalTax * 0.05 * yearsElapsed;

      // Accuracy penalty (20% of tax due)
      const accuracyPenalty = totalTax * 0.20;

      // Total exposure
      const totalExposure = totalTax + interestPenalty + accuracyPenalty;

      // Business purpose assessment
      let businessPurposeStrength = '';
      if (businessPurpose.includes('Strong')) {
        businessPurposeStrength = '✓ Strong documentation - Good defense against IRS challenge';
      } else if (businessPurpose.includes('Moderate')) {
        businessPurposeStrength = '~ Moderate - May need additional documentation';
      } else if (businessPurpose.includes('Weak')) {
        businessPurposeStrength = '⚠ Weak - Strengthen documentation immediately';
      } else {
        businessPurposeStrength = '❌ Insufficient - High risk of disqualification';
      }

      // Recommended action
      let recommendedAction = '';
      if (daysSinceExchange >= totalDaysRequired) {
        recommendedAction = 'Holding period satisfied. Exchange protected. May proceed with any disposition.';
      } else if (riskScore >= 7 && daysRemaining > 180) {
        recommendedAction = 'HIGH RISK: Do not dispose of property. Hold for full 2-year period. Strengthen business purpose documentation.';
      } else if (riskScore >= 5) {
        recommendedAction = 'MODERATE RISK: Continue holding. Enhance documentation. Consult tax attorney before any disposition.';
      } else if (daysRemaining <= 90) {
        recommendedAction = `LOW RISK: ${monthsRemaining} months remaining. Continue holding and maintain business use.`;
      } else {
        recommendedAction = `Compliant position. Continue holding for ${monthsRemaining} more months.`;
      }

      return {
        'Days Since Exchange': daysSinceExchange,
        'Days Remaining in Holding Period': daysRemaining,
        'Months Held': monthsHeld,
        'Months Remaining': monthsRemaining,
        'Holding Period Completion Date': twoYearsLater.toLocaleDateString(),
        'Holding Period Status': holdingStatus,
        'Compliance Risk Level': riskLevel,
        'Potential Tax if Disqualified (Federal)': federalTax,
        'Potential State Tax if Disqualified': stateTax,
        'Total Potential Tax Liability': totalTax,
        'Estimated Interest Penalty': interestPenalty,
        'Potential Accuracy Penalty (20%)': accuracyPenalty,
        'Total Exposure if Disqualified': totalExposure,
        'Business Purpose Strength': businessPurposeStrength,
        'Recommended Action': recommendedAction,
      };
    },
  },
  metaTitle: "1031 Exchange Related Party Rules Analyzer - IRS Compliance Checker",
  metaDescription: "Free Related Party 1031 Exchange analyzer. Check two-year holding period requirements, assess IRS compliance risk, analyze family and entity relationships, and calculate potential tax liability if disqualified.",
};
