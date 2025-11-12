import { CalculatorContent } from "@/types";

export const vaLoanCoeChecker: CalculatorContent = {
  title: "VA Loan Certificate of Eligibility (COE) Checker",
  description:
    "Check your VA loan eligibility and learn how to obtain your Certificate of Eligibility for VA home loan benefits.",
  icon: "Icon",
  category: "Calculators",
  slug: "va-loan-coe-checker",
  metaTitle: "VA Loan COE Checker - Certificate of Eligibility Requirements",
  metaDescription: "Check VA loan Certificate of Eligibility requirements and eligibility status. Learn how to get your VA COE online instantly through eBenefits. Verify your VA home loan benefit eligibility for veterans, active duty, and spouses.",
  article: {
    title: "Complete Guide to VA Loan Certificate of Eligibility (COE)",
    content: `
      <h2>What is a VA Loan Certificate of Eligibility?</h2>
      <p>A Certificate of Eligibility (COE) is an official document from the Department of Veterans Affairs that confirms you meet the basic service requirements for a VA loan. This certificate shows lenders that you qualify for the VA's guaranty on your home loan.</p>

      <h2>Who is Eligible for a VA Loan COE?</h2>
      <h3>Veterans</h3>
      <p>You may be eligible if you served:</p>
      <ul>
        <li><strong>World War II:</strong> 90 days of active service between 9/16/1940-7/25/1947</li>
        <li><strong>Korean War:</strong> 90 days of active service between 6/27/1950-1/31/1955</li>
        <li><strong>Vietnam War:</strong> 90 days of active service between 8/5/1964-5/7/1975</li>
        <li><strong>Gulf War:</strong> 24 months continuous active duty (or full period called) after 9/7/1980 (enlisted) or 10/16/1981 (officer)</li>
        <li><strong>Post-9/11:</strong> 90 consecutive days of active service after 9/10/2001</li>
      </ul>

      <h3>Active Duty Service Members</h3>
      <ul>
        <li>90 consecutive days of active service (you can apply before discharge)</li>
        <li>181 days for peacetime service</li>
      </ul>

      <h3>National Guard and Reservists</h3>
      <ul>
        <li>6 years of service in the Selected Reserve or National Guard</li>
        <li>90 days of active duty service (including training)</li>
        <li>Discharged honorably</li>
      </ul>

      <h3>Surviving Spouses</h3>
      <p>May be eligible if:</p>
      <ul>
        <li>Spouse died on active duty or from service-connected disability</li>
        <li>You have not remarried (or remarried after age 57 and after 12/16/2003)</li>
        <li>Spouse was MIA or POW for at least 90 days</li>
      </ul>

      <h2>Discharge Requirements</h2>
      <p>You must have been discharged under conditions other than dishonorable. Acceptable discharge characterizations include:</p>
      <ul>
        <li>Honorable</li>
        <li>General</li>
        <li>Under honorable conditions</li>
        <li>Medical discharge</li>
        <li>Hardship discharge</li>
      </ul>

      <p>Disqualifying discharges:</p>
      <ul>
        <li>Dishonorable</li>
        <li>Bad conduct (in some cases)</li>
      </ul>

      <h2>How to Get Your COE</h2>
      <h3>Method 1: Online Through eBenefits (Fastest)</h3>
      <p>Most service members and veterans can get their COE instantly online:</p>
      <ol>
        <li>Visit eBenefits.va.gov or VA.gov</li>
        <li>Sign in with your DS Logon, My HealtheVet, or ID.me account</li>
        <li>Go to "Manage Benefits" → "VA Home Loan Certificate of Eligibility"</li>
        <li>Follow the prompts to generate your COE</li>
        <li>Download and print your certificate instantly</li>
      </ol>

      <h3>Method 2: Through Your Lender (Easiest)</h3>
      <p>VA-approved lenders can obtain your COE electronically through the VA's WebLGY system in minutes. Simply provide:</p>
      <ul>
        <li>Your social security number</li>
        <li>Date of birth</li>
        <li>Permission to pull your COE</li>
      </ul>

      <h3>Method 3: Mail Application (Slowest)</h3>
      <p>Complete VA Form 26-1880 and mail with documents to:</p>
      <p>Department of Veterans Affairs<br/>
      Eligibility Center<br/>
      P.O. Box 20729<br/>
      Winston-Salem, NC 27120</p>

      <p>Processing time: 2-3 weeks</p>

      <h2>Required Documents for COE</h2>
      <h3>For Veterans</h3>
      <ul>
        <li>DD Form 214 (Member 4 Copy) showing character of discharge</li>
        <li>All DD-214s if you served multiple periods</li>
      </ul>

      <h3>For Active Duty</h3>
      <ul>
        <li>Statement of Service signed by your adjutant, personnel officer, or commander</li>
        <li>Must show: entry date, current duty station, periods of time lost</li>
      </ul>

      <h3>For National Guard/Reserves</h3>
      <ul>
        <li>NGB Form 22 (Report of Separation and Record of Service)</li>
        <li>Or DD Form 214 if you had active duty service</li>
      </ul>

      <h3>For Surviving Spouses</h3>
      <ul>
        <li>Veteran's DD-214</li>
        <li>Marriage certificate</li>
        <li>Death certificate</li>
        <li>VA Form 26-1817 (if applicable)</li>
      </ul>

      <h2>Understanding Your COE</h2>
      <p>Your COE shows:</p>
      <ul>
        <li><strong>Available Entitlement:</strong> How much guarantee you have left</li>
        <li><strong>Prior VA Loan Use:</strong> History of previous VA loans</li>
        <li><strong>Eligibility Status:</strong> Confirms you meet service requirements</li>
        <li><strong>Character of Service:</strong> Your discharge status</li>
      </ul>

      <h2>VA Entitlement Amounts (2024)</h2>
      <ul>
        <li><strong>Basic Entitlement:</strong> $36,000</li>
        <li><strong>Bonus Entitlement:</strong> Up to $136,975 (varies by county)</li>
        <li><strong>Total Available:</strong> Usually allows up to $726,200 with $0 down</li>
        <li><strong>High-Cost Counties:</strong> Limits can be higher</li>
      </ul>

      <h2>Common COE Issues and Solutions</h2>
      <h3>Issue: Can't Access eBenefits</h3>
      <p><strong>Solution:</strong> Create an account on VA.gov or ID.me first. May take 1-2 days to link records.</p>

      <h3>Issue: Records Not Found Online</h3>
      <p><strong>Solution:</strong> Apply by mail with DD-214. Older service records may not be digitized.</p>

      <h3>Issue: Shows Zero Entitlement</h3>
      <p><strong>Solution:</strong> May have existing VA loan. Contact VA to restore entitlement if prior loan paid off.</p>

      <h3>Issue: Discharge Status Unclear</h3>
      <p><strong>Solution:</strong> Request Character of Discharge determination from VA Regional Office.</p>

      <h2>Restoring Your Entitlement</h2>
      <p>You can restore your VA loan entitlement if:</p>
      <ul>
        <li>You've paid off your previous VA loan and sold the property</li>
        <li>You're refinancing your current VA loan with an IRRRL</li>
        <li>Another eligible veteran assumes your VA loan</li>
      </ul>

      <p>To restore: Apply through eBenefits or submit VA Form 26-1880 with proof of loan payoff and property sale.</p>

      <h2>Using Your COE</h2>
      <p>Once you have your COE:</p>
      <ol>
        <li>Provide it to your VA-approved lender</li>
        <li>Lender verifies your entitlement amount</li>
        <li>Get pre-approved for your VA loan</li>
        <li>Start house hunting with your pre-approval letter</li>
      </ol>

      <h2>COE vs. Pre-Approval</h2>
      <p><strong>COE:</strong> Confirms VA benefit eligibility only (doesn't mean you're approved for a loan)</p>
      <p><strong>Pre-Approval:</strong> Lender review of income, credit, and debt to determine loan amount</p>
      <p>You need both to purchase with a VA loan!</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Do I need my COE before shopping for homes?</h3>
      <p>Not required, but helpful. Lenders can pull it quickly, but having it ready speeds up the process.</p>

      <h3>How long is the COE valid?</h3>
      <p>Your COE doesn't expire. However, you'll need to provide current financial information to lenders for each loan.</p>

      <h3>Can I use my VA loan benefit multiple times?</h3>
      <p>Yes! You can use it repeatedly throughout your lifetime, as long as you have available entitlement.</p>

      <h3>What if I was discharged for medical reasons?</h3>
      <p>Medical discharges typically qualify if the disability was not due to misconduct.</p>

      <h2>How to Use This Tool</h2>
      <p>Answer questions about your military service, discharge status, and service dates. The tool assesses your likely eligibility for a VA COE and provides guidance on how to apply based on your service category. It also explains your next steps and estimated timeline for obtaining your COE.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "serviceType",
        label: "Service Type",
        type: "select",
        options: [
          { value: "veteran", label: "Veteran (Discharged)" },
          { value: "active", label: "Active Duty" },
          { value: "guard", label: "National Guard/Reserves" },
          { value: "spouse", label: "Surviving Spouse" },
        ],
        defaultValue: "veteran",
      },
      {
        name: "serviceDays",
        label: "Days of Active Service",
        type: "number",
        defaultValue: "730",
      },
      {
        name: "dischargeStatus",
        label: "Discharge Status",
        type: "select",
        options: [
          { value: "honorable", label: "Honorable" },
          { value: "general", label: "General/Under Honorable Conditions" },
          { value: "medical", label: "Medical Discharge" },
          { value: "other", label: "Other Than Honorable" },
          { value: "dishonorable", label: "Dishonorable/Bad Conduct" },
          { value: "active", label: "Still Active (Not Discharged)" },
        ],
        defaultValue: "honorable",
      },
      {
        name: "serviceEra",
        label: "Service Era",
        type: "select",
        options: [
          { value: "post911", label: "Post-9/11 (after 9/10/2001)" },
          { value: "gulf", label: "Gulf War Era (1980s-2001)" },
          { value: "vietnam", label: "Vietnam Era" },
          { value: "korea", label: "Korean War" },
          { value: "wwii", label: "World War II" },
        ],
        defaultValue: "post911",
      },
      {
        name: "hasDD214",
        label: "Do you have your DD-214?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "unsure", label: "Not Sure" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [
      {
        label: "Eligibility Status",
        isCurrency: false,
      },
      {
        label: "Service Requirement Met?",
        isCurrency: false,
      },
      {
        label: "Discharge Requirement Met?",
        isCurrency: false,
      },
      {
        label: "Recommended Application Method",
        isCurrency: false,
      },
      {
        label: "Estimated Processing Time",
        isCurrency: false,
      },
      {
        label: "Required Documents",
        isCurrency: false,
      },
      {
        label: "Next Steps",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const serviceType = values.serviceType;
      const serviceDays = parseInt(values.serviceDays);
      const dischargeStatus = values.dischargeStatus;
      const serviceEra = values.serviceEra;
      const hasDD214 = values.hasDD214;

      let eligibilityStatus = "";
      let serviceReqMet = "";
      let dischargeReqMet = "";
      let applicationMethod = "";
      let processingTime = "";
      let requiredDocs = "";
      let nextSteps = "";

      // Check discharge requirement
      if (dischargeStatus === "dishonorable") {
        dischargeReqMet = "❌ Not Met - Dishonorable discharge disqualifies";
        eligibilityStatus = "❌ NOT ELIGIBLE - Dishonorable discharge";
      } else if (dischargeStatus === "active") {
        dischargeReqMet = "✅ N/A - Currently Active Duty";
      } else if (["honorable", "general", "medical"].includes(dischargeStatus)) {
        dischargeReqMet = "✅ Met - Acceptable discharge status";
      } else {
        dischargeReqMet = "⚠️ Uncertain - May need character of discharge determination";
      }

      // Check service requirement
      let minDaysRequired = 90;
      if (serviceEra === "gulf" && serviceType === "veteran") {
        minDaysRequired = 730; // 24 months
      } else if (serviceType === "guard") {
        minDaysRequired = 2190; // 6 years
      }

      if (serviceDays >= minDaysRequired || serviceType === "spouse") {
        serviceReqMet = `✅ Met - ${serviceDays} days exceeds minimum ${minDaysRequired} days`;
      } else {
        serviceReqMet = `❌ Not Met - Need ${minDaysRequired} days, have ${serviceDays} days`;
      }

      // Determine overall eligibility
      if (dischargeStatus !== "dishonorable" && 
          (serviceDays >= minDaysRequired || serviceType === "spouse")) {
        eligibilityStatus = "✅ LIKELY ELIGIBLE for VA Loan COE";

        // Application method
        if (hasDD214 === "yes" && serviceType !== "active") {
          applicationMethod = "Online via eBenefits (FASTEST - instant)";
          processingTime = "Instant - Download immediately";
        } else if (serviceType === "active") {
          applicationMethod = "Through your lender or commanding officer";
          processingTime = "1-3 business days";
        } else {
          applicationMethod = "By mail with VA Form 26-1880";
          processingTime = "2-3 weeks";
        }

        // Required documents
        if (serviceType === "veteran") {
          requiredDocs = "DD Form 214 (Member 4 Copy)";
        } else if (serviceType === "active") {
          requiredDocs = "Statement of Service from commanding officer";
        } else if (serviceType === "guard") {
          requiredDocs = "NGB Form 22 or DD-214";
        } else {
          requiredDocs = "Veteran's DD-214, marriage certificate, death certificate";
        }

        // Next steps
        if (hasDD214 === "yes" && serviceType !== "active") {
          nextSteps = "1. Visit eBenefits.va.gov and create account. 2. Navigate to Home Loan COE section. 3. Download your COE instantly. 4. Provide to VA lender to start loan process.";
        } else if (serviceType === "active") {
          nextSteps = "1. Request Statement of Service from your unit. 2. Provide to VA-approved lender. 3. Lender can pull COE electronically. 4. Get pre-approved for your loan amount.";
        } else {
          nextSteps = `1. Obtain ${requiredDocs}. 2. Complete VA Form 26-1880. 3. Mail to VA Eligibility Center. 4. Wait 2-3 weeks for COE by mail.`;
        }
      } else {
        eligibilityStatus = "❌ NOT ELIGIBLE or Uncertain - See requirements";
        applicationMethod = "Contact VA Regional Office for determination";
        processingTime = "Varies - May need appeal or waiver";
        requiredDocs = "All service records for review";
        nextSteps = "Contact VA at 1-800-827-1000 to discuss your service history and potential eligibility. You may need a character of discharge determination.";
      }

      return [
        {
          label: "Eligibility Status",
          value: eligibilityStatus,
          isCurrency: false,
        },
        {
          label: "Service Requirement Met?",
          value: serviceReqMet,
          isCurrency: false,
        },
        {
          label: "Discharge Requirement Met?",
          value: dischargeReqMet,
          isCurrency: false,
        },
        {
          label: "Recommended Application Method",
          value: applicationMethod,
          isCurrency: false,
        },
        {
          label: "Estimated Processing Time",
          value: processingTime,
          isCurrency: false,
        },
        {
          label: "Required Documents",
          value: requiredDocs,
          isCurrency: false,
        },
        {
          label: "Next Steps",
          value: nextSteps,
          isCurrency: false,
        },
      ];
    },
  },
};
