import { CalculatorContent } from '@/types';

export const CHANGE_ORDER_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Change Order Cost Calculator',
  description: 'Calculate and track construction change order costs including materials, labor, and markups.',
  slug: 'change-order-cost-calculator',
  icon: '📋',
  category: 'Construction & Development',
  article: {
    title: 'Understanding Construction Change Orders',
    content: `
    <h2>What is a Change Order?</h2>
    <p>A change order is a formal document that modifies the original construction contract. It represents any alteration to the scope of work, materials, timeline, or cost that was originally agreed upon. Change orders are a normal part of construction projects, but they can significantly impact your budget if not managed properly.</p>

    <h3>Common Reasons for Change Orders</h3>
    <ul>
      <li><strong>Design Changes:</strong> Owner-requested modifications to plans or specifications</li>
      <li><strong>Unforeseen Conditions:</strong> Hidden structural issues, soil problems, or utility conflicts</li>
      <li><strong>Code Requirements:</strong> Building code updates or inspector-required modifications</li>
      <li><strong>Material Availability:</strong> Substitutions due to supply chain issues or discontinued products</li>
      <li><strong>Scope Additions:</strong> Additional work requested during construction</li>
    </ul>

    <h3>Typical Change Order Markup Structures</h3>
    <p>Contractors typically apply markups to change orders to cover overhead and profit. Understanding these structures helps you evaluate if costs are reasonable:</p>
    <ul>
      <li><strong>10-15% Markup:</strong> Common for straightforward changes with minimal coordination</li>
      <li><strong>15-20% Markup:</strong> Standard for most change orders requiring moderate effort</li>
      <li><strong>20-25% Markup:</strong> Applied to complex changes requiring significant coordination</li>
      <li><strong>25%+ Markup:</strong> May apply to emergency work or highly specialized changes</li>
    </ul>

    <h3>How to Minimize Change Order Costs</h3>
    <p>While some change orders are unavoidable, you can minimize their impact:</p>
    <ol>
      <li><strong>Invest in Thorough Planning:</strong> Detailed plans and specifications reduce surprises</li>
      <li><strong>Conduct Pre-Construction Inspections:</strong> Identify potential issues before work begins</li>
      <li><strong>Make Decisions Early:</strong> Finalize selections for materials and finishes before construction starts</li>
      <li><strong>Review Change Orders Carefully:</strong> Request itemized breakdowns of material and labor costs</li>
      <li><strong>Negotiate Markup Caps:</strong> Include maximum markup percentages in your original contract</li>
      <li><strong>Batch Changes Together:</strong> Combining multiple changes can reduce overall markups</li>
    </ol>

    <h3>When Are Change Orders Reasonable?</h3>
    <p>Change orders are generally reasonable when:</p>
    <ul>
      <li>They address conditions that couldn't have been anticipated</li>
      <li>They reflect documented changes requested by the owner</li>
      <li>Material and labor costs are itemized and verifiable</li>
      <li>Markup percentages align with industry standards or contract terms</li>
      <li>The timeline impact is clearly explained</li>
    </ul>

    <h3>Red Flags to Watch For</h3>
    <p>Be cautious of change orders that:</p>
    <ul>
      <li>Lack itemized cost breakdowns</li>
      <li>Include excessive or unexplained markups</li>
      <li>Address work that should have been in the original scope</li>
      <li>Are presented verbally without proper documentation</li>
      <li>Require immediate approval without time for review</li>
    </ul>

    <h3>Best Practices for Managing Change Orders</h3>
    <p>Follow these practices to maintain control over your construction budget:</p>
    <ol>
      <li><strong>Document Everything:</strong> Keep written records of all change requests and approvals</li>
      <li><strong>Require Written Estimates:</strong> Never approve verbal change orders</li>
      <li><strong>Track Cumulative Impact:</strong> Monitor how changes affect total project cost</li>
      <li><strong>Set Contingency Budget:</strong> Reserve 10-15% of project cost for unexpected changes</li>
      <li><strong>Review Contract Terms:</strong> Understand your change order procedures and dispute resolution options</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'originalContractAmount',
        label: 'Original Contract Amount ($)',
        type: 'number',
        defaultValue: 250000,
        placeholder: 'Enter original contract amount',
      },
      {
        name: 'changeOrderDescription',
        label: 'Change Order Description',
        type: 'text',
        defaultValue: '',
        placeholder: 'Describe the change order (optional)',
      },
      {
        name: 'materialCost',
        label: 'Material Cost ($)',
        type: 'number',
        defaultValue: 5000,
        placeholder: 'Enter material costs',
      },
      {
        name: 'laborCost',
        label: 'Labor Cost ($)',
        type: 'number',
        defaultValue: 3000,
        placeholder: 'Enter labor costs',
      },
      {
        name: 'markupPercentage',
        label: 'Contractor Markup (%)',
        type: 'number',
        defaultValue: 15,
        placeholder: 'Enter markup percentage',
      },
      {
        name: 'numberOfChangeOrders',
        label: 'Number of Change Orders (Including This One)',
        type: 'number',
        defaultValue: 1,
        placeholder: 'Total number of change orders',
      },
      {
        name: 'previousChangeOrdersTotal',
        label: 'Previous Change Orders Total ($)',
        type: 'number',
        defaultValue: 0,
        placeholder: 'Sum of previous change orders',
      },
    ],
    results: [
      { label: 'This Change Order Total', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Percentage Increase', isCurrency: false },
      { label: 'Cumulative Change Orders', isCurrency: true },
      { label: 'Material Cost', isCurrency: true },
      { label: 'Labor Cost', isCurrency: true },
      { label: 'Markup Amount', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        originalContractAmount,
        materialCost,
        laborCost,
        markupPercentage,
        previousChangeOrdersTotal,
      } = values;

      const baseCost = (Number(materialCost) || 0) + (Number(laborCost) || 0);
      const markupAmount = baseCost * ((Number(markupPercentage) || 0) / 100);
      const thisChangeOrderTotal = baseCost + markupAmount;
      const cumulativeChangeOrders = (Number(previousChangeOrdersTotal) || 0) + thisChangeOrderTotal;
      const originalAmount = Number(originalContractAmount) || 0;
      const totalProjectCost = originalAmount + cumulativeChangeOrders;
      const percentageIncrease = originalAmount > 0 ? (cumulativeChangeOrders / originalAmount) * 100 : 0;

      return [
        { label: 'This Change Order Total', value: thisChangeOrderTotal.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Percentage Increase', value: `${percentageIncrease.toFixed(2)}%`, isCurrency: false },
        { label: 'Cumulative Change Orders', value: cumulativeChangeOrders.toFixed(2), isCurrency: true },
        { label: 'Material Cost', value: Number(materialCost).toFixed(2), isCurrency: true },
        { label: 'Labor Cost', value: Number(laborCost).toFixed(2), isCurrency: true },
        { label: 'Markup Amount', value: markupAmount.toFixed(2), isCurrency: true },
      ];
    },
  },
};
