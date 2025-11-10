'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calculator, FileText, DollarSign, Home, Info, AlertCircle } from 'lucide-react'

interface StampDutyRates {
  [key: string]: {
    name: string
    rates: Array<{
      min: number
      max: number | null
      rate: number
      description: string
    }>
    firstHomeBuyer?: Array<{
      min: number
      max: number | null
      rate: number
      description: string
    }>
  }
}

const stampDutyRates: StampDutyRates = {
  'NSW': {
    name: 'New South Wales',
    rates: [
      { min: 0, max: 14000, rate: 0.0125, description: '1.25% on first $14,000' },
      { min: 14000, max: 32000, rate: 0.015, description: '1.5% on $14,001 - $32,000' },
      { min: 32000, max: 85000, rate: 0.0175, description: '1.75% on $32,001 - $85,000' },
      { min: 85000, max: 319000, rate: 0.035, description: '3.5% on $85,001 - $319,000' },
      { min: 319000, max: 1064000, rate: 0.045, description: '4.5% on $319,001 - $1,064,000' },
      { min: 1064000, max: null, rate: 0.055, description: '5.5% on amounts over $1,064,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 650000, rate: 0, description: 'No stamp duty for first home buyers up to $650,000' },
      { min: 650000, max: 800000, rate: 0, description: 'Concessions available between $650,000 - $800,000' }
    ]
  },
  'VIC': {
    name: 'Victoria',
    rates: [
      { min: 0, max: 25000, rate: 0.014, description: '1.4% on first $25,000' },
      { min: 25000, max: 130000, rate: 0.024, description: '2.4% on $25,001 - $130,000' },
      { min: 130000, max: 960000, rate: 0.06, description: '6% on $130,001 - $960,000' },
      { min: 960000, max: null, rate: 0.055, description: '5.5% on amounts over $960,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 600000, rate: 0, description: 'No stamp duty for first home buyers up to $600,000' },
      { min: 600000, max: 750000, rate: 0, description: 'Concessions available between $600,000 - $750,000' }
    ]
  },
  'QLD': {
    name: 'Queensland',
    rates: [
      { min: 0, max: 5000, rate: 0, description: 'No stamp duty on first $5,000' },
      { min: 5000, max: 75000, rate: 0.015, description: '1.5% on $5,001 - $75,000' },
      { min: 75000, max: 540000, rate: 0.035, description: '3.5% on $75,001 - $540,000' },
      { min: 540000, max: 1000000, rate: 0.045, description: '4.5% on $540,001 - $1,000,000' },
      { min: 1000000, max: null, rate: 0.0575, description: '5.75% on amounts over $1,000,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 550000, rate: 0, description: 'No stamp duty for first home buyers up to $550,000' }
    ]
  },
  'WA': {
    name: 'Western Australia',
    rates: [
      { min: 0, max: 120000, rate: 0.019, description: '1.9% on first $120,000' },
      { min: 120000, max: 150000, rate: 0.029, description: '2.9% on $120,001 - $150,000' },
      { min: 150000, max: 360000, rate: 0.039, description: '3.9% on $150,001 - $360,000' },
      { min: 360000, max: 725000, rate: 0.049, description: '4.9% on $360,001 - $725,000' },
      { min: 725000, max: null, rate: 0.059, description: '5.9% on amounts over $725,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 430000, rate: 0, description: 'No stamp duty for first home buyers up to $430,000' },
      { min: 430000, max: 530000, rate: 0, description: 'Concessions available between $430,000 - $530,000' }
    ]
  },
  'SA': {
    name: 'South Australia',
    rates: [
      { min: 0, max: 12000, rate: 0.01, description: '1% on first $12,000' },
      { min: 12000, max: 30000, rate: 0.02, description: '2% on $12,001 - $30,000' },
      { min: 30000, max: 50000, rate: 0.03, description: '3% on $30,001 - $50,000' },
      { min: 50000, max: 100000, rate: 0.04, description: '4% on $50,001 - $100,000' },
      { min: 100000, max: 200000, rate: 0.045, description: '4.5% on $100,001 - $200,000' },
      { min: 200000, max: 250000, rate: 0.05, description: '5% on $200,001 - $250,000' },
      { min: 250000, max: 300000, rate: 0.055, description: '5.5% on $250,001 - $300,000' },
      { min: 300000, max: null, rate: 0.06, description: '6% on amounts over $300,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 650000, rate: 0, description: 'Concessions available for first home buyers' }
    ]
  },
  'TAS': {
    name: 'Tasmania',
    rates: [
      { min: 0, max: 3000, rate: 0.015, description: '1.5% on first $3,000' },
      { min: 3000, max: 25000, rate: 0.02, description: '2% on $3,001 - $25,000' },
      { min: 25000, max: 75000, rate: 0.025, description: '2.5% on $25,001 - $75,000' },
      { min: 75000, max: 200000, rate: 0.035, description: '3.5% on $75,001 - $200,000' },
      { min: 200000, max: 375000, rate: 0.04, description: '4% on $200,001 - $375,000' },
      { min: 375000, max: 725000, rate: 0.043, description: '4.3% on $375,001 - $725,000' },
      { min: 725000, max: null, rate: 0.045, description: '4.5% on amounts over $725,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 400000, rate: 0, description: 'No stamp duty for first home buyers up to $400,000' }
    ]
  },
  'ACT': {
    name: 'Australian Capital Territory',
    rates: [
      { min: 0, max: 200000, rate: 0, description: 'No stamp duty on first $200,000' },
      { min: 200000, max: 300000, rate: 0.017, description: '1.7% on $200,001 - $300,000' },
      { min: 300000, max: 500000, rate: 0.034, description: '3.4% on $300,001 - $500,000' },
      { min: 500000, max: 750000, rate: 0.067, description: '6.7% on $500,001 - $750,000' },
      { min: 750000, max: 1000000, rate: 0.067, description: '6.7% on $750,001 - $1,000,000' },
      { min: 1000000, max: 1455000, rate: 0.067, description: '6.7% on $1,000,001 - $1,455,000' },
      { min: 1455000, max: null, rate: 0.067, description: '6.7% on amounts over $1,455,000' }
    ]
  },
  'NT': {
    name: 'Northern Territory',
    rates: [
      { min: 0, max: 525000, rate: 0.065, description: '6.5% on amounts up to $525,000' },
      { min: 525000, max: null, rate: 0.059, description: '5.9% on amounts over $525,000' }
    ],
    firstHomeBuyer: [
      { min: 0, max: 650000, rate: 0, description: 'Concessions available for first home buyers' }
    ]
  }
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Stamp Duty Calculator',
    description: 'Calculate stamp duty and transfer taxes. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [isFirstHomeBuyer, setIsFirstHomeBuyer] = useState<boolean>(false)
  const [stampDuty, setStampDuty] = useState<number>(0)
  const [breakdown, setBreakdown] = useState<Array<{band: string, amount: number, rate: string}>>([])

  const calculateStampDuty = useCallback(() => {
    if (!propertyValue || !state) return

    const value = parseFloat(propertyValue)
    if (isNaN(value) || value <= 0) return

    const stateRates = stampDutyRates[state]
    if (!stateRates) return

    const rates = stateRates.rates
    
    // Use first home buyer rates if applicable and available
    if (isFirstHomeBuyer && stateRates.firstHomeBuyer) {
      // Check if property value qualifies for first home buyer benefits
      const fhbBenefit = stateRates.firstHomeBuyer.find(rate => 
        value >= rate.min && (rate.max === null || value <= rate.max)
      )
      
      if (fhbBenefit && fhbBenefit.rate === 0) {
        setStampDuty(0)
        setBreakdown([{
          band: 'First Home Buyer Exemption',
          amount: 0,
          rate: '0%'
        }])
        return
      }
    }

    let totalStampDuty = 0
    const calculationBreakdown: Array<{band: string, amount: number, rate: string}> = []

    for (const rate of rates) {
      if (value <= rate.min) break

      const bandMin = rate.min
      const bandMax = rate.max === null ? value : Math.min(rate.max, value)
      const bandAmount = bandMax - bandMin
      const bandStampDuty = bandAmount * rate.rate

      if (bandAmount > 0) {
        totalStampDuty += bandStampDuty
        calculationBreakdown.push({
          band: `$${bandMin.toLocaleString()} - $${bandMax.toLocaleString()}`,
          amount: bandStampDuty,
          rate: `${(rate.rate * 100).toFixed(2)}%`
        })
      }

      if (rate.max === null || value <= rate.max) break
    }

    setStampDuty(totalStampDuty)
    setBreakdown(calculationBreakdown)
  }, [propertyValue, state, isFirstHomeBuyer])

  useEffect(() => {
    calculateStampDuty()
  }, [propertyValue, state, isFirstHomeBuyer, calculateStampDuty])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Stamp Duty Calculator</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Calculate stamp duty costs for property purchases across Australian states and territories
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Property Details
            </CardTitle>
            <CardDescription>
              Enter your property information to calculate stamp duty
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="propertyValue">Property Value</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="propertyValue"
                  type="number"
                  placeholder="Enter property value"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State/Territory</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state or territory" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(stampDutyRates).map(([code, data]) => (
                    <SelectItem key={code} value={code}>
                      {data.name} ({code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="firstHomeBuyer"
                checked={isFirstHomeBuyer}
                onChange={(e) => setIsFirstHomeBuyer(e.target.checked)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="firstHomeBuyer" className="text-sm">
                I am a first home buyer
              </Label>
            </div>

            {isFirstHomeBuyer && state && stampDutyRates[state].firstHomeBuyer && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">First Home Buyer Benefits:</p>
                    {stampDutyRates[state].firstHomeBuyer!.map((benefit, index) => (
                      <p key={index} className="text-xs">{benefit.description}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Stamp Duty Calculation
            </CardTitle>
            <CardDescription>
              Your estimated stamp duty costs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {propertyValue && state ? (
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Total Stamp Duty</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {formatCurrency(stampDuty)}
                  </p>
                  {isFirstHomeBuyer && stampDuty === 0 && (
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                      First Home Buyer Exemption Applied
                    </Badge>
                  )}
                </div>

                {breakdown.length > 0 && (
                  <div className="space-y-4">
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3">Calculation Breakdown</h4>
                      <div className="space-y-2">
                        {breakdown.map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{item.band} ({item.rate})</span>
                            <span className="font-medium">{formatCurrency(item.amount)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Important Note:</p>
                      <p className="text-xs">
                        This calculator provides estimates only. Actual stamp duty may vary based on 
                        specific circumstances, concessions, and current legislation. Consult a 
                        professional for accurate calculations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Enter property details to calculate stamp duty</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* State Information */}
      {state && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>
              {stampDutyRates[state].name} Stamp Duty Rates
            </CardTitle>
            <CardDescription>
              Current stamp duty rates and thresholds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-3">Standard Rates</h4>
                <div className="space-y-2">
                  {stampDutyRates[state].rates.map((rate, index) => (
                    <div key={index} className="text-sm">
                      <span className="text-gray-600">{rate.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {stampDutyRates[state].firstHomeBuyer && (
                <div>
                  <h4 className="font-medium mb-3">First Home Buyer Benefits</h4>
                  <div className="space-y-2">
                    {stampDutyRates[state].firstHomeBuyer!.map((benefit, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-600">{benefit.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}