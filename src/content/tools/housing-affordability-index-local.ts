import { CalculatorContent } from '@/types';

export const HOUSING_AFFORDABILITY_INDEX_LOCAL_CONTENT: CalculatorContent = {
  title: 'Housing Affordability Index (Local)',
  description: 'Calculate local housing affordability index to compare income vs. home prices',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'housing-affordability-index-local',
  metaTitle: 'Housing Affordability Index Calculator - Local Market Analysis',
  metaDescription: 'Calculate housing affordability index for your local market. Compare median income to home prices, analyze affordability trends, and determine if housing is affordable.',
  metaKeywords: 'housing affordability index, affordability calculator, median income, home price ratio, housing market analysis, cost of housing',
  article: {
    title: "Understanding the Housing Affordability Index",
    content: `
    <h2>Understanding the Housing Affordability Index</h2>
    <p>The Housing Affordability Index (HAI) measures whether a typical family earns enough income to qualify for a mortgage on a typical home. It's a critical metric for understanding housing market health and accessibility.</p>
    
    <h3>What is the Housing Affordability Index?</h3>
    <p>The HAI measures the relationship between median home prices, median household income, and prevailing mortgage interest rates. An index of 100 means a family earning the median income has exactly enough income to qualify for a mortgage on a median-priced home.</p>
    
    <p><strong>Formula:</strong></p>
    <p>HAI = (Median Family Income ÷ Qualifying Income) × 100</p>
    
    <p>Where Qualifying Income is the income needed to qualify for a mortgage on a median-priced home using standard underwriting (28% debt-to-income ratio).</p>
    
    <h3>Interpreting the Index</h3>
    <p><strong>Index Above 100 (Affordable):</strong></p>
    <ul>
      <li><strong>120+:</strong> Very affordable - Family earns 20%+ more than needed
        <ul>
          <li>Easy for median-income families to buy</li>
          <li>Room for property taxes, insurance, maintenance</li>
          <li>Can afford homes above median price</li>
          <li>Healthy market conditions</li>
        </ul>
      </li>
      <li><strong>100-120:</strong> Moderately affordable
        <ul>
          <li>Median family can afford median home with planning</li>
          <li>Manageable with good budgeting</li>
          <li>Some financial cushion</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>Index at 100 (Breakeven):</strong></p>
    <ul>
      <li>Median family exactly qualifies for median home</li>
      <li>Tight budget, little room for error</li>
      <li>Market on edge of affordability crisis</li>
    </ul>
    
    <p><strong>Index Below 100 (Unaffordable):</strong></p>
    <ul>
      <li><strong>80-100:</strong> Somewhat unaffordable
        <ul>
          <li>Median family needs 80-100% of qualifying income</li>
          <li>Challenging for median-income buyers</li>
          <li>May need dual incomes or creative financing</li>
        </ul>
      </li>
      <li><strong>Below 80:</strong> Severely unaffordable
        <ul>
          <li>Major affordability crisis</li>
          <li>Median family significantly underqualified</li>
          <li>Market accessible only to above-median earners</li>
          <li>High risk of market correction</li>
        </ul>
      </li>
    </ul>
    
    <h3>National vs. Local Index</h3>
    <p><strong>National Housing Affordability Index:</strong></p>
    <ul>
      <li>Published monthly by National Association of Realtors</li>
      <li>Uses national median home price and income</li>
      <li>Useful for tracking national trends</li>
      <li>Less useful for individual markets</li>
    </ul>
    
    <p><strong>Local Housing Affordability Index:</strong></p>
    <ul>
      <li>Uses local median home price and income</li>
      <li>More relevant for specific markets</li>
      <li>Can vary dramatically from national average</li>
      <li>Essential for local market analysis</li>
    </ul>
    
    <h3>Historical Trends</h3>
    <p><strong>Long-Term Average (1970-2020):</strong></p>
    <ul>
      <li>National HAI averaged 120-140</li>
      <li>Housing generally affordable for median families</li>
      <li>Significant regional variations</li>
    </ul>
    
    <p><strong>2005-2007 Housing Bubble:</strong></p>
    <ul>
      <li>HAI dropped to 100-110 nationally</li>
      <li>Below 70 in bubble markets (CA, FL, AZ, NV)</li>
      <li>Warning sign of unsustainable prices</li>
      <li>Preceded market crash</li>
    </ul>
    
    <p><strong>2008-2012 Housing Crash:</strong></p>
    <ul>
      <li>HAI spiked to 160-180 nationally</li>
      <li>Historic affordability due to low prices and rates</li>
      <li>Best buying opportunity in generations</li>
    </ul>
    
    <p><strong>2020-2024 COVID Boom:</strong></p>
    <ul>
      <li>HAI dropped to 100-120 nationally</li>
      <li>Below 80 in hot markets (Austin, Boise, Phoenix)</li>
      <li>Affordability crisis in many markets</li>
      <li>Driven by low rates, high prices</li>
    </ul>
    
    <h3>Factors Affecting the Index</h3>
    <p><strong>Increases Affordability (Higher Index):</strong></p>
    <ul>
      <li>Rising incomes/wages</li>
      <li>Falling home prices</li>
      <li>Declining interest rates</li>
      <li>More relaxed lending standards</li>
    </ul>
    
    <p><strong>Decreases Affordability (Lower Index):</strong></p>
    <ul>
      <li>Stagnant wages</li>
      <li>Rising home prices</li>
      <li>Increasing interest rates</li>
      <li>Tighter lending standards</li>
      <li>Higher property taxes/insurance</li>
    </ul>
    
    <h3>Regional Affordability Variations</h3>
    <p><strong>Most Affordable Markets (HAI 150+):</strong></p>
    <ul>
      <li>Rust Belt cities (Detroit, Cleveland, Pittsburgh)</li>
      <li>Midwest (Indianapolis, Kansas City, St. Louis)</li>
      <li>South (Memphis, Oklahoma City, Wichita)</li>
      <li>Characteristics: Lower prices, moderate incomes</li>
    </ul>
    
    <p><strong>Least Affordable Markets (HAI 60-80):</strong></p>
    <ul>
      <li>California (San Francisco, Los Angeles, San Diego)</li>
      <li>Hawaii (Honolulu)</li>
      <li>Northeast (New York, Boston)</li>
      <li>Characteristics: Very high prices, incomes don't keep pace</li>
    </ul>
    
    <p><strong>Moderately Affordable (HAI 100-130):</strong></p>
    <ul>
      <li>Most of Southeast and Southwest</li>
      <li>Secondary markets</li>
      <li>Growing cities with reasonable prices</li>
    </ul>
    
    <h3>Impact on Market Dynamics</h3>
    <p><strong>High Affordability (HAI 140+):</strong></p>
    <ul>
      <li>Strong homeownership rates</li>
      <li>Steady demand from local buyers</li>
      <li>Less speculation</li>
      <li>Moderate price appreciation</li>
      <li>Sustainable market conditions</li>
    </ul>
    
    <p><strong>Low Affordability (HAI Below 90):</strong></p>
    <ul>
      <li>Falling homeownership rates</li>
      <li>Increased rental demand</li>
      <li>Out-migration to affordable areas</li>
      <li>Market vulnerable to correction</li>
      <li>Social/economic challenges</li>
    </ul>
    
    <h3>First-Time Buyer Affordability</h3>
    <p>Separate index often calculated for first-time buyers:</p>
    <ul>
      <li>Uses lower price points (starter homes)</li>
      <li>Uses younger household incomes (25-34 age group)</li>
      <li>Often significantly lower than overall HAI</li>
      <li>Better reflects entry-level market reality</li>
    </ul>
    
    <p><strong>Typical First-Time Buyer HAI:</strong></p>
    <ul>
      <li>Usually 20-30 points lower than overall HAI</li>
      <li>More sensitive to price increases</li>
      <li>Critical for market health (need new buyers)</li>
    </ul>
    
    <h3>Using HAI for Decision Making</h3>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li><strong>HAI Above 120:</strong> Good time to buy - Affordable market</li>
      <li><strong>HAI 100-120:</strong> Fair market - Budget carefully</li>
      <li><strong>HAI Below 100:</strong> Challenging - May need to:
        <ul>
          <li>Buy below median price</li>
          <li>Increase down payment</li>
          <li>Look at surrounding areas</li>
          <li>Wait for market to improve</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Low HAI = Smaller buyer pool, may face resistance</li>
      <li>High HAI = Larger buyer pool, stronger demand</li>
      <li>Consider affordability when pricing</li>
    </ul>
    
    <p><strong>For Investors:</strong></p>
    <ul>
      <li>Low HAI = High rental demand (people priced out of buying)</li>
      <li>Low HAI = Potential market correction risk</li>
      <li>High HAI = Strong ownership demand, lower rental yields</li>
      <li>Track HAI trends for market timing</li>
    </ul>
    
    <p><strong>For Policymakers:</strong></p>
    <ul>
      <li>Monitor HAI for housing crisis signals</li>
      <li>HAI below 100 = Need for intervention</li>
      <li>Can inform zoning, development policies</li>
      <li>Guide affordable housing programs</li>
    </ul>
    
    <h3>Limitations of HAI</h3>
    <ul>
      <li><strong>Uses Median:</strong> Doesn't reflect distribution extremes</li>
      <li><strong>28% DTI Standard:</strong> Some lenders allow higher ratios</li>
      <li><strong>Excludes Other Costs:</strong> HOA, maintenance, utilities not included</li>
      <li><strong>Assumes 20% Down:</strong> Many buyers use less (FHA 3.5%)</li>
      <li><strong>Doesn't Account for:</strong>
        <ul>
          <li>Student debt</li>
          <li>Credit card debt</li>
          <li>Car loans</li>
          <li>Childcare costs</li>
          <li>Healthcare costs</li>
        </ul>
      </li>
      <li><strong>Income Inequality:</strong> Median may not reflect typical buyer</li>
    </ul>
    
    <h3>Alternative Affordability Metrics</h3>
    <p><strong>Price-to-Income Ratio:</strong></p>
    <ul>
      <li>Median home price ÷ Median household income</li>
      <li>Typical range: 3-4x</li>
      <li>Above 5x = Unaffordable</li>
      <li>Simpler than HAI but less precise</li>
    </ul>
    
    <p><strong>Payment-to-Income Ratio:</strong></p>
    <ul>
      <li>Median mortgage payment ÷ Median monthly income</li>
      <li>Ideal: Below 28%</li>
      <li>Warning: Above 35%</li>
      <li>Reflects actual monthly burden</li>
    </ul>
    
    <p><strong>Rent vs. Own Index:</strong></p>
    <ul>
      <li>Compares cost of renting vs. owning</li>
      <li>When renting cheaper = Low affordability for ownership</li>
      <li>Useful complement to HAI</li>
    </ul>
    
    <h3>Improving Local Affordability</h3>
    <p><strong>Supply-Side Solutions:</strong></p>
    <ul>
      <li>Increase housing supply</li>
      <li>Relax zoning restrictions</li>
      <li>Streamline permitting</li>
      <li>Encourage dense development</li>
      <li>Support ADU construction</li>
    </ul>
    
    <p><strong>Demand-Side Solutions:</strong></p>
    <ul>
      <li>Down payment assistance programs</li>
      <li>First-time buyer tax credits</li>
      <li>Below-market-rate housing programs</li>
      <li>Inclusionary zoning</li>
      <li>Community land trusts</li>
    </ul>
    
    <p><strong>Income Solutions:</strong></p>
    <ul>
      <li>Wage growth policies</li>
      <li>Job creation</li>
      <li>Economic development</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "medianHomePrice",
        label: "Median Home Price (Local)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "medianHouseholdIncome",
        label: "Median Household Income (Local)",
        type: "number",
        placeholder: "75000",
        defaultValue: "75000",
      },
      {
        name: "interestRate",
        label: "Current Mortgage Interest Rate (%)",
        type: "number",
        placeholder: "7.0",
        defaultValue: "7.0",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "propertyTaxRate",
        label: "Annual Property Tax Rate (%)",
        type: "number",
        placeholder: "1.2",
        defaultValue: "1.2",
      },
    ],
    results: [
      { label: "Housing Affordability Index", isCurrency: false },
      { label: "Affordability Classification", isCurrency: false },
      { label: "Income Needed to Qualify", isCurrency: true },
      { label: "Monthly Payment (PITI)", isCurrency: true },
      { label: "Price-to-Income Ratio", isCurrency: false },
      { label: "Payment-to-Income Ratio", isCurrency: false },
      { label: "Market Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const medianHomePrice = Number(data.medianHomePrice) || 0;
      const medianHouseholdIncome = Number(data.medianHouseholdIncome) || 0;
      const interestRate = Number(data.interestRate) || 7.0;
      const downPaymentPercent = Number(data.downPaymentPercent) || 20;
      const propertyTaxRate = Number(data.propertyTaxRate) || 1.2;
      
      // Calculate loan amount
      const downPayment = medianHomePrice * (downPaymentPercent / 100);
      const loanAmount = medianHomePrice - downPayment;
      
      // Calculate monthly mortgage payment (P&I)
      const monthlyRate = (interestRate / 100) / 12;
      const numberOfPayments = 30 * 12;
      const monthlyPI = loanAmount > 0 ? 
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1) : 0;
      
      // Add taxes and insurance
      const monthlyPropertyTax = (medianHomePrice * (propertyTaxRate / 100)) / 12;
      const monthlyInsurance = medianHomePrice * 0.005 / 12; // Estimate 0.5% annually
      const monthlyPITI = monthlyPI + monthlyPropertyTax + monthlyInsurance;
      
      // Income needed to qualify (28% front-end DTI ratio)
      const incomeNeededToQualify = (monthlyPITI * 12) / 0.28;
      
      // Housing Affordability Index
      const affordabilityIndex = incomeNeededToQualify > 0 ? 
        (medianHouseholdIncome / incomeNeededToQualify) * 100 : 0;
      
      // Affordability classification
      let classification = "";
      if (affordabilityIndex >= 140) {
        classification = "🟢 Very Affordable - Median family earns significantly more than needed";
      } else if (affordabilityIndex >= 120) {
        classification = "🟢 Affordable - Median family comfortably qualifies";
      } else if (affordabilityIndex >= 100) {
        classification = "🟡 Moderately Affordable - Median family barely qualifies";
      } else if (affordabilityIndex >= 80) {
        classification = "🟠 Somewhat Unaffordable - Challenging for median family";
      } else if (affordabilityIndex >= 60) {
        classification = "🔴 Unaffordable - Median family significantly underqualified";
      } else {
        classification = "🔴 Severely Unaffordable - Affordability crisis";
      }
      
      // Price-to-income ratio
      const priceToIncomeRatio = medianHouseholdIncome > 0 ? 
        medianHomePrice / medianHouseholdIncome : 0;
      let ptiAssessment = "";
      if (priceToIncomeRatio <= 3) {
        ptiAssessment = `${priceToIncomeRatio.toFixed(2)}x (Historically affordable)`;
      } else if (priceToIncomeRatio <= 4) {
        ptiAssessment = `${priceToIncomeRatio.toFixed(2)}x (Moderately affordable)`;
      } else if (priceToIncomeRatio <= 5) {
        ptiAssessment = `${priceToIncomeRatio.toFixed(2)}x (Stretched)`;
      } else {
        ptiAssessment = `${priceToIncomeRatio.toFixed(2)}x (Unaffordable)`;
      }
      
      // Payment-to-income ratio
      const monthlyIncome = medianHouseholdIncome / 12;
      const paymentToIncomeRatio = monthlyIncome > 0 ? 
        (monthlyPITI / monthlyIncome) * 100 : 0;
      let paymentRatioAssessment = "";
      if (paymentToIncomeRatio <= 28) {
        paymentRatioAssessment = `${paymentToIncomeRatio.toFixed(1)}% (Ideal - within standard guidelines)`;
      } else if (paymentToIncomeRatio <= 35) {
        paymentRatioAssessment = `${paymentToIncomeRatio.toFixed(1)}% (Stretched - above ideal)`;
      } else {
        paymentRatioAssessment = `${paymentToIncomeRatio.toFixed(1)}% (Unaffordable - well above guidelines)`;
      }
      
      // Market assessment
      let marketAssessment = "";
      if (affordabilityIndex >= 120) {
        marketAssessment = "✅ Healthy market - Housing is accessible to median earners. Strong homeownership potential.";
      } else if (affordabilityIndex >= 100) {
        marketAssessment = "⚠️ On the edge - Median families can barely afford median homes. Market vulnerable to rate increases.";
      } else if (affordabilityIndex >= 80) {
        marketAssessment = "🔴 Affordability challenge - Housing increasingly out of reach for median earners. High rental demand likely.";
      } else {
        marketAssessment = "🚨 Affordability crisis - Severe mismatch between incomes and prices. Market correction risk or prolonged unaffordability.";
      }

      return [
        { 
          label: "Housing Affordability Index", 
          value: `${affordabilityIndex.toFixed(1)} (${affordabilityIndex >= 100 ? 'Affordable' : 'Unaffordable'})`, 
          isCurrency: false 
        },
        { 
          label: "Affordability Classification", 
          value: classification, 
          isCurrency: false 
        },
        { 
          label: "Income Needed to Qualify", 
          value: incomeNeededToQualify.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Monthly Payment (PITI)", 
          value: monthlyPITI.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Price-to-Income Ratio", 
          value: ptiAssessment, 
          isCurrency: false 
        },
        { 
          label: "Payment-to-Income Ratio", 
          value: paymentRatioAssessment, 
          isCurrency: false 
        },
        { 
          label: "Market Assessment", 
          value: marketAssessment, 
          isCurrency: false 
        },
      ];
    },
  },
};
