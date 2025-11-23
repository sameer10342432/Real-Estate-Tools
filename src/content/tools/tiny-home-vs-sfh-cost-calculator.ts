import { CalculatorContent } from '@/types';

export const TinyHomeVsSFHCostCalculatorContent: CalculatorContent = {
  title: 'Tiny Home vs Single-Family Home Cost Calculator',
  description: 'Compare the total costs of tiny home living vs traditional single-family homes including purchase, utilities, maintenance, insurance, and lifestyle trade-offs',
  icon: '🏡',
  category: 'Additional Tools',
  slug: 'tiny-home-vs-sfh-cost-calculator',
  
  metaTitle: 'Tiny Home vs Single Family Home Cost Calculator - Compare Total Costs | Property Tools',
  metaDescription: 'Compare the total costs of tiny home living vs traditional single-family homes. Analyze purchase price, utilities, maintenance, insurance, and lifestyle trade-offs.',
  
  article: {
    title: 'Tiny Home vs Single-Family Home Cost Comparison',
    content: `
      <h2>Tiny Home vs Single-Family Home Calculator</h2>
      <p>Should you downsize to a tiny home or stick with a traditional house? This calculator compares total costs including purchase price, utilities, maintenance, insurance, and hidden expenses to help you make an informed decision.</p>

      <h3>Tiny Home Overview</h3>
      <ul>
        <li><strong>Size:</strong> Typically 100-400 square feet</li>
        <li><strong>Cost:</strong> $30,000-$150,000 (built) or DIY $10,000-$50,000</li>
        <li><strong>Types:</strong> On wheels (THOW), foundation, container-based</li>
        <li><strong>Lifestyle:</strong> Minimalist, mobile, eco-friendly</li>
      </ul>

      <h3>Cost Comparison</h3>
      <table>
        <tr><th>Category</th><th>Tiny Home (300 sqft)</th><th>Single-Family (1,500 sqft)</th></tr>
        <tr><td>Purchase Price</td><td>$50,000-$80,000</td><td>$250,000-$450,000</td></tr>
        <tr><td>Monthly Utilities</td><td>$50-$150</td><td>$200-$400</td></tr>
        <tr><td>Maintenance/Year</td><td>$500-$2,000</td><td>$3,000-$7,500</td></tr>
        <tr><td>Insurance/Year</td><td>$500-$1,200</td><td>$1,000-$2,500</td></tr>
        <tr><td>Property Tax/Year</td><td>$0-$1,500</td><td>$2,000-$8,000</td></tr>
      </table>

      <h3>Tiny Home Pros & Cons</h3>
      <h4>Pros:</h4>
      <ul>
        <li>Lower purchase price (90% less)</li>
        <li>Minimal utilities ($50-150/month vs $300+)</li>
        <li>Low maintenance costs</li>
        <li>Mobility (THOW can relocate)</li>
        <li>Eco-friendly (smaller footprint)</li>
        <li>Debt-free living (affordable to buy cash)</li>
      </ul>
      <h4>Cons:</h4>
      <ul>
        <li>Zoning restrictions (illegal in many areas)</li>
        <li>No appreciation (depreciates like RV)</li>
        <li>Difficult financing (not traditional mortgage)</li>
        <li>Limited space (storage, entertaining)</li>
        <li>Resale challenges</li>
        <li>Not suitable for families</li>
      </ul>

      <h3>Single-Family Home Pros & Cons</h3>
      <h4>Pros:</h4>
      <ul>
        <li>Appreciates in value (equity building)</li>
        <li>More space (storage, rooms, yard)</li>
        <li>Traditional financing available</li>
        <li>Family-friendly</li>
        <li>Legal everywhere (zoning compliant)</li>
        <li>Easy resale</li>
      </ul>
      <h4>Cons:</h4>
      <ul>
        <li>High purchase price ($250K-$500K+)</li>
        <li>Expensive utilities and maintenance</li>
        <li>Property taxes ($2K-$10K+/year)</li>
        <li>Immobile (tied to location)</li>
        <li>Requires mortgage (30 years debt)</li>
      </ul>

      <h3>10-Year Total Cost Comparison</h3>
      <h4>Tiny Home (10 years):</h4>
      <ul>
        <li>Purchase: $60,000</li>
        <li>Utilities: $12,000 ($100/month × 120 months)</li>
        <li>Maintenance: $10,000</li>
        <li>Insurance: $8,000</li>
        <li>Land/parking: $24,000 ($200/month × 120 months)</li>
        <li><strong>Total: $114,000</strong></li>
        <li><strong>Resale value: ~$30,000 (50% depreciation)</strong></li>
        <li><strong>Net cost: $84,000</strong></li>
      </ul>

      <h4>Traditional Home (10 years):</h4>
      <ul>
        <li>Purchase: $300,000</li>
        <li>Down payment (10%): $30,000</li>
        <li>Mortgage payments: $200,000 (P&I on $270K loan, 7%, 10 years)</li>
        <li>Utilities: $36,000 ($300/month × 120 months)</li>
        <li>Maintenance: $45,000 ($375/month)</li>
        <li>Property tax: $40,000 ($4,000/year × 10)</li>
        <li>Insurance: $15,000 ($1,500/year × 10)</li>
        <li><strong>Total spent: $366,000</strong></li>
        <li><strong>Resale value: ~$360,000 (20% appreciation)</strong></li>
        <li><strong>Net cost: ~$6,000 (plus equity buildup)</strong></li>
      </ul>

      <p><strong>Winner:</strong> Traditional home builds equity; tiny home saves cash but doesn't appreciate</p>

      <h3>Who Should Choose Tiny Home?</h3>
      <ul>
        <li>Minimalists prioritizing experiences over possessions</li>
        <li>Young professionals, remote workers, digital nomads</li>
        <li>Debt-averse individuals</li>
        <li>Eco-conscious lifestyles</li>
        <li>Want mobility/travel</li>
        <li>Retired/downsizing</li>
      </ul>

      <h3>Who Should Choose Traditional Home?</h3>
      <ul>
        <li>Families with kids</li>
        <li>Long-term wealth building focus</li>
        <li>Need space (hobbies, storage, entertaining)</li>
        <li>Stable location (job, schools)</li>
        <li>Want appreciation and equity</li>
      </ul>

      <h3>Zoning & Legal Considerations for Tiny Homes</h3>
      <h4>Tiny Home-Friendly States</h4>
      <ul>
        <li><strong>California:</strong> Some counties allow ADUs (accessory dwelling units) as small as 150 sq ft</li>
        <li><strong>Colorado:</strong> Many municipalities allow THOWs as RVs in certain zones</li>
        <li><strong>Oregon:</strong> Portland allows tiny homes on foundations in residential zones</li>
        <li><strong>Texas:</strong> Austin, Fort Worth allow tiny homes in certain districts</li>
        <li><strong>Florida:</strong> Some counties permit tiny homes as "park models"</li>
      </ul>

      <h4>Restrictive States/Cities</h4>
      <ul>
        <li>New York City: Minimum dwelling unit 400 sq ft (tiny homes illegal)</li>
        <li>San Francisco: 220 sq ft minimum for studio apartments</li>
        <li>Chicago: Strict zoning codes prohibit most tiny homes</li>
        <li>Boston: Minimum 450 sq ft for dwelling units</li>
      </ul>

      <h4>Zoning Classifications</h4>
      <ul>
        <li><strong>Tiny Home on Wheels (THOW):</strong> Often classified as RV - restricted to RV parks, campgrounds (not permanent residence in most cities)</li>
        <li><strong>Tiny Home on Foundation:</strong> Must meet IRC (International Residential Code) minimum size (typically 120-400 sq ft depending on jurisdiction)</li>
        <li><strong>Accessory Dwelling Unit (ADU):</strong> Legal in backyard if zoning allows, often 400-1,200 sq ft range</li>
      </ul>

      <p><strong>Pro Tip:</strong> Before buying tiny home, check local zoning codes. Call municipal planning department to ask: "Are tiny homes on wheels allowed as permanent residences?" and "What's minimum dwelling size for residential zones?"</p>

      <h3>Financing Options Comparison</h3>
      <h4>Tiny Home Financing</h4>
      <ul>
        <li><strong>Personal Loan:</strong> $10K-$100K, 5-12% APR, 3-7 year terms</li>
        <li><strong>RV Loan:</strong> For THOWs, 4-8% APR, up to 15 years (if certified RVIA)</li>
        <li><strong>Home Equity Loan:</strong> If you own home, borrow against equity (lowest rates)</li>
        <li><strong>Cash:</strong> Most common (50%+ buy outright) - avoid debt</li>
        <li><strong>Builder Financing:</strong> Some tiny home builders offer in-house financing (10-15% APR)</li>
      </ul>

      <p><strong>Challenge:</strong> Banks don't offer traditional mortgages for tiny homes (no land/foundation = no collateral)</p>

      <h4>Traditional Home Financing</h4>
      <ul>
        <li><strong>Conventional Mortgage:</strong> 3-20% down, 6-8% APR, 15-30 year terms</li>
        <li><strong>FHA Loan:</strong> 3.5% down, lower credit requirements (580+ score)</li>
        <li><strong>VA Loan:</strong> 0% down for veterans/military</li>
        <li><strong>USDA Loan:</strong> 0% down for rural properties</li>
      </ul>

      <p><strong>Advantage:</strong> Low down payment, tax-deductible interest, 30-year timeline spreads payments</p>

      <h3>Hidden Costs of Tiny Homes</h3>
      <ul>
        <li><strong>Land/Parking:</strong> $200-800/month (RV parks, private land rental) - often overlooked!</li>
        <li><strong>Towing/Moving:</strong> $1-3 per mile (THOW relocation costs $500-2,000 each move)</li>
        <li><strong>Utilities Hookup:</strong> Water, electric, sewer connections ($500-3,000 initial)</li>
        <li><strong>Composting Toilet:</strong> $1,000-2,500 (if off-grid)</li>
        <li><strong>Solar Panels:</strong> $3,000-10,000 (if living off-grid)</li>
        <li><strong>Propane Tanks:</strong> $50-150/month (heating, cooking if no electric)</li>
        <li><strong>Storage Unit:</strong> $100-200/month (possessions that don't fit)</li>
        <li><strong>Gym Membership:</strong> $30-80/month (for showers if no bathroom)</li>
      </ul>

      <h3>Hidden Costs of Traditional Homes</h3>
      <ul>
        <li><strong>Closing Costs:</strong> 2-5% of purchase price ($6,000-15,000 on $300K home)</li>
        <li><strong>Home Inspection:</strong> $300-600</li>
        <li><strong>Appraisal:</strong> $400-800</li>
        <li><strong>HOA Fees:</strong> $50-500/month (common in suburbs, condos)</li>
        <li><strong>Landscaping/Lawn Care:</strong> $100-300/month (or DIY time)</li>
        <li><strong>Major Repairs:</strong> HVAC ($6,000), roof ($8,000-15,000), foundation ($10,000+)</li>
        <li><strong>Furniture/Appliances:</strong> $10,000-30,000 to furnish 1,500 sq ft home</li>
      </ul>

      <h3>Real-World Scenarios</h3>

      <h4>Scenario 1: Young Remote Worker (Age 28, Single)</h4>
      <p><strong>Choice:</strong> Tiny home on wheels ($65K)</p>
      <p><strong>Reasoning:</strong> No kids, remote job allows mobility, minimalist lifestyle, debt-averse</p>
      <p><strong>Outcome:</strong> Lives in THOW for 5 years, parks at friend's property ($200/month land rent), saves $50K+, eventually uses savings to buy traditional home with cash down payment</p>
      <p><strong>Verdict:</strong> Success - tiny home was stepping stone to wealth building</p>

      <h4>Scenario 2: Family with 2 Kids (Ages 35 & 37)</h4>
      <p><strong>Choice:</strong> Traditional home ($320K, 3BR/2BA)</p>
      <p><strong>Reasoning:</strong> Need space for kids, stable school district, long-term roots, want equity</p>
      <p><strong>Outcome:</strong> 10 years later, home worth $425K (3% annual appreciation), $105K equity gain + mortgage paydown, kids in good schools</p>
      <p><strong>Verdict:</strong> Success - built $150K+ in equity, provided stable family environment</p>

      <h4>Scenario 3: Retiree Couple (Ages 62 & 64)</h4>
      <p><strong>Choice:</strong> Tiny home on foundation ($90K) on land they own</p>
      <p><strong>Reasoning:</strong> Downsizing from 2,400 sq ft home, kids moved out, want low maintenance, no mortgage</p>
      <p><strong>Outcome:</strong> Paid cash, zero housing costs except utilities ($120/month) and maintenance ($800/year), travel extensively with savings</p>
      <p><strong>Verdict:</strong> Success - tiny home fits retirement lifestyle, maximizes freedom</p>

      <h4>Scenario 4: Aspiring Homeowner (Age 26, Teacher)</h4>
      <p><strong>Choice:</strong> Attempted tiny home due to affordability</p>
      <p><strong>Outcome:</strong> Discovered zoning laws prohibit tiny homes in city, no RV parks within 30 miles of work, couldn't find legal parking. Ended up selling at 40% loss</p>
      <p><strong>Lesson:</strong> ALWAYS research zoning BEFORE buying tiny home</p>

      <h3>Lifestyle Comparisons</h3>

      <h4>Daily Life in Tiny Home</h4>
      <ul>
        <li>Cooking: Small kitchen (2-burner stove, mini fridge, limited counter space)</li>
        <li>Bathroom: Composting toilet or RV-style toilet, tiny shower (2x3 ft typical)</li>
        <li>Sleeping: Loft bed (low ceilings, ladder access) or Murphy bed</li>
        <li>Storage: Built-in cabinets, under-bed storage, minimal possessions</li>
        <li>Entertaining: 1-2 guests max, mostly outdoor socializing</li>
        <li>Laundry: Laundromat or portable washer</li>
        <li>Climate Control: Mini-split AC, propane heater (higher energy costs per sq ft)</li>
      </ul>

      <h4>Daily Life in Traditional Home</h4>
      <ul>
        <li>Cooking: Full kitchen (4-burner stove, full-size fridge, dishwasher, pantry)</li>
        <li>Bathroom: Multiple bathrooms, full tub/shower, standard fixtures</li>
        <li>Sleeping: Master bedroom (king/queen bed), guest rooms</li>
        <li>Storage: Closets, garage, attic, basement (tons of space)</li>
        <li>Entertaining: Host dinner parties, kids' playdates, overnight guests</li>
        <li>Laundry: In-unit washer/dryer</li>
        <li>Climate Control: Central HVAC (efficient, consistent temperature)</li>
      </ul>

      <h3>Frequently Asked Questions</h3>

      <h4>Can I legally live in a tiny home full-time?</h4>
      <p><strong>It depends on location.</strong> Many cities have minimum dwelling size requirements (120-400 sq ft) that prohibit tiny homes. Tiny homes on wheels are often classified as RVs, illegal for permanent residence in residential zones. Check local zoning codes before buying.</p>

      <h4>Do tiny homes hold value like traditional homes?</h4>
      <p><strong>No.</strong> Tiny homes depreciate like RVs (50% in 10 years typical). Traditional homes appreciate 3-5% annually historically. Tiny homes are lifestyle choice, not investment.</p>

      <h4>Can I get a mortgage for a tiny home?</h4>
      <p><strong>Rarely.</strong> Traditional mortgages require land and foundation. Tiny homes on wheels need RV loans (if RVIA certified) or personal loans (higher rates). Most buyers pay cash.</p>

      <h4>What about tiny homes as ADUs (Accessory Dwelling Units)?</h4>
      <p><strong>Great option!</strong> If you own land, building tiny home as ADU (backyard dwelling) is often legal and can be rented out for income ($800-1,500/month typical). Check local ADU regulations.</p>

      <h4>Are tiny homes cheaper to insure?</h4>
      <p><strong>Not necessarily.</strong> Tiny home insurance: $500-1,200/year (specialty RV insurance). Traditional home: $1,000-2,500/year. Per-square-foot, tiny homes cost MORE to insure due to custom build, higher risk classification.</p>

      <h4>What's the resale market like for tiny homes?</h4>
      <p><strong>Challenging.</strong> Niche market, buyers scarce, must find someone who: (1) wants tiny lifestyle, (2) has land/parking, (3) local zoning allows it. Expect to sell for 50-70% of what you paid after 3-5 years.</p>

      <h4>Can I build equity with a tiny home?</h4>
      <p><strong>Only if you own the land.</strong> Tiny home itself depreciates. If you own land ($30K-100K depending on location), land may appreciate (offsetting tiny home depreciation). THOWs build zero equity.</p>

      <h3>Key Takeaways</h3>

      <p><strong>Choose Tiny Home If:</strong></p>
      <ul>
        <li>You value freedom, mobility, and experiences over possessions</li>
        <li>You're single or couple without kids</li>
        <li>You have location flexibility (remote work, retired)</li>
        <li>You're debt-averse and can pay cash</li>
        <li>You've confirmed tiny homes are legal where you want to live</li>
        <li>You don't care about building home equity</li>
      </ul>

      <p><strong>Choose Traditional Home If:</strong></p>
      <ul>
        <li>You have or plan to have kids</li>
        <li>You want to build long-term wealth through real estate</li>
        <li>You need space (hobbies, storage, entertaining)</li>
        <li>You have stable job/location</li>
        <li>You can afford down payment and mortgage</li>
        <li>You value resale potential and equity</li>
      </ul>

      <p><strong>Use this calculator to compare the actual costs over your time horizon and make a data-driven decision based on your financial situation and lifestyle priorities.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'tinyHomeCost',
        label: 'Tiny Home Purchase Cost ($)',
        type: 'number',
        defaultValue: '65000',
        placeholder: '65000',
      },
      {
        name: 'traditionalHomeCost',
        label: 'Traditional Home Purchase Cost ($)',
        type: 'number',
        defaultValue: '300000',
        placeholder: '300000',
      },
      {
        name: 'yearsToCompare',
        label: 'Years to Compare',
        type: 'number',
        defaultValue: '10',
        placeholder: '10',
      },
    ],
    results: [
      { label: 'Tiny Home Total Cost', isCurrency: true },
      { label: 'Traditional Home Total Cost', isCurrency: true },
      { label: 'Cost Breakdown', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const tinyHomeCost = Number(values.tinyHomeCost) || 65000;
      const traditionalHomeCost = Number(values.traditionalHomeCost) || 300000;
      const years = Number(values.yearsToCompare) || 10;

      const months = years * 12;

      // Tiny home costs
      const tinyUtilities = 100 * months;
      const tinyMaintenance = 1000 * years;
      const tinyInsurance = 800 * years;
      const tinyLandRent = 200 * months;
      const tinyTotal = tinyHomeCost + tinyUtilities + tinyMaintenance + tinyInsurance + tinyLandRent;
      const tinyDepreciation = tinyHomeCost * 0.5;
      const tinyResaleValue = tinyHomeCost - tinyDepreciation;
      const tinyNetCost = tinyTotal - tinyResaleValue;

      // Traditional home costs
      const downPayment = traditionalHomeCost * 0.10;
      const loanAmount = traditionalHomeCost - downPayment;
      const monthlyRate = 0.07 / 12;
      const mortgagePayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, 30 * 12)) / (Math.pow(1 + monthlyRate, 30 * 12) - 1);
      const totalMortgagePaid = mortgagePayment * months;
      const traditionalUtilities = 300 * months;
      const traditionalMaintenance = (traditionalHomeCost * 0.01) * years;
      const traditionalPropertyTax = (traditionalHomeCost * 0.013) * years;
      const traditionalInsurance = 1500 * years;
      const traditionalTotal = downPayment + totalMortgagePaid + traditionalUtilities + traditionalMaintenance + traditionalPropertyTax + traditionalInsurance;
      const traditionalAppreciation = traditionalHomeCost * 0.03 * years;
      const traditionalResaleValue = traditionalHomeCost + traditionalAppreciation;
      const principalPaid = (mortgagePayment - (loanAmount * monthlyRate)) * months;
      const traditionalNetCost = traditionalTotal - (downPayment + principalPaid + traditionalAppreciation);

      const breakdown = `📊 Detailed Cost Breakdown (${years} Years):

🏠 **TINY HOME:**
• Purchase Price: $${tinyHomeCost.toLocaleString()}
• Utilities: $${Math.round(tinyUtilities).toLocaleString()} ($100/month)
• Maintenance: $${Math.round(tinyMaintenance).toLocaleString()} ($1,000/year)
• Insurance: $${Math.round(tinyInsurance).toLocaleString()} ($800/year)
• Land Rent/Parking: $${Math.round(tinyLandRent).toLocaleString()} ($200/month)
• **Total Spent: $${Math.round(tinyTotal).toLocaleString()}**
• Estimated Resale: $${Math.round(tinyResaleValue).toLocaleString()} (50% depreciation)
• **Net Cost: $${Math.round(tinyNetCost).toLocaleString()}**

🏡 **TRADITIONAL HOME:**
• Purchase Price: $${traditionalHomeCost.toLocaleString()}
• Down Payment (10%): $${Math.round(downPayment).toLocaleString()}
• Mortgage Payments: $${Math.round(totalMortgagePaid).toLocaleString()} ($${Math.round(mortgagePayment).toLocaleString()}/month)
• Utilities: $${Math.round(traditionalUtilities).toLocaleString()} ($300/month)
• Maintenance (1%/year): $${Math.round(traditionalMaintenance).toLocaleString()}
• Property Tax (1.3%/year): $${Math.round(traditionalPropertyTax).toLocaleString()}
• Insurance: $${Math.round(traditionalInsurance).toLocaleString()} ($1,500/year)
• **Total Spent: $${Math.round(traditionalTotal).toLocaleString()}**
• Estimated Resale: $${Math.round(traditionalResaleValue).toLocaleString()} (3% annual appreciation)
• Equity Built: $${Math.round(downPayment + principalPaid + traditionalAppreciation).toLocaleString()}
• **Net Cost: $${Math.round(traditionalNetCost).toLocaleString()}**

💰 **DIFFERENCE:**
Tiny home saves: $${Math.round(Math.abs(tinyNetCost - traditionalNetCost)).toLocaleString()} in net cost
${traditionalNetCost < tinyNetCost ? '⚠️ BUT traditional home builds significant equity!' : ''}`;

      let recommendation = '';
      
      if (tinyNetCost < traditionalNetCost * 0.3) {
        recommendation = `🎯 **TINY HOME IS WINNER** (Massive Savings!)

You'll save $${Math.round(traditionalNetCost - tinyNetCost).toLocaleString()} over ${years} years by choosing tiny living.

**Choose Tiny Home If:**
✅ You value freedom and mobility over space
✅ Minimalist lifestyle appeals to you
✅ Want to avoid debt and live simply
✅ Remote work allows location flexibility
✅ Environmental impact is priority
✅ Don't need much storage or space

**BUT Consider:**
⚠️ Tiny homes DEPRECIATE (like RVs)
⚠️ Traditional home builds EQUITY ($${Math.round(downPayment + principalPaid + traditionalAppreciation).toLocaleString()} in ${years} years)
⚠️ Zoning laws may prohibit tiny homes in your area
⚠️ Financing difficult (not traditional mortgage)
⚠️ Not suitable for families with kids

**Verdict:** If you're young, single, debt-averse, and mobile, tiny home is excellent. If building wealth through real estate is a goal, traditional home wins long-term.`;

      } else {
        recommendation = `🎯 **TRADITIONAL HOME IS WINNER** (Equity Building!)

While tiny home appears cheaper ($${Math.round(tinyTotal - traditionalTotal).toLocaleString()} less spent), traditional home builds $${Math.round(downPayment + principalPaid + traditionalAppreciation).toLocaleString()} in equity.

**Choose Traditional Home If:**
✅ Family with kids or planning kids
✅ Want to build wealth through appreciation
✅ Need space (storage, rooms, yard)
✅ Stable job/location (not relocating)
✅ Value resale and equity
✅ Want traditional financing (mortgage)

**Tiny Home Advantages:**
✅ Lower upfront cost ($${tinyHomeCost.toLocaleString()} vs $${downPayment.toLocaleString()} down payment)
✅ Lower monthly expenses ($${Math.round((tinyUtilities + tinyMaintenance + tinyInsurance) / months + 200).toLocaleString()}/month vs $${Math.round(mortgagePayment + 300 + traditionalMaintenance / months + traditionalPropertyTax / months + traditionalInsurance / months).toLocaleString()}/month)
✅ No debt (can buy cash)
✅ Mobility (THOWs are relocatable)

**Verdict:** Traditional home is better investment long-term. You're not just spending money—you're building $${Math.round((downPayment + principalPaid + traditionalAppreciation) / years).toLocaleString()}/year in equity. Tiny home is lifestyle choice, not wealth-building strategy.`;
      }

      return [
        { label: 'Tiny Home Total Cost', value: Math.round(tinyNetCost), isCurrency: true },
        { label: 'Traditional Home Total Cost', value: Math.round(traditionalNetCost), isCurrency: true },
        { label: 'Cost Breakdown', value: breakdown, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
