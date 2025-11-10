'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, MapPin, DollarSign, TrendingUp, Search, BarChart3, BookOpen, Info, AlertCircle, CheckCircle } from 'lucide-react';

interface TaxRateData {
  county: string;
  state: string;
  countyRate: number;
  cityRate: number;
  schoolRate: number;
  specialRate: number;
  totalRate: number;
  effectiveRate: number;
  rank: {
    state: number;
    national: number;
  };
  averageTax: number;
  medianHomeValue: number;
}

const stateTaxData = {
  'New Jersey': { avgRate: 2.21, medianHome: 425000 },
  'Illinois': { avgRate: 2.08, medianHome: 245000 },
  'Connecticut': { avgRate: 1.96, medianHome: 310000 },
  'New Hampshire': { avgRate: 1.93, medianHome: 390000 },
  'Vermont': { avgRate: 1.90, medianHome: 295000 },
  'Texas': { avgRate: 1.60, medianHome: 300000 },
  'Wisconsin': { avgRate: 1.53, medianHome: 235000 },
  'Nebraska': { avgRate: 1.49, medianHome: 225000 },
  'Ohio': { avgRate: 1.41, medianHome: 185000 },
  'Pennsylvania': { avgRate: 1.35, medianHome: 225000 },
  'Rhode Island': { avgRate: 1.34, medianHome: 375000 },
  'Iowa': { avgRate: 1.29, medianHome: 185000 },
  'Kansas': { avgRate: 1.29, medianHome: 190000 },
  'New York': { avgRate: 1.23, medianHome: 385000 },
  'Michigan': { avgRate: 1.22, medianHome: 195000 },
  'California': { avgRate: 0.71, medianHome: 600000 },
  'Florida': { avgRate: 0.80, medianHome: 385000 },
  'Arizona': { avgRate: 0.62, medianHome: 420000 },
  'Nevada': { avgRate: 0.53, medianHome: 430000 },
  'Louisiana': { avgRate: 0.52, medianHome: 210000 },
  'Alabama': { avgRate: 0.40, medianHome: 180000 },
  'Hawaii': { avgRate: 0.28, medianHome: 720000 },
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Local Property Tax Rate Finder (by County)',
    description: 'Find and compare local property tax rates by county across the United States. Research county, city, and school district tax rates before buying property',
  };
}

