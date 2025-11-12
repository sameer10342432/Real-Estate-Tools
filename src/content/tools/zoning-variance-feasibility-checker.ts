import { CalculatorContent } from '@/types';

export const ZONING_VARIANCE_FEASIBILITY_CHECKER_CONTENT: CalculatorContent = {
  title: 'Zoning Variance Feasibility Checker',
  description: 'Analyze the feasibility and financial impact of pursuing zoning variances for real estate development projects including costs, timeline, and approval probability.',
  slug: 'zoning-variance-feasibility-checker',
  icon: '📋',
  category: 'Investment Analysis',
  article: {
    title: 'Zoning Variances: Complete Guide to Feasibility, Costs, and Approval Strategies',
    content: `
    <h2>What is a Zoning Variance?</h2>
    <p>A zoning variance is a legal exception to current zoning regulations that allows a property owner to use land in a way that would otherwise be prohibited. Variances are granted when strict application of zoning rules would create an undue hardship and the proposed use won't substantially harm surrounding properties.</p>
    
    <h3>Types of Zoning Variances</h3>
    <ul>
      <li><strong>Use Variance:</strong> Permission to use property for a use not allowed in that zoning district (very difficult to obtain)</li>
      <li><strong>Area/Dimensional Variance:</strong> Exception to setback, height, lot size, or coverage requirements (more commonly granted)</li>
      <li><strong>Special Exception:</strong> Use allowed by zoning but requires special approval (easier than variance)</li>
      <li><strong>Conditional Use Permit:</strong> Allowed use with specific conditions attached</li>
    </ul>

    <h3>Legal Standards for Granting Variances</h3>
    <p>Most jurisdictions require applicants to prove:</p>
    <ul>
      <li><strong>Unique Hardship:</strong> Property has unique physical characteristics (topography, shape, size) that create hardship</li>
      <li><strong>Not Self-Created:</strong> Hardship was not created by the applicant's own actions</li>
      <li><strong>Minimum Variance:</strong> Request is the minimum necessary to provide relief</li>
      <li><strong>No Substantial Detriment:</strong> Variance won't harm public good or neighboring properties</li>
      <li><strong>Preserves Intent:</strong> Variance is consistent with the spirit and intent of zoning code</li>
    </ul>

    <h3>Variance Application Process</h3>
    <ol>
      <li><strong>Pre-Application Meeting:</strong> Discuss proposal with zoning administrator (1-2 weeks)</li>
      <li><strong>Application Preparation:</strong> Gather documents, surveys, plans (2-4 weeks)</li>
      <li><strong>Filing Application:</strong> Submit complete application with fees ($500-$5,000+)</li>
      <li><strong>Staff Review:</strong> Planning staff analysis and report (4-8 weeks)</li>
      <li><strong>Public Notice:</strong> Neighbors notified, signs posted (2-4 weeks before hearing)</li>
      <li><strong>Public Hearing:</strong> Zoning board or planning commission hearing</li>
      <li><strong>Board Decision:</strong> Approval, denial, or approval with conditions</li>
      <li><strong>Appeal Period:</strong> Time for appeals (typically 30 days)</li>
    </ol>

    <h3>Costs Associated with Variance Applications</h3>
    <ul>
      <li><strong>Application Fees:</strong> $500-$5,000 depending on jurisdiction and variance type</li>
      <li><strong>Survey and Plans:</strong> $2,000-$10,000 for professional surveys and site plans</li>
      <li><strong>Architectural Drawings:</strong> $3,000-$15,000 for detailed development plans</li>
      <li><strong>Legal Representation:</strong> $5,000-$25,000+ for experienced land use attorney</li>
      <li><strong>Engineering Studies:</strong> $5,000-$20,000 for traffic, environmental, or other studies</li>
      <li><strong>Consultant Fees:</strong> $5,000-$15,000 for land use planners and experts</li>
      <li><strong>Neighbor Outreach:</strong> $1,000-$5,000 for mailings and community meetings</li>
      <li><strong>Appeals and Litigation:</strong> $20,000-$100,000+ if variance is challenged in court</li>
    </ul>

    <h3>How to Use This Feasibility Checker</h3>
    <p>Input your variance project parameters:</p>
    <ul>
      <li><strong>Property Value:</strong> Current value of the property</li>
      <li><strong>Value With Variance:</strong> Expected value if variance is granted</li>
      <li><strong>Application Costs:</strong> All professional fees and application expenses</li>
      <li><strong>Expected Timeline:</strong> Months from filing to final decision</li>
      <li><strong>Approval Probability:</strong> Estimated likelihood of approval (1-100%)</li>
      <li><strong>Holding Costs:</strong> Monthly taxes, insurance, and loan costs during process</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Potential Value Increase:</strong> Added value if variance is approved</li>
      <li><strong>Total Costs:</strong> Application costs plus holding costs</li>
      <li><strong>Expected Value:</strong> Probability-weighted outcome</li>
      <li><strong>Risk-Adjusted ROI:</strong> Return considering approval probability</li>
      <li><strong>Breakeven Probability:</strong> Minimum approval rate needed to justify pursuit</li>
    </ul>

    <h3>Factors Affecting Variance Approval</h3>
    <p>Elements that increase approval likelihood:</p>
    <ul>
      <li><strong>Minor Request:</strong> Small deviations are more likely approved than major changes</li>
      <li><strong>Hardship Evidence:</strong> Clear documentation of unique property constraints</li>
      <li><strong>Neighbor Support:</strong> Letters of support from adjacent property owners</li>
      <li><strong>Compatible Design:</strong> Proposed use fits neighborhood character</li>
      <li><strong>Precedent:</strong> Similar variances granted in the area</li>
      <li><strong>Professional Presentation:</strong> High-quality plans and expert testimony</li>
      <li><strong>Public Benefit:</strong> Project provides community value</li>
    </ul>

    <h3>Factors Leading to Denial</h3>
    <ul>
      <li>Use variance requests (very difficult standard)</li>
      <li>Strong neighbor opposition and complaints</li>
      <li>Lack of demonstrated hardship</li>
      <li>Self-created hardship (bought with knowledge of restrictions)</li>
      <li>Excessive deviation from zoning requirements</li>
      <li>Potential negative impacts on neighborhood</li>
      <li>Speculation or investment hardship (not qualifying)</li>
    </ul>

    <h3>Building Your Case for Approval</h3>
    <p>Strengthen your variance application with:</p>
    <ul>
      <li><strong>Comprehensive Documentation:</strong> Professional surveys showing property constraints</li>
      <li><strong>Neighbor Outreach:</strong> Meet with neighbors before filing to address concerns</li>
      <li><strong>Alternative Analysis:</strong> Show why conforming development is not feasible</li>
      <li><strong>Expert Reports:</strong> Engineering or environmental studies supporting hardship</li>
      <li><strong>Design Excellence:</strong> High-quality architectural plans that enhance neighborhood</li>
      <li><strong>Precedent Research:</strong> Document similar variances approved in jurisdiction</li>
      <li><strong>Legal Representation:</strong> Hire experienced land use attorney for hearing</li>
    </ul>

    <h3>Alternatives to Variances</h3>
    <p>Consider these options before pursuing a variance:</p>
    <ul>
      <li><strong>Rezoning:</strong> Request zoning map amendment (longer process, affects area)</li>
      <li><strong>Special Exception:</strong> Apply for allowed conditional use (easier standard)</li>
      <li><strong>Planned Unit Development:</strong> Negotiate flexible zoning for larger projects</li>
      <li><strong>Property Combination:</strong> Merge lots to meet dimensional requirements</li>
      <li><strong>Design Modification:</strong> Adjust plans to conform to existing zoning</li>
      <li><strong>Different Property:</strong> Purchase conforming site instead</li>
    </ul>

    <h3>Timeline Considerations</h3>
    <p>Typical variance timeline by jurisdiction:</p>
    <ul>
      <li><strong>Small Cities/Towns:</strong> 3-6 months from application to decision</li>
      <li><strong>Mid-Size Cities:</strong> 4-8 months including staff review and hearing</li>
      <li><strong>Large Cities:</strong> 6-12 months with complex review processes</li>
      <li><strong>With Opposition:</strong> Add 3-6 months for appeals and potential litigation</li>
      <li><strong>Court Appeals:</strong> 12-24+ months if case goes to court</li>
    </ul>

    <h3>Managing Opposition</h3>
    <p>Strategies to overcome neighbor concerns:</p>
    <ul>
      <li>Hold informal community meetings before official hearing</li>
      <li>Address specific concerns with design modifications</li>
      <li>Provide visual renderings showing compatibility</li>
      <li>Offer buffers, screening, or other mitigation measures</li>
      <li>Demonstrate how project benefits community</li>
      <li>Collect petition signatures from supporters</li>
    </ul>

    <h3>Conditional Approvals</h3>
    <p>Boards often approve variances with conditions such as:</p>
    <ul>
      <li>Enhanced landscaping or screening requirements</li>
      <li>Restricted hours of operation for commercial uses</li>
      <li>Parking or traffic mitigation measures</li>
      <li>Architectural design requirements</li>
      <li>Time limits on variance approval</li>
      <li>Periodic review or renewal requirements</li>
    </ul>

    <h3>Post-Approval Requirements</h3>
    <ul>
      <li>Record variance with property deed</li>
      <li>Comply with all conditions of approval</li>
      <li>Commence construction within specified timeframe</li>
      <li>Build according to approved plans (no modifications)</li>
      <li>Obtain building permits consistent with variance</li>
      <li>Variance may run with the land permanently</li>
    </ul>

    <h3>Financial Analysis Considerations</h3>
    <p>Evaluate variance pursuit based on:</p>
    <ul>
      <li><strong>Value Creation:</strong> Increased property value must significantly exceed costs</li>
      <li><strong>Probability-Weighted Returns:</strong> Factor in realistic approval odds</li>
      <li><strong>Opportunity Cost:</strong> Could capital achieve better returns elsewhere?</li>
      <li><strong>Time Value:</strong> 6-12 month delays reduce effective returns</li>
      <li><strong>Downside Risk:</strong> Costs are sunk even if variance is denied</li>
    </ul>

    <h3>Best Practices for Variance Success</h3>
    <ul>
      <li>Hire experienced local land use attorney from the start</li>
      <li>Research jurisdiction's variance history and standards</li>
      <li>Meet informally with planning staff early</li>
      <li>Invest in professional quality presentations</li>
      <li>Engage neighbors proactively and respectfully</li>
      <li>Request minimum variance necessary</li>
      <li>Attend other variance hearings to understand process</li>
      <li>Be prepared to accept reasonable conditions</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Buying property contingent on variance approval</li>
      <li>Underestimating costs and timeline</li>
      <li>Filing use variance when area variance needed</li>
      <li>Ignoring neighbor concerns until hearing</li>
      <li>Presenting amateur or incomplete applications</li>
      <li>Failing to demonstrate true hardship</li>
      <li>Missing application deadlines or requirements</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'currentValue',
        label: 'Current Property Value',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'valueWithVariance',
        label: 'Value With Variance Approved',
        type: 'number',
        defaultValue: 750000,
      },
      {
        name: 'applicationCosts',
        label: 'Total Application Costs',
        type: 'number',
        defaultValue: 35000,
      },
      {
        name: 'timelineMonths',
        label: 'Expected Timeline (Months)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'approvalProbability',
        label: 'Approval Probability (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'monthlyHoldingCosts',
        label: 'Monthly Holding Costs',
        type: 'number',
        defaultValue: 3000,
      },
    ],
    results: [
      { label: 'Potential Value Increase', isCurrency: true },
      { label: 'Total Holding Costs', isCurrency: true },
      { label: 'Total Investment in Variance', isCurrency: true },
      { label: 'Expected Value (Probability-Weighted)', isCurrency: true },
      { label: 'Net Expected Gain', isCurrency: true },
      { label: 'Risk-Adjusted ROI', isPercentage: true },
      { label: 'Breakeven Approval Probability', isPercentage: true },
      { label: 'Feasibility Assessment', isText: true },
    ],
    calculate: (values) => {
      const { currentValue, valueWithVariance, applicationCosts, timelineMonths, approvalProbability, monthlyHoldingCosts } = values;
      
      const potentialIncrease = valueWithVariance - currentValue;
      const totalHoldingCosts = monthlyHoldingCosts * timelineMonths;
      const totalInvestment = applicationCosts + totalHoldingCosts;
      const expectedValue = (valueWithVariance * (approvalProbability / 100)) + (currentValue * (1 - approvalProbability / 100));
      const netExpectedGain = expectedValue - currentValue - totalInvestment;
      const riskAdjustedROI = (netExpectedGain / totalInvestment) * 100;
      const breakevenProbability = (totalInvestment / potentialIncrease) * 100;
      
      let feasibility = 'Not Recommended';
      if (riskAdjustedROI > 50 && approvalProbability >= 60) {
        feasibility = 'Highly Favorable - Pursue Variance';
      } else if (riskAdjustedROI > 25 && approvalProbability >= 50) {
        feasibility = 'Moderately Favorable - Consider Pursuit';
      } else if (riskAdjustedROI > 0 && approvalProbability >= 40) {
        feasibility = 'Marginal - Proceed with Caution';
      }

      return [
        { label: 'Potential Value Increase', value: potentialIncrease.toFixed(2), isCurrency: true },
        { label: 'Total Holding Costs', value: totalHoldingCosts.toFixed(2), isCurrency: true },
        { label: 'Total Investment in Variance', value: totalInvestment.toFixed(2), isCurrency: true },
        { label: 'Expected Value (Probability-Weighted)', value: expectedValue.toFixed(2), isCurrency: true },
        { label: 'Net Expected Gain', value: netExpectedGain.toFixed(2), isCurrency: true },
        { label: 'Risk-Adjusted ROI', value: riskAdjustedROI.toFixed(2), isPercentage: true },
        { label: 'Breakeven Approval Probability', value: breakevenProbability.toFixed(2), isPercentage: true },
        { label: 'Feasibility Assessment', value: feasibility, isText: true },
      ];
    },
  },
};
