import { CalculatorContent } from "@/types";

export const HVAC_INSPECTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: "HVAC Inspection Calculator",
  description: "Calculate HVAC system inspection and service costs. Important for energy efficiency, comfort, and property transactions.",
  icon: "🌡️",
  category: "Home Inspection",
  slug: "hvac-inspection-calculator",
  article: {
    title: "Complete Guide to HVAC Inspection and Maintenance Costs",
    content: `
      <h2>Understanding HVAC Inspection</h2>
      <p>Professional hvac inspection is essential for protecting your home investment and ensuring proper system functionality. Average costs range from 0-00, with additional repair costs varying based on severity and scope of issues found.</p>
      
      <h2>When Inspection Is Needed</h2>
      <ul>
        <li>Home purchase or sale - Many lenders and buyers require inspection</li>
        <li>Annual preventive maintenance</li>
        <li>Before and after major storms or weather events</li>
        <li>When signs of problems appear</li>
        <li>Before warranty expiration</li>
        <li>Insurance claims or requirements</li>
      </ul>

      <h2>Types of Inspections</h2>
      <p>Different levels of inspection provide varying degrees of detail:</p>
      <ul>
        <li><strong>Basic Inspection:</strong> Visual assessment of readily accessible components</li>
        <li><strong>Comprehensive Inspection:</strong> Detailed examination including testing and measurements</li>
        <li><strong>Specialized Testing:</strong> Advanced diagnostics using specialized equipment</li>
      </ul>

      <h2>Common Issues Found</h2>
      <p>Professional inspections commonly identify:</p>
      <ul>
        <li>Wear and aging of components</li>
        <li>Improper installation or repairs</li>
        <li>Lack of maintenance</li>
        <li>Safety hazards</li>
        <li>Code violations</li>
        <li>Efficiency problems</li>
      </ul>

      <h2>Cost Factors</h2>
      <p>Several factors affect inspection and repair costs:</p>
      <ul>
        <li>System age and condition</li>
        <li>Home size and accessibility</li>
        <li>Complexity of systems</li>
        <li>Severity and extent of issues</li>
        <li>Regional labor and material costs</li>
        <li>Emergency vs scheduled service</li>
      </ul>

      <h2>Impact on Property Value</h2>
      <p>Well-maintained systems with documented inspections can:</p>
      <ul>
        <li>Increase buyer confidence</li>
        <li>Reduce negotiation issues</li>
        <li>Support asking price</li>
        <li>Lower insurance premiums</li>
      </ul>
      <p>Conversely, deferred maintenance and failed inspections can significantly decrease property value and marketability.</p>

      <h2>Professional vs DIY</h2>
      <p>While basic visual checks can be done by homeowners, professional inspection is recommended for:</p>
      <ul>
        <li>Real estate transactions</li>
        <li>Insurance requirements</li>
        <li>Warranty claims</li>
        <li>Complex systems</li>
        <li>Safety concerns</li>
        <li>Legal documentation</li>
      </ul>

      <h2>Preventive Maintenance Benefits</h2>
      <p>Regular professional inspections provide:</p>
      <ul>
        <li>Early problem detection</li>
        <li>Extended system lifespan</li>
        <li>Improved efficiency and lower utility costs</li>
        <li>Reduced emergency repairs</li>
        <li>Maintained warranties</li>
        <li>Enhanced safety</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Professional hvac inspection is a wise investment that protects your home, ensures safety, and maintains property value. The cost of regular inspections is minimal compared to potential emergency repairs, system replacements, and decreased property values from undiscovered issues.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "inspectionType",
        label: "Inspection Type",
        type: "select",
        required: true,
        options: Object.keys(tool.baseTestCost).map(k => ({
          value: k,
          label: k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ') + ' Inspection'
        })),
        tooltip: "Select the type of inspection needed",
      },
      {
        name: "homeSize",
        label: "Home Size",
        type: "select",
        required: true,
        options: [
          { value: "small", label: "Under 1,500 sq ft" },
          { value: "medium", label: "1,500-3,000 sq ft" },
          { value: "large", label: "Over 3,000 sq ft" },
        ],
        tooltip: "Size affects inspection scope and cost",
      },
      {
        name: "systemAge",
        label: "System Age",
        type: "select",
        required: true,
        options: [
          { value: "new", label: "0-5 years" },
          { value: "middle", label: "6-15 years" },
          { value: "old", label: "Over 15 years" },
        ],
        tooltip: "Older systems may require more extensive inspection",
      },
      {
        name: "repairNeeded",
        label: "Repair Severity (if issues found)",
        type: "select",
        required: false,
        options: [
          { value: "none", label: "None - Inspection Only" },
          { value: "minor", label: "Minor Repairs" },
          { value: "moderate", label: "Moderate Repairs" },
          { value: "major", label: "Major Repairs/Replacement" },
        ],
        tooltip: "Severity affects repair cost estimate",
      },
    ],
    results: [
      {
        label: "Inspection Cost",
        value: "inspectionCost",
        format: "currency",
        tooltip: "Cost for professional inspection",
      },
      {
        label: "Repair Cost Estimate",
        value: "repairCost",
        format: "currency",
        tooltip: "Estimated cost for repairs if issues found",
      },
      {
        label: "Total Estimated Cost",
        value: "totalCost",
        format: "currency",
        tooltip: "Combined inspection and repair costs",
      },
      {
        label: "Recommendation",
        value: "recommendation",
        format: "text",
        tooltip: "Professional recommendation based on inputs",
      },
    ],
    calculate: (inputs: Record<string, string>) => {
      const inspectionType = inputs.inspectionType;
      const homeSize = inputs.homeSize;
      const systemAge = inputs.systemAge;
      const repairNeeded = inputs.repairNeeded || 'none';

      const sizeMult = homeSize === 'small' ? 0.85 : homeSize === 'medium' ? 1 : 1.25;
      const ageMult = systemAge === 'old' ? 1.2 : 1;
      
      const inspectionCost = Math.round(tool.baseTestCost[inspectionType] * sizeMult * ageMult);

      const repairCosts: Record<string, number> = {
        none: 0,
        minor: tool.repairCost.minor,
        moderate: tool.repairCost.moderate,
        major: tool.repairCost.major,
      };

      const repairCost = Math.round(repairCosts[repairNeeded] * sizeMult);
      const totalCost = inspectionCost + repairCost;

      let recommendation = '';
      if (systemAge === 'old' && repairNeeded === 'none') {
        recommendation = 'Annual inspections recommended for older systems';
      } else if (repairNeeded === 'major') {
        recommendation = 'Consider replacement vs repair; consult multiple contractors';
      } else if (repairNeeded === 'moderate') {
        recommendation = 'Address repairs promptly to prevent escalation';
      } else {
        recommendation = 'System appears to be in acceptable condition';
      }

      return { inspectionCost, repairCost, totalCost, recommendation };
    },
  },
};
