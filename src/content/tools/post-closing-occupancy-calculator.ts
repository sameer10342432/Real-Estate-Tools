import { CalculatorContent } from '@/types';

const POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Post-Closing Occupancy Calculator',
  description: 'Calculate costs, risks, and legal implications of post-closing occupancy agreements for both buyers and sellers.',
  icon: 'Icon',
  slug: 'post-closing-occupancy-calculator',
  category: 'Additional Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: '600000',
      },
      {
        name: 'occupancyDays',
        label: 'Occupancy Period (Days)',
        type: 'number',
        defaultValue: '21',
      },
      {
        name: 'dailyRate',
        label: 'Daily Occupancy Rate ($)',
        type: 'number',
        defaultValue: '200',
      },
      {
        name: 'securityDeposit',
        label: 'Security/Escrow Holdback ($)',
        type: 'number',
        defaultValue: '10000',
      },
      {
        name: 'perDiemPenalty',
        label: 'Per Diem Penalty for Overstay ($)',
        type: 'number',
        defaultValue: '500',
      },
      {
        name: 'insuranceCost',
        label: 'Additional Insurance Cost ($)',
        type: 'number',
        defaultValue: '300',
      },
      {
        name: 'perspective',
        label: 'Calculate From',
        type: 'select',
        options: [
          { value: 'seller', label: 'Seller Perspective' },
          { value: 'buyer', label: 'Buyer Perspective' },
        ],
        defaultValue: 'seller',
      },
    ],
    calculate: (values) => {
      const purchasePrice = Number(values.purchasePrice);
      const occupancyDays = Number(values.occupancyDays);
      const dailyRate = Number(values.dailyRate);
      const securityDeposit = Number(values.securityDeposit);
      const perDiemPenalty = Number(values.perDiemPenalty);
      const insuranceCost = Number(values.insuranceCost);
      const perspective = values.perspective;

      // Calculate total occupancy cost
      const totalOccupancyCost = dailyRate * occupancyDays;

      // Calculate buyer's perspective
      const buyerIncome = totalOccupancyCost;
      const buyerRisk = purchasePrice * 0.02; // 2% risk estimate
      const buyerNetBenefit = buyerIncome - insuranceCost;

      // Calculate seller's perspective
      const sellerCost = totalOccupancyCost + insuranceCost;
      const sellerCostPercentage = (sellerCost / purchasePrice) * 100;

      // Risk calculations
      const overstayRisk = perDiemPenalty * 10; // Estimated 10 days overstay risk
      const totalRiskExposure = securityDeposit + overstayRisk;

      // Legal considerations
      const tenancyRiskDays = occupancyDays > 30 ? 'High (30+ days may create tenancy)' : 'Low';

      // Monthly equivalent
      const monthlyEquivalentRate = dailyRate * 30;

      if (perspective === 'seller') {
        return [
          {
            label: 'Daily Occupancy Rate',
            value: `$${dailyRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Total Occupancy Cost',
            value: `$${totalOccupancyCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            isHighlighted: true,
          },
          {
            label: 'Insurance Premium',
            value: `$${insuranceCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Total Seller Cost',
            value: `$${sellerCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            isHighlighted: true,
          },
          {
            label: 'Cost as % of Purchase Price',
            value: `${sellerCostPercentage.toFixed(3)}%`,
          },
          {
            label: 'Security/Escrow Holdback at Risk',
            value: `$${securityDeposit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Daily Overstay Penalty',
            value: `$${perDiemPenalty.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/day`,
          },
          {
            label: 'Estimated 10-Day Overstay Cost',
            value: `$${overstayRisk.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Tenancy Rights Risk',
            value: tenancyRiskDays,
            isHighlighted: occupancyDays > 30,
          },
        ];
      } else {
        return [
          {
            label: 'Daily Occupancy Rate Received',
            value: `$${dailyRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Total Occupancy Income',
            value: `$${buyerIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            isHighlighted: true,
          },
          {
            label: 'Additional Insurance Cost',
            value: `$${insuranceCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Net Income to Buyer',
            value: `$${buyerNetBenefit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            isHighlighted: true,
          },
          {
            label: 'Security/Escrow Protection',
            value: `$${securityDeposit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Daily Penalty for Overstay',
            value: `$${perDiemPenalty.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/day`,
          },
          {
            label: 'Estimated Property Risk Exposure',
            value: `$${buyerRisk.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          },
          {
            label: 'Monthly Rate Equivalent',
            value: `$${monthlyEquivalentRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/month`,
          },
          {
            label: 'Tenancy Rights Risk',
            value: tenancyRiskDays,
            isHighlighted: occupancyDays > 30,
          },
        ];
      }
    },
  },
  article: {
    title: 'Understanding Post-Closing Occupancy Agreements in Real Estate',
    content: `
      <h2>What is Post-Closing Occupancy?</h2>
      <p>Post-closing occupancy (also known as post-settlement occupancy or use and occupancy agreement) is an arrangement where the seller remains in the property after the closing date as a licensee, not a tenant. This differs from a rent-back agreement and has important legal implications.</p>

      <h3>Key Differences: Post-Closing Occupancy vs. Rent-Back</h3>
      <table>
        <tr>
          <th>Aspect</th>
          <th>Post-Closing Occupancy</th>
          <th>Rent-Back Agreement</th>
        </tr>
        <tr>
          <td>Legal Status</td>
          <td>Licensee (guest)</td>
          <td>Tenant</td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>Usually under 30 days</td>
          <td>Can be 30+ days</td>
        </tr>
        <tr>
          <td>Eviction Process</td>
          <td>No formal eviction needed</td>
          <td>Requires formal eviction</td>
        </tr>
        <tr>
          <td>Legal Rights</td>
          <td>Limited tenant protections</td>
          <td>Full tenant rights</td>
        </tr>
      </table>

      <h3>When Post-Closing Occupancy Makes Sense</h3>
      <ul>
        <li>Short-term stay needed (under 30 days)</li>
        <li>Coordinating move-out with new home purchase</li>
        <li>Waiting for moving company availability</li>
        <li>School year considerations</li>
        <li>Job relocation timing</li>
        <li>Construction delays on new home</li>
      </ul>

      <h3>Calculating Occupancy Rates</h3>
      <p>Common methods for determining daily occupancy fees:</p>
      <ul>
        <li><strong>PITI Method:</strong> Buyer's monthly payment divided by 30</li>
        <li><strong>Market Rate:</strong> Comparable short-term rental rates</li>
        <li><strong>Premium Method:</strong> Market rate plus 20-50% premium</li>
        <li><strong>Percentage Method:</strong> 0.3-0.5% of purchase price per month</li>
      </ul>

      <h3>Essential Terms to Include</h3>
      <ul>
        <li><strong>Occupancy Period:</strong> Exact start and end dates</li>
        <li><strong>Daily Rate:</strong> Per-day occupancy fee</li>
        <li><strong>Security/Escrow:</strong> Funds held to ensure compliance</li>
        <li><strong>Per Diem Penalties:</strong> Daily penalties for overstaying</li>
        <li><strong>Insurance Requirements:</strong> Who carries what coverage</li>
        <li><strong>Maintenance Obligations:</strong> Seller's responsibilities</li>
        <li><strong>Utilities:</strong> Who pays for what</li>
        <li><strong>Property Condition:</strong> Standards for move-out</li>
        <li><strong>Access Rights:</strong> Buyer's right to inspect</li>
      </ul>

      <h3>Risks for Sellers</h3>
      <ul>
        <li><strong>Financial Cost:</strong> Daily fees add up quickly</li>
        <li><strong>Penalty Exposure:</strong> Expensive penalties for overstaying</li>
        <li><strong>Security at Risk:</strong> May lose escrow holdback</li>
        <li><strong>No Ownership Rights:</strong> Subject to buyer's rules</li>
        <li><strong>Limited Tenant Protections:</strong> Can be removed more easily</li>
        <li><strong>Insurance Gaps:</strong> May not be covered under buyer's policy</li>
      </ul>

      <h3>Risks for Buyers</h3>
      <ul>
        <li><strong>Property Damage:</strong> Seller may damage property</li>
        <li><strong>Overstay Issues:</strong> Seller may refuse to leave</li>
        <li><strong>Insurance Complications:</strong> Coverage gaps during occupancy</li>
        <li><strong>Delayed Possession:</strong> Can't move in or make changes</li>
        <li><strong>Tenant Rights Creation:</strong> 30+ days may create tenancy</li>
        <li><strong>Utility Issues:</strong> Complications with account transfers</li>
      </ul>

      <h3>Legal Considerations by State</h3>
      <p>Post-closing occupancy laws vary by state:</p>
      <ul>
        <li><strong>30-Day Rule:</strong> Many states grant tenant rights after 30 days</li>
        <li><strong>Security Deposit Laws:</strong> Some states regulate maximum amounts</li>
        <li><strong>Eviction Requirements:</strong> Procedures vary by jurisdiction</li>
        <li><strong>Habitability Standards:</strong> May apply depending on duration</li>
        <li><strong>Written Agreement Required:</strong> Always put terms in writing</li>
      </ul>

      <h3>Insurance Requirements</h3>
      <ul>
        <li><strong>Homeowner's Policy:</strong> Buyer must notify insurer</li>
        <li><strong>Renter's Insurance:</strong> Seller should obtain coverage</li>
        <li><strong>Liability Coverage:</strong> Both parties need protection</li>
        <li><strong>Vacant Property Rider:</strong> May be needed if seller's belongings removed</li>
        <li><strong>Additional Insured:</strong> Consider adding seller to buyer's policy</li>
      </ul>

      <h3>Escrow/Security Deposit Best Practices</h3>
      <ul>
        <li>Hold 1-5% of purchase price in escrow</li>
        <li>Define clear release conditions</li>
        <li>Include penalties for overstay and damage</li>
        <li>Specify timeline for refund after move-out</li>
        <li>Require final walkthrough inspection</li>
        <li>Detail conditions for deposit forfeiture</li>
      </ul>

      <h3>Per Diem Penalty Structures</h3>
      <p>Common penalty approaches for overstay:</p>
      <ul>
        <li><strong>Double Rate:</strong> 2x the daily occupancy rate</li>
        <li><strong>Triple Rate:</strong> 3x the daily rate after 3-day grace period</li>
        <li><strong>Market Rate Plus:</strong> Market rent plus 100-200%</li>
        <li><strong>Escalating:</strong> Increases each day (e.g., $200, $300, $400...)</li>
        <li><strong>Maximum:</strong> Cap at escrow amount to ensure collectability</li>
      </ul>

      <h3>Tax Implications</h3>
      <ul>
        <li>Occupancy fees may be taxable income to buyer</li>
        <li>Seller may be able to deduct occupancy fees (consult tax advisor)</li>
        <li>Could affect capital gains exclusion timing</li>
        <li>May impact property tax reassessment</li>
        <li>Escrow interest may be taxable</li>
      </ul>

      <h3>Red Flags and Warning Signs</h3>
      <p>Avoid or carefully structure occupancy if:</p>
      <ul>
        <li>Seller requests over 60 days occupancy</li>
        <li>Seller has no backup housing plan</li>
        <li>Seller is buying a home that hasn't broken ground</li>
        <li>Local laws heavily favor tenants</li>
        <li>Seller resists reasonable security deposit</li>
        <li>Property has condition issues</li>
      </ul>

      <h3>Best Practices for Success</h3>
      <ul>
        <li><strong>Written Agreement:</strong> Never rely on verbal arrangements</li>
        <li><strong>Attorney Review:</strong> Have lawyer review all terms</li>
        <li><strong>Clear Exit Strategy:</strong> Define exactly what happens if seller won't leave</li>
        <li><strong>Daily Fees:</strong> Charge daily, not monthly, to avoid tenancy</li>
        <li><strong>Adequate Holdback:</strong> Security should cover all potential costs</li>
        <li><strong>Pre-Occupancy Inspection:</strong> Document property condition</li>
        <li><strong>Communication Plan:</strong> Regular check-ins during occupancy</li>
        <li><strong>Move-Out Checklist:</strong> Provide clear expectations</li>
      </ul>

      <p>Use this calculator to analyze the costs and risks of post-closing occupancy from both buyer and seller perspectives.</p>
    `
  },
};

export { POST_CLOSING_OCCUPANCY_CALCULATOR_CONTENT };
