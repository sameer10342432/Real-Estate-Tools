import { CalculatorContent } from "@/types";

export const exchange1031BootCalculator: CalculatorContent = {
  title: "1031 Exchange Boot Calculator",
  description: "Calculate taxable boot received in a 1031 exchange. Analyze cash boot, mortgage boot, and net boot to determine your tax liability in like-kind exchanges.",
  icon: 'Icon',
  category: "Real Estate Tax",
  slug: "1031-exchange-boot-calculator",
  article: {
    title: "1031 Exchange Boot Calculator - Calculate Taxable Boot & Tax Liability",
    content: `
    ## What is Boot in a 1031 Exchange?

    "Boot" refers to any non-like-kind property received in a 1031 exchange transaction. Boot is taxable and can significantly impact the tax benefits of your exchange. Understanding boot is crucial for real estate investors looking to maximize tax deferral.

    ### Types of Boot

    **Cash Boot:** This is the most common type of boot. It occurs when you receive cash as part of the exchange transaction. All cash received is considered taxable boot.

    **Mortgage Boot:** This occurs when the mortgage on the replacement property is less than the mortgage on the relinquished property. The difference is considered boot and may be taxable.

    **Personal Property Boot:** If you receive personal property (like furniture or equipment) that doesn't qualify as like-kind property, it's considered boot.

    **Net Boot:** This is the total boot received after accounting for cash boot and mortgage boot, minus any qualified intermediary fees or exchange expenses.

    ### How Boot Affects Your 1031 Exchange

    - **Partial Tax Deferral:** Boot triggers recognition of gain up to the amount of boot received
    - **Capital Gains Tax:** Boot is taxed as capital gains at your applicable rate (15%, 20%, or 23.8% with NIIT)
    - **Depreciation Recapture:** Boot may also trigger depreciation recapture taxes at a higher 25% rate
    - **State Taxes:** Don't forget that boot may also be subject to state income taxes

    ### Strategies to Minimize Boot

    1. **Reinvest All Proceeds:** Ensure the replacement property value equals or exceeds the relinquished property
    2. **Match or Increase Debt:** Keep the mortgage on the replacement property equal to or greater than the relinquished property
    3. **Add Cash:** Bring additional cash to closing to offset mortgage boot
    4. **Use Multiple Properties:** Consider acquiring multiple replacement properties to meet the value requirements

    ### Common Scenarios Involving Boot

    **Trading Down:** If you sell a $1M property and buy a $800K property, you'll receive $200K in cash boot
    
    **Debt Reduction:** If you pay off a $300K mortgage but only take on a $200K mortgage on the new property, you have $100K mortgage boot
    
    **Mixed-Use Property:** If part of your property is personal use, that portion may generate boot

    ### How This Calculator Works

    This calculator helps you determine:

    - **Total Cash Boot:** Cash received from the transaction
    - **Mortgage Boot:** Debt relief that creates taxable income
    - **Gross Boot:** Total boot before expenses
    - **Net Taxable Boot:** Boot after deducting exchange expenses
    - **Estimated Tax Liability:** Capital gains and depreciation recapture taxes on boot
    - **Deferred Gain:** Amount of gain that remains tax-deferred
    - **Boot as Percentage:** How much of your gain is taxable vs. deferred

    ### Tax Implications of Boot

    Boot is taxed as capital gains, and the tax rate depends on:
    - Your income level
    - How long you held the property
    - Whether depreciation recapture applies
    - State and local tax rates

    For properties held over one year, federal long-term capital gains rates are:
    - 0% for taxable income up to $44,625 (single) or $89,250 (married)
    - 15% for income between those thresholds and $492,300 (single) or $553,850 (married)
    - 20% for income above those thresholds
    - Additional 3.8% Net Investment Income Tax (NIIT) may apply for high earners

    ### Important Considerations

    **Qualified Intermediary Fees:** These can be deducted from boot, reducing your taxable amount

    **Related Party Exchanges:** Special rules apply when exchanging with related parties

    **Multiple Properties:** You can use multiple replacement properties to avoid boot

    **45/180 Day Rules:** Boot calculations must be finalized within the exchange timeline

    ### Professional Guidance

    Boot calculations can be complex, especially with:
    - Multiple properties
    - Mixed-use properties
    - Partnership interests
    - Prior depreciation

    Always consult with a qualified intermediary and tax professional before executing a 1031 exchange.
  `,
  },
  calculator: {
    fields: [
      {
        name: 'relinquishedValue',
        label: 'Relinquished Property Sale Price',
        type: 'number',
        defaultValue: 800000,
      },
      {
        name: 'relinquishedMortgage',
        label: 'Mortgage on Relinquished Property',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'replacementValue',
        label: 'Replacement Property Purchase Price',
        type: 'number',
        defaultValue: 750000,
      },
      {
        name: 'replacementMortgage',
        label: 'Mortgage on Replacement Property',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'cashReceived',
        label: 'Cash Received from Transaction',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'exchangeExpenses',
        label: 'Qualified Exchange Expenses (QI fees, etc.)',
        type: 'number',
        defaultValue: 3500,
      },
      {
        name: 'adjustedBasis',
        label: 'Adjusted Basis of Relinquished Property',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'depreciationTaken',
        label: 'Total Depreciation Taken',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'capitalGainsRate',
        label: 'Long-Term Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'depreciationRecaptureRate',
        label: 'Depreciation Recapture Rate (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'stateIncomeTaxRate',
        label: 'State Income Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      { label: 'Cash Boot', isCurrency: true },
      { label: 'Mortgage Boot', isCurrency: true },
      { label: 'Gross Boot', isCurrency: true },
      { label: 'Exchange Expenses Deduction', isCurrency: true },
      { label: 'Net Taxable Boot', isCurrency: true },
      { label: 'Total Realized Gain', isCurrency: true },
      { label: 'Gain Recognized (Taxable)', isCurrency: true },
      { label: 'Deferred Gain', isCurrency: true },
      { label: 'Depreciation Recapture Tax', isCurrency: true },
      { label: 'Capital Gains Tax', isCurrency: true },
      { label: 'State Income Tax', isCurrency: true },
      { label: 'Total Federal Tax on Boot', isCurrency: true },
      { label: 'Total Tax Liability (Federal + State)', isCurrency: true },
      { label: 'Boot as % of Total Gain', isPercentage: true },
      { label: 'Tax Deferral Efficiency', isPercentage: true },
    ],
    calculate: (values) => {
      const {
        relinquishedValue,
        relinquishedMortgage,
        replacementValue,
        replacementMortgage,
        cashReceived,
        exchangeExpenses,
        adjustedBasis,
        depreciationTaken,
        capitalGainsRate,
        depreciationRecaptureRate,
        stateIncomeTaxRate,
      } = values;

      // Calculate cash boot
      const relinquishedEquity = relinquishedValue - relinquishedMortgage;
      const replacementEquity = replacementValue - replacementMortgage;
      const cashBoot = Math.max(0, cashReceived + Math.max(0, relinquishedEquity - replacementEquity - cashReceived));

      // Calculate mortgage boot (debt relief)
      const mortgageBoot = Math.max(0, relinquishedMortgage - replacementMortgage);

      // Gross boot before expenses
      const grossBoot = cashBoot + mortgageBoot;

      // Net taxable boot after exchange expenses
      const netTaxableBoot = Math.max(0, grossBoot - exchangeExpenses);

      // Calculate realized gain
      const totalRealizedGain = relinquishedValue - adjustedBasis;

      // Recognized gain (lesser of boot or realized gain)
      const recognizedGain = Math.min(netTaxableBoot, totalRealizedGain);

      // Deferred gain
      const deferredGain = Math.max(0, totalRealizedGain - recognizedGain);

      // Calculate depreciation recapture (up to depreciation taken, capped at recognized gain)
      const depreciationRecapture = Math.min(recognizedGain, depreciationTaken);
      const depreciationRecaptureTax = depreciationRecapture * (depreciationRecaptureRate / 100);

      // Capital gains on remaining recognized gain
      const capitalGainPortion = Math.max(0, recognizedGain - depreciationRecapture);
      const capitalGainsTax = capitalGainPortion * (capitalGainsRate / 100);

      // State income tax
      const stateIncomeTax = recognizedGain * (stateIncomeTaxRate / 100);

      // Total taxes
      const totalFederalTax = depreciationRecaptureTax + capitalGainsTax;
      const totalTaxLiability = totalFederalTax + stateIncomeTax;

      // Efficiency metrics
      const bootPercentage = totalRealizedGain > 0 ? (recognizedGain / totalRealizedGain) * 100 : 0;
      const taxDeferralEfficiency = totalRealizedGain > 0 ? (deferredGain / totalRealizedGain) * 100 : 0;

      return {
        'Cash Boot': cashBoot,
        'Mortgage Boot': mortgageBoot,
        'Gross Boot': grossBoot,
        'Exchange Expenses Deduction': exchangeExpenses,
        'Net Taxable Boot': netTaxableBoot,
        'Total Realized Gain': totalRealizedGain,
        'Gain Recognized (Taxable)': recognizedGain,
        'Deferred Gain': deferredGain,
        'Depreciation Recapture Tax': depreciationRecaptureTax,
        'Capital Gains Tax': capitalGainsTax,
        'State Income Tax': stateIncomeTax,
        'Total Federal Tax on Boot': totalFederalTax,
        'Total Tax Liability (Federal + State)': totalTaxLiability,
        'Boot as % of Total Gain': bootPercentage,
        'Tax Deferral Efficiency': taxDeferralEfficiency,
      };
    },
  },
  metaTitle: "1031 Exchange Boot Calculator - Calculate Taxable Boot & Tax Liability",
  metaDescription: "Free 1031 Exchange Boot Calculator. Calculate cash boot, mortgage boot, and net taxable boot in like-kind exchanges. Estimate capital gains tax, depreciation recapture, and total tax liability on boot received.",
};
