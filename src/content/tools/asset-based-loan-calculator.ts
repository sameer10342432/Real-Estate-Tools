import { CalculatorContent } from '@/types';

export const ASSET_BASED_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Asset-Based Loan Calculator',
  description: 'Calculate loan qualification based on total assets with the asset qualifier loan method. Determine loan-to-asset ratio, maximum loan amount, and asset coverage for mortgage approval.',
  icon: 'Building2',
  category: 'Non-QM Loans',
  slug: 'asset-based-loan-calculator',
  metaTitle: 'Asset-Based Loan Calculator | Asset Qualifier Mortgage',
  metaDescription: 'Calculate loan qualification based on total assets. Determine loan-to-asset ratio, maximum loan amount, and asset coverage ratio for asset qualifier mortgages.',
  article: {
    title: 'Asset-Based Loan Calculator: How Asset Qualifier Mortgages Work',
    content: `
    <h2>What is an Asset-Based Loan?</h2>
    <p>An asset-based loan (also known as an asset qualifier loan or asset-backed mortgage) is a type of Non-QM (Non-Qualified Mortgage) that uses your total assets—rather than income—as the primary qualification factor. Unlike asset depletion loans that calculate hypothetical income from assets, asset-based loans focus on the ratio between your assets and the requested loan amount.</p>

    <p>The core concept is straightforward: if your total qualifying assets significantly exceed the loan amount you're requesting, you present minimal risk to the lender regardless of your income situation. This makes asset-based loans ideal for borrowers with substantial net worth but unconventional income profiles.</p>

    <h3>How Asset-Based Loans Differ from Other Loan Types</h3>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>Qualification Basis</th>
        <th>Key Metric</th>
      </tr>
      <tr>
        <td>Traditional Mortgage</td>
        <td>Employment income</td>
        <td>Debt-to-Income Ratio</td>
      </tr>
      <tr>
        <td>Bank Statement Loan</td>
        <td>Bank deposits</td>
        <td>Average monthly deposits</td>
      </tr>
      <tr>
        <td>Asset Depletion Loan</td>
        <td>Assets ÷ loan term = income</td>
        <td>Monthly qualifying income</td>
      </tr>
      <tr>
        <td>Asset-Based Loan</td>
        <td>Total assets vs. loan amount</td>
        <td>Loan-to-Asset Ratio</td>
      </tr>
      <tr>
        <td>DSCR Loan</td>
        <td>Property rental income</td>
        <td>Debt Service Coverage Ratio</td>
      </tr>
    </table>

    <h2>How Asset-Based Loans Work</h2>
    <p>Lenders evaluate your total qualifying assets and compare them to your requested loan amount. The key metrics are:</p>

    <h3>Loan-to-Asset Ratio (LTA)</h3>
    <p>This is the primary qualification metric:</p>
    <pre>
Loan-to-Asset Ratio = (Requested Loan Amount ÷ Total Qualifying Assets) × 100
    </pre>
    <p>Most lenders require an LTA ratio of 70% or less, meaning your assets must be at least 1.43 times the loan amount.</p>

    <h3>Asset Coverage Ratio (ACR)</h3>
    <p>The inverse of LTA, showing how many times your assets "cover" the loan:</p>
    <pre>
Asset Coverage Ratio = Total Qualifying Assets ÷ Requested Loan Amount
    </pre>
    <p>A ratio of 1.5x or higher is typically required, meaning your assets are 1.5 times the loan amount.</p>

    <h3>Maximum Loan Amount</h3>
    <pre>
Maximum Loan Amount = Total Qualifying Assets × Maximum LTA Ratio
    </pre>
    <p>Example: $2,000,000 assets × 70% = $1,400,000 maximum loan</p>

    <h2>Types of Qualifying Assets</h2>

    <h3>Tier 1: Fully Liquid Assets (100% Counted)</h3>
    <ul>
      <li><strong>Cash Accounts:</strong> Checking, savings, money market</li>
      <li><strong>Certificates of Deposit:</strong> Including those not yet mature</li>
      <li><strong>US Treasury Securities:</strong> T-bills, notes, bonds</li>
      <li><strong>Money Market Funds:</strong> Highly liquid, stable value</li>
    </ul>

    <h3>Tier 2: Marketable Securities (70-90% Counted)</h3>
    <ul>
      <li><strong>Publicly Traded Stocks:</strong> Blue chips counted at higher rates</li>
      <li><strong>Corporate Bonds:</strong> Investment grade rated higher</li>
      <li><strong>Mutual Funds:</strong> Based on underlying holdings</li>
      <li><strong>ETFs:</strong> Exchange-traded funds</li>
      <li><strong>REITs:</strong> Real estate investment trusts (publicly traded)</li>
    </ul>

    <h3>Tier 3: Retirement Assets (60-70% Counted)</h3>
    <ul>
      <li><strong>401(k) Accounts:</strong> Discounted for penalties/taxes</li>
      <li><strong>Traditional IRAs:</strong> Subject to withdrawal taxes</li>
      <li><strong>Roth IRAs:</strong> Often counted at higher rate (contributions tax-free)</li>
      <li><strong>SEP IRAs:</strong> Self-employed retirement plans</li>
      <li><strong>403(b) and 457 Plans:</strong> Government/nonprofit retirement</li>
    </ul>

    <h3>Tier 4: Real Estate Equity (50-70% Counted)</h3>
    <ul>
      <li><strong>Investment Properties:</strong> Equity based on appraised value</li>
      <li><strong>Second Homes:</strong> Vacation properties</li>
      <li><strong>Land:</strong> Raw land or lots (often discounted more)</li>
      <li><strong>Commercial Properties:</strong> Rental buildings, retail</li>
    </ul>
    <p><strong>Note:</strong> Primary residence equity is typically NOT counted since it's being used or replaced.</p>

    <h3>Other Assets (Varies by Lender)</h3>
    <ul>
      <li><strong>Vested Stock Options:</strong> Value after exercise</li>
      <li><strong>Private Equity:</strong> Often heavily discounted or excluded</li>
      <li><strong>Business Ownership:</strong> May require valuation</li>
      <li><strong>Trust Assets:</strong> If beneficiary has access rights</li>
    </ul>

    <h2>Asset-Based Loan Requirements</h2>

    <h3>Typical Qualification Criteria</h3>
    <ul>
      <li><strong>Minimum Assets:</strong> $500,000-$1,000,000+ (varies by lender)</li>
      <li><strong>Loan-to-Asset Ratio:</strong> 70% or less (some allow 80%)</li>
      <li><strong>Credit Score:</strong> 680+ (some programs allow 660+)</li>
      <li><strong>Down Payment:</strong> 20-30% minimum</li>
      <li><strong>Loan Amounts:</strong> $250,000 to $5,000,000+</li>
      <li><strong>Property Types:</strong> Primary residence, second home, investment</li>
      <li><strong>Reserves:</strong> 6-24 months of mortgage payments post-closing</li>
    </ul>

    <h3>Documentation Required</h3>
    <ul>
      <li>2-3 months of statements for all asset accounts</li>
      <li>Proof of ownership (statements must show your name)</li>
      <li>Large deposit explanations (source of funds letters)</li>
      <li>Property appraisals for real estate equity claims</li>
      <li>Trust documents (if using trust assets)</li>
      <li>Business valuation (if counting business ownership)</li>
    </ul>

    <h2>Asset-Based Loan Calculation Example</h2>

    <h3>Borrower Profile: High-Net-Worth Entrepreneur</h3>
    <ul>
      <li><strong>Traditional Income:</strong> Minimal (reinvests in business)</li>
      <li><strong>Requested Loan:</strong> $800,000</li>
      <li><strong>Down Payment Available:</strong> $400,000 (33% of $1.2M home)</li>
    </ul>

    <h3>Asset Portfolio</h3>
    <table>
      <tr>
        <th>Asset Type</th>
        <th>Value</th>
        <th>Discount</th>
        <th>Qualifying Amount</th>
      </tr>
      <tr>
        <td>Cash/Savings</td>
        <td>$300,000</td>
        <td>100%</td>
        <td>$300,000</td>
      </tr>
      <tr>
        <td>Brokerage Account</td>
        <td>$600,000</td>
        <td>80%</td>
        <td>$480,000</td>
      </tr>
      <tr>
        <td>401(k)</td>
        <td>$400,000</td>
        <td>70%</td>
        <td>$280,000</td>
      </tr>
      <tr>
        <td>Investment Property Equity</td>
        <td>$350,000</td>
        <td>60%</td>
        <td>$210,000</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>$1,650,000</strong></td>
        <td></td>
        <td><strong>$1,270,000</strong></td>
      </tr>
    </table>

    <h3>Qualification Analysis</h3>
    <ul>
      <li><strong>Total Qualifying Assets:</strong> $1,270,000</li>
      <li><strong>Requested Loan:</strong> $800,000</li>
      <li><strong>Loan-to-Asset Ratio:</strong> 63% ✓ (under 70% limit)</li>
      <li><strong>Asset Coverage Ratio:</strong> 1.59x ✓ (exceeds 1.43x minimum)</li>
      <li><strong>Maximum Loan (at 70% LTA):</strong> $889,000</li>
    </ul>
    <p><strong>Result:</strong> Qualifies for the $800,000 loan request.</p>

    <h2>Pros and Cons of Asset-Based Loans</h2>

    <h3>Advantages</h3>
    <ul>
      <li><strong>No Income Verification:</strong> No W-2s, tax returns, or pay stubs required</li>
      <li><strong>Wealth-Based Qualification:</strong> Uses what you have, not what you earn</li>
      <li><strong>Faster Processing:</strong> Less documentation than traditional loans</li>
      <li><strong>Flexible Asset Types:</strong> Stocks, retirement accounts, real estate equity all count</li>
      <li><strong>High Loan Amounts:</strong> Available for jumbo loans up to $5M+</li>
      <li><strong>Investment Properties Allowed:</strong> Can use for rental purchases</li>
      <li><strong>No Employment Required:</strong> Retired, unemployed, or between jobs OK</li>
    </ul>

    <h3>Disadvantages</h3>
    <ul>
      <li><strong>High Asset Requirements:</strong> Need $500K+ in assets minimum</li>
      <li><strong>Higher Interest Rates:</strong> 0.5-1.5% above conventional rates</li>
      <li><strong>Larger Down Payments:</strong> 20-30% required</li>
      <li><strong>Asset Discounts:</strong> Not all assets count at full value</li>
      <li><strong>Limited Lender Options:</strong> Fewer lenders offer this product</li>
      <li><strong>Reserve Requirements:</strong> Must maintain 6-24 months reserves</li>
      <li><strong>Extensive Documentation:</strong> All assets must be fully documented</li>
    </ul>

    <h2>Asset-Based vs. DSCR Loans for Investors</h2>
    <p>For real estate investors, asset-based loans are an alternative to DSCR (Debt Service Coverage Ratio) loans:</p>
    <table>
      <tr>
        <th>Feature</th>
        <th>Asset-Based Loan</th>
        <th>DSCR Loan</th>
      </tr>
      <tr>
        <td>Qualification Basis</td>
        <td>Total assets</td>
        <td>Property rental income</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>High net worth investors</td>
        <td>Cash-flow positive properties</td>
      </tr>
      <tr>
        <td>Property Types</td>
        <td>Primary, second home, investment</td>
        <td>Investment properties only</td>
      </tr>
      <tr>
        <td>Down Payment</td>
        <td>20-30%</td>
        <td>20-25%</td>
      </tr>
      <tr>
        <td>Key Metric</td>
        <td>Loan-to-Asset Ratio < 70%</td>
        <td>DSCR > 1.0-1.25</td>
      </tr>
      <tr>
        <td>Rate Premium</td>
        <td>0.5-1.5%</td>
        <td>0.5-2.0%</td>
      </tr>
    </table>

    <h2>Strategies to Maximize Qualification</h2>
    <ul>
      <li><strong>Consolidate Accounts:</strong> Easier documentation with fewer accounts</li>
      <li><strong>Document All Assets:</strong> Don't leave qualifying assets out</li>
      <li><strong>Include Real Estate Equity:</strong> Investment properties add to total assets</li>
      <li><strong>Request Lower Loan Amount:</strong> Improves LTA ratio if borderline</li>
      <li><strong>Increase Down Payment:</strong> Reduces required loan amount</li>
      <li><strong>Season Large Deposits:</strong> Have assets in place 60+ days before applying</li>
      <li><strong>Roll Over 401(k) to IRA:</strong> May provide better documentation options</li>
    </ul>

    <h2>Comparing Loan Options for High-Net-Worth Borrowers</h2>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>When to Use</th>
        <th>Minimum Assets</th>
        <th>Rate Premium</th>
      </tr>
      <tr>
        <td>Asset-Based</td>
        <td>Have wealth, any income situation</td>
        <td>$500K+</td>
        <td>0.5-1.5%</td>
      </tr>
      <tr>
        <td>Asset Depletion</td>
        <td>Retirees, need income calculation</td>
        <td>$500K+</td>
        <td>0.25-0.75%</td>
      </tr>
      <tr>
        <td>Bank Statement</td>
        <td>Self-employed with deposits</td>
        <td>N/A (deposit-based)</td>
        <td>0.5-2.0%</td>
      </tr>
      <tr>
        <td>Jumbo Traditional</td>
        <td>High income, excellent credit</td>
        <td>Reserves only</td>
        <td>0-0.25%</td>
      </tr>
    </table>

    <h2>Common Questions</h2>

    <h3>Can I use my business as an asset?</h3>
    <p>Some lenders accept business ownership as an asset, but it typically requires a formal business valuation and is heavily discounted (often 50% or less).</p>

    <h3>What if my assets are in a trust?</h3>
    <p>Trust assets can qualify if you have documented access rights. Revocable living trusts are generally accepted; irrevocable trusts depend on terms.</p>

    <h3>Are cryptocurrency holdings counted?</h3>
    <p>Most lenders do not count cryptocurrency due to volatility. Some may count it at 30-50% if converted to cash 60+ days before application.</p>

    <h3>Can I use an asset-based loan for investment property?</h3>
    <p>Yes, most asset-based loan programs allow primary residence, second home, and investment property purchases.</p>

    <h2>How to Use This Calculator</h2>
    <p>Enter your various asset types and requested loan amount to calculate your qualification. The calculator will show:</p>
    <ul>
      <li>Total qualifying assets after discounts</li>
      <li>Loan-to-Asset ratio for your requested loan</li>
      <li>Asset coverage ratio</li>
      <li>Maximum loan amount you qualify for</li>
      <li>Estimated monthly payment</li>
      <li>Whether you meet typical qualification thresholds</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'totalLiquidAssets',
        label: 'Total Liquid Assets (Cash, Savings, CDs) ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'totalRetirementAssets',
        label: 'Total Retirement Assets (401k, IRA) ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'realEstateEquity',
        label: 'Investment Real Estate Equity ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'otherAssets',
        label: 'Other Assets (Stocks, Bonds, ETFs) ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'requestedLoanAmount',
        label: 'Requested Loan Amount ($)',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'select',
        defaultValue: '30',
        options: [
          { value: '30', label: '30 Years' },
          { value: '25', label: '25 Years' },
          { value: '20', label: '20 Years' },
          { value: '15', label: '15 Years' },
        ],
      },
    ],
    results: [
      { label: 'Liquid Assets (100% counted)', isCurrency: true },
      { label: 'Retirement Assets (70% counted)', isCurrency: true },
      { label: 'Real Estate Equity (60% counted)', isCurrency: true },
      { label: 'Other Assets (80% counted)', isCurrency: true },
      { label: 'Total Qualifying Assets', isCurrency: true },
      { label: 'Requested Loan Amount', isCurrency: true },
      { label: 'Loan-to-Asset Ratio (LTA)', isCurrency: false },
      { label: 'Asset Coverage Ratio', isCurrency: false },
      { label: 'Maximum Loan Amount (70% LTA)', isCurrency: true },
      { label: 'Estimated Monthly Payment', isCurrency: true },
      { label: 'Qualification Status', isCurrency: false },
      { label: 'Recommended Reserves (12 months)', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        totalLiquidAssets,
        totalRetirementAssets,
        realEstateEquity,
        otherAssets,
        requestedLoanAmount,
        interestRate,
        loanTerm,
      } = values;

      const liquidQualifying = totalLiquidAssets * 1.0;
      const retirementQualifying = totalRetirementAssets * 0.70;
      const realEstateQualifying = realEstateEquity * 0.60;
      const otherQualifying = otherAssets * 0.80;

      const totalQualifyingAssets = liquidQualifying + retirementQualifying + realEstateQualifying + otherQualifying;

      const loanToAssetRatio = (requestedLoanAmount / totalQualifyingAssets) * 100;
      const assetCoverageRatio = totalQualifyingAssets / requestedLoanAmount;

      const maxLoanAmount = totalQualifyingAssets * 0.70;

      const loanTermMonths = parseInt(loanTerm, 10) * 12;
      const monthlyRate = interestRate / 100 / 12;
      const monthlyPayment = requestedLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / (Math.pow(1 + monthlyRate, loanTermMonths) - 1);

      const qualificationStatus = loanToAssetRatio <= 70 
        ? 'Qualifies (LTA ≤ 70%)' 
        : loanToAssetRatio <= 80 
          ? 'May Qualify (LTA 70-80% - Limited Lenders)' 
          : 'Does Not Qualify (LTA > 80%)';

      const recommendedReserves = monthlyPayment * 12;

      return [
        { label: 'Liquid Assets (100% counted)', value: liquidQualifying.toFixed(2), isCurrency: true },
        { label: 'Retirement Assets (70% counted)', value: retirementQualifying.toFixed(2), isCurrency: true },
        { label: 'Real Estate Equity (60% counted)', value: realEstateQualifying.toFixed(2), isCurrency: true },
        { label: 'Other Assets (80% counted)', value: otherQualifying.toFixed(2), isCurrency: true },
        { label: 'Total Qualifying Assets', value: totalQualifyingAssets.toFixed(2), isCurrency: true },
        { label: 'Requested Loan Amount', value: requestedLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Loan-to-Asset Ratio (LTA)', value: `${loanToAssetRatio.toFixed(1)}%`, isCurrency: false },
        { label: 'Asset Coverage Ratio', value: `${assetCoverageRatio.toFixed(2)}x`, isCurrency: false },
        { label: 'Maximum Loan Amount (70% LTA)', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Estimated Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
        { label: 'Recommended Reserves (12 months)', value: recommendedReserves.toFixed(2), isCurrency: true },
      ];
    },
  },
};
