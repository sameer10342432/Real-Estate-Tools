import { CalculatorContent } from '@/types';

export const PORTFOLIO_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Portfolio Loan Calculator (Investor)',
  description: 'Calculate portfolio loan payments, DSCR, cash flow, and qualification status for real estate investors with multiple properties.',
  icon: '📊',
  category: 'Investment',
  slug: 'portfolio-loan-calculator',
  metaTitle: 'Portfolio Loan Calculator for Real Estate Investors | DSCR & Cash Flow Analysis',
  metaDescription: 'Free portfolio loan calculator for real estate investors. Calculate monthly payments, debt service coverage ratio (DSCR), cash flow, LTV, and investor qualification status for multi-property portfolios.',
  article: {
    title: 'Portfolio Loan Calculator: Complete Guide for Real Estate Investors',
    content: `
    <h2>What is a Portfolio Loan?</h2>
    <p>A portfolio loan is a type of mortgage that a lender originates and keeps on their own books rather than selling to secondary market investors like Fannie Mae or Freddie Mac. Unlike conventional loans that must conform to strict government-sponsored enterprise (GSE) guidelines, portfolio loans offer significantly more flexibility in underwriting criteria, property types, and borrower qualifications. This makes them an essential financing tool for real estate investors who may not fit the conventional lending box.</p>

    <p>Portfolio lenders—typically community banks, credit unions, and private lenders—retain these loans in their investment portfolios, giving them the freedom to set their own lending standards. This flexibility comes at a cost: portfolio loans generally carry higher interest rates (typically 0.5% to 2% above conventional rates) and may require larger down payments, but they open doors for investors who cannot qualify for traditional financing.</p>

    <h3>How Portfolio Loans Differ from Conventional Loans</h3>
    <p>Understanding the key differences between portfolio and conventional loans helps investors determine which financing option best suits their needs:</p>
    
    <table>
      <tr>
        <th>Feature</th>
        <th>Portfolio Loan</th>
        <th>Conventional Loan</th>
      </tr>
      <tr>
        <td>Sold to Secondary Market</td>
        <td>No - kept on lender's books</td>
        <td>Yes - sold to Fannie/Freddie</td>
      </tr>
      <tr>
        <td>Property Limit</td>
        <td>No limit (often 20+ properties)</td>
        <td>Maximum 10 financed properties</td>
      </tr>
      <tr>
        <td>Underwriting Flexibility</td>
        <td>High - lender sets guidelines</td>
        <td>Low - must meet GSE standards</td>
      </tr>
      <tr>
        <td>Interest Rates</td>
        <td>0.5%-2% higher than conventional</td>
        <td>Market rates</td>
      </tr>
      <tr>
        <td>Down Payment</td>
        <td>20%-30% typical</td>
        <td>15%-25% for investment properties</td>
      </tr>
      <tr>
        <td>DTI Requirements</td>
        <td>More flexible (up to 55%)</td>
        <td>Strict (typically 43% max)</td>
      </tr>
    </table>

    <h3>Benefits of Portfolio Loans for Investors</h3>
    <p>Portfolio loans offer several compelling advantages for real estate investors building wealth through property ownership:</p>
    <ul>
      <li><strong>No Property Count Limits:</strong> Unlike conventional loans that cap investors at 10 financed properties, portfolio lenders may finance 20, 50, or even 100+ properties for qualified borrowers.</li>
      <li><strong>DSCR-Based Underwriting:</strong> Many portfolio lenders focus on the property's Debt Service Coverage Ratio (DSCR) rather than personal income, making qualification easier for investors whose tax returns show minimal income due to depreciation and deductions.</li>
      <li><strong>Flexible Property Types:</strong> Portfolio loans can finance non-warrantable condos, mixed-use buildings, commercial properties, short-term rentals, and other property types that conventional lenders avoid.</li>
      <li><strong>Non-QM Options:</strong> Portfolio lenders offer non-qualified mortgage (Non-QM) products like bank statement loans, asset depletion loans, and interest-only options.</li>
      <li><strong>Entity Lending:</strong> Many portfolio loans can be taken in the name of an LLC or corporation, providing liability protection without the personal guarantee complications of conventional loans.</li>
      <li><strong>Relationship Banking:</strong> Portfolio lenders often develop long-term relationships with investors, leading to better terms and faster closings on future deals.</li>
    </ul>

    <h3>Typical Portfolio Loan Terms</h3>
    <ul>
      <li><strong>Interest Rates:</strong> 6.5% to 10%, depending on property type, LTV, and borrower qualifications</li>
      <li><strong>Loan Terms:</strong> 15, 20, 25, or 30-year amortization (some offer 5/1 or 7/1 ARM structures)</li>
      <li><strong>Down Payment:</strong> 20% to 30% of property value</li>
      <li><strong>Loan-to-Value (LTV):</strong> Maximum 70% to 80%</li>
      <li><strong>Minimum DSCR:</strong> 1.0 to 1.25 (property income must cover 100%-125% of debt service)</li>
      <li><strong>Prepayment Penalties:</strong> Often 3-5 year step-down penalties (e.g., 5-4-3-2-1%)</li>
      <li><strong>Closing Costs:</strong> 2% to 4% of loan amount</li>
    </ul>

    <h3>Which Lenders Offer Portfolio Loans?</h3>
    <p>Portfolio loans are available from several types of financial institutions:</p>
    <ul>
      <li><strong>Community Banks:</strong> Local and regional banks often keep investment property loans in their portfolios. They value relationship banking and may offer better terms for depositors.</li>
      <li><strong>Credit Unions:</strong> Some credit unions offer portfolio loans to members, often with competitive rates and lower fees than traditional banks.</li>
      <li><strong>Private/Hard Money Lenders:</strong> These lenders specialize in bridge loans and short-term financing, with rates typically ranging from 8% to 15%.</li>
      <li><strong>DSCR Lenders:</strong> Specialized non-QM lenders that qualify borrowers based solely on property cash flow, not personal income.</li>
      <li><strong>Portfolio Loan Brokers:</strong> Mortgage brokers with access to multiple portfolio lender products can help find the best terms for specific situations.</li>
    </ul>

    <h3>Best Use Cases for Portfolio Loans</h3>
    <p><strong>Multiple Properties:</strong> Investors who already own 5-10 financed properties and can no longer qualify for conventional loans benefit most from portfolio financing. Lenders evaluate the entire portfolio's cash flow and equity position.</p>
    
    <p><strong>Unique Properties:</strong> Non-warrantable condos, mixed-use buildings, properties with commercial space, short-term rentals, and manufactured homes often require portfolio financing because they don't meet GSE guidelines.</p>
    
    <p><strong>Self-Employed Borrowers:</strong> Investors who minimize taxable income through depreciation, deductions, and entity structures may not show enough W-2 income to qualify conventionally. Portfolio lenders can use bank statements, asset depletion, or DSCR to qualify these borrowers.</p>
    
    <p><strong>Recent Credit Events:</strong> Borrowers recovering from bankruptcy, foreclosure, or short sale may find portfolio lenders willing to approve loans with shorter seasoning requirements than conventional lenders require.</p>
    
    <p><strong>Complex Ownership Structures:</strong> When properties are held in LLCs, trusts, or partnerships, portfolio lenders offer more flexibility in structuring loans to match the ownership entity.</p>

    <h3>Risks and Considerations</h3>
    <p>While portfolio loans offer flexibility, investors should carefully consider these risks:</p>
    <ul>
      <li><strong>Higher Costs:</strong> Elevated interest rates and fees mean higher monthly payments and total interest paid over the loan term.</li>
      <li><strong>Prepayment Penalties:</strong> Many portfolio loans include step-down prepayment penalties that can cost thousands if you sell or refinance within the first few years.</li>
      <li><strong>Balloon Payments:</strong> Some portfolio loans require balloon payments after 5-10 years, creating refinancing risk if rates rise or property values decline.</li>
      <li><strong>Lender Stability:</strong> Because the loan stays on the lender's books, the lender's financial health matters. If the lender experiences difficulties, loan terms could change or servicing could be sold.</li>
      <li><strong>Limited Rate Locks:</strong> Portfolio loans may have shorter rate lock periods, exposing borrowers to interest rate volatility during the closing process.</li>
      <li><strong>Personal Guarantees:</strong> Even when borrowing through an LLC, portfolio lenders typically require personal guarantees, negating some liability protection benefits.</li>
    </ul>

    <h3>Understanding the Debt Service Coverage Ratio (DSCR)</h3>
    <p>The DSCR is the most critical metric for portfolio loan qualification. It measures whether a property's income adequately covers its debt obligations:</p>
    <p><strong>DSCR = Monthly Rental Income ÷ Monthly Debt Service (Principal + Interest + Taxes + Insurance)</strong></p>
    <ul>
      <li><strong>DSCR = 1.0:</strong> Property income exactly covers debt payments (break-even)</li>
      <li><strong>DSCR = 1.25:</strong> Income is 25% greater than debt payments (most lenders' minimum)</li>
      <li><strong>DSCR > 1.5:</strong> Strong cash flow position, may qualify for better rates</li>
      <li><strong>DSCR < 1.0:</strong> Negative cash flow, may not qualify unless offset by other income or assets</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property and financial details to analyze your portfolio loan scenario:</p>
    <ul>
      <li><strong>Property Value:</strong> Current market value of the property or properties being financed</li>
      <li><strong>Loan Amount:</strong> Total mortgage amount requested</li>
      <li><strong>Interest Rate:</strong> Expected portfolio loan rate (typically 6.5%-10%)</li>
      <li><strong>Loan Term:</strong> Amortization period in years</li>
      <li><strong>Number of Properties:</strong> Total properties in your portfolio</li>
      <li><strong>Monthly Rental Income:</strong> Gross rental income from the property/portfolio</li>
      <li><strong>Personal Income:</strong> Your annual personal income (for qualification analysis)</li>
      <li><strong>Existing Mortgage Payments:</strong> Current monthly mortgage obligations</li>
      <li><strong>Property Type:</strong> Type of investment property</li>
    </ul>
    <p>The calculator will display your monthly payment, DSCR, cash flow analysis, LTV ratio, total interest costs, portfolio equity position, and investor qualification status.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Total Property Value ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 375000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTermYears',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'numberOfProperties',
        label: 'Number of Properties',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'monthlyRentalIncome',
        label: 'Monthly Rental Income ($)',
        type: 'number',
        defaultValue: 4500,
      },
      {
        name: 'personalIncome',
        label: 'Annual Personal Income ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'existingMortgagePayments',
        label: 'Existing Monthly Mortgage Payments ($)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'single-family',
        options: [
          { value: 'single-family', label: 'Single-Family' },
          { value: 'multi-family', label: 'Multi-Family' },
          { value: 'commercial', label: 'Commercial' },
          { value: 'mixed-use', label: 'Mixed-Use' },
        ],
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Debt Service Coverage Ratio (DSCR)', isCurrency: false },
      { label: 'Monthly Cash Flow', isCurrency: true },
      { label: 'Loan-to-Value Ratio (LTV)', isCurrency: false },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Portfolio Value', isCurrency: true },
      { label: 'Total Debt', isCurrency: true },
      { label: 'Equity Position', isCurrency: true },
      { label: 'Investor Qualification Status', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        propertyValue,
        loanAmount,
        interestRate,
        loanTermYears,
        numberOfProperties,
        monthlyRentalIncome,
        personalIncome,
        existingMortgagePayments,
        propertyType,
      } = values;

      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;

      let monthlyPayment = 0;
      if (monthlyRate > 0) {
        monthlyPayment =
          (loanAmount *
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      } else {
        monthlyPayment = loanAmount / numberOfPayments;
      }

      const dscr = monthlyRentalIncome / monthlyPayment;

      const monthlyTaxesInsurance = propertyValue * 0.015 / 12;
      const totalMonthlyDebtService = monthlyPayment + monthlyTaxesInsurance;
      const monthlyExpenses = monthlyRentalIncome * 0.25;
      const cashFlow = monthlyRentalIncome - totalMonthlyDebtService - monthlyExpenses;

      const ltvRatio = (loanAmount / propertyValue) * 100;

      const totalInterestPaid = monthlyPayment * numberOfPayments - loanAmount;

      const portfolioValue = propertyValue * numberOfProperties;

      const totalDebt = loanAmount + (existingMortgagePayments * 12 * 20);

      const equityPosition = portfolioValue - totalDebt;

      let qualificationStatus = '';
      const monthlyPersonalIncome = personalIncome / 12;
      const totalMonthlyDebt = monthlyPayment + existingMortgagePayments;
      const dti = (totalMonthlyDebt / monthlyPersonalIncome) * 100;

      if (dscr >= 1.25 && ltvRatio <= 75) {
        qualificationStatus = 'Strong Qualification - Meets most portfolio lender requirements';
      } else if (dscr >= 1.0 && ltvRatio <= 80) {
        qualificationStatus = 'Likely Qualified - May need additional documentation or reserves';
      } else if (dscr >= 0.75 && dti <= 50) {
        qualificationStatus = 'Marginal - May qualify with strong personal income or additional collateral';
      } else {
        qualificationStatus = 'Needs Improvement - Consider higher down payment or improved cash flow';
      }

      const propertyTypeFactor = propertyType === 'commercial' || propertyType === 'mixed-use' ? ' (Commercial/Mixed-Use may require specialized lender)' : '';

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Debt Service Coverage Ratio (DSCR)', value: dscr.toFixed(2), isCurrency: false },
        { label: 'Monthly Cash Flow', value: cashFlow.toFixed(2), isCurrency: true },
        { label: 'Loan-to-Value Ratio (LTV)', value: `${ltvRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'Total Interest Paid', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Portfolio Value', value: portfolioValue.toFixed(2), isCurrency: true },
        { label: 'Total Debt', value: totalDebt.toFixed(2), isCurrency: true },
        { label: 'Equity Position', value: equityPosition.toFixed(2), isCurrency: true },
        { label: 'Investor Qualification Status', value: qualificationStatus + propertyTypeFactor, isCurrency: false },
      ];
    },
  },
};
