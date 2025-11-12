import { CalculatorContent } from '@/types';

export const MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Mineral Rights Value Estimator',
  description: 'Estimate the value of mineral rights including oil, gas, coal, and other subsurface resources based on reserves, production, and royalty rates.',
  slug: 'mineral-rights-value-estimator',
  icon: '⛏️',
  category: 'Investment Analysis',
  article: {
    title: 'Mineral Rights Valuation: Understanding Subsurface Wealth and Investment Opportunities',
    content: `
    <h2>Understanding Mineral Rights</h2>
    <p>Mineral rights represent ownership of subsurface resources including oil, natural gas, coal, metals, and other valuable minerals beneath a property. These rights can be separated from surface ownership and sold, leased, or inherited independently, creating unique investment opportunities and valuation challenges.</p>
    
    <h3>Surface Rights vs. Mineral Rights</h3>
    <ul>
      <li><strong>Surface Rights:</strong> Ownership of the land surface and improvements</li>
      <li><strong>Mineral Rights:</strong> Ownership of underground resources</li>
      <li><strong>Severed Estate:</strong> When mineral rights are separated from surface ownership</li>
      <li><strong>Dominant Estate:</strong> Mineral rights typically have priority over surface in most states</li>
    </ul>

    <h3>Types of Mineral Rights Ownership</h3>
    <ul>
      <li><strong>Fee Simple Mineral Rights:</strong> Complete ownership of subsurface minerals (100%)</li>
      <li><strong>Fractional Mineral Interests:</strong> Partial ownership (e.g., 1/4, 1/8, 1/16)</li>
      <li><strong>Royalty Interest:</strong> Right to royalty payments without operating costs (NRI - Net Revenue Interest)</li>
      <li><strong>Overriding Royalty Interest (ORRI):</strong> Carved from lessee's working interest</li>
      <li><strong>Working Interest:</strong> Right and obligation to develop and operate (pays costs)</li>
      <li><strong>Non-Participating Royalty Interest (NPRI):</strong> Royalty payments without lease rights</li>
    </ul>

    <h3>What Minerals Are Included?</h3>
    <ul>
      <li><strong>Hydrocarbons:</strong> Oil, natural gas, natural gas liquids (NGLs)</li>
      <li><strong>Solid Minerals:</strong> Coal, uranium, rare earth elements</li>
      <li><strong>Industrial Minerals:</strong> Sand, gravel, limestone, gypsum</li>
      <li><strong>Precious Metals:</strong> Gold, silver, platinum</li>
      <li><strong>Base Metals:</strong> Copper, iron, lead, zinc</li>
      <li><strong>Geothermal:</strong> Heat energy from earth's interior</li>
      <li><strong>Water:</strong> In some states, groundwater is considered a mineral</li>
    </ul>

    <h3>Valuation Factors for Mineral Rights</h3>
    <ul>
      <li><strong>Location:</strong> Proximity to producing wells and proven reserves</li>
      <li><strong>Production Status:</strong> Producing vs. non-producing acreage</li>
      <li><strong>Royalty Rate:</strong> Percentage of gross production value received</li>
      <li><strong>Commodity Prices:</strong> Current oil, gas, and mineral prices</li>
      <li><strong>Proven Reserves:</strong> Estimated recoverable resources</li>
      <li><strong>Decline Curves:</strong> Rate of production decline over time</li>
      <li><strong>Lease Terms:</strong> Duration, royalty clauses, and extensions</li>
      <li><strong>Net Acres:</strong> Actual ownership interest (gross acres × fractional interest)</li>
    </ul>

    <h3>How to Use This Estimator</h3>
    <p>Input your mineral rights parameters:</p>
    <ul>
      <li><strong>Gross Acreage:</strong> Total acres of mineral rights</li>
      <li><strong>Ownership Interest:</strong> Your fractional interest (e.g., 0.25 for 1/4)</li>
      <li><strong>Current Monthly Production:</strong> Barrels of oil equivalent (BOE) or MCF gas</li>
      <li><strong>Commodity Price:</strong> Current oil price per barrel or gas per MCF</li>
      <li><strong>Royalty Rate:</strong> Your percentage of gross production (typically 12.5-25%)</li>
      <li><strong>Annual Decline Rate:</strong> Expected production decrease (5-30% typical)</li>
      <li><strong>Projected Years of Production:</strong> Estimated life of reserves</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Net Mineral Acres:</strong> Gross acres × ownership interest</li>
      <li><strong>Annual Royalty Income:</strong> First year income projection</li>
      <li><strong>Total Projected Income:</strong> Lifetime royalty payments with decline</li>
      <li><strong>Present Value (NPV):</strong> Discounted cash flow at discount rate</li>
      <li><strong>Value Per Net Acre:</strong> Market value per net mineral acre</li>
      <li><strong>Income Multiple:</strong> Valuation as multiple of current annual income</li>
    </ul>

    <h3>Mineral Rights Valuation Methods</h3>
    <p><strong>Income Capitalization Approach:</strong></p>
    <ul>
      <li>Discounted cash flow (DCF) analysis of future production</li>
      <li>Apply discount rate (typically 10-15% for minerals)</li>
      <li>Account for production decline curves</li>
      <li>Most accurate for producing properties</li>
    </ul>
    <p><strong>Market Comparison Approach:</strong></p>
    <ul>
      <li>Recent sales of comparable mineral interests</li>
      <li>Price per net mineral acre in same formation</li>
      <li>Income multiples (4-8× annual royalty income typical)</li>
      <li>Best for actively traded areas</li>
    </ul>
    <p><strong>Cost Approach:</strong></p>
    <ul>
      <li>Lease bonus values paid in area</li>
      <li>Cost to acquire similar rights</li>
      <li>Less reliable for valuation purposes</li>
    </ul>

    <h3>Producing Mineral Rights</h3>
    <p>Properties with active production are most valuable:</p>
    <ul>
      <li><strong>Proven Reserves:</strong> Demonstrable production and revenue</li>
      <li><strong>Income Stream:</strong> Monthly royalty checks provide cash flow</li>
      <li><strong>Valuation Multiple:</strong> Typically 4-8× annual royalty income</li>
      <li><strong>Higher Certainty:</strong> Known geology and economics</li>
      <li><strong>Decline Curves:</strong> Predictable production decrease over time</li>
      <li><strong>Market Demand:</strong> Easier to sell producing assets</li>
    </ul>

    <h3>Non-Producing Mineral Rights</h3>
    <p>Unleased or inactive mineral rights:</p>
    <ul>
      <li><strong>Speculative Value:</strong> Based on potential future development</li>
      <li><strong>Location Critical:</strong> Proximity to producing wells key factor</li>
      <li><strong>Lease Bonus Potential:</strong> Value if energy company wants to lease</li>
      <li><strong>Price Per Acre:</strong> Typically $100-$5,000+ per net acre depending on location</li>
      <li><strong>Lower Valuation:</strong> 10-30% of producing rights in same area</li>
      <li><strong>Future Upside:</strong> Can increase dramatically if drilling occurs</li>
    </ul>

    <h3>Geographic Pricing Variations</h3>
    <p><strong>Permian Basin (West Texas):</strong></p>
    <ul>
      <li>Most active oil and gas region in US</li>
      <li>Producing minerals: $25,000-$100,000+ per net acre</li>
      <li>Non-producing minerals: $2,000-$15,000 per net acre</li>
    </ul>
    <p><strong>Marcellus/Utica Shale (PA, OH, WV):</strong></p>
    <ul>
      <li>Major natural gas production</li>
      <li>Producing minerals: $10,000-$40,000 per net acre</li>
      <li>Non-producing minerals: $500-$5,000 per net acre</li>
    </ul>
    <p><strong>Bakken Shale (North Dakota):</strong></p>
    <ul>
      <li>Oil-rich formation</li>
      <li>Producing minerals: $20,000-$60,000 per net acre</li>
      <li>Non-producing minerals: $1,000-$8,000 per net acre</li>
    </ul>
    <p><strong>SCOOP/STACK (Oklahoma):</strong></p>
    <ul>
      <li>Mixed oil and gas production</li>
      <li>Producing minerals: $15,000-$50,000 per net acre</li>
      <li>Non-producing minerals: $800-$6,000 per net acre</li>
    </ul>

    <h3>Mineral Leasing</h3>
    <p>How mineral owners generate income:</p>
    <ul>
      <li><strong>Lease Bonus:</strong> Upfront payment per acre to lease rights ($100-$10,000+ per acre)</li>
      <li><strong>Royalty Payments:</strong> Ongoing percentage of production value (12.5-25%)</li>
      <li><strong>Lease Term:</strong> Typically 3-5 years primary term</li>
      <li><strong>Delay Rentals:</strong> Annual payments to keep lease active without drilling</li>
      <li><strong>Extension Clauses:</strong> Held by production or continuous operations</li>
      <li><strong>Pooling and Unitization:</strong> Combining acreage for drilling units</li>
    </ul>

    <h3>Royalty Income Taxation</h3>
    <ul>
      <li><strong>Ordinary Income:</strong> Royalty payments taxed as ordinary income</li>
      <li><strong>Depletion Deduction:</strong> 15% percentage depletion or cost depletion</li>
      <li><strong>Self-Employment Tax:</strong> Generally not subject to SE tax for royalty owners</li>
      <li><strong>Capital Gains:</strong> Sale of mineral rights receives long-term capital gains treatment</li>
      <li><strong>1031 Exchange:</strong> Not eligible for like-kind exchanges post-2017</li>
      <li><strong>State Taxes:</strong> Severance taxes and production taxes vary by state</li>
    </ul>

    <h3>Due Diligence for Mineral Rights</h3>
    <ul>
      <li><strong>Title Examination:</strong> Verify mineral ownership in county records</li>
      <li><strong>Chain of Title:</strong> Ensure clear ownership through decades</li>
      <li><strong>Outstanding Leases:</strong> Review any existing lease terms and operators</li>
      <li><strong>Production History:</strong> Analyze revenue statements and decline curves</li>
      <li><strong>Division Orders:</strong> Confirm your decimal interest in each well</li>
      <li><strong>Well Spacing:</strong> Understand drilling units and pooling orders</li>
      <li><strong>Environmental Liens:</strong> Check for contamination or cleanup obligations</li>
      <li><strong>Probate Issues:</strong> Ensure heirs and estates are properly settled</li>
    </ul>

    <h3>Risks and Considerations</h3>
    <ul>
      <li><strong>Price Volatility:</strong> Oil and gas prices fluctuate dramatically</li>
      <li><strong>Production Decline:</strong> Wells deplete, reducing income over time</li>
      <li><strong>Technology Risk:</strong> Alternative energy reducing long-term demand</li>
      <li><strong>Regulatory Changes:</strong> Environmental regulations limiting drilling</li>
      <li><strong>Operator Risk:</strong> Bankruptcy or poor operations by lessee</li>
      <li><strong>Title Defects:</strong> Clouded title can reduce or eliminate value</li>
      <li><strong>Illiquidity:</strong> Can take months to sell mineral rights</li>
    </ul>

    <h3>Selling Mineral Rights</h3>
    <p>Options for monetizing mineral interests:</p>
    <ul>
      <li><strong>Outright Sale:</strong> Sell entire mineral interest for lump sum</li>
      <li><strong>Partial Sale:</strong> Sell fraction (e.g., 50%) and retain rest</li>
      <li><strong>Term Royalty:</strong> Sell income stream for fixed number of years</li>
      <li><strong>Lease to Operator:</strong> Receive bonus and ongoing royalties</li>
      <li><strong>Royalty Financing:</strong> Borrow against future royalty payments</li>
    </ul>

    <h3>Buyers of Mineral Rights</h3>
    <ul>
      <li><strong>Mineral Acquisition Companies:</strong> Specialize in buying mineral rights</li>
      <li><strong>Energy Companies:</strong> Operators acquiring acreage positions</li>
      <li><strong>Investment Funds:</strong> Private equity funds focused on minerals</li>
      <li><strong>Individual Investors:</strong> High-net-worth individuals seeking royalty income</li>
      <li><strong>Royalty Trusts:</strong> Publicly traded trusts owning mineral interests</li>
    </ul>

    <h3>Negotiating Better Terms</h3>
    <ul>
      <li>Request higher royalty rates (18.75-25% vs. standard 12.5%)</li>
      <li>Negotiate no post-production cost deductions</li>
      <li>Include depth severance clauses (retain deeper formations)</li>
      <li>Require Pugh clauses to release non-producing acreage</li>
      <li>Limit surface use and require reclamation bonds</li>
      <li>Include shut-in royalty payments if well not producing</li>
      <li>Demand continuous drilling obligations</li>
    </ul>

    <h3>Coal vs. Oil & Gas Rights</h3>
    <p><strong>Coal Mineral Rights:</strong></p>
    <ul>
      <li>Generally less valuable due to declining coal use</li>
      <li>Surface mining can devastate property value</li>
      <li>Royalty rates: $0.50-$3.00 per ton</li>
      <li>Environmental liabilities a concern</li>
    </ul>
    <p><strong>Oil & Gas Rights:</strong></p>
    <ul>
      <li>Most valuable mineral rights currently</li>
      <li>Horizontal drilling increased development potential</li>
      <li>Royalty rates: 12.5-25% of wellhead value</li>
      <li>More active market for buying and selling</li>
    </ul>

    <h3>Future of Mineral Rights</h3>
    <ul>
      <li><strong>Energy Transition:</strong> Shift toward renewables reducing long-term demand</li>
      <li><strong>Critical Minerals:</strong> Lithium, cobalt, rare earths increasing in value</li>
      <li><strong>Carbon Sequestration:</strong> Potential new revenue from CO2 storage</li>
      <li><strong>Hydrogen Storage:</strong> Underground storage rights becoming valuable</li>
      <li><strong>Geothermal Rights:</strong> Renewable energy from earth's heat</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Hire experienced landman or attorney for title work</li>
      <li>Maintain organized records of ownership and production</li>
      <li>Join mineral owners association for education and advocacy</li>
      <li>Understand your state's mineral rights laws thoroughly</li>
      <li>Get multiple offers when selling mineral rights</li>
      <li>Consider retaining partial interest when selling</li>
      <li>Monitor production and revenue statements monthly</li>
      <li>Plan for estate taxes and inheritance of mineral rights</li>
      <li>Diversify - don't put all wealth in single commodity</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'grossAcres',
        label: 'Gross Acreage',
        type: 'number',
        defaultValue: 160,
      },
      {
        name: 'ownershipInterest',
        label: 'Ownership Interest (Decimal)',
        type: 'number',
        defaultValue: 0.25,
      },
      {
        name: 'monthlyProduction',
        label: 'Monthly Production (BOE)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'commodityPrice',
        label: 'Commodity Price Per BOE',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'royaltyRate',
        label: 'Royalty Rate (%)',
        type: 'number',
        defaultValue: 18.75,
      },
      {
        name: 'annualDecline',
        label: 'Annual Production Decline Rate (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'yearsProduction',
        label: 'Projected Years of Production',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: 12,
      },
    ],
    results: [
      { label: 'Net Mineral Acres', isText: true },
      { label: 'Monthly Royalty Income', isCurrency: true },
      { label: 'First Year Royalty Income', isCurrency: true },
      { label: 'Total Projected Income (Undiscounted)', isCurrency: true },
      { label: 'Present Value (NPV)', isCurrency: true },
      { label: 'Value Per Net Mineral Acre', isCurrency: true },
      { label: 'Income Multiple', isText: true },
    ],
    calculate: (values) => {
      const { grossAcres, ownershipInterest, monthlyProduction, commodityPrice, royaltyRate, annualDecline, yearsProduction, discountRate } = values;
      
      const netAcres = grossAcres * ownershipInterest;
      const monthlyRevenue = monthlyProduction * commodityPrice * (royaltyRate / 100);
      const firstYearIncome = monthlyRevenue * 12;
      
      let totalIncome = 0;
      let npv = 0;
      let currentProduction = monthlyProduction;
      
      for (let year = 1; year <= yearsProduction; year++) {
        const annualIncome = currentProduction * commodityPrice * (royaltyRate / 100) * 12;
        totalIncome += annualIncome;
        npv += annualIncome / Math.pow(1 + discountRate / 100, year);
        currentProduction = currentProduction * (1 - annualDecline / 100);
      }
      
      const valuePerAcre = npv / netAcres;
      const incomeMultiple = npv / firstYearIncome;

      return [
        { label: 'Net Mineral Acres', value: netAcres.toFixed(2), isText: true },
        { label: 'Monthly Royalty Income', value: monthlyRevenue.toFixed(2), isCurrency: true },
        { label: 'First Year Royalty Income', value: firstYearIncome.toFixed(2), isCurrency: true },
        { label: 'Total Projected Income (Undiscounted)', value: totalIncome.toFixed(2), isCurrency: true },
        { label: 'Present Value (NPV)', value: npv.toFixed(2), isCurrency: true },
        { label: 'Value Per Net Mineral Acre', value: valuePerAcre.toFixed(2), isCurrency: true },
        { label: 'Income Multiple', value: `${incomeMultiple.toFixed(2)}x`, isText: true },
      ];
    },
  },
};
