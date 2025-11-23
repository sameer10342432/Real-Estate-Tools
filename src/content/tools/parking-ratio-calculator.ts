import { CalculatorContent } from '@/types';

export const PARKING_RATIO_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Parking Ratio Calculator (Commercial)',
  description: 'Calculate parking ratios for commercial properties. Determine adequate parking spaces per 1,000 square feet for office, retail, and industrial buildings.',
  slug: 'parking-ratio-calculator',
  icon: '🅿️',
  category: 'Commercial Real Estate',
  article: {
    title: 'Commercial Parking Ratios: Complete Guide',
    content: `
    <h2>What is a Parking Ratio?</h2>
    <p>The parking ratio expresses the number of parking spaces available per 1,000 square feet of building space. It's a critical metric in commercial real estate that affects property value, tenant satisfaction, and zoning compliance.</p>
    
    <h3>How Parking Ratio is Expressed</h3>
    <p>Parking ratios are typically stated as "spaces per 1,000 SF" or "X:1,000"</p>
    <p>Example: "4 per 1,000" or "4:1,000" means 4 parking spaces for every 1,000 square feet</p>
    <p><strong>Formula: Parking Ratio = (Number of Spaces ÷ Building SF) × 1,000</strong></p>

    <h3>Typical Parking Ratios by Property Type</h3>
    <ul>
      <li><strong>Class A Office Buildings:</strong> 3-4 spaces per 1,000 SF</li>
      <li><strong>Class B/C Office Buildings:</strong> 4-5 spaces per 1,000 SF</li>
      <li><strong>Medical Office Buildings:</strong> 4-6 spaces per 1,000 SF</li>
      <li><strong>Retail Shopping Centers:</strong> 4-6 spaces per 1,000 SF</li>
      <li><strong>Restaurants:</strong> 10-15 spaces per 1,000 SF (high turnover)</li>
      <li><strong>Industrial/Warehouse:</strong> 1-2 spaces per 1,000 SF</li>
      <li><strong>Flex Space:</strong> 2-3 spaces per 1,000 SF</li>
      <li><strong>Hotels:</strong> 1-1.5 spaces per room</li>
    </ul>

    <h3>Factors Affecting Parking Requirements</h3>
    <ul>
      <li><strong>Location:</strong> Urban areas may require less (transit access), suburban more</li>
      <li><strong>Employee Density:</strong> Call centers need more than traditional offices</li>
      <li><strong>Business Type:</strong> Customer-facing businesses need higher ratios</li>
      <li><strong>Operating Hours:</strong> Restaurants/retail need more during peak hours</li>
      <li><strong>Accessibility:</strong> Proximity to public transportation reduces need</li>
      <li><strong>Shared Parking:</strong> Mixed-use properties can share spaces</li>
    </ul>

    <h3>Zoning Requirements</h3>
    <p>Local municipalities set minimum parking requirements based on:</p>
    <ul>
      <li>Property use classification</li>
      <li>Building size and occupancy</li>
      <li>Location and transit accessibility</li>
      <li>ADA compliance (typically 1-2% of spaces)</li>
      <li>Bicycle parking requirements (increasingly common)</li>
    </ul>

    <h3>Parking Ratio Impact on Property Value</h3>
    <ul>
      <li><strong>Adequate Parking:</strong> Attracts tenants, supports higher rents</li>
      <li><strong>Excess Parking:</strong> Wasted land that could generate income</li>
      <li><strong>Insufficient Parking:</strong> Limits tenant pool, reduces property value</li>
      <li><strong>Structured Parking:</strong> Costs $20K-$50K per space to build</li>
      <li><strong>Surface Parking:</strong> Costs $3K-$10K per space</li>
    </ul>

    <h3>Employee vs. Visitor Parking</h3>
    <p>Consider different needs:</p>
    <ul>
      <li><strong>Employee Parking:</strong> All-day spaces, typically 70-80% of total</li>
      <li><strong>Visitor Parking:</strong> Short-term, high turnover, 20-30% of total</li>
      <li><strong>Reserved Parking:</strong> Executive/premium spaces</li>
      <li><strong>Handicapped Spaces:</strong> ADA-compliant spaces near entrances</li>
    </ul>

    <h3>Shared Parking Strategies</h3>
    <p>Mixed-use developments can reduce total parking needs:</p>
    <ul>
      <li><strong>Office + Restaurant:</strong> Peak demand at different times</li>
      <li><strong>Office + Residential:</strong> Day vs. night usage patterns</li>
      <li><strong>Retail + Theater:</strong> Weekend vs. weeknight patterns</li>
      <li><strong>Typically saves 20-40%</strong> compared to separate requirements</li>
    </ul>

    <h3>Future Trends</h3>
    <ul>
      <li><strong>Remote Work:</strong> Reducing office parking demand</li>
      <li><strong>Rideshare/Transit:</strong> Decreased personal vehicle usage</li>
      <li><strong>EV Charging:</strong> Increasing demand for charging infrastructure</li>
      <li><strong>Adaptive Reuse:</strong> Converting excess parking to other uses</li>
    </ul>

    <h3>Red Flags for Tenants</h3>
    <ul>
      <li>Ratio below 3:1,000 for suburban office (may cause parking shortages)</li>
      <li>No reserved or visitor parking designated</li>
      <li>Parking included in rent but inadequate supply</li>
      <li>Additional parking fees not disclosed upfront</li>
      <li>Shared parking without formal agreement</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following to calculate parking adequacy:</p>
    <ul>
      <li><strong>Building Square Footage:</strong> Total rentable or gross building area</li>
      <li><strong>Number of Parking Spaces:</strong> Total available spaces</li>
      <li><strong>Property Type:</strong> Affects required ratio benchmarks</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'buildingSqFt',
        label: 'Building Square Footage',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'parkingSpaces',
        label: 'Number of Parking Spaces',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'requiredRatio',
        label: 'Required Ratio (spaces per 1,000 SF)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'averageEmployees',
        label: 'Average Number of Employees (Optional)',
        type: 'number',
        defaultValue: 150,
      },
    ],
    results: [
      { label: 'Current Parking Ratio', isCurrency: false },
      { label: 'Required Parking Spaces', isCurrency: false },
      { label: 'Surplus / (Deficit)', isCurrency: false },
      { label: 'Compliance Status', isCurrency: false },
      { label: 'Spaces Per Employee', isCurrency: false },
      { label: 'Parking Utilization (%)', isCurrency: false },
    ],
    calculate: (values) => {
      const { buildingSqFt, parkingSpaces, requiredRatio, averageEmployees } = values;
      
      // Calculate current parking ratio
      const currentRatio = (parkingSpaces / buildingSqFt) * 1000;
      
      // Calculate required parking spaces
      const requiredSpaces = (buildingSqFt / 1000) * requiredRatio;
      
      // Calculate surplus or deficit
      const surplusDeficit = parkingSpaces - requiredSpaces;
      const complianceStatus = surplusDeficit >= 0 ? 'COMPLIANT' : 'DEFICIT';
      
      // Calculate spaces per employee
      const spacesPerEmployee = averageEmployees > 0 ? parkingSpaces / averageEmployees : 0;
      
      // Calculate utilization (assuming full occupancy)
      const parkingUtilization = averageEmployees > 0 ? (averageEmployees / parkingSpaces) * 100 : 0;

      return [
        { label: 'Current Parking Ratio', value: currentRatio.toFixed(2) + ' per 1,000 SF', isCurrency: false },
        { label: 'Required Parking Spaces', value: requiredSpaces.toFixed(0), isCurrency: false },
        { label: 'Surplus / (Deficit)', value: surplusDeficit.toFixed(0), isCurrency: false },
        { label: 'Compliance Status', value: complianceStatus, isCurrency: false },
        { label: 'Spaces Per Employee', value: spacesPerEmployee.toFixed(2), isCurrency: false },
        { label: 'Parking Utilization (%)', value: parkingUtilization.toFixed(1), isCurrency: false },
      ];
    },
  },
};
