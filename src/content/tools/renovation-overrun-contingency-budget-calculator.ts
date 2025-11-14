import { CalculatorContent } from '@/types';

export const RenovationOverrunContingencyBudgetCalculatorContent: CalculatorContent = {
  title: 'Renovation Overrun (Contingency) Budget Calculator',
  description: 'Calculate appropriate contingency reserves for your renovation project based on scope, complexity, and risk factors',
  icon: '💰',
  category: 'Seller Tools',
  slug: 'renovation-overrun-contingency-budget-calculator',
  
  metaTitle: 'Renovation Contingency Calculator - Budget Overrun Planning | Property Tools',
  metaDescription: 'Calculate contingency reserves for renovation projects. Determine how much extra budget you need for unexpected costs, change orders, and hidden problems in your remodel.',
  
  article: {
    title: 'How to Budget for Renovation Cost Overruns and Contingencies',
    content: `
      <h2>Renovation Overrun (Contingency) Budget Calculator</h2>
      <p>Nearly every renovation project encounters unexpected costs. A contingency budget protects you from financial stress, project stalls, and forced compromises when surprises arise. This calculator helps you determine the right contingency percentage based on your project's specific risk factors.</p>

      <h3>Why You Need a Contingency Budget</h3>
      <ul>
        <li>Average renovations run 10-30% over initial budget</li>
        <li>Hidden problems discovered during demolition</li>
        <li>Change orders and scope adjustments</li>
        <li>Material price increases during project</li>
        <li>Code compliance upgrades required</li>
        <li>Shipping delays requiring expedited shipping</li>
        <li>Damage to existing structures during work</li>
        <li>Allows flexibility for upgrades without restarting financing</li>
      </ul>

      <h3>Recommended Contingency Percentages by Project Type</h3>

      <h4>10-15% Contingency - Low Complexity</h4>
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Cosmetic updates (paint, flooring, fixtures)</li>
        <li>New construction with no demolition</li>
        <li>Projects in homes under 10 years old</li>
        <li>Single-trade work (just flooring, just paint)</li>
        <li>Work with no structural or mechanical changes</li>
        <li>Standard materials readily available</li>
      </ul>

      <p><strong>Example Projects:</strong></p>
      <ul>
        <li>Fresh paint throughout house: 10%</li>
        <li>New carpet or LVP flooring: 10-12%</li>
        <li>Light fixture replacement: 10%</li>
        <li>Cabinet refinishing: 12-15%</li>
      </ul>

      <h4>15-20% Contingency - Moderate Complexity</h4>
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Standard bathroom remodels</li>
        <li>Kitchen updates with existing layout</li>
        <li>Basement finishing (no major issues found)</li>
        <li>Room additions on slab foundation</li>
        <li>Homes 10-30 years old</li>
        <li>Projects requiring 2-3 trades</li>
      </ul>

      <p><strong>Example Projects:</strong></p>
      <ul>
        <li>Guest bathroom remodel, no layout changes: 15-18%</li>
        <li>Kitchen cabinet replacement same layout: 15-20%</li>
        <li>600 sq ft basement finish: 15-18%</li>
        <li>Deck replacement (no structural issues): 15%</li>
      </ul>

      <h4>20-30% Contingency - High Complexity</h4>
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Full kitchen remodels with layout changes</li>
        <li>Master bathroom with plumbing relocation</li>
        <li>Projects in homes 30-50 years old</li>
        <li>Work requiring structural changes</li>
        <li>Projects with known code violations to fix</li>
        <li>Renovations during material shortages</li>
      </ul>

      <p><strong>Example Projects:</strong></p>
      <ul>
        <li>Kitchen remodel relocating sink/appliances: 20-25%</li>
        <li>Master bath with layout change: 20-25%</li>
        <li>Attic conversion to bedroom: 25-30%</li>
        <li>Major room addition with complex roof tie-in: 25-30%</li>
      </ul>

      <h4>30-50% Contingency - Very High Complexity</h4>
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Historic home renovations (50+ years old)</li>
        <li>Gut renovations or whole house remodels</li>
        <li>Homes with known foundation issues</li>
        <li>Projects with extensive mold/water damage</li>
        <li>DIY projects with little experience</li>
        <li>Work in homes with knob-and-tube wiring or old plumbing</li>
      </ul>

      <p><strong>Example Projects:</strong></p>
      <ul>
        <li>Whole house gut renovation (100+ years old): 40-50%</li>
        <li>Foundation repair plus basement remodel: 35-45%</li>
        <li>Historic home kitchen (preserving character): 30-40%</li>
        <li>Fixing major structural issues: 40-50%</li>
      </ul>

      <h3>Common Sources of Cost Overruns</h3>

      <h4>Hidden Problems (25-40% of overruns)</h4>
      <ul>
        <li><strong>Plumbing issues:</strong> Corroded pipes, improper venting ($1,500-$8,000)</li>
        <li><strong>Electrical problems:</strong> Outdated wiring, insufficient service ($2,000-$10,000)</li>
        <li><strong>Structural damage:</strong> Rot, termites, water damage ($3,000-$25,000+)</li>
        <li><strong>Mold/moisture:</strong> Behind walls or under floors ($2,000-$15,000)</li>
        <li><strong>Asbestos/lead:</strong> Abatement required ($1,500-$10,000)</li>
        <li><strong>Foundation issues:</strong> Cracks, settling, water intrusion ($5,000-$40,000+)</li>
      </ul>

      <h4>Change Orders (30-50% of overruns)</h4>
      <ul>
        <li><strong>Scope creep:</strong> "While we're at it" additions</li>
        <li><strong>Design changes:</strong> Changing mind mid-project</li>
        <li><strong>Upgrades:</strong> Seeing samples and wanting better quality</li>
        <li><strong>Additional work needed:</strong> Discovered once walls open</li>
        <li><strong>Typical change order cost:</strong> 15-25% above original bid</li>
      </ul>

      <h4>Material Issues (15-25% of overruns)</h4>
      <ul>
        <li><strong>Price increases:</strong> 5-15% during multi-month projects</li>
        <li><strong>Discontinued items:</strong> Need to select new materials</li>
        <li><strong>Shipping delays:</strong> Expedited shipping costs ($500-$3,000)</li>
        <li><strong>Damage in transit:</strong> Reordering and delays</li>
        <li><strong>Order errors:</strong> Wrong size/color/style</li>
        <li><strong>Special orders:</strong> Unexpected custom fees</li>
      </ul>

      <h4>Code Compliance (10-20% of overruns)</h4>
      <ul>
        <li><strong>Unpermitted work discovered:</strong> Must bring to code</li>
        <li><strong>Failed inspections:</strong> Rework required</li>
        <li><strong>Outdated systems:</strong> Entire system upgrade mandated</li>
        <li><strong>GFCI/AFCI requirements:</strong> New electrical circuits</li>
        <li><strong>Egress requirements:</strong> Windows, stairs for basements</li>
        <li><strong>ADA/accessibility:</strong> Height, clearance changes</li>
      </ul>

      <h4>Labor Complications (10-15% of overruns)</h4>
      <ul>
        <li><strong>Difficult access:</strong> Extra time to haul materials</li>
        <li><strong>Coordination issues:</strong> Trades waiting for each other</li>
        <li><strong>Weather delays:</strong> Extended timeline = more labor costs</li>
        <li><strong>Complexity underestimated:</strong> Takes longer than quoted</li>
      </ul>

      <h3>Calculating Your Specific Contingency</h3>

      <h4>Base Contingency by Project Type</h4>
      <p>Start with base percentage:</p>
      <ul>
        <li>Cosmetic updates: 10%</li>
        <li>Standard remodels: 15%</li>
        <li>Complex renovations: 20%</li>
        <li>Historic/problem homes: 30%</li>
        <li>Whole house gut: 40%</li>
      </ul>

      <h4>Add Risk Factors</h4>
      <p>Add percentage for each that applies:</p>
      <ul>
        <li><strong>+5%:</strong> Home over 50 years old</li>
        <li><strong>+3-5%:</strong> Home 30-50 years old</li>
        <li><strong>+5-10%:</strong> Known foundation or structural issues</li>
        <li><strong>+3-5%:</strong> Previous unpermitted work observed</li>
        <li><strong>+5%:</strong> Moving plumbing or gas lines</li>
        <li><strong>+3%:</strong> Removing load-bearing walls</li>
        <li><strong>+5-10%:</strong> Tight material supply chain</li>
        <li><strong>+3-5%:</strong> Winter project with weather exposure</li>
        <li><strong>+10-15%:</strong> DIY with limited experience</li>
        <li><strong>+5%:</strong> Using lowest-bid contractor</li>
      </ul>

      <h4>Example Calculation</h4>
      <p><strong>Kitchen Remodel: $60,000 budget</strong></p>
      <ul>
        <li>Base contingency (standard remodel): 15%</li>
        <li>House is 45 years old: +4%</li>
        <li>Moving sink/dishwasher: +5%</li>
        <li>Removing partial wall: +3%</li>
        <li><strong>Total recommended contingency: 27%</strong></li>
        <li><strong>Contingency budget: $16,200</strong></li>
        <li><strong>Total budget including contingency: $76,200</strong></li>
      </ul>

      <h3>How to Use Your Contingency Budget</h3>

      <h4>Tier Your Contingency</h4>
      <p>Break into three tiers for better control:</p>
      
      <p><strong>Tier 1: Critical Contingency (40% of total contingency)</strong></p>
      <ul>
        <li>Reserved for true emergencies only</li>
        <li>Structural issues, code violations, safety problems</li>
        <li>Required to complete project to code</li>
        <li>Example: Foundation repair, mold remediation, electrical rewiring</li>
      </ul>

      <p><strong>Tier 2: Unexpected Work (40% of total contingency)</strong></p>
      <ul>
        <li>Hidden problems discovered during demo</li>
        <li>Required upgrades to related systems</li>
        <li>Material substitutions when discontinued</li>
        <li>Example: Replace corroded pipes, subflooring, water damage</li>
      </ul>

      <p><strong>Tier 3: Improvements (20% of total contingency)</strong></p>
      <ul>
        <li>Upgrade opportunities that add value</li>
        <li>Change orders for better functionality</li>
        <li>Material upgrades within reason</li>
        <li>Example: Upgraded tile, better fixtures, additional features</li>
      </ul>

      <h4>Contingency Usage Rules</h4>
      <ul>
        <li><strong>Don't spend it on day one:</strong> Wait for actual needs</li>
        <li><strong>Track all uses:</strong> Document why contingency was tapped</li>
        <li><strong>Require approval:</strong> Both spouses/partners agree on uses</li>
        <li><strong>Consider alternatives:</strong> Is this expense truly necessary?</li>
        <li><strong>Phased releases:</strong> Don't release full contingency to contractor</li>
      </ul>

      <h3>What If You Exceed Contingency?</h3>

      <h4>Options When Contingency Runs Out</h4>
      <ul>
        <li><strong>Reduce scope:</strong> Eliminate non-essential items</li>
        <li><strong>Downgrade materials:</strong> Choose more affordable finishes</li>
        <li><strong>Phase work:</strong> Complete critical now, finish later</li>
        <li><strong>Additional financing:</strong> HELOC, personal loan, credit card (last resort)</li>
        <li><strong>Pause project:</strong> Save up more funds before continuing</li>
        <li><strong>DIY some work:</strong> Take on finish tasks yourself</li>
      </ul>

      <h4>Prevent Overruns from Spiraling</h4>
      <ul>
        <li>Make decisions quickly when issues arise</li>
        <li>Don't delay informing contractor of budget limits</li>
        <li>Get multiple quotes for unexpected repairs</li>
        <li>Consider value vs. necessity for every addition</li>
        <li>Track spending weekly against budget</li>
      </ul>

      <h3>Contingency Budget Mistakes to Avoid</h3>

      <ul>
        <li>❌ No contingency at all ("we'll figure it out")</li>
        <li>❌ Too small contingency (5% on complex project)</li>
        <li>❌ Spending contingency on upgrades early</li>
        <li>❌ Not tracking contingency usage</li>
        <li>❌ Treating contingency as "extra money for fun stuff"</li>
        <li>❌ Borrowing against contingency before project starts</li>
        <li>❌ Not separating contingency from regular budget</li>
        <li>❌ Assuming contingency covers unlimited overruns</li>
        <li>❌ Failing to replenish if used early</li>
      </ul>

      <h3>Real-World Contingency Scenarios</h3>

      <h4>Scenario 1: Bathroom Remodel - Plumbing Disaster</h4>
      <p><strong>Original Budget: $25,000 | Contingency: $5,000 (20%)</strong></p>
      
      <p>Day 3 of demolition:</p>
      <ul>
        <li>Cast iron drain pipes cracked and corroding</li>
        <li>Water damage to subfloor and joists</li>
        <li>Mold growth behind tub enclosure</li>
      </ul>

      <p><strong>Contingency Usage:</strong></p>
      <ul>
        <li>Replace 30 feet of cast iron drain: $2,800</li>
        <li>Joist sistering and subfloor replacement: $1,600</li>
        <li>Mold remediation: $1,200</li>
        <li><strong>Total contingency used: $5,600</strong></li>
        <li><strong>$600 over contingency - financed with HELOC</strong></li>
      </ul>

      <p><strong>Outcome:</strong> Contingency covered 88% of unexpected costs, preventing major budget crisis.</p>

      <h4>Scenario 2: Kitchen Remodel - Change Order Creep</h4>
      <p><strong>Original Budget: $50,000 | Contingency: $10,000 (20%)</strong></p>
      
      <p><strong>Change Orders:</strong></p>
      <ul>
        <li>Upgrade to quartz from laminate: +$3,000</li>
        <li>Add under-cabinet lighting: +$1,200</li>
        <li>Extend island by 12 inches: +$800</li>
        <li>Upgrade hardware: +$400</li>
        <li>Add wine fridge: +$1,600</li>
        <li><strong>Total: $7,000</strong></li>
      </ul>

      <p><strong>Unexpected Issues:</strong></p>
      <ul>
        <li>Electrical panel upgrade required: $2,400</li>
        <li>Outdated gas line replacement: $1,800</li>
        <li><strong>Total: $4,200</strong></li>
      </ul>

      <p><strong>Result:</strong> Exceeded contingency by $1,200. Had to decline wine fridge to stay on budget.</p>

      <h4>Scenario 3: Basement Finish - Moisture Problems</h4>
      <p><strong>Original Budget: $40,000 | Contingency: $8,000 (20%)</strong></p>
      
      <p><strong>Pre-construction inspection revealed:</strong></p>
      <ul>
        <li>Water seepage along foundation wall</li>
        <li>No sump pump installed</li>
        <li>Poor grading directing water to foundation</li>
      </ul>

      <p><strong>Contingency Usage (wisely spent before starting):</strong></p>
      <ul>
        <li>Interior/exterior waterproofing: $4,500</li>
        <li>Sump pump installation: $1,800</li>
        <li>Grading and drainage improvements: $2,200</li>
        <li><strong>Total: $8,500</strong></li>
        <li><strong>$500 over contingency - worth it to prevent water damage</strong></li>
      </ul>

      <p><strong>Outcome:</strong> Starting with dry basement, project completed on time with no moisture issues.</p>

      <h3>Financing Your Contingency</h3>

      <h4>Include in Primary Loan</h4>
      <ul>
        <li><strong>Best for:</strong> Construction loans, renovation loans</li>
        <li><strong>Pros:</strong> One low-rate loan, funds available throughout</li>
        <li><strong>Cons:</strong> Paying interest even if unused</li>
      </ul>

      <h4>Home Equity Line of Credit (HELOC)</h4>
      <ul>
        <li><strong>Best for:</strong> Contingency backup</li>
        <li><strong>Pros:</strong> Only pay interest if used, can repay and reuse</li>
        <li><strong>Cons:</strong> Variable rate, approval needed upfront</li>
      </ul>

      <h4>Cash Savings</h4>
      <ul>
        <li><strong>Best for:</strong> Small to medium projects</li>
        <li><strong>Pros:</strong> No interest, full control</li>
        <li><strong>Cons:</strong> Ties up emergency fund</li>
      </ul>

      <h4>Credit Card (Last Resort)</h4>
      <ul>
        <li><strong>Best for:</strong> True emergencies only</li>
        <li><strong>Pros:</strong> Immediate availability</li>
        <li><strong>Cons:</strong> High interest (18-24%), debt trap risk</li>
      </ul>

      <h3>What to Do With Leftover Contingency</h3>

      <h4>If You Don't Use Full Contingency</h4>
      <ul>
        <li><strong>Option 1:</strong> Complete wish-list items (pergola, landscaping)</li>
        <li><strong>Option 2:</strong> Upgrade one high-impact element</li>
        <li><strong>Option 3:</strong> Pay down renovation loan faster</li>
        <li><strong>Option 4:</strong> Keep as home maintenance fund</li>
        <li><strong>Option 5:</strong> Return to savings/emergency fund</li>
      </ul>

      <p><strong>Pro tip:</strong> Don't commit leftover contingency until project is 100% complete and punch list done. Hidden issues can still emerge in final weeks.</p>

      <h3>Contingency in Contractor Bids</h3>

      <h4>Contractor's Contingency vs. Your Contingency</h4>
      <ul>
        <li><strong>Contractor's contingency:</strong> Built into bid (5-10%), protects them from errors</li>
        <li><strong>Your contingency:</strong> Separate fund, protects you from unknowns</li>
        <li><strong>Both needed:</strong> Different purposes, different control</li>
      </ul>

      <h4>Red Flags in Bids</h4>
      <ul>
        <li>Contractor won't separate their contingency from pricing</li>
        <li>Bid assumes "everything goes perfectly"</li>
        <li>No allowances for potential issues in old homes</li>
        <li>Contractor wants to control your contingency fund</li>
      </ul>

      <h3>Tax and Financial Planning</h3>

      <h4>Contingency and Taxes</h4>
      <ul>
        <li>Contingency spent on repairs: Generally not added to basis</li>
        <li>Contingency spent on improvements: Increases home basis</li>
        <li>Track how contingency was spent for tax purposes</li>
        <li>Consult CPA for large projects</li>
      </ul>

      <h4>Impact on Home Equity</h4>
      <ul>
        <li>Contingency is part of total project cost</li>
        <li>Necessary repairs may not add value dollar-for-dollar</li>
        <li>Strategic upgrades with contingency can maximize ROI</li>
      </ul>

      <h3>Conclusion</h3>
      <p>A properly calculated contingency budget is insurance for your renovation project. By analyzing your project's complexity, your home's age and condition, and potential risk factors, you can determine the right contingency percentage. Tier your contingency into critical, unexpected, and improvement buckets, track usage carefully, and resist the urge to spend it prematurely. A well-managed contingency budget is often the difference between a successful renovation and a financial disaster.</p>
    `
  }
};
