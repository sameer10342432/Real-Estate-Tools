import { CalculatorContent } from '@/types';

export const HOME_APPRAISER_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Home Appraiser Fee Estimator',
  description: 'Calculate home appraisal costs based on property type, size, location, and appraisal complexity. Compare typical fees across different markets.',
  icon: '📋',
  category: 'Property Valuation',
  slug: 'home-appraiser-fee-estimator',
  article: {
    title: 'Understanding Home Appraisal Costs',
    content: `
<h2>What is a Home Appraisal?</h2>
<p>A home appraisal is an objective assessment of a property's fair market value conducted by a licensed appraiser. Lenders require appraisals to ensure the property is worth the loan amount.</p>

<h3>Average Appraisal Costs by Property Type</h3>
<ul>
  <li><strong>Single-Family Home:</strong> $300-$500</li>
  <li><strong>Condo/Townhouse:</strong> $300-$400</li>
  <li><strong>Multi-Family (2-4 units):</strong> $600-$1,200</li>
  <li><strong>Luxury/Large Home (3,000+ sq ft):</strong> $500-$800</li>
  <li><strong>Rural/Acreage:</strong> $500-$1,000+</li>
</ul>

<h3>Factors Affecting Appraisal Cost</h3>
<ul>
  <li>Property size and complexity</li>
  <li>Geographic location and market</li>
  <li>Property type and age</li>
  <li>Rush timeline (can add 20-50%)</li>
  <li>Property accessibility</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'singleFamily',
        options: [
          { value: 'condo', label: 'Condo/Townhouse' },
          { value: 'singleFamily', label: 'Single-Family Home' },
          { value: 'multiFamily', label: 'Multi-Family (2-4 units)' },
          { value: 'luxury', label: 'Luxury/Large Home' },
          { value: 'rural', label: 'Rural/Acreage Property' },
        ],
      },
      {
        name: 'squareFeet',
        label: 'Square Footage',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'location',
        label: 'Location Type',
        type: 'select',
        defaultValue: 'suburban',
        options: [
          { value: 'rural', label: 'Rural Area' },
          { value: 'suburban', label: 'Suburban Area' },
          { value: 'urban', label: 'Urban Area' },
          { value: 'highCost', label: 'High-Cost Metro (NYC, SF, LA)' },
        ],
      },
      {
        name: 'timeline',
        label: 'Timeline',
        type: 'select',
        defaultValue: 'standard',
        options: [
          { value: 'standard', label: 'Standard (7-10 days)' },
          { value: 'rush', label: 'Rush (2-3 days)' },
        ],
      },
    ],
    results: [
      { label: "Base Appraisal Fee", isCurrency: true },
      { label: "Location Adjustment", isCurrency: true },
      { label: "Rush Fee (if applicable)", isCurrency: true },
      { label: "Total Estimated Cost", isCurrency: true }
    ],
    calculate: (data) => {
      const { propertyType, squareFeet, location, timeline } = data;
      
      // Base fees by property type
      const baseFees: Record<string, number> = {
        condo: 350,
        singleFamily: 400,
        multiFamily: 800,
        luxury: 600,
        rural: 650,
      };
      
      let baseFee = baseFees[propertyType] || 400;
      
      // Size adjustment
      if (squareFeet > 3000) baseFee += 150;
      else if (squareFeet > 2500) baseFee += 100;
      
      // Location multiplier
      const locationAdjustments: Record<string, number> = {
        rural: 1.15,
        suburban: 1.0,
        urban: 1.1,
        highCost: 1.4,
      };
      
      const locationMultiplier = locationAdjustments[location] || 1.0;
      const locationAdjustment = baseFee * (locationMultiplier - 1);
      
      // Rush fee
      const rushFee = timeline === 'rush' ? baseFee * 0.3 : 0;
      
      const total = (baseFee * locationMultiplier) + rushFee;
      
      return [
        { label: 'Base Appraisal Fee', value: `$${Math.round(baseFee).toLocaleString()}` },
        { label: 'Location Adjustment', value: locationAdjustment > 0 ? `+$${Math.round(locationAdjustment).toLocaleString()}` : '$0' },
        { label: 'Rush Fee (if applicable)', value: rushFee > 0 ? `$${Math.round(rushFee).toLocaleString()}` : 'N/A' },
        { label: 'Total Estimated Cost', value: `$${Math.round(total).toLocaleString()}` }
      ];
    },
  },
};
