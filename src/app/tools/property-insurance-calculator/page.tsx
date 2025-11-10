'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Shield,
  Users,
  Home as HomeIcon,
  BarChart3,
  FileText,
  Calendar,
  MapPin,
  Home,
  Calculator,
  DollarSign,
  Check as CheckIcon,
  Info as InfoIcon,
  AlertTriangle,
  BookOpen as BookOpenIcon,
  Shield as ShieldIcon,
  DollarSign as DollarSignIcon,
  Car as CarIcon,
  TrendingUp as TrendingUpIcon,
  AlertTriangle as AlertTriangleIcon
} from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

interface AutoTableOptions {
  head: string[][];
  body: (string | number)[][];
  startY: number;
  didDrawPage: () => void;
}

interface jsPDFWithAutoTable extends jsPDF {
  autoTable: (options: AutoTableOptions) => jsPDF;
}

interface PropertyInfo {
  propertyType: string
  propertyValue: number
  yearBuilt: number
  squareFootage: number
  constructionType: string
  roofType: string
  heatingType: string
  location: {
    state: string
    zipCode: string
    riskZone: string
  }
}

interface CoverageOptions {
  dwellingCoverage: number
  personalProperty: number
  liabilityCoverage: number
  medicalPayments: number
  lossOfUse: number
  deductible: number
  additionalCoverages: {
    floodInsurance: boolean
    earthquakeInsurance: boolean
    umbrellaPolicy: boolean
    identityTheft: boolean
    waterBackup: boolean
    ordinanceLaw: boolean
  }
}

interface PersonalFactors {
  creditScore: string
  claimsHistory: number
  securityFeatures: string[]
  occupancy: string
  bundleDiscount: boolean
  loyaltyDiscount: boolean
  ageOfHomeowner: number
}

interface InsuranceQuote {
  carrier: string
  annualPremium: number
  monthlyPremium: number
  coverageDetails: {
    dwelling: number
    personalProperty: number
    liability: number
    medical: number
    lossOfUse: number
    deductible: number
  }
  discounts: string[]
  rating: number
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Insurance Calculator',
    description: 'Calculate property insurance costs and coverage. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyInsuranceCalculatorPage() {
  const [propertyInfo, setPropertyInfo] = useState<PropertyInfo>({
    propertyType: 'single-family',
    propertyValue: 500000,
    yearBuilt: 2000,
    squareFootage: 2000,
    constructionType: 'frame',
    roofType: 'asphalt-shingle',
    heatingType: 'forced-air',
    location: {
      state: 'CA',
      zipCode: '',
      riskZone: 'moderate'
    }
  })

  const [coverageOptions, setCoverageOptions] = useState<CoverageOptions>({
    dwellingCoverage: 300000,
    personalProperty: 150000,
    liabilityCoverage: 300000,
    medicalPayments: 5000,
    lossOfUse: 60000,
    deductible: 1000,
    additionalCoverages: {
      floodInsurance: false,
      earthquakeInsurance: false,
      umbrellaPolicy: false,
      identityTheft: false,
      waterBackup: false,
      ordinanceLaw: false
    }
  })

  const [personalFactors, setPersonalFactors] = useState<PersonalFactors>({
    creditScore: 'excellent',
    claimsHistory: 0,
    securityFeatures: [],
    occupancy: 'owner-occupied',
    bundleDiscount: false,
    loyaltyDiscount: false,
    ageOfHomeowner: 35
  })

  const [quotes, setQuotes] = useState<InsuranceQuote[]>([])
  const [showResults, setShowResults] = useState(false)
  

