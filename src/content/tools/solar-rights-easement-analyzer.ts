import { CalculatorContent } from '@/types';

export const SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Solar Rights (Easement) Analyzer - Calculate Solar Panel Lease Income',
  description: 'Analyze potential income from solar panel leases and solar easements on your property including lease payments, energy production value, and long-term revenue',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'solar-rights-easement-analyzer',
  article: {
    title: "Solar Rights Easement Analyzer: Maximizing Solar Energy Income",
    content: `
    <h2>What are Solar Rights and Solar Easements?</h2>
    <p>Solar rights are the legal rights to access sunlight for solar energy production. A solar easement protects your property's exposure to sunlight, and you can lease land to solar companies for solar panel installation, generating passive income for 20-30+ years.</p>
    
    <h3>How Solar Leases Work</h3>
    <p>Solar panel leases typically involve:</p>
    <ul>
      <li><strong>Lease Payment:</strong> $500-$3,000 per acre per year depending on location and solar irradiance</li>
      <li><strong>Long-Term Agreement:</strong> Typical 20-30 year lease with options to extend</li>
      <li><strong>Land Requirements:</strong> Minimum 5-10 acres for utility-scale solar farms</li>
      <li><strong>Property Usage:</strong> Land is primarily used for solar panels during lease term</li>
    </ul>
    
    <h3>Ideal Properties for Solar Leases</h3>
    <ul>
      <li><strong>Sun Exposure:</strong> Unobstructed south-facing land with minimal shading</li>
      <li><strong>Flat or Gently Sloped:</strong> Minimal grading needed for panel installation</li>
      <li><strong>Grid Access:</strong> Proximity to electrical transmission lines (within 1-2 miles)</li>
      <li><strong>Land Size:</strong> 10+ acres ideal for commercial solar farms</li>
      <li><strong>Low Agricultural Value:</strong> Land not suitable for high-value crops</li>
    </ul>
    
    <h3>Payment Structures</h3>
    <p><strong>Per-Acre Lease:</strong> Fixed annual payment per acre ($500-$2,000/acre/year typical)</p>
    <p><strong>Revenue Share:</strong> Percentage of energy revenue generated (less common for small landowners)</p>
    <p><strong>Escalating Lease:</strong> Annual payment increases by 1.5-2.5% per year</p>
    
    <h3>Additional Benefits</h3>
    <ul>
      <li>Stable, predictable income for 20-30 years</li>
      <li>Property tax benefits in some jurisdictions</li>
      <li>Environmental benefits and renewable energy credits</li>
      <li>Land restoration after lease term ends</li>
    </ul>
    
    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Site Assessment:</strong> Professional solar irradiance study required</li>
      <li><strong>Legal Review:</strong> Attorney review of lease terms and restoration clauses</li>
      <li><strong>Property Value:</strong> May affect property marketability during lease</li>
      <li><strong>Decommissioning:</strong> Ensure panel removal and land restoration obligations</li>
      <li><strong>Insurance:</strong> Verify liability coverage and property damage protection</li>
      <li><strong>Tax Implications:</strong> Lease income is taxable, may affect property taxes</li>
    </ul>
    
    <h3>Regional Variations</h3>
    <p>Lease rates vary significantly by region:</p>
    <ul>
      <li><strong>Southwest (CA, AZ, NV):</strong> $1,500-$3,000/acre/year (high sun exposure)</li>
      <li><strong>Southeast (NC, GA, FL):</strong> $800-$1,500/acre/year</li>
      <li><strong>Northeast (NY, MA, NJ):</strong> $1,000-$2,000/acre/year (high energy prices)</li>
      <li><strong>Midwest (OH, IN, IL):</strong> $600-$1,200/acre/year</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "landAcres",
        label: "Land Size (Acres)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "annualPaymentPerAcre",
        label: "Annual Payment Per Acre ($)",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "signingBonus",
        label: "One-Time Signing Bonus ($)",
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
      { label: "First Year Annual Income", isCurrency: true },
      { label: "Total Income (Without Escalation)", isCurrency: true },
      { label: "Total Income (With Escalation)", isCurrency: true },
      { label: "Average Annual Income", isCurrency: true },
      { label: "Income Per Acre (Total)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const landAcres = Number(data.landAcres) || 0;
      const annualPaymentPerAcre = Number(data.annualPaymentPerAcre) || 0;
      const signingBonus = Number(data.signingBonus) || 0;
      const leaseDuration = Number(data.leaseDuration) || 0;
      const annualEscalation = Number(data.annualEscalation) || 0;
      
      const firstYearIncome = landAcres * annualPaymentPerAcre;
      const totalWithoutEscalation = signingBonus + (firstYearIncome * leaseDuration);
      
      // Calculate with escalation
      let totalWithEscalation = signingBonus;
      let currentPayment = firstYearIncome;
      for (let year = 0; year < leaseDuration; year++) {
        totalWithEscalation += currentPayment;
        currentPayment *= (1 + annualEscalation / 100);
      }
      
      const averageAnnualIncome = (totalWithEscalation - signingBonus) / leaseDuration;
      const incomePerAcre = landAcres > 0 ? totalWithEscalation / landAcres : 0;

      return [
        { label: "First Year Annual Income", value: `${firstYearIncome.toFixed(2)}`, isCurrency: true },
        { label: "Total Income (Without Escalation)", value: `${totalWithoutEscalation.toFixed(2)}`, isCurrency: true },
        { label: "Total Income (With Escalation)", value: `${totalWithEscalation.toFixed(2)}`, isCurrency: true },
        { label: "Average Annual Income", value: `${averageAnnualIncome.toFixed(2)}`, isCurrency: true },
        { label: "Income Per Acre (Total)", value: `${incomePerAcre.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
