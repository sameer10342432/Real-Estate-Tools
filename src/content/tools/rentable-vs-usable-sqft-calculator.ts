import { CalculatorContent } from '@/types';

export const RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rentable vs. Usable Square Footage Calculator',
  description: 'Compare rentable and usable square footage in commercial leases. Calculate load factor, efficiency ratio, and true cost per usable square foot.',
  slug: 'rentable-vs-usable-sqft-calculator',
  icon: '📐',
  category: 'Commercial Real Estate',
  article: {
    title: 'Rentable vs. Usable Square Footage: Complete Guide',
    content: `
    <h2>Understanding the Difference</h2>
    <p>In commercial real estate, understanding the distinction between rentable and usable square footage is crucial for making informed leasing decisions and accurately comparing properties.</p>
    
    <h3>Definitions</h3>
    <ul>
      <li><strong>Usable Square Footage (USF):</strong> The actual interior space that the tenant occupies and uses exclusively. This includes private offices, conference rooms, work areas, and private storage within the suite.</li>
      <li><strong>Rentable Square Footage (RSF):</strong> The usable square footage PLUS the tenant's proportionate share of common areas like lobbies, hallways, restrooms, and elevator shafts.</li>
      <li><strong>Common Area Factor:</strong> The multiplier used to convert usable to rentable square footage.</li>
    </ul>

    <h3>The Math Behind It</h3>
    <p><strong>Rentable SF = Usable SF × (1 + Load Factor)</strong></p>
    <p><strong>Load Factor = (Rentable SF - Usable SF) ÷ Usable SF</strong></p>
    <p><strong>Efficiency Ratio = Usable SF ÷ Rentable SF</strong></p>

    <h3>Why This Matters</h3>
    <ul>
      <li><strong>Rent Calculation:</strong> Rent is always calculated on rentable SF, not usable SF</li>
      <li><strong>True Cost Analysis:</strong> A lower rent per SF with high load factor may cost more than higher rent with low load factor</li>
      <li><strong>Space Planning:</strong> You can only use the usable SF for furniture and employees</li>
      <li><strong>Operating Expenses:</strong> CAM charges and other costs are often based on rentable SF</li>
      <li><strong>Property Comparison:</strong> Compare apples-to-apples when evaluating different buildings</li>
    </ul>

    <h3>Industry Standards by Building Type</h3>
    <table>
      <tr>
        <th>Property Type</th>
        <th>Typical Load Factor</th>
        <th>Efficiency Ratio</th>
      </tr>
      <tr>
        <td>Class A Office (Modern)</td>
        <td>10-15%</td>
        <td>85-90%</td>
      </tr>
      <tr>
        <td>Class B Office</td>
        <td>15-20%</td>
        <td>80-85%</td>
      </tr>
      <tr>
        <td>Medical Office</td>
        <td>12-18%</td>
        <td>82-88%</td>
      </tr>
      <tr>
        <td>Retail (Strip Center)</td>
        <td>5-10%</td>
        <td>90-95%</td>
      </tr>
      <tr>
        <td>Shopping Mall</td>
        <td>15-25%</td>
        <td>75-85%</td>
      </tr>
      <tr>
        <td>Industrial/Warehouse</td>
        <td>0-5%</td>
        <td>95-100%</td>
      </tr>
    </table>

    <h3>Real-World Example</h3>
    <p>Scenario: Comparing two office spaces</p>
    <ul>
      <li><strong>Building A:</strong> 5,000 USF, 5,500 RSF, $30/SF = $165,000/year ($33/usable SF)</li>
      <li><strong>Building B:</strong> 5,000 USF, 6,000 RSF, $28/SF = $168,000/year ($33.60/usable SF)</li>
    </ul>
    <p>Building A appears more expensive ($30 vs $28), but it's actually cheaper when accounting for load factor!</p>

    <h3>BOMA Measurement Standards</h3>
    <p>The Building Owners and Managers Association (BOMA) provides standardized measurement methods:</p>
    <ul>
      <li><strong>BOMA 2017 for Office Buildings:</strong> Most widely used standard</li>
      <li><strong>Method A (Legacy Method):</strong> Adds building common areas to floor common areas</li>
      <li><strong>Method B (Single Load Factor):</strong> Uses one factor for all common areas</li>
      <li><strong>Always ask which method landlord uses</strong></li>
    </ul>

    <h3>What's Included in Common Areas</h3>
    <ul>
      <li>Main building lobbies</li>
      <li>Floor lobbies and corridors</li>
      <li>Public restrooms</li>
      <li>Elevator shafts and machine rooms</li>
      <li>Stairwells and fire exits</li>
      <li>Mechanical and electrical rooms</li>
      <li>Janitorial closets</li>
      <li>Common area storage</li>
      <li>Building management offices</li>
    </ul>

    <h3>Negotiation Tips</h3>
    <ul>
      <li><strong>Request Documentation:</strong> Ask for BOMA measurement report</li>
      <li><strong>Verify Measurements:</strong> Hire independent space planner to verify</li>
      <li><strong>Negotiate on Usable SF:</strong> Try to base rent on usable SF instead</li>
      <li><strong>Cap the Load Factor:</strong> Negotiate maximum load factor in lease</li>
      <li><strong>Remeasurement Rights:</strong> Include rights to remeasure if building is renovated</li>
    </ul>

    <h3>Red Flags</h3>
    <ul>
      <li>Load factor exceeding 20% for office space</li>
      <li>Landlord unwilling to provide measurement documentation</li>
      <li>Inconsistent measurement methods between floors</li>
      <li>Building common areas included in suite measurements</li>
      <li>Load factor increasing during lease term</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your space details to understand the true economics:</p>
    <ul>
      <li><strong>Usable Square Footage:</strong> Interior space you can actually use</li>
      <li><strong>Rentable Square Footage:</strong> Space you're paying rent on</li>
      <li><strong>Quoted Rent Per SF:</strong> Annual rent per rentable square foot</li>
      <li><strong>Additional Costs Per SF:</strong> CAM, utilities, and other operating expenses</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'usableSqFt',
        label: 'Usable Square Footage',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'rentableSqFt',
        label: 'Rentable Square Footage',
        type: 'number',
        defaultValue: 5750,
      },
      {
        name: 'rentPerRentableSF',
        label: 'Annual Rent Per Rentable SF ($)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'additionalCostsPerSF',
        label: 'Additional Costs Per RSF (CAM, etc.) ($)',
        type: 'number',
        defaultValue: 8,
      },
    ],
    results: [
      { label: 'Load Factor (%)', isCurrency: false },
      { label: 'Efficiency Ratio (%)', isCurrency: false },
      { label: 'Common Area SF Allocated', isCurrency: false },
      { label: 'Total Annual Rent', isCurrency: true },
      { label: 'Effective Rent Per Usable SF', isCurrency: true },
      { label: 'Total Annual Occupancy Cost', isCurrency: true },
      { label: 'True Cost Per Usable SF', isCurrency: true },
      { label: 'Monthly Cost', isCurrency: true },
    ],
    calculate: (values) => {
      const { usableSqFt, rentableSqFt, rentPerRentableSF, additionalCostsPerSF } = values;
      
      // Calculate load factor and efficiency
      const loadFactor = ((rentableSqFt - usableSqFt) / usableSqFt) * 100;
      const efficiencyRatio = (usableSqFt / rentableSqFt) * 100;
      const commonAreaSF = rentableSqFt - usableSqFt;
      
      // Calculate costs
      const totalAnnualRent = rentableSqFt * rentPerRentableSF;
      const effectiveRentPerUsableSF = totalAnnualRent / usableSqFt;
      
      const totalAdditionalCosts = rentableSqFt * additionalCostsPerSF;
      const totalAnnualOccupancyCost = totalAnnualRent + totalAdditionalCosts;
      const trueCostPerUsableSF = totalAnnualOccupancyCost / usableSqFt;
      const monthlyCost = totalAnnualOccupancyCost / 12;

      return [
        { label: 'Load Factor (%)', value: loadFactor.toFixed(2), isCurrency: false },
        { label: 'Efficiency Ratio (%)', value: efficiencyRatio.toFixed(2), isCurrency: false },
        { label: 'Common Area SF Allocated', value: commonAreaSF.toFixed(0), isCurrency: false },
        { label: 'Total Annual Rent', value: totalAnnualRent.toFixed(2), isCurrency: true },
        { label: 'Effective Rent Per Usable SF', value: effectiveRentPerUsableSF.toFixed(2), isCurrency: true },
        { label: 'Total Annual Occupancy Cost', value: totalAnnualOccupancyCost.toFixed(2), isCurrency: true },
        { label: 'True Cost Per Usable SF', value: trueCostPerUsableSF.toFixed(2), isCurrency: true },
        { label: 'Monthly Cost', value: monthlyCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
