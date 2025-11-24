import { CalculatorContent } from '@/types';

export const ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Estate Tax Calculator (Real Estate) | Calculate Federal Estate Tax 2025',
  description: 'Calculate estate tax liability on real estate holdings. Estimate federal estate tax, exemptions, and potential tax strategies for property inheritance planning.',
  icon: 'Icon',
  category: 'Taxes',
  slug: 'estate-tax-real-estate-calculator',
  article: {
    title: "Understanding Estate Tax on Real Estate",
    content: `
    <h2>What is Estate Tax?</h2>
    <p>Estate tax is a federal tax imposed on the transfer of property at death. When someone passes away, their estate (including real estate, investments, and other assets) may be subject to federal estate tax if it exceeds the exemption threshold.</p>
    
    <h3>Key Factors in Estate Tax Calculation</h3>
    <ul>
      <li><strong>Estate Value:</strong> Total fair market value of all assets, including real estate properties at the time of death.</li>
      <li><strong>Federal Exemption:</strong> For 2025, the federal estate tax exemption is $13.99 million per individual ($27.98 million for married couples).</li>
      <li><strong>Tax Rate:</strong> Federal estate tax rates range from 18% to 40% on amounts exceeding the exemption.</li>
      <li><strong>State Estate Tax:</strong> Some states impose additional estate taxes with lower exemption thresholds.</li>
      <li><strong>Deductions:</strong> Certain deductions like charitable contributions, debts, and administrative expenses can reduce the taxable estate.</li>
    </ul>

    <h3>Estate Tax Planning Strategies</h3>
    <ul>
      <li><strong>Gifting During Lifetime:</strong> Reduce estate size by gifting property before death (subject to gift tax rules).</li>
      <li><strong>Trusts:</strong> Irrevocable trusts can remove assets from the taxable estate.</li>
      <li><strong>Portability:</strong> Married couples can combine their exemptions if properly elected.</li>
      <li><strong>Charitable Donations:</strong> Donating real estate to qualified charities can reduce estate tax liability.</li>
      <li><strong>Life Insurance Trusts:</strong> Life insurance proceeds can be kept outside the taxable estate.</li>
    </ul>

    <h3>Important Considerations</h3>
    <p>Estate tax laws are complex and subject to change. The current high exemption amount is set to sunset in 2026 unless extended by Congress. Professional estate planning with an attorney and tax advisor is essential for high-net-worth individuals with significant real estate holdings.</p>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Estate Value', isCurrency: true },
      { label: 'Federal Exemption Amount', isCurrency: true },
      { label: 'Taxable Estate', isCurrency: true },
      { label: 'Estimated Federal Estate Tax', isCurrency: true },
      { label: 'State Estate Tax (if applicable)', isCurrency: true },
      { label: 'Total Estate Tax Liability', isCurrency: true },
      { label: 'Effective Tax Rate (%)', isCurrency: false },
    ],
    fields: [
      {
        name: 'realEstateValue',
        label: 'Total Real Estate Value',
        type: 'number',
        defaultValue: 15000000,
      },
      {
        name: 'otherAssets',
        label: 'Other Assets (stocks, cash, etc.)',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'debts',
        label: 'Outstanding Debts & Mortgages',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'charitableGifts',
        label: 'Charitable Contributions',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'adminExpenses',
        label: 'Administrative & Funeral Expenses',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'federalExemption',
        label: 'Federal Estate Tax Exemption (2025)',
        type: 'number',
        defaultValue: 13990000,
      },
      {
        name: 'isMarried',
        label: 'Married (Double Exemption)?',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'stateEstateTaxRate',
        label: 'State Estate Tax Rate (%) - if applicable',
        type: 'number',
        defaultValue: 0,
      },
    ],
    calculate: (data) => {
      const { 
        realEstateValue, 
        otherAssets, 
        debts, 
        charitableGifts, 
        adminExpenses, 
        federalExemption,
        isMarried,
        stateEstateTaxRate 
      } = data;

      const totalEstateValue = realEstateValue + otherAssets;
      const deductions = debts + charitableGifts + adminExpenses;
      const netEstateValue = totalEstateValue - deductions;
      
      const exemptionAmount = isMarried ? federalExemption * 2 : federalExemption;
      const taxableEstate = Math.max(0, netEstateValue - exemptionAmount);

      // Federal estate tax calculation (progressive rates)
      let federalEstateTax = 0;
      if (taxableEstate > 0) {
        if (taxableEstate <= 10000) {
          federalEstateTax = taxableEstate * 0.18;
        } else if (taxableEstate <= 20000) {
          federalEstateTax = 1800 + (taxableEstate - 10000) * 0.20;
        } else if (taxableEstate <= 40000) {
          federalEstateTax = 3800 + (taxableEstate - 20000) * 0.22;
        } else if (taxableEstate <= 60000) {
          federalEstateTax = 8200 + (taxableEstate - 40000) * 0.24;
        } else if (taxableEstate <= 80000) {
          federalEstateTax = 13000 + (taxableEstate - 60000) * 0.26;
        } else if (taxableEstate <= 100000) {
          federalEstateTax = 18200 + (taxableEstate - 80000) * 0.28;
        } else if (taxableEstate <= 150000) {
          federalEstateTax = 23800 + (taxableEstate - 100000) * 0.30;
        } else if (taxableEstate <= 250000) {
          federalEstateTax = 38800 + (taxableEstate - 150000) * 0.32;
        } else if (taxableEstate <= 500000) {
          federalEstateTax = 70800 + (taxableEstate - 250000) * 0.34;
        } else if (taxableEstate <= 750000) {
          federalEstateTax = 155800 + (taxableEstate - 500000) * 0.37;
        } else if (taxableEstate <= 1000000) {
          federalEstateTax = 248300 + (taxableEstate - 750000) * 0.39;
        } else {
          federalEstateTax = 345800 + (taxableEstate - 1000000) * 0.40;
        }
      }

      const stateEstateTax = taxableEstate * (stateEstateTaxRate / 100);
      const totalEstateTax = federalEstateTax + stateEstateTax;
      const effectiveRate = totalEstateValue > 0 ? (totalEstateTax / totalEstateValue) * 100 : 0;

      return [
        { label: 'Total Estate Value', value: totalEstateValue, isCurrency: true },
        { label: 'Federal Exemption Amount', value: exemptionAmount, isCurrency: true },
        { label: 'Taxable Estate', value: taxableEstate, isCurrency: true },
        { label: 'Estimated Federal Estate Tax', value: federalEstateTax, isCurrency: true },
        { label: 'State Estate Tax (if applicable)', value: stateEstateTax, isCurrency: true },
        { label: 'Total Estate Tax Liability', value: totalEstateTax, isCurrency: true },
        { label: 'Effective Tax Rate (%)', value: effectiveRate, isCurrency: false },
      ];
    },
  },
};
