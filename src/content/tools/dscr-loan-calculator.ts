import { CalculatorContent } from '@/types';

export const DSCR_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'DSCR Loan Calculator',
  description: 'Calculate Debt Service Coverage Ratio for investment property loans. Determine if your rental property qualifies for a DSCR loan.',
  icon: '📊',
  slug: 'dscr-loan-calculator',
  category: 'Investment Analysis',
  metaTitle: 'DSCR Loan Calculator | Debt Service Coverage Ratio for Investment Properties',
  metaDescription: 'Free DSCR loan calculator for real estate investors. Calculate your Debt Service Coverage Ratio, determine loan qualification status, and get recommendations for improving your DSCR to qualify for investor loans.',
  metaKeywords: 'DSCR loan calculator, debt service coverage ratio, investment property loans, DSCR loans, rental property financing, investor loans, no income verification loans',
  ogTitle: 'DSCR Loan Calculator - Investment Property Loan Qualification Tool',
  ogDescription: 'Calculate your DSCR ratio and determine if your investment property qualifies for a DSCR loan. Free calculator for real estate investors.',
  article: {
    title: 'DSCR Loans: The Complete Guide for Real Estate Investors',
    content: `
    <h2>What is a DSCR Loan?</h2>
    <p>A DSCR (Debt Service Coverage Ratio) loan is a type of non-qualified mortgage (non-QM) designed specifically for real estate investors. Unlike traditional mortgages that require income verification through W-2s, tax returns, and pay stubs, DSCR loans qualify borrowers based on the property's ability to generate enough rental income to cover the mortgage payment and other expenses.</p>
    
    <p>DSCR loans have become increasingly popular among real estate investors because they offer a streamlined approval process that focuses on the investment property's cash flow rather than the borrower's personal income. This makes them ideal for self-employed investors, those with complex tax situations, or investors looking to scale their portfolios quickly.</p>

    <h3>How DSCR is Calculated</h3>
    <p>The Debt Service Coverage Ratio is calculated by dividing the property's Net Operating Income (NOI) by the total debt service (mortgage payment including principal, interest, taxes, insurance, and HOA fees). The formula is:</p>
    
    <div class="formula-box">
      <strong>DSCR = Net Operating Income ÷ Total Debt Service</strong>
    </div>
    
    <p>Where:</p>
    <ul>
      <li><strong>Net Operating Income (NOI)</strong> = Gross Rental Income - Operating Expenses (vacancy, property management, maintenance reserves)</li>
      <li><strong>Total Debt Service</strong> = Monthly Mortgage Payment (P&I) + Property Taxes + Insurance + HOA Fees</li>
    </ul>

    <h3>DSCR Thresholds and What They Mean</h3>
    <p>Lenders use different DSCR thresholds to determine loan eligibility:</p>
    <ul>
      <li><strong>DSCR of 1.0:</strong> The property generates exactly enough income to cover the debt service. Some lenders accept this, but with stricter terms and higher rates.</li>
      <li><strong>DSCR of 1.1:</strong> The property generates 10% more income than needed for debt service. This is the minimum for many DSCR lenders.</li>
      <li><strong>DSCR of 1.25:</strong> The property generates 25% more income than needed. This is considered a strong DSCR and qualifies for the best rates and terms.</li>
      <li><strong>DSCR of 1.5+:</strong> Excellent cash flow with significant buffer. Investors with this DSCR can often negotiate better terms.</li>
    </ul>

    <h2>Key Features of DSCR Loans</h2>
    
    <h3>No Income Verification Required</h3>
    <p>The biggest advantage of DSCR loans is that they don't require traditional income documentation. Lenders don't ask for:</p>
    <ul>
      <li>W-2 forms or tax returns</li>
      <li>Pay stubs or employment verification</li>
      <li>Personal income analysis</li>
    </ul>
    <p>Instead, they focus entirely on whether the investment property can support the loan payments.</p>

    <h3>Loan Amount Based on Property Value</h3>
    <p>DSCR loans typically offer loan-to-value (LTV) ratios up to 80%, meaning you'll need at least 20% down payment. Some lenders may offer higher LTVs for borrowers with excellent credit or lower DSCRs for larger down payments.</p>

    <h3>Faster Approval Process</h3>
    <p>Without the need to verify income, analyze tax returns, or calculate debt-to-income ratios, DSCR loans can close much faster than traditional mortgages—often in 2-3 weeks compared to 30-45 days for conventional loans.</p>

    <h2>Who Should Use a DSCR Loan?</h2>
    <p>DSCR loans are ideal for:</p>
    <ul>
      <li><strong>Self-employed investors:</strong> Those who write off significant expenses and show low taxable income on returns</li>
      <li><strong>Portfolio investors:</strong> Investors looking to scale quickly without the hassle of documenting income for each property</li>
      <li><strong>Foreign nationals:</strong> Non-US citizens who may not have traditional income documentation</li>
      <li><strong>LLC investors:</strong> Those purchasing properties in an LLC for asset protection</li>
      <li><strong>Investors with complex income:</strong> Multiple income streams that are difficult to document traditionally</li>
    </ul>

    <h2>DSCR Loan Requirements</h2>
    <p>While DSCR loans are more flexible than traditional mortgages, they still have requirements:</p>
    <ul>
      <li><strong>Credit score:</strong> Most lenders require a minimum credit score of 620-680</li>
      <li><strong>Down payment:</strong> Typically 20-25% minimum</li>
      <li><strong>Property type:</strong> Investment properties only (1-4 units, condos, townhouses)</li>
      <li><strong>Rental income documentation:</strong> Lease agreements or appraiser's rent estimate</li>
      <li><strong>Reserves:</strong> Usually 6 months of mortgage payments in reserve</li>
    </ul>

    <h2>Pros and Cons of DSCR Loans</h2>
    
    <h3>Advantages</h3>
    <ul>
      <li><strong>No income verification:</strong> Qualify based on property cash flow, not personal income</li>
      <li><strong>Faster closing:</strong> Streamlined approval process saves time</li>
      <li><strong>Unlimited properties:</strong> No limit on the number of financed properties (unlike conventional loans)</li>
      <li><strong>LLC ownership:</strong> Properties can be purchased directly in an LLC</li>
      <li><strong>Scalability:</strong> Easier to build a large portfolio quickly</li>
    </ul>

    <h3>Disadvantages</h3>
    <ul>
      <li><strong>Higher interest rates:</strong> Typically 1-2% higher than conventional mortgages</li>
      <li><strong>Larger down payment:</strong> Usually requires 20-25% minimum</li>
      <li><strong>Investment properties only:</strong> Cannot be used for primary residences</li>
      <li><strong>Prepayment penalties:</strong> Many DSCR loans have prepayment penalties for 3-5 years</li>
      <li><strong>Higher closing costs:</strong> May include additional fees for non-QM processing</li>
    </ul>

    <h2>How to Improve Your DSCR</h2>
    <p>If your DSCR doesn't meet lender requirements, consider these strategies:</p>
    
    <h3>Increase Rental Income</h3>
    <ul>
      <li>Raise rents to market rates</li>
      <li>Add value through renovations to justify higher rents</li>
      <li>Consider short-term rental strategies if allowed</li>
      <li>Add income-generating amenities (laundry, parking, storage)</li>
    </ul>

    <h3>Reduce Operating Expenses</h3>
    <ul>
      <li>Shop for lower property insurance rates</li>
      <li>Appeal property tax assessments if overvalued</li>
      <li>Negotiate lower property management fees</li>
      <li>Implement energy-efficient improvements to reduce utilities</li>
    </ul>

    <h3>Reduce Debt Service</h3>
    <ul>
      <li>Increase your down payment to lower the loan amount</li>
      <li>Shop for better interest rates or buy down the rate</li>
      <li>Choose a longer amortization period</li>
      <li>Consider an interest-only option if available</li>
    </ul>

    <h2>DSCR Loans vs. Other Investment Property Loans</h2>
    
    <h3>DSCR vs. Conventional Loans</h3>
    <p>Conventional loans offer lower rates but require full income verification and have limits on the number of financed properties (typically 10). DSCR loans are more flexible but cost more.</p>

    <h3>DSCR vs. Hard Money Loans</h3>
    <p>Hard money loans are short-term (6-24 months) with very high rates and are typically used for fix-and-flip projects. DSCR loans are long-term (30 years) and designed for buy-and-hold investors.</p>

    <h3>DSCR vs. Bank Statement Loans</h3>
    <p>Bank statement loans verify income through bank deposits rather than tax returns. They're better for self-employed borrowers buying primary residences, while DSCR loans are specifically for investment properties.</p>

    <h2>How to Use This Calculator</h2>
    <p>Enter your property's financial details:</p>
    <ol>
      <li><strong>Gross Monthly Rental Income:</strong> The total rent you expect to collect each month</li>
      <li><strong>Monthly Mortgage Payment (P&I):</strong> Principal and interest portion of your payment</li>
      <li><strong>Monthly Property Taxes:</strong> Annual taxes divided by 12</li>
      <li><strong>Monthly Insurance:</strong> Annual insurance premium divided by 12</li>
      <li><strong>Monthly HOA/Condo Fees:</strong> Any association dues</li>
      <li><strong>Property Management Fee:</strong> Typically 8-10% of gross rent</li>
      <li><strong>Vacancy Rate:</strong> Expected vacancy percentage (typically 5-10%)</li>
      <li><strong>Maintenance Reserve:</strong> Funds set aside for repairs (typically 5-10%)</li>
    </ol>
    <p>The calculator will show your DSCR ratio, whether you meet common lender thresholds, and recommendations for improving your ratio if needed.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'grossMonthlyRent',
        label: 'Gross Monthly Rental Income ($)',
        type: 'number',
        defaultValue: 2500,
        placeholder: '2500',
      },
      {
        name: 'monthlyMortgagePI',
        label: 'Monthly Mortgage Payment - P&I ($)',
        type: 'number',
        defaultValue: 1500,
        placeholder: '1500',
      },
      {
        name: 'monthlyPropertyTaxes',
        label: 'Monthly Property Taxes ($)',
        type: 'number',
        defaultValue: 250,
        placeholder: '250',
      },
      {
        name: 'monthlyInsurance',
        label: 'Monthly Insurance ($)',
        type: 'number',
        defaultValue: 100,
        placeholder: '100',
      },
      {
        name: 'monthlyHOA',
        label: 'Monthly HOA/Condo Fees ($)',
        type: 'number',
        defaultValue: 0,
        placeholder: '0',
      },
      {
        name: 'propertyManagementFee',
        label: 'Property Management Fee (%)',
        type: 'number',
        defaultValue: 8,
        placeholder: '8',
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
        placeholder: '5',
      },
      {
        name: 'maintenanceReserve',
        label: 'Maintenance Reserve (%)',
        type: 'number',
        defaultValue: 5,
        placeholder: '5',
      },
    ],
    calculate: (values) => {
      const {
        grossMonthlyRent,
        monthlyMortgagePI,
        monthlyPropertyTaxes,
        monthlyInsurance,
        monthlyHOA,
        propertyManagementFee,
        vacancyRate,
        maintenanceReserve,
      } = values;

      const vacancyLoss = grossMonthlyRent * (vacancyRate / 100);
      const effectiveGrossIncome = grossMonthlyRent - vacancyLoss;

      const managementCost = grossMonthlyRent * (propertyManagementFee / 100);
      const maintenanceCost = grossMonthlyRent * (maintenanceReserve / 100);
      const totalOperatingExpenses = managementCost + maintenanceCost;

      const netOperatingIncome = effectiveGrossIncome - totalOperatingExpenses;

      const totalMonthlyDebtService = monthlyMortgagePI + monthlyPropertyTaxes + monthlyInsurance + monthlyHOA;

      const dscrRatio = totalMonthlyDebtService > 0 ? netOperatingIncome / totalMonthlyDebtService : 0;

      let qualificationStatus = '';
      let statusColor = '';
      if (dscrRatio >= 1.25) {
        qualificationStatus = 'Excellent - Qualifies for best rates';
        statusColor = 'green';
      } else if (dscrRatio >= 1.1) {
        qualificationStatus = 'Good - Meets most lender requirements';
        statusColor = 'blue';
      } else if (dscrRatio >= 1.0) {
        qualificationStatus = 'Marginal - May qualify with higher rates';
        statusColor = 'yellow';
      } else {
        qualificationStatus = 'Does Not Qualify - DSCR below 1.0';
        statusColor = 'red';
      }

      const monthlyCashFlow = netOperatingIncome - totalMonthlyDebtService;
      const annualCashFlow = monthlyCashFlow * 12;

      let recommendations = [];
      if (dscrRatio < 1.25) {
        const neededNOI = totalMonthlyDebtService * 1.25;
        const additionalNOINeeded = neededNOI - netOperatingIncome;
        const rentIncreaseNeeded = additionalNOINeeded / (1 - (vacancyRate + propertyManagementFee + maintenanceReserve) / 100);
        recommendations.push(`Increase rent by $${Math.ceil(rentIncreaseNeeded)} to reach 1.25 DSCR`);
      }
      if (dscrRatio < 1.0) {
        recommendations.push('Consider a larger down payment to reduce mortgage payment');
        recommendations.push('Shop for lower insurance rates');
        recommendations.push('Appeal property tax assessment if overvalued');
      }

      return [
        { label: 'Effective Gross Income (Monthly)', value: effectiveGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Total Operating Expenses (Monthly)', value: totalOperatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (Monthly)', value: netOperatingIncome.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Debt Service', value: totalMonthlyDebtService.toFixed(2), isCurrency: true },
        { label: 'DSCR Ratio', value: dscrRatio.toFixed(2), isCurrency: false },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
        { label: 'Monthly Cash Flow', value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Passes 1.0 Threshold', value: dscrRatio >= 1.0 ? 'Yes ✓' : 'No ✗', isCurrency: false },
        { label: 'Passes 1.1 Threshold', value: dscrRatio >= 1.1 ? 'Yes ✓' : 'No ✗', isCurrency: false },
        { label: 'Passes 1.25 Threshold', value: dscrRatio >= 1.25 ? 'Yes ✓' : 'No ✗', isCurrency: false },
      ];
    },
  },
};
