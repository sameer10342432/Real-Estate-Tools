'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { TrendingUp, DollarSign, PieChart as PieChartIcon, BarChart3, AlertCircle, Info, Target, Calculator as CalculatorIcon } from 'lucide-react'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CASH_ON_CASH_RETURN_CALCULATOR_CONTENT } from '@/content/tools/cash-on-cash-return-calculator';

interface CashOnCashAnalysis {
  totalCashInvested: number
  annualCashFlow: number
  cashOnCashReturn: number
  monthlyRent: number
  monthlyExpenses: number
  monthlyCashFlow: number
  capRate: number
  totalROI: number
  paybackPeriod: number
  leverageRatio: number
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cash-on-Cash Return Calculator',
    description: 'Calculate cash-on-cash returns for leveraged investments. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function CashOnCashReturnCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>('400000')
  const [downPayment, setDownPayment] = useState<string>('80000')
  const [closingCosts, setClosingCosts] = useState<string>('8000')
  const [renovationCosts, setRenovationCosts] = useState<string>('15000')
  const [monthlyRent, setMonthlyRent] = useState<string>('3200')
  const [vacancy, setVacancy] = useState<string>('5')
  const [propertyTax, setPropertyTax] = useState<string>('4800')
  const [insurance, setInsurance] = useState<string>('1200')
  const [maintenance, setMaintenance] = useState<string>('2400')
  const [propertyManagement, setPropertyManagement] = useState<string>('8')
  const [utilities, setUtilities] = useState<string>('600')
  const [otherExpenses, setOtherExpenses] = useState<string>('1200')
  const [mortgagePayment, setMortgagePayment] = useState<string>('1800')
  const [results, setResults] = useState<CashOnCashAnalysis | null>(null)

  const calculateCashOnCash = useCallback(() => {
    const price = parseFloat(purchasePrice) || 0
    const down = parseFloat(downPayment) || 0
    const closing = parseFloat(closingCosts) || 0
    const renovation = parseFloat(renovationCosts) || 0
    const rent = parseFloat(monthlyRent) || 0
    const vacancyRate = parseFloat(vacancy) / 100 || 0
    const tax = parseFloat(propertyTax) / 12 || 0
    const ins = parseFloat(insurance) / 12 || 0
    const maint = parseFloat(maintenance) / 12 || 0
    const mgmtRate = parseFloat(propertyManagement) / 100 || 0
    const util = parseFloat(utilities) / 12 || 0
    const other = parseFloat(otherExpenses) / 12 || 0
    const mortgage = parseFloat(mortgagePayment) || 0

    // Total cash invested
    const totalCashInvested = down + closing + renovation

    // Monthly calculations
    const effectiveMonthlyRent = rent * (1 - vacancyRate)
    const managementFee = rent * mgmtRate
    const monthlyExpenses = tax + ins + maint + managementFee + util + other + mortgage
    const monthlyCashFlow = effectiveMonthlyRent - monthlyExpenses

    // Annual calculations
    const annualCashFlow = monthlyCashFlow * 12

    // Cash-on-Cash Return
    const cashOnCashReturn = totalCashInvested > 0 ? (annualCashFlow / totalCashInvested) * 100 : 0

    // Cap Rate (without financing)
    const annualNOI = (rent * 12 * (1 - vacancyRate)) - ((tax + ins + maint + managementFee + util + other) * 12)
    const capRate = price > 0 ? (annualNOI / price) * 100 : 0

    // Total ROI (including appreciation - assuming 3% annual)
    const appreciationRate = 0.03
    const annualAppreciation = price * appreciationRate
    const totalAnnualReturn = annualCashFlow + annualAppreciation
    const totalROI = totalCashInvested > 0 ? (totalAnnualReturn / totalCashInvested) * 100 : 0

    // Payback period
    const paybackPeriod = annualCashFlow > 0 ? totalCashInvested / annualCashFlow : 0

    // Leverage ratio
    const loanAmount = price - down
    const leverageRatio = totalCashInvested > 0 ? loanAmount / totalCashInvested : 0

    const analysis: CashOnCashAnalysis = {
      totalCashInvested,
      annualCashFlow,
      cashOnCashReturn,
      monthlyRent: effectiveMonthlyRent,
      monthlyExpenses,
      monthlyCashFlow,
      capRate,
      totalROI,
      paybackPeriod,
      leverageRatio
    }

    setResults(analysis)
  }, [purchasePrice, downPayment, closingCosts, renovationCosts, monthlyRent, vacancy, propertyTax, insurance, maintenance, propertyManagement, utilities, otherExpenses, mortgagePayment])

