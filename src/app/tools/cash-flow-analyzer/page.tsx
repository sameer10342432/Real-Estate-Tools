'use client'

import { useState, useCallback, useEffect } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calculator, 
  BarChart3, 
  PieChart, 
  AlertTriangle,
  CheckCircle,
  Info,
  BookOpen,
  Target,
  Calendar
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

interface PropertyData {
  purchasePrice: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  monthlyRent: number
  vacancy: number
  propertyTax: number
  insurance: number
  maintenance: number
  propertyManagement: number
  otherExpenses: number
  appreciation: number
}

interface CashFlowResults {
  monthlyIncome: number
  monthlyExpenses: number
  monthlyCashFlow: number
  annualCashFlow: number
  cashOnCashReturn: number
  capRate: number
  totalCashInvested: number
  breakEvenRent: number
  debtServiceCoverage: number
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cash Flow Analyzer',
    description: 'Analyze monthly cash flow from rental properties. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function CashFlowAnalyzer() {
  const [propertyData, setPropertyData] = useState<PropertyData>({
    purchasePrice: 300000,
    downPayment: 60000,
    loanAmount: 240000,
    interestRate: 6.5,
    loanTerm: 30,
    monthlyRent: 2500,
    vacancy: 5,
    propertyTax: 3600,
    insurance: 1200,
    maintenance: 1800,
    propertyManagement: 10,
    otherExpenses: 600,
    appreciation: 3
  })

  const [results, setResults] = useState<CashFlowResults>({
    monthlyIncome: 0,
    monthlyExpenses: 0,
    monthlyCashFlow: 0,
    annualCashFlow: 0,
    cashOnCashReturn: 0,
    capRate: 0,
    totalCashInvested: 0,
    breakEvenRent: 0,
    debtServiceCoverage: 0
  })

  const [projectionYears] = useState(10)

  const calculateCashFlow = useCallback(() => {
    const monthlyPrincipalInterest = calculateMonthlyPayment(
      propertyData.loanAmount,
      propertyData.interestRate / 100 / 12,
      propertyData.loanTerm * 12
    )

    const effectiveRent = propertyData.monthlyRent * (1 - propertyData.vacancy / 100)
    const monthlyPropertyTax = propertyData.propertyTax / 12
    const monthlyInsurance = propertyData.insurance / 12
    const monthlyMaintenance = propertyData.maintenance / 12
    const monthlyManagement = propertyData.monthlyRent * (propertyData.propertyManagement / 100)
    const monthlyOther = propertyData.otherExpenses / 12

    const monthlyExpenses = monthlyPrincipalInterest + monthlyPropertyTax + 
                           monthlyInsurance + monthlyMaintenance + monthlyManagement + monthlyOther

    const monthlyCashFlow = effectiveRent - monthlyExpenses
    const annualCashFlow = monthlyCashFlow * 12

    const totalCashInvested = propertyData.downPayment + (propertyData.purchasePrice * 0.03) // Closing costs estimate

    const cashOnCashReturn = totalCashInvested > 0 ? (annualCashFlow / totalCashInvested) * 100 : 0

    const annualRent = propertyData.monthlyRent * 12 * (1 - propertyData.vacancy / 100)
    const capRate = (annualRent - (propertyData.propertyTax + propertyData.insurance + 
                    propertyData.maintenance + propertyData.otherExpenses)) / propertyData.purchasePrice * 100

    const breakEvenRent = monthlyExpenses / (1 - propertyData.vacancy / 100)

    const debtServiceCoverage = effectiveRent / monthlyPrincipalInterest

    setResults({
      monthlyIncome: effectiveRent,
      monthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCashReturn,
      capRate,
      totalCashInvested,
      breakEvenRent,
      debtServiceCoverage
    })
  }, [propertyData])

  useEffect(() => {
    calculateCashFlow()
  }, [calculateCashFlow])

  const calculateMonthlyPayment = (principal: number, monthlyRate: number, numPayments: number) => {
    if (monthlyRate === 0) return principal / numPayments
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
           (Math.pow(1 + monthlyRate, numPayments) - 1)
  }

  const generateProjectionData = () => {
    const data = []
    let currentValue = propertyData.purchasePrice
    let cumulativeCashFlow = 0

    for (let year = 1; year <= projectionYears; year++) {
      cumulativeCashFlow += results.annualCashFlow
      currentValue *= (1 + propertyData.appreciation / 100)
      
      data.push({
        year,
        cashFlow: results.annualCashFlow,
        cumulativeCashFlow,
        propertyValue: currentValue,
        totalReturn: cumulativeCashFlow + (currentValue - propertyData.purchasePrice)
      })
    }
    return data
  }

