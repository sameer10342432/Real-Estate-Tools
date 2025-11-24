import { CalculatorContent } from '@/types';

export const REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT: CalculatorContent = {
  title: 'Real Estate Professional (Tax) Qualifier',
  description: 'Determine if you qualify as a real estate professional under IRS rules. Unlock the ability to deduct unlimited rental losses against ordinary income.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'real-estate-professional-qualifier',
  article: {
    title: "Qualifying as a Real Estate Professional for Tax Purposes",
    content: `
    <h2>What is Real Estate Professional Status?</h2>
    <p>Real estate professional status is an IRS classification that allows real estate investors to treat rental property losses as non-passive, enabling full deductibility against ordinary income without the $25,000 limitation.</p>
    
    <h3>Two-Part Test for Real Estate Professional</h3>
    <p>You must meet BOTH requirements:</p>
    
    <h4>Requirement 1: More than 50% of Personal Services</h4>
    <ul>
      <li>More than half of your total working time must be in real estate trades or businesses</li>
      <li>Counts as a real estate trade/business: development, redevelopment, construction, reconstruction, acquisition, conversion, rental, operation, management, leasing, or brokerage</li>
      <li>If you have a full-time job outside real estate, this is difficult to meet</li>
    </ul>
    
    <h4>Requirement 2: 750+ Hours in Real Estate</h4>
    <ul>
      <li>You must spend more than 750 hours during the tax year in real estate trades or businesses</li>
      <li>Hours must be substantiated with contemporaneous records</li>
      <li>Can include time from any real estate activity (not just rentals)</li>
    </ul>
    
    <h3>Material Participation Still Required</h3>
    <p>Even after qualifying as a real estate professional, you must also prove material participation in each rental activity, unless you elect to group all rental properties as one activity.</p>
    
    <h3>What Counts Toward the 750 Hours?</h3>
    <ul>
      <li><strong>Included:</strong> Property management, maintenance, repairs, tenant screening, showing properties, lease preparation, bookkeeping, marketing</li>
      <li><strong>Included:</strong> Real estate agent/broker activities, development, construction management</li>
      <li><strong>Excluded:</strong> Learning about real estate (unless for specific property), commute time</li>
      <li><strong>Excluded:</strong> Time spent as an investor (reviewing financials of properties you don't actively manage)</li>
    </ul>
    
    <h3>Married Couples</h3>
    <ul>
      <li>Each spouse must independently qualify based on their own participation</li>
      <li>Cannot combine hours of both spouses</li>
      <li>Married filing jointly: only one spouse needs to qualify</li>
      <li>Married filing separately: each must qualify separately</li>
    </ul>
    
    <h3>Grouping Election</h3>
    <p>Once you qualify as a real estate professional:</p>
    <ul>
      <li>You can elect to treat all rental real estate as a single activity</li>
      <li>Then you only need to prove material participation once for the entire group</li>
      <li>Election made annually on your tax return</li>
      <li>Significantly simplifies material participation requirements</li>
    </ul>
    
    <h3>Documentation Requirements</h3>
    <ul>
      <li>Maintain contemporaneous time logs (daily or weekly)</li>
      <li>Calendar entries, appointment books, narratives of work performed</li>
      <li>Detailed descriptions of activities and time spent</li>
      <li>Cell phone logs, emails, receipts supporting time spent</li>
    </ul>
    
    <h3>Benefits of Real Estate Professional Status</h3>
    <ul>
      <li>Deduct all rental losses against W-2 income, business income, etc.</li>
      <li>No $25,000 passive loss limitation</li>
      <li>No phase-out based on income</li>
      <li>Losses not suspended - immediately deductible</li>
    </ul>
    
    <h3>Common Strategies</h3>
    <ul>
      <li>One spouse works full-time in real estate while other has W-2 job</li>
      <li>Semi-retired individuals managing substantial portfolios</li>
      <li>Real estate agents/brokers who also own rentals</li>
      <li>Property managers who own their own properties</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Personal Service Hours', isCurrency: false },
      { label: 'Real Estate Hours', isCurrency: false },
      { label: 'Real Estate % of Total Work', isCurrency: false },
      { label: 'Requirement 1: >50% in RE', isCurrency: false },
      { label: 'Requirement 2: 750+ Hours', isCurrency: false },
      { label: 'Real Estate Professional Status', isCurrency: false },
    ],
    fields: [
      {
        name: 'realEstateHours',
        label: 'Annual Hours in Real Estate Activities',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'otherWorkHours',
        label: 'Annual Hours in Non-Real Estate Work',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'propertyCount',
        label: 'Number of Rental Properties',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'hasTimeLog',
        label: 'Maintain Contemporaneous Time Logs',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'planToGroupProperties',
        label: 'Plan to Make Grouping Election',
        type: 'boolean',
        defaultValue: true,
      },
    ],
    calculate: (data) => {
      const { realEstateHours, otherWorkHours, propertyCount, hasTimeLog, planToGroupProperties } = data;
      
      const totalPersonalServiceHours = realEstateHours + otherWorkHours;
      const realEstatePercentage = totalPersonalServiceHours > 0 
        ? (realEstateHours / totalPersonalServiceHours) * 100 
        : 0;
      
      // Requirement 1: More than 50% of personal services in real estate
      const requirement1Met = realEstatePercentage > 50;
      
      // Requirement 2: More than 750 hours in real estate
      const requirement2Met = realEstateHours > 750;
      
      // Both requirements must be met
      const qualifiesAsREPro = requirement1Met && requirement2Met;
      
      let statusMessage = '';
      if (qualifiesAsREPro) {
        if (hasTimeLog) {
          if (planToGroupProperties) {
            statusMessage = 'QUALIFIED ✓ - Remember to make grouping election and prove material participation';
          } else {
            statusMessage = `QUALIFIED ✓ - Must prove material participation in each of ${propertyCount} properties`;
          }
        } else {
          statusMessage = 'QUALIFIED ✓ - WARNING: Maintain detailed time logs for IRS audit protection';
        }
      } else {
        if (!requirement1Met && !requirement2Met) {
          statusMessage = 'NOT QUALIFIED - Need more hours in RE and higher % of total work time';
        } else if (!requirement1Met) {
          statusMessage = 'NOT QUALIFIED - Need >50% of work time in real estate activities';
        } else {
          statusMessage = 'NOT QUALIFIED - Need more than 750 hours in real estate activities';
        }
      }
      
      return [
        { label: 'Total Personal Service Hours', value: totalPersonalServiceHours.toFixed(0), isCurrency: false },
        { label: 'Real Estate Hours', value: realEstateHours.toFixed(0), isCurrency: false },
        { label: 'Real Estate % of Total Work', value: realEstatePercentage.toFixed(1) + '%', isCurrency: false },
        { label: 'Requirement 1: >50% in RE', value: requirement1Met ? 'PASSED ✓' : 'Not Passed ✗', isCurrency: false },
        { label: 'Requirement 2: 750+ Hours', value: requirement2Met ? 'PASSED ✓' : 'Not Passed ✗', isCurrency: false },
        { label: 'Real Estate Professional Status', value: statusMessage, isCurrency: false },
      ];
    },
  },
};
