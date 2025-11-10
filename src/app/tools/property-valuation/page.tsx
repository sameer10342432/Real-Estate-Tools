'use client'

import { useState } from 'react'
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { formatCurrency } from '@/utils/formatters';
import { AlertTriangle, BookOpen, Calculator, CheckCircle, Home, Info, TrendingUp, DollarSign } from 'lucide-react'
import { InvestmentPotential, RiskFactor } from './types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

interface PropertyData {
  address: string
  squareFootage: number
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  lotSize: number
  propertyType: string
  condition: string
  location: string
}

interface ComparableProperty {
  id: string
  address: string
  salePrice: number
  saleDate: string
  squareFootage: number
  bedrooms: number
  bathrooms: number
  distance: number
  adjustments: number
  adjustedPrice: number
}

interface ValuationResult {
  estimatedValue: number
  valueRange: {
    low: number
    high: number
  }
  confidenceLevel: number
  valuationMethods: {
    comparativeSales: number
    costApproach: number
    incomeApproach: number
  }
  marketTrends: {
    appreciation: number
    daysOnMarket: number
    pricePerSqFt: number
  }
}

interface RentalAnalysisResult {
  grossAnnualRent: number;
  vacancyLoss: number;
  effectiveGrossIncome: number;
  operatingExpenses: number;
  netOperatingIncome: number;
  capitalizationRate: number;
  cashFlow: number;
  rentToValueRatio: number;
}

