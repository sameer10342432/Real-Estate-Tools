import { CalculatorContent } from "@/types";

export const remainingVaLoanEntitlementCalculator: CalculatorContent = {
  title: "Remaining VA Loan Entitlement Calculator",
  description:
    "Calculate your remaining VA loan entitlement and maximum purchase price for additional VA loan purchases.",
  icon: "Icon",
  category: "Calculators",
  slug: "remaining-va-loan-entitlement-calculator",
  metaTitle: "VA Loan Entitlement Calculator - Check Remaining VA Benefit Amount",
  metaDescription: "Calculate your remaining VA loan entitlement and see how much you can borrow for your next home purchase. Find out your maximum loan amount with remaining VA benefits after previous VA loan use.",
  article: {
    title: "Understanding VA Loan Entitlement: Complete Guide",
    content: `
      <h2>What is VA Loan Entitlement?</h2>
      <p>VA loan entitlement is the amount the Department of Veterans Affairs will guarantee on your home loan. This guarantee allows lenders to offer favorable terms including zero down payment. Understanding your entitlement is crucial when using your VA loan benefit multiple times or when you have an existing VA loan.</p>

      <h2>Types of VA Loan Entitlement</h2>
      <h3>Basic Entitlement</h3>
      <p>All eligible veterans receive a basic entitlement of $36,000. This has remained unchanged since 1974.</p>

      <h3>Bonus (Secondary) Entitlement</h3>
      <p>The bonus entitlement varies by county based on conforming loan limits. For 2024:</p>
      <ul>
        <li><strong>Standard counties:</strong> $145,663.75 ($766,550 × 25% - $36,000)</li>
        <li><strong>High-cost counties:</strong> Up to $250,956.25 ($1,149,825 × 25% - $36,000)</li>
      </ul>

      <h3>Total Entitlement</h3>
      <p>Basic + Bonus = Total available entitlement (usually $181,663.75 in standard counties)</p>

      <h2>How VA Entitlement Works</h2>
      <p>The VA guarantees 25% of the loan amount up to the conforming loan limit. This means:</p>
      <ul>
        <li>On a $400,000 loan, VA guarantees $100,000 (25%)</li>
        <li>If you default, VA pays the lender up to $100,000</li>
        <li>This guarantee allows lenders to offer 0% down payment</li>
      </ul>

      <h2>Maximum Loan Amount with Full Entitlement (2024)</h2>
      <p>With full entitlement remaining, you can borrow up to:</p>
      <ul>
        <li><strong>Standard counties:</strong> $766,550 with $0 down</li>
        <li><strong>High-cost counties:</strong> Up to $1,149,825 with $0 down</li>
        <li><strong>Above these limits:</strong> Requires 25% down on the excess amount</li>
      </ul>

      <h3>Example: Above Conforming Limits</h3>
      <p>Want a $1 million home in a standard county ($766,550 limit):</p>
      <ul>
        <li>Excess amount: $1,000,000 - $766,550 = $233,450</li>
        <li>Required down payment: $233,450 × 25% = $58,362.50</li>
        <li>Loan amount: $941,637.50</li>
      </ul>

      <h2>Using Your VA Loan Benefit Multiple Times</h2>
      <h3>Scenario 1: Sold Previous Home</h3>
      <p>If you've sold your previous VA-financed home and paid off the loan, you can:</p>
      <ul>
        <li>Restore your full entitlement</li>
        <li>Use your benefit again with $0 down</li>
        <li>Apply through eBenefits or VA Form 26-1880</li>
      </ul>

      <h3>Scenario 2: Still Own Previous Home</h3>
      <p>You can use remaining entitlement for a second property if:</p>
      <ul>
        <li>You have sufficient remaining entitlement</li>
        <li>You meet occupancy requirements</li>
        <li>You qualify with both mortgage payments</li>
      </ul>

      <h3>Scenario 3: Refinanced to Non-VA Loan</h3>
      <p>If you refinanced your VA loan to a conventional loan:</p>
      <ul>
        <li>Your entitlement remains tied to the original property</li>
        <li>You must sell the property to restore entitlement</li>
        <li>Or refinance back to a VA loan to free up entitlement</li>
      </ul>

      <h2>Calculating Remaining Entitlement</h2>
      <p>Formula: Remaining Entitlement = Total Entitlement - Used Entitlement</p>

      <h3>Example Calculation</h3>
      <p><strong>Scenario:</strong> Current VA loan balance of $300,000</p>
      <ul>
        <li>Total entitlement: $181,663.75</li>
        <li>Used entitlement: $300,000 × 25% = $75,000</li>
        <li>Remaining entitlement: $181,663.75 - $75,000 = $106,663.75</li>
        <li>Max new loan with $0 down: $106,663.75 ÷ 0.25 = $426,655</li>
      </ul>

      <h2>Buying a Second Home with Remaining Entitlement</h2>
      <h3>Maximum Purchase Price</h3>
      <p>Formula: Remaining Entitlement ÷ 0.25 = Maximum loan with $0 down</p>

      <h3>Requirements for Second VA Loan</h3>
      <ul>
        <li><strong>Sufficient entitlement:</strong> Enough remaining to guarantee 25% of new loan</li>
        <li><strong>Occupancy:</strong> Usually requires PCS orders or other valid reason</li>
        <li><strong>Debt-to-income:</strong> Must qualify with both mortgage payments</li>
        <li><strong>Residual income:</strong> Must meet VA guidelines with both payments</li>
      </ul>

      <h2>Restoring Your VA Loan Entitlement</h2>
      <h3>Full Restoration</h3>
      <p>Available when you:</p>
      <ul>
        <li>Paid off the VA loan</li>
        <li>Sold the property securing the loan</li>
        <li>Provide proof to the VA</li>
      </ul>

      <h3>One-Time Restoration</h3>
      <p>If you've paid off the loan but still own the property, you may qualify for one-time restoration if:</p>
      <ul>
        <li>You've never used this option before</li>
        <li>The loan has been paid in full</li>
        <li>You won't be using the property to secure another VA loan</li>
      </ul>

      <h3>Assumption by Eligible Veteran</h3>
      <p>If another eligible veteran assumes your VA loan:</p>
      <ul>
        <li>They substitute their entitlement for yours</li>
        <li>Your entitlement is fully restored</li>
        <li>They become responsible for the loan</li>
      </ul>

      <h2>Common Entitlement Scenarios</h2>
      <h3>Example 1: First-Time Use</h3>
      <ul>
        <li>Total entitlement: $181,663.75</li>
        <li>Used: $0</li>
        <li>Remaining: $181,663.75</li>
        <li>Max loan $0 down: $726,655</li>
      </ul>

      <h3>Example 2: $250,000 Current Loan</h3>
      <ul>
        <li>Used entitlement: $62,500 (25% of $250K)</li>
        <li>Remaining: $119,163.75</li>
        <li>Max new loan $0 down: $476,655</li>
      </ul>

      <h3>Example 3: $500,000 Current Loan</h3>
      <ul>
        <li>Used entitlement: $125,000 (25% of $500K)</li>
        <li>Remaining: $56,663.75</li>
        <li>Max new loan $0 down: $226,655</li>
      </ul>

      <h2>Strategies to Maximize Your Benefit</h2>
      <h3>1. Sell and Restore</h3>
      <p>Sell your current VA-financed home to restore full entitlement for a larger purchase.</p>

      <h3>2. Refinance Current Loan</h3>
      <p>If rates dropped, use VA IRRRL to lower payment on existing home, improving DTI for second purchase.</p>

      <h3>3. Rent Current Property</h3>
      <p>If allowed, rental income can offset DTI impact of keeping first home.</p>

      <h3>4. Make Down Payment</h3>
      <p>If remaining entitlement is insufficient, make a down payment on second home to reduce guarantee needed.</p>

      <h2>Important Considerations</h2>
      <ul>
        <li><strong>Occupancy Requirements:</strong> Must intend to occupy as primary residence</li>
        <li><strong>VA Funding Fee:</strong> Subsequent use fee is higher (3.3% vs 2.15%)</li>
        <li><strong>Lender Overlays:</strong> Some lenders have stricter rules than VA minimums</li>
        <li><strong>Credit Requirements:</strong> Must still meet lender credit and income standards</li>
        <li><strong>Property Location:</strong> Entitlement amounts vary by county loan limits</li>
      </ul>

      <h2>Checking Your Entitlement</h2>
      <p>Three ways to check:</p>
      <ol>
        <li><strong>eBenefits:</strong> Log in and view your COE showing entitlement usage</li>
        <li><strong>Through Lender:</strong> Lenders can pull your COE electronically</li>
        <li><strong>VA Directly:</strong> Call 1-888-244-6711 or contact local VA office</li>
      </ol>

      <h2>How to Use This Calculator</h2>
      <p>Enter your current VA loan balance (if any), the purchase price of the home you want to buy, and your county type (standard or high-cost). The calculator shows your remaining entitlement, whether you need a down payment, and how much you can borrow with your remaining benefit.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "currentLoanBalance",
        label: "Current VA Loan Balance ($, enter 0 if none)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "newHomePrice",
        label: "New Home Purchase Price ($)",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "countyType",
        label: "County Type",
        type: "select",
        options: [
          { value: "standard", label: "Standard County ($766,550 limit)" },
          { value: "highcost", label: "High-Cost County ($1,149,825 limit)" },
        ],
        defaultValue: "standard",
      },
      {
        name: "hasSoldPrevious",
        label: "Have you sold your previous VA-financed home?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - I can restore entitlement" },
          { value: "no", label: "No - Still own the property" },
          { value: "na", label: "N/A - First time using VA loan" },
        ],
        defaultValue: "no",
      },
    ],
    results: [
      {
        label: "Total Available Entitlement",
        isCurrency: true,
      },
      {
        label: "Used Entitlement",
        isCurrency: true,
      },
      {
        label: "Remaining Entitlement",
        isCurrency: true,
      },
      {
        label: "Maximum Loan Amount ($0 down)",
        isCurrency: true,
      },
      {
        label: "New Loan Needs Entitlement Of",
        isCurrency: true,
      },
      {
        label: "Can Buy New Home with $0 Down?",
        isCurrency: false,
      },
      {
        label: "Required Down Payment (if any)",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const currentLoan = parseFloat(values.currentLoanBalance);
      const newHomePrice = parseFloat(values.newHomePrice);
      const countyType = values.countyType;
      const hasSold = values.hasSoldPrevious;

      // Calculate total entitlement based on county
      const basicEntitlement = 36000;
      let bonusEntitlement = 145663.75; // Standard
      if (countyType === "highcost") {
        bonusEntitlement = 250956.25;
      }
      const totalEntitlement = basicEntitlement + bonusEntitlement;

      // If sold previous home, full entitlement is restored
      let usedEntitlement = 0;
      if (hasSold === "no" && currentLoan > 0) {
        usedEntitlement = currentLoan * 0.25;
      }

      const remainingEntitlement = totalEntitlement - usedEntitlement;
      const maxLoanZeroDown = remainingEntitlement / 0.25;

      // Calculate needed entitlement for new purchase
      const neededEntitlement = newHomePrice * 0.25;

      // Determine if $0 down is possible
      const canBuyZeroDown = remainingEntitlement >= neededEntitlement;
      
      let requiredDownPayment = 0;
      if (!canBuyZeroDown) {
        const shortfall = neededEntitlement - remainingEntitlement;
        requiredDownPayment = shortfall / 0.25;
      }

      let status = "";
      let recommendation = "";
      
      if (canBuyZeroDown) {
        status = "✅ YES - You have sufficient entitlement for $0 down";
        recommendation = `Great news! You have $${remainingEntitlement.toFixed(0)} in remaining entitlement, which is enough to purchase this $${newHomePrice.toFixed(0)} home with no down payment. ${hasSold === "no" && currentLoan > 0 ? "Note: You'll need to qualify with both mortgage payments. Consider selling your current property to restore full entitlement." : ""}`;
      } else {
        status = "⚠️ NO - Insufficient entitlement for $0 down on this home";
        recommendation = `You need $${requiredDownPayment.toFixed(0)} down payment to purchase this home. Options: (1) Reduce purchase price to $${maxLoanZeroDown.toFixed(0)} for $0 down, (2) ${hasSold === "no" ? "Sell current property to restore full entitlement" : "Make the required down payment"}, (3) Consider properties in high-cost counties if applicable.`;
      }

      if (hasSold === "yes") {
        recommendation += " Don't forget to restore your entitlement through eBenefits or VA Form 26-1880 before applying for a new loan.";
      }

      return [
        {
          label: "Total Available Entitlement",
          value: totalEntitlement.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Used Entitlement",
          value: usedEntitlement.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Remaining Entitlement",
          value: remainingEntitlement.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Maximum Loan Amount ($0 down)",
          value: maxLoanZeroDown.toFixed(2),
          isCurrency: true,
        },
        {
          label: "New Loan Needs Entitlement Of",
          value: neededEntitlement.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Can Buy New Home with $0 Down?",
          value: status,
          isCurrency: false,
        },
        {
          label: "Required Down Payment (if any)",
          value: requiredDownPayment.toFixed(2),
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
