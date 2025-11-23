import { CalculatorContent } from '@/types';

export const TITLE_COMPANY_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Title Company Fee Estimator',
  description: 'Estimate title company fees including title search, title insurance, settlement fees, and closing costs for your property transaction.',
  icon: '📜',
  category: 'Legal & Compliance',
  slug: 'title-company-fee-estimator',
  article: {
    title: 'Understanding Title Company Fees',
    content: `
<h2>What Does a Title Company Do?</h2>
<p>Title companies research property ownership, ensure clear title, provide title insurance, and facilitate the closing process. Their fees typically include several components.</p>

<h3>Common Title Company Fees</h3>
<ul>
  <li><strong>Title Search:</strong> $200-$400 to research property history</li>
  <li><strong>Title Insurance (Owner's Policy):</strong> 0.5-1% of purchase price</li>
  <li><strong>Title Insurance (Lender's Policy):</strong> $500-$1,000</li>
  <li><strong>Settlement/Closing Fee:</strong> $500-$1,500 for facilitating closing</li>
  <li><strong>Document Preparation:</strong> $150-$300</li>
  <li><strong>Recording Fees:</strong> Varies by county ($50-$250)</li>
</ul>

<h3>Who Pays Title Fees?</h3>
<p>Payment responsibility varies by state and negotiation. Typically, the buyer pays for lender's policy and the seller pays for owner's policy, but this can be negotiated.</p>
`,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'state',
        label: 'State',
        type: 'select',
        defaultValue: 'average',
        options: [
          { value: 'low', label: 'Low Cost State (TX, FL)' },
          { value: 'average', label: 'Average Cost State' },
          { value: 'high', label: 'High Cost State (NY, CA)' },
        ],
      },
      {
        name: 'loanType',
        label: 'Transaction Type',
        type: 'select',
        defaultValue: 'purchase',
        options: [
          { value: 'purchase', label: 'Purchase with Financing' },
          { value: 'cashPurchase', label: 'Cash Purchase' },
          { value: 'refinance', label: 'Refinance' },
        ],
      },
    ],
    results: [
      { label: "Title Search Fee", isCurrency: true },
      { label: "Owner's Title Insurance", isCurrency: true },
      { label: "Lender's Title Insurance", isCurrency: true },
      { label: "Settlement/Closing Fee", isCurrency: true },
      { label: "Total Estimated Fees", isCurrency: true }
    ],
    calculate: (data) => {
      const { purchasePrice, state, loanType } = data;
      
      // Base fees
      let titleSearchFee = 300;
      let settlementFee = 800;
      
      // State multipliers
      const stateMultipliers: Record<string, number> = {
        low: 0.8,
        average: 1.0,
        high: 1.3,
      };
      
      const multiplier = stateMultipliers[state] || 1.0;
      
      // Owner's title insurance (varies by state)
      const ownerInsuranceRate = state === 'high' ? 0.0065 : state === 'low' ? 0.004 : 0.005;
      const ownerInsurance = purchasePrice * ownerInsuranceRate * multiplier;
      
      // Lender's title insurance
      let lenderInsurance = 0;
      if (loanType !== 'cashPurchase') {
        lenderInsurance = 750 * multiplier;
      }
      
      titleSearchFee *= multiplier;
      settlementFee *= multiplier;
      
      const total = titleSearchFee + ownerInsurance + lenderInsurance + settlementFee;
      
      return [
        { label: 'Title Search Fee', value: `$${Math.round(titleSearchFee).toLocaleString()}` },
        { label: 'Owner\'s Title Insurance', value: `$${Math.round(ownerInsurance).toLocaleString()}` },
        { label: 'Lender\'s Title Insurance', value: loanType === 'cashPurchase' ? 'N/A' : `$${Math.round(lenderInsurance).toLocaleString()}` },
        { label: 'Settlement/Closing Fee', value: `$${Math.round(settlementFee).toLocaleString()}` },
        { label: 'Total Estimated Fees', value: `$${Math.round(total).toLocaleString()}` }
      ];
    },
  },
};
