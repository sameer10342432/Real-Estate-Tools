import { CalculatorContent } from '@/types';

export const VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Vermont Act 250 (Land Use) Analyzer',
  description: 'Determine if your Vermont property development requires Act 250 permit review and analyze compliance requirements for land use regulations',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'vermont-act-250-land-use-analyzer',
  article: {
    title: "Understanding Vermont's Act 250 Land Use Regulations",
    content: `
    <h2>What is Vermont Act 250?</h2>
    <p>Act 250 is Vermont's land use and development law, enacted in 1970 to regulate major developments and protect the state's environment, scenic beauty, and historic sites. It's one of the most comprehensive land use planning laws in the United States.</p>
    
    <h3>When Does Act 250 Apply?</h3>
    <p>Act 250 review is required for:</p>
    <ul>
      <li><strong>Commercial/Industrial Development:</strong> Projects involving 10+ acres or creating 10,000+ sq ft of improvements</li>
      <li><strong>Housing Development:</strong> Projects with 10+ housing units (6+ units in towns without zoning)</li>
      <li><strong>Subdivision:</strong> Creating 10+ lots within a 5-mile radius (6+ lots in towns without zoning)</li>
      <li><strong>State Projects:</strong> Development by state agencies on 10+ acres</li>
      <li><strong>Above 2,500 Feet:</strong> Any development above this elevation</li>
      <li><strong>Waste Disposal Facilities:</strong> Most waste facilities regardless of size</li>
    </ul>
    
    <h3>The Ten Act 250 Criteria</h3>
    <p>Projects must meet all ten criteria:</p>
    <ul>
      <li><strong>Criterion 1:</strong> Air and water pollution</li>
      <li><strong>Criterion 2:</strong> Sufficient water supply</li>
      <li><strong>Criterion 3:</strong> Burden on water supply of nearby towns</li>
      <li><strong>Criterion 4:</strong> Soil erosion and development on steep slopes</li>
      <li><strong>Criterion 5:</strong> Traffic impacts and safety</li>
      <li><strong>Criterion 6:</strong> Educational services burden</li>
      <li><strong>Criterion 7:</strong> Municipal services burden</li>
      <li><strong>Criterion 8:</strong> Aesthetics, scenic beauty, and historic sites</li>
      <li><strong>Criterion 9:</strong> Impacts on natural areas and endangered species</li>
      <li><strong>Criterion 10:</strong> Conformance with town and regional plans</li>
    </ul>
    
    <h3>The Permit Process</h3>
    <p>The Act 250 review process typically involves:</p>
    <ul>
      <li>Filing an application with the District Environmental Commission</li>
      <li>Public notice and comment period (typically 30 days)</li>
      <li>Public hearing if requested or deemed necessary</li>
      <li>Commission decision (45 days after hearing close)</li>
      <li>Appeals process available to parties</li>
      <li>Total timeline: Often 4-12 months</li>
    </ul>
    
    <h3>Costs and Considerations</h3>
    <ul>
      <li><strong>Application Fees:</strong> $125-$312.50 base fee plus additional fees based on project value</li>
      <li><strong>Professional Costs:</strong> Environmental studies, traffic studies, legal fees ($10,000-$100,000+)</li>
      <li><strong>Timeline:</strong> Budget 6-12 months for permit approval</li>
      <li><strong>Conditions:</strong> Permits often include ongoing monitoring and mitigation requirements</li>
    </ul>
    
    <h3>Exemptions and Special Cases</h3>
    <ul>
      <li><strong>Farming:</strong> Agricultural uses generally exempt</li>
      <li><strong>Forestry:</strong> Commercial forestry operations may be exempt</li>
      <li><strong>Previously Permitted:</strong> Developments with prior Act 250 permits may qualify for amendments</li>
      <li><strong>De Minimis Changes:</strong> Minor changes to permitted projects may not trigger review</li>
    </ul>
    
    <h3>Impact on Property Value and Sales</h3>
    <ul>
      <li>Act 250 permits can increase property value by demonstrating development rights</li>
      <li>Permits run with the land and transfer to new owners</li>
      <li>Lack of permit for applicable development can delay or prevent sales</li>
      <li>Permit conditions and restrictions can affect future development potential</li>
    </ul>
    
    <h3>Recent Changes and Trends</h3>
    <ul>
      <li>2022 amendments addressed housing needs while maintaining environmental protection</li>
      <li>Downtown development exemptions to encourage smart growth</li>
      <li>Priority housing projects may receive expedited review</li>
      <li>Increased focus on climate change impacts and energy efficiency</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        options: [
          "Commercial/Industrial",
          "Residential Housing",
          "Subdivision",
          "Mixed Use",
          "State Project",
          "Other Development"
        ],
        defaultValue: "Residential Housing",
      },
      {
        name: "acreage",
        label: "Total Project Acreage",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "housingUnits",
        label: "Number of Housing Units (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "lotCount",
        label: "Number of Lots Created (if subdivision)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "squareFootage",
        label: "Total Square Footage of Buildings",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "elevation",
        label: "Is Project Above 2,500 Feet Elevation?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No",
      },
      {
        name: "townZoning",
        label: "Does Town Have Zoning/Planning?",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "Yes",
      },
    ],
    results: [
      { label: "Act 250 Permit Required?", isCurrency: false },
      { label: "Jurisdictional Triggers", isCurrency: false },
      { label: "Estimated Timeline", isCurrency: false },
      { label: "Base Application Fee", isCurrency: true },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const acreage = Number(data.acreage) || 0;
      const housingUnits = Number(data.housingUnits) || 0;
      const lotCount = Number(data.lotCount) || 0;
      const squareFootage = Number(data.squareFootage) || 0;
      const elevation = data.elevation === "Yes";
      const townZoning = data.townZoning === "Yes";
      const projectType = data.projectType || "Residential Housing";
      
      let requiresPermit = false;
      let triggers: string[] = [];
      
      // Check jurisdictional triggers
      if (elevation) {
        requiresPermit = true;
        triggers.push("Development above 2,500 feet elevation");
      }
      
      if (projectType === "Commercial/Industrial") {
        if (acreage >= 10) {
          requiresPermit = true;
          triggers.push("Commercial development on 10+ acres");
        }
        if (squareFootage >= 10000) {
          requiresPermit = true;
          triggers.push("Commercial development with 10,000+ sq ft");
        }
      }
      
      if (projectType === "Residential Housing" || projectType === "Mixed Use") {
        const threshold = townZoning ? 10 : 6;
        if (housingUnits >= threshold) {
          requiresPermit = true;
          triggers.push(`${housingUnits} housing units (${threshold}+ threshold)`);
        }
      }
      
      if (projectType === "Subdivision") {
        const threshold = townZoning ? 10 : 6;
        if (lotCount >= threshold) {
          requiresPermit = true;
          triggers.push(`${lotCount} lots created (${threshold}+ threshold)`);
        }
      }
      
      if (projectType === "State Project" && acreage >= 10) {
        requiresPermit = true;
        triggers.push("State project on 10+ acres");
      }
      
      // Determine result
      const permitRequired = requiresPermit ? "✅ YES - Act 250 Permit Required" : "❌ NO - Likely Exempt";
      const triggersText = triggers.length > 0 ? triggers.join("; ") : "No jurisdictional triggers identified";
      const timeline = requiresPermit ? "6-12 months" : "N/A";
      const baseFee = requiresPermit ? 312.50 : 0;
      
      let nextSteps = "";
      if (requiresPermit) {
        nextSteps = "Consult with environmental attorney. File application with District Environmental Commission. Budget for professional studies.";
      } else {
        nextSteps = "Confirm exemption with District Coordinator. Proceed with local zoning/planning approval. Consider future development impacts.";
      }

      return [
        { label: "Act 250 Permit Required?", value: permitRequired, isCurrency: false },
        { label: "Jurisdictional Triggers", value: triggersText, isCurrency: false },
        { label: "Estimated Timeline", value: timeline, isCurrency: false },
        { label: "Base Application Fee", value: baseFee, isCurrency: true },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
