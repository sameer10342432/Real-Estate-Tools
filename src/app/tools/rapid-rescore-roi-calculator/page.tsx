'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Rapid Rescore ROI Calculator',
  description: 'Calculate the return on investment for rapid credit rescoring - see if boosting your score saves money on your mortgage',
  icon: '📈',
  category: 'Financial Planning',
  slug: 'rapid-rescore-roi-calculator',
  article: {
    title: 'Understanding Rapid Credit Rescoring',
    content: `
      <p>Rapid rescoring is a service that can quickly update your credit report with new positive information, potentially boosting your credit score in as little as 3-5 days instead of waiting 30-60 days for normal credit reporting cycles.</p>
      
      <h3>What is Rapid Rescore?</h3>
      <p>Rapid rescore (also called rapid credit update) is an expedited process where your mortgage lender requests that credit bureaus update your credit report with recent positive changes, such as:</p>
      <ul>
        <li>Paid-off credit card balances</li>
        <li>Corrected errors on your credit report</li>
        <li>Removed collections or charge-offs that were paid</li>
        <li>Updated account statuses</li>
      </ul>
      
      <h3>How Much Does Rapid Rescore Cost?</h3>
      <p>Rapid rescore typically costs between <strong>$30 to $100 per credit bureau</strong>. Since most lenders pull reports from all three bureaus (Equifax, Experian, TransUnion), expect to pay <strong>$90 to $300 total</strong>.</p>
      
      <h3>When is Rapid Rescore Worth It?</h3>
      <p>Rapid rescore makes financial sense when the cost of rescoring is much less than the money you'll save through a lower interest rate. For example:</p>
      <ul>
        <li><strong>Scenario 1:</strong> $100 rescore fee → 20 points higher credit score → 0.25% lower rate → $5,000 savings over loan life = <strong>5,000% ROI</strong></li>
        <li><strong>Scenario 2:</strong> $100 rescore fee → 10 points higher but stays in same rate tier → $0 savings = <strong>-100% ROI (not worth it)</strong></li>
      </ul>
      
      <h3>Credit Score Ranges and Mortgage Rates</h3>
      <p>Mortgage rates are tiered by credit score ranges. Crossing into a higher tier can save significant money:</p>
      <ul>
        <li><strong>760+:</strong> Best rates (typically 0.5-0.75% lower than 680)</li>
        <li><strong>740-759:</strong> Excellent rates</li>
        <li><strong>720-739:</strong> Good rates</li>
        <li><strong>700-719:</strong> Above average rates</li>
        <li><strong>680-699:</strong> Fair rates</li>
        <li><strong>660-679:</strong> Higher rates (FHA may be better)</li>
        <li><strong>640-659:</strong> High rates, limited options</li>
        <li><strong>620-639:</strong> Very high rates, FHA/VA only</li>
        <li><strong>Below 620:</strong> Very difficult to qualify</li>
      </ul>
      
      <h3>Steps to Maximize Rapid Rescore ROI</h3>
      <p><strong>1. Know your current credit score:</strong> Get your FICO scores from all three bureaus (Experian, Equifax, TransUnion).</p>
      <p><strong>2. Identify the issue:</strong> What's holding your score back? High credit card balances, recent late payments, errors?</p>
      <p><strong>3. Take corrective action:</strong> Pay down balances to below 30% utilization (ideally under 10%), dispute errors, pay off collections.</p>
      <p><strong>4. Provide proof:</strong> Get documentation showing the positive change (paid-off statement, dispute resolution letter).</p>
      <p><strong>5. Request rapid rescore:</strong> Your lender submits the documentation to credit bureaus for expedited processing.</p>
      <p><strong>6. Wait 3-5 days:</strong> Credit bureaus update your file and generate new scores.</p>
      <p><strong>7. Get re-quoted:</strong> Your lender pulls new credit and provides updated loan terms.</p>
      
      <h3>What You Can't Do with Rapid Rescore</h3>
      <p>Rapid rescore ONLY speeds up the reporting of factual, positive changes. It cannot:</p>
      <ul>
        <li>Remove accurate negative information</li>
        <li>Create new credit history that doesn't exist</li>
        <li>Bypass the credit scoring system</li>
        <li>Guarantee a specific score increase</li>
        <li>Fix all credit problems instantly</li>
      </ul>
      
      <h3>Best Actions for Credit Score Boost</h3>
      <p><strong>Pay down credit cards:</strong> Reducing utilization from 80% to 10% can boost scores by 40-100 points.</p>
      <p><strong>Remove authorized user accounts:</strong> If someone else's account is hurting your score, request removal.</p>
      <p><strong>Dispute errors:</strong> Incorrect late payments or accounts that aren't yours should be disputed immediately.</p>
      <p><strong>Pay off collections:</strong> Some scoring models ignore paid collections under $100.</p>
      
      <h3>Timeline Comparison</h3>
      <ul>
        <li><strong>Normal credit reporting:</strong> 30-60 days for changes to appear</li>
        <li><strong>Rapid rescore:</strong> 3-5 business days for updates</li>
        <li><strong>Credit repair:</strong> 3-6 months (disputes, rebuilding)</li>
      </ul>
      
      <h3>Is Rapid Rescore Right for You?</h3>
      <p>Rapid rescore makes sense if:</p>
      <ul>
        <li>You're 10-40 points away from the next credit tier</li>
        <li>You've recently paid off significant credit card debt</li>
        <li>There's an error on your report that can be quickly corrected</li>
        <li>You're closing on a home soon and can't wait 30-60 days</li>
        <li>The potential savings exceed the rescore cost by at least 10x</li>
      </ul>
      
      <p>Rapid rescore is NOT worth it if:</p>
      <ul>
        <li>You're already at 760+ (best rates tier)</li>
        <li>The score boost wouldn't change your rate tier</li>
        <li>You have no recent positive changes to report</li>
        <li>Your credit issues require long-term repair (bankruptcies, foreclosures)</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'loanAmount', label: 'Loan Amount', type: 'number', defaultValue: '350000' },
      { name: 'currentCreditScore', label: 'Current Credit Score', type: 'number', defaultValue: '695' },
      { name: 'projectedCreditScore', label: 'Projected Credit Score After Rescore', type: 'number', defaultValue: '720' },
      { name: 'currentInterestRate', label: 'Current Interest Rate (%)', type: 'number', defaultValue: '7.25' },
      { name: 'newInterestRate', label: 'New Interest Rate with Higher Score (%)', type: 'number', defaultValue: '6.875' },
      { name: 'loanTermYears', label: 'Loan Term (Years)', type: 'number', defaultValue: '30' },
      { name: 'rescoreCost', label: 'Rapid Rescore Cost (All 3 Bureaus)', type: 'number', defaultValue: '150' },
    ],
    results: [
      { label: 'Current Monthly Payment', isCurrency: true },
      { label: 'New Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Total Interest Saved (Over Loan Term)', isCurrency: true },
      { label: 'Net Savings (After Rescore Cost)', isCurrency: true },
      { label: 'Return on Investment (ROI)', isCurrency: false },
      { label: 'Breakeven Point', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const loanAmount = parseFloat(values.loanAmount) || 350000;
      const currentScore = parseFloat(values.currentCreditScore) || 695;
      const projectedScore = parseFloat(values.projectedCreditScore) || 720;
      const currentRate = parseFloat(values.currentInterestRate) / 100 || 0.0725;
      const newRate = parseFloat(values.newInterestRate) / 100 || 0.06875;
      const loanTermYears = parseFloat(values.loanTermYears) || 30;
      const rescoreCost = parseFloat(values.rescoreCost) || 150;
      
      const months = loanTermYears * 12;
      const currentMonthlyRate = currentRate / 12;
      const newMonthlyRate = newRate / 12;
      
      const currentPayment = loanAmount * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, months)) / (Math.pow(1 + currentMonthlyRate, months) - 1);
      const newPayment = loanAmount * (newMonthlyRate * Math.pow(1 + newMonthlyRate, months)) / (Math.pow(1 + newMonthlyRate, months) - 1);
      
      const monthlySavings = currentPayment - newPayment;
      const currentTotalInterest = (currentPayment * months) - loanAmount;
      const newTotalInterest = (newPayment * months) - loanAmount;
      const totalInterestSaved = currentTotalInterest - newTotalInterest;
      const netSavings = totalInterestSaved - rescoreCost;
      
      const roi = ((netSavings / rescoreCost) * 100);
      const breakevenMonths = Math.ceil(rescoreCost / monthlySavings);
      
      let recommendation = 'Excellent investment - proceed with rapid rescore';
      if (roi < 0) {
        recommendation = 'Not worth it - rescore cost exceeds savings';
      } else if (roi < 100) {
        recommendation = 'Marginal benefit - consider other options';
      } else if (roi < 500) {
        recommendation = 'Good investment if closing soon';
      }
      
      return [
        { label: 'Current Monthly Payment', value: currentPayment.toFixed(2), isCurrency: true },
        { label: 'New Monthly Payment', value: newPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Total Interest Saved (Over Loan Term)', value: totalInterestSaved.toFixed(2), isCurrency: true },
        { label: 'Net Savings (After Rescore Cost)', value: netSavings.toFixed(2), isCurrency: true },
        { label: 'Return on Investment (ROI)', value: roi.toFixed(0) + '%', isCurrency: false },
        { label: 'Breakeven Point', value: breakevenMonths + ' months', isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rapid Rescore ROI Calculator',
    description: 'Calculate ROI on rapid credit rescoring - see if boosting score saves money. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function RapidRescoreROICalculatorPage() {
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
