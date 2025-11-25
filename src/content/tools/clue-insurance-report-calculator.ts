import { CalculatorContent } from '@/types';

export const CLUE_INSURANCE_REPORT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'CLUE Insurance Report Cost Calculator',
  description: 'Calculate CLUE report costs and understand how insurance claims history affects home insurance premiums',
  slug: 'clue-insurance-report-calculator',
  icon: '📄',
  category: 'Insurance Tools',
  article: {
    title: 'Complete Guide to CLUE Insurance Reports',
    content: `
    <h2>What is a CLUE Report?</h2>
    <p>A CLUE (Comprehensive Loss Underwriting Exchange) report is a detailed insurance claims history database maintained by LexisNexis. It contains up to 7 years of personal property and auto insurance claims for a specific property or individual, and is used by insurance companies to assess risk and determine premiums.</p>
    
    <h3>What Information is in a CLUE Report?</h3>
    <p>A property CLUE report includes:</p>
    <ul>
      <li><strong>Property Address:</strong> Full address of the insured property</li>
      <li><strong>Policy Information:</strong> Insurance company name, policy numbers, coverage dates</li>
      <li><strong>Claims History:</strong> Type of claim, date of loss, amount paid</li>
      <li><strong>Claim Status:</strong> Open, closed, denied, or inquiry only</li>
      <li><strong>Loss Description:</strong> Brief description of the claim (water damage, fire, theft, etc.)</li>
      <li><strong>Property Characteristics:</strong> Square footage, year built, construction type</li>
      <li><strong>Coverage Amounts:</strong> Dwelling coverage, liability limits</li>
    </ul>
    
    <h3>How to Obtain a CLUE Report</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Method</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Timeline</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Personal CLUE Report (Your Property)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">FREE</td>
        <td style="border: 1px solid #ddd; padding: 8px;">7-15 days (mail)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Property Seller Provides to Buyer</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">FREE</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Immediate (if already requested)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Through Real Estate Agent/Title Company</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20 - $50</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-3 business days</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Home Inspector Service</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$25 - $75</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-5 business days</td>
      </tr>
    </table>
    
    <h3>Why CLUE Reports Matter</h3>
    <p>CLUE reports significantly impact insurance decisions:</p>
    <ul>
      <li><strong>Premium Increases:</strong> Multiple claims can raise premiums 20-50% or more</li>
      <li><strong>Coverage Denial:</strong> Properties with extensive claims history may be uninsurable</li>
      <li><strong>Pre-Purchase Intelligence:</strong> Buyers should review before purchasing to avoid surprises</li>
      <li><strong>Claim Accuracy:</strong> Errors on CLUE reports can unfairly increase premiums</li>
      <li><strong>7-Year Impact:</strong> Claims remain on report for 7 years, affecting insurability</li>
    </ul>
    
    <h3>How Claims Affect Insurance Premiums</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Claim Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typical Premium Impact</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Duration of Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Water Damage (Single Claim)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10-20% increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3-5 years</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Multiple Water Claims (2+)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">25-50% increase or denial</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-7 years</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fire/Smoke Damage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">15-30% increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-7 years</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Theft/Vandalism</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10-25% increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3-5 years</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Liability Claim</td>
        <td style="border: 1px solid #ddd; padding: 8px;">20-40% increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-7 years</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Hurricane/Wind Damage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">15-35% increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-7 years</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Mold/Fungus</td>
        <td style="border: 1px solid #ddd; padding: 8px;">30-60% increase or exclusion</td>
        <td style="border: 1px solid #ddd; padding: 8px;">7+ years</td>
      </tr>
    </table>
    
    <h3>When to Request a CLUE Report</h3>
    <p>Request a CLUE report in these situations:</p>
    <ul>
      <li><strong>Before Buying a Home:</strong> Essential during due diligence to understand property's claims history</li>
      <li><strong>Before Selling:</strong> Review your own property's CLUE to address issues proactively</li>
      <li><strong>Insurance Rate Shopping:</strong> Understand why premiums are high</li>
      <li><strong>Denied Coverage:</strong> Verify accuracy of information insurers are using</li>
      <li><strong>Annual Review:</strong> Check for errors or fraudulent claims</li>
      <li><strong>Moving to New Home:</strong> Personal CLUE report shows your individual claims history</li>
    </ul>
    
    <h3>Common CLUE Report Errors</h3>
    <p>Check your CLUE report for these common mistakes:</p>
    <ul>
      <li><strong>Inquiry Listed as Claim:</strong> Simply calling your insurer shouldn't create a "claim"</li>
      <li><strong>Wrong Claim Amount:</strong> Inflated payout amounts due to clerical errors</li>
      <li><strong>Duplicate Claims:</strong> Same claim reported multiple times</li>
      <li><strong>Claims from Previous Owner:</strong> Old claims that should have been removed</li>
      <li><strong>Incorrect Property Information:</strong> Wrong address, square footage, or construction details</li>
      <li><strong>Claims You Never Filed:</strong> Fraudulent claims or mistaken identity</li>
    </ul>
    
    <h3>How to Dispute CLUE Report Errors</h3>
    <p>If you find errors on your CLUE report:</p>
    <ol style="margin-left: 20px;">
      <li><strong>Contact LexisNexis:</strong> Submit dispute online or call (866) 897-8126</li>
      <li><strong>Provide Documentation:</strong> Submit proof (policy documents, claim denials, correspondence)</li>
      <li><strong>Contact Insurance Company:</strong> Ask insurer to correct their submission to LexisNexis</li>
      <li><strong>Follow Up:</strong> LexisNexis has 30 days to investigate and respond</li>
      <li><strong>Add Statement:</strong> If dispute is unsuccessful, add a consumer statement to your file</li>
      <li><strong>Seek Legal Help:</strong> For serious errors, consider consumer protection attorney</li>
    </ol>
    
    <h3>Property CLUE vs. Personal CLUE</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Aspect</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property CLUE</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Personal CLUE</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">What It Tracks</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Claims on specific address</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Your claims across all properties</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Who Can Request</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Property owner or authorized party</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Individual only</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Used For</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Home buying/selling, insurance quotes</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Personal insurance rate shopping</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">FREE (1 per year) or $20-$75</td>
        <td style="border: 1px solid #ddd; padding: 8px;">FREE (1 per year)</td>
      </tr>
    </table>
    
    <h3>Impact of Inquiries vs. Claims</h3>
    <p>Important distinction between inquiries and claims:</p>
    <ul>
      <li><strong>Inquiry:</strong> You called your insurance to ask about coverage - should NOT appear as a claim</li>
      <li><strong>Claim:</strong> You formally filed for a loss and requested payment</li>
      <li><strong>Problem:</strong> Some insurers incorrectly report inquiries as claims, unfairly penalizing homeowners</li>
      <li><strong>Solution:</strong> Always ask your insurer "Will this inquiry be reported as a claim on my CLUE?" before discussing potential claims</li>
    </ul>
    
    <h3>Should You File a Claim? Cost-Benefit Analysis</h3>
    <p>Consider the long-term impact before filing small claims:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Loss Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Recommendation</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Reasoning</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Under $2,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Don't File</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Premium increases over 3-5 years will exceed payout</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$2,500 - $5,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">Carefully Consider</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Depends on deductible and claims history</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000 - $10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Likely File</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Payout likely exceeds premium increases</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Over $10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #16a34a;">Definitely File</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Major losses are what insurance is for</td>
      </tr>
    </table>
    
    <h3>Selling a Home with Claims History</h3>
    <p>If your property has claims on its CLUE report:</p>
    <ul>
      <li><strong>Disclose Proactively:</strong> Provide CLUE report to potential buyers upfront</li>
      <li><strong>Show Repairs:</strong> Document that issues have been permanently fixed</li>
      <li><strong>Get Quotes:</strong> Obtain insurance quotes to show the property IS insurable</li>
      <li><strong>Price Accordingly:</strong> Multiple water claims may require $5,000-$15,000 price reduction</li>
      <li><strong>Offer Credit:</strong> Consider offering credit for buyer's first year higher premiums</li>
      <li><strong>Transfer History:</strong> Claims stay with property, not seller</li>
    </ul>
    
    <h3>Claims That Cause the Most Problems</h3>
    <p>These claim types are red flags for insurers:</p>
    <ul>
      <li><strong>Water Damage (Multiple):</strong> 2+ water claims in 5 years = very difficult to insure</li>
      <li><strong>Mold Claims:</strong> Single mold claim can result in mold exclusions on future policies</li>
      <li><strong>Foundation Issues:</strong> Foundation-related water claims raise major concerns</li>
      <li><strong>Dog Bite/Liability:</strong> Breed-specific restrictions or liability coverage denial</li>
      <li><strong>Roof Leaks (Repeated):</strong> Pattern of roof claims suggests deferred maintenance</li>
    </ul>
    
    <h3>Geographic Variations in CLUE Impact</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">CLUE Impact Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #dc2626;">Very High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Water claims extremely problematic</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Coastal States</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Hurricane/wind claims heavily scrutinized</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #f59e0b;">High</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Wildfire and earthquake claims major factors</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Midwest</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><span style="color: #eab308;">Moderate</span></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Hail/wind claims common, less impactful</td>
      </tr>
    </table>
    
    <h3>How Long Do Claims Impact Insurance?</h3>
    <p>Timeline for claims impact:</p>
    <ul>
      <li><strong>Years 0-3:</strong> Maximum premium impact (20-50% increase typical)</li>
      <li><strong>Years 3-5:</strong> Moderate impact (10-25% increase)</li>
      <li><strong>Years 5-7:</strong> Minimal impact (5-15% increase)</li>
      <li><strong>After 7 Years:</strong> Claim removed from CLUE, no direct impact (though insurer may keep internal records)</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'reportType',
        label: 'Report Type Needed',
        type: 'select',
        required: true,
        options: [
          { value: 'free', label: 'Free Personal Request (Mail Delivery)' },
          { value: 'agent', label: 'Through Real Estate Agent/Title Company' },
          { value: 'inspector', label: 'Through Home Inspector' },
        ],
        helpText: 'How you plan to obtain the CLUE report'
      },
      {
        name: 'currentPremium',
        label: 'Current Annual Insurance Premium',
        type: 'currency',
        required: true,
        placeholder: '2500',
        helpText: 'Your current annual homeowners insurance cost'
      },
      {
        name: 'claimsOnReport',
        label: 'Number of Claims on Property CLUE',
        type: 'select',
        required: true,
        options: [
          { value: '0', label: 'No Claims (Clean Report)' },
          { value: '1', label: '1 Claim' },
          { value: '2', label: '2 Claims' },
          { value: '3plus', label: '3+ Claims' },
        ],
        helpText: 'Claims history affects future insurability'
      },
      {
        name: 'claimType',
        label: 'Most Recent Claim Type',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Claims' },
          { value: 'water', label: 'Water Damage' },
          { value: 'fire', label: 'Fire/Smoke' },
          { value: 'theft', label: 'Theft/Vandalism' },
          { value: 'wind', label: 'Wind/Hurricane' },
          { value: 'mold', label: 'Mold/Fungus' },
        ],
        helpText: 'Type of claim affects premium impact'
      },
      {
        name: 'yearsS inceClaim',
        label: 'Years Since Most Recent Claim',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Claims' },
          { value: '0-2', label: '0-2 years ago' },
          { value: '3-5', label: '3-5 years ago' },
          { value: '5-7', label: '5-7 years ago' },
        ],
        helpText: 'Older claims have less impact on premiums'
      }
    ],
    results: [
      {
        name: 'reportCost',
        label: 'CLUE Report Cost',
        type: 'currency',
        helpText: 'Cost to obtain the CLUE report'
      },
      {
        name: 'premiumImpact',
        label: 'Estimated Annual Premium Impact',
        type: 'currency',
        helpText: 'How much claims may increase your insurance cost'
      },
      {
        name: 'totalImpactOver5Years',
        label: 'Total 5-Year Premium Impact',
        type: 'currency',
        helpText: 'Cumulative cost of claims on insurance over 5 years'
      },
      {
        name: 'recommendation',
        label: 'Recommendation',
        type: 'text',
        helpText: 'Guidance based on your CLUE report situation'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const reportType = inputs.reportType || 'free';
      const currentPremium = parseFloat(inputs.currentPremium) || 0;
      const claimsOnReport = inputs.claimsOnReport || '0';
      const claimType = inputs.claimType || 'none';
      const yearsSinceClaim = inputs.yearsSinceClaim || 'none';

      // Report cost
      let reportCost = 0;
      switch (reportType) {
        case 'free':
          reportCost = 0;
          break;
        case 'agent':
          reportCost = 35;
          break;
        case 'inspector':
          reportCost = 50;
          break;
      }

      // Premium impact calculation
      let impactPercentage = 0;

      // Base impact by claim type
      let claimMultiplier = 0;
      switch (claimType) {
        case 'none':
          claimMultiplier = 0;
          break;
        case 'water':
          claimMultiplier = 0.20; // 20%
          break;
        case 'fire':
          claimMultiplier = 0.22;
          break;
        case 'theft':
          claimMultiplier = 0.17;
          break;
        case 'wind':
          claimMultiplier = 0.25;
          break;
        case 'mold':
          claimMultiplier = 0.45; // 45% - very severe
          break;
      }

      // Adjust by number of claims
      let claimsMultiplier = 1.0;
      switch (claimsOnReport) {
        case '0':
          claimsMultiplier = 0;
          impactPercentage = 0;
          break;
        case '1':
          claimsMultiplier = 1.0;
          break;
        case '2':
          claimsMultiplier = 1.8;
          break;
        case '3plus':
          claimsMultiplier = 2.5;
          break;
      }

      // Reduce impact over time
      let timeMultiplier = 1.0;
      switch (yearsSinceClaim) {
        case 'none':
          timeMultiplier = 0;
          break;
        case '0-2':
          timeMultiplier = 1.0;
          break;
        case '3-5':
          timeMultiplier = 0.6;
          break;
        case '5-7':
          timeMultiplier = 0.3;
          break;
      }

      impactPercentage = claimMultiplier * claimsMultiplier * timeMultiplier;
      const premiumImpact = Math.round(currentPremium * impactPercentage);

      // Calculate 5-year impact (decreasing each year)
      const year1 = premiumImpact;
      const year2 = Math.round(premiumImpact * 0.9);
      const year3 = Math.round(premiumImpact * 0.7);
      const year4 = Math.round(premiumImpact * 0.5);
      const year5 = Math.round(premiumImpact * 0.3);
      const totalImpactOver5Years = year1 + year2 + year3 + year4 + year5;

      let recommendation = '';
      if (claimsOnReport === '0') {
        recommendation = 'Clean CLUE report - excellent insurability. Consider obtaining report before home purchase to verify.';
      } else if (claimsOnReport === '1' && yearsSinceClaim !== '0-2') {
        recommendation = 'Single older claim - minor impact. Shop around for competitive rates as claim ages.';
      } else if (claimsOnReport === '2') {
        recommendation = 'Two claims may significantly impact premiums. Avoid filing additional claims if possible.';
      } else if (claimsOnReport === '3plus' || claimType === 'mold') {
        recommendation = 'Multiple claims or mold claim - may face coverage denial. Consider surplus lines insurers or property improvements.';
      } else {
        recommendation = 'Review CLUE report carefully for errors. Recent claims will impact rates for 3-5 years.';
      }

      return {
        reportCost,
        premiumImpact,
        totalImpactOver5Years,
        recommendation
      };
    }
  }
};
