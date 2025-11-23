import { CalculatorContent } from '@/types';

export const LOSS_FACTOR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Loss Factor Calculator (Commercial Lease)',
  description: 'Calculate loss factor for commercial leases. Determine the difference between rentable and usable square footage in office and retail spaces.',
  slug: 'loss-factor-calculator',
  icon: '📏',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding Loss Factor in Commercial Real Estate',
    content: `
    <h2>What is Loss Factor?</h2>
    <p>Loss factor (also called "add-on factor" or "common area factor") represents the percentage difference between a tenant's usable square footage and their rentable square footage. It accounts for the tenant's proportionate share of common areas like hallways, lobbies, restrooms, and mechanical rooms.</p>
    
    <h3>Usable vs. Rentable Square Footage</h3>
    <ul>
      <li><strong>Usable Square Footage (USF):</strong> The actual space within your suite that you can occupy and use exclusively</li>
      <li><strong>Rentable Square Footage (RSF):</strong> Usable square footage PLUS your share of common areas</li>
      <li><strong>Loss Factor:</strong> The percentage added to usable space to calculate rentable space</li>
    </ul>

    <h3>How Loss Factor is Calculated</h3>
    <p>Loss Factor = ((Rentable SF - Usable SF) ÷ Usable SF) × 100</p>
    <p>Alternatively: Rentable SF = Usable SF × (1 + Loss Factor)</p>

    <h3>Typical Loss Factors by Property Type</h3>
    <ul>
      <li><strong>Class A Office Buildings:</strong> 10-15% (efficient design)</li>
      <li><strong>Class B/C Office Buildings:</strong> 15-20% (older, less efficient)</li>
      <li><strong>Medical Office Buildings:</strong> 12-18%</li>
      <li><strong>Retail Strip Centers:</strong> 5-10% (minimal common areas)</li>
      <li><strong>Enclosed Shopping Malls:</strong> 15-25% (extensive common areas)</li>
      <li><strong>Industrial/Warehouse:</strong> 0-5% (very little common area)</li>
    </ul>

    <h3>Why Loss Factor Matters</h3>
    <ul>
      <li><strong>Affects Total Rent:</strong> You pay rent on rentable SF, not just usable SF</li>
      <li><strong>Impacts Price Per SF:</strong> Higher loss factor = paying more for less usable space</li>
      <li><strong>Comparison Tool:</strong> Compare buildings with different loss factors accurately</li>
      <li><strong>Negotiation Point:</strong> Understanding loss factor helps negotiate better terms</li>
    </ul>

    <h3>Common Area Components</h3>
    <p>Common areas typically included in loss factor:</p>
    <ul>
      <li>Lobbies and reception areas</li>
      <li>Corridors and hallways</li>
      <li>Restrooms</li>
      <li>Elevator shafts and mechanical rooms</li>
      <li>Stairwells and fire exits</li>
      <li>Janitorial closets</li>
      <li>Building management offices</li>
    </ul>

    <h3>Red Flags to Watch</h3>
    <ul>
      <li><strong>Excessive Loss Factor:</strong> Above 20% for office space may indicate inefficiency</li>
      <li><strong>Inconsistent Measurement:</strong> Ensure landlord uses BOMA standards</li>
      <li><strong>Hidden Costs:</strong> Higher loss factor = higher rent, CAM fees, and utilities</li>
      <li><strong>Lack of Transparency:</strong> Always ask for measurement documentation</li>
    </ul>

    <h3>BOMA Standards</h3>
    <p>The Building Owners and Managers Association (BOMA) provides standardized measurement guidelines:</p>
    <ul>
      <li><strong>BOMA 2017:</strong> Most current office building measurement standard</li>
      <li><strong>BOMA Retail:</strong> For shopping centers and retail spaces</li>
      <li><strong>BOMA Industrial:</strong> For warehouse and industrial properties</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information:</p>
    <ul>
      <li><strong>Usable Square Footage:</strong> The actual space within your suite boundaries</li>
      <li><strong>Rentable Square Footage:</strong> Total space you're being charged for</li>
    </ul>
    <p>The calculator will show your loss factor percentage, common area allocation, and cost implications.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'usableSqFt',
        label: 'Usable Square Footage (USF)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'rentableSqFt',
        label: 'Rentable Square Footage (RSF)',
        type: 'number',
        defaultValue: 5750,
      },
      {
        name: 'rentPerSqFt',
        label: 'Annual Rent Per SF (Optional) ($)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Loss Factor (%)', isCurrency: false },
      { label: 'Common Area SF', isCurrency: false },
      { label: 'Efficiency Ratio (%)', isCurrency: false },
      { label: 'Annual Rent (Rentable SF)', isCurrency: true },
      { label: 'Effective Rent Per Usable SF', isCurrency: true },
      { label: 'Extra Cost Due to Loss Factor', isCurrency: true },
    ],
    calculate: (values) => {
      const { usableSqFt, rentableSqFt, rentPerSqFt } = values;
      
      // Calculate loss factor
      const lossFactor = ((rentableSqFt - usableSqFt) / usableSqFt) * 100;
      
      // Calculate common area square footage
      const commonAreaSqFt = rentableSqFt - usableSqFt;
      
      // Calculate efficiency ratio (inverse of loss factor)
      const efficiencyRatio = (usableSqFt / rentableSqFt) * 100;
      
      // Calculate costs if rent is provided
      const annualRent = rentableSqFt * rentPerSqFt;
      const effectiveRentPerUsableSF = annualRent / usableSqFt;
      const extraCost = commonAreaSqFt * rentPerSqFt;

      return [
        { label: 'Loss Factor (%)', value: lossFactor.toFixed(2), isCurrency: false },
        { label: 'Common Area SF', value: commonAreaSqFt.toFixed(0), isCurrency: false },
        { label: 'Efficiency Ratio (%)', value: efficiencyRatio.toFixed(2), isCurrency: false },
        { label: 'Annual Rent (Rentable SF)', value: annualRent.toFixed(2), isCurrency: true },
        { label: 'Effective Rent Per Usable SF', value: effectiveRentPerUsableSF.toFixed(2), isCurrency: true },
        { label: 'Extra Cost Due to Loss Factor', value: extraCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
