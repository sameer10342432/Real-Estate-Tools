import { CalculatorContent } from '@/types';

export const MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT: CalculatorContent = {
  title: 'Median Income vs. Median Home Price Analyzer',
  description: 'Analyze housing affordability by comparing median household income to median home prices across US markets',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'median-income-vs-median-home-price',
  article: {
    title: "Understanding Income-to-Home Price Ratios",
    content: `
    <h2>The Housing Affordability Crisis</h2>
    <p>The relationship between median income and median home prices is the most important measure of housing affordability. Historically, a healthy market has a price-to-income ratio of 3-4x. Many markets now exceed 6-10x, creating affordability challenges.</p>
    
    <h3>Historical Context</h3>
    <p><strong>1970s-1990s:</strong> Median home price was 2.5-3.5x median household income</p>
    <p><strong>2000s:</strong> Ratio rose to 4-5x, contributing to 2008 housing crisis</p>
    <p><strong>2020-2024:</strong> Ratio surged to 5-8x nationally, 10-12x in expensive metros</p>
    
    <h3>Markets by Affordability (2024)</h3>
    <p><strong>Extremely Unaffordable (Ratio 8+):</strong></p>
    <ul>
      <li>San Francisco: $127K income / $1.3M home = 10.2x ratio</li>
      <li>San Jose: $130K income / $1.2M home = 9.2x ratio</li>
      <li>Los Angeles: $85K income / $800K home = 9.4x ratio</li>
      <li>San Diego: $95K income / $850K home = 8.9x ratio</li>
    </ul>
    
    <p><strong>Severely Unaffordable (Ratio 5-8):</strong></p>
    <ul>
      <li>Seattle: $105K income / $750K home = 7.1x ratio</li>
      <li>Denver: $85K income / $550K home = 6.5x ratio</li>
      <li>Portland: $80K income / $500K home = 6.3x ratio</li>
      <li>Miami: $65K income / $420K home = 6.5x ratio</li>
    </ul>
    
    <p><strong>Moderately Unaffordable (Ratio 4-5):</strong></p>
    <ul>
      <li>Phoenix: $70K income / $350K home = 5.0x ratio</li>
      <li>Nashville: $65K income / $330K home = 5.1x ratio</li>
      <li>Raleigh: $75K income / $340K home = 4.5x ratio</li>
      <li>Atlanta: $70K income / $310K home = 4.4x ratio</li>
    </ul>
    
    <p><strong>Affordable (Ratio 3-4):</strong></p>
    <ul>
      <li>Pittsburgh: $65K income / $200K home = 3.1x ratio</li>
      <li>Kansas City: $68K income / $230K home = 3.4x ratio</li>
      <li>Columbus: $70K income / $250K home = 3.6x ratio</li>
      <li>Indianapolis: $62K income / $210K home = 3.4x ratio</li>
    </ul>
    
    <p><strong>Very Affordable (Ratio Under 3):</strong></p>
    <ul>
      <li>Cleveland: $55K income / $120K home = 2.2x ratio</li>
      <li>Detroit: $58K income / $115K home = 2.0x ratio</li>
      <li>Buffalo: $60K income / $180K home = 3.0x ratio</li>
    </ul>
    
    <h3>Why the Ratio Matters</h3>
    <ul>
      <li><strong>Mortgage Qualification:</strong> Banks use 3-5x income for loan approval</li>
      <li><strong>Economic Health:</strong> High ratios indicate structural imbalances</li>
      <li><strong>Migration Patterns:</strong> People move from high-ratio to low-ratio areas</li>
      <li><strong>Investment Risk:</strong> Very high ratios can't be sustained long-term</li>
      <li><strong>Social Impact:</strong> High ratios lock out middle class from ownership</li>
    </ul>
    
    <h3>Factors Driving High Ratios</h3>
    <ul>
      <li><strong>Limited Supply:</strong> NIMBY zoning, construction costs, labor shortages</li>
      <li><strong>High Demand:</strong> Remote work, millennials buying, investor activity</li>
      <li><strong>Low Interest Rates (2020-2021):</strong> Made expensive homes "affordable" monthly</li>
      <li><strong>Income Inequality:</strong> High earners bidding up prices</li>
      <li><strong>Foreign Investment:</strong> International buyers in gateway cities</li>
    </ul>
    
    <h3>Investment Implications</h3>
    <p><strong>High Ratio Markets (7+):</strong></p>
    <ul>
      <li>Risk of price correction if rates stay high</li>
      <li>Strong rental demand from priced-out buyers</li>
      <li>Appreciation may slow or reverse</li>
      <li>Consider selling and moving to lower-ratio market</li>
    </ul>
    
    <p><strong>Low Ratio Markets (3-4):</strong></p>
    <ul>
      <li>Room for appreciation as demand grows</li>
      <li>More sustainable long-term</li>
      <li>Attracts remote workers and retirees</li>
      <li>Better cash flow for rental properties</li>
    </ul>
    
    <h3>Making Decisions</h3>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Target markets with ratios under 5x if possible</li>
      <li>In high-ratio markets, consider waiting or renting</li>
      <li>Look for lower-ratio suburbs of expensive cities</li>
      <li>Increase income or wait for price correction</li>
    </ul>
    
    <p><strong>For Investors:</strong></p>
    <ul>
      <li>Low-ratio markets offer better cash flow</li>
      <li>High-ratio markets better for appreciation (with risk)</li>
      <li>Moderate ratios (4-5x) provide balance</li>
      <li>Avoid markets where ratio is rising rapidly</li>
    </ul>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>High ratios indicate seller's market</li>
      <li>But recognize fewer qualified buyers</li>
      <li>May take longer to sell as ratios increase</li>
      <li>Consider selling high-ratio market, buying low-ratio</li>
    </ul>
    
    <h3>Future Trends</h3>
    <p><strong>Factors That Could Lower Ratios:</strong></p>
    <ul>
      <li>Recession reducing demand and prices</li>
      <li>New construction increasing supply</li>
      <li>Wage growth outpacing home price growth</li>
      <li>Remote work spreading population to cheaper areas</li>
    </ul>
    
    <p><strong>Factors That Could Raise Ratios:</strong></p>
    <ul>
      <li>Continued supply constraints</li>
      <li>Population growth in desirable metros</li>
      <li>Restrictive zoning limiting new development</li>
      <li>Climate migration to certain regions</li>
    </ul>
    
    <p><strong>Pro Tip:</strong> Use this tool to compare your target market against the national average (currently 5.5-6x). Markets with ratios significantly above average are vulnerable to corrections, while those below average offer opportunity for sustainable growth.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "medianIncome",
        label: "Median Household Income ($)",
        type: "number",
        placeholder: "75000",
        defaultValue: "75000",
      },
      {
        name: "medianHomePrice",
        label: "Median Home Price ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "averageIncome",
        label: "Average Income Growth (% per year)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "averagePriceGrowth",
        label: "Average Price Growth (% per year)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Price-to-Income Ratio", isCurrency: false },
      { label: "Affordability Rating", isCurrency: false },
      { label: "Market Classification", isCurrency: false },
      { label: "Projected Ratio in 5 Years", isCurrency: false },
      { label: "Investment Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const income = Number(data.medianIncome) || 0;
      const homePrice = Number(data.medianHomePrice) || 0;
      const incomeGrowth = Number(data.averageIncome) || 0;
      const priceGrowth = Number(data.averagePriceGrowth) || 0;
      
      const priceToIncomeRatio = income > 0 ? homePrice / income : 0;
      
      // Project ratio in 5 years
      const futureIncome = income * Math.pow((1 + incomeGrowth / 100), 5);
      const futurePrice = homePrice * Math.pow((1 + priceGrowth / 100), 5);
      const futureRatio = futureIncome > 0 ? futurePrice / futureIncome : 0;
      
      let affordabilityRating = "";
      let classification = "";
      let recommendation = "";
      
      if (priceToIncomeRatio <= 3) {
        affordabilityRating = "⭐⭐⭐⭐⭐ Highly Affordable";
        classification = "🟢 Very Affordable Market";
        recommendation = "Excellent buy opportunity - sustainable long-term growth";
      } else if (priceToIncomeRatio <= 4) {
        affordabilityRating = "⭐⭐⭐⭐ Affordable";
        classification = "🟢 Affordable Market";
        recommendation = "Good value - healthy market fundamentals";
      } else if (priceToIncomeRatio <= 5) {
        affordabilityRating = "⭐⭐⭐ Moderately Affordable";
        classification = "🟡 Moderately Unaffordable";
        recommendation = "Acceptable - monitor income vs price trends";
      } else if (priceToIncomeRatio <= 7) {
        affordabilityRating = "⭐⭐ Severely Unaffordable";
        classification = "🟠 Severely Unaffordable";
        recommendation = "Caution - high risk of correction, strong rental demand";
      } else {
        affordabilityRating = "⭐ Extremely Unaffordable";
        classification = "🔴 Extremely Unaffordable";
        recommendation = "High risk - consider renting or alternative markets";
      }

      return [
        { label: "Price-to-Income Ratio", value: `${priceToIncomeRatio.toFixed(2)}x`, isCurrency: false },
        { label: "Affordability Rating", value: affordabilityRating, isCurrency: false },
        { label: "Market Classification", value: classification, isCurrency: false },
        { label: "Projected Ratio in 5 Years", value: `${futureRatio.toFixed(2)}x`, isCurrency: false },
        { label: "Investment Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
