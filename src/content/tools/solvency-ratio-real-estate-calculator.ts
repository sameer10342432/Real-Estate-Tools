import { CalculatorContent } from '@/types';

export const SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Solvency Ratio Calculator for Real Estate - Financial Health Analysis',
  description: 'Calculate solvency ratio to assess real estate business financial health and long-term viability. Essential for property investors, REITs, and real estate companies.',
  slug: 'solvency-ratio-real-estate-calculator',
  icon: 'Icon',
  category: 'Real Estate',
  article: {
    title: 'Understanding Solvency Ratio in Real Estate Investing',
    content: `
    <h2>What is Solvency Ratio in Real Estate?</h2>
    <p>The Solvency Ratio is a key financial metric that measures a real estate company's or investor's ability to meet long-term obligations. It indicates whether a business has sufficient assets to cover all its debts, both short-term and long-term.</p>
    
    <p>For real estate investors and companies, maintaining a healthy solvency ratio is crucial for securing financing, attracting investors, and ensuring long-term business sustainability.</p>

    <h3>Why is Solvency Ratio Important in Real Estate?</h3>
    <ul>
      <li><strong>Loan Qualification:</strong> Lenders assess solvency to determine creditworthiness</li>
      <li><strong>Investment Confidence:</strong> Investors want assurance that the business can weather downturns</li>
      <li><strong>Portfolio Management:</strong> Helps identify over-leveraged positions</li>
      <li><strong>Strategic Planning:</strong> Guides decisions about taking on additional debt or properties</li>
      <li><strong>Risk Assessment:</strong> Reveals vulnerability to market fluctuations</li>
      <li><strong>Exit Strategy Planning:</strong> Ensures ability to liquidate positions if needed</li>
    </ul>

    <h3>How to Calculate Solvency Ratio</h3>
    <p>The most common formula is:</p>
    <p><strong>Solvency Ratio = (Net Income + Depreciation) / Total Liabilities × 100</strong></p>
    
    <p>Alternative formula (After-Tax):</p>
    <p><strong>Solvency Ratio = Net After-Tax Income + Depreciation / Short-term + Long-term Liabilities × 100</strong></p>
    
    <p>For example, if a real estate company has:</p>
    <ul>
      <li>Net Income: $500,000</li>
      <li>Depreciation: $200,000</li>
      <li>Total Liabilities: $3,000,000</li>
    </ul>
    <p>Solvency Ratio = ($500,000 + $200,000) / $3,000,000 × 100 = 23.33%</p>

    <h3>Interpreting Solvency Ratios</h3>
    <p><strong>Above 20%:</strong> Excellent - Strong financial position with comfortable debt coverage</p>
    <p><strong>15% - 20%:</strong> Good - Healthy solvency with adequate buffer for obligations</p>
    <p><strong>10% - 15%:</strong> Fair - Acceptable but limited margin for error</p>
    <p><strong>Below 10%:</strong> Concerning - May struggle with long-term obligations</p>

    <h3>Solvency vs Liquidity</h3>
    <p><strong>Solvency</strong> focuses on long-term financial health and the ability to meet all obligations over time.</p>
    <p><strong>Liquidity</strong> focuses on short-term ability to meet immediate obligations with current assets.</p>
    <p>A company can be solvent but not liquid (has assets but can't quickly convert to cash), or liquid but not solvent (has cash but overall debt exceeds total assets).</p>

    <h3>Real Estate Specific Considerations</h3>
    <p>For real estate businesses, solvency analysis should consider:</p>
    <ul>
      <li><strong>Property Appreciation:</strong> Unrealized gains that strengthen the balance sheet</li>
      <li><strong>Depreciation:</strong> Non-cash expense that reduces tax liability</li>
      <li><strong>Mortgage Amortization:</strong> Principal paydown that builds equity over time</li>
      <li><strong>Rental Income Stability:</strong> Consistent cash flow supports solvency</li>
      <li><strong>Market Cycles:</strong> Property values fluctuate affecting asset side of equation</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>Input your net income, depreciation expense, and total liabilities (both short and long-term). The calculator will provide:</p>
    <ul>
      <li>Your solvency ratio percentage</li>
      <li>Financial health assessment</li>
      <li>Debt coverage capacity</li>
      <li>Recommendations for improvement</li>
    </ul>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'netIncome',
        label: 'Net Income (Annual)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'depreciation',
        label: 'Depreciation Expense (Annual)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'totalLiabilities',
        label: 'Total Liabilities',
        type: 'number',
        defaultValue: 3000000,
      },
      {
        name: 'totalAssets',
        label: 'Total Assets (Optional)',
        type: 'number',
        defaultValue: 5000000,
      },
    ],
    calculate: (values) => {
      const { netIncome, depreciation, totalLiabilities, totalAssets } = values;
      
      // Calculate Solvency Ratio
      const cashFlowFromOperations = netIncome + depreciation;
      const solvencyRatio = (cashFlowFromOperations / totalLiabilities) * 100;
      
      // Calculate debt coverage in years
      const yearsToPayOffDebt = totalLiabilities / cashFlowFromOperations;
      
      // Calculate Asset-to-Liability Ratio for additional context
      const assetLiabilityRatio = totalAssets / totalLiabilities;
      const equityPercentage = ((totalAssets - totalLiabilities) / totalAssets) * 100;
      
      // Determine financial health
      let healthAssessment = '';
      if (solvencyRatio >= 20) {
        healthAssessment = 'Excellent - Strong Financial Position';
      } else if (solvencyRatio >= 15) {
        healthAssessment = 'Good - Healthy Solvency';
      } else if (solvencyRatio >= 10) {
        healthAssessment = 'Fair - Acceptable Coverage';
      } else {
        healthAssessment = 'Concerning - Limited Debt Coverage';
      }
      
      // Recommendation
      let recommendation = '';
      if (solvencyRatio < 15) {
        recommendation = 'Consider: Increase income, reduce debt, or improve operational efficiency';
      } else {
        recommendation = 'Maintain current financial discipline and consider strategic growth';
      }

      return [
        { label: 'Solvency Ratio', value: solvencyRatio.toFixed(2) + '%' },
        { label: 'Financial Health', value: healthAssessment },
        { label: 'Years to Pay Off Debt', value: yearsToPayOffDebt.toFixed(1) + ' years' },
        { label: 'Asset-to-Liability Ratio', value: assetLiabilityRatio.toFixed(2) + ':1' },
        { label: 'Equity Percentage', value: equityPercentage.toFixed(2) + '%' },
        { label: 'Recommendation', value: recommendation },
      ];
    },
  },
};