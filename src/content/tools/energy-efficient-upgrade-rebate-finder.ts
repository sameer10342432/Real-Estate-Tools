import { CalculatorContent } from '@/types';

export const EnergyEfficientUpgradeRebateFinderContent: CalculatorContent = {
  title: 'Energy Efficient Upgrade Rebate Finder',
  description: 'Find available rebates, tax credits, and incentives for energy-efficient home improvements including solar, HVAC, windows, and insulation',
  icon: '⚡',
  category: 'Seller Tools',
  slug: 'energy-efficient-upgrade-rebate-finder',
  
  metaTitle: 'Energy Efficiency Rebate Finder - Tax Credits & Incentives | Property Tools',
  metaDescription: 'Find federal tax credits, state rebates, and utility incentives for energy-efficient home upgrades. Calculate savings on solar panels, heat pumps, windows, insulation, and more.',
  
  article: {
    title: 'Complete Guide to Energy Efficiency Rebates and Tax Credits',
    content: `
      <h2>Energy Efficient Upgrade Rebate Finder</h2>
      <p>Energy-efficient home improvements can qualify for thousands of dollars in federal tax credits, state rebates, and utility company incentives. This guide helps you identify all available programs for solar panels, heat pumps, windows, insulation, and other qualifying upgrades.</p>

      <h3>Types of Energy Efficiency Incentives</h3>

      <h4>Federal Tax Credits (IRS Form 5695)</h4>
      <ul>
        <li><strong>Immediate tax liability reduction</strong> (not just deduction)</li>
        <li><strong>Claimed on annual tax return</strong></li>
        <li><strong>Can carry forward unused credits</strong> (some programs)</li>
        <li><strong>Must be primary residence</strong> for most credits</li>
        <li><strong>No income limits</strong> for most programs</li>
      </ul>

      <h4>State Rebates</h4>
      <ul>
        <li><strong>Direct cash back</strong> or bill credits</li>
        <li><strong>Varies widely by state</strong></li>
        <li><strong>Often stackable with federal credits</strong></li>
        <li><strong>May have income requirements</strong></li>
        <li><strong>Limited funding</strong> - first come, first served</li>
      </ul>

      <h4>Utility Company Incentives</h4>
      <ul>
        <li><strong>Instant rebates at purchase</strong></li>
        <li><strong>On-bill financing options</strong></li>
        <li><strong>Free energy audits</strong></li>
        <li><strong>Demand response programs</strong></li>
        <li><strong>Time-of-use rate discounts</strong></li>
      </ul>

      <h4>Local/Municipal Programs</h4>
      <ul>
        <li><strong>Property tax exemptions</strong> for solar/renewable</li>
        <li><strong>PACE financing</strong> (Property Assessed Clean Energy)</li>
        <li><strong>Grants for low-income households</strong></li>
        <li><strong>City-specific rebate programs</strong></li>
      </ul>

      <h3>Federal Tax Credits (Inflation Reduction Act 2024)</h3>

      <h4>Energy Efficient Home Improvement Credit (25C)</h4>
      <p><strong>Annual Credit Limit: $3,200 per year</strong></p>

      <p><strong>Home Envelope Improvements (30% credit, $1,200 annual max):</strong></p>
      <ul>
        <li><strong>Windows & skylights:</strong> 30% up to $600 total</li>
        <li><strong>Doors:</strong> 30% up to $500 ($250 per door, max 2 exterior doors)</li>
        <li><strong>Insulation:</strong> 30% up to $1,200</li>
        <li><strong>Air sealing:</strong> 30% up to $1,200</li>
      </ul>

      <p><strong>Heating & Cooling Equipment (30% credit):</strong></p>
      <ul>
        <li><strong>Heat pumps:</strong> 30% up to $2,000</li>
        <li><strong>Heat pump water heaters:</strong> 30% up to $2,000</li>
        <li><strong>Biomass stoves:</strong> 30% up to $2,000</li>
        <li><strong>Central AC units:</strong> 30% up to $600</li>
        <li><strong>Gas furnaces (95%+ AFUE):</strong> 30% up to $600</li>
        <li><strong>Gas boilers (95%+ AFUE):</strong> 30% up to $600</li>
      </ul>

      <p><strong>Other Improvements:</strong></p>
      <ul>
        <li><strong>Home energy audits:</strong> 30% up to $150</li>
        <li><strong>Electric panel upgrades (200A+):</strong> 30% up to $600</li>
      </ul>

      <h4>Residential Clean Energy Credit (25D)</h4>
      <p><strong>No Annual Limit</strong></p>

      <ul>
        <li><strong>Solar panels (PV):</strong> 30% of total cost (2024-2032)</li>
        <li><strong>Solar water heaters:</strong> 30% of cost</li>
        <li><strong>Geothermal heat pumps:</strong> 30% of cost</li>
        <li><strong>Small wind turbines:</strong> 30% of cost</li>
        <li><strong>Fuel cells:</strong> 30% up to $500 per 0.5kW</li>
        <li><strong>Battery storage:</strong> 30% (3kWh+ capacity, new in 2023)</li>
      </ul>

      <p><strong>Phase-Down Schedule:</strong></p>
      <ul>
        <li>2024-2032: 30%</li>
        <li>2033: 26%</li>
        <li>2034: 22%</li>
        <li>2035+: Expires unless extended</li>
      </ul>

      <h4>Qualification Requirements</h4>
      
      <p><strong>All Upgrades Must:</strong></p>
      <ul>
        <li>Be installed in taxpayer's primary residence</li>
        <li>Meet ENERGY STAR certification (most products)</li>
        <li>Be new equipment (not used/refurbished)</li>
        <li>Be installed during tax year claimed</li>
        <li>Have manufacturer certification statement</li>
      </ul>

      <h3>State-by-State Major Rebate Programs</h3>

      <h4>California</h4>
      <ul>
        <li><strong>SGIP:</strong> Self-Generation Incentive Program - $200-$850/kWh for battery storage</li>
        <li><strong>TECH Clean CA:</strong> Up to $7,000 for heat pump HVAC + water heater</li>
        <li><strong>Solar on Multifamily:</strong> Up to $3,000 per unit</li>
        <li><strong>Property tax exemption:</strong> 100% for solar systems</li>
      </ul>

      <h4>New York</h4>
      <ul>
        <li><strong>NY-Sun:</strong> $0.20-$0.40/watt solar rebate</li>
        <li><strong>Clean Heat:</strong> $1,000-$5,000 for heat pumps</li>
        <li><strong>EmPower+:</strong> Free weatherization for low-income</li>
        <li><strong>Property tax abatement:</strong> 15 years for solar</li>
      </ul>

      <h4>Massachusetts</h4>
      <ul>
        <li><strong>Mass Save:</strong> Up to $10,000 rebates for efficiency upgrades</li>
        <li><strong>SMART Solar:</strong> $0.22-$0.35/kWh production incentive</li>
        <li><strong>MassCEC:</strong> Additional solar grants</li>
        <li><strong>Sales tax exemption:</strong> Solar and wind equipment</li>
      </ul>

      <h4>Texas</h4>
      <ul>
        <li><strong>Utility rebates vary widely:</strong> $50-$6,000 depending on provider</li>
        <li><strong>Property tax exemption:</strong> 100% for solar</li>
        <li><strong>Austin Energy:</strong> $2,500-$4,000 for solar + battery</li>
        <li><strong>No state tax credit:</strong> (Texas has no income tax)</li>
      </ul>

      <h4>Florida</h4>
      <ul>
        <li><strong>Property tax exemption:</strong> 80% for renewable energy</li>
        <li><strong>Sales tax exemption:</strong> Solar and wind equipment</li>
        <li><strong>Net metering:</strong> Full retail credit for solar</li>
        <li><strong>Utility rebates:</strong> Vary by provider ($250-$2,500)</li>
      </ul>

      <h3>Major Utility Company Programs</h3>

      <h4>Duke Energy</h4>
      <ul>
        <li>Smart Saver HVAC: $50-$1,100 per unit</li>
        <li>Smart Saver Water Heating: $250-$500</li>
        <li>Smart Saver Insulation: Up to $600</li>
        <li>Free power manager (smart thermostat)</li>
      </ul>

      <h4>Pacific Gas & Electric (PG&E)</h4>
      <ul>
        <li>Energy Upgrade California: $500-$6,500 whole-house</li>
        <li>AC/heat pump rebates: $300-$3,500</li>
        <li>Water heater rebates: $800-$3,000</li>
        <li>Pool pump rebates: $200-$400</li>
      </ul>

      <h4>Con Edison (NY)</h4>
      <ul>
        <li>Cool Choice AC rebate: $150-$500</li>
        <li>Heating and Cooling: $250-$1,500</li>
        <li>Insulation: $0.30/sq ft up to $2,000</li>
        <li>Smart thermostat: $85 instant rebate</li>
      </ul>

      <h4>National Grid</h4>
      <ul>
        <li>HVAC Equipment: $300-$5,000</li>
        <li>Weatherization: $250-$4,000</li>
        <li>Water heating: $500-$1,500</li>
        <li>Heat pump water heaters: $750-$1,500</li>
      </ul>

      <h3>Maximizing Your Rebates: Stacking Strategies</h3>

      <h4>Example 1: Solar Panel Installation</h4>
      <p><strong>Project Cost: $25,000 (8kW system)</strong></p>

      <ul>
        <li><strong>Federal tax credit (30%):</strong> -$7,500</li>
        <li><strong>State rebate (CA SGIP):</strong> -$2,000</li>
        <li><strong>Utility company incentive:</strong> -$1,500</li>
        <li><strong>Property tax exemption:</strong> $0 ongoing property tax increase</li>
        <li><strong>Net cost:</strong> $14,000 (44% savings)</li>
        <li><strong>Plus annual electric savings:</strong> $2,000/year</li>
        <li><strong>Payback period:</strong> 7 years</li>
      </ul>

      <h4>Example 2: Whole-House HVAC & Insulation</h4>
      <p><strong>Project Cost: $15,000</strong></p>

      <ul>
        <li>Heat pump HVAC: $10,000</li>
        <li>Attic insulation: $3,000</li>
        <li>Air sealing: $2,000</li>
      </ul>

      <p><strong>Incentives:</strong></p>
      <ul>
        <li><strong>Federal tax credit - HVAC (30%, max $2,000):</strong> -$2,000</li>
        <li><strong>Federal tax credit - insulation (30%, max $1,200):</strong> -$1,200</li>
        <li><strong>State heat pump rebate:</strong> -$2,500</li>
        <li><strong>Utility insulation rebate:</strong> -$1,000</li>
        <li><strong>Net cost:</strong> $8,300 (45% savings)</li>
        <li><strong>Annual energy savings:</strong> $1,200/year</li>
        <li><strong>Payback period:</strong> 7 years</li>
      </ul>

      <h4>Example 3: Window Replacement</h4>
      <p><strong>Project Cost: $8,000 (10 windows)</strong></p>

      <ul>
        <li><strong>Federal tax credit (30%, max $600):</strong> -$600</li>
        <li><strong>State efficiency rebate:</strong> -$400</li>
        <li><strong>Utility rebate ($50/window):</strong> -$500</li>
        <li><strong>Net cost:</strong> $6,500 (19% savings)</li>
      </ul>

      <h3>How to Claim Federal Tax Credits</h3>

      <h4>Documentation Required</h4>
      <ul>
        <li><strong>Manufacturer's Certification:</strong> Must provide certification that product qualifies</li>
        <li><strong>Receipt/invoice:</strong> Proof of purchase with cost breakdown</li>
        <li><strong>Installation date:</strong> Must be within tax year claimed</li>
        <li><strong>Product details:</strong> Model number, efficiency ratings</li>
        <li><strong>Contractor info:</strong> Name, business info (if applicable)</li>
      </ul>

      <h4>Filing Process</h4>
      <ul>
        <li><strong>IRS Form 5695:</strong> Residential Energy Credits</li>
        <li><strong>Attach to Form 1040:</strong> With your annual tax return</li>
        <li><strong>Keep 7 years:</strong> Documentation in case of audit</li>
        <li><strong>Carryforward:</strong> Some credits can carry to next year if exceeded tax liability</li>
      </ul>

      <h4>Common Mistakes</h4>
      <ul>
        <li>❌ Claiming for rental property (must be primary residence)</li>
        <li>❌ Not getting manufacturer certification</li>
        <li>❌ Claiming installation labor for 25C (only equipment qualifies)</li>
        <li>❌ Exceeding annual caps ($1,200 for envelope, $2,000 for HVAC)</li>
        <li>❌ Claiming used/refurbished equipment</li>
      </ul>

      <h3>Research Resources for Your Area</h3>

      <h4>National Databases</h4>
      <ul>
        <li><strong>DSIRE:</strong> Database of State Incentives for Renewables & Efficiency (dsireusa.org)</li>
        <li><strong>ENERGY STAR Rebate Finder:</strong> energystar.gov/rebate-finder</li>
        <li><strong>IRS Energy Credits:</strong> irs.gov/credits-deductions/energy-incentives</li>
        <li><strong>Department of Energy:</strong> energy.gov/savings</li>
      </ul>

      <h4>State Resources</h4>
      <ul>
        <li>State energy office websites</li>
        <li>Public utilities commission</li>
        <li>State tax department</li>
        <li>Green building programs</li>
      </ul>

      <h4>Local Resources</h4>
      <ul>
        <li>Your electric/gas utility website</li>
        <li>Municipal sustainability office</li>
        <li>Weatherization assistance program</li>
        <li>Community action agencies</li>
      </ul>

      <h3>Qualification Criteria by Upgrade Type</h3>

      <h4>Windows & Doors</h4>
      <ul>
        <li><strong>ENERGY STAR Most Efficient certified</strong></li>
        <li><strong>U-Factor ≤ 0.27</strong> (Northern) or ≤ 0.30 (Southern/Central)</li>
        <li><strong>SHGC ≤ 0.25</strong> (Southern) or ≤ 0.40 (Northern/Central)</li>
        <li><strong>Exterior doors:</strong> ENERGY STAR certified</li>
        <li><strong>Skylights:</strong> U-Factor ≤ 0.53 and SHGC ≤ 0.30</li>
      </ul>

      <h4>HVAC Equipment</h4>
      <ul>
        <li><strong>Heat pumps:</strong> HSPF2 ≥ 8.1 and EER2 ≥ 10.1 (split) or ≥ 11.0 (package)</li>
        <li><strong>Central AC:</strong> SEER2 ≥ 16 and EER2 ≥ 12</li>
        <li><strong>Gas furnaces:</strong> AFUE ≥ 95%</li>
        <li><strong>Gas boilers:</strong> AFUE ≥ 95%</li>
        <li><strong>Oil furnaces/boilers:</strong> AFUE ≥ 90%</li>
      </ul>

      <h4>Water Heaters</h4>
      <ul>
        <li><strong>Heat pump water heaters:</strong> UEF ≥ 3.3 for 50-55 gallon</li>
        <li><strong>Gas tankless:</strong> UEF ≥ 0.95</li>
        <li><strong>Gas storage:</strong> UEF ≥ 0.81</li>
        <li><strong>Electric storage:</strong> UEF ≥ 2.3</li>
      </ul>

      <h4>Insulation</h4>
      <ul>
        <li><strong>Must meet IECC requirements for your climate zone</strong></li>
        <li><strong>Bulk insulation:</strong> R-13 to R-60 depending on location</li>
        <li><strong>Air sealing products:</strong> Weather stripping, caulking, spray foam</li>
        <li><strong>Requires manufacturer certification</strong></li>
      </ul>

      <h3>Special Programs for Low-Income Households</h3>

      <h4>Weatherization Assistance Program (WAP)</h4>
      <ul>
        <li><strong>Income limit:</strong> 200% of federal poverty level</li>
        <li><strong>Services:</strong> Free insulation, air sealing, HVAC repair</li>
        <li><strong>Average benefit:</strong> $7,000-$10,000 in improvements</li>
        <li><strong>Apply through:</strong> Local community action agencies</li>
      </ul>

      <h4>LIHEAP (Low Income Home Energy Assistance)</h4>
      <ul>
        <li>Heating/cooling bill assistance</li>
        <li>Energy crisis intervention</li>
        <li>Weatherization assistance</li>
        <li>Income limits vary by state</li>
      </ul>

      <h4>Utility-Specific Programs</h4>
      <ul>
        <li>Many utilities offer enhanced rebates for low-income</li>
        <li>Free energy audits</li>
        <li>No-cost efficiency upgrades</li>
        <li>Check with your utility provider</li>
      </ul>

      <h3>Timeline and Application Process</h3>

      <h4>Before Purchase</h4>
      <ul>
        <li><strong>Research available incentives:</strong> 1-2 weeks</li>
        <li><strong>Pre-qualify for rebates:</strong> Some require pre-approval</li>
        <li><strong>Choose qualifying products:</strong> Check model numbers</li>
        <li><strong>Get quotes from contractors:</strong> Ask about rebate experience</li>
        <li><strong>Plan timing:</strong> Some programs have limited funding</li>
      </ul>

      <h4>After Installation</h4>
      <ul>
        <li><strong>State/utility rebates:</strong> Submit within 30-90 days typically</li>
        <li><strong>Federal tax credits:</strong> Claim on next year's tax return</li>
        <li><strong>Processing time:</strong> 4-12 weeks for rebates</li>
        <li><strong>Tax refund:</strong> Part of normal refund timeline</li>
      </ul>

      <h4>Required Submittals</h4>
      <ul>
        <li>Completed application form</li>
        <li>Copy of itemized invoice/receipt</li>
        <li>Proof of payment</li>
        <li>Manufacturer certification (for tax credits)</li>
        <li>Product spec sheets</li>
        <li>Before/after photos (some programs)</li>
      </ul>

      <h3>Emerging Incentive Programs (2024-2025)</h3>

      <h4>HOMES Rebate Program (Coming 2024)</h4>
      <ul>
        <li><strong>Performance-based:</strong> $2,000-$8,000 based on % energy reduction</li>
        <li><strong>20% reduction:</strong> $2,000 rebate</li>
        <li><strong>35%+ reduction:</strong> $4,000-$8,000 rebate</li>
        <li><strong>Low-income:</strong> Higher rebates up to 100% project cost</li>
      </ul>

      <h4>High-Efficiency Electric Home Rebate (Coming 2024)</h4>
      <ul>
        <li>Heat pump HVAC: Up to $8,000</li>
        <li>Heat pump water heater: Up to $1,750</li>
        <li>Electric stove/cooktop: Up to $840</li>
        <li>Electric heat pump clothes dryer: Up to $840</li>
        <li>Electrical panel upgrade: Up to $4,000</li>
        <li>Wiring upgrade: Up to $2,500</li>
        <li><strong>Total household cap:</strong> $14,000</li>
        <li><strong>Targeted to low/moderate income:</strong> 80-150% area median income</li>
      </ul>

      <h3>Common Questions</h3>

      <h4>Can I stack federal credits with state/utility rebates?</h4>
      <p><strong>Yes!</strong> Federal tax credits can be combined with state rebates and utility incentives. The federal credit is based on your out-of-pocket cost after rebates.</p>

      <h4>Do tax credits apply to second homes or rentals?</h4>
      <p>Most residential energy credits require the property to be your primary residence. Investment properties generally don't qualify for consumer rebates but may qualify for commercial/business energy credits.</p>

      <h4>What if I don't have enough tax liability?</h4>
      <p>Some credits can be carried forward to future years. However, they're non-refundable - you can't get back more than you owe in taxes.</p>

      <h4>Can I DIY and still get credits?</h4>
      <p>Yes for federal credits if the equipment qualifies. Some state/utility rebates require licensed contractor installation - check program rules.</p>

      <h4>Do I need a home energy audit?</h4>
      <p>Not required for tax credits, but many rebate programs require it. Plus, it's eligible for a $150 tax credit itself and helps identify the most cost-effective upgrades.</p>

      <h3>Conclusion</h3>
      <p>Energy efficiency rebates and tax credits can reduce the cost of home improvements by 30-60%. The key is researching all available programs before purchasing, ensuring products meet efficiency requirements, keeping thorough documentation, and filing claims promptly. With federal, state, utility, and local incentives often stackable, the net cost of efficiency upgrades is lower than ever in 2024.</p>
    `
  }
};
