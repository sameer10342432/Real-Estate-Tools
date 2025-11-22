import { CalculatorContent } from "@/types";

export const qualifiedIntermediaryFeeCalculator: CalculatorContent = {
  title: "Qualified Intermediary (QI) Fee Calculator",
  description: "Calculate qualified intermediary fees for 1031 exchanges. Compare QI pricing, analyze total exchange costs, and budget for your like-kind exchange transaction.",
  icon: 'Icon',
  category: "Real Estate Finance",
  slug: "qualified-intermediary-qi-fee-calculator",
  article: {
    title: "Qualified Intermediary Fee Calculator - Budget Your 1031 Exchange Costs",
    content: `
    ## What Are Qualified Intermediary Fees?

    Qualified Intermediary (QI) fees are the costs charged by a third-party facilitator who handles your 1031 exchange transaction. These fees are a necessary expense for properly executing a tax-deferred exchange.

    ### Typical QI Fee Structure

    **Base Exchange Fee:** $800 - $1,500
    The core fee for handling a standard forward exchange

    **Simultaneous Exchange:** $600 - $1,200
    Lower fee when both properties close at the same time

    **Delayed Exchange:** $800 - $1,500
    Standard fee for traditional 1031 exchanges

    **Reverse Exchange:** $2,500 - $4,500
    Higher fee due to complexity of buying before selling

    **Build-to-Suit Exchange:** $3,000 - $6,000+
    Complex exchanges involving construction or improvements

    ### Additional Fees

    **Multiple Properties:** $150 - $500 per additional property
    Extra charge for each property beyond the first

    **Assignment Fees:** $100 - $250 per assignment
    For assigning contracts and documenting transfers

    **Wire Transfer Fees:** $25 - $50 per wire
    Cost of sending funds electronically

    **Document Preparation:** $100 - $300
    For preparing exchange agreements and assignments

    **Earnest Money Handling:** $100 - $250
    If QI holds earnest money deposits

    **Rush Fees:** $200 - $500
    For expedited processing and same-day services

    **Administrative Fees:** $150 - $400
    Annual fees for extended exchanges or ongoing services

    ### What's Included in Base Fee

    **Standard Services:**
    - Exchange agreement preparation
    - Assignment documentation
    - Holding exchange funds in segregated account
    - Wire transfers (limited number)
    - Basic consultation and guidance
    - Preparation of Form 8824
    - Interest earnings on exchange funds

    ### What Costs Extra

    **Premium Services:**
    - Multiple replacement properties
    - Complex ownership structures
    - Reverse or build-to-suit exchanges
    - Extended consultations
    - Legal review services
    - Additional wire transfers beyond 2-3
    - Property identification amendments
    - Failed exchange processing

    ### Interest on Exchange Funds

    **QI Holds Your Money:**
    Your QI will hold the sale proceeds during the exchange period (up to 180 days).

    **Interest Earnings:**
    - Most QIs pay interest on funds held
    - Typical rates: 0.5% - 2% annually
    - Interest is taxable income to you
    - Can partially offset QI fees

    **Calculate Interest:**
    On $500,000 held for 180 days at 1.5% = $3,750

    ### How QI Fees Are Tax Deductible

    **Exchange Expense Deduction:**
    QI fees are considered exchange expenses and can:
    - Reduce your boot (taxable portion)
    - Lower your cost basis in replacement property
    - Be added to adjusted basis for future depreciation

    **Not Deductible As:**
    QI fees cannot be deducted as:
    - Investment expenses
    - Current year business expenses
    - Schedule A itemized deductions

    ### Comparing QI Providers

    **Factors Beyond Price:**
    - Years in business and experience
    - Financial security and insurance
    - Client service and responsiveness
    - Technology and ease of use
    - Error and omissions insurance
    - State licensing and bonding
    - References and reviews

    **Red Flags:**
    - Unusually low fees (below $500)
    - No errors and omissions insurance
    - Commingled exchange funds
    - Pressure tactics or hard sells
    - Lack of transparency
    - No secure fund holding
    - Poor reviews or complaints

    ### QI Insurance and Protection

    **Required Coverage:**
    - Errors & Omissions (E&O) Insurance: $1M minimum
    - Fidelity Bond: Protects against employee theft
    - Separate Account: Exchange funds segregated

    **Your Protection:**
    - Verify QI insurance before engaging
    - Confirm funds are segregated, not commingled
    - Check state licensing requirements
    - Review contract carefully

    ### Fee Negotiation Tips

    **When You Can Negotiate:**
    - High-value exchanges ($1M+)
    - Multiple simultaneous exchanges
    - Repeat client discounts
    - Simple, straightforward transactions

    **When Fees Are Fixed:**
    - Smaller exchanges (under $500K)
    - Complex reverse or construction exchanges
    - Situations requiring extra services

    ### Hidden Costs to Watch For

    **Potential Extra Charges:**
    - Interest rate spreads (QI keeps portion of interest)
    - Document amendment fees
    - Failed exchange fees
    - Consultation time beyond initial meeting
    - Legal review fees
    - State-specific compliance fees
    - Extension fees if replacement property doesn't close on time

    ### DIY vs. Using a QI

    **Can You Do It Yourself?**
    No. Using a QI is effectively mandatory because:
    - Constructive receipt rules prohibit direct access to funds
    - Safe harbor requires independent QI
    - IRS heavily scrutinizes self-facilitated exchanges
    - Risk of disqualification is too high

    **Alternatives:**
    While you cannot avoid a QI, you can:
    - Shop around for competitive pricing
    - Use a QI affiliated with your title company
    - Bundle services if doing multiple exchanges
    - Leverage relationships for discounts

    ### State-Specific Requirements

    **Some States Require:**
    - Specific licensing for QIs
    - Registration with state agencies
    - Bonding requirements
    - Insurance minimums
    - Annual reporting

    **Check Your State:**
    California, Nevada, Idaho, Oregon, Virginia, Washington have specific QI regulations

    ### How This Calculator Works

    This calculator helps you:

    - **Estimate Total QI Costs:** Base fee plus all additional charges
    - **Compare QI Providers:** Input different fee structures to compare
    - **Calculate Net Cost:** Factor in interest earned on exchange funds
    - **Assess ROI:** Compare QI fees to tax savings from exchange
    - **Budget Accurately:** Plan for all exchange-related expenses
    - **Evaluate Fee Structure:** Understand what you're paying for

    ### Tips to Minimize QI Fees

    1. **Choose Simple Structure:** Avoid unnecess arily complex exchanges
    2. **Limit Properties:** Fewer properties = lower fees
    3. **Plan Ahead:** Avoid rush fees with proper planning
    4. **Bundle Services:** Multiple exchanges may get discounts
    5. **Ask About Discounts:** Professional association memberships may qualify
    6. **Compare Multiple QIs:** Get 3-4 quotes before deciding
    7. **Read Fine Print:** Understand all potential additional fees
    8. **Simultaneous if Possible:** Coordinate timing to avoid delayed exchange fees

    ### When to Pay More for Better QI

    **Worth Premium Fees:**
    - Very large exchanges ($5M+)
    - Complex ownership structures
    - Tight timelines
    - First-time exchanger needing guidance
    - Multi-state properties
    - Commercial or unique property types

    **Can Save With Budget QI:**
    - Simple forward exchange
    - Single replacement property
    - Experienced exchanger
    - Standard residential investment property
    - Local properties in same state
  `,
  },
  calculator: {
    fields: [
      {
        name: 'exchangeType',
        label: 'Type of 1031 Exchange',
        type: 'select',
        options: [
          'Simultaneous Exchange',
          'Standard Forward/Delayed Exchange',
          'Reverse Exchange',
          'Build-to-Suit Exchange',
          'Improvement Exchange',
        ],
        defaultValue: 'Standard Forward/Delayed Exchange',
      },
      {
        name: 'baseFee',
        label: 'QI Base Fee ($)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'numRelinquishedProperties',
        label: 'Number of Relinquished Properties',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'numReplacementProperties',
        label: 'Number of Replacement Properties',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'additionalPropertyFee',
        label: 'Fee Per Additional Property ($)',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'wireTransferFees',
        label: 'Wire Transfer Fees (total $)',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'documentPreparationFee',
        label: 'Document Preparation Fee ($)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'rushFee',
        label: 'Rush/Expedite Fee (if applicable, $)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'otherFees',
        label: 'Other Miscellaneous Fees ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'exchangeFundAmount',
        label: 'Total Exchange Fund Amount ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'daysHeld',
        label: 'Estimated Days Funds Held by QI',
        type: 'number',
        defaultValue: 120,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate on Exchange Funds (%)',
        type: 'number',
        defaultValue: 1.5,
      },
      {
        name: 'deferredGain',
        label: 'Total Tax Deferred from Exchange ($)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'capitalGainsRate',
        label: 'Capital Gains Tax Rate Deferred (%)',
        type: 'number',
        defaultValue: 20,
      },
    ],
    results: [
      { label: 'Base QI Fee', isCurrency: true },
      { label: 'Additional Property Fees', isCurrency: true },
      { label: 'Wire & Document Fees', isCurrency: true },
      { label: 'Rush & Other Fees', isCurrency: true },
      { label: 'Total QI Fees', isCurrency: true },
      { label: 'Interest Earned on Exchange Funds', isCurrency: true },
      { label: 'Net QI Cost (After Interest)', isCurrency: true },
      { label: 'Tax Savings from Exchange', isCurrency: true },
      { label: 'QI Fees as % of Exchange Amount', isPercentage: true },
      { label: 'QI Fees as % of Tax Savings', isPercentage: true },
      { label: 'Return on QI Investment', isText: true },
      { label: 'Average Daily Cost', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        baseFee,
        numRelinquishedProperties,
        numReplacementProperties,
        additionalPropertyFee,
        wireTransferFees,
        documentPreparationFee,
        rushFee,
        otherFees,
        exchangeFundAmount,
        daysHeld,
        interestRate,
        deferredGain,
        capitalGainsRate,
      } = values;

      // Calculate additional property fees
      const totalProperties = numRelinquishedProperties + numReplacementProperties;
      const additionalProperties = Math.max(0, totalProperties - 2); // First 2 usually included in base
      const additionalPropertyFees = additionalProperties * additionalPropertyFee;

      // Wire and document fees
      const wireDocFees = wireTransferFees + documentPreparationFee;

      // Rush and other fees
      const rushOtherFees = rushFee + otherFees;

      // Total QI fees
      const totalQIFees = baseFee + additionalPropertyFees + wireDocFees + rushOtherFees;

      // Calculate interest earned
      const dailyRate = (interestRate / 100) / 365;
      const interestEarned = exchangeFundAmount * dailyRate * daysHeld;

      // Net cost after interest
      const netCost = totalQIFees - interestEarned;

      // Tax savings from exchange
      const taxSavings = deferredGain * (capitalGainsRate / 100);

      // Percentage calculations
      const feesAsPercentOfExchange = (totalQIFees / exchangeFundAmount) * 100;
      const feesAsPercentOfSavings = (totalQIFees / taxSavings) * 100;

      // ROI calculation
      const roi = taxSavings / totalQIFees;
      let roiText = '';
      if (roi > 100) {
        roiText = `Excellent - Save $${roi.toFixed(0)} for every $1 in fees`;
      } else if (roi > 50) {
        roiText = `Very Good - Save $${roi.toFixed(0)} for every $1 in fees`;
      } else if (roi > 20) {
        roiText = `Good - Save $${roi.toFixed(0)} for every $1 in fees`;
      } else if (roi > 10) {
        roiText = `Fair - Save $${roi.toFixed(0)} for every $1 in fees`;
      } else {
        roiText = `Low - Save $${roi.toFixed(0)} for every $1 in fees`;
      }

      // Average daily cost
      const avgDailyCost = totalQIFees / daysHeld;

      return {
        'Base QI Fee': baseFee,
        'Additional Property Fees': additionalPropertyFees,
        'Wire & Document Fees': wireDocFees,
        'Rush & Other Fees': rushOtherFees,
        'Total QI Fees': totalQIFees,
        'Interest Earned on Exchange Funds': interestEarned,
        'Net QI Cost (After Interest)': netCost,
        'Tax Savings from Exchange': taxSavings,
        'QI Fees as % of Exchange Amount': feesAsPercentOfExchange,
        'QI Fees as % of Tax Savings': feesAsPercentOfSavings,
        'Return on QI Investment': roiText,
        'Average Daily Cost': avgDailyCost,
      };
    },
  },
  metaTitle: "Qualified Intermediary Fee Calculator - Calculate 1031 Exchange QI Costs",
  metaDescription: "Free QI Fee Calculator for 1031 exchanges. Compare qualified intermediary pricing, calculate total exchange costs, estimate interest earnings, and analyze return on investment for your like-kind exchange.",
};
