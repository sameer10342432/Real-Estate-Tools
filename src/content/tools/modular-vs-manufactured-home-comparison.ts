import { CalculatorContent } from '@/types';

export const MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT: CalculatorContent = {
  title: 'Modular vs Manufactured Home Comparison',
  description: 'Compare total ownership costs, appreciation potential, and financing options between modular and manufactured homes.',
  slug: 'modular-vs-manufactured-home-comparison',
  icon: '🏗️',
  category: 'Construction & Development',
  article: {
    title: 'Understanding Modular vs Manufactured Homes: A Complete Comparison Guide',
    content: `
      <h2>What's the Difference Between Modular and Manufactured Homes?</h2>
      <p>While both modular and manufactured homes are built in factories, they differ significantly in construction standards, financing options, and long-term value. Understanding these differences is crucial for making an informed home-buying decision.</p>

      <h3>Modular Homes: Built to Local Standards</h3>
      <p>Modular homes are constructed in sections (modules) at a factory and then transported to the building site where they're assembled on a permanent foundation. The key distinction is that modular homes must comply with the same local, state, and regional building codes as traditional site-built homes.</p>
      <ul>
        <li><strong>Construction Standards:</strong> Subject to local and state building codes (IRC/IBC)</li>
        <li><strong>Foundation:</strong> Placed on permanent foundations (crawl space, basement, or slab)</li>
        <li><strong>Financing:</strong> Qualifies for conventional mortgages, FHA, VA, and USDA loans</li>
        <li><strong>Appreciation:</strong> Typically appreciates like traditional site-built homes</li>
        <li><strong>Customization:</strong> Highly customizable floor plans and finishes</li>
      </ul>

      <h3>Manufactured Homes: HUD Code Construction</h3>
      <p>Manufactured homes (formerly called mobile homes) are built entirely in a factory and transported to the site on a permanent chassis. They're constructed according to the federal HUD (Housing and Urban Development) code, which differs from local building codes.</p>
      <ul>
        <li><strong>Construction Standards:</strong> Built to federal HUD code (since 1976)</li>
        <li><strong>Foundation:</strong> Can be placed on non-permanent foundations or in mobile home parks</li>
        <li><strong>Financing:</strong> May require chattel loans; limited conventional mortgage options</li>
        <li><strong>Appreciation:</strong> Often depreciates over time, especially if not on owned land</li>
        <li><strong>Customization:</strong> Limited customization options</li>
      </ul>

      <h3>Building Codes: HUD vs Local Codes</h3>
      <p>The building code difference is one of the most important distinctions:</p>
      <table>
        <tr>
          <th>Aspect</th>
          <th>Modular (Local Codes)</th>
          <th>Manufactured (HUD Code)</th>
        </tr>
        <tr>
          <td>Wind Zone Requirements</td>
          <td>Varies by location</td>
          <td>Three zones nationwide</td>
        </tr>
        <tr>
          <td>Roof Load</td>
          <td>Based on local snow loads</td>
          <td>Standardized requirements</td>
        </tr>
        <tr>
          <td>Energy Efficiency</td>
          <td>Follows local energy codes</td>
          <td>HUD thermal standards</td>
        </tr>
        <tr>
          <td>Inspections</td>
          <td>Local building inspectors</td>
          <td>Third-party HUD inspectors</td>
        </tr>
      </table>

      <h3>Financing Options Comparison</h3>
      <p>Financing is often a key deciding factor between these home types:</p>
      <h4>Modular Home Financing</h4>
      <ul>
        <li>Conventional mortgages with competitive rates</li>
        <li>FHA loans with 3.5% down payment</li>
        <li>VA loans with 0% down for veterans</li>
        <li>USDA loans for rural areas</li>
        <li>Construction-to-permanent loans available</li>
      </ul>
      <h4>Manufactured Home Financing</h4>
      <ul>
        <li>Chattel loans (higher rates, shorter terms)</li>
        <li>FHA Title I loans for personal property</li>
        <li>FHA Title II loans (if on permanent foundation on owned land)</li>
        <li>Some credit unions offer specialized programs</li>
        <li>Interest rates typically 1-3% higher than conventional</li>
      </ul>

      <h3>Appreciation and Long-Term Value</h3>
      <p>Understanding appreciation potential helps with long-term planning:</p>
      <h4>Modular Homes</h4>
      <ul>
        <li>Appreciate similar to site-built homes (3-5% annually in typical markets)</li>
        <li>Value tied to local real estate market trends</li>
        <li>Permanent foundation adds value</li>
        <li>Easier to sell through traditional real estate channels</li>
      </ul>
      <h4>Manufactured Homes</h4>
      <ul>
        <li>Often depreciate 3-5% annually (similar to vehicles)</li>
        <li>Homes on owned land may appreciate modestly</li>
        <li>Homes in parks typically lose value faster</li>
        <li>Older homes (pre-1976 mobile homes) have little value</li>
      </ul>

      <h3>Pros and Cons Summary</h3>
      <h4>Modular Homes</h4>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Better financing options with lower rates</li>
        <li>Appreciates like traditional homes</li>
        <li>Higher quality construction standards</li>
        <li>More customization options</li>
        <li>Easier to insure</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher upfront costs</li>
        <li>Longer construction timeline</li>
        <li>Requires land purchase and foundation</li>
        <li>More complex permitting process</li>
      </ul>

      <h4>Manufactured Homes</h4>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Lower initial purchase price</li>
        <li>Faster delivery and setup</li>
        <li>Option to place in mobile home parks</li>
        <li>Lower property taxes in some areas</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Limited financing options with higher rates</li>
        <li>Typically depreciates over time</li>
        <li>May be harder to sell</li>
        <li>Some communities have restrictions</li>
        <li>Higher insurance costs in some cases</li>
      </ul>

      <h3>How to Use This Calculator</h3>
      <p>This comparison tool helps you analyze the true cost difference between modular and manufactured homes by considering:</p>
      <ul>
        <li><strong>Home Price:</strong> Base cost of the home structure</li>
        <li><strong>Land Cost:</strong> If purchasing land (not applicable for park-placed manufactured homes)</li>
        <li><strong>Setup/Installation Cost:</strong> Site preparation, foundation, and connection costs</li>
        <li><strong>Foundation Type:</strong> Affects both cost and long-term value</li>
        <li><strong>Financing Rate:</strong> Compare typical rates for each home type</li>
      </ul>
      <p>The calculator provides a 10-year ownership cost projection including estimated appreciation or depreciation to help you make an informed decision.</p>

      <h3>Making Your Decision</h3>
      <p>Choose a <strong>modular home</strong> if you:</p>
      <ul>
        <li>Plan to stay long-term and build equity</li>
        <li>Want traditional mortgage financing</li>
        <li>Desire customization options</li>
        <li>Own or can purchase land</li>
      </ul>
      <p>Choose a <strong>manufactured home</strong> if you:</p>
      <ul>
        <li>Need the most affordable housing option</li>
        <li>Want quick occupancy</li>
        <li>Don't mind living in a mobile home community</li>
        <li>Prioritize lower monthly costs over equity building</li>
      </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'homeType',
        label: 'Home Type to Analyze',
        type: 'select',
        defaultValue: 'both',
        options: [
          { value: 'both', label: 'Compare Both Types' },
          { value: 'modular', label: 'Modular Home Only' },
          { value: 'manufactured', label: 'Manufactured Home Only' },
        ],
      },
      {
        name: 'modularHomePrice',
        label: 'Modular Home Price ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'manufacturedHomePrice',
        label: 'Manufactured Home Price ($)',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'landCost',
        label: 'Land Cost ($)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'modularSetupCost',
        label: 'Modular Setup/Installation Cost ($)',
        type: 'number',
        defaultValue: 35000,
      },
      {
        name: 'manufacturedSetupCost',
        label: 'Manufactured Setup/Installation Cost ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'foundationType',
        label: 'Foundation Type',
        type: 'select',
        defaultValue: 'permanent',
        options: [
          { value: 'permanent', label: 'Permanent Foundation' },
          { value: 'pier', label: 'Pier/Block Foundation' },
          { value: 'park', label: 'Mobile Home Park (no land)' },
        ],
      },
      {
        name: 'modularFinancingRate',
        label: 'Modular Financing Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'manufacturedFinancingRate',
        label: 'Manufactured Financing Rate (%)',
        type: 'number',
        defaultValue: 9.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 20,
      },
    ],
    results: [
      { label: 'Modular Total Initial Cost', isCurrency: true },
      { label: 'Manufactured Total Initial Cost', isCurrency: true },
      { label: 'Initial Cost Difference', isCurrency: true },
      { label: 'Modular Monthly Payment', isCurrency: true },
      { label: 'Manufactured Monthly Payment', isCurrency: true },
      { label: 'Monthly Payment Difference', isCurrency: true },
      { label: 'Modular 10-Year Value (3% appreciation)', isCurrency: true },
      { label: 'Manufactured 10-Year Value (-3% depreciation)', isCurrency: true },
      { label: '10-Year Equity Difference', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        modularHomePrice,
        manufacturedHomePrice,
        landCost,
        modularSetupCost,
        manufacturedSetupCost,
        foundationType,
        modularFinancingRate,
        manufacturedFinancingRate,
        loanTerm,
        downPaymentPercent,
      } = values;

      const landCostForManufactured = foundationType === 'park' ? 0 : (landCost || 0);
      
      const modularTotalCost = (modularHomePrice || 0) + (landCost || 0) + (modularSetupCost || 0);
      const manufacturedTotalCost = (manufacturedHomePrice || 0) + landCostForManufactured + (manufacturedSetupCost || 0);
      
      const modularDownPayment = modularTotalCost * ((downPaymentPercent || 0) / 100);
      const manufacturedDownPayment = manufacturedTotalCost * ((downPaymentPercent || 0) / 100);
      
      const modularLoanAmount = modularTotalCost - modularDownPayment;
      const manufacturedLoanAmount = manufacturedTotalCost - manufacturedDownPayment;
      
      const modularMonthlyRate = (modularFinancingRate || 0) / 100 / 12;
      const manufacturedMonthlyRate = (manufacturedFinancingRate || 0) / 100 / 12;
      const numberOfPayments = (loanTerm || 30) * 12;
      
      let modularMonthlyPayment = 0;
      if (modularMonthlyRate > 0 && numberOfPayments > 0) {
        modularMonthlyPayment = modularLoanAmount * 
          (modularMonthlyRate * Math.pow(1 + modularMonthlyRate, numberOfPayments)) / 
          (Math.pow(1 + modularMonthlyRate, numberOfPayments) - 1);
      }
      
      let manufacturedMonthlyPayment = 0;
      if (manufacturedMonthlyRate > 0 && numberOfPayments > 0) {
        manufacturedMonthlyPayment = manufacturedLoanAmount * 
          (manufacturedMonthlyRate * Math.pow(1 + manufacturedMonthlyRate, numberOfPayments)) / 
          (Math.pow(1 + manufacturedMonthlyRate, numberOfPayments) - 1);
      }
      
      const modularAppreciationRate = 0.03;
      const manufacturedDepreciationRate = foundationType === 'permanent' ? -0.01 : -0.03;
      
      const modular10YearValue = modularTotalCost * Math.pow(1 + modularAppreciationRate, 10);
      const manufactured10YearValue = manufacturedTotalCost * Math.pow(1 + manufacturedDepreciationRate, 10);
      
      const modular10YearEquity = modular10YearValue - modularDownPayment;
      const manufactured10YearEquity = manufactured10YearValue - manufacturedDownPayment;

      return [
        { label: 'Modular Total Initial Cost', value: modularTotalCost.toFixed(2), isCurrency: true },
        { label: 'Manufactured Total Initial Cost', value: manufacturedTotalCost.toFixed(2), isCurrency: true },
        { label: 'Initial Cost Difference', value: (modularTotalCost - manufacturedTotalCost).toFixed(2), isCurrency: true },
        { label: 'Modular Monthly Payment', value: modularMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Manufactured Monthly Payment', value: manufacturedMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment Difference', value: (modularMonthlyPayment - manufacturedMonthlyPayment).toFixed(2), isCurrency: true },
        { label: 'Modular 10-Year Value (3% appreciation)', value: modular10YearValue.toFixed(2), isCurrency: true },
        { label: 'Manufactured 10-Year Value (-3% depreciation)', value: manufactured10YearValue.toFixed(2), isCurrency: true },
        { label: '10-Year Equity Difference', value: (modular10YearEquity - manufactured10YearEquity).toFixed(2), isCurrency: true },
      ];
    },
  },
};
