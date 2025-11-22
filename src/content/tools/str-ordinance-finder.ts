import { CalculatorContent } from '@/types';

export const STR_ORDINANCE_FINDER_CONTENT: CalculatorContent = {
  title: 'Short-Term Rental (STR) Ordinance Finder by City',
  description: 'Find short-term rental regulations, permit requirements, and compliance rules for your city',
  icon: 'Icon',
  category: 'Rental Property',
  slug: 'str-ordinance-finder',
  metaTitle: 'Short-Term Rental Ordinance Finder | STR Laws by City',
  metaDescription: 'Find short-term rental regulations, permit requirements, and compliance rules for your city. Search STR ordinances, Airbnb laws, and vacation rental rules.',
  metaKeywords: 'short-term rental ordinance, STR laws, Airbnb regulations, vacation rental permits, city STR rules, short-term rental compliance, STR licensing, vacation rental laws, Airbnb permits, rental ordinances',
  article: {
    title: "Understanding Short-Term Rental Ordinances",
    content: `
    <h2>Understanding Short-Term Rental Ordinances</h2>
    <p>Short-term rental (STR) ordinances vary significantly by city and can impact your ability to legally operate vacation rentals. Understanding local regulations is crucial for compliance and avoiding costly penalties.</p>
    
    <h3>What Are STR Ordinances?</h3>
    <p>STR ordinances are local laws that regulate short-term rentals (typically stays under 30 days). These regulations may include:</p>
    <ul>
      <li><strong>Permit Requirements:</strong> Many cities require permits or licenses to operate STRs</li>
      <li><strong>Zoning Restrictions:</strong> Limits on where STRs can operate (residential vs commercial zones)</li>
      <li><strong>Occupancy Limits:</strong> Maximum number of guests allowed</li>
      <li><strong>Night Limits:</strong> Maximum nights per year a property can be rented short-term</li>
      <li><strong>Primary Residence Rules:</strong> Requirements to live in the property being rented</li>
      <li><strong>Tax Requirements:</strong> Local hotel/occupancy taxes (TOT, LOT)</li>
    </ul>
    
    <h3>Common Restrictions by City Type</h3>
    <h4>Major Tourist Cities</h4>
    <p>Cities like San Francisco, New York, and New Orleans have strict regulations requiring:</p>
    <ul>
      <li>Primary residence requirement (host must live there)</li>
      <li>Annual night caps (e.g., 90-120 nights per year)</li>
      <li>Registration and permits</li>
      <li>Significant fines for violations ($1,000+ per day)</li>
    </ul>
    
    <h4>Suburban Areas</h4>
    <p>Suburban communities often restrict or ban STRs entirely to preserve neighborhood character.</p>
    
    <h4>Resort Towns</h4>
    <p>Mountain and beach towns may be more permissive but still require licensing and tax collection.</p>
    
    <h3>Compliance Checklist</h3>
    <ul>
      <li>Check city and county ordinances</li>
      <li>Verify HOA/condo association rules</li>
      <li>Obtain required permits/licenses</li>
      <li>Register with tax authorities</li>
      <li>Maintain proper insurance (commercial/STR policy)</li>
      <li>Follow occupancy and safety requirements</li>
      <li>Keep accurate rental records</li>
    </ul>
    
    <h3>Penalties for Non-Compliance</h3>
    <p>Operating an illegal STR can result in:</p>
    <ul>
      <li>Daily fines ($500-$5,000+ per violation)</li>
      <li>Cease and desist orders</li>
      <li>Lawsuits from neighbors or HOAs</li>
      <li>Platform delisting (Airbnb, Vrbo removal)</li>
      <li>Loss of rental income</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Research regulations before purchasing an investment property</li>
      <li>Consult with a local real estate attorney</li>
      <li>Join local STR host associations</li>
      <li>Monitor regulatory changes (cities frequently update rules)</li>
      <li>Maintain good neighbor relations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "San Francisco",
        defaultValue: "",
      },
      {
        name: "state",
        label: "State",
        type: "text",
        placeholder: "California",
        defaultValue: "",
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          { value: "Entire Home", label: "Entire Home" },
          { value: "Private Room", label: "Private Room" },
          { value: "Shared Room", label: "Shared Room" }
        ],
        defaultValue: "Entire Home",
      },
      {
        name: "isPrimaryResidence",
        label: "Is Primary Residence?",
        type: "select",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        defaultValue: "Yes",
      },
      {
        name: "plannedNightsPerYear",
        label: "Planned Rental Nights Per Year",
        type: "number",
        placeholder: "180",
        defaultValue: "180",
      },
    ],
    results: [
      { label: "Likely Permit Required", isCurrency: false },
      { label: "Estimated Compliance Risk", isCurrency: false },
      { label: "Primary Residence Requirement", isCurrency: false },
      { label: "Typical Night Cap", isCurrency: false },
      { label: "Estimated Annual Permit Cost", isCurrency: true },
      { label: "Tax Registration Required", isCurrency: false },
    ],
    calculate: (data: any) => {
      const city = data.city || "";
      const state = data.state || "";
      const propertyType = data.propertyType || "Entire Home";
      const isPrimaryResidence = data.isPrimaryResidence === "Yes";
      const plannedNights = Number(data.plannedNightsPerYear) || 0;

      // Simplified logic - in reality this would query a database
      const strictCities = ["san francisco", "new york", "los angeles", "new orleans", "boston", "chicago"];
      const cityLower = city.toLowerCase();
      const isStrictCity = strictCities.some(c => cityLower.includes(c));

      let permitRequired = "✅ Yes - Required";
      let complianceRisk = "🟢 Low Risk";
      let primaryResidenceRequired = "No";
      let nightCap = "No Limit";
      let estimatedPermitCost = 0;
      let taxRequired = "✅ Yes";

      if (isStrictCity) {
        permitRequired = "✅ Yes - Mandatory";
        primaryResidenceRequired = "✅ Yes - Required";
        nightCap = isPrimaryResidence ? "90-120 nights" : "Not Allowed";
        estimatedPermitCost = 250;

        if (!isPrimaryResidence) {
          complianceRisk = "🔴 High Risk - May Not Be Legal";
        } else if (plannedNights > 120) {
          complianceRisk = "🟡 Medium Risk - Exceeds Typical Cap";
        } else {
          complianceRisk = "🟢 Low Risk - Meets Requirements";
        }
      } else {
        permitRequired = "⚠️ Likely Required - Check Local Rules";
        complianceRisk = plannedNights > 180 ? "🟡 Medium Risk" : "🟢 Low Risk";
        primaryResidenceRequired = "⚠️ Varies by City";
        nightCap = "⚠️ Check Local Ordinance";
        estimatedPermitCost = 100;
      }

      return [
        { label: "Likely Permit Required", value: permitRequired, isCurrency: false },
        { label: "Estimated Compliance Risk", value: complianceRisk, isCurrency: false },
        { label: "Primary Residence Requirement", value: primaryResidenceRequired, isCurrency: false },
        { label: "Typical Night Cap", value: nightCap, isCurrency: false },
        { label: "Estimated Annual Permit Cost", value: estimatedPermitCost.toFixed(2), isCurrency: true },
        { label: "Tax Registration Required", value: taxRequired, isCurrency: false },
      ];
    },
  },
};
