import { CalculatorContent } from '@/types';

export const MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT: CalculatorContent = {
  title: 'Monte Carlo Simulator (Real Estate)',
  description: 'Run thousands of simulations to understand the range of possible investment outcomes and risk probabilities',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'monte-carlo-real-estate-simulator',
  article: {
    title: "Understanding Monte Carlo Simulation in Real Estate",
    content: `
    <h2>Understanding Monte Carlo Simulation in Real Estate</h2>
    <p>Monte Carlo simulation is a powerful statistical technique that uses random sampling to model the probability of different outcomes in investments. Unlike traditional analysis that provides a single outcome, Monte Carlo simulation runs thousands of scenarios to show the full range of possibilities.</p>
    
    <h3>How Monte Carlo Simulation Works</h3>
    <p>The simulation process involves:</p>
    <ol>
      <li><strong>Define Variables:</strong> Identify key inputs like property appreciation, rental income growth, and vacancy rates</li>
      <li><strong>Set Ranges:</strong> Establish minimum and maximum values for each variable based on historical data</li>
      <li><strong>Run Simulations:</strong> Generate thousands of random scenarios within the defined ranges</li>
      <li><strong>Analyze Results:</strong> Calculate probabilities of achieving different return thresholds</li>
    </ol>
    
    <h3>Benefits for Real Estate Investors</h3>
    <ul>
      <li><strong>Risk Assessment:</strong> Understand the probability of losing money or missing return targets</li>
      <li><strong>Informed Decision-Making:</strong> See the full spectrum of potential outcomes, not just averages</li>
      <li><strong>Scenario Planning:</strong> Prepare for best-case, worst-case, and most likely scenarios</li>
      <li><strong>Portfolio Optimization:</strong> Compare risk-adjusted returns across different properties</li>
    </ul>
    
    <h3>Key Metrics from Simulation</h3>
    <ul>
      <li><strong>Expected Return:</strong> The average return across all simulations</li>
      <li><strong>Standard Deviation:</strong> Measures volatility and risk</li>
      <li><strong>Confidence Intervals:</strong> Range where returns are likely to fall (e.g., 90% confidence)</li>
      <li><strong>Probability of Loss:</strong> Likelihood of negative returns</li>
      <li><strong>Best/Worst Case:</strong> Extreme outcomes to consider</li>
    </ul>
    
    <h3>When to Use Monte Carlo Simulation</h3>
    <p>This technique is particularly valuable for:</p>
    <ul>
      <li>Large, complex investment decisions</li>
      <li>Long-term hold strategies (5+ years)</li>
      <li>Markets with high uncertainty or volatility</li>
      <li>Comparing multiple investment opportunities</li>
      <li>Stress-testing investment assumptions</li>
    </ul>
    
    <h3>Limitations</h3>
    <p>While powerful, Monte Carlo simulation has limitations:</p>
    <ul>
      <li>Results are only as good as input assumptions</li>
      <li>Past volatility may not predict future volatility</li>
      <li>Assumes variables are independent (may not always be true)</li>
      <li>Cannot account for unforeseen "black swan" events</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "initialInvestment",
        label: "Initial Investment ($)",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "expectedReturn",
        label: "Expected Annual Return (%)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "volatility",
        label: "Annual Volatility (Standard Deviation %)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "years",
        label: "Investment Period (Years)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "simulations",
        label: "Number of Simulations",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
    ],
    results: [
      { label: "Expected Final Value", isCurrency: true },
      { label: "Best Case (90th Percentile)", isCurrency: true },
      { label: "Worst Case (10th Percentile)", isCurrency: true },
      { label: "Median Return", isCurrency: false },
      { label: "Probability of Profit", isCurrency: false },
      { label: "Standard Deviation", isCurrency: true },
    ],
    calculate: (data: any) => {
      const initial = Number(data.initialInvestment) || 0;
      const expectedReturn = (Number(data.expectedReturn) || 0) / 100;
      const volatility = (Number(data.volatility) || 0) / 100;
      const years = Number(data.years) || 0;
      const numSims = Math.min(Number(data.simulations) || 1000, 10000);
      
      const results: number[] = [];
      
      // Run Monte Carlo simulations
      for (let i = 0; i < numSims; i++) {
        let value = initial;
        for (let year = 0; year < years; year++) {
          // Generate random return using normal distribution approximation
          const u1 = Math.random();
          const u2 = Math.random();
          const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          const annualReturn = expectedReturn + (volatility * z);
          value *= (1 + annualReturn);
        }
        results.push(value);
      }
      
      // Sort results for percentile calculations
      results.sort((a, b) => a - b);
      
      const mean = results.reduce((a, b) => a + b, 0) / results.length;
      const median = results[Math.floor(results.length / 2)];
      const percentile10 = results[Math.floor(results.length * 0.1)];
      const percentile90 = results[Math.floor(results.length * 0.9)];
      
      // Calculate standard deviation
      const variance = results.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / results.length;
      const stdDev = Math.sqrt(variance);
      
      // Calculate probability of profit
      const profitCount = results.filter(val => val > initial).length;
      const profitProbability = (profitCount / results.length) * 100;
      
      const medianReturn = ((median - initial) / initial) * 100;

      return [
        { label: "Expected Final Value", value: mean.toFixed(2), isCurrency: true },
        { label: "Best Case (90th Percentile)", value: percentile90.toFixed(2), isCurrency: true },
        { label: "Worst Case (10th Percentile)", value: percentile10.toFixed(2), isCurrency: true },
        { label: "Median Return", value: `${medianReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Probability of Profit", value: `${profitProbability.toFixed(1)}%`, isCurrency: false },
        { label: "Standard Deviation", value: stdDev.toFixed(2), isCurrency: true },
      ];
    },
  },
};
