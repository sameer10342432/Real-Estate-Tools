import { CalculatorContent } from '@/types';

export const INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT: CalculatorContent = {
  title: 'Interest Rate vs Home Price Simulator',
  description: 'Simulate how interest rate changes affect home prices and affordability in real-time',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'interest-rate-home-price-simulator',
  article: {
    title: "The Inverse Relationship: Interest Rates vs Home Prices",
    content: `
    <h2>Understanding the Rate-Price Relationship</h2>
    <p>Interest rates and home prices typically move in opposite directions. When rates rise, affordability decreases, reducing demand and putting downward pressure on prices. When rates fall, buyers can afford more, increasing demand and prices.</p>
    
    <h3>How Interest Rates Impact Home Prices</h3>
    
    <h4>The Affordability Equation</h4>
    <p>Most buyers think in terms of monthly payment, not purchase price. A 1% rate increase on a $300,000 loan adds ~$180/month, reducing buying power by $30,000-$40,000.</p>
    
    <p><strong>Example: $2,000/month budget</strong></p>
    <ul>
      <li>At 3% rate: Can afford ~$475,000</li>
      <li>At 4% rate: Can afford ~$420,000 (-12% buying power)</li>
      <li>At 5% rate: Can afford ~$375,000 (-21% buying power)</li>
      <li>At 6% rate: Can afford ~$335,000 (-29% buying power)</li>
      <li>At 7% rate: Can afford ~$300,000 (-37% buying power)</li>
    </ul>
    
    <h3>Historical Rate-Price Patterns</h3>
    
    <h4>2020-2021: Record Low Rates (2.7-3.2%)</h4>
    <ul>
      <li>Home prices surged 20-40% nationally</li>
      <li>Bidding wars became standard</li>
      <li>First-time buyers priced out of markets</li>
    </ul>
    
    <h4>2022-2023: Rapid Rate Increase (3% to 7%+)</h4>
    <ul>
      <li>Home prices cooled or declined 5-15% in many markets</li>
      <li>Sales volume dropped 30-40%</li>
      <li>Affordability crisis deepened</li>
    </ul>
    
    <h4>2024-2025: Rate Stabilization/Modest Decline</h4>
    <ul>
      <li>Prices stabilized or resumed modest growth</li>
      <li>Market segmented: Luxury soft, entry-level competitive</li>
    </ul>
    
    <h3>Investment Strategies by Rate Environment</h3>
    
    <h4>Rising Rate Environment (Rates Increasing)</h4>
    <ul>
      <li><strong>Short-term:</strong> Prices may soften - negotiating opportunities</li>
      <li><strong>Lock Rates:</strong> If buying, lock early before further increases</li>
      <li><strong>Cash Buyers Win:</strong> Less competition from financed buyers</li>
      <li><strong>Rentals Favor:</strong> More people rent when buying is unaffordable</li>
      <li><strong>Adjustable Loans Risk:</strong> Avoid ARMs in rising rate environment</li>
    </ul>
    
    <h4>Falling Rate Environment (Rates Decreasing)</h4>
    <ul>
      <li><strong>Refinance Opportunity:</strong> Existing owners refinance, lowering inventory</li>
      <li><strong>Prices Rise:</strong> Increased affordability drives demand</li>
      <li><strong>Buy Early:</strong> Purchase before rates drop and competition surges</li>
      <li><strong>Competition Increases:</strong> More buyers can qualify</li>
    </ul>
    
    <h3>The "Lock-In Effect"</h3>
    <p>When rates rise significantly above existing homeowner's rates (e.g., 3% vs 7%), owners refuse to sell because they'd lose their low rate. This reduces inventory, supporting prices despite reduced affordability.</p>
    
    <h3>Using This Simulator</h3>
    <ol>
      <li>Enter current market data (rate, price, income)</li>
      <li>Model different rate scenarios (+1%, -1%, +2%, etc.)</li>
      <li>See how buying power and home prices adjust</li>
      <li>Make informed timing and pricing decisions</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentRate",
        label: "Current Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "simulatedRate",
        label: "Simulated New Rate (%)",
        type: "number",
        placeholder: "5.5",
        defaultValue: "5.5",
      },
      {
        name: "currentMedianPrice",
        label: "Current Median Home Price ($)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "buyerMonthlyBudget",
        label: "Typical Buyer Monthly Budget ($)",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "downPaymentPct",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
    ],
    results: [
      { label: "Buying Power at Current Rate", isCurrency: true },
      { label: "Buying Power at New Rate", isCurrency: true },
      { label: "Change in Buying Power", isCurrency: false },
      { label: "Projected Price Impact", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentRate = Number(data.currentRate) / 100 || 0.065;
      const simulatedRate = Number(data.simulatedRate) / 100 || 0.055;
      const currentMedianPrice = Number(data.currentMedianPrice) || 400000;
      const monthlyBudget = Number(data.buyerMonthlyBudget) || 2500;
      const downPaymentPct = Number(data.downPaymentPct) / 100 || 0.20;
      
      // Calculate maximum loan amounts based on monthly budget
      const monthlyRate = currentRate / 12;
      const simulatedMonthlyRate = simulatedRate / 12;
      const loanTermMonths = 360; // 30 years
      
      // PMT formula solved for principal: P = (PMT × (1 - (1 + r)^-n)) / r
      const maxLoanCurrent = monthlyBudget * ((1 - Math.pow(1 + monthlyRate, -loanTermMonths)) / monthlyRate);
      const maxLoanSimulated = monthlyBudget * ((1 - Math.pow(1 + simulatedMonthlyRate, -loanTermMonths)) / simulatedMonthlyRate);
      
      // Calculate buying power (loan + down payment)
      const buyingPowerCurrent = maxLoanCurrent / (1 - downPaymentPct);
      const buyingPowerSimulated = maxLoanSimulated / (1 - downPaymentPct);
      
      const buyingPowerChange = buyingPowerSimulated - buyingPowerCurrent;
      const buyingPowerChangePct = (buyingPowerChange / buyingPowerCurrent) * 100;
      
      // Estimate price impact (assuming 60-70% of buying power change translates to prices)
      const priceImpactFactor = 0.65; // 65% pass-through
      const estimatedPriceChange = buyingPowerChangePct * priceImpactFactor;
      
      let priceImpactMessage = "";
      if (estimatedPriceChange > 5) {
        priceImpactMessage = `📈 Prices likely to RISE ${estimatedPriceChange.toFixed(1)}% - Buy now or be priced out`;
      } else if (estimatedPriceChange > 2) {
        priceImpactMessage = `📈 Moderate price increase expected (~${estimatedPriceChange.toFixed(1)}%)`;
      } else if (estimatedPriceChange > -2) {
        priceImpactMessage = `⚖️ Minimal price impact (±${Math.abs(estimatedPriceChange).toFixed(1)}%)`;
      } else if (estimatedPriceChange > -5) {
        priceImpactMessage = `📉 Moderate price decrease expected (~${Math.abs(estimatedPriceChange).toFixed(1)}%)`;
      } else {
        priceImpactMessage = `📉 Prices likely to FALL ${Math.abs(estimatedPriceChange).toFixed(1)}% - Wait for better deals`;
      }

      return [
        { label: "Buying Power at Current Rate", value: buyingPowerCurrent.toFixed(0), isCurrency: true },
        { label: "Buying Power at New Rate", value: buyingPowerSimulated.toFixed(0), isCurrency: true },
        { label: "Change in Buying Power", value: `${buyingPowerChange >= 0 ? '+' : ''}$${Math.abs(buyingPowerChange).toFixed(0)} (${buyingPowerChangePct.toFixed(1)}%)`, isCurrency: false },
        { label: "Projected Price Impact", value: priceImpactMessage, isCurrency: false },
      ];
    },
  },
};