export default function LocalPropertyTaxFinder() {
  const [state, setState] = useState<string>('');
  const [county, setCounty] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TaxRateData[]>([]);
  const [selectedTaxRate, setSelectedTaxRate] = useState<TaxRateData | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [comparisonList, setComparisonList] = useState<TaxRateData[]>([]);

  const searchTaxRates = () => {
    const stateData = stateTaxData[state as keyof typeof stateTaxData];
    if (!stateData) {
      alert('Please select a valid state from the list');
      return;
    }

    // Note: This tool provides sample data for educational purposes
    // For actual tax rates, consult your county tax assessor's office
    const baseRate = stateData.avgRate;
    const results: TaxRateData[] = [
      {
        county: county || 'Sample County A',
        state: state,
        countyRate: 0.42,
        cityRate: city ? 0.58 : 0,
        schoolRate: 1.19,
        specialRate: 0.15,
        totalRate: baseRate,
        effectiveRate: baseRate,
        rank: { state: 25, national: 150 },
        averageTax: Math.round(stateData.medianHome * (baseRate / 100)),
        medianHomeValue: stateData.medianHome,
      },
      {
        county: 'Sample County B',
        state: state,
        countyRate: 0.38,
        cityRate: 0.52,
        schoolRate: 1.05,
        specialRate: 0.12,
        totalRate: baseRate * 0.92,
        effectiveRate: baseRate * 0.92,
        rank: { state: 18, national: 95 },
        averageTax: Math.round(stateData.medianHome * (baseRate * 0.92 / 100)),
        medianHomeValue: stateData.medianHome,
      },
      {
        county: 'Sample County C',
        state: state,
        countyRate: 0.45,
        cityRate: 0.62,
        schoolRate: 1.28,
        specialRate: 0.18,
        totalRate: baseRate * 1.08,
        effectiveRate: baseRate * 1.08,
        rank: { state: 35, national: 210 },
        averageTax: Math.round(stateData.medianHome * (baseRate * 1.08 / 100)),
        medianHomeValue: stateData.medianHome,
      },
    ];

    setSearchResults(results);
    if (results.length > 0) {
      setSelectedTaxRate(results[0]);
    }
  };

  const addToComparison = (rate: TaxRateData) => {
    if (comparisonList.length < 5 && !comparisonList.find(r => r.county === rate.county)) {
      setComparisonList([...comparisonList, rate]);
    }
  };

  const removeFromComparison = (county: string) => {
    setComparisonList(comparisonList.filter(r => r.county !== county));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (rate: number): string => {
    return `${rate.toFixed(2)}%`;
  };

  const getTaxRating = (rate: number): { level: string; color: string } => {
    if (rate < 0.5) return { level: 'Very Low', color: 'bg-green-500' };
    if (rate < 1.0) return { level: 'Low', color: 'bg-green-400' };
    if (rate < 1.5) return { level: 'Moderate', color: 'bg-yellow-500' };
    if (rate < 2.0) return { level: 'High', color: 'bg-orange-500' };
    return { level: 'Very High', color: 'bg-red-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <MapPin className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Property Tax Rate Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and compare property tax rates by county across the United States. Research local tax rates before buying property.
          </p>
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <AlertCircle className="h-4 w-4 inline mr-2" />
              This tool provides sample data for educational purposes. For actual tax rates, consult your county tax assessor's office.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Tax Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="search" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="search">Search</TabsTrigger>
                    <TabsTrigger value="compare">Compare</TabsTrigger>
                    <TabsTrigger value="article">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="search" className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select State</option>
                          {Object.keys(stateTaxData).map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          value={county}
                          onChange={(e) => setCounty(e.target.value)}
                          placeholder="Enter county name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City (Optional)</Label>
                        <Input
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Enter city name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code (Optional)</Label>
                        <Input
                          id="zipCode"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="Enter ZIP code"
                        />
                      </div>
                    </div>

                    <Button onClick={searchTaxRates} className="w-full" size="lg">
                      <Search className="h-5 w-5 mr-2" />
                      Search Tax Rates
                    </Button>

                    {searchResults.length > 0 && (
                      <div className="space-y-4 mt-6">
                        <h3 className="text-lg font-semibold">Search Results</h3>
                        {searchResults.map((result, index) => (
                          <Card key={index} className="bg-white border-2 border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
                            onClick={() => setSelectedTaxRate(result)}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold text-lg">{result.county}, {result.state}</h4>
                                  <p className="text-gray-600">Effective Rate: {formatPercentage(result.effectiveRate)}</p>
                                  <p className="text-sm text-gray-500">Average Tax: {formatCurrency(result.averageTax)}/year</p>
                                </div>
                                <div className="text-right">
                                  <Badge className={`${getTaxRating(result.effectiveRate).color} text-white`}>
                                    {getTaxRating(result.effectiveRate).level}
                                  </Badge>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="mt-2"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      addToComparison(result);
                                    }}
                                  >
                                    Add to Compare
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="compare" className="space-y-4 mt-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                      <p className="text-sm text-blue-700">
                        <Info className="h-4 w-4 inline mr-2" />
                        Select up to 5 counties to compare tax rates side-by-side.
                      </p>
                    </div>

                    {comparisonList.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        No counties added for comparison yet. Search and add counties from the Search tab.
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="p-3 text-left">County</th>
                              <th className="p-3 text-right">Effective Rate</th>
                              <th className="p-3 text-right">Avg Tax/Year</th>
                              <th className="p-3 text-center">Rating</th>
                              <th className="p-3 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {comparisonList.map((item, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-3">{item.county}, {item.state}</td>
                                <td className="p-3 text-right font-semibold">{formatPercentage(item.effectiveRate)}</td>
                                <td className="p-3 text-right">{formatCurrency(item.averageTax)}</td>
                                <td className="p-3 text-center">
                                  <Badge className={`${getTaxRating(item.effectiveRate).color} text-white`}>
                                    {getTaxRating(item.effectiveRate).level}
                                  </Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => removeFromComparison(item.county)}
                                  >
                                    Remove
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6 mt-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">Complete Guide to Local Property Tax Rates</h2>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Insights</h3>
                            <ul className="text-blue-700 space-y-1">
                              <li>• Property tax rates vary dramatically by location</li>
                              <li>• Same state can have 2x-3x variation between counties</li>
                              <li>• Multiple jurisdictions (county, city, school) set rates independently</li>
                              <li>• Research tax rates before buying property to avoid surprises</li>
                              <li>• High tax areas may offer better services and schools</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Understanding Property Tax Rates by Location</h3>
                      <p className="mb-4">
                        Property tax rates are primarily determined at the local level, not by the state government. 
                        This means that two properties of equal value in the same state can have vastly different 
                        tax bills based on their specific county, city, and school district.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">How Local Tax Rates Are Set</h4>
                      <p className="mb-4">
                        Local property tax rates are set through a combination of jurisdictional budgets and assessed 
                        property values:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>County Government:</strong> Sets rates to fund county services, courts, sheriff, and infrastructure</li>
                        <li><strong>City/Municipality:</strong> Adds rates for city services, police, fire, parks, and local improvements</li>
                        <li><strong>School District:</strong> Often the largest component, funding local public schools</li>
                        <li><strong>Special Districts:</strong> Additional rates for water, hospital, library, or community college districts</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">State-by-State Tax Rate Variations</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Highest Tax Rate States</h4>
                      <p className="mb-4">
                        States with the highest average effective property tax rates:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>New Jersey:</strong> 2.21% average - Highest in nation, but excellent schools</li>
                        <li><strong>Illinois:</strong> 2.08% average - High rates especially around Chicago</li>
                        <li><strong>Connecticut:</strong> 1.96% average - Wealthy state with high property values</li>
                        <li><strong>New Hampshire:</strong> 1.93% average - No income tax, relies on property taxes</li>
                        <li><strong>Vermont:</strong> 1.90% average - Rural state with dispersed population</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Lowest Tax Rate States</h4>
                      <p className="mb-4">
                        States with the lowest average effective property tax rates:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Hawaii:</strong> 0.28% average - Lowest in nation, but very high home prices</li>
                        <li><strong>Alabama:</strong> 0.40% average - Low taxes but limited services</li>
                        <li><strong>Louisiana:</strong> 0.52% average - Homestead exemptions reduce burden</li>
                        <li><strong>Nevada:</strong> 0.53% average - No income tax, tourism funds government</li>
                        <li><strong>Arizona:</strong> 0.62% average - Property tax caps limit growth</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Within-County Variations</h3>
                      <p className="mb-4">
                        Even within the same county, tax rates can vary significantly based on:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>City Limits:</strong> Properties inside city limits pay city taxes; those outside do not</li>
                        <li><strong>School Districts:</strong> Districts with higher funding needs charge higher rates</li>
                        <li><strong>Special Districts:</strong> MUD, PID, TIF zones add supplementary taxes</li>
                        <li><strong>Fire Protection:</strong> Some areas have separate fire district taxes</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">How to Research Tax Rates</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Essential Research Steps</h4>
                      <ol className="list-decimal pl-6 mb-4">
                        <li><strong>Identify the exact location</strong> - Get the specific address, not just city/county</li>
                        <li><strong>Check county tax assessor website</strong> - Most have online property lookups</li>
                        <li><strong>Look up recent tax bills</strong> - Historical data shows trends and actual amounts</li>
                        <li><strong>Identify all taxing jurisdictions</strong> - County, city, school, special districts</li>
                        <li><strong>Calculate effective rate</strong> - Divide annual tax by market value</li>
                        <li><strong>Project future taxes</strong> - Account for assessment increases</li>
                      </ol>

                      <h4 className="text-lg font-semibold mb-3">Where to Find Tax Rate Data</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>County Assessor/Auditor:</strong> Official tax rates and assessment ratios</li>
                        <li><strong>Property Listings:</strong> MLS listings often show previous year's taxes</li>
                        <li><strong>Title Companies:</strong> Can provide tax information during due diligence</li>
                        <li><strong>State Revenue Department:</strong> Publishes average rates by county</li>
                        <li><strong>Real Estate Agents:</strong> Local expertise on tax patterns</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Impact on Investment Decisions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">ROI Considerations</h4>
                      <p className="mb-4">
                        Property taxes significantly impact investment returns:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Cash Flow:</strong> High taxes reduce monthly rental profit</li>
                        <li><strong>Cap Rate:</strong> Property taxes are a major operating expense</li>
                        <li><strong>Appreciation:</strong> High-tax areas may appreciate slower</li>
                        <li><strong>Tenant Demand:</strong> Renters prefer areas with good schools (often high-tax)</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Trade-offs to Consider</h4>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <p className="mb-2"><strong>High Tax Areas Often Provide:</strong></p>
                        <ul className="list-disc pl-4">
                          <li>Better public schools</li>
                          <li>More parks and recreation</li>
                          <li>Superior infrastructure</li>
                          <li>Better emergency services</li>
                          <li>Higher property values (appreciation)</li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <p className="mb-2"><strong>Low Tax Areas May Have:</strong></p>
                        <ul className="list-disc pl-4">
                          <li>Lower-rated schools</li>
                          <li>Fewer amenities</li>
                          <li>Delayed infrastructure repairs</li>
                          <li>Limited public services</li>
                          <li>Better immediate cash flow</li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Common Mistakes to Avoid</h3>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
                          <div>
                            <ul className="text-red-700 space-y-2">
                              <li><strong>Assuming state rate applies:</strong> State averages don't reflect local variation</li>
                              <li><strong>Using old tax data:</strong> Rates change annually, use current year data</li>
                              <li><strong>Ignoring special districts:</strong> MUDs, PIDs, TIFs add significant costs</li>
                              <li><strong>Not accounting for reassessment:</strong> New purchases trigger reassessment</li>
                              <li><strong>Forgetting exemptions:</strong> Homestead exemptions lower your bill</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Pro Tips for Tax Rate Research</h3>
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                        <div className="flex">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                          <div>
                            <ul className="text-green-700 space-y-2">
                              <li><strong>Compare similar properties:</strong> Look at actual tax bills for nearby homes</li>
                              <li><strong>Check for pending increases:</strong> Bond elections can raise future rates</li>
                              <li><strong>Understand assessment cycles:</strong> Know when reassessments occur</li>
                              <li><strong>Calculate true effective rate:</strong> Use your expected purchase price, not assessed value</li>
                              <li><strong>Factor in exemptions:</strong> Apply for all eligible exemptions immediately</li>
                              <li><strong>Consider total tax burden:</strong> Include income, sales, and property taxes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
                      <p className="mb-4">
                        Property tax rates are one of the most important factors in real estate investment and home buying 
                        decisions. While low taxes seem attractive, they often come with trade-offs in services and property 
                        values. Research local rates thoroughly, understand all taxing jurisdictions, and factor the total tax 
                        burden into your purchase decision. Remember that a $300,000 home with 2% taxes costs $6,000/year versus 
                        $2,000/year at 0.67% - that's a $333/month difference in carrying costs.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {selectedTaxRate && (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Tax Rate Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{selectedTaxRate.county}, {selectedTaxRate.state}</h3>
                    <Badge className={`${getTaxRating(selectedTaxRate.effectiveRate).color} text-white`}>
                      {getTaxRating(selectedTaxRate.effectiveRate).level}
                    </Badge>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Tax Rate Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>County Rate:</span>
                        <span className="font-semibold">{formatPercentage(selectedTaxRate.countyRate)}</span>
                      </div>
                      {selectedTaxRate.cityRate > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>City Rate:</span>
                          <span className="font-semibold">{formatPercentage(selectedTaxRate.cityRate)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span>School Rate:</span>
                        <span className="font-semibold">{formatPercentage(selectedTaxRate.schoolRate)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Special Districts:</span>
                        <span className="font-semibold">{formatPercentage(selectedTaxRate.specialRate)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-sm">
                        <span className="font-bold">Total Rate:</span>
                        <span className="font-bold text-lg">{formatPercentage(selectedTaxRate.totalRate)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Estimated Annual Tax</h4>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">{formatCurrency(selectedTaxRate.averageTax)}</p>
                      <p className="text-sm text-gray-500 mt-1">Based on median home value</p>
                      <p className="text-xs text-gray-400">{formatCurrency(selectedTaxRate.medianHomeValue)}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Rankings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>State Rank:</span>
                        <span className="font-semibold">#{selectedTaxRate.rank.state} of 150</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>National Rank:</span>
                        <span className="font-semibold">#{selectedTaxRate.rank.national} of 3,000+</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => addToComparison(selectedTaxRate)} 
                    className="w-full"
                    variant="outline"
                  >
                    Add to Comparison
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Quick State Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p><strong>Top 5 Highest Tax States:</strong></p>
                  <ol className="list-decimal pl-4 text-xs space-y-1">
                    <li>New Jersey (2.21%)</li>
                    <li>Illinois (2.08%)</li>
                    <li>Connecticut (1.96%)</li>
                    <li>New Hampshire (1.93%)</li>
                    <li>Vermont (1.90%)</li>
                  </ol>
                  <p className="mt-4"><strong>Top 5 Lowest Tax States:</strong></p>
                  <ol className="list-decimal pl-4 text-xs space-y-1">
                    <li>Hawaii (0.28%)</li>
                    <li>Alabama (0.40%)</li>
                    <li>Louisiana (0.52%)</li>
                    <li>Nevada (0.53%)</li>
                    <li>Arizona (0.62%)</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
