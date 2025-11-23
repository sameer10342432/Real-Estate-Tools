import { CalculatorContent } from '@/types';

export const HouseboatVsCondoCostContent: CalculatorContent = {
  title: 'Houseboat vs Condo Cost Calculator',
  description: 'Compare the costs of houseboat living vs condo ownership including purchase price, moorage fees, maintenance, utilities, insurance, and unique considerations',
  icon: '⚓',
  category: 'Additional Tools',
  slug: 'houseboat-vs-condo-cost',
  
  metaTitle: 'Houseboat vs Condo Cost Calculator - Compare Waterfront Living | Property Tools',
  metaDescription: 'Compare the costs of houseboat living vs condo ownership. Analyze purchase price, moorage fees, maintenance, utilities, insurance, and unique considerations.',
  
  article: {
    title: 'Houseboat vs Condo Cost Comparison',
    content: `
      <h2>Houseboat vs Condo Cost Calculator</h2>
      <p>Dreaming of waterfront living? This calculator compares houseboat ownership vs waterfront condo, including purchase price, moorage/HOA fees, maintenance, insurance, and the unique challenges of each lifestyle.</p>

      <h3>Houseboat Cost Breakdown</h3>
      <h4>Purchase Price:</h4>
      <ul>
        <li>Basic floating home: $150,000-$400,000</li>
        <li>Luxury houseboat: $400,000-$1,000,000+</li>
        <li>Location matters: Seattle > Portland > other cities</li>
      </ul>

      <h4>Monthly Costs:</h4>
      <ul>
        <li>Moorage fees: $400-$1,500/month (varies wildly by location)</li>
        <li>Utilities: $100-$300 (electric, water, sewage)</li>
        <li>Insurance: $150-$500/month (marine insurance expensive)</li>
        <li>Maintenance: $200-$600/month (hull, systems, pumps)</li>
        <li><strong>Total: $850-$2,900/month</strong></li>
      </ul>

      <h3>Waterfront Condo Cost Breakdown</h3>
      <h4>Purchase Price:</h4>
      <ul>
        <li>Basic waterfront condo: $300,000-$600,000</li>
        <li>Luxury waterfront condo: $600,000-$2,000,000+</li>
        <li>Premium for water views: 20-50% over non-view units</li>
      </ul>

      <h4>Monthly Costs:</h4>
      <ul>
        <li>HOA fees: $300-$800/month</li>
        <li>Property tax: $300-$1,000/month (varies by value)</li>
        <li>Insurance: $80-$200/month</li>
        <li>Utilities: $100-$250</li>
        <li>Maintenance reserves: $50-$150</li>
        <li><strong>Total: $830-$2,400/month</strong></li>
      </ul>

      <h3>Houseboat Pros & Cons</h3>
      <h4>Pros:</h4>
      <ul>
        <li>Unique lifestyle on the water</li>
        <li>Lower purchase price than waterfront condo</li>
        <li>Tight-knit marina community</li>
        <li>No property tax in some jurisdictions</li>
        <li>Can relocate (if not permanently moored)</li>
        <li>Cool factor and uniqueness</li>
      </ul>

      <h4>Cons:</h4>
      <ul>
        <li>High moorage fees ($400-$1,500/month)</li>
        <li>Expensive marine insurance</li>
        <li>Constant maintenance (pumps, hull, systems)</li>
        <li>Difficult financing (specialty loans, high rates)</li>
        <li>Depreciation (like boat, not real estate)</li>
        <li>Limited resale market</li>
        <li>Weather/water damage risks</li>
        <li>No land ownership</li>
      </ul>

      <h3>Waterfront Condo Pros & Cons</h3>
      <h4>Pros:</h4>
      <ul>
        <li>Appreciates in value (real estate)</li>
        <li>Traditional mortgage financing</li>
        <li>Easier resale market</li>
        <li>HOA handles exterior maintenance</li>
        <li>More stable structure (less rocking)</li>
        <li>Land ownership (appreciates)</li>
      </ul>

      <h4>Cons:</h4>
      <ul>
        <li>Higher purchase price (20-50% premium for waterfront)</li>
        <li>Property taxes ($3K-$12K/year)</li>
        <li>HOA fees and special assessments</li>
        <li>Less unique than houseboat</li>
        <li>HOA rules and restrictions</li>
        <li>Can't relocate</li>
      </ul>

      <h3>10-Year Total Cost Comparison</h3>
      <h4>Houseboat (10 years):</h4>
      <ul>
        <li>Purchase: $300,000</li>
        <li>Moorage: $120,000 ($1,000/month × 120 months)</li>
        <li>Insurance: $36,000 ($300/month × 120 months)</li>
        <li>Maintenance: $60,000 ($500/month × 120 months)</li>
        <li>Utilities: $24,000 ($200/month × 120 months)</li>
        <li><strong>Total spent: $540,000</strong></li>
        <li>Resale value: ~$240,000 (20% depreciation)</li>
        <li><strong>Net cost: $300,000</strong></li>
      </ul>

      <h4>Waterfront Condo (10 years):</h4>
      <ul>
        <li>Purchase: $500,000</li>
        <li>Mortgage payments (80% LTV): $280,000 (P&I, 7%, 10 yrs)</li>
        <li>Property tax: $60,000 ($500/month × 120 months)</li>
        <li>HOA fees: $72,000 ($600/month × 120 months)</li>
        <li>Insurance: $18,000 ($150/month × 120 months)</li>
        <li>Utilities: $24,000 ($200/month × 120 months)</li>
        <li><strong>Total spent: $554,000</strong></li>
        <li>Resale value: ~$600,000 (20% appreciation)</li>
        <li>Equity: Down payment + principal + appreciation = $250,000</li>
        <li><strong>Net cost: $304,000</strong></li>
      </ul>

      <p><strong>Result:</strong> Similar net cost BUT condo builds equity, houseboat doesn't appreciate</p>

      <h3>Who Should Choose Houseboat?</h3>
      <ul>
        <li>Unique lifestyle seekers</li>
        <li>Lower upfront capital ($150K-$400K vs $500K-$1M)</li>
        <li>Nautical enthusiasts</li>
        <li>Minimalist (less space than condo)</li>
        <li>No kids or small family</li>
        <li>Handy (DIY maintenance)</li>
        <li>Love tight-knit community</li>
      </ul>

      <h3>Who Should Choose Waterfront Condo?</h3>
      <ul>
        <li>Long-term wealth building focus</li>
        <li>Families (more space, stability)</li>
        <li>Want appreciation and equity</li>
        <li>Prefer traditional financing</li>
        <li>Less hands-on maintenance</li>
        <li>Value resale options</li>
      </ul>

      <h3>Hidden Houseboat Costs</h3>
      <ul>
        <li>Hull inspections: $500-$1,500 every few years</li>
        <li>Pump replacements: $500-$3,000</li>
        <li>Dock repairs: $1,000-$10,000 (rare but expensive)</li>
        <li>Winterization (cold climates): $500-$2,000/year</li>
        <li>Sinking/water damage deductibles: $5,000-$25,000</li>
        <li>Moorage slip waitlists (some marinas have 5+ year waits)</li>
      </ul>

      <h3>Financing Differences</h3>
      <h4>Houseboat:</h4>
      <ul>
        <li>Specialty marine loans (not traditional mortgage)</li>
        <li>Higher interest rates (8-12% vs 6-8% for condo)</li>
        <li>Shorter terms (15-20 years max)</li>
        <li>Larger down payments required (20-30%)</li>
        <li>Harder to qualify</li>
      </ul>

      <h4>Waterfront Condo:</h4>
      <ul>
        <li>Traditional mortgage (easy financing)</li>
        <li>Standard rates (6-8%)</li>
        <li>30-year terms available</li>
        <li>Lower down payment options (3.5-10%)</li>
        <li>Easier to qualify</li>
      </ul>

      <p><strong>Use this calculator to compare the true costs of houseboat vs waterfront condo living and decide which waterfront lifestyle makes financial sense for you!</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'houseboatCost',
        label: 'Houseboat Purchase Cost ($)',
        type: 'number',
        defaultValue: '300000',
        placeholder: '300000',
      },
      {
        name: 'condoCost',
        label: 'Waterfront Condo Cost ($)',
        type: 'number',
        defaultValue: '500000',
        placeholder: '500000',
      },
      {
        name: 'moorageFees',
        label: 'Monthly Moorage Fees ($)',
        type: 'number',
        defaultValue: '1000',
        placeholder: '1000',
      },
      {
        name: 'hoaFees',
        label: 'Monthly Condo HOA Fees ($)',
        type: 'number',
        defaultValue: '600',
        placeholder: '600',
      },
      {
        name: 'yearsToCompare',
        label: 'Years to Compare',
        type: 'number',
        defaultValue: '10',
        placeholder: '10',
      },
    ],
    results: [
      { label: 'Houseboat Total Cost', isCurrency: true },
      { label: 'Condo Total Cost', isCurrency: true },
      { label: 'Cost Breakdown', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const houseboatCost = Number(values.houseboatCost) || 300000;
      const condoCost = Number(values.condoCost) || 500000;
      const moorageFees = Number(values.moorageFees) || 1000;
      const hoaFees = Number(values.hoaFees) || 600;
      const years = Number(values.yearsToCompare) || 10;

      const months = years * 12;

      // Houseboat costs
      const houseboatInsurance = 300;
      const houseboatMaintenance = 500;
      const houseboatUtilities = 200;
      const houseboatMonthly = moorageFees + houseboatInsurance + houseboatMaintenance + houseboatUtilities;
      const houseboatTotalSpent = houseboatCost + (houseboatMonthly * months);
      const houseboatDepreciation = houseboatCost * 0.20;
      const houseboatResaleValue = houseboatCost - houseboatDepreciation;
      const houseboatNetCost = houseboatTotalSpent - houseboatResaleValue;

      // Condo costs
      const downPayment = condoCost * 0.20;
      const loanAmount = condoCost - downPayment;
      const monthlyRate = 0.07 / 12;
      const mortgagePayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, 30 * 12)) / (Math.pow(1 + monthlyRate, 30 * 12) - 1);
      const totalMortgagePaid = mortgagePayment * months;
      const condoPropertyTax = (condoCost * 0.012) / 12;
      const condoInsurance = 150;
      const condoUtilities = 200;
      const condoMonthly = mortgagePayment + condoPropertyTax + hoaFees + condoInsurance + condoUtilities;
      const condoTotalSpent = downPayment + totalMortgagePaid + (condoPropertyTax * months) + (hoaFees * months) + (condoInsurance * months) + (condoUtilities * months);
      const condoAppreciation = condoCost * 0.03 * years;
      const condoResaleValue = condoCost + condoAppreciation;
      const principalPaid = (mortgagePayment - (loanAmount * monthlyRate)) * months * 0.3;
      const condoEquity = downPayment + principalPaid + condoAppreciation;
      const condoNetCost = condoTotalSpent - condoEquity;

      const breakdown = `📊 Detailed Cost Breakdown (${years} Years):

⚓ **HOUSEBOAT:**
• Purchase Price: $${houseboatCost.toLocaleString()}
• Moorage Fees: $${Math.round(moorageFees * months).toLocaleString()} ($${moorageFees}/month)
• Marine Insurance: $${Math.round(houseboatInsurance * months).toLocaleString()} ($${houseboatInsurance}/month)
• Maintenance: $${Math.round(houseboatMaintenance * months).toLocaleString()} ($${houseboatMaintenance}/month)
• Utilities: $${Math.round(houseboatUtilities * months).toLocaleString()} ($${houseboatUtilities}/month)
• **Monthly Total: $${Math.round(houseboatMonthly).toLocaleString()}**
• **Total Spent: $${Math.round(houseboatTotalSpent).toLocaleString()}**
• Estimated Resale: $${Math.round(houseboatResaleValue).toLocaleString()} (20% depreciation)
• **Net Cost: $${Math.round(houseboatNetCost).toLocaleString()}**

🏢 **WATERFRONT CONDO:**
• Purchase Price: $${condoCost.toLocaleString()}
• Down Payment (20%): $${Math.round(downPayment).toLocaleString()}
• Mortgage Payments: $${Math.round(totalMortgagePaid).toLocaleString()} ($${Math.round(mortgagePayment).toLocaleString()}/month)
• Property Tax: $${Math.round(condoPropertyTax * months).toLocaleString()} ($${Math.round(condoPropertyTax).toLocaleString()}/month)
• HOA Fees: $${Math.round(hoaFees * months).toLocaleString()} ($${hoaFees}/month)
• Insurance: $${Math.round(condoInsurance * months).toLocaleString()} ($${condoInsurance}/month)
• Utilities: $${Math.round(condoUtilities * months).toLocaleString()} ($${condoUtilities}/month)
• **Monthly Total: $${Math.round(condoMonthly).toLocaleString()}**
• **Total Spent: $${Math.round(condoTotalSpent).toLocaleString()}**
• Estimated Resale: $${Math.round(condoResaleValue).toLocaleString()} (3% annual appreciation)
• Equity Built: $${Math.round(condoEquity).toLocaleString()}
• **Net Cost: $${Math.round(condoNetCost).toLocaleString()}**

💰 **DIFFERENCE:**
${houseboatNetCost < condoNetCost ? 'Houseboat saves' : 'Condo saves'}: $${Math.round(Math.abs(houseboatNetCost - condoNetCost)).toLocaleString()} in net cost
${houseboatNetCost > condoNetCost ? 'Condo builds $' + Math.round(condoEquity).toLocaleString() + ' in equity!' : ''}`;

      let recommendation = '';

      if (houseboatNetCost < condoNetCost * 0.85) {
        recommendation = `🎯 **HOUSEBOAT IS CHEAPER!** (Unique Lifestyle Bonus)

You'll save $${Math.round(condoNetCost - houseboatNetCost).toLocaleString()} over ${years} years with houseboat living.

**Choose Houseboat If:**
✅ Unique waterfront lifestyle appeals to you
✅ Lower upfront cost ($${houseboatCost.toLocaleString()} vs $${Math.round(downPayment).toLocaleString()} condo down payment)
✅ Monthly costs are manageable ($${Math.round(houseboatMonthly).toLocaleString()} vs $${Math.round(condoMonthly).toLocaleString()})
✅ Tight-knit marina community sounds appealing
✅ Nautical/boating enthusiast
✅ Handy with repairs and maintenance
✅ ${moorageFees < 800 ? 'Excellent moorage fees in your area!' : 'Acceptable moorage fees'}

**BUT Remember:**
⚠️ Houseboat DEPRECIATES ($${Math.round(houseboatDepreciation).toLocaleString()} loss over ${years} years)
⚠️ Condo builds $${Math.round(condoEquity).toLocaleString()} in equity
⚠️ Limited resale market (harder to sell)
⚠️ Specialty financing (8-12% rates, 20-30% down)
⚠️ Constant maintenance (pumps, hull, systems)
⚠️ Water damage risks and expensive marine insurance
⚠️ No land ownership (you own floating structure only)

**Financial Reality:**
While houseboat costs less out-of-pocket, you're not building wealth. Condo appreciates and builds equity—real net worth. Houseboat is lifestyle choice, not investment.

**Verdict:** Houseboat wins on cash flow and unique experience, but loses on wealth building. Choose based on lifestyle priorities vs. financial goals.`;

      } else {
        recommendation = `🎯 **WATERFRONT CONDO IS BETTER!** (Equity Builder)

While houseboat may appear cheaper initially, condo builds $${Math.round(condoEquity).toLocaleString()} in equity over ${years} years.

**Why Condo Wins:**
• Appreciates in value (+$${Math.round(condoAppreciation).toLocaleString()} over ${years} years)
• Builds equity ($${Math.round(condoEquity).toLocaleString()} total)
• Traditional financing (lower rates, easier qualification)
• Easier resale market
• More stable structure (less maintenance drama)
• Land ownership (appreciates separately)
• ${hoaFees < 700 ? 'Reasonable HOA fees!' : 'HOA handles exterior maintenance'}

**Houseboat Advantages:**
✅ Lower purchase price ($${houseboatCost.toLocaleString()} vs $${condoCost.toLocaleString()})
✅ Unique waterfront lifestyle
✅ No property tax in some jurisdictions
✅ Tight-knit marina community
✅ ${moorageFees < 800 ? 'Good moorage fees ($' + moorageFees + '/month)' : 'High moorage fees offset savings'}

**Monthly Cost Comparison:**
• Houseboat: $${Math.round(houseboatMonthly).toLocaleString()}/month
• Condo: $${Math.round(condoMonthly).toLocaleString()}/month
• Difference: ${Math.round(condoMonthly) > Math.round(houseboatMonthly) ? '$' + Math.round(condoMonthly - houseboatMonthly).toLocaleString() + ' more for condo' : '$' + Math.round(houseboatMonthly - condoMonthly).toLocaleString() + ' less for condo'}

**Financial Analysis:**
${houseboatNetCost < condoNetCost ? 
  'Houseboat costs less out-of-pocket ($' + Math.round(condoNetCost - houseboatNetCost).toLocaleString() + ' savings) BUT condo builds $' + Math.round(condoEquity).toLocaleString() + ' in equity. Real winner: CONDO (net worth increase).' :
  'Condo costs less AND builds $' + Math.round(condoEquity).toLocaleString() + ' in equity. Clear winner financially.'}

**Verdict:** Condo is better long-term investment. You're building wealth ($${Math.round(condoEquity / years).toLocaleString()}/year equity), not just spending money. Houseboat is lifestyle choice for those prioritizing uniqueness over appreciation.`;
      }

      return [
        { label: 'Houseboat Total Cost', value: Math.round(houseboatNetCost), isCurrency: true },
        { label: 'Condo Total Cost', value: Math.round(condoNetCost), isCurrency: true },
        { label: 'Cost Breakdown', value: breakdown, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
