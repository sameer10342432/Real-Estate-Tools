import { CalculatorContent } from '@/types';

const SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Seller Assist (Closing Costs) Calculator',
  description: 'Calculate seller-paid closing cost assistance, analyze impact on seller net proceeds, and understand lender limits and tax implications.',
  icon: 'Icon',
  slug: 'seller-assist-closing-costs-calculator',
  category: 'Seller Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: '350000',
      },
      {
        name: 'sellerAssistPercentage',
        label: 'Seller Assist Percentage',
        type: 'number',
        defaultValue: '3',
      },
      {
        name: 'loanType',
        label: 'Buyer Loan Type',
        type: 'select',
        options: [
          { value: 'conventional', label: 'Conventional (3-9% based on LTV)' },
          { value: 'fha', label: 'FHA (6% max)' },
          { value: 'va', label: 'VA (4% max)' },
          { value: 'usda', label: 'USDA (6% max)' },
          { value: 'cash', label: 'Cash Purchase (No Limit)' },
        ],
        defaultValue: 'conventional',
      },
      {
        name: 'downPaymentPercentage',
        label: 'Buyer Down Payment (%)',
        type: 'number',
        defaultValue: '10',
      },
      {
        name: 'estimatedBuyerClosingCosts',
        label: 'Estimated Buyer Closing Costs ($)',
        type: 'number',
        defaultValue: '10500',
      },
      {
        name: 'sellerAgentCommission',
        label: 'Seller Agent Commission (%)',
        type: 'number',
        defaultValue: '2.5',
      },
      {
        name: 'buyerAgentCommission',
        label: 'Buyer Agent Commission (%)',
        type: 'number',
        defaultValue: '2.5',
      },
    ],
    calculate: (values) => {
      const purchasePrice = Number(values.purchasePrice);
      const assistPct = Number(values.sellerAssistPercentage) / 100;
      const loanType = values.loanType;
      const downPaymentPct = Number(values.downPaymentPercentage) / 100;
      const buyerClosingCosts = Number(values.estimatedBuyerClosingCosts);
      const sellerCommPct = Number(values.sellerAgentCommission) / 100;
      const buyerCommPct = Number(values.buyerAgentCommission) / 100;

      // Calculate LTV
      const ltv = (1 - downPaymentPct) * 100;

      // Determine maximum allowed seller assist based on loan type and LTV
      let maxAllowedPct = 0;
      if (loanType === 'conventional') {
        if (ltv > 90) maxAllowedPct = 3;
        else if (ltv > 75) maxAllowedPct = 6;
        else maxAllowedPct = 9;
      } else if (loanType === 'fha' || loanType === 'usda') {
        maxAllowedPct = 6;
      } else if (loanType === 'va') {
        maxAllowedPct = 4;
      } else if (loanType === 'cash') {
        maxAllowedPct = 100; // No limit on cash purchases
      }

      const maxAllowedDollar = purchasePrice * (maxAllowedPct / 100);

      // Calculate actual seller assist
      const requestedAssist = purchasePrice * assistPct;
      const actualAssist = Math.min(requestedAssist, maxAllowedDollar, buyerClosingCosts);

      // Calculate total seller costs
      const sellerCommission = purchasePrice * sellerCommPct;
      const buyerCommission = purchasePrice * buyerCommPct;
      const totalCommissions = sellerCommission + buyerCommission;
      const totalSellerCosts = actualAssist + totalCommissions;

      // Calculate seller net proceeds
      const sellerNetProceeds = purchasePrice - totalSellerCosts;

      // Calculate effective price reduction
      const effectivePriceReduction = (actualAssist / purchasePrice) * 100;

      // Determine if within limits
      const withinLimits = requestedAssist <= maxAllowedDollar;

      // Calculate buyer benefit
      const buyerOutOfPocket = buyerClosingCosts - actualAssist;
      const buyerSavings = actualAssist;

      // Calculate as percentage of proceeds
      const assistAsPercentOfProceeds = (actualAssist / sellerNetProceeds) * 100;

      return [
        {
          label: 'Requested Seller Assist Amount',
          value: `$${requestedAssist.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: `Maximum Allowed for ${loanType === 'conventional' ? 'Conventional' : loanType.toUpperCase()} (LTV: ${ltv.toFixed(1)}%)`,
          value: `$${maxAllowedDollar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${maxAllowedPct}%)`,
        },
        {
          label: 'Actual Seller Assist (Allowed)',
          value: `$${actualAssist.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Within Lender Limits?',
          value: withinLimits ? 'Yes' : 'No - Exceeds Maximum',
          isHighlighted: !withinLimits,
        },
        {
          label: 'Total Agent Commissions',
          value: `$${totalCommissions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Seller Costs (Assist + Commissions)',
          value: `$${totalSellerCosts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Seller Net Proceeds',
          value: `$${sellerNetProceeds.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Effective Price Reduction',
          value: `${effectivePriceReduction.toFixed(2)}%`,
        },
        {
          label: 'Buyer Out-of-Pocket Closing Costs',
          value: `$${buyerOutOfPocket.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Buyer Savings from Assist',
          value: `$${buyerSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Seller-Paid Closing Cost Assistance',
    content: `
      <h2>What is Seller-Paid Closing Cost Assistance?</h2>
      <p>Seller-paid closing cost assistance (also called seller concessions, seller contributions, or seller assist) is when the seller agrees to pay a portion of the buyer's closing costs. This arrangement helps buyers who have sufficient funds for a down payment but limited cash for closing costs.</p>

      <h3>Maximum Seller Assist Limits by Loan Type</h3>
      <table>
        <tr>
          <th>Loan Type</th>
          <th>Down Payment/LTV</th>
          <th>Maximum Seller Assist</th>
        </tr>
        <tr>
          <td>Conventional</td>
          <td>&gt;10% down (LTV ≤90%)</td>
          <td>3% of purchase price</td>
        </tr>
        <tr>
          <td>Conventional</td>
          <td>10-25% down (75% &lt; LTV ≤90%)</td>
          <td>6% of purchase price</td>
        </tr>
        <tr>
          <td>Conventional</td>
          <td>&gt;25% down (LTV ≤75%)</td>
          <td>9% of purchase price</td>
        </tr>
        <tr>
          <td>FHA</td>
          <td>Any down payment</td>
          <td>6% of purchase price</td>
        </tr>
        <tr>
          <td>VA</td>
          <td>No down payment required</td>
          <td>4% of purchase price</td>
        </tr>
        <tr>
          <td>USDA</td>
          <td>No down payment required</td>
          <td>6% of purchase price</td>
        </tr>
        <tr>
          <td>Cash</td>
          <td>N/A</td>
          <td>No limit (negotiable)</td>
        </tr>
      </table>

      <h3>What Closing Costs Can Be Covered?</h3>
      <p>Seller assistance can typically be applied to:</p>
      <ul>
        <li><strong>Loan Origination Fees:</strong> Lender charges for processing the loan</li>
        <li><strong>Appraisal Fees:</strong> Cost of property appraisal</li>
        <li><strong>Title Insurance:</strong> Owner's and lender's title policies</li>
        <li><strong>Escrow/Closing Fees:</strong> Title company or attorney fees</li>
        <li><strong>Recording Fees:</strong> Government fees for recording the deed</li>
        <li><strong>Transfer Taxes:</strong> State or local transfer taxes (where allowed)</li>
        <li><strong>Prepaid Items:</strong> Property taxes, homeowner's insurance, mortgage insurance</li>
        <li><strong>Discount Points:</strong> Points paid to reduce interest rate</li>
        <li><strong>Home Warranty:</strong> First-year home warranty coverage</li>
      </ul>

      <h3>What Cannot Be Covered</h3>
      <p>Seller assistance generally cannot be used for:</p>
      <ul>
        <li>Buyer's down payment (except in limited down payment assistance programs)</li>
        <li>Cash-out to the buyer at closing</li>
        <li>Excessive or inflated closing costs</li>
        <li>Personal property not included in the sale</li>
      </ul>

      <h3>Benefits for Sellers</h3>
      <ul>
        <li><strong>Attract More Buyers:</strong> Helps cash-strapped but qualified buyers</li>
        <li><strong>Faster Sale:</strong> Removes buyer's closing cost barrier</li>
        <li><strong>Higher Offer Price:</strong> Buyers may offer more if seller pays closing costs</li>
        <li><strong>Competitive Advantage:</strong> Stands out in listings</li>
        <li><strong>Avoid Repairs:</strong> Alternative to costly repairs - credit toward closing instead</li>
        <li><strong>Close Weak Buyers:</strong> Help borderline buyers qualify</li>
      </ul>

      <h3>Benefits for Buyers</h3>
      <ul>
        <li><strong>Reduced Cash Needed:</strong> Lower out-of-pocket at closing</li>
        <li><strong>Preserve Reserves:</strong> Keep cash for emergencies and home improvements</li>
        <li><strong>Finance Closing Costs:</strong> Effectively roll costs into mortgage</li>
        <li><strong>Easier Qualification:</strong> Lower cash-to-close requirements</li>
        <li><strong>Buy Discount Points:</strong> Use assist to lower interest rate</li>
      </ul>

      <h3>Strategic Considerations</h3>
      <p><strong>For Sellers:</strong></p>
      <ul>
        <li>Set maximum assist limit in listing (e.g., "Seller will contribute up to 3% toward buyer closing costs")</li>
        <li>Require buyers to pay any assist amount above lender limits</li>
        <li>Consider raising price slightly to offset assist (e.g., list $5K higher, offer $5K assist)</li>
        <li>Use assist strategically in slow markets or with high inventory</li>
        <li>Avoid excessive assists that might signal desperation</li>
      </ul>

      <p><strong>For Buyers:</strong></p>
      <ul>
        <li>Don't request maximum allowed if you don't need it (sellers may reject)</li>
        <li>Understand assist reduces seller's net proceeds (may affect negotiating room on price)</li>
        <li>Request assist during initial offer, not later in negotiations</li>
        <li>Be prepared to justify assist request (show closing cost estimate)</li>
        <li>Know that assist increases loan amount and monthly payment slightly</li>
      </ul>

      <h3>Pricing Strategy: Assist vs. Price Reduction</h3>
      <p>Example: $300,000 home</p>
      <table>
        <tr>
          <th>Option</th>
          <th>Purchase Price</th>
          <th>Seller Assist</th>
          <th>Seller Net</th>
          <th>Buyer Loan</th>
          <th>Buyer Cash Needed</th>
        </tr>
        <tr>
          <td>No Assist</td>
          <td>$300,000</td>
          <td>$0</td>
          <td>$285,000</td>
          <td>$270,000</td>
          <td>$38,500</td>
        </tr>
        <tr>
          <td>3% Assist</td>
          <td>$300,000</td>
          <td>$9,000</td>
          <td>$276,000</td>
          <td>$270,000</td>
          <td>$29,500</td>
        </tr>
        <tr>
          <td>Price Reduction</td>
          <td>$291,000</td>
          <td>$0</td>
          <td>$276,000</td>
          <td>$261,900</td>
          <td>$37,500</td>
        </tr>
      </table>
      <p><em>Assumptions: 10% down, $8,500 closing costs, $15,000 in commissions</em></p>

      <h3>Appraisal Considerations</h3>
      <p>Important appraisal implications:</p>
      <ul>
        <li>Property must appraise for the full purchase price (even with seller assist)</li>
        <li>If offering assist, consider pricing competitively to ensure appraisal</li>
        <li>Lender bases loan amount on lesser of purchase price or appraised value</li>
        <li>Inflating price to cover assist can backfire if property doesn't appraise</li>
        <li>Recent comparable sales must support the higher price</li>
      </ul>

      <h3>Tax Implications</h3>
      <ul>
        <li><strong>For Sellers:</strong> Seller assist reduces proceeds but generally has no special tax treatment</li>
        <li><strong>For Buyers:</strong> Closing costs paid by seller are not tax-deductible to buyer</li>
        <li><strong>Points:</strong> Discount points paid by seller may still be tax-deductible to buyer (consult tax advisor)</li>
        <li><strong>Basis:</strong> Seller-paid costs may affect buyer's cost basis in property</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li><strong>Exceeding Limits:</strong> Requesting more than lender allows for loan type</li>
        <li><strong>Last-Minute Requests:</strong> Adding assist request late in negotiations</li>
        <li><strong>Not Getting Pre-Approval:</strong> Requesting assist without confirming lender allows it</li>
        <li><strong>Inflating Price:</strong> Raising price too much to cover assist (appraisal risk)</li>
        <li><strong>Poor Documentation:</strong> Not clearly specifying assist in contract</li>
        <li><strong>Using Wrong Percentage:</strong> Not calculating based on final purchase price</li>
      </ul>

      <h3>Negotiating Seller Assist</h3>
      <p><strong>Buyer Strategies:</strong></p>
      <ul>
        <li>Include assist request in initial offer, not as afterthought</li>
        <li>Provide closing cost estimate to justify request</li>
        <li>Consider offering higher price in exchange for assist</li>
        <li>Be flexible on other terms (closing date, repairs)</li>
        <li>Show strong pre-approval letter from reputable lender</li>
      </ul>

      <p><strong>Seller Strategies:</strong></p>
      <ul>
        <li>Counter with lower assist amount if request seems excessive</li>
        <li>Require higher purchase price if providing significant assist</li>
        <li>Set assist cap in listing to manage expectations</li>
        <li>Compare net proceeds with and without assist before accepting</li>
        <li>Consider assist as alternative to price reduction</li>
      </ul>

      <h3>Market Conditions and Seller Assist</h3>
      <ul>
        <li><strong>Hot Seller's Market:</strong> Sellers rarely need to offer assist; buyers often waive requests</li>
        <li><strong>Balanced Market:</strong> 2-3% assist is common and expected</li>
        <li><strong>Buyer's Market:</strong> Sellers may advertise assist to attract offers</li>
        <li><strong>Slow Market/High Inventory:</strong> Generous assist can differentiate listing</li>
      </ul>

      <p>Use this calculator to determine the financial impact of seller-paid closing cost assistance and ensure compliance with lender limits.</p>
    `
  },
};

export { SELLER_ASSIST_CLOSING_COSTS_CALCULATOR_CONTENT };
