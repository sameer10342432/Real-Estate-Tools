'use client'

import { useState, useCallback, useEffect } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Receipt, DollarSign, TrendingDown, Calculator, AlertCircle, Info, Target } from 'lucide-react'

interface TaxAnalysis {
  grossRentalIncome: number
  totalDeductions: number
  netRentalIncome: number
  taxableIncome: number
  estimatedTaxes: number
  afterTaxIncome: number
  effectiveTaxRate: number
  marginalTaxRate: number
  depreciation: number
  totalExpenses: number
}

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
    title: 'Rental Income Tax Calculator',
    description: 'Calculate taxes on rental income and deductions. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function RentalIncomeTaxCalculator() {
  const [grossRentalIncome, setGrossRentalIncome] = useState<string>('36000')
  const [propertyValue, setPropertyValue] = useState<string>('300000')
  const [landValue, setLandValue] = useState<string>('60000')
  const [mortgageInterest, setMortgageInterest] = useState<string>('8000')
  const [propertyTaxes, setPropertyTaxes] = useState<string>('3600')
  const [insurance, setInsurance] = useState<string>('1200')
  const [maintenance, setMaintenance] = useState<string>('2400')
  const [utilities, setUtilities] = useState<string>('1800')
  const [management, setManagement] = useState<string>('3600')
  const [advertising, setAdvertising] = useState<string>('600')
  const [legal, setLegal] = useState<string>('800')
  const [otherExpenses, setOtherExpenses] = useState<string>('1000')
  const [filingStatus, setFilingStatus] = useState<string>('single')
  const [otherIncome, setOtherIncome] = useState<string>('75000')
  const [results, setResults] = useState<TaxAnalysis | null>(null)

  const calculateTaxes = useCallback(() => {
    const rental = parseFloat(grossRentalIncome) || 0
    const propValue = parseFloat(propertyValue) || 0
    const land = parseFloat(landValue) || 0
    const interest = parseFloat(mortgageInterest) || 0
    const taxes = parseFloat(propertyTaxes) || 0
    const ins = parseFloat(insurance) || 0
    const maint = parseFloat(maintenance) || 0
    const util = parseFloat(utilities) || 0
    const mgmt = parseFloat(management) || 0
    const adv = parseFloat(advertising) || 0
    const legalFees = parseFloat(legal) || 0
    const other = parseFloat(otherExpenses) || 0
    const otherInc = parseFloat(otherIncome) || 0

    // Calculate depreciation (27.5 years for residential rental property)
    const depreciableBasis = propValue - land
    const depreciation = depreciableBasis / 27.5

    // Total expenses
    const totalExpenses = interest + taxes + ins + maint + util + mgmt + adv + legalFees + other

    // Total deductions (expenses + depreciation)
    const totalDeductions = totalExpenses + depreciation

    // Net rental income
    const netRentalIncome = rental - totalDeductions

    // Total taxable income (rental + other income)
    const taxableIncome = Math.max(0, netRentalIncome + otherInc)

    // Tax brackets for 2024 (simplified)
    let estimatedTaxes = 0
    let marginalRate = 0

    if (filingStatus === 'single') {
      if (taxableIncome <= 11000) {
        estimatedTaxes = taxableIncome * 0.10
        marginalRate = 10
      } else if (taxableIncome <= 44725) {
        estimatedTaxes = 1100 + (taxableIncome - 11000) * 0.12
        marginalRate = 12
      } else if (taxableIncome <= 95375) {
        estimatedTaxes = 5147 + (taxableIncome - 44725) * 0.22
        marginalRate = 22
      } else if (taxableIncome <= 182050) {
        estimatedTaxes = 16290 + (taxableIncome - 95375) * 0.24
        marginalRate = 24
      } else if (taxableIncome <= 231250) {
        estimatedTaxes = 37104 + (taxableIncome - 182050) * 0.32
        marginalRate = 32
      } else if (taxableIncome <= 578125) {
        estimatedTaxes = 52832 + (taxableIncome - 231250) * 0.35
        marginalRate = 35
      } else {
        estimatedTaxes = 174238 + (taxableIncome - 578125) * 0.37
        marginalRate = 37
      }
    } else { // married filing jointly
      if (taxableIncome <= 22000) {
        estimatedTaxes = taxableIncome * 0.10
        marginalRate = 10
      } else if (taxableIncome <= 89450) {
        estimatedTaxes = 2200 + (taxableIncome - 22000) * 0.12
        marginalRate = 12
      } else if (taxableIncome <= 190750) {
        estimatedTaxes = 10294 + (taxableIncome - 89450) * 0.22
        marginalRate = 22
      } else if (taxableIncome <= 364200) {
        estimatedTaxes = 32580 + (taxableIncome - 190750) * 0.24
        marginalRate = 24
      } else if (taxableIncome <= 462500) {
        estimatedTaxes = 74208 + (taxableIncome - 364200) * 0.32
        marginalRate = 32
      } else if (taxableIncome <= 693750) {
        estimatedTaxes = 105664 + (taxableIncome - 462500) * 0.35
        marginalRate = 35
      } else {
        estimatedTaxes = 186601 + (taxableIncome - 693750) * 0.37
        marginalRate = 37
      }
    }

    const afterTaxIncome = netRentalIncome - (estimatedTaxes * (netRentalIncome / taxableIncome))
    const effectiveTaxRate = taxableIncome > 0 ? (estimatedTaxes / taxableIncome) * 100 : 0

    const analysis: TaxAnalysis = {
      grossRentalIncome: rental,
      totalDeductions,
      netRentalIncome,
      taxableIncome,
      estimatedTaxes,
      afterTaxIncome,
      effectiveTaxRate,
      marginalTaxRate: marginalRate,
      depreciation,
      totalExpenses
    }

    setResults(analysis)
  }, [
    grossRentalIncome,
    propertyValue,
    landValue,
    mortgageInterest,
    propertyTaxes,
    insurance,
    maintenance,
    utilities,
    management,
    advertising,
    legal,
    otherExpenses,
    filingStatus,
    otherIncome,
  ])

  useEffect(() => {
    calculateTaxes()
  }, [calculateTaxes])

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

  // Data for charts
  const expenseBreakdown = results ? [
    { name: 'Mortgage Interest', value: parseFloat(mortgageInterest), color: '#3b82f6' },
    { name: 'Property Taxes', value: parseFloat(propertyTaxes), color: '#f59e0b' },
    { name: 'Insurance', value: parseFloat(insurance), color: '#ef4444' },
    { name: 'Maintenance', value: parseFloat(maintenance), color: '#8b5cf6' },
    { name: 'Utilities', value: parseFloat(utilities), color: '#06b6d4' },
    { name: 'Management', value: parseFloat(management), color: '#84cc16' },
    { name: 'Other', value: parseFloat(advertising) + parseFloat(legal) + parseFloat(otherExpenses), color: '#f97316' }
  ].filter(item => item.value > 0) : []

  const deductionBreakdown = results ? [
    { name: 'Operating Expenses', value: results.totalExpenses, color: '#3b82f6' },
    { name: 'Depreciation', value: results.depreciation, color: '#f59e0b' }
  ] : []

  const taxComparison = results ? [
    {
      scenario: 'Without Rental',
      income: parseFloat(otherIncome),
      taxes: parseFloat(otherIncome) * (results.marginalTaxRate / 100),
      afterTax: parseFloat(otherIncome) * (1 - results.marginalTaxRate / 100)
    },
    {
      scenario: 'With Rental',
      income: results.taxableIncome,
      taxes: results.estimatedTaxes,
      afterTax: results.taxableIncome - results.estimatedTaxes
    }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-green-600 rounded-full">
              <Receipt className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Rental Income Tax Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate taxes on rental property income with comprehensive deduction analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Tax Information
                </CardTitle>
                <CardDescription className="text-green-100">
                  Enter your rental property details
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Income & Property</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grossRentalIncome" className="text-sm font-medium">Annual Gross Rental Income</Label>
                    <Input
                      id="grossRentalIncome"
                      type="number"
                      value={grossRentalIncome}
                      onChange={(e) => setGrossRentalIncome(e.target.value)}
                      className="text-lg"
                      placeholder="36000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyValue" className="text-sm font-medium">Property Value</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="text-lg"
                      placeholder="300000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landValue" className="text-sm font-medium">Land Value</Label>
                    <Input
                      id="landValue"
                      type="number"
                      value={landValue}
                      onChange={(e) => setLandValue(e.target.value)}
                      className="text-lg"
                      placeholder="60000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherIncome" className="text-sm font-medium">Other Annual Income</Label>
                    <Input
                      id="otherIncome"
                      type="number"
                      value={otherIncome}
                      onChange={(e) => setOtherIncome(e.target.value)}
                      className="text-lg"
                      placeholder="75000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="filingStatus" className="text-sm font-medium">Filing Status</Label>
                    <Select value={filingStatus} onValueChange={setFilingStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married Filing Jointly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Annual Expenses</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="mortgageInterest" className="text-sm font-medium">Mortgage Interest</Label>
                      <Input
                        id="mortgageInterest"
                        type="number"
                        value={mortgageInterest}
                        onChange={(e) => setMortgageInterest(e.target.value)}
                        placeholder="8000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyTaxes" className="text-sm font-medium">Property Taxes</Label>
                      <Input
                        id="propertyTaxes"
                        type="number"
                        value={propertyTaxes}
                        onChange={(e) => setPropertyTaxes(e.target.value)}
                        placeholder="3600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insurance" className="text-sm font-medium">Insurance</Label>
                      <Input
                        id="insurance"
                        type="number"
                        value={insurance}
                        onChange={(e) => setInsurance(e.target.value)}
                        placeholder="1200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maintenance" className="text-sm font-medium">Maintenance</Label>
                      <Input
                        id="maintenance"
                        type="number"
                        value={maintenance}
                        onChange={(e) => setMaintenance(e.target.value)}
                        placeholder="2400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="utilities" className="text-sm font-medium">Utilities</Label>
                      <Input
                        id="utilities"
                        type="number"
                        value={utilities}
                        onChange={(e) => setUtilities(e.target.value)}
                        placeholder="1800"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="management" className="text-sm font-medium">Management</Label>
                      <Input
                        id="management"
                        type="number"
                        value={management}
                        onChange={(e) => setManagement(e.target.value)}
                        placeholder="3600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="advertising" className="text-sm font-medium">Advertising</Label>
                      <Input
                        id="advertising"
                        type="number"
                        value={advertising}
                        onChange={(e) => setAdvertising(e.target.value)}
                        placeholder="600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="legal" className="text-sm font-medium">Legal/Professional</Label>
                      <Input
                        id="legal"
                        type="number"
                        value={legal}
                        onChange={(e) => setLegal(e.target.value)}
                        placeholder="800"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherExpenses" className="text-sm font-medium">Other Expenses</Label>
                    <Input
                      id="otherExpenses"
                      type="number"
                      value={otherExpenses}
                      onChange={(e) => setOtherExpenses(e.target.value)}
                      className="text-lg"
                      placeholder="1000"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateTaxes}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-3"
                >
                  Calculate Taxes
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
                  <Card className={`${results.netRentalIncome >= 0 ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.netRentalIncome >= 0 ? 'text-green-100' : 'text-red-100'} text-sm`}>Net Rental Income</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.netRentalIncome)}</p>
                        </div>
                        <DollarSign className={`h-8 w-8 ${results.netRentalIncome >= 0 ? 'text-green-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Total Deductions</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.totalDeductions)}</p>
                        </div>
                        <TrendingDown className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Estimated Taxes</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.estimatedTaxes)}</p>
                        </div>
                        <Receipt className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100 text-sm">Effective Tax Rate</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.effectiveTaxRate)}</p>
                        </div>
                        <Target className="h-8 w-8 text-orange-200" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Analysis */}
                <Tabs defaultValue="breakdown" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="breakdown">Expense Breakdown</TabsTrigger>
                    <TabsTrigger value="deductions">Deductions</TabsTrigger>
                    <TabsTrigger value="comparison">Tax Comparison</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  </TabsList>

                  <TabsContent value="breakdown" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Expense Breakdown</CardTitle>
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
                                  label={renderCustomizedLabel}
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

                      <Card>
                        <CardHeader>
                          <CardTitle>Income Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Gross Rental Income:</span>
                              <span className="font-medium">{formatCurrency(results.grossRentalIncome)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Expenses:</span>
                              <span className="font-medium">{formatCurrency(results.totalExpenses)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Depreciation:</span>
                              <span className="font-medium">{formatCurrency(results.depreciation)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Deductions:</span>
                              <span className="font-medium">{formatCurrency(results.totalDeductions)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold">
                              <span>Net Rental Income:</span>
                              <span className={results.netRentalIncome >= 0 ? 'text-green-600' : 'text-red-600'}>
                                {formatCurrency(results.netRentalIncome)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="deductions" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Deduction Analysis</CardTitle>
                        <CardDescription>
                          Breakdown of tax deductions for rental property
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={deductionBreakdown}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Bar dataKey="value" fill="#3b82f6" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Depreciation Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span>Property Value:</span>
                            <span>{formatCurrency(parseFloat(propertyValue))}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Land Value:</span>
                            <span>{formatCurrency(parseFloat(landValue))}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Depreciable Basis:</span>
                            <span>{formatCurrency(parseFloat(propertyValue) - parseFloat(landValue))}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Depreciation Period:</span>
                            <span>27.5 years</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Annual Depreciation:</span>
                            <span>{formatCurrency(results.depreciation)}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Tax Benefits</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm">
                              <strong>Depreciation Benefit:</strong> {formatCurrency(results.depreciation * results.marginalTaxRate / 100)} annual tax savings
                            </p>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm">
                              <strong>Expense Deductions:</strong> {formatCurrency(results.totalExpenses * results.marginalTaxRate / 100)} annual tax savings
                            </p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <p className="text-sm">
                              <strong>Total Tax Benefit:</strong> {formatCurrency(results.totalDeductions * results.marginalTaxRate / 100)} annually
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="comparison" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tax Impact Comparison</CardTitle>
                        <CardDescription>
                          Compare your tax situation with and without rental income
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={taxComparison}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="scenario" />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Legend />
                              <Bar dataKey="income" fill="#22c55e" name="Total Income" />
                              <Bar dataKey="taxes" fill="#ef4444" name="Total Taxes" />
                              <Bar dataKey="afterTax" fill="#3b82f6" name="After-Tax Income" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {taxComparison.map((scenario, index) => (
                        <Card key={index} className={index === 0 ? 'border-blue-200' : 'border-green-200'}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{scenario.scenario}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Total Income:</span>
                              <span>{formatCurrency(scenario.income)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Estimated Taxes:</span>
                              <span className="text-red-600">{formatCurrency(scenario.taxes)}</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                              <span>After-Tax Income:</span>
                              <span className="text-green-600">{formatCurrency(scenario.afterTax)}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="analysis" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Tax Summary
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm">
                                <strong>Marginal Tax Rate:</strong> {formatPercentage(results.marginalTaxRate)} - Your highest tax bracket
                              </p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-sm">
                                <strong>Effective Tax Rate:</strong> {formatPercentage(results.effectiveTaxRate)} - Average rate on total income
                              </p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg">
                              <p className="text-sm">
                                <strong>After-Tax Rental Income:</strong> {formatCurrency(results.afterTaxIncome)} annually
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Important Notes
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            {results.netRentalIncome < 0 && (
                              <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>Rental Loss:</strong> May offset other income, reducing overall taxes.
                                </p>
                              </div>
                            )}
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <p className="text-sm text-yellow-700">
                                <strong>Depreciation Recapture:</strong> May be taxed at 25% when property is sold.
                              </p>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg">
                              <p className="text-sm text-orange-700">
                                <strong>State Taxes:</strong> Not included in this calculation - consult local tax laws.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Tax Planning Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Maximize Deductions:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Keep detailed records of all expenses</li>
                              <li>• Consider cost segregation studies</li>
                              <li>• Track mileage for property visits</li>
                              <li>• Deduct home office expenses if applicable</li>
                              <li>• Time major repairs strategically</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Tax Strategies:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Consider 1031 exchanges for property swaps</li>
                              <li>• Plan for depreciation recapture</li>
                              <li>• Separate land from building costs</li>
                              <li>• Consider professional property management</li>
                              <li>• Consult with a tax professional</li>
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
      </div>

      {/* Comprehensive Article Section */}
      <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Rental Income Tax Planning
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Understanding rental income taxation is crucial for maximizing your investment returns 
              and staying compliant with tax regulations. This comprehensive guide covers everything 
              you need to know about rental property taxes, deductions, and optimization strategies.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Rental Income Tax?</h3>
              <p className="text-blue-800">
                Rental income tax is the tax you pay on income generated from rental properties. 
                This includes rent payments, security deposits you keep, and any services provided 
                to tenants. However, you can offset this income with various deductions and expenses.
              </p>
            </div>

            <h2>Types of Rental Income</h2>
            
            <h3>Taxable Rental Income</h3>
            <p>
              All rental income must be reported, including:
            </p>
            <ul>
              <li><strong>Monthly Rent Payments:</strong> Regular rental income from tenants</li>
              <li><strong>Security Deposits:</strong> Only if you keep them for damages or unpaid rent</li>
              <li><strong>Advance Rent:</strong> Rent paid in advance for future periods</li>
              <li><strong>Lease Cancellation Payments:</strong> Fees paid by tenants to break leases</li>
              <li><strong>Tenant-Paid Expenses:</strong> When tenants pay your property expenses</li>
              <li><strong>Services Provided:</strong> Income from services like cleaning or maintenance</li>
            </ul>

            <h3>Non-Taxable Items</h3>
            <p>
              Some items are not considered taxable income:
            </p>
            <ul>
              <li><strong>Refundable Security Deposits:</strong> Deposits held in trust for tenants</li>
              <li><strong>Loan Proceeds:</strong> Money borrowed against the property</li>
              <li><strong>Insurance Proceeds:</strong> Payments for property damage (with exceptions)</li>
              <li><strong>Tenant Improvements:</strong> Improvements made by tenants at their expense</li>
            </ul>

            <h2>Deductible Rental Expenses</h2>
            
            <h3>Operating Expenses</h3>
            <p>
              Common deductible operating expenses include:
            </p>
            <ul>
              <li><strong>Property Management Fees:</strong> Professional management services</li>
              <li><strong>Maintenance and Repairs:</strong> Ongoing upkeep and minor repairs</li>
              <li><strong>Utilities:</strong> Water, electricity, gas, internet (if you pay)</li>
              <li><strong>Insurance Premiums:</strong> Property, liability, and rental insurance</li>
              <li><strong>Property Taxes:</strong> Local government property taxes</li>
              <li><strong>Advertising Costs:</strong> Marketing to find tenants</li>
              <li><strong>Legal and Professional Fees:</strong> Attorney, accountant, and other professional services</li>
              <li><strong>Travel Expenses:</strong> Travel to manage or maintain the property</li>
            </ul>

            <h3>Capital Expenses vs. Repairs</h3>
            <p>
              Understanding the difference is crucial for tax planning:
            </p>
            <ul>
              <li><strong>Repairs (Deductible):</strong> Fixing existing items to original condition</li>
              <li><strong>Improvements (Capitalized):</strong> Adding value or extending property life</li>
              <li><strong>Safe Harbor Rule:</strong> Expenses under $2,500 can often be deducted immediately</li>
              <li><strong>Routine Maintenance:</strong> Regular upkeep is generally deductible</li>
            </ul>

            <h2>Depreciation Strategies</h2>
            
            <h3>Understanding Depreciation</h3>
            <p>
              Depreciation is a powerful tax benefit for rental property owners:
            </p>
            <ul>
              <li><strong>Residential Properties:</strong> 27.5-year depreciation schedule</li>
              <li><strong>Commercial Properties:</strong> 39-year depreciation schedule</li>
              <li><strong>Depreciable Basis:</strong> Property value minus land value</li>
              <li><strong>Placed in Service:</strong> When property is ready and available for rent</li>
            </ul>

            <h3>Bonus Depreciation and Section 179</h3>
            <p>
              Accelerated depreciation options:
            </p>
            <ul>
              <li><strong>Bonus Depreciation:</strong> 100% first-year depreciation on qualifying improvements</li>
              <li><strong>Section 179:</strong> Immediate expensing of certain property improvements</li>
              <li><strong>Cost Segregation:</strong> Separating components for faster depreciation</li>
              <li><strong>Qualified Improvement Property:</strong> Interior improvements to commercial buildings</li>
            </ul>

            <h2>Tax Planning Strategies</h2>
            
            <h3>Income Timing</h3>
            <p>
              Strategies to manage when income is recognized:
            </p>
            <ul>
              <li><strong>Rent Collection Timing:</strong> Consider when to collect advance rent</li>
              <li><strong>Security Deposit Management:</strong> Structure deposits to minimize immediate tax impact</li>
              <li><strong>Lease Terms:</strong> Structure lease agreements for optimal tax timing</li>
              <li><strong>Property Sales:</strong> Time sales to manage capital gains impact</li>
            </ul>

            <h3>Expense Optimization</h3>
            <p>
              Maximize deductible expenses legally:
            </p>
            <ul>
              <li><strong>Prepaid Expenses:</strong> Pay next year&apos;s expenses in current year</li>
              <li><strong>Equipment Purchases:</strong> Time purchases for maximum tax benefit</li>
              <li><strong>Professional Services:</strong> Invest in tax planning and legal advice</li>
              <li><strong>Property Improvements:</strong> Plan improvements for optimal tax treatment</li>
            </ul>

            <h2>Record Keeping Requirements</h2>
            
            <h3>Essential Documentation</h3>
            <p>
              Maintain detailed records for tax compliance:
            </p>
            <ul>
              <li><strong>Income Records:</strong> All rent receipts, lease agreements, and payment records</li>
              <li><strong>Expense Receipts:</strong> All property-related expense documentation</li>
              <li><strong>Bank Statements:</strong> Separate accounts for rental property transactions</li>
              <li><strong>Property Records:</strong> Purchase documents, improvement records, depreciation schedules</li>
              <li><strong>Mileage Logs:</strong> Travel records for property management activities</li>
            </ul>

            <h3>Digital Record Keeping</h3>
            <p>
              Modern tools for efficient record management:
            </p>
            <ul>
              <li><strong>Cloud Storage:</strong> Secure, accessible document storage</li>
              <li><strong>Expense Tracking Apps:</strong> Mobile apps for real-time expense recording</li>
              <li><strong>Property Management Software:</strong> Integrated income and expense tracking</li>
              <li><strong>Accounting Software:</strong> Automated categorization and reporting</li>
            </ul>

            <h2>Special Situations</h2>
            
            <h3>Passive Activity Rules</h3>
            <p>
              Understanding passive activity limitations:
            </p>
            <ul>
              <li><strong>Passive vs. Active:</strong> Most rental activities are considered passive</li>
              <li><strong>$25,000 Allowance:</strong> Special allowance for active participants</li>
              <li><strong>Real Estate Professional:</strong> Exception for qualifying real estate professionals</li>
              <li><strong>Material Participation:</strong> Tests for active vs. passive classification</li>
            </ul>

            <h3>Short-Term Rentals</h3>
            <p>
              Special rules for vacation and short-term rentals:
            </p>
            <ul>
              <li><strong>14-Day Rule:</strong> Personal use limitations for tax benefits</li>
              <li><strong>Business vs. Rental Activity:</strong> Classification affects tax treatment</li>
              <li><strong>Self-Employment Tax:</strong> May apply to short-term rental income</li>
              <li><strong>Expense Allocation:</strong> Dividing expenses between personal and rental use</li>
            </ul>

            <h2>State and Local Considerations</h2>
            
            <h3>State Tax Variations</h3>
            <p>
              State-specific rental income tax considerations:
            </p>
            <ul>
              <li><strong>State Income Tax:</strong> Varying rates and rules by state</li>
              <li><strong>Local Taxes:</strong> City and county rental income taxes</li>
              <li><strong>Occupancy Taxes:</strong> Tourist and transient occupancy taxes</li>
              <li><strong>Business Licenses:</strong> Local licensing requirements for rentals</li>
            </ul>

            <h3>Multi-State Properties</h3>
            <p>
              Complications with properties in multiple states:
            </p>
            <ul>
              <li><strong>Nonresident Tax Returns:</strong> Filing requirements in property states</li>
              <li><strong>Tax Credits:</strong> Avoiding double taxation on the same income</li>
              <li><strong>Withholding Requirements:</strong> State withholding on rental income</li>
              <li><strong>Apportionment Rules:</strong> Allocating income and expenses by state</li>
            </ul>

            <h2>Common Tax Mistakes</h2>
            
            <h3>Pitfalls to Avoid</h3>
            <ul>
              <li><strong>Mixing Personal and Rental Expenses:</strong> Keep separate accounts and records</li>
              <li><strong>Improper Depreciation:</strong> Not claiming depreciation or calculating incorrectly</li>
              <li><strong>Inadequate Records:</strong> Poor documentation leading to lost deductions</li>
              <li><strong>Misclassifying Repairs:</strong> Treating improvements as repairs or vice versa</li>
              <li><strong>Ignoring Passive Loss Rules:</strong> Not understanding activity limitations</li>
              <li><strong>Late Tax Payments:</strong> Missing quarterly estimated tax payments</li>
            </ul>

            <h2>Professional Tax Help</h2>
            
            <h3>When to Hire a Professional</h3>
            <p>
              Consider professional help in these situations:
            </p>
            <ul>
              <li><strong>Multiple Properties:</strong> Complex portfolio management</li>
              <li><strong>Commercial Properties:</strong> More complex tax rules and depreciation</li>
              <li><strong>Cost Segregation Studies:</strong> Maximizing depreciation benefits</li>
              <li><strong>1031 Exchanges:</strong> Tax-deferred property exchanges</li>
              <li><strong>Tax Audits:</strong> IRS examination of rental property returns</li>
              <li><strong>Entity Structure:</strong> Choosing optimal business structure</li>
            </ul>

            <h3>Choosing the Right Professional</h3>
            <p>
              Selecting qualified tax professionals:
            </p>
            <ul>
              <li><strong>CPA Credentials:</strong> Certified Public Accountant with real estate experience</li>
              <li><strong>Enrolled Agent:</strong> IRS-licensed tax professionals</li>
              <li><strong>Real Estate Specialization:</strong> Focus on rental property taxation</li>
              <li><strong>Ongoing Education:</strong> Staying current with tax law changes</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Key Takeaways</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Keep detailed records of all rental income and expenses</li>
                <li>• Understand the difference between repairs and improvements</li>
                <li>• Maximize depreciation benefits through proper planning</li>
                <li>• Consider passive activity rules in your tax strategy</li>
                <li>• Plan expense timing for optimal tax benefits</li>
                <li>• Consult professionals for complex situations</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mt-8">
              Effective rental income tax planning can significantly impact your investment returns. 
              Use this calculator to estimate your tax obligations, but always consult with qualified 
              tax professionals for personalized advice. Remember that tax laws change frequently, 
              so staying informed and planning ahead is essential for long-term success.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}