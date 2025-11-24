import { CalculatorContent } from '@/types';

export const ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Illinois Senior Freeze Property Tax Exemption Calculator',
  description: 'Calculate your property tax savings under Illinois Senior Citizens Assessment Freeze Homestead Exemption. Understand eligibility, freeze benefits, and annual savings for Illinois seniors.',
  slug: 'illinois-senior-freeze-exemption-calculator',
  icon: 'Icon',
  category: 'State-Specific',
  article: {
    title: 'Illinois Senior Freeze Property Tax Exemption Guide',
    content: `
    <h2>What is the Illinois Senior Freeze Exemption?</h2>
    <p>The Illinois Senior Citizens Assessment Freeze Homestead Exemption, commonly called the "Senior Freeze," is a property tax benefit that freezes the equalized assessed value (EAV) of an eligible senior's home. Once enrolled, property taxes are based on the frozen EAV from the year of eligibility, protecting seniors from property tax increases due to rising property values.</p>
    
    <p>This program provides crucial financial relief to Illinois seniors on fixed incomes, particularly in counties with rapidly appreciating property values like Cook County (Chicago area), Lake County, and DuPage County.</p>

    <h3>Key Features of Senior Freeze</h3>
    <ul>
      <li><strong>Freezes Assessed Value:</strong> EAV locked at base year level</li>
      <li><strong>Income Limits:</strong> Household income must not exceed $65,000</li>
      <li><strong>Age Requirement:</strong> Must be 65 or older during the tax year</li>
      <li><strong>Primary Residence:</strong> Property must be your principal residence</li>
      <li><strong>Automatic Renewal:</strong> Continues annually if you remain eligible</li>
      <li><strong>Cumulative Benefit:</strong> Savings grow as property values increase</li>
    </ul>

    <h3>Eligibility Requirements</h3>
    <p>To qualify for the Illinois Senior Freeze, you must meet ALL of these requirements:</p>
    <ul>
      <li><strong>Age:</strong> 65 years or older during the tax year</li>
      <li><strong>Ownership:</strong> Own and occupy the property as your principal residence</li>
      <li><strong>Prior Year Residence:</strong> Lived in the property as principal residence for prior year</li>
      <li><strong>Income Limit:</strong> Total household income of $65,000 or less (adjusted annually)</li>
      <li><strong>Responsible for Taxes:</strong> Must be responsible for paying property taxes (either directly or through mortgage)</li>
      <li><strong>Senior Exemption:</strong> Must have received standard senior exemption in prior year</li>
    </ul>

    <h3>How the Senior Freeze Works</h3>
    <p><strong>Year 1 (Qualification Year):</strong></p>
    <ul>
      <li>You turn 65 and meet income requirements</li>
      <li>Apply for both Senior Exemption and Senior Freeze</li>
      <li>Your EAV is noted but not yet frozen</li>
    </ul>
    
    <p><strong>Year 2 (Base Year - Freeze Begins):</strong></p>
    <ul>
      <li>Your EAV from this year becomes your "base year" EAV</li>
      <li>This is the frozen value used for future tax calculations</li>
      <li>You begin to see tax savings if property values increase</li>
    </ul>
    
    <p><strong>Year 3 and Beyond:</strong></p>
    <ul>
      <li>Taxes calculated on base year EAV, not current market value</li>
      <li>Savings increase as property values rise above frozen level</li>
      <li>Must continue to meet income requirements annually</li>
    </ul>

    <h3>Example of Senior Freeze Savings</h3>
    <p>Mrs. Johnson qualified for Senior Freeze in 2020 (base year EAV: $100,000):</p>
    
    <table>
      <tr>
        <th>Year</th>
        <th>Market Value</th>
        <th>Normal EAV</th>
        <th>Frozen EAV</th>
        <th>Tax Rate</th>
        <th>Tax w/Freeze</th>
        <th>Tax w/o Freeze</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>2020</td>
        <td>$300,000</td>
        <td>$100,000</td>
        <td>$100,000</td>
        <td>8%</td>
        <td>$8,000</td>
        <td>$8,000</td>
        <td>$0</td>
      </tr>
      <tr>
        <td>2024</td>
        <td>$390,000</td>
        <td>$130,000</td>
        <td>$100,000</td>
        <td>8.5%</td>
        <td>$8,500</td>
        <td>$11,050</td>
        <td>$2,550</td>
      </tr>
    </table>
    
    <p>By 2024, Mrs. Johnson saves $2,550 annually thanks to the freeze!</p>

    <h3>Income Limits and Calculation</h3>
    <p>The $65,000 income limit includes:</p>
    <ul>
      <li>Social Security income</li>
      <li>Pension income</li>
      <li>Investment income (interest, dividends, capital gains)</li>
      <li>Rental income</li>
      <li>Part-time employment income</li>
      <li>All other sources of household income</li>
    </ul>
    
    <p><strong>Important:</strong> This is TOTAL household income, including spouse's income if married.</p>

    <h3>What the Freeze Does NOT Cover</h3>
    <p>The Senior Freeze only freezes the EAV. You will still see tax increases from:</p>
    <ul>
      <li><strong>Tax Rate Increases:</strong> Local taxing bodies can still raise rates</li>
      <li><strong>New Referendums:</strong> Voter-approved tax increases still apply</li>
      <li><strong>Home Improvements:</strong> Major improvements increase your EAV</li>
      <li><strong>Special Assessments:</strong> These are not affected by the freeze</li>
    </ul>

    <h3>Cook County Specific Information</h3>
    <p>Cook County (Chicago area) has additional considerations:</p>
    <ul>
      <li>Cook County Treasurer's Office administers the program</li>
      <li>High property value appreciation makes freeze very valuable</li>
      <li>Must maintain both Senior Exemption and Senior Freeze</li>
      <li>Combine with other exemptions (homeowner, etc.) for maximum savings</li>
    </ul>

    <h3>Application Process</h3>
    <p><strong>First-Time Application:</strong></p>
    <ul>
      <li>Apply with your county assessor or chief county assessment officer</li>
      <li>Deadline: Varies by county (often June 30 or July 1)</li>
      <li>Provide: Age verification, income documentation, proof of residency</li>
      <li>Benefits begin the year after you qualify</li>
    </ul>
    
    <p><strong>Annual Renewal:</strong></p>
    <ul>
      <li>File annual affidavit confirming continued eligibility</li>
      <li>Report any income changes</li>
      <li>Update if property use changes</li>
    </ul>

    <h3>Losing Eligibility</h3>
    <p>You lose the freeze if:</p>
    <ul>
      <li>Household income exceeds $65,000 limit</li>
      <li>Property is no longer your principal residence</li>
      <li>You sell or transfer the property</li>
      <li>You fail to file annual renewal affidavit</li>
      <li>Property ownership changes</li>
    </ul>
    
    <p><strong>Can You Re-qualify?</strong> Yes, if you later meet requirements again, but a new base year is established.</p>

    <h3>Combining with Other Exemptions</h3>
    <p>The Senior Freeze can be combined with:</p>
    <ul>
      <li><strong>General Homestead Exemption:</strong> Reduces EAV by $6,000</li>
      <li><strong>Senior Citizens Exemption:</strong> Additional $5,000 reduction</li>
      <li><strong>Senior Citizens Assessment Freeze:</strong> This program</li>
      <li><strong>Home Improvement Exemption:</strong> For qualifying improvements</li>
      <li><strong>Disabled Veterans Exemption:</strong> If applicable</li>
    </ul>

    <h3>County-Specific Programs</h3>
    <p>Some Illinois counties offer additional senior benefits:</p>
    <ul>
      <li><strong>Cook County:</strong> Long-time resident exemption available</li>
      <li><strong>DuPage County:</strong> Senior assessment deferral options</li>
      <li><strong>Lake County:</strong> Additional senior services and tax assistance</li>
    </ul>

    <h3>Tax Deferral vs. Freeze</h3>
    <p><strong>Senior Freeze:</strong> Reduces tax burden permanently (while eligible)</p>
    <p><strong>Tax Deferral:</strong> Delays payment but creates a lien; must be repaid with interest</p>
    <p>The freeze is generally preferable as it provides actual tax savings, not just delayed payment.</p>

    <h3>Planning Considerations</h3>
    <ul>
      <li><strong>Income Management:</strong> Plan income to stay under $65,000 threshold</li>
      <li><strong>Timing of Improvements:</strong> Major renovations can affect your frozen EAV</li>
      <li><strong>Downsizing Decision:</strong> Moving means losing accumulated freeze benefit</li>
      <li><strong>Reverse Mortgage Impact:</strong> Ensure you can still pay property taxes</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>This calculator helps you:</p>
    <ul>
      <li>Estimate annual property tax savings from the Senior Freeze</li>
      <li>Compare taxes with frozen EAV vs. current market value</li>
      <li>Project cumulative savings over time</li>
      <li>Understand impact of tax rate changes</li>
      <li>Plan for income requirements and eligibility</li>
    </ul>
    
    <p>Enter your base year EAV, current market value, applicable tax rates, and other exemptions to calculate your Senior Freeze benefit.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'baseYearEAV',
        label: 'Base Year EAV (Frozen Value)',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'currentMarketValue',
        label: 'Current Market Value',
        type: 'number',
        defaultValue: 390000,
      },
      {
        name: 'assessmentRate',
        label: 'Assessment Rate (% of Market Value)',
        type: 'number',
        defaultValue: 33.33,
      },
      {
        name: 'taxRate',
        label: 'Total Property Tax Rate (%)',
        type: 'number',
        defaultValue: 8.5,
      },
      {
        name: 'otherExemptions',
        label: 'Other Exemptions (Homestead, etc.)',
        type: 'number',
        defaultValue: 11000,
      },
      {
        name: 'householdIncome',
        label: 'Total Household Income (For Eligibility Check)',
        type: 'number',
        defaultValue: 55000,
      },
    ],
    calculate: (values) => {
      const { baseYearEAV, currentMarketValue, assessmentRate, taxRate, otherExemptions, householdIncome } = values;
      
      // Check eligibility
      const incomeLimit = 65000;
      const eligible = householdIncome <= incomeLimit;
      
      // Calculate current EAV without freeze
      const currentEAV = currentMarketValue * (assessmentRate / 100);
      
      // Calculate taxable EAV with freeze
      const frozenTaxableEAV = Math.max(0, baseYearEAV - otherExemptions);
      
      // Calculate taxable EAV without freeze
      const currentTaxableEAV = Math.max(0, currentEAV - otherExemptions);
      
      // Calculate property taxes
      const taxRateDecimal = taxRate / 100;
      const annualTaxWithFreeze = frozenTaxableEAV * taxRateDecimal;
      const annualTaxWithoutFreeze = currentTaxableEAV * taxRateDecimal;
      
      // Calculate annual savings
      const annualSavings = annualTaxWithoutFreeze - annualTaxWithFreeze;
      
      // Calculate EAV protection amount
      const eavProtection = currentEAV - baseYearEAV;
      
      // Calculate percentage reduction
      const percentageSaved = annualTaxWithoutFreeze > 0 ? (annualSavings / annualTaxWithoutFreeze) * 100 : 0;
      
      // Project 10-year cumulative savings (assuming 3% annual appreciation)
      let cumulativeSavings = 0;
      let projectedMarketValue = currentMarketValue;
      const annualAppreciation = 0.03;
      
      for (let i = 0; i < 10; i++) {
        const yearEAV = projectedMarketValue * (assessmentRate / 100);
        const yearTaxableWithFreeze = Math.max(0, baseYearEAV - otherExemptions);
        const yearTaxableWithoutFreeze = Math.max(0, yearEAV - otherExemptions);
        
        const yearSavings = (yearTaxableWithoutFreeze - yearTaxableWithFreeze) * taxRateDecimal;
        cumulativeSavings += yearSavings;
        
        projectedMarketValue = projectedMarketValue * (1 + annualAppreciation);
      }
      
      // Eligibility status
      const eligibilityStatus = eligible ? 
        'Eligible - Income Within Limit' : 
        `Not Eligible - Income exceeds $${incomeLimit.toLocaleString()} limit`;
      
      // Income cushion or overage
      const incomeGap = incomeLimit - householdIncome;
      const incomeMessage = incomeGap >= 0 ? 
        `$${incomeGap.toLocaleString()} below limit` : 
        `$${Math.abs(incomeGap).toLocaleString()} over limit`;

      return [
        { label: 'Eligibility Status', value: eligibilityStatus },
        { label: 'Income Position', value: incomeMessage },
        { label: 'Frozen EAV (Base Year)', value: '$' + baseYearEAV.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Current EAV (Without Freeze)', value: '$' + currentEAV.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'EAV Protection Amount', value: '$' + eavProtection.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax With Freeze', value: '$' + annualTaxWithFreeze.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Without Freeze', value: '$' + annualTaxWithoutFreeze.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Savings', value: '$' + annualSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Tax Reduction Percentage', value: percentageSaved.toFixed(1) + '%' },
        { label: 'Projected 10-Year Savings', value: '$' + cumulativeSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
    },
  },
};