  const projectionData = generateProjectionData()

  const handleInputChange = (field: keyof PropertyData, value: string) => {
    const numValue = parseFloat(value) || 0
    setPropertyData(prev => {
      const updated = { ...prev, [field]: numValue }
      if (field === 'purchasePrice' || field === 'downPayment') {
        updated.loanAmount = updated.purchasePrice - updated.downPayment
      }
      return updated
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cash Flow Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze rental property cash flow, returns, and long-term projections to make informed investment decisions.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="projections">Projections</TabsTrigger>
            <TabsTrigger value="guide">Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Property Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="purchasePrice">Purchase Price</Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        value={propertyData.purchasePrice}
                        onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downPayment">Down Payment</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={propertyData.downPayment}
                        onChange={(e) => handleInputChange('downPayment', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={propertyData.interestRate}
                        onChange={(e) => handleInputChange('interestRate', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanTerm">Loan Term (years)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={propertyData.loanTerm}
                        onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Income & Expenses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={propertyData.monthlyRent}
                        onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="vacancy">Vacancy Rate (%)</Label>
                      <Input
                        id="vacancy"
                        type="number"
                        step="0.1"
                        value={propertyData.vacancy}
                        onChange={(e) => handleInputChange('vacancy', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyTax">Annual Property Tax</Label>
                      <Input
                        id="propertyTax"
                        type="number"
                        value={propertyData.propertyTax}
                        onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="insurance">Annual Insurance</Label>
                      <Input
                        id="insurance"
                        type="number"
                        value={propertyData.insurance}
                        onChange={(e) => handleInputChange('insurance', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maintenance">Annual Maintenance</Label>
                      <Input
                        id="maintenance"
                        type="number"
                        value={propertyData.maintenance}
                        onChange={(e) => handleInputChange('maintenance', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyManagement">Property Management (%)</Label>
                      <Input
                        id="propertyManagement"
                        type="number"
                        step="0.1"
                        value={propertyData.propertyManagement}
                        onChange={(e) => handleInputChange('propertyManagement', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="results">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Cash Flow</p>
                      <p className={`text-2xl font-bold ${results.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${results.monthlyCashFlow.toLocaleString()}
                      </p>
                    </div>
                    {results.monthlyCashFlow >= 0 ? 
                      <TrendingUp className="h-8 w-8 text-green-600" /> : 
                      <TrendingDown className="h-8 w-8 text-red-600" />
                    }
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cash-on-Cash Return</p>
                      <p className={`text-2xl font-bold ${results.cashOnCashReturn >= 8 ? 'text-green-600' : results.cashOnCashReturn >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {results.cashOnCashReturn.toFixed(1)}%
                      </p>
                    </div>
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cap Rate</p>
                      <p className={`text-2xl font-bold ${results.capRate >= 8 ? 'text-green-600' : results.capRate >= 6 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {results.capRate.toFixed(1)}%
                      </p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Break-Even Rent</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${results.breakEvenRent.toLocaleString()}
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-green-600">Effective Rent Income</span>
                      <span className="font-semibold">${results.monthlyIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-600">Total Expenses</span>
                      <span className="font-semibold">${results.monthlyExpenses.toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Net Cash Flow</span>
                      <span className={results.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}>
                        ${results.monthlyCashFlow.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Cash Invested</span>
                      <span className="font-semibold">${results.totalCashInvested.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Cash Flow</span>
                      <span className="font-semibold">${results.annualCashFlow.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Debt Service Coverage</span>
                      <span className="font-semibold">{results.debtServiceCoverage.toFixed(2)}x</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projections">
            <Card>
              <CardHeader>
                <CardTitle>10-Year Investment Projection</CardTitle>
                <CardDescription>
                  Projected cash flow and property value over time (assuming {propertyData.appreciation}% annual appreciation)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, '']} />
                      <Legend />
                      <Line type="monotone" dataKey="cumulativeCashFlow" stroke="#8884d8" name="Cumulative Cash Flow" />
                      <Line type="monotone" dataKey="propertyValue" stroke="#82ca9d" name="Property Value" />
                      <Line type="monotone" dataKey="totalReturn" stroke="#ffc658" name="Total Return" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Cash Flow Basics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What is Cash Flow?</h4>
                    <p className="text-sm text-gray-600">
                      Cash flow is the net amount of money flowing in and out of your rental property investment each month.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Positive vs Negative Cash Flow</h4>
                    <p className="text-sm text-gray-600">
                      Positive cash flow means you're making money each month, while negative cash flow means you're paying out of pocket.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Key Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cash-on-Cash Return</h4>
                    <p className="text-sm text-gray-600">
                      Annual cash flow divided by total cash invested. Good returns are typically 8-12%.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cap Rate</h4>
                    <p className="text-sm text-gray-600">
                      Net operating income divided by property value. Higher cap rates indicate better returns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Comprehensive Article Section */}
        <div className="mt-12 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Complete Guide to Real Estate Cash Flow Analysis
              </CardTitle>
              <p className="text-gray-600">
                Master the fundamentals of cash flow analysis to make informed real estate investment decisions
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">What is Cash Flow?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800">
                      Cash flow is the net amount of money flowing in and out of your rental property investment each month. 
                      It's calculated by subtracting all operating expenses from your rental income.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Why It Matters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">
                      Positive cash flow provides monthly income and indicates a profitable investment. 
                      It's essential for covering unexpected expenses and building wealth over time.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Understanding Cash Flow Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Income Sources</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Monthly rental income</li>
                        <li>• Parking fees</li>
                        <li>• Storage unit rentals</li>
                        <li>• Laundry income</li>
                        <li>• Pet fees</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Operating Expenses</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Mortgage payments (PITI)</li>
                        <li>• Property management fees</li>
                        <li>• Maintenance and repairs</li>
                        <li>• Vacancy allowance</li>
                        <li>• Insurance and utilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Types of Cash Flow Analysis</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-900">Before-Tax Cash Flow</h4>
                      <p className="text-gray-700 text-sm">
                        Net operating income minus debt service. This is your actual monthly cash in hand before considering tax implications.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-900">After-Tax Cash Flow</h4>
                      <p className="text-gray-700 text-sm">
                        Before-tax cash flow adjusted for tax benefits like depreciation and mortgage interest deductions.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-900">Levered vs. Unlevered</h4>
                      <p className="text-gray-700 text-sm">
                        Levered includes mortgage payments, while unlevered assumes all-cash purchase. Both have their analytical purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Improving Your Cash Flow</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">Increase Income</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Raise rents to market rates</li>
                          <li>• Add income streams (parking, storage)</li>
                          <li>• Reduce vacancy through better marketing</li>
                          <li>• Implement annual rent increases</li>
                          <li>• Charge appropriate fees</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-800">Reduce Expenses</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Refinance to lower interest rates</li>
                          <li>• Self-manage vs. property management</li>
                          <li>• Preventive maintenance programs</li>
                          <li>• Energy-efficient improvements</li>
                          <li>• Shop for better insurance rates</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Cash Flow Benchmarks</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$200+</div>
                        <div className="text-sm text-gray-600">Excellent monthly cash flow per unit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$50-$200</div>
                        <div className="text-sm text-gray-600">Good cash flow range</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">$0-$50</div>
                        <div className="text-sm text-gray-600">Break-even to minimal cash flow</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Common Cash Flow Mistakes</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Calculation Errors</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Forgetting vacancy allowance</li>
                          <li>• Underestimating maintenance costs</li>
                          <li>• Ignoring capital expenditures</li>
                          <li>• Using gross instead of net rents</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Planning Mistakes</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• No cash reserves for negative months</li>
                          <li>• Overestimating rental income</li>
                          <li>• Ignoring market rent trends</li>
                          <li>• Not accounting for rent control</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Advanced Cash Flow Strategies</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Value-Add Opportunities</h4>
                      <p className="text-blue-700 text-sm">
                        Look for properties where you can increase rents through improvements, better management, 
                        or market repositioning to boost cash flow significantly.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Cash Flow Timing</h4>
                      <p className="text-green-700 text-sm">
                        Consider seasonal variations, lease renewal timing, and market cycles when projecting 
                        cash flow to avoid surprises.
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Portfolio Approach</h4>
                      <p className="text-purple-700 text-sm">
                        Balance high cash flow properties with appreciation plays to create a diversified 
                        real estate portfolio that meets your investment goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Cash flow is the lifeblood of rental property investing</li>
                      <li>• Always include vacancy and maintenance allowances</li>
                      <li>• Positive cash flow provides financial stability and growth</li>
                      <li>• Regular analysis helps optimize property performance</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Consider both before-tax and after-tax cash flow</li>
                      <li>• Build cash reserves for unexpected expenses</li>
                      <li>• Focus on sustainable, long-term cash flow growth</li>
                      <li>• Use cash flow analysis to compare investment opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}