  const calculateInsurance = () => {
    // Base premium calculation
    let basePremium = propertyInfo.propertyValue * 0.003 // 0.3% of property value

    // Property type adjustments
    const propertyTypeMultipliers = {
      'single-family': 1.0,
      'townhouse': 1.1,
      'condo': 0.8,
      'mobile-home': 1.5,
      'multi-family': 1.3
    }
    basePremium *= propertyTypeMultipliers[propertyInfo.propertyType as keyof typeof propertyTypeMultipliers] || 1.0

    // Age of home adjustment
    const homeAge = new Date().getFullYear() - propertyInfo.yearBuilt
    if (homeAge > 30) basePremium *= 1.2
    else if (homeAge > 15) basePremium *= 1.1

    // Construction type adjustment
    const constructionMultipliers = {
      'frame': 1.0,
      'masonry': 0.9,
      'steel': 0.85,
      'concrete': 0.8
    }
    basePremium *= constructionMultipliers[propertyInfo.constructionType as keyof typeof constructionMultipliers] || 1.0

    // Location risk adjustment
    const riskMultipliers = {
      'low': 0.9,
      'moderate': 1.0,
      'high': 1.3,
      'very-high': 1.6
    }
    basePremium *= riskMultipliers[propertyInfo.location.riskZone as keyof typeof riskMultipliers] || 1.0

    // Coverage adjustments
    const coverageAdjustment = (coverageOptions.dwellingCoverage / propertyInfo.propertyValue) * 0.1
    basePremium += basePremium * coverageAdjustment

    // Deductible adjustment
    const deductibleMultipliers = {
      500: 1.15,
      1000: 1.0,
      2500: 0.9,
      5000: 0.8,
      10000: 0.7
    }
    basePremium *= deductibleMultipliers[coverageOptions.deductible as keyof typeof deductibleMultipliers] || 1.0

    // Personal factors adjustments
    const creditMultipliers = {
      'excellent': 0.85,
      'good': 0.95,
      'fair': 1.05,
      'poor': 1.2
    }
    basePremium *= creditMultipliers[personalFactors.creditScore as keyof typeof creditMultipliers] || 1.0

    // Claims history adjustment
    basePremium *= (1 + personalFactors.claimsHistory * 0.15)

    // Security features discount
    const securityDiscount = personalFactors.securityFeatures.length * 0.02
    basePremium *= (1 - Math.min(securityDiscount, 0.15))

    // Bundle and loyalty discounts
    if (personalFactors.bundleDiscount) basePremium *= 0.9
    if (personalFactors.loyaltyDiscount) basePremium *= 0.95

    // Additional coverages
    let additionalPremium = 0
    if (coverageOptions.additionalCoverages.floodInsurance) additionalPremium += 400
    if (coverageOptions.additionalCoverages.earthquakeInsurance) additionalPremium += 800
    if (coverageOptions.additionalCoverages.umbrellaPolicy) additionalPremium += 300
    if (coverageOptions.additionalCoverages.identityTheft) additionalPremium += 50
    if (coverageOptions.additionalCoverages.waterBackup) additionalPremium += 100
    if (coverageOptions.additionalCoverages.ordinanceLaw) additionalPremium += 150

    const totalPremium = basePremium + additionalPremium

    // Generate sample quotes from different carriers
    const carriers = [
      { name: 'State Farm', multiplier: 0.95, rating: 4.5 },
      { name: 'Allstate', multiplier: 1.02, rating: 4.3 },
      { name: 'GEICO', multiplier: 0.88, rating: 4.4 },
      { name: 'Progressive', multiplier: 0.92, rating: 4.2 },
      { name: 'Liberty Mutual', multiplier: 1.05, rating: 4.1 },
      { name: 'Farmers', multiplier: 0.98, rating: 4.0 }
    ]

    const generatedQuotes: InsuranceQuote[] = carriers.map(carrier => {
      const annualPremium = Math.round(totalPremium * carrier.multiplier)
      return {
        carrier: carrier.name,
        annualPremium,
        monthlyPremium: Math.round(annualPremium / 12),
        coverageDetails: {
          dwelling: coverageOptions.dwellingCoverage,
          personalProperty: coverageOptions.personalProperty,
          liability: coverageOptions.liabilityCoverage,
          medical: coverageOptions.medicalPayments,
          lossOfUse: coverageOptions.lossOfUse,
          deductible: coverageOptions.deductible
        },
        discounts: getApplicableDiscounts(),
        rating: carrier.rating
      }
    }).sort((a, b) => a.annualPremium - b.annualPremium)

    setQuotes(generatedQuotes)
    setShowResults(true)
  }

