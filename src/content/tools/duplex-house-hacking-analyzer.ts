import { CalculatorContent } from '@/types';

export const DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Duplex House Hacking Analyzer - 2-Unit Investment Calculator',
  description: 'Analyze duplex house hacking opportunities - live in one unit, rent the other and reduce housing costs',
  icon: 'Icon',
  slug: 'duplex-house-hacking-analyzer',
  category: 'Rental & Income',
  article: {
    title: 'Duplex House Hacking Strategy Guide',
    content: `
    <h2>What is Duplex House Hacking?</h2>
    <p>Duplex house hacking involves purchasing a two-unit property, living in one unit as your primary residence, and renting out the other unit to a tenant. This strategy allows you to leverage owner-occupied financing (lower down payments and better rates) while generating rental income to offset your housing costs.</p>

    <h3>Why Choose a Duplex?</h3>
    <p>Duplexes are the perfect entry point for house hacking because they offer:</p>
    <ul>
      <li><strong>Separate Living Spaces:</strong> Each unit has its own entrance, kitchen, and utilities, providing privacy for both you and your tenant.</li>
      <li><strong>Easy Financing:</strong> Qualify for FHA loans with as little as 3.5% down or conventional loans with 5-15% down.</li>
      <li><strong>Simple Management:</strong> Managing one tenant is much easier than managing multiple units or roommates.</li>
      <li><strong>Future Flexibility:</strong> Once you move out, you can rent both units and turn the property into a full-time investment.</li>
    </ul>

    <h3>Duplex House Hacking Benefits</h3>
    <ul>
      <li><strong>Lower Housing Costs:</strong> The rent from your tenant can cover 50-100% of your mortgage payment.</li>
      <li><strong>Build Equity While Living There:</strong> Your tenant helps pay down your mortgage while you live in the property.</li>
      <li><strong>Learn Real Estate Investing:</strong> Gain hands-on landlord experience with minimal risk since you're on-site.</li>
      <li><strong>Tax Advantages:</strong> Deduct 50% of property expenses (taxes, insurance, repairs) as rental expenses.</li>
    </ul>

    <h3>Key Considerations</h3>
    <ul>
      <li><strong>Property Condition:</strong> Inspect both units thoroughly—deferred maintenance can eat into your profits.</li>
      <li><strong>Location Matters:</strong> Choose neighborhoods with strong rental demand and appreciation potential.</li>
      <li><strong>Tenant Screening:</strong> Living next door to your tenant makes screening even more important.</li>
      <li><strong>Zoning Compliance:</strong> Verify the property is legally zoned as a duplex and both units are permitted.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the purchase price, financing details, expected rental income from the second unit, and operating expenses for the entire property. The calculator will show your net housing cost after rental income and help you determine if the duplex is a profitable house hacking opportunity.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Duplex Purchase Price',
        type: 'number',
        defaultValue: 450000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 5,
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
        defaultValue: 30,
      },
      {
        name: 'rentalIncome',
        label: 'Monthly Rent from Unit 2',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes (Both Units)',
        type: 'number',
        defaultValue: 5400,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance (Both Units)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance & Repairs',
        type: 'number',
        defaultValue: 2400,
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
      const { purchasePrice, downPayment, interestRate, loanTerm, rentalIncome, propertyTaxes, insurance, maintenance, utilities, vacancyRate } = values;
      
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
      
      const effectiveRentalIncome = rentalIncome * (1 - vacancyRate / 100);
      const totalMonthlyExpenses = monthlyMortgagePayment + monthlyTaxes + monthlyInsurance + monthlyMaintenance + utilities;
      const netHousingCost = totalMonthlyExpenses - effectiveRentalIncome;
      const percentageCovered = (effectiveRentalIncome / totalMonthlyExpenses) * 100;
      const annualCashFlow = (effectiveRentalIncome - netHousingCost) * 12;

      return [
        { label: 'Monthly Mortgage Payment (P&I)', value: monthlyMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Effective Monthly Rental Income', value: effectiveRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Your Net Monthly Housing Cost', value: netHousingCost.toFixed(2), isCurrency: true },
        { label: 'Percentage of Expenses Covered', value: percentageCovered.toFixed(1) + '%' },
        { label: 'Annual Cash Flow/Savings', value: netHousingCost <= 0 ? annualCashFlow.toFixed(2) : '0', isCurrency: true },
      ];
    },
  },
};