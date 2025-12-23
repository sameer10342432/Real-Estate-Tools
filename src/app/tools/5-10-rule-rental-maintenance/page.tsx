'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Home, DollarSign, TrendingUp } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: '5/10 Rule for Rental Property Maintenance Calculator | Property Tools',
    description: 'Apply the 5/10 maintenance rule to budget rental property upkeep. Estimate annual costs, plan for repairs and replacements. Free calculator for landlords.',
    keywords: [
      '5/10 rule',
      'rental property maintenance budget',
      'property maintenance calculator',
      'landlord maintenance planning',
      'repair cost estimator',
      'rental property upkeep',
      'maintenance budgeting',
      'property expense planning',
      'annual maintenance cost',
      'rental property repairs'
    ],
  };
}

export default function FiveTenRuleMaintenance() {
  const [purchasePrice, setPurchasePrice] = useState<string>('400000');
  const [monthlyRent, setMonthlyRent] = useState<string>('2500');
  const [propertyAge, setPropertyAge] = useState<string>('15');
  const [currentMaintenanceCosts, setCurrentMaintenanceCosts] = useState<string>('3600');

  const calculate = () => {
    const price = parseFloat(purchasePrice) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const age = parseFloat(propertyAge) || 0;
    const current = parseFloat(currentMaintenanceCosts) || 0;

    const annualMaintenance5Percent = price * 0.05;
    const monthly5Percent = annualMaintenance5Percent / 12;
    const annualMaintenance10Percent = price * 0.10;
    const monthly10Percent = annualMaintenance10Percent / 12;

    const as5PercentOfRent = (monthly5Percent / rent) * 100;
    const as10PercentOfRent = (monthly10Percent / rent) * 100;

    let ageMultiplier = 1.0;
    if (age < 10) ageMultiplier = 0.8;
    else if (age > 30) ageMultiplier = 1.3;

    const adjustedAnnual = annualMaintenance5Percent * ageMultiplier;
    const adjustedMonthly = adjustedAnnual / 12;

    const fiveYearCost = adjustedAnnual * 5;
    const tenYearCost = adjustedAnnual * 10;

    const variance = current > 0 ? ((current - adjustedAnnual) / adjustedAnnual) * 100 : 0;

    return {
      annualMaintenance5Percent,
      monthly5Percent,
      annualMaintenance10Percent,
      monthly10Percent,
      as5PercentOfRent,
      as10PercentOfRent,
      adjustedAnnual,
      adjustedMonthly,
      fiveYearCost,
      tenYearCost,
      variance
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            5/10 Rule for Rental Property Maintenance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Budget property maintenance using the 5% and 10% rules for accurate cost planning
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Rule Guide</TabsTrigger>
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
                    <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyAge">Property Age (years)</Label>
                    <Input
                      id="propertyAge"
                      type="number"
                      value={propertyAge}
                      onChange={(e) => setPropertyAge(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentMaintenanceCosts">Current Annual Maintenance ($)</Label>
                    <Input
                      id="currentMaintenanceCosts"
                      type="number"
                      value={currentMaintenanceCosts}
                      onChange={(e) => setCurrentMaintenanceCosts(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Optional: Compare to your actual costs</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 dark:bg-purple-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    5% Rule (Standard)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Maintenance:</span>
                    <span className="font-bold">${results.annualMaintenance5Percent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Monthly Reserve:</span>
                    <span className="font-bold">${results.monthly5Percent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>As % of Monthly Rent:</span>
                    <span className="font-semibold">{results.as5PercentOfRent.toFixed(1)}%</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Age-Adjusted (Recommended)</div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Cost:</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        ${results.adjustedAnnual.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Reserve:</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        ${results.adjustedMonthly.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 dark:bg-orange-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    10% Rule (Conservative)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Maintenance:</span>
                    <span className="font-bold">${results.annualMaintenance10Percent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Monthly Reserve:</span>
                    <span className="font-bold">${results.monthly10Percent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>As % of Monthly Rent:</span>
                    <span className="font-semibold">{results.as10PercentOfRent.toFixed(1)}%</span>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Recommended for older properties (25+ years) or those in need of deferred maintenance catch-up.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {parseFloat(currentMaintenanceCosts) > 0 && (
                <Card className="bg-blue-50 dark:bg-blue-900/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Variance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Your Annual Costs:</span>
                      <span className="font-bold">${parseFloat(currentMaintenanceCosts).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Recommended (Adjusted):</span>
                      <span className="font-bold">${results.adjustedAnnual.toLocaleString()}</span>
                    </div>
                    <div className={`flex justify-between ${results.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      <span className="font-medium">Variance:</span>
                      <span className="font-bold">{results.variance > 0 ? '+' : ''}{results.variance.toFixed(1)}%</span>
                    </div>
                    {results.variance > 20 && (
                      <p className="text-sm text-red-600 dark:text-red-400 border-t pt-2">
                        ⚠️ Your costs are significantly higher than recommended. Review for potential inefficiencies.
                      </p>
                    )}
                    {results.variance < -20 && (
                      <p className="text-sm text-orange-600 dark:text-orange-400 border-t pt-2">
                        ⚠️ Your costs may be too low. Ensure adequate maintenance to protect property value.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Long-Term Projections</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">5-Year Maintenance Budget</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ${results.fiveYearCost.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Based on age-adjusted 5% rule</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">10-Year Maintenance Budget</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    ${results.tenYearCost.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Total projected maintenance costs</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Guide to the 5/10 Maintenance Rule</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding the 5% and 10% Maintenance Rules</h2>
                <p>
                  The 5% and 10% rules are simple guidelines used by real estate investors and landlords to estimate annual property maintenance and repair costs. These rules help ensure adequate budgeting for the inevitable wear and tear that comes with owning rental properties.
                </p>

                <h3>What is the 5% Rule?</h3>
                <p>
                  The 5% rule suggests that landlords should budget approximately 5% of the property's purchase price annually for maintenance, repairs, and capital expenditures. This is a conservative estimate that works well for:
                </p>
                <ul>
                  <li>Properties less than 20 years old</li>
                  <li>Well-maintained properties with recent updates</li>
                  <li>Properties in good condition at purchase</li>
                  <li>Normal wear and tear scenarios</li>
                </ul>

                <h3>What is the 10% Rule?</h3>
                <p>
                  The 10% rule recommends setting aside 10% of the property's purchase price annually. This more conservative approach is better for:
                </p>
                <ul>
                  <li>Older properties (25+ years)</li>
                  <li>Properties with deferred maintenance</li>
                  <li>Fixer-uppers or properties needing catch-up work</li>
                  <li>High-use properties or difficult tenant situations</li>
                </ul>

                <h3>Why Use Purchase Price Instead of Market Value?</h3>
                <p>
                  The rules use purchase price rather than current market value because:
                </p>
                <ul>
                  <li>Purchase price remains constant and predictable</li>
                  <li>Physical components don't cost more to replace just because property values rise</li>
                  <li>It simplifies budgeting without annual recalculations</li>
                  <li>It's more conservative as property values typically appreciate</li>
                </ul>

                <h3>What Costs Do These Rules Cover?</h3>
                <p>
                  The 5/10 rule typically includes:
                </p>
                <h4>Routine Maintenance:</h4>
                <ul>
                  <li>HVAC servicing and filter replacements</li>
                  <li>Plumbing repairs and drain cleaning</li>
                  <li>Electrical repairs and updates</li>
                  <li>Pest control and prevention</li>
                  <li>Landscaping and exterior upkeep</li>
                </ul>

                <h4>Repairs:</h4>
                <ul>
                  <li>Appliance repairs or replacements</li>
                  <li>Minor roof repairs</li>
                  <li>Painting (interior/exterior)</li>
                  <li>Flooring repairs or replacement</li>
                  <li>Window and door repairs</li>
                </ul>

                <h4>Capital Expenditures (CapEx):</h4>
                <ul>
                  <li>Roof replacement</li>
                  <li>HVAC system replacement</li>
                  <li>Water heater replacement</li>
                  <li>Major appliance replacement</li>
                  <li>Driveway resurfacing</li>
                </ul>

                <h3>Age Adjustments to the Rules</h3>
                <p>
                  Smart landlords adjust these rules based on property age:
                </p>
                <ul>
                  <li><strong>New Construction (0-5 years):</strong> 3-4% (most items under warranty)</li>
                  <li><strong>Modern Properties (6-15 years):</strong> 4-5% (standard rule applies)</li>
                  <li><strong>Mature Properties (16-30 years):</strong> 5-7% (increasing repair frequency)</li>
                  <li><strong>Older Properties (30+ years):</strong> 8-12% (major systems approaching end of life)</li>
                </ul>

                <h3>Example Calculations</h3>
                <h4>Scenario 1: $300,000 Property, 10 Years Old</h4>
                <ul>
                  <li><strong>5% Rule:</strong> $300,000 × 0.05 = $15,000/year or $1,250/month</li>
                  <li><strong>As % of $2,000 rent:</strong> 62.5% of one month's rent</li>
                </ul>

                <h4>Scenario 2: $500,000 Property, 35 Years Old</h4>
                <ul>
                  <li><strong>10% Rule:</strong> $500,000 × 0.10 = $50,000/year or $4,167/month</li>
                  <li><strong>As % of $3,500 rent:</strong> 119% of one month's rent (1.2 months)</li>
                </ul>

                <h3>Comparing to Actual Costs</h3>
                <p>
                  Track your actual maintenance costs against these benchmarks:
                </p>
                <ul>
                  <li><strong>Below Benchmark:</strong> May indicate deferred maintenance risk</li>
                  <li><strong>At Benchmark:</strong> Healthy, well-maintained property</li>
                  <li><strong>Above Benchmark:</strong> Could signal issues with property quality, contractor pricing, or tenant behavior</li>
                </ul>

                <h3>Alternative: The "50% Rule"</h3>
                <p>
                  Another popular guideline suggests that 50% of gross rental income will go to all operating expenses (not including mortgage):
                </p>
                <ul>
                  <li>Property taxes</li>
                  <li>Insurance</li>
                  <li>Vacancy</li>
                  <li>Maintenance and repairs</li>
                  <li>Property management</li>
                  <li>CapEx reserves</li>
                </ul>
                <p>
                  This rule is less precise but useful for quick deal analysis.
                </p>

                <h3>Limitations of the 5/10 Rule</h3>
                <p>
                  These rules have limitations:
                </p>
                <ul>
                  <li><strong>One-Size-Fits-All:</strong> Doesn't account for specific property conditions</li>
                  <li><strong>Regional Variations:</strong> Costs vary significantly by location</li>
                  <li><strong>Property Type:</strong> Condos vs. single-family vs. multi-family have different needs</li>
                  <li><strong>Lumpy Expenses:</strong> Some years will be higher or lower than the average</li>
                </ul>

                <h3>Best Practices for Maintenance Budgeting</h3>
                <ol>
                  <li><strong>Use as a Starting Point:</strong> Begin with the 5/10 rule, then adjust based on property specifics</li>
                  <li><strong>Conduct Property Inspection:</strong> Professional inspection identifies current and future needs</li>
                  <li><strong>Create Component List:</strong> Track age and condition of major systems</li>
                  <li><strong>Build Separate Reserves:</strong> Keep maintenance funds in dedicated account</li>
                  <li><strong>Review Annually:</strong> Adjust budget based on actual experience</li>
                  <li><strong>Plan for Lumpy Expenses:</strong> Spread large expenses over multiple years of budgeting</li>
                  <li><strong>Document Everything:</strong> Track all maintenance work and costs</li>
                </ol>

                <h3>Tax Implications</h3>
                <p>
                  Understanding the tax treatment of maintenance costs:
                </p>
                <ul>
                  <li><strong>Repairs and Maintenance:</strong> Fully deductible in the year incurred</li>
                  <li><strong>Capital Improvements:</strong> Must be depreciated over 27.5 years</li>
                  <li><strong>Setting Aside Reserves:</strong> Not deductible until actually spent</li>
                </ul>

                <h3>Common Maintenance Mistakes to Avoid</h3>
                <ul>
                  <li><strong>Underfunding Reserves:</strong> Leads to cash flow problems when repairs arise</li>
                  <li><strong>Deferred Maintenance:</strong> Small problems become expensive emergencies</li>
                  <li><strong>Ignoring Preventive Care:</strong> Regular maintenance extends component life</li>
                  <li><strong>Using Operating Income:</strong> Maintenance reserves should be separate</li>
                  <li><strong>Not Tracking Costs:</strong> Can't optimize what you don't measure</li>
                </ul>

                <h3>When to Use 5% vs. 10%</h3>
                <p><strong>Use 5% When:</strong></p>
                <ul>
                  <li>Property is less than 20 years old</li>
                  <li>Recent major updates (roof, HVAC, etc.)</li>
                  <li>Property was well-maintained by previous owner</li>
                  <li>Quality construction and materials</li>
                </ul>

                <p><strong>Use 10% When:</strong></p>
                <ul>
                  <li>Property is 25+ years old</li>
                  <li>Deferred maintenance needs addressing</li>
                  <li>Major systems nearing end of life</li>
                  <li>Budget constraints require conservative planning</li>
                  <li>First-time landlord wanting extra cushion</li>
                </ul>

                <h3>Integrating with Overall Investment Analysis</h3>
                <p>
                  Maintenance costs significantly impact investment returns:
                </p>
                <ul>
                  <li><strong>Cash Flow:</strong> Higher maintenance reduces monthly cash flow</li>
                  <li><strong>Cap Rate:</strong> Maintenance costs lower Net Operating Income</li>
                  <li><strong>ROI:</strong> Unexpected repairs can eliminate annual profits</li>
                  <li><strong>Property Value:</strong> Well-maintained properties command premium prices</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  The 5% and 10% maintenance rules provide a simple, effective framework for budgeting rental property upkeep. While not perfect, these guidelines help landlords avoid the common pitfall of underestimating maintenance costs. Combined with regular inspections, detailed tracking, and property-specific adjustments, these rules form the foundation of sound rental property financial management.
                </p>
                <p>
                  Remember: it's better to over-budget for maintenance and end the year with surplus than to scramble for cash when the water heater fails or the roof needs emergency repair. Use this calculator to establish your baseline, then refine based on your property's actual performance over time.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
