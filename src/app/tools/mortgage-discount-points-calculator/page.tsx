'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Mortgage Discount Points Calculator',
  description: 'Calculate mortgage discount points cost, rate reduction, monthly savings, and breakeven period',
  icon: '💰',
  category: 'Financial Planning',
  slug: 'mortgage-discount-points-calculator',
  article: {
    title: 'Complete Guide to Mortgage Discount Points',
    content: `
      <p>Mortgage discount points are upfront fees paid to the lender at closing to reduce (or "buy down") your interest rate. Understanding how points work and whether they're worth it can save you thousands of dollars over the life of your loan.</p>
      
      <h3>What Are Mortgage Discount Points?</h3>
      <p>One discount point equals <strong>1% of your loan amount</strong>. For example, on a $300,000 mortgage, 1 point costs $3,000. Paying points typically reduces your interest rate by <strong>0.25% per point</strong>, though the exact discount varies by lender and market conditions.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Loan amount: $300,000</li>
        <li>Base rate: 7.00%</li>
        <li>1 point ($3,000) → 6.75% rate</li>
        <li>2 points ($6,000) → 6.50% rate</li>
        <li>3 points ($9,000) → 6.25% rate</li>
      </ul>
      
      <h3>How Discount Points Work</h3>
      <p>When you pay discount points, you're prepaying some of the interest you would otherwise pay over the life of the loan. This permanently lowers your interest rate and monthly payment.</p>
      
      <p><strong>Math Behind Points:</strong></p>
      <ul>
        <li><strong>7.00% rate:</strong> $1,996/month payment</li>
        <li><strong>Pay $3,000 for 6.75% rate:</strong> $1,946/month payment</li>
        <li><strong>Monthly savings:</strong> $50</li>
        <li><strong>Breakeven:</strong> 60 months (5 years)</li>
      </ul>
      
      <h3>Types of Points</h3>
      <p><strong>1. Discount Points (Buy-Down Points):</strong> Reduce your interest rate permanently. Tax-deductible for primary residence purchases.</p>
      <p><strong>2. Origination Points:</strong> Lender fees for processing the loan (not a rate reduction). Sometimes called "origination fees."</p>
      <p><strong>3. Negative Points (Lender Credits):</strong> Accept a higher rate in exchange for the lender covering some closing costs.</p>
      
      <h3>Standard Point Pricing</h3>
      <p>While it varies by lender and market, standard point pricing often follows this pattern:</p>
      <ul>
        <li><strong>0 points:</strong> Base interest rate (e.g., 7.00%)</li>
        <li><strong>1 point:</strong> -0.25% rate reduction (6.75%)</li>
        <li><strong>2 points:</strong> -0.45% rate reduction (6.55%)</li>
        <li><strong>3 points:</strong> -0.60% rate reduction (6.40%)</li>
      </ul>
      <p>Notice the diminishing returns - each additional point provides less rate reduction.</p>
      
      <h3>When Should You Pay Discount Points?</h3>
      <p><strong>Pay points if:</strong></p>
      <ul>
        <li>You plan to keep the loan for 7+ years (past breakeven)</li>
        <li>You have extra cash beyond down payment and emergency fund</li>
        <li>You want to lower monthly payment to improve DTI for qualification</li>
        <li>Interest rates are high (the rate reduction provides greater lifetime savings)</li>
        <li>You're buying a forever home and won't refinance soon</li>
        <li>You value predictability and lower long-term costs</li>
      </ul>
      
      <p><strong>Skip points if:</strong></p>
      <ul>
        <li>You'll refinance or sell within 5 years</li>
        <li>You need cash for home improvements, furnishings, or emergencies</li>
        <li>You expect rates to drop and plan to refinance</li>
        <li>You can invest the money elsewhere for higher returns</li>
        <li>You're buying a starter home and will upgrade later</li>
        <li>Your employment or location is uncertain</li>
      </ul>
      
      <h3>Calculating Your Breakeven Point</h3>
      <p>The breakeven point is when your accumulated monthly savings equal the upfront cost of the points.</p>
      
      <p><strong>Formula:</strong> Breakeven (months) = Points Cost ÷ Monthly Savings</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Points cost: $5,000</li>
        <li>Monthly savings: $75</li>
        <li>Breakeven: 5,000 ÷ 75 = 67 months (5.6 years)</li>
      </ul>
      
      <h3>Tax Deductibility of Discount Points</h3>
      <p><strong>Primary Residence Purchase:</strong> Discount points are fully deductible in the year paid (with some restrictions).</p>
      <p><strong>Refinance Loan:</strong> Points must be deducted over the life of the loan (amortized).</p>
      <p><strong>Second Home:</strong> Points amortized over the life of the loan.</p>
      <p><strong>Investment Property:</strong> Points amortized over the life of the loan.</p>
      
      <p><strong>IRS Requirements for Deducting Points:</strong></p>
      <ul>
        <li>The loan must be secured by your main home</li>
        <li>Paying points must be an established practice in your area</li>
        <li>The points can't exceed the amount generally charged</li>
        <li>You use the cash method of accounting</li>
        <li>Points aren't paid for items separately stated on settlement (like appraisal, inspection)</li>
        <li>Funds you provide at closing must be at least as much as the points charged</li>
      </ul>
      
      <h3>How to Negotiate Points with Your Lender</h3>
      <p><strong>1. Get multiple quotes:</strong> Compare point pricing from 3-5 lenders to find the best deal.</p>
      <p><strong>2. Ask about seller-paid points:</strong> In a buyer's market, sellers may pay 1-2 points to help close the sale.</p>
      <p><strong>3. Request a lender credit:</strong> Accept a slightly higher rate in exchange for covering some closing costs (opposite of buying points).</p>
      <p><strong>4. Shop for lower fees:</strong> Some lenders charge fewer origination points or have lower overall fees.</p>
      <p><strong>5. Negotiate total package:</strong> Don't just focus on points - compare APR, which includes both rate and fees.</p>
      
      <h3>Discount Points vs. Making Extra Payments</h3>
      <p>Instead of paying points upfront, you could keep that cash and make extra principal payments. Here's a comparison:</p>
      
      <p><strong>Paying 1 Point ($4,000):</strong></p>
      <ul>
        <li>Lower rate for entire loan term</li>
        <li>Guaranteed savings if you stay past breakeven</li>
        <li>Lower monthly payment improves cash flow</li>
        <li>Tax-deductible upfront (purchase only)</li>
      </ul>
      
      <p><strong>Extra $4,000 Principal Payment:</strong></p>
      <ul>
        <li>Immediate equity boost</li>
        <li>Flexibility to make payments when convenient</li>
        <li>Reduces loan balance faster</li>
        <li>Can be repeated or stopped anytime</li>
      </ul>
      
      <h3>Fractional Points</h3>
      <p>You don't have to buy whole points. Many lenders offer fractional points:</p>
      <ul>
        <li><strong>0.5 points:</strong> Half the cost, roughly half the rate reduction</li>
        <li><strong>0.25 points:</strong> Quarter the cost, smaller rate reduction</li>
        <li><strong>1.5 points or 2.5 points:</strong> Common options with proportional pricing</li>
      </ul>
      
      <h3>Refinancing and Points</h3>
      <p>If you're refinancing, consider these factors when deciding on points:</p>
      <ul>
        <li><strong>No-cash-out refinance:</strong> Points can be rolled into the loan amount</li>
        <li><strong>Cash-out refinance:</strong> Weigh points cost against cash you're extracting</li>
        <li><strong>Rate improvement:</strong> If refinancing from 8% to 6%, points provide less relative benefit</li>
        <li><strong>Remaining term:</strong> If you have 15 years left, breakeven period is critical</li>
      </ul>
      
      <h3>Common Mistakes to Avoid</h3>
      <p><strong>1. Paying points on a short-term loan:</strong> If you're likely to refinance or sell soon, points are usually a bad investment.</p>
      <p><strong>2. Confusing discount points with origination fees:</strong> Only discount points lower your rate.</p>
      <p><strong>3. Depleting emergency savings:</strong> Keep 6 months of expenses liquid before paying points.</p>
      <p><strong>4. Ignoring investment alternatives:</strong> If you can earn 10% in the stock market vs. saving 7% on a mortgage, investing might be better.</p>
      <p><strong>5. Not comparing APR:</strong> APR includes rate and fees, giving you the true cost comparison.</p>
    `
  },
  calculator: {
    fields: [
      { name: 'loanAmount', label: 'Loan Amount', type: 'number', defaultValue: '350000' },
      { name: 'baseInterestRate', label: 'Base Interest Rate (%) - No Points', type: 'number', defaultValue: '7.00' },
      { name: 'numberOfPoints', label: 'Number of Discount Points to Purchase', type: 'number', defaultValue: '2' },
      { name: 'rateReductionPerPoint', label: 'Rate Reduction Per Point (%)', type: 'number', defaultValue: '0.25' },
      { name: 'loanTermYears', label: 'Loan Term (Years)', type: 'number', defaultValue: '30' },
    ],
    results: [
      { label: 'Total Points Cost', isCurrency: true },
      { label: 'New Interest Rate (After Points)', isCurrency: false },
      { label: 'Monthly Payment (No Points)', isCurrency: true },
      { label: 'Monthly Payment (With Points)', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Breakeven Period', isCurrency: false },
      { label: 'Total Interest Saved (Over Loan Term)', isCurrency: true },
      { label: 'Net Savings After Points Cost', isCurrency: true },
    ],
    calculate: (values: any) => {
      const loanAmount = parseFloat(values.loanAmount) || 350000;
      const baseRate = parseFloat(values.baseInterestRate) / 100 || 0.07;
      const numberOfPoints = parseFloat(values.numberOfPoints) || 2;
      const rateReductionPerPoint = parseFloat(values.rateReductionPerPoint) / 100 || 0.0025;
      const loanTermYears = parseFloat(values.loanTermYears) || 30;
      
      const pointsCost = (loanAmount * (numberOfPoints / 100));
      const newRate = baseRate - (numberOfPoints * rateReductionPerPoint);
      const months = loanTermYears * 12;
      
      const baseMonthlyRate = baseRate / 12;
      const newMonthlyRate = newRate / 12;
      
      const noPointsPayment = loanAmount * (baseMonthlyRate * Math.pow(1 + baseMonthlyRate, months)) / (Math.pow(1 + baseMonthlyRate, months) - 1);
      const withPointsPayment = loanAmount * (newMonthlyRate * Math.pow(1 + newMonthlyRate, months)) / (Math.pow(1 + newMonthlyRate, months) - 1);
      
      const monthlySavings = noPointsPayment - withPointsPayment;
      const breakevenMonths = pointsCost / monthlySavings;
      const breakevenYears = breakevenMonths / 12;
      
      const noPointsTotalInterest = (noPointsPayment * months) - loanAmount;
      const withPointsTotalInterest = (withPointsPayment * months) - loanAmount;
      const totalInterestSaved = noPointsTotalInterest - withPointsTotalInterest;
      const netSavings = totalInterestSaved - pointsCost;
      
      return [
        { label: 'Total Points Cost', value: pointsCost.toFixed(2), isCurrency: true },
        { label: 'New Interest Rate (After Points)', value: (newRate * 100).toFixed(3) + '%', isCurrency: false },
        { label: 'Monthly Payment (No Points)', value: noPointsPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (With Points)', value: withPointsPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Breakeven Period', value: breakevenMonths.toFixed(0) + ' months (' + breakevenYears.toFixed(1) + ' years)', isCurrency: false },
        { label: 'Total Interest Saved (Over Loan Term)', value: totalInterestSaved.toFixed(2), isCurrency: true },
        { label: 'Net Savings After Points Cost', value: netSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mortgage Discount Points Calculator',
    description: 'Calculate mortgage discount points cost, rate reduction, and breakeven period. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function MortgageDiscountPointsCalculatorPage() {
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
