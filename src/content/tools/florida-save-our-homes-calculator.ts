import { CalculatorContent } from '@/types';

export const FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Florida Save Our Homes (SOH) Calculator - Homestead Tax Benefit',
  description: 'Calculate your property tax savings under Florida Save Our Homes amendment. Understand assessment caps, portability, and homestead benefits in Florida.',
  slug: 'florida-save-our-homes-calculator',
  icon: 'Icon',
  category: 'State-Specific',
  article: {
    title: 'Florida Save Our Homes (SOH) Benefit Calculator Guide',
    content: `
    <h2>What is Florida Save Our Homes (SOH)?</h2>
    <p>Save Our Homes is a Florida constitutional amendment passed in 1992 that limits annual increases in the assessed value of homestead properties to 3% or the rate of inflation (CPI), whichever is lower. This provides significant protection against property tax increases in Florida's rapidly appreciating real estate markets.</p>
    
    <p>The SOH benefit can save Florida homeowners thousands of dollars annually, especially in high-growth areas like Miami, Tampa, Orlando, Jacksonville, and the Florida Keys.</p>

    <h3>Key Features of Save Our Homes</h3>
    <ul>
      <li><strong>3% or CPI Cap:</strong> Assessment increases limited to 3% or inflation rate (whichever is lower)</li>
      <li><strong>Cumulative Benefit:</strong> Savings grow larger each year in appreciating markets</li>
      <li><strong>Homestead Required:</strong> Must file for homestead exemption by March 1</li>
      <li><strong>Primary Residence Only:</strong> Doesn't apply to second homes or investment properties</li>
      <li><strong>Portability:</strong> Can transfer up to $500,000 of benefit to new Florida homestead</li>
      <li><strong>No Income Limits:</strong> Available to all homestead property owners</li>
    </ul>

    <h3>How Save Our Homes Works</h3>
    <p><strong>Example Scenario:</strong></p>
    <p>Your home's just value was $400,000 last year. This year, the property appraiser determines the just value is $480,000 (20% increase).</p>
    
    <p><strong>Without SOH:</strong></p>
    <ul>
      <li>Assessed Value: $480,000</li>
      <li>Less Homestead Exemption: -$50,000</li>
      <li>Taxable Value: $430,000</li>
      <li>Tax (at 2% rate): $8,600</li>
    </ul>
    
    <p><strong>With SOH (3% cap):</strong></p>
    <ul>
      <li>Prior Assessed Value: $400,000</li>
      <li>Maximum Increase: $400,000 × 3% = $12,000</li>
      <li>New Assessed Value: $412,000</li>
      <li>Less Homestead Exemption: -$50,000</li>
      <li>Taxable Value: $362,000</li>
      <li>Tax (at 2% rate): $7,240</li>
      <li><strong>Annual Savings: $1,360</strong></li>
    </ul>

    <h3>Understanding the SOH Cap Difference</h3>
    <p>The difference between just value (market value) and assessed value is called the "SOH cap difference" or "SOH benefit." This represents the amount of value protected from taxation.</p>
    
    <p>In the example above:</p>
    <p>SOH Cap Difference = $480,000 - $412,000 = $68,000</p>
    <p>This $68,000 is shielded from property taxation, saving you money every year.</p>

    <h3>Florida Homestead Exemption</h3>
    <p>In addition to SOH, Florida homestead properties receive exemptions:</p>
    <ul>
      <li><strong>Standard Exemption:</strong> Up to $50,000 ($25,000 for all taxes, additional $25,000 for non-school taxes)</li>
      <li><strong>Senior Exemption:</strong> Additional exemption for seniors 65+ with limited income</li>
      <li><strong>Disabled Veteran Exemption:</strong> Additional exemptions for disabled veterans</li>
      <li><strong>Widow/Widower Exemption:</strong> Additional $500 exemption</li>
    </ul>

    <h3>SOH Portability - Moving Within Florida</h3>
    <p>Since 2008, Florida homeowners can transfer their SOH benefit when moving to a new homestead in Florida:</p>
    <ul>
      <li>Can transfer up to $500,000 of SOH benefit</li>
      <li>Must establish new homestead within 2 years of abandoning old one</li>
      <li>Benefit is prorated if moving to higher or lower valued home</li>
      <li>File for portability by March 1 of the year establishing new homestead</li>
    </ul>
    
    <p><strong>Portability Calculation:</strong></p>
    <p>If you're moving UP in value: Full SOH benefit (up to $500K) transfers</p>
    <p>If you're moving DOWN in value: SOH benefit is reduced proportionally</p>

    <h3>When Does SOH Reset?</h3>
    <ul>
      <li><strong>Sale to New Owner:</strong> Property reassessed at full market value for new owner</li>
      <li><strong>Change of Use:</strong> Converting homestead to rental or business use</li>
      <li><strong>Abandonment:</strong> No longer using as primary residence</li>
      <li><strong>Failure to File:</strong> Not filing homestead exemption by March 1</li>
    </ul>

    <h3>Improvements and Additions</h3>
    <p>When you make improvements to your homesteaded property:</p>
    <ul>
      <li>New construction/improvements are added to assessed value</li>
      <li>The added value is immediately assessable (not subject to 3% cap)</li>
      <li>Future increases on the total are then capped at 3%/CPI</li>
      <li>Consider timing major renovations strategically</li>
    </ul>

    <h3>Non-Homestead Property Assessment Cap</h3>
    <p>Florida also caps non-homestead properties (rentals, commercial, vacant land) at 10% annual increase - less generous than SOH but still provides some protection.</p>

    <h3>High-Appreciation Market Examples</h3>
    <p>SOH provides enormous value in hot Florida markets:</p>
    <ul>
      <li><strong>Miami/South Florida:</strong> Some areas seeing 15-25% annual appreciation</li>
      <li><strong>Tampa Bay:</strong> Strong market with 10-20% increases</li>
      <li><strong>Orlando:</strong> Tourism and population growth driving values up</li>
      <li><strong>Jacksonville:</strong> Steady appreciation in desirable neighborhoods</li>
      <li><strong>Florida Keys:</strong> Limited inventory causing significant value increases</li>
    </ul>

    <h3>Protesting Your Assessment</h3>
    <p>Even with SOH, you can petition the Value Adjustment Board (VAB):</p>
    <ul>
      <li>File petition by specific deadline (usually 25 days after TRIM notice)</li>
      <li>Provide comparable sales data</li>
      <li>Present evidence to VAB</li>
      <li>Successful protest lowers your assessed value basis going forward</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>This calculator helps you:</p>
    <ul>
      <li>Determine your SOH-capped assessed value</li>
      <li>Calculate annual property taxes with and without SOH</li>
      <li>See your annual and cumulative tax savings</li>
      <li>Project future SOH benefits as values continue rising</li>
      <li>Understand portability if moving to a new Florida home</li>
    </ul>
    
    <p>Enter your prior year assessed value, current just value (market value), applicable cap rate, homestead exemption, and tax rate to see your SOH benefit.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'priorAssessedValue',
        label: 'Prior Year Assessed Value',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'currentJustValue',
        label: 'Current Just Value (Market Value)',
        type: 'number',
        defaultValue: 480000,
      },
      {
        name: 'sohCapRate',
        label: 'SOH Cap Rate (%) - Usually 3% or CPI',
        type: 'number',
        defaultValue: 3.0,
      },
      {
        name: 'homesteadExemption',
        label: 'Homestead Exemption Amount',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'totalTaxRate',
        label: 'Total Millage Rate (%)',
        type: 'number',
        defaultValue: 2.0,
      },
    ],
    calculate: (values) => {
      const { priorAssessedValue, currentJustValue, sohCapRate, homesteadExemption, totalTaxRate } = values;
      
      // Calculate SOH-capped assessed value
      const maxIncrease = priorAssessedValue * (sohCapRate / 100);
      const maxAllowedAssessed = priorAssessedValue + maxIncrease;
      const cappedAssessedValue = Math.min(currentJustValue, maxAllowedAssessed);
      
      // Calculate SOH benefit (cap difference)
      const sohCapDifference = currentJustValue - cappedAssessedValue;
      
      // Calculate taxable values
      const taxableValueWithSOH = Math.max(0, cappedAssessedValue - homesteadExemption);
      const taxableValueWithoutSOH = Math.max(0, currentJustValue - homesteadExemption);
      
      // Calculate property taxes
      const taxRateDecimal = totalTaxRate / 100;
      const annualTaxWithSOH = taxableValueWithSOH * taxRateDecimal;
      const annualTaxWithoutSOH = taxableValueWithoutSOH * taxRateDecimal;
      
      // Calculate annual savings
      const annualSavings = annualTaxWithoutSOH - annualTaxWithSOH;
      
      // Calculate percentage reduction
      const percentageSaved = (annualSavings / annualTaxWithoutSOH) * 100;
      
      // Project 10-year cumulative savings (assuming continued appreciation)
      const annualAppreciationRate = (currentJustValue - priorAssessedValue) / priorAssessedValue;
      let cumulativeSavings = annualSavings;
      let projectedJustValue = currentJustValue;
      let projectedAssessedValue = cappedAssessedValue;
      
      for (let i = 1; i < 10; i++) {
        projectedJustValue = projectedJustValue * (1 + annualAppreciationRate);
        projectedAssessedValue = projectedAssessedValue * (1 + sohCapRate / 100);
        projectedAssessedValue = Math.min(projectedJustValue, projectedAssessedValue);
        
        const yearTaxableWithSOH = Math.max(0, projectedAssessedValue - homesteadExemption);
        const yearTaxableWithoutSOH = Math.max(0, projectedJustValue - homesteadExemption);
        
        const yearSavings = (yearTaxableWithoutSOH - yearTaxableWithSOH) * taxRateDecimal;
        cumulativeSavings += yearSavings;
      }
      
      // Calculate portability benefit (max $500,000)
      const portabilityBenefit = Math.min(sohCapDifference, 500000);

      return [
        { label: 'SOH-Capped Assessed Value', value: '$' + cappedAssessedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Current Just Value (Market)', value: '$' + currentJustValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'SOH Benefit (Cap Difference)', value: '$' + sohCapDifference.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Portability Benefit Available', value: '$' + portabilityBenefit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax With SOH', value: '$' + annualTaxWithSOH.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Without SOH', value: '$' + annualTaxWithoutSOH.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Savings', value: '$' + annualSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Tax Reduction Percentage', value: percentageSaved.toFixed(1) + '%' },
        { label: 'Projected 10-Year Savings', value: '$' + cumulativeSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
    },
  },
};