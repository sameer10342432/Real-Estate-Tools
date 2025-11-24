import { CalculatorContent } from '@/types';

export const CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Co-op Debt-to-Income Calculator',
  description: 'Calculate debt-to-income ratio for co-op board approval and financing qualification',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'co-op-debt-to-income-calculator',
  article: {
    title: "Co-op Debt-to-Income Ratio Requirements",
    content: `
    <h2>Why DTI Matters for Co-op Purchases</h2>
    <p>Co-op boards typically have stricter debt-to-income (DTI) requirements than conventional mortgages. While traditional lenders may approve DTI ratios up to 43-50%, co-op boards often require DTI below 25-30% to ensure financial stability of shareholders.</p>
    
    <h3>How Co-op DTI is Calculated</h3>
    <p>DTI = (Total Monthly Debt Payments) / (Gross Monthly Income)</p>
    
    <p><strong>Monthly Debt Includes:</strong></p>
    <ul>
      <li><strong>Co-op Maintenance Fee:</strong> Monthly carrying charges</li>
      <li><strong>Mortgage Payment:</strong> Principal and interest (if financing)</li>
      <li><strong>Credit Card Minimums:</strong> Minimum monthly payments</li>
      <li><strong>Auto Loans:</strong> Car payment obligations</li>
      <li><strong>Student Loans:</strong> Monthly student loan payments</li>
      <li><strong>Personal Loans:</strong> Any other loan obligations</li>
      <li><strong>Alimony/Child Support:</strong> Court-ordered payments</li>
    </ul>
    
    <h3>Co-op Board DTI Standards</h3>
    <table>
      <tr>
        <th>DTI Ratio</th>
        <th>Board Perspective</th>
        <th>Approval Likelihood</th>
      </tr>
      <tr>
        <td>&lt;20%</td>
        <td>Excellent</td>
        <td>Very High</td>
      </tr>
      <tr>
        <td>20-25%</td>
        <td>Very Good</td>
        <td>High</td>
      </tr>
      <tr>
        <td>25-30%</td>
        <td>Acceptable</td>
        <td>Moderate</td>
      </tr>
      <tr>
        <td>30-35%</td>
        <td>Concerning</td>
        <td>Low</td>
      </tr>
      <tr>
        <td>&gt;35%</td>
        <td>Poor</td>
        <td>Very Low</td>
      </tr>
    </table>
    
    <h3>Co-op vs. Conventional Mortgage DTI</h3>
    <ul>
      <li><strong>Conventional Mortgage:</strong> Front-end 28%, back-end 36-43%</li>
      <li><strong>FHA Loans:</strong> Front-end 31%, back-end 43%</li>
      <li><strong>Co-op Boards:</strong> Total DTI typically 25-30% maximum</li>
      <li><strong>Luxury Co-ops:</strong> May require DTI below 20%</li>
    </ul>
    
    <h3>How to Improve Your DTI for Co-op Approval</h3>
    <ul>
      <li><strong>Pay Down Debt:</strong> Reduce credit card and loan balances</li>
      <li><strong>Increase Down Payment:</strong> Lower mortgage payment and DTI</li>
      <li><strong>Increase Income:</strong> Add co-borrower or additional income sources</li>
      <li><strong>Remove Debts:</strong> Pay off car loans or small debts before applying</li>
      <li><strong>Student Loan Deferment:</strong> Some boards don't count deferred loans</li>
      <li><strong>Choose Lower-Priced Unit:</strong> Lower maintenance fees help DTI</li>
    </ul>
    
    <h3>Special Considerations</h3>
    <ul>
      <li><strong>Bonus Income:</strong> Many boards average bonuses over 2-3 years</li>
      <li><strong>Commission Income:</strong> May be discounted or averaged</li>
      <li><strong>Self-Employment:</strong> Boards may apply higher scrutiny</li>
      <li><strong>Rental Income:</strong> Usually not counted or heavily discounted</li>
      <li><strong>Investment Income:</strong> Must be documented and stable</li>
    </ul>
    
    <h3>Board Package Preparation</h3>
    <p>When submitting financials to a co-op board, you'll need to provide comprehensive documentation including tax returns (2-3 years), pay stubs, bank statements, and detailed explanations of all income and debt. Accurate DTI calculation is crucial for determining your candidacy.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "grossMonthlyIncome",
        label: "Gross Monthly Income",
        type: "number",
        placeholder: "12500",
        defaultValue: "12500",
      },
      {
        name: "monthlyMortgage",
        label: "Monthly Mortgage Payment (P&I)",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "monthlyMaintenance",
        label: "Monthly Maintenance Fee",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "creditCardPayments",
        label: "Monthly Credit Card Minimums",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "autoLoan",
        label: "Monthly Auto Loan Payment",
        type: "number",
        placeholder: "450",
        defaultValue: "450",
      },
      {
        name: "studentLoan",
        label: "Monthly Student Loan Payment",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "otherDebts",
        label: "Other Monthly Debt Payments",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Total Monthly Debt Payments", isCurrency: true },
      { label: "Debt-to-Income Ratio (DTI)", isCurrency: false },
      { label: "Housing Expense Ratio", isCurrency: false },
      { label: "Co-op Board Assessment", isCurrency: false },
      { label: "Approval Likelihood", isCurrency: false },
      { label: "Maximum Monthly Payment Allowed (25% DTI)", isCurrency: true },
      { label: "Maximum Monthly Payment Allowed (30% DTI)", isCurrency: true },
      { label: "Recommended Action", isCurrency: false },
    ],
    calculate: (data: any) => {
      const grossMonthlyIncome = Number(data.grossMonthlyIncome) || 0;
      const monthlyMortgage = Number(data.monthlyMortgage) || 0;
      const monthlyMaintenance = Number(data.monthlyMaintenance) || 0;
      const creditCardPayments = Number(data.creditCardPayments) || 0;
      const autoLoan = Number(data.autoLoan) || 0;
      const studentLoan = Number(data.studentLoan) || 0;
      const otherDebts = Number(data.otherDebts) || 0;

      const housingExpense = monthlyMortgage + monthlyMaintenance;
      const totalMonthlyDebt = housingExpense + creditCardPayments + autoLoan + studentLoan + otherDebts;
      
      const dti = grossMonthlyIncome > 0 ? (totalMonthlyDebt / grossMonthlyIncome) * 100 : 0;
      const housingRatio = grossMonthlyIncome > 0 ? (housingExpense / grossMonthlyIncome) * 100 : 0;
      
      let boardAssessment = "Excellent (<20%)";
      let approvalLikelihood = "Very High";
      let recommendedAction = "Strong Application - Proceed with Confidence";
      
      if (dti > 35) {
        boardAssessment = "Poor (>35%)";
        approvalLikelihood = "Very Low - Likely Rejection";
        recommendedAction = "Significantly Improve DTI Before Applying";
      } else if (dti > 30) {
        boardAssessment = "Concerning (30-35%)";
        approvalLikelihood = "Low";
        recommendedAction = "Pay Down Debt or Increase Down Payment";
      } else if (dti > 25) {
        boardAssessment = "Acceptable (25-30%)";
        approvalLikelihood = "Moderate";
        recommendedAction = "Consider Minor Debt Reduction";
      } else if (dti > 20) {
        boardAssessment = "Very Good (20-25%)";
        approvalLikelihood = "High";
        recommendedAction = "Good Position - Minor Improvements Helpful";
      }
      
      const maxPayment25 = grossMonthlyIncome * 0.25;
      const maxPayment30 = grossMonthlyIncome * 0.30;

      return [
        { label: "Total Monthly Debt Payments", value: `${totalMonthlyDebt.toFixed(2)}`, isCurrency: true },
        { label: "Debt-to-Income Ratio (DTI)", value: `${dti.toFixed(2)}%`, isCurrency: false },
        { label: "Housing Expense Ratio", value: `${housingRatio.toFixed(2)}%`, isCurrency: false },
        { label: "Co-op Board Assessment", value: boardAssessment, isCurrency: false },
        { label: "Approval Likelihood", value: approvalLikelihood, isCurrency: false },
        { label: "Maximum Monthly Payment Allowed (25% DTI)", value: `${maxPayment25.toFixed(2)}`, isCurrency: true },
        { label: "Maximum Monthly Payment Allowed (30% DTI)", value: `${maxPayment30.toFixed(2)}`, isCurrency: true },
        { label: "Recommended Action", value: recommendedAction, isCurrency: false },
      ];
    },
  },
};
