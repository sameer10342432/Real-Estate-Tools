import { CalculatorContent } from '@/types';

export const IBUYER_OFFER_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'iBuyer Offer Estimator',
  description: 'Estimate what Opendoor, Offerpad, and other iBuyers might offer for your home. Compare instant cash offers vs traditional sale prices.',
  icon: '🏢',
  category: 'Seller Tools',
  slug: 'ibuyer-offer-estimator',
  article: {
    title: 'Understanding iBuyer Offers',
    content: `
<h2>What is an iBuyer?</h2>
<p>iBuyers are companies like Opendoor, Offerpad, Zillow Offers (discontinued), and RedfinNow that use algorithms to make instant cash offers on homes. They provide convenience and certainty but typically offer 1-6% less than traditional market value.</p>

<h3>How iBuyers Work</h3>
<ul>
  <li><strong>Algorithm-Based Offers:</strong> Automated valuation models (AVMs) analyze your home data</li>
  <li><strong>Service Fees:</strong> Typically 5-7% of home value</li>
  <li><strong>Repairs & Deductions:</strong> Additional costs deducted for needed repairs</li>
  <li><strong>Quick Close:</strong> Can close in as little as 7-14 days</li>
</ul>

<h3>iBuyer vs Traditional Sale</h3>
<p>iBuyers offer convenience and speed, but traditional sales typically net more money. Use this calculator to compare both options and make an informed decision.</p>
`,
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Estimated Home Value',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'condition',
        label: 'Home Condition',
        type: 'select',
        defaultValue: 'good',
        options: [
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'average', label: 'Average' },
          { value: 'fair', label: 'Fair' },
          { value: 'poor', label: 'Poor' },
        ],
      },
      {
        name: 'marketConditions',
        label: 'Market Conditions',
        type: 'select',
        defaultValue: 'balanced',
        options: [
          { value: 'hot', label: 'Hot (Seller\'s Market)' },
          { value: 'balanced', label: 'Balanced Market' },
          { value: 'cold', label: 'Cold (Buyer\'s Market)' },
        ],
      },
    ],
    results: [
      { label: "iBuyer Offer Range", isCurrency: true },
      { label: "iBuyer Service Fee", isCurrency: true },
      { label: "Traditional Sale Price", isCurrency: true },
      { label: "Difference", isCurrency: true }
    ],
    calculate: (data) => {
      const { homeValue, condition, marketConditions } = data;
      
      // iBuyer discount based on condition
      const conditionDiscounts: Record<string, number> = {
        excellent: 0.02,
        good: 0.035,
        average: 0.05,
        fair: 0.07,
        poor: 0.10,
      };
      
      // Market adjustment
      const marketAdjustments: Record<string, number> = {
        hot: 0.02,
        balanced: 0.035,
        cold: 0.05,
      };
      
      const conditionDiscount = conditionDiscounts[condition] || 0.035;
      const marketDiscount = marketAdjustments[marketConditions] || 0.035;
      const serviceFee = homeValue * 0.06; // 6% average service fee
      
      const iBuyerOffer = homeValue * (1 - conditionDiscount - marketDiscount);
      const netAfterFees = iBuyerOffer - serviceFee;
      const traditionalSale = homeValue * 0.94; // After 6% agent commission
      const difference = traditionalSale - netAfterFees;
      
      return [
        { label: 'iBuyer Offer Range', value: `$${Math.round(iBuyerOffer).toLocaleString()}` },
        { label: 'iBuyer Service Fee', value: `$${Math.round(serviceFee).toLocaleString()}` },
        { label: 'Traditional Sale (Net)', value: `$${Math.round(traditionalSale).toLocaleString()}` },
        { label: 'Difference', value: `$${Math.round(Math.abs(difference)).toLocaleString()}${difference >= 0 ? ' more with traditional sale' : ' more with iBuyer'}` }
      ];
    },
  },
};
