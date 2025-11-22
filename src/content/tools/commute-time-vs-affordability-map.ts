import { CalculatorContent } from '@/types';

export const COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT: CalculatorContent = {
  title: 'Commute Time vs. Affordability Map',
  description: 'Analyze the trade-off between housing affordability and commute time to find the optimal living location',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'commute-time-vs-affordability-map',
  article: {
    title: "Balancing Commute Time and Housing Affordability",
    content: `
    <h2>The Commute vs. Cost Trade-Off</h2>
    <p>One of the biggest decisions when choosing where to live is balancing housing affordability with commute time. Moving further from work can save money but costs time and stress. This tool helps you find the optimal balance.</p>
    
    <h3>The True Cost of Commuting</h3>
    <p><strong>Time Cost:</strong> Average American commutes 27 minutes each way = 225 hours per year (9.4 days)</p>
    <p><strong>Financial Cost:</strong></p>
    <ul>
      <li>Gas: $0.55-$0.70 per mile (IRS rate)</li>
      <li>Vehicle wear and tear: $0.10-$0.15 per mile</li>
      <li>Car payment, insurance, maintenance</li>
      <li>Parking fees: $50-$500/month in cities</li>
      <li>Public transit: $70-$150/month</li>
    </ul>
    <p><strong>Health & Wellbeing Cost:</strong> Long commutes linked to stress, obesity, less sleep, reduced exercise</p>
    
    <h3>Housing Price Gradients by Distance</h3>
    <p><strong>Downtown/Urban Core:</strong> Highest prices, shortest commutes, walkable, best transit</p>
    <p><strong>5-10 miles out:</strong> 10-20% cheaper, 15-25 min commute, still good access</p>
    <p><strong>15-25 miles out:</strong> 30-40% cheaper, 30-45 min commute, suburban feel</p>
    <p><strong>30-50 miles out:</strong> 50-60% cheaper, 45-90 min commute, rural/exurban</p>
    
    <h3>The Break-Even Analysis</h3>
    <p>Example: San Francisco Bay Area</p>
    <ul>
      <li>San Francisco 1BR apartment: $3,000/month, 10 min commute</li>
      <li>Oakland 1BR apartment: $2,200/month, 35 min commute (BART)</li>
      <li>Monthly savings: $800, but $150 BART pass = $650 net savings</li>
      <li>Time cost: Extra 50 min/day = 20 hours/month</li>
      <li>Value of time: $650 ÷ 20 hours = $32.50/hour (if worth it to you)</li>
    </ul>
    
    <h3>Commute Mode Comparison</h3>
    <p><strong>Driving:</strong> Flexible but stressful, expensive in traffic, parking costs</p>
    <p><strong>Public Transit:</strong> Can read/work, cheaper, less control over schedule</p>
    <p><strong>Biking:</strong> Free, exercise, limited range (5-10 miles), weather dependent</p>
    <p><strong>Walking:</strong> Healthiest, limited to 2 miles, best work-life integration</p>
    <p><strong>Remote/Hybrid:</strong> Zero commute 2-5 days/week, maximum flexibility</p>
    
    <h3>Quality of Life Factors</h3>
    <ul>
      <li><strong>Family Time:</strong> 1 hour commute = 500 hours/year away from family</li>
      <li><strong>Sleep:</strong> Longer commutes linked to 7-8% less sleep</li>
      <li><strong>Exercise:</strong> Commuters exercise 20% less than those living nearby</li>
      <li><strong>Social Life:</strong> Harder to meet friends after work with long commutes</li>
      <li><strong>Weekend Activities:</strong> Being far from city center limits spontaneous activities</li>
    </ul>
    
    <h3>Sweet Spot Recommendations</h3>
    <p><strong>Under 20 minutes:</strong> Ideal for quality of life, worth paying premium</p>
    <p><strong>20-35 minutes:</strong> Acceptable trade-off, good balance of cost/time</p>
    <p><strong>35-50 minutes:</strong> Manageable but starts affecting wellbeing</p>
    <p><strong>Over 50 minutes:</strong> Only worth it for significant savings or temporary situation</p>
    
    <h3>Maximizing Value</h3>
    <ul>
      <li>Live near transit lines for reliable commute times</li>
      <li>Consider reverse commutes (live in city, work in suburbs)</li>
      <li>Negotiate remote work 1-2 days/week to reduce commute burden</li>
      <li>Choose neighborhoods with amenities to reduce other travel</li>
      <li>Factor in school quality if you have kids</li>
      <li>Consider appreciation potential of different areas</li>
    </ul>
    
    <h3>Remote Work Changes Everything</h3>
    <p>With remote or hybrid work becoming common:</p>
    <ul>
      <li>Can live farther away if only commuting 1-3 days/week</li>
      <li>Affords larger home in better school districts</li>
      <li>Commute budget can go toward bigger mortgage</li>
      <li>Quality of life dramatically improves</li>
    </ul>
    
    <p><strong>Pro Tip:</strong> Calculate your hourly time value (salary ÷ 2080 hours), then see if housing savings exceed commute costs + (commute hours × hourly value). If yes, the longer commute makes financial sense. If no, pay more to live closer.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price Near Work ($)",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "alternativeHomePrice",
        label: "Home Price Farther Away ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "commuteTimeNear",
        label: "Commute Time Near Work (minutes)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "commuteTimeFar",
        label: "Commute Time Farther Away (minutes)",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "annualSalary",
        label: "Annual Salary ($)",
        type: "number",
        placeholder: "80000",
        defaultValue: "80000",
      },
      {
        name: "commuteMilesPerDay",
        label: "Extra Commute Miles Per Day",
        type: "number",
        placeholder: "40",
        defaultValue: "40",
      },
    ],
    results: [
      { label: "Monthly Housing Savings", isCurrency: true },
      { label: "Monthly Commute Cost", isCurrency: true },
      { label: "Extra Time Spent Commuting (hours/month)", isCurrency: false },
      { label: "Value of Lost Time", isCurrency: true },
      { label: "Net Monthly Benefit/Cost", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homePriceNear = Number(data.homePrice) || 0;
      const homePriceFar = Number(data.alternativeHomePrice) || 0;
      const commuteNear = Number(data.commuteTimeNear) || 0;
      const commuteFar = Number(data.commuteTimeFar) || 0;
      const salary = Number(data.annualSalary) || 0;
      const extraMiles = Number(data.commuteMilesPerDay) || 0;
      
      // Calculate housing savings (assuming 30-year mortgage at 7%)
      const mortgageNear = (homePriceNear * 0.8 * 0.00665); // Monthly payment approximate
      const mortgageFar = (homePriceFar * 0.8 * 0.00665);
      const monthlySavings = mortgageNear - mortgageFar;
      
      // Calculate commute costs
      const workDaysPerMonth = 22;
      const monthlyCommuteCost = extraMiles * workDaysPerMonth * 0.65; // $0.65/mile total cost
      
      // Calculate time value
      const hourlyRate = salary / 2080; // Annual hours
      const extraCommuteHours = ((commuteFar - commuteNear) * 2 * workDaysPerMonth) / 60;
      const valueOfLostTime = extraCommuteHours * hourlyRate;
      
      // Net benefit/cost
      const netBenefit = monthlySavings - monthlyCommuteCost - valueOfLostTime;
      
      let recommendation = "";
      if (netBenefit > 200) {
        recommendation = "✅ Live Farther - Significant financial benefit despite commute";
      } else if (netBenefit > 0) {
        recommendation = "🟡 Marginal Benefit - Consider quality of life impact";
      } else if (netBenefit > -200) {
        recommendation = "🟡 Marginal Cost - Personal preference determines choice";
      } else {
        recommendation = "❌ Live Closer - Savings don't justify time and expense";
      }

      return [
        { label: "Monthly Housing Savings", value: `${monthlySavings.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Commute Cost", value: `${monthlyCommuteCost.toFixed(2)}`, isCurrency: true },
        { label: "Extra Time Spent Commuting (hours/month)", value: `${extraCommuteHours.toFixed(1)} hours`, isCurrency: false },
        { label: "Value of Lost Time", value: `${valueOfLostTime.toFixed(2)}`, isCurrency: true },
        { label: "Net Monthly Benefit/Cost", value: `${netBenefit.toFixed(2)}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
