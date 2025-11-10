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
import { AlertCircle, Calculator, TrendingUp, DollarSign, FileText, Home, Wrench, Clock, Target } from 'lucide-react'

interface FlipData {
  purchasePrice: number
  renovationCosts: number
  holdingTime: number
  sellingPrice: number
  closingCosts: number
  realtorCommission: number
  loanAmount: number
  interestRate: number
  propertyTaxes: number
  insurance: number
  utilities: number
  permits: number
  contingency: number
  marketCondition: string
  propertyType: string
  location: string
}

interface FlipResults {
  totalInvestment: number
  totalCosts: number
  grossProfit: number
  netProfit: number
  roi: number
  annualizedReturn: number
  profitMargin: number
  breakdownCosts: {
    purchase: number
    renovation: number
    holding: number
    selling: number
    financing: number
  }
  riskLevel: string
  recommendations: string[]
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'House Flip Analyzer',
    description: 'Analyze profitability and risks of house flipping. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function HouseFlipAnalyzer() {
  const [activeTab, setActiveTab] = useState('analyzer')
  const [flipData, setFlipData] = useState<FlipData>({
    purchasePrice: 0,
    renovationCosts: 0,
    holdingTime: 6,
    sellingPrice: 0,
    closingCosts: 3000,
    realtorCommission: 6,
    loanAmount: 0,
    interestRate: 8.5,
    propertyTaxes: 0,
    insurance: 1200,
    utilities: 200,
    permits: 2000,
    contingency: 10,
    marketCondition: 'stable',
    propertyType: 'single-family',
    location: 'suburban'
  })
  const [results, setResults] = useState<FlipResults | null>(null)

