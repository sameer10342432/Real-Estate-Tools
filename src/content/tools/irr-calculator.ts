import { CalculatorContent } from '@/types';

export const IRR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Internal Rate of Return (IRR) Calculator',
  description: 'Calculate Internal Rate of Return for real estate investments. Analyze investment performance, compare opportunities, and measure returns over time.',
  slug: 'irr-calculator',
  icon: '📊',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding Internal Rate of Return (IRR) in Real Estate',
    content: `
    <h2>What is Internal Rate of Return (IRR)?</h2>
    <p>The Internal Rate of Return (IRR) is a metric used to estimate the profitability of potential investments. In real estate, IRR represents the annual rate of growth an investment is expected to generate, accounting for all cash flows over the investment period including initial investment, periodic cash flows, and final sale proceeds.</p>
    
    <h3>IRR in Simple Terms</h3>
    <p>IRR is the discount rate that makes the Net Present Value (NPV) of all cash flows equal to zero. Think of it as the "effective annual return" of your investment, similar to an interest rate on a savings account, but accounting for varying cash flows over time.</p>

    <h3>Why IRR Matters in Real Estate</h3>
    <ul>
      <li><strong>Performance Measurement:</strong> Measures actual returns accounting for time value of money</li>
      <li><strong>Investment Comparison:</strong> Compare different properties and investment types</li>
      <li><strong>Decision Making:</strong> Determine if investment meets target return threshold</li>
      <li><strong>Investor Communication:</strong> Standard metric for reporting fund performance</li>
      <li><strong>Risk Assessment:</strong> Higher required IRR for riskier investments</li>
    </ul>

    <h3>IRR Formula Concept</h3>
    <p>IRR is found by solving for the rate (r) that makes NPV = 0:</p>
    <p><strong>0 = CF₀ + CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ</strong></p>
    <p>Where CF = cash flow for each period</p>

    <h3>Real Estate IRR Components</h3>
    <ul>
      <li><strong>Initial Investment:</strong> Purchase price + closing costs + immediate improvements</li>
      <li><strong>Annual Cash Flows:</strong> NOI - debt service + other income/expenses</li>
      <li><strong>Capital Expenditures:</strong> Major improvements during holding period</li>
      <li><strong>Sale Proceeds:</strong> Final sale price - selling costs - remaining mortgage</li>
    </ul>

    <h3>Typical Real Estate IRR Expectations</h3>
    <ul>
      <li><strong>Core (Stabilized Assets):</strong> 8-12% IRR</li>
      <li><strong>Core-Plus (Slight Value-Add):</strong> 10-15% IRR</li>
      <li><strong>Value-Add:</strong> 15-20% IRR</li>
      <li><strong>Opportunistic (Development):</strong> 20%+ IRR</li>
      <li><strong>Target varies by:</strong> Risk, market, property type, leverage</li>
    </ul>

    <h3>Levered vs. Unlevered IRR</h3>
    <ul>
      <li><strong>Unlevered IRR:</strong> Returns without debt (property performance only)</li>
      <li><strong>Levered IRR:</strong> Returns with mortgage financing (equity returns)</li>
      <li><strong>Leverage amplifies returns:</strong> Both positive and negative</li>
      <li><strong>Example:</strong> Unlevered 10% IRR might become 15% levered with 70% LTV</li>
    </ul>

    <h3>IRR vs. Other Metrics</h3>
    <table>
      <tr>
        <th>Metric</th>
        <th>What It Measures</th>
        <th>Pros</th>
        <th>Cons</th>
      </tr>
      <tr>
        <td>IRR</td>
        <td>Annualized return rate</td>
        <td>Accounts for timing, easy comparison</td>
        <td>Assumes reinvestment at same rate</td>
      </tr>
      <tr>
        <td>Cash-on-Cash</td>
        <td>Annual return on equity</td>
        <td>Simple, current performance</td>
        <td>Ignores appreciation, time value</td>
      </tr>
      <tr>
        <td>Equity Multiple</td>
        <td>Total return ratio</td>
        <td>Shows total gain</td>
        <td>Ignores timing of cash flows</td>
      </tr>
      <tr>
        <td>Cap Rate</td>
        <td>First-year yield</td>
        <td>Quick valuation tool</td>
        <td>Point-in-time only</td>
      </tr>
    </table>

    <h3>Calculating IRR: Step-by-Step Example</h3>
    <p><strong>5-Year Investment Scenario:</strong></p>
    <ul>
      <li>Year 0: -$1,000,000 (purchase + improvements)</li>
      <li>Year 1: +$60,000 (net cash flow)</li>
      <li>Year 2: +$65,000</li>
      <li>Year 3: +$70,000</li>
      <li>Year 4: +$75,000</li>
      <li>Year 5: +$1,380,000 (cash flow + sale proceeds)</li>
      <li><strong>IRR = 15.2%</strong></li>
    </ul>

    <h3>Factors Affecting IRR</h3>
    <p><strong>Positive Impact:</strong></p>
    <ul>
      <li>Higher rental income growth</li>
      <li>Lower operating expenses</li>
      <li>Property value appreciation</li>
      <li>Effective leverage use</li>
      <li>Shorter hold period with strong exit</li>
    </ul>

    <p><strong>Negative Impact:</strong></p>
    <ul>
      <li>High vacancy rates</li>
      <li>Unexpected capital expenditures</li>
      <li>Market downturns</li>
      <li>Excessive leverage in declining market</li>
      <li>Extended hold period with weak exit</li>
    </ul>

    <h3>IRR Limitations</h3>
    <ul>
      <li><strong>Reinvestment Assumption:</strong> Assumes cash flows reinvested at IRR rate (often unrealistic)</li>
      <li><strong>Multiple IRRs:</strong> Possible with unconventional cash flow patterns</li>
      <li><strong>Scale Blind:</strong> Doesn't show investment size (15% on $100K vs. $10M)</li>
      <li><strong>Timing Manipulation:</strong> Early cash flows increase IRR disproportionately</li>
      <li><strong>Ignores Risk:</strong> Doesn't account for investment risk differences</li>
    </ul>

    <h3>Modified IRR (MIRR)</h3>
    <p>Modified IRR addresses some limitations:</p>
    <ul>
      <li>Assumes reinvestment at more realistic rate (e.g., 5-8%)</li>
      <li>Provides single, more accurate return measure</li>
      <li>Better for comparing dissimilar investments</li>
      <li>More conservative than traditional IRR</li>
    </ul>

    <h3>IRR in Different Investment Strategies</h3>
    <ul>
      <li><strong>Buy and Hold:</strong> Lower IRR (8-12%) but stable, long-term income</li>
      <li><strong>Value-Add:</strong> Higher IRR (15-20%) from improvements and repositioning</li>
      <li><strong>Development:</strong> Highest IRR (20%+) but also highest risk</li>
      <li><strong>REITs:</strong> Public REIT total returns often benchmark (10-15% historical)</li>
    </ul>

    <h3>Institutional Investor IRR Hurdles</h3>
    <ul>
      <li><strong>Pension Funds:</strong> 8-10% minimum IRR</li>
      <li><strong>Private Equity RE Funds:</strong> 15-20% target IRR</li>
      <li><strong>Opportunity Funds:</strong> 20%+ target IRR</li>
      <li><strong>Core Funds:</strong> 8-12% target IRR</li>
    </ul>

    <h3>Improving IRR</h3>
    <p><strong>Operational Strategies:</strong></p>
    <ul>
      <li>Increase NOI through rent growth and expense reduction</li>
      <li>Add value through renovations and repositioning</li>
      <li>Improve property management efficiency</li>
      <li>Implement cost segregation for tax benefits</li>
    </ul>

    <p><strong>Financial Strategies:</strong></p>
    <ul>
      <li>Optimize capital structure (debt/equity mix)</li>
      <li>Refinance when rates improve</li>
      <li>Strategic timing of sale (market peak)</li>
      <li>1031 exchange to defer taxes</li>
    </ul>

    <h3>IRR and Investment Horizon</h3>
    <ul>
      <li><strong>Short Hold (1-3 years):</strong> Need significant value creation for high IRR</li>
      <li><strong>Medium Hold (5-7 years):</strong> Balanced approach, typical for funds</li>
      <li><strong>Long Hold (10+ years):</strong> Compounding benefits, but market risk</li>
      <li><strong>J-Curve:</strong> Early negative returns, later positive (common in development)</li>
    </ul>

    <h3>Sensitivity Analysis</h3>
    <p>Test IRR under different scenarios:</p>
    <ul>
      <li><strong>Best Case:</strong> 5% rent growth, 20% appreciation</li>
      <li><strong>Base Case:</strong> 3% rent growth, 10% appreciation</li>
      <li><strong>Worst Case:</strong> 0% rent growth, 0% appreciation</li>
      <li><strong>Stress Test:</strong> Recession scenario with negative growth</li>
    </ul>

    <h3>Red Flags</h3>
    <ul>
      <li>Projected IRR >25% (unless high-risk development)</li>
      <li>IRR relying heavily on terminal value</li>
      <li>Ignoring capital expenditure needs</li>
      <li>Unrealistic rent growth assumptions</li>
      <li>No sensitivity analysis provided</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate IRR for investment analysis:</p>
    <ul>
      <li><strong>Initial Investment:</strong> Total upfront cost (negative value)</li>
      <li><strong>Year 1-5 Cash Flows:</strong> Annual net cash flows</li>
      <li><strong>Terminal Value:</strong> Expected sale proceeds in final year</li>
      <li><strong>Note:</strong> This calculator provides a simplified 5-year IRR calculation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment ($)',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'year1CashFlow',
        label: 'Year 1 Cash Flow ($)',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'year2CashFlow',
        label: 'Year 2 Cash Flow ($)',
        type: 'number',
        defaultValue: 65000,
      },
      {
        name: 'year3CashFlow',
        label: 'Year 3 Cash Flow ($)',
        type: 'number',
        defaultValue: 70000,
      },
      {
        name: 'year4CashFlow',
        label: 'Year 4 Cash Flow ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'year5CashFlow',
        label: 'Year 5 Cash Flow ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'terminalValue',
        label: 'Sale Proceeds (End of Year 5) ($)',
        type: 'number',
        defaultValue: 1300000,
      },
    ],
    results: [
      { label: 'Internal Rate of Return (IRR)', isCurrency: false },
      { label: 'Total Cash In (Investment)', isCurrency: true },
      { label: 'Total Cash Out (Returns)', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'Equity Multiple', isCurrency: false },
      { label: 'Average Annual Cash Flow', isCurrency: true },
    ],
    calculate: (values) => {
      const { initialInvestment, year1CashFlow, year2CashFlow, year3CashFlow, year4CashFlow, year5CashFlow, terminalValue } = values;
      
      // Cash flows array (negative initial investment)
      const cashFlows = [
        -initialInvestment,
        year1CashFlow,
        year2CashFlow,
        year3CashFlow,
        year4CashFlow,
        year5CashFlow + terminalValue
      ];
      
      // Calculate IRR using Newton-Raphson method
      function calculateIRR(cfs: number[], guess = 0.1) {
        const maxIterations = 1000;
        const tolerance = 0.00001;
        
        for (let i = 0; i < maxIterations; i++) {
          let npv = 0;
          let dnpv = 0;
          
          for (let t = 0; t < cfs.length; t++) {
            npv += cfs[t] / Math.pow(1 + guess, t);
            dnpv += -t * cfs[t] / Math.pow(1 + guess, t + 1);
          }
          
          const newGuess = guess - npv / dnpv;
          
          if (Math.abs(newGuess - guess) < tolerance) {
            return newGuess * 100; // Convert to percentage
          }
          
          guess = newGuess;
        }
        
        return 0; // Failed to converge
      }
      
      const irr = calculateIRR(cashFlows);
      
      // Calculate total cash in and out
      const totalCashIn = initialInvestment;
      const totalCashOut = year1CashFlow + year2CashFlow + year3CashFlow + year4CashFlow + year5CashFlow + terminalValue;
      
      // Calculate net profit
      const netProfit = totalCashOut - totalCashIn;
      
      // Calculate equity multiple
      const equityMultiple = totalCashOut / totalCashIn;
      
      // Calculate average annual cash flow
      const avgAnnualCashFlow = (year1CashFlow + year2CashFlow + year3CashFlow + year4CashFlow + year5CashFlow) / 5;

      return [
        { label: 'Internal Rate of Return (IRR)', value: irr.toFixed(2) + '%', isCurrency: false },
        { label: 'Total Cash In (Investment)', value: totalCashIn.toFixed(2), isCurrency: true },
        { label: 'Total Cash Out (Returns)', value: totalCashOut.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'Equity Multiple', value: equityMultiple.toFixed(2) + 'x', isCurrency: false },
        { label: 'Average Annual Cash Flow', value: avgAnnualCashFlow.toFixed(2), isCurrency: true },
      ];
    },
  },
};
