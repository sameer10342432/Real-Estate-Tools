import { CalculatorContent } from '@/types';

export const SENIOR_LIVING_FACILITY_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Senior Living Facility ROI Calculator',
  description: 'Analyze investment returns for senior living facilities including assisted living, memory care, and independent living communities.',
  slug: 'senior-living-facility-roi-calculator',
  icon: '🏥',
  category: 'Investment Analysis',
  article: {
    title: 'Complete Guide to Senior Living Facility Investment Returns',
    content: `
    <h2>Understanding Senior Living Facility Investments</h2>
    <p>Senior living facilities represent one of the most promising sectors in commercial real estate, driven by demographic tailwinds as the baby boomer generation ages. With over 10,000 Americans turning 65 every day, the demand for quality senior housing continues to grow exponentially. This calculator helps investors analyze returns across different types of senior living properties including independent living, assisted living, memory care, and skilled nursing facilities.</p>
    
    <h3>Types of Senior Living Facilities</h3>
    <p>The senior living sector encompasses several distinct property types, each serving different care needs and generating varying revenue streams:</p>
    <ul>
      <li><strong>Independent Living Communities:</strong> Active senior housing for those 55+ who need minimal assistance. These properties typically offer amenities, activities, and optional services. Revenue is primarily from monthly rent.</li>
      <li><strong>Assisted Living Facilities (ALF):</strong> Residential care for seniors who need help with activities of daily living (ADLs) like bathing, dressing, and medication management. Higher revenue per unit due to care services.</li>
      <li><strong>Memory Care Communities:</strong> Specialized facilities for residents with Alzheimer's disease and other forms of dementia. Highest staffing ratios and security requirements, commanding premium pricing.</li>
      <li><strong>Skilled Nursing Facilities (SNF):</strong> Medical care facilities for residents requiring 24/7 nursing supervision. Often Medicare/Medicaid reimbursement-based.</li>
      <li><strong>Continuing Care Retirement Communities (CCRC):</strong> Campus-style facilities offering a continuum of care from independent living through skilled nursing on one property.</li>
    </ul>

    <h3>Key Investment Metrics for Senior Living</h3>
    <p>Senior living facilities are evaluated using specialized metrics beyond traditional commercial real estate analysis:</p>
    <ul>
      <li><strong>Occupancy Rate:</strong> The percentage of units occupied. Stabilized facilities typically operate at 85-95% occupancy. New facilities may take 18-36 months to reach stabilization.</li>
      <li><strong>Revenue Per Occupied Room (RevPOR):</strong> Average monthly revenue generated per occupied unit, including base rent and ancillary services.</li>
      <li><strong>Operating Ratio:</strong> Operating expenses divided by revenue. Senior living typically runs 60-75% operating ratios due to higher labor costs.</li>
      <li><strong>EBITDAR (Earnings Before Interest, Taxes, Depreciation, Amortization, and Rent):</strong> Key profitability metric for senior housing operations.</li>
      <li><strong>Net Operating Income (NOI) Margin:</strong> NOI divided by total revenue, showing operational efficiency after operating expenses.</li>
    </ul>

    <h3>Revenue Drivers in Senior Living</h3>
    <p>Senior living facilities generate revenue from multiple streams, creating opportunities for revenue optimization:</p>
    <ul>
      <li><strong>Base Monthly Fees:</strong> Core rent covering room, meals, housekeeping, and basic amenities. This provides stable recurring revenue.</li>
      <li><strong>Care Service Fees:</strong> Additional charges based on level of care needed (tier pricing). Can add $1,000-$4,000+ per month per resident.</li>
      <li><strong>Second-Person Fees:</strong> Additional charges when two residents share a unit, typically 40-60% of base rate.</li>
      <li><strong>Community Fees:</strong> One-time entrance fees or move-in fees, common in CCRC models. Can range from $50,000 to $500,000+.</li>
      <li><strong>Ancillary Services:</strong> A la carte services like physical therapy, salon services, transportation, pet care, and specialized activities.</li>
      <li><strong>Medical Services:</strong> Some facilities offer on-site medical services, medication management, and care coordination for additional fees.</li>
    </ul>

    <h3>Operating Expense Categories</h3>
    <p>Understanding the unique cost structure of senior living is critical for accurate return projections:</p>
    <ul>
      <li><strong>Labor Costs (40-50% of revenue):</strong> Largest expense category including caregivers, nurses, activities directors, dining staff, maintenance, and administration. Staffing ratios vary by care level.</li>
      <li><strong>Food Costs (8-12% of revenue):</strong> Three meals daily plus snacks for all residents. Requires commercial kitchen, dietary staff, and food safety compliance.</li>
      <li><strong>Utilities (5-8% of revenue):</strong> Higher than typical multifamily due to 24/7 operations, climate control needs, and commercial kitchen usage.</li>
      <li><strong>Insurance (3-6% of revenue):</strong> General liability, professional liability, workers' compensation, and property insurance. Higher risk profile than standard real estate.</li>
      <li><strong>Marketing & Sales (4-7% of revenue):</strong> Critical for maintaining occupancy. Includes sales staff, advertising, website, tours, and move-in coordinator expenses.</li>
      <li><strong>Property Taxes:</strong> Based on property value and local tax rates. May be lower than market rate due to senior housing classification in some jurisdictions.</li>
      <li><strong>Maintenance & Capital Reserves:</strong> Regular maintenance plus reserves for major capital expenditures (roof, HVAC, kitchen equipment, furniture replacement).</li>
    </ul>

    <h3>Market Analysis Considerations</h3>
    <p>Before investing in senior living, conduct thorough market analysis:</p>
    <ul>
      <li><strong>Demographics:</strong> Analyze population aged 75+ within 3-5 mile radius. This is your primary market. Also consider age 65-74 for pipeline demand.</li>
      <li><strong>Income Levels:</strong> Assess median income and wealth of seniors in the market. Private-pay senior living requires residents with $60,000-$150,000+ annual income.</li>
      <li><strong>Competitive Supply:</strong> Inventory existing facilities, planned developments, and occupancy rates. Oversupplied markets face pricing pressure and longer lease-up periods.</li>
      <li><strong>Healthcare Infrastructure:</strong> Proximity to hospitals, medical offices, and specialist care. Strong healthcare presence correlates with senior population concentration.</li>
      <li><strong>Economic Drivers:</strong> Local job market and economy. Children often relocate parents near their residence, so strong employment markets drive demand.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>This calculator helps you model senior living investment returns. Input the following data:</p>
    <ul>
      <li><strong>Property Purchase Price:</strong> Total acquisition cost including purchase price, closing costs, and any immediate capital improvements needed.</li>
      <li><strong>Total Units:</strong> Number of residential units/beds in the facility.</li>
      <li><strong>Average Monthly Rate:</strong> Average revenue per occupied unit including base rent and standard care services.</li>
      <li><strong>Occupancy Rate:</strong> Percentage of units occupied (use stabilized rate for operational facilities, projected stabilized rate for new developments).</li>
      <li><strong>Operating Expense Ratio:</strong> Operating expenses as percentage of gross revenue (typically 60-75% for senior living).</li>
      <li><strong>Annual Expense Growth:</strong> Expected annual increase in operating costs (wages typically drive this, trending 3-5%).</li>
      <li><strong>Annual Revenue Growth:</strong> Expected annual rate increase and occupancy improvement (typically 2-4% annually).</li>
      <li><strong>Down Payment:</strong> Equity investment as percentage of purchase price.</li>
      <li><strong>Interest Rate:</strong> Annual loan interest rate for debt financing.</li>
      <li><strong>Loan Term:</strong> Amortization period in years (typically 20-30 years for senior housing loans).</li>
      <li><strong>Holding Period:</strong> Expected investment horizon before sale.</li>
      <li><strong>Exit Cap Rate:</strong> Expected capitalization rate at sale (market-driven).</li>
    </ul>

    <h3>Key Performance Indicators</h3>
    <p>The calculator provides critical metrics for investment decision-making:</p>
    <ul>
      <li><strong>Gross Potential Revenue:</strong> Maximum revenue if fully occupied at current rates.</li>
      <li><strong>Effective Gross Income (EGI):</strong> Actual revenue after vacancy loss and collection losses.</li>
      <li><strong>Net Operating Income (NOI):</strong> Revenue minus operating expenses before debt service.</li>
      <li><strong>Cash Flow After Debt Service:</strong> NOI minus mortgage payments (actual cash to investors).</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual cash flow divided by initial equity investment.</li>
      <li><strong>Capitalization Rate (Cap Rate):</strong> NOI divided by purchase price, showing operational yield.</li>
      <li><strong>Debt Service Coverage Ratio (DSCR):</strong> NOI divided by annual debt service. Lenders typically require 1.25x-1.35x minimum.</li>
      <li><strong>Internal Rate of Return (IRR):</strong> Time-weighted return including cash flows and appreciation over holding period.</li>
      <li><strong>Equity Multiple:</strong> Total cash returned divided by initial investment (2.0x means doubling your money).</li>
    </ul>

    <h3>Financing Senior Living Properties</h3>
    <p>Senior living facilities have unique financing considerations:</p>
    <ul>
      <li><strong>HUD Financing:</strong> FHA-insured loans through HUD programs offer favorable terms (85-90% LTV, 35-40 year amortization, non-recourse). Excellent for experienced operators.</li>
      <li><strong>Fannie Mae & Freddie Mac:</strong> Agency lenders offer competitive rates for stabilized properties with strong operating history.</li>
      <li><strong>Commercial Banks:</strong> Shorter-term financing (5-10 years) with moderate leverage (70-75% LTV). Faster closing but may require recourse.</li>
      <li><strong>CMBS Loans:</strong> Securitized commercial mortgage-backed securities offering fixed-rate, non-recourse debt. Best for large, stabilized portfolios.</li>
      <li><strong>Life Insurance Companies:</strong> Conservative long-term lenders favoring high-quality assets in strong markets.</li>
    </ul>

    <h3>Risk Factors to Consider</h3>
    <ul>
      <li><strong>Regulatory Risk:</strong> Senior living is heavily regulated at federal, state, and local levels. Changes in licensing, care requirements, or staffing mandates can increase costs.</li>
      <li><strong>Labor Risk:</strong> Tight labor markets for caregivers, nurses, and healthcare workers drive wage inflation. High turnover rates require continuous recruitment and training.</li>
      <li><strong>Reimbursement Risk:</strong> For facilities accepting Medicare/Medicaid, reimbursement rate changes can significantly impact revenue.</li>
      <li><strong>Competition Risk:</strong> New supply can quickly impact occupancy and pricing power. Monitor competitive pipeline carefully.</li>
      <li><strong>Lease-Up Risk:</strong> New facilities typically take 18-36 months to stabilize. Factor in negative cash flow during this period.</li>
      <li><strong>Reputation Risk:</strong> Quality of care issues can damage reputation and reduce occupancy. Strong operations and compliance are critical.</li>
      <li><strong>Economic Sensitivity:</strong> While less cyclical than other CRE sectors, severe recessions can impact adult children's ability to support parents' housing costs.</li>
    </ul>

    <h3>Value-Add Opportunities</h3>
    <p>Investors can enhance returns through strategic improvements:</p>
    <ul>
      <li><strong>Occupancy Improvement:</strong> Marketing, sales process optimization, and reputation management to increase occupancy from below-market to 90-95%.</li>
      <li><strong>Rate Optimization:</strong> Implementing tier pricing for care levels, adding ancillary services, and optimizing rate structure to match market positioning.</li>
      <li><strong>Operational Efficiency:</strong> Technology implementation (EMR systems, staff scheduling), supply chain management, and process improvements to reduce operating ratios.</li>
      <li><strong>Repositioning:</strong> Physical improvements (renovating units, updating common areas, adding amenities) to command higher rates and attract more residents.</li>
      <li><strong>License/Certification Additions:</strong> Adding memory care license, assisted living beds, or skilled nursing capacity to serve residents along the care continuum.</li>
    </ul>

    <h3>Tax Advantages</h3>
    <ul>
      <li><strong>Depreciation:</strong> Buildings depreciate over 39 years (commercial property). Personal property and land improvements may qualify for shorter depreciation periods or bonus depreciation.</li>
      <li><strong>Cost Segregation:</strong> Engineering-based analysis can accelerate depreciation on certain building components, improving early-year cash flow.</li>
      <li><strong>Section 1031 Exchange:</strong> Defer capital gains when selling one senior living property and acquiring another like-kind property.</li>
      <li><strong>Opportunity Zones:</strong> If located in qualified Opportunity Zones, may receive capital gains tax benefits.</li>
    </ul>

    <h3>Due Diligence Checklist</h3>
    <p>Comprehensive due diligence is essential for senior living acquisitions:</p>
    <ul>
      <li>Review 3+ years of financial statements and rent rolls</li>
      <li>Analyze census reports and care level mix trends</li>
      <li>Verify all licenses, permits, and regulatory compliance</li>
      <li>Inspect property condition and deferred maintenance</li>
      <li>Review employee records, turnover rates, and wage structure</li>
      <li>Assess resident satisfaction and quality ratings</li>
      <li>Verify insurance coverage and claims history</li>
      <li>Evaluate management team experience and contracts</li>
      <li>Conduct market study of demographics and competition</li>
      <li>Review all service contracts (food, maintenance, etc.)</li>
    </ul>

    <h3>Industry Trends Shaping Senior Living</h3>
    <ul>
      <li><strong>Aging in Place Technology:</strong> Smart home systems and telehealth reducing need for higher-acuity care</li>
      <li><strong>Wellness Programming:</strong> Holistic approach to senior wellness including fitness, social engagement, and mental health</li>
      <li><strong>Hybrid Models:</strong> Combining independent and assisted living to create care continuum and reduce move-outs</li>
      <li><strong>Smaller Footprints:</strong> Purpose-built boutique facilities (60-80 units) in suburban locations gaining popularity</li>
      <li><strong>Private Pay Focus:</strong> Shift away from Medicaid reimbursement toward private-pay middle-market and luxury positioning</li>
    </ul>

    <h3>Best Practices for Senior Living Investment</h3>
    <ul>
      <li>Partner with experienced operators who have proven track records in senior housing management</li>
      <li>Focus on markets with strong demographics (age 75+ growth) and limited new supply</li>
      <li>Underwrite conservatively with realistic stabilization timelines and operating ratios</li>
      <li>Maintain robust capital reserves for unexpected expenses and deferred maintenance</li>
      <li>Invest in quality operations and staff to drive resident satisfaction and referrals</li>
      <li>Stay current on regulatory changes and compliance requirements</li>
      <li>Consider portfolio diversification across multiple markets and care levels</li>
      <li>Plan for 3-5 year minimum hold to allow for market cycles and value creation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Property Purchase Price',
        type: 'number',
        defaultValue: 15000000,
      },
      {
        name: 'units',
        label: 'Total Units',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'monthlyRate',
        label: 'Average Monthly Rate per Unit',
        type: 'number',
        defaultValue: 5500,
      },
      {
        name: 'occupancyRate',
        label: 'Occupancy Rate (%)',
        type: 'number',
        defaultValue: 90,
      },
      {
        name: 'operatingExpenseRatio',
        label: 'Operating Expense Ratio (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'annualExpenseGrowth',
        label: 'Annual Expense Growth (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'annualRevenueGrowth',
        label: 'Annual Revenue Growth (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 30,
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
        defaultValue: 25,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'exitCapRate',
        label: 'Exit Cap Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
    ],
    results: [
      { label: 'Gross Potential Revenue', isCurrency: true },
      { label: 'Effective Gross Income', isCurrency: true },
      { label: 'Year 1 Net Operating Income', isCurrency: true },
      { label: 'Year 1 Cash Flow After Debt Service', isCurrency: true },
      { label: 'Cash-on-Cash Return', isPercentage: true },
      { label: 'Cap Rate', isPercentage: true },
      { label: 'Debt Service Coverage Ratio', isText: true },
      { label: 'Projected Sale Price', isCurrency: true },
      { label: 'Total Profit', isCurrency: true },
      { label: 'IRR', isPercentage: true },
      { label: 'Equity Multiple', isText: true },
    ],
    calculate: (values) => {
      const {
        purchasePrice,
        units,
        monthlyRate,
        occupancyRate,
        operatingExpenseRatio,
        annualExpenseGrowth,
        annualRevenueGrowth,
        downPayment,
        interestRate,
        loanTerm,
        holdingPeriod,
        exitCapRate,
      } = values;

      const grossPotentialRevenue = units * monthlyRate * 12;
      const effectiveGrossIncome = grossPotentialRevenue * (occupancyRate / 100);
      const year1OperatingExpenses = effectiveGrossIncome * (operatingExpenseRatio / 100);
      const year1NOI = effectiveGrossIncome - year1OperatingExpenses;

      const loanAmount = purchasePrice * (1 - downPayment / 100);
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      const annualDebtService = monthlyPayment * 12;

      const year1CashFlow = year1NOI - annualDebtService;
      const equity = purchasePrice * (downPayment / 100);
      const cashOnCashReturn = (year1CashFlow / equity) * 100;
      const capRate = (year1NOI / purchasePrice) * 100;
      const dscr = year1NOI / annualDebtService;

      let projectedNOI = year1NOI;
      let totalCashFlows = 0;
      const cashFlows = [-equity];

      for (let year = 1; year <= holdingPeriod; year++) {
        if (year > 1) {
          const revenueGrowthFactor = Math.pow(1 + annualRevenueGrowth / 100, year - 1);
          const expenseGrowthFactor = Math.pow(1 + annualExpenseGrowth / 100, year - 1);
          const yearRevenue = effectiveGrossIncome * revenueGrowthFactor;
          const yearExpenses = year1OperatingExpenses * expenseGrowthFactor;
          projectedNOI = yearRevenue - yearExpenses;
        }

        const yearCashFlow = projectedNOI - annualDebtService;
        totalCashFlows += yearCashFlow;
        cashFlows.push(yearCashFlow);
      }

      const finalYearNOI = projectedNOI;
      const salePrice = finalYearNOI / (exitCapRate / 100);
      const remainingBalance =
        loanAmount *
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) -
          Math.pow(1 + monthlyInterestRate, holdingPeriod * 12)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      const saleProceeds = salePrice - remainingBalance;
      cashFlows[cashFlows.length - 1] += saleProceeds;

      const totalProfit = saleProceeds + totalCashFlows - equity;

      function calculateIRR(cashFlows: number[], guess = 0.1): number {
        const maxIterations = 1000;
        const tolerance = 0.00001;
        let rate = guess;

        for (let i = 0; i < maxIterations; i++) {
          let npv = 0;
          let dnpv = 0;

          for (let j = 0; j < cashFlows.length; j++) {
            npv += cashFlows[j] / Math.pow(1 + rate, j);
            dnpv += (-j * cashFlows[j]) / Math.pow(1 + rate, j + 1);
          }

          const newRate = rate - npv / dnpv;

          if (Math.abs(newRate - rate) < tolerance) {
            return newRate * 100;
          }

          rate = newRate;
        }

        return rate * 100;
      }

      const irr = calculateIRR(cashFlows);
      const equityMultiple = (saleProceeds + totalCashFlows) / equity;

      return [
        { label: 'Gross Potential Revenue', value: grossPotentialRevenue.toFixed(2), isCurrency: true },
        { label: 'Effective Gross Income', value: effectiveGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Year 1 Net Operating Income', value: year1NOI.toFixed(2), isCurrency: true },
        { label: 'Year 1 Cash Flow After Debt Service', value: year1CashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Return', value: cashOnCashReturn.toFixed(2), isPercentage: true },
        { label: 'Cap Rate', value: capRate.toFixed(2), isPercentage: true },
        { label: 'Debt Service Coverage Ratio', value: `${dscr.toFixed(2)}x`, isText: true },
        { label: 'Projected Sale Price', value: salePrice.toFixed(2), isCurrency: true },
        { label: 'Total Profit', value: totalProfit.toFixed(2), isCurrency: true },
        { label: 'IRR', value: irr.toFixed(2), isPercentage: true },
        { label: 'Equity Multiple', value: `${equityMultiple.toFixed(2)}x`, isText: true },
      ];
    },
  },
};
