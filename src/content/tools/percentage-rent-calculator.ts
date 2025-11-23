import { CalculatorContent } from '@/types';

export const PERCENTAGE_RENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Percentage Rent Calculator (Retail)',
  description: 'Calculate percentage rent for retail leases. Determine breakpoint, overage rent, and total rent based on gross sales performance.',
  slug: 'percentage-rent-calculator',
  icon: '💵',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding Percentage Rent in Retail Leases',
    content: `
    <h2>What is Percentage Rent?</h2>
    <p>Percentage rent is a lease structure common in retail properties where the tenant pays a base rent plus an additional amount based on a percentage of their gross sales above a specified threshold. This aligns landlord and tenant interests, as both benefit from the store's success.</p>
    
    <h3>How Percentage Rent Works</h3>
    <p>The typical structure includes:</p>
    <ul>
      <li><strong>Base Rent:</strong> Minimum fixed rent paid regardless of sales</li>
      <li><strong>Natural Breakpoint:</strong> Sales level where percentage rent kicks in</li>
      <li><strong>Percentage Rate:</strong> % of gross sales above breakpoint paid as additional rent</li>
      <li><strong>Overage Rent:</strong> The additional rent paid beyond base rent</li>
    </ul>

    <h3>The Breakpoint Formula</h3>
    <p><strong>Natural Breakpoint = Base Rent ÷ Percentage Rate</strong></p>
    <p>Example: $60,000 base rent ÷ 6% = $1,000,000 breakpoint</p>
    <p>Once sales exceed $1M, tenant pays 6% of sales above that amount.</p>

    <h3>Types of Percentage Rent Structures</h3>
    <ul>
      <li><strong>Natural Breakpoint:</strong> Calculated from base rent and percentage rate</li>
      <li><strong>Artificial Breakpoint:</strong> Set at specific sales amount (negotiated)</li>
      <li><strong>Percentage Rent Only:</strong> No base rent, only % of sales (rare)</li>
      <li><strong>Sliding Scale:</strong> Percentage decreases as sales increase</li>
    </ul>

    <h3>Typical Percentage Rates by Retail Type</h3>
    <ul>
      <li><strong>Grocery Stores:</strong> 1-2% (low margin, high volume)</li>
      <li><strong>Discount/Big Box:</strong> 1.5-3%</li>
      <li><strong>Department Stores:</strong> 2-4%</li>
      <li><strong>Apparel/Clothing:</strong> 5-7%</li>
      <li><strong>Jewelry:</strong> 6-10% (high margin)</li>
      <li><strong>Restaurants (Quick Service):</strong> 6-8%</li>
      <li><strong>Restaurants (Full Service):</strong> 5-7%</li>
      <li><strong>Specialty Retail:</strong> 6-8%</li>
      <li><strong>Service Businesses:</strong> 8-12%</li>
    </ul>

    <h3>Gross Sales Definition</h3>
    <p>Leases must clearly define "gross sales." Typically includes:</p>
    <ul>
      <li><strong>Included:</strong> All revenue from merchandise and services sold at the location</li>
      <li><strong>Excluded (Usually):</strong>
        <ul>
          <li>Sales taxes collected</li>
          <li>Returns and refunds</li>
          <li>Employee discounts</li>
          <li>Online sales (unless picked up at store)</li>
          <li>Wholesale transactions</li>
          <li>Gift card sales (until redeemed)</li>
        </ul>
      </li>
    </ul>

    <h3>Reporting Requirements</h3>
    <ul>
      <li><strong>Monthly Reports:</strong> Gross sales statement due within 15-30 days</li>
      <li><strong>Annual Certification:</strong> CPA-certified annual sales report</li>
      <li><strong>Audit Rights:</strong> Landlord can audit books (usually 1-2 times per year)</li>
      <li><strong>POS Integration:</strong> Some leases require direct system access</li>
    </ul>

    <h3>Advantages for Landlords</h3>
    <ul>
      <li>Participation in tenant's upside</li>
      <li>Market-rate adjustment without lease renegotiation</li>
      <li>Motivation to maintain property quality</li>
      <li>Higher income from successful tenants</li>
      <li>Better alignment of interests</li>
    </ul>

    <h3>Advantages for Tenants</h3>
    <ul>
      <li>Lower base rent than pure fixed lease</li>
      <li>Rent scales with performance</li>
      <li>Protection during slow periods</li>
      <li>More affordable entry into prime locations</li>
      <li>Landlord invested in tenant success</li>
    </ul>

    <h3>Negotiation Strategies</h3>
    <ul>
      <li><strong>Breakpoint Negotiation:</strong> Higher breakpoint = later onset of percentage rent</li>
      <li><strong>Rate Negotiation:</strong> Industry standards provide benchmarks</li>
      <li><strong>Graduated Rates:</strong> Lower % as sales increase (volume discounts)</li>
      <li><strong>Caps on Total Rent:</strong> Maximum rent regardless of sales</li>
      <li><strong>Exclusions:</strong> Clearly define what's excluded from gross sales</li>
    </ul>

    <h3>Common Pitfalls</h3>
    <ul>
      <li><strong>Vague Sales Definition:</strong> Leads to disputes over what counts</li>
      <li><strong>No Audit Rights Limit:</strong> Excessive landlord audits</li>
      <li><strong>Online Sales Disputes:</strong> How to handle e-commerce</li>
      <li><strong>Breakpoint Too Low:</strong> Percentage rent kicks in too early</li>
      <li><strong>No Radius Clause Balance:</strong> Over-restrictive non-compete</li>
    </ul>

    <h3>Modern Trends</h3>
    <ul>
      <li>Declining use of percentage rent (more common in malls)</li>
      <li>E-commerce impact on gross sales definition</li>
      <li>Pop-up stores using percentage-only leases</li>
      <li>Technology enabling real-time sales tracking</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate your percentage rent and total occupancy cost:</p>
    <ul>
      <li><strong>Annual Base Rent:</strong> Minimum guaranteed rent</li>
      <li><strong>Percentage Rate:</strong> % of sales above breakpoint</li>
      <li><strong>Annual Gross Sales:</strong> Your expected or actual sales</li>
      <li><strong>Breakpoint Override:</strong> Optional artificial breakpoint</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'baseRent',
        label: 'Annual Base Rent ($)',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'percentageRate',
        label: 'Percentage Rent Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'annualGrossSales',
        label: 'Annual Gross Sales ($)',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'artificialBreakpoint',
        label: 'Artificial Breakpoint (Optional) ($)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Natural Breakpoint', isCurrency: true },
      { label: 'Actual Breakpoint Used', isCurrency: true },
      { label: 'Sales Above Breakpoint', isCurrency: true },
      { label: 'Percentage (Overage) Rent', isCurrency: true },
      { label: 'Total Annual Rent', isCurrency: true },
      { label: 'Monthly Average Rent', isCurrency: true },
      { label: 'Effective Rent % of Sales', isCurrency: false },
    ],
    calculate: (values) => {
      const { baseRent, percentageRate, annualGrossSales, artificialBreakpoint } = values;
      
      // Calculate natural breakpoint
      const naturalBreakpoint = baseRent / (percentageRate / 100);
      
      // Use artificial breakpoint if provided, otherwise natural
      const actualBreakpoint = artificialBreakpoint > 0 ? artificialBreakpoint : naturalBreakpoint;
      
      // Calculate sales above breakpoint
      const salesAboveBreakpoint = Math.max(0, annualGrossSales - actualBreakpoint);
      
      // Calculate percentage rent (overage)
      const percentageRent = salesAboveBreakpoint * (percentageRate / 100);
      
      // Calculate total annual rent
      const totalAnnualRent = baseRent + percentageRent;
      
      // Calculate monthly average
      const monthlyRent = totalAnnualRent / 12;
      
      // Calculate effective rent as percentage of sales
      const effectiveRentPercent = annualGrossSales > 0 ? (totalAnnualRent / annualGrossSales) * 100 : 0;

      return [
        { label: 'Natural Breakpoint', value: naturalBreakpoint.toFixed(2), isCurrency: true },
        { label: 'Actual Breakpoint Used', value: actualBreakpoint.toFixed(2), isCurrency: true },
        { label: 'Sales Above Breakpoint', value: salesAboveBreakpoint.toFixed(2), isCurrency: true },
        { label: 'Percentage (Overage) Rent', value: percentageRent.toFixed(2), isCurrency: true },
        { label: 'Total Annual Rent', value: totalAnnualRent.toFixed(2), isCurrency: true },
        { label: 'Monthly Average Rent', value: monthlyRent.toFixed(2), isCurrency: true },
        { label: 'Effective Rent % of Sales', value: effectiveRentPercent.toFixed(2), isCurrency: false },
      ];
    },
  },
};
