import { CalculatorContent } from '@/types';

export const EQUITY_SPLIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Equity Split Calculator (Partnership)',
  description: 'Calculate how to split equity and profits in real estate partnerships. Determine fair ownership percentages based on capital and sweat equity contributions.',
  icon: '🤝',
  category: 'Investment',
  slug: 'equity-split-calculator',
  metaTitle: 'Equity Split Calculator for Real Estate Partnerships | Free Partnership Equity Tool',
  metaDescription: 'Calculate fair equity splits for real estate partnerships. Determine ownership percentages, profit sharing, and total returns based on capital contributions and sweat equity. Free online calculator for LPs, LLCs, and joint ventures.',
  article: {
    title: 'Understanding Partnership Equity Splits in Real Estate',
    content: `
      <h2>What is Partnership Equity in Real Estate?</h2>
      <p>Partnership equity represents each partner's ownership stake in a real estate investment. When multiple investors come together to purchase, develop, or manage property, determining how to fairly divide ownership and profits becomes crucial to the partnership's success. A well-structured equity split accounts for various contributions including capital investment, expertise, time commitment, and ongoing management responsibilities.</p>
      
      <h2>Types of Real Estate Partnerships</h2>
      <p>Before calculating equity splits, it's important to understand the different partnership structures available for real estate investments:</p>
      
      <h3>Limited Partnership (LP)</h3>
      <p>A Limited Partnership consists of at least one general partner (GP) who manages the investment and assumes unlimited liability, and one or more limited partners (LPs) who contribute capital but have limited involvement in daily operations. Limited partners' liability is typically restricted to their investment amount. In LP structures, the GP often receives a larger equity share or promotes (profit participation above their capital contribution) in exchange for their management role and additional risk.</p>
      
      <h3>Limited Liability Company (LLC)</h3>
      <p>An LLC offers flexibility in structuring ownership and profit distributions while providing liability protection for all members. Real estate LLCs can customize their operating agreements to reflect each member's contributions, whether capital, expertise, or sweat equity. This structure is popular among small to mid-sized real estate partnerships due to its flexibility and tax advantages.</p>
      
      <h3>Joint Venture (JV)</h3>
      <p>A Joint Venture is typically formed for a specific project or limited duration. JVs often bring together parties with complementary resources—for example, one partner provides capital while another contributes land, expertise, or development capabilities. JV agreements clearly define each party's contributions, responsibilities, and profit-sharing arrangements for that particular venture.</p>
      
      <h2>Capital Equity vs. Sweat Equity</h2>
      <p>Understanding the difference between capital equity and sweat equity is fundamental to creating fair partnership structures:</p>
      
      <h3>Capital Equity</h3>
      <p>Capital equity represents ownership derived from financial contributions. Partners who invest money into the partnership—whether for down payments, closing costs, renovations, or working capital—receive equity proportional to their investment. For example, if Partner A contributes $80,000 and Partner B contributes $20,000 toward a property purchase, their capital equity split would be 80/20 before any other adjustments.</p>
      
      <h3>Sweat Equity</h3>
      <p>Sweat equity compensates partners for non-monetary contributions such as:</p>
      <ul>
        <li><strong>Property Management:</strong> Handling tenant relations, rent collection, and maintenance coordination</li>
        <li><strong>Renovation Work:</strong> Performing or overseeing property improvements</li>
        <li><strong>Deal Sourcing:</strong> Finding and analyzing investment opportunities</li>
        <li><strong>Professional Expertise:</strong> Contributing specialized skills like legal, financial, or construction knowledge</li>
        <li><strong>Time Investment:</strong> Day-to-day management and decision-making responsibilities</li>
      </ul>
      <p>Sweat equity is typically assigned as a percentage that reduces the capital-based equity pool, ensuring that partners contributing time and effort are compensated even if they invest less money.</p>
      
      <h2>Profit Sharing Structures</h2>
      <p>Once equity percentages are established, partnerships must decide how to distribute profits. Common approaches include:</p>
      
      <h3>Pro-Rata Distribution</h3>
      <p>The simplest method distributes profits according to each partner's equity percentage. If Partner A owns 60% and Partner B owns 40%, they receive 60% and 40% of all profits respectively.</p>
      
      <h3>Preferred Returns</h3>
      <p>Some partnerships establish preferred returns, where certain partners receive a guaranteed return on their investment before profits are split. For example, capital partners might receive an 8% preferred return annually before remaining profits are divided according to equity percentages.</p>
      
      <h3>Waterfall Structures</h3>
      <p>More complex partnerships use waterfall structures that change profit distributions at different return thresholds. For instance, profits might split 80/20 until investors achieve a 15% IRR, then shift to 70/30 for returns above that threshold.</p>
      
      <h2>How to Use This Calculator</h2>
      <p>This equity split calculator helps you determine fair ownership percentages and projected returns for a two-partner real estate investment. Follow these steps:</p>
      
      <h3>Step 1: Enter Property Details</h3>
      <p>Input the total property value. This represents the current market value or purchase price of the investment property and serves as the basis for calculating each partner's equity position.</p>
      
      <h3>Step 2: Input Capital Contributions</h3>
      <p>Enter each partner's financial contribution. This includes down payments, closing costs, and any initial capital invested in the property. The calculator uses these amounts to determine the capital-based equity split.</p>
      
      <h3>Step 3: Assign Sweat Equity Percentages</h3>
      <p>If either partner is contributing time, expertise, or effort beyond their financial investment, enter their sweat equity percentage. This percentage is added to their ownership stake, with the remaining equity distributed based on capital contributions.</p>
      
      <h3>Step 4: Set Expected Returns</h3>
      <p>Enter your expected annual return percentage and the anticipated holding period in years. These values help project each partner's annual profits and total return over the investment timeline.</p>
      
      <h3>Understanding Your Results</h3>
      <p>The calculator provides comprehensive results including:</p>
      <ul>
        <li><strong>Equity Shares:</strong> Each partner's final ownership percentage after accounting for both capital and sweat equity</li>
        <li><strong>Initial Equity Value:</strong> The dollar value of each partner's stake based on the property value</li>
        <li><strong>Annual Profits:</strong> Projected yearly cash flow for each partner based on their equity share</li>
        <li><strong>Total Returns:</strong> Cumulative returns over the entire holding period</li>
      </ul>
      
      <h2>Best Practices for Partnership Equity Agreements</h2>
      <p>When establishing a real estate partnership, consider these recommendations:</p>
      <ul>
        <li><strong>Document Everything:</strong> Create detailed partnership or operating agreements that clearly define equity splits, profit distributions, and responsibilities</li>
        <li><strong>Plan for Contingencies:</strong> Address potential scenarios like partner exit, death, disability, or disputes</li>
        <li><strong>Review Regularly:</strong> Periodically reassess equity arrangements, especially if circumstances or contributions change</li>
        <li><strong>Consult Professionals:</strong> Work with attorneys and accountants experienced in real estate partnerships to structure your agreement properly</li>
        <li><strong>Be Transparent:</strong> Maintain open communication about expectations, contributions, and financial performance</li>
      </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'totalPropertyValue',
        label: 'Total Property Value ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'partner1Contribution',
        label: 'Partner 1 Capital Contribution ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'partner2Contribution',
        label: 'Partner 2 Capital Contribution ($)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'partner1SweatEquity',
        label: 'Partner 1 Sweat Equity (%)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'partner2SweatEquity',
        label: 'Partner 2 Sweat Equity (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'expectedAnnualReturn',
        label: 'Expected Annual Return (%)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'holdingPeriodYears',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      { label: 'Partner 1 Equity Share', isCurrency: false },
      { label: 'Partner 2 Equity Share', isCurrency: false },
      { label: 'Partner 1 Initial Equity', isCurrency: true },
      { label: 'Partner 2 Initial Equity', isCurrency: true },
      { label: 'Partner 1 Annual Profit', isCurrency: true },
      { label: 'Partner 2 Annual Profit', isCurrency: true },
      { label: 'Partner 1 Total Return', isCurrency: true },
      { label: 'Partner 2 Total Return', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        totalPropertyValue,
        partner1Contribution,
        partner2Contribution,
        partner1SweatEquity,
        partner2SweatEquity,
        expectedAnnualReturn,
        holdingPeriodYears,
      } = values;

      const totalCapitalContribution = partner1Contribution + partner2Contribution;
      const totalSweatEquity = partner1SweatEquity + partner2SweatEquity;
      const remainingForCapital = 100 - totalSweatEquity;

      let partner1CapitalEquity = 0;
      let partner2CapitalEquity = 0;

      if (totalCapitalContribution > 0) {
        partner1CapitalEquity = (partner1Contribution / totalCapitalContribution) * remainingForCapital;
        partner2CapitalEquity = (partner2Contribution / totalCapitalContribution) * remainingForCapital;
      }

      const partner1EquityShare = partner1CapitalEquity + partner1SweatEquity;
      const partner2EquityShare = partner2CapitalEquity + partner2SweatEquity;

      const partner1InitialEquity = totalPropertyValue * (partner1EquityShare / 100);
      const partner2InitialEquity = totalPropertyValue * (partner2EquityShare / 100);

      const totalAnnualProfit = totalPropertyValue * (expectedAnnualReturn / 100);
      const partner1AnnualProfit = totalAnnualProfit * (partner1EquityShare / 100);
      const partner2AnnualProfit = totalAnnualProfit * (partner2EquityShare / 100);

      const partner1TotalReturn = partner1AnnualProfit * holdingPeriodYears;
      const partner2TotalReturn = partner2AnnualProfit * holdingPeriodYears;

      return [
        { label: 'Partner 1 Equity Share', value: `${partner1EquityShare.toFixed(2)}%`, isCurrency: false },
        { label: 'Partner 2 Equity Share', value: `${partner2EquityShare.toFixed(2)}%`, isCurrency: false },
        { label: 'Partner 1 Initial Equity', value: partner1InitialEquity.toFixed(2), isCurrency: true },
        { label: 'Partner 2 Initial Equity', value: partner2InitialEquity.toFixed(2), isCurrency: true },
        { label: 'Partner 1 Annual Profit', value: partner1AnnualProfit.toFixed(2), isCurrency: true },
        { label: 'Partner 2 Annual Profit', value: partner2AnnualProfit.toFixed(2), isCurrency: true },
        { label: 'Partner 1 Total Return', value: partner1TotalReturn.toFixed(2), isCurrency: true },
        { label: 'Partner 2 Total Return', value: partner2TotalReturn.toFixed(2), isCurrency: true },
      ];
    },
  },
};
