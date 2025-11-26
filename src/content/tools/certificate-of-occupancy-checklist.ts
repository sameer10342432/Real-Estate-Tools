import { CalculatorContent } from '@/types';

export const CERTIFICATE_OF_OCCUPANCY_CHECKLIST_CONTENT: CalculatorContent = {
  title: 'Certificate of Occupancy Checklist',
  description: 'Track requirements for obtaining a Certificate of Occupancy including required inspections, documentation, and timeline',
  slug: 'certificate-of-occupancy-checklist',
  icon: '📜',
  category: 'Construction & Development',
  article: {
    title: 'Complete Guide to Obtaining a Certificate of Occupancy',
    content: `
    <h2>What is a Certificate of Occupancy (CO)?</h2>
    <p>A Certificate of Occupancy (CO) is an official document issued by the local building department or municipality that certifies a building complies with all applicable building codes, zoning laws, and regulations. It confirms the property is safe and suitable for the intended use - whether residential, commercial, or industrial.</p>
    
    <h3>Why is a CO Required?</h3>
    <p>A Certificate of Occupancy serves several critical purposes:</p>
    <ul>
      <li><strong>Legal Requirement:</strong> You cannot legally occupy a new construction or significantly renovated building without a CO</li>
      <li><strong>Mortgage Closing:</strong> Lenders require a valid CO before funding a loan</li>
      <li><strong>Insurance Coverage:</strong> Many insurance policies require proof of CO for coverage</li>
      <li><strong>Safety Assurance:</strong> Confirms all life-safety systems meet code requirements</li>
      <li><strong>Zoning Compliance:</strong> Verifies the building's use matches its zoning designation</li>
    </ul>

    <h3>How to Use This Checklist Tool</h3>
    <p>Enter your project type, property type, and municipality category to generate a customized checklist of required inspections, documentation, and estimated timeline for obtaining your Certificate of Occupancy.</p>

    <h3>Required Inspections for Certificate of Occupancy</h3>
    <h4>Foundation Inspection</h4>
    <p>Conducted after excavation and before pouring concrete. Inspectors verify proper footings, drainage, and reinforcement steel placement.</p>

    <h4>Framing/Structural Inspection</h4>
    <p>Examines the structural integrity of floor joists, wall studs, roof trusses, and connections. Must be completed before insulation and drywall.</p>

    <h4>Electrical Inspection</h4>
    <p>Reviews the electrical system including:</p>
    <ul>
      <li>Service panel installation and capacity</li>
      <li>Wire sizing and circuit protection</li>
      <li>GFCI and AFCI protection where required</li>
      <li>Smoke and carbon monoxide detector placement</li>
      <li>Proper grounding and bonding</li>
    </ul>

    <h4>Plumbing Inspection</h4>
    <p>Verifies proper installation of:</p>
    <ul>
      <li>Water supply lines and pressure testing</li>
      <li>Drain, waste, and vent (DWV) systems</li>
      <li>Water heater installation and venting</li>
      <li>Fixture connections and accessibility</li>
      <li>Backflow prevention devices</li>
    </ul>

    <h4>HVAC/Mechanical Inspection</h4>
    <p>Covers heating, ventilation, and air conditioning systems:</p>
    <ul>
      <li>Equipment sizing and installation</li>
      <li>Ductwork design and connections</li>
      <li>Combustion air and venting</li>
      <li>Refrigerant line installation</li>
      <li>Thermostat and controls</li>
    </ul>

    <h4>Insulation and Energy Inspection</h4>
    <p>Confirms compliance with energy codes including R-values for walls, ceilings, and floors, as well as air sealing and vapor barriers.</p>

    <h4>Final Inspection</h4>
    <p>The comprehensive final inspection covers all completed work, including:</p>
    <ul>
      <li>All previous inspection corrections verified</li>
      <li>Finished surfaces and safety features</li>
      <li>Address numbers visible from street</li>
      <li>Stair railings and guards</li>
      <li>Emergency egress windows</li>
      <li>Garage separation and fire rating</li>
    </ul>

    <h3>Documentation Needed for CO</h3>
    <ul>
      <li>Approved building permit and all sub-permits</li>
      <li>All inspection sign-offs</li>
      <li>As-built surveys (if required)</li>
      <li>Flood elevation certificate (in flood zones)</li>
      <li>Fire sprinkler certification (if applicable)</li>
      <li>Septic system approval (if not on sewer)</li>
      <li>Well water testing results (if applicable)</li>
      <li>HVAC contractor certifications</li>
      <li>Electrical contractor certifications</li>
      <li>Energy compliance documentation</li>
    </ul>

    <h3>Common Issues That Delay Certificate of Occupancy</h3>
    <h4>Code Violations</h4>
    <p>Work not matching approved plans, missing fire stops, inadequate egress, or improper material substitutions can all cause delays.</p>

    <h4>Missing Inspections</h4>
    <p>Skipped or failed inspections at any stage must be corrected before proceeding. Covered work may need to be opened for inspection.</p>

    <h4>Permit Issues</h4>
    <p>Expired permits, unpermitted work, or missing specialty permits (electrical, plumbing) can halt the CO process.</p>

    <h4>Incomplete Documentation</h4>
    <p>Missing contractor licenses, certifications, or required testing reports will delay approval.</p>

    <h4>Life-Safety Concerns</h4>
    <p>Any issues with smoke detectors, carbon monoxide detectors, egress windows, or handrails must be corrected before CO issuance.</p>

    <h3>Typical CO Timeline</h3>
    <p>After passing the final inspection, CO processing typically takes:</p>
    <ul>
      <li><strong>Small Municipality:</strong> 1-3 business days</li>
      <li><strong>Medium Municipality:</strong> 3-7 business days</li>
      <li><strong>Large City:</strong> 5-14 business days</li>
    </ul>

    <h3>Temporary Certificate of Occupancy (TCO)</h3>
    <p>Some jurisdictions issue a Temporary Certificate of Occupancy when minor items remain incomplete but the building is safe for occupancy. TCOs typically expire in 60-90 days and must be converted to a permanent CO once all work is completed.</p>

    <h3>Tips for a Smooth CO Process</h3>
    <ul>
      <li>Schedule inspections in proper sequence</li>
      <li>Have contractors present for their specialty inspections</li>
      <li>Address inspection corrections immediately</li>
      <li>Keep all documentation organized and accessible</li>
      <li>Verify permit expiration dates</li>
      <li>Communicate proactively with building department</li>
      <li>Plan for final inspection at least 1 week before closing</li>
    </ul>

    <h3>CO for Renovations vs New Construction</h3>
    <p>Renovation projects may require a new CO if the scope of work triggers thresholds such as:</p>
    <ul>
      <li>Change in use or occupancy classification</li>
      <li>Structural modifications</li>
      <li>Addition of square footage</li>
      <li>Major system replacements</li>
    </ul>
    <p>Minor renovations like cosmetic updates typically don't require a new CO, but always verify with your local building department.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'projectType',
        label: 'Project Type',
        type: 'select',
        defaultValue: 'new-construction',
        options: [
          { value: 'new-construction', label: 'New Construction' },
          { value: 'major-renovation', label: 'Major Renovation' },
          { value: 'addition', label: 'Addition' },
          { value: 'change-of-use', label: 'Change of Use' },
        ],
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'single-family',
        options: [
          { value: 'single-family', label: 'Single Family Home' },
          { value: 'multi-family', label: 'Multi-Family (2-4 Units)' },
          { value: 'commercial', label: 'Commercial' },
          { value: 'mixed-use', label: 'Mixed Use' },
        ],
      },
      {
        name: 'municipalitySize',
        label: 'Municipality Size',
        type: 'select',
        defaultValue: 'medium',
        options: [
          { value: 'small', label: 'Small Town (< 25,000 pop)' },
          { value: 'medium', label: 'Medium City (25,000 - 100,000)' },
          { value: 'large', label: 'Large City (> 100,000)' },
        ],
      },
      {
        name: 'squareFootage',
        label: 'Project Square Footage',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'hasFireSprinklers',
        label: 'Fire Sprinkler System',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        name: 'waterSource',
        label: 'Water Source',
        type: 'select',
        defaultValue: 'municipal',
        options: [
          { value: 'municipal', label: 'Municipal Water' },
          { value: 'well', label: 'Private Well' },
        ],
      },
    ],
    results: [
      { label: 'Required Inspections', isCurrency: false },
      { label: 'Documentation Items', isCurrency: false },
      { label: 'Estimated Processing Days', isCurrency: false },
      { label: 'Estimated Permit/Inspection Fees', isCurrency: true },
    ],
    calculate: (values) => {
      const { projectType, propertyType, municipalitySize, squareFootage, hasFireSprinklers, waterSource } = values;

      let inspections = 0;
      if (projectType === 'new-construction') {
        inspections = 8;
      } else if (projectType === 'major-renovation') {
        inspections = 5;
      } else if (projectType === 'addition') {
        inspections = 6;
      } else {
        inspections = 3;
      }

      if (propertyType === 'multi-family') inspections += 2;
      if (propertyType === 'commercial') inspections += 3;
      if (propertyType === 'mixed-use') inspections += 4;
      if (hasFireSprinklers === 'yes') inspections += 2;
      if (waterSource === 'well') inspections += 1;

      let docItems = 5;
      if (projectType === 'new-construction') docItems = 10;
      if (propertyType === 'commercial' || propertyType === 'mixed-use') docItems += 5;
      if (hasFireSprinklers === 'yes') docItems += 2;
      if (waterSource === 'well') docItems += 2;

      let processingDays = 0;
      if (municipalitySize === 'small') processingDays = 3;
      else if (municipalitySize === 'medium') processingDays = 7;
      else processingDays = 12;

      if (propertyType === 'commercial' || propertyType === 'mixed-use') processingDays += 5;

      const sqft = Number(squareFootage);
      let fees = 0;
      fees += sqft * 0.15;
      if (projectType === 'new-construction') fees += 500;
      else if (projectType === 'major-renovation') fees += 350;
      else if (projectType === 'addition') fees += 400;
      else fees += 250;

      if (propertyType === 'commercial') fees *= 1.5;
      if (propertyType === 'mixed-use') fees *= 1.75;
      if (hasFireSprinklers === 'yes') fees += 350;

      if (municipalitySize === 'large') fees *= 1.25;
      else if (municipalitySize === 'small') fees *= 0.85;

      return [
        { label: 'Required Inspections', value: inspections.toString(), isCurrency: false },
        { label: 'Documentation Items', value: docItems.toString(), isCurrency: false },
        { label: 'Estimated Processing Days', value: processingDays.toString(), isCurrency: false },
        { label: 'Estimated Permit/Inspection Fees', value: fees.toFixed(2), isCurrency: true },
      ];
    },
  },
};
