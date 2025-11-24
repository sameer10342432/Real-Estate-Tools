import { CalculatorContent } from '@/types';

export const CONDO_FEE_VS_TOWNHOUSE_HOA_COMPARATOR_CONTENT: CalculatorContent = {
  title: 'Condo Fee vs Townhouse HOA Comparator',
  description: 'Compare condo fees versus townhouse HOA dues and analyze true cost of ownership',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'condo-fee-vs-townhouse-hoa-comparator',
  article: {
    title: "Condo Fees vs Townhouse HOA: Understanding the Differences",
    content: `
    <h2>Condo Fees vs Townhouse HOA Dues</h2>
    <p>While both condos and townhouses have monthly association fees, what these fees cover differs significantly. Understanding these differences is crucial for making informed purchase decisions and budgeting for true ownership costs.</p>
    
    <h3>What Condo Fees Typically Cover</h3>
    <ul>
      <li><strong>Master Insurance:</strong> Building exterior, common areas, liability</li>
      <li><strong>Exterior Maintenance:</strong> Roof, siding, windows, painting</li>
      <li><strong>Common Area Utilities:</strong> Water, trash, sometimes heat/AC</li>
      <li><strong>Amenities:</strong> Pool, gym, clubhouse, concierge</li>
      <li><strong>Landscaping:</strong> All exterior grounds maintenance</li>
      <li><strong>Snow Removal:</strong> Parking lots, walkways</li>
      <li><strong>Reserve Fund:</strong> Major repairs and replacements</li>
      <li><strong>Management:</strong> Professional property management</li>
    </ul>
    
    <h3>What Townhouse HOA Dues Typically Cover</h3>
    <ul>
      <li><strong>Common Areas:</strong> Shared spaces, amenities</li>
      <li><strong>Front Yard Landscaping:</strong> Usually owner maintains backyard</li>
      <li><strong>Community Insurance:</strong> Shared structures only</li>
      <li><strong>Snow Removal:</strong> Common areas and streets (not driveways)</li>
      <li><strong>Amenities:</strong> Pool, clubhouse if available</li>
      <li><strong>Trash Collection:</strong> Sometimes included</li>
    </ul>
    
    <h3>Owner Responsibilities: Key Differences</h3>
    <table>
      <tr>
        <th>Item</th>
        <th>Condo</th>
        <th>Townhouse</th>
      </tr>
      <tr>
        <td>Roof</td>
        <td>HOA Covers</td>
        <td>Owner Responsibility</td>
      </tr>
      <tr>
        <td>Exterior Walls</td>
        <td>HOA Covers</td>
        <td>Owner Responsibility</td>
      </tr>
      <tr>
        <td>Windows</td>
        <td>HOA Covers (usually)</td>
        <td>Owner Responsibility</td>
      </tr>
      <tr>
        <td>HVAC</td>
        <td>Owner (sometimes shared)</td>
        <td>Owner Responsibility</td>
      </tr>
      <tr>
        <td>Landscaping</td>
        <td>HOA Covers</td>
        <td>Owner (backyard)</td>
      </tr>
      <tr>
        <td>Driveway</td>
        <td>HOA Covers</td>
        <td>Owner Responsibility</td>
      </tr>
    </table>
    
    <h3>True Cost of Ownership Comparison</h3>
    <p>While condo fees are typically higher ($300-$600/month), they include many expenses that townhouse owners must budget for separately. Townhouse owners need to set aside funds for roof replacement ($8,000-$15,000), exterior painting ($3,000-$8,000), and other major maintenance items.</p>
    
    <h3>Financial Considerations</h3>
    <ul>
      <li><strong>Predictability:</strong> Condos offer more predictable monthly costs</li>
      <li><strong>Control:</strong> Townhouses offer more control over maintenance timing</li>
      <li><strong>Reserves:</strong> Condo associations build reserves; townhouse owners must self-fund</li>
      <li><strong>Special Assessments:</strong> Both can have special assessments for major projects</li>
      <li><strong>Appreciation:</strong> Townhouses typically appreciate faster due to land ownership</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "condoFee",
        label: "Monthly Condo Fee",
        type: "number",
        placeholder: "450",
        defaultValue: "450",
      },
      {
        name: "townhouseHOA",
        label: "Monthly Townhouse HOA",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "annualRoofReserve",
        label: "Annual Roof Reserve (Townhouse)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "annualExteriorReserve",
        label: "Annual Exterior Reserve (Townhouse)",
        type: "number",
        placeholder: "400",
        defaultValue: "400",
      },
      {
        name: "annualLandscaping",
        label: "Annual Landscaping Cost (Townhouse)",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "homeownersInsurance",
        label: "Townhouse Insurance Premium (Annual)",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
    ],
    results: [
      { label: "Monthly Condo Total Cost", isCurrency: true },
      { label: "Monthly Townhouse Total Cost", isCurrency: true },
      { label: "Annual Condo Total Cost", isCurrency: true },
      { label: "Annual Townhouse Total Cost", isCurrency: true },
      { label: "Monthly Cost Difference", isCurrency: true },
      { label: "10-Year Condo Ownership Cost", isCurrency: true },
      { label: "10-Year Townhouse Ownership Cost", isCurrency: true },
      { label: "More Affordable Option", isCurrency: false },
    ],
    calculate: (data: any) => {
      const condoFee = Number(data.condoFee) || 0;
      const townhouseHOA = Number(data.townhouseHOA) || 0;
      const annualRoofReserve = Number(data.annualRoofReserve) || 0;
      const annualExteriorReserve = Number(data.annualExteriorReserve) || 0;
      const annualLandscaping = Number(data.annualLandscaping) || 0;
      const homeownersInsurance = Number(data.homeownersInsurance) || 0;

      const monthlyCondo = condoFee;
      
      const townhouseMonthlyExtras = (annualRoofReserve + annualExteriorReserve + annualLandscaping + homeownersInsurance) / 12;
      const monthlyTownhouse = townhouseHOA + townhouseMonthlyExtras;
      
      const annualCondo = monthlyCondo * 12;
      const annualTownhouse = monthlyTownhouse * 12;
      
      const monthlyDifference = monthlyCondo - monthlyTownhouse;
      const tenYearCondo = annualCondo * 10;
      const tenYearTownhouse = annualTownhouse * 10;
      
      const affordableOption = monthlyTownhouse < monthlyCondo 
        ? `Townhouse (Save $${Math.abs(monthlyDifference).toFixed(2)}/month)` 
        : `Condo (Save $${Math.abs(monthlyDifference).toFixed(2)}/month)`;

      return [
        { label: "Monthly Condo Total Cost", value: `${monthlyCondo.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Townhouse Total Cost", value: `${monthlyTownhouse.toFixed(2)}`, isCurrency: true },
        { label: "Annual Condo Total Cost", value: `${annualCondo.toFixed(2)}`, isCurrency: true },
        { label: "Annual Townhouse Total Cost", value: `${annualTownhouse.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Cost Difference", value: `${monthlyDifference.toFixed(2)}`, isCurrency: true },
        { label: "10-Year Condo Ownership Cost", value: `${tenYearCondo.toFixed(2)}`, isCurrency: true },
        { label: "10-Year Townhouse Ownership Cost", value: `${tenYearTownhouse.toFixed(2)}`, isCurrency: true },
        { label: "More Affordable Option", value: affordableOption, isCurrency: false },
      ];
    },
  },
};
