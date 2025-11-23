import { CalculatorContent } from '@/types';

export const LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Land Surveyor Fee Estimator',
  description: 'Estimate land surveying costs including boundary surveys, topographic surveys, ALTA surveys, and subdivision plats based on property characteristics.',
  icon: '🗺️',
  category: 'Legal & Compliance',
  slug: 'land-surveyor-fee-estimator',
  article: {
    title: 'Understanding Land Survey Costs',
    content: `
<h2>Types of Land Surveys</h2>
<p>Land surveys establish property boundaries, identify easements, and provide critical information for real estate transactions. Costs vary significantly by survey type and property characteristics.</p>

<h3>Common Survey Types and Costs</h3>
<ul>
  <li><strong>Boundary Survey:</strong> $500-$1,500 - Establishes property lines</li>
  <li><strong>Topographic Survey:</strong> $1,000-$3,000 - Maps elevation and features</li>
  <li><strong>ALTA Survey:</strong> $2,000-$5,000 - Comprehensive commercial survey</li>
  <li><strong>Subdivision Plat:</strong> $3,000-$10,000+ - Dividing land into lots</li>
  <li><strong>Mortgage Survey:</strong> $400-$800 - Basic location survey for lenders</li>
</ul>

<h3>Factors Affecting Survey Costs</h3>
<ul>
  <li>Property size and terrain</li>
  <li>Vegetation and accessibility</li>
  <li>Survey complexity and type</li>
  <li>Research required for property history</li>
  <li>Local market rates</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'surveyType',
        label: 'Survey Type',
        type: 'select',
        defaultValue: 'boundary',
        options: [
          { value: 'mortgage', label: 'Mortgage Survey' },
          { value: 'boundary', label: 'Boundary Survey' },
          { value: 'topographic', label: 'Topographic Survey' },
          { value: 'alta', label: 'ALTA/Commercial Survey' },
          { value: 'subdivision', label: 'Subdivision Plat' },
        ],
      },
      {
        name: 'acreage',
        label: 'Property Size',
        type: 'select',
        defaultValue: 'quarterAcre',
        options: [
          { value: 'small', label: 'Small Lot (< 0.25 acres)' },
          { value: 'quarterAcre', label: '0.25-1 acre' },
          { value: '1to5', label: '1-5 acres' },
          { value: '5to20', label: '5-20 acres' },
          { value: 'large', label: '20+ acres' },
        ],
      },
      {
        name: 'terrain',
        label: 'Terrain & Accessibility',
        type: 'select',
        defaultValue: 'moderate',
        options: [
          { value: 'easy', label: 'Flat, Clear, Easy Access' },
          { value: 'moderate', label: 'Some Vegetation/Slopes' },
          { value: 'difficult', label: 'Dense Vegetation/Steep/Remote' },
        ],
      },
      {
        name: 'location',
        label: 'Location',
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
      { label: "Base Survey Fee", isCurrency: true },
      { label: "Terrain Adjustment", isCurrency: true },
      { label: "Size Adjustment", isCurrency: true },
      { label: "Total Estimated Cost", isCurrency: true }
    ],
    calculate: (data) => {
      const { surveyType, acreage, terrain, location } = data;
      
      // Base fees by survey type
      const baseFees: Record<string, number> = {
        mortgage: 500,
        boundary: 800,
        topographic: 1500,
        alta: 3000,
        subdivision: 5000,
      };
      
      let baseFee = baseFees[surveyType] || 800;
      
      // Location multiplier
      const locationMultipliers: Record<string, number> = {
        rural: 0.9,
        suburban: 1.0,
        urban: 1.2,
      };
      
      baseFee *= locationMultipliers[location] || 1.0;
      
      // Terrain adjustment
      const terrainMultipliers: Record<string, number> = {
        easy: 1.0,
        moderate: 1.2,
        difficult: 1.5,
      };
      
      const terrainMultiplier = terrainMultipliers[terrain] || 1.0;
      const terrainAdjustment = baseFee * (terrainMultiplier - 1);
      
      // Size adjustment
      const sizeMultipliers: Record<string, number> = {
        small: 1.0,
        quarterAcre: 1.0,
        '1to5': 1.3,
        '5to20': 1.6,
        large: 2.0,
      };
      
      const sizeMultiplier = sizeMultipliers[acreage] || 1.0;
      const sizeAdjustment = baseFee * (sizeMultiplier - 1);
      
      const total = (baseFee * terrainMultiplier * sizeMultiplier);
      
      return [
        { label: 'Base Survey Fee', value: `$${Math.round(baseFee).toLocaleString()}` },
        { label: 'Terrain Adjustment', value: terrainAdjustment > 0 ? `+$${Math.round(terrainAdjustment).toLocaleString()}` : '$0' },
        { label: 'Size Adjustment', value: sizeAdjustment > 0 ? `+$${Math.round(sizeAdjustment).toLocaleString()}` : '$0' },
        { label: 'Total Estimated Cost', value: `$${Math.round(total).toLocaleString()}` }
      ];
    },
  },
};
