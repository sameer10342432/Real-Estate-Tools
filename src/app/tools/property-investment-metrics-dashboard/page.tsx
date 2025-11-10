'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { TrendingUp, DollarSign, Calculator, AlertCircle, Info, Target, Activity } from 'lucide-react'

interface PropertyMetrics {
  // Basic Property Info
  propertyValue: number
  purchasePrice: number
  downPayment: number
  loanAmount: number
  
  // Income Metrics
  monthlyRent: number
  annualRent: number
  grossRentMultiplier: number
  
  // Expense Metrics
  monthlyExpenses: number
  annualExpenses: number
  expenseRatio: number
  
  // Cash Flow Metrics
  monthlyCashFlow: number
  annualCashFlow: number
  cashOnCashReturn: number
  
  // Profitability Metrics
  capRate: number
  netOperatingIncome: number
  debtServiceCoverageRatio: number
  
  // Leverage Metrics
  loanToValue: number
  debtToEquity: number
  equityMultiple: number
  
  // Return Metrics
  totalROI: number
  internalRateOfReturn: number
  returnOnEquity: number
  
  // Risk Metrics
  breakEvenRatio: number
  vacancyBuffer: number
  riskScore: number
  
  // Efficiency Metrics
  pricePerSquareFoot: number
  rentPerSquareFoot: number
  operatingEfficiency: number
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Investment Metrics Dashboard Calculator',
    description: 'Comprehensive dashboard for investment property metrics. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function PropertyInvestmentMetricsDashboard() {
  const [propertyValue, setPropertyValue] = useState<string>('500000')
  const [purchasePrice, setPurchasePrice] = useState<string>('450000')
  const [downPayment, setDownPayment] = useState<string>('90000')
  const [monthlyRent, setMonthlyRent] = useState<string>('3500')
  const [propertyTax, setPropertyTax] = useState<string>('6000')
  const [insurance, setInsurance] = useState<string>('1500')
  const [maintenance, setMaintenance] = useState<string>('3000')
  const [propertyManagement, setPropertyManagement] = useState<string>('8')
  const [utilities, setUtilities] = useState<string>('800')
  const [otherExpenses, setOtherExpenses] = useState<string>('1200')
  const [mortgagePayment, setMortgagePayment] = useState<string>('2100')
  const [vacancy, setVacancy] = useState<string>('5')
  const [squareFootage, setSquareFootage] = useState<string>('2000')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [appreciationRate, setAppreciationRate] = useState<string>('3')
  const [results, setResults] = useState<PropertyMetrics | null>(null)

