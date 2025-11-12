export const REVERSE_MORTGAGE_CALCULATOR_CONTENT = {
  title: 'Reverse Mortgage Calculator',
  description: 'Calculate available funds from HECM reverse mortgage based on age, home value, and interest rates',
  icon: '🔄',
  category: 'Basic Calculators',
  slug: 'reverse-mortgage-calculator',
  
  metaTitle: 'Reverse Mortgage Calculator - Calculate HECM Loan Amount & Payments',
  metaDescription: 'Free reverse mortgage calculator estimates available funds, monthly payments, and costs. Calculate HECM line of credit, lump sum, or monthly income options.',
  
  article: {
    title: 'Reverse Mortgage (HECM) Complete Calculator Guide',
    content: `
<h2>What is a Reverse Mortgage?</h2>
<p>A reverse mortgage (officially called Home Equity Conversion Mortgage or HECM) is a loan that allows homeowners 62 and older to convert home equity into cash without monthly mortgage payments. Instead of paying the lender, the lender pays you while you continue living in your home.</p>

<h2>How Reverse Mortgages Work</h2>

<h3>Key Features:</h3>
<ul>
<li><strong>No Monthly Payments:</strong> You don't make monthly mortgage payments (though you must pay property taxes, insurance, and maintenance)</li>
<li><strong>Age Requirement:</strong> Must be 62 or older</li>
<li><strong>Loan Grows Over Time:</strong> Interest and fees accumulate, increasing the loan balance</li>
<li><strong>Repaid When:</strong> You sell, move, or pass away</li>
<li><strong>Never Owe More Than Home Value:</strong> Non-recourse loan (heirs don't inherit debt beyond home value)</li>
</ul>

<h2>Amount You Can Borrow</h2>

<h3>Principal Limit Factors:</h3>
<p>The amount available depends on:</p>

<ol>
<li><strong>Age of Youngest Borrower/Spouse:</strong> Older = more money
<ul>
<li>Age 62: ~50-55% of home value</li>
<li>Age 70: ~55-60% of home value</li>
<li>Age 80: ~60-65% of home value</li>
</ul>
</li>

<li><strong>Home Value:</strong> Higher value = more funds (up to FHA limit)
<ul>
<li>Maximum home value: $1,149,825 (2024 FHA limit)</li>
<li>If home worth $2M, calculation based on $1,149,825</li>
</ul>
</li>

<li><strong>Interest Rates:</strong> Lower rates = more available
<ul>
<li>Expected rate (used for calculation)</li>
<li>Initial rate (actual rate charged)</li>
</ul>
</li>

<li><strong>Existing Mortgage Balance:</strong> Must be paid off first
<ul>
<li>If you owe $100,000, that's deducted from available funds</li>
</ul>
</li>
</ol>

<h2>Reverse Mortgage Payment Options</h2>

<h3>1. Line of Credit (Most Popular)</h3>
<ul>
<li>Draw funds as needed</li>
<li>Only pay interest on amount withdrawn</li>
<li>Credit line grows over time</li>
<li>Most flexible option</li>
</ul>

<p><strong>Example:</strong><br>
Available: $300,000<br>
Withdraw Year 1: $50,000<br>
Interest charged on: $50,000 only<br>
Remaining credit: $250,000 (grows annually)</p>

<h3>2. Monthly Payments (Tenure)</h3>
<ul>
<li>Receive equal monthly payments</li>
<li>Payments continue for life</li>
<li>As long as you live in home</li>
<li>Amount depends on age and home value</li>
</ul>

<p><strong>Example:</strong><br>
Home Value: $400,000<br>
Age: 75<br>
Monthly Payment: ~$1,200-$1,500 for life</p>

<h3>3. Lump Sum</h3>
<ul>
<li>Receive all funds at closing</li>
<li>Fixed interest rate</li>
<li>Immediate access to maximum amount</li>
<li>Interest accrues on full amount from day one</li>
</ul>

<p><strong>Example:</strong><br>
Home Value: $500,000<br>
Age: 70<br>
Lump Sum: ~$275,000-$300,000</p>

<h3>4. Combination</h3>
<ul>
<li>Mix of lump sum + line of credit</li>
<li>Or lump sum + monthly payments</li>
<li>Customize to your needs</li>
</ul>

<p><strong>Example:</strong><br>
Total Available: $300,000<br>
Take $100,000 lump sum<br>
$200,000 as line of credit</p>

<h2>Reverse Mortgage Costs</h2>

<h3>Upfront Costs:</h3>

<table>
<tr><th>Fee Type</th><th>Amount</th></tr>
<tr><td>Origination Fee</td><td>Greater of $2,500 or 2% of first $200K + 1% above (max $6,000)</td></tr>
<tr><td>FHA Mortgage Insurance (MIP)</td><td>2% of home value upfront</td></tr>
<tr><td>Third-Party Fees</td><td>$1,500-$4,000 (appraisal, title, recording)</td></tr>
<tr><td><strong>Total Upfront</strong></td><td><strong>$6,000-$15,000+</strong></td></tr>
</table>

<p><strong>Good News:</strong> Can be financed into loan (paid from available funds)</p>

<h3>Ongoing Costs:</h3>

<ul>
<li><strong>Interest:</strong> Variable or fixed (typically 5-8%)</li>
<li><strong>Annual MIP:</strong> 0.50% of outstanding balance</li>
<li><strong>Servicing Fee:</strong> Up to $35/month (if charged)</li>
</ul>

<h3>Borrower Responsibilities (Must Continue Paying):</h3>
<ul>
<li>Property taxes</li>
<li>Homeowners insurance</li>
<li>HOA fees (if applicable)</li>
<li>Home maintenance and repairs</li>
</ul>

<p><strong>Important:</strong> Failure to pay these can trigger loan default</p>

<h2>Example Calculations by Age</h2>

<h3>Age 62 Example</h3>
<p><strong>Home Value:</strong> $400,000<br>
<strong>Existing Mortgage:</strong> $150,000<br>
<strong>Interest Rate:</strong> 6%</p>

<p><strong>Available Funds:</strong><br>
Principal Limit Factor: 52%<br>
Gross Available: $208,000<br>
Less Existing Mortgage: -$150,000<br>
Less Closing Costs: -$10,000<br>
<strong>Net Available: $48,000</strong></p>

<p><strong>Monthly Payment Option:</strong> ~$225/month for life</p>

<h3>Age 75 Example</h3>
<p><strong>Home Value:</strong> $400,000<br>
<strong>Existing Mortgage:</strong> $0 (paid off)<br>
<strong>Interest Rate:</strong> 6%</p>

<p><strong>Available Funds:</strong><br>
Principal Limit Factor: 58%<br>
Gross Available: $232,000<br>
Less Closing Costs: -$10,000<br>
<strong>Net Available: $222,000</strong></p>

<p><strong>Monthly Payment Option:</strong> ~$1,350/month for life</p>

<h3>Age 85 Example</h3>
<p><strong>Home Value:</strong> $600,000<br>
<strong>Existing Mortgage:</strong> $0<br>
<strong>Interest Rate:</strong> 6%</p>

<p><strong>Available Funds:</strong><br>
Principal Limit Factor: 64%<br>
Gross Available: $384,000<br>
Less Closing Costs: -$14,000<br>
<strong>Net Available: $370,000</strong></p>

<p><strong>Monthly Payment Option:</strong> ~$2,850/month for life</p>

<h2>When Reverse Mortgage Makes Sense</h2>

<h3>Good Candidates:</h3>
<ul>
<li>Age 70+ with significant equity</li>
<li>Plan to age in place (stay in home)</li>
<li>Need supplemental retirement income</li>
<li>Limited retirement savings</li>
<li>Want to delay Social Security</li>
<li>Need emergency fund/safety net</li>
<li>Healthcare or long-term care costs</li>
</ul>

<h3>Consider Alternatives If:</h3>
<ul>
<li>Plan to move within 5 years</li>
<li>Want to leave home to heirs</li>
<li>Have sufficient retirement income</li>
<li>Can't afford property taxes/insurance</li>
<li>Under age 70 (better options may exist)</li>
</ul>

<h2>Pros and Cons</h2>

<h3>Advantages:</h3>
<ul>
<li>✓ No monthly mortgage payments</li>
<li>✓ Stay in your home</li>
<li>✓ Tax-free proceeds</li>
<li>✓ FHA-insured (protects borrowers)</li>
<li>✓ Non-recourse (never owe more than home value)</li>
<li>✓ Flexible payment options</li>
<li>✓ Doesn't affect Social Security or Medicare</li>
</ul>

<h3>Disadvantages:</h3>
<ul>
<li>✗ High upfront costs</li>
<li>✗ Interest compounds (balance grows)</li>
<li>✗ Reduces inheritance for heirs</li>
<li>✗ Must maintain home and pay taxes/insurance</li>
<li>✗ Spouse under 62 may lose protections</li>
<li>✗ Selling home may not cover full loan</li>
</ul>

<h2>Impact on Heirs</h2>

<h3>When You Pass Away or Move Permanently:</h3>

<p><strong>Heirs Have 3 Options:</strong></p>

<ol>
<li><strong>Pay Off Loan and Keep Home</strong>
<ul>
<li>Pay loan balance or 95% of appraised value (whichever is less)</li>
<li>Can use own funds or new mortgage</li>
</ul>
</li>

<li><strong>Sell Home and Keep Difference</strong>
<ul>
<li>If sold for more than owed, heirs keep difference</li>
<li>If sold for less, FHA insurance covers shortfall</li>
</ul>
</li>

<li><strong>Walk Away</strong>
<ul>
<li>Turn over to lender</li>
<li>No liability to heirs (non-recourse)</li>
</ul>
</li>
</ol>

<h3>Example Scenarios:</h3>

<p><strong>Scenario 1: Home Appreciates</strong><br>
Original Home Value: $400,000<br>
Reverse Mortgage Balance at Death: $350,000<br>
Current Home Value: $500,000<br>
Heirs sell for $500,000<br>
Pay off loan: -$350,000<br>
<strong>Heirs Receive: $150,000</strong></p>

<p><strong>Scenario 2: Balance Exceeds Value</strong><br>
Original Home Value: $400,000<br>
Reverse Mortgage Balance: $450,000<br>
Current Home Value: $400,000<br>
Heirs sell for $400,000<br>
FHA insurance covers $50,000 shortfall<br>
<strong>Heirs Owe: $0</strong></p>

<h2>Reverse Mortgage vs. Alternatives</h2>

<table>
<tr><th>Option</th><th>Pros</th><th>Cons</th></tr>
<tr>
  <td>Reverse Mortgage</td>
  <td>No monthly payments, stay in home</td>
  <td>High costs, reduces inheritance</td>
</tr>
<tr>
  <td>Home Equity Loan</td>
  <td>Lower costs, fixed rate</td>
  <td>Monthly payments required</td>
</tr>
<tr>
  <td>HELOC</td>
  <td>Lower costs, flexible</td>
  <td>Monthly payments, variable rate</td>
</tr>
<tr>
  <td>Sell & Downsize</td>
  <td>Full equity access, lower expenses</td>
  <td>Must move, closing costs</td>
</tr>
<tr>
  <td>Sale-Leaseback</td>
  <td>Large lump sum, stay in home</td>
  <td>No longer own home, rent payments</td>
</tr>
</table>

<h2>Counseling Requirement</h2>

<p><strong>Mandatory HUD Counseling:</strong></p>
<ul>
<li>Required before applying for HECM</li>
<li>Approved counselor reviews all options</li>
<li>Ensures you understand terms</li>
<li>Discusses alternatives</li>
<li>Cost: ~$125 (some free programs)</li>
</ul>

<h3>Find a Counselor:</h3>
<p>Call HUD at 1-800-569-4287 or visit www.hud.gov/counseling</p>

<h2>Frequently Asked Questions</h2>

<h3>Will I lose my home?</h3>
<p>No. You retain ownership and can live there as long as you maintain the property, pay taxes and insurance, and use it as your primary residence.</p>

<h3>Can the lender take my home?</h3>
<p>Only if you fail to pay property taxes, homeowners insurance, or maintain the home. The loan becomes due when you permanently move or pass away.</p>

<h3>What if my spouse is under 62?</h3>
<p>You can still get a reverse mortgage, but the younger spouse won't be a borrower. They're protected from foreclosure if you pass away first, but can't access funds.</p>

<h3>Does it affect Social Security or Medicare?</h3>
<p>No. Reverse mortgage proceeds are loan advances, not income, so they don't affect Social Security or Medicare benefits.</p>

<h3>Can I pay down the loan?</h3>
<p>Yes, you can make voluntary payments anytime without penalty. This reduces the balance and preserves more equity.</p>

<h2>Calculate Your Reverse Mortgage</h2>
<p>Use the calculator above to estimate how much you can access through a reverse mortgage. Enter your age, home value, and existing mortgage balance to see available funds and payment options.</p>
    `
  },
  
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Current Home Value',
        type: 'number',
        defaultValue: '400000',
      },
      {
        name: 'age',
        label: 'Age of Youngest Borrower',
        type: 'number',
        defaultValue: '70',
      },
      {
        name: 'existingMortgage',
        label: 'Existing Mortgage Balance',
        type: 'number',
        defaultValue: '0',
      },
      {
        name: 'interestRate',
        label: 'Expected Interest Rate (%)',
        type: 'number',
        defaultValue: '6',
      },
      {
        name: 'paymentOption',
        label: 'Preferred Payment Option',
        type: 'select',
        options: [
          { value: 'lump', label: 'Lump Sum' },
          { value: 'line', label: 'Line of Credit' },
          { value: 'monthly', label: 'Monthly Payments' },
          { value: 'combo', label: 'Combination' },
        ],
        defaultValue: 'line',
      },
    ],
    results: [
      {
        label: 'Maximum Home Value (FHA Limit)',
        isCurrency: true,
      },
      {
        label: 'Principal Limit Factor',
        isCurrency: false,
      },
      {
        label: 'Gross Available Funds',
        isCurrency: true,
      },
      {
        label: 'Less: Existing Mortgage',
        isCurrency: true,
      },
      {
        label: 'Less: Estimated Closing Costs',
        isCurrency: true,
      },
      {
        label: 'Net Available to You',
        isCurrency: true,
      },
      {
        label: 'Monthly Payment Option',
        isCurrency: true,
      },
      {
        label: 'Line of Credit (Growing)',
        isCurrency: true,
      },
      {
        label: 'Estimated Total Loan in 10 Years',
        isCurrency: true,
      },
      {
        label: 'Recommendation',
        isCurrency: false,
      },
    ],
    calculate: (values: any) => {
      const homeValue = parseFloat(values.homeValue) || 0;
      const age = parseInt(values.age) || 62;
      const existingMortgage = parseFloat(values.existingMortgage) || 0;
      const interestRate = parseFloat(values.interestRate) || 6;

      const fhaLimit = 1149825;
      const cappedHomeValue = Math.min(homeValue, fhaLimit);

      let plf = 0.45;
      if (age >= 62 && age < 65) plf = 0.50;
      else if (age >= 65 && age < 70) plf = 0.54;
      else if (age >= 70 && age < 75) plf = 0.58;
      else if (age >= 75 && age < 80) plf = 0.62;
      else if (age >= 80) plf = 0.65;

      const rateFactor = Math.max(0, 1 - ((interestRate - 5) * 0.02));
      plf = plf * rateFactor;

      const grossAvailable = cappedHomeValue * plf;

      const originationFee = Math.min(6000, Math.max(2500, cappedHomeValue * 0.02));
      const mipUpfront = cappedHomeValue * 0.02;
      const thirdPartyFees = 2500;
      const closingCosts = originationFee + mipUpfront + thirdPartyFees;

      const netAvailable = Math.max(0, grossAvailable - existingMortgage - closingCosts);

      const monthlyPaymentFactor = age >= 80 ? 0.0070 : age >= 75 ? 0.0060 : age >= 70 ? 0.0050 : 0.0040;
      const monthlyPayment = netAvailable * monthlyPaymentFactor;

      const monthlyRate = interestRate / 100 / 12;
      const loanIn10Years = netAvailable * Math.pow(1 + monthlyRate + 0.005 / 12, 120);

      let recommendation = '';
      if (age < 62) {
        recommendation = 'Not eligible - must be at least 62 years old';
      } else if (age >= 62 && age < 70) {
        recommendation = `Consider waiting if possible - each year of age increases available funds by ~2-3%. At 70, you'd access ~$${((cappedHomeValue * (plf + 0.08) - existingMortgage - closingCosts) / 1000).toFixed(0)}K more`;
      } else if (netAvailable < 50000 && existingMortgage > 0) {
        recommendation = `Limited benefit - most funds go to paying off existing mortgage. Consider selling or traditional refinance instead`;
      } else if (netAvailable >= 100000) {
        recommendation = `Good candidate! $${(netAvailable / 1000).toFixed(0)}K available. Line of credit recommended for flexibility and growth`;
      } else {
        recommendation = `Moderate benefit - $${(netAvailable / 1000).toFixed(0)}K available. Ensure you can maintain taxes, insurance, and upkeep`;
      }

      return [
        { label: 'Maximum Home Value (FHA Limit)', value: cappedHomeValue.toFixed(0), isCurrency: true },
        { label: 'Principal Limit Factor', value: `${(plf * 100).toFixed(1)}%`, isCurrency: false },
        { label: 'Gross Available Funds', value: grossAvailable.toFixed(0), isCurrency: true },
        { label: 'Less: Existing Mortgage', value: existingMortgage.toFixed(0), isCurrency: true },
        { label: 'Less: Estimated Closing Costs', value: closingCosts.toFixed(0), isCurrency: true },
        { label: 'Net Available to You', value: netAvailable.toFixed(0), isCurrency: true },
        { label: 'Monthly Payment Option', value: monthlyPayment.toFixed(0), isCurrency: true },
        { label: 'Line of Credit (Growing)', value: netAvailable.toFixed(0), isCurrency: true },
        { label: 'Estimated Total Loan in 10 Years', value: loanIn10Years.toFixed(0), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
