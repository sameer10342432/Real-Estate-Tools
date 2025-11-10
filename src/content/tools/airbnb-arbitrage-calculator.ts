import { CalculatorContent } from '@/types';

export const AIRBNB_ARBITRAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Airbnb Arbitrage Calculator - Rental Arbitrage Profit Calculator',
  description: 'Calculate Airbnb arbitrage profits by subletting long-term rentals as short-term rentals',
  icon: 'Icon',
  slug: 'airbnb-arbitrage-calculator',
  category: 'Rental & Income',
  article: {
    title: 'Airbnb Arbitrage: How to Profit Without Owning Property',
    content: `
    <h2>What is Airbnb Arbitrage?</h2>
    <p>Airbnb arbitrage (also called rental arbitrage) is a real estate strategy where you rent a property long-term from a landlord, then sublet it short-term on Airbnb or VRBO for a profit. This allows you to generate income from real estate without purchasing property, making it accessible to anyone with good credit and startup capital.</p>

    <h3>How Airbnb Arbitrage Works</h3>
    <p>The arbitrage model is straightforward:</p>
    <ol>
      <li><strong>Find a Landlord:</strong> Locate a property owner willing to allow short-term subletting (requires explicit written permission).</li>
      <li><strong>Sign a Lease:</strong> Rent the property on a traditional 12-month lease, paying market-rate monthly rent.</li>
      <li><strong>Furnish & List:</strong> Furnish the unit, photograph it professionally, and list it on Airbnb, VRBO, and other STR platforms.</li>
      <li><strong>Earn the Spread:</strong> Your profit is the difference between your STR income and your monthly rent + operating expenses.</li>
    </ol>

    <h3>Benefits of Rental Arbitrage</h3>
    <ul>
      <li><strong>No Property Ownership Required:</strong> Start with $5,000-$15,000 instead of a $50,000+ down payment.</li>
      <li><strong>Scalable:</strong> Once profitable, replicate the model across multiple properties to build a portfolio.</li>
      <li><strong>Lower Risk:</strong> If the market changes, you can simply not renew the lease rather than selling property.</li>
      <li><strong>Faster ROI:</strong> Some arbitrage operators achieve 100-200% annual returns on invested capital.</li>
      <li><strong>Location Flexibility:</strong> Operate anywhere with strong STR demand—even in multiple cities.</li>
    </ul>

    <h3>Challenges of Airbnb Arbitrage</h3>
    <ul>
      <li><strong>Landlord Approval:</strong> Most landlords reject arbitrage proposals due to liability concerns or lease violations.</li>
      <li><strong>Regulatory Risk:</strong> Many cities ban STRs or require owner-occupied permits, making arbitrage illegal.</li>
      <li><strong>Lease Liability:</strong> You're responsible for the full lease term even if STR income drops or regulations change.</li>
      <li><strong>Upfront Costs:</strong> Furniture, supplies, first/last month's rent, and security deposit require $10,000-$20,000 per unit.</li>
      <li><strong>Management Intensive:</strong> Arbitrage requires hands-on guest communication, cleaning coordination, and maintenance.</li>
    </ul>

    <h3>Key Success Factors</h3>
    <ul>
      <li><strong>Written Landlord Permission:</strong> Never sublet without explicit written permission in your lease—oral agreements are not enforceable.</li>
      <li><strong>High-Demand Locations:</strong> Focus on tourist destinations, business districts, or event-driven markets with 65%+ occupancy potential.</li>
      <li><strong>Competitive Pricing:</strong> You need to undercut hotels while maintaining margins—research comps thoroughly.</li>
      <li><strong>Professional Setup:</strong> Invest in quality furniture, decor, and photography to achieve premium bookings and 5-star reviews.</li>
      <li><strong>Master Lease Strategy:</strong> Negotiate long-term leases (2-3 years) at fixed rates to protect against rent increases.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your monthly rent, Airbnb nightly rate, occupancy rate estimate, and operating expenses (cleaning, supplies, utilities, platform fees). The calculator will show your monthly profit, annual return on investment, and breakeven occupancy rate to help you evaluate the deal.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'monthlyRent',
        label: 'Monthly Rent Paid to Landlord',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'securityDeposit',
        label: 'Security Deposit (One-Time)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'furnitureCost',
        label: 'Furniture & Setup Costs (One-Time)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'nightlyRate',
        label: 'Average Airbnb Nightly Rate',
        type: 'number',
        defaultValue: 120,
      },
      {
        name: 'occupancyRate',
        label: 'Estimated Occupancy Rate (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'cleaningFeePerStay',
        label: 'Cleaning Fee per Stay',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'avgStayLength',
        label: 'Average Guest Stay (Nights)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'monthlyUtilities',
        label: 'Monthly Utilities (WiFi, Electric, etc.)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'monthlySupplies',
        label: 'Monthly Supplies (Toiletries, Linens, etc.)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'platformFeePercent',
        label: 'Platform Fee (%)',
        type: 'number',
        defaultValue: 3,
      },
    ],
    results: [],
    calculate: (values) => {
      const { monthlyRent, securityDeposit, furnitureCost, nightlyRate, occupancyRate, cleaningFeePerStay, avgStayLength, monthlyUtilities, monthlySupplies, platformFeePercent } = values;
      
      // Income calculations
      const occupiedNights = (30 * occupancyRate) / 100;
      const numberOfBookings = Math.round(occupiedNights / avgStayLength);
      const grossNightlyIncome = nightlyRate * occupiedNights;
      const totalCleaningFees = cleaningFeePerStay * numberOfBookings;
      const grossMonthlyIncome = grossNightlyIncome + totalCleaningFees;
      const platformFees = grossMonthlyIncome * (platformFeePercent / 100);
      
      // Expense calculations
      const totalMonthlyExpenses = monthlyRent + monthlyUtilities + monthlySupplies + platformFees;
      const netMonthlyProfit = grossMonthlyIncome - totalMonthlyExpenses;
      const annualProfit = netMonthlyProfit * 12;
      
      // ROI calculation
      const totalUpfrontInvestment = securityDeposit + furnitureCost + monthlyRent; // First month + deposit + furniture
      const roi = (annualProfit / totalUpfrontInvestment) * 100;
      const monthsToBreakeven = totalUpfrontInvestment / netMonthlyProfit;
      
      // Breakeven occupancy
      const breakEvenOccupancy = ((monthlyRent + monthlyUtilities + monthlySupplies) / (nightlyRate * 30)) * 100;
      
      const profitMargin = (netMonthlyProfit / grossMonthlyIncome) * 100;

      return [
        { label: 'Gross Monthly Income (STR)', value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Platform Fees', value: platformFees.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Expenses', value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Profit', value: netMonthlyProfit.toFixed(2), isCurrency: true },
        { label: 'Annual Profit', value: annualProfit.toFixed(2), isCurrency: true },
        { label: 'Total Upfront Investment', value: totalUpfrontInvestment.toFixed(2), isCurrency: true },
        { label: 'Annual ROI', value: roi.toFixed(1) + '%' },
        { label: 'Months to Break Even', value: monthsToBreakeven.toFixed(1) },
        { label: 'Breakeven Occupancy Rate', value: breakEvenOccupancy.toFixed(1) + '%' },
        { label: 'Profit Margin', value: profitMargin.toFixed(1) + '%' },
      ];
    },
  },
};