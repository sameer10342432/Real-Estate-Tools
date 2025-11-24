import { CalculatorContent } from '@/types';

export const MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Material Participation (Real Estate) Test',
  description: 'Determine if you materially participate in your real estate rental activities. Pass one of seven IRS tests to avoid passive activity loss limitations.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'material-participation-test-calculator',
  article: {
    title: "Material Participation Tests for Real Estate Activities",
    content: `
    <h2>What is Material Participation?</h2>
    <p>Material participation is an IRS standard that determines whether rental real estate losses are classified as passive or non-passive. Meeting material participation requirements allows you to deduct rental losses against ordinary income.</p>
    
    <h3>The Seven Tests for Material Participation</h3>
    <p>You need to pass only ONE of these seven tests:</p>
    
    <h4>Test 1: 500+ Hours</h4>
    <ul>
      <li>You participated in the activity for more than 500 hours during the year</li>
      <li>Most straightforward test</li>
      <li>Includes time managing, maintaining, collecting rent, etc.</li>
    </ul>
    
    <h4>Test 2: Substantially All Participation</h4>
    <ul>
      <li>Your participation was substantially all the participation in the activity</li>
      <li>Applies if you do almost all the work yourself</li>
      <li>No specific hour requirement</li>
    </ul>
    
    <h4>Test 3: 100+ Hours and Not Less Than Others</h4>
    <ul>
      <li>You participated more than 100 hours during the year</li>
      <li>No one else participated more than you (including non-owners)</li>
    </ul>
    
    <h4>Test 4: Significant Participation Activities</h4>
    <ul>
      <li>Activity is a "significant participation activity"</li>
      <li>More than 100 hours in the activity</li>
      <li>Total time in all significant participation activities exceeds 500 hours</li>
    </ul>
    
    <h4>Test 5: Material Participation in 5 of Last 10 Years</h4>
    <ul>
      <li>You materially participated for any 5 of the prior 10 tax years</li>
      <li>Doesn't need to be consecutive years</li>
    </ul>
    
    <h4>Test 6: Personal Service Activity</h4>
    <ul>
      <li>Activity is a personal service activity</li>
      <li>You materially participated for any 3 prior years</li>
      <li>Rarely applies to real estate</li>
    </ul>
    
    <h4>Test 7: Facts and Circumstances</h4>
    <ul>
      <li>Based on all facts and circumstances</li>
      <li>You participated on a regular, continuous, and substantial basis</li>
      <li>More than 100 hours during the year</li>
      <li>Cannot count management time if hired manager</li>
    </ul>
    
    <h3>Real Estate Professional + Material Participation</h3>
    <p>For real estate professionals, material participation works differently:</p>
    <ul>
      <li>First qualify as a real estate professional (750+ hours, >50% of work time)</li>
      <li>Then prove material participation in each rental property OR</li>
      <li>Make an election to group all rental properties as one activity</li>
    </ul>
    
    <h3>Documentation Requirements</h3>
    <ul>
      <li>Maintain detailed time logs and activity records</li>
      <li>Track hours spent on property management, repairs, tenant relations</li>
      <li>Keep calendars, logs, receipts, and correspondence</li>
      <li>Document decision-making authority</li>
    </ul>
    
    <h3>Common Participation Activities</h3>
    <ul>
      <li>Property management and administration</li>
      <li>Repairs and maintenance</li>
      <li>Tenant screening and selection</li>
      <li>Rent collection</li>
      <li>Property improvements</li>
      <li>Financial record-keeping</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Test 1: 500+ Hours', isCurrency: false },
      { label: 'Test 2: Substantially All', isCurrency: false },
      { label: 'Test 3: 100+ Hours, Most Participation', isCurrency: false },
      { label: 'Test 4: Significant Participation', isCurrency: false },
      { label: 'Test 5: 5 of Last 10 Years', isCurrency: false },
      { label: 'Test 7: Facts & Circumstances', isCurrency: false },
      { label: 'Material Participation Status', isCurrency: false },
    ],
    fields: [
      {
        name: 'hoursThisYear',
        label: 'Hours Participated This Year',
        type: 'number',
        defaultValue: 450,
      },
      {
        name: 'otherParticipantHours',
        label: 'Hours by Other Participants',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'totalHoursAllActivities',
        label: 'Total Hours in All Significant Activities (100+ hrs each)',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'yearsParticipatedLast10',
        label: 'Number of Years Materially Participated (Last 10 Years)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'substantiallyAllWork',
        label: 'Did Substantially All the Work',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'regularContinuousSubstantial',
        label: 'Participation Was Regular, Continuous & Substantial',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'hasPropertyManager',
        label: 'Hired Property Manager',
        type: 'boolean',
        defaultValue: false,
      },
    ],
    calculate: (data) => {
      const {
        hoursThisYear, otherParticipantHours, totalHoursAllActivities,
        yearsParticipatedLast10, substantiallyAllWork,
        regularContinuousSubstantial, hasPropertyManager
      } = data;
      
      // Test 1: 500+ hours
      const test1 = hoursThisYear > 500;
      
      // Test 2: Substantially all participation
      const test2 = substantiallyAllWork;
      
      // Test 3: 100+ hours and not less than anyone else
      const test3 = hoursThisYear >= 100 && hoursThisYear >= otherParticipantHours;
      
      // Test 4: Significant participation activities totaling 500+ hours
      const test4 = hoursThisYear >= 100 && totalHoursAllActivities > 500;
      
      // Test 5: Materially participated in 5 of last 10 years
      const test5 = yearsParticipatedLast10 >= 5;
      
      // Test 7: Facts and circumstances (100+ hours, regular/continuous/substantial, no manager)
      const test7 = hoursThisYear >= 100 && regularContinuousSubstantial && !hasPropertyManager;
      
      // Material participation if any test passes
      const materiallyParticipates = test1 || test2 || test3 || test4 || test5 || test7;
      
      return [
        { label: 'Test 1: 500+ Hours', value: test1 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { label: 'Test 2: Substantially All', value: test2 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { label: 'Test 3: 100+ Hours, Most Participation', value: test3 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { label: 'Test 4: Significant Participation', value: test4 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { label: 'Test 5: 5 of Last 10 Years', value: test5 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { label: 'Test 7: Facts & Circumstances', value: test7 ? 'PASSED ✓' : 'Not Passed', isCurrency: false },
        { 
          label: 'Material Participation Status', 
          value: materiallyParticipates ? 'YES - Materially Participated ✓' : 'NO - Passive Activity', 
          isCurrency: false 
        },
      ];
    },
  },
};
