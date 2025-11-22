import { CalculatorContent } from '@/types';

export const RENT_CONTROL_TESTER_CONTENT: CalculatorContent = {
  title: 'Rent Control Applicability Tester',
  description: 'Determine if rent control laws apply to your rental property and calculate allowable rent increases',
  icon: 'Icon',
  category: 'Rental Property',
  slug: 'rent-control-tester',
  metaTitle: 'Rent Control Tester | Check Rent Increase Limits by State',
  metaDescription: 'Determine if rent control applies to your property and calculate allowable rent increases. Check state and city rent stabilization laws and compliance.',
  metaKeywords: 'rent control laws, rent stabilization, rent increase limits, AB 1482, California rent control, rent control tester, allowable rent increase, rent cap calculator, tenant rights, landlord laws',
  article: {
    title: "Understanding Rent Control Laws",
    content: `
    <h2>Understanding Rent Control Laws</h2>
    <p>Rent control laws limit how much landlords can increase rent. These regulations vary by state, city, and even by building age and type. Understanding if your property is subject to rent control is crucial for landlords and tenants alike.</p>
    
    <h3>What Is Rent Control?</h3>
    <p>Rent control (also called "rent stabilization") limits annual rent increases, typically capping them at a percentage tied to inflation (CPI) or a fixed percentage set by local law.</p>
    
    <h3>Where Rent Control Exists</h3>
    <h4>States with Rent Control</h4>
    <ul>
      <li><strong>California:</strong> Statewide rent control (AB 1482) plus local ordinances in cities like SF, LA, Oakland</li>
      <li><strong>New York:</strong> Rent control and rent stabilization in NYC and some counties</li>
      <li><strong>Oregon:</strong> Statewide rent control limiting increases to 7% + CPI</li>
      <li><strong>New Jersey, Maryland, DC:</strong> Select cities and counties</li>
    </ul>
    
    <h3>Common Exemptions</h3>
    <p>Many rent control laws exempt:</p>
    <ul>
      <li><strong>New Construction:</strong> Buildings built after a certain date (e.g., 1995 in California, 2007 in Oregon)</li>
      <li><strong>Single-Family Homes:</strong> Often exempt unless owned by corporations/REITs</li>
      <li><strong>Condos:</strong> May be exempt in some jurisdictions</li>
      <li><strong>Owner-Occupied Duplexes/Triplexes:</strong> Sometimes exempt</li>
      <li><strong>Affordable Housing:</strong> Government-subsidized units may have separate rules</li>
    </ul>
    
    <h3>Typical Rent Increase Caps</h3>
    <ul>
      <li><strong>California (AB 1482):</strong> 5% + local CPI, max 10% per year</li>
      <li><strong>Oregon:</strong> 7% + CPI</li>
      <li><strong>San Francisco:</strong> 60% of local CPI</li>
      <li><strong>New York City (stabilized):</strong> Set annually by Rent Guidelines Board (typically 1-3%)</li>
      <li><strong>Los Angeles:</strong> 3-8% depending on CPI</li>
    </ul>
    
    <h3>Vacancy Decontrol</h3>
    <p>Most rent control laws allow "vacancy decontrol" - landlords can raise rent to market rate when a tenant moves out, but subsequent increases are capped again.</p>
    
    <h3>Just Cause Eviction Requirements</h3>
    <p>Rent-controlled properties often require "just cause" to evict tenants, limiting evictions to:</p>
    <ul>
      <li>Non-payment of rent</li>
      <li>Lease violations</li>
      <li>Owner move-in (may require relocation assistance)</li>
      <li>Substantial renovations</li>
    </ul>
    
    <h3>Penalties for Violations</h3>
    <p>Illegally raising rent above limits can result in:</p>
    <ul>
      <li>Tenant lawsuits for overcharges (plus attorneys fees)</li>
      <li>Refund of excess rent (often trebled damages)</li>
      <li>Civil penalties from housing authorities</li>
      <li>Criminal charges in extreme cases</li>
    </ul>
    
    <h3>Landlord Rights</h3>
    <p>Even with rent control, landlords can typically:</p>
    <ul>
      <li>Pass through certain capital improvements (with approval)</li>
      <li>Add surcharges for additional occupants</li>
      <li>Petition for hardship increases</li>
      <li>Raise rent to market rate upon vacancy</li>
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
          { value: "California", label: "California" },
          { value: "New York", label: "New York" },
          { value: "Oregon", label: "Oregon" },
          { value: "New Jersey", label: "New Jersey" },
          { value: "Maryland", label: "Maryland" },
          { value: "DC", label: "DC" },
          { value: "Other", label: "Other" }
        ],
        defaultValue: "California",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Los Angeles",
        defaultValue: "",
      },
      {
        name: "buildingAge",
        label: "Year Built",
        type: "number",
        placeholder: "1990",
        defaultValue: "1990",
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          { value: "Apartment Building (3+ units)", label: "Apartment Building (3+ units)" },
          { value: "Duplex", label: "Duplex" },
          { value: "Single-Family Home", label: "Single-Family Home" },
          { value: "Condo", label: "Condo" }
        ],
        defaultValue: "Apartment Building (3+ units)",
      },
      {
        name: "currentRent",
        label: "Current Monthly Rent",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "proposedRent",
        label: "Proposed Monthly Rent",
        type: "number",
        placeholder: "2200",
        defaultValue: "2200",
      },
      {
        name: "localCPI",
        label: "Local CPI (%)",
        type: "number",
        placeholder: "3.5",
        defaultValue: "3.5",
      },
    ],
    results: [
      { label: "Rent Control Applies?", isCurrency: false },
      { label: "Maximum Allowable Increase", isCurrency: false },
      { label: "Maximum New Rent", isCurrency: true },
      { label: "Proposed Increase %", isCurrency: false },
      { label: "Proposed Increase Legal?", isCurrency: false },
      { label: "Excess Amount (if over limit)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const state = data.state || "California";
      const city = (data.city || "").toLowerCase();
      const buildingAge = Number(data.buildingAge) || 2000;
      const propertyType = data.propertyType || "Apartment Building (3+ units)";
      const currentRent = Number(data.currentRent) || 0;
      const proposedRent = Number(data.proposedRent) || 0;
      const localCPI = Number(data.localCPI) || 3.5;

      let rentControlApplies = false;
      let maxIncreasePercent = 100; // No limit
      let reason = "";

      // California logic
      if (state === "California") {
        if (buildingAge > 1995 && propertyType === "Single-Family Home") {
          rentControlApplies = false;
          reason = "Exempt - Single-family home built after 1995";
        } else if (buildingAge <= 1995 || propertyType.includes("Apartment")) {
          rentControlApplies = true;
          // AB 1482: 5% + CPI, max 10%
          maxIncreasePercent = Math.min(5 + localCPI, 10);
          reason = "AB 1482 applies";

          // Stricter local rules
          if (city.includes("san francisco")) {
            maxIncreasePercent = localCPI * 0.6; // 60% of CPI
            reason = "SF Rent Ordinance applies";
          } else if (city.includes("los angeles")) {
            maxIncreasePercent = Math.min(localCPI + 3, 8);
            reason = "LA Rent Stabilization applies";
          }
        }
      }

      // Oregon logic
      if (state === "Oregon") {
        if (buildingAge <= 2007) {
          rentControlApplies = true;
          maxIncreasePercent = 7 + localCPI;
          reason = "Oregon statewide rent control";
        }
      }

      // New York logic
      if (state === "New York") {
        if (city.includes("new york") && buildingAge <= 1974) {
          rentControlApplies = true;
          maxIncreasePercent = 2.5; // Simplified - varies by RGB
          reason = "NYC Rent Stabilization";
        }
      }

      const maxAllowableIncrease = currentRent * (maxIncreasePercent / 100);
      const maxNewRent = currentRent + maxAllowableIncrease;
      const proposedIncrease = proposedRent - currentRent;
      const proposedIncreasePercent = currentRent > 0 ? (proposedIncrease / currentRent) * 100 : 0;
      const isLegal = !rentControlApplies || proposedRent <= maxNewRent;
      const excessAmount = Math.max(0, proposedRent - maxNewRent);

      const appliesText = rentControlApplies 
        ? `✅ Yes - ${reason}` 
        : `❌ No - ${reason || "Not subject to rent control"}`;

      const legalText = isLegal 
        ? "✅ Legal" 
        : "❌ Illegal - Exceeds Cap";

      return [
        { label: "Rent Control Applies?", value: appliesText, isCurrency: false },
        { label: "Maximum Allowable Increase", value: rentControlApplies ? `${maxIncreasePercent.toFixed(2)}%` : "No Limit", isCurrency: false },
        { label: "Maximum New Rent", value: rentControlApplies ? maxNewRent.toFixed(2) : "No Limit", isCurrency: true },
        { label: "Proposed Increase %", value: `${proposedIncreasePercent.toFixed(2)}%`, isCurrency: false },
        { label: "Proposed Increase Legal?", value: legalText, isCurrency: false },
        { label: "Excess Amount (if over limit)", value: excessAmount.toFixed(2), isCurrency: true },
      ];
    },
  },
};
