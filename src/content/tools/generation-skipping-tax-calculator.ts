import { CalculatorContent } from '@/types';

export const GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Generation-Skipping Transfer Tax Calculator | GST Tax on Real Estate',
  description: 'Calculate generation-skipping transfer tax on real estate gifts to grandchildren. Estimate GST tax liability, exemptions, and dynasty trust strategies.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'generation-skipping-tax-calculator',
  article: {
    title: "Understanding Generation-Skipping Transfer Tax (GST Tax)",
    content: `
    <h2>What is Generation-Skipping Transfer Tax?</h2>
    <p>The Generation-Skipping Transfer Tax (GST Tax) is an additional federal tax imposed on transfers of property that skip a generation. This typically occurs when grandparents transfer real estate or other assets directly to grandchildren, bypassing their own children.</p>
    
    <h3>Why Does GST Tax Exist?</h3>
    <p>The GST tax was created to prevent wealthy families from avoiding estate taxes by skipping generations. Without it, families could transfer wealth from grandparent to grandchild, avoiding the estate tax that would apply at the parent's death.</p>
    
    <h3>Key GST Tax Rules for 2025</h3>
    <ul>
      <li><strong>GST Exemption:</strong> $13.99 million per individual (2025), same as the estate tax exemption</li>
      <li><strong>Tax Rate:</strong> 40% flat rate on generation-skipping transfers exceeding the exemption</li>
      <li><strong>Skip Persons:</strong> Anyone two or more generations below you (grandchildren, great-grandchildren)</li>
      <li><strong>Non-Skip Persons:</strong> Your children and spouse are not skip persons</li>
    </ul>

    <h3>Types of Generation-Skipping Transfers</h3>
    <ul>
      <li><strong>Direct Skips:</strong> Outright gifts or bequests directly to skip persons (e.g., giving real estate to grandchild)</li>
      <li><strong>Taxable Distributions:</strong> Distributions from a trust to a skip person</li>
      <li><strong>Taxable Terminations:</strong> When a trust interest held by a non-skip person ends and assets pass to skip persons</li>
    </ul>

    <h3>GST Tax and Real Estate Planning</h3>
    <p>When transferring real estate across generations, consider:</p>
    <ul>
      <li><strong>Direct Transfer:</strong> Gifting property directly to grandchildren triggers both gift tax and potentially GST tax</li>
      <li><strong>Dynasty Trusts:</strong> Irrevocable trusts designed to last multiple generations while minimizing GST tax</li>
      <li><strong>GST Exemption Allocation:</strong> Strategic allocation of your GST exemption to maximize tax benefits</li>
      <li><strong>Annual Exclusion Gifts:</strong> Direct skips qualifying for the annual gift exclusion are GST-exempt</li>
    </ul>

    <h3>Planning Strategies to Minimize GST Tax</h3>
    <ul>
      <li><strong>Use Annual Exclusion:</strong> Make annual gifts of $19,000 (2025) per grandchild to avoid GST tax</li>
      <li><strong>529 Plans:</strong> Superfund 529 college savings plans for grandchildren (5 years of gifts upfront)</li>
      <li><strong>Dynasty Trusts:</strong> Create trusts that can last for multiple generations</li>
      <li><strong>Life Insurance:</strong> Use life insurance trusts to transfer wealth GST-tax-free</li>
      <li><strong>Leverage Exemption Early:</strong> Use exemption while assets are lower in value</li>
      <li><strong>Generation-Skipping Trusts:</strong> Allocate GST exemption to trusts for maximum benefit</li>
    </ul>

    <h3>Real Estate-Specific Considerations</h3>
    <ul>
      <li><strong>Valuation:</strong> Real estate is valued at fair market value at time of transfer</li>
      <li><strong>Income-Producing Property:</strong> Transferring rental property to dynasty trusts can provide multi-generational income</li>
      <li><strong>Fractional Interests:</strong> Gift fractional interests in real estate annually within exclusion amounts</li>
      <li><strong>QPRT:</strong> Qualified Personal Residence Trusts can reduce GST tax on primary residences</li>
    </ul>

    <h3>Important Warnings</h3>
    <ul>
      <li>GST tax is in addition to gift or estate tax, not instead of it</li>
      <li>Proper allocation of GST exemption is crucial and cannot be changed retroactively</li>
      <li>State-level GST taxes may apply in some jurisdictions</li>
      <li>Professional legal and tax advice is essential for GST planning</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Transfer Amount', isCurrency: true },
      { label: 'Annual Exclusion (if applicable)', isCurrency: true },
      { label: 'Taxable Transfer Amount', isCurrency: true },
      { label: 'GST Exemption Available', isCurrency: true },
      { label: 'GST Exemption Applied', isCurrency: true },
      { label: 'Amount Subject to GST Tax', isCurrency: true },
      { label: 'GST Tax Due', isCurrency: true },
      { label: 'Gift/Estate Tax Due (separate)', isCurrency: true },
      { label: 'Total Tax Liability', isCurrency: true },
    ],
    fields: [
      {
        name: 'propertyValue',
        label: 'Fair Market Value of Real Estate',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'transferType',
        label: 'Direct Skip (outright to grandchild)?',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'qualifiesForAnnualExclusion',
        label: 'Qualifies for Annual Exclusion?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'annualExclusion',
        label: 'Annual Exclusion Amount (2025)',
        type: 'number',
        defaultValue: 19000,
      },
      {
        name: 'gstExemptionAvailable',
        label: 'GST Exemption Available',
        type: 'number',
        defaultValue: 13990000,
      },
      {
        name: 'gstExemptionToApply',
        label: 'GST Exemption to Apply to This Transfer',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'giftEstateExemptionRemaining',
        label: 'Gift/Estate Tax Exemption Remaining',
        type: 'number',
        defaultValue: 13990000,
      },
    ],
    calculate: (data) => {
      const { 
        propertyValue,
        transferType,
        qualifiesForAnnualExclusion,
        annualExclusion,
        gstExemptionAvailable,
        gstExemptionToApply,
        giftEstateExemptionRemaining
      } = data;

      const exclusionAmount = qualifiesForAnnualExclusion ? annualExclusion : 0;
      const taxableTransfer = Math.max(0, propertyValue - exclusionAmount);
      
      const gstExemptionUsed = Math.min(gstExemptionToApply, gstExemptionAvailable, taxableTransfer);
      const amountSubjectToGST = Math.max(0, taxableTransfer - gstExemptionUsed);
      
      // GST tax is 40% flat rate
      const gstTaxDue = amountSubjectToGST * 0.40;
      
      // Calculate gift/estate tax separately (also 40% on amount exceeding exemption)
      const amountSubjectToGiftTax = Math.max(0, taxableTransfer - giftEstateExemptionRemaining);
      const giftEstateTaxDue = amountSubjectToGiftTax * 0.40;
      
      const totalTaxLiability = gstTaxDue + giftEstateTaxDue;

      return [
        { label: 'Total Transfer Amount', value: propertyValue, isCurrency: true },
        { label: 'Annual Exclusion (if applicable)', value: exclusionAmount, isCurrency: true },
        { label: 'Taxable Transfer Amount', value: taxableTransfer, isCurrency: true },
        { label: 'GST Exemption Available', value: gstExemptionAvailable, isCurrency: true },
        { label: 'GST Exemption Applied', value: gstExemptionUsed, isCurrency: true },
        { label: 'Amount Subject to GST Tax', value: amountSubjectToGST, isCurrency: true },
        { label: 'GST Tax Due', value: gstTaxDue, isCurrency: true },
        { label: 'Gift/Estate Tax Due (separate)', value: giftEstateTaxDue, isCurrency: true },
        { label: 'Total Tax Liability', value: totalTaxLiability, isCurrency: true },
      ];
    },
  },
};
