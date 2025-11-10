import { CalculatorContent } from '@/types';

export const AIRBNB_INCOME_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Airbnb Income Estimator - Short-Term Rental Revenue Calculator',
  description: 'Estimate monthly and annual Airbnb rental income based on nightly rates and occupancy',
  icon: 'Icon',
  slug: 'airbnb-income-estimator',
  category: 'Rental & Income',
  article: {
    title: 'How to Estimate Airbnb Rental Income',
    content: `
    <h2>What is the Airbnb Income Estimator?</h2>
    <p>The Airbnb Income Estimator helps property owners and investors calculate potential monthly and annual revenue from short-term rentals on Airbnb. By factoring in nightly rates, occupancy rates, seasonal variations, and platform fees, this calculator provides realistic income projections for your property.</p>

    <h3>How Airbnb Income Works</h3>
    <p>Airbnb hosts earn income by renting out their property on a nightly or weekly basis. Unlike traditional long-term rentals with fixed monthly rent, Airbnb income fluctuates based on:</p>
    <ul>
      <li><strong>Nightly Rate:</strong> The price you charge per night, which varies by season, local events, and demand.</li>
      <li><strong>Occupancy Rate:</strong> The percentage of nights your property is booked (typically 50-80% in strong markets).</li>
      <li><strong>Cleaning Fees:</strong> One-time fees charged per booking to cover cleaning costs.</li>
      <li><strong>Platform Fees:</strong> Airbnb charges hosts 3-5% service fees per booking.</li>
    </ul>

    <h3>Factors That Affect Airbnb Income</h3>
    <ul>
      <li><strong>Location:</strong> Tourist destinations, business districts, and event venues command higher nightly rates and occupancy.</li>
      <li><strong>Property Type:</strong> Entire homes earn more than private rooms; unique properties (cabins, tiny homes) attract premium bookings.</li>
      <li><strong>Seasonality:</strong> High seasons (summer, holidays) deliver 2-3x higher rates than off-seasons.</li>
      <li><strong>Reviews & Ratings:</strong> Properties with 4.8+ star ratings achieve 20-30% higher occupancy rates.</li>
      <li><strong>Amenities:</strong> Pools, hot tubs, parking, WiFi, and pet-friendly policies increase nightly rates by 15-40%.</li>
    </ul>

    <h3>Maximizing Your Airbnb Income</h3>
    <ul>
      <li><strong>Dynamic Pricing:</strong> Use tools like PriceLabs or Wheelhouse to automatically adjust rates based on demand.</li>
      <li><strong>Professional Photos:</strong> High-quality photos increase bookings by 40% or more.</li>
      <li><strong>Instant Book:</strong> Enabling instant booking can boost occupancy by 10-15%.</li>
      <li><strong>Superhost Status:</strong> Achieve Superhost status to earn higher visibility and premium pricing power.</li>
      <li><strong>Length-of-Stay Discounts:</strong> Offer weekly (10-15%) and monthly (20-30%) discounts to attract longer stays.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your average nightly rate, estimated occupancy rate, average days booked per month, cleaning fee, and Airbnb service fee percentage. The calculator will show your gross monthly income, net income after fees, and projected annual revenue to help you evaluate profitability.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'nightlyRate',
        label: 'Average Nightly Rate',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'occupancyRate',
        label: 'Estimated Occupancy Rate (%)',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'cleaningFee',
        label: 'Cleaning Fee per Booking',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'avgStayLength',
        label: 'Average Guest Stay Length (Nights)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'airbnbFee',
        label: 'Airbnb Service Fee (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Operating Expenses (Optional)',
        type: 'number',
        defaultValue: 800,
      },
    ],
    results: [],
    calculate: (values) => {
      const { nightlyRate, occupancyRate, cleaningFee, avgStayLength, airbnbFee, monthlyExpenses } = values;
      
      const daysInMonth = 30;
      const occupiedNights = Math.round((daysInMonth * occupancyRate) / 100);
      const numberOfBookings = Math.round(occupiedNights / avgStayLength);
      
      const grossNightlyIncome = nightlyRate * occupiedNights;
      const totalCleaningFees = cleaningFee * numberOfBookings;
      const grossMonthlyIncome = grossNightlyIncome + totalCleaningFees;
      
      const platformFees = grossMonthlyIncome * (airbnbFee / 100);
      const netMonthlyIncome = grossMonthlyIncome - platformFees;
      const netMonthlyProfit = netMonthlyIncome - monthlyExpenses;
      
      const annualGrossIncome = grossMonthlyIncome * 12;
      const annualNetIncome = netMonthlyIncome * 12;
      const annualNetProfit = netMonthlyProfit * 12;

      return [
        { label: 'Occupied Nights per Month', value: occupiedNights.toString() },
        { label: 'Number of Bookings per Month', value: numberOfBookings.toString() },
        { label: 'Gross Monthly Income (Nightly + Cleaning)', value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Platform Fees (3%)', value: platformFees.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Income After Fees', value: netMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Profit (After Expenses)', value: netMonthlyProfit.toFixed(2), isCurrency: true },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Net Profit', value: annualNetProfit.toFixed(2), isCurrency: true },
      ];
    },
  },
};