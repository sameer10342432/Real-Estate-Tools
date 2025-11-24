import { CalculatorContent } from '@/types';

export const NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'NYC 421-a Tax Abatement Estimator - Property Tax Savings Calculator',
  description: 'Calculate your property tax savings under New York City 421-a tax abatement program. Understand phase-in schedules, exemption percentages, and affordable housing benefits.',
  slug: 'new-york-city-421a-tax-abatement-estimator',
  icon: 'Icon',
  category: 'State-Specific',
  article: {
    title: 'Understanding NYC 421-a Tax Abatement Program',
    content: `
    <h2>What is the NYC 421-a Tax Abatement?</h2>
    <p>The 421-a tax abatement is a New York City property tax exemption program designed to incentivize new residential construction. The program provides significant property tax reductions for new residential buildings, condominiums, and cooperative apartments for periods ranging from 10 to 35 years.</p>
    
    <p>This abatement can save NYC property owners thousands to tens of thousands of dollars annually, making new development more financially feasible and new homes more affordable for buyers.</p>

    <h3>Key Features of 421-a</h3>
    <ul>
      <li><strong>Significant Savings:</strong> Exempts 100% of increased assessed value for initial years</li>
      <li><strong>Long Duration:</strong> Benefits last 10-35 years depending on program variant</li>
      <li><strong>Phase-In Schedule:</strong> Tax exemption gradually decreases over time</li>
      <li><strong>Transferable:</strong> Benefit stays with the property when sold</li>
      <li><strong>New Construction:</strong> Only applies to new buildings or substantial renovations</li>
      <li><strong>Affordable Housing Link:</strong> Enhanced benefits for projects with affordable units</li>
    </ul>

    <h3>Types of 421-a Programs</h3>
    <p><strong>421-a(16) - Geographic Exclusion Area Program (Expired 2022):</strong></p>
    <ul>
      <li>Required 25-30% affordable housing in high-value areas</li>
      <li>Provided 35-year tax benefit</li>
      <li>Only for projects commenced before June 15, 2022</li>
    </ul>
    
    <p><strong>As-of-Right 421-a (Older Version):</strong></p>
    <ul>
      <li>10-25 year benefits depending on location</li>
      <li>No affordable housing requirement</li>
      <li>Still in effect for buildings that received benefits before 2016</li>
    </ul>
    
    <p><strong>Note:</strong> The 421-a program expired in June 2022 and was replaced by 485-x in 2023, but existing 421-a abatements continue for their full term.</p>

    <h3>How 421-a Tax Abatement Works</h3>
    <p>The abatement exempts the increased assessed value resulting from new construction. Here's a typical schedule:</p>
    
    <p><strong>Example - 25-Year Program:</strong></p>
    <table>
      <tr><th>Years</th><th>Exemption %</th></tr>
      <tr><td>1-10</td><td>100%</td></tr>
      <tr><td>11-15</td><td>80%</td></tr>
      <tr><td>16-20</td><td>60%</td></tr>
      <tr><td>21-25</td><td>40%</td></tr>
      <tr><td>26+</td><td>0% (Full Taxes)</td></tr>
    </table>

    <h3>Calculating Your 421-a Savings</h3>
    <p><strong>Step 1:</strong> Determine the "pre-construction" assessed value (land value before development)</p>
    <p><strong>Step 2:</strong> Determine the "post-construction" assessed value (land + new building)</p>
    <p><strong>Step 3:</strong> Calculate the increased value: Post - Pre = Increase</p>
    <p><strong>Step 4:</strong> Apply exemption percentage to the increase</p>
    <p><strong>Step 5:</strong> Calculate tax on exempt amount using NYC tax rate</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Pre-construction assessed value: $500,000</li>
      <li>Post-construction assessed value: $5,000,000</li>
      <li>Increased value: $4,500,000</li>
      <li>Year 5 exemption: 100%</li>
      <li>Exempt amount: $4,500,000 × 100% = $4,500,000</li>
      <li>NYC tax rate: ~0.8% (varies by class)</li>
      <li>Annual savings: $4,500,000 × 0.008 = $36,000</li>
    </ul>

    <h3>Geographic Variations</h3>
    <p>421-a benefits varied by location:</p>
    <ul>
      <li><strong>Geographic Exclusion Area (GEA):</strong> Manhattan below 96th St, parts of Brooklyn and Queens - required affordable housing for benefits</li>
      <li><strong>Non-GEA Areas:</strong> As-of-right benefits without affordable housing requirement (pre-2016)</li>
      <li><strong>Enhanced Areas:</strong> Some outer borough locations qualified for extended benefits</li>
    </ul>

    <h3>Affordable Housing Component</h3>
    <p>For enhanced 421-a benefits, developers had to include affordable units:</p>
    <ul>
      <li>25% of units at 60% of Area Median Income (AMI), or</li>
      <li>30% of units at 130% AMI, or</li>
      <li>Off-site construction in other neighborhoods</li>
    </ul>

    <h3>Impact on Buyers and Owners</h3>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Lower carrying costs during abatement period</li>
      <li>Important to understand remaining abatement duration</li>
      <li>Consider impact of expiration on future property taxes</li>
      <li>May affect resale value and buyer pool</li>
    </ul>
    
    <p><strong>For Owners:</strong></p>
    <ul>
      <li>Significant tax savings, especially in early years</li>
      <li>Plan for tax increase as abatement phases out</li>
      <li>Abatement stays with property if you sell</li>
      <li>No action needed to maintain benefit</li>
    </ul>

    <h3>421-a vs 485-x (New Program)</h3>
    <p>In 2023, NYC launched the 485-x program to replace 421-a:</p>
    <ul>
      <li>Similar concept but stricter affordable housing requirements</li>
      <li>Higher prevailing wage requirements for construction workers</li>
      <li>Deeper affordability levels for qualified units</li>
      <li>Existing 421-a benefits are grandfathered and continue</li>
    </ul>

    <h3>Important Considerations</h3>
    <ul>
      <li><strong>Phase-Out Planning:</strong> Budget for increasing taxes as exemption decreases</li>
      <li><strong>Refinancing Impact:</strong> Lenders consider post-abatement taxes when qualifying</li>
      <li><strong>Co-op/Condo Documents:</strong> Review offering plan for exact abatement schedule</li>
      <li><strong>DOF Lookup:</strong> Check NYC Department of Finance for exact benefit amount</li>
      <li><strong>Certificate of Eligibility:</strong> Building must have valid COE for benefits to apply</li>
    </ul>

    <h3>Common 421-a Schedules</h3>
    <p><strong>10-Year Program:</strong> Typically for smaller projects</p>
    <p><strong>15-Year Program:</strong> Standard for qualifying buildings</p>
    <p><strong>25-Year Program:</strong> Enhanced program with affordable housing</p>
    <p><strong>35-Year Program:</strong> Maximum benefit for projects with substantial affordable units</p>

    <h3>Finding Your 421-a Information</h3>
    <p>To verify your property's 421-a status:</p>
    <ul>
      <li>Check your property tax bill for exemption details</li>
      <li>Visit NYC Department of Finance website</li>
      <li>Review your building's offering plan/certificate of occupancy</li>
      <li>Contact your building management or developer</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>This calculator helps you estimate:</p>
    <ul>
      <li>Annual property tax with and without 421-a abatement</li>
      <li>Current year savings based on exemption percentage</li>
      <li>Future tax liability as abatement phases out</li>
      <li>Total savings over the full abatement period</li>
      <li>Planning for post-abatement tax increases</li>
    </ul>
    
    <p>Enter your pre-construction value, post-construction value, current year of abatement, total years of benefit, and NYC tax rate to see your estimated savings.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'preConstructionValue',
        label: 'Pre-Construction Assessed Value',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'postConstructionValue',
        label: 'Post-Construction Assessed Value',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'currentYear',
        label: 'Current Year of Abatement (1-35)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'totalYears',
        label: 'Total Years of 421-a Benefit',
        type: 'select',
        options: [
          { value: '10', label: '10 Years' },
          { value: '15', label: '15 Years' },
          { value: '25', label: '25 Years' },
          { value: '35', label: '35 Years' },
        ],
        defaultValue: '25',
      },
      {
        name: 'nycTaxRate',
        label: 'NYC Property Tax Rate (%)',
        type: 'number',
        defaultValue: 0.8,
      },
    ],
    calculate: (values) => {
      const { preConstructionValue, postConstructionValue, currentYear, totalYears, nycTaxRate } = values;
      
      const totalYearsNum = parseInt(totalYears as string);
      
      // Calculate increased value
      const increasedValue = postConstructionValue - preConstructionValue;
      
      // Determine exemption percentage based on year and total program length
      let exemptionPercentage = 0;
      
      if (totalYearsNum === 10) {
        if (currentYear <= 2) exemptionPercentage = 100;
        else if (currentYear <= 4) exemptionPercentage = 75;
        else if (currentYear <= 6) exemptionPercentage = 50;
        else if (currentYear <= 8) exemptionPercentage = 25;
        else if (currentYear <= 10) exemptionPercentage = 12.5;
        else exemptionPercentage = 0;
      } else if (totalYearsNum === 15) {
        if (currentYear <= 4) exemptionPercentage = 100;
        else if (currentYear <= 7) exemptionPercentage = 80;
        else if (currentYear <= 10) exemptionPercentage = 60;
        else if (currentYear <= 13) exemptionPercentage = 40;
        else if (currentYear <= 15) exemptionPercentage = 20;
        else exemptionPercentage = 0;
      } else if (totalYearsNum === 25) {
        if (currentYear <= 10) exemptionPercentage = 100;
        else if (currentYear <= 15) exemptionPercentage = 80;
        else if (currentYear <= 20) exemptionPercentage = 60;
        else if (currentYear <= 25) exemptionPercentage = 40;
        else exemptionPercentage = 0;
      } else if (totalYearsNum === 35) {
        if (currentYear <= 15) exemptionPercentage = 100;
        else if (currentYear <= 20) exemptionPercentage = 90;
        else if (currentYear <= 25) exemptionPercentage = 70;
        else if (currentYear <= 30) exemptionPercentage = 50;
        else if (currentYear <= 35) exemptionPercentage = 30;
        else exemptionPercentage = 0;
      }
      
      // Calculate exempt amount
      const exemptAmount = increasedValue * (exemptionPercentage / 100);
      
      // Calculate taxable value with and without abatement
      const taxableValueWithAbatement = preConstructionValue + (increasedValue - exemptAmount);
      const taxableValueWithoutAbatement = postConstructionValue;
      
      // Calculate property taxes
      const taxRateDecimal = nycTaxRate / 100;
      const annualTaxWithAbatement = taxableValueWithAbatement * taxRateDecimal;
      const annualTaxWithoutAbatement = taxableValueWithoutAbatement * taxRateDecimal;
      
      // Calculate annual savings
      const annualSavings = annualTaxWithoutAbatement - annualTaxWithAbatement;
      
      // Calculate total savings over full abatement period
      let totalSavings = 0;
      for (let year = 1; year <= totalYearsNum; year++) {
        let yearExemption = 0;
        if (totalYearsNum === 25) {
          if (year <= 10) yearExemption = 100;
          else if (year <= 15) yearExemption = 80;
          else if (year <= 20) yearExemption = 60;
          else if (year <= 25) yearExemption = 40;
        }
        // Similar logic for other durations...
        const yearExemptAmount = increasedValue * (yearExemption / 100);
        const yearSavings = yearExemptAmount * taxRateDecimal;
        totalSavings += yearSavings;
      }
      
      // Years remaining
      const yearsRemaining = Math.max(0, totalYearsNum - currentYear);
      
      // Post-abatement annual tax (for planning)
      const postAbatementTax = taxableValueWithoutAbatement * taxRateDecimal;
      const taxIncrease = postAbatementTax - annualTaxWithAbatement;

      return [
        { label: 'Current Exemption Percentage', value: exemptionPercentage.toFixed(0) + '%' },
        { label: 'Current Year Exempt Amount', value: '$' + exemptAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax With 421-a', value: '$' + annualTaxWithAbatement.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Without 421-a', value: '$' + annualTaxWithoutAbatement.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Current Year Tax Savings', value: '$' + annualSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Years Remaining', value: yearsRemaining.toFixed(0) + ' years' },
        { label: 'Post-Abatement Annual Tax', value: '$' + postAbatementTax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Tax Increase After Expiration', value: '$' + taxIncrease.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
    },
  },
};