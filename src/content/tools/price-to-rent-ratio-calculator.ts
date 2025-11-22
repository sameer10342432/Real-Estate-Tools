import { CalculatorContent } from '@/types';

export const PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Price-to-Rent Ratio Calculator (Buy vs. Rent Signal)',
  description: 'Calculate price-to-rent ratio to determine if buying or renting is more financially beneficial in your market',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'price-to-rent-ratio-calculator',
  article: {
    title: "Understanding the Price-to-Rent Ratio",
    content: `
    <h2>What is the Price-to-Rent Ratio?</h2>
    <p>The price-to-rent ratio is a key metric that compares the cost of buying a home to the cost of renting it. This ratio helps investors and homebuyers determine whether it's more financially advantageous to buy or rent in a particular market.</p>
    
    <h3>How to Calculate Price-to-Rent Ratio</h3>
    <p>The formula is straightforward:</p>
    <p><strong>Price-to-Rent Ratio = Home Price ÷ (Monthly Rent × 12)</strong></p>
    <p>For example, if a home costs $300,000 and similar properties rent for $1,500/month:</p>
    <p>Price-to-Rent Ratio = $300,000 ÷ ($1,500 × 12) = $300,000 ÷ $18,000 = 16.67</p>
    
    <h3>Interpreting the Ratio</h3>
    <ul>
      <li><strong>Ratio 1-15:</strong> Buying is typically more favorable. Properties are relatively affordable compared to rents.</li>
      <li><strong>Ratio 16-20:</strong> The market is balanced. Consider personal factors like job stability and long-term plans.</li>
      <li><strong>Ratio 21+:</strong> Renting is usually better financially. Buying is expensive relative to rental costs.</li>
    </ul>
    
    <h3>Why Use This Calculator?</h3>
    <ul>
      <li><strong>Market Comparison:</strong> Compare different neighborhoods and cities to find the best value</li>
      <li><strong>Investment Decision:</strong> Determine if rental properties offer good cash flow potential</li>
      <li><strong>Personal Finance:</strong> Make informed decisions about your housing costs</li>
      <li><strong>Timing Indicator:</strong> Identify when markets favor buyers vs. renters</li>
    </ul>
    
    <h3>Factors to Consider</h3>
    <p>While the price-to-rent ratio is valuable, also consider:</p>
    <ul>
      <li>Mortgage interest rates and terms</li>
      <li>Property taxes and homeowners insurance</li>
      <li>Maintenance and HOA fees</li>
      <li>Expected home appreciation</li>
      <li>Tax benefits of homeownership</li>
      <li>Your expected length of stay</li>
      <li>Job stability and income growth</li>
    </ul>
    
    <h3>Real-World Examples</h3>
    <p><strong>San Francisco:</strong> High price-to-rent ratios (25+) often make renting more economical in the short term.</p>
    <p><strong>Cleveland:</strong> Lower ratios (10-15) typically favor buying as monthly payments are closer to rent costs.</p>
    <p>The optimal choice depends on your personal circumstances, financial goals, and market conditions.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent (Comparable Property)",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "propertyTax",
        label: "Annual Property Tax (Optional)",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "insurance",
        label: "Annual Home Insurance (Optional)",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "maintenance",
        label: "Annual Maintenance (Optional)",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
    ],
    results: [
      { label: "Price-to-Rent Ratio", isCurrency: false },
      { label: "Market Signal", isCurrency: false },
      { label: "Annual Rent Cost", isCurrency: true },
      { label: "Total Annual Ownership Costs", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homePrice = Number(data.homePrice) || 0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      const propertyTax = Number(data.propertyTax) || 0;
      const insurance = Number(data.insurance) || 0;
      const maintenance = Number(data.maintenance) || 0;
      
      const annualRent = monthlyRent * 12;
      const priceToRentRatio = annualRent > 0 ? homePrice / annualRent : 0;
      const totalAnnualOwnershipCosts = propertyTax + insurance + maintenance;
      
      let marketSignal = "";
      let recommendation = "";
      
      if (priceToRentRatio < 15) {
        marketSignal = "🟢 Buyer's Market";
        recommendation = "Buying is typically more favorable in this market";
      } else if (priceToRentRatio >= 15 && priceToRentRatio <= 20) {
        marketSignal = "🟡 Balanced Market";
        recommendation = "Consider personal factors - both options are viable";
      } else {
        marketSignal = "🔴 Renter's Market";
        recommendation = "Renting may be more financially beneficial";
      }

      return [
        { label: "Price-to-Rent Ratio", value: priceToRentRatio.toFixed(2), isCurrency: false },
        { label: "Market Signal", value: marketSignal, isCurrency: false },
        { label: "Annual Rent Cost", value: `${annualRent.toFixed(2)}`, isCurrency: true },
        { label: "Total Annual Ownership Costs", value: `${totalAnnualOwnershipCosts.toFixed(2)}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
