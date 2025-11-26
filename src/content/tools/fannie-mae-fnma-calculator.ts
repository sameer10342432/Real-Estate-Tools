import { CalculatorContent } from '@/types';

export const FANNIE_MAE_FNMA_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Fannie Mae (FNMA) Loan Calculator',
  description: 'Calculate Fannie Mae conforming loan payments, eligibility, PMI costs, and DTI ratios for conventional mortgages.',
  slug: 'fannie-mae-fnma-calculator',
  icon: '🏛️',
  category: 'Mortgage Calculators',
  metaTitle: 'Fannie Mae (FNMA) Loan Calculator - Conforming Loan Limits, PMI & Eligibility 2024',
  metaDescription: 'Free Fannie Mae loan calculator to estimate conforming mortgage payments, check loan limit eligibility, calculate PMI costs, DTI ratios, and compare HomeReady program options. Essential tool for homebuyers and real estate professionals.',
  article: {
    title: 'Understanding Fannie Mae Conforming Loans',
    content: `
    <h2>What is Fannie Mae (FNMA)?</h2>
    <p>The <strong>Federal National Mortgage Association (Fannie Mae or FNMA)</strong> is a government-sponsored enterprise (GSE) that was created in 1938 during the Great Depression to expand the secondary mortgage market. Fannie Mae purchases mortgages from lenders and packages them into mortgage-backed securities (MBS), which provides liquidity to banks and enables them to make more home loans available to American consumers.</p>
    
    <p>Fannie Mae does not directly lend money to homebuyers. Instead, it buys and guarantees mortgages that meet specific criteria, known as <strong>conforming loans</strong>. By purchasing these loans from lenders, Fannie Mae frees up capital so lenders can continue making new mortgages, which helps keep mortgage rates competitive and homeownership accessible.</p>

    <h3>Fannie Mae Conforming Loan Limits 2024</h3>
    <p>A conforming loan must fall within the loan limits established by the Federal Housing Finance Agency (FHFA). For 2024, the conforming loan limits are:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Standard Limit</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">High-Cost Areas</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">1-Unit (Single-Family)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$766,550</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,149,825</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2-Unit</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$981,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,472,250</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">3-Unit</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,186,350</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,779,525</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">4-Unit</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,474,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,211,600</td>
      </tr>
    </table>
    <p>Loans exceeding these limits are considered <strong>jumbo loans</strong> and typically carry higher interest rates and stricter qualification requirements.</p>

    <h3>Fannie Mae Loan Requirements</h3>
    <p>To qualify for a Fannie Mae conforming loan, borrowers typically need to meet these requirements:</p>
    <ul>
      <li><strong>Credit Score:</strong> Minimum 620 for most loans, though 740+ scores get the best rates</li>
      <li><strong>Down Payment:</strong> As low as 3% for first-time homebuyers (HomeReady or 97% LTV programs)</li>
      <li><strong>Debt-to-Income Ratio (DTI):</strong> Typically 36-45%, up to 50% with strong compensating factors</li>
      <li><strong>Employment History:</strong> 2 years of stable employment preferred</li>
      <li><strong>Property Type:</strong> Primary residences, second homes, and investment properties eligible</li>
      <li><strong>Reserves:</strong> 2-6 months of mortgage payments in savings (varies by property type)</li>
    </ul>

    <h3>Understanding DTI (Debt-to-Income) Limits</h3>
    <p>Fannie Mae uses two DTI calculations:</p>
    <ul>
      <li><strong>Front-End DTI (Housing Ratio):</strong> Monthly housing expenses divided by gross monthly income. Fannie Mae prefers this to be 28% or less, but allows up to 36%.</li>
      <li><strong>Back-End DTI (Total Debt Ratio):</strong> All monthly debt payments (including housing) divided by gross monthly income. Standard maximum is 36-43%, but can go up to 50% with compensating factors like excellent credit or substantial reserves.</li>
    </ul>
    <p>The Fannie Mae Desktop Underwriter (DU) automated system may approve higher DTI ratios based on the overall strength of the loan application.</p>

    <h3>Credit Score Requirements and Rate Impact</h3>
    <p>Your credit score significantly affects your Fannie Mae loan:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit Score Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Eligibility</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Rate Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">760+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Excellent - All programs</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Best rates available</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">700-759</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Good - Most programs</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Slightly higher rates</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">660-699</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Fair - Standard programs</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate rate adjustment</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">620-659</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Minimum - Limited options</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Higher rates, may require larger down payment</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Below 620</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Not eligible for Fannie Mae</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Consider FHA loans</td>
      </tr>
    </table>

    <h3>Fannie Mae HomeReady Program</h3>
    <p>The <strong>HomeReady mortgage program</strong> is designed for low-to-moderate income borrowers:</p>
    <ul>
      <li><strong>Down Payment:</strong> Only 3% required</li>
      <li><strong>Income Limit:</strong> 80% of Area Median Income (AMI) for the property location</li>
      <li><strong>Credit Score:</strong> Minimum 620</li>
      <li><strong>Reduced PMI:</strong> Lower mortgage insurance premiums than standard loans</li>
      <li><strong>Flexible Income Sources:</strong> Rental income from accessory dwelling units (ADUs) and boarder income can be counted</li>
      <li><strong>Homebuyer Education:</strong> Required online course helps prepare borrowers for homeownership</li>
    </ul>
    <p>HomeReady is an excellent option for first-time homebuyers, multi-generational households, and those with non-traditional income sources.</p>

    <h3>Private Mortgage Insurance (PMI) with Fannie Mae Loans</h3>
    <p>When you put down less than 20% on a Fannie Mae conforming loan, you'll typically pay PMI:</p>
    <ul>
      <li><strong>PMI Cost Range:</strong> 0.3% to 1.5% of the loan amount annually</li>
      <li><strong>Factors Affecting PMI:</strong> Credit score, LTV ratio, loan type, and property type</li>
      <li><strong>PMI Removal:</strong> Can be removed when you reach 20% equity (or automatically at 22%)</li>
      <li><strong>HomeReady Advantage:</strong> Reduced PMI rates for eligible borrowers</li>
      <li><strong>Payment Options:</strong> Monthly, single upfront premium, or lender-paid (built into rate)</li>
    </ul>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">LTV Ratio</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 760+</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 700-759</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 660-699</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">95% (5% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.45%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.65%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.95%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">90% (10% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.30%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.45%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.70%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">85% (15% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.20%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.35%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.55%</td>
      </tr>
    </table>

    <h3>Fannie Mae vs. Freddie Mac: Key Differences</h3>
    <p>Both are GSEs that purchase conforming loans, but there are subtle differences:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fannie Mae</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Freddie Mac</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Founded</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1938</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1970</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Automated Underwriting</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Desktop Underwriter (DU)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Loan Product Advisor (LPA)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Low-Income Program</td>
        <td style="border: 1px solid #ddd; padding: 8px;">HomeReady</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Home Possible</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Loan Source</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Primarily mortgage banks</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Primarily thrifts/credit unions</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Down Payment Minimum</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3%</td>
      </tr>
    </table>
    <p>From a borrower's perspective, the differences are minimal as both have similar loan limits and requirements. Your lender typically decides which GSE to sell your loan to after closing.</p>

    <h3>Property Type Considerations</h3>
    <p>Fannie Mae loans can be used for various property types with different requirements:</p>
    <ul>
      <li><strong>Single-Family Homes:</strong> Standard requirements apply, most favorable terms</li>
      <li><strong>Condominiums:</strong> Must meet Fannie Mae condo project approval standards; HOA reserves and owner-occupancy ratios reviewed</li>
      <li><strong>2-4 Unit Properties:</strong> Higher loan limits, but may require larger down payment (15-25%) and reserves</li>
      <li><strong>Manufactured Homes:</strong> Must be permanently affixed, meet HUD standards; some additional restrictions apply</li>
    </ul>

    <h3>How to Use This Fannie Mae Calculator</h3>
    <p>Enter your information to estimate your conforming loan payment and eligibility:</p>
    <ol>
      <li><strong>Property Value:</strong> The purchase price or estimated value of the home</li>
      <li><strong>Loan Amount:</strong> How much you need to borrow (property value minus down payment)</li>
      <li><strong>Interest Rate:</strong> The annual interest rate on your loan</li>
      <li><strong>Loan Term:</strong> Typically 30 or 15 years</li>
      <li><strong>Credit Score:</strong> Your FICO score (affects PMI and rate eligibility)</li>
      <li><strong>Annual Income:</strong> Your gross annual income before taxes</li>
      <li><strong>Monthly Debts:</strong> Total monthly debt payments (car loans, credit cards, student loans)</li>
      <li><strong>Property Type:</strong> Type of property you're purchasing</li>
    </ol>

    <h3>Tips for Getting the Best Fannie Mae Loan Terms</h3>
    <ul>
      <li><strong>Improve Your Credit:</strong> Scores above 740 get the best rates and lowest PMI</li>
      <li><strong>Save for 20% Down:</strong> Eliminates PMI entirely</li>
      <li><strong>Reduce Debts:</strong> Lower DTI improves approval odds and may unlock better rates</li>
      <li><strong>Shop Multiple Lenders:</strong> Rates and fees vary significantly between lenders</li>
      <li><strong>Consider Points:</strong> Paying points upfront can lower your rate if you plan to stay long-term</li>
      <li><strong>Check HomeReady:</strong> If you qualify, this program offers reduced PMI and only 3% down</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 320000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: 720,
      },
      {
        name: 'annualIncome',
        label: 'Annual Income ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debts ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'single-family',
        options: [
          { value: 'single-family', label: 'Single-Family Home' },
          { value: 'condo', label: 'Condominium' },
          { value: '2-4-unit', label: '2-4 Unit Property' },
          { value: 'manufactured', label: 'Manufactured Home' },
        ],
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'DTI Ratio', isCurrency: false },
      { label: 'LTV Ratio', isCurrency: false },
      { label: 'PMI Required', isCurrency: false },
      { label: 'Monthly PMI Amount', isCurrency: true },
      { label: 'Conforming Limit Status', isCurrency: false },
      { label: 'Eligibility Status', isCurrency: false },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Affordability Rating', isCurrency: false },
    ],
    calculate: (values) => {
      const { propertyValue, loanAmount, interestRate, loanTermYears, creditScore, annualIncome, monthlyDebts, propertyType } = values;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;
      
      const principalAndInterest = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const ltvRatio = (loanAmount / propertyValue) * 100;
      
      let conformingLimit = 766550;
      if (propertyType === '2-4-unit') {
        conformingLimit = 981500;
      }
      
      const isConforming = loanAmount <= conformingLimit;
      const conformingStatus = isConforming 
        ? `Within Limit ($${conformingLimit.toLocaleString()})` 
        : `Exceeds Limit (Jumbo Loan Required)`;
      
      let pmiRequired = ltvRatio > 80;
      let annualPmiRate = 0;
      
      if (pmiRequired) {
        if (creditScore >= 760) {
          annualPmiRate = ltvRatio > 90 ? 0.0045 : ltvRatio > 85 ? 0.003 : 0.002;
        } else if (creditScore >= 700) {
          annualPmiRate = ltvRatio > 90 ? 0.0065 : ltvRatio > 85 ? 0.0045 : 0.0035;
        } else if (creditScore >= 660) {
          annualPmiRate = ltvRatio > 90 ? 0.0095 : ltvRatio > 85 ? 0.007 : 0.0055;
        } else {
          annualPmiRate = ltvRatio > 90 ? 0.012 : ltvRatio > 85 ? 0.009 : 0.007;
        }
      }
      
      const monthlyPmi = pmiRequired ? (loanAmount * annualPmiRate) / 12 : 0;
      
      const totalMonthlyPayment = principalAndInterest + monthlyPmi;
      
      const monthlyGrossIncome = annualIncome / 12;
      const totalMonthlyDebtPayments = totalMonthlyPayment + monthlyDebts;
      const dtiRatio = (totalMonthlyDebtPayments / monthlyGrossIncome) * 100;
      
      const totalInterestPaid = (principalAndInterest * numberOfPayments) - loanAmount;
      
      let eligibilityStatus = 'Eligible';
      const eligibilityIssues: string[] = [];
      
      if (creditScore < 620) {
        eligibilityIssues.push('Credit score below 620 minimum');
      }
      if (dtiRatio > 50) {
        eligibilityIssues.push('DTI exceeds 50% maximum');
      }
      if (!isConforming) {
        eligibilityIssues.push('Loan exceeds conforming limits');
      }
      if (ltvRatio > 97) {
        eligibilityIssues.push('LTV exceeds 97% maximum');
      }
      
      if (eligibilityIssues.length > 0) {
        eligibilityStatus = `Issues: ${eligibilityIssues.join('; ')}`;
      } else if (creditScore >= 740 && dtiRatio <= 36 && ltvRatio <= 80) {
        eligibilityStatus = 'Excellent - Strong Application';
      } else if (creditScore >= 680 && dtiRatio <= 43) {
        eligibilityStatus = 'Good - Likely Approval';
      } else {
        eligibilityStatus = 'Eligible - May Need Review';
      }
      
      let affordabilityRating = '';
      const housingRatio = (totalMonthlyPayment / monthlyGrossIncome) * 100;
      
      if (housingRatio <= 25) {
        affordabilityRating = 'Excellent - Very Affordable';
      } else if (housingRatio <= 28) {
        affordabilityRating = 'Good - Comfortable';
      } else if (housingRatio <= 33) {
        affordabilityRating = 'Moderate - Manageable';
      } else if (housingRatio <= 40) {
        affordabilityRating = 'Stretched - Consider Lower Price';
      } else {
        affordabilityRating = 'High Risk - May Be Unaffordable';
      }

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'DTI Ratio', value: `${dtiRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'LTV Ratio', value: `${ltvRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'PMI Required', value: pmiRequired ? 'Yes' : 'No', isCurrency: false },
        { label: 'Monthly PMI Amount', value: monthlyPmi.toFixed(2), isCurrency: true },
        { label: 'Conforming Limit Status', value: conformingStatus, isCurrency: false },
        { label: 'Eligibility Status', value: eligibilityStatus, isCurrency: false },
        { label: 'Total Interest Paid', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Affordability Rating', value: affordabilityRating, isCurrency: false },
      ];
    },
  },
};
