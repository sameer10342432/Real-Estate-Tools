import { CalculatorContent } from "@/types";

export const armsLengthTransactionAnalyzer: CalculatorContent = {
  title: "Arm's Length Transaction Analyzer",
  description: "Analyze if your real estate transaction qualifies as arm's length. Check IRS compliance, relationship disclosures, and fair market value requirements for related party deals.",
  icon: 'Icon',
  category: "Real Estate Compliance",
  slug: "arms-length-transaction-analyzer",
  article: {
    title: "Arm's Length Transaction Analyzer - IRS Compliance for Real Estate Deals",
    content: `
    ## What Is an Arm's Length Transaction?

    An arm's length transaction is a business deal between two independent parties who have no relationship or special connection. Both parties act in their own self-interest and are not subject to pressure or influence from the other party.

    ### Why Arm's Length Matters

    **IRS Scrutiny:**
    The IRS requires transactions to be at arm's length to prevent:
    - Tax avoidance through artificially low/high prices
    - Transfer of wealth without appropriate taxation
    - Manipulation of property values for tax benefits
    - Circumvention of capital gains taxes

    **Legal Requirements:**
    - Fair market value must be established
    - Proper documentation required
    - Full disclosure of relationships
    - Independent appraisals may be needed

    ### What Makes a Transaction NOT Arm's Length?

    **Relationship Factors:**
    - Family members (immediate or extended)
    - Business partners or associates
    - Employer and employee
    - Corporation and major shareholders
    - Trust and beneficiaries
    - Entities with common control
    - Friends with financial interests

    **Transaction Red Flags:**
    - Price significantly above/below market value
    - Terms unusually favorable to one party
    - Rushed transaction without proper due diligence
    - Limited or no marketing/competitive bidding
    - Special financing arrangements
    - Contingent payments or profit-sharing
    - Undisclosed side agreements

    ### IRS Definition of Related Parties

    Under IRC Section 267, related parties include:

    **Family Relationships:**
    - Spouse
    - Brothers and sisters (including half-siblings)
    - Ancestors (parents, grandparents)
    - Lineal descendants (children, grandchildren)

    **Entity Relationships:**
    - Individual and corporation (>50% ownership)
    - Two corporations in same controlled group
    - Grantor and fiduciary of trust
    - Fiduciary of two different trusts with same grantor
    - Corporation and partnership (>50% common ownership)
    - Two S corporations (>50% common ownership)
    - Executor and beneficiary of an estate

    **Constructive Ownership:**
    You may be deemed to own stock or property owned by:
    - Your spouse
    - Your children, grandchildren, or parents
    - Your partnership (proportional share)
    - Your trust or estate
    - Your corporation (proportional share)

    ### Consequences of Non-Arm's Length Transactions

    **Tax Implications:**
    - Disallowance of losses on sale to related party
    - Adjustment of property basis
    - Recharacterization of capital gains
    - Denial of 1031 exchange treatment
    - Gift tax implications
    - Estate tax consequences

    **IRS Penalties:**
    - Accuracy-related penalties (20%)
    - Substantial understatement penalties
    - Negligence penalties
    - Fraud penalties (up to 75%)
    - Interest on underpaid taxes

    **Legal Risks:**
    - Mortgage fraud implications
    - Securities violations
    - Civil litigation
    - Criminal prosecution in extreme cases

    ### How to Prove Arm's Length Status

    **Required Documentation:**
    - Independent appraisal
    - Comparative market analysis (CMA)
    - Evidence of market exposure
    - Documentation of negotiation process
    - Written purchase agreement
    - Disclosure of any relationships
    - Fair market financing terms

    **Best Practices:**
    - List property on open market
    - Accept competitive bids
    - Use independent real estate agent
    - Obtain professional appraisal
    - Use standard contract forms
    - Document all communications
    - Disclose relationships upfront

    ### Special Rules for Related Party Sales

    **Loss Disallowance:**
    If you sell property at a loss to a related party:
    - The loss is NOT deductible
    - The buyer gets a carryover basis
    - Loss may be available to buyer on future sale

    **Gain Recharacterization:**
    Gain on sale to related party may be:
    - Taxed as ordinary income (not capital gain)
    - Subject to depreciation recapture
    - Denied installment sale treatment

    **Holding Period Requirements:**
    For certain related party transactions:
    - 2-year holding period required
    - Prevents immediate resale schemes
    - Violations trigger retroactive tax

    ### Legitimate Related Party Transactions

    **Can Still Qualify As Arm's Length:**
    Even with relationship, transaction can be arm's length if:
    - Price determined by independent appraisal
    - Market exposure and competitive bidding occurred
    - Terms are comparable to market transactions
    - Both parties represented by independent counsel
    - Legitimate business purpose exists
    - Full disclosure made to IRS

    **Safe Harbor Provisions:**
    - Use qualified appraisers
    - Document fair market value
    - Obtain independent representation
    - Use standard market terms
    - Maintain detailed records

    ### Common Scenarios Requiring Analysis

    **Family Sales:**
    - Selling home to adult child
    - Parent selling to child's trust
    - Sibling-to-sibling transfers
    - Divorce property settlements

    **Business Entity Transactions:**
    - Corporation buying from shareholder
    - Partnership buying member's property
    - LLC acquisitions from members
    - Intercompany transfers

    **Estate Planning:**
    - Sales to grantor trusts
    - Family limited partnerships
    - Qualified personal residence trusts
    - Intentionally defective grantor trusts

    **1031 Exchanges:**
    - Related party exchanges
    - Partnership-to-partner exchanges
    - Estate-to-beneficiary exchanges

    ### Price Determination Methods

    **Acceptable Approaches:**
    - Independent professional appraisal
    - Comparative market analysis (CMA)
    - Recent arms-length sales of comparable properties
    - Income approach for investment properties
    - Cost approach for unique properties

    **Unacceptable Methods:**
    - Tax assessment value
    - Seller's desired price
    - Buyer's offer without market support
    - Average of high/low guesses
    - Original purchase price adjusted for inflation

    ### IRS Audit Triggers

    **High-Risk Factors:**
    - Sale price >20% above or below comparable sales
    - Transaction between known related parties
    - No property marketing or limited exposure
    - Unusual payment terms or structures
    - Large losses claimed on related party sales
    - Circular flow of funds
    - Minimal or no down payment

    **Documentation IRS May Request:**
    - Independent appraisal reports
    - Listing agreements and marketing materials
    - All purchase offers received
    - Correspondence between parties
    - Relationship disclosures
    - Financing documentation
    - Title and escrow documents

    ### Mortgage Fraud Considerations

    **Lender Requirements:**
    Banks and lenders must know if:
    - Transaction is between related parties
    - Price is consistent with market value
    - Down payment source is legitimate
    - Transaction is arm's length

    **Fraud Indicators:**
    - Failure to disclose relationship
    - Inflated appraisal
    - Down payment gifted by seller
    - Straw buyer arrangements
    - Simultaneous undisclosed transactions

    ### How This Analyzer Works

    This tool evaluates:

    - **Relationship Assessment:** Determines if parties are related under IRS rules
    - **Price Analysis:** Compares transaction price to fair market value
    - **Terms Evaluation:** Analyzes if terms are market-standard
    - **Documentation Review:** Assesses adequacy of supporting documentation
    - **Risk Scoring:** Calculates likelihood of IRS challenge
    - **Compliance Recommendations:** Suggests steps to strengthen arm's length position

    ### Red Flags to Avoid

    **Price Red Flags:**
    - Round numbers ($500,000 vs. $492,500)
    - No negotiation documented
    - Price changed dramatically from list price
    - Price exactly matches insurance value

    **Process Red Flags:**
    - No MLS listing or market exposure
    - No counter-offers or negotiation
    - Rushed closing without due diligence
    - Limited or waived inspections
    - Cash sale with no appraisal

    **Relationship Red Flags:**
    - Undisclosed family connections
    - Business relationships not revealed
    - Common financial advisors
    - Social connections with financial stakes

    ### Steps to Ensure Arm's Length Status

    1. **Hire Independent Professionals:**
       - Separate real estate agents for buyer and seller
       - Independent appraiser
       - Separate attorneys if needed

    2. **Establish Fair Market Value:**
       - Get professional appraisal
       - Review comparable sales
       - Document pricing rationale

    3. **Market the Property:**
       - List on MLS
       - Accept competitive bids
       - Allow reasonable showing period

    4. **Use Standard Terms:**
       - Market-rate financing
       - Typical down payment
       - Standard contingencies
       - Arms-length purchase agreement

    5. **Document Everything:**
       - All offers received
       - Negotiation history
       - Relationship disclosures
       - Fair market value evidence

    6. **Make Full Disclosures:**
       - Disclose relationships to lender
       - Report accurately on Form 1099-S
       - Attach explanations to tax return

    ### When to Seek Professional Help

    Consult a tax attorney or CPA when:
    - Selling to family member
    - Transaction involves business entities
    - Price is not clearly market-rate
    - Transaction has estate planning purposes
    - 1031 exchange with related party
    - Prior IRS issues with related transactions
  `,
  },
  calculator: {
    fields: [
      {
        name: 'relationshipType',
        label: 'Relationship Between Parties',
        type: 'select',
        options: [
          'No relationship - completely independent',
          'Distant acquaintance/social connection',
          'Business associate/colleague',
          'Close friend',
          'Extended family (cousin, aunt, uncle)',
          'Immediate family (parent, child, sibling)',
          'Spouse',
          'Business entities with common ownership',
          'Employer-Employee',
          'Trust and beneficiary',
        ],
        defaultValue: 'No relationship - completely independent',
      },
      {
        name: 'propertyValue',
        label: 'Transaction Sale Price ($)',
        type: 'number',
        defaultValue: 450000,
      },
      {
        name: 'appraisedValue',
        label: 'Independent Appraisal Value ($)',
        type: 'number',
        defaultValue: 450000,
      },
      {
        name: 'comparableSalesAvg',
        label: 'Average Comparable Sales Price ($)',
        type: 'number',
        defaultValue: 455000,
      },
      {
        name: 'marketExposure',
        label: 'Property Market Exposure',
        type: 'select',
        options: [
          'Listed on MLS, widely marketed for 30+ days',
          'Listed on MLS, limited marketing (< 30 days)',
          'Private listing, some exposure',
          'Off-market, minimal exposure',
          'No market exposure - direct sale',
        ],
        defaultValue: 'Listed on MLS, widely marketed for 30+ days',
      },
      {
        name: 'competitiveBids',
        label: 'Competitive Bidding Process',
        type: 'select',
        options: [
          'Multiple offers received, competitive process',
          'Few offers, some competition',
          'Single offer only',
          'No other offers solicited',
        ],
        defaultValue: 'Multiple offers received, competitive process',
      },
      {
        name: 'termsType',
        label: 'Transaction Terms',
        type: 'select',
        options: [
          'Standard market terms (typical financing, down payment)',
          'Mostly standard with minor variations',
          'Some unusual terms (owner financing, low down payment)',
          'Highly unusual terms (no down payment, deferred payments)',
        ],
        defaultValue: 'Standard market terms (typical financing, down payment)',
      },
      {
        name: 'financing',
        label: 'Financing Structure',
        type: 'select',
        options: [
          'Conventional bank financing at market rates',
          'FHA/VA financing',
          'Seller financing at market rates',
          'Seller financing at below-market rates',
          'Cash sale',
          'Unusual payment structure',
        ],
        defaultValue: 'Conventional bank financing at market rates',
      },
      {
        name: 'documentation',
        label: 'Transaction Documentation',
        type: 'select',
        options: [
          'Excellent - appraisal, CMA, all offers, negotiation records',
          'Good - appraisal and basic documentation',
          'Fair - some documentation missing',
          'Poor - minimal documentation',
        ],
        defaultValue: 'Good - appraisal and basic documentation',
      },
      {
        name: 'independentRepresentation',
        label: 'Independent Representation',
        type: 'select',
        options: [
          'Both parties have separate agents and attorneys',
          'Separate agents, no attorneys',
          'Same agent representing both sides',
          'No professional representation',
        ],
        defaultValue: 'Separate agents, no attorneys',
      },
    ],
    results: [
      { label: 'Price Variance from Appraisal', isPercentage: true },
      { label: 'Price Variance from Comparables', isPercentage: true },
      { label: 'Relationship Risk Score', isText: true },
      { label: 'Process Risk Score', isText: true },
      { label: 'Overall Arm\'s Length Status', isText: true },
      { label: 'IRS Audit Risk Level', isText: true },
      { label: 'Primary Risk Factors', isText: true },
      { label: 'Recommended Actions', isText: true },
    ],
    calculate: (values) => {
      const {
        relationshipType,
        propertyValue,
        appraisedValue,
        comparableSalesAvg,
        marketExposure,
        competitiveBids,
        termsType,
        financing,
        documentation,
        independentRepresentation,
      } = values;

      // Price variance calculations
      const priceVsAppraisal = ((propertyValue - appraisedValue) / appraisedValue) * 100;
      const priceVsComps = ((propertyValue - comparableSalesAvg) / comparableSalesAvg) * 100;

      let riskScore = 0;
      let primaryRisks: string[] = [];

      // Relationship scoring
      let relationshipRisk = '';
      if (relationshipType.includes('No relationship')) {
        relationshipRisk = '✓ LOW - Independent parties';
      } else if (relationshipType.includes('Distant') || relationshipType.includes('social')) {
        relationshipRisk = '🟢 LOW - Minimal relationship';
        riskScore += 1;
      } else if (relationshipType.includes('Business associate') || relationshipType.includes('Close friend')) {
        relationshipRisk = '🟡 MODERATE - Potential influence';
        riskScore += 3;
        primaryRisks.push('Business/social relationship');
      } else if (relationshipType.includes('Extended family')) {
        relationshipRisk = '🟡 MODERATE-HIGH - Family relationship';
        riskScore += 5;
        primaryRisks.push('Family relationship');
      } else if (relationshipType.includes('Immediate family') || relationshipType.includes('Spouse')) {
        relationshipRisk = '🔴 HIGH - Close family relationship';
        riskScore += 8;
        primaryRisks.push('Immediate family/spouse transaction');
      } else {
        relationshipRisk = '🔴 HIGH - Related entity transaction';
        riskScore += 7;
        primaryRisks.push('Related business entities');
      }

      // Price variance scoring
      const absAppraisalVariance = Math.abs(priceVsAppraisal);
      const absCompVariance = Math.abs(priceVsComps);

      if (absAppraisalVariance > 20 || absCompVariance > 20) {
        riskScore += 10;
        primaryRisks.push('Price significantly off-market (>20%)');
      } else if (absAppraisalVariance > 10 || absCompVariance > 10) {
        riskScore += 5;
        primaryRisks.push('Price moderately off-market (10-20%)');
      } else if (absAppraisalVariance > 5 || absCompVariance > 5) {
        riskScore += 2;
      }

      // Market exposure scoring
      if (marketExposure.includes('No market exposure')) {
        riskScore += 6;
        primaryRisks.push('No market exposure');
      } else if (marketExposure.includes('Off-market')) {
        riskScore += 4;
        primaryRisks.push('Minimal market exposure');
      } else if (marketExposure.includes('Private listing')) {
        riskScore += 2;
      }

      // Competitive bidding scoring
      if (competitiveBids.includes('No other offers')) {
        riskScore += 5;
        primaryRisks.push('No competitive bidding');
      } else if (competitiveBids.includes('Single offer')) {
        riskScore += 3;
      } else if (competitiveBids.includes('Few offers')) {
        riskScore += 1;
      }

      // Terms scoring
      if (termsType.includes('Highly unusual')) {
        riskScore += 6;
        primaryRisks.push('Unusual transaction terms');
      } else if (termsType.includes('Some unusual')) {
        riskScore += 3;
      } else if (termsType.includes('minor variations')) {
        riskScore += 1;
      }

      // Financing scoring
      if (financing.includes('Unusual payment')) {
        riskScore += 5;
        primaryRisks.push('Non-standard payment structure');
      } else if (financing.includes('below-market rates')) {
        riskScore += 4;
        primaryRisks.push('Below-market seller financing');
      }

      // Documentation scoring
      if (documentation.includes('Poor')) {
        riskScore += 4;
        primaryRisks.push('Insufficient documentation');
      } else if (documentation.includes('Fair')) {
        riskScore += 2;
      }

      // Representation scoring
      if (independentRepresentation.includes('No professional')) {
        riskScore += 4;
        primaryRisks.push('No professional representation');
      } else if (independentRepresentation.includes('Same agent')) {
        riskScore += 3;
        primaryRisks.push('Dual agency representation');
      }

      // Process risk
      let processRisk = '';
      const processScore = riskScore - (relationshipType.includes('No relationship') ? 0 : 
                           relationshipType.includes('family') ? 8 : 
                           relationshipType.includes('Business') ? 7 : 3);

      if (processScore >= 15) {
        processRisk = '🔴 HIGH - Multiple process deficiencies';
      } else if (processScore >= 8) {
        processRisk = '🟡 MODERATE - Some process concerns';
      } else if (processScore >= 3) {
        processRisk = '🟢 LOW-MODERATE - Minor process issues';
      } else {
        processRisk = '✓ LOW - Strong process followed';
      }

      // Overall status
      let overallStatus = '';
      if (riskScore >= 20) {
        overallStatus = '❌ LIKELY NOT ARM\'S LENGTH - High risk of IRS challenge';
      } else if (riskScore >= 12) {
        overallStatus = '⚠ QUESTIONABLE - Significant compliance concerns';
      } else if (riskScore >= 6) {
        overallStatus = '🟡 BORDERLINE - Some arm\'s length characteristics';
      } else if (riskScore >= 3) {
        overallStatus = '✓ LIKELY ARM\'S LENGTH - Minor issues only';
      } else {
        overallStatus = '✓✓ CLEARLY ARM\'S LENGTH - Strong compliance';
      }

      // Audit risk
      let auditRisk = '';
      if (riskScore >= 20) {
        auditRisk = '🔴 VERY HIGH - Transaction will likely be challenged';
      } else if (riskScore >= 12) {
        auditRisk = '🟡 HIGH - Significant audit exposure';
      } else if (riskScore >= 6) {
        auditRisk = '🟡 MODERATE - Some audit risk';
      } else {
        auditRisk = '🟢 LOW - Minimal audit risk';
      }

      // Primary risk factors summary
      const primaryRiskText = primaryRisks.length > 0 
        ? primaryRisks.join('; ')
        : 'No significant risk factors identified';

      // Recommended actions
      let recommendations = '';
      if (riskScore >= 20) {
        recommendations = '🚨 Do not proceed. Restructure transaction to establish arm\'s length status. Consult tax attorney immediately.';
      } else if (riskScore >= 12) {
        recommendations = '⚠ Strengthen documentation: obtain independent appraisal, increase market exposure, document competitive process. Consult tax professional.';
      } else if (riskScore >= 6) {
        recommendations = 'Improve process: ensure independent appraisal, document market value, maintain detailed records. Consider professional review.';
      } else {
        recommendations = '✓ Transaction appears compliant. Maintain thorough documentation and disclose any relationships on tax forms.';
      }

      return {
        'Price Variance from Appraisal': priceVsAppraisal,
        'Price Variance from Comparables': priceVsComps,
        'Relationship Risk Score': relationshipRisk,
        'Process Risk Score': processRisk,
        'Overall Arm\'s Length Status': overallStatus,
        'IRS Audit Risk Level': auditRisk,
        'Primary Risk Factors': primaryRiskText,
        'Recommended Actions': recommendations,
      };
    },
  },
  metaTitle: "Arm's Length Transaction Analyzer - IRS Compliance Checker",
  metaDescription: "Free Arm's Length Transaction Analyzer for real estate. Check IRS compliance, analyze related party deals, assess audit risk, and ensure fair market value requirements are met.",
};
