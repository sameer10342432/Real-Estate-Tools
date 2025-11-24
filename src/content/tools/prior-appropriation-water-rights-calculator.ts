import { CalculatorContent } from '@/types';

export const PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Prior Appropriation Water Rights Calculator',
  description: 'Analyze water rights under prior appropriation doctrine for properties in western states and determine seniority, allocation, and usage rights',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'prior-appropriation-water-rights-calculator',
  article: {
    title: "Understanding Prior Appropriation Water Rights",
    content: `
    <h2>What is Prior Appropriation?</h2>
    <p>Prior appropriation is the water rights doctrine used in most western U.S. states, based on the principle "first in time, first in right." Unlike riparian rights (eastern states), water rights are separate from land ownership and based on historical use and seniority.</p>
    
    <h3>Prior Appropriation States</h3>
    <p>States using pure or modified prior appropriation:</p>
    <ul>
      <li><strong>Pure Prior Appropriation:</strong> Alaska, Arizona, Colorado, Idaho, Montana, Nevada, New Mexico, Utah, Wyoming</li>
      <li><strong>Mixed/Hybrid Systems:</strong> California, Kansas, Nebraska, North Dakota, Oklahoma, Oregon, South Dakota, Texas, Washington</li>
      <li><strong>Key Feature:</strong> "Use it or lose it" - must apply water to beneficial use or lose rights</li>
    </ul>
    
    <h3>Core Principles</h3>
    <ul>
      <li><strong>First in Time, First in Right:</strong> Earlier appropriations have priority over later ones</li>
      <li><strong>Beneficial Use:</strong> Water must be put to recognized beneficial use (irrigation, domestic, industrial, etc.)</li>
      <li><strong>Priority Date:</strong> Rights ranked by date of first use or application</li>
      <li><strong>Diversion Required:</strong> Historically required physical diversion (some states now recognize instream flows)</li>
      <li><strong>Separate from Land:</strong> Water rights can be sold apart from land</li>
      <li><strong>No Waste:</strong> Must use water efficiently, cannot waste</li>
    </ul>
    
    <h3>Types of Beneficial Uses</h3>
    <p>States recognize various beneficial uses, typically ranked by preference:</p>
    <ul>
      <li><strong>Domestic:</strong> Household use (highest priority in most states)</li>
      <li><strong>Agricultural/Irrigation:</strong> Farming, livestock watering</li>
      <li><strong>Municipal:</strong> Public water supply</li>
      <li><strong>Industrial:</strong> Manufacturing, mining</li>
      <li><strong>Stockwatering:</strong> Livestock</li>
      <li><strong>Recreation:</strong> Fishing, boating (varies by state)</li>
      <li><strong>Environmental:</strong> Instream flows for fish/wildlife (newer recognition)</li>
      <li><strong>Hydropower:</strong> Electricity generation</li>
    </ul>
    
    <h3>Acquiring Water Rights</h3>
    <p>Methods to obtain water rights:</p>
    
    <h4>1. Appropriation (New Rights)</h4>
    <ul>
      <li>File application with state water agency</li>
      <li>Demonstrate water availability</li>
      <li>Prove beneficial use</li>
      <li>Show no harm to existing rights</li>
      <li>Timeline: 1-5 years in many states</li>
      <li>Costs: $2,000-$25,000+ for application, engineering, legal fees</li>
      <li>Note: Many western streams fully appropriated (no new rights available)</li>
    </ul>
    
    <h4>2. Purchase Existing Rights</h4>
    <ul>
      <li>Buy from another user (with or without land)</li>
      <li>Requires state approval of transfer</li>
      <li>Cannot harm other appropriators</li>
      <li>May require change in point of diversion or use</li>
      <li>Price: $1,000-$50,000+ per acre-foot depending on location and seniority</li>
    </ul>
    
    <h4>3. Adjudicated Rights</h4>
    <ul>
      <li>Historic rights confirmed through water court adjudication</li>
      <li>Common in states that adjudicated all watershed rights</li>
      <li>Decree specifies quantity, priority date, use</li>
    </ul>
    
    <h3>Priority System and "Calls"</h3>
    <p>During water shortages:</p>
    <ul>
      <li><strong>Senior Rights:</strong> Earlier priority dates get water first</li>
      <li><strong>Junior Rights:</strong> Later priority dates curtailed during shortages</li>
      <li><strong>"Call on the River":</strong> Senior rights holder can force juniors to stop diverting</li>
      <li><strong>Priority Dates:</strong> Can range from 1800s (very senior) to recent years (very junior)</li>
      <li><strong>Example:</strong> 1880 right gets full allocation before 1920 right gets any water</li>
    </ul>
    
    <h3>Measuring Water Rights</h3>
    <ul>
      <li><strong>Acre-Foot:</strong> Volume covering 1 acre to depth of 1 foot (325,851 gallons)</li>
      <li><strong>Cubic Feet per Second (CFS):</strong> Flow rate (1 CFS = ~2 acre-feet per day)</li>
      <li><strong>Gallons per Minute (GPM):</strong> Well capacity</li>
      <li><strong>Irrigation Examples:</strong> 3-5 acre-feet per acre annually for crops</li>
      <li><strong>Domestic Use:</strong> 1 acre-foot serves ~2-4 households annually</li>
    </ul>
    
    <h3>Abandonment and Forfeiture</h3>
    <p>Water rights can be lost through:</p>
    <ul>
      <li><strong>Abandonment:</strong> Intent to give up right plus non-use</li>
      <li><strong>Forfeiture:</strong> Statutorynon-use period (typically 3-7 years depending on state)</li>
      <li><strong>Partial Forfeiture:</strong> Can lose unused portion while retaining used amount</li>
      <li><strong>Protection:</strong> File for non-use permit during temporary non-use periods</li>
      <li><strong>Crop Rotation:</strong> Allowed in many states without forfeiture</li>
    </ul>
    
    <h3>Transfers and Changes</h3>
    <p>Modifying water rights requires state approval:</p>
    <ul>
      <li><strong>Change in Use:</strong> From irrigation to municipal, for example</li>
      <li><strong>Change in Point of Diversion:</strong> Moving intake location</li>
      <li><strong>Change in Place of Use:</strong> Using water on different land</li>
      <li><strong>No Injury Rule:</strong> Changes cannot harm other water rights holders</li>
      <li><strong>Historical Consumptive Use:</strong> Can only transfer amount historically consumed</li>
    </ul>
    
    <h3>Well Rights vs. Surface Water Rights</h3>
    <ul>
      <li><strong>Tributary Groundwater:</strong> Often subject to same prior appropriation rules</li>
      <li><strong>Permits Required:</strong> Most states require well permits</li>
      <li><strong>Domestic Wells:</strong> Often exempt from permitting (small household use)</li>
      <li><strong>Confined Aquifers:</strong> May have separate allocation rules</li>
      <li><strong>Conjunctive Management:</strong> Some states manage surface and groundwater together</li>
    </ul>
    
    <h3>Property Value Implications</h3>
    <ul>
      <li>Senior water rights dramatically increase agricultural land value</li>
      <li>Western land without water rights often nearly worthless for farming</li>
      <li>1 acre-foot of senior water: $5,000-$50,000+ depending on location</li>
      <li>Junior rights worth less, may be unreliable</li>
      <li>Urban water rights extremely valuable (municipal use often preferred)</li>
    </ul>
    
    <h3>Due Diligence for Buyers</h3>
    <ul>
      <li>Review water rights decree or permit</li>
      <li>Verify priority date and seniority</li>
      <li>Confirm beneficial use matches intended use</li>
      <li>Check historical use records (avoid forfeiture issues)</li>
      <li>Research basin/stream adjudication status</li>
      <li>Examine any calls or curtailments in recent years</li>
      <li>Verify transfer/change approvals if rights changed hands</li>
      <li>Consider obtaining water rights opinion from specialized attorney</li>
    </ul>
    
    <h3>Interstate Compacts and Federal Rights</h3>
    <ul>
      <li><strong>River Compacts:</strong> Colorado River, Rio Grande, etc. allocate water among states</li>
      <li><strong>Federal Reserved Rights:</strong> Reservations, national parks have implied rights</li>
      <li><strong>Tribal Rights:</strong> Often very senior (time immemorial dates)</li>
      <li><strong>Endangered Species Act:</strong> Can require water for fish habitat</li>
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
          "Colorado",
          "Wyoming",
          "Montana",
          "Idaho",
          "Utah",
          "Nevada",
          "Arizona",
          "New Mexico",
          "Oregon",
          "Washington",
          "California",
          "Other Western State"
        ],
        defaultValue: "Colorado",
      },
      {
        name: "priorityYear",
        label: "Priority Date (Year of First Use/Application)",
        type: "number",
        placeholder: "1920",
        defaultValue: "1920",
      },
      {
        name: "acreFeet",
        label: "Water Right Quantity (acre-feet per year)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "useType",
        label: "Beneficial Use Type",
        type: "select",
        options: [
          "Domestic",
          "Agricultural/Irrigation",
          "Municipal",
          "Industrial",
          "Stockwatering",
          "Recreation"
        ],
        defaultValue: "Agricultural/Irrigation",
      },
      {
        name: "recentCurtailment",
        label: "Water Curtailed in Recent Years?",
        type: "select",
        options: ["No", "Yes - Occasionally", "Yes - Frequently"],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "Seniority Level", isCurrency: false },
      { label: "Reliability Rating", isCurrency: false },
      { label: "Estimated Value", isCurrency: true },
      { label: "Annual Acres Irrigable", isCurrency: false },
      { label: "Key Recommendations", isCurrency: false },
    ],
    calculate: (data: any) => {
      const priorityYear = Number(data.priorityYear) || 1920;
      const acreFeet = Number(data.acreFeet) || 50;
      const useType = data.useType || "Agricultural/Irrigation";
      const curtailment = data.recentCurtailment || "No";
      const state = data.state || "Colorado";
      
      const currentYear = 2024;
      const age = currentYear - priorityYear;
      
      // Determine seniority
      let seniority = "";
      let reliabilityRating = "";
      let valuePerAcreFoot = 0;
      
      if (age >= 140) {
        seniority = "🌟 VERY SENIOR (Pre-1900) - Extremely valuable and reliable";
        reliabilityRating = "Excellent - Rarely if ever curtailed";
        valuePerAcreFoot = 25000; // High value for very senior rights
      } else if (age >= 100) {
        seniority = "⭐ SENIOR (1900-1940s) - Very reliable priority";
        reliabilityRating = "Very Good - Curtailed only in severe droughts";
        valuePerAcreFoot = 18000;
      } else if (age >= 70) {
        seniority = "✅ MID-SENIOR (1950s-1970s) - Generally reliable";
        reliabilityRating = "Good - Occasional curtailment in dry years";
        valuePerAcreFoot = 12000;
      } else if (age >= 40) {
        seniority = "⚠️ MID-JUNIOR (1980s-2000s) - Moderate reliability";
        reliabilityRating = "Fair - May be curtailed in normal dry years";
        valuePerAcreFoot = 7000;
      } else if (age >= 20) {
        seniority = "🔶 JUNIOR (2000s-2010s) - Lower reliability";
        reliabilityRating = "Poor - Frequently curtailed in dry periods";
        valuePerAcreFoot = 3000;
      } else {
        seniority = "🔴 VERY JUNIOR (Recent) - Unreliable, often curtailed";
        reliabilityRating = "Very Poor - Curtailed most years";
        valuePerAcreFoot = 1000;
      }
      
      // Adjust for curtailment history
      if (curtailment === "Yes - Frequently") {
        reliabilityRating += " (WARNING: Frequent recent curtailment indicates junior right or over-appropriated stream)";
        valuePerAcreFoot *= 0.6;
      } else if (curtailment === "Yes - Occasionally") {
        valuePerAcreFoot *= 0.8;
      }
      
      // Adjust value for use type
      if (useType === "Municipal") {
        valuePerAcreFoot *= 1.5; // Municipal rights more valuable
      } else if (useType === "Domestic") {
        valuePerAcreFoot *= 1.3;
      }
      
      // Adjust for state (some states have higher water values)
      if (state === "Colorado" || state === "California") {
        valuePerAcreFoot *= 1.2;
      }
      
      const totalValue = acreFeet * valuePerAcreFoot;
      
      // Calculate irrigable acres (assuming 3-4 acre-feet per acre)
      const irrigableAcres = Math.round(acreFeet / 3.5);
      
      // Recommendations
      let recommendations = "";
      if (age >= 100) {
        recommendations = "Excellent water right. Protect from forfeiture by maintaining use. Consider selling portions at premium if not needed. Very attractive to municipalities.";
      } else if (age >= 70) {
        recommendations = "Solid water right. Maintain historical use levels. Document all beneficial use. Consider augmentation if expanding use.";
      } else if (age >= 40) {
        recommendations = "Moderate right. Be prepared for curtailment in dry years. May want senior backup rights. Consider efficiency improvements.";
      } else {
        recommendations = "Junior right with high curtailment risk. Not reliable for sole water supply. Consider purchasing senior rights. Implement water storage if possible.";
      }

      return [
        { label: "Seniority Level", value: seniority, isCurrency: false },
        { label: "Reliability Rating", value: reliabilityRating, isCurrency: false },
        { label: "Estimated Value", value: totalValue, isCurrency: true },
        { label: "Annual Acres Irrigable", value: `~${irrigableAcres} acres (at 3.5 AF/acre)`, isCurrency: false },
        { label: "Key Recommendations", value: recommendations, isCurrency: false },
      ];
    },
  },
};