  useEffect(() => {
    calculateCashOnCash()
  }, [calculateCashOnCash])

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

  // Data for charts
  const cashFlowBreakdown = results ? [
    { name: 'Rental Income', value: results.monthlyRent, color: '#22c55e' },
    { name: 'Total Expenses', value: results.monthlyExpenses, color: '#ef4444' },
    { name: 'Net Cash Flow', value: results.monthlyCashFlow, color: '#3b82f6' }
  ] : []

  const expenseBreakdown = results ? [
    { name: 'Mortgage Payment', value: parseFloat(mortgagePayment), color: '#3b82f6' },
    { name: 'Property Tax', value: parseFloat(propertyTax) / 12, color: '#f59e0b' },
    { name: 'Insurance', value: parseFloat(insurance) / 12, color: '#ef4444' },
    { name: 'Maintenance', value: parseFloat(maintenance) / 12, color: '#8b5cf6' },
    { name: 'Management', value: parseFloat(monthlyRent) * parseFloat(propertyManagement) / 100, color: '#06b6d4' },
    { name: 'Utilities', value: parseFloat(utilities) / 12, color: '#84cc16' },
    { name: 'Other', value: parseFloat(otherExpenses) / 12, color: '#f97316' }
  ].filter(item => item.value > 0) : []

  const investmentBreakdown = results ? [
    { name: 'Down Payment', value: parseFloat(downPayment), color: '#3b82f6' },
    { name: 'Closing Costs', value: parseFloat(closingCosts), color: '#f59e0b' },
    { name: 'Renovation', value: parseFloat(renovationCosts), color: '#ef4444' }
  ].filter(item => item.value > 0) : []

  const returnComparison = results ? [
    { name: 'Cash-on-Cash Return', value: results.cashOnCashReturn, color: '#22c55e' },
    { name: 'Cap Rate', value: results.capRate, color: '#3b82f6' },
    { name: 'Total ROI', value: results.totalROI, color: '#8b5cf6' }
  ] : []

  const projectionYears = results ? Array.from({ length: 10 }, (_, i) => {
    const year = i + 1
    const cumulativeCashFlow = results.annualCashFlow * year
    const cumulativeAppreciation = parseFloat(purchasePrice) * 0.03 * year
    const totalReturn = cumulativeCashFlow + cumulativeAppreciation
    const totalROI = (totalReturn / results.totalCashInvested) * 100
    return {
      year,
      cumulativeCashFlow,
      cumulativeAppreciation,
      totalReturn,
      totalROI
    }
  }) : []

