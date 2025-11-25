import { CalculatorContent } from "@/types";

export const RADON_TEST_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Radon Test Cost Calculator",
  description: "Calculate radon testing and mitigation costs for homes. Essential for health safety and property transactions in radon-prone areas.",
  icon: "☢️",
  category: "Home Inspection",
  slug: "radon-test-cost-calculator",
  article: {
    title: "Complete Guide to Radon Testing and Mitigation Costs",
    content: `
      <h2>Understanding Radon Test</h2>
      <p>Professional radon test is essential for protecting your home investment and ensuring family safety. Average costs range from 50-00, with additional remediation or repair costs varying based on severity and scope of issues found.</p>
      
      <h2>When Testing/Inspection Is Needed</h2>
      <ul>
        <li>Home purchase - Most lenders require inspection</li>
        <li>Before major renovations</li>
        <li>After signs of damage or problems</li>
        <li>Annual preventive inspections</li>
        <li>Insurance requirements</li>
      </ul>

      <h2>Cost Factors</h2>
      <p>Several factors affect inspection and remediation costs:</p>
      <ul>
        <li>Home size and accessibility</li>
        <li>Severity and extent of issues</li>
        <li>Regional labor and material costs</li>
        <li>Type of testing or inspection required</li>
        <li>Emergency vs scheduled service</li>
      </ul>

      <h2>Professional vs DIY</h2>
      <p>While DIY testing kits are available for some inspections, professional assessment is strongly recommended for:</p>
      <ul>
        <li>Real estate transactions</li>
        <li>Insurance claims</li>
        <li>Suspected serious issues</li>
        <li>Legal documentation needs</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Professional radon test provides critical information for homeowners, buyers, and sellers. The cost of inspection is minimal compared to potential health risks, property damage, and decreased property values from undiscovered issues.</p>
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
          label: k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ')
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
        tooltip: "Size affects inspection cost",
      },
      {
        name: "issuesFound",
        label: "Issues Severity (if known)",
        type: "select",
        required: false,
        options: [
          { value: "none", label: "None - Inspection Only" },
          { value: "minor", label: "Minor Issues" },
          { value: "moderate", label: "Moderate Issues" },
          { value: "severe", label: "Severe Issues" },
        ],
        tooltip: "Severity affects repair/remediation cost",
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
        label: "Remediation/Repair Cost",
        value: "remediationCost",
        format: "currency",
        tooltip: "Estimated cost for repairs if issues found",
      },
      {
        label: "Total Estimated Cost",
        value: "totalCost",
        format: "currency",
        tooltip: "Combined inspection and repair costs",
      },
    ],
    calculate: (inputs: Record<string, string>) => {
      const inspectionType = inputs.inspectionType;
      const homeSize = inputs.homeSize;
      const issuesFound = inputs.issuesFound || 'none';

      const sizeMult = homeSize === 'small' ? 0.8 : homeSize === 'medium' ? 1 : 1.3;
      const inspectionCost = Math.round(tool.baseTestCost[inspectionType] * sizeMult);

      const severityCosts = {
        none: 0,
        minor: (tool.remediationCost || tool.repairCost || tool.treatmentCost).small || 1000,
        moderate: (tool.remediationCost || tool.repairCost || tool.treatmentCost).medium || 3000,
        severe: (tool.remediationCost || tool.repairCost || tool.treatmentCost).large || 8000,
      };

      const remediationCost = severityCosts[issuesFound] * sizeMult;
      const totalCost = inspectionCost + remediationCost;

      return { inspectionCost, remediationCost, totalCost };
    },
  },
};
