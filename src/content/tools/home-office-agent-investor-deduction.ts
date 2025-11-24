import { CalculatorContent } from '@/types';

export const HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT: CalculatorContent = {
  title: 'Home Office (Agent/Investor) Deduction',
  description: 'Calculate home office deductions for real estate agents and investors using simplified or regular methods.',
  slug: 'home-office-agent-investor-deduction',
  icon: '🏢',
  category: 'Tax Strategy & Entity Planning',
  article: {
    title: 'Maximizing Home Office Deductions for Real Estate Professionals',
    content: `
    <h2>Understanding the Home Office Deduction</h2>
    <p>Real estate agents, brokers, and investors who use part of their home regularly and exclusively for business may be eligible for a valuable home office deduction. This deduction allows you to write off a portion of your housing costs against your business income, potentially saving thousands in taxes each year.</p>
    
    <h3>Qualifying for the Home Office Deduction</h3>
    <p>To qualify, your home office must meet these requirements:</p>
    <ul>
      <li><strong>Regular and Exclusive Use:</strong> The space must be used regularly and exclusively for business (no dual-purpose rooms)</li>
      <li><strong>Principal Place of Business:</strong> Your home office must be your principal place of business, OR</li>
      <li><strong>Meeting Place:</strong> Used to meet with clients, customers, or patients, OR</li>
      <li><strong>Separate Structure:</strong> A detached structure used for business (garage, studio)</li>
    </ul>

    <h3>Two Methods for Calculating Your Deduction</h3>
    <p><strong>Simplified Method:</strong></p>
    <ul>
      <li>Deduct $5 per square foot of home office space</li>
      <li>Maximum 300 square feet ($1,500 maximum deduction)</li>
      <li>No depreciation or home expense documentation required</li>
      <li>Quick and easy, but may result in smaller deduction</li>
    </ul>

    <p><strong>Regular Method:</strong></p>
    <ul>
      <li>Calculate actual business use percentage of home</li>
      <li>Deduct that percentage of allowable home expenses</li>
      <li>Requires detailed expense tracking and documentation</li>
      <li>Typically results in larger deduction for significant office spaces</li>
    </ul>

    <h3>Deductible Expenses Under Regular Method</h3>
    <p><strong>Direct Expenses (100% deductible):</strong></p>
    <ul>
      <li>Painting or repairs made solely to the home office</li>
      <li>Furniture and equipment for the office</li>
    </ul>

    <p><strong>Indirect Expenses (business % deductible):</strong></p>
    <ul>
      <li><strong>Mortgage Interest:</strong> Business portion of mortgage interest</li>
      <li><strong>Property Taxes:</strong> Business portion of real estate taxes</li>
      <li><strong>Utilities:</strong> Electricity, gas, water, internet, trash</li>
      <li><strong>Insurance:</strong> Homeowners or renters insurance</li>
      <li><strong>Repairs and Maintenance:</strong> General home repairs</li>
      <li><strong>Depreciation:</strong> Business portion of home depreciation</li>
    </ul>

    <h3>How to Use the Home Office Calculator</h3>
    <p>This calculator helps you compare both methods and find your maximum deduction. You will need to provide:</p>
    <ul>
      <li><strong>Home Office Square Footage:</strong> Size of your dedicated office space</li>
      <li><strong>Total Home Square Footage:</strong> Total livable square footage of your home</li>
      <li><strong>Annual Home Expenses:</strong> Total of mortgage interest, taxes, insurance, utilities, repairs (for regular method)</li>
      <li><strong>Direct Office Expenses:</strong> Expenses solely for the office space</li>
    </ul>

    <h3>Special Considerations for Real Estate Professionals</h3>
    <ul>
      <li><strong>Employee vs. Self-Employed:</strong> Employee real estate agents face stricter rules under TCJA (no deduction for tax years 2018-2025)</li>
      <li><strong>Independent Contractors:</strong> Agents working as independent contractors can claim the deduction</li>
      <li><strong>Real Estate Investors:</strong> Can claim deduction if home is principal place of business for managing investments</li>
      <li><strong>Administrative Activities:</strong> Managing investments, keeping books, or scheduling can qualify as principal business activities</li>
    </ul>

    <h3>Documentation Requirements</h3>
    <p>Maintain thorough records including:</p>
    <ul>
      <li><strong>Floor Plan:</strong> Diagram showing office space dimensions and location</li>
      <li><strong>Photos:</strong> Pictures of your home office setup</li>
      <li><strong>Expense Receipts:</strong> All home-related expense documentation</li>
      <li><strong>Usage Log:</strong> Records showing exclusive business use</li>
      <li><strong>Client Meeting Records:</strong> Documentation of client meetings held in the office</li>
    </ul>

    <h3>Depreciation Recapture Warning</h3>
    <p>Under the regular method, you must depreciate the business portion of your home. When you sell your home, this depreciation may be subject to recapture (taxed at up to 25%). This doesn't apply to the simplified method, making it attractive for agents who may sell their home.</p>

    <h3>Important Considerations</h3>
    <p><strong>Note:</strong> This calculator provides estimates for tax planning purposes. Home office deduction rules are complex and have changed significantly under the Tax Cuts and Jobs Act (TCJA). Employee real estate agents working for a broker typically cannot claim this deduction for 2018-2025. Independent contractor agents and self-employed investors generally can. The exclusive use test is strictly enforced - using your office for personal activities disqualifies the space. Always consult with a qualified tax professional or CPA to determine your eligibility and calculate your exact deduction.</p>

    <h3>Additional Resources</h3>
    <p>Maximize your business deductions with our <strong>Automobile Deduction Calculator</strong>, <strong>Travel Deduction Calculator</strong>, and <strong>Depreciation Calculator</strong>.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'officeSquareFeet',
        label: 'Home Office Square Feet',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'totalSquareFeet',
        label: 'Total Home Square Feet',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'annualHomeExpenses',
        label: 'Annual Home Expenses',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'directOfficeExpenses',
        label: 'Direct Office Expenses',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [
      { label: 'Business Use Percentage', isPercentage: true },
      { label: 'Simplified Method Deduction', isCurrency: true },
      { label: 'Regular Method Deduction', isCurrency: true },
      { label: 'Recommended Method', isText: true },
    ],
    calculate: (values) => {
      const { officeSquareFeet, totalSquareFeet, annualHomeExpenses, directOfficeExpenses } = values;
      
      const businessPercentage = (officeSquareFeet / totalSquareFeet) * 100;
      
      const simplifiedDeduction = Math.min(officeSquareFeet * 5, 1500);
      
      const indirectExpenses = annualHomeExpenses * (officeSquareFeet / totalSquareFeet);
      const regularMethodDeduction = indirectExpenses + directOfficeExpenses;
      
      const recommendedMethod = regularMethodDeduction > simplifiedDeduction ? 'Regular Method' : 'Simplified Method';

      return [
        { label: 'Business Use Percentage', value: businessPercentage.toFixed(2) + '%', isCurrency: false },
        { label: 'Simplified Method Deduction', value: simplifiedDeduction.toFixed(2), isCurrency: true },
        { label: 'Regular Method Deduction', value: regularMethodDeduction.toFixed(2), isCurrency: true },
        { label: 'Recommended Method', value: recommendedMethod, isCurrency: false },
      ];
    },
  },
};