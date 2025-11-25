import { CalculatorContent } from '@/types';

export const TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Title Insurance (Lender\'s) Cost Calculator',
  description: 'Calculate lender\'s title insurance premium based on loan amount, state regulations, and refinance scenarios for mortgage protection',
  icon: 'Icon',
  category: 'Insurance & Protection',
  slug: 'title-insurance-lender-cost-calculator',
  article: {
    title: "Understanding Lender's Title Insurance Costs",
    content: `
    <h2>Understanding Lender's Title Insurance Costs</h2>
    <p>Lender's title insurance (also called a loan policy) protects the mortgage lender's interest in your property. Required by virtually all mortgage lenders, this one-time premium is paid at closing and covers the loan amount.</p>
    
    <h3>What is Lender's Title Insurance?</h3>
    <p>Lender's title insurance protects the mortgage lender against:</p>
    <ul>
      <li><strong>Title Defects:</strong> Unknown liens or claims that could affect the lender's security interest</li>
      <li><strong>Priority Issues:</strong> Other liens taking precedence over the mortgage</li>
      <li><strong>Fraud:</strong> Forged documents affecting property ownership</li>
      <li><strong>Legal Fees:</strong> Costs to defend the lender's interest in the property</li>
      <li><strong>Financial Loss:</strong> Up to the outstanding loan amount</li>
    </ul>
    
    <h3>Lender's vs. Owner's Title Insurance</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Lender's Policy</th>
        <th>Owner's Policy</th>
      </tr>
      <tr>
        <td><strong>Who it protects</strong></td>
        <td>Mortgage lender</td>
        <td>Property owner</td>
      </tr>
      <tr>
        <td><strong>Required?</strong></td>
        <td>Yes (by lender)</td>
        <td>No (but highly recommended)</td>
      </tr>
      <tr>
        <td><strong>Coverage amount</strong></td>
        <td>Loan amount (decreases as you pay down)</td>
        <td>Purchase price (fixed)</td>
      </tr>
      <tr>
        <td><strong>Duration</strong></td>
        <td>Until loan is paid off</td>
        <td>Lifetime (as long as you own property)</td>
      </tr>
      <tr>
        <td><strong>Who pays</strong></td>
        <td>Borrower</td>
        <td>Varies by region</td>
      </tr>
      <tr>
        <td><strong>Refinance</strong></td>
        <td>New policy required</td>
        <td>Original policy still valid</td>
      </tr>
    </table>
    
    <h3>Average Lender's Title Insurance Costs</h3>
    <p><strong>Purchase with Simultaneous Issue (Most Common):</strong></p>
    <ul>
      <li><strong>$300,000 Loan:</strong> $150-$900 (40-60% discount when bundled with owner's policy)</li>
      <li><strong>$500,000 Loan:</strong> $250-$1,500</li>
      <li><strong>$750,000 Loan:</strong> $375-$2,250</li>
    </ul>
    
    <p><strong>Refinance (Standalone Policy):</strong></p>
    <ul>
      <li><strong>$300,000 Loan:</strong> $600-$1,500</li>
      <li><strong>$500,000 Loan:</strong> $1,000-$2,500</li>
      <li><strong>$750,000 Loan:</strong> $1,500-$3,750</li>
    </ul>
    
    <h3>Premium Calculation Factors</h3>
    <ul>
      <li><strong>Loan Amount:</strong> Primary factor - larger loans = higher premiums</li>
      <li><strong>State Regulations:</strong> Rates vary dramatically by state</li>
      <li><strong>Simultaneous Issue:</strong> 40-60% discount when purchased with owner's policy</li>
      <li><strong>Refinance Discount:</strong> 30-50% off if original policy is recent (within 10 years)</li>
      <li><strong>Transaction Type:</strong> Purchase vs. refinance affects pricing</li>
      <li><strong>Loan Type:</strong> Some programs (VA, FHA) may have different rates</li>
    </ul>
    
    <h3>State-by-State Rate Examples</h3>
    <p><strong>High-Cost States:</strong></p>
    <ul>
      <li><strong>Florida:</strong> $5.75 per $1,000 for first $100K, then $5.00 per $1,000</li>
      <li><strong>New York:</strong> $3.75 per $1,000 (on loan amount)</li>
      <li><strong>Pennsylvania:</strong> $2.75 per $1,000 (lender's rate)</li>
      <li><strong>Texas:</strong> $2.50 per $1,000 (lender's rate)</li>
    </ul>
    
    <p><strong>Moderate-Cost States:</strong></p>
    <ul>
      <li><strong>California:</strong> $2.00 per $1,000 (varies by county)</li>
      <li><strong>Illinois:</strong> $2.50 per $1,000</li>
      <li><strong>Washington:</strong> $2.20 per $1,000</li>
    </ul>
    
    <p><strong>Low-Cost States:</strong></p>
    <ul>
      <li><strong>Colorado:</strong> $1.00 per $1,000</li>
      <li><strong>Missouri:</strong> $1.50 per $1,000</li>
      <li><strong>Arizona:</strong> $1.75 per $1,000</li>
    </ul>
    
    <p><strong>Special Case:</strong></p>
    <ul>
      <li><strong>Iowa:</strong> No title insurance - uses state certificate system (~$75 fee)</li>
    </ul>
    
    <h3>Simultaneous Issue Discount (Purchase)</h3>
    <p>When buying a home with a mortgage, both owner's and lender's policies are issued together:</p>
    <ul>
      <li><strong>Owner's Policy:</strong> Full premium (based on purchase price)</li>
      <li><strong>Lender's Policy:</strong> 40-60% discount (based on loan amount)</li>
      <li><strong>Example:</strong> $400K purchase with $320K loan
        <ul>
          <li>Owner's policy: $1,400</li>
          <li>Lender's policy (standalone): $1,120</li>
          <li>Lender's policy (simultaneous): $560 (50% off)</li>
          <li>Total: $1,960 vs. $2,520 = $560 savings</li>
        </ul>
      </li>
    </ul>
    
    <h3>Refinance Title Insurance</h3>
    <p><strong>New Policy Required:</strong> Each refinance requires a new lender's policy because:</p>
    <ul>
      <li>New loan = new lender = new policy needed</li>
      <li>Original lender's policy expires when loan is paid off</li>
      <li>New title search needed to check for recent liens/issues</li>
    </ul>
    
    <p><strong>Refinance Discounts:</strong></p>
    <ul>
      <li><strong>Recent Purchase:</strong> 30-50% discount if purchased within 10 years</li>
      <li><strong>Same Lender Refinance:</strong> Some lenders offer additional discounts</li>
      <li><strong>Cash-Out vs. Rate-and-Term:</strong> Pricing usually the same</li>
    </ul>
    
    <h3>Who Pays for Lender's Title Insurance?</h3>
    <p><strong>Always the Borrower:</strong> Unlike owner's policy (which varies by region), the borrower always pays for lender's title insurance. This is a standard closing cost.</p>
    
    <p><strong>Included in Closing Costs:</strong></p>
    <ul>
      <li>Itemized on Loan Estimate (LE) and Closing Disclosure (CD)</li>
      <li>Can be rolled into loan amount (but increases total interest paid)</li>
      <li>Sometimes covered by lender credits or seller concessions</li>
    </ul>
    
    <h3>Can You Avoid Lender's Title Insurance?</h3>
    <p><strong>No - It's Mandatory:</strong></p>
    <ul>
      <li>Required by virtually all conventional lenders</li>
      <li>Mandated for FHA, VA, and USDA loans</li>
      <li>Only exception: paying cash (no mortgage = no lender to protect)</li>
      <li>Cannot be waived even with large down payment</li>
    </ul>
    
    <h3>Cost-Saving Strategies</h3>
    <p><strong>Shop Around (Non-Regulated States):</strong> Rates can vary 20-30% between title companies</p>
    <p><strong>Ask for Reissue Rate:</strong> If refinancing or property sold recently (within 10 years)</p>
    <p><strong>Bundle Services:</strong> Some title companies discount when using their closing/escrow services</p>
    <p><strong>Negotiate Closing Costs:</strong> Ask seller to cover title insurance as part of contract negotiations</p>
    <p><strong>Lender Credits:</strong> Accept slightly higher interest rate for lender credits to cover closing costs</p>
    <p><strong>Time Refinances Strategically:</strong> If refinancing multiple times, wait until after reissue discount period expires</p>
    
    <h3>Common Scenarios</h3>
    <p><strong>Scenario 1: First-Time Home Purchase</strong></p>
    <ul>
      <li>Purchase price: $350,000</li>
      <li>Loan amount: $280,000 (80% LTV)</li>
      <li>Owner's policy: $1,225 (0.35% of purchase price)</li>
      <li>Lender's policy: $490 (50% simultaneous discount)</li>
      <li>Total title insurance: $1,715</li>
    </ul>
    
    <p><strong>Scenario 2: Rate-and-Term Refinance</strong></p>
    <ul>
      <li>Loan amount: $250,000</li>
      <li>Original purchase: 4 years ago</li>
      <li>Standalone lender's policy: $875</li>
      <li>Reissue discount (40%): -$350</li>
      <li>Final cost: $525</li>
    </ul>
    
    <p><strong>Scenario 3: Cash-Out Refinance</strong></p>
    <ul>
      <li>New loan amount: $400,000</li>
      <li>Original purchase: 8 years ago</li>
      <li>Standalone lender's policy: $1,400</li>
      <li>Reissue discount (35%): -$490</li>
      <li>Final cost: $910</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Loan Amount",
        type: "number",
        placeholder: "320000",
        defaultValue: "320000",
      },
      {
        name: "transactionType",
        label: "Transaction Type",
        type: "select",
        options: [
          { value: "purchase", label: "Purchase (with owner's policy)" },
          { value: "refinance", label: "Refinance (lender's policy only)" },
        ],
        defaultValue: "purchase",
      },
      {
        name: "stateRegulation",
        label: "State Regulation Type",
        type: "select",
        options: [
          { value: "low", label: "Low Rate State (CO, MO, AZ)" },
          { value: "moderate", label: "Moderate Rate State (Most States)" },
          { value: "high", label: "High Rate State (NY, PA, TX, FL)" },
          { value: "iowa", label: "Iowa (State Certificate System)" },
        ],
        defaultValue: "moderate",
      },
      {
        name: "reissueRate",
        label: "Qualify for Reissue/Refinance Discount?",
        type: "select",
        options: [
          { value: "no", label: "No (First purchase or old transaction)" },
          { value: "yes", label: "Yes (Within last 10 years)" },
        ],
        defaultValue: "no",
      },
    ],
    results: [
      { label: "Lender's Title Insurance Premium", isCurrency: true },
      { label: "Premium as % of Loan Amount", isCurrency: false },
      { label: "Coverage Amount", isCurrency: true },
      { label: "Coverage Duration", isCurrency: false },
      { label: "Discount Applied", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanAmount = Number(data.loanAmount) || 0;
      const transactionType = data.transactionType || "purchase";
      const stateRegulation = data.stateRegulation || "moderate";
      const reissueRate = data.reissueRate || "no";
      
      let baseRate = 0;
      
      if (stateRegulation === "iowa") {
        baseRate = 0;
      } else if (stateRegulation === "low") {
        baseRate = 0.0015;
      } else if (stateRegulation === "moderate") {
        baseRate = 0.0025;
      } else {
        baseRate = 0.00375;
      }
      
      let lenderPremium = 0;
      let discountApplied = "None";
      
      if (stateRegulation === "iowa") {
        lenderPremium = 75;
        discountApplied = "Iowa Certificate System";
      } else {
        lenderPremium = loanAmount * baseRate;
        
        if (transactionType === "purchase") {
          lenderPremium = lenderPremium * 0.5;
          discountApplied = "50% Simultaneous Issue Discount";
        } else if (transactionType === "refinance" && reissueRate === "yes") {
          lenderPremium = lenderPremium * 0.65;
          discountApplied = "35% Refinance/Reissue Discount";
        }
      }
      
      const premiumPercentage = (lenderPremium / loanAmount) * 100;
      const coverageAmount = loanAmount;
      const coverageDuration = "Until loan is paid off";

      return [
        { label: "Lender's Title Insurance Premium", value: `${lenderPremium.toFixed(2)}`, isCurrency: true },
        { label: "Premium as % of Loan Amount", value: `${premiumPercentage.toFixed(3)}%`, isCurrency: false },
        { label: "Coverage Amount", value: `${coverageAmount.toFixed(2)}`, isCurrency: true },
        { label: "Coverage Duration", value: coverageDuration, isCurrency: false },
        { label: "Discount Applied", value: discountApplied, isCurrency: false },
      ];
    },
  },
};
