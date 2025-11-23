import { CalculatorContent } from '@/types';

export const REAL_ESTATE_SCAM_CHECKER_CONTENT: CalculatorContent = {
  title: 'Real Estate Scam Checker',
  description: 'Identify common real estate scams and warning signs. Protect yourself from fraud, fake listings, wire fraud, and rental scams.',
  icon: '🚨',
  category: 'Risk Assessment',
  slug: 'real-estate-scam-checker',
  article: {
    title: 'Protecting Yourself from Real Estate Scams',
    content: `
<h2>Common Real Estate Scams</h2>
<p>Real estate fraud costs Americans billions annually. Learn to identify red flags and protect yourself from common scams.</p>

<h3>Top Real Estate Scams</h3>
<ul>
  <li><strong>Wire Fraud:</strong> Scammers impersonate title companies to redirect closing funds</li>
  <li><strong>Fake Listings:</strong> Non-existent properties or stolen photos</li>
  <li><strong>Rental Scams:</strong> Collecting deposits for properties not actually for rent</li>
  <li><strong>Title Fraud:</strong> Forged documents to steal property ownership</li>
  <li><strong>Foreclosure Scams:</strong> Fake "rescue" services targeting distressed homeowners</li>
</ul>

<h3>Red Flags to Watch For</h3>
<ul>
  <li>Pressure to wire money immediately</li>
  <li>Prices significantly below market value</li>
  <li>Refusal to meet in person or show property</li>
  <li>Requests for payment via gift cards, cryptocurrency, or wire transfer</li>
  <li>Unprofessional communication or poor grammar</li>
  <li>No verifiable contact information or license number</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'priceVsMarket',
        label: 'Price Compared to Market',
        type: 'select',
        defaultValue: 'similar',
        options: [
          { value: 'muchLower', label: '20%+ Below Market' },
          { value: 'lower', label: '10-20% Below Market' },
          { value: 'similar', label: 'Similar to Market' },
          { value: 'higher', label: 'Above Market' },
        ],
      },
      {
        name: 'contactMethod',
        label: 'Contact Method',
        type: 'select',
        defaultValue: 'phone',
        options: [
          { value: 'emailOnly', label: 'Email Only / Won\'t Call' },
          { value: 'phone', label: 'Phone & Email' },
          { value: 'inPerson', label: 'Met in Person' },
        ],
      },
      {
        name: 'paymentRequest',
        label: 'Payment Request Type',
        type: 'select',
        defaultValue: 'standard',
        options: [
          { value: 'giftCard', label: 'Gift Cards / Cryptocurrency' },
          { value: 'wireOnly', label: 'Wire Transfer Only (Rushed)' },
          { value: 'standard', label: 'Standard Methods' },
        ],
      },
      {
        name: 'propertyAccess',
        label: 'Property Access',
        type: 'select',
        defaultValue: 'toured',
        options: [
          { value: 'cantView', label: 'Can\'t View Property' },
          { value: 'virtualOnly', label: 'Virtual Tour Only' },
          { value: 'toured', label: 'Toured in Person' },
        ],
      },
    ],
    results: [
      { label: "Scam Risk Level", isCurrency: false },
      { label: "Risk Score", isCurrency: false },
      { label: "Recommendation", isCurrency: false }
    ],
    calculate: (data) => {
      const { priceVsMarket, contactMethod, paymentRequest, propertyAccess } = data;
      
      let score = 0;
      
      // Price risk
      if (priceVsMarket === 'muchLower') score += 40;
      else if (priceVsMarket === 'lower') score += 20;
      
      // Contact risk
      if (contactMethod === 'emailOnly') score += 30;
      else if (contactMethod === 'phone') score += 5;
      
      // Payment risk
      if (paymentRequest === 'giftCard') score += 50;
      else if (paymentRequest === 'wireOnly') score += 25;
      
      // Access risk
      if (propertyAccess === 'cantView') score += 40;
      else if (propertyAccess === 'virtualOnly') score += 15;
      
      let riskLevel = 'Low Risk';
      let recommendation = 'Proceed with normal caution. Verify all details and use licensed professionals.';
      
      if (score >= 70) {
        riskLevel = 'CRITICAL RISK';
        recommendation = 'DO NOT PROCEED. This shows multiple red flags for a scam. Report to authorities.';
      } else if (score >= 40) {
        riskLevel = 'HIGH RISK';
        recommendation = 'Proceed with extreme caution. Verify seller identity, tour property, and consult an attorney.';
      } else if (score >= 20) {
        riskLevel = 'MODERATE RISK';
        recommendation = 'Some warning signs present. Get independent verification and use escrow services.';
      }
      
      return [
        { label: 'Scam Risk Level', value: riskLevel },
        { label: 'Risk Score', value: `${score}/100` },
        { label: 'Recommendation', value: recommendation }
      ];
    },
  },
};
