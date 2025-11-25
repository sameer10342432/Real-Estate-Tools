import { CalculatorContent } from '@/types';

const RENT_BACK_SELLER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rent-Back (Seller) Calculator',
  description: 'Calculate costs, daily rates, and financial implications of post-closing rent-back agreements for sellers who need time to move out after closing.',
  icon: 'Icon',
  slug: 'rent-back-seller-calculator',
  category: 'Seller Tools',
  calculator: {
    results: [],
    fields: [
      {
        name: 'homeSalePrice',
        label: 'Home Sale Price ($)',
        type: 'number',
        defaultValue: '500000',
      },
      {
        name: 'rentBackDays',
        label: 'Rent-Back Period (Days)',
        type: 'number',
        defaultValue: '30',
      },
      {
        name: 'rentBackRateType',
        label: 'Rate Calculation Method',
        type: 'select',
        options: [
          { value: 'market', label: 'Market Rent Rate' },
          { value: 'piti', label: 'Buyer PITI' },
          { value: 'custom', label: 'Custom Daily Rate' },
        ],
        defaultValue: 'piti',
      },
      {
        name: 'monthlyMarketRent',
        label: 'Monthly Market Rent ($)',
        type: 'number',
        defaultValue: '3500',
      },
      {
        name: 'buyerMonthlyPITI',
        label: 'Buyer Monthly PITI ($)',
        type: 'number',
        defaultValue: '3200',
      },
      {
        name: 'customDailyRate',
        label: 'Custom Daily Rate ($)',
        type: 'number',
        defaultValue: '150',
      },
      {
        name: 'securityDeposit',
        label: 'Security Deposit ($)',
        type: 'number',
        defaultValue: '5000',
      },
      {
        name: 'utilitiesPaidBy',
        label: 'Utilities Paid By',
        type: 'select',
        options: [
          { value: 'seller', label: 'Seller' },
          { value: 'buyer', label: 'Buyer' },
        ],
        defaultValue: 'seller',
      },
    ],
    calculate: (values) => {
      const salePrice = Number(values.homeSalePrice);
      const rentBackDays = Number(values.rentBackDays);
      const rateType = values.rentBackRateType;
      const marketRent = Number(values.monthlyMarketRent);
      const buyerPITI = Number(values.buyerMonthlyPITI);
      const customRate = Number(values.customDailyRate);
      const securityDeposit = Number(values.securityDeposit);
      const utilitiesPaidBy = values.utilitiesPaidBy;

      // Calculate daily rate based on selected method
      let dailyRate = 0;
      if (rateType === 'market') {
        dailyRate = marketRent / 30;
      } else if (rateType === 'piti') {
        dailyRate = buyerPITI / 30;
      } else {
        dailyRate = customRate;
      }

      // Calculate costs
      const totalRentCost = dailyRate * rentBackDays;
      const estimatedUtilities = utilitiesPaidBy === 'seller' ? (rentBackDays / 30) * 300 : 0;
      const totalSellerCost = totalRentCost + estimatedUtilities;

      // Calculate as percentage of sale price
      const costAsPercentage = (totalSellerCost / salePrice) * 100;

      // Calculate net proceeds impact
      const netProceedsReduction = totalSellerCost;

      // Risk assessment
      const riskLevel = rentBackDays > 60 ? 'High' : rentBackDays > 30 ? 'Medium' : 'Low';

      // Calculate recommended insurance
      const recommendedInsurance = salePrice * 0.001 * (rentBackDays / 30); // 0.1% per month

      return [
        {
          label: 'Daily Rent Rate',
          value: `$${dailyRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Rent Cost',
          value: `$${totalRentCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Estimated Utilities (if paid by seller)',
          value: `$${estimatedUtilities.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Total Seller Cost',
          value: `$${totalSellerCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          isHighlighted: true,
        },
        {
          label: 'Cost as % of Sale Price',
          value: `${costAsPercentage.toFixed(2)}%`,
        },
        {
          label: 'Security Deposit Required',
          value: `$${securityDeposit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Net Proceeds Reduction',
          value: `$${netProceedsReduction.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
        {
          label: 'Risk Level',
          value: riskLevel,
          isHighlighted: riskLevel === 'High',
        },
        {
          label: 'Recommended Liability Insurance',
          value: `$${recommendedInsurance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        },
      ];
    },
  },
  article: {
    title: 'Complete Guide to Seller Rent-Back Agreements in Real Estate',
    content: `
      <h2>What is a Rent-Back Agreement?</h2>
      <p>A rent-back agreement (also called a post-settlement occupancy agreement or leaseback) allows sellers to remain in their home as tenants after closing for a specified period. This arrangement gives sellers additional time to move out while providing buyers with rental income and immediate ownership.</p>

      <h3>How Rent-Back Agreements Work</h3>
      <p>In a typical rent-back scenario:</p>
      <ul>
        <li>The sale closes and ownership transfers to the buyer</li>
        <li>The seller becomes a tenant and pays daily or monthly rent</li>
        <li>A security deposit protects the buyer against damage</li>
        <li>The arrangement typically lasts 30-60 days</li>
        <li>Terms are negotiated before closing and included in the purchase agreement</li>
      </ul>

      <h3>Benefits for Sellers</h3>
      <ul>
        <li><strong>Flexibility:</strong> Time to find and purchase a new home</li>
        <li><strong>Avoid Double Moves:</strong> Move directly from sold home to new home</li>
        <li><strong>Coordinated Timing:</strong> Synchronize sale and purchase closings</li>
        <li><strong>Reduced Stress:</strong> No need to rush the moving process</li>
        <li><strong>Access to Funds:</strong> Have sale proceeds to purchase next home</li>
      </ul>

      <h3>Calculating Rent-Back Rates</h3>
      <p>Common methods for determining daily rent rates:</p>
      <ul>
        <li><strong>Buyer's PITI:</strong> Based on buyer's monthly mortgage payment (most common)</li>
        <li><strong>Market Rent:</strong> Based on comparable rental rates in the area</li>
        <li><strong>Negotiated Rate:</strong> Custom rate agreed upon by both parties</li>
        <li><strong>Pro-Rated:</strong> Annual property taxes and insurance divided by days</li>
      </ul>

      <h3>Key Terms to Negotiate</h3>
      <ul>
        <li><strong>Duration:</strong> Length of rent-back period (typically 7-60 days)</li>
        <li><strong>Daily/Monthly Rate:</strong> Amount seller pays per day or month</li>
        <li><strong>Security Deposit:</strong> Refundable deposit (usually $2,000-$10,000)</li>
        <li><strong>Utilities:</strong> Who pays for utilities during occupancy</li>
        <li><strong>Maintenance:</strong> Seller's responsibilities for property upkeep</li>
        <li><strong>Insurance:</strong> Who carries insurance and liability coverage</li>
        <li><strong>Extension Terms:</strong> What happens if seller needs more time</li>
      </ul>

      <h3>Risks for Sellers</h3>
      <ul>
        <li><strong>Daily Costs:</strong> Can add up quickly, especially for long periods</li>
        <li><strong>No Ownership Rights:</strong> Subject to buyer's rules and restrictions</li>
        <li><strong>Damage Liability:</strong> Responsible for any property damage</li>
        <li><strong>Move-Out Pressure:</strong> Must vacate by agreed date or face penalties</li>
        <li><strong>Lost Deposit:</strong> May forfeit security deposit for damages or delays</li>
      </ul>

      <h3>Legal Considerations</h3>
      <p>Important legal aspects of rent-back agreements:</p>
      <ul>
        <li>Must be documented in writing and signed before closing</li>
        <li>Should specify whether it's a tenancy or license agreement</li>
        <li>May trigger landlord-tenant laws in some states</li>
        <li>Affects title insurance and homeowner's insurance coverage</li>
        <li>Requires clear move-out procedures and penalties</li>
      </ul>

      <h3>Insurance Requirements</h3>
      <ul>
        <li><strong>Seller's Insurance:</strong> May need renter's insurance for personal property</li>
        <li><strong>Buyer's Insurance:</strong> Should notify insurer about rent-back arrangement</li>
        <li><strong>Liability Coverage:</strong> Both parties should maintain adequate liability protection</li>
        <li><strong>Personal Property:</strong> Seller responsible for insuring belongings</li>
      </ul>

      <h3>Tax Implications</h3>
      <ul>
        <li>Rent paid by seller may be tax-deductible (consult tax professional)</li>
        <li>Buyer may need to report rental income</li>
        <li>Could affect capital gains exclusion timing</li>
        <li>May impact property tax reassessment dates</li>
      </ul>

      <h3>Best Practices for Sellers</h3>
      <ul>
        <li>Negotiate reasonable rent-back period (30 days or less ideal)</li>
        <li>Provide adequate security deposit to show good faith</li>
        <li>Maintain property in excellent condition</li>
        <li>Have backup housing plan in case of complications</li>
        <li>Keep detailed records of rent payments</li>
        <li>Conduct pre-move-out inspection with buyer</li>
        <li>Remove all belongings before final deadline</li>
      </ul>

      <h3>Common Rent-Back Scenarios</h3>
      <ul>
        <li><strong>Bridge Timing:</strong> Seller waiting for new home construction to complete</li>
        <li><strong>School Year:</strong> Family waiting to move until school year ends</li>
        <li><strong>Job Relocation:</strong> Seller coordinating move with job start date</li>
        <li><strong>Downsizing:</strong> Seller needs time to find appropriate retirement home</li>
        <li><strong>Multiple Offers:</strong> Seller leveraging competitive market</li>
      </ul>

      <h3>Alternatives to Rent-Back</h3>
      <p>If rent-back doesn't work, consider:</p>
      <ul>
        <li>Extended closing date</li>
        <li>Temporary rental or hotel accommodation</li>
        <li>Moving in with family temporarily</li>
        <li>Storage unit with short-term rental</li>
        <li>Selling earlier and renting in the area</li>
      </ul>

      <p>Use this calculator to estimate the costs and understand the financial impact of a rent-back agreement for your home sale.</p>
    `
  },
};

export { RENT_BACK_SELLER_CALCULATOR_CONTENT };
