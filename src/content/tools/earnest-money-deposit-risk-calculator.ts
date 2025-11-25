import { CalculatorContent } from '@/types';

const EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Earnest Money Deposit Risk Calculator',
  description: 'Calculate earnest money deposit amounts, analyze risk of forfeiture, and understand contingency protection for your home purchase offer.',
  icon: 'Icon',
  slug: 'earnest-money-deposit-risk-calculator',
  category: 'Buyer Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: '500000',
      },
      {
        name: 'emdPercentage',
        label: 'EMD as % of Purchase Price',
        type: 'number',
        defaultValue: '2',
      },
      {
        name: 'marketType',
        label: 'Market Type',
        type: 'select',
        options: [
          { value: 'buyer', label: "Buyer's Market" },
          { value: 'balanced', label: 'Balanced Market' },
          { value: 'seller', label: "Seller's Market" },
          { value: 'hot', label: 'Hot Market (Bidding Wars)' },
        ],
        defaultValue: 'balanced',
      },
      {
        name: 'hasInspectionContingency',
        label: 'Inspection Contingency',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'hasFinancingContingency',
        label: 'Financing Contingency',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'hasAppraisalContingency',
        label: 'Appraisal Contingency',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'hasHomeS aleContingency',
        label: 'Home Sale Contingency',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'buyerCommitment',
        label: 'Your Commitment Level',
        type: 'select',
        options: [
          { value: 'low', label: 'Low (Just Looking)' },
          { value: 'medium', label: 'Medium (Interested)' },
          { value: 'high', label: 'High (This is THE one)' },
        ],
        defaultValue: 'high',
      },
    ],
    calculate: (values) => {
      const purchasePrice = Number(values.purchasePrice);
      const emdPct = Number(values.emdPercentage) / 100;
      const marketType = values.marketType;
      const hasInspection = values.hasInspectionContingency === 'yes';
      const hasFinancing = values.hasFinancingContingency === 'yes';
      const hasAppraisal = values.hasAppraisalContingency === 'yes';
      const hasHomeSale = values.hasHomeSaleContingency === 'yes';
      const commitment = values.buyerCommitment;

      // Calculate EMD amount
      const emdAmount = purchasePrice * emdPct;

      // Calculate typical EMD range for market
      let minTypicalPct = 1;
      let maxTypicalPct = 3;
      if (marketType === 'buyer') {
        minTypicalPct = 0.5;
        maxTypicalPct = 2;
      } else if (marketType === 'hot') {
        minTypicalPct = 3;
        maxTypicalPct = 10;
      } else if (marketType === 'seller') {
        minTypicalPct = 2;
        maxTypicalPct = 5;
      }

      const minTypicalEMD = purchasePrice * (minTypicalPct / 100);
      const maxTypicalEMD = purchasePrice * (maxTypicalPct / 100);

      // Calculate protection score (0-100)
      let protectionScore = 100;
      if (!hasInspection) protectionScore -= 30;
      if (!hasFinancing) protectionScore -= 25;
      if (!hasAppraisal) protectionScore -= 20;
      if (hasHomeSale) protectionScore -= 10; // Actually increases risk if it falls through

      // Calculate risk score (0-100, higher = more risk)
      let riskScore = 0;
      if (!hasInspection) riskScore += 30;
      if (!hasFinancing) riskScore += 25;
      if (!hasAppraisal) riskScore += 20;
      if (hasHomeSale) riskScore += 15;
      if (commitment === 'low') riskScore += 20;
      else if (commitment === 'medium') riskScore += 10;

      // Calculate acceptance probability
      let acceptanceProbability = 50;
      if (marketType === 'hot') acceptanceProbability -= 20;
      else if (marketType === 'seller') acceptanceProbability -= 10;
      else if (marketType === 'buyer') acceptanceProbability += 20;

      if (emdPct >= 3) acceptanceProbability += 15;
      else if (emdPct >= 2) acceptanceProbability += 10;
      else if (emdPct < 1) acceptanceProbability -= 15;

      if (!hasInspection) acceptanceProbability += 10;
      if (!hasFinancing) acceptanceProbability += 10;
      if (!hasAppraisal) acceptanceProbability += 5;
      if (hasHomeSale) acceptanceProbability -= 20;

      acceptanceProbability = Math.max(0, Math.min(100, acceptanceProbability));

      // Risk level
      let riskLevel = 'Low';
      if (riskScore > 60) riskLevel = 'High';
      else if (riskScore > 30) riskLevel = 'Medium';

      // Protection level
      let protectionLevel = 'High';
      if (protectionScore < 40) protectionLevel = 'Low';
      else if (protectionScore < 70) protectionLevel = 'Medium';

      // Recommendation
      let competitiveness = 'Moderate';
      if (emdPct >= 3 && !hasInspection && !hasAppraisal) competitiveness = 'Very High';
      else if (emdPct < 1 || hasHomeSale) competitiveness = 'Low';
      else if (emdPct >= 2.5) competitiveness = 'High';

      return [
        {
          label: 'Earnest Money Deposit Amount',
          value: `$${emdAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'EMD as % of Purchase Price',
          value: `${(emdPct * 100).toFixed(2)}%`,
        },
        {
          label: `Typical Range for ${marketType === 'hot' ? 'Hot' : marketType === 'seller' ? "Seller's" : marketType === 'buyer' ? "Buyer's" : 'Balanced'} Market`,
          value: `$${minTypicalEMD.toLocaleString('en-US')} - $${maxTypicalEMD.toLocaleString('en-US')} (${minTypicalPct}%-${maxTypicalPct}%)`,
        },
        {
          label: 'Your EMD Position',
          value: emdAmount < minTypicalEMD ? 'Below Market Range' : emdAmount > maxTypicalEMD ? 'Above Market Range' : 'Within Market Range',
        },
        {
          label: 'Contingency Protection Score',
          value: `${protectionScore}/100 - ${protectionLevel} Protection`,
          isHighlighted: protectionScore < 40,
        },
        {
          label: 'Risk of Forfeiture Score',
          value: `${riskScore}/100 - ${riskLevel} Risk`,
          isHighlighted: riskScore > 60,
        },
        {
          label: 'Active Contingencies',
          value: `${[hasInspection, hasFinancing, hasAppraisal, hasHomeSale].filter(Boolean).length} of 4`,
        },
        {
          label: 'Offer Competitiveness',
          value: competitiveness,
        },
        {
          label: 'Estimated Acceptance Probability',
          value: `${acceptanceProbability}%`,
          isHighlighted: acceptanceProbability > 70,
        },
        {
          label: 'Maximum Amount at Risk',
          value: `$${emdAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Earnest Money Deposits in Real Estate',
    content: `
      <h2>What is an Earnest Money Deposit?</h2>
      <p>An earnest money deposit (EMD), also called a good faith deposit, is money that a buyer puts down to demonstrate serious intent to purchase a property. The deposit is typically held in escrow and applied toward the down payment and closing costs if the sale completes successfully.</p>

      <h3>How Much Should You Deposit?</h3>
      <p>Typical earnest money deposits vary by market:</p>
      <ul>
        <li><strong>Buyer's Market:</strong> 0.5% - 2% of purchase price</li>
        <li><strong>Balanced Market:</strong> 1% - 3% of purchase price</li>
        <li><strong>Seller's Market:</strong> 2% - 5% of purchase price</li>
        <li><strong>Hot Market/Bidding Wars:</strong> 3% - 10% or more of purchase price</li>
        <li><strong>Luxury Homes:</strong> Often 10% or more</li>
      </ul>

      <h3>When Can You Lose Your Earnest Money?</h3>
      <p>You risk forfeiting your deposit if:</p>
      <ul>
        <li><strong>Cold Feet:</strong> You simply change your mind without a valid contingency</li>
        <li><strong>Missed Deadlines:</strong> Fail to meet contractual deadlines</li>
        <li><strong>Financing Denial (no contingency):</strong> Can't secure financing and waived financing contingency</li>
        <li><strong>Low Appraisal (no contingency):</strong> Property appraises below price and you waived appraisal contingency</li>
        <li><strong>Breach of Contract:</strong> Violate terms of the purchase agreement</li>
        <li><strong>Expired Contingencies:</strong> Try to back out after contingency periods have passed</li>
      </ul>

      <h3>Protecting Your Earnest Money: Key Contingencies</h3>
      <ul>
        <li><strong>Inspection Contingency:</strong> Exit if major defects are found (usually 7-17 days)</li>
        <li><strong>Financing Contingency:</strong> Exit if you can't secure a mortgage (usually 30-45 days)</li>
        <li><strong>Appraisal Contingency:</strong> Exit if property doesn't appraise for purchase price</li>
        <li><strong>Title Contingency:</strong> Exit if title issues are discovered</li>
        <li><strong>Home Sale Contingency:</strong> Exit if you can't sell your current home</li>
        <li><strong>Attorney Review:</strong> Attorney can review and potentially void contract (varies by state)</li>
      </ul>

      <h3>Strategic Considerations for Deposit Amount</h3>
      <p><strong>Larger Deposits (3-10%):</strong></p>
      <ul>
        <li>Shows strong commitment and financial strength</li>
        <li>Makes offer more competitive in multiple-offer situations</li>
        <li>May convince seller to accept lower price or better terms</li>
        <li>Signals to seller you're serious and unlikely to back out</li>
        <li>But: More money at risk if deal falls through</li>
      </ul>

      <p><strong>Smaller Deposits (0.5-2%):</strong></p>
      <ul>
        <li>Less money at risk if deal doesn't close</li>
        <li>Keeps more cash liquid for other expenses</li>
        <li>Appropriate in buyer's markets</li>
        <li>May be acceptable for lower-priced homes</li>
        <li>But: May signal weak commitment or financial constraints</li>
      </ul>

      <h3>Where Is Earnest Money Held?</h3>
      <p>Earnest money is typically held by:</p>
      <ul>
        <li><strong>Title Company:</strong> Most common, neutral third party</li>
        <li><strong>Escrow Company:</strong> Especially common in Western states</li>
        <li><strong>Real Estate Brokerage:</strong> Buyer's or seller's agent's trust account</li>
        <li><strong>Attorney:</strong> In attorney-closing states</li>
      </ul>

      <h3>Important Timeline Considerations</h3>
      <ul>
        <li><strong>Due Date:</strong> Usually within 3 days of accepted offer</li>
        <li><strong>Inspection Period:</strong> Typically 7-17 days from acceptance</li>
        <li><strong>Financing Contingency:</strong> Usually 30-45 days</li>
        <li><strong>Appraisal Timing:</strong> Typically within financing contingency period</li>
        <li><strong>Closing:</strong> When EMD is applied to down payment/closing costs</li>
      </ul>

      <h3>What Happens to Earnest Money at Closing?</h3>
      <p>When the sale successfully closes:</p>
      <ul>
        <li>Earnest money is credited toward down payment</li>
        <li>If EMD exceeds down payment needs, it goes toward closing costs</li>
        <li>Any remaining amount after down payment and closing costs is refunded</li>
        <li>The credit appears on your closing disclosure statement</li>
      </ul>

      <h3>Earnest Money Disputes</h3>
      <p>If buyer and seller disagree on EMD refund:</p>
      <ul>
        <li>Escrow holder cannot release funds without agreement from both parties</li>
        <li>May require mediation or arbitration per contract terms</li>
        <li>Court order may be necessary in serious disputes</li>
        <li>Attorney fees can exceed EMD amount in prolonged disputes</li>
        <li>Most purchase agreements include dispute resolution procedures</li>
      </ul>

      <h3>State-Specific Considerations</h3>
      <ul>
        <li><strong>California:</strong> Typically 1-3%, higher in competitive markets</li>
        <li><strong>New York:</strong> Often 10% for co-ops and condos</li>
        <li><strong>Florida:</strong> Usually 3-5%, held in escrow account</li>
        <li><strong>Texas:</strong> Typically 1-2%, option fee separate</li>
        <li><strong>Massachusetts:</strong> Often 5% with formal purchase and sale agreement</li>
      </ul>

      <h3>Red Flags and Warning Signs</h3>
      <p>Be cautious if:</p>
      <ul>
        <li>Seller requests deposit be held in their personal account</li>
        <li>Unusually large deposit required (>10% for standard homes)</li>
        <li>No clear escrow holder specified</li>
        <li>Seller pressures you to waive all contingencies</li>
        <li>Short or non-existent contingency periods</li>
        <li>Vague refund conditions in purchase agreement</li>
      </ul>

      <h3>Tax Implications</h3>
      <ul>
        <li>Earnest money is not tax-deductible</li>
        <li>Forfeited EMD is not tax-deductible for buyer</li>
        <li>Seller receiving forfeited EMD may owe taxes on it as income</li>
        <li>Interest earned on EMD in escrow usually goes to buyer</li>
      </ul>

      <h3>Best Practices for Buyers</h3>
      <ul>
        <li>Read all contingency clauses carefully before signing</li>
        <li>Mark all deadlines on your calendar with alerts</li>
        <li>Get pre-approved for mortgage before making offer</li>
        <li>Schedule inspection immediately after acceptance</li>
        <li>Keep all communication in writing</li>
        <li>Work with experienced real estate agent and attorney</li>
        <li>Don't waive contingencies unless absolutely necessary and you're confident</li>
        <li>Use certified or cashier's check for deposit</li>
        <li>Get receipt from escrow holder</li>
      </ul>

      <h3>Making a Competitive Offer While Protecting Your Deposit</h3>
      <ul>
        <li>Offer higher purchase price rather than waiving contingencies</li>
        <li>Shorten contingency periods instead of eliminating them</li>
        <li>Increase earnest money but keep contingencies</li>
        <li>Offer all-cash if possible (still keep inspection contingency)</li>
        <li>Be flexible on closing and possession dates</li>
        <li>Write personal letter to seller (where allowed)</li>
        <li>Get pre-approval from reputable lender</li>
      </ul>

      <p>Use this calculator to determine the right earnest money deposit amount and assess your risk of forfeiture based on your specific situation and market conditions.</p>
    `
  },
};

export { EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT };
