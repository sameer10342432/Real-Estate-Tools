import { CalculatorContent } from '@/types';

export const GINNIE_MAE_GNMA_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Ginnie Mae (GNMA) Loan Calculator',
  description: 'Calculate payments for Ginnie Mae backed government loans including FHA, VA, and USDA mortgages',
  slug: 'ginnie-mae-gnma-calculator',
  icon: '🏛️',
  category: 'Basic Calculators',
  metaTitle: 'Ginnie Mae (GNMA) Loan Calculator - Calculate FHA, VA & USDA Mortgage Payments',
  metaDescription: 'Free Ginnie Mae calculator for government-backed mortgages. Calculate monthly payments, MIP, funding fees, and guarantee costs for FHA, VA, and USDA loans. Understand mortgage-backed securities and yields.',
  article: {
    title: 'Understanding Ginnie Mae (GNMA) Government-Backed Mortgages',
    content: `
    <h2>What is Ginnie Mae (GNMA)?</h2>
    <p>The Government National Mortgage Association (GNMA), commonly known as Ginnie Mae, is a wholly-owned government corporation within the U.S. Department of Housing and Urban Development (HUD). Unlike Fannie Mae and Freddie Mac, which are government-sponsored enterprises (GSEs), Ginnie Mae is backed by the full faith and credit of the United States government, making its securities the safest mortgage-backed securities available in the market.</p>
    
    <p>Ginnie Mae was established in 1968 when the government split the original Federal National Mortgage Association (Fannie Mae) into two separate entities. While Fannie Mae became a privately held corporation, Ginnie Mae remained within the government to support federal housing programs and ensure liquidity in the secondary mortgage market for government-insured loans.</p>

    <h3>How Ginnie Mae Differs from Fannie Mae and Freddie Mac</h3>
    <p>Understanding the differences between these three mortgage giants is essential for homebuyers and investors:</p>
    <ul>
      <li><strong>Government Backing:</strong> Ginnie Mae securities carry the explicit full faith and credit guarantee of the U.S. government, while Fannie Mae and Freddie Mac have an implicit (though now explicit under conservatorship) government backing.</li>
      <li><strong>Loan Types:</strong> Ginnie Mae exclusively deals with government-insured or guaranteed loans (FHA, VA, USDA), while Fannie Mae and Freddie Mac purchase conventional loans.</li>
      <li><strong>Role:</strong> Ginnie Mae does not buy or sell loans directly; it guarantees mortgage-backed securities (MBS) issued by approved lenders. Fannie Mae and Freddie Mac actually purchase loans from lenders.</li>
      <li><strong>Risk Profile:</strong> Due to the full government guarantee, Ginnie Mae securities are considered virtually risk-free for principal and interest payments, making them attractive to conservative investors.</li>
    </ul>

    <h3>Government Loan Securitization Process</h3>
    <p>Ginnie Mae facilitates the securitization of three types of government-backed loans:</p>
    
    <h4>FHA Loans (Federal Housing Administration)</h4>
    <p>FHA loans are insured by the Federal Housing Administration and are popular among first-time homebuyers due to their low down payment requirements (as low as 3.5%) and flexible credit standards. These loans require mortgage insurance premiums (MIP), including both an upfront premium of 1.75% and annual premiums ranging from 0.45% to 1.05% depending on the loan-to-value ratio and loan term.</p>

    <h4>VA Loans (Department of Veterans Affairs)</h4>
    <p>VA loans are guaranteed by the Department of Veterans Affairs and are available to eligible veterans, active-duty service members, and surviving spouses. These loans offer exceptional benefits including no down payment requirement, no private mortgage insurance, and competitive interest rates. Instead of MIP, VA loans charge a funding fee that ranges from 1.25% to 3.3% depending on down payment and usage history.</p>

    <h4>USDA Loans (U.S. Department of Agriculture)</h4>
    <p>USDA loans are designed to promote homeownership in rural and suburban areas. They offer 100% financing with no down payment requirement for eligible borrowers in designated areas. USDA loans require a 1% upfront guarantee fee and an annual fee of 0.35% of the loan balance.</p>

    <h3>Benefits for Borrowers</h3>
    <p>Ginnie Mae's role in the secondary mortgage market provides significant benefits to homebuyers:</p>
    <ul>
      <li><strong>Lower Interest Rates:</strong> By creating liquidity in the mortgage market, Ginnie Mae helps keep interest rates lower for government-backed loans.</li>
      <li><strong>Expanded Access:</strong> The security of Ginnie Mae guarantees encourages lenders to offer loans to borrowers who might not qualify for conventional financing.</li>
      <li><strong>Consistent Availability:</strong> Even during economic downturns, the government backing ensures continued access to mortgage credit.</li>
      <li><strong>Competitive Terms:</strong> The efficiency of the secondary market translates to better loan terms for borrowers.</li>
      <li><strong>Standardized Processes:</strong> Government guidelines create consistency in loan origination and servicing.</li>
    </ul>

    <h3>Understanding Mortgage-Backed Securities (MBS)</h3>
    <p>When lenders originate FHA, VA, or USDA loans, they can pool these mortgages together and issue securities backed by the underlying loans. Ginnie Mae guarantees that investors will receive timely payments of principal and interest, even if borrowers default. This guarantee makes Ginnie Mae MBS highly attractive to investors, including pension funds, insurance companies, and foreign governments.</p>

    <h3>Yield Calculations and Investment Considerations</h3>
    <p>Ginnie Mae securities typically offer yields slightly higher than Treasury securities due to prepayment risk and the administrative overhead of managing mortgage pools. Key factors affecting yields include:</p>
    <ul>
      <li><strong>Coupon Rate:</strong> The interest rate paid to investors, typically 0.5% to 1% below the mortgage rate</li>
      <li><strong>Prepayment Speed:</strong> How quickly borrowers pay off their mortgages affects actual yields</li>
      <li><strong>Current Interest Rates:</strong> Market rates influence both security prices and prepayment expectations</li>
      <li><strong>Pool Characteristics:</strong> Loan size, geographic distribution, and borrower credit profiles impact performance</li>
    </ul>

    <h3>How to Use This Ginnie Mae Calculator</h3>
    <p>This calculator helps you understand the costs and payments associated with Ginnie Mae-eligible government loans:</p>
    <ul>
      <li><strong>Purchase Price:</strong> The total purchase price of the property</li>
      <li><strong>Down Payment Percent:</strong> The percentage you plan to put down</li>
      <li><strong>Loan Type:</strong> Select FHA, VA, or USDA to see appropriate fees</li>
      <li><strong>Interest Rate:</strong> The annual interest rate for your loan</li>
      <li><strong>Loan Term:</strong> The length of your mortgage in years</li>
      <li><strong>Guarantee Fee Percent:</strong> Adjust if different from standard rates</li>
    </ul>
    <p>The calculator will show your monthly payment, total interest paid, applicable government fees, and the effective interest rate including all costs.</p>

    <h3>Is a Ginnie Mae-Eligible Loan Right for You?</h3>
    <p>Consider a government-backed loan if you:</p>
    <ul>
      <li>Are a first-time homebuyer with limited savings for a down payment</li>
      <li>Have a credit score that might not qualify for the best conventional rates</li>
      <li>Are a veteran or active-duty military member eligible for VA benefits</li>
      <li>Are purchasing in a rural area eligible for USDA financing</li>
      <li>Want the security and competitive rates backed by government programs</li>
    </ul>
    <p>Work with a mortgage professional to determine which loan program best fits your financial situation and homeownership goals.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'select',
        defaultValue: 'fha',
        options: [
          { value: 'fha', label: 'FHA Loan' },
          { value: 'va', label: 'VA Loan' },
          { value: 'usda', label: 'USDA Loan' }
        ]
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
        name: 'guaranteeFeePercent',
        label: 'Guarantee/Funding Fee Override (%)',
        type: 'number',
        defaultValue: 0,
        placeholder: 'Leave 0 for standard rates',
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Effective Interest Rate', isCurrency: false },
      { label: 'MIP or Funding Fee', isCurrency: true },
      { label: 'Government Guarantee Amount', isCurrency: true },
      { label: 'Total Loan Cost', isCurrency: true },
      { label: 'Base Loan Amount', isCurrency: true },
      { label: 'Total Loan with Fees', isCurrency: true },
    ],
    calculate: (values) => {
      const { purchasePrice, downPaymentPercent, loanType, interestRate, loanTermYears, guaranteeFeePercent } = values;
      
      const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
      const baseLoanAmount = purchasePrice - downPaymentAmount;
      
      let upfrontFeeRate = 0;
      let annualFeeRate = 0;
      let governmentGuaranteePercent = 0;
      
      if (guaranteeFeePercent > 0) {
        upfrontFeeRate = guaranteeFeePercent / 100;
      } else {
        switch (loanType) {
          case 'fha':
            upfrontFeeRate = 0.0175;
            annualFeeRate = 0.0085;
            governmentGuaranteePercent = 100;
            break;
          case 'va':
            if (downPaymentPercent === 0) {
              upfrontFeeRate = 0.0215;
            } else if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
              upfrontFeeRate = 0.015;
            } else if (downPaymentPercent >= 10) {
              upfrontFeeRate = 0.0125;
            } else {
              upfrontFeeRate = 0.0215;
            }
            annualFeeRate = 0;
            governmentGuaranteePercent = downPaymentPercent >= 5 ? 25 : 25;
            break;
          case 'usda':
            upfrontFeeRate = 0.01;
            annualFeeRate = 0.0035;
            governmentGuaranteePercent = 90;
            break;
          default:
            upfrontFeeRate = 0.0175;
            annualFeeRate = 0.0085;
            governmentGuaranteePercent = 100;
        }
      }
      
      const upfrontFee = baseLoanAmount * upfrontFeeRate;
      const totalLoanAmount = baseLoanAmount + upfrontFee;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTermYears * 12;
      
      let principalAndInterest = 0;
      if (monthlyInterestRate > 0) {
        principalAndInterest = totalLoanAmount * 
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      } else {
        principalAndInterest = totalLoanAmount / numberOfPayments;
      }
      
      const monthlyAnnualFee = (baseLoanAmount * annualFeeRate) / 12;
      
      const monthlyPayment = principalAndInterest + monthlyAnnualFee;
      
      const totalPayments = monthlyPayment * numberOfPayments;
      const totalInterestPaid = totalPayments - baseLoanAmount;
      
      const totalFees = upfrontFee + (monthlyAnnualFee * numberOfPayments);
      const totalLoanCost = baseLoanAmount + totalInterestPaid;
      
      const effectiveInterestRate = ((totalLoanCost / baseLoanAmount) - 1) / loanTermYears * 100;
      
      const governmentGuaranteeAmount = baseLoanAmount * (governmentGuaranteePercent / 100);

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Effective Interest Rate', value: effectiveInterestRate.toFixed(2) + '%', isCurrency: false },
        { label: 'MIP or Funding Fee', value: upfrontFee.toFixed(2), isCurrency: true },
        { label: 'Government Guarantee Amount', value: governmentGuaranteeAmount.toFixed(2), isCurrency: true },
        { label: 'Total Loan Cost', value: totalLoanCost.toFixed(2), isCurrency: true },
        { label: 'Base Loan Amount', value: baseLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Total Loan with Fees', value: totalLoanAmount.toFixed(2), isCurrency: true },
      ];
    },
  },
};
