import { CalculatorContent } from '@/types';

export const TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Travel Deduction (Landlord) Calculator',
  description: 'Calculate tax-deductible travel expenses for landlords and property investors including mileage, airfare, and lodging.',
  slug: 'travel-deduction-landlord-calculator',
  icon: '✈️',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Tax-Deductible Travel Expenses for Landlords and Investors',
    content: `
    <h2>Understanding Travel Deductions for Real Estate</h2>
    <p>As a landlord or real estate investor, you can deduct ordinary and necessary travel expenses when you travel away from home primarily for your rental activity or real estate business. These deductions can significantly reduce your taxable rental income, but it's essential to understand the rules and maintain proper documentation.</p>
    
    <h3>What Travel Expenses Are Deductible?</h3>
    <p>Qualifying deductible travel expenses include:</p>
    <ul>
      <li><strong>Transportation:</strong> Airfare, train tickets, bus fares, and car rental costs</li>
      <li><strong>Lodging:</strong> Hotel or other accommodation costs while traveling for business</li>
      <li><strong>Meals:</strong> 50% of meal costs during business travel (100% in some cases for 2021-2022)</li>
      <li><strong>Vehicle Expenses:</strong> Either standard mileage rate or actual expenses when driving your own vehicle</li>
      <li><strong>Incidental Expenses:</strong> Tips, baggage fees, parking, tolls, and Wi-Fi costs</li>
      <li><strong>Other Expenses:</strong> Dry cleaning, business calls, and shipping of business materials</li>
    </ul>

    <h3>Requirements for Deductible Travel</h3>
    <p>To deduct travel expenses, the trip must meet these criteria:</p>
    <ul>
      <li><strong>Ordinary and Necessary:</strong> Common and helpful for your rental or real estate business</li>
      <li><strong>Away from Tax Home:</strong> Travel substantially longer than an ordinary day's work and require sleep or rest</li>
      <li><strong>Primary Purpose:</strong> The main purpose of the trip must be business-related</li>
      <li><strong>Temporary Travel:</strong> Trip to a work location expected to last one year or less</li>
    </ul>

    <h3>Common Deductible Travel Scenarios</h3>
    <ul>
      <li><strong>Property Inspection:</strong> Traveling to inspect rental properties or potential investments</li>
      <li><strong>Property Management:</strong> Meeting with property managers, contractors, or tenants</li>
      <li><strong>Property Improvements:</strong> Overseeing renovations or capital improvements</li>
      <li><strong>Property Acquisition:</strong> Viewing properties for purchase or investment analysis</li>
      <li><strong>Education:</strong> Attending real estate seminars, conferences, or training (if clearly business-related)</li>
      <li><strong>Tenant Issues:</strong> Handling evictions, lease signings, or tenant disputes</li>
    </ul>

    <h3>How to Use the Travel Deduction Calculator</h3>
    <p>This calculator helps you estimate your deductible travel expenses. You will need to provide:</p>
    <ul>
      <li><strong>Round-Trip Airfare:</strong> Cost of flight or other long-distance transportation</li>
      <li><strong>Lodging Costs:</strong> Total hotel or accommodation expenses</li>
      <li><strong>Meal Expenses:</strong> Total meal costs (50% deductible)</li>
      <li><strong>Local Transportation:</strong> Car rental, taxi, Uber, or public transit</li>
      <li><strong>Miles Driven:</strong> If using personal vehicle, total business miles</li>
      <li><strong>Other Expenses:</strong> Parking, tolls, tips, and incidentals</li>
    </ul>

    <h3>Documentation Requirements</h3>
    <p>Maintain comprehensive records including:</p>
    <ul>
      <li><strong>Receipts:</strong> Keep all receipts for lodging and any expense over $75</li>
      <li><strong>Mileage Log:</strong> Record dates, destinations, purpose, and miles driven</li>
      <li><strong>Calendar Notes:</strong> Document business activities and meetings</li>
      <li><strong>Mixed-Use Documentation:</strong> If combining business and personal travel, allocate expenses appropriately</li>
    </ul>

    <h3>2024 Standard Mileage Rate</h3>
    <ul>
      <li><strong>Business Use:</strong> 67 cents per mile (2024 rate)</li>
      <li><strong>Includes:</strong> Gas, oil, repairs, insurance, depreciation</li>
      <li><strong>Plus:</strong> Can still deduct parking fees and tolls separately</li>
    </ul>

    <h3>Mixed Business and Personal Travel</h3>
    <p>If you combine business and personal activities:</p>
    <ul>
      <li><strong>Primary Purpose Test:</strong> If trip is primarily business, transportation is fully deductible</li>
      <li><strong>Allocate Days:</strong> Deduct lodging and meals only for business days</li>
      <li><strong>Spouse Travel:</strong> Generally not deductible unless spouse is an employee with a business purpose</li>
      <li><strong>Extra Personal Days:</strong> Additional lodging/meals for personal days are not deductible</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. Travel deduction rules are complex and depend on the specific facts and circumstances of each trip. Keep detailed contemporaneous records of all business travel. The IRS may scrutinize travel deductions, especially for trips to desirable destinations, so proper documentation is critical. Consult with a qualified tax professional or CPA for guidance on your specific situation.</p>

    <h3>Additional Resources</h3>
    <p>Explore our <strong>Automobile Deduction Calculator</strong> and <strong>Home Office Deduction Calculator</strong> to maximize your real estate business tax deductions.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'airfare',
        label: 'Round-Trip Airfare',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'lodging',
        label: 'Total Lodging Costs',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'meals',
        label: 'Total Meal Expenses',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'localTransport',
        label: 'Local Transportation',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'milesDriven',
        label: 'Business Miles Driven',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'otherExpenses',
        label: 'Other Expenses (parking, tolls, etc.)',
        type: 'number',
        defaultValue: 100,
      },
    ],
    results: [
      { label: 'Deductible Airfare', isCurrency: true },
      { label: 'Deductible Lodging', isCurrency: true },
      { label: 'Deductible Meals (50%)', isCurrency: true },
      { label: 'Mileage Deduction (67¢/mile)', isCurrency: true },
      { label: 'Total Deductible Travel Expenses', isCurrency: true },
    ],
    calculate: (values) => {
      const { airfare, lodging, meals, localTransport, milesDriven, otherExpenses } = values;
      
      const mileageRate = 0.67;
      const deductibleAirfare = airfare;
      const deductibleLodging = lodging;
      const deductibleMeals = meals * 0.5;
      const mileageDeduction = milesDriven * mileageRate;
      const totalDeduction = deductibleAirfare + deductibleLodging + deductibleMeals + localTransport + mileageDeduction + otherExpenses;

      return [
        { label: 'Deductible Airfare', value: deductibleAirfare.toFixed(2), isCurrency: true },
        { label: 'Deductible Lodging', value: deductibleLodging.toFixed(2), isCurrency: true },
        { label: 'Deductible Meals (50%)', value: deductibleMeals.toFixed(2), isCurrency: true },
        { label: 'Mileage Deduction (67¢/mile)', value: mileageDeduction.toFixed(2), isCurrency: true },
        { label: 'Total Deductible Travel Expenses', value: totalDeduction.toFixed(2), isCurrency: true },
      ];
    },
  },
};