import { CalculatorContent } from '@/types';

export const REFINANCE_RATE_DROP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'What if Rates Drop (Refinance) Tool',
  description: 'Calculate potential savings and break-even timeline if mortgage rates drop and you refinance',
  icon: 'Icon',
  category: 'Mortgage & Financing',
  slug: 'refinance-rate-drop-calculator',
  article: {
    title: "Planning for Future Rate Drops: Refinance Strategy",
    content: `
    <h2>When Should You Refinance?</h2>
    <p>The classic rule of thumb is to refinance when rates drop by 0.5-1%, but the real answer depends on your loan amount, remaining term, closing costs, and how long you plan to stay in the home.</p>
    
    <h3>Key Refinance Metrics</h3>
    
    <h4>Break-Even Point</h4>
    <p>The number of months it takes for your monthly savings to exceed your refinance closing costs.</p>
    <p><strong>Formula:</strong> Closing Costs ÷ Monthly Savings = Break-Even Months</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Closing Costs: $3,500</li>
      <li>Monthly Savings: $175</li>
      <li>Break-Even: 20 months</li>
      <li><strong>Decision:</strong> If staying 20+ months, refinance makes sense</li>
    </ul>
    
    <h3>Refinance Scenarios by Rate Drop</h3>
    
    <h4>0.25% Rate Drop</h4>
    <ul>
      <li><strong>$200K loan:</strong> ~$30/month savings</li>
      <li><strong>Verdict:</strong> Usually not worth it unless no-cost refi</li>
    </ul>
    
    <h4>0.50% Rate Drop</h4>
    <ul>
      <li><strong>$200K loan:</strong> ~$60/month savings</li>
      <li><strong>$400K loan:</strong> ~$120/month savings</li>
      <li><strong>Verdict:</strong> Worth considering with low closing costs</li>
    </ul>
    
    <h4>0.75% Rate Drop</h4>
    <ul>
      <li><strong>$200K loan:</strong> ~$90/month savings</li>
      <li><strong>$400K loan:</strong> ~$180/month savings</li>
      <li><strong>Verdict:</strong> Strong candidate for refinance</li>
    </ul>
    
    <h4>1.0%+ Rate Drop</h4>
    <ul>
      <li><strong>$200K loan:</strong> ~$120+/month savings</li>
      <li><strong>$400K loan:</strong> ~$240+/month savings</li>
      <li><strong>Verdict:</strong> Refinance immediately (if qualified)</li>
    </ul>
    
    <h3>Types of Refinances</h3>
    
    <h4>Rate-and-Term Refinance</h4>
    <ul>
      <li>Lower your rate or change loan term</li>
      <li>Lowest closing costs (~2-3% of loan)</li>
      <li>No cash out</li>
      <li><strong>Best for:</strong> Pure rate reduction strategy</li>
    </ul>
    
    <h4>Cash-Out Refinance</h4>
    <ul>
      <li>Take equity out as cash</li>
      <li>Higher closing costs (~3-6% of new loan)</li>
      <li>Larger loan balance</li>
      <li><strong>Best for:</strong> Home improvements, debt consolidation</li>
    </ul>
    
    <h4>No-Closing-Cost Refinance</h4>
    <ul>
      <li>Lender pays closing costs</li>
      <li>Slightly higher interest rate (0.25-0.50%)</li>
      <li>Good if moving within 2-3 years</li>
    </ul>
    
    <h3>Refinance Costs to Expect</h3>
    <ul>
      <li><strong>Appraisal:</strong> $400-$700</li>
      <li><strong>Origination Fee:</strong> 0.5-1% of loan</li>
      <li><strong>Title Insurance:</strong> $800-$1,500</li>
      <li><strong>Recording Fees:</strong> $100-$300</li>
      <li><strong>Credit Report:</strong> $30-$100</li>
      <li><strong>Total:</strong> Typically 2-5% of loan amount</li>
    </ul>
    
    <h3>When NOT to Refinance (Even if Rates Drop)</h3>
    <ul>
      <li>Planning to move within 1-2 years (won't hit break-even)</li>
      <li>Already refinanced within last 12 months (costs too recent)</li>
      <li>Credit score dropped significantly (won't qualify for best rate)</li>
      <li>Home value declined below 80% LTV (may require PMI)</li>
      <li>Very late in mortgage term (most interest already paid)</li>
    </ul>
    
    <h3>Refinance Timing Strategy</h3>
    <ol>
      <li><strong>Monitor Rates:</strong> Track mortgage rates weekly</li>
      <li><strong>Lock at 0.75%+ Drop:</strong> Strong savings opportunity</li>
      <li><strong>Pre-Qualify Early:</strong> Be ready when rates drop</li>
      <li><strong>Consider Rate Locks:</strong> 60-90 day locks during declining rate environment</li>
      <li><strong>Shop Multiple Lenders:</strong> Rates vary by 0.25-0.50%</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentLoanBalance",
        label: "Current Loan Balance ($)",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "currentRate",
        label: "Current Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "newRate",
        label: "Potential New Rate (%)",
        type: "number",
        placeholder: "5.75",
        defaultValue: "5.75",
      },
      {
        name: "remainingYears",
        label: "Remaining Loan Term (years)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "refinanceCosts",
        label: "Estimated Refinance Costs ($)",
        type: "number",
        placeholder: "4500",
        defaultValue: "4500",
      },
      {
        name: "planToStayYears",
        label: "Plan to Stay in Home (years)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
    ],
    results: [
      { label: "Current Monthly Payment", isCurrency: true },
      { label: "New Monthly Payment", isCurrency: true },
      { label: "Monthly Savings", isCurrency: true },
      { label: "Break-Even Point", isCurrency: false },
      { label: "Total Savings Over Stay Period", isCurrency: true },
      { label: "Refinance Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanBalance = Number(data.currentLoanBalance) || 300000;
      const currentRate = Number(data.currentRate) / 100 || 0.065;
      const newRate = Number(data.newRate) / 100 || 0.0575;
      const remainingYears = Number(data.remainingYears) || 25;
      const refinanceCosts = Number(data.refinanceCosts) || 4500;
      const planToStayYears = Number(data.planToStayYears) || 7;
      
      const remainingMonths = remainingYears * 12;
      const planToStayMonths = planToStayYears * 12;
      
      // Calculate current monthly payment
      const currentMonthlyRate = currentRate / 12;
      const currentPayment = loanBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, remainingMonths)) / 
                            (Math.pow(1 + currentMonthlyRate, remainingMonths) - 1);
      
      // Calculate new monthly payment (assume same term length)
      const newMonthlyRate = newRate / 12;
      const newPayment = loanBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, remainingMonths)) / 
                        (Math.pow(1 + newMonthlyRate, remainingMonths) - 1);
      
      const monthlySavings = currentPayment - newPayment;
      const breakEvenMonths = monthlySavings > 0 ? refinanceCosts / monthlySavings : 999;
      
      // Total savings over stay period (savings - costs)
      const totalMonthlySavings = monthlySavings * planToStayMonths;
      const netSavings = totalMonthlySavings - refinanceCosts;
      
      // Recommendation
      let recommendation = "";
      const rateDrop = (currentRate - newRate) * 100;
      
      if (breakEvenMonths > planToStayMonths) {
        recommendation = `❌ Don't Refinance - Won't break even (need ${breakEvenMonths.toFixed(0)} months, staying ${planToStayMonths})`;
      } else if (breakEvenMonths <= 12 && netSavings > 10000) {
        recommendation = `🚀 DEFINITELY REFINANCE - Break even in ${breakEvenMonths.toFixed(0)} months, save $${netSavings.toFixed(0)} total!`;
      } else if (breakEvenMonths <= 24 && netSavings > 5000) {
        recommendation = `✅ Refinance Recommended - Break even in ${breakEvenMonths.toFixed(0)} months, save $${netSavings.toFixed(0)} total`;
      } else if (netSavings > 2000) {
        recommendation = `👍 Consider Refinancing - Modest savings of $${netSavings.toFixed(0)} over ${planToStayYears} years`;
      } else if (netSavings > 0) {
        recommendation = `⚠️ Marginal Benefit - Only $${netSavings.toFixed(0)} savings. Consider no-cost refi only`;
      } else {
        recommendation = `❌ Don't Refinance - Would lose $${Math.abs(netSavings).toFixed(0)} over your planned stay`;
      }

      return [
        { label: "Current Monthly Payment", value: currentPayment.toFixed(0), isCurrency: true },
        { label: "New Monthly Payment", value: newPayment.toFixed(0), isCurrency: true },
        { label: "Monthly Savings", value: monthlySavings.toFixed(0), isCurrency: true },
        { label: "Break-Even Point", value: `${breakEvenMonths.toFixed(0)} months (${(breakEvenMonths / 12).toFixed(1)} years)`, isCurrency: false },
        { label: "Total Savings Over Stay Period", value: netSavings.toFixed(0), isCurrency: true },
        { label: "Refinance Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};