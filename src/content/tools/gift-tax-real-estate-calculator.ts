import { CalculatorContent } from '@/types';

export const GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Gift Tax Calculator for Real Estate | Property Transfer Tax 2025',
  description: 'Calculate federal gift tax on real estate transfers. Estimate tax liability, annual exclusions, and lifetime exemptions when gifting property to family.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'gift-tax-real-estate-calculator',
  article: {
    title: "Understanding Gift Tax on Real Estate Transfers",
    content: `
    <h2>What is Gift Tax?</h2>
    <p>Gift tax is a federal tax imposed on the transfer of property from one person to another without receiving full value in return. When you gift real estate to family members or others, you may trigger gift tax liability.</p>
    
    <h3>Key Gift Tax Rules for 2025</h3>
    <ul>
      <li><strong>Annual Exclusion:</strong> $19,000 per recipient per year (2025). You can gift up to this amount without filing a gift tax return.</li>
      <li><strong>Lifetime Exemption:</strong> $13.99 million per individual (2025). This is shared with the estate tax exemption.</li>
      <li><strong>Married Couples:</strong> Each spouse has their own annual exclusion and lifetime exemption.</li>
      <li><strong>Gift Splitting:</strong> Married couples can combine their annual exclusions to gift $38,000 per recipient.</li>
    </ul>

    <h3>How Gift Tax Works on Real Estate</h3>
    <p>When you gift real estate, the IRS considers the fair market value of the property as the gift amount. Important points:</p>
    <ul>
      <li><strong>Valuation:</strong> Property must be valued at fair market value on the date of the gift</li>
      <li><strong>Basis Transfer:</strong> Unlike inheritance, the recipient takes your cost basis (carryover basis), not a stepped-up basis</li>
      <li><strong>Partial Interests:</strong> Gifting partial interests in property may allow for valuation discounts</li>
      <li><strong>Mortgage Considerations:</strong> If the property has a mortgage, special rules apply</li>
    </ul>

    <h3>Gift Tax vs. Estate Tax Strategy</h3>
    <p>Gifting real estate during your lifetime can reduce your taxable estate, but consider these factors:</p>
    <ul>
      <li><strong>Lifetime Gifts:</strong> Reduce your estate but use your lifetime exemption</li>
      <li><strong>Step-Up in Basis:</strong> Property held until death gets step-up in basis; gifted property does not</li>
      <li><strong>Tax Rate:</strong> Gift tax and estate tax rates are the same (up to 40%)</li>
      <li><strong>Annual Exclusion Strategy:</strong> Gift property interests annually within the exclusion amount</li>
    </ul>

    <h3>Common Gifting Strategies</h3>
    <ul>
      <li><strong>Fractional Interests:</strong> Gift partial ownership over multiple years using annual exclusions</li>
      <li><strong>QPRT (Qualified Personal Residence Trust):</strong> Transfer your home at a reduced value</li>
      <li><strong>Family Limited Partnerships:</strong> Gift discounted interests in real estate portfolios</li>
      <li><strong>Charitable Remainder Trusts:</strong> Gift property to charity while retaining income</li>
    </ul>

    <h3>Important Considerations</h3>
    <ul>
      <li>Gift tax returns (Form 709) must be filed even if no tax is due when gifts exceed annual exclusion</li>
      <li>State gift taxes may apply in some jurisdictions</li>
      <li>Consider income tax implications for the recipient</li>
      <li>Professional tax and legal advice is essential for large property gifts</li>
    </ul>
  `,
  },
  calculator: {
    results: [
      { label: 'Fair Market Value of Gift', isCurrency: true },
      { label: 'Annual Exclusion Amount', isCurrency: true },
      { label: 'Taxable Gift Amount', isCurrency: true },
      { label: 'Lifetime Exemption Used', isCurrency: true },
      { label: 'Remaining Lifetime Exemption', isCurrency: true },
      { label: 'Gift Tax Due (if any)', isCurrency: true },
    ],
    fields: [
      {
        name: 'propertyValue',
        label: 'Fair Market Value of Real Estate',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'mortgageBalance',
        label: 'Outstanding Mortgage (if any)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'numberOfRecipients',
        label: 'Number of Recipients',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'annualExclusion',
        label: 'Annual Exclusion per Recipient (2025)',
        type: 'number',
        defaultValue: 19000,
      },
      {
        name: 'isMarried',
        label: 'Gift Splitting with Spouse?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'lifetimeExemption',
        label: 'Lifetime Gift/Estate Tax Exemption (2025)',
        type: 'number',
        defaultValue: 13990000,
      },
      {
        name: 'priorGifts',
        label: 'Prior Taxable Gifts (Lifetime)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    calculate: (data) => {
      const { 
        propertyValue, 
        mortgageBalance, 
        numberOfRecipients,
        annualExclusion,
        isMarried,
        lifetimeExemption,
        priorGifts
      } = data;

      const netGiftValue = propertyValue - mortgageBalance;
      const valuePerRecipient = netGiftValue / numberOfRecipients;
      
      const totalAnnualExclusion = isMarried 
        ? annualExclusion * 2 * numberOfRecipients 
        : annualExclusion * numberOfRecipients;
      
      const taxableGift = Math.max(0, netGiftValue - totalAnnualExclusion);
      
      const availableExemption = lifetimeExemption - priorGifts;
      const exemptionUsed = Math.min(taxableGift, availableExemption);
      const remainingExemption = Math.max(0, availableExemption - exemptionUsed);
      
      const amountSubjectToTax = Math.max(0, taxableGift - availableExemption);
      
      // Gift tax calculation (40% on amounts exceeding lifetime exemption)
      const giftTaxDue = amountSubjectToTax * 0.40;

      return [
        { label: 'Fair Market Value of Gift', value: netGiftValue, isCurrency: true },
        { label: 'Annual Exclusion Amount', value: totalAnnualExclusion, isCurrency: true },
        { label: 'Taxable Gift Amount', value: taxableGift, isCurrency: true },
        { label: 'Lifetime Exemption Used', value: exemptionUsed, isCurrency: true },
        { label: 'Remaining Lifetime Exemption', value: remainingExemption, isCurrency: true },
        { label: 'Gift Tax Due (if any)', value: giftTaxDue, isCurrency: true },
      ];
    },
  },
};
