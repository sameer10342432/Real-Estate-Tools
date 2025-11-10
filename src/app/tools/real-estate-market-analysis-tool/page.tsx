'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts'
import { TrendingUp, TrendingDown, AlertCircle, Info, Target, Search, Building, BookOpen, Home, Activity } from 'lucide-react'

interface MarketData {
  // Price Analysis
  medianHomePrice: number
  pricePerSquareFoot: number
  priceGrowthYoY: number
  priceGrowth5Year: number
  
  // Market Activity
  daysOnMarket: number
  inventoryMonths: number
  saleToListRatio: number
  newListings: number
  
  // Rental Market
  medianRent: number
  rentGrowthYoY: number
  vacancyRate: number
  rentToIncomeRatio: number
  
  // Economic Indicators
  populationGrowth: number
  employmentRate: number
  medianIncome: number
  incomeGrowth: number
  
  // Investment Metrics
  averageCapRate: number
  cashOnCashReturn: number
  priceToRentRatio: number
  investmentScore: number
  
  // Market Health
  marketTemperature: string
  buyerDemand: string
  sellerActivity: string
  marketTrend: string
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Market Analysis Tool',
    description: 'Comprehensive market analysis and reporting. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function RealEstateMarketAnalysisTool() {
  const [location, setLocation] = useState<string>('Austin, TX')
  const [propertyType, setPropertyType] = useState<string>('single-family')
  const [priceRange, setPriceRange] = useState<string>('300000-600000')
  const [timeframe, setTimeframe] = useState<string>('12-months')
  const [results, setResults] = useState<MarketData | null>(null)

  const analyzeMarket = useCallback(() => {
    // Simulated market data - in real implementation, this would fetch from APIs
    const basePrice = 450000
    const priceVariation = Math.random() * 0.3 - 0.15 // ±15% variation
    
    const marketData: MarketData = {
      // Price Analysis
      medianHomePrice: basePrice * (1 + priceVariation),
      pricePerSquareFoot: (basePrice * (1 + priceVariation)) / 2000,
      priceGrowthYoY: (Math.random() * 20 - 5), // -5% to 15%
      priceGrowth5Year: (Math.random() * 60 + 20), // 20% to 80%
      
      // Market Activity
      daysOnMarket: Math.floor(Math.random() * 60 + 15), // 15-75 days
      inventoryMonths: Math.random() * 8 + 1, // 1-9 months
      saleToListRatio: Math.random() * 0.15 + 0.9, // 90-105%
      newListings: Math.floor(Math.random() * 500 + 200), // 200-700
      
      // Rental Market
      medianRent: (basePrice * (1 + priceVariation)) * 0.006, // ~0.6% of home price
      rentGrowthYoY: Math.random() * 15 + 2, // 2-17%
      vacancyRate: Math.random() * 8 + 2, // 2-10%
      rentToIncomeRatio: Math.random() * 10 + 25, // 25-35%
      
      // Economic Indicators
      populationGrowth: Math.random() * 4 + 0.5, // 0.5-4.5%
      employmentRate: Math.random() * 5 + 93, // 93-98%
      medianIncome: Math.floor(Math.random() * 30000 + 50000), // $50k-$80k
      incomeGrowth: Math.random() * 8 + 2, // 2-10%
      
      // Investment Metrics
      averageCapRate: Math.random() * 4 + 4, // 4-8%
      cashOnCashReturn: Math.random() * 8 + 4, // 4-12%
      priceToRentRatio: Math.random() * 10 + 15, // 15-25
      investmentScore: Math.random() * 40 + 60, // 60-100
      
      // Market Health (derived)
      marketTemperature: '',
      buyerDemand: '',
      sellerActivity: '',
      marketTrend: ''
    }

    // Calculate market health indicators
    if (marketData.daysOnMarket < 30 && marketData.saleToListRatio > 0.98) {
      marketData.marketTemperature = 'Hot'
      marketData.buyerDemand = 'High'
    } else if (marketData.daysOnMarket < 45 && marketData.saleToListRatio > 0.95) {
      marketData.marketTemperature = 'Warm'
      marketData.buyerDemand = 'Moderate'
    } else {
      marketData.marketTemperature = 'Cool'
      marketData.buyerDemand = 'Low'
    }

    if (marketData.newListings > 400) {
      marketData.sellerActivity = 'High'
    } else if (marketData.newListings > 250) {
      marketData.sellerActivity = 'Moderate'
    } else {
      marketData.sellerActivity = 'Low'
    }

    if (marketData.priceGrowthYoY > 8) {
      marketData.marketTrend = 'Strong Growth'
    } else if (marketData.priceGrowthYoY > 3) {
      marketData.marketTrend = 'Moderate Growth'
    } else if (marketData.priceGrowthYoY > 0) {
      marketData.marketTrend = 'Slow Growth'
    } else {
      marketData.marketTrend = 'Declining'
    }

    setResults(marketData)
  }, [])

