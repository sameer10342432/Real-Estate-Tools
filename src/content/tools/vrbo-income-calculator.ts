import { CalculatorContent } from '@/types';

export const VRBO_INCOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VRBO Income Calculator - Vacation Rental Revenue Estimator',
  description: 'Calculate VRBO rental income with nightly rates, occupancy, and commission fees',
  icon: 'Icon',
  slug: 'vrbo-income-calculator',
  category: 'Rental & Income',
  article: {
    title: 'VRBO Income Calculator Guide',
    content: `
    <h2>What is the VRBO Income Calculator?</h2>
    <p>The VRBO (Vacation Rentals By Owner) Income Calculator helps hosts estimate monthly and annual revenue from vacation rental properties listed on VRBO, Vrbo.com, or HomeAway. This tool accounts for nightly rates, seasonal occupancy, booking fees, and operational expenses to provide realistic income projections.</p>

    <h3>How VRBO Income Differs from Airbnb</h3>
    <p>While both platforms offer short-term rental opportunities, VRBO has distinct characteristics:</p>
    <ul>
      <li><strong>Longer Stays:</strong> VRBO guests typically book for 5-7 nights or full weeks, compared to 2-3 nights on Airbnb.</li>
      <li><strong>Whole-Home Rentals:</strong> VRBO focuses exclusively on entire homes and vacation properties—no shared spaces or private rooms.</li>
      <li><strong>Family-Oriented:</strong> VRBO attracts families and larger groups seeking vacation homes with kitchens and multiple bedrooms.</li>
      <li><strong>Commission Structure:</strong> VRBO charges annual subscription fees ($499/year) or per-booking commissions (5-10%).</li>
    </ul>

    <h3>Factors That Impact VRBO Income</h3>
    <ul>
      <li><strong>Vacation Destination:</strong> Beach towns, ski resorts, and tourist hotspots achieve 70-90% occupancy in peak season.</li>
      <li><strong>Property Size:</strong> Larger homes (3+ bedrooms) command significantly higher nightly rates and attract longer stays.</li>
      <li><strong>Peak vs. Off-Season:</strong> Revenue can swing 200-300% between high and low seasons in vacation markets.</li>
      <li><strong>Minimum Stay Requirements:</strong> Many VRBO hosts require 3-7 night minimums, reducing turnover and cleaning costs.</li>
      <li><strong>Professional Management:</strong> Hiring a property manager (20-30% of revenue) reduces hands-on work but cuts net income.</li>
    </ul>

    <h3>Maximizing VRBO Rental Income</h3>
    <ul>
      <li><strong>High-Quality Listings:</strong> Professional photos and detailed descriptions increase bookings by 30-50%.</li>
      <li><strong>Competitive Pricing:</strong> Research comparable properties (comps) in your area and price within 5-10% of market averages.</li>
      <li><strong>Seasonal Pricing:</strong> Adjust rates aggressively for peak seasons, holidays, and local events (festivals, conferences, graduations).</li>
      <li><strong>Premium Amenities:</strong> Pools, hot tubs, game rooms, and waterfront access justify 20-40% higher nightly rates.</li>
      <li><strong>Subscription vs. Commission:</strong> If you achieve high occupancy (60%+), the annual subscription ($499) costs less than per-booking fees.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your average nightly rate, estimated occupancy percentage, average booking length, cleaning fee, VRBO commission rate (or subscription cost), and monthly expenses. The calculator will show gross income, net income after fees, and annual projections.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'nightlyRate',
        label: 'Average Nightly Rate',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'occupancyRate',
        label: 'Estimated Occupancy Rate (%)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'cleaningFee',
        label: 'Cleaning Fee per Booking',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'avgStayLength',
        label: 'Average Guest Stay Length (Nights)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'vrboFeeType',
        label: 'VRBO Fee Type',
        type: 'select',
        options: [
          { label: 'Subscription ($499/year)', value: 'subscription' },
          { label: 'Per-Booking Commission', value: 'commission' },
        ],
        defaultValue: 'commission',
      },
      {
        name: 'vrboCommission',
        label: 'VRBO Commission Rate (%) - If Applicable',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Operating Expenses',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [],
    calculate: (values) => {
      const { nightlyRate, occupancyRate, cleaningFee, avgStayLength, vrboFeeType, vrboCommission, monthlyExpenses } = values;
      
      const daysInMonth = 30;
      const occupiedNights = Math.round((daysInMonth * occupancyRate) / 100);
      const numberOfBookings = Math.round(occupiedNights / avgStayLength);
      
      const grossNightlyIncome = nightlyRate * occupiedNights;
      const totalCleaningFees = cleaningFee * numberOfBookings;
      const grossMonthlyIncome = grossNightlyIncome + totalCleaningFees;
      
      let platformFees = 0;
      if (vrboFeeType === 'subscription') {
        platformFees = 499 / 12; // Annual subscription divided by 12 months
      } else {
        platformFees = grossMonthlyIncome * (vrboCommission / 100);
      }
      
      const netMonthlyIncome = grossMonthlyIncome - platformFees;
      const netMonthlyProfit = netMonthlyIncome - monthlyExpenses;
      
      const annualGrossIncome = grossMonthlyIncome * 12;
      const annualPlatformFees = vrboFeeType === 'subscription' ? 499 : platformFees * 12;
      const annualNetIncome = netMonthlyIncome * 12;
      const annualNetProfit = netMonthlyProfit * 12;

      return [
        { label: 'Occupied Nights per Month', value: occupiedNights.toString() },
        { label: 'Number of Bookings per Month', value: numberOfBookings.toString() },
        { label: 'Gross Monthly Income (Nightly + Cleaning)', value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'VRBO Platform Fees (Monthly)', value: platformFees.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Income After Fees', value: netMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Profit (After Expenses)', value: netMonthlyProfit.toFixed(2), isCurrency: true },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Platform Fees', value: annualPlatformFees.toFixed(2), isCurrency: true },
        { label: 'Annual Net Profit', value: annualNetProfit.toFixed(2), isCurrency: true },
      ];
    },
  },
};