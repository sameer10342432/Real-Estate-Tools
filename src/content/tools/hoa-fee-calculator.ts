import { CalculatorContent } from '@/types';

export const HOA_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'HOA Fee Calculator',
  description: 'Calculate total homeownership costs including HOA fees and assess affordability',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'hoa-fee-calculator',
  article: {
    title: "Understanding HOA Fees",
    content: `
    <h2>What are HOA Fees?</h2>
    <p>Homeowners Association (HOA) fees are monthly or annual charges paid by homeowners in planned communities, condominiums, or townhomes. These fees cover the cost of maintaining common areas and shared amenities.</p>
    
    <h3>What Do HOA Fees Cover?</h3>
    <ul>
      <li><strong>Common Area Maintenance:</strong> Landscaping, pool maintenance, clubhouse upkeep</li>
      <li><strong>Utilities:</strong> Water, trash collection, sometimes electricity for common areas</li>
      <li><strong>Insurance:</strong> Master insurance policy for the building or complex</li>
      <li><strong>Repairs & Reserves:</strong> Major repairs and reserve fund for future projects</li>
      <li><strong>Amenities:</strong> Gym, pool, tennis courts, security services</li>
      <li><strong>Professional Management:</strong> HOA management company fees</li>
    </ul>
    
    <h3>Impact on Your Budget</h3>
    <p>HOA fees significantly impact your monthly housing costs and should be factored into affordability calculations. Average HOA fees range from $200-$400/month but can be much higher for luxury properties or buildings with extensive amenities.</p>
    
    <h3>Things to Consider</h3>
    <ul>
      <li><strong>Special Assessments:</strong> One-time fees for major repairs not covered by reserves</li>
      <li><strong>Fee Increases:</strong> HOA fees typically increase 3-5% annually</li>
      <li><strong>Financial Health:</strong> Review HOA financial statements before buying</li>
      <li><strong>Rules & Restrictions:</strong> HOAs may have strict rules about renovations, rentals, pets</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyHOAFee",
        label: "Monthly HOA Fee",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "homePrice",
        label: "Home Purchase Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "downPayment",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "propertyTax",
        label: "Annual Property Tax",
        type: "number",
        placeholder: "4800",
        defaultValue: "4800",
      },
      {
        name: "homeInsurance",
        label: "Annual Home Insurance",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
    ],
    results: [
      { label: "Monthly HOA Fee", isCurrency: true },
      { label: "Annual HOA Cost", isCurrency: true },
      { label: "Monthly Mortgage Payment (P&I)", isCurrency: true },
      { label: "Total Monthly Housing Cost", isCurrency: true },
      { label: "HOA as % of Total Housing Cost", isCurrency: false },
    ],
    calculate: (data: any) => {
      const hoaFee = Number(data.monthlyHOAFee) || 0;
      const homePrice = Number(data.homePrice) || 0;
      const downPaymentPercent = Number(data.downPayment) || 0;
      const interestRate = (Number(data.interestRate) || 0) / 100 / 12;
      const loanTerm = (Number(data.loanTerm) || 0) * 12;
      const propertyTax = (Number(data.propertyTax) || 0) / 12;
      const homeInsurance = (Number(data.homeInsurance) || 0) / 12;

      const downPaymentAmount = homePrice * (downPaymentPercent / 100);
      const loanAmount = homePrice - downPaymentAmount;

      let monthlyPI = 0;
      if (interestRate > 0 && loanTerm > 0) {
        monthlyPI = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
      }

      const totalMonthly = monthlyPI + propertyTax + homeInsurance + hoaFee;
      const hoaPercentage = totalMonthly > 0 ? (hoaFee / totalMonthly) * 100 : 0;

      return [
        { label: "Monthly HOA Fee", value: `${hoaFee.toFixed(2)}`, isCurrency: true },
        { label: "Annual HOA Cost", value: `${(hoaFee * 12).toFixed(2)}`, isCurrency: true },
        { label: "Monthly Mortgage Payment (P&I)", value: `${monthlyPI.toFixed(2)}`, isCurrency: true },
        { label: "Total Monthly Housing Cost", value: `${totalMonthly.toFixed(2)}`, isCurrency: true },
        { label: "HOA as % of Total Housing Cost", value: `${hoaPercentage.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};