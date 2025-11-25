import { CalculatorContent } from "@/types";

export const WELL_WATER_TEST_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Well Water Test Cost Calculator",
  description: "Calculate the cost of well water testing for bacteria, contaminants, and water quality. Essential for home buyers, sellers, and homeowners with private wells.",
  icon: "💧",
  category: "Home Inspection",
  slug: "well-water-test-cost-calculator",
  article: {
    title: "Complete Guide to Well Water Testing Costs and Requirements",
    content: `
      <h2>Understanding Well Water Testing</h2>
      <p>
        Well water testing is essential for protecting your family's health and ensuring your water supply meets safety standards. Unlike municipal water systems that are continuously monitored, private well owners are responsible for testing their own water quality. This comprehensive guide covers all aspects of well water testing costs, requirements, and what homeowners need to know.
      </p>
      <p>
        The average cost for basic well water testing ranges from $100 to $400, while comprehensive testing can cost $300 to $1,000+ depending on the contaminants tested and your location. Testing frequency and scope depend on factors including well age, local geology, nearby contamination sources, and regulatory requirements for real estate transactions.
      </p>

      <h2>Types of Well Water Tests and Costs</h2>

      <h3>1. Basic Bacteria Test ($50-$150)</h3>
      <p>
        <strong>What's tested:</strong> Total coliform bacteria and E. coli (fecal coliform)
      </p>
      <p>
        <strong>When required:</strong> Annual testing, real estate transactions, after repairs, after contamination events
      </p>
      <p>
        <strong>Turnaround time:</strong> 24-48 hours
      </p>
      <p>
        <strong>Why it matters:</strong> Coliform bacteria indicate fecal contamination and potential presence of disease-causing organisms. E. coli presence is a serious health hazard requiring immediate action.
      </p>

      <h3>2. Standard Water Quality Test ($150-$300)</h3>
      <p>
        <strong>What's tested:</strong> Bacteria, nitrates, pH, hardness, iron, manganese, total dissolved solids
      </p>
      <p>
        <strong>When recommended:</strong> Initial home purchase, every 3 years for established wells
      </p>
      <p>
        <strong>Turnaround time:</strong> 5-7 days
      </p>
      <p>
        <strong>Coverage:</strong> Most common contaminants affecting health and water quality in residential wells
      </p>

      <h3>3. Comprehensive Chemical Analysis ($300-$600)</h3>
      <p>
        <strong>What's tested:</strong> All standard items plus heavy metals (lead, arsenic, copper), volatile organic compounds (VOCs), pesticides, herbicides
      </p>
      <p>
        <strong>When recommended:</strong> New well, known contamination in area, agricultural surroundings, industrial proximity
      </p>
      <p>
        <strong>Turnaround time:</strong> 7-14 days
      </p>
      <p>
        <strong>Why it matters:</strong> Detects serious health threats that may have no taste, odor, or visible signs
      </p>

      <h3>4. FHA/VA Loan Required Test ($100-$250)</h3>
      <p>
        <strong>What's tested:</strong> Bacteria, nitrates, nitrites (minimum); some lenders require additional testing
      </p>
      <p>
        <strong>When required:</strong> All FHA and VA loans for properties with private wells
      </p>
      <p>
        <strong>Special requirements:</strong> Must be performed by state-certified lab within 90 days of closing
      </p>
      <p>
        <strong>Pass/fail criteria:</strong> Zero coliform bacteria, nitrates below 10 mg/L, nitrites below 1 mg/L
      </p>

      <h3>5. Specialized Contamination Testing ($200-$500 per panel)</h3>
      <p>
        <strong>Radon in water:</strong> $150-$250
      </p>
      <p>
        <strong>PFAS (forever chemicals):</strong> $300-$500
      </p>
      <p>
        <strong>Radioactive elements (uranium, radium):</strong> $250-$400
      </p>
      <p>
        <strong>Petroleum products:</strong> $200-$350
      </p>
      <p>
        <strong>When recommended:</strong> Known contamination sources nearby, geological conditions, industrial history
      </p>

      <h2>Well Water Testing Requirements by Situation</h2>

      <h3>Home Purchase/Sale</h3>
      <p>
        <strong>Minimum required:</strong> Bacteria and nitrate test (FHA/VA loans)
      </p>
      <p>
        <strong>Recommended:</strong> Standard water quality test ($150-$300)
      </p>
      <p>
        <strong>Timing:</strong> Within 90 days of closing, often during inspection period
      </p>
      <p>
        <strong>Cost responsibility:</strong> Typically buyer pays, sometimes negotiated with seller
      </p>
      <p>
        <strong>Failure impact:</strong> Seller often required to treat water system or provide credit for treatment installation
      </p>

      <h3>Annual Homeowner Testing</h3>
      <p>
        <strong>EPA recommendation:</strong> Annual bacteria test minimum
      </p>
      <p>
        <strong>Comprehensive test:</strong> Every 3-5 years
      </p>
      <p>
        <strong>Cost:</strong> $50-$150 annually for bacteria; $150-$300 every 3 years for comprehensive
      </p>
      <p>
        <strong>Additional testing triggers:</strong> Nearby land use changes, new nearby wells, taste/odor changes, system repairs
      </p>

      <h3>New Well Installation</h3>
      <p>
        <strong>Initial testing:</strong> Comprehensive chemical analysis plus bacteria ($300-$600)
      </p>
      <p>
        <strong>Timing:</strong> After well completion and before connecting to house plumbing
      </p>
      <p>
        <strong>Why comprehensive:</strong> Establishes baseline water quality for future comparisons
      </p>
      <p>
        <strong>Follow-up:</strong> Retest after 6 months to confirm consistent quality
      </p>

      <h2>Common Contaminants and Health Risks</h2>

      <h3>Bacteria and Microorganisms</h3>
      <p>
        <strong>Sources:</strong> Septic systems, animal waste, surface water infiltration, faulty well construction
      </p>
      <p>
        <strong>Health risks:</strong> Gastrointestinal illness, diarrhea, nausea, more serious for infants and elderly
      </p>
      <p>
        <strong>Treatment:</strong> Shock chlorination ($200-$500), UV disinfection system ($500-$1,500), chlorination system ($800-$2,000)
      </p>
      <p>
        <strong>Acceptable level:</strong> Zero coliform bacteria, zero E. coli
      </p>

      <h3>Nitrates/Nitrites</h3>
      <p>
        <strong>Sources:</strong> Fertilizers, septic systems, animal waste, decaying organic matter
      </p>
      <p>
        <strong>Health risks:</strong> "Blue baby syndrome" in infants (prevents blood from carrying oxygen), thyroid problems, increased cancer risk
      </p>
      <p>
        <strong>Treatment:</strong> Reverse osmosis ($300-$1,500), distillation ($500-$2,000), ion exchange ($800-$2,500)
      </p>
      <p>
        <strong>Acceptable level:</strong> Below 10 mg/L (nitrate), below 1 mg/L (nitrite)
      </p>

      <h3>Lead</h3>
      <p>
        <strong>Sources:</strong> Old plumbing, lead solder, brass fixtures, natural deposits
      </p>
      <p>
        <strong>Health risks:</strong> Brain development problems in children, high blood pressure, kidney damage
      </p>
      <p>
        <strong>Treatment:</strong> Reverse osmosis ($300-$1,500), distillation ($500-$2,000), activated carbon ($200-$800)
      </p>
      <p>
        <strong>Acceptable level:</strong> Below 15 ppb (parts per billion); no safe level for children
      </p>

      <h3>Arsenic</h3>
      <p>
        <strong>Sources:</strong> Natural geological deposits, industrial contamination, old pesticides
      </p>
      <p>
        <strong>Health risks:</strong> Cancer (bladder, lung, skin), cardiovascular disease, diabetes
      </p>
      <p>
        <strong>Treatment:</strong> Reverse osmosis ($300-$1,500), specialized arsenic filtration ($800-$2,500)
      </p>
      <p>
        <strong>Acceptable level:</strong> Below 10 ppb
      </p>

      <h3>Hardness (Calcium/Magnesium)</h3>
      <p>
        <strong>Sources:</strong> Natural limestone, chalk, gypsum deposits
      </p>
      <p>
        <strong>Problems:</strong> Scale buildup, soap scum, reduced appliance lifespan (not a health hazard)
      </p>
      <p>
        <strong>Treatment:</strong> Water softener ($500-$2,500)
      </p>
      <p>
        <strong>Classification:</strong> Soft (0-60 mg/L), moderately hard (61-120 mg/L), hard (121-180 mg/L), very hard (>180 mg/L)
      </p>

      <h2>Testing Process and Timeline</h2>

      <h3>Step 1: Sample Collection</h3>
      <p>
        <strong>DIY collection:</strong> Most labs provide free sample bottles with instructions (saves $50-$150 service call)
      </p>
      <p>
        <strong>Professional collection:</strong> Recommended for loan requirements ($75-$150)
      </p>
      <p>
        <strong>Proper procedure:</strong> Run cold water 5-10 minutes, sterilize faucet, fill bottle without touching interior, deliver within 24 hours
      </p>
      <p>
        <strong>Multiple sampling points:</strong> Consider testing both well tap (untreated) and kitchen tap (after treatment) for comparison
      </p>

      <h3>Step 2: Laboratory Analysis</h3>
      <p>
        <strong>State-certified labs:</strong> Required for loan transactions ($100-$400)
      </p>
      <p>
        <strong>EPA-certified labs:</strong> Required for comprehensive testing ($150-$600)
      </p>
      <p>
        <strong>Home test kits:</strong> Limited accuracy, not accepted for real estate transactions ($30-$100)
      </p>

      <h3>Step 3: Results Review</h3>
      <p>
        <strong>Report delivery:</strong> Email or online portal access within 3-14 days
      </p>
      <p>
        <strong>Expert review:</strong> Some labs include interpretation consultation
      </p>
      <p>
        <strong>Official documentation:</strong> Hard copy mailed for loan closing (allow extra time)
      </p>

      <h2>Regional Cost Variations</h2>

      <h3>Higher Cost Areas (20-40% above average)</h3>
      <ul>
        <li>Northeast: Limited lab options, higher operating costs</li>
        <li>California: Strict regulations, additional required contaminants</li>
        <li>Alaska/Hawaii: Limited labs, shipping logistics</li>
      </ul>

      <h3>Lower Cost Areas (10-20% below average)</h3>
      <ul>
        <li>Midwest: Competitive lab market, many wells create economy of scale</li>
        <li>Southeast: Multiple state labs, agricultural testing infrastructure</li>
      </ul>

      <h2>Failed Test: Next Steps and Costs</h2>

      <h3>Bacteria Contamination</h3>
      <p>
        <strong>Immediate action:</strong> Boil water or use bottled water for drinking
      </p>
      <p>
        <strong>Shock chlorination:</strong> $200-$500 (often DIY for $50-$100 in materials)
      </p>
      <p>
        <strong>Retest:</strong> $50-$150 after 7-10 days
      </p>
      <p>
        <strong>If persists:</strong> Permanent disinfection system ($500-$2,000)
      </p>

      <h3>Chemical Contamination</h3>
      <p>
        <strong>Nitrates:</strong> Treatment system $800-$2,500
      </p>
      <p>
        <strong>Lead:</strong> Replace fixtures/pipes $500-$5,000+ or filtration $300-$1,500
      </p>
      <p>
        <strong>Arsenic:</strong> Specialized filtration $800-$2,500
      </p>
      <p>
        <strong>Multiple contaminants:</strong> Whole-house treatment $2,000-$10,000
      </p>

      <h3>Real Estate Transaction Impact</h3>
      <p>
        <strong>Seller options:</strong> Install treatment system, provide credit to buyer, reduce sale price
      </p>
      <p>
        <strong>Buyer options:</strong> Require treatment before closing, accept credit, negotiate price reduction
      </p>
      <p>
        <strong>Typical cost split:</strong> Seller pays for treatment, buyer verifies with retest
      </p>

      <h2>Money-Saving Tips</h2>

      <h3>DIY Sample Collection</h3>
      <p>
        <strong>Savings:</strong> $50-$150 per test
      </p>
      <p>
        <strong>Requirements:</strong> Follow lab instructions precisely, deliver sample promptly
      </p>
      <p>
        <strong>Not recommended for:</strong> FHA/VA loan tests (some lenders require professional collection)
      </p>

      <h3>Bundled Testing</h3>
      <p>
        <strong>Package deals:</strong> Labs often offer bacteria + basic chemistry for less than separate tests
      </p>
      <p>
        <strong>Savings:</strong> 15-30% compared to ordering tests individually
      </p>

      <h3>State Health Department Labs</h3>
      <p>
        <strong>Cost:</strong> Often 30-50% below private labs
      </p>
      <p>
        <strong>Limitations:</strong> Longer turnaround time, fewer test options, pickup/drop-off requirements
      </p>
      <p>
        <strong>Best for:</strong> Annual routine testing (not time-sensitive real estate transactions)
      </p>

      <h3>Well Water Testing Grants</h3>
      <p>
        <strong>USDA programs:</strong> Free or low-cost testing in some rural areas
      </p>
      <p>
        <strong>State programs:</strong> Many states offer free bacteria testing vouchers annually
      </p>
      <p>
        <strong>County health departments:</strong> Sometimes provide free or subsidized testing
      </p>

      <h2>Insurance and Home Value Impact</h2>

      <h3>Insurance Considerations</h3>
      <ul>
        <li>Some insurers require proof of water testing</li>
        <li>Failed tests may affect homeowners insurance eligibility</li>
        <li>Well contamination typically not covered by standard homeowners insurance</li>
        <li>Documented testing helps defend against liability claims</li>
      </ul>

      <h3>Property Value Impact</h3>
      <ul>
        <li>Clean test results: No impact or slight positive</li>
        <li>Failed test (treatable): $2,000-$10,000 reduction (treatment cost)</li>
        <li>Severe contamination: $10,000-$50,000+ reduction or unsaleable until remediated</li>
        <li>Regular testing documentation: Increases buyer confidence</li>
      </ul>

      <h2>State-Specific Requirements</h2>

      <h3>States with Mandatory Testing at Sale</h3>
      <ul>
        <li>Maine: Bacteria and arsenic (minimum)</li>
        <li>New Jersey: Bacteria, nitrates, lead, arsenic, and more</li>
        <li>Rhode Island: Bacteria and nitrates</li>
        <li>Connecticut: Some municipalities require testing</li>
      </ul>

      <h3>States with Strong Recommendations</h3>
      <ul>
        <li>Michigan: Bacteria testing strongly encouraged</li>
        <li>Pennsylvania: Required for some loan types</li>
        <li>Wisconsin: Recommended every 3 years</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Well water testing is a critical investment in your family's health and property value. While costs range from $50 for basic bacteria testing to $1,000+ for comprehensive analysis, the expense is minimal compared to health risks and property value impacts of undiscovered contamination. Regular testing, proper sampling procedures, and prompt action on failed tests ensure your well water remains safe and maintains property value.
      </p>
      <p>
        Always use state-certified laboratories for real estate transactions, follow EPA guidelines for testing frequency, and keep detailed records of all test results. A well-documented history of clean water tests is a valuable selling point and provides peace of mind for you and your family.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "testType",
        label: "Type of Test",
        type: "select",
        options: [
          { value: "bacteria", label: "Basic Bacteria Test" },
          { value: "standard", label: "Standard Water Quality Test" },
          { value: "comprehensive", label: "Comprehensive Chemical Analysis" },
          { value: "fha", label: "FHA/VA Loan Required Test" },
          { value: "specialized", label: "Specialized Contamination Test" },
        ],
        tooltip: "Select the type of well water test you need",
      },
      {
        name: "sampleCollection",
        label: "Sample Collection Method",
        type: "select",
        options: [
          { value: "diy", label: "DIY Collection (I'll collect sample)" },
          { value: "professional", label: "Professional Collection Service" },
        ],
        tooltip: "DIY collection saves money but professional is required for some loans",
      },
      {
        name: "labType",
        label: "Laboratory Type",
        type: "select",
        options: [
          { value: "state", label: "State Health Department Lab" },
          { value: "private", label: "Private Certified Lab" },
          { value: "premium", label: "Premium EPA-Certified Lab" },
        ],
        tooltip: "State labs are cheaper but may have longer wait times",
      },
      {
        name: "urgency",
        label: "Test Urgency",
        type: "select",
        options: [
          { value: "routine", label: "Routine (Standard turnaround)" },
          { value: "rush", label: "Rush Service (2-3 day results)" },
        ],
        tooltip: "Rush service available for time-sensitive situations",
      },
      {
        name: "additionalTests",
        label: "Additional Specialized Tests",
        type: "select",
        options: [
          { value: "none", label: "None" },
          { value: "radon", label: "Add Radon Test" },
          { value: "pfas", label: "Add PFAS Test" },
          { value: "radioactive", label: "Add Radioactive Elements Test" },
          { value: "petroleum", label: "Add Petroleum Products Test" },
        ],
        tooltip: "Additional tests for specific contamination concerns",
      },
    ],
    results: [
      {
        label: "Base Test Cost",
        value: "baseTestCost",
        tooltip: "Cost for the primary test selected",
      },
      {
        label: "Sample Collection Fee",
        value: "collectionFee",
        tooltip: "Cost for professional sample collection if selected",
      },
      {
        label: "Additional Tests Cost",
        value: "additionalTestsCost",
        tooltip: "Cost for any additional specialized tests",
      },
      {
        label: "Rush Fee (if applicable)",
        value: "rushFee",
        tooltip: "Additional fee for expedited results",
      },
      {
        label: "Total Testing Cost",
        value: "totalCost",
        tooltip: "Complete cost for all selected testing services",
      },
      {
        label: "Turnaround Time",
        value: "turnaroundTime",
        tooltip: "Expected time to receive results",
      },
    ],
    calculate: (inputs: Record<string, string>) => {
      const testType = inputs.testType;
      const sampleCollection = inputs.sampleCollection;
      const labType = inputs.labType;
      const urgency = inputs.urgency;
      const additionalTests = inputs.additionalTests || "none";

      // Base test costs
      const testBaseCosts: Record<string, number> = {
        bacteria: 100,
        standard: 225,
        comprehensive: 450,
        fha: 175,
        specialized: 350,
      };

      let baseTestCost = testBaseCosts[testType];

      // Lab type adjustments
      if (labType === "state") baseTestCost *= 0.7;
      if (labType === "premium") baseTestCost *= 1.25;

      // Collection fee
      const collectionFee = sampleCollection === "professional" ? 100 : 0;

      // Additional tests
      const additionalCosts: Record<string, number> = {
        none: 0,
        radon: 200,
        pfas: 400,
        radioactive: 325,
        petroleum: 275,
      };

      const additionalTestsCost = additionalCosts[additionalTests];

      // Rush fee
      const rushFee = urgency === "rush" ? baseTestCost * 0.5 : 0;

      // Total cost
      const totalCost = baseTestCost + collectionFee + additionalTestsCost + rushFee;

      // Turnaround time
      let turnaroundTime = "";
      if (urgency === "rush") {
        turnaroundTime = "2-3 business days";
      } else {
        if (testType === "bacteria") turnaroundTime = "24-48 hours";
        else if (testType === "standard" || testType === "fha") turnaroundTime = "5-7 business days";
        else turnaroundTime = "7-14 business days";
      }

      if (labType === "state") turnaroundTime += " (may be longer for state labs)";

      return {
        baseTestCost,
        collectionFee,
        additionalTestsCost,
        rushFee,
        totalCost,
        turnaroundTime,
      };
    },
  },
};
