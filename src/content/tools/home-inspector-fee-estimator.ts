import { CalculatorContent } from '@/types';

export const HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Home Inspector Fee Estimator',
  description: 'Calculate home inspection costs based on property size, age, type, and additional inspections like radon, mold, or termite testing.',
  icon: '🔎',
  category: 'Risk Assessment',
  slug: 'home-inspector-fee-estimator',
  article: {
    title: 'Understanding Home Inspection Costs',
    content: `
<h2>What is a Home Inspection?</h2>
<p>A home inspection is a thorough evaluation of a property's condition, including structural elements, systems, and potential safety issues. Most buyers pay for an inspection before purchasing.</p>

<h3>Average Home Inspection Costs</h3>
<ul>
  <li><strong>Small Home (< 1,500 sq ft):</strong> $250-$350</li>
  <li><strong>Medium Home (1,500-2,500 sq ft):</strong> $350-$500</li>
  <li><strong>Large Home (2,500-4,000 sq ft):</strong> $500-$700</li>
  <li><strong>Luxury Home (4,000+ sq ft):</strong> $700-$1,200+</li>
</ul>

<h3>Additional Inspection Services</h3>
<ul>
  <li><strong>Radon Testing:</strong> $150-$250</li>
  <li><strong>Mold Inspection:</strong> $300-$600</li>
  <li><strong>Termite/Pest Inspection:</strong> $75-$150</li>
  <li><strong>Sewer Scope:</strong> $150-$300</li>
  <li><strong>Pool/Spa Inspection:</strong> $200-$400</li>
  <li><strong>Chimney Inspection:</strong> $100-$250</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'squareFeet',
        label: 'Square Footage',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'propertyAge',
        label: 'Property Age',
        type: 'select',
        defaultValue: 'modern',
        options: [
          { value: 'new', label: 'New Construction (< 5 years)' },
          { value: 'modern', label: 'Modern (5-20 years)' },
          { value: 'older', label: 'Older (20-50 years)' },
          { value: 'historic', label: 'Historic (50+ years)' },
        ],
      },
      {
        name: 'additionalServices',
        label: 'Additional Services',
        type: 'select',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'radon', label: 'Radon Testing' },
          { value: 'mold', label: 'Mold Inspection' },
          { value: 'termite', label: 'Termite Inspection' },
          { value: 'sewer', label: 'Sewer Scope' },
          { value: 'multiple', label: 'Multiple Add-ons' },
        ],
      },
      {
        name: 'location',
        label: 'Location Type',
        type: 'select',
        defaultValue: 'suburban',
        options: [
          { value: 'rural', label: 'Rural Area' },
          { value: 'suburban', label: 'Suburban Area' },
          { value: 'urban', label: 'Urban/Metro Area' },
        ],
      },
    ],
    results: [
      { label: "Base Inspection Fee", isCurrency: true },
      { label: "Age/Complexity Adjustment", isCurrency: true },
      { label: "Additional Services", isCurrency: true },
      { label: "Total Estimated Cost", isCurrency: true }
    ],
    calculate: (data) => {
      const { squareFeet, propertyAge, additionalServices, location } = data;
      
      // Base fee calculation by size
      let baseFee = 300;
      if (squareFeet < 1500) baseFee = 300;
      else if (squareFeet < 2500) baseFee = 400;
      else if (squareFeet < 4000) baseFee = 550;
      else baseFee = 750;
      
      // Location adjustment
      const locationMultipliers: Record<string, number> = {
        rural: 1.0,
        suburban: 1.0,
        urban: 1.15,
      };
      
      baseFee *= locationMultipliers[location] || 1.0;
      
      // Age/complexity adjustment
      const ageMultipliers: Record<string, number> = {
        new: 1.0,
        modern: 1.0,
        older: 1.15,
        historic: 1.3,
      };
      
      const ageMultiplier = ageMultipliers[propertyAge] || 1.0;
      const ageAdjustment = baseFee * (ageMultiplier - 1);
      
      // Additional services costs
      const serviceCosts: Record<string, number> = {
        none: 0,
        radon: 200,
        mold: 450,
        termite: 100,
        sewer: 225,
        multiple: 600,
      };
      
      const additionalCost = serviceCosts[additionalServices] || 0;
      
      const total = (baseFee * ageMultiplier) + additionalCost;
      
      return [
        { label: 'Base Inspection Fee', value: `$${Math.round(baseFee).toLocaleString()}` },
        { label: 'Age/Complexity Adjustment', value: ageAdjustment > 0 ? `+$${Math.round(ageAdjustment).toLocaleString()}` : '$0' },
        { label: 'Additional Services', value: additionalCost > 0 ? `$${additionalCost.toLocaleString()}` : 'None' },
        { label: 'Total Estimated Cost', value: `$${Math.round(total).toLocaleString()}` }
      ];
    },
  },
};
