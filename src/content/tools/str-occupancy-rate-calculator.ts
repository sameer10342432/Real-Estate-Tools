import { CalculatorContent } from '@/types';

export const STR_OCCUPANCY_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Short-Term Rental Occupancy Rate Calculator',
  description: 'Calculate STR occupancy rates and optimize booking performance for Airbnb and VRBO',
  icon: 'Icon',
  slug: 'str-occupancy-rate-calculator',
  category: 'Rental & Income',
  article: {
    title: 'Understanding Short-Term Rental Occupancy Rates',
    content: `
    <h2>What is STR Occupancy Rate?</h2>
    <p>Occupancy rate measures the percentage of nights your short-term rental property is booked over a specific period (monthly, quarterly, or annually). It's one of the most important metrics for STR investors because it directly impacts revenue and profitability. High occupancy rates indicate strong demand, effective pricing, and successful marketing.</p>

    <h3>How to Calculate STR Occupancy Rate</h3>
    <p>The formula is simple:</p>
    <p><strong>Occupancy Rate = (Booked Nights ÷ Available Nights) × 100</strong></p>
    <p>For example, if your property was booked for 18 nights in a 30-day month, your occupancy rate is (18 ÷ 30) × 100 = 60%.</p>

    <h3>What is a Good STR Occupancy Rate?</h3>
    <ul>
      <li><strong>50-60%:</strong> Average occupancy for most short-term rentals. Acceptable but leaves room for improvement.</li>
      <li><strong>60-70%:</strong> Above-average occupancy. Indicates strong demand and effective pricing strategy.</li>
      <li><strong>70-85%:</strong> Excellent occupancy. Your property is highly competitive and well-managed.</li>
      <li><strong>85%+:</strong> Exceptional occupancy, but may indicate underpricing—consider raising rates to maximize revenue.</li>
    </ul>

    <h3>Factors That Affect Occupancy Rates</h3>
    <ul>
      <li><strong>Location:</strong> Tourist destinations, business districts, and event venues achieve higher occupancy than rural areas.</li>
      <li><strong>Seasonality:</strong> Beach rentals peak in summer; ski properties peak in winter. Off-season occupancy drops 30-50%.</li>
      <li><strong>Pricing Strategy:</strong> Competitive pricing increases occupancy; premium pricing may reduce bookings but increase revenue per night.</li>
      <li><strong>Property Quality:</strong> Well-furnished, clean properties with strong reviews achieve 10-20% higher occupancy.</li>
      <li><strong>Marketing & Distribution:</strong> Listing on multiple platforms (Airbnb, VRBO, Booking.com) increases exposure and bookings.</li>
    </ul>

    <h3>How to Improve Your Occupancy Rate</h3>
    <ul>
      <li><strong>Dynamic Pricing:</strong> Use automated pricing tools to adjust rates based on demand, events, and competitor pricing.</li>
      <li><strong>Professional Photos:</strong> High-quality listing photos can increase bookings by 30-50%.</li>
      <li><strong>Instant Booking:</strong> Enable instant booking to capture impulse bookings and improve search ranking.</li>
      <li><strong>Flexible Cancellation:</strong> Offer moderate or flexible cancellation policies to attract more bookings.</li>
      <li><strong>Length-of-Stay Discounts:</strong> Encourage longer stays with weekly (10-15%) and monthly (20-30%) discounts.</li>
      <li><strong>Respond Quickly:</strong> Fast response times (under 1 hour) improve conversion rates by 15-25%.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the number of nights booked, total nights available in the period, and any blocked nights for owner use or maintenance. The calculator will show your occupancy rate, available nights for rent, and provide benchmarking insights.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'bookedNights',
        label: 'Total Booked Nights',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'totalNights',
        label: 'Total Nights in Period (e.g., 30 for monthly)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'blockedNights',
        label: 'Blocked Nights (Owner Use / Maintenance)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'nightlyRate',
        label: 'Average Nightly Rate (Optional)',
        type: 'number',
        defaultValue: 150,
      },
    ],
    results: [],
    calculate: (values) => {
      const { bookedNights, totalNights, blockedNights, nightlyRate } = values;
      
      const availableNights = totalNights - blockedNights;
      const occupancyRate = (bookedNights / availableNights) * 100;
      const emptyNights = availableNights - bookedNights;
      
      const totalRevenue = bookedNights * nightlyRate;
      const potentialRevenue = availableNights * nightlyRate;
      const lostRevenue = emptyNights * nightlyRate;
      const revenueEfficiency = (totalRevenue / potentialRevenue) * 100;
      
      let benchmark = '';
      if (occupancyRate < 50) {
        benchmark = 'Below Average - Consider improving pricing, photos, or marketing';
      } else if (occupancyRate >= 50 && occupancyRate < 60) {
        benchmark = 'Average - Room for improvement through dynamic pricing';
      } else if (occupancyRate >= 60 && occupancyRate < 70) {
        benchmark = 'Above Average - Strong performance';
      } else if (occupancyRate >= 70 && occupancyRate < 85) {
        benchmark = 'Excellent - Highly competitive property';
      } else {
        benchmark = 'Exceptional - Consider testing higher rates';
      }

      return [
        { label: 'Occupancy Rate', value: occupancyRate.toFixed(1) + '%' },
        { label: 'Booked Nights', value: bookedNights.toString() },
        { label: 'Empty Nights', value: emptyNights.toString() },
        { label: 'Available Nights (After Blocking)', value: availableNights.toString() },
        { label: 'Total Revenue Generated', value: totalRevenue.toFixed(2), isCurrency: true },
        { label: 'Potential Revenue (100% Occupancy)', value: potentialRevenue.toFixed(2), isCurrency: true },
        { label: 'Lost Revenue (Empty Nights)', value: lostRevenue.toFixed(2), isCurrency: true },
        { label: 'Revenue Efficiency', value: revenueEfficiency.toFixed(1) + '%' },
        { label: 'Performance Benchmark', value: benchmark },
      ];
    },
  },
};