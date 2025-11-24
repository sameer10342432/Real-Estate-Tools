import { CalculatorContent } from '@/types';

export const SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT: CalculatorContent = {
  title: 'Section 179 (Real Estate) Deduction',
  description: 'Calculate Section 179 deductions for qualifying real estate property improvements and equipment for instant tax savings.',
  slug: 'section-179-real-estate-deduction',
  icon: '📝',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Section 179 Deduction for Real Estate Professionals',
    content: `
    <h2>Understanding Section 179 for Real Estate</h2>
    <p>Section 179 of the IRS tax code allows real estate professionals and property investors to immediately deduct the cost of qualifying business equipment and certain property improvements, rather than depreciating them over many years. This powerful tax benefit can significantly reduce your taxable income in the year you make the purchase.</p>
    
    <h3>What Qualifies for Section 179 in Real Estate?</h3>
    <p>For real estate investors and professionals, Section 179 typically applies to:</p>
    <ul>
      <li><strong>Tangible Personal Property:</strong> Appliances, furniture, carpeting, and fixtures purchased for rental properties</li>
      <li><strong>Business Equipment:</strong> Computers, printers, cameras, and office equipment used in your real estate business</li>
      <li><strong>Vehicles:</strong> Business vehicles used in your real estate activities (subject to specific limits)</li>
      <li><strong>HVAC Systems:</strong> Qualifying heating and cooling equipment installed in nonresidential properties</li>
      <li><strong>Security Systems:</strong> Alarm systems, cameras, and access control systems for business properties</li>
      <li><strong>Roofing:</strong> Nonresidential roofing improvements meeting specific requirements</li>
    </ul>

    <h3>2024 Section 179 Limits</h3>
    <ul>
      <li><strong>Maximum Deduction:</strong> $1,220,000 for 2024</li>
      <li><strong>Phase-Out Threshold:</strong> Begins at $3,050,000 in equipment purchases</li>
      <li><strong>Income Limitation:</strong> Deduction cannot exceed business taxable income</li>
      <li><strong>SUV Limit:</strong> $28,900 for vehicles over 6,000 lbs GVWR</li>
    </ul>

    <h3>How to Use the Section 179 Calculator</h3>
    <p>This calculator helps you determine your eligible Section 179 deduction. You will need to provide:</p>
    <ul>
      <li><strong>Equipment Cost:</strong> Total cost of qualifying equipment and improvements</li>
      <li><strong>Business Income:</strong> Your taxable business income for the year</li>
      <li><strong>Total Equipment Purchases:</strong> Total equipment purchases (to check phase-out)</li>
      <li><strong>Tax Rate:</strong> Your marginal tax rate</li>
    </ul>

    <h3>Section 179 vs. Bonus Depreciation</h3>
    <p>Key differences to consider:</p>
    <ul>
      <li><strong>Income Limit:</strong> Section 179 limited by business income; bonus depreciation is not</li>
      <li><strong>Purchase Limits:</strong> Section 179 has dollar caps; bonus depreciation does not</li>
      <li><strong>Property Types:</strong> Different qualifying property rules for each</li>
      <li><strong>Strategic Use:</strong> Can use both in the same year for different assets</li>
    </ul>

    <h3>Maximizing Your Section 179 Deduction</h3>
    <ul>
      <li><strong>Time Your Purchases:</strong> Property must be purchased and placed in service by December 31</li>
      <li><strong>Document Business Use:</strong> Maintain records showing business use percentage</li>
      <li><strong>Consider Cash Flow:</strong> Balance immediate deduction with cash flow needs</li>
      <li><strong>Combine Strategies:</strong> Use with bonus depreciation for maximum benefit</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. Section 179 rules are complex and have specific qualifying requirements. Real property (buildings and structural components) generally does not qualify for Section 179, with limited exceptions for certain improvements. Always consult with a qualified tax professional or CPA before claiming Section 179 deductions. Refer to IRS Publication 946 for detailed guidance.</p>

    <h3>Additional Resources</h3>
    <p>For comprehensive tax planning, also explore our <strong>Bonus Depreciation Calculator</strong> and <strong>Cost Segregation Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'equipmentCost',
        label: 'Qualifying Equipment Cost',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'businessIncome',
        label: 'Business Taxable Income',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'totalPurchases',
        label: 'Total Equipment Purchases',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'taxRate',
        label: 'Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 35,
      },
    ],
    results: [
      { label: 'Maximum Section 179 Deduction', isCurrency: true },
      { label: 'Phase-Out Reduction', isCurrency: true },
      { label: 'Allowable Deduction', isCurrency: true },
      { label: 'Estimated Tax Savings', isCurrency: true },
    ],
    calculate: (values) => {
      const { equipmentCost, businessIncome, totalPurchases, taxRate } = values;
      
      const maxDeduction = 1220000;
      const phaseOutThreshold = 3050000;
      
      let phaseOutReduction = 0;
      if (totalPurchases > phaseOutThreshold) {
        phaseOutReduction = totalPurchases - phaseOutThreshold;
      }
      
      const deductionLimit = Math.max(0, maxDeduction - phaseOutReduction);
      const allowableDeduction = Math.min(equipmentCost, deductionLimit, businessIncome);
      const taxSavings = allowableDeduction * (taxRate / 100);

      return [
        { label: 'Maximum Section 179 Deduction', value: maxDeduction.toFixed(2), isCurrency: true },
        { label: 'Phase-Out Reduction', value: phaseOutReduction.toFixed(2), isCurrency: true },
        { label: 'Allowable Deduction', value: allowableDeduction.toFixed(2), isCurrency: true },
        { label: 'Estimated Tax Savings', value: taxSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};