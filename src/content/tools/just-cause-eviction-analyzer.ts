import { CalculatorContent } from '@/types';

export const JUST_CAUSE_EVICTION_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Just Cause Eviction Analyzer',
  description: 'Determine if you have legal grounds to evict a tenant under just cause eviction laws',
  icon: 'Icon',
  category: 'Rental Property',
  slug: 'just-cause-eviction-analyzer',
  metaTitle: 'Just Cause Eviction Analyzer | Legal Eviction Grounds',
  metaDescription: 'Determine if you have legal grounds to evict under just cause laws. Check valid eviction reasons, notice requirements, and relocation assistance by state.',
  metaKeywords: 'just cause eviction, eviction laws, legal eviction grounds, tenant eviction rights, no-fault eviction, eviction notice requirements, relocation assistance, California AB 1482, landlord eviction, eviction analyzer',
  article: {
    title: "Understanding Just Cause Eviction Laws",
    content: `
    <h2>Understanding Just Cause Eviction Laws</h2>
    <p>"Just cause" eviction laws prevent landlords from evicting tenants without a valid legal reason. These laws protect tenants from arbitrary or retaliatory evictions and promote housing stability.</p>
    
    <h3>What Are Just Cause Eviction Laws?</h3>
    <p>Just cause laws require landlords to have a specific, legally recognized reason to evict a tenant. Simply wanting a tenant to leave or wanting to raise rent is not sufficient cause in jurisdictions with these protections.</p>
    
    <h3>Where Just Cause Laws Exist</h3>
    <ul>
      <li><strong>Statewide:</strong> California (AB 1482), Oregon, New Jersey, New Hampshire</li>
      <li><strong>Major Cities:</strong> Seattle, Portland, San Francisco, Los Angeles, Oakland, NYC (rent stabilized units), DC, Chicago (certain units)</li>
      <li><strong>Growing Trend:</strong> More cities and states are adopting just cause protections</li>
    </ul>
    
    <h3>At-Fault Just Causes (Tenant Wrongdoing)</h3>
    <p>Landlords can evict for tenant misconduct, including:</p>
    
    <h4>1. Non-Payment of Rent</h4>
    <ul>
      <li>Tenant fails to pay rent</li>
      <li>Must provide proper notice and opportunity to cure</li>
      <li>Pay-or-quit notices typically required (3-5 days)</li>
    </ul>
    
    <h4>2. Lease Violations</h4>
    <ul>
      <li>Unauthorized pets</li>
      <li>Unauthorized occupants</li>
      <li>Illegal subletting</li>
      <li>Smoking in non-smoking units</li>
      <li>Must provide cure-or-quit notice (typically 3-30 days)</li>
    </ul>
    
    <h4>3. Nuisance/Illegal Activity</h4>
    <ul>
      <li>Drug dealing or manufacturing</li>
      <li>Violence or threats to others</li>
      <li>Excessive noise after warnings</li>
      <li>Destruction of property</li>
      <li>Often allows immediate eviction (unconditional quit notice)</li>
    </ul>
    
    <h4>4. Refusal to Renew Lease</h4>
    <ul>
      <li>Tenant refuses to sign new lease on similar terms</li>
      <li>Must offer renewal at least 60-90 days before expiration</li>
    </ul>
    
    <h3>No-Fault Just Causes (No Tenant Wrongdoing)</h3>
    <p>Landlords can evict without tenant fault in limited circumstances:</p>
    
    <h4>1. Owner/Relative Move-In</h4>
    <ul>
      <li>Landlord or immediate family intends to occupy unit</li>
      <li>Typically requires 60-120 days notice</li>
      <li>May require relocation assistance ($1,000-$7,000+)</li>
      <li>Owner must actually move in (some laws require 1-3 years occupancy)</li>
      <li>Penalties for fraudulent move-ins can be severe</li>
    </ul>
    
    <h4>2. Ellis Act (California)</h4>
    <ul>
      <li>Landlord exits rental business entirely</li>
      <li>All units must be removed from rental market</li>
      <li>Requires 120 days notice (1 year for seniors/disabled)</li>
      <li>Substantial relocation assistance required</li>
      <li>Cannot re-rent units for 5-10 years</li>
    </ul>
    
    <h4>3. Substantial Renovation/Demolition</h4>
    <ul>
      <li>Major renovations required by building codes or law</li>
      <li>Unit must be uninhabitable during work</li>
      <li>May require permits and relocation assistance</li>
      <li>Right to return at same rent (in some jurisdictions)</li>
    </ul>
    
    <h4>4. Condo Conversion</h4>
    <ul>
      <li>Building being converted to condos for sale</li>
      <li>Extended notice periods (120-180 days)</li>
      <li>Must offer tenants right of first refusal to purchase</li>
    </ul>
    
    <h3>Relocation Assistance Requirements</h3>
    <p>No-fault evictions often require landlords to pay relocation assistance:</p>
    <ul>
      <li><strong>California:</strong> Typically 2-3 months rent (varies by city)</li>
      <li><strong>San Francisco:</strong> $7,000+ per tenant</li>
      <li><strong>Los Angeles:</strong> $8,000-$20,000+ depending on bedroom count</li>
      <li><strong>Oakland:</strong> $6,000+ per unit</li>
      <li><strong>Seattle:</strong> $3,000-$4,500 per household</li>
    </ul>
    
    <h3>Invalid Reasons for Eviction</h3>
    <p>The following are generally NOT valid just causes:</p>
    <ul>
      <li>Month-to-month lease ending (unless no-fault cause exists)</li>
      <li>Wanting higher-paying tenants</li>
      <li>Retaliation for complaints or exercising tenant rights</li>
      <li>Discrimination based on protected class</li>
      <li>Personal dislike of tenant</li>
      <li>Tenant filed complaint with housing authority</li>
    </ul>
    
    <h3>Exemptions from Just Cause Laws</h3>
    <p>Some properties may be exempt:</p>
    <ul>
      <li>New construction (built within last 10-15 years, varies by jurisdiction)</li>
      <li>Single-family homes (sometimes)</li>
      <li>Owner-occupied duplexes/triplexes (sometimes)</li>
      <li>Properties covered by separate affordable housing agreements</li>
    </ul>
    
    <h3>Eviction Process with Just Cause</h3>
    <ol>
      <li><strong>Proper Notice:</strong> Serve appropriate notice type (pay-or-quit, cure-or-quit, 60/90/120-day notice)</li>
      <li><strong>Wait Period:</strong> Allow cure period to expire</li>
      <li><strong>File Unlawful Detainer:</strong> File eviction lawsuit in court</li>
      <li><strong>Court Hearing:</strong> Prove just cause exists</li>
      <li><strong>Judgment & Writ:</strong> Obtain court order for eviction</li>
      <li><strong>Sheriff Eviction:</strong> Only sheriff can physically remove tenants</li>
    </ol>
    
    <h3>Penalties for Wrongful Eviction</h3>
    <ul>
      <li>Tenant can sue for wrongful eviction</li>
      <li>Damages: Moving costs, rent differential, emotional distress</li>
      <li>Attorneys fees (often tenant's fees paid by landlord)</li>
      <li>Punitive damages for egregious violations</li>
      <li>Housing authority fines and penalties</li>
    </ul>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Document all lease violations thoroughly</li>
      <li>Provide proper written notices (never verbal)</li>
      <li>Consult with landlord-tenant attorney</li>
      <li>Understand local ordinances (often stricter than state law)</li>
      <li>Calculate relocation costs before proceeding</li>
      <li>Never use "self-help" evictions (changing locks, shutting off utilities)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          { value: "California", label: "California" },
          { value: "Oregon", label: "Oregon" },
          { value: "New Jersey", label: "New Jersey" },
          { value: "New York", label: "New York" },
          { value: "Washington", label: "Washington" },
          { value: "Other", label: "Other" }
        ],
        defaultValue: "California",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "San Francisco",
        defaultValue: "",
      },
      {
        name: "buildingAge",
        label: "Year Built",
        type: "number",
        placeholder: "1990",
        defaultValue: "1990",
      },
      {
        name: "evictionReason",
        label: "Eviction Reason",
        type: "select",
        options: [
          { value: "Non-payment of rent", label: "Non-payment of rent" },
          { value: "Lease violation", label: "Lease violation" },
          { value: "Nuisance/illegal activity", label: "Nuisance/illegal activity" },
          { value: "Owner move-in", label: "Owner move-in" },
          { value: "Substantial renovation", label: "Substantial renovation" },
          { value: "Month-to-month lease ending", label: "Month-to-month lease ending" },
          { value: "Want different tenant", label: "Want different tenant" }
        ],
        defaultValue: "Non-payment of rent",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "tenantAge",
        label: "Tenant Age",
        type: "select",
        options: [
          { value: "Under 62", label: "Under 62" },
          { value: "62 or older", label: "62 or older" }
        ],
        defaultValue: "Under 62",
      },
    ],
    results: [
      { label: "Just Cause Law Applies?", isCurrency: false },
      { label: "Reason Qualifies as Just Cause?", isCurrency: false },
      { label: "Required Notice Period", isCurrency: false },
      { label: "Relocation Assistance Required?", isCurrency: false },
      { label: "Estimated Relocation Amount", isCurrency: true },
      { label: "Can Proceed with Eviction?", isCurrency: false },
    ],
    calculate: (data: any) => {
      const state = data.state || "California";
      const city = (data.city || "").toLowerCase();
      const buildingAge = Number(data.buildingAge) || 1990;
      const evictionReason = data.evictionReason || "Non-payment of rent";
      const monthlyRent = Number(data.monthlyRent) || 0;
      const isSenior = data.tenantAge === "62 or older";

      let justCauseApplies = false;
      let reasonQualifies = false;
      let noticePeriod = "3 days";
      let relocationRequired = false;
      let relocationAmount = 0;
      let canProceed = false;

      // Determine if just cause law applies
      if (state === "California" && buildingAge <= 2005) {
        justCauseApplies = true;
      } else if (state === "Oregon" && buildingAge <= 2007) {
        justCauseApplies = true;
      } else if (state === "New Jersey" || state === "New York") {
        justCauseApplies = true;
      }

      // Check if reason qualifies
      const validAtFaultReasons = [
        "Non-payment of rent",
        "Lease violation",
        "Nuisance/illegal activity"
      ];

      const validNoFaultReasons = [
        "Owner move-in",
        "Substantial renovation"
      ];

      if (validAtFaultReasons.includes(evictionReason)) {
        reasonQualifies = true;
        if (evictionReason === "Non-payment of rent") {
          noticePeriod = "3-5 days (pay or quit)";
        } else if (evictionReason === "Lease violation") {
          noticePeriod = "3-30 days (cure or quit)";
        } else {
          noticePeriod = "3 days (unconditional quit)";
        }
        relocationRequired = false;
        canProceed = true;
      } else if (validNoFaultReasons.includes(evictionReason)) {
        if (justCauseApplies) {
          reasonQualifies = true;
          noticePeriod = isSenior ? "120 days" : "60-90 days";
          relocationRequired = true;
          
          // Estimate relocation assistance
          if (city.includes("san francisco")) {
            relocationAmount = 7000;
          } else if (city.includes("los angeles")) {
            relocationAmount = 8000;
          } else if (city.includes("oakland")) {
            relocationAmount = 6000;
          } else if (city.includes("seattle")) {
            relocationAmount = 3500;
          } else if (state === "California") {
            relocationAmount = monthlyRent * 2; // 2 months rent typical
          } else {
            relocationAmount = monthlyRent;
          }
          canProceed = true;
        } else {
          reasonQualifies = true; // Can evict without just cause restriction
          noticePeriod = "30-60 days";
          canProceed = true;
        }
      } else {
        // Invalid reasons
        reasonQualifies = false;
        noticePeriod = "N/A";
        canProceed = false;
      }

      const appliesText = justCauseApplies 
        ? "✅ Yes - Just cause required" 
        : "❌ No - No just cause law applies";

      const qualifiesText = reasonQualifies 
        ? "✅ Yes - Valid just cause" 
        : "❌ No - Not a valid just cause";

      const canProceedText = canProceed 
        ? "✅ Yes - May proceed with eviction" 
        : "❌ No - Cannot evict for this reason";

      const relocationRequiredText = relocationRequired 
        ? "✅ Yes - Must pay relocation assistance" 
        : "❌ No";

      return [
        { label: "Just Cause Law Applies?", value: appliesText, isCurrency: false },
        { label: "Reason Qualifies as Just Cause?", value: qualifiesText, isCurrency: false },
        { label: "Required Notice Period", value: noticePeriod, isCurrency: false },
        { label: "Relocation Assistance Required?", value: relocationRequiredText, isCurrency: false },
        { label: "Estimated Relocation Amount", value: relocationAmount.toFixed(2), isCurrency: true },
        { label: "Can Proceed with Eviction?", value: canProceedText, isCurrency: false },
      ];
    },
  },
};
