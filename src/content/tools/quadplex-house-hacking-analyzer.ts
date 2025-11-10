import { CalculatorContent } from '@/types';

export const QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Quadplex House Hacking Analyzer - 4-Unit Investment Calculator',
  description: 'Analyze fourplex house hacking opportunities - maximize cash flow with 3 rental units',
  icon: 'Icon',
  slug: 'quadplex-house-hacking-analyzer',
  category: 'Rental & Income',
  article: {
    title: 'Quadplex (Fourplex) House Hacking Strategy Guide',
    content: `
    <h2>What is Quadplex House Hacking?</h2>
    <p>Quadplex house hacking is the most aggressive form of residential house hacking. You purchase a four-unit property, live in one unit, and rent out the other three. With three rental incomes, quadplexes offer the highest cash flow potential of any owner-occupied property while still qualifying for low down payment residential financing.</p>

    <h3>Why Choose a Quadplex (Fourplex)?</h3>
    <p>Fourplexes represent the maximum number of units you can finance with owner-occupied residential loans (FHA, VA, conventional), making them the ultimate house hacking property:</p>
    <ul>
      <li><strong>Maximum Rental Income:</strong> Three rental units generate significant monthly cash flow—most fourplex house hackers live completely free with profit left over.</li>
      <li><strong>Still Qualifies for Residential Financing:</strong> FHA loans allow as little as 3.5% down on properties up to 4 units.</li>
      <li><strong>Forced Appreciation:</strong> Increase rents and reduce expenses to boost property value (commercial multifamily valuation is based on NOI).</li>
      <li><strong>Business Scale with Residential Simplicity:</strong> Manage a small portfolio without needing commercial financing or 20-25% down payments.</li>
    </ul>

    <h3>Quadplex House Hacking Benefits</h3>
    <ul>
      <li><strong>Highest Cash Flow Potential:</strong> Three rental incomes typically exceed all expenses, creating immediate monthly profit.</li>
      <li><strong>Accelerated Equity Building:</strong> Massive rental income pays down your mortgage aggressively while building equity.</li>
      <li><strong>Portfolio Foundation:</strong> After moving out, convert to a full-time investment property with 4 income-producing units.</li>
      <li><strong>Tax Advantages:</strong> Deduct 75% of property expenses (taxes, insurance, repairs, depreciation) as rental business expenses.</li>
      <li><strong>Risk Mitigation:</strong> Three tenants diversify vacancy risk—losing one tenant still leaves you with two income streams.</li>
    </ul>

    <h3>Challenges of Quadplex House Hacking</h3>
    <ul>
      <li><strong>High Purchase Price:</strong> Fourplexes are expensive and require significant cash reserves for lender approval.</li>
      <li><strong>Management Intensity:</strong> Three tenants mean triple the screening, maintenance, and rent collection responsibilities.</li>
      <li><strong>Limited Availability:</strong> Fourplexes are rare in most markets, especially in desirable neighborhoods.</li>
      <li><strong>Stricter Underwriting:</strong> Lenders scrutinize 3-4 unit properties more heavily and may require 6+ months of reserves.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the fourplex purchase price, financing terms, expected rental income from all three rental units, and total operating expenses. The calculator shows your net housing cost, percentage of expenses covered by rent, and projected annual cash flow to evaluate the investment.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Fourplex Purchase Price',
        type: 'number',
        defaultValue: 800000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.25,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'rentalIncomeUnit2',
        label: 'Monthly Rent from Unit 2',
        type: 'number',
        defaultValue: 1600,
      },
      {
        name: 'rentalIncomeUnit3',
        label: 'Monthly Rent from Unit 3',
        type: 'number',
        defaultValue: 1550,
      },
      {
        name: 'rentalIncomeUnit4',
        label: 'Monthly Rent from Unit 4',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes (All Units)',
        type: 'number',
        defaultValue: 9600,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance (All Units)',
        type: 'number',
        defaultValue: 3200,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance & Repairs',
        type: 'number',
        defaultValue: 4800,
      },
      {
        name: 'utilities',
        label: 'Monthly Utilities (Your Unit Only)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, rentalIncomeUnit2, rentalIncomeUnit3, rentalIncomeUnit4, propertyTaxes, insurance, maintenance, utilities, vacancyRate } = values;
      
      const downPaymentAmount = purchasePrice * (downPayment / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyMortgagePayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const monthlyTaxes = propertyTaxes / 12;
      const monthlyInsurance = insurance / 12;
      const monthlyMaintenance = maintenance / 12;
      
      const totalRentalIncome = rentalIncomeUnit2 + rentalIncomeUnit3 + rentalIncomeUnit4;
      const effectiveRentalIncome = totalRentalIncome * (1 - vacancyRate / 100);
      const totalMonthlyExpenses = monthlyMortgagePayment + monthlyTaxes + monthlyInsurance + monthlyMaintenance + utilities;
      const netHousingCost = totalMonthlyExpenses - effectiveRentalIncome;
      const percentageCovered = (effectiveRentalIncome / totalMonthlyExpenses) * 100;
      const annualCashFlow = Math.abs(netHousingCost) * 12;
      const cashOnCashReturn = ((Math.abs(netHousingCost) * 12) / downPaymentAmount) * 100;

      return [
        { label: 'Monthly Mortgage Payment (P&I)', value: monthlyMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Combined Rental Income (Before Vacancy)', value: totalRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Effective Monthly Rental Income', value: effectiveRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Your Net Monthly Housing Cost', value: netHousingCost.toFixed(2), isCurrency: true },
        { label: 'Percentage of Expenses Covered', value: percentageCovered.toFixed(1) + '%' },
        { label: 'Annual Cash Flow/Savings', value: netHousingCost <= 0 ? annualCashFlow.toFixed(2) : '-' + annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Return', value: cashOnCashReturn.toFixed(2) + '%' },
      ];
    },
  },
};