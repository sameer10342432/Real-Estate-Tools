'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calculator, Home, TrendingUp, Calendar, BarChart3, AlertTriangle, CheckCircle, Info, BookOpen } from 'lucide-react'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Short-Term Rental Estimator',
    description: 'Estimate Airbnb and vacation rental income. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function ShortTermRentalEstimator() {
  // Property Details
  const [propertyType, setPropertyType] = useState<string>('apartment')
  const [bedrooms, setBedrooms] = useState<number>(2)
  const [bathrooms, setBathrooms] = useState<number>(1)
  const [maxGuests, setMaxGuests] = useState<number>(4)
  const [propertySize, setPropertySize] = useState<number>(80)
  
  // Location & Market
  const [location, setLocation] = useState<string>('Sydney CBD')
  const [marketType, setMarketType] = useState<string>('urban')
  const [seasonality, setSeasonality] = useState<string>('moderate')
  const [competition, setCompetition] = useState<string>('medium')
  
  // Pricing Strategy
  const [baseNightlyRate, setBaseNightlyRate] = useState<number>(150)
  const [weekendPremium, setWeekendPremium] = useState<number>(20)
  const [peakSeasonPremium, setPeakSeasonPremium] = useState<number>(30)
  const [minimumStay, setMinimumStay] = useState<number>(2)
  
  // Occupancy Assumptions
  const [averageOccupancy, setAverageOccupancy] = useState<number>(65)
  const [peakOccupancy, setPeakOccupancy] = useState<number>(85)
  const [offPeakOccupancy, setOffPeakOccupancy] = useState<number>(45)
  const [averageStayLength, setAverageStayLength] = useState<number>(3.5)
  
  // Operating Expenses
  const [cleaningFeePerStay, setCleaningFeePerStay] = useState<number>(80)
  const [managementFeePercent, setManagementFeePercent] = useState<number>(15)
  const [platformCommission, setPlatformCommission] = useState<number>(3)
  const [paymentProcessing, setPaymentProcessing] = useState<number>(2.9)
  
  // Annual Expenses
  const [insurance, setInsurance] = useState<number>(2500)
  const [utilities, setUtilities] = useState<number>(3600)
  const [internetCable, setInternetCable] = useState<number>(1200)
  const [supplies, setSupplies] = useState<number>(1500)
  const [maintenance, setMaintenance] = useState<number>(2000)
  const [marketing, setMarketing] = useState<number>(800)
  const [licenses, setLicenses] = useState<number>(500)
  
  // Property Investment
  const [propertyValue, setPropertyValue] = useState<number>(800000)
  const [downPayment, setDownPayment] = useState<number>(160000)
  const [loanAmount, setLoanAmount] = useState<number>(640000)
  const [interestRate, setInterestRate] = useState<number>(6.5)
  const [loanTerm, setLoanTerm] = useState<number>(30)
  
  // Setup Costs
  const [furnishingCosts, setFurnishingCosts] = useState<number>(25000)
  const [setupCosts, setSetupCosts] = useState<number>(5000)

  const [results, setResults] = useState({
    grossAnnualRevenue: 0,
    netAnnualRevenue: 0,
    totalAnnualExpenses: 0,
    netOperatingIncome: 0,
    cashFlow: 0,
    grossYield: 0,
    netYield: 0,
    cashOnCashReturn: 0,
    capRate: 0,
    monthlyRevenue: 0,
    monthlyExpenses: 0,
    monthlyCashFlow: 0,
    averageDailyRate: 0,
    revPAR: 0,
    breakEvenOccupancy: 0,
    paybackPeriod: 0,
    seasonalBreakdown: {
      peak: { revenue: 0, occupancy: 0, rate: 0 },
      shoulder: { revenue: 0, occupancy: 0, rate: 0 },
      offPeak: { revenue: 0, occupancy: 0, rate: 0 },
    },
    recommendations: [] as string[],
  })

  const calculateSTRReturns = useCallback(() => {
    // Calculate seasonal pricing and occupancy
    const peakMonths = 4 // Peak season months
    const shoulderMonths = 4 // Shoulder season months  
    const offPeakMonths = 4 // Off-peak season months
    
    // Seasonal rate adjustments
    const peakRate = baseNightlyRate * (1 + peakSeasonPremium / 100)
    const shoulderRate = baseNightlyRate
    const offPeakRate = baseNightlyRate * 0.85
    
    // Weekend premium application (30% of nights are weekends)
    const weekendMultiplier = 1 + (weekendPremium / 100) * 0.3
    
    const adjustedPeakRate = peakRate * weekendMultiplier
    const adjustedShoulderRate = shoulderRate * weekendMultiplier
    const adjustedOffPeakRate = offPeakRate * weekendMultiplier
    
    // Calculate nights per season
    const peakNights = (peakMonths * 30.4) * (peakOccupancy / 100)
    const shoulderNights = (shoulderMonths * 30.4) * (averageOccupancy / 100)
    const offPeakNights = (offPeakMonths * 30.4) * (offPeakOccupancy / 100)
    
    // Revenue calculations
    const peakRevenue = peakNights * adjustedPeakRate
    const shoulderRevenue = shoulderNights * adjustedShoulderRate
    const offPeakRevenue = offPeakNights * adjustedOffPeakRate
    
    const grossAnnualRevenue = peakRevenue + shoulderRevenue + offPeakRevenue
    
    // Cleaning fee revenue
    const totalNights = peakNights + shoulderNights + offPeakNights
    const totalStays = totalNights / averageStayLength
    const cleaningRevenue = totalStays * cleaningFeePerStay
    
    const totalGrossRevenue = grossAnnualRevenue + cleaningRevenue
    
    // Platform and payment processing fees
    const platformFees = totalGrossRevenue * (platformCommission / 100)
    const processingFees = totalGrossRevenue * (paymentProcessing / 100)
    
    // Management fees (on net revenue after platform fees)
    const netRevenueAfterPlatform = totalGrossRevenue - platformFees - processingFees
    const managementFees = netRevenueAfterPlatform * (managementFeePercent / 100)
    
    // Variable expenses (cleaning costs)
    const cleaningCosts = totalStays * (cleaningFeePerStay * 0.6) // Assume 60% of cleaning fee is cost
    
    // Total annual expenses
    const totalAnnualExpenses = platformFees + processingFees + managementFees + cleaningCosts + 
                               insurance + utilities + internetCable + supplies + maintenance + marketing + licenses
    
    // Net operating income
    const netOperatingIncome = totalGrossRevenue - totalAnnualExpenses
    
    // Mortgage calculations
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyMortgage = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    const annualMortgage = monthlyMortgage * 12
    
    // Cash flow
    const cashFlow = netOperatingIncome - annualMortgage
    
    // Yield calculations
    const grossYield = (totalGrossRevenue / propertyValue) * 100
    const netYield = (netOperatingIncome / propertyValue) * 100
    
    // Return calculations
    const totalInvestment = downPayment + furnishingCosts + setupCosts
    const cashOnCashReturn = (cashFlow / totalInvestment) * 100
    const capRate = (netOperatingIncome / propertyValue) * 100
    
    // Monthly figures
    const monthlyRevenue = totalGrossRevenue / 12
    const monthlyExpenses = totalAnnualExpenses / 12
    const monthlyCashFlow = cashFlow / 12
    
    // Performance metrics
    const averageDailyRate = totalGrossRevenue / totalNights
    const revPAR = (totalGrossRevenue / 365) // Revenue per available room per day
    
    // Break-even analysis
    const fixedAnnualCosts = insurance + utilities + internetCable + supplies + maintenance + marketing + licenses + annualMortgage
    const variableCostPerNight = (platformFees + processingFees + managementFees + cleaningCosts) / totalNights
    const netRatePerNight = averageDailyRate - variableCostPerNight
    const breakEvenNights = fixedAnnualCosts / netRatePerNight
    const breakEvenOccupancy = (breakEvenNights / 365) * 100
    
    // Payback period
    const paybackPeriod = totalInvestment / Math.max(cashFlow, 1)
    
    // Generate recommendations
    const recommendations: string[] = []
    
    if (averageOccupancy < 60) {
      recommendations.push('Consider lowering rates or improving marketing to increase occupancy')
    }
    if (averageOccupancy > 80) {
      recommendations.push('High occupancy suggests you could potentially increase rates')
    }
    if (cashOnCashReturn < 8) {
      recommendations.push('Consider ways to reduce expenses or increase revenue to improve returns')
    }
    if (breakEvenOccupancy > 70) {
      recommendations.push('High break-even occupancy indicates tight margins - focus on cost control')
    }
    if (averageDailyRate < baseNightlyRate * 0.9) {
      recommendations.push('Review pricing strategy - actual ADR is below base rate')
    }
    if (managementFeePercent > 20) {
      recommendations.push('Management fees are high - consider self-management or negotiate lower rates')
    }
    if (platformCommission > 5) {
      recommendations.push('Consider diversifying booking channels to reduce platform dependency')
    }
    
    setResults({
      grossAnnualRevenue: Math.round(totalGrossRevenue),
      netAnnualRevenue: Math.round(netRevenueAfterPlatform),
      totalAnnualExpenses: Math.round(totalAnnualExpenses),
      netOperatingIncome: Math.round(netOperatingIncome),
      cashFlow: Math.round(cashFlow),
      grossYield: Math.round(grossYield * 100) / 100,
      netYield: Math.round(netYield * 100) / 100,
      cashOnCashReturn: Math.round(cashOnCashReturn * 100) / 100,
      capRate: Math.round(capRate * 100) / 100,
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyExpenses: Math.round(monthlyExpenses),
      monthlyCashFlow: Math.round(monthlyCashFlow),
      averageDailyRate: Math.round(averageDailyRate),
      revPAR: Math.round(revPAR),
      breakEvenOccupancy: Math.round(breakEvenOccupancy * 100) / 100,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      seasonalBreakdown: {
        peak: { 
          revenue: Math.round(peakRevenue), 
          occupancy: peakOccupancy, 
          rate: Math.round(adjustedPeakRate) 
        },
        shoulder: { 
          revenue: Math.round(shoulderRevenue), 
          occupancy: averageOccupancy, 
          rate: Math.round(adjustedShoulderRate) 
        },
        offPeak: { 
          revenue: Math.round(offPeakRevenue), 
          occupancy: offPeakOccupancy, 
          rate: Math.round(adjustedOffPeakRate) 
        }
      },
      recommendations
    })
  }, [baseNightlyRate, peakSeasonPremium, weekendPremium, peakOccupancy, averageOccupancy, offPeakOccupancy, averageStayLength, cleaningFeePerStay, platformCommission, paymentProcessing, managementFeePercent, insurance, utilities, internetCable, supplies, maintenance, marketing, licenses, propertyValue, downPayment, loanAmount, interestRate, loanTerm, furnishingCosts, setupCosts])

  useEffect(() => {
    calculateSTRReturns()
  }, [calculateSTRReturns])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getPerformanceColor = (value: number, thresholds: { good: number; fair: number }) => {
    if (value >= thresholds.good) return 'text-green-600'
    if (value >= thresholds.fair) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Short-Term Rental Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate Airbnb and vacation rental income potential with comprehensive market analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Home className="mr-3 h-6 w-6" />
                  STR Revenue Calculator
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Analyze your short-term rental investment potential
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-7">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="market">Market</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
                    <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    <TabsTrigger value="investment">Investment</TabsTrigger>
                    <TabsTrigger value="article">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Article
                    </TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="studio">Studio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Select value={bedrooms.toString()} onValueChange={(value) => setBedrooms(Number(value))}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Studio</SelectItem>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4 Bedrooms</SelectItem>
                            <SelectItem value="5">5+ Bedrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Select value={bathrooms.toString()} onValueChange={(value) => setBathrooms(Number(value))}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Bathroom</SelectItem>
                            <SelectItem value="2">2 Bathrooms</SelectItem>
                            <SelectItem value="3">3 Bathrooms</SelectItem>
                            <SelectItem value="4">4+ Bathrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="maxGuests">Maximum Guests</Label>
                        <Input
                          id="maxGuests"
                          type="number"
                          value={maxGuests}
                          onChange={(e) => setMaxGuests(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertySize">Property Size (sqm)</Label>
                        <Input
                          id="propertySize"
                          type="number"
                          value={propertySize}
                          onChange={(e) => setPropertySize(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      </div>
                  </TabsContent>
                  <TabsContent value="market" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="marketType">Market Type</Label>
                        <Select value={marketType} onValueChange={setMarketType}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urban">Urban/City Center</SelectItem>
                            <SelectItem value="beach">Beach/Coastal</SelectItem>
                            <SelectItem value="mountain">Mountain/Ski</SelectItem>
                            <SelectItem value="suburban">Suburban</SelectItem>
                            <SelectItem value="rural">Rural/Countryside</SelectItem>
                            <SelectItem value="business">Business District</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="seasonality">Seasonality</Label>
                        <Select value={seasonality} onValueChange={setSeasonality}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High Seasonality</SelectItem>
                            <SelectItem value="moderate">Moderate Seasonality</SelectItem>
                            <SelectItem value="low">Low Seasonality</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="competition">Competition Level</Label>
                        <Select value={competition} onValueChange={setCompetition}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Competition</SelectItem>
                            <SelectItem value="medium">Medium Competition</SelectItem>
                            <SelectItem value="high">High Competition</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pricing" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="baseNightlyRate">Base Nightly Rate ($)</Label>
                        <Input
                          id="baseNightlyRate"
                          type="number"
                          value={baseNightlyRate}
                          onChange={(e) => setBaseNightlyRate(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weekendPremium">Weekend Premium (%)</Label>
                        <Input
                          id="weekendPremium"
                          type="number"
                          value={weekendPremium}
                          onChange={(e) => setWeekendPremium(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="peakSeasonPremium">Peak Season Premium (%)</Label>
                        <Input
                          id="peakSeasonPremium"
                          type="number"
                          value={peakSeasonPremium}
                          onChange={(e) => setPeakSeasonPremium(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="minimumStay">Minimum Stay (nights)</Label>
                        <Input
                          id="minimumStay"
                          type="number"
                          value={minimumStay}
                          onChange={(e) => setMinimumStay(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cleaningFeePerStay">Cleaning Fee per Stay ($)</Label>
                        <Input
                          id="cleaningFeePerStay"
                          type="number"
                          value={cleaningFeePerStay}
                          onChange={(e) => setCleaningFeePerStay(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="occupancy" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="averageOccupancy">Average Occupancy Rate (%)</Label>
                        <Input
                          id="averageOccupancy"
                          type="number"
                          value={averageOccupancy}
                          onChange={(e) => setAverageOccupancy(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="peakOccupancy">Peak Season Occupancy (%)</Label>
                        <Input
                          id="peakOccupancy"
                          type="number"
                          value={peakOccupancy}
                          onChange={(e) => setPeakOccupancy(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="offPeakOccupancy">Off-Peak Occupancy (%)</Label>
                        <Input
                          id="offPeakOccupancy"
                          type="number"
                          value={offPeakOccupancy}
                          onChange={(e) => setOffPeakOccupancy(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="averageStayLength">Average Stay Length (nights)</Label>
                        <Input
                          id="averageStayLength"
                          type="number"
                          step="0.1"
                          value={averageStayLength}
                          onChange={(e) => setAverageStayLength(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="expenses" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="managementFeePercent">Management Fee (%)</Label>
                        <Input
                          id="managementFeePercent"
                          type="number"
                          value={managementFeePercent}
                          onChange={(e) => setManagementFeePercent(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="platformCommission">Platform Commission (%)</Label>
                        <Input
                          id="platformCommission"
                          type="number"
                          value={platformCommission}
                          onChange={(e) => setPlatformCommission(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="paymentProcessing">Payment Processing (%)</Label>
                        <Input
                          id="paymentProcessing"
                          type="number"
                          step="0.1"
                          value={paymentProcessing}
                          onChange={(e) => setPaymentProcessing(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="insurance">Annual Insurance ($)</Label>
                        <Input
                          id="insurance"
                          type="number"
                          value={insurance}
                          onChange={(e) => setInsurance(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="utilities">Annual Utilities ($)</Label>
                        <Input
                          id="utilities"
                          type="number"
                          value={utilities}
                          onChange={(e) => setUtilities(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="internetCable">Internet & Cable ($)</Label>
                        <Input
                          id="internetCable"
                          type="number"
                          value={internetCable}
                          onChange={(e) => setInternetCable(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="supplies">Supplies & Amenities ($)</Label>
                        <Input
                          id="supplies"
                          type="number"
                          value={supplies}
                          onChange={(e) => setSupplies(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maintenance">Annual Maintenance ($)</Label>
                        <Input
                          id="maintenance"
                          type="number"
                          value={maintenance}
                          onChange={(e) => setMaintenance(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="marketing">Marketing & Advertising ($)</Label>
                        <Input
                          id="marketing"
                          type="number"
                          value={marketing}
                          onChange={(e) => setMarketing(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="licenses">Licenses & Permits ($)</Label>
                        <Input
                          id="licenses"
                          type="number"
                          value={licenses}
                          onChange={(e) => setLicenses(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="investment" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyValue">Property Value ($)</Label>
                        <Input
                          id="propertyValue"
                          type="number"
                          value={propertyValue}
                          onChange={(e) => setPropertyValue(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="downPayment">Down Payment ($)</Label>
                        <Input
                          id="downPayment"
                          type="number"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interestRate">Interest Rate (%)</Label>
                        <Input
                          id="interestRate"
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanTerm">Loan Term (years)</Label>
                        <Input
                          id="loanTerm"
                          type="number"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="furnishingCosts">Furnishing Costs ($)</Label>
                        <Input
                          id="furnishingCosts"
                          type="number"
                          value={furnishingCosts}
                          onChange={(e) => setFurnishingCosts(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="setupCosts">Setup & Other Costs ($)</Label>
                        <Input
                          id="setupCosts"
                          type="number"
                          value={setupCosts}
                          onChange={(e) => setSetupCosts(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="article" className="space-y-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                The Complete Guide to Short-Term Rental Success
              </CardTitle>
              <CardDescription>
                Master the art of Airbnb and vacation rental investing with comprehensive strategies for maximizing revenue and guest satisfaction
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>Understanding the Short-Term Rental Market</h2>
              
              <h3>Market Fundamentals</h3>
              <p>
                The short-term rental (STR) market has revolutionized real estate investing, offering property owners the opportunity to generate significantly higher returns than traditional long-term rentals. However, success requires understanding market dynamics, guest expectations, and operational complexities.
              </p>
              <ul>
                <li><strong>Revenue Potential:</strong> STRs can generate 2-5x traditional rental income</li>
                <li><strong>Market Volatility:</strong> Income fluctuates with seasonality and demand</li>
                <li><strong>Active Management:</strong> Requires hands-on approach or professional management</li>
                <li><strong>Regulatory Environment:</strong> Subject to changing local laws and restrictions</li>
              </ul>

              <h3>Property Selection Criteria</h3>
              <p>
                Choosing the right property is crucial for STR success:
              </p>
              <ul>
                <li><strong>Location Proximity:</strong> Near attractions, business districts, or transportation hubs</li>
                <li><strong>Property Type:</strong> Unique properties often command premium rates</li>
                <li><strong>Amenities:</strong> Pool, hot tub, or special features increase bookings</li>
                <li><strong>Neighborhood Safety:</strong> Guest safety directly impacts reviews and bookings</li>
                <li><strong>Parking Availability:</strong> Essential in most markets</li>
              </ul>

              <h2>Revenue Optimization Strategies</h2>
              
              <h3>Dynamic Pricing Mastery</h3>
              <p>
                Effective pricing strategies can increase revenue by 20-40%:
              </p>
              <ul>
                <li><strong>Seasonal Adjustments:</strong> Increase rates during peak demand periods</li>
                <li><strong>Event-Based Pricing:</strong> Premium rates during local events and conferences</li>
                <li><strong>Length-of-Stay Discounts:</strong> Encourage longer bookings with progressive discounts</li>
                <li><strong>Last-Minute Pricing:</strong> Reduce rates for unsold inventory close to check-in</li>
                <li><strong>Competitive Analysis:</strong> Regular monitoring of comparable properties</li>
              </ul>

              <h3>Occupancy Rate Enhancement</h3>
              <ul>
                <li><strong>Professional Photography:</strong> High-quality photos increase booking rates by 30%</li>
                <li><strong>Listing Optimization:</strong> Compelling titles and descriptions improve visibility</li>
                <li><strong>Instant Book:</strong> Enable for increased platform visibility</li>
                <li><strong>Multi-Platform Strategy:</strong> List on Airbnb, VRBO, Booking.com, and direct booking sites</li>
                <li><strong>Flexible Cancellation:</strong> Attract more bookings with guest-friendly policies</li>
              </ul>

              <h2>Operational Excellence</h2>
              
              <h3>Guest Experience Management</h3>
              <p>
                Exceptional guest experiences drive positive reviews and repeat bookings:
              </p>
              <ul>
                <li><strong>Communication Protocol:</strong> Respond to inquiries within 1 hour</li>
                <li><strong>Check-in Process:</strong> Seamless, contactless options preferred</li>
                <li><strong>Property Preparation:</strong> Professional cleaning and staging</li>
                <li><strong>Guest Amenities:</strong> Welcome gifts, local recommendations, essential supplies</li>
                <li><strong>Issue Resolution:</strong> 24/7 support for guest concerns</li>
              </ul>

              <h3>Maintenance and Housekeeping</h3>
              <ul>
                <li><strong>Cleaning Standards:</strong> Hotel-quality cleanliness between guests</li>
                <li><strong>Preventive Maintenance:</strong> Regular inspections prevent costly repairs</li>
                <li><strong>Inventory Management:</strong> Track linens, supplies, and amenities</li>
                <li><strong>Quality Control:</strong> Regular property inspections and photo updates</li>
                <li><strong>Emergency Protocols:</strong> 24/7 maintenance support for urgent issues</li>
              </ul>

              <h2>Financial Management</h2>
              
              <h3>Expense Optimization</h3>
              <p>
                Controlling costs is essential for profitability:
              </p>
              <ul>
                <li><strong>Cleaning Efficiency:</strong> Negotiate volume discounts with cleaning services</li>
                <li><strong>Utility Management:</strong> Smart thermostats and energy-efficient appliances</li>
                <li><strong>Insurance Optimization:</strong> STR-specific coverage at competitive rates</li>
                <li><strong>Platform Fees:</strong> Balance commission costs with booking volume</li>
                <li><strong>Tax Optimization:</strong> Maximize deductions for STR expenses</li>
              </ul>

              <h3>Cash Flow Management</h3>
              <ul>
                <li><strong>Seasonal Planning:</strong> Budget for low-season periods</li>
                <li><strong>Reserve Funds:</strong> Maintain 3-6 months of expenses in reserve</li>
                <li><strong>Revenue Forecasting:</strong> Use historical data for accurate projections</li>
                <li><strong>Expense Tracking:</strong> Detailed categorization for tax purposes</li>
                <li><strong>Performance Metrics:</strong> Monitor ADR, occupancy, and RevPAR trends</li>
              </ul>

              <h2>Technology and Automation</h2>
              
              <h3>Property Management Systems</h3>
              <p>
                Technology streamlines operations and improves efficiency:
              </p>
              <ul>
                <li><strong>Channel Management:</strong> Sync calendars across all booking platforms</li>
                <li><strong>Automated Messaging:</strong> Pre-arrival, check-in, and post-stay communications</li>
                <li><strong>Dynamic Pricing Tools:</strong> Automated rate adjustments based on demand</li>
                <li><strong>Smart Home Integration:</strong> Keyless entry, thermostats, and security systems</li>
                <li><strong>Financial Reporting:</strong> Real-time revenue and expense tracking</li>
              </ul>

              <h3>Guest Communication Automation</h3>
              <ul>
                <li><strong>Booking Confirmations:</strong> Immediate automated responses</li>
                <li><strong>Pre-Arrival Instructions:</strong> Check-in details and property information</li>
                <li><strong>During-Stay Support:</strong> Automated check-ins and local recommendations</li>
                <li><strong>Post-Stay Follow-up:</strong> Review requests and feedback collection</li>
                <li><strong>Emergency Protocols:</strong> Automated escalation for urgent issues</li>
              </ul>

              <h2>Legal and Regulatory Compliance</h2>
              
              <h3>Zoning and Licensing</h3>
              <p>
                Compliance is essential for sustainable operations:
              </p>
              <ul>
                <li><strong>Local Regulations:</strong> Research STR laws in your jurisdiction</li>
                <li><strong>Business Licenses:</strong> Obtain required permits and registrations</li>
                <li><strong>Tax Obligations:</strong> Collect and remit occupancy taxes</li>
                <li><strong>HOA Restrictions:</strong> Verify community rules allow STRs</li>
                <li><strong>Insurance Requirements:</strong> Ensure adequate liability coverage</li>
              </ul>

              <h3>Safety and Security</h3>
              <ul>
                <li><strong>Safety Equipment:</strong> Smoke detectors, carbon monoxide alarms, fire extinguishers</li>
                <li><strong>Security Measures:</strong> Secure entry systems and emergency contacts</li>
                <li><strong>Guest Screening:</strong> Verify guest identities and review profiles</li>
                <li><strong>Property Protection:</strong> Security deposits and damage policies</li>
                <li><strong>Emergency Procedures:</strong> Clear instructions for guests and staff</li>
              </ul>

              <h2>Scaling Your STR Business</h2>
              
              <h3>Portfolio Growth Strategies</h3>
              <p>
                Successful operators often expand to multiple properties:
              </p>
              <ul>
                <li><strong>Market Diversification:</strong> Spread risk across different locations</li>
                <li><strong>Property Types:</strong> Mix of apartments, houses, and unique properties</li>
                <li><strong>Management Systems:</strong> Scalable operations and technology</li>
                <li><strong>Team Building:</strong> Hire cleaning, maintenance, and management staff</li>
                <li><strong>Financial Planning:</strong> Secure financing for expansion</li>
              </ul>

              <h3>Professional Management</h3>
              <ul>
                <li><strong>Co-hosting Arrangements:</strong> Partner with experienced operators</li>
                <li><strong>Full-Service Management:</strong> Outsource operations for passive income</li>
                <li><strong>Hybrid Models:</strong> Maintain control while delegating specific tasks</li>
                <li><strong>Performance Monitoring:</strong> Regular review of management effectiveness</li>
                <li><strong>Cost-Benefit Analysis:</strong> Evaluate management fees against time savings</li>
              </ul>

              <h2>Market Analysis and Competition</h2>
              
              <h3>Competitive Intelligence</h3>
              <p>
                Understanding your competition is crucial for success:
              </p>
              <ul>
                <li><strong>Pricing Analysis:</strong> Regular monitoring of comparable properties</li>
                <li><strong>Amenity Benchmarking:</strong> Identify features that command premium rates</li>
                <li><strong>Review Analysis:</strong> Learn from competitor strengths and weaknesses</li>
                <li><strong>Market Positioning:</strong> Differentiate your property from competitors</li>
                <li><strong>Demand Patterns:</strong> Understand seasonal and event-driven demand</li>
              </ul>

              <h3>Market Trends and Adaptation</h3>
              <ul>
                <li><strong>Travel Trends:</strong> Adapt to changing guest preferences</li>
                <li><strong>Technology Adoption:</strong> Implement new tools and platforms</li>
                <li><strong>Regulatory Changes:</strong> Stay informed about evolving laws</li>
                <li><strong>Economic Factors:</strong> Adjust strategies for economic conditions</li>
                <li><strong>Sustainability Practices:</strong> Eco-friendly operations attract conscious travelers</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li><strong>Ignoring Local Regulations:</strong> Can lead to fines and shutdowns</li>
                <li><strong>Poor Photography:</strong> First impressions are critical</li>
                <li><strong>Inconsistent Cleaning:</strong> Negative reviews impact bookings</li>
                <li><strong>Slow Response Times:</strong> Poor communication frustrates guests</li>
                <li><strong>Underestimating Expenses:</strong> Leads to inaccurate profit projections</li>
              </ul>

              <h2>Future-Proofing Your STR Business</h2>
              <p>
                The STR market is constantly evolving. To stay ahead, focus on:
              </p>
              <ul>
                <li><strong>Guest Experience:</strong> Personalization and unique offerings</li>
                <li><strong>Technology:</strong> Embrace automation and data analytics</li>
                <li><strong>Brand Building:</strong> Create a direct booking website and social media presence</li>
                <li><strong>Adaptability:</strong> Be prepared to pivot with market changes</li>
                <li><strong>Sustainability:</strong> Implement eco-friendly practices</li>
              </ul>
              <p>
                By following this guide, you can build a profitable and sustainable short-term rental business.
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {/* Results */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Revenue Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Gross Annual Revenue</Label>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(results.grossAnnualRevenue)}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Monthly Revenue</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.monthlyRevenue)}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Average Daily Rate</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.averageDailyRate)}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">RevPAR</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.revPAR)}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Net Operating Income</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.netOperatingIncome)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Investment Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Annual Cash Flow</Label>
                    <p className={`text-2xl font-bold ${results.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(results.cashFlow)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Cash-on-Cash Return</Label>
                      <p className={`text-lg font-semibold ${getPerformanceColor(results.cashOnCashReturn, { good: 12, fair: 8 })}`}>
                        {results.cashOnCashReturn}%
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Cap Rate</Label>
                      <p className={`text-lg font-semibold ${getPerformanceColor(results.capRate, { good: 6, fair: 4 })}`}>
                        {results.capRate}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Gross Yield</Label>
                      <p className="text-lg font-semibold text-blue-600">{results.grossYield}%</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Net Yield</Label>
                      <p className="text-lg font-semibold text-blue-600">{results.netYield}%</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Payback Period</Label>
                    <p className="text-lg font-semibold">{results.paybackPeriod} years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="mr-2 h-5 w-5 text-purple-600" />
                  Seasonal Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Peak Season</span>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{formatCurrency(results.seasonalBreakdown.peak.revenue)}</p>
                      <p className="text-xs text-gray-500">{results.seasonalBreakdown.peak.occupancy}% @ {formatCurrency(results.seasonalBreakdown.peak.rate)}/night</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Shoulder Season</span>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{formatCurrency(results.seasonalBreakdown.shoulder.revenue)}</p>
                      <p className="text-xs text-gray-500">{results.seasonalBreakdown.shoulder.occupancy}% @ {formatCurrency(results.seasonalBreakdown.shoulder.rate)}/night</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Off-Peak Season</span>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{formatCurrency(results.seasonalBreakdown.offPeak.revenue)}</p>
                      <p className="text-xs text-gray-500">{results.seasonalBreakdown.offPeak.occupancy}% @ {formatCurrency(results.seasonalBreakdown.offPeak.rate)}/night</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <AlertTriangle className="mr-2 h-5 w-5 text-orange-600" />
                  Break-Even Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Break-Even Occupancy</span>
                    <span className={`text-sm font-medium ${results.breakEvenOccupancy > 70 ? 'text-red-600' : 'text-green-600'}`}>
                      {results.breakEvenOccupancy}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Current Occupancy</span>
                    <span className="text-sm font-medium">{averageOccupancy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Safety Margin</span>
                    <span className={`text-sm font-medium ${(averageOccupancy - results.breakEvenOccupancy) > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                      {Math.round((averageOccupancy - results.breakEvenOccupancy) * 10) / 10}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            {results.recommendations.length > 0 && (
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {results.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <Info className="mr-2 h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
        </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    </div>
    </div>
    </div>
    </div>
  );
}