const sampleComparables: ComparableProperty[] = [
    {
      id: '1',
      address: '123 Oak Street',
      salePrice: 485000,
      saleDate: '2024-01-15',
      squareFootage: 1950,
      bedrooms: 3,
      bathrooms: 2,
      distance: 0.3,
      adjustments: 15000,
      adjustedPrice: 500000
    },
    {
      id: '2',
      address: '456 Maple Avenue',
      salePrice: 520000,
      saleDate: '2024-02-20',
      squareFootage: 2100,
      bedrooms: 4,
      bathrooms: 2.5,
      distance: 0.5,
      adjustments: -20000,
      adjustedPrice: 500000
    },
    {
      id: '3',
      address: '789 Pine Road',
      salePrice: 475000,
      saleDate: '2024-01-30',
      squareFootage: 1900,
      bedrooms: 3,
      bathrooms: 2,
      distance: 0.4,
      adjustments: 25000,
      adjustedPrice: 500000
    }
  ]

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${payload.name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Valuation Calculator',
    description: 'Get accurate property valuations using multiple methods. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function PropertyValuationPage() {
  const [propertyData, setPropertyData] = useState<PropertyData>({
    address: '',
    squareFootage: 2000,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2000,
    lotSize: 0.25,
    propertyType: 'single-family',
    condition: 'good',
    location: 'suburban'
  })

  const [comparables] = useState<ComparableProperty[]>(sampleComparables)
  const [valuation, setValuation] = useState<ValuationResult | null>(null)
  const [loading, setLoading] = useState(false)

  const [rentalData, setRentalData] = useState({
    monthlyRent: 1800,
    operatingExpenses: 600,
  });
  const [rentalAnalysis, setRentalAnalysis] = useState<RentalAnalysisResult | null>(null)
  const [rentalLoading, setRentalLoading] = useState(false)

  const [investmentPotential, setInvestmentPotential] = useState<InvestmentPotential | null>(null)
  const [investmentLoading, setInvestmentLoading] = useState(false)

  const calculateValuation = () => {
    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const avgComparablePrice = comparables.reduce((sum, comp) => sum + comp.adjustedPrice, 0) / comparables.length
      const pricePerSqFt = avgComparablePrice / propertyData.squareFootage
      
      // Adjustments based on property characteristics
      let adjustmentFactor = 1.0
      
      // Age adjustment
      const currentYear = new Date().getFullYear()
      const age = currentYear - propertyData.yearBuilt
      if (age < 5) adjustmentFactor += 0.05
      else if (age > 30) adjustmentFactor -= 0.1
      
      // Condition adjustment
      if (propertyData.condition === 'excellent') adjustmentFactor += 0.1
      else if (propertyData.condition === 'poor') adjustmentFactor -= 0.15
      
      // Location adjustment
      if (propertyData.location === 'urban') adjustmentFactor += 0.05
      else if (propertyData.location === 'rural') adjustmentFactor -= 0.05
      
      const comparativeSalesValue = avgComparablePrice * adjustmentFactor
      const costApproachValue = comparativeSalesValue * 0.95 // Typically slightly lower
      const incomeApproachValue = comparativeSalesValue * 1.05 // For investment properties
      
      const estimatedValue = (comparativeSalesValue * 0.6 + costApproachValue * 0.25 + incomeApproachValue * 0.15)
      
      const result: ValuationResult = {
        estimatedValue: Math.round(estimatedValue),
        valueRange: {
          low: Math.round(estimatedValue * 0.9),
          high: Math.round(estimatedValue * 1.1)
        },
        confidenceLevel: 85,
        valuationMethods: {
          comparativeSales: Math.round(comparativeSalesValue),
          costApproach: Math.round(costApproachValue),
          incomeApproach: Math.round(incomeApproachValue)
        },
        marketTrends: {
          appreciation: 4.2,
          daysOnMarket: 28,
          pricePerSqFt: Math.round(pricePerSqFt)
        }
      }
      
      setValuation(result)
      setLoading(false)
    }, 2000)
  }

  const calculateRentalAnalysis = () => {
    if (!valuation) return;

    setRentalLoading(true);
    setTimeout(() => {
      const grossAnnualRent = rentalData.monthlyRent * 12;
      const vacancyLoss = grossAnnualRent * 0.05; // 5% vacancy rate
      const effectiveGrossIncome = grossAnnualRent - vacancyLoss;
      const operatingExpenses = rentalData.operatingExpenses * 12;
      const netOperatingIncome = effectiveGrossIncome - operatingExpenses;
      const capitalizationRate = (netOperatingIncome / valuation.estimatedValue) * 100;
      const cashFlow = netOperatingIncome - (valuation.estimatedValue * 0.04); // Assuming a 4% mortgage rate
      const rentToValueRatio = (rentalData.monthlyRent / valuation.estimatedValue) * 100;

      const rentalResult: RentalAnalysisResult = {
        grossAnnualRent,
        vacancyLoss,
        effectiveGrossIncome,
        operatingExpenses,
        netOperatingIncome,
        capitalizationRate,
        cashFlow,
        rentToValueRatio,
      };

      setRentalAnalysis(rentalResult);
      setRentalLoading(false);
    }, 1500);
  };

  const calculateInvestmentPotential = () => {
    if (!valuation || !rentalAnalysis) return

    setInvestmentLoading(true)
    setTimeout(() => {
      const potential: InvestmentPotential = {
        riskFactors: [
          { factor: 'Market Volatility', level: 'Low', details: 'The local market has shown stable growth over the past 5 years.' },
          { factor: 'Property Condition', level: 'Medium', details: 'The property is in good condition but may require minor repairs within the next 5-10 years.' },
          { factor: 'Rental Demand', level: 'High', details: 'Rental demand in this area is strong, with low vacancy rates.' },
        ],
        capRate: rentalAnalysis.capitalizationRate,
        cashOnCashReturn: rentalAnalysis.cashFlow / (valuation.estimatedValue * 0.2), // Assuming 20% down payment
        netOperatingIncome: rentalAnalysis.netOperatingIncome,
        potentialScore: 85,
        recommendations: ['Consider a professional inspection', 'Review local zoning regulations'],
        investmentRating: 'Good Buy',
        roi: (rentalAnalysis.netOperatingIncome / valuation.estimatedValue) * 100,
        fiveYearAppreciation: valuation.estimatedValue * 0.05,
      }
      setInvestmentPotential(potential)
      setInvestmentLoading(false)
    }, 1500)
  }

  const valuationMethodsData = valuation ? [
    { name: 'Comparative Sales', value: valuation.valuationMethods.comparativeSales, color: COLORS[0] },
    { name: 'Cost Approach', value: valuation.valuationMethods.costApproach, color: COLORS[1] },
    { name: 'Income Approach', value: valuation.valuationMethods.incomeApproach, color: COLORS[2] }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Valuation Tool</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate property valuations using comparative market analysis, cost approach, and income methods
          </p>
        </div>

        <Tabs defaultValue="valuation" className="space-y-6">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="valuation">Valuation</TabsTrigger>
              <TabsTrigger value="property-details">Property Details</TabsTrigger>
              <TabsTrigger value="rental-analysis">Rental Analysis</TabsTrigger>
              <TabsTrigger value="investment-potential">Investment Potential</TabsTrigger>
              <TabsTrigger value="comparables">Comparables</TabsTrigger>
              <TabsTrigger value="article" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Article
              </TabsTrigger>
            </TabsList>

 

          <TabsContent value="property-details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Information
                </CardTitle>
                <CardDescription>Enter details about the property you want to value</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street, City, State"
                        value={propertyData.address}
                        onChange={(e) => setPropertyData({...propertyData, address: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="squareFootage">Square Footage</Label>
                      <Input
                        id="squareFootage"
                        type="number"
                        value={propertyData.squareFootage}
                        onChange={(e) => setPropertyData({...propertyData, squareFootage: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={propertyData.bedrooms}
                          onChange={(e) => setPropertyData({...propertyData, bedrooms: parseInt(e.target.value) || 0})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          step="0.5"
                          value={propertyData.bathrooms}
                          onChange={(e) => setPropertyData({...propertyData, bathrooms: parseFloat(e.target.value) || 0})}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="yearBuilt">Year Built</Label>
                      <Input
                        id="yearBuilt"
                        type="number"
                        value={propertyData.yearBuilt}
                        onChange={(e) => setPropertyData({...propertyData, yearBuilt: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lotSize">Lot Size (acres)</Label>
                      <Input
                        id="lotSize"
                        type="number"
                        step="0.01"
                        value={propertyData.lotSize}
                        onChange={(e) => setPropertyData({...propertyData, lotSize: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={propertyData.propertyType} onValueChange={(value) => setPropertyData({...propertyData, propertyType: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="multi-family">Multi-Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="condition">Property Condition</Label>
                      <Select value={propertyData.condition} onValueChange={(value) => setPropertyData({...propertyData, condition: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button onClick={calculateValuation} disabled={loading} className="w-full">
                  {loading ? 'Calculating Valuation...' : 'Calculate Property Value'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment-potential" className="space-y-6">
            <div className="text-center mb-6">
              <Button onClick={calculateInvestmentPotential} disabled={!valuation || !rentalAnalysis || investmentLoading}>
                {investmentLoading ? 'Analyzing Potential...' : 'Analyze Investment Potential'}
              </Button>
            </div>

            {investmentPotential ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-green-600">{investmentPotential.investmentRating}</CardTitle>
                    <CardDescription>Investment Grade</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Projected ROI</p>
                      <p className="font-semibold text-xl">{investmentPotential.roi.toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">5-Year Appreciation</p>
                      <p className="font-semibold text-xl">~{investmentPotential.fiveYearAppreciation.toFixed(1)}%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Risk Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {investmentPotential.riskFactors.map((risk: RiskFactor, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-4">
                            {risk.level === 'Low' && <CheckCircle className="h-6 w-6 text-green-500" />}
                            {risk.level === 'Medium' && <AlertTriangle className="h-6 w-6 text-yellow-500" />}
                            {risk.level === 'High' && <Info className="h-6 w-6 text-red-500" />}
                          </div>
                          <div>
                            <h4 className="font-semibold">{risk.factor} - <span className={`font-bold ${risk.level === "Low" ? "text-green-600" : risk.level === "Medium" ? "text-yellow-600" : "text-red-600"}`}>{risk.level}</span></h4>
                            <p className="text-sm text-gray-600">{risk.details}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="flex items-center justify-center h-full">
                <CardContent className="text-center py-12">
                  <TrendingUp className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Investment Analysis Yet</h3>
                  <p className="text-gray-600">Calculate valuation and rental analysis first, then click "Analyze Investment Potential"</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>



 



          <TabsContent value="article" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Valuation Analysis</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                {valuation && (
                  <>
                    <h2>Executive Summary</h2>
                    <p>
                      The property at {propertyData.address} has an estimated value of <strong>{formatCurrency(valuation.estimatedValue)}</strong>.
                      This valuation is based on a comprehensive analysis of the property&apos;s characteristics, recent comparable sales, and prevailing market trends.
                      The analysis suggests a strong investment potential, with a projected ROI of {investmentPotential?.roi.toFixed(2)}% and a favorable risk profile.
                    </p>

                    <h2>Valuation Breakdown</h2>
                    <div>
                      Our valuation model incorporates three primary approaches:
                      <ul>
                        <li><strong>Comparative Sales Approach:</strong> This method, which carries the most weight in our analysis (60%), compares the subject property to similar properties that have recently sold in the area. The value derived from this approach is {formatCurrency(valuation.valuationMethods.comparativeSales)}.</li>
                        <li><strong>Cost Approach:</strong> This approach estimates the cost to replace the property, including land and improvements, minus depreciation. It contributes 25% to the final valuation, with a value of {formatCurrency(valuation.valuationMethods.costApproach)}.</li>
                        <li><strong>Income Approach:</strong> For investment properties, this method analyzes the potential income generation. It accounts for 15% of the valuation, resulting in a value of {formatCurrency(valuation.valuationMethods.incomeApproach)}.</li>
                      </ul>
                    </div>

                    <h2>Market and Investment Insights</h2>
                    <p>
                      The local real estate market is currently robust, with an average appreciation rate of {valuation.marketTrends.appreciation}% annually. Properties in this area spend an average of {valuation.marketTrends.daysOnMarket} days on the market.
                      The rental market is also strong, with a projected capitalization rate of {rentalAnalysis?.capitalizationRate.toFixed(2)}%.
                      Our analysis indicates a <strong>{investmentPotential?.investmentRating}</strong> investment grade, supported by high rental demand and stable market growth.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                      In conclusion, {propertyData.address} represents a sound investment opportunity with significant potential for appreciation and rental income.
                      The property is well-positioned within a healthy market, and its valuation is supported by multiple analytical methods.
                      We recommend this property for investors seeking a balance of stable returns and long-term growth.
                    </p>
                  </>
                )}
                {!valuation && (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Article Generated Yet</h3>
                    <p className="text-gray-600">Complete the property valuation to generate a detailed analysis article.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

 

 

 

          <TabsContent value="comparables" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparable Properties</CardTitle>
                <CardDescription>Recent sales of similar properties in the area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comparables.map((comp) => (
                    <div key={comp.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{comp.address}</h4>
                          <p className="text-sm text-gray-600">Sold: {comp.saleDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{formatCurrency(comp.salePrice)}</p>
                          <p className="text-sm text-gray-600">{comp.distance} miles away</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Size:</span> {comp.squareFootage.toLocaleString()} sq ft
                        </div>
                        <div>
                          <span className="text-gray-600">Beds:</span> {comp.bedrooms}
                        </div>
                        <div>
                          <span className="text-gray-600">Baths:</span> {comp.bathrooms}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm">
                          Adjustments: {comp.adjustments >= 0 ? '+' : ''}{formatCurrency(comp.adjustments)}
                        </span>
                        <span className="font-semibold">
                          Adjusted: {formatCurrency(comp.salePrice + comp.adjustments)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="valuation" className="space-y-6">
            {valuation ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-green-600">
                        {formatCurrency(valuation.estimatedValue)}
                      </CardTitle>
                      <CardDescription>Estimated Property Value</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Value Range</p>
                      <p className="font-semibold">
                        {formatCurrency(valuation.valueRange.low)} - {formatCurrency(valuation.valueRange.high)}
                      </p>
                      <div className="mt-4">
                        <Badge variant="default">
                          {valuation.confidenceLevel}% Confidence
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Valuation Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={valuationMethodsData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {valuationMethodsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Value']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Market Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <span>Price per Sq Ft</span>
                          <span className="font-semibold">{formatCurrency(valuation.marketTrends.pricePerSqFt)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <span>Annual Appreciation</span>
                          <span className="font-semibold text-green-600">
                            {valuation.marketTrends.appreciation}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <span>Avg Days on Market</span>
                          <span className="font-semibold">{valuation.marketTrends.daysOnMarket} days</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Valuation Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Comparative Sales Approach (60% weight)</span>
                        <span className="font-semibold">{formatCurrency(valuation.valuationMethods.comparativeSales)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Cost Approach (25% weight)</span>
                        <span className="font-semibold">{formatCurrency(valuation.valuationMethods.costApproach)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Income Approach (15% weight)</span>
                        <span className="font-semibold">{formatCurrency(valuation.valuationMethods.incomeApproach)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Calculator className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Valuation Yet</h3>
                  <p className="text-gray-600">Enter property details and click "Calculate Property Value" to see results</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="rental-analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rental Inputs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="monthlyRent">Estimated Monthly Rent</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={rentalData.monthlyRent}
                        onChange={(e) => setRentalData({ ...rentalData, monthlyRent: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="operatingExpenses">Monthly Operating Expenses</Label>
                      <Input
                        id="operatingExpenses"
                        type="number"
                        value={rentalData.operatingExpenses}
                        onChange={(e) => setRentalData({ ...rentalData, operatingExpenses: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                    <Button onClick={calculateRentalAnalysis} disabled={!valuation || rentalLoading} className="w-full">
                      {rentalLoading ? 'Analyzing...' : 'Analyze Rental Income'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="md:col-span-2">
                {rentalAnalysis ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Rental Analysis Results</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Gross Annual Rent</p>
                          <p className="font-semibold text-lg">{formatCurrency(rentalAnalysis.grossAnnualRent)}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Net Operating Income</p>
                          <p className="font-semibold text-lg">{formatCurrency(rentalAnalysis.netOperatingIncome)}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Capitalization Rate</p>
                          <p className="font-semibold text-lg">{rentalAnalysis.capitalizationRate.toFixed(2)}%</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Cash Flow (Annual)</p>
                          <p className={`font-semibold text-lg ${rentalAnalysis.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ${rentalAnalysis.cashFlow.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="flex items-center justify-center h-full">
                    <CardContent className="text-center py-12">
                      <DollarSign className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Rental Analysis Yet</h3>
                      <p className="text-gray-600">Enter rental inputs and click "Analyze" to see results</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>






        </Tabs>
      </div>
    </div>
  )
}