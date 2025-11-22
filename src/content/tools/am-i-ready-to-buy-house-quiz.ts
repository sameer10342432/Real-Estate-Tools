import { CalculatorContent } from '@/types';

export const AmIReadyToBuyHouseQuizContent: CalculatorContent = {
  title: 'Am I Ready to Buy a House? Quiz',
  description: 'Comprehensive readiness assessment covering finances, credit, savings, debt, job stability, and emotional preparedness for homeownership',
  icon: '🏠',
  category: 'Additional Tools',
  slug: 'am-i-ready-to-buy-house-quiz',
  
  metaTitle: 'Am I Ready to Buy a House? Homebuyer Readiness Quiz | Property Tools',
  metaDescription: 'Find out if you\'re financially and emotionally ready to buy a home. Assess your credit, savings, debt, income stability, and long-term commitment.',
  
  article: {
    title: 'Are You Ready to Buy a House? Complete Readiness Assessment',
    content: `
      <h2>Am I Ready to Buy a House? Quiz</h2>
      <p>Buying a home is likely the biggest financial decision of your life. This comprehensive quiz evaluates your financial stability, emotional readiness, and life circumstances to determine if now is the right time to buy - or if you should wait and prepare further.</p>

      <h3>Why Readiness Matters</h3>
      <ul>
        <li><strong>Avoid Financial Disaster:</strong> Buying before you're ready leads to foreclosure, stress, regret</li>
        <li><strong>Build Wealth:</strong> Right timing maximizes investment returns</li>
        <li><strong>Reduce Stress:</strong> Financial preparedness = peace of mind</li>
        <li><strong>Qualify for Better Rates:</strong> Strong position = lower interest rates</li>
        <li><strong>Negotiate Power:</strong> Cash reserves and solid credit give you leverage</li>
      </ul>

      <h3>The 7 Pillars of Homebuying Readiness</h3>
      
      <h4>1. Financial Stability</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ Stable employment for 2+ years (same field)</li>
        <li>✅ Regular, predictable income</li>
        <li>✅ Not planning career change or entrepreneurship</li>
        <li>✅ Income sufficient to qualify for mortgage in your market</li>
        <li>✅ Not at risk of layoff or job loss</li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ Just started new career</li>
        <li>❌ Freelance/1099 with less than 2 years history</li>
        <li>❌ Planning to start business or go to school</li>
        <li>❌ Uncertain income (commissions, bonuses only)</li>
        <li>❌ Industry undergoing major changes</li>
      </ul>

      <h4>2. Credit Score & History</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ Credit score 680+ (620+ for FHA)</li>
        <li>✅ No late payments in last 12 months</li>
        <li>✅ No collections or charge-offs</li>
        <li>✅ Bankruptcy/foreclosure 2-7+ years ago (varies by loan type)</li>
        <li>✅ Credit utilization under 30%</li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ Credit score below 580</li>
        <li>❌ Recent missed payments</li>
        <li>❌ Judgments, liens, collections</li>
        <li>❌ Recent bankruptcy or foreclosure</li>
        <li>❌ No credit history at all</li>
      </ul>

      <h4>3. Down Payment Savings</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ Saved 3.5-20% of purchase price</li>
        <li>✅ Funds have been in account 60+ days ("seasoned")</li>
        <li>✅ Not borrowing down payment (gift okay with documentation)</li>
        <li>✅ FHA: 3.5% down, Conventional: 5-20%, VA/USDA: 0% possible</li>
      </ul>

      <p><strong>Down Payment by Loan Type:</strong></p>
      <ul>
        <li>FHA: 3.5% minimum (lower credit scores okay)</li>
        <li>Conventional: 3-5% (PMI required under 20%)</li>
        <li>VA: 0% down (veterans, military)</li>
        <li>USDA: 0% down (rural areas, income limits)</li>
        <li>Jumbo: 10-20% (varies by lender)</li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ No savings at all</li>
        <li>❌ Planning to use credit card or loan for down payment</li>
        <li>❌ Large unexplained recent deposits</li>
        <li>❌ Savings from unreliable source</li>
      </ul>

      <h4>4. Emergency Fund & Reserves</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ 3-6 months expenses BEYOND down payment and closing costs</li>
        <li>✅ Separate emergency fund (not touching down payment)</li>
        <li>✅ Cash for immediate repairs/maintenance</li>
        <li>✅ Buffer for unexpected costs (moving, furniture, etc.)</li>
      </ul>

      <p><strong>Example:</strong></p>
      <p>$300,000 home purchase:</p>
      <ul>
        <li>Down payment (5%): $15,000</li>
        <li>Closing costs (3%): $9,000</li>
        <li>Emergency fund (6 months at $4,000/month): $24,000</li>
        <li>Moving/furniture buffer: $5,000</li>
        <li><strong>Total needed: $53,000</strong></li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ Draining all savings for down payment</li>
        <li>❌ No emergency fund</li>
        <li>❌ Can barely afford monthly payment</li>
        <li>❌ No buffer for surprises</li>
      </ul>

      <h4>5. Debt-to-Income Ratio (DTI)</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ DTI under 43% (including future mortgage)</li>
        <li>✅ Better: DTI under 36%</li>
        <li>✅ No new debt in last 6 months</li>
        <li>✅ Plan to pay off high-interest debt before buying</li>
      </ul>

      <p><strong>Calculate Your DTI:</strong></p>
      <ol>
        <li>Add all monthly debts (credit cards, car, student loans, future mortgage)</li>
        <li>Divide by gross monthly income</li>
        <li>Multiply by 100</li>
      </ol>

      <p><strong>Example:</strong> $2,500 debts ÷ $6,000 income = 41.7% DTI</p>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ DTI over 50%</li>
        <li>❌ Maxed out credit cards</li>
        <li>❌ Recently took on new debt</li>
        <li>❌ Paying minimums only</li>
      </ul>

      <h4>6. Long-Term Commitment</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ Planning to stay 5-7+ years minimum</li>
        <li>✅ Stable personal life (marriage, family, etc.)</li>
        <li>✅ Committed to area (job, family, lifestyle)</li>
        <li>✅ Not planning relocation</li>
        <li>✅ Understand homes are illiquid (can't quickly sell)</li>
      </ul>

      <p><strong>Why 5-7 Years Matters:</strong></p>
      <ul>
        <li>Transaction costs (6-10% to buy and sell)</li>
        <li>Early mortgage payments mostly interest (slow equity build)</li>
        <li>Market fluctuations need time to recover</li>
        <li>Break-even typically 5+ years</li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ Might relocate for job within 2-3 years</li>
        <li>❌ Uncertain about area</li>
        <li>❌ Life in transition (new relationship, career change)</li>
        <li>❌ Just want to stop renting (emotional decision)</li>
      </ul>

      <h4>7. Emotional & Knowledge Readiness</h4>
      <p><strong>You're Ready If:</strong></p>
      <ul>
        <li>✅ Understand all costs beyond mortgage (taxes, insurance, maintenance, HOA)</li>
        <li>✅ Comfortable with homeowner responsibilities (repairs, maintenance)</li>
        <li>✅ Researched neighborhoods and commutes</li>
        <li>✅ Know your must-haves vs nice-to-haves</li>
        <li>✅ Understand the buying process</li>
        <li>✅ Have realistic expectations</li>
      </ul>

      <p><strong>Red Flags:</strong></p>
      <ul>
        <li>❌ Think mortgage = total cost (forgetting taxes, insurance, maintenance)</li>
        <li>❌ Expect landlord to fix things</li>
        <li>❌ Haven't researched neighborhoods</li>
        <li>❌ Unrealistic expectations (HGTV syndrome)</li>
        <li>❌ Rushed timeline (need to buy NOW)</li>
      </ul>

      <h3>Total Cost of Homeownership</h3>
      
      <h4>Upfront Costs</h4>
      <ul>
        <li>Down payment (3.5-20%)</li>
        <li>Closing costs (2-5%)</li>
        <li>Home inspection ($400-$600)</li>
        <li>Appraisal ($400-$600)</li>
        <li>Moving expenses ($1,000-$5,000)</li>
        <li>Immediate repairs/updates</li>
        <li>Furniture and appliances</li>
      </ul>

      <h4>Monthly Costs</h4>
      <ul>
        <li>Mortgage (Principal + Interest)</li>
        <li>Property taxes (0.5-2.5% of home value annually)</li>
        <li>Homeowners insurance ($800-$2,000+ annually)</li>
        <li>PMI if less than 20% down ($50-$300/month)</li>
        <li>HOA fees ($50-$500+/month)</li>
        <li>Utilities (often higher than apartment)</li>
        <li>Maintenance (1% of home value annually)</li>
      </ul>

      <h4>Example Monthly Cost Breakdown</h4>
      <p>$300,000 home, 5% down ($15,000), 7% interest rate:</p>
      <ul>
        <li>Mortgage (P&I): $1,900</li>
        <li>Property taxes: $350</li>
        <li>Insurance: $125</li>
        <li>PMI: $175</li>
        <li>HOA: $100</li>
        <li>Maintenance fund: $250</li>
        <li><strong>Total: $2,900/month</strong></li>
      </ul>

      <p>Compare to $1,500 rent = $1,400 more per month + upfront costs</p>

      <h3>When to Wait</h3>
      <ul>
        <li>Credit score below 620 (repair credit first)</li>
        <li>No down payment saved</li>
        <li>DTI above 50%</li>
        <li>Job instability or recent career change</li>
        <li>Planning to relocate within 3 years</li>
        <li>No emergency fund</li>
        <li>Can't afford total monthly costs (PITI + maintenance)</li>
        <li>Market timing terrible (extreme seller's market)</li>
      </ul>

      <h3>How to Prepare if Not Ready</h3>
      
      <h4>6-Month Preparation Plan</h4>
      <p><strong>Month 1-2: Credit & Debt</strong></p>
      <ul>
        <li>Pull credit reports (free at AnnualCreditReport.com)</li>
        <li>Dispute errors</li>
        <li>Pay down credit cards under 30% utilization</li>
        <li>Set up autopay to prevent missed payments</li>
      </ul>

      <p><strong>Month 3-4: Savings</strong></p>
      <ul>
        <li>Set aggressive savings goal (20-30% of income)</li>
        <li>Open high-yield savings account</li>
        <li>Automate transfers each payday</li>
        <li>Cut expenses ruthlessly</li>
      </ul>

      <p><strong>Month 5-6: Education & Planning</strong></p>
      <ul>
        <li>Research neighborhoods and commute times</li>
        <li>Get pre-qualified (soft check, no credit impact)</li>
        <li>Take first-time homebuyer class</li>
        <li>Interview real estate agents</li>
        <li>Continue saving aggressively</li>
      </ul>

      <h4>12-Month Preparation Plan</h4>
      <p>Add to 6-month plan:</p>
      <ul>
        <li>Build emergency fund to 6 months expenses</li>
        <li>Pay off high-interest debt</li>
        <li>Raise credit score 50-100 points</li>
        <li>Save larger down payment (reduces monthly payment and PMI)</li>
        <li>Research down payment assistance programs</li>
      </ul>

      <h3>First-Time Homebuyer Programs</h3>
      <ul>
        <li><strong>FHA Loans:</strong> 3.5% down, 580+ credit score</li>
        <li><strong>State/Local Programs:</strong> Down payment assistance, grants</li>
        <li><strong>Fannie Mae HomeReady:</strong> 3% down for low-moderate income</li>
        <li><strong>Freddie Mac Home Possible:</strong> 3% down for low-moderate income</li>
        <li><strong>USDA Loans:</strong> 0% down for rural areas</li>
        <li><strong>VA Loans:</strong> 0% down for veterans</li>
        <li><strong>IRA Withdrawal:</strong> $10,000 penalty-free for first home</li>
      </ul>

      <h3>Signs You ARE Ready</h3>
      <ul>
        <li>✅ Credit score 680+</li>
        <li>✅ Saved 10%+ down payment + 6 months emergency fund</li>
        <li>✅ DTI under 36% with mortgage included</li>
        <li>✅ Stable job for 2+ years</li>
        <li>✅ Planning to stay 7+ years</li>
        <li>✅ Understand all costs (not just mortgage)</li>
        <li>✅ Comfortable with maintenance responsibilities</li>
        <li>✅ Pre-approved (not just pre-qualified)</li>
        <li>✅ Researched neighborhoods thoroughly</li>
        <li>✅ Emotionally and financially prepared</li>
      </ul>

      <h3>Frequently Asked Questions</h3>
      
      <h4>What if I have student loans?</h4>
      <p>Student loans count against your DTI. They don't disqualify you, but they reduce how much house you can afford. Income-driven repayment plans can help by lowering monthly payment used in DTI calculation.</p>

      <h4>Should I wait for rates to drop?</h4>
      <p>You can't time the market perfectly. If you're financially ready and plan to stay long-term, don't wait for "perfect" rates. You can always refinance later if rates drop.</p>

      <h4>Is renting really throwing money away?</h4>
      <p>No. Renting provides flexibility, no maintenance costs, and predictable monthly expenses. Buying is an investment, not always better than renting - it depends on your situation and market.</p>

      <h4>How much house can I afford?</h4>
      <p><strong>Conservative Rule:</strong> Monthly payment (PITI) should not exceed 28% of gross income</p>
      <p><strong>Total Debt Rule:</strong> All monthly debts should not exceed 36-43% of gross income</p>

      <p><strong>Take this quiz to get a personalized assessment of your readiness to buy a home and specific recommendations for what to improve before you make this life-changing decision.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: '700',
        placeholder: '700',
      },
      {
        name: 'downPaymentSaved',
        label: 'Down Payment Saved ($)',
        type: 'number',
        defaultValue: '20000',
        placeholder: '20000',
      },
      {
        name: 'emergencyFund',
        label: 'Emergency Fund (Months of Expenses)',
        type: 'number',
        defaultValue: '3',
        placeholder: '3',
      },
      {
        name: 'jobStability',
        label: 'Job Stability',
        type: 'select',
        options: [
          { value: 'stable', label: '2+ years same employer/field' },
          { value: 'recent', label: 'Less than 1 year at job' },
          { value: 'selfEmployed', label: 'Self-employed 2+ years' },
        ],
        defaultValue: 'stable',
      },
      {
        name: 'stayingYears',
        label: 'Planning to Stay (Years)',
        type: 'number',
        defaultValue: '7',
        placeholder: '7',
      },
    ],
    results: [
      { label: 'Overall Readiness', isCurrency: false },
      { label: 'Financial Assessment', isCurrency: false },
      { label: 'Recommendations', isCurrency: false },
      { label: 'Next Steps', isCurrency: false },
    ],
    calculate: (values) => {
      const creditScore = Number(values.creditScore) || 700;
      const downPaymentSaved = Number(values.downPaymentSaved) || 20000;
      const emergencyFund = Number(values.emergencyFund) || 3;
      const jobStability = values.jobStability || 'stable';
      const stayingYears = Number(values.stayingYears) || 7;

      let score = 0;
      let maxScore = 50;

      // Credit score (10 points)
      if (creditScore >= 740) score += 10;
      else if (creditScore >= 680) score += 8;
      else if (creditScore >= 620) score += 5;
      else if (creditScore >= 580) score += 2;

      // Down payment (10 points)
      if (downPaymentSaved >= 40000) score += 10;
      else if (downPaymentSaved >= 20000) score += 8;
      else if (downPaymentSaved >= 10000) score += 5;
      else if (downPaymentSaved >= 5000) score += 2;

      // Emergency fund (10 points)
      if (emergencyFund >= 6) score += 10;
      else if (emergencyFund >= 3) score += 7;
      else if (emergencyFund >= 1) score += 3;

      // Job stability (10 points)
      if (jobStability === 'stable') score += 10;
      else if (jobStability === 'selfEmployed') score += 7;
      else if (jobStability === 'recent') score += 2;

      // Commitment (10 points)
      if (stayingYears >= 7) score += 10;
      else if (stayingYears >= 5) score += 7;
      else if (stayingYears >= 3) score += 4;

      const percentage = Math.round((score / maxScore) * 100);
      let readiness = '';
      let financial = '';
      let recommendations = '';
      let nextSteps = '';

      if (percentage >= 80) {
        readiness = `✅ YOU'RE READY! (${percentage}% Readiness Score)

You have strong fundamentals across all key areas. You're financially prepared and positioned to successfully buy a home.`;

        financial = `💪 Strong Financial Position:
• Credit Score: ${creditScore} (${creditScore >= 740 ? 'Excellent' : 'Good'})
• Down Payment: $${downPaymentSaved.toLocaleString()} (${downPaymentSaved >= 40000 ? 'Excellent' : 'Good'})
• Emergency Fund: ${emergencyFund} months (${emergencyFund >= 6 ? 'Excellent' : 'Adequate'})
• Job Stability: ${jobStability === 'stable' ? 'Strong' : 'Moderate'}`;

        recommendations = `🎯 You're ready to move forward:
• Get pre-approved (not just pre-qualified)
• Interview 2-3 real estate agents
• Start house hunting in your target neighborhoods
• Set up property alerts
• Continue saving for closing costs`;

        nextSteps = `1. Get pre-approval from 2-3 lenders
2. Finalize your budget and must-haves
3. Find experienced buyer's agent
4. Start touring homes
5. Be patient - don't rush into wrong house`;

      } else if (percentage >= 60) {
        readiness = `⚠️ ALMOST READY (${percentage}% Readiness Score)

You're on the right track but have room for improvement in a few areas. Focus on these gaps before buying.`;

        financial = `📊 Moderate Financial Position:
• Credit Score: ${creditScore} (${creditScore >= 680 ? 'Good' : 'Needs improvement'})
• Down Payment: $${downPaymentSaved.toLocaleString()} (${downPaymentSaved >= 20000 ? 'Good' : 'Keep saving'})
• Emergency Fund: ${emergencyFund} months (${emergencyFund >= 3 ? 'Adequate' : 'Build it up'})
• Job Stability: ${jobStability === 'stable' ? 'Strong' : 'Build history'}`;

        let improvements = [];
        if (creditScore < 680) improvements.push('Improve credit score to 680+');
        if (downPaymentSaved < 20000) improvements.push('Save more down payment ($20K+ target)');
        if (emergencyFund < 6) improvements.push('Build emergency fund to 6 months');
        if (stayingYears < 5) improvements.push('Ensure long-term commitment (5+ years)');

        recommendations = `🎯 Focus on these improvements:
${improvements.map(i => '• ' + i).join('\n')}

Timeline: 3-6 months of focused preparation`;

        nextSteps = `1. Address specific gaps identified above
2. Continue aggressive saving
3. Research first-time buyer programs
4. Get pre-qualified to see where you stand
5. Revisit readiness in 3-6 months`;

      } else {
        readiness = `❌ NOT READY YET (${percentage}% Readiness Score)

You have significant gaps that should be addressed before buying. Taking time to prepare will set you up for success.`;

        financial = `⚠️ Needs Improvement:
• Credit Score: ${creditScore} (${creditScore >= 620 ? 'Minimum acceptable' : 'Too low - must improve'})
• Down Payment: $${downPaymentSaved.toLocaleString()} (${downPaymentSaved >= 10000 ? 'Keep building' : 'Not enough yet'})
• Emergency Fund: ${emergencyFund} months (${emergencyFund >= 3 ? 'Minimum' : 'Critical gap'})
• Job Stability: ${jobStability === 'recent' ? 'Need more time' : 'Acceptable'}`;

        let criticalIssues = [];
        if (creditScore < 620) criticalIssues.push('Credit score below minimum (need 620+)');
        if (downPaymentSaved < 10000) criticalIssues.push('Insufficient down payment savings');
        if (emergencyFund < 3) criticalIssues.push('No emergency fund (critical)');
        if (stayingYears < 3) criticalIssues.push('Short timeline (need 5+ year commitment)');

        recommendations = `🚨 Critical Actions Needed:
${criticalIssues.map(i => '• ' + i).join('\n')}

Timeline: 6-12 months of preparation recommended`;

        nextSteps = `1. Pull credit report and fix errors
2. Pay down debt aggressively
3. Save 25-30% of income monthly
4. Build emergency fund (highest priority)
5. Stabilize employment situation
6. Revisit in 6-12 months

Consider: First-time buyer education classes`;
      }

      return [
        { label: 'Overall Readiness', value: readiness, isCurrency: false },
        { label: 'Financial Assessment', value: financial, isCurrency: false },
        { label: 'Recommendations', value: recommendations, isCurrency: false },
        { label: 'Next Steps', value: nextSteps, isCurrency: false },
      ];
    },
  },
};
