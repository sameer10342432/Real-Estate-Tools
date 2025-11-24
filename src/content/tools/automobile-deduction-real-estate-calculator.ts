import { CalculatorContent } from '@/types';

export const AUTOMOBILE_DEDUCTION_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Automobile Deduction (Real Estate) Calculator',
  description: 'Calculate vehicle deductions for real estate professionals using standard mileage or actual expense method.',
  slug: 'automobile-deduction-real-estate-calculator',
  icon: '🚗',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Maximizing Vehicle Deductions for Real Estate Professionals',
    content: `
    <h2>Understanding Automobile Deductions for Real Estate</h2>
    <p>Real estate agents, brokers, and investors who use their vehicle for business can deduct vehicle expenses on their tax return. These deductions can add up quickly for professionals who drive extensively to show properties, meet clients, inspect investments, or attend networking events. Choosing the right method and maintaining proper documentation is key to maximizing your deduction.</p>
    
    <h3>Two Methods for Deducting Vehicle Expenses</h3>
    <p><strong>Standard Mileage Rate Method:</strong></p>
    <ul>
      <li><strong>2024 Rate:</strong> 67 cents per business mile</li>
      <li><strong>Includes:</strong> Gas, oil changes, repairs, insurance, registration, depreciation</li>
      <li><strong>Can Still Deduct:</strong> Parking fees, tolls, and interest on car loan separately</li>
      <li><strong>Best For:</strong> Newer vehicles, moderate mileage, minimal expense tracking</li>
      <li><strong>Requirement:</strong> Must choose this method in the first year you use the car for business</li>
    </ul>

    <p><strong>Actual Expense Method:</strong></p>
    <ul>
      <li>Deduct actual costs: gas, oil, repairs, insurance, registration, lease payments</li>
      <li>Plus depreciation on the business percentage of the vehicle</li>
      <li>Multiply total expenses by business use percentage</li>
      <li><strong>Best For:</strong> Expensive vehicles, high total expenses, luxury cars</li>
      <li><strong>Requirement:</strong> Must track all vehicle expenses throughout the year</li>
    </ul>

    <h3>What Miles Qualify as Business Miles?</h3>
    <p>Deductible business miles include:</p>
    <ul>
      <li><strong>Client Meetings:</strong> Driving to meet buyers, sellers, or investors</li>
      <li><strong>Property Showings:</strong> Traveling to show listed or rental properties</li>
      <li><strong>Property Inspections:</strong> Visiting rental properties or potential investments</li>
      <li><strong>Contractor Meetings:</strong> Meeting with contractors, handymen, property managers</li>
      <li><strong>Banking:</strong> Trips to the bank for business deposits or financing meetings</li>
      <li><strong>Office Supply Runs:</strong> Purchasing business supplies and materials</li>
      <li><strong>Education:</strong> Attending seminars, continuing education, or networking events</li>
      <li><strong>Marketing:</strong> Installing signs, distributing flyers, or marketing activities</li>
    </ul>

    <h3>Non-Deductible Miles</h3>
    <p>These miles do NOT qualify:</p>
    <ul>
      <li><strong>Commuting:</strong> Home to your regular office location (not deductible)</li>
      <li><strong>Personal Errands:</strong> Personal shopping, medical appointments, social activities</li>
      <li><strong>Regular Commute:</strong> Your first trip from home to work and last trip home</li>
    </ul>

    <h3>How to Use the Automobile Deduction Calculator</h3>
    <p>This calculator helps you compare both methods and maximize your deduction. You will need to provide:</p>
    <ul>
      <li><strong>Total Miles Driven:</strong> Total miles driven in the year</li>
      <li><strong>Business Miles:</strong> Miles driven for business purposes</li>
      <li><strong>Annual Vehicle Expenses:</strong> Gas, insurance, repairs, registration (for actual method)</li>
      <li><strong>Depreciation:</strong> Annual depreciation amount (for actual method)</li>
      <li><strong>Parking and Tolls:</strong> Business-related parking and toll expenses</li>
    </ul>

    <h3>Documentation Requirements</h3>
    <p>Maintain comprehensive mileage logs including:</p>
    <ul>
      <li><strong>Date:</strong> Date of each business trip</li>
      <li><strong>Destination:</strong> Where you drove and address</li>
      <li><strong>Business Purpose:</strong> Reason for the trip (property showing, client meeting, etc.)</li>
      <li><strong>Miles Driven:</strong> Odometer readings or miles for each trip</li>
      <li><strong>Total Annual Mileage:</strong> Beginning and end-of-year odometer readings</li>
    </ul>

    <h3>Mileage Tracking Best Practices</h3>
    <ul>
      <li><strong>Use an App:</strong> MileIQ, Everlance, or QuickBooks Self-Employed for automatic tracking</li>
      <li><strong>Log Daily:</strong> Record miles at the end of each business day</li>
      <li><strong>Start Day One:</strong> Begin tracking on January 1st or when you start your business</li>
      <li><strong>Reconstruct if Needed:</strong> Can recreate reasonable estimates using calendar, GPS data, or records</li>
    </ul>

    <h3>Switching Between Methods</h3>
    <ul>
      <li><strong>First Year Choice:</strong> Method chosen in year one of business use determines future flexibility</li>
      <li><strong>Standard First:</strong> If you use standard mileage first, you can switch to actual in later years</li>
      <li><strong>Actual First:</strong> If you use actual expense first, you're locked into that method for that vehicle</li>
      <li><strong>Leased Vehicles:</strong> If leasing, must use standard mileage for entire lease period if chosen initially</li>
    </ul>

    <h3>Section 179 and Bonus Depreciation</h3>
    <p>For heavy vehicles over 6,000 lbs GVWR (many SUVs and trucks):</p>
    <ul>
      <li><strong>Section 179:</strong> Can deduct up to $28,900 in first year (2024)</li>
      <li><strong>Bonus Depreciation:</strong> Additional first-year depreciation on business portion</li>
      <li><strong>Passenger Cars:</strong> Subject to luxury auto depreciation limits (much lower)</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. The IRS closely scrutinizes vehicle deductions, so meticulous record-keeping is essential. Claiming 100% business use is a red flag - be realistic about your business vs. personal use percentage. Without contemporaneous mileage logs, your deduction may be disallowed upon audit. Employee real estate agents may face additional limitations under TCJA (2018-2025). Consult with a qualified tax professional or CPA for guidance specific to your situation.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your deductions with our <strong>Travel Deduction Calculator</strong>, <strong>Home Office Deduction Calculator</strong>, and <strong>Section 179 Deduction Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalMiles',
        label: 'Total Miles Driven (annual)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'businessMiles',
        label: 'Business Miles Driven',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'annualExpenses',
        label: 'Annual Vehicle Expenses',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'depreciation',
        label: 'Annual Depreciation',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'parkingTolls',
        label: 'Parking & Tolls',
        type: 'number',
        defaultValue: 500,
      },
    ],
    results: [
      { label: 'Business Use Percentage', isPercentage: true },
      { label: 'Standard Mileage Deduction', isCurrency: true },
      { label: 'Actual Expense Deduction', isCurrency: true },
      { label: 'Recommended Method', isText: true },
    ],
    calculate: (values) => {
      const { totalMiles, businessMiles, annualExpenses, depreciation, parkingTolls } = values;
      
      const mileageRate = 0.67;
      const businessPercentage = (businessMiles / totalMiles) * 100;
      
      const standardMileageDeduction = (businessMiles * mileageRate) + parkingTolls;
      
      const totalActualExpenses = annualExpenses + depreciation;
      const actualExpenseDeduction = (totalActualExpenses * (businessMiles / totalMiles)) + parkingTolls;
      
      const recommendedMethod = actualExpenseDeduction > standardMileageDeduction ? 'Actual Expense Method' : 'Standard Mileage Rate';

      return [
        { label: 'Business Use Percentage', value: businessPercentage.toFixed(2) + '%', isCurrency: false },
        { label: 'Standard Mileage Deduction', value: standardMileageDeduction.toFixed(2), isCurrency: true },
        { label: 'Actual Expense Deduction', value: actualExpenseDeduction.toFixed(2), isCurrency: true },
        { label: 'Recommended Method', value: recommendedMethod, isCurrency: false },
      ];
    },
  },
};