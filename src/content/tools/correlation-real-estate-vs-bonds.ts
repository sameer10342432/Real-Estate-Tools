import { CalculatorContent } from '@/types';

export const CORRELATION_REAL_ESTATE_VS_BONDS_CONTENT: CalculatorContent = {
  title: 'Correlation Calculator (Real Estate vs. Bonds)',
  description: 'Analyze the correlation between real estate and bond investments to optimize your portfolio diversification',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'correlation-real-estate-vs-bonds',
  article: {
    title: "Understanding Correlation Between Real Estate and Bonds",
    content: `
    <h2>Understanding Correlation Between Real Estate and Bonds</h2>
    <p>Correlation analysis helps investors understand how different asset classes move in relation to each other. The correlation coefficient ranges from -1 to +1, where:</p>
    
    <ul>
      <li><strong>+1</strong> indicates perfect positive correlation (assets move together)</li>
      <li><strong>0</strong> indicates no correlation (assets move independently)</li>
      <li><strong>-1</strong> indicates perfect negative correlation (assets move in opposite directions)</li>
    </ul>
    
    <h3>Why Analyze Real Estate vs. Bonds Correlation?</h3>
    <p>Understanding the correlation between real estate and bonds is crucial for:</p>
    <ul>
      <li><strong>Portfolio Diversification:</strong> Lower correlation means better diversification and reduced portfolio risk</li>
      <li><strong>Risk Management:</strong> Identify how assets behave during different economic cycles</li>
      <li><strong>Asset Allocation:</strong> Make informed decisions about portfolio weightings</li>
      <li><strong>Hedge Strategies:</strong> Use negatively correlated assets to protect against market volatility</li>
    </ul>
    
    <h3>Historical Trends</h3>
    <p>Historically, real estate and bonds have shown varying degrees of correlation:</p>
    <ul>
      <li>During economic expansions, real estate often outperforms while bond yields rise</li>
      <li>During recessions, investors typically seek safety in bonds, while real estate may decline</li>
      <li>Interest rate changes affect both assets but in different ways</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter the annual returns for both real estate and bonds over the same time period. The calculator will compute the correlation coefficient, helping you understand how these assets have moved together historically.</p>
    
    <h3>Interpreting Results</h3>
    <ul>
      <li><strong>High Positive Correlation (0.7 to 1.0):</strong> Assets move together, limited diversification benefit</li>
      <li><strong>Moderate Correlation (0.3 to 0.7):</strong> Some relationship, moderate diversification benefit</li>
      <li><strong>Low Correlation (-0.3 to 0.3):</strong> Assets move independently, good diversification</li>
      <li><strong>Negative Correlation (-1.0 to -0.3):</strong> Assets move in opposite directions, excellent hedge potential</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "realEstateReturn1",
        label: "Real Estate Return Year 1 (%)",
        type: "number",
        placeholder: "8.5",
        defaultValue: "8.5",
      },
      {
        name: "bondReturn1",
        label: "Bond Return Year 1 (%)",
        type: "number",
        placeholder: "4.2",
        defaultValue: "4.2",
      },
      {
        name: "realEstateReturn2",
        label: "Real Estate Return Year 2 (%)",
        type: "number",
        placeholder: "10.2",
        defaultValue: "10.2",
      },
      {
        name: "bondReturn2",
        label: "Bond Return Year 2 (%)",
        type: "number",
        placeholder: "3.8",
        defaultValue: "3.8",
      },
      {
        name: "realEstateReturn3",
        label: "Real Estate Return Year 3 (%)",
        type: "number",
        placeholder: "6.8",
        defaultValue: "6.8",
      },
      {
        name: "bondReturn3",
        label: "Bond Return Year 3 (%)",
        type: "number",
        placeholder: "5.1",
        defaultValue: "5.1",
      },
      {
        name: "realEstateReturn4",
        label: "Real Estate Return Year 4 (%)",
        type: "number",
        placeholder: "12.3",
        defaultValue: "12.3",
      },
      {
        name: "bondReturn4",
        label: "Bond Return Year 4 (%)",
        type: "number",
        placeholder: "2.9",
        defaultValue: "2.9",
      },
      {
        name: "realEstateReturn5",
        label: "Real Estate Return Year 5 (%)",
        type: "number",
        placeholder: "9.1",
        defaultValue: "9.1",
      },
      {
        name: "bondReturn5",
        label: "Bond Return Year 5 (%)",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
    ],
    results: [
      { label: "Correlation Coefficient", isCurrency: false },
      { label: "Relationship Strength", isCurrency: false },
      { label: "Diversification Benefit", isCurrency: false },
      { label: "Average Real Estate Return", isCurrency: false },
      { label: "Average Bond Return", isCurrency: false },
    ],
    calculate: (data: any) => {
      const reReturns = [
        Number(data.realEstateReturn1) || 0,
        Number(data.realEstateReturn2) || 0,
        Number(data.realEstateReturn3) || 0,
        Number(data.realEstateReturn4) || 0,
        Number(data.realEstateReturn5) || 0,
      ];
      
      const bondReturns = [
        Number(data.bondReturn1) || 0,
        Number(data.bondReturn2) || 0,
        Number(data.bondReturn3) || 0,
        Number(data.bondReturn4) || 0,
        Number(data.bondReturn5) || 0,
      ];
      
      const n = reReturns.length;
      const reMean = reReturns.reduce((a, b) => a + b, 0) / n;
      const bondMean = bondReturns.reduce((a, b) => a + b, 0) / n;
      
      let numerator = 0;
      let reSumSq = 0;
      let bondSumSq = 0;
      
      for (let i = 0; i < n; i++) {
        const reDiff = reReturns[i] - reMean;
        const bondDiff = bondReturns[i] - bondMean;
        numerator += reDiff * bondDiff;
        reSumSq += reDiff * reDiff;
        bondSumSq += bondDiff * bondDiff;
      }
      
      const correlation = numerator / Math.sqrt(reSumSq * bondSumSq);
      
      let strength = "";
      let diversification = "";
      
      if (correlation >= 0.7) {
        strength = "Strong Positive";
        diversification = "Limited";
      } else if (correlation >= 0.3) {
        strength = "Moderate Positive";
        diversification = "Moderate";
      } else if (correlation >= -0.3) {
        strength = "Weak/None";
        diversification = "Good";
      } else {
        strength = "Negative";
        diversification = "Excellent";
      }

      return [
        { label: "Correlation Coefficient", value: correlation.toFixed(4), isCurrency: false },
        { label: "Relationship Strength", value: strength, isCurrency: false },
        { label: "Diversification Benefit", value: diversification, isCurrency: false },
        { label: "Average Real Estate Return", value: `${reMean.toFixed(2)}%`, isCurrency: false },
        { label: "Average Bond Return", value: `${bondMean.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
