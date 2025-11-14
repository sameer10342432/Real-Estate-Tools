import { CalculatorContent } from '@/types';

export const GIFTING_PROPERTY_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Gifting Property Tax Calculator',
  description: 'Calculate gift tax implications, annual exclusions, and lifetime exemption usage when gifting real estate to family members.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'gifting-property-tax-calculator',
  metaTitle: 'Property Gift Tax Calculator - Real Estate Gifting Strategy Planner',
  metaDescription: 'Calculate gift taxes, annual exclusions, and lifetime exemptions when gifting property. Plan strategic real estate transfers to family members while minimizing tax burden.',
  article: {
    title: "Gifting Real Estate: Tax Strategies & Pitfalls to Avoid",
    content: `
    <h2>Understanding Gift Tax on Real Estate</h2>
    <p>Gifting property to children or family members can be a powerful estate planning tool, but it comes with complex tax implications. Understanding the rules helps you maximize wealth transfer while minimizing taxes.</p>
    
    <h3>2024 Gift Tax Rules</h3>
    <ul>
      <li><strong>Annual Exclusion:</strong> $18,000 per recipient per year ($36,000 if married couple gifting)</li>
      <li><strong>Lifetime Exemption:</strong> $13.61 million per individual ($27.22M for couples)</li>
      <li><strong>Gift Tax Rate:</strong> 40% on gifts above lifetime exemption</li>
      <li><strong>Form 709 Required:</strong> For gifts over annual exclusion</li>
    </ul>
    
    <h3>How Annual Gifting Works with Real Estate</h3>
    <p>You can gift fractional interests in property to stay under the annual exclusion. For example, gifting 1% of a $1.8M property ($18,000 value) each year to each of 3 children transfers $54,000 annually without touching your lifetime exemption.</p>
    
    <h4>10-Year Transfer Strategy</h4>
    <p>Gift 1% per year for 10 years = 10% transferred tax-free. With a married couple gifting to 3 children, you could transfer 60% of a property over 10 years without using any lifetime exemption.</p>
    
    <h3>Gift vs. Inheritance: The Basis Problem</h3>
    <p>This is the critical decision point most people get wrong:</p>
    
    <table>
      <tr>
        <th>Factor</th>
        <th>Gift During Life</th>
        <th>Inherit at Death</th>
      </tr>
      <tr>
        <td>Recipient's Tax Basis</td>
        <td>Your original cost (carryover basis)</td>
        <td>Fair market value at death (step-up basis)</td>
      </tr>
      <tr>
        <td>Capital Gains Tax</td>
        <td>Yes - on full appreciation</td>
        <td>No - basis stepped up</td>
      </tr>
      <tr>
        <td>Control</td>
        <td>Lost immediately</td>
        <td>Retained until death</td>
      </tr>
      <tr>
        <td>Creditor Protection</td>
        <td>Lower (in recipient's name)</td>
        <td>Higher (in your estate/trust)</td>
      </tr>
    </table>
    
    <h4>Example: The $500,000 Mistake</h4>
    <p><strong>Scenario:</strong> You gift a rental property you bought for $200,000, now worth $800,000.</p>
    <ul>
      <li><strong>If Gifted:</strong> Child's basis is $200,000. When they sell for $850,000, they pay capital gains tax on $650,000 (~$130,000 in tax)</li>
      <li><strong>If Inherited:</strong> Child's basis is $800,000. When they sell for $850,000, they pay capital gains tax on only $50,000 (~$10,000 in tax)</li>
      <li><strong>Tax Savings by Waiting:</strong> $120,000</li>
    </ul>
    
    <h3>When Gifting Makes Sense</h3>
    <p>Despite the basis issue, gifting can be smart when:</p>
    <ul>
      <li><strong>Rapidly Appreciating Property:</strong> Gift before value explodes (e.g., land in path of development)</li>
      <li><strong>Estate Over Exemption:</strong> Your estate will exceed $13.61M anyway, so gift tax is irrelevant</li>
      <li><strong>Income Shifting:</strong> Gift income-producing property to children in lower tax brackets</li>
      <li><strong>Medicaid Planning:</strong> 5-year lookback requires early gifting for nursing home coverage</li>
      <li><strong>Asset Protection:</strong> Move property out of your name before lawsuit risk</li>
    </ul>
    
    <h3>Gifting Strategies for Large Properties</h3>
    
    <h4>1. Gift LLC/Partnership Interests (Not Direct Property)</h4>
    <p>Place property in LLC, then gift LLC interests at 25-40% discount for "lack of marketability" and "lack of control." This amplifies your annual exclusion.</p>
    <p><strong>Example:</strong> 1% of a $1.8M property = $18,000. But 1% of an LLC holding the property might be valued at only $12,000 after discounts. You can gift 1.5% annually instead of 1%.</p>
    
    <h4>2. Qualified Personal Residence Trust (QPRT)</h4>
    <p>Transfer your primary/vacation home to children while retaining right to live there for X years. The "gift" value is discounted because you keep the right to use it.</p>
    
    <h4>3. Intentionally Defective Grantor Trust (IDGT)</h4>
    <p>Sell property to an irrevocable trust for a promissory note. No gift tax, no capital gains tax on the "sale," but property and appreciation move out of your estate.</p>
    
    <h3>State Gift Tax Considerations</h3>
    <p>Only one state has a gift tax: <strong>Connecticut</strong> (applies to gifts over $9.1M in 2024). But several states tax inheritances:</p>
    <ul>
      <li><strong>Inheritance Tax States:</strong> IA, KY, MD, NE, NJ, PA (tax the recipient, not estate)</li>
      <li>Gifting before death avoids state inheritance tax in these states</li>
    </ul>
    
    <h3>The "String" Problem: Avoiding Inclusion in Estate</h3>
    <p>If you gift property but retain too much control, IRS includes it back in your estate under "retained powers" rules:</p>
    <ul>
      <li>Don't retain right to income from property</li>
      <li>Don't retain right to live there (unless QPRT)</li>
      <li>Don't retain power to change beneficiaries</li>
      <li>Don't retain right to take property back</li>
    </ul>
    
    <h3>Gift Tax Return (Form 709) Requirements</h3>
    <p>Must file Form 709 by April 15th following the year of gift if:</p>
    <ul>
      <li>Gift exceeds $18,000 to any one person</li>
      <li>Gift is of a future interest (not present interest)</li>
      <li>Gift is split with spouse</li>
    </ul>
    <p>Penalty for not filing: 5% per month (max 25%) plus interest.</p>
    
    <h3>Valuation Discounts and IRS Scrutiny</h3>
    <p>IRS challenges aggressive valuation discounts. To defend:</p>
    <ul>
      <li>Hire qualified appraiser (ASA or MAI designation)</li>
      <li>Document lack of control provisions in LLC operating agreement</li>
      <li>Show restrictions on transferability</li>
      <li>Avoid gifts within 3 years of death (IRS looks closely)</li>
    </ul>
    
    <h3>The 3-Year Clawback Rule</h3>
    <p>Gifts made within 3 years of death are "clawed back" into your estate for estate tax purposes if:</p>
    <ul>
      <li>You transferred life insurance policies</li>
      <li>You gave up retained powers over transferred property</li>
      <li>Gift was made in contemplation of death to avoid taxes</li>
    </ul>
    
    <h3>Medicaid 5-Year Lookback</h3>
    <p>If you may need Medicaid for nursing home care, gifts within 5 years create penalty periods. Plan early or use strategies:</p>
    <ul>
      <li>Half-a-loaf strategy (gift half, keep half)</li>
      <li>Medicaid-compliant annuities</li>
      <li>Caregiver agreements (payment for services, not gift)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Market Value",
        type: "number",
        placeholder: "800000",
        defaultValue: "800000",
      },
      {
        name: "percentageGifted",
        label: "Percentage of Property Being Gifted (%)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "numberOfRecipients",
        label: "Number of Gift Recipients",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "marriedCouple",
        label: "Gift from Married Couple?",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "valuationDiscount",
        label: "Valuation Discount % (LLC/FLP)",
        type: "number",
        placeholder: "30",
        defaultValue: "0",
      },
      {
        name: "priorGiftsThisYear",
        label: "Prior Gifts to Recipients This Year",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "lifetimeExemptionUsed",
        label: "Lifetime Exemption Already Used",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Property Value Being Gifted", isCurrency: true },
      { label: "After Valuation Discount", isCurrency: true },
      { label: "Gift Value Per Recipient", isCurrency: true },
      { label: "Annual Exclusion Available", isCurrency: true },
      { label: "Amount Over Annual Exclusion", isCurrency: true },
      { label: "Lifetime Exemption Used", isCurrency: true },
      { label: "Remaining Lifetime Exemption", isCurrency: true },
      { label: "Gift Tax Owed", isCurrency: true },
      { label: "Form 709 Required?", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const percentageGifted = Number(data.percentageGifted) / 100 || 0;
      const numberOfRecipients = Number(data.numberOfRecipients) || 1;
      const marriedCouple = data.marriedCouple;
      const valuationDiscount = Number(data.valuationDiscount) / 100 || 0;
      const priorGiftsThisYear = Number(data.priorGiftsThisYear) || 0;
      const lifetimeExemptionUsed = Number(data.lifetimeExemptionUsed) || 0;
      
      // Calculate base gift value
      const baseGiftValue = propertyValue * percentageGifted;
      
      // Apply valuation discount
      const afterDiscount = baseGiftValue * (1 - valuationDiscount);
      
      // Per recipient value
      const perRecipient = afterDiscount / numberOfRecipients;
      
      // Annual exclusion (2024)
      const annualExclusion = marriedCouple ? 36000 : 18000;
      
      // Amount over annual exclusion
      const overExclusion = Math.max(0, perRecipient + priorGiftsThisYear - annualExclusion);
      
      // Total amount over exclusion for all recipients
      const totalOverExclusion = overExclusion * numberOfRecipients;
      
      // Lifetime exemption (2024)
      const lifetimeExemption = marriedCouple ? 27220000 : 13610000;
      const remainingExemption = Math.max(0, lifetimeExemption - lifetimeExemptionUsed);
      
      // Lifetime exemption used by this gift
      const exemptionUsedByGift = Math.min(totalOverExclusion, remainingExemption);
      
      // New remaining exemption
      const newRemainingExemption = remainingExemption - exemptionUsedByGift;
      
      // Taxable amount (amount over both annual and lifetime exemptions)
      const taxableAmount = Math.max(0, totalOverExclusion - remainingExemption);
      
      // Gift tax (40% on amount over lifetime exemption)
      const giftTax = taxableAmount * 0.40;
      
      // Form 709 required?
      const form709Required = perRecipient > annualExclusion ? "Yes - Required" : "No";

      return [
        { label: "Property Value Being Gifted", value: baseGiftValue.toFixed(2), isCurrency: true },
        { label: "After Valuation Discount", value: afterDiscount.toFixed(2), isCurrency: true },
        { label: "Gift Value Per Recipient", value: perRecipient.toFixed(2), isCurrency: true },
        { label: "Annual Exclusion Available", value: annualExclusion.toFixed(2), isCurrency: true },
        { label: "Amount Over Annual Exclusion", value: overExclusion.toFixed(2), isCurrency: true },
        { label: "Lifetime Exemption Used", value: exemptionUsedByGift.toFixed(2), isCurrency: true },
        { label: "Remaining Lifetime Exemption", value: newRemainingExemption.toFixed(2), isCurrency: true },
        { label: "Gift Tax Owed", value: giftTax.toFixed(2), isCurrency: true },
        { label: "Form 709 Required?", value: form709Required, isCurrency: false },
      ];
    },
  },
};
