import { CalculatorContent } from '@/types';

export const INHERITED_PROPERTY_OPTIONS_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Inherited Property Options Analyzer (Sell vs. Rent vs. Keep)',
  description: 'Compare financial outcomes of selling, renting, or keeping an inherited property. Analyze tax implications, cash flow, and long-term wealth impact.',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'inherited-property-options-analyzer',
  metaTitle: 'Inherited Property Analyzer - Sell vs Rent vs Keep Calculator',
  metaDescription: 'Should you sell, rent, or keep inherited property? Calculate stepped-up basis, rental income potential, capital gains, and long-term wealth outcomes for each option.',
  article: {
    title: "Inherited Property: Should You Sell, Rent, or Keep It?",
    content: `
    <h2>The Biggest Financial Decision After Inheriting Property</h2>
    <p>Inheriting real estate can be emotionally overwhelming and financially complex. Making the wrong decision could cost you hundreds of thousands of dollars over time. This guide helps you evaluate your options objectively.</p>
    
    <h3>The Stepped-Up Basis Advantage</h3>
    <p>This is the most important tax concept for inherited property:</p>
    <p><strong>When you inherit property, your cost basis "steps up" to the fair market value on the date of death.</strong> This eliminates all capital gains tax on appreciation during the deceased's lifetime.</p>
    
    <h4>Example of Stepped-Up Basis</h4>
    <ul>
      <li>Original purchase price (1990): $100,000</li>
      <li>Value at death (2024): $600,000</li>
      <li>Your new basis: $600,000 (not $100,000)</li>
      <li>If you sell for $625,000: Only $25,000 is taxable gain</li>
      <li>Capital gains tax saved: ~$100,000</li>
    </ul>
    
    <h3>Option 1: Sell the Property</h3>
    
    <h4>Advantages of Selling</h4>
    <ul>
      <li><strong>Immediate Liquidity:</strong> Convert to cash within 30-90 days</li>
      <li><strong>No Landlord Responsibilities:</strong> Avoid tenant issues, maintenance, vacancies</li>
      <li><strong>Diversification:</strong> Invest proceeds across stocks, bonds, REITs</li>
      <li><strong>Tax Efficiency:</strong> Take advantage of stepped-up basis (minimal capital gains)</li>
      <li><strong>Equal Division:</strong> Easier to split among multiple heirs</li>
      <li><strong>No Emotional Attachment:</strong> Clean break from deceased's property</li>
    </ul>
    
    <h4>Disadvantages of Selling</h4>
    <ul>
      <li><strong>Lost Rental Income:</strong> Forgo potential $1,000-$3,000/month cash flow</li>
      <li><strong>Lost Appreciation:</strong> Miss out on 3-5% annual property value growth</li>
      <li><strong>Transaction Costs:</strong> Pay 6-10% in commissions, closing costs, repairs</li>
      <li><strong>Timing Risk:</strong> May be forced to sell in down market</li>
      <li><strong>Regret Factor:</strong> Can't get the property back if you change your mind</li>
    </ul>
    
    <h4>When Selling Makes Sense</h4>
    <ul>
      <li>Property needs major repairs (roof, foundation, HVAC)</li>
      <li>You live far away and can't manage it</li>
      <li>Multiple heirs want cash, not shared ownership</li>
      <li>Property is in declining neighborhood</li>
      <li>You need money for debt, emergency fund, or other investment</li>
      <li>You have no interest in being a landlord</li>
    </ul>
    
    <h3>Option 2: Rent the Property</h3>
    
    <h4>Advantages of Renting</h4>
    <ul>
      <li><strong>Monthly Cash Flow:</strong> Rental income covers mortgage (or pure profit if paid off)</li>
      <li><strong>Appreciation:</strong> Benefit from 3-5% annual property value growth</li>
      <li><strong>Tax Benefits:</strong> Deduct mortgage interest, property taxes, insurance, repairs, depreciation</li>
      <li><strong>Inflation Hedge:</strong> Rents increase with inflation</li>
      <li><strong>Keep Options Open:</strong> Can always sell later</li>
      <li><strong>Build Wealth:</strong> Tenants pay down mortgage while property appreciates</li>
    </ul>
    
    <h4>Disadvantages of Renting</h4>
    <ul>
      <li><strong>Landlord Responsibilities:</strong> Tenant screening, lease enforcement, repairs, emergencies</li>
      <li><strong>Vacancy Risk:</strong> 5-10% of the year property may sit empty</li>
      <li><strong>Bad Tenant Risk:</strong> Non-payment, property damage, eviction costs</li>
      <li><strong>Maintenance Costs:</strong> 1% of property value annually (plus big-ticket items)</li>
      <li><strong>Management Fees:</strong> 8-12% of rent if using property manager</li>
      <li><strong>Emotional Drain:</strong> 2 AM emergency calls, conflicts, stress</li>
    </ul>
    
    <h4>When Renting Makes Sense</h4>
    <ul>
      <li>Property is in good condition and desirable rental area</li>
      <li>Rent-to-price ratio is 0.8% or higher (e.g., $2,000/mo rent on $250k house)</li>
      <li>You're comfortable being a landlord (or can afford property manager)</li>
      <li>Property is fully paid off (maximizes cash flow)</li>
      <li>You want to keep property in the family long-term</li>
      <li>Strong rental market with low vacancy rates</li>
    </ul>
    
    <h3>Option 3: Keep and Live In It</h3>
    
    <h4>Advantages of Living There</h4>
    <ul>
      <li><strong>No Rent/Mortgage:</strong> Save $1,500-$3,000/month in housing costs</li>
      <li><strong>Sentimental Value:</strong> Keep family home and memories</li>
      <li><strong>Primary Residence Tax Benefits:</strong> $250k/$500k capital gains exclusion if you sell later</li>
      <li><strong>Lifestyle Benefits:</strong> Larger home, better neighborhood, established community</li>
      <li><strong>No Landlord Duties:</strong> Avoid rental property headaches</li>
    </ul>
    
    <h4>Disadvantages of Living There</h4>
    <ul>
      <li><strong>Higher Ongoing Costs:</strong> Property taxes, insurance, utilities, maintenance on larger home</li>
      <li><strong>Location Mismatch:</strong> May be far from work, family, preferred area</li>
      <li><strong>Oversized for Needs:</strong> Paying to heat/cool/maintain space you don't use</li>
      <li><strong>Opportunity Cost:</strong> Could earn $2,000/mo renting it while you rent smaller/cheaper place</li>
      <li><strong>Emotional Attachment:</strong> May delay selling when you should</li>
    </ul>
    
    <h4>When Keeping Makes Sense</h4>
    <ul>
      <li>You were already planning to move to that area</li>
      <li>Home size and location fit your lifestyle</li>
      <li>Property is paid off (low carrying costs)</li>
      <li>Strong sentimental attachment and you can afford it</li>
      <li>Home is significantly nicer than what you could otherwise afford</li>
    </ul>
    
    <h3>The 1% Rule and Cash Flow Analysis</h3>
    <p>For rental evaluation, monthly rent should be at least 1% of property value for positive cash flow:</p>
    <ul>
      <li>$200,000 property → $2,000/month rent (1% rule met)</li>
      <li>$400,000 property → $2,500/month rent (0.625% - negative cash flow likely)</li>
    </ul>
    
    <h3>Multiple Heirs Complicate Everything</h3>
    <p>When siblings inherit property jointly:</p>
    <ul>
      <li><strong>One Wants to Sell, Others Want to Keep:</strong> Buy-out or forced sale may be needed</li>
      <li><strong>One Wants to Live There:</strong> Must pay fair market rent to others or buy them out</li>
      <li><strong>Sharing Rental Income:</strong> Requires trust, agreement on management, expense sharing</li>
      <li><strong>Partition Action:</strong> Court-ordered sale if heirs can't agree (expensive and contentious)</li>
    </ul>
    
    <h4>Solutions for Multiple Heirs</h4>
    <ul>
      <li>One heir buys out the others (get independent appraisal)</li>
      <li>All agree to sell and split proceeds</li>
      <li>Form LLC and operate as business partners (written operating agreement essential)</li>
      <li>One heir gets property, others get different assets (estate equalization)</li>
    </ul>
    
    <h3>Tax Considerations Summary</h3>
    <table>
      <tr>
        <th>Option</th>
        <th>Capital Gains Tax</th>
        <th>Ongoing Tax Benefits</th>
      </tr>
      <tr>
        <td>Sell Immediately</td>
        <td>None (stepped-up basis)</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Rent</td>
        <td>Yes (on appreciation after inheritance)</td>
        <td>Depreciation, expense deductions</td>
      </tr>
      <tr>
        <td>Live In (2+ years)</td>
        <td>Exempt on first $250k/$500k gain</td>
        <td>Mortgage interest, property tax deduction</td>
      </tr>
    </table>
    
    <h3>Don't Rush the Decision</h3>
    <p>You don't have to decide immediately. Consider:</p>
    <ul>
      <li>Take 6-12 months to evaluate options</li>
      <li>Get property professionally appraised</li>
      <li>Research comparable rents in the area</li>
      <li>Consult with tax advisor on your specific situation</li>
      <li>Get bids from contractors for any needed repairs</li>
      <li>Talk to local real estate agents about market conditions</li>
    </ul>
    
    <h3>The Hidden Costs of Holding</h3>
    <p>Even if paid off, holding property costs money:</p>
    <ul>
      <li>Property taxes: 1-2% of value annually</li>
      <li>Insurance: $1,000-$3,000/year</li>
      <li>Maintenance: 1% of value annually</li>
      <li>Utilities (if vacant): $100-$300/month</li>
      <li>HOA fees (if applicable): $100-$500/month</li>
    </ul>
    <p>A $300,000 paid-off home might still cost $8,000-$15,000/year to hold vacant.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Fair Market Value",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "mortgageBalance",
        label: "Remaining Mortgage Balance",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "monthlyRent",
        label: "Potential Monthly Rent",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "appreciationRate",
        label: "Annual Appreciation Rate (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "rentGrowthRate",
        label: "Annual Rent Growth Rate (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "propertyTax",
        label: "Annual Property Tax",
        type: "number",
        placeholder: "6000",
        defaultValue: "6000",
      },
      {
        name: "insurance",
        label: "Annual Insurance",
        type: "number",
        placeholder: "1800",
        defaultValue: "1800",
      },
      {
        name: "maintenance",
        label: "Annual Maintenance/Repairs",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "vacancyRate",
        label: "Vacancy Rate (%)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "propertyManagement",
        label: "Property Management Fee (%)",
        type: "number",
        placeholder: "10",
        defaultValue: "0",
      },
      {
        name: "yearsToHold",
        label: "Analysis Time Horizon (Years)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "sellingCosts",
        label: "Selling Costs (% of sale price)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
    ],
    results: [
      { label: "Option 1: SELL NOW - Net Proceeds", isCurrency: true },
      { label: "Option 2: RENT - Total Net Cash Flow (10 yrs)", isCurrency: true },
      { label: "Option 2: RENT - Property Value After 10 Years", isCurrency: true },
      { label: "Option 2: RENT - Total Net Worth", isCurrency: true },
      { label: "Option 2: RENT - Annual Cash-on-Cash Return (%)", isCurrency: false },
      { label: "Option 3: KEEP - Saved Housing Costs (10 yrs)", isCurrency: true },
      { label: "Option 3: KEEP - Property Value After 10 Years", isCurrency: true },
      { label: "Option 3: KEEP - Total Holding Costs (10 yrs)", isCurrency: true },
      { label: "Recommended Strategy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const mortgageBalance = Number(data.mortgageBalance) || 0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      const appreciationRate = Number(data.appreciationRate) / 100 || 0;
      const rentGrowthRate = Number(data.rentGrowthRate) / 100 || 0;
      const propertyTax = Number(data.propertyTax) || 0;
      const insurance = Number(data.insurance) || 0;
      const maintenance = Number(data.maintenance) || 0;
      const vacancyRate = Number(data.vacancyRate) / 100 || 0;
      const propertyManagement = Number(data.propertyManagement) / 100 || 0;
      const yearsToHold = Number(data.yearsToHold) || 10;
      const sellingCosts = Number(data.sellingCosts) / 100 || 0;
      
      // OPTION 1: SELL NOW
      const sellingCostsAmount = propertyValue * sellingCosts;
      const sellNowProceeds = propertyValue - mortgageBalance - sellingCostsAmount;
      
      // OPTION 2: RENT
      let totalRentalIncome = 0;
      let totalRentalExpenses = 0;
      let currentRent = monthlyRent;
      
      for (let year = 0; year < yearsToHold; year++) {
        const annualRent = currentRent * 12;
        const effectiveRent = annualRent * (1 - vacancyRate);
        const managementFee = effectiveRent * propertyManagement;
        const yearExpenses = propertyTax + insurance + maintenance + managementFee;
        
        totalRentalIncome += effectiveRent;
        totalRentalExpenses += yearExpenses;
        
        currentRent *= (1 + rentGrowthRate);
      }
      
      const netRentalCashFlow = totalRentalIncome - totalRentalExpenses;
      const futurePropertyValue = propertyValue * Math.pow(1 + appreciationRate, yearsToHold);
      const sellingCostsFuture = futurePropertyValue * sellingCosts;
      const netProceedsAfterRenting = futurePropertyValue - mortgageBalance - sellingCostsFuture;
      const totalRentalNetWorth = netRentalCashFlow + netProceedsAfterRenting;
      
      // Cash-on-cash return (annual average)
      const equity = propertyValue - mortgageBalance;
      const avgAnnualCashFlow = netRentalCashFlow / yearsToHold;
      const cashOnCashReturn = equity > 0 ? (avgAnnualCashFlow / equity) * 100 : 0;
      
      // OPTION 3: KEEP (Live in it)
      const savedRent = monthlyRent * 12 * yearsToHold; // What you'd pay in rent elsewhere
      const totalHoldingCosts = (propertyTax + insurance + maintenance) * yearsToHold;
      const netSavings = savedRent - totalHoldingCosts;
      const futureValueKeep = propertyValue * Math.pow(1 + appreciationRate, yearsToHold);
      
      // Recommendation logic
      let recommendation = "";
      if (sellNowProceeds > totalRentalNetWorth && sellNowProceeds > netSavings + futureValueKeep) {
        recommendation = "SELL NOW - Highest immediate return";
      } else if (totalRentalNetWorth > sellNowProceeds && totalRentalNetWorth > netSavings + futureValueKeep) {
        recommendation = "RENT - Best long-term wealth builder";
      } else {
        recommendation = "KEEP & LIVE - Best lifestyle value";
      }
      
      // Check if cash flow is negative
      if (netRentalCashFlow < 0) {
        recommendation = "SELL or KEEP - Rental loses money";
      }

      return [
        { label: "Option 1: SELL NOW - Net Proceeds", value: sellNowProceeds.toFixed(2), isCurrency: true },
        { label: "Option 2: RENT - Total Net Cash Flow (10 yrs)", value: netRentalCashFlow.toFixed(2), isCurrency: true },
        { label: "Option 2: RENT - Property Value After 10 Years", value: futurePropertyValue.toFixed(2), isCurrency: true },
        { label: "Option 2: RENT - Total Net Worth", value: totalRentalNetWorth.toFixed(2), isCurrency: true },
        { label: "Option 2: RENT - Annual Cash-on-Cash Return (%)", value: cashOnCashReturn.toFixed(2), isCurrency: false },
        { label: "Option 3: KEEP - Saved Housing Costs (10 yrs)", value: netSavings.toFixed(2), isCurrency: true },
        { label: "Option 3: KEEP - Property Value After 10 Years", value: futureValueKeep.toFixed(2), isCurrency: true },
        { label: "Option 3: KEEP - Total Holding Costs (10 yrs)", value: totalHoldingCosts.toFixed(2), isCurrency: true },
        { label: "Recommended Strategy", value: recommendation, isCurrency: false },
      ];
    },
  },
};
