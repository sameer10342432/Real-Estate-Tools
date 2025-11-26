import { CalculatorContent } from '@/types';

export const LIEN_WAIVER_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Lien Waiver Generator',
  description: 'Generate lien waiver documents for construction projects with conditional or unconditional releases.',
  slug: 'lien-waiver-generator',
  icon: '📄',
  category: 'Construction & Development',
  article: {
    title: 'Understanding Lien Waivers in Construction',
    content: `
    <h2>What is a Lien Waiver?</h2>
    <p>A lien waiver is a legal document in which a contractor, subcontractor, or supplier relinquishes their right to file a mechanic's lien against a property. These documents are essential in construction projects to protect property owners and ensure clear title to the property upon project completion.</p>

    <h3>Types of Lien Waivers</h3>
    <p>There are four main types of lien waivers, categorized by timing and conditions:</p>

    <h4>1. Conditional Waiver on Progress Payment</h4>
    <ul>
      <li>Used for partial payments during the project</li>
      <li>Only becomes effective when payment is actually received</li>
      <li>Protects the contractor if the check bounces or payment fails</li>
      <li>Most commonly used for ongoing work</li>
    </ul>

    <h4>2. Unconditional Waiver on Progress Payment</h4>
    <ul>
      <li>Used for partial payments already received</li>
      <li>Immediately effective upon signing</li>
      <li>Should only be signed after confirming payment has cleared</li>
      <li>Provides stronger protection for property owners</li>
    </ul>

    <h4>3. Conditional Waiver on Final Payment</h4>
    <ul>
      <li>Used for the final payment upon project completion</li>
      <li>Waives all remaining lien rights for the entire project</li>
      <li>Effective only when final payment is received</li>
      <li>Commonly required before project closeout</li>
    </ul>

    <h4>4. Unconditional Waiver on Final Payment</h4>
    <ul>
      <li>The most comprehensive lien release</li>
      <li>Immediately effective upon signing</li>
      <li>Waives all lien rights for the entire project permanently</li>
      <li>Should only be signed after confirming final payment has cleared</li>
    </ul>

    <h3>When to Use Each Type</h3>
    <p>Choosing the right lien waiver depends on your situation:</p>
    <table>
      <tr>
        <th>Situation</th>
        <th>Recommended Waiver Type</th>
      </tr>
      <tr>
        <td>Requesting a progress payment</td>
        <td>Conditional on Progress Payment</td>
      </tr>
      <tr>
        <td>After receiving and verifying a progress payment</td>
        <td>Unconditional on Progress Payment</td>
      </tr>
      <tr>
        <td>Requesting final payment</td>
        <td>Conditional on Final Payment</td>
      </tr>
      <tr>
        <td>After receiving and verifying final payment</td>
        <td>Unconditional on Final Payment</td>
      </tr>
    </table>

    <h3>Legal Importance of Lien Waivers</h3>
    <p>Lien waivers serve critical legal functions in construction:</p>
    <ul>
      <li><strong>Title Protection:</strong> They ensure property owners have clear title without encumbrances</li>
      <li><strong>Payment Documentation:</strong> They create a paper trail of payments made throughout the project</li>
      <li><strong>Lender Requirements:</strong> Most construction lenders require lien waivers before releasing draws</li>
      <li><strong>Dispute Prevention:</strong> They help prevent double-payment claims and disputes</li>
      <li><strong>Project Closeout:</strong> Final lien waivers are typically required before closing out a project</li>
    </ul>

    <h3>State-Specific Requirements</h3>
    <p>Lien waiver requirements vary significantly by state:</p>
    <ul>
      <li><strong>California, Texas, and others:</strong> Have statutory lien waiver forms that must be used</li>
      <li><strong>Some states:</strong> Prohibit conditional waivers in certain circumstances</li>
      <li><strong>Notice requirements:</strong> May require preliminary notices before lien rights exist</li>
      <li><strong>Time limits:</strong> States have varying deadlines for filing liens and waivers</li>
    </ul>
    <p><em>Always consult with a local attorney to ensure compliance with your state's specific requirements.</em></p>

    <h3>Best Practices for Contractors</h3>
    <ol>
      <li><strong>Never sign unconditional waivers before payment clears:</strong> Wait until funds are confirmed in your account</li>
      <li><strong>Keep copies of all waivers:</strong> Maintain organized records for each project</li>
      <li><strong>Match waiver amounts to payments:</strong> Ensure the waiver amount matches the payment received</li>
      <li><strong>Track "through dates":</strong> Document exactly what work period the waiver covers</li>
      <li><strong>Collect waivers from subcontractors:</strong> Get waivers from your subs before paying them</li>
    </ol>

    <h3>Best Practices for Property Owners</h3>
    <ol>
      <li><strong>Require waivers with every payment:</strong> Make waiver submission a condition of payment</li>
      <li><strong>Verify waiver completeness:</strong> Ensure all required fields are properly filled out</li>
      <li><strong>Collect waivers from all parties:</strong> Get waivers from the general contractor AND all subcontractors</li>
      <li><strong>Store waivers securely:</strong> Keep organized records in case of future disputes</li>
      <li><strong>Request final waivers at closeout:</strong> Obtain unconditional final waivers from all parties</li>
    </ol>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Signing unconditional waivers before payment is verified</li>
      <li>Using the wrong type of waiver for your situation</li>
      <li>Failing to include all required information on the waiver</li>
      <li>Not obtaining waivers from all subcontractors and suppliers</li>
      <li>Using non-compliant waiver forms in states with statutory requirements</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'waiverType',
        label: 'Waiver Type',
        type: 'select',
        defaultValue: 'conditional_progress',
        options: [
          { value: 'conditional_progress', label: 'Conditional Waiver on Progress Payment' },
          { value: 'unconditional_progress', label: 'Unconditional Waiver on Progress Payment' },
          { value: 'conditional_final', label: 'Conditional Waiver on Final Payment' },
          { value: 'unconditional_final', label: 'Unconditional Waiver on Final Payment' },
        ],
      },
      {
        name: 'payeeName',
        label: 'Payee Name (Contractor/Supplier)',
        type: 'text',
        defaultValue: '',
        placeholder: 'Enter contractor or supplier name',
      },
      {
        name: 'payerName',
        label: 'Payer Name (Property Owner/GC)',
        type: 'text',
        defaultValue: '',
        placeholder: 'Enter property owner or general contractor name',
      },
      {
        name: 'projectName',
        label: 'Project Name/Address',
        type: 'text',
        defaultValue: '',
        placeholder: 'Enter project name or property address',
      },
      {
        name: 'amount',
        label: 'Payment Amount ($)',
        type: 'number',
        defaultValue: 10000,
        placeholder: 'Enter payment amount',
      },
      {
        name: 'throughDate',
        label: 'Through Date (Work Period Ending)',
        type: 'text',
        defaultValue: '',
        placeholder: 'e.g., December 31, 2024',
      },
    ],
    results: [
      { label: 'Waiver Type', isCurrency: false },
      { label: 'Payment Amount', isCurrency: true },
      { label: 'Waiver Status', isCurrency: false },
      { label: 'Risk Level for Payee', isCurrency: false },
      { label: 'Document Summary', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        waiverType,
        payeeName,
        payerName,
        projectName,
        amount,
        throughDate,
      } = values;

      const waiverTypeLabels: Record<string, string> = {
        'conditional_progress': 'Conditional Waiver on Progress Payment',
        'unconditional_progress': 'Unconditional Waiver on Progress Payment',
        'conditional_final': 'Conditional Waiver on Final Payment',
        'unconditional_final': 'Unconditional Waiver on Final Payment',
      };

      const waiverStatus: Record<string, string> = {
        'conditional_progress': 'Pending - Effective upon payment receipt',
        'unconditional_progress': 'Immediate - Effective upon signing',
        'conditional_final': 'Pending - Effective upon final payment receipt',
        'unconditional_final': 'Immediate - All lien rights waived permanently',
      };

      const riskLevel: Record<string, string> = {
        'conditional_progress': 'Low - Protected until payment clears',
        'unconditional_progress': 'Medium - Rights waived even if payment fails',
        'conditional_final': 'Low - Protected until final payment clears',
        'unconditional_final': 'High - All rights waived immediately',
      };

      const payeeDisplay = payeeName || '[Payee Name]';
      const payerDisplay = payerName || '[Payer Name]';
      const projectDisplay = projectName || '[Project Address]';
      const dateDisplay = throughDate || '[Through Date]';

      const documentSummary = `${waiverTypeLabels[waiverType]} from ${payeeDisplay} to ${payerDisplay} for ${projectDisplay} through ${dateDisplay} in the amount of $${Number(amount).toLocaleString()}`;

      return [
        { label: 'Waiver Type', value: waiverTypeLabels[waiverType], isCurrency: false },
        { label: 'Payment Amount', value: Number(amount).toFixed(2), isCurrency: true },
        { label: 'Waiver Status', value: waiverStatus[waiverType], isCurrency: false },
        { label: 'Risk Level for Payee', value: riskLevel[waiverType], isCurrency: false },
        { label: 'Document Summary', value: documentSummary, isCurrency: false },
      ];
    },
  },
};