  const getApplicableDiscounts = (): string[] => {
    const discounts: string[] = []
    if (personalFactors.bundleDiscount) discounts.push('Multi-Policy Discount')
    if (personalFactors.loyaltyDiscount) discounts.push('Loyalty Discount')
    if (personalFactors.securityFeatures.includes('security-system')) discounts.push('Security System Discount')
    if (personalFactors.securityFeatures.includes('smoke-detectors')) discounts.push('Safety Features Discount')
    if (personalFactors.creditScore === 'excellent') discounts.push('Good Credit Discount')
    if (propertyInfo.yearBuilt > 2000) discounts.push('New Home Discount')
    return discounts
  }

  const getCoverageBreakdown = () => {
    if (quotes.length === 0) return []
    
    const bestQuote = quotes[0]
    return [
      { name: 'Dwelling Coverage', value: bestQuote.coverageDetails.dwelling, color: '#3B82F6' },
      { name: 'Personal Property', value: bestQuote.coverageDetails.personalProperty, color: '#10B981' },
      { name: 'Liability Coverage', value: bestQuote.coverageDetails.liability, color: '#F59E0B' },
      { name: 'Medical Payments', value: bestQuote.coverageDetails.medical, color: '#EF4444' },
      { name: 'Loss of Use', value: bestQuote.coverageDetails.lossOfUse, color: '#8B5CF6' }
    ]
  }



