import { CalculatorContent } from '@/types';

export const CONDO_HOTEL_CONDOTEL_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Condo-Hotel (Condotel) ROI Calculator',
  description: 'Calculate return on investment for condo-hotel properties with rental pool income',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'condo-hotel-condotel-roi-calculator',
  article: {
    title: "Understanding Condo-Hotel (Condotel) Investments",
    content: `
    <h2>What is a Condo-Hotel (Condotel)?</h2>
    <p>A condo-hotel or condotel is a hybrid property that functions as both a condominium and hotel. Owners can use the unit personally while placing it in a rental pool when not in residence. The hotel operator manages rentals, and revenue is shared based on occupancy and agreements.</p>
    
    <h3>How Condo-Hotels Work</h3>
    <ul>
      <li><strong>Ownership:</strong> You own the unit like a traditional condo</li>
      <li><strong>Rental Program:</strong> Hotel operator manages bookings and guest services</li>
      <li><strong>Revenue Sharing:</strong> Typically 40-60% to owner, 40-60% to hotel operator</li>
      <li><strong>Personal Use:</strong> Limited days per year (30-60 days typical)</li>
      <li><strong>Amenities:</strong> Access to hotel facilities (pool, spa, gym, concierge)</li>
      <li><strong>Maintenance:</strong> Hotel handles cleaning, repairs, and upkeep</li>
    </ul>
    
    <h3>Financial Structure</h3>
    <ul>
      <li><strong>Purchase Price:</strong> Often premium pricing due to hotel services</li>
      <li><strong>HOA/Management Fees:</strong> Higher than traditional condos ($800-$2,000+/month)</li>
      <li><strong>Rental Pool Revenue:</strong> Variable based on occupancy and nightly rates</li>
      <li><strong>Operating Expenses:</strong> Utilities, marketing, management often deducted</li>
      <li><strong>Reserve Funds:</strong> Required for property upkeep and improvements</li>
    </ul>
    
    <h3>Advantages of Condo-Hotels</h3>
    <ul>
      <li><strong>Passive Income:</strong> Professional management handles everything</li>
      <li><strong>Personal Use:</strong> Vacation property with income potential</li>
      <li><strong>Amenities:</strong> Resort-style facilities and services</li>
      <li><strong>Prime Locations:</strong> Often in desirable vacation destinations</li>
      <li><strong>Tax Benefits:</strong> Potential deductions for rental property expenses</li>
      <li><strong>No Landlord Duties:</strong> Hotel manages all guest interactions</li>
    </ul>
    
    <h3>Disadvantages and Risks</h3>
    <ul>
      <li><strong>Lower ROI:</strong> Revenue split reduces owner income</li>
      <li><strong>High Fees:</strong> Management and HOA fees eat into profits</li>
      <li><strong>Limited Personal Use:</strong> Restrictions on when you can stay</li>
      <li><strong>Occupancy Risk:</strong> Revenue depends on hotel performance</li>
      <li><strong>Financing Challenges:</strong> Many lenders won't finance condotels</li>
      <li><strong>Resale Difficulty:</strong> Smaller buyer pool than traditional condos</li>
      <li><strong>Wear and Tear:</strong> Commercial hotel use accelerates depreciation</li>
    </ul>
    
    <h3>Key Financial Metrics</h3>
    <ul>
      <li><strong>Occupancy Rate:</strong> 50-70% typical for vacation markets</li>
      <li><strong>ADR (Average Daily Rate):</strong> Varies by location and season</li>
      <li><strong>Revenue Per Available Unit (RevPAU):</strong> ADR × Occupancy Rate</li>
      <li><strong>Net Operating Income:</strong> Gross rental income minus operating expenses</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual net income / total cash invested</li>
    </ul>
    
    <h3>Tax Considerations</h3>
    <p>Condotels are treated as rental properties for tax purposes. You can deduct:</p>
    <ul>
      <li>Mortgage interest and property taxes</li>
      <li>HOA and management fees</li>
      <li>Depreciation (27.5-year schedule)</li>
      <li>Operating expenses and repairs</li>
    </ul>
    <p>However, personal use may limit deductions. Consult a tax professional for specific guidance.</p>
    
    <h3>Due Diligence Checklist</h3>
    <ul>
      <li>Review hotel operator's track record and financial stability</li>
      <li>Analyze historical occupancy and revenue data</li>
      <li>Understand revenue-sharing agreement details</li>
      <li>Review HOA financials and reserve studies</li>
      <li>Check personal use restrictions and blackout dates</li>
      <li>Verify financing options and requirements</li>
      <li>Research resale market for similar units</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
      {
        name: "avgNightlyRate",
        label: "Average Nightly Rate (ADR)",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "occupancyRate",
        label: "Annual Occupancy Rate (%)",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "ownerRevenueSplit",
        label: "Owner Revenue Share (%)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "monthlyHOAFee",
        label: "Monthly HOA/Management Fee",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "annualPropertyTax",
        label: "Annual Property Tax",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "annualInsurance",
        label: "Annual Insurance",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "Gross Rental Revenue (Annual)", isCurrency: true },
      { label: "Owner Share of Rental Revenue", isCurrency: true },
      { label: "Annual Mortgage Payment", isCurrency: true },
      { label: "Total Annual Expenses", isCurrency: true },
      { label: "Net Operating Income (NOI)", isCurrency: true },
      { label: "Cash Flow (Annual)", isCurrency: true },
      { label: "Cash-on-Cash Return", isCurrency: false },
      { label: "Cap Rate", isCurrency: false },
      { label: "Investment Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const downPaymentPercent = Number(data.downPaymentPercent) || 0;
      const interestRate = (Number(data.interestRate) || 0) / 100 / 12;
      const avgNightlyRate = Number(data.avgNightlyRate) || 0;
      const occupancyRate = (Number(data.occupancyRate) || 0) / 100;
      const ownerRevenueSplit = (Number(data.ownerRevenueSplit) || 0) / 100;
      const monthlyHOAFee = Number(data.monthlyHOAFee) || 0;
      const annualPropertyTax = Number(data.annualPropertyTax) || 0;
      const annualInsurance = Number(data.annualInsurance) || 0;

      const nightsRented = 365 * occupancyRate;
      const grossRentalRevenue = avgNightlyRate * nightsRented;
      const ownerRevenue = grossRentalRevenue * ownerRevenueSplit;
      
      const downPayment = purchasePrice * (downPaymentPercent / 100);
      const loanAmount = purchasePrice - downPayment;
      
      const loanTerm = 30 * 12;
      let monthlyMortgage = 0;
      if (interestRate > 0 && loanTerm > 0) {
        monthlyMortgage = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
      }
      
      const annualMortgage = monthlyMortgage * 12;
      const annualHOA = monthlyHOAFee * 12;
      const totalAnnualExpenses = annualMortgage + annualHOA + annualPropertyTax + annualInsurance;
      
      const noi = ownerRevenue - (annualHOA + annualPropertyTax + annualInsurance);
      const cashFlow = ownerRevenue - totalAnnualExpenses;
      
      const totalCashInvested = downPayment + 10000;
      const cashOnCashReturn = totalCashInvested > 0 ? (cashFlow / totalCashInvested) * 100 : 0;
      const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;
      
      let assessment = "Excellent Investment";
      if (cashOnCashReturn < 0) {
        assessment = "Negative Cash Flow - Poor Investment";
      } else if (cashOnCashReturn < 3) {
        assessment = "Poor Return - Below Market";
      } else if (cashOnCashReturn < 6) {
        assessment = "Fair Return - Consider Alternatives";
      } else if (cashOnCashReturn < 10) {
        assessment = "Good Return - Solid Investment";
      }

      return [
        { label: "Gross Rental Revenue (Annual)", value: `${grossRentalRevenue.toFixed(2)}`, isCurrency: true },
        { label: "Owner Share of Rental Revenue", value: `${ownerRevenue.toFixed(2)}`, isCurrency: true },
        { label: "Annual Mortgage Payment", value: `${annualMortgage.toFixed(2)}`, isCurrency: true },
        { label: "Total Annual Expenses", value: `${totalAnnualExpenses.toFixed(2)}`, isCurrency: true },
        { label: "Net Operating Income (NOI)", value: `${noi.toFixed(2)}`, isCurrency: true },
        { label: "Cash Flow (Annual)", value: `${cashFlow.toFixed(2)}`, isCurrency: true },
        { label: "Cash-on-Cash Return", value: `${cashOnCashReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Cap Rate", value: `${capRate.toFixed(2)}%`, isCurrency: false },
        { label: "Investment Assessment", value: assessment, isCurrency: false },
      ];
    },
  },
};
