import { CalculatorContent } from '@/types';

export const DEPRECIATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Depreciation Calculator',
  description: 'Calculate annual depreciation for rental properties and estimate tax savings',
  icon: 'Icon',
  category: 'Tax & Legal',
  slug: 'depreciation-calculator',
  article: {
    title: "Understanding Real Estate Depreciation",
    content: `
    <h2>What is Real Estate Depreciation?</h2>
    <p>Depreciation is a tax deduction that allows rental property owners to recover the cost of income-producing property over time. The IRS considers real estate as having a "useful life" and allows you to deduct a portion of the property's cost each year.</p>
    
    <h3>Depreciation Rules</h3>
    <ul>
      <li><strong>Residential Property:</strong> Depreciated over 27.5 years</li>
      <li><strong>Commercial Property:</strong> Depreciated over 39 years</li>
      <li><strong>Land:</strong> Cannot be depreciated (only the building)</li>
    </ul>
    
    <h3>How Depreciation Works</h3>
    <p><strong>Depreciable Basis = Purchase Price - Land Value + Improvements</strong></p>
    <p>This basis is divided by the depreciation period to get your annual deduction.</p>
    
    <h3>Tax Benefits</h3>
    <p>Depreciation is a "paper loss" that reduces taxable income without actual cash outflow, providing significant tax savings for rental property owners.</p>
    
    <h3>Depreciation Recapture</h3>
    <p>When you sell the property, the IRS "recaptures" depreciation taken, taxing it at up to 25%. This is an important consideration for long-term tax planning.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "landValue",
        label: "Land Value",
        type: "number",
        placeholder: "60000",
        defaultValue: "60000",
      },
      {
        name: "propertyType",
        label: "Property Type (27.5 for residential, 39 for commercial)",
        type: "number",
        placeholder: "27.5",
        defaultValue: "27.5",
      },
      {
        name: "marginalTaxRate",
        label: "Marginal Tax Rate (%)",
        type: "number",
        placeholder: "24",
        defaultValue: "24",
      },
    ],
    results: [
      { label: "Depreciable Basis", isCurrency: true },
      { label: "Annual Depreciation", isCurrency: true },
      { label: "Annual Tax Savings", isCurrency: true },
      { label: "Total Depreciation Over Period", isCurrency: true },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const landValue = Number(data.landValue) || 0;
      const propertyType = Number(data.propertyType) || 27.5;
      const taxRate = (Number(data.marginalTaxRate) || 0) / 100;

      const depreciableBasis = purchasePrice - landValue;
      const annualDepreciation = depreciableBasis / propertyType;
      const annualTaxSavings = annualDepreciation * taxRate;
      const totalDepreciation = depreciableBasis;

      return [
        { label: "Depreciable Basis", value: `${depreciableBasis.toFixed(2)}`, isCurrency: true },
        { label: "Annual Depreciation", value: `${annualDepreciation.toFixed(2)}`, isCurrency: true },
        { label: "Annual Tax Savings", value: `${annualTaxSavings.toFixed(2)}`, isCurrency: true },
        { label: "Total Depreciation Over Period", value: `${totalDepreciation.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};