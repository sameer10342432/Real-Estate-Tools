import { CalculatorContent } from '@/types';

export const REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Attorney Fee Estimator',
  description: 'Estimate real estate attorney fees for closings, contract reviews, title disputes, and legal consultations based on transaction complexity.',
  icon: '⚖️',
  category: 'Legal & Compliance',
  slug: 'real-estate-attorney-fee-estimator',
  article: {
    title: 'Understanding Real Estate Attorney Fees',
    content: `
<h2>When Do You Need a Real Estate Attorney?</h2>
<p>Some states require attorneys for closings, while in others they're optional. Attorneys can protect your interests, review contracts, resolve title issues, and handle complex transactions.</p>

<h3>Attorney-Required States</h3>
<p>Connecticut, Delaware, Georgia, Massachusetts, North Carolina, Rhode Island, South Carolina, Vermont, and West Virginia require attorneys for real estate closings.</p>

<h3>Common Attorney Services and Costs</h3>
<ul>
  <li><strong>Residential Closing (Simple):</strong> $500-$1,500</li>
  <li><strong>Residential Closing (Complex):</strong> $1,500-$3,000</li>
  <li><strong>Commercial Closing:</strong> $2,000-$10,000+</li>
  <li><strong>Contract Review:</strong> $200-$500</li>
  <li><strong>Title Issue Resolution:</strong> $500-$2,500</li>
  <li><strong>Hourly Rate Consultation:</strong> $200-$500/hour</li>
</ul>

<h3>Flat Fee vs Hourly</h3>
<p>Many attorneys charge flat fees for standard closings but hourly rates for complex issues or litigation. Always get a fee agreement in writing upfront.</p>
`,
  },
  calculator: {
    fields: [
      {
        name: 'serviceType',
        label: 'Service Type',
        type: 'select',
        defaultValue: 'residentialClosing',
        options: [
          { value: 'consultation', label: 'Legal Consultation (Hourly)' },
          { value: 'contractReview', label: 'Contract Review' },
          { value: 'residentialClosing', label: 'Residential Closing' },
          { value: 'commercialClosing', label: 'Commercial Closing' },
          { value: 'titleIssue', label: 'Title Issue Resolution' },
          { value: 'dispute', label: 'Dispute/Litigation' },
        ],
      },
      {
        name: 'complexity',
        label: 'Transaction Complexity',
        type: 'select',
        defaultValue: 'standard',
        options: [
          { value: 'simple', label: 'Simple/Straightforward' },
          { value: 'standard', label: 'Standard' },
          { value: 'complex', label: 'Complex/Multiple Issues' },
        ],
      },
      {
        name: 'propertyValue',
        label: 'Property Value (if applicable)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        defaultValue: 'average',
        options: [
          { value: 'lowCost', label: 'Low Cost Area' },
          { value: 'average', label: 'Average Cost Area' },
          { value: 'highCost', label: 'High Cost Metro (NYC, SF, Boston)' },
        ],
      },
    ],
    results: [
      { label: "Base Attorney Fee", isCurrency: true },
      { label: "Complexity Adjustment", isCurrency: true },
      { label: "Location Adjustment", isCurrency: true },
      { label: "Total Estimated Cost", isCurrency: true }
    ],
    calculate: (data) => {
      const { serviceType, complexity, propertyValue, location } = data;
      
      // Base fees by service type
      const baseFees: Record<string, number> = {
        consultation: 350, // Per hour
        contractReview: 350,
        residentialClosing: 1000,
        commercialClosing: 4000,
        titleIssue: 1200,
        dispute: 3000,
      };
      
      let baseFee = baseFees[serviceType] || 1000;
      
      // For high-value properties, add a percentage fee
      if (serviceType === 'commercialClosing' && propertyValue > 1000000) {
        baseFee += (propertyValue - 1000000) * 0.001; // 0.1% of value over $1M
      }
      
      // Location multiplier
      const locationMultipliers: Record<string, number> = {
        lowCost: 0.8,
        average: 1.0,
        highCost: 1.6,
      };
      
      const locationMultiplier = locationMultipliers[location] || 1.0;
      const locationAdjustment = baseFee * (locationMultiplier - 1);
      
      // Complexity adjustment
      const complexityMultipliers: Record<string, number> = {
        simple: 0.8,
        standard: 1.0,
        complex: 1.4,
      };
      
      const complexityMultiplier = complexityMultipliers[complexity] || 1.0;
      const complexityAdjustment = baseFee * (complexityMultiplier - 1);
      
      const total = baseFee * locationMultiplier * complexityMultiplier;
      
      return [
        { label: 'Base Attorney Fee', value: `$${Math.round(baseFee).toLocaleString()}` },
        { label: 'Complexity Adjustment', value: complexityAdjustment !== 0 ? `${complexityAdjustment > 0 ? '+' : ''}$${Math.round(Math.abs(complexityAdjustment)).toLocaleString()}` : '$0' },
        { label: 'Location Adjustment', value: locationAdjustment !== 0 ? `${locationAdjustment > 0 ? '+' : ''}$${Math.round(Math.abs(locationAdjustment)).toLocaleString()}` : '$0' },
        { label: 'Total Estimated Cost', value: `$${Math.round(total).toLocaleString()}${serviceType === 'consultation' ? ' per hour' : ''}` }
      ];
    },
  },
};
