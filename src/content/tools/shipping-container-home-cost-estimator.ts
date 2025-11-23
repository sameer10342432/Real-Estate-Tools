import { CalculatorContent } from '@/types';

export const ShippingContainerHomeCostEstimatorContent: CalculatorContent = {
  title: 'Shipping Container Home Cost Estimator',
  description: 'Estimate the total cost to build a shipping container home including container purchase, modifications, foundation, utilities, permits, and finishing costs',
  icon: '📦',
  category: 'Additional Tools',
  slug: 'shipping-container-home-cost-estimator',
  
  metaTitle: 'Shipping Container Home Cost Estimator - Build Budget Calculator | Property Tools',
  metaDescription: 'Estimate the total cost to build a shipping container home. Calculate container purchase, modifications, foundation, utilities, permits, and finishing costs.',
  
  article: {
    title: 'Shipping Container Home Cost Estimator - Complete Build Budget',
    content: \`
      <h2>Shipping Container Home Cost Estimator</h2>
      <p>Interested in building a shipping container home? This calculator estimates total costs including container purchase, modifications (cutting, insulation, windows), foundation, utilities, permits, and finishing to help you budget realistically.</p>

      <h3>Shipping Container Home Overview</h3>
      <ul>
        <li><strong>Container Sizes:</strong> 20ft ($2,000-$5,000) or 40ft ($3,500-$8,000)</li>
        <li><strong>Total Cost Range:</strong> $10,000-$175,000+ depending on finish level</li>
        <li><strong>Square Footage:</strong> 160 sqft (20ft) or 320 sqft (40ft) per container</li>
        <li><strong>Build Time:</strong> 2-6 months (DIY longer, professional faster)</li>
      </ul>

      <h3>Cost Breakdown by Build Quality</h3>
      
      <h4>DIY Basic Build (Minimalist, Off-Grid)</h4>
      <ul>
        <li>Container (40ft, used): $4,000</li>
        <li>Cutting/modifications: $2,000 (DIY)</li>
        <li>Insulation: $1,500</li>
        <li>Windows/doors: $2,000</li>
        <li>Basic plumbing/electric: $3,000</li>
        <li>Flooring/walls/ceiling: $2,500</li>
        <li>Foundation (piers): $1,500</li>
        <li><strong>Total: $16,500</strong></li>
        <li>Time: 4-6 months (weekends)</li>
      </ul>

      <h4>Professional Basic Build</h4>
      <ul>
        <li>Container (40ft, one-trip): $6,000</li>
        <li>Cutting/modifications: $8,000</li>
        <li>Insulation (spray foam): $4,000</li>
        <li>Windows/doors (quality): $6,000</li>
        <li>Plumbing/electric: $12,000</li>
        <li>Flooring/walls/ceiling: $8,000</li>
        <li>Foundation (concrete slab): $6,000</li>
        <li>Permits: $3,000</li>
        <li>Labor: $25,000</li>
        <li><strong>Total: $78,000</strong></li>
        <li>Time: 2-3 months</li>
      </ul>

      <h4>Luxury Build (High-End Finishes)</h4>
      <ul>
        <li>Multiple containers (3x 40ft): $21,000</li>
        <li>Architectural design: $10,000</li>
        <li>Complex modifications: $30,000</li>
        <li>Premium insulation: $12,000</li>
        <li>Large windows/glass walls: $25,000</li>
        <li>Full plumbing/HVAC/electric: $40,000</li>
        <li>High-end finishes: $30,000</li>
        <li>Foundation: $15,000</li>
        <li>Permits/engineering: $8,000</li>
        <li>Labor: $75,000</li>
        <li><strong>Total: $266,000</strong></li>
        <li>Time: 4-6 months</li>
      </ul>

      <h3>Detailed Cost Components</h3>
      
      <h4>1. Container Purchase</h4>
      <ul>
        <li><strong>20ft Used:</strong> $2,000-$3,500</li>
        <li><strong>20ft One-Trip (like new):</strong> $4,000-$6,000</li>
        <li><strong>40ft Used:</strong> $3,500-$5,500</li>
        <li><strong>40ft One-Trip:</strong> $5,500-$8,000</li>
        <li><strong>40ft High Cube (9.5ft tall):</strong> $6,000-$9,000</li>
      </ul>

      <h4>2. Site Preparation & Foundation</h4>
      <ul>
        <li><strong>Pier Foundation:</strong> $1,500-$4,000 (cheapest)</li>
        <li><strong>Strip Foundation:</strong> $3,000-$8,000</li>
        <li><strong>Concrete Slab:</strong> $5,000-$12,000 (best for level)</li>
        <li><strong>Basement Foundation:</strong> $15,000-$40,000</li>
        <li><strong>Site Grading/Prep:</strong> $500-$3,000</li>
      </ul>

      <h4>3. Modifications & Structural Work</h4>
      <ul>
        <li><strong>Cutting Openings (doors, windows):</strong> $500-$2,000 each (DIY $100-$500)</li>
        <li><strong>Reinforcement (framing):</strong> $2,000-$8,000</li>
        <li><strong>Joining Multiple Containers:</strong> $3,000-$10,000 per connection</li>
        <li><strong>Roof Modifications:</strong> $2,000-$8,000</li>
        <li><strong>Rust Treatment/Sandblasting:</strong> $1,000-$4,000</li>
      </ul>

      <h4>4. Insulation</h4>
      <ul>
        <li><strong>Spray Foam (best):</strong> $3,000-$6,000 per 40ft container</li>
        <li><strong>Rigid Foam Panels:</strong> $1,500-$3,000 (DIY-friendly)</li>
        <li><strong>Mineral Wool:</strong> $1,000-$2,500</li>
        <li><strong>Reflective Insulation:</strong> $500-$1,500 (minimal)</li>
      </ul>

      <h4>5. Windows & Doors</h4>
      <ul>
        <li><strong>Standard Windows:</strong> $300-$800 each</li>
        <li><strong>Large/Panoramic Windows:</strong> $1,500-$5,000 each</li>
        <li><strong>Glass Walls:</strong> $8,000-$25,000</li>
        <li><strong>Exterior Doors:</strong> $500-$2,000 each</li>
        <li><strong>Sliding Glass Doors:</strong> $1,200-$4,000</li>
      </ul>

      <h4>6. Utilities & Systems</h4>
      <ul>
        <li><strong>Electrical Wiring:</strong> $3,000-$10,000</li>
        <li><strong>Plumbing:</strong> $4,000-$12,000</li>
        <li><strong>HVAC System:</strong> $4,000-$12,000</li>
        <li><strong>Solar Panels (off-grid):</strong> $10,000-$30,000</li>
        <li><strong>Septic System:</strong> $5,000-$20,000</li>
        <li><strong>Well:</strong> $5,000-$15,000</li>
      </ul>

      <h4>7. Interior Finishes</h4>
      <ul>
        <li><strong>Flooring:</strong> $2-$15 per sqft ($1,000-$8,000)</li>
        <li><strong>Wall Finishing (drywall, paint):</strong> $3,000-$10,000</li>
        <li><strong>Kitchen Cabinets:</strong> $3,000-$15,000</li>
        <li><strong>Bathroom Fixtures:</strong> $2,000-$8,000</li>
        <li><strong>Appliances:</strong> $2,000-$10,000</li>
      </ul>

      <h4>8. Permits & Professional Fees</h4>
      <ul>
        <li><strong>Building Permits:</strong> $1,000-$5,000</li>
        <li><strong>Architectural Plans:</strong> $2,000-$15,000</li>
        <li><strong>Structural Engineering:</strong> $1,500-$5,000</li>
        <li><strong>Inspections:</strong> $500-$2,000</li>
      </ul>

      <h3>Pros & Cons of Container Homes</h3>
      
      <h4>Pros:</h4>
      <ul>
        <li>Faster build time (2-6 months vs 6-12 for traditional)</li>
        <li>Structural strength (steel)</li>
        <li>Eco-friendly (reusing shipping containers)</li>
        <li>Modern aesthetic</li>
        <li>Modular (can add containers later)</li>
        <li>Can be movable (if on trailer foundation)</li>
      </ul>

      <h4>Cons:</h4>
      <ul>
        <li>NOT always cheaper (can cost same as traditional per sqft)</li>
        <li>Expensive insulation needed (metal conducts heat/cold)</li>
        <li>Zoning restrictions (illegal in many areas)</li>
        <li>Difficult financing (non-traditional construction)</li>
        <li>Narrow width (8ft interior width limiting)</li>
        <li>Rust and corrosion issues</li>
        <li>Resale challenges</li>
      </ul>

      <h3>Cost Per Square Foot Comparison</h3>
      <ul>
        <li><strong>DIY Container Home:</strong> $50-$100/sqft</li>
        <li><strong>Professional Container Home:</strong> $150-$250/sqft</li>
        <li><strong>Luxury Container Home:</strong> $250-$400+/sqft</li>
        <li><strong>Traditional Home:</strong> $150-$250/sqft (similar!)</li>
      </ul>

      <h3>Container Home Myths</h3>
      
      <h4>Myth: Container Homes are Always Cheap</h4>
      <p><strong>Reality:</strong> By the time you add insulation, windows, utilities, foundation, and finishes, cost per sqft is often equal to or MORE than traditional construction. Savings come from DIY labor, not materials.</p>

      <h4>Myth: You Can Stack Containers Easily</h4>
      <p><strong>Reality:</strong> Stacking requires significant structural reinforcement, engineering, and permits. It's complex and expensive.</p>

      <h4>Myth: Container Homes are Legal Everywhere</h4>
      <p><strong>Reality:</strong> Many jurisdictions prohibit them or require expensive engineering and modifications to meet building codes. Always check zoning FIRST.</p>

      <h3>Is a Container Home Right for You?</h3>
      
      <h4>Choose Container Home If:</h4>
      <ul>
        <li>You love modern industrial aesthetic</li>
        <li>Want faster build time</li>
        <li>Eco-conscious (reusing materials)</li>
        <li>Handy and willing to DIY</li>
        <li>Flexible on location (rural, permissive zoning)</li>
      </ul>

      <h4>Choose Traditional Home If:</h4>
      <ul>
        <li>Want traditional financing</li>
        <li>Need easier resale</li>
        <li>Zoning prohibits containers</li>
        <li>Want more square footage cheaply</li>
        <li>Not handy (labor costs eliminate savings)</li>
      </ul>

      <p><strong>Use this calculator to estimate the total cost to build your shipping container home and decide if it makes financial sense for your situation!</strong></p>
    \`,
  },

  calculator: {
    fields: [
      {
        name: 'containerCount',
        label: 'Number of Containers (40ft)',
        type: 'number',
        defaultValue: '2',
        placeholder: '2',
      },
      {
        name: 'buildQuality',
        label: 'Build Quality',
        type: 'select',
        options: [
          { value: 'diy_basic', label: 'DIY Basic (Minimalist, off-grid)' },
          { value: 'professional_basic', label: 'Professional Basic (Livable)' },
          { value: 'professional_luxury', label: 'Professional Luxury (High-end)' },
        ],
        defaultValue: 'professional_basic',
      },
      {
        name: 'includeOffGrid',
        label: 'Include Off-Grid Systems',
        type: 'select',
        options: [
          { value: 'no', label: 'No - Grid Connected' },
          { value: 'yes', label: 'Yes - Solar + Well + Septic' },
        ],
        defaultValue: 'no',
      },
    ],
    results: [
      { label: 'Total Estimated Cost', isCurrency: true },
      { label: 'Cost Breakdown', isCurrency: false },
      { label: 'Cost Per Square Foot', isCurrency: false },
      { label: 'Project Insights', isCurrency: false },
    ],
    calculate: (values) => {
      const containerCount = Number(values.containerCount) || 2;
      const buildQuality = values.buildQuality || 'professional_basic';
      const includeOffGrid = values.includeOffGrid || 'no';

      const squareFootagePerContainer = 320;
      const totalSquareFootage = containerCount * squareFootagePerContainer;

      let containerCost = 0;
      let modifications = 0;
      let insulation = 0;
      let windowsDoors = 0;
      let utilities = 0;
      let finishes = 0;
      let foundation = 0;
      let permits = 0;
      let labor = 0;

      if (buildQuality === 'diy_basic') {
        containerCost = containerCount * 4000;
        modifications = containerCount * 2000;
        insulation = containerCount * 1500;
        windowsDoors = containerCount * 2000;
        utilities = 3000;
        finishes = containerCount * 2500;
        foundation = 1500;
        permits = 0;
        labor = 0;
      } else if (buildQuality === 'professional_basic') {
        containerCost = containerCount * 6000;
        modifications = containerCount * 8000;
        insulation = containerCount * 4000;
        windowsDoors = containerCount * 6000;
        utilities = 12000;
        finishes = containerCount * 8000;
        foundation = 6000;
        permits = 3000;
        labor = 25000 + (containerCount - 1) * 10000;
      } else {
        containerCost = containerCount * 7000;
        modifications = containerCount * 15000;
        insulation = containerCount * 6000;
        windowsDoors = containerCount * 12000;
        utilities = 40000;
        finishes = containerCount * 15000;
        foundation = 15000;
        permits = 8000;
        labor = 75000 + (containerCount - 1) * 20000;
      }

      let offGridCost = 0;
      if (includeOffGrid === 'yes') {
        offGridCost = 20000 + 10000 + 15000;
      }

      const totalCost = containerCost + modifications + insulation + windowsDoors + utilities + finishes + foundation + permits + labor + offGridCost;

      const costPerSqFt = totalCost / totalSquareFootage;

      const breakdown = \`📦 Detailed Container Home Budget:

🏗️ **PROJECT SPECS:**
• Containers: ${containerCount} × 40ft containers
• Total Square Footage: ${totalSquareFootage} sqft
• Build Quality: ${buildQuality === 'diy_basic' ? 'DIY Basic' : buildQuality === 'professional_basic' ? 'Professional Basic' : 'Professional Luxury'}
• Off-Grid: ${includeOffGrid === 'yes' ? 'Yes (Solar + Well + Septic)' : 'No (Grid connected)'}

💰 **COST BREAKDOWN:**
• Containers: $${containerCost.toLocaleString()} (${containerCount} × $${Math.round(containerCost / containerCount).toLocaleString()})
• Modifications/Cutting: $${modifications.toLocaleString()}
• Insulation: $${insulation.toLocaleString()}
• Windows & Doors: $${windowsDoors.toLocaleString()}
• Utilities (Plumbing/Electric/HVAC): $${utilities.toLocaleString()}
• Interior Finishes: $${finishes.toLocaleString()}
• Foundation: $${foundation.toLocaleString()}
• Permits & Engineering: $${permits.toLocaleString()}
${labor > 0 ? '• Professional Labor: $' + labor.toLocaleString() + '\n' : ''}${includeOffGrid === 'yes' ? '• Off-Grid Systems: $' + offGridCost.toLocaleString() + ' (Solar $20K + Well $10K + Septic $15K)\n' : ''}
**TOTAL ESTIMATED COST: $${totalCost.toLocaleString()}**

📏 **COST PER SQUARE FOOT:**
$${Math.round(costPerSqFt)}/sqft (${totalSquareFootage} sqft total)\`;

      const costPerSqFtAnalysis = \`💵 Cost Per Square Foot Analysis:

Your container home: $${Math.round(costPerSqFt)}/sqft

**Comparison:**
• DIY Container: $50-$100/sqft
• Professional Container: $150-$250/sqft
• Luxury Container: $250-$400/sqft
• Traditional Home: $150-$250/sqft

${costPerSqFt < 100 ? '✅ EXCELLENT - Well below average! You\'re maximizing DIY labor savings.' : 
  costPerSqFt < 200 ? '✅ GOOD - Competitive with traditional construction.' : 
  costPerSqFt < 300 ? '⚠️ EXPENSIVE - Similar to or more than traditional home costs.' :
  '❌ VERY EXPENSIVE - Significantly more than traditional construction. Consider if container is right choice.'}

**Reality Check:**
${buildQuality === 'diy_basic' ? 'DIY builds save money BUT require significant time (4-6 months) and skills. Professional inspection recommended for safety.' : 
  buildQuality === 'professional_basic' ? 'Professional basic builds cost similar to traditional homes per sqft. Savings come from faster build time, not materials.' :
  'Luxury container homes often cost MORE per sqft than traditional homes. You\'re paying premium for aesthetic and speed.'}

Container homes are NOT automatically cheaper - costs depend heavily on finish level, labor, and site conditions.\`;

      let insights = '';

      if (buildQuality === 'diy_basic') {
        insights = \`🎯 **DIY BASIC BUILD INSIGHTS:**

**Budget:** $${totalCost.toLocaleString()} for ${totalSquareFootage} sqft

**Pros of Your Approach:**
✅ Lowest cost option ($${Math.round(costPerSqFt)}/sqft)
✅ Maximum flexibility and customization
✅ Learning experience
✅ No labor costs (sweat equity)
✅ ${includeOffGrid === 'yes' ? 'Off-grid independence!' : 'Simple grid connection'}

**Challenges to Expect:**
⚠️ 4-6 month build time (weekends/evenings)
⚠️ Requires significant skills (welding, electrical, plumbing)
⚠️ Mistakes can be costly to fix
⚠️ DIY permitting often more difficult
⚠️ Quality may be lower without professional expertise
⚠️ Insurance/financing may be harder to obtain

**Critical Steps:**
1. **Zoning First:** Verify containers allowed BEFORE buying ($4,000 mistake if not)
2. **Foundation:** Don't skimp - bad foundation ruins container ($1,500-$4,000)
3. **Insulation:** Critical for livability - spray foam best ($1,500/container)
4. **Cutting:** Hire professional for structural cuts ($500-$2,000 safer than DIY)
5. **Electrical/Plumbing:** Get professional inspection even if DIY ($200-$500)

**Hidden Costs to Budget:**
• Tool rental/purchase: $1,000-$3,000
• Delivery of containers: $500-$2,000
• Unexpected repairs/fixes: $2,000-$5,000 (always budget 20% buffer)
• Learning curve mistakes: Varies

**Timeline:** 4-6 months (working weekends)
**Difficulty:** High - requires multi-trade skills\`;

      } else if (buildQuality === 'professional_basic') {
        insights = \`🎯 **PROFESSIONAL BASIC BUILD INSIGHTS:**

**Budget:** $${totalCost.toLocaleString()} for ${totalSquareFootage} sqft

**Pros of Your Approach:**
✅ Professional quality and safety
✅ Faster build time (2-3 months)
✅ Easier financing and insurance
✅ Warranties on work
✅ Meets all building codes
✅ ${includeOffGrid === 'yes' ? 'Professional off-grid system installation' : 'Grid-connected for reliability'}

**Cost Analysis:**
Your cost: $${Math.round(costPerSqFt)}/sqft
Traditional home: $150-$250/sqft
${costPerSqFt < 200 ? '✅ Competitive pricing! Container is cost-effective choice.' : '⚠️ Similar to traditional home costs. Choose containers for aesthetic/speed, not savings.'}

**What You're Getting:**
• ${containerCount} containers professionally modified
• Full insulation (livable year-round)
• Quality windows and doors
• Complete utilities (plumbing, electric, HVAC)
• Livable finishes (not luxury, but good)
• Professional labor and permits

**Timeline & Process:**
1. Months 1-2: Design, permits, site prep, foundation
2. Month 2-3: Container delivery, modifications, utilities rough-in
3. Month 3-4: Finishes, inspections, occupancy
**Total:** 3-4 months

**Financing Options:**
• Construction loan (higher rates: 7-10%)
• Personal loan (if credit strong)
• Cash (best - no interest)
• Owner-builder loan (if doing some work yourself)

**Risks to Manage:**
⚠️ Verify zoning allows containers
⚠️ Budget 15-20% contingency for surprises
⚠️ Get multiple contractor quotes
⚠️ Review contracts carefully
⚠️ Inspect work at each phase

**Verdict:** Professional basic build is sensible middle ground - quality construction without luxury markup.\`;

      } else {
        insights = \`🎯 **PROFESSIONAL LUXURY BUILD INSIGHTS:**

**Budget:** $${totalCost.toLocaleString()} for ${totalSquareFootage} sqft

**Reality Check:**
Your cost: $${Math.round(costPerSqFt)}/sqft
Traditional luxury home: $250-$400/sqft
${costPerSqFt > 300 ? '⚠️ Container home costs MORE than traditional luxury construction!' : 'Similar cost to traditional luxury home.'}

**What You're Paying For:**
• ${containerCount} premium containers with complex modifications
• Architectural design and engineering
• High-end insulation and climate control
• Large windows, glass walls, modern aesthetic
• Premium finishes (hardwood, stone, designer fixtures)
• Professional project management
• ${includeOffGrid === 'yes' ? 'Premium off-grid systems ($45K)' : 'Advanced HVAC and smart home'}

**Why So Expensive?**
Container homes are NOT inherently cheaper. Costs add up:
1. Container modifications cost MORE than traditional framing
2. Insulation is expensive (metal requires premium solutions)
3. Custom windows/doors for steel structure = $$
4. Labor is specialized (not all contractors work with containers)
5. Engineering and permits often exceed traditional homes

**You're Paying Premium For:**
✅ Modern industrial aesthetic
✅ Faster build time (4-6 months vs 8-12 traditional)
✅ Unique/cool factor
✅ Eco-friendly (reusing containers)
✅ Modular (can add containers later)
✅ Structural strength

**Honest Assessment:**
At $${Math.round(costPerSqFt)}/sqft, you're choosing containers for LIFESTYLE and AESTHETICS, not cost savings. 

**Budget Warnings:**
⚠️ This estimate is baseline - luxury projects often exceed budget by 20-30%
⚠️ Custom designs add $10K-$30K
⚠️ Large windows/glass walls can add $20K-$50K
⚠️ High-end finishes can double costs
⚠️ Site challenges (remote, difficult terrain) add 15-40%

**Financing:**
Construction loans difficult for containers. Options:
• Cash (best)
• Construction-to-permanent loan (if lender approves non-traditional)
• Private financing
• Portfolio lender

**Timeline:** 4-6 months (faster than traditional luxury)

**Verdict:** Luxury container homes are expensive. You're paying for uniqueness and speed, not cost savings. If budget is concern, consider professional basic build instead ($${Math.round((containerCost / containerCount * containerCount + 8000 * containerCount + 4000 * containerCount + 6000 * containerCount + 12000 + 8000 * containerCount + 6000 + 3000 + 25000 + (containerCount - 1) * 10000) / totalSquareFootage)}/sqft).\`;
      }

      return [
        { label: 'Total Estimated Cost', value: Math.round(totalCost), isCurrency: true },
        { label: 'Cost Breakdown', value: breakdown, isCurrency: false },
        { label: 'Cost Per Square Foot', value: costPerSqFtAnalysis, isCurrency: false },
        { label: 'Project Insights', value: insights, isCurrency: false },
      ];
    },
  },
};
