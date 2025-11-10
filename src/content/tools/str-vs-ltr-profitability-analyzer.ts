import { CalculatorContent } from '@/types';

export const STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT: CalculatorContent = {
  title: 'STR vs. LTR Profitability Analyzer - Short vs. Long-Term Rental Comparison',
  description: 'Compare short-term rental (Airbnb/VRBO) vs. long-term rental profitability and ROI',
  icon: 'Icon',
  slug: 'str-vs-ltr-profitability-analyzer',
  category: 'Rental & Income',
  article: {
    title: 'Short-Term Rental vs. Long-Term Rental: Which is More Profitable?',
    content: `
    <h2>STR vs. LTR: Understanding the Decision</h2>
    <p>Choosing between short-term rentals (STR) and long-term rentals (LTR) is one of the most important decisions for rental property investors. While STRs (Airbnb, VRBO) can generate 2-3x higher monthly income, they require significantly more work, have higher expenses, and carry more regulatory risk. This calculator helps you compare both strategies side-by-side.</p>

    <h3>Short-Term Rental (STR) Strategy</h3>
    <p>STRs involve renting your property on a nightly or weekly basis through platforms like Airbnb and VRBO:</p>
    <ul>
      <li><strong>Pros:</strong> 
        <ul>
          <li>2-3x higher gross income potential compared to long-term rentals</li>
          <li>Flexibility to block dates for personal use</li>
          <li>Faster to adjust pricing based on market demand</li>
          <li>Can furnish property to your preferences</li>
        </ul>
      </li>
      <li><strong>Cons:</strong> 
        <ul>
          <li>Higher operating expenses (cleaning, supplies, utilities, platform fees)</li>
          <li>More active management (guest communication, turnovers, reviews)</li>
          <li>Regulatory risk (cities increasingly ban or restrict STRs)</li>
          <li>Income volatility—occupancy fluctuates with seasonality</li>
        </ul>
      </li>
    </ul>

    <h3>Long-Term Rental (LTR) Strategy</h3>
    <p>LTRs involve renting your property to a single tenant for 6-12+ months with a traditional lease:</p>
    <ul>
      <li><strong>Pros:</strong> 
        <ul>
          <li>Passive income—minimal management after tenant is placed</li>
          <li>Predictable monthly cash flow with low vacancy risk</li>
          <li>Lower operating expenses (tenant pays most utilities)</li>
          <li>No regulatory restrictions in most markets</li>
        </ul>
      </li>
      <li><strong>Cons:</strong> 
        <ul>
          <li>Lower gross income (typically 30-50% of STR potential)</li>
          <li>Property tied up for entire lease term</li>
          <li>Slower to adjust rents—typically once per year</li>
          <li>Risk of tenant damage or non-payment</li>
        </ul>
      </li>
    </ul>

    <h3>Key Profitability Factors</h3>
    <ul>
      <li><strong>Location:</strong> Tourist destinations and business hubs favor STRs; suburban family areas favor LTRs.</li>
      <li><strong>Property Type:</strong> Unique vacation homes excel as STRs; standard 3-bed homes work better as LTRs.</li>
      <li><strong>Your Availability:</strong> STRs require active management or property managers (20-30% of revenue).</li>
      <li><strong>Local Regulations:</strong> Many cities ban STRs or require permits—verify before investing.</li>
      <li><strong>Seasonality:</strong> If your market has 6+ months of low season, LTRs may be more stable.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your property details, STR income assumptions (nightly rate, occupancy, expenses), and LTR income assumptions (monthly rent, vacancy rate). The calculator will compare gross income, net income, cash-on-cash return, and management time to help you choose the most profitable strategy.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Property Purchase Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment Amount',
        type: 'number',
        defaultValue: 70000,
      },
      {
        name: 'strNightlyRate',
        label: 'STR - Average Nightly Rate',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'strOccupancyRate',
        label: 'STR - Occupancy Rate (%)',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'strMonthlyExpenses',
        label: 'STR - Monthly Operating Expenses',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'ltrMonthlyRent',
        label: 'LTR - Monthly Rent',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'ltrVacancyRate',
        label: 'LTR - Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'ltrMonthlyExpenses',
        label: 'LTR - Monthly Operating Expenses',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'monthlyMortgage',
        label: 'Monthly Mortgage Payment (P&I)',
        type: 'number',
        defaultValue: 1680,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, strNightlyRate, strOccupancyRate, strMonthlyExpenses, ltrMonthlyRent, ltrVacancyRate, ltrMonthlyExpenses, monthlyMortgage } = values;
      
      // STR Calculations
      const strOccupiedNights = (30 * strOccupancyRate) / 100;
      const strGrossMonthlyIncome = strNightlyRate * strOccupiedNights;
      const strTotalExpenses = strMonthlyExpenses + monthlyMortgage;
      const strNetMonthlyIncome = strGrossMonthlyIncome - strTotalExpenses;
      const strAnnualIncome = strNetMonthlyIncome * 12;
      const strCashOnCashReturn = (strAnnualIncome / downPayment) * 100;
      
      // LTR Calculations
      const ltrEffectiveRent = ltrMonthlyRent * (1 - ltrVacancyRate / 100);
      const ltrTotalExpenses = ltrMonthlyExpenses + monthlyMortgage;
      const ltrNetMonthlyIncome = ltrEffectiveRent - ltrTotalExpenses;
      const ltrAnnualIncome = ltrNetMonthlyIncome * 12;
      const ltrCashOnCashReturn = (ltrAnnualIncome / downPayment) * 100;
      
      // Comparison
      const incomeDifference = strNetMonthlyIncome - ltrNetMonthlyIncome;
      const annualDifference = incomeDifference * 12;
      const percentageAdvantage = ((incomeDifference / Math.abs(ltrNetMonthlyIncome)) * 100);
      
      const recommendation = strNetMonthlyIncome > ltrNetMonthlyIncome ? 
        'STR is more profitable' : 'LTR is more profitable';

      return [
        { label: 'STR - Gross Monthly Income', value: strGrossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'STR - Net Monthly Income', value: strNetMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'STR - Annual Net Income', value: strAnnualIncome.toFixed(2), isCurrency: true },
        { label: 'STR - Cash-on-Cash Return', value: strCashOnCashReturn.toFixed(2) + '%' },
        { label: 'LTR - Effective Monthly Rent', value: ltrEffectiveRent.toFixed(2), isCurrency: true },
        { label: 'LTR - Net Monthly Income', value: ltrNetMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'LTR - Annual Net Income', value: ltrAnnualIncome.toFixed(2), isCurrency: true },
        { label: 'LTR - Cash-on-Cash Return', value: ltrCashOnCashReturn.toFixed(2) + '%' },
        { label: 'Monthly Income Difference', value: incomeDifference.toFixed(2), isCurrency: true },
        { label: 'Annual Income Difference', value: annualDifference.toFixed(2), isCurrency: true },
        { label: 'Recommended Strategy', value: recommendation },
      ];
    },
  },
};