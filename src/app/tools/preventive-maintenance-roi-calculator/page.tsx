'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wrench, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Preventive Maintenance ROI Calculator - Calculate Maintenance Program Returns | Property Tools',
    description: 'Calculate ROI on preventive maintenance programs for rental properties. Compare costs vs emergency repairs, optimize maintenance schedules, and maximize property value. Free calculator for landlords and property managers.',
    keywords: [
      'preventive maintenance ROI',
      'maintenance program calculator',
      'rental property maintenance',
      'emergency repair costs',
      'property maintenance budget',
      'landlord maintenance planning',
      'preventive vs reactive maintenance',
      'maintenance cost savings',
      'property maintenance schedule',
      'rental property upkeep'
    ],
  };
}

export default function PreventiveMaintenanceROICalculator() {
  const [propertyValue, setPropertyValue] = useState<string>('500000');
  const [monthlyRent, setMonthlyRent] = useState<string>('2500');
  const [preventiveCost, setPreventiveCost] = useState<string>('300');
  const [emergencyRepairCost, setEmergencyRepairCost] = useState<string>('1500');
  const [emergencyFrequency, setEmergencyFrequency] = useState<string>('3');
  const [downtime, setDowntime] = useState<string>('5');
  const [lifespanIncrease, setLifespanIncrease] = useState<string>('25');

  const calculateROI = () => {
    const value = parseFloat(propertyValue) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const preventive = parseFloat(preventiveCost) || 0;
    const emergency = parseFloat(emergencyRepairCost) || 0;
    const frequency = parseFloat(emergencyFrequency) || 0;
    const days = parseFloat(downtime) || 0;
    const lifespan = parseFloat(lifespanIncrease) || 0;

    const annualPreventiveCost = preventive * 12;
    const annualEmergencyCost = emergency * frequency;
    const annualSavings = annualEmergencyCost - annualPreventiveCost;
    const lostRent = (rent / 30) * days * frequency;
    const totalSavings = annualSavings + lostRent;
    const roi = annualPreventiveCost > 0 ? (totalSavings / annualPreventiveCost) * 100 : 0;
    const lifespanValue = (value * (lifespan / 100)) / 10;

    return {
      annualPreventiveCost,
      annualEmergencyCost,
      annualSavings,
      lostRent,
      totalSavings,
      roi,
      lifespanValue,
      fiveYearSavings: totalSavings * 5,
      tenYearSavings: totalSavings * 10
    };
  };

  const results = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Preventive Maintenance ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate return on investment for preventive maintenance programs and compare costs vs emergency repairs
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Complete Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Property Information
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
                    <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Maintenance Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="preventiveCost">Monthly Preventive Maintenance ($)</Label>
                    <Input
                      id="preventiveCost"
                      type="number"
                      value={preventiveCost}
                      onChange={(e) => setPreventiveCost(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyRepairCost">Average Emergency Repair Cost ($)</Label>
                    <Input
                      id="emergencyRepairCost"
                      type="number"
                      value={emergencyRepairCost}
                      onChange={(e) => setEmergencyRepairCost(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyFrequency">Emergency Repairs Per Year</Label>
                    <Input
                      id="emergencyFrequency"
                      type="number"
                      value={emergencyFrequency}
                      onChange={(e) => setEmergencyFrequency(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Impact Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="downtime">Downtime Per Emergency (days)</Label>
                    <Input
                      id="downtime"
                      type="number"
                      value={downtime}
                      onChange={(e) => setDowntime(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lifespanIncrease">Asset Lifespan Increase (%)</Label>
                    <Input
                      id="lifespanIncrease"
                      type="number"
                      value={lifespanIncrease}
                      onChange={(e) => setLifespanIncrease(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    ROI Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Preventive Cost:</span>
                    <span className="font-bold">${results.annualPreventiveCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Emergency Cost:</span>
                    <span className="font-bold">${results.annualEmergencyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span className="font-medium">Annual Savings:</span>
                    <span className="font-bold">${results.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lost Rent Avoided:</span>
                    <span className="font-bold">${results.lostRent.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total Annual Savings:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      ${results.totalSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xl pt-2">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {results.roi.toFixed(1)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Long-Term Value</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">5-Year Savings</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${results.fiveYearSavings.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">10-Year Savings</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${results.tenYearSavings.toLocaleString()}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Asset Value Protection</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    ${results.lifespanValue.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Guide to Preventive Maintenance ROI</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Preventive Maintenance ROI</h2>
                <p>
                  Preventive maintenance is one of the most cost-effective strategies for rental property owners and managers. By investing in regular, scheduled maintenance, you can significantly reduce emergency repair costs, minimize tenant turnover, and protect your property's long-term value. This comprehensive guide will help you understand how to calculate and maximize the return on investment (ROI) from preventive maintenance programs.
                </p>

                <h3>What is Preventive Maintenance?</h3>
                <p>
                  Preventive maintenance refers to the systematic inspection, detection, and correction of potential failures before they occur. Unlike reactive maintenance, which addresses problems after they break down, preventive maintenance follows a scheduled approach to keep systems and equipment operating efficiently.
                </p>

                <h3>Key Components of Preventive Maintenance</h3>
                <ul>
                  <li><strong>Regular Inspections:</strong> Scheduled property walkthroughs to identify potential issues</li>
                  <li><strong>HVAC Maintenance:</strong> Filter changes, system cleaning, and seasonal tune-ups</li>
                  <li><strong>Plumbing Checks:</strong> Leak detection, water heater flushing, and drain cleaning</li>
                  <li><strong>Electrical Systems:</strong> Testing outlets, checking panels, replacing worn components</li>
                  <li><strong>Exterior Maintenance:</strong> Roof inspections, gutter cleaning, landscaping upkeep</li>
                  <li><strong>Appliance Servicing:</strong> Regular maintenance of refrigerators, washers, dryers</li>
                  <li><strong>Safety Systems:</strong> Testing smoke detectors, carbon monoxide alarms, fire extinguishers</li>
                </ul>

                <h3>Calculating Preventive Maintenance ROI</h3>
                <p>
                  The ROI calculation compares the cost of preventive maintenance against the savings from avoiding emergency repairs, reducing downtime, and extending asset life. The formula is:
                </p>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  ROI = [(Total Savings - Preventive Maintenance Cost) / Preventive Maintenance Cost] × 100
                </p>

                <h3>Cost Components to Consider</h3>
                <h4>Preventive Maintenance Costs:</h4>
                <ul>
                  <li>Monthly or quarterly service contracts</li>
                  <li>Labor costs for inspections and routine work</li>
                  <li>Parts and materials for scheduled replacements</li>
                  <li>Software or systems for tracking maintenance</li>
                </ul>

                <h4>Savings from Preventive Maintenance:</h4>
                <ul>
                  <li><strong>Reduced Emergency Repairs:</strong> Catching problems early prevents catastrophic failures</li>
                  <li><strong>Minimized Downtime:</strong> Less tenant disruption and lost rent</li>
                  <li><strong>Extended Equipment Life:</strong> Well-maintained systems last longer</li>
                  <li><strong>Energy Savings:</strong> Efficient systems reduce utility costs</li>
                  <li><strong>Lower Insurance Premiums:</strong> Some insurers offer discounts for preventive programs</li>
                  <li><strong>Higher Property Value:</strong> Well-maintained properties command premium prices</li>
                </ul>

                <h3>Industry Benchmarks</h3>
                <p>
                  Research shows that preventive maintenance typically delivers:
                </p>
                <ul>
                  <li><strong>300-700% ROI</strong> on preventive maintenance programs</li>
                  <li><strong>12-18% reduction</strong> in overall maintenance costs</li>
                  <li><strong>35-45% decrease</strong> in equipment breakdowns</li>
                  <li><strong>20-30% increase</strong> in asset lifespan</li>
                  <li><strong>70-75% reduction</strong> in downtime incidents</li>
                </ul>

                <h3>Creating a Preventive Maintenance Schedule</h3>
                <h4>Monthly Tasks:</h4>
                <ul>
                  <li>HVAC filter replacement</li>
                  <li>Test smoke and CO detectors</li>
                  <li>Inspect for leaks and water damage</li>
                  <li>Check exterior lighting</li>
                  <li>Walk-through property inspection</li>
                </ul>

                <h4>Quarterly Tasks:</h4>
                <ul>
                  <li>HVAC system servicing</li>
                  <li>Clean gutters and downspouts</li>
                  <li>Inspect roof for damage</li>
                  <li>Test all appliances</li>
                  <li>Check caulking and weatherstripping</li>
                </ul>

                <h4>Annual Tasks:</h4>
                <ul>
                  <li>Complete HVAC tune-up and inspection</li>
                  <li>Water heater flushing and inspection</li>
                  <li>Chimney cleaning and inspection</li>
                  <li>Septic system inspection (if applicable)</li>
                  <li>Exterior painting and repairs</li>
                  <li>Full electrical system inspection</li>
                </ul>

                <h3>Best Practices for Maximizing ROI</h3>
                <ol>
                  <li>
                    <strong>Document Everything:</strong> Keep detailed records of all maintenance activities, costs, and findings. This data helps optimize your program over time.
                  </li>
                  <li>
                    <strong>Use Technology:</strong> Property management software can automate scheduling, track costs, and generate reports.
                  </li>
                  <li>
                    <strong>Train Staff:</strong> Ensure maintenance personnel understand the importance of preventive work and proper procedures.
                  </li>
                  <li>
                    <strong>Prioritize Critical Systems:</strong> Focus preventive efforts on high-value, high-impact systems like HVAC, roofing, and plumbing.
                  </li>
                  <li>
                    <strong>Build Vendor Relationships:</strong> Establish contracts with reliable service providers for consistent, quality work.
                  </li>
                  <li>
                    <strong>Monitor and Adjust:</strong> Regularly review your program's performance and adjust schedules based on actual equipment performance.
                  </li>
                </ol>

                <h3>Common Pitfalls to Avoid</h3>
                <ul>
                  <li><strong>Skipping Inspections:</strong> Missing scheduled maintenance defeats the entire purpose</li>
                  <li><strong>Using Unqualified Personnel:</strong> Poor quality work can cause more problems than it solves</li>
                  <li><strong>Ignoring Manufacturer Guidelines:</strong> Follow recommended service intervals for equipment</li>
                  <li><strong>Inadequate Record Keeping:</strong> Without documentation, you can't prove ROI or optimize the program</li>
                  <li><strong>Cutting Corners on Quality:</strong> Cheap parts or rushed work lead to premature failures</li>
                </ul>

                <h3>Tax Benefits</h3>
                <p>
                  Preventive maintenance costs are typically fully deductible as ordinary business expenses in the year they're incurred. This includes:
                </p>
                <ul>
                  <li>Routine inspections and servicing</li>
                  <li>Cleaning and minor repairs</li>
                  <li>Parts and materials for maintenance</li>
                  <li>Labor costs for preventive work</li>
                </ul>
                <p>
                  Unlike capital improvements, which must be depreciated over time, preventive maintenance offers immediate tax benefits while preserving asset value.
                </p>

                <h3>Measuring Success</h3>
                <p>
                  Track these key performance indicators (KPIs) to evaluate your preventive maintenance program:
                </p>
                <ul>
                  <li><strong>Mean Time Between Failures (MTBF):</strong> How long equipment operates before breaking down</li>
                  <li><strong>Maintenance Cost Ratio:</strong> Preventive costs as a percentage of property value</li>
                  <li><strong>Emergency Work Order Percentage:</strong> Ratio of emergency to planned maintenance</li>
                  <li><strong>Tenant Satisfaction:</strong> Survey results related to property condition</li>
                  <li><strong>Vacancy Rates:</strong> Impact of property condition on tenant retention</li>
                  <li><strong>Energy Consumption:</strong> Changes in utility usage from well-maintained systems</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Implementing a comprehensive preventive maintenance program is one of the smartest investments a property owner can make. While it requires upfront commitment and consistent execution, the returns—both financial and operational—far outweigh the costs. Properties with strong preventive maintenance programs experience fewer emergencies, happier tenants, lower operating costs, and higher market values.
                </p>
                <p>
                  Use this calculator regularly to quantify the value of your maintenance program and make data-driven decisions about resource allocation. Remember, an ounce of prevention is worth a pound of cure—especially in rental property management.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
