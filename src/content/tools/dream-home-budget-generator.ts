import { CalculatorContent } from '@/types';

export const DreamHomeBudgetGeneratorContent: CalculatorContent = {
  title: 'Dream Home Budget Generator',
  description: 'Generate a personalized budget for your dream home based on income, savings, lifestyle preferences, and financial goals',
  icon: '💭',
  category: 'Additional Tools',
  slug: 'dream-home-budget-generator',
  
  metaTitle: 'Dream Home Budget Generator - Custom Home Affordability Calculator | Property Tools',
  metaDescription: 'Generate a personalized budget for your dream home based on income, savings, lifestyle preferences, and financial goals. Plan your ideal home purchase realistically.',
  
  article: {
    title: 'Dream Home Budget Generator - Plan Your Ideal Home Purchase',
    content: \`
      <h2>Dream Home Budget Generator</h2>
      <p>Dreaming of your perfect home? This tool creates a realistic, personalized budget based on your actual income, savings, lifestyle choices, and financial goals. Stop guessing and start planning with confidence!</p>

      <h3>Why a Personalized Budget Matters</h3>
      <ul>
        <li><strong>Avoid Overextending:</strong> Prevent buying more house than you can comfortably afford</li>
        <li><strong>Real Numbers:</strong> Based on your actual income and savings, not generic rules</li>
        <li><strong>Lifestyle Factors:</strong> Accounts for your spending habits and priorities</li>
        <li><strong>Financial Goals:</strong> Balances homeownership with retirement, travel, and other dreams</li>
        <li><strong>Long-Term Planning:</strong> Considers your career trajectory and future needs</li>
      </ul>

      <h3>How Much House Can You Afford?</h3>
      
      <h4>The Conservative 28/36 Rule</h4>
      <ul>
        <li><strong>28% Rule:</strong> Monthly housing payment ≤ 28% of gross income</li>
        <li><strong>36% Rule:</strong> Total debt payments ≤ 36% of gross income</li>
        <li>Example: $80,000 income → $1,867 max housing, $2,400 max total debt</li>
      </ul>

      <h4>The Aggressive 40% Rule</h4>
      <ul>
        <li>Some lenders approve up to 40-50% debt-to-income</li>
        <li>Higher risk: less flexibility for emergencies</li>
        <li>Works if: stable job, no other debt, disciplined saver</li>
        <li>Example: $80,000 income → $2,667 housing payment</li>
      </ul>

      <h4>The Ultra-Conservative 25% Rule</h4>
      <ul>
        <li>Dave Ramsey recommendation</li>
        <li>15-year fixed mortgage only</li>
        <li>Example: $80,000 income → $1,667 max housing</li>
        <li>Builds wealth faster but limits home options</li>
      </ul>

      <h3>Hidden Homeownership Costs</h3>
      
      <h4>Beyond the Mortgage</h4>
      <ul>
        <li><strong>Property Taxes:</strong> 0.5-2.5% of home value annually</li>
        <li><strong>Homeowners Insurance:</strong> $800-$2,500+ annually</li>
        <li><strong>PMI (if <20% down):</strong> 0.5-1% of loan amount annually</li>
        <li><strong>HOA Fees:</strong> $50-$500+ monthly</li>
        <li><strong>Maintenance:</strong> 1% of home value annually</li>
        <li><strong>Utilities:</strong> Often higher than apartment</li>
        <li><strong>Landscaping:</strong> $50-$300+ monthly</li>
      </ul>

      <h4>Example Total Cost Breakdown</h4>
      <p>$350,000 home, 10% down ($35,000), 7% interest:</p>
      <ul>
        <li>Mortgage (P&I): $2,100</li>
        <li>Property taxes: $400</li>
        <li>Insurance: $150</li>
        <li>PMI: $200</li>
        <li>HOA: $100</li>
        <li>Maintenance fund: $290</li>
        <li><strong>True Monthly Cost: $3,240</strong></li>
      </ul>
      <p>Vs. mortgage-only estimate of $2,100 = 54% more!</p>

      <h3>Lifestyle-Based Budgeting</h3>
      
      <h4>The Minimalist Budget (25-30% housing)</h4>
      <p><strong>Best for:</strong> Early retirees, entrepreneurs, flexible lifestyles</p>
      <ul>
        <li>Prioritizes freedom over square footage</li>
        <li>Small home, low maintenance</li>
        <li>More money for travel, hobbies, investments</li>
        <li>Example: $100K income → $300K-$350K home</li>
      </ul>

      <h4>The Balanced Budget (30-35% housing)</h4>
      <p><strong>Best for:</strong> Families, stable careers, suburban living</p>
      <ul>
        <li>Comfortable home without overextending</li>
        <li>Room for emergencies and savings</li>
        <li>Moderate lifestyle flexibility</li>
        <li>Example: $100K income → $400K-$450K home</li>
      </ul>

      <h4>The House-Rich Budget (35-40% housing)</h4>
      <p><strong>Best for:</strong> High incomes, low debt, house-focused priorities</p>
      <ul>
        <li>Dream home but tight on other spending</li>
        <li>Requires discipline and stable income</li>
        <li>Less room for error</li>
        <li>Example: $100K income → $500K-$550K home</li>
      </ul>

      <h3>Income-Based Home Budgets</h3>
      
      <h4>$50,000 Annual Income</h4>
      <ul>
        <li>Conservative: $150,000-$180,000 home</li>
        <li>Moderate: $200,000-$220,000 home</li>
        <li>Aggressive: $250,000 home (risky)</li>
        <li>Recommended down payment: $10,000-$20,000</li>
      </ul>

      <h4>$75,000 Annual Income</h4>
      <ul>
        <li>Conservative: $225,000-$270,000 home</li>
        <li>Moderate: $300,000-$330,000 home</li>
        <li>Aggressive: $375,000 home (tight)</li>
        <li>Recommended down payment: $15,000-$30,000</li>
      </ul>

      <h4>$100,000 Annual Income</h4>
      <ul>
        <li>Conservative: $300,000-$360,000 home</li>
        <li>Moderate: $400,000-$440,000 home</li>
        <li>Aggressive: $500,000 home (risky)</li>
        <li>Recommended down payment: $20,000-$50,000</li>
      </ul>

      <h4>$150,000 Annual Income</h4>
      <ul>
        <li>Conservative: $450,000-$540,000 home</li>
        <li>Moderate: $600,000-$660,000 home</li>
        <li>Aggressive: $750,000 home (tight)</li>
        <li>Recommended down payment: $50,000-$100,000</li>
      </ul>

      <h3>Budget Adjustments for Your Situation</h3>
      
      <h4>Increase Budget If You:</h4>
      <ul>
        <li>Have zero consumer debt (cars, credit cards paid off)</li>
        <li>Expect significant income growth (promotions, bonuses)</li>
        <li>Have large emergency fund (12+ months expenses)</li>
        <li>Live in low cost-of-living area (low utilities, taxes)</li>
        <li>Are handy (can DIY repairs and maintenance)</li>
      </ul>

      <h4>Decrease Budget If You:</h4>
      <ul>
        <li>Have significant debt (car loans, student loans, credit cards)</li>
        <li>Unstable income (commission, freelance, new job)</li>
        <li>High cost-of-living area (expensive utilities, property taxes)</li>
        <li>Plan major expenses soon (kids, cars, medical)</li>
        <li>Not handy (will need to hire for all repairs)</li>
      </ul>

      <h3>Down Payment Strategies</h3>
      
      <h4>20% Down (Ideal)</h4>
      <ul>
        <li><strong>Pros:</strong> No PMI, better rates, lower monthly payment</li>
        <li><strong>Cons:</strong> Takes longer to save, delays homeownership</li>
        <li><strong>Best for:</strong> Patient savers, competitive markets</li>
      </ul>

      <h4>10% Down (Balanced)</h4>
      <ul>
        <li><strong>Pros:</strong> Faster to save, still meaningful equity</li>
        <li><strong>Cons:</strong> PMI required, higher monthly payment</li>
        <li><strong>Best for:</strong> Stable income, rising markets</li>
      </ul>

      <h4>5% Down (Minimum Conventional)</h4>
      <ul>
        <li><strong>Pros:</strong> Quick entry to homeownership</li>
        <li><strong>Cons:</strong> High PMI, larger monthly payment, little equity</li>
        <li><strong>Best for:</strong> High rental costs, rapidly appreciating markets</li>
      </ul>

      <h4>3.5% Down (FHA)</h4>
      <ul>
        <li><strong>Pros:</strong> Lowest down payment, easier qualification</li>
        <li><strong>Cons:</strong> Lifetime PMI, higher total costs</li>
        <li><strong>Best for:</strong> Lower credit scores, limited savings</li>
      </ul>

      <h3>Location-Based Budget Adjustments</h3>
      
      <h4>High-Cost Cities (SF, NYC, LA, Seattle, Boston)</h4>
      <ul>
        <li>Expect to stretch to 40-45% housing ratio</li>
        <li>Or accept smaller/farther home</li>
        <li>Consider rent vs. buy carefully (renting may be smarter)</li>
        <li>$100K income → $500K-$600K home (still modest)</li>
      </ul>

      <h4>Medium-Cost Cities (Austin, Denver, Portland, Miami)</h4>
      <ul>
        <li>More balanced ratio: 30-35% works well</li>
        <li>Good balance of affordability and amenities</li>
        <li>$100K income → $350K-$450K home</li>
      </ul>

      <h4>Low-Cost Cities (Midwest, South, smaller metros)</h4>
      <ul>
        <li>Conservative 25-28% ratio very doable</li>
        <li>More house for your money</li>
        <li>$100K income → $250K-$350K home (spacious!)</li>
      </ul>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Should I use a 30-year or 15-year mortgage?</h4>
      <p><strong>30-year:</strong> Lower monthly payment, more flexibility, can invest difference</p>
      <p><strong>15-year:</strong> Much less interest paid, forced savings, builds equity faster, but higher monthly payment (not recommended unless very conservative budget)</p>
      <p><strong>Hybrid:</strong> Get 30-year for flexibility, make extra payments when able</p>

      <h4>How much should I save beyond down payment?</h4>
      <p>Minimum: 3-6 months expenses PLUS down payment and closing costs</p>
      <p>Ideal: 6-12 months expenses + $10,000 home emergency fund</p>

      <h4>What if I can't afford my dream home?</h4>
      <p>Options: 1) Save longer for bigger down payment, 2) Increase income, 3) Buy starter home and upgrade later, 4) Adjust location or size expectations, 5) Consider house hacking (rent part of property)</p>

      <p><strong>Use this tool to generate a personalized, realistic budget for your dream home that balances your financial goals with your homeownership aspirations!</strong></p>
    \`,
  },

  calculator: {
    fields: [
      {
        name: 'annualIncome',
        label: 'Annual Gross Income ($)',
        type: 'number',
        defaultValue: '80000',
        placeholder: '80000',
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debt Payments ($)',
        type: 'number',
        defaultValue: '500',
        placeholder: '500',
      },
      {
        name: 'downPaymentSavings',
        label: 'Down Payment Savings ($)',
        type: 'number',
        defaultValue: '40000',
        placeholder: '40000',
      },
      {
        name: 'budgetStyle',
        label: 'Budget Philosophy',
        type: 'select',
        options: [
          { value: 'conservative', label: 'Conservative (25-28% housing ratio)' },
          { value: 'moderate', label: 'Moderate (30-33% housing ratio)' },
          { value: 'aggressive', label: 'Aggressive (35-40% housing ratio)' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'interestRate',
        label: 'Expected Interest Rate (%)',
        type: 'number',
        defaultValue: '7',
        placeholder: '7',
      },
    ],
    results: [
      { label: 'Your Dream Home Budget', isCurrency: true },
      { label: 'Monthly Payment Breakdown', isCurrency: false },
      { label: 'Financial Analysis', isCurrency: false },
      { label: 'Personalized Recommendations', isCurrency: false },
    ],
    calculate: (values) => {
      const annualIncome = Number(values.annualIncome) || 80000;
      const monthlyDebts = Number(values.monthlyDebts) || 500;
      const downPaymentSavings = Number(values.downPaymentSavings) || 40000;
      const budgetStyle = values.budgetStyle || 'moderate';
      const interestRate = Number(values.interestRate) || 7;

      const monthlyIncome = annualIncome / 12;

      let housingRatio = 0.30;
      let debtRatio = 0.36;
      
      if (budgetStyle === 'conservative') {
        housingRatio = 0.28;
        debtRatio = 0.36;
      } else if (budgetStyle === 'aggressive') {
        housingRatio = 0.38;
        debtRatio = 0.43;
      }

      const maxHousingPayment = monthlyIncome * housingRatio;
      const maxTotalDebt = monthlyIncome * debtRatio;
      const availableForHousing = Math.min(maxHousingPayment, maxTotalDebt - monthlyDebts);

      // Estimate total housing payment components
      const mortgagePayment = availableForHousing * 0.65; // ~65% of total payment is P&I
      const propertyTax = availableForHousing * 0.15; // ~15% property tax
      const insurance = availableForHousing * 0.08; // ~8% insurance
      const pmi = downPaymentSavings >= 0 && (downPaymentSavings / availableForHousing < 20) ? availableForHousing * 0.07 : 0;
      const maintenanceReserve = availableForHousing * 0.12; // ~12% maintenance

      // Calculate max home price based on mortgage payment
      const monthlyRate = (interestRate / 100) / 12;
      const numPayments = 30 * 12;
      const loanAmount = mortgagePayment * ((Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments)));
      
      const homePrice = loanAmount + downPaymentSavings;

      const downPaymentPercent = (downPaymentSavings / homePrice) * 100;

      const breakdown = \`💰 Total Monthly Housing Cost: $\${Math.round(availableForHousing).toLocaleString()}

Breakdown:
• Mortgage (P&I): $\${Math.round(mortgagePayment).toLocaleString()}
• Property Taxes: $\${Math.round(propertyTax).toLocaleString()}
• Homeowners Insurance: $\${Math.round(insurance).toLocaleString()}
\${pmi > 0 ? \`• PMI (less than 20% down): $\${Math.round(pmi).toLocaleString()}\n\` : ''}• Maintenance Reserve: $\${Math.round(maintenanceReserve).toLocaleString()}

Your Income Ratios:
• Housing: \${Math.round((availableForHousing / monthlyIncome) * 100)}% of gross income
• Total Debt: \${Math.round(((availableForHousing + monthlyDebts) / monthlyIncome) * 100)}% of gross income\`;

      const analysis = \`📊 Financial Health Check:

Income & Affordability:
• Gross Annual Income: $\${annualIncome.toLocaleString()}
• Monthly Gross Income: $\${Math.round(monthlyIncome).toLocaleString()}
• Existing Monthly Debts: $\${monthlyDebts.toLocaleString()}
• Down Payment Saved: $\${downPaymentSavings.toLocaleString()} (\${Math.round(downPaymentPercent)}% of home price)

Budget Philosophy: \${budgetStyle === 'conservative' ? '🛡️ Conservative - Low risk, maximum flexibility' : budgetStyle === 'moderate' ? '⚖️ Moderate - Balanced approach' : '🚀 Aggressive - Maximizing home budget'}

\${downPaymentPercent >= 20 ? '✅ 20%+ down payment - No PMI required!' : \`⚠️ \${Math.round(downPaymentPercent)}% down payment - PMI required ($\${Math.round(pmi).toLocaleString()}/month)\`}

\${monthlyDebts > (monthlyIncome * 0.15) ? '⚠️ High existing debt - May want to pay down before buying' : '✅ Low existing debt - Good position'}

\${availableForHousing > 0 ? \`\n✅ You can afford a home! Estimated budget: $\${Math.round(homePrice).toLocaleString()}\` : '❌ Current debt too high - pay down debt first'}\`;

      let recommendations = '';
      
      if (budgetStyle === 'conservative') {
        recommendations = \`🎯 Conservative Strategy Recommendations:

Your Approach: Prioritizing financial flexibility and security over home size.

Strengths:
• Lower financial stress
• Room for emergencies, travel, retirement savings
• Can weather job loss or income reduction
• Less "house poor" risk

Considerations:
• May need to compromise on size or location
• Smaller homes in your budget: $\${Math.round(homePrice * 0.85).toLocaleString()} - $\${Math.round(homePrice).toLocaleString()}
• Consider: Starter home → upgrade in 5-7 years

Next Steps:
1. Save for \${downPaymentPercent < 20 ? '20% down to avoid PMI' : 'even larger down payment (lower monthly payment)'}
2. Build 6-12 month emergency fund BEYOND down payment
3. Focus on neighborhoods with low property taxes
4. Consider 15-year mortgage if payment still comfortable

Your conservative approach will build wealth steadily and reduce stress!\`;

      } else if (budgetStyle === 'moderate') {
        recommendations = \`🎯 Moderate Strategy Recommendations:

Your Approach: Balancing comfortable home with financial flexibility.

Strengths:
• Reasonable monthly payment
• Still room for savings and lifestyle
• Not overextended but not overly cautious
• Healthy balance

Considerations:
• Budget range: $\${Math.round(homePrice * 0.9).toLocaleString()} - $\${Math.round(homePrice * 1.1).toLocaleString()}
• Aim for 15-20% down if possible
• Leave buffer for unexpected costs

Next Steps:
1. \${downPaymentPercent < 15 ? 'Save to 15-20% down payment (better rates, lower PMI)' : 'You have solid down payment - well positioned!'}
2. Build $10,000+ home emergency fund
3. Get pre-approved to confirm exact budget
4. Factor in total costs (taxes, insurance, HOA, maintenance)
5. Keep 3-6 months expenses in savings beyond down payment

Your balanced approach gives you a nice home while maintaining financial health!\`;

      } else {
        recommendations = \`🎯 Aggressive Strategy Recommendations:

Your Approach: Maximizing home budget, accepting tighter monthly finances.

⚠️ Important Warnings:
• Little room for error - job loss could be catastrophic
• May sacrifice retirement savings, travel, lifestyle
• "House poor" risk - can afford mortgage but nothing else
• High stress if unexpected expenses arise

This Works ONLY If:
✅ Rock-solid job security (tenured, in-demand skills)
✅ Zero other debt (cars, credit cards paid off)
✅ Dual income (partner can cover if you lose job)
✅ Disciplined budget (no lifestyle inflation)
✅ Large emergency fund (12+ months expenses)

Considerations:
• Budget: $\${Math.round(homePrice * 0.95).toLocaleString()} - $\${Math.round(homePrice).toLocaleString()} (stretch carefully!)
• Any income reduction = financial crisis
• Maintenance costs will hurt (no budget buffer)
• May delay retirement savings significantly

Safer Alternatives:
1. Drop to moderate budget ($\${Math.round(homePrice * 0.85).toLocaleString()}) - Much more comfortable
2. Increase income before buying (side hustle, promotion)
3. Buy starter home, upgrade in 5 years when income higher
4. Consider house hacking (rent room/basement to offset costs)

If Still Going Aggressive:
• Max out down payment (lower monthly payment)
• Build 12-month emergency fund FIRST
• Get multiple income streams
• Have backup plan if tight (can you refinance? rent it out?)

Proceed with caution - aggressive budgets fail when life happens!\`;
      }

      return [
        { label: 'Your Dream Home Budget', value: Math.round(homePrice), isCurrency: true },
        { label: 'Monthly Payment Breakdown', value: breakdown, isCurrency: false },
        { label: 'Financial Analysis', value: analysis, isCurrency: false },
        { label: 'Personalized Recommendations', value: recommendations, isCurrency: false },
      ];
    },
  },
};
