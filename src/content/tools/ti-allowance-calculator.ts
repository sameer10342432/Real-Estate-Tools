import { CalculatorContent } from '@/types';

export const TI_ALLOWANCE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Tenant Improvement (TI) Allowance Calculator',
  description: 'Calculate tenant improvement allowances for commercial leases. Estimate buildout costs, TI contributions, and out-of-pocket expenses for office space.',
  slug: 'ti-allowance-calculator',
  icon: '🔨',
  category: 'Commercial Real Estate',
  article: {
    title: 'Tenant Improvement Allowances: Complete Guide',
    content: `
    <h2>What is a Tenant Improvement (TI) Allowance?</h2>
    <p>A Tenant Improvement (TI) allowance is a sum of money that a landlord provides to a tenant to customize or improve a leased commercial space. Also called a "buildout allowance" or "work letter," it helps offset the cost of constructing offices, installing fixtures, and preparing the space for occupancy.</p>
    
    <h3>How TI Allowances Work</h3>
    <p>TI allowances are typically expressed as a dollar amount per square foot:</p>
    <ul>
      <li><strong>Standard Allowance:</strong> Basic improvements (paint, carpet, lighting)</li>
      <li><strong>Enhanced Allowance:</strong> More extensive buildout (offices, conference rooms)</li>
      <li><strong>Turnkey Build out:</strong> Landlord completes all work per tenant specifications</li>
    </ul>

    <h3>Typical TI Allowance Ranges</h3>
    <ul>
      <li><strong>Class A Office (Shell):</strong> $50-$100+ per SF</li>
      <li><strong>Class A Office (Existing Build out):</strong> $20-$40 per SF</li>
      <li><strong>Class B Office:</strong> $25-$50 per SF</li>
      <li><strong>Medical Office:</strong> $75-$150+ per SF (extensive requirements)</li>
      <li><strong>Retail Space:</strong> $25-$75 per SF</li>
      <li><strong>Industrial/Warehouse:</strong> $5-$15 per SF</li>
      <li><strong>Creative/Tech Space:</strong> $60-$120+ per SF</li>
    </ul>

    <h3>What TI Allowances Typically Cover</h3>
    <ul>
      <li><strong>Interior Construction:</strong> Walls, doors, ceiling finishes</li>
      <li><strong>Flooring:</strong> Carpet, tile, hardwood, or other finishes</li>
      <li><strong>Paint & Finishes:</strong> Wall paint, wallcovering, trim</li>
      <li><strong>Lighting:</strong> Interior lighting fixtures and controls</li>
      <li><strong>HVAC Distribution:</strong> Ductwork and diffusers (not base system)</li>
      <li><strong>Electrical:</strong> Outlets, switches, data cabling</li>
      <li><strong>Plumbing:</strong> Break room sinks, water fountains</li>
      <li><strong>Millwork:</strong> Cabinetry, shelving, reception desk</li>
    </ul>

    <h3>What's Typically NOT Covered</h3>
    <ul>
      <li>Furniture and equipment</li>
      <li>Signage (exterior and sometimes interior)</li>
      <li>Security systems beyond base building</li>
      <li>Specialized equipment (lab, medical, restaurant)</li>
      <li>IT equipment and servers</li>
      <li>Moving costs</li>
      <li>Permit fees (sometimes)</li>
    </ul>

    <h3>Types of TI Structures</h3>
    <ul>
      <li><strong>Cash Allowance:</strong> Landlord provides funds, tenant manages construction</li>
      <li><strong>Work Letter:</strong> Landlord performs work up to allowance amount</li>
      <li><strong>Turnkey:</strong> Landlord completes all work per tenant plans</li>
      <li><strong>Amortized TI:</strong> Allowance added to rent over lease term</li>
    </ul>

    <h3>TI Allowance vs. Rent Relationship</h3>
    <p>Higher TI allowances often correlate with:</p>
    <ul>
      <li>Higher base rent (landlord recoups cost)</li>
      <li>Longer lease terms (amortization period)</li>
      <li>Below-market TI may indicate above-market rent</li>
      <li>Typical amortization: Cost spread over 7-10 years at 8-10% interest</li>
    </ul>

    <h3>Negotiating TI Allowances</h3>
    <ul>
      <li><strong>Get Multiple Bids:</strong> Provide estimates to support higher allowance request</li>
      <li><strong>Longer Lease = More TI:</strong> Landlord has longer to recoup investment</li>
      <li><strong>Request Breakdown:</strong> Ask what's included in standard allowance</li>
      <li><strong>Excess TI Credit:</strong> Negotiate rent credit if you don't use full allowance</li>
      <li><strong>Consider Cash vs. Rent:</strong> Sometimes lower rent is better than high TI</li>
    </ul>

    <h3>Shell Space vs. Second Generation</h3>
    <ul>
      <li><strong>Shell Space:</strong> Empty space, requires full buildout, higher TI needed</li>
      <li><strong>Second Generation:</strong> Previous tenant improvements remain, lower TI needed</li>
      <li><strong>As-Is Condition:</strong> Take existing improvements, minimal/no TI</li>
    </ul>

    <h3>Cost Control Strategies</h3>
    <ul>
      <li>Retain existing improvements when possible</li>
      <li>Use standard finishes vs. custom/luxury</li>
      <li>Minimize structural changes</li>
      <li>Open plan reduces costs vs. many private offices</li>
      <li>Hire your own project manager to oversee landlord's work</li>
      <li>Get competitive bids from contractors</li>
    </ul>

    <h3>Hidden TI Costs to Watch</h3>
    <ul>
      <li><strong>Design Fees:</strong> Architect and engineer costs (5-10% of construction)</li>
      <li><strong>Permit & Inspection Fees:</strong> Municipal charges</li>
      <li><strong>Project Management:</strong> Oversight fees (often included but verify)</li>
      <li><strong>FF&E:</strong> Furniture, fixtures, equipment not covered by TI</li>
      <li><strong>Technology:</strong> Phone system, network equipment, AV</li>
      <li><strong>Contingency:</strong> Budget 10-15% for unexpected issues</li>
    </ul>

    <h3>Timing Considerations</h3>
    <ul>
      <li><strong>Design Phase:</strong> 4-8 weeks</li>
      <li><strong>Permitting:</strong> 2-6 weeks</li>
      <li><strong>Construction:</strong> 8-16 weeks (varies by scope)</li>
      <li><strong>Total Timeline:</strong> 4-8 months from LOI to occupancy</li>
      <li><strong>Rent Abatement:</strong> Negotiate free rent during construction</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate your TI costs and funding gap:</p>
    <ul>
      <li><strong>Leased Square Footage:</strong> Size of your space</li>
      <li><strong>TI Allowance Per SF:</strong> Landlord's contribution per square foot</li>
      <li><strong>Estimated Construction Cost Per SF:</strong> Your projected buildout cost</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'leasedSqFt',
        label: 'Leased Square Footage',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'tiAllowancePerSF',
        label: 'TI Allowance Per SF ($)',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'estimatedCostPerSF',
        label: 'Estimated Construction Cost Per SF ($)',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'designFeePercent',
        label: 'Design/Architect Fee (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'contingencyPercent',
        label: 'Contingency (%)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'Total TI Allowance', isCurrency: true },
      { label: 'Base Construction Cost', isCurrency: true },
      { label: 'Design/Architect Fees', isCurrency: true },
      { label: 'Contingency Fund', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Out-of-Pocket Cost', isCurrency: true },
      { label: 'TI Coverage (%)', isCurrency: false },
    ],
    calculate: (values) => {
      const { leasedSqFt, tiAllowancePerSF, estimatedCostPerSF, designFeePercent, contingencyPercent } = values;
      
      // Calculate TI allowance
      const totalTIAllowance = leasedSqFt * tiAllowancePerSF;
      
      // Calculate base construction cost
      const baseConstructionCost = leasedSqFt * estimatedCostPerSF;
      
      // Calculate design fees
      const designFees = baseConstructionCost * (designFeePercent / 100);
      
      // Calculate contingency
      const contingency = baseConstructionCost * (contingencyPercent / 100);
      
      // Calculate total project cost
      const totalProjectCost = baseConstructionCost + designFees + contingency;
      
      // Calculate out-of-pocket cost
      const outOfPocket = Math.max(0, totalProjectCost - totalTIAllowance);
      
      // Calculate TI coverage percentage
      const tiCoverage = (totalTIAllowance / totalProjectCost) * 100;

      return [
        { label: 'Total TI Allowance', value: totalTIAllowance.toFixed(2), isCurrency: true },
        { label: 'Base Construction Cost', value: baseConstructionCost.toFixed(2), isCurrency: true },
        { label: 'Design/Architect Fees', value: designFees.toFixed(2), isCurrency: true },
        { label: 'Contingency Fund', value: contingency.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Out-of-Pocket Cost', value: outOfPocket.toFixed(2), isCurrency: true },
        { label: 'TI Coverage (%)', value: tiCoverage.toFixed(1), isCurrency: false },
      ];
    },
  },
};
