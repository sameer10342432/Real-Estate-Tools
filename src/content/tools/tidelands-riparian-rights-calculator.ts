import { CalculatorContent } from '@/types';

export const TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Tidelands (Riparian) Rights Calculator',
  description: 'Analyze riparian rights for properties adjacent to tidal waters and determine ownership, access, and development rights in coastal areas',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'tidelands-riparian-rights-calculator',
  article: {
    title: "Understanding Tidelands and Riparian Rights",
    content: `
    <h2>What are Tidelands and Riparian Rights?</h2>
    <p>Tidelands are coastal lands between the mean high tide line and mean low tide line. Riparian rights are the legal rights of property owners whose land borders navigable tidal waters. These rights vary significantly by state and can dramatically affect property value and use.</p>
    
    <h3>Tidelands Ownership Models</h3>
    <p>States follow different approaches to tidelands ownership:</p>
    <ul>
      <li><strong>Public Trust Doctrine (Most States):</strong> Tidelands owned by state for public benefit</li>
      <li><strong>Private Ownership (Few States):</strong> Upland owner may own to low tide line</li>
      <li><strong>Hybrid Systems:</strong> Mix of public and private ownership with restrictions</li>
    </ul>
    
    <h3>State-by-State Overview</h3>
    <h4>Public Tidelands States (State Owns to Mean High Tide)</h4>
    <ul>
      <li><strong>California:</strong> State owns to mean high tide, strong public access rights</li>
      <li><strong>Florida:</strong> State owns to mean high water line, public trust doctrine</li>
      <li><strong>New York:</strong> State owns to mean high water mark</li>
      <li><strong>New Jersey:</strong> State owns to mean high water line</li>
      <li><strong>Hawaii:</strong> State owns all beaches to vegetation line</li>
      <li><strong>Oregon:</strong> Public owns dry sand beach to vegetation line</li>
    </ul>
    
    <h4>Private Tidelands States (May Extend to Low Tide)</h4>
    <ul>
      <li><strong>Massachusetts:</strong> Upland owner may own to low tide or 100 rods, whichever is less</li>
      <li><strong>Maine:</strong> Private ownership to low tide line (colonial ordinance)</li>
      <li><strong>Delaware:</strong> Private ownership between high and low tide</li>
      <li><strong>Virginia:</strong> Some private tidelands grandfathered from colonial times</li>
    </ul>
    
    <h3>Riparian Rights for Tidal Properties</h3>
    <p>Even where state owns tidelands, riparian owners typically have rights including:</p>
    <ul>
      <li><strong>Wharf Out Rights:</strong> Right to build dock/pier to navigable water (with permits)</li>
      <li><strong>Access Rights:</strong> Right to access water across tidelands</li>
      <li><strong>View Rights:</strong> Limited protection against obstruction of water view</li>
      <li><strong>Accretion Rights:</strong> May gain land from natural sand deposition</li>
      <li><strong>Fishing/Navigation:</strong> Right to fish and navigate from your property</li>
    </ul>
    
    <h3>Common Restrictions on Riparian Rights</h3>
    <ul>
      <li><strong>Public Trust Doctrine:</strong> Can't interfere with public navigation, commerce, fishing</li>
      <li><strong>Environmental Regulations:</strong> Wetlands permits, coastal zone management</li>
      <li><strong>Navigational Servitude:</strong> Federal government can regulate navigable waters</li>
      <li><strong>Public Access:</strong> Many states require lateral beach access</li>
      <li><strong>Height/Size Limits:</strong> Restrictions on docks, piers, and structures</li>
    </ul>
    
    <h3>Dock and Pier Permitting</h3>
    <p>Building a dock typically requires multiple permits:</p>
    <ul>
      <li><strong>State Submerged Lands Lease:</strong> Lease from state for structures over tidelands</li>
      <li><strong>Army Corps of Engineers:</strong> Federal permit for structures in navigable waters</li>
      <li><strong>State Environmental Agency:</strong> Water quality and coastal zone permits</li>
      <li><strong>Local Municipality:</strong> Building permit and zoning approval</li>
      <li><strong>Timeline:</strong> 6-18 months for all approvals</li>
      <li><strong>Costs:</strong> $5,000-$25,000 in permit fees and engineering</li>
    </ul>
    
    <h3>Mean High Water Line Determination</h3>
    <p>Critical boundary for property rights:</p>
    <ul>
      <li>Determined by average high tide over 19-year tidal cycle</li>
      <li>Professional survey required for legal accuracy</li>
      <li>Line can shift due to erosion, accretion, or sea level rise</li>
      <li>Ambulatory boundary - moves with changing conditions</li>
      <li>Survey costs: $3,000-$10,000+ for tidal boundary survey</li>
    </ul>
    
    <h3>Beach Erosion and Property Rights</h3>
    <ul>
      <li><strong>Erosion:</strong> May lose land to sea (no compensation in most states)</li>
      <li><strong>Accretion:</strong> Natural sand deposit may add to your property</li>
      <li><strong>Avulsion:</strong> Sudden erosion events may not move property line</li>
      <li><strong>Beach Nourishment:</strong> Artificial sand addition doesn't convey ownership</li>
      <li><strong>Seawalls:</strong> May require permit, can affect erosion patterns</li>
    </ul>
    
    <h3>Public Access and Beach Rights</h3>
    <p>Public rights on tidal beaches vary by state:</p>
    <ul>
      <li><strong>Lateral Access:</strong> Public can walk along beach below high tide line</li>
      <li><strong>Recreational Use:</strong> Swimming, surfing, fishing generally allowed on public tidelands</li>
      <li><strong>Dry Sand Beach:</strong> Some states guarantee public access to dry sand</li>
      <li><strong>Customary Use:</strong> Historical public use may create prescriptive rights</li>
      <li><strong>Dedicated Access:</strong> Many developments must provide public beach access</li>
    </ul>
    
    <h3>Commercial Use of Riparian Rights</h3>
    <ul>
      <li><strong>Marina Development:</strong> Requires extensive permitting and leases</li>
      <li><strong>Aquaculture:</strong> Oyster farming, fish farming may be allowed</li>
      <li><strong>Commercial Fishing:</strong> Launching commercial boats</li>
      <li><strong>Water-Dependent Uses:</strong> Generally favored in permitting</li>
    </ul>
    
    <h3>Property Value Implications</h3>
    <ul>
      <li>Waterfront properties command 50-200% premium over inland properties</li>
      <li>Riparian rights (especially dock rights) significantly increase value</li>
      <li>Erosion risk and insurance costs can offset premium</li>
      <li>Regulatory restrictions limit development potential</li>
      <li>Private tidelands ownership (where allowed) adds substantial value</li>
    </ul>
    
    <h3>Title and Purchase Considerations</h3>
    <ul>
      <li>Title insurance may exclude tidelands and boundary disputes</li>
      <li>Survey showing mean high water line essential before purchase</li>
      <li>Verify permitted docks and structures are legal</li>
      <li>Review any tidelands leases or permits conveying with property</li>
      <li>Understand beach nourishment assessments and special taxes</li>
      <li>Check for pending erosion control projects or regulations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          "California (State Owns Tidelands)",
          "Florida (State Owns Tidelands)",
          "New York (State Owns Tidelands)",
          "New Jersey (State Owns Tidelands)",
          "Massachusetts (Private to Low Tide)",
          "Maine (Private to Low Tide)",
          "Delaware (Private Tidelands)",
          "Virginia (Mixed)",
          "North Carolina (State Owns)",
          "South Carolina (State Owns)",
          "Georgia (State Owns)",
          "Texas (State Owns)",
          "Washington (State Owns)",
          "Oregon (Public Dry Sand)",
          "Hawaii (State Owns to Vegetation)",
          "Other Coastal State"
        ],
        defaultValue: "Florida (State Owns Tidelands)",
      },
      {
        name: "structureType",
        label: "Proposed Structure/Use",
        type: "select",
        options: [
          "Private Dock/Pier",
          "Boat Lift",
          "Seawall/Bulkhead",
          "Beach Access Walkway",
          "Mooring",
          "No Structure - Access Only",
          "Commercial Marina"
        ],
        defaultValue: "Private Dock/Pier",
      },
      {
        name: "waterType",
        label: "Type of Tidal Water",
        type: "select",
        options: [
          "Ocean/Gulf Coast",
          "Tidal Bay/Harbor",
          "Tidal River/Creek",
          "Tidal Marsh",
          "Tidal Estuary"
        ],
        defaultValue: "Ocean/Gulf Coast",
      },
      {
        name: "propertyFrontage",
        label: "Water Frontage (feet)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
    ],
    results: [
      { label: "Tidelands Ownership", isCurrency: false },
      { label: "Your Riparian Rights", isCurrency: false },
      { label: "Permits Likely Required", isCurrency: false },
      { label: "Estimated Permit Costs", isCurrency: false },
      { label: "Key Considerations", isCurrency: false },
    ],
    calculate: (data: any) => {
      const state = data.state || "Florida (State Owns Tidelands)";
      const structureType = data.structureType || "Private Dock/Pier";
      const waterType = data.waterType || "Ocean/Gulf Coast";
      const frontage = Number(data.propertyFrontage) || 100;
      
      let ownership = "";
      let rights = "";
      let permits = "";
      let costs = "";
      let considerations = "";
      
      // Determine ownership model
      if (state.includes("Private to Low Tide") || state.includes("Private Tidelands")) {
        ownership = "🟢 Private - You likely own tidelands to low tide line";
        rights = "Extended riparian rights including tidelands ownership, wharf out rights, exclusive use between tides";
      } else if (state.includes("State Owns") || state.includes("Public")) {
        ownership = "🔵 Public - State owns tidelands below mean high water";
        rights = "Standard riparian rights: access to water, right to build dock with permits, accretion rights, reasonable use";
      } else {
        ownership = "⚠️ Mixed/Varies - Research specific location";
        rights = "Rights vary by jurisdiction - verify with local regulations";
      }
      
      // Determine permits needed
      if (structureType === "No Structure - Access Only") {
        permits = "Minimal - Pathway to water may need local approval only";
        costs = "$0-$2,000";
        considerations = "Generally allowed as riparian right. May need stabilized pathway. Ensure compliance with environmental setbacks.";
      } else if (structureType === "Private Dock/Pier") {
        permits = "State submerged lands lease, Army Corps 404 permit, State environmental permit, Local building permit";
        costs = "$8,000-$25,000";
        considerations = "Timeline: 6-18 months. Dock must not obstruct navigation. May need Environmental Impact Assessment. Annual lease fees may apply.";
      } else if (structureType === "Seawall/Bulkhead") {
        permits = "Army Corps permit, State coastal zone permit, Environmental impact review, Local approval";
        costs = "$15,000-$50,000+";
        considerations = "Seawalls controversial and heavily regulated. May affect adjacent properties. Consider living shorelines as alternative. High construction costs.";
      } else if (structureType === "Commercial Marina") {
        permits = "Major development permits: Army Corps, State environmental, Coastal zone, Submerged lands lease, Local zoning";
        costs = "$50,000-$200,000+";
        considerations = "Extensive review process (1-3 years). Public notice and hearings required. Must demonstrate public benefit. Significant ongoing regulatory compliance.";
      } else {
        permits = "State permit, possible federal Army Corps approval, local building permit";
        costs = "$5,000-$15,000";
        considerations = `${structureType} requires permits. Consult with marine contractor familiar with local regulations. Timing depends on environmental review.`;
      }

      return [
        { label: "Tidelands Ownership", value: ownership, isCurrency: false },
        { label: "Your Riparian Rights", value: rights, isCurrency: false },
        { label: "Permits Likely Required", value: permits, isCurrency: false },
        { label: "Estimated Permit Costs", value: costs, isCurrency: false },
        { label: "Key Considerations", value: considerations, isCurrency: false },
      ];
    },
  },
};
