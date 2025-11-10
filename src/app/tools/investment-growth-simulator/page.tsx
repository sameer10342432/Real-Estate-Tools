'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Calculator, PieChart as PieChartIcon, BarChart3, Target, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react'

interface InvestmentInputs {
  property: {
    purchasePrice: number
    downPayment: number
    closingCosts: number
    renovationCosts: number
    propertyType: string
    location: string
  }
  financing: {
    loanAmount: number
    interestRate: number
    loanTerm: number
    mortgageType: string
  }
  rental: {
    monthlyRent: number
    rentGrowthRate: number
    vacancyRate: number
    managementFee: number
  }
  expenses: {
    propertyTaxes: number
    insurance: number
    maintenance: number
    repairs: number
    utilities: number
    other: number
    expenseGrowthRate: number
  }
  assumptions: {
    appreciationRate: number
    inflationRate: number
    taxRate: number
    capitalGainsRate: number
    holdingPeriod: number
    sellingCosts: number
  }
}

interface YearlyProjection {
  year: number
  propertyValue: number
  totalEquity: number
  annualRent: number
  totalExpenses: number
  netCashFlow: number
  cumulativeCashFlow: number
  totalReturn: number
  annualizedReturn: number
  mortgageBalance: number
  principalPaydown: number
  taxBenefits: number
}

interface InvestmentSummary {
  totalInvestment: number
  totalCashFlow: number
  totalAppreciation: number
  totalTaxBenefits: number
  totalReturn: number
  annualizedReturn: number
  cashOnCashReturn: number
  capRate: number
  breakEvenYear: number
  projections: YearlyProjection[]
  scenarios: {
    conservative: YearlyProjection[]
    moderate: YearlyProjection[]
    optimistic: YearlyProjection[]
  }
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Investment Growth Simulator Calculator',
    description: 'Simulate long-term investment growth scenarios. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function InvestmentGrowthSimulator() {
  const [inputs, setInputs] = useState<InvestmentInputs>({
    property: {
      purchasePrice: 300000,
      downPayment: 60000,
      closingCosts: 9000,
      renovationCosts: 15000,
      propertyType: 'single-family',
      location: 'suburban'
    },
    financing: {
      loanAmount: 240000,
      interestRate: 6.5,
      loanTerm: 30,
      mortgageType: 'fixed'
    },
    rental: {
      monthlyRent: 2500,
      rentGrowthRate: 3,
      vacancyRate: 5,
      managementFee: 8
    },
    expenses: {
      propertyTaxes: 3600,
      insurance: 1200,
      maintenance: 1800,
      repairs: 1200,
      utilities: 0,
      other: 600,
      expenseGrowthRate: 2.5
    },
    assumptions: {
      appreciationRate: 4,
      inflationRate: 2.5,
      taxRate: 25,
      capitalGainsRate: 15,
      holdingPeriod: 10,
      sellingCosts: 6
    }
  })

  const [results, setResults] = useState<InvestmentSummary | null>(null)
  const [selectedScenario, setSelectedScenario] = useState<'conservative' | 'moderate' | 'optimistic'>('moderate')

  const calculateProjections = () => {
    const scenarios = {
      conservative: { appreciation: inputs.assumptions.appreciationRate - 1, rentGrowth: inputs.rental.rentGrowthRate - 1 },
      moderate: { appreciation: inputs.assumptions.appreciationRate, rentGrowth: inputs.rental.rentGrowthRate },
      optimistic: { appreciation: inputs.assumptions.appreciationRate + 1, rentGrowth: inputs.rental.rentGrowthRate + 1 }
    }

    const calculateScenario = (appreciationRate: number, rentGrowthRate: number): YearlyProjection[] => {
      const projections: YearlyProjection[] = []
      const monthlyPayment = calculateMonthlyPayment(inputs.financing.loanAmount, inputs.financing.interestRate, inputs.financing.loanTerm)
      
      let currentPropertyValue = inputs.property.purchasePrice
      let currentRent = inputs.rental.monthlyRent
      let currentExpenses = inputs.expenses.propertyTaxes + inputs.expenses.insurance + inputs.expenses.maintenance + 
                           inputs.expenses.repairs + inputs.expenses.utilities + inputs.expenses.other
      let mortgageBalance = inputs.financing.loanAmount
      let cumulativeCashFlow = 0

      for (let year = 1; year <= inputs.assumptions.holdingPeriod; year++) {
        // Property appreciation
        currentPropertyValue *= (1 + appreciationRate / 100)
        
        // Rent growth
        currentRent *= (1 + rentGrowthRate / 100)
        
        // Expense growth
        currentExpenses *= (1 + inputs.expenses.expenseGrowthRate / 100)
        
        // Annual rent after vacancy and management
        const effectiveRent = currentRent * 12 * (1 - inputs.rental.vacancyRate / 100)
        const managementCost = effectiveRent * (inputs.rental.managementFee / 100)
        const annualRent = effectiveRent - managementCost
        
        // Total annual expenses including mortgage
        const totalExpenses = currentExpenses + (monthlyPayment * 12)
        
        // Net cash flow
        const netCashFlow = annualRent - totalExpenses
        cumulativeCashFlow += netCashFlow
        
        // Mortgage balance and principal paydown
        const yearlyInterest = mortgageBalance * (inputs.financing.interestRate / 100)
        const yearlyPrincipal = (monthlyPayment * 12) - yearlyInterest
        mortgageBalance -= yearlyPrincipal
        
        // Tax benefits (depreciation + interest deduction)
        const depreciation = inputs.property.purchasePrice * 0.0364 // 27.5 years for residential
        const taxBenefits = (depreciation + yearlyInterest) * (inputs.assumptions.taxRate / 100)
        
        // Total equity
        const totalEquity = currentPropertyValue - mortgageBalance
        
        // Total return calculation
        const totalInvestment = inputs.property.downPayment + inputs.property.closingCosts + inputs.property.renovationCosts
        const totalReturn = totalEquity - totalInvestment + cumulativeCashFlow + (taxBenefits * year)
        const annualizedReturn = Math.pow(totalReturn / totalInvestment + 1, 1 / year) - 1
        
        projections.push({
          year,
          propertyValue: currentPropertyValue,
          totalEquity,
          annualRent,
          totalExpenses,
          netCashFlow,
          cumulativeCashFlow,
          totalReturn,
          annualizedReturn: annualizedReturn * 100,
          mortgageBalance,
          principalPaydown: yearlyPrincipal,
          taxBenefits
        })
      }
      
      return projections
    }

    const moderateProjections = calculateScenario(scenarios.moderate.appreciation, scenarios.moderate.rentGrowth)
    const conservativeProjections = calculateScenario(scenarios.conservative.appreciation, scenarios.conservative.rentGrowth)
    const optimisticProjections = calculateScenario(scenarios.optimistic.appreciation, scenarios.optimistic.rentGrowth)

    // Calculate summary metrics
    const totalInvestment = inputs.property.downPayment + inputs.property.closingCosts + inputs.property.renovationCosts
    const finalProjection = moderateProjections[moderateProjections.length - 1]
    
    const totalCashFlow = finalProjection.cumulativeCashFlow
    const totalAppreciation = finalProjection.propertyValue - inputs.property.purchasePrice
    const totalTaxBenefits = finalProjection.taxBenefits * inputs.assumptions.holdingPeriod
    const totalReturn = finalProjection.totalReturn
    const annualizedReturn = finalProjection.annualizedReturn
    
    const firstYearCashFlow = moderateProjections[0].netCashFlow
    const cashOnCashReturn = (firstYearCashFlow / totalInvestment) * 100
    
    const firstYearNOI = moderateProjections[0].annualRent - (inputs.expenses.propertyTaxes + inputs.expenses.insurance + 
                         inputs.expenses.maintenance + inputs.expenses.repairs + inputs.expenses.utilities + inputs.expenses.other)
    const capRate = (firstYearNOI / inputs.property.purchasePrice) * 100
    
    const breakEvenYear = moderateProjections.findIndex(p => p.cumulativeCashFlow > 0) + 1

    const summary: InvestmentSummary = {
      totalInvestment,
      totalCashFlow,
      totalAppreciation,
      totalTaxBenefits,
      totalReturn,
      annualizedReturn,
      cashOnCashReturn,
      capRate,
      breakEvenYear: breakEvenYear || inputs.assumptions.holdingPeriod,
      projections: moderateProjections,
      scenarios: {
        conservative: conservativeProjections,
        moderate: moderateProjections,
        optimistic: optimisticProjections
      }
    }

    setResults(summary)
  }

  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12
    const numPayments = years * 12
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  const getReturnColor = (value: number) => {
    if (value >= 15) return 'text-green-600'
    if (value >= 10) return 'text-blue-600'
    if (value >= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <TrendingUp className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Investment Growth Simulator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze and visualize real estate investment performance with comprehensive projections, scenarios, and detailed financial analysis over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Investment Parameters
                </CardTitle>
                <CardDescription>
                  Enter your investment details for comprehensive analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="financing">Financing</TabsTrigger>
                    <TabsTrigger value="rental">Rental</TabsTrigger>
                    <TabsTrigger value="assumptions">Assumptions</TabsTrigger>
                    <TabsTrigger value="article"><BookOpen className="w-4 h-4 mr-2" />Article</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="property" className="space-y-4">
                    <div>
                      <Label htmlFor="purchasePrice">Purchase Price</Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        value={inputs.property.purchasePrice}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          property: { ...prev.property, purchasePrice: Number(e.target.value) }
                        }))}
                        placeholder="300000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="downPayment">Down Payment</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={inputs.property.downPayment}
                        onChange={(e) => {
                          const downPayment = Number(e.target.value)
                          setInputs(prev => ({
                            ...prev,
                            property: { ...prev.property, downPayment },
                            financing: { ...prev.financing, loanAmount: prev.property.purchasePrice - downPayment }
                          }))
                        }}
                        placeholder="60000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="closingCosts">Closing Costs</Label>
                      <Input
                        id="closingCosts"
                        type="number"
                        value={inputs.property.closingCosts}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          property: { ...prev.property, closingCosts: Number(e.target.value) }
                        }))}
                        placeholder="9000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="renovationCosts">Renovation Costs</Label>
                      <Input
                        id="renovationCosts"
                        type="number"
                        value={inputs.property.renovationCosts}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          property: { ...prev.property, renovationCosts: Number(e.target.value) }
                        }))}
                        placeholder="15000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select 
                        value={inputs.property.propertyType} 
                        onValueChange={(value) => setInputs(prev => ({
                          ...prev,
                          property: { ...prev.property, propertyType: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="triplex">Triplex</SelectItem>
                          <SelectItem value="fourplex">Fourplex</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="apartment">Apartment Building</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="financing" className="space-y-4">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={inputs.financing.loanAmount}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          financing: { ...prev.financing, loanAmount: Number(e.target.value) }
                        }))}
                        placeholder="240000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={inputs.financing.interestRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          financing: { ...prev.financing, interestRate: Number(e.target.value) }
                        }))}
                        placeholder="6.5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={inputs.financing.loanTerm}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          financing: { ...prev.financing, loanTerm: Number(e.target.value) }
                        }))}
                        placeholder="30"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="mortgageType">Mortgage Type</Label>
                      <Select 
                        value={inputs.financing.mortgageType} 
                        onValueChange={(value) => setInputs(prev => ({
                          ...prev,
                          financing: { ...prev.financing, mortgageType: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Fixed Rate</SelectItem>
                          <SelectItem value="arm">Adjustable Rate (ARM)</SelectItem>
                          <SelectItem value="interest-only">Interest Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="rental" className="space-y-4">
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={inputs.rental.monthlyRent}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          rental: { ...prev.rental, monthlyRent: Number(e.target.value) }
                        }))}
                        placeholder="2500"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="rentGrowthRate">Annual Rent Growth (%)</Label>
                      <Input
                        id="rentGrowthRate"
                        type="number"
                        step="0.1"
                        value={inputs.rental.rentGrowthRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          rental: { ...prev.rental, rentGrowthRate: Number(e.target.value) }
                        }))}
                        placeholder="3"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                      <Input
                        id="vacancyRate"
                        type="number"
                        step="0.1"
                        value={inputs.rental.vacancyRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          rental: { ...prev.rental, vacancyRate: Number(e.target.value) }
                        }))}
                        placeholder="5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="managementFee">Management Fee (%)</Label>
                      <Input
                        id="managementFee"
                        type="number"
                        step="0.1"
                        value={inputs.rental.managementFee}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          rental: { ...prev.rental, managementFee: Number(e.target.value) }
                        }))}
                        placeholder="8"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p><strong>Annual Expenses:</strong></p>
                      <div className="mt-2 space-y-1">
                        <div>Property Taxes: {formatCurrency(inputs.expenses.propertyTaxes)}</div>
                        <div>Insurance: {formatCurrency(inputs.expenses.insurance)}</div>
                        <div>Maintenance: {formatCurrency(inputs.expenses.maintenance)}</div>
                        <div>Repairs: {formatCurrency(inputs.expenses.repairs)}</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="assumptions" className="space-y-4">
                    <div>
                      <Label htmlFor="appreciationRate">Annual Appreciation (%)</Label>
                      <Input
                        id="appreciationRate"
                        type="number"
                        step="0.1"
                        value={inputs.assumptions.appreciationRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          assumptions: { ...prev.assumptions, appreciationRate: Number(e.target.value) }
                        }))}
                        placeholder="4"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="holdingPeriod">Holding Period (Years)</Label>
                      <Input
                        id="holdingPeriod"
                        type="number"
                        value={inputs.assumptions.holdingPeriod}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          assumptions: { ...prev.assumptions, holdingPeriod: Number(e.target.value) }
                        }))}
                        placeholder="10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="taxRate">Tax Rate (%)</Label>
                      <Input
                        id="taxRate"
                        type="number"
                        step="0.1"
                        value={inputs.assumptions.taxRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          assumptions: { ...prev.assumptions, taxRate: Number(e.target.value) }
                        }))}
                        placeholder="25"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="capitalGainsRate">Capital Gains Rate (%)</Label>
                      <Input
                        id="capitalGainsRate"
                        type="number"
                        step="0.1"
                        value={inputs.assumptions.capitalGainsRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          assumptions: { ...prev.assumptions, capitalGainsRate: Number(e.target.value) }
                        }))}
                        placeholder="15"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="sellingCosts">Selling Costs (%)</Label>
                      <Input
                        id="sellingCosts"
                        type="number"
                        step="0.1"
                        value={inputs.assumptions.sellingCosts}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          assumptions: { ...prev.assumptions, sellingCosts: Number(e.target.value) }
                        }))}
                        placeholder="6"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="expenseGrowthRate">Expense Growth Rate (%)</Label>
                      <Input
                        id="expenseGrowthRate"
                        type="number"
                        step="0.1"
                        value={inputs.expenses.expenseGrowthRate}
                        onChange={(e) => setInputs(prev => ({
                          ...prev,
                          expenses: { ...prev.expenses, expenseGrowthRate: Number(e.target.value) }
                        }))}
                        placeholder="2.5"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Guide to Real Estate Investment Growth Simulation</h2>
                      
                      {/* Key Takeaways */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Takeaways</h3>
                        <ul className="space-y-2 text-blue-800">
                          <li>• Investment growth simulation provides comprehensive long-term financial projections for real estate investments</li>
                          <li>• Accurate modeling requires consideration of property appreciation, rental income growth, expenses, and tax implications</li>
                          <li>• Time horizon significantly impacts investment returns due to compound growth effects</li>
                          <li>• Sensitivity analysis helps identify key variables that most impact investment performance</li>
                          <li>• Regular model updates with actual performance data improve future projection accuracy</li>
                          <li>• Understanding various exit strategies helps optimize investment timing and returns</li>
                        </ul>
                      </div>

                      {/* Why Investment Growth Simulation Is Critical */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Investment Growth Simulation Is Critical</h3>
                        <p className="text-gray-700 mb-4">
                          Investment growth simulation is essential for making informed real estate investment decisions and managing long-term portfolio performance:
                        </p>
                        <ul className="space-y-3 text-gray-700 ml-6">
                          <li>• <strong>Long-term Planning:</strong> Projects investment performance over multiple years to support strategic decision-making</li>
                          <li>• <strong>Risk Assessment:</strong> Identifies potential scenarios and their impact on investment returns</li>
                          <li>• <strong>Cash Flow Forecasting:</strong> Predicts future cash flows to support financing and liquidity planning</li>
                          <li>• <strong>Portfolio Optimization:</strong> Compares different investment opportunities and timing strategies</li>
                          <li>• <strong>Exit Strategy Planning:</strong> Determines optimal holding periods and exit timing</li>
                          <li>• <strong>Performance Benchmarking:</strong> Establishes expected returns for performance evaluation</li>
                          <li>• <strong>Financing Decisions:</strong> Evaluates impact of different financing structures on returns</li>
                          <li>• <strong>Tax Planning:</strong> Models tax implications of different investment strategies</li>
                        </ul>
                      </div>

                      {/* Understanding Investment Growth Modeling */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Investment Growth Modeling</h3>
                        <p className="text-gray-700 mb-4">
                          Investment growth simulation combines multiple financial components to project total investment returns over time. 
                          This comprehensive approach considers both income generation and capital appreciation.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Core Components</h4>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">Income Components</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Rental income growth</li>
                              <li>• Vacancy adjustments</li>
                              <li>• Operating expense increases</li>
                              <li>• Net operating income trends</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">Capital Components</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Property value appreciation</li>
                              <li>• Mortgage principal paydown</li>
                              <li>• Capital improvements</li>
                              <li>• Selling costs and taxes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Simulation Methodology */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Simulation Methodology</h3>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">1. Cash Flow Projection</h4>
                        <p className="text-gray-700 mb-4">
                          Annual cash flow calculations incorporate rental income growth, expense increases, and debt service to project net cash flows over the investment period.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">2. Property Value Modeling</h4>
                        <p className="text-gray-700 mb-4">
                          Property appreciation is modeled using historical market data, economic indicators, and location-specific factors to project future values.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">3. Total Return Calculation</h4>
                        <p className="text-gray-700 mb-4">
                          Total returns combine cumulative cash flows, mortgage principal reduction, and capital appreciation to determine overall investment performance.
                        </p>
                      </div>

                      {/* Key Variables and Assumptions */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Variables and Assumptions</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Market Variables</h4>
                            <ul className="text-gray-700 space-y-2">
                              <li>• <strong>Appreciation Rate:</strong> Annual property value growth (typically 2-5%)</li>
                              <li>• <strong>Rent Growth:</strong> Annual rental income increases (typically 2-4%)</li>
                              <li>• <strong>Vacancy Rate:</strong> Expected vacancy periods (typically 5-10%)</li>
                              <li>• <strong>Cap Rate Trends:</strong> Market capitalization rate changes</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Investment Variables</h4>
                            <ul className="text-gray-700 space-y-2">
                              <li>• <strong>Holding Period:</strong> Investment timeline (typically 5-30 years)</li>
                              <li>• <strong>Financing Terms:</strong> Loan amount, rate, and amortization</li>
                              <li>• <strong>Expense Growth:</strong> Operating cost increases (typically 2-3%)</li>
                              <li>• <strong>Capital Improvements:</strong> Major renovation and upgrade costs</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Advanced Simulation Techniques */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Simulation Techniques</h3>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Monte Carlo Analysis</h4>
                        <p className="text-gray-700 mb-4">
                          Monte Carlo simulation runs thousands of scenarios with varying assumptions to provide probability distributions of potential outcomes and risk assessments.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Sensitivity Analysis</h4>
                        <p className="text-gray-700 mb-4">
                          Sensitivity analysis examines how changes in key variables (appreciation rates, rent growth, vacancy) impact overall returns, helping identify critical success factors.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Scenario Planning</h4>
                        <p className="text-gray-700 mb-4">
                          Multiple scenarios (optimistic, base case, pessimistic) provide a range of potential outcomes and help investors prepare for different market conditions.
                        </p>
                      </div>

                      {/* Technology and Data Integration */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology and Data Integration</h3>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Market Data Sources</h4>
                        <ul className="text-gray-700 space-y-2 mb-4">
                          <li>• MLS historical sales data</li>
                          <li>• Rental market surveys and reports</li>
                          <li>• Economic indicators and forecasts</li>
                          <li>• Property tax and assessment records</li>
                        </ul>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Automated Updates</h4>
                        <p className="text-gray-700 mb-4">
                          Modern simulation tools integrate with real-time data feeds to automatically update market assumptions and improve projection accuracy.
                        </p>
                      </div>

                      {/* Common Modeling Challenges */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Modeling Challenges</h3>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                          <h4 className="font-semibold text-yellow-800 mb-2">Assumption Accuracy</h4>
                          <p className="text-yellow-700 text-sm">
                            Long-term projections are sensitive to assumption accuracy. Small changes in growth rates compound significantly over time.
                          </p>
                        </div>
                        
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                          <h4 className="font-semibold text-red-800 mb-2">Market Cycle Timing</h4>
                          <p className="text-red-700 text-sm">
                            Real estate markets are cyclical. Models should account for potential market downturns and recovery periods.
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Liquidity Considerations</h4>
                          <p className="text-blue-700 text-sm">
                            Real estate is illiquid. Exit timing may be constrained by market conditions, affecting actual returns.
                          </p>
                        </div>
                      </div>

                      {/* Best Practices */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Simulation Best Practices</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Model Development</h4>
                            <ul className="text-gray-700 space-y-2">
                              <li>• Use conservative assumptions for base case scenarios</li>
                              <li>• Include multiple scenarios and sensitivity analysis</li>
                              <li>• Regular model validation with actual performance</li>
                              <li>• Document all assumptions and data sources</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Ongoing Management</h4>
                            <ul className="text-gray-700 space-y-2">
                              <li>• Update models annually with actual performance</li>
                              <li>• Adjust assumptions based on market changes</li>
                              <li>• Monitor key performance indicators regularly</li>
                              <li>• Prepare contingency plans for adverse scenarios</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Future of Investment Simulation */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Future of Investment Simulation</h3>
                        <p className="text-gray-700 mb-4">
                          Investment simulation technology continues to evolve with artificial intelligence, machine learning, and big data analytics 
                          providing more sophisticated and accurate projections.
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Emerging Technologies</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• AI-powered market prediction models</li>
                          <li>• Real-time data integration and updates</li>
                          <li>• Blockchain-based property data verification</li>
                          <li>• Advanced visualization and reporting tools</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-6">
                        <h4 className="font-semibold text-green-800 mb-2">Professional Recommendation</h4>
                        <p className="text-green-700">
                          While simulation tools provide valuable insights, consider consulting with real estate investment professionals 
                          for complex investment decisions. Combine quantitative analysis with qualitative market knowledge for optimal results.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button onClick={calculateProjections} className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Calculate Investment Growth
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {results && (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.totalReturn)}</div>
                      <div className="text-sm text-blue-700">Total Return</div>
                      <div className="text-xs text-gray-600">{inputs.assumptions.holdingPeriod} years</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className={`text-2xl font-bold ${getReturnColor(results.annualizedReturn)}`}>
                        {formatPercent(results.annualizedReturn)}
                      </div>
                      <div className="text-sm text-gray-700">Annualized Return</div>
                      <div className="text-xs text-gray-600">IRR</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className={`text-2xl font-bold ${getReturnColor(results.cashOnCashReturn)}`}>
                        {formatPercent(results.cashOnCashReturn)}
                      </div>
                      <div className="text-sm text-gray-700">Cash-on-Cash</div>
                      <div className="text-xs text-gray-600">Year 1</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className={`text-2xl font-bold ${getReturnColor(results.capRate)}`}>
                        {formatPercent(results.capRate)}
                      </div>
                      <div className="text-sm text-gray-700">Cap Rate</div>
                      <div className="text-xs text-gray-600">NOI/Price</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Scenario Selector */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Investment Projections
                      </span>
                      <Select value={selectedScenario} onValueChange={(value) => setSelectedScenario(value as 'conservative' | 'moderate' | 'optimistic')}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="optimistic">Optimistic</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 mb-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={results.scenarios[selectedScenario]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                          <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                          <Legend />
                          <Line type="monotone" dataKey="propertyValue" stroke="#10b981" strokeWidth={2} name="Property Value" />
                          <Line type="monotone" dataKey="totalEquity" stroke="#3b82f6" strokeWidth={2} name="Total Equity" />
                          <Line type="monotone" dataKey="cumulativeCashFlow" stroke="#f59e0b" strokeWidth={2} name="Cumulative Cash Flow" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-700">Final Property Value</div>
                        <div className="text-xl font-semibold text-green-600">
                          {formatCurrency(results.scenarios[selectedScenario][results.scenarios[selectedScenario].length - 1].propertyValue)}
                        </div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-blue-700">Total Equity Built</div>
                        <div className="text-xl font-semibold text-blue-600">
                          {formatCurrency(results.scenarios[selectedScenario][results.scenarios[selectedScenario].length - 1].totalEquity)}
                        </div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="text-sm text-yellow-700">Cumulative Cash Flow</div>
                        <div className="text-xl font-semibold text-yellow-600">
                          {formatCurrency(results.scenarios[selectedScenario][results.scenarios[selectedScenario].length - 1].cumulativeCashFlow)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Return Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChartIcon className="h-5 w-5 mr-2" />
                      Return Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'Cash Flow', value: Math.max(0, results.totalCashFlow), color: '#10b981' },
                                { name: 'Appreciation', value: Math.max(0, results.totalAppreciation), color: '#3b82f6' },
                                { name: 'Tax Benefits', value: Math.max(0, results.totalTaxBenefits), color: '#f59e0b' },
                                { name: 'Principal Paydown', value: Math.max(0, inputs.financing.loanAmount - results.projections[results.projections.length - 1].mortgageBalance), color: '#8b5cf6' }
                              ]}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {[0, 1, 2, 3].map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value: number) => formatCurrency(value)} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                          <span className="text-green-700">Cash Flow</span>
                          <span className="font-semibold text-green-600">{formatCurrency(results.totalCashFlow)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                          <span className="text-blue-700">Appreciation</span>
                          <span className="font-semibold text-blue-600">{formatCurrency(results.totalAppreciation)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                          <span className="text-yellow-700">Tax Benefits</span>
                          <span className="font-semibold text-yellow-600">{formatCurrency(results.totalTaxBenefits)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                          <span className="text-purple-700">Principal Paydown</span>
                          <span className="font-semibold text-purple-600">
                            {formatCurrency(inputs.financing.loanAmount - results.projections[results.projections.length - 1].mortgageBalance)}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
                          <span className="text-gray-700 font-semibold">Total Return</span>
                          <span className="font-bold text-gray-900">{formatCurrency(results.totalReturn)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Key Investment Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Initial Investment</span>
                          <span className="font-semibold">{formatCurrency(results.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Break-even Year</span>
                          <span className="font-semibold">Year {results.breakEvenYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monthly Cash Flow (Year 1)</span>
                          <span className="font-semibold">{formatCurrency(results.projections[0].netCashFlow / 12)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monthly Cash Flow (Final Year)</span>
                          <span className="font-semibold">{formatCurrency(results.projections[results.projections.length - 1].netCashFlow / 12)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loan-to-Value Ratio</span>
                          <span className="font-semibold">{formatPercent((inputs.financing.loanAmount / inputs.property.purchasePrice) * 100)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Debt Service Coverage</span>
                          <span className="font-semibold">{(results.projections[0].annualRent / (calculateMonthlyPayment(inputs.financing.loanAmount, inputs.financing.interestRate, inputs.financing.loanTerm) * 12)).toFixed(2)}x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Gross Rent Multiplier</span>
                          <span className="font-semibold">{(inputs.property.purchasePrice / (inputs.rental.monthlyRent * 12)).toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">1% Rule</span>
                          <span className={`font-semibold ${(inputs.rental.monthlyRent / inputs.property.purchasePrice) >= 0.01 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatPercent((inputs.rental.monthlyRent / inputs.property.purchasePrice) * 100)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Real Estate Investment Analysis Guide</CardTitle>
              <CardDescription>
                Comprehensive guide to analyzing real estate investments, understanding key metrics, and maximizing returns
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Investment Analysis Fundamentals</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Key Performance Metrics</h4>
                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-semibold text-blue-800">Cap Rate (Capitalization Rate)</h5>
                      <p className="text-sm text-blue-600">NOI ÷ Property Value. Measures the property's ability to generate income relative to its value.</p>
                      <p className="text-xs text-blue-500">Good: 6-10% | Excellent: 10%+</p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800">Cash-on-Cash Return</h5>
                      <p className="text-sm text-green-600">Annual Cash Flow ÷ Initial Cash Investment. Measures return on actual cash invested.</p>
                      <p className="text-xs text-green-500">Good: 8-12% | Excellent: 12%+</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-semibold text-purple-800">Internal Rate of Return (IRR)</h5>
                      <p className="text-sm text-purple-600">Annualized return considering all cash flows and time value of money.</p>
                      <p className="text-xs text-purple-500">Good: 12-15% | Excellent: 15%+</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">The Four Pillars of Real Estate Returns</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li><strong>Cash Flow:</strong> Monthly rental income minus all expenses</li>
                    <li><strong>Appreciation:</strong> Property value growth over time</li>
                    <li><strong>Tax Benefits:</strong> Depreciation, interest deductions, and other tax advantages</li>
                    <li><strong>Principal Paydown:</strong> Mortgage balance reduction through tenant payments</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">Investment Property Rules of Thumb</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">1% Rule</span>
                      <span className="text-sm">Monthly rent ≥ 1% of purchase price</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">2% Rule</span>
                      <span className="text-sm">Monthly rent ≥ 2% of purchase price (rare)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">50% Rule</span>
                      <span className="text-sm">Operating expenses ≈ 50% of rental income</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">70% Rule</span>
                      <span className="text-sm">Max offer = ARV × 70% - repair costs</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Investment Strategies & Scenarios</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Buy and Hold Strategy</h4>
                  <p className="text-gray-600 mb-4">
                    Long-term wealth building through rental income and appreciation. Best for stable markets with good rental demand.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Focus on cash flow positive properties</li>
                    <li>Target growing neighborhoods</li>
                    <li>Consider property management costs</li>
                    <li>Plan for maintenance and vacancy</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">BRRRR Strategy</h4>
                  <p className="text-gray-600 mb-2">
                    Buy, Rehab, Rent, Refinance, Repeat. Recycle capital for multiple investments.
                  </p>
                  <div className="space-y-1 mb-4 text-sm">
                    <div className="flex items-center p-2 bg-blue-50 rounded">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                      <span><strong>Buy:</strong> Below-market distressed property</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                      <span><strong>Rehab:</strong> Add value through improvements</span>
                    </div>
                    <div className="flex items-center p-2 bg-yellow-50 rounded">
                      <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                      <span><strong>Rent:</strong> Generate cash flow</span>
                    </div>
                    <div className="flex items-center p-2 bg-purple-50 rounded">
                      <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                      <span><strong>Refinance:</strong> Pull out capital</span>
                    </div>
                    <div className="flex items-center p-2 bg-red-50 rounded">
                      <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                      <span><strong>Repeat:</strong> Use capital for next deal</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">Market Analysis Factors</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Population and job growth trends</li>
                    <li>Rental demand and vacancy rates</li>
                    <li>Average days on market</li>
                    <li>Price-to-rent ratios</li>
                    <li>Local economic drivers</li>
                    <li>Future development plans</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">Risk Management</h4>
                  <div className="space-y-2 mb-4">
                    <div className="p-3 bg-red-50 rounded">
                      <h5 className="font-semibold text-red-800">Market Risk</h5>
                      <p className="text-sm text-red-600">Property values and rents can decline</p>
                      <p className="text-xs text-red-500">Mitigation: Diversify locations and property types</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded">
                      <h5 className="font-semibold text-orange-800">Liquidity Risk</h5>
                      <p className="text-sm text-orange-600">Real estate is not easily converted to cash</p>
                      <p className="text-xs text-orange-500">Mitigation: Maintain cash reserves</p>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 rounded">
                      <h5 className="font-semibold text-yellow-800">Tenant Risk</h5>
                      <p className="text-sm text-yellow-600">Vacancy, non-payment, property damage</p>
                      <p className="text-xs text-yellow-500">Mitigation: Thorough screening, insurance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Investment Considerations</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tax Strategies</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Depreciation deductions (27.5 years residential)</li>
                      <li>Interest expense deductions</li>
                      <li>1031 exchanges for tax deferral</li>
                      <li>Cost segregation studies</li>
                      <li>Opportunity zones</li>
                      <li>Real estate professional status</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Financing Options</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Conventional investment loans (20-25% down)</li>
                      <li>Portfolio lenders</li>
                      <li>Hard money loans (short-term)</li>
                      <li>Private money lenders</li>
                      <li>Seller financing</li>
                      <li>HELOC for down payments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Exit Strategies</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Hold for long-term cash flow</li>
                      <li>Sell for capital appreciation</li>
                      <li>1031 exchange to larger property</li>
                      <li>Convert to primary residence</li>
                      <li>Refinance and hold</li>
                      <li>Pass to heirs (stepped-up basis)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-800 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Investment Success Tips
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Before Investing</h5>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Build emergency fund (6+ months expenses)</li>
                      <li>Improve credit score for better rates</li>
                      <li>Research markets thoroughly</li>
                      <li>Network with local professionals</li>
                      <li>Start with house hacking or small multifamily</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">During Ownership</h5>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Screen tenants thoroughly</li>
                      <li>Maintain properties proactively</li>
                      <li>Keep detailed financial records</li>
                      <li>Review and adjust rents annually</li>
                      <li>Build relationships with contractors</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-yellow-800 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Common Investment Mistakes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-yellow-600 text-sm">
                    <li>Underestimating expenses and vacancy</li>
                    <li>Buying in declining neighborhoods</li>
                    <li>Over-leveraging without reserves</li>
                    <li>Ignoring property management costs</li>
                    <li>Emotional decision making</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-yellow-600 text-sm">
                    <li>Skipping due diligence</li>
                    <li>Not having exit strategy</li>
                    <li>Mixing personal and business finances</li>
                    <li>Ignoring tax implications</li>
                    <li>Trying to time the market</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}