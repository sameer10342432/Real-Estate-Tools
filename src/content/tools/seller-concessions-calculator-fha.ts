import { CalculatorContent } from "@/types";

export const sellerConcessionsCalculatorFha: CalculatorContent = {
  title: "Seller Concessions Calculator (FHA)",
  description:
    "Calculate maximum seller concessions allowed for FHA loans and how they can reduce your out-of-pocket costs.",
  icon: "Icon",
  category: "Calculators",
  slug: "seller-concessions-calculator-fha",
  metaTitle: "FHA Seller Concessions Calculator - Maximum 6% Contribution Limits",
  metaDescription: "Calculate FHA seller concessions limits (up to 6% of sales price). Find out how seller contributions can cover closing costs, prepaid items, and reduce your cash needed to close on FHA loans.",
  article: {
    title: "Complete Guide to FHA Seller Concessions",
    content: `
      <h2>What are Seller Concessions?</h2>
      <p>Seller concessions (also called seller contributions or seller assists) are closing costs that the home seller agrees to pay on behalf of the buyer. With FHA loans, sellers can contribute up to 6% of the sale price, making homeownership more accessible for buyers with limited cash.</p>

      <h2>FHA Seller Concession Limits</h2>
      <p><strong>Maximum Allowed:</strong> 6% of the sales price or appraised value (whichever is less)</p>
      <p>This is significantly more generous than conventional loans, which typically limit seller concessions to 3% (or 6% with 10%+ down payment).</p>

      <h2>What Can Seller Concessions Cover?</h2>
      <h3>Allowed Expenses</h3>
      <ul>
        <li><strong>Origination fees:</strong> Lender processing and underwriting fees</li>
        <li><strong>Discount points:</strong> Points paid to buy down the interest rate</li>
        <li><strong>Appraisal fee:</strong> Cost of home appraisal</li>
        <li><strong>Credit report fee:</strong> Cost to pull buyer's credit</li>
        <li><strong>Title insurance:</strong> Lender's and owner's title policies</li>
        <li><strong>Attorney fees:</strong> Legal fees for closing</li>
        <li><strong>Recording fees:</strong> Government fees to record the deed</li>
        <li><strong>FHA upfront MIP:</strong> The 1.75% upfront mortgage insurance premium</li>
        <li><strong>Prepaid items:</strong> Property taxes, homeowner's insurance, HOA dues</li>
        <li><strong>Escrow/impound account:</strong> Initial escrow account funding</li>
        <li><strong>Pest inspection:</strong> Termite and pest reports</li>
        <li><strong>Home warranty:</strong> First year home warranty premium</li>
      </ul>

      <h3>NOT Allowed</h3>
      <ul>
        <li>Buyer's FHA down payment (3.5%)</li>
        <li>Paying off buyer's debt</li>
        <li>Cash to the buyer at closing</li>
        <li>Buyer's personal expenses</li>
      </ul>

      <h2>FHA Closing Cost Breakdown</h2>
      <p>Typical FHA closing costs range from 2% to 6% of the purchase price:</p>

      <h3>Lender Fees (1-2%)</h3>
      <ul>
        <li>Origination fee: 0.5-1% of loan</li>
        <li>Underwriting fee: $400-$800</li>
        <li>Processing fee: $300-$700</li>
        <li>Credit report: $25-$75</li>
      </ul>

      <h3>Third-Party Fees (1-2%)</h3>
      <ul>
        <li>Appraisal: $400-$600</li>
        <li>Title insurance: $500-$2,000</li>
        <li>Title search: $200-$400</li>
        <li>Survey: $300-$500</li>
        <li>Attorney fees: $500-$1,500</li>
        <li>Recording fees: $100-$300</li>
      </ul>

      <h3>FHA-Specific Costs (1.75%+)</h3>
      <ul>
        <li>Upfront MIP: 1.75% of base loan amount (can be financed)</li>
        <li>FHA inspection/fees: Varies</li>
      </ul>

      <h3>Prepaid Items (1-2%)</h3>
      <ul>
        <li>Homeowner's insurance: 12 months prepaid</li>
        <li>Property taxes: 2-6 months</li>
        <li>Interest: Varies by closing date</li>
        <li>HOA dues: If applicable</li>
      </ul>

      <h2>Real-World Examples</h2>
      <h3>Example 1: $250,000 Purchase</h3>
      <ul>
        <li>Down payment (3.5%): $8,750</li>
        <li>Closing costs: $7,500 (3%)</li>
        <li>Total cash needed: $16,250</li>
      </ul>
      <p><strong>With 6% seller concessions ($15,000):</strong></p>
      <ul>
        <li>Seller pays: $7,500 of closing costs</li>
        <li>Buyer needs: $8,750 (just down payment)</li>
        <li>Savings: $7,500</li>
      </ul>

      <h3>Example 2: $400,000 Purchase</h3>
      <ul>
        <li>Down payment (3.5%): $14,000</li>
        <li>Closing costs: $20,000 (5%)</li>
        <li>Total cash needed: $34,000</li>
      </ul>
      <p><strong>With 6% seller concessions ($24,000):</strong></p>
      <ul>
        <li>Seller pays: $20,000 of closing costs</li>
        <li>Buyer needs: $14,000 (just down payment)</li>
        <li>Savings: $20,000</li>
      </ul>

      <h2>How to Negotiate Seller Concessions</h2>
      <h3>1. Make it Part of Your Offer</h3>
      <p>Include seller concessions in your initial offer letter. Clearly state the amount or percentage you're requesting.</p>

      <h3>2. Adjust Your Offer Price</h3>
      <p>Sellers often prefer higher prices with concessions. Example:</p>
      <ul>
        <li>Option A: $250,000 with no concessions</li>
        <li>Option B: $260,000 with $10,000 concessions</li>
      </ul>
      <p>Option B nets the seller the same but helps the buyer with cash to close.</p>

      <h3>3. Market Conditions Matter</h3>
      <ul>
        <li><strong>Buyer's market:</strong> Easier to negotiate concessions</li>
        <li><strong>Seller's market:</strong> May need to offer full price or above</li>
        <li><strong>Homes sitting long:</strong> Better negotiating position</li>
      </ul>

      <h3>4. Use Inspection Repairs as Leverage</h3>
      <p>After inspection, request seller concessions instead of repairs. Example: "Rather than fixing the roof, we'd accept $8,000 in seller concessions."</p>

      <h2>Important Limitations</h2>
      <h3>Appraisal Value Matters</h3>
      <p>Concessions are limited to 6% of the LESSER of sales price or appraised value.</p>
      <p>Example: $300,000 sales price but appraises for $290,000</p>
      <ul>
        <li>Max concessions: $290,000 × 6% = $17,400</li>
        <li>Not $300,000 × 6% = $18,000</li>
      </ul>

      <h3>Can't Exceed Actual Costs</h3>
      <p>If your closing costs are only $8,000, seller can't contribute $15,000 (6% of $250k). Excess concessions aren't allowed as cash back.</p>

      <h3>Lender Review Required</h3>
      <p>All concessions must be disclosed and approved by the FHA lender to ensure they comply with FHA guidelines.</p>

      <h2>Benefits of Seller Concessions</h2>
      <ul>
        <li><strong>Lower cash to close:</strong> Reduce out-of-pocket costs significantly</li>
        <li><strong>Keep savings intact:</strong> Preserve emergency funds</li>
        <li><strong>Buy down rate:</strong> Use concessions for discount points</li>
        <li><strong>Cover upfront MIP:</strong> Seller can pay the 1.75% upfront insurance</li>
        <li><strong>First-time buyer friendly:</strong> Perfect for buyers with limited savings</li>
      </ul>

      <h2>Potential Drawbacks</h2>
      <ul>
        <li><strong>Higher purchase price:</strong> May need to increase offer to get concessions</li>
        <li><strong>Appraisal risk:</strong> Higher price must appraise or deal falls through</li>
        <li><strong>Higher loan amount:</strong> Borrowing more means higher interest over time</li>
        <li><strong>Less competitive:</strong> In hot markets, sellers prefer no-concession offers</li>
      </ul>

      <h2>Tips for Using Seller Concessions</h2>
      <ul>
        <li><strong>Get pre-approved first:</strong> Know your budget before negotiating</li>
        <li><strong>Get closing cost estimate:</strong> Ask lender for accurate estimates</li>
        <li><strong>Request right amount:</strong> Don't ask for more than you need</li>
        <li><strong>Use experienced agent:</strong> Work with agents familiar with FHA concessions</li>
        <li><strong>Document everything:</strong> Ensure proper disclosure on purchase contract</li>
        <li><strong>Factor into total cost:</strong> Remember higher price = higher monthly payment</li>
      </ul>

      <h2>Combining Concessions with Other Benefits</h2>
      <p>You can combine seller concessions with:</p>
      <ul>
        <li><strong>Gift funds:</strong> Family can gift down payment money</li>
        <li><strong>Down payment assistance:</strong> DPA programs for closing costs</li>
        <li><strong>Lender credits:</strong> Higher rate in exchange for lender-paid costs</li>
        <li><strong>FHA 3.5% minimum down:</strong> Keep this separate from concessions</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter the home purchase price and the percentage of seller concessions you're negotiating (up to 6%). Add your estimated closing costs. The calculator shows the maximum allowed concessions, how much the seller will cover, your remaining out-of-pocket costs, and whether you're maximizing the benefit.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        defaultValue: "300000",
      },
      {
        name: "appraisedValue",
        label: "Appraised Value ($ - if known, else enter purchase price)",
        type: "number",
        defaultValue: "300000",
      },
      {
        name: "concessionPercent",
        label: "Seller Concession Percentage (%)",
        type: "number",
        defaultValue: "6",
      },
      {
        name: "estimatedClosingCosts",
        label: "Estimated Closing Costs ($)",
        type: "number",
        defaultValue: "12000",
      },
      {
        name: "downPayment",
        label: "Your Down Payment ($ - typically 3.5%)",
        type: "number",
        defaultValue: "10500",
      },
    ],
    results: [
      {
        label: "Maximum Allowed Seller Concessions (6%)",
        isCurrency: true,
      },
      {
        label: "Requested Seller Concessions",
        isCurrency: true,
      },
      {
        label: "Actual Seller Contribution",
        isCurrency: true,
      },
      {
        label: "Total Cash Needed Without Concessions",
        isCurrency: true,
      },
      {
        label: "Your Out-of-Pocket Cost With Concessions",
        isCurrency: true,
      },
      {
        label: "Savings from Seller Concessions",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const purchasePrice = parseFloat(values.purchasePrice);
      const appraisedValue = parseFloat(values.appraisedValue);
      const concessionPercent = parseFloat(values.concessionPercent);
      const closingCosts = parseFloat(values.estimatedClosingCosts);
      const downPayment = parseFloat(values.downPayment);

      // FHA allows 6% of lesser of purchase price or appraised value
      const baseForConcessions = Math.min(purchasePrice, appraisedValue);
      const maxAllowedConcessions = baseForConcessions * 0.06;

      // Requested concessions
      const requestedConcessions = purchasePrice * (concessionPercent / 100);

      // Actual concessions (can't exceed max allowed or actual closing costs)
      const actualConcessions = Math.min(
        requestedConcessions,
        maxAllowedConcessions,
        closingCosts
      );

      // Calculate costs
      const totalCashWithoutConcessions = downPayment + closingCosts;
      const outOfPocketWithConcessions = downPayment + (closingCosts - actualConcessions);
      const savings = actualConcessions;

      // Generate recommendation
      let recommendation = "";
      if (concessionPercent > 6) {
        recommendation = `⚠️ FHA limits concessions to 6%. Your request of ${concessionPercent}% exceeds the limit. Maximum allowed is $${maxAllowedConcessions.toFixed(0)}.`;
      } else if (requestedConcessions > closingCosts) {
        recommendation = `You're requesting $${requestedConcessions.toFixed(0)} but closing costs are only $${closingCosts.toFixed(0)}. Seller can only pay actual costs, so you'll receive $${actualConcessions.toFixed(0)}. Consider using extra concessions for discount points to lower your rate.`;
      } else if (actualConcessions >= closingCosts) {
        recommendation = `Excellent! Seller concessions cover ALL your closing costs ($${closingCosts.toFixed(0)}). You only need $${downPayment.toFixed(0)} for down payment. This reduces your cash to close by $${savings.toFixed(0)}.`;
      } else if (actualConcessions > 0) {
        recommendation = `Seller concessions of $${actualConcessions.toFixed(0)} reduce your closing costs significantly. You'll need $${outOfPocketWithConcessions.toFixed(0)} total (down payment + remaining closing costs). Savings: $${savings.toFixed(0)}.`;
      } else {
        recommendation = `No seller concessions in this scenario. Total cash needed: $${totalCashWithoutConcessions.toFixed(0)}. Consider negotiating up to 6% ($${maxAllowedConcessions.toFixed(0)}) to reduce out-of-pocket costs.`;
      }

      if (appraisedValue < purchasePrice) {
        recommendation += ` Note: Property appraised for less than purchase price, which limits concessions to $${maxAllowedConcessions.toFixed(0)}.`;
      }

      return [
        {
          label: "Maximum Allowed Seller Concessions (6%)",
          value: maxAllowedConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Requested Seller Concessions",
          value: requestedConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Actual Seller Contribution",
          value: actualConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Cash Needed Without Concessions",
          value: totalCashWithoutConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Your Out-of-Pocket Cost With Concessions",
          value: outOfPocketWithConcessions.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Savings from Seller Concessions",
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
