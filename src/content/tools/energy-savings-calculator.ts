import { CalculatorContent } from '@/types';

export const ENERGY_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Energy Savings Calculator',
  description: 'Calculate potential energy savings from home improvements and payback period',
  icon: 'Icon',
  category: 'Home Improvement',
  slug: 'energy-savings-calculator',
  article: {
    title: "Understanding Home Energy Savings",
    content: `
    <h2>Energy-Efficient Home Improvements</h2>
    <p>Making energy-efficient improvements to your home can significantly reduce utility bills while increasing property value and comfort.</p>
    
    <h3>High-Impact Improvements</h3>
    <ul>
      <li><strong>Solar Panels:</strong> Can reduce electricity bills by 50-100%</li>
      <li><strong>Insulation:</strong> Reduces heating/cooling costs by 10-50%</li>
      <li><strong>Energy-Efficient HVAC:</strong> Saves 20-40% on heating/cooling</li>
      <li><strong>LED Lighting:</strong> Uses 75% less energy than incandescent</li>
      <li><strong>Energy-Efficient Windows:</strong> Reduces energy loss by 25-50%</li>
    </ul>
    
    <h3>Financial Benefits</h3>
    <ul>
      <li>Lower monthly utility bills</li>
      <li>Federal tax credits (up to 30% for solar)</li>
      <li>State and utility rebates</li>
      <li>Increased home value</li>
      <li>Lower carbon footprint</li>
    </ul>
    
    <h3>Calculating Payback Period</h3>
    <p><strong>Payback Period = Improvement Cost / Annual Savings</strong></p>
    <p>Most energy improvements pay for themselves in 5-15 years, while providing benefits for 20+ years.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentMonthlyBill",
        label: "Current Monthly Energy Bill",
        type: "number",
        placeholder: "250",
        defaultValue: "250",
      },
      {
        name: "improvementCost",
        label: "Total Improvement Cost",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
      {
        name: "expectedSavingsPercent",
        label: "Expected Savings (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "federalTaxCredit",
        label: "Federal Tax Credit (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "utilityRebate",
        label: "Utility Rebate Amount",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
    ],
    results: [
      { label: "Monthly Energy Savings", isCurrency: true },
      { label: "Annual Energy Savings", isCurrency: true },
      { label: "Total Incentives & Rebates", isCurrency: true },
      { label: "Net Cost After Incentives", isCurrency: true },
      { label: "Payback Period (Years)", isCurrency: false },
      { label: "30-Year Total Savings", isCurrency: true },
    ],
    calculate: (data: any) => {
      const monthlyBill = Number(data.currentMonthlyBill) || 0;
      const improvementCost = Number(data.improvementCost) || 0;
      const savingsPercent = (Number(data.expectedSavingsPercent) || 0) / 100;
      const taxCreditPercent = (Number(data.federalTaxCredit) || 0) / 100;
      const rebate = Number(data.utilityRebate) || 0;

      const monthlySavings = monthlyBill * savingsPercent;
      const annualSavings = monthlySavings * 12;
      const federalCredit = improvementCost * taxCreditPercent;
      const totalIncentives = federalCredit + rebate;
      const netCost = improvementCost - totalIncentives;
      const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;
      const thirtYearSavings = (annualSavings * 30) - netCost;

      return [
        { label: "Monthly Energy Savings", value: `${monthlySavings.toFixed(2)}`, isCurrency: true },
        { label: "Annual Energy Savings", value: `${annualSavings.toFixed(2)}`, isCurrency: true },
        { label: "Total Incentives & Rebates", value: `${totalIncentives.toFixed(2)}`, isCurrency: true },
        { label: "Net Cost After Incentives", value: `${netCost.toFixed(2)}`, isCurrency: true },
        { label: "Payback Period (Years)", value: `${paybackYears.toFixed(1)}`, isCurrency: false },
        { label: "30-Year Total Savings", value: `${thirtYearSavings.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};