import { CalculatorContent } from '@/types';

export const REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT: CalculatorContent = {
  title: 'Real Estate Agent Red Flag Checker',
  description: 'Evaluate your real estate agent for warning signs. Check credentials, experience, reviews, and identify potential red flags before hiring.',
  icon: '🔍',
  category: 'Agent Tools',
  slug: 'real-estate-agent-red-flag-checker',
  article: {
    title: 'Vetting Your Real Estate Agent',
    content: `
<h2>How to Choose a Quality Real Estate Agent</h2>
<p>Your agent can make or break your home buying or selling experience. Learn to identify red flags before committing to representation.</p>

<h3>Green Flags (Good Signs)</h3>
<ul>
  <li><strong>Licensed & Insured:</strong> Current license in good standing</li>
  <li><strong>Experience:</strong> Several years in your local market</li>
  <li><strong>Good Reviews:</strong> Positive feedback from past clients</li>
  <li><strong>Responsive:</strong> Returns calls/emails within 24 hours</li>
  <li><strong>Local Expert:</strong> Deep knowledge of your target area</li>
</ul>

<h3>Red Flags to Watch For</h3>
<ul>
  <li>Pressure tactics or rushing decisions</li>
  <li>No verifiable license or credentials</li>
  <li>Poor or no online reviews</li>
  <li>Unavailable or unresponsive</li>
  <li>Promises guaranteed results</li>
  <li>Dual agency without disclosure</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'licensed',
        label: 'Agent License Status',
        type: 'select',
        defaultValue: 'verified',
        options: [
          { value: 'unknown', label: 'Unknown / Not Verified' },
          { value: 'verified', label: 'Verified & Active' },
        ],
      },
      {
        name: 'experience',
        label: 'Years of Experience',
        type: 'select',
        defaultValue: '5plus',
        options: [
          { value: 'new', label: 'Less than 1 year' },
          { value: '1to3', label: '1-3 years' },
          { value: '3to5', label: '3-5 years' },
          { value: '5plus', label: '5+ years' },
        ],
      },
      {
        name: 'reviews',
        label: 'Online Reviews',
        type: 'select',
        defaultValue: 'positive',
        options: [
          { value: 'none', label: 'No Reviews' },
          { value: 'negative', label: 'Mostly Negative' },
          { value: 'mixed', label: 'Mixed' },
          { value: 'positive', label: 'Mostly Positive' },
        ],
      },
      {
        name: 'communication',
        label: 'Communication',
        type: 'select',
        defaultValue: 'responsive',
        options: [
          { value: 'poor', label: 'Slow/Unresponsive' },
          { value: 'average', label: 'Average' },
          { value: 'responsive', label: 'Quick & Professional' },
        ],
      },
      {
        name: 'pressure',
        label: 'Sales Pressure',
        type: 'select',
        defaultValue: 'none',
        options: [
          { value: 'high', label: 'High Pressure Tactics' },
          { value: 'some', label: 'Some Pressure' },
          { value: 'none', label: 'No Pressure' },
        ],
      },
    ],
    results: [
      { label: "Overall Assessment", isCurrency: false },
      { label: "Confidence Score", isCurrency: false },
      { label: "Recommendation", isCurrency: false }
    ],
    calculate: (data) => {
      const { licensed, experience, reviews, communication, pressure } = data;
      
      let score = 100;
      
      if (licensed === 'unknown') score -= 40;
      if (experience === 'new') score -= 15;
      else if (experience === '1to3') score -= 5;
      
      if (reviews === 'none') score -= 20;
      else if (reviews === 'negative') score -= 30;
      else if (reviews === 'mixed') score -= 10;
      
      if (communication === 'poor') score -= 25;
      else if (communication === 'average') score -= 5;
      
      if (pressure === 'high') score -= 30;
      else if (pressure === 'some') score -= 10;
      
      let assessment = 'Excellent Agent';
      let recommendation = 'This agent shows strong credentials. Proceed with confidence.';
      
      if (score < 40) {
        assessment = 'HIGH RISK';
        recommendation = 'Multiple red flags detected. Continue searching for a better agent.';
      } else if (score < 60) {
        assessment = 'CAUTION';
        recommendation = 'Some concerns present. Interview other agents before deciding.';
      } else if (score < 75) {
        assessment = 'Acceptable';
        recommendation = 'Reasonable choice, but verify all credentials and check references.';
      }
      
      return [
        { label: 'Overall Assessment', value: assessment },
        { label: 'Confidence Score', value: `${score}/100` },
        { label: 'Recommendation', value: recommendation }
      ];
    },
  },
};
