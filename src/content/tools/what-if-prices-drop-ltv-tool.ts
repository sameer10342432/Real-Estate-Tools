import { CalculatorContent } from '@/types';

export const WhatIfPricesDropLtvToolContent: CalculatorContent = {
  title: 'What if Prices Drop (LTV) Calculator',
  description: 'Calculate how falling home prices affect your loan-to-value ratio, equity, and potential underwater mortgage risk',
  icon: '📉',
  category: 'Additional Tools',
  slug: 'what-if-prices-drop-ltv-tool',
  
  metaTitle: 'What if Prices Drop Calculator - LTV & Equity Impact Analysis | Property Tools',
  metaDescription: 'Calculate how falling home prices affect your loan-to-value ratio, home equity, and underwater mortgage risk. Plan for market downturns and protect your investment.',
  
  article: {
    title: 'Understanding What Happens When Home Prices Drop',
    content: `
      <h2>What is the "What if Prices Drop" LTV Calculator?</h2>
      <p>This calculator helps you understand how declining property values affect your financial position, specifically your loan-to-value (LTV) ratio and home equity. It shows you exactly what happens to your mortgage if home prices fall by 5%, 10%, 20%, or more.</p>

      <h3>Why This Tool is Critical</h3>
      <p>Understanding your vulnerability to price drops is essential because:</p>
      <ul>
        <li><strong>Avoid Underwater Mortgages:</strong> Know when you'd owe more than your home is worth</li>
        <li><strong>Refinancing Risk:</strong> Higher LTV can prevent refinancing opportunities</li>
        <li><strong>Selling Constraints:</strong> Negative equity means you can't sell without bringing cash</li>
        <li><strong>Market Timing:</strong> Make informed decisions about buying or holding</li>
        <li><strong>Emergency Planning:</strong> Prepare for worst-case scenarios</li>
      </ul>

      <h3>What is Loan-to-Value (LTV)?</h3>
      <p>LTV is the ratio of your mortgage balance to your home's current value, expressed as a percentage.</p>
      <p><strong>Formula:</strong> LTV = (Loan Balance ÷ Home Value) × 100</p>
      
      <h4>LTV Examples:</h4>
      <ul>
        <li><strong>80% LTV:</strong> $200,000 loan on $250,000 home (typical purchase with 20% down)</li>
        <li><strong>95% LTV:</strong> $190,000 loan on $200,000 home (high-risk, minimal equity)</li>
        <li><strong>105% LTV:</strong> $210,000 loan on $200,000 home (underwater mortgage)</li>
      </ul>

      <h3>LTV Thresholds & What They Mean</h3>
      <p><strong>Below 80% LTV:</strong> ✅ Excellent position</p>
      <ul>
        <li>No PMI required (conventional loans)</li>
        <li>Easy to refinance</li>
        <li>Can sell without bringing cash to close</li>
        <li>Cushion against price drops</li>
      </ul>

      <p><strong>80-90% LTV:</strong> ⚠️ Moderate risk</p>
      <ul>
        <li>PMI required for conventional loans</li>
        <li>Limited equity buffer</li>
        <li>Vulnerable to small price declines</li>
      </ul>

      <p><strong>90-100% LTV:</strong> 🚨 High risk</p>
      <ul>
        <li>Minimal equity cushion</li>
        <li>Any price drop creates risk of being underwater</li>
        <li>Difficult to refinance</li>
        <li>May need cash to sell</li>
      </ul>

      <p><strong>Above 100% LTV:</strong> ❌ Underwater (Negative Equity)</p>
      <ul>
        <li>You owe more than the home is worth</li>
        <li>Cannot sell without bringing cash</li>
        <li>Cannot refinance (except special programs)</li>
        <li>Risk of foreclosure if unable to make payments</li>
      </ul>

      <h3>Historical Home Price Declines</h3>
      
      <h4>2008-2012 Housing Crisis</h4>
      <p>National average prices fell approximately <strong>27% from peak to trough</strong>. Many markets experienced even steeper drops:</p>
      <ul>
        <li><strong>Las Vegas, NV:</strong> -62% decline</li>
        <li><strong>Phoenix, AZ:</strong> -56% decline</li>
        <li><strong>Miami, FL:</strong> -51% decline</li>
        <li><strong>Detroit, MI:</strong> -47% decline</li>
        <li><strong>California (many areas):</strong> -40% to -50%</li>
      </ul>

      <h4>Other Notable Declines</h4>
      <ul>
        <li><strong>1990-1997 (Some markets):</strong> 10-20% declines</li>
        <li><strong>COVID-19 (Brief):</strong> 2-5% in some urban areas (quickly recovered)</li>
        <li><strong>2022-2023 (Some markets):</strong> 5-15% from peak as rates rose</li>
      </ul>

      <h3>How to Use This Calculator</h3>
      <p><strong>Step 1:</strong> Enter your home's current market value</p>
      <p><strong>Step 2:</strong> Enter your current mortgage balance</p>
      <p><strong>Step 3:</strong> Enter the percentage decline you want to model (5%, 10%, 20%, etc.)</p>
      <p><strong>Step 4:</strong> Review your new LTV, equity, and risk assessment</p>

      <h3>Understanding the Results</h3>
      
      <h4>Current LTV</h4>
      <p>Your starting point - how much equity you have right now</p>

      <h4>New Home Value After Decline</h4>
      <p>What your home would be worth after the price drop</p>

      <h4>New LTV After Decline</h4>
      <p>Your loan-to-value ratio in the new market conditions</p>

      <h4>Remaining Equity or Negative Equity</h4>
      <ul>
        <li><strong>Positive number:</strong> Your equity cushion (good)</li>
        <li><strong>Negative number:</strong> How much underwater you are (bad)</li>
      </ul>

      <h4>Amount Needed to Sell</h4>
      <p>If underwater, this is the cash you'd need to bring to closing to sell the property</p>

      <h3>What to Do in Different Scenarios</h3>
      
      <h4>If LTV Stays Below 80%</h4>
      <ul>
        <li>✅ You're in good shape</li>
        <li>Continue building equity through payments</li>
        <li>Consider opportunistic buying if prices drop further</li>
        <li>No urgent action needed</li>
      </ul>

      <h4>If LTV Goes to 80-95%</h4>
      <ul>
        <li>⚠️ Moderate concern</li>
        <li>Accelerate principal payments if possible</li>
        <li>Avoid taking out additional loans against the property</li>
        <li>Build emergency fund in case of job loss</li>
        <li>Hold long-term to ride out market fluctuations</li>
      </ul>

      <h4>If You Go Underwater (LTV Above 100%)</h4>
      <ul>
        <li>🚨 Serious situation requiring action</li>
        <li><strong>Don't Panic:</strong> Continue making payments if you can afford them</li>
        <li><strong>Stay Put:</strong> Markets historically recover over time</li>
        <li><strong>Avoid Selling:</strong> Unless absolutely necessary (job relocation, etc.)</li>
        <li><strong>Accelerate Payments:</strong> Pay down principal faster if possible</li>
        <li><strong>Look into HARP/HAMP:</strong> Government refinance programs for underwater homeowners</li>
        <li><strong>Short Sale:</strong> Last resort if you cannot afford payments</li>
      </ul>

      <h3>Strategies to Protect Against Price Drops</h3>
      
      <h4>Before You Buy</h4>
      <ul>
        <li><strong>Larger Down Payment:</strong> 20%+ gives you equity buffer</li>
        <li><strong>Buy Below Market:</strong> Negotiate aggressively to build instant equity</li>
        <li><strong>Avoid Peak Markets:</strong> Don't buy at the top of a bubble</li>
        <li><strong>Long-Term Horizon:</strong> Only buy if you can stay 5-7+ years</li>
      </ul>

      <h4>After You Buy</h4>
      <ul>
        <li><strong>Extra Principal Payments:</strong> Build equity faster</li>
        <li><strong>Home Improvements:</strong> Add value to offset market declines</li>
        <li><strong>Biweekly Payments:</strong> Pay down loan faster</li>
        <li><strong>Refinance When Low LTV:</strong> Lock in lower rates when you have equity</li>
      </ul>

      <h3>When Market Declines Don't Matter</h3>
      <p>A price drop is only a "paper loss" if:</p>
      <ul>
        <li>You can continue making payments comfortably</li>
        <li>You don't need to sell in the near term</li>
        <li>You're not planning to refinance</li>
        <li>You're thinking long-term (7+ years)</li>
      </ul>
      <p>Markets are cyclical. If you can wait out a downturn, history shows prices eventually recover and often exceed previous highs.</p>

      <h3>Red Flags That You're Vulnerable</h3>
      <ul>
        <li>❌ Bought with less than 10% down</li>
        <li>❌ Used 100% financing (VA, USDA, etc.)</li>
        <li>❌ Bought at the peak of a rapidly appreciating market</li>
        <li>❌ Cashed out equity through refinancing</li>
        <li>❌ Purchased in markets with recent 15%+ annual appreciation</li>
        <li>❌ Job instability or risk of relocation</li>
        <li>❌ Tight monthly budget with no emergency fund</li>
      </ul>

      <h3>Real-World Example</h3>
      <p><strong>Scenario:</strong> You bought a $400,000 home with 5% down ($20,000)</p>
      <ul>
        <li>Mortgage: $380,000</li>
        <li>Current LTV: 95%</li>
        <li>Current equity: $20,000</li>
      </ul>

      <p><strong>If prices drop 10%:</strong></p>
      <ul>
        <li>New home value: $360,000</li>
        <li>New LTV: 105.6%</li>
        <li>Equity: -$20,000 (underwater)</li>
        <li>Cash needed to sell: $20,000 + closing costs</li>
      </ul>

      <p>This is why larger down payments matter - they create a buffer against market volatility.</p>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Can I refinance if I'm underwater?</h4>
      <p>Standard refinancing requires equity. However, government programs like HARP (Home Affordable Refinance Program) were created specifically for underwater homeowners. Contact your lender about available options.</p>

      <h4>What if I absolutely must sell while underwater?</h4>
      <p>Options include:</p>
      <ul>
        <li><strong>Bring cash to closing:</strong> Pay the difference yourself</li>
        <li><strong>Short sale:</strong> Negotiate with lender to accept less (damages credit)</li>
        <li><strong>Deed in lieu:</strong> Give property back to lender (last resort)</li>
      </ul>

      <h4>How long does it typically take to recover from price drops?</h4>
      <p>Historical data shows:</p>
      <ul>
        <li>Minor corrections (5-10%): 1-3 years</li>
        <li>Moderate declines (10-20%): 3-5 years</li>
        <li>Major crashes (20%+): 5-10 years</li>
      </ul>
      <p>Recovery time varies significantly by market and economic conditions.</p>

      <p><strong>Model different price decline scenarios to understand your risk and plan accordingly. Knowledge is power when it comes to protecting your largest investment.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'currentHomeValue',
        label: 'Current Home Value',
        type: 'number',
        defaultValue: '400000',
        placeholder: '400000',
      },
      {
        name: 'currentMortgageBalance',
        label: 'Current Mortgage Balance',
        type: 'number',
        defaultValue: '380000',
        placeholder: '380000',
      },
      {
        name: 'priceDeclinePercent',
        label: 'Price Decline Percentage',
        type: 'number',
        defaultValue: '10',
        placeholder: '10',
      },
    ],
    results: [
      { label: 'Current LTV', isCurrency: false },
      { label: 'Current Equity', isCurrency: true },
      { label: 'New Home Value After Decline', isCurrency: true },
      { label: 'New LTV After Decline', isCurrency: false },
      { label: 'Remaining Equity (or Negative Equity)', isCurrency: true },
      { label: 'Risk Assessment', isCurrency: false },
      { label: 'Amount Needed to Sell (if underwater)', isCurrency: true },
    ],
    calculate: (values) => {
      const currentHomeValue = Number(values.currentHomeValue) || 0;
      const currentMortgageBalance = Number(values.currentMortgageBalance) || 0;
      const priceDeclinePercent = Number(values.priceDeclinePercent) || 0;

      const currentLTV = currentHomeValue > 0 ? (currentMortgageBalance / currentHomeValue) * 100 : 0;
      const currentEquity = currentHomeValue - currentMortgageBalance;

      const newHomeValue = currentHomeValue * (1 - priceDeclinePercent / 100);
      const newLTV = newHomeValue > 0 ? (currentMortgageBalance / newHomeValue) * 100 : 0;
      const newEquity = newHomeValue - currentMortgageBalance;

      let riskAssessment = '';
      if (newLTV < 80) {
        riskAssessment = '✅ Safe - Strong equity position';
      } else if (newLTV >= 80 && newLTV < 90) {
        riskAssessment = '⚠️ Moderate Risk - Limited equity buffer';
      } else if (newLTV >= 90 && newLTV < 100) {
        riskAssessment = '🚨 High Risk - Minimal equity';
      } else {
        riskAssessment = '❌ UNDERWATER - Negative equity';
      }

      const amountNeededToSell = newEquity < 0 ? Math.abs(newEquity) : 0;

      return [
        { label: 'Current LTV', value: `${currentLTV.toFixed(2)}%`, isCurrency: false },
        { label: 'Current Equity', value: currentEquity.toFixed(2), isCurrency: true },
        { label: 'New Home Value After Decline', value: newHomeValue.toFixed(2), isCurrency: true },
        { label: 'New LTV After Decline', value: `${newLTV.toFixed(2)}%`, isCurrency: false },
        { label: 'Remaining Equity (or Negative Equity)', value: newEquity.toFixed(2), isCurrency: true },
        { label: 'Risk Assessment', value: riskAssessment, isCurrency: false },
        { label: 'Amount Needed to Sell (if underwater)', value: amountNeededToSell > 0 ? amountNeededToSell.toFixed(2) : 'N/A - You have positive equity', isCurrency: amountNeededToSell > 0 },
      ];
    },
  },
};
