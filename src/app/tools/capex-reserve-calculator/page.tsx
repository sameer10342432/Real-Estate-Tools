'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, TrendingUp, Home, Wrench } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'CapEx Reserve Calculator - Plan Capital Expenditure Reserves | Property Tools',
    description: 'Calculate capital expenditure reserves for rental properties. Plan for major repairs, roof replacement, HVAC, and property improvements. Free CapEx calculator for landlords and investors.',
    keywords: [
      'CapEx reserves calculator',
      'capital expenditure planning',
      'rental property reserves',
      'major repair planning',
      'property improvement budget',
      'roof replacement reserve',
      'HVAC replacement cost',
      'landlord reserve fund',
      'property capital planning',
      'replacement reserve calculator'
    ],
  };
}

export default function CapExReserveCalculator() {
  const [propertyValue, setPropertyValue] = useState<string>('500000');
  const [propertyAge, setPropertyAge] = useState<string>('15');
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [roofAge, setRoofAge] = useState<string>('10');
  const [hvacAge, setHvacAge] = useState<string>('8');
  const [appliancesAge, setAppliancesAge] = useState<string>('5');
  const [currentReserve, setCurrentReserve] = useState<string>('10000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('300');

  const calculateCapEx = () => {
    const value = parseFloat(propertyValue) || 0;
    const age = parseFloat(propertyAge) || 0;
    const currentRes = parseFloat(currentReserve) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;

    const roofCost = value * 0.10;
    const roofLife = 25;
    const roofYears = parseFloat(roofAge) || 0;
    const roofReplace = Math.max(0, roofLife - roofYears);
    const roofAnnual = roofCost / roofLife;

    const hvacCost = value * 0.06;
    const hvacLife = 15;
    const hvacYears = parseFloat(hvacAge) || 0;
    const hvacReplace = Math.max(0, hvacLife - hvacYears);
    const hvacAnnual = hvacCost / hvacLife;

    const applianceCost = value * 0.03;
    const applianceLife = 10;
    const applianceYears = parseFloat(appliancesAge) || 0;
    const applianceReplace = Math.max(0, applianceLife - applianceYears);
    const applianceAnnual = applianceCost / applianceLife;

    const paintingCost = value * 0.04;
    const paintingLife = 7;
    const paintingAnnual = paintingCost / paintingLife;

    const flooringCost = value * 0.05;
    const flooringLife = 12;
    const flooringAnnual = flooringCost / flooringLife;

    const totalAnnualCapEx = roofAnnual + hvacAnnual + applianceAnnual + paintingAnnual + flooringAnnual;
    const monthlyRequired = totalAnnualCapEx / 12;
    const shortage = monthlyRequired - monthly;

    const oneYearReserve = currentRes + (monthly * 12);
    const fiveYearReserve = currentRes + (monthly * 60);
    const tenYearReserve = currentRes + (monthly * 120);

    const totalCapExNeeded = roofCost + hvacCost + applianceCost + paintingCost + flooringCost;
    const percentageCapEx = (totalAnnualCapEx / value) * 100;

    return {
      roofCost,
      roofReplace,
      roofAnnual,
      hvacCost,
      hvacReplace,
      hvacAnnual,
      applianceCost,
      applianceReplace,
      applianceAnnual,
      paintingCost,
      paintingAnnual,
      flooringCost,
      flooringAnnual,
      totalAnnualCapEx,
      monthlyRequired,
      shortage,
      oneYearReserve,
      fiveYearReserve,
      tenYearReserve,
      totalCapExNeeded,
      percentageCapEx
    };
  };

  const results = calculateCapEx();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CapEx Reserve Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Plan capital expenditure reserves for major repairs and property improvements
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Planning Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Property Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="propertyValue">Property Value ($)</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
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
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="multi-family">Multi-Family</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Component Ages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="roofAge">Roof Age (years)</Label>
                    <Input
                      id="roofAge"
                      type="number"
                      value={roofAge}
                      onChange={(e) => setRoofAge(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hvacAge">HVAC Age (years)</Label>
                    <Input
                      id="hvacAge"
                      type="number"
                      value={hvacAge}
                      onChange={(e) => setHvacAge(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="appliancesAge">Appliances Age (years)</Label>
                    <Input
                      id="appliancesAge"
                      type="number"
                      value={appliancesAge}
                      onChange={(e) => setAppliancesAge(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Current Reserves
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentReserve">Current Reserve Balance ($)</Label>
                    <Input
                      id="currentReserve"
                      type="number"
                      value={currentReserve}
                      onChange={(e) => setCurrentReserve(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                    <Input
                      id="monthlyContribution"
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Reserve Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monthly Required:</span>
                    <span className="font-bold">${results.monthlyRequired.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Current Contribution:</span>
                    <span className="font-bold">${monthlyContribution}</span>
                  </div>
                  <div className={`flex justify-between ${results.shortage > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    <span className="font-medium">{results.shortage > 0 ? 'Shortage:' : 'Surplus:'}</span>
                    <span className="font-bold">${Math.abs(results.shortage).toLocaleString()}/mo</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Annual CapEx:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      ${results.totalAnnualCapEx.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">As % of Property Value:</span>
                    <span className="font-bold">{results.percentageCapEx.toFixed(2)}%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Component Replacement Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Roof</span>
                      <span className="text-sm text-gray-600">{results.roofReplace} years remaining</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Replacement Cost:</span>
                      <span className="font-bold">${results.roofCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Reserve:</span>
                      <span className="font-bold">${results.roofAnnual.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">HVAC System</span>
                      <span className="text-sm text-gray-600">{results.hvacReplace} years remaining</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Replacement Cost:</span>
                      <span className="font-bold">${results.hvacCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Reserve:</span>
                      <span className="font-bold">${results.hvacAnnual.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Appliances</span>
                      <span className="text-sm text-gray-600">{results.applianceReplace} years remaining</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Replacement Cost:</span>
                      <span className="font-bold">${results.applianceCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Reserve:</span>
                      <span className="font-bold">${results.applianceAnnual.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Interior Paint</span>
                      <span className="text-sm text-gray-600">7 year cycle</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost Per Cycle:</span>
                      <span className="font-bold">${results.paintingCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Reserve:</span>
                      <span className="font-bold">${results.paintingAnnual.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reserve Balance Projection</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">1-Year Balance</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${results.oneYearReserve.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">5-Year Balance</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${results.fiveYearReserve.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">10-Year Balance</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    ${results.tenYearReserve.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete CapEx Reserve Planning Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Capital Expenditure (CapEx) Reserves</h2>
                <p>
                  Capital Expenditure (CapEx) reserves are funds set aside to pay for major repairs, replacements, and improvements to a rental property. Unlike operating expenses that recur monthly (like utilities and lawn care), CapEx expenses are infrequent but significant investments in the property's long-term value and functionality.
                </p>

                <h3>What Qualifies as CapEx?</h3>
                <p>
                  Capital expenditures typically include:
                </p>
                <ul>
                  <li><strong>Roof Replacement:</strong> Complete roof tear-off and replacement (25-30 year lifespan)</li>
                  <li><strong>HVAC System:</strong> Furnace, air conditioner, heat pump replacement (15-20 years)</li>
                  <li><strong>Water Heater:</strong> Tank or tankless water heater replacement (10-15 years)</li>
                  <li><strong>Appliances:</strong> Refrigerator, dishwasher, washer, dryer (8-12 years)</li>
                  <li><strong>Flooring:</strong> Carpet, hardwood, tile replacement (10-20 years)</li>
                  <li><strong>Windows and Doors:</strong> Full replacement (20-30 years)</li>
                  <li><strong>Exterior Paint:</strong> Complete repainting (7-10 years)</li>
                  <li><strong>Siding Replacement:</strong> Vinyl, wood, or fiber cement siding (20-50 years)</li>
                  <li><strong>Plumbing Systems:</strong> Pipe replacement, sewer line work (40-70 years)</li>
                  <li><strong>Electrical Upgrades:</strong> Panel upgrades, rewiring (40-70 years)</li>
                  <li><strong>Foundation Repairs:</strong> Major structural work (varies widely)</li>
                  <li><strong>Driveway/Parking:</strong> Repaving, resurfacing (20-30 years)</li>
                </ul>

                <h3>Why CapEx Reserves Are Critical</h3>
                <p>
                  Many landlords underestimate or ignore CapEx reserves, leading to financial stress when major repairs arise. Here's why proper reserves are essential:
                </p>
                <ul>
                  <li><strong>Avoid Cash Flow Crunches:</strong> Major repairs can cost $5,000-$50,000+. Without reserves, you may need to take out loans or sell investments at bad times.</li>
                  <li><strong>Maintain Property Value:</strong> Deferred maintenance leads to accelerated deterioration and lower property values.</li>
                  <li><strong>Keep Tenants Happy:</strong> Prompt repairs and upgrades improve tenant satisfaction and retention.</li>
                  <li><strong>Accurate Investment Analysis:</strong> Ignoring CapEx inflates your returns on paper but not in reality.</li>
                  <li><strong>Tax Planning:</strong> Understanding CapEx timing helps optimize depreciation strategies.</li>
                </ul>

                <h3>Calculating CapEx Reserves: The 50% Rule vs. Component Method</h3>
                
                <h4>The 50% Rule (Simple Approach)</h4>
                <p>
                  A common rule of thumb: assume 50% of rental income goes to all expenses (CapEx, repairs, vacancy, property management, etc.). This is quick but imprecise.
                </p>

                <h4>Component Method (Recommended)</h4>
                <p>
                  Calculate reserves for each major component based on replacement cost and useful life:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Annual Reserve = Replacement Cost ÷ Useful Life
                </p>
                <p>
                  For example, a $15,000 roof with a 25-year life requires $600/year ($50/month) in reserves.
                </p>

                <h3>Industry Standards for CapEx Reserves</h3>
                <p>
                  Professional property managers typically recommend:
                </p>
                <ul>
                  <li><strong>Single-Family Homes:</strong> $200-$400/month or 8-12% of gross rent</li>
                  <li><strong>Condos/Townhouses:</strong> $100-$250/month or 4-8% (HOA covers some items)</li>
                  <li><strong>Small Multi-Family (2-4 units):</strong> $300-$600/month or 8-12% per unit</li>
                  <li><strong>Older Properties (30+ years):</strong> Add 25-50% to standard reserves</li>
                  <li><strong>Newer Properties (<10 years):</strong> May reduce by 25-40% initially</li>
                </ul>

                <h3>Typical Replacement Costs and Lifespans</h3>
                
                <h4>Roof Systems</h4>
                <ul>
                  <li><strong>Asphalt Shingles:</strong> $5,000-$12,000, 20-25 years</li>
                  <li><strong>Metal Roofing:</strong> $10,000-$20,000, 40-70 years</li>
                  <li><strong>Tile/Slate:</strong> $15,000-$30,000, 50+ years</li>
                </ul>

                <h4>HVAC Systems</h4>
                <ul>
                  <li><strong>Central AC Unit:</strong> $3,000-$7,000, 12-15 years</li>
                  <li><strong>Furnace:</strong> $2,500-$6,000, 15-20 years</li>
                  <li><strong>Heat Pump:</strong> $4,000-$8,000, 10-15 years</li>
                </ul>

                <h4>Appliances (Full Kitchen)</h4>
                <ul>
                  <li><strong>Refrigerator:</strong> $800-$2,500, 10-15 years</li>
                  <li><strong>Stove/Range:</strong> $500-$1,500, 13-15 years</li>
                  <li><strong>Dishwasher:</strong> $400-$1,200, 9-13 years</li>
                  <li><strong>Microwave:</strong> $100-$400, 9-10 years</li>
                  <li><strong>Washer/Dryer:</strong> $800-$2,000, 10-13 years</li>
                </ul>

                <h4>Flooring</h4>
                <ul>
                  <li><strong>Carpet:</strong> $2-$8/sq ft, 5-10 years</li>
                  <li><strong>Vinyl/Laminate:</strong> $3-$8/sq ft, 10-20 years</li>
                  <li><strong>Hardwood:</strong> $8-$15/sq ft, 25-100 years (with refinishing)</li>
                  <li><strong>Tile:</strong> $5-$15/sq ft, 10-20 years</li>
                </ul>

                <h3>Managing CapEx Reserves</h3>
                
                <h4>Where to Keep Reserves</h4>
                <ul>
                  <li><strong>High-Yield Savings Account:</strong> Liquid, FDIC insured, earning 4-5% currently</li>
                  <li><strong>Money Market Account:</strong> Similar to savings, may require higher minimums</li>
                  <li><strong>Short-Term CDs:</strong> Slightly higher rates, requires planning for liquidity</li>
                  <li><strong>Separate Bank Account:</strong> Keep reserves separate from operating funds</li>
                </ul>

                <h4>Best Practices</h4>
                <ol>
                  <li><strong>Start Immediately:</strong> Begin funding reserves from the first month of ownership</li>
                  <li><strong>Track Component Ages:</strong> Maintain detailed records of installation dates and condition</li>
                  <li><strong>Inspect Annually:</strong> Professional inspections help predict replacement timing</li>
                  <li><strong>Update Reserve Calculations:</strong> Review annually and adjust for inflation and actual conditions</li>
                  <li><strong>Front-Load for Older Items:</strong> If roof is 20 years old with 5 years left, save more aggressively</li>
                  <li><strong>Consider Lifecycle Costs:</strong> Higher quality items may cost more but last longer</li>
                </ol>

                <h3>Tax Treatment of CapEx</h3>
                <p>
                  Understanding tax implications helps with planning:
                </p>
                <ul>
                  <li><strong>Capital Improvements:</strong> Must be depreciated over 27.5 years (residential) or 39 years (commercial)</li>
                  <li><strong>Repairs:</strong> Can be deducted in full in the year incurred</li>
                  <li><strong>Safe Harbor Election:</strong> May allow deduction of items under $2,500 per invoice</li>
                  <li><strong>Reserve Contributions:</strong> Setting aside money is not deductible; only actual spending counts</li>
                </ul>

                <h3>Common CapEx Planning Mistakes</h3>
                <ul>
                  <li><strong>Ignoring CapEx Entirely:</strong> "It won't break on my watch" thinking leads to disasters</li>
                  <li><strong>Using Operating Income for CapEx:</strong> Treating CapEx like operating expenses inflates cash flow</li>
                  <li><strong>Underestimating Costs:</strong> Get quotes from contractors, don't guess</li>
                  <li><strong>Not Adjusting for Property Age:</strong> Older properties need larger reserves</li>
                  <li><strong>Spending Reserves on Non-CapEx Items:</strong> Maintain discipline in reserve usage</li>
                  <li><strong>Failing to Inspect:</strong> Don't wait for failures; catch issues early</li>
                </ul>

                <h3>Advanced Strategy: Debt vs. Reserves</h3>
                <p>
                  Some investors debate whether to build large reserves or use debt for major repairs:
                </p>
                <p>
                  <strong>Reserve Strategy Pros:</strong> No interest costs, immediate access to funds, peace of mind
                </p>
                <p>
                  <strong>Reserve Strategy Cons:</strong> Opportunity cost (could invest elsewhere), inflation erodes value
                </p>
                <p>
                  <strong>Debt Strategy Pros:</strong> Leverage reserves for growth, potential tax deduction on interest
                </p>
                <p>
                  <strong>Debt Strategy Cons:</strong> Interest costs, qualification required, monthly payments
                </p>
                <p>
                  Most successful landlords maintain adequate reserves while also having access to credit lines for unexpected major issues.
                </p>

                <h3>Sample 10-Year CapEx Plan</h3>
                <p>
                  For a $500,000 single-family rental property:
                </p>
                <ul>
                  <li><strong>Year 1-2:</strong> Build reserves ($400/month = $9,600)</li>
                  <li><strong>Year 3:</strong> Replace water heater ($1,500)</li>
                  <li><strong>Year 5:</strong> Replace HVAC unit ($6,000)</li>
                  <li><strong>Year 7:</strong> Interior painting ($4,000)</li>
                  <li><strong>Year 8:</strong> Replace appliances ($3,500)</li>
                  <li><strong>Year 10:</strong> Replace flooring ($8,000)</li>
                  <li><strong>Ongoing:</strong> Continue building roof reserve (replacement year 12-15)</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Proper CapEx reserve planning is the difference between a profitable, sustainable rental property business and constant financial stress. While it may seem like tying up cash unnecessarily, reserves protect your investment, maintain property value, and ensure you can handle inevitable repairs without disrupting your financial stability.
                </p>
                <p>
                  Use this calculator to create a realistic, component-based reserve plan. Review it annually, adjust for actual experience, and maintain the discipline to fund reserves consistently. Your future self will thank you when a major repair arises and you have the cash ready to handle it professionally and promptly.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
