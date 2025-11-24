import { CalculatorContent } from '@/types';

export const CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Capital Gains vs. Ordinary Income Calculator (Flipping)',
  description: 'Compare tax implications of capital gains vs ordinary income for house flipping. Determine the most tax-efficient holding period for your investment.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'capital-gains-vs-ordinary-income-calculator',
  article: {
    title: "Capital Gains vs. Ordinary Income for Real Estate Flippers",
    content: `
    <h2>Understanding Tax Treatment for Property Flips</h2>
    <p>When flipping houses, the IRS may classify your profits as either capital gains or ordinary income, depending on your intent, frequency, and holding period. This classification significantly impacts your tax liability.</p>
    
    <h3>Ordinary Income (Short-Term Flips)</h3>
    <ul>
      <li><strong>Holding Period:</strong> Properties held less than 12 months</li>
      <li><strong>Tax Rate:</strong> Your regular income tax bracket (10% - 37%)</li>
      <li><strong>Self-Employment Tax:</strong> May apply an additional 15.3% if considered a business</li>
      <li><strong>IRS View:</strong> Frequent flipping treated as dealer/business activity</li>
    </ul>
    
    <h3>Capital Gains (Long-Term Investment)</h3>
    <ul>
      <li><strong>Holding Period:</strong> Properties held more than 12 months</li>
      <li><strong>Tax Rate:</strong> Preferential long-term capital gains rates (0%, 15%, or 20%)</li>
      <li><strong>No SE Tax:</strong> Not subject to self-employment tax</li>
      <li><strong>IRS View:</strong> Treated as investment property</li>
    </ul>
    
    <h3>Key Factors That Determine Classification</h3>
    <ul>
      <li><strong>Frequency:</strong> How many properties you flip per year</li>
      <li><strong>Intent:</strong> Purchase intent (resale vs. rental/investment)</li>
      <li><strong>Improvements:</strong> Extent of renovations made</li>
      <li><strong>Marketing:</strong> Active solicitation of buyers</li>
      <li><strong>Holding Period:</strong> Length of ownership</li>
    </ul>
    
    <h3>Tax Planning Strategies</h3>
    <ul>
      <li>Consider holding properties beyond 12 months to qualify for capital gains</li>
      <li>Use 1031 exchanges to defer capital gains taxes</li>
      <li>Set up proper business structure (LLC, S-Corp) for dealer status</li>
      <li>Document investment intent to support capital gains treatment</li>
      <li>Track basis adjustments including renovation costs</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Profit Before Tax', isCurrency: true },
      { label: 'Tax as Ordinary Income', isCurrency: true },
      { label: 'Tax as Capital Gains', isCurrency: true },
      { label: 'Tax Savings (Capital Gains)', isCurrency: true },
      { label: 'Net Profit (Ordinary)', isCurrency: true },
      { label: 'Net Profit (Capital Gains)', isCurrency: true },
    ],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'renovationCosts',
        label: 'Renovation Costs',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'sellingPrice',
        label: 'Selling Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs (Commission, Fees)',
        type: 'number',
        defaultValue: 21000,
      },
      {
        name: 'annualIncome',
        label: 'Your Annual Income',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        options: ['Single', 'Married Filing Jointly'],
        defaultValue: 'Single',
      },
    ],
    calculate: (data) => {
      const { purchasePrice, renovationCosts, sellingPrice, sellingCosts, annualIncome, filingStatus } = data;
      
      const totalCost = purchasePrice + renovationCosts + sellingCosts;
      const profit = sellingPrice - totalCost;
      
      // Ordinary income tax (using 2024 brackets)
      let ordinaryTaxRate = 0;
      const totalOrdinaryIncome = annualIncome + profit;
      
      if (filingStatus === 'Single') {
        if (totalOrdinaryIncome <= 11000) ordinaryTaxRate = 0.10;
        else if (totalOrdinaryIncome <= 44725) ordinaryTaxRate = 0.12;
        else if (totalOrdinaryIncome <= 95375) ordinaryTaxRate = 0.22;
        else if (totalOrdinaryIncome <= 182100) ordinaryTaxRate = 0.24;
        else if (totalOrdinaryIncome <= 231250) ordinaryTaxRate = 0.32;
        else if (totalOrdinaryIncome <= 578125) ordinaryTaxRate = 0.35;
        else ordinaryTaxRate = 0.37;
      } else {
        if (totalOrdinaryIncome <= 22000) ordinaryTaxRate = 0.10;
        else if (totalOrdinaryIncome <= 89075) ordinaryTaxRate = 0.12;
        else if (totalOrdinaryIncome <= 190750) ordinaryTaxRate = 0.22;
        else if (totalOrdinaryIncome <= 364200) ordinaryTaxRate = 0.24;
        else if (totalOrdinaryIncome <= 462500) ordinaryTaxRate = 0.32;
        else if (totalOrdinaryIncome <= 693750) ordinaryTaxRate = 0.35;
        else ordinaryTaxRate = 0.37;
      }
      
      // Add self-employment tax for ordinary income
      const seTax = profit * 0.153; // 15.3% SE tax
      const ordinaryIncomeTax = profit * ordinaryTaxRate + seTax;
      
      // Long-term capital gains tax
      let capitalGainsRate = 0;
      if (filingStatus === 'Single') {
        if (annualIncome <= 44625) capitalGainsRate = 0;
        else if (annualIncome <= 492300) capitalGainsRate = 0.15;
        else capitalGainsRate = 0.20;
      } else {
        if (annualIncome <= 89250) capitalGainsRate = 0;
        else if (annualIncome <= 553850) capitalGainsRate = 0.15;
        else capitalGainsRate = 0.20;
      }
      
      const capitalGainsTax = profit * capitalGainsRate;
      const taxSavings = ordinaryIncomeTax - capitalGainsTax;
      
      return [
        { label: 'Profit Before Tax', value: profit, isCurrency: true },
        { label: 'Tax as Ordinary Income', value: ordinaryIncomeTax, isCurrency: true },
        { label: 'Tax as Capital Gains', value: capitalGainsTax, isCurrency: true },
        { label: 'Tax Savings (Capital Gains)', value: taxSavings, isCurrency: true },
        { label: 'Net Profit (Ordinary)', value: profit - ordinaryIncomeTax, isCurrency: true },
        { label: 'Net Profit (Capital Gains)', value: profit - capitalGainsTax, isCurrency: true },
      ];
    },
  },
};