  const exportToPDF = () => {
    const doc = new jsPDF() as jsPDFWithAutoTable;
    const tableData = quotes.map(quote => [
      quote.carrier,
      `$${quote.annualPremium}`,
      `$${quote.monthlyPremium}`,
      String(quote.rating)
    ])

    doc.autoTable({
      head: [['Carrier', 'Annual Premium', 'Monthly Premium', 'Rating']],
      body: tableData,
      startY: 20,
      didDrawPage: () => {
        doc.text('Property Insurance Quotes', 14, 15)
      }
    })

    doc.save('insurance-quotes.pdf')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Property Insurance Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate property insurance costs, analyze coverage options, and compare quotes from multiple carriers for informed insurance decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Personal Factors
                </CardTitle>
                <CardDescription>
                  Personal information that affects your insurance rates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="creditScore">Credit Score</Label>
                    <Select value={personalFactors.creditScore} onValueChange={(value) => setPersonalFactors(prev => ({ ...prev, creditScore: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent (750+)</SelectItem>
                        <SelectItem value="good">Good (700-749)</SelectItem>
                        <SelectItem value="fair">Fair (650-699)</SelectItem>
                        <SelectItem value="poor">Poor (Below 650)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="claimsHistory">Claims in Last 5 Years</Label>
                    <Input
                      id="claimsHistory"
                      type="number"
                      min="0"
                      value={personalFactors.claimsHistory}
                      onChange={(e) => setPersonalFactors(prev => ({ ...prev, claimsHistory: Number(e.target.value) }))}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupancy">Occupancy Type</Label>
                    <Select value={personalFactors.occupancy} onValueChange={(value) => setPersonalFactors(prev => ({ ...prev, occupancy: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner-occupied">Owner Occupied</SelectItem>
                        <SelectItem value="rental">Rental Property</SelectItem>
                        <SelectItem value="vacation">Vacation Home</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ageOfHomeowner">Age of Homeowner</Label>
                    <Input
                      id="ageOfHomeowner"
                      type="number"
                      min="18"
                      max="100"
                      value={personalFactors.ageOfHomeowner}
                      onChange={(e) => setPersonalFactors(prev => ({ ...prev, ageOfHomeowner: Number(e.target.value) }))}
                      placeholder="35"
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Security Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['security-system', 'smoke-detectors', 'fire-alarm', 'burglar-alarm', 'deadbolt-locks', 'gated-community'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={personalFactors.securityFeatures.includes(feature)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setPersonalFactors(prev => ({
                                ...prev,
                                securityFeatures: [...prev.securityFeatures, feature]
                              }))
                            } else {
                              setPersonalFactors(prev => ({
                                ...prev,
                                securityFeatures: prev.securityFeatures.filter(f => f !== feature)
                              }))
                            }
                          }}
                        />
                        <Label htmlFor={feature} className="text-sm">
                          {feature.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Discounts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bundleDiscount"
                        checked={personalFactors.bundleDiscount}
                        onCheckedChange={(checked) => setPersonalFactors(prev => ({ ...prev, bundleDiscount: checked as boolean }))}
                      />
                      <Label htmlFor="bundleDiscount" className="text-sm">
                        Multi-Policy Bundle (Auto + Home)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="loyaltyDiscount"
                        checked={personalFactors.loyaltyDiscount}
                        onCheckedChange={(checked) => setPersonalFactors(prev => ({ ...prev, loyaltyDiscount: checked as boolean }))}
                      />
                      <Label htmlFor="loyaltyDiscount" className="text-sm">
                        Customer Loyalty Discount
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Information */}
            <Card>
              <CardHeader>
                    <CardTitle className="flex items-center">
                      <HomeIcon className="h-5 w-5 mr-2" />
                      Property Information
                    </CardTitle>
                <CardDescription>
                  Enter details about your property to calculate insurance costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select name="propertyType" value={propertyInfo.propertyType} onValueChange={(value) => setPropertyInfo(prev => ({ ...prev, propertyType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single-Family Home</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-Family Home</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="propertyValue">Property Value ($)</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={propertyInfo.propertyValue}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyInfo(prev => ({ ...prev, propertyValue: Number(e.target.value) }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input
                      id="yearBuilt"
                      type="number"
                      value={propertyInfo.yearBuilt}
                      onChange={(e) => setPropertyInfo(prev => ({ ...prev, yearBuilt: Number(e.target.value) }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="squareFootage">Square Footage</Label>
                    <Input
                      id="squareFootage"
                      type="number"
                      value={propertyInfo.squareFootage}
                      onChange={(e) => setPropertyInfo(prev => ({ ...prev, squareFootage: Number(e.target.value) }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="constructionType">Construction Type</Label>
                    <Select value={propertyInfo.constructionType} onValueChange={(value) => setPropertyInfo(prev => ({ ...prev, constructionType: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frame">Wood Frame</SelectItem>
                        <SelectItem value="masonry">Masonry</SelectItem>
                        <SelectItem value="steel">Steel Frame</SelectItem>
                        <SelectItem value="concrete">Concrete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="roofType">Roof Type</Label>
                    <Select value={propertyInfo.roofType} onValueChange={(value) => setPropertyInfo(prev => ({ ...prev, roofType: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asphalt-shingle">Asphalt Shingle</SelectItem>
                        <SelectItem value="metal">Metal</SelectItem>
                        <SelectItem value="tile">Tile</SelectItem>
                        <SelectItem value="slate">Slate</SelectItem>
                        <SelectItem value="wood">Wood</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Location & Risk Factors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select value={propertyInfo.location.state} onValueChange={(value) => setPropertyInfo(prev => ({ ...prev, location: { ...prev.location, state: value } }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="PA">Pennsylvania</SelectItem>
                          <SelectItem value="OH">Ohio</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                          <SelectItem value="NC">North Carolina</SelectItem>
                          <SelectItem value="MI">Michigan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={propertyInfo.location.zipCode}
                        onChange={(e) => setPropertyInfo(prev => ({ ...prev, location: { ...prev.location, zipCode: e.target.value } }))}
                        placeholder="90210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="riskZone">Risk Zone</Label>
                      <Select value={propertyInfo.location.riskZone} onValueChange={(value) => setPropertyInfo(prev => ({ ...prev, location: { ...prev.location, riskZone: value } }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Risk</SelectItem>
                          <SelectItem value="moderate">Moderate Risk</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                          <SelectItem value="very-high">Very High Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Coverage Options
                </CardTitle>
                <CardDescription>
                  Customize your insurance coverage amounts and options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dwellingCoverage">Dwelling Coverage ($)</Label>
                    <Input
                      id="dwellingCoverage"
                      type="number"
                      value={coverageOptions.dwellingCoverage}
                      onChange={(e) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, dwellingCoverage: Number(e.target.value) }))}
                      placeholder="300000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="personalProperty">Personal Property ($)</Label>
                    <Input
                      id="personalProperty"
                      type="number"
                      value={coverageOptions.personalProperty}
                      onChange={(e) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, personalProperty: Number(e.target.value) }))}
                      placeholder="150000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="liabilityCoverage">Liability Coverage ($)</Label>
                    <Input
                      id="liabilityCoverage"
                      type="number"
                      value={coverageOptions.liabilityCoverage}
                      onChange={(e) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, liabilityCoverage: Number(e.target.value) }))}
                      placeholder="300000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicalPayments">Medical Payments ($)</Label>
                    <Input
                      id="medicalPayments"
                      type="number"
                      value={coverageOptions.medicalPayments}
                      onChange={(e) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, medicalPayments: Number(e.target.value) }))}
                      placeholder="5000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lossOfUse">Loss of Use ($)</Label>
                    <Input
                      id="lossOfUse"
                      type="number"
                      value={coverageOptions.lossOfUse}
                      onChange={(e) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, lossOfUse: Number(e.target.value) }))}
                      placeholder="60000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deductible">Deductible ($)</Label>
                    <Select value={coverageOptions.deductible.toString()} onValueChange={(value) => setCoverageOptions((prev: CoverageOptions) => ({ ...prev, deductible: Number(value) }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">$500</SelectItem>
                        <SelectItem value="1000">$1,000</SelectItem>
                        <SelectItem value="2500">$2,500</SelectItem>
                        <SelectItem value="5000">$5,000</SelectItem>
                        <SelectItem value="10000">$10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Additional Coverage Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(coverageOptions.additionalCoverages).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={value}
                          onCheckedChange={(checked) => 
                            setCoverageOptions((prev: CoverageOptions) => ({
                              ...prev,
                              additionalCoverages: {
                                ...prev.additionalCoverages,
                                [key]: checked as boolean
                              }
                            }))
                          }
                        />
                        <Label htmlFor={key} className="text-sm">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calculate Button */}
            <Card>
              <CardContent className="pt-6">
                <Button 
                  onClick={calculateInsurance} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  size="lg"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {showResults && quotes.length > 0 && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4">
                  <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100">Best Annual Premium</p>
                          <p className="text-3xl font-bold">${quotes[0]?.annualPremium.toLocaleString()}</p>
                          <p className="text-blue-100">${quotes[0]?.monthlyPremium.toLocaleString()}/month</p>
                        </div>
                        <Shield className="h-12 w-12 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100">Coverage Amount</p>
                          <p className="text-2xl font-bold">${coverageOptions.dwellingCoverage.toLocaleString()}</p>
                          <p className="text-green-100">Dwelling Coverage</p>
                        </div>
                        <Home className="h-12 w-12 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100">Deductible</p>
                          <p className="text-2xl font-bold">${coverageOptions.deductible.toLocaleString()}</p>
                          <p className="text-purple-100">Out of Pocket</p>
                        </div>
                        <DollarSign className="h-12 w-12 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Insurance Quotes Comparison */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Insurance Quotes Comparison
                      </CardTitle>
                      <Button onClick={exportToPDF} size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Export to PDF
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {quotes.slice(0, 5).map((quote, index) => (
                        <div key={quote.carrier} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant={index === 0 ? "default" : "secondary"}>
                              {index === 0 ? "Best" : `#${index + 1}`}
                            </Badge>
                            <div>
                              <h4 className="font-semibold">{quote.carrier}</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">Rating:</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-sm ${i < Math.floor(quote.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">({quote.rating})</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-blue-600">${quote.annualPremium.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">${quote.monthlyPremium.toLocaleString()}/month</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Coverage Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Coverage Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={getCoverageBreakdown()}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: $${Number(value).toLocaleString()}`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {getCoverageBreakdown().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: unknown) => `$${Number(value).toLocaleString()}`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {getCoverageBreakdown().map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Discounts Applied */}
                {quotes[0]?.discounts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckIcon className="h-5 w-5 mr-2 text-green-600" />
                        Discounts Applied
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {quotes[0].discounts.map((discount, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{discount}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <InfoIcon className="h-5 w-5 mr-2" />
                      Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Consider Higher Deductible</p>
                          <p className="text-sm text-gray-600">
                            Increasing your deductible to ${Math.min(coverageOptions.deductible * 2, 10000).toLocaleString()} could save you up to 15% on premiums.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Bundle Policies</p>
                          <p className="text-sm text-gray-600">
                            {personalFactors.bundleDiscount 
                              ? "Great! You're already saving with bundled policies."
                              : "Bundle your auto and home insurance to save up to 25% on both policies."
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Consider Flood or Earthquake Insurance</p>
                          <p className="text-sm text-gray-600">Standard policies don't cover these events. Assess your risk.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {!showResults && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Ready to Calculate</h3>
                  <p className="text-gray-500">
                    Fill in your property details and click "Calculate" to see personalized insurance estimates.
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <p>
                      This is an estimate and not a formal quote. Your actual premium may vary based on underwriting and other factors.
                    </p>
                    <p>
                      It&apos;s recommended to speak with a licensed insurance agent to get a finalized quote.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpenIcon className="h-6 w-6 mr-2" />
                Property Insurance Guide
              </CardTitle>
              <CardDescription>
                Comprehensive guide to understanding property insurance coverage and costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="basics">Insurance Basics</TabsTrigger>
                  <TabsTrigger value="coverage">Coverage Types</TabsTrigger>
                  <TabsTrigger value="factors">Cost Factors</TabsTrigger>
                  <TabsTrigger value="tips">Money-Saving Tips</TabsTrigger>
                  <TabsTrigger value="claims">Claims Process</TabsTrigger>
                </TabsList>

                <TabsContent value="basics" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">What is Property Insurance?</h3>
                      <p className="text-gray-600 mb-4">
                        Property insurance protects your home and belongings from damage caused by covered perils such as fire, theft, vandalism, and certain natural disasters. It also provides liability protection if someone is injured on your property.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Why Do You Need It?</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <span><strong>Financial Protection:</strong> Covers repair or replacement costs for your home and belongings</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <span><strong>Liability Coverage:</strong> Protects against lawsuits if someone is injured on your property</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <span><strong>Mortgage Requirement:</strong> Most lenders require insurance to protect their investment</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <span><strong>Peace of Mind:</strong> Knowing your largest asset is protected against unforeseen events</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Types of Property Insurance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Homeowners Insurance (HO-3)</h4>
                          <p className="text-sm text-gray-600">Most common policy covering dwelling, personal property, and liability</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Condo Insurance (HO-6)</h4>
                          <p className="text-sm text-gray-600">Covers personal property and interior improvements in condominiums</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Renters Insurance (HO-4)</h4>
                          <p className="text-sm text-gray-600">Protects personal belongings and provides liability coverage for renters</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Landlord Insurance</h4>
                          <p className="text-sm text-gray-600">Specialized coverage for rental properties and landlord-specific risks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="coverage" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Standard Coverage Components</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center">
                              <Home className="h-4 w-4 mr-2 text-blue-500" />
                              Dwelling Coverage (Coverage A)
                            </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Covers the physical structure of your home, including walls, roof, floors, and built-in appliances.
                          </p>
                          <p className="text-sm text-blue-600">Typically: 80-100% of home's replacement cost</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-green-500" />
                            Personal Property (Coverage C)
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Covers your belongings like furniture, clothing, electronics, and other personal items.
                          </p>
                          <p className="text-sm text-green-600">Typically: 50-70% of dwelling coverage</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Shield className="h-4 w-4 mr-2 text-purple-500" />
                            Liability Protection (Coverage E)
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Protects you from lawsuits if someone is injured on your property or you damage someone else's property.
                          </p>
                          <p className="text-sm text-purple-600">Recommended: $300,000 - $500,000</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                            Additional Living Expenses (Coverage D)
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Covers temporary housing and living expenses if your home becomes uninhabitable due to a covered loss.
                          </p>
                          <p className="text-sm text-orange-600">Typically: 20% of dwelling coverage</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Optional Coverage Add-ons</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Flood Insurance</h4>
                          <p className="text-sm text-gray-600">Separate policy required for flood damage protection</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Earthquake Insurance</h4>
                          <p className="text-sm text-gray-600">Additional coverage for earthquake-related damage</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Umbrella Policy</h4>
                          <p className="text-sm text-gray-600">Extra liability protection beyond standard limits</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Identity Theft</h4>
                          <p className="text-sm text-gray-600">Coverage for identity theft recovery expenses</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Water Backup</h4>
                          <p className="text-sm text-gray-600">Covers damage from sewer or drain backups</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-1">Ordinance & Law</h4>
                          <p className="text-sm text-gray-600">Covers costs to meet current building codes during repairs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="factors" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Factors That Affect Your Premium</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-red-500" />
                            Location & Risk Factors
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Crime rates in your neighborhood</li>
                            <li>• Natural disaster risk (hurricanes, earthquakes, floods)</li>
                            <li>• Distance to fire station and hydrants</li>
                            <li>• Local building costs and labor rates</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Home className="h-4 w-4 mr-2 text-blue-500" />
                            Property Characteristics
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Age and condition of the home</li>
                            <li>• Construction materials and methods</li>
                            <li>• Square footage and replacement cost</li>
                            <li>• Roof type and condition</li>
                            <li>• Heating and electrical systems</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-green-500" />
                            Personal Factors
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Credit score and financial history</li>
                            <li>• Claims history and frequency</li>
                            <li>• Occupancy type (owner vs. rental)</li>
                            <li>• Security features and safety measures</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <ShieldIcon className="h-4 w-4 mr-2 text-purple-500" />
                            Coverage Choices
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Coverage limits and amounts</li>
                            <li>• Deductible levels</li>
                            <li>• Additional coverage options</li>
                            <li>• Policy type and endorsements</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Understanding Replacement Cost vs. Actual Cash Value</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg bg-green-50">
                          <h4 className="font-medium mb-2 text-green-800">Replacement Cost</h4>
                          <p className="text-sm text-green-700 mb-2">
                            Pays to replace or repair damaged property with new items of similar quality, without deducting for depreciation.
                          </p>
                          <p className="text-sm font-medium text-green-800">Recommended for most homeowners</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-yellow-50">
                          <h4 className="font-medium mb-2 text-yellow-800">Actual Cash Value</h4>
                          <p className="text-sm text-yellow-700 mb-2">
                            Pays replacement cost minus depreciation. Lower premiums but potentially higher out-of-pocket costs.
                          </p>
                          <p className="text-sm font-medium text-yellow-800">Consider for older homes or tight budgets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Ways to Save on Property Insurance</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg bg-blue-50">
                          <h4 className="font-medium mb-2 flex items-center text-blue-800">
                            <DollarSignIcon className="h-4 w-4 mr-2" />
                            Increase Your Deductible
                          </h4>
                          <p className="text-sm text-blue-700 mb-2">
                            Raising your deductible from $500 to $1,000 can save 10-15% on premiums. Consider what you can afford to pay out-of-pocket.
                          </p>
                          <p className="text-sm font-medium text-blue-800">Potential savings: 10-25%</p>
                        </div>

                        <div className="p-4 border rounded-lg bg-green-50">
                          <h4 className="font-medium mb-2 flex items-center text-green-800">
                            <CarIcon className="h-4 w-4 mr-2" />
                            Bundle Your Policies
                          </h4>
                          <p className="text-sm text-green-700 mb-2">
                            Combine your home and auto insurance with the same company for significant discounts on both policies.
                          </p>
                          <p className="text-sm font-medium text-green-800">Potential savings: 15-25%</p>
                        </div>

                        <div className="p-4 border rounded-lg bg-purple-50">
                          <h4 className="font-medium mb-2 flex items-center text-purple-800">
                            <ShieldIcon className="h-4 w-4 mr-2" />
                            Install Security Features
                          </h4>
                          <p className="text-sm text-purple-700 mb-2">
                            Security systems, smoke detectors, and deadbolt locks can qualify you for safety discounts.
                          </p>
                          <p className="text-sm font-medium text-purple-800">Potential savings: 5-20%</p>
                        </div>

                        <div className="p-4 border rounded-lg bg-orange-50">
                          <h4 className="font-medium mb-2 flex items-center text-orange-800">
                            <TrendingUpIcon className="h-4 w-4 mr-2" />
                            Maintain Good Credit
                          </h4>
                          <p className="text-sm text-orange-700 mb-2">
                            Insurance companies use credit scores to determine rates. Maintain good credit for better premiums.
                          </p>
                          <p className="text-sm font-medium text-orange-800">Potential savings: 10-30%</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Additional Money-Saving Strategies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Shop Around Annually</p>
                              <p className="text-sm text-gray-600">Compare quotes from multiple insurers each year</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Stay Claims-Free</p>
                              <p className="text-sm text-gray-600">Avoid small claims and maintain a clean record</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Group Discounts</p>
                              <p className="text-sm text-gray-600">Check for employer, alumni, or professional discounts</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Home Improvements</p>
                              <p className="text-sm text-gray-600">Upgrade roof, plumbing, or electrical for discounts</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Loyalty Discounts</p>
                              <p className="text-sm text-gray-600">Stay with the same insurer for long-term customer discounts</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Review Coverage</p>
                              <p className="text-sm text-gray-600">Adjust coverage limits based on current needs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
                      <div className="flex items-start space-x-2">
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-800">Important Note</p>
                          <p className="text-sm text-yellow-700">
                            While saving money is important, don't sacrifice necessary coverage. Ensure you have adequate protection for your property and assets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="claims" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">How to File an Insurance Claim</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Ensure Safety First</h4>
                            <p className="text-sm text-gray-600">
                              Make sure everyone is safe and secure the property to prevent further damage. Call emergency services if needed.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Document the Damage</h4>
                            <p className="text-sm text-gray-600">
                              Take photos and videos of all damage before cleaning up. Create a detailed inventory of damaged items.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Contact Your Insurance Company</h4>
                            <p className="text-sm text-gray-600">
                              Report the claim as soon as possible. Have your policy number and details about the incident ready.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Meet with the Adjuster</h4>
                            <p className="text-sm text-gray-600">
                              An insurance adjuster will inspect the damage and estimate repair costs. Be present during the inspection.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">5</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Review the Settlement</h4>
                            <p className="text-sm text-gray-600">
                              Review the adjuster's report and settlement offer. You can negotiate if you disagree with the assessment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">What to Expect During the Claims Process</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Timeline</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Initial contact: Within 24-48 hours</li>
                            <li>• Adjuster visit: 3-7 days</li>
                            <li>• Settlement offer: 1-2 weeks</li>
                            <li>• Payment: 5-10 business days after acceptance</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Required Documentation</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Photos and videos of damage</li>
                            <li>• Police reports (if applicable)</li>
                            <li>• Receipts for damaged items</li>
                            <li>• Repair estimates from contractors</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tips for a Successful Claim</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Keep Detailed Records</p>
                            <p className="text-sm text-gray-600">Maintain a file with all claim-related documents, photos, and correspondence</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Be Honest and Accurate</p>
                            <p className="text-sm text-gray-600">Provide truthful information about the incident and damage</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Get Multiple Estimates</p>
                            <p className="text-sm text-gray-600">Obtain repair estimates from licensed contractors to support your claim</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Understand Your Policy</p>
                            <p className="text-sm text-gray-600">Know what's covered, your deductible, and any policy limits</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-l-4 border-red-400 bg-red-50">
                      <div className="flex items-start space-x-2">
                        <AlertTriangleIcon className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-red-800">Common Claim Mistakes to Avoid</p>
                          <ul className="text-sm text-red-700 mt-2 space-y-1">
                            <li>• Delaying the claim report</li>
                            <li>• Not documenting damage thoroughly</li>
                            <li>• Making permanent repairs before adjuster visit</li>
                            <li>• Accepting the first settlement offer without review</li>
                            <li>• Not understanding policy coverage limits</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}