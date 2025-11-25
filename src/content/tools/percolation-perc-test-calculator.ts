import { CalculatorContent } from '@/types';

const PERCOLATION_PERC_TEST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Percolation (Perc) Test Calculator',
  description: 'Calculate percolation test costs, analyze septic system requirements, and understand soil absorption rates for land development.',
  icon: 'Icon',
  slug: 'percolation-perc-test-calculator',
  category: 'Additional Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'propertySize',
        label: 'Property Size (Acres)',
        type: 'number',
        defaultValue: '2',
      },
      {
        name: 'numberOfBedrooms',
        label: 'Planned Bedrooms in Home',
        type: 'number',
        defaultValue: '3',
      },
      {
        name: 'testLocations',
        label: 'Number of Test Locations',
        type: 'number',
        defaultValue: '3',
      },
      {
        name: 'soilType',
        label: 'Expected Soil Type',
        type: 'select',
        options: [
          { value: 'sandy', label: 'Sandy (Fast Drainage)' },
          { value: 'loam', label: 'Loam (Moderate Drainage)' },
          { value: 'clay', label: 'Clay (Slow Drainage)' },
          { value: 'rocky', label: 'Rocky/Variable' },
          { value: 'unknown', label: 'Unknown' },
        ],
        defaultValue: 'loam',
      },
      {
        name: 'terrain',
        label: 'Property Terrain',
        type: 'select',
        options: [
          { value: 'flat', label: 'Flat/Level' },
          { value: 'sloped', label: 'Moderate Slope' },
          { value: 'steep', label: 'Steep Slope' },
        ],
        defaultValue: 'flat',
      },
      {
        name: 'includesEngineering',
        label: 'Include Engineering Report',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No (Basic Test Only)' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'healthDeptReview',
        label: 'Health Department Review Required',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
    ],
    calculate: (values) => {
      const propertySize = Number(values.propertySize);
      const bedrooms = Number(values.numberOfBedrooms);
      const testLocations = Number(values.testLocations);
      const soilType = values.soilType;
      const terrain = values.terrain;
      const includesEngineering = values.includesEngineering === 'yes';
      const healthDeptReview = values.healthDeptReview === 'yes';

      // Base perc test cost per location
      let perLocationCost = 200;

      // Terrain multiplier
      let terrainMultiplier = 1;
      if (terrain === 'sloped') terrainMultiplier = 1.3;
      else if (terrain === 'steep') terrainMultiplier = 1.6;

      // Soil complexity multiplier
      let soilMultiplier = 1;
      if (soilType === 'clay') soilMultiplier = 1.4;
      else if (soilType === 'rocky' || soilType === 'unknown') soilMultiplier = 1.5;

      // Calculate perc test cost
      const percTestCost = perLocationCost * testLocations * terrainMultiplier * soilMultiplier;

      // Engineering report cost
      const engineeringCost = includesEngineering ? 800 : 0;

      // Health department fees
      const healthDeptFee = healthDeptReview ? 350 : 0;

      // Soil analysis (optional but recommended)
      const soilAnalysisCost = 200;

      // Total testing cost
      const totalTestingCost = percTestCost + engineeringCost + healthDeptFee + soilAnalysisCost;

      // Estimated septic system size needed
      const gallonsPerDay = bedrooms * 150; // 150 gallons/day per bedroom typical
      let septicTankSize = 1000;
      if (bedrooms <= 2) septicTankSize = 750;
      else if (bedrooms === 3) septicTankSize = 1000;
      else if (bedrooms === 4) septicTankSize = 1200;
      else septicTankSize = 1500;

      // Estimated septic system cost (if test passes)
      let septicSystemCost = 0;
      if (soilType === 'sandy') septicSystemCost = 8000 + (bedrooms * 1500);
      else if (soilType === 'loam') septicSystemCost = 10000 + (bedrooms * 2000);
      else if (soilType === 'clay') septicSystemCost = 15000 + (bedrooms * 3000); // May need engineered system
      else if (soilType === 'rocky') septicSystemCost = 18000 + (bedrooms * 3500); // Complex installation
      else septicSystemCost = 12000 + (bedrooms * 2500);

      // Pass/fail likelihood
      let passLikelihood = 'Moderate';
      if (soilType === 'sandy' && terrain !== 'steep') passLikelihood = 'High';
      else if (soilType === 'clay' || terrain === 'steep') passLikelihood = 'Low to Moderate';
      else if (soilType === 'rocky') passLikelihood = 'Variable';

      // Alternative system cost if fails
      const alternativeSystemCost = septicSystemCost * 1.8; // Engineered systems more expensive

      // Testing as % of septic cost
      const testingPercentage = (totalTestingCost / septicSystemCost) * 100;

      // Timeline
      const testingTimeline = '2-4 weeks';
      const approvalTimeline = healthDeptReview ? '4-8 weeks total' : testingTimeline;

      return [
        {
          label: 'Percolation Test Cost',
          value: `$${percTestCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${testLocations} locations)`,
        },
        {
          label: 'Engineering Report',
          value: `$${engineeringCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Health Department Review Fee',
          value: `$${healthDeptFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Soil Analysis (Recommended)',
          value: `$${soilAnalysisCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Testing & Approval Cost',
          value: `$${totalTestingCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Required Septic Tank Size',
          value: `${septicTankSize} gallons (${bedrooms} bedroom${bedrooms !== 1 ? 's' : ''})`,
        },
        {
          label: 'Daily Flow Requirement',
          value: `${gallonsPerDay} gallons/day`,
        },
        {
          label: 'Estimated Standard Septic System Cost',
          value: `$${septicSystemCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Alternative/Engineered System Cost (if test fails)',
          value: `$${alternativeSystemCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Testing Cost as % of Septic System',
          value: `${testingPercentage.toFixed(1)}%`,
        },
        {
          label: 'Likelihood of Passing Test',
          value: passLikelihood,
          isHighlighted: passLikelihood.includes('Low'),
        },
        {
          label: 'Estimated Timeline',
          value: approvalTimeline,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Percolation Tests and Septic System Requirements',
    content: `
      <h2>What is a Percolation Test?</h2>
      <p>A percolation test (perc test or perk test) measures how quickly water drains through soil to determine if the land can support a septic system. The test evaluates soil absorption rate, which is critical for septic system design and health department approval.</p>

      <h3>When You Need a Perc Test</h3>
      <ul>
        <li><strong>Building on Vacant Land:</strong> Required before constructing home with septic system</li>
        <li><strong>Septic System Replacement:</strong> Needed when replacing failed system</li>
        <li><strong>Property Subdivision:</strong> Each new lot must pass perc test</li>
        <li><strong>Health Department Requirement:</strong> Mandatory for septic permit</li>
        <li><strong>Loan Contingency:</strong> Lender may require successful test before funding</li>
        <li><strong>Property Purchase:</strong> Due diligence for vacant land purchases</li>
      </ul>

      <h3>How Percolation Tests Work</h3>
      <ol>
        <li><strong>Dig Test Holes:</strong> Excavate 3-6 holes in proposed drain field area</li>
        <li><strong>Pre-Soak:</strong> Fill holes with water and let soak overnight</li>
        <li><strong>Measure Drainage:</strong> Refill holes and measure water level drop over time</li>
        <li><strong>Calculate Rate:</strong> Determine minutes per inch (MPI) drainage rate</li>
        <li><strong>Analyze Results:</strong> Evaluate if soil meets local health codes</li>
        <li><strong>Submit Report:</strong> Engineer prepares report for health department</li>
      </ol>

      <h3>Perc Test Cost Factors</h3>
      <ul>
        <li><strong>Number of Test Holes:</strong> $150-$300 per hole typical</li>
        <li><strong>Terrain Difficulty:</strong> Steep or rocky land costs more</li>
        <li><strong>Accessibility:</strong> Remote locations increase cost</li>
        <li><strong>Soil Conditions:</strong> Rocky or hard clay requires more work</li>
        <li><strong>Engineering Report:</strong> $500-$1,500 for professional analysis</li>
        <li><strong>Health Department Fees:</strong> $200-$500 for review/permit</li>
      </ul>

      <h3>Ideal Perc Test Results</h3>
      <table>
        <tr>
          <th>Drainage Rate (MPI)</th>
          <th>Soil Type</th>
          <th>Septic Suitability</th>
          <th>System Type</th>
        </tr>
        <tr>
          <td>&lt; 5 minutes</td>
          <td>Sandy/Gravel</td>
          <td>Too Fast - May Fail</td>
          <td>May need special design</td>
        </tr>
        <tr>
          <td>5-30 minutes</td>
          <td>Sandy Loam</td>
          <td>Excellent</td>
          <td>Standard system</td>
        </tr>
        <tr>
          <td>30-60 minutes</td>
          <td>Loam/Silt</td>
          <td>Good</td>
          <td>Standard system</td>
        </tr>
        <tr>
          <td>60-120 minutes</td>
          <td>Clay Loam</td>
          <td>Marginal</td>
          <td>Larger drain field</td>
        </tr>
        <tr>
          <td>&gt; 120 minutes</td>
          <td>Heavy Clay</td>
          <td>Poor - Likely Fail</td>
          <td>Engineered system</td>
        </tr>
      </table>

      <h3>What Happens if You Fail the Perc Test</h3>
      <ul>
        <li><strong>Engineered Septic System:</strong> More expensive advanced system ($20K-$50K)</li>
        <li><strong>Mound System:</strong> Built-up drain field ($15K-$35K)</li>
        <li><strong>Aerobic Treatment:</strong> Mechanical system requiring electricity ($10K-$25K)</li>
        <li><strong>Sand Filter System:</strong> Additional filtration layer ($12K-$30K)</li>
        <li><strong>Alternative Site:</strong> Test different location on property</li>
        <li><strong>Property Unusable:</strong> May not be buildable without sewer connection</li>
      </ul>

      <h3>Septic System Size Requirements</h3>
      <p>Minimum septic tank sizes by bedroom count:</p>
      <ul>
        <li><strong>1-2 Bedrooms:</strong> 750-gallon tank minimum</li>
        <li><strong>3 Bedrooms:</strong> 1,000-gallon tank minimum</li>
        <li><strong>4 Bedrooms:</strong> 1,200-gallon tank minimum</li>
        <li><strong>5 Bedrooms:</strong> 1,500-gallon tank minimum</li>
        <li><strong>Each Additional Bedroom:</strong> Add 150-200 gallons</li>
      </ul>

      <h3>Standard Septic System Costs</h3>
      <ul>
        <li><strong>1-2 Bedroom Home:</strong> $8,000-$12,000</li>
        <li><strong>3 Bedroom Home:</strong> $10,000-$15,000</li>
        <li><strong>4 Bedroom Home:</strong> $12,000-$18,000</li>
        <li><strong>5+ Bedroom Home:</strong> $15,000-$25,000</li>
        <li><strong>Engineered Systems:</strong> $20,000-$50,000+</li>
        <li><strong>Mound Systems:</strong> $15,000-$35,000</li>
      </ul>

      <h3>Perc Test Timeline</h3>
      <ul>
        <li><strong>Scheduling:</strong> 1-2 weeks to arrange testing</li>
        <li><strong>Field Testing:</strong> 2-3 days (including pre-soak)</li>
        <li><strong>Engineering Report:</strong> 1-2 weeks after testing</li>
        <li><strong>Health Department Review:</strong> 2-6 weeks for approval</li>
        <li><strong>Total Time:</strong> 1-3 months from start to permit</li>
      </ul>

      <h3>Factors Affecting Test Results</h3>
      <ul>
        <li><strong>Seasonal Water Table:</strong> High water table can cause failure</li>
        <li><strong>Recent Rainfall:</strong> Wet conditions skew results</li>
        <li><strong>Soil Compaction:</strong> Heavy equipment can compact soil</li>
        <li><strong>Bedrock Depth:</strong> Shallow bedrock limits drain field</li>
        <li><strong>Slope:</strong> Steep slopes complicate drain field placement</li>
        <li><strong>Property Size:</strong> Need adequate space for drain field and reserve area</li>
      </ul>

      <h3>Best Time to Conduct Perc Test</h3>
      <ul>
        <li><strong>Late Summer/Fall:</strong> Generally ideal timing</li>
        <li><strong>Dry Conditions:</strong> Wait 3-5 days after heavy rain</li>
        <li><strong>Before Purchase:</strong> Include as contingency in offer</li>
        <li><strong>Frozen Ground:</strong> Avoid winter in cold climates</li>
        <li><strong>Multiple Seasons:</strong> Some jurisdictions require testing in wet season</li>
      </ul>

      <h3>Reserve Drain Field Area</h3>
      <p>Most health departments require a reserve area:</p>
      <ul>
        <li>Equal size to primary drain field</li>
        <li>Must also pass perc test</li>
        <li>Kept clear for future use if primary fails</li>
        <li>Cannot be built on or paved</li>
        <li>Typically doubles required lot size</li>
      </ul>

      <h3>Property Purchase Considerations</h3>
      <ul>
        <li><strong>Vacant Land:</strong> Always make offer contingent on successful perc test</li>
        <li><strong>Failed Test History:</strong> Ask if property previously failed</li>
        <li><strong>Neighboring Properties:</strong> Check if neighbors have septic issues</li>
        <li><strong>Alternative Systems:</strong> Factor higher costs if standard system won't work</li>
        <li><strong>Lot Size:</strong> Ensure adequate space for system plus reserve</li>
        <li><strong>Sewer Availability:</strong> Check if public sewer connection possible</li>
      </ul>

      <h3>Red Flags for Land Purchases</h3>
      <p>Be cautious if:</p>
      <ul>
        <li>Property previously failed perc test</li>
        <li>Neighboring lots have engineered systems</li>
        <li>High water table or wetlands present</li>
        <li>Very small lot size (&lt;1 acre in most areas)</li>
        <li>Rocky or extremely clay soil visible</li>
        <li>Seller refuses to allow pre-purchase testing</li>
        <li>Property priced well below similar lots</li>
      </ul>

      <h3>State and Local Regulations</h3>
      <ul>
        <li>Minimum lot sizes vary (typically 1-5 acres)</li>
        <li>Setback requirements from wells, water, property lines</li>
        <li>Specific perc rate requirements vary by jurisdiction</li>
        <li>Some areas require multiple tests in different seasons</li>
        <li>Professional engineer may be required for testing</li>
        <li>Health department permits mandatory before installation</li>
      </ul>

      <h3>Septic System Setback Requirements (Typical)</h3>
      <ul>
        <li><strong>From Wells:</strong> 100 feet minimum</li>
        <li><strong>From Surface Water:</strong> 50-100 feet</li>
        <li><strong>From Property Lines:</strong> 10-20 feet</li>
        <li><strong>From Buildings:</strong> 10-20 feet</li>
        <li><strong>From Trees:</strong> 10 feet</li>
        <li><strong>From Water Lines:</strong> 10 feet</li>
      </ul>

      <h3>Alternative Options if Land Won't Perc</h3>
      <ul>
        <li><strong>Connect to Public Sewer:</strong> If available nearby (may be expensive)</li>
        <li><strong>Engineered System:</strong> Advanced treatment systems for poor soils</li>
        <li><strong>Shared System:</strong> Combine with neighbor's system (if allowed)</li>
        <li><strong>Seek Variance:</strong> Request exception from health department (rarely granted)</li>
        <li><strong>Resell Property:</strong> Market as recreational or agricultural land</li>
      </ul>

      <h3>Maintaining Your Septic System</h3>
      <ul>
        <li>Pump tank every 3-5 years ($300-$500)</li>
        <li>Avoid driving over drain field</li>
        <li>Don't plant trees near system</li>
        <li>Use water efficiently</li>
        <li>Avoid harsh chemicals and antibacterial soaps</li>
        <li>Never flush non-biodegradables</li>
        <li>Inspect system annually</li>
      </ul>

      <p>Use this calculator to estimate percolation test costs and understand septic system requirements for your property development or land purchase.</p>
    `
  },
};

export { PERCOLATION_PERC_TEST_CALCULATOR_CONTENT };
