import { CalculatorContent } from '@/types';

export const FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Fixed Asset Turnover Ratio Calculator - Measure Asset Efficiency',
  description: 'Calculate fixed asset turnover ratio to measure how efficiently a company uses its fixed assets to generate revenue. Essential for real estate and commercial property analysis.',
  slug: 'fixed-asset-turnover-calculator',
  icon: 'Icon',
  category: 'Financial',
  article: {
    title: 'Understanding Fixed Asset Turnover Ratio in Real Estate',
    content: `
    <h2>What is Fixed Asset Turnover Ratio?</h2>
    <p>The Fixed Asset Turnover (FAT) ratio is a financial metric that measures how efficiently a company uses its fixed assets to generate revenue. In real estate, this ratio is particularly important for property management companies, REITs, and commercial real estate investors.</p>
    
    <p>Fixed assets include property, buildings, equipment, and other long-term tangible assets. The ratio indicates how many dollars of revenue are generated for every dollar invested in fixed assets.</p>

    <h3>Why is Fixed Asset Turnover Important?</h3>
    <p>The FAT ratio provides valuable insights for real estate businesses:</p>
    <ul>
      <li><strong>Operational Efficiency:</strong> Shows how well you're utilizing your property assets</li>
      <li><strong>Investment Decisions:</strong> Helps determine if additional property purchases are justified</li>
      <li><strong>Performance Benchmarking:</strong> Compare your efficiency against industry standards</li>
      <li><strong>Property Portfolio Analysis:</strong> Identify underperforming properties in your portfolio</li>
      <li><strong>Capital Allocation:</strong> Make informed decisions about asset disposal or acquisition</li>
    </ul>

    <h3>How to Calculate Fixed Asset Turnover</h3>
    <p>The formula is:</p>
    <p><strong>Fixed Asset Turnover = Net Revenue / Net Fixed Assets</strong></p>
    
    <p>Where:</p>
    <ul>
      <li><strong>Net Revenue:</strong> Total revenue for the period (usually annual)</li>
      <li><strong>Net Fixed Assets:</strong> Total fixed assets minus accumulated depreciation</li>
    </ul>
    
    <p>For example, if a property management company generates $5 million in annual revenue with $20 million in net fixed assets:</p>
    <p>FAT Ratio = $5,000,000 / $20,000,000 = 0.25</p>

    <h3>Interpreting the Fixed Asset Turnover Ratio</h3>
    <p><strong>Higher Ratio:</strong> A higher FAT ratio generally indicates:</p>
    <ul>
      <li>More efficient use of fixed assets</li>
      <li>Better revenue generation per dollar of assets</li>
      <li>Potentially less capital-intensive business model</li>
    </ul>
    
    <p><strong>Lower Ratio:</strong> A lower FAT ratio may indicate:</p>
    <ul>
      <li>Underutilized assets or vacant properties</li>
      <li>Recent major capital investments not yet generating full revenue</li>
      <li>Capital-intensive business model (which may be normal for real estate)</li>
    </ul>

    <h3>Industry Benchmarks for Real Estate</h3>
    <p>Typical FAT ratios vary by real estate sector:</p>
    <ul>
      <li><strong>Residential REITs:</strong> 0.15 - 0.30</li>
      <li><strong>Commercial REITs:</strong> 0.20 - 0.40</li>
      <li><strong>Property Management:</strong> 0.50 - 1.50</li>
      <li><strong>Real Estate Services:</strong> 1.00 - 3.00</li>
    </ul>

    <h3>Using This Calculator</h3>
    <p>Enter your annual net revenue and the value of your net fixed assets (after depreciation). The calculator will compute your fixed asset turnover ratio and provide:</p>
    <ul>
      <li>Your FAT ratio and efficiency rating</li>
      <li>Revenue per dollar of fixed assets</li>
      <li>Comparison to industry benchmarks</li>
      <li>Annual and monthly revenue projections per asset dollar</li>
    </ul>
    
    <p>This tool is essential for real estate investors, property managers, and REIT analysts to evaluate operational efficiency and make strategic decisions about property portfolios.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'netRevenue',
        label: 'Net Revenue (Annual)',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'netFixedAssets',
        label: 'Net Fixed Assets (After Depreciation)',
        type: 'number',
        defaultValue: 20000000,
      },
      {
        name: 'industryType',
        label: 'Industry Type',
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential REIT (Benchmark: 0.15-0.30)' },
          { value: 'commercial', label: 'Commercial REIT (Benchmark: 0.20-0.40)' },
          { value: 'property_mgmt', label: 'Property Management (Benchmark: 0.50-1.50)' },
          { value: 're_services', label: 'Real Estate Services (Benchmark: 1.00-3.00)' },
        ],
        defaultValue: 'commercial',
      },
    ],
    calculate: (values) => {
      const { netRevenue, netFixedAssets, industryType } = values;
      
      // Calculate Fixed Asset Turnover
      const fatRatio = netRevenue / netFixedAssets;
      
      // Revenue per dollar of fixed assets
      const revenuePerDollar = fatRatio;
      
      // Monthly revenue per asset dollar
      const monthlyRevenuePerDollar = fatRatio / 12;
      
      // Determine efficiency rating based on industry
      let efficiencyRating = '';
      let benchmarkRange = '';
      
      switch(industryType) {
        case 'residential':
          benchmarkRange = '0.15 - 0.30';
          if (fatRatio >= 0.30) efficiencyRating = 'Excellent - Above Industry Average';
          else if (fatRatio >= 0.15) efficiencyRating = 'Good - Within Industry Range';
          else efficiencyRating = 'Below Average - Consider Asset Optimization';
          break;
        case 'commercial':
          benchmarkRange = '0.20 - 0.40';
          if (fatRatio >= 0.40) efficiencyRating = 'Excellent - Above Industry Average';
          else if (fatRatio >= 0.20) efficiencyRating = 'Good - Within Industry Range';
          else efficiencyRating = 'Below Average - Consider Asset Optimization';
          break;
        case 'property_mgmt':
          benchmarkRange = '0.50 - 1.50';
          if (fatRatio >= 1.50) efficiencyRating = 'Excellent - Above Industry Average';
          else if (fatRatio >= 0.50) efficiencyRating = 'Good - Within Industry Range';
          else efficiencyRating = 'Below Average - Consider Asset Optimization';
          break;
        case 're_services':
          benchmarkRange = '1.00 - 3.00';
          if (fatRatio >= 3.00) efficiencyRating = 'Excellent - Above Industry Average';
          else if (fatRatio >= 1.00) efficiencyRating = 'Good - Within Industry Range';
          else efficiencyRating = 'Below Average - Consider Asset Optimization';
          break;
      }

      return [
        { label: 'Fixed Asset Turnover Ratio', value: fatRatio.toFixed(2) },
        { label: 'Efficiency Rating', value: efficiencyRating },
        { label: 'Industry Benchmark Range', value: benchmarkRange },
        { label: 'Revenue Per $1 of Fixed Assets', value: '$' + revenuePerDollar.toFixed(2) },
        { label: 'Monthly Revenue Per Asset Dollar', value: '$' + monthlyRevenuePerDollar.toFixed(2) },
      ];
    },
  },
};