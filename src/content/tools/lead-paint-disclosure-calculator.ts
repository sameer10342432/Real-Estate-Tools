import { CalculatorContent } from "@/types";

export const LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Lead Paint Disclosure Calculator",
  description: "Calculate lead paint testing and disclosure requirements for homes built before 1978. Essential tool for buyers, sellers, and landlords to ensure compliance with federal law.",
  icon: "🎨",
  category: "Home Inspection",
  slug: "lead-paint-disclosure-calculator",
  article: {
    title: "Complete Guide to Lead Paint Disclosure and Testing Requirements",
    content: `
      <h2>Understanding Lead Paint Disclosure Laws</h2>
      <p>
        Lead-based paint disclosure is a federal requirement for all residential properties built before 1978. The Residential Lead-Based Paint Hazard Reduction Act requires sellers and landlords to disclose known lead paint hazards and provide buyers/tenants with EPA-approved information about lead poisoning prevention. Failure to comply carries penalties up to $19,507 per violation.
      </p>
      <p>
        While testing is not federally mandated for sales (only disclosure of known issues), many buyers request testing, and some states require it. Lead paint testing costs $200-$800 for a full home inspection, while remediation can range from $1,000 to $15,000+ depending on the extent of lead paint and chosen abatement method.
      </p>

      <h2>Federal Lead Paint Disclosure Requirements</h2>

      <h3>When Disclosure Is Required</h3>
      <ul>
        <li>All residential sales of properties built before 1978</li>
        <li>All residential lease/rental agreements for pre-1978 properties</li>
        <li>Applies to single-family homes, apartments, condos, co-ops</li>
        <li>Foreclosures and short sales (no exceptions)</li>
      </ul>

      <h3>Seller/Landlord Responsibilities</h3>
      <p>
        <strong>Disclose:</strong> All known lead-based paint and lead-based paint hazards in the property
      </p>
      <p>
        <strong>Provide:</strong> EPA-approved pamphlet "Protect Your Family from Lead in Your Home"
      </p>
      <p>
        <strong>Share records:</strong> Any available reports or records about lead paint in the property
      </p>
      <p>
        <strong>Give time:</strong> Buyers must have 10-day period to conduct lead inspection (sales only)
      </p>
      <p>
        <strong>Obtain signatures:</strong> Both parties sign disclosure form confirming information was provided
      </p>

      <h3>Buyer/Tenant Rights</h3>
      <ul>
        <li>Receive all known information about lead paint before signing</li>
        <li>10-day inspection contingency period (sales)</li>
        <li>Right to waive inspection (must be in writing)</li>
        <li>Right to walk away if lead hazards found</li>
      </ul>

      <h3>Penalties for Non-Compliance</h3>
      <ul>
        <li>Civil penalties: Up to $19,507 per violation</li>
        <li>Criminal penalties: Up to $11,000 per day for willful violations</li>
        <li>Buyer lawsuits: Triple damages plus attorney fees</li>
        <li>Transaction delays or cancellation</li>
      </ul>

      <h2>Lead Paint Testing Costs and Methods</h2>

      <h3>1. Professional Lead Paint Inspection ($300-$800)</h3>
      <p>
        <strong>What's included:</strong> EPA-certified inspector tests all painted surfaces using XRF analyzer or paint chip samples
      </p>
      <p>
        <strong>Cost factors:</strong>
      </p>
      <ul>
        <li>Small home (under 1,500 sq ft): $300-$500</li>
        <li>Medium home (1,500-3,000 sq ft): $400-$600</li>
        <li>Large home (over 3,000 sq ft): $500-$800</li>
        <li>Additional $100-$200 for outbuildings/garages</li>
      </ul>
      <p>
        <strong>Deliverable:</strong> Written report identifying all lead paint locations and concentrations
      </p>
      <p>
        <strong>Turnaround:</strong> 3-7 days for results
      </p>

      <h3>2. Lead Risk Assessment ($400-$900)</h3>
      <p>
        <strong>What's included:</strong> Full inspection plus assessment of current hazards (deteriorating paint, contaminated dust/soil)
      </p>
      <p>
        <strong>Why choose:</strong> More comprehensive than inspection; identifies immediate health risks
      </p>
      <p>
        <strong>Recommended for:</strong> Homes with young children, properties with peeling/chipping paint, rental properties
      </p>

      <h3>3. DIY Lead Test Kits ($10-$50)</h3>
      <p>
        <strong>Cost:</strong> $10-$50 for 8-pack of swabs
      </p>
      <p>
        <strong>Accuracy:</strong> Can produce false negatives; not EPA-recognized for disclosure purposes
      </p>
      <p>
        <strong>Best use:</strong> Preliminary screening before hiring professional
      </p>
      <p>
        <strong>Limitations:</strong> Can't determine lead concentration; can't be used for official disclosure
      </p>

      <h3>4. Lab Analysis of Paint Chips ($25-$100 per sample)</h3>
      <p>
        <strong>Process:</strong> Homeowner collects paint samples and sends to EPA-recognized lab
      </p>
      <p>
        <strong>Cost:</strong> $25-$100 per sample; typical home requires 10-20 samples ($250-$2,000)
      </p>
      <p>
        <strong>Pros:</strong> Precise lead concentration measurement
      </p>
      <p>
        <strong>Cons:</strong> Time-consuming, risk of contamination during collection, expensive for whole-house testing
      </p>

      <h2>Lead Paint Remediation Costs</h2>

      <h3>1. Encapsulation ($4-$10 per sq ft)</h3>
      <p>
        <strong>Process:</strong> Special coating seals lead paint, preventing exposure
      </p>
      <p>
        <strong>Costs:</strong>
      </p>
      <ul>
        <li>Single room: $500-$1,500</li>
        <li>Whole house interior: $4,000-$8,000</li>
        <li>Exterior: $6,000-$12,000</li>
      </ul>
      <p>
        <strong>Pros:</strong> Least expensive, minimal disruption
      </p>
      <p>
        <strong>Cons:</strong> Not permanent solution, coating can fail if not maintained
      </p>

      <h3>2. Enclosure ($10-$15 per sq ft)</h3>
      <p>
        <strong>Process:</strong> Install new surface (drywall, siding) over lead paint
      </p>
      <p>
        <strong>Costs:</strong>
      </p>
      <ul>
        <li>Interior walls (single room): $1,000-$3,000</li>
        <li>Whole house interior: $8,000-$15,000</li>
        <li>Exterior siding replacement: $12,000-$25,000</li>
      </ul>
      <p>
        <strong>Pros:</strong> Effective long-term solution, updates appearance
      </p>
      <p>
        <strong>Cons:</strong> Expensive, reduces room size slightly, doesn't remove lead
      </p>

      <h3>3. Abatement/Removal ($8,000-$15,000+)</h3>
      <p>
        <strong>Process:</strong> EPA-certified contractor removes all lead paint following strict protocols
      </p>
      <p>
        <strong>Costs:</strong>
      </p>
      <ul>
        <li>Single room: $2,000-$4,000</li>
        <li>Whole house interior: $8,000-$15,000</li>
        <li>Whole house interior + exterior: $15,000-$30,000</li>
      </ul>
      <p>
        <strong>Pros:</strong> Permanently removes hazard, increases property value
      </p>
      <p>
        <strong>Cons:</strong> Most expensive, requires temporary relocation, extensive cleanup
      </p>

      <h3>4. Component Replacement ($200-$800 per component)</h3>
      <p>
        <strong>Examples:</strong> Replace doors, windows, trim instead of stripping paint
      </p>
      <p>
        <strong>Costs:</strong>
      </p>
      <ul>
        <li>Interior door with frame: $300-$800</li>
        <li>Window replacement: $400-$1,200 per window</li>
        <li>Trim/baseboard replacement: $2-$8 per linear foot</li>
      </ul>
      <p>
        <strong>Pros:</strong> Updates home, permanently removes lead components
      </p>
      <p>
        <strong>Cons:</strong> Can be expensive for whole-house application
      </p>

      <h2>State-Specific Lead Paint Laws</h2>

      <h3>States with Additional Requirements</h3>

      <p>
        <strong>Massachusetts:</strong> Mandatory testing and abatement if child under 6 resides in property; strict certification requirements
      </p>
      <p>
        <strong>Rhode Island:</strong> Landlords must inspect and eliminate lead hazards in pre-1978 properties; aggressive enforcement
      </p>
      <p>
        <strong>Maryland:</strong> Rental properties must be lead-free or have risk reduction certificate; annual inspections required
      </p>
      <p>
        <strong>New York:</strong> Annual visual inspections required for rental units with children under 6; strict disclosure
      </p>
      <p>
        <strong>Illinois:</strong> Chicago requires lead inspection for renovations disturbing more than 6 sq ft of painted surface
      </p>

      <h3>States with Financial Assistance</h3>
      <ul>
        <li>HUD Lead Hazard Control grants (competitive, all states)</li>
        <li>State-specific programs: MA, RI, MD, NY offer grants/loans for lead abatement</li>
        <li>Tax credits: Some states offer tax incentives for lead hazard reduction</li>
      </ul>

      <h2>Lead Paint and Property Transactions</h2>

      <h3>Impact on Home Sales</h3>
      <p>
        <strong>Known lead paint (disclosed):</strong> May reduce offers by $5,000-$15,000
      </p>
      <p>
        <strong>Failed inspection:</strong> Buyers often require abatement or equivalent credit
      </p>
      <p>
        <strong>No disclosure (violation):</strong> Sale cancellation, lawsuits, penalties
      </p>
      <p>
        <strong>Encapsulated/abated:</strong> Minimal to no impact on value
      </p>

      <h3>FHA Loans and Lead Paint</h3>
      <p>
        <strong>Requirement:</strong> Peeling/chipping paint must be repaired before closing
      </p>
      <p>
        <strong>Testing:</strong> Not required, but defective paint surfaces must be addressed
      </p>
      <p>
        <strong>Typical cost:</strong> $500-$2,000 for repairs to meet FHA standards
      </p>

      <h3>VA Loans and Lead Paint</h3>
      <p>
        <strong>Requirement:</strong> Defective paint must be repaired or stabilized
      </p>
      <p>
        <strong>Definition:</strong> Any peeling, chipping, or deteriorating paint in pre-1978 homes
      </p>

      <h2>Lead Poisoning Health Risks</h2>

      <h3>Children (Highest Risk)</h3>
      <ul>
        <li>Developmental delays and learning disabilities</li>
        <li>Reduced IQ and attention span</li>
        <li>Behavioral problems and hyperactivity</li>
        <li>Slowed growth</li>
        <li>Hearing problems</li>
        <li>Anemia</li>
      </ul>

      <h3>Adults</h3>
      <ul>
        <li>High blood pressure and hypertension</li>
        <li>Joint and muscle pain</li>
        <li>Difficulties with memory and concentration</li>
        <li>Reproductive problems (both sexes)</li>
      </ul>

      <h3>Exposure Routes</h3>
      <ul>
        <li>Ingestion of deteriorating paint chips</li>
        <li>Breathing lead dust from sanding/scraping</li>
        <li>Hand-to-mouth contact with contaminated dust</li>
        <li>Contaminated soil (especially near exterior walls)</li>
      </ul>

      <h2>Lead-Safe Work Practices</h2>

      <h3>EPA RRP Rule (Renovation, Repair, Painting)</h3>
      <p>
        <strong>Applies to:</strong> All renovations in pre-1978 housing disturbing more than 6 sq ft interior or 20 sq ft exterior painted surfaces
      </p>
      <p>
        <strong>Requirement:</strong> Contractors must be EPA Lead-Safe Certified
      </p>
      <p>
        <strong>Typical added cost:</strong> 10-25% premium for lead-safe work practices
      </p>

      <h3>Required Lead-Safe Practices</h3>
      <ul>
        <li>Post warning signs and restrict access</li>
        <li>Contain work area with plastic sheeting</li>
        <li>Minimize dust generation</li>
        <li>Use HEPA vacuum for cleanup</li>
        <li>Proper disposal of lead-contaminated waste</li>
      </ul>

      <h3>Prohibited Practices</h3>
      <ul>
        <li>Open-flame burning of lead paint</li>
        <li>Dry scraping or sanding (creates lead dust)</li>
        <li>Heat guns above 1,100°F (vaporizes lead)</li>
        <li>Machine sanding without HEPA vacuum attachment</li>
      </ul>

      <h2>Landlord Responsibilities</h2>

      <h3>Initial Rental</h3>
      <ul>
        <li>Provide lead disclosure form and EPA pamphlet</li>
        <li>Disclose all known lead paint and hazards</li>
        <li>Provide copies of any test results or reports</li>
      </ul>

      <h3>Ongoing Obligations</h3>
      <ul>
        <li>Maintain all painted surfaces in good condition</li>
        <li>Repair deteriorating paint promptly using lead-safe practices</li>
        <li>Some states require annual inspections/certifications</li>
      </ul>

      <h3>Tenant with Child Under 6</h3>
      <ul>
        <li>Some states require immediate abatement or risk reduction</li>
        <li>Enhanced notification requirements</li>
        <li>Potential liability for childhood lead poisoning</li>
      </ul>

      <h2>Insurance and Legal Considerations</h2>

      <h3>Insurance Coverage</h3>
      <ul>
        <li>Standard homeowners insurance typically excludes lead paint</li>
        <li>Lead paint liability insurance available (costs $500-$2,000 annually)</li>
        <li>Landlord policies may require lead-free certification or exclude coverage</li>
      </ul>

      <h3>Legal Liability</h3>
      <ul>
        <li>Sellers: Liable for non-disclosure; damages can exceed property value</li>
        <li>Landlords: Liable for childhood lead poisoning; major lawsuits possible</li>
        <li>Contractors: Liable for RRP violations; $37,500 per day penalties</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Lead paint disclosure is not optional—it's federal law with serious penalties for non-compliance. Whether selling, buying, or renting pre-1978 housing, understanding disclosure requirements, testing costs, and remediation options protects all parties legally and ensures child safety. Professional testing ($300-$800) provides peace of mind and protects against liability far exceeding the testing cost.
      </p>
      <p>
        Always hire EPA-certified professionals for testing and abatement, maintain detailed records of all lead-related work, and disclose fully and honestly. The cost of compliance is minimal compared to the potential health consequences and legal liability of lead paint exposure.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "select",
        options: [
          { value: "small", label: "Under 1,500 sq ft" },
          { value: "medium", label: "1,500 - 3,000 sq ft" },
          { value: "large", label: "Over 3,000 sq ft" },
        ],
        tooltip: "Size affects inspection cost and potential remediation area",
      },
      {
        name: "yearBuilt",
        label: "Year Built",
        type: "select",
        options: [
          { value: "pre1978", label: "Before 1978 (Disclosure Required)" },
          { value: "post1978", label: "1978 or Later (No Disclosure)" },
        ],
        tooltip: "Federal law requires disclosure only for pre-1978 homes",
      },
      {
        name: "transactionType",
        label: "Transaction Type",
        type: "select",
        options: [
          { value: "sale", label: "Home Sale" },
          { value: "rental", label: "Rental/Lease" },
          { value: "renovation", label: "Planning Renovation" },
        ],
        tooltip: "Different requirements apply to sales vs rentals",
      },
      {
        name: "testingNeeded",
        label: "Lead Paint Testing",
        type: "select",
        options: [
          { value: "none", label: "No Testing (Disclosure Only)" },
          { value: "inspection", label: "Professional Inspection" },
          { value: "risk", label: "Risk Assessment (More Comprehensive)" },
        ],
        tooltip: "Testing not required but often requested by buyers",
      },
      {
        name: "remediationNeeded",
        label: "Remediation Needed",
        type: "select",
        options: [
          { value: "none", label: "No Remediation Needed" },
          { value: "encapsulation", label: "Encapsulation (Seal Paint)" },
          { value: "enclosure", label: "Enclosure (Cover with New Surface)" },
          { value: "abatement", label: "Full Abatement (Remove Lead Paint)" },
          { value: "component", label: "Component Replacement" },
        ],
        tooltip: "Select if lead paint hazards need to be addressed",
      },
    ],
    results: [
      {
        label: "Disclosure Requirement",
        value: "disclosureRequired",
        tooltip: "Whether federal disclosure is legally required",
      },
      {
        label: "Testing Cost",
        value: "testingCost",
        tooltip: "Cost for professional lead paint testing",
      },
      {
        label: "Remediation Cost Estimate",
        value: "remediationCost",
        tooltip: "Estimated cost for lead paint remediation if needed",
      },
      {
        label: "Total Estimated Cost",
        value: "totalCost",
        tooltip: "Combined testing and remediation costs",
      },
      {
        label: "Compliance Actions Required",
        value: "complianceActions",
        tooltip: "Steps needed to comply with federal law",
      },
    ],
    calculate: (inputs: Record<string, string>) => {
      const homeSize = inputs.homeSize;
      const yearBuilt = inputs.yearBuilt;
      const transactionType = inputs.transactionType;
      const testingNeeded = inputs.testingNeeded;
      const remediationNeeded = inputs.remediationNeeded || "none";

      // Disclosure requirement
      const disclosureRequired = yearBuilt === "pre1978" ? 
        "Yes - Federal law requires disclosure" : 
        "No - Home built after 1978";

      // Testing costs
      const testingCosts: Record<string, Record<string, number>> = {
        none: { small: 0, medium: 0, large: 0 },
        inspection: { small: 400, medium: 500, large: 650 },
        risk: { small: 550, medium: 700, large: 850 },
      };

      const testingCost = testingCosts[testingNeeded][homeSize];

      // Remediation costs
      const remediationCosts: Record<string, Record<string, number>> = {
        none: { small: 0, medium: 0, large: 0 },
        encapsulation: { small: 2500, medium: 6000, large: 10000 },
        enclosure: { small: 5000, medium: 11000, large: 18000 },
        abatement: { small: 10000, medium: 15000, large: 25000 },
        component: { small: 3000, medium: 5000, large: 8000 },
      };

      const remediationCost = remediationCosts[remediationNeeded][homeSize];

      // Total cost
      const totalCost = testingCost + remediationCost;

      // Compliance actions
      let complianceActions = "";
      if (yearBuilt === "pre1978") {
        if (transactionType === "sale") {
          complianceActions = "Provide disclosure form, EPA pamphlet, and 10-day inspection period";
        } else if (transactionType === "rental") {
          complianceActions = "Provide disclosure form and EPA pamphlet before lease signing";
        } else {
          complianceActions = "Hire EPA-certified contractor if disturbing >6 sq ft painted surface";
        }
      } else {
        complianceActions = "No lead paint disclosure required for post-1978 construction";
      }

      return {
        disclosureRequired,
        testingCost,
        remediationCost,
        totalCost,
        complianceActions,
      };
    },
  },
};
