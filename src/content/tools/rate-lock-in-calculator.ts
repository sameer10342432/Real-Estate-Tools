import { CalculatorContent } from '@/types';

export const RATE_LOCK_IN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rate Lock-In Calculator',
  description: 'Calculate the cost and benefits of locking in your mortgage rate versus floating to make the best timing decision.',
  slug: 'rate-lock-in-calculator',
  icon: '🔒',
  category: 'Mortgage & Financing',
  metaTitle: 'Rate Lock-In Calculator - Should You Lock Your Mortgage Rate? | Free Tool',
  metaDescription: 'Free mortgage rate lock calculator to analyze lock costs, timing, and potential savings. Determine if locking your rate now or floating is the better strategy.',
  article: {
    title: 'Understanding Mortgage Rate Locks',
    content: `
    <h2>What is a Rate Lock?</h2>
    <p>A mortgage rate lock is a lender's commitment to hold a specific interest rate for a set period while your loan is processed. This protects you from rate increases during the typically 30-60 day loan approval process. Understanding rate locks is crucial for timing your mortgage to get the best possible terms.</p>
    
    <h3>How Rate Locks Work</h3>
    <ul>
      <li><strong>Lock Period:</strong> Typically 15, 30, 45, 60, or 90 days</li>
      <li><strong>Locked Rate:</strong> The interest rate guaranteed during the lock period</li>
      <li><strong>Lock Agreement:</strong> Written commitment from lender with terms</li>
      <li><strong>Expiration:</strong> Rate lock expires if loan doesn't close in time</li>
    </ul>

    <h3>Rate Lock Costs</h3>
    <p>Rate locks may be free or carry costs depending on several factors:</p>
    <ul>
      <li><strong>Free Locks:</strong> Many lenders offer 30-45 day locks at no cost</li>
      <li><strong>Extended Locks:</strong> Longer periods (60-90+ days) often cost 0.125% - 0.375%</li>
      <li><strong>Lock Fees:</strong> Some lenders charge upfront lock fees</li>
      <li><strong>Rate Premium:</strong> Longer locks may have slightly higher base rates</li>
    </ul>

    <h3>Lock vs. Float Decision</h3>
    <table>
      <tr>
        <th>Consider Locking If:</th>
        <th>Consider Floating If:</th>
      </tr>
      <tr>
        <td>Rates are historically low</td>
        <td>Rates are trending downward</td>
      </tr>
      <tr>
        <td>Economic uncertainty ahead</td>
        <td>Your closing is far out (90+ days)</td>
      </tr>
      <tr>
        <td>You can't afford payment increase</td>
        <td>Lender offers float-down option</td>
      </tr>
      <tr>
        <td>Fed is raising rates</td>
        <td>Lock costs are high</td>
      </tr>
    </table>

    <h3>Rate Lock Extensions</h3>
    <p>If your loan doesn't close before the lock expires:</p>
    <ul>
      <li><strong>Extension Fees:</strong> Typically 0.125% - 0.25% per week</li>
      <li><strong>Rate Adjustment:</strong> May need to accept current market rates</li>
      <li><strong>Re-Lock:</strong> Some lenders allow re-locking at current rates</li>
      <li><strong>Grace Period:</strong> Some lenders offer short grace periods</li>
    </ul>

    <h3>The Float-Down Option</h3>
    <p>Some lenders offer a "float-down" provision that lets you:</p>
    <ul>
      <li>Lock in a rate for protection against increases</li>
      <li>Get the lower rate if rates drop significantly</li>
      <li>Usually requires a 0.125% - 0.375% fee</li>
      <li>May have restrictions on timing and amount of decrease</li>
    </ul>

    <h3>Rate Lock Best Practices</h3>
    <ul>
      <li>Lock early in the day when rates are typically lower</li>
      <li>Monitor economic news that affects mortgage rates</li>
      <li>Get your lock agreement in writing immediately</li>
      <li>Ensure you can close within the lock period</li>
      <li>Ask about free lock extensions if available</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Analyze whether locking now makes sense:</p>
    <ul>
      <li><strong>Loan Amount:</strong> Your mortgage amount</li>
      <li><strong>Current Rate:</strong> Today's available rate</li>
      <li><strong>Expected Rate Change:</strong> Your projection of rate movement</li>
      <li><strong>Lock Period:</strong> How long until you close</li>
      <li><strong>Lock Cost:</strong> Any fees for locking</li>
    </ul>

    <h3>Factors Affecting Mortgage Rates</h3>
    <p>Watch these indicators when deciding to lock:</p>
    <ul>
      <li>Federal Reserve policy and statements</li>
      <li>Inflation reports (CPI, PCE)</li>
      <li>Employment data and GDP</li>
      <li>10-Year Treasury yields</li>
      <li>Global economic events</li>
    </ul>

    <h3>Common Rate Lock Mistakes</h3>
    <ul>
      <li>Waiting too long hoping for lower rates</li>
      <li>Not understanding lock expiration consequences</li>
      <li>Failing to get lock terms in writing</li>
      <li>Ignoring lock extension costs in budget</li>
      <li>Not considering float-down options</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'currentRate',
        label: 'Current Available Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'expectedRateChange',
        label: 'Expected Rate Change (+/- %)',
        type: 'number',
        defaultValue: 0.25,
      },
      {
        name: 'lockPeriodDays',
        label: 'Lock Period (Days)',
        type: 'number',
        defaultValue: 45,
      },
      {
        name: 'lockCostPercent',
        label: 'Lock Cost/Premium (%)',
        type: 'number',
        defaultValue: 0.125,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Monthly Payment (Locked)', isCurrency: true },
      { label: 'Monthly Payment (If Rates Rise)', isCurrency: true },
      { label: 'Monthly Payment (If Rates Fall)', isCurrency: true },
      { label: 'Lock Cost', isCurrency: true },
      { label: 'Potential Savings vs. Rate Increase', isCurrency: true },
      { label: 'Opportunity Cost vs. Rate Decrease', isCurrency: true },
      { label: 'Break-Even Rate Increase', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, currentRate, expectedRateChange, lockPeriodDays, lockCostPercent, loanTerm } = values;
      
      const lockCost = (loanAmount * lockCostPercent) / 100;
      const numberOfPayments = loanTerm * 12;
      
      const lockedMonthlyRate = currentRate / 100 / 12;
      const lockedMonthly = loanAmount * 
        (lockedMonthlyRate * Math.pow(1 + lockedMonthlyRate, numberOfPayments)) / 
        (Math.pow(1 + lockedMonthlyRate, numberOfPayments) - 1);
      
      const higherRate = (currentRate + expectedRateChange) / 100 / 12;
      const higherMonthly = loanAmount * 
        (higherRate * Math.pow(1 + higherRate, numberOfPayments)) / 
        (Math.pow(1 + higherRate, numberOfPayments) - 1);
      
      const lowerRate = (currentRate - expectedRateChange) / 100 / 12;
      const lowerMonthly = loanAmount * 
        (lowerRate * Math.pow(1 + lowerRate, numberOfPayments)) / 
        (Math.pow(1 + lowerRate, numberOfPayments) - 1);
      
      const savingsVsIncrease = ((higherMonthly - lockedMonthly) * numberOfPayments) - lockCost;
      const opportunityCost = ((lockedMonthly - lowerMonthly) * numberOfPayments) + lockCost;
      
      const breakEvenChange = (lockCost / (loanAmount * numberOfPayments / 1200));
      
      let recommendation = "Consider locking";
      if (expectedRateChange > 0 && savingsVsIncrease > 0) {
        recommendation = "Lock recommended - rates expected to rise";
      } else if (expectedRateChange < 0) {
        recommendation = "Consider floating - rates may decrease";
      } else if (lockCost > savingsVsIncrease) {
        recommendation = "Lock cost may not be worth it";
      }

      return [
        { label: 'Monthly Payment (Locked)', value: lockedMonthly.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (If Rates Rise)', value: higherMonthly.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (If Rates Fall)', value: lowerMonthly.toFixed(2), isCurrency: true },
        { label: 'Lock Cost', value: lockCost.toFixed(2), isCurrency: true },
        { label: 'Potential Savings vs. Rate Increase', value: savingsVsIncrease.toFixed(2), isCurrency: true },
        { label: 'Opportunity Cost vs. Rate Decrease', value: opportunityCost.toFixed(2), isCurrency: true },
        { label: 'Break-Even Rate Increase', value: breakEvenChange.toFixed(3) + '%', isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
