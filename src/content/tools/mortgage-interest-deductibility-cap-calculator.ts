import { CalculatorContent } from '@/types';

export const MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Interest Deduction Calculator | $750K Debt Limit 2025',
  description: 'Calculate your mortgage interest tax deduction under the $750,000 debt limit. Estimate federal tax savings from home mortgage interest.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'mortgage-interest-deductibility-cap-calculator',
  article: {
    title: "Understanding Mortgage Interest Deduction Limits",
    content: `
    <h2>What is the Mortgage Interest Deduction?</h2>
    <p>The mortgage interest deduction allows homeowners to deduct interest paid on loans secured by their primary residence and one additional home. However, there are limits on how much debt qualifies for this deduction.</p>
    
    <h3>Current Mortgage Debt Limits (2025)</h3>
    <ul>
      <li><strong>Acquisition Debt:</strong> Interest on up to $750,000 of mortgage debt ($375,000 if married filing separately)</li>
      <li><strong>Grandfathered Debt:</strong> If you took out mortgage before December 15, 2017, the old limit of $1,000,000 still applies</li>
      <li><strong>Refinanced Grandfathered Debt:</strong> Can maintain $1 million limit if refinancing doesn't increase principal</li>
      <li><strong>Number of Homes:</strong> Can deduct interest on primary residence plus one second home</li>
    </ul>

    <h3>What Qualifies as Acquisition Debt?</h3>
    <p>Acquisition debt is a loan used to buy, build, or substantially improve your qualified home:</p>
    <ul>
      <li>Original purchase mortgage</li>
      <li>Construction loans</li>
      <li>Loans for substantial improvements (adding room, major renovation)</li>
      <li>Refinances of acquisition debt (up to the outstanding balance being refinanced)</li>
    </ul>

    <h3>What Doesn't Qualify?</h3>
    <ul>
      <li><strong>Home Equity Debt (after 2017):</strong> Loans not used to buy, build, or improve the home</li>
      <li><strong>Rental Properties:</strong> Deducted on Schedule E instead (different rules, no cap)</li>
      <li><strong>Third Home or Beyond:</strong> Interest is not deductible</li>
      <li><strong>Personal Loans:</strong> Even if secured by your home, if not used for home purchase/improvement</li>
    </ul>

    <h3>Calculating Deductible Interest with Debt Over $750,000</h3>
    <p>If your total mortgage debt exceeds $750,000, only a portion of your interest is deductible:</p>
    <p><strong>Formula:</strong> (Deductible Debt Limit / Total Mortgage Debt) × Total Interest Paid = Deductible Interest</p>
    <p><strong>Example:</strong> $1,000,000 mortgage debt, $40,000 interest paid:</p>
    <ul>
      <li>Deductible: ($750,000 / $1,000,000) × $40,000 = $30,000</li>
      <li>Non-deductible: $10,000</li>
    </ul>

    <h3>Grandfathered Mortgages (Pre-December 15, 2017)</h3>
    <p>If you took out your mortgage before December 15, 2017:</p>
    <ul>
      <li>The old $1 million limit still applies to you</li>
      <li>You can deduct interest on up to $1 million of acquisition debt</li>
      <li>You can maintain this limit when refinancing (if not increasing debt)</li>
      <li>This is a significant benefit for homeowners in high-cost areas</li>
    </ul>

    <h3>Impact on Homeowners in High-Cost Markets</h3>
    <p>The $750,000 limit particularly impacts homeowners in expensive markets:</p>
    <ul>
      <li><strong>High-Impact Areas:</strong> San Francisco, New York City, Los Angeles, Boston, Seattle, Washington DC</li>
      <li><strong>Median Home Price Impact:</strong> In markets where median homes exceed $1 million, many homeowners hit the cap</li>
      <li><strong>Second Homes:</strong> Combined debt on primary + second home counts toward $750,000 limit</li>
    </ul>

    <h3>Tax Planning Strategies</h3>
    <ul>
      <li><strong>Pay Down Non-Deductible Debt First:</strong> If you have multiple mortgages, prioritize paying down debt over $750,000</li>
      <li><strong>Refinancing Considerations:</strong> Understand how refinancing affects your grandfathered status</li>
      <li><strong>Second Home Strategy:</strong> Consider which home to designate as "second home" to maximize deduction</li>
      <li><strong>Standard Deduction Comparison:</strong> Calculate whether itemizing is better than standard deduction</li>
      <li><strong>Points and Fees:</strong> Mortgage points may be deductible in year of purchase</li>
    </ul>

    <h3>Standard Deduction vs. Itemizing</h3>
    <p>With higher standard deductions ($29,200 married, $14,600 single for 2025), many homeowners no longer benefit from itemizing:</p>
    <ul>
      <li>Calculate total itemized deductions (mortgage interest + SALT + charitable + medical)</li>
      <li>Compare to standard deduction</li>
      <li>Remember: SALT is capped at $10,000, which reduces total itemized deductions</li>
      <li>In some cases, mortgage interest alone isn't enough to exceed standard deduction</li>
    </ul>

    <h3>Special Situations</h3>
    <ul>
      <li><strong>Married Filing Separately:</strong> Each spouse limited to $375,000</li>
      <li><strong>Rental Use of Second Home:</strong> If rented >14 days, special allocation rules apply</li>
      <li><strong>Partial Business Use:</strong> Business portion of home not subject to mortgage debt cap</li>
      <li><strong>Co-owners:</strong> Each co-owner can deduct their share of interest paid</li>
    </ul>

    <h3>Record Keeping Requirements</h3>
    <ul>
      <li>Keep Form 1098 (Mortgage Interest Statement) from lender</li>
      <li>Maintain loan documents showing acquisition debt vs. equity debt</li>
      <li>Track substantial improvements that converted equity debt to acquisition debt</li>
      <li>Document date of loan origination (for grandfathered status)</li>
    </ul>

    <h3>Future of the Mortgage Interest Deduction</h3>
    <p>The $750,000 limit is set to expire after 2025, reverting to $1 million limit unless Congress acts. Proposed changes include:</p>
    <ul>
      <li>Extending the $750,000 limit permanently</li>
      <li>Restoring the $1 million limit</li>
      <li>Further reducing the limit</li>
      <li>Eliminating the deduction for second homes</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Mortgage Debt', isCurrency: true },
      { label: 'Deductible Debt Limit', isCurrency: true },
      { label: 'Total Mortgage Interest Paid', isCurrency: true },
      { label: 'Deductible Portion of Interest', isCurrency: true },
      { label: 'Non-Deductible Interest', isCurrency: true },
      { label: 'Federal Tax Savings from Deduction', isCurrency: true },
      { label: 'State Tax Savings from Deduction', isCurrency: true },
      { label: 'Total Tax Savings', isCurrency: true },
    ],
    fields: [
      {
        name: 'primaryMortgageBalance',
        label: 'Primary Residence Mortgage Balance',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'secondHomeMortgageBalance',
        label: 'Second Home Mortgage Balance (if any)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'primaryMortgageInterest',
        label: 'Primary Residence Interest Paid (annual)',
        type: 'number',
        defaultValue: 24000,
      },
      {
        name: 'secondHomeMortgageInterest',
        label: 'Second Home Interest Paid (annual)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'isGrandfathered',
        label: 'Mortgage Before Dec 15, 2017 (Grandfathered)?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'filingStatus',
        label: 'Married Filing Jointly?',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 32,
      },
      {
        name: 'stateTaxRate',
        label: 'State Tax Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
    ],
    calculate: (data) => {
      const { 
        primaryMortgageBalance,
        secondHomeMortgageBalance,
        primaryMortgageInterest,
        secondHomeMortgageInterest,
        isGrandfathered,
        filingStatus,
        federalTaxRate,
        stateTaxRate
      } = data;

      const totalMortgageDebt = primaryMortgageBalance + secondHomeMortgageBalance;
      const totalInterestPaid = primaryMortgageInterest + secondHomeMortgageInterest;
      
      // Determine debt limit based on grandfathered status and filing status
      let debtLimit;
      if (isGrandfathered) {
        debtLimit = filingStatus ? 1000000 : 500000;
      } else {
        debtLimit = filingStatus ? 750000 : 375000;
      }
      
      // Calculate deductible portion of interest
      let deductibleInterest;
      let nonDeductibleInterest;
      
      if (totalMortgageDebt <= debtLimit) {
        deductibleInterest = totalInterestPaid;
        nonDeductibleInterest = 0;
      } else {
        const deductibleRatio = debtLimit / totalMortgageDebt;
        deductibleInterest = totalInterestPaid * deductibleRatio;
        nonDeductibleInterest = totalInterestPaid - deductibleInterest;
      }
      
      const federalTaxSavings = deductibleInterest * (federalTaxRate / 100);
      const stateTaxSavings = deductibleInterest * (stateTaxRate / 100);
      const totalTaxSavings = federalTaxSavings + stateTaxSavings;

      return [
        { label: 'Total Mortgage Debt', value: totalMortgageDebt, isCurrency: true },
        { label: 'Deductible Debt Limit', value: debtLimit, isCurrency: true },
        { label: 'Total Mortgage Interest Paid', value: totalInterestPaid, isCurrency: true },
        { label: 'Deductible Portion of Interest', value: deductibleInterest, isCurrency: true },
        { label: 'Non-Deductible Interest', value: nonDeductibleInterest, isCurrency: true },
        { label: 'Federal Tax Savings from Deduction', value: federalTaxSavings, isCurrency: true },
        { label: 'State Tax Savings from Deduction', value: stateTaxSavings, isCurrency: true },
        { label: 'Total Tax Savings', value: totalTaxSavings, isCurrency: true },
      ];
    },
  },
};
