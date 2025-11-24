import { CalculatorContent } from '@/types';

export const RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Right of First Refusal (ROFR) Calculator',
  description: 'Analyze the value and costs of right of first refusal clauses in real estate transactions',
  icon: 'Icon',
  category: 'Legal & Contracts',
  slug: 'right-of-first-refusal-calculator',
  article: {
    title: "Understanding Right of First Refusal in Real Estate",
    content: `
    <h2>What is Right of First Refusal (ROFR)?</h2>
    <p>A Right of First Refusal (ROFR) is a contractual right that gives a party the opportunity to enter into a business transaction with the owner of an asset before the owner can enter into that transaction with a third party. In real estate, this means you get the first chance to buy a property if the owner decides to sell.</p>
    
    <h3>Common ROFR Scenarios in Real Estate</h3>
    <ul>
      <li><strong>Tenant ROFR:</strong> Commercial or residential tenant has first right to buy if landlord sells</li>
      <li><strong>Co-owner ROFR:</strong> Business partners or family co-owners can buy out other owners first</li>
      <li><strong>Neighbor ROFR:</strong> Adjacent property owner gets first opportunity (common in farm/ranch land)</li>
      <li><strong>HOA/Condo ROFR:</strong> Association has right to purchase units before they're sold to outsiders</li>
      <li><strong>Developer ROFR:</strong> Developer retains right to buy back property under certain conditions</li>
      <li><strong>Government ROFR:</strong> Municipalities may have ROFR on certain properties (historic, conservation)</li>
    </ul>
    
    <h3>How ROFR Works: The Process</h3>
    <p><strong>Step 1:</strong> Owner receives a bona fide offer from a third-party buyer</p>
    <p><strong>Step 2:</strong> Owner must notify ROFR holder of the offer terms</p>
    <p><strong>Step 3:</strong> ROFR holder has a specified period (typically 30-90 days) to match the offer</p>
    <p><strong>Step 4:</strong> If ROFR holder matches terms, they get the property; if not, owner can sell to third party</p>
    <p><strong>Step 5:</strong> If owner doesn't sell to third party, process repeats with next offer</p>
    
    <h3>Key Terms in ROFR Agreements</h3>
    <ul>
      <li><strong>Notice Period:</strong> How long owner must wait after notifying ROFR holder (10-30 days typical)</li>
      <li><strong>Response Period:</strong> How long ROFR holder has to decide (30-90 days typical)</li>
      <li><strong>Matching Terms:</strong> Must ROFR holder match exact terms or just price?</li>
      <li><strong>Duration:</strong> How long does the ROFR last? (Can be perpetual or time-limited)</li>
      <li><strong>Triggering Events:</strong> What actions activate the ROFR? (Sale, transfer, lease, etc.)</li>
      <li><strong>Transferability:</strong> Can ROFR be assigned to another party?</li>
    </ul>
    
    <h3>Value of Holding a ROFR</h3>
    <p><strong>For Buyers (ROFR Holders):</strong></p>
    <ul>
      <li>✓ Guaranteed opportunity to acquire property</li>
      <li>✓ Protection against losing property to competitors</li>
      <li>✓ Time to arrange financing without rushing</li>
      <li>✓ Knowledge of market price through third-party offers</li>
      <li>✓ Strategic control over adjacent/related properties</li>
    </ul>
    
    <p><strong>For Sellers (Property Owners):</strong></p>
    <ul>
      <li>❌ Complicates sales process (buyers may be deterred)</li>
      <li>❌ Delays closing (waiting periods)</li>
      <li>❌ May reduce property value (limited buyer pool)</li>
      <li>❌ Could lose motivated buyers during ROFR period</li>
      <li>❌ Uncertainty about whether sale will proceed</li>
    </ul>
    
    <h3>Cost Impact of ROFR</h3>
    <p><strong>Reduced Property Value:</strong> Properties with ROFR typically sell for less</p>
    <ul>
      <li>Discount range: 5-20% below market value</li>
      <li>Depends on strength and duration of ROFR</li>
      <li>Perpetual ROFR = larger discount</li>
      <li>Short-term ROFR (1-5 years) = minimal discount</li>
    </ul>
    
    <p><strong>Transaction Costs:</strong> Additional expenses from ROFR</p>
    <ul>
      <li>Legal fees for ROFR compliance ($500-$3,000)</li>
      <li>Extended holding costs during waiting periods</li>
      <li>Lost opportunity if better offers come during ROFR exercise</li>
      <li>Potential litigation if ROFR disputed ($10,000-$100,000+)</li>
    </ul>
    
    <h3>ROFR vs. Right of First Offer (ROFO)</h3>
    <p><strong>ROFR:</strong> Triggered after owner receives outside offer (reactive)</p>
    <p><strong>ROFO:</strong> Owner must approach ROFO holder before marketing property (proactive)</p>
    <p>ROFO gives holder even more control but is more burdensome for owner</p>
    
    <h3>Commercial Lease ROFR Example</h3>
    <p>A restaurant tenant with 5 years remaining on lease negotiates ROFR. Building valued at $2M.</p>
    <ul>
      <li>Owner receives $2.1M offer from third party</li>
      <li>Tenant has 60 days to match $2.1M and same terms</li>
      <li>Tenant exercises ROFR, purchases building</li>
      <li>Benefit to tenant: Secures location, builds equity instead of paying rent</li>
    </ul>
    
    <h3>Negotiating ROFR Terms</h3>
    <p><strong>If You're the Seller (Granting ROFR):</strong></p>
    <ul>
      <li>• Limit duration (5-10 years max, not perpetual)</li>
      <li>• Keep response periods short (30 days or less)</li>
      <li>• Require exact matching of all terms, not just price</li>
      <li>• Exclude family transfers, estate planning moves</li>
      <li>• Include "use it or lose it" provisions</li>
    </ul>
    
    <p><strong>If You're the Buyer (Receiving ROFR):</strong></p>
    <ul>
      <li>• Request perpetual or very long duration</li>
      <li>• Negotiate longer response periods (90 days)</li>
      <li>• Allow for reasonable matching (not exact terms)</li>
      <li>• Make ROFR transferable to your assigns</li>
      <li>• Include broad triggering events (any ownership change)</li>
    </ul>
    
    <h3>When ROFR Makes Sense</h3>
    <p><strong>For Property Owners:</strong></p>
    <ul>
      <li>Part of employment agreement (employee relocation, company housing)</li>
      <li>Family property sales (keeping property in family)</li>
      <li>Required by local regulations (affordable housing, conservation)</li>
      <li>To secure better lease terms from tenant</li>
    </ul>
    
    <p><strong>For ROFR Holders:</strong></p>
    <ul>
      <li>Strategic adjacent property (expansion opportunity)</li>
      <li>Business location where you're a tenant</li>
      <li>Preserving family legacy property</li>
      <li>Competitive positioning (keeping out competitors)</li>
    </ul>
    
    <h3>Legal Considerations</h3>
    <ul>
      <li>✓ ROFR must be in writing and properly recorded</li>
      <li>✓ Clear definition of "bona fide offer" is essential</li>
      <li>✓ Specify what constitutes "matching" the offer</li>
      <li>✓ Address financing contingencies and timeline</li>
      <li>✓ Include dispute resolution mechanism</li>
      <li>✓ Consider impact on property title and insurability</li>
    </ul>
    
    <h3>Exit Strategies: Removing or Terminating ROFR</h3>
    <ul>
      <li><strong>Negotiate Buyout:</strong> Pay ROFR holder to release rights ($5,000-$100,000+ depending on property)</li>
      <li><strong>Wait for Expiration:</strong> If time-limited, wait it out</li>
      <li><strong>Non-Exercise:</strong> If holder doesn't exercise on an offer, ROFR may terminate</li>
      <li><strong>Mutual Agreement:</strong> Both parties agree to cancel</li>
      <li><strong>Court Action:</strong> Challenge validity if improperly documented (expensive)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Fair Market Value",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "rofrDiscount",
        label: "ROFR Discount on Value (%)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "legalFees",
        label: "Legal Fees for ROFR Compliance",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "waitingPeriod",
        label: "ROFR Response Period (Days)",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "dailyHoldingCost",
        label: "Daily Holding Cost (Mortgage, Taxes, etc.)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "buyoutAmount",
        label: "Cost to Buy Out ROFR (if applicable)",
        type: "number",
        placeholder: "25000",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Property Value Without ROFR", isCurrency: true },
      { label: "Property Value With ROFR (Discounted)", isCurrency: true },
      { label: "Value Lost Due to ROFR", isCurrency: true },
      { label: "Additional Holding Costs During ROFR Period", isCurrency: true },
      { label: "Legal & Transaction Costs", isCurrency: true },
      { label: "Total Cost of ROFR to Seller", isCurrency: true },
      { label: "Cost to Remove ROFR (Buyout)", isCurrency: true },
      { label: "Net Benefit of Buying Out ROFR", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const rofrDiscount = Number(data.rofrDiscount) || 10;
      const legalFees = Number(data.legalFees) || 2000;
      const waitingPeriod = Number(data.waitingPeriod) || 60;
      const dailyHoldingCost = Number(data.dailyHoldingCost) || 100;
      const buyoutAmount = Number(data.buyoutAmount) || 0;
      
      // Value calculations
      const discountAmount = propertyValue * (rofrDiscount / 100);
      const propertyValueWithRofr = propertyValue - discountAmount;
      
      // Additional costs
      const holdingCosts = waitingPeriod * dailyHoldingCost;
      const totalTransactionCosts = legalFees + holdingCosts;
      
      // Total cost of ROFR
      const totalCostOfRofr = discountAmount + totalTransactionCosts;
      
      // Buyout analysis
      const netBenefitOfBuyout = totalCostOfRofr - buyoutAmount;
      
      let recommendation = "";
      if (buyoutAmount > 0) {
        if (netBenefitOfBuyout > 20000) {
          recommendation = "✅ STRONGLY RECOMMENDED: Buy out ROFR - saves significant money";
        } else if (netBenefitOfBuyout > 5000) {
          recommendation = "✅ Recommended: Buying out ROFR provides good value";
        } else if (netBenefitOfBuyout > 0) {
          recommendation = "💡 Consider Buyout: Modest savings from removing ROFR";
        } else {
          recommendation = "⚠️ Keep ROFR: Buyout cost exceeds the burden of keeping it";
        }
      } else {
        if (totalCostOfRofr > 50000) {
          recommendation = "⚠️ ROFR is very costly to seller - consider negotiating buyout";
        } else if (totalCostOfRofr > 20000) {
          recommendation = "💡 ROFR has moderate cost - evaluate if acceptable for your situation";
        } else {
          recommendation = "✅ ROFR cost is relatively minor for this transaction";
        }
      }

      return [
        { label: "Property Value Without ROFR", value: `${propertyValue.toFixed(2)}`, isCurrency: true },
        { label: "Property Value With ROFR (Discounted)", value: `${propertyValueWithRofr.toFixed(2)}`, isCurrency: true },
        { label: "Value Lost Due to ROFR", value: `${discountAmount.toFixed(2)}`, isCurrency: true },
        { label: "Additional Holding Costs During ROFR Period", value: `${holdingCosts.toFixed(2)}`, isCurrency: true },
        { label: "Legal & Transaction Costs", value: `${legalFees.toFixed(2)}`, isCurrency: true },
        { label: "Total Cost of ROFR to Seller", value: `${totalCostOfRofr.toFixed(2)}`, isCurrency: true },
        { label: "Cost to Remove ROFR (Buyout)", value: `${buyoutAmount.toFixed(2)}`, isCurrency: true },
        { label: "Net Benefit of Buying Out ROFR", value: `${netBenefitOfBuyout.toFixed(2)}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};