  const calculateMetrics = useCallback(() => {
    const propValue = parseFloat(propertyValue) || 0
    const purchPrice = parseFloat(purchasePrice) || 0
    const down = parseFloat(downPayment) || 0
    const rent = parseFloat(monthlyRent) || 0
    const tax = parseFloat(propertyTax) / 12 || 0
    const ins = parseFloat(insurance) / 12 || 0
    const maint = parseFloat(maintenance) / 12 || 0
    const mgmtRate = parseFloat(propertyManagement) / 100 || 0
    const util = parseFloat(utilities) / 12 || 0
    const other = parseFloat(otherExpenses) / 12 || 0
    const mortgage = parseFloat(mortgagePayment) || 0
    const vacancyRate = parseFloat(vacancy) / 100 || 0
    const sqft = parseFloat(squareFootage) || 1
    
    const appRate = parseFloat(appreciationRate) / 100 || 0

    // Basic calculations
    const loanAmount = purchPrice - down
    const effectiveMonthlyRent = rent * (1 - vacancyRate)
    const managementFee = rent * mgmtRate
    const monthlyExpenses = tax + ins + maint + managementFee + util + other + mortgage
    const monthlyCashFlow = effectiveMonthlyRent - monthlyExpenses
    
    // Annual calculations
    const annualRent = effectiveMonthlyRent * 12
    const annualExpenses = monthlyExpenses * 12
    const annualCashFlow = monthlyCashFlow * 12
    const netOperatingIncome = annualRent - (annualExpenses - mortgage * 12)

    // Key Metrics
    const cashOnCashReturn = down > 0 ? (annualCashFlow / down) * 100 : 0
    const capRate = purchPrice > 0 ? (netOperatingIncome / purchPrice) * 100 : 0
    const grossRentMultiplier = rent > 0 ? purchPrice / (rent * 12) : 0
    const expenseRatio = annualRent > 0 ? (annualExpenses / annualRent) * 100 : 0
    
    // Leverage Metrics
    const loanToValue = propValue > 0 ? (loanAmount / propValue) * 100 : 0
    const debtToEquity = down > 0 ? loanAmount / down : 0
    const equityMultiple = down > 0 ? propValue / down : 0
    
    // Return Metrics
    const annualAppreciation = propValue * appRate
    const totalAnnualReturn = annualCashFlow + annualAppreciation
    const totalROI = down > 0 ? (totalAnnualReturn / down) * 100 : 0
    const returnOnEquity = (propValue - loanAmount) > 0 ? (annualCashFlow / (propValue - loanAmount)) * 100 : 0
    
    // Risk Metrics
    const debtServiceCoverageRatio = (mortgage * 12) > 0 ? netOperatingIncome / (mortgage * 12) : 0
    const breakEvenRatio = rent > 0 ? (monthlyExpenses / rent) * 100 : 0
    const vacancyBuffer = rent > 0 ? ((effectiveMonthlyRent - monthlyExpenses) / rent) * 100 : 0
    
    // Risk Score (0-100, lower is better)
    let riskScore = 0
    if (cashOnCashReturn < 5) riskScore += 20
    if (debtServiceCoverageRatio < 1.25) riskScore += 20
    if (loanToValue > 80) riskScore += 15
    if (vacancyBuffer < 10) riskScore += 15
    if (capRate < 4) riskScore += 15
    if (breakEvenRatio > 90) riskScore += 15
    
    // Efficiency Metrics
    const pricePerSquareFoot = sqft > 0 ? purchPrice / sqft : 0
    const rentPerSquareFoot = sqft > 0 ? (rent * 12) / sqft : 0
    const operatingEfficiency = annualRent > 0 ? ((annualRent - (annualExpenses - mortgage * 12)) / annualRent) * 100 : 0
    
    // IRR approximation (simplified)
    const internalRateOfReturn = down > 0 ? ((totalAnnualReturn / down) * 100) : 0

    const metrics: PropertyMetrics = {
      propertyValue: propValue,
      purchasePrice: purchPrice,
      downPayment: down,
      loanAmount,
      monthlyRent: effectiveMonthlyRent,
      annualRent,
      grossRentMultiplier,
      monthlyExpenses,
      annualExpenses,
      expenseRatio,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCashReturn,
      capRate,
      netOperatingIncome,
      debtServiceCoverageRatio,
      loanToValue,
      debtToEquity,
      equityMultiple,
      totalROI,
      internalRateOfReturn,
      returnOnEquity,
      breakEvenRatio,
      vacancyBuffer,
      riskScore,
      pricePerSquareFoot,
      rentPerSquareFoot,
      operatingEfficiency
    }

    setResults(metrics)
  }, [propertyValue, purchasePrice, downPayment, monthlyRent, propertyTax, insurance, maintenance, propertyManagement, utilities, otherExpenses, mortgagePayment, vacancy, squareFootage, appreciationRate])

