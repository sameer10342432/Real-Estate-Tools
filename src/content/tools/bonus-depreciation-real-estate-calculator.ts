import { CalculatorContent } from '@/types';

export const BONUS_DEPRECIATION_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Bonus Depreciation (Real Estate) Calculator',
  description: 'Calculate bonus depreciation deductions for real estate investments under current tax law and maximize your first-year tax benefits.',
  slug: 'bonus-depreciation-real-estate-calculator',
  icon: '💸',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Maximizing Real Estate Tax Benefits with Bonus Depreciation',
    content: `
    <h2>Understanding Bonus Depreciation for Real Estate</h2>
    <p>Bonus depreciation is a powerful tax incentive that allows real estate investors to accelerate depreciation deductions on qualifying property improvements and equipment. Under current tax law, investors can deduct a significant percentage of the cost of eligible property in the first year, rather than spreading deductions over many years.</p>
    
    <h3>What Qualifies for Bonus Depreciation?</h3>
    <p>For real estate investors, bonus depreciation typically applies to:</p>
    <ul>
      <li><strong>Personal Property:</strong> Appliances, furniture, carpeting, and fixtures with a recovery period of 20 years or less</li>
      <li><strong>Qualified Improvement Property (QIP):</strong> Interior improvements to nonresidential buildings placed in service after the building was first occupied</li>
      <li><strong>Land Improvements:</strong> Parking lots, sidewalks, landscaping, and fencing</li>
      <li><strong>HVAC Systems:</strong> Heating, ventilation, and air conditioning equipment</li>
      <li><strong>Security Systems:</strong> Surveillance cameras, alarm systems, and access control systems</li>
    </ul>

    <h3>Current Bonus Depreciation Rates</h3>
    <p>The bonus depreciation percentage has been phasing down:</p>
    <ul>
      <li><strong>2023:</strong> 80% bonus depreciation</li>
      <li><strong>2024:</strong> 60% bonus depreciation</li>
      <li><strong>2025:</strong> 40% bonus depreciation</li>
      <li><strong>2026:</strong> 20% bonus depreciation</li>
      <li><strong>2027:</strong> 0% (unless extended by Congress)</li>
    </ul>

    <h3>How to Use the Bonus Depreciation Calculator</h3>
    <p>This calculator helps you determine your potential first-year tax deduction from bonus depreciation. You will need to provide:</p>
    <ul>
      <li><strong>Property Purchase Price:</strong> The total acquisition cost of the property</li>
      <li><strong>Eligible Property Percentage:</strong> The portion of the property that qualifies for bonus depreciation (typically 15-30% for residential rentals)</li>
      <li><strong>Year Placed in Service:</strong> The year the property was acquired and available for rent</li>
      <li><strong>Tax Rate:</strong> Your marginal tax rate for calculating tax savings</li>
    </ul>

    <h3>Maximizing Bonus Depreciation Benefits</h3>
    <p>To maximize your bonus depreciation deductions:</p>
    <ul>
      <li><strong>Cost Segregation Study:</strong> Hire a professional to identify all qualifying components and maximize your deduction</li>
      <li><strong>Time Property Acquisition:</strong> Consider placing property in service before the bonus depreciation percentage decreases</li>
      <li><strong>Substantial Improvements:</strong> Make qualifying improvements to increase your deductible basis</li>
      <li><strong>Document Everything:</strong> Keep detailed records of all improvements and their costs</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for planning purposes. Bonus depreciation rules are complex and vary based on property type, timing, and specific circumstances. Always consult with a qualified tax professional or CPA before making tax decisions. IRS Publication 946 provides detailed guidance on depreciation rules.</p>

    <h3>Additional Resources</h3>
    <p>For more tax planning tools, explore our <strong>Section 179 Deduction Calculator</strong> and <strong>Cost Segregation Calculator</strong> to maximize your real estate tax benefits.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyPrice',
        label: 'Property Purchase Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'eligiblePercentage',
        label: 'Eligible Property Percentage (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'bonusRate',
        label: 'Bonus Depreciation Rate (%)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'taxRate',
        label: 'Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 32,
      },
    ],
    results: [
      { label: 'Eligible Property Value', isCurrency: true },
      { label: 'First-Year Bonus Depreciation', isCurrency: true },
      { label: 'Estimated Tax Savings', isCurrency: true },
      { label: 'Remaining Basis to Depreciate', isCurrency: true },
    ],
    calculate: (values) => {
      const { propertyPrice, eligiblePercentage, bonusRate, taxRate } = values;
      
      const eligiblePropertyValue = propertyPrice * (eligiblePercentage / 100);
      const bonusDepreciation = eligiblePropertyValue * (bonusRate / 100);
      const taxSavings = bonusDepreciation * (taxRate / 100);
      const remainingBasis = eligiblePropertyValue - bonusDepreciation;

      return [
        { label: 'Eligible Property Value', value: eligiblePropertyValue.toFixed(2), isCurrency: true },
        { label: 'First-Year Bonus Depreciation', value: bonusDepreciation.toFixed(2), isCurrency: true },
        { label: 'Estimated Tax Savings', value: taxSavings.toFixed(2), isCurrency: true },
        { label: 'Remaining Basis to Depreciate', value: remainingBasis.toFixed(2), isCurrency: true },
      ];
    },
  },
};