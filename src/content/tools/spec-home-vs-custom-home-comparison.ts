import { CalculatorContent } from '@/types';

export const SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT: CalculatorContent = {
  title: 'Spec Home vs Custom Home Comparison',
  description: 'Compare spec homes vs custom-built homes to determine the best option for your budget and timeline.',
  slug: 'spec-home-vs-custom-home-comparison',
  icon: '🏗️',
  category: 'Construction & Development',
  metaTitle: 'Spec Home vs Custom Home Comparison Calculator - Which Option is Right for You?',
  metaDescription: 'Compare spec homes versus custom-built homes. Analyze costs, timelines, and customization options to make the best decision for your new home purchase.',
  metaKeywords: 'spec home vs custom home, production home comparison, custom built home cost, spec house advantages, move-in ready home, custom home timeline, builder comparison',
  ogTitle: 'Spec Home vs Custom Home Comparison - Find Your Best Option',
  ogDescription: 'Free calculator to compare spec homes and custom-built homes. Evaluate costs, timelines, and pros/cons to make an informed home buying decision.',
  article: {
    title: 'Spec Homes vs Custom Homes: Making the Right Choice',
    content: `
    <h2>Understanding Spec Homes and Custom Homes</h2>
    <p>When buying new construction, you'll typically choose between a spec home (also called a production or inventory home) and a custom-built home. Each option has distinct advantages and considerations that can significantly impact your home buying experience.</p>
    
    <h3>What is a Spec Home?</h3>
    <p>A spec (speculative) home is built by a builder without a specific buyer in mind. These homes are constructed based on popular floor plans and market-tested features. Key characteristics include:</p>
    <ul>
      <li><strong>Pre-designed:</strong> Floor plans and finishes are already selected</li>
      <li><strong>Faster Move-in:</strong> Often available within weeks to a few months</li>
      <li><strong>Fixed Pricing:</strong> The price is typically set with limited negotiation</li>
      <li><strong>What You See Is What You Get:</strong> You can tour the actual home before buying</li>
    </ul>
    
    <h3>What is a Custom Home?</h3>
    <p>A custom home is built specifically for you, to your specifications. This process involves:</p>
    <ul>
      <li><strong>Design Freedom:</strong> Choose your floor plan, layout, and every detail</li>
      <li><strong>Longer Timeline:</strong> Typically 8-18 months from design to completion</li>
      <li><strong>Variable Costs:</strong> Prices can fluctuate during the building process</li>
      <li><strong>Personal Involvement:</strong> Requires more decision-making and oversight</li>
    </ul>
    
    <h3>Cost Comparison</h3>
    <p>Understanding the true costs of each option is crucial:</p>
    
    <h4>Spec Home Costs</h4>
    <ul>
      <li>Base price is typically all-inclusive</li>
      <li>Limited upgrade options (if construction is complete)</li>
      <li>Potential builder incentives and closing cost assistance</li>
      <li>More predictable total cost</li>
    </ul>
    
    <h4>Custom Home Costs</h4>
    <ul>
      <li>Base construction costs plus land purchase</li>
      <li>Architect and design fees (typically 5-15% of construction costs)</li>
      <li>Permit and inspection fees</li>
      <li>Landscaping and hardscaping</li>
      <li>Contingency budget for changes and overruns (typically 10-20%)</li>
    </ul>
    
    <h3>Timeline Considerations</h3>
    <table>
      <tr>
        <th>Phase</th>
        <th>Spec Home</th>
        <th>Custom Home</th>
      </tr>
      <tr>
        <td>Design & Planning</td>
        <td>Already complete</td>
        <td>2-6 months</td>
      </tr>
      <tr>
        <td>Permitting</td>
        <td>Already complete</td>
        <td>1-3 months</td>
      </tr>
      <tr>
        <td>Construction</td>
        <td>May be complete or 1-4 months</td>
        <td>6-12 months</td>
      </tr>
      <tr>
        <td>Total Timeline</td>
        <td>0-4 months</td>
        <td>9-21 months</td>
      </tr>
    </table>
    
    <h3>Advantages of Spec Homes</h3>
    <ul>
      <li><strong>Speed:</strong> Move in quickly, sometimes immediately</li>
      <li><strong>Certainty:</strong> See exactly what you're buying before purchase</li>
      <li><strong>Simplicity:</strong> Fewer decisions required</li>
      <li><strong>Builder Incentives:</strong> Often come with closing cost help or rate buydowns</li>
      <li><strong>Lower Risk:</strong> No construction cost overruns</li>
      <li><strong>Financing Simplicity:</strong> Standard mortgage process</li>
    </ul>
    
    <h3>Advantages of Custom Homes</h3>
    <ul>
      <li><strong>Personalization:</strong> Design every aspect to your preferences</li>
      <li><strong>Location Choice:</strong> Build on your preferred lot</li>
      <li><strong>Quality Control:</strong> Choose materials and contractors</li>
      <li><strong>Future-Proofing:</strong> Incorporate features for your long-term needs</li>
      <li><strong>No Compromises:</strong> Get exactly what you want</li>
      <li><strong>Potential Equity:</strong> Build equity through the construction process</li>
    </ul>
    
    <h3>How to Use This Calculator</h3>
    <p>Enter the spec home price, estimated custom home costs, and your preferred timeline. The calculator will help you compare:</p>
    <ul>
      <li><strong>Total Cost Difference:</strong> How much more or less each option costs</li>
      <li><strong>Monthly Payment Impact:</strong> Difference in mortgage payments</li>
      <li><strong>Timeline Comparison:</strong> When you can move in with each option</li>
      <li><strong>Value Analysis:</strong> Cost per square foot comparison</li>
    </ul>
    
    <h3>When to Choose a Spec Home</h3>
    <ul>
      <li>You need to move quickly (job relocation, lease ending)</li>
      <li>You want a predictable, hassle-free process</li>
      <li>The available floor plans meet your needs</li>
      <li>You prefer to see and touch before buying</li>
      <li>You want to take advantage of builder incentives</li>
    </ul>
    
    <h3>When to Choose a Custom Home</h3>
    <ul>
      <li>You have a specific vision that can't be compromised</li>
      <li>You've found the perfect lot but need to build</li>
      <li>You have time flexibility (12+ months)</li>
      <li>You want to be involved in the building process</li>
      <li>Spec homes in your area don't meet your needs</li>
      <li>You have unique requirements (accessibility, workshop, etc.)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'specHomePrice',
        label: 'Spec Home Price ($)',
        type: 'number',
        defaultValue: 450000,
        placeholder: 'Enter spec home price',
      },
      {
        name: 'customHomeCost',
        label: 'Custom Home Estimated Cost ($)',
        type: 'number',
        defaultValue: 550000,
        placeholder: 'Enter custom home total cost',
      },
      {
        name: 'customizationBudget',
        label: 'Spec Home Customization Budget ($)',
        type: 'number',
        defaultValue: 25000,
        placeholder: 'Upgrades if buying spec',
      },
      {
        name: 'specHomeSize',
        label: 'Spec Home Size (sq ft)',
        type: 'number',
        defaultValue: 2500,
        placeholder: 'Square footage of spec home',
      },
      {
        name: 'customHomeSize',
        label: 'Custom Home Size (sq ft)',
        type: 'number',
        defaultValue: 3000,
        placeholder: 'Square footage of custom home',
      },
      {
        name: 'timelinePreference',
        label: 'Timeline Preference',
        type: 'select',
        defaultValue: 'flexible',
        options: [
          { value: 'urgent', label: 'Need to move within 3 months' },
          { value: 'soon', label: 'Can wait 3-6 months' },
          { value: 'flexible', label: 'Flexible timeline (6-12 months)' },
          { value: 'patient', label: 'No rush (12+ months)' },
        ],
      },
    ],
    results: [
      { label: 'Spec Home Total (with upgrades)', isCurrency: true },
      { label: 'Custom Home Total', isCurrency: true },
      { label: 'Cost Difference', isCurrency: true },
      { label: 'Spec Home $/sq ft', isCurrency: true },
      { label: 'Custom Home $/sq ft', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const { 
        specHomePrice, 
        customHomeCost, 
        customizationBudget, 
        specHomeSize, 
        customHomeSize, 
        timelinePreference 
      } = values;
      
      const specTotal = (specHomePrice || 0) + (customizationBudget || 0);
      const costDifference = (customHomeCost || 0) - specTotal;
      const specPricePerSqFt = specHomeSize > 0 ? specTotal / specHomeSize : 0;
      const customPricePerSqFt = customHomeSize > 0 ? (customHomeCost || 0) / customHomeSize : 0;
      
      let recommendation = '';
      if (timelinePreference === 'urgent' || timelinePreference === 'soon') {
        recommendation = 'Spec Home (timeline favors quick move-in)';
      } else if (costDifference > 75000) {
        recommendation = 'Spec Home (significant cost savings)';
      } else if (costDifference < -25000) {
        recommendation = 'Custom Home (better value for customization)';
      } else if (customPricePerSqFt < specPricePerSqFt * 0.9) {
        recommendation = 'Custom Home (better cost per sq ft)';
      } else if (timelinePreference === 'patient') {
        recommendation = 'Custom Home (timeline allows for customization)';
      } else {
        recommendation = 'Either option viable - consider lifestyle priorities';
      }

      return [
        { label: 'Spec Home Total (with upgrades)', value: specTotal.toFixed(2), isCurrency: true },
        { label: 'Custom Home Total', value: customHomeCost.toFixed(2), isCurrency: true },
        { label: 'Cost Difference', value: costDifference.toFixed(2), isCurrency: true },
        { label: 'Spec Home $/sq ft', value: specPricePerSqFt.toFixed(2), isCurrency: true },
        { label: 'Custom Home $/sq ft', value: customPricePerSqFt.toFixed(2), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
