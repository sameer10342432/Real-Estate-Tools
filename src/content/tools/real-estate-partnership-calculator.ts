import { CalculatorContent } from '@/types';

export const REAL_ESTATE_PARTNERSHIP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Partnership Calculator',
  description: 'Calculate partnership splits, equity percentages, and profit distributions for real estate investment partnerships',
  slug: 'real-estate-partnership-calculator',
  icon: '🤝',
  category: 'Investment Analysis',
  article: {
    title: 'Complete Guide to Real Estate Partnership Structures and Calculations',
    content: `
    <h2>Understanding Real Estate Partnerships</h2>
    <p>Real estate partnerships allow multiple investors to pool capital and expertise to acquire, develop, or manage properties. These partnerships distribute equity ownership based on capital contributions and allocate profits according to agreed-upon arrangements that may or may not match equity percentages.</p>
    
    <h3>Why Form a Real Estate Partnership?</h3>
    <p>Partnerships offer several advantages for real estate investing:</p>
    <ul>
      <li><strong>Larger Investments:</strong> Pool capital to access bigger deals</li>
      <li><strong>Risk Sharing:</strong> Spread risk across multiple investors</li>
      <li><strong>Expertise Combination:</strong> Combine different skills and knowledge</li>
      <li><strong>Passive Investment:</strong> Some partners can be passive while others manage</li>
      <li><strong>Tax Benefits:</strong> Pass-through taxation in most structures</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the total investment amount, each partner's contribution, agreed profit split percentages, and property income and expenses. The calculator computes:</p>
    <ul>
      <li>Equity ownership percentages based on capital contributions</li>
      <li>Profit distributions based on agreed split percentages</li>
      <li>Capital account balances for each partner</li>
      <li>Return on investment for each partner</li>
    </ul>

    <h3>Common Partnership Structures</h3>
    <h4>Limited Partnership (LP)</h4>
    <p>A Limited Partnership has two classes of partners:</p>
    <ul>
      <li><strong>General Partner (GP):</strong> Manages the partnership and has unlimited liability. Often a small percentage of equity (1-20%) but may receive a larger profit split (20-35%)</li>
      <li><strong>Limited Partners (LPs):</strong> Passive investors with liability limited to their investment. Typically provide most of the capital and receive proportionate returns</li>
    </ul>

    <h4>Limited Liability Company (LLC)</h4>
    <p>LLCs are the most popular structure for real estate partnerships because they combine:</p>
    <ul>
      <li>Limited liability protection for all members</li>
      <li>Flexible profit/loss allocation regardless of ownership percentages</li>
      <li>Pass-through taxation (no double taxation)</li>
      <li>Less formality than corporations</li>
    </ul>

    <h4>Joint Venture (JV)</h4>
    <p>Joint ventures are typically project-specific partnerships that dissolve after the investment is sold. Common in development projects where:</p>
    <ul>
      <li>One party provides capital (the money partner)</li>
      <li>One party provides expertise and management (the deal partner)</li>
      <li>Profits split based on negotiated waterfall structures</li>
    </ul>

    <h4>Tenancy in Common (TIC)</h4>
    <p>A simpler structure where partners own undivided interests in the property directly. Each partner:</p>
    <ul>
      <li>Holds title to their percentage of the property</li>
      <li>Can sell or transfer their interest independently</li>
      <li>Receives income proportional to ownership percentage</li>
    </ul>

    <h3>Equity Split Methods</h3>
    <h4>Capital Contribution Based</h4>
    <p>The simplest approach: equity percentage equals capital contribution percentage. If Partner A contributes $700,000 of a $1,000,000 total investment, they own 70% equity.</p>

    <h4>Sweat Equity Adjustments</h4>
    <p>Some partners contribute expertise, deal sourcing, or management time instead of (or in addition to) cash. This "sweat equity" is valued and credited toward their ownership percentage.</p>

    <h4>Preferred Return Structures</h4>
    <p>Many partnerships give some investors a "preferred return" (often 6-10% annually) before profits are split. This compensates capital investors for their risk and time value of money.</p>

    <h3>Profit Sharing Methods</h3>
    <h4>Pro-Rata Distribution</h4>
    <p>Profits distributed exactly matching equity percentages. Simple and transparent, but doesn't account for different contributions of time and expertise.</p>

    <h4>Disproportionate Splits</h4>
    <p>Profit percentages differ from equity percentages. Common when one partner manages the investment day-to-day. Example: 50/50 equity but 40/60 profit split to compensate the managing partner.</p>

    <h4>Waterfall Structures</h4>
    <p>Multi-tier distribution that changes at different return thresholds:</p>
    <ol>
      <li><strong>Return of Capital:</strong> First, investors receive their initial investment back</li>
      <li><strong>Preferred Return:</strong> Then, investors receive their preferred return (e.g., 8% annually)</li>
      <li><strong>Catch-Up:</strong> The sponsor receives distributions until they catch up to a specified percentage</li>
      <li><strong>Profit Split:</strong> Remaining profits split according to agreed percentages (often 70/30 or 80/20)</li>
    </ol>

    <h3>Capital Account Tracking</h3>
    <p>Each partner has a capital account that tracks:</p>
    <ul>
      <li><strong>Contributions:</strong> Cash and property contributed</li>
      <li><strong>Distributions:</strong> Cash and property withdrawn</li>
      <li><strong>Allocated Income:</strong> Share of partnership profits</li>
      <li><strong>Allocated Losses:</strong> Share of partnership losses</li>
    </ul>
    <p>The capital account balance represents each partner's economic interest in the partnership at any point in time.</p>

    <h3>Key Partnership Agreement Terms</h3>
    <h4>Management and Decision Rights</h4>
    <ul>
      <li>Who manages day-to-day operations</li>
      <li>What decisions require unanimous consent</li>
      <li>Voting rights on major decisions</li>
    </ul>

    <h4>Distribution Policies</h4>
    <ul>
      <li>Frequency of distributions (monthly, quarterly, annually)</li>
      <li>Priority of distributions</li>
      <li>Reserve requirements before distribution</li>
    </ul>

    <h4>Exit Provisions</h4>
    <ul>
      <li>Rights of first refusal</li>
      <li>Buy-sell provisions</li>
      <li>Drag-along and tag-along rights</li>
    </ul>

    <h3>Legal Considerations</h3>
    <p><strong>Securities Laws:</strong> Partnership interests may be considered securities, requiring compliance with SEC regulations or exemptions.</p>
    <p><strong>Operating Agreement:</strong> A comprehensive operating agreement is essential to define rights, responsibilities, and dispute resolution.</p>
    <p><strong>Tax Planning:</strong> Consult with tax professionals about K-1 reporting, depreciation allocation, and capital gains treatment.</p>
    <p><strong>Asset Protection:</strong> Structure the partnership to protect partners' personal assets from partnership liabilities.</p>

    <h3>Tips for Successful Partnerships</h3>
    <ul>
      <li>Choose partners with complementary skills and aligned goals</li>
      <li>Document everything in a detailed operating agreement</li>
      <li>Establish clear communication protocols</li>
      <li>Define decision-making authority clearly</li>
      <li>Plan for disagreements and exit scenarios upfront</li>
      <li>Maintain separate partnership bank accounts</li>
      <li>Conduct regular partnership meetings and reporting</li>
      <li>Work with experienced real estate attorneys and accountants</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalInvestment',
        label: 'Total Investment Required',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'partner1Contribution',
        label: 'Partner 1 Capital Contribution',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'partner2Contribution',
        label: 'Partner 2 Capital Contribution',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'partner1ProfitSplit',
        label: 'Partner 1 Profit Split (%)',
        type: 'number',
        defaultValue: 55,
      },
      {
        name: 'partner2ProfitSplit',
        label: 'Partner 2 Profit Split (%)',
        type: 'number',
        defaultValue: 45,
      },
      {
        name: 'annualIncome',
        label: 'Annual Property Income',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'annualExpenses',
        label: 'Annual Operating Expenses',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'preferredReturn',
        label: 'Preferred Return (%)',
        type: 'number',
        defaultValue: 8,
      },
    ],
    results: [
      { label: 'Partner 1 Equity Percentage', isCurrency: false },
      { label: 'Partner 2 Equity Percentage', isCurrency: false },
      { label: 'Annual Net Operating Income', isCurrency: true },
      { label: 'Partner 1 Preferred Return', isCurrency: true },
      { label: 'Partner 2 Preferred Return', isCurrency: true },
      { label: 'Remaining Profit to Split', isCurrency: true },
      { label: 'Partner 1 Annual Distribution', isCurrency: true },
      { label: 'Partner 2 Annual Distribution', isCurrency: true },
      { label: 'Partner 1 Cash-on-Cash Return', isCurrency: false },
      { label: 'Partner 2 Cash-on-Cash Return', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        totalInvestment,
        partner1Contribution,
        partner2Contribution,
        partner1ProfitSplit,
        partner2ProfitSplit,
        annualIncome,
        annualExpenses,
        preferredReturn,
      } = values;

      const p1Contrib = Number(partner1Contribution) || 0;
      const p2Contrib = Number(partner2Contribution) || 0;
      const totalContributions = p1Contrib + p2Contrib;
      const partner1Equity = totalContributions > 0 ? (p1Contrib / totalContributions) * 100 : 0;
      const partner2Equity = totalContributions > 0 ? (p2Contrib / totalContributions) * 100 : 0;

      const noi = (Number(annualIncome) || 0) - (Number(annualExpenses) || 0);

      const partner1PrefReturn = p1Contrib * ((Number(preferredReturn) || 0) / 100);
      const partner2PrefReturn = p2Contrib * ((Number(preferredReturn) || 0) / 100);
      const totalPreferredReturns = partner1PrefReturn + partner2PrefReturn;

      const remainingProfit = Math.max(0, noi - totalPreferredReturns);

      const partner1ProfitShare = remainingProfit * ((Number(partner1ProfitSplit) || 0) / 100);
      const partner2ProfitShare = remainingProfit * ((Number(partner2ProfitSplit) || 0) / 100);

      let partner1Distribution = 0;
      let partner2Distribution = 0;

      if (noi >= totalPreferredReturns) {
        partner1Distribution = partner1PrefReturn + partner1ProfitShare;
        partner2Distribution = partner2PrefReturn + partner2ProfitShare;
      } else {
        const availableForPref = Math.max(0, noi);
        partner1Distribution = totalContributions > 0 ? availableForPref * (p1Contrib / totalContributions) : 0;
        partner2Distribution = totalContributions > 0 ? availableForPref * (p2Contrib / totalContributions) : 0;
      }

      const partner1CashOnCash = p1Contrib > 0 ? (partner1Distribution / p1Contrib) * 100 : 0;
      const partner2CashOnCash = p2Contrib > 0 ? (partner2Distribution / p2Contrib) * 100 : 0;

      return [
        { label: 'Partner 1 Equity Percentage', value: partner1Equity.toFixed(1) + '%', isCurrency: false },
        { label: 'Partner 2 Equity Percentage', value: partner2Equity.toFixed(1) + '%', isCurrency: false },
        { label: 'Annual Net Operating Income', value: noi.toFixed(2), isCurrency: true },
        { label: 'Partner 1 Preferred Return', value: partner1PrefReturn.toFixed(2), isCurrency: true },
        { label: 'Partner 2 Preferred Return', value: partner2PrefReturn.toFixed(2), isCurrency: true },
        { label: 'Remaining Profit to Split', value: remainingProfit.toFixed(2), isCurrency: true },
        { label: 'Partner 1 Annual Distribution', value: partner1Distribution.toFixed(2), isCurrency: true },
        { label: 'Partner 2 Annual Distribution', value: partner2Distribution.toFixed(2), isCurrency: true },
        { label: 'Partner 1 Cash-on-Cash Return', value: partner1CashOnCash.toFixed(2) + '%', isCurrency: false },
        { label: 'Partner 2 Cash-on-Cash Return', value: partner2CashOnCash.toFixed(2) + '%', isCurrency: false },
      ];
    },
  },
};
