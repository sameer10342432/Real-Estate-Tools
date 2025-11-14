import { CalculatorContent } from '@/types';

export const LEGACY_ESTATE_PLANNING_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Legacy/Estate Planning (Real Estate) Calculator',
  description: 'Plan your real estate estate distribution strategy and estimate estate taxes, inheritance values, and wealth transfer optimization.',
  icon: 'Icon',
  category: 'Estate Planning',
  slug: 'legacy-estate-planning-real-estate-calculator',
  metaTitle: 'Legacy Estate Planning Real Estate Calculator - Maximize Inheritance Value',
  metaDescription: 'Calculate estate taxes, inheritance distribution, and wealth transfer strategies for real estate properties. Plan your legacy and minimize tax burden for heirs with comprehensive estate planning analysis.',
  article: {
    title: "Legacy & Estate Planning for Real Estate: Maximize Your Heirs' Inheritance",
    content: `
    <h2>Why Estate Planning Matters for Real Estate Owners</h2>
    <p>Real estate often represents the largest asset in an estate, making proper planning critical to preserve wealth for the next generation. Without strategic planning, your heirs could lose 40% or more to federal estate taxes, state inheritance taxes, probate costs, and forced property sales.</p>
    
    <h3>The Estate Tax Threshold (2024)</h3>
    <ul>
      <li><strong>Federal Exemption:</strong> $13.61 million per individual ($27.22 million for married couples)</li>
      <li><strong>Estate Tax Rate:</strong> 40% on amounts above the exemption</li>
      <li><strong>State Estate Taxes:</strong> 12 states have additional estate taxes (some as low as $1 million threshold)</li>
      <li><strong>2026 Sunset:</strong> Exemption scheduled to drop to ~$7 million unless Congress acts</li>
    </ul>
    
    <h3>Key Estate Planning Strategies for Real Estate</h3>
    
    <h4>1. Step-Up in Basis</h4>
    <p>When you die, your heirs receive a "step-up" in cost basis to the property's fair market value at death. This eliminates capital gains tax on appreciation during your lifetime.</p>
    <p><strong>Example:</strong> You bought a rental property for $200,000. At your death, it's worth $800,000. Your heirs' basis is $800,000 (not $200,000), saving them potentially $120,000+ in capital gains tax if they sell immediately.</p>
    
    <h4>2. Irrevocable Life Insurance Trust (ILIT)</h4>
    <p>Life insurance proceeds are included in your estate unless owned by an ILIT. The trust owns the policy, keeps proceeds outside your estate, and provides liquidity to pay estate taxes without forcing property sales.</p>
    
    <h4>3. Qualified Personal Residence Trust (QPRT)</h4>
    <p>Transfer your home to heirs at a discounted gift value while continuing to live there for a set term. Removes future appreciation from your estate.</p>
    
    <h4>4. Family Limited Partnership (FLP)</h4>
    <p>Transfer rental properties into an FLP, then gift limited partnership interests to children at 25-40% discounts for "lack of control" and "lack of marketability." Retain control as general partner.</p>
    
    <h4>5. Charitable Remainder Trust (CRT)</h4>
    <p>Donate appreciated real estate to a CRT, receive a tax deduction and income stream for life, and remainder goes to charity. Avoids capital gains tax on sale inside the trust.</p>
    
    <h3>Common Estate Planning Mistakes</h3>
    <ul>
      <li><strong>No Plan:</strong> State intestacy laws determine distribution (may not match your wishes)</li>
      <li><strong>Joint Tenancy Issues:</strong> Can accidentally disinherit children from prior marriages</li>
      <li><strong>Outdated Beneficiaries:</strong> Life insurance and retirement accounts pass outside the will</li>
      <li><strong>No Liquidity:</strong> Heirs forced to sell properties quickly to pay estate taxes</li>
      <li><strong>Ignoring State Taxes:</strong> State estate taxes can start at much lower thresholds</li>
    </ul>
    
    <h3>The 18-Month Window</h3>
    <p>Heirs have 9-18 months (depending on state) to pay estate taxes. Real estate is illiquid, so lack of cash often forces rushed sales at unfavorable prices. Plan for liquidity through:</p>
    <ul>
      <li>Life insurance in an ILIT</li>
      <li>Liquid investments outside the property portfolio</li>
      <li>Pre-arranged lines of credit</li>
      <li>IRS Section 6166 installment payments (for business real estate)</li>
    </ul>
    
    <h3>Portability: Use It or Lose It</h3>
    <p>When the first spouse dies, the surviving spouse can "port" the unused exemption ($13.61M). BUT this requires filing Form 706 within 9 months of death, even if no estate tax is owed. Miss this deadline and you lose millions in exemption.</p>
    
    <h3>Generation-Skipping Transfer (GST) Tax</h3>
    <p>Leaving property directly to grandchildren (skipping your children) triggers a 40% GST tax unless properly planned. Use GST exemption allocation and dynasty trusts to avoid this.</p>
    
    <h3>State-Specific Considerations</h3>
    <p><strong>Community Property States:</strong> Different basis step-up rules (full step-up on both halves)</p>
    <p><strong>High Estate Tax States:</strong> NY, MA, OR, HI, ME, CT, VT, RI, MD, IL, DC, WA (plan for state exemptions as low as $1M)</p>
    
    <h3>Annual Gifting Strategy</h3>
    <p>Gift $18,000 per recipient per year ($36,000 for married couples) without using lifetime exemption. Over 10 years, transfer $360,000+ of real estate value tax-free to multiple heirs.</p>
    
    <h3>When to Update Your Estate Plan</h3>
    <ul>
      <li>Major real estate purchase or sale</li>
      <li>Marriage, divorce, birth, death</li>
      <li>Moving to a different state (estate laws vary)</li>
      <li>Significant increase in property values</li>
      <li>Change in tax laws (2026 exemption sunset approaching)</li>
      <li>Every 3-5 years as a best practice</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "totalRealEstateValue",
        label: "Total Real Estate Portfolio Value",
        type: "number",
        placeholder: "5000000",
        defaultValue: "5000000",
      },
      {
        name: "otherAssets",
        label: "Other Assets (stocks, cash, etc.)",
        type: "number",
        placeholder: "2000000",
        defaultValue: "2000000",
      },
      {
        name: "liabilities",
        label: "Total Liabilities (mortgages, loans)",
        type: "number",
        placeholder: "1500000",
        defaultValue: "1500000",
      },
      {
        name: "lifeInsurance",
        label: "Life Insurance Death Benefit",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "maritalStatus",
        label: "Married?",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "numberOfHeirs",
        label: "Number of Heirs",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "stateEstateTax",
        label: "State Has Estate Tax?",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "stateExemption",
        label: "State Estate Tax Exemption",
        type: "number",
        placeholder: "1000000",
        defaultValue: "1000000",
      },
      {
        name: "charitableDonation",
        label: "Charitable Donations (reduces estate)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Gross Estate Value", isCurrency: true },
      { label: "Net Estate Value", isCurrency: true },
      { label: "Federal Estate Tax Exemption", isCurrency: true },
      { label: "Taxable Estate Amount", isCurrency: true },
      { label: "Federal Estate Tax", isCurrency: true },
      { label: "State Estate Tax", isCurrency: true },
      { label: "Total Estate Tax", isCurrency: true },
      { label: "Net Inheritance (after taxes)", isCurrency: true },
      { label: "Per Heir Inheritance", isCurrency: true },
      { label: "Effective Tax Rate (%)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const totalRealEstateValue = Number(data.totalRealEstateValue) || 0;
      const otherAssets = Number(data.otherAssets) || 0;
      const liabilities = Number(data.liabilities) || 0;
      const lifeInsurance = Number(data.lifeInsurance) || 0;
      const maritalStatus = data.maritalStatus;
      const numberOfHeirs = Number(data.numberOfHeirs) || 1;
      const stateEstateTax = data.stateEstateTax;
      const stateExemption = Number(data.stateExemption) || 0;
      const charitableDonation = Number(data.charitableDonation) || 0;
      
      // Calculate gross estate
      const grossEstate = totalRealEstateValue + otherAssets + lifeInsurance;
      
      // Calculate net estate (after liabilities and charitable donations)
      const netEstate = grossEstate - liabilities - charitableDonation;
      
      // Federal exemption (2024)
      const federalExemption = maritalStatus ? 27220000 : 13610000;
      
      // Taxable estate
      const taxableEstate = Math.max(0, netEstate - federalExemption);
      
      // Federal estate tax (40% on amount over exemption)
      const federalEstateTax = taxableEstate * 0.40;
      
      // State estate tax (if applicable)
      let stateEstateTaxAmount = 0;
      if (stateEstateTax) {
        const stateTaxableEstate = Math.max(0, netEstate - stateExemption);
        stateEstateTaxAmount = stateTaxableEstate * 0.16; // Average state rate
      }
      
      // Total estate tax
      const totalEstateTax = federalEstateTax + stateEstateTaxAmount;
      
      // Net inheritance
      const netInheritance = netEstate - totalEstateTax;
      
      // Per heir
      const perHeir = netInheritance / numberOfHeirs;
      
      // Effective tax rate
      const effectiveTaxRate = (totalEstateTax / netEstate) * 100;

      return [
        { label: "Gross Estate Value", value: grossEstate.toFixed(2), isCurrency: true },
        { label: "Net Estate Value", value: netEstate.toFixed(2), isCurrency: true },
        { label: "Federal Estate Tax Exemption", value: federalExemption.toFixed(2), isCurrency: true },
        { label: "Taxable Estate Amount", value: taxableEstate.toFixed(2), isCurrency: true },
        { label: "Federal Estate Tax", value: federalEstateTax.toFixed(2), isCurrency: true },
        { label: "State Estate Tax", value: stateEstateTaxAmount.toFixed(2), isCurrency: true },
        { label: "Total Estate Tax", value: totalEstateTax.toFixed(2), isCurrency: true },
        { label: "Net Inheritance (after taxes)", value: netInheritance.toFixed(2), isCurrency: true },
        { label: "Per Heir Inheritance", value: perHeir.toFixed(2), isCurrency: true },
        { label: "Effective Tax Rate (%)", value: effectiveTaxRate.toFixed(2), isCurrency: false },
      ];
    },
  },
};
