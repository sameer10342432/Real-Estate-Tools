import { CalculatorContent } from '@/types';

export const WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT: CalculatorContent = {
  title: 'Where Can I Afford to Live? (US Map)',
  description: 'Calculate which US cities and states you can afford based on your income, savings, and housing budget preferences',
  icon: 'Icon',
  category: 'Financial Planning',
  slug: 'where-can-i-afford-to-live-map',
  article: {
    title: "Finding Affordable Places to Live in America",
    content: `
    <h2>Calculate Your Housing Affordability</h2>
    <p>Understanding where you can afford to live helps you make informed decisions about relocation, job offers, and lifestyle choices. This tool analyzes your income and budget to identify affordable US cities.</p>
    
    <h3>The 28/36 Rule</h3>
    <p>Financial experts recommend following the 28/36 rule for housing affordability:</p>
    <ul>
      <li><strong>28% Rule:</strong> Housing costs (mortgage/rent, taxes, insurance) should not exceed 28% of gross monthly income</li>
      <li><strong>36% Rule:</strong> Total debt payments (housing + car + student loans + credit cards) should not exceed 36% of gross income</li>
    </ul>
    <p>Example: $60,000 annual income = $5,000/month. Housing should be ≤ $1,400/month, total debt ≤ $1,800/month</p>
    
    <h3>Most Affordable US Cities (2024)</h3>
    <p><strong>Ultra-Affordable (Under $150K median home):</strong></p>
    <ul>
      <li>Cleveland, OH - $120K median, low cost of living, healthcare jobs</li>
      <li>Detroit, MI - $115K median, revitalizing downtown, auto industry</li>
      <li>Memphis, TN - $140K median, no income tax, music heritage</li>
      <li>Buffalo, NY - $180K median, affordable Northeast option</li>
    </ul>
    
    <p><strong>Very Affordable ($150K-$250K median home):</strong></p>
    <ul>
      <li>Pittsburgh, PA - $190K median, tech growth, colleges</li>
      <li>Indianapolis, IN - $200K median, central location, growing economy</li>
      <li>Cincinnati, OH - $210K median, Fortune 500 companies</li>
      <li>Kansas City, MO - $230K median, BBQ, jazz, affordable Midwest</li>
      <li>Columbus, OH - $245K median, state capital, diverse economy</li>
    </ul>
    
    <p><strong>Moderately Affordable ($250K-$350K median home):</strong></p>
    <ul>
      <li>Nashville, TN - $330K median, music city, no income tax, hot market</li>
      <li>Raleigh, NC - $340K median, research triangle, tech jobs</li>
      <li>Charlotte, NC - $320K median, banking hub, growing city</li>
      <li>Phoenix, AZ - $350K median, warm weather, job growth</li>
    </ul>
    
    <h3>Least Affordable US Cities</h3>
    <p>Avoid these markets if affordability is a priority:</p>
    <ul>
      <li>San Francisco, CA - $1.3M median (requires $300K+ income)</li>
      <li>San Jose, CA - $1.2M median (Silicon Valley premium)</li>
      <li>San Diego, CA - $850K median (beach tax)</li>
      <li>Los Angeles, CA - $800K median (entertainment industry)</li>
      <li>Seattle, WA - $750K median (tech boom)</li>
      <li>New York, NY - $680K median (Manhattan much higher)</li>
      <li>Boston, MA - $650K median (education and healthcare hub)</li>
    </ul>
    
    <h3>Factors Beyond Home Price</h3>
    <ul>
      <li><strong>Property Taxes:</strong> Texas and New Jersey have high rates (2%+), while Hawaii is low (0.3%)</li>
      <li><strong>State Income Tax:</strong> 9 states have no income tax (FL, TX, TN, WA, NV, WY, SD, AK, NH*)</li>
      <li><strong>Cost of Living:</strong> Groceries, utilities, transportation vary significantly</li>
      <li><strong>Insurance Costs:</strong> Coastal areas (hurricanes) and California (fires/earthquakes) have higher premiums</li>
      <li><strong>HOA Fees:</strong> Can add $200-$600/month in many areas</li>
    </ul>
    
    <h3>Income Requirements by City Type</h3>
    <p><strong>Small City/Rural:</strong> $40K-$60K income can afford median home</p>
    <p><strong>Mid-Size Metro:</strong> $60K-$90K income needed for median home</p>
    <p><strong>Major Metro (Affordable):</strong> $80K-$120K income for median home</p>
    <p><strong>Major Metro (Expensive):</strong> $150K-$300K+ income required</p>
    
    <h3>Maximizing Affordability</h3>
    <ul>
      <li>Consider suburbs of expensive cities (10-30% cheaper)</li>
      <li>Look at cities 50-100 miles from major metros</li>
      <li>Remote work allows living anywhere with good internet</li>
      <li>Research up-and-coming neighborhoods before gentrification peaks</li>
      <li>Factor in commute costs if working in expensive city but living outside</li>
    </ul>
    
    <p><strong>Pro Tip:</strong> Use this calculator to identify affordable cities, then research job opportunities in those markets. Sometimes moving to an affordable city with slightly lower pay results in better quality of life and more savings.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "annualIncome",
        label: "Annual Gross Income ($)",
        type: "number",
        placeholder: "75000",
        defaultValue: "75000",
      },
      {
        name: "downPayment",
        label: "Available Down Payment ($)",
        type: "number",
        placeholder: "30000",
        defaultValue: "30000",
      },
      {
        name: "monthlyDebts",
        label: "Other Monthly Debt Payments ($)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "budgetPreference",
        label: "Housing Budget Preference (1=Min, 10=Max)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Max Affordable Home Price", isCurrency: true },
      { label: "Recommended Monthly Housing Budget", isCurrency: true },
      { label: "Affordable City Category", isCurrency: false },
      { label: "Example Affordable Cities", isCurrency: false },
      { label: "Affordability Rating", isCurrency: false },
    ],
    calculate: (data: any) => {
      const annualIncome = Number(data.annualIncome) || 0;
      const downPayment = Number(data.downPayment) || 0;
      const monthlyDebts = Number(data.monthlyDebts) || 0;
      const budgetPref = Number(data.budgetPreference) || 5;
      
      const monthlyIncome = annualIncome / 12;
      const housingBudgetPercentage = 0.20 + (budgetPref / 100) * 8; // 20-28% based on preference
      const recommendedMonthlyBudget = monthlyIncome * housingBudgetPercentage;
      
      // Assuming 30-year mortgage at 7% interest
      const monthlyPaymentCapacity = recommendedMonthlyBudget - (recommendedMonthlyBudget * 0.25); // Account for taxes/insurance
      const maxLoanAmount = (monthlyPaymentCapacity / 0.00665) || 0; // 7% rate monthly payment factor
      const maxHomePrice = maxLoanAmount + downPayment;
      
      let cityCategory = "";
      let exampleCities = "";
      let affordabilityRating = "";
      
      if (maxHomePrice >= 600000) {
        cityCategory = "🌟 Major Metro Markets";
        exampleCities = "Seattle, Denver, Austin, San Diego, Boston (suburbs)";
        affordabilityRating = "⭐⭐⭐⭐⭐ Can afford most US cities";
      } else if (maxHomePrice >= 400000) {
        cityCategory = "🏙️ Growing Metro Areas";
        exampleCities = "Nashville, Raleigh, Charlotte, Phoenix, Portland";
        affordabilityRating = "⭐⭐⭐⭐ Can afford mid-tier metros";
      } else if (maxHomePrice >= 250000) {
        cityCategory = "🏘️ Affordable Mid-Size Cities";
        exampleCities = "Columbus, Kansas City, Indianapolis, Cincinnati, Pittsburgh";
        affordabilityRating = "⭐⭐⭐ Can afford most affordable metros";
      } else if (maxHomePrice >= 150000) {
        cityCategory = "🏡 Affordable Small Cities";
        exampleCities = "Cleveland, Detroit, Buffalo, Memphis, Toledo";
        affordabilityRating = "⭐⭐ Best suited for affordable markets";
      } else {
        cityCategory = "💰 Budget-Conscious Options";
        exampleCities = "Small towns, rural areas, low-cost regions";
        affordabilityRating = "⭐ Focus on most affordable areas";
      }

      return [
        { label: "Max Affordable Home Price", value: `${maxHomePrice.toFixed(2)}`, isCurrency: true },
        { label: "Recommended Monthly Housing Budget", value: `${recommendedMonthlyBudget.toFixed(2)}`, isCurrency: true },
        { label: "Affordable City Category", value: cityCategory, isCurrency: false },
        { label: "Example Affordable Cities", value: exampleCities, isCurrency: false },
        { label: "Affordability Rating", value: affordabilityRating, isCurrency: false },
      ];
    },
  },
};
