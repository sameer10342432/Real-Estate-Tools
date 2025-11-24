import { CalculatorContent } from '@/types';

export const BASIS_PROPERTY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Property Basis Calculator | Calculate Your Tax Basis',
  description: 'Calculate your property tax basis for accurate capital gains reporting. Essential tool for real estate investors to determine initial cost basis including purchase price, closing costs, and fees.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'basis-property-calculator',
  article: {
    title: "Understanding Property Basis for Tax Purposes",
    content: `
    <h2>What is Property Basis?</h2>
    <p>Property basis is the total cost of acquiring a property for tax purposes. It's the foundation for calculating depreciation deductions and capital gains when you sell. Understanding your basis is crucial for accurate tax reporting and maximizing deductions.</p>
    
    <h3>Components of Property Basis</h3>
    <p>Your property basis includes:</p>
    <ul>
      <li><strong>Purchase Price:</strong> The amount paid to acquire the property</li>
      <li><strong>Closing Costs:</strong> Title insurance, recording fees, legal fees, and survey costs</li>
      <li><strong>Transfer Taxes:</strong> State and local transfer taxes paid during purchase</li>
      <li><strong>Settlement Fees:</strong> Abstract fees, utility connection charges</li>
      <li><strong>Owner's Title Insurance:</strong> Insurance protecting your ownership rights</li>
    </ul>
    
    <h3>What NOT to Include in Basis</h3>
    <p>Some costs are NOT added to your basis:</p>
    <ul>
      <li>Fire insurance premiums</li>
      <li>Homeowner association fees</li>
      <li>Property taxes (these are annually deductible)</li>
      <li>Mortgage interest (this is separately deductible)</li>
      <li>Points paid to reduce mortgage interest rate</li>
    </ul>
    
    <h3>Why Property Basis Matters</h3>
    <p><strong>Capital Gains Calculation:</strong> When you sell, your gain is Sale Price minus Basis. A higher basis means lower taxable gains.</p>
    <p><strong>Depreciation:</strong> For rental properties, you depreciate the building portion (not land) based on your basis.</p>
    <p><strong>Tax Planning:</strong> Accurate basis tracking helps optimize your tax position and avoid overpaying taxes.</p>
    
    <h3>Special Situations</h3>
    <p><strong>Inherited Property:</strong> Basis is stepped up to fair market value at date of death.</p>
    <p><strong>Gifted Property:</strong> Generally carry over the donor's basis.</p>
    <p><strong>1031 Exchange:</strong> Basis carries over from previous property plus any additional cash invested.</p>
    
    <h3>Record Keeping</h3>
    <p>Keep all documentation including:</p>
    <ul>
      <li>Settlement statement (HUD-1 or Closing Disclosure)</li>
      <li>Receipts for closing costs</li>
      <li>Records of improvements (these adjust basis)</li>
      <li>Depreciation schedules for rental properties</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "closingCosts",
        label: "Closing Costs (Title, Legal, Recording)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "transferTaxes",
        label: "Transfer Taxes",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "titleInsurance",
        label: "Owner's Title Insurance",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "surveyFees",
        label: "Survey and Inspection Fees",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
    ],
    results: [
      { label: "Total Property Basis", isCurrency: true },
      { label: "Basis per Square Foot (if 2,000 sq ft)", isCurrency: true },
      { label: "Land Value (if 20% of purchase)", isCurrency: true },
      { label: "Depreciable Building Basis", isCurrency: true },
      { label: "Annual Depreciation (27.5 years)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const closingCosts = Number(data.closingCosts) || 0;
      const transferTaxes = Number(data.transferTaxes) || 0;
      const titleInsurance = Number(data.titleInsurance) || 0;
      const surveyFees = Number(data.surveyFees) || 0;
      
      const totalBasis = purchasePrice + closingCosts + transferTaxes + titleInsurance + surveyFees;
      const basisPerSqFt = totalBasis / 2000;
      const landValue = purchasePrice * 0.20;
      const buildingBasis = totalBasis - landValue;
      const annualDepreciation = buildingBasis / 27.5;

      return [
        { label: "Total Property Basis", value: `${totalBasis.toFixed(2)}`, isCurrency: true },
        { label: "Basis per Square Foot (if 2,000 sq ft)", value: `${basisPerSqFt.toFixed(2)}`, isCurrency: true },
        { label: "Land Value (if 20% of purchase)", value: `${landValue.toFixed(2)}`, isCurrency: true },
        { label: "Depreciable Building Basis", value: `${buildingBasis.toFixed(2)}`, isCurrency: true },
        { label: "Annual Depreciation (27.5 years)", value: `${annualDepreciation.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
