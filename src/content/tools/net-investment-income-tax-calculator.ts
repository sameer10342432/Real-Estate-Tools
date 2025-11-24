import { CalculatorContent } from '@/types';

export const NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Investment Income Tax (NIIT) Calculator | 3.8% Medicare Surtax',
  description: 'Calculate the 3.8% Net Investment Income Tax (NIIT) on rental income and real estate gains. Essential Medicare surtax calculator for high-income real estate investors and rental property owners.',
  icon: 'Icon',
  category: 'Tax Planning',
  slug: 'net-investment-income-tax-calculator',
  article: {
    title: "Understanding the 3.8% Net Investment Income Tax (NIIT)",
    content: `
    <h2>What is the Net Investment Income Tax (NIIT)?</h2>
    <p>The Net Investment Income Tax is a 3.8% Medicare surtax on certain investment income for high-income taxpayers. It was introduced by the Affordable Care Act and applies to rental income and capital gains from real estate.</p>
    
    <h3>Who Pays NIIT?</h3>
    <p>NIIT applies if your Modified Adjusted Gross Income (MAGI) exceeds:</p>
    <ul>
      <li><strong>Married Filing Jointly:</strong> $250,000</li>
      <li><strong>Single or Head of Household:</strong> $200,000</li>
      <li><strong>Married Filing Separately:</strong> $125,000</li>
      <li><strong>Qualifying Widow(er):</strong> $250,000</li>
    </ul>
    
    <h3>Real Estate Income Subject to NIIT</h3>
    <p>The 3.8% tax applies to the LESSER of:</p>
    <ul>
      <li>Your net investment income, OR</li>
      <li>The amount your MAGI exceeds the threshold</li>
    </ul>
    
    <p><strong>Investment Income Includes:</strong></p>
    <ul>
      <li>Rental property income (passive income)</li>
      <li>Capital gains from sale of investment property</li>
      <li>Interest and dividend income</li>
      <li>Royalty income</li>
      <li>Passive business income</li>
    </ul>
    
    <h3>Real Estate Exemptions from NIIT</h3>
    <p><strong>Real Estate Professional:</strong> If you qualify as a real estate professional (IRS definition), rental income is NOT subject to NIIT:</p>
    <ul>
      <li>Must spend 750+ hours per year in real property trades</li>
      <li>Must spend more than 50% of working time in real property activities</li>
      <li>Must materially participate in rental activities</li>
    </ul>
    
    <p><strong>Active Participation:</strong> Generally NOT enough to avoid NIIT unless you're a real estate professional</p>
    
    <h3>Calculation Examples</h3>
    
    <p><strong>Example 1: Married Filing Jointly</strong></p>
    <ul>
      <li>MAGI: $350,000</li>
      <li>Rental income: $60,000</li>
      <li>Capital gains: $40,000</li>
      <li>Net investment income: $100,000</li>
      <li>Amount over threshold: $350,000 - $250,000 = $100,000</li>
      <li><strong>NIIT = 3.8% × $100,000 = $3,800</strong></li>
    </ul>
    
    <p><strong>Example 2: Single Filer</strong></p>
    <ul>
      <li>MAGI: $280,000</li>
      <li>Net investment income: $120,000</li>
      <li>Amount over threshold: $280,000 - $200,000 = $80,000</li>
      <li><strong>NIIT = 3.8% × $80,000 = $3,040</strong> (lesser amount)</li>
    </ul>
    
    <h3>Strategies to Reduce NIIT</h3>
    <ul>
      <li><strong>Real Estate Professional Status:</strong> Qualify to exclude rental income from NIIT</li>
      <li><strong>Deductions:</strong> Maximize rental property deductions to reduce net investment income</li>
      <li><strong>Cost Segregation:</strong> Accelerate depreciation to reduce current year income</li>
      <li><strong>1031 Exchange:</strong> Defer capital gains and NIIT to future years</li>
      <li><strong>Installment Sales:</strong> Spread gains over multiple years to stay below threshold</li>
      <li><strong>Retirement Contributions:</strong> Max out 401k/IRA to reduce MAGI</li>
      <li><strong>HSA Contributions:</strong> Health Savings Account contributions reduce MAGI</li>
    </ul>
    
    <h3>NIIT and Capital Gains from Home Sale</h3>
    <p>If you sell your primary residence:</p>
    <ul>
      <li>$250,000 exclusion (single) or $500,000 (married) applies first</li>
      <li>NIIT only applies to gains exceeding the exclusion</li>
      <li>Example: $600,000 gain on joint return = $100,000 subject to NIIT</li>
    </ul>
    
    <h3>Reporting NIIT</h3>
    <p>Report on Form 8960 (Net Investment Income Tax) filed with your Form 1040. The tax is in addition to regular income tax and capital gains tax.</p>
    
    <h3>State Taxes</h3>
    <p>NIIT is a federal tax only. States do not impose NIIT, but they have their own income tax rules on investment income.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "filingStatus",
        label: "Filing Status",
        type: "select",
        options: [
          { value: "married", label: "Married Filing Jointly" },
          { value: "single", label: "Single" },
          { value: "married-separate", label: "Married Filing Separately" },
          { value: "head", label: "Head of Household" },
        ],
        defaultValue: "married",
      },
      {
        name: "magi",
        label: "Modified Adjusted Gross Income (MAGI)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "rentalIncome",
        label: "Net Rental Income",
        type: "number",
        placeholder: "60000",
        defaultValue: "60000",
      },
      {
        name: "capitalGains",
        label: "Capital Gains from Real Estate",
        type: "number",
        placeholder: "40000",
        defaultValue: "40000",
      },
      {
        name: "otherInvestmentIncome",
        label: "Other Investment Income",
        type: "number",
        placeholder: "20000",
        defaultValue: "20000",
      },
    ],
    results: [
      { label: "MAGI Threshold", isCurrency: true },
      { label: "Amount Over Threshold", isCurrency: true },
      { label: "Total Net Investment Income", isCurrency: true },
      { label: "Taxable Amount (Lesser of Two)", isCurrency: true },
      { label: "NIIT @ 3.8%", isCurrency: true },
      { label: "Effective NIIT Rate on Income", isCurrency: false },
    ],
    calculate: (data: any) => {
      const filingStatus = data.filingStatus || 'married';
      const magi = Number(data.magi) || 0;
      const rentalIncome = Number(data.rentalIncome) || 0;
      const capitalGains = Number(data.capitalGains) || 0;
      const otherInvestmentIncome = Number(data.otherInvestmentIncome) || 0;
      
      const thresholds: { [key: string]: number } = {
        'married': 250000,
        'single': 200000,
        'married-separate': 125000,
        'head': 200000,
      };
      
      const threshold = thresholds[filingStatus] || 250000;
      const amountOver = Math.max(0, magi - threshold);
      const totalInvestmentIncome = rentalIncome + capitalGains + otherInvestmentIncome;
      const taxableAmount = Math.min(amountOver, totalInvestmentIncome);
      const niit = taxableAmount * 0.038;
      const effectiveRate = totalInvestmentIncome > 0 ? (niit / totalInvestmentIncome * 100) : 0;

      return [
        { label: "MAGI Threshold", value: `${threshold.toFixed(2)}`, isCurrency: true },
        { label: "Amount Over Threshold", value: `${amountOver.toFixed(2)}`, isCurrency: true },
        { label: "Total Net Investment Income", value: `${totalInvestmentIncome.toFixed(2)}`, isCurrency: true },
        { label: "Taxable Amount (Lesser of Two)", value: `${taxableAmount.toFixed(2)}`, isCurrency: true },
        { label: "NIIT @ 3.8%", value: `${niit.toFixed(2)}`, isCurrency: true },
        { label: "Effective NIIT Rate on Income", value: `${effectiveRate.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
