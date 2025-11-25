import { CalculatorContent } from '@/types';

export const ELECTRICAL_INSPECTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Electrical Inspection Cost Calculator',
  description: 'Calculate electrical inspection costs for home purchases, renovations, and safety assessments with detailed pricing estimates',
  slug: 'electrical-inspection-calculator',
  icon: '⚡',
  category: 'Inspection Tools',
  article: {
    title: 'Complete Guide to Electrical Inspection Costs',
    content: `
    <h2>Understanding Electrical Inspections</h2>
    <p>An electrical inspection is a critical assessment of your home's electrical system performed by a licensed electrician or electrical inspector. Whether you're buying a home, selling, renovating, or ensuring safety, understanding electrical inspection costs helps you budget appropriately and maintain a safe living environment.</p>
    
    <h3>What is an Electrical Inspection?</h3>
    <p>An electrical inspection examines your home's electrical system to identify:</p>
    <ul>
      <li><strong>Safety Hazards:</strong> Faulty wiring, overloaded circuits, improper grounding</li>
      <li><strong>Code Violations:</strong> Non-compliant installations that don't meet National Electrical Code (NEC) standards</li>
      <li><strong>System Capacity:</strong> Whether your electrical panel can handle current and future loads</li>
      <li><strong>Fire Risks:</strong> Outdated wiring types (knob-and-tube, aluminum) that pose fire hazards</li>
      <li><strong>Functional Issues:</strong> Faulty outlets, switches, GFCI/AFCI protection gaps</li>
    </ul>
    
    <h3>Average Electrical Inspection Costs (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Inspection Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Average Cost Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">When Needed</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Basic Home Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$125 - $300</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Standard home purchase, routine check</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Comprehensive Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Older homes (50+ years), known issues</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Construction Final</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200 - $400</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Required before occupancy permit</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pre-Sale Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150 - $350</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Before listing home for sale</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Insurance/4-Point Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$75 - $200</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Insurance requirement (Florida, coastal areas)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Post-Renovation Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100 - $250</td>
        <td style="border: 1px solid #ddd; padding: 8px;">After major electrical work</td>
      </tr>
    </table>
    
    <h3>Electrical Inspection Cost Factors</h3>
    <p>Several factors influence the final cost of an electrical inspection:</p>
    <ul>
      <li><strong>Square Footage:</strong> Larger homes require more time and thorough assessment</li>
      <li><strong>Home Age:</strong> Older homes (built before 1980) often have more issues requiring detailed inspection</li>
      <li><strong>Electrical Panel Size:</strong> 200-amp services take longer to inspect than 100-amp</li>
      <li><strong>Number of Sub-Panels:</strong> Each additional panel adds inspection time</li>
      <li><strong>Geographic Location:</strong> Urban areas and high-cost-of-living regions charge more</li>
      <li><strong>Inspector Credentials:</strong> Master electricians typically charge more than basic inspectors</li>
      <li><strong>Urgency:</strong> Rush inspections can cost 50-100% more</li>
    </ul>
    
    <h3>What's Included in an Electrical Inspection</h3>
    <p>A comprehensive electrical inspection examines:</p>
    <ul>
      <li><strong>Service Entrance:</strong> Weatherhead, service drop, meter base, grounding</li>
      <li><strong>Main Electrical Panel:</strong> Breaker condition, proper labeling, capacity, arc-fault protection</li>
      <li><strong>Sub-Panels:</strong> Wiring connections, grounding, proper installation</li>
      <li><strong>Wiring:</strong> Type (copper/aluminum), condition, proper gauge for circuits</li>
      <li><strong>Outlets & Switches:</strong> Functionality, proper grounding, GFCI protection in wet areas</li>
      <li><strong>Light Fixtures:</strong> Proper installation, appropriate wattage</li>
      <li><strong>HVAC Electrical:</strong> Disconnect switches, proper wiring to units</li>
      <li><strong>Kitchen/Bathroom:</strong> GFCI outlets, dedicated circuits for appliances</li>
      <li><strong>Smoke/CO Detectors:</strong> Hardwired systems, interconnection, battery backup</li>
    </ul>
    
    <h3>Common Electrical Issues Found During Inspections</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Issue</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Severity</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Avg. Repair Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Knob-and-Tube Wiring</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Critical</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000 - $15,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Aluminum Wiring</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Critical</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000 - $10,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Federal Pacific Panel</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Critical</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500 - $3,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Missing GFCI Protection</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150 - $400</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Overloaded Circuits</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $1,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Improper Grounding</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $2,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Outdated 60-Amp Service</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500 - $4,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Missing AFCI Protection</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">Moderate</span></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $800</td>
      </tr>
    </table>
    
    <h3>When to Get an Electrical Inspection</h3>
    <p>Schedule an electrical inspection in these situations:</p>
    <ul>
      <li><strong>Home Purchase:</strong> Essential during due diligence period (within 10-14 days of offer acceptance)</li>
      <li><strong>Home Built Before 1980:</strong> Older wiring systems may not meet current safety standards</li>
      <li><strong>Frequent Circuit Breaker Trips:</strong> Indicates overloaded circuits or faulty wiring</li>
      <li><strong>Flickering Lights:</strong> Could signal loose connections or inadequate circuits</li>
      <li><strong>Burning Smell from Outlets:</strong> Immediate inspection needed - potential fire hazard</li>
      <li><strong>Insurance Requirement:</strong> Some insurers mandate inspections for homes over 40 years old</li>
      <li><strong>Before Major Renovation:</strong> Assess whether current system can handle additional load</li>
      <li><strong>Selling Your Home:</strong> Proactive inspection helps identify issues before buyer's inspection</li>
    </ul>
    
    <h3>Electrical Panel Capacity Guidelines</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Service Size</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Suitable For</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Status</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">60-Amp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Very small homes, old installations</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Upgrade Recommended</span></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">100-Amp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Homes under 1,500 sq ft, minimal appliances</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">May Need Upgrade</span></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">150-Amp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Homes 1,500-2,500 sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Adequate for Most</span></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">200-Amp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Homes 2,500+ sq ft, modern appliances</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Standard for New Construction</span></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">400-Amp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Large homes, EV charging, pool heaters</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">High-End Installations</span></td>
      </tr>
    </table>
    
    <h3>Dangerous Electrical Panels to Replace Immediately</h3>
    <p>These panels are known fire hazards and should be replaced upon discovery:</p>
    <ul>
      <li><strong>Federal Pacific Electric (FPE) Stab-Lok:</strong> Breakers fail to trip 60% of the time - immediate replacement required</li>
      <li><strong>Zinsco/GTE-Sylvania Panels:</strong> Breakers fuse to bus bars, fail to trip during overloads</li>
      <li><strong>Challenger Panels:</strong> Defective breakers prone to overheating</li>
      <li><strong>ITE Pushmatic Panels:</strong> Outdated design, difficult to find replacement parts</li>
    </ul>
    
    <h3>GFCI and AFCI Protection Requirements</h3>
    <p>Modern electrical codes require:</p>
    <ul>
      <li><strong>GFCI (Ground Fault Circuit Interrupter):</strong> Required in bathrooms, kitchens (countertop outlets), garages, unfinished basements, outdoor outlets, within 6 feet of sinks</li>
      <li><strong>AFCI (Arc Fault Circuit Interrupter):</strong> Required in bedrooms, living rooms, dining rooms, family rooms, dens, closets, hallways - essentially all living areas</li>
      <li>Kitchens need both GFCI <em>and</em> AFCI protection on circuits serving countertop outlets</li>
    </ul>
    
    <h3>DIY vs. Professional Electrical Inspection</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Aspect</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">DIY Inspection</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Professional Inspection</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Free (your time)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$125 - $500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Thoroughness</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited - visible issues only</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Comprehensive - hidden issues found</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Insurance/Sale</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Not accepted</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Official report accepted</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Code Knowledge</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Expert - knows local codes</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Safety</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Risk of shock/injury</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Trained professionals</td>
      </tr>
    </table>
    
    <h3>Preparing for an Electrical Inspection</h3>
    <p>Maximize inspection efficiency with these preparations:</p>
    <ul>
      <li><strong>Clear Access:</strong> Ensure electrical panel, sub-panels, and attic/crawl space access are unobstructed</li>
      <li><strong>List Known Issues:</strong> Document flickering lights, non-working outlets, frequent breaker trips</li>
      <li><strong>Provide Documentation:</strong> Share permits for previous electrical work if available</li>
      <li><strong>Test All Outlets:</strong> Note which ones don't work before inspector arrives</li>
      <li><strong>Pet Containment:</strong> Secure pets to allow safe inspection of all areas</li>
    </ul>
    
    <h3>Understanding Your Inspection Report</h3>
    <p>Electrical inspection reports typically categorize findings as:</p>
    <ul>
      <li><strong>Critical/Immediate Repair:</strong> Safety hazards requiring immediate attention (Federal Pacific panels, exposed wiring, no grounding)</li>
      <li><strong>Major Repair Needed:</strong> Significant issues to address soon (overloaded circuits, aluminum wiring connections)</li>
      <li><strong>Minor Repair/Upgrade:</strong> Non-urgent improvements (missing AFCI protection, cosmetic outlet damage)</li>
      <li><strong>Informational:</strong> Items to monitor or consider for future (panel capacity for additions, GFCI upgrade opportunities)</li>
    </ul>
    
    <h3>Negotiating After Electrical Inspection</h3>
    <p>Use inspection findings to negotiate when buying:</p>
    <ul>
      <li><strong>Critical Issues:</strong> Request seller repair before closing or negotiate price reduction equal to repair cost + 20%</li>
      <li><strong>Panel Replacement:</strong> Typical negotiation: $1,500-$3,500 credit or seller completes before closing</li>
      <li><strong>Rewiring Needs:</strong> Major leverage - can request $10,000+ credit or walk away if seller refuses</li>
      <li><strong>Minor Issues:</strong> Often bundled together for small credit ($500-$1,000) or seller agreement to repair</li>
    </ul>
    
    <h3>Regional Cost Variations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Basic Inspection</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Comprehensive</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Northeast (NYC, Boston)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200 - $400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400 - $600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">West Coast (SF, LA, Seattle)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$175 - $375</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$350 - $550</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Midwest (Chicago, Detroit)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$125 - $275</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$275 - $450</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South (Texas, Florida)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100 - $250</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$250 - $425</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Rural Areas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100 - $200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200 - $350</td>
      </tr>
    </table>
    `
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Home Square Footage',
        type: 'number',
        required: true,
        placeholder: '2000',
        helpText: 'Larger homes require more time to inspect'
      },
      {
        name: 'homeAge',
        label: 'Home Age',
        type: 'select',
        required: true,
        options: [
          { value: 'new', label: 'New Construction (0-5 years)' },
          { value: 'modern', label: 'Modern (6-25 years)' },
          { value: 'older', label: 'Older (26-50 years)' },
          { value: 'historic', label: 'Historic (50+ years)' },
        ],
        helpText: 'Older homes typically require more comprehensive inspections'
      },
      {
        name: 'inspectionType',
        label: 'Inspection Type',
        type: 'select',
        required: true,
        options: [
          { value: 'basic', label: 'Basic Home Inspection' },
          { value: 'comprehensive', label: 'Comprehensive Inspection' },
          { value: 'newConstruction', label: 'New Construction Final' },
          { value: 'preSale', label: 'Pre-Sale Inspection' },
          { value: 'insurance', label: 'Insurance/4-Point Inspection' },
          { value: 'postRenovation', label: 'Post-Renovation Inspection' },
        ],
        helpText: 'Purpose of the electrical inspection'
      },
      {
        name: 'panelSize',
        label: 'Electrical Panel Size',
        type: 'select',
        required: true,
        options: [
          { value: '60', label: '60-Amp (Very Old)' },
          { value: '100', label: '100-Amp' },
          { value: '150', label: '150-Amp' },
          { value: '200', label: '200-Amp (Standard)' },
          { value: '400', label: '400-Amp (Large Homes)' },
        ],
        helpText: 'Larger panels take more time to inspect'
      },
      {
        name: 'subPanels',
        label: 'Number of Sub-Panels',
        type: 'number',
        required: true,
        placeholder: '0',
        helpText: 'Each sub-panel adds to inspection time'
      },
      {
        name: 'region',
        label: 'Region',
        type: 'select',
        required: true,
        options: [
          { value: 'northeast', label: 'Northeast (NYC, Boston)' },
          { value: 'westCoast', label: 'West Coast (SF, LA, Seattle)' },
          { value: 'midwest', label: 'Midwest (Chicago, Detroit)' },
          { value: 'south', label: 'South (Texas, Florida)' },
          { value: 'rural', label: 'Rural Areas' },
        ],
        helpText: 'Geographic location affects inspection costs'
      },
      {
        name: 'urgency',
        label: 'Urgency',
        type: 'select',
        required: true,
        options: [
          { value: 'standard', label: 'Standard (5-7 days)' },
          { value: 'expedited', label: 'Expedited (2-3 days)' },
          { value: 'rush', label: 'Rush (24-48 hours)' },
        ],
        helpText: 'Rush inspections cost significantly more'
      }
    ],
    results: [
      {
        name: 'totalCost',
        label: 'Estimated Inspection Cost',
        type: 'currency',
        helpText: 'Total cost for electrical inspection'
      },
      {
        name: 'lowRange',
        label: 'Low Estimate',
        type: 'currency',
        helpText: 'Minimum expected cost'
      },
      {
        name: 'highRange',
        label: 'High Estimate',
        type: 'currency',
        helpText: 'Maximum expected cost'
      },
      {
        name: 'inspectionDuration',
        label: 'Estimated Duration',
        type: 'text',
        helpText: 'How long the inspection will take'
      },
      {
        name: 'recommendation',
        label: 'Recommendation',
        type: 'text',
        helpText: 'Guidance based on your home characteristics'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const squareFootage = parseFloat(inputs.squareFootage) || 0;
      const homeAge = inputs.homeAge || 'modern';
      const inspectionType = inputs.inspectionType || 'basic';
      const panelSize = inputs.panelSize || '200';
      const subPanels = parseFloat(inputs.subPanels) || 0;
      const region = inputs.region || 'midwest';
      const urgency = inputs.urgency || 'standard';

      // Base cost by inspection type
      let baseCost = 0;
      let duration = 0;
      switch (inspectionType) {
        case 'basic':
          baseCost = 200;
          duration = 1.5;
          break;
        case 'comprehensive':
          baseCost = 400;
          duration = 3;
          break;
        case 'newConstruction':
          baseCost = 300;
          duration = 2;
          break;
        case 'preSale':
          baseCost = 250;
          duration = 2;
          break;
        case 'insurance':
          baseCost = 135;
          duration = 1;
          break;
        case 'postRenovation':
          baseCost = 175;
          duration = 1.5;
          break;
      }

      // Square footage multiplier
      const sqftMultiplier = 1 + ((squareFootage - 2000) / 10000);

      // Home age multiplier
      let ageMultiplier = 1.0;
      switch (homeAge) {
        case 'new':
          ageMultiplier = 0.9;
          break;
        case 'modern':
          ageMultiplier = 1.0;
          break;
        case 'older':
          ageMultiplier = 1.3;
          duration += 0.5;
          break;
        case 'historic':
          ageMultiplier = 1.6;
          duration += 1;
          break;
      }

      // Panel size adjustment
      let panelAdjustment = 0;
      switch (panelSize) {
        case '60':
          panelAdjustment = 50;
          break;
        case '100':
          panelAdjustment = 25;
          break;
        case '150':
          panelAdjustment = 0;
          break;
        case '200':
          panelAdjustment = 0;
          break;
        case '400':
          panelAdjustment = 75;
          duration += 0.5;
          break;
      }

      // Sub-panel cost
      const subPanelCost = subPanels * 40;
      duration += subPanels * 0.25;

      // Regional multiplier
      let regionalMultiplier = 1.0;
      switch (region) {
        case 'northeast':
          regionalMultiplier = 1.4;
          break;
        case 'westCoast':
          regionalMultiplier = 1.3;
          break;
        case 'midwest':
          regionalMultiplier = 1.0;
          break;
        case 'south':
          regionalMultiplier = 0.9;
          break;
        case 'rural':
          regionalMultiplier = 0.85;
          break;
      }

      // Urgency multiplier
      let urgencyMultiplier = 1.0;
      switch (urgency) {
        case 'standard':
          urgencyMultiplier = 1.0;
          break;
        case 'expedited':
          urgencyMultiplier = 1.5;
          break;
        case 'rush':
          urgencyMultiplier = 2.0;
          break;
      }

      const totalCost = Math.round(
        (baseCost * sqftMultiplier * ageMultiplier + panelAdjustment + subPanelCost) *
        regionalMultiplier * urgencyMultiplier
      );

      const lowRange = Math.round(totalCost * 0.85);
      const highRange = Math.round(totalCost * 1.15);

      const inspectionDuration = `${duration.toFixed(1)} hours`;

      let recommendation = '';
      if (homeAge === 'historic' || homeAge === 'older') {
        recommendation = 'Comprehensive inspection highly recommended due to home age. Expect potential issues with outdated wiring.';
      } else if (panelSize === '60' || panelSize === '100') {
        recommendation = 'Your electrical panel may need upgrading. Consider comprehensive inspection to assess full system capacity.';
      } else {
        recommendation = 'Standard inspection should be sufficient for your home. Consider comprehensive if you\'ve noticed electrical issues.';
      }

      return {
        totalCost,
        lowRange,
        highRange,
        inspectionDuration,
        recommendation
      };
    }
  }
};
