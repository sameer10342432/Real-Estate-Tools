import { CalculatorContent } from '@/types';

export const FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Farm/Agricultural Land ROI Calculator',
  description: 'Calculate returns on farmland investments including crop income, land appreciation, government payments, and tax benefits.',
  slug: 'farm-agricultural-land-roi-calculator',
  icon: '🚜',
  category: 'Investment Analysis',
  article: {
    title: 'Farmland Investment: Complete Guide to Agricultural Real Estate Returns',
    content: `
    <h2>Farmland as an Investment Asset Class</h2>
    <p>Farmland has become an increasingly attractive alternative investment, offering stable returns, inflation protection, and low correlation with stocks and bonds. With growing global food demand and limited arable land, agricultural real estate provides both current income and long-term appreciation potential.</p>
    
    <h3>Why Invest in Farmland?</h3>
    <ul>
      <li><strong>Stable Returns:</strong> Historical returns of 10-12% annually including income and appreciation</li>
      <li><strong>Inflation Hedge:</strong> Crop prices and land values typically rise with inflation</li>
      <li><strong>Low Volatility:</strong> Less price fluctuation compared to stocks</li>
      <li><strong>Diversification:</strong> Low correlation with traditional financial assets</li>
      <li><strong>Tangible Asset:</strong> Real property with intrinsic value</li>
      <li><strong>Tax Benefits:</strong> Depreciation, deductions, and preferential tax treatment</li>
      <li><strong>Growing Demand:</strong> Increasing global population drives food needs</li>
    </ul>

    <h3>Sources of Farmland Returns</h3>
    <ul>
      <li><strong>Cash Rent Income:</strong> 2-4% net cash yield from tenant farmers</li>
      <li><strong>Crop Share Income:</strong> Percentage of crop proceeds (higher risk/reward)</li>
      <li><strong>Land Appreciation:</strong> 4-6% average annual increase in land values</li>
      <li><strong>Government Payments:</strong> USDA subsidies and conservation programs</li>
      <li><strong>Water Rights:</strong> Valuable water allocation in arid regions</li>
      <li><strong>Development Conversion:</strong> Urban expansion creates premium values</li>
    </ul>

    <h3>Types of Farmland</h3>
    <p><strong>Row Crop Land (Corn, Soybeans, Wheat):</strong></p>
    <ul>
      <li>Prime Midwest farmland: $8,000-$15,000+ per acre</li>
      <li>Cash rent: $200-$350 per acre annually</li>
      <li>Best soil productivity, highest values</li>
    </ul>
    <p><strong>Permanent Crops (Nuts, Fruits, Vineyards):</strong></p>
    <ul>
      <li>California almond/walnut land: $15,000-$40,000+ per acre</li>
      <li>Higher income potential but more management intensive</li>
      <li>Established orchards command premium prices</li>
    </ul>
    <p><strong>Pasture/Grazing Land:</strong></p>
    <ul>
      <li>Cattle country: $1,000-$5,000 per acre</li>
      <li>Lower income but minimal management</li>
      <li>Hunting and recreation potential</li>
    </ul>
    <p><strong>Specialty Crops:</strong></p>
    <ul>
      <li>Organic certification adds 10-30% premium</li>
      <li>Hemp, lavender, hops for niche markets</li>
      <li>Greenhouse and hydroponic operations</li>
    </ul>

    <h3>Farmland Ownership Structures</h3>
    <ul>
      <li><strong>Direct Ownership:</strong> Buy land, lease to farmer ($100,000+ minimum)</li>
      <li><strong>Farmland REITs:</strong> Public stock ownership (liquid, low minimum)</li>
      <li><strong>Farmland Funds:</strong> Private equity farmland portfolios ($25,000+ minimum)</li>
      <li><strong>Crowdfunding Platforms:</strong> Fractional farmland ownership ($10,000+)</li>
      <li><strong>Operating Farm:</strong> Farm yourself (requires expertise and equipment)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your farmland investment parameters:</p>
    <ul>
      <li><strong>Total Acreage:</strong> Size of the farm property</li>
      <li><strong>Land Cost Per Acre:</strong> Purchase price per acre</li>
      <li><strong>Annual Cash Rent Per Acre:</strong> Rent income from tenant farmer</li>
      <li><strong>Land Appreciation Rate:</strong> Expected annual increase in value (3-6%)</li>
      <li><strong>Property Tax Per Acre:</strong> Annual property tax obligation</li>
      <li><strong>Insurance and Maintenance:</strong> Annual holding costs</li>
      <li><strong>Government Payments:</strong> USDA or conservation program income</li>
      <li><strong>Holding Period:</strong> Years until planned sale</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total Investment:</strong> Purchase price plus acquisition costs</li>
      <li><strong>Annual Net Cash Flow:</strong> Rent income minus operating expenses</li>
      <li><strong>Cumulative Cash Flow:</strong> Total rental income over holding period</li>
      <li><strong>Land Value at Sale:</strong> Appreciated property value</li>
      <li><strong>Total Return:</strong> Cash flow plus appreciation</li>
      <li><strong>ROI:</strong> Total return as percentage of investment</li>
      <li><strong>Annualized Return:</strong> Average yearly return</li>
      <li><strong>Cash-on-Cash Yield:</strong> Annual cash return percentage</li>
    </ul>

    <h3>Geographic Farmland Markets</h3>
    <p><strong>Midwest Corn Belt (Iowa, Illinois, Indiana):</strong></p>
    <ul>
      <li>Highest quality soil (Class A farmland)</li>
      <li>Most expensive: $10,000-$15,000+ per acre</li>
      <li>Best cash rents and yields</li>
      <li>Stable, established market</li>
    </ul>
    <p><strong>Great Plains (Nebraska, Kansas, Dakotas):</strong></p>
    <ul>
      <li>Irrigated vs. dryland pricing varies widely</li>
      <li>$3,000-$8,000 per acre typical</li>
      <li>Water rights critical to value</li>
    </ul>
    <p><strong>California Specialty Crops:</strong></p>
    <ul>
      <li>Premium values for established operations</li>
      <li>$15,000-$50,000+ per acre for almonds, grapes</li>
      <li>Water availability is key concern</li>
    </ul>
    <p><strong>Southeast (Mississippi Delta, Georgia):</strong></p>
    <ul>
      <li>Cotton, peanuts, timber combinations</li>
      <li>$3,000-$7,000 per acre</li>
      <li>Longer growing season, diverse crops</li>
    </ul>

    <h3>Farm Lease Agreements</h3>
    <p><strong>Cash Rent Lease (Most Common for Investors):</strong></p>
    <ul>
      <li>Fixed annual rent payment to landowner</li>
      <li>Tenant bears all crop risk and receives all upside</li>
      <li>Predictable income for investor</li>
      <li>Typical terms: 1-5 years with annual escalation</li>
    </ul>
    <p><strong>Crop Share Lease:</strong></p>
    <ul>
      <li>Landowner receives percentage of crop (typically 33-50%)</li>
      <li>Higher potential income but also crop risk</li>
      <li>Landowner may share input costs</li>
      <li>More management involvement required</li>
    </ul>
    <p><strong>Flexible Cash Rent:</strong></p>
    <ul>
      <li>Base rent plus bonus tied to crop prices or yields</li>
      <li>Balances risk between owner and tenant</li>
      <li>Aligns interests of both parties</li>
    </ul>

    <h3>Operating Expenses and Costs</h3>
    <ul>
      <li><strong>Property Taxes:</strong> $10-$100+ per acre (agricultural assessment helps)</li>
      <li><strong>Insurance:</strong> $5-$15 per acre for liability and property</li>
      <li><strong>Maintenance:</strong> Fence, tile drain, and structural repairs</li>
      <li><strong>Management Fees:</strong> 5-10% of gross rent if using farm manager</li>
      <li><strong>Legal and Accounting:</strong> Lease agreements and tax preparation</li>
      <li><strong>Loan Interest:</strong> If leveraged (typically 4-6% for farmland)</li>
    </ul>

    <h3>Government Farm Programs</h3>
    <ul>
      <li><strong>Conservation Reserve Program (CRP):</strong> Rent payments for environmental set-aside</li>
      <li><strong>Crop Insurance Subsidies:</strong> Federal support for risk management</li>
      <li><strong>Commodity Programs:</strong> Price supports and deficiency payments</li>
      <li><strong>EQIP Payments:</strong> Environmental quality improvement incentives</li>
      <li><strong>Wetlands Reserve:</strong> Permanent easement payments</li>
    </ul>

    <h3>Due Diligence for Farmland Purchase</h3>
    <ul>
      <li><strong>Soil Quality:</strong> Get soil maps and productivity ratings</li>
      <li><strong>Water Rights:</strong> Verify irrigation rights and well capacity</li>
      <li><strong>Drainage:</strong> Tile drainage systems and wetland areas</li>
      <li><strong>Access:</strong> Road frontage and field access</li>
      <li><strong>Environmental:</strong> Phase I assessment for contamination</li>
      <li><strong>Title:</strong> Clear title with mineral rights verification</li>
      <li><strong>Tenant Quality:</strong> Existing farmer's reputation and financials</li>
      <li><strong>Market Comps:</strong> Recent sales of comparable farms</li>
    </ul>

    <h3>Tax Benefits of Farmland Ownership</h3>
    <ul>
      <li><strong>Depreciation:</strong> Buildings, equipment, improvements</li>
      <li><strong>Section 1031 Exchange:</strong> Defer capital gains on farm sales</li>
      <li><strong>Agricultural Assessment:</strong> Reduced property taxes vs. market value</li>
      <li><strong>Conservation Easements:</strong> Income and estate tax deductions</li>
      <li><strong>Passive Loss Rules:</strong> Net rental losses may offset other income</li>
      <li><strong>Estate Tax Benefits:</strong> Special valuations and payment deferrals</li>
      <li><strong>Timber and Mineral Rights:</strong> Favorable capital gains treatment</li>
    </ul>

    <h3>Risks and Challenges</h3>
    <ul>
      <li><strong>Illiquidity:</strong> Farmland takes 6-18 months to sell</li>
      <li><strong>Weather and Climate:</strong> Drought, floods impact tenant ability to pay</li>
      <li><strong>Commodity Prices:</strong> Low prices reduce farmer profitability and rents</li>
      <li><strong>Water Scarcity:</strong> Particularly critical in western states</li>
      <li><strong>Regulation:</strong> Environmental and land use restrictions</li>
      <li><strong>Tenant Risk:</strong> Farmer bankruptcy or lease default</li>
      <li><strong>Technology Disruption:</strong> Alternative proteins, lab-grown food</li>
    </ul>

    <h3>Farmland vs. Other Real Estate</h3>
    <ul>
      <li><strong>Lower Cap Rates:</strong> 2-4% vs. 5-8% for commercial real estate</li>
      <li><strong>Better Appreciation:</strong> Land scarcity drives long-term value</li>
      <li><strong>Less Management:</strong> Single tenant, no repairs/maintenance</li>
      <li><strong>Longer Leases:</strong> Multi-year farm leases provide stability</li>
      <li><strong>No Obsolescence:</strong> Land doesn't depreciate or become outdated</li>
    </ul>

    <h3>Financing Farmland Acquisitions</h3>
    <ul>
      <li><strong>Farm Credit System:</strong> Specialized lenders for agriculture</li>
      <li><strong>Commercial Banks:</strong> Local ag banks with farmland expertise</li>
      <li><strong>Seller Financing:</strong> Common in farm sales (20-30% down, 15-20 year amortization)</li>
      <li><strong>Typical Terms:</strong> 35-40% down payment, 15-30 year amortization</li>
      <li><strong>Interest Rates:</strong> Generally 4.5-6.5% for qualified buyers</li>
    </ul>

    <h3>Investment Strategies</h3>
    <ul>
      <li><strong>Buy and Hold:</strong> Long-term appreciation and steady income</li>
      <li><strong>Value-Add:</strong> Improve drainage, irrigation, or convert to organic</li>
      <li><strong>Development Play:</strong> Buy in path of urban growth for conversion</li>
      <li><strong>Water Rights Arbitrage:</strong> Acquire water rights for future sale</li>
      <li><strong>Aggregation:</strong> Assemble contiguous parcels for premium sale</li>
      <li><strong>Conservation Sale:</strong> Sell with easement to land trust</li>
    </ul>

    <h3>Best Practices for Farmland Investing</h3>
    <ul>
      <li>Focus on high-quality soil and water availability</li>
      <li>Screen tenants thoroughly - their success is your success</li>
      <li>Use written lease agreements with clear terms</li>
      <li>Maintain property to preserve long-term value</li>
      <li>Build relationships with local farmers and brokers</li>
      <li>Understand crop markets and commodity cycles</li>
      <li>Consider crop insurance requirements in lease</li>
      <li>Plan for succession and estate planning early</li>
      <li>Diversify across multiple farms if possible</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Overpaying based on development speculation</li>
      <li>Buying without verifying water rights and soil quality</li>
      <li>Underestimating property taxes and holding costs</li>
      <li>Leasing to unqualified or undercapitalized farmers</li>
      <li>Ignoring environmental liabilities and contamination</li>
      <li>Failing to maintain drainage and infrastructure</li>
      <li>Not understanding local rental market rates</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalAcreage',
        label: 'Total Acreage',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'landCostPerAcre',
        label: 'Land Cost Per Acre',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'cashRentPerAcre',
        label: 'Annual Cash Rent Per Acre',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'landAppreciation',
        label: 'Annual Land Appreciation Rate (%)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'propertyTaxPerAcre',
        label: 'Property Tax Per Acre',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'insuranceAndMaintenance',
        label: 'Insurance & Maintenance Per Acre',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'govtPaymentsPerAcre',
        label: 'Government Payments Per Acre',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'Total Investment', isCurrency: true },
      { label: 'Annual Gross Income', isCurrency: true },
      { label: 'Annual Operating Expenses', isCurrency: true },
      { label: 'Annual Net Cash Flow', isCurrency: true },
      { label: 'Cash-on-Cash Yield', isPercentage: true },
      { label: 'Cumulative Cash Flow', isCurrency: true },
      { label: 'Land Value at Sale', isCurrency: true },
      { label: 'Total Return', isCurrency: true },
      { label: 'ROI', isPercentage: true },
      { label: 'Annualized Return', isPercentage: true },
    ],
    calculate: (values) => {
      const { totalAcreage, landCostPerAcre, cashRentPerAcre, landAppreciation, propertyTaxPerAcre, insuranceAndMaintenance, govtPaymentsPerAcre, holdingPeriod } = values;
      
      const totalInvestment = totalAcreage * landCostPerAcre;
      const annualGrossIncome = totalAcreage * (cashRentPerAcre + govtPaymentsPerAcre);
      const annualExpenses = totalAcreage * (propertyTaxPerAcre + insuranceAndMaintenance);
      const annualNetCashFlow = annualGrossIncome - annualExpenses;
      const cashOnCashYield = (annualNetCashFlow / totalInvestment) * 100;
      const cumulativeCashFlow = annualNetCashFlow * holdingPeriod;
      const landValueAtSale = totalInvestment * Math.pow(1 + landAppreciation / 100, holdingPeriod);
      const totalReturn = cumulativeCashFlow + landValueAtSale - totalInvestment;
      const roi = (totalReturn / totalInvestment) * 100;
      const annualizedReturn = (Math.pow((cumulativeCashFlow + landValueAtSale) / totalInvestment, 1 / holdingPeriod) - 1) * 100;

      return [
        { label: 'Total Investment', value: totalInvestment.toFixed(2), isCurrency: true },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Operating Expenses', value: annualExpenses.toFixed(2), isCurrency: true },
        { label: 'Annual Net Cash Flow', value: annualNetCashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Yield', value: cashOnCashYield.toFixed(2), isPercentage: true },
        { label: 'Cumulative Cash Flow', value: cumulativeCashFlow.toFixed(2), isCurrency: true },
        { label: 'Land Value at Sale', value: landValueAtSale.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'ROI', value: roi.toFixed(2), isPercentage: true },
        { label: 'Annualized Return', value: annualizedReturn.toFixed(2), isPercentage: true },
      ];
    },
  },
};
