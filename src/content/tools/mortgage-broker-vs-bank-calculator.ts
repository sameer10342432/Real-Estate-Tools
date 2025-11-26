import { CalculatorContent } from '@/types';

export const MORTGAGE_BROKER_VS_BANK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Broker vs. Bank Comparison',
  description: 'Compare mortgage offers from brokers and banks to find the best home loan deal with lowest rates and fees.',
  slug: 'mortgage-broker-vs-bank-calculator',
  icon: '⚖️',
  category: 'Basic Calculators',
  metaTitle: 'Mortgage Broker vs. Bank Calculator - Compare Rates & Fees | Free Tool',
  metaDescription: 'Free calculator to compare mortgage broker vs bank offers. Analyze rates, fees, and total costs to determine which lender type saves you the most money on your home loan.',
  article: {
    title: 'Mortgage Broker vs. Bank: Which is Better?',
    content: `
    <h2>Understanding Your Mortgage Options</h2>
    <p>When shopping for a mortgage, you have two primary paths: working directly with a bank (or direct lender) or using a mortgage broker. Each option has distinct advantages and disadvantages that can significantly impact your loan terms and overall costs.</p>
    
    <h3>What is a Mortgage Broker?</h3>
    <p>A mortgage broker is an independent professional who acts as an intermediary between you and multiple lenders. They shop your application across dozens of lenders to find competitive rates and terms that match your needs.</p>
    <ul>
      <li><strong>Access to Multiple Lenders:</strong> Brokers work with 20-50+ different lenders</li>
      <li><strong>Rate Shopping:</strong> Can quickly compare rates across many options</li>
      <li><strong>Specialized Programs:</strong> Access to niche lenders for unique situations</li>
      <li><strong>Advocacy:</strong> Works on your behalf to negotiate terms</li>
    </ul>

    <h3>What is a Bank/Direct Lender?</h3>
    <p>A bank or direct lender originates, processes, and funds loans using their own capital. This includes traditional banks, credit unions, and online lenders.</p>
    <ul>
      <li><strong>In-House Products:</strong> Offers only their own loan programs</li>
      <li><strong>Direct Relationship:</strong> You work with one company throughout</li>
      <li><strong>Portfolio Lending:</strong> May keep loans in-house with flexible terms</li>
      <li><strong>Brand Reliability:</strong> Established institutions with long track records</li>
    </ul>

    <h3>Comparing Costs: Broker vs. Bank</h3>
    <table>
      <tr>
        <th>Cost Element</th>
        <th>Mortgage Broker</th>
        <th>Bank/Direct Lender</th>
      </tr>
      <tr>
        <td>Interest Rates</td>
        <td>May be lower (wholesale rates)</td>
        <td>Retail rates with markup</td>
      </tr>
      <tr>
        <td>Origination Fees</td>
        <td>0.5% - 2.75% (capped)</td>
        <td>0% - 2% (varies)</td>
      </tr>
      <tr>
        <td>Broker/Lender Fees</td>
        <td>Disclosed broker compensation</td>
        <td>Built into rate/fees</td>
      </tr>
      <tr>
        <td>Discount Points</td>
        <td>Available from wholesale lenders</td>
        <td>Offered directly</td>
      </tr>
    </table>

    <h3>When to Use a Mortgage Broker</h3>
    <ul>
      <li>You want to compare multiple lenders quickly</li>
      <li>Your situation is complex (self-employed, credit issues)</li>
      <li>You want access to wholesale rates</li>
      <li>You need specialized loan programs</li>
      <li>You value having an advocate in the process</li>
    </ul>

    <h3>When to Go Direct to a Bank</h3>
    <ul>
      <li>You have an existing banking relationship with rate discounts</li>
      <li>You want a specific bank's unique products</li>
      <li>The bank offers exceptional customer service or technology</li>
      <li>You qualify for special programs (employee, customer discounts)</li>
      <li>You prefer the simplicity of working with one institution</li>
    </ul>

    <h3>How Brokers Get Paid</h3>
    <p>Understanding broker compensation helps you evaluate offers:</p>
    <ul>
      <li><strong>Lender-Paid Compensation:</strong> Lender pays broker (built into rate)</li>
      <li><strong>Borrower-Paid Compensation:</strong> You pay broker directly at closing</li>
      <li><strong>Compensation Caps:</strong> Limited to 3% under federal law (TRID)</li>
      <li><strong>Full Disclosure:</strong> All compensation must be disclosed on Loan Estimate</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Compare a broker and bank offer side-by-side:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The amount you're borrowing</li>
      <li><strong>Broker Rate/Bank Rate:</strong> The interest rates offered</li>
      <li><strong>Origination Fees:</strong> Points and fees charged by each</li>
      <li><strong>Closing Costs:</strong> Total closing costs for each option</li>
    </ul>

    <h3>Red Flags to Watch For</h3>
    <ul>
      <li>Broker steering you to specific lenders without explanation</li>
      <li>Fees that seem excessive compared to other quotes</li>
      <li>Pressure to lock in quickly without full disclosure</li>
      <li>Significant changes between Loan Estimate and Closing Disclosure</li>
      <li>Lack of transparency about how broker is compensated</li>
    </ul>

    <h3>Tips for Getting the Best Deal</h3>
    <ul>
      <li>Get quotes from at least one broker AND one direct lender</li>
      <li>Compare Loan Estimates on the same day for accurate comparison</li>
      <li>Focus on APR, not just interest rate</li>
      <li>Calculate break-even point for any discount points</li>
      <li>Negotiate - both brokers and banks have flexibility</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'brokerRate',
        label: 'Broker Interest Rate (%)',
        type: 'number',
        defaultValue: 6.375,
      },
      {
        name: 'bankRate',
        label: 'Bank Interest Rate (%)',
        type: 'number',
        defaultValue: 6.625,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'brokerOriginationFee',
        label: 'Broker Origination Fee (%)',
        type: 'number',
        defaultValue: 1.0,
      },
      {
        name: 'bankOriginationFee',
        label: 'Bank Origination Fee (%)',
        type: 'number',
        defaultValue: 0.5,
      },
      {
        name: 'brokerClosingCosts',
        label: 'Broker Other Closing Costs ($)',
        type: 'number',
        defaultValue: 3500,
      },
      {
        name: 'bankClosingCosts',
        label: 'Bank Other Closing Costs ($)',
        type: 'number',
        defaultValue: 4500,
      },
    ],
    results: [
      { label: 'Broker Monthly Payment', isCurrency: true },
      { label: 'Bank Monthly Payment', isCurrency: true },
      { label: 'Monthly Payment Difference', isCurrency: true },
      { label: 'Broker Total Closing Costs', isCurrency: true },
      { label: 'Bank Total Closing Costs', isCurrency: true },
      { label: 'Broker Total Loan Cost', isCurrency: true },
      { label: 'Bank Total Loan Cost', isCurrency: true },
      { label: 'Better Option', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, brokerRate, bankRate, loanTerm, brokerOriginationFee, bankOriginationFee, brokerClosingCosts, bankClosingCosts } = values;
      
      const brokerMonthlyRate = brokerRate / 100 / 12;
      const bankMonthlyRate = bankRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const brokerMonthly = loanAmount * 
        (brokerMonthlyRate * Math.pow(1 + brokerMonthlyRate, numberOfPayments)) / 
        (Math.pow(1 + brokerMonthlyRate, numberOfPayments) - 1);
      
      const bankMonthly = loanAmount * 
        (bankMonthlyRate * Math.pow(1 + bankMonthlyRate, numberOfPayments)) / 
        (Math.pow(1 + bankMonthlyRate, numberOfPayments) - 1);
      
      const monthlyDifference = Math.abs(brokerMonthly - bankMonthly);
      
      const brokerOrigFee = (loanAmount * brokerOriginationFee) / 100;
      const bankOrigFee = (loanAmount * bankOriginationFee) / 100;
      
      const brokerTotalClosing = brokerOrigFee + brokerClosingCosts;
      const bankTotalClosing = bankOrigFee + bankClosingCosts;
      
      const brokerTotalPayments = (brokerMonthly * numberOfPayments) + brokerTotalClosing;
      const bankTotalPayments = (bankMonthly * numberOfPayments) + bankTotalClosing;
      
      const betterOption = brokerTotalPayments < bankTotalPayments ? 
        `Broker saves $${(bankTotalPayments - brokerTotalPayments).toFixed(0)}` : 
        `Bank saves $${(brokerTotalPayments - bankTotalPayments).toFixed(0)}`;

      return [
        { label: 'Broker Monthly Payment', value: brokerMonthly.toFixed(2), isCurrency: true },
        { label: 'Bank Monthly Payment', value: bankMonthly.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment Difference', value: monthlyDifference.toFixed(2), isCurrency: true },
        { label: 'Broker Total Closing Costs', value: brokerTotalClosing.toFixed(2), isCurrency: true },
        { label: 'Bank Total Closing Costs', value: bankTotalClosing.toFixed(2), isCurrency: true },
        { label: 'Broker Total Loan Cost', value: brokerTotalPayments.toFixed(2), isCurrency: true },
        { label: 'Bank Total Loan Cost', value: bankTotalPayments.toFixed(2), isCurrency: true },
        { label: 'Better Option', value: betterOption, isCurrency: false },
      ];
    },
  },
};
