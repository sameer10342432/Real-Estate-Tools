import { CalculatorContent } from "@/types";

export const firptaWithholdingCalculator: CalculatorContent = {
  title: "FIRPTA Withholding Calculator",
  description: "Calculate FIRPTA tax withholding for foreign investment in US real estate. Determine withholding obligations, exemptions, and reduced rates for foreign sellers.",
  icon: 'Icon',
  category: "Real Estate Tax",
  slug: "firpta-withholding-calculator",
  article: {
    title: "FIRPTA Withholding Calculator - Foreign Investment Real Property Tax",
    content: `
    ## What Is FIRPTA?

    FIRPTA (Foreign Investment in Real Property Tax Act) is a US tax law that requires buyers to withhold a percentage of the sales price when purchasing US real estate from a foreign person. The withheld amount is sent to the IRS as prepayment of the seller's potential capital gains tax.

    ### Why FIRPTA Exists

    **Tax Collection Mechanism:**
    FIRPTA ensures the IRS collects taxes from foreign sellers who may not file US tax returns. Without withholding, foreign sellers could sell US property and never pay the required capital gains tax.

    **Buyer's Responsibility:**
    The burden falls on the buyer to:
    - Determine if the seller is a foreign person
    - Calculate the correct withholding amount
    - Submit Form 8288 and payment to IRS within 20 days of closing
    - Provide Form 8288-A to seller as proof of withholding

    ### Who Is a Foreign Person?

    **Individuals:**
    - Non-resident alien (non-US citizen not living in US)
    - Foreign corporation
    - Foreign partnership
    - Foreign trust or estate
    - Anyone who doesn't provide US taxpayer ID

    **NOT Foreign Persons:**
    - US citizens (even if living abroad)
    - US resident aliens (green card holders)
    - US corporations, partnerships, trusts
    - Anyone with US tax residency status

    ### Standard FIRPTA Withholding Rates

    **15% Standard Rate:**
    The buyer must withhold **15% of the sale price** for most transactions.

    **10% Reduced Rate (Residential Exception):**
    Reduced to **10%** if ALL of these apply:
    - Sales price is $1,000,000 or less
    - Buyer (or family member) will use as residence
    - Buyer intends to live there at least 50% of days for 2 years

    **No Withholding (Personal Residence Exemption):**
    **0%** withholding if:
    - Sales price is $300,000 or less
    - Buyer will use as principal residence

    ### Exemptions from FIRPTA Withholding

    **Seller-Based Exemptions:**
    - Seller provides non-foreign affidavit (Form W-9 or equivalent)
    - Seller is US citizen or resident alien
    - Property sold at a loss (no gain realized)
    - Transaction qualifies for 1031 exchange treatment

    **Property-Based Exemptions:**
    - Sales price ≤ $300,000 AND buyer uses as residence
    - Stock in US corporation (different rules apply)
    - Disposition by way of gift
    - Transfer to US person in exchange solely for stock

    **Withholding Certificate Exemptions:**
    - IRS grants withholding certificate (Form 8288-B)
    - Seller's maximum tax liability is zero
    - Seller agrees to file US tax return and pay tax
    - Gain is exempt under tax treaty

    ### Reduced Withholding via Certificate

    **Form 8288-B Application:**
    Seller can apply to IRS for reduced or zero withholding if:

    **Maximum Tax Calculation:**
    - Expected tax is less than 15% withholding
    - Seller has losses from prior years
    - Deductions and credits reduce tax liability
    - Basis in property is high relative to sales price

    **Payment Agreement:**
    - Seller agrees to file return and pay actual tax
    - IRS issues withholding certificate
    - Buyer withholds reduced amount specified

    **Timeline:**
    - Apply before or shortly after closing
    - IRS typically responds in 90 days
    - Can request expedited processing

    ### FIRPTA Withholding Process

    **Step 1: Determine Foreign Status (Before Closing)**
    - Request Form W-9 from seller
    - If seller won't provide W-9, assume foreign status
    - Obtain certification of non-foreign status if available

    **Step 2: Calculate Withholding (At Closing)**
    - Determine applicable rate (0%, 10%, or 15%)
    - Calculate amount based on gross sales price
    - Withhold from seller's proceeds at closing

    **Step 3: File and Pay (Within 20 Days After Closing)**
    - Complete Form 8288 (US Withholding Tax Return)
    - Complete Form 8288-A (Statement of Withholding on Dispositions)
    - Mail forms and payment to IRS address
    - File one set of forms, provide copy of 8288-A to seller

    **Step 4: Provide Documentation**
    - File Form 8288-A copy with seller's copy for their records
    - Seller uses stamped Form 8288-A to claim credit on tax return
    - Keep copies for your records

    ### Penalties for Non-Compliance

    **Buyer Penalties:**
    If buyer fails to withhold when required:
    - Buyer is liable for the tax that should have been withheld
    - Interest accrues from closing date
    - Penalties for late payment
    - Buyer must pay even if seller already paid the tax

    **How to Avoid:**
    - Always obtain Form W-9 or non-foreign certification
    - When in doubt, withhold 15%
    - File Form 8288 timely
    - Keep thorough documentation

    ### Foreign Seller's Tax Obligations

    **Still Must File Tax Return:**
    Even with withholding, foreign seller must:
    - File Form 1040-NR (Non-Resident Alien Tax Return)
    - Report the sale on Schedule D
    - Calculate actual capital gains tax
    - Claim credit for amount withheld
    - Pay additional tax or receive refund

    **Actual Tax vs. Withholding:**
    - Withholding is prepayment, not final tax
    - Actual tax may be higher or lower
    - Refund possible if withholding exceeds actual tax
    - Must file return to claim refund

    ### Special Situations

    **1031 Exchange:**
    - FIRPTA applies to the relinquished property
    - Withholding may be reduced or eliminated
    - Must file for withholding certificate
    - Complex rules for foreign exchangers

    **Estate Sales:**
    - Estate of deceased foreign person subject to FIRPTA
    - Executor responsible for compliance
    - May qualify for exemptions
    - Coordinate with estate tax rules

    **Partnership/LLC Interests:**
    - Sale of interest in entity owning US real estate
    - Look-through rules may apply
    - FIRPTA applies if 50%+ of value is US real property
    - Buyer must withhold 10% of amount realized

    **Installment Sales:**
    - Withholding required at each installment payment
    - Rate applies to each payment
    - Seller can seek reduced withholding certificate
    - Complex allocation rules

    ### How This Calculator Works

    This calculator determines:

    - **Applicable Withholding Rate:** 0%, 10%, or 15% based on circumstances
    - **Required Withholding Amount:** Dollar amount buyer must withhold
    - **Seller's Net Proceeds:** After withholding deduction
    - **Exemption Analysis:** Whether exemptions apply
    - **Estimated Actual Tax:** Seller's likely final tax liability
    - **Potential Refund/Additional Tax:** Difference between withholding and actual tax
    - **Filing Requirements:** Forms and deadlines

    ### Tax Treaties and Reduced Rates

    **Income Tax Treaties:**
    Some countries have tax treaties with US that may:
    - Reduce capital gains tax rate
    - Eliminate tax on certain gains
    - Provide different withholding rules
    - Require different documentation

    **Common Treaty Countries:**
    - Canada
    - United Kingdom
    - Germany
    - France
    - Japan
    - Australia
    - Many others

    **Claiming Treaty Benefits:**
    - Seller must apply for withholding certificate
    - Provide Form W-8BEN with treaty claim
    - IRS must approve reduced withholding
    - Cannot rely on treaty without IRS approval

    ### State-Level Withholding

    **Additional State Requirements:**
    Some states have their own withholding requirements for non-residents:

    **California:** 3.3% withholding on sales above $100,000

    **Hawaii:** 7.25% (for residents) or 8.25% (for non-residents) on amount realized

    **New York:** Various rates depending on sale price

    **Other States:** Check local requirements

    ### Best Practices

    **For Buyers:**
    1. Always request Form W-9 early in transaction
    2. When in doubt, withhold 15%
    3. File Form 8288 within 20 days
    4. Keep documentation for 7 years
    5. Consult tax professional on complex deals

    **For Foreign Sellers:**
    1. Apply for withholding certificate before closing
    2. Provide accurate tax documentation
    3. File US tax return to claim refund
    4. Consider structuring to minimize tax
    5. Consult US tax advisor and CPA

    **For Real Estate Professionals:**
    1. Explain FIRPTA obligations to clients
    2. Include FIRPTA clause in purchase contracts
    3. Coordinate with title company and closing attorney
    4. Verify foreign/non-foreign status early
    5. Ensure timely filing of forms

    ### Common Mistakes to Avoid

    **Mistake #1:** Relying on seller's verbal assurance of US status
    - Solution: Always get written certification (Form W-9)

    **Mistake #2:** Calculating withholding on net proceeds instead of gross sales price
    - Solution: Use full sales price as base

    **Mistake #3:** Missing the 20-day filing deadline
    - Solution: Calendar reminder, file early

    **Mistake #4:** Not withholding on transactions under $300,000
    - Solution: Verify buyer's residence intent first

    **Mistake #5:** Assuming corporation is US entity without verification
    - Solution: Obtain documentation of incorporation

    ### When to Consult Professionals

    Seek expert advice when:
    - Seller is foreign but claims exemption
    - Sales price is close to threshold amounts
    - Transaction involves entities or partnerships
    - Seller requests withholding certificate
    - Property is used partially for business and residence
    - 1031 exchange is involved
    - Tax treaty benefits are claimed
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price ($)',
        type: 'number',
        defaultValue: 750000,
      },
      {
        name: 'sellerStatus',
        label: 'Seller Status',
        type: 'select',
        options: [
          'Foreign Person (Non-resident alien)',
          'US Citizen',
          'US Resident Alien (Green Card)',
          'US Corporation/Entity',
          'Uncertain - No documentation provided',
        ],
        defaultValue: 'Foreign Person (Non-resident alien)',
      },
      {
        name: 'propertyUse',
        label: 'Buyer\'s Intended Property Use',
        type: 'select',
        options: [
          'Principal Residence (will live there)',
          'Second Home/Vacation Property',
          'Investment/Rental Property',
          'Business/Commercial Use',
        ],
        defaultValue: 'Principal Residence (will live there)',
      },
      {
        name: 'adjustedBasis',
        label: 'Seller\'s Adjusted Basis ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'sellingExpenses',
        label: 'Selling Expenses (commissions, fees, etc.) ($)',
        type: 'number',
        defaultValue: 45000,
      },
      {
        name: 'hasWithholdingCertificate',
        label: 'Withholding Certificate from IRS',
        type: 'select',
        options: [
          'No withholding certificate',
          'Certificate reducing withholding to specific amount',
          'Certificate eliminating withholding (zero)',
        ],
        defaultValue: 'No withholding certificate',
      },
      {
        name: 'certificateAmount',
        label: 'If Certificate, Reduced Withholding Amount ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'capitalGainsRate',
        label: 'Seller\'s Estimated Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'stateTaxRate',
        label: 'Applicable State Tax Rate (%)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Seller Foreign Status', isText: true },
      { label: 'Applicable FIRPTA Rate', isPercentage: true },
      { label: 'Required FIRPTA Withholding', isCurrency: true },
      { label: 'State Withholding (if applicable)', isCurrency: true },
      { label: 'Total Withholding Required', isCurrency: true },
      { label: 'Seller Net Proceeds After Withholding', isCurrency: true },
      { label: 'Realized Gain on Sale', isCurrency: true },
      { label: 'Estimated Federal Tax', isCurrency: true },
      { label: 'Estimated State Tax', isCurrency: true },
      { label: 'Total Estimated Actual Tax', isCurrency: true },
      { label: 'Overwithholding (Potential Refund)', isCurrency: true },
      { label: 'Additional Tax Due', isCurrency: true },
      { label: 'Form 8288 Filing Deadline', isText: true },
      { label: 'Exemption Status', isText: true },
    ],
    calculate: (values) => {
      const {
        salePrice,
        sellerStatus,
        propertyUse,
        adjustedBasis,
        sellingExpenses,
        hasWithholdingCertificate,
        certificateAmount,
        capitalGainsRate,
        stateTaxRate,
      } = values;

      // Determine foreign status
      let isForeign = false;
      let statusText = '';
      
      if (sellerStatus.includes('Foreign Person')) {
        isForeign = true;
        statusText = 'Foreign Person - FIRPTA withholding required';
      } else if (sellerStatus.includes('Uncertain')) {
        isForeign = true;
        statusText = 'Status uncertain - Treat as foreign (withhold to be safe)';
      } else {
        statusText = 'US Person - No FIRPTA withholding required';
      }

      let firptaRate = 0;
      let firptaWithholding = 0;
      let exemptionStatus = '';

      if (isForeign) {
        // Check for exemptions
        if (salePrice <= 300000 && propertyUse.includes('Principal Residence')) {
          firptaRate = 0;
          exemptionStatus = '✓ EXEMPT - Sale price ≤ $300,000 and buyer principal residence';
        } else if (hasWithholdingCertificate.includes('eliminating')) {
          firptaRate = 0;
          exemptionStatus = '✓ EXEMPT - IRS withholding certificate (zero withholding)';
        } else if (hasWithholdingCertificate.includes('reducing')) {
          firptaWithholding = certificateAmount;
          firptaRate = (certificateAmount / salePrice) * 100;
          exemptionStatus = `Reduced - IRS certificate specifies $${certificateAmount.toLocaleString()}`;
        } else if (salePrice <= 1000000 && propertyUse.includes('Principal Residence')) {
          firptaRate = 10;
          firptaWithholding = salePrice * 0.10;
          exemptionStatus = 'Reduced Rate (10%) - Sale price ≤ $1M and buyer residence';
        } else {
          firptaRate = 15;
          firptaWithholding = salePrice * 0.15;
          exemptionStatus = 'Standard Rate (15%) - No exemptions apply';
        }
      } else {
        exemptionStatus = 'Not applicable - Seller is US person';
      }

      // State withholding (simplified)
      const stateWithholding = 0; // Would calculate based on specific state rules

      // Total withholding
      const totalWithholding = firptaWithholding + stateWithholding;

      // Net proceeds
      const grossProceeds = salePrice;
      const netProceedsAfterWithholding = grossProceeds - totalWithholding;

      // Calculate actual tax liability
      const realizedGain = Math.max(0, salePrice - adjustedBasis - sellingExpenses);
      const federalTax = realizedGain * (capitalGainsRate / 100);
      const stateTax = realizedGain * (stateTaxRate / 100);
      const totalActualTax = federalTax + stateTax;

      // Refund or additional tax
      const overwithholding = Math.max(0, totalWithholding - totalActualTax);
      const additionalTaxDue = Math.max(0, totalActualTax - totalWithholding);

      // Filing deadline (20 days after closing)
      const closingDate = new Date();
      const deadlineDate = new Date(closingDate);
      deadlineDate.setDate(deadlineDate.getDate() + 20);
      const deadlineText = isForeign ? 
        `${deadlineDate.toLocaleDateString()} (20 days after closing)` :
        'Not applicable - No withholding required';

      return {
        'Seller Foreign Status': statusText,
        'Applicable FIRPTA Rate': firptaRate,
        'Required FIRPTA Withholding': firptaWithholding,
        'State Withholding (if applicable)': stateWithholding,
        'Total Withholding Required': totalWithholding,
        'Seller Net Proceeds After Withholding': netProceedsAfterWithholding,
        'Realized Gain on Sale': realizedGain,
        'Estimated Federal Tax': federalTax,
        'Estimated State Tax': stateTax,
        'Total Estimated Actual Tax': totalActualTax,
        'Overwithholding (Potential Refund)': overwithholding,
        'Additional Tax Due': additionalTaxDue,
        'Form 8288 Filing Deadline': deadlineText,
        'Exemption Status': exemptionStatus,
      };
    },
  },
  metaTitle: "FIRPTA Withholding Calculator - Foreign Investment Real Property Tax",
  metaDescription: "Free FIRPTA withholding calculator. Calculate US tax withholding for foreign sellers, determine exemptions, assess reduced rates, and estimate refunds for foreign investment in US real estate.",
};
