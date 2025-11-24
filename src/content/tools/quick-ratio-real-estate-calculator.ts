import { CalculatorContent } from '@/types';

export const QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Quick Ratio Calculator (Acid Test) - Real Estate Liquidity Analysis',
  description: 'Calculate quick ratio (acid test ratio) for real estate investments to measure immediate liquidity without relying on property sales. Essential for financial health assessment.',
  slug: 'quick-ratio-real-estate-calculator',
  icon: 'Icon',
  category: 'Real Estate',
  article: {
    title: 'Quick Ratio (Acid Test) for Real Estate Investors',
    content: `
    <h2>What is the Quick Ratio in Real Estate?</h2>
    <p>The Quick Ratio, also known as the Acid Test Ratio, is a stringent measure of liquidity that evaluates a company's or investor's ability to meet short-term obligations using only the most liquid assets. Unlike the current ratio, it excludes inventory and other assets that cannot be quickly converted to cash.</p>
    
    <p>For real estate investors and property management companies, the quick ratio provides a realistic picture of immediate financial flexibility without relying on property sales or less liquid assets.</p>

    <h3>Why is Quick Ratio Important for Real Estate Businesses?</h3>
    <ul>
      <li><strong>True Liquidity Test:</strong> Shows ability to pay debts without selling properties</li>
      <li><strong>Emergency Readiness:</strong> Measures capacity to handle unexpected expenses</li>
      <li><strong>Conservative Assessment:</strong> More realistic than current ratio for property businesses</li>
      <li><strong>Lender Scrutiny:</strong> Banks prefer quick ratio for real estate loan applications</li>
      <li><strong>Crisis Management:</strong> Reveals ability to weather market downturns</li>
      <li><strong>Investment Decision:</strong> Determines if you can take on additional properties</li>
    </ul>

    <h3>How to Calculate Quick Ratio</h3>
    <p>The formula is:</p>
    <p><strong>Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities</strong></p>
    
    <p>Or more simply:</p>
    <p><strong>Quick Ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities</strong></p>
    
    <p><strong>Quick Assets include ONLY:</strong></p>
    <ul>
      <li>Cash and cash equivalents</li>
      <li>Short-term marketable securities</li>
      <li>Accounts receivable (rent payments due)</li>
    </ul>
    
    <p><strong>Quick Assets EXCLUDE:</strong></p>
    <ul>
      <li>Property inventory (for fix-and-flip)</li>
      <li>Prepaid expenses</li>
      <li>Properties held for sale</li>
      <li>Any asset that can't be converted to cash within 90 days</li>
    </ul>

    <h3>Interpreting Quick Ratios for Real Estate</h3>
    <p><strong>Ratio ≥ 1.0:</strong> Excellent - Can cover all short-term debts without selling properties</p>
    <p><strong>Ratio 0.75 - 1.0:</strong> Good - Adequate liquidity with small safety margin</p>
    <p><strong>Ratio 0.5 - 0.75:</strong> Fair - May need to access credit or sell assets</p>
    <p><strong>Ratio < 0.5:</strong> Concerning - Limited ability to meet immediate obligations</p>

    <h3>Quick Ratio vs Current Ratio</h3>
    <table>
      <tr>
        <th>Aspect</th>
        <th>Quick Ratio</th>
        <th>Current Ratio</th>
      </tr>
      <tr>
        <td>Assets Included</td>
        <td>Most liquid only</td>
        <td>All current assets</td>
      </tr>
      <tr>
        <td>Conservatism</td>
        <td>Very conservative</td>
        <td>Less conservative</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Emergency scenarios</td>
        <td>Normal operations</td>
      </tr>
      <tr>
        <td>Real Estate Use</td>
        <td>More realistic</td>
        <td>May overstate liquidity</td>
      </tr>
    </table>

    <h3>Real Estate Scenarios and Quick Ratios</h3>
    <p><strong>Rental Property Portfolio:</strong></p>
    <ul>
      <li>Target: 0.75 - 1.0 for stability</li>
      <li>Maintain 3-6 months operating expenses in cash</li>
      <li>Account receivable = current month rent from tenants</li>
    </ul>
    
    <p><strong>Fix-and-Flip Business:</strong></p>
    <ul>
      <li>Target: 1.0 - 1.5 for flexibility</li>
      <li>Need higher quick ratio due to irregular income</li>
      <li>Properties under renovation don't count as quick assets</li>
    </ul>
    
    <p><strong>Commercial Real Estate:</strong></p>
    <ul>
      <li>Target: 0.8 - 1.2 depending on tenant stability</li>
      <li>Long-term leases provide predictable accounts receivable</li>
      <li>CAM charge receivables count as accounts receivable</li>
    </ul>

    <h3>Improving Your Quick Ratio</h3>
    <ul>
      <li><strong>Increase Cash Reserves:</strong> Save percentage of rental income monthly</li>
      <li><strong>Accelerate Rent Collection:</strong> Implement strict payment policies</li>
      <li><strong>Reduce Short-term Debt:</strong> Pay off or refinance to longer terms</li>
      <li><strong>Establish Line of Credit:</strong> Backup liquidity source for emergencies</li>
      <li><strong>Sell Non-performing Properties:</strong> Convert weak assets to cash</li>
      <li><strong>Delay Large Capital Expenditures:</strong> Time major improvements strategically</li>
    </ul>

    <h3>Warning Signs of Low Quick Ratio</h3>
    <ul>
      <li>Struggling to make mortgage payments on time</li>
      <li>Delaying necessary maintenance</li>
      <li>Using credit cards for operating expenses</li>
      <li>Unable to handle one vacant unit</li>
      <li>Constantly negotiating extended payment terms</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>Enter your most liquid assets (cash, marketable securities, accounts receivable) and current liabilities. The calculator will provide:</p>
    <ul>
      <li>Your quick ratio and acid test assessment</li>
      <li>Comparison with current ratio for context</li>
      <li>Days of coverage with current quick assets</li>
      <li>Liquidity gap analysis</li>
      <li>Actionable recommendations</li>
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
        defaultValue: 75000,
      },
      {
        name: 'marketableSecurities',
        label: 'Marketable Securities (Liquid Investments)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'accountsReceivable',
        label: 'Accounts Receivable (Rent Due)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'currentLiabilities',
        label: 'Current Liabilities',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'inventory',
        label: 'Inventory (Properties for Sale - Optional)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    calculate: (values) => {
      const { cash, marketableSecurities, accountsReceivable, currentLiabilities, inventory } = values;
      
      // Calculate Quick Assets (most liquid only)
      const quickAssets = cash + marketableSecurities + accountsReceivable;
      
      // Calculate Quick Ratio
      const quickRatio = quickAssets / currentLiabilities;
      
      // Calculate Current Ratio for comparison (if inventory provided)
      const currentAssets = quickAssets + inventory;
      const currentRatio = currentAssets / currentLiabilities;
      
      // Calculate liquidity gap or surplus
      const liquidityGap = quickAssets - currentLiabilities;
      
      // Calculate days of coverage
      const dailyLiabilities = currentLiabilities / 365;
      const daysCoverage = quickAssets / dailyLiabilities;
      
      // Determine acid test assessment
      let acidTestAssessment = '';
      if (quickRatio >= 1.0) {
        acidTestAssessment = 'Excellent - Strong Immediate Liquidity';
      } else if (quickRatio >= 0.75) {
        acidTestAssessment = 'Good - Adequate Quick Assets';
      } else if (quickRatio >= 0.5) {
        acidTestAssessment = 'Fair - Limited Immediate Liquidity';
      } else {
        acidTestAssessment = 'Concerning - Insufficient Quick Assets';
      }
      
      // Calculate shortfall if ratio < 1.0
      const shortfall = quickRatio < 1.0 ? currentLiabilities - quickAssets : 0;
      
      // Recommendation
      let recommendation = '';
      if (quickRatio < 0.75) {
        recommendation = `Increase quick assets by $${shortfall.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} to reach healthy ratio`;
      } else if (quickRatio > 1.5) {
        recommendation = 'Strong position - consider strategic investments with excess liquidity';
      } else {
        recommendation = 'Maintain current liquidity and monitor cash flow closely';
      }

      const results = [
        { label: 'Quick Ratio (Acid Test)', value: quickRatio.toFixed(2) + ':1' },
        { label: 'Acid Test Assessment', value: acidTestAssessment },
        { label: 'Quick Assets Available', value: '$' + quickAssets.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
      
      if (inventory > 0) {
        results.push({ label: 'Current Ratio (For Comparison)', value: currentRatio.toFixed(2) + ':1' });
      }
      
      results.push(
        { label: liquidityGap >= 0 ? 'Liquidity Surplus' : 'Liquidity Gap', value: '$' + Math.abs(liquidityGap).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Days of Coverage', value: daysCoverage.toFixed(0) + ' days' },
        { label: 'Recommendation', value: recommendation }
      );

      return results;
    },
  },
};