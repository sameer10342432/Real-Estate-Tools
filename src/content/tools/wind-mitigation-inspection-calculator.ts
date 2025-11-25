import { CalculatorContent } from '@/types';

export const WIND_MITIGATION_INSPECTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wind Mitigation Inspection Calculator',
  description: 'Calculate wind mitigation inspection costs and potential insurance savings for hurricane-prone regions',
  slug: 'wind-mitigation-inspection-calculator',
  icon: '🌪️',
  category: 'Inspection Tools',
  article: {
    title: 'Complete Guide to Wind Mitigation Inspections',
    content: `
    <h2>What is a Wind Mitigation Inspection?</h2>
    <p>A wind mitigation inspection evaluates your home's features that help resist wind damage from hurricanes and severe storms. This inspection can significantly reduce homeowners insurance premiums in hurricane-prone areas like Florida, Texas coastal regions, and other coastal states.</p>
    
    <h3>Wind Mitigation Features Examined</h3>
    <p>Inspectors assess these key wind-resistant features:</p>
    <ul>
      <li><strong>Roof Covering:</strong> Age and attachment method of roof materials</li>
      <li><strong>Roof Deck Attachment:</strong> How roof decking is fastened to trusses/rafters</li>
      <li><strong>Roof-to-Wall Attachment:</strong> Type of connectors (clips, straps, toe nails)</li>
      <li><strong>Roof Shape:</strong> Hip roof (best), gable, flat</li>
      <li><strong>Secondary Water Resistance (SWR):</strong> Sealed roof deck beneath shingles</li>
      <li><strong>Opening Protection:</strong> Hurricane shutters, impact-resistant windows/doors</li>
    </ul>
    
    <h3>Average Wind Mitigation Inspection Costs (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State/Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Inspection Cost</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Potential Annual Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$75 - $125</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $3,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas (Coastal)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$85 - $150</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400 - $2,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Louisiana</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$90 - $160</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450 - $2,800</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South Carolina (Coastal)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$80 - $140</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$350 - $2,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina (Coastal)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$85 - $145</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $1,800</td>
      </tr>
    </table>
    
    <h3>Florida Wind Mitigation Form (OIR-B1-1802)</h3>
    <p>Florida uses a standardized form that assesses:</p>
    <ul>
      <li><strong>Building Code:</strong> Year home was built and applicable wind code</li>
      <li><strong>Wind Borne Debris Region:</strong> Whether property is in high-risk zone</li>
      <li><strong>Roof Covering Year:</strong> When roof was installed or re-roofed</li>
      <li><strong>Roof Deck Attachment:</strong> 6" spacing, 6"/6" pattern, or 6"/12" pattern</li>
      <li><strong>Roof-to-Wall Connection:</strong> Clips, single wraps, double wraps, toe nails</li>
      <li><strong>Roof Geometry:</strong> Hip, gable, or flat roof configuration</li>
      <li><strong>SWR:</strong> Sealed roof deck or none</li>
      <li><strong>Opening Protection:</strong> Type and coverage percentage</li>
    </ul>
    
    <h3>Potential Insurance Discounts by Feature</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Potential Discount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Upgrade Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hip Roof vs. Gable</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10-30%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Can't change</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Roof-to-Wall Straps/Clips</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">15-35%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000 - $8,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Enhanced Roof Deck Attachment</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10-20%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000 - $5,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Secondary Water Resistance</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">5-15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000 - $7,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Opening Protection (All Openings)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">20-45%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000 - $35,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Impact-Resistant Glass</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">15-40%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000 - $50,000</td>
      </tr>
    </table>
    
    <h3>ROI on Wind Mitigation Upgrades</h3>
    <p>Calculate return on investment for common upgrades:</p>
    <ul>
      <li><strong>Hurricane Shutters:</strong> $3,000 investment saves $800/year = 3.75 year payback</li>
      <li><strong>Roof-to-Wall Straps:</strong> $5,000 investment saves $1,200/year = 4.2 year payback</li>
      <li><strong>Impact Windows:</strong> $25,000 investment saves $1,500/year = 16.7 year payback (also adds home value)</li>
      <li><strong>SWR Installation:</strong> $5,000 investment saves $600/year = 8.3 year payback</li>
    </ul>
    
    <h3>Roof-to-Wall Connection Types</h3>
    <p>Understanding the hierarchy (best to worst):</p>
    <ul>
      <li><strong>Double Wraps:</strong> Two metal straps wrapping around truss/rafter - highest discount</li>
      <li><strong>Single Wraps:</strong> One metal strap wrapping around - excellent discount</li>
      <li><strong>Clips:</strong> Metal hurricane clips connecting roof to walls - good discount</li>
      <li><strong>Toe Nails:</strong> Basic nailed connection - minimal/no discount</li>
    </ul>
    
    <h3>Opening Protection Options</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Protection Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Pros</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost Range</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Impact-Resistant Glass</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Permanent, aesthetics, UV protection, security</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40-$55/sq ft</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Accordion Shutters</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Easy deployment, permanent install</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15-$25/sq ft</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Roll-Down Shutters</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Motorized options, security, insulation</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20-$35/sq ft</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Bahama Shutters</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Decorative, shade, permanent</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15-$30/sq ft</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Panel Shutters</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Most affordable, effective</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7-$15/sq ft</td>
      </tr>
    </table>
    
    <h3>Building Code Year Impact</h3>
    <p>Florida building codes have evolved for wind resistance:</p>
    <ul>
      <li><strong>Pre-1994:</strong> Minimal wind requirements - highest insurance premiums</li>
      <li><strong>1994-2001:</strong> Improved standards after Hurricane Andrew - moderate premiums</li>
      <li><strong>2002-2007:</strong> Florida Building Code (FBC) introduced - better premiums</li>
      <li><strong>2007+:</strong> Stricter FBC post-Hurricane Wilma - best premiums</li>
      <li><strong>2020+:</strong> Enhanced high-velocity hurricane zone (HVHZ) requirements</li>
    </ul>
    
    <h3>When to Get a Wind Mitigation Inspection</h3>
    <p>Schedule an inspection in these situations:</p>
    <ul>
      <li><strong>After Roof Replacement:</strong> New roof may qualify for improved rating</li>
      <li><strong>New Home Purchase:</strong> Essential in coastal areas - often saves thousands annually</li>
      <li><strong>After Hurricane Protection Upgrades:</strong> Document improvements for insurance credit</li>
      <li><strong>Insurance Renewal:</strong> Annual premiums increasing? Inspection may find missed credits</li>
      <li><strong>Every 5 Years:</strong> Some insurers require updated inspections</li>
    </ul>
    
    <h3>Inspection Validity Period</h3>
    <p>Wind mitigation inspections remain valid:</p>
    <ul>
      <li><strong>Florida:</strong> Typically 5 years unless structural changes made</li>
      <li><strong>Texas:</strong> Usually 5 years or until roof replacement</li>
      <li><strong>Louisiana:</strong> Varies by insurer, typically 3-5 years</li>
      <li><strong>Update Required:</strong> New roof, window replacement, or hurricane protection additions</li>
    </ul>
    
    <h3>Bundling with Other Inspections</h3>
    <p>Save money by combining services:</p>
    <ul>
      <li><strong>Wind Mitigation + 4-Point:</strong> $150-$250 total (save $50-$75)</li>
      <li><strong>Wind Mitigation + Roof Certification:</strong> $125-$200 total (save $40-$60)</li>
      <li><strong>Wind Mitigation + Full Home Inspection:</strong> $400-$600 total (save $75-$100)</li>
    </ul>
    
    <h3>Florida-Specific: Windstorm Underwriting Association</h3>
    <p>Understanding Citizens Property Insurance requirements:</p>
    <ul>
      <li>Mandatory wind mitigation discounts for qualifying features</li>
      <li>Stricter requirements than private insurers</li>
      <li>Maximum discounts can reach 60% of wind premium</li>
      <li>Inspection must use Florida-licensed inspector</li>
    </ul>
    
    <h3>Maximum Insurance Savings Example</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Home Features</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Premium</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Minimal wind protection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Hip roof + hurricane clips</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,300</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hip roof + straps + SWR</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,100</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">All features + full opening protection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,700</td>
      </tr>
    </table>
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
          { value: 'florida', label: 'Florida' },
          { value: 'texasCoastal', label: 'Texas (Coastal)' },
          { value: 'louisiana', label: 'Louisiana' },
          { value: 'southCarolina', label: 'South Carolina' },
          { value: 'northCarolina', label: 'North Carolina' },
        ],
        helpText: 'Your state affects inspection costs and potential savings'
      },
      {
        name: 'homeValue',
        label: 'Home Value',
        type: 'currency',
        required: true,
        placeholder: '350000',
        helpText: 'Approximate home value for insurance calculation'
      },
      {
        name: 'currentAnnualPremium',
        label: 'Current Annual Insurance Premium',
        type: 'currency',
        required: true,
        placeholder: '4000',
        helpText: 'Your current annual homeowners insurance cost'
      },
      {
        name: 'windFeatures',
        label: 'Current Wind Mitigation Features',
        type: 'select',
        required: true,
        options: [
          { value: 'minimal', label: 'Minimal - Basic Construction' },
          { value: 'moderate', label: 'Moderate - Some Features' },
          { value: 'good', label: 'Good - Hip Roof or Clips' },
          { value: 'excellent', label: 'Excellent - Multiple Features' },
        ],
        helpText: 'Current wind-resistant features of your home'
      },
      {
        name: 'bundleWith',
        label: 'Bundle with Other Inspection',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'Wind Mitigation Only' },
          { value: 'fourPoint', label: '4-Point Inspection' },
          { value: 'roofCert', label: 'Roof Certification' },
          { value: 'fullHome', label: 'Full Home Inspection' },
        ],
        helpText: 'Bundling saves money on total inspection costs'
      }
    ],
    results: [
      {
        name: 'inspectionCost',
        label: 'Inspection Cost',
        type: 'currency',
        helpText: 'Cost to perform wind mitigation inspection'
      },
      {
        name: 'estimatedAnnualSavings',
        label: 'Estimated Annual Insurance Savings',
        type: 'currency',
        helpText: 'Potential yearly savings on insurance premiums'
      },
      {
        name: 'paybackPeriod',
        label: 'Inspection Payback Period',
        type: 'text',
        helpText: 'How quickly inspection pays for itself'
      },
      {
        name: 'fiveYearSavings',
        label: '5-Year Total Savings',
        type: 'currency',
        helpText: 'Total savings over 5 years (minus inspection cost)'
      },
      {
        name: 'recommendation',
        label: 'Recommendation',
        type: 'text',
        helpText: 'Guidance on wind mitigation value'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const state = inputs.state || 'florida';
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const currentAnnualPremium = parseFloat(inputs.currentAnnualPremium) || 0;
      const windFeatures = inputs.windFeatures || 'minimal';
      const bundleWith = inputs.bundleWith || 'none';

      // Base inspection cost by state
      let baseInspectionCost = 0;
      let savingsMultiplier = 1.0;
      
      switch (state) {
        case 'florida':
          baseInspectionCost = 100;
          savingsMultiplier = 1.0;
          break;
        case 'texasCoastal':
          baseInspectionCost = 117;
          savingsMultiplier = 0.85;
          break;
        case 'louisiana':
          baseInspectionCost = 125;
          savingsMultiplier = 0.9;
          break;
        case 'southCarolina':
          baseInspectionCost = 110;
          savingsMultiplier = 0.75;
          break;
        case 'northCarolina':
          baseInspectionCost = 115;
          savingsMultiplier = 0.7;
          break;
      }

      // Bundle discount
      let bundleCost = baseInspectionCost;
      switch (bundleWith) {
        case 'none':
          bundleCost = baseInspectionCost;
          break;
        case 'fourPoint':
          bundleCost = baseInspectionCost + 75; // Added 4-point for less
          break;
        case 'roofCert':
          bundleCost = baseInspectionCost + 50;
          break;
        case 'fullHome':
          bundleCost = baseInspectionCost + 275;
          break;
      }

      const inspectionCost = Math.round(bundleCost);

      // Estimate savings based on features
      let savingsPercentage = 0;
      switch (windFeatures) {
        case 'minimal':
          savingsPercentage = 0.25; // 25% potential savings
          break;
        case 'moderate':
          savingsPercentage = 0.15;
          break;
        case 'good':
          savingsPercentage = 0.10;
          break;
        case 'excellent':
          savingsPercentage = 0.05;
          break;
      }

      const estimatedAnnualSavings = Math.round(
        currentAnnualPremium * savingsPercentage * savingsMultiplier
      );

      const paybackMonths = estimatedAnnualSavings > 0 
        ? (inspectionCost / estimatedAnnualSavings) * 12
        : 999;
      
      const paybackPeriod = paybackMonths < 1 
        ? 'Less than 1 month'
        : paybackMonths < 12
        ? `${Math.round(paybackMonths)} months`
        : `${(paybackMonths / 12).toFixed(1)} years`;

      const fiveYearSavings = (estimatedAnnualSavings * 5) - inspectionCost;

      let recommendation = '';
      if (fiveYearSavings > 2000) {
        recommendation = 'Highly recommended - Excellent ROI on wind mitigation inspection';
      } else if (fiveYearSavings > 1000) {
        recommendation = 'Recommended - Good potential savings over 5 years';
      } else if (fiveYearSavings > 0) {
        recommendation = 'Consider it - Modest savings but still worthwhile';
      } else {
        recommendation = 'Limited benefit - Your home may already have good wind features';
      }

      return {
        inspectionCost,
        estimatedAnnualSavings,
        paybackPeriod,
        fiveYearSavings: Math.max(0, fiveYearSavings),
        recommendation
      };
    }
  }
};
