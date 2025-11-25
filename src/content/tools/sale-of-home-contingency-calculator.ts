import { CalculatorContent } from '@/types';

const SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sale of Home Contingency Calculator',
  description: 'Calculate timelines, risks, and financial implications of including a home sale contingency in your purchase offer.',
  icon: 'Icon',
  slug: 'sale-of-home-contingency-calculator',
  category: 'Buyer Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'newHomePurchasePrice',
        label: 'New Home Purchase Price ($)',
        type: 'number',
        defaultValue: '450000',
      },
      {
        name: 'currentHomeSalePrice',
        label: 'Current Home Expected Sale Price ($)',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'currentHomeMarketDays',
        label: 'Estimated Days on Market',
        type: 'number',
        defaultValue: '45',
      },
      {
        name: 'contingencyPeriod',
        label: 'Contingency Period (Days)',
        type: 'number',
        defaultValue: '60',
      },
      {
        name: 'currentHomeMortgageBalance',
        label: 'Current Home Mortgage Balance ($)',
        type: 'number',
        defaultValue: '200000',
      },
      {
        name: 'sellingCosts',
        label: 'Expected Selling Costs (% of Sale Price)',
        type: 'number',
        defaultValue: '8',
      },
      {
        name: 'newHomeDownPayment',
        label: 'New Home Down Payment (%)',
        type: 'number',
        defaultValue: '20',
      },
    ],
    calculate: (values) => {
      const newHomePurchase = Number(values.newHomePurchasePrice);
      const currentHomeSale = Number(values.currentHomeSalePrice);
      const daysOnMarket = Number(values.currentHomeMarketDays);
      const contingencyDays = Number(values.contingencyPeriod);
      const mortgageBalance = Number(values.currentHomeMortgageBalance);
      const sellingCostPct = Number(values.sellingCosts) / 100;
      const downPaymentPct = Number(values.newHomeDownPayment) / 100;

      // Calculate proceeds from current home sale
      const sellingCosts = currentHomeSale * sellingCostPct;
      const netProceeds = currentHomeSale - mortgageBalance - sellingCosts;

      // Calculate new home down payment needs
      const requiredDownPayment = newHomePurchase * downPaymentPct;
      const proceedsTowardDown = Math.min(netProceeds, requiredDownPayment);
      const additionalCashNeeded = Math.max(0, requiredDownPayment - netProceeds);

      // Calculate timeline and risks
      const totalTimeNeeded = daysOnMarket + 30; // Add 30 days for closing
      const timelineRisk = contingencyDays < totalTimeNeeded ? 'High' : 'Low';
      const contingencyBuffer = contingencyDays - totalTimeNeeded;

      // Calculate acceptance probability
      let acceptanceProbability = 70;
      if (additionalCashNeeded > 0) acceptanceProbability -= 20;
      if (contingencyDays > 90) acceptanceProbability -= 15;
      if (netProceeds < requiredDownPayment) acceptanceProbability -= 10;

      return [
        {
          label: 'Net Proceeds from Current Home',
          value: `$${netProceeds.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Selling Costs (Including Commission)',
          value: `$${sellingCosts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Required Down Payment for New Home',
          value: `$${requiredDownPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Proceeds Available for Down Payment',
          value: `$${proceedsTowardDown.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Additional Cash Needed',
          value: `$${additionalCashNeeded.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Estimated Total Time Needed (Days)',
          value: `${totalTimeNeeded} days`,
        },
        {
          label: 'Contingency Period Buffer',
          value: `${contingencyBuffer} days`,
        },
        {
          label: 'Timeline Risk Assessment',
          value: timelineRisk,
          isHighlighted: timelineRisk === 'High',
        },
        {
          label: 'Estimated Offer Acceptance Probability',
          value: `${Math.max(0, acceptanceProbability)}%`,
        },
      ];
    },
  },
  article: {
    title: 'Understanding Home Sale Contingencies in Real Estate Transactions',
    content: `
      <h2>What is a Home Sale Contingency?</h2>
      <p>A home sale contingency is a clause in a purchase agreement that makes the purchase of a new home conditional upon the successful sale of the buyer's current home. This contingency protects buyers who need proceeds from their current home sale to afford the down payment or closing costs on their new property.</p>

      <h3>How Home Sale Contingencies Work</h3>
      <p>When you include a home sale contingency in your offer, you're essentially giving yourself an "out" if your current home doesn't sell within a specified timeframe. The contingency typically includes:</p>
      <ul>
        <li><strong>Time Period:</strong> The number of days you have to sell your current home (usually 30-90 days)</li>
        <li><strong>Sale Price Threshold:</strong> The minimum price your home must sell for</li>
        <li><strong>Kick-out Clause:</strong> Allows the seller to continue marketing and accept backup offers</li>
        <li><strong>Settlement Date:</strong> The date by which your current home must close</li>
      </ul>

      <h3>Advantages of Home Sale Contingencies</h3>
      <ul>
        <li><strong>Financial Protection:</strong> Ensures you won't be stuck owning two homes simultaneously</li>
        <li><strong>Reduced Pressure:</strong> Gives you time to sell without rushing into a low-ball offer</li>
        <li><strong>Avoid Bridge Loans:</strong> May eliminate the need for expensive short-term financing</li>
        <li><strong>Budget Certainty:</strong> Know exactly how much you'll have for your down payment</li>
      </ul>

      <h3>Disadvantages and Risks</h3>
      <ul>
        <li><strong>Less Competitive:</strong> Sellers often prefer offers without contingencies</li>
        <li><strong>Kick-out Clause:</strong> Seller may accept a better offer, giving you 72 hours to remove contingency</li>
        <li><strong>Market Timing:</strong> Your home might not sell as quickly as anticipated</li>
        <li><strong>Price Uncertainty:</strong> Your home may sell for less than expected</li>
        <li><strong>Opportunity Loss:</strong> You might lose the home to a cash or non-contingent buyer</li>
      </ul>

      <h3>Alternatives to Home Sale Contingencies</h3>
      <p>If sellers are reluctant to accept your contingency, consider these alternatives:</p>
      <ul>
        <li><strong>Bridge Loan:</strong> Short-term financing using equity from your current home</li>
        <li><strong>Home Equity Line of Credit (HELOC):</strong> Access equity without selling</li>
        <li><strong>Sell First, Buy Later:</strong> Sell your current home before making an offer</li>
        <li><strong>Rent-back Agreement:</strong> Sell your home but rent it from the buyer temporarily</li>
        <li><strong>Larger Earnest Money Deposit:</strong> Show commitment even with contingency</li>
      </ul>

      <h3>Negotiating Tips</h3>
      <p>To make your contingent offer more attractive:</p>
      <ul>
        <li>Set a shorter contingency period (30-45 days instead of 60-90)</li>
        <li>Provide proof that your home is already listed and attracting offers</li>
        <li>Include a strong pre-approval letter from your lender</li>
        <li>Offer a competitive price despite the contingency</li>
        <li>Be flexible on closing dates and other terms</li>
        <li>Consider a larger earnest money deposit to demonstrate seriousness</li>
      </ul>

      <h3>When to Use a Home Sale Contingency</h3>
      <p>A home sale contingency makes sense when:</p>
      <ul>
        <li>You need proceeds from your current sale for the down payment</li>
        <li>You can't afford two mortgages simultaneously</li>
        <li>The local market favors buyers (less competition)</li>
        <li>You're in a strong negotiating position</li>
        <li>The seller is motivated and willing to wait</li>
      </ul>

      <h3>Red Flags and Considerations</h3>
      <p>Be cautious if:</p>
      <ul>
        <li>Your home hasn't been listed yet when making the offer</li>
        <li>You're in a competitive seller's market</li>
        <li>The seller has multiple offers</li>
        <li>Your contingency period is longer than typical market conditions warrant</li>
        <li>You're not confident in your home's sale price or timeline</li>
      </ul>

      <h3>Legal and Financial Considerations</h3>
      <p>Before including a home sale contingency:</p>
      <ul>
        <li>Consult with a real estate attorney to review contingency language</li>
        <li>Get your current home professionally appraised</li>
        <li>Have a backup financing plan in case of timing issues</li>
        <li>Understand all exit strategies and potential costs</li>
        <li>Calculate worst-case scenarios (carrying two mortgages)</li>
      </ul>

      <p>Use this calculator to assess whether a home sale contingency is right for your situation and understand the financial implications of including this clause in your purchase offer.</p>
    `
  },
};

export { SALE_OF_HOME_CONTINGENCY_CALCULATOR_CONTENT };
