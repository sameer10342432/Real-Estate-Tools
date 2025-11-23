import { CalculatorContent } from '@/types';

export const EQUITY_MULTIPLE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Equity Multiple (EM) Calculator',
  description: 'Calculate total return on investment as a multiple of initial equity invested',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'equity-multiple-calculator',
  article: {
    title: "Understanding Equity Multiple in Real Estate",
    content: `
    <h2>Understanding Equity Multiple in Real Estate</h2>
    <p>Equity Multiple (EM) is a straightforward metric that measures the total return on a real estate investment relative to the initial equity invested. It answers the question: "For every dollar I invest, how many dollars will I get back?"</p>
    
    <h3>What is Equity Multiple?</h3>
    <p>Equity Multiple is calculated as:</p>
    <p><strong>Equity Multiple = Total Cash Distributions ÷ Initial Equity Investment</strong></p>
    
    <p>Where Total Cash Distributions include:</p>
    <ul>
      <li>All cash flow distributions during the hold period</li>
      <li>Sales proceeds returned to equity investors at exit</li>
    </ul>
    
    <h3>Interpreting Equity Multiple</h3>
    <ul>
      <li><strong>EM = 1.0x:</strong> Investor got their money back but made zero profit</li>
      <li><strong>EM = 1.5x:</strong> Investor received 1.5x their original investment (50% total return)</li>
      <li><strong>EM = 2.0x:</strong> Investor doubled their money (100% total return)</li>
      <li><strong>EM = 2.5x:</strong> Investor received 2.5x original investment (150% total return)</li>
    </ul>
    
    <h3>Typical Equity Multiples by Strategy</h3>
    <ul>
      <li><strong>Core/Income Properties (5-7 years):</strong> 1.4x - 1.7x</li>
      <li><strong>Core-Plus Properties (5-7 years):</strong> 1.6x - 1.9x</li>
      <li><strong>Value-Add Properties (3-5 years):</strong> 1.7x - 2.2x</li>
      <li><strong>Opportunistic/Development (3-5 years):</strong> 2.0x - 3.0x+</li>
    </ul>
    
    <h3>Advantages of Equity Multiple</h3>
    <ul>
      <li><strong>Simplicity:</strong> Easy to understand and communicate to investors</li>
      <li><strong>Total Return Focus:</strong> Shows complete picture of cumulative returns</li>
      <li><strong>No Assumptions:</strong> Based on actual dollar amounts, not discount rates</li>
      <li><strong>Quick Comparison:</strong> Easily compare different investment opportunities</li>
    </ul>
    
    <h3>Limitations of Equity Multiple</h3>
    <ul>
      <li><strong>Ignores Time:</strong> A 2.0x return over 3 years is much better than over 10 years</li>
      <li><strong>No Risk Adjustment:</strong> Doesn't account for risk differences between investments</li>
      <li><strong>Lacks Context:</strong> Doesn't consider opportunity cost or time value of money</li>
      <li><strong>Distribution Timing:</strong> Doesn't differentiate when cash is returned</li>
    </ul>
    
    <h3>Equity Multiple vs. IRR</h3>
    <p>While EM measures total return, IRR measures annualized return:</p>
    
    <p><strong>Example 1:</strong></p>
    <ul>
      <li>Invest: $1,000,000</li>
      <li>Return: $2,000,000 over 5 years</li>
      <li>EM: 2.0x (100% total return)</li>
      <li>IRR: ~15% annualized</li>
    </ul>
    
    <p><strong>Example 2:</strong></p>
    <ul>
      <li>Invest: $1,000,000</li>
      <li>Return: $2,000,000 over 10 years</li>
      <li>EM: 2.0x (same 100% total return)</li>
      <li>IRR: ~7% annualized (much different!)</li>
    </ul>
    
    <p><strong>Conclusion:</strong> Use EM and IRR together - EM for total return, IRR for time-adjusted return</p>
    
    <h3>Using Equity Multiple in Investment Decisions</h3>
    
    <p><strong>Syndication Offering Analysis:</strong></p>
    <p>Many real estate syndications promote target EM (e.g., "2.0x equity multiple"). Evaluate if the target is:</p>
    <ul>
      <li>Realistic given property type and market conditions</li>
      <li>Competitive with other opportunities</li>
      <li>Appropriate for the hold period and risk level</li>
    </ul>
    
    <p><strong>Portfolio Analysis:</strong></p>
    <p>Track actual EM on completed investments to:</p>
    <ul>
      <li>Measure historical performance</li>
      <li>Set realistic expectations for future deals</li>
      <li>Identify which strategies deliver highest multiples</li>
    </ul>
    
    <h3>How to Improve Equity Multiple</h3>
    <ul>
      <li><strong>Increase NOI:</strong> Raise rents, reduce expenses, improve operations</li>
      <li><strong>Use Leverage Strategically:</strong> Amplify returns with appropriate debt</li>
      <li><strong>Value-Add Improvements:</strong> Renovations that significantly boost property value</li>
      <li><strong>Buy Right:</strong> Acquire properties below market value</li>
      <li><strong>Market Timing:</strong> Sell during market peaks when cap rates are compressed</li>
      <li><strong>Hold Longer:</strong> Allow more time for cash flow accumulation and appreciation</li>
    </ul>
    
    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li><strong>Focusing Only on EM:</strong> Must also consider IRR and hold period</li>
      <li><strong>Comparing Different Hold Periods:</strong> 2.0x over 3 years ≠ 2.0x over 10 years</li>
      <li><strong>Ignoring Risk:</strong> Higher EM should come with higher risk - evaluate risk-adjusted returns</li>
      <li><strong>Overly Optimistic Projections:</strong> Use conservative assumptions in pro formas</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your initial equity investment, total cash flow distributions received during ownership, and proceeds from the property sale. The calculator will determine your equity multiple and total return percentage, helping you evaluate the total profitability of your investment.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "initialEquity",
        label: "Initial Equity Investment ($)",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "cashDistributions",
        label: "Total Cash Flow Distributions ($)",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "saleProceeds",
        label: "Equity from Sale Proceeds ($)",
        type: "number",
        placeholder: "1200000",
        defaultValue: "1200000",
      },
      {
        name: "holdPeriod",
        label: "Hold Period (Years)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Equity Multiple", isCurrency: false },
      { label: "Total Return", isCurrency: false },
      { label: "Total Profit", isCurrency: true },
      { label: "Total Cash Received", isCurrency: true },
      { label: "Average Annual Return", isCurrency: false },
      { label: "Performance Rating", isCurrency: false },
    ],
    calculate: (data: any) => {
      const initialEquity = Number(data.initialEquity) || 0;
      const cashDistributions = Number(data.cashDistributions) || 0;
      const saleProceeds = Number(data.saleProceeds) || 0;
      const holdPeriod = Number(data.holdPeriod) || 1;
      
      const totalCashReceived = cashDistributions + saleProceeds;
      const equityMultiple = initialEquity > 0 ? totalCashReceived / initialEquity : 0;
      const totalReturn = ((totalCashReceived - initialEquity) / initialEquity) * 100;
      const totalProfit = totalCashReceived - initialEquity;
      const averageAnnualReturn = totalReturn / holdPeriod;
      
      let rating = "";
      if (equityMultiple >= 2.5) {
        rating = "⭐⭐⭐ Exceptional";
      } else if (equityMultiple >= 2.0) {
        rating = "⭐⭐ Excellent";
      } else if (equityMultiple >= 1.5) {
        rating = "⭐ Good";
      } else if (equityMultiple >= 1.2) {
        rating = "✓ Adequate";
      } else if (equityMultiple >= 1.0) {
        rating = "⚠️ Breakeven";
      } else {
        rating = "❌ Loss";
      }

      return [
        { label: "Equity Multiple", value: `${equityMultiple.toFixed(2)}x`, isCurrency: false },
        { label: "Total Return", value: `${totalReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Total Profit", value: totalProfit.toFixed(2), isCurrency: true },
        { label: "Total Cash Received", value: totalCashReceived.toFixed(2), isCurrency: true },
        { label: "Average Annual Return", value: `${averageAnnualReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Performance Rating", value: rating, isCurrency: false },
      ];
    },
  },
};
