import { CalculatorContent } from '@/types';

export const SENSITIVITY_ANALYSIS_VACANCY_CONTENT: CalculatorContent = {
  title: 'Sensitivity Analysis (Vacancy Rate)',
  description: 'Analyze how different vacancy rates impact net operating income and cash flow',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'sensitivity-analysis-vacancy',
  article: {
    title: "Understanding Vacancy Rate Sensitivity Analysis",
    content: `
    <h2>Understanding Vacancy Rate Sensitivity Analysis</h2>
    <p>Vacancy rate is one of the most significant variables affecting rental property performance. Even small changes in vacancy can dramatically impact your net operating income (NOI) and cash flow. This sensitivity analysis helps you model different vacancy scenarios.</p>
    
    <h3>What is Vacancy Rate?</h3>
    <p>Vacancy rate represents the percentage of time a property sits empty without generating rental income:</p>
    <p><strong>Vacancy Rate = (Vacant Days ÷ Total Days) × 100</strong></p>
    <p>For example, if a property is vacant for 18 days per year, the vacancy rate is (18 ÷ 365) × 100 = 4.9%</p>
    
    <h3>Why Vacancy Rate Matters</h3>
    <ul>
      <li><strong>Direct Income Loss:</strong> Every vacant day means zero rental income</li>
      <li><strong>Fixed Costs Continue:</strong> Mortgage, taxes, insurance, and utilities still must be paid</li>
      <li><strong>Turnover Costs:</strong> Vacancies often involve cleaning, repairs, and marketing expenses</li>
      <li><strong>Debt Service Coverage:</strong> High vacancy can breach loan covenant requirements</li>
    </ul>
    
    <h3>Typical Vacancy Rates by Property Type</h3>
    <ul>
      <li><strong>Single-Family Rentals:</strong> 3-5% (well-managed), 8-10% (average)</li>
      <li><strong>Multifamily (Class A):</strong> 3-5%</li>
      <li><strong>Multifamily (Class B/C):</strong> 5-10%</li>
      <li><strong>Student Housing:</strong> 10-15%</li>
      <li><strong>Office:</strong> 8-15%</li>
      <li><strong>Retail:</strong> 8-12%</li>
    </ul>
    
    <h3>Factors Affecting Vacancy Rates</h3>
    <ul>
      <li><strong>Market Conditions:</strong> Oversupply increases vacancy, high demand reduces it</li>
      <li><strong>Property Quality:</strong> Well-maintained properties have lower turnover</li>
      <li><strong>Location:</strong> Desirable neighborhoods see lower vacancy</li>
      <li><strong>Pricing Strategy:</strong> Competitive rents reduce vacancy but may sacrifice income</li>
      <li><strong>Tenant Screening:</strong> Quality tenants stay longer</li>
      <li><strong>Property Management:</strong> Professional management reduces turnover time</li>
      <li><strong>Economic Conditions:</strong> Recessions typically increase vacancy rates</li>
    </ul>
    
    <h3>Economic vs. Physical Vacancy</h3>
    <p><strong>Physical Vacancy:</strong> Units that are actually empty</p>
    <p><strong>Economic Vacancy:</strong> Includes physical vacancy plus rent losses from non-payment, concessions, and turnover costs</p>
    <p>Conservative underwriting uses economic vacancy, which is typically 1-3% higher than physical vacancy.</p>
    
    <h3>Best Practices for Underwriting</h3>
    <ul>
      <li>Use market vacancy rates, not optimistic assumptions</li>
      <li>Add 1-2% buffer for unexpected turnover</li>
      <li>Test stress scenarios with 15-20% vacancy</li>
      <li>Include both vacancy and collection loss</li>
      <li>Research historical vacancy data for your market</li>
      <li>Consider seasonal variations (e.g., student housing)</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your gross potential rent and operating expenses, then test various vacancy rate scenarios. The calculator shows how vacancy impacts:</p>
    <ul>
      <li>Effective gross income</li>
      <li>Net operating income (NOI)</li>
      <li>Cash-on-cash return</li>
      <li>Debt service coverage ratio</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "grossPotentialRent",
        label: "Gross Potential Rent (Annual $)",
        type: "number",
        placeholder: "120000",
        defaultValue: "120000",
      },
      {
        name: "operatingExpenses",
        label: "Operating Expenses (Annual $)",
        type: "number",
        placeholder: "36000",
        defaultValue: "36000",
      },
      {
        name: "debtService",
        label: "Annual Debt Service ($)",
        type: "number",
        placeholder: "48000",
        defaultValue: "48000",
      },
    ],
    results: [
      { label: "NOI at 0% Vacancy", isCurrency: true },
      { label: "NOI at 5% Vacancy", isCurrency: true },
      { label: "NOI at 10% Vacancy", isCurrency: true },
      { label: "NOI at 15% Vacancy", isCurrency: true },
      { label: "NOI at 20% Vacancy", isCurrency: true },
      { label: "Cash Flow at 5% Vacancy", isCurrency: true },
      { label: "Cash Flow at 15% Vacancy", isCurrency: true },
      { label: "Impact of 10% Vacancy", isCurrency: true },
    ],
    calculate: (data: any) => {
      const gpr = Number(data.grossPotentialRent) || 0;
      const opex = Number(data.operatingExpenses) || 0;
      const debtService = Number(data.debtService) || 0;
      
      const noi0 = gpr - opex;
      const noi5 = (gpr * 0.95) - opex;
      const noi10 = (gpr * 0.90) - opex;
      const noi15 = (gpr * 0.85) - opex;
      const noi20 = (gpr * 0.80) - opex;
      
      const cashFlow5 = noi5 - debtService;
      const cashFlow15 = noi15 - debtService;
      
      const impact10 = noi0 - noi10;

      return [
        { label: "NOI at 0% Vacancy", value: noi0.toFixed(2), isCurrency: true },
        { label: "NOI at 5% Vacancy", value: noi5.toFixed(2), isCurrency: true },
        { label: "NOI at 10% Vacancy", value: noi10.toFixed(2), isCurrency: true },
        { label: "NOI at 15% Vacancy", value: noi15.toFixed(2), isCurrency: true },
        { label: "NOI at 20% Vacancy", value: noi20.toFixed(2), isCurrency: true },
        { label: "Cash Flow at 5% Vacancy", value: cashFlow5.toFixed(2), isCurrency: true },
        { label: "Cash Flow at 15% Vacancy", value: cashFlow15.toFixed(2), isCurrency: true },
        { label: "Annual Loss from 10% Vacancy", value: impact10.toFixed(2), isCurrency: true },
      ];
    },
  },
};
