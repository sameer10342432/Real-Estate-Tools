import { CalculatorContent } from '@/types';

export const QUALIFIED_IMPROVEMENT_PROPERTY_QIP_BONUS_CONTENT: CalculatorContent = {
  title: 'Qualified Improvement Property (QIP) Bonus',
  description: 'Calculate QIP bonus depreciation for interior property improvements and accelerate tax deductions on renovations.',
  slug: 'qualified-improvement-property-qip-bonus',
  icon: '🔨',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Maximizing Tax Benefits with Qualified Improvement Property',
    content: `
    <h2>Understanding Qualified Improvement Property (QIP)</h2>
    <p>Qualified Improvement Property (QIP) refers to improvements made to the interior of nonresidential buildings after the building was first placed in service. The CARES Act fixed a drafting error and made QIP eligible for 100% bonus depreciation (now phasing down), allowing real estate investors to immediately deduct the cost of qualifying interior improvements.</p>
    
    <h3>What Qualifies as QIP?</h3>
    <p>To qualify as QIP, improvements must meet these criteria:</p>
    <ul>
      <li><strong>Interior Improvements:</strong> Made to the interior of the building</li>
      <li><strong>Nonresidential Building:</strong> Made to a nonresidential real property (office, retail, restaurant, etc.)</li>
      <li><strong>After Original Placement:</strong> Made after the building was first placed in service</li>
      <li><strong>By Taxpayer:</strong> Made by the taxpayer (not the original builder of the property)</li>
    </ul>

    <h3>Qualifying QIP Improvements</h3>
    <ul>
      <li><strong>Interior Walls and Ceilings:</strong> Partition walls, dropped ceilings, and drywall</li>
      <li><strong>Flooring:</strong> New flooring installations and replacements</li>
      <li><strong>Lighting:</strong> Interior lighting fixtures and systems</li>
      <li><strong>Plumbing:</strong> Interior plumbing improvements</li>
      <li><strong>Electrical:</strong> Interior electrical upgrades and rewiring</li>
      <li><strong>Fire Protection:</strong> Sprinkler systems and fire safety equipment</li>
    </ul>

    <h3>What Does NOT Qualify</h3>
    <ul>
      <li><strong>Enlargement:</strong> Improvements that enlarge the building</li>
      <li><strong>Elevators and Escalators:</strong> Installation or improvement of these systems</li>
      <li><strong>Internal Structural Framework:</strong> Changes to the building's structural framework</li>
      <li><strong>Exterior Improvements:</strong> Roofing, HVAC, windows, doors</li>
    </ul>

    <h3>How to Use the QIP Bonus Calculator</h3>
    <p>This calculator helps you determine your eligible QIP deduction. You will need to provide:</p>
    <ul>
      <li><strong>Total Improvement Cost:</strong> Cost of all interior improvements</li>
      <li><strong>QIP Percentage:</strong> Percentage that qualifies as QIP (typically 70-90% for major renovations)</li>
      <li><strong>Bonus Depreciation Rate:</strong> Current year's bonus depreciation percentage</li>
      <li><strong>Tax Rate:</strong> Your marginal tax rate</li>
    </ul>

    <h3>Strategic Tax Planning with QIP</h3>
    <ul>
      <li><strong>Timing Matters:</strong> Consider timing improvements before bonus depreciation phases out completely</li>
      <li><strong>Separate Costs:</strong> Properly allocate costs between QIP and non-QIP improvements</li>
      <li><strong>Documentation:</strong> Maintain detailed invoices and contractor agreements</li>
      <li><strong>Cost Segregation:</strong> Combine with cost segregation studies for maximum benefits</li>
    </ul>

    <h3>QIP Depreciation Schedule</h3>
    <ul>
      <li><strong>With Bonus Depreciation:</strong> Eligible percentage deducted in year one</li>
      <li><strong>Remaining Basis:</strong> Depreciated over 15 years using straight-line method</li>
      <li><strong>No Bonus:</strong> If bonus expires or you opt out, 15-year straight-line depreciation</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. QIP rules are technical and require careful analysis to determine what improvements qualify. The improvement must be made by the taxpayer, not by the seller before you purchase. Always work with a qualified tax professional or CPA to properly identify and document QIP. IRS Revenue Procedure 2020-25 provides safe harbor guidance for QIP changes.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your real estate tax benefits with our <strong>Bonus Depreciation Calculator</strong>, <strong>Section 179 Deduction</strong>, and <strong>Cost Segregation Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'improvementCost',
        label: 'Total Improvement Cost',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'qipPercentage',
        label: 'QIP Qualifying Percentage (%)',
        type: 'number',
        defaultValue: 85,
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
        defaultValue: 37,
      },
    ],
    results: [
      { label: 'Qualifying QIP Amount', isCurrency: true },
      { label: 'First-Year Bonus Deduction', isCurrency: true },
      { label: 'Remaining Basis (15-year)', isCurrency: true },
      { label: 'Estimated Tax Savings', isCurrency: true },
    ],
    calculate: (values) => {
      const { improvementCost, qipPercentage, bonusRate, taxRate } = values;
      
      const qipAmount = improvementCost * (qipPercentage / 100);
      const bonusDeduction = qipAmount * (bonusRate / 100);
      const remainingBasis = qipAmount - bonusDeduction;
      const taxSavings = bonusDeduction * (taxRate / 100);

      return [
        { label: 'Qualifying QIP Amount', value: qipAmount.toFixed(2), isCurrency: true },
        { label: 'First-Year Bonus Deduction', value: bonusDeduction.toFixed(2), isCurrency: true },
        { label: 'Remaining Basis (15-year)', value: remainingBasis.toFixed(2), isCurrency: true },
        { label: 'Estimated Tax Savings', value: taxSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};