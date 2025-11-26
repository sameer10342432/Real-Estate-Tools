import { CalculatorContent } from '@/types';

export const SBA_7A_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'SBA 7(a) Loan Calculator',
  description: 'Calculate SBA 7(a) loan payments for business acquisitions, real estate, working capital, and equipment financing.',
  slug: 'sba-7a-loan-calculator',
  icon: '🏦',
  category: 'Commercial Real Estate',
  metaTitle: 'SBA 7(a) Loan Calculator - Calculate Small Business Loan Payments | Free Tool',
  metaDescription: 'Free SBA 7(a) loan calculator to estimate monthly payments for business loans up to $5 million. Calculate rates, terms, and total costs for real estate, equipment, and working capital.',
  article: {
    title: 'Understanding SBA 7(a) Loans',
    content: `
    <h2>What is an SBA 7(a) Loan?</h2>
    <p>The SBA 7(a) Loan Program is the Small Business Administration's most common and flexible loan program. It provides financing for a wide variety of business purposes including working capital, equipment, inventory, real estate acquisition, and business acquisition. The SBA guarantees a portion of the loan (up to 85%), reducing risk for lenders.</p>
    
    <h3>Key Features of SBA 7(a) Loans</h3>
    <ul>
      <li><strong>Maximum Loan Amount:</strong> Up to $5 million</li>
      <li><strong>SBA Guarantee:</strong> 85% for loans up to $150,000; 75% for larger loans</li>
      <li><strong>Flexible Uses:</strong> Working capital, equipment, real estate, acquisition, refinancing</li>
      <li><strong>Competitive Rates:</strong> Variable or fixed rates based on Prime Rate + spread</li>
      <li><strong>Long Terms:</strong> Up to 25 years for real estate, 10 years for equipment, 7 years for working capital</li>
      <li><strong>Lower Down Payments:</strong> Typically 10-20% vs. 20-35% for conventional loans</li>
    </ul>

    <h3>SBA 7(a) Loan Rate Structure</h3>
    <p>Interest rates are negotiated between the borrower and lender, subject to SBA maximums:</p>
    <ul>
      <li><strong>Loans over $50,000:</strong> Prime + 2.25% to Prime + 2.75% (based on term)</li>
      <li><strong>Loans $25,000-$50,000:</strong> Prime + 3.25% to Prime + 3.75%</li>
      <li><strong>Loans under $25,000:</strong> Prime + 4.25% to Prime + 4.75%</li>
    </ul>
    <p>Variable rate loans are tied to the Prime Rate, WSJ Prime, or LIBOR/SOFR plus a spread.</p>

    <h3>Eligible Uses for SBA 7(a) Loans</h3>
    <ul>
      <li>Purchase or construct commercial real estate</li>
      <li>Acquire an existing business</li>
      <li>Purchase equipment, machinery, and fixtures</li>
      <li>Finance working capital and operating expenses</li>
      <li>Refinance existing business debt (under certain conditions)</li>
      <li>Finance inventory and accounts receivable</li>
    </ul>

    <h3>SBA 7(a) Eligibility Requirements</h3>
    <ul>
      <li>For-profit business operating in the United States</li>
      <li>Meet SBA size standards for your industry</li>
      <li>Demonstrated ability to repay the loan</li>
      <li>Owner equity investment required (typically 10-20%)</li>
      <li>Good character and credit history</li>
      <li>No delinquent federal debt</li>
    </ul>

    <h3>SBA 7(a) Guarantee Fees</h3>
    <p>The SBA charges guarantee fees based on loan amount and maturity:</p>
    <ul>
      <li>Loans ≤ $150,000: 2% of guaranteed portion</li>
      <li>Loans $150,001 - $700,000: 3% of guaranteed portion</li>
      <li>Loans $700,001 - $1,000,000: 3.5% of guaranteed portion</li>
      <li>Loans > $1,000,000: 3.75% of guaranteed portion</li>
      <li>Additional 0.25% annual fee on outstanding balance for loans over $1 million</li>
    </ul>

    <h3>Types of SBA 7(a) Loans</h3>
    <ul>
      <li><strong>Standard 7(a):</strong> Full loan program with maximum flexibility</li>
      <li><strong>7(a) Small Loan:</strong> Streamlined process for loans up to $350,000</li>
      <li><strong>SBA Express:</strong> Faster turnaround (36-hour response) for loans up to $500,000</li>
      <li><strong>Export Express:</strong> For businesses that export or need working capital for exports</li>
      <li><strong>CAPLines:</strong> Lines of credit for cyclical and short-term working capital needs</li>
    </ul>

    <h3>How to Use This SBA 7(a) Calculator</h3>
    <p>Enter your loan details to estimate your SBA 7(a) payments:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The total amount you need to borrow</li>
      <li><strong>Interest Rate:</strong> Your expected rate (Prime + spread)</li>
      <li><strong>Loan Term:</strong> 7-25 years depending on loan purpose</li>
      <li><strong>Loan Purpose:</strong> Affects guarantee fee calculation</li>
    </ul>

    <h3>SBA 7(a) vs. Conventional Business Loans</h3>
    <ul>
      <li><strong>Lower Down Payments:</strong> 10-20% vs. 20-35% conventional</li>
      <li><strong>Longer Terms:</strong> Up to 25 years vs. 5-15 years conventional</li>
      <li><strong>Competitive Rates:</strong> Often lower due to government guarantee</li>
      <li><strong>More Documentation:</strong> SBA loans require more paperwork and time</li>
    </ul>

    <h3>Tips for SBA 7(a) Loan Approval</h3>
    <ul>
      <li>Prepare a detailed business plan with financial projections</li>
      <li>Have 3+ years of business and personal tax returns ready</li>
      <li>Maintain good personal credit (680+ preferred)</li>
      <li>Show consistent business cash flow and profitability</li>
      <li>Work with an SBA Preferred Lender for faster processing</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 10.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'loanPurpose',
        label: 'Loan Purpose',
        type: 'select',
        defaultValue: 'real_estate',
        options: [
          { value: 'real_estate', label: 'Real Estate (up to 25 years)' },
          { value: 'equipment', label: 'Equipment (up to 10 years)' },
          { value: 'working_capital', label: 'Working Capital (up to 7 years)' },
          { value: 'acquisition', label: 'Business Acquisition (up to 10 years)' },
        ],
      },
      {
        name: 'guaranteePercent',
        label: 'SBA Guarantee (%)',
        type: 'number',
        defaultValue: 75,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Annual Debt Service', isCurrency: true },
      { label: 'SBA Guarantee Fee', isCurrency: true },
      { label: 'Guaranteed Portion', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Total Loan Cost', isCurrency: true },
      { label: 'Effective APR', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm, guaranteePercent } = values;
      
      const guaranteedPortion = (loanAmount * guaranteePercent) / 100;
      
      let guaranteeFeeRate = 0.03;
      if (loanAmount <= 150000) guaranteeFeeRate = 0.02;
      else if (loanAmount <= 700000) guaranteeFeeRate = 0.03;
      else if (loanAmount <= 1000000) guaranteeFeeRate = 0.035;
      else guaranteeFeeRate = 0.0375;
      
      const guaranteeFee = guaranteedPortion * guaranteeFeeRate;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const annualDebtService = monthlyPayment * 12;
      const totalPayments = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayments - loanAmount;
      const totalLoanCost = totalPayments + guaranteeFee;
      
      const effectiveAPR = ((totalInterest + guaranteeFee) / loanAmount / loanTerm) * 100;

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'SBA Guarantee Fee', value: guaranteeFee.toFixed(2), isCurrency: true },
        { label: 'Guaranteed Portion', value: guaranteedPortion.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Total Loan Cost', value: totalLoanCost.toFixed(2), isCurrency: true },
        { label: 'Effective APR', value: effectiveAPR.toFixed(2) + '%', isCurrency: false },
      ];
    },
  },
};
