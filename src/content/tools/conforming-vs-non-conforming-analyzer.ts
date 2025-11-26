import { CalculatorContent } from '@/types';

export const CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Conforming vs Non-Conforming Loan Analyzer',
  description: 'Compare conforming and non-conforming (jumbo) loans to find the best financing option for your property purchase.',
  slug: 'conforming-vs-non-conforming-analyzer',
  icon: '📊',
  category: 'Mortgage',
  metaTitle: 'Conforming vs Non-Conforming Loan Analyzer | Compare Jumbo Loans & Limits 2025',
  metaDescription: 'Free conforming vs non-conforming loan comparison tool. Calculate monthly payments, interest costs, and determine if your loan exceeds conforming limits. Compare jumbo loan rates and requirements for 2025.',
  article: {
    title: 'Understanding Conforming vs Non-Conforming Loans',
    content: `
      <h2>What Are Conforming and Non-Conforming Loans?</h2>
      <p>When financing a home purchase, understanding the difference between conforming and non-conforming loans is crucial for making an informed decision. These loan types have different requirements, interest rates, and qualification criteria that can significantly impact your overall borrowing costs.</p>
      
      <p>A <strong>conforming loan</strong> meets the guidelines set by Fannie Mae and Freddie Mac, the two government-sponsored enterprises (GSEs) that purchase mortgages from lenders. These loans must fall within specific loan limits and meet certain underwriting standards. Because they can be sold to these GSEs, lenders face less risk, which typically translates to better interest rates for borrowers.</p>
      
      <p>A <strong>non-conforming loan</strong>, often called a jumbo loan, exceeds the conforming loan limits or doesn't meet other GSE guidelines. Since lenders cannot sell these loans to Fannie Mae or Freddie Mac, they must hold them on their own books, which increases their risk exposure and typically results in stricter qualification requirements.</p>
      
      <h2>2025 Conforming Loan Limits by Area</h2>
      <p>The Federal Housing Finance Agency (FHFA) sets conforming loan limits annually based on changes in average home prices. For 2025, the conforming loan limits are:</p>
      <ul>
        <li><strong>Standard Areas:</strong> $806,500 for a single-family home</li>
        <li><strong>High-Cost Areas:</strong> Up to $1,209,750 for a single-family home (150% of the standard limit)</li>
      </ul>
      <p>High-cost areas include major metropolitan regions like San Francisco, New York City, Los Angeles, and other markets where home prices significantly exceed the national average. Alaska, Hawaii, Guam, and the U.S. Virgin Islands also have higher limits.</p>
      
      <h2>Jumbo Loan Requirements</h2>
      <p>Non-conforming or jumbo loans typically have more stringent requirements compared to conforming loans:</p>
      <ul>
        <li><strong>Credit Score:</strong> Most lenders require a minimum credit score of 700-720, compared to 620 for conforming loans</li>
        <li><strong>Down Payment:</strong> Typically 10-20% minimum, though some lenders may require up to 30%</li>
        <li><strong>Debt-to-Income Ratio:</strong> Usually capped at 43%, though some lenders prefer 36% or lower</li>
        <li><strong>Cash Reserves:</strong> Lenders often require 6-12 months of mortgage payments in reserve</li>
        <li><strong>Documentation:</strong> More extensive income and asset verification is typically required</li>
      </ul>
      
      <h2>Interest Rate Differences</h2>
      <p>Historically, jumbo loans carried significantly higher interest rates than conforming loans—often 0.25% to 1% higher. However, this gap has narrowed considerably in recent years, and in some cases, jumbo rates have even been lower than conforming rates.</p>
      
      <p>The interest rate you receive depends on several factors:</p>
      <ul>
        <li>Your credit score and credit history</li>
        <li>Loan-to-value ratio (LTV)</li>
        <li>Debt-to-income ratio</li>
        <li>Property type and location</li>
        <li>Loan amount and term</li>
        <li>Current market conditions</li>
      </ul>
      
      <h2>Qualification Requirements Comparison</h2>
      <p><strong>Conforming Loan Requirements:</strong></p>
      <ul>
        <li>Minimum credit score: 620 (conventional) or lower for FHA/VA</li>
        <li>Down payment: As low as 3% for conventional, 3.5% for FHA</li>
        <li>DTI ratio: Up to 50% for some programs</li>
        <li>Standard income documentation</li>
      </ul>
      
      <p><strong>Non-Conforming Loan Requirements:</strong></p>
      <ul>
        <li>Minimum credit score: 700-720 typically required</li>
        <li>Down payment: 10-20% minimum</li>
        <li>DTI ratio: Generally 43% maximum</li>
        <li>Extensive income and asset documentation</li>
        <li>Additional appraisals may be required</li>
      </ul>
      
      <h2>Pros and Cons of Each Loan Type</h2>
      <h3>Conforming Loans</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Generally lower interest rates</li>
        <li>Lower down payment requirements</li>
        <li>More flexible credit requirements</li>
        <li>Widely available from most lenders</li>
        <li>Faster approval process</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Loan amount limited by conforming limits</li>
        <li>May require PMI if down payment is less than 20%</li>
        <li>May not be suitable for luxury properties</li>
      </ul>
      
      <h3>Non-Conforming (Jumbo) Loans</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Higher loan amounts available</li>
        <li>Can finance luxury or high-value properties</li>
        <li>Competitive rates in today's market</li>
        <li>Various term options available</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Stricter credit requirements</li>
        <li>Higher down payment required</li>
        <li>More documentation needed</li>
        <li>Fewer lender options</li>
        <li>Longer approval timeline</li>
      </ul>
      
      <h2>When to Choose Each Option</h2>
      <p><strong>Choose a conforming loan when:</strong></p>
      <ul>
        <li>Your loan amount falls within conforming limits</li>
        <li>You want to minimize your down payment</li>
        <li>You prefer a faster, simpler approval process</li>
        <li>Your credit score is below 700</li>
      </ul>
      
      <p><strong>Choose a non-conforming loan when:</strong></p>
      <ul>
        <li>Your desired property price exceeds conforming limits</li>
        <li>You have excellent credit (720+)</li>
        <li>You have significant assets and cash reserves</li>
        <li>You can make a substantial down payment</li>
        <li>Current jumbo rates are competitive</li>
      </ul>
      
      <h2>How to Use This Calculator</h2>
      <p>This calculator helps you compare conforming and non-conforming loan options based on your specific situation. Enter your property value, desired loan amount, and location to determine which loan type applies to your purchase. The calculator will compare monthly payments and total interest costs for both scenarios, helping you understand the financial implications of each option.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'number',
        defaultValue: 900000,
        placeholder: 'Enter property value',
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 750000,
        placeholder: 'Enter loan amount',
      },
      {
        name: 'location',
        label: 'Location Type',
        type: 'select',
        defaultValue: 'standard-area',
        options: [
          { value: 'standard-area', label: 'Standard Area ($806,500 limit)' },
          { value: 'high-cost-area', label: 'High-Cost Area ($1,209,750 limit)' },
        ],
      },
      {
        name: 'interestRateConforming',
        label: 'Conforming Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
        placeholder: 'Enter conforming rate',
        step: '0.125',
      },
      {
        name: 'interestRateNonConforming',
        label: 'Non-Conforming Interest Rate (%)',
        type: 'number',
        defaultValue: 6.875,
        placeholder: 'Enter non-conforming rate',
        step: '0.125',
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
        placeholder: 'Enter loan term',
      },
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: 740,
        placeholder: 'Enter credit score',
      },
      {
        name: 'annualIncome',
        label: 'Annual Income',
        type: 'number',
        defaultValue: 200000,
        placeholder: 'Enter annual income',
      },
    ],
    results: [
      { label: 'Loan Type', isCurrency: false },
      { label: 'Conforming Limit', isCurrency: true },
      { label: 'Monthly Payment (Conforming)', isCurrency: true },
      { label: 'Monthly Payment (Non-Conforming)', isCurrency: true },
      { label: 'Monthly Savings', isCurrency: true },
      { label: 'Total Interest (Conforming)', isCurrency: true },
      { label: 'Total Interest (Non-Conforming)', isCurrency: true },
      { label: 'Lifetime Savings', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values: Record<string, number | string>) => {
      const propertyValue = Number(values.propertyValue) || 0;
      const loanAmount = Number(values.loanAmount) || 0;
      const location = String(values.location);
      const interestRateConforming = Number(values.interestRateConforming) || 0;
      const interestRateNonConforming = Number(values.interestRateNonConforming) || 0;
      const loanTermYears = Number(values.loanTermYears) || 30;
      const creditScore = Number(values.creditScore) || 0;
      const annualIncome = Number(values.annualIncome) || 0;

      const conformingLimit = location === 'high-cost-area' ? 1209750 : 806500;
      const isConforming = loanAmount <= conformingLimit;
      const loanType = isConforming ? 'Conforming' : 'Non-Conforming (Jumbo)';

      const calculateMonthlyPayment = (principal: number, annualRate: number, years: number): number => {
        if (annualRate === 0) return principal / (years * 12);
        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = years * 12;
        return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      };

      const monthlyPaymentConforming = calculateMonthlyPayment(loanAmount, interestRateConforming, loanTermYears);
      const monthlyPaymentNonConforming = calculateMonthlyPayment(loanAmount, interestRateNonConforming, loanTermYears);
      
      const totalPaymentsConforming = monthlyPaymentConforming * loanTermYears * 12;
      const totalPaymentsNonConforming = monthlyPaymentNonConforming * loanTermYears * 12;
      
      const totalInterestConforming = totalPaymentsConforming - loanAmount;
      const totalInterestNonConforming = totalPaymentsNonConforming - loanAmount;
      
      const monthlySavings = Math.abs(monthlyPaymentNonConforming - monthlyPaymentConforming);
      const lifetimeSavings = Math.abs(totalInterestNonConforming - totalInterestConforming);

      let recommendation = '';
      const ltv = (loanAmount / propertyValue) * 100;
      const dti = (monthlyPaymentNonConforming * 12 / annualIncome) * 100;

      if (isConforming) {
        recommendation = 'Your loan qualifies as conforming. You should benefit from lower rates and easier qualification.';
      } else if (creditScore >= 720 && ltv <= 80 && dti <= 43) {
        recommendation = 'Your loan requires jumbo financing. With your strong credit profile, you should qualify for competitive jumbo rates.';
      } else if (creditScore >= 700) {
        recommendation = 'Your loan exceeds conforming limits. Consider increasing your down payment to improve jumbo loan terms.';
      } else {
        recommendation = 'Your loan exceeds conforming limits. You may need to improve your credit score or increase your down payment to qualify for a jumbo loan.';
      }

      return [
        { label: 'Loan Type', value: loanType, isCurrency: false },
        { label: 'Conforming Limit', value: conformingLimit.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (Conforming)', value: monthlyPaymentConforming.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (Non-Conforming)', value: monthlyPaymentNonConforming.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Total Interest (Conforming)', value: totalInterestConforming.toFixed(2), isCurrency: true },
        { label: 'Total Interest (Non-Conforming)', value: totalInterestNonConforming.toFixed(2), isCurrency: true },
        { label: 'Lifetime Savings', value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