  return (
        <CalculatorLayout content={CASH_ON_CASH_RETURN_CALCULATOR_CONTENT}>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-green-600 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Cash-on-Cash Return Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze the cash-on-cash return and profitability of your real estate investment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CalculatorIcon className="h-5 w-5" />
                  Investment Details
                </CardTitle>
                <CardDescription className="text-green-100">
                  Enter your property investment information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Property Purchase</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="purchasePrice" className="text-sm font-medium">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="text-lg"
                      placeholder="400000"
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
                      placeholder="80000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closingCosts" className="text-sm font-medium">Closing Costs</Label>
                    <Input
                      id="closingCosts"
                      type="number"
                      value={closingCosts}
                      onChange={(e) => setClosingCosts(e.target.value)}
                      className="text-lg"
                      placeholder="8000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="renovationCosts" className="text-sm font-medium">Renovation Costs</Label>
                    <Input
                      id="renovationCosts"
                      type="number"
                      value={renovationCosts}
                      onChange={(e) => setRenovationCosts(e.target.value)}
                      className="text-lg"
                      placeholder="15000"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Rental Income</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="monthlyRent" className="text-sm font-medium">Monthly Rent</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      className="text-lg"
                      placeholder="3200"
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
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Operating Expenses</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="propertyTax" className="text-sm font-medium">Annual Property Tax</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      className="text-lg"
                      placeholder="4800"
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
                      placeholder="1200"
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
                      placeholder="2400"
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
                      placeholder="600"
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
                      placeholder="1800"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateCashOnCash}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-3"
                >
                  Calculate Returns
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {results && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className={`${results.cashOnCashReturn >= 8 ? 'bg-gradient-to-br from-green-500 to-green-600' : results.cashOnCashReturn >= 5 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' : 'bg-gradient-to-br from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.cashOnCashReturn >= 8 ? 'text-green-100' : results.cashOnCashReturn >= 5 ? 'text-yellow-100' : 'text-red-100'} text-sm`}>Cash-on-Cash Return</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.cashOnCashReturn)}</p>
                        </div>
                        <TrendingUp className={`h-8 w-8 ${results.cashOnCashReturn >= 8 ? 'text-green-200' : results.cashOnCashReturn >= 5 ? 'text-yellow-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Monthly Cash Flow</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.monthlyCashFlow)}</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Total Cash Invested</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.totalCashInvested)}</p>
                        </div>
                        <Target className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100 text-sm">Cap Rate</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.capRate)}</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-orange-200" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Analysis */}
                <Tabs defaultValue="cashflow" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
                    <TabsTrigger value="returns">Returns</TabsTrigger>
                    <TabsTrigger value="projections">Projections</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  </TabsList>

                  <TabsContent value="cashflow" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Expense Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={expenseBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {expenseBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Investment Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Initial Investment</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Purchase Price:</span>
                                <span className="font-medium">{formatCurrency(parseFloat(purchasePrice))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Down Payment:</span>
                                <span className="font-medium">{formatCurrency(parseFloat(downPayment))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Closing Costs:</span>
                                <span className="font-medium">{formatCurrency(parseFloat(closingCosts))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Renovation:</span>
                                <span className="font-medium">{formatCurrency(parseFloat(renovationCosts))}</span>
                              </div>
                              <div className="flex justify-between text-lg font-bold">
                                <span>Total Cash Invested:</span>
                                <span className="text-blue-600">{formatCurrency(results.totalCashInvested)}</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Monthly Cash Flow</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Gross Rent:</span>
                                <span className="font-medium">{formatCurrency(parseFloat(monthlyRent))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Effective Rent:</span>
                                <span className="font-medium">{formatCurrency(results.monthlyRent)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Total Expenses:</span>
                                <span className="font-medium text-red-600">{formatCurrency(results.monthlyExpenses)}</span>
                              </div>
                              <div className="flex justify-between text-lg font-bold">
                                <span>Net Cash Flow:</span>
                                <span className={`${results.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {formatCurrency(results.monthlyCashFlow)}
                                </span>
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
                          <CardTitle>Return Metrics Comparison</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={returnComparison}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `${value.toFixed(1)}%`} />
                                <Tooltip formatter={(value: number) => [formatPercentage(value), '']} />
                                <Bar dataKey="value" fill="#22c55e" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Initial Investment Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={investmentBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {investmentBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Cash-on-Cash Return</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className={`text-3xl font-bold ${results.cashOnCashReturn >= 8 ? 'text-green-600' : results.cashOnCashReturn >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {formatPercentage(results.cashOnCashReturn)}
                            </p>
                            <p className="text-sm text-gray-600">annual return</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Cap Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-blue-600">
                              {formatPercentage(results.capRate)}
                            </p>
                            <p className="text-sm text-gray-600">unlevered return</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Total ROI</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-purple-600">
                              {formatPercentage(results.totalROI)}
                            </p>
                            <p className="text-sm text-gray-600">with appreciation</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Payback Period</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-orange-600">
                              {results.paybackPeriod.toFixed(1)}
                            </p>
                            <p className="text-sm text-gray-600">years</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="projections" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>10-Year Investment Projection</CardTitle>
                        <CardDescription>
                          Projected returns including 3% annual appreciation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={projectionYears}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Legend />
                              <Line 
                                type="monotone" 
                                dataKey="cumulativeCashFlow" 
                                stroke="#22c55e" 
                                strokeWidth={3}
                                name="Cumulative Cash Flow"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="cumulativeAppreciation" 
                                stroke="#3b82f6" 
                                strokeWidth={2}
                                name="Cumulative Appreciation"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="totalReturn" 
                                stroke="#8b5cf6" 
                                strokeWidth={3}
                                name="Total Return"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">5-Year Projection</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Cash Flow:</span>
                              <span className="font-medium">{formatCurrency(results.annualCashFlow * 5)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Appreciation:</span>
                              <span className="font-medium">{formatCurrency(parseFloat(purchasePrice) * 0.03 * 5)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Return:</span>
                              <span className="text-green-600">{formatCurrency((results.annualCashFlow * 5) + (parseFloat(purchasePrice) * 0.03 * 5))}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">10-Year Projection</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Cash Flow:</span>
                              <span className="font-medium">{formatCurrency(results.annualCashFlow * 10)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Appreciation:</span>
                              <span className="font-medium">{formatCurrency(parseFloat(purchasePrice) * 0.03 * 10)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Return:</span>
                              <span className="text-green-600">{formatCurrency((results.annualCashFlow * 10) + (parseFloat(purchasePrice) * 0.03 * 10))}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">ROI at Year 10</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-green-600">
                              {formatPercentage(((results.annualCashFlow * 10) + (parseFloat(purchasePrice) * 0.03 * 10)) / results.totalCashInvested * 100)}
                            </p>
                            <p className="text-sm text-gray-600">total return on investment</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="analysis" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Investment Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className={`p-3 ${results.cashOnCashReturn >= 8 ? 'bg-green-50' : results.cashOnCashReturn >= 5 ? 'bg-yellow-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.cashOnCashReturn >= 8 ? 'text-green-700' : results.cashOnCashReturn >= 5 ? 'text-yellow-700' : 'text-red-700'}`}>
                                <strong>Cash-on-Cash Return:</strong> {formatPercentage(results.cashOnCashReturn)} 
                                {results.cashOnCashReturn >= 8 ? ' (Excellent)' : results.cashOnCashReturn >= 5 ? ' (Good)' : ' (Below Average)'}
                              </p>
                            </div>
                            <div className={`p-3 ${results.monthlyCashFlow >= 0 ? 'bg-green-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.monthlyCashFlow >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                <strong>Cash Flow:</strong> {formatCurrency(results.monthlyCashFlow)}/month
                                {results.monthlyCashFlow >= 0 ? ' (Positive)' : ' (Negative)'}
                              </p>
                            </div>
                            <div className={`p-3 ${results.capRate >= 6 ? 'bg-green-50' : results.capRate >= 4 ? 'bg-yellow-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.capRate >= 6 ? 'text-green-700' : results.capRate >= 4 ? 'text-yellow-700' : 'text-red-700'}`}>
                                <strong>Cap Rate:</strong> {formatPercentage(results.capRate)}
                                {results.capRate >= 6 ? ' (Good)' : results.capRate >= 4 ? ' (Fair)' : ' (Low)'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Investment Recommendations
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            {results.cashOnCashReturn < 5 && (
                              <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>Low Returns:</strong> Consider negotiating price or finding better rental rates.
                                </p>
                              </div>
                            )}
                            {results.monthlyCashFlow < 0 && (
                              <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>Negative Cash Flow:</strong> This property requires monthly contributions.
                                </p>
                              </div>
                            )}
                            {results.cashOnCashReturn >= 8 && results.monthlyCashFlow > 0 && (
                              <div className="p-3 bg-green-50 rounded-lg">
                                <p className="text-sm text-green-700">
                                  <strong>Excellent Investment:</strong> Strong returns with positive cash flow.
                                </p>
                              </div>
                            )}
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>Leverage Ratio:</strong> {results.leverageRatio.toFixed(2)}:1 debt-to-equity ratio.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Investment Benchmarks</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Good Investment Criteria:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Cash-on-Cash Return: 8%+ (Excellent)</li>
                              <li>• Cap Rate: 6%+ (Good market)</li>
                              <li>• Positive monthly cash flow</li>
                              <li>• 1% Rule: Rent ≥ 1% of purchase price</li>
                              <li>• Low vacancy rates in area</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Risk Factors to Consider:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Market conditions and trends</li>
                              <li>• Property condition and age</li>
                              <li>• Neighborhood quality and growth</li>
                              <li>• Local rental demand</li>
                              <li>• Your experience as landlord</li>
                            </ul>
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
<div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md prose lg:prose-xl">
    <h2>Understanding Cash-on-Cash Return</h2>
    <p>The Cash-on-Cash Return is a key metric for real estate investors to evaluate the performance of a rental property. It measures the annual pre-tax cash flow generated by the property relative to the total amount of cash invested. This metric is particularly useful because it focuses on the return on the actual cash invested, rather than the overall return on the property's value.</p>
    <h3>How to Calculate Cash-on-Cash Return</h3>
    <p>The formula for Cash-on-Cash Return is:</p>
    <p><strong>Cash-on-Cash Return = (Annual Pre-Tax Cash Flow / Total Cash Invested) x 100%</strong></p>
    <p>Where:</p>
    <ul>
        <li><strong>Annual Pre-Tax Cash Flow</strong> is the Gross Rental Income minus all operating expenses (including mortgage payments, property taxes, insurance, maintenance, etc.).</li>
        <li><strong>Total Cash Invested</strong> is the initial cash outlay to acquire the property, which includes the down payment, closing costs, and any initial renovation or repair costs.</li>
    </ul>
    <h3>Why is Cash-on-Cash Return Important?</h3>
    <p>
        <strong>1. Focus on Cash Flow:</strong> It provides a clear picture of the property's ability to generate positive cash flow from your investment.
    </p>
    <p>
        <strong>2. Performance Benchmark:</strong> It allows you to compare the performance of different real estate investments and other types of investments (like stocks or bonds).
    </p>
    <p>
        <strong>3. Impact of Leverage:</strong> This metric clearly shows how financing (leverage) can amplify your returns. A smaller down payment can lead to a higher cash-on-cash return, assuming the property generates positive cash flow.
    </p>
    <h3>What is a Good Cash-on-Cash Return?</h3>
    <p>A "good" cash-on-cash return can vary depending on the market, the type of property, and your investment goals. However, many investors aim for a return of 8% to 12% or higher. A return in this range is generally considered a strong indicator of a profitable investment.</p>
    <h3>Limitations of Cash-on-Cash Return</h3>
    <p>While it's a powerful metric, Cash-on-Cash Return doesn't account for:</p>
    <ul>
        <li><strong>Property Appreciation:</strong> The increase in the property's value over time.</li>
        <li><strong>Tax Benefits:</strong> Deductions for mortgage interest, property taxes, and depreciation.</li>
        <li><strong>Loan Principal Paydown:</strong> The equity you build as you pay down your mortgage.</li>
    </ul>
    <p>Therefore, it's essential to consider Cash-on-Cash Return in conjunction with other metrics like Capitalization Rate (Cap Rate) and Total Return on Investment (ROI) for a comprehensive analysis of your real estate investment.</p>
</div>
      </div>
    </div>
    </CalculatorLayout>
  )
}