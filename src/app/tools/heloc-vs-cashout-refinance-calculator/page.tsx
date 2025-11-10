'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'HELOC vs. Cash-Out Refinance Calculator',
  description: 'Compare HELOC and cash-out refinance side-by-side to determine which option is better for accessing your home equity',
  icon: '⚖️',
  category: 'Financial Planning',
  slug: 'heloc-vs-cashout-refinance-calculator',
  article: {
    title: 'HELOC vs. Cash-Out Refinance: Which Is Better?',
    content: `
      <p>When you need to tap into your home's equity, you have two main options: a Home Equity Line of Credit (HELOC) or a cash-out refinance. Each has distinct advantages and disadvantages depending on your financial situation, existing mortgage rate, and long-term plans.</p>
      
      <h3>Quick Comparison Overview</h3>
      <p><strong>HELOC (Home Equity Line of Credit):</strong></p>
      <ul>
        <li>Second mortgage (keeps existing first mortgage)</li>
        <li>Revolving credit line (like a credit card)</li>
        <li>Variable interest rate (rate can increase)</li>
        <li>Lower closing costs ($0-$500)</li>
        <li>Draw period (10 years) + Repayment period (20 years)</li>
        <li>Interest-only payments during draw period</li>
        <li>Best when: You have a low existing mortgage rate</li>
      </ul>
      
      <p><strong>Cash-Out Refinance:</strong></p>
      <ul>
        <li>Replaces existing mortgage with new larger loan</li>
        <li>Lump sum of cash at closing</li>
        <li>Fixed interest rate (predictable payments)</li>
        <li>Higher closing costs ($8,000-$24,000)</li>
        <li>Single monthly payment</li>
        <li>Full principal + interest payments from day one</li>
        <li>Best when: Current mortgage rate is high</li>
      </ul>
      
      <h3>When to Choose a HELOC</h3>
      <p><strong>1. You Have a Low First Mortgage Rate:</strong> If your existing mortgage is at 3-4%, don't refinance to a 7% rate. Keep the low rate and add a HELOC.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Existing mortgage: $300k at 3.5%</li>
        <li>Need $50k for renovation</li>
        <li>Cash-out refi: $350k at 7% = $2,329/month</li>
        <li>Keep mortgage + HELOC: $300k at 3.5% ($1,347) + $50k HELOC at 8.5% ($425 interest-only) = $1,772/month</li>
        <li>Monthly savings with HELOC: $557</li>
      </ul>
      
      <p><strong>2. You Don't Need Cash Immediately:</strong> HELOCs work like credit cards - you only pay interest on what you actually borrow. If you need access to funds but aren't sure exactly when or how much, a HELOC provides flexibility.</p>
      
      <p><strong>3. You Want Lower Upfront Costs:</strong> HELOCs typically have minimal closing costs ($0-$500) compared to cash-out refinancing ($8,000-$24,000).</p>
      
      <p><strong>4. You Plan to Pay Back Quickly:</strong> If you're financing a home improvement and plan to pay it off within 3-5 years, a HELOC's interest-only payment period makes it affordable.</p>
      
      <p><strong>5. Rates Might Drop Soon:</strong> If you think rates will decrease, a HELOC's variable rate will fall with the market, while a cash-out refinance locks you in.</p>
      
      <h3>When to Choose Cash-Out Refinance</h3>
      <p><strong>1. Your Current Mortgage Rate is High:</strong> If your existing mortgage is at 7-8%, refinancing to 6.5% while pulling out cash makes sense.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Existing mortgage: $300k at 7.5%</li>
        <li>Need $50k for debt consolidation</li>
        <li>Cash-out refi: $350k at 6.5% = $2,212/month</li>
        <li>Current mortgage alone: $300k at 7.5% = $2,098/month</li>
        <li>Cost to get $50k: Only $114/month more (and you're lowering rate)</li>
      </ul>
      
      <p><strong>2. You Want Payment Predictability:</strong> Cash-out refinancing offers a fixed rate and fixed monthly payment for the entire loan term. You know exactly what you'll pay for 30 years.</p>
      
      <p><strong>3. Rates Are Rising:</strong> When interest rates are increasing, locking in a fixed rate protects you from future HELOC rate increases.</p>
      
      <p><strong>4. You Need a Large Lump Sum:</strong> For major expenses like buying investment property, paying for college, or large medical bills, a cash-out refinance provides immediate access to significant cash.</p>
      
      <p><strong>5. You Want to Simplify Payments:</strong> One mortgage payment is easier to manage than a first mortgage plus a HELOC payment.</p>
      
      <h3>Cost Comparison</h3>
      <p><strong>HELOC Costs:</strong></p>
      <ul>
        <li>Application fee: $0-$100</li>
        <li>Annual fee: $0-$75/year</li>
        <li>Appraisal: $0-$500 (often waived)</li>
        <li>Early closure fee: $500 if closed within 2-3 years</li>
        <li><strong>Total upfront: $0-$500</strong></li>
      </ul>
      
      <p><strong>Cash-Out Refinance Costs:</strong></p>
      <ul>
        <li>Origination fee: 0.5%-1% of loan ($2,000-$4,000)</li>
        <li>Appraisal: $500-$800</li>
        <li>Title insurance: $1,000-$2,000</li>
        <li>Recording fees: $100-$300</li>
        <li>Attorney fees: $500-$1,500</li>
        <li>Credit report: $30-$50</li>
        <li><strong>Total upfront: $8,000-$24,000 (2-6% of loan amount)</strong></li>
      </ul>
      
      <h3>HELOC Structure Explained</h3>
      <p>HELOCs have two distinct phases:</p>
      
      <p><strong>Draw Period (Typically 10 Years):</strong></p>
      <ul>
        <li>You can borrow and repay repeatedly up to your credit limit</li>
        <li>Usually interest-only payments (principal payment optional)</li>
        <li>Variable rate adjusts monthly or quarterly</li>
        <li>Example: $50,000 line at 8.5% = $354/month interest-only</li>
      </ul>
      
      <p><strong>Repayment Period (Typically 20 Years):</strong></p>
      <ul>
        <li>No more borrowing allowed</li>
        <li>Must pay principal + interest</li>
        <li>Payment jumps significantly</li>
        <li>Example: $50,000 balance at 8.5% = $439/month (principal + interest)</li>
      </ul>
      
      <h3>Rate Comparison: Fixed vs. Variable</h3>
      <p><strong>Cash-Out Refinance (Fixed Rate):</strong></p>
      <ul>
        <li>Rate locked for life of loan</li>
        <li>Typical rates: 6.5-7.5% (as of 2024)</li>
        <li>Payment never changes</li>
        <li>Protected from rate increases</li>
      </ul>
      
      <p><strong>HELOC (Variable Rate):</strong></p>
      <ul>
        <li>Rate tied to Prime Rate + margin</li>
        <li>Typical rates: Prime + 1-2% = 8.5-9.5% (when Prime is 7.5%)</li>
        <li>Rate cap: Often 18% lifetime maximum</li>
        <li>If Prime increases 1%, your payment increases proportionally</li>
      </ul>
      
      <p><strong>Example Rate Movement:</strong></p>
      <ul>
        <li>Current: Prime 7.5% + 1% margin = 8.5% HELOC rate</li>
        <li>If Fed raises rates: Prime 9.5% + 1% margin = 10.5% HELOC rate</li>
        <li>Payment on $50k: Increases from $354/month to $437/month</li>
      </ul>
      
      <h3>Tax Deductibility</h3>
      <p><strong>Both HELOC and Cash-Out Refinance interest is tax-deductible ONLY if you use the funds to buy, build, or substantially improve your home.</strong></p>
      
      <p><strong>Deductible Uses:</strong></p>
      <ul>
        <li>Kitchen or bathroom remodel</li>
        <li>Home addition or expansion</li>
        <li>New roof, HVAC, windows</li>
        <li>Deck, patio, landscaping improvements</li>
      </ul>
      
      <p><strong>NOT Deductible:</strong></p>
      <ul>
        <li>Debt consolidation</li>
        <li>Car purchase</li>
        <li>Vacation</li>
        <li>College tuition</li>
        <li>Investment in stocks or crypto</li>
      </ul>
      
      <h3>Risk Comparison</h3>
      <p><strong>HELOC Risks:</strong></p>
      <ul>
        <li><strong>Rate increases:</strong> If Prime Rate jumps 2%, your payment could increase 25-30%</li>
        <li><strong>Payment shock:</strong> When draw period ends, payment jumps from interest-only to principal + interest</li>
        <li><strong>Home equity requirement:</strong> If home value drops, lender can freeze or reduce your credit line</li>
        <li><strong>Foreclosure:</strong> Missing HELOC payments can result in losing your home (it's a mortgage)</li>
      </ul>
      
      <p><strong>Cash-Out Refinance Risks:</strong></p>
      <ul>
        <li><strong>Higher debt:</strong> Increasing your mortgage balance reduces equity cushion</li>
        <li><strong>Refinance costs:</strong> If rates drop further, you'll pay closing costs again to refinance</li>
        <li><strong>Extended term:</strong> Resetting to 30 years extends how long you're in debt</li>
        <li><strong>Foreclosure:</strong> Missing payments can result in losing your home</li>
      </ul>
      
      <h3>Hybrid Strategy: HELOC + Refinance</h3>
      <p>Some homeowners use both:</p>
      <ul>
        <li><strong>Step 1:</strong> Get a HELOC for immediate needs and low upfront costs</li>
        <li><strong>Step 2:</strong> Wait for rates to drop or pay down HELOC over 2-3 years</li>
        <li><strong>Step 3:</strong> Do a rate-and-term refinance or cash-out refinance to pay off HELOC and consolidate debt</li>
      </ul>
      
      <h3>Qualification Requirements</h3>
      <p><strong>HELOC Requirements:</strong></p>
      <ul>
        <li>Credit score: 680+ (640 minimum)</li>
        <li>DTI: 43% or lower</li>
        <li>Combined LTV: 80-90% maximum (20-10% equity required)</li>
        <li>Payment history: No late payments in 12 months</li>
      </ul>
      
      <p><strong>Cash-Out Refinance Requirements:</strong></p>
      <ul>
        <li>Credit score: 620+ (conventional), 580+ (FHA)</li>
        <li>DTI: 43-50% depending on loan type</li>
        <li>LTV: 80% maximum (20% equity required)</li>
        <li>Seasoning: 6-12 months of homeownership</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'homeValue', label: 'Current Home Value', type: 'number', defaultValue: '500000' },
      { name: 'firstMortgageBalance', label: 'First Mortgage Balance', type: 'number', defaultValue: '300000' },
      { name: 'firstMortgageRate', label: 'First Mortgage Rate (%)', type: 'number', defaultValue: '3.75' },
      { name: 'cashNeeded', label: 'Cash Needed', type: 'number', defaultValue: '75000' },
      { name: 'helocRate', label: 'HELOC Interest Rate (%)', type: 'number', defaultValue: '8.5' },
      { name: 'cashOutRefiRate', label: 'Cash-Out Refinance Rate (%)', type: 'number', defaultValue: '6.75' },
      { name: 'cashOutRefiClosingCosts', label: 'Cash-Out Refi Closing Costs', type: 'number', defaultValue: '7500' },
    ],
    results: [
      { label: 'HELOC: Current 1st Mortgage Payment', isCurrency: true },
      { label: 'HELOC: Monthly Interest (Interest-Only)', isCurrency: true },
      { label: 'HELOC: Total Monthly Payment', isCurrency: true },
      { label: 'HELOC: Total Upfront Cost', isCurrency: true },
      { label: 'Cash-Out Refi: New Loan Amount', isCurrency: true },
      { label: 'Cash-Out Refi: Monthly Payment', isCurrency: true },
      { label: 'Cash-Out Refi: Total Upfront Cost', isCurrency: true },
      { label: 'Monthly Payment Difference', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: any) => {
      const homeValue = parseFloat(values.homeValue) || 500000;
      const firstBalance = parseFloat(values.firstMortgageBalance) || 300000;
      const firstRate = parseFloat(values.firstMortgageRate) / 100 || 0.0375;
      const cashNeeded = parseFloat(values.cashNeeded) || 75000;
      const helocRate = parseFloat(values.helocRate) / 100 || 0.085;
      const cashOutRate = parseFloat(values.cashOutRefiRate) / 100 || 0.0675;
      const cashOutClosing = parseFloat(values.cashOutRefiClosingCosts) || 7500;
      
      const firstMonthlyRate = firstRate / 12;
      const remainingMonths = 30 * 12;
      
      const firstMortgagePayment = firstBalance * (firstMonthlyRate * Math.pow(1 + firstMonthlyRate, remainingMonths)) / (Math.pow(1 + firstMonthlyRate, remainingMonths) - 1);
      
      const helocMonthlyInterest = (cashNeeded * helocRate) / 12;
      const helocTotalPayment = firstMortgagePayment + helocMonthlyInterest;
      const helocUpfrontCost = 250;
      
      const newLoanAmount = firstBalance + cashNeeded + cashOutClosing;
      const cashOutMonthlyRate = cashOutRate / 12;
      const cashOutMonths = 30 * 12;
      
      const cashOutPayment = newLoanAmount * (cashOutMonthlyRate * Math.pow(1 + cashOutMonthlyRate, cashOutMonths)) / (Math.pow(1 + cashOutMonthlyRate, cashOutMonths) - 1);
      
      const paymentDiff = cashOutPayment - helocTotalPayment;
      
      let recommendation = 'HELOC is better - lower monthly payment and keeps low first mortgage rate';
      if (firstRate > cashOutRate) {
        recommendation = 'Cash-out refinance is better - lowers your current high rate';
      } else if (Math.abs(paymentDiff) < 100) {
        recommendation = 'Similar cost - choose based on rate stability preference';
      } else if (helocRate > cashOutRate + 2) {
        recommendation = 'Consider cash-out refinance - HELOC rate is very high';
      }
      
      return [
        { label: 'HELOC: Current 1st Mortgage Payment', value: firstMortgagePayment.toFixed(2), isCurrency: true },
        { label: 'HELOC: Monthly Interest (Interest-Only)', value: helocMonthlyInterest.toFixed(2), isCurrency: true },
        { label: 'HELOC: Total Monthly Payment', value: helocTotalPayment.toFixed(2), isCurrency: true },
        { label: 'HELOC: Total Upfront Cost', value: helocUpfrontCost.toFixed(2), isCurrency: true },
        { label: 'Cash-Out Refi: New Loan Amount', value: newLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Cash-Out Refi: Monthly Payment', value: cashOutPayment.toFixed(2), isCurrency: true },
        { label: 'Cash-Out Refi: Total Upfront Cost', value: cashOutClosing.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment Difference', value: Math.abs(paymentDiff).toFixed(2) + (paymentDiff > 0 ? ' (HELOC saves)' : ' (Refi saves)'), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HELOC vs. Cash-Out Refinance Calculator',
    description: 'Compare HELOC and cash-out refinance side-by-side to determine best option. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function HELOCvsCashOutRefinanceCalculatorPage() {
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
