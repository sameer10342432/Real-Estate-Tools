import { CalculatorContent } from "@/types";

export const ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Asbestos Disclosure Calculator",
  description: "Calculate asbestos testing and abatement costs for homes built before 1980. Essential for property transactions, renovations, and compliance with EPA regulations.",
  icon: "🏚️",
  category: "Home Inspection",
  slug: "asbestos-disclosure-calculator",
  article: {
    title: "Complete Guide to Asbestos Testing, Disclosure, and Abatement Costs",
    content: `
      <h2>Understanding Asbestos in Homes</h2>
      <p>
        Asbestos is a naturally occurring mineral fiber that was widely used in building materials from the 1940s through the early 1980s due to its heat resistance and insulating properties. Homes built before 1980 likely contain asbestos in various materials including insulation, floor tiles, roofing shingles, siding, and pipe wrapping. When disturbed, asbestos releases microscopic fibers that can cause serious lung diseases including mesothelioma and lung cancer.
      </p>
      <p>
        Asbestos testing costs $250-$850 for a typical home inspection, while abatement ranges from $1,500 to $30,000+ depending on the extent of asbestos-containing materials (ACM) and accessibility. Unlike lead paint, there is no federal disclosure requirement for residential real estate, but many states require disclosure of known asbestos, and EPA regulations strictly govern disturbance and removal.
      </p>

      <h2>Common Locations of Asbestos in Homes</h2>

      <h3>Highest Risk Materials (Friable Asbestos)</h3>
      <ul>
        <li><strong>Vermiculite attic insulation (Zonolite):</strong> 70% chance of containing asbestos if installed before 1990</li>
        <li><strong>Pipe and boiler insulation:</strong> White/gray wrapping on heating pipes and boilers</li>
        <li><strong>Spray-on ceiling texture (popcorn ceilings):</strong> Pre-1979 homes, especially 1960s-70s</li>
        <li><strong>Blown-in wall insulation:</strong> Gray/white material visible in walls</li>
      </ul>

      <h3>Moderate Risk Materials (Non-Friable)</h3>
      <ul>
        <li><strong>9x9" vinyl floor tiles:</strong> Common in pre-1980 homes, black mastic underneath</li>
        <li><strong>Cement asbestos siding:</strong> Shingle-style or lap siding, very common 1940s-1970s</li>
        <li><strong>Asbestos cement roofing shingles:</strong> Hard, slate-like appearance</li>
        <li><strong>Duct insulation and tape:</strong> Paper-like wrapping on HVAC ducts</li>
        <li><strong>Window caulking and glazing:</strong> Putty around windows in older homes</li>
      </ul>

      <h3>Lower Risk (But Still Present)</h3>
      <ul>
        <li>Drywall joint compound (pre-1980)</li>
        <li>Stucco and plaster</li>
        <li>Vermiculite in potting soil and gardening products</li>
        <li>Brake pads and clutch facings (automotive, not home)</li>
      </ul>

      <h2>Asbestos Testing Costs</h2>

      <h3>1. Professional Asbestos Inspection ($400-$850)</h3>
      <p>
        <strong>What's included:</strong> EPA-certified inspector visually identifies suspected materials, collects samples, sends to accredited lab
      </p>
      <p>
        <strong>Cost factors:</strong>
      </p>
      <ul>
        <li>Basic inspection (3-5 samples): $400-$500</li>
        <li>Standard inspection (6-10 samples): $500-$700</li>
        <li>Comprehensive inspection (10+ samples): $700-$850</li>
        <li>Large home or complex property: $850-$1,200</li>
      </ul>
      <p>
        <strong>Turnaround:</strong> Lab results in 24-48 hours; full report within 3-5 days
      </p>

      <h3>2. DIY Asbestos Test Kit ($40-$80 per sample)</h3>
      <p>
        <strong>Process:</strong> Homeowner collects sample following instructions, mails to lab
      </p>
      <p>
        <strong>Limitations:</strong> Risk of fiber release during collection, improper sampling, insurance may not cover DIY
      </p>
      <p>
        <strong>Best for:</strong> Single material testing before minor project, not recommended for pre-purchase inspections
      </p>

      <h3>3. Pre-Renovation Asbestos Survey ($600-$1,500)</h3>
      <p>
        <strong>Required when:</strong> Commercial renovations, multi-unit residential, projects disturbing significant materials
      </p>
      <p>
        <strong>Includes:</strong> Comprehensive sampling of all materials in work area, detailed report for contractors
      </p>

      <h2>Asbestos Abatement Costs</h2>

      <h3>1. Popcorn Ceiling Removal ($1-$3 per sq ft)</h3>
      <p>
        <strong>With asbestos:</strong> $3-$7 per sq ft (requires professional abatement)
      </p>
      <p>
        <strong>Typical room (200 sq ft):</strong> $600-$1,400
      </p>
      <p>
        <strong>Whole house:</strong> $3,000-$10,000
      </p>
      <p>
        <strong>Alternatives:</strong> Encapsulation (covering) costs 30-50% less but doesn't remove asbestos
      </p>

      <h3>2. Floor Tile Removal ($3-$8 per sq ft)</h3>
      <p>
        <strong>Costs include:</strong> Containment, removal, mastic (adhesive) removal, disposal
      </p>
      <p>
        <strong>Single room:</strong> $800-$2,000
      </p>
      <p>
        <strong>Whole house:</strong> $5,000-$15,000
      </p>
      <p>
        <strong>Lower cost option:</strong> Install new flooring over existing (if structurally sound): $200-$500
      </p>

      <h3>3. Pipe and Boiler Insulation Removal ($5-$15 per linear foot)</h3>
      <p>
        <strong>Basement piping (typical 100-200 linear feet):</strong> $1,500-$4,000
      </p>
      <p>
        <strong>Entire house piping system:</strong> $5,000-$12,000
      </p>
      <p>
        <strong>Boiler encapsulation (alternative to removal):</strong> $800-$2,000
      </p>

      <h3>4. Vermiculite Attic Insulation Removal ($10-$25 per sq ft)</h3>
      <p>
        <strong>Most expensive asbestos abatement</strong> due to difficult access and high fiber release potential
      </p>
      <p>
        <strong>Typical attic (1,000-1,500 sq ft):</strong> $10,000-$30,000
      </p>
      <p>
        <strong>Includes:</strong> Complete sealing, negative air pressure, HEPA filtration, disposal
      </p>
      <p>
        <strong>Note:</strong> EPA recommends leaving undisturbed if possible; disturbing increases health risk
      </p>

      <h3>5. Siding Removal ($5-$12 per sq ft)</h3>
      <p>
        <strong>Whole house exterior:</strong> $8,000-$20,000
      </p>
      <p>
        <strong>Alternatives:</strong> Install new siding over existing asbestos siding: $6,000-$15,000 (must disclose)
      </p>

      <h2>Asbestos Disclosure Requirements</h2>

      <h3>Federal Law (No General Disclosure Requirement)</h3>
      <p>
        Unlike lead paint, federal law does not require asbestos disclosure in residential real estate transactions. However, sellers must disclose any known material defects, and known asbestos is considered a material defect in most states.
      </p>

      <h3>State Requirements (Varies)</h3>
      <p>
        <strong>States with specific asbestos disclosure:</strong>
      </p>
      <ul>
        <li>California: Sellers must disclose known asbestos-containing materials</li>
        <li>New Jersey: Disclosure required if known</li>
        <li>Most states: Fall under general material defect disclosure obligations</li>
      </ul>

      <h3>Landlord Responsibilities</h3>
      <p>
        <strong>Commercial buildings:</strong> Must inspect and disclose to tenants (AHERA requirements)
      </p>
      <p>
        <strong>Residential rentals:</strong> Disclosure recommended but not federally mandated
      </p>

      <h2>Health Risks of Asbestos Exposure</h2>

      <h3>Diseases Caused by Asbestos</h3>
      <ul>
        <li><strong>Mesothelioma:</strong> Rare, aggressive cancer of lung/abdomen lining; latency 20-50 years; nearly always fatal</li>
        <li><strong>Lung cancer:</strong> Increased risk, especially for smokers (50x higher risk for smoker exposed to asbestos)</li>
        <li><strong>Asbestosis:</strong> Lung scarring causing breathing difficulty; no cure; progressive disease</li>
        <li><strong>Pleural plaques:</strong> Thickening of lung lining; indicator of exposure</li>
      </ul>

      <h3>Exposure Risk Levels</h3>
      <p>
        <strong>Highest risk:</strong> Disturbing friable (crumbly) asbestos during renovations, asbestos workers
      </p>
      <p>
        <strong>Moderate risk:</strong> Living with deteriorating asbestos materials
      </p>
      <p>
        <strong>Low risk:</strong> Intact, undisturbed asbestos materials properly sealed/encapsulated
      </p>

      <h2>Managing Asbestos in Your Home</h2>

      <h3>When to Leave Asbestos Alone</h3>
      <ul>
        <li>Material is in good condition (not crumbling, flaking, or damaged)</li>
        <li>Material will not be disturbed (no renovation planned)</li>
        <li>EPA and many experts recommend leaving intact asbestos undisturbed</li>
        <li>Removal can release more fibers than leaving in place</li>
      </ul>

      <h3>When Abatement Is Necessary</h3>
      <ul>
        <li>Material is damaged and releasing fibers</li>
        <li>Renovation will disturb asbestos-containing materials</li>
        <li>Material is in high-traffic area where damage is likely</li>
        <li>Buyer requires removal as condition of sale</li>
      </ul>

      <h3>Abatement vs. Encapsulation vs. Enclosure</h3>
      <p>
        <strong>Abatement (removal):</strong> Permanently eliminates asbestos; most expensive; highest fiber release risk during process
      </p>
      <p>
        <strong>Encapsulation:</strong> Sealing coating over asbestos; 30-50% cheaper; requires maintenance and monitoring
      </p>
      <p>
        <strong>Enclosure:</strong> Building barrier around/over asbestos; good for pipes; asbestos remains in place
      </p>

      <h2>Contractor Requirements</h2>

      <h3>EPA and State Licensing</h3>
      <p>
        <strong>Required:</strong> EPA-accredited asbestos contractor license for all abatement work
      </p>
      <p>
        <strong>Violations:</strong> $25,000+ per day in fines for unlicensed asbestos work
      </p>
      <p>
        <strong>Verify:</strong> Always check contractor credentials with state environmental agency
      </p>

      <h3>Project Notification Requirements</h3>
      <ul>
        <li>Residential: 10+ days advance notice to EPA/state for projects disturbing >160 sq ft asbestos</li>
        <li>Commercial: Notice required for all asbestos abatement projects</li>
        <li>Emergency projects: 24-hour notification allowed in some states</li>
      </ul>

      <h2>Impact on Real Estate Transactions</h2>

      <h3>Property Value Effects</h3>
      <p>
        <strong>Known asbestos (disclosed, intact):</strong> 2-5% value reduction
      </p>
      <p>
        <strong>Asbestos requiring abatement:</strong> Reduction equal to abatement cost ($5,000-$30,000)
      </p>
      <p>
        <strong>Recently abated:</strong> Minimal to no value impact with documentation
      </p>

      <h3>Inspection and Contingencies</h3>
      <p>
        <strong>Buyer requests:</strong> Increasingly common in pre-1980 homes, especially for renovations
      </p>
      <p>
        <strong>FHA/VA loans:</strong> Damaged or deteriorating asbestos must be abated or encapsulated before closing
      </p>
      <p>
        <strong>Negotiation:</strong> Typical outcome is seller credit for abatement or price reduction
      </p>

      <h2>DIY vs. Professional Work</h2>

      <h3>Never DIY:</h3>
      <ul>
        <li>Vermiculite insulation removal (extremely high fiber release)</li>
        <li>Pipe/boiler insulation removal (friable, high exposure)</li>
        <li>Popcorn ceiling removal with asbestos (requires containment)</li>
        <li>Large-scale projects (over 3 sq ft or 3 linear feet)</li>
      </ul>

      <h3>Possibly DIY (With Extreme Caution):</h3>
      <ul>
        <li>Covering intact floor tiles with new flooring (no removal/disturbance)</li>
        <li>Encapsulating small damaged areas (must follow EPA guidelines)</li>
        <li>Removing small amounts for testing (proper PPE and containment)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Asbestos remains a significant concern in pre-1980 homes, requiring careful assessment before renovations or disturbance. While no federal disclosure law exists for residential sales, ethical and legal obligations to disclose known material defects apply. Professional testing ($400-$850) provides critical information for informed decisions, and EPA-licensed abatement ($1,500-$30,000+) ensures safe removal when necessary.
      </p>
      <p>
        Always hire certified professionals for testing and abatement, maintain detailed documentation, and never disturb suspected asbestos materials without proper testing. The health risks of asbestos exposure are severe and irreversible, making proper handling and disclosure essential for protecting all parties involved in property transactions.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeAge",
        label: "Home Construction Year",
        type: "select",
        required: true,
        options: [
          { value: "pre1980", label: "Before 1980 (High Asbestos Risk)" },
          { value: "1980-1989", label: "1980-1989 (Moderate Risk)" },
          { value: "post1990", label: "1990 or Later (Low Risk)" },
        ],
        tooltip: "Asbestos use peaked before 1980",
      },
      {
        name: "testingScope",
        label: "Testing Scope",
        type: "select",
        required: true,
        options: [
          { value: "basic", label: "Basic (3-5 samples)" },
          { value: "standard", label: "Standard (6-10 samples)" },
          { value: "comprehensive", label: "Comprehensive (10+ samples)" },
        ],
        tooltip: "More samples provide better coverage but cost more",
      },
      {
        name: "abatementNeeded",
        label: "Abatement Type",
        type: "select",
        required: false,
        options: [
          { value: "none", label: "No Abatement Needed" },
          { value: "popcorn", label: "Popcorn Ceiling Removal" },
          { value: "floortile", label: "Floor Tile Removal" },
          { value: "pipe", label: "Pipe/Boiler Insulation Removal" },
          { value: "vermiculite", label: "Vermiculite Attic Insulation" },
          { value: "siding", label: "Siding Removal" },
        ],
        tooltip: "Select if asbestos removal or abatement is needed",
      },
      {
        name: "projectSize",
        label: "Project Size (if abatement)",
        type: "select",
        required: false,
        options: [
          { value: "small", label: "Small (Single room/area)" },
          { value: "medium", label: "Medium (Multiple rooms)" },
          { value: "large", label: "Large (Whole house)" },
        ],
        tooltip: "Size of abatement project affects cost significantly",
      },
    ],
    results: [
      {
        label: "Testing Cost",
        value: "testingCost",
        format: "currency",
        tooltip: "Cost for professional asbestos testing",
      },
      {
        label: "Abatement Cost Estimate",
        value: "abatementCost",
        format: "currency",
        tooltip: "Estimated cost for asbestos removal/abatement",
      },
      {
        label: "Total Estimated Cost",
        value: "totalCost",
        format: "currency",
        tooltip: "Combined testing and abatement costs",
      },
      {
        label: "Risk Level",
        value: "riskLevel",
        format: "text",
        tooltip: "Asbestos risk level based on home age",
      },
      {
        label: "Disclosure Requirement",
        value: "disclosureRequired",
        format: "text",
        tooltip: "Legal disclosure requirements",
      },
    ],
    calculate: (inputs: Record<string, string>) => {
      const homeAge = inputs.homeAge;
      const testingScope = inputs.testingScope;
      const abatementNeeded = inputs.abatementNeeded || "none";
      const projectSize = inputs.projectSize || "small";

      // Testing costs
      const testingCosts: Record<string, number> = {
        basic: 450,
        standard: 600,
        comprehensive: 800,
      };

      const testingCost = testingCosts[testingScope];

      // Abatement costs
      const abatementBaseCosts: Record<string, Record<string, number>> = {
        none: { small: 0, medium: 0, large: 0 },
        popcorn: { small: 1000, medium: 4000, large: 8000 },
        floortile: { small: 1500, medium: 7000, large: 12000 },
        pipe: { small: 2500, medium: 7000, large: 10000 },
        vermiculite: { small: 10000, medium: 18000, large: 28000 },
        siding: { small: 8000, medium: 12000, large: 18000 },
      };

      const abatementCost = abatementBaseCosts[abatementNeeded][projectSize];

      // Total cost
      const totalCost = testingCost + abatementCost;

      // Risk level
      let riskLevel = "";
      if (homeAge === "pre1980") riskLevel = "High - Asbestos likely present";
      else if (homeAge === "1980-1989") riskLevel = "Moderate - Some asbestos materials possible";
      else riskLevel = "Low - Asbestos use largely phased out";

      // Disclosure requirement
      const disclosureRequired = "Disclose known asbestos; no federal mandate but state laws vary";

      return {
        testingCost,
        abatementCost,
        totalCost,
        riskLevel,
        disclosureRequired,
      };
    },
  },
};
