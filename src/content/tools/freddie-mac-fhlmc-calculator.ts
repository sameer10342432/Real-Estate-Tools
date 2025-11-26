import { CalculatorContent } from '@/types';

export const FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Freddie Mac (FHLMC) Loan Calculator',
  description: 'Calculate Freddie Mac conforming loan payments, Home Possible eligibility, PMI costs, and DTI ratios for conventional mortgages.',
  slug: 'freddie-mac-fhlmc-calculator',
  icon: '🏠',
  category: 'Mortgage Calculators',
  metaTitle: 'Freddie Mac (FHLMC) Loan Calculator - Home Possible, Conforming Limits & Eligibility 2024',
  metaDescription: 'Free Freddie Mac loan calculator to estimate conforming mortgage payments, check Home Possible program eligibility, calculate PMI costs, DTI ratios, and compare loan options. Essential tool for homebuyers seeking affordable mortgage solutions.',
  article: {
    title: 'Understanding Freddie Mac Conforming Loans',
    content: `
    <h2>What is Freddie Mac (FHLMC)?</h2>
    <p>The <strong>Federal Home Loan Mortgage Corporation (Freddie Mac or FHLMC)</strong> is a government-sponsored enterprise (GSE) created by Congress in 1970 to expand the secondary mortgage market and increase homeownership opportunities for Americans. Like its counterpart Fannie Mae, Freddie Mac does not directly lend money to homebuyers. Instead, it purchases mortgages from lenders, packages them into mortgage-backed securities (MBS), and sells them to investors, which provides liquidity to the mortgage market and helps keep interest rates competitive.</p>
    
    <p>Freddie Mac plays a vital role in making homeownership more accessible by ensuring lenders have the capital needed to continue making home loans. When you obtain a conventional mortgage, there's a good chance it will eventually be purchased by either Freddie Mac or Fannie Mae, though your lender typically continues to service the loan.</p>

    <h3>Freddie Mac Conforming Loan Limits 2024</h3>
    <p>Freddie Mac purchases <strong>conforming loans</strong> that meet specific criteria established by the Federal Housing Finance Agency (FHFA). For 2024, the conforming loan limits are:</p>
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
    <p>Loans exceeding these limits are classified as <strong>jumbo loans</strong> and require different underwriting standards with typically higher interest rates.</p>

    <h3>Home Possible Program</h3>
    <p>The <strong>Home Possible mortgage program</strong> is Freddie Mac's signature affordable lending initiative designed for low-to-moderate income borrowers:</p>
    <ul>
      <li><strong>Down Payment:</strong> As low as 3% for qualified borrowers</li>
      <li><strong>Income Limit:</strong> Must not exceed 80% of Area Median Income (AMI) for the property location</li>
      <li><strong>Credit Score:</strong> Minimum 660 for standard pricing, though some lenders may accept lower scores</li>
      <li><strong>Reduced PMI:</strong> Lower private mortgage insurance premiums compared to standard loans</li>
      <li><strong>Flexible Income Sources:</strong> Allows non-borrower household income, boarder income, and accessory dwelling unit (ADU) rental income</li>
      <li><strong>No First-Time Buyer Requirement:</strong> Unlike some programs, repeat homebuyers can qualify</li>
      <li><strong>Homebuyer Education:</strong> Required for at least one borrower when all borrowers are first-time homebuyers</li>
    </ul>
    <p>Home Possible is particularly beneficial for households with non-traditional income sources, multi-generational families, and borrowers with limited savings for down payments.</p>

    <h3>Credit Score Requirements</h3>
    <p>Your credit score significantly impacts your Freddie Mac loan terms:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit Score Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Eligibility</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Rate Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">760+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Excellent - All programs</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Best rates and lowest PMI</td>
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
        <td style="border: 1px solid #ddd; padding: 8px;">Higher rates, larger down payment may be required</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Below 620</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Not eligible for Freddie Mac</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Consider FHA loans instead</td>
      </tr>
    </table>

    <h3>DTI (Debt-to-Income) Limits</h3>
    <p>Freddie Mac uses the Loan Product Advisor (LPA) automated underwriting system to evaluate DTI ratios:</p>
    <ul>
      <li><strong>Front-End DTI (Housing Ratio):</strong> Monthly housing expenses (PITI) divided by gross monthly income. Freddie Mac prefers this to be 28% or less.</li>
      <li><strong>Back-End DTI (Total Debt Ratio):</strong> All monthly debt payments including housing divided by gross monthly income. Standard maximum is 43-45%, but can go up to 50% with strong compensating factors.</li>
      <li><strong>Compensating Factors:</strong> Excellent credit, substantial reserves, low LTV, or stable employment history can allow for higher DTI approval.</li>
    </ul>
    <p>The LPA system may approve higher DTI ratios based on the overall strength of the loan application and borrower profile.</p>

    <h3>LTV (Loan-to-Value) Requirements</h3>
    <p>LTV requirements vary by property type and occupancy:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Occupancy Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Maximum LTV</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Primary Residence</td>
        <td style="border: 1px solid #ddd; padding: 8px;">97% (3% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Home Possible or standard 97% LTV programs</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Second Home</td>
        <td style="border: 1px solid #ddd; padding: 8px;">90% (10% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Higher credit score may be required</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Investment Property</td>
        <td style="border: 1px solid #ddd; padding: 8px;">85% (15% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">25% down for 2-4 unit properties</td>
      </tr>
    </table>

    <h3>Freddie Mac vs. Fannie Mae: Key Differences</h3>
    <p>While both are GSEs with similar missions, there are notable differences:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Freddie Mac</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fannie Mae</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Founded</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1970</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1938</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Automated Underwriting</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Loan Product Advisor (LPA)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Desktop Underwriter (DU)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Low-Income Program</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Home Possible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">HomeReady</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Primary Loan Source</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Thrifts, credit unions, smaller banks</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Large mortgage banks</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Credit Report Provider</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Accepts tri-merge and bi-merge reports</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Primarily tri-merge reports</td>
      </tr>
    </table>
    <p>From a borrower's perspective, the differences are minimal since both have identical loan limits and similar requirements. Your lender determines which GSE purchases your loan after closing.</p>

    <h3>Private Mortgage Insurance (PMI) with Freddie Mac Loans</h3>
    <p>When you put down less than 20% on a Freddie Mac conforming loan, you'll typically pay PMI:</p>
    <ul>
      <li><strong>PMI Cost Range:</strong> 0.25% to 1.5% of the loan amount annually</li>
      <li><strong>Factors Affecting PMI:</strong> Credit score, LTV ratio, loan type, and occupancy type</li>
      <li><strong>PMI Removal:</strong> Can be requested when you reach 20% equity, automatically removed at 22%</li>
      <li><strong>Home Possible Advantage:</strong> Reduced PMI rates for eligible borrowers</li>
    </ul>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">LTV Ratio</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 760+</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 700-759</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Credit 660-699</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">97% (3% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.55%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.75%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.05%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">95% (5% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.45%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.65%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.95%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">90% (10% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.30%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.45%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.70%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">85% (15% down)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.20%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.35%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.55%</td>
      </tr>
    </table>

    <h3>Best Use Cases for Freddie Mac Loans</h3>
    <p>Freddie Mac loans are ideal for:</p>
    <ul>
      <li><strong>First-Time Homebuyers:</strong> Low down payment options through Home Possible and 97% LTV programs</li>
      <li><strong>Low-to-Moderate Income Borrowers:</strong> Home Possible offers flexible income qualifications</li>
      <li><strong>Borrowers with Limited Savings:</strong> 3% down payment programs with gift funds allowed</li>
      <li><strong>Multi-Generational Households:</strong> Non-borrower income can be considered</li>
      <li><strong>Investment Property Buyers:</strong> Competitive rates for 1-4 unit properties</li>
      <li><strong>Second Home Purchasers:</strong> Available with 10% minimum down payment</li>
    </ul>

    <h3>How to Use This Freddie Mac Calculator</h3>
    <p>Enter your information to estimate your conforming loan payment and eligibility:</p>
    <ol>
      <li><strong>Property Value:</strong> The purchase price or estimated value of the home</li>
      <li><strong>Loan Amount:</strong> How much you need to borrow (property value minus down payment)</li>
      <li><strong>Interest Rate:</strong> The annual interest rate on your loan</li>
      <li><strong>Loan Term:</strong> Typically 30 or 15 years</li>
      <li><strong>Credit Score:</strong> Your FICO score affects PMI and rate eligibility</li>
      <li><strong>Gross Monthly Income:</strong> Your monthly income before taxes</li>
      <li><strong>Monthly Debts:</strong> Total monthly debt payments excluding housing</li>
      <li><strong>Occupancy Type:</strong> Primary residence, second home, or investment property</li>
    </ol>

    <h3>Tips for Getting the Best Freddie Mac Loan Terms</h3>
    <ul>
      <li><strong>Boost Your Credit Score:</strong> Scores above 740 unlock the best rates and lowest PMI</li>
      <li><strong>Save for 20% Down:</strong> Eliminates PMI requirement entirely</li>
      <li><strong>Reduce Existing Debts:</strong> Lower DTI improves approval odds and may qualify you for better rates</li>
      <li><strong>Shop Multiple Lenders:</strong> Rates and fees vary significantly between lenders</li>
      <li><strong>Check Home Possible Eligibility:</strong> If you meet income limits, this program offers reduced PMI</li>
      <li><strong>Consider Shorter Terms:</strong> 15-year loans have lower rates but higher monthly payments</li>
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
        name: 'grossMonthlyIncome',
        label: 'Gross Monthly Income ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debts ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'occupancyType',
        label: 'Occupancy Type',
        type: 'select',
        defaultValue: 'primary',
        options: [
          { value: 'primary', label: 'Primary Residence' },
          { value: 'second-home', label: 'Second Home' },
          { value: 'investment', label: 'Investment Property' },
        ],
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'DTI Ratio', isCurrency: false },
      { label: 'LTV Ratio', isCurrency: false },
      { label: 'PMI Required', isCurrency: false },
      { label: 'PMI Estimate', isCurrency: true },
      { label: 'Home Possible Eligible', isCurrency: false },
      { label: 'Conforming Status', isCurrency: false },
      { label: 'Total Loan Cost', isCurrency: true },
      { label: 'Eligibility Assessment', isCurrency: false },
    ],
    calculate: (values) => {
      const { propertyValue, loanAmount, interestRate, loanTermYears, creditScore, grossMonthlyIncome, monthlyDebts, occupancyType } = values;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;
      
      const principalAndInterest = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const ltvRatio = (loanAmount / propertyValue) * 100;
      
      const conformingLimit = 766550;
      const isConforming = loanAmount <= conformingLimit;
      const conformingStatus = isConforming 
        ? `Within Limit ($${conformingLimit.toLocaleString()})` 
        : `Exceeds Limit - Jumbo Loan Required`;
      
      let maxLtv = 97;
      if (occupancyType === 'second-home') {
        maxLtv = 90;
      } else if (occupancyType === 'investment') {
        maxLtv = 85;
      }
      
      let pmiRequired = ltvRatio > 80 && occupancyType !== 'investment';
      let annualPmiRate = 0;
      
      if (pmiRequired) {
        if (creditScore >= 760) {
          annualPmiRate = ltvRatio > 95 ? 0.0055 : ltvRatio > 90 ? 0.0045 : ltvRatio > 85 ? 0.003 : 0.002;
        } else if (creditScore >= 700) {
          annualPmiRate = ltvRatio > 95 ? 0.0075 : ltvRatio > 90 ? 0.0065 : ltvRatio > 85 ? 0.0045 : 0.0035;
        } else if (creditScore >= 660) {
          annualPmiRate = ltvRatio > 95 ? 0.0105 : ltvRatio > 90 ? 0.0095 : ltvRatio > 85 ? 0.007 : 0.0055;
        } else {
          annualPmiRate = ltvRatio > 95 ? 0.015 : ltvRatio > 90 ? 0.012 : ltvRatio > 85 ? 0.009 : 0.007;
        }
      }
      
      const monthlyPmi = pmiRequired ? (loanAmount * annualPmiRate) / 12 : 0;
      
      const totalMonthlyPayment = principalAndInterest + monthlyPmi;
      
      const totalMonthlyDebtPayments = totalMonthlyPayment + monthlyDebts;
      const dtiRatio = (totalMonthlyDebtPayments / grossMonthlyIncome) * 100;
      
      const totalInterestPaid = (principalAndInterest * numberOfPayments) - loanAmount;
      const totalPmiPaid = monthlyPmi * Math.min(numberOfPayments, Math.ceil((ltvRatio - 78) / (100 / numberOfPayments) * 12));
      const totalLoanCost = loanAmount + totalInterestPaid + (pmiRequired ? totalPmiPaid : 0);
      
      const amiThreshold = grossMonthlyIncome * 12;
      const isHomePossibleEligible = occupancyType === 'primary' && 
                                     creditScore >= 660 && 
                                     amiThreshold <= 100000;
      const homePossibleEligible = isHomePossibleEligible 
        ? 'Likely Eligible - Income within typical limits' 
        : occupancyType !== 'primary' 
          ? 'Not Eligible - Primary residence required'
          : creditScore < 660 
            ? 'Not Eligible - Credit score below 660'
            : 'May Not Qualify - Income may exceed AMI limits';
      
      let eligibilityAssessment = 'Eligible';
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
      if (ltvRatio > maxLtv) {
        eligibilityIssues.push(`LTV exceeds ${maxLtv}% maximum for ${occupancyType.replace('-', ' ')}`);
      }
      
      if (eligibilityIssues.length > 0) {
        eligibilityAssessment = `Issues: ${eligibilityIssues.join('; ')}`;
      } else if (creditScore >= 740 && dtiRatio <= 36 && ltvRatio <= 80) {
        eligibilityAssessment = 'Excellent - Strong Application';
      } else if (creditScore >= 680 && dtiRatio <= 43) {
        eligibilityAssessment = 'Good - Likely Approval';
      } else {
        eligibilityAssessment = 'Eligible - May Require Additional Review';
      }

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'DTI Ratio', value: `${dtiRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'LTV Ratio', value: `${ltvRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'PMI Required', value: pmiRequired ? 'Yes' : 'No', isCurrency: false },
        { label: 'PMI Estimate', value: monthlyPmi.toFixed(2), isCurrency: true },
        { label: 'Home Possible Eligible', value: homePossibleEligible, isCurrency: false },
        { label: 'Conforming Status', value: conformingStatus, isCurrency: false },
        { label: 'Total Loan Cost', value: totalLoanCost.toFixed(2), isCurrency: true },
        { label: 'Eligibility Assessment', value: eligibilityAssessment, isCurrency: false },
      ];
    },
  },
};
