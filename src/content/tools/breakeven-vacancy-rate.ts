import { CalculatorContent } from '@/types';

export const BREAKEVEN_VACANCY_RATE_CONTENT: CalculatorContent = {
  title: 'Breakeven Vacancy Rate Calculator',
  description: 'Calculate the maximum vacancy rate your property can sustain before becoming cash flow negative',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'breakeven-vacancy-rate',
  article: {
    title: "Understanding Breakeven Vacancy Rate",
    content: `
    <h2>Understanding Breakeven Vacancy Rate</h2>
    <p>The breakeven vacancy rate is the maximum percentage of vacancy your rental property can experience before it stops generating positive cash flow. Knowing this critical threshold helps you assess investment risk and set realistic expectations.</p>
    
    <h3>What is Breakeven Vacancy Rate?</h3>
    <p>The breakeven vacancy rate is the point where:</p>
    <p><strong>Effective Rental Income = Operating Expenses + Debt Service</strong></p>
    <p>At this point, net cash flow equals zero. Any vacancy above this rate results in negative cash flow, requiring you to contribute additional capital to cover expenses.</p>
    
    <h3>Why Breakeven Vacancy Rate Matters</h3>
    <ul>
      <li><strong>Risk Assessment:</strong> Properties with low breakeven rates (5-10%) have less margin for error</li>
      <li><strong>Market Resilience:</strong> High breakeven rates (30%+) indicate the property can withstand economic downturns</li>
      <li><strong>Financing Safety:</strong> Lenders often require properties to maintain vacancy below breakeven</li>
      <li><strong>Investment Comparison:</strong> Compare breakeven rates across different properties to assess relative risk</li>
    </ul>
    
    <h3>Interpreting Your Breakeven Rate</h3>
    <ul>
      <li><strong>Below 5%:</strong> Very tight margins, high risk - even brief vacancy creates negative cash flow</li>
      <li><strong>5-10%:</strong> Moderate risk - typical for highly leveraged properties</li>
      <li><strong>10-20%:</strong> Comfortable margin - property can handle normal vacancy and turnover</li>
      <li><strong>20-30%:</strong> Strong cushion - well-suited to handle market downturns</li>
      <li><strong>Above 30%:</strong> Excellent resilience - significant cash flow buffer</li>
    </ul>
    
    <h3>Factors That Improve Breakeven Rate</h3>
    <ul>
      <li><strong>Lower Leverage:</strong> Smaller mortgages mean lower debt service requirements</li>
      <li><strong>Lower Interest Rates:</strong> Reduced financing costs improve cash flow cushion</li>
      <li><strong>Higher Rents:</strong> More rental income creates larger buffer</li>
      <li><strong>Lower Operating Expenses:</strong> Efficient operations increase breakeven threshold</li>
      <li><strong>Value-Add Improvements:</strong> Renovations that boost rents without proportional expense increases</li>
    </ul>
    
    <h3>Factors That Worsen Breakeven Rate</h3>
    <ul>
      <li><strong>High Leverage:</strong> Large mortgages create high fixed costs</li>
      <li><strong>Low Rents:</strong> Limited income provides less cushion</li>
      <li><strong>High Operating Expenses:</strong> Property taxes, insurance, maintenance reduce buffer</li>
      <li><strong>Adjustable Rate Loans:</strong> Rising rates can quickly erode breakeven margin</li>
    </ul>
    
    <h3>Using Breakeven Rate for Decision-Making</h3>
    <p><strong>Acquisition:</strong> Compare property's breakeven rate to market vacancy rates. If market vacancy is 8% and breakeven is 6%, the property is too risky.</p>
    <p><strong>Refinancing:</strong> Calculate how increased debt service from cash-out refinancing affects your breakeven rate.</p>
    <p><strong>Renovation Decisions:</strong> Determine if improvements that increase rents also improve your breakeven margin.</p>
    
    <h3>Stress Testing</h3>
    <p>Conservative investors add safety margins:</p>
    <ul>
      <li>Ensure breakeven rate is at least 5-10% above current market vacancy</li>
      <li>Test recession scenarios with 15-20% vacancy rates</li>
      <li>Account for economic vacancy (non-payment, concessions) beyond physical vacancy</li>
      <li>Model interest rate increases for adjustable loans</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter your property's gross potential rent, operating expenses, and annual debt service. The calculator determines the exact vacancy rate where cash flow reaches zero, helping you assess how much cushion your investment provides.</p>
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
      { label: "Breakeven Vacancy Rate", isCurrency: false },
      { label: "Breakeven Analysis", isCurrency: false },
      { label: "Maximum Vacancy Allowed", isCurrency: false },
      { label: "Total Fixed Costs", isCurrency: true },
      { label: "Monthly Breakeven Vacancy Days", isCurrency: false },
    ],
    calculate: (data: any) => {
      const gpr = Number(data.grossPotentialRent) || 0;
      const opex = Number(data.operatingExpenses) || 0;
      const debtService = Number(data.debtService) || 0;
      
      const totalFixedCosts = opex + debtService;
      const breakevenVacancyRate = ((totalFixedCosts / gpr)) * 100;
      const maxVacancyRate = 100 - breakevenVacancyRate;
      
      let analysis = "";
      if (breakevenVacancyRate < 5) {
        analysis = "⚠️ Very Tight - High Risk";
      } else if (breakevenVacancyRate < 10) {
        analysis = "⚠️ Moderate Risk";
      } else if (breakevenVacancyRate < 20) {
        analysis = "✅ Comfortable Margin";
      } else if (breakevenVacancyRate < 30) {
        analysis = "✅ Strong Cushion";
      } else {
        analysis = "✅ Excellent Resilience";
      }
      
      const monthlyVacancyDays = ((100 - breakevenVacancyRate) / 100) * 30;

      return [
        { label: "Breakeven Vacancy Rate", value: `${(100 - breakevenVacancyRate).toFixed(2)}%`, isCurrency: false },
        { label: "Risk Assessment", value: analysis, isCurrency: false },
        { label: "Maximum Occupancy Needed", value: `${breakevenVacancyRate.toFixed(2)}%`, isCurrency: false },
        { label: "Total Fixed Annual Costs", value: totalFixedCosts.toFixed(2), isCurrency: true },
        { label: "Max Vacancy Days/Month", value: `${monthlyVacancyDays.toFixed(1)} days`, isCurrency: false },
      ];
    },
  },
};
