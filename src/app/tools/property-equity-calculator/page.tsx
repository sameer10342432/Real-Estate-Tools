'use client'

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, XAxis } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Home, Target, AlertCircle, CheckCircle } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Equity Calculator',
    description: 'Track and analyze your property equity over time. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyEquityCalculator() {
  const [currentValue, setCurrentValue] = useState(500000)
  const [originalPrice, setOriginalPrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [loanAmount, setLoanAmount] = useState(320000)
  const [currentBalance, setCurrentBalance] = useState(280000)
  const [monthlyPayment, setMonthlyPayment] = useState(1800)
  const [interestRate, setInterestRate] = useState(3.5)
  const [yearsOwned, setYearsOwned] = useState(5)
  const [monthlyRent, setMonthlyRent] = useState(2500)
  const [monthlyExpenses, setMonthlyExpenses] = useState(800)
  const [improvementCosts, setImprovementCosts] = useState(25000)
  const [sellingCosts, setSellingCosts] = useState(6)
  const [capitalGainsTax, setCapitalGainsTax] = useState(15)

  // Calculations
  const totalEquity = currentValue - currentBalance
  const initialEquity = downPayment
  const equityFromAppreciation = currentValue - originalPrice
  const equityFromPaydown = loanAmount - currentBalance
  const totalInvestment = downPayment + improvementCosts
  const equityGrowthRate = totalInvestment > 0 ? ((totalEquity - initialEquity) / totalInvestment) * 100 : 0
  const loanToValue = currentValue > 0 ? (currentBalance / currentValue) * 100 : 0
  const equityPercentage = currentValue > 0 ? (totalEquity / currentValue) * 100 : 0

  // Net proceeds if sold
  const sellingCostAmount = (currentValue * sellingCosts) / 100
  const grossProceeds = currentValue - sellingCostAmount - currentBalance
  const capitalGain = Math.max(0, currentValue - originalPrice - improvementCosts)
  const capitalGainsTaxAmount = (capitalGain * capitalGainsTax) / 100
  const netProceeds = grossProceeds - capitalGainsTaxAmount

  // Cash-on-cash return
  const annualCashFlow = (monthlyRent - monthlyExpenses) * 12
  const cashOnCashReturn = totalInvestment > 0 ? (annualCashFlow / totalInvestment) * 100 : 0

  // Equity buildup projection (next 10 years)
  const projectionData: { year: number; equity: number; value: number; balance: number; ltv: number }[] = []
  let projectedBalance = currentBalance
  let projectedValue = currentValue
  const appreciationRate = yearsOwned > 0 ? Math.pow(currentValue / originalPrice, 1 / yearsOwned) - 1 : 0.03
  const monthlyPrincipal = monthlyPayment - (projectedBalance * (interestRate / 100) / 12)

  for (let year = 0; year <= 10; year++) {
    const yearlyPrincipalPayment = monthlyPrincipal * 12
    projectedBalance = Math.max(0, projectedBalance - yearlyPrincipalPayment)
    projectedValue = projectedValue * (1 + appreciationRate)
    const projectedEquity = projectedValue - projectedBalance

    projectionData.push({
      year: year + yearsOwned,
      equity: Math.round(projectedEquity),
      value: Math.round(projectedValue),
      balance: Math.round(projectedBalance),
      ltv: projectedValue > 0 ? (projectedBalance / projectedValue) * 100 : 0
    })
  }

  // Equity breakdown for pie chart
  const equityBreakdown = [
    { name: 'Initial Down Payment', value: initialEquity, color: COLORS[0] },
    { name: 'Appreciation', value: Math.max(0, equityFromAppreciation), color: COLORS[1] },
    { name: 'Principal Paydown', value: Math.max(0, equityFromPaydown), color: COLORS[2] },
    { name: 'Improvements', value: improvementCosts, color: COLORS[3] }
  ].filter(item => item.value > 0)

  // Monthly equity buildup
  const monthlyEquityBuildup = []
  let runningBalance = loanAmount
  let runningValue = originalPrice
  const monthlyAppreciation = Math.pow(1 + appreciationRate, 1/12) - 1

  for (let month = 0; month <= yearsOwned * 12; month++) {
    const monthlyPrincipalPayment = monthlyPayment - (runningBalance * (interestRate / 100) / 12)
    runningBalance = Math.max(0, runningBalance - monthlyPrincipalPayment)
    runningValue = runningValue * (1 + monthlyAppreciation)
    const equity = runningValue - runningBalance

    if (month % 12 === 0) {
      monthlyEquityBuildup.push({
        year: month / 12,
        equity: Math.round(equity),
        value: Math.round(runningValue),
        balance: Math.round(runningBalance)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Property Equity Calculator</h1>
          <p className="text-xl text-gray-600">Analyze and track your property equity growth</p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Equity</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${totalEquity.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {equityPercentage.toFixed(1)}% of property value
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loan-to-Value</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loanToValue.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                ${currentBalance.toLocaleString()} remaining
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equity Growth</CardTitle>
              {equityGrowthRate >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${equityGrowthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {equityGrowthRate.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Since purchase
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Proceeds</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${netProceeds.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                If sold today
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            <TabsTrigger value="projections">Projections</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                  <CardDescription>Enter your property details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentValue">Current Property Value ($)</Label>
                      <Input
                        id="currentValue"
                        type="number"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="originalPrice">Original Purchase Price ($)</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downPayment">Down Payment ($)</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="improvementCosts">Improvement Costs ($)</Label>
                      <Input
                        id="improvementCosts"
                        type="number"
                        value={improvementCosts}
                        onChange={(e) => setImprovementCosts(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="yearsOwned">Years Owned</Label>
                      <Input
                        id="yearsOwned"
                        type="number"
                        value={yearsOwned}
                        onChange={(e) => setYearsOwned(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Information</CardTitle>
                  <CardDescription>Current loan details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="loanAmount">Original Loan Amount ($)</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentBalance">Current Balance ($)</Label>
                      <Input
                        id="currentBalance"
                        type="number"
                        value={currentBalance}
                        onChange={(e) => setCurrentBalance(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyPayment">Monthly Payment ($)</Label>
                      <Input
                        id="monthlyPayment"
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) => setMonthlyPayment(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.01"
                        value={interestRate}
                        onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rental Information</CardTitle>
                  <CardDescription>If this is a rental property</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyExpenses">Monthly Expenses ($)</Label>
                      <Input
                        id="monthlyExpenses"
                        type="number"
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sale Assumptions</CardTitle>
                  <CardDescription>For net proceeds calculation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sellingCosts">Selling Costs (%)</Label>
                      <Input
                        id="sellingCosts"
                        type="number"
                        step="0.1"
                        value={sellingCosts}
                        onChange={(e) => setSellingCosts(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="capitalGainsTax">Capital Gains Tax (%)</Label>
                      <Input
                        id="capitalGainsTax"
                        type="number"
                        step="0.1"
                        value={capitalGainsTax}
                        onChange={(e) => setCapitalGainsTax(parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Equity Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={equityBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: $${(value as number).toLocaleString()}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {equityBreakdown.map((entry, index) => (
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
                  <CardTitle>Equity Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Initial Down Payment</span>
                      <span className="font-bold">${initialEquity.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Property Appreciation</span>
                      <span className="font-bold text-green-600">${Math.max(0, equityFromAppreciation).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Principal Paydown</span>
                      <span className="font-bold text-purple-600">${Math.max(0, equityFromPaydown).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Improvements</span>
                      <span className="font-bold text-orange-600">${improvementCosts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg border-2 border-gray-300">
                      <span className="font-bold text-lg">Total Equity</span>
                      <span className="font-bold text-lg">${totalEquity.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Equity Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyEquityBuildup}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
                      <Legend />
                      <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" name="Property Value" />
                      <Area type="monotone" dataKey="balance" stackId="2" stroke="#ff7c7c" fill="#ff7c7c" name="Loan Balance" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Net Proceeds Calculation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Current Property Value</span>
                      <span className="font-semibold">${currentValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>- Selling Costs ({sellingCosts}%)</span>
                      <span>-${sellingCostAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>- Loan Balance</span>
                      <span>-${currentBalance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>- Capital Gains Tax</span>
                      <span>-${capitalGainsTaxAmount.toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Net Proceeds</span>
                      <span className="text-green-600">${netProceeds.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>10-Year Equity Projection</CardTitle>
                <CardDescription>Based on current appreciation rate of {(appreciationRate * 100).toFixed(2)}% annually</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
                    <Legend />
                    <Line type="monotone" dataKey="equity" stroke="#8884d8" strokeWidth={3} name="Total Equity" />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} name="Property Value" />
                    <Line type="monotone" dataKey="balance" stroke="#ff7c7c" strokeWidth={2} name="Loan Balance" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loan-to-Value Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, 'LTV']} />
                    <Line type="monotone" dataKey="ltv" stroke="#ff8042" strokeWidth={3} name="Loan-to-Value %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projection Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[5, 10].map(years => {
                    const futureData = projectionData[years]
                    return (
                      <div key={years} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">In {years} Years</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Property Value:</span>
                            <span className="font-semibold">${futureData?.value.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Equity:</span>
                            <span className="font-semibold text-green-600">${futureData?.equity.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Loan Balance:</span>
                            <span className="font-semibold">${futureData?.balance.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>LTV:</span>
                            <span className="font-semibold">{futureData?.ltv.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Total Return</p>
                      <p className="text-xl font-bold">{equityGrowthRate.toFixed(1)}%</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">Annual Appreciation</p>
                      <p className="text-xl font-bold">{(appreciationRate * 100).toFixed(2)}%</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600">Cash-on-Cash Return</p>
                      <p className="text-xl font-bold">{cashOnCashReturn.toFixed(1)}%</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-gray-600">Equity Multiple</p>
                      <p className="text-xl font-bold">{(totalEquity / totalInvestment).toFixed(2)}x</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Loan-to-Value Ratio</span>
                      <div className="flex items-center gap-2">
                        {loanToValue <= 80 ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                        )}
                        <Badge variant={loanToValue <= 80 ? "default" : "secondary"}>
                          {loanToValue.toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Equity Position</span>
                      <div className="flex items-center gap-2">
                        {equityPercentage >= 20 ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <Badge variant={equityPercentage >= 20 ? "default" : "destructive"}>
                          {equityPercentage.toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cash Flow</span>
                      <div className="flex items-center gap-2">
                        {annualCashFlow >= 0 ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <Badge variant={annualCashFlow >= 0 ? "default" : "destructive"}>
                          ${annualCashFlow.toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refinancing Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {loanToValue <= 80 && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Cash-Out Refinance Available</h4>
                        <p className="text-sm text-green-700">
                          With {equityPercentage.toFixed(1)}% equity, you may qualify for a cash-out refinance.
                          Potential cash out: ${(totalEquity * 0.8 - currentBalance).toLocaleString()}
                        </p>
                      </div>
                    )}
                    {loanToValue > 80 && loanToValue <= 90 && (
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Limited Refinancing Options</h4>
                        <p className="text-sm text-yellow-700">
                          Your LTV is {loanToValue.toFixed(1)}%. Consider waiting for more appreciation or paying down principal.
                        </p>
                      </div>
                    )}
                    {loanToValue > 90 && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Underwater Position</h4>
                        <p className="text-sm text-red-700">
                          Your property may be underwater. Focus on principal payments and wait for appreciation.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {equityPercentage >= 20 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <p className="text-sm">Strong equity position provides financial flexibility</p>
                      </div>
                    )}
                    {cashOnCashReturn > 8 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <p className="text-sm">Excellent cash-on-cash return above 8%</p>
                      </div>
                    )}
                    {appreciationRate > 0.05 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <p className="text-sm">Strong appreciation rate suggests good market conditions</p>
                      </div>
                    )}
                    {loanToValue <= 70 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <p className="text-sm">Consider leveraging equity for additional investments</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What-If Scenarios</CardTitle>
                <CardDescription>Explore different market conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Bear Market', appreciation: -0.05, label: '-5% annually' },
                    { name: 'Flat Market', appreciation: 0, label: '0% annually' },
                    { name: 'Bull Market', appreciation: 0.08, label: '+8% annually' }
                  ].map(scenario => {
                    const scenarioValue = currentValue * Math.pow(1 + scenario.appreciation, 5)
                    const scenarioEquity = scenarioValue - (currentBalance * 0.7) // Assuming some paydown
                    const scenarioReturn = totalInvestment > 0 ? ((scenarioEquity - totalInvestment) / totalInvestment) * 100 : 0

                    return (
                      <div key={scenario.name} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">{scenario.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{scenario.label}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Property Value (5yr):</span>
                            <span className="font-semibold">${scenarioValue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Projected Equity:</span>
                            <span className="font-semibold">${scenarioEquity.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Return:</span>
                            <span className={`font-semibold ${scenarioReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {scenarioReturn.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sensitivity Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Impact of 10% Property Value Change</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-600">10% Decrease</p>
                        <p className="font-semibold">Equity: ${(currentValue * 0.9 - currentBalance).toLocaleString()}</p>
                        <p className="text-sm text-red-600">LTV: {((currentBalance / (currentValue * 0.9)) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">10% Increase</p>
                        <p className="font-semibold">Equity: ${(currentValue * 1.1 - currentBalance).toLocaleString()}</p>
                        <p className="text-sm text-green-600">LTV: {((currentBalance / (currentValue * 1.1)) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comprehensive Article Section */}
          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Complete Guide to Property Equity Analysis
                </CardTitle>
                <p className="text-gray-600">
                  Master property equity calculation, growth strategies, and wealth-building techniques for real estate investors
                </p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">What is Property Equity?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800">
                        Property equity is the difference between your property's current market value and the outstanding mortgage balance. 
                        It represents your ownership stake and is a key component of real estate wealth building.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900">Why Track Equity?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-800">
                        Monitoring equity helps you understand your net worth, make informed refinancing decisions, 
                        plan future investments, and leverage your property for additional opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Equity Calculation Formula</h3>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-gray-900 mb-2">Property Equity = Current Market Value - Outstanding Mortgage Balance</div>
                        <p className="text-gray-600">Your ownership stake in the property</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-purple-700">Market Value</div>
                          <div className="text-gray-600">Current appraised value</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-blue-700">Mortgage Balance</div>
                          <div className="text-gray-600">Remaining loan amount</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-700">Your Equity</div>
                          <div className="text-gray-600">Net ownership value</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Sources of Equity Growth</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card className="border-green-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-green-800">Initial Down Payment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Immediate equity creation</li>
                            <li>• Typically 10-20% of value</li>
                            <li>• Foundation for future growth</li>
                            <li>• Reduces loan-to-value ratio</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-800">Property Appreciation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Market value increases</li>
                            <li>• Neighborhood improvements</li>
                            <li>• Economic growth factors</li>
                            <li>• Supply and demand dynamics</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-purple-800">Principal Paydown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Monthly mortgage payments</li>
                            <li>• Reduces loan balance</li>
                            <li>• Accelerates over time</li>
                            <li>• Forced savings mechanism</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-orange-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-orange-800">Property Improvements</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Renovations and upgrades</li>
                            <li>• Increases market value</li>
                            <li>• Strategic improvements</li>
                            <li>• ROI on improvements</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Equity Position Analysis</h3>
                    <div className="space-y-4">
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Strong Equity Position (20%+)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Benefits</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• No PMI required</li>
                                <li>• Better loan terms</li>
                                <li>• Refinancing options</li>
                                <li>• HELOC eligibility</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Opportunities</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Cash-out refinancing</li>
                                <li>• Investment property purchase</li>
                                <li>• Home improvements</li>
                                <li>• Debt consolidation</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-yellow-200 bg-yellow-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-yellow-800">Moderate Equity (10-20%)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-yellow-700 mb-2">Considerations</h5>
                              <ul className="text-sm space-y-1 text-yellow-600">
                                <li>• PMI may still apply</li>
                                <li>• Limited refinancing options</li>
                                <li>• Market risk exposure</li>
                                <li>• Focus on building equity</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-yellow-700 mb-2">Strategies</h5>
                              <ul className="text-sm space-y-1 text-yellow-600">
                                <li>• Extra principal payments</li>
                                <li>• Property improvements</li>
                                <li>• Wait for appreciation</li>
                                <li>• Monitor market conditions</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-red-200 bg-red-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800">Low Equity (Under 10%)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-red-700 mb-2">Risks</h5>
                              <ul className="text-sm space-y-1 text-red-600">
                                <li>• Underwater mortgage risk</li>
                                <li>• Limited financial flexibility</li>
                                <li>• High PMI costs</li>
                                <li>• Difficulty refinancing</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-red-700 mb-2">Action Items</h5>
                              <ul className="text-sm space-y-1 text-red-600">
                                <li>• Accelerate principal payments</li>
                                <li>• Avoid cash-out refinancing</li>
                                <li>• Focus on appreciation</li>
                                <li>• Consider strategic improvements</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Equity Building Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Accelerated Paydown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Make extra principal payments</li>
                            <li>• Bi-weekly payment schedule</li>
                            <li>• Apply windfalls to principal</li>
                            <li>• Refinance to shorter term</li>
                            <li>• Round up monthly payments</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Value Enhancement</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Kitchen and bathroom renovations</li>
                            <li>• Energy efficiency improvements</li>
                            <li>• Curb appeal enhancements</li>
                            <li>• Additional square footage</li>
                            <li>• Smart home technology</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Leveraging Your Equity</h3>
                    <div className="space-y-4">
                      <Card className="border-purple-200 bg-purple-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-purple-800">Home Equity Line of Credit (HELOC)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-purple-700 mb-2">Features</h5>
                              <ul className="text-sm space-y-1 text-purple-600">
                                <li>• Revolving credit line</li>
                                <li>• Variable interest rates</li>
                                <li>• Interest-only payments initially</li>
                                <li>• Access up to 80-85% of equity</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-purple-700 mb-2">Best Uses</h5>
                              <ul className="text-sm space-y-1 text-purple-600">
                                <li>• Home improvements</li>
                                <li>• Investment opportunities</li>
                                <li>• Emergency fund backup</li>
                                <li>• Debt consolidation</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Cash-Out Refinancing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">How It Works</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Replace existing mortgage</li>
                                <li>• Borrow more than owed</li>
                                <li>• Receive difference in cash</li>
                                <li>• Fixed interest rate option</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Considerations</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Higher loan balance</li>
                                <li>• Closing costs apply</li>
                                <li>• Rate and term changes</li>
                                <li>• Tax implications</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Investment Property Purchase</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Strategies</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Use equity as down payment</li>
                                <li>• Cross-collateralization</li>
                                <li>• Portfolio expansion</li>
                                <li>• Leverage multiplication</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Benefits</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Diversification</li>
                                <li>• Additional cash flow</li>
                                <li>• Compound appreciation</li>
                                <li>• Tax advantages</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Market Factors Affecting Equity</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-teal-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-teal-800">Positive Factors</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Economic growth and job creation</li>
                            <li>• Population growth and migration</li>
                            <li>• Infrastructure improvements</li>
                            <li>• School district quality</li>
                            <li>• Low interest rate environment</li>
                            <li>• Limited housing supply</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-red-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800">Risk Factors</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Economic recession or downturn</li>
                            <li>• Rising interest rates</li>
                            <li>• Oversupply of housing</li>
                            <li>• Neighborhood decline</li>
                            <li>• Natural disaster risks</li>
                            <li>• Regulatory changes</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Tax Implications</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-3">Tax Benefits</h4>
                          <ul className="text-sm space-y-2 text-yellow-700">
                            <li>• Mortgage interest deduction</li>
                            <li>• Property tax deduction</li>
                            <li>• Capital gains exclusion (primary residence)</li>
                            <li>• HELOC interest deduction (for improvements)</li>
                            <li>• Depreciation (rental properties)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-3">Tax Considerations</h4>
                          <ul className="text-sm space-y-2 text-yellow-700">
                            <li>• Capital gains on sale (investment property)</li>
                            <li>• Depreciation recapture</li>
                            <li>• HELOC interest limitations</li>
                            <li>• State and local tax caps</li>
                            <li>• 1031 exchange opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Equity Monitoring Best Practices</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Regular Tracking</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Monitor property values quarterly</li>
                          <li>• Track mortgage balance monthly</li>
                          <li>• Review comparable sales regularly</li>
                          <li>• Update improvement values annually</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Professional Assessments</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Annual property appraisals</li>
                          <li>• CMA (Comparative Market Analysis)</li>
                          <li>• Professional property inspections</li>
                          <li>• Tax assessment reviews</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">Documentation</h4>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Keep improvement receipts</li>
                          <li>• Document market research</li>
                          <li>• Track payment history</li>
                          <li>• Maintain property photos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Common Equity Mistakes</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-red-800 mb-3">Mistakes to Avoid</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Financial Mistakes</h5>
                            <ul className="text-sm space-y-1 text-red-600">
                              <li>• Over-leveraging equity</li>
                              <li>• Ignoring market cycles</li>
                              <li>• Poor improvement ROI</li>
                              <li>• Neglecting maintenance</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Strategic Mistakes</h5>
                            <ul className="text-sm space-y-1 text-red-600">
                              <li>• Emotional decision making</li>
                              <li>• Lack of diversification</li>
                              <li>• Poor timing decisions</li>
                              <li>• Inadequate research</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Equity = Market Value - Mortgage Balance</li>
                        <li>• Build equity through appreciation, paydown, and improvements</li>
                        <li>• 20%+ equity provides significant financial flexibility</li>
                        <li>• Monitor equity regularly with professional assessments</li>
                      </ul>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Leverage equity strategically for wealth building</li>
                        <li>• Consider market factors and timing</li>
                        <li>• Understand tax implications of equity decisions</li>
                        <li>• Avoid over-leveraging and maintain adequate reserves</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </div>
  )
}