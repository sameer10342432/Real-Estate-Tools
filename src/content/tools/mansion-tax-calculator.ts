import { CalculatorContent } from '@/types';

export const MANSION_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mansion Tax Calculator (NY, NJ, CT)',
  description: 'Calculate mansion tax for luxury property purchases in New York, New Jersey, and Connecticut. Comprehensive state-specific calculations.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'mansion-tax-calculator',
  article: {
    title: "Understanding Mansion Tax by State",
    content: `
    <h2>What is Mansion Tax?</h2>
    <p>Mansion tax is a transfer tax imposed on high-value real estate transactions in certain states and jurisdictions. This tax applies when purchasing luxury properties above specific price thresholds.</p>
    
    <h3>Mansion Tax by State</h3>
    <ul>
      <li><strong>New York (NYC):</strong> Progressive tax ranging from 1% to 3.9% for properties over $1 million. Additional taxes apply for properties over $2 million.</li>
      <li><strong>New Jersey:</strong> 1% mansion tax on residential properties sold for $1 million or more.</li>
      <li><strong>Connecticut:</strong> Additional conveyance tax of 0.25% on properties over $800,000, plus higher rates for properties over $2.5 million.</li>
    </ul>
    
    <h3>Key Considerations</h3>
    <ul>
      <li><strong>Purchase Price:</strong> The sales price determines which tax bracket applies</li>
      <li><strong>Progressive Rates:</strong> Some jurisdictions use tiered rates for higher-value properties</li>
      <li><strong>Combined Taxes:</strong> Mansion tax is typically in addition to standard transfer taxes</li>
      <li><strong>Buyer Responsibility:</strong> In most cases, the buyer pays the mansion tax</li>
    </ul>
    
    <h3>NYC Mansion Tax Breakdown</h3>
    <ul>
      <li>$1M - $2M: 1%</li>
      <li>$2M - $3M: 1.25%</li>
      <li>$3M - $5M: 1.5%</li>
      <li>$5M - $10M: 2.25%</li>
      <li>$10M - $15M: 3.25%</li>
      <li>$15M - $20M: 3.5%</li>
      <li>$20M - $25M: 3.75%</li>
      <li>$25M+: 3.9%</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Mansion Tax Amount', isCurrency: true },
      { label: 'Total Transfer Tax', isCurrency: true },
      { label: 'Total Closing Cost (Est.)', isCurrency: true },
    ],
    fields: [
      {
        name: 'state',
        label: 'State',
        type: 'select',
        options: [
          { value: 'New York (NYC)', label: 'New York (NYC)' },
          { value: 'New Jersey', label: 'New Jersey' },
          { value: 'Connecticut', label: 'Connecticut' }
        ],
        defaultValue: 'New York (NYC)',
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 2500000,
      },
      {
        name: 'standardTransferTax',
        label: 'Standard Transfer Tax (%)',
        type: 'number',
        defaultValue: 1.4,
      },
    ],
    calculate: (data) => {
      const { state, purchasePrice, standardTransferTax } = data;
      let mansionTax = 0;
      
      if (state === 'New York (NYC)') {
        if (purchasePrice >= 25000000) {
          mansionTax = purchasePrice * 0.039;
        } else if (purchasePrice >= 20000000) {
          mansionTax = purchasePrice * 0.0375;
        } else if (purchasePrice >= 15000000) {
          mansionTax = purchasePrice * 0.035;
        } else if (purchasePrice >= 10000000) {
          mansionTax = purchasePrice * 0.0325;
        } else if (purchasePrice >= 5000000) {
          mansionTax = purchasePrice * 0.0225;
        } else if (purchasePrice >= 3000000) {
          mansionTax = purchasePrice * 0.015;
        } else if (purchasePrice >= 2000000) {
          mansionTax = purchasePrice * 0.0125;
        } else if (purchasePrice >= 1000000) {
          mansionTax = purchasePrice * 0.01;
        }
      } else if (state === 'New Jersey') {
        if (purchasePrice >= 1000000) {
          mansionTax = purchasePrice * 0.01;
        }
      } else if (state === 'Connecticut') {
        if (purchasePrice >= 2500000) {
          mansionTax = purchasePrice * 0.0125;
        } else if (purchasePrice >= 800000) {
          mansionTax = purchasePrice * 0.0025;
        }
      }
      
      const totalTransferTax = mansionTax + (purchasePrice * (standardTransferTax / 100));
      const estimatedClosingCost = totalTransferTax + (purchasePrice * 0.02); // Additional 2% for other closing costs

      return [
        { label: 'Mansion Tax Amount', value: mansionTax, isCurrency: true },
        { label: 'Total Transfer Tax', value: totalTransferTax, isCurrency: true },
        { label: 'Total Closing Cost (Est.)', value: estimatedClosingCost, isCurrency: true },
      ];
    },
  },
};
