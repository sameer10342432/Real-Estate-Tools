import { CalculatorContent } from '@/types';

export const SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Short-Term Rental Tax Loophole Calculator',
  description: 'Calculate tax benefits from the short-term rental tax strategy. Determine if your rental qualifies for non-passive treatment and immediate loss deductions.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'short-term-rental-tax-loophole-calculator',
  article: {
    title: "The Short-Term Rental Tax Strategy (Airbnb Loophole)",
    content: `
    <h2>What is the Short-Term Rental Tax Strategy?</h2>
    <p>The short-term rental tax strategy (often called the "Airbnb loophole") allows property owners to deduct rental losses against W-2 and other ordinary income, even without being a real estate professional, if they meet specific criteria.</p>
    
    <h3>Key Requirements</h3>
    <ul>
      <li><strong>Average Stay:</strong> Average guest stay must be 7 days or less</li>
      <li><strong>Substantial Services:</strong> Must provide substantial services (similar to a hotel)</li>
      <li><strong>Material Participation:</strong> Must materially participate in the rental (pass one of 7 tests)</li>
      <li><strong>Exception to Rental Rules:</strong> Property is NOT treated as rental real estate under passive loss rules</li>
    </ul>
    
    <h3>Substantial Services Defined</h3>
    <p>Services similar to what a hotel would provide:</p>
    <ul>
      <li>Regular cleaning and maid service</li>
      <li>Linen changes and laundry</li>
      <li>Concierge services</li>
      <li>Breakfast or meals</li>
      <li>Tours, excursions, or activities</li>
      <li>Must be significant and go beyond minimal services</li>
    </ul>
    
    <h3>Material Participation for STRs</h3>
    <p>Easier to meet than long-term rentals because management is more active:</p>
    <ul>
      <li><strong>500+ Hours Test:</strong> Work more than 500 hours on the STR</li>
      <li><strong>100+ Hours Test:</strong> Work 100+ hours and more than anyone else</li>
      <li><strong>Other Tests:</strong> Various participation tests available</li>
    </ul>
    
    <h3>Tax Benefits</h3>
    <ul>
      <li><strong>Immediate Deductions:</strong> Deduct all losses against W-2, business income, etc.</li>
      <li><strong>No $25K Limit:</strong> Not subject to passive activity loss limitations</li>
      <li><strong>No Income Phase-Out:</strong> Works at any income level</li>
      <li><strong>Accelerated Depreciation:</strong> Can use bonus depreciation and cost segregation</li>
      <li><strong>Not Rental Real Estate:</strong> Treated as a trade or business</li>
    </ul>
    
    <h3>Comparison: STR vs Long-Term Rental</h3>
    <table>
      <tr>
        <th>Factor</th>
        <th>Short-Term Rental</th>
        <th>Long-Term Rental</th>
      </tr>
      <tr>
        <td>Loss Deductibility</td>
        <td>Fully deductible if materially participating</td>
        <td>$25K limit (passive)</td>
      </tr>
      <tr>
        <td>Material Participation</td>
        <td>Required but achievable</td>
        <td>Difficult for rentals</td>
      </tr>
      <tr>
        <td>Income Limits</td>
        <td>None</td>
        <td>Phase-out at $100K-150K</td>
      </tr>
      <tr>
        <td>Management Effort</td>
        <td>High</td>
        <td>Low</td>
      </tr>
    </table>
    
    <h3>Potential Pitfalls</h3>
    <ul>
      <li><strong>Documentation:</strong> Must maintain detailed time logs and guest records</li>
      <li><strong>Average Stay Calculation:</strong> Weighted average, not simple average</li>
      <li><strong>Substantial Services:</strong> Minimal services won't qualify</li>
      <li><strong>Self-Employment Tax:</strong> May trigger SE tax on net income (not applicable to losses)</li>
      <li><strong>IRS Scrutiny:</strong> Aggressive tax position requiring good records</li>
    </ul>
    
    <h3>Cost Segregation Strategy</h3>
    <p>Combine with cost segregation for maximum benefit:</p>
    <ul>
      <li>Accelerate depreciation on personal property and land improvements</li>
      <li>Take 100% bonus depreciation in year 1</li>
      <li>Generate large paper losses to offset W-2 income</li>
      <li>Particularly powerful for high-income earners</li>
    </ul>
    
    <h3>Record Keeping</h3>
    <ul>
      <li>Track all time spent on STR activities (hour logs)</li>
      <li>Document services provided to guests</li>
      <li>Maintain guest booking records showing average stay</li>
      <li>Keep receipts for all expenses and improvements</li>
      <li>Photo documentation of services provided</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Average Guest Stay (Days)', isCurrency: false },
      { label: 'Qualifies as STR (<7 days)', isCurrency: false },
      { label: 'Material Participation Status', isCurrency: false },
      { label: 'Total Rental Loss', isCurrency: true },
      { label: 'Deductible Loss (STR Strategy)', isCurrency: true },
      { label: 'Deductible Loss (Traditional Rental)', isCurrency: true },
      { label: 'Additional Tax Savings (STR vs Traditional)', isCurrency: true },
    ],
    fields: [
      {
        name: 'totalNights',
        label: 'Total Nights Rented',
        type: 'number',
        defaultValue: 180,
      },
      {
        name: 'totalReservations',
        label: 'Total Number of Reservations',
        type: 'number',
        defaultValue: 45,
      },
      {
        name: 'rentalIncome',
        label: 'Annual Rental Income',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'operatingExpenses',
        label: 'Operating Expenses',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'depreciation',
        label: 'Depreciation (Including Bonus)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'mortgageInterest',
        label: 'Mortgage Interest',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'hoursWorked',
        label: 'Hours Worked on STR',
        type: 'number',
        defaultValue: 520,
      },
      {
        name: 'providesSubstantialServices',
        label: 'Provides Substantial Services',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'personalIncome',
        label: 'Other Income (W-2, Business)',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'taxBracket',
        label: 'Marginal Tax Bracket (%)',
        type: 'number',
        defaultValue: 32,
      },
    ],
    calculate: (data) => {
      const {
        totalNights, totalReservations, rentalIncome, operatingExpenses,
        depreciation, mortgageInterest, hoursWorked, providesSubstantialServices,
        personalIncome, taxBracket
      } = data;
      
      // Calculate average stay
      const averageStay = totalReservations > 0 ? totalNights / totalReservations : 0;
      const qualifiesAsSTR = averageStay <= 7;
      
      // Check material participation (simplified - using 500 hour test)
      const materiallyParticipates = hoursWorked >= 500 || 
        (hoursWorked >= 100 && hoursWorked >= 500); // 100 hour test
      
      // Calculate total loss
      const totalExpenses = operatingExpenses + depreciation + mortgageInterest;
      const rentalLoss = Math.max(0, totalExpenses - rentalIncome);
      
      // STR Strategy deduction
      let strDeduction = 0;
      if (qualifiesAsSTR && providesSubstantialServices && materiallyParticipates) {
        strDeduction = rentalLoss; // Fully deductible
      }
      
      // Traditional rental deduction (with $25K limit and phase-out)
      let traditionalDeduction = 0;
      if (personalIncome <= 100000) {
        traditionalDeduction = Math.min(rentalLoss, 25000);
      } else if (personalIncome < 150000) {
        const phaseOut = (personalIncome - 100000) * 0.5;
        traditionalDeduction = Math.min(rentalLoss, Math.max(0, 25000 - phaseOut));
      }
      // Above $150K, no deduction for traditional rental
      
      const additionalSavings = (strDeduction - traditionalDeduction) * (taxBracket / 100);
      
      let participationStatus = '';
      if (!qualifiesAsSTR) {
        participationStatus = 'Does NOT qualify (avg stay > 7 days)';
      } else if (!providesSubstantialServices) {
        participationStatus = 'Does NOT qualify (no substantial services)';
      } else if (!materiallyParticipates) {
        participationStatus = 'Does NOT qualify (no material participation)';
      } else {
        participationStatus = 'QUALIFIES ✓ - STR Strategy Applies';
      }
      
      return [
        { label: 'Average Guest Stay (Days)', value: averageStay.toFixed(1), isCurrency: false },
        { label: 'Qualifies as STR (<7 days)', value: qualifiesAsSTR ? 'YES ✓' : 'NO ✗', isCurrency: false },
        { label: 'Material Participation Status', value: participationStatus, isCurrency: false },
        { label: 'Total Rental Loss', value: rentalLoss, isCurrency: true },
        { label: 'Deductible Loss (STR Strategy)', value: strDeduction, isCurrency: true },
        { label: 'Deductible Loss (Traditional Rental)', value: traditionalDeduction, isCurrency: true },
        { label: 'Additional Tax Savings (STR vs Traditional)', value: additionalSavings, isCurrency: true },
      ];
    },
  },
};
