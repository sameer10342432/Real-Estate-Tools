import { CalculatorContent } from '@/types';

export const WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Water Rights Value Estimator',
  description: 'Estimate the value of water rights for agricultural, commercial, or municipal use based on acre-feet, priority date, and market conditions.',
  slug: 'water-rights-value-estimator',
  icon: '💧',
  category: 'Investment Analysis',
  article: {
    title: 'Water Rights Valuation: Understanding the Most Valuable Resource in Real Estate',
    content: `
    <h2>The Increasing Value of Water Rights</h2>
    <p>As Mark Twain allegedly said, "Whiskey is for drinking; water is for fighting over." Water rights have become increasingly valuable assets, particularly in arid Western states where water scarcity drives prices higher each year. Understanding water rights valuation is critical for land investors, farmers, developers, and anyone purchasing property with water allocation.</p>
    
    <h3>What Are Water Rights?</h3>
    <p>Water rights are legal entitlements to use water from a specific source (stream, river, lake, or groundwater) for beneficial purposes. The holder has the right to divert and use a certain quantity of water, typically measured in acre-feet (one acre covered by one foot of water = 325,851 gallons).</p>

    <h3>Types of Water Rights Systems</h3>
    <p><strong>Prior Appropriation (Western States):</strong></p>
    <ul>
      <li>"First in time, first in right" - priority dates determine seniority</li>
      <li>Senior rights holders get full allocation before junior rights receive any water</li>
      <li>Water can be severed from land and sold separately</li>
      <li>Used in: CO, WY, MT, NM, NV, UT, ID, AZ, and parts of CA, OR, WA</li>
    </ul>
    <p><strong>Riparian Rights (Eastern States):</strong></p>
    <ul>
      <li>Property owners adjacent to water body have right to reasonable use</li>
      <li>Rights run with the land and cannot be sold separately</li>
      <li>All riparian owners share water equally</li>
      <li>Used in most Eastern states</li>
    </ul>
    <p><strong>Hybrid/Dual Systems:</strong></p>
    <ul>
      <li>Some states use combinations (California, Texas, Oklahoma)</li>
      <li>Different rules for surface water vs. groundwater</li>
    </ul>

    <h3>Factors Affecting Water Rights Value</h3>
    <ul>
      <li><strong>Seniority/Priority Date:</strong> Earlier dates = more valuable and reliable</li>
      <li><strong>Quantity:</strong> Volume of annual allocation (acre-feet per year)</li>
      <li><strong>Source Reliability:</strong> Consistent supply vs. intermittent streams</li>
      <li><strong>Water Quality:</strong> Potable vs. agricultural quality</li>
      <li><strong>Transferability:</strong> Ability to change use or location</li>
      <li><strong>Use Type:</strong> Municipal > Commercial > Industrial > Agricultural</li>
      <li><strong>Location:</strong> Urban/development areas command premiums</li>
      <li><strong>Legal Status:</strong> Decreed, certificated, or permitted rights</li>
    </ul>

    <h3>Water Rights Pricing by Region</h3>
    <p><strong>Colorado Front Range (Municipal Use):</strong></p>
    <ul>
      <li>$30,000-$100,000+ per acre-foot</li>
      <li>Senior South Platte rights most valuable</li>
      <li>Denver area commands premium prices</li>
    </ul>
    <p><strong>California Central Valley (Agricultural):</strong></p>
    <ul>
      <li>$500-$5,000 per acre-foot for farm water</li>
      <li>Groundwater adjudicated rights: $10,000-$20,000+</li>
      <li>Varies dramatically by source and reliability</li>
    </ul>
    <p><strong>Arizona (Mixed Use):</strong></p>
    <ul>
      <li>CAP (Colorado River) water: $5,000-$15,000 per acre-foot</li>
      <li>Groundwater pumping rights location-dependent</li>
      <li>Active Market Area (AMA) restrictions apply</li>
    </ul>
    <p><strong>Nevada (Highly Constrained):</strong></p>
    <ul>
      <li>Limited supply drives high prices</li>
      <li>$20,000-$50,000+ per acre-foot near Reno</li>
      <li>Las Vegas growth constrained by water</li>
    </ul>

    <h3>How to Use This Estimator</h3>
    <p>Input your water rights parameters:</p>
    <ul>
      <li><strong>Annual Acre-Feet:</strong> Quantity of water allocation</li>
      <li><strong>Priority Date:</strong> Earlier dates are more senior and valuable</li>
      <li><strong>Water Source:</strong> River, stream, or groundwater</li>
      <li><strong>Current Use:</strong> Municipal, agricultural, commercial, etc.</li>
      <li><strong>Regional Market Price:</strong> Per acre-foot value in your area</li>
      <li><strong>Reliability Factor:</strong> Percentage of years water is available</li>
      <li><strong>Transferability:</strong> Whether rights can be moved or changed</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Base Water Rights Value:</strong> Quantity × market price</li>
      <li><strong>Reliability Adjustment:</strong> Discount for intermittent supply</li>
      <li><strong>Seniority Premium/Discount:</strong> Based on priority date</li>
      <li><strong>Use Type Adjustment:</strong> Municipal premium vs. agricultural baseline</li>
      <li><strong>Estimated Total Value:</strong> Adjusted market value of water rights</li>
      <li><strong>Annual Income Potential:</strong> Lease value if rented to others</li>
    </ul>

    <h3>Water Rights Uses and Values</h3>
    <ul>
      <li><strong>Municipal/Domestic:</strong> Highest value - essential for homes and cities</li>
      <li><strong>Commercial/Industrial:</strong> Manufacturing, data centers, breweries</li>
      <li><strong>Agricultural Irrigation:</strong> Baseline pricing for farm use</li>
      <li><strong>Mining and Extraction:</strong> Oil/gas fracking requires substantial water</li>
      <li><strong>Recreation:</strong> Ski areas, golf courses, parks</li>
      <li><strong>Environmental:</strong> Instream flows for fish and wildlife</li>
      <li><strong>Hydropower:</strong> Electricity generation (non-consumptive)</li>
    </ul>

    <h3>Water Rights Transactions</h3>
    <p>Methods of acquiring or transferring water rights:</p>
    <ul>
      <li><strong>Purchase and Sale:</strong> Permanent transfer of ownership</li>
      <li><strong>Lease/Rental:</strong> Temporary use (one season or multi-year)</li>
      <li><strong>Interruptible Supply Agreement:</strong> Use when available at reduced cost</li>
      <li><strong>Share in Mutual Ditch Company:</strong> Proportional ownership in water delivery system</li>
      <li><strong>Groundwater Credits:</strong> Pumping allocations in managed aquifers</li>
      <li><strong>Change of Use Application:</strong> Modify from agricultural to municipal use</li>
    </ul>

    <h3>Due Diligence for Water Rights</h3>
    <ul>
      <li><strong>Priority Date Verification:</strong> Confirm seniority in state water records</li>
      <li><strong>Decree Review:</strong> Read water court decree or permit</li>
      <li><strong>Historical Use:</strong> "Use it or lose it" - verify continuous beneficial use</li>
      <li><strong>Quantity Verification:</strong> Confirm annual allocation amount</li>
      <li><strong>Point of Diversion:</strong> Location where water is taken from source</li>
      <li><strong>Place of Use:</strong> Where water can legally be applied</li>
      <li><strong>Transferability:</strong> Any restrictions on sale or change of use</li>
      <li><strong>Augmentation Plan:</strong> Required return flows or limitations</li>
      <li><strong>Title:</strong> Clear ownership and no disputes</li>
    </ul>

    <h3>Regulatory and Legal Considerations</h3>
    <ul>
      <li>State water court approval often required for transfers</li>
      <li>Must prove no injury to other water rights holders</li>
      <li>Change of use applications take 1-3 years</li>
      <li>Historical consumptive use determines transferable quantity</li>
      <li>Return flow obligations may limit value</li>
      <li>Federal reserved water rights (Indian tribes, federal lands)</li>
      <li>Interstate compact allocations (Colorado River, Rio Grande)</li>
    </ul>

    <h3>Groundwater vs. Surface Water</h3>
    <p><strong>Surface Water Rights:</strong></p>
    <ul>
      <li>Visible rivers, streams, and lakes</li>
      <li>Priority appropriation system well-established</li>
      <li>More valuable due to reliability and seniority</li>
      <li>Easier to transfer and change use</li>
    </ul>
    <p><strong>Groundwater Rights:</strong></p>
    <ul>
      <li>Well pumping from aquifers</li>
      <li>Less regulated historically, now increasingly controlled</li>
      <li>Sustainability concerns limiting new permits</li>
      <li>Subject to pumping restrictions and metering</li>
      <li>Declining water tables reduce value</li>
    </ul>

    <h3>Investment Strategies</h3>
    <ul>
      <li><strong>Ag-to-Urban Transfer:</strong> Buy cheap agricultural rights, change to municipal use</li>
      <li><strong>Water Banking:</strong> Store wet year water for dry year sale</li>
      <li><strong>Groundwater Recharge:</strong> Inject surface water to preserve aquifers</li>
      <li><strong>Lease-Back Arrangements:</strong> Buy rights, lease back to farmer short-term</li>
      <li><strong>Development Play:</strong> Secure water before land entitlement</li>
      <li><strong>Consolidation:</strong> Assemble multiple small rights into large block</li>
    </ul>

    <h3>Water Rights Appraisal Methods</h3>
    <ul>
      <li><strong>Market Sales Comparison:</strong> Recent transactions of similar rights</li>
      <li><strong>Income Capitalization:</strong> Present value of future income from use or lease</li>
      <li><strong>Cost Approach:</strong> Replacement cost of alternative water supply</li>
      <li><strong>Residual Value Method:</strong> Land value with vs. without water</li>
      <li><strong>Paired Sales Analysis:</strong> Compare properties with and without rights</li>
    </ul>

    <h3>Climate Change Impact on Values</h3>
    <ul>
      <li>Prolonged droughts increasing scarcity and prices</li>
      <li>Snowpack reduction affecting runoff and supply</li>
      <li>Earlier runoff timing changing agricultural practices</li>
      <li>Groundwater depletion from over-pumping</li>
      <li>Legal battles over interstate compact allocations</li>
      <li>Growing demand from population growth in arid areas</li>
    </ul>

    <h3>Environmental and Sustainability Considerations</h3>
    <ul>
      <li>Instream flow requirements for fish and wildlife</li>
      <li>Endangered Species Act constraints on diversions</li>
      <li>Water quality degradation from agricultural return flows</li>
      <li>Groundwater-surface water connectivity issues</li>
      <li>Conservation easements preserving agricultural use</li>
      <li>Water efficiency and conservation incentives</li>
    </ul>

    <h3>Tax Treatment of Water Rights</h3>
    <ul>
      <li>Generally treated as real property for tax purposes</li>
      <li>Capital gains treatment on sale if held long-term</li>
      <li>Depletable asset if water source is finite</li>
      <li>1031 exchange eligible in some cases</li>
      <li>Property tax may be assessed separately from land</li>
      <li>Conservation easements may provide deductions</li>
    </ul>

    <h3>Risks and Challenges</h3>
    <ul>
      <li>Legal challenges from other water users</li>
      <li>Regulatory changes restricting use or transfer</li>
      <li>Climate variability affecting supply reliability</li>
      <li>Adjudication reducing historical allocations</li>
      <li>Compact calls limiting junior appropriators</li>
      <li>Aquifer depletion and declining yields</li>
      <li>Environmental restrictions on timing and quantity</li>
    </ul>

    <h3>Best Practices for Water Rights Investment</h3>
    <ul>
      <li>Hire experienced water rights attorney for due diligence</li>
      <li>Verify priority date and quantity in state records</li>
      <li>Understand local market prices and recent transactions</li>
      <li>Confirm beneficial use history (use it or lose it)</li>
      <li>Assess transferability and change of use potential</li>
      <li>Evaluate source reliability and climate trends</li>
      <li>Consider augmentation plan requirements</li>
      <li>Budget for water court costs if transfer needed</li>
      <li>Monitor regulatory developments affecting water law</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'acreFeet',
        label: 'Annual Acre-Feet Allocation',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'pricePerAcreFoot',
        label: 'Market Price Per Acre-Foot',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'reliabilityPercent',
        label: 'Supply Reliability (%)',
        type: 'number',
        defaultValue: 85,
      },
      {
        name: 'seniorityBonus',
        label: 'Seniority Adjustment (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'useTypePremium',
        label: 'Use Type Premium (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'annualLeaseRate',
        label: 'Annual Lease Rate Per Acre-Foot',
        type: 'number',
        defaultValue: 500,
      },
    ],
    results: [
      { label: 'Base Water Rights Value', isCurrency: true },
      { label: 'Reliability Adjusted Value', isCurrency: true },
      { label: 'Seniority Adjustment Amount', isCurrency: true },
      { label: 'Use Type Premium Amount', isCurrency: true },
      { label: 'Estimated Total Value', isCurrency: true },
      { label: 'Annual Income Potential (Lease)', isCurrency: true },
      { label: 'Cap Rate (Income/Value)', isPercentage: true },
    ],
    calculate: (values) => {
      const { acreFeet, pricePerAcreFoot, reliabilityPercent, seniorityBonus, useTypePremium, annualLeaseRate } = values;
      
      const baseValue = acreFeet * pricePerAcreFoot;
      const reliabilityAdjusted = baseValue * (reliabilityPercent / 100);
      const seniorityAmount = reliabilityAdjusted * (seniorityBonus / 100);
      const useTypeAmount = reliabilityAdjusted * (useTypePremium / 100);
      const totalValue = reliabilityAdjusted + seniorityAmount + useTypeAmount;
      const annualIncome = acreFeet * annualLeaseRate;
      const capRate = (annualIncome / totalValue) * 100;

      return [
        { label: 'Base Water Rights Value', value: baseValue.toFixed(2), isCurrency: true },
        { label: 'Reliability Adjusted Value', value: reliabilityAdjusted.toFixed(2), isCurrency: true },
        { label: 'Seniority Adjustment Amount', value: seniorityAmount.toFixed(2), isCurrency: true },
        { label: 'Use Type Premium Amount', value: useTypeAmount.toFixed(2), isCurrency: true },
        { label: 'Estimated Total Value', value: totalValue.toFixed(2), isCurrency: true },
        { label: 'Annual Income Potential (Lease)', value: annualIncome.toFixed(2), isCurrency: true },
        { label: 'Cap Rate (Income/Value)', value: capRate.toFixed(2), isPercentage: true },
      ];
    },
  },
};
