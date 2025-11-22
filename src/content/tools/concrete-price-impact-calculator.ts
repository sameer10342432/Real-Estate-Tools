import { CalculatorContent } from '@/types';

export const CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Concrete Price Impact on Home Cost',
  description: 'Calculate how concrete price changes affect foundation and construction costs for residential projects',
  icon: 'Icon',
  category: 'Construction & Development',
  slug: 'concrete-price-impact-calculator',
  article: {
    title: "Concrete Costs and Construction Budgeting",
    content: `
    <h2>The Role of Concrete in Home Construction</h2>
    <p>Concrete is essential for foundations, slabs, driveways, and structural elements. It typically represents 5-10% of total build cost for single-family homes, but can be 15-25% for basement homes or commercial projects.</p>
    
    <h3>What's Included in Concrete Work</h3>
    <ul>
      <li><strong>Foundation:</strong> Footings, stem walls, or basement walls</li>
      <li><strong>Slab-on-Grade:</strong> Main floor slab (4-6 inches thick)</li>
      <li><strong>Garage Floor:</strong> Reinforced concrete slab</li>
      <li><strong>Driveway & Walkways:</strong> Exterior flatwork</li>
      <li><strong>Structural Elements:</strong> Columns, beams (if applicable)</li>
    </ul>
    
    <h3>Concrete Pricing Factors</h3>
    <ul>
      <li><strong>Ready-Mix Costs:</strong> $120-$200 per cubic yard (varies by region)</li>
      <li><strong>Transportation:</strong> $20-$40 per mile from batch plant</li>
      <li><strong>Labor:</strong> $2-$6 per sq ft for placement and finishing</li>
      <li><strong>Reinforcement:</strong> Rebar, wire mesh, fiber additives</li>
      <li><strong>Site Prep:</strong> Excavation, grading, formwork</li>
      <li><strong>Special Requirements:</strong> Stamped, colored, high-strength mixes</li>
    </ul>
    
    <h3>Typical Concrete Quantities by Home Type</h3>
    
    <h4>Slab-on-Grade (No Basement)</h4>
    <ul>
      <li><strong>1,500 sq ft home:</strong> 25-30 cubic yards (foundation + slab)</li>
      <li><strong>2,000 sq ft home:</strong> 32-38 cubic yards</li>
      <li><strong>2,500 sq ft home:</strong> 40-50 cubic yards</li>
      <li><strong>3,000 sq ft home:</strong> 50-60 cubic yards</li>
    </ul>
    
    <h4>Full Basement Homes (Add 60-100% More Concrete)</h4>
    <ul>
      <li><strong>2,000 sq ft with basement:</strong> 60-75 cubic yards</li>
      <li><strong>2,500 sq ft with basement:</strong> 75-95 cubic yards</li>
    </ul>
    
    <h3>Impact of Concrete Price Changes</h3>
    <p><strong>Example:</strong> 2,000 sq ft slab-on-grade home needing 35 cubic yards</p>
    <table>
      <tr><th>Concrete Price</th><th>Material Cost</th><th>Total Concrete Work</th></tr>
      <tr><td>$120/yd³</td><td>$4,200</td><td>~$12,000 (with labor)</td></tr>
      <tr><td>$150/yd³</td><td>$5,250</td><td>~$13,500</td></tr>
      <tr><td>$180/yd³</td><td>$6,300</td><td>~$15,000</td></tr>
      <tr><td>$210/yd³</td><td>$7,350</td><td>~$17,000</td></tr>
    </table>
    
    <h3>Managing Concrete Costs</h3>
    
    <h4>For Builders</h4>
    <ul>
      <li><strong>Bulk Contracts:</strong> Negotiate volume discounts with suppliers</li>
      <li><strong>Off-Peak Scheduling:</strong> Pour during slower seasons for better rates</li>
      <li><strong>Local Sourcing:</strong> Use nearby batch plants to reduce transport</li>
      <li><strong>Efficient Design:</strong> Optimize foundation design to minimize concrete</li>
      <li><strong>Alternative Foundations:</strong> Consider pier-and-beam in high concrete cost areas</li>
    </ul>
    
    <h4>For Homebuyers</h4>
    <ul>
      <li><strong>Foundation Type:</strong> Slab-on-grade cheapest, full basement most expensive</li>
      <li><strong>Simplify Layout:</strong> Rectangular homes use less concrete than complex shapes</li>
      <li><strong>Standard Mix:</strong> Avoid decorative concrete unless budgeted</li>
    </ul>
    
    <h3>Regional Price Variations</h3>
    <ul>
      <li><strong>Lowest Costs:</strong> Texas, Oklahoma, Arizona ($110-$140/yd³)</li>
      <li><strong>Average Costs:</strong> Most metro areas ($140-$170/yd³)</li>
      <li><strong>Highest Costs:</strong> Alaska, Hawaii, remote areas ($200-$300/yd³)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "foundationType",
        label: "Foundation Type (1=Slab, 1.5=Crawlspace, 2=Full Basement)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "concretePrice",
        label: "Concrete Price ($/cubic yard)",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "baselinePrice",
        label: "Baseline Price ($/cubic yard)",
        type: "number",
        placeholder: "135",
        defaultValue: "135",
      },
      {
        name: "laborRateSqFt",
        label: "Labor Rate ($/sq ft)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
    ],
    results: [
      { label: "Estimated Concrete Needed (cubic yards)", isCurrency: false },
      { label: "Material Cost at Current Price", isCurrency: true },
      { label: "Total Concrete Work Cost (incl. labor)", isCurrency: true },
      { label: "Cost Impact vs Baseline", isCurrency: true },
    ],
    calculate: (data: any) => {
      const homeSize = Number(data.homeSize) || 2000;
      const foundationType = Number(data.foundationType) || 1;
      const concretePrice = Number(data.concretePrice) || 150;
      const baselinePrice = Number(data.baselinePrice) || 135;
      const laborRate = Number(data.laborRateSqFt) || 4;
      
      // Estimate cubic yards needed (base formula: ~0.016-0.02 yd³ per sq ft for slab)
      // Multiply by foundation type factor
      const cubicYards = (homeSize * 0.018 * foundationType);
      
      // Calculate costs
      const currentMaterialCost = cubicYards * concretePrice;
      const baselineMaterialCost = cubicYards * baselinePrice;
      const laborCost = homeSize * laborRate * foundationType;
      
      const totalCurrentCost = currentMaterialCost + laborCost;
      const totalBaselineCost = baselineMaterialCost + laborCost;
      const costImpact = totalCurrentCost - totalBaselineCost;
      
      let impactNote = "";
      if (costImpact > 5000) {
        impactNote = ` - 🚨 MAJOR INCREASE in concrete costs`;
      } else if (costImpact > 2000) {
        impactNote = ` - ⚠️ Significant cost increase`;
      } else if (costImpact > 500) {
        impactNote = ` - 💰 Moderate increase`;
      } else if (costImpact > -500) {
        impactNote = ` - ✅ Minimal change`;
      } else if (costImpact > -2000) {
        impactNote = ` - 💚 Favorable pricing`;
      } else {
        impactNote = ` - 🎉 Major savings!`;
      }

      return [
        { label: "Estimated Concrete Needed (cubic yards)", value: cubicYards.toFixed(1), isCurrency: false },
        { label: "Material Cost at Current Price", value: currentMaterialCost.toFixed(0), isCurrency: true },
        { label: "Total Concrete Work Cost (incl. labor)", value: totalCurrentCost.toFixed(0), isCurrency: true },
        { label: "Cost Impact vs Baseline", value: `${costImpact >= 0 ? '+' : ''}${costImpact.toFixed(0)}${impactNote}`, isCurrency: true },
      ];
    },
  },
};