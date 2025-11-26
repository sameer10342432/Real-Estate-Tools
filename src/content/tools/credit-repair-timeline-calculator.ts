import { CalculatorContent } from '@/types';

export const CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Credit Repair Timeline Calculator',
  description: 'Estimate how long it will take to repair your credit score and create a personalized credit improvement roadmap.',
  slug: 'credit-repair-timeline-calculator',
  icon: '📈',
  category: 'Financial Planning',
  metaTitle: 'Credit Repair Timeline Calculator - How Long to Fix Credit Score? | Free Tool',
  metaDescription: 'Free credit repair timeline calculator to estimate how long it takes to improve your credit score. Get a personalized roadmap based on your current situation and goals.',
  article: {
    title: 'Understanding Credit Repair Timelines',
    content: `
    <h2>How Long Does Credit Repair Take?</h2>
    <p>Credit repair is not an overnight process - it requires patience, consistency, and a strategic approach. The timeline varies significantly based on your starting point, the types of negative items on your report, and your ability to follow through with positive credit behaviors. Most people see meaningful improvement within 3-12 months.</p>
    
    <h3>Factors Affecting Your Credit Repair Timeline</h3>
    <ul>
      <li><strong>Current Score:</strong> Lower scores may improve faster initially</li>
      <li><strong>Type of Negative Items:</strong> Collections, bankruptcies, late payments</li>
      <li><strong>Age of Negative Items:</strong> Older items have less impact</li>
      <li><strong>Credit Utilization:</strong> High balances can be fixed quickly</li>
      <li><strong>Credit History Length:</strong> Thin files take longer to build</li>
      <li><strong>Income & Resources:</strong> Ability to pay down debt and establish credit</li>
    </ul>

    <h3>Typical Credit Repair Timelines by Issue</h3>
    <table>
      <tr>
        <th>Credit Issue</th>
        <th>Time to See Improvement</th>
        <th>Time for Full Recovery</th>
      </tr>
      <tr>
        <td>High Credit Utilization</td>
        <td>1-2 months</td>
        <td>2-3 months</td>
      </tr>
      <tr>
        <td>Single Late Payment</td>
        <td>1-3 months</td>
        <td>12-24 months</td>
      </tr>
      <tr>
        <td>Multiple Late Payments</td>
        <td>3-6 months</td>
        <td>24-36 months</td>
      </tr>
      <tr>
        <td>Collection Accounts</td>
        <td>3-6 months</td>
        <td>Up to 7 years</td>
      </tr>
      <tr>
        <td>Bankruptcy</td>
        <td>12-24 months</td>
        <td>7-10 years</td>
      </tr>
      <tr>
        <td>Thin Credit File</td>
        <td>3-6 months</td>
        <td>12-24 months</td>
      </tr>
    </table>

    <h3>Credit Repair Phases</h3>
    <h4>Phase 1: Assessment (Week 1-2)</h4>
    <ul>
      <li>Pull all three credit reports (Equifax, Experian, TransUnion)</li>
      <li>Identify all negative items and errors</li>
      <li>Calculate current utilization and score factors</li>
      <li>Create a prioritized action plan</li>
    </ul>

    <h4>Phase 2: Quick Wins (Months 1-2)</h4>
    <ul>
      <li>Pay down credit card balances below 30%</li>
      <li>Dispute obvious errors on credit reports</li>
      <li>Become an authorized user on good accounts</li>
      <li>Request goodwill adjustments for minor late payments</li>
    </ul>

    <h4>Phase 3: Building Positive History (Months 3-6)</h4>
    <ul>
      <li>Open secured credit card if needed</li>
      <li>Consider credit-builder loans</li>
      <li>Maintain 100% on-time payment record</li>
      <li>Keep utilization under 10% for maximum impact</li>
    </ul>

    <h4>Phase 4: Long-Term Improvement (Months 6-24)</h4>
    <ul>
      <li>Continue positive payment history</li>
      <li>Wait for negative items to age/fall off</li>
      <li>Gradually request credit limit increases</li>
      <li>Diversify credit mix appropriately</li>
    </ul>

    <h3>Expected Score Improvements</h3>
    <ul>
      <li><strong>Quick Fixes (utilization):</strong> 20-100 points in 30 days</li>
      <li><strong>Error Removal:</strong> 10-50 points per major error</li>
      <li><strong>3-Month Progress:</strong> 30-50 points typical</li>
      <li><strong>6-Month Progress:</strong> 50-100 points typical</li>
      <li><strong>12-Month Progress:</strong> 100-150 points possible</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your current credit situation to get a personalized timeline:</p>
    <ul>
      <li><strong>Current Score:</strong> Your current FICO or credit score</li>
      <li><strong>Target Score:</strong> Where you want to be</li>
      <li><strong>Number of Negative Items:</strong> Late payments, collections, etc.</li>
      <li><strong>Current Utilization:</strong> Credit card balance vs. limits</li>
      <li><strong>Credit History Length:</strong> Age of your oldest account</li>
    </ul>

    <h3>Credit Repair Strategies That Work</h3>
    <ul>
      <li><strong>Dispute Errors:</strong> Up to 79% of reports have errors</li>
      <li><strong>Pay for Delete:</strong> Negotiate collection removal</li>
      <li><strong>Goodwill Letters:</strong> Request removal of late payments</li>
      <li><strong>Rapid Rescoring:</strong> Quick updates for mortgage applications</li>
      <li><strong>Credit Piggybacking:</strong> Authorized user on good accounts</li>
    </ul>

    <h3>Common Credit Repair Mistakes</h3>
    <ul>
      <li>Closing old credit cards (hurts history length)</li>
      <li>Opening too many new accounts at once</li>
      <li>Paying for services you can do yourself</li>
      <li>Not checking all three credit bureaus</li>
      <li>Ignoring the importance of payment timing</li>
    </ul>

    <h3>When to Seek Professional Help</h3>
    <ul>
      <li>Complex disputes with credit bureaus</li>
      <li>Identity theft situations</li>
      <li>Preparing for major purchases (mortgage, car)</li>
      <li>Multiple negative items requiring negotiation</li>
      <li>Limited time or expertise to DIY</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'currentScore',
        label: 'Current Credit Score',
        type: 'number',
        defaultValue: 580,
      },
      {
        name: 'targetScore',
        label: 'Target Credit Score',
        type: 'number',
        defaultValue: 720,
      },
      {
        name: 'negativeItems',
        label: 'Number of Negative Items',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'currentUtilization',
        label: 'Current Credit Utilization (%)',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'creditHistoryYears',
        label: 'Credit History Length (Years)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'monthlyPaymentAbility',
        label: 'Monthly Amount for Debt Paydown ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'hasBankruptcy',
        label: 'Has Bankruptcy?',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'No Bankruptcy' },
          { value: 'recent', label: 'Yes - Within 2 Years' },
          { value: 'older', label: 'Yes - 2+ Years Ago' },
        ],
      },
    ],
    results: [
      { label: 'Points to Improve', isCurrency: false },
      { label: 'Estimated Timeline', isCurrency: false },
      { label: 'Quick Wins Timeline', isCurrency: false },
      { label: 'Score After 3 Months', isCurrency: false },
      { label: 'Score After 6 Months', isCurrency: false },
      { label: 'Score After 12 Months', isCurrency: false },
      { label: 'Primary Focus Area', isCurrency: false },
      { label: 'Difficulty Level', isCurrency: false },
    ],
    calculate: (values) => {
      const { currentScore, targetScore, negativeItems, currentUtilization, creditHistoryYears, monthlyPaymentAbility, hasBankruptcy } = values;
      
      const pointsToImprove = targetScore - currentScore;
      
      let baseMonths = Math.ceil(pointsToImprove / 10);
      
      if (negativeItems > 3) baseMonths += negativeItems * 2;
      if (hasBankruptcy === 'recent') baseMonths += 18;
      else if (hasBankruptcy === 'older') baseMonths += 6;
      if (creditHistoryYears < 2) baseMonths += 6;
      if (monthlyPaymentAbility < 200) baseMonths += 6;
      
      let quickWinsMonths = 1;
      let quickWinsPoints = 0;
      
      if (currentUtilization > 30) {
        quickWinsPoints += Math.min(50, (currentUtilization - 10) * 0.8);
        quickWinsMonths = 2;
      }
      
      let threeMonthScore = currentScore + quickWinsPoints + Math.min(20, pointsToImprove * 0.15);
      let sixMonthScore = currentScore + quickWinsPoints + Math.min(50, pointsToImprove * 0.35);
      let twelveMonthScore = currentScore + quickWinsPoints + Math.min(100, pointsToImprove * 0.65);
      
      threeMonthScore = Math.min(threeMonthScore, targetScore);
      sixMonthScore = Math.min(sixMonthScore, targetScore);
      twelveMonthScore = Math.min(twelveMonthScore, targetScore);
      
      let primaryFocus = "Payment History";
      if (currentUtilization > 30) primaryFocus = "Reduce Credit Utilization";
      else if (negativeItems > 3) primaryFocus = "Dispute/Remove Negative Items";
      else if (creditHistoryYears < 2) primaryFocus = "Build Credit History Length";
      
      let difficulty = "Moderate";
      if (pointsToImprove < 50 && negativeItems < 2) difficulty = "Easy";
      else if (pointsToImprove > 150 || hasBankruptcy === 'recent') difficulty = "Challenging";
      else if (pointsToImprove > 200 || negativeItems > 5) difficulty = "Difficult";
      
      const timelineText = baseMonths <= 6 ? `${baseMonths} months` : 
                          baseMonths <= 12 ? `${Math.round(baseMonths)} months` : 
                          `${Math.round(baseMonths / 12)} - ${Math.round((baseMonths + 6) / 12)} years`;

      return [
        { label: 'Points to Improve', value: pointsToImprove.toString(), isCurrency: false },
        { label: 'Estimated Timeline', value: timelineText, isCurrency: false },
        { label: 'Quick Wins Timeline', value: `${quickWinsMonths} months (+${Math.round(quickWinsPoints)} pts)`, isCurrency: false },
        { label: 'Score After 3 Months', value: Math.round(threeMonthScore).toString(), isCurrency: false },
        { label: 'Score After 6 Months', value: Math.round(sixMonthScore).toString(), isCurrency: false },
        { label: 'Score After 12 Months', value: Math.round(twelveMonthScore).toString(), isCurrency: false },
        { label: 'Primary Focus Area', value: primaryFocus, isCurrency: false },
        { label: 'Difficulty Level', value: difficulty, isCurrency: false },
      ];
    },
  },
};
