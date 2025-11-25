import { CalculatorContent } from '@/types';

const ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Elevation Certificate (Flood) Calculator',
  description: 'Calculate elevation certificate costs, analyze flood insurance savings, and understand FEMA flood zone requirements for properties.',
  icon: 'Icon',
  slug: 'elevation-certificate-flood-calculator',
  category: 'Additional Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value ($)',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'floodZone',
        label: 'FEMA Flood Zone',
        type: 'select',
        options: [
          { value: 'X', label: 'Zone X (Minimal Risk)' },
          { value: 'B-C', label: 'Zone B/C (Moderate Risk)' },
          { value: 'AE', label: 'Zone AE (High Risk - Flood Insurance Required)' },
          { value: 'VE', label: 'Zone V/VE (Coastal High Risk)' },
          { value: 'A', label: 'Zone A (High Risk - No BFE)' },
        ],
        defaultValue: 'AE',
      },
      {
        name: 'hasMortgage',
        label: 'Has Mortgage',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No (Cash Purchase)' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'foundationType',
        label: 'Foundation Type',
        type: 'select',
        options: [
          { value: 'slab', label: 'Slab on Grade' },
          { value: 'crawl', label: 'Crawl Space' },
          { value: 'basement', label: 'Basement' },
          { value: 'elevated', label: 'Elevated/Piers' },
        ],
        defaultValue: 'slab',
      },
      {
        name: 'certPurpose',
        label: 'Purpose of Certificate',
        type: 'select',
        options: [
          { value: 'insurance', label: 'Reduce Insurance Premium' },
          { value: 'loma', label: 'LOMA Application (Remove from Flood Zone)' },
          { value: 'compliance', label: 'Lender Requirement' },
          { value: 'construction', label: 'New Construction/Renovation' },
        ],
        defaultValue: 'insurance',
      },
    ],
    calculate: (values) => {
      const propertyValue = Number(values.propertyValue);
      const floodZone = values.floodZone;
      const hasMortgage = values.hasMortgage === 'yes';
      const foundationType = values.foundationType;
      const certPurpose = values.certPurpose;

      // Base elevation certificate cost
      let certCost = 500;
      if (foundationType === 'basement' || foundationType === 'elevated') {
        certCost = 750; // More complex
      }

      // Annual flood insurance cost (estimates)
      let annualInsurance = 0;
      if (floodZone === 'X') {
        annualInsurance = 450; // Preferred risk policy
      } else if (floodZone === 'B-C') {
        annualInsurance = 600;
      } else if (floodZone === 'AE') {
        annualInsurance = 2500; // High risk
      } else if (floodZone === 'VE') {
        annualInsurance = 4000; // Coastal high risk
      } else if (floodZone === 'A') {
        annualInsurance = 3000;
      }

      // Potential insurance reduction with good elevation
      let potentialReduction = 0;
      if (certPurpose === 'insurance' && (floodZone === 'AE' || floodZone === 'VE' || floodZone === 'A')) {
        if (foundationType === 'elevated') {
          potentialReduction = annualInsurance * 0.5; // 50% reduction
        } else if (foundationType === 'crawl') {
          potentialReduction = annualInsurance * 0.3; // 30% reduction
        } else {
          potentialReduction = annualInsurance * 0.15; // 15% reduction
        }
      }

      // Reduced annual insurance
      const reducedInsurance = annualInsurance - potentialReduction;

      // ROI calculation
      const annualSavings = potentialReduction;
      const yearsToBreakEven = annualSavings > 0 ? certCost / annualSavings : 0;
      const fiveYearSavings = annualSavings * 5;
      const tenYearSavings = annualSavings * 10;

      // LOMA likelihood
      const lomaLikely = certPurpose === 'loma' && (floodZone === 'AE' || floodZone === 'A');

      // Required or optional
      const required = hasMortgage && (floodZone === 'AE' || floodZone === 'VE' || floodZone === 'A');

      // Additional costs
      const lomaApplicationFee = certPurpose === 'loma' ? 475 : 0;
      const totalUpfrontCost = certCost + lomaApplicationFee;

      // Risk assessment
      let floodRisk = 'Low';
      if (floodZone === 'VE') floodRisk = 'Very High';
      else if (floodZone === 'AE' || floodZone === 'A') floodRisk = 'High';
      else if (floodZone === 'B-C') floodRisk = 'Moderate';

      return [
        {
          label: 'Elevation Certificate Cost',
          value: `$${certCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'LOMA Application Fee (if applicable)',
          value: `$${lomaApplicationFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Upfront Cost',
          value: `$${totalUpfrontCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Current Annual Flood Insurance',
          value: `$${annualInsurance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Potential Annual Savings',
          value: `$${potentialReduction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: potentialReduction > 0,
        },
        {
          label: 'Reduced Annual Insurance (Estimated)',
          value: `$${reducedInsurance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Years to Break Even',
          value: yearsToBreakEven > 0 ? `${yearsToBreakEven.toFixed(1)} years` : 'N/A',
        },
        {
          label: '5-Year Cumulative Savings',
          value: `$${fiveYearSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: '10-Year Cumulative Savings',
          value: `$${tenYearSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Flood Insurance Required by Lender',
          value: required ? 'Yes - Mandatory' : 'No - Optional',
          isHighlighted: required,
        },
        {
          label: 'Flood Risk Level',
          value: floodRisk,
          isHighlighted: floodRisk === 'High' || floodRisk === 'Very High',
        },
        {
          label: 'LOMA Success Likelihood',
          value: lomaLikely ? 'Possible with Proper Documentation' : 'Not Applicable',
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Elevation Certificates and Flood Insurance',
    content: `
      <h2>What is an Elevation Certificate?</h2>
      <p>An Elevation Certificate (EC) is an official FEMA document that provides elevation information necessary to ensure compliance with community floodplain management ordinances and to determine accurate flood insurance premium rates. The certificate must be completed by a licensed land surveyor or engineer.</p>

      <h3>When You Need an Elevation Certificate</h3>
      <ul>
        <li><strong>Flood Insurance Purchase:</strong> May reduce premiums significantly</li>
        <li><strong>Lender Requirement:</strong> Required for properties in high-risk flood zones</li>
        <li><strong>New Construction:</strong> Mandatory before certificate of occupancy</li>
        <li><strong>Substantial Improvement:</strong> Required when renovating >50% of property value</li>
        <li><strong>LOMA/LOMR:</strong> Apply to remove property from flood zone</li>
        <li><strong>Building Permit:</strong> May be required in floodplain areas</li>
        <li><strong>Property Sale:</strong> Can increase property value and marketability</li>
      </ul>

      <h3>Understanding FEMA Flood Zones</h3>
      <table>
        <tr>
          <th>Zone</th>
          <th>Risk Level</th>
          <th>Insurance Required?</th>
          <th>Typical Premium</th>
        </tr>
        <tr>
          <td>X (Shaded/Unshaded)</td>
          <td>Minimal/Low</td>
          <td>No (Recommended)</td>
          <td>$400-$600/year</td>
        </tr>
        <tr>
          <td>B/C</td>
          <td>Moderate</td>
          <td>No (Recommended)</td>
          <td>$500-$800/year</td>
        </tr>
        <tr>
          <td>A</td>
          <td>High (no BFE determined)</td>
          <td>Yes (if mortgage)</td>
          <td>$2,500-$4,000/year</td>
        </tr>
        <tr>
          <td>AE</td>
          <td>High (BFE determined)</td>
          <td>Yes (if mortgage)</td>
          <td>$2,000-$3,500/year</td>
        </tr>
        <tr>
          <td>V/VE</td>
          <td>Coastal High Hazard</td>
          <td>Yes (if mortgage)</td>
          <td>$3,500-$6,000/year</td>
        </tr>
      </table>

      <h3>What's Included in an Elevation Certificate</h3>
      <p>A complete EC includes:</p>
      <ul>
        <li>Building diagram with elevation measurements</li>
        <li>Lowest floor elevation</li>
        <li>Base Flood Elevation (BFE) from FEMA maps</li>
        <li>Foundation type and construction details</li>
        <li>Flood openings (for elevated structures)</li>
        <li>Photographs of property</li>
        <li>Surveyor's certification and seal</li>
        <li>Location information and FEMA zone designation</li>
      </ul>

      <h3>Elevation Certificate Costs</h3>
      <ul>
        <li><strong>Simple Slab Foundation:</strong> $400-$600</li>
        <li><strong>Crawl Space/Basement:</strong> $600-$900</li>
        <li><strong>Elevated/Pier Foundation:</strong> $700-$1,000</li>
        <li><strong>Commercial Property:</strong> $1,000-$2,500</li>
        <li><strong>Rush Service:</strong> Add 50-100% to base cost</li>
      </ul>

      <h3>How Elevation Affects Insurance Rates</h3>
      <p>Your flood insurance premium is primarily determined by:</p>
      <ul>
        <li><strong>Freeboard:</strong> Distance above Base Flood Elevation (BFE)</li>
        <li><strong>Foundation Type:</strong> Elevated structures get better rates</li>
        <li><strong>Coverage Amount:</strong> How much insurance you purchase</li>
        <li><strong>Deductible:</strong> Higher deductible = lower premium</li>
        <li><strong>Building vs. Contents:</strong> Separate coverage for each</li>
      </ul>

      <h3>Potential Insurance Savings</h3>
      <p>Properties elevated above BFE can save dramatically:</p>
      <ul>
        <li><strong>1 foot above BFE:</strong> 30-40% reduction</li>
        <li><strong>2 feet above BFE:</strong> 50-65% reduction</li>
        <li><strong>3+ feet above BFE:</strong> 70-85% reduction</li>
        <li><strong>Preferred Risk Policy:</strong> Qualify if properly elevated (save $1,500-$3,000/year)</li>
      </ul>

      <h3>LOMA: Letter of Map Amendment</h3>
      <p>A LOMA is FEMA's official removal of a property from the high-risk flood zone if:</p>
      <ul>
        <li>Property is naturally elevated above BFE</li>
        <li>Fill placed before flood maps were published</li>
        <li>Property was incorrectly mapped in flood zone</li>
      </ul>

      <p><strong>LOMA Process:</strong></p>
      <ul>
        <li>Obtain elevation certificate showing elevation above BFE</li>
        <li>Complete FEMA LOMA application</li>
        <li>Pay $475 application fee (fast-track process)</li>
        <li>Submit to FEMA for review (2-6 months)</li>
        <li>If approved, flood insurance no longer required</li>
      </ul>

      <h3>Who Can Complete an Elevation Certificate</h3>
      <p>Only certain professionals can certify elevations:</p>
      <ul>
        <li><strong>Licensed Land Surveyor:</strong> Most common provider</li>
        <li><strong>Professional Engineer:</strong> Also qualified</li>
        <li><strong>Architect:</strong> In some states for certain building types</li>
      </ul>
      <p>The professional must be licensed in the state where the property is located.</p>

      <h3>Timeline for Getting an Elevation Certificate</h3>
      <ul>
        <li><strong>Scheduling:</strong> 1-2 weeks to get surveyor appointment</li>
        <li><strong>Field Work:</strong> 2-4 hours onsite</li>
        <li><strong>Processing:</strong> 1-2 weeks to prepare certificate</li>
        <li><strong>Total Time:</strong> 2-4 weeks typical</li>
        <li><strong>Rush Service:</strong> 5-7 days possible with premium fee</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li><strong>Using Outdated Certificate:</strong> Certificates must reflect current conditions</li>
        <li><strong>Wrong Surveyor:</strong> Must be licensed in property's state</li>
        <li><strong>Incomplete Information:</strong> Missing data delays insurance quotes</li>
        <li><strong>Not Updating After Renovations:</strong> Substantial improvements require new EC</li>
        <li><strong>Relying on Seller's Certificate:</strong> Get your own for accuracy</li>
      </ul>

      <h3>How to Use Your Elevation Certificate</h3>
      <ul>
        <li><strong>Shopping for Insurance:</strong> Get quotes from multiple providers</li>
        <li><strong>LOMA Application:</strong> Submit to FEMA if property qualifies</li>
        <li><strong>Building Permits:</strong> Provide to local building department</li>
        <li><strong>Property Sale:</strong> Include with disclosure documents</li>
        <li><strong>Refinancing:</strong> Provide to new lender</li>
      </ul>

      <h3>Flood Insurance Basics</h3>
      <ul>
        <li><strong>Coverage Limits:</strong> Max $250K building, $100K contents</li>
        <li><strong>Waiting Period:</strong> 30 days before policy takes effect</li>
        <li><strong>What's Covered:</strong> Structure, systems, appliances, contents (separate policy)</li>
        <li><strong>What's Not Covered:</strong> Landscaping, pools, detached structures, basement contents</li>
        <li><strong>Deductibles:</strong> Typical $1,000-$10,000 per claim</li>
      </ul>

      <h3>Flood Risk Mitigation Strategies</h3>
      <ul>
        <li><strong>Elevate Mechanicals:</strong> Move HVAC, water heater above BFE</li>
        <li><strong>Install Flood Vents:</strong> Allow water to flow through foundation</li>
        <li><strong>Elevate Entire Structure:</strong> Raise house on piers (expensive but effective)</li>
        <li><strong>Wet Floodproofing:</strong> Use flood-resistant materials in flood-prone areas</li>
        <li><strong>Dry Floodproofing:</strong> Seal building to prevent water entry</li>
        <li><strong>Improve Drainage:</strong> Grade property away from house</li>
      </ul>

      <h3>State-Specific Considerations</h3>
      <ul>
        <li><strong>Florida:</strong> Strict elevation requirements for coastal properties</li>
        <li><strong>Louisiana:</strong> High flood risk, elevation certificates very common</li>
        <li><strong>Texas:</strong> Coastal areas require V-zone specific construction</li>
        <li><strong>North Carolina:</strong> State law requires disclosure of flood zone</li>
        <li><strong>New Jersey:</strong> Post-Sandy elevated home requirements</li>
      </ul>

      <h3>Red Flags When Buying in Flood Zones</h3>
      <p>Be cautious if:</p>
      <ul>
        <li>Property repeatedly floods (check FEMA claim history)</li>
        <li>Basement or below-grade living space in high-risk zone</li>
        <li>Seller can't provide elevation certificate</li>
        <li>Property elevated but no documentation</li>
        <li>Recent flood map changes increased risk</li>
        <li>Nearby properties have had flood damage</li>
        <li>Annual insurance cost exceeds 10% of property value</li>
      </ul>

      <h3>ROI of Elevation Certificates</h3>
      <p>Example scenarios showing return on investment:</p>
      <ul>
        <li><strong>Scenario 1:</strong> $600 EC saves $1,200/year on insurance = 6-month payback</li>
        <li><strong>Scenario 2:</strong> $800 EC + $475 LOMA removes from flood zone = saves $2,400/year = 6-month payback</li>
        <li><strong>Scenario 3:</strong> $700 EC reduces premium $800/year = 10.5-month payback</li>
      </ul>

      <p>Use this calculator to determine if an elevation certificate is worth the investment for your property and estimate potential insurance savings.</p>
    `
  },
};

export { ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT };
