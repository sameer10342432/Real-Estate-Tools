import { CalculatorContent } from '@/types';

export const STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Student Housing Investment Calculator',
  description: 'Calculate returns on student housing investments including rental income, occupancy rates, turnover costs, and cash flow for properties near universities.',
  slug: 'student-housing-investment-calculator',
  icon: '🎓',
  category: 'Investment Analysis',
  article: {
    title: 'Student Housing Investment: Complete Guide to University Rental Property Returns',
    content: `
    <h2>The Student Housing Market Opportunity</h2>
    <p>Student housing represents a unique and profitable real estate niche, offering higher rental yields, consistent demand, and recession resistance compared to conventional residential rentals. With over 20 million college students in the US and limited on-campus housing, off-campus student rentals provide essential accommodation and attractive investment returns.</p>
    
    <h3>Why Invest in Student Housing?</h3>
    <ul>
      <li><strong>Higher Rents Per Bedroom:</strong> Students often pay $600-$1,200+ per bedroom, exceeding family rentals</li>
      <li><strong>Consistent Demand:</strong> Universities maintain stable enrollment with predictable housing needs</li>
      <li><strong>Multiple Income Streams:</strong> Rent by the bedroom for maximum revenue</li>
      <li><strong>Parental Guarantees:</strong> Parents often co-sign, reducing payment risk</li>
      <li><strong>Recession Resistant:</strong> Education enrollment often increases during downturns</li>
      <li><strong>Appreciation Potential:</strong> University towns typically experience steady property value growth</li>
    </ul>

    <h3>Types of Student Housing Properties</h3>
    <p><strong>Single-Family Homes (3-5 Bedrooms):</strong></p>
    <ul>
      <li>$200,000-$500,000 typical price range</li>
      <li>Rent to group of students sharing house</li>
      <li>Lower management intensity</li>
      <li>Best near major universities</li>
    </ul>
    <p><strong>Multi-Family Buildings (Duplexes, Triplexes, Quads):</strong></p>
    <ul>
      <li>Multiple rental units on single lot</li>
      <li>Better cash flow and economies of scale</li>
      <li>More management intensive</li>
      <li>Higher initial investment</li>
    </ul>
    <p><strong>Purpose-Built Student Housing (PBSH):</strong></p>
    <ul>
      <li>Large apartment complexes designed for students</li>
      <li>Amenities: pool, gym, study rooms, parking</li>
      <li>Institutional-grade investment ($5M-$100M+)</li>
      <li>Professional management required</li>
    </ul>
    <p><strong>Condo/Apartment Units:</strong></p>
    <ul>
      <li>Individual units in larger buildings</li>
      <li>Lower entry point ($100,000-$300,000)</li>
      <li>HOA fees reduce cash flow</li>
      <li>Good for first-time investors</li>
    </ul>

    <h3>Location Selection Criteria</h3>
    <p>Successful student housing depends heavily on location:</p>
    <ul>
      <li><strong>Walking Distance:</strong> Within 1 mile of campus or on bus route</li>
      <li><strong>University Size:</strong> Target schools with 10,000+ enrollment</li>
      <li><strong>Limited On-Campus Housing:</strong> Insufficient dorms create off-campus demand</li>
      <li><strong>Growth Trends:</strong> Increasing enrollment signals expanding demand</li>
      <li><strong>Neighborhood Safety:</strong> Parents prioritize secure areas</li>
      <li><strong>Amenities Nearby:</strong> Groceries, restaurants, entertainment</li>
      <li><strong>Public Transportation:</strong> Bus routes to campus crucial</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your student housing investment parameters:</p>
    <ul>
      <li><strong>Purchase Price:</strong> Total property acquisition cost</li>
      <li><strong>Down Payment:</strong> Initial equity investment</li>
      <li><strong>Number of Bedrooms:</strong> Rentable bedrooms in property</li>
      <li><strong>Rent Per Bedroom:</strong> Monthly rent charged per bedroom</li>
      <li><strong>Occupancy Rate:</strong> Percentage of time property is rented (85-95% typical)</li>
      <li><strong>Annual Turnover Costs:</strong> Cleaning, repairs, and make-ready expenses</li>
      <li><strong>Monthly Operating Expenses:</strong> Utilities, maintenance, management</li>
      <li><strong>Property Appreciation:</strong> Expected annual value increase</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Gross Annual Rent:</strong> Maximum potential rental income</li>
      <li><strong>Effective Gross Income:</strong> Actual income after vacancy</li>
      <li><strong>Net Operating Income (NOI):</strong> Income minus operating expenses</li>
      <li><strong>Cash Flow:</strong> NOI minus debt service</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual cash flow / initial investment</li>
      <li><strong>Cap Rate:</strong> NOI / property value</li>
      <li><strong>Total ROI:</strong> Including appreciation over holding period</li>
    </ul>

    <h3>Rental Income Strategies</h3>
    <p><strong>Individual Bedroom Leases:</strong></p>
    <ul>
      <li>Rent each bedroom separately on individual leases</li>
      <li>Maximum income potential ($3,600 for 4-bed vs. $2,400 as whole)</li>
      <li>Reduces vacancy risk - empty rooms still have paying tenants</li>
      <li>More management intensive with multiple leases</li>
    </ul>
    <p><strong>Joint Lease to Group:</strong></p>
    <ul>
      <li>Single lease with all students as co-tenants</li>
      <li>Simpler management and single security deposit</li>
      <li>Lower rent than per-bedroom pricing</li>
      <li>Full vacancy if group leaves together</li>
    </ul>

    <h3>Lease Structures and Timing</h3>
    <ul>
      <li><strong>Academic Year Lease:</strong> 10-month lease (August-May) common</li>
      <li><strong>Full Year Lease:</strong> 12-month lease provides summer income</li>
      <li><strong>Semester Leases:</strong> 4-5 month terms for maximum flexibility</li>
      <li><strong>Lease Timing:</strong> Market property in February-April for August move-in</li>
      <li><strong>Renewals:</strong> Offer early renewal discounts to reduce turnover</li>
      <li><strong>Summer Sublets:</strong> Allow subletting for summer sessions</li>
    </ul>

    <h3>Operating Expenses</h3>
    <p>Typical annual costs for student housing:</p>
    <ul>
      <li><strong>Property Taxes:</strong> 1-2% of property value annually</li>
      <li><strong>Insurance:</strong> $1,000-$2,500 per year (higher for student rentals)</li>
      <li><strong>Maintenance and Repairs:</strong> 10-15% of gross rent (students are hard on properties)</li>
      <li><strong>Property Management:</strong> 8-12% of gross rent if professionally managed</li>
      <li><strong>Utilities:</strong> $150-$400/month if included (many landlords charge tenants)</li>
      <li><strong>Lawn Care/Snow Removal:</strong> $100-$300/month</li>
      <li><strong>Turnover Costs:</strong> $500-$2,000 per bedroom annually</li>
      <li><strong>HOA Fees:</strong> $100-$400/month for condos</li>
    </ul>

    <h3>Turnover and Make-Ready Costs</h3>
    <p>Student tenants require more frequent and intensive turnover:</p>
    <ul>
      <li><strong>Deep Cleaning:</strong> $200-$500 per turnover</li>
      <li><strong>Painting:</strong> $500-$1,500 annually (students damage walls)</li>
      <li><strong>Carpet Cleaning/Replacement:</strong> $300-$2,000 every 2-3 years</li>
      <li><strong>Appliance Replacement:</strong> Budget 10-year replacement cycle</li>
      <li><strong>Furniture (if Furnished):</strong> $3,000-$8,000 initially, $500-$1,500 annual replacement</li>
      <li><strong>Minor Repairs:</strong> Doors, locks, fixtures damaged frequently</li>
    </ul>

    <h3>Amenities and Features Students Value</h3>
    <ul>
      <li><strong>Fast Internet:</strong> Essential - include high-speed WiFi</li>
      <li><strong>In-Unit Laundry:</strong> Major selling point, increases rent $50-100/month</li>
      <li><strong>Parking:</strong> 1 space per bedroom ideal ($50-$100/month premium)</li>
      <li><strong>Updated Kitchen:</strong> New appliances and modern finishes</li>
      <li><strong>Private Bathrooms:</strong> En-suite bathrooms justify premium rents</li>
      <li><strong>Furnished Units:</strong> Can charge 10-20% premium but more maintenance</li>
      <li><strong>Central Air:</strong> Required in most markets</li>
      <li><strong>Study Spaces:</strong> Desk in each bedroom</li>
      <li><strong>Security:</strong> Secure locks, good lighting, safe neighborhood</li>
    </ul>

    <h3>Property Management Considerations</h3>
    <ul>
      <li><strong>Self-Management:</strong> Save 8-12% management fee but time-intensive</li>
      <li><strong>Professional Management:</strong> Worth cost for multiple properties or out-of-state investors</li>
      <li><strong>Maintenance Response:</strong> Students expect quick response to issues</li>
      <li><strong>Noise and Parties:</strong> Set clear rules and enforce strictly</li>
      <li><strong>Parent Communication:</strong> Many parents want regular updates</li>
      <li><strong>Online Rent Payment:</strong> Essential for millennial/Gen-Z tenants</li>
      <li><strong>24/7 Emergency Line:</strong> Required for late-night issues</li>
    </ul>

    <h3>Tenant Screening and Selection</h3>
    <ul>
      <li><strong>Credit Checks:</strong> Many students have limited credit - consider guarantors</li>
      <li><strong>Parental Guarantees:</strong> Require parents to co-sign lease</li>
      <li><strong>Income Verification:</strong> Student loans, part-time jobs, or parental support</li>
      <li><strong>Previous Rental History:</strong> Contact prior landlords if available</li>
      <li><strong>University Verification:</strong> Confirm enrollment status</li>
      <li><strong>Security Deposits:</strong> 1-2 months rent, higher for students without history</li>
      <li><strong>Group Dynamics:</strong> Interview entire group together</li>
    </ul>

    <h3>Risk Mitigation Strategies</h3>
    <ul>
      <li><strong>Require Parental Guarantees:</strong> Parents as co-signers ensure payment</li>
      <li><strong>Adequate Insurance:</strong> High liability coverage for parties and injuries</li>
      <li><strong>Regular Inspections:</strong> Quarterly walk-throughs to catch problems early</li>
      <li><strong>Durable Materials:</strong> Commercial-grade carpet, solid doors, quality fixtures</li>
      <li><strong>Clear Lease Terms:</strong> Party restrictions, guest policies, maintenance responsibilities</li>
      <li><strong>Security Deposit Structure:</strong> Hold sufficient funds for damages</li>
      <li><strong>Noise Violations:</strong> Three-strike policy with lease termination</li>
    </ul>

    <h3>Tax Benefits of Student Housing</h3>
    <ul>
      <li><strong>Depreciation:</strong> Deduct 1/27.5 of building value annually</li>
      <li><strong>Operating Expense Deductions:</strong> All ordinary and necessary expenses</li>
      <li><strong>Mortgage Interest:</strong> Fully deductible on investment property</li>
      <li><strong>Travel Deductions:</strong> Mileage and trips to manage property</li>
      <li><strong>Professional Fees:</strong> Accountant, attorney, property manager</li>
      <li><strong>Section 1031 Exchange:</strong> Defer capital gains when upgrading to larger properties</li>
      <li><strong>Bonus Depreciation:</strong> Accelerated depreciation on furniture and appliances</li>
    </ul>

    <h3>Financing Student Housing</h3>
    <ul>
      <li><strong>Conventional Mortgages:</strong> 20-25% down, rates 0.5-1% higher than primary residence</li>
      <li><strong>FHA/VA Loans:</strong> Owner-occupied house hacking (3.5% down, live in one bedroom)</li>
      <li><strong>Commercial Loans:</strong> 5+ unit buildings require commercial financing</li>
      <li><strong>Portfolio Loans:</strong> Local banks for multiple properties</li>
      <li><strong>Cash-Out Refinance:</strong> Extract equity to buy more properties</li>
      <li><strong>Seller Financing:</strong> Negotiate owner carry for purchase</li>
    </ul>

    <h3>Market Cycles and Timing</h3>
    <ul>
      <li><strong>Enrollment Trends:</strong> Declining enrollment reduces demand</li>
      <li><strong>New Supply:</strong> Oversupply of PBSH can pressure rents</li>
      <li><strong>Economic Cycles:</strong> Recessions often increase education enrollment</li>
      <li><strong>Seasonal Patterns:</strong> Rent in spring, turnover in summer</li>
      <li><strong>University Changes:</strong> Program cuts or expansion affect demand</li>
    </ul>

    <h3>Exit Strategies</h3>
    <ul>
      <li><strong>Sell to Another Investor:</strong> Market to student housing specialists</li>
      <li><strong>Sell to Owner-Occupant:</strong> After students, convert to family rental or sale</li>
      <li><strong>1031 Exchange:</strong> Roll equity into larger student housing portfolio</li>
      <li><strong>Convert to Long-Term Rental:</strong> Rent to families if student demand declines</li>
      <li><strong>Hold for Appreciation:</strong> University towns often appreciate steadily</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Buying too far from campus (over 1.5 miles without transit)</li>
      <li>Underestimating turnover and damage costs</li>
      <li>Failing to require parental guarantees</li>
      <li>Over-furnishing with expensive items that get damaged</li>
      <li>Not setting clear party and noise rules</li>
      <li>Inadequate insurance coverage</li>
      <li>Ignoring local ordinances on occupancy limits</li>
      <li>Not screening tenants carefully despite parental co-signers</li>
    </ul>

    <h3>Best Practices for Success</h3>
    <ul>
      <li>Target large state universities (20,000+ students) with housing shortages</li>
      <li>Focus on walkable locations or bus routes to campus</li>
      <li>Price competitively and market early (February-April)</li>
      <li>Maintain property well - students pay premium for nice housing</li>
      <li>Build relationships with university housing offices and student groups</li>
      <li>Use online marketing - Facebook, Instagram, university forums</li>
      <li>Consider professional photography for listings</li>
      <li>Respond quickly to inquiries - students choose fast</li>
      <li>Host open houses in peak leasing season</li>
      <li>Offer incentives for early lease signing</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'bedrooms',
        label: 'Number of Bedrooms',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'rentPerBedroom',
        label: 'Monthly Rent Per Bedroom',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'occupancyRate',
        label: 'Occupancy Rate (%)',
        type: 'number',
        defaultValue: 90,
      },
      {
        name: 'annualTurnover',
        label: 'Annual Turnover Costs',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Operating Expenses',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'appreciation',
        label: 'Annual Appreciation Rate (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'Monthly Mortgage Payment', isCurrency: true },
      { label: 'Gross Annual Rent', isCurrency: true },
      { label: 'Effective Gross Income', isCurrency: true },
      { label: 'Annual Operating Expenses', isCurrency: true },
      { label: 'Net Operating Income (NOI)', isCurrency: true },
      { label: 'Annual Cash Flow', isCurrency: true },
      { label: 'Cash-on-Cash Return', isPercentage: true },
      { label: 'Cap Rate', isPercentage: true },
      { label: 'Property Value After Appreciation', isCurrency: true },
      { label: 'Total Return', isCurrency: true },
      { label: 'Total ROI', isPercentage: true },
    ],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, bedrooms, rentPerBedroom, occupancyRate, annualTurnover, monthlyExpenses, appreciation, holdingPeriod } = values;
      
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = loanTerm * 12;
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const grossAnnualRent = bedrooms * rentPerBedroom * 12;
      const effectiveGrossIncome = grossAnnualRent * (occupancyRate / 100);
      const annualOperatingExpenses = (monthlyExpenses * 12) + annualTurnover;
      const noi = effectiveGrossIncome - annualOperatingExpenses;
      const annualDebtService = monthlyMortgage * 12;
      const annualCashFlow = noi - annualDebtService;
      const cashOnCash = (annualCashFlow / downPayment) * 100;
      const capRate = (noi / purchasePrice) * 100;
      
      const futureValue = purchasePrice * Math.pow(1 + appreciation / 100, holdingPeriod);
      const totalCashFlow = annualCashFlow * holdingPeriod;
      const equity = futureValue - loanAmount;
      const totalReturn = totalCashFlow + (equity - downPayment);
      const totalROI = (totalReturn / downPayment) * 100;

      return [
        { label: 'Monthly Mortgage Payment', value: monthlyMortgage.toFixed(2), isCurrency: true },
        { label: 'Gross Annual Rent', value: grossAnnualRent.toFixed(2), isCurrency: true },
        { label: 'Effective Gross Income', value: effectiveGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Operating Expenses', value: annualOperatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Return', value: cashOnCash.toFixed(2), isPercentage: true },
        { label: 'Cap Rate', value: capRate.toFixed(2), isPercentage: true },
        { label: 'Property Value After Appreciation', value: futureValue.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Total ROI', value: totalROI.toFixed(2), isPercentage: true },
      ];
    },
  },
};
