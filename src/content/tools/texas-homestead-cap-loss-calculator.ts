import { CalculatorContent } from '@/types';

export const TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Texas Homestead Cap Loss Calculator - Property Tax Savings Estimator',
  description: 'Calculate your property tax savings under Texas Homestead Cap. Understand how the 10% annual assessment increase limit protects Texas homeowners from excessive tax increases.',
  slug: 'texas-homestead-cap-loss-calculator',
  icon: 'Icon',
  category: 'State-Specific',
  article: {
    title: 'Understanding Texas Homestead Cap and Property Tax Savings',
    content: `
    <h2>What is the Texas Homestead Cap?</h2>
    <p>The Texas Homestead Cap is a property tax protection measure that limits the annual increase in the appraised value of a homestead property to 10%. This means that even if your home's market value increases dramatically, the value used to calculate your property taxes (appraised value) can only go up by 10% per year.</p>
    
    <p>This cap protects Texas homeowners from sudden spikes in property taxes due to rapidly rising home values, a common issue in hot real estate markets like Austin, Dallas, Houston, and San Antonio.</p>

    <h3>Key Features of Texas Homestead Cap</h3>
    <ul>
      <li><strong>10% Annual Limit:</strong> Appraised value for taxation can only increase 10% per year</li>
      <li><strong>Automatic Protection:</strong> Applied automatically once homestead exemption is filed</li>
      <li><strong>Caps Value, Not Taxes:</strong> Limits assessed value growth, but tax rate can still change</li>
      <li><strong>Resets on Sale:</strong> When property is sold, it's reassessed at full market value</li>
      <li><strong>No Income Limits:</strong> Available to all homestead property owners</li>
      <li><strong>Must be Primary Residence:</strong> Only applies to your homestead, not investment properties</li>
    </ul>

    <h3>How the Texas Homestead Cap Works</h3>
    <p><strong>Example Scenario:</strong></p>
    <p>Your home was valued at $300,000 last year. This year, the appraiser determines the market value is $360,000 (20% increase).</p>
    
    <p><strong>Without Homestead Cap:</strong></p>
    <ul>
      <li>Appraised Value: $360,000</li>
      <li>Tax (at 2% rate): $7,200</li>
    </ul>
    
    <p><strong>With Homestead Cap:</strong></p>
    <ul>
      <li>Maximum Allowed Increase: $300,000 × 10% = $30,000</li>
      <li>Capped Appraised Value: $330,000</li>
      <li>Tax (at 2% rate): $6,600</li>
      <li><strong>Annual Savings: $600</strong></li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Cap Loss vs. Actual Value:</strong></p>
    <p>The "cap loss" is the difference between market value and capped appraised value. Over time, as home values rise significantly, this gap can grow substantially, leading to major tax savings.</p>
    
    <p><strong>Tax Rate Changes:</strong></p>
    <p>The homestead cap limits value increases, but it doesn't cap the tax rate. If your local taxing authorities raise rates, your taxes can still increase even with the cap in place.</p>

    <h3>When Does the Cap Reset?</h3>
    <ul>
      <li><strong>Sale or Transfer:</strong> Property reassessed at full market value when ownership changes</li>
      <li><strong>No Homestead Exemption:</strong> If you don't file for or maintain homestead status</li>
      <li><strong>Property Use Change:</strong> Converting from primary residence to rental</li>
    </ul>

    <h3>Improvements and the Homestead Cap</h3>
    <p>Major improvements can affect your capped value:</p>
    <ul>
      <li>New additions (room additions, garage, pool) are added to appraised value</li>
      <li>The improvement value is added on top of your capped value</li>
      <li>Future increases on the total are then capped at 10% annually</li>
    </ul>

    <h3>Texas Homestead Exemption Requirements</h3>
    <p>To qualify for the homestead cap, you must:</p>
    <ul>
      <li>Own and occupy the property as your primary residence</li>
      <li>File a homestead exemption with your county appraisal district</li>
      <li>The exemption is a one-time filing (no annual renewal needed)</li>
      <li>Notify the appraisal district if you move</li>
    </ul>

    <h3>Additional Texas Homestead Benefits</h3>
    <ul>
      <li><strong>General Homestead Exemption:</strong> Reduces taxable value by at least $25,000</li>
      <li><strong>Over-65 Exemption:</strong> Additional exemption and potential tax freeze</li>
      <li><strong>Disabled Person Exemption:</strong> Similar benefits to over-65</li>
      <li><strong>School Tax Ceiling:</strong> Over-65 and disabled get frozen school taxes</li>
    </ul>

    <h3>Hot Market Impact</h3>
    <p>In rapidly appreciating markets, the homestead cap provides enormous value:</p>
    <ul>
      <li><strong>Austin:</strong> Some areas seeing 15-25% annual appreciation</li>
      <li><strong>Dallas/Fort Worth:</strong> Suburban areas with 10-20% annual growth</li>
      <li><strong>Houston:</strong> Certain neighborhoods with significant appreciation</li>
      <li><strong>San Antonio:</strong> Growing areas with strong value increases</li>
    </ul>

    <h3>Protest Your Appraisal</h3>
    <p>Even with the homestead cap, you can still protest your appraisal:</p>
    <ul>
      <li>File protest by May 15 (or 30 days after notice)</li>
      <li>Gather comparable sales evidence</li>
      <li>Present case to Appraisal Review Board</li>
      <li>Winning protest lowers your capped value basis</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>This calculator helps you:</p>
    <ul>
      <li>Calculate your capped appraised value</li>
      <li>Determine annual property tax with and without the cap</li>
      <li>See your annual and cumulative tax savings</li>
      <li>Project future cap loss as values continue rising</li>
      <li>Understand the long-term benefit of the homestead cap</li>
    </ul>
    
    <p>Enter your prior year appraised value, current market value, and tax rate to see how much the Texas Homestead Cap saves you.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'priorYearAppraised',
        label: 'Prior Year Appraised Value',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'currentMarketValue',
        label: 'Current Market Value',
        type: 'number',
        defaultValue: 360000,
      },
      {
        name: 'taxRate',
        label: 'Total Property Tax Rate (%)',
        type: 'number',
        defaultValue: 2.0,
      },
      {
        name: 'homesteadExemption',
        label: 'Homestead Exemption Amount',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'yearsProjection',
        label: 'Years to Project Future Savings',
        type: 'number',
        defaultValue: 5,
      },
    ],
    calculate: (values) => {
      const { priorYearAppraised, currentMarketValue, taxRate, homesteadExemption, yearsProjection } = values;
      
      // Calculate maximum allowed increase (10%)
      const maxIncrease = priorYearAppraised * 0.10;
      const maxAllowedAppraised = priorYearAppraised + maxIncrease;
      
      // Determine if cap applies
      const capApplies = currentMarketValue > maxAllowedAppraised;
      const cappedAppraisedValue = capApplies ? maxAllowedAppraised : currentMarketValue;
      
      // Calculate cap loss
      const capLoss = currentMarketValue - cappedAppraisedValue;
      
      // Calculate taxable values (after homestead exemption)
      const taxableValueWithCap = Math.max(0, cappedAppraisedValue - homesteadExemption);
      const taxableValueWithoutCap = Math.max(0, currentMarketValue - homesteadExemption);
      
      // Calculate property taxes
      const taxRateDecimal = taxRate / 100;
      const annualTaxWithCap = taxableValueWithCap * taxRateDecimal;
      const annualTaxWithoutCap = taxableValueWithoutCap * taxRateDecimal;
      
      // Calculate annual savings
      const annualSavings = annualTaxWithoutCap - annualTaxWithCap;
      
      // Project future savings (assuming continued appreciation)
      const annualAppreciationRate = (currentMarketValue - priorYearAppraised) / priorYearAppraised;
      let projectedCumulativeSavings = annualSavings;
      let projectedMarketValue = currentMarketValue;
      let projectedCappedValue = cappedAppraisedValue;
      
      for (let i = 1; i < yearsProjection; i++) {
        projectedMarketValue = projectedMarketValue * (1 + annualAppreciationRate);
        projectedCappedValue = projectedCappedValue * 1.10; // 10% annual cap
        
        const yearTaxableWithCap = Math.max(0, projectedCappedValue - homesteadExemption);
        const yearTaxableWithoutCap = Math.max(0, projectedMarketValue - homesteadExemption);
        
        const yearSavings = (yearTaxableWithoutCap - yearTaxableWithCap) * taxRateDecimal;
        projectedCumulativeSavings += yearSavings;
      }
      
      // Calculate percentage saved
      const percentageSaved = (annualSavings / annualTaxWithoutCap) * 100;
      
      // Calculate future cap loss
      const futureCapLoss = projectedMarketValue - projectedCappedValue;

      return [
        { label: 'Capped Appraised Value', value: '$' + cappedAppraisedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Current Market Value', value: '$' + currentMarketValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Cap Loss (Value Protection)', value: '$' + capLoss.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax With Cap', value: '$' + annualTaxWithCap.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Without Cap', value: '$' + annualTaxWithoutCap.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Annual Tax Savings', value: '$' + annualSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: 'Percentage Saved', value: percentageSaved.toFixed(1) + '%' },
        { label: `Projected ${yearsProjection}-Year Savings`, value: '$' + projectedCumulativeSavings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
        { label: `Projected Cap Loss (Year ${yearsProjection})`, value: '$' + futureCapLoss.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') },
      ];
    },
  },
};