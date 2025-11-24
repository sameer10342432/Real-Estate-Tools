import { CalculatorContent } from '@/types';

export const DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commercial Debt Yield Calculator - Calculate Lender Risk Metrics',
  description: 'Calculate the debt yield for commercial real estate investments. Essential metric for commercial lenders to assess loan risk and property performance independent of interest rates.',
  slug: 'debt-yield-commercial-calculator',
  icon: 'Icon',
  category: 'Commercial',
  article: {
    title: 'Understanding Commercial Debt Yield for Real Estate Investments',
    content: `
    <h2>What is Debt Yield in Commercial Real Estate?</h2>
    <p>Debt yield is a crucial metric used by commercial real estate lenders to evaluate the risk of a loan. Unlike other metrics such as LTV (Loan-to-Value) or DSCR (Debt Service Coverage Ratio), debt yield is independent of interest rates, amortization periods, and property value fluctuations.</p>
    
    <p>The debt yield represents the return a lender would receive if they had to take possession of the property and operate it. It's calculated by dividing the property's Net Operating Income (NOI) by the total loan amount.</p>

    <h3>Why is Debt Yield Important?</h3>
    <p>Commercial lenders use debt yield as a key underwriting metric because:</p>
    <ul>
      <li><strong>Market Independent:</strong> Unlike LTV, debt yield doesn't depend on property valuations which can fluctuate</li>
      <li><strong>Rate Independent:</strong> Unlike DSCR, it's not affected by interest rate changes</li>
      <li><strong>Risk Assessment:</strong> Provides a clear picture of the property's ability to cover the loan</li>
      <li><strong>Quick Screening:</strong> Allows lenders to quickly assess if a deal meets their minimum requirements</li>
    </ul>

    <h3>How to Calculate Debt Yield</h3>
    <p>The formula for debt yield is straightforward:</p>
    <p><strong>Debt Yield = Net Operating Income (NOI) / Total Loan Amount × 100</strong></p>
    
    <p>For example, if a property generates $150,000 in NOI and the loan amount is $1,500,000:</p>
    <p>Debt Yield = $150,000 / $1,500,000 × 100 = 10%</p>

    <h3>What is a Good Debt Yield?</h3>
    <p>Most commercial lenders look for minimum debt yields between 8% and 12%, depending on:</p>
    <ul>
      <li><strong>Property Type:</strong> Multifamily might require 8-10%, while office or retail might need 10-12%</li>
      <li><strong>Market Conditions:</strong> Stronger markets may accept lower debt yields</li>
      <li><strong>Property Quality:</strong> Class A properties may have lower requirements than Class B or C</li>
      <li><strong>Tenant Credit:</strong> Strong credit tenants allow for lower debt yield requirements</li>
    </ul>

    <h3>Debt Yield vs Other Metrics</h3>
    <p><strong>Debt Yield vs DSCR:</strong> DSCR considers debt service (principal and interest payments), while debt yield only looks at the relationship between NOI and loan amount.</p>
    <p><strong>Debt Yield vs LTV:</strong> LTV is based on property value, which can be subjective. Debt yield focuses on actual income generation.</p>

    <h3>Using This Calculator</h3>
    <p>Enter your property's Net Operating Income (annual income after operating expenses) and the total loan amount. The calculator will compute the debt yield percentage and provide guidance on whether it meets typical lender requirements.</p>
    
    <p>This calculator also shows additional metrics including annual debt service coverage and the property's cash flow position to give you a complete picture of the investment's financial health.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'netOperatingIncome',
        label: 'Net Operating Income (NOI) - Annual',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'totalLoanAmount',
        label: 'Total Loan Amount',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    calculate: (values) => {
      const { netOperatingIncome, totalLoanAmount, interestRate, loanTerm } = values;
      
      // Calculate Debt Yield
      const debtYield = (netOperatingIncome / totalLoanAmount) * 100;
      
      // Calculate Annual Debt Service
      const monthlyRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const annualDebtService = monthlyPayment * 12;
      
      // Calculate DSCR for comparison
      const dscr = netOperatingIncome / annualDebtService;
      
      // Cash Flow After Debt Service
      const cashFlow = netOperatingIncome - annualDebtService;
      
      // Risk Assessment
      let riskLevel = '';
      if (debtYield >= 12) {
        riskLevel = 'Low Risk - Excellent';
      } else if (debtYield >= 10) {
        riskLevel = 'Low-Medium Risk - Strong';
      } else if (debtYield >= 8) {
        riskLevel = 'Medium Risk - Acceptable';
      } else {
        riskLevel = 'High Risk - Below Standards';
      }

      return [
        { label: 'Debt Yield', value: debtYield.toFixed(2) + '%' },
        { label: 'Risk Assessment', value: riskLevel },
        { label: 'Annual Debt Service', value: '$' + annualDebtService.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'DSCR (For Comparison)', value: dscr.toFixed(2) + 'x' },
        { label: 'Annual Cash Flow', value: '$' + cashFlow.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
    },
  },
};