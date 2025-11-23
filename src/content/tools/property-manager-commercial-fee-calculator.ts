import { CalculatorContent } from '@/types';

export const PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Property Manager Fee Calculator (Commercial)',
  description: 'Calculate commercial property management fees including monthly management, leasing commissions, maintenance markups, and additional service costs.',
  icon: '🏬',
  category: 'Rental & Income',
  slug: 'property-manager-commercial-fee-calculator',
  article: {
    title: 'Understanding Commercial Property Management Fees',
    content: `
<h2>Commercial Property Management Fee Structure</h2>
<p>Commercial property managers typically charge multiple fees including monthly management, leasing commissions, and markups on services. Understanding these costs is essential for accurate NOI calculations.</p>

<h3>Common Fee Types</h3>
<ul>
  <li><strong>Monthly Management Fee:</strong> 3-10% of gross rent collected</li>
  <li><strong>Leasing Commission:</strong> 3-6% of total lease value or one month's rent</li>
  <li><strong>Tenant Placement Fee:</strong> 50-100% of one month's rent</li>
  <li><strong>Maintenance Markup:</strong> 10-20% on contractor services</li>
  <li><strong>Construction Management:</strong> 5-15% of project cost</li>
  <li><strong>Lease Renewal Fee:</strong> 10-50% of one month's rent</li>
</ul>

<h3>Fee Variations by Property Type</h3>
<ul>
  <li><strong>Office Buildings:</strong> 3-5% monthly</li>
  <li><strong>Retail Centers:</strong> 3-6% monthly</li>
  <li><strong>Industrial/Warehouse:</strong> 3-5% monthly</li>
  <li><strong>Mixed-Use:</strong> 4-7% monthly</li>
  <li><strong>Multi-Family:</strong> 8-12% monthly (higher than commercial)</li>
</ul>
`,
  },
  calculator: {
    fields: [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        defaultValue: 'office',
        options: [
          { value: 'office', label: 'Office Building' },
          { value: 'retail', label: 'Retail Center' },
          { value: 'industrial', label: 'Industrial/Warehouse' },
          { value: 'mixedUse', label: 'Mixed-Use' },
          { value: 'multiFamily', label: 'Multi-Family (5+ units)' },
        ],
      },
      {
        name: 'monthlyRent',
        label: 'Monthly Gross Rent',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'includeLeasing',
        label: 'Include Leasing Commission?',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'No (Existing Tenants)' },
          { value: 'yes', label: 'Yes (New Lease)' },
        ],
      },
      {
        name: 'leaseValue',
        label: 'Total Lease Value (if new lease)',
        type: 'number',
        defaultValue: 180000,
      },
      {
        name: 'maintenanceSpend',
        label: 'Monthly Maintenance/Repairs',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [
      { label: "Monthly Management Fee", isCurrency: true },
      { label: "Leasing Commission", isCurrency: true },
      { label: "Maintenance Markup", isCurrency: true },
      { label: "Total First Year Cost", isCurrency: true }
    ],
    calculate: (data) => {
      const { propertyType, monthlyRent, includeLeasing, leaseValue, maintenanceSpend } = data;
      
      // Management fee percentages by property type
      const managementRates: Record<string, number> = {
        office: 0.04,
        retail: 0.045,
        industrial: 0.04,
        mixedUse: 0.05,
        multiFamily: 0.10,
      };
      
      const managementRate = managementRates[propertyType] || 0.04;
      const monthlyManagementFee = monthlyRent * managementRate;
      
      // Leasing commission (if applicable)
      let leasingCommission = 0;
      if (includeLeasing === 'yes') {
        // Typically 4-6% of total lease value
        const leasingRate = propertyType === 'multiFamily' ? 0.5 : 0.05; // 50% of one month for MF, 5% of lease value for commercial
        leasingCommission = propertyType === 'multiFamily' 
          ? monthlyRent * leasingRate 
          : leaseValue * leasingRate;
      }
      
      // Maintenance markup (10-15%)
      const maintenanceMarkup = maintenanceSpend * 0.125; // 12.5% average
      
      // Total first year costs
      const annualManagementFee = monthlyManagementFee * 12;
      const annualMaintenanceMarkup = maintenanceMarkup * 12;
      const firstYearTotal = annualManagementFee + leasingCommission + annualMaintenanceMarkup;
      
      return [
        { label: 'Monthly Management Fee', value: `$${Math.round(monthlyManagementFee).toLocaleString()} (${(managementRate * 100).toFixed(1)}%)` },
        { label: 'Leasing Commission', value: includeLeasing === 'yes' ? `$${Math.round(leasingCommission).toLocaleString()}` : 'N/A' },
        { label: 'Maintenance Markup', value: `$${Math.round(maintenanceMarkup).toLocaleString()}/month (12.5%)` },
        { label: 'Total First Year Cost', value: `$${Math.round(firstYearTotal).toLocaleString()}` }
      ];
    },
  },
};
