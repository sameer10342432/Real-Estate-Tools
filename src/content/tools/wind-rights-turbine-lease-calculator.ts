import { CalculatorContent } from '@/types';

export const WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wind Rights (Turbine) Lease Calculator - Estimate Wind Turbine Lease Income',
  description: 'Calculate potential income from wind turbine leases on your property including royalty payments, upfront fees, and long-term lease revenue projections',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'wind-rights-turbine-lease-calculator',
  article: {
    title: "Wind Rights Turbine Lease Calculator: Understanding Wind Energy Income",
    content: `
    <h2>What are Wind Rights and Wind Turbine Leases?</h2>
    <p>Wind rights refer to the legal right to harness wind energy on a property. Landowners can lease their wind rights to energy companies who install wind turbines to generate electricity. These leases provide steady, long-term income while allowing continued use of the land.</p>
    
    <h3>How Wind Turbine Leases Work</h3>
    <p>Wind turbine leases typically involve:</p>
    <ul>
      <li><strong>Upfront Signing Bonus:</strong> One-time payment when you sign the lease ($3,000-$10,000+ per turbine)</li>
      <li><strong>Annual Royalty Payments:</strong> Ongoing payments based on energy production or fixed rates ($3,000-$8,000+ per turbine/year)</li>
      <li><strong>Lease Duration:</strong> Typically 20-40 years with renewal options</li>
      <li><strong>Land Easement:</strong> Typically 1-2 acres per turbine plus access roads</li>
    </ul>
    
    <h3>Key Factors Affecting Lease Value</h3>
    <ul>
      <li><strong>Wind Speed:</strong> Average wind speed of 13+ mph at turbine height is ideal</li>
      <li><strong>Land Size:</strong> Minimum 40 acres typically required for commercial viability</li>
      <li><strong>Location:</strong> Proximity to transmission lines and grid infrastructure</li>
      <li><strong>Turbine Capacity:</strong> Modern turbines generate 2-3 MW each</li>
      <li><strong>Market Rates:</strong> Regional electricity prices and renewable energy incentives</li>
    </ul>
    
    <h3>Payment Structures</h3>
    <p><strong>Fixed Rate Lease:</strong> Guaranteed annual payment per turbine regardless of production</p>
    <p><strong>Revenue Share Lease:</strong> Percentage (2-5%) of gross energy revenue generated</p>
    <p><strong>Hybrid Model:</strong> Combination of fixed base payment plus production bonuses</p>
    
    <h3>Additional Benefits</h3>
    <ul>
      <li>Continued agricultural use between turbines</li>
      <li>Property tax benefits and rural development incentives</li>
      <li>Minimal land disturbance (95%+ of land remains usable)</li>
      <li>Environmental benefits and carbon offset credits</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Wind Assessment:</strong> Professional wind studies required before lease</li>
      <li><strong>Legal Review:</strong> Have attorney review lease terms and restrictions</li>
      <li><strong>Property Impact:</strong> Consider visual impact and noise levels</li>
      <li><strong>Decommissioning:</strong> Ensure removal obligations are clearly defined</li>
      <li><strong>Tax Implications:</strong> Lease income is taxable, consult tax advisor</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "numberOfTurbines",
        label: "Number of Turbines",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "annualPaymentPerTurbine",
        label: "Annual Payment Per Turbine ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "signingBonusPerTurbine",
        label: "Signing Bonus Per Turbine ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "leaseDuration",
        label: "Lease Duration (Years)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "annualEscalation",
        label: "Annual Escalation Rate (%)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
    ],
    results: [
      { label: "Total Signing Bonus", isCurrency: true },
      { label: "First Year Annual Income", isCurrency: true },
      { label: "Total Lease Income (Without Escalation)", isCurrency: true },
      { label: "Estimated Total Income (With Escalation)", isCurrency: true },
      { label: "Average Annual Income", isCurrency: true },
    ],
    calculate: (data: any) => {
      const numberOfTurbines = Number(data.numberOfTurbines) || 0;
      const annualPaymentPerTurbine = Number(data.annualPaymentPerTurbine) || 0;
      const signingBonusPerTurbine = Number(data.signingBonusPerTurbine) || 0;
      const leaseDuration = Number(data.leaseDuration) || 0;
      const annualEscalation = Number(data.annualEscalation) || 0;
      
      const totalSigningBonus = numberOfTurbines * signingBonusPerTurbine;
      const firstYearIncome = numberOfTurbines * annualPaymentPerTurbine;
      const totalWithoutEscalation = firstYearIncome * leaseDuration;
      
      // Calculate with escalation
      let totalWithEscalation = totalSigningBonus;
      let currentPayment = firstYearIncome;
      for (let year = 0; year < leaseDuration; year++) {
        totalWithEscalation += currentPayment;
        currentPayment *= (1 + annualEscalation / 100);
      }
      
      const averageAnnualIncome = totalWithEscalation / leaseDuration;

      return [
        { label: "Total Signing Bonus", value: `${totalSigningBonus.toFixed(2)}`, isCurrency: true },
        { label: "First Year Annual Income", value: `${firstYearIncome.toFixed(2)}`, isCurrency: true },
        { label: "Total Lease Income (Without Escalation)", value: `${(totalSigningBonus + totalWithoutEscalation).toFixed(2)}`, isCurrency: true },
        { label: "Estimated Total Income (With Escalation)", value: `${totalWithEscalation.toFixed(2)}`, isCurrency: true },
        { label: "Average Annual Income", value: `${averageAnnualIncome.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
