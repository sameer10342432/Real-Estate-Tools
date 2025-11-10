'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Rate-and-Term Refinance Calculator',
  description: 'Calculate whether refinancing to a lower interest rate saves you money - includes breakeven analysis and lifetime savings',
  icon: '🔄',
  category: 'Financial Planning',
  slug: 'rate-and-term-refinance-calculator',
  article: {
    title: 'Understanding Rate-and-Term Refinancing',
    content: `
      <p>A rate-and-term refinance replaces your existing mortgage with a new loan that has a different interest rate and/or loan term. Unlike a cash-out refinance, you don't take out additional money - you simply change the terms of your existing mortgage.</p>
      
      <h3>What is Rate-and-Term Refinancing?</h3>
      <p>Rate-and-term refinancing is the most common type of refinance. The goals are typically to:</p>
      <ul>
        <li><strong>Lower your interest rate</strong> to reduce monthly payments and total interest paid</li>
        <li><strong>Shorten your loan term</strong> (e.g., 30-year to 15-year) to build equity faster</li>
        <li><strong>Switch loan types</strong> (e.g., ARM to fixed-rate) for payment stability</li>
        <li><strong>Remove PMI</strong> if your home has appreciated to 20% equity</li>
      </ul>
      
      <h3>When Should You Refinance?</h3>
      <p><strong>The 1% Rule:</strong> Traditionally, refinancing made sense when rates dropped at least 1% below your current rate. Today, with closing costs ranging from $2,000-$6,000, even a 0.5% reduction can save significant money if you plan to stay in your home long enough.</p>
      
      <p><strong>Refinance if:</strong></p>
      <ul>
        <li>Interest rates have dropped since you bought your home</li>
        <li>Your credit score has improved 50+ points</li>
        <li>You want to eliminate PMI (reached 20% equity)</li>
        <li>You have an ARM and want to lock in a fixed rate</li>
        <li>You want to shorten your loan term without dramatically increasing payment</li>
        <li>The breakeven period is less than half your expected remaining ownership time</li>
      </ul>
      
      <p><strong>Don't refinance if:</strong></p>
      <ul>
        <li>You're planning to sell within 2-3 years</li>
        <li>Your credit score has dropped significantly</li>
        <li>Your home has lost significant value</li>
        <li>You're late in your loan term (past year 20 on a 30-year mortgage)</li>
        <li>Closing costs are excessive and breakeven is beyond your ownership timeline</li>
      </ul>
      
      <h3>The Breakeven Point</h3>
      <p>The breakeven point is how many months it takes for your monthly savings to offset the refinancing costs.</p>
      
      <p><strong>Formula:</strong> Breakeven Months = Closing Costs ÷ Monthly Savings</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Closing costs: $4,500</li>
        <li>Monthly savings: $200</li>
        <li>Breakeven: 4,500 ÷ 200 = 22.5 months (under 2 years)</li>
      </ul>
      
      <p>If you stay in the home longer than the breakeven period, you save money. Otherwise, refinancing costs you money.</p>
      
      <h3>Rate-and-Term Refinance Costs</h3>
      <p>Typical closing costs range from <strong>2% to 6% of the loan amount</strong>:</p>
      <ul>
        <li><strong>Appraisal:</strong> $400-$600</li>
        <li><strong>Origination fee:</strong> 0.5%-1% of loan amount</li>
        <li><strong>Title search and insurance:</strong> $700-$1,200</li>
        <li><strong>Credit report:</strong> $30-$50</li>
        <li><strong>Recording fees:</strong> $100-$300</li>
        <li><strong>Flood certification:</strong> $20-$50</li>
        <li><strong>Attorney fees:</strong> $500-$1,500 (some states)</li>
      </ul>
      
      <h3>No-Closing-Cost Refinance</h3>
      <p>Some lenders offer "no-closing-cost" refinances where they roll the fees into the loan balance or charge a slightly higher interest rate in exchange for covering closing costs. This can be attractive if:</p>
      <ul>
        <li>You don't have cash for closing costs</li>
        <li>You might refinance again soon</li>
        <li>Your breakeven calculation favors lower upfront costs</li>
      </ul>
      <p>However, you'll pay more total interest over the life of the loan.</p>
      
      <h3>30-Year vs. 15-Year Refinance</h3>
      <p><strong>30-Year Refinance:</strong></p>
      <ul>
        <li>Lower monthly payment</li>
        <li>Better cash flow flexibility</li>
        <li>More total interest paid</li>
        <li>Suitable if you prioritize low monthly obligations</li>
      </ul>
      
      <p><strong>15-Year Refinance:</strong></p>
      <ul>
        <li>Significantly higher monthly payment (30-50% more)</li>
        <li>Much less total interest (often 50-60% savings)</li>
        <li>Typically 0.25-0.50% lower interest rate than 30-year</li>
        <li>Builds equity much faster</li>
        <li>Loan paid off in half the time</li>
      </ul>
      
      <h3>Streamline Refinance Options</h3>
      <p><strong>FHA Streamline Refinance:</strong> If you have an FHA loan, you may qualify for a streamline refinance with:</p>
      <ul>
        <li>No appraisal required</li>
        <li>Minimal documentation</li>
        <li>Lower closing costs</li>
        <li>Must lower your monthly payment</li>
      </ul>
      
      <p><strong>VA IRRRL (Streamline):</strong> Veterans with VA loans can refinance with:</p>
      <ul>
        <li>No appraisal required</li>
        <li>No income verification</li>
        <li>No out-of-pocket costs (can be rolled in)</li>
        <li>Must result in lower payment or switch from ARM to fixed</li>
      </ul>
      
      <h3>PMI Removal Through Refinancing</h3>
      <p>If your home has appreciated and you now have 20% equity, refinancing can eliminate PMI, saving $100-$300+ per month. This alone can justify refinancing even if the interest rate is similar.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Original loan: $380,000 on $400,000 home (5% down)</li>
        <li>PMI: $250/month</li>
        <li>Home now worth: $450,000</li>
        <li>Current balance: $360,000</li>
        <li>New LTV: 80% (360k ÷ 450k)</li>
        <li>Refinance benefit: Eliminate $250/month PMI</li>
      </ul>
      
      <h3>Impact on Loan Amortization</h3>
      <p>When you refinance, you reset the amortization schedule. This means:</p>
      <ul>
        <li>Early in a new loan, most payment goes to interest</li>
        <li>If you're 10 years into a 30-year loan and refinance to another 30-year, you extend your payoff date by 10 years</li>
        <li>Consider refinancing to a shorter term to avoid losing progress</li>
      </ul>
      
      <p><strong>Smart Strategy:</strong> If you're 10 years into a 30-year mortgage, refinance to a 20-year or 15-year term to maintain or accelerate your payoff schedule.</p>
      
      <h3>Tax Implications</h3>
      <p><strong>Mortgage Interest Deduction:</strong> You can deduct interest on refinanced mortgage debt up to the original purchase price plus improvements. The Tax Cuts and Jobs Act of 2017 limits deductions to interest on $750,000 of mortgage debt ($375,000 if married filing separately).</p>
      
      <p><strong>Refinance Points Deduction:</strong> Unlike purchase mortgage points, refinance points must be deducted over the life of the loan (amortized), not in the year paid.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'currentLoanBalance', label: 'Current Loan Balance', type: 'number', defaultValue: '320000' },
      { name: 'currentInterestRate', label: 'Current Interest Rate (%)', type: 'number', defaultValue: '6.5' },
      { name: 'remainingLoanTermYears', label: 'Remaining Loan Term (Years)', type: 'number', defaultValue: '27' },
      { name: 'newInterestRate', label: 'New Interest Rate (%)', type: 'number', defaultValue: '5.875' },
      { name: 'newLoanTermYears', label: 'New Loan Term (Years)', type: 'number', defaultValue: '30' },
      { name: 'closingCosts', label: 'Estimated Closing Costs', type: 'number', defaultValue: '4500' },
    ],
    results: [
      { label: 'Current Monthly Payment', isCurrency: true },
      { label: 'New Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Breakeven Period', isCurrency: false },
      { label: 'Total Interest (Current Loan)', isCurrency: true },
      { label: 'Total Interest (New Loan)', isCurrency: true },
      { label: 'Net Savings After Closing Costs', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const currentBalance = parseFloat(values.currentLoanBalance) || 320000;
      const currentRate = parseFloat(values.currentInterestRate) / 100 || 0.065;
      const remainingYears = parseFloat(values.remainingLoanTermYears) || 27;
      const newRate = parseFloat(values.newInterestRate) / 100 || 0.05875;
      const newYears = parseFloat(values.newLoanTermYears) || 30;
      const closingCosts = parseFloat(values.closingCosts) || 4500;
      
      const remainingMonths = remainingYears * 12;
      const newMonths = newYears * 12;
      
      const currentMonthlyRate = currentRate / 12;
      const newMonthlyRate = newRate / 12;
      
      const currentPayment = currentBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, remainingMonths)) / (Math.pow(1 + currentMonthlyRate, remainingMonths) - 1);
      const newPayment = currentBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newMonths)) / (Math.pow(1 + newMonthlyRate, newMonths) - 1);
      
      const monthlySavings = currentPayment - newPayment;
      const breakevenMonths = closingCosts / monthlySavings;
      const breakevenYears = breakevenMonths / 12;
      
      const currentTotalInterest = (currentPayment * remainingMonths) - currentBalance;
      const newTotalInterest = (newPayment * newMonths) - currentBalance;
      const interestSavings = currentTotalInterest - newTotalInterest;
      const netSavings = interestSavings - closingCosts;
      
      let recommendation = 'Good refinance opportunity - proceed';
      if (netSavings < 0) {
        recommendation = 'Not recommended - costs exceed savings';
      } else if (breakevenYears > 5) {
        recommendation = 'Marginal benefit - only refinance if staying 7+ years';
      } else if (breakevenYears < 2) {
        recommendation = 'Excellent refinance opportunity - significant savings';
      } else if (newYears > remainingYears) {
        recommendation = 'Consider shorter term to avoid extending payoff date';
      }
      
      return [
        { label: 'Current Monthly Payment', value: currentPayment.toFixed(2), isCurrency: true },
        { label: 'New Monthly Payment', value: newPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Breakeven Period', value: breakevenMonths.toFixed(0) + ' months (' + breakevenYears.toFixed(1) + ' years)', isCurrency: false },
        { label: 'Total Interest (Current Loan)', value: currentTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Total Interest (New Loan)', value: newTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Net Savings After Closing Costs', value: netSavings.toFixed(2), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rate-and-Term Refinance Calculator',
    description: 'Calculate refinance savings, breakeven period, and monthly payment reduction. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function RateAndTermRefinanceCalculatorPage() {
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
