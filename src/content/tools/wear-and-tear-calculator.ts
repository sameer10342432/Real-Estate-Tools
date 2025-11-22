import { CalculatorContent } from '@/types';

export const WEAR_AND_TEAR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Normal Wear and Tear vs Damage Calculator (Security Deposit)',
  description: 'Determine if property damage is normal wear and tear or tenant damage for security deposit deductions',
  icon: 'Icon',
  category: 'Rental Property',
  slug: 'wear-and-tear-calculator',
  metaTitle: 'Wear and Tear vs Damage Calculator | Security Deposit',
  metaDescription: 'Determine if damage is normal wear and tear or tenant damage for security deposit deductions. Calculate depreciation and allowable landlord deductions.',
  metaKeywords: 'wear and tear, security deposit deductions, tenant damage, normal wear and tear, security deposit disputes, depreciation calculator, landlord deductions, move-out inspection, security deposit laws, rental property damage',
  article: {
    title: "Normal Wear and Tear vs Damage - Security Deposit Guide",
    content: `
    <h2>Normal Wear and Tear vs Damage</h2>
    <p>When a tenant moves out, landlords must determine which issues are "normal wear and tear" (which they cannot deduct from the security deposit) versus actual damage (which they can deduct for). Understanding this distinction is crucial for both landlords and tenants.</p>
    
    <h3>What Is Normal Wear and Tear?</h3>
    <p>Normal wear and tear is the natural deterioration that occurs from ordinary use over time, without negligence, carelessness, accident, or abuse. It's the expected degradation from simply living in and using the property.</p>
    
    <h3>What Is Damage?</h3>
    <p>Damage is deterioration beyond normal wear and tear, caused by tenant negligence, carelessness, accidents, or abuse. This includes anything that wouldn't have happened from normal, reasonable use.</p>
    
    <h3>The Golden Rule</h3>
    <p><strong>Landlords cannot deduct from security deposits for normal wear and tear.</strong> They can only deduct for actual damage beyond normal use, unpaid rent, or cleaning beyond normal tidying.</p>
    
    <h3>Age of Property Matters</h3>
    <p>The expected useful life of items determines what's reasonable:</p>
    <ul>
      <li><strong>Paint:</strong> 2-3 years</li>
      <li><strong>Carpet:</strong> 5-7 years</li>
      <li><strong>Vinyl Flooring:</strong> 10-20 years</li>
      <li><strong>Appliances:</strong> 10-15 years</li>
      <li><strong>HVAC:</strong> 15-20 years</li>
      <li><strong>Roof:</strong> 20-30 years</li>
    </ul>
    
    <h3>Common Examples: Wear and Tear vs Damage</h3>
    
    <h4>WALLS & PAINT</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Minor scuff marks from furniture</li>
      <li>Small nail holes from hanging pictures</li>
      <li>Fading or discoloration from sunlight</li>
      <li>Worn paint in high-traffic areas</li>
      <li>Cracks from house settling</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Large holes in walls</li>
      <li>Crayon or marker on walls</li>
      <li>Stains from spills or pet urine</li>
      <li>Missing drywall sections</li>
      <li>Excessive number of holes (dozens)</li>
      <li>Unauthorized paint (wrong color/type)</li>
    </ul>
    
    <h4>FLOORING & CARPET</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Carpet wear in traffic areas</li>
      <li>Faded carpet from sunlight</li>
      <li>Minor carpet stains (few small spots)</li>
      <li>Worn finish on hardwood</li>
      <li>Minor scratches on wood floors</li>
      <li>Loose grout in tile</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Pet urine stains and odors</li>
      <li>Burns or large stains</li>
      <li>Ripped or torn carpet</li>
      <li>Deep gouges in hardwood</li>
      <li>Broken tiles</li>
      <li>Water damage from neglect (overflow, leaks not reported)</li>
    </ul>
    
    <h4>APPLIANCES & FIXTURES</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Worn knobs on stove</li>
      <li>Faded refrigerator seals</li>
      <li>Slow drain from normal buildup</li>
      <li>Worn faucet washers</li>
      <li>Loose cabinet hinges</li>
      <li>Worn countertop finish</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Broken oven door from misuse</li>
      <li>Missing appliance parts</li>
      <li>Clogged drain from improper disposal</li>
      <li>Broken faucets</li>
      <li>Torn off cabinet doors</li>
      <li>Burns or cuts in countertops</li>
    </ul>
    
    <h4>WINDOWS & DOORS</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Worn weatherstripping</li>
      <li>Loose doorknobs from regular use</li>
      <li>Faded window screens</li>
      <li>Warped wood from humidity</li>
      <li>Worn door hinges</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Broken window glass</li>
      <li>Torn window screens</li>
      <li>Doors with holes or large dents</li>
      <li>Missing or broken locks</li>
      <li>Broken door frames</li>
    </ul>
    
    <h4>KITCHEN & BATHROOM</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Mineral buildup on faucets</li>
      <li>Worn caulking</li>
      <li>Faded grout</li>
      <li>Soap scum</li>
      <li>Minor water stains</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Cracked toilet or sink</li>
      <li>Missing toilet seat</li>
      <li>Broken shower door</li>
      <li>Mold from failure to ventilate</li>
      <li>Damaged cabinets</li>
    </ul>
    
    <h4>BLINDS & WINDOW TREATMENTS</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Faded blinds from sun exposure</li>
      <li>Slightly bent slats</li>
      <li>Worn pull cords</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Missing blinds</li>
      <li>Broken blinds or slats</li>
      <li>Torn curtains</li>
    </ul>
    
    <h4>YARD & EXTERIOR (if tenant responsible)</h4>
    <p><strong>Normal Wear and Tear:</strong></p>
    <ul>
      <li>Dead grass from weather</li>
      <li>Normal plant growth</li>
      <li>Seasonal wear</li>
    </ul>
    <p><strong>Damage (Deductible):</strong></p>
    <ul>
      <li>Dead grass from neglect</li>
      <li>Overgrown weeds/plants</li>
      <li>Damaged fence from misuse</li>
      <li>Trash accumulation</li>
    </ul>
    
    <h3>Length of Tenancy Matters</h3>
    <p>The longer the tenancy, the more wear and tear is expected:</p>
    <ul>
      <li><strong>1 Year:</strong> Minimal wear expected; most issues likely damage</li>
      <li><strong>3 Years:</strong> Moderate wear expected; painting/cleaning normal</li>
      <li><strong>5+ Years:</strong> Significant wear expected; carpet replacement may be normal</li>
      <li><strong>10+ Years:</strong> Most deterioration is wear and tear</li>
    </ul>
    
    <h3>Depreciation and Prorating</h3>
    <p>If an item is damaged but was already worn, landlords must prorate deductions based on remaining useful life:</p>
    
    <h4>Example: Damaged Carpet</h4>
    <ul>
      <li>New carpet cost: $2,000</li>
      <li>Expected life: 7 years</li>
      <li>Carpet age when damaged: 5 years</li>
      <li>Remaining life: 2 years</li>
      <li>Depreciated value: $2,000 × (2/7) = $571</li>
      <li><strong>Maximum deduction: $571, not $2,000</strong></li>
    </ul>
    
    <h3>Cleaning Standards</h3>
    <p>Tenants must return property in "broom clean" condition but are not responsible for:</p>
    <ul>
      <li>Professional deep cleaning</li>
      <li>Carpet shampooing (unless excessively soiled)</li>
      <li>Painting (unless damaged)</li>
      <li>Normal accumulation of dust/dirt</li>
    </ul>
    
    <h3>Documentation Is Critical</h3>
    <p><strong>For Landlords:</strong></p>
    <ul>
      <li>Take detailed move-in photos/video</li>
      <li>Note condition on move-in checklist</li>
      <li>Take move-out photos/video</li>
      <li>Provide itemized deduction list with receipts</li>
      <li>Compare move-in vs move-out condition</li>
    </ul>
    
    <p><strong>For Tenants:</strong></p>
    <ul>
      <li>Take photos/video at move-in</li>
      <li>Complete move-in checklist</li>
      <li>Take photos/video at move-out</li>
      <li>Clean thoroughly before moving out</li>
      <li>Request walk-through with landlord</li>
    </ul>
    
    <h3>Security Deposit Laws by State</h3>
    <p>Timeframes for returning deposits vary:</p>
    <ul>
      <li><strong>14 Days:</strong> Arizona, Nevada</li>
      <li><strong>21 Days:</strong> California, Florida, Michigan</li>
      <li><strong>30 Days:</strong> New York, Texas, Colorado</li>
      <li><strong>45 Days:</strong> Maryland</li>
      <li><strong>60 Days:</strong> New Jersey</li>
    </ul>
    
    <h3>Penalties for Wrongful Deductions</h3>
    <p>Landlords who wrongfully withhold deposits may face:</p>
    <ul>
      <li>Return of full deposit</li>
      <li>Double or triple damages (punitive)</li>
      <li>Interest on withheld amount</li>
      <li>Tenant's court costs and attorneys fees</li>
      <li>Fines from housing authorities</li>
    </ul>
    
    <h3>Tenant Rights</h3>
    <p>If landlord wrongfully withholds deposit:</p>
    <ul>
      <li>Send written demand letter</li>
      <li>Wait for landlord response</li>
      <li>Sue in small claims court</li>
      <li>Present photos and evidence</li>
      <li>Most states favor tenants in close cases</li>
    </ul>
    
    <h3>Landlord Best Practices</h3>
    <ul>
      <li>Inspect property at move-in AND move-out</li>
      <li>Provide itemized deductions within legal timeframe</li>
      <li>Include receipts for repairs/cleaning</li>
      <li>Prorate charges for depreciated items</li>
      <li>Only deduct for actual damage, not normal wear</li>
      <li>When in doubt, don't deduct</li>
    </ul>
    
    <h3>Tenant Best Practices</h3>
    <ul>
      <li>Document condition at move-in</li>
      <li>Report damage immediately</li>
      <li>Clean thoroughly before moving out</li>
      <li>Repair minor damage yourself (small nail holes)</li>
      <li>Request walkthrough with landlord</li>
      <li>Provide forwarding address</li>
      <li>Sue promptly if deposit wrongfully withheld</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "issueType",
        label: "Issue Type",
        type: "select",
        options: [
          { value: "Carpet stains", label: "Carpet stains" },
          { value: "Wall holes", label: "Wall holes" },
          { value: "Paint fading", label: "Paint fading" },
          { value: "Broken window", label: "Broken window" },
          { value: "Pet damage", label: "Pet damage" },
          { value: "Appliance damage", label: "Appliance damage" },
          { value: "Door damage", label: "Door damage" },
          { value: "Cleaning needed", label: "Cleaning needed" }
        ],
        defaultValue: "Carpet stains",
      },
      {
        name: "tenancyLength",
        label: "Length of Tenancy (years)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "issueSize",
        label: "Issue Severity",
        type: "select",
        options: [
          { value: "Minor", label: "Minor" },
          { value: "Moderate", label: "Moderate" },
          { value: "Severe", label: "Severe" }
        ],
        defaultValue: "Minor",
      },
      {
        name: "itemAge",
        label: "Age of Item When Damaged (years)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "replacementCost",
        label: "Replacement Cost",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "Classification", isCurrency: false },
      { label: "Can Landlord Deduct?", isCurrency: false },
      { label: "Expected Useful Life", isCurrency: false },
      { label: "Remaining Life at Damage", isCurrency: false },
      { label: "Depreciated Value", isCurrency: true },
      { label: "Maximum Allowable Deduction", isCurrency: true },
    ],
    calculate: (data: any) => {
      const issueType = data.issueType || "Carpet stains";
      const tenancyLength = Number(data.tenancyLength) || 1;
      const issueSize = data.issueSize || "Minor";
      const itemAge = Number(data.itemAge) || 0;
      const replacementCost = Number(data.replacementCost) || 0;

      let classification = "Normal Wear and Tear";
      let canDeduct = "❌ No";
      let usefulLife = 5;
      let isWearAndTear = true;

      // Determine classification and useful life based on issue type and severity
      if (issueType === "Carpet stains") {
        usefulLife = 7;
        if (issueSize === "Minor" && tenancyLength >= 3) {
          classification = "🟢 Normal Wear and Tear";
          isWearAndTear = true;
        } else if (issueSize === "Severe" || issueType.includes("Pet")) {
          classification = "🔴 Tenant Damage";
          isWearAndTear = false;
        } else {
          classification = "🟡 Borderline (likely wear and tear if long tenancy)";
          isWearAndTear = tenancyLength >= 5;
        }
      } else if (issueType === "Wall holes") {
        usefulLife = 3; // Paint life
        if (issueSize === "Minor" && tenancyLength >= 2) {
          classification = "🟢 Normal Wear and Tear (small nail holes)";
          isWearAndTear = true;
        } else if (issueSize === "Severe") {
          classification = "🔴 Tenant Damage (large holes)";
          isWearAndTear = false;
        } else {
          classification = "🟡 Borderline";
          isWearAndTear = tenancyLength >= 3;
        }
      } else if (issueType === "Paint fading") {
        usefulLife = 3;
        if (tenancyLength >= 2) {
          classification = "🟢 Normal Wear and Tear";
          isWearAndTear = true;
        } else {
          classification = "🟡 Borderline";
          isWearAndTear = tenancyLength >= 1.5;
        }
      } else if (issueType === "Broken window" || issueType === "Broken appliance") {
        usefulLife = 15;
        classification = "🔴 Tenant Damage (breakage)";
        isWearAndTear = false;
      } else if (issueType === "Pet damage") {
        usefulLife = 7;
        classification = "🔴 Tenant Damage";
        isWearAndTear = false;
      } else if (issueType === "Cleaning needed") {
        usefulLife = 1;
        if (issueSize === "Minor") {
          classification = "🟢 Normal Wear and Tear";
          isWearAndTear = true;
        } else {
          classification = "🔴 Excessive (beyond normal cleaning)";
          isWearAndTear = false;
        }
      } else {
        usefulLife = 10;
        classification = issueSize === "Severe" ? "🔴 Tenant Damage" : "🟡 Borderline";
        isWearAndTear = issueSize === "Minor" && tenancyLength >= 3;
      }

      // Calculate depreciated value
      const remainingLife = Math.max(0, usefulLife - itemAge);
      const depreciatedValue = remainingLife > 0 ? (replacementCost * (remainingLife / usefulLife)) : 0;

      // Determine deduction
      let maxDeduction = 0;
      if (!isWearAndTear) {
        maxDeduction = depreciatedValue;
        canDeduct = `✅ Yes - up to depreciated value`;
      } else {
        canDeduct = "❌ No - Normal wear and tear";
      }

      return [
        { label: "Classification", value: classification, isCurrency: false },
        { label: "Can Landlord Deduct?", value: canDeduct, isCurrency: false },
        { label: "Expected Useful Life", value: `${usefulLife} years`, isCurrency: false },
        { label: "Remaining Life at Damage", value: `${remainingLife.toFixed(1)} years`, isCurrency: false },
        { label: "Depreciated Value", value: depreciatedValue.toFixed(2), isCurrency: true },
        { label: "Maximum Allowable Deduction", value: maxDeduction.toFixed(2), isCurrency: true },
      ];
    },
  },
};
