import { CalculatorContent } from '@/types';

export const HousePriceComparisonZestimateVsRedfinContent: CalculatorContent = {
  title: 'House Price Comparison (Zestimate vs. Redfin)',
  description: 'Compare Zillow Zestimate vs. Redfin Estimate vs. actual sale price to determine property value accuracy',
  icon: '🏘️',
  category: 'Additional Tools',
  slug: 'house-price-comparison-zestimate-vs-redfin',
  
  metaTitle: 'House Price Comparison: Zestimate vs Redfin Estimate Accuracy | Property Tools',
  metaDescription: 'Compare Zillow Zestimate vs Redfin Estimate accuracy. Calculate which online home valuation is more accurate compared to actual sale prices and appraisals.',
  
  article: {
    title: 'House Price Comparison: Zestimate vs. Redfin Estimate Accuracy Analysis',
    content: `
      <h2>House Price Comparison: Zestimate vs. Redfin Estimate</h2>
      <p>Zillow and Redfin provide automated home valuations (AVMs), but how accurate are they? Compare estimates from different platforms and understand which to trust when buying or selling.</p>

      <h3>What is a Zestimate?</h3>
      <p>A Zestimate is Zillow's estimated market value for a property, calculated using public data, user-submitted data, and proprietary algorithms. Updated daily for on-market and off-market homes.</p>

      <h3>What is a Redfin Estimate?</h3>
      <p>A Redfin Estimate is Redfin's automated home valuation using MLS data, public records, and user-submitted information. Updated multiple times per week.</p>

      <h3>Accuracy Comparison (2024 Data)</h3>
      
      <h4>Zillow Zestimate Accuracy</h4>
      <ul>
        <li><strong>On-Market Homes:</strong> Median error rate 2.4% (within 5% 63% of the time)</li>
        <li><strong>Off-Market Homes:</strong> Median error rate 7.49% (within 5% 41% of the time)</li>
        <li><strong>National Coverage:</strong> 104+ million US homes</li>
        <li><strong>Update Frequency:</strong> Daily</li>
      </ul>

      <h4>Redfin Estimate Accuracy</h4>
      <ul>
        <li><strong>On-Market Homes:</strong> Median error rate 2.16% (within 3% 77.6% of the time)</li>
        <li><strong>Off-Market Homes:</strong> Median error rate 6.94% (within 5% 48% of the time)</li>
        <li><strong>National Coverage:</strong> 92+ million US homes</li>
        <li><strong>Update Frequency:</strong> Multiple times per week</li>
      </ul>

      <h4>Winner: Redfin (Slightly More Accurate)</h4>
      <p>Redfin Estimates are typically 0.24-0.55% more accurate than Zestimates, largely because Redfin is a licensed brokerage with direct MLS access.</p>

      <h3>Regional Accuracy Variations</h3>
      
      <h4>Most Accurate Markets (Both Platforms)</h4>
      <ul>
        <li><strong>San Francisco, CA:</strong> 1.5-2.5% median error</li>
        <li><strong>Seattle, WA:</strong> 1.8-2.8% median error</li>
        <li><strong>Portland, OR:</strong> 2.0-3.0% median error</li>
        <li><strong>Denver, CO:</strong> 2.2-3.2% median error</li>
        <li><strong>Boston, MA:</strong> 2.3-3.3% median error</li>
      </ul>

      <h4>Least Accurate Markets</h4>
      <ul>
        <li><strong>Rural Areas:</strong> 10-20% median error (limited data)</li>
        <li><strong>Miami, FL:</strong> 6-8% median error (volatile market)</li>
        <li><strong>Detroit, MI:</strong> 7-10% median error (distressed properties)</li>
        <li><strong>Las Vegas, NV:</strong> 5-7% median error (boom/bust cycles)</li>
        <li><strong>New Construction Areas:</strong> 8-12% median error (limited comps)</li>
      </ul>

      <h3>When Estimates Are Most Inaccurate</h3>
      
      <h4>Property Types with High Error Rates</h4>
      <ul>
        <li><strong>Unique/Custom Homes:</strong> 15-30% error (no comparables)</li>
        <li><strong>Luxury Properties ($2M+):</strong> 10-25% error (small sample size)</li>
        <li><strong>Rural/Remote Properties:</strong> 10-20% error (limited data)</li>
        <li><strong>Condos in Mixed-Use Buildings:</strong> 8-15% error (complex variables)</li>
        <li><strong>Homes with Major Renovations:</strong> 5-15% error (data lag)</li>
        <li><strong>Foreclosures/Distressed Sales:</strong> 10-20% error (below-market prices)</li>
      </ul>

      <h4>Situations with Higher Accuracy</h4>
      <ul>
        <li><strong>Suburban Tract Homes:</strong> 2-4% error (many comparables)</li>
        <li><strong>Recently Sold Comparables:</strong> 1-3% error (fresh data)</li>
        <li><strong>Standard Floor Plans:</strong> 2-4% error (predictable values)</li>
        <li><strong>Active MLS Markets:</strong> 2-5% error (data availability)</li>
      </ul>

      <h3>Factors That Influence Accuracy</h3>
      
      <h4>Data Quality</h4>
      <ul>
        <li><strong>Recent sales data:</strong> Critical for accuracy</li>
        <li><strong>MLS listing details:</strong> Square footage, beds, baths</li>
        <li><strong>Tax assessor records:</strong> Property characteristics</li>
        <li><strong>User-submitted updates:</strong> Remodels, additions</li>
        <li><strong>Comparable sales:</strong> Similar homes nearby</li>
      </ul>

      <h4>Market Volatility</h4>
      <ul>
        <li>Hot markets: Estimates lag behind rapid price increases</li>
        <li>Declining markets: Estimates slow to adjust downward</li>
        <li>Seasonal fluctuations: Summer/winter price variations</li>
        <li>Interest rate changes: Impact on buyer demand and prices</li>
      </ul>

      <h3>Other Home Valuation Tools</h3>
      
      <h4>Realtor.com Estimate</h4>
      <ul>
        <li><strong>Accuracy:</strong> Similar to Zestimate (2-7% median error)</li>
        <li><strong>Coverage:</strong> 100+ million homes</li>
        <li><strong>Advantage:</strong> Official NAR (National Association of Realtors) site</li>
      </ul>

      <h4>Trulia Estimate</h4>
      <ul>
        <li><strong>Accuracy:</strong> Same as Zestimate (Zillow owns Trulia)</li>
        <li><strong>Note:</strong> Uses identical algorithm as Zillow</li>
      </ul>

      <h4>CoreLogic HPI</h4>
      <ul>
        <li><strong>Accuracy:</strong> Industry-leading (1-3% error on average)</li>
        <li><strong>Limitation:</strong> Not freely available to consumers</li>
        <li><strong>Used by:</strong> Lenders, appraisers, institutions</li>
      </ul>

      <h4>Collateral Analytics</h4>
      <ul>
        <li><strong>Accuracy:</strong> Professional-grade (1.5-4% error)</li>
        <li><strong>Used by:</strong> Mortgage lenders, banks</li>
        <li><strong>Availability:</strong> Not directly accessible to public</li>
      </ul>

      <h3>Professional Appraisal vs. Online Estimates</h3>
      
      <h4>Professional Appraisal</h4>
      <ul>
        <li><strong>Cost:</strong> $300-$700</li>
        <li><strong>Accuracy:</strong> 0-5% error (gold standard)</li>
        <li><strong>Method:</strong> On-site inspection, local expertise</li>
        <li><strong>Turnaround:</strong> 1-2 weeks</li>
        <li><strong>Required for:</strong> Mortgage financing</li>
      </ul>

      <h4>Automated Valuation Model (AVM)</h4>
      <ul>
        <li><strong>Cost:</strong> Free (Zestimate, Redfin)</li>
        <li><strong>Accuracy:</strong> 2-8% error</li>
        <li><strong>Method:</strong> Algorithms, no inspection</li>
        <li><strong>Turnaround:</strong> Instant</li>
        <li><strong>Use:</strong> Rough estimate, pricing guidance</li>
      </ul>

      <h3>Real-World Accuracy Examples</h3>
      
      <h4>Case Study: $500,000 Home</h4>
      <ul>
        <li><strong>Zestimate:</strong> $485,000 (3% under)</li>
        <li><strong>Redfin Estimate:</strong> $510,000 (2% over)</li>
        <li><strong>Realtor.com:</strong> $495,000 (1% under)</li>
        <li><strong>Actual Sale Price:</strong> $500,000</li>
        <li><strong>Appraisal:</strong> $502,000</li>
        <li><strong>Winner:</strong> Realtor.com (closest)</li>
      </ul>

      <h4>Case Study: $1,200,000 Luxury Home</h4>
      <ul>
        <li><strong>Zestimate:</strong> $1,050,000 (12.5% under)</li>
        <li><strong>Redfin Estimate:</strong> $1,100,000 (8.3% under)</li>
        <li><strong>Actual Sale Price:</strong> $1,200,000</li>
        <li><strong>Appraisal:</strong> $1,195,000</li>
        <li><strong>Lesson:</strong> Luxury homes have larger error margins</li>
      </ul>

      <h3>How to Improve Estimate Accuracy</h3>
      
      <h4>Update Your Home Details</h4>
      <ul>
        <li>Claim your home on Zillow and Redfin</li>
        <li>Update square footage, bed/bath count</li>
        <li>Add recent renovations and improvements</li>
        <li>Upload photos of upgrades</li>
        <li>Correct any errors in tax records</li>
      </ul>

      <h4>Wait for Recent Sales Data</h4>
      <ul>
        <li>AVMs improve with fresh comparable sales</li>
        <li>Major market shifts take 1-3 months to reflect</li>
        <li>Spring/summer estimates more accurate (more sales)</li>
      </ul>

      <h3>When to Trust Online Estimates</h3>
      
      <h4>Reliable Scenarios</h4>
      <ul>
        <li>Suburban tract home in active market</li>
        <li>Many recent comparable sales nearby</li>
        <li>Standard floor plan and features</li>
        <li>Using as rough ballpark figure only</li>
        <li>Multiple platforms show similar values</li>
      </ul>

      <h4>Don't Trust Online Estimates</h4>
      <ul>
        <li>Unique/custom properties</li>
        <li>Luxury homes ($2M+)</li>
        <li>Rural or low-inventory areas</li>
        <li>Making final pricing decisions</li>
        <li>For mortgage or lending purposes</li>
        <li>Recent major renovations not updated</li>
      </ul>

      <h3>Using Estimates for Pricing Strategy</h3>
      
      <h4>For Sellers</h4>
      <ul>
        <li>Use as starting point, not final price</li>
        <li>Compare all platforms (Zillow, Redfin, Realtor.com)</li>
        <li>Get professional CMA from local agent</li>
        <li>Price 5-10% above estimate if hot market</li>
        <li>Price at or slightly below estimate if slow market</li>
      </ul>

      <h4>For Buyers</h4>
      <ul>
        <li>Check multiple platforms for consensus</li>
        <li>If estimates disagree >10%, investigate why</li>
        <li>Use as negotiating baseline</li>
        <li>Don't rely solely on estimates for offer price</li>
        <li>Get professional appraisal during due diligence</li>
      </ul>

      <h3>Estimate Tracking Over Time</h3>
      <p>Monitor your home's estimated value monthly to spot trends:</p>
      <ul>
        <li><strong>Rising estimates:</strong> Good market, build equity</li>
        <li><strong>Falling estimates:</strong> Market slowdown or data errors</li>
        <li><strong>Volatile swings:</strong> Likely inaccurate data, update info</li>
        <li><strong>Stagnant estimates:</strong> Low sales activity nearby</li>
      </ul>

      <h3>Legal Disclaimers on Estimates</h3>
      <p>Both Zillow and Redfin include disclaimers:</p>
      <ul>
        <li>"Not an appraisal, should not be used as one"</li>
        <li>"For informational purposes only"</li>
        <li>"May not reflect current market conditions"</li>
        <li>"Accuracy varies by location"</li>
        <li>"Should not be used for lending decisions"</li>
      </ul>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Which is more accurate: Zestimate or Redfin Estimate?</h4>
      <p>Redfin Estimate is slightly more accurate (2.16% median error vs. 2.4% for Zillow) on on-market homes. Redfin has direct MLS access as a licensed brokerage.</p>

      <h4>Can I use Zestimate to price my home for sale?</h4>
      <p>No. Use it as a rough starting point, but get a professional CMA (Comparative Market Analysis) from a local real estate agent. Pricing too high or low costs money.</p>

      <h4>Why is my Zestimate lower than my neighbor's?</h4>
      <p>Differences in property features, recent sales, renovations, or data errors. Update your home facts on Zillow to improve accuracy.</p>

      <h4>Can lenders use Zestimate for mortgage approval?</h4>
      <p>No. Lenders require professional appraisals by licensed appraisers, not automated valuations. AVMs are not acceptable for mortgage underwriting.</p>

      <h4>How often do Zestimates update?</h4>
      <p>Daily. Redfin Estimates update multiple times per week. Both reflect recent sales and market changes, but with a 1-3 month data lag.</p>

      <p><strong>Use our calculator to compare Zestimate vs. Redfin Estimate accuracy for your property!</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'actualPrice',
        label: 'Actual Sale Price / Appraisal ($)',
        type: 'number',
        defaultValue: '500000',
        placeholder: '500000',
      },
      {
        name: 'zestimate',
        label: 'Zillow Zestimate ($)',
        type: 'number',
        defaultValue: '485000',
        placeholder: '485000',
      },
      {
        name: 'redfinEstimate',
        label: 'Redfin Estimate ($)',
        type: 'number',
        defaultValue: '510000',
        placeholder: '510000',
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'suburban', label: 'Suburban Tract Home' },
          { value: 'urban', label: 'Urban Condo/Townhouse' },
          { value: 'unique', label: 'Unique/Custom Home' },
          { value: 'luxury', label: 'Luxury Property ($1M+)' },
          { value: 'rural', label: 'Rural/Remote Property' },
        ],
        defaultValue: 'suburban',
      },
    ],
    results: [
      { label: 'Most Accurate Estimate', isCurrency: false },
      { label: 'Zillow Error', isCurrency: true },
      { label: 'Redfin Error', isCurrency: true },
      { label: 'Zillow Error Percentage', isCurrency: false },
      { label: 'Redfin Error Percentage', isCurrency: false },
      { label: 'Detailed Analysis', isCurrency: false },
    ],
    calculate: (values) => {
      const actualPrice = Number(values.actualPrice) || 500000;
      const zestimate = Number(values.zestimate) || 485000;
      const redfinEstimate = Number(values.redfinEstimate) || 510000;
      const propertyType = values.propertyType || 'suburban';

      const zillowError = Math.abs(actualPrice - zestimate);
      const redfinError = Math.abs(actualPrice - redfinEstimate);
      
      const zillowErrorPct = (zillowError / actualPrice) * 100;
      const redfinErrorPct = (redfinError / actualPrice) * 100;

      const zillowDirection = zestimate > actualPrice ? 'OVERESTIMATED' : 'UNDERESTIMATED';
      const redfinDirection = redfinEstimate > actualPrice ? 'OVERESTIMATED' : 'UNDERESTIMATED';

      let winner = '';
      let analysis = '';

      if (zillowErrorPct < redfinErrorPct) {
        winner = `🏆 ZILLOW ZESTIMATE (More Accurate)\n\nZillow was ${(redfinErrorPct - zillowErrorPct).toFixed(2)}% more accurate than Redfin for this property.`;
      } else if (redfinErrorPct < zillowErrorPct) {
        winner = `🏆 REDFIN ESTIMATE (More Accurate)\n\nRedfin was ${(zillowErrorPct - redfinErrorPct).toFixed(2)}% more accurate than Zillow for this property.`;
      } else {
        winner = `🤝 TIE - Both Equally Accurate\n\nBoth Zillow and Redfin had identical ${zillowErrorPct.toFixed(2)}% error rates for this property.`;
      }

      const expectedErrorRange: Record<string, {min: number, max: number}> = {
        suburban: { min: 2, max: 4 },
        urban: { min: 3, max: 6 },
        unique: { min: 10, max: 25 },
        luxury: { min: 8, max: 20 },
        rural: { min: 10, max: 20 },
      };

      const expected = expectedErrorRange[propertyType];
      const avgError = (zillowErrorPct + redfinErrorPct) / 2;

      let performanceAssessment = '';
      if (avgError < expected.min) {
        performanceAssessment = `✅ EXCELLENT - Both estimates performed BETTER than expected for ${propertyType === 'suburban' ? 'suburban tract homes' : propertyType === 'urban' ? 'urban condos' : propertyType === 'unique' ? 'unique properties' : propertyType === 'luxury' ? 'luxury properties' : 'rural properties'}. Typical error range is ${expected.min}-${expected.max}%, but your property had only ${avgError.toFixed(2)}% average error.`;
      } else if (avgError <= expected.max) {
        performanceAssessment = `✓ EXPECTED - Error rates are within normal range for ${propertyType === 'suburban' ? 'suburban tract homes' : propertyType === 'urban' ? 'urban condos' : propertyType === 'unique' ? 'unique properties' : propertyType === 'luxury' ? 'luxury properties' : 'rural properties'} (${expected.min}-${expected.max}%). Your property's ${avgError.toFixed(2)}% average error is typical.`;
      } else {
        performanceAssessment = `⚠️ HIGHER THAN EXPECTED - Both estimates performed worse than expected. Typical error for ${propertyType === 'suburban' ? 'suburban tract homes' : propertyType === 'urban' ? 'urban condos' : propertyType === 'unique' ? 'unique properties' : propertyType === 'luxury' ? 'luxury properties' : 'rural properties'} is ${expected.min}-${expected.max}%, but your property had ${avgError.toFixed(2)}% average error. This suggests data quality issues or unique property characteristics.`;
      }

      const analysis_text = `
<strong>🏘️ Zestimate vs. Redfin Estimate Accuracy Analysis:</strong>

<strong>Property Information:</strong>
• Actual Price/Appraisal: $${actualPrice.toLocaleString()}
• Property Type: ${propertyType === 'suburban' ? 'Suburban Tract Home' : propertyType === 'urban' ? 'Urban Condo/Townhouse' : propertyType === 'unique' ? 'Unique/Custom Home' : propertyType === 'luxury' ? 'Luxury Property ($1M+)' : 'Rural/Remote Property'}
• Expected Error Range: ${expected.min}-${expected.max}%

<strong>Zillow Zestimate Performance:</strong>
• Estimate: $${zestimate.toLocaleString()}
• Error: $${zillowError.toLocaleString()} (${zillowErrorPct.toFixed(2)}%)
• Direction: ${zillowDirection} by ${zillowErrorPct.toFixed(2)}%
• ${zillowErrorPct < 5 ? '✅ Within 5% (Good accuracy)' : zillowErrorPct < 10 ? '⚠️ 5-10% error (Moderate accuracy)' : '❌ >10% error (Poor accuracy)'}

<strong>Redfin Estimate Performance:</strong>
• Estimate: $${redfinEstimate.toLocaleString()}
• Error: $${redfinError.toLocaleString()} (${redfinErrorPct.toFixed(2)}%)
• Direction: ${redfinDirection} by ${redfinErrorPct.toFixed(2)}%
• ${redfinErrorPct < 5 ? '✅ Within 5% (Good accuracy)' : redfinErrorPct < 10 ? '⚠️ 5-10% error (Moderate accuracy)' : '❌ >10% error (Poor accuracy)'}

<strong>Comparison:</strong>
• Difference between estimates: $${Math.abs(zestimate - redfinEstimate).toLocaleString()} (${((Math.abs(zestimate - redfinEstimate) / actualPrice) * 100).toFixed(2)}%)
• ${Math.abs(zestimate - redfinEstimate) < actualPrice * 0.05 ? '✓ Estimates agree (within 5%)' : Math.abs(zestimate - redfinEstimate) < actualPrice * 0.10 ? '⚠️ Estimates differ moderately (5-10%)' : '❌ Estimates significantly disagree (>10%)'}

<strong>Overall Assessment:</strong>
${performanceAssessment}

<strong>What This Means for You:</strong>

${avgError < 5 ? `
<strong>RELIABLE ESTIMATES ✅</strong>

Both platforms provided accurate estimates (under 5% error). You can use these for:
• Initial pricing guidance
• Market value tracking
• Rough home equity calculations
• Ballpark negotiating range

However, still get a professional appraisal or CMA for:
• Final listing price decisions
• Mortgage applications
• Refinancing valuations
` : avgError < 10 ? `
<strong>MODERATE ACCURACY ⚠️</strong>

Estimates have 5-10% error - use with caution. Best for:
• General market value awareness
• Long-term equity tracking
• Rough pricing discussions

NOT recommended for:
• Final listing price (get professional CMA)
• Offer price decisions
• Mortgage underwriting
• Tax assessment appeals

Recommendation: Get professional opinion from local real estate agent.
` : `
<strong>UNRELIABLE ESTIMATES ❌</strong>

>10% error means these estimates are NOT reliable for your property. This is common for:
• Unique/custom homes
• Luxury properties
• Low-inventory markets
• Rural areas
• Recently renovated homes

<strong>DO NOT USE</strong> these estimates for any pricing decisions. Instead:
1. Hire professional appraiser ($400-$600)
2. Get CMA from experienced local agent (free)
3. Review actual comparable sales yourself
4. Update property details on Zillow/Redfin (may improve accuracy)

Your property needs human expertise, not algorithms.
`}

<strong>National Accuracy Benchmarks:</strong>

<strong>Zillow Zestimate:</strong>
• On-market homes: 2.4% median error (national)
• Your property: ${zillowErrorPct.toFixed(2)}% error (${zillowErrorPct < 2.4 ? 'BETTER' : zillowErrorPct === 2.4 ? 'EQUAL TO' : 'WORSE'} than average)
• Within 5% accuracy: 63% of homes nationally
• Your property: ${zillowErrorPct < 5 ? 'YES ✓' : 'NO ✗'}

<strong>Redfin Estimate:</strong>
• On-market homes: 2.16% median error (national)
• Your property: ${redfinErrorPct.toFixed(2)}% error (${redfinErrorPct < 2.16 ? 'BETTER' : redfinErrorPct === 2.16 ? 'EQUAL TO' : 'WORSE'} than average)
• Within 3% accuracy: 77.6% of homes nationally
• Your property: ${redfinErrorPct < 3 ? 'YES ✓' : 'NO ✗'}

<strong>Why Estimates May Be Inaccurate:</strong>

${propertyType === 'unique' ? `
<strong>Unique/Custom Properties:</strong>
• No comparable sales (algorithms struggle)
• Custom features not captured in data
• High-end finishes not reflected
• Unusual architecture or layout
• Limited transaction history

Solution: Professional appraisal essential
` : propertyType === 'luxury' ? `
<strong>Luxury Properties:</strong>
• Small sample size of comparable sales
• Unique amenities (pools, views, etc.)
• High-end finishes not standardized
• Buyer pool is emotional, not data-driven
• Privacy features command premiums

Solution: Luxury real estate specialist needed
` : propertyType === 'rural' ? `
<strong>Rural Properties:</strong>
• Few recent sales for comparison
• Large lot sizes vary significantly
• Unique property features (barns, acreage)
• Seasonal market fluctuations
• Limited MLS data availability

Solution: Local rural property expert
` : `
<strong>Possible Reasons for Error:</strong>
• Recent renovations not yet in data
• Unique features not captured
• Market volatility (rapid changes)
• Data entry errors in tax records
• Seasonal market fluctuations

Solution: Update property details on Zillow/Redfin
`}

<strong>Improving Estimate Accuracy:</strong>

1. <strong>Claim Your Home:</strong> Create accounts on Zillow and Redfin
2. <strong>Update Details:</strong> Correct square footage, bed/bath count
3. <strong>Add Renovations:</strong> Input recent upgrades and improvements
4. <strong>Upload Photos:</strong> Show off your upgrades visually
5. <strong>Correct Errors:</strong> Fix any wrong information
6. <strong>Wait:</strong> Estimates update daily/weekly after changes

<strong>💡 Professional Recommendations:</strong>

${avgError < 5 ? `
<strong>For Sellers:</strong>
Use estimates as baseline, then:
• Get free CMA from 2-3 local agents
• Compare to recent neighborhood sales
• Price 3-5% above estimate in hot market
• Price at/below estimate in slow market

<strong>For Buyers:</strong>
• Estimates provide negotiating baseline
• Offer based on comps, not estimates alone
• Budget for professional appraisal ($400-$600)
• If estimates disagree >5%, investigate why
` : `
<strong>For Sellers:</strong>
⚠️ DO NOT rely on these estimates. They're ${avgError.toFixed(1)}% off!
• Hire professional appraiser ($400-$600)
• Get detailed CMA from experienced agent
• Review actual comparable sales yourself
• Consider 2-3 agent opinions for pricing

<strong>For Buyers:</strong>
⚠️ Estimates unreliable for offers on this type of property.
• Always get professional appraisal
• Analyze recent comparable sales yourself
• Don't trust online estimates for bidding
• Work with experienced buyer's agent
`}

<strong>Bottom Line:</strong>
${zillowErrorPct < redfinErrorPct ? `
Zillow was more accurate (${zillowErrorPct.toFixed(2)}% vs ${redfinErrorPct.toFixed(2)}%), but ${avgError < 5 ? 'both are reasonably reliable for rough estimates' : avgError < 10 ? 'neither should be solely relied upon for major decisions' : 'both are too inaccurate to trust - get professional valuation'}.
` : redfinErrorPct < zillowErrorPct ? `
Redfin was more accurate (${redfinErrorPct.toFixed(2)}% vs ${zillowErrorPct.toFixed(2)}%), ${avgError < 5 ? 'and both are reasonably reliable for rough estimates' : avgError < 10 ? 'but neither should be solely relied upon for major decisions' : 'but both are too inaccurate to trust - get professional valuation'}.
` : `
Both tied with ${avgError.toFixed(2)}% error. ${avgError < 5 ? 'Both are reasonably reliable for rough estimates' : avgError < 10 ? 'Neither should be solely relied upon for major decisions' : 'Both are too inaccurate to trust - get professional valuation'}.
`}
`;

      return [
        { label: 'Most Accurate Estimate', value: winner, isCurrency: false },
        { label: 'Zillow Error', value: zillowError, isCurrency: true },
        { label: 'Redfin Error', value: redfinError, isCurrency: true },
        { label: 'Zillow Error Percentage', value: `${zillowErrorPct.toFixed(2)}% (${zillowDirection})`, isCurrency: false },
        { label: 'Redfin Error Percentage', value: `${redfinErrorPct.toFixed(2)}% (${redfinDirection})`, isCurrency: false },
        { label: 'Detailed Analysis', value: analysis_text, isCurrency: false },
      ];
    },
  },
};
