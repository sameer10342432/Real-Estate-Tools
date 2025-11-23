import { CalculatorContent } from '@/types';

export const LOAN_CONSTANT_MORTGAGE_CONTENT: CalculatorContent = {
  title: 'Loan Constant Calculator (Mortgage)',
  description: 'Calculate the annual debt service as a percentage of the original loan amount to evaluate financing terms',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'loan-constant-mortgage',
  article: {
    title: "Understanding Loan Constant in Real Estate Finance",
    content: `
    <h2>Understanding Loan Constant in Real Estate Finance</h2>
    <p>The loan constant, also known as the mortgage constant, is the ratio of annual debt service to the original loan principal. It's a powerful metric for comparing financing options and analyzing leverage in real estate investments.</p>
    
    <h3>What is Loan Constant?</h3>
    <p>Loan Constant is calculated as:</p>
    <p><strong>Loan Constant = Annual Debt Service ÷ Original Loan Amount</strong></p>
    
    <p>Where Annual Debt Service = Total principal + interest payments for one year</p>
    
    <p>The result is expressed as a percentage. For example, a loan constant of 8% means you pay $8,000 per year for every $100,000 borrowed.</p>
    
    <h3>Why Loan Constant Matters</h3>
    <ul>
      <li><strong>Financing Comparison:</strong> Quickly compare different loan options (rates, terms, amortization)</li>
      <li><strong>Leverage Analysis:</strong> Determine if borrowing adds value to the investment</li>
      <li><strong>Cash Flow Forecasting:</strong> Easily calculate annual debt service requirements</li>
      <li><strong>Positive vs. Negative Leverage:</strong> Compare loan constant to cap rate to assess leverage benefit</li>
    </ul>
    
    <h3>Loan Constant vs. Interest Rate</h3>
    <p>Loan constant differs from interest rate because it includes both principal and interest:</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Loan Amount: $1,000,000</li>
      <li>Interest Rate: 6%</li>
      <li>Amortization: 25 years</li>
      <li>Annual Debt Service: $77,440</li>
      <li>Loan Constant: 77,440 ÷ 1,000,000 = 7.74%</li>
    </ul>
    
    <p>Notice the loan constant (7.74%) is higher than the interest rate (6%) because it includes principal paydown.</p>
    
    <h3>Typical Loan Constants (2024)</h3>
    <ul>
      <li><strong>30-Year Amortization @ 6%:</strong> ~7.2%</li>
      <li><strong>25-Year Amortization @ 6%:</strong> ~7.7%</li>
      <li><strong>20-Year Amortization @ 6%:</strong> ~8.6%</li>
      <li><strong>15-Year Amortization @ 6%:</strong> ~10.1%</li>
      <li><strong>Interest-Only @ 6%:</strong> 6.0%</li>
    </ul>
    
    <h3>Using Loan Constant for Leverage Analysis</h3>
    <p>Compare loan constant to property cap rate to determine leverage impact:</p>
    
    <p><strong>Positive Leverage (Good):</strong></p>
    <ul>
      <li>Cap Rate > Loan Constant</li>
      <li>Example: 8% cap rate > 7.2% loan constant</li>
      <li>Result: Borrowing increases cash-on-cash return</li>
    </ul>
    
    <p><strong>Neutral Leverage:</strong></p>
    <ul>
      <li>Cap Rate = Loan Constant</li>
      <li>Result: Borrowing doesn't change cash-on-cash return</li>
    </ul>
    
    <p><strong>Negative Leverage (Bad):</strong></p>
    <ul>
      <li>Cap Rate < Loan Constant</li>
      <li>Example: 6% cap rate < 7.2% loan constant</li>
      <li>Result: Borrowing reduces cash-on-cash return</li>
    </ul>
    
    <h3>Real-World Example</h3>
    <p><strong>Property Details:</strong></p>
    <ul>
      <li>Purchase Price: $2,000,000</li>
      <li>NOI: $140,000</li>
      <li>Cap Rate: 7% ($140,000 ÷ $2,000,000)</li>
    </ul>
    
    <p><strong>Financing Option 1:</strong></p>
    <ul>
      <li>Loan: $1,400,000 (70% LTV)</li>
      <li>Rate: 6%, 25-year amortization</li>
      <li>Loan Constant: 7.74%</li>
      <li>Annual Debt Service: $108,360</li>
      <li>Leverage: NEGATIVE (7% cap < 7.74% constant)</li>
    </ul>
    
    <p><strong>Financing Option 2:</strong></p>
    <ul>
      <li>Loan: $1,400,000 (70% LTV)</li>
      <li>Rate: 6%, 30-year amortization</li>
      <li>Loan Constant: 7.19%</li>
      <li>Annual Debt Service: $100,660</li>
      <li>Leverage: SLIGHTLY NEGATIVE (7% cap < 7.19% constant)</li>
    </ul>
    
    <p>In this scenario, the property would need higher NOI or lower loan amount to achieve positive leverage.</p>
    
    <h3>Factors Affecting Loan Constant</h3>
    <ul>
      <li><strong>Interest Rate:</strong> Higher rates increase loan constant</li>
      <li><strong>Amortization Period:</strong> Longer periods reduce loan constant</li>
      <li><strong>Loan Type:</strong> Interest-only has lowest constant; fully amortizing has higher constant</li>
      <li><strong>Payment Frequency:</strong> Monthly vs. annual (constant typically quoted annually)</li>
    </ul>
    
    <h3>When to Use Loan Constant</h3>
    <ul>
      <li><strong>Comparing Loan Options:</strong> Evaluate different combinations of rates and terms</li>
      <li><strong>Underwriting Analysis:</strong> Determine optimal leverage for maximum returns</li>
      <li><strong>Refinancing Decisions:</strong> Assess if new terms improve or worsen position</li>
      <li><strong>Portfolio Analysis:</strong> Compare debt service burden across multiple properties</li>
    </ul>
    
    <h3>Strategies to Lower Loan Constant</h3>
    <ul>
      <li><strong>Negotiate Lower Rate:</strong> Shop multiple lenders for best rate</li>
      <li><strong>Extend Amortization:</strong> 30-year vs. 20-year significantly reduces constant</li>
      <li><strong>Interest-Only Period:</strong> Temporarily reduces constant during value-add phase</li>
      <li><strong>Improve Property Performance:</strong> Higher NOI can qualify for better terms</li>
      <li><strong>Larger Down Payment:</strong> Stronger LTV can unlock better rates</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your loan amount, interest rate, and amortization period. The calculator determines your loan constant, helping you:</p>
    <ul>
      <li>Compare multiple financing scenarios side-by-side</li>
      <li>Evaluate if property cap rate supports positive leverage</li>
      <li>Calculate exact annual debt service obligations</li>
      <li>Optimize loan structure for maximum cash flow</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Loan Amount ($)",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        placeholder: "6.0",
        defaultValue: "6.0",
      },
      {
        name: "amortizationYears",
        label: "Amortization Period (Years)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "capRate",
        label: "Property Cap Rate (%) [Optional]",
        type: "number",
        placeholder: "7.5",
        defaultValue: "7.5",
      },
    ],
    results: [
      { label: "Loan Constant", isCurrency: false },
      { label: "Annual Debt Service", isCurrency: true },
      { label: "Monthly Payment", isCurrency: true },
      { label: "Total Interest Paid Over Life", isCurrency: true },
      { label: "Cap Rate (if provided)", isCurrency: false },
      { label: "Leverage Analysis", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanAmount = Number(data.loanAmount) || 0;
      const annualRate = Number(data.interestRate) / 100 || 0;
      const years = Number(data.amortizationYears) || 25;
      const capRate = Number(data.capRate) || 0;
      
      const monthlyRate = annualRate / 12;
      const numPayments = years * 12;
      
      // Calculate monthly payment using amortization formula
      const monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const annualDebtService = monthlyPayment * 12;
      const loanConstant = (annualDebtService / loanAmount) * 100;
      
      const totalPaid = monthlyPayment * numPayments;
      const totalInterest = totalPaid - loanAmount;
      
      let leverageAnalysis = "N/A - No cap rate provided";
      if (capRate > 0) {
        if (capRate > loanConstant + 1) {
          leverageAnalysis = "✅ Positive Leverage - Good Deal";
        } else if (capRate > loanConstant) {
          leverageAnalysis = "✓ Slightly Positive Leverage";
        } else if (Math.abs(capRate - loanConstant) < 0.5) {
          leverageAnalysis = "⚠️ Neutral Leverage";
        } else {
          leverageAnalysis = "❌ Negative Leverage - Caution";
        }
      }

      return [
        { label: "Loan Constant", value: `${loanConstant.toFixed(2)}%`, isCurrency: false },
        { label: "Annual Debt Service", value: annualDebtService.toFixed(2), isCurrency: true },
        { label: "Monthly Payment", value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: "Total Interest Over Life", value: totalInterest.toFixed(2), isCurrency: true },
        { label: "Property Cap Rate", value: capRate > 0 ? `${capRate.toFixed(2)}%` : "Not provided", isCurrency: false },
        { label: "Leverage Analysis", value: leverageAnalysis, isCurrency: false },
      ];
    },
  },
};
