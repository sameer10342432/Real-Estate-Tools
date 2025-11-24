import { CalculatorContent } from '@/types';

export const ADJUSTED_BASIS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Adjusted Basis Calculator with Improvements | Real Estate Tax Planning',
  description: 'Calculate your adjusted property basis including improvements, renovations, and depreciation. Track capital improvements and determine your tax basis for accurate capital gains calculations.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'adjusted-basis-calculator',
  article: {
    title: "Understanding Adjusted Basis with Property Improvements",
    content: `
    <h2>What is Adjusted Basis?</h2>
    <p>Adjusted basis is your original property basis modified by certain events during ownership. It's calculated by starting with your original basis, adding capital improvements, and subtracting depreciation taken.</p>
    
    <h3>How to Calculate Adjusted Basis</h3>
    <p><strong>Adjusted Basis = Original Basis + Capital Improvements - Depreciation Taken</strong></p>
    
    <h3>Capital Improvements That Increase Basis</h3>
    <p>Capital improvements add value, prolong property life, or adapt it to new uses:</p>
    <ul>
      <li><strong>Major Renovations:</strong> Kitchen remodel, bathroom addition, room additions</li>
      <li><strong>Systems:</strong> New roof, HVAC system, electrical or plumbing upgrades</li>
      <li><strong>Structural:</strong> Foundation repairs, new windows, siding replacement</li>
      <li><strong>Outdoor:</strong> Deck, patio, driveway, landscaping (permanent features)</li>
      <li><strong>Energy:</strong> Solar panels, energy-efficient windows, insulation</li>
      <li><strong>Accessibility:</strong> Wheelchair ramps, modified bathrooms for accessibility</li>
    </ul>
    
    <h3>Repairs vs. Improvements</h3>
    <p><strong>Repairs (NOT added to basis):</strong> Maintain property in good condition</p>
    <ul>
      <li>Fixing a leaky faucet</li>
      <li>Painting interior walls</li>
      <li>Replacing broken windows</li>
      <li>Patching roof leaks</li>
    </ul>
    
    <p><strong>Improvements (ADDED to basis):</strong> Add value or prolong life</p>
    <ul>
      <li>Complete roof replacement</li>
      <li>Room addition</li>
      <li>New HVAC system</li>
      <li>Kitchen remodel</li>
    </ul>
    
    <h3>Depreciation Decreases Basis</h3>
    <p>For rental properties, annual depreciation deductions reduce your basis:</p>
    <ul>
      <li>Residential rental: 27.5 years straight-line depreciation</li>
      <li>Commercial property: 39 years straight-line depreciation</li>
      <li>Improvements depreciated separately over their useful life</li>
    </ul>
    
    <h3>Impact on Capital Gains</h3>
    <p>When you sell:</p>
    <p><strong>Capital Gain = Sale Price - Adjusted Basis - Selling Costs</strong></p>
    <p>A higher adjusted basis (from improvements) means lower taxable gains. However, depreciation taken must be recaptured at 25% rate.</p>
    
    <h3>Record Keeping is Critical</h3>
    <p>Maintain detailed records of all improvements:</p>
    <ul>
      <li>Receipts and invoices for all work</li>
      <li>Before and after photos</li>
      <li>Permits and inspection reports</li>
      <li>Contractor agreements</li>
      <li>Date of improvement completion</li>
    </ul>
    
    <h3>Special Considerations</h3>
    <p><strong>Casualty Losses:</strong> Insurance reimbursements may reduce basis.</p>
    <p><strong>Assessment for Improvements:</strong> Local assessments for improvements (like sidewalks) increase basis.</p>
    <p><strong>Postponed Gain on Sale of Home:</strong> If you postponed gain from previous home sale, reduce basis accordingly.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "originalBasis",
        label: "Original Property Basis",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "capitalImprovements",
        label: "Capital Improvements (Total)",
        type: "number",
        placeholder: "75000",
        defaultValue: "75000",
      },
      {
        name: "majorRenovations",
        label: "Major Renovations (Kitchen, Bath, Addition)",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "systemUpgrades",
        label: "System Upgrades (Roof, HVAC, Plumbing)",
        type: "number",
        placeholder: "35000",
        defaultValue: "35000",
      },
      {
        name: "totalDepreciation",
        label: "Total Depreciation Taken",
        type: "number",
        placeholder: "60000",
        defaultValue: "60000",
      },
      {
        name: "yearsOwned",
        label: "Years Owned",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
    ],
    results: [
      { label: "Original Basis", isCurrency: true },
      { label: "Total Improvements Added", isCurrency: true },
      { label: "Depreciation Subtracted", isCurrency: true },
      { label: "Adjusted Basis", isCurrency: true },
      { label: "Basis Increase from Improvements", isCurrency: false },
      { label: "Potential Tax Savings (at 20% rate)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const originalBasis = Number(data.originalBasis) || 0;
      const capitalImprovements = Number(data.capitalImprovements) || 0;
      const majorRenovations = Number(data.majorRenovations) || 0;
      const systemUpgrades = Number(data.systemUpgrades) || 0;
      const totalDepreciation = Number(data.totalDepreciation) || 0;
      const yearsOwned = Number(data.yearsOwned) || 0;
      
      const totalImprovements = capitalImprovements + majorRenovations + systemUpgrades;
      const adjustedBasis = originalBasis + totalImprovements - totalDepreciation;
      const basisIncrease = ((totalImprovements / originalBasis) * 100).toFixed(2);
      const taxSavings = totalImprovements * 0.20;

      return [
        { label: "Original Basis", value: `${originalBasis.toFixed(2)}`, isCurrency: true },
        { label: "Total Improvements Added", value: `${totalImprovements.toFixed(2)}`, isCurrency: true },
        { label: "Depreciation Subtracted", value: `${totalDepreciation.toFixed(2)}`, isCurrency: true },
        { label: "Adjusted Basis", value: `${adjustedBasis.toFixed(2)}`, isCurrency: true },
        { label: "Basis Increase from Improvements", value: `${basisIncrease}%`, isCurrency: false },
        { label: "Potential Tax Savings (at 20% rate)", value: `${taxSavings.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
