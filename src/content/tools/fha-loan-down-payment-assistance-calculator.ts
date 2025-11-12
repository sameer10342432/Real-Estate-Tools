import { CalculatorContent } from "@/types";

export const fhaLoanDownPaymentAssistanceCalculator: CalculatorContent = {
  title: "FHA Loan Down Payment Assistance Calculator",
  description:
    "Calculate available down payment assistance programs and grants for FHA loans to help first-time homebuyers.",
  icon: "Icon",
  category: "Calculators",
  slug: "fha-loan-down-payment-assistance-calculator",
  metaTitle: "FHA Down Payment Assistance Calculator - Find Help Programs & Grants",
  metaDescription: "Free FHA down payment assistance calculator. Find available grants, DPA programs, and calculate total down payment needs for FHA loans. Discover programs offering $5,000-$20,000 in assistance for first-time buyers.",
  article: {
    title: "FHA Down Payment Assistance Programs Guide",
    content: `
      <h2>What is Down Payment Assistance?</h2>
      <p>Down payment assistance (DPA) programs help homebuyers cover the down payment and closing costs on a home purchase. These programs are especially valuable for FHA loans, which only require 3.5% down but still present a barrier for many first-time buyers.</p>

      <h2>Types of Down Payment Assistance</h2>
      <h3>1. Grants (Free Money)</h3>
      <p>Grants don't need to be repaid and are the most desirable form of assistance. They typically range from $2,500 to $15,000 depending on the program and location.</p>

      <h3>2. Forgivable Second Mortgages</h3>
      <p>These loans are forgiven after a certain period (typically 5-10 years) if you continue living in the home. If you sell or refinance early, you may need to repay part or all of the assistance.</p>

      <h3>3. Deferred Payment Loans</h3>
      <p>No payments are due until you sell, refinance, or pay off the first mortgage. These loans typically carry 0% interest.</p>

      <h3>4. Low-Interest Second Mortgages</h3>
      <p>Second loans with below-market interest rates that require monthly payments alongside your first mortgage.</p>

      <h2>FHA Down Payment Requirements</h2>
      <ul>
        <li><strong>Minimum Down Payment:</strong> 3.5% with 580+ credit score</li>
        <li><strong>10% Down Payment:</strong> Required with 500-579 credit score</li>
        <li><strong>Gift Funds Allowed:</strong> 100% of down payment can be gifted by family</li>
        <li><strong>DPA Programs Allowed:</strong> FHA accepts most down payment assistance programs</li>
      </ul>

      <h2>Who Qualifies for Down Payment Assistance?</h2>
      <p>Common eligibility requirements include:</p>
      <ul>
        <li><strong>First-time homebuyers:</strong> Usually defined as not owning a home in the past 3 years</li>
        <li><strong>Income limits:</strong> Typically at or below 80% of area median income (AMI)</li>
        <li><strong>Purchase price limits:</strong> Property must be within program limits</li>
        <li><strong>Primary residence:</strong> Must be your primary home, not investment property</li>
        <li><strong>Homebuyer education:</strong> Many programs require completion of a homebuyer course</li>
        <li><strong>Credit score minimums:</strong> Usually 620+ (FHA minimum is 580)</li>
      </ul>

      <h2>Popular National DPA Programs</h2>
      <h3>Good Neighbor Next Door Program</h3>
      <p>For law enforcement, teachers, firefighters, and EMTs. Offers 50% discount on homes in revitalization areas.</p>

      <h3>National Homebuyers Fund (NHF)</h3>
      <p>Available in all 50 states. Offers up to 5% of purchase price in assistance as a forgivable loan.</p>

      <h3>Chenoa Fund</h3>
      <p>Available nationwide with FHA, VA, USDA, and conventional loans. Provides up to 3.5% assistance as a repayable second mortgage.</p>

      <h3>USDA Rural Development</h3>
      <p>100% financing for rural areas (no down payment needed). Combined with DPA can cover closing costs.</p>

      <h2>State and Local DPA Programs</h2>
      <p>Every state offers down payment assistance programs. Examples include:</p>

      <h3>California</h3>
      <ul>
        <li><strong>CalHFA MyHome Assistance:</strong> 3.5% DPA (up to $30,000)</li>
        <li><strong>Golden State Finance Authority:</strong> Various grant programs</li>
      </ul>

      <h3>Texas</h3>
      <ul>
        <li><strong>Texas State Affordable Housing:</strong> Up to 5% assistance</li>
        <li><strong>My First Texas Home:</strong> Down payment and closing cost grants</li>
      </ul>

      <h3>Florida</h3>
      <ul>
        <li><strong>Florida Assist:</strong> Up to $10,000 DPA</li>
        <li><strong>HFA Preferred:</strong> Up to 3% assistance</li>
      </ul>

      <h3>New York</h3>
      <ul>
        <li><strong>SONYMA:</strong> Up to $15,000 in closing cost assistance</li>
        <li><strong>Achieving the Dream:</strong> $10,000 grant for first-time buyers</li>
      </ul>

      <h2>How to Find DPA Programs</h2>
      <ul>
        <li><strong>HUD.gov:</strong> Search for HUD-approved housing counselors</li>
        <li><strong>State Housing Finance Agency:</strong> Each state has an agency listing local programs</li>
        <li><strong>County/City Programs:</strong> Check your local government housing department</li>
        <li><strong>Lender Programs:</strong> Many lenders have partnerships with DPA providers</li>
        <li><strong>Employer Programs:</strong> Some employers offer homebuyer assistance</li>
      </ul>

      <h2>Combining DPA with FHA Loans</h2>
      <p>FHA loans pair well with DPA programs because:</p>
      <ul>
        <li>Low 3.5% down payment requirement</li>
        <li>Flexible credit score requirements (580+ for 3.5% down)</li>
        <li>Higher debt-to-income ratios allowed (up to 50%)</li>
        <li>Seller can contribute up to 6% toward closing costs</li>
        <li>Gift funds from family fully allowed</li>
      </ul>

      <h2>Example FHA + DPA Scenario</h2>
      <p><strong>Home Price:</strong> $250,000</p>
      <p><strong>FHA Down Payment (3.5%):</strong> $8,750</p>
      <p><strong>Closing Costs (3%):</strong> $7,500</p>
      <p><strong>Total Cash Needed:</strong> $16,250</p>

      <p><strong>With $10,000 DPA Grant:</strong></p>
      <ul>
        <li>Out-of-pocket: Only $6,250</li>
        <li>Savings: $10,000 in free money</li>
      </ul>

      <h2>Costs of DPA Programs</h2>
      <p>While assistance is valuable, some programs have costs:</p>
      <ul>
        <li><strong>Higher interest rate:</strong> Some programs require 0.25-0.50% rate increase</li>
        <li><strong>Lender fees:</strong> Some charge processing fees ($500-$1,500)</li>
        <li><strong>Repayment requirements:</strong> If you sell/refinance early</li>
        <li><strong>Homebuyer education cost:</strong> Usually $75-$150</li>
      </ul>

      <h2>Tips for Using DPA Successfully</h2>
      <ul>
        <li><strong>Start Early:</strong> Begin researching programs 6-12 months before buying</li>
        <li><strong>Take Homebuyer Education:</strong> Required by most programs and very helpful</li>
        <li><strong>Work with Experienced Lenders:</strong> Choose lenders familiar with DPA programs</li>
        <li><strong>Understand Restrictions:</strong> Know repayment terms and residency requirements</li>
        <li><strong>Compare Programs:</strong> Different programs have different terms and costs</li>
        <li><strong>Check Income Limits:</strong> Make sure you qualify before applying</li>
        <li><strong>Budget for Long-Term:</strong> Consider ongoing costs beyond the down payment</li>
      </ul>

      <h2>Common DPA Mistakes to Avoid</h2>
      <ul>
        <li>Not researching available programs in your area</li>
        <li>Missing application deadlines or program funding periods</li>
        <li>Choosing a home above program price limits</li>
        <li>Not completing required homebuyer education</li>
        <li>Working with lenders unfamiliar with DPA</li>
        <li>Selling or refinancing before forgiveness period ends</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter your home price, available DPA amount, and estimated closing costs. The calculator shows your total cash needed with and without assistance, your FHA loan details including upfront and monthly MIP, and helps you understand the complete financial picture of using down payment assistance with an FHA loan.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price ($)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "dpaAmount",
        label: "Down Payment Assistance Amount ($)",
        type: "number",
        defaultValue: "10000",
      },
      {
        name: "closingCostRate",
        label: "Estimated Closing Costs (%)",
        type: "number",
        defaultValue: "3",
      },
      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        defaultValue: "680",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        defaultValue: "6.5",
      },
    ],
    results: [
      {
        label: "Required FHA Down Payment (3.5%)",
        isCurrency: true,
      },
      {
        label: "Estimated Closing Costs",
        isCurrency: true,
      },
      {
        label: "Total Cash Needed (Without Assistance)",
        isCurrency: true,
      },
      {
        label: "Down Payment Assistance",
        isCurrency: true,
      },
      {
        label: "Your Out-of-Pocket Cost",
        isCurrency: true,
      },
      {
        label: "Savings from DPA",
        isCurrency: true,
      },
      {
        label: "FHA Loan Amount",
        isCurrency: true,
      },
      {
        label: "Upfront MIP (1.75%)",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const homePrice = parseFloat(values.homePrice);
      const dpaAmount = parseFloat(values.dpaAmount);
      const closingCostRate = parseFloat(values.closingCostRate);
      const creditScore = parseFloat(values.creditScore);

      const fhaDownPayment = homePrice * 0.035;
      const closingCosts = homePrice * (closingCostRate / 100);
      const totalCashNeeded = fhaDownPayment + closingCosts;
      const outOfPocket = Math.max(0, totalCashNeeded - dpaAmount);
      const savings = Math.min(dpaAmount, totalCashNeeded);

      const loanAmount = homePrice - fhaDownPayment;
      const upfrontMIP = loanAmount * 0.0175;

      let recommendation = "";
      if (dpaAmount >= totalCashNeeded) {
        recommendation = `Excellent! Your DPA covers all upfront costs. You can purchase with $${outOfPocket.toFixed(0)} out of pocket. Make sure to understand any DPA repayment terms if you sell or refinance early.`;
      } else if (dpaAmount >= fhaDownPayment) {
        recommendation = `Great! DPA covers your full down payment. You only need $${outOfPocket.toFixed(0)} for closing costs. This makes homeownership much more accessible.`;
      } else {
        const stillNeed = totalCashNeeded - dpaAmount;
        recommendation = `DPA helps reduce your costs by $${savings.toFixed(0)}. You'll need an additional $${stillNeed.toFixed(0)}. Consider: (1) Look for additional DPA programs, (2) Ask seller to contribute to closing costs (FHA allows up to 6%), (3) Gift funds from family members.`;
      }

      return [
        {
          label: "Required FHA Down Payment (3.5%)",
          value: fhaDownPayment.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Estimated Closing Costs",
          value: closingCosts.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Cash Needed (Without Assistance)",
          value: totalCashNeeded.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Down Payment Assistance",
          value: dpaAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Your Out-of-Pocket Cost",
          value: outOfPocket.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Savings from DPA",
          value: savings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "FHA Loan Amount",
          value: loanAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Upfront MIP (1.75%)",
          value: upfrontMIP.toFixed(2),
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
