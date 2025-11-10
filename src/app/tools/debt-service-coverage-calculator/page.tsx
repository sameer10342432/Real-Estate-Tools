'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertCircle, Calculator, TrendingUp, DollarSign, FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

interface PropertyData {
  grossRentalIncome: number
  vacancy: number
  operatingExpenses: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  propertyType: string
  location: string
}

interface DSCRResults {
  noi: number
  annualDebtService: number
  monthlyDebtService: number
  dscr: number
  qualification: string
  riskLevel: string
  recommendations: string[]
  lenderRequirements: {
    conventional: number
    portfolio: number
    commercial: number
  }
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Debt Service Coverage Calculator',
    description: 'Calculate debt service coverage ratios for commercial properties. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function DebtServiceCoverageCalculator() {
  const [activeTab, setActiveTab] = useState('calculator')
  const [propertyData, setPropertyData] = useState<PropertyData>({
    grossRentalIncome: 0,
    vacancy: 5,
    operatingExpenses: 0,
    loanAmount: 0,
    interestRate: 6.5,
    loanTerm: 30,
    propertyType: 'single-family',
    location: 'suburban'
  })
  const [results, setResults] = useState<DSCRResults | null>(null)

  const calculateDSCR = () => {
    const effectiveGrossIncome = propertyData.grossRentalIncome * (1 - propertyData.vacancy / 100)
    const noi = effectiveGrossIncome - propertyData.operatingExpenses
    
    // Calculate monthly payment using loan formula
    const monthlyRate = propertyData.interestRate / 100 / 12
    const numPayments = propertyData.loanTerm * 12
    const monthlyPayment = propertyData.loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    const annualDebtService = monthlyPayment * 12
    const dscr = noi / annualDebtService

    let qualification = ''
    let riskLevel = ''
    let recommendations: string[] = []

    if (dscr >= 1.25) {
      qualification = 'Excellent'
      riskLevel = 'Low'
      recommendations = [
        'Strong DSCR indicates excellent loan qualification',
        'Consider negotiating better loan terms',
        'Property shows strong cash flow potential'
      ]
    } else if (dscr >= 1.15) {
      qualification = 'Good'
      riskLevel = 'Moderate'
      recommendations = [
        'Good DSCR for most lenders',
        'Consider increasing rental income or reducing expenses',
        'Monitor market conditions for optimization'
      ]
    } else if (dscr >= 1.0) {
      qualification = 'Marginal'
      riskLevel = 'High'
      recommendations = [
        'DSCR may not meet lender requirements',
        'Consider larger down payment to reduce loan amount',
        'Explore ways to increase rental income'
      ]
    } else {
      qualification = 'Poor'
      riskLevel = 'Very High'
      recommendations = [
        'DSCR below 1.0 indicates negative cash flow',
        'Property may not qualify for financing',
        'Significant restructuring needed'
      ]
    }

    setResults({
      noi,
      annualDebtService,
      monthlyDebtService: monthlyPayment,
      dscr,
      qualification,
      riskLevel,
      recommendations,
      lenderRequirements: {
        conventional: 1.25,
        portfolio: 1.15,
        commercial: 1.20
      }
    })
    setActiveTab('results')
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getQualificationColor = (qualification: string) => {
    switch (qualification) {
      case 'Excellent': return 'bg-green-500'
      case 'Good': return 'bg-blue-500'
      case 'Marginal': return 'bg-yellow-500'
      case 'Poor': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getQualificationIcon = (qualification: string) => {
    switch (qualification) {
      case 'Excellent': return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'Good': return <CheckCircle className="h-5 w-5 text-blue-500" />
      case 'Marginal': return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'Poor': return <XCircle className="h-5 w-5 text-red-500" />
      default: return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Debt Service Coverage Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your debt service coverage ratio (DSCR) to determine loan qualification and analyze investment property cash flow performance.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Results
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Income */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Property Income
                </CardTitle>
                <CardDescription>
                  Enter your property's income details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="grossRentalIncome">Annual Gross Rental Income</Label>
                  <Input
                    id="grossRentalIncome"
                    type="number"
                    value={propertyData.grossRentalIncome || ''}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      grossRentalIncome: Number(e.target.value)
                    })}
                    placeholder="120000"
                  />
                </div>
                <div>
                  <Label htmlFor="vacancy">Vacancy Rate (%)</Label>
                  <Input
                    id="vacancy"
                    type="number"
                    value={propertyData.vacancy}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      vacancy: Number(e.target.value)
                    })}
                    placeholder="5"
                  />
                </div>
                <div>
                  <Label htmlFor="operatingExpenses">Annual Operating Expenses</Label>
                  <Input
                    id="operatingExpenses"
                    type="number"
                    value={propertyData.operatingExpenses || ''}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      operatingExpenses: Number(e.target.value)
                    })}
                    placeholder="36000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Loan Details
                </CardTitle>
                <CardDescription>
                  Enter your loan information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={propertyData.loanAmount || ''}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      loanAmount: Number(e.target.value)
                    })}
                    placeholder="800000"
                  />
                </div>
                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={propertyData.interestRate}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      interestRate: Number(e.target.value)
                    })}
                    placeholder="6.5"
                  />
                </div>
                <div>
                  <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    value={propertyData.loanTerm}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      loanTerm: Number(e.target.value)
                    })}
                    placeholder="30"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Button 
                onClick={calculateDSCR} 
                className="w-full"
                size="lg"
                disabled={!propertyData.grossRentalIncome || !propertyData.loanAmount}
              >
                Calculate DSCR
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {results.dscr.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">DSCR</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(results.noi)}
                      </div>
                      <div className="text-sm text-gray-600">Net Operating Income</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {formatCurrency(results.annualDebtService)}
                      </div>
                      <div className="text-sm text-gray-600">Annual Debt Service</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {formatCurrency(results.monthlyDebtService)}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Payment</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Qualification Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {getQualificationIcon(results.qualification)}
                    Loan Qualification Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Qualification Level:</span>
                      <Badge className={getQualificationColor(results.qualification)}>
                        {results.qualification}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Risk Level:</span>
                      <Badge variant="outline">{results.riskLevel}</Badge>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>DSCR Progress</span>
                        <span>{results.dscr.toFixed(2)} / 1.25</span>
                      </div>
                      <Progress value={Math.min((results.dscr / 1.25) * 100, 100)} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lender Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Lender Requirements Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-semibold">Conventional</div>
                        <div className="text-2xl font-bold text-blue-600">
                          {results.lenderRequirements.conventional.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">Minimum DSCR</div>
                        {results.dscr >= results.lenderRequirements.conventional ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto mt-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto mt-2" />
                        )}
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-semibold">Portfolio</div>
                        <div className="text-2xl font-bold text-green-600">
                          {results.lenderRequirements.portfolio.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">Minimum DSCR</div>
                        {results.dscr >= results.lenderRequirements.portfolio ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto mt-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto mt-2" />
                        )}
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-semibold">Commercial</div>
                        <div className="text-2xl font-bold text-purple-600">
                          {results.lenderRequirements.commercial.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">Minimum DSCR</div>
                        {results.dscr >= results.lenderRequirements.commercial ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto mt-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto mt-2" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Please fill out the calculator form and click "Calculate DSCR" to see your results.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <div className="grid gap-6">
            {/* DSCR Basics */}
            <Card>
              <CardHeader>
                <CardTitle>Understanding Debt Service Coverage Ratio (DSCR)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Debt Service Coverage Ratio (DSCR) is a financial metric used to measure a property's ability to cover its debt payments. It's calculated by dividing the Net Operating Income (NOI) by the annual debt service.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">DSCR Formula:</h4>
                  <p className="font-mono">DSCR = Net Operating Income ÷ Annual Debt Service</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">DSCR Interpretation:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>DSCR &gt; 1.25:</strong> Excellent - Strong cash flow, low risk</li>
                    <li><strong>DSCR 1.15-1.25:</strong> Good - Acceptable for most lenders</li>
                    <li><strong>DSCR 1.0-1.15:</strong> Marginal - May face lending challenges</li>
                    <li><strong>DSCR &lt; 1.0:</strong> Poor - Negative cash flow, high risk</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Lender Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Lender Requirements by Loan Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600 mb-2">Conventional Loans</h4>
                    <p className="text-sm mb-2">Minimum DSCR: 1.25</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fannie Mae/Freddie Mac guidelines</li>
                      <li>• Strict underwriting standards</li>
                      <li>• Lower interest rates</li>
                      <li>• Requires strong credit</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-green-600 mb-2">Portfolio Loans</h4>
                    <p className="text-sm mb-2">Minimum DSCR: 1.15</p>
                    <ul className="text-sm space-y-1">
                      <li>• Bank's own guidelines</li>
                      <li>• More flexible terms</li>
                      <li>• Relationship-based lending</li>
                      <li>• Faster approval process</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-purple-600 mb-2">Commercial Loans</h4>
                    <p className="text-sm mb-2">Minimum DSCR: 1.20</p>
                    <ul className="text-sm space-y-1">
                      <li>• For larger properties</li>
                      <li>• Recourse vs non-recourse</li>
                      <li>• Shorter amortization</li>
                      <li>• Higher down payments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Improving DSCR */}
            <Card>
              <CardHeader>
                <CardTitle>How to Improve Your DSCR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Increase Income</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Raise rents to market rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Add income streams (laundry, parking)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Reduce vacancy through better management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Improve property to justify higher rents</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Reduce Debt Service</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Increase down payment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Negotiate better interest rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Extend loan term (if available)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Consider interest-only periods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
              <CardHeader>
                <CardTitle>Common DSCR Calculation Mistakes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Using Gross Income Instead of NOI</h4>
                    <p className="text-sm text-gray-600">
                      Always use Net Operating Income (NOI) after deducting vacancy and operating expenses.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Forgetting About Vacancy</h4>
                    <p className="text-sm text-gray-600">
                      Even if currently 100% occupied, factor in realistic vacancy rates for your market.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Underestimating Operating Expenses</h4>
                    <p className="text-sm text-gray-600">
                      Include all expenses: maintenance, management, insurance, taxes, utilities, etc.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Using Current vs. Market Rents</h4>
                    <p className="text-sm text-gray-600">
                      Lenders often use market rents, not current below-market rents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Comprehensive Article Section */}
        <div className="mt-12 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Complete Guide to Debt Service Coverage Ratio (DSCR) in Real Estate
              </CardTitle>
              <p className="text-gray-600">
                Master DSCR analysis to secure financing and evaluate investment property cash flow performance
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">What is DSCR?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800">
                      Debt Service Coverage Ratio measures a property's ability to cover its debt payments. 
                      It's calculated by dividing Net Operating Income by annual debt service payments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Why It Matters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">
                      DSCR is crucial for loan approval, risk assessment, and investment analysis. 
                      Lenders use it to evaluate loan safety and investors use it to assess cash flow stability.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Understanding DSCR Formula</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-2">DSCR = NOI ÷ Annual Debt Service</div>
                      <p className="text-gray-600">Where NOI = Gross Income - Operating Expenses</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">Net Operating Income</div>
                        <div className="text-gray-600">Annual rental income minus operating expenses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-700">Annual Debt Service</div>
                        <div className="text-gray-600">Total yearly loan payments (principal + interest)</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-700">Result</div>
                        <div className="text-gray-600">Coverage ratio (1.0+ preferred)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">DSCR Requirements by Loan Type</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-green-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-green-800">Conventional</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600 mb-1">1.20+</div>
                        <p className="text-sm text-gray-600">Traditional bank loans, conservative requirements</p>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-800">Commercial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-blue-600 mb-1">1.25+</div>
                        <p className="text-sm text-gray-600">Commercial properties, stricter standards</p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-purple-800">DSCR Loans</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-purple-600 mb-1">1.00+</div>
                        <p className="text-sm text-gray-600">Specialized investor loans, property-focused</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-orange-800">SBA Loans</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600 mb-1">1.15+</div>
                        <p className="text-sm text-gray-600">Small business administration backed loans</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">DSCR Interpretation Guide</h3>
                  <div className="space-y-4">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">DSCR ≥ 1.25 - Excellent</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-green-700">
                          <li>• Strong cash flow cushion</li>
                          <li>• Low default risk</li>
                          <li>• Preferred by most lenders</li>
                          <li>• Better loan terms available</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">DSCR 1.10-1.24 - Good</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-blue-700">
                          <li>• Adequate coverage</li>
                          <li>• Acceptable to most lenders</li>
                          <li>• May require higher down payment</li>
                          <li>• Standard loan terms</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200 bg-yellow-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-yellow-800">DSCR 1.00-1.09 - Marginal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-yellow-700">
                          <li>• Minimal coverage</li>
                          <li>• Limited lender options</li>
                          <li>• Higher interest rates</li>
                          <li>• Additional requirements likely</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-800">DSCR Less Than 1.00 - Poor</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Negative cash flow</li>
                          <li>• High default risk</li>
                          <li>• Loan denial likely</li>
                          <li>• Requires property improvements</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Factors Affecting DSCR</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">Improving DSCR</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Increase rental income</li>
                          <li>• Reduce operating expenses</li>
                          <li>• Refinance to lower rates</li>
                          <li>• Extend loan term</li>
                          <li>• Add income sources (laundry, parking)</li>
                          <li>• Improve property efficiency</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-800">DSCR Challenges</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Rising interest rates</li>
                          <li>• Increasing operating costs</li>
                          <li>• Vacancy periods</li>
                          <li>• Deferred maintenance</li>
                          <li>• Market rent declines</li>
                          <li>• Unexpected major repairs</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">DSCR vs. Other Metrics</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-900">DSCR vs. Loan-to-Value (LTV)</h4>
                      <p className="text-gray-700 text-sm">
                        DSCR measures cash flow coverage while LTV measures equity position. 
                        Both are important - DSCR for ongoing payments, LTV for loan security.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-900">DSCR vs. Cap Rate</h4>
                      <p className="text-gray-700 text-sm">
                        Cap rate measures property return, DSCR measures debt coverage. 
                        A property can have good cap rate but poor DSCR if highly leveraged.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-900">DSCR vs. Cash-on-Cash Return</h4>
                      <p className="text-gray-700 text-sm">
                        Cash-on-cash measures investor return, DSCR measures debt safety. 
                        Both consider financing but from different perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">DSCR Loan Programs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">DSCR Loan Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• No personal income verification</li>
                          <li>• Property cash flow focused</li>
                          <li>• Faster approval process</li>
                          <li>• Good for self-employed investors</li>
                          <li>• Portfolio lending available</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-orange-800">DSCR Loan Considerations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Higher interest rates</li>
                          <li>• Larger down payment required</li>
                          <li>• Property must cash flow</li>
                          <li>• Limited to investment properties</li>
                          <li>• Prepayment penalties possible</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Common DSCR Calculation Mistakes</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Income Errors</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Using gross instead of net income</li>
                          <li>• Ignoring vacancy allowance</li>
                          <li>• Including non-rental income</li>
                          <li>• Using projected vs. actual rents</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Expense Errors</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Underestimating operating expenses</li>
                          <li>• Excluding capital expenditures</li>
                          <li>• Missing property management fees</li>
                          <li>• Forgetting insurance increases</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">DSCR Improvement Strategies</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Income Enhancement</h4>
                      <p className="text-blue-700 text-sm mb-2">
                        Increase property income through strategic improvements and management:
                      </p>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Raise rents to market rates</li>
                        <li>• Add income streams (parking, storage, laundry)</li>
                        <li>• Reduce vacancy through better marketing</li>
                        <li>• Improve property to command higher rents</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Expense Reduction</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Lower operating costs through efficient management:
                      </p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Negotiate better insurance rates</li>
                        <li>• Implement energy efficiency measures</li>
                        <li>• Optimize property management</li>
                        <li>• Preventive maintenance programs</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Debt Restructuring</h4>
                      <p className="text-purple-700 text-sm mb-2">
                        Modify loan terms to improve cash flow:
                      </p>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Refinance to lower interest rates</li>
                        <li>• Extend loan term to reduce payments</li>
                        <li>• Consider interest-only periods</li>
                        <li>• Negotiate with current lender</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Market Analysis with DSCR</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-teal-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-teal-800">Market Trends</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Monitor how market conditions affect DSCR:
                        </p>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Interest rate environment</li>
                          <li>• Rental market strength</li>
                          <li>• Operating cost inflation</li>
                          <li>• Lender requirement changes</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-indigo-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-indigo-800">Investment Timing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Use DSCR analysis for strategic decisions:
                        </p>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Acquisition screening</li>
                          <li>• Portfolio optimization</li>
                          <li>• Refinancing decisions</li>
                          <li>• Exit strategy planning</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• DSCR measures property's ability to cover debt payments</li>
                      <li>• Minimum 1.20-1.25 DSCR typically required for financing</li>
                      <li>• Higher DSCR indicates lower risk and better loan terms</li>
                      <li>• Focus on accurate NOI calculation for reliable results</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• DSCR loans offer alternative financing for investors</li>
                      <li>• Multiple strategies exist to improve DSCR ratios</li>
                      <li>• Consider DSCR alongside other investment metrics</li>
                      <li>• Market conditions significantly impact DSCR performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  )
}