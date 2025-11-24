import { CalculatorContent } from '@/types';

export const HOA_RENTAL_CAP_ANALYZER_CONTENT: CalculatorContent = {
  title: 'HOA Rental Cap Analyzer',
  description: 'Analyze HOA rental restrictions, caps, and investment impact for rental properties',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'hoa-rental-cap-analyzer',
  article: {
    title: "Understanding HOA Rental Caps and Restrictions",
    content: `
    <h2>What are HOA Rental Caps?</h2>
    <p>HOA rental caps are restrictions that limit the percentage or number of units that can be rented out in a community. These restrictions protect property values by maintaining a higher percentage of owner-occupied units, which can be crucial for FHA and conventional loan eligibility.</p>
    
    <h3>Common HOA Rental Restrictions</h3>
    <ul>
      <li><strong>Percentage Cap:</strong> Limits rentals to a specific percentage (e.g., 30% of total units)</li>
      <li><strong>Waiting List:</strong> Owners must wait for rental slots to become available</li>
      <li><strong>Minimum Lease Terms:</strong> Requires leases of 6-12 months minimum (no short-term rentals)</li>
      <li><strong>Approval Requirements:</strong> HOA board must approve all tenants</li>
      <li><strong>Total Ban:</strong> Some communities prohibit all rentals</li>
      <li><strong>Grandfather Clauses:</strong> Existing rentals may be exempt from new restrictions</li>
    </ul>
    
    <h3>Impact on Investment Properties</h3>
    <p>Rental caps can significantly affect your investment strategy and property value. Communities with high rental percentages may not qualify for FHA financing, reducing the pool of potential buyers and impacting resale value.</p>
    
    <h3>FHA and Conventional Loan Requirements</h3>
    <ul>
      <li><strong>FHA Approval:</strong> Requires at least 50% owner-occupied units</li>
      <li><strong>Conventional Loans:</strong> Typically require 50-60% owner-occupied</li>
      <li><strong>VA Loans:</strong> Similar requirements to FHA</li>
      <li><strong>Investor Impact:</strong> High rental caps can limit buyer financing options</li>
    </ul>
    
    <h3>Key Considerations for Investors</h3>
    <ul>
      <li><strong>Current Rental Ratio:</strong> Check existing rental percentage in the community</li>
      <li><strong>Waitlist Status:</strong> Understand how long to wait for rental approval</li>
      <li><strong>Changing Rules:</strong> HOAs can modify rental caps; review meeting minutes</li>
      <li><strong>Resale Impact:</strong> Rental-heavy communities may have lower appreciation</li>
      <li><strong>Insurance Costs:</strong> High rental percentages can increase HOA insurance premiums</li>
    </ul>
    
    <h3>Legal Protections</h3>
    <p>Some states protect investors with grandfather clauses, ensuring that existing rentals can continue even if new restrictions are enacted. However, these protections vary by state and HOA governing documents.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "totalUnits",
        label: "Total Units in Community",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "currentRentals",
        label: "Currently Rented Units",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "rentalCapPercent",
        label: "HOA Rental Cap (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "monthlyRent",
        label: "Expected Monthly Rent",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "purchasePrice",
        label: "Property Purchase Price",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "waitlistLength",
        label: "Rental Waitlist Length (Units)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Current Rental Ratio", isCurrency: false },
      { label: "Maximum Rentals Allowed", isCurrency: false },
      { label: "Available Rental Slots", isCurrency: false },
      { label: "FHA Loan Eligible", isCurrency: false },
      { label: "Conventional Loan Eligible", isCurrency: false },
      { label: "Estimated Wait Time (Months)", isCurrency: false },
      { label: "Annual Rental Income Potential", isCurrency: true },
      { label: "Rental Cap Impact on Value", isCurrency: false },
    ],
    calculate: (data: any) => {
      const totalUnits = Number(data.totalUnits) || 0;
      const currentRentals = Number(data.currentRentals) || 0;
      const rentalCapPercent = Number(data.rentalCapPercent) || 0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      const purchasePrice = Number(data.purchasePrice) || 0;
      const waitlistLength = Number(data.waitlistLength) || 0;

      const currentRatio = totalUnits > 0 ? (currentRentals / totalUnits) * 100 : 0;
      const maxRentalsAllowed = Math.floor(totalUnits * (rentalCapPercent / 100));
      const availableSlots = Math.max(0, maxRentalsAllowed - currentRentals);
      const ownerOccupiedPercent = 100 - currentRatio;
      
      const fhaEligible = ownerOccupiedPercent >= 50 ? "Yes ✓" : "No ✗";
      const conventionalEligible = ownerOccupiedPercent >= 50 ? "Yes ✓" : "No ✗";
      
      const avgTurnoverMonths = 24;
      const estimatedWaitMonths = availableSlots === 0 && waitlistLength > 0
        ? Math.ceil((waitlistLength / (maxRentalsAllowed / avgTurnoverMonths))) 
        : 0;
      
      const annualIncome = monthlyRent * 12;
      const rentalYield = purchasePrice > 0 ? (annualIncome / purchasePrice) * 100 : 0;
      
      let valueImpact = "Neutral";
      if (currentRatio > 50) {
        valueImpact = "High Risk - Limited Buyer Financing";
      } else if (currentRatio > 30) {
        valueImpact = "Moderate Risk - Some Restrictions";
      } else {
        valueImpact = "Low Risk - Good Financing Options";
      }

      return [
        { label: "Current Rental Ratio", value: `${currentRatio.toFixed(1)}%`, isCurrency: false },
        { label: "Maximum Rentals Allowed", value: `${maxRentalsAllowed} units`, isCurrency: false },
        { label: "Available Rental Slots", value: `${availableSlots} slots`, isCurrency: false },
        { label: "FHA Loan Eligible", value: fhaEligible, isCurrency: false },
        { label: "Conventional Loan Eligible", value: conventionalEligible, isCurrency: false },
        { label: "Estimated Wait Time (Months)", value: estimatedWaitMonths > 0 ? `${estimatedWaitMonths} months` : "No Wait", isCurrency: false },
        { label: "Annual Rental Income Potential", value: `${annualIncome.toFixed(2)}`, isCurrency: true },
        { label: "Rental Cap Impact on Value", value: valueImpact, isCurrency: false },
      ];
    },
  },
};
