import { CalculatorContent } from '@/types';

export const UTILITY_COST_ESTIMATOR_FOR_TENANTS_CONTENT: CalculatorContent = {
  title: 'Utility Cost Estimator for Tenants - Apartment & Rental Utility Bill Calculator',
  description: 'Estimate monthly utility costs for apartments and rental properties including electricity, gas, water, internet, and more',
  icon: 'Icon',
  slug: 'utility-cost-estimator-for-tenants',
  category: 'Rental & Income',
  metaTitle: 'Utility Cost Estimator for Tenants | Monthly Utility Bill Calculator for Rentals',
  metaDescription: 'Calculate estimated monthly utility costs for apartments and rentals. Get accurate estimates for electricity, gas, water, internet, trash, and total housing costs. Free tenant utility calculator.',
  article: {
    title: 'How to Estimate Utility Costs for Rental Properties',
    content: `
    <h2>What is a Utility Cost Estimator for Tenants?</h2>
    <p>A Utility Cost Estimator for Tenants helps renters calculate their expected monthly utility bills when renting an apartment or house. By factoring in property size, number of occupants, climate, usage patterns, and local utility rates, this calculator provides realistic budgeting estimates for electricity, gas, water, sewer, trash, internet, and other essential services.</p>

    <h3>Why Utility Cost Estimation Matters for Renters</h3>
    <p>Many first-time renters and apartment hunters focus solely on monthly rent but underestimate the impact of utilities on their total housing costs. Accurate utility budgeting prevents financial surprises and helps renters:</p>
    <ul>
      <li><strong>Budget Accurately:</strong> Utilities can add $100-$400+ to monthly housing costs depending on property size and location</li>
      <li><strong>Compare Properties:</strong> An apartment with lower rent but higher utilities may cost more than one with higher rent and included utilities</li>
      <li><strong>Qualify for Rentals:</strong> Landlords use total housing costs (rent + utilities) for income qualification</li>
      <li><strong>Plan Seasonal Variations:</strong> Heating and cooling costs fluctuate significantly throughout the year</li>
      <li><strong>Negotiate Leases:</strong> Understanding typical costs helps negotiate utility inclusion or allowances</li>
      <li><strong>Identify Efficiency Opportunities:</strong> Knowing expected costs helps identify savings opportunities</li>
    </ul>

    <h3>Types of Utilities Tenants Pay</h3>
    
    <h4>Electricity ($30-$180/month)</h4>
    <p>Electric costs vary dramatically by:</p>
    <ul>
      <li><strong>Square Footage:</strong> Larger spaces require more lighting and climate control</li>
      <li><strong>Climate:</strong> Hot climates with AC usage average $150/month vs. $70 in mild climates</li>
      <li><strong>Appliances:</strong> Electric heat, water heater, and cooking appliances increase costs</li>
      <li><strong>Energy Efficiency:</strong> Modern appliances, LED lighting, and insulation reduce usage by 30-50%</li>
      <li><strong>Number of Occupants:</strong> More people = more devices, longer shower times, more cooking</li>
      <li><strong>Rate Structure:</strong> Time-of-use rates, tiered pricing, seasonal rates</li>
    </ul>
    <p><strong>National Averages:</strong></p>
    <ul>
      <li>Studio/1BR apartment: $50-$90/month</li>
      <li>2BR apartment: $70-$120/month</li>
      <li>3BR house: $100-$180/month</li>
      <li>4BR+ house: $140-$250/month</li>
    </ul>

    <h4>Natural Gas ($20-$150/month)</h4>
    <p>Gas costs depend on:</p>
    <ul>
      <li><strong>Heating:</strong> Accounts for 50-70% of winter gas bills</li>
      <li><strong>Water Heater:</strong> Gas water heaters add $15-$30/month</li>
      <li><strong>Cooking:</strong> Gas stove/oven adds $5-$15/month</li>
      <li><strong>Climate:</strong> Northern states average $80-$150/month in winter vs. $20-$40 in summer</li>
      <li><strong>Insulation:</strong> Poor insulation can double heating costs</li>
    </ul>
    <p><strong>Seasonal Variation:</strong></p>
    <ul>
      <li>Summer (June-August): $15-$30/month (cooking only)</li>
      <li>Spring/Fall: $30-$60/month (minimal heating)</li>
      <li>Winter (December-February): $80-$200/month (peak heating season)</li>
    </ul>

    <h4>Water & Sewer ($30-$100/month)</h4>
    <p>Water/sewer costs vary by:</p>
    <ul>
      <li><strong>Usage:</strong> Average person uses 80-100 gallons/day</li>
      <li><strong>Occupancy:</strong> Each additional person adds $10-$20/month</li>
      <li><strong>Fixtures:</strong> Low-flow toilets, showerheads reduce usage by 20-30%</li>
      <li><strong>Municipal Rates:</strong> Vary widely; some cities charge $2/1000 gallons, others $15+</li>
      <li><strong>Sewer Charges:</strong> Often 50-100% of water cost</li>
      <li><strong>Stormwater Fees:</strong> Some cities add $5-$20/month</li>
    </ul>
    <p><strong>Typical Costs:</strong></p>
    <ul>
      <li>1 person: $30-$50/month</li>
      <li>2 people: $45-$75/month</li>
      <li>3+ people: $60-$100/month</li>
      <li>Houses with irrigation: +$30-$80/month in summer</li>
    </ul>

    <h4>Trash & Recycling ($10-$40/month)</h4>
    <ul>
      <li><strong>Apartment Buildings:</strong> Usually included in rent ($0 to tenant)</li>
      <li><strong>Single-Family Homes:</strong> $15-$30/month for city service</li>
      <li><strong>Private Service:</strong> $20-$50/month in rural areas</li>
      <li><strong>Bulk Pickup:</strong> Additional $10-$25 for large items</li>
    </ul>

    <h4>Internet ($30-$100/month)</h4>
    <ul>
      <li><strong>Basic Broadband (100 Mbps):</strong> $30-$50/month</li>
      <li><strong>High-Speed (300-500 Mbps):</strong> $50-$80/month</li>
      <li><strong>Gigabit (1000 Mbps):</strong> $70-$120/month</li>
      <li><strong>Bundled Services:</strong> Internet + TV + phone can reduce per-service costs</li>
      <li><strong>Installation Fees:</strong> $50-$100 one-time (sometimes waived)</li>
      <li><strong>Equipment Rental:</strong> $10-$15/month (buy your own to save)</li>
    </ul>

    <h4>Cable/Streaming ($15-$150/month)</h4>
    <ul>
      <li><strong>Streaming Only:</strong> $15-$50/month (Netflix, Hulu, Disney+, etc.)</li>
      <li><strong>Basic Cable:</strong> $50-$80/month</li>
      <li><strong>Premium Cable:</strong> $100-$200/month</li>
      <li><strong>Live TV Streaming:</strong> $40-$80/month (YouTube TV, Hulu Live, etc.)</li>
    </ul>

    <h4>Renter's Insurance ($15-$30/month)</h4>
    <ul>
      <li><strong>Basic Coverage ($20,000):</strong> $15-$20/month</li>
      <li><strong>Standard Coverage ($40,000):</strong> $20-$25/month</li>
      <li><strong>High Coverage ($75,000+):</strong> $30-$50/month</li>
      <li><strong>Factors:</strong> Location, deductible, coverage limits, claim history</li>
      <li><strong>Discounts:</strong> Bundling with auto insurance saves 10-25%</li>
    </ul>

    <h3>Factors Affecting Utility Costs</h3>
    
    <h4>Property Characteristics</h4>
    <ul>
      <li><strong>Age of Building:</strong> Pre-1980 buildings often have poor insulation, increasing heating/cooling by 30-50%</li>
      <li><strong>Insulation Quality:</strong> Proper insulation can cut heating/cooling costs in half</li>
      <li><strong>Window Quality:</strong> Single-pane windows lose 10-25% of heating/cooling</li>
      <li><strong>Ceiling Height:</strong> High ceilings increase heating/cooling costs by 15-30%</li>
      <li><strong>Exposure:</strong> South-facing units get more sun (lower heating, higher cooling)</li>
      <li><strong>Floor Level:</strong> Top floor apartments have higher cooling costs; ground floor higher heating</li>
    </ul>

    <h4>Appliance Efficiency</h4>
    <ul>
      <li><strong>ENERGY STAR Appliances:</strong> Use 10-50% less energy than non-rated models</li>
      <li><strong>Water Heater Type:</strong> Tankless heaters save 20-30% on water heating costs</li>
      <li><strong>HVAC System:</strong> Modern systems are 20-40% more efficient than 10+ year old units</li>
      <li><strong>Refrigerator Age:</strong> Pre-1990 fridges use 3x more electricity than modern models</li>
      <li><strong>Lighting:</strong> LED bulbs use 75% less energy than incandescent</li>
    </ul>

    <h4>Behavioral Factors</h4>
    <ul>
      <li><strong>Thermostat Settings:</strong> Each degree of heating/cooling adjustment changes costs by 3-5%</li>
      <li><strong>Shower Duration:</strong> 10-minute showers use 25 gallons vs. 5-minute (12.5 gallons)</li>
      <li><strong>Laundry Habits:</strong> Hot water washing costs 3x more than cold water</li>
      <li><strong>Electronics:</strong> Phantom power from devices adds $5-$15/month</li>
      <li><strong>Occupancy Patterns:</strong> Home all day vs. working 9-5 affects heating/cooling costs by 20-40%</li>
    </ul>

    <h4>Geographic Location</h4>
    <p><strong>Highest Utility Cost Cities:</strong></p>
    <ul>
      <li>San Francisco, CA: $350-$500/month average</li>
      <li>New York, NY: $300-$450/month average</li>
      <li>Boston, MA: $280-$400/month average (high winter heating)</li>
      <li>Los Angeles, CA: $250-$350/month average</li>
    </ul>
    <p><strong>Lowest Utility Cost Cities:</strong></p>
    <ul>
      <li>Phoenix, AZ: $150-$250/month (but high summer AC)</li>
      <li>Denver, CO: $120-$200/month</li>
      <li>Salt Lake City, UT: $110-$180/month</li>
      <li>Portland, OR: $100-$160/month (mild climate)</li>
    </ul>

    <h3>Understanding Utility Bill Components</h3>
    
    <h4>Fixed Charges vs. Usage Charges</h4>
    <p>Most utility bills have two components:</p>
    <ul>
      <li><strong>Fixed Customer Charge:</strong> $10-$30/month regardless of usage (covers meter maintenance, billing, infrastructure)</li>
      <li><strong>Usage Charge:</strong> Variable cost based on consumption (kWh for electric, therms for gas, gallons for water)</li>
    </ul>

    <h4>Tiered Rate Structures</h4>
    <p>Many utilities use tiered pricing where cost per unit increases with usage:</p>
    <ul>
      <li><strong>Tier 1 (0-500 kWh):</strong> $0.10/kWh</li>
      <li><strong>Tier 2 (501-1000 kWh):</strong> $0.13/kWh</li>
      <li><strong>Tier 3 (1000+ kWh):</strong> $0.17/kWh</li>
    </ul>
    <p>This incentivizes conservation but can surprise high-usage households</p>

    <h4>Time-of-Use Rates</h4>
    <p>Some utilities charge more during peak hours:</p>
    <ul>
      <li><strong>Off-Peak (9pm-6am):</strong> $0.08/kWh</li>
      <li><strong>Mid-Peak (6am-3pm, 9pm-12am):</strong> $0.12/kWh</li>
      <li><strong>On-Peak (3pm-9pm):</strong> $0.25/kWh</li>
    </ul>
    <p>Running dishwasher, laundry, charging devices during off-peak hours can save 20-30%</p>

    <h3>Utilities Included vs. Tenant-Paid</h3>
    
    <h4>All-Utilities-Included Rentals</h4>
    <p><strong>Pros:</strong></p>
    <ul>
      <li>Predictable monthly costs</li>
      <li>No setup/cancellation hassle</li>
      <li>Good for budgeting</li>
    </ul>
    <p><strong>Cons:</strong></p>
    <ul>
      <li>Rent premium (landlord adds 15-25% markup to cover utilities)</li>
      <li>No incentive to conserve energy</li>
      <li>May pay for utilities you don't use much</li>
    </ul>
    <p><strong>Common in:</strong> Older apartment buildings, furnished rentals, student housing</p>

    <h4>Tenant-Paid Utilities</h4>
    <p><strong>Pros:</strong></p>
    <ul>
      <li>Pay only what you use</li>
      <li>Can reduce costs through conservation</li>
      <li>Lower base rent</li>
    </ul>
    <p><strong>Cons:</strong></p>
    <ul>
      <li>Variable monthly costs</li>
      <li>Setup deposits ($50-$200 per utility)</li>
      <li>Seasonal bill spikes</li>
    </ul>
    <p><strong>Common in:</strong> Single-family homes, newer apartments, condos</p>

    <h4>Partially Included (RUBS - Ratio Utility Billing System)</h4>
    <p>Some landlords divide building-wide utility costs among tenants based on:</p>
    <ul>
      <li><strong>Square footage:</strong> Larger units pay proportionally more</li>
      <li><strong>Occupancy:</strong> More occupants = higher allocation</li>
      <li><strong>Combination:</strong> 70% by sq ft, 30% by occupancy</li>
    </ul>
    <p>RUBS is controversial because you pay a share regardless of actual usage</p>

    <h3>Utility Cost Saving Strategies for Tenants</h3>
    
    <h4>Before Renting</h4>
    <ul>
      <li><strong>Ask for Utility History:</strong> Request past 12 months of utility bills from landlord</li>
      <li><strong>Check for Submetering:</strong> Individually metered units are fairer than RUBS</li>
      <li><strong>Inspect Energy Efficiency:</strong> Look for ENERGY STAR appliances, double-pane windows, insulation</li>
      <li><strong>Compare Total Housing Costs:</strong> Apartment A at $1200 + $200 utilities = $1400 vs. Apartment B at $1350 + $100 utilities = $1450</li>
      <li><strong>Negotiate:</strong> Ask landlord to cover trash, water, or provide utility allowance</li>
    </ul>

    <h4>After Moving In</h4>
    <ul>
      <li><strong>Change Thermostat Habits:</strong> 68°F in winter (vs. 72°F) saves 12%, 78°F in summer (vs. 74°F) saves 15%</li>
      <li><strong>Use Programmable Thermostat:</strong> Set back 8°F when sleeping or away (saves 10% annually)</li>
      <li><strong>Switch to LED Bulbs:</strong> $30 investment saves $100/year in lighting costs</li>
      <li><strong>Install Low-Flow Showerhead:</strong> $15 device saves $100+/year on water heating</li>
      <li><strong>Unplug Electronics:</strong> Use power strips to eliminate phantom power drain</li>
      <li><strong>Air Seal Gaps:</strong> Weather stripping and caulking reduce heating/cooling costs by 5-15%</li>
      <li><strong>Use Window Coverings:</strong> Close blinds in summer (reduce AC by 7%), open in winter (free solar heat)</li>
      <li><strong>Run Full Loads Only:</strong> Dishwasher and laundry efficiency increases with full loads</li>
      <li><strong>Cold Water Laundry:</strong> 90% of washing machine energy goes to heating water</li>
      <li><strong>Shorter Showers:</strong> Reduce from 10 to 5 minutes saves $120/year for family of 4</li>
    </ul>

    <h4>Utility Bill Assistance Programs</h4>
    <ul>
      <li><strong>LIHEAP (Low Income Home Energy Assistance Program):</strong> Federal program helps pay heating/cooling bills</li>
      <li><strong>Weatherization Assistance:</strong> Free energy efficiency upgrades for low-income households</li>
      <li><strong>Budget Billing:</strong> Utility companies offer averaged monthly payments (eliminates seasonal spikes)</li>
      <li><strong>Medical Baseline Allowance:</strong> Reduced rates for households with medical needs</li>
      <li><strong>Income-Based Discounts:</strong> Many utilities offer 15-30% discounts for low-income customers</li>
    </ul>

    <h3>Red Flags: Unusually High Utility Bills</h3>
    <p>If your bills are 30%+ higher than estimates, investigate:</p>
    <ul>
      <li><strong>Leaking Toilets:</strong> Can waste 200 gallons/day ($50/month)</li>
      <li><strong>Old Water Heater:</strong> Constantly running heater indicates failure</li>
      <li><strong>HVAC Issues:</strong> Short cycling or constant running signals malfunction</li>
      <li><strong>Air Leaks:</strong> Significant drafts around windows/doors waste heating/cooling</li>
      <li><strong>Phantom Loads:</strong> Old appliances or excessive electronics</li>
      <li><strong>Billing Errors:</strong> Meter misreads, estimated bills, incorrect rate class</li>
      <li><strong>Theft/Fraud:</strong> Neighbors tapping into your meter (rare but possible)</li>
    </ul>
    <p><strong>Action Steps:</strong> Notify landlord immediately, request meter test, compare usage to neighbors</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property type, square footage, number of occupants, climate zone, and local utility rates. Specify whether you have electric or gas heating, and select your usage patterns (low, average, or high). The calculator will estimate monthly costs for each utility type and provide total housing cost projections including seasonal variations. Use these estimates to budget accurately and compare rental properties on total cost, not just rent alone.</p>

    <h3>Average Total Utility Costs by Property Type</h3>
    <p><strong>Studio Apartment (500 sq ft):</strong> $80-$150/month</p>
    <ul>
      <li>Electric: $40-$70</li>
      <li>Gas: $15-$30</li>
      <li>Internet: $40-$60</li>
      <li>Renter's Insurance: $15-$20</li>
      <li>Water/Sewer: Often included</li>
    </ul>

    <p><strong>1-Bedroom Apartment (650 sq ft):</strong> $110-$200/month</p>
    <ul>
      <li>Electric: $50-$90</li>
      <li>Gas: $20-$40</li>
      <li>Water/Sewer: $30-$50 (if separate)</li>
      <li>Internet: $40-$60</li>
      <li>Renter's Insurance: $15-$25</li>
    </ul>

    <p><strong>2-Bedroom Apartment (900 sq ft):</strong> $150-$280/month</p>
    <ul>
      <li>Electric: $70-$120</li>
      <li>Gas: $25-$60</li>
      <li>Water/Sewer: $45-$75</li>
      <li>Internet: $50-$70</li>
      <li>Renter's Insurance: $20-$30</li>
    </ul>

    <p><strong>3-Bedroom House (1500 sq ft):</strong> $220-$400/month</p>
    <ul>
      <li>Electric: $100-$180</li>
      <li>Gas: $40-$100</li>
      <li>Water/Sewer: $60-$90</li>
      <li>Trash: $15-$30</li>
      <li>Internet: $50-$80</li>
      <li>Renter's Insurance: $25-$35</li>
    </ul>

    <p><strong>4-Bedroom House (2200 sq ft):</strong> $300-$550/month</p>
    <ul>
      <li>Electric: $140-$250</li>
      <li>Gas: $60-$150</li>
      <li>Water/Sewer: $75-$110</li>
      <li>Trash: $20-$35</li>
      <li>Internet: $60-$100</li>
      <li>Renter's Insurance: $30-$45</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Utility costs are a significant component of total housing expenses, often adding 10-30% to your monthly rent. Accurate estimation before renting prevents budget shocks and enables true cost comparisons between properties. Always request utility history from landlords, factor in seasonal variations, and consider energy-efficient features when choosing a rental. Once moved in, adopt conservation habits that can reduce your utility bills by 20-40% while maintaining comfort. Remember: the cheapest rent isn't always the best deal when utilities are expensive.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertySize',
        label: 'Property Size (Square Feet)',
        type: 'number',
        defaultValue: 900,
      },
      {
        name: 'occupants',
        label: 'Number of Occupants',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'climate',
        label: 'Climate Zone',
        type: 'select',
        options: [
          { value: 'Hot/Humid', label: 'Hot/Humid (Southeast, Gulf Coast)' },
          { value: 'Hot/Dry', label: 'Hot/Dry (Southwest Desert)' },
          { value: 'Cold', label: 'Cold (Northern States)' },
          { value: 'Mild', label: 'Mild (Pacific Northwest, California)' },
          { value: 'Mixed', label: 'Mixed (Mid-Atlantic, Midwest)' },
        ],
        defaultValue: 'Mixed',
      },
      {
        name: 'heatingType',
        label: 'Primary Heating Type',
        type: 'select',
        options: [
          { value: 'Natural Gas', label: 'Natural Gas' },
          { value: 'Electric', label: 'Electric' },
          { value: 'Heat Pump', label: 'Heat Pump (Electric)' },
          { value: 'Oil', label: 'Heating Oil' },
          { value: 'Included', label: 'Heating Included in Rent' },
        ],
        defaultValue: 'Natural Gas',
      },
      {
        name: 'electricRate',
        label: 'Electricity Rate ($/kWh)',
        type: 'number',
        defaultValue: 0.13,
      },
      {
        name: 'gasRate',
        label: 'Natural Gas Rate ($/therm)',
        type: 'number',
        defaultValue: 1.20,
      },
      {
        name: 'waterRate',
        label: 'Water/Sewer Rate ($/month per person)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'internetCost',
        label: 'Internet Service Cost',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'includesTrash',
        label: 'Trash Service',
        type: 'select',
        options: [
          { value: 'Included', label: 'Included in Rent' },
          { value: 'Separate', label: 'Tenant Pays ($20/month)' },
        ],
        defaultValue: 'Included',
      },
    ],
    results: [],
    calculate: (values) => {
      const {
        propertySize,
        occupants,
        climate,
        heatingType,
        electricRate,
        gasRate,
        waterRate,
        internetCost,
        includesTrash,
      } = values;

      const electricityMultipliers: Record<string, number> = {
        'Hot/Humid': 1.4,
        'Hot/Dry': 1.3,
        'Cold': 0.9,
        'Mild': 0.85,
        'Mixed': 1.0,
      };

      const heatingMultipliers: Record<string, number> = {
        'Hot/Humid': 0.3,
        'Hot/Dry': 0.4,
        'Cold': 2.0,
        'Mild': 0.6,
        'Mixed': 1.0,
      };

      const baseElectricKwh = (propertySize / 100) * 80;
      const climateAdjustedKwh = baseElectricKwh * electricityMultipliers[climate];
      const occupantAdjustedKwh = climateAdjustedKwh * (1 + (occupants - 1) * 0.2);

      let monthlyElectric = occupantAdjustedKwh * electricRate;

      let monthlyGas = 0;
      if (heatingType === 'Natural Gas') {
        const baseTherms = (propertySize / 100) * 10;
        const climateAdjustedTherms = baseTherms * heatingMultipliers[climate];
        monthlyGas = climateAdjustedTherms * gasRate;
      } else if (heatingType === 'Electric' || heatingType === 'Heat Pump') {
        const heatingKwh = (propertySize / 100) * 150 * heatingMultipliers[climate];
        const heatingEfficiency = heatingType === 'Heat Pump' ? 0.4 : 1.0;
        monthlyElectric += heatingKwh * heatingEfficiency * electricRate;
      } else if (heatingType === 'Oil') {
        monthlyGas = (propertySize / 100) * 25 * heatingMultipliers[climate];
      }

      const monthlyWater = waterRate * occupants;

      const monthlyTrash = includesTrash === 'Separate' ? 20 : 0;

      const monthlyInternet = internetCost;

      const renterInsurance = 15 + occupants * 5;

      const totalUtilities =
        monthlyElectric +
        monthlyGas +
        monthlyWater +
        monthlyTrash +
        monthlyInternet +
        renterInsurance;

      const winterElectric =
        heatingType === 'Electric' || heatingType === 'Heat Pump'
          ? monthlyElectric * 1.4
          : monthlyElectric * 0.9;
      const winterGas = heatingType === 'Natural Gas' ? monthlyGas * 1.8 : monthlyGas;
      const winterTotal =
        winterElectric + winterGas + monthlyWater + monthlyTrash + monthlyInternet + renterInsurance;

      const summerElectric =
        climate === 'Hot/Humid' || climate === 'Hot/Dry' ? monthlyElectric * 1.5 : monthlyElectric * 1.1;
      const summerGas = heatingType === 'Natural Gas' ? monthlyGas * 0.3 : monthlyGas;
      const summerTotal =
        summerElectric + summerGas + monthlyWater + monthlyTrash + monthlyInternet + renterInsurance;

      return [
        {
          label: 'Electricity (Average Month)',
          value: `$${monthlyElectric.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: `${heatingType === 'Oil' ? 'Heating Oil' : 'Natural Gas'} (Average Month)`,
          value: heatingType === 'Included' ? 'Included in Rent' : `$${monthlyGas.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Water & Sewer',
          value: `$${monthlyWater.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Trash & Recycling',
          value: includesTrash === 'Included' ? 'Included in Rent' : `$${monthlyTrash.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Internet Service',
          value: `$${monthlyInternet.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: "Renter's Insurance (Estimated)",
          value: `$${renterInsurance.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Total Monthly Utilities (Average)',
          value: `$${totalUtilities.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Winter Peak Month (Heating Season)',
          value: `$${winterTotal.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Summer Peak Month (Cooling Season)',
          value: `$${summerTotal.toFixed(0)}`,
          type: 'text' as const,
        },
        {
          label: 'Annual Utility Cost (Estimated)',
          value: `$${(totalUtilities * 12).toLocaleString()}`,
          type: 'text' as const,
        },
        {
          label: 'Cost Per Square Foot (Annual)',
          value: `$${((totalUtilities * 12) / propertySize).toFixed(2)}/sq ft`,
          type: 'text' as const,
        },
        {
          label: 'Cost Per Occupant (Monthly)',
          value: `$${(totalUtilities / occupants).toFixed(0)}/person`,
          type: 'text' as const,
        },
        {
          label: 'Budget Recommendation',
          value: `Plan for $${Math.ceil(winterTotal / 50) * 50}/month in winter, $${Math.ceil(summerTotal / 50) * 50}/month in summer. Annual budget: $${((totalUtilities * 12) / 100).toFixed(0)}00-$${((winterTotal * 4 + summerTotal * 4 + totalUtilities * 4) / 1200).toFixed(0)}00`,
          type: 'text' as const,
        },
      ];
    },
  },
};
