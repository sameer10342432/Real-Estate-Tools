import { CalculatorContent } from '@/types';

export const TAX_EQUIVALENT_YIELD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Tax-Equivalent Yield (Real Estate vs. Bonds) Calculator',
  description: 'Compare after-tax returns of real estate investments versus taxable and tax-exempt bonds. Calculate which investment provides better risk-adjusted returns.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'tax-equivalent-yield-calculator',
  metaTitle: 'Tax Equivalent Yield Calculator - Real Estate vs Bonds Comparison',
  metaDescription: 'Compare after-tax yields of rental property, REITs, municipal bonds, and corporate bonds. Calculate tax-equivalent yield to make informed investment decisions.',
  article: {
    title: "Tax-Equivalent Yield: Real Estate vs. Bonds - Which Wins After Taxes?",
    content: `
    <h2>Understanding Tax-Equivalent Yield</h2>
    <p>Tax-equivalent yield (TEY) allows you to compare investments with different tax treatments on an apples-to-apples basis. A 6% rental property return and a 4% municipal bond yield aren't directly comparable until you account for taxes.</p>
    
    <h3>The TEY Formula</h3>
    <p><strong>Tax-Equivalent Yield = Tax-Free Yield ÷ (1 - Tax Rate)</strong></p>
    
    <h4>Example: Municipal Bond</h4>
    <ul>
      <li>Municipal bond yield: 4% (tax-free)</li>
      <li>Your tax bracket: 32%</li>
      <li>TEY = 4% ÷ (1 - 0.32) = 5.88%</li>
      <li><strong>Translation:</strong> You'd need 5.88% from a taxable investment to match this muni bond's after-tax return</li>
    </ul>
    
    <h3>Tax Treatment Comparison</h3>
    
    <table>
      <tr>
        <th>Investment</th>
        <th>Income Tax</th>
        <th>Capital Gains Tax</th>
        <th>Special Benefits</th>
      </tr>
      <tr>
        <td>Rental Property</td>
        <td>Ordinary income on rent (22-37%)</td>
        <td>Long-term on sale (15-20%)</td>
        <td>Depreciation deduction, 1031 exchanges</td>
      </tr>
      <tr>
        <td>REITs</td>
        <td>Ordinary income (22-37%)</td>
        <td>Long-term on sale (15-20%)</td>
        <td>20% QBI deduction (2018-2025)</td>
      </tr>
      <tr>
        <td>Municipal Bonds</td>
        <td>Tax-free (federal)</td>
        <td>Long-term on sale (15-20%)</td>
        <td>Often state tax-free too</td>
      </tr>
      <tr>
        <td>Corporate Bonds</td>
        <td>Ordinary income (22-37%)</td>
        <td>Long-term on sale (15-20%)</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Treasury Bonds</td>
        <td>Ordinary income (federal only)</td>
        <td>Long-term on sale (15-20%)</td>
        <td>State tax-free</td>
      </tr>
    </table>
    
    <h3>Real Estate Tax Advantages</h3>
    
    <h4>Depreciation: The Hidden Tax Shelter</h4>
    <p>Rental property owners can deduct depreciation even while property appreciates:</p>
    <ul>
      <li>Residential: Depreciate building over 27.5 years</li>
      <li>Commercial: Depreciate over 39 years</li>
      <li>Example: $300k property, $250k building value → $9,091/year deduction</li>
      <li>This "paper loss" shields rental income from tax</li>
    </ul>
    
    <h4>Example: $300k Rental Property</h4>
    <ul>
      <li>Rental Income: $24,000/year</li>
      <li>Expenses: $8,000 (property tax, insurance, maintenance)</li>
      <li>Mortgage Interest: $10,000</li>
      <li>Depreciation: $9,091</li>
      <li><strong>Taxable Income:</strong> $24,000 - $8,000 - $10,000 - $9,091 = -$3,091 (loss!)</li>
      <li><strong>Tax Owed:</strong> $0 (and can offset other income up to $25k if active participant)</li>
    </ul>
    
    <p>In reality, you had $6,000 positive cash flow, but paid zero tax.</p>
    
    <h4>1031 Exchange: Infinite Tax Deferral</h4>
    <p>Sell rental property, reinvest proceeds in another property within 180 days → defer all capital gains tax indefinitely. Keep doing this until death, heirs get step-up basis = zero tax ever.</p>
    
    <h3>Municipal Bonds Tax Advantages</h3>
    
    <h4>Federal Tax Exemption</h4>
    <p>Interest from municipal bonds issued by state/local governments is exempt from federal income tax. If you buy bonds from your own state, often state tax-free too (double tax-free).</p>
    
    <h4>When Munis Make Sense</h4>
    <ul>
      <li><strong>High Tax Bracket:</strong> 32%+ federal bracket (TEY benefit maximized)</li>
      <li><strong>High-Tax State:</strong> CA, NY, NJ, MA (state exemption valuable)</li>
      <li><strong>Conservative Investor:</strong> Want stability, can't handle real estate volatility</li>
      <li><strong>No Time for Management:</strong> Bonds are 100% passive (vs. landlord duties)</li>
      <li><strong>Liquidity Needs:</strong> Bonds can be sold in days (vs. months for property)</li>
    </ul>
    
    <h4>When Munis DON'T Make Sense</h4>
    <ul>
      <li><strong>Low Tax Bracket:</strong> 12-22% brackets (TEY advantage minimal)</li>
      <li><strong>Retirement Accounts:</strong> Never buy tax-free bonds in IRA/401k (wasting tax shelter)</li>
      <li><strong>High Return Needs:</strong> Muni yields (2-4%) won't meet aggressive growth goals</li>
    </ul>
    
    <h3>After-Tax Return Comparison</h3>
    
    <h4>Scenario: 32% Tax Bracket, High-Cost State (10% state tax)</h4>
    
    <table>
      <tr>
        <th>Investment</th>
        <th>Gross Yield</th>
        <th>Federal Tax</th>
        <th>State Tax</th>
        <th>After-Tax Yield</th>
      </tr>
      <tr>
        <td>Rental Property (8% cash-on-cash)</td>
        <td>8.00%</td>
        <td>Sheltered by depreciation</td>
        <td>Sheltered by depreciation</td>
        <td>~7.50%</td>
      </tr>
      <tr>
        <td>REIT (6% dividend)</td>
        <td>6.00%</td>
        <td>-1.54% (32% - 20% QBI)</td>
        <td>-0.60%</td>
        <td>3.86%</td>
      </tr>
      <tr>
        <td>Muni Bond (in-state) (4%)</td>
        <td>4.00%</td>
        <td>Tax-free</td>
        <td>Tax-free</td>
        <td>4.00%</td>
      </tr>
      <tr>
        <td>Corporate Bond (5.5%)</td>
        <td>5.50%</td>
        <td>-1.76%</td>
        <td>-0.55%</td>
        <td>3.19%</td>
      </tr>
      <tr>
        <td>Treasury Bond (5%)</td>
        <td>5.00%</td>
        <td>-1.60%</td>
        <td>Tax-free</td>
        <td>3.40%</td>
      </tr>
    </table>
    
    <p><strong>Winner:</strong> Rental property (7.50% after-tax) beats all bonds, but requires 100× more work.</p>
    
    <h3>Risk-Adjusted Returns: The Missing Piece</h3>
    
    <h4>Investment Risk Levels</h4>
    <ul>
      <li><strong>Treasury Bonds:</strong> Risk-free (backed by U.S. government)</li>
      <li><strong>Municipal Bonds:</strong> Very low risk (default rate <1%)</li>
      <li><strong>Corporate Bonds (Investment Grade):</strong> Low risk (rated BBB+ or higher)</li>
      <li><strong>REITs:</strong> Moderate risk (volatile, but diversified across properties)</li>
      <li><strong>Rental Property:</strong> Moderate-high risk (tenant, vacancy, maintenance, market)</li>
    </ul>
    
    <h4>The Sharpe Ratio Perspective</h4>
    <p>Sharpe Ratio = (Return - Risk-Free Rate) ÷ Volatility</p>
    <p>Higher Sharpe Ratio = better risk-adjusted return</p>
    
    <table>
      <tr>
        <th>Investment</th>
        <th>After-Tax Return</th>
        <th>Annual Volatility</th>
        <th>Sharpe Ratio</th>
      </tr>
      <tr>
        <td>Rental Property</td>
        <td>7.5%</td>
        <td>15%</td>
        <td>0.30</td>
      </tr>
      <tr>
        <td>REITs</td>
        <td>3.9%</td>
        <td>20%</td>
        <td>-0.05</td>
      </tr>
      <tr>
        <td>Muni Bonds</td>
        <td>4.0%</td>
        <td>3%</td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Corporate Bonds</td>
        <td>3.2%</td>
        <td>5%</td>
        <td>-0.36</td>
      </tr>
    </table>
    
    <p>(Assuming 4% risk-free rate)</p>
    
    <h3>Liquidity Matters</h3>
    
    <h4>Time to Convert to Cash</h4>
    <ul>
      <li><strong>Treasury/Corporate Bonds:</strong> 1-3 days</li>
      <li><strong>Municipal Bonds:</strong> 1-5 days (depends on market)</li>
      <li><strong>REITs:</strong> 1-3 days (publicly traded)</li>
      <li><strong>Rental Property:</strong> 30-180 days (plus 6-8% transaction costs)</li>
    </ul>
    
    <p><strong>Implication:</strong> If you need liquidity (emergency fund, short-term goals), bonds win. If you can lock up capital for 5+ years, real estate wins.</p>
    
    <h3>Time Commitment Comparison</h3>
    
    <table>
      <tr>
        <th>Investment</th>
        <th>Annual Time Required</th>
        <th>Responsibilities</th>
      </tr>
      <tr>
        <td>Bonds</td>
        <td>0-2 hours</td>
        <td>Review statements, rebalance portfolio</td>
      </tr>
      <tr>
        <td>REITs</td>
        <td>0-2 hours</td>
        <td>Monitor performance, rebalance</td>
      </tr>
      <tr>
        <td>Rental Property</td>
        <td>50-200 hours</td>
        <td>Tenant management, maintenance, repairs, accounting, tax prep</td>
      </tr>
    </table>
    
    <h3>Inflation Protection</h3>
    
    <h4>How Investments Respond to Inflation</h4>
    <ul>
      <li><strong>Rental Property:</strong> Excellent (rents and values rise with inflation)</li>
      <li><strong>REITs:</strong> Good (rents rise, but stock price volatility)</li>
      <li><strong>TIPS (Inflation-Protected Treasuries):</strong> Good (designed to match inflation)</li>
      <li><strong>Municipal Bonds:</strong> Poor (fixed coupon loses purchasing power)</li>
      <li><strong>Corporate/Treasury Bonds:</strong> Poor (fixed income eroded by inflation)</li>
    </ul>
    
    <p><strong>2022 Example:</strong> With 8% inflation, $100k in bonds lost $8k in purchasing power. $100k rental property increased in value by ~$8k and rents rose.</p>
    
    <h3>The Leverage Factor</h3>
    
    <h4>Real Estate: Leverage Amplifies Returns</h4>
    <ul>
      <li>$60k down payment on $300k property (20% down)</li>
      <li>Property appreciates 4% per year = $12k gain</li>
      <li>Return on your $60k investment = 20% (not 4%)</li>
      <li>Plus cash flow, plus loan paydown</li>
    </ul>
    
    <h4>Bonds: No Leverage (for retail investors)</h4>
    <ul>
      <li>$60k invested in bonds</li>
      <li>Earns 4% = $2,400/year</li>
      <li>Return on investment = 4%</li>
      <li>No amplification</li>
    </ul>
    
    <p><strong>But:</strong> Leverage cuts both ways. Property value drops 10% = -50% loss on your $60k (vs. bond holding steady).</p>
    
    <h3>Portfolio Allocation Strategy</h3>
    
    <h4>The Balanced Approach</h4>
    <p>Don't choose one or the other—use both strategically:</p>
    
    <h5>High Earner Portfolio (35% tax bracket, $500k net worth)</h5>
    <ul>
      <li><strong>40% Stocks:</strong> Growth potential</li>
      <li><strong>20% Rental Property:</strong> Income, appreciation, tax benefits</li>
      <li><strong>20% Municipal Bonds:</strong> Stability, tax-free income</li>
      <li><strong>10% REITs:</strong> Real estate diversification without landlord duties</li>
      <li><strong>10% Cash:</strong> Emergency fund, opportunities</li>
    </ul>
    
    <h5>Middle-Income Portfolio (22% tax bracket, $150k net worth)</h5>
    <ul>
      <li><strong>50% Stocks:</strong> Growth priority</li>
      <li><strong>20% Rental Property or REITs:</strong> Real estate exposure</li>
      <li><strong>20% Corporate/Treasury Bonds:</strong> Munis don't make sense at low bracket</li>
      <li><strong>10% Cash:</strong> Emergency fund</li>
    </ul>
    
    <h3>State Tax Considerations</h3>
    
    <h4>High-Tax States (Favor Munis)</h4>
    <ul>
      <li>California: 13.3% top rate</li>
      <li>New York: 10.9% top rate</li>
      <li>New Jersey: 10.75% top rate</li>
      <li>Hawaii: 11% top rate</li>
      <li><strong>Strategy:</strong> In-state muni bonds = federal + state tax-free (effectively 45%+ bracket advantage)</li>
    </ul>
    
    <h4>No-Tax States (Munis Less Attractive)</h4>
    <ul>
      <li>Texas, Florida, Nevada, Tennessee, Washington, South Dakota, Wyoming, Alaska, New Hampshire</li>
      <li><strong>Strategy:</strong> Municipal bonds still save federal tax, but lose state tax advantage</li>
    </ul>
    
    <h3>Interest Rate Environment Impact</h3>
    
    <h4>Rising Rate Environment (2022-2024)</h4>
    <ul>
      <li><strong>Bonds:</strong> Prices fall (inverse relationship with rates), yields rise</li>
      <li><strong>Real Estate:</strong> Mortgage costs rise, but rents rise too (inflation hedge)</li>
      <li><strong>Winner:</strong> Real estate (inflation/rising rate protection)</li>
    </ul>
    
    <h4>Falling Rate Environment (2008-2021)</h4>
    <ul>
      <li><strong>Bonds:</strong> Prices rise, yields fall (good for bondholders)</li>
      <li><strong>Real Estate:</strong> Lower mortgage costs = higher property values</li>
      <li><strong>Winner:</strong> Both win, real estate wins more (leverage effect)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "rentalYield",
        label: "Rental Property Cash-on-Cash Return (%)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "reitYield",
        label: "REIT Dividend Yield (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "muniYield",
        label: "Municipal Bond Yield (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "corporateBondYield",
        label: "Corporate Bond Yield (%)",
        type: "number",
        placeholder: "5.5",
        defaultValue: "5.5",
      },
      {
        name: "treasuryYield",
        label: "Treasury Bond Yield (%)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "federalTaxBracket",
        label: "Federal Tax Bracket (%)",
        type: "number",
        placeholder: "32",
        defaultValue: "32",
      },
      {
        name: "stateTaxRate",
        label: "State Tax Rate (%)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "depreciation",
        label: "Rental Property Depreciation Benefit (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
    ],
    results: [
      { label: "Rental Property After-Tax Yield (%)", isCurrency: false },
      { label: "REIT After-Tax Yield (%)", isCurrency: false },
      { label: "Muni Bond After-Tax Yield (%)", isCurrency: false },
      { label: "Corporate Bond After-Tax Yield (%)", isCurrency: false },
      { label: "Treasury Bond After-Tax Yield (%)", isCurrency: false },
      { label: "Muni Bond Tax-Equivalent Yield (%)", isCurrency: false },
      { label: "Best After-Tax Return", isCurrency: false },
      { label: "Rental vs Muni Advantage (%)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const rentalYield = Number(data.rentalYield) / 100 || 0;
      const reitYield = Number(data.reitYield) / 100 || 0;
      const muniYield = Number(data.muniYield) / 100 || 0;
      const corporateBondYield = Number(data.corporateBondYield) / 100 || 0;
      const treasuryYield = Number(data.treasuryYield) / 100 || 0;
      const federalTaxBracket = Number(data.federalTaxBracket) / 100 || 0;
      const stateTaxRate = Number(data.stateTaxRate) / 100 || 0;
      const depreciation = Number(data.depreciation) / 100 || 0;
      
      // Rental property after-tax (with depreciation benefit)
      const rentalTaxShield = depreciation; // Depreciation shields income
      const rentalEffectiveYield = rentalYield * (1 - Math.max(0, (federalTaxBracket + stateTaxRate - rentalTaxShield)));
      
      // REIT after-tax (20% QBI deduction applies)
      const qbiDeduction = 0.20; // Qualified Business Income deduction
      const reitEffectiveTaxRate = federalTaxBracket * (1 - qbiDeduction) + stateTaxRate;
      const reitAfterTax = reitYield * (1 - reitEffectiveTaxRate);
      
      // Muni bond (tax-free federal and state)
      const muniAfterTax = muniYield; // Already tax-free
      
      // Corporate bond (fully taxable)
      const corporateAfterTax = corporateBondYield * (1 - federalTaxBracket - stateTaxRate);
      
      // Treasury bond (federal taxable, state tax-free)
      const treasuryAfterTax = treasuryYield * (1 - federalTaxBracket);
      
      // Tax-equivalent yield of muni bond
      const muniTEY = muniYield / (1 - federalTaxBracket - stateTaxRate);
      
      // Determine winner
      const yields = [
        { name: "Rental Property", value: rentalEffectiveYield },
        { name: "REIT", value: reitAfterTax },
        { name: "Municipal Bond", value: muniAfterTax },
        { name: "Corporate Bond", value: corporateAfterTax },
        { name: "Treasury Bond", value: treasuryAfterTax },
      ];
      
      const winner = yields.reduce((max, current) => 
        current.value > max.value ? current : max
      );
      
      const rentalAdvantage = (rentalEffectiveYield - muniAfterTax) * 100;

      return [
        { label: "Rental Property After-Tax Yield (%)", value: (rentalEffectiveYield * 100).toFixed(2), isCurrency: false },
        { label: "REIT After-Tax Yield (%)", value: (reitAfterTax * 100).toFixed(2), isCurrency: false },
        { label: "Muni Bond After-Tax Yield (%)", value: (muniAfterTax * 100).toFixed(2), isCurrency: false },
        { label: "Corporate Bond After-Tax Yield (%)", value: (corporateAfterTax * 100).toFixed(2), isCurrency: false },
        { label: "Treasury Bond After-Tax Yield (%)", value: (treasuryAfterTax * 100).toFixed(2), isCurrency: false },
        { label: "Muni Bond Tax-Equivalent Yield (%)", value: (muniTEY * 100).toFixed(2), isCurrency: false },
        { label: "Best After-Tax Return", value: `${winner.name} (${(winner.value * 100).toFixed(2)}%)`, isCurrency: false },
        { label: "Rental vs Muni Advantage (%)", value: rentalAdvantage.toFixed(2), isCurrency: false },
      ];
    },
  },
};
