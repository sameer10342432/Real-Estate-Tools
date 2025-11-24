import { CalculatorContent } from '@/types';

export const UBIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'UBIT Calculator | Unrelated Business Income Tax for IRA/401k',
  description: 'Calculate Unrelated Business Income Tax (UBIT) on active business income in your IRA or 401k. Essential tax calculator for retirement accounts conducting trade or business activities.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'ubit-calculator',
  article: {
    title: "Understanding UBIT (Unrelated Business Income Tax)",
    content: `
    <h2>What is UBIT?</h2>
    <p>Unrelated Business Income Tax (UBIT) is a tax on income generated from an active trade or business conducted by a tax-exempt entity like an IRA or 401k. Congress created UBIT to prevent unfair competition between tax-exempt organizations and taxable businesses.</p>
    
    <h3>When Does UBIT Apply to IRAs/401ks?</h3>
    
    <p>UBIT applies when your IRA/401k earns income from a trade or business that is:</p>
    <ul>
      <li><strong>Regularly Carried On:</strong> Conducted with frequency and continuity</li>
      <li><strong>Trade or Business:</strong> Active business activity (not passive investment)</li>
      <li><strong>Unrelated:</strong> Not substantially related to the exempt purpose of the IRA</li>
    </ul>
    
    <h3>Real Estate Activities Subject to UBIT</h3>
    
    <p><strong>Activities that TRIGGER UBIT:</strong></p>
    <ul>
      <li><strong>Fix-and-Flip (Short-Term):</strong> Frequent property flipping treated as dealer activity</li>
      <li><strong>Property Development:</strong> Building properties for sale (developer activity)</li>
      <li><strong>Operating Business:</strong> Running hotel, storage facility, or active business</li>
      <li><strong>Property Management Services:</strong> Actively managing properties for others</li>
      <li><strong>Partnership Active Income:</strong> IRA's share of partnership business income</li>
    </ul>
    
    <p><strong>Activities that DO NOT trigger UBIT:</strong></p>
    <ul>
      <li><strong>Passive Rental Income:</strong> Long-term rental of real property (safe harbor)</li>
      <li><strong>Interest Income:</strong> Lending money secured by property</li>
      <li><strong>Capital Gains:</strong> Sale of investment property held long-term</li>
      <li><strong>Dividends:</strong> Stock dividends and distributions</li>
    </ul>
    
    <h3>UBIT Calculation</h3>
    
    <p><strong>Formula:</strong></p>
    <p>UBIT = (Unrelated Business Taxable Income - $1,000 exemption) × Trust Tax Rates</p>
    
    <p><strong>$1,000 Automatic Exemption:</strong></p>
    <p>First $1,000 of unrelated business income is exempt from UBIT.</p>
    
    <h3>Trust Tax Rates (2024)</h3>
    <p>UBIT uses compressed trust tax rates (reach top rate quickly):</p>
    <ul>
      <li><strong>$0-$3,100:</strong> 10%</li>
      <li><strong>$3,100-$11,150:</strong> 24%</li>
      <li><strong>$11,150-$15,200:</strong> 35%</li>
      <li><strong>Over $15,200:</strong> 37%</li>
    </ul>
    <p><em>These rates reach maximum much faster than individual rates!</em></p>
    
    <h3>Example UBIT Calculations</h3>
    
    <p><strong>Example 1: Fix-and-Flip in IRA</strong></p>
    <ul>
      <li>IRA buys property: $150,000</li>
      <li>Rehab costs: $30,000</li>
      <li>Sells for: $220,000</li>
      <li>Gross profit: $40,000</li>
      <li>Selling costs: $10,000</li>
      <li>Net unrelated business income: $30,000</li>
      <li>Less $1,000 exemption: $29,000</li>
      <li><strong>UBIT owed: ~$9,400 (approximately 32% effective rate)</strong></li>
    </ul>
    
    <p><strong>Example 2: Operating Business</strong></p>
    <ul>
      <li>IRA owns car wash (active business)</li>
      <li>Gross revenue: $100,000</li>
      <li>Operating expenses: $60,000</li>
      <li>Net income: $40,000</li>
      <li>Less $1,000 exemption: $39,000</li>
      <li><strong>UBIT owed: ~$13,000</strong></li>
    </ul>
    
    <h3>UDFI vs UBIT</h3>
    
    <p>These are related but different taxes:</p>
    
    <p><strong>UBIT (Unrelated Business Income Tax):</strong></p>
    <ul>
      <li>Tax on active trade or business income</li>
      <li>Applies to operational business activity</li>
      <li>Example: IRA operates car wash or flips houses frequently</li>
    </ul>
    
    <p><strong>UDFI (Unrelated Debt-Financed Income):</strong></p>
    <ul>
      <li>Tax on income from leveraged/debt-financed property</li>
      <li>Applies even to passive rental income if property has debt</li>
      <li>Example: IRA buys rental with mortgage (see UDFI calculator)</li>
    </ul>
    
    <h3>Strategies to Avoid or Reduce UBIT</h3>
    
    <p><strong>1. Maintain Passive Investment Status:</strong></p>
    <ul>
      <li>Buy and hold real estate long-term (not frequent flipping)</li>
      <li>Rent properties passively</li>
      <li>Avoid dealer status (frequent sales)</li>
    </ul>
    
    <p><strong>2. Use Solo 401k Instead of SDIRA:</strong></p>
    <ul>
      <li>Solo 401k can conduct certain active businesses without UBIT</li>
      <li>More flexibility for business activities</li>
      <li>Consult tax advisor on specific activities</li>
    </ul>
    
    <p><strong>3. Separate Passive and Active Investments:</strong></p>
    <ul>
      <li>Keep rental properties (passive) in IRA</li>
      <li>Conduct active businesses outside IRA</li>
      <li>Don't mix passive and active in same account</li>
    </ul>
    
    <p><strong>4. Maximize Deductions:</strong></p>
    <ul>
      <li>Deduct all legitimate business expenses</li>
      <li>Depreciation, repairs, management fees</li>
      <li>Reduce taxable income subject to UBIT</li>
    </ul>
    
    <p><strong>5. Spread Income Over Multiple Years:</strong></p>
    <ul>
      <li>Installment sales to spread taxable income</li>
      <li>Time business activities to minimize annual UBIT</li>
    </ul>
    
    <h3>Reporting UBIT</h3>
    
    <p><strong>Form 990-T Required:</strong></p>
    <ul>
      <li>Must file if unrelated business gross income exceeds $1,000</li>
      <li>Due same time as individual return (April 15 or Oct 15 with extension)</li>
      <li>IRA/401k files under its own EIN</li>
      <li>Failure to file can result in penalties</li>
    </ul>
    
    <p><strong>Estimated Tax Payments:</strong></p>
    <ul>
      <li>May need to make quarterly estimated UBIT payments</li>
      <li>If UBIT expected to exceed $500</li>
    </ul>
    
    <h3>UBIT in Different Retirement Accounts</h3>
    
    <p><strong>Traditional IRA/401k:</strong></p>
    <ul>
      <li>UBIT paid from IRA/401k funds</li>
      <li>Reduces account value</li>
      <li>Can't deduct UBIT on personal return</li>
    </ul>
    
    <p><strong>Roth IRA/401k:</strong></p>
    <ul>
      <li>Still subject to UBIT (not exempt)</li>
      <li>UBIT paid from Roth funds</li>
      <li>Double taxation: pay UBIT now, already paid tax on contributions</li>
    </ul>
    
    <h3>Common UBIT Pitfalls</h3>
    
    <ul>
      <li><strong>Too Many Flips:</strong> Frequent flipping triggers dealer status and UBIT</li>
      <li><strong>Operating Businesses:</strong> Active businesses in IRA often trigger UBIT</li>
      <li><strong>Partnership Income:</strong> IRA's share of partnership business income</li>
      <li><strong>Failure to File 990-T:</strong> Penalties for not filing when required</li>
      <li><strong>Not Paying Estimated Tax:</strong> Underpayment penalties</li>
    </ul>
    
    <h3>When to Consult a Tax Professional</h3>
    <ul>
      <li>Conducting any active business in IRA/401k</li>
      <li>Multiple property sales per year</li>
      <li>Operating rental properties with services (hotel-like)</li>
      <li>Partnership or LLC investments with business income</li>
      <li>Any uncertainty about UBIT application</li>
    </ul>
    
    <h3>Key Takeaways</h3>
    <ul>
      <li>Passive rental income generally exempt from UBIT</li>
      <li>Active business activity in IRA triggers UBIT</li>
      <li>Trust tax rates are very compressed (hit 37% quickly)</li>
      <li>$1,000 automatic exemption helps small activities</li>
      <li>Must file Form 990-T if gross income over $1,000</li>
      <li>Plan investments to minimize UBIT exposure</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "grossBusinessIncome",
        label: "Gross Business Income",
        type: "number",
        placeholder: "100000",
        defaultValue: "100000",
      },
      {
        name: "businessExpenses",
        label: "Business Expenses (Deductible)",
        type: "number",
        placeholder: "60000",
        defaultValue: "60000",
      },
      {
        name: "depreciation",
        label: "Depreciation Deduction",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "otherDeductions",
        label: "Other Deductions",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "Gross Unrelated Business Income", isCurrency: true },
      { label: "Total Deductions", isCurrency: true },
      { label: "Net Unrelated Business Income", isCurrency: true },
      { label: "Less Automatic Exemption ($1,000)", isCurrency: true },
      { label: "Taxable Income Subject to UBIT", isCurrency: true },
      { label: "UBIT Tax Owed (Trust Rates)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const grossBusinessIncome = Number(data.grossBusinessIncome) || 0;
      const businessExpenses = Number(data.businessExpenses) || 0;
      const depreciation = Number(data.depreciation) || 0;
      const otherDeductions = Number(data.otherDeductions) || 0;
      
      const totalDeductions = businessExpenses + depreciation + otherDeductions;
      const netIncome = grossBusinessIncome - totalDeductions;
      const afterExemption = Math.max(0, netIncome - 1000);
      
      let ubitTax = 0;
      if (afterExemption > 0) {
        if (afterExemption <= 3100) {
          ubitTax = afterExemption * 0.10;
        } else if (afterExemption <= 11150) {
          ubitTax = 310 + (afterExemption - 3100) * 0.24;
        } else if (afterExemption <= 15200) {
          ubitTax = 310 + 1932 + (afterExemption - 11150) * 0.35;
        } else {
          ubitTax = 310 + 1932 + 1417.50 + (afterExemption - 15200) * 0.37;
        }
      }

      return [
        { label: "Gross Unrelated Business Income", value: `${grossBusinessIncome.toFixed(2)}`, isCurrency: true },
        { label: "Total Deductions", value: `${totalDeductions.toFixed(2)}`, isCurrency: true },
        { label: "Net Unrelated Business Income", value: `${netIncome.toFixed(2)}`, isCurrency: true },
        { label: "Less Automatic Exemption ($1,000)", value: `${Math.min(netIncome, 1000).toFixed(2)}`, isCurrency: true },
        { label: "Taxable Income Subject to UBIT", value: `${afterExemption.toFixed(2)}`, isCurrency: true },
        { label: "UBIT Tax Owed (Trust Rates)", value: `${ubitTax.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
