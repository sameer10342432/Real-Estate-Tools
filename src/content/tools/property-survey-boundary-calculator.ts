import { CalculatorContent } from '@/types';

const PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Property Survey (Boundary) Calculator',
  description: 'Calculate property survey costs, analyze boundary dispute risks, and understand when surveys are required for real estate transactions.',
  icon: 'Icon',
  slug: 'property-survey-boundary-calculator',
  category: 'Additional Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'urban-lot', label: 'Urban/Suburban Lot (< 1 acre)' },
          { value: 'rural-small', label: 'Rural Property (1-5 acres)' },
          { value: 'rural-large', label: 'Large Rural Property (5-20 acres)' },
          { value: 'farm', label: 'Farm/Ranch (20+ acres)' },
          { value: 'commercial', label: 'Commercial Property' },
          { value: 'waterfront', label: 'Waterfront Property' },
        ],
        defaultValue: 'urban-lot',
      },
      {
        name: 'lotSize',
        label: 'Lot Size (Acres)',
        type: 'number',
        defaultValue: '0.25',
      },
      {
        name: 'terrain',
        label: 'Terrain Difficulty',
        type: 'select',
        options: [
          { value: 'flat', label: 'Flat & Clear' },
          { value: 'moderate', label: 'Moderate (Some Hills/Trees)' },
          { value: 'difficult', label: 'Difficult (Steep/Dense Woods)' },
          { value: 'very-difficult', label: 'Very Difficult (Mountains/Wetlands)' },
        ],
        defaultValue: 'flat',
      },
      {
        name: 'surveyType',
        label: 'Survey Type',
        type: 'select',
        options: [
          { value: 'boundary', label: 'Boundary Survey' },
          { value: 'mortgage', label: 'Mortgage Survey/Location Survey' },
          { value: 'topographic', label: 'Topographic Survey' },
          { value: 'alta', label: 'ALTA/NSPS Survey (Commercial)' },
        ],
        defaultValue: 'boundary',
      },
      {
        name: 'hasDispute',
        label: 'Boundary Dispute or Encroachment',
        type: 'select',
        options: [
          { value: 'no', label: 'No Known Issues' },
          { value: 'suspected', label: 'Suspected Issues' },
          { value: 'confirmed', label: 'Confirmed Dispute' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'urgency',
        label: 'Timeline Urgency',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard (2-4 weeks)' },
          { value: 'rush', label: 'Rush (1 week or less)' },
        ],
        defaultValue: 'standard',
      },
    ],
    calculate: (values) => {
      const propertyType = values.propertyType;
      const lotSize = Number(values.lotSize);
      const terrain = values.terrain;
      const surveyType = values.surveyType;
      const hasDispute = values.hasDispute;
      const urgency = values.urgency;

      // Base cost by property type and survey type
      let baseCost = 500;
      
      if (surveyType === 'boundary') {
        if (propertyType === 'urban-lot') baseCost = 400;
        else if (propertyType === 'rural-small') baseCost = 600;
        else if (propertyType === 'rural-large') baseCost = 1200;
        else if (propertyType === 'farm') baseCost = 2000;
        else if (propertyType === 'commercial') baseCost = 1500;
        else if (propertyType === 'waterfront') baseCost = 800;
      } else if (surveyType === 'mortgage') {
        baseCost = baseCost * 0.7; // Mortgage surveys typically cheaper
      } else if (surveyType === 'topographic') {
        baseCost = baseCost * 1.5; // Topographic more expensive
      } else if (surveyType === 'alta') {
        baseCost = baseCost * 2.5; // ALTA most expensive
      }

      // Adjust for lot size
      let sizeFactor = 1;
      if (lotSize > 20) sizeFactor = 3;
      else if (lotSize > 5) sizeFactor = 2;
      else if (lotSize > 1) sizeFactor = 1.5;

      // Terrain multiplier
      let terrainMultiplier = 1;
      if (terrain === 'moderate') terrainMultiplier = 1.3;
      else if (terrain === 'difficult') terrainMultiplier = 1.6;
      else if (terrain === 'very-difficult') terrainMultiplier = 2;

      // Calculate base survey cost
      let surveyCost = baseCost * sizeFactor * terrainMultiplier;

      // Rush fee
      const rushFee = urgency === 'rush' ? surveyCost * 0.5 : 0;

      // Dispute resolution costs
      let disputeCost = 0;
      if (hasDispute === 'suspected') disputeCost = 1500;
      else if (hasDispute === 'confirmed') disputeCost = 5000;

      // Total cost
      const totalCost = surveyCost + rushFee + disputeCost;

      // Timeline
      const timeline = urgency === 'rush' ? '5-10 days' : '2-4 weeks';

      // Risk assessment
      let riskLevel = 'Low';
      if (hasDispute === 'confirmed' || (terrain === 'very-difficult' && lotSize > 10)) {
        riskLevel = 'High';
      } else if (hasDispute === 'suspected' || terrain === 'difficult') {
        riskLevel = 'Medium';
      }

      // Additional potential costs
      const stakingCost = surveyCost * 0.2; // Physical stakes/markers
      const legalReviewCost = hasDispute !== 'no' ? 1000 : 0;

      // Lender requirement likelihood
      const lenderRequired = surveyType === 'alta' || propertyType === 'commercial' || lotSize > 5;

      return [
        {
          label: 'Base Survey Cost',
          value: `$${surveyCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Rush Fee (if applicable)',
          value: `$${rushFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Boundary Dispute Resolution Cost',
          value: `$${disputeCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: disputeCost > 0,
        },
        {
          label: 'Estimated Total Survey Cost',
          value: `$${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Physical Staking/Markers',
          value: `$${stakingCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (optional)`,
        },
        {
          label: 'Legal Review (if dispute)',
          value: `$${legalReviewCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Estimated Timeline',
          value: timeline,
        },
        {
          label: 'Boundary Dispute Risk',
          value: riskLevel,
          isHighlighted: riskLevel === 'High',
        },
        {
          label: 'Lender Likely to Require Survey',
          value: lenderRequired ? 'Yes' : 'Maybe',
        },
        {
          label: 'Property Size',
          value: `${lotSize} acre${lotSize !== 1 ? 's' : ''}`,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Property Surveys and Boundary Determinations',
    content: `
      <h2>What is a Property Survey?</h2>
      <p>A property survey (also called a boundary survey or land survey) is a professional measurement and mapping of a property's exact boundaries, structures, easements, and encroachments. Licensed surveyors use specialized equipment to determine precise property lines and create an official record of the property's legal boundaries.</p>

      <h3>Types of Property Surveys</h3>
      <ul>
        <li><strong>Boundary Survey:</strong> Establishes exact property lines and corners</li>
        <li><strong>Mortgage Survey (Location Survey):</strong> Shows structures and improvements relative to boundaries</li>
        <li><strong>Topographic Survey:</strong> Maps elevation changes and natural features</li>
        <li><strong>ALTA/NSPS Survey:</strong> Comprehensive survey meeting national standards (commercial)</li>
        <li><strong>Subdivision Survey:</strong> Divides larger parcel into smaller lots</li>
        <li><strong>Construction Survey:</strong> Guides building placement and grading</li>
        <li><strong>As-Built Survey:</strong> Documents existing structures and improvements</li>
      </ul>

      <h3>When is a Survey Required?</h3>
      <ul>
        <li><strong>Lender Requirement:</strong> Many lenders require surveys for loans</li>
        <li><strong>Title Insurance:</strong> May be needed for title insurance coverage</li>
        <li><strong>New Construction:</strong> Essential before building</li>
        <li><strong>Fence Installation:</strong> Ensures fence is on your property</li>
        <li><strong>Property Disputes:</strong> Resolve neighbor disagreements</li>
        <li><strong>Subdivision:</strong> Required to split parcels</li>
        <li><strong>Easement Establishment:</strong> Document rights of way</li>
        <li><strong>Flood Determination:</strong> Verify property in/out of flood zone</li>
      </ul>

      <h3>Survey Cost Factors</h3>
      <ul>
        <li><strong>Property Size:</strong> Larger parcels cost more ($400 for 0.25 acre to $5,000+ for 50+ acres)</li>
        <li><strong>Terrain:</strong> Difficult terrain increases cost (hills, dense woods, wetlands)</li>
        <li><strong>Survey Type:</strong> ALTA surveys cost 2-3x more than basic boundary surveys</li>
        <li><strong>Location:</strong> Urban areas typically cheaper than remote rural areas</li>
        <li><strong>Property Shape:</strong> Irregular shapes with many angles cost more</li>
        <li><strong>Existing Records:</strong> Poor or missing records increase research time</li>
        <li><strong>Rush Service:</strong> Expedited surveys can add 50-100% to cost</li>
      </ul>

      <h3>What's Included in a Survey?</h3>
      <p>A complete property survey typically includes:</p>
      <ul>
        <li>Precise boundary measurements and property lines</li>
        <li>Location of all structures and improvements</li>
        <li>Easements and rights of way</li>
        <li>Encroachments (structures crossing property lines)</li>
        <li>Property corners marked with stakes or monuments</li>
        <li>Legal description of the property</li>
        <li>Scale drawing/plat map</li>
        <li>Surveyor's certification and seal</li>
      </ul>

      <h3>Common Boundary Issues Discovered</h3>
      <ul>
        <li><strong>Encroachments:</strong> Neighbor's fence, shed, or driveway on your property</li>
        <li><strong>Setback Violations:</strong> Structures too close to property line</li>
        <li><strong>Easement Conflicts:</strong> Unknown utility or access easements</li>
        <li><strong>Measurement Errors:</strong> Old survey inaccuracies</li>
        <li><strong>Adverse Possession:</strong> Neighbor using your land for extended period</li>
        <li><strong>Overlapping Deeds:</strong> Conflicting property descriptions</li>
        <li><strong>Missing Corners:</strong> Property markers removed or never placed</li>
      </ul>

      <h3>Resolving Boundary Disputes</h3>
      <p>If survey reveals boundary issues:</p>
      <ul>
        <li><strong>Negotiate with Neighbor:</strong> Often cheapest solution</li>
        <li><strong>Boundary Agreement:</strong> Written agreement defining boundary</li>
        <li><strong>Lot Line Adjustment:</strong> Formal process to modify boundaries</li>
        <li><strong>Quit Claim Deed:</strong> Transfer small disputed area</li>
        <li><strong>Mediation:</strong> Neutral third party helps resolve</li>
        <li><strong>Court Action:</strong> Last resort - expensive and time-consuming</li>
      </ul>

      <h3>Survey Timeline</h3>
      <ul>
        <li><strong>Research Phase:</strong> 1-3 days to review existing records</li>
        <li><strong>Field Work:</strong> 1-3 days depending on property size</li>
        <li><strong>Processing:</strong> 1-2 weeks to prepare final survey</li>
        <li><strong>Total Time:</strong> 2-4 weeks for standard survey</li>
        <li><strong>Rush Service:</strong> Can reduce to 5-10 days (with premium)</li>
      </ul>

      <h3>Legal Importance of Surveys</h3>
      <ul>
        <li>Establishes legal boundaries recognized by courts</li>
        <li>Required for title insurance in many cases</li>
        <li>Protects against future boundary disputes</li>
        <li>Documents easements and encroachments</li>
        <li>Essential for property transfers and subdivisions</li>
        <li>May be required for zoning compliance</li>
        <li>Helps determine property taxes based on actual size</li>
      </ul>

      <h3>Survey vs. Property Lines on Apps</h3>
      <p>Why you shouldn't rely on apps/online maps:</p>
      <ul>
        <li>GPS apps can be off by 10-50 feet or more</li>
        <li>County GIS maps are estimates, not legal boundaries</li>
        <li>Online tools lack surveyor certification</li>
        <li>Not accepted by title companies or courts</li>
        <li>Can't detect encroachments or easements</li>
        <li>Don't account for terrain or measurement corrections</li>
      </ul>

      <h3>How to Choose a Surveyor</h3>
      <ul>
        <li>Verify state licensing and certification</li>
        <li>Check professional association membership (NSPS, state society)</li>
        <li>Get multiple quotes (but don't always choose cheapest)</li>
        <li>Ask about errors & omissions insurance</li>
        <li>Request references from recent clients</li>
        <li>Confirm what's included (stakes, digital file, etc.)</li>
        <li>Check reviews and BBB rating</li>
      </ul>

      <h3>Questions to Ask Your Surveyor</h3>
      <ul>
        <li>What type of survey do you recommend for my situation?</li>
        <li>How long will it take from start to finish?</li>
        <li>Will you physically mark the corners/boundaries?</li>
        <li>What if the survey reveals encroachments or disputes?</li>
        <li>Is this survey acceptable to lenders and title companies?</li>
        <li>Do you provide digital files and CAD drawings?</li>
        <li>What happens if I disagree with the findings?</li>
      </ul>

      <h3>After the Survey</h3>
      <ul>
        <li><strong>Review Carefully:</strong> Check all structures and boundaries</li>
        <li><strong>Address Issues:</strong> Resolve any discovered encroachments</li>
        <li><strong>File Copy:</strong> Keep survey with property records</li>
        <li><strong>Share with Professionals:</strong> Provide to attorney, title company</li>
        <li><strong>Install Fence:</strong> Use survey to place fence correctly</li>
        <li><strong>Plan Improvements:</strong> Ensure compliance with setbacks</li>
        <li><strong>Update Title Insurance:</strong> May need to update policy</li>
      </ul>

      <h3>Red Flags During Survey Process</h3>
      <p>Be concerned if:</p>
      <ul>
        <li>Surveyor is not licensed in your state</li>
        <li>Quote seems too low compared to others</li>
        <li>Surveyor can't provide certificate of insurance</li>
        <li>No written contract or scope of work</li>
        <li>Unwilling to answer questions or explain process</li>
        <li>Guarantees specific results before starting work</li>
        <li>Suggests "shortcuts" or "money-saving" alternatives</li>
      </ul>

      <h3>Cost-Saving Tips</h3>
      <ul>
        <li>Provide existing surveys or plats to surveyor</li>
        <li>Clear boundary lines of brush/debris before field work</li>
        <li>Schedule during surveyor's slow season</li>
        <li>Group multiple surveys if buying multiple parcels</li>
        <li>Accept standard timeline instead of rush service</li>
        <li>Ask if you can mark corners yourself after survey</li>
      </ul>

      <p>Use this calculator to estimate property survey costs and understand the timeline and risks associated with boundary determinations for your property transaction.</p>
    `
  },
};

export { PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT };
