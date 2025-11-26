import { CalculatorContent } from '@/types';

export const VERIFICATION_OF_RENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VOR (Verification of Rent) Calculator',
  description: 'Track and evaluate your rental payment history for mortgage qualification. Calculate VOR score, 12-month payment history status, and determine documentation quality for non-traditional credit.',
  icon: 'Icon',
  category: 'Mortgage Qualification',
  slug: 'verification-of-rent-calculator',
  metaTitle: 'VOR Calculator | Verification of Rent History Tool',
  metaDescription: 'Evaluate your rental payment history for mortgage qualification. Calculate VOR score, check 12-month history, and assess documentation quality.',
  article: {
    title: "Verification of Rent (VOR) Calculator: Rental History for Mortgage Approval",
    content: `
    <h2>What is Verification of Rent (VOR)?</h2>
    <p>Verification of Rent (VOR) is a mortgage underwriting process where lenders confirm your rental payment history with your landlord or property management company. The VOR documents how much rent you pay, how long you've been paying it, and most importantly, whether you've paid on time.</p>

    <p>VOR is particularly important for borrowers who:</p>
    <ul>
      <li>Have limited or thin credit files</li>
      <li>Are first-time homebuyers with no mortgage history</li>
      <li>Need to demonstrate payment responsibility</li>
      <li>Are using FHA loans with non-traditional credit</li>
      <li>Have credit scores that don't fully reflect their payment reliability</li>
    </ul>

    <h3>Why VOR Matters</h3>
    <p>Your rental payment history tells lenders a lot about your likelihood of paying your mortgage on time:</p>
    <ul>
      <li><strong>Payment Reliability:</strong> Shows you can handle a significant monthly housing expense</li>
      <li><strong>Housing Payment History:</strong> Rent is the closest equivalent to mortgage payments</li>
      <li><strong>Non-Traditional Credit:</strong> Can substitute for limited credit history</li>
      <li><strong>Character Assessment:</strong> Demonstrates financial responsibility</li>
      <li><strong>Risk Evaluation:</strong> Late rent payments predict higher mortgage default risk</li>
    </ul>

    <h2>VOR Requirements by Loan Type</h2>
    <p>Different loan programs have varying VOR requirements:</p>

    <h3>Conventional Loans (Fannie Mae/Freddie Mac)</h3>
    <table>
      <tr>
        <th>Requirement</th>
        <th>Standard</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>VOR Required</td>
        <td>Often optional</td>
        <td>May be required for borderline credit</td>
      </tr>
      <tr>
        <td>History Length</td>
        <td>12 months</td>
        <td>Most recent 12 months preferred</td>
      </tr>
      <tr>
        <td>Late Payments</td>
        <td>Evaluated case-by-case</td>
        <td>Multiple lates may affect approval</td>
      </tr>
      <tr>
        <td>Documentation</td>
        <td>VOR form or canceled checks</td>
        <td>Bank statements also acceptable</td>
      </tr>
    </table>

    <h3>FHA Loans</h3>
    <table>
      <tr>
        <th>Requirement</th>
        <th>Standard</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>VOR Required</td>
        <td>Yes (for non-traditional credit)</td>
        <td>Required if no credit score or thin file</td>
      </tr>
      <tr>
        <td>History Length</td>
        <td>12 months minimum</td>
        <td>Must show 12 consecutive months</td>
      </tr>
      <tr>
        <td>Late Payments</td>
        <td>Max 1 late (30-day) in 12 months</td>
        <td>0 late payments preferred</td>
      </tr>
      <tr>
        <td>Documentation</td>
        <td>VOR form preferred</td>
        <td>Canceled checks/bank statements as backup</td>
      </tr>
    </table>

    <h3>VA Loans</h3>
    <table>
      <tr>
        <th>Requirement</th>
        <th>Standard</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>VOR Required</td>
        <td>Depends on credit profile</td>
        <td>May be waived with strong credit</td>
      </tr>
      <tr>
        <td>History Length</td>
        <td>12 months</td>
        <td>Consistent with other programs</td>
      </tr>
      <tr>
        <td>Late Payments</td>
        <td>Evaluated in context</td>
        <td>Military deployments considered</td>
      </tr>
      <tr>
        <td>Documentation</td>
        <td>VOR form or alternative</td>
        <td>Military housing history also valid</td>
      </tr>
    </table>

    <h3>USDA Loans</h3>
    <table>
      <tr>
        <th>Requirement</th>
        <th>Standard</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>VOR Required</td>
        <td>Yes (for non-traditional credit)</td>
        <td>One of multiple tradelines needed</td>
      </tr>
      <tr>
        <td>History Length</td>
        <td>12 months</td>
        <td>Must be verifiable</td>
      </tr>
      <tr>
        <td>Late Payments</td>
        <td>Max 1 late (30-day) in 12 months</td>
        <td>Similar to FHA standards</td>
      </tr>
      <tr>
        <td>Documentation</td>
        <td>VOR form or canceled checks</td>
        <td>Private landlord acceptable</td>
      </tr>
    </table>

    <h2>Types of VOR Documentation</h2>
    <p>There are several ways to document your rental payment history:</p>

    <h3>VOR Form (Preferred Method)</h3>
    <p>A standardized form completed by your landlord or property manager:</p>
    <ul>
      <li>Includes tenant name and address</li>
      <li>Monthly rent amount</li>
      <li>Length of tenancy</li>
      <li>Payment history (on-time/late)</li>
      <li>Any NSF checks or bounced payments</li>
      <li>Landlord/manager signature and contact info</li>
    </ul>

    <h3>Canceled Checks or Bank Statements</h3>
    <p>Alternative documentation showing rent payments:</p>
    <ul>
      <li>12 months of canceled checks or bank statements</li>
      <li>Must show consistent monthly payments</li>
      <li>Payment amount should match lease</li>
      <li>Payee should be identifiable as landlord</li>
    </ul>

    <h3>Lease Agreement + Payment Proof</h3>
    <p>Combination of documents:</p>
    <ul>
      <li>Signed lease agreement showing rent amount</li>
      <li>Bank statements showing matching payments</li>
      <li>May need landlord contact for verification call</li>
    </ul>

    <h3>Electronic Payment Records</h3>
    <p>Modern payment verification:</p>
    <ul>
      <li>Venmo, Zelle, or PayPal records</li>
      <li>Online payment portal history</li>
      <li>Property management software records</li>
      <li>Rent reporting service documentation</li>
    </ul>

    <h2>Professional vs. Private Landlords</h2>
    <p>The type of landlord affects how easily your VOR can be verified:</p>

    <h3>Professional Landlord/Property Management Company</h3>
    <ul>
      <li><strong>Verification:</strong> Easy - has formal record-keeping systems</li>
      <li><strong>Documentation:</strong> Can provide official VOR form quickly</li>
      <li><strong>Payment Records:</strong> Maintains detailed payment histories</li>
      <li><strong>Late Payment Tracking:</strong> Precise records of any late payments</li>
      <li><strong>Credibility:</strong> High - lenders trust professional management</li>
    </ul>

    <h3>Private/Individual Landlord</h3>
    <ul>
      <li><strong>Verification:</strong> More challenging - may have informal records</li>
      <li><strong>Documentation:</strong> May need to complete unfamiliar VOR form</li>
      <li><strong>Payment Records:</strong> May rely on tenant-provided bank statements</li>
      <li><strong>Late Payment Tracking:</strong> May be informal or incomplete</li>
      <li><strong>Credibility:</strong> Moderate - lenders may require additional verification</li>
    </ul>

    <h3>Family Member as Landlord</h3>
    <ul>
      <li><strong>Verification:</strong> Difficult - potential conflict of interest</li>
      <li><strong>Documentation:</strong> Requires extensive supporting documentation</li>
      <li><strong>Payment Records:</strong> Bank statements essential</li>
      <li><strong>Credibility:</strong> Low - lenders are skeptical of family arrangements</li>
      <li><strong>Additional Requirements:</strong> May need lease, proof of fair market rent</li>
    </ul>

    <h2>Impact of Late Rent Payments</h2>
    <p>Late rent payments significantly affect your VOR evaluation:</p>

    <h3>Late Payment Definitions</h3>
    <table>
      <tr>
        <th>Classification</th>
        <th>Definition</th>
        <th>Impact on VOR</th>
      </tr>
      <tr>
        <td>On-Time</td>
        <td>Paid by due date or grace period end</td>
        <td>Positive - no negative impact</td>
      </tr>
      <tr>
        <td>Late (0-30 days)</td>
        <td>Paid after grace period but within 30 days</td>
        <td>Minor negative - may be overlooked if rare</td>
      </tr>
      <tr>
        <td>30-Day Late</td>
        <td>Paid 30+ days after due date</td>
        <td>Significant negative - lenders notice</td>
      </tr>
      <tr>
        <td>60-Day Late</td>
        <td>Paid 60+ days after due date</td>
        <td>Serious negative - may disqualify</td>
      </tr>
      <tr>
        <td>90+ Day Late</td>
        <td>Paid 90+ days after due date</td>
        <td>Severe - likely disqualification</td>
      </tr>
    </table>

    <h3>Late Payment Impact by Loan Type</h3>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>Acceptable Late Payments (12 months)</th>
        <th>Notes</th>
      </tr>
      <tr>
        <td>Conventional</td>
        <td>Case-by-case evaluation</td>
        <td>Strong compensating factors may help</td>
      </tr>
      <tr>
        <td>FHA</td>
        <td>Maximum 1 (30-day) late</td>
        <td>0 late payments strongly preferred</td>
      </tr>
      <tr>
        <td>VA</td>
        <td>Case-by-case evaluation</td>
        <td>Military circumstances considered</td>
      </tr>
      <tr>
        <td>USDA</td>
        <td>Maximum 1 (30-day) late</td>
        <td>Similar to FHA requirements</td>
      </tr>
    </table>

    <h2>VOR for Non-Traditional Credit</h2>
    <p>VOR is essential for borrowers building credit through non-traditional means:</p>

    <h3>What is Non-Traditional Credit?</h3>
    <p>Non-traditional credit refers to payment histories that don't appear on credit reports, such as:</p>
    <ul>
      <li>Rent payments</li>
      <li>Utility payments (electric, gas, water)</li>
      <li>Cell phone payments</li>
      <li>Insurance premium payments</li>
      <li>Childcare payments</li>
      <li>School tuition payments</li>
    </ul>

    <h3>FHA Non-Traditional Credit Requirements</h3>
    <p>For borrowers with no credit score or thin credit files, FHA requires:</p>
    <ul>
      <li><strong>Minimum 3 tradelines:</strong> Must document at least 3 non-traditional credit sources</li>
      <li><strong>12-month history:</strong> Each tradeline must have 12 months of payment history</li>
      <li><strong>Timely payments:</strong> Generally need 0-1 late payments across all tradelines</li>
      <li><strong>VOR as primary:</strong> Rent history is typically the most important tradeline</li>
    </ul>

    <h3>Building a Non-Traditional Credit Profile</h3>
    <p>If you're using VOR as part of non-traditional credit, consider also documenting:</p>
    <ul>
      <li><strong>Utility accounts:</strong> 12 months of on-time payments</li>
      <li><strong>Cell phone:</strong> 12 months of timely payments</li>
      <li><strong>Auto insurance:</strong> 12 months of premium payments</li>
      <li><strong>Health insurance:</strong> Premium payment history</li>
    </ul>

    <h2>How to Prepare for VOR Verification</h2>
    <p>Follow these steps to ensure smooth rent verification:</p>

    <h3>Before You Apply</h3>
    <ul>
      <li><strong>Pay Rent On Time:</strong> Make sure the last 12+ months are clean</li>
      <li><strong>Keep Records:</strong> Save all payment confirmations and bank statements</li>
      <li><strong>Know Your Landlord:</strong> Have current contact information ready</li>
      <li><strong>Review Your History:</strong> Know if any payments were late</li>
    </ul>

    <h3>Gather Documentation</h3>
    <ul>
      <li><strong>Lease Agreement:</strong> Current signed lease showing rent amount</li>
      <li><strong>Payment Proof:</strong> 12 months of canceled checks or bank statements</li>
      <li><strong>Landlord Contact:</strong> Name, phone, email, and address</li>
      <li><strong>Property Info:</strong> Full address and unit number</li>
    </ul>

    <h3>Prepare Your Landlord</h3>
    <ul>
      <li>Notify them that a lender may contact them</li>
      <li>Explain they may receive a VOR form</li>
      <li>Confirm they have accurate payment records</li>
      <li>Ask them to respond promptly to requests</li>
    </ul>

    <h2>Common VOR Issues and Solutions</h2>

    <h3>Issue 1: Landlord Unresponsive</h3>
    <p><strong>Problem:</strong> Landlord doesn't return VOR form or calls.</p>
    <p><strong>Solution:</strong> Provide alternative documentation - 12 months of bank statements showing consistent rent payments plus a copy of your lease. Contact landlord yourself and explain the urgency.</p>

    <h3>Issue 2: Cash Rent Payments</h3>
    <p><strong>Problem:</strong> You paid rent in cash with no paper trail.</p>
    <p><strong>Solution:</strong> Get a detailed letter from your landlord confirming payment history. Start paying by check or electronic transfer immediately. Consider using a rent reporting service going forward.</p>

    <h3>Issue 3: Rent Paid by Someone Else</h3>
    <p><strong>Problem:</strong> Roommate, parent, or partner paid the rent.</p>
    <p><strong>Solution:</strong> Document your contribution to the household. If you reimbursed them, show those payments. May need to establish your own rental history before applying.</p>

    <h3>Issue 4: Private Landlord with Poor Records</h3>
    <p><strong>Problem:</strong> Individual landlord doesn't have formal payment records.</p>
    <p><strong>Solution:</strong> Provide your own bank statements showing payments. Get a signed letter from landlord confirming tenancy and payment history. Include any receipts you may have.</p>

    <h3>Issue 5: Recent Move</h3>
    <p><strong>Problem:</strong> Just moved and don't have 12 months at current address.</p>
    <p><strong>Solution:</strong> Provide VOR from both current and previous landlord to cover 12-month period. Ensure there are no gaps in housing history.</p>

    <h2>Using This VOR Calculator</h2>
    <p>Enter your rental history details to evaluate your VOR status:</p>

    <h3>Input Fields</h3>
    <ul>
      <li><strong>Monthly Rent Amount:</strong> Your current monthly rent payment</li>
      <li><strong>Months of Rent History:</strong> How long you've been at current residence</li>
      <li><strong>Late Payments:</strong> Number of late payments in the last 12 months</li>
      <li><strong>Rent Paid By:</strong> Method of payment (check, electronic, cash)</li>
      <li><strong>Landlord Type:</strong> Professional property management or private individual</li>
    </ul>

    <h3>Calculator Results</h3>
    <ul>
      <li>VOR Score based on payment history</li>
      <li>12-month payment history status</li>
      <li>Late payment impact assessment</li>
      <li>Documentation quality rating</li>
      <li>Credit alternative eligibility</li>
      <li>Recommendations for improving VOR</li>
    </ul>

    <h2>Tips for Strengthening Your VOR</h2>
    <ul>
      <li><strong>Pay on Time:</strong> Even one late payment can impact your VOR</li>
      <li><strong>Use Traceable Payments:</strong> Checks or electronic payments create better paper trails</li>
      <li><strong>Keep Records:</strong> Save all payment confirmations and receipts</li>
      <li><strong>Maintain Good Relationship:</strong> A cooperative landlord makes verification easier</li>
      <li><strong>Consider Rent Reporting:</strong> Services that report rent to credit bureaus can help build credit</li>
      <li><strong>Document Everything:</strong> The more documentation, the better your VOR looks</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'monthlyRentAmount',
        label: 'Monthly Rent Amount ($)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'monthsOfRentHistory',
        label: 'Months of Rent History at Current Address',
        type: 'number',
        defaultValue: 18,
      },
      {
        name: 'latePayments',
        label: 'Number of Late Payments (Last 12 Months)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'rentPaidBy',
        label: 'How Rent is Paid',
        type: 'select',
        defaultValue: 'electronic',
        options: [
          { value: 'electronic', label: 'Electronic Transfer (ACH, Zelle, Venmo)' },
          { value: 'check', label: 'Personal Check' },
          { value: 'moneyOrder', label: 'Money Order/Cashiers Check' },
          { value: 'cash', label: 'Cash' },
        ],
      },
      {
        name: 'landlordType',
        label: 'Landlord Type',
        type: 'select',
        defaultValue: 'professional',
        options: [
          { value: 'professional', label: 'Professional Property Management Company' },
          { value: 'private', label: 'Private Individual Landlord' },
          { value: 'family', label: 'Family Member' },
        ],
      },
    ],
    results: [
      { label: 'VOR Score', isCurrency: false },
      { label: '12-Month Payment History Status', isCurrency: false },
      { label: 'Late Payment Impact', isCurrency: false },
      { label: 'Documentation Quality', isCurrency: false },
      { label: 'Non-Traditional Credit Eligibility', isCurrency: false },
      { label: 'Annual Rent Paid', isCurrency: true },
      { label: 'FHA/USDA Qualification Status', isCurrency: false },
      { label: 'Recommendations', isCurrency: false },
    ],
    calculate: (values) => {
      const { monthlyRentAmount, monthsOfRentHistory, latePayments, rentPaidBy, landlordType } = values;
      
      let vorScore = 100;
      
      if (latePayments === 0) {
        vorScore -= 0;
      } else if (latePayments === 1) {
        vorScore -= 15;
      } else if (latePayments === 2) {
        vorScore -= 30;
      } else {
        vorScore -= 50;
      }
      
      if (monthsOfRentHistory >= 24) {
        vorScore += 0;
      } else if (monthsOfRentHistory >= 12) {
        vorScore -= 5;
      } else if (monthsOfRentHistory >= 6) {
        vorScore -= 20;
      } else {
        vorScore -= 40;
      }
      
      if (rentPaidBy === 'cash') {
        vorScore -= 20;
      } else if (rentPaidBy === 'moneyOrder') {
        vorScore -= 5;
      }
      
      if (landlordType === 'family') {
        vorScore -= 25;
      } else if (landlordType === 'private') {
        vorScore -= 5;
      }
      
      vorScore = Math.max(0, Math.min(100, vorScore));
      
      let vorScoreLabel = '';
      if (vorScore >= 90) {
        vorScoreLabel = 'Excellent (' + vorScore + '/100)';
      } else if (vorScore >= 75) {
        vorScoreLabel = 'Good (' + vorScore + '/100)';
      } else if (vorScore >= 60) {
        vorScoreLabel = 'Fair (' + vorScore + '/100)';
      } else if (vorScore >= 40) {
        vorScoreLabel = 'Poor (' + vorScore + '/100)';
      } else {
        vorScoreLabel = 'Very Poor (' + vorScore + '/100)';
      }
      
      let historyStatus = '';
      if (monthsOfRentHistory >= 12) {
        historyStatus = 'Complete 12-month history available ✓';
      } else {
        historyStatus = 'Incomplete - Need ' + (12 - monthsOfRentHistory) + ' more months of history';
      }
      
      let lateImpact = '';
      if (latePayments === 0) {
        lateImpact = 'No late payments - Excellent payment history ✓';
      } else if (latePayments === 1) {
        lateImpact = '1 late payment - May be acceptable for most loan programs';
      } else if (latePayments === 2) {
        lateImpact = '2 late payments - Will require explanation, may affect approval';
      } else {
        lateImpact = '3+ late payments - Significant negative impact, may disqualify';
      }
      
      let docQuality = '';
      if (rentPaidBy === 'electronic' && landlordType === 'professional') {
        docQuality = 'Excellent - Easy verification with clear paper trail';
      } else if (rentPaidBy === 'check' && landlordType !== 'family') {
        docQuality = 'Good - Verifiable with bank statements';
      } else if (rentPaidBy === 'cash') {
        docQuality = 'Poor - Limited paper trail, additional documentation needed';
      } else if (landlordType === 'family') {
        docQuality = 'Challenging - Family landlord requires extensive documentation';
      } else {
        docQuality = 'Fair - Some documentation may be needed';
      }
      
      let creditEligibility = '';
      if (monthsOfRentHistory >= 12 && latePayments <= 1) {
        creditEligibility = 'Eligible - Meets non-traditional credit tradeline requirements';
      } else if (monthsOfRentHistory >= 12 && latePayments <= 2) {
        creditEligibility = 'Possibly Eligible - May need compensating factors';
      } else {
        creditEligibility = 'Not Currently Eligible - Need clean 12-month history';
      }
      
      const annualRentPaid = monthlyRentAmount * 12;
      
      let fhaStatus = '';
      if (monthsOfRentHistory >= 12 && latePayments <= 1 && landlordType !== 'family') {
        fhaStatus = 'Meets FHA/USDA rental history requirements ✓';
      } else if (monthsOfRentHistory >= 12 && latePayments <= 1 && landlordType === 'family') {
        fhaStatus = 'Family landlord - Additional verification required';
      } else if (latePayments > 1) {
        fhaStatus = 'Too many late payments for FHA/USDA non-traditional credit';
      } else {
        fhaStatus = 'Insufficient rental history - Need 12 months minimum';
      }
      
      let recommendations = [];
      if (latePayments > 0) {
        recommendations.push('Maintain perfect on-time payments going forward');
      }
      if (monthsOfRentHistory < 12) {
        recommendations.push('Continue current tenancy to build 12-month history');
      }
      if (rentPaidBy === 'cash') {
        recommendations.push('Switch to electronic or check payments for better paper trail');
      }
      if (landlordType === 'family') {
        recommendations.push('Consider renting from non-family landlord for easier verification');
      }
      if (recommendations.length === 0) {
        recommendations.push('Your VOR status is excellent - proceed with mortgage application');
      }
      
      return [
        { label: 'VOR Score', value: vorScoreLabel },
        { label: '12-Month Payment History Status', value: historyStatus },
        { label: 'Late Payment Impact', value: lateImpact },
        { label: 'Documentation Quality', value: docQuality },
        { label: 'Non-Traditional Credit Eligibility', value: creditEligibility },
        { label: 'Annual Rent Paid', value: annualRentPaid.toFixed(2), isCurrency: true },
        { label: 'FHA/USDA Qualification Status', value: fhaStatus },
        { label: 'Recommendations', value: recommendations.join('; ') },
      ];
    },
  },
};
