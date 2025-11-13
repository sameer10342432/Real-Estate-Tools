import { CalculatorContent } from '@/types';

export const CAM_RECONCILIATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'CAM Reconciliation Calculator - Common Area Maintenance Charge Calculator',
  description: 'Calculate Common Area Maintenance (CAM) charges, reconciliation amounts, and tenant reimbursements for commercial properties',
  icon: 'Icon',
  slug: 'cam-reconciliation-calculator',
  category: 'Investment Analysis',
  metaTitle: 'CAM Reconciliation Calculator | Common Area Maintenance Charge Calculator',
  metaDescription: 'Calculate CAM charges for commercial leases. Reconcile estimated vs. actual CAM expenses, compute tenant pro-rata shares, and generate CAM reconciliation statements. Free CAM calculator.',
  article: {
    title: 'Understanding CAM Charges and Reconciliation in Commercial Real Estate',
    content: `
    <h2>What is CAM (Common Area Maintenance)?</h2>
    <p>Common Area Maintenance (CAM) charges are fees that commercial tenants pay to landlords to cover the costs of maintaining and operating shared spaces in a commercial property. These charges typically cover parking lots, lobbies, elevators, landscaping, snow removal, security, and shared utilities. CAM reconciliation is the annual process of comparing estimated CAM charges paid by tenants against actual expenses incurred, then billing or refunding the difference.</p>

    <h3>Why CAM Charges Exist</h3>
    <p>Commercial landlords use CAM charges to:</p>
    <ul>
      <li><strong>Recover Operating Costs:</strong> Pass through the actual costs of maintaining common areas to tenants who benefit from them</li>
      <li><strong>Maintain Property Quality:</strong> Ensure sufficient funds for upkeep, repairs, and improvements</li>
      <li><strong>Protect Against Inflation:</strong> Actual expense pass-through protects landlords from rising costs</li>
      <li><strong>Fair Cost Allocation:</strong> Distribute costs proportionally based on tenant square footage</li>
      <li><strong>Predictable Budgeting:</strong> Monthly estimated CAM charges provide cash flow stability for both parties</li>
    </ul>

    <h3>Common CAM Expenses</h3>
    
    <h4>Maintenance and Repairs</h4>
    <ul>
      <li><strong>Parking Lot Maintenance:</strong> Sealcoating, striping, pothole repair, sweeping</li>
      <li><strong>Landscaping:</strong> Mowing, trimming, mulching, irrigation, seasonal plantings</li>
      <li><strong>Snow Removal:</strong> Plowing, shoveling, salting, ice management</li>
      <li><strong>Exterior Building Maintenance:</strong> Pressure washing, window cleaning, facade repairs</li>
      <li><strong>Roof Repairs:</strong> Leak repairs, gutter cleaning (common roof areas)</li>
      <li><strong>HVAC Maintenance:</strong> Common area heating/cooling equipment servicing</li>
    </ul>

    <h4>Utilities (Common Areas Only)</h4>
    <ul>
      <li><strong>Electricity:</strong> Parking lot lighting, hallway lighting, exterior signage</li>
      <li><strong>Water/Sewer:</strong> Landscaping irrigation, restroom facilities (if shared)</li>
      <li><strong>Gas:</strong> Common area heating (lobbies, hallways)</li>
      <li><strong>Trash Removal:</strong> Dumpster service, recycling, compactor fees</li>
    </ul>

    <h4>Administrative and Management</h4>
    <ul>
      <li><strong>Property Management Fees:</strong> Usually 3-5% of total operating expenses</li>
      <li><strong>Administrative Costs:</strong> Accounting, legal, insurance premiums allocation</li>
      <li><strong>CAM Audit Fees:</strong> Third-party CAM reconciliation services</li>
    </ul>

    <h4>Security and Safety</h4>
    <ul>
      <li><strong>Security Services:</strong> Guard patrols, monitoring systems</li>
      <li><strong>Fire Safety Systems:</strong> Sprinkler inspections, fire alarm monitoring</li>
      <li><strong>Liability Insurance:</strong> Common area coverage</li>
    </ul>

    <h4>Miscellaneous</h4>
    <ul>
      <li><strong>Signage:</strong> Monument signs, directional signage maintenance</li>
      <li><strong>Pest Control:</strong> Common area treatment</li>
      <li><strong>Holiday Decorations:</strong> Seasonal lighting and decorations</li>
      <li><strong>Reserves:</strong> Capital improvement reserves (if allowed in lease)</li>
    </ul>

    <h3>CAM Calculation Methods</h3>
    
    <h4>Pro-Rata Share Method (Most Common)</h4>
    <p>Each tenant pays a percentage of total CAM based on their leased square footage relative to total leasable area:</p>
    <p><strong>Formula:</strong> Tenant CAM Share = (Tenant SF / Total Leasable SF) × Total CAM Expenses</p>
    <p><strong>Example:</strong> Tenant leases 2,000 SF in 20,000 SF building = 10% of total CAM</p>
    <ul>
      <li>Total Annual CAM: $100,000</li>
      <li>Tenant's 10% Share: $10,000</li>
      <li>Monthly CAM Estimate: $833.33</li>
    </ul>

    <h4>Direct Allocation Method</h4>
    <p>Certain expenses are allocated based on actual usage rather than square footage:</p>
    <ul>
      <li><strong>Trash Removal:</strong> Based on dumpster pickups per tenant</li>
      <li><strong>After-Hours HVAC:</strong> Metered usage by tenant</li>
      <li><strong>Parking:</strong> Based on designated parking spaces per tenant</li>
    </ul>

    <h4>Gross-Up Provisions</h4>
    <p>When building occupancy is less than 95%, landlords often "gross up" variable expenses to what they would have been at full occupancy:</p>
    <p><strong>Rationale:</strong> Prevents remaining tenants from paying disproportionately high CAM when vacancies exist</p>
    <p><strong>Example:</strong> Building is 70% occupied; variable expenses (landscaping, snow removal) are grossed up as if building were 95% occupied, so occupied tenants don't subsidize vacant space costs</p>

    <h3>CAM Reconciliation Process</h3>
    
    <h4>Step 1: Estimate CAM Charges (Beginning of Year)</h4>
    <ol>
      <li>Landlord prepares annual CAM budget based on prior year actuals and anticipated changes</li>
      <li>CAM budget divided by 12 = monthly estimated CAM charge</li>
      <li>Each tenant pays estimated CAM monthly along with base rent</li>
      <li>Example: Annual CAM budget $120,000 ÷ 12 = $10,000/month collected from all tenants</li>
    </ol>

    <h4>Step 2: Track Actual CAM Expenses (Throughout Year)</h4>
    <ul>
      <li>Landlord maintains detailed accounting of all CAM-eligible expenses</li>
      <li>Expenses coded to specific CAM categories (maintenance, utilities, admin, etc.)</li>
      <li>Supporting documentation maintained (invoices, receipts, contracts)</li>
    </ul>

    <h4>Step 3: CAM Reconciliation Statement (End of Year)</h4>
    <ol>
      <li>Landlord compiles total actual CAM expenses for the year</li>
      <li>Calculates each tenant's pro-rata share of actual expenses</li>
      <li>Compares actual CAM to estimated CAM paid by each tenant</li>
      <li>Determines if tenant owes additional amount or receives refund</li>
      <li>Sends CAM reconciliation statement to each tenant (usually within 90-120 days after year-end)</li>
    </ol>

    <h4>Step 4: Settlement</h4>
    <ul>
      <li><strong>Overpayment:</strong> Landlord issues credit or refund to tenant</li>
      <li><strong>Underpayment:</strong> Landlord bills tenant for shortfall (due within 30 days typically)</li>
      <li><strong>Adjustment for Next Year:</strong> New estimated CAM charges may be adjusted based on actual expenses</li>
    </ul>

    <h3>CAM Reconciliation Example</h3>
    <p><strong>Property:</strong> 50,000 SF retail center</p>
    <p><strong>Tenant:</strong> 5,000 SF (10% of total space)</p>
    
    <p><strong>Estimated CAM (Paid Monthly):</strong></p>
    <ul>
      <li>Annual Estimate: $200,000</li>
      <li>Tenant's 10% Share: $20,000</li>
      <li>Monthly Payment: $1,667</li>
      <li>Total Paid for Year: $20,000</li>
    </ul>

    <p><strong>Actual CAM Expenses:</strong></p>
    <ul>
      <li>Maintenance & Repairs: $90,000</li>
      <li>Landscaping & Snow Removal: $40,000</li>
      <li>Utilities (Common Area): $35,000</li>
      <li>Security: $25,000</li>
      <li>Management Fees: $10,000</li>
      <li>Insurance & Admin: $15,000</li>
      <li><strong>Total Actual: $215,000</strong></li>
    </ul>

    <p><strong>Reconciliation:</strong></p>
    <ul>
      <li>Actual CAM: $215,000</li>
      <li>Tenant's 10% Share: $21,500</li>
      <li>Amount Paid (Estimated): $20,000</li>
      <li><strong>Amount Owed by Tenant: $1,500</strong></li>
    </ul>

    <h3>CAM Caps and Controls</h3>
    <p>Savvy tenants negotiate CAM protections in their leases:</p>
    
    <h4>CAM Caps (Controllable Expenses)</h4>
    <ul>
      <li><strong>Annual Increase Cap:</strong> Limits CAM increases to 3-5% per year</li>
      <li><strong>Fixed CAM:</strong> Tenant pays fixed dollar amount regardless of actual expenses</li>
      <li><strong>Controllable vs. Uncontrollable:</strong> Caps apply only to controllable expenses (maintenance, landscaping) not uncontrollable (insurance, utilities, taxes)</li>
    </ul>

    <h4>Expense Exclusions</h4>
    <p>Tenants often negotiate to exclude certain expenses from CAM:</p>
    <ul>
      <li><strong>Capital Improvements:</strong> New roof, parking lot reconstruction, major HVAC replacement</li>
      <li><strong>Leasing Costs:</strong> Broker commissions, tenant improvement allowances, lease negotiation legal fees</li>
      <li><strong>Depreciation and Interest:</strong> Loan payments, mortgage interest, depreciation</li>
      <li><strong>Landlord's Corporate Overhead:</strong> Off-site management, corporate salaries unrelated to property</li>
      <li><strong>Legal Fees for Disputes:</strong> Lawsuits, evictions, lease disputes</li>
      <li><strong>Bad Debt:</strong> Uncollected rent from other tenants</li>
    </ul>

    <h4>Audit Rights</h4>
    <ul>
      <li>Tenants typically have the right to audit CAM expenses (once per year)</li>
      <li>Must provide 30-60 days written notice</li>
      <li>Landlord must provide supporting documentation (invoices, contracts, receipts)</li>
      <li>If errors exceed 5%, landlord often pays for audit cost</li>
      <li>Audits frequently find 5-15% in improper charges</li>
    </ul>

    <h3>Common CAM Disputes and Issues</h3>
    
    <h4>Improper Expense Inclusion</h4>
    <ul>
      <li><strong>Capital Expenses:</strong> Landlords improperly charge roof replacement or parking lot reconstruction as CAM</li>
      <li><strong>Tenant-Specific Costs:</strong> Charging all tenants for repairs specific to one tenant's space</li>
      <li><strong>Vacant Space Costs:</strong> Charging tenants for utilities/services in vacant spaces</li>
      <li><strong>Duplicate Charges:</strong> Charging for services already covered in base rent</li>
    </ul>

    <h4>Gross-Up Disputes</h4>
    <ul>
      <li>Landlord grosses up expenses to 100% occupancy instead of 95% as specified in lease</li>
      <li>Fixed expenses (like security guard) grossed up when they shouldn't be</li>
      <li>Gross-up calculation errors inflate tenant's share</li>
    </ul>

    <h4>Management Fee Pyramiding</h4>
    <ul>
      <li>Management fee calculated on total expenses including management fee itself (circular calculation)</li>
      <li>Should be calculated on base expenses only</li>
      <li>Example: 5% management fee on $100k = $5k, not 5% on $105k = $5.25k</li>
    </ul>

    <h4>Expense Allocation Errors</h4>
    <ul>
      <li>Incorrect square footage used in pro-rata calculations</li>
      <li>Common area square footage improperly included in tenant's share</li>
      <li>Expenses allocated based on occupied space instead of leasable space</li>
    </ul>

    <h3>CAM Best Practices for Landlords</h3>
    <ul>
      <li><strong>Transparent Budgeting:</strong> Provide detailed CAM budget to tenants at lease signing</li>
      <li><strong>Accurate Record-Keeping:</strong> Maintain invoices, receipts, and contracts for all CAM expenses</li>
      <li><strong>Timely Reconciliation:</strong> Deliver reconciliation statements within 90-120 days of year-end</li>
      <li><strong>Clear Lease Language:</strong> Define CAM expenses, exclusions, allocation methods, and reconciliation procedures explicitly</li>
      <li><strong>Separate Accounting:</strong> Track CAM in separate accounts from base rent and other income</li>
      <li><strong>Professional Management:</strong> Use property management software to track CAM expenses by category</li>
      <li><strong>Regular Communication:</strong> Notify tenants of major expense increases or capital projects</li>
    </ul>

    <h3>CAM Best Practices for Tenants</h3>
    <ul>
      <li><strong>Negotiate CAM Caps:</strong> Limit annual increases to 3-5% for controllable expenses</li>
      <li><strong>Define Exclusions:</strong> Explicitly exclude capital improvements, leasing costs, and landlord overhead</li>
      <li><strong>Require Documentation:</strong> Lease should grant audit rights and access to supporting records</li>
      <li><strong>Review Reconciliations:</strong> Don't automatically pay CAM bills—review for errors</li>
      <li><strong>Benchmark CAM:</strong> Compare your CAM rate to market averages for similar properties</li>
      <li><strong>Base Year Protections:</strong> In multi-year leases, tie increases to base year, not prior year</li>
      <li><strong>Gross-Up Limits:</strong> Cap gross-up at 95% occupancy to prevent subsidizing vacant space</li>
    </ul>

    <h3>CAM Rates by Property Type</h3>
    <p><strong>Retail Centers:</strong> $3-$8 per square foot annually</p>
    <ul>
      <li>Strip Centers: $3-$5/SF</li>
      <li>Community Shopping Centers: $4-$7/SF</li>
      <li>Regional Malls: $6-$12/SF (higher due to extensive common areas)</li>
    </ul>

    <p><strong>Office Buildings:</strong> $4-$10 per square foot annually</p>
    <ul>
      <li>Suburban Office Parks: $4-$6/SF</li>
      <li>Class B Urban Office: $6-$8/SF</li>
      <li>Class A Urban Office: $8-$12/SF</li>
    </ul>

    <p><strong>Industrial/Warehouse:</strong> $0.50-$2 per square foot annually</p>
    <ul>
      <li>Minimal common areas result in lower CAM</li>
      <li>Often only parking lot and landscaping</li>
    </ul>

    <h3>Technology and CAM Management</h3>
    <p>Modern property management platforms streamline CAM tracking and reconciliation:</p>
    <ul>
      <li><strong>Automated Expense Coding:</strong> Software categorizes expenses into CAM buckets</li>
      <li><strong>Real-Time Reporting:</strong> Landlords and tenants can view CAM expense dashboards</li>
      <li><strong>Automated Reconciliation:</strong> Systems calculate tenant shares and generate statements automatically</li>
      <li><strong>Document Management:</strong> Digital storage of invoices and receipts for audit compliance</li>
      <li><strong>Tenant Portals:</strong> Tenants access CAM statements and supporting docs online</li>
      <li><strong>Variance Analysis:</strong> Software flags unusual expense increases for review</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the total leasable square footage of your commercial property, the tenant's leased square footage, total annual CAM expenses (or estimated budget), and the monthly CAM estimate the tenant has been paying. The calculator will compute the tenant's pro-rata share, compare actual expenses to estimated payments, and determine if the tenant owes additional CAM or is due a refund. Use this for annual CAM reconciliation statements or to estimate CAM charges for lease negotiations.</p>

    <h3>Conclusion</h3>
    <p>CAM reconciliation is a critical but often contentious aspect of commercial real estate management. Landlords must maintain meticulous records, allocate expenses accurately, and communicate transparently with tenants. Tenants should negotiate protective lease clauses, review reconciliation statements carefully, and exercise audit rights when discrepancies arise. Properly managed CAM programs ensure properties are well-maintained while distributing costs fairly among tenants. On average, commercial tenants pay $3-$10 per square foot annually in CAM charges, representing 10-30% of total occupancy costs alongside base rent.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalLeasableSF',
        label: 'Total Leasable Square Footage (Building)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'tenantSF',
        label: "Tenant's Leased Square Footage",
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'totalActualCAM',
        label: 'Total Actual CAM Expenses (Annual)',
        type: 'number',
        defaultValue: 215000,
      },
      {
        name: 'estimatedMonthlyCAM',
        label: "Tenant's Estimated Monthly CAM Payment",
        type: 'number',
        defaultValue: 1667,
      },
      {
        name: 'grossUpOccupancy',
        label: 'Gross-Up Occupancy Level (%)',
        type: 'number',
        defaultValue: 95,
      },
      {
        name: 'currentOccupancy',
        label: 'Current Occupancy Level (%)',
        type: 'number',
        defaultValue: 85,
      },
    ],
    results: [],
    calculate: (values) => {
      const { totalLeasableSF, tenantSF, totalActualCAM, estimatedMonthlyCAM, grossUpOccupancy, currentOccupancy } = values;

      const tenantPercentage = (tenantSF / totalLeasableSF) * 100;

      let adjustedCAM = totalActualCAM;
      if (currentOccupancy < grossUpOccupancy) {
        const grossUpFactor = grossUpOccupancy / currentOccupancy;
        const variableExpensePercentage = 0.6;
        const variableExpenses = totalActualCAM * variableExpensePercentage;
        const fixedExpenses = totalActualCAM * (1 - variableExpensePercentage);
        const grossedUpVariable = variableExpenses * grossUpFactor;
        adjustedCAM = grossedUpVariable + fixedExpenses;
      }

      const tenantActualShare = adjustedCAM * (tenantSF / totalLeasableSF);

      const estimatedAnnualPayments = estimatedMonthlyCAM * 12;

      const reconciliationAmount = tenantActualShare - estimatedAnnualPayments;

      const camPerSF = tenantActualShare / tenantSF;

      const monthlyActualCAM = tenantActualShare / 12;

      const percentVariance = ((tenantActualShare - estimatedAnnualPayments) / estimatedAnnualPayments) * 100;

      return [
        {
          label: 'Total Building Leasable SF',
          value: `${totalLeasableSF.toLocaleString()} SF`,
          type: 'text' as const,
        },
        {
          label: 'Tenant Leased SF',
          value: `${tenantSF.toLocaleString()} SF`,
          type: 'text' as const,
        },
        {
          label: "Tenant's Pro-Rata Share",
          value: `${tenantPercentage.toFixed(2)}%`,
          type: 'text' as const,
        },
        {
          label: 'Total Actual CAM Expenses',
          value: `$${totalActualCAM.toLocaleString()}`,
          type: 'text' as const,
        },
        {
          label: 'Gross-Up Adjustment',
          value:
            currentOccupancy < grossUpOccupancy
              ? `Applied (${currentOccupancy}% → ${grossUpOccupancy}%): Adjusted CAM = $${adjustedCAM.toLocaleString()}`
              : 'Not Applied (Occupancy ≥ Gross-Up Level)',
          type: 'text' as const,
        },
        {
          label: "Tenant's Actual CAM Share (Annual)",
          value: `$${tenantActualShare.toLocaleString()}`,
          type: 'text' as const,
        },
        {
          label: 'CAM Per Square Foot',
          value: `$${camPerSF.toFixed(2)}/SF annually`,
          type: 'text' as const,
        },
        {
          label: 'Estimated CAM Paid by Tenant',
          value: `$${estimatedAnnualPayments.toLocaleString()} ($${estimatedMonthlyCAM}/month × 12)`,
          type: 'text' as const,
        },
        {
          label: 'CAM Reconciliation Amount',
          value:
            reconciliationAmount >= 0
              ? `Tenant Owes: $${reconciliationAmount.toLocaleString()}`
              : `Landlord Refunds: $${Math.abs(reconciliationAmount).toLocaleString()}`,
          type: 'text' as const,
        },
        {
          label: 'Variance from Estimate',
          value: `${percentVariance >= 0 ? '+' : ''}${percentVariance.toFixed(1)}%`,
          type: 'text' as const,
        },
        {
          label: 'Adjusted Monthly CAM (for Next Year)',
          value: `$${monthlyActualCAM.toFixed(2)}`,
          type: 'text' as const,
        },
        {
          label: 'Monthly CAM Change',
          value:
            monthlyActualCAM > estimatedMonthlyCAM
              ? `Increase of $${(monthlyActualCAM - estimatedMonthlyCAM).toFixed(2)}/month`
              : `Decrease of $${(estimatedMonthlyCAM - monthlyActualCAM).toFixed(2)}/month`,
          type: 'text' as const,
        },
        {
          label: 'Reconciliation Summary',
          value: `Tenant ${tenantSF.toLocaleString()} SF (${tenantPercentage.toFixed(1)}% share) ${reconciliationAmount >= 0 ? 'owes' : 'receives'} $${Math.abs(reconciliationAmount).toLocaleString()} after reconciling actual CAM expenses of $${adjustedCAM.toLocaleString()} against estimated payments of $${estimatedAnnualPayments.toLocaleString()}. Recommended monthly CAM for next year: $${monthlyActualCAM.toFixed(2)}.`,
          type: 'text' as const,
        },
      ];
    },
  },
};
