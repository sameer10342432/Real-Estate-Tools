import { CalculatorContent } from '@/types';

export const BILLBOARD_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Billboard Lease Calculator - Calculate Billboard Rental Income',
  description: 'Calculate potential income from billboard and outdoor advertising leases on your property including monthly rent, digital vs static revenue, and long-term projections',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'billboard-lease-calculator',
  article: {
    title: "Billboard Lease Calculator: Understanding Outdoor Advertising Income",
    content: `
    <h2>What is a Billboard Lease?</h2>
    <p>A billboard lease allows an advertising company to place a billboard structure on your property for outdoor advertising. Billboard leases provide passive income with minimal land use (typically 12'x25' ground space), making them an excellent income source for high-visibility properties.</p>
    
    <h3>How Billboard Leases Work</h3>
    <p>Billboard leases typically include:</p>
    <ul>
      <li><strong>Monthly Rent:</strong> $300-$2,000+ per month depending on traffic count and location</li>
      <li><strong>Lease Duration:</strong> 10-20 year initial term with renewal options</li>
      <li><strong>Billboard Type:</strong> Static (traditional) or digital (LED)</li>
      <li><strong>Revenue Share Option:</strong> 20-50% of advertising revenue instead of fixed rent</li>
      <li><strong>Land Requirement:</strong> Typically 300-600 sq ft leased area</li>
    </ul>
    
    <h3>Ideal Properties for Billboards</h3>
    <ul>
      <li><strong>High Traffic:</strong> Major highways, interstates, busy roads (20,000+ cars/day ideal)</li>
      <li><strong>Visibility:</strong> Clear sight lines with minimal obstructions</li>
      <li><strong>Zoning:</strong> Commercial or highway zoning allowing billboards</li>
      <li><strong>Access:</strong> Road frontage for installation and maintenance</li>
      <li><strong>Location:</strong> Near cities, exits, major intersections, or tourist areas</li>
    </ul>
    
    <h3>Billboard Types and Income</h3>
    <p><strong>Static Billboard:</strong> Traditional printed advertising</p>
    <ul>
      <li>Lower rent: $300-$800/month in rural areas</li>
      <li>Medium rent: $800-$1,500/month in suburban areas</li>
      <li>Higher rent: $1,500-$3,000/month in high-traffic urban areas</li>
    </ul>
    
    <p><strong>Digital Billboard:</strong> LED rotating advertisements</p>
    <ul>
      <li>Higher income: $1,000-$5,000+/month or revenue share</li>
      <li>Multiple advertisers rotate every 6-10 seconds</li>
      <li>Premium locations: $5,000-$20,000/month possible</li>
    </ul>
    
    <h3>Factors Affecting Billboard Value</h3>
    <ul>
      <li><strong>Traffic Count:</strong> Average daily traffic (ADT) is the primary factor</li>
      <li><strong>Demographics:</strong> Income levels and consumer spending in area</li>
      <li><strong>Competition:</strong> Number of other billboards in vicinity</li>
      <li><strong>Read Time:</strong> Distance from traffic signals, curves, exits</li>
      <li><strong>Market Size:</strong> Population density and advertising demand</li>
    </ul>
    
    <h3>Payment Structures</h3>
    <p><strong>Fixed Rent:</strong> Guaranteed monthly payment regardless of advertising sales</p>
    <p><strong>Revenue Share:</strong> 20-50% of gross advertising revenue (higher potential, less predictable)</p>
    <p><strong>Hybrid Model:</strong> Minimum base rent plus percentage above threshold</p>
    
    <h3>Additional Considerations</h3>
    <ul>
      <li><strong>Permitting:</strong> Billboard company typically handles permits and approvals</li>
      <li><strong>Maintenance:</strong> Company responsible for structure and electrical maintenance</li>
      <li><strong>Property Impact:</strong> Minimal land use, may affect aesthetics</li>
      <li><strong>Insurance:</strong> Company provides liability coverage</li>
      <li><strong>Removal:</strong> Company removes structure at lease end</li>
    </ul>
    
    <h3>Negotiation Tips</h3>
    <ul>
      <li>Get multiple quotes from billboard companies (Lamar, Clear Channel, Outfront)</li>
      <li>Negotiate annual escalations (2-3% per year)</li>
      <li>Consider revenue share if in premium location</li>
      <li>Limit lease term to 10-15 years with renewal at higher rates</li>
      <li>Ensure decommissioning and land restoration obligations</li>
    </ul>
    
    <h3>Tax and Legal Considerations</h3>
    <ul>
      <li>Lease income is taxable income</li>
      <li>May qualify as passive income for tax purposes</li>
      <li>Check local billboard regulations and sign ordinances</li>
      <li>Have attorney review lease agreement</li>
      <li>Verify zoning allows commercial signage</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyRent",
        label: "Monthly Rent ($)",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "leaseDuration",
        label: "Lease Duration (Years)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "annualEscalation",
        label: "Annual Escalation Rate (%)",
        type: "number",
        placeholder: "2.5",
        defaultValue: "2.5",
      },
      {
        name: "signingBonus",
        label: "One-Time Signing Bonus ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "numberOfBillboards",
        label: "Number of Billboards",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
    ],
    results: [
      { label: "First Year Income", isCurrency: true },
      { label: "Total Income (Without Escalation)", isCurrency: true },
      { label: "Total Income (With Escalation)", isCurrency: true },
      { label: "Average Monthly Income", isCurrency: true },
      { label: "Final Year Monthly Rent", isCurrency: true },
    ],
    calculate: (data: any) => {
      const monthlyRent = Number(data.monthlyRent) || 0;
      const leaseDuration = Number(data.leaseDuration) || 0;
      const annualEscalation = Number(data.annualEscalation) || 0;
      const signingBonus = Number(data.signingBonus) || 0;
      const numberOfBillboards = Number(data.numberOfBillboards) || 0;
      
      const firstYearIncome = (monthlyRent * 12 * numberOfBillboards) + signingBonus;
      const baseAnnualIncome = monthlyRent * 12 * numberOfBillboards;
      const totalWithoutEscalation = signingBonus + (baseAnnualIncome * leaseDuration);
      
      // Calculate with escalation
      let totalWithEscalation = signingBonus;
      let currentMonthlyRent = monthlyRent;
      
      for (let year = 0; year < leaseDuration; year++) {
        totalWithEscalation += (currentMonthlyRent * 12 * numberOfBillboards);
        currentMonthlyRent *= (1 + annualEscalation / 100);
      }
      
      const averageMonthlyIncome = (totalWithEscalation - signingBonus) / (leaseDuration * 12);
      const finalYearMonthlyRent = monthlyRent * Math.pow(1 + annualEscalation / 100, leaseDuration - 1) * numberOfBillboards;

      return [
        { label: "First Year Income", value: `${firstYearIncome.toFixed(2)}`, isCurrency: true },
        { label: "Total Income (Without Escalation)", value: `${totalWithoutEscalation.toFixed(2)}`, isCurrency: true },
        { label: "Total Income (With Escalation)", value: `${totalWithEscalation.toFixed(2)}`, isCurrency: true },
        { label: "Average Monthly Income", value: `${averageMonthlyIncome.toFixed(2)}`, isCurrency: true },
        { label: "Final Year Monthly Rent", value: `${finalYearMonthlyRent.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
