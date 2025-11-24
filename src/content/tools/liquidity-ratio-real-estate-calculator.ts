import { CalculatorContent } from '@/types';

export const LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Liquidity Ratio Calculator for Real Estate - Current Asset Analysis',
  description: 'Calculate liquidity ratio to assess your real estate business ability to meet short-term obligations. Essential for cash flow management and financial planning.',
  slug: 'liquidity-ratio-real-estate-calculator',
  icon: 'Icon',
  category: 'Real Estate',
  article: {
    title: 'Understanding Liquidity Ratios in Real Estate Business',
    content: `
    <h2>What is Liquidity Ratio in Real Estate?</h2>
    <p>The Liquidity Ratio, also known as the Current Ratio, measures a real estate business's ability to pay short-term obligations with its current assets. It's a critical indicator of financial health and operational efficiency.</p>
    
    <p>Unlike solvency which focuses on long-term obligations, liquidity addresses immediate financial flexibility - the ability to access cash when needed for property maintenance, mortgage payments, emergencies, or investment opportunities.</p>

    <h3>Why is Liquidity Important in Real Estate?</h3>
    <ul>
      <li><strong>Emergency Preparedness:</strong> Cover unexpected repairs, vacancies, or market downturns</li>
      <li><strong>Operational Continuity:</strong> Ensure ability to pay mortgages, taxes, and operating expenses</li>
      <li><strong>Opportunity Readiness:</strong> Have cash available for attractive investment opportunities</li>
      <li><strong>Lender Confidence:</strong> Demonstrate financial stability for refinancing or new loans</li>
      <li><strong>Stress Resilience:</strong> Weather periods of low occupancy or rental income disruption</li>
      <li><strong>Creditor Relations:</strong> Maintain good standing with vendors and service providers</li>
    </ul>

    <h3>How to Calculate Liquidity Ratio</h3>
    <p>The Current Ratio (most common liquidity ratio) formula is:</p>
    <p><strong>Liquidity Ratio = Current Assets / Current Liabilities</strong></p>
    
    <p><strong>Current Assets include:</strong></p>
    <ul>
      <li>Cash and cash equivalents</li>
      <li>Accounts receivable (rent owed to you)</li>
      <li>Short-term investments</li>
      <li>Prepaid expenses</li>
      <li>Security deposits held in liquid form</li>
    </ul>
    
    <p><strong>Current Liabilities include:</strong></p>
    <ul>
      <li>Accounts payable</li>
      <li>Short-term loans</li>
      <li>Current portion of mortgage payments</li>
      <li>Property taxes due</li>
      <li>Security deposits owed to tenants</li>
    </ul>

    <h3>Interpreting Liquidity Ratios</h3>
    <p><strong>Ratio > 2.0:</strong> Very Strong - Excellent liquidity, possibly excess cash that could be invested</p>
    <p><strong>Ratio 1.5 - 2.0:</strong> Strong - Healthy liquidity with good safety margin</p>
    <p><strong>Ratio 1.0 - 1.5:</strong> Adequate - Sufficient to meet obligations but limited buffer</p>
    <p><strong>Ratio < 1.0:</strong> Concerning - May struggle to meet short-term obligations</p>

    <h3>Real Estate Specific Considerations</h3>
    <p><strong>Rental Properties:</strong> Maintain 3-6 months of operating expenses in liquid reserves</p>
    <p><strong>Fix-and-Flip:</strong> Higher liquidity needed for unexpected renovation costs</p>
    <p><strong>Commercial Properties:</strong> Consider lease expiration timing and tenant credit</p>
    <p><strong>Multi-Family:</strong> Account for seasonal vacancy patterns</p>

    <h3>Improving Your Liquidity Ratio</h3>
    <ul>
      <li><strong>Build Cash Reserves:</strong> Save portion of rental income systematically</li>
      <li><strong>Accelerate Receivables:</strong> Enforce timely rent collection</li>
      <li><strong>Negotiate Payment Terms:</strong> Extend payables without damaging relationships</li>
      <li><strong>Reduce Short-term Debt:</strong> Pay down or refinance to longer terms</li>
      <li><strong>Sell Underperforming Assets:</strong> Convert weak properties to cash</li>
      <li><strong>Establish Credit Lines:</strong> Have access to emergency funding if needed</li>
    </ul>

    <h3>Quick Ratio (Acid Test)</h3>
    <p>A stricter measure that excludes less liquid current assets:</p>
    <p><strong>Quick Ratio = (Current Assets - Inventory) / Current Liabilities</strong></p>
    <p>This provides a more conservative view of immediate liquidity without relying on selling inventory.</p>

    <h3>Using This Calculator</h3>
    <p>Enter your current assets and current liabilities. The calculator will compute both the current ratio and quick ratio, along with:</p>
    <ul>
      <li>Liquidity assessment and financial health rating</li>
      <li>Working capital available</li>
      <li>Coverage multiple for short-term obligations</li>
      <li>Recommendations for improvement</li>
    </ul>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'cash',
        label: 'Cash & Cash Equivalents',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'accountsReceivable',
        label: 'Accounts Receivable (Rent Due)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'otherCurrentAssets',
        label: 'Other Current Assets',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'currentLiabilities',
        label: 'Current Liabilities (Due within 1 year)',
        type: 'number',
        defaultValue: 100000,
      },
    ],
    calculate: (values) => {
      const { cash, accountsReceivable, otherCurrentAssets, currentLiabilities } = values;
      
      // Calculate total current assets
      const totalCurrentAssets = cash + accountsReceivable + otherCurrentAssets;
      
      // Calculate Current Ratio (Liquidity Ratio)
      const liquidityRatio = totalCurrentAssets / currentLiabilities;
      
      // Calculate Quick Ratio (more conservative)
      const quickRatio = (cash + accountsReceivable) / currentLiabilities;
      
      // Calculate Working Capital
      const workingCapital = totalCurrentAssets - currentLiabilities;
      
      // Calculate cash coverage in months (assuming avg monthly liability is current/12)
      const monthlyLiabilities = currentLiabilities / 12;
      const cashCoverageMonths = cash / monthlyLiabilities;
      
      // Determine liquidity health
      let liquidityHealth = '';
      if (liquidityRatio >= 2.0) {
        liquidityHealth = 'Very Strong - Excellent Liquidity Position';
      } else if (liquidityRatio >= 1.5) {
        liquidityHealth = 'Strong - Healthy Liquidity';
      } else if (liquidityRatio >= 1.0) {
        liquidityHealth = 'Adequate - Sufficient Coverage';
      } else {
        liquidityHealth = 'Concerning - Insufficient Liquidity';
      }
      
      // Recommendation
      let recommendation = '';
      if (liquidityRatio < 1.5) {
        recommendation = 'Build cash reserves to 3-6 months of operating expenses';
      } else if (liquidityRatio > 3.0) {
        recommendation = 'Consider investing excess liquidity for better returns';
      } else {
        recommendation = 'Maintain current liquidity levels and monitor cash flow';
      }

      return [
        { label: 'Current Ratio (Liquidity Ratio)', value: liquidityRatio.toFixed(2) + ':1' },
        { label: 'Quick Ratio (Acid Test)', value: quickRatio.toFixed(2) + ':1' },
        { label: 'Liquidity Health', value: liquidityHealth },
        { label: 'Working Capital', value: '$' + workingCapital.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Cash Coverage', value: cashCoverageMonths.toFixed(1) + ' months' },
        { label: 'Recommendation', value: recommendation },
      ];
    },
  },
};