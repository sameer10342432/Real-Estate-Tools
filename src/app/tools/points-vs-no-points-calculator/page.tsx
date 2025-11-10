'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Points vs. No-Points Mortgage Calculator',
  description: 'Compare paying mortgage discount points upfront versus taking a zero-points loan to determine which option saves you more money',
  icon: '⚖️',
  category: 'Financial Planning',
  slug: 'points-vs-no-points-calculator',
  article: {
    title: 'Points vs. No-Points: Which Mortgage Option is Best?',
    content: `
      <p>When getting a mortgage, you'll face an important decision: pay discount points upfront to lower your interest rate, or take a higher rate with no points? This calculator helps you make the right choice based on your financial situation and how long you plan to keep the loan.</p>
      
      <h3>What Are Mortgage Discount Points?</h3>
      <p>Mortgage discount points (also called "buying down the rate") are fees you pay upfront to reduce your interest rate. Each point typically costs <strong>1% of the loan amount</strong> and usually reduces your rate by <strong>0.25% (25 basis points)</strong>, though this varies by lender and market conditions.</p>
      
      <p><strong>Example:</strong> On a $400,000 loan, 1 point = $4,000. If it lowers your rate from 7% to 6.75%, your monthly payment decreases by about $60.</p>
      
      <h3>Points vs. No-Points Comparison</h3>
      <p><strong>Paying Points (Lower Rate):</strong></p>
      <ul>
        <li>Higher upfront cost (points + closing costs)</li>
        <li>Lower interest rate</li>
        <li>Lower monthly payment</li>
        <li>Less total interest over loan term</li>
        <li>Better for long-term homeowners</li>
      </ul>
      
      <p><strong>No Points (Higher Rate):</strong></p>
      <ul>
        <li>Lower upfront cost (just closing costs)</li>
        <li>Higher interest rate</li>
        <li>Higher monthly payment</li>
        <li>More total interest over loan term</li>
        <li>Better if refinancing or selling soon</li>
      </ul>
      
      <h3>The Breakeven Point</h3>
      <p>The breakeven point is how many months it takes for your monthly payment savings to offset the cost of the points you paid upfront.</p>
      
      <p><strong>Formula:</strong> Breakeven Months = Points Cost / Monthly Payment Savings</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Points cost: $4,000</li>
        <li>Monthly savings: $60</li>
        <li>Breakeven: 4,000 / 60 = 67 months (5.6 years)</li>
      </ul>
      
      <p>If you keep the loan longer than 67 months, paying points saves money. If you refinance or sell before 67 months, you lose money on the points.</p>
      
      <h3>When to Pay Points</h3>
      <p>Paying mortgage points makes sense if:</p>
      <ul>
        <li><strong>Long-term ownership:</strong> You plan to keep the home and loan for 7+ years</li>
        <li><strong>Lower monthly payment priority:</strong> You need to reduce DTI for loan qualification</li>
        <li><strong>Extra cash available:</strong> You have funds beyond emergency savings and down payment</li>
        <li><strong>High interest rates:</strong> When rates are elevated, buying them down provides greater benefit</li>
        <li><strong>Tax deduction:</strong> Points are tax-deductible in the year paid (primary residence only)</li>
        <li><strong>Shorter breakeven:</strong> If breakeven is under 3-5 years and you'll stay longer</li>
      </ul>
      
      <h3>When to Skip Points</h3>
      <p>No-points mortgages make sense if:</p>
      <ul>
        <li><strong>Short-term ownership:</strong> You might refinance or sell within 5 years</li>
        <li><strong>Limited cash:</strong> You need funds for moving costs, repairs, or furnishings</li>
        <li><strong>Better investments:</strong> You can earn higher returns investing the cash elsewhere</li>
        <li><strong>Rate expectations:</strong> You expect rates to drop soon and plan to refinance</li>
        <li><strong>Uncertain plans:</strong> Job changes, family growth, or other life events might require moving</li>
        <li><strong>Long breakeven:</strong> If breakeven exceeds your expected ownership period</li>
      </ul>
      
      <h3>How Many Points Should You Pay?</h3>
      <p>Lenders typically offer 0 to 3 points. Each additional point provides diminishing returns:</p>
      <ul>
        <li><strong>0 points:</strong> Baseline rate (e.g., 7.00%)</li>
        <li><strong>1 point:</strong> -0.25% rate reduction (6.75%) - often the best value</li>
        <li><strong>2 points:</strong> -0.40% total reduction (6.60%) - diminishing returns</li>
        <li><strong>3 points:</strong> -0.50% total reduction (6.50%) - rarely worth it</li>
      </ul>
      
      <h3>Permanent Buydown vs. Temporary Buydown</h3>
      <p><strong>Permanent Buydown (Discount Points):</strong> Rate reduction lasts for the entire loan term. This is what we're calculating here.</p>
      <p><strong>Temporary Buydown (2-1 or 3-2-1):</strong> Rate is reduced for 1-3 years, then increases to the note rate. Common in new construction.</p>
      
      <h3>Tax Implications</h3>
      <p>Discount points on a primary residence are typically tax-deductible:</p>
      <ul>
        <li><strong>Purchase:</strong> Points fully deductible in the year paid</li>
        <li><strong>Refinance:</strong> Points amortized over the life of the loan</li>
        <li><strong>Second home:</strong> Points amortized over the life of the loan</li>
        <li><strong>Investment property:</strong> Points amortized over the life of the loan</li>
      </ul>
      
      <h3>Alternative Uses for Your Cash</h3>
      <p>Before paying points, consider these alternatives:</p>
      <ul>
        <li><strong>Larger down payment:</strong> 20% down eliminates PMI ($100-300/month savings)</li>
        <li><strong>Emergency fund:</strong> 6 months of expenses provides financial security</li>
        <li><strong>Home improvements:</strong> Adding value to the property or fixing deferred maintenance</li>
        <li><strong>Investments:</strong> Stock market historically returns 10% annually vs. 6-7% mortgage rate savings</li>
        <li><strong>Debt payoff:</strong> Eliminate high-interest credit cards (15-25% APR)</li>
      </ul>
      
      <h3>Real-World Scenarios</h3>
      <p><strong>Scenario 1 - First-Time Homebuyer:</strong> Limited cash, uncertain job stability → Skip points, preserve cash for emergencies and furnishings.</p>
      
      <p><strong>Scenario 2 - Forever Home:</strong> Planning to stay 20+ years, excellent cash reserves → Pay 1-2 points, save significantly over loan life.</p>
      
      <p><strong>Scenario 3 - Temporary Relocation:</strong> Moving for 3-5 years, then relocating → Skip points, breakeven too long for ownership period.</p>
      
      <p><strong>Scenario 4 - High Rate Environment:</strong> Rates at 7-8%, plan to refinance when rates drop → Skip points, refinance costs would negate savings.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'loanAmount', label: 'Loan Amount', type: 'number', defaultValue: '400000' },
      { name: 'loanTermYears', label: 'Loan Term (Years)', type: 'number', defaultValue: '30' },
      { name: 'noPointsRate', label: 'Interest Rate - No Points (%)', type: 'number', defaultValue: '7.00' },
      { name: 'pointsRate', label: 'Interest Rate - With Points (%)', type: 'number', defaultValue: '6.75' },
      { name: 'pointsCost', label: 'Total Points Cost ($)', type: 'number', defaultValue: '4000' },
      { name: 'yearsInHome', label: 'Expected Years in Home', type: 'number', defaultValue: '10' },
    ],
    results: [
      { label: 'No-Points Monthly Payment', isCurrency: true },
      { label: 'With-Points Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Breakeven Point', isCurrency: false },
      { label: 'Total Saved Over Expected Ownership', isCurrency: true },
      { label: 'Net Benefit/Loss', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const loanAmount = parseFloat(values.loanAmount) || 400000;
      const loanTermYears = parseFloat(values.loanTermYears) || 30;
      const noPointsRate = parseFloat(values.noPointsRate) / 100 || 0.07;
      const pointsRate = parseFloat(values.pointsRate) / 100 || 0.0675;
      const pointsCost = parseFloat(values.pointsCost) || 4000;
      const yearsInHome = parseFloat(values.yearsInHome) || 10;
      
      const months = loanTermYears * 12;
      const ownershipMonths = yearsInHome * 12;
      
      const noPointsMonthlyRate = noPointsRate / 12;
      const pointsMonthlyRate = pointsRate / 12;
      
      const noPointsPayment = loanAmount * (noPointsMonthlyRate * Math.pow(1 + noPointsMonthlyRate, months)) / (Math.pow(1 + noPointsMonthlyRate, months) - 1);
      const pointsPayment = loanAmount * (pointsMonthlyRate * Math.pow(1 + pointsMonthlyRate, months)) / (Math.pow(1 + pointsMonthlyRate, months) - 1);
      
      const monthlySavings = noPointsPayment - pointsPayment;
      const breakevenMonths = pointsCost / monthlySavings;
      const breakevenYears = breakevenMonths / 12;
      
      const totalSaved = monthlySavings * ownershipMonths;
      const netBenefit = totalSaved - pointsCost;
      
      let recommendation = 'Pay points - you\'ll save money over your ownership period';
      if (netBenefit < 0) {
        recommendation = 'Skip points - you won\'t break even before selling/refinancing';
      } else if (breakevenYears > yearsInHome * 0.7) {
        recommendation = 'Marginal benefit - consider other uses for cash';
      } else if (breakevenYears < 3) {
        recommendation = 'Excellent value - pay points for significant savings';
      }
      
      return [
        { label: 'No-Points Monthly Payment', value: noPointsPayment.toFixed(2), isCurrency: true },
        { label: 'With-Points Monthly Payment', value: pointsPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Breakeven Point', value: breakevenMonths.toFixed(0) + ' months (' + breakevenYears.toFixed(1) + ' years)', isCurrency: false },
        { label: 'Total Saved Over Expected Ownership', value: totalSaved.toFixed(2), isCurrency: true },
        { label: 'Net Benefit/Loss', value: netBenefit.toFixed(2), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Points vs. No-Points Mortgage Calculator',
    description: 'Compare paying mortgage points upfront vs taking zero-points loan. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function PointsVsNoPointsCalculatorPage() {
  return (
    <CalculatorLayout content={CONTENT}>
      <EnhancedCalculator
        title={CONTENT.title}
        slug={CONTENT.slug}
        category={CONTENT.category}
        description={CONTENT.description}
        inputs={CONTENT.calculator.fields}
        results={CONTENT.calculator.results}
        calculation={CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
