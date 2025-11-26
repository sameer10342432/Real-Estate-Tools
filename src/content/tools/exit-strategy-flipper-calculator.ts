import { CalculatorContent } from "@/types";

export const EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Exit Strategy Flipper Calculator",
  description: "Analyze and compare different exit strategies for your fix-and-flip investment properties to maximize profits and minimize risk.",
  icon: "🏠",
  category: "Investment Analysis",
  slug: "exit-strategy-flipper-calculator",
  metaTitle: "Exit Strategy Calculator for House Flippers | Compare Flip Exit Strategies",
  metaDescription: "Free exit strategy calculator for house flippers. Compare quick sale, market sale, rental conversion, and wholesale assignment options to maximize your flip profits and ROI.",
  article: {
    title: "Understanding Exit Strategies for House Flippers",
    content: `
      <h2>The Importance of Exit Strategy Planning in House Flipping</h2>
      <p>Every successful house flipper knows that the exit strategy is just as important as the acquisition and renovation phases of a project. Your exit strategy determines how you'll convert your investment back into cash and ultimately defines your profit potential. Having multiple exit strategies prepared before purchasing a property provides flexibility and risk mitigation in changing market conditions.</p>
      
      <p>This Exit Strategy Flipper Calculator helps you analyze and compare four primary exit strategies: Quick Sale, Market Sale, Rental Conversion, and Wholesale Assignment. By running the numbers on each option, you can make data-driven decisions that optimize your returns.</p>

      <h2>The Four Primary Exit Strategies for Flippers</h2>

      <h3>1. Quick Sale (Discount Sale)</h3>
      <p>A quick sale involves selling the property below market value to ensure a fast transaction. This strategy is ideal when:</p>
      <ul>
        <li><strong>Market conditions are deteriorating:</strong> If you sense a downturn, getting out quickly preserves capital</li>
        <li><strong>Holding costs are eating profits:</strong> High carrying costs may justify accepting a lower price</li>
        <li><strong>Capital is needed for better opportunities:</strong> A faster exit frees up funds for higher-return projects</li>
        <li><strong>The property has issues:</strong> Undisclosed problems or difficult locations may require price concessions</li>
      </ul>
      <p>Quick sales typically involve selling 5-15% below ARV to attract cash buyers or investors who can close rapidly. While profits are reduced, the shorter timeline can actually improve annualized returns and reduce risk exposure.</p>

      <h3>2. Market Sale (Traditional Sale)</h3>
      <p>The market sale is the most common exit strategy, involving listing the property at or near full ARV through traditional channels. This approach is best when:</p>
      <ul>
        <li><strong>Market conditions are stable or appreciating:</strong> You have time to wait for the right buyer</li>
        <li><strong>The renovation quality supports premium pricing:</strong> High-end finishes deserve full market exposure</li>
        <li><strong>Your holding costs are manageable:</strong> You can afford to wait 60-120 days for closing</li>
        <li><strong>Comparable sales support your ARV:</strong> Strong comps give you negotiating power</li>
      </ul>
      <p>Market sales typically require 6-8% in agent commissions and 2-4% in seller closing costs. Factor in 30-90 additional days of holding costs compared to quick sales.</p>

      <h3>3. Rental Conversion</h3>
      <p>Converting your flip to a rental property pivots from a short-term profit play to a long-term wealth-building strategy. Consider this exit when:</p>
      <ul>
        <li><strong>The market turns against selling:</strong> If prices drop, renting preserves equity</li>
        <li><strong>Cash flow is attractive:</strong> Strong rental markets may offer better returns than selling</li>
        <li><strong>You're building a rental portfolio:</strong> Strategic holds contribute to passive income goals</li>
        <li><strong>Tax benefits are valuable:</strong> Depreciation and expense deductions can offset other income</li>
        <li><strong>Appreciation potential is high:</strong> Holding in emerging neighborhoods captures future gains</li>
      </ul>
      <p>When evaluating rental conversion, calculate your cash-on-cash return, cap rate, and monthly cash flow. Compare the annual rental income to what you'd earn by selling and reinvesting the proceeds.</p>

      <h3>4. Wholesale Assignment</h3>
      <p>Wholesale assignment means selling your contract (or the property immediately after closing) to another investor at a markup. This strategy works when:</p>
      <ul>
        <li><strong>You're capital-constrained:</strong> Limited rehab funds prevent completing the project</li>
        <li><strong>The deal is too large for your experience:</strong> Passing to a more experienced flipper reduces risk</li>
        <li><strong>Time constraints prevent renovation:</strong> Life circumstances may require a quick exit</li>
        <li><strong>Profit margins are thin:</strong> Assignment fees provide guaranteed profit without renovation risk</li>
        <li><strong>Market conditions are uncertain:</strong> Locking in a quick profit avoids potential downturns</li>
      </ul>
      <p>Typical wholesale assignment fees range from $5,000 to $25,000+ depending on the deal size and market. This approach offers the fastest exit with the least risk, but also the smallest potential profit.</p>

      <h2>Key Metrics for Comparing Exit Strategies</h2>

      <h3>Total Investment</h3>
      <p>Your total investment includes purchase price, rehab costs, and all holding costs throughout the project. This number represents your total capital at risk and forms the basis for ROI calculations.</p>

      <h3>Net Profit</h3>
      <p>Net profit is calculated by subtracting all costs (including selling expenses) from your sale proceeds. Each exit strategy has different selling costs that directly impact your bottom line.</p>

      <h3>Return on Investment (ROI)</h3>
      <p>ROI measures your profit as a percentage of your total investment. While important, ROI alone doesn't account for the time value of money.</p>
      <p><strong>Formula:</strong> ROI = (Net Profit / Total Investment) × 100</p>

      <h3>Annualized ROI</h3>
      <p>Annualized ROI normalizes returns to a yearly basis, allowing fair comparison between projects of different durations. A 15% ROI over 6 months equals a 30% annualized return, making it superior to a 20% ROI over 12 months.</p>
      <p><strong>Formula:</strong> Annualized ROI = (ROI / Months Held) × 12</p>

      <h3>Break-Even Price</h3>
      <p>The break-even price is the minimum sale price needed to recover your total investment plus selling costs. Knowing this number helps you set price floors during negotiations and evaluate risk in different scenarios.</p>

      <h3>Maximum Allowable Offer (MAO)</h3>
      <p>The MAO represents the highest purchase price you can pay while still achieving your target profit margin. Most flippers use the 70% Rule as a starting point:</p>
      <p><strong>Formula:</strong> MAO = (ARV × 70%) - Rehab Costs</p>
      <p>This formula builds in a 30% margin for profits and unexpected costs.</p>

      <h2>Risk Factors by Exit Strategy</h2>

      <table>
        <thead>
          <tr>
            <th>Exit Strategy</th>
            <th>Time Risk</th>
            <th>Market Risk</th>
            <th>Execution Risk</th>
            <th>Capital Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quick Sale</td>
            <td>Low</td>
            <td>Medium</td>
            <td>Low</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Market Sale</td>
            <td>Medium-High</td>
            <td>Medium-High</td>
            <td>Medium</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Rental Conversion</td>
            <td>Long-term</td>
            <td>Low</td>
            <td>Medium</td>
            <td>High (capital tied up)</td>
          </tr>
          <tr>
            <td>Wholesale Assignment</td>
            <td>Very Low</td>
            <td>Low</td>
            <td>Low</td>
            <td>Very Low</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Use This Calculator</h2>
      <p>Enter your project details including purchase price, rehab costs, holding costs, and expected ARV. Then select each exit strategy type to compare the financial outcomes. The calculator will provide:</p>
      <ul>
        <li>Total investment required</li>
        <li>Net profit for the selected strategy</li>
        <li>ROI and annualized ROI</li>
        <li>Break-even sale price</li>
        <li>Maximum allowable offer</li>
        <li>A recommendation based on your inputs</li>
      </ul>
      <p>Run the numbers for multiple scenarios to understand your options and build contingency plans before making an offer on any flip property.</p>

      <h2>Best Practices for Exit Strategy Planning</h2>
      <ul>
        <li><strong>Always have a backup plan:</strong> Enter every deal with at least two viable exit strategies</li>
        <li><strong>Know your local market:</strong> Average days on market and buyer pool depth affect strategy viability</li>
        <li><strong>Monitor market conditions:</strong> Be ready to pivot if the market shifts during your project</li>
        <li><strong>Calculate conservatively:</strong> Use realistic ARV estimates and include contingency in rehab budgets</li>
        <li><strong>Consider your timeline:</strong> Personal financial needs may favor faster exits over maximum profit</li>
        <li><strong>Factor in opportunity cost:</strong> Capital tied up in one project can't pursue other deals</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Successful house flipping requires more than just finding great deals and completing quality renovations. Strategic exit planning ensures you capture the maximum value from each project while managing risk appropriately. Use this calculator to compare your options, understand the trade-offs, and make informed decisions that align with your investment goals and risk tolerance.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        defaultValue: 150000,
      },
      {
        name: "rehabCosts",
        label: "Rehab Costs ($)",
        type: "number",
        defaultValue: 40000,
      },
      {
        name: "holdingCostsMonthly",
        label: "Holding Costs (Monthly) ($)",
        type: "number",
        defaultValue: 1500,
      },
      {
        name: "monthsHeld",
        label: "Months Held",
        type: "number",
        defaultValue: 6,
      },
      {
        name: "arv",
        label: "After Repair Value (ARV) ($)",
        type: "number",
        defaultValue: 250000,
      },
      {
        name: "agentCommission",
        label: "Agent Commission (%)",
        type: "number",
        defaultValue: 6,
      },
      {
        name: "closingCosts",
        label: "Closing Costs (%)",
        type: "number",
        defaultValue: 3,
      },
      {
        name: "exitStrategy",
        label: "Exit Strategy Type",
        type: "select",
        defaultValue: "market_sale",
        options: [
          { value: "quick_sale", label: "Quick Sale (10% below ARV)" },
          { value: "market_sale", label: "Market Sale (Full ARV)" },
          { value: "rental_conversion", label: "Rental Conversion" },
          { value: "wholesale_assignment", label: "Wholesale Assignment" },
        ],
      },
      {
        name: "wholesaleAssignmentFee",
        label: "Wholesale Assignment Fee ($)",
        type: "number",
        defaultValue: 15000,
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent (if rental) ($)",
        type: "number",
        defaultValue: 1800,
      },
    ],
    results: [
      { label: "Total Investment", isCurrency: true },
      { label: "Net Profit", isCurrency: true },
      { label: "ROI", isCurrency: false },
      { label: "Annualized ROI", isCurrency: false },
      { label: "Break-Even Price", isCurrency: true },
      { label: "Maximum Allowable Offer (70% Rule)", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (values: Record<string, any>) => {
      const {
        purchasePrice,
        rehabCosts,
        holdingCostsMonthly,
        monthsHeld,
        arv,
        agentCommission,
        closingCosts,
        exitStrategy,
        wholesaleAssignmentFee,
        monthlyRent,
      } = values;

      const totalHoldingCosts = holdingCostsMonthly * monthsHeld;
      const totalInvestment = purchasePrice + rehabCosts + totalHoldingCosts;
      const mao = arv * 0.7 - rehabCosts;

      let salePrice = 0;
      let sellingCosts = 0;
      let netProfit = 0;
      let recommendation = "";

      switch (exitStrategy) {
        case "quick_sale":
          salePrice = arv * 0.9;
          sellingCosts = salePrice * ((agentCommission + closingCosts) / 100);
          netProfit = salePrice - sellingCosts - totalInvestment;
          if (netProfit > 0 && monthsHeld <= 4) {
            recommendation = "Quick Sale is viable. Fast exit reduces risk and frees capital for new deals.";
          } else if (netProfit > 0) {
            recommendation = "Quick Sale provides a profit, but consider Market Sale for higher returns.";
          } else {
            recommendation = "Quick Sale results in a loss. Consider Market Sale or Rental Conversion.";
          }
          break;

        case "market_sale":
          salePrice = arv;
          sellingCosts = salePrice * ((agentCommission + closingCosts) / 100);
          netProfit = salePrice - sellingCosts - totalInvestment;
          if (netProfit >= totalInvestment * 0.2) {
            recommendation = "Market Sale offers strong returns. Proceed with listing at full ARV.";
          } else if (netProfit > 0) {
            recommendation = "Market Sale is profitable but margins are thin. Consider Quick Sale to reduce holding risk.";
          } else {
            recommendation = "Market Sale results in a loss. Rental Conversion may preserve equity.";
          }
          break;

        case "rental_conversion":
          const annualRent = monthlyRent * 12;
          const annualExpenses = annualRent * 0.4;
          const annualNOI = annualRent - annualExpenses;
          const capRate = (annualNOI / totalInvestment) * 100;
          const cashOnCash = (annualNOI / totalInvestment) * 100;
          
          netProfit = annualNOI;
          salePrice = arv;
          sellingCosts = 0;
          
          if (capRate >= 8) {
            recommendation = `Rental Conversion is excellent. ${capRate.toFixed(1)}% cap rate. Annual cash flow: $${annualNOI.toFixed(0)}/year.`;
          } else if (capRate >= 5) {
            recommendation = `Rental Conversion is acceptable. ${capRate.toFixed(1)}% cap rate. Consider if appreciation potential justifies holding.`;
          } else {
            recommendation = `Rental Conversion has low returns (${capRate.toFixed(1)}% cap rate). Market Sale may be better.`;
          }
          break;

        case "wholesale_assignment":
          salePrice = purchasePrice + wholesaleAssignmentFee;
          sellingCosts = 0;
          netProfit = wholesaleAssignmentFee;
          const assignmentROI = (wholesaleAssignmentFee / purchasePrice) * 100;
          
          if (wholesaleAssignmentFee >= 10000) {
            recommendation = `Wholesale Assignment locks in $${wholesaleAssignmentFee.toLocaleString()} profit with minimal risk. Quick and capital-efficient.`;
          } else {
            recommendation = `Wholesale fee is modest. Consider completing the flip for higher returns if you have the capital.`;
          }
          break;

        default:
          salePrice = arv;
          sellingCosts = salePrice * ((agentCommission + closingCosts) / 100);
          netProfit = salePrice - sellingCosts - totalInvestment;
          recommendation = "Select an exit strategy to see recommendations.";
      }

      const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;
      const annualizedROI = monthsHeld > 0 ? (roi / monthsHeld) * 12 : 0;
      const breakEvenPrice = totalInvestment / (1 - (agentCommission + closingCosts) / 100);

      return [
        { label: "Total Investment", value: totalInvestment.toFixed(2), isCurrency: true },
        { label: "Net Profit", value: netProfit.toFixed(2), isCurrency: true },
        { label: "ROI", value: `${roi.toFixed(2)}%`, isCurrency: false },
        { label: "Annualized ROI", value: `${annualizedROI.toFixed(2)}%`, isCurrency: false },
        { label: "Break-Even Price", value: breakEvenPrice.toFixed(2), isCurrency: true },
        { label: "Maximum Allowable Offer (70% Rule)", value: mao.toFixed(2), isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
