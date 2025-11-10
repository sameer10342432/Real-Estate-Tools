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
import { Calculator, Home, DollarSign, FileText, TrendingUp, AlertCircle, CheckCircle, Info, Building, BookOpen } from 'lucide-react';

interface PropertyTaxCalculation {
  annualPropertyTax: number;
  monthlyPropertyTax: number;
  effectiveTaxRate: number;
  taxPerSquareFoot: number;
  totalExemptions: number;
  taxableValue: number;
  breakdown: {
    county: number;
    city: number;
    school: number;
    special: number;
  };
  comparison: {
    stateAverage: number;
    nationalAverage: number;
    percentageOfIncome: number;
  };
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Tax Estimator',
    description: 'Estimate annual property taxes for any location. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyTaxEstimator() {
  // Property Information
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [assessedValue, setAssessedValue] = useState<number>(400000);
  const [assessmentRatio, setAssessmentRatio] = useState<number>(80);
  const [propertyType, setPropertyType] = useState<string>('residential');
  const [squareFootage, setSquareFootage] = useState<number>(2000);
  const [yearBuilt, setYearBuilt] = useState<number>(2010);

  // Location Information
  const [state, setState] = useState<string>('Texas');
  const [county, setCounty] = useState<string>('Harris County');
  const [city, setCity] = useState<string>('Houston');
  const [zipCode, setZipCode] = useState<string>('77001');

  // Tax Rates
  const [countyRate, setCountyRate] = useState<number>(0.42);
  const [cityRate, setCityRate] = useState<number>(0.58);
  const [schoolRate, setSchoolRate] = useState<number>(1.19);
  const [specialRate, setSpecialRate] = useState<number>(0.15);

  // Exemptions
  const [homesteadExemption, setHomesteadExemption] = useState<number>(40000);
  const [seniorExemption, setSeniorExemption] = useState<number>(0);
  const [veteranExemption, setVeteranExemption] = useState<number>(0);
  const [disabilityExemption, setDisabilityExemption] = useState<number>(0);
  const [otherExemptions, setOtherExemptions] = useState<number>(0);

  // Additional Information
  const [annualIncome, setAnnualIncome] = useState<number>(100000);
  const [isOwnerOccupied, setIsOwnerOccupied] = useState<boolean>(true);

  const [calculation, setCalculation] = useState<PropertyTaxCalculation | null>(null);

