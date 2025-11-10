import { CalculatorContent } from '@/types';

export const HOUSE_HACKING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'House Hacking Calculator',
  description: 'See how much you can save by house hacking. Calculate your net monthly housing cost.',
  icon: 'Icon',
  slug: 'house-hacking-calculator',
  category: 'Rental & Income',
  article: {
    title: 'What is House Hacking?',
    content: `
    <h2>What is House Hacking?</h2>
    <p>House hacking is a real estate investment strategy where you purchase a multi-unit property, live in one unit, and rent out the others. The goal is to have the rental income from the other units cover your entire mortgage payment, allowing you to live for free or even generate positive cash flow. This calculator will help you analyze a potential house hacking deal.</p>

    <h3>What is House Hacking?</h3>
    <p>The most common form of house hacking involves buying a duplex, triplex, or fourplex. You occupy one unit as your primary residence and rent out the remaining units to tenants. The rental income helps you pay down your mortgage and build equity faster.</p>

    <h3>Benefits of House Hacking</h3>
    <ul>
      <li><strong>Reduced Housing Costs:</strong> The rental income can significantly reduce or even eliminate your monthly housing expenses.</li>
      <li><strong>Low Down Payment:</strong> Because you are occupying the property as your primary residence, you can often qualify for loans with low down payments, such as an FHA loan (3.5% down).</li>
      <li><strong>Build Equity Faster:</strong> With your tenants helping you pay down your mortgage, you will build equity in the property more quickly.</li>
      <li><strong>Gain Landlord Experience:</strong> House hacking is a great way to learn the ropes of being a landlord with a lower level of risk.</li>
    </ul>

    <h3>Challenges of House Hacking</h3>
    <ul>
      <li><strong>Being a Landlord:</strong> You will be responsible for finding tenants, collecting rent, and handling maintenance issues.</li>
      <li><strong>Living Next to Tenants:</strong> You will be living in close proximity to your tenants, which can sometimes lead to challenges.</li>
      <li><strong>Finding the Right Property:</strong> It can be difficult to find a suitable multi-unit property in a good location.</li>
    </ul>

    <h3>How to Use the House Hacking Calculator</h3>
    <p>This calculator will help you determine the financial viability of a house hacking opportunity. You will need to provide information about:</p>
    <ul>
      <li>The purchase price of the property.</li>
      <li>Your financing details (down payment, interest rate, loan term).</li>
      <li>The estimated rental income from the other units.</li>
      <li>The estimated operating expenses for the property.</li>
    </ul>
    <p>The calculator will then show you your total monthly housing cost after factoring in the rental income. This will help you see if the property will allow you to live for free or even generate positive cash flow.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'rentalIncome',
        label: 'Monthly Rental Income from Other Units',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, rentalIncome, propertyTaxes, insurance, maintenance } = values;
      const downPaymentAmount = purchasePrice * (downPayment / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyMortgagePayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const monthlyTaxes = propertyTaxes / 12;
      const monthlyInsurance = insurance / 12;
      const monthlyMaintenance = maintenance / 12;
      const totalMonthlyExpenses = monthlyMortgagePayment + monthlyTaxes + monthlyInsurance + monthlyMaintenance;
      const netHousingCost = totalMonthlyExpenses - rentalIncome;

      return [
        { label: 'Total Monthly Mortgage Payment (P&I)', value: monthlyMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Your Net Monthly Housing Cost', value: netHousingCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};