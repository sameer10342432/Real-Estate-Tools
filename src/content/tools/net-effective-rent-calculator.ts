import { CalculatorContent } from '@/types';

export const NET_EFFECTIVE_RENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Effective Rent Calculator (Commercial)',
  description: 'Calculate net effective rent for commercial leases. Factor in free rent, TI allowances, and concessions to determine true lease value.',
  slug: 'net-effective-rent-calculator',
  icon: '📊',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding Net Effective Rent in Commercial Leases',
    content: `
    <h2>What is Net Effective Rent?</h2>
    <p>Net Effective Rent (NER) is the true average rent paid over the life of a lease after accounting for all concessions, including free rent periods, tenant improvement allowances, moving allowances, and other financial incentives. It provides an apples-to-apples comparison between different lease proposals.</p>
    
    <h3>Why Net Effective Rent Matters</h3>
    <p>Face rent (quoted rent) can be misleading. Two seemingly different proposals may have the same economic value when concessions are considered. NER helps you:</p>
    <ul>
      <li>Compare lease proposals accurately</li>
      <li>Understand true cost of occupancy</li>
      <li>Evaluate landlord concessions</li>
      <li>Make informed decisions</li>
      <li>Negotiate better terms</li>
    </ul>

    <h3>Components of Net Effective Rent</h3>
    <ul>
      <li><strong>Base Rent:</strong> Stated monthly/annual rent per square foot</li>
      <li><strong>Free Rent:</strong> Months of rent abatement</li>
      <li><strong>TI Allowance:</strong> Tenant improvement contribution from landlord</li>
      <li><strong>Moving Allowance:</strong> Cash for relocation costs</li>
      <li><strong>Rent Steps:</strong> Scheduled increases over lease term</li>
      <li><strong>Operating Expense Base Year:</strong> CAM/expense caps</li>
    </ul>

    <h3>How to Calculate Net Effective Rent</h3>
    <p><strong>Formula:</strong></p>
    <p>NER = (Total Rent Paid - Total Concessions) ÷ (Lease Term in Months) ÷ Square Footage</p>
    
    <p><strong>Step by Step:</strong></p>
    <ol>
      <li>Calculate total rent over full lease term</li>
      <li>Subtract value of free rent periods</li>
      <li>Subtract TI allowance and other cash concessions</li>
      <li>Divide by total months in lease</li>
      <li>Divide by square footage</li>
    </ol>

    <h3>Common Landlord Concessions</h3>
    <ul>
      <li><strong>Free Rent:</strong> 1-6 months typical for 5-year lease</li>
      <li><strong>TI Allowance:</strong> $20-$100+ per SF depending on space condition</li>
      <li><strong>Moving Allowance:</strong> $5-$15 per SF</li>
      <li><strong>Early Access:</strong> Pre-commencement buildout period</li>
      <li><strong>Rent Abatement:</strong> During construction period</li>
      <li><strong>Buyout of Existing Lease:</strong> Payment of termination fees</li>
      <li><strong>Parking Credits:</strong> Free or reduced parking</li>
    </ul>

    <h3>Timing of Concessions Matters</h3>
    <p>Present Value Impact:</p>
    <ul>
      <li><strong>Front-loaded:</strong> Free rent at start = higher present value to tenant</li>
      <li><strong>Back-loaded:</strong> Concessions at end = lower present value</li>
      <li><strong>Cash vs. Credit:</strong> Upfront TI better than rent credit</li>
      <li><strong>Time Value of Money:</strong> Early savings worth more</li>
    </ul>

    <h3>Real-World Example</h3>
    <p><strong>Proposal A:</strong></p>
    <ul>
      <li>5,000 SF, 5-year lease</li>
      <li>$30/SF face rent</li>
      <li>2 months free rent</li>
      <li>$50/SF TI allowance</li>
    </ul>
    
    <p><strong>Proposal B:</strong></p>
    <ul>
      <li>5,000 SF, 5-year lease</li>
      <li>$28/SF face rent</li>
      <li>No free rent</li>
      <li>$30/SF TI allowance</li>
    </ul>

    <p>Which is better? NER calculation reveals the answer!</p>

    <h3>Lease Structures & NER Impact</h3>
    <ul>
      <li><strong>Gross Lease:</strong> Landlord pays operating expenses - higher base rent</li>
      <li><strong>Modified Gross:</strong> Some expenses passed through - moderate base rent</li>
      <li><strong>Triple Net (NNN):</strong> Tenant pays all expenses - lower base rent</li>
      <li><strong>Must factor in:</strong> Operating expense structure when comparing NER</li>
    </ul>

    <h3>Rent Steps & Escalations</h3>
    <p>Many leases include scheduled rent increases:</p>
    <ul>
      <li><strong>Annual Escalation:</strong> Fixed % increase (2-3% typical)</li>
      <li><strong>Stepped Rent:</strong> Pre-defined increases at set intervals</li>
      <li><strong>CPI Adjustment:</strong> Tied to Consumer Price Index</li>
      <li><strong>Impact on NER:</strong> Higher later years reduce NER</li>
    </ul>

    <h3>Break-Even Analysis</h3>
    <p>Calculate how long to recoup upfront concessions:</p>
    <ul>
      <li>If rent is $5/SF higher but you get $250K in concessions</li>
      <li>Breakeven = $250,000 ÷ ($5 × Square Footage × 12 months)</li>
      <li>Helps decide between different structures</li>
    </ul>

    <h3>Negotiation Strategies</h3>
    <ul>
      <li><strong>Request Net Effective Rent:</strong> Ask landlord to disclose NER</li>
      <li><strong>Focus on Total Deal:</strong> Not just face rent</li>
      <li><strong>Front-load Concessions:</strong> Request early free rent</li>
      <li><strong>TI vs. Free Rent:</strong> Negotiate what's more valuable to you</li>
      <li><strong>Longer Term = More Concessions:</strong> Leverage lease length</li>
    </ul>

    <h3>Red Flags</h3>
    <ul>
      <li>Landlord refuses to discuss NER</li>
      <li>Excessive back-loaded concessions</li>
      <li>TI allowance below market standards</li>
      <li>Free rent only during construction (not extra)</li>
      <li>Concessions contingent on unrealistic terms</li>
    </ul>

    <h3>Additional Costs to Consider</h3>
    <p>NER typically doesn't include:</p>
    <ul>
      <li>CAM charges and operating expenses</li>
      <li>Utilities</li>
      <li>Janitorial and maintenance</li>
      <li>Property taxes (unless NNN)</li>
      <li>Insurance</li>
      <li>Parking fees</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter lease terms to calculate true economic value:</p>
    <ul>
      <li><strong>Square Footage:</strong> Size of leased space</li>
      <li><strong>Base Rent Per SF:</strong> Quoted annual rent</li>
      <li><strong>Lease Term:</strong> Duration in years</li>
      <li><strong>Free Rent Months:</strong> Rent abatement period</li>
      <li><strong>TI Allowance:</strong> Landlord's improvement contribution</li>
      <li><strong>Other Concessions:</strong> Moving allowances, credits, etc.</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Leased Square Footage',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'baseRentPerSF',
        label: 'Base Rent Per SF (Annual) ($)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'leaseTermYears',
        label: 'Lease Term (Years)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'freeRentMonths',
        label: 'Free Rent Months',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'tiAllowancePerSF',
        label: 'TI Allowance Per SF ($)',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'otherConcessions',
        label: 'Other Concessions (Moving, etc.) ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'annualRentIncrease',
        label: 'Annual Rent Increase (%)',
        type: 'number',
        defaultValue: 3,
      },
    ],
    results: [
      { label: 'Face Rent (Year 1)', isCurrency: true },
      { label: 'Total Base Rent (All Years)', isCurrency: true },
      { label: 'Free Rent Value', isCurrency: true },
      { label: 'Total TI Allowance', isCurrency: true },
      { label: 'Total Concessions', isCurrency: true },
      { label: 'Net Rent Paid Over Term', isCurrency: true },
      { label: 'Net Effective Rent (Per SF/Year)', isCurrency: true },
      { label: 'Net Effective Rent (Per SF/Month)', isCurrency: true },
      { label: 'Savings vs. Face Rent', isCurrency: true },
    ],
    calculate: (values) => {
      const { squareFootage, baseRentPerSF, leaseTermYears, freeRentMonths, tiAllowancePerSF, otherConcessions, annualRentIncrease } = values;
      
      const leaseTermMonths = leaseTermYears * 12;
      
      // Calculate face rent (year 1)
      const faceRent = squareFootage * baseRentPerSF;
      
      // Calculate total base rent with escalations
      let totalBaseRent = 0;
      let currentRent = faceRent;
      for (let year = 0; year < leaseTermYears; year++) {
        totalBaseRent += currentRent;
        currentRent *= (1 + annualRentIncrease / 100);
      }
      
      // Calculate free rent value (using year 1 rate)
      const freeRentValue = (faceRent / 12) * freeRentMonths;
      
      // Calculate total TI allowance
      const totalTIAllowance = squareFootage * tiAllowancePerSF;
      
      // Calculate total concessions
      const totalConcessions = freeRentValue + totalTIAllowance + otherConcessions;
      
      // Calculate net rent paid
      const netRentPaid = totalBaseRent - totalConcessions;
      
      // Calculate net effective rent per SF per year
      const netEffectiveRentPerYear = netRentPaid / squareFootage / leaseTermYears;
      const netEffectiveRentPerMonth = netEffectiveRentPerYear / 12;
      
      // Calculate savings
      const savingsVsFaceRent = (baseRentPerSF * leaseTermYears) - (netRentPaid / squareFootage);

      return [
        { label: 'Face Rent (Year 1)', value: faceRent.toFixed(2), isCurrency: true },
        { label: 'Total Base Rent (All Years)', value: totalBaseRent.toFixed(2), isCurrency: true },
        { label: 'Free Rent Value', value: freeRentValue.toFixed(2), isCurrency: true },
        { label: 'Total TI Allowance', value: totalTIAllowance.toFixed(2), isCurrency: true },
        { label: 'Total Concessions', value: totalConcessions.toFixed(2), isCurrency: true },
        { label: 'Net Rent Paid Over Term', value: netRentPaid.toFixed(2), isCurrency: true },
        { label: 'Net Effective Rent (Per SF/Year)', value: netEffectiveRentPerYear.toFixed(2), isCurrency: true },
        { label: 'Net Effective Rent (Per SF/Month)', value: netEffectiveRentPerMonth.toFixed(2), isCurrency: true },
        { label: 'Savings vs. Face Rent', value: (savingsVsFaceRent * squareFootage).toFixed(2), isCurrency: true },
      ];
    },
  },
};
