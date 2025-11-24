import { CalculatorContent } from '@/types';

export const NEW_YORK_ADIRONDACK_PARK_AGENCY_COMPLIANCE_CHECKER_CONTENT: CalculatorContent = {
  title: 'New York Adirondack Park Agency (APA) Compliance Checker',
  description: 'Determine if your Adirondack Park property requires APA permit and analyze land use classification restrictions',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'new-york-adirondack-park-agency-compliance-checker',
  article: {
    title: "Understanding the Adirondack Park Agency Regulations",
    content: `
    <h2>What is the Adirondack Park Agency?</h2>
    <p>The Adirondack Park Agency (APA) regulates land use and development in the 6-million-acre Adirondack Park in upstate New York. Created in 1971, the APA protects the Park's unique mix of public and private lands while allowing appropriate development.</p>
    
    <h3>The Adirondack Park</h3>
    <p>Key facts about the Park:</p>
    <ul>
      <li><strong>Size:</strong> 6 million acres (larger than Yellowstone, Everglades, Glacier, and Grand Canyon combined)</li>
      <li><strong>Ownership:</strong> 52% public (Forest Preserve), 48% private land</li>
      <li><strong>Population:</strong> ~130,000 year-round residents in 92 towns and villages</li>
      <li><strong>Counties:</strong> Portions of 12 counties including Essex, Franklin, Hamilton, Herkimer</li>
    </ul>
    
    <h3>Private Land Classification System</h3>
    <p>The APA divides private land into six categories (most to least restrictive):</p>
    <ul>
      <li><strong>Hamlet:</strong> Existing developed areas - least restrictive, local control</li>
      <li><strong>Moderate Intensity Use:</strong> 500' average lot size, 3 principal buildings/acre</li>
      <li><strong>Low Intensity Use:</strong> 1.3 acre average lot size, 1 principal building/acre</li>
      <li><strong>Rural Use:</strong> 3.2 acre average lot size, shoreline development allowed</li>
      <li><strong>Resource Management:</strong> 8.5 acre average lot size, very limited development</li>
      <li><strong>Industrial Use:</strong> Mining, forestry operations</li>
    </ul>
    
    <h3>When APA Permit is Required</h3>
    <p>Private landowners need APA permits for:</p>
    <ul>
      <li><strong>Subdivisions:</strong> Creating new building lots (varies by classification)</li>
      <li><strong>Shoreline Development:</strong> Within 150' of lakes, ponds, rivers, streams</li>
      <li><strong>Wetlands:</strong> Activity within 100' of wetlands over 1 acre</li>
      <li><strong>Elevation Development:</strong> Above 2,500 feet elevation</li>
      <li><strong>Commercial Development:</strong> Most commercial/industrial projects</li>
      <li><strong>Significant Projects:</strong> Large-scale residential development</li>
    </ul>
    
    <h3>Jurisdictional Determination</h3>
    <p>Project review may be by:</p>
    <ul>
      <li><strong>Local Government Only:</strong> Small projects in Hamlets, minor activities</li>
      <li><strong>APA Staff Review:</strong> Class A projects (minor), 30-day review</li>
      <li><strong>APA Commission Review:</strong> Class B projects (major), public hearing, 90+ days</li>
    </ul>
    
    <h4>Class A Projects (Stafflevel Review)</h4>
    <ul>
      <li>Single-family homes on approved lots</li>
      <li>Small subdivisions (typically 4 lots or fewer)</li>
      <li>Minor shoreline structures (small docks, boathouses)</li>
      <li>Timber harvests under 25 acres</li>
      <li>Review time: 30-60 days</li>
    </ul>
    
    <h4>Class B Projects (Commission Review)</h4>
    <ul>
      <li>Major subdivisions (5+ lots typically)</li>
      <li>Commercial development</li>
      <li>Large-scale residential projects</li>
      <li>Significant shoreline development</li>
      <li>Review time: 90+ days, public hearing required</li>
    </ul>
    
    <h3>Critical Environmental Features</h3>
    <p>Extra scrutiny for development affecting:</p>
    <ul>
      <li><strong>Shorelines:</strong> 150' setback from mean high water mark</li>
      <li><strong>Wetlands:</strong> 100' buffer from APA-designated wetlands</li>
      <li><strong>Steep Slopes:</strong> 15% or greater slopes</li>
      <li><strong>River Areas:</strong> Protected corridors along designated rivers</li>
      <li><strong>Critical Habitat:</strong> Endangered and threatened species areas</li>
    </ul>
    
    <h3>Application Process</h3>
    <ul>
      <li>Determine land use classification (contact APA or check maps)</li>
      <li>Pre-application consultation recommended (free)</li>
      <li>Submit completed application with required surveys and studies</li>
      <li>Application fees: $75-$500 depending on project type</li>
      <li>Review period begins when application deemed complete</li>
      <li>Permits typically valid for 3-5 years</li>
    </ul>
    
    <h3>Exemptions</h3>
    <p>Some activities don't require APA permits:</p>
    <ul>
      <li>Agricultural and horticultural uses</li>
      <li>Forest management activities (with notification)</li>
      <li>Repairs and maintenance of existing structures</li>
      <li>Landscaping within 35' of existing structures</li>
      <li>Emergency actions for public safety</li>
    </ul>
    
    <h3>Penalties for Non-Compliance</h3>
    <ul>
      <li>Civil penalties up to $10,000 per violation</li>
      <li>Criminal penalties for intentional violations</li>
      <li>Required restoration of affected areas</li>
      <li>Potential inability to obtain future permits</li>
      <li>Difficulty selling property with permit violations</li>
    </ul>
    
    <h3>Impact on Property Values</h3>
    <ul>
      <li>Stricter classifications can limit development and reduce value</li>
      <li>Shoreline properties command premium prices despite restrictions</li>
      <li>APA approval adds value by demonstrating development rights</li>
      <li>Conservation easements offer tax benefits and some compensation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "landClass",
        label: "Land Use Classification",
        type: "select",
        options: [
          "Hamlet",
          "Moderate Intensity Use",
          "Low Intensity Use",
          "Rural Use",
          "Resource Management",
          "Industrial Use",
          "Unknown/Need Determination"
        ],
        defaultValue: "Low Intensity Use",
      },
      {
        name: "projectType",
        label: "Proposed Project Type",
        type: "select",
        options: [
          "Single-Family Home",
          "Subdivision (2-4 lots)",
          "Subdivision (5+ lots)",
          "Commercial Development",
          "Shoreline Structure",
          "Other Development"
        ],
        defaultValue: "Single-Family Home",
      },
      {
        name: "shorelineDistance",
        label: "Distance from Shoreline (feet)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "wetlandDistance",
        label: "Distance from Wetlands (feet)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "elevation",
        label: "Is Property Above 2,500 feet?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "APA Permit Required?", isCurrency: false },
      { label: "Review Classification", isCurrency: false },
      { label: "Estimated Timeline", isCurrency: false },
      { label: "Application Fee Range", isCurrency: false },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const landClass = data.landClass || "Low Intensity Use";
      const projectType = data.projectType || "Single-Family Home";
      const shorelineDistance = Number(data.shorelineDistance) || 500;
      const wetlandDistance = Number(data.wetlandDistance) || 200;
      const elevation = data.elevation === "Yes";
      
      let permitRequired = false;
      let reviewClass = "";
      let timeline = "";
      let feeRange = "";
      let nextSteps = "";
      
      // Determine if permit required
      const nearShoreline = shorelineDistance < 150;
      const nearWetland = wetlandDistance < 100;
      
      if (landClass === "Hamlet") {
        permitRequired = false;
        reviewClass = "Local review only - APA not involved";
        timeline = "Follow local approval process";
        feeRange = "Local fees only";
        nextSteps = "Contact local building department. Hamlet areas have local control.";
      } else if (landClass === "Unknown/Need Determination") {
        permitRequired = true;
        reviewClass = "⚠️ Unknown - Jurisdictional determination needed";
        timeline = "2-4 weeks for determination";
        feeRange = "Free jurisdictional inquiry";
        nextSteps = "Contact APA for jurisdictional determination. Provide property tax map number and description.";
      } else {
        // Check various triggers
        if (projectType === "Single-Family Home" && !nearShoreline && !nearWetland && !elevation) {
          permitRequired = true;
          reviewClass = "✅ Class A - Staff-level review (30-60 days)";
          timeline = "30-60 days";
          feeRange = "$75-$150";
          nextSteps = "Submit Class A permit application to APA. Include site plan and survey.";
        } else if (projectType.includes("Subdivision")) {
          if (projectType.includes("5+")) {
            permitRequired = true;
            reviewClass = "✅ Class B - Commission review required";
            timeline = "90-180 days (public hearing required)";
            feeRange = "$300-$500";
            nextSteps = "Schedule pre-application meeting. Prepare environmental assessment. Public hearing will be required.";
          } else {
            permitRequired = true;
            reviewClass = "✅ Class A - Staff-level review";
            timeline = "30-60 days";
            feeRange = "$150-$300";
            nextSteps = "Submit subdivision application with survey and site constraints map.";
          }
        } else if (nearShoreline || nearWetland || elevation) {
          permitRequired = true;
          reviewClass = "✅ Class A or B - Depends on scope";
          timeline = "60-120 days";
          feeRange = "$150-$400";
          nextSteps = "Critical resource area involved. Prepare detailed site plan showing buffers and constraints.";
        } else if (projectType === "Commercial Development") {
          permitRequired = true;
          reviewClass = "✅ Class B - Commission review";
          timeline = "90-180+ days";
          feeRange = "$300-$500+";
          nextSteps = "Major review required. Consult with APA planner early. Environmental assessment needed.";
        } else {
          permitRequired = true;
          reviewClass = "✅ Likely Class A";
          timeline = "30-60 days";
          feeRange = "$75-$250";
          nextSteps = "Contact APA to confirm jurisdiction and application requirements.";
        }
      }
      
      const permitStatus = permitRequired ? "✅ YES - APA Permit Required" : "❌ NO - Local Approval Only";

      return [
        { label: "APA Permit Required?", value: permitStatus, isCurrency: false },
        { label: "Review Classification", value: reviewClass, isCurrency: false },
        { label: "Estimated Timeline", value: timeline, isCurrency: false },
        { label: "Application Fee Range", value: feeRange, isCurrency: false },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
