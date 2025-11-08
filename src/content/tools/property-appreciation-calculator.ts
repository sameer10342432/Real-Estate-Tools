import { CalculatorContent } from '@/types';

export const PROPERTY_APPRECIATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Property Appreciation Calculator',
  description: 'Calculate property value growth over time and estimate future equity',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'property-appreciation-calculator',
  article: {
    title: "Understanding Property Appreciation",
    content: `
    <h2>What is Property Appreciation?</h2>
    <p>Property appreciation is the increase in a property's value over time. It's one of the primary ways real estate investors build wealth.</p>
    
    <h3>Types of Appreciation</h3>
    <ul>
      <li><strong>Market Appreciation:</strong> Natural increase due to supply/demand, location improvements, economic growth</li>
      <li><strong>Forced Appreciation:</strong> Value increase from renovations and improvements</li>
      <li><strong>Inflation-Driven:</strong> Appreciation that keeps pace with general price increases</li>
    </ul>
    
    <h3>Historical Appreciation Rates</h3>
    <p>U.S. residential real estate has historically appreciated at about 3-4% annually on average, though rates vary significantly by location and market conditions.</p>
    
    <h3>Factors Affecting Appreciation</h3>
    <ul>
      <li>Location and neighborhood development</li>
      <li>Local economic conditions and job growth</li>
      <li>Supply and demand dynamics</li>
      <li>Interest rates and financing availability</li>
      <li>Property condition and improvements</li>
      <li>School quality and local amenities</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "initialValue",
        label: "Initial Property Value",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "annualRate",
        label: "Annual Appreciation Rate (%)",
        type: "number",
        placeholder: "3.5",
        defaultValue: "3.5",
      },
      {
        name: "years",
        label: "Number of Years",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "downPayment",
        label: "Down Payment",
        type: "number",
        placeholder: "100000",
        defaultValue: "100000",
      },
    ],
    results: [
      { label: "Future Property Value", isCurrency: true },
      { label: "Total Appreciation", isCurrency: true },
      { label: "Return on Investment (ROI)", isCurrency: false },
      { label: "Average Annual Gain", isCurrency: true },
    ],
    calculate: (data: any) => {
      const initial = Number(data.initialValue) || 0;
      const rate = (Number(data.annualRate) || 0) / 100;
      const years = Number(data.years) || 0;
      const downPayment = Number(data.downPayment) || 0;

      const futureValue = initial * Math.pow(1 + rate, years);
      const totalAppreciation = futureValue - initial;
      const roi = downPayment > 0 ? (totalAppreciation / downPayment) * 100 : 0;
      const avgAnnualGain = years > 0 ? totalAppreciation / years : 0;

      return [
        { label: "Future Property Value", value: `${futureValue.toFixed(2)}`, isCurrency: true },
        { label: "Total Appreciation", value: `${totalAppreciation.toFixed(2)}`, isCurrency: true },
        { label: "Return on Investment (ROI)", value: `${roi.toFixed(2)}%`, isCurrency: false },
        { label: "Average Annual Gain", value: `${avgAnnualGain.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};