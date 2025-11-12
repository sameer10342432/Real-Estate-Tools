import { CalculatorContent } from "@/types";

export const sellerConcessionsCalculatorVa: CalculatorContent = {
  title: "Seller Concessions Calculator (VA)",
  description:
    "Calculate maximum seller concessions allowed for VA loans (up to 4%) and how they reduce your out-of-pocket costs.",
  icon: "Icon",
  category: "Calculators",
  slug: "seller-concessions-calculator-va",
  metaTitle: "VA Loan Seller Concessions Calculator - 4% Maximum Contribution",
  metaDescription: "Calculate VA loan seller concessions (up to 4% of sales price). Find out how seller contributions can cover closing costs, VA funding fee, and reduce cash needed for VA home loans with $0 down.",
  article: {
    title: "Complete Guide to VA Loan Seller Concessions",
    content: `
      <h2>What are VA Loan Seller Concessions?</h2>
      <p>Seller concessions are closing costs that the home seller pays on behalf of the buyer. For VA loans, sellers can contribute up to 4% of the home's sales price to help veterans cover their closing costs. This benefit is especially valuable since VA loans already allow $0 down payment.</p>

      <h2>VA Seller Concession Limits</h2>
      <p><strong>Maximum Allowed:</strong> 4% of the sales price</p>
      <p>This limit is specifically for VA loans and differs from FHA (6%) and conventional loans (typically 3-6%).</p>

      <h2>What Can Seller Concessions Cover on VA Loans?</h2>
      <h3>Allowed Closing Costs</h3>
      <ul>
        <li><strong>VA funding fee:</strong> 1.25% to 3.3% (one of the biggest benefits)</li>
        <li><strong>Origination fees:</strong> Lender processing fees (capped at 1%)</li>
        <li><strong>Discount points:</strong> Points to buy down the interest rate</li>
        <li><strong>Appraisal fee:</strong> VA-required home appraisal</li>
        <li><strong>Credit report:</strong> Cost to pull buyer's credit</li>
        <li><strong>Title insurance:</strong> Lender's title policy</li>
        <li><strong>Recording fees:</strong> Government fees to record the sale</li>
        <li><strong>Attorney fees:</strong> Legal fees if required</li>
        <li><strong>Pest inspection:</strong> Termite and pest reports (often required by VA)</li>
        <li><strong>Survey fees:</strong> Property boundary survey</li>
        <li><strong>Home warranty:</strong> First-year home warranty premium</li>
        <li><strong>Prepaid items:</strong> Property taxes, homeowner's insurance, interest</li>
      </ul>

      <h3>NOT Allowed</h3>
      <ul>
        <li>Down payment (VA loans are $0 down, but seller can't contribute to any optional down payment)</li>
        <li>Paying off buyer's debts</li>
        <li>Cash back to buyer</li>
        <li>Buyer's personal expenses</li>
        <li>Excessive fees above reasonable and customary amounts</li>
      </ul>

      <h2>VA Loan Closing Cost Breakdown</h2>
      <p>VA loan closing costs typically range from 3% to 5% of the purchase price:</p>

      <h3>VA-Specific Costs</h3>
      <ul>
        <li><strong>VA funding fee:</strong> 1.25% to 3.3% (varies by down payment and usage)
          <ul>
            <li>First-time use, $0 down: 2.15%</li>
            <li>First-time use, 5% down: 1.50%</li>
            <li>First-time use, 10%+ down: 1.25%</li>
            <li>Subsequent use, $0 down: 3.30%</li>
            <li>Disabled veterans: Exempt from funding fee</li>
          </ul>
        </li>
        <li><strong>VA appraisal:</strong> $400-$600</li>
      </ul>

      <h3>Lender Fees (0.5-1.5%)</h3>
      <ul>
        <li>Origination fee: Up to 1% (VA cap)</li>
        <li>Underwriting: $400-$800</li>
        <li>Processing: $300-$700</li>
        <li>Credit report: $25-$75</li>
      </ul>

      <h3>Third-Party Fees (1-2%)</h3>
      <ul>
        <li>Title insurance: $500-$2,000</li>
        <li>Title search: $200-$400</li>
        <li>Recording fees: $100-$300</li>
        <li>Pest inspection: $75-$150 (often required)</li>
        <li>Survey: $300-$500</li>
      </ul>

      <h3>Prepaid Items (1-2%)</h3>
      <ul>
        <li>Homeowner's insurance: First year premium</li>
        <li>Property taxes: 2-6 months</li>
        <li>Prepaid interest: Varies by closing date</li>
        <li>HOA dues: If applicable</li>
      </ul>

      <h2>VA Loan Fee Restrictions</h2>
      <p>The VA strictly prohibits veterans from paying certain fees:</p>

      <h3>Prohibited Fees for Veterans</h3>
      <ul>
        <li>Lender's attorney fees</li>
        <li>Document preparation by lender's attorney</li>
        <li>Escrow/settlement/closing fee (except actual cost)</li>
        <li>Pest inspection report (in some states)</li>
        <li>Post-closing courier fees</li>
        <li>Property survey (in some cases)</li>
        <li>Title examination and abstract fees</li>
      </ul>

      <p>These fees must be paid by the seller, lender, or other parties—NOT the veteran.</p>

      <h2>Real-World Examples</h2>
      <h3>Example 1: $300,000 Purchase (First-Time VA Use)</h3>
      <ul>
        <li>Down payment: $0 (VA allows $0 down)</li>
        <li>VA funding fee (2.15%): $6,450</li>
        <li>Other closing costs: $6,000</li>
        <li>Total closing costs: $12,450</li>
      </ul>
      <p><strong>With 4% seller concessions ($12,000):</strong></p>
      <ul>
        <li>Seller pays: $12,000 of closing costs</li>
        <li>Buyer pays: $450</li>
        <li>Savings: $12,000</li>
      </ul>

      <h3>Example 2: $500,000 Purchase (Second VA Use)</h3>
      <ul>
        <li>Down payment: $0</li>
        <li>VA funding fee (3.3%): $16,500</li>
        <li>Other closing costs: $8,500</li>
        <li>Total closing costs: $25,000</li>
      </ul>
      <p><strong>With 4% seller concessions ($20,000):</strong></p>
      <ul>
        <li>Seller pays: $20,000</li>
        <li>Buyer pays: $5,000</li>
        <li>Savings: $20,000</li>
      </ul>

      <h3>Example 3: Disabled Veteran (Funding Fee Exempt)</h3>
      <ul>
        <li>Down payment: $0</li>
        <li>VA funding fee: $0 (exempt)</li>
        <li>Closing costs: $7,000</li>
        <li>Total costs: $7,000</li>
      </ul>
      <p><strong>With 4% seller concessions ($12,000 max):</strong></p>
      <ul>
        <li>Seller pays: $7,000 (all closing costs)</li>
        <li>Buyer pays: $0</li>
        <li>Savings: $7,000 (can buy with literally $0 out of pocket!)</li>
      </ul>

      <h2>How to Negotiate VA Seller Concessions</h2>
      <h3>1. Emphasize VA Loan Benefits to Sellers</h3>
      <ul>
        <li>VA buyers are pre-qualified (serious buyers)</li>
        <li>VA appraisals protect both parties</li>
        <li>Fast closing timelines</li>
        <li>Lower default rates than other loan types</li>
      </ul>

      <h3>2. Adjust Offer Price Strategy</h3>
      <p>Increase your offer price to offset concessions:</p>
      <ul>
        <li>Option A: $300,000 with no concessions</li>
        <li>Option B: $310,000 with $10,000 concessions</li>
      </ul>
      <p>Seller nets the same, buyer gets help with closing costs.</p>

      <h3>3. Use Market Conditions</h3>
      <ul>
        <li><strong>Buyer's market:</strong> Easier to negotiate full 4%</li>
        <li><strong>Seller's market:</strong> May get 2% or need to increase offer</li>
        <li><strong>Motivated sellers:</strong> Better chance of getting 4%</li>
      </ul>

      <h3>4. Request During Inspection Period</h3>
      <p>Use inspection findings to negotiate concessions: "Instead of repairs, we'd accept $8,000 in seller concessions."</p>

      <h2>VA vs. Other Loan Types - Concession Limits</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr style="background-color:#f0f0f0;">
          <th style="padding:8px; border:1px solid #ddd;">Loan Type</th>
          <th style="padding:8px; border:1px solid #ddd;">Max Seller Concessions</th>
          <th style="padding:8px; border:1px solid #ddd;">Notes</th>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">VA Loan</td>
          <td style="padding:8px; border:1px solid #ddd;">4%</td>
          <td style="padding:8px; border:1px solid #ddd;">Can cover VA funding fee</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">FHA Loan</td>
          <td style="padding:8px; border:1px solid #ddd;">6%</td>
          <td style="padding:8px; border:1px solid #ddd;">Most generous limit</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Conventional (3-9.99% down)</td>
          <td style="padding:8px; border:1px solid #ddd;">3%</td>
          <td style="padding:8px; border:1px solid #ddd;">More restrictive</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Conventional (10-24.99% down)</td>
          <td style="padding:8px; border:1px solid #ddd;">6%</td>
          <td style="padding:8px; border:1px solid #ddd;">Higher down = more concessions</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Conventional (25%+ down)</td>
          <td style="padding:8px; border:1px solid #ddd;">9%</td>
          <td style="padding:8px; border:1px solid #ddd;">Maximum allowed</td>
        </tr>
      </table>

      <h2>Benefits of VA Seller Concessions</h2>
      <ul>
        <li><strong>$0 down + 4% concessions = truly $0 to close:</strong> For disabled veterans or low closing costs</li>
        <li><strong>Cover VA funding fee:</strong> One of the biggest VA loan costs (1.25-3.3%)</li>
        <li><strong>Preserve savings:</strong> Keep emergency fund intact</li>
        <li><strong>Buy down rate:</strong> Use concessions for discount points</li>
        <li><strong>Minimize out-of-pocket:</strong> Make homeownership more accessible</li>
        <li><strong>No PMI ever:</strong> Combined with no PMI, VA loans are very affordable</li>
      </ul>

      <h2>Common Seller Concerns (and How to Address Them)</h2>
      <h3>Concern: "VA loans take longer to close"</h3>
      <p><strong>Reality:</strong> VA loans typically close in 30-40 days, similar to other loan types. Work with VA-experienced lenders for faster closings.</p>

      <h3>Concern: "VA appraisals are too strict"</h3>
      <p><strong>Reality:</strong> VA appraisals protect both parties. They ensure the home is safe and worth the price. Most homes pass easily.</p>

      <h3>Concern: "4% concessions cost too much"</h3>
      <p><strong>Solution:</strong> Structure offer with higher price to offset. Show net proceeds will be the same.</p>

      <h2>Combining Concessions with VA Benefits</h2>
      <p>Stack these benefits for maximum savings:</p>
      <ul>
        <li><strong>$0 down payment:</strong> VA's core benefit</li>
        <li><strong>4% seller concessions:</strong> Cover most/all closing costs</li>
        <li><strong>No PMI:</strong> VA loans never require mortgage insurance</li>
        <li><strong>Funding fee exemption:</strong> If disabled, save another 2-3%</li>
        <li><strong>Competitive rates:</strong> VA loans typically beat conventional rates</li>
      </ul>

      <p><strong>Result:</strong> Some veterans can literally buy a home with $0 out of pocket!</p>

      <h2>Tips for Maximizing VA Seller Concessions</h2>
      <ul>
        <li><strong>Get accurate closing cost estimate:</strong> Ask lender for detailed breakdown</li>
        <li><strong>Request exactly what you need:</strong> Don't leave money on the table</li>
        <li><strong>Work with VA-savvy agents:</strong> They know how to structure offers</li>
        <li><strong>Consider timing:</strong> Close at month's end to minimize prepaid interest</li>
        <li><strong>Shop for insurance:</strong> Lower insurance costs mean less needed from seller</li>
        <li><strong>Understand funding fee tiers:</strong> Know your exact funding fee rate</li>
        <li><strong>Check disability rating:</strong> 10%+ VA disability exempts you from funding fee</li>
      </ul>

      <h2>What If 4% Isn't Enough?</h2>
      <p>If closing costs exceed 4% of purchase price, consider:</p>
      <ul>
        <li><strong>Lender credits:</strong> Accept slightly higher rate for lender-paid costs</li>
        <li><strong>Finance funding fee:</strong> Roll into loan instead of paying at closing</li>
        <li><strong>Increase offer price:</strong> Higher price = higher 4% dollar amount</li>
        <li><strong>Shop for lower fees:</strong> Compare multiple VA lenders</li>
        <li><strong>Close at month end:</strong> Minimize prepaid interest</li>
      </ul>

      <h2>Important Considerations</h2>
      <ul>
        <li><strong>Must be reasonable:</strong> Concessions must be for actual, customary fees</li>
        <li><strong>Lender review required:</strong> All concessions must be disclosed and approved</li>
        <li><strong>Can't exceed actual costs:</strong> Can't get cash back if concessions exceed costs</li>
        <li><strong>Purchase contract required:</strong> Must be in writing in the purchase agreement</li>
        <li><strong>Higher price impacts appraisal:</strong> Inflated price could cause appraisal issues</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter your home purchase price, whether you're a disabled veteran (funding fee exempt), and your estimated closing costs. The calculator shows the maximum 4% seller concession amount, breaks down how it covers your costs, calculates your actual out-of-pocket amount, and provides recommendations for using concessions strategically.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        defaultValue: "350000",
      },
      {
        name: "isDisabled",
        label: "Are you a disabled veteran (10%+ VA rating)?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - Exempt from funding fee" },
          { value: "no", label: "No - Will pay funding fee" },
        ],
        defaultValue: "no",
      },
      {
        name: "vaUsage",
        label: "VA Loan Usage",
        type: "select",
        options: [
          { value: "first", label: "First-time use" },
          { value: "subsequent", label: "Subsequent use" },
        ],
        defaultValue: "first",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (% - optional, VA allows $0)",
        type: "number",
        defaultValue: "0",
      },
      {
        name: "otherClosingCosts",
        label: "Other Closing Costs Estimate ($)",
        type: "number",
        defaultValue: "7000",
      },
      {
        name: "concessionPercent",
        label: "Requested Seller Concession (%)",
        type: "number",
        defaultValue: "4",
      },
    ],
    results: [
      {
        label: "Maximum Allowed Seller Concessions (4%)",
        isCurrency: true,
      },
      {
        label: "VA Funding Fee",
        isCurrency: true,
      },
      {
        label: "Other Closing Costs",
        isCurrency: true,
      },
      {
        label: "Total Closing Costs",
        isCurrency: true,
      },
      {
        label: "Actual Seller Contribution",
        isCurrency: true,
      },
      {
        label: "Your Out-of-Pocket Cost",
        isCurrency: true,
      },
      {
        label: "Savings from Concessions",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const purchasePrice = parseFloat(values.purchasePrice);
      const isDisabled = values.isDisabled;
      const vaUsage = values.vaUsage;
      const downPaymentPercent = parseFloat(values.downPaymentPercent);
      const otherCosts = parseFloat(values.otherClosingCosts);
      const concessionPercent = parseFloat(values.concessionPercent);

      // Calculate VA funding fee
      let fundingFeeRate = 0;
      if (isDisabled === "no") {
        if (vaUsage === "first") {
          if (downPaymentPercent === 0) fundingFeeRate = 0.0215;
          else if (downPaymentPercent >= 5 && downPaymentPercent < 10) fundingFeeRate = 0.015;
          else if (downPaymentPercent >= 10) fundingFeeRate = 0.0125;
        } else {
          if (downPaymentPercent === 0) fundingFeeRate = 0.033;
          else if (downPaymentPercent >= 5 && downPaymentPercent < 10) fundingFeeRate = 0.015;
          else if (downPaymentPercent >= 10) fundingFeeRate = 0.0125;
        }
      }

      const downPayment = purchasePrice * (downPaymentPercent / 100);
      const loanAmount = purchasePrice - downPayment;
      const fundingFee = loanAmount * fundingFeeRate;
      const totalClosingCosts = fundingFee + otherCosts;

      // VA allows 4% max
      const maxAllowedConcessions = purchasePrice * 0.04;
      const requestedConcessions = purchasePrice * (concessionPercent / 100);

      // Actual concessions (can't exceed max or actual costs)
      const actualConcessions = Math.min(
        requestedConcessions,
        maxAllowedConcessions,
        totalClosingCosts
      );

      const outOfPocket = downPayment + totalClosingCosts - actualConcessions;
      const savings = actualConcessions;

      // Generate recommendation
      let recommendation = "";
      
      if (concessionPercent > 4) {
        recommendation = `⚠️ VA limits concessions to 4%. Your request of ${concessionPercent}% exceeds the limit. Maximum allowed is $${maxAllowedConcessions.toFixed(0)}.`;
      } else if (actualConcessions >= totalClosingCosts) {
        if (isDisabled === "yes" && downPaymentPercent === 0) {
          recommendation = `🎖️ Excellent! As a disabled veteran with $0 down, you can buy this home with ZERO out of pocket! Seller concessions ($${actualConcessions.toFixed(0)}) cover all $${totalClosingCosts.toFixed(0)} in closing costs.`;
        } else if (downPaymentPercent === 0) {
          recommendation = `Perfect! Seller concessions ($${actualConcessions.toFixed(0)}) cover ALL closing costs. With VA's $0 down benefit, you need $0 out of pocket to buy this home!`;
        } else {
          recommendation = `Great! Seller concessions ($${actualConcessions.toFixed(0)}) cover all closing costs. You only need $${downPayment.toFixed(0)} for your down payment.`;
        }
      } else if (actualConcessions > 0) {
        recommendation = `Seller concessions of $${actualConcessions.toFixed(0)} help significantly. You'll need $${outOfPocket.toFixed(0)} total cash to close${downPaymentPercent > 0 ? ` (including $${downPayment.toFixed(0)} down payment)` : ''}. Savings: $${savings.toFixed(0)}.`;
      } else {
        recommendation = `No concessions requested. Total cash needed: $${outOfPocket.toFixed(0)}. Consider negotiating up to 4% ($${maxAllowedConcessions.toFixed(0)}) to minimize out-of-pocket costs.`;
      }

      if (isDisabled === "yes") {
        recommendation += ` Note: You're exempt from the VA funding fee, saving you $${(loanAmount * 0.0215).toFixed(0)} compared to non-disabled veterans!`;
      }

      if (totalClosingCosts > maxAllowedConcessions) {
        const shortfall = totalClosingCosts - maxAllowedConcessions;
        recommendation += ` Your closing costs ($${totalClosingCosts.toFixed(0)}) exceed 4% max concessions. Consider: (1) Finance funding fee into loan, (2) Get lender credits by accepting higher rate, or (3) Increase offer price to raise the 4% dollar amount.`;
      }

      return [
        {
          label: "Maximum Allowed Seller Concessions (4%)",
          value: maxAllowedConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "VA Funding Fee",
          value: fundingFee.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Other Closing Costs",
          value: otherCosts.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Closing Costs",
          value: totalClosingCosts.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Actual Seller Contribution",
          value: actualConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Your Out-of-Pocket Cost",
          value: outOfPocket.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Savings from Concessions",
          value: savings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Recommendation",
          value: recommendation,
          isCurrency: false,
        },
      ];
    },
  },
};
