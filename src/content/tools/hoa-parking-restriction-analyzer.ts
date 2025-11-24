import { CalculatorContent } from '@/types';

export const HOA_PARKING_RESTRICTION_ANALYZER_CONTENT: CalculatorContent = {
  title: 'HOA Parking Restriction Analyzer',
  description: 'Analyze HOA parking rules, guest parking limits, and vehicle restrictions',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'hoa-parking-restriction-analyzer',
  article: {
    title: "Understanding HOA Parking Restrictions and Regulations",
    content: `
    <h2>What are HOA Parking Restrictions?</h2>
    <p>HOA parking restrictions govern where residents and guests can park within the community. These rules maintain aesthetic appeal, ensure fire lane access, and prevent overcrowding in shared parking areas.</p>
    
    <h3>Common HOA Parking Restrictions</h3>
    <ul>
      <li><strong>Assigned Parking:</strong> Specific numbered spots for each unit</li>
      <li><strong>Guest Parking Limits:</strong> Time limits (24-72 hours) for visitor parking</li>
      <li><strong>Street Parking Bans:</strong> No overnight or long-term street parking</li>
      <li><strong>Commercial Vehicle Restrictions:</strong> Bans on trucks, vans, trailers</li>
      <li><strong>RV/Boat Storage Bans:</strong> No recreational vehicles in community</li>
      <li><strong>Garage Usage:</strong> Garages must be used for vehicles, not storage</li>
      <li><strong>Vehicle Condition:</strong> Inoperable or damaged vehicles prohibited</li>
      <li><strong>Parking Permits:</strong> Required display of HOA parking permits</li>
    </ul>
    
    <h3>Financial Impact of Parking Violations</h3>
    <ul>
      <li><strong>Violation Fines:</strong> $25-$100 per violation</li>
      <li><strong>Towing Costs:</strong> $150-$300 for unauthorized parking</li>
      <li><strong>Guest Parking Fees:</strong> Some HOAs charge for guest permits</li>
      <li><strong>Additional Parking Spots:</strong> $50-$200/month to rent extra spaces</li>
    </ul>
    
    <h3>Types of Parking Violations</h3>
    <ul>
      <li><strong>Overnight Guest Parking:</strong> Most common violation</li>
      <li><strong>Fire Lane Parking:</strong> Immediate towing, heavy fines</li>
      <li><strong>Reserved Spot Violations:</strong> Parking in another resident's spot</li>
      <li><strong>Commercial Vehicle Parking:</strong> Work trucks/vans in residential areas</li>
      <li><strong>Abandoned Vehicles:</strong> Cars not moved for extended periods</li>
    </ul>
    
    <h3>Key Considerations</h3>
    <ul>
      <li><strong>Multiple Vehicles:</strong> Ensure adequate parking for all household vehicles</li>
      <li><strong>Guest Frequency:</strong> Consider visitor parking availability</li>
      <li><strong>Work Vehicles:</strong> Check restrictions on commercial vehicles</li>
      <li><strong>RV/Boat Owners:</strong> Find off-site storage if HOA prohibits</li>
      <li><strong>Electric Vehicles:</strong> Check availability of EV charging stations</li>
      <li><strong>Enforcement:</strong> Some HOAs use cameras or patrol services</li>
    </ul>
    
    <h3>Impact on Property Value</h3>
    <p>Adequate parking increases property value and desirability. Communities with limited parking may experience lower demand and resale values, especially in areas without good public transportation.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "householdVehicles",
        label: "Household Vehicles",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "assignedSpots",
        label: "Assigned Parking Spots",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "guestVisitsPerMonth",
        label: "Guest Visits Per Month",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "guestParkingLimit",
        label: "Guest Parking Time Limit (hours)",
        type: "number",
        placeholder: "48",
        defaultValue: "48",
      },
      {
        name: "violationFine",
        label: "Parking Violation Fine",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "extraSpotCost",
        label: "Extra Spot Monthly Cost",
        type: "number",
        placeholder: "75",
        defaultValue: "75",
      },
    ],
    results: [
      { label: "Parking Spot Adequacy", isCurrency: false },
      { label: "Recommended Extra Spots", isCurrency: false },
      { label: "Monthly Cost for Extra Parking", isCurrency: true },
      { label: "Annual Extra Parking Cost", isCurrency: true },
      { label: "Guest Parking Compliance Risk", isCurrency: false },
      { label: "Potential Annual Violation Costs", isCurrency: true },
      { label: "Overall Parking Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const householdVehicles = Number(data.householdVehicles) || 0;
      const assignedSpots = Number(data.assignedSpots) || 0;
      const guestVisitsPerMonth = Number(data.guestVisitsPerMonth) || 0;
      const guestParkingLimit = Number(data.guestParkingLimit) || 0;
      const violationFine = Number(data.violationFine) || 0;
      const extraSpotCost = Number(data.extraSpotCost) || 0;

      const spotDeficit = Math.max(0, householdVehicles - assignedSpots);
      const spotAdequacy = spotDeficit === 0 ? "✓ Adequate Parking" : `✗ Need ${spotDeficit} More Spot(s)`;
      
      const recommendedExtraSpots = spotDeficit;
      const monthlyExtraCost = recommendedExtraSpots * extraSpotCost;
      const annualExtraCost = monthlyExtraCost * 12;
      
      const avgGuestHoursPerVisit = 4;
      const guestComplianceRisk = guestVisitsPerMonth > 4 && avgGuestHoursPerVisit > guestParkingLimit 
        ? "High Risk - Frequent Long Visits" 
        : guestVisitsPerMonth > 8 
        ? "Moderate Risk - Many Visitors" 
        : "Low Risk";
      
      const estimatedViolationsPerYear = guestVisitsPerMonth > 8 ? 6 : guestVisitsPerMonth > 4 ? 3 : 0;
      const potentialAnnualFines = estimatedViolationsPerYear * violationFine;
      
      let overallAssessment = "Excellent Parking Situation";
      if (spotDeficit > 0 && guestComplianceRisk === "High Risk - Frequent Long Visits") {
        overallAssessment = "Poor - Insufficient Parking & High Violation Risk";
      } else if (spotDeficit > 0) {
        overallAssessment = "Fair - Need Additional Parking Spots";
      } else if (guestComplianceRisk !== "Low Risk") {
        overallAssessment = "Good - Monitor Guest Parking Compliance";
      }

      return [
        { label: "Parking Spot Adequacy", value: spotAdequacy, isCurrency: false },
        { label: "Recommended Extra Spots", value: `${recommendedExtraSpots} spot(s)`, isCurrency: false },
        { label: "Monthly Cost for Extra Parking", value: `${monthlyExtraCost.toFixed(2)}`, isCurrency: true },
        { label: "Annual Extra Parking Cost", value: `${annualExtraCost.toFixed(2)}`, isCurrency: true },
        { label: "Guest Parking Compliance Risk", value: guestComplianceRisk, isCurrency: false },
        { label: "Potential Annual Violation Costs", value: `${potentialAnnualFines.toFixed(2)}`, isCurrency: true },
        { label: "Overall Parking Assessment", value: overallAssessment, isCurrency: false },
      ];
    },
  },
};
