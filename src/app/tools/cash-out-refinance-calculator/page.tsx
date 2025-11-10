'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CONTENT = {
  title: 'Cash-Out Refinance Calculator',
  description: 'Calculate how much cash you can extract from your home equity and what your new monthly payment will be',
  icon: '💵',
  category: 'Financial Planning',
  slug: 'cash-out-refinance-calculator',
  article: {
    title: 'Complete Guide to Cash-Out Refinancing',
    content: `
      <p>A cash-out refinance lets you tap into your home's equity by refinancing your mortgage for more than you currently owe and taking the difference in cash. This can be a powerful financial tool when used wisely.</p>
      
      <h3>How Cash-Out Refinancing Works</h3>
      <p>Here's a simple example:</p>
      <ul>
        <li>Home value: $500,000</li>
        <li>Current mortgage balance: $300,000</li>
        <li>Home equity: $200,000 (40%)</li>
        <li>New loan (80% LTV): $400,000</li>
        <li>Cash received: $100,000 ($400k new loan - $300k payoff)</li>
        <li>Remaining equity: $100,000 (20%)</li>
      </ul>
      
      <h3>Maximum Cash-Out Limits (LTV)</h3>
      <p>Lenders limit how much you can borrow based on loan-to-value (LTV) ratio:</p>
      <ul>
        <li><strong>Conventional:</strong> 80% LTV maximum (must keep 20% equity)</li>
        <li><strong>FHA:</strong> 80% LTV maximum</li>
        <li><strong>VA:</strong> 90% LTV maximum (veterans/military only)</li>
        <li><strong>USDA:</strong> 80% LTV maximum</li>
        <li><strong>Jumbo:</strong> 70-75% LTV typical</li>
      </ul>
      
      <h3>Good Reasons to Cash Out</h3>
      <p><strong>1. Home Improvements:</strong> Renovations that add value to your home (kitchen, bathrooms, additions) are tax-deductible and can be financed at lower mortgage rates than personal loans.</p>
      
      <p><strong>2. Debt Consolidation:</strong> If you have high-interest debt (credit cards at 18-25% APR), consolidating into a 6-7% mortgage can save thousands.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>$50,000 credit card debt at 22% = $1,100/month minimum payment</li>
        <li>$50,000 cash-out refinance at 6.5% (30-year) = $316/month</li>
        <li>Monthly savings: $784</li>
      </ul>
      
      <p><strong>3. Investment Opportunities:</strong> Real estate investors use cash-out refinancing to fund new property purchases when the rental income exceeds the mortgage costs.</p>
      
      <p><strong>4. Emergency Expenses:</strong> Major medical bills, unexpected home repairs, or other unavoidable costs can be financed at lower rates than credit cards.</p>
      
      <p><strong>5. Education Costs:</strong> Financing education can be cheaper with a cash-out refi (6-7%) than private student loans (10-14%).</p>
      
      <h3>Bad Reasons to Cash Out</h3>
      <p><strong>1. Discretionary Spending:</strong> Vacations, luxury cars, or lifestyle upgrades drain equity without building wealth.</p>
      
      <p><strong>2. Risky Investments:</strong> Using home equity to invest in stocks or crypto puts your home at risk if investments fail.</p>
      
      <p><strong>3. Already Struggling with Debt:</strong> If you're behind on payments, cash-out refinancing won't solve the underlying financial habits.</p>
      
      <p><strong>4. Insufficient Long-Term Plans:</strong> If you might sell soon, cash-out refinancing costs outweigh benefits.</p>
      
      <h3>Cash-Out Refinance Costs</h3>
      <p>Expect to pay 2-6% of the new loan amount in closing costs:</p>
      <ul>
        <li>Appraisal: $500-$800</li>
        <li>Origination fees: 0.5%-1% of loan</li>
        <li>Title insurance: $1,000-$2,000</li>
        <li>Recording fees: $100-$500</li>
        <li>Credit report: $30-$50</li>
        <li>Attorney fees: $500-$1,500 (some states)</li>
      </ul>
      
      <p>On a $400,000 cash-out refinance, expect $8,000-$24,000 in closing costs.</p>
      
      <h3>Cash-Out vs. HELOC vs. Home Equity Loan</h3>
      <p><strong>Cash-Out Refinance:</strong></p>
      <ul>
        <li>Single loan replaces existing mortgage</li>
        <li>Fixed rate, predictable payment</li>
        <li>Higher closing costs ($8k-$24k)</li>
        <li>Can access large amounts (up to 80% LTV)</li>
        <li>Good when current mortgage rate is high</li>
      </ul>
      
      <p><strong>HELOC (Home Equity Line of Credit):</strong></p>
      <ul>
        <li>Second mortgage, revolving credit line</li>
        <li>Variable rate (risk of increases)</li>
        <li>Lower closing costs ($0-$500)</li>
        <li>Draw period (10 years) then repayment period</li>
        <li>Good when you don't need cash immediately</li>
      </ul>
      
      <p><strong>Home Equity Loan:</strong></p>
      <ul>
        <li>Second mortgage, lump sum</li>
        <li>Fixed rate, predictable payment</li>
        <li>Moderate closing costs ($2k-$5k)</li>
        <li>Keep existing low-rate first mortgage</li>
        <li>Good for one-time expenses</li>
      </ul>
      
      <h3>Tax Deductibility</h3>
      <p><strong>Interest on cash-out refinance is tax-deductible only if you use the money to buy, build, or substantially improve your home.</strong> If you use it for debt consolidation, investments, or other purposes, the interest is NOT deductible.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Cash-out $50k for kitchen remodel → Interest deductible</li>
        <li>Cash-out $50k to pay off credit cards → Interest NOT deductible</li>
      </ul>
      
      <h3>Impact on Monthly Payment</h3>
      <p>Cash-out refinancing usually increases your monthly payment because:</p>
      <ul>
        <li>You're borrowing more money (original balance + cash)</li>
        <li>You might reset to a 30-year term (even if you had 20 years left)</li>
        <li>Rates may be higher than your original mortgage</li>
      </ul>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Current: $300k balance @ 5% = $1,610/month</li>
        <li>Cash-out: $400k new loan @ 6.5% = $2,528/month</li>
        <li>Payment increase: $918/month</li>
        <li>Cash received: $100,000 (minus closing costs)</li>
      </ul>
      
      <h3>When NOT to Cash Out</h3>
      <p><strong>1. Rates are much higher than your current mortgage:</strong> If you have a 3% mortgage and new rates are 7%, consider a HELOC or home equity loan instead.</p>
      
      <p><strong>2. You're close to retirement:</strong> Taking on a new 30-year mortgage in your 50s or 60s can burden your retirement years.</p>
      
      <p><strong>3. You've built significant equity:</strong> Dropping from 50% equity to 20% increases risk if home values decline.</p>
      
      <p><strong>4. Your credit score has dropped:</strong> You'll get worse rates than your original mortgage.</p>
      
      <p><strong>5. Home values are declining:</strong> Don't leverage up during a downturn.</p>
      
      <h3>Alternatives to Cash-Out Refinancing</h3>
      <p><strong>1. HELOC:</strong> If rates are low and you want flexibility, a HELOC lets you draw what you need when you need it.</p>
      
      <p><strong>2. Personal Loan:</strong> For smaller amounts ($10k-$50k), personal loans have faster approval and no home risk.</p>
      
      <p><strong>3. 0% Balance Transfer:</strong> For debt consolidation, a 0% APR credit card (12-21 months) can be cheaper if you can pay it off quickly.</p>
      
      <p><strong>4. Sell and Downsize:</strong> If you need a lot of cash, selling and buying a smaller home may be more sensible.</p>
      
      <h3>Qualification Requirements</h3>
      <p>To qualify for cash-out refinancing, you typically need:</p>
      <ul>
        <li><strong>Credit score:</strong> 620+ (conventional), 580+ (FHA)</li>
        <li><strong>DTI ratio:</strong> 43% or lower (50% possible with compensating factors)</li>
        <li><strong>Home equity:</strong> At least 20% after cash-out</li>
        <li><strong>Seasoning period:</strong> 6-12 months of homeownership</li>
        <li><strong>Payment history:</strong> No late mortgage payments in past 12 months</li>
        <li><strong>Income verification:</strong> Pay stubs, tax returns, employment verification</li>
      </ul>
    `
  },
  calculator: {
    fields: [
      { name: 'homeValue', label: 'Current Home Value', type: 'number', defaultValue: '500000' },
      { name: 'currentMortgageBalance', label: 'Current Mortgage Balance', type: 'number', defaultValue: '300000' },
      { name: 'desiredCashOut', label: 'Desired Cash Out Amount', type: 'number', defaultValue: '75000' },
      { name: 'newInterestRate', label: 'New Interest Rate (%)', type: 'number', defaultValue: '6.75' },
      { name: 'newLoanTermYears', label: 'New Loan Term (Years)', type: 'number', defaultValue: '30' },
      { name: 'closingCosts', label: 'Estimated Closing Costs', type: 'number', defaultValue: '7500' },
    ],
    results: [
      { label: 'Available Equity (40% of Home Value)', isCurrency: true },
      { label: 'Maximum Cash-Out (80% LTV)', isCurrency: true },
      { label: 'New Total Loan Amount', isCurrency: true },
      { label: 'Cash to You (After Closing Costs)', isCurrency: true },
      { label: 'New Monthly Payment', isCurrency: true },
      { label: 'Remaining Equity After Cash-Out', isCurrency: true },
      { label: 'New LTV Ratio', isCurrency: false },
      { label: 'Feasibility', isCurrency: false },
    ],
    calculate: (values: any) => {
      const homeValue = parseFloat(values.homeValue) || 500000;
      const currentBalance = parseFloat(values.currentMortgageBalance) || 300000;
      const desiredCashOut = parseFloat(values.desiredCashOut) || 75000;
      const newRate = parseFloat(values.newInterestRate) / 100 || 0.0675;
      const newYears = parseFloat(values.newLoanTermYears) || 30;
      const closingCosts = parseFloat(values.closingCosts) || 7500;
      
      const currentEquity = homeValue - currentBalance;
      const maxLoanAmount = homeValue * 0.80;
      const maxCashOut = maxLoanAmount - currentBalance;
      const newLoanAmount = currentBalance + desiredCashOut + closingCosts;
      const cashToYou = desiredCashOut;
      const remainingEquity = homeValue - newLoanAmount;
      const newLTV = (newLoanAmount / homeValue) * 100;
      
      const months = newYears * 12;
      const monthlyRate = newRate / 12;
      
      const newPayment = newLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      
      let feasibility = 'Feasible - within LTV limits';
      if (newLTV > 80) {
        feasibility = 'Not feasible - exceeds 80% LTV limit. Reduce cash-out amount.';
      } else if (newLTV > 75) {
        feasibility = 'Marginal - close to LTV limit. May require PMI or higher rate.';
      } else if (remainingEquity < homeValue * 0.20) {
        feasibility = 'Risky - leaves minimal equity cushion';
      }
      
      return [
        { label: 'Available Equity (40% of Home Value)', value: currentEquity.toFixed(2), isCurrency: true },
        { label: 'Maximum Cash-Out (80% LTV)', value: maxCashOut.toFixed(2), isCurrency: true },
        { label: 'New Total Loan Amount', value: newLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Cash to You (After Closing Costs)', value: cashToYou.toFixed(2), isCurrency: true },
        { label: 'New Monthly Payment', value: newPayment.toFixed(2), isCurrency: true },
        { label: 'Remaining Equity After Cash-Out', value: remainingEquity.toFixed(2), isCurrency: true },
        { label: 'New LTV Ratio', value: newLTV.toFixed(1) + '%', isCurrency: false },
        { label: 'Feasibility', value: feasibility, isCurrency: false },
      ];
    },
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cash-Out Refinance Calculator',
    description: 'Calculate how much cash you can extract from home equity and new payment. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function CashOutRefinanceCalculatorPage() {
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