  const analyzeFlip = () => {
    const purchase = flipData.purchasePrice
    const renovation = flipData.renovationCosts * (1 + flipData.contingency / 100)
    
    // Holding costs
    const monthlyHolding = (flipData.propertyTaxes / 12) + (flipData.insurance / 12) + flipData.utilities
    const holding = monthlyHolding * flipData.holdingTime
    
    // Financing costs
    const monthlyInterest = (flipData.loanAmount * (flipData.interestRate / 100)) / 12
    const financing = monthlyInterest * flipData.holdingTime
    
    // Selling costs
    const realtorFees = flipData.sellingPrice * (flipData.realtorCommission / 100)
    const selling = realtorFees + flipData.closingCosts
    
    const totalCosts = purchase + renovation + holding + selling + financing
    const totalInvestment = purchase + renovation + (flipData.purchasePrice - flipData.loanAmount)
    const grossProfit = flipData.sellingPrice - purchase
    const netProfit = flipData.sellingPrice - totalCosts
    const roi = (netProfit / totalInvestment) * 100
    const annualizedReturn = (roi / flipData.holdingTime) * 12
    const profitMargin = (netProfit / flipData.sellingPrice) * 100

    let riskLevel = ''
    let recommendations: string[] = []

    if (roi >= 20) {
      riskLevel = 'Low'
      recommendations = [
        'Excellent profit potential with strong ROI',
        'Consider scaling similar projects',
        'Monitor market conditions for timing'
      ]
    } else if (roi >= 10) {
      riskLevel = 'Moderate'
      recommendations = [
        'Decent profit margins but watch costs carefully',
        'Look for ways to reduce renovation expenses',
        'Consider faster turnaround to improve returns'
      ]
    } else if (roi >= 0) {
      riskLevel = 'High'
      recommendations = [
        'Low profit margins - proceed with caution',
        'Negotiate better purchase price',
        'Reduce renovation scope or find cost savings'
      ]
    } else {
      riskLevel = 'Very High'
      recommendations = [
        'Project shows potential loss - not recommended',
        'Significantly reduce purchase price or renovation costs',
        'Consider alternative exit strategies'
      ]
    }

    setResults({
      totalInvestment,
      totalCosts,
      grossProfit,
      netProfit,
      roi,
      annualizedReturn,
      profitMargin,
      breakdownCosts: {
        purchase,
        renovation,
        holding,
        selling,
        financing
      },
      riskLevel,
      recommendations
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

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-500'
      case 'Moderate': return 'bg-yellow-500'
      case 'High': return 'bg-orange-500'
      case 'Very High': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          House Flip Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analyze the profitability of house flipping projects with comprehensive cost analysis, profit projections, and risk assessment.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analyzer" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Analyzer
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

        <TabsContent value="analyzer" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Purchase & Sale */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Purchase & Sale Details
                </CardTitle>
                <CardDescription>
                  Enter property purchase and expected sale information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="purchasePrice">Purchase Price</Label>
                  <Input
                    id="purchasePrice"
                    type="number"
                    value={flipData.purchasePrice || ''}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      purchasePrice: Number(e.target.value)
                    })}
                    placeholder="300000"
                  />
                </div>
                <div>
                  <Label htmlFor="sellingPrice">Expected Selling Price</Label>
                  <Input
                    id="sellingPrice"
                    type="number"
                    value={flipData.sellingPrice || ''}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      sellingPrice: Number(e.target.value)
                    })}
                    placeholder="450000"
                  />
                </div>
                <div>
                  <Label htmlFor="realtorCommission">Realtor Commission (%)</Label>
                  <Input
                    id="realtorCommission"
                    type="number"
                    step="0.1"
                    value={flipData.realtorCommission}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      realtorCommission: Number(e.target.value)
                    })}
                    placeholder="6"
                  />
                </div>
                <div>
                  <Label htmlFor="closingCosts">Closing Costs</Label>
                  <Input
                    id="closingCosts"
                    type="number"
                    value={flipData.closingCosts}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      closingCosts: Number(e.target.value)
                    })}
                    placeholder="3000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Renovation & Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Renovation & Timeline
                </CardTitle>
                <CardDescription>
                  Enter renovation costs and project timeline
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="renovationCosts">Renovation Costs</Label>
                  <Input
                    id="renovationCosts"
                    type="number"
                    value={flipData.renovationCosts || ''}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      renovationCosts: Number(e.target.value)
                    })}
                    placeholder="75000"
                  />
                </div>
                <div>
                  <Label htmlFor="contingency">Contingency (%)</Label>
                  <Input
                    id="contingency"
                    type="number"
                    value={flipData.contingency}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      contingency: Number(e.target.value)
                    })}
                    placeholder="10"
                  />
                </div>
                <div>
                  <Label htmlFor="holdingTime">Holding Time (Months)</Label>
                  <Input
                    id="holdingTime"
                    type="number"
                    value={flipData.holdingTime}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      holdingTime: Number(e.target.value)
                    })}
                    placeholder="6"
                  />
                </div>
                <div>
                  <Label htmlFor="permits">Permits & Fees</Label>
                  <Input
                    id="permits"
                    type="number"
                    value={flipData.permits}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      permits: Number(e.target.value)
                    })}
                    placeholder="2000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Financing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Financing Details
                </CardTitle>
                <CardDescription>
                  Enter loan and financing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={flipData.loanAmount || ''}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      loanAmount: Number(e.target.value)
                    })}
                    placeholder="240000"
                  />
                </div>
                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={flipData.interestRate}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      interestRate: Number(e.target.value)
                    })}
                    placeholder="8.5"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Holding Costs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Monthly Holding Costs
                </CardTitle>
                <CardDescription>
                  Enter monthly expenses during renovation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="propertyTaxes">Annual Property Taxes</Label>
                  <Input
                    id="propertyTaxes"
                    type="number"
                    value={flipData.propertyTaxes || ''}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      propertyTaxes: Number(e.target.value)
                    })}
                    placeholder="6000"
                  />
                </div>
                <div>
                  <Label htmlFor="insurance">Annual Insurance</Label>
                  <Input
                    id="insurance"
                    type="number"
                    value={flipData.insurance}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      insurance: Number(e.target.value)
                    })}
                    placeholder="1200"
                  />
                </div>
                <div>
                  <Label htmlFor="utilities">Monthly Utilities</Label>
                  <Input
                    id="utilities"
                    type="number"
                    value={flipData.utilities}
                    onChange={(e) => setFlipData({
                      ...flipData,
                      utilities: Number(e.target.value)
                    })}
                    placeholder="200"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Button 
                onClick={analyzeFlip} 
                className="w-full"
                size="lg"
                disabled={!flipData.purchasePrice || !flipData.sellingPrice || !flipData.renovationCosts}
              >
                Analyze Flip Project
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
                      <div className="text-3xl font-bold text-green-600">
                        {formatCurrency(results.netProfit)}
                      </div>
                      <div className="text-sm text-gray-600">Net Profit</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {results.roi.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {results.annualizedReturn.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Annualized Return</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">
                        {results.profitMargin.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Profit Margin</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Risk Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Risk Level:</span>
                      <Badge className={getRiskColor(results.riskLevel)}>
                        {results.riskLevel}
                      </Badge>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>ROI Progress</span>
                        <span>{results.roi.toFixed(1)}% / 20%</span>
                      </div>
                      <Progress value={Math.min((results.roi / 20) * 100, 100)} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {formatCurrency(results.breakdownCosts.purchase)}
                        </div>
                        <div className="text-sm text-gray-600">Purchase</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {formatCurrency(results.breakdownCosts.renovation)}
                        </div>
                        <div className="text-sm text-gray-600">Renovation</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">
                          {formatCurrency(results.breakdownCosts.holding)}
                        </div>
                        <div className="text-sm text-gray-600">Holding</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-red-600">
                          {formatCurrency(results.breakdownCosts.selling)}
                        </div>
                        <div className="text-sm text-gray-600">Selling</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          {formatCurrency(results.breakdownCosts.financing)}
                        </div>
                        <div className="text-sm text-gray-600">Financing</div>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total Costs:</span>
                        <span>{formatCurrency(results.totalCosts)}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-semibold text-green-600">
                        <span>Net Profit:</span>
                        <span>{formatCurrency(results.netProfit)}</span>
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
                  Please fill out the analyzer form and click "Analyze Flip Project" to see your results.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <div className="grid gap-6">
            {/* House Flipping Basics */}
            <Card>
              <CardHeader>
                <CardTitle>House Flipping Fundamentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  House flipping involves purchasing a property, renovating it, and selling it for a profit. Success depends on accurate cost estimation, efficient project management, and understanding market conditions.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">The 70% Rule:</h4>
                  <p className="text-sm">
                    A common guideline suggests paying no more than 70% of the after-repair value (ARV) minus renovation costs. This provides a safety margin for unexpected expenses and market fluctuations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Success Factors:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Accurate renovation cost estimation</li>
                    <li>Realistic timeline planning</li>
                    <li>Understanding local market conditions</li>
                    <li>Building reliable contractor relationships</li>
                    <li>Maintaining adequate cash reserves</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cost Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Understanding Flip Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Acquisition Costs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Purchase price</li>
                      <li>• Inspection fees</li>
                      <li>• Closing costs</li>
                      <li>• Title insurance</li>
                      <li>• Attorney fees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Renovation Costs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Materials and labor</li>
                      <li>• Permits and inspections</li>
                      <li>• Dumpster and cleanup</li>
                      <li>• Contingency (10-20%)</li>
                      <li>• Design and planning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-3">Holding Costs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Property taxes</li>
                      <li>• Insurance</li>
                      <li>• Utilities</li>
                      <li>• Loan interest</li>
                      <li>• Security and maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Selling Costs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Realtor commissions</li>
                      <li>• Staging costs</li>
                      <li>• Marketing expenses</li>
                      <li>• Closing costs</li>
                      <li>• Transfer taxes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Management */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Management Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-600">Market Risk</h4>
                    <p className="text-sm text-gray-600">
                      Property values can decline during renovation. Research market trends and have exit strategies.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600">Cost Overruns</h4>
                    <p className="text-sm text-gray-600">
                      Always include 10-20% contingency for unexpected issues. Get detailed contractor estimates.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-600">Timeline Delays</h4>
                    <p className="text-sm text-gray-600">
                      Delays increase holding costs. Build buffer time into schedules and have backup contractors.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Financing Risk</h4>
                    <p className="text-sm text-gray-600">
                      Hard money loans have high rates. Secure financing before purchase and have backup options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expert Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Expert Flipping Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Maximize Profits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Focus on kitchens and bathrooms</li>
                      <li>• Choose neutral, modern finishes</li>
                      <li>• Improve curb appeal first</li>
                      <li>• Don't over-improve for the neighborhood</li>
                      <li>• Buy materials in bulk when possible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Avoid Common Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Don't skip the inspection</li>
                      <li>• Avoid emotional decision-making</li>
                      <li>• Don't underestimate holding costs</li>
                      <li>• Avoid over-leveraging</li>
                      <li>• Don't ignore permit requirements</li>
                    </ul>
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
                Complete Guide to House Flipping Analysis
              </CardTitle>
              <p className="text-gray-600">
                Master the art of house flipping with comprehensive financial analysis, risk assessment, and profit optimization strategies
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">What is House Flipping?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800">
                      House flipping involves purchasing undervalued properties, renovating them to increase value, 
                      and selling them quickly for profit. Success requires careful analysis of costs, market conditions, and timing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Why Analyze Flips?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">
                      Proper analysis helps identify profitable opportunities, avoid costly mistakes, 
                      manage risks effectively, and maximize returns on investment while minimizing time and capital exposure.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">The 70% Rule in House Flipping</h3>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-2">Maximum Purchase Price = (ARV × 70%) - Renovation Costs</div>
                      <p className="text-gray-600">Where ARV = After Repair Value (expected selling price)</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-purple-700">After Repair Value</div>
                        <div className="text-gray-600">Market value after renovations</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">70% Factor</div>
                        <div className="text-gray-600">Accounts for profit and holding costs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-700">Renovation Budget</div>
                        <div className="text-gray-600">Total improvement costs</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete Cost Breakdown</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border-red-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-800">Acquisition Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Purchase price</li>
                          <li>• Closing costs (2-3%)</li>
                          <li>• Inspection fees</li>
                          <li>• Appraisal costs</li>
                          <li>• Title insurance</li>
                          <li>• Attorney fees</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-orange-800">Renovation Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Materials and labor</li>
                          <li>• Permits and inspections</li>
                          <li>• Contractor fees</li>
                          <li>• Contingency (10-20%)</li>
                          <li>• Design and planning</li>
                          <li>• Dumpster and cleanup</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-800">Holding Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Property taxes</li>
                          <li>• Insurance premiums</li>
                          <li>• Utilities</li>
                          <li>• Loan interest</li>
                          <li>• Security and maintenance</li>
                          <li>• HOA fees</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-green-800">Selling Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Realtor commission (5-6%)</li>
                          <li>• Staging costs</li>
                          <li>• Marketing expenses</li>
                          <li>• Closing costs</li>
                          <li>• Transfer taxes</li>
                          <li>• Final repairs</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-purple-800">Financing Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Loan origination fees</li>
                          <li>• Interest payments</li>
                          <li>• Private money costs</li>
                          <li>• Hard money fees</li>
                          <li>• Credit line charges</li>
                          <li>• Prepayment penalties</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-gray-800">Unexpected Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Hidden structural issues</li>
                          <li>• Code compliance upgrades</li>
                          <li>• Weather delays</li>
                          <li>• Market condition changes</li>
                          <li>• Contractor issues</li>
                          <li>• Extended holding time</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Flip Analysis Metrics</h3>
                  <div className="space-y-4">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">Return on Investment (ROI)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-green-700 text-sm mb-2">
                              <strong>Formula:</strong> (Net Profit ÷ Total Investment) × 100
                            </p>
                            <p className="text-green-700 text-sm">
                              <strong>Good ROI:</strong> 20%+ for experienced flippers, 15%+ for beginners
                            </p>
                          </div>
                          <div>
                            <p className="text-green-700 text-sm mb-2">
                              <strong>Annualized ROI:</strong> Accounts for time factor
                            </p>
                            <p className="text-green-700 text-sm">
                              <strong>Target:</strong> 30%+ annualized return
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">Profit Margin</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-blue-700 text-sm mb-2">
                              <strong>Formula:</strong> (Net Profit ÷ Sale Price) × 100
                            </p>
                            <p className="text-blue-700 text-sm">
                              <strong>Healthy Margin:</strong> 15-25% of sale price
                            </p>
                          </div>
                          <div>
                            <p className="text-blue-700 text-sm mb-2">
                              <strong>Risk Buffer:</strong> Higher margins provide safety
                            </p>
                            <p className="text-blue-700 text-sm">
                              <strong>Market Factor:</strong> Varies by location and price range
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-purple-800">Break-Even Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-purple-700 text-sm mb-2">
                              <strong>Break-Even Price:</strong> Total costs + desired profit
                            </p>
                            <p className="text-purple-700 text-sm">
                              <strong>Safety Margin:</strong> 10-15% above break-even
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-700 text-sm mb-2">
                              <strong>Market Comparison:</strong> Compare to comparable sales
                            </p>
                            <p className="text-purple-700 text-sm">
                              <strong>Exit Strategy:</strong> Plan for worst-case scenarios
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Market Analysis for Flipping</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-teal-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-teal-800">Market Research</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Analyze comparable sales (comps)</li>
                          <li>• Study neighborhood trends</li>
                          <li>• Evaluate days on market</li>
                          <li>• Research buyer preferences</li>
                          <li>• Monitor inventory levels</li>
                          <li>• Track price appreciation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-indigo-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-indigo-800">Timing Considerations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Seasonal market patterns</li>
                          <li>• Economic conditions</li>
                          <li>• Interest rate environment</li>
                          <li>• Local development plans</li>
                          <li>• School calendar impacts</li>
                          <li>• Holiday selling periods</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Risk Management Strategies</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-semibold text-red-800 mb-3">Common Flip Risks</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-red-700 mb-2">Financial Risks</h5>
                          <ul className="text-sm space-y-1 text-red-600">
                            <li>• Cost overruns</li>
                            <li>• Market value decline</li>
                            <li>• Extended holding periods</li>
                            <li>• Financing issues</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700 mb-2">Operational Risks</h5>
                          <ul className="text-sm space-y-1 text-red-600">
                            <li>• Contractor problems</li>
                            <li>• Permit delays</li>
                            <li>• Hidden structural issues</li>
                            <li>• Weather delays</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Risk Mitigation</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2">Due Diligence</h5>
                          <ul className="text-sm space-y-1 text-green-600">
                            <li>• Thorough property inspection</li>
                            <li>• Accurate cost estimation</li>
                            <li>• Market analysis</li>
                            <li>• Contractor vetting</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2">Financial Protection</h5>
                          <ul className="text-sm space-y-1 text-green-600">
                            <li>• Adequate contingency funds</li>
                            <li>• Conservative estimates</li>
                            <li>• Multiple exit strategies</li>
                            <li>• Insurance coverage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Renovation Strategy</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">High-Impact Improvements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Kitchen renovation (highest ROI)</li>
                          <li>• Bathroom updates</li>
                          <li>• Fresh paint throughout</li>
                          <li>• Flooring replacement</li>
                          <li>• Curb appeal improvements</li>
                          <li>• Energy-efficient upgrades</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-orange-800">Cost-Effective Updates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Light fixtures and hardware</li>
                          <li>• Landscaping and staging</li>
                          <li>• Deep cleaning and decluttering</li>
                          <li>• Minor electrical/plumbing fixes</li>
                          <li>• Window treatments</li>
                          <li>• Storage solutions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Financing Options for Flips</h3>
                  <div className="space-y-4">
                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-purple-800">Hard Money Loans</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Advantages</h5>
                            <ul className="text-sm space-y-1 text-purple-600">
                              <li>• Fast approval and funding</li>
                              <li>• Asset-based lending</li>
                              <li>• Short-term focus</li>
                              <li>• Flexible terms</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Considerations</h5>
                            <ul className="text-sm space-y-1 text-purple-600">
                              <li>• Higher interest rates (8-15%)</li>
                              <li>• Points and fees</li>
                              <li>• Short repayment terms</li>
                              <li>• Property as collateral</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">Alternative Financing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Private Money</h5>
                            <ul className="text-sm space-y-1 text-blue-600">
                              <li>• Individual investors</li>
                              <li>• Negotiable terms</li>
                              <li>• Relationship-based</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Cash/Self-Funding</h5>
                            <ul className="text-sm space-y-1 text-blue-600">
                              <li>• No financing costs</li>
                              <li>• Faster transactions</li>
                              <li>• Higher returns</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Partnerships</h5>
                            <ul className="text-sm space-y-1 text-blue-600">
                              <li>• Shared capital</li>
                              <li>• Split profits</li>
                              <li>• Reduced risk</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Tax Implications</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Tax Considerations</h4>
                        <ul className="text-sm space-y-2 text-yellow-700">
                          <li>• Flipping profits taxed as ordinary income</li>
                          <li>• Self-employment tax may apply</li>
                          <li>• No capital gains treatment for dealers</li>
                          <li>• Deductible business expenses</li>
                          <li>• Depreciation recapture rules</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Tax Planning</h4>
                        <ul className="text-sm space-y-2 text-yellow-700">
                          <li>• Track all deductible expenses</li>
                          <li>• Consider business entity structure</li>
                          <li>• Plan for quarterly tax payments</li>
                          <li>• Consult tax professional</li>
                          <li>• Separate business and personal expenses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Success Strategies</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Market Selection</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Choose markets with strong fundamentals and buyer demand:
                      </p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Growing employment and population</li>
                        <li>• Good schools and amenities</li>
                        <li>• Reasonable price points for target buyers</li>
                        <li>• Active real estate market</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Team Building</h4>
                      <p className="text-blue-700 text-sm mb-2">
                        Assemble a reliable team of professionals:
                      </p>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Experienced general contractor</li>
                        <li>• Real estate agent specializing in flips</li>
                        <li>• Accountant familiar with real estate</li>
                        <li>• Attorney for legal issues</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Scaling Strategy</h4>
                      <p className="text-purple-700 text-sm mb-2">
                        Build systems for growth and efficiency:
                      </p>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Standardize processes and checklists</li>
                        <li>• Build relationships with reliable contractors</li>
                        <li>• Develop financing relationships</li>
                        <li>• Focus on specific neighborhoods or property types</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Use the 70% rule as a starting point for analysis</li>
                      <li>• Account for all costs including holding and selling expenses</li>
                      <li>• Target 20%+ ROI and 15%+ profit margins</li>
                      <li>• Build contingency funds for unexpected costs</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Focus on high-impact, cost-effective improvements</li>
                      <li>• Understand tax implications and plan accordingly</li>
                      <li>• Build a reliable team of professionals</li>
                      <li>• Start conservatively and scale systematically</li>
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