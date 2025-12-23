'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, TrendingDown, DollarSign, AlertCircle } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Vacancy Rate Calculator | Property Tools',
    description: 'Calculate rental property vacancy rates, analyze market conditions, and optimize pricing strategies to minimize vacant periods. Free calculator for landlords.',
    keywords: [
      'vacancy rate calculator',
      'rental vacancy analysis',
      'property occupancy rate',
      'vacant days calculator',
      'rental income loss',
      'occupancy optimization',
      'landlord vacancy planning',
      'rental market analysis',
      'vacancy cost calculator',
      'tenant turnover'
    ],
  };
}

export default function RentalVacancyRateCalculator() {
  const [totalUnits, setTotalUnits] = useState<string>('10');
  const [vacantUnits, setVacantUnits] = useState<string>('2');
  const [avgVacancyDays, setAvgVacancyDays] = useState<string>('30');
  const [monthlyRent, setMonthlyRent] = useState<string>('2000');
  const [turningCosts, setTurnovercosts] = useState<string>('1500');

  const calculate = () => {
    const total = parseFloat(totalUnits) || 0;
    const vacant = parseFloat(vacantUnits) || 0;
    const days = parseFloat(avgVacancyDays) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const turnover = parseFloat(turningCosts) || 0;

    const vacancyRate = total > 0 ? (vacant / total) * 100 : 0;
    const occupancyRate = 100 - vacancyRate;
    const annualVacancyDays = (days / 365) * 100;
    const monthlyLostIncome = rent * vacant;
    const annualLostIncome = (rent * days / 30) * (total * 12 / 365 * days);
    const turningoverCostAnnual = (365 / days) * turnover * total;
    const totalVacancyCost = annualLostIncome + turnoverCostAnnual;

    return {
      vacancyRate,
      occupancyRate,
      annualVacancyDays,
      monthlyLostIncome,
      annualLostIncome: (rent * days / 30),
      turnoverCostAnnual,
      totalVacancyCost: (rent * days / 30) + turnover
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingDown className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rental Vacancy Rate Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate vacancy rates, analyze costs, and optimize occupancy strategies
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Vacancy Guide</TabsTrigger>
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
                    <Label htmlFor="totalUnits">Total Units</Label>
                    <Input
                      id="totalUnits"
                      type="number"
                      value={totalUnits}
                      onChange={(e) => setTotalUnits(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vacantUnits">Currently Vacant Units</Label>
                    <Input
                      id="vacantUnits"
                      type="number"
                      value={vacantUnits}
                      onChange={(e) => setVacantUnits(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="avgVacancyDays">Average Vacancy Days</Label>
                    <Input
                      id="avgVacancyDays"
                      type="number"
                      value={avgVacancyDays}
                      onChange={(e) => setAvgVacancyDays(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Days between tenants</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Financial Information
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
                    <Label htmlFor="turnoverCosts">Turnover Costs per Unit ($)</Label>
                    <Input
                      id="turnoverCosts"
                      type="number"
                      value={turningCosts}
                      onChange={(e) => setTurnovercosts(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Cleaning, repairs, marketing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Vacancy Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Vacancy Rate:</span>
                    <span className="font-bold text-red-600 dark:text-red-400">
                      {results.vacancyRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Occupancy Rate:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      {results.occupancyRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Vacancy:</span>
                    <span className="font-bold">{results.annualVacancyDays.toFixed(1)} days</span>
                  </div>
                  {results.vacancyRate > 10 && (
                    <div className="bg-red-100 dark:bg-red-800/30 p-3 rounded-lg mt-3">
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        ⚠️ High vacancy rate - consider pricing or marketing adjustments
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Vacancy Cost Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Lost Rent per Vacancy:</span>
                    <span className="font-bold">${results.annualLostIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Turnover Costs:</span>
                    <span className="font-bold">${turnoverCosts}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total Cost per Vacancy:</span>
                    <span className="font-bold text-red-600 dark:text-red-400">
                      ${results.totalVacancyCost.toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Annual Impact</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lost Rental Income</div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                    ${results.annualLostIncome.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Annual Turnover Costs</div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    ${turnoverCosts}
                  </div>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Vacancy Cost</div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    ${results.totalVacancyCost.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${results.vacancyRate < 5 ? 'bg-green-100 dark:bg-green-800/30' : results.vacancyRate < 10 ? 'bg-yellow-100 dark:bg-yellow-800/30' : 'bg-red-100 dark:bg-red-800/30'}`}>
                <h3 className="font-semibold mb-2">Market Assessment</h3>
                <p className="text-sm">
                  {results.vacancyRate < 5 && 'Excellent! Your vacancy rate is below market average.'}
                  {results.vacancyRate >= 5 && results.vacancyRate < 10 && 'Good. Your vacancy rate is within normal range.'}
                  {results.vacancyRate >= 10 && 'High vacancy. Consider reviewing your pricing and marketing strategy.'}
                </p>
              </div>
              <div className="p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                <h3 className="font-semibold mb-2">Optimization Opportunity</h3>
                <p className="text-sm">
                  Reducing vacancy by just 5 days could save ${((parseFloat(monthlyRent) * 5) / 30).toLocaleString()} per turnover.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Rental Vacancy Rate Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Rental Vacancy Rates</h2>
                <p>
                  Vacancy rate is one of the most critical metrics for rental property owners and investors. It measures the percentage of vacant units or time periods when a property generates no rental income. Understanding and managing vacancy rates directly impacts cash flow, profitability, and property value.
                </p>

                <h3>What is Vacancy Rate?</h3>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Vacancy Rate = (Vacant Units / Total Units) × 100
                </p>
                <p>
                  Or for time-based calculation:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Vacancy Rate = (Vacant Days / Total Days) × 100
                </p>

                <h3>Industry Benchmarks</h3>
                <ul>
                  <li><strong>Excellent:</strong> 0-5% (95-100% occupancy)</li>
                  <li><strong>Good:</strong> 5-8% (92-95% occupancy)</li>
                  <li><strong>Average:</strong> 8-10% (90-92% occupancy)</li>
                  <li><strong>Concerning:</strong> 10-15% (85-90% occupancy)</li>
                  <li><strong>Poor:</strong> Above 15% (below 85% occupancy)</li>
                </ul>

                <h3>Types of Vacancy</h3>
                
                <h4>Physical Vacancy</h4>
                <p>
                  Actual unoccupied units. Easier to measure but doesn't account for all lost income.
                </p>

                <h4>Economic Vacancy</h4>
                <p>
                  Includes physical vacancy plus income loss from non-paying tenants, concessions, and discounts. More accurate for financial analysis.
                </p>

                <h4>Frictional Vacancy</h4>
                <p>
                  Normal vacancy between tenants for turnover, cleaning, and minor repairs. Typically 3-7% annually.
                </p>

                <h4>Structural Vacancy</h4>
                <p>
                  Long-term vacancy due to market oversupply, property issues, or economic decline. Requires strategic intervention.
                </p>

                <h3>Causes of High Vacancy</h3>
                <ul>
                  <li><strong>Overpricing:</strong> Rent above market rate for area/amenities</li>
                  <li><strong>Poor Marketing:</strong> Insufficient advertising or targeting wrong demographics</li>
                  <li><strong>Property Condition:</strong> Deferred maintenance or outdated features</li>
                  <li><strong>Location Issues:</strong> Safety concerns, inconvenient access, declining neighborhood</li>
                  <li><strong>Management Problems:</strong> Slow response times, unprofessional service</li>
                  <li><strong>Market Oversupply:</strong> Too many competing units</li>
                  <li><strong>Economic Downturn:</strong> Job losses, population decline</li>
                  <li><strong>Seasonal Factors:</strong> College towns, resort areas</li>
                </ul>

                <h3>True Cost of Vacancy</h3>
                <p>
                  Vacancy costs more than just lost rent:
                </p>
                <ul>
                  <li><strong>Lost Rental Income:</strong> Obvious but often underestimated</li>
                  <li><strong>Utilities:</strong> Landlord pays utilities for vacant units</li>
                  <li><strong>Maintenance:</strong> Vacant units still require upkeep</li>
                  <li><strong>Security:</strong> Empty units attract vandalism and squatters</li>
                  <li><strong>Turnover Costs:</strong> Cleaning, repairs, repainting</li>
                  <li><strong>Marketing:</strong> Advertising, signs, showing costs</li>
                  <li><strong>Leasing Commissions:</strong> Agent fees if applicable</li>
                  <li><strong>Opportunity Cost:</strong> Money could be invested elsewhere</li>
                  <li><strong>Property Value:</strong> High vacancy lowers cap rate and value</li>
                </ul>

                <h3>Strategies to Reduce Vacancy</h3>
                
                <h4>Pricing Optimization</h4>
                <ul>
                  <li>Research comparable properties weekly</li>
                  <li>Price competitively, not at top of market</li>
                  <li>Offer move-in specials during slow seasons</li>
                  <li>Consider rent concessions vs. lower base rent</li>
                </ul>

                <h4>Marketing Excellence</h4>
                <ul>
                  <li>Professional photos and virtual tours</li>
                  <li>List on multiple platforms (Zillow, Apartments.com, Craigslist)</li>
                  <li>Social media marketing</li>
                  <li>Video walkthroughs</li>
                  <li>Respond to inquiries within 1 hour</li>
                  <li>Easy scheduling for showings</li>
                </ul>

                <h4>Property Improvements</h4>
                <ul>
                  <li>Fresh paint and clean carpets</li>
                  <li>Modern fixtures and finishes</li>
                  <li>Energy-efficient appliances</li>
                  <li>Smart home features (thermostats, locks)</li>
                  <li>Upgraded landscaping and curb appeal</li>
                </ul>

                <h4>Tenant Retention</h4>
                <ul>
                  <li>Responsive maintenance (24-48 hour turnaround)</li>
                  <li>Regular communication</li>
                  <li>Loyalty incentives for renewals</li>
                  <li>Competitive rent increases (3-5% vs. 10%)</li>
                  <li>Community building (events, amenities)</li>
                </ul>

                <h4>Efficient Turnover Process</h4>
                <ul>
                  <li>Start marketing 60 days before move-out</li>
                  <li>Pre-schedule cleaning and repairs</li>
                  <li>Streamlined application process</li>
                  <li>Flexible move-in dates</li>
                  <li>Professional property management</li>
                </ul>

                <h3>Optimal Turnover Timeline</h3>
                <p><strong>Goal: 14-21 Days Between Tenants</strong></p>
                <ul>
                  <li><strong>Days 1-3:</strong> Final walk-through, assess repairs needed</li>
                  <li><strong>Days 4-7:</strong> Deep cleaning, painting, minor repairs</li>
                  <li><strong>Days 8-10:</strong> Professional photos, list property</li>
                  <li><strong>Days 11-14:</strong> Showings and applications</li>
                  <li><strong>Days 15-17:</strong> Screen tenants, sign lease</li>
                  <li><strong>Days 18-21:</strong> Final preparations, move-in</li>
                </ul>

                <h3>When to Accept Lower Rent vs. Vacancy</h3>
                
                <h4>Accept Lower Rent When:</h4>
                <ul>
                  <li>Market rent is below your target</li>
                  <li>Extended vacancy likely (30+ days)</li>
                  <li>Good tenant with small discount request</li>
                  <li>Holding costs (mortgage, utilities) are high</li>
                  <li>Weak rental season approaching</li>
                </ul>

                <h4>Hold Out for Higher Rent When:</h4>
                <ul>
                  <li>Strong rental market with high demand</li>
                  <li>Recently upgraded property</li>
                  <li>Peak rental season</li>
                  <li>Low holding costs</li>
                  <li>Applicants are marginal (weak credit/income)</li>
                </ul>

                <h3>Seasonal Vacancy Patterns</h3>
                <p>
                  Rental demand varies by season and market:
                </p>
                <ul>
                  <li><strong>Summer (June-August):</strong> Peak season in most markets</li>
                  <li><strong>Fall (September-November):</strong> Good for college towns, families</li>
                  <li><strong>Winter (December-February):</strong> Slowest period, fewer movers</li>
                  <li><strong>Spring (March-May):</strong> Increasing activity as weather improves</li>
                </ul>

                <h3>Impact on Property Value</h3>
                <p>
                  Vacancy directly affects property valuation:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Property Value = Net Operating Income / Cap Rate
                </p>
                <p>
                  Example: 10% vacancy vs. 5% vacancy on $500,000 property at 6% cap rate:
                </p>
                <ul>
                  <li><strong>10% Vacancy:</strong> $500,000 property value</li>
                  <li><strong>5% Vacancy:</strong> $541,667 property value</li>
                  <li><strong>Difference:</strong> $41,667 in value from 5% vacancy reduction</li>
                </ul>

                <h3>Tracking Vacancy Metrics</h3>
                <p>
                  Monitor these KPIs monthly:
                </p>
                <ul>
                  <li><strong>Physical Vacancy Rate:</strong> Current unoccupied units</li>
                  <li><strong>Average Days Vacant:</strong> Time between leases</li>
                  <li><strong>Turnover Rate:</strong> % of units turning over annually</li>
                  <li><strong>Renewal Rate:</strong> % of tenants renewing leases</li>
                  <li><strong>Time to Lease:</strong> Days from listing to signed lease</li>
                  <li><strong>Showing-to-Application Ratio:</strong> Conversion rate</li>
                  <li><strong>Application-to-Lease Ratio:</strong> Approval/signing rate</li>
                </ul>

                <h3>Market-Specific Considerations</h3>
                
                <h4>College Towns</h4>
                <ul>
                  <li>Lease timing critical (January-March for August move-in)</li>
                  <li>Accept higher summer vacancy</li>
                  <li>12-month leases despite 9-month school year</li>
                </ul>

                <h4>Vacation Markets</h4>
                <ul>
                  <li>Short-term rentals may outperform long-term</li>
                  <li>High season vs. low season pricing</li>
                  <li>Alternative: winter vs. summer tenants</li>
                </ul>

                <h4>Urban Core</h4>
                <ul>
                  <li>Lower vacancy typically (higher demand)</li>
                  <li>Faster turnover but shorter notice</li>
                  <li>More competition, harder to stand out</li>
                </ul>

                <h4>Suburban/Rural</h4>
                <ul>
                  <li>Longer vacancy periods (smaller pool)</li>
                  <li>Tenant retention crucial</li>
                  <li>Marketing reach more important</li>
                </ul>

                <h3>Technology Tools</h3>
                <ul>
                  <li><strong>Property Management Software:</strong> Track vacancy across portfolio</li>
                  <li><strong>Listing Services:</strong> Zillow, Apartments.com, Trulia</li>
                  <li><strong>Showing Apps:</strong> Rently, ShowMojo for self-guided tours</li>
                  <li><strong>Application Processing:</strong> RentSpree, TurboTenant</li>
                  <li><strong>Analytics:</strong> CoStar, Apartment List for market data</li>
                </ul>

                <h3>Red Flags</h3>
                <p>
                  Investigate immediately if you see:
                </p>
                <ul>
                  <li>Vacancy rate above 15%</li>
                  <li>Increasing vacancy trend over 3+ months</li>
                  <li>Average vacancy days exceeding 45</li>
                  <li>Multiple units turning over simultaneously</li>
                  <li>Low showing-to-application conversion (under 30%)</li>
                  <li>Competing properties fully leased while yours languish</li>
                </ul>

                <h3>Financial Planning with Vacancy</h3>
                <p>
                  Build vacancy into your investment analysis:
                </p>
                <ul>
                  <li><strong>Conservative Investors:</strong> Assume 8-10% vacancy</li>
                  <li><strong>Average Investors:</strong> Assume 5-8% vacancy</li>
                  <li><strong>Aggressive Investors:</strong> Assume 3-5% vacancy</li>
                </ul>
                <p>
                  Adjust based on your market, property quality, and management capability.
                </p>

                <h3>Conclusion</h3>
                <p>
                  Vacancy is the silent killer of rental property returns. While some vacancy is inevitable, minimizing it through competitive pricing, excellent marketing, property upkeep, and tenant retention can dramatically improve your bottom line. Every day a unit sits vacant costs money directly (lost rent) and indirectly (utilities, security risk, reduced property value).
                </p>
                <p>
                  Use this calculator to quantify your vacancy costs, track trends over time, and identify opportunities for improvement. Set target vacancy rates based on your market, then systematically implement strategies to achieve them. The difference between 10% and 5% vacancy can mean thousands of dollars annually and tens of thousands in property value.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
