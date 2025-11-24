import { CalculatorContent } from '@/types';

export const GIFTS_CLIENT_TAX_DEDUCTION_CONTENT: CalculatorContent = {
  title: 'Gifts (Client) Tax Deduction',
  description: 'Calculate tax-deductible client gift expenses for real estate professionals with the $25 limit per person rules.',
  slug: 'gifts-client-tax-deduction',
  icon: '🎁',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Deducting Client Gifts: Rules and Best Practices for Real Estate',
    content: `
    <h2>Understanding Client Gift Tax Deductions</h2>
    <p>Real estate agents and professionals often give gifts to clients, prospects, and business contacts to build relationships and show appreciation. While these gifts can be valuable for your business, the IRS strictly limits how much you can deduct. Understanding the $25 per person rule and proper documentation requirements is essential for claiming these deductions correctly.</p>
    
    <h3>The $25 Per Person Limit Rule</h3>
    <p>The fundamental rule for business gift deductions:</p>
    <ul>
      <li><strong>Maximum Deduction:</strong> $25 per person per year</li>
      <li><strong>Unchanged Since 1962:</strong> This limit has not been adjusted for inflation</li>
      <li><strong>Per Person:</strong> The limit applies to each individual recipient, not per household</li>
      <li><strong>Annual Limit:</strong> Resets each tax year</li>
      <li><strong>Can Spend More:</strong> You can give gifts worth more, but can only deduct $25</li>
    </ul>

    <h3>What Counts as a Business Gift?</h3>
    <p>Deductible business gifts include:</p>
    <ul>
      <li><strong>Closing Gifts:</strong> Gifts given to buyers or sellers at closing</li>
      <li><strong>Appreciation Gifts:</strong> Thank you gifts for referrals or repeat business</li>
      <li><strong>Holiday Gifts:</strong> Seasonal gifts sent to clients and business contacts</li>
      <li><strong>Birthday Gifts:</strong> Gifts given to clients on their birthday</li>
      <li><strong>Home Anniversary:</strong> Gifts celebrating a client's home purchase anniversary</li>
      <li><strong>Promotional Items:</strong> Branded items given to clients (subject to exceptions)</li>
    </ul>

    <h3>Exceptions to the $25 Limit</h3>
    <p>These items are NOT subject to the $25 limit:</p>
    <ul>
      <li><strong>De Minimis Items:</strong> Items costing $4 or less with your name/logo permanently imprinted</li>
      <li><strong>Promotional Materials:</strong> Pens, calendars, key chains with permanent company branding</li>
      <li><strong>Signs or Display Racks:</strong> Business promotional displays</li>
      <li><strong>Gifts to Employees:</strong> Gifts to your employees (different rules apply)</li>
      <li><strong>Charitable Donations:</strong> Donations made on behalf of a client to charity (different category)</li>
    </ul>

    <h3>Husband and Wife Rule</h3>
    <p>Special rules for married couples:</p>
    <ul>
      <li><strong>Treated as One:</strong> A married couple counts as one person for the $25 limit</li>
      <li><strong>$25 Total:</strong> You can only deduct $25 total for gifts to both spouses combined</li>
      <li><strong>Exception:</strong> If spouses have separate business relationships with you, they may each get $25</li>
      <li><strong>Household Gifts:</strong> A gift to the entire household (fruit basket, etc.) counts as one $25 deduction</li>
    </ul>

    <h3>Gifts vs. Entertainment</h3>
    <p>Important distinctions:</p>
    <ul>
      <li><strong>Tickets - You Don't Attend:</strong> Treated as a gift (subject to $25 limit)</li>
      <li><strong>Tickets - You Attend:</strong> Treated as entertainment (0% deductible under current law)</li>
      <li><strong>Gift Certificates:</strong> Generally treated as a gift under the $25 limit</li>
      <li><strong>Cash Gifts:</strong> Cash or cash equivalents to clients are generally not deductible</li>
    </ul>

    <h3>How to Use the Client Gifts Calculator</h3>
    <p>This calculator helps you determine your allowable gift deductions. You will need to provide:</p>
    <ul>
      <li><strong>Number of Gift Recipients:</strong> How many people received gifts</li>
      <li><strong>Average Gift Cost:</strong> Average cost per gift</li>
      <li><strong>De Minimis Items Cost:</strong> Cost of promotional items under $4 with logo</li>
      <li><strong>Employee Gifts:</strong> Gifts to your employees (tracked separately)</li>
    </ul>

    <h3>Documentation Requirements</h3>
    <p>Maintain detailed records for all client gifts:</p>
    <ul>
      <li><strong>Receipt or Proof:</strong> Receipt showing the cost of the gift</li>
      <li><strong>Date:</strong> When the gift was given</li>
      <li><strong>Recipient Name:</strong> Who received the gift</li>
      <li><strong>Business Relationship:</strong> How the recipient relates to your business</li>
      <li><strong>Business Purpose:</strong> Reason for the gift (closing gift, referral thanks, holiday)</li>
      <li><strong>Description:</strong> What the gift was</li>
    </ul>

    <h3>Tax-Smart Gift Giving Strategies</h3>
    <ul>
      <li><strong>Stay Under $25:</strong> Consider giving gifts worth $25 or less to maximize deductibility</li>
      <li><strong>Use Promotional Items:</strong> Give logo items worth $4 or less - no limit on these</li>
      <li><strong>Group Gifts:</strong> Give one gift per household rather than individual gifts to spouses</li>
      <li><strong>Track Carefully:</strong> Maintain a gift log to avoid giving multiple taxable gifts to same person</li>
      <li><strong>Consider Alternatives:</strong> Charitable donations in client's name may provide better deduction</li>
    </ul>

    <h3>Popular Real Estate Gift Ideas Under $25</h3>
    <ul>
      <li><strong>Home Maintenance Book:</strong> Useful reference guide for new homeowners</li>
      <li><strong>Custom Doormat:</strong> Personalized welcome mat for their new home</li>
      <li><strong>Plant or Succulent:</strong> Low-maintenance housewarming plant</li>
      <li><strong>Candle or Air Freshener:</strong> Nice scent for their new space</li>
      <li><strong>Picture Frame:</strong> For their first family photo in new home</li>
      <li><strong>Gift Basket:</strong> Coffee, snacks, or local treats under $25</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li><strong>Deducting Full Amount:</strong> Deducting more than $25 even though gift cost more</li>
      <li><strong>Poor Documentation:</strong> Not keeping receipts and gift logs</li>
      <li><strong>Counting Spouses Separately:</strong> Giving $25 to each spouse and deducting $50</li>
      <li><strong>Confusing Entertainment:</strong> Treating tickets (when you attend) as gifts</li>
      <li><strong>Missing De Minimis:</strong> Not taking advantage of unlimited logo items under $4</li>
    </ul>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. The $25 business gift limit has remained unchanged since 1962 despite significant inflation. While this makes the deduction less valuable, proper documentation is still essential. Gifts to employees follow different rules and may be taxable income to them. Cash and cash equivalent gifts are generally not deductible business expenses. Always consult with a qualified tax professional or CPA for guidance on your specific gift-giving practices.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your business expense deductions with our <strong>Meals & Entertainment Deduction Calculator</strong>, <strong>Home Office Deduction Calculator</strong>, and <strong>Travel Deduction Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'numberOfRecipients',
        label: 'Number of Gift Recipients',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'averageGiftCost',
        label: 'Average Gift Cost Per Person',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'deMinimisItems',
        label: 'De Minimis Items Cost (logo items <$4)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'employeeGifts',
        label: 'Employee Gifts (separate tracking)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Total Gifts Spent', isCurrency: true },
      { label: 'Deductible Client Gifts ($25/person)', isCurrency: true },
      { label: 'Deductible De Minimis Items', isCurrency: true },
      { label: 'Total Deductible Gift Expenses', isCurrency: true },
      { label: 'Non-Deductible Amount', isCurrency: true },
    ],
    calculate: (values) => {
      const { numberOfRecipients, averageGiftCost, deMinimisItems, employeeGifts } = values;
      
      const totalGiftsSpent = numberOfRecipients * averageGiftCost;
      const maxDeduction = numberOfRecipients * 25;
      const deductibleClientGifts = Math.min(totalGiftsSpent, maxDeduction);
      const deductibleDeMinimis = deMinimisItems;
      const totalDeductible = deductibleClientGifts + deductibleDeMinimis + employeeGifts;
      const nonDeductible = totalGiftsSpent - deductibleClientGifts;

      return [
        { label: 'Total Gifts Spent', value: totalGiftsSpent.toFixed(2), isCurrency: true },
        { label: 'Deductible Client Gifts ($25/person)', value: deductibleClientGifts.toFixed(2), isCurrency: true },
        { label: 'Deductible De Minimis Items', value: deductibleDeMinimis.toFixed(2), isCurrency: true },
        { label: 'Total Deductible Gift Expenses', value: totalDeductible.toFixed(2), isCurrency: true },
        { label: 'Non-Deductible Amount', value: nonDeductible.toFixed(2), isCurrency: true },
      ];
    },
  },
};