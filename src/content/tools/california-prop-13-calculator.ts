import { CalculatorContent } from '@/types';

export const CALIFORNIA_PROP_13_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'California Prop 13 Taxable Value Calculator - Property Tax Assessment',
  description: 'Calculate your property tax under California Proposition 13. Understand assessed value limits, annual increases, and property tax savings in California.',
  slug: 'california-prop-13-calculator',
  icon: 'Icon',
  category: 'State-Specific',
  article: {
    title: 'Understanding California Proposition 13 Property Tax Calculator',
    content: `
    <h2>What is California Proposition 13?</h2>
    <p>Proposition 13, passed by California voters in 1978, is a landmark property tax limitation measure that fundamentally changed how properties are taxed in California. It caps the property tax rate at 1% of assessed value plus voter-approved bonds, and limits annual assessment increases to 2% or the rate of inflation, whichever is lower.</p>
    
    <p>This means that as long as you own your property and don't make major improvements, your property taxes can only increase by a maximum of 2% per year, even if your property's market value skyrockets.</p>

    <h3>Key Features of Prop 13</h3>
    <ul>
      <li><strong>1% Base Tax Rate:</strong> Property tax limited to 1% of assessed value (plus bonds)</li>
      <li><strong>2% Annual Cap:</strong> Assessment can only increase by maximum 2% per year</li>
      <li><strong>Reassessment Triggers:</strong> Property reassessed at market value when sold or transferred</li>
      <li><strong>Long-term Savings:</strong> Owners who hold properties for decades benefit enormously</li>
      <li><strong>Inheritance Exception:</strong> Parent-to-child transfers may avoid reassessment (Prop 19 modified this)</li>
    </ul>

    <h3>How Prop 13 Works</h3>
    <p><strong>Year 1 (Purchase):</strong></p>
    <ul>
      <li>Property assessed at purchase price</li>
      <li>Tax = Assessed Value × 1% (plus local bonds)</li>
    </ul>
    
    <p><strong>Year 2 and Beyond:</strong></p>
    <ul>
      <li>Assessed value increases by maximum 2% annually</li>
      <li>Tax = New Assessed Value × 1% (plus local bonds)</li>
      <li>Continues until property is sold or transferred</li>
    </ul>

    <h3>Example of Prop 13 Savings</h3>
    <p>Consider a home purchased in 2010 for $500,000 in an area where market values increased significantly:</p>
    
    <table>
      <tr>
        <th>Year</th>
        <th>Market Value</th>
        <th>Assessed Value (Prop 13)</th>
        <th>Tax With Prop 13</th>
        <th>Tax Without Prop 13</th>
      </tr>
      <tr>
        <td>2010</td>
        <td>$500,000</td>
        <td>$500,000</td>
        <td>$5,000</td>
        <td>$5,000</td>
      </tr>
      <tr>
        <td>2024</td>
        <td>$1,200,000</td>
        <td>$681,000</td>
        <td>$6,810</td>
        <td>$12,000</td>
      </tr>
    </table>
    
    <p>In this example, Prop 13 saves the homeowner over $5,000 annually!</p>

    <h3>When Does Reassessment Occur?</h3>
    <p>Your property will be reassessed to current market value when:</p>
    <ul>
      <li><strong>Sale or Transfer:</strong> Property changes ownership</li>
      <li><strong>New Construction:</strong> Major additions or improvements</li>
      <li><strong>Change in Ownership:</strong> Even transfers between family members (with exceptions)</li>
    </ul>

    <h3>Proposition 19 Changes (Effective 2021)</h3>
    <p>Prop 19 modified some Prop 13 rules:</p>
    <ul>
      <li><strong>Parent-Child Transfers:</strong> Now limited to primary residence with $1M exemption</li>
      <li><strong>Portability Expanded:</strong> Homeowners 55+ can transfer base value to new home anywhere in CA</li>
      <li><strong>Wildfire Victims:</strong> Can transfer base value without age restriction</li>
    </ul>

    <h3>Special Assessments and Bonds</h3>
    <p>While Prop 13 caps the base tax at 1%, voters can approve additional assessments:</p>
    <ul>
      <li>School bonds</li>
      <li>Infrastructure improvements</li>
      <li>Special districts (water, fire, etc.)</li>
    </ul>
    <p>These can add 0.2% - 0.5% or more to your effective tax rate.</p>

    <h3>Strategies for Prop 13 Benefits</h3>
    <ul>
      <li><strong>Long-term Hold:</strong> Maximum benefit comes from holding property for decades</li>
      <li><strong>Major Improvements:</strong> Consider timing of additions to manage reassessment</li>
      <li><strong>Estate Planning:</strong> Understand Prop 19 implications for inheritance</li>
      <li><strong>55+ Portability:</strong> Use base year value transfer if downsizing or relocating</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>This calculator helps you:</p>
    <ul>
      <li>Project your assessed value over time under Prop 13</li>
      <li>Calculate annual property taxes</li>
      <li>Compare taxes with vs. without Prop 13 protection</li>
      <li>Estimate cumulative tax savings</li>
      <li>Plan for long-term property ownership</li>
    </ul>
    
    <p>Enter your purchase price, purchase year, local bonds rate, and the calculator will show your current assessed value and annual tax savings.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price (Base Year Value)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'purchaseYear',
        label: 'Purchase Year',
        type: 'number',
        defaultValue: 2015,
      },
      {
        name: 'currentYear',
        label: 'Current Year',
        type: 'number',
        defaultValue: 2024,
      },
      {
        name: 'bondsRate',
        label: 'Local Bonds & Assessments Rate (%)',
        type: 'number',
        defaultValue: 0.25,
      },
      {
        name: 'currentMarketValue',
        label: 'Current Market Value (For Comparison)',
        type: 'number',
        defaultValue: 900000,
      },
    ],
    calculate: (values) => {
      const { purchasePrice, purchaseYear, currentYear, bondsRate, currentMarketValue } = values;
      
      // Calculate years owned
      const yearsOwned = currentYear - purchaseYear;
      
      // Calculate current assessed value under Prop 13 (2% max annual increase)
      let assessedValue = purchasePrice;
      for (let i = 0; i < yearsOwned; i++) {
        assessedValue = assessedValue * 1.02; // 2% annual increase
      }
      
      // Calculate property tax under Prop 13
      const prop13TaxRate = 0.01 + (bondsRate / 100); // 1% base + bonds
      const annualTaxWithProp13 = assessedValue * prop13TaxRate;
      
      // Calculate what tax would be without Prop 13 (at market value)
      const annualTaxWithoutProp13 = currentMarketValue * prop13TaxRate;
      
      // Calculate annual savings
      const annualSavings = annualTaxWithoutProp13 - annualTaxWithProp13;
      
      // Calculate cumulative savings over ownership period
      // This is simplified - actual savings would compound over years
      let cumulativeSavings = 0;
      let runningAssessedValue = purchasePrice;
      let runningMarketValue = purchasePrice;
      const annualAppreciation = Math.pow(currentMarketValue / purchasePrice, 1 / yearsOwned) - 1;
      
      for (let i = 0; i < yearsOwned; i++) {
        runningAssessedValue = runningAssessedValue * 1.02;
        runningMarketValue = runningMarketValue * (1 + annualAppreciation);
        const yearTaxWithProp13 = runningAssessedValue * prop13TaxRate;
        const yearTaxWithoutProp13 = runningMarketValue * prop13TaxRate;
        cumulativeSavings += (yearTaxWithoutProp13 - yearTaxWithProp13);
      }
      
      // Calculate effective tax rate on market value
      const effectiveTaxRate = (annualTaxWithProp13 / currentMarketValue) * 100;
      
      // Assessment ratio
      const assessmentRatio = (assessedValue / currentMarketValue) * 100;

      return [
        { label: 'Current Assessed Value (Prop 13)', value: '$' + assessedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Current Market Value', value: '$' + currentMarketValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Property Tax (With Prop 13)', value: '$' + annualTaxWithProp13.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Without Prop 13', value: '$' + annualTaxWithoutProp13.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Savings from Prop 13', value: '$' + annualSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Cumulative Savings Since Purchase', value: '$' + cumulativeSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Effective Tax Rate on Market Value', value: effectiveTaxRate.toFixed(3) + '%' },
        { label: 'Assessed Value as % of Market', value: assessmentRatio.toFixed(1) + '%' },
      ];
    },
  },
};