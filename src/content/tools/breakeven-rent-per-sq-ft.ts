import { CalculatorContent } from '@/types';

export const BREAKEVEN_RENT_PER_SQ_FT_CONTENT: CalculatorContent = {
  title: 'Breakeven Rent Per Sq. Ft. Calculator',
  description: 'Calculate the minimum rent per square foot needed to achieve breakeven or target cash flow',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'breakeven-rent-per-sq-ft',
  article: {
    title: "Understanding Breakeven Rent Per Square Foot",
    content: `
    <h2>Understanding Breakeven Rent Per Square Foot</h2>
    <p>Breakeven rent per square foot is the minimum rental rate your property must achieve to cover all operating expenses and debt service. This metric is essential for evaluating whether current market rents can support your investment, and for setting appropriate rental rates for commercial and residential properties.</p>
    
    <h3>What is Breakeven Rent?</h3>
    <p>Breakeven rent is calculated as:</p>
    <p><strong>Breakeven Rent per SF = (Operating Expenses + Debt Service) ÷ (Rentable Square Feet × 12 months)</strong></p>
    <p>This gives you the monthly rent per square foot needed to achieve zero cash flow.</p>
    
    <h3>Why Calculate Breakeven Rent Per Sq. Ft.?</h3>
    <ul>
      <li><strong>Feasibility Analysis:</strong> Determine if market rents can support your acquisition price</li>
      <li><strong>Pricing Strategy:</strong> Set competitive rents that ensure profitability</li>
      <li><strong>Renovation Decisions:</strong> Assess whether improvements can push rents above breakeven</li>
      <li><strong>Negotiation Leverage:</strong> Use gap between market and breakeven rent to negotiate price</li>
      <li><strong>Development Planning:</strong> Evaluate if new construction pencils out at current rental rates</li>
    </ul>
    
    <h3>Market Rent vs. Breakeven Rent</h3>
    <p>The relationship between market rent and breakeven rent determines investment viability:</p>
    <ul>
      <li><strong>Market Rent > Breakeven Rent:</strong> Positive cash flow opportunity</li>
      <li><strong>Market Rent = Breakeven Rent:</strong> Break-even property (risky)</li>
      <li><strong>Market Rent < Breakeven Rent:</strong> Negative cash flow (avoid unless speculating on appreciation)</li>
    </ul>
    
    <h3>Typical Market Rents by Property Type (2024)</h3>
    <ul>
      <li><strong>Class A Office:</strong> $28-$45/SF/year ($2.33-$3.75/SF/month)</li>
      <li><strong>Class A Multifamily:</strong> $24-$36/SF/year ($2.00-$3.00/SF/month)</li>
      <li><strong>Retail (Neighborhood Center):</strong> $18-$30/SF/year ($1.50-$2.50/SF/month)</li>
      <li><strong>Industrial/Warehouse:</strong> $6-$12/SF/year ($0.50-$1.00/SF/month)</li>
    </ul>
    
    <h3>Components of Breakeven Calculation</h3>
    <p><strong>Operating Expenses Include:</strong></p>
    <ul>
      <li>Property taxes</li>
      <li>Insurance</li>
      <li>Utilities (if owner-paid)</li>
      <li>Maintenance and repairs</li>
      <li>Property management fees</li>
      <li>HOA or CAM charges</li>
    </ul>
    <p><strong>Debt Service:</strong> Annual principal and interest payments on mortgages</p>
    
    <h3>Using Breakeven Rent for Acquisition Analysis</h3>
    <p>Before purchasing, calculate:</p>
    <ol>
      <li>Breakeven rent at your offering price</li>
      <li>Compare to current market rents in the area</li>
      <li>Calculate margin: (Market Rent - Breakeven Rent) ÷ Breakeven Rent</li>
      <li>Aim for at least 15-25% margin for safety</li>
    </ol>
    
    <h3>Example Analysis</h3>
    <p>Property: 10,000 SF warehouse</p>
    <p>Annual Costs: $120,000 (opex + debt service)</p>
    <p>Breakeven Rent: $120,000 ÷ 10,000 SF = $12/SF/year or $1.00/SF/month</p>
    <p>Market Rent: $1.25/SF/month</p>
    <p>Margin: 25% above breakeven - Good investment</p>
    
    <h3>Strategies to Reduce Breakeven Rent</h3>
    <ul>
      <li><strong>Larger Down Payment:</strong> Reduces debt service, lowering breakeven</li>
      <li><strong>Negotiate Purchase Price:</strong> Lower price = lower debt service</li>
      <li><strong>Refinance at Lower Rate:</strong> Reduces monthly mortgage payments</li>
      <li><strong>Reduce Operating Expenses:</strong> Appeal tax assessments, shop insurance, efficient management</li>
      <li><strong>Increase Rentable Area:</strong> Convert unused space to income-producing units</li>
    </ul>
    
    <h3>Red Flags</h3>
    <ul>
      <li>Breakeven rent exceeds market rent by >10%</li>
      <li>Seller's pro forma uses above-market rents</li>
      <li>Operating expense projections seem too low</li>
      <li>Rent growth assumptions required to reach breakeven</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "operatingExpenses",
        label: "Annual Operating Expenses ($)",
        type: "number",
        placeholder: "36000",
        defaultValue: "36000",
      },
      {
        name: "debtService",
        label: "Annual Debt Service ($)",
        type: "number",
        placeholder: "48000",
        defaultValue: "48000",
      },
      {
        name: "squareFeet",
        label: "Rentable Square Feet",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "marketRent",
        label: "Current Market Rent ($/SF/month)",
        type: "number",
        placeholder: "2.00",
        defaultValue: "2.00",
      },
    ],
    results: [
      { label: "Breakeven Rent ($/SF/month)", isCurrency: false },
      { label: "Breakeven Rent ($/SF/year)", isCurrency: false },
      { label: "Total Annual Breakeven Rent", isCurrency: true },
      { label: "Market Rent ($/SF/year)", isCurrency: false },
      { label: "Margin Above/Below Breakeven", isCurrency: false },
      { label: "Annual Cash Flow at Market Rent", isCurrency: true },
      { label: "Investment Viability", isCurrency: false },
    ],
    calculate: (data: any) => {
      const opex = Number(data.operatingExpenses) || 0;
      const debtService = Number(data.debtService) || 0;
      const sqft = Number(data.squareFeet) || 1;
      const marketRent = Number(data.marketRent) || 0;
      
      const totalCosts = opex + debtService;
      const breakevenRentPerSFYear = totalCosts / sqft;
      const breakevenRentPerSFMonth = breakevenRentPerSFYear / 12;
      const marketRentYear = marketRent * 12;
      
      const margin = ((marketRent - breakevenRentPerSFMonth) / breakevenRentPerSFMonth) * 100;
      const annualCashFlow = (marketRent * 12 * sqft) - totalCosts;
      
      let viability = "";
      if (margin > 25) {
        viability = "✅ Excellent - Strong Cash Flow";
      } else if (margin > 15) {
        viability = "✅ Good - Adequate Margin";
      } else if (margin > 0) {
        viability = "⚠️ Marginal - Thin Margin";
      } else {
        viability = "❌ Negative - Below Breakeven";
      }

      return [
        { label: "Breakeven Rent ($/SF/month)", value: `$${breakevenRentPerSFMonth.toFixed(2)}`, isCurrency: false },
        { label: "Breakeven Rent ($/SF/year)", value: `$${breakevenRentPerSFYear.toFixed(2)}`, isCurrency: false },
        { label: "Total Annual Breakeven Rent", value: totalCosts.toFixed(2), isCurrency: true },
        { label: "Market Rent ($/SF/year)", value: `$${marketRentYear.toFixed(2)}`, isCurrency: false },
        { label: "Margin Above Breakeven", value: `${margin.toFixed(1)}%`, isCurrency: false },
        { label: "Annual Cash Flow at Market Rent", value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: "Investment Viability", value: viability, isCurrency: false },
      ];
    },
  },
};
