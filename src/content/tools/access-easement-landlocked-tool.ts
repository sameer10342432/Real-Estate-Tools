import { CalculatorContent } from '@/types';

export const ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT: CalculatorContent = {
  title: 'Access Easement (Landlocked) Tool - Calculate Easement Value & Costs',
  description: 'Analyze access easement options for landlocked properties including easement valuation, legal costs, alternative access routes, and prescriptive easement eligibility',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'access-easement-landlocked-tool',
  article: {
    title: "Access Easement Tool: Solutions for Landlocked Properties",
    content: `
    <h2>What is an Access Easement?</h2>
    <p>An access easement is a legal right to cross another person's property to reach your landlocked property. Without legal access to a public road, a property is considered "landlocked" and may be unusable and difficult to sell without an easement.</p>
    
    <h3>Types of Access Easements</h3>
    <p><strong>Express Easement:</strong> Written legal agreement granting access rights</p>
    <ul>
      <li>Purchased from neighboring property owner</li>
      <li>Negotiated price based on property value impact</li>
      <li>Recorded in property deed and title</li>
    </ul>
    
    <p><strong>Easement by Necessity:</strong> Court-granted access when property is landlocked</p>
    <ul>
      <li>Must prove no other reasonable access exists</li>
      <li>Requires common ownership history (same original parcel)</li>
      <li>Legal action required to establish</li>
    </ul>
    
    <p><strong>Prescriptive Easement:</strong> Acquired through open, continuous use</p>
    <ul>
      <li>Requires 7-20 years of continuous use (varies by state)</li>
      <li>Use must be open, notorious, and without permission</li>
      <li>Legal action required to confirm</li>
    </ul>
    
    <h3>Costs of Obtaining Access Easement</h3>
    <ul>
      <li><strong>Purchase Price:</strong> $5,000-$50,000+ (5-20% of property value typically)</li>
      <li><strong>Attorney Fees:</strong> $2,000-$10,000 for negotiation and drafting</li>
      <li><strong>Survey Costs:</strong> $1,000-$5,000 to define easement boundaries</li>
      <li><strong>Title Work:</strong> $500-$2,000 for recording and title insurance</li>
      <li><strong>Road Construction:</strong> $10-$50/linear foot for gravel access road</li>
      <li><strong>Litigation (if required):</strong> $15,000-$100,000+ for court action</li>
    </ul>
    
    <h3>Factors Affecting Easement Value</h3>
    <ul>
      <li><strong>Impact on Servient Property:</strong> How much easement affects neighbor's land use and value</li>
      <li><strong>Alternative Routes:</strong> Number and cost of other possible access options</li>
      <li><strong>Length and Width:</strong> Longer or wider easements cost more</li>
      <li><strong>Property Values:</strong> Higher property values = higher easement costs</li>
      <li><strong>Existing Use:</strong> Already-used paths may be easier to formalize</li>
    </ul>
    
    <h3>Easement by Necessity Requirements</h3>
    <p>To qualify for easement by necessity, you must prove:</p>
    <ul>
      <li>Property is truly landlocked with no legal access</li>
      <li>Both properties were once part of the same parcel (unity of title)</li>
      <li>Necessity existed when properties were separated</li>
      <li>No reasonable alternative access exists</li>
    </ul>
    
    <h3>Prescriptive Easement Requirements</h3>
    <p>To claim a prescriptive easement:</p>
    <ul>
      <li><strong>Open and Notorious:</strong> Use is visible and obvious</li>
      <li><strong>Continuous:</strong> Uninterrupted use for statutory period (7-20 years by state)</li>
      <li><strong>Hostile:</strong> Without owner's permission (permissive use doesn't count)</li>
      <li><strong>Exclusive:</strong> Claimant's use, not shared with general public</li>
    </ul>
    
    <h3>Alternative Solutions</h3>
    <ul>
      <li><strong>Purchase Adjacent Land:</strong> Buy a strip of land for permanent access</li>
      <li><strong>Land Swap:</strong> Exchange land with neighbor for access</li>
      <li><strong>Shared Driveway Agreement:</strong> Cost-sharing arrangement with neighbor</li>
      <li><strong>Public Road Dedication:</strong> Work with county to create public access</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Maintenance Responsibility:</strong> Who pays for road upkeep and repairs</li>
      <li><strong>Width and Specifications:</strong> Adequate for intended use (emergency vehicles, delivery)</li>
      <li><strong>Future Development:</strong> Ensure easement allows for property development</li>
      <li><strong>Title Insurance:</strong> Verify easement is insurable</li>
      <li><strong>Utilities:</strong> Include rights for utility installation in easement</li>
    </ul>
    
    <h3>Legal Steps to Obtain Easement</h3>
    <ol>
      <li>Hire real estate attorney experienced in easement law</li>
      <li>Order property survey showing landlocked status</li>
      <li>Research property history and ownership records</li>
      <li>Attempt negotiation with neighbor(s) first</li>
      <li>File court action if negotiation fails</li>
      <li>Record easement in county land records</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Landlocked Property Value ($)",
        type: "number",
        placeholder: "250000",
        defaultValue: "250000",
      },
      {
        name: "easementLength",
        label: "Easement Length (Feet)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "easementWidth",
        label: "Easement Width (Feet)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "landValuePerAcre",
        label: "Land Value ($/Acre)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "roadConstructionCost",
        label: "Road Construction Cost ($/Linear Foot)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
    ],
    results: [
      { label: "Easement Area (Acres)", isCurrency: false },
      { label: "Estimated Easement Purchase Price", isCurrency: true },
      { label: "Road Construction Cost", isCurrency: true },
      { label: "Legal & Survey Fees (Estimated)", isCurrency: true },
      { label: "Total Estimated Cost", isCurrency: true },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const easementLength = Number(data.easementLength) || 0;
      const easementWidth = Number(data.easementWidth) || 0;
      const landValuePerAcre = Number(data.landValuePerAcre) || 0;
      const roadConstructionCost = Number(data.roadConstructionCost) || 0;
      
      // Calculate easement area in acres
      const easementSqFt = easementLength * easementWidth;
      const easementAcres = easementSqFt / 43560;
      
      // Estimate easement purchase price (typically 150-200% of land value due to impact)
      const baseLandValue = easementAcres * landValuePerAcre;
      const easementPurchasePrice = baseLandValue * 1.75; // 175% of land value
      
      // Calculate road construction cost
      const roadCost = easementLength * roadConstructionCost;
      
      // Estimate legal and survey fees
      const legalFees = 5000; // Average attorney fees
      const surveyFees = 2500; // Average survey costs
      const titleFees = 1000; // Title work and recording
      const totalLegalFees = legalFees + surveyFees + titleFees;
      
      // Total cost
      const totalCost = easementPurchasePrice + roadCost + totalLegalFees;

      return [
        { label: "Easement Area (Acres)", value: easementAcres.toFixed(3), isCurrency: false },
        { label: "Estimated Easement Purchase Price", value: `${easementPurchasePrice.toFixed(2)}`, isCurrency: true },
        { label: "Road Construction Cost", value: `${roadCost.toFixed(2)}`, isCurrency: true },
        { label: "Legal & Survey Fees (Estimated)", value: `${totalLegalFees.toFixed(2)}`, isCurrency: true },
        { label: "Total Estimated Cost", value: `${totalCost.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
