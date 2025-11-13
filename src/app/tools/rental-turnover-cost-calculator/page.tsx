'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calculator, DollarSign, TrendingDown, AlertCircle, FileText, Home, Clock } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Turnover Cost Calculator - Complete Vacancy & Turnover Analysis | Property Tools',
    description: 'Calculate all costs of tenant turnover including cleaning, repairs, marketing, vacancy loss, and utilities. Understand the true cost of rental property turnover.',
  };
}

export default function RentalTurnoverCostCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(2000);
  const [vacancyDays, setVacancyDays] = useState<number>(30);
  const [cleaningCost, setCleaningCost] = useState<number>(300);
  const [paintingCost, setPaintingCost] = useState<number>(800);
  const [repairsCost, setRepairsCost] = useState<number>(500);
  const [carpetCleaning, setCarpetCleaning] = useState<number>(250);
  const [landscaping, setLandscaping] = useState<number>(150);
  const [marketingCost, setMarketingCost] = useState<number>(200);
  const [screeningFees, setScreeningFees] = useState<number>(50);
  const [monthlyUtilities, setMonthlyUtilities] = useState<number>(180);
  const [leasingFee, setLeasingFee] = useState<number>(0);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateTurnover = () => {
    const vacancyLoss = (monthlyRent / 30) * vacancyDays;
    
    const utilitiesDuringVacancy = (monthlyUtilities / 30) * vacancyDays;
    
    const cleaningAndPrep = cleaningCost + paintingCost + repairsCost + carpetCleaning + landscaping;
    
    const leasing = marketingCost + screeningFees + leasingFee;
    
    const totalTurnoverCost = vacancyLoss + cleaningAndPrep + leasing + utilitiesDuringVacancy;
    
    const monthsOfRentLost = totalTurnoverCost / monthlyRent;
    
    const annualizedCost = (totalTurnoverCost / 12) * 12;
    const impactOnAnnualRent = (totalTurnoverCost / (monthlyRent * 12)) * 100;
    
    const turnoversPerYear = 12 / Math.max((vacancyDays / 30) + 12, 1);
    const annualTurnoverCost = totalTurnoverCost * Math.min(turnoversPerYear, 1);
    
    const breakdown = {
      vacancyLoss: {
        amount: vacancyLoss,
        percentage: (vacancyLoss / totalTurnoverCost) * 100,
        label: 'Lost Rent During Vacancy'
      },
      cleaningAndPrep: {
        amount: cleaningAndPrep,
        percentage: (cleaningAndPrep / totalTurnoverCost) * 100,
        label: 'Cleaning & Repairs'
      },
      leasing: {
        amount: leasing,
        percentage: (leasing / totalTurnoverCost) * 100,
        label: 'Marketing & Leasing'
      },
      utilities: {
        amount: utilitiesDuringVacancy,
        percentage: (utilitiesDuringVacancy / totalTurnoverCost) * 100,
        label: 'Utilities During Vacancy'
      }
    };
    
    const waysToReduce = [];
    if (vacancyDays > 21) waysToReduce.push('Reduce vacancy time through better marketing and pre-leasing');
    if (cleaningAndPrep > monthlyRent * 0.5) waysToReduce.push('Improve tenant screening to reduce damage');
    if (marketingCost > 150) waysToReduce.push('Use free listing platforms and reduce paid advertising');
    if (paintingCost > 500) waysToReduce.push('Touch-up paint instead of full repaints between tenants');
    
    setResults({
      totalTurnoverCost,
      monthsOfRentLost,
      impactOnAnnualRent,
      vacancyDays,
      breakdown,
      waysToReduce,
      annualTurnoverCost
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-red-600 p-3 rounded-full">
            <TrendingDown className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rental Turnover Cost Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate the complete cost of tenant turnover including vacancy loss, cleaning, repairs, marketing, and leasing expenses.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Cost Analysis
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Turnover Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property & Vacancy
                </CardTitle>
                <CardDescription>
                  Basic rental information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="2000"
                  />
                </div>
                <div>
                  <Label htmlFor="vacancyDays">Vacancy Period (days)</Label>
                  <Input
                    id="vacancyDays"
                    type="number"
                    value={vacancyDays}
                    onChange={(e) => setVacancyDays(Number(e.target.value))}
                    placeholder="30"
                  />
                  <p className="text-sm text-gray-500 mt-1">Average: 20-45 days</p>
                </div>
                <div>
                  <Label htmlFor="monthlyUtilities">Monthly Utilities ($)</Label>
                  <Input
                    id="monthlyUtilities"
                    type="number"
                    value={monthlyUtilities}
                    onChange={(e) => setMonthlyUtilities(Number(e.target.value))}
                    placeholder="180"
                  />
                  <p className="text-sm text-gray-500 mt-1">Electric, gas, water during vacancy</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cleaning & Repairs</CardTitle>
                <CardDescription>
                  Make-ready expenses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cleaningCost">Professional Cleaning ($)</Label>
                  <Input
                    id="cleaningCost"
                    type="number"
                    value={cleaningCost}
                    onChange={(e) => setCleaningCost(Number(e.target.value))}
                    placeholder="300"
                  />
                </div>
                <div>
                  <Label htmlFor="paintingCost">Painting ($)</Label>
                  <Input
                    id="paintingCost"
                    type="number"
                    value={paintingCost}
                    onChange={(e) => setPaintingCost(Number(e.target.value))}
                    placeholder="800"
                  />
                  <p className="text-sm text-gray-500 mt-1">Touch-ups or full repaint</p>
                </div>
                <div>
                  <Label htmlFor="repairsCost">General Repairs ($)</Label>
                  <Input
                    id="repairsCost"
                    type="number"
                    value={repairsCost}
                    onChange={(e) => setRepairsCost(Number(e.target.value))}
                    placeholder="500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Holes, fixtures, minor damage</p>
                </div>
                <div>
                  <Label htmlFor="carpetCleaning">Carpet/Flooring Cleaning ($)</Label>
                  <Input
                    id="carpetCleaning"
                    type="number"
                    value={carpetCleaning}
                    onChange={(e) => setCarpetCleaning(Number(e.target.value))}
                    placeholder="250"
                  />
                </div>
                <div>
                  <Label htmlFor="landscaping">Landscaping/Curb Appeal ($)</Label>
                  <Input
                    id="landscaping"
                    type="number"
                    value={landscaping}
                    onChange={(e) => setLandscaping(Number(e.target.value))}
                    placeholder="150"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marketing & Leasing</CardTitle>
                <CardDescription>
                  Costs to find new tenant
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="marketingCost">Marketing/Advertising ($)</Label>
                  <Input
                    id="marketingCost"
                    type="number"
                    value={marketingCost}
                    onChange={(e) => setMarketingCost(Number(e.target.value))}
                    placeholder="200"
                  />
                  <p className="text-sm text-gray-500 mt-1">Photos, listings, signs</p>
                </div>
                <div>
                  <Label htmlFor="screeningFees">Tenant Screening ($)</Label>
                  <Input
                    id="screeningFees"
                    type="number"
                    value={screeningFees}
                    onChange={(e) => setScreeningFees(Number(e.target.value))}
                    placeholder="50"
                  />
                  <p className="text-sm text-gray-500 mt-1">Background & credit checks</p>
                </div>
                <div>
                  <Label htmlFor="leasingFee">Leasing/Placement Fee ($)</Label>
                  <Input
                    id="leasingFee"
                    type="number"
                    value={leasingFee}
                    onChange={(e) => setLeasingFee(Number(e.target.value))}
                    placeholder="0"
                  />
                  <p className="text-sm text-gray-500 mt-1">Agent commission (often 50-100% of first month)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateTurnover} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Turnover Cost
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className="border-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Total Turnover Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className="text-5xl font-bold text-red-600">
                      ${results.totalTurnoverCost.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </p>
                    <p className="text-gray-600 mt-2">
                      Equivalent to {results.monthsOfRentLost.toFixed(2)} months of rent
                    </p>
                    <Badge className="mt-4 bg-orange-500 text-white">
                      {results.impactOnAnnualRent.toFixed(1)}% of annual rent
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-4 gap-6">
                {Object.values(results.breakdown).map((item: any, index: number) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600">
                        {item.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-gray-900">
                        ${item.amount.toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.percentage.toFixed(1)}% of total
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Detailed Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Lost Rent ({vacancyDays} days)</span>
                    <span className="font-bold text-red-600">${results.breakdown.vacancyLoss.amount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Professional Cleaning</span>
                    <span>${cleaningCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Painting</span>
                    <span>${paintingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">General Repairs</span>
                    <span>${repairsCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carpet/Flooring Cleaning</span>
                    <span>${carpetCleaning.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Landscaping</span>
                    <span>${landscaping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marketing/Advertising</span>
                    <span>${marketingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenant Screening</span>
                    <span>${screeningFees.toLocaleString()}</span>
                  </div>
                  {leasingFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leasing/Placement Fee</span>
                      <span>${leasingFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Utilities During Vacancy</span>
                    <span>${results.breakdown.utilities.amount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between border-t-2 pt-3 text-lg font-bold">
                    <span>Total Turnover Cost</span>
                    <span className="text-red-600">${results.totalTurnoverCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                </CardContent>
              </Card>

              {results.waysToReduce.length > 0 && (
                <Card className="border-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <AlertCircle className="h-5 w-5" />
                      Ways to Reduce Turnover Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.waysToReduce.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <TrendingDown className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Impact Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Vacancy Impact:</p>
                    <p className="text-lg">For every {vacancyDays} days of vacancy, you lose <span className="font-bold text-red-600">${results.breakdown.vacancyLoss.amount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span> in rental income</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Annual Impact:</p>
                    <p className="text-lg">This turnover reduces your annual rental income by <span className="font-bold text-red-600">{results.impactOnAnnualRent.toFixed(1)}%</span></p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Tenant Retention Value:</p>
                    <p className="text-lg">Keeping the same quality tenant saves <span className="font-bold text-green-600">${results.totalTurnoverCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span> per year</p>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate turnover costs to see detailed analysis</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Rental Turnover Costs</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding the True Cost of Tenant Turnover</h3>
                  <p>Tenant turnover is one of the most expensive aspects of owning rental property, yet many landlords significantly underestimate its true cost. While most landlords focus on obvious expenses like cleaning and minor repairs, the complete cost of turnover includes vacancy loss, marketing, screening, utilities, and opportunity costs that often total 1-3 months of rent per turnover event.</p>
                  <p>Understanding and accurately calculating these costs is essential for several reasons: it helps you set appropriate rent levels that account for turnover, motivates tenant retention efforts, justifies capital improvements that reduce turnover, and provides realistic cash flow projections for investment analysis.</p>
                  <p>Industry studies show that the average turnover cost ranges from $1,000-$5,000 depending on property type, location, and rental price point. For a $2,000/month rental, a comprehensive turnover often costs $3,000-4,000, equivalent to 1.5-2 months of rent. For landlords who experience annual turnover, this can reduce net operating income by 10-15%.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Five Categories of Turnover Costs</h3>
                  <p>Turnover costs fall into five distinct categories, each representing a significant portion of the total expense:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">1. Vacancy Loss (Largest Single Cost)</h4>
                  <p>Vacancy loss is typically the largest component of turnover costs, often representing 40-60% of the total. This is the rental income lost during the period between when one tenant moves out and the next tenant moves in and starts paying rent.</p>
                  <p>Average vacancy periods vary by market and season:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Strong rental markets:</strong> 15-25 days (fast turnover in high-demand areas)</li>
                    <li><strong>Average markets:</strong> 30-45 days (typical turnover time)</li>
                    <li><strong>Weak markets or winter season:</strong> 60-90+ days (slow markets or off-season)</li>
                  </ul>
                  <p className="mt-4">For a $2,000/month rental property:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>20-day vacancy = $1,333 lost rent</li>
                    <li>30-day vacancy = $2,000 lost rent</li>
                    <li>60-day vacancy = $4,000 lost rent</li>
                  </ul>
                  <p>Reducing vacancy time by even one week can save hundreds of dollars per turnover.</p>

                  <h4 className="font-semibold mt-4 mb-2">2. Cleaning and Make-Ready (20-30% of Total Cost)</h4>
                  <p>Even when tenants leave properties in reasonable condition, professional cleaning and preparation for the next tenant is essential. This category includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Deep Cleaning:</strong> $200-500 for professional cleaning services including kitchen, bathrooms, windows, and appliances</li>
                    <li><strong>Carpet/Flooring:</strong> $150-400 for professional carpet cleaning or floor refinishing</li>
                    <li><strong>Painting:</strong> $500-2,000 depending on whether you do touch-ups or full repaints; labor costs vary significantly</li>
                    <li><strong>Landscaping/Curb Appeal:</strong> $100-300 for lawn care, trimming, and improving exterior appearance</li>
                  </ul>
                  <p>While security deposits can offset some damage costs, cleaning and wear-and-tear expenses often exceed deposit coverage, especially for longer tenancies where normal deterioration has occurred.</p>

                  <h4 className="font-semibold mt-4 mb-2">3. Repairs and Maintenance (15-25% of Total Cost)</h4>
                  <p>Tenant turnover reveals deferred maintenance and damage that must be addressed before re-leasing:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Minor Repairs:</strong> $200-600 for fixing holes in walls, replacing broken fixtures, door handles, blinds, and other cosmetic damage</li>
                    <li><strong>Appliance Repairs/Replacement:</strong> $100-1,500 if appliances fail inspection or are damaged</li>
                    <li><strong>HVAC Servicing:</strong> $100-300 for professional servicing between tenants to ensure systems work properly</li>
                    <li><strong>Plumbing/Electrical Fixes:</strong> $150-500 for minor issues discovered during turnover inspections</li>
                  </ul>
                  <p>Many landlords discover that "good" tenants who never called for repairs were actually ignoring problems that compound over time, leading to expensive turnover repair bills.</p>

                  <h4 className="font-semibold mt-4 mb-2">4. Marketing and Leasing (10-15% of Total Cost)</h4>
                  <p>Finding the next tenant requires marketing efforts and administrative time:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Photography:</strong> $100-200 for professional photos (highly recommended) or DIY time and effort</li>
                    <li><strong>Listing Fees:</strong> $0-200 depending on platforms used; some are free (Zillow, Facebook), others charge (MLS access, premium placements)</li>
                    <li><strong>Signage:</strong> $30-100 for yard signs and materials</li>
                    <li><strong>Screening Costs:</strong> $30-75 per applicant for credit checks, background checks, and eviction history reports</li>
                    <li><strong>Leasing Agent Fees:</strong> $0-2,000 if using a property manager or leasing agent (often 50-100% of first month's rent)</li>
                  </ul>
                  <p>Even DIY landlords incur soft costs—time spent showing the property, answering inquiries, and processing applications has monetary value.</p>

                  <h4 className="font-semibold mt-4 mb-2">5. Utilities and Carrying Costs (5-10% of Total Cost)</h4>
                  <p>During vacancy, landlords pay all utilities and carrying costs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Utilities:</strong> $150-300/month for electric, gas, water, and sewer during vacancy</li>
                    <li><strong>Internet/Cable:</strong> $50-100/month if you maintain service for showings or property management</li>
                    <li><strong>HOA Fees:</strong> Ongoing for condos/townhouses</li>
                    <li><strong>Property Taxes & Insurance:</strong> Prorated costs continue during vacancy</li>
                  </ul>
                  <p>A 30-day vacancy with $200/month in utilities adds $200 to turnover costs; a 60-day vacancy adds $400.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hidden and Opportunity Costs Often Overlooked</h3>
                  <p>Beyond direct expenses, turnover creates hidden costs that many landlords fail to account for:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Time Value of Landlord Labor</h4>
                  <p>DIY landlords often ignore the value of their own time. Consider these time investments during turnover:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Move-out inspection: 1-2 hours</li>
                    <li>Cleaning/painting/repairs (if DIY): 10-30 hours</li>
                    <li>Marketing and listing creation: 2-4 hours</li>
                    <li>Showing property to prospects: 5-10 hours</li>
                    <li>Processing applications and screening: 2-4 hours</li>
                    <li>Move-in inspection and lease signing: 1-2 hours</li>
                  </ul>
                  <p>Total time investment: 20-50 hours per turnover. At a modest $50/hour value, this represents $1,000-2,500 in opportunity cost.</p>

                  <h4 className="font-semibold mt-4 mb-2">Security Deposit Losses</h4>
                  <p>While security deposits should cover damage, in practice they often don't fully compensate for wear and tear, especially after longer tenancies. Landlords who charge 1-month deposits but face 1.5 months of damage/cleaning costs absorb a 0.5-month loss.</p>

                  <h4 className="font-semibold mt-4 mb-2">Rent Concessions to Speed Leasing</h4>
                  <p>To reduce vacancy time, landlords sometimes offer concessions (first month free, reduced deposit, waived fees) that further reduce effective rent collected. A "first month free" deal on a 12-month lease reduces annual rent by 8.3%.</p>

                  <h4 className="font-semibold mt-4 mb-2">Lower Rent to Compete</h4>
                  <p>In competitive or declining markets, landlords may need to reduce rent to attract tenants quickly. Even a $100/month rent reduction costs $1,200 annually and can persist for years if not adjusted back up.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Benchmarks: What's Normal?</h3>
                  <p>Understanding typical turnover costs helps landlords assess their own efficiency:</p>
                  
                  <p><strong>By Property Type:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Class A Properties (Luxury):</strong> $4,000-8,000 per turnover (high-end finishes require expensive repairs/replacements)</li>
                    <li><strong>Class B Properties (Mid-Range):</strong> $2,000-4,000 per turnover (average maintenance and typical tenant wear)</li>
                    <li><strong>Class C Properties (Affordable):</strong> $1,500-3,000 per turnover (lower rents but often higher damage rates)</li>
                  </ul>

                  <p className="mt-4"><strong>By Tenancy Length:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>1-2 Year Tenancy:</strong> Lower turnover costs ($1,500-2,500) due to minimal wear</li>
                    <li><strong>3-5 Year Tenancy:</strong> Moderate costs ($2,500-4,000) from accumulated wear requiring painting, carpet replacement</li>
                    <li><strong>5+ Year Tenancy:</strong> Higher costs ($4,000-6,000+) as major items need replacement (appliances, flooring, extensive painting)</li>
                  </ul>

                  <p className="mt-4"><strong>Annual Turnover Frequency:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Student Rentals:</strong> 100% annual turnover (every tenant moves yearly)</li>
                    <li><strong>Urban Apartments:</strong> 40-60% annual turnover</li>
                    <li><strong>Suburban Single-Family:</strong> 20-40% annual turnover</li>
                    <li><strong>Luxury/Executive Rentals:</strong> 30-50% annual turnover</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategies to Reduce Vacancy Time</h3>
                  <p>Since vacancy loss is often the largest turnover cost component, reducing vacancy time yields the highest ROI:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Pre-Lease Before Move-Out</h4>
                  <p>Start marketing the property 60 days before the current tenant's lease ends. If state law allows, include lease clauses permitting showings during the final 30-60 days with proper notice. This can reduce vacancy to zero days.</p>

                  <h4 className="font-semibold mt-4 mb-2">Professional Photography and Marketing</h4>
                  <p>High-quality photos increase inquiries by 50-100% and reduce vacancy time significantly. The $150-200 cost is recovered within 2-3 days of faster lease-up.</p>

                  <h4 className="font-semibold mt-4 mb-2">Competitive Pricing</h4>
                  <p>Overpricing by $100/month to "test the market" can add 30-60 days of vacancy, costing far more than the $100/month you hoped to gain. Price competitively from day one.</p>

                  <h4 className="font-semibold mt-4 mb-2">Quick Response to Inquiries</h4>
                  <p>Respond to rental inquiries within 1 hour. Prospects who don't hear back quickly move on to other properties. Automated responses and scheduling tools help.</p>

                  <h4 className="font-semibold mt-4 mb-2">Flexible Showing Times</h4>
                  <p>Offer evening and weekend showings. Limiting showings to weekday business hours eliminates 70% of potential tenants who work traditional schedules.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategies to Reduce Make-Ready Costs</h3>
                  
                  <h4 className="font-semibold mt-4 mb-2">Better Tenant Screening</h4>
                  <p>Investing $50-75 in thorough screening (credit, background, rental history, income verification) reduces the likelihood of tenants who cause damage. One avoided bad tenant saves thousands in turnover costs.</p>

                  <h4 className="font-semibold mt-4 mb-2">Regular Inspections</h4>
                  <p>Conduct annual or semi-annual inspections to catch maintenance issues early. Small problems caught early cost hundreds; neglected problems cost thousands at turnover.</p>

                  <h4 className="font-semibold mt-4 mb-2">Quality Initial Finishes</h4>
                  <p>Durable, quality finishes reduce turnover costs. Washable paint, commercial-grade carpet, solid cabinet hardware, and quality appliances withstand tenant use better and require less frequent replacement.</p>

                  <h4 className="font-semibold mt-4 mb-2">DIY vs. Professional Services</h4>
                  <p>Landlords with skills and time can save 40-60% on cleaning, painting, and minor repairs by doing the work themselves. However, professional services often complete work faster (reducing vacancy) and to higher standards (improving marketability).</p>

                  <h4 className="font-semibold mt-4 mb-2">Preventive Maintenance</h4>
                  <p>Regular HVAC servicing, gutter cleaning, and appliance maintenance prevent expensive emergency repairs during turnover. A $200 annual service call prevents a $1,500 replacement.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The ROI of Tenant Retention</h3>
                  <p>Given high turnover costs, retaining good tenants is extremely valuable:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Rent Increases vs. Turnover Costs</h4>
                  <p>Many landlords lose money by aggressively raising rent. Consider this example:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Current rent: $2,000/month</li>
                    <li>Proposed increase: $150/month (7.5%)</li>
                    <li>Annual gain from increase: $1,800</li>
                    <li>Turnover cost if tenant leaves: $3,500</li>
                    <li>Net loss from turnover: -$1,700</li>
                  </ul>
                  <p>If a 7.5% increase causes 30% of tenants to leave, the landlord loses money. Smaller increases (3-5% annually) retain more tenants and maximize net income.</p>

                  <h4 className="font-semibold mt-4 mb-2">Good Tenant Incentives</h4>
                  <p>Consider these tenant retention strategies:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Renewal Discount:</strong> Offer a $50/month discount for 2-year lease renewal ($600 annual cost vs. $3,500 turnover cost = $2,900 savings)</li>
                    <li><strong>Upgrade Benefits:</strong> Offer minor upgrades (new appliances, paint, fixtures) that cost $500-1,000 but keep good tenants paying rent (saves $2,000-3,000 in turnover)</li>
                    <li><strong>Smaller Rent Increases:</strong> Cap increases at 3% for excellent tenants, encouraging multi-year tenancies</li>
                    <li><strong>Maintenance Responsiveness:</strong> Quick response to maintenance requests builds goodwill and retention</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Long-Tenancy Stability</h4>
                  <p>A tenant who stays 5 years saves the landlord 4 turnover events at $3,000 each = $12,000 over their tenancy. This justifies significant investment in keeping good tenants happy.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting for Turnover in Cash Flow Analysis</h3>
                  <p>Accurate investment analysis requires realistic turnover cost assumptions:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Annual Reserve Calculation</h4>
                  <p>If you expect 30% annual turnover and each turnover costs $3,000, budget $900/year for turnover costs (30% × $3,000). For conservative analysis, budget for 50% turnover ($1,500/year).</p>

                  <h4 className="font-semibold mt-4 mb-2">Incorporating into NOI Projections</h4>
                  <p>Many new landlords project 100% occupancy and zero turnover costs, leading to disappointing actual results. Realistic projections should assume:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>95-97% occupancy (accounting for average vacancy)</li>
                    <li>Annual turnover reserves of $500-1,500 depending on property type</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Impact on Cash-on-Cash Returns</h4>
                  <p>Turnover costs reduce annual cash flow by 5-15% for properties with moderate turnover. A property projected to generate $10,000 annual cash flow might actually deliver only $8,500-9,000 after accounting for realistic turnover.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Management and Turnover Efficiency</h3>
                  <p>Professional property managers often complete turnovers faster and cheaper than DIY landlords through economies of scale:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Vendor Relationships:</strong> Established relationships with cleaners, painters, and contractors yield better pricing and faster service</li>
                    <li><strong>Marketing Expertise:</strong> Professional listings, photos, and marketing reduce vacancy time</li>
                    <li><strong>Showing Efficiency:</strong> Property managers conduct showings immediately upon availability, reducing vacancy</li>
                    <li><strong>Screening Systems:</strong> Streamlined application processing and screening reduces time-to-lease</li>
                  </ul>
                  <p>While management fees cost 8-10% of rent, faster turnover and professional marketing can offset this cost by reducing vacancy and turnover expenses.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Considerations and Timing</h3>
                  <p>Turnover timing significantly affects costs:</p>
                  
                  <p><strong>Peak Rental Season (May-September):</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Faster lease-up (15-25 days typical)</li>
                    <li>Higher rent potential (5-10% seasonal premium possible)</li>
                    <li>More applicants to choose from (better tenant selection)</li>
                  </ul>

                  <p className="mt-4"><strong>Off-Season (November-February):</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Slower lease-up (45-90 days in some markets)</li>
                    <li>May require rent concessions or reductions</li>
                    <li>Smaller applicant pool (harder to find quality tenants)</li>
                  </ul>

                  <p className="mt-4">Strategy: Structure leases to renew during peak season. For example, if a tenant applies in December, offer a 6-month lease expiring in May/June when re-leasing will be easier and faster.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion: Turnover is Expensive—Plan Accordingly</h3>
                  <p>Tenant turnover is one of the most significant costs in rental property ownership, often totaling 1-3 months of rent per event. The true cost extends beyond obvious cleaning and repairs to include vacancy loss, marketing expenses, utilities, and opportunity costs.</p>
                  <p>Key principles for managing turnover costs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account for realistic turnover costs ($2,000-4,000+ per event) in investment analysis</li>
                    <li>Prioritize tenant retention over maximizing short-term rent increases</li>
                    <li>Reduce vacancy time through pre-leasing, professional marketing, and competitive pricing</li>
                    <li>Invest in thorough screening to avoid problem tenants who cause expensive damage</li>
                    <li>Conduct regular inspections to catch maintenance issues before they become expensive repairs</li>
                    <li>Consider the total cost of turnover when making decisions about rent increases and tenant relations</li>
                    <li>Time lease expirations for peak rental seasons when possible</li>
                  </ul>
                  <p className="mt-4">By understanding and actively managing turnover costs, landlords can significantly improve their property's financial performance and build sustainable, profitable rental businesses. A good tenant paying $2,000/month who stays for 5 years is worth far more than cycling through 5 tenants who each stay one year, even if you raise rent slightly with each turnover.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
