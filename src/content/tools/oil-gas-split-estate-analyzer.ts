import { CalculatorContent } from '@/types';

export const OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Oil & Gas Split Estate Analyzer',
  description: 'Analyze mineral rights ownership, calculate royalty values, and understand surface vs. subsurface rights for oil and gas properties',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'oil-gas-split-estate-analyzer',
  article: {
    title: "Understanding Oil & Gas Split Estate and Mineral Rights",
    content: `
    <h2>What is a Split Estate?</h2>
    <p>A split estate occurs when surface rights and mineral rights (subsurface) are owned by different parties. This is extremely common in oil and gas producing regions, where mineral rights may have been severed from surface ownership decades or centuries ago.</p>
    
    <h3>Surface Rights vs. Mineral Rights</h3>
    <ul>
      <li><strong>Surface Rights:</strong> Right to use and occupy the surface of land (buildings, farming, etc.)</li>
      <li><strong>Mineral Rights:</strong> Right to extract oil, gas, coal, metals, and other minerals</li>
      <li><strong>Dominant Estate:</strong> In most states, mineral rights are "dominant" and take precedence over surface rights</li>
      <li><strong>Accommodation Doctrine:</strong> Some states require mineral developers to reasonably accommodate surface use</li>
    </ul>
    
    <h3>Types of Mineral Interests</h3>
    
    <h4>1. Fee Simple Mineral Rights (100% Ownership)</h4>
    <ul>
      <li>Owner controls leasing decisions</li>
      <li>Receives all bonus payments and royalties</li>
      <li>Can be sold, inherited, or leased independently of surface</li>
      <li>Most valuable mineral interest</li>
    </ul>
    
    <h4>2. Royalty Interest</h4>
    <ul>
      <li>Right to receive share of production revenue</li>
      <li>No control over leasing or operations</li>
      <li>No obligation to pay drilling/operating costs</li>
      <li>Typical royalty: 12.5-25% of production value</li>
    </ul>
    
    <h4>3. Mineral Lease (Leasehold Interest)</h4>
    <ul>
      <li>Oil company's right to explore and produce</li>
      <li>Temporary (typically 3-10 year primary term)</li>
      <li>Continues as long as production occurs</li>
      <li>Mineral owner receives bonus payment and ongoing royalties</li>
    </ul>
    
    <h4>4. Working Interest</h4>
    <ul>
      <li>Responsibility to pay drilling and operating costs</li>
      <li>Receives larger share of production (75-87.5% typically)</li>
      <li>Bears all financial risk</li>
      <li>Oil companies hold working interests</li>
    </ul>
    
    <h4>5. Overriding Royalty Interest (ORRI)</h4>
    <ul>
      <li>Carved out of working interest</li>
      <li>Receives production revenue without costs</li>
      <li>Terminates when lease ends</li>
      <li>Common for landmen, geologists, deal finders</li>
    </ul>
    
    <h3>Oil and Gas Lease Components</h3>
    <p>Typical lease terms include:</p>
    <ul>
      <li><strong>Bonus Payment:</strong> Upfront payment per acre to sign lease ($100-$50,000/acre depending on location and potential)</li>
      <li><strong>Royalty Rate:</strong> Percentage of production value to mineral owner (1/8 to 1/4 typical)</li>
      <li><strong>Primary Term:</strong> Initial lease period (3-5 years common)</li>
      <li><strong>Delay Rental:</strong> Annual payment to delay drilling during primary term</li>
      <li><strong>Pugh Clause:</strong> Releases unleased portions when some lands held by production</li>
      <li><strong>Shut-in Royalty:</strong> Payment when well capable of producing but shut in</li>
    </ul>
    
    <h3>Royalty Payment Calculations</h3>
    <p>Example calculation for oil well:</p>
    <ul>
      <li><strong>Production:</strong> 100 barrels per day</li>
      <li><strong>Oil Price:</strong> $75 per barrel</li>
      <li><strong>Gross Revenue:</strong> $7,500/day or $225,000/month</li>
      <li><strong>Royalty Rate:</strong> 20% (1/5)</li>
      <li><strong>Mineral Owner's Share:</strong> $45,000/month</li>
      <li><strong>Deductions:</strong> Post-production costs may reduce payment (depends on lease)</li>
    </ul>
    
    <h3>State-Specific Mineral Rights Laws</h3>
    
    <h4>Texas</h4>
    <ul>
      <li>Mineral rights strongly dominant over surface</li>
      <li>Accommodation doctrine limited</li>
      <li>Surface owner must allow reasonable access</li>
      <li>Large volumes of mineral production - highly developed market</li>
    </ul>
    
    <h4>Oklahoma</h4>
    <ul>
      <li>Mineral rights dominant</li>
      <li>Extensive history of oil and gas development</li>
      <li>Complex title issues common (many fractional interests)</li>
    </ul>
    
    <h4>Pennsylvania</h4>
    <ul>
      <li>Strong mineral rights dominance</li>
      <li>Marcellus Shale development very active</li>
      <li>Coal vs. oil/gas rights often separated</li>
    </ul>
    
    <h4>North Dakota</h4>
    <ul>
      <li>Bakken Shale boom area</li>
      <li>Surface owner protections stronger than Texas</li>
      <li>Compensation required for surface damage</li>
    </ul>
    
    <h4>West Virginia, Ohio</h4>
    <ul>
      <li>Ancient deeds often severed minerals</li>
      <li>Many small fractional interests</li>
      <li>Utica and Marcellus Shale development</li>
    </ul>
    
    <h3>Surface Owner Rights and Protections</h3>
    <ul>
      <li><strong>Compensation:</strong> Payment for surface damages (varies by state)</li>
      <li><strong>Location Restrictions:</strong> Can't drill under houses or barns (typically)</li>
      <li><strong>Advance Notice:</strong> Required before entering property</li>
      <li><strong>Reclamation:</strong> Operator must restore surface after operations</li>
      <li><strong>Water Rights:</strong> Protection for water wells and supplies</li>
      <li><strong>Surface Use Agreement:</strong> Can negotiate additional protections beyond lease</li>
    </ul>
    
    <h3>Title Research and Due Diligence</h3>
    <p>Determining mineral ownership requires:</p>
    <ul>
      <li><strong>Chain of Title:</strong> Research back to original land patent or sovereign</li>
      <li><strong>Deed Review:</strong> Examine all conveyances for mineral reservations/exceptions</li>
      <li><strong>Probate Records:</strong> Inherited minerals often create complex fractional interests</li>
      <li><strong>Lease Records:</strong> Check for existing leases and their terms</li>
      <li><strong>Production Records:</strong> Verify if property producing and royalty ownership</li>
      <li><strong>Professional Help:</strong> Landman or attorney specializing in oil/gas title</li>
      <li><strong>Costs:</strong> $1,000-$10,000+ for comprehensive mineral title opinion</li>
    </ul>
    
    <h3>Common Issues and Disputes</h3>
    <ul>
      <li><strong>Fractional Interests:</strong> Mineral rights divided among dozens or hundreds of owners</li>
      <li><strong>Orphaned Minerals:</strong> Unknown or untraceable owners</li>
      <li><strong>Dormant Mineral Acts:</strong> Some states allow surface owner to reclaim abandoned minerals</li>
      <li><strong>Drainage:</strong> Neighboring wells producing from your minerals</li>
      <li><strong>Pooling/Unitization:</strong> Forced inclusion in drilling units</li>
      <li><strong>Surface Damage:</strong> Disputes over compensation and restoration</li>
    </ul>
    
    <h3>Tax Implications</h3>
    <ul>
      <li><strong>Bonus Payments:</strong> Ordinary income in year received</li>
      <li><strong>Royalty Income:</strong> Ordinary income, subject to self-employment tax</li>
      <li><strong>Depletion Allowance:</strong> Can deduct 15% of gross income (percentage depletion)</li>
      <li><strong>Property Taxes:</strong> Minerals assessed separately from surface in many states</li>
      <li><strong>Sale of Minerals:</strong> Capital gains if held over 1 year</li>
    </ul>
    
    <h3>Buying and Selling Mineral Rights</h3>
    <ul>
      <li><strong>Valuation Factors:</strong> Location, geology, production history, lease status</li>
      <li><strong>Producing Minerals:</strong> Valued at multiple of annual income (3-8x typical)</li>
      <li><strong>Unleased Minerals:</strong> Valued based on comparable leases and potential</li>
      <li><strong>Market:</strong> Active market with brokers, auction companies, and aggregators</li>
      <li><strong>Scams:</strong> Be wary of unsolicited lowball offers</li>
    </ul>
    
    <h3>Impact on Real Estate Transactions</h3>
    <ul>
      <li>Properties with severed minerals typically sell at discount (10-30%)</li>
      <li>Active drilling/production can affect property use and financing</li>
      <li>Lenders may require surface waiver or special insurance</li>
      <li>Full disclosure required - failure can void sale or create liability</li>
      <li>Buyers should specifically verify mineral rights status</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "ownership",
        label: "Mineral Rights Ownership",
        type: "select",
        options: [
          "I own 100% minerals (Fee Simple)",
          "I own fractional minerals (specify %)",
          "I own only royalty interest",
          "Minerals severed - I own surface only",
          "Unknown - Need to Research"
        ],
        defaultValue: "I own 100% minerals (Fee Simple)",
      },
      {
        name: "ownershipPercent",
        label: "Ownership Percentage (if fractional)",
        type: "number",
        placeholder: "50",
        defaultValue: "100",
      },
      {
        name: "acres",
        label: "Total Acres",
        type: "number",
        placeholder: "160",
        defaultValue: "160",
      },
      {
        name: "leaseStatus",
        label: "Lease Status",
        type: "select",
        options: [
          "Currently Leased and Producing",
          "Leased but Not Yet Producing",
          "Unleased",
          "Lease Expired",
          "Unknown"
        ],
        defaultValue: "Unleased",
      },
      {
        name: "royaltyRate",
        label: "Royalty Rate (if leased)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "monthlyProduction",
        label: "Monthly Production Value (if producing)",
        type: "number",
        placeholder: "50000",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Mineral Interest Type", isCurrency: false },
      { label: "Your Net Mineral Acres", isCurrency: false },
      { label: "Estimated Monthly Royalty", isCurrency: true },
      { label: "Estimated Mineral Value", isCurrency: true },
      { label: "Recommendations", isCurrency: false },
    ],
    calculate: (data: any) => {
      const ownership = data.ownership || "I own 100% minerals (Fee Simple)";
      const ownershipPercent = Number(data.ownershipPercent) || 100;
      const acres = Number(data.acres) || 160;
      const leaseStatus = data.leaseStatus || "Unleased";
      const royaltyRate = Number(data.royaltyRate) || 20;
      const monthlyProduction = Number(data.monthlyProduction) || 0;
      
      let interestType = "";
      let netMineralAcres = 0;
      let monthlyRoyalty = 0;
      let estimatedValue = 0;
      let recommendations = "";
      
      // Calculate net mineral acres
      netMineralAcres = acres * (ownershipPercent / 100);
      
      // Determine interest type
      if (ownership.includes("100% minerals")) {
        interestType = "🌟 Fee Simple Mineral Owner - Full control and benefits";
      } else if (ownership.includes("fractional")) {
        interestType = `📊 Fractional Mineral Owner - ${ownershipPercent}% interest`;
      } else if (ownership.includes("royalty interest")) {
        interestType = "💰 Royalty Interest Only - No leasing control, receives production income";
      } else if (ownership.includes("surface only")) {
        interestType = "⚠️ Surface Only - Minerals severed (do not own subsurface rights)";
      } else {
        interestType = "❓ Unknown - Title research needed to determine mineral ownership";
      }
      
      // Calculate royalty and value based on lease status
      if (leaseStatus === "Currently Leased and Producing") {
        monthlyRoyalty = monthlyProduction * (royaltyRate / 100) * (ownershipPercent / 100);
        // Producing minerals valued at 4-6x annual income (using 5x)
        const annualIncome = monthlyRoyalty * 12;
        estimatedValue = annualIncome * 5;
        recommendations = `Active production generating $${monthlyRoyalty.toFixed(0)}/month. Monitor royalty statements carefully. Verify deductions are proper. Consider tax planning for royalty income. Value based on 5x annual production.`;
      } else if (leaseStatus === "Leased but Not Yet Producing") {
        // No royalty yet, but bonus payment received
        // Value based on comparable leases in area ($1,000-$5,000/acre estimate)
        estimatedValue = netMineralAcres * 2000; // Conservative estimate
        monthlyRoyalty = 0;
        recommendations = `Minerals leased but not producing. Monitor for drilling activity. Ensure operator complies with lease terms. If no drilling by end of primary term, minerals revert to you. Current value estimate based on lease potential.`;
      } else if (leaseStatus === "Unleased") {
        // Value based on potential ($500-$3,000/acre depending on location)
        estimatedValue = netMineralAcres * 1000; // Very conservative
        monthlyRoyalty = 0;
        
        if (ownership.includes("100% minerals")) {
          recommendations = `Unleased minerals with full control. Consider: 1) Contacting oil/gas companies for lease offers, 2) Hiring landman to market minerals, 3) Attending mineral auctions, 4) Joining mineral owners association. Value estimate conservative pending geological assessment.`;
        } else if (ownership.includes("fractional")) {
          recommendations = `Fractional unleased minerals. Limited individual control over leasing. Monitor for lease offers from other co-owners. Value estimate reflects ${ownershipPercent}% ownership.`;
        } else if (ownership.includes("surface only")) {
          estimatedValue = 0;
          recommendations = `You own surface only - someone else owns the minerals. Be prepared for potential drilling/production on your land. Negotiate surface use agreement for compensation and protections. Cannot receive mineral royalties.`;
        } else {
          recommendations = `Ownership status unknown. URGENT: Commission mineral title search with qualified oil/gas attorney or landman to determine your rights.`;
        }
      } else if (leaseStatus === "Lease Expired") {
        estimatedValue = netMineralAcres * 1200;
        monthlyRoyalty = 0;
        recommendations = `Lease expired - minerals reverted to you. Good position to negotiate new lease at current market rates. Contact multiple companies for competitive offers. Consider higher royalty rates (18.75-25%) in new lease.`;
      } else {
        estimatedValue = netMineralAcres * 800;
        recommendations = `Unknown lease status. Research county records for recorded leases. Contact operators if pipelines/wells visible. Verify you're receiving royalties if production occurring.`;
      }

      return [
        { label: "Mineral Interest Type", value: interestType, isCurrency: false },
        { label: "Your Net Mineral Acres", value: `${netMineralAcres.toFixed(2)} acres`, isCurrency: false },
        { label: "Estimated Monthly Royalty", value: monthlyRoyalty, isCurrency: true },
        { label: "Estimated Mineral Value", value: estimatedValue, isCurrency: true },
        { label: "Recommendations", value: recommendations, isCurrency: false },
      ];
    },
  },
};
