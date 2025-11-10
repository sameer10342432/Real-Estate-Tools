import { CalculatorContent } from '@/types';

export const LIVE_FOR_FREE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Live for Free Calculator - House Hacking Strategy',
  description: 'Calculate how to live rent-free by house hacking and renting out extra space in your home',
  icon: 'Icon',
  slug: 'live-for-free-calculator',
  category: 'Rental & Income',
  article: {
    title: 'How to Live for Free Using House Hacking',
    content: `
    <h2>What is the "Live for Free" Strategy?</h2>
    <p>The "Live for Free" calculator helps you determine if you can eliminate your housing costs entirely through strategic house hacking. By purchasing a property and renting out extra bedrooms, basement suites, or accessory dwelling units (ADUs), you can offset your entire mortgage payment and potentially generate additional cash flow.</p>

    <h3>How Does Living for Free Work?</h3>
    <p>The concept is simple: buy a home with extra space, live in part of it, and rent out the rest. The rental income from your tenants covers your mortgage, taxes, insurance, and maintenance costs. With the right property and rental rates, you can achieve zero net housing costs or even positive cash flow.</p>

    <h3>Common Live-for-Free Strategies</h3>
    <ul>
      <li><strong>Rent-by-Room:</strong> Buy a single-family home with multiple bedrooms and rent out individual rooms to roommates or long-term tenants.</li>
      <li><strong>Basement Suite:</strong> Convert a finished basement into a separate rental unit with its own entrance, kitchen, and bathroom.</li>
      <li><strong>ADU/Granny Flat:</strong> Build or convert an accessory dwelling unit in your backyard and rent it out on a monthly or short-term basis.</li>
      <li><strong>Short-Term Rentals:</strong> Rent out spare rooms on platforms like Airbnb or VRBO when you're away or during peak travel seasons.</li>
    </ul>

    <h3>Benefits of Living for Free</h3>
    <ul>
      <li><strong>Zero Housing Costs:</strong> Eliminate your largest monthly expense and redirect that money toward savings, investments, or debt payoff.</li>
      <li><strong>Build Equity Fast:</strong> Your tenants help pay down your mortgage principal while you build wealth through appreciation.</li>
      <li><strong>Low-Risk Entry:</strong> Owner-occupied loans (FHA, VA, conventional) require lower down payments and offer better interest rates.</li>
      <li><strong>Tax Benefits:</strong> Deduct rental-related expenses like repairs, depreciation, and a portion of utilities.</li>
    </ul>

    <h3>Challenges to Consider</h3>
    <ul>
      <li><strong>Lack of Privacy:</strong> Living with tenants means sharing common spaces and dealing with noise or lifestyle differences.</li>
      <li><strong>Property Management:</strong> You're responsible for maintenance, tenant screening, rent collection, and conflict resolution.</li>
      <li><strong>Market Dependency:</strong> Success depends on strong rental demand and competitive rental rates in your area.</li>
      <li><strong>Zoning Restrictions:</strong> Some cities prohibit room rentals or ADUs, so verify local regulations before purchasing.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your property purchase price, financing details, estimated rental income from extra space, and operating expenses. The calculator will show your net monthly housing cost after rental income. A negative number means you're living for free with cash flow to spare!</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Home Purchase Price',
        type: 'number',
        defaultValue: 350000,
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
        label: 'Total Monthly Rental Income from Extra Space',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes',
        type: 'number',
        defaultValue: 4200,
      },
      {
        name: 'insurance',
        label: 'Annual Homeowners Insurance',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance & Repairs',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'utilities',
        label: 'Monthly Utilities (Your Portion)',
        type: 'number',
        defaultValue: 150,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, rentalIncome, propertyTaxes, insurance, maintenance, utilities } = values;
      
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
      
      const totalMonthlyExpenses = monthlyMortgagePayment + monthlyTaxes + monthlyInsurance + monthlyMaintenance + utilities;
      const netHousingCost = totalMonthlyExpenses - rentalIncome;
      const annualSavings = Math.abs(netHousingCost) * 12;
      
      const livingStatus = netHousingCost <= 0 ? 'YES - You are living for FREE!' : 'Not yet - Need more rental income';

      return [
        { label: 'Monthly Mortgage Payment (P&I)', value: monthlyMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Monthly Rental Income', value: rentalIncome.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Housing Cost', value: netHousingCost.toFixed(2), isCurrency: true },
        { label: 'Living for Free?', value: livingStatus },
        { label: 'Annual Savings/Profit', value: netHousingCost <= 0 ? annualSavings.toFixed(2) : '0', isCurrency: true },
      ];
    },
  },
};