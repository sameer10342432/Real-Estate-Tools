'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Calculator, DollarSign, TrendingDown } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Appliance Depreciation Calculator for Landlords | Property Tools',
    description: 'Calculate appliance depreciation for rental properties. Track useful life, plan replacements, optimize tax deductions. Free calculator for landlords.',
    keywords: [
      'appliance depreciation calculator',
      'rental property appliances',
      'landlord tax deductions',
      'appliance useful life',
      'replacement planning',
      'appliance depreciation schedule',
      'rental property assets',
      'tax depreciation',
      'appliance lifespan',
      'property management'
    ],
  };
}

interface Appliance {
  name: string;
  cost: string;
  age: string;
  usefulLife: number;
}

export default function ApplianceDepreciationCalculator() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { name: 'Refrigerator', cost: '1200', age: '3', usefulLife: 12 },
    { name: 'Stove/Range', cost: '800', age: '5', usefulLife: 15 },
    { name: 'Dishwasher', cost: '600', age: '4', usefulLife: 10 },
    { name: 'Microwave', cost: '200', age: '2', usefulLife: 9 },
    { name: 'Washer', cost: '700', age: '6', usefulLife: 11 },
    { name: 'Dryer', cost: '650', age: '6', usefulLife: 13 }
  ]);

  const calculateDepreciation = (appliance: Appliance) => {
    const cost = parseFloat(appliance.cost) || 0;
    const age = parseFloat(appliance.age) || 0;
    const { usefulLife } = appliance;
    
    const annualDepreciation = cost / usefulLife;
    const totalDepreciation = Math.min(annualDepreciation * age, cost);
    const currentValue = cost - totalDepreciation;
    const remainingLife = Math.max(0, usefulLife - age);
    const depreciationRate = (totalDepreciation / cost) * 100;
    
    return {
      cost,
      annualDepreciation,
      totalDepreciation,
      currentValue,
      remainingLife,
      depreciationRate
    };
  };

  const totalCost = appliances.reduce((sum, app) => sum + (parseFloat(app.cost) || 0), 0);
  const totalDepreciation = appliances.reduce((sum, app) => sum + calculateDepreciation(app).totalDepreciation, 0);
  const totalCurrentValue = appliances.reduce((sum, app) => sum + calculateDepreciation(app).currentValue, 0);
  const totalAnnualDepreciation = appliances.reduce((sum, app) => sum + calculateDepreciation(app).annualDepreciation, 0);

  const updateAppliance = (index: number, field: keyof Appliance, value: string | number) => {
    const newAppliances = [...appliances];
    newAppliances[index] = { ...newAppliances[index], [field]: value };
    setAppliances(newAppliances);
  };

  const addAppliance = () => {
    setAppliances([...appliances, { name: 'New Appliance', cost: '0', age: '0', usefulLife: 10 }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Appliance Depreciation Calculator for Landlords
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track appliance depreciation, plan replacements, and optimize tax deductions
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Depreciation Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <Card className="bg-blue-50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Portfolio Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Cost</div>
                  <div className="text-2xl font-bold">${totalCost.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Current Value</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${totalCurrentValue.toLocaleString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Depreciation</div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    ${totalDepreciation.toLocaleString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Annual Depreciation</div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    ${totalAnnualDepreciation.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {appliances.map((appliance, index) => {
              const calc = calculateDepreciation(appliance);
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      <Input
                        value={appliance.name}
                        onChange={(e) => updateAppliance(index, 'name', e.target.value)}
                        className="font-semibold border-none bg-transparent p-0 h-auto text-lg"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <Label>Purchase Cost ($)</Label>
                        <Input
                          type="number"
                          value={appliance.cost}
                          onChange={(e) => updateAppliance(index, 'cost', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Age (years)</Label>
                        <Input
                          type="number"
                          value={appliance.age}
                          onChange={(e) => updateAppliance(index, 'age', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Useful Life (years)</Label>
                        <Input
                          type="number"
                          value={appliance.usefulLife}
                          onChange={(e) => updateAppliance(index, 'usefulLife', parseInt(e.target.value) || 10)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Annual Depreciation</div>
                        <div className="text-lg font-bold">${calc.annualDepreciation.toFixed(0)}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Total Depreciation</div>
                        <div className="text-lg font-bold text-red-600 dark:text-red-400">
                          ${calc.totalDepreciation.toFixed(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Current Value</div>
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          ${calc.currentValue.toFixed(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Remaining Life</div>
                        <div className="text-lg font-bold">{calc.remainingLife} years</div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Depreciation Progress</span>
                        <span className="font-semibold">{calc.depreciationRate.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all"
                          style={{ width: `${Math.min(calc.depreciationRate, 100)}%` }}
                        />
                      </div>
                      {calc.remainingLife <= 2 && (
                        <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                          ⚠️ Approaching end of useful life - plan for replacement
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <button
              onClick={addAppliance}
              className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              + Add Another Appliance
            </button>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Appliance Depreciation Guide for Landlords</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Appliance Depreciation</h2>
                <p>
                  Appliance depreciation is a critical concept for rental property owners. It represents the decline in value of appliances over time due to wear, tear, and obsolescence. Understanding and tracking depreciation helps landlords plan for replacements, optimize tax deductions, and maintain accurate financial records.
                </p>

                <h3>Why Track Appliance Depreciation?</h3>
                <ul>
                  <li><strong>Tax Deductions:</strong> Depreciation reduces taxable income, saving money each year</li>
                  <li><strong>Replacement Planning:</strong> Know when appliances need replacement before they fail</li>
                  <li><strong>Accurate Accounting:</strong> Reflect true asset values on financial statements</li>
                  <li><strong>Budgeting:</strong> Plan capital expenditures based on remaining useful life</li>
                  <li><strong>Property Valuation:</strong> Up-to-date appliances increase property value</li>
                  <li><strong>Tenant Satisfaction:</strong> Proactive replacement prevents inconvenient breakdowns</li>
                </ul>

                <h3>Depreciation Methods for Landlords</h3>
                
                <h4>Straight-Line Depreciation (Most Common)</h4>
                <p>
                  The straight-line method divides the cost evenly over the useful life:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Annual Depreciation = Purchase Cost ÷ Useful Life
                </p>
                <p>
                  Example: $1,200 refrigerator with 12-year life = $100/year depreciation
                </p>

                <h4>MACRS Depreciation (Tax Purposes)</h4>
                <p>
                  Modified Accelerated Cost Recovery System (MACRS) is used for tax returns. Appliances in rental properties are typically:
                </p>
                <ul>
                  <li><strong>5-year property</strong> for most appliances</li>
                  <li>Uses accelerated depreciation (more in early years)</li>
                  <li>Consult tax professional for proper classification</li>
                </ul>

                <h3>Typical Appliance Useful Lives</h3>
                <p>
                  Industry-standard useful life estimates:
                </p>
                <ul>
                  <li><strong>Refrigerator:</strong> 10-15 years (average 12 years)</li>
                  <li><strong>Electric Range/Stove:</strong> 13-15 years</li>
                  <li><strong>Gas Range/Stove:</strong> 15-17 years</li>
                  <li><strong>Dishwasher:</strong> 9-13 years (average 10 years)</li>
                  <li><strong>Microwave:</strong> 9-10 years</li>
                  <li><strong>Garbage Disposal:</strong> 10-12 years</li>
                  <li><strong>Washing Machine:</strong> 10-14 years (average 11 years)</li>
                  <li><strong>Electric Dryer:</strong> 13-14 years</li>
                  <li><strong>Gas Dryer:</strong> 13-15 years</li>
                  <li><strong>Water Heater:</strong> 8-12 years</li>
                </ul>

                <h3>Factors Affecting Appliance Lifespan</h3>
                <ul>
                  <li><strong>Quality/Brand:</strong> Premium brands often last 20-30% longer</li>
                  <li><strong>Usage Intensity:</strong> More tenants = more wear and tear</li>
                  <li><strong>Maintenance:</strong> Regular cleaning extends life significantly</li>
                  <li><strong>Water Quality:</strong> Hard water reduces appliance life</li>
                  <li><strong>Climate:</strong> Extreme temperatures stress appliances</li>
                  <li><strong>Installation Quality:</strong> Proper installation prevents premature failure</li>
                </ul>

                <h3>Tax Implications</h3>
                
                <h4>Capitalizing vs. Expensing</h4>
                <p>
                  <strong>Capitalize and Depreciate:</strong> New appliances in service properties
                </p>
                <ul>
                  <li>Appliances in newly purchased rental</li>
                  <li>Major appliance upgrades</li>
                  <li>Part of larger renovation project</li>
                </ul>

                <p>
                  <strong>Immediate Expense:</strong> Repairs and replacements
                </p>
                <ul>
                  <li>Like-for-like appliance replacement in existing rental</li>
                  <li>Repairs to keep appliance functional</li>
                  <li>Items under de minimis safe harbor ($2,500)</li>
                </ul>

                <h4>Section 179 Deduction</h4>
                <p>
                  May allow immediate expensing of appliance costs up to annual limits (currently $1+ million). Consult tax advisor for eligibility.
                </p>

                <h3>Replacement vs. Repair Decision Framework</h3>
                
                <h4>Replace When:</h4>
                <ul>
                  <li>Repair cost exceeds 50% of replacement cost</li>
                  <li>Appliance is beyond 75% of useful life</li>
                  <li>Multiple repairs needed in past year</li>
                  <li>Energy-efficient upgrade provides significant savings</li>
                  <li>Obsolete technology (hard to find parts)</li>
                  <li>Safety concerns or code violations</li>
                </ul>

                <h4>Repair When:</h4>
                <ul>
                  <li>Repair cost is less than 30% of replacement</li>
                  <li>Appliance is less than half of useful life</li>
                  <li>Single, isolated issue</li>
                  <li>Recent purchase still under warranty</li>
                  <li>Quick fix prevents tenant disruption</li>
                </ul>

                <h3>Best Practices for Landlords</h3>
                <ol>
                  <li>
                    <strong>Maintain Detailed Records:</strong>
                    <ul>
                      <li>Purchase date and cost</li>
                      <li>Make, model, serial number</li>
                      <li>Warranty information</li>
                      <li>Repair history</li>
                      <li>Depreciation schedule</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Conduct Annual Inspections:</strong>
                    <ul>
                      <li>Test all functions</li>
                      <li>Clean and maintain</li>
                      <li>Document condition</li>
                      <li>Update replacement timeline</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Budget Proactively:</strong>
                    <ul>
                      <li>Set aside monthly reserves</li>
                      <li>Plan for replacements 2-3 years in advance</li>
                      <li>Consider bulk purchases for multiple properties</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Choose Quality Over Price:</strong>
                    <ul>
                      <li>Mid-range appliances balance cost and durability</li>
                      <li>Avoid cheapest options (frequent replacement costly)</li>
                      <li>Consider energy-efficient models (lower operating costs)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Educate Tenants:</strong>
                    <ul>
                      <li>Provide user manuals</li>
                      <li>Basic care instructions</li>
                      <li>Report issues promptly</li>
                      <li>Proper usage guidelines</li>
                    </ul>
                  </li>
                </ol>

                <h3>Appliance Warranty Considerations</h3>
                <ul>
                  <li><strong>Manufacturer Warranty:</strong> Typically 1 year parts and labor</li>
                  <li><strong>Extended Warranties:</strong> May or may not be worth cost (calculate break-even)</li>
                  <li><strong>Home Warranty Plans:</strong> Can cover multiple appliances, but read fine print</li>
                  <li><strong>Track Expiration:</strong> Use warranty before it expires, then depreciate</li>
                </ul>

                <h3>Energy Efficiency Upgrades</h3>
                <p>
                  Modern, energy-efficient appliances offer benefits beyond depreciation:
                </p>
                <ul>
                  <li><strong>Lower Utility Bills:</strong> 10-50% reduction (tenant or landlord benefit)</li>
                  <li><strong>Marketing Advantage:</strong> Eco-conscious tenants pay premium</li>
                  <li><strong>Tax Credits:</strong> Some energy-efficient appliances qualify for credits</li>
                  <li><strong>Extended Lifespan:</strong> Often built to higher quality standards</li>
                  <li><strong>Reduced Maintenance:</strong> Modern technology more reliable</li>
                </ul>

                <h3>Sample Depreciation Schedule</h3>
                <p>
                  Example for a $5,000 appliance package (kitchen + laundry):
                </p>
                <ul>
                  <li><strong>Year 0:</strong> $5,000 purchase, $0 accumulated depreciation</li>
                  <li><strong>Year 1:</strong> $417 depreciation, $4,583 book value (12-year life)</li>
                  <li><strong>Year 5:</strong> $2,085 accumulated, $2,915 book value</li>
                  <li><strong>Year 10:</strong> $4,170 accumulated, $830 book value</li>
                  <li><strong>Year 12:</strong> Fully depreciated, $0 book value</li>
                </ul>

                <h3>Common Mistakes to Avoid</h3>
                <ul>
                  <li><strong>Forgetting to Track:</strong> Missing tax deductions costs money</li>
                  <li><strong>Using Wrong Useful Life:</strong> Over or under-depreciating affects accuracy</li>
                  <li><strong>Not Inspecting Regularly:</strong> Preventive maintenance extends life</li>
                  <li><strong>Ignoring Salvage Value:</strong> Appliances typically depreciate to $0</li>
                  <li><strong>Mixing Methods:</strong> Be consistent (straight-line for books, MACRS for taxes)</li>
                  <li><strong>Deferred Replacement:</strong> Old appliances cause tenant complaints and higher utility costs</li>
                </ul>

                <h3>Technology and Smart Appliances</h3>
                <p>
                  Modern smart appliances offer landlord-specific benefits:
                </p>
                <ul>
                  <li><strong>Remote Monitoring:</strong> Detect issues before failure</li>
                  <li><strong>Usage Tracking:</strong> Identify abnormal usage patterns</li>
                  <li><strong>Maintenance Alerts:</strong> Reminder for filter changes, cleaning</li>
                  <li><strong>Energy Reporting:</strong> Track utility savings</li>
                  <li><strong>Troubleshooting:</strong> Diagnose issues remotely</li>
                </ul>

                <h3>Multi-Property Portfolio Strategy</h3>
                <p>
                  For landlords with multiple properties:
                </p>
                <ul>
                  <li>Standardize appliance models for bulk discounts</li>
                  <li>Keep spare parts inventory</li>
                  <li>Develop relationships with appliance dealers</li>
                  <li>Stagger replacement schedules to smooth cash flow</li>
                  <li>Consider used/refurbished for lower-rent properties</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Tracking appliance depreciation is more than an accounting exercise—it's a strategic tool for rental property success. By understanding depreciation, landlords can optimize tax benefits, plan capital expenditures, maintain properties proactively, and provide better tenant experiences.
                </p>
                <p>
                  Use this calculator to establish depreciation schedules for each property, review quarterly to adjust for actual conditions, and plan replacements before failures occur. The time invested in tracking depreciation pays dividends through reduced stress, lower costs, and happier tenants.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
