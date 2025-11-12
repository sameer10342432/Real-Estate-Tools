import { CalculatorContent } from '@/types';

export const HIGHEST_AND_BEST_USE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Highest and Best Use Analyzer (Land)',
  description: 'Determine the most profitable use for raw land by comparing residential, commercial, industrial, and agricultural development scenarios.',
  slug: 'highest-and-best-use-analyzer',
  icon: '🎯',
  category: 'Investment Analysis',
  article: {
    title: 'Highest and Best Use Analysis: Maximizing Land Value Through Strategic Planning',
    content: `
    <h2>What is Highest and Best Use?</h2>
    <p>Highest and Best Use (HBU) is a fundamental concept in real estate appraisal and development that identifies the use of land that will generate the maximum value. This analysis considers what is legally permissible, physically possible, financially feasible, and maximally productive.</p>
    
    <h3>The Four Criteria of Highest and Best Use</h3>
    <p>For a use to qualify as highest and best, it must meet all four tests:</p>
    <ol>
      <li><strong>Legally Permissible:</strong> The use must be allowed under current zoning or obtainable through rezoning</li>
      <li><strong>Physically Possible:</strong> Site characteristics (size, shape, topography, utilities) must support the use</li>
      <li><strong>Financially Feasible:</strong> The use must generate positive returns after all development costs</li>
      <li><strong>Maximally Productive:</strong> Among feasible alternatives, it produces the highest land value</li>
    </ol>

    <h3>Common Land Use Categories</h3>
    <ul>
      <li><strong>Residential Development:</strong> Single-family, townhomes, apartments, condominiums</li>
      <li><strong>Commercial Development:</strong> Retail, office, mixed-use, hospitality</li>
      <li><strong>Industrial Development:</strong> Manufacturing, warehousing, distribution centers</li>
      <li><strong>Agricultural Use:</strong> Farming, ranching, timber production</li>
      <li><strong>Institutional Use:</strong> Schools, hospitals, government facilities</li>
      <li><strong>Special Purpose:</strong> Golf courses, solar farms, cell towers</li>
      <li><strong>Conservation:</strong> Easements, land banking, environmental preservation</li>
    </ul>

    <h3>Residential Development Analysis</h3>
    <p>Key considerations for residential highest and best use:</p>
    <ul>
      <li><strong>Density Allowed:</strong> Units per acre permitted by zoning</li>
      <li><strong>Market Demand:</strong> Absorption rates for homes or apartments</li>
      <li><strong>Price Points:</strong> Sale prices or rental rates achievable</li>
      <li><strong>Development Costs:</strong> Site work, infrastructure, construction costs</li>
      <li><strong>Timeline:</strong> Entitlement, development, and sellout period</li>
      <li><strong>Competition:</strong> Supply and inventory in the market</li>
    </ul>

    <h3>Commercial Development Analysis</h3>
    <p>Commercial viability depends on:</p>
    <ul>
      <li><strong>Traffic Counts:</strong> Vehicle and pedestrian traffic exposure</li>
      <li><strong>Demographics:</strong> Population, income, and spending patterns</li>
      <li><strong>Visibility and Access:</strong> Corner lots and signalized intersections</li>
      <li><strong>Anchor Tenants:</strong> Major retailers or employers nearby</li>
      <li><strong>Lease Rates:</strong> Market rent per square foot for different uses</li>
      <li><strong>Cap Rates:</strong> Investment yields for income-producing property</li>
    </ul>

    <h3>Industrial Development Analysis</h3>
    <p>Industrial suitability factors:</p>
    <ul>
      <li><strong>Transportation Access:</strong> Proximity to highways, rail, ports</li>
      <li><strong>Utilities:</strong> Heavy power, water, and sewer capacity</li>
      <li><strong>Labor Pool:</strong> Available workforce for operations</li>
      <li><strong>Site Size:</strong> Large parcels for warehouses or manufacturing</li>
      <li><strong>Zoning Compatibility:</strong> Industrial zoning or business parks</li>
      <li><strong>Environmental:</strong> Ability to handle industrial uses</li>
    </ul>

    <h3>How to Use This Analyzer</h3>
    <p>Compare different land use scenarios by inputting:</p>
    <ul>
      <li><strong>Land Area:</strong> Total acreage of the property</li>
      <li><strong>Development Cost Per Acre:</strong> Site preparation and infrastructure costs for each use</li>
      <li><strong>Residential Value:</strong> Value per acre if developed residentially</li>
      <li><strong>Commercial Value:</strong> Value per acre if developed commercially</li>
      <li><strong>Industrial Value:</strong> Value per acre if developed industrially</li>
      <li><strong>Agricultural Value:</strong> Value per acre if kept in agricultural use</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Net Value Per Acre:</strong> Gross value minus development costs</li>
      <li><strong>Total Net Value:</strong> Net value across entire property</li>
      <li><strong>Recommended Use:</strong> Use generating highest net value</li>
      <li><strong>Value Comparison:</strong> Difference between best and alternative uses</li>
    </ul>

    <h3>Market Analysis Requirements</h3>
    <p>Thorough highest and best use analysis requires:</p>
    <ul>
      <li>Comprehensive market demand study for each potential use</li>
      <li>Supply analysis of competing properties and developments</li>
      <li>Absorption rate projections based on historical data</li>
      <li>Price trend analysis for relevant property types</li>
      <li>Economic base analysis of local employment and growth</li>
      <li>Demographic trends affecting housing and retail demand</li>
    </ul>

    <h3>Zoning and Entitlement Considerations</h3>
    <p>Legal permissibility assessment:</p>
    <ul>
      <li>Review current zoning designation and allowed uses</li>
      <li>Evaluate likelihood of rezoning approval if needed</li>
      <li>Assess environmental regulations and constraints</li>
      <li>Consider impact fees and development requirements</li>
      <li>Research comprehensive plan designations</li>
      <li>Understand variance or special use permit requirements</li>
    </ul>

    <h3>Physical Feasibility Assessment</h3>
    <p>Site characteristics to evaluate:</p>
    <ul>
      <li><strong>Topography:</strong> Slopes exceeding 15% limit development</li>
      <li><strong>Soil Conditions:</strong> Bearing capacity and drainage characteristics</li>
      <li><strong>Wetlands:</strong> Protected areas reducing buildable land</li>
      <li><strong>Floodplains:</strong> FEMA flood zones limiting development</li>
      <li><strong>Utilities:</strong> Water, sewer, electric, gas availability</li>
      <li><strong>Access:</strong> Road frontage and ingress/egress rights</li>
      <li><strong>Environmental:</strong> Contamination or endangered species</li>
    </ul>

    <h3>Financial Feasibility Testing</h3>
    <p>Economic viability analysis includes:</p>
    <ul>
      <li>Development pro forma with all costs and revenues</li>
      <li>Cash flow projections during development period</li>
      <li>IRR and ROI calculations for each alternative</li>
      <li>Sensitivity analysis for key assumptions</li>
      <li>Financing availability and cost of capital</li>
      <li>Risk-adjusted return requirements</li>
    </ul>

    <h3>Timing Considerations</h3>
    <p>Current vs. future highest and best use:</p>
    <ul>
      <li><strong>Interim Use:</strong> Temporary use while waiting for optimal timing</li>
      <li><strong>Agricultural Holding:</strong> Farm or lease land pending development</li>
      <li><strong>Land Banking:</strong> Hold for future appreciation and development</li>
      <li><strong>Phased Development:</strong> Develop in stages as market absorbs product</li>
      <li><strong>Market Timing:</strong> Wait for infrastructure or demographic shifts</li>
    </ul>

    <h3>Mixed-Use Development</h3>
    <p>Combining uses for maximum value:</p>
    <ul>
      <li>Residential over retail in walkable urban locations</li>
      <li>Office and hotel combinations near employment centers</li>
      <li>Industrial and flex-office in business parks</li>
      <li>Residential and agricultural in conservation developments</li>
      <li>Benefits include diversified income and synergies between uses</li>
    </ul>

    <h3>Site Planning and Optimization</h3>
    <p>Maximize development potential through:</p>
    <ul>
      <li>Cluster development to preserve open space</li>
      <li>Planned unit developments for flexible zoning</li>
      <li>Transfer of development rights from constrained areas</li>
      <li>Density bonuses for affordable housing or amenities</li>
      <li>Creative site design to optimize usable land</li>
    </ul>

    <h3>Environmental and Sustainability</h3>
    <p>Highest and best use increasingly considers:</p>
    <ul>
      <li>Green building and LEED certification potential</li>
      <li>Renewable energy opportunities (solar, wind)</li>
      <li>Water conservation and stormwater management</li>
      <li>Transit-oriented development near public transportation</li>
      <li>Climate resilience and adaptation</li>
      <li>Carbon sequestration through conservation</li>
    </ul>

    <h3>Alternative Land Uses</h3>
    <p>Specialized uses sometimes proving optimal:</p>
    <ul>
      <li><strong>Solar Farms:</strong> Long-term leases generating steady income</li>
      <li><strong>Cell Towers:</strong> Lease ground with minimal land consumption</li>
      <li><strong>Billboard Sites:</strong> Advertising revenue on high-traffic corridors</li>
      <li><strong>Storage Facilities:</strong> Self-storage or RV/boat storage</li>
      <li><strong>Data Centers:</strong> Technology infrastructure demand</li>
      <li><strong>Medical Marijuana:</strong> In jurisdictions where legal</li>
    </ul>

    <h3>Risk Assessment</h3>
    <p>Each use category carries different risks:</p>
    <ul>
      <li><strong>Residential:</strong> Market cyclicality, construction costs, entitlement risk</li>
      <li><strong>Commercial:</strong> Tenant creditworthiness, retail disruption, oversupply</li>
      <li><strong>Industrial:</strong> Economic sensitivity, technological obsolescence</li>
      <li><strong>Agricultural:</strong> Commodity prices, weather, regulatory changes</li>
    </ul>

    <h3>Professional Analysis</h3>
    <p>Comprehensive HBU analysis typically involves:</p>
    <ul>
      <li><strong>MAI Appraisers:</strong> Certified appraisers for formal HBU opinions</li>
      <li><strong>Land Planners:</strong> Site planning and development feasibility</li>
      <li><strong>Market Analysts:</strong> Demand and absorption rate studies</li>
      <li><strong>Engineers:</strong> Site assessment and infrastructure planning</li>
      <li><strong>Attorneys:</strong> Zoning and entitlement strategies</li>
      <li><strong>Financial Analysts:</strong> Pro forma development and returns analysis</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Conduct analysis before purchasing land</li>
      <li>Consider multiple use scenarios and combinations</li>
      <li>Update analysis as market conditions change</li>
      <li>Involve professional consultants for major decisions</li>
      <li>Test financial assumptions with sensitivity analysis</li>
      <li>Consider both current and future highest and best use</li>
      <li>Evaluate interim uses for holding period income</li>
      <li>Document analysis thoroughly for investors or lenders</li>
    </ul>

    <h3>Common Errors in HBU Analysis</h3>
    <ul>
      <li>Assuming use is legal without verifying zoning</li>
      <li>Ignoring physical constraints like wetlands or slopes</li>
      <li>Overestimating market demand and absorption</li>
      <li>Underestimating development costs and timelines</li>
      <li>Failing to consider opportunity costs and holding costs</li>
      <li>Not accounting for market timing and cycles</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'landArea',
        label: 'Total Land Area (Acres)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'residentialValue',
        label: 'Residential Value Per Acre',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'residentialDevCost',
        label: 'Residential Development Cost Per Acre',
        type: 'number',
        defaultValue: 40000,
      },
      {
        name: 'commercialValue',
        label: 'Commercial Value Per Acre',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'commercialDevCost',
        label: 'Commercial Development Cost Per Acre',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'industrialValue',
        label: 'Industrial Value Per Acre',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'industrialDevCost',
        label: 'Industrial Development Cost Per Acre',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'agriculturalValue',
        label: 'Agricultural Value Per Acre',
        type: 'number',
        defaultValue: 15000,
      },
    ],
    results: [
      { label: 'Residential Net Value Per Acre', isCurrency: true },
      { label: 'Residential Total Net Value', isCurrency: true },
      { label: 'Commercial Net Value Per Acre', isCurrency: true },
      { label: 'Commercial Total Net Value', isCurrency: true },
      { label: 'Industrial Net Value Per Acre', isCurrency: true },
      { label: 'Industrial Total Net Value', isCurrency: true },
      { label: 'Agricultural Total Value', isCurrency: true },
      { label: 'Recommended Highest and Best Use', isText: true },
      { label: 'Maximum Value', isCurrency: true },
    ],
    calculate: (values) => {
      const { landArea, residentialValue, residentialDevCost, commercialValue, commercialDevCost, industrialValue, industrialDevCost, agriculturalValue } = values;
      
      const resNetPerAcre = residentialValue - residentialDevCost;
      const resTotalNet = resNetPerAcre * landArea;
      
      const comNetPerAcre = commercialValue - commercialDevCost;
      const comTotalNet = comNetPerAcre * landArea;
      
      const indNetPerAcre = industrialValue - industrialDevCost;
      const indTotalNet = indNetPerAcre * landArea;
      
      const agTotal = agriculturalValue * landArea;
      
      const values_array = [
        { name: 'Residential', value: resTotalNet },
        { name: 'Commercial', value: comTotalNet },
        { name: 'Industrial', value: indTotalNet },
        { name: 'Agricultural', value: agTotal }
      ];
      
      const maxUse = values_array.reduce((max, use) => use.value > max.value ? use : max);

      return [
        { label: 'Residential Net Value Per Acre', value: resNetPerAcre.toFixed(2), isCurrency: true },
        { label: 'Residential Total Net Value', value: resTotalNet.toFixed(2), isCurrency: true },
        { label: 'Commercial Net Value Per Acre', value: comNetPerAcre.toFixed(2), isCurrency: true },
        { label: 'Commercial Total Net Value', value: comTotalNet.toFixed(2), isCurrency: true },
        { label: 'Industrial Net Value Per Acre', value: indNetPerAcre.toFixed(2), isCurrency: true },
        { label: 'Industrial Total Net Value', value: indTotalNet.toFixed(2), isCurrency: true },
        { label: 'Agricultural Total Value', value: agTotal.toFixed(2), isCurrency: true },
        { label: 'Recommended Highest and Best Use', value: maxUse.name, isText: true },
        { label: 'Maximum Value', value: maxUse.value.toFixed(2), isCurrency: true },
      ];
    },
  },
};