  useEffect(() => {
    calculateMetrics()
  }, [calculateMetrics])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`
  }

  const formatRatio = (value: number) => {
    return `${value.toFixed(2)}`
  }

  // Data for charts
  const keyMetricsData = results ? [
    { name: 'Cash-on-Cash', value: results.cashOnCashReturn, benchmark: 8, color: '#22c55e' },
    { name: 'Cap Rate', value: results.capRate, benchmark: 6, color: '#3b82f6' },
    { name: 'Total ROI', value: results.totalROI, benchmark: 12, color: '#8b5cf6' },
    { name: 'ROE', value: results.returnOnEquity, benchmark: 10, color: '#f59e0b' }
  ] : []

  const riskMetricsData = results ? [
    { metric: 'DSCR', value: results.debtServiceCoverageRatio, fullMark: 2 },
    { metric: 'LTV', value: results.loanToValue / 100, fullMark: 1 },
    { metric: 'Vacancy Buffer', value: results.vacancyBuffer / 100, fullMark: 1 },
    { metric: 'Break-even', value: (100 - results.breakEvenRatio) / 100, fullMark: 1 },
    { metric: 'Cash Flow', value: results.cashOnCashReturn / 20, fullMark: 1 }
  ] : []

  const cashFlowBreakdown = results ? [
    { name: 'Rental Income', value: results.monthlyRent, color: '#22c55e' },
    { name: 'Operating Expenses', value: results.monthlyExpenses - parseFloat(mortgagePayment), color: '#f59e0b' },
    { name: 'Debt Service', value: parseFloat(mortgagePayment), color: '#ef4444' },
    { name: 'Net Cash Flow', value: results.monthlyCashFlow, color: '#3b82f6' }
  ] : []

  const leverageAnalysis = results ? [
    { name: 'Equity', value: results.propertyValue - results.loanAmount, color: '#22c55e' },
    { name: 'Debt', value: results.loanAmount, color: '#ef4444' }
  ] : []

  const performanceComparison = results ? [
    { category: 'Excellent', cashOnCash: 12, capRate: 8, totalROI: 18 },
    { category: 'Good', cashOnCash: 8, capRate: 6, totalROI: 14 },
    { category: 'Fair', cashOnCash: 5, capRate: 4, totalROI: 10 },
    { category: 'Your Property', cashOnCash: results.cashOnCashReturn, capRate: results.capRate, totalROI: results.totalROI }
  ] : []

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-50' }
    if (score <= 40) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    if (score <= 60) return { level: 'High', color: 'text-orange-600', bg: 'bg-orange-50' }
    return { level: 'Very High', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const getMetricStatus = (value: number, benchmark: number) => {
    if (value >= benchmark) return { status: 'Good', color: 'text-green-600' }
    if (value >= benchmark * 0.8) return { status: 'Fair', color: 'text-yellow-600' }
    return { status: 'Poor', color: 'text-red-600' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Property Investment Metrics Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of your real estate investment performance and risk metrics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Property Details
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your investment property information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Property Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertyValue" className="text-sm font-medium">Current Property Value</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="text-lg"
                      placeholder="500000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purchasePrice" className="text-sm font-medium">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="text-lg"
                      placeholder="450000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="text-sm font-medium">Down Payment</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="text-lg"
                      placeholder="90000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="squareFootage" className="text-sm font-medium">Square Footage</Label>
                    <Input
                      id="squareFootage"
                      type="number"
                      value={squareFootage}
                      onChange={(e) => setSquareFootage(e.target.value)}
                      className="text-lg"
                      placeholder="2000"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Income & Expenses</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRent" className="text-sm font-medium">Monthly Rent</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      className="text-lg"
                      placeholder="3500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vacancy" className="text-sm font-medium">Vacancy Rate (%)</Label>
                    <Select value={vacancy} onValueChange={setVacancy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vacancy rate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0%</SelectItem>
                        <SelectItem value="3">3%</SelectItem>
                        <SelectItem value="5">5%</SelectItem>
                        <SelectItem value="8">8%</SelectItem>
                        <SelectItem value="10">10%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyTax" className="text-sm font-medium">Annual Property Tax</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="text-lg"
                      placeholder="6000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insurance" className="text-sm font-medium">Annual Insurance</Label>
                    <Input
                      id="insurance"
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="text-lg"
                      placeholder="1500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maintenance" className="text-sm font-medium">Annual Maintenance</Label>
                    <Input
                      id="maintenance"
                      type="number"
                      value={maintenance}
                      onChange={(e) => setMaintenance(e.target.value)}
                      className="text-lg"
                      placeholder="3000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyManagement" className="text-sm font-medium">Property Management (%)</Label>
                    <Select value={propertyManagement} onValueChange={setPropertyManagement}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select management fee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0% (Self-managed)</SelectItem>
                        <SelectItem value="6">6%</SelectItem>
                        <SelectItem value="8">8%</SelectItem>
                        <SelectItem value="10">10%</SelectItem>
                        <SelectItem value="12">12%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="utilities" className="text-sm font-medium">Annual Utilities</Label>
                    <Input
                      id="utilities"
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(e.target.value)}
                      className="text-lg"
                      placeholder="800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherExpenses" className="text-sm font-medium">Other Annual Expenses</Label>
                    <Input
                      id="otherExpenses"
                      type="number"
                      value={otherExpenses}
                      onChange={(e) => setOtherExpenses(e.target.value)}
                      className="text-lg"
                      placeholder="1200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mortgagePayment" className="text-sm font-medium">Monthly Mortgage Payment</Label>
                    <Input
                      id="mortgagePayment"
                      type="number"
                      value={mortgagePayment}
                      onChange={(e) => setMortgagePayment(e.target.value)}
                      className="text-lg"
                      placeholder="2100"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Market Assumptions</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="6.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appreciationRate" className="text-sm font-medium">Annual Appreciation (%)</Label>
                    <Input
                      id="appreciationRate"
                      type="number"
                      step="0.1"
                      value={appreciationRate}
                      onChange={(e) => setAppreciationRate(e.target.value)}
                      className="text-lg"
                      placeholder="3"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateMetrics}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                >
                  Analyze Investment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-6">
            {results && (
              <>
                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100 text-sm">Cash-on-Cash Return</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.cashOnCashReturn)}</p>
                          <p className="text-xs text-green-200">Target: 8%+</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Cap Rate</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.capRate)}</p>
                          <p className="text-xs text-blue-200">Target: 6%+</p>
                        </div>
                        <Target className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Monthly Cash Flow</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.monthlyCashFlow)}</p>
                          <p className="text-xs text-purple-200">Net income</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`bg-gradient-to-br ${getRiskLevel(results.riskScore).level === 'Low' ? 'from-green-500 to-green-600' : getRiskLevel(results.riskScore).level === 'Moderate' ? 'from-yellow-500 to-yellow-600' : 'from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${getRiskLevel(results.riskScore).level === 'Low' ? 'text-green-100' : getRiskLevel(results.riskScore).level === 'Moderate' ? 'text-yellow-100' : 'text-red-100'} text-sm`}>Risk Score</p>
                          <p className="text-2xl font-bold">{results.riskScore.toFixed(0)}/100</p>
                          <p className={`text-xs ${getRiskLevel(results.riskScore).level === 'Low' ? 'text-green-200' : getRiskLevel(results.riskScore).level === 'Moderate' ? 'text-yellow-200' : 'text-red-200'}`}>{getRiskLevel(results.riskScore).level} Risk</p>
                        </div>
                        <AlertCircle className={`h-8 w-8 ${getRiskLevel(results.riskScore).level === 'Low' ? 'text-green-200' : getRiskLevel(results.riskScore).level === 'Moderate' ? 'text-yellow-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="returns">Returns</TabsTrigger>
                    <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
                    <TabsTrigger value="leverage">Leverage</TabsTrigger>
                    <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={keyMetricsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `${value.toFixed(1)}%`} />
                                <Tooltip formatter={(value: number) => [formatPercentage(value), '']} />
                                <Bar dataKey="value" fill="#3b82f6" />
                                <Bar dataKey="benchmark" fill="#22c55e" opacity={0.3} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Cash Flow Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={cashFlowBreakdown}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} />
                                <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                                <Bar dataKey="value" fill="#3b82f6" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Investment Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Property Details</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Current Value:</span>
                                <span className="font-medium">{formatCurrency(results.propertyValue)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Purchase Price:</span>
                                <span className="font-medium">{formatCurrency(results.purchasePrice)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Down Payment:</span>
                                <span className="font-medium">{formatCurrency(results.downPayment)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Loan Amount:</span>
                                <span className="font-medium">{formatCurrency(results.loanAmount)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Price/Sq Ft:</span>
                                <span className="font-medium">${results.pricePerSquareFoot.toFixed(0)}</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Income Analysis</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Monthly Rent:</span>
                                <span className="font-medium">{formatCurrency(results.monthlyRent)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Annual Rent:</span>
                                <span className="font-medium">{formatCurrency(results.annualRent)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Rent/Sq Ft:</span>
                                <span className="font-medium">${results.rentPerSquareFoot.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>GRM:</span>
                                <span className="font-medium">{formatRatio(results.grossRentMultiplier)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>NOI:</span>
                                <span className="font-medium">{formatCurrency(results.netOperatingIncome)}</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Performance Metrics</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Cash-on-Cash:</span>
                                <span className={`font-medium ${getMetricStatus(results.cashOnCashReturn, 8).color}`}>
                                  {formatPercentage(results.cashOnCashReturn)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Cap Rate:</span>
                                <span className={`font-medium ${getMetricStatus(results.capRate, 6).color}`}>
                                  {formatPercentage(results.capRate)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Total ROI:</span>
                                <span className={`font-medium ${getMetricStatus(results.totalROI, 12).color}`}>
                                  {formatPercentage(results.totalROI)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>ROE:</span>
                                <span className="font-medium">{formatPercentage(results.returnOnEquity)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>IRR:</span>
                                <span className="font-medium">{formatPercentage(results.internalRateOfReturn)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="returns" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Performance vs Benchmarks</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={performanceComparison}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis tickFormatter={(value) => `${value}%`} />
                                <Tooltip formatter={(value: number) => [formatPercentage(value), '']} />
                                <Legend />
                                <Bar dataKey="cashOnCash" fill="#22c55e" name="Cash-on-Cash" />
                                <Bar dataKey="capRate" fill="#3b82f6" name="Cap Rate" />
                                <Bar dataKey="totalROI" fill="#8b5cf6" name="Total ROI" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Return Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{formatPercentage(results.cashOnCashReturn)}</p>
                              <p className="text-sm text-gray-600">Cash-on-Cash Return</p>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{formatPercentage(results.capRate)}</p>
                              <p className="text-sm text-gray-600">Cap Rate</p>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <p className="text-2xl font-bold text-purple-600">{formatPercentage(results.totalROI)}</p>
                              <p className="text-sm text-gray-600">Total ROI</p>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                              <p className="text-2xl font-bold text-orange-600">{formatPercentage(results.returnOnEquity)}</p>
                              <p className="text-sm text-gray-600">Return on Equity</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Return Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Return Metrics Explained:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• <strong>Cash-on-Cash:</strong> Annual cash flow ÷ initial cash invested</li>
                              <li>• <strong>Cap Rate:</strong> NOI ÷ property value (unlevered return)</li>
                              <li>• <strong>Total ROI:</strong> Includes cash flow + appreciation</li>
                              <li>• <strong>ROE:</strong> Return on your equity in the property</li>
                              <li>• <strong>IRR:</strong> Internal rate of return over time</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Performance Assessment:</h4>
                            <div className="space-y-2">
                              <div className={`p-2 rounded ${getMetricStatus(results.cashOnCashReturn, 8).color === 'text-green-600' ? 'bg-green-50' : getMetricStatus(results.cashOnCashReturn, 8).color === 'text-yellow-600' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                                <p className={`text-sm ${getMetricStatus(results.cashOnCashReturn, 8).color}`}>
                                  Cash-on-Cash: {getMetricStatus(results.cashOnCashReturn, 8).status}
                                </p>
                              </div>
                              <div className={`p-2 rounded ${getMetricStatus(results.capRate, 6).color === 'text-green-600' ? 'bg-green-50' : getMetricStatus(results.capRate, 6).color === 'text-yellow-600' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                                <p className={`text-sm ${getMetricStatus(results.capRate, 6).color}`}>
                                  Cap Rate: {getMetricStatus(results.capRate, 6).status}
                                </p>
                              </div>
                              <div className={`p-2 rounded ${getMetricStatus(results.totalROI, 12).color === 'text-green-600' ? 'bg-green-50' : getMetricStatus(results.totalROI, 12).color === 'text-yellow-600' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                                <p className={`text-sm ${getMetricStatus(results.totalROI, 12).color}`}>
                                  Total ROI: {getMetricStatus(results.totalROI, 12).status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="risk" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Risk Assessment Radar</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <RadarChart data={riskMetricsData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="metric" />
                                <PolarRadiusAxis angle={90} domain={[0, 'dataMax']} />
                                <Radar
                                  name="Risk Metrics"
                                  dataKey="value"
                                  stroke="#3b82f6"
                                  fill="#3b82f6"
                                  fillOpacity={0.3}
                                />
                              </RadarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Risk Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Debt Service Coverage Ratio</span>
                              <span className={`font-bold ${results.debtServiceCoverageRatio >= 1.25 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatRatio(results.debtServiceCoverageRatio)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Loan-to-Value Ratio</span>
                              <span className={`font-bold ${results.loanToValue <= 80 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.loanToValue)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Break-Even Ratio</span>
                              <span className={`font-bold ${results.breakEvenRatio <= 85 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.breakEvenRatio)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">Vacancy Buffer</span>
                              <span className={`font-bold ${results.vacancyBuffer >= 10 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatPercentage(results.vacancyBuffer)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          Risk Analysis Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`p-4 rounded-lg ${getRiskLevel(results.riskScore).bg}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`text-2xl font-bold ${getRiskLevel(results.riskScore).color}`}>
                              {getRiskLevel(results.riskScore).level} Risk
                            </div>
                            <div className="text-lg">
                              Score: {results.riskScore.toFixed(0)}/100
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-semibold mb-2">Risk Factors:</h4>
                              <ul className="space-y-1">
                                {results.cashOnCashReturn < 5 && <li>• Low cash-on-cash return</li>}
                                {results.debtServiceCoverageRatio < 1.25 && <li>• Low debt service coverage</li>}
                                {results.loanToValue > 80 && <li>• High loan-to-value ratio</li>}
                                {results.vacancyBuffer < 10 && <li>• Low vacancy buffer</li>}
                                {results.capRate < 4 && <li>• Low cap rate</li>}
                                {results.breakEvenRatio > 90 && <li>• High break-even ratio</li>}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Recommendations:</h4>
                              <ul className="space-y-1">
                                {results.riskScore > 60 && <li>• Consider alternative properties</li>}
                                {results.debtServiceCoverageRatio < 1.25 && <li>• Increase down payment</li>}
                                {results.vacancyBuffer < 10 && <li>• Build larger cash reserves</li>}
                                {results.cashOnCashReturn < 5 && <li>• Negotiate better terms</li>}
                                <li>• Monitor market conditions</li>
                                <li>• Consider professional management</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leverage" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Equity vs Debt</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={leverageAnalysis}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {leverageAnalysis.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Leverage Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{formatPercentage(results.loanToValue)}</p>
                              <p className="text-sm text-gray-600">Loan-to-Value</p>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{formatRatio(results.debtToEquity)}</p>
                              <p className="text-sm text-gray-600">Debt-to-Equity</p>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                              <p className="text-2xl font-bold text-purple-600">{formatRatio(results.equityMultiple)}</p>
                              <p className="text-sm text-gray-600">Equity Multiple</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Leverage Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Current Leverage Position</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Property Value:</span>
                                <span className="font-medium">{formatCurrency(results.propertyValue)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Loan Amount:</span>
                                <span className="font-medium">{formatCurrency(results.loanAmount)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Your Equity:</span>
                                <span className="font-medium text-green-600">{formatCurrency(results.propertyValue - results.loanAmount)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>LTV Ratio:</span>
                                <span className={`font-medium ${results.loanToValue <= 80 ? 'text-green-600' : 'text-red-600'}`}>
                                  {formatPercentage(results.loanToValue)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Leverage Impact</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-2 rounded ${results.loanToValue <= 80 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>LTV Assessment:</strong> {results.loanToValue <= 80 ? 'Conservative leverage' : 'High leverage - higher risk'}
                              </div>
                              <div className="p-2 bg-blue-50 text-blue-700 rounded">
                                <strong>Equity Multiple:</strong> Every $1 of equity controls ${results.equityMultiple.toFixed(2)} of property
                              </div>
                              <div className="p-2 bg-purple-50 text-purple-700 rounded">
                                <strong>Leverage Effect:</strong> {results.debtToEquity > 3 ? 'High leverage amplifies returns and risks' : 'Moderate leverage provides balanced risk/return'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="efficiency" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Operating Efficiency</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-blue-600">
                              {formatPercentage(results.operatingEfficiency)}
                            </p>
                            <p className="text-sm text-gray-600">NOI / Gross Income</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Expense Ratio</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className={`text-3xl font-bold ${results.expenseRatio <= 50 ? 'text-green-600' : results.expenseRatio <= 65 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {formatPercentage(results.expenseRatio)}
                            </p>
                            <p className="text-sm text-gray-600">Expenses / Gross Income</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Rent Multiplier</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className={`text-3xl font-bold ${results.grossRentMultiplier <= 12 ? 'text-green-600' : results.grossRentMultiplier <= 15 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {formatRatio(results.grossRentMultiplier)}
                            </p>
                            <p className="text-sm text-gray-600">Price / Annual Rent</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Efficiency Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Property Efficiency Metrics</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span>Price per Sq Ft</span>
                                <span className="font-medium">${results.pricePerSquareFoot.toFixed(0)}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span>Rent per Sq Ft</span>
                                <span className="font-medium">${results.rentPerSquareFoot.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span>Operating Efficiency</span>
                                <span className={`font-medium ${results.operatingEfficiency >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                                  {formatPercentage(results.operatingEfficiency)}
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span>Expense Ratio</span>
                                <span className={`font-medium ${results.expenseRatio <= 50 ? 'text-green-600' : results.expenseRatio <= 65 ? 'text-yellow-600' : 'text-red-600'}`}>
                                  {formatPercentage(results.expenseRatio)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Efficiency Assessment</h4>
                            <div className="space-y-2 text-sm">
                              <div className={`p-3 rounded ${results.operatingEfficiency >= 60 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Operating Efficiency:</strong> {results.operatingEfficiency >= 60 ? 'Good - efficient operations' : 'Poor - high operating costs'}
                              </div>
                              <div className={`p-3 rounded ${results.expenseRatio <= 50 ? 'bg-green-50 text-green-700' : results.expenseRatio <= 65 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Expense Control:</strong> {results.expenseRatio <= 50 ? 'Excellent expense management' : results.expenseRatio <= 65 ? 'Moderate expense control' : 'High expenses need attention'}
                              </div>
                              <div className={`p-3 rounded ${results.grossRentMultiplier <= 12 ? 'bg-green-50 text-green-700' : results.grossRentMultiplier <= 15 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
                                <strong>Value Assessment:</strong> {results.grossRentMultiplier <= 12 ? 'Good value - quick payback' : results.grossRentMultiplier <= 15 ? 'Fair value' : 'Expensive - long payback'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="h-6 w-6 mr-3" />
                Advanced Guide to Investment Property Analysis
              </CardTitle>
              <CardDescription>
                Master the key metrics and strategies for successful real estate investing.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <Tabs defaultValue="metrics" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="metrics">Core Metrics</TabsTrigger>
                  <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                  <TabsTrigger value="leverage">Leverage & Financing</TabsTrigger>
                  <TabsTrigger value="efficiency">Efficiency Ratios</TabsTrigger>
                  <TabsTrigger value="market">Market Analysis</TabsTrigger>
                </TabsList>
                <TabsContent value="metrics" className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Understanding Core Investment Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Net Operating Income (NOI)</h4>
                        <p className="text-gray-700 mb-3">
                          NOI is the foundation of property valuation and analysis. It represents the property&apos;s income after all operating expenses but before debt service (mortgage payments) and income taxes.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Gross Rental Income - Operating Expenses</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Capitalization Rate (Cap Rate)</h4>
                        <p className="text-gray-700 mb-3">
                          The Cap Rate is a measure of a property's unleveraged rate of return. It's used to compare the profitability of different investments. A higher Cap Rate generally indicates a higher return, but also potentially higher risk.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Net Operating Income / Property Purchase Price</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Cash-on-Cash Return</h4>
                        <p className="text-gray-700 mb-3">
                          This metric measures the annual return on the actual cash invested. It's a powerful indicator of a leveraged investment's performance.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Annual Cash Flow / Total Cash Invested</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="risk" className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Risk Assessment Ratios</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Debt Service Coverage Ratio (DSCR)</h4>
                        <p className="text-gray-700 mb-3">
                          Lenders use DSCR to determine if a property's cash flow is sufficient to cover its debt payments. A DSCR above 1.25 is generally considered good.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Net Operating Income / Total Debt Service</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Break-Even Ratio (BER)</h4>
                        <p className="text-gray-700 mb-3">
                          The BER indicates the percentage of gross income that is consumed by operating expenses and debt service. A lower BER is better, as it signifies a lower-risk investment.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> (Operating Expenses + Debt Service) / Gross Operating Income</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Loan-to-Value (LTV)</h4>
                        <p className="text-gray-700 mb-3">
                          LTV is a measure of financial leverage. A higher LTV means higher leverage and potentially higher risk, as there is less equity in the property.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Loan Amount / Property Value</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="leverage" className="mt-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Using Leverage in Real Estate</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Power of Leverage</h4>
                        <p className="text-gray-700 mb-3">
                          Leverage is the use of borrowed capital to increase the potential return of an investment. In real estate, this typically means using a mortgage to purchase a property. While leverage can amplify returns, it also increases risk.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Financing Options</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Conventional Mortgages:</strong> The most common type of financing, typically requiring a 20-25% down payment for investment properties.</li>
                          <li><strong>FHA Loans:</strong> Government-insured loans that allow for lower down payments, but may have stricter requirements.</li>
                          <li><strong>Hard Money Loans:</strong> Short-term, high-interest loans from private investors, often used for fix-and-flip projects.</li>
                          <li><strong>Seller Financing:</strong> An arrangement where the seller of the property provides financing to the buyer.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="efficiency" className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Measuring Operational Efficiency</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Expense Ratio</h4>
                        <p className="text-gray-700 mb-3">
                          The Expense Ratio shows the percentage of a property's gross income that is consumed by operating expenses. A lower ratio indicates better profitability.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Total Operating Expenses / Gross Operating Income</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Operating Efficiency Ratio</h4>
                        <p className="text-gray-700 mb-3">
                          This ratio is the inverse of the Expense Ratio and shows the percentage of gross income that is available as Net Operating Income. A higher ratio is better.
                        </p>
                        <p className="text-sm bg-gray-100 p-2 rounded"><strong>Formula:</strong> Net Operating Income / Gross Operating Income</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="market" className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Analyzing the Real Estate Market</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Key Market Indicators</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Job Growth:</strong> A strong job market attracts new residents and increases demand for housing.</li>
                          <li><strong>Population Growth:</strong> Growing populations lead to increased demand for both rental and for-sale properties.</li>
                          <li><strong>Median Home Prices:</strong> Tracking price trends can help you identify appreciating markets.</li>
                          <li><strong>Vacancy Rates:</strong> Low vacancy rates indicate strong demand for rental properties.</li>
                          <li><strong>New Construction:</strong> An increase in construction can be a sign of a growing market, but overbuilding can lead to a surplus of inventory.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Finding Comps</h4>
                        <p className="text-gray-700 mb-3">
                          "Comps," or comparable properties, are recently sold properties that are similar to the one you are considering. Analyzing comps can help you determine a property's fair market value.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}