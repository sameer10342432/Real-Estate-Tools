'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Calculator, DollarSign, TrendingDown, Calendar, FileText, Download, Info, AlertCircle } from 'lucide-react'

interface PaymentSchedule {
  paymentNumber: number
  paymentDate: string
  paymentAmount: number
  principalPayment: number
  interestPayment: number
  remainingBalance: number
  cumulativeInterest: number
  cumulativePrincipal: number
}

interface LoanSummary {
  loanAmount: number
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
  totalCost: number
  payoffDate: string
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Amortization Schedule Calculator',
    description: 'Generate detailed loan amortization schedules. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function AmortizationScheduleCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('300000')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [loanTerm, setLoanTerm] = useState<string>('30')
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [extraPayment, setExtraPayment] = useState<string>('0')
  const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly')
  const [schedule, setSchedule] = useState<PaymentSchedule[]>([])
  const [summary, setSummary] = useState<LoanSummary | null>(null)
  const [viewMode, setViewMode] = useState<string>('annual')

  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount) || 0
    const annualRate = parseFloat(interestRate) / 100 || 0
    const years = parseFloat(loanTerm) || 0
    const extra = parseFloat(extraPayment) || 0
    
    if (principal <= 0 || annualRate <= 0 || years <= 0) return

    const monthlyRate = annualRate / 12
    const totalPayments = years * 12
    
    // Calculate monthly payment using amortization formula
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                          (Math.pow(1 + monthlyRate, totalPayments) - 1)

    let remainingBalance = principal
    let cumulativeInterest = 0
    let cumulativePrincipal = 0
    const payments: PaymentSchedule[] = []
    const start = new Date(startDate)

    let paymentNumber = 1
    while (remainingBalance > 0.01 && paymentNumber <= totalPayments * 2) { // Safety limit
      const interestPayment = remainingBalance * monthlyRate
      let principalPayment = monthlyPayment - interestPayment + extra
      
      // Don't overpay
      if (principalPayment > remainingBalance) {
        principalPayment = remainingBalance
      }
      
      remainingBalance -= principalPayment
      cumulativeInterest += interestPayment
      cumulativePrincipal += principalPayment
      
      const paymentDate = new Date(start)
      paymentDate.setMonth(paymentDate.getMonth() + paymentNumber - 1)
      
      payments.push({
        paymentNumber,
        paymentDate: paymentDate.toLocaleDateString(),
        paymentAmount: interestPayment + principalPayment,
        principalPayment,
        interestPayment,
        remainingBalance: Math.max(0, remainingBalance),
        cumulativeInterest,
        cumulativePrincipal
      })
      
      paymentNumber++
      
      if (remainingBalance <= 0.01) break
    }

    const finalPaymentDate = new Date(start)
    finalPaymentDate.setMonth(finalPaymentDate.getMonth() + payments.length - 1)

    const loanSummary: LoanSummary = {
      loanAmount: principal,
      monthlyPayment: monthlyPayment + extra,
      totalPayments: payments.length,
      totalInterest: cumulativeInterest,
      totalCost: principal + cumulativeInterest,
      payoffDate: finalPaymentDate.toLocaleDateString()
    }

    setSchedule(payments)
    setSummary(loanSummary)
  }

  useEffect(() => {
    calculateAmortization()
  }, [loanAmount, interestRate, loanTerm, startDate, extraPayment])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCurrencyDetailed = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  // Prepare chart data
  const chartData = schedule.filter((_, index) => {
    if (viewMode === 'annual') return index % 12 === 0 || index === schedule.length - 1
    return true
  }).map(payment => ({
    payment: payment.paymentNumber,
    'Remaining Balance': payment.remainingBalance,
    'Cumulative Interest': payment.cumulativeInterest,
    'Cumulative Principal': payment.cumulativePrincipal,
    'Interest Payment': payment.interestPayment,
    'Principal Payment': payment.principalPayment
  }))

  const paymentBreakdown = summary ? [
    { name: 'Principal', value: summary.loanAmount, color: '#22c55e' },
    { name: 'Interest', value: summary.totalInterest, color: '#ef4444' }
  ] : []

  const savingsWithExtra = () => {
    if (!summary || parseFloat(extraPayment) === 0) return null
    
    // Calculate without extra payment
    const principal = parseFloat(loanAmount)
    const annualRate = parseFloat(interestRate) / 100
    const years = parseFloat(loanTerm)
    const monthlyRate = annualRate / 12
    const totalPayments = years * 12
    
    const standardPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                           (Math.pow(1 + monthlyRate, totalPayments) - 1)
    const standardTotalInterest = (standardPayment * totalPayments) - principal
    
    return {
      interestSaved: standardTotalInterest - summary.totalInterest,
      timeSaved: totalPayments - summary.totalPayments
    }
  }

  const extraPaymentSavings = savingsWithExtra()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Amortization Schedule Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate loan payments and generate detailed amortization schedules with payment breakdowns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Loan Details
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your loan information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" className="text-sm font-medium">Loan Amount</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="text-lg"
                      placeholder="300000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="text-sm font-medium">Annual Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="6.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="text-sm font-medium">Loan Term (Years)</Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                        <SelectItem value="40">40 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-sm font-medium">First Payment Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="extraPayment" className="text-sm font-medium">Extra Monthly Payment</Label>
                    <Input
                      id="extraPayment"
                      type="number"
                      value={extraPayment}
                      onChange={(e) => setExtraPayment(e.target.value)}
                      className="text-lg"
                      placeholder="0"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateAmortization}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3"
                >
                  Calculate Schedule
                </Button>

                {extraPaymentSavings && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Extra Payment Benefits</h4>
                    <div className="space-y-1 text-sm text-green-700">
                      <p>Interest Saved: <strong>{formatCurrency(extraPaymentSavings.interestSaved)}</strong></p>
                      <p>Time Saved: <strong>{Math.floor(extraPaymentSavings.timeSaved / 12)} years, {extraPaymentSavings.timeSaved % 12} months</strong></p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {summary && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Monthly Payment</p>
                          <p className="text-2xl font-bold">{formatCurrency(summary.monthlyPayment)}</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-red-100 text-sm">Total Interest</p>
                          <p className="text-2xl font-bold">{formatCurrency(summary.totalInterest)}</p>
                        </div>
                        <TrendingDown className="h-8 w-8 text-red-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100 text-sm">Total Cost</p>
                          <p className="text-2xl font-bold">{formatCurrency(summary.totalCost)}</p>
                        </div>
                        <Calculator className="h-8 w-8 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Payoff Date</p>
                          <p className="text-lg font-bold">{summary.payoffDate}</p>
                        </div>
                        <Calendar className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Analysis */}
                <Tabs defaultValue="balance" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="balance">Balance Chart</TabsTrigger>
                    <TabsTrigger value="payments">Payment Breakdown</TabsTrigger>
                    <TabsTrigger value="schedule">Payment Schedule</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  </TabsList>

                  <TabsContent value="balance" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Loan Balance Over Time</CardTitle>
                        <CardDescription>
                          Track how your loan balance decreases over time
                        </CardDescription>
                        <div className="flex gap-2">
                          <Button
                            variant={viewMode === 'annual' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('annual')}
                          >
                            Annual View
                          </Button>
                          <Button
                            variant={viewMode === 'monthly' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('monthly')}
                          >
                            Monthly View
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis 
                                dataKey="payment" 
                                label={{ value: 'Payment Number', position: 'insideBottom', offset: -5 }}
                              />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Legend />
                              <Line 
                                type="monotone" 
                                dataKey="Remaining Balance" 
                                stroke="#ef4444" 
                                strokeWidth={3}
                                dot={false}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="Cumulative Interest" 
                                stroke="#f59e0b" 
                                strokeWidth={2}
                                dot={false}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="Cumulative Principal" 
                                stroke="#22c55e" 
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="payments" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Total Cost Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={paymentBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(1)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {paymentBreakdown.map((entry, index) => (
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
                          <CardTitle>Monthly Payment Composition</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={chartData.slice(0, 12)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="payment" />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                                <Tooltip formatter={(value: number) => [formatCurrencyDetailed(value), '']} />
                                <Legend />
                                <Bar dataKey="Principal Payment" stackId="a" fill="#22c55e" />
                                <Bar dataKey="Interest Payment" stackId="a" fill="#ef4444" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          Payment Schedule
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">#</th>
                                <th className="text-left p-2">Date</th>
                                <th className="text-right p-2">Payment</th>
                                <th className="text-right p-2">Principal</th>
                                <th className="text-right p-2">Interest</th>
                                <th className="text-right p-2">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {schedule.slice(0, 12).map((payment) => (
                                <tr key={payment.paymentNumber} className="border-b hover:bg-gray-50">
                                  <td className="p-2">{payment.paymentNumber}</td>
                                  <td className="p-2">{payment.paymentDate}</td>
                                  <td className="p-2 text-right">{formatCurrencyDetailed(payment.paymentAmount)}</td>
                                  <td className="p-2 text-right text-green-600">{formatCurrencyDetailed(payment.principalPayment)}</td>
                                  <td className="p-2 text-right text-red-600">{formatCurrencyDetailed(payment.interestPayment)}</td>
                                  <td className="p-2 text-right font-medium">{formatCurrency(payment.remainingBalance)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {schedule.length > 12 && (
                            <div className="text-center p-4 text-gray-500">
                              Showing first 12 payments of {schedule.length} total payments
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="analysis" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Loan Summary
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Loan Amount:</span>
                              <span className="font-medium">{formatCurrency(summary.loanAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Interest Rate:</span>
                              <span className="font-medium">{interestRate}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Loan Term:</span>
                              <span className="font-medium">{loanTerm} years</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Payments:</span>
                              <span className="font-medium">{summary.totalPayments}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold">
                              <span>Interest Percentage:</span>
                              <span className="text-red-600">
                                {((summary.totalInterest / summary.loanAmount) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Key Insights
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm">
                                <strong>Early Payments:</strong> In the first year, {((schedule.slice(0, 12).reduce((sum, p) => sum + p.interestPayment, 0) / schedule.slice(0, 12).reduce((sum, p) => sum + p.paymentAmount, 0)) * 100).toFixed(0)}% of payments go to interest.
                              </p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-sm">
                                <strong>Midpoint:</strong> You'll pay off 50% of the principal by payment #{Math.floor(schedule.length * 0.7)}.
                              </p>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <p className="text-sm">
                                <strong>Total Interest:</strong> You'll pay {formatCurrency(summary.totalInterest)} in interest over the life of the loan.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Amortization Concepts</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">How Amortization Works:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Fixed monthly payments throughout loan term</li>
                              <li>• Early payments are mostly interest</li>
                              <li>• Later payments are mostly principal</li>
                              <li>• Interest calculated on remaining balance</li>
                              <li>• Principal payment = Total payment - Interest</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Benefits of Extra Payments:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Reduces total interest paid</li>
                              <li>• Shortens loan term significantly</li>
                              <li>• Builds equity faster</li>
                              <li>• No prepayment penalties on most mortgages</li>
                              <li>• Even small extra payments make big difference</li>
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

        {/* Comprehensive Article */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Complete Guide to Loan Amortization: Understanding Your Payment Schedule</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none p-8">
              <article>
                <h3>What is Loan Amortization?</h3>
                <p>
                  Loan amortization is the process of paying off a debt over time through regular payments. Each payment covers both interest and principal, with the proportion changing over the life of the loan. Early payments consist mostly of interest, while later payments apply more toward the principal balance.
                </p>

                <h3>How Amortization Works</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                  <p><strong>Key Principle:</strong> Your monthly payment remains the same, but the allocation between interest and principal changes over time.</p>
                  <ul className="mt-2">
                    <li><strong>Early Years:</strong> Higher interest, lower principal payments</li>
                    <li><strong>Later Years:</strong> Lower interest, higher principal payments</li>
                    <li><strong>Crossover Point:</strong> When principal payments exceed interest payments</li>
                  </ul>
                </div>

                <h3>Benefits of Understanding Your Amortization Schedule</h3>
                <ul>
                  <li><strong>Payment Planning:</strong> Know exactly how much you'll pay over the loan term</li>
                  <li><strong>Interest Savings:</strong> Identify opportunities for extra principal payments</li>
                  <li><strong>Equity Building:</strong> Track how your property equity grows over time</li>
                  <li><strong>Refinancing Decisions:</strong> Compare current loan terms with new options</li>
                  <li><strong>Tax Planning:</strong> Understand deductible interest amounts for investment properties</li>
                </ul>

                <h3>Types of Amortization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-green-600">Fully Amortizing Loans</h4>
                    <p>Most common type. Regular payments completely pay off the loan by the end of the term. Examples: 30-year fixed mortgages, auto loans.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-orange-600">Interest-Only Loans</h4>
                    <p>Initial period with interest-only payments, followed by amortizing payments. Higher risk but lower initial payments.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-purple-600">Balloon Loans</h4>
                    <p>Lower payments during the term with a large final payment. Often used for commercial properties or short-term financing.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-red-600">Negative Amortization</h4>
                    <p>Payments don't cover interest, causing the loan balance to grow. Risky option that should be avoided in most cases.</p>
                  </div>
                </div>

                <h3>Strategies to Pay Off Your Loan Faster</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold">Extra Principal Payments</h4>
                    <p>Adding even $50-100 extra per month can save thousands in interest and years off your loan term.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold">Bi-Weekly Payments</h4>
                    <p>Make half your monthly payment every two weeks. This results in 26 payments per year (equivalent to 13 monthly payments).</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                    <h4 className="font-semibold">Annual Lump Sum</h4>
                    <p>Use tax refunds, bonuses, or windfalls to make large principal payments once per year.</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold">Refinancing to Shorter Term</h4>
                    <p>Switch from a 30-year to 15-year mortgage. Higher monthly payments but significant interest savings.</p>
                  </div>
                </div>

                <h3>Reading Your Amortization Schedule</h3>
                <p>Your amortization schedule shows:</p>
                <ul>
                  <li><strong>Payment Number:</strong> Sequential payment count</li>
                  <li><strong>Payment Amount:</strong> Total monthly payment (principal + interest)</li>
                  <li><strong>Principal:</strong> Amount applied to loan balance</li>
                  <li><strong>Interest:</strong> Amount paid to lender as interest</li>
                  <li><strong>Remaining Balance:</strong> Outstanding loan amount after each payment</li>
                  <li><strong>Cumulative Interest:</strong> Total interest paid to date</li>
                </ul>

                <h3>Impact of Interest Rates</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p><strong>Small Rate Differences = Big Impact:</strong></p>
                  <p>On a $300,000 30-year mortgage:</p>
                  <ul className="mt-2">
                    <li>At 4%: Total interest = $215,609</li>
                    <li>At 5%: Total interest = $279,767</li>
                    <li>At 6%: Total interest = $347,515</li>
                  </ul>
                  <p className="mt-2 font-semibold">A 1% rate increase costs over $64,000 in additional interest!</p>
                </div>

                <h3>Tax Implications for Investment Properties</h3>
                <p>For rental properties, mortgage interest is typically tax-deductible, making the effective cost of borrowing lower. Key considerations:</p>
                <ul>
                  <li>Interest payments reduce taxable rental income</li>
                  <li>Principal payments are not deductible</li>
                  <li>Keep detailed records of all mortgage-related expenses</li>
                  <li>Consider the tax benefits when evaluating loan terms</li>
                </ul>

                <h3>When to Consider Refinancing</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                  <p><strong>General Rule:</strong> Consider refinancing when you can reduce your rate by at least 0.5-1%</p>
                  <p><strong>Break-Even Analysis:</strong> Calculate how long it takes for monthly savings to offset closing costs</p>
                  <p><strong>Timing Matters:</strong> Early in your loan term, you have more interest to save</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                  <p className="font-semibold">Pro Tip</p>
                  <p>
                    Use your amortization schedule to make informed decisions about extra payments, refinancing, and loan terms. Even small changes in your payment strategy can result in significant long-term savings.
                  </p>
                </div>
              </article>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}