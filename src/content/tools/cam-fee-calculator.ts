import { CalculatorContent } from '@/types';

export const CAM_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'CAM (Common Area Maintenance) Fee Calculator',
  description: 'Calculate Common Area Maintenance fees for commercial leases. Accurately estimate CAM charges, tenant share, and annual operating expenses.',
  slug: 'cam-fee-calculator',
  icon: '🏢',
  category: 'Commercial Real Estate',
  article: {
    title: 'Understanding CAM (Common Area Maintenance) Fees',
    content: `
    <h2>What are CAM Fees?</h2>
    <p>Common Area Maintenance (CAM) fees are operating expenses that tenants pay to maintain shared spaces in commercial properties. These fees cover the costs of maintaining, repairing, and operating common areas like lobbies, hallways, parking lots, landscaping, and exterior lighting.</p>
    
    <h3>What's Included in CAM Fees?</h3>
    <ul>
      <li><strong>Property Maintenance:</strong> Cleaning, repairs, and upkeep of common areas</li>
      <li><strong>Landscaping & Grounds:</strong> Lawn care, snow removal, and exterior maintenance</li>
      <li><strong>Utilities:</strong> Common area electricity, water, and HVAC</li>
      <li><strong>Security:</strong> Security systems, guards, and monitoring</li>
      <li><strong>Property Management:</strong> Administrative costs and management fees</li>
      <li><strong>Insurance:</strong> Property insurance for common areas</li>
      <li><strong>Property Taxes:</strong> Sometimes included in CAM or billed separately</li>
    </ul>

    <h3>How CAM Fees are Calculated</h3>
    <p>CAM fees are typically calculated using a pro-rata share based on the tenant's leased square footage compared to the total leasable area of the property. The formula is:</p>
    <p><strong>CAM Fee = (Total CAM Expenses × Tenant's Square Footage) ÷ Total Property Square Footage</strong></p>

    <h3>Types of CAM Structures</h3>
    <ul>
      <li><strong>Pro-Rata Share:</strong> Most common method - tenant pays based on their percentage of total space</li>
      <li><strong>Fixed CAM:</strong> Set monthly amount that doesn't fluctuate</li>
      <li><strong>Base Year Stop:</strong> Landlord pays expenses up to base year amount, tenant pays overage</li>
      <li><strong>Controllable vs. Uncontrollable:</strong> Some expenses capped at annual increase percentage</li>
    </ul>

    <h3>Important Tips for Tenants</h3>
    <ul>
      <li>Review CAM reconciliation statements annually for accuracy</li>
      <li>Negotiate CAM caps or exclusions in your lease</li>
      <li>Request audit rights in the lease agreement</li>
      <li>Understand which expenses are included vs. excluded</li>
      <li>Watch for "phantom CAM" charges from vacant spaces</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to calculate your CAM fees:</p>
    <ul>
      <li><strong>Total CAM Expenses:</strong> Annual operating expenses for the property</li>
      <li><strong>Total Property Square Footage:</strong> Total leasable area of the building</li>
      <li><strong>Your Leased Square Footage:</strong> Size of your rented space</li>
      <li><strong>Occupancy Rate (%):</strong> Percentage of property currently leased</li>
    </ul>
    <p>The calculator will show your pro-rata share percentage, annual CAM fee, and monthly CAM payment.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalCAMExpenses',
        label: 'Total Annual CAM Expenses ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'totalPropertySqFt',
        label: 'Total Property Square Footage',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'tenantSqFt',
        label: 'Your Leased Square Footage',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'occupancyRate',
        label: 'Property Occupancy Rate (%)',
        type: 'number',
        defaultValue: 90,
      },
    ],
    results: [
      { label: 'Your Pro-Rata Share (%)', isCurrency: false },
      { label: 'CAM Per Square Foot (Annual)', isCurrency: true },
      { label: 'Your Annual CAM Fee', isCurrency: true },
      { label: 'Your Monthly CAM Payment', isCurrency: true },
      { label: 'Adjusted CAM (Based on Occupancy)', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalCAMExpenses, totalPropertySqFt, tenantSqFt, occupancyRate } = values;
      
      // Calculate pro-rata share
      const proRataShare = (tenantSqFt / totalPropertySqFt) * 100;
      
      // Calculate CAM per square foot
      const camPerSqFt = totalCAMExpenses / totalPropertySqFt;
      
      // Calculate tenant's annual CAM fee
      const annualCAMFee = (totalCAMExpenses * tenantSqFt) / totalPropertySqFt;
      
      // Calculate monthly CAM payment
      const monthlyCAMPayment = annualCAMFee / 12;
      
      // Adjusted CAM based on occupancy (if landlord passes vacancy costs)
      const adjustedCAM = (totalCAMExpenses * tenantSqFt) / (totalPropertySqFt * (occupancyRate / 100));

      return [
        { label: 'Your Pro-Rata Share (%)', value: proRataShare.toFixed(2), isCurrency: false },
        { label: 'CAM Per Square Foot (Annual)', value: camPerSqFt.toFixed(2), isCurrency: true },
        { label: 'Your Annual CAM Fee', value: annualCAMFee.toFixed(2), isCurrency: true },
        { label: 'Your Monthly CAM Payment', value: monthlyCAMPayment.toFixed(2), isCurrency: true },
        { label: 'Adjusted CAM (Based on Occupancy)', value: adjustedCAM.toFixed(2), isCurrency: true },
      ];
    },
  },
};