  const calculatePropertyTax = () => {
    // Calculate total exemptions
    const totalExemptions = homesteadExemption + seniorExemption + veteranExemption + disabilityExemption + otherExemptions;
    
    // Calculate taxable value
    const taxableValue = Math.max(0, assessedValue - totalExemptions);
    
    // Calculate tax by jurisdiction (rates are in percentage, convert to decimal and per $100)
    const countyTax = (taxableValue * countyRate) / 100;
    const cityTax = (taxableValue * cityRate) / 100;
    const schoolTax = (taxableValue * schoolRate) / 100;
    const specialTax = (taxableValue * specialRate) / 100;
    
    // Calculate total annual tax
    const annualPropertyTax = countyTax + cityTax + schoolTax + specialTax;
    const monthlyPropertyTax = annualPropertyTax / 12;
    
    // Calculate effective tax rate
    const effectiveTaxRate = (annualPropertyTax / propertyValue) * 100;
    
    // Calculate tax per square foot
    const taxPerSquareFoot = annualPropertyTax / squareFootage;
    
    // State and national averages (example values)
    const stateAverage = propertyValue * 0.0183; // Texas average ~1.83%
    const nationalAverage = propertyValue * 0.0110; // National average ~1.10%
    
    // Percentage of income
    const percentageOfIncome = (annualPropertyTax / annualIncome) * 100;

    const result: PropertyTaxCalculation = {
      annualPropertyTax,
      monthlyPropertyTax,
      effectiveTaxRate,
      taxPerSquareFoot,
      totalExemptions,
      taxableValue,
      breakdown: {
        county: countyTax,
        city: cityTax,
        school: schoolTax,
        special: specialTax,
      },
      comparison: {
        stateAverage,
        nationalAverage,
        percentageOfIncome,
      },
    };

    setCalculation(result);
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

  const getTaxBurdenLevel = (effectiveRate: number): { level: string; color: string; description: string } => {
    if (effectiveRate < 0.5) return { level: 'Very Low', color: 'bg-green-500', description: 'Excellent tax burden' };
    if (effectiveRate < 1.0) return { level: 'Low', color: 'bg-green-400', description: 'Good tax burden' };
    if (effectiveRate < 1.5) return { level: 'Moderate', color: 'bg-yellow-500', description: 'Average tax burden' };
    if (effectiveRate < 2.0) return { level: 'High', color: 'bg-orange-500', description: 'Above average tax burden' };
    return { level: 'Very High', color: 'bg-red-500', description: 'High tax burden' };
  };

  const getRecommendations = (): string[] => {
    const recommendations: string[] = [];
    
    if (calculation) {
      if (calculation.effectiveTaxRate > 2.0) {
        recommendations.push('Consider exploring available exemptions to reduce your tax burden');
        recommendations.push('Review your property assessment for accuracy');
      }
      
      if (calculation.totalExemptions === 0 && isOwnerOccupied) {
        recommendations.push('Apply for homestead exemption if you haven\'t already');
      }
      
      if (calculation.comparison.percentageOfIncome > 3) {
        recommendations.push('Property taxes exceed 3% of income - consider budgeting carefully');
      }
      
      if (calculation.effectiveTaxRate < calculation.comparison.stateAverage / propertyValue * 100) {
        recommendations.push('Your effective tax rate is below state average - good value');
      }
      
      recommendations.push('Review tax rates annually as they can change');
      recommendations.push('Consider the total cost of ownership including taxes when buying');
    }
    
    return recommendations;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Tax Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your annual property taxes with our comprehensive estimator. 
            Get accurate estimates based on assessed value, tax rates, and available exemptions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Tax Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                    <TabsTrigger value="rates">Tax Rates</TabsTrigger>
                    <TabsTrigger value="exemptions">Exemptions</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Article
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyValue">Property Market Value</Label>
                        <Input
                          id="propertyValue"
                          type="number"
                          value={propertyValue}
                          onChange={(e) => setPropertyValue(Number(e.target.value))}
                          placeholder="500000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="assessedValue">Assessed Value</Label>
                        <Input
                          id="assessedValue"
                          type="number"
                          value={assessedValue}
                          onChange={(e) => setAssessedValue(Number(e.target.value))}
                          placeholder="400000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="assessmentRatio">Assessment Ratio (%)</Label>
                        <Input
                          id="assessmentRatio"
                          type="number"
                          value={assessmentRatio}
                          onChange={(e) => setAssessmentRatio(Number(e.target.value))}
                          placeholder="80"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <select
                          id="propertyType"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="agricultural">Agricultural</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="squareFootage">Square Footage</Label>
                        <Input
                          id="squareFootage"
                          type="number"
                          value={squareFootage}
                          onChange={(e) => setSquareFootage(Number(e.target.value))}
                          placeholder="2000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearBuilt">Year Built</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={yearBuilt}
                          onChange={(e) => setYearBuilt(Number(e.target.value))}
                          placeholder="2010"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Texas"
                        />
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          value={county}
                          onChange={(e) => setCounty(e.target.value)}
                          placeholder="Harris County"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Houston"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="77001"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="ownerOccupied"
                        checked={isOwnerOccupied}
                        onChange={(e) => setIsOwnerOccupied(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="ownerOccupied">Owner-occupied property</Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="rates" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="countyRate">County Tax Rate (%)</Label>
                        <Input
                          id="countyRate"
                          type="number"
                          step="0.01"
                          value={countyRate}
                          onChange={(e) => setCountyRate(Number(e.target.value))}
                          placeholder="0.42"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cityRate">City Tax Rate (%)</Label>
                        <Input
                          id="cityRate"
                          type="number"
                          step="0.01"
                          value={cityRate}
                          onChange={(e) => setCityRate(Number(e.target.value))}
                          placeholder="0.58"
                        />
                      </div>
                      <div>
                        <Label htmlFor="schoolRate">School District Rate (%)</Label>
                        <Input
                          id="schoolRate"
                          type="number"
                          step="0.01"
                          value={schoolRate}
                          onChange={(e) => setSchoolRate(Number(e.target.value))}
                          placeholder="1.19"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialRate">Special Districts Rate (%)</Label>
                        <Input
                          id="specialRate"
                          type="number"
                          step="0.01"
                          value={specialRate}
                          onChange={(e) => setSpecialRate(Number(e.target.value))}
                          placeholder="0.15"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="exemptions" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="homesteadExemption">Homestead Exemption</Label>
                        <Input
                          id="homesteadExemption"
                          type="number"
                          value={homesteadExemption}
                          onChange={(e) => setHomesteadExemption(Number(e.target.value))}
                          placeholder="40000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="seniorExemption">Senior Exemption</Label>
                        <Input
                          id="seniorExemption"
                          type="number"
                          value={seniorExemption}
                          onChange={(e) => setSeniorExemption(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="veteranExemption">Veteran Exemption</Label>
                        <Input
                          id="veteranExemption"
                          type="number"
                          value={veteranExemption}
                          onChange={(e) => setVeteranExemption(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="disabilityExemption">Disability Exemption</Label>
                        <Input
                          id="disabilityExemption"
                          type="number"
                          value={disabilityExemption}
                          onChange={(e) => setDisabilityExemption(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="otherExemptions">Other Exemptions</Label>
                        <Input
                          id="otherExemptions"
                          type="number"
                          value={otherExemptions}
                          onChange={(e) => setOtherExemptions(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="annualIncome">Annual Income (for comparison)</Label>
                        <Input
                          id="annualIncome"
                          type="number"
                          value={annualIncome}
                          onChange={(e) => setAnnualIncome(Number(e.target.value))}
                          placeholder="100000"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">The Complete Guide to Property Tax Estimation</h2>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Takeaways</h3>
                            <ul className="text-blue-700 space-y-1">
                              <li>• Property taxes are based on assessed value, not market value</li>
                              <li>• Tax rates vary significantly by location and jurisdiction</li>
                              <li>• Exemptions can substantially reduce your tax burden</li>
                              <li>• Assessment appeals can lower your taxes if successful</li>
                              <li>• Property taxes directly impact investment returns</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Understanding Property Tax Basics</h3>
                      <p className="mb-4">
                        Property taxes are local taxes levied on real estate to fund public services like schools, 
                        police, fire departments, and infrastructure. Unlike federal income taxes, property taxes 
                        are administered at the local level, resulting in significant variation across different 
                        areas.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">How Property Taxes Are Calculated</h4>
                      <p className="mb-4">
                        The basic formula for property tax calculation is:
                      </p>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono">
                        Property Tax = (Assessed Value - Exemptions) × Tax Rate
                      </div>
                      <p className="mb-4">
                        This simple formula involves several complex components that can significantly 
                        impact your final tax bill.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Assessment Process</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Market Value vs. Assessed Value</h4>
                      <p className="mb-4">
                        <strong>Market Value</strong> is what your property would sell for in the current market. 
                        <strong>Assessed Value</strong> is the value assigned by the tax assessor for tax purposes. 
                        In many jurisdictions, assessed value is a percentage of market value, typically ranging 
                        from 70% to 100%.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Assessment Methods</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Sales Comparison Approach:</strong> Comparing your property to similar recently sold properties</li>
                        <li><strong>Cost Approach:</strong> Calculating replacement cost minus depreciation</li>
                        <li><strong>Income Approach:</strong> Based on rental income potential (for investment properties)</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Assessment Frequency</h4>
                      <p className="mb-4">
                        Properties are reassessed periodically, typically every 1-5 years depending on local 
                        regulations. Some areas conduct annual assessments, while others may reassess less 
                        frequently. Market conditions, property improvements, and neighborhood changes can 
                        trigger reassessments.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Tax Rates and Jurisdictions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Multiple Tax Authorities</h4>
                      <p className="mb-4">
                        Your property tax bill typically includes taxes from multiple jurisdictions:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>County Taxes:</strong> Fund county services, courts, and administration</li>
                        <li><strong>City/Municipal Taxes:</strong> Support local services, police, and infrastructure</li>
                        <li><strong>School District Taxes:</strong> Often the largest component, funding public education</li>
                        <li><strong>Special Districts:</strong> Fire districts, water districts, library districts, etc.</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Millage Rates</h4>
                      <p className="mb-4">
                        Tax rates are often expressed in "mills," where one mill equals $1 of tax per $1,000 
                        of assessed value. For example, a 25-mill rate means $25 in taxes per $1,000 of 
                        assessed value, or 2.5%.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Property Tax Exemptions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Homestead Exemptions</h4>
                      <p className="mb-4">
                        Most states offer homestead exemptions for primary residences, reducing the taxable 
                        value by a fixed amount or percentage. These exemptions can save hundreds or thousands 
                        of dollars annually and often must be applied for separately.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Other Common Exemptions</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Senior Citizen Exemptions:</strong> Additional reductions for elderly homeowners</li>
                        <li><strong>Veteran Exemptions:</strong> Benefits for military veterans and disabled veterans</li>
                        <li><strong>Disability Exemptions:</strong> Reductions for disabled property owners</li>
                        <li><strong>Agricultural Exemptions:</strong> Lower rates for qualifying agricultural land</li>
                        <li><strong>Historic Property Exemptions:</strong> Incentives for preserving historic buildings</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Geographic Variations</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">State Differences</h4>
                      <p className="mb-4">
                        Property tax systems vary dramatically by state:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>High-Tax States:</strong> New Jersey, Illinois, New Hampshire (rates often 2-3%)</li>
                        <li><strong>Low-Tax States:</strong> Hawaii, Alabama, Louisiana (rates often under 1%)</li>
                        <li><strong>No State Income Tax States:</strong> Often rely more heavily on property taxes</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Local Variations</h4>
                      <p className="mb-4">
                        Even within states, tax rates can vary significantly between counties and cities. 
                        Urban areas may have higher rates but better services, while rural areas might 
                        have lower rates but fewer amenities.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Investment Property Considerations</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Impact on Cash Flow</h4>
                      <p className="mb-4">
                        For rental properties, property taxes directly reduce net operating income. High 
                        property tax areas require higher rents to maintain profitability, which may 
                        limit tenant demand.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Tax Deductibility</h4>
                      <p className="mb-4">
                        Property taxes on investment properties are fully deductible as business expenses, 
                        unlike personal residences which are subject to SALT deduction limits.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Assessment Appeals</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">When to Appeal</h4>
                      <p className="mb-4">
                        Consider appealing your assessment if:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Your assessed value exceeds recent comparable sales</li>
                        <li>Your property has defects not reflected in the assessment</li>
                        <li>The assessment increased significantly without improvements</li>
                        <li>Neighborhood values have declined</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Appeal Process</h4>
                      <p className="mb-4">
                        The appeal process typically involves:
                      </p>
                      <ol className="list-decimal pl-6 mb-4">
                        <li>Filing an appeal within the specified timeframe</li>
                        <li>Gathering evidence (comparable sales, property condition reports)</li>
                        <li>Presenting your case to the assessment review board</li>
                        <li>Receiving a decision and potential reassessment</li>
                      </ol>

                      <h3 className="text-xl font-semibold mb-4">Planning and Budgeting</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Annual Tax Planning</h4>
                      <p className="mb-4">
                        Property taxes are typically due annually or semi-annually. Plan ahead by:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Setting aside monthly funds for tax payments</li>
                        <li>Using mortgage escrow accounts for automatic savings</li>
                        <li>Monitoring assessment notices and due dates</li>
                        <li>Planning for potential rate increases</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Home Buying Considerations</h4>
                      <p className="mb-4">
                        When purchasing property, factor in property taxes by:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Researching local tax rates and trends</li>
                        <li>Understanding available exemptions</li>
                        <li>Considering the impact on monthly housing costs</li>
                        <li>Evaluating services provided for tax dollars paid</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Common Mistakes to Avoid</h3>
                      
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
                          <div>
                            <h4 className="text-lg font-semibold text-red-800 mb-2">Avoid These Pitfalls</h4>
                            <ul className="text-red-700 space-y-2">
                              <li>• Not applying for available exemptions</li>
                              <li>• Ignoring assessment notices and deadlines</li>
                              <li>• Failing to appeal obviously incorrect assessments</li>
                              <li>• Not budgeting for tax increases</li>
                              <li>• Overlooking special assessments for improvements</li>
                              <li>• Assuming tax rates will remain constant</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Future Trends</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Technology and Assessment</h4>
                      <p className="mb-4">
                        Modern assessment practices increasingly use automated valuation models (AVMs), 
                        satellite imagery, and big data analytics to improve accuracy and efficiency. 
                        This may lead to more frequent reassessments and better market value tracking.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Policy Changes</h4>
                      <p className="mb-4">
                        Property tax policy continues to evolve, with ongoing debates about assessment 
                        caps, exemption eligibility, and the balance between residential and commercial 
                        tax burdens. Stay informed about local policy changes that may affect your taxes.
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
                        <div className="flex">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                          <div>
                            <h4 className="text-lg font-semibold text-green-800 mb-2">Best Practices</h4>
                            <ul className="text-green-700 space-y-1">
                              <li>• Review your assessment annually for accuracy</li>
                              <li>• Apply for all eligible exemptions</li>
                              <li>• Keep detailed records of property improvements</li>
                              <li>• Budget for property taxes in your financial planning</li>
                              <li>• Consider tax implications when buying or improving property</li>
                              <li>• Stay informed about local tax policy changes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4 mt-8">Conclusion</h3>
                      <p className="mb-4">
                        Property tax estimation requires understanding multiple factors including assessment 
                        methods, local tax rates, available exemptions, and jurisdiction-specific rules. 
                        By staying informed and proactive about your property taxes, you can ensure you're 
                        paying the correct amount while taking advantage of all available savings opportunities.
                      </p>
                      <p className="mb-4">
                        Whether you're a homeowner looking to budget accurately or an investor analyzing 
                        potential returns, understanding property taxes is essential for making informed 
                        real estate decisions. Use this calculator and guide to estimate your property 
                        taxes and plan accordingly for this significant ongoing expense.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button onClick={calculatePropertyTax} className="w-full" size="lg">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Property Tax
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {calculation && (
              <>
                {/* Tax Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Tax Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {formatCurrency(calculation.annualPropertyTax)}
                      </div>
                      <div className="text-sm text-gray-600">Annual Property Tax</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Payment:</span>
                        <span className="font-semibold">{formatCurrency(calculation.monthlyPropertyTax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Effective Tax Rate:</span>
                        <span className="font-semibold">{formatPercentage(calculation.effectiveTaxRate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax per Sq Ft:</span>
                        <span className="font-semibold">{formatCurrency(calculation.taxPerSquareFoot)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxable Value:</span>
                        <span className="font-semibold">{formatCurrency(calculation.taxableValue)}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      {(() => {
                        const burden = getTaxBurdenLevel(calculation.effectiveTaxRate);
                        return (
                          <Badge className={`${burden.color} text-white`}>
                            {burden.level} - {burden.description}
                          </Badge>
                        );
                      })()}
                    </div>
                  </CardContent>
                </Card>

                {/* Tax Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Tax Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>County Tax:</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.county)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>City Tax:</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.city)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>School District:</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.school)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Special Districts:</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.special)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total Exemptions:</span>
                      <span className="text-green-600">-{formatCurrency(calculation.totalExemptions)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Comparison */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Your Tax:</span>
                      <span className="font-semibold">{formatCurrency(calculation.annualPropertyTax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State Average:</span>
                      <span className="font-semibold">{formatCurrency(calculation.comparison.stateAverage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>National Average:</span>
                      <span className="font-semibold">{formatCurrency(calculation.comparison.nationalAverage)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>% of Income:</span>
                      <span className="font-semibold">{formatPercentage(calculation.comparison.percentageOfIncome)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {getRecommendations().map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Understanding Property Taxes: A Comprehensive Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What Are Property Taxes?</h3>
                  <p className="mb-4">
                    Property taxes are annual taxes levied by local governments on real estate properties. 
                    These taxes fund essential public services including schools, police, fire departments, 
                    roads, and other municipal services.
                  </p>

                  <h4 className="text-lg font-semibold mb-2">How Property Taxes Are Calculated</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>Assessed Value:</strong> The value assigned to your property by the local assessor</li>
                    <li><strong>Assessment Ratio:</strong> The percentage of market value used for taxation</li>
                    <li><strong>Tax Rate:</strong> The millage rate applied to the taxable value</li>
                    <li><strong>Exemptions:</strong> Deductions that reduce your taxable value</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2">Types of Tax Jurisdictions</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>County:</strong> Funds county services and infrastructure</li>
                    <li><strong>City/Municipality:</strong> Supports local city services</li>
                    <li><strong>School District:</strong> Finances public education</li>
                    <li><strong>Special Districts:</strong> Funds specific services like water, fire, or transit</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2">Common Exemptions</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>Homestead:</strong> Primary residence exemption</li>
                    <li><strong>Senior:</strong> Age-based exemptions (typically 65+)</li>
                    <li><strong>Veteran:</strong> Military service exemptions</li>
                    <li><strong>Disability:</strong> Exemptions for disabled individuals</li>
                    <li><strong>Agricultural:</strong> Farm and ranch land exemptions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Property Tax Planning Strategies</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Assessment Appeals</h4>
                  <p className="mb-4">
                    If you believe your property is over-assessed, you can appeal the valuation. 
                    Research comparable sales, property conditions, and market trends to support your case.
                  </p>

                  <h4 className="text-lg font-semibold mb-2">Maximizing Exemptions</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Apply for all eligible exemptions</li>
                    <li>File homestead exemption for primary residence</li>
                    <li>Check for senior, veteran, or disability exemptions</li>
                    <li>Consider agricultural exemptions for qualifying land</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2">Tax Rate Considerations</h4>
                  <p className="mb-4">
                    Property tax rates vary significantly by location. When buying property, 
                    research local tax rates and consider the long-term impact on your budget.
                  </p>

                  <h4 className="text-lg font-semibold mb-2">Budgeting for Property Taxes</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Set aside monthly funds for annual tax payments</li>
                    <li>Consider escrow accounts for mortgage payments</li>
                    <li>Plan for potential rate increases</li>
                    <li>Factor taxes into investment property analysis</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2">Investment Considerations</h4>
                  <p className="mb-4">
                    For investment properties, property taxes directly impact cash flow and returns. 
                    High tax areas may offer better services but reduce profitability. Consider the 
                    total cost of ownership when evaluating investment opportunities.
                  </p>

                  <h4 className="text-lg font-semibold mb-2">State Variations</h4>
                  <p className="mb-4">
                    Property tax systems vary by state. Some states have high rates but offer 
                    significant exemptions, while others have lower rates with fewer deductions. 
                    Research your specific state's tax structure and regulations.
                  </p>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">When are property taxes due?</h4>
                    <p className="mb-4">
                      Due dates vary by jurisdiction. Most areas have annual or semi-annual payments, 
                      typically due in the fall or winter months.
                    </p>

                    <h4 className="font-semibold mb-2">Can property taxes be deducted?</h4>
                    <p className="mb-4">
                      Yes, property taxes are generally deductible on federal income taxes, 
                      subject to the SALT (State and Local Tax) deduction limits.
                    </p>

                    <h4 className="font-semibold mb-2">What happens if I don't pay?</h4>
                    <p className="mb-4">
                      Unpaid property taxes can result in penalties, interest, liens, and 
                      eventually foreclosure. Contact your tax office if you're having difficulty paying.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">How often are properties reassessed?</h4>
                    <p className="mb-4">
                      Reassessment frequency varies by jurisdiction, typically every 1-6 years. 
                      Some areas reassess annually, while others do it less frequently.
                    </p>

                    <h4 className="font-semibold mb-2">Do improvements increase taxes?</h4>
                    <p className="mb-4">
                      Yes, improvements that increase property value typically increase taxes. 
                      However, some jurisdictions offer temporary exemptions for certain improvements.
                    </p>

                    <h4 className="font-semibold mb-2">Can I pay taxes monthly?</h4>
                    <p className="mb-4">
                      Many mortgage lenders offer escrow accounts that collect monthly payments 
                      for taxes and insurance, then pay them when due.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}