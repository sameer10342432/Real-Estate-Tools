import { CalculatorContent } from '@/types';

export const COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Cost to Clear Land Estimator',
  description: 'Estimate land clearing costs including tree removal, brush clearing, grading, and debris disposal for development projects.',
  slug: 'cost-to-clear-land-estimator',
  icon: '🌳',
  category: 'Investment Analysis',
  article: {
    title: 'Land Clearing Costs: Complete Guide to Site Preparation and Budgeting',
    content: `
    <h2>Understanding Land Clearing Costs</h2>
    <p>Land clearing is one of the first and most critical steps in property development. Costs vary dramatically based on vegetation density, terrain, tree sizes, and disposal requirements. Accurate budgeting for land clearing is essential to avoid cost overruns and project delays.</p>
    
    <h3>What is Included in Land Clearing?</h3>
    <ul>
      <li><strong>Tree Removal:</strong> Cutting down trees and removing stumps</li>
      <li><strong>Brush Clearing:</strong> Removing shrubs, undergrowth, and small vegetation</li>
      <li><strong>Grubbing:</strong> Removing roots, stumps, and buried debris</li>
      <li><strong>Grading:</strong> Leveling and shaping the site</li>
      <li><strong>Debris Disposal:</strong> Hauling away or processing vegetation and materials</li>
      <li><strong>Erosion Control:</strong> Installing measures to prevent soil loss</li>
    </ul>

    <h3>Land Clearing Cost Factors</h3>
    <p>Multiple variables affect total clearing costs:</p>
    <ul>
      <li><strong>Acreage:</strong> Larger sites benefit from economies of scale ($500-$6,000+ per acre)</li>
      <li><strong>Vegetation Density:</strong> Light brush vs. dense forest dramatically affects costs</li>
      <li><strong>Tree Size:</strong> Large hardwood trees cost more to remove than small pines</li>
      <li><strong>Terrain:</strong> Slopes, rocks, and wet conditions increase difficulty and cost</li>
      <li><strong>Accessibility:</strong> Remote sites require mobilization and transport costs</li>
      <li><strong>Disposal Method:</strong> Burning, chipping, hauling, or grinding affects final cost</li>
      <li><strong>Environmental Restrictions:</strong> Protected species or wetlands add complexity</li>
    </ul>

    <h3>Cost Per Acre by Vegetation Type</h3>
    <ul>
      <li><strong>Light Brush (Grassland):</strong> $500-$2,000 per acre</li>
      <li><strong>Medium Brush:</strong> $2,000-$3,500 per acre</li>
      <li><strong>Heavy Brush/Scrub:</strong> $3,500-$5,000 per acre</li>
      <li><strong>Light Woods (Small Trees):</strong> $2,500-$4,000 per acre</li>
      <li><strong>Medium Woods:</strong> $4,000-$6,000 per acre</li>
      <li><strong>Heavy Woods (Large Trees):</strong> $6,000-$10,000+ per acre</li>
      <li><strong>Dense Forest/Jungle:</strong> $10,000-$20,000+ per acre</li>
    </ul>

    <h3>Tree Removal Costs</h3>
    <p>Individual tree removal pricing varies by size:</p>
    <ul>
      <li><strong>Small Trees (under 30 feet):</strong> $200-$700 each</li>
      <li><strong>Medium Trees (30-60 feet):</strong> $700-$1,500 each</li>
      <li><strong>Large Trees (60-80 feet):</strong> $1,500-$3,000 each</li>
      <li><strong>Extra Large Trees (80+ feet):</strong> $3,000-$6,000+ each</li>
      <li><strong>Stump Grinding:</strong> Additional $100-$400 per stump</li>
      <li><strong>Hazardous Trees:</strong> Near structures or power lines - premium pricing</li>
    </ul>

    <h3>Grading and Earthwork Costs</h3>
    <ul>
      <li><strong>Basic Grading:</strong> $1,000-$3,000 per acre</li>
      <li><strong>Rough Grading:</strong> $1.50-$3.50 per square foot</li>
      <li><strong>Fine Grading:</strong> $2.50-$5.00 per square foot</li>
      <li><strong>Cut and Fill:</strong> $5-$15 per cubic yard</li>
      <li><strong>Rock Removal:</strong> $40-$150 per cubic yard</li>
      <li><strong>Topsoil Spreading:</strong> $12-$18 per cubic yard</li>
    </ul>

    <h3>Equipment and Labor Costs</h3>
    <p>Typical equipment rental and operation costs:</p>
    <ul>
      <li><strong>Bulldozer:</strong> $500-$1,200 per day with operator</li>
      <li><strong>Excavator:</strong> $400-$1,000 per day with operator</li>
      <li><strong>Forestry Mulcher:</strong> $600-$1,500 per day with operator</li>
      <li><strong>Skid Steer:</strong> $300-$500 per day with operator</li>
      <li><strong>Chipper:</strong> $200-$400 per day</li>
      <li><strong>Dump Truck:</strong> $150-$300 per day plus hauling fees</li>
      <li><strong>Labor:</strong> $25-$50 per hour for crew members</li>
    </ul>

    <h3>How to Use This Estimator</h3>
    <p>Input your land clearing project parameters:</p>
    <ul>
      <li><strong>Total Acreage:</strong> Size of area to be cleared</li>
      <li><strong>Vegetation Density:</strong> Select light, medium, or heavy</li>
      <li><strong>Number of Large Trees:</strong> Count of trees over 60 feet tall</li>
      <li><strong>Grading Required:</strong> Whether site needs leveling</li>
      <li><strong>Debris Disposal Method:</strong> Burn, haul, chip, or grind</li>
      <li><strong>Access Difficulty:</strong> Easy, moderate, or difficult</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Base Clearing Cost:</strong> Per-acre vegetation removal cost</li>
      <li><strong>Tree Removal Cost:</strong> Additional cost for large trees</li>
      <li><strong>Grading Cost:</strong> Land leveling and shaping expenses</li>
      <li><strong>Disposal Cost:</strong> Debris removal and processing fees</li>
      <li><strong>Total Estimated Cost:</strong> All-in project budget</li>
      <li><strong>Cost Per Acre:</strong> Average clearing cost</li>
    </ul>

    <h3>Debris Disposal Methods</h3>
    <ul>
      <li><strong>On-Site Burning:</strong> Cheapest method where permitted ($100-$500 per acre)</li>
      <li><strong>On-Site Chipping/Mulching:</strong> Create usable mulch ($500-$1,500 per acre)</li>
      <li><strong>Hauling to Landfill:</strong> Most expensive option ($1,000-$3,000+ per acre)</li>
      <li><strong>Grinding and Spreading:</strong> Use as erosion control ($800-$2,000 per acre)</li>
      <li><strong>Log Salvage:</strong> Sell timber to offset costs (may generate revenue)</li>
    </ul>

    <h3>Permitting and Regulatory Requirements</h3>
    <p>Many jurisdictions require permits for land clearing:</p>
    <ul>
      <li><strong>Land Disturbance Permit:</strong> Required for clearing over certain acreage</li>
      <li><strong>Burn Permits:</strong> Necessary for on-site burning of debris</li>
      <li><strong>Wetlands Approval:</strong> If clearing near streams or wetlands</li>
      <li><strong>Tree Removal Permits:</strong> Some cities protect mature trees</li>
      <li><strong>Erosion Control Plan:</strong> Required to prevent sediment runoff</li>
      <li><strong>Endangered Species:</strong> Survey may be required</li>
    </ul>

    <h3>Environmental Considerations</h3>
    <ul>
      <li>Conduct environmental assessment before clearing</li>
      <li>Identify and protect wetlands and buffers</li>
      <li>Preserve specimen trees where possible</li>
      <li>Install silt fencing before clearing begins</li>
      <li>Schedule clearing to avoid nesting seasons</li>
      <li>Plan for stormwater management</li>
    </ul>

    <h3>Best Practices for Cost Control</h3>
    <ul>
      <li><strong>Get Multiple Quotes:</strong> Compare at least 3 contractors</li>
      <li><strong>Clear During Dry Season:</strong> Avoid wet conditions that increase costs</li>
      <li><strong>Consider Phasing:</strong> Clear only what's immediately needed</li>
      <li><strong>Salvage Timber:</strong> Sell marketable logs to offset costs</li>
      <li><strong>Use Mulching:</strong> On-site processing reduces hauling costs</li>
      <li><strong>Combine Projects:</strong> Bundle clearing with grading for efficiency</li>
      <li><strong>Negotiate Access:</strong> Temporary easements for equipment access</li>
    </ul>

    <h3>Specialized Clearing Techniques</h3>
    <ul>
      <li><strong>Forestry Mulching:</strong> Grinds vegetation in place, excellent for brush</li>
      <li><strong>Controlled Burning:</strong> Cheapest for large areas where legal</li>
      <li><strong>Chemical Clearing:</strong> Herbicides for brush control (long-term)</li>
      <li><strong>Goat Grazing:</strong> Natural clearing for brush and undergrowth</li>
      <li><strong>Selective Clearing:</strong> Preserve desirable trees and vegetation</li>
      <li><strong>Hydro-Axing:</strong> Mechanical clearing for right-of-ways</li>
    </ul>

    <h3>Erosion and Sediment Control</h3>
    <p>Critical to prevent environmental violations:</p>
    <ul>
      <li><strong>Silt Fence:</strong> $3-$8 per linear foot installed</li>
      <li><strong>Erosion Control Blankets:</strong> $1.50-$4 per square yard</li>
      <li><strong>Straw Bales:</strong> $50-$100 per 20 bales</li>
      <li><strong>Sediment Basins:</strong> $5,000-$15,000 each</li>
      <li><strong>Hydroseed:</strong> $0.10-$0.30 per square foot</li>
      <li><strong>Rock Check Dams:</strong> $200-$500 each</li>
    </ul>

    <h3>Seasonal Timing</h3>
    <p>Season affects clearing costs and efficiency:</p>
    <ul>
      <li><strong>Summer/Fall:</strong> Best time for clearing - dry conditions, lower costs</li>
      <li><strong>Winter:</strong> Frozen ground can be advantageous, but weather delays common</li>
      <li><strong>Spring:</strong> Wet conditions increase costs, nesting season restrictions</li>
      <li><strong>Year-Round:</strong> Indoor projects less weather dependent</li>
    </ul>

    <h3>Land Clearing Contracts</h3>
    <p>Important contract terms to negotiate:</p>
    <ul>
      <li>Scope of work clearly defined (acreage, extent of clearing)</li>
      <li>Price structure: lump sum, per acre, or time and materials</li>
      <li>Payment schedule tied to completion milestones</li>
      <li>Timeline with weather delay provisions</li>
      <li>Debris disposal responsibility clearly assigned</li>
      <li>Permit responsibility (owner vs. contractor)</li>
      <li>Insurance and liability coverage requirements</li>
      <li>Restoration requirements if contractor damages property</li>
    </ul>

    <h3>Post-Clearing Activities</h3>
    <ul>
      <li>Final grading and compaction</li>
      <li>Topsoil replacement if required</li>
      <li>Temporary or permanent seeding</li>
      <li>Drainage improvements and swales</li>
      <li>Access road construction</li>
      <li>Utility corridor preparation</li>
    </ul>

    <h3>Common Cost Overrun Causes</h3>
    <ul>
      <li>Underestimating vegetation density</li>
      <li>Unexpected rock or unsuitable soil</li>
      <li>Wetlands discovered during work</li>
      <li>Weather delays and wet conditions</li>
      <li>Equipment breakdowns and repairs</li>
      <li>Additional grading requirements</li>
      <li>Unforeseen environmental restrictions</li>
    </ul>

    <h3>Hiring a Clearing Contractor</h3>
    <p>Selecting the right contractor:</p>
    <ul>
      <li>Verify proper licensing and insurance</li>
      <li>Check references from similar projects</li>
      <li>Review equipment inventory and condition</li>
      <li>Confirm experience with your terrain and vegetation type</li>
      <li>Ensure understanding of environmental regulations</li>
      <li>Get detailed written quotes with scope breakdown</li>
      <li>Verify debris disposal methods and costs</li>
    </ul>

    <h3>DIY vs. Professional Clearing</h3>
    <ul>
      <li><strong>DIY Feasible:</strong> Small lots under 1 acre with light brush</li>
      <li><strong>Hire Professionals:</strong> Large trees, steep slopes, heavy vegetation</li>
      <li><strong>Equipment Rental:</strong> Can save money but requires expertise</li>
      <li><strong>Safety Concerns:</strong> Tree falling accidents are serious and common</li>
      <li><strong>Time Investment:</strong> DIY takes 10x longer than professionals</li>
      <li><strong>Disposal Challenge:</strong> Debris removal often makes professional worthwhile</li>
    </ul>

    <h3>Value Engineering for Land Clearing</h3>
    <ul>
      <li>Clear only building envelope and roads initially</li>
      <li>Leave perimeter vegetation for privacy and buffers</li>
      <li>Chip and spread debris on-site when possible</li>
      <li>Time clearing to coincide with development schedule</li>
      <li>Negotiate package pricing for clearing and grading</li>
      <li>Consider leaving some trees for property value</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalAcreage',
        label: 'Total Acreage to Clear',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'vegetationDensity',
        label: 'Cost Per Acre (Based on Density)',
        type: 'number',
        defaultValue: 3500,
      },
      {
        name: 'largeTrees',
        label: 'Number of Large Trees (60+ feet)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'treeRemovalCost',
        label: 'Cost Per Large Tree',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'gradingNeeded',
        label: 'Grading Cost Per Acre',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'disposalCostPerAcre',
        label: 'Debris Disposal Cost Per Acre',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Base Clearing Cost', isCurrency: true },
      { label: 'Tree Removal Cost', isCurrency: true },
      { label: 'Total Grading Cost', isCurrency: true },
      { label: 'Total Disposal Cost', isCurrency: true },
      { label: 'Total Estimated Cost', isCurrency: true },
      { label: 'Cost Per Acre', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalAcreage, vegetationDensity, largeTrees, treeRemovalCost, gradingNeeded, disposalCostPerAcre } = values;
      
      const baseCost = totalAcreage * vegetationDensity;
      const treeCost = largeTrees * treeRemovalCost;
      const gradingCost = totalAcreage * gradingNeeded;
      const disposalCost = totalAcreage * disposalCostPerAcre;
      const totalCost = baseCost + treeCost + gradingCost + disposalCost;
      const costPerAcre = totalCost / totalAcreage;

      return [
        { label: 'Base Clearing Cost', value: baseCost.toFixed(2), isCurrency: true },
        { label: 'Tree Removal Cost', value: treeCost.toFixed(2), isCurrency: true },
        { label: 'Total Grading Cost', value: gradingCost.toFixed(2), isCurrency: true },
        { label: 'Total Disposal Cost', value: disposalCost.toFixed(2), isCurrency: true },
        { label: 'Total Estimated Cost', value: totalCost.toFixed(2), isCurrency: true },
        { label: 'Cost Per Acre', value: costPerAcre.toFixed(2), isCurrency: true },
      ];
    },
  },
};
