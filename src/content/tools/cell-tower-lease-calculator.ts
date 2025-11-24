import { CalculatorContent } from '@/types';

export const CELL_TOWER_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cell Tower Lease Calculator - Calculate Cell Tower Rental Income',
  description: 'Calculate potential income from cell tower leases on your property including monthly rent, lease escalations, and long-term revenue projections',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'cell-tower-lease-calculator',
  article: {
    title: "Cell Tower Lease Calculator: Understanding Wireless Tower Income",
    content: `
    <h2>What is a Cell Tower Lease?</h2>
    <p>A cell tower lease is an agreement where a wireless carrier leases space on your property to build and operate a cell tower or antenna. These leases provide excellent passive income for 25-50 years with minimal impact on property use.</p>
    
    <h3>How Cell Tower Leases Work</h3>
    <p>Cell tower leases typically include:</p>
    <ul>
      <li><strong>Monthly Rent:</strong> $500-$2,500+ per month depending on location and coverage needs</li>
      <li><strong>Lease Duration:</strong> Initial 25-30 year term with multiple 5-10 year renewal options</li>
      <li><strong>Escalations:</strong> 10-15% rent increases every 5 years</li>
      <li><strong>Co-location Income:</strong> Additional $500-$1,500/month for each carrier that shares the tower</li>
      <li><strong>Land Requirement:</strong> Typically 100'x100' (10,000 sq ft) leased area</li>
    </ul>
    
    <h3>Ideal Properties for Cell Towers</h3>
    <ul>
      <li><strong>Location:</strong> High-traffic areas, coverage gaps, highway corridors</li>
      <li><strong>Elevation:</strong> Higher ground provides better signal coverage</li>
      <li><strong>Access:</strong> Road access for construction and maintenance vehicles</li>
      <li><strong>Utilities:</strong> Access to electricity (or willing to install)</li>
      <li><strong>Zoning:</strong> Property zoned for telecommunications use</li>
    </ul>
    
    <h3>Payment Structures</h3>
    <p><strong>Ground Lease:</strong> Tower built on your land, monthly rent paid to you</p>
    <p><strong>Rooftop Lease:</strong> Antennas installed on your building, typically $1,000-$3,000/month</p>
    <p><strong>Co-location Revenue:</strong> Additional carriers pay you to add equipment to existing tower</p>
    
    <h3>Revenue Potential Over Time</h3>
    <p>Example 30-year lease with escalations:</p>
    <ul>
      <li>Years 1-5: $1,500/month ($90,000 total)</li>
      <li>Years 6-10: $1,650/month (10% increase = $99,000 total)</li>
      <li>Years 11-15: $1,815/month (10% increase = $108,900 total)</li>
      <li>Years 16-20: $1,997/month (10% increase = $119,820 total)</li>
      <li>Years 21-25: $2,197/month (10% increase = $131,820 total)</li>
      <li>Years 26-30: $2,416/month (10% increase = $144,960 total)</li>
      <li><strong>Total 30-Year Income: $694,500</strong></li>
    </ul>
    
    <h3>Additional Income Opportunities</h3>
    <ul>
      <li><strong>Co-location Fees:</strong> $500-$1,500/month per additional carrier</li>
      <li><strong>Equipment Upgrades:</strong> One-time payments for 5G equipment installation</li>
      <li><strong>Fiber Lines:</strong> Additional rent for fiber optic cable easements</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Property Value:</strong> Tower may affect property aesthetics and resale value</li>
      <li><strong>Legal Review:</strong> Have attorney review lease terms, especially renewal clauses</li>
      <li><strong>Health Concerns:</strong> Research FCC safety guidelines (generally considered safe)</li>
      <li><strong>Decommissioning:</strong> Ensure tower removal obligations are clear</li>
      <li><strong>Tax Implications:</strong> Lease income is taxable income</li>
      <li><strong>Insurance:</strong> Verify liability coverage by carrier</li>
    </ul>
    
    <h3>Negotiation Tips</h3>
    <ul>
      <li>Don't accept first offer - rates are highly negotiable</li>
      <li>Negotiate escalation clauses (10-15% every 5 years)</li>
      <li>Include co-location revenue sharing (50% or more of co-location fees)</li>
      <li>Limit lease duration to 25-30 years maximum</li>
      <li>Ensure you retain property ownership and use rights</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyRent",
        label: "Monthly Base Rent ($)",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "leaseDuration",
        label: "Lease Duration (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "escalationRate",
        label: "Escalation Rate (%)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "escalationFrequency",
        label: "Escalation Frequency (Years)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "coLocationCarriers",
        label: "Additional Co-location Carriers",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "coLocationRentPerCarrier",
        label: "Co-location Rent Per Carrier ($/month)",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
    ],
    results: [
      { label: "First Year Base Income", isCurrency: true },
      { label: "First Year Co-location Income", isCurrency: true },
      { label: "First Year Total Income", isCurrency: true },
      { label: "Total Lease Income (With Escalations)", isCurrency: true },
      { label: "Average Monthly Income", isCurrency: true },
    ],
    calculate: (data: any) => {
      const monthlyRent = Number(data.monthlyRent) || 0;
      const leaseDuration = Number(data.leaseDuration) || 0;
      const escalationRate = Number(data.escalationRate) || 0;
      const escalationFrequency = Number(data.escalationFrequency) || 0;
      const coLocationCarriers = Number(data.coLocationCarriers) || 0;
      const coLocationRentPerCarrier = Number(data.coLocationRentPerCarrier) || 0;
      
      const firstYearBaseIncome = monthlyRent * 12;
      const firstYearCoLocationIncome = coLocationCarriers * coLocationRentPerCarrier * 12;
      const firstYearTotalIncome = firstYearBaseIncome + firstYearCoLocationIncome;
      
      // Calculate total with escalations
      let totalIncome = 0;
      let currentMonthlyRent = monthlyRent;
      let currentCoLocationRent = coLocationCarriers * coLocationRentPerCarrier;
      
      for (let year = 1; year <= leaseDuration; year++) {
        totalIncome += (currentMonthlyRent + currentCoLocationRent) * 12;
        
        // Apply escalation at specified frequency
        if (year % escalationFrequency === 0 && year < leaseDuration) {
          currentMonthlyRent *= (1 + escalationRate / 100);
          currentCoLocationRent *= (1 + escalationRate / 100);
        }
      }
      
      const averageMonthlyIncome = totalIncome / (leaseDuration * 12);

      return [
        { label: "First Year Base Income", value: `${firstYearBaseIncome.toFixed(2)}`, isCurrency: true },
        { label: "First Year Co-location Income", value: `${firstYearCoLocationIncome.toFixed(2)}`, isCurrency: true },
        { label: "First Year Total Income", value: `${firstYearTotalIncome.toFixed(2)}`, isCurrency: true },
        { label: "Total Lease Income (With Escalations)", value: `${totalIncome.toFixed(2)}`, isCurrency: true },
        { label: "Average Monthly Income", value: `${averageMonthlyIncome.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
