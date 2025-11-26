import { CalculatorContent } from '@/types';

export const NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT: CalculatorContent = {
  title: 'New Home Punch List Generator',
  description: 'Generate comprehensive punch lists for new home construction walkthroughs with room-by-room inspection checklists',
  slug: 'new-home-punch-list-generator',
  icon: '📋',
  category: 'Construction & Development',
  article: {
    title: 'Complete Guide to New Home Punch Lists and Final Walkthroughs',
    content: `
    <h2>What is a Punch List?</h2>
    <p>A punch list (also called a snag list or deficiency list) is a document created during the final walkthrough of a new construction home that identifies incomplete or defective work that needs to be corrected by the builder before closing. This critical inspection ensures that your new home meets the quality standards specified in your construction contract.</p>
    
    <h3>Why Punch Lists Are Essential</h3>
    <p>The final walkthrough is your last opportunity to identify issues before taking ownership. Once you close on the property, getting the builder to address defects becomes significantly more difficult. A thorough punch list protects your investment by:</p>
    <ul>
      <li><strong>Documenting Issues:</strong> Creates a legal record of all deficiencies found</li>
      <li><strong>Ensuring Completion:</strong> Holds the builder accountable for finishing all work</li>
      <li><strong>Protecting Warranty Rights:</strong> Identifies issues within the warranty period</li>
      <li><strong>Negotiating Power:</strong> Provides leverage for repairs or price adjustments</li>
    </ul>

    <h3>How to Use This Generator</h3>
    <p>Enter your home's specifications including the number of bedrooms, bathrooms, and key features. The generator creates a customized punch list covering:</p>
    <ul>
      <li>Room-by-room inspection checklists</li>
      <li>Common defects to look for in each area</li>
      <li>Priority classifications for different issues</li>
      <li>Warranty-related items to document</li>
    </ul>

    <h3>What to Look For During Your Walkthrough</h3>
    <h4>Structural and Exterior Issues</h4>
    <ul>
      <li>Foundation cracks or water intrusion signs</li>
      <li>Roof shingle alignment and flashing installation</li>
      <li>Siding gaps, dents, or improper installation</li>
      <li>Window and door seal integrity</li>
      <li>Grading and drainage away from foundation</li>
      <li>Driveway and walkway cracks or settling</li>
    </ul>

    <h4>Interior Finish Issues</h4>
    <ul>
      <li>Paint drips, uneven coverage, or touch-up needs</li>
      <li>Drywall nail pops, seams, or texture inconsistencies</li>
      <li>Flooring scratches, gaps, or squeaks</li>
      <li>Cabinet door alignment and drawer operation</li>
      <li>Countertop chips, seam quality, and caulking</li>
      <li>Trim and molding joints and nail holes</li>
    </ul>

    <h4>Mechanical Systems</h4>
    <ul>
      <li>HVAC operation and airflow in all rooms</li>
      <li>Water heater function and proper venting</li>
      <li>All electrical outlets and switches working</li>
      <li>Plumbing fixtures - check for leaks under sinks</li>
      <li>Garage door opener and safety reverse</li>
      <li>Exhaust fans in bathrooms and kitchen</li>
    </ul>

    <h3>Common Defects by Area</h3>
    <h4>Kitchen</h4>
    <p>Cabinet doors not closing properly, appliance scratches or dents, dishwasher installation issues, countertop seam problems, missing outlet covers, garbage disposal not connected.</p>
    
    <h4>Bathrooms</h4>
    <p>Toilet not properly sealed to floor, shower door alignment, tile grout gaps, exhaust fan not vented properly, low water pressure, caulking incomplete around tub.</p>
    
    <h4>Bedrooms</h4>
    <p>Closet door track issues, carpet seams visible, window lock problems, ceiling fan wobble, paint roller marks, outlet plate alignment.</p>

    <h3>How to Document Issues</h3>
    <p>For each defect you identify:</p>
    <ol>
      <li>Take clear photos with timestamps</li>
      <li>Note the exact location (room, wall, specific fixture)</li>
      <li>Describe the issue in detail</li>
      <li>Classify the severity (cosmetic, functional, safety)</li>
      <li>Reference any contract specifications not met</li>
    </ol>

    <h3>Warranty Considerations</h3>
    <p>Most new home warranties include:</p>
    <ul>
      <li><strong>1-Year Workmanship:</strong> Covers most defects in materials and labor</li>
      <li><strong>2-Year Systems:</strong> Covers electrical, plumbing, HVAC, and mechanical</li>
      <li><strong>10-Year Structural:</strong> Covers major structural defects</li>
    </ul>
    <p>Document all issues during your walkthrough even if they seem minor - some defects may worsen over time and having them documented protects your warranty claims.</p>

    <h3>Tips for a Successful Walkthrough</h3>
    <ul>
      <li>Schedule adequate time (2-3 hours for average home)</li>
      <li>Bring a flashlight to check dark spaces</li>
      <li>Bring outlet tester and phone charger</li>
      <li>Turn on all faucets and flush all toilets</li>
      <li>Open and close every door and window</li>
      <li>Test all appliances and light fixtures</li>
      <li>Check garage door safety reverse with object test</li>
      <li>Run HVAC and check each room's vents</li>
      <li>Consider hiring a professional inspector</li>
    </ul>

    <h3>After the Walkthrough</h3>
    <p>After completing your punch list, both you and the builder should sign the document. Establish clear deadlines for repairs and a follow-up walkthrough date. Do not close on the property until all significant issues are addressed or you have negotiated appropriate credits or escrow holdbacks for completion.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'bedrooms',
        label: 'Number of Bedrooms',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'bathrooms',
        label: 'Number of Bathrooms',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'hasGarage',
        label: 'Has Garage',
        type: 'select',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        name: 'hasBasement',
        label: 'Has Basement',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'yes', label: 'Yes - Finished' },
          { value: 'unfinished', label: 'Yes - Unfinished' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        name: 'constructionType',
        label: 'Construction Type',
        type: 'select',
        defaultValue: 'standard',
        options: [
          { value: 'standard', label: 'Standard Construction' },
          { value: 'custom', label: 'Custom Home' },
          { value: 'tract', label: 'Tract/Production Home' },
        ],
      },
      {
        name: 'squareFootage',
        label: 'Approximate Square Footage',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [
      { label: 'Total Inspection Areas', isCurrency: false },
      { label: 'Estimated Inspection Time (Hours)', isCurrency: false },
      { label: 'Priority Items to Check', isCurrency: false },
      { label: 'Warranty Documentation Items', isCurrency: false },
    ],
    calculate: (values) => {
      const { bedrooms, bathrooms, hasGarage, hasBasement, constructionType, squareFootage } = values;

      let inspectionAreas = 0;
      inspectionAreas += 1; // Exterior
      inspectionAreas += 1; // Kitchen
      inspectionAreas += 1; // Living areas
      inspectionAreas += Number(bedrooms);
      inspectionAreas += Number(bathrooms);
      inspectionAreas += hasGarage === 'yes' ? 1 : 0;
      inspectionAreas += hasBasement === 'yes' ? 1 : (hasBasement === 'unfinished' ? 1 : 0);
      inspectionAreas += 1; // HVAC/Mechanical
      inspectionAreas += 1; // Electrical
      inspectionAreas += 1; // Plumbing

      const sqft = Number(squareFootage);
      let baseTime = 1.5;
      baseTime += sqft > 2500 ? 0.5 : 0;
      baseTime += sqft > 3500 ? 0.5 : 0;
      baseTime += constructionType === 'custom' ? 0.5 : 0;
      baseTime += (Number(bedrooms) + Number(bathrooms)) * 0.15;
      baseTime += hasBasement !== 'no' ? 0.25 : 0;
      const estimatedTime = Math.round(baseTime * 10) / 10;

      let priorityItems = 15;
      priorityItems += Number(bathrooms) * 3;
      priorityItems += hasGarage === 'yes' ? 5 : 0;
      priorityItems += hasBasement !== 'no' ? 8 : 0;
      priorityItems += constructionType === 'custom' ? 10 : 0;

      let warrantyItems = 8;
      warrantyItems += Number(bathrooms) * 2;
      warrantyItems += hasGarage === 'yes' ? 2 : 0;
      warrantyItems += constructionType === 'custom' ? 5 : 0;

      return [
        { label: 'Total Inspection Areas', value: inspectionAreas.toString(), isCurrency: false },
        { label: 'Estimated Inspection Time (Hours)', value: estimatedTime.toFixed(1), isCurrency: false },
        { label: 'Priority Items to Check', value: priorityItems.toString(), isCurrency: false },
        { label: 'Warranty Documentation Items', value: warrantyItems.toString(), isCurrency: false },
      ];
    },
  },
};
