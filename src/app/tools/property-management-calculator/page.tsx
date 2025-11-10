'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Home, Clock, AlertCircle, Users, TrendingUp, Shield, FileText } from 'lucide-react';

interface PropertyData {
  monthlyRent: number
  propertyType: string
  units: number
  propertyValue: number
  location: string
  propertyAge: number
  condition: string
}

interface ManagementCosts {
  selfManagement: {
    timeInvestment: number // hours per month
    hourlyValue: number
    advertisingCosts: number
    screeningCosts: number
    maintenanceTools: number
    legalFees: number
    accountingSoftware: number
    insuranceIncrease: number
    educationCosts: number
  }
  professionalManagement: {
    managementFee: number // percentage
    leaseUpFee: number // flat fee or percentage
    maintenanceMarkup: number // percentage
    evictionFee: number
    inspectionFee: number
    renewalFee: number
    advertisingFee: number
    additionalServices: number
  }
}

interface CalculationResults {
  selfManagement: {
    monthlyCost: number
    annualCost: number
    timeValue: number
    totalCostWithTime: number
    netIncome: number
    roi: number
  }
  professionalManagement: {
    monthlyCost: number
    annualCost: number
    netIncome: number
    roi: number
  }
  comparison: {
    costDifference: number
    timeSavings: number
    recommendation: 'self' | 'professional' | 'neutral'
    breakEvenPoint: number
  }
  analysis: {
    stressLevel: 'low' | 'medium' | 'high'
    timeCommitment: 'low' | 'medium' | 'high'
    expertise: 'beginner' | 'intermediate' | 'expert'
    scalability: 'low' | 'medium' | 'high'
  }
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Management Calculator',
    description: 'Calculate property management costs and fees. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyManagementCalculator() {

  const [propertyData, setPropertyData] = useState<PropertyData>({
    monthlyRent: 2000,
    propertyType: 'single-family',
    units: 1,
    propertyValue: 300000,
    location: 'suburban',
    propertyAge: 10,
    condition: 'good'
  })

