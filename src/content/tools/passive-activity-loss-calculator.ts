import { CalculatorContent } from '@/types';

export const PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Passive Activity Loss (PAL) Calculator',
  description: 'Calculate deductible passive activity losses from rental real estate. Determine how much rental losses you can deduct against your ordinary income.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'passive-activity-loss-calculator',
  article: {
    title: "Understanding Passive Activity Loss Rules for Real Estate",
    content: `
    <h2>What are Passive Activity Losses?</h2>
    <p>Passive Activity Losses (PAL) are losses from rental real estate and businesses in which you don't materially participate. The IRS limits your ability to deduct these losses against ordinary income.</p>
    
    <h3>Passive Activity Loss Rules</h3>
    <ul>
      <li><strong>General Rule:</strong> Passive losses can only offset passive income</li>
      <li><strong>Suspended Losses:</strong> Excess losses carry forward to future years</li>
      <li><strong>Special $25,000 Allowance:</strong> Active participants in rental real estate may qualify</li>
      <li><strong>Phase-Out:</strong> Allowance phases out for higher-income earners</li>
    </ul>
    
    <h3>$25,000 Special Allowance</h3>
    <p>You may deduct up to $25,000 of rental real estate losses against ordinary income if you meet these criteria:</p>
    <ul>
      <li><strong>Active Participation:</strong> You make management decisions (selecting tenants, approving repairs, etc.)</li>
      <li><strong>Ownership:</strong> You own at least 10% of the property</li>
      <li><strong>Income Limits:</strong> Modified Adjusted Gross Income (MAGI) under $150,000</li>
    </ul>
    
    <h3>Phase-Out Rules</h3>
    <ul>
      <li><strong>$100,000 - $150,000 MAGI:</strong> Allowance reduces by 50 cents for each dollar over $100,000</li>
      <li><strong>Over $150,000 MAGI:</strong> No special allowance (unless real estate professional)</li>
      <li><strong>Married Filing Separately:</strong> $75,000 phase-out threshold</li>
    </ul>
    
    <h3>Real Estate Professional Exception</h3>
    <p>If you qualify as a real estate professional, rental losses are NOT passive:</p>
    <ul>
      <li>More than 50% of personal services in real estate trades/businesses</li>
      <li>More than 750 hours per year in real estate activities</li>
      <li>Material participation in each rental activity (or group election)</li>
    </ul>
    
    <h3>Using Suspended Losses</h3>
    <ul>
      <li><strong>Future Passive Income:</strong> Offset with future rental income</li>
      <li><strong>Property Sale:</strong> All suspended losses become deductible when you sell</li>
      <li><strong>Carried Forward:</strong> No expiration on suspended losses</li>
    </ul>
    
    <h3>Planning Strategies</h3>
    <ul>
      <li>Time passive income/losses to maximize deductions</li>
      <li>Consider real estate professional status if applicable</li>
      <li>Group rental activities for material participation</li>
      <li>Track suspended losses carefully for future use</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Rental Loss', isCurrency: true },
      { label: 'Maximum Deductible (Before Phase-Out)', isCurrency: true },
      { label: 'Phase-Out Amount', isCurrency: true },
      { label: 'Deductible Passive Loss', isCurrency: true },
      { label: 'Suspended Loss (Carried Forward)', isCurrency: true },
      { label: 'Tax Savings from Deduction', isCurrency: true },
    ],
    fields: [
      {
        name: 'rentalIncome',
        label: 'Annual Rental Income',
        type: 'number',
        defaultValue: 24000,
      },
      {
        name: 'rentalExpenses',
        label: 'Operating Expenses',
        type: 'number',
        defaultValue: 18000,
      },
      {
        name: 'depreciation',
        label: 'Depreciation',
        type: 'number',
        defaultValue: 9000,
      },
      {
        name: 'mortgageInterest',
        label: 'Mortgage Interest',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'propertyTax',
        label: 'Property Tax',
        type: 'number',
        defaultValue: 4000,
      },
      {
        name: 'magi',
        label: 'Modified Adjusted Gross Income (MAGI)',
        type: 'number',
        defaultValue: 90000,
      },
      {
        name: 'activeParticipation',
        label: 'Active Participation in Rental',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'realEstateProfessional',
        label: 'Qualify as Real Estate Professional',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'passiveIncome',
        label: 'Other Passive Income',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'taxBracket',
        label: 'Tax Bracket (%)',
        type: 'number',
        defaultValue: 24,
      },
    ],
    calculate: (data) => {
      const {
        rentalIncome, rentalExpenses, depreciation, mortgageInterest, propertyTax,
        magi, activeParticipation, realEstateProfessional, passiveIncome, taxBracket
      } = data;
      
      // Calculate total rental loss
      const totalExpenses = rentalExpenses + depreciation + mortgageInterest + propertyTax;
      const rentalLoss = Math.max(0, totalExpenses - rentalIncome);
      
      let deductibleLoss = 0;
      let phaseOutAmount = 0;
      
      if (realEstateProfessional) {
        // Real estate professionals can deduct all rental losses (not passive)
        deductibleLoss = rentalLoss;
      } else if (activeParticipation && rentalLoss > 0) {
        // Calculate special $25,000 allowance with phase-out
        let allowance = 25000;
        
        if (magi > 100000) {
          phaseOutAmount = (magi - 100000) * 0.5;
          allowance = Math.max(0, 25000 - phaseOutAmount);
        }
        
        // Can only use allowance to offset non-passive income
        // First offset with passive income, then use allowance
        const lossAfterPassiveIncome = Math.max(0, rentalLoss - passiveIncome);
        deductibleLoss = Math.min(lossAfterPassiveIncome, allowance) + Math.min(rentalLoss, passiveIncome);
      } else {
        // Can only offset passive income
        deductibleLoss = Math.min(rentalLoss, passiveIncome);
      }
      
      const suspendedLoss = rentalLoss - deductibleLoss;
      const taxSavings = deductibleLoss * (taxBracket / 100);
      
      const maxDeductibleBeforePhaseOut = realEstateProfessional ? rentalLoss : 
        (activeParticipation ? 25000 : 0);
      
      return [
        { label: 'Total Rental Loss', value: rentalLoss, isCurrency: true },
        { label: 'Maximum Deductible (Before Phase-Out)', value: maxDeductibleBeforePhaseOut, isCurrency: true },
        { label: 'Phase-Out Amount', value: phaseOutAmount, isCurrency: true },
        { label: 'Deductible Passive Loss', value: deductibleLoss, isCurrency: true },
        { label: 'Suspended Loss (Carried Forward)', value: suspendedLoss, isCurrency: true },
        { label: 'Tax Savings from Deduction', value: taxSavings, isCurrency: true },
      ];
    },
  },
};
