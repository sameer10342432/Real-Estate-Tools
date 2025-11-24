import { CalculatorContent } from '@/types';

export const VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'View Easement Value Calculator - Protect & Value Scenic Views',
  description: 'Calculate view easement values, analyze view protection options, and assess property value impact from view preservation or obstruction',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'view-easement-value-calculator',
  article: {
    title: "View Easement Value: Protecting Your Property's Scenic Views",
    content: `
    <h2>What is a View Easement?</h2>
    <p>A view easement is a legal agreement that protects your property's scenic views by restricting what neighboring property owners can build or plant that would obstruct your sightlines. View easements preserve property values for homes where views are a significant value component.</p>
    
    <h3>Types of View Protection</h3>
    <p><strong>Negative View Easement:</strong></p>
    <ul>
      <li>Prevents neighbor from building structures above certain height</li>
      <li>Restricts tree planting or growth that blocks views</li>
      <li>Most common type for residential properties</li>
      <li>Runs with the land (binds future owners)</li>
    </ul>
    
    <p><strong>Affirmative View Easement:</strong></p>
    <ul>
      <li>Grants right to trim or remove vegetation on neighbor's property</li>
      <li>Less common, more difficult to negotiate</li>
      <li>May require ongoing maintenance payments</li>
    </ul>
    
    <h3>Property Value Impact of Views</h3>
    <p>Premium for scenic views varies by market and view type:</p>
    <ul>
      <li><strong>Ocean Views:</strong> 50-100% premium over non-view properties</li>
      <li><strong>Mountain Views:</strong> 20-40% premium</li>
      <li><strong>Lake/Water Views:</strong> 30-60% premium</li>
      <li><strong>City/Skyline Views:</strong> 15-35% premium</li>
      <li><strong>Golf Course Views:</strong> 10-20% premium</li>
      <li><strong>Partial/Peek Views:</strong> 5-15% premium</li>
    </ul>
    
    <h3>Value of View Easements</h3>
    <p>Cost to establish view easement (paying neighbor for restrictions):</p>
    <ul>
      <li><strong>Typical Range:</strong> 5-30% of view-related property value premium</li>
      <li><strong>Ocean View Easement:</strong> $50,000-$500,000+ in high-end coastal markets</li>
      <li><strong>Mountain/Lake Views:</strong> $20,000-$200,000</li>
      <li><strong>City Views:</strong> $10,000-$100,000</li>
      <li><strong>Factors:</strong> View quality, neighbor's development potential, market values</li>
    </ul>
    
    <h3>Negotiating View Easements</h3>
    <p>When negotiating with neighbors:</p>
    <ul>
      <li><strong>Early Approach:</strong> Approach before neighbor builds or plants</li>
      <li><strong>Mutual Benefit:</strong> Consider reciprocal easements</li>
      <li><strong>Compensation:</strong> One-time payment or annual fee</li>
      <li><strong>Specific Restrictions:</strong> Define height limits, tree species, setbacks</li>
      <li><strong>Legal Documentation:</strong> Record easement in county land records</li>
    </ul>
    
    <h3>View Easement Terms</h3>
    <p>Key provisions to include:</p>
    <ul>
      <li><strong>Height Restrictions:</strong> Maximum building height on neighbor's property</li>
      <li><strong>Vegetation Limits:</strong> Tree height limits or prohibited tree species</li>
      <li><strong>View Corridor:</strong> Defined sight lines to be protected</li>
      <li><strong>Maintenance Rights:</strong> Right to trim encroaching vegetation</li>
      <li><strong>Enforcement:</strong> Remedies for violations</li>
      <li><strong>Duration:</strong> Perpetual easement running with the land</li>
    </ul>
    
    <h3>HOA and Subdivision View Protection</h3>
    <p>Many planned communities include view protection:</p>
    <ul>
      <li><strong>CC&Rs:</strong> Height restrictions and design guidelines</li>
      <li><strong>View Committees:</strong> Review building plans for view impact</li>
      <li><strong>Tree Ordinances:</strong> Limits on tree heights and species</li>
      <li><strong>Architectural Review:</strong> Ensures homes don't block neighbor views</li>
    </ul>
    
    <h3>Legal Protections Without Easements</h3>
    <p>Some jurisdictions have view protection ordinances:</p>
    <ul>
      <li><strong>California Cities:</strong> Many coastal cities have tree/view ordinances</li>
      <li><strong>Tree Height Limits:</strong> Municipal limits on tree heights blocking views</li>
      <li><strong>Solar Access:</strong> Some states protect solar access (similar to views)</li>
      <li><strong>Spite Fence Laws:</strong> Prohibit malicious view blocking</li>
    </ul>
    
    <h3>When View is Obstructed</h3>
    <p>If neighbor blocks your view without easement:</p>
    <ul>
      <li><strong>Check Local Ordinances:</strong> View protection or tree height laws</li>
      <li><strong>Review HOA Rules:</strong> CC&Rs may protect views</li>
      <li><strong>Negotiate:</strong> Offer to pay for tree trimming/removal</li>
      <li><strong>Property Value Impact:</strong> May qualify for property tax reduction</li>
      <li><strong>Legal Options Limited:</strong> Without easement, neighbor generally has right to build/plant</li>
    </ul>
    
    <h3>Creating New View Easements</h3>
    <ol>
      <li><strong>Property Appraisal:</strong> Determine view value premium on your property</li>
      <li><strong>Identify Threats:</strong> Which neighboring properties could block views</li>
      <li><strong>Approach Neighbors:</strong> Discuss view protection before they build</li>
      <li><strong>Negotiate Terms:</strong> Height limits, vegetation restrictions, compensation</li>
      <li><strong>Hire Attorney:</strong> Draft enforceable easement agreement</li>
      <li><strong>Survey:</strong> Define protected view corridors precisely</li>
      <li><strong>Record Easement:</strong> File with county recorder's office</li>
    </ol>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Cost vs. Benefit:</strong> Easement cost should be less than view value premium</li>
      <li><strong>Future Owners:</strong> Easement benefits all future owners of your property</li>
      <li><strong>Neighbor Relations:</strong> Balance protection with good neighbor relationships</li>
      <li><strong>Multiple Properties:</strong> May need easements from multiple neighbors</li>
      <li><strong>Tree Growth:</strong> Consider long-term tree growth patterns</li>
      <li><strong>Property Taxes:</strong> Neighbor may seek property tax reduction for easement burden</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Value Without View ($)",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "viewType",
        label: "Type of View",
        type: "select",
        options: [
          { value: "ocean", label: "Ocean View" },
          { value: "mountain", label: "Mountain View" },
          { value: "lake", label: "Lake/Water View" },
          { value: "city", label: "City/Skyline View" },
          { value: "golf", label: "Golf Course View" },
          { value: "partial", label: "Partial/Peek View" },
        ],
        defaultValue: "ocean",
      },
      {
        name: "viewQuality",
        label: "View Quality",
        type: "select",
        options: [
          { value: "excellent", label: "Excellent - Unobstructed Panoramic" },
          { value: "good", label: "Good - Clear But Limited" },
          { value: "fair", label: "Fair - Partial or Distant" },
        ],
        defaultValue: "good",
      },
      {
        name: "neighborDevelopmentPotential",
        label: "Neighbor's Development Potential",
        type: "select",
        options: [
          { value: "high", label: "High - Vacant Lot or Can Add Stories" },
          { value: "medium", label: "Medium - Some Expansion Possible" },
          { value: "low", label: "Low - Fully Developed" },
        ],
        defaultValue: "medium",
      },
    ],
    results: [
      { label: "Property Value With View", isCurrency: true },
      { label: "View Premium Value", isCurrency: true },
      { label: "View Premium Percentage", isCurrency: false },
      { label: "Estimated Easement Cost Range", isCurrency: false },
      { label: "Value Protected by Easement", isCurrency: true },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const viewType = data.viewType || "ocean";
      const viewQuality = data.viewQuality || "good";
      const developmentPotential = data.neighborDevelopmentPotential || "medium";
      
      // Determine base view premium percentage
      let basePremium = 0;
      switch(viewType) {
        case "ocean":
          basePremium = 0.75; // 75% average
          break;
        case "mountain":
          basePremium = 0.30; // 30%
          break;
        case "lake":
          basePremium = 0.45; // 45%
          break;
        case "city":
          basePremium = 0.25; // 25%
          break;
        case "golf":
          basePremium = 0.15; // 15%
          break;
        case "partial":
          basePremium = 0.10; // 10%
          break;
      }
      
      // Adjust for view quality
      let qualityMultiplier = 1.0;
      switch(viewQuality) {
        case "excellent":
          qualityMultiplier = 1.3;
          break;
        case "good":
          qualityMultiplier = 1.0;
          break;
        case "fair":
          qualityMultiplier = 0.7;
          break;
      }
      
      const adjustedPremium = basePremium * qualityMultiplier;
      const viewPremiumValue = propertyValue * adjustedPremium;
      const propertyValueWithView = propertyValue + viewPremiumValue;
      
      // Calculate easement cost range (typically 5-30% of view premium)
      let easementCostMin = viewPremiumValue * 0.05;
      let easementCostMax = viewPremiumValue * 0.30;
      
      // Adjust for development potential
      switch(developmentPotential) {
        case "high":
          easementCostMin *= 1.5;
          easementCostMax *= 1.8;
          break;
        case "medium":
          // Use base values
          break;
        case "low":
          easementCostMin *= 0.6;
          easementCostMax *= 0.7;
          break;
      }
      
      const premiumPercentage = (adjustedPremium * 100).toFixed(1);

      return [
        { label: "Property Value With View", value: `${propertyValueWithView.toFixed(2)}`, isCurrency: true },
        { label: "View Premium Value", value: `${viewPremiumValue.toFixed(2)}`, isCurrency: true },
        { label: "View Premium Percentage", value: `${premiumPercentage}%`, isCurrency: false },
        { label: "Estimated Easement Cost Range", value: `$${easementCostMin.toFixed(0)} - $${easementCostMax.toFixed(0)}`, isCurrency: false },
        { label: "Value Protected by Easement", value: `${viewPremiumValue.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
