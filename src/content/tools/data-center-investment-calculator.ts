import { CalculatorContent } from '@/types';

export const DATA_CENTER_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Data Center Investment Calculator',
  description: 'Analyze returns on data center investments including power density, connectivity premiums, and technology infrastructure costs.',
  slug: 'data-center-investment-calculator',
  icon: '💾',
  category: 'Investment Analysis',
  article: {
    title: 'Data Center Real Estate Investment Analysis',
    content: `
    <h2>Understanding Data Center Investments</h2>
    <p>Data centers represent one of the fastest-growing and most specialized sectors in commercial real estate. Driven by cloud computing, artificial intelligence, big data, and the proliferation of connected devices, demand for data center capacity continues to accelerate globally. These mission-critical facilities house the servers and networking equipment that power the digital economy, making them essential infrastructure investments with unique risk-return characteristics.</p>
    
    <h3>Data Center Types and Classifications</h3>
    <p>Data centers vary significantly in scale, purpose, and ownership structure:</p>
    <ul>
      <li><strong>Hyperscale Data Centers:</strong> Massive facilities (100,000+ SF) built for tech giants like AWS, Microsoft, Google, and Facebook. Single-tenant, purpose-built for cloud computing with power capacities exceeding 50-100 MW. Highest capital intensity but premium valuations.</li>
      <li><strong>Wholesale/Colocation Data Centers:</strong> Multi-tenant facilities leasing space, power, and cooling infrastructure to enterprises and cloud providers. Tenants bring their own equipment. Lease terms typically 3-10 years with strong credit tenants.</li>
      <li><strong>Retail Colocation:</strong> Smaller multi-tenant facilities (20,000-100,000 SF) serving local and regional enterprises. Offer managed services, flexibility, and lower entry costs for tenants. Monthly or annual contracts common.</li>
      <li><strong>Enterprise Data Centers:</strong> Private facilities owned and operated by single companies for their exclusive use. Banks, insurance companies, and large corporations maintain these for data security and control.</li>
      <li><strong>Edge Data Centers:</strong> Smaller, distributed facilities located close to end-users for low-latency applications (5G, IoT, autonomous vehicles, AR/VR). Emerging growth sector as latency becomes critical.</li>
      <li><strong>Cloud On-Ramps:</strong> Strategic interconnection facilities where enterprises connect to multiple cloud providers. Network-dense environments with premium pricing for connectivity.</li>
    </ul>

    <h3>Critical Location Factors</h3>
    <p>Unlike most real estate, data center location decisions are driven by technical and risk factors:</p>
    <ul>
      <li><strong>Power Availability and Cost:</strong> Data centers consume massive amounts of electricity (20-100+ MW for hyperscale). Locations need abundant, reliable, low-cost power. Pacific Northwest, Texas, and parts of the Midwest are power-advantaged markets.</li>
      <li><strong>Fiber Connectivity:</strong> Robust fiber infrastructure is essential for data transmission. Proximity to internet exchange points, subsea cable landing stations, and fiber routes commands premium valuations.</li>
      <li><strong>Natural Disaster Risk:</strong> Facilities must be located in low-risk areas for earthquakes, hurricanes, flooding, and tornados. Seismic stability, flood plains, and storm surge zones are evaluated rigorously.</li>
      <li><strong>Climate and Cooling:</strong> Cooler climates reduce cooling costs (free cooling). Northern Virginia, Oregon, and Northern Europe benefit from climate advantages. Some operators favor dry climates to use evaporative cooling.</li>
      <li><strong>Latency Requirements:</strong> For certain applications, proximity to end-users is critical. Financial trading, gaming, and content delivery networks prioritize low-latency locations near population centers.</li>
      <li><strong>Regulatory Environment:</strong> Data sovereignty laws, tax incentives, energy regulations, and zoning affect location decisions. Ireland, Singapore, and certain US states offer favorable regulatory frameworks.</li>
    </ul>

    <h3>Revenue Model and Lease Economics</h3>
    <p>Data center revenue is unlike traditional commercial real estate:</p>
    <ul>
      <li><strong>Base Rent (Space):</strong> Charged per square foot of occupied data hall space or per cabinet/rack. Wholesale leases may be $100-200/SF annually. Retail colocation can exceed $2,000-3,000/SF for finished space.</li>
      <li><strong>Power Revenue:</strong> Critical component charged per kilowatt (kW) or megawatt (MW) of power capacity allocated. Power pricing ranges from $100-300+ per kW annually depending on market and density.</li>
      <li><strong>Interconnection Fees:</strong> Cross-connect fees for network connections between tenants or to internet exchanges. Highly profitable ancillary revenue (70-90% margins).</li>
      <li><strong>Remote Hands Services:</strong> Hourly fees for on-site technical support, equipment installation, and troubleshooting. Premium-margin revenue stream.</li>
      <li><strong>Managed Services:</strong> Security, monitoring, backup, and disaster recovery services generating recurring revenue.</li>
      <li><strong>Network Services:</strong> Bandwidth, IP transit, and direct cloud connectivity sold as value-added services.</li>
    </ul>

    <h3>Capital Expenditures and Infrastructure</h3>
    <p>Data centers are among the most capital-intensive real estate investments:</p>
    <ul>
      <li><strong>Core & Shell Construction:</strong> Specialized building design with raised floors, superior structural loading (150-300 lbs/SF for servers), security perimeter, and climate-appropriate envelope. $150-300/SF for shell.</li>
      <li><strong>Power Infrastructure:</strong> Multiple utility feeds, uninterruptible power supply (UPS) systems, backup generators, fuel storage, electrical distribution. Can exceed $10-20M per MW of critical load.</li>
      <li><strong>Cooling Systems:</strong> CRAC/CRAH units, chillers, cooling towers, hot/cold aisle containment, liquid cooling for high-density racks. Represents 30-40% of infrastructure costs.</li>
      <li><strong>Network Infrastructure:</strong> Carrier-neutral meet-me-rooms, fiber entrance facilities, interconnection grids, and on-net fiber routes. Essential for multi-tenant facilities.</li>
      <li><strong>Security Systems:</strong> Biometric access, mantraps, video surveillance, 24/7 security operations center. Mission-critical facilities require defense-in-depth security.</li>
      <li><strong>Fire Suppression:</strong> Specialized systems (VESDA, clean agent suppression) protecting equipment without water damage risk.</li>
    </ul>

    <h3>Operating Expenses Unique to Data Centers</h3>
    <ul>
      <li><strong>Utility Costs (30-50% of OpEx):</strong> Electricity is the dominant operating expense. PUE (Power Usage Effectiveness) measures efficiency—lower is better. Modern facilities target 1.2-1.4 PUE; older facilities may be 1.8-2.0+.</li>
      <li><strong>Maintenance and Repairs:</strong> 24/7/365 operations require preventive maintenance on critical systems. Generator testing, HVAC servicing, UPS battery replacement are significant recurring costs.</li>
      <li><strong>Staffing:</strong> Data centers require on-site technical staff, facility engineers, security personnel, and NOC (network operations center) teams. Labor-intensive relative to traditional real estate.</li>
      <li><strong>Insurance:</strong> Specialized coverage for business interruption, equipment breakdown, cyber liability, and tenant property. Higher premiums than standard commercial property.</li>
      <li><strong>Property Taxes:</strong> Data center equipment may be assessed separately from real property, creating complexity. Some jurisdictions offer abatements or exemptions to attract facilities.</li>
    </ul>

    <h3>Key Investment Metrics</h3>
    <ul>
      <li><strong>Power Utilization Rate:</strong> Percentage of installed power capacity that is sold/leased. Critical metric for revenue optimization. Stabilized facilities target 80-90% utilization.</li>
      <li><strong>Revenue per kW:</strong> Total revenue divided by total available power capacity. Measures monetization effectiveness. Strong facilities generate $3,000-6,000+ per kW annually.</li>
      <li><strong>EBITDA Margin:</strong> Data centers typically achieve 50-70% EBITDA margins when stabilized, higher than most real estate due to value-added services.</li>
      <li><strong>Power Usage Effectiveness (PUE):</strong> Total facility power divided by IT equipment power. Lower PUE means more efficient cooling and operations, reducing utility costs.</li>
      <li><strong>Capitalization Rates:</strong> Data center cap rates vary by quality, location, and tenant credit. Stabilized facilities trade at 5-9% cap rates; development yields may reach 10-15%.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>This calculator models data center investment returns. Input the following:</p>
    <ul>
      <li><strong>Total Investment:</strong> Land, construction, equipment, and soft costs for development; or purchase price for acquisitions</li>
      <li><strong>Total Power Capacity (MW):</strong> Critical IT load capacity in megawatts</li>
      <li><strong>Leasable Space (SF):</strong> White space available for tenant use (excluding mechanical, electrical, and support)</li>
      <li><strong>Stabilized Occupancy:</strong> Expected occupancy at stabilization (typically 85-95% for wholesale, 70-85% for retail)</li>
      <li><strong>Revenue per kW:</strong> Annual revenue per kilowatt of power (includes space rent, power charges, and services)</li>
      <li><strong>Operating Expense Ratio:</strong> Operating expenses as percentage of revenue (typically 30-50% depending on efficiency)</li>
      <li><strong>Annual Revenue Growth:</strong> Expected annual growth from rate increases and ancillary services (2-4% typical)</li>
      <li><strong>Lease-Up Period:</strong> Time to reach stabilized occupancy (2-5 years for new facilities)</li>
      <li><strong>Down Payment:</strong> Equity investment percentage</li>
      <li><strong>Interest Rate:</strong> Debt financing cost</li>
      <li><strong>Loan Term:</strong> Amortization period</li>
      <li><strong>Holding Period:</strong> Investment horizon</li>
      <li><strong>Exit Cap Rate:</strong> Expected sale cap rate (may compress from purchase cap rate due to de-risking)</li>
    </ul>

    <h3>Risk Factors and Mitigation</h3>
    <ul>
      <li><strong>Technology Obsolescence:</strong> Rapid technology change can make older facilities less competitive. Counter with flexible design allowing higher density upgrades and newer cooling technologies.</li>
      <li><strong>Oversupply Risk:</strong> Major markets can experience supply surges. Carefully analyze absorption rates and pipeline supply before investing.</li>
      <li><strong>Tenant Concentration:</strong> Large facilities may have single hyperscale tenants. Diversification across multiple credit tenants reduces risk.</li>
      <li><strong>Power Curtailment:</strong> Utilities may restrict power in tight grid situations. Backup generator capacity and PPA agreements mitigate exposure.</li>
      <li><strong>Capital Intensity:</strong> High capex requirements create execution risk. Partner with experienced developers and maintain adequate contingency reserves.</li>
      <li><strong>Regulatory Changes:</strong> Environmental regulations (renewable energy mandates, carbon taxes) may increase operating costs. Proactively incorporate green power purchasing.</li>
    </ul>

    <h3>Financing Considerations</h3>
    <ul>
      <li><strong>Construction Financing:</strong> Lenders advance funds against milestones. Requires personal/corporate guarantees and pre-leasing commitments (often 30-50% pre-leased).</li>
      <li><strong>Permanent Financing:</strong> Once stabilized, convert to permanent debt at 60-75% LTV with 5-10 year terms. Non-recourse available for institutional-quality assets.</li>
      <li><strong>Sale-Leaseback:</strong> Hyperscale operators may develop then sale-leaseback to data center REITs, unlocking capital for growth while maintaining operational control.</li>
      <li><strong>REIT Structures:</strong> Major data center REITs (Equinix, Digital Realty, CyrusOne) access cheap capital and provide exit liquidity for assets.</li>
    </ul>

    <h3>Value Creation Strategies</h3>
    <ul>
      <li><strong>Development:</strong> Ground-up development or expansion of existing campuses. Highest risk but can generate 15-25%+ levered IRRs if executed successfully.</li>
      <li><strong>Power Density Upgrades:</strong> Retrofitting facilities for higher-density racks (15-30+ kW per rack) to serve AI and HPC workloads commands premium pricing.</li>
      <li><strong>Interconnection Ecosystems:</strong> Building network density attracts tenants seeking rich connectivity. Carrier-neutral positioning expands tenant universe.</li>
      <li><strong>Efficiency Improvements:</strong> Retrofitting cooling, implementing AI-driven operations, and improving PUE reduces costs and increases NOI.</li>
      <li><strong>Geographic Expansion:</strong> Expanding into emerging markets with growing data demand and limited supply (secondary US markets, Southeast Asia, Latin America).</li>
    </ul>

    <h3>Industry Trends Driving Growth</h3>
    <ul>
      <li><strong>Cloud Computing:</strong> Continued migration to cloud infrastructure (AWS, Azure, Google Cloud) driving hyperscale development</li>
      <li><strong>Artificial Intelligence:</strong> AI model training and inference requiring massive compute capacity and high-density racks</li>
      <li><strong>5G Networks:</strong> Edge data center proliferation supporting low-latency 5G applications</li>
      <li><strong>Cryptocurrency:</strong> Blockchain and cryptocurrency mining creating demand for low-cost power locations</li>
      <li><strong>Data Sovereignty:</strong> Regulations requiring local data storage driving in-country data center development</li>
      <li><strong>Sustainability:</strong> Corporate net-zero commitments driving demand for green-powered facilities</li>
    </ul>

    <h3>Due Diligence Essentials</h3>
    <ul>
      <li>Verify utility capacity, redundancy (N+1, 2N), and power purchase agreements</li>
      <li>Assess fiber connectivity, carrier diversity, and network latency</li>
      <li>Review tenant lease terms, SLAs, and churn history</li>
      <li>Inspect critical systems age, condition, and maintenance records</li>
      <li>Analyze historical PUE, uptime (target 99.99%+), and outage incidents</li>
      <li>Evaluate local competitive supply and demand fundamentals</li>
      <li>Verify regulatory compliance (building codes, environmental permits, data privacy)</li>
      <li>Assess management team expertise in mission-critical operations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalInvestment',
        label: 'Total Investment',
        type: 'number',
        defaultValue: 50000000,
      },
      {
        name: 'powerCapacityMW',
        label: 'Total Power Capacity (MW)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'leasableSpaceSF',
        label: 'Leasable Space (SF)',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'stabilizedOccupancy',
        label: 'Stabilized Occupancy (%)',
        type: 'number',
        defaultValue: 85,
      },
      {
        name: 'revenuePerKW',
        label: 'Revenue per kW (Annual)',
        type: 'number',
        defaultValue: 4000,
      },
      {
        name: 'operatingExpenseRatio',
        label: 'Operating Expense Ratio (%)',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'annualRevenueGrowth',
        label: 'Annual Revenue Growth (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'leaseUpPeriod',
        label: 'Lease-Up Period (Years)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 35,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'exitCapRate',
        label: 'Exit Cap Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
    ],
    results: [
      { label: 'Stabilized Annual Revenue', isCurrency: true },
      { label: 'Stabilized NOI', isCurrency: true },
      { label: 'Year 1 Cash Flow', isCurrency: true },
      { label: 'Stabilized Cash-on-Cash Return', isPercentage: true },
      { label: 'Stabilized Cap Rate', isPercentage: true },
      { label: 'DSCR at Stabilization', isText: true },
      { label: 'Revenue per SF', isText: true },
      { label: 'Projected Sale Price', isCurrency: true },
      { label: 'Total Equity Return', isCurrency: true },
      { label: 'IRR', isPercentage: true },
      { label: 'Equity Multiple', isText: true },
    ],
    calculate: (values) => {
      const {
        totalInvestment,
        powerCapacityMW,
        leasableSpaceSF,
        stabilizedOccupancy,
        revenuePerKW,
        operatingExpenseRatio,
        annualRevenueGrowth,
        leaseUpPeriod,
        downPayment,
        interestRate,
        loanTerm,
        holdingPeriod,
        exitCapRate,
      } = values;

      const powerCapacityKW = powerCapacityMW * 1000;
      const stabilizedRevenue = powerCapacityKW * (stabilizedOccupancy / 100) * revenuePerKW;
      const stabilizedOpEx = stabilizedRevenue * (operatingExpenseRatio / 100);
      const stabilizedNOI = stabilizedRevenue - stabilizedOpEx;

      const loanAmount = totalInvestment * (1 - downPayment / 100);
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = loanTerm * 12;
      const monthlyPayment =
        loanAmount > 0
          ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1)
          : 0;
      const annualDebtService = monthlyPayment * 12;

      const equity = totalInvestment * (downPayment / 100);
      const stabilizedCashFlow = stabilizedNOI - annualDebtService;
      const stabilizedCashOnCash = (stabilizedCashFlow / equity) * 100;
      const stabilizedCapRate = (stabilizedNOI / totalInvestment) * 100;
      const dscr = annualDebtService > 0 ? stabilizedNOI / annualDebtService : 0;

      const cashFlows = [-equity];
      let currentRevenue = 0;
      let totalCashReceived = 0;

      for (let year = 1; year <= holdingPeriod; year++) {
        let yearOccupancy;
        if (year <= leaseUpPeriod) {
          yearOccupancy = (stabilizedOccupancy / leaseUpPeriod) * year;
        } else {
          yearOccupancy = stabilizedOccupancy;
        }

        const growthFactor = Math.pow(1 + annualRevenueGrowth / 100, year - 1);
        currentRevenue = powerCapacityKW * (yearOccupancy / 100) * revenuePerKW * growthFactor;
        const yearOpEx = currentRevenue * (operatingExpenseRatio / 100);
        const yearNOI = currentRevenue - yearOpEx;
        const yearCashFlow = yearNOI - annualDebtService;

        totalCashReceived += yearCashFlow;
        cashFlows.push(yearCashFlow);
      }

      const finalNOI =
        powerCapacityKW *
        (stabilizedOccupancy / 100) *
        revenuePerKW *
        Math.pow(1 + annualRevenueGrowth / 100, holdingPeriod - 1);
      const salePrice = finalNOI / (exitCapRate / 100);
      const remainingBalance =
        loanAmount > 0
          ? loanAmount *
            (Math.pow(1 + monthlyRate, numPayments) -
              Math.pow(1 + monthlyRate, holdingPeriod * 12)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1)
          : 0;
      const saleProceeds = salePrice - remainingBalance;
      cashFlows[cashFlows.length - 1] += saleProceeds;

      const totalEquityReturn = totalCashReceived + saleProceeds - equity;

      function calculateIRR(flows: number[]): number {
        let rate = 0.1;
        for (let i = 0; i < 1000; i++) {
          let npv = 0;
          let dnpv = 0;
          for (let j = 0; j < flows.length; j++) {
            npv += flows[j] / Math.pow(1 + rate, j);
            dnpv += (-j * flows[j]) / Math.pow(1 + rate, j + 1);
          }
          const newRate = rate - npv / dnpv;
          if (Math.abs(newRate - rate) < 0.00001) return newRate * 100;
          rate = newRate;
        }
        return rate * 100;
      }

      const irr = calculateIRR(cashFlows);
      const equityMultiple = (totalCashReceived + saleProceeds) / equity;
      const revenuePerSF = stabilizedRevenue / leasableSpaceSF;

      const year1Occupancy = Math.min(stabilizedOccupancy / leaseUpPeriod, stabilizedOccupancy);
      const year1Revenue = powerCapacityKW * (year1Occupancy / 100) * revenuePerKW;
      const year1OpEx = year1Revenue * (operatingExpenseRatio / 100);
      const year1NOI = year1Revenue - year1OpEx;
      const year1CashFlow = year1NOI - annualDebtService;

      return [
        { label: 'Stabilized Annual Revenue', value: stabilizedRevenue.toFixed(2), isCurrency: true },
        { label: 'Stabilized NOI', value: stabilizedNOI.toFixed(2), isCurrency: true },
        { label: 'Year 1 Cash Flow', value: year1CashFlow.toFixed(2), isCurrency: true },
        { label: 'Stabilized Cash-on-Cash Return', value: stabilizedCashOnCash.toFixed(2), isPercentage: true },
        { label: 'Stabilized Cap Rate', value: stabilizedCapRate.toFixed(2), isPercentage: true },
        { label: 'DSCR at Stabilization', value: `${dscr.toFixed(2)}x`, isText: true },
        { label: 'Revenue per SF', value: `$${revenuePerSF.toFixed(2)}/SF`, isText: true },
        { label: 'Projected Sale Price', value: salePrice.toFixed(2), isCurrency: true },
        { label: 'Total Equity Return', value: totalEquityReturn.toFixed(2), isCurrency: true },
        { label: 'IRR', value: irr.toFixed(2), isPercentage: true },
        { label: 'Equity Multiple', value: `${equityMultiple.toFixed(2)}x`, isText: true },
      ];
    },
  },
};
