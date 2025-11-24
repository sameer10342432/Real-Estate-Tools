import { CalculatorContent } from '@/types';

export const NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT: CalculatorContent = {
  title: 'New Jersey Highlands Water Protection Analyzer',
  description: 'Determine if your property is in the NJ Highlands region and analyze development restrictions under the Highlands Water Protection and Planning Act',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'new-jersey-highlands-water-protection-analyzer',
  article: {
    title: "Understanding New Jersey's Highlands Water Protection Act",
    content: `
    <h2>What is the NJ Highlands Act?</h2>
    <p>The Highlands Water Protection and Planning Act (2004) protects 1,343 square miles in northwestern New Jersey that provide drinking water to over 5 million people. The Act strictly regulates development to preserve water quality, forests, farmland, and wildlife habitat.</p>
    
    <h3>The Highlands Region</h3>
    <p>The Highlands includes portions of 88 municipalities in 7 counties:</p>
    <ul>
      <li><strong>Bergen County:</strong> Mahwah, Oakland, Ringwood</li>
      <li><strong>Hunterdon County:</strong> 26 municipalities including Clinton, Lebanon, Tewksbury</li>
      <li><strong>Morris County:</strong> 25 municipalities including Boonton, Rockaway, Parsippany</li>
      <li><strong>Passaic County:</strong> 13 municipalities including Pompton Lakes, West Milford</li>
      <li><strong>Somerset County:</strong> 11 municipalities including Bernards, Bedminster</li>
      <li><strong>Sussex County:</strong> 15 municipalities including Sparta, Vernon, Hamburg</li>
      <li><strong>Warren County:</strong> All 22 municipalities</li>
    </ul>
    
    <h3>Preservation Area vs. Planning Area</h3>
    <ul>
      <li><strong>Preservation Area (415 sq mi):</strong> Strict regulations, Highlands Council approval required for most development</li>
      <li><strong>Planning Area (760 sq mi):</strong> Voluntary conformance with Regional Master Plan, some state incentives</li>
      <li><strong>Existing Communities:</strong> Some flexibility for infill development in designated areas</li>
    </ul>
    
    <h3>Development Restrictions in Preservation Area</h3>
    <p>Major development (25+ acres, 25+ new dwellings, or 100,000+ sq ft) requires:</p>
    <ul>
      <li><strong>Highlands Exemption:</strong> Proof that activity existed before August 2004, or</li>
      <li><strong>Highlands Waiver:</strong> Demonstrate no alternatives exist and minimal impact, or</li>
      <li><strong>Redevelopment Approval:</strong> For designated redevelopment areas</li>
      <li><strong>Water Quality Impact Assessment:</strong> Comprehensive environmental study</li>
      <li><strong>Septic System Restrictions:</strong> Severe limitations on new septic systems</li>
      <li><strong>Forest Clearing Limits:</strong> Strict controls on tree removal</li>
    </ul>
    
    <h3>Protected Resources</h3>
    <p>Development severely restricted near:</p>
    <ul>
      <li><strong>Prime Ground Water Recharge Areas:</strong> Critical aquifer recharge zones</li>
      <li><strong>Surface Waters:</strong> 300-foot buffers from streams, lakes, reservoirs</li>
      <li><strong>Steep Slopes:</strong> 15-20% slopes (limited disturbance), 20%+ slopes (prohibited)</li>
      <li><strong>Critical Habitat:</strong> Endangered and threatened species areas</li>
      <li><strong>Forest Areas:</strong> Mature forests and core habitat areas</li>
      <li><strong>Prime Agricultural Soils:</strong> High-quality farmland</li>
    </ul>
    
    <h3>Subdivision Restrictions</h3>
    <ul>
      <li><strong>Preservation Area:</strong> Generally limited to 1 unit per 25-88 acres depending on resources</li>
      <li><strong>Cluster Development:</strong> May be required to preserve open space</li>
      <li><strong>Transfer of Development Rights (TDR):</strong> Can send/receive development rights</li>
      <li><strong>Existing Lots:</strong> Pre-Act (before 2004) lots may have some building rights</li>
    </ul>
    
    <h3>Exemptions and Exceptions</h3>
    <p>Some activities may be exempt:</p>
    <ul>
      <li>Single-family homes on existing lots (less than 1 acre disturbance)</li>
      <li>Agricultural and horticultural uses</li>
      <li>Forest stewardship activities</li>
      <li>Repairs and maintenance of existing structures</li>
      <li>Emergency activities for public safety</li>
    </ul>
    
    <h3>Impact on Property Values</h3>
    <ul>
      <li>Development restrictions can significantly reduce property values</li>
      <li>State compensation programs available for some landowners</li>
      <li>Transfer of Development Rights can provide compensation</li>
      <li>Conservation easements offer tax benefits and payment options</li>
      <li>Some properties may qualify for Farmland Preservation programs</li>
    </ul>
    
    <h3>Approval Process</h3>
    <p>For major development in Preservation Area:</p>
    <ul>
      <li>Pre-application meeting with Highlands Council recommended</li>
      <li>Submit detailed application with environmental assessments</li>
      <li>Public comment period (typically 45 days)</li>
      <li>Highlands Council review and decision (can take 6-18 months)</li>
      <li>Municipal approvals still required after Highlands approval</li>
    </ul>
    
    <h3>Compliance Tools and Resources</h3>
    <ul>
      <li><strong>Highlands GIS Mapping:</strong> Online tools to determine property location and constraints</li>
      <li><strong>Technical Assistance:</strong> Free preliminary reviews available</li>
      <li><strong>Grant Programs:</strong> Funding for land acquisition and stewardship</li>
      <li><strong>Planning Assistance:</strong> Support for municipal master plan conformance</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "municipality",
        label: "Municipality",
        type: "select",
        options: [
          "Bergen County - Highlands Area",
          "Hunterdon County - Highlands Area",
          "Morris County - Highlands Area",
          "Passaic County - Highlands Area",
          "Somerset County - Highlands Area",
          "Sussex County - Highlands Area",
          "Warren County - Highlands Area",
          "Outside Highlands Region"
        ],
        defaultValue: "Morris County - Highlands Area",
      },
      {
        name: "zone",
        label: "Highlands Zone",
        type: "select",
        options: [
          "Preservation Area",
          "Planning Area",
          "Not in Highlands",
          "Unsure"
        ],
        defaultValue: "Preservation Area",
      },
      {
        name: "acres",
        label: "Property Size (acres)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "proposedUnits",
        label: "Proposed Dwelling Units",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "existingLot",
        label: "Lot Created Before August 2004?",
        type: "select",
        options: ["Yes", "No", "Unsure"],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "Highlands Jurisdiction", isCurrency: false },
      { label: "Permit Required?", isCurrency: false },
      { label: "Development Constraints", isCurrency: false },
      { label: "Estimated Timeline", isCurrency: false },
      { label: "Recommended Action", isCurrency: false },
    ],
    calculate: (data: any) => {
      const zone = data.zone || "Preservation Area";
      const acres = Number(data.acres) || 0;
      const proposedUnits = Number(data.proposedUnits) || 0;
      const existingLot = data.existingLot || "No";
      const municipality = data.municipality || "";
      
      let jurisdiction = "";
      let permitRequired = "";
      let constraints = "";
      let timeline = "";
      let action = "";
      
      if (zone === "Not in Highlands" || municipality === "Outside Highlands Region") {
        jurisdiction = "Not in Highlands - Standard local zoning applies";
        permitRequired = "No Highlands review required";
        constraints = "Follow local municipal zoning and NJDEP requirements";
        timeline = "Standard municipal review (3-6 months)";
        action = "Proceed with local planning board application.";
      } else if (zone === "Preservation Area") {
        jurisdiction = "🔴 Preservation Area - Strict regulations apply";
        
        if (proposedUnits >= 25 || acres >= 25) {
          permitRequired = "✅ YES - Major Development requires Highlands approval";
          constraints = "Comprehensive environmental review, water quality assessment, forest impact study required";
          timeline = "12-24 months for Highlands + municipal review";
          action = "Consult environmental attorney and engineer. Schedule pre-app meeting with Highlands Council.";
        } else if (proposedUnits === 1 && existingLot === "Yes") {
          permitRequired = "⚠️ MAYBE - Single home on existing lot may be exempt";
          constraints = "Limited to <1 acre disturbance, must avoid protected resources, septic system restrictions";
          timeline = "6-12 months if exemption applies";
          action = "Verify lot status and exemption eligibility with Highlands Council. Prepare site constraints map.";
        } else {
          permitRequired = "✅ YES - Highlands review likely required";
          constraints = "Steep slope restrictions, buffer requirements, septic limitations, forest clearing limits";
          timeline = "9-18 months";
          action = "Request Highlands GIS mapping of property. Identify all resource constraints before design.";
        }
      } else if (zone === "Planning Area") {
        jurisdiction = "🟡 Planning Area - Voluntary conformance encouraged";
        permitRequired = "No Highlands approval required (municipal discretion)";
        constraints = "Encouraged to follow Highlands standards. TDR opportunities available.";
        timeline = "Standard municipal review (6-12 months)";
        action = "Check if municipality conforms to Highlands Plan. Consider TDR for additional development rights.";
      } else {
        jurisdiction = "⚠️ Unknown - Verification needed";
        permitRequired = "Status unclear - property research required";
        constraints = "Cannot be determined without proper location verification";
        timeline = "Unknown";
        action = "Use Highlands Council GIS mapping tool to determine exact zone and constraints.";
      }

      return [
        { label: "Highlands Jurisdiction", value: jurisdiction, isCurrency: false },
        { label: "Permit Required?", value: permitRequired, isCurrency: false },
        { label: "Development Constraints", value: constraints, isCurrency: false },
        { label: "Estimated Timeline", value: timeline, isCurrency: false },
        { label: "Recommended Action", value: action, isCurrency: false },
      ];
    },
  },
};
