import { CalculatorContent } from '@/types';

export const LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Land Subdivision Cost Estimator',
  description: 'Estimate total costs and profitability for subdividing raw land into individual lots including infrastructure, permitting, and development expenses.',
  slug: 'land-subdivision-cost-estimator',
  icon: '🗺️',
  category: 'Investment Analysis',
  article: {
    title: 'Land Subdivision: Complete Guide to Development Costs and Profitability',
    content: `
    <h2>Understanding Land Subdivision</h2>
    <p>Land subdivision is the process of dividing a large parcel of land into smaller individual lots for sale or development. This strategy can significantly increase the value of raw land by creating buildable lots, but requires substantial capital, expertise, and regulatory navigation.</p>
    
    <h3>The Subdivision Process Overview</h3>
    <p>A typical subdivision project involves several key phases:</p>
    <ol>
      <li><strong>Feasibility Analysis:</strong> Market research, zoning review, and preliminary budgeting</li>
      <li><strong>Land Acquisition:</strong> Purchase of the parent parcel</li>
      <li><strong>Planning and Design:</strong> Engineering plans, surveys, and plat preparation</li>
      <li><strong>Permitting:</strong> Government approvals and regulatory compliance</li>
      <li><strong>Infrastructure Development:</strong> Roads, utilities, drainage, and improvements</li>
      <li><strong>Final Approval:</strong> Plat recording and lot creation</li>
      <li><strong>Marketing and Sales:</strong> Selling individual lots to builders or homebuyers</li>
    </ol>

    <h3>Major Cost Categories in Land Subdivision</h3>
    <ul>
      <li><strong>Land Acquisition:</strong> Purchase price of the parent parcel</li>
      <li><strong>Planning and Engineering:</strong> Surveys, site plans, civil engineering ($50,000-$150,000+)</li>
      <li><strong>Permitting and Fees:</strong> Government fees, impact fees, development fees ($10,000-$100,000+ per lot)</li>
      <li><strong>Site Preparation:</strong> Grading, clearing, demolition ($10,000-$50,000 per acre)</li>
      <li><strong>Infrastructure:</strong> Roads, water, sewer, drainage ($50,000-$200,000 per lot)</li>
      <li><strong>Utilities:</strong> Electric, gas, communications ($5,000-$20,000 per lot)</li>
      <li><strong>Professional Services:</strong> Legal, accounting, consulting (3-5% of total costs)</li>
      <li><strong>Financing Costs:</strong> Interest, loan fees (varies with project duration)</li>
      <li><strong>Marketing and Sales:</strong> Commissions, advertising (5-10% of sales)</li>
    </ul>

    <h3>Infrastructure Requirements</h3>
    <p>Most jurisdictions require subdividers to install:</p>
    <ul>
      <li><strong>Roads:</strong> Paved streets, curbs, gutters, sidewalks ($100-$300 per linear foot)</li>
      <li><strong>Water Lines:</strong> Main lines and laterals to each lot ($75-$150 per linear foot)</li>
      <li><strong>Sewer Lines:</strong> Collection systems and connections ($100-$200 per linear foot)</li>
      <li><strong>Storm Drainage:</strong> Pipes, detention ponds, swales ($50,000-$200,000+)</li>
      <li><strong>Street Lighting:</strong> Poles, fixtures, and electrical ($5,000-$15,000 per light)</li>
      <li><strong>Landscaping:</strong> Entry features, common areas ($50,000-$200,000+)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your subdivision project parameters:</p>
    <ul>
      <li><strong>Total Acreage:</strong> Size of the parent parcel to be subdivided</li>
      <li><strong>Number of Lots:</strong> Planned lot count based on zoning and design</li>
      <li><strong>Land Cost Per Acre:</strong> Purchase price of the parent parcel</li>
      <li><strong>Infrastructure Cost Per Lot:</strong> Roads, utilities, drainage per lot</li>
      <li><strong>Planning and Engineering:</strong> Total professional service costs</li>
      <li><strong>Permitting and Impact Fees:</strong> Per lot government fees</li>
      <li><strong>Expected Lot Sale Price:</strong> Projected price per finished lot</li>
      <li><strong>Marketing and Sales Costs:</strong> Percentage of gross sales</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total Land Cost:</strong> Acquisition cost of parent parcel</li>
      <li><strong>Total Infrastructure Cost:</strong> All development and improvement costs</li>
      <li><strong>Total Development Cost:</strong> All-in project costs</li>
      <li><strong>Cost Per Lot:</strong> Average cost to create each finished lot</li>
      <li><strong>Gross Sales Revenue:</strong> Total revenue from all lot sales</li>
      <li><strong>Net Profit:</strong> Revenue minus all costs</li>
      <li><strong>ROI:</strong> Return on total investment</li>
      <li><strong>Profit Per Lot:</strong> Average profit per lot sold</li>
    </ul>

    <h3>Zoning and Density Considerations</h3>
    <p>Understanding zoning is critical to subdivision feasibility:</p>
    <ul>
      <li><strong>Minimum Lot Size:</strong> Zoning dictates minimum dimensions and area</li>
      <li><strong>Density Limits:</strong> Maximum units per acre restrictions</li>
      <li><strong>Setback Requirements:</strong> Building line restrictions reduce usable area</li>
      <li><strong>Open Space Requirements:</strong> Percentage reserved for parks or conservation</li>
      <li><strong>Street Frontage:</strong> Minimum lot width along street</li>
      <li><strong>Clustering Provisions:</strong> Allows smaller lots in exchange for open space</li>
    </ul>

    <h3>Regulatory Approval Process</h3>
    <p>Subdivision typically requires multiple approvals:</p>
    <ul>
      <li>Preliminary plat or subdivision plan approval</li>
      <li>Environmental impact review and mitigation</li>
      <li>Traffic impact study and road improvements</li>
      <li>Stormwater management plan approval</li>
      <li>Utility provider capacity verification</li>
      <li>Final plat approval and recording</li>
      <li>Building permit readiness certification</li>
    </ul>

    <h3>Market Analysis for Subdivision Projects</h3>
    <p>Conduct thorough market research before proceeding:</p>
    <ul>
      <li>Analyze comparable lot sales in the area (past 12-24 months)</li>
      <li>Assess absorption rates - how quickly lots are selling</li>
      <li>Study builder activity and inventory levels</li>
      <li>Evaluate competing subdivisions and pricing</li>
      <li>Research demographic trends and housing demand</li>
      <li>Consider economic indicators affecting new construction</li>
    </ul>

    <h3>Financing Subdivision Development</h3>
    <ul>
      <li><strong>Land Development Loans:</strong> Short-term construction financing</li>
      <li><strong>Typical Terms:</strong> 1-3 years, floating rate, 30-50% down</li>
      <li><strong>Draw Schedule:</strong> Funds released as work is completed and inspected</li>
      <li><strong>Personal Guarantees:</strong> Often required by lenders</li>
      <li><strong>Interest Reserve:</strong> Funds set aside to cover interest during development</li>
      <li><strong>Exit Strategy:</strong> Lot sales to repay loan as project sells out</li>
    </ul>

    <h3>Risk Factors and Mitigation</h3>
    <ul>
      <li><strong>Market Risk:</strong> Housing downturn during development - mitigate with strong feasibility</li>
      <li><strong>Regulatory Risk:</strong> Permit delays or denials - engage early with officials</li>
      <li><strong>Cost Overruns:</strong> Unexpected site conditions - include 10-20% contingency</li>
      <li><strong>Environmental Issues:</strong> Wetlands or contamination - conduct thorough due diligence</li>
      <li><strong>Interest Rate Risk:</strong> Rising rates increase carry costs - consider rate locks</li>
      <li><strong>Utility Capacity:</strong> Insufficient capacity delays project - verify early</li>
    </ul>

    <h3>Value Engineering Strategies</h3>
    <p>Reduce costs without compromising quality:</p>
    <ul>
      <li>Optimize lot layout to minimize infrastructure length</li>
      <li>Phase development to match market absorption</li>
      <li>Negotiate impact fee reductions or deferrals</li>
      <li>Use alternative materials where allowed</li>
      <li>Consolidate grading and earthwork operations</li>
      <li>Seek variances for more efficient design</li>
    </ul>

    <h3>Sales and Marketing Strategies</h3>
    <ul>
      <li><strong>Target Buyers:</strong> Local and regional homebuilders</li>
      <li><strong>Bulk Sales:</strong> Offer discounts for multiple lot purchases</li>
      <li><strong>Builder Relationships:</strong> Pre-sell lots before development</li>
      <li><strong>Marketing Materials:</strong> Professional plat maps, renderings, and specifications</li>
      <li><strong>Financing Terms:</strong> Consider seller financing to facilitate sales</li>
      <li><strong>Model Homes:</strong> Partner with builder for showcase homes</li>
    </ul>

    <h3>Best Practices for Subdivision Success</h3>
    <ul>
      <li>Start with comprehensive feasibility analysis</li>
      <li>Hire experienced civil engineers and land planners</li>
      <li>Build strong relationships with local officials</li>
      <li>Include adequate contingency in budget (15-20%)</li>
      <li>Obtain all permits before starting construction</li>
      <li>Monitor costs closely against budget</li>
      <li>Market lots while development is underway</li>
      <li>Consider phased development to reduce risk</li>
    </ul>

    <h3>Tax Considerations</h3>
    <ul>
      <li>Development costs capitalized and allocated to lots</li>
      <li>Ordinary income tax treatment on lot sales (dealer property)</li>
      <li>No 1031 exchange eligibility for dealer property</li>
      <li>Consider S-corp or LLC structure for liability protection</li>
      <li>Carry costs may be deductible or capitalized</li>
      <li>State and local transfer taxes on lot sales</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Underestimating infrastructure costs by 30-50%</li>
      <li>Failing to verify utility capacity before purchase</li>
      <li>Ignoring wetlands or environmental constraints</li>
      <li>Over-optimizing lot count without market validation</li>
      <li>Starting development without complete financing</li>
      <li>Neglecting adequate contingency reserves</li>
      <li>Poor quality control on infrastructure installation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalAcreage',
        label: 'Total Acreage',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'numberOfLots',
        label: 'Number of Lots',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'landCostPerAcre',
        label: 'Land Cost Per Acre',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'infrastructurePerLot',
        label: 'Infrastructure Cost Per Lot',
        type: 'number',
        defaultValue: 35000,
      },
      {
        name: 'planningEngineering',
        label: 'Planning & Engineering (Total)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'permitFeesPerLot',
        label: 'Permit & Impact Fees Per Lot',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'lotSalePrice',
        label: 'Expected Lot Sale Price',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'salesCosts',
        label: 'Marketing & Sales Costs (%)',
        type: 'number',
        defaultValue: 8,
      },
    ],
    results: [
      { label: 'Total Land Cost', isCurrency: true },
      { label: 'Total Infrastructure Cost', isCurrency: true },
      { label: 'Total Permit & Impact Fees', isCurrency: true },
      { label: 'Total Development Cost', isCurrency: true },
      { label: 'Cost Per Lot', isCurrency: true },
      { label: 'Gross Sales Revenue', isCurrency: true },
      { label: 'Total Sales Costs', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'ROI', isPercentage: true },
      { label: 'Profit Per Lot', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalAcreage, numberOfLots, landCostPerAcre, infrastructurePerLot, planningEngineering, permitFeesPerLot, lotSalePrice, salesCosts } = values;
      
      const totalLandCost = totalAcreage * landCostPerAcre;
      const totalInfrastructure = infrastructurePerLot * numberOfLots;
      const totalPermitFees = permitFeesPerLot * numberOfLots;
      const totalDevCost = totalLandCost + totalInfrastructure + totalPermitFees + planningEngineering;
      const costPerLot = totalDevCost / numberOfLots;
      const grossRevenue = lotSalePrice * numberOfLots;
      const totalSalesCosts = grossRevenue * (salesCosts / 100);
      const netProfit = grossRevenue - totalDevCost - totalSalesCosts;
      const roi = (netProfit / totalDevCost) * 100;
      const profitPerLot = netProfit / numberOfLots;

      return [
        { label: 'Total Land Cost', value: totalLandCost.toFixed(2), isCurrency: true },
        { label: 'Total Infrastructure Cost', value: totalInfrastructure.toFixed(2), isCurrency: true },
        { label: 'Total Permit & Impact Fees', value: totalPermitFees.toFixed(2), isCurrency: true },
        { label: 'Total Development Cost', value: totalDevCost.toFixed(2), isCurrency: true },
        { label: 'Cost Per Lot', value: costPerLot.toFixed(2), isCurrency: true },
        { label: 'Gross Sales Revenue', value: grossRevenue.toFixed(2), isCurrency: true },
        { label: 'Total Sales Costs', value: totalSalesCosts.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'ROI', value: roi.toFixed(2), isPercentage: true },
        { label: 'Profit Per Lot', value: profitPerLot.toFixed(2), isCurrency: true },
      ];
    },
  },
};
