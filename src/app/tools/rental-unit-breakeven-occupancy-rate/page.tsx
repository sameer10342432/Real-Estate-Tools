'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, DollarSign, Home, AlertCircle } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Unit Breakeven Occupancy Rate Calculator | Property Tools',
    description: 'Calculate breakeven occupancy rate for rental properties. Determine minimum occupancy needed for profitability and optimize pricing strategies. Free landlord calculator.',
    keywords: [
      'breakeven occupancy rate',
      'rental property breakeven',
      'minimum occupancy calculator',
      'profitability calculator',
      'occupancy rate analysis',
      'rental property profit',
      'landlord breakeven',
      'rental income calculator',
      'property management metrics',
      'occupancy optimization'
    ],
  };
}

export default function BreakevenOccupancyCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<string>('2000');
  const [totalUnits, setTotalUnits] = useState<string>('10');
  const [mortgage, setMortgage] = useState<string>('8000');
  const [propertyTax, setPropertyTax] = useState<string>('1200');
  const [insurance, setInsurance] = useState<string>('400');
  const [utilities, setUtilities] = useState<string>('300');
  const [maintenance, setMaintenance] = useState<string>('500');
  const [propertyManagement, setPropertyManagement] = useState<string>('1600');
  const [otherExpenses, setOtherExpenses] = useState<string>('200');

  const calculate = () => {
    const rent = parseFloat(monthlyRent) || 0;
    const units = parseFloat(totalUnits) || 0;
    const mort = parseFloat(mortgage) || 0;
    const tax = parseFloat(propertyTax) || 0;
    const ins = parseFloat(insurance) || 0;
    const util = parseFloat(utilities) || 0;
    const maint = parseFloat(maintenance) || 0;
    const mgmt = parseFloat(propertyManagement) || 0;
    const other = parseFloat(otherExpenses) || 0;

    const totalExpenses = mort + tax + ins + util + maint + mgmt + other;
    const potentialGrossIncome = rent * units;
    const breakevenOccupancy = potentialGrossIncome > 0 ? (totalExpenses / potentialGrossIncome) * 100 : 0;
    const breakevenUnits = (totalExpenses / rent);
    const profitMarginAt100 = ((potentialGrossIncome - totalExpenses) / potentialGrossIncome) * 100;
    const profitAt100 = potentialGrossIncome - totalExpenses;

    const margins: { occupancy: number; units: number; revenue: number; profit: number; margin: number }[] = [];
    for (let occ = 50; occ <= 100; occ += 5) {
      const revenue = potentialGrossIncome * (occ / 100);
      const profit = revenue - totalExpenses;
      const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
      margins.push({
        occupancy: occ,
        units: units * (occ / 100),
        revenue,
        profit,
        margin
      });
    }

    return {
      totalExpenses,
      potentialGrossIncome,
      breakevenOccupancy,
      breakevenUnits,
      profitMarginAt100,
      profitAt100,
      margins
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rental Unit Breakeven Occupancy Rate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate minimum occupancy needed for profitability and optimize pricing
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Occupancy Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Property Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="monthlyRent">Monthly Rent per Unit ($)</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="totalUnits">Total Units</Label>
                    <Input
                      id="totalUnits"
                      type="number"
                      value={totalUnits}
                      onChange={(e) => setTotalUnits(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Monthly Expenses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="mortgage">Mortgage Payment ($)</Label>
                    <Input
                      id="mortgage"
                      type="number"
                      value={mortgage}
                      onChange={(e) => setMortgage(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyTax">Property Tax ($)</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance">Insurance ($)</Label>
                    <Input
                      id="insurance"
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operating Expenses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="utilities">Utilities ($)</Label>
                    <Input
                      id="utilities"
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maintenance">Maintenance ($)</Label>
                    <Input
                      id="maintenance"
                      type="number"
                      value={maintenance}
                      onChange={(e) => setMaintenance(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyManagement">Property Management ($)</Label>
                    <Input
                      id="propertyManagement"
                      type="number"
                      value={propertyManagement}
                      onChange={(e) => setPropertyManagement(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="otherExpenses">Other Expenses ($)</Label>
                    <Input
                      id="otherExpenses"
                      type="number"
                      value={otherExpenses}
                      onChange={(e) => setOtherExpenses(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-50 dark:bg-cyan-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Breakeven Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Breakeven Occupancy Rate</div>
                    <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                      {results.breakevenOccupancy.toFixed(1)}%
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Breakeven Units:</span>
                    <span className="font-bold">{results.breakevenUnits.toFixed(1)} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Expenses:</span>
                    <span className="font-bold">${results.totalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Potential Income:</span>
                    <span className="font-bold">${results.potentialGrossIncome.toLocaleString()}</span>
                  </div>
                  {results.breakevenOccupancy > 85 && (
                    <div className="bg-orange-100 dark:bg-orange-800/30 p-3 rounded-lg mt-3">
                      <p className="text-orange-800 dark:text-orange-200 text-sm">
                        ⚠️ High breakeven occupancy. Consider reducing expenses or increasing rent.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Occupancy Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Occupancy</th>
                        <th className="text-right p-2">Occupied Units</th>
                        <th className="text-right p-2">Revenue</th>
                        <th className="text-right p-2">Profit/Loss</th>
                        <th className="text-right p-2">Margin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.margins.map((item, idx) => {
                        const isProfitable = item.profit > 0;
                        const isBreakeven = Math.abs(item.occupancy - results.breakevenOccupancy) < 5;
                        return (
                          <tr key={idx} className={`border-b ${isBreakeven ? 'bg-cyan-50 dark:bg-cyan-900/20 font-semibold' : ''}`}>
                            <td className="p-2">{item.occupancy}%</td>
                            <td className="text-right p-2">{item.units.toFixed(1)}</td>
                            <td className="text-right p-2">${item.revenue.toLocaleString()}</td>
                            <td className={`text-right p-2 font-semibold ${isProfitable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              ${item.profit.toLocaleString()}
                            </td>
                            <td className="text-right p-2">{item.margin.toFixed(1)}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>At 100% Occupancy</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Monthly Profit</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    ${results.profitAt100.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Profit Margin</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {results.profitMarginAt100.toFixed(1)}%
                  </div>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Annual Profit</div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    ${(results.profitAt100 * 12).toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Breakeven Occupancy Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Breakeven Occupancy Rate</h2>
                <p>
                  Breakeven occupancy rate is the minimum percentage of units that must be rented to cover all operating expenses and debt service. It's a critical metric for rental property investors and managers, revealing the financial resilience of a property and guiding pricing and operational decisions.
                </p>

                <h3>Breakeven Occupancy Formula</h3>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Breakeven Occupancy = (Total Operating Expenses / Potential Gross Income) × 100
                </p>

                <h3>What Expenses to Include</h3>
                <ul>
                  <li><strong>Debt Service:</strong> Monthly mortgage payment (principal + interest)</li>
                  <li><strong>Property Taxes:</strong> Annual tax divided by 12</li>
                  <li><strong>Insurance:</strong> Property and liability coverage</li>
                  <li><strong>Utilities:</strong> Landlord-paid utilities (water, trash, common areas)</li>
                  <li><strong>Maintenance:</strong> Ongoing repairs and upkeep</li>
                  <li><strong>Property Management:</strong> Management fees (typically 8-12%)</li>
                  <li><strong>CapEx Reserves:</strong> Setting aside for major replacements</li>
                  <li><strong>HOA Fees:</strong> If applicable</li>
                  <li><strong>Other:</strong> Legal, accounting, marketing</li>
                </ul>

                <h3>Industry Benchmarks</h3>
                <ul>
                  <li><strong>Excellent:</strong> Below 70% (strong cash flow cushion)</li>
                  <li><strong>Good:</strong> 70-80% (healthy safety margin)</li>
                  <li><strong>Average:</strong> 80-85% (adequate but limited buffer)</li>
                  <li><strong>Concerning:</strong> 85-90% (vulnerable to vacancies)</li>
                  <li><strong>High Risk:</strong> Above 90% (very little margin for error)</li>
                </ul>

                <h3>Why Breakeven Occupancy Matters</h3>
                <ul>
                  <li><strong>Risk Assessment:</strong> Higher breakeven = higher risk</li>
                  <li><strong>Pricing Strategy:</strong> Informs rent setting decisions</li>
                  <li><strong>Loan Qualification:</strong> Lenders evaluate breakeven rates</li>
                  <li><strong>Portfolio Management:</strong> Compare properties objectively</li>
                  <li><strong>Exit Planning:</strong> Affects property marketability</li>
                  <li><strong>Operational Decisions:</strong> Guides expense reduction efforts</li>
                </ul>

                <h3>Improving Breakeven Occupancy</h3>
                
                <h4>Increase Income Side:</h4>
                <ul>
                  <li>Raise rents to market rate</li>
                  <li>Add income streams (parking, storage, laundry)</li>
                  <li>Charge for amenities previously included</li>
                  <li>Implement utility billing (RUBS)</li>
                  <li>Reduce concessions and discounts</li>
                </ul>

                <h4>Decrease Expense Side:</h4>
                <ul>
                  <li>Refinance to lower interest rate</li>
                  <li>Appeal property tax assessment</li>
                  <li>Shop insurance annually</li>
                  <li>Implement energy efficiency measures</li>
                  <li>Negotiate vendor contracts</li>
                  <li>Reduce property management fees</li>
                  <li>Preventive maintenance to avoid expensive repairs</li>
                </ul>

                <h3>Relationship to Debt Service Coverage Ratio (DSCR)</h3>
                <p>
                  DSCR and breakeven occupancy are inversely related:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  DSCR = Net Operating Income / Debt Service
                </p>
                <ul>
                  <li><strong>High Breakeven (85%+):</strong> Low DSCR (under 1.2)</li>
                  <li><strong>Moderate Breakeven (75-85%):</strong> Adequate DSCR (1.2-1.5)</li>
                  <li><strong>Low Breakeven (under 75%):</strong> Strong DSCR (1.5+)</li>
                </ul>

                <h3>Occupancy Scenarios</h3>
                <p>
                  Understanding profitability at different occupancy levels:
                </p>
                <ul>
                  <li><strong>Below Breakeven:</strong> Losing money monthly, may need cash infusion</li>
                  <li><strong>At Breakeven:</strong> Covering expenses but no profit</li>
                  <li><strong>5-10% Above Breakeven:</strong> Modest profit, limited margin</li>
                  <li><strong>10-20% Above Breakeven:</strong> Good profit margin, sustainable</li>
                  <li><strong>20%+ Above Breakeven:</strong> Excellent margins, strong cash flow</li>
                </ul>

                <h3>Using Breakeven for Pricing Decisions</h3>
                
                <h4>Scenario: Should you lower rent to reduce vacancy?</h4>
                <p>
                  Calculate whether lost rent from discount exceeds cost of vacancy:
                </p>
                <ul>
                  <li>Current rent: $2,000, current occupancy: 80%, breakeven: 75%</li>
                  <li>Option A: Keep $2,000 rent at 80% occupancy</li>
                  <li>Option B: Lower to $1,900 (5% discount) to achieve 95% occupancy</li>
                  <li>Compare: Net Operating Income at each scenario</li>
                </ul>

                <h3>Impact of Leverage</h3>
                <p>
                  Higher leverage (more debt) increases breakeven occupancy:
                </p>
                <ul>
                  <li><strong>All-Cash Purchase:</strong> Lower breakeven (no mortgage)</li>
                  <li><strong>80% LTV:</strong> Moderate breakeven</li>
                  <li><strong>90-95% LTV:</strong> High breakeven (less margin)</li>
                </ul>
                <p>
                  While leverage magnifies returns, it also reduces occupancy buffer.
                </p>

                <h3>Market Cycle Considerations</h3>
                
                <h4>Strong Markets (Low Vacancy):</h4>
                <ul>
                  <li>Higher breakeven acceptable (easier to maintain occupancy)</li>
                  <li>Can operate efficiently with less margin</li>
                  <li>Focus on maximizing rents</li>
                </ul>

                <h4>Weak Markets (High Vacancy):</h4>
                <ul>
                  <li>Lower breakeven essential (harder to maintain occupancy)</li>
                  <li>Need larger safety cushion</li>
                  <li>Focus on tenant retention and expense control</li>
                </ul>

                <h3>Seasonal Variations</h3>
                <p>
                  Some properties experience seasonal occupancy patterns:
                </p>
                <ul>
                  <li><strong>College Housing:</strong> Accept summer vacancy if annual average exceeds breakeven</li>
                  <li><strong>Vacation Rentals:</strong> High season must offset low season losses</li>
                  <li><strong>Northern Climates:</strong> Winter may have lower demand</li>
                </ul>

                <h3>Multi-Property Portfolio Analysis</h3>
                <p>
                  View breakeven across entire portfolio:
                </p>
                <ul>
                  <li>Some properties above breakeven offset those below</li>
                  <li>Diversification reduces overall risk</li>
                  <li>Strategic: maintain mix of high/low breakeven properties</li>
                  <li>Warning signs: multiple properties above 85% breakeven</li>
                </ul>

                <h3>Investor Risk Profiles</h3>
                
                <h4>Conservative Investors:</h4>
                <ul>
                  <li>Target breakeven under 75%</li>
                  <li>Accept lower returns for safety margin</li>
                  <li>Prioritize stable, long-term tenants</li>
                </ul>

                <h4>Moderate Investors:</h4>
                <ul>
                  <li>Target breakeven 75-85%</li>
                  <li>Balance risk and return</li>
                  <li>Active management to maintain margins</li>
                </ul>

                <h4>Aggressive Investors:</h4>
                <ul>
                  <li>Accept breakeven above 85%</li>
                  <li>Maximize returns through leverage</li>
                  <li>Hands-on management required</li>
                  <li>Higher risk of cash flow problems</li>
                </ul>

                <h3>Red Flags</h3>
                <p>
                  Immediate concern if:
                </p>
                <ul>
                  <li>Breakeven above 90%</li>
                  <li>Current occupancy below breakeven</li>
                  <li>Breakeven trending upward over time</li>
                  <li>Market vacancy rates rising</li>
                  <li>Multiple months of negative cash flow</li>
                </ul>

                <h3>Stress Testing</h3>
                <p>
                  Model various scenarios:
                </p>
                <ul>
                  <li><strong>Worst Case:</strong> 70% occupancy - can you survive?</li>
                  <li><strong>Recession:</strong> 80% occupancy with 5% rent decrease</li>
                  <li><strong>Interest Rate Shock:</strong> Mortgage rate increases 2%</li>
                  <li><strong>Tax Increase:</strong> Property taxes rise 15%</li>
                  <li><strong>Major Repair:</strong> $20,000 unexpected expense</li>
                </ul>

                <h3>Reporting and Tracking</h3>
                <p>
                  Monitor breakeven occupancy:
                </p>
                <ul>
                  <li><strong>Monthly:</strong> Calculate actual occupancy vs. breakeven</li>
                  <li><strong>Quarterly:</strong> Review expense trends affecting breakeven</li>
                  <li><strong>Annually:</strong> Full analysis with updated rent and expense projections</li>
                  <li><strong>Before Purchases:</strong> Calculate pro forma breakeven</li>
                  <li><strong>Before Refinancing:</strong> Understand impact on breakeven</li>
                </ul>

                <h3>Communicating with Lenders</h3>
                <p>
                  Banks evaluate breakeven when underwriting loans:
                </p>
                <ul>
                  <li>Lower breakeven = easier loan approval</li>
                  <li>High breakeven may require larger down payment</li>
                  <li>Some lenders have maximum breakeven thresholds</li>
                  <li>Document your plan to maintain occupancy above breakeven</li>
                </ul>

                <h3>Exit Strategy Implications</h3>
                <p>
                  Breakeven affects property marketability:
                </p>
                <ul>
                  <li><strong>Low Breakeven:</strong> More attractive to buyers, commands premium</li>
                  <li><strong>High Breakeven:</strong> Limits buyer pool, may reduce price</li>
                  <li><strong>Seller Financing:</strong> Buyer assumes your breakeven risk</li>
                </ul>

                <h3>Technology Tools</h3>
                <ul>
                  <li><strong>Spreadsheet Models:</strong> Build dynamic breakeven calculators</li>
                  <li><strong>Property Management Software:</strong> Automated occupancy tracking</li>
                  <li><strong>Financial Dashboards:</strong> Real-time breakeven monitoring</li>
                  <li><strong>Scenario Planning Tools:</strong> Model what-if situations</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Breakeven occupancy rate is a fundamental metric every rental property investor must understand and monitor. It reveals the margin of safety in your investment, guides pricing and expense decisions, and helps assess risk tolerance. Properties with low breakeven rates (under 75%) provide comfortable cash flow cushions and weather market downturns better. High breakeven properties (above 85%) require active management, higher occupancy rates, and carry greater risk of negative cash flow.
                </p>
                <p>
                  Use this calculator to evaluate current properties, analyze potential acquisitions, and make informed decisions about rent pricing, expense management, and refinancing. Remember: while maximizing returns is important, maintaining a reasonable breakeven occupancy ensures your investment remains sustainable through inevitable market cycles and unexpected vacancies.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
