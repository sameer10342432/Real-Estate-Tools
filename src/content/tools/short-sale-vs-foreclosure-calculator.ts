import { CalculatorContent } from '@/types';

export const SHORT_SALE_VS_FORECLOSURE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Short Sale vs. Foreclosure Calculator',
  description: 'Compare the financial and credit impact of short sale versus foreclosure',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'short-sale-vs-foreclosure-calculator',
  metaTitle: 'Short Sale vs. Foreclosure Calculator - Compare Financial & Credit Impact',
  metaDescription: 'Compare short sale and foreclosure options. Calculate financial impact, credit score effects, and future buying timeline. Make informed decisions about distressed property options.',
  metaKeywords: 'short sale calculator, foreclosure calculator, credit impact, distressed property, mortgage default, home loss options',
  article: {
    title: "Short Sale vs. Foreclosure: Understanding Your Options",
    content: `
    <h2>Short Sale vs. Foreclosure: Understanding Your Options</h2>
    <p>When facing mortgage default, homeowners have two primary options: short sale or foreclosure. Each has different financial and credit implications that can affect your financial future for years.</p>
    
    <h3>What is a Short Sale?</h3>
    <p>A short sale occurs when a homeowner sells their property for less than the outstanding mortgage balance, with lender approval. The lender accepts the sale proceeds as full or partial satisfaction of the debt.</p>
    
    <h3>What is a Foreclosure?</h3>
    <p>Foreclosure is a legal process where the lender takes possession of the property due to non-payment. The property is then sold at auction to recover the loan amount.</p>
    
    <h3>Key Differences</h3>
    <ul>
      <li><strong>Credit Impact:</strong> Short sale typically drops credit score 85-160 points; foreclosure drops 130-240 points</li>
      <li><strong>Timeline to Buy Again:</strong> Short sale: 2-4 years; Foreclosure: 3-7 years</li>
      <li><strong>Deficiency Judgment:</strong> Short sale may have negotiable deficiency; foreclosure often has legal deficiency judgment</li>
      <li><strong>Control:</strong> Short sale keeps you in control of the sale process; foreclosure removes control</li>
      <li><strong>Tax Implications:</strong> Both may have forgiven debt treated as taxable income (check current tax laws)</li>
    </ul>
    
    <h3>Financial Considerations</h3>
    <p><strong>Short Sale Costs:</strong></p>
    <ul>
      <li>Real estate agent commissions (usually paid by lender)</li>
      <li>Closing costs (may be negotiated with lender)</li>
      <li>Possible cash contribution to lender</li>
      <li>Legal and tax advice fees</li>
    </ul>
    
    <p><strong>Foreclosure Costs:</strong></p>
    <ul>
      <li>Attorney fees if you contest</li>
      <li>Potential deficiency judgment</li>
      <li>Moving costs (less time to plan)</li>
      <li>Storage costs for belongings</li>
    </ul>
    
    <h3>Credit Score Recovery</h3>
    <p>Short Sale: Most borrowers can qualify for FHA loans after 2-3 years with good payment history. Conventional loans typically require 4 years.</p>
    <p>Foreclosure: FHA loans possible after 3 years (with extenuating circumstances). Conventional loans typically require 7 years.</p>
    
    <h3>Making the Decision</h3>
    <p>Consider these factors when choosing between short sale and foreclosure:</p>
    <ul>
      <li>Current financial situation and ability to qualify for short sale</li>
      <li>Timeline urgency for resolution</li>
      <li>Future homeownership plans</li>
      <li>State laws regarding deficiency judgments</li>
      <li>Tax implications and current IRS rules</li>
      <li>Emotional and psychological impact</li>
    </ul>
    
    <h3>Professional Guidance</h3>
    <p>Always consult with:</p>
    <ul>
      <li>Real estate attorney familiar with foreclosure law</li>
      <li>Tax professional for tax implications</li>
      <li>HUD-approved housing counselor (free service)</li>
      <li>Experienced short sale real estate agent</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentHomeValue",
        label: "Current Home Value",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "mortgageBalance",
        label: "Total Mortgage Balance",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "currentCreditScore",
        label: "Current Credit Score",
        type: "number",
        placeholder: "680",
        defaultValue: "680",
      },
      {
        name: "monthsBehind",
        label: "Months Behind on Payment",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "shortSaleOfferPrice",
        label: "Potential Short Sale Offer Price",
        type: "number",
        placeholder: "295000",
        defaultValue: "295000",
      },
    ],
    results: [
      { label: "Short Sale Credit Score Impact", isCurrency: false },
      { label: "Foreclosure Credit Score Impact", isCurrency: false },
      { label: "Short Sale Deficiency", isCurrency: true },
      { label: "Foreclosure Deficiency (Est.)", isCurrency: true },
      { label: "Years Until FHA Eligible (Short Sale)", isCurrency: false },
      { label: "Years Until FHA Eligible (Foreclosure)", isCurrency: false },
      { label: "Recommended Option", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentHomeValue = Number(data.currentHomeValue) || 0;
      const mortgageBalance = Number(data.mortgageBalance) || 0;
      const currentCreditScore = Number(data.currentCreditScore) || 680;
      const monthsBehind = Number(data.monthsBehind) || 0;
      const shortSaleOfferPrice = Number(data.shortSaleOfferPrice) || 0;
      
      // Credit score impact calculations
      const shortSaleCreditDrop = 85 + (monthsBehind * 15); // 85-160 point range
      const foreclosureCreditDrop = 130 + (monthsBehind * 20); // 130-240 point range
      
      const shortSaleCreditScore = Math.max(300, currentCreditScore - shortSaleCreditDrop);
      const foreclosureCreditScore = Math.max(300, currentCreditScore - foreclosureCreditDrop);
      
      // Deficiency calculations
      const shortSaleDeficiency = Math.max(0, mortgageBalance - shortSaleOfferPrice);
      const foreclosureSalePrice = currentHomeValue * 0.85; // Foreclosure typically sells for 85% of value
      const foreclosureDeficiency = Math.max(0, mortgageBalance - foreclosureSalePrice);
      
      // FHA eligibility timeline
      const shortSaleFHAYears = shortSaleCreditScore >= 580 ? 2 : 3;
      const foreclosureFHAYears = 3;
      
      // Recommendation logic
      let recommendation = "";
      if (shortSaleOfferPrice >= mortgageBalance * 0.90) {
        recommendation = "✅ Short Sale Recommended - Minimal deficiency";
      } else if (currentCreditScore > 650) {
        recommendation = "✅ Short Sale Recommended - Better credit preservation";
      } else if (monthsBehind >= 6) {
        recommendation = "⚠️ Consult Attorney - Timeline may favor foreclosure";
      } else {
        recommendation = "✅ Short Sale Recommended - Better long-term outcome";
      }

      return [
        { 
          label: "Short Sale Credit Score Impact", 
          value: `-${shortSaleCreditDrop} points (Score: ${shortSaleCreditScore})`, 
          isCurrency: false 
        },
        { 
          label: "Foreclosure Credit Score Impact", 
          value: `-${foreclosureCreditDrop} points (Score: ${foreclosureCreditScore})`, 
          isCurrency: false 
        },
        { 
          label: "Short Sale Deficiency", 
          value: shortSaleDeficiency.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Foreclosure Deficiency (Est.)", 
          value: foreclosureDeficiency.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Years Until FHA Eligible (Short Sale)", 
          value: `${shortSaleFHAYears} years`, 
          isCurrency: false 
        },
        { 
          label: "Years Until FHA Eligible (Foreclosure)", 
          value: `${foreclosureFHAYears} years`, 
          isCurrency: false 
        },
        { 
          label: "Recommended Option", 
          value: recommendation, 
          isCurrency: false 
        },
      ];
    },
  },
};
