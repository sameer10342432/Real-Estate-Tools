import { CalculatorContent } from '@/types';

const ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Escrow Holdback (Repairs) Calculator',
  description: 'Calculate escrow holdback amounts for repairs, analyze costs, timelines, and risks of closing with incomplete repairs or defects.',
  icon: 'Icon',
  slug: 'escrow-holdback-repairs-calculator',
  category: 'Additional Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: '400000',
      },
      {
        name: 'estimatedRepairCost',
        label: 'Estimated Repair Cost ($)',
        type: 'number',
        defaultValue: '15000',
      },
      {
        name: 'holdbackMultiplier',
        label: 'Holdback Multiplier',
        type: 'select',
        options: [
          { value: '1', label: '1x - Match Exact Cost' },
          { value: '1.25', label: '1.25x - 25% Buffer' },
          { value: '1.5', label: '1.5x - 50% Buffer (Standard)' },
          { value: '2', label: '2x - 100% Buffer (High Risk)' },
        ],
        defaultValue: '1.5',
      },
      {
        name: 'repairTimeframe',
        label: 'Repair Completion Timeframe (Days)',
        type: 'number',
        defaultValue: '60',
      },
      {
        name: 'repairType',
        label: 'Type of Repair',
        type: 'select',
        options: [
          { value: 'minor', label: 'Minor (Cosmetic, Paint, etc.)' },
          { value: 'moderate', label: 'Moderate (HVAC, Appliances)' },
          { value: 'major', label: 'Major (Roof, Foundation, Plumbing)' },
          { value: 'structural', label: 'Structural/Safety Issues' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'lenderApproval',
        label: 'Lender Approval',
        type: 'select',
        options: [
          { value: 'yes', label: 'Lender Approves Holdback' },
          { value: 'no', label: 'Lender Does Not Allow Holdback' },
          { value: 'uncertain', label: 'Uncertain/Not Yet Confirmed' },
        ],
        defaultValue: 'yes',
      },
    ],
    calculate: (values) => {
      const purchasePrice = Number(values.purchasePrice);
      const repairCost = Number(values.estimatedRepairCost);
      const multiplier = Number(values.holdbackMultiplier);
      const timeframe = Number(values.repairTimeframe);
      const repairType = values.repairType;
      const lenderApproval = values.lenderApproval;

      // Calculate holdback amount
      const recommendedHoldback = repairCost * multiplier;

      // Calculate maximum lender-allowed holdback (typically lesser of $10K or 3% of purchase price for conventional loans)
      const maxLenderHoldback = Math.min(10000, purchasePrice * 0.03);

      // Calculate holdback as percentage
      const holdbackPercentage = (recommendedHoldback / purchasePrice) * 100;

      // Determine if lender approval likely
      const lenderApprovalLikely = recommendedHoldback <= maxLenderHoldback && 
                                    repairType !== 'structural' && 
                                    timeframe <= 90;

      // Calculate risk score
      let riskScore = 0;
      if (repairType === 'structural') riskScore += 40;
      else if (repairType === 'major') riskScore += 30;
      else if (repairType === 'moderate') riskScore += 15;
      else riskScore += 5;

      if (timeframe > 90) riskScore += 30;
      else if (timeframe > 60) riskScore += 20;
      else if (timeframe > 30) riskScore += 10;

      if (multiplier < 1.5) riskScore += 15;
      if (lenderApproval === 'no') riskScore += 20;
      else if (lenderApproval === 'uncertain') riskScore += 10;

      // Determine risk level
      let riskLevel = 'Low';
      if (riskScore > 60) riskLevel = 'High';
      else if (riskScore > 35) riskLevel = 'Medium';

      // Calculate administrative costs
      const escrowFees = 250;
      const inspectionFollowUp = 150;
      const additionalCosts = escrowFees + inspectionFollowUp;

      // Total buyer protection
      const totalBuyerProtection = recommendedHoldback;

      // Seller net proceeds impact
      const sellerProceedsReduction = recommendedHoldback;

      return [
        {
          label: 'Estimated Repair Cost',
          value: `$${repairCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Recommended Holdback Amount',
          value: `$${recommendedHoldback.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Holdback as % of Purchase Price',
          value: `${holdbackPercentage.toFixed(2)}%`,
        },
        {
          label: 'Maximum Lender-Allowed Holdback (Conventional)',
          value: `$${maxLenderHoldback.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Lender Approval Likelihood',
          value: lenderApprovalLikely ? 'Likely Approved' : 'May Require Cash or Alternate Solution',
          isHighlighted: !lenderApprovalLikely,
        },
        {
          label: 'Repair Completion Timeframe',
          value: `${timeframe} days`,
        },
        {
          label: 'Additional Escrow & Inspection Costs',
          value: `$${additionalCosts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Buyer Protection',
          value: `$${totalBuyerProtection.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Seller Net Proceeds Reduction',
          value: `$${sellerProceedsReduction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Overall Risk Assessment',
          value: `${riskLevel} Risk (Score: ${riskScore}/100)`,
          isHighlighted: riskLevel === 'High',
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Escrow Holdbacks for Repairs in Real Estate',
    content: `
      <h2>What is an Escrow Holdback?</h2>
      <p>An escrow holdback (also called repair escrow or holdback agreement) is an arrangement where a portion of the seller's proceeds is held in escrow until specified repairs or improvements are completed after closing. This allows the transaction to proceed even when certain repairs can't be finished before the closing date.</p>

      <h3>When Escrow Holdbacks Are Used</h3>
      <ul>
        <li><strong>Weather-Dependent Repairs:</strong> Roofing or exterior work that can't be done in winter</li>
        <li><strong>Seasonal Issues:</strong> HVAC repairs that can only be tested in certain seasons</li>
        <li><strong>Contractor Availability:</strong> Repairs requiring specialized contractors with long wait times</li>
        <li><strong>Minor Defects:</strong> Issues discovered late in process that don't warrant delaying closing</li>
        <li><strong>Time Constraints:</strong> Buyer or seller needs to close by specific date</li>
        <li><strong>Lender Requirements:</strong> Repairs required for loan approval</li>
        <li><strong>Code Violations:</strong> Issues that must be corrected for occupancy permit</li>
      </ul>

      <h3>How Escrow Holdbacks Work</h3>
      <ol>
        <li><strong>Identify Repairs:</strong> Inspection reveals issues needing correction</li>
        <li><strong>Get Estimates:</strong> Obtain bids from licensed contractors</li>
        <li><strong>Negotiate Terms:</strong> Buyer and seller agree on holdback amount and timeline</li>
        <li><strong>Document Agreement:</strong> Terms added to purchase contract or separate addendum</li>
        <li><strong>Close with Holdback:</strong> Funds held by escrow company or title company</li>
        <li><strong>Complete Repairs:</strong> Seller arranges and completes work</li>
        <li><strong>Verification:</strong> Buyer inspects completed work</li>
        <li><strong>Release Funds:</strong> Escrow releases money to seller (or directly to contractor)</li>
      </ol>

      <h3>Calculating Holdback Amounts</h3>
      <p>Common methods for determining holdback amounts:</p>
      <ul>
        <li><strong>Exact Cost (1x):</strong> Match estimated repair cost exactly</li>
        <li><strong>125% Method:</strong> Add 25% buffer for unexpected issues</li>
        <li><strong>150% Method (Standard):</strong> Add 50% buffer - most common approach</li>
        <li><strong>200% Method:</strong> Double estimate for high-risk or uncertain repairs</li>
        <li><strong>Three Bids Plus 20%:</strong> Average of three contractor bids plus 20%</li>
      </ul>

      <h3>Lender Restrictions on Holdbacks</h3>
      <p><strong>Conventional Loans:</strong></p>
      <ul>
        <li>Many lenders limit holdbacks to lesser of $10,000 or 3% of purchase price</li>
        <li>Repairs must be non-structural and non-safety-related</li>
        <li>Must be completed within 60-90 days</li>
        <li>May require additional documentation and fees</li>
      </ul>

      <p><strong>FHA Loans:</strong></p>
      <ul>
        <li>Generally do not allow repair escrow holdbacks</li>
        <li>All FHA-required repairs must be completed before closing</li>
        <li>Limited exceptions for weather-related delays with supplemental escrow</li>
      </ul>

      <p><strong>VA Loans:</strong></p>
      <ul>
        <li>Similar to FHA - repairs usually must be completed before closing</li>
        <li>VA may allow holdbacks for weather-dependent repairs</li>
        <li>Maximum typically limited to $10,000</li>
      </ul>

      <h3>Key Terms to Include in Agreement</h3>
      <ul>
        <li><strong>Holdback Amount:</strong> Specific dollar amount held in escrow</li>
        <li><strong>Repair Scope:</strong> Detailed description of work to be completed</li>
        <li><strong>Timeline:</strong> Deadline for completion (typically 30-90 days)</li>
        <li><strong>Contractor Requirements:</strong> Licensed, insured, permits required</li>
        <li><strong>Inspection Rights:</strong> Buyer's right to verify completion</li>
        <li><strong>Release Conditions:</strong> What triggers fund release</li>
        <li><strong>Default Provisions:</strong> What happens if repairs not completed</li>
        <li><strong>Dispute Resolution:</strong> Process for disagreements</li>
      </ul>

      <h3>Risks for Buyers</h3>
      <ul>
        <li><strong>Incomplete Repairs:</strong> Seller may not complete work as promised</li>
        <li><strong>Substandard Work:</strong> Repairs done poorly or not to code</li>
        <li><strong>Cost Overruns:</strong> Actual cost exceeds holdback amount</li>
        <li><strong>Timeline Delays:</strong> Repairs take longer than expected</li>
        <li><strong>Seller Bankruptcy:</strong> If seller becomes insolvent before completing repairs</li>
        <li><strong>Unexpected Issues:</strong> Repairs reveal additional problems</li>
        <li><strong>Legal Battles:</strong> Disputes over quality or completion</li>
      </ul>

      <h3>Risks for Sellers</h3>
      <ul>
        <li><strong>Delayed Proceeds:</strong> Don't receive full payment at closing</li>
        <li><strong>Excessive Holdback:</strong> Amount may exceed actual repair cost</li>
        <li><strong>Buyer Disputes:</strong> Buyer may claim work unsatisfactory</li>
        <li><strong>Ongoing Responsibility:</strong> Must coordinate repairs after selling</li>
        <li><strong>Lost Interest:</strong> Money held earns no or minimal interest</li>
        <li><strong>Additional Costs:</strong> May need insurance or permits for repairs</li>
      </ul>

      <h3>Alternatives to Escrow Holdbacks</h3>
      <ul>
        <li><strong>Seller Completes Repairs:</strong> Delay closing until repairs done</li>
        <li><strong>Buyer Accepts As-Is:</strong> Negotiate lower price, buyer handles repairs</li>
        <li><strong>Seller Credit:</strong> Credit toward closing costs instead of holdback</li>
        <li><strong>Price Reduction:</strong> Reduce purchase price by estimated repair cost</li>
        <li><strong>Buyer's Repair Escrow:</strong> Buyer holds own money for post-closing repairs</li>
        <li><strong>Third-Party Guarantee:</strong> Bonded contractor guarantees completion</li>
      </ul>

      <h3>Best Practices for Buyers</h3>
      <ul>
        <li>Always holdback 150-200% of estimated repair cost</li>
        <li>Get three written bids from licensed contractors</li>
        <li>Specify licensed, insured contractors must be used</li>
        <li>Include permit requirements in agreement</li>
        <li>Set realistic but firm completion deadlines</li>
        <li>Reserve right to inspect work before release</li>
        <li>Consider having escrow pay contractor directly upon completion</li>
        <li>Include penalty clauses for missed deadlines</li>
        <li>Require lien waivers before releasing funds</li>
      </ul>

      <h3>Best Practices for Sellers</h3>
      <ul>
        <li>Complete repairs before closing whenever possible</li>
        <li>Get multiple bids to ensure accurate estimates</li>
        <li>Pre-arrange contractors before agreeing to holdback</li>
        <li>Negotiate reasonable completion timeline</li>
        <li>Document condition with photos before and after</li>
        <li>Keep all receipts and invoices</li>
        <li>Communicate regularly with buyer during repairs</li>
        <li>Over-deliver on quality to ensure quick release</li>
      </ul>

      <h3>Red Flags and Warning Signs</h3>
      <p>Be cautious if:</p>
      <ul>
        <li>Holdback amount seems excessive compared to repair estimates</li>
        <li>Vague or undefined scope of work</li>
        <li>No specific completion deadline</li>
        <li>Unrealistic timeline for complex repairs</li>
        <li>No provision for inspecting completed work</li>
        <li>Seller has poor track record or financial issues</li>
        <li>Buyer demands seller use specific contractor</li>
      </ul>

      <h3>Tax and Legal Considerations</h3>
      <ul>
        <li><strong>Tax Treatment:</strong> Holdback may affect seller's capital gains calculation</li>
        <li><strong>Installment Sale:</strong> Could be treated as installment sale for tax purposes</li>
        <li><strong>Interest:</strong> Any interest earned on holdback typically goes to seller</li>
        <li><strong>Lien Rights:</strong> Contractors may have lien rights against property</li>
        <li><strong>Legal Review:</strong> Have attorney review holdback agreement</li>
      </ul>

      <p>Use this calculator to determine the appropriate escrow holdback amount and understand the risks and costs associated with closing before repairs are completed.</p>
    `
  },
};

export { ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT };
