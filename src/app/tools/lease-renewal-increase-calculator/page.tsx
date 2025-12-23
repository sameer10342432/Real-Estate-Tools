'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, DollarSign, Users, Home } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lease Renewal Increase Calculator | Property Tools',
    description: 'Calculate optimal lease renewal rent increases. Analyze market rates, tenant retention costs, and maximize rental income while minimizing turnover. Free landlord calculator.',
    keywords: [
      'lease renewal calculator',
      'rent increase calculator',
      'renewal rate optimization',
      'tenant retention',
      'rental increase analysis',
      'landlord rent increase',
      'lease renewal strategy',
      'market rent analysis',
      'turnover cost calculator',
      'tenant retention cost'
    ],
  };
}

export default function LeaseRenewalIncreaseCalculator() {
  const [currentRent, setCurrentRent] = useState<string>('2000');
  const [marketRent, setMarketRent] = useState<string>('2200');
  const [proposedIncrease, setProposedIncrease] = useState<string>('5');
  const [turnoverCost, setTurnoverCost] = useState<string>('2500');
  const [vacancyDays, setVacancyDays] = useState<string>('30');
  const [tenantQuality, setTenantQuality] = useState<string>('excellent');
  const [yearsOfTenancy, setYearsOfTenancy] = useState<string>('3');

  const calculate = () => {
    const current = parseFloat(currentRent) || 0;
    const market = parseFloat(marketRent) || 0;
    const increase = parseFloat(proposedIncrease) / 100 || 0;
    const turnover = parseFloat(turnoverCost) || 0;
    const vacancy = parseFloat(vacancyDays) || 0;
    const years = parseFloat(yearsOfTenancy) || 0;

    const newRent = current * (1 + increase);
    const increaseAmount = newRent - current;
    const annualIncreaseIncome = increaseAmount * 12;
    const percentOfMarket = market > 0 ? (newRent / market) * 100 : 0;
    const gapToMarket = market - newRent;

    const lostRent = (current / 30) * vacancy;
    const totalTurnoverCost = turnover + lostRent;
    const monthsToRecoverTurnover = increaseAmount > 0 ? totalTurnoverCost / increaseAmount : 0;

    const riskScore = tenantQuality === 'excellent' ? 0.2 : tenantQuality === 'good' ? 0.4 : tenantQuality === 'average' ? 0.6 : 0.8;
    const tenantValue = years > 5 ? 'very-high' : years > 3 ? 'high' : years > 1 ? 'medium' : 'low';

    const recommendedIncrease = Math.min((market - current) / current, 0.10) * 100;

    return {
      newRent,
      increaseAmount,
      annualIncreaseIncome,
      percentOfMarket,
      gapToMarket,
      lostRent,
      totalTurnoverCost,
      monthsToRecoverTurnover,
      riskScore,
      tenantValue,
      recommendedIncrease
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-12 w-12 text-violet-600 dark:text-violet-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lease Renewal Increase Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate optimal rent increases while maximizing income and minimizing turnover
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Renewal Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Rent Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentRent">Current Monthly Rent ($)</Label>
                    <Input
                      id="currentRent"
                      type="number"
                      value={currentRent}
                      onChange={(e) => setCurrentRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="marketRent">Market Rate Rent ($)</Label>
                    <Input
                      id="marketRent"
                      type="number"
                      value={marketRent}
                      onChange={(e) => setMarketRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="proposedIncrease">Proposed Increase (%)</Label>
                    <Input
                      id="proposedIncrease"
                      type="number"
                      value={proposedIncrease}
                      onChange={(e) => setProposedIncrease(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Turnover Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="turnoverCost">Turnover Cost ($)</Label>
                    <Input
                      id="turnoverCost"
                      type="number"
                      value={turnoverCost}
                      onChange={(e) => setTurnoverCost(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Cleaning, repairs, marketing</p>
                  </div>
                  <div>
                    <Label htmlFor="vacancyDays">Expected Vacancy (days)</Label>
                    <Input
                      id="vacancyDays"
                      type="number"
                      value={vacancyDays}
                      onChange={(e) => setVacancyDays(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Tenant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tenantQuality">Tenant Quality</Label>
                    <select
                      id="tenantQuality"
                      value={tenantQuality}
                      onChange={(e) => setTenantQuality(e.target.value)}
                      className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
                    >
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="yearsOfTenancy">Years of Tenancy</Label>
                    <Input
                      id="yearsOfTenancy"
                      type="number"
                      value={yearsOfTenancy}
                      onChange={(e) => setYearsOfTenancy(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-violet-50 dark:bg-violet-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Increase Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">New Rent:</span>
                    <span className="font-bold text-violet-600 dark:text-violet-400">
                      ${results.newRent.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Monthly Increase:</span>
                    <span className="font-bold">${results.increaseAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Increase:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      ${results.annualIncreaseIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-medium">% of Market Rent:</span>
                    <span className="font-bold">{results.percentOfMarket.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Gap to Market:</span>
                    <span className="font-bold">${results.gapToMarket.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cost-Benefit Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Turnover Cost</div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      ${results.totalTurnoverCost.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Cost + Lost Rent</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Months to Recover</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {results.monthsToRecoverTurnover.toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">If tenant leaves</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recommended Increase</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {results.recommendedIncrease.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Based on market</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className={`p-4 rounded-lg ${parseFloat(proposedIncrease) > 10 ? 'bg-red-100 dark:bg-red-800/30' : parseFloat(proposedIncrease) > 7 ? 'bg-yellow-100 dark:bg-yellow-800/30' : 'bg-green-100 dark:bg-green-800/30'}`}>
                    <h3 className="font-semibold mb-2">Recommendation</h3>
                    <p className="text-sm">
                      {parseFloat(proposedIncrease) > 10 && (
                        <>⚠️ High increase ({proposedIncrease}%) may drive tenant to leave. Consider phasing increase over multiple years.</>
                      )}
                      {parseFloat(proposedIncrease) <= 10 && parseFloat(proposedIncrease) > 7 && (
                        <>Moderate increase ({proposedIncrease}%). Acceptable for good tenants, may risk losing marginal ones.</>
                      )}
                      {parseFloat(proposedIncrease) <= 7 && (
                        <>✓ Conservative increase ({proposedIncrease}%). Good balance of income growth and tenant retention.</>
                      )}
                    </p>
                  </div>
                </div>

                {tenantQuality === 'excellent' && parseFloat(yearsOfTenancy) >= 3 && (
                  <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      ✓ <strong>High-Value Tenant:</strong> Excellent tenant with {yearsOfTenancy}+ years tenancy. Consider keeping increase modest (3-5%) to maximize retention.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scenario Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Scenario</th>
                        <th className="text-right p-2">Monthly Rent</th>
                        <th className="text-right p-2">Annual Income</th>
                        <th className="text-right p-2">Net After Turnover</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Keep Current Tenant</td>
                        <td className="text-right p-2">${results.newRent.toLocaleString()}</td>
                        <td className="text-right p-2">${(results.newRent * 12).toLocaleString()}</td>
                        <td className="text-right p-2 text-green-600 dark:text-green-400 font-semibold">
                          ${(results.newRent * 12).toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Turnover to Market Rent</td>
                        <td className="text-right p-2">${parseFloat(marketRent).toLocaleString()}</td>
                        <td className="text-right p-2">${(parseFloat(marketRent) * 12).toLocaleString()}</td>
                        <td className="text-right p-2 font-semibold">
                          ${((parseFloat(marketRent) * 12) - results.totalTurnoverCost).toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Better Option</td>
                        <td colSpan={3} className="text-right p-2 text-violet-600 dark:text-violet-400 font-bold">
                          {(results.newRent * 12) > ((parseFloat(marketRent) * 12) - results.totalTurnoverCost) 
                            ? 'Keep Current Tenant' 
                            : 'Pursue Market Rent'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Lease Renewal Strategy Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Strategic Approach to Lease Renewals</h2>
                <p>
                  Lease renewal decisions significantly impact rental property profitability. The right increase maximizes income while retaining quality tenants; the wrong increase drives tenants away, resulting in costly turnover. This guide provides a data-driven framework for renewal pricing that balances income optimization with tenant retention.
                </p>

                <h3>The True Cost of Turnover</h3>
                <p>
                  Understanding all turnover costs is essential for renewal decisions:
                </p>
                <ul>
                  <li><strong>Lost Rent:</strong> 20-60 days of vacancy = $1,300-$4,000 (based on $2,000/mo rent)</li>
                  <li><strong>Cleaning:</strong> $200-$500 for professional deep clean</li>
                  <li><strong>Painting:</strong> $400-$1,500 depending on size and condition</li>
                  <li><strong>Repairs:</strong> $300-$2,000 for normal wear items</li>
                  <li><strong>Carpet/Flooring:</strong> $500-$3,000 if replacement needed</li>
                  <li><strong>Marketing:</strong> $100-$500 for ads, photos, signage</li>
                  <li><strong>Screening:</strong> $30-$100 per application</li>
                  <li><strong>Lease Processing:</strong> $50-$200 in time/services</li>
                  <li><strong>Commission:</strong> 0-100% of one month rent if using agent</li>
                </ul>
                <p><strong>Total Typical Turnover:</strong> $2,500-$5,000+ per event</p>

                <h3>Renewal Increase Guidelines by Market</h3>
                
                <h4>Strong Markets (Low Vacancy, High Demand):</h4>
                <ul>
                  <li>Can support 5-10% increases</li>
                  <li>Tenant replacement relatively easy</li>
                  <li>Market rents rising quickly</li>
                  <li>Focus on maximizing income</li>
                </ul>

                <h4>Balanced Markets (Average Conditions):</h4>
                <ul>
                  <li>Target 3-7% increases</li>
                  <li>Balance income and retention</li>
                  <li>Moderate replacement difficulty</li>
                  <li>Follow inflation + quality premium</li>
                </ul>

                <h4>Weak Markets (High Vacancy, Oversupply):</h4>
                <ul>
                  <li>Limit to 2-4% increases</li>
                  <li>Prioritize retention heavily</li>
                  <li>Challenging tenant replacement</li>
                  <li>Consider no increase for excellent tenants</li>
                </ul>

                <h3>Tenant Quality Matrix</h3>
                
                <h4>Excellent Tenants:</h4>
                <ul>
                  <li>Always pays on time</li>
                  <li>No complaints from neighbors</li>
                  <li>Keeps unit in great condition</li>
                  <li>Communicates proactively</li>
                  <li><strong>Strategy:</strong> Conservative increases (3-5%), prioritize retention</li>
                </ul>

                <h4>Good Tenants:</h4>
                <ul>
                  <li>Occasional late payment but reliable</li>
                  <li>Maintains unit adequately</li>
                  <li>Minor issues but cooperative</li>
                  <li><strong>Strategy:</strong> Moderate increases (4-7%), standard renewal</li>
                </ul>

                <h4>Marginal Tenants:</h4>
                <ul>
                  <li>Frequent late payments</li>
                  <li>Property condition concerns</li>
                  <li>Neighbor complaints</li>
                  <li><strong>Strategy:</strong> Higher increases (7-10%), screen replacement carefully</li>
                </ul>

                <h4>Problem Tenants:</h4>
                <ul>
                  <li>Consistent payment issues</li>
                  <li>Lease violations</li>
                  <li>Property damage</li>
                  <li><strong>Strategy:</strong> Market rate increase or non-renewal</li>
                </ul>

                <h3>Timing Your Renewal Offer</h3>
                <p>
                  When to approach tenants:
                </p>
                <ul>
                  <li><strong>90 Days Before:</strong> Gives tenant time to consider and plan</li>
                  <li><strong>60 Days Minimum:</strong> Standard notice period in many leases</li>
                  <li><strong>30 Days or Less:</strong> Too rushed, may force tenant to leave</li>
                </ul>

                <h3>Renewal Conversation Framework</h3>
                
                <h4>Step 1: Express Appreciation</h4>
                <p>
                  "We've appreciated having you as a tenant. You've been [specific positive attribute: timely with rent, great communication, etc.]."
                </p>

                <h4>Step 2: Present Market Context</h4>
                <p>
                  "The rental market has changed over the past year. Comparable units in the area are now renting for $X,XXX."
                </p>

                <h4>Step 3: Make the Offer</h4>
                <p>
                  "We'd like to renew your lease at $X,XXX per month, which represents a [X%] increase and remains [X% below / at / near] current market rates."
                </p>

                <h4>Step 4: Highlight Value</h4>
                <p>
                  "This allows you to avoid moving costs and the hassle of finding a new place, while we avoid turnover expenses and continue with a great tenant relationship."
                </p>

                <h4>Step 5: Request Response</h4>
                <p>
                  "Please let me know your decision by [date]. If you have any questions or concerns, I'm happy to discuss."
                </p>

                <h3>Negotiation Strategies</h3>
                
                <h4>If Tenant Pushes Back:</h4>
                <ul>
                  <li><strong>Document Market Rents:</strong> Show comparable listings</li>
                  <li><strong>Highlight Improvements:</strong> Recent upgrades to property</li>
                  <li><strong>Offer Multi-Year:</strong> Lock in rate for 2 years vs. annual increases</li>
                  <li><strong>Compromise Amount:</strong> Meet halfway between current and proposed</li>
                  <li><strong>Add Value:</strong> Include parking, storage, or amenity access</li>
                  <li><strong>Phase Increase:</strong> Smaller increase now, another in 6 months</li>
                </ul>

                <h4>What NOT to Do:</h4>
                <ul>
                  <li>Make threats about finding new tenants</li>
                  <li>Compare tenant unfavorably to others</li>
                  <li>Reveal desperation to keep them</li>
                  <li>Disclose financial pressures</li>
                  <li>Violate fair housing by treating similarly situated tenants differently</li>
                </ul>

                <h3>Legal Considerations</h3>
                
                <h4>Rent Control/Stabilization:</h4>
                <ul>
                  <li>NYC: Limited increases (varies by program)</li>
                  <li>San Francisco: Annual increase limits</li>
                  <li>California AB 1482: 5% + CPI (max 10% total)</li>
                  <li>Check local and state laws before increasing</li>
                </ul>

                <h4>Notice Requirements:</h4>
                <ul>
                  <li>Most leases: 30-60 days written notice</li>
                  <li>Some jurisdictions: 90+ days for large increases</li>
                  <li>Check lease terms and local laws</li>
                </ul>

                <h4>Fair Housing:</h4>
                <ul>
                  <li>Apply consistent criteria to all tenants</li>
                  <li>Document business justification for increases</li>
                  <li>Don't target protected classes</li>
                  <li>Maintain records of all renewal offers</li>
                </ul>

                <h3>When to Offer No Increase</h3>
                <p>
                  Consider flat renewal when:
                </p>
                <ul>
                  <li>Exceptional tenant, long-term resident (5+ years)</li>
                  <li>Current rent already at or above market</li>
                  <li>Weak rental market with high vacancy</li>
                  <li>Recent major rent increase (within 6-12 months)</li>
                  <li>Property needs major work that will inconvenience tenant</li>
                  <li>Strategic: lock in long-term lease (2-3 years)</li>
                </ul>

                <h3>Multi-Year Lease Strategies</h3>
                <p>
                  Advantages of 2-3 year leases:
                </p>
                <ul>
                  <li>Guaranteed occupancy and income</li>
                  <li>Reduced turnover frequency</li>
                  <li>Predictable cash flow</li>
                  <li>Less marketing and screening</li>
                </ul>
                <p>
                  Structure options:
                </p>
                <ul>
                  <li><strong>Fixed Rate:</strong> Same rent entire term</li>
                  <li><strong>Stepped Increases:</strong> 3% in year 2, 3% in year 3</li>
                  <li><strong>Index-Linked:</strong> Tied to CPI or similar index</li>
                </ul>

                <h3>Property Condition Impact</h3>
                <p>
                  Factor property improvements into increases:
                </p>
                <ul>
                  <li><strong>No Updates:</strong> CPI or below (2-3%)</li>
                  <li><strong>Minor Improvements:</strong> CPI + 1-2% (3-5% total)</li>
                  <li><strong>Major Upgrades:</strong> CPI + 2-5% (5-8% total)</li>
                  <li><strong>Full Renovation:</strong> Market rate reset (10%+ possible)</li>
                </ul>

                <h3>Data-Driven Decision Framework</h3>
                
                <h4>Gather Data:</h4>
                <ol>
                  <li>Current market rents (3-5 comparable units)</li>
                  <li>Your historical vacancy rate</li>
                  <li>Average turnover cost</li>
                  <li>Tenant payment history and quality rating</li>
                  <li>Local market vacancy trend</li>
                </ol>

                <h4>Calculate:</h4>
                <ol>
                  <li>Potential annual income with proposed increase</li>
                  <li>Expected turnover cost if tenant leaves</li>
                  <li>Months to recover turnover through increased rent</li>
                  <li>Net benefit of renewal vs. turnover to market rate</li>
                </ol>

                <h4>Decide:</h4>
                <ul>
                  <li>If recovery period > 12 months AND tenant excellent: Reduce increase</li>
                  <li>If recovery period 6-12 months AND tenant good/average: Proceed</li>
                  <li>If recovery period < 6 months AND tenant marginal: Proceed or higher increase</li>
                </ul>

                <h3>Communication Templates</h3>
                
                <h4>Standard Renewal Letter:</h4>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  "Dear [Tenant Name],<br/><br/>
                  Your lease ends on [date]. We've valued you as a tenant and would like to offer renewal at $[amount]/month, a [X%] increase from your current rent of $[current].<br/><br/>
                  This rate reflects current market conditions while remaining [below/at/competitive with] comparable units. Please respond by [date] to confirm your decision.<br/><br/>
                  Thank you for being a great tenant.<br/><br/>
                  Sincerely,<br/>
                  [Landlord Name]"
                </p>

                <h3>Tracking and Optimization</h3>
                <p>
                  Monitor renewal metrics:
                </p>
                <ul>
                  <li><strong>Renewal Rate:</strong> % of offered renewals accepted</li>
                  <li><strong>Average Increase:</strong> Mean % increase across portfolio</li>
                  <li><strong>Turnover Rate:</strong> % of units turning over annually</li>
                  <li><strong>Days to Re-Rent:</strong> Average vacancy period</li>
                  <li><strong>Rent-to-Market Ratio:</strong> Your rent vs. market average</li>
                </ul>
                <p>
                  Ideal benchmarks:
                </p>
                <ul>
                  <li>Renewal rate: 70-85%</li>
                  <li>Average increase: 3-7% annually</li>
                  <li>Turnover: 15-30% per year</li>
                  <li>Days to re-rent: Under 30</li>
                  <li>Rent-to-market: 95-105%</li>
                </ul>

                <h3>Advanced Strategies</h3>
                
                <h4>Tiered Renewal Offers:</h4>
                <ul>
                  <li>Option A: 1-year at $X (market rate)</li>
                  <li>Option B: 2-year at $Y (5% below market, 3% increase year 2)</li>
                  <li>Option C: 3-year at $Z (10% below market, locked rate)</li>
                </ul>

                <h4>Incentive Bundling:</h4>
                <ul>
                  <li>Rent increase + one month free rent (effectively reduces increase)</li>
                  <li>Rent increase + property upgrade (new appliances, paint)</li>
                  <li>Rent increase + additional amenity access</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Successful lease renewal strategy balances maximizing rental income with minimizing turnover costs. The optimal increase depends on market conditions, property characteristics, and most importantly, tenant quality. Excellent tenants delivering consistent payments and property care are worth retaining, even at below-market rents, when turnover costs are factored in.
                </p>
                <p>
                  Use this calculator to run the numbers for each renewal decision, considering both the immediate income impact and the long-term costs of potential turnover. Document your analysis, communicate professionally, and remain flexible in negotiation. The goal isn't to squeeze every dollar from every renewal—it's to optimize total returns across your portfolio while maintaining stable occupancy with quality tenants.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
