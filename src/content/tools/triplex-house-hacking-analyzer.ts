import { CalculatorContent } from '@/types';

export const TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Triplex House Hacking Analyzer - 3-Unit Investment Calculator',
  description: 'Analyze triplex house hacking deals - live in one unit, rent two others for maximum cash flow',
  icon: 'Icon',
  slug: 'triplex-house-hacking-analyzer',
  category: 'Rental & Income',
  article: {
    title: 'Triplex House Hacking Strategy Guide',
    content: `
    <h2>What is Triplex House Hacking?</h2>
    <p>Triplex house hacking involves purchasing a three-unit property, living in one unit, and renting out the other two units. With two rental incomes instead of one, triplexes offer significantly higher cash flow potential compared to duplexes, often allowing you to live completely rent-free while generating positive monthly income.</p>

    <h3>Why Choose a Triplex?</h3>
    <p>Triplexes provide the sweet spot between manageable property size and maximum rental income:</p>
    <ul>
      <li><strong>Double Rental Income:</strong> Two rental units mean twice the income compared to a duplex, dramatically reducing or eliminating your housing costs.</li>
      <li><strong>Still Qualifies for Owner-Occupied Loans:</strong> FHA and conventional loans allow up to 4 units, so you can still use low down payment financing.</li>
      <li><strong>Higher Cash Flow Potential:</strong> Many triplex house hackers achieve positive cash flow, turning their home into a profit center.</li>
      <li><strong>Economies of Scale:</strong> Shared roof, foundation, and utilities mean lower per-unit maintenance costs.</li>
    </ul>

    <h3>Triplex House Hacking Benefits</h3>
    <ul>
      <li><strong>Live for Free (Plus Extra Income):</strong> Two rental incomes can cover 100% of expenses and generate surplus cash flow.</li>
      <li><strong>Faster Equity Building:</strong> More rental income means faster mortgage paydown and wealth accumulation.</li>
      <li><strong>Portfolio Diversification:</strong> Two tenants reduce vacancy risk—if one moves out, the other still covers most expenses.</li>
      <li><strong>Tax Benefits:</strong> Deduct 2/3 of property expenses (taxes, insurance, repairs, depreciation) as rental expenses.</li>
    </ul>

    <h3>Challenges of Triplex House Hacking</h3>
    <ul>
      <li><strong>Higher Purchase Price:</strong> Triplexes cost more upfront than single-family homes or duplexes.</li>
      <li><strong>More Management:</strong> Two tenants mean double the screening, rent collection, and maintenance requests.</li>
      <li><strong>Availability:</strong> Triplexes are less common than duplexes, especially in suburban markets.</li>
      <li><strong>Financing Complexity:</strong> Lenders require higher reserves and stricter underwriting for 3-4 unit properties.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the triplex purchase price, financing details, expected rental income from both rental units, and total operating expenses. The calculator accounts for vacancy, shows your net housing cost, and calculates annual cash flow to help you evaluate the investment potential.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Triplex Purchase Price',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7,
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
        defaultValue: 1500,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes (All Units)',
        type: 'number',
        defaultValue: 7200,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance (All Units)',
        type: 'number',
        defaultValue: 2400,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance & Repairs',
        type: 'number',
        defaultValue: 3600,
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
      const { purchasePrice, downPayment, interestRate, loanTerm, rentalIncomeUnit2, rentalIncomeUnit3, propertyTaxes, insurance, maintenance, utilities, vacancyRate } = values;
      
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
      
      const totalRentalIncome = rentalIncomeUnit2 + rentalIncomeUnit3;
      const effectiveRentalIncome = totalRentalIncome * (1 - vacancyRate / 100);
      const totalMonthlyExpenses = monthlyMortgagePayment + monthlyTaxes + monthlyInsurance + monthlyMaintenance + utilities;
      const netHousingCost = totalMonthlyExpenses - effectiveRentalIncome;
      const percentageCovered = (effectiveRentalIncome / totalMonthlyExpenses) * 100;
      const annualCashFlow = Math.abs(netHousingCost) * 12;

      return [
        { label: 'Monthly Mortgage Payment (P&I)', value: monthlyMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Combined Rental Income (Before Vacancy)', value: totalRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Effective Monthly Rental Income', value: effectiveRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Your Net Monthly Housing Cost', value: netHousingCost.toFixed(2), isCurrency: true },
        { label: 'Percentage of Expenses Covered', value: percentageCovered.toFixed(1) + '%' },
        { label: 'Annual Cash Flow/Savings', value: netHousingCost <= 0 ? annualCashFlow.toFixed(2) : '-' + annualCashFlow.toFixed(2), isCurrency: true },
      ];
    },
  },
};