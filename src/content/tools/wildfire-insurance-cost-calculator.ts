import { CalculatorContent } from '@/types';

export const WILDFIRE_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wildfire Insurance Cost Calculator',
  description: 'Calculate wildfire insurance costs and understand fire risk premiums in high-risk areas',
  slug: 'wildfire-insurance-cost-calculator',
  icon: '🔥',
  category: 'Insurance Tools',
  article: {
    title: 'Complete Guide to Wildfire Insurance Costs',
    content: `
    <h2>Understanding Wildfire Insurance</h2>
    <p>Wildfire insurance isn't typically a separate policy - it's coverage for fire damage included in standard homeowners insurance. However, in high-risk wildfire areas, insurers may charge significantly higher premiums, add exclusions, or refuse coverage altogether. Understanding these costs is critical for homeowners in California, Colorado, Oregon, Washington, and other wildfire-prone states.</p>
    
    <h3>Wildfire Insurance Crisis in Western States</h3>
    <p>The wildfire insurance landscape has changed dramatically:</p>
    <ul>
      <li><strong>Non-Renewals:</strong> Major insurers (State Farm, Allstate, Farmers) have stopped writing new policies in high-risk areas</li>
      <li><strong>Premium Increases:</strong> 200-400% increases in wildfire-prone communities since 2020</li>
      <li><strong>Coverage Restrictions:</strong> Extended replacement cost and guaranteed replacement cost being eliminated</li>
      <li><strong>FAIR Plan Expansion:</strong> More homeowners forced into high-cost state insurance of last resort</li>
      <li><strong>Market Availability:</strong> Difficulty finding ANY carrier willing to insure in WUI (Wildland-Urban Interface) areas</li>
    </ul>
    
    <h3>Average Wildfire Risk Premiums (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Premium Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Coverage Availability</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Low Risk (Urban/Suburban)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200 - $2,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Readily available</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate Risk (Near Wildland)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500 - $5,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Available with restrictions</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High Risk (WUI Zone)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,000 - $12,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited carriers, high deductibles</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Extreme Risk (High Hazard)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,000 - $25,000+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">FAIR Plan or surplus lines only</td>
      </tr>
    </table>
    
    <h3>Understanding Your Wildfire Risk Score</h3>
    <p>Insurance companies use sophisticated models to assess wildfire risk:</p>
    <ul>
      <li><strong>Firewise USA Score:</strong> Community wildfire preparedness rating (0-5 stars)</li>
      <li><strong>CAL FIRE Hazard Severity Zones:</strong> California's Very High Fire Hazard Severity Zones (VHFHSZ)</li>
      <li><strong>CoreLogic Wildfire Risk Score:</strong> Property-specific risk rating (1-10)</li>
      <li><strong>USDA Forest Service Wildfire Hazard Potential:</strong> Federal wildfire risk mapping</li>
      <li><strong>Distance to Wildland:</strong> Proximity to forests, grasslands, or brushlands</li>
    </ul>
    
    <h3>Factors Affecting Wildfire Insurance Costs</h3>
    <p>Key determinants of your wildfire insurance premium:</p>
    <ul>
      <li><strong>Geographic Location:</strong> Proximity to wildland areas, historical fire zones</li>
      <li><strong>Home Construction:</strong> Roof material (metal vs. wood shake), siding material, ember-resistant vents</li>
      <li><strong>Defensible Space:</strong> Vegetation clearance around home (0-5 feet, 5-30 feet, 30-100 feet zones)</li>
      <li><strong>Fire Department Response:</strong> Distance to fire station, water availability, response time</li>
      <li><strong>Community Wildfire Preparedness:</strong> Firewise certification, community fuel reduction</li>
      <li><strong>Roof Age:</strong> Older roofs more vulnerable to ember ignition</li>
      <li><strong>Home Replacement Cost:</strong> Higher rebuilding costs in remote areas</li>
      <li><strong>Claims History:</strong> Area wildfire claims affect entire region's rates</li>
    </ul>
    
    <h3>Wildfire Mitigation Measures That Lower Premiums</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mitigation Action</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Potential Premium Discount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Class A Fire-Rated Roof</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10-25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,000 - $30,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ember-Resistant Vents</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">5-10%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $1,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Defensible Space (100ft)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">15-30%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000 - $8,000 initial</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Fire-Resistant Siding</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">5-15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000 - $20,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Firewise USA Certification</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10-20%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $2,000 annual</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Dual-Pane Windows</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3-8%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000 - $15,000</td>
      </tr>
    </table>
    
    <h3>California FAIR Plan</h3>
    <p>When standard insurance isn't available, California FAIR Plan provides:</p>
    <ul>
      <li><strong>Coverage Type:</strong> Dwelling and personal property coverage only (no liability)</li>
      <li><strong>Cost:</strong> Typically 2-4x higher than standard homeowners insurance</li>
      <li><strong>Coverage Limits:</strong> Up to $3 million for homes</li>
      <li><strong>Supplemental Coverage:</strong> Must purchase separate liability policy (Difference in Conditions policy)</li>
      <li><strong>Total Cost Example:</strong> $8,000-$15,000/year for coverage that would cost $3,000-$5,000 in standard market</li>
      <li><strong>Last Resort:</strong> Only option for many homes in High Fire Hazard Severity Zones</li>
    </ul>
    
    <h3>Defensible Space Requirements</h3>
    <p>California and other western states mandate three defensible space zones:</p>
    <ul>
      <li><strong>Zone 0 (0-5 feet):</strong> No combustible materials, vegetation, mulch. Only hardscape, gravel, or concrete</li>
      <li><strong>Zone 1 (5-30 feet):</strong> Low-growing, well-watered plants. Remove dead vegetation. Trim tree branches 10 feet from roof</li>
      <li><strong>Zone 2 (30-100 feet):</strong> Create horizontal and vertical spacing between trees and shrubs. Remove ladder fuels</li>
    </ul>
    <p><strong>Non-Compliance Penalties:</strong> Up to $10,000 fines in California for failing to maintain defensible space</p>
    
    <h3>Fire-Rated Roofing Materials</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Roof Material</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fire Rating</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Insurance Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Wood Shake/Shingle</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Unrated/Class C</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">May be uninsurable in high-risk areas</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Asphalt Shingles</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Class A</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Standard - acceptable</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Concrete/Clay Tile</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Class A</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Excellent - preferred by insurers</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Metal Roofing</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Class A</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Best - maximum discounts</td>
      </tr>
    </table>
    
    <h3>Insurance Coverage Considerations in Fire Zones</h3>
    <p>Critical coverage features for wildfire-prone areas:</p>
    <ul>
      <li><strong>Extended Replacement Cost:</strong> 125-150% of dwelling coverage to account for rebuilding costs after regional disaster</li>
      <li><strong>Ordinance or Law Coverage:</strong> Covers cost to rebuild to current codes (newer fire-resistant standards)</li>
      <li><strong>Debris Removal:</strong> Ensure adequate coverage ($25,000+ for complete home loss)</li>
      <li><strong>Additional Living Expenses:</strong> 24-36 months coverage (rebuilding after wildfire takes longer)</li>
      <li><strong>Outbuilding Coverage:</strong> Detached garages, sheds often destroyed in wildfires</li>
      <li><strong>Landscaping Coverage:</strong> Many policies exclude or limit to $500-$1,000</li>
    </ul>
    
    <h3>When to Consider Dropping Coverage</h3>
    <p>In extreme cases, some homeowners self-insure:</p>
    <ul>
      <li><strong>No Mortgage:</strong> Only possible if home is paid off (lenders require insurance)</li>
      <li><strong>Substantial Assets:</strong> Can afford to completely rebuild from savings ($300,000+)</li>
      <li><strong>Unaffordable Premiums:</strong> $20,000+ annual premiums make coverage financially impossible</li>
      <li><strong>Risk Acceptance:</strong> Willing to accept total loss of home</li>
      <li><strong>Note:</strong> This is extremely risky - one wildfire could eliminate a lifetime of home equity</li>
    </ul>
    
    <h3>States with Highest Wildfire Insurance Challenges</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Market Status</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Average High-Risk Premium</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Severe Crisis</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">$8,000 - $25,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Colorado</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">Challenging</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">$4,000 - $12,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">Challenging</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,500 - $10,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">Moderate</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,500 - $8,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Arizona</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">Moderate</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,000 - $7,000</td>
      </tr>
    </table>
    
    <h3>Finding Wildfire Insurance When Dropped</h3>
    <p>If your insurer non-renews your policy:</p>
    <ol style="margin-left: 20px;">
      <li><strong>Don't Panic:</strong> You have 60-75 days before coverage lapses</li>
      <li><strong>Shop Immediately:</strong> Contact independent insurance agents specializing in high-risk properties</li>
      <li><strong>Consider Surplus Lines:</strong> Non-admitted insurers (more expensive but available)</li>
      <li><strong>State FAIR Plan:</strong> Last resort option (California, Colorado, etc.)</li>
      <li><strong>Implement Mitigation:</strong> Make wildfire improvements before shopping for better rates</li>
      <li><strong>Bundle Coverage:</strong> Combine FAIR Plan dwelling coverage with separate liability/umbrella policy</li>
    </ol>
    
    <h3>Long-Term Market Trends</h3>
    <p>What experts predict for wildfire insurance:</p>
    <ul>
      <li><strong>Continued Exits:</strong> More major insurers will leave high-risk markets</li>
      <li><strong>Premium Escalation:</strong> 10-30% annual increases likely to continue in fire zones</li>
      <li><strong>Stricter Underwriting:</strong> More inspections, mandatory mitigation requirements</li>
      <li><strong>Deductible Increases:</strong> Fire deductibles may reach 5-10% of dwelling coverage</li>
      <li><strong>Government Intervention:</strong> Possible federal reinsurance program or state takeovers</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'state',
        label: 'State',
        type: 'select',
        required: true,
        options: [
          { value: 'california', label: 'California' },
          { value: 'colorado', label: 'Colorado' },
          { value: 'oregon', label: 'Oregon' },
          { value: 'washington', label: 'Washington' },
          { value: 'arizona', label: 'Arizona' },
          { value: 'other', label: 'Other State' },
        ],
        helpText: 'Your state affects wildfire insurance availability and cost'
      },
      {
        name: 'wildfireRisk',
        label: 'Wildfire Risk Level',
        type: 'select',
        required: true,
        options: [
          { value: 'low', label: 'Low (Urban/Suburban)' },
          { value: 'moderate', label: 'Moderate (Near Wildland)' },
          { value: 'high', label: 'High (WUI Zone)' },
          { value: 'extreme', label: 'Extreme (High Hazard Zone)' },
        ],
        helpText: 'Check your CAL FIRE or state wildfire risk zone'
      },
      {
        name: 'homeValue',
        label: 'Home Replacement Value',
        type: 'currency',
        required: true,
        placeholder: '500000',
        helpText: 'Cost to rebuild your home (not market value)'
      },
      {
        name: 'roofType',
        label: 'Roof Type',
        type: 'select',
        required: true,
        options: [
          { value: 'woodShake', label: 'Wood Shake/Shingle (Highest Risk)' },
          { value: 'asphaltShingle', label: 'Asphalt Shingles (Class A)' },
          { value: 'tile', label: 'Concrete/Clay Tile (Class A)' },
          { value: 'metal', label: 'Metal Roofing (Best)' },
        ],
        helpText: 'Roof material significantly impacts premiums'
      },
      {
        name: 'defensibleSpace',
        label: 'Defensible Space Compliance',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'Minimal or No Defensible Space' },
          { value: 'partial', label: 'Partial (30-foot clearance)' },
          { value: 'full', label: 'Full (100-foot clearance)' },
          { value: 'firewise', label: 'Firewise USA Certified' },
        ],
        helpText: 'Vegetation clearance around your home'
      },
      {
        name: 'emberVents',
        label: 'Ember-Resistant Vents',
        type: 'select',
        required: true,
        options: [
          { value: 'no', label: 'No - Standard Vents' },
          { value: 'yes', label: 'Yes - Ember-Resistant Vents' },
        ],
        helpText: 'Ember-resistant vents reduce ignition risk'
      },
      {
        name: 'distanceToFireStation',
        label: 'Distance to Fire Station',
        type: 'select',
        required: true,
        options: [
          { value: 'under5', label: 'Under 5 miles' },
          { value: '5to10', label: '5-10 miles' },
          { value: '10to15', label: '10-15 miles' },
          { value: 'over15', label: 'Over 15 miles' },
        ],
        helpText: 'Fire department response time affects rates'
      }
    ],
    results: [
      {
        name: 'estimatedAnnualPremium',
        label: 'Estimated Annual Premium',
        type: 'currency',
        helpText: 'Total yearly wildfire-adjusted insurance cost'
      },
      {
        name: 'baselinePremium',
        label: 'Baseline Premium (No Fire Risk)',
        type: 'currency',
        helpText: 'What you would pay in a low-risk area'
      },
      {
        name: 'wildfireRiskSurcharge',
        label: 'Wildfire Risk Surcharge',
        type: 'currency',
        helpText: 'Additional cost due to wildfire risk'
      },
      {
        name: 'potentialSavings',
        label: 'Potential Savings with Full Mitigation',
        type: 'currency',
        helpText: 'Annual savings if you implement all recommended improvements'
      },
      {
        name: 'marketAvailability',
        label: 'Insurance Market Availability',
        type: 'text',
        helpText: 'Likelihood of finding standard market coverage'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const state = inputs.state || 'california';
      const wildfireRisk = inputs.wildfireRisk || 'low';
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const roofType = inputs.roofType || 'asphaltShingle';
      const defensibleSpace = inputs.defensibleSpace || 'none';
      const emberVents = inputs.emberVents || 'no';
      const distanceToFireStation = inputs.distanceToFireStation || 'under5';

      // Baseline premium (0.4% of home value in low-risk area)
      const baselinePremium = Math.round(homeValue * 0.004);

      // State multiplier
      let stateMultiplier = 1.0;
      switch (state) {
        case 'california':
          stateMultiplier = 1.5;
          break;
        case 'colorado':
          stateMultiplier = 1.3;
          break;
        case 'oregon':
          stateMultiplier = 1.25;
          break;
        case 'washington':
          stateMultiplier = 1.15;
          break;
        case 'arizona':
          stateMultiplier = 1.2;
          break;
        case 'other':
          stateMultiplier = 1.0;
          break;
      }

      // Wildfire risk multiplier
      let riskMultiplier = 1.0;
      let marketAvailability = '';
      switch (wildfireRisk) {
        case 'low':
          riskMultiplier = 1.0;
          marketAvailability = 'Excellent - Standard market readily available';
          break;
        case 'moderate':
          riskMultiplier = 2.2;
          marketAvailability = 'Good - Available with some carriers';
          break;
        case 'high':
          riskMultiplier = 4.5;
          marketAvailability = 'Limited - Few carriers, high deductibles likely';
          break;
        case 'extreme':
          riskMultiplier = 7.0;
          marketAvailability = 'Very Limited - FAIR Plan or surplus lines likely required';
          break;
      }

      // Roof type discount/surcharge
      let roofMultiplier = 1.0;
      switch (roofType) {
        case 'woodShake':
          roofMultiplier = 1.8; // Major surcharge
          break;
        case 'asphaltShingle':
          roofMultiplier = 1.0;
          break;
        case 'tile':
          roofMultiplier = 0.85;
          break;
        case 'metal':
          roofMultiplier = 0.75;
          break;
      }

      // Defensible space discount
      let defensibleDiscount = 1.0;
      switch (defensibleSpace) {
        case 'none':
          defensibleDiscount = 1.0;
          break;
        case 'partial':
          defensibleDiscount = 0.85;
          break;
        case 'full':
          defensibleDiscount = 0.70;
          break;
        case 'firewise':
          defensibleDiscount = 0.60;
          break;
      }

      // Ember vents discount
      const emberVentDiscount = emberVents === 'yes' ? 0.92 : 1.0;

      // Fire station distance
      let fireStationMultiplier = 1.0;
      switch (distanceToFireStation) {
        case 'under5':
          fireStationMultiplier = 0.95;
          break;
        case '5to10':
          fireStationMultiplier = 1.0;
          break;
        case '10to15':
          fireStationMultiplier = 1.15;
          break;
        case 'over15':
          fireStationMultiplier = 1.35;
          break;
      }

      // Calculate total premium
      const estimatedAnnualPremium = Math.round(
        baselinePremium * stateMultiplier * riskMultiplier * roofMultiplier *
        defensibleDiscount * emberVentDiscount * fireStationMultiplier
      );

      const wildfireRiskSurcharge = estimatedAnnualPremium - baselinePremium;

      // Calculate potential savings with full mitigation
      const fullyMitigatedPremium = Math.round(
        baselinePremium * stateMultiplier * riskMultiplier *
        0.75 * 0.60 * 0.92 * 0.95 // Best roof, full defensible space, ember vents, close fire station
      );
      const potentialSavings = Math.max(0, estimatedAnnualPremium - fullyMitigatedPremium);

      return {
        estimatedAnnualPremium,
        baselinePremium,
        wildfireRiskSurcharge: Math.max(0, wildfireRiskSurcharge),
        potentialSavings,
        marketAvailability
      };
    }
  }
};
