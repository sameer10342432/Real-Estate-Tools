import { CalculatorContent } from '@/types';

export const FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Florida Coastal Construction Control Line (CCCL) Calculator',
  description: 'Determine if your Florida coastal property is seaward of the CCCL and analyze permit requirements for beachfront construction',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'florida-coastal-construction-control-line-calculator',
  article: {
    title: "Understanding Florida's Coastal Construction Control Line",
    content: `
    <h2>What is the Coastal Construction Control Line (CCCL)?</h2>
    <p>The Coastal Construction Control Line (CCCL) is established by the Florida Department of Environmental Protection (FDEP) along sandy beaches to define the portion of beach-dune system subject to severe fluctuations from storms and hurricanes. Construction seaward of the CCCL requires special state permits.</p>
    
    <h3>Purpose of the CCCL</h3>
    <ul>
      <li>Protect beach-dune systems that provide natural storm protection</li>
      <li>Prevent construction that could harm beaches or be destroyed by storms</li>
      <li>Ensure structures can withstand coastal storms and hurricanes</li>
      <li>Preserve public beach access and recreational use</li>
      <li>Protect sea turtle nesting habitat</li>
      <li>Maintain natural sediment supply and coastal processes</li>
    </ul>
    
    <h3>Where CCCLs Are Established</h3>
    <p>CCCLs exist along sandy beaches in these coastal counties:</p>
    <ul>
      <li><strong>Atlantic Coast:</strong> Nassau, Duval, St. Johns, Flagler, Volusia, Brevard, Indian River, St. Lucie, Martin, Palm Beach, Broward, Miami-Dade</li>
      <li><strong>Gulf Coast:</strong> Monroe, Collier, Lee, Charlotte, Sarasota, Manatee, Hillsborough, Pinellas, Pasco, Hernando, Citrus, Levy, Dixie, Taylor, Jefferson, Wakulla, Franklin, Gulf, Bay, Walton, Okaloosa, Santa Rosa, Escambia</li>
    </ul>
    
    <h3>Activities Requiring CCCL Permits</h3>
    <p>If your property is seaward of the CCCL, permits are required for:</p>
    <ul>
      <li><strong>New Construction:</strong> Houses, condos, hotels, commercial buildings</li>
      <li><strong>Additions/Renovations:</strong> Expanding existing structures</li>
      <li><strong>Swimming Pools:</strong> Pools and pool decks</li>
      <li><strong>Seawalls/Revetments:</strong> Coastal armoring structures</li>
      <li><strong>Beach Walkovers:</strong> Elevated walkways over dunes</li>
      <li><strong>Excavation:</strong> Digging, grading, or sand removal</li>
      <li><strong>Major Repairs:</strong> Substantial improvements (>50% value)</li>
    </ul>
    
    <h3>CCCL Permit Requirements</h3>
    <ul>
      <li><strong>Engineering Plans:</strong> Sealed plans by Florida-licensed professional engineer</li>
      <li><strong>Structural Design:</strong> Must meet enhanced wind load and flood requirements</li>
      <li><strong>Foundation Systems:</strong> Deep pilings or engineered foundations required</li>
      <li><strong>Breakaway Walls:</strong> Ground-level enclosures must break away in flooding</li>
      <li><strong>Dune Protection:</strong> Minimize impacts to beach-dune system</li>
      <li><strong>Sea Turtle Compliance:</strong> Lighting restrictions during nesting season (March-October)</li>
    </ul>
    
    <h3>Application Process</h3>
    <ul>
      <li><strong>Step 1:</strong> Determine if property is seaward of CCCL (FDEP maps or county records)</li>
      <li><strong>Step 2:</strong> Hire licensed engineer specializing in coastal construction</li>
      <li><strong>Step 3:</strong> Prepare application with detailed plans, surveys, and environmental assessment</li>
      <li><strong>Step 4:</strong> Submit to FDEP (application fee $1,000-$5,000 depending on project)</li>
      <li><strong>Step 5:</strong> FDEP review (typically 90-180 days)</li>
      <li><strong>Step 6:</strong> Address any requested modifications</li>
      <li><strong>Step 7:</strong> Obtain local building permits (still required)</li>
    </ul>
    
    <h3>Design Standards</h3>
    <p>Structures seaward of CCCL must meet stringent requirements:</p>
    <ul>
      <li><strong>Elevation:</strong> Elevated on pilings/columns, no solid foundations</li>
      <li><strong>Wind Load:</strong> Designed for 150+ mph sustained winds</li>
      <li><strong>Flood Zone:</strong> Base flood elevation + additional freeboard</li>
      <li><strong>Impact Resistant:</strong> Windows and doors rated for windborne debris</li>
      <li><strong>Anchoring:</strong> Engineered connections to resist uplift and lateral loads</li>
      <li><strong>Materials:</strong> Corrosion-resistant materials in coastal environment</li>
    </ul>
    
    <h3>Sea Turtle Protection Measures</h3>
    <ul>
      <li>Tinted windows or window treatments to minimize interior lighting</li>
      <li>Outdoor lighting must be turtle-friendly (amber LED)</li>
      <li>Shields and timers on fixtures</li>
      <li>Compliance monitoring during construction and operation</li>
    </ul>
    
    <h3>Costs and Timeline</h3>
    <ul>
      <li><strong>Engineering Fees:</strong> $10,000-$50,000+ for design and permit preparation</li>
      <li><strong>Permit Fees:</strong> $1,000-$5,000 to FDEP</li>
      <li><strong>Construction Premium:</strong> 20-40% higher than non-CCCL properties</li>
      <li><strong>Timeline:</strong> 6-12 months for permit approval</li>
      <li><strong>Insurance:</strong> Higher premiums for wind and flood coverage</li>
    </ul>
    
    <h3>Exemptions and Special Cases</h3>
    <ul>
      <li><strong>Minor Repairs:</strong> Routine maintenance not requiring permit</li>
      <li><strong>Emergency Actions:</strong> Temporary protection during storms (must be removed)</li>
      <li><strong>Existing Structures:</strong> "Grandfathered" but major renovations trigger review</li>
      <li><strong>Variance Process:</strong> Available for hardship cases (rarely granted)</li>
    </ul>
    
    <h3>Enforcement and Penalties</h3>
    <ul>
      <li>Civil penalties up to $10,000 per violation per day</li>
      <li>Required removal of unpermitted structures</li>
      <li>Restoration of damaged beach-dune system at owner expense</li>
      <li>Inability to obtain certificates of occupancy</li>
    </ul>
    
    <h3>Impact on Property Values</h3>
    <ul>
      <li>Beachfront properties command premium prices despite CCCL restrictions</li>
      <li>Higher construction and insurance costs affect ROI</li>
      <li>Approved CCCL permits add value by confirming development rights</li>
      <li>Storm damage risk can affect resale value and financing</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "county",
        label: "County",
        type: "select",
        options: [
          "Miami-Dade",
          "Broward",
          "Palm Beach",
          "St. Lucie",
          "Brevard",
          "Volusia",
          "Pinellas",
          "Sarasota",
          "Lee",
          "Collier",
          "Monroe (Keys)",
          "Other Coastal County",
          "Inland County (No CCCL)"
        ],
        defaultValue: "Broward",
      },
      {
        name: "seawardCCCL",
        label: "Property Seaward of CCCL?",
        type: "select",
        options: ["Yes", "No", "Unsure"],
        defaultValue: "Unsure",
      },
      {
        name: "projectType",
        label: "Proposed Project",
        type: "select",
        options: [
          "New Single-Family Home",
          "New Multi-Family/Condo",
          "Addition/Renovation",
          "Swimming Pool",
          "Seawall/Coastal Armoring",
          "Beach Walkover",
          "Minor Repairs"
        ],
        defaultValue: "New Single-Family Home",
      },
      {
        name: "structureValue",
        label: "Estimated Project Value",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
    ],
    results: [
      { label: "CCCL Permit Required?", isCurrency: false },
      { label: "Estimated Permit Fee", isCurrency: true },
      { label: "Estimated Timeline", isCurrency: false },
      { label: "Engineering Cost Range", isCurrency: false },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const county = data.county || "Broward";
      const seawardCCCL = data.seawardCCCL || "Unsure";
      const projectType = data.projectType || "New Single-Family Home";
      const structureValue = Number(data.structureValue) || 500000;
      
      let permitRequired = "";
      let permitFee = 0;
      let timeline = "";
      let engineeringCost = "";
      let nextSteps = "";
      
      if (county === "Inland County (No CCCL)") {
        permitRequired = "❌ NO - Property not in coastal CCCL jurisdiction";
        permitFee = 0;
        timeline = "Standard local building permit process";
        engineeringCost = "$0 (No CCCL engineering required)";
        nextSteps = "Proceed with local building department. No FDEP CCCL permit needed.";
      } else if (seawardCCCL === "No") {
        permitRequired = "❌ NO - Property landward of CCCL";
        permitFee = 0;
        timeline = "Standard local building permit (30-90 days)";
        engineeringCost = "$0 (No CCCL engineering required)";
        nextSteps = "Verify CCCL location with county. Proceed with local building permits only.";
      } else if (seawardCCCL === "Unsure") {
        permitRequired = "⚠️ UNKNOWN - CCCL determination needed";
        permitFee = 0;
        timeline = "1-2 weeks for determination";
        engineeringCost = "Cannot estimate until CCCL status confirmed";
        nextSteps = "Contact county building department or FDEP. Request CCCL survey or check county GIS maps.";
      } else {
        // Property is seaward of CCCL
        if (projectType === "Minor Repairs") {
          permitRequired = "⚠️ MAYBE - Depends on scope of repairs";
          permitFee = 0;
          timeline = "Contact FDEP for determination";
          engineeringCost = "$0-$5,000";
          nextSteps = "Routine maintenance typically exempt. Major repairs (>50% value) require permit. Consult FDEP.";
        } else {
          permitRequired = "✅ YES - FDEP CCCL Permit Required";
          
          // Calculate permit fee based on project value
          if (structureValue < 100000) permitFee = 1000;
          else if (structureValue < 500000) permitFee = 2500;
          else if (structureValue < 1000000) permitFee = 3500;
          else permitFee = 5000;
          
          timeline = "6-12 months for FDEP review + local permits";
          
          // Engineering costs
          if (projectType.includes("New")) {
            engineeringCost = "$15,000-$50,000+";
          } else if (projectType === "Swimming Pool") {
            engineeringCost = "$10,000-$25,000";
          } else if (projectType.includes("Seawall")) {
            engineeringCost = "$20,000-$75,000+";
          } else {
            engineeringCost = "$10,000-$35,000";
          }
          
          nextSteps = "Hire Florida-licensed coastal engineer immediately. Prepare detailed site survey. Budget 6-12 months for approval. Ensure compliance with enhanced building codes and sea turtle protection measures.";
        }
      }

      return [
        { label: "CCCL Permit Required?", value: permitRequired, isCurrency: false },
        { label: "Estimated Permit Fee", value: permitFee, isCurrency: true },
        { label: "Estimated Timeline", value: timeline, isCurrency: false },
        { label: "Engineering Cost Range", value: engineeringCost, isCurrency: false },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
