import { CalculatorContent } from '@/types';

const SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Seller Concession (Repairs) Calculator',
  description: 'Calculate seller repair concessions, compare credit vs. actual repairs, and analyze impact on net proceeds and offer competitiveness.',
  icon: 'Icon',
  slug: 'seller-concession-repairs-calculator',
  category: 'Seller Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: '425000',
      },
      {
        name: 'inspectionRepairRequests',
        label: 'Total Inspection Repair Requests ($)',
        type: 'number',
        defaultValue: '8500',
      },
      {
        name: 'concessionType',
        label: 'Concession Type',
        type: 'select',
        options: [
          { value: 'fullCredit', label: 'Full Credit (Match Requested Amount)' },
          { value: 'partialCredit', label: 'Partial Credit (Negotiate Lower)' },
          { value: 'sellerRepairs', label: 'Seller Completes Repairs' },
          { value: 'hybrid', label: 'Hybrid (Some Repairs + Some Credit)' },
        ],
        defaultValue: 'partialCredit',
      },
      {
        name: 'partialCreditPercentage',
        label: 'Partial Credit % of Requested',
        type: 'number',
        defaultValue: '70',
      },
      {
        name: 'actualRepairCostEstimate',
        label: 'Actual Cost if Seller Does Repairs ($)',
        type: 'number',
        defaultValue: '6000',
      },
      {
        name: 'sellerTimeToComplete',
        label: 'Days Needed for Seller to Complete Repairs',
        type: 'number',
        defaultValue: '14',
      },
      {
        name: 'marketCondition',
        label: 'Current Market Condition',
        type: 'select',
        options: [
          { value: 'hot', label: "Hot Seller's Market" },
          { value: 'seller', label: "Seller's Market" },
          { value: 'balanced', label: 'Balanced Market' },
          { value: 'buyer', label: "Buyer's Market" },
        ],
        defaultValue: 'balanced',
      },
    ],
    calculate: (values) => {
      const purchasePrice = Number(values.purchasePrice);
      const repairRequests = Number(values.inspectionRepairRequests);
      const concessionType = values.concessionType;
      const partialPct = Number(values.partialCreditPercentage) / 100;
      const actualRepairCost = Number(values.actualRepairCostEstimate);
      const daysToComplete = Number(values.sellerTimeToComplete);
      const marketCondition = values.marketCondition;

      // Calculate concession amount based on type
      let concessionAmount = 0;
      let sellerRepairCost = 0;

      if (concessionType === 'fullCredit') {
        concessionAmount = repairRequests;
      } else if (concessionType === 'partialCredit') {
        concessionAmount = repairRequests * partialPct;
      } else if (concessionType === 'sellerRepairs') {
        sellerRepairCost = actualRepairCost;
        concessionAmount = 0;
      } else if (concessionType === 'hybrid') {
        concessionAmount = repairRequests * 0.5;
        sellerRepairCost = actualRepairCost * 0.5;
      }

      // Total cost to seller
      const totalSellerCost = concessionAmount + sellerRepairCost;

      // Calculate savings vs. full credit
      const savingsVsFullCredit = repairRequests - totalSellerCost;

      // Calculate concession as % of purchase price
      const concessionAsPercentage = (totalSellerCost / purchasePrice) * 100;

      // Buyer's out-of-pocket for repairs after concession
      const buyerRemainingRepairCost = Math.max(0, repairRequests - concessionAmount);

      // Risk assessment
      let dealRisk = 'Low';
      if (buyerRemainingRepairCost > 5000 && marketCondition === 'buyer') dealRisk = 'High';
      else if (buyerRemainingRepairCost > 3000 || daysToComplete > 21) dealRisk = 'Medium';

      // Market-based recommendation
      let recommendation = '';
      if (marketCondition === 'hot') {
        recommendation = 'Consider minimal concessions or no repairs - buyers competing';
      } else if (marketCondition === 'seller') {
        recommendation = 'Offer partial credit or strategic repairs only';
      } else if (marketCondition === 'balanced') {
        recommendation = 'Negotiate fair split - partial credit or select repairs';
      } else {
        recommendation = 'Consider full credit or all repairs to secure deal';
      }

      // Time to close impact
      const closingDelay = concessionType === 'sellerRepairs' || concessionType === 'hybrid' ? daysToComplete : 0;

      // Calculate effective price
      const effectiveSalePrice = purchasePrice - totalSellerCost;

      return [
        {
          label: 'Total Repair Requests from Inspection',
          value: `$${repairRequests.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Concession Strategy',
          value: concessionType === 'fullCredit' ? 'Full Credit' : 
                 concessionType === 'partialCredit' ? 'Partial Credit' : 
                 concessionType === 'sellerRepairs' ? 'Seller Repairs' : 'Hybrid Approach',
        },
        {
          label: 'Credit to Buyer',
          value: `$${concessionAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: concessionAmount > 0,
        },
        {
          label: 'Seller Repair Costs',
          value: `$${sellerRepairCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Seller Concession Cost',
          value: `$${totalSellerCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Savings vs. Full Credit',
          value: savingsVsFullCredit >= 0 ? `$${savingsVsFullCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} saved` : `$${Math.abs(savingsVsFullCredit).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} more expensive`,
        },
        {
          label: 'Concession as % of Purchase Price',
          value: `${concessionAsPercentage.toFixed(2)}%`,
        },
        {
          label: 'Buyer Remaining Repair Cost',
          value: `$${buyerRemainingRepairCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Potential Closing Delay',
          value: closingDelay > 0 ? `${closingDelay} days` : 'No delay',
        },
        {
          label: 'Deal Risk Assessment',
          value: dealRisk,
          isHighlighted: dealRisk === 'High',
        },
        {
          label: 'Market-Based Recommendation',
          value: recommendation,
        },
        {
          label: 'Effective Sale Price (After Concessions)',
          value: `$${effectiveSalePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Seller Repair Concessions in Real Estate',
    content: `
      <h2>What are Seller Repair Concessions?</h2>
      <p>Seller repair concessions are credits or price reductions that sellers provide to buyers in lieu of making repairs identified during the home inspection. These concessions give buyers the flexibility to complete repairs themselves after closing, often at a lower cost than what the seller might pay.</p>

      <h3>Types of Repair Concessions</h3>
      <ul>
        <li><strong>Full Credit:</strong> Seller provides full amount requested for all repairs</li>
        <li><strong>Partial Credit:</strong> Seller negotiates to provide portion of requested amount</li>
        <li><strong>Seller Repairs:</strong> Seller completes repairs before closing</li>
        <li><strong>Hybrid Approach:</strong> Combination of credits and seller-completed repairs</li>
        <li><strong>Price Reduction:</strong> Lower purchase price instead of credit</li>
        <li><strong>Allowance:</strong> Set aside specific amount for specific category of repairs</li>
      </ul>

      <h3>Credit vs. Repairs: Pros and Cons</h3>
      <p><strong>Seller Provides Credit (Most Common):</strong></p>
      <ul>
        <li><strong>Pros:</strong> Faster closing, no contractor coordination, buyer chooses contractors, less liability for seller</li>
        <li><strong>Cons:</strong> Credit reduces net proceeds, buyer may not make repairs, doesn't reduce loan amount</li>
      </ul>

      <p><strong>Seller Completes Repairs:</strong></p>
      <ul>
        <li><strong>Pros:</strong> Often cheaper for seller, work guaranteed done, may cost less than credit, repairs done to code</li>
        <li><strong>Cons:</strong> Delays closing, quality control issues, buyer may not approve work, warranty concerns</li>
      </ul>

      <h3>Negotiating Repair Concessions</h3>
      <p><strong>For Sellers:</strong></p>
      <ul>
        <li>Get competitive bids to verify buyer's estimates</li>
        <li>Distinguish between major/safety issues and cosmetic items</li>
        <li>Consider market conditions when deciding how much to concede</li>
        <li>Offer credit for some items, complete critical repairs yourself</li>
        <li>Cap total concession amount (e.g., "up to $5,000")</li>
        <li>Provide receipts/warranties for completed repairs</li>
      </ul>

      <p><strong>For Buyers:</strong></p>
      <ul>
        <li>Prioritize safety and structural issues</li>
        <li>Get contractor estimates to support requests</li>
        <li>Be reasonable - don't request repairs for every minor item</li>
        <li>Understand seller's position and market conditions</li>
        <li>Consider asking for credit instead of repairs for more control</li>
        <li>Be prepared to compromise on cosmetic items</li>
      </ul>

      <h3>Common Repair Categories</h3>
      <table>
        <tr>
          <th>Category</th>
          <th>Examples</th>
          <th>Typical Seller Response</th>
        </tr>
        <tr>
          <td>Safety Issues</td>
          <td>Electrical hazards, gas leaks, structural defects</td>
          <td>Usually agree to repair or credit</td>
        </tr>
        <tr>
          <td>Major Systems</td>
          <td>HVAC, roof, plumbing, foundation</td>
          <td>Often negotiate partial credit</td>
        </tr>
        <tr>
          <td>Moderate Items</td>
          <td>Appliances, windows, minor leaks</td>
          <td>May provide partial credit or as-is</td>
        </tr>
        <tr>
          <td>Cosmetic</td>
          <td>Paint, carpet, landscaping</td>
          <td>Rarely agree to concessions</td>
        </tr>
      </table>

      <h3>Market-Based Concession Strategy</h3>
      <p><strong>Hot Seller's Market:</strong></p>
      <ul>
        <li>Minimal or no concessions expected</li>
        <li>Buyers often waive inspection or accept as-is</li>
        <li>Seller has leverage to refuse most requests</li>
        <li>Focus only on safety/lender-required items</li>
      </ul>

      <p><strong>Balanced Market:</strong></p>
      <ul>
        <li>Negotiate fair split of repair costs</li>
        <li>Address major issues, negotiate minor ones</li>
        <li>Typical concessions 1-3% of purchase price</li>
        <li>Both parties compromise</li>
      </ul>

      <p><strong>Buyer's Market:</strong></p>
      <ul>
        <li>Sellers often agree to most repair requests</li>
        <li>Full or near-full credits more common</li>
        <li>May need to make repairs to secure deal</li>
        <li>Concessions can reach 5-8% of purchase price</li>
      </ul>

      <h3>Calculating Fair Concession Amounts</h3>
      <ul>
        <li><strong>Get Three Bids:</strong> Average of three contractor estimates</li>
        <li><strong>Deduct Age Factor:</strong> Reduce for older components near end of useful life</li>
        <li><strong>Consider Urgency:</strong> Immediate needs vs. deferred maintenance</li>
        <li><strong>Apply Market Multiplier:</strong> Adjust based on market conditions</li>
        <li><strong>Cap at Percentage:</strong> Set maximum as % of purchase price</li>
      </ul>

      <h3>Inspection Negotiation Timeline</h3>
      <ol>
        <li><strong>Day 1:</strong> Buyer receives inspection report</li>
        <li><strong>Days 2-3:</strong> Buyer gets contractor estimates</li>
        <li><strong>Day 4-5:</strong> Buyer submits repair request</li>
        <li><strong>Days 6-7:</strong> Seller gets own estimates (if needed)</li>
        <li><strong>Days 8-10:</strong> Seller responds with counteroffer</li>
        <li><strong>Days 11-12:</strong> Final negotiation and agreement</li>
        <li><strong>Day 13-14:</strong> Inspection contingency removal</li>
      </ol>

      <h3>Tax and Financial Implications</h3>
      <ul>
        <li><strong>Seller:</strong> Concessions reduce taxable proceeds from sale</li>
        <li><strong>Buyer:</strong> Credits applied to closing costs may reduce tax-deductible expenses</li>
        <li><strong>Appraisal:</strong> Large concessions may require appraisal adjustment</li>
        <li><strong>Lender Limits:</strong> Total seller concessions (repairs + closing costs) may have caps</li>
      </ul>

      <h3>Deal-Breaker Repairs</h3>
      <p>Issues that commonly kill deals if not addressed:</p>
      <ul>
        <li>Major foundation problems (>$15,000)</li>
        <li>Complete roof replacement needed immediately</li>
        <li>Mold or environmental hazards</li>
        <li>Failing septic or well systems</li>
        <li>Severe electrical/fire safety issues</li>
        <li>Active pest infestation or major damage</li>
        <li>Structural defects or code violations</li>
      </ul>

      <h3>Best Practices for Sellers</h3>
      <ul>
        <li>Complete pre-inspection before listing to address issues proactively</li>
        <li>Price property accounting for known defects</li>
        <li>Provide home warranty to cover systems</li>
        <li>Have recent service records for major systems</li>
        <li>Be transparent about known issues in disclosures</li>
        <li>Respond to repair requests promptly (within 48 hours)</li>
        <li>Focus negotiations on keeping deal alive, not winning every point</li>
      </ul>

      <h3>Best Practices for Buyers</h3>
      <ul>
        <li>Hire experienced, thorough inspector</li>
        <li>Attend inspection in person</li>
        <li>Get estimates before submitting requests</li>
        <li>Prioritize safety and structural issues</li>
        <li>Be reasonable with cosmetic requests</li>
        <li>Consider home's age and price when requesting repairs</li>
        <li>Remember: no house is perfect</li>
        <li>Focus on items you can't easily fix yourself</li>
      </ul>

      <h3>Alternative Solutions</h3>
      <ul>
        <li><strong>Home Warranty:</strong> Seller provides one-year home warranty policy</li>
        <li><strong>As-Is with Price Reduction:</strong> Lower price, buyer handles all repairs</li>
        <li><strong>Repair Allowance:</strong> Credit specifically designated for certain repairs</li>
        <li><strong>Seller Second Mortgage:</strong> Seller finances repairs through loan</li>
        <li><strong>Escrow Holdback:</strong> Hold funds in escrow until repairs complete</li>
      </ul>

      <h3>Red Flags During Negotiations</h3>
      <p>Warning signs that may indicate deal trouble:</p>
      <ul>
        <li>Buyer requests concessions for every minor issue</li>
        <li>Seller refuses to address obvious safety concerns</li>
        <li>Estimates wildly differ from actual repair costs</li>
        <li>Party won't provide supporting documentation</li>
        <li>Unrealistic expectations given market conditions</li>
        <li>Last-minute surprise repair requests</li>
      </ul>

      <p>Use this calculator to determine fair repair concession amounts and choose the best strategy for your situation based on market conditions and repair types.</p>
    `
  },
};

export { SELLER_CONCESSION_REPAIRS_CALCULATOR_CONTENT };
