import { CalculatorContent } from '@/types';

export const FLOOD_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Flood Insurance Cost Calculator',
  description: 'Calculate flood insurance premiums based on flood zone, coverage amount, and property elevation',
  slug: 'flood-insurance-cost-calculator',
  icon: '🌊',
  category: 'Insurance Tools',
  article: {
    title: 'Complete Guide to Flood Insurance Costs',
    content: `
    <h2>Understanding Flood Insurance</h2>
    <p>Flood insurance is a specialized policy that covers property damage from flooding - something standard homeowners insurance explicitly excludes. Whether you're in a high-risk flood zone or low-risk area, understanding flood insurance costs helps protect your most valuable asset.</p>
    
    <h3>Why Standard Insurance Doesn't Cover Floods</h3>
    <p>Homeowners insurance policies universally exclude flood damage because:</p>
    <ul>
      <li><strong>Catastrophic Risk:</strong> Floods can affect thousands of homes simultaneously</li>
      <li><strong>Geographic Concentration:</strong> Risk is highly concentrated in specific areas</li>
      <li><strong>Predictable Losses:</strong> High-risk areas would make insurance prohibitively expensive</li>
      <li><strong>Federal Program:</strong> National Flood Insurance Program (NFIP) handles most flood insurance</li>
    </ul>
    
    <h3>Average Flood Insurance Costs (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Flood Zone</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Average Annual Premium</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High-Risk (A/V Zones)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000 - $8,000+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1% annual flood chance</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate-Risk (B/X500 Zones)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$450 - $800</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.2% annual flood chance</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Low-Risk (C/X Zones)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400 - $600</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Minimal flood risk</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Coastal High-Hazard (V Zones)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,000 - $15,000+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Wave action + 1% flood chance</td>
      </tr>
    </table>
    
    <h3>Understanding Flood Zones</h3>
    <p>FEMA designates flood zones based on flood risk:</p>
    <ul>
      <li><strong>Zone A/AE:</strong> High-risk flood areas (1% annual chance = 26% chance over 30-year mortgage)</li>
      <li><strong>Zone AO:</strong> Shallow flooding areas with depths 1-3 feet</li>
      <li><strong>Zone AH:</strong> Shallow ponding areas with 1-3 feet depths</li>
      <li><strong>Zone V/VE:</strong> Coastal high-hazard areas with wave action</li>
      <li><strong>Zone X:</strong> Moderate to low flood risk (0.2% annual chance)</li>
      <li><strong>Zone B/C:</strong> Minimal flood risk</li>
    </ul>
    
    <h3>Flood Insurance Cost Factors</h3>
    <p>Several factors determine your flood insurance premium:</p>
    <ul>
      <li><strong>Flood Zone:</strong> High-risk zones cost significantly more than low-risk</li>
      <li><strong>Building Elevation:</strong> Homes above Base Flood Elevation (BFE) get lower rates</li>
      <li><strong>Foundation Type:</strong> Crawlspace, basement, slab, elevated on piers</li>
      <li><strong>Coverage Amount:</strong> Dwelling coverage up to $250,000, contents up to $100,000</li>
      <li><strong>Deductible:</strong> Higher deductibles reduce premiums</li>
      <li><strong>Building Age:</strong> Pre-FIRM vs. Post-FIRM construction (Flood Insurance Rate Maps)</li>
      <li><strong>Number of Floors:</strong> Multi-story homes have different rate structures</li>
      <li><strong>Community Rating System (CRS):</strong> Some communities offer 5-45% discounts</li>
    </ul>
    
    <h3>NFIP Coverage Limits (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Coverage Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Maximum Coverage</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">What's Covered</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Building Coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$250,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Structure, foundation, HVAC, built-in appliances</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Contents Coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Furniture, clothing, electronics, portable appliances</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial Building</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Business structure</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial Contents</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Business property</td>
      </tr>
    </table>
    
    <h3>What Flood Insurance Covers</h3>
    <p>Flood insurance typically covers:</p>
    <ul>
      <li><strong>Building Structure:</strong> Foundation, walls, floors, roof</li>
      <li><strong>Electrical/Plumbing:</strong> Permanently installed systems</li>
      <li><strong>HVAC Equipment:</strong> Furnaces, water heaters, air conditioners</li>
      <li><strong>Built-In Appliances:</strong> Dishwashers, built-in microwaves, range ovens</li>
      <li><strong>Carpeting:</strong> Permanently installed wall-to-wall carpeting</li>
      <li><strong>Personal Property:</strong> Furniture, clothing, electronics (requires contents coverage)</li>
    </ul>
    
    <h3>What Flood Insurance Doesn't Cover</h3>
    <p>Common exclusions include:</p>
    <ul>
      <li><strong>Temporary Housing:</strong> Additional living expenses while home is uninhabitable</li>
      <li><strong>Financial Losses:</strong> Business interruption, lost wages</li>
      <li><strong>Landscaping:</strong> Trees, plants, shrubs, fences, decks, patios</li>
      <li><strong>Swimming Pools:</strong> Pools and hot tubs</li>
      <li><strong>Currency/Precious Metals:</strong> Cash, stocks, bonds, valuable papers</li>
      <li><strong>Basement Contents:</strong> Most personal property in basements is excluded</li>
      <li><strong>Vehicles:</strong> Cars, motorcycles (covered by auto insurance)</li>
    </ul>
    
    <h3>Mortgage Requirements for Flood Insurance</h3>
    <p>Federal law requires flood insurance when:</p>
    <ul>
      <li>Property is in a high-risk flood zone (A or V zones)</li>
      <li>Mortgage is from a federally regulated or insured lender</li>
      <li>Coverage must equal the lesser of:
        <ul style="margin-left: 20px; margin-top: 5px;">
          <li>Outstanding mortgage balance</li>
          <li>Maximum NFIP coverage ($250,000 building)</li>
          <li>100% of replacement cost of the building</li>
        </ul>
      </li>
    </ul>
    
    <h3>30-Day Waiting Period</h3>
    <p>Important timing considerations:</p>
    <ul>
      <li><strong>Standard Wait:</strong> 30-day waiting period from purchase to coverage begins</li>
      <li><strong>Exception - New Mortgage:</strong> Coverage can start at closing if purchased within 13 days of loan approval</li>
      <li><strong>Exception - New Mapping:</strong> No wait if home newly mapped into high-risk zone</li>
      <li><strong>Planning Ahead:</strong> Purchase flood insurance before hurricane season or rainy season</li>
    </ul>
    
    <h3>Pre-FIRM vs. Post-FIRM Construction</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Aspect</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Pre-FIRM (Before Maps)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Post-FIRM (After Maps)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Built Date</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Before community's first FIRM</td>
        <td style="border: 1px solid #ddd; padding: 8px;">After community's first FIRM</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Premium Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Often subsidized - lower rates</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full-risk rates (higher)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Grandfathering</td>
        <td style="border: 1px solid #ddd; padding: 8px;">May be grandfathered into old zone</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Subject to current flood zone</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Elevation Certificate</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Can reduce rates significantly</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Required for accurate rating</td>
      </tr>
    </table>
    
    <h3>Elevation Certificate Impact</h3>
    <p>An Elevation Certificate (cost: $500-$1,500) documents your home's elevation:</p>
    <ul>
      <li><strong>Above BFE:</strong> Significant premium reductions - can save thousands annually</li>
      <li><strong>At BFE:</strong> Standard rates apply</li>
      <li><strong>Below BFE:</strong> Higher premiums for each foot below flood level</li>
      <li><strong>ROI:</strong> Certificate often pays for itself in 1-2 years of premium savings</li>
    </ul>
    
    <h3>Private Flood Insurance vs. NFIP</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">NFIP</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Private Insurance</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Maximum Coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$250,000 building/$100,000 contents</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to $5 million+ possible</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Premium Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Standardized rates</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Often competitive, especially in low-risk areas</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Coverage Options</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited - standard policy only</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flexible - customizable coverage</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Deductibles</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000 - $10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Wider range available</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Additional Living Expenses</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Not covered</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Often available</td>
      </tr>
    </table>
    
    <h3>Community Rating System (CRS) Discounts</h3>
    <p>Communities that exceed minimum floodplain management earn discounts:</p>
    <ul>
      <li><strong>Class 1:</strong> 45% discount (highest - very rare)</li>
      <li><strong>Class 5:</strong> 25% discount in high-risk zones, 10% in moderate zones</li>
      <li><strong>Class 9:</strong> 5% discount</li>
      <li><strong>Class 10:</strong> No discount (not participating)</li>
      <li>Check your community's CRS class on FEMA's website for potential savings</li>
    </ul>
    
    <h3>Reducing Flood Insurance Costs</h3>
    <p>Strategies to lower your flood insurance premium:</p>
    <ul>
      <li><strong>Obtain Elevation Certificate:</strong> Prove your home is above base flood elevation</li>
      <li><strong>Increase Deductible:</strong> Choose $5,000 or $10,000 deductible vs. $1,000</li>
      <li><strong>Shop Private Insurance:</strong> Compare NFIP with private flood insurers</li>
      <li><strong>Challenge Flood Zone:</strong> Request Letter of Map Amendment (LOMA) if home is above flood level</li>
      <li><strong>Reduce Coverage:</strong> Insure only to mortgage requirement (not recommended for full protection)</li>
      <li><strong>Elevate Your Home:</strong> Raise structure above base flood elevation (expensive but effective)</li>
    </ul>
    
    <h3>Is Flood Insurance Worth It in Low-Risk Areas?</h3>
    <p>Consider flood insurance even in low-risk zones because:</p>
    <ul>
      <li><strong>Affordability:</strong> Preferred Risk Policies start at $400-$600 annually</li>
      <li><strong>Unexpected Events:</strong> 25% of flood claims come from low-to-moderate risk areas</li>
      <li><strong>Climate Change:</strong> Increasing severe weather events nationwide</li>
      <li><strong>Financial Protection:</strong> Average flood claim is $50,000+ - devastating without insurance</li>
      <li><strong>Peace of Mind:</strong> Small annual premium for catastrophic risk protection</li>
    </ul>
    
    <h3>Flood Insurance Claims Process</h3>
    <p>What to know when filing a flood claim:</p>
    <ul>
      <li><strong>Immediate Action:</strong> Take photos/video, contact insurer within 60 days</li>
      <li><strong>Mitigate Damage:</strong> Prevent further damage (covered under policy)</li>
      <li><strong>Document Everything:</strong> Itemize damaged property, save receipts</li>
      <li><strong>Adjuster Visit:</strong> Required for claims over $1,000</li>
      <li><strong>Payment Timeline:</strong> NFIP typically pays within 30-60 days</li>
      <li><strong>Actual Cash Value vs. Replacement:</strong> NFIP pays replacement cost for building (up to policy limit)</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'floodZone',
        label: 'Flood Zone',
        type: 'select',
        required: true,
        options: [
          { value: 'highRiskA', label: 'High-Risk (A/AE Zones)' },
          { value: 'coastalV', label: 'Coastal High-Hazard (V/VE Zones)' },
          { value: 'moderateRisk', label: 'Moderate-Risk (B/X500 Zones)' },
          { value: 'lowRisk', label: 'Low-Risk (C/X Zones)' },
        ],
        helpText: 'Check your FEMA flood zone on FloodSmart.gov'
      },
      {
        name: 'buildingCoverage',
        label: 'Building Coverage Amount',
        type: 'currency',
        required: true,
        placeholder: '250000',
        helpText: 'Maximum NFIP coverage is $250,000'
      },
      {
        name: 'contentsCoverage',
        label: 'Contents Coverage Amount',
        type: 'currency',
        required: true,
        placeholder: '50000',
        helpText: 'Maximum NFIP coverage is $100,000'
      },
      {
        name: 'firmStatus',
        label: 'Construction Date',
        type: 'select',
        required: true,
        options: [
          { value: 'postFIRM', label: 'Post-FIRM (After flood maps)' },
          { value: 'preFIRM', label: 'Pre-FIRM (Before flood maps)' },
        ],
        helpText: 'Pre-FIRM homes built before community flood maps may have subsidized rates'
      },
      {
        name: 'elevationStatus',
        label: 'Elevation Relative to Base Flood Elevation (BFE)',
        type: 'select',
        required: true,
        options: [
          { value: 'aboveBFE', label: 'Above BFE (Lower Risk)' },
          { value: 'atBFE', label: 'At BFE (Standard)' },
          { value: 'belowBFE', label: 'Below BFE (Higher Risk)' },
          { value: 'unknown', label: 'Unknown - Need Elevation Certificate' },
        ],
        helpText: 'Elevation significantly affects premiums'
      },
      {
        name: 'deductible',
        label: 'Deductible',
        type: 'select',
        required: true,
        options: [
          { value: '1000', label: '$1,000' },
          { value: '2000', label: '$2,000' },
          { value: '5000', label: '$5,000' },
          { value: '10000', label: '$10,000' },
        ],
        helpText: 'Higher deductibles lower premiums'
      },
      {
        name: 'crsDiscount',
        label: 'Community Rating System (CRS) Class',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No CRS Participation (Class 10)' },
          { value: 'class9', label: 'Class 9 (5% discount)' },
          { value: 'class7', label: 'Class 7 (15% discount)' },
          { value: 'class5', label: 'Class 5 (25% discount)' },
        ],
        helpText: 'Check your community CRS rating on FEMA website'
      }
    ],
    results: [
      {
        name: 'annualPremium',
        label: 'Estimated Annual Premium',
        type: 'currency',
        helpText: 'Total yearly flood insurance cost'
      },
      {
        name: 'monthlyPremium',
        label: 'Monthly Premium',
        type: 'currency',
        helpText: 'Approximate monthly payment'
      },
      {
        name: 'crsDiscount',
        label: 'CRS Discount Amount',
        type: 'currency',
        helpText: 'Annual savings from community flood management programs'
      },
      {
        name: 'elevationCertRecommendation',
        label: 'Elevation Certificate Recommendation',
        type: 'text',
        helpText: 'Whether getting an elevation certificate could save money'
      },
      {
        name: 'thirtyYearCost',
        label: '30-Year Total Cost',
        type: 'currency',
        helpText: 'Total cost over typical mortgage period'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const floodZone = inputs.floodZone || 'lowRisk';
      const buildingCoverage = parseFloat(inputs.buildingCoverage) || 0;
      const contentsCoverage = parseFloat(inputs.contentsCoverage) || 0;
      const firmStatus = inputs.firmStatus || 'postFIRM';
      const elevationStatus = inputs.elevationStatus || 'unknown';
      const deductible = parseFloat(inputs.deductible) || 1000;
      const crsClass = inputs.crsDiscount || 'none';

      // Base rate per $100 of coverage by zone
      let buildingRate = 0;
      let contentsRate = 0;

      switch (floodZone) {
        case 'highRiskA':
          buildingRate = firmStatus === 'postFIRM' ? 1.2 : 0.8;
          contentsRate = 0.6;
          break;
        case 'coastalV':
          buildingRate = firmStatus === 'postFIRM' ? 2.5 : 1.8;
          contentsRate = 1.2;
          break;
        case 'moderateRisk':
          buildingRate = 0.25;
          contentsRate = 0.15;
          break;
        case 'lowRisk':
          buildingRate = 0.18;
          contentsRate = 0.12;
          break;
      }

      // Elevation adjustment
      let elevationMultiplier = 1.0;
      let elevationCertRecommendation = '';

      switch (elevationStatus) {
        case 'aboveBFE':
          elevationMultiplier = 0.6;
          elevationCertRecommendation = 'Great! Your elevation is saving you money.';
          break;
        case 'atBFE':
          elevationMultiplier = 1.0;
          elevationCertRecommendation = 'Your home is at base flood elevation - standard rates apply.';
          break;
        case 'belowBFE':
          elevationMultiplier = 1.8;
          elevationCertRecommendation = 'Below BFE significantly increases cost. Consider mitigation.';
          break;
        case 'unknown':
          elevationMultiplier = 1.2;
          elevationCertRecommendation = 'Get an Elevation Certificate ($500-$1,500) - could save $500-$3,000/year!';
          break;
      }

      // Calculate base premium
      const buildingPremium = (buildingCoverage / 100) * buildingRate * elevationMultiplier;
      const contentsPremium = (contentsCoverage / 100) * contentsRate;
      let totalPremium = buildingPremium + contentsPremium;

      // Deductible discount
      const deductibleDiscount = deductible === 10000 ? 0.85 :
                                 deductible === 5000 ? 0.90 :
                                 deductible === 2000 ? 0.95 : 1.0;
      
      totalPremium *= deductibleDiscount;

      // CRS discount
      let crsDiscountPercent = 0;
      switch (crsClass) {
        case 'none':
          crsDiscountPercent = 0;
          break;
        case 'class9':
          crsDiscountPercent = 0.05;
          break;
        case 'class7':
          crsDiscountPercent = 0.15;
          break;
        case 'class5':
          crsDiscountPercent = floodZone === 'lowRisk' || floodZone === 'moderateRisk' ? 0.10 : 0.25;
          break;
      }

      const crsDiscountAmount = Math.round(totalPremium * crsDiscountPercent);
      totalPremium -= crsDiscountAmount;

      const annualPremium = Math.round(totalPremium);
      const monthlyPremium = Math.round(annualPremium / 12);
      const thirtyYearCost = annualPremium * 30;

      return {
        annualPremium,
        monthlyPremium,
        crsDiscount: crsDiscountAmount,
        elevationCertRecommendation,
        thirtyYearCost
      };
    }
  }
};