  useEffect(() => {
    analyzeMarket()
  }, [analyzeMarket])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(value))
  }

  // Chart data
  const priceHistoryData = results ? [
    { month: 'Jan', price: results.medianHomePrice * 0.92, rent: results.medianRent * 0.95 },
    { month: 'Feb', price: results.medianHomePrice * 0.94, rent: results.medianRent * 0.96 },
    { month: 'Mar', price: results.medianHomePrice * 0.96, rent: results.medianRent * 0.97 },
    { month: 'Apr', price: results.medianHomePrice * 0.97, rent: results.medianRent * 0.98 },
    { month: 'May', price: results.medianHomePrice * 0.98, rent: results.medianRent * 0.99 },
    { month: 'Jun', price: results.medianHomePrice * 0.99, rent: results.medianRent * 1.00 },
    { month: 'Jul', price: results.medianHomePrice * 1.00, rent: results.medianRent * 1.01 },
    { month: 'Aug', price: results.medianHomePrice * 1.01, rent: results.medianRent * 1.02 },
    { month: 'Sep', price: results.medianHomePrice * 1.02, rent: results.medianRent * 1.03 },
    { month: 'Oct', price: results.medianHomePrice * 1.03, rent: results.medianRent * 1.04 },
    { month: 'Nov', price: results.medianHomePrice * 1.04, rent: results.medianRent * 1.05 },
    { month: 'Dec', price: results.medianHomePrice, rent: results.medianRent }
  ] : []

  const marketMetricsData = results ? [
    { metric: 'Days on Market', value: results.daysOnMarket, benchmark: 45, color: '#3b82f6' },
    { metric: 'Inventory (Months)', value: results.inventoryMonths, benchmark: 6, color: '#22c55e' },
    { metric: 'Sale-to-List %', value: results.saleToListRatio * 100, benchmark: 98, color: '#8b5cf6' },
    { metric: 'Vacancy Rate %', value: results.vacancyRate, benchmark: 5, color: '#f59e0b' }
  ] : []

  const investmentMetricsData = results ? [
    { name: 'Cap Rate', value: results.averageCapRate, color: '#22c55e' },
    { name: 'Cash-on-Cash', value: results.cashOnCashReturn, color: '#3b82f6' },
    { name: 'Price Growth', value: results.priceGrowthYoY, color: '#8b5cf6' },
    { name: 'Rent Growth', value: results.rentGrowthYoY, color: '#f59e0b' }
  ] : []

  const economicIndicatorsData = results ? [
    { indicator: 'Population Growth', value: results.populationGrowth, target: 2 },
    { indicator: 'Employment Rate', value: results.employmentRate, target: 95 },
    { indicator: 'Income Growth', value: results.incomeGrowth, target: 4 },
    { indicator: 'Rent-to-Income', value: results.rentToIncomeRatio, target: 30 }
  ] : []

  const neighborhoodComparison = [
    { neighborhood: 'Downtown', price: 520000, growth: 12.5, capRate: 5.2 },
    { neighborhood: 'Suburbs North', price: 380000, growth: 8.3, capRate: 6.8 },
    { neighborhood: 'Suburbs South', price: 420000, growth: 9.7, capRate: 6.1 },
    { neighborhood: 'Waterfront', price: 680000, growth: 15.2, capRate: 4.3 },
    { neighborhood: 'Historic District', price: 450000, growth: 7.9, capRate: 5.9 }
  ]

  const getMarketHealthColor = (temperature: string) => {
    switch (temperature) {
      case 'Hot': return 'text-red-600 bg-red-50'
      case 'Warm': return 'text-orange-600 bg-orange-50'
      case 'Cool': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'Strong Growth': return 'text-green-600'
      case 'Moderate Growth': return 'text-blue-600'
      case 'Slow Growth': return 'text-yellow-600'
      case 'Declining': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Real Estate Market Analysis Tool</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive market research and analysis for informed real estate decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Market Search
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Define your market analysis parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                    <Input
                      id="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="text-lg"
                      placeholder="Austin, TX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-sm font-medium">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-Family</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priceRange" className="text-sm font-medium">Price Range</Label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-200000">Under $200K</SelectItem>
                        <SelectItem value="200000-400000">$200K - $400K</SelectItem>
                        <SelectItem value="400000-600000">$400K - $600K</SelectItem>
                        <SelectItem value="600000-800000">$600K - $800K</SelectItem>
                        <SelectItem value="800000-1000000">$800K - $1M</SelectItem>
                        <SelectItem value="1000000+">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe" className="text-sm font-medium">Analysis Timeframe</Label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-months">Last 3 Months</SelectItem>
                        <SelectItem value="6-months">Last 6 Months</SelectItem>
                        <SelectItem value="12-months">Last 12 Months</SelectItem>
                        <SelectItem value="24-months">Last 24 Months</SelectItem>
                        <SelectItem value="5-years">Last 5 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={analyzeMarket}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                >
                  Analyze Market
                </Button>

                {results && (
                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold text-gray-900">Quick Stats</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Median Price:</span>
                        <span className="font-medium">{formatCurrency(results.medianHomePrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price Growth:</span>
                        <span className={`font-medium ${results.priceGrowthYoY >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPercentage(results.priceGrowthYoY)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Days on Market:</span>
                        <span className="font-medium">{results.daysOnMarket} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Market Temp:</span>
                        <Badge className={getMarketHealthColor(results.marketTemperature)}>
                          {results.marketTemperature}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-6">
            {results && (
              <>
                {/* Market Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100 text-sm">Median Home Price</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.medianHomePrice)}</p>
                          <p className={`text-xs flex items-center gap-1 ${results.priceGrowthYoY >= 0 ? 'text-green-200' : 'text-red-200'}`}>
                            {results.priceGrowthYoY >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {formatPercentage(results.priceGrowthYoY)} YoY
                          </p>
                        </div>
                        <Home className="h-8 w-8 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Days on Market</p>
                          <p className="text-2xl font-bold">{results.daysOnMarket}</p>
                          <p className="text-xs text-blue-200">
                            {results.daysOnMarket < 30 ? 'Fast' : results.daysOnMarket < 60 ? 'Normal' : 'Slow'}
                          </p>
                        </div>
                        <Activity className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Investment Score</p>
                          <p className="text-2xl font-bold">{results.investmentScore.toFixed(0)}/100</p>
                          <p className="text-xs text-purple-200">
                            {results.investmentScore >= 80 ? 'Excellent' : results.investmentScore >= 60 ? 'Good' : 'Fair'}
                          </p>
                        </div>
                        <Target className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`bg-gradient-to-br ${results.marketTemperature === 'Hot' ? 'from-red-500 to-red-600' : results.marketTemperature === 'Warm' ? 'from-orange-500 to-orange-600' : 'from-blue-500 to-blue-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.marketTemperature === 'Hot' ? 'text-red-100' : results.marketTemperature === 'Warm' ? 'text-orange-100' : 'text-blue-100'} text-sm`}>Market Temperature</p>
                          <p className="text-2xl font-bold">{results.marketTemperature}</p>
                          <p className={`text-xs ${results.marketTemperature === 'Hot' ? 'text-red-200' : results.marketTemperature === 'Warm' ? 'text-orange-200' : 'text-blue-200'}`}>
                            {results.buyerDemand} Demand
                          </p>
                        </div>
                        <AlertCircle className={`h-8 w-8 ${results.marketTemperature === 'Hot' ? 'text-red-200' : results.marketTemperature === 'Warm' ? 'text-orange-200' : 'text-blue-200'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-7">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="investment">Investment</TabsTrigger>
                    <TabsTrigger value="economic">Economic</TabsTrigger>
                    <TabsTrigger value="comparison">Compare</TabsTrigger>
                    <TabsTrigger value="article"><BookOpen className="h-4 w-4 mr-2" />Article</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Price & Rent Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={priceHistoryData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} />
                                <Tooltip 
                                  formatter={(value: number, name: string) => [
                                    name === 'price' ? formatCurrency(value) : formatCurrency(value),
                                    name === 'price' ? 'Home Price' : 'Rent'
                                  ]}
                                />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={3} name="Home Price" />
                                <Line yAxisId="right" type="monotone" dataKey="rent" stroke="#22c55e" strokeWidth={3} name="Rent" />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Market Activity Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={marketMetricsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="metric" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" />
                                <Bar dataKey="benchmark" fill="#22c55e" opacity={0.3} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Market Summary for {location}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Market Health</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Temperature:</span>
                                <Badge className={getMarketHealthColor(results.marketTemperature)}>
                                  {results.marketTemperature}
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>Buyer Demand:</span>
                                <span className="font-medium">{results.buyerDemand}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Seller Activity:</span>
                                <span className="font-medium">{results.sellerActivity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Market Trend:</span>
                                <span className={`font-medium ${getTrendColor(results.marketTrend)}`}>
                                  {results.marketTrend}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Key Metrics</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Median Price:</span>
                                <span className="font-medium">{formatCurrency(results.medianHomePrice)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Price/Sq Ft:</span>
                                <span className="font-medium">${results.pricePerSquareFoot.toFixed(0)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Median Rent:</span>
                                <span className="font-medium">{formatCurrency(results.medianRent)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Days on Market:</span>
                                <span className="font-medium">{results.daysOnMarket} days</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Investment Outlook</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Investment Score:</span>
                                <span className="font-medium">{results.investmentScore.toFixed(0)}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Avg Cap Rate:</span>
                                <span className="font-medium">{formatPercentage(results.averageCapRate)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Cash-on-Cash:</span>
                                <span className="font-medium">{formatPercentage(results.cashOnCashReturn)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Price-to-Rent:</span>
                                <span className="font-medium">{results.priceToRentRatio.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="pricing" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Price Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.medianHomePrice)}</p>
                              <p className="text-sm text-gray-600">Median Price</p>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">${results.pricePerSquareFoot.toFixed(0)}</p>
                              <p className="text-sm text-gray-600">Price per Sq Ft</p>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <p className={`text-2xl font-bold ${results.priceGrowthYoY >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.priceGrowthYoY)}
                              </p>
                              <p className="text-sm text-gray-600">YoY Growth</p>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                              <p className="text-2xl font-bold text-orange-600">{formatPercentage(results.priceGrowth5Year)}</p>
                              <p className="text-sm text-gray-600">5-Year Growth</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Rental Market</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.medianRent)}</p>
                              <p className="text-sm text-gray-600">Median Rent</p>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{formatPercentage(results.rentGrowthYoY)}</p>
                              <p className="text-sm text-gray-600">Rent Growth</p>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <p className={`text-2xl font-bold ${results.vacancyRate <= 5 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.vacancyRate)}
                              </p>
                              <p className="text-sm text-gray-600">Vacancy Rate</p>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                              <p className="text-2xl font-bold text-orange-600">{formatPercentage(results.rentToIncomeRatio)}</p>
                              <p className="text-sm text-gray-600">Rent-to-Income</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Price Analysis Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Market Position:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Median home price: {formatCurrency(results.medianHomePrice)}</li>
                              <li>• Price per square foot: ${results.pricePerSquareFoot.toFixed(0)}</li>
                              <li>• Annual price growth: {formatPercentage(results.priceGrowthYoY)}</li>
                              <li>• 5-year appreciation: {formatPercentage(results.priceGrowth5Year)}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Rental Market:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Median monthly rent: {formatCurrency(results.medianRent)}</li>
                              <li>• Rent growth rate: {formatPercentage(results.rentGrowthYoY)}</li>
                              <li>• Vacancy rate: {formatPercentage(results.vacancyRate)}</li>
                              <li>• Price-to-rent ratio: {results.priceToRentRatio.toFixed(1)}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="activity" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Market Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={marketMetricsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="metric" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#3b82f6" name="Current" />
                                <Bar dataKey="benchmark" fill="#22c55e" opacity={0.5} name="Benchmark" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Activity Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Days on Market</span>
                              <span className={`font-bold ${results.daysOnMarket <= 30 ? 'text-green-600' : results.daysOnMarket <= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                                {results.daysOnMarket} days
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Inventory (Months)</span>
                              <span className={`font-bold ${results.inventoryMonths <= 3 ? 'text-red-600' : results.inventoryMonths <= 6 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {results.inventoryMonths.toFixed(1)} months
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Sale-to-List Ratio</span>
                              <span className={`font-bold ${results.saleToListRatio >= 1.0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.saleToListRatio * 100)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">New Listings</span>
                              <span className="font-bold text-blue-600">
                                {formatNumber(results.newListings)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Market Activity Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Current Market Conditions</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-3 rounded ${results.daysOnMarket <= 30 ? 'bg-green-50 text-green-700' : results.daysOnMarket <= 60 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Speed of Sales:</strong> {results.daysOnMarket <= 30 ? 'Very fast market' : results.daysOnMarket <= 60 ? 'Normal pace' : 'Slow market'}
                              </div>
                              <div className={`p-3 rounded ${results.inventoryMonths <= 3 ? 'bg-red-50 text-red-700' : results.inventoryMonths <= 6 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                <strong>Inventory Level:</strong> {results.inventoryMonths <= 3 ? 'Very low inventory' : results.inventoryMonths <= 6 ? 'Balanced market' : 'High inventory'}
                              </div>
                              <div className={`p-3 rounded ${results.saleToListRatio >= 1.0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Price Pressure:</strong> {results.saleToListRatio >= 1.0 ? 'Upward price pressure' : 'Downward price pressure'}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Market Implications</h4>
                            <div className="space-y-2 text-sm">
                              <div className="p-3 bg-blue-50 text-blue-700 rounded">
                                <strong>For Buyers:</strong> {results.marketTemperature === 'Hot' ? 'Competitive market, act quickly' : results.marketTemperature === 'Warm' ? 'Good selection, moderate competition' : 'Buyer-friendly market'}
                              </div>
                              <div className="p-3 bg-purple-50 text-purple-700 rounded">
                                <strong>For Sellers:</strong> {results.marketTemperature === 'Hot' ? 'Excellent selling conditions' : results.marketTemperature === 'Warm' ? 'Good selling conditions' : 'Price competitively'}
                              </div>
                              <div className="p-3 bg-orange-50 text-orange-700 rounded">
                                <strong>For Investors:</strong> {results.investmentScore >= 80 ? 'Strong investment market' : results.investmentScore >= 60 ? 'Moderate opportunities' : 'Proceed with caution'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="investment" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Investment Returns</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={investmentMetricsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `${value.toFixed(1)}%`} />
                                <Tooltip formatter={(value: number) => [formatPercentage(value), '']} />
                                <Bar dataKey="value" fill="#3b82f6" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Investment Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{formatPercentage(results.averageCapRate)}</p>
                              <p className="text-sm text-gray-600">Average Cap Rate</p>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{formatPercentage(results.cashOnCashReturn)}</p>
                              <p className="text-sm text-gray-600">Cash-on-Cash</p>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <p className="text-2xl font-bold text-purple-600">{results.priceToRentRatio.toFixed(1)}</p>
                              <p className="text-sm text-gray-600">Price-to-Rent</p>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                              <p className="text-2xl font-bold text-orange-600">{results.investmentScore.toFixed(0)}/100</p>
                              <p className="text-sm text-gray-600">Investment Score</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Investment Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Return Potential</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-3 rounded ${results.averageCapRate >= 6 ? 'bg-green-50 text-green-700' : results.averageCapRate >= 4 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Cap Rate:</strong> {results.averageCapRate >= 6 ? 'Strong returns' : results.averageCapRate >= 4 ? 'Moderate returns' : 'Low returns'}
                              </div>
                              <div className={`p-3 rounded ${results.cashOnCashReturn >= 8 ? 'bg-green-50 text-green-700' : results.cashOnCashReturn >= 5 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Cash-on-Cash:</strong> {results.cashOnCashReturn >= 8 ? 'Excellent cash flow' : results.cashOnCashReturn >= 5 ? 'Good cash flow' : 'Limited cash flow'}
                              </div>
                              <div className={`p-3 rounded ${results.priceToRentRatio <= 15 ? 'bg-green-50 text-green-700' : results.priceToRentRatio <= 20 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Price-to-Rent:</strong> {results.priceToRentRatio <= 15 ? 'Good value' : results.priceToRentRatio <= 20 ? 'Fair value' : 'Expensive'}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Investment Recommendation</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-3 rounded ${results.investmentScore >= 80 ? 'bg-green-50 text-green-700' : results.investmentScore >= 60 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Overall Score:</strong> {results.investmentScore >= 80 ? 'Excellent investment opportunity' : results.investmentScore >= 60 ? 'Good investment potential' : 'Consider other markets'}
                              </div>
                              <div className="p-3 bg-blue-50 text-blue-700 rounded">
                                <strong>Market Timing:</strong> {results.marketTrend === 'Strong Growth' ? 'Good time to buy' : results.marketTrend === 'Moderate Growth' ? 'Stable market' : 'Wait for better conditions'}
                              </div>
                              <div className="p-3 bg-purple-50 text-purple-700 rounded">
                                <strong>Risk Level:</strong> {results.marketTemperature === 'Hot' ? 'Higher risk, higher reward' : results.marketTemperature === 'Warm' ? 'Balanced risk/reward' : 'Lower risk opportunity'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="economic" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Economic Indicators</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={economicIndicatorsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="indicator" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#3b82f6" name="Current" />
                                <Bar dataKey="target" fill="#22c55e" opacity={0.5} name="Target" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Economic Health</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Population Growth</span>
                              <span className={`font-bold ${results.populationGrowth >= 2 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {formatPercentage(results.populationGrowth)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Employment Rate</span>
                              <span className={`font-bold ${results.employmentRate >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {formatPercentage(results.employmentRate)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Median Income</span>
                              <span className="font-bold text-blue-600">
                                {formatCurrency(results.medianIncome)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Income Growth</span>
                              <span className={`font-bold ${results.incomeGrowth >= 4 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {formatPercentage(results.incomeGrowth)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Economic Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Economic Fundamentals</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-3 rounded ${results.populationGrowth >= 2 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                <strong>Population Growth:</strong> {results.populationGrowth >= 2 ? 'Strong growth driving demand' : 'Moderate growth'}
                              </div>
                              <div className={`p-3 rounded ${results.employmentRate >= 95 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                <strong>Employment:</strong> {results.employmentRate >= 95 ? 'Very healthy job market' : 'Stable employment'}
                              </div>
                              <div className={`p-3 rounded ${results.incomeGrowth >= 4 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                <strong>Income Growth:</strong> {results.incomeGrowth >= 4 ? 'Strong wage growth' : 'Moderate income growth'}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Market Implications</h4>
                            <div className="space-y-2 text-sm">
                              <div className="p-3 bg-blue-50 text-blue-700 rounded">
                                <strong>Demand Drivers:</strong> {results.populationGrowth >= 2 && results.incomeGrowth >= 4 ? 'Strong fundamentals support demand' : 'Moderate demand drivers'}
                              </div>
                              <div className="p-3 bg-purple-50 text-purple-700 rounded">
                                <strong>Affordability:</strong> {results.rentToIncomeRatio <= 30 ? 'Good affordability' : 'Affordability concerns'}
                              </div>
                              <div className="p-3 bg-orange-50 text-orange-700 rounded">
                                <strong>Long-term Outlook:</strong> {results.populationGrowth >= 2 && results.employmentRate >= 95 ? 'Positive long-term prospects' : 'Stable long-term outlook'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="comparison" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Neighborhood Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart data={neighborhoodComparison}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="price" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <YAxis dataKey="growth" tickFormatter={(value) => `${value}%`} />
                              <Tooltip 
                                formatter={(value: number, name: string) => [
                                  name === 'price' ? formatCurrency(value) : 
                                  name === 'growth' ? formatPercentage(value) : 
                                  formatPercentage(value),
                                  name === 'price' ? 'Price' : 
                                  name === 'growth' ? 'Growth' : 'Cap Rate'
                                ]}
                                labelFormatter={(label) => `Neighborhood: ${label}`}
                              />
                              <Scatter dataKey="capRate" fill="#3b82f6" />
                            </ScatterChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Area Comparison Table</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Neighborhood</th>
                                <th className="text-right p-2">Median Price</th>
                                <th className="text-right p-2">Price Growth</th>
                                <th className="text-right p-2">Cap Rate</th>
                                <th className="text-center p-2">Rating</th>
                              </tr>
                            </thead>
                            <tbody>
                              {neighborhoodComparison.map((area, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                  <td className="p-2 font-medium">{area.neighborhood}</td>
                                  <td className="p-2 text-right">{formatCurrency(area.price)}</td>
                                  <td className={`p-2 text-right ${area.growth >= 10 ? 'text-green-600' : area.growth >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                                    {formatPercentage(area.growth)}
                                  </td>
                                  <td className={`p-2 text-right ${area.capRate >= 6 ? 'text-green-600' : area.capRate >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                                    {formatPercentage(area.capRate)}
                                  </td>
                                  <td className="p-2 text-center">
                                    <Badge className={
                                      area.growth >= 10 && area.capRate >= 6 ? 'bg-green-100 text-green-800' :
                                      area.growth >= 8 && area.capRate >= 5 ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }>
                                      {area.growth >= 10 && area.capRate >= 6 ? 'Excellent' :
                                       area.growth >= 8 && area.capRate >= 5 ? 'Good' : 'Fair'}
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">The Complete Guide to Real Estate Market Analysis</h2>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Takeaways</h3>
                            <ul className="text-blue-700 space-y-1">
                              <li>• Market analysis is essential for informed real estate decisions</li>
                              <li>• Multiple data sources provide comprehensive market insights</li>
                              <li>• Local factors often override national market trends</li>
                              <li>• Timing and market cycles significantly impact investment returns</li>
                              <li>• Professional analysis tools enhance decision-making accuracy</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Understanding Real Estate Market Analysis</h3>
                      <p className="mb-4">
                        Real estate market analysis is the systematic evaluation of market conditions, trends, 
                        and factors that influence property values and investment opportunities. This comprehensive 
                        process involves examining economic indicators, demographic trends, supply and demand 
                        dynamics, and local market characteristics to make informed real estate decisions.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Why Market Analysis Matters</h4>
                      <p className="mb-4">
                        Effective market analysis helps investors, buyers, sellers, and real estate professionals:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Identify profitable investment opportunities</li>
                        <li>Determine optimal pricing strategies</li>
                        <li>Assess market timing for transactions</li>
                        <li>Understand risk factors and market volatility</li>
                        <li>Make data-driven decisions rather than emotional choices</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Types of Market Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Comparative Market Analysis (CMA)</h4>
                      <p className="mb-4">
                        CMA compares similar properties that have recently sold, are currently for sale, 
                        or were withdrawn from the market. This analysis helps determine fair market value 
                        and competitive positioning.
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Recently Sold Properties:</strong> Actual market values achieved</li>
                        <li><strong>Active Listings:</strong> Current competition and pricing trends</li>
                        <li><strong>Expired/Withdrawn:</strong> Properties that failed to sell at listed prices</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Neighborhood Market Analysis</h4>
                      <p className="mb-4">
                        This focuses on specific geographic areas, examining local factors that influence 
                        property values and market dynamics within particular neighborhoods or districts.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Investment Market Analysis</h4>
                      <p className="mb-4">
                        Specialized analysis for investment properties, focusing on rental yields, cap rates, 
                        cash flow potential, and long-term appreciation prospects.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Key Market Indicators</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Price Metrics</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Median Home Price:</strong> Middle value of all home sales</li>
                        <li><strong>Price Per Square Foot:</strong> Standardized pricing comparison</li>
                        <li><strong>Price Growth Rate:</strong> Year-over-year and long-term trends</li>
                        <li><strong>Price-to-Income Ratio:</strong> Affordability indicator</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Market Activity Indicators</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Days on Market (DOM):</strong> Average time properties take to sell</li>
                        <li><strong>Inventory Levels:</strong> Number of available properties</li>
                        <li><strong>Months of Supply:</strong> How long current inventory would last</li>
                        <li><strong>Sale-to-List Price Ratio:</strong> Negotiation strength indicator</li>
                        <li><strong>New Listings:</strong> Fresh supply entering the market</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Economic Indicators</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Employment Rate:</strong> Job market health</li>
                        <li><strong>Population Growth:</strong> Demand driver</li>
                        <li><strong>Median Income:</strong> Purchasing power</li>
                        <li><strong>Interest Rates:</strong> Financing cost impact</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Market Analysis Process</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">1. Define Analysis Scope</h4>
                      <p className="mb-4">
                        Clearly define the purpose, geographic area, property type, and time frame for your analysis:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Purpose:</strong> Investment, sale, purchase, or general market understanding</li>
                        <li><strong>Geographic Scope:</strong> City, neighborhood, or specific area boundaries</li>
                        <li><strong>Property Type:</strong> Single-family, condos, commercial, etc.</li>
                        <li><strong>Time Frame:</strong> Current conditions vs. historical trends</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">2. Gather Data Sources</h4>
                      <p className="mb-4">
                        Collect information from multiple reliable sources:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>MLS Data:</strong> Comprehensive property transaction records</li>
                        <li><strong>Public Records:</strong> Tax assessments, permits, zoning information</li>
                        <li><strong>Census Data:</strong> Demographics and economic statistics</li>
                        <li><strong>Real Estate Websites:</strong> Current listings and market trends</li>
                        <li><strong>Local Government:</strong> Development plans and zoning changes</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">3. Analyze Market Trends</h4>
                      <p className="mb-4">
                        Examine historical data to identify patterns and trends:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Price appreciation or depreciation patterns</li>
                        <li>Seasonal market fluctuations</li>
                        <li>Market cycle positioning (recovery, expansion, peak, contraction)</li>
                        <li>Supply and demand balance shifts</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">4. Evaluate Local Factors</h4>
                      <p className="mb-4">
                        Consider location-specific influences:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Infrastructure:</strong> Transportation, utilities, internet connectivity</li>
                        <li><strong>Amenities:</strong> Schools, shopping, recreation, healthcare</li>
                        <li><strong>Development:</strong> New construction, urban planning initiatives</li>
                        <li><strong>Environmental:</strong> Natural disasters, climate considerations</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Market Cycle Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Understanding Market Cycles</h4>
                      <p className="mb-4">
                        Real estate markets move through predictable cycles that affect timing and strategy:
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold mb-2">1. Recovery Phase</h5>
                        <ul className="text-sm space-y-1">
                          <li>• High vacancy rates, low rents/prices</li>
                          <li>• Limited new construction</li>
                          <li>• Opportunity for value investments</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold mb-2">2. Expansion Phase</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Decreasing vacancy, rising rents/prices</li>
                          <li>• Increased construction activity</li>
                          <li>• Strong investment returns</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold mb-2">3. Peak Phase</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Low vacancy, high rents/prices</li>
                          <li>• Peak construction activity</li>
                          <li>• Time to consider selling</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h5 className="font-semibold mb-2">4. Contraction Phase</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Rising vacancy, declining rents/prices</li>
                          <li>• Reduced construction</li>
                          <li>• Market correction period</li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Demographic Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Population Trends</h4>
                      <p className="mb-4">
                        Population growth drives housing demand and market dynamics:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Growth Rate:</strong> Increasing population creates housing demand</li>
                        <li><strong>Age Distribution:</strong> Different age groups have varying housing needs</li>
                        <li><strong>Household Formation:</strong> New households drive housing demand</li>
                        <li><strong>Migration Patterns:</strong> In-migration vs. out-migration trends</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Economic Demographics</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Income Levels:</strong> Purchasing power and affordability</li>
                        <li><strong>Employment Sectors:</strong> Economic diversity and stability</li>
                        <li><strong>Education Levels:</strong> Correlation with income and housing preferences</li>
                        <li><strong>Homeownership Rates:</strong> Rental vs. ownership market balance</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Supply and Demand Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Supply Factors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>New Construction:</strong> Building permits and starts</li>
                        <li><strong>Existing Inventory:</strong> Available properties for sale/rent</li>
                        <li><strong>Land Availability:</strong> Developable land constraints</li>
                        <li><strong>Zoning Regulations:</strong> Development restrictions and opportunities</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Demand Drivers</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Population Growth:</strong> More people need housing</li>
                        <li><strong>Job Creation:</strong> Employment attracts residents</li>
                        <li><strong>Income Growth:</strong> Increased purchasing power</li>
                        <li><strong>Credit Availability:</strong> Financing accessibility</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Technology and Market Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Data Analytics Tools</h4>
                      <p className="mb-4">
                        Modern technology enhances market analysis capabilities:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Big Data Analytics:</strong> Processing vast amounts of market data</li>
                        <li><strong>Predictive Modeling:</strong> Forecasting market trends</li>
                        <li><strong>GIS Mapping:</strong> Geographic analysis and visualization</li>
                        <li><strong>Machine Learning:</strong> Pattern recognition and trend identification</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Real-Time Market Data</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Online Platforms:</strong> Instant access to listings and sales data</li>
                        <li><strong>Mobile Apps:</strong> On-the-go market information</li>
                        <li><strong>API Integration:</strong> Automated data collection and analysis</li>
                        <li><strong>Social Media Analytics:</strong> Sentiment and trend analysis</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Investment-Focused Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Rental Market Analysis</h4>
                      <p className="mb-4">
                        For investment properties, analyze rental market conditions:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Rental Rates:</strong> Current and trending rental prices</li>
                        <li><strong>Vacancy Rates:</strong> Market tightness indicators</li>
                        <li><strong>Tenant Demographics:</strong> Target renter profiles</li>
                        <li><strong>Rental Yield:</strong> Income return on investment</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Cap Rate Analysis</h4>
                      <p className="mb-4">
                        Capitalization rates help compare investment opportunities:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Market Cap Rates:</strong> Average returns in the area</li>
                        <li><strong>Property Type Variations:</strong> Different rates for different property types</li>
                        <li><strong>Risk Assessment:</strong> Higher cap rates often indicate higher risk</li>
                        <li><strong>Trend Analysis:</strong> Rising or falling cap rate trends</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Market Analysis Challenges</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Data Quality Issues</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Incomplete Data:</strong> Missing or outdated information</li>
                        <li><strong>Data Accuracy:</strong> Errors in reporting or recording</li>
                        <li><strong>Sample Size:</strong> Insufficient data for reliable analysis</li>
                        <li><strong>Data Lag:</strong> Time delays in data availability</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Market Complexity</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Multiple Variables:</strong> Many factors influence markets simultaneously</li>
                        <li><strong>Local Variations:</strong> Micro-markets within larger areas</li>
                        <li><strong>External Factors:</strong> Economic, political, and social influences</li>
                        <li><strong>Timing Sensitivity:</strong> Market conditions change rapidly</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Best Practices for Market Analysis</h3>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                        <div className="flex">
                          <Target className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                          <div>
                            <h4 className="text-lg font-semibold text-green-800 mb-2">Analysis Best Practices</h4>
                            <ul className="text-green-700 space-y-1">
                              <li>• Use multiple data sources for comprehensive analysis</li>
                              <li>• Focus on relevant metrics for your specific goals</li>
                              <li>• Consider both quantitative data and qualitative factors</li>
                              <li>• Update analysis regularly as markets change</li>
                              <li>• Validate findings with local market experts</li>
                              <li>• Document assumptions and methodology</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold mb-3">Common Mistakes to Avoid</h4>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
                          <div>
                            <h4 className="text-lg font-semibold text-red-800 mb-2">Avoid These Pitfalls</h4>
                            <ul className="text-red-700 space-y-2">
                              <li>• Relying on a single data source or metric</li>
                              <li>• Ignoring local market conditions and focusing only on national trends</li>
                              <li>• Using outdated data for current market decisions</li>
                              <li>• Overlooking seasonal variations and market cycles</li>
                              <li>• Failing to consider future development and infrastructure changes</li>
                              <li>• Making emotional decisions despite data insights</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Future of Market Analysis</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Emerging Technologies</h4>
                      <p className="mb-4">
                        Technology continues to transform market analysis:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Artificial Intelligence:</strong> Advanced pattern recognition and prediction</li>
                        <li><strong>Blockchain:</strong> Transparent and secure transaction records</li>
                        <li><strong>IoT Sensors:</strong> Real-time property and neighborhood data</li>
                        <li><strong>Virtual Reality:</strong> Remote property analysis and visualization</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Data Integration</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Multi-Source Integration:</strong> Combining diverse data streams</li>
                        <li><strong>Real-Time Updates:</strong> Instant market condition changes</li>
                        <li><strong>Predictive Analytics:</strong> Forecasting market movements</li>
                        <li><strong>Automated Reporting:</strong> Regular market analysis updates</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Practical Application</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">For Investors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Identify emerging markets with growth potential</li>
                        <li>Time market entry and exit strategies</li>
                        <li>Assess risk-return profiles of different areas</li>
                        <li>Optimize portfolio diversification</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">For Homebuyers</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Determine fair market value for properties</li>
                        <li>Identify neighborhoods with appreciation potential</li>
                        <li>Understand market timing for purchases</li>
                        <li>Negotiate from a position of knowledge</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">For Sellers</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Set competitive and realistic listing prices</li>
                        <li>Time market entry for optimal results</li>
                        <li>Understand buyer preferences and market conditions</li>
                        <li>Develop effective marketing strategies</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4 mt-8">Conclusion</h3>
                      <p className="mb-4">
                        Real estate market analysis is both an art and a science that requires combining 
                        quantitative data with qualitative insights. Success depends on using reliable 
                        data sources, understanding local market dynamics, and staying current with 
                        changing conditions.
                      </p>
                      <p className="mb-4">
                        Whether you're an investor, buyer, seller, or real estate professional, thorough 
                        market analysis provides the foundation for informed decision-making. By following 
                        best practices, avoiding common pitfalls, and leveraging modern analytical tools, 
                        you can gain valuable insights that lead to better real estate outcomes.
                      </p>
                      <p className="mb-4">
                        Remember that markets are dynamic and constantly evolving. Regular analysis updates, 
                        continuous learning, and adaptation to new technologies and methodologies will help 
                        you maintain a competitive edge in the ever-changing real estate landscape.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}