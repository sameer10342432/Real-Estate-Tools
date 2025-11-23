import { CalculatorContent } from '@/types';

export const CONTRACTOR_RED_FLAG_CHECKER_CONTENT: CalculatorContent = {
  title: 'Contractor Red Flag Checker',
  description: 'Vet contractors before hiring. Check licenses, insurance, reviews, and identify warning signs to avoid fraudulent or unreliable contractors.',
  icon: '⚠️',
  category: 'Construction & Development',
  slug: 'contractor-red-flag-checker',
  article: {
    title: 'Vetting Contractors: Avoid Costly Mistakes',
    content: `
<h2>How to Choose a Reliable Contractor</h2>
<p>Hiring the wrong contractor can cost thousands and cause major headaches. Learn to identify red flags before signing a contract.</p>

<h3>Essential Contractor Checks</h3>
<ul>
  <li><strong>License:</strong> Valid contractor's license in your state</li>
  <li><strong>Insurance:</strong> Liability and workers' compensation insurance</li>
  <li><strong>References:</strong> Verifiable past projects and client reviews</li>
  <li><strong>Written Contract:</strong> Detailed scope, timeline, and payment terms</li>
  <li><strong>Local Reputation:</strong> Established business in your area</li>
</ul>

<h3>Major Red Flags</h3>
<ul>
  <li>No license or insurance</li>
  <li>Requests full payment upfront</li>
  <li>No written contract or vague terms</li>
  <li>Pressure to decide immediately</li>
  <li>Significantly lowest bid (too good to be true)</li>
  <li>No physical business address</li>
  <li>Poor or no online presence</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'license',
        label: 'Contractor License',
        type: 'select',
        defaultValue: 'verified',
        options: [
          { value: 'none', label: 'No License / Won\'t Show' },
          { value: 'unverified', label: 'Claims to Have License' },
          { value: 'verified', label: 'Verified Active License' },
        ],
      },
      {
        name: 'insurance',
        label: 'Insurance Verification',
        type: 'select',
        defaultValue: 'verified',
        options: [
          { value: 'none', label: 'No Insurance' },
          { value: 'claimed', label: 'Claims Insurance' },
          { value: 'verified', label: 'Verified Certificate' },
        ],
      },
      {
        name: 'payment',
        label: 'Payment Terms',
        type: 'select',
        defaultValue: 'normal',
        options: [
          { value: 'fullUpfront', label: '100% Upfront' },
          { value: 'largeDeposit', label: '50%+ Upfront' },
          { value: 'normal', label: 'Standard Schedule (33% or less)' },
        ],
      },
      {
        name: 'contract',
        label: 'Written Contract',
        type: 'select',
        defaultValue: 'detailed',
        options: [
          { value: 'none', label: 'No Written Contract' },
          { value: 'vague', label: 'Vague/Incomplete' },
          { value: 'detailed', label: 'Detailed & Complete' },
        ],
      },
      {
        name: 'references',
        label: 'References & Reviews',
        type: 'select',
        defaultValue: 'verified',
        options: [
          { value: 'none', label: 'No References Provided' },
          { value: 'unverified', label: 'Provided but Not Verified' },
          { value: 'verified', label: 'Verified Positive References' },
        ],
      },
    ],
    results: [
      { label: "Risk Assessment", isCurrency: false },
      { label: "Safety Score", isCurrency: false },
      { label: "Recommendation", isCurrency: false }
    ],
    calculate: (data) => {
      const { license, insurance, payment, contract, references } = data;
      
      let score = 100;
      let criticalIssues = 0;
      
      if (license === 'none') { score -= 35; criticalIssues++; }
      else if (license === 'unverified') score -= 15;
      
      if (insurance === 'none') { score -= 35; criticalIssues++; }
      else if (insurance === 'claimed') score -= 15;
      
      if (payment === 'fullUpfront') { score -= 30; criticalIssues++; }
      else if (payment === 'largeDeposit') score -= 15;
      
      if (contract === 'none') { score -= 25; criticalIssues++; }
      else if (contract === 'vague') score -= 10;
      
      if (references === 'none') score -= 20;
      else if (references === 'unverified') score -= 10;
      
      let assessment = 'LOW RISK';
      let recommendation = 'This contractor shows strong credentials. Proceed with normal precautions.';
      
      if (criticalIssues >= 2 || score < 40) {
        assessment = 'CRITICAL - DO NOT HIRE';
        recommendation = 'Multiple critical red flags detected. This contractor poses significant risk. Do not proceed.';
      } else if (score < 60) {
        assessment = 'HIGH RISK';
        recommendation = 'Serious concerns identified. Get everything verified in writing and consider other contractors.';
      } else if (score < 75) {
        assessment = 'MODERATE RISK';
        recommendation = 'Some warning signs present. Verify all credentials and get detailed contract before proceeding.';
      }
      
      return [
        { label: 'Risk Assessment', value: assessment },
        { label: 'Safety Score', value: `${score}/100` },
        { label: 'Recommendation', value: recommendation }
      ];
    },
  },
};
