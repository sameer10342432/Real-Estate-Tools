import { CalculatorContent } from '@/types';

export const RENTAL_INCOME_TAXABLE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Rental Income Tax Calculator | Estimate Taxes on Rental Property 2025',
  description: 'Calculate taxable rental income and estimate federal taxes. Factor in rental deductions, depreciation, and passive income tax rules.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'rental-income-taxable-estimator',
  article: {
    title: "Understanding Rental Income Taxation",
    content: `
    <h2>How is Rental Income Taxed?</h2>
    <p>Rental income is generally taxed as ordinary income at your marginal tax rate. However, landlords can deduct numerous expenses and claim depreciation, which can significantly reduce or even eliminate taxable rental income.</p>
    
    <h3>What Counts as Rental Income?</h3>
    <ul>
      <li><strong>Rent Payments:</strong> Regular monthly rent from tenants</li>
      <li><strong>Advance Rent:</strong> Last month's rent paid in advance (taxable when received)</li>
      <li><strong>Security Deposits:</strong> Only taxable if kept (not refunded to tenant)</li>
      <li><strong>Tenant-Paid Expenses:</strong> When tenant pays your expenses (utilities, repairs)</li>
      <li><strong>Lease Cancellation Fees:</strong> Payments to cancel a lease</li>
      <li><strong>Services Rendered:</strong> If tenant provides services in lieu of rent</li>
    </ul>

    <h3>Deductible Rental Expenses</h3>
    <p>Landlords can deduct ordinary and necessary expenses for managing and maintaining rental property:</p>

    <h4>Operating Expenses:</h4>
    <ul>
      <li><strong>Mortgage Interest:</strong> Interest portion of mortgage payments (no limit for rental property)</li>
      <li><strong>Property Taxes:</strong> Real estate taxes (no SALT cap limit for rental property)</li>
      <li><strong>Insurance:</strong> Property, liability, and landlord insurance premiums</li>
      <li><strong>HOA Fees:</strong> Homeowner association or condo fees</li>
      <li><strong>Utilities:</strong> If paid by landlord (water, gas, electric, trash, internet)</li>
      <li><strong>Property Management:</strong> Property management company fees (typically 8-12% of rent)</li>
    </ul>

    <h4>Maintenance and Repairs:</h4>
    <ul>
      <li><strong>Repairs:</strong> Fixing broken items, painting, plumbing, electrical work</li>
      <li><strong>Maintenance:</strong> Lawn care, pest control, HVAC servicing</li>
      <li><strong>Cleaning:</strong> Between tenants or regular cleaning services</li>
      <li><strong>Supplies:</strong> Tools, materials, cleaning supplies</li>
      <li><strong>Note:</strong> Improvements (adding value) must be depreciated, not deducted immediately</li>
    </ul>

    <h4>Professional Services:</h4>
    <ul>
      <li><strong>Legal Fees:</strong> Attorney fees for evictions, lease agreements, legal advice</li>
      <li><strong>Accounting:</strong> Tax preparation, bookkeeping services</li>
      <li><strong>Advertising:</strong> Listing fees, signs, online advertising to find tenants</li>
    </ul>

    <h4>Travel and Auto:</h4>
    <ul>
      <li><strong>Mileage:</strong> Driving to/from rental property (67 cents per mile for 2025)</li>
      <li><strong>Travel Expenses:</strong> For out-of-area rental properties</li>
    </ul>

    <h3>Depreciation - The Landlord's Secret Weapon</h3>
    <p>Depreciation is a non-cash deduction that can create a "paper loss" while you have positive cash flow:</p>
    <ul>
      <li><strong>Residential Property:</strong> Depreciate over 27.5 years</li>
      <li><strong>Building Only:</strong> Land is not depreciable (allocate purchase price between land and building)</li>
      <li><strong>Formula:</strong> (Building Value / 27.5) = Annual Depreciation</li>
      <li><strong>Example:</strong> $275,000 building value = $10,000/year depreciation deduction</li>
      <li><strong>Bonus Depreciation:</strong> Personal property (appliances, carpets) can be depreciated faster</li>
    </ul>

    <h3>Passive Activity Loss Rules</h3>
    <p>Rental real estate is generally considered a "passive activity" with special tax rules:</p>

    <h4>$25,000 Special Allowance:</h4>
    <ul>
      <li>Active participants can deduct up to $25,000 in rental losses against ordinary income</li>
      <li><strong>Income Phase-Out:</strong> Allowance phases out between $100,000-$150,000 AGI</li>
      <li><strong>Active Participation:</strong> You make management decisions (approve tenants, repairs, etc.)</li>
      <li><strong>Above $150,000 AGI:</strong> Generally cannot deduct rental losses against other income</li>
    </ul>

    <h4>Real Estate Professional Status:</h4>
    <ul>
      <li>If you qualify as a real estate professional, rental losses are NOT passive</li>
      <li><strong>Requirements:</strong> 750+ hours in real estate activities AND more than half your working time</li>
      <li><strong>Benefit:</strong> Can deduct unlimited rental losses against other income</li>
      <li><strong>Material Participation:</strong> Must also materially participate in each rental activity</li>
    </ul>

    <h3>Self-Employment Tax</h3>
    <p><strong>Good News:</strong> Rental income is generally NOT subject to self-employment tax (15.3%):</p>
    <ul>
      <li>Exception: Providing substantial services to tenants (hotel-like services)</li>
      <li>Short-term rentals (Airbnb) with substantial services may be subject to SE tax</li>
      <li>Regular long-term rentals are typically exempt from SE tax</li>
    </ul>

    <h3>Net Investment Income Tax (NIIT)</h3>
    <p>High earners may pay an additional 3.8% tax on rental income:</p>
    <ul>
      <li>Applies to taxpayers with modified AGI over $200,000 (single) or $250,000 (married)</li>
      <li>Charged on lesser of: net investment income OR amount over threshold</li>
      <li>Exception: Real estate professionals exempt from NIIT on rental income</li>
    </ul>

    <h3>Tax Reporting (Schedule E)</h3>
    <ul>
      <li>Rental income and expenses reported on Schedule E (Form 1040)</li>
      <li>Net rental income/loss flows to Form 1040</li>
      <li>Keep detailed records of all income and expenses</li>
      <li>Maintain separate bank account for rental property</li>
    </ul>

    <h3>State Income Taxes</h3>
    <ul>
      <li>Most states tax rental income at regular state income tax rates</li>
      <li>Some states have different rules for depreciation</li>
      <li>Out-of-state rentals may require filing in multiple states</li>
    </ul>

    <h3>Tax Planning Strategies</h3>
    <ul>
      <li><strong>Maximize Deductions:</strong> Track every deductible expense</li>
      <li><strong>Cost Segregation:</strong> Accelerate depreciation on components</li>
      <li><strong>Time Improvements:</strong> Bunch capital improvements in high-income years</li>
      <li><strong>Document Everything:</strong> Keep receipts, mileage logs, time records</li>
      <li><strong>Consider Entity Structure:</strong> LLC, S-corp may provide benefits</li>
      <li><strong>Track Basis:</strong> Maintain records of improvements for future sale</li>
    </ul>

    <h3>Depreciation Recapture</h3>
    <p><strong>Warning:</strong> When you sell rental property, depreciation taken is "recaptured":</p>
    <ul>
      <li>Depreciation recapture taxed at 25% federal rate</li>
      <li>Capital gains above depreciation taxed at 0%, 15%, or 20%</li>
      <li>1031 exchange can defer depreciation recapture</li>
    </ul>

    <h3>Record Keeping Best Practices</h3>
    <ul>
      <li>Separate bank account and credit card for rental property</li>
      <li>Use property management software to track income/expenses</li>
      <li>Keep receipts for all expenses (digital copies acceptable)</li>
      <li>Maintain mileage log for property-related travel</li>
      <li>Document time spent on rental activities (for real estate professional status)</li>
      <li>Keep records for at least 7 years</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Gross Rental Income', isCurrency: true },
      { label: 'Total Operating Expenses', isCurrency: true },
      { label: 'Depreciation Deduction', isCurrency: true },
      { label: 'Net Rental Income (Loss)', isCurrency: true },
      { label: 'Deductible Rental Loss', isCurrency: true },
      { label: 'Taxable Rental Income', isCurrency: true },
      { label: 'Federal Income Tax (Ordinary Rates)', isCurrency: true },
      { label: 'Net Investment Income Tax (3.8%)', isCurrency: true },
      { label: 'State Income Tax', isCurrency: true },
      { label: 'Total Tax on Rental Income', isCurrency: true },
      { label: 'After-Tax Cash Flow', isCurrency: true },
    ],
    fields: [
      {
        name: 'monthlyRent',
        label: 'Monthly Rent Collected',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'otherIncome',
        label: 'Other Rental Income (annual)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'mortgageInterest',
        label: 'Mortgage Interest (annual)',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'propertyTaxes',
        label: 'Property Taxes (annual)',
        type: 'number',
        defaultValue: 4500,
      },
      {
        name: 'insurance',
        label: 'Insurance (annual)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'hoaFees',
        label: 'HOA Fees (annual)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'utilities',
        label: 'Utilities (if paid by landlord, annual)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'propertyManagement',
        label: 'Property Management Fees (annual)',
        type: 'number',
        defaultValue: 3600,
      },
      {
        name: 'repairsMaintenance',
        label: 'Repairs & Maintenance (annual)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'otherExpenses',
        label: 'Other Expenses (annual)',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'buildingValue',
        label: 'Building Value (for depreciation)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'taxpayerAGI',
        label: 'Your Adjusted Gross Income (AGI)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'isRealEstateProfessional',
        label: 'Qualify as Real Estate Professional?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 24,
      },
      {
        name: 'stateTaxRate',
        label: 'State Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    calculate: (data) => {
      const { 
        monthlyRent,
        otherIncome,
        mortgageInterest,
        propertyTaxes,
        insurance,
        hoaFees,
        utilities,
        propertyManagement,
        repairsMaintenance,
        otherExpenses,
        buildingValue,
        taxpayerAGI,
        isRealEstateProfessional,
        federalTaxRate,
        stateTaxRate
      } = data;

      const grossRentalIncome = (monthlyRent * 12) + otherIncome;
      
      const totalOperatingExpenses = mortgageInterest + propertyTaxes + insurance + 
                                     hoaFees + utilities + propertyManagement + 
                                     repairsMaintenance + otherExpenses;
      
      const annualDepreciation = buildingValue / 27.5;
      
      const netRentalIncome = grossRentalIncome - totalOperatingExpenses - annualDepreciation;
      
      // Calculate deductible loss based on passive activity rules
      let deductibleLoss = 0;
      let taxableIncome = netRentalIncome;
      
      if (netRentalIncome < 0) {
        if (isRealEstateProfessional) {
          // Real estate professionals can deduct all losses
          deductibleLoss = Math.abs(netRentalIncome);
          taxableIncome = 0;
        } else if (taxpayerAGI <= 100000) {
          // Full $25,000 allowance
          deductibleLoss = Math.min(Math.abs(netRentalIncome), 25000);
          taxableIncome = 0;
        } else if (taxpayerAGI < 150000) {
          // Phased-out allowance
          const phaseOutAmount = (taxpayerAGI - 100000) * 0.5;
          const allowedLoss = Math.max(0, 25000 - phaseOutAmount);
          deductibleLoss = Math.min(Math.abs(netRentalIncome), allowedLoss);
          taxableIncome = 0;
        } else {
          // No deduction allowed (loss suspended)
          deductibleLoss = 0;
          taxableIncome = 0;
        }
      }
      
      const federalIncomeTax = Math.max(0, taxableIncome) * (federalTaxRate / 100);
      
      // Net Investment Income Tax (3.8%) - only if AGI > thresholds
      let niit = 0;
      if (taxpayerAGI > 200000 && !isRealEstateProfessional && taxableIncome > 0) {
        niit = taxableIncome * 0.038;
      }
      
      const stateIncomeTax = Math.max(0, taxableIncome) * (stateTaxRate / 100);
      
      const totalTax = federalIncomeTax + niit + stateIncomeTax;
      
      // After-tax cash flow (not accounting for principal payment)
      const cashFlowBeforeTax = grossRentalIncome - totalOperatingExpenses;
      const afterTaxCashFlow = cashFlowBeforeTax - totalTax;

      return [
        { label: 'Total Gross Rental Income', value: grossRentalIncome, isCurrency: true },
        { label: 'Total Operating Expenses', value: totalOperatingExpenses, isCurrency: true },
        { label: 'Depreciation Deduction', value: annualDepreciation, isCurrency: true },
        { label: 'Net Rental Income (Loss)', value: netRentalIncome, isCurrency: true },
        { label: 'Deductible Rental Loss', value: deductibleLoss, isCurrency: true },
        { label: 'Taxable Rental Income', value: Math.max(0, taxableIncome), isCurrency: true },
        { label: 'Federal Income Tax (Ordinary Rates)', value: federalIncomeTax, isCurrency: true },
        { label: 'Net Investment Income Tax (3.8%)', value: niit, isCurrency: true },
        { label: 'State Income Tax', value: stateIncomeTax, isCurrency: true },
        { label: 'Total Tax on Rental Income', value: totalTax, isCurrency: true },
        { label: 'After-Tax Cash Flow', value: afterTaxCashFlow, isCurrency: true },
      ];
    },
  },
};
