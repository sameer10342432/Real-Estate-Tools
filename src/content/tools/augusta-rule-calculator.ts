import { CalculatorContent } from '@/types';

export const AUGUSTA_RULE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Augusta Rule (14-Day Rental) Tax Calculator',
  description: 'Calculate tax-free rental income using the Augusta Rule (Section 280A). Rent your home for up to 14 days per year without paying taxes on the income.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'augusta-rule-calculator',
  article: {
    title: "Understanding the Augusta Rule for Tax-Free Rental Income",
    content: `
    <h2>What is the Augusta Rule?</h2>
    <p>The Augusta Rule, named after the city of Augusta, Georgia (home of the Masters golf tournament), refers to IRC Section 280A(g). It allows homeowners to rent out their primary residence for up to 14 days per year and exclude all rental income from taxation.</p>
    
    <h3>Key Requirements</h3>
    <ul>
      <li><strong>Primary Residence:</strong> Must be your main home (not a rental property)</li>
      <li><strong>14-Day Limit:</strong> Rent for 14 days or fewer during the tax year</li>
      <li><strong>Personal Use:</strong> Use the home personally for more than 14 days OR more than 10% of rental days</li>
      <li><strong>Tax-Free Income:</strong> Don't report rental income on tax return</li>
      <li><strong>No Deductions:</strong> Cannot deduct rental expenses</li>
    </ul>
    
    <h3>How It Works</h3>
    <ul>
      <li>Rent your home for up to 14 days/nights per year</li>
      <li>Collect rental income at fair market rate</li>
      <li>Income is completely tax-free - don't report on Schedule E</li>
      <li>Normal homeowner deductions (mortgage interest, property tax) remain deductible</li>
    </ul>
    
    <h3>Common Uses</h3>
    <ul>
      <li><strong>Special Events:</strong> Super Bowl, Masters, political conventions, music festivals</li>
      <li><strong>Business Use:</strong> Rent to your own business for meetings, corporate events</li>
      <li><strong>Vacation Rentals:</strong> Short-term rentals during peak seasons</li>
      <li><strong>Film/Photo Shoots:</strong> Movie productions, commercial filming</li>
    </ul>
    
    <h3>Business Rental Strategy</h3>
    <p>A powerful strategy for business owners:</p>
    <ul>
      <li>Rent your home to your business for legitimate business purposes</li>
      <li>Business deducts the rental expense (corporate meeting, team building, client events)</li>
      <li>You receive tax-free income up to 14 days</li>
      <li>Must charge fair market rate (comparable to hotels/venues)</li>
      <li>Must have legitimate business purpose and documentation</li>
    </ul>
    
    <h3>Fair Market Rate Determination</h3>
    <ul>
      <li>Research comparable short-term rentals in your area (Airbnb, VRBO)</li>
      <li>Consider local hotel rates for similar accommodations</li>
      <li>For business rentals, compare to conference centers or meeting venues</li>
      <li>Document market research to support your rates</li>
    </ul>
    
    <h3>Documentation Requirements</h3>
    <ul>
      <li><strong>Rental Agreements:</strong> Written contracts for each rental period</li>
      <li><strong>Market Rate Evidence:</strong> Comparables showing fair market value</li>
      <li><strong>Guest Records:</strong> Track who rented and for what purpose</li>
      <li><strong>Calendar:</strong> Detailed tracking of rental vs. personal use days</li>
      <li><strong>Business Purpose:</strong> For business rentals, document the business purpose</li>
    </ul>
    
    <h3>Important Limitations</h3>
    <ul>
      <li><strong>Cannot Deduct Expenses:</strong> No rental expense deductions allowed</li>
      <li><strong>Primary Residence Only:</strong> Doesn't apply to rental properties or second homes</li>
      <li><strong>Personal Use Required:</strong> Must use home personally to qualify</li>
      <li><strong>Strict 14-Day Limit:</strong> Day 15 makes ALL income taxable</li>
    </ul>
    
    <h3>What Happens at Day 15?</h3>
    <p>If you rent for more than 14 days:</p>
    <ul>
      <li>ALL rental income becomes taxable</li>
      <li>Must report on Schedule E</li>
      <li>Can deduct rental expenses proportionally</li>
      <li>Subject to passive activity loss rules</li>
      <li>Lose the Augusta Rule benefit entirely</li>
    </ul>
    
    <h3>State Tax Considerations</h3>
    <ul>
      <li>Most states follow federal Augusta Rule treatment</li>
      <li>Some states may have different rules or requirements</li>
      <li>Local occupancy taxes may still apply</li>
      <li>Check state and local regulations</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Track days carefully - never exceed 14 days</li>
      <li>Charge fair market rates (not artificially inflated)</li>
      <li>Maintain thorough documentation</li>
      <li>For business rentals, ensure legitimate business purpose</li>
      <li>Keep rental and personal use separate</li>
      <li>Consider local short-term rental regulations</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Rental Days', isCurrency: false },
      { label: 'Qualifies for Augusta Rule', isCurrency: false },
      { label: 'Total Rental Income', isCurrency: true },
      { label: 'Tax-Free Income (Augusta)', isCurrency: true },
      { label: 'Taxable Income (If Exceeded 14 Days)', isCurrency: true },
      { label: 'Tax Savings', isCurrency: true },
      { label: 'Days Remaining', isCurrency: false },
    ],
    fields: [
      {
        name: 'rentalDays',
        label: 'Number of Rental Days',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'dailyRate',
        label: 'Daily Rental Rate',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'personalUseDays',
        label: 'Personal Use Days',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'isPrimaryResidence',
        label: 'Is Primary Residence',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'taxBracket',
        label: 'Marginal Tax Bracket (%)',
        type: 'number',
        defaultValue: 32,
      },
      {
        name: 'stateTaxRate',
        label: 'State Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    calculate: (data) => {
      const {
        rentalDays, dailyRate, personalUseDays,
        isPrimaryResidence, taxBracket, stateTaxRate
      } = data;
      
      const totalRentalIncome = rentalDays * dailyRate;
      
      // Check if qualifies for Augusta Rule
      const meetsRentalLimit = rentalDays <= 14;
      const meetsPersonalUse = personalUseDays > 14 || personalUseDays > (rentalDays * 0.1);
      const qualifiesAugusta = isPrimaryResidence && meetsRentalLimit && meetsPersonalUse;
      
      // Calculate tax implications
      const taxFreeIncome = qualifiesAugusta ? totalRentalIncome : 0;
      const taxableIncome = qualifiesAugusta ? 0 : totalRentalIncome;
      
      const combinedTaxRate = (taxBracket + stateTaxRate) / 100;
      const taxSavings = taxFreeIncome * combinedTaxRate;
      
      const daysRemaining = qualifiesAugusta ? 14 - rentalDays : 0;
      
      let qualificationStatus = '';
      if (!isPrimaryResidence) {
        qualificationStatus = 'NO - Not primary residence';
      } else if (!meetsRentalLimit) {
        qualificationStatus = `NO - Exceeded 14 days (${rentalDays} days)`;
      } else if (!meetsPersonalUse) {
        qualificationStatus = 'NO - Insufficient personal use';
      } else {
        qualificationStatus = 'YES ✓ - Qualifies for Augusta Rule';
      }
      
      return [
        { label: 'Total Rental Days', value: rentalDays.toString(), isCurrency: false },
        { label: 'Qualifies for Augusta Rule', value: qualificationStatus, isCurrency: false },
        { label: 'Total Rental Income', value: totalRentalIncome, isCurrency: true },
        { label: 'Tax-Free Income (Augusta)', value: taxFreeIncome, isCurrency: true },
        { label: 'Taxable Income (If Exceeded 14 Days)', value: taxableIncome, isCurrency: true },
        { label: 'Tax Savings', value: taxSavings, isCurrency: true },
        { label: 'Days Remaining', value: daysRemaining > 0 ? `${daysRemaining} days left` : 'Limit reached', isCurrency: false },
      ];
    },
  },
};
