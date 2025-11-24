import { CalculatorContent } from '@/types';

export const UDFI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'UDFI Calculator | Unrelated Debt-Financed Income Tax for IRA',
  description: 'Calculate Unrelated Debt-Financed Income (UDFI) tax on leveraged real estate in your IRA. Essential calculator for Self-Directed IRAs using non-recourse loans to buy rental properties.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'udfi-calculator',
  article: {
    title: "Understanding UDFI (Unrelated Debt-Financed Income)",
    content: `
    <h2>What is UDFI?</h2>
    <p>Unrelated Debt-Financed Income (UDFI) is a type of UBIT (Unrelated Business Income Tax) that applies when your IRA buys property using debt financing. Even though rental income is normally tax-free in an IRA, the portion attributable to borrowed money is taxable.</p>
    
    <h3>Why Does UDFI Exist?</h3>
    <p>UDFI prevents tax-exempt entities (like IRAs) from having an unfair advantage over taxpayers when using leverage. Without UDFI, IRAs could buy properties with massive leverage and enjoy completely tax-free returns while regular investors pay taxes.</p>
    
    <h3>When Does UDFI Apply?</h3>
    
    <p><strong>UDFI Applies When:</strong></p>
    <ul>
      <li>Your IRA buys property with a non-recourse loan</li>
      <li>Property generates income (rent, sale proceeds)</li>
      <li>Debt was used within past 12 months</li>
    </ul>
    
    <p><strong>UDFI Does NOT Apply When:</strong></p>
    <ul>
      <li>Property bought with 100% cash (no debt)</li>
      <li>Using Solo 401k (major exception - no UDFI!)</li>
      <li>Debt fully paid off for 12+ months</li>
    </ul>
    
    <h3>The Big Advantage: Solo 401k vs Self-Directed IRA</h3>
    
    <p><strong>Self-Directed IRA:</strong></p>
    <ul>
      <li>Leveraged rental income SUBJECT to UDFI</li>
      <li>Can significantly reduce returns</li>
      <li>Complex tax calculations</li>
    </ul>
    
    <p><strong>Solo 401k:</strong></p>
    <ul>
      <li>Leveraged rental income EXEMPT from UDFI</li>
      <li>Keep all rental income tax-free (Roth) or tax-deferred (Traditional)</li>
      <li>This is a HUGE benefit for leveraged real estate</li>
    </ul>
    
    <h3>How UDFI is Calculated</h3>
    
    <p><strong>Acquisition Indebtedness Percentage:</strong></p>
    <p>Percentage = Average Acquisition Indebtedness / Average Adjusted Basis</p>
    
    <p><strong>Taxable Income:</strong></p>
    <p>UDFI Taxable Income = Net Income × Debt Percentage</p>
    
    <p><strong>Tax Calculation:</strong></p>
    <p>UDFI Tax = (Taxable Income - $1,000 exemption) × Trust Tax Rates</p>
    
    <h3>Detailed UDFI Example</h3>
    
    <p><strong>Scenario: Leveraged Rental Property in SDIRA</strong></p>
    <ul>
      <li>Property purchase price: $300,000</li>
      <li>IRA cash down payment: $100,000 (33%)</li>
      <li>Non-recourse loan: $200,000 (67%)</li>
      <li>Annual rental income: $30,000</li>
      <li>Annual expenses: $10,000</li>
      <li>Net rental income: $20,000</li>
    </ul>
    
    <p><strong>UDFI Calculation:</strong></p>
    <ul>
      <li>Debt percentage: $200,000 / $300,000 = 67%</li>
      <li>Income subject to UDFI: $20,000 × 67% = $13,400</li>
      <li>Less $1,000 exemption: $12,400</li>
      <li>UDFI tax (at ~35% trust rates): ~$3,800</li>
      <li>Net income after UDFI: $20,000 - $3,800 = $16,200</li>
    </ul>
    
    <p><strong>Effective Impact:</strong></p>
    <ul>
      <li>Without UDFI: $20,000 income (100% tax-free in Roth IRA)</li>
      <li>With UDFI: $16,200 after-tax income (19% tax rate)</li>
    </ul>
    
    <h3>UDFI on Property Sale</h3>
    
    <p>UDFI also applies to capital gains when you sell leveraged property:</p>
    
    <p><strong>Example: Sale of Leveraged Property</strong></p>
    <ul>
      <li>Original purchase: $300,000 (67% debt)</li>
      <li>Sale price after 5 years: $400,000</li>
      <li>Capital gain: $100,000</li>
      <li>Debt at time of sale: $180,000 (paid down from $200,000)</li>
      <li>Average debt percentage over hold: ~63%</li>
      <li>Gain subject to UDFI: $100,000 × 63% = $63,000</li>
      <li>UDFI on gain: ~$22,000</li>
      <li>Net gain after UDFI: $78,000</li>
    </ul>
    
    <h3>Trust Tax Rates (2024)</h3>
    <p>UDFI uses compressed trust tax brackets:</p>
    <ul>
      <li><strong>$0-$3,100:</strong> 10%</li>
      <li><strong>$3,100-$11,150:</strong> 24%</li>
      <li><strong>$11,150-$15,200:</strong> 35%</li>
      <li><strong>Over $15,200:</strong> 37%</li>
    </ul>
    
    <h3>Strategies to Minimize UDFI</h3>
    
    <p><strong>1. Use Solo 401k Instead of SDIRA:</strong></p>
    <ul>
      <li>No UDFI on leveraged property in Solo 401k</li>
      <li>ALL rental income tax-free (Roth) or tax-deferred (Traditional)</li>
      <li>This is the #1 best strategy if eligible</li>
    </ul>
    
    <p><strong>2. Reduce Loan-to-Value:</strong></p>
    <ul>
      <li>Lower debt percentage = less UDFI</li>
      <li>50% LTV vs 75% LTV significantly reduces tax</li>
      <li>Consider larger down payment</li>
    </ul>
    
    <p><strong>3. Pay Down Loan Quickly:</strong></p>
    <ul>
      <li>Use rental income to pay down principal</li>
      <li>Reduces debt percentage over time</li>
      <li>After loan is paid off for 12 months, UDFI no longer applies</li>
    </ul>
    
    <p><strong>4. Maximize Deductions:</strong></p>
    <ul>
      <li>Depreciation, repairs, property management</li>
      <li>Lower net income = lower UDFI</li>
      <li>Keep detailed expense records</li>
    </ul>
    
    <p><strong>5. Hold Long-Term:</strong></p>
    <ul>
      <li>As loan is paid down, UDFI decreases</li>
      <li>Eventually becomes zero when loan paid off</li>
      <li>Long-term hold minimizes overall UDFI impact</li>
    </ul>
    
    <p><strong>6. Buy with Cash, Then Refinance:</strong></p>
    <ul>
      <li>CAUTION: This strategy is risky and questionable</li>
      <li>Some interpret IRS rules to allow cash purchase followed by loan</li>
      <li>Debt taken AFTER property is in IRA may not be "acquisition debt"</li>
      <li>IRS has challenged this - consult tax attorney</li>
    </ul>
    
    <h3>Non-Recourse Loan Requirement</h3>
    
    <p>IRAs can only use non-recourse financing:</p>
    <ul>
      <li>Lender can only claim the property (not other IRA assets)</li>
      <li>You cannot personally guarantee the loan</li>
      <li>Higher interest rates (typically 6-9%)</li>
      <li>Larger down payments required (30-50%)</li>
      <li>Fewer lenders offer non-recourse loans</li>
    </ul>
    
    <h3>Reporting UDFI</h3>
    
    <p><strong>Form 990-T Required:</strong></p>
    <ul>
      <li>File if gross UDFI income exceeds $1,000</li>
      <li>Due by April 15 (or October 15 with extension)</li>
      <li>IRA files using its own EIN</li>
      <li>Failure to file can result in penalties</li>
    </ul>
    
    <p><strong>Estimated Taxes:</strong></p>
    <ul>
      <li>May need quarterly estimated tax payments</li>
      <li>Required if UDFI tax expected to exceed $500</li>
      <li>Paid from IRA funds (reduces IRA balance)</li>
    </ul>
    
    <h3>UDFI in Different Account Types</h3>
    
    <p><strong>Traditional IRA:</strong></p>
    <ul>
      <li>Subject to UDFI on leveraged property</li>
      <li>Tax paid from IRA reduces account balance</li>
      <li>Can't deduct UDFI on personal return</li>
    </ul>
    
    <p><strong>Roth IRA:</strong></p>
    <ul>
      <li>Also subject to UDFI (not exempt)</li>
      <li>Particularly painful: already paid tax on contributions, now pay UDFI too</li>
      <li>Double taxation effect</li>
    </ul>
    
    <p><strong>Solo 401k:</strong></p>
    <ul>
      <li>NOT subject to UDFI (huge advantage)</li>
      <li>Can leverage property with zero UDFI tax</li>
      <li>Must qualify (self-employed, no employees)</li>
    </ul>
    
    <h3>Example: SDIRA vs Solo 401k with Leverage</h3>
    
    <p><strong>Same Investment, Different Accounts:</strong></p>
    <ul>
      <li>Property: $300,000 (70% leveraged, $210,000 loan)</li>
      <li>Net rental income: $20,000/year</li>
      <li>Hold for 10 years</li>
    </ul>
    
    <p><strong>In Self-Directed IRA (with UDFI):</strong></p>
    <ul>
      <li>UDFI per year: ~$4,000 (on 70% of income)</li>
      <li>Total UDFI over 10 years: ~$40,000</li>
      <li>Net income: $160,000</li>
    </ul>
    
    <p><strong>In Solo 401k (NO UDFI):</strong></p>
    <ul>
      <li>UDFI: $0</li>
      <li>Net income: $200,000</li>
      <li>Extra $40,000 saved (25% more)</li>
    </ul>
    
    <h3>When UDFI Makes Sense</h3>
    
    <p><strong>May Still Be Worth It Despite UDFI:</strong></p>
    <ul>
      <li>Leverage amplifies returns significantly</li>
      <li>Even with UDFI, returns may beat all-cash alternatives</li>
      <li>Can't qualify for Solo 401k (not self-employed)</li>
      <li>Property has strong appreciation potential</li>
    </ul>
    
    <p><strong>Run the Numbers:</strong></p>
    <ul>
      <li>Compare leveraged with UDFI vs all-cash no UDFI</li>
      <li>Factor in loan costs, UDFI tax, and returns</li>
      <li>Often leverage still wins despite the tax</li>
    </ul>
    
    <h3>Common UDFI Mistakes</h3>
    <ul>
      <li>Not filing Form 990-T when required</li>
      <li>Failing to make estimated tax payments</li>
      <li>Not properly calculating average acquisition indebtedness</li>
      <li>Using SDIRA when Solo 401k would avoid UDFI entirely</li>
      <li>Not keeping detailed records of loan balances</li>
    </ul>
    
    <h3>Key Takeaways</h3>
    <ul>
      <li>UDFI applies to leveraged property in IRAs (not Solo 401k)</li>
      <li>Only the debt-financed portion of income is taxable</li>
      <li>Trust tax rates are compressed (reach 37% quickly)</li>
      <li>Solo 401k is exempt from UDFI (major advantage)</li>
      <li>Must file Form 990-T and pay tax from IRA funds</li>
      <li>Despite UDFI, leverage can still boost returns</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "loanAmount",
        label: "Non-Recourse Loan Amount",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "annualRentalIncome",
        label: "Annual Rental Income",
        type: "number",
        placeholder: "30000",
        defaultValue: "30000",
      },
      {
        name: "annualExpenses",
        label: "Annual Expenses (Before Depreciation)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "annualDepreciation",
        label: "Annual Depreciation Deduction",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "loanPaydown",
        label: "Annual Loan Principal Paydown",
        type: "number",
        placeholder: "4000",
        defaultValue: "4000",
      },
    ],
    results: [
      { label: "Cash Investment", isCurrency: true },
      { label: "Debt Percentage", isCurrency: false },
      { label: "Net Rental Income (Before UDFI)", isCurrency: true },
      { label: "Income Subject to UDFI", isCurrency: true },
      { label: "UDFI Tax Owed", isCurrency: true },
      { label: "Net Income After UDFI", isCurrency: true },
      { label: "Cash-on-Cash Return (After UDFI)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const loanAmount = Number(data.loanAmount) || 0;
      const annualRentalIncome = Number(data.annualRentalIncome) || 0;
      const annualExpenses = Number(data.annualExpenses) || 0;
      const annualDepreciation = Number(data.annualDepreciation) || 0;
      const loanPaydown = Number(data.loanPaydown) || 0;
      
      const cashInvestment = propertyValue - loanAmount;
      const debtPercentage = (loanAmount / propertyValue) * 100;
      const netIncome = annualRentalIncome - annualExpenses - annualDepreciation;
      
      const udfiTaxableIncome = netIncome * (loanAmount / propertyValue);
      const udfiAfterExemption = Math.max(0, udfiTaxableIncome - 1000);
      
      let udfiTax = 0;
      if (udfiAfterExemption > 0) {
        if (udfiAfterExemption <= 3100) {
          udfiTax = udfiAfterExemption * 0.10;
        } else if (udfiAfterExemption <= 11150) {
          udfiTax = 310 + (udfiAfterExemption - 3100) * 0.24;
        } else if (udfiAfterExemption <= 15200) {
          udfiTax = 310 + 1932 + (udfiAfterExemption - 11150) * 0.35;
        } else {
          udfiTax = 310 + 1932 + 1417.50 + (udfiAfterExemption - 15200) * 0.37;
        }
      }
      
      const netIncomeAfterUDFI = netIncome - udfiTax;
      const cashOnCashReturn = cashInvestment > 0 ? (netIncomeAfterUDFI / cashInvestment * 100) : 0;

      return [
        { label: "Cash Investment", value: `${cashInvestment.toFixed(2)}`, isCurrency: true },
        { label: "Debt Percentage", value: `${debtPercentage.toFixed(2)}%`, isCurrency: false },
        { label: "Net Rental Income (Before UDFI)", value: `${netIncome.toFixed(2)}`, isCurrency: true },
        { label: "Income Subject to UDFI", value: `${udfiTaxableIncome.toFixed(2)}`, isCurrency: true },
        { label: "UDFI Tax Owed", value: `${udfiTax.toFixed(2)}`, isCurrency: true },
        { label: "Net Income After UDFI", value: `${netIncomeAfterUDFI.toFixed(2)}`, isCurrency: true },
        { label: "Cash-on-Cash Return (After UDFI)", value: `${cashOnCashReturn.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
