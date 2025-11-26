import { CalculatorContent } from '@/types';

export const USDA_BUSINESS_INDUSTRY_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'USDA Business & Industry Loan Calculator',
  description: 'Calculate USDA B&I loan payments for rural business development, real estate, equipment, and working capital financing.',
  slug: 'usda-business-industry-loan-calculator',
  icon: '🌾',
  category: 'Commercial Real Estate',
  metaTitle: 'USDA Business & Industry (B&I) Loan Calculator - Rural Business Financing | Free Tool',
  metaDescription: 'Free USDA Business & Industry loan calculator to estimate monthly payments for rural business loans. Calculate B&I guaranteed loan costs for real estate, equipment, and working capital.',
  article: {
    title: 'Understanding USDA Business & Industry Loans',
    content: `
    <h2>What is a USDA Business & Industry Loan?</h2>
    <p>The USDA Business & Industry (B&I) Loan Program is a powerful financing tool for businesses in rural areas. It provides government-backed loan guarantees to lenders, encouraging them to make loans to rural businesses that might not otherwise qualify for conventional financing. The program aims to improve, develop, and finance business and industry in rural communities.</p>
    
    <h3>Key Features of USDA B&I Loans</h3>
    <ul>
      <li><strong>High Loan Limits:</strong> Up to $25 million (higher amounts may be approved)</li>
      <li><strong>Government Guarantee:</strong> 80% for loans up to $5M, 70% for $5M-$10M, 60% for over $10M</li>
      <li><strong>Flexible Terms:</strong> Up to 30 years for real estate, 15 years for machinery, 7 years for working capital</li>
      <li><strong>Competitive Rates:</strong> Rates are negotiated between lender and borrower</li>
      <li><strong>Rural Focus:</strong> For businesses in eligible rural areas (population under 50,000)</li>
      <li><strong>Job Creation:</strong> Priority given to projects creating or saving jobs</li>
    </ul>

    <h3>Eligible Rural Areas</h3>
    <p>To qualify for USDA B&I financing, the business must be located in:</p>
    <ul>
      <li>Towns with population under 50,000</li>
      <li>Areas outside the urbanized periphery of cities over 50,000</li>
      <li>Check USDA's eligibility map at rd.usda.gov for specific address verification</li>
    </ul>

    <h3>Eligible Uses of USDA B&I Funds</h3>
    <ul>
      <li>Purchase and develop land, buildings, and associated infrastructure</li>
      <li>Construct, renovate, or expand business facilities</li>
      <li>Purchase equipment, machinery, and supplies</li>
      <li>Finance working capital and inventory</li>
      <li>Refinance existing debt (under certain conditions)</li>
      <li>Finance business acquisitions when job creation/retention is achieved</li>
    </ul>

    <h3>USDA B&I Loan Requirements</h3>
    <ul>
      <li>Business must be located in an eligible rural area</li>
      <li>Owner equity contribution typically 10-25%</li>
      <li>Must create or save jobs in rural areas</li>
      <li>Demonstrate ability to repay the loan</li>
      <li>Provide adequate collateral</li>
      <li>Personal/corporate guarantees required</li>
    </ul>

    <h3>USDA B&I Guarantee Fees</h3>
    <p>The USDA charges fees based on the guaranteed portion:</p>
    <ul>
      <li><strong>Initial Guarantee Fee:</strong> 3% of the guaranteed portion (one-time)</li>
      <li><strong>Annual Renewal Fee:</strong> 0.5% of the outstanding principal</li>
      <li>Fees may be reduced for projects in high-poverty areas or with significant job creation</li>
    </ul>

    <h3>Eligible Business Types</h3>
    <ul>
      <li>Manufacturing and processing facilities</li>
      <li>Retail and service businesses</li>
      <li>Agricultural producers (for business operations, not production)</li>
      <li>Healthcare facilities and medical practices</li>
      <li>Hotels, motels, and tourism businesses</li>
      <li>Renewable energy projects</li>
      <li>Childcare and educational facilities</li>
    </ul>

    <h3>How to Use This USDA B&I Calculator</h3>
    <p>Enter your project details to estimate your USDA B&I loan payments:</p>
    <ul>
      <li><strong>Total Project Cost:</strong> All costs including land, building, equipment, and soft costs</li>
      <li><strong>Equity Contribution:</strong> Your cash investment (typically 10-25%)</li>
      <li><strong>Interest Rate:</strong> Rate negotiated with your lender</li>
      <li><strong>Loan Term:</strong> Based on useful life of assets and loan purpose</li>
    </ul>

    <h3>USDA B&I vs. SBA Loans</h3>
    <ul>
      <li><strong>Higher Loan Amounts:</strong> B&I offers up to $25M vs. SBA's $5M limit</li>
      <li><strong>Rural Requirement:</strong> B&I is restricted to rural areas; SBA is nationwide</li>
      <li><strong>Job Focus:</strong> B&I emphasizes job creation in rural communities</li>
      <li><strong>Similar Processing:</strong> Both programs work through private lenders</li>
    </ul>

    <h3>Tips for USDA B&I Loan Success</h3>
    <ul>
      <li>Verify your location is in an eligible rural area first</li>
      <li>Prepare detailed financial projections showing job creation</li>
      <li>Work with a lender experienced in USDA programs</li>
      <li>Have adequate collateral to secure the loan</li>
      <li>Allow 60-120 days for processing and approval</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalProjectCost',
        label: 'Total Project Cost ($)',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'equityPercent',
        label: 'Equity Contribution (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 8.0,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'loanPurpose',
        label: 'Primary Loan Purpose',
        type: 'select',
        defaultValue: 'real_estate',
        options: [
          { value: 'real_estate', label: 'Real Estate (up to 30 years)' },
          { value: 'equipment', label: 'Equipment/Machinery (up to 15 years)' },
          { value: 'working_capital', label: 'Working Capital (up to 7 years)' },
        ],
      },
      {
        name: 'jobsCreated',
        label: 'Jobs Created/Saved',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Equity Required', isCurrency: true },
      { label: 'USDA Guarantee (80%)', isCurrency: true },
      { label: 'Initial Guarantee Fee (3%)', isCurrency: true },
      { label: 'Annual Renewal Fee (0.5%)', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Cost per Job Created', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalProjectCost, equityPercent, interestRate, loanTerm, jobsCreated } = values;
      
      const equityAmount = (totalProjectCost * equityPercent) / 100;
      const loanAmount = totalProjectCost - equityAmount;
      
      let guaranteePercent = 0.80;
      if (loanAmount > 10000000) guaranteePercent = 0.60;
      else if (loanAmount > 5000000) guaranteePercent = 0.70;
      
      const guaranteedPortion = loanAmount * guaranteePercent;
      const initialGuaranteeFee = guaranteedPortion * 0.03;
      const annualRenewalFee = guaranteedPortion * 0.005;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const totalPayments = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayments - loanAmount;
      
      const costPerJob = totalProjectCost / Math.max(jobsCreated, 1);

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Equity Required', value: equityAmount.toFixed(2), isCurrency: true },
        { label: 'USDA Guarantee (' + (guaranteePercent * 100) + '%)', value: guaranteedPortion.toFixed(2), isCurrency: true },
        { label: 'Initial Guarantee Fee (3%)', value: initialGuaranteeFee.toFixed(2), isCurrency: true },
        { label: 'Annual Renewal Fee (0.5%)', value: annualRenewalFee.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Cost per Job Created', value: costPerJob.toFixed(2), isCurrency: true },
      ];
    },
  },
};