  const [managementCosts, setManagementCosts] = useState<ManagementCosts>({
    selfManagement: {
      timeInvestment: 8,
      hourlyValue: 25,
      advertisingCosts: 50,
      screeningCosts: 30,
      maintenanceTools: 25,
      legalFees: 100,
      accountingSoftware: 15,
      insuranceIncrease: 20,
      educationCosts: 50
    },
    professionalManagement: {
      managementFee: 8, // percentage
      leaseUpFee: 500,
      maintenanceMarkup: 15,
      evictionFee: 750,
      inspectionFee: 100,
      renewalFee: 150,
      advertisingFee: 200,
      additionalServices: 50
    }
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [activeTab, setActiveTab] = useState('calculator')

  const calculateManagementCosts = () => {
    const annualRent = propertyData.monthlyRent * 12 * propertyData.units
    
    // Self-management calculations
    const selfTimeValue = managementCosts.selfManagement.timeInvestment * managementCosts.selfManagement.hourlyValue
    const selfMonthlyCosts = 
      managementCosts.selfManagement.advertisingCosts / 12 +
      managementCosts.selfManagement.screeningCosts / 12 +
      managementCosts.selfManagement.maintenanceTools +
      managementCosts.selfManagement.legalFees / 12 +
      managementCosts.selfManagement.accountingSoftware +
      managementCosts.selfManagement.insuranceIncrease +
      managementCosts.selfManagement.educationCosts / 12

    const selfAnnualCost = selfMonthlyCosts * 12
    const selfTotalWithTime = selfAnnualCost + (selfTimeValue * 12)
    const selfNetIncome = annualRent - selfAnnualCost
    const selfROI = ((selfNetIncome / propertyData.propertyValue) * 100)

    // Professional management calculations
    const profMonthlyFee = (propertyData.monthlyRent * propertyData.units * managementCosts.professionalManagement.managementFee) / 100
    const profMonthlyCosts = profMonthlyFee + 
      managementCosts.professionalManagement.leaseUpFee / 12 +
      managementCosts.professionalManagement.evictionFee / 24 + // Assume eviction every 2 years
      managementCosts.professionalManagement.inspectionFee / 12 +
      managementCosts.professionalManagement.renewalFee / 12 +
      managementCosts.professionalManagement.advertisingFee / 12 +
      managementCosts.professionalManagement.additionalServices

    const profAnnualCost = profMonthlyCosts * 12
    const profNetIncome = annualRent - profAnnualCost
    const profROI = ((profNetIncome / propertyData.propertyValue) * 100)

    // Comparison analysis
    const costDifference = profAnnualCost - selfAnnualCost
    const timeSavings = managementCosts.selfManagement.timeInvestment * 12
    
    let recommendation: 'self' | 'professional' | 'neutral' = 'neutral'
    if (costDifference > selfTimeValue * 12) {
      recommendation = 'self'
    } else if (costDifference < selfTimeValue * 6) {
      recommendation = 'professional'
    }

    const breakEvenPoint = costDifference / (selfTimeValue * 12) * 100

    // Analysis factors
    const stressLevel = propertyData.units > 5 ? 'high' : propertyData.units > 2 ? 'medium' : 'low'
    const timeCommitment = managementCosts.selfManagement.timeInvestment > 15 ? 'high' : 
                          managementCosts.selfManagement.timeInvestment > 8 ? 'medium' : 'low'
    const expertise = propertyData.propertyAge > 20 ? 'expert' : propertyData.propertyAge > 10 ? 'intermediate' : 'beginner'
    const scalability = propertyData.units > 10 ? 'high' : propertyData.units > 3 ? 'medium' : 'low'

    setResults({
      selfManagement: {
        monthlyCost: selfMonthlyCosts,
        annualCost: selfAnnualCost,
        timeValue: selfTimeValue * 12,
        totalCostWithTime: selfTotalWithTime,
        netIncome: selfNetIncome,
        roi: selfROI
      },
      professionalManagement: {
        monthlyCost: profMonthlyCosts,
        annualCost: profAnnualCost,
        netIncome: profNetIncome,
        roi: profROI
      },
      comparison: {
        costDifference,
        timeSavings,
        recommendation,
        breakEvenPoint
      },
      analysis: {
        stressLevel,
        timeCommitment,
        expertise,
        scalability
      }
    })

  }

  const getRecommendationColor = (recommendation: 'self' | 'professional' | 'neutral') => {
    switch (recommendation) {
      case 'self': return 'bg-green-500'
      case 'professional': return 'bg-blue-500'
      case 'neutral': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getRecommendationText = (recommendation: 'self' | 'professional' | 'neutral') => {
    switch (recommendation) {
      case 'self': return 'Self-Management Recommended'
      case 'professional': return 'Professional Management Recommended'
      case 'neutral': return 'Either Option Viable'
      default: return 'Analysis Needed'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Property Management Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare self-management vs professional property management costs and analyze the best option for your rental property investment.
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
            {/* Property Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Information
                </CardTitle>
                <CardDescription>
                  Enter your rental property details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent per Unit</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={propertyData.monthlyRent}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      monthlyRent: Number(e.target.value)
                    })}
                    placeholder="2000"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select
                    value={propertyData.propertyType}
                    onValueChange={(value) => setPropertyData({
                      ...propertyData,
                      propertyType: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="triplex">Triplex</SelectItem>
                      <SelectItem value="fourplex">Fourplex</SelectItem>
                      <SelectItem value="apartment">Apartment Building</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="units">Number of Units</Label>
                    <Input
                      id="units"
                      type="number"
                      value={propertyData.units}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        units: Number(e.target.value)
                      })}
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyValue">Property Value</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={propertyData.propertyValue}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        propertyValue: Number(e.target.value)
                      })}
                      placeholder="300000"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location Type</Label>
                  <Select
                    value={propertyData.location}
                    onValueChange={(value) => setPropertyData({
                      ...propertyData,
                      location: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urban">Urban</SelectItem>
                      <SelectItem value="suburban">Suburban</SelectItem>
                      <SelectItem value="rural">Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyAge">Property Age (years)</Label>
                    <Input
                      id="propertyAge"
                      type="number"
                      value={propertyData.propertyAge}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        propertyAge: Number(e.target.value)
                      })}
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Property Condition</Label>
                    <Select
                      value={propertyData.condition}
                      onValueChange={(value) => setPropertyData({
                        ...propertyData,
                        condition: value
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Self-Management Costs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Self-Management Costs
                </CardTitle>
                <CardDescription>
                  Estimate your costs for managing the property yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timeInvestment">Time Investment (hrs/month)</Label>
                    <Input
                      id="timeInvestment"
                      type="number"
                      value={managementCosts.selfManagement.timeInvestment}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          timeInvestment: Number(e.target.value)
                        }
                      })}
                      placeholder="8"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hourlyValue">Your Hourly Value ($)</Label>
                    <Input
                      id="hourlyValue"
                      type="number"
                      value={managementCosts.selfManagement.hourlyValue}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          hourlyValue: Number(e.target.value)
                        }
                      })}
                      placeholder="25"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="advertisingCosts">Advertising ($/month)</Label>
                    <Input
                      id="advertisingCosts"
                      type="number"
                      value={managementCosts.selfManagement.advertisingCosts}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          advertisingCosts: Number(e.target.value)
                        }
                      })}
                      placeholder="50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="screeningCosts">Screening ($/month)</Label>
                    <Input
                      id="screeningCosts"
                      type="number"
                      value={managementCosts.selfManagement.screeningCosts}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          screeningCosts: Number(e.target.value)
                        }
                      })}
                      placeholder="30"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="maintenanceTools">Tools/Supplies ($/month)</Label>
                    <Input
                      id="maintenanceTools"
                      type="number"
                      value={managementCosts.selfManagement.maintenanceTools}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          maintenanceTools: Number(e.target.value)
                        }
                      })}
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <Label htmlFor="legalFees">Legal Fees ($/month)</Label>
                    <Input
                      id="legalFees"
                      type="number"
                      value={managementCosts.selfManagement.legalFees}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          legalFees: Number(e.target.value)
                        }
                      })}
                      placeholder="100"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="accountingSoftware">Software ($/month)</Label>
                    <Input
                      id="accountingSoftware"
                      type="number"
                      value={managementCosts.selfManagement.accountingSoftware}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          accountingSoftware: Number(e.target.value)
                        }
                      })}
                      placeholder="15"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insuranceIncrease">Insurance Increase ($/month)</Label>
                    <Input
                      id="insuranceIncrease"
                      type="number"
                      value={managementCosts.selfManagement.insuranceIncrease}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        selfManagement: {
                          ...managementCosts.selfManagement,
                          insuranceIncrease: Number(e.target.value)
                        }
                      })}
                      placeholder="20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Management Costs */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Professional Management Costs
                </CardTitle>
                <CardDescription>
                  Enter the fees charged by professional property management companies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="managementFee">Management Fee (%)</Label>
                    <Input
                      id="managementFee"
                      type="number"
                      value={managementCosts.professionalManagement.managementFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          managementFee: Number(e.target.value)
                        }
                      })}
                      placeholder="8"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leaseUpFee">Lease-Up Fee ($)</Label>
                    <Input
                      id="leaseUpFee"
                      type="number"
                      value={managementCosts.professionalManagement.leaseUpFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          leaseUpFee: Number(e.target.value)
                        }
                      })}
                      placeholder="500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maintenanceMarkup">Maintenance Markup (%)</Label>
                    <Input
                      id="maintenanceMarkup"
                      type="number"
                      value={managementCosts.professionalManagement.maintenanceMarkup}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          maintenanceMarkup: Number(e.target.value)
                        }
                      })}
                      placeholder="15"
                    />
                  </div>
                  <div>
                    <Label htmlFor="evictionFee">Eviction Fee ($)</Label>
                    <Input
                      id="evictionFee"
                      type="number"
                      value={managementCosts.professionalManagement.evictionFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          evictionFee: Number(e.target.value)
                        }
                      })}
                      placeholder="750"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="inspectionFee">Inspection Fee ($)</Label>
                    <Input
                      id="inspectionFee"
                      type="number"
                      value={managementCosts.professionalManagement.inspectionFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          inspectionFee: Number(e.target.value)
                        }
                      })}
                      placeholder="100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="renewalFee">Renewal Fee ($)</Label>
                    <Input
                      id="renewalFee"
                      type="number"
                      value={managementCosts.professionalManagement.renewalFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          renewalFee: Number(e.target.value)
                        }
                      })}
                      placeholder="150"
                    />
                  </div>
                  <div>
                    <Label htmlFor="advertisingFee">Advertising Fee ($)</Label>
                    <Input
                      id="advertisingFee"
                      type="number"
                      value={managementCosts.professionalManagement.advertisingFee}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          advertisingFee: Number(e.target.value)
                        }
                      })}
                      placeholder="200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalServices">Additional Services ($/month)</Label>
                    <Input
                      id="additionalServices"
                      type="number"
                      value={managementCosts.professionalManagement.additionalServices}
                      onChange={(e) => setManagementCosts({
                        ...managementCosts,
                        professionalManagement: {
                          ...managementCosts.professionalManagement,
                          additionalServices: Number(e.target.value)
                        }
                      })}
                      placeholder="50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Button 
                onClick={calculateManagementCosts} 
                className="w-full"
                size="lg"
                disabled={!propertyData.monthlyRent || !propertyData.propertyValue}
              >
                Calculate Management Costs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              {/* Recommendation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Badge className={`${getRecommendationColor(results.comparison.recommendation)} text-white text-lg px-6 py-2`}>
                      {getRecommendationText(results.comparison.recommendation)}
                    </Badge>
                    <p className="text-gray-600 mt-4">
                      Based on your property details and cost analysis, this is the most cost-effective option for your situation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Self-Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Out-of-Pocket Cost:</span>
                        <span className="font-semibold">${results.selfManagement.monthlyCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Out-of-Pocket Cost:</span>
                        <span className="font-semibold">${results.selfManagement.annualCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Value (Annual):</span>
                        <span className="font-semibold">${results.selfManagement.timeValue.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Total Cost with Time:</span>
                        <span className="font-bold text-lg">${results.selfManagement.totalCostWithTime.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net Annual Income:</span>
                        <span className="font-semibold text-green-600">${results.selfManagement.netIncome.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="font-semibold">{results.selfManagement.roi.toFixed(2)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Professional Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Cost:</span>
                        <span className="font-semibold">${results.professionalManagement.monthlyCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Cost:</span>
                        <span className="font-semibold">${results.professionalManagement.annualCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Savings:</span>
                        <span className="font-semibold">{results.comparison.timeSavings} hours/year</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Total Annual Cost:</span>
                        <span className="font-bold text-lg">${results.professionalManagement.annualCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net Annual Income:</span>
                        <span className="font-semibold text-blue-600">${results.professionalManagement.netIncome.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="font-semibold">{results.professionalManagement.roi.toFixed(2)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Analysis Factors */}
              <Card>
                <CardHeader>
                  <CardTitle>Analysis Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="mb-2">
                        <Clock className="h-8 w-8 mx-auto text-blue-500" />
                      </div>
                      <h4 className="font-semibold">Time Commitment</h4>
                      <Badge variant={results.analysis.timeCommitment === 'high' ? 'destructive' : 
                                   results.analysis.timeCommitment === 'medium' ? 'default' : 'secondary'}>
                        {results.analysis.timeCommitment}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <AlertCircle className="h-8 w-8 mx-auto text-yellow-500" />
                      </div>
                      <h4 className="font-semibold">Stress Level</h4>
                      <Badge variant={results.analysis.stressLevel === 'high' ? 'destructive' : 
                                   results.analysis.stressLevel === 'medium' ? 'default' : 'secondary'}>
                        {results.analysis.stressLevel}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <FileText className="h-8 w-8 mx-auto text-green-500" />
                      </div>
                      <h4 className="font-semibold">Expertise Required</h4>
                      <Badge variant={results.analysis.expertise === 'expert' ? 'destructive' : 
                                   results.analysis.expertise === 'intermediate' ? 'default' : 'secondary'}>
                        {results.analysis.expertise}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <TrendingUp className="h-8 w-8 mx-auto text-purple-500" />
                      </div>
                      <h4 className="font-semibold">Scalability</h4>
                      <Badge variant={results.analysis.scalability === 'high' ? 'default' : 
                                   results.analysis.scalability === 'medium' ? 'secondary' : 'outline'}>
                        {results.analysis.scalability}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Difference Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Annual Cost Difference:</span>
                      <span className={`font-bold text-lg ${results.comparison.costDifference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {results.comparison.costDifference > 0 ? '+' : ''}${results.comparison.costDifference.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {results.comparison.costDifference > 0 
                        ? 'Professional management costs more annually'
                        : 'Self-management costs more when including time value'
                      }
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Break-even Point:</span>
                      <span className="font-semibold">{results.comparison.breakEvenPoint.toFixed(1)}%</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Professional management becomes cost-effective when your time is valued at this percentage above current estimate
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Please fill out the calculator form and click "Calculate Management Costs" to see your results.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <div className="grid gap-6">
            {/* Self-Management vs Professional */}
            <Card>
              <CardHeader>
                <CardTitle>Self-Management vs Professional Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Self-Management Pros</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Lower out-of-pocket costs</li>
                      <li>Direct control over property</li>
                      <li>Personal relationships with tenants</li>
                      <li>Immediate decision making</li>
                      <li>Keep all rental income</li>
                      <li>Learn property management skills</li>
                    </ul>
                    <h4 className="font-semibold text-red-600 mb-3 mt-4">Self-Management Cons</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Significant time investment</li>
                      <li>24/7 availability required</li>
                      <li>Legal liability and compliance</li>
                      <li>Maintenance coordination stress</li>
                      <li>Tenant screening responsibility</li>
                      <li>Limited scalability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Professional Management Pros</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Time savings and convenience</li>
                      <li>Professional expertise</li>
                      <li>Legal compliance knowledge</li>
                      <li>Established vendor networks</li>
                      <li>Marketing and tenant screening</li>
                      <li>Scalable for multiple properties</li>
                    </ul>
                    <h4 className="font-semibold text-red-600 mb-3 mt-4">Professional Management Cons</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Higher ongoing costs</li>
                      <li>Less direct control</li>
                      <li>Potential communication delays</li>
                      <li>Markup on maintenance costs</li>
                      <li>Quality varies by company</li>
                      <li>Additional fees for services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Factors */}
            <Card>
              <CardHeader>
                <CardTitle>Understanding Management Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Self-Management Hidden Costs</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Time Value:</strong> Your hourly rate × hours spent managing</li>
                      <li><strong>Opportunity Cost:</strong> Income lost from other activities</li>
                      <li><strong>Learning Curve:</strong> Mistakes and inefficiencies while learning</li>
                      <li><strong>Legal Risks:</strong> Potential lawsuits and compliance issues</li>
                      <li><strong>Stress Impact:</strong> Health and relationship costs</li>
                      <li><strong>Tools & Software:</strong> Property management systems and tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Professional Management Fee Structure</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Management Fee:</strong> 6-12% of monthly rent (most common: 8-10%)</li>
                      <li><strong>Lease-Up Fee:</strong> $300-800 or 50-100% of first month's rent</li>
                      <li><strong>Maintenance Markup:</strong> 10-20% on contractor services</li>
                      <li><strong>Eviction Fee:</strong> $500-1500 plus court costs</li>
                      <li><strong>Inspection Fees:</strong> $75-150 per inspection</li>
                      <li><strong>Renewal Fees:</strong> $100-300 per lease renewal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Framework */}
            <Card>
              <CardHeader>
                <CardTitle>Decision Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Choose Self-Management If:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-green-600">
                      <li>You have available time</li>
                      <li>Property is nearby</li>
                      <li>You enjoy hands-on management</li>
                      <li>Single property or small portfolio</li>
                      <li>High personal income (time value)</li>
                      <li>Want maximum control</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Choose Professional If:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-600">
                      <li>Limited time availability</li>
                      <li>Multiple properties</li>
                      <li>Properties in different locations</li>
                      <li>Lack of maintenance skills</li>
                      <li>Want passive income</li>
                      <li>High-stress job or lifestyle</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 mb-2">Hybrid Approach:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-600">
                      <li>Self-manage nearby properties</li>
                      <li>Professional for distant ones</li>
                      <li>Start self, transition to professional</li>
                      <li>Use professionals for specific tasks</li>
                      <li>Seasonal management changes</li>
                      <li>Portfolio-based decisions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips for Success */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Self-Management Success Tips</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Use property management software</li>
                      <li>Establish clear policies and procedures</li>
                      <li>Build a reliable contractor network</li>
                      <li>Stay current on landlord-tenant laws</li>
                      <li>Set boundaries for tenant communication</li>
                      <li>Keep detailed records and documentation</li>
                      <li>Consider landlord insurance and legal protection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Choosing a Management Company</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Check licenses and certifications</li>
                      <li>Read reviews and get references</li>
                      <li>Understand all fees upfront</li>
                      <li>Review contract terms carefully</li>
                      <li>Ask about their tenant screening process</li>
                      <li>Inquire about maintenance response times</li>
                      <li>Ensure they provide detailed monthly reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="article" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Property Management: Complete Cost Analysis Guide</CardTitle>
              <p className="text-gray-600">
                Master property management costs and strategies to maximize your rental property returns while minimizing operational headaches.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Property Management Costs</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Property management costs represent one of the most significant ongoing expenses for rental property owners. Whether you choose to self-manage or hire professionals, understanding these costs is crucial for accurate investment analysis and maximizing returns. This comprehensive guide breaks down all aspects of property management expenses and strategies.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Key Benefits of Understanding Management Costs</h4>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Accurate cash flow projections</li>
                    <li>Better investment decision making</li>
                    <li>Optimal management strategy selection</li>
                    <li>Improved profitability analysis</li>
                  </ul>
                </div>
              </div>

              {/* Self-Management vs Professional Management */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Management vs Professional Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-3">Self-Management Benefits</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                      <li>Lower direct costs (no management fees)</li>
                      <li>Complete control over decisions</li>
                      <li>Direct tenant relationships</li>
                      <li>Higher profit margins</li>
                      <li>Immediate response to issues</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-3">Professional Management Benefits</h4>
                    <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                      <li>Time savings and convenience</li>
                      <li>Professional expertise and systems</li>
                      <li>Legal compliance knowledge</li>
                      <li>Established vendor networks</li>
                      <li>24/7 emergency response</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown Analysis */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Cost Breakdown</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Professional Management Fees</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Monthly Management:</strong> 8-12% of gross rental income</li>
                      <li><strong>Lease-Up Fee:</strong> $300-800 or 50-100% of first month's rent</li>
                      <li><strong>Maintenance Markup:</strong> 10-20% on repair costs</li>
                      <li><strong>Renewal Fees:</strong> $100-300 per lease renewal</li>
                      <li><strong>Eviction Fees:</strong> $500-1,500 plus legal costs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Self-Management Hidden Costs</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Time Investment:</strong> 5-10 hours per property per month</li>
                      <li><strong>Marketing Costs:</strong> $50-200 per vacancy</li>
                      <li><strong>Screening Costs:</strong> $25-50 per application</li>
                      <li><strong>Legal Fees:</strong> $200-500 per hour for disputes</li>
                      <li><strong>Emergency Response:</strong> After-hours service calls</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology and Tools */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology and Management Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Property Management Software</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Rent collection automation</li>
                      <li>Maintenance request tracking</li>
                      <li>Financial reporting</li>
                      <li>Tenant communication</li>
                    </ul>
                    <p className="text-xs text-blue-700 mt-2">Cost: $20-100/month per property</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Marketing Platforms</h4>
                    <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                      <li>Online listing services</li>
                      <li>Virtual tour software</li>
                      <li>Social media advertising</li>
                      <li>Professional photography</li>
                    </ul>
                    <p className="text-xs text-purple-700 mt-2">Cost: $50-300 per vacancy</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Screening Services</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                      <li>Credit report services</li>
                      <li>Background check platforms</li>
                      <li>Income verification tools</li>
                      <li>Reference checking systems</li>
                    </ul>
                    <p className="text-xs text-green-700 mt-2">Cost: $25-75 per application</p>
                  </div>
                </div>
              </div>

              {/* Maintenance and Repair Management */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance and Repair Cost Management</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Preventive Maintenance Strategy</h4>
                    <p className="text-yellow-800 text-sm mb-2">
                      Proactive maintenance reduces long-term costs and tenant turnover.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                      <li>HVAC system servicing (bi-annual)</li>
                      <li>Plumbing inspections (annual)</li>
                      <li>Roof and gutter maintenance</li>
                      <li>Appliance servicing and replacement planning</li>
                      <li>Exterior maintenance and landscaping</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-900 mb-2">Emergency Response Planning</h4>
                    <p className="text-red-800 text-sm mb-2">
                      24/7 emergency response capability is crucial for tenant satisfaction.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-red-800 text-sm">
                      <li>Establish relationships with reliable contractors</li>
                      <li>Create emergency contact protocols</li>
                      <li>Maintain emergency repair fund (3-5% of rent)</li>
                      <li>Document all emergency procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal and Compliance Costs */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal and Compliance Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Legal Compliance Requirements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Fair Housing Act compliance</li>
                      <li>Local landlord-tenant laws</li>
                      <li>Safety and habitability standards</li>
                      <li>Eviction procedures and documentation</li>
                      <li>Security deposit regulations</li>
                      <li>Lease agreement legal requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Associated Costs</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Legal consultation:</strong> $200-500/hour</li>
                      <li><strong>Eviction proceedings:</strong> $500-2,000</li>
                      <li><strong>Compliance training:</strong> $100-500/year</li>
                      <li><strong>Legal document updates:</strong> $200-800</li>
                      <li><strong>Court filing fees:</strong> $50-300</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Management and Reporting */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Management and Reporting</h3>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-900 mb-2">Essential Financial Tracking</h4>
                    <ul className="list-disc list-inside space-y-1 text-indigo-800 text-sm">
                      <li>Monthly income and expense tracking</li>
                      <li>Tenant payment history monitoring</li>
                      <li>Maintenance cost categorization</li>
                      <li>Tax-deductible expense documentation</li>
                      <li>Cash flow analysis and projections</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-900 mb-2">Professional Services</h4>
                    <ul className="list-disc list-inside space-y-1 text-teal-800 text-sm">
                      <li><strong>Accounting services:</strong> $100-300/month</li>
                      <li><strong>Tax preparation:</strong> $200-800/year</li>
                      <li><strong>Bookkeeping software:</strong> $10-50/month</li>
                      <li><strong>Financial reporting tools:</strong> $20-100/month</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cost Optimization Strategies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization Strategies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Reducing Management Costs</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Negotiate management fees for multiple properties</li>
                      <li>Bundle services for volume discounts</li>
                      <li>Implement preventive maintenance programs</li>
                      <li>Use technology to automate routine tasks</li>
                      <li>Develop long-term vendor relationships</li>
                      <li>Focus on tenant retention to reduce turnover</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Maximizing Efficiency</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Standardize processes across properties</li>
                      <li>Create detailed maintenance schedules</li>
                      <li>Implement tenant self-service portals</li>
                      <li>Use data analytics for decision making</li>
                      <li>Regular performance reviews of service providers</li>
                      <li>Continuous education on industry best practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Mistakes to Avoid */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Property Management Mistakes</h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-red-800 text-sm">
                    <li><strong>Underestimating time commitment:</strong> Self-management requires significant time investment</li>
                    <li><strong>Inadequate tenant screening:</strong> Poor tenants lead to higher costs and problems</li>
                    <li><strong>Deferred maintenance:</strong> Small issues become expensive repairs when ignored</li>
                    <li><strong>Inadequate insurance coverage:</strong> Insufficient protection against liability and damages</li>
                    <li><strong>Poor record keeping:</strong> Missing tax deductions and legal documentation</li>
                    <li><strong>Emotional decision making:</strong> Personal feelings affecting business decisions</li>
                    <li><strong>Ignoring local laws:</strong> Non-compliance leading to fines and legal issues</li>
                    <li><strong>Inadequate emergency funds:</strong> Insufficient reserves for unexpected expenses</li>
                  </ul>
                </div>
              </div>

              {/* Technology Integration */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Property Management Technology</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Automation Opportunities</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Automated rent collection and late fee processing</li>
                      <li>Maintenance request routing and tracking</li>
                      <li>Tenant communication and notifications</li>
                      <li>Financial reporting and analytics</li>
                      <li>Lease renewal reminders and processing</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">ROI of Technology Investment</h4>
                    <p className="text-green-800 text-sm mb-2">
                      Technology investments typically pay for themselves through:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                      <li>Reduced administrative time (20-40% savings)</li>
                      <li>Faster rent collection and reduced delinquencies</li>
                      <li>Improved tenant satisfaction and retention</li>
                      <li>Better maintenance cost control</li>
                      <li>Enhanced financial tracking and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Takeaways</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Cost Management Essentials</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Understand all direct and hidden costs</li>
                      <li>Choose management strategy based on portfolio size</li>
                      <li>Invest in preventive maintenance</li>
                      <li>Leverage technology for efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Success Factors</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Focus on tenant retention</li>
                      <li>Maintain adequate reserves</li>
                      <li>Stay compliant with regulations</li>
                      <li>Continuously optimize processes</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Effective property management is about balancing cost control with service quality to maximize long-term returns and minimize operational headaches.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}