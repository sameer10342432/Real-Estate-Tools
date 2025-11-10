'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
 
import { CheckCircle, XCircle, AlertTriangle, Users, FileText, DollarSign, Shield, Scale } from 'lucide-react'

interface TenantApplication {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    ssn: string
    emergencyContact: string
  }
  employment: {
    employer: string
    position: string
    monthlyIncome: number
    employmentLength: string
    employmentType: string
    supervisorContact: string
  }
  financial: {
    creditScore: number
    bankBalance: number
    monthlyDebts: number
    bankruptcyHistory: boolean
    evictionHistory: boolean
  }
  rental: {
    currentAddress: string
    currentLandlord: string
    currentRent: number
    moveInDate: string
    reasonForMoving: string
    rentalHistory: string
  }
  references: {
    personalReferences: string[]
    professionalReferences: string[]
    previousLandlords: string[]
  }
  background: {
    criminalHistory: boolean
    criminalDetails: string
    petOwnership: boolean
    petDetails: string
    smokingStatus: boolean
    vehicleInfo: string
  }
}

interface ScreeningCriteria {
  creditScore: { minimum: number, weight: number }
  incomeRatio: { minimum: number, weight: number }
  employmentLength: { minimum: number, weight: number }
  rentalHistory: { weight: number }
  references: { weight: number }
  background: { weight: number }
}

interface ScreeningResult {
  overallScore: number
  recommendation: 'approve' | 'conditional' | 'deny'
  criteriaResults: {
    creditScore: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
    income: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
    employment: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
    rentalHistory: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
    references: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
    background: { score: number, status: 'pass' | 'warning' | 'fail', notes: string }
  }
  redFlags: string[]
  strengths: string[]
  conditions: string[]
  nextSteps: string[]
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tenant Screening Checklist Calculator',
    description: 'Comprehensive tenant screening and evaluation tool. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function TenantScreeningChecklist() {
  // Property Information
  const [monthlyRent, setMonthlyRent] = useState<number>(1500)
  const [propertyType, setPropertyType] = useState<string>('apartment')
  const [petPolicy, setPetPolicy] = useState<string>('no-pets')
  const [smokingPolicy, setSmokingPolicy] = useState<string>('no-smoking')
  
  // Screening Criteria
  const [criteria, setCriteria] = useState<ScreeningCriteria>({
    creditScore: { minimum: 650, weight: 25 },
    incomeRatio: { minimum: 3, weight: 30 },
    employmentLength: { minimum: 6, weight: 15 },
    rentalHistory: { weight: 15 },
    references: { weight: 10 },
    background: { weight: 5 }
  })
  
  // Tenant Application
  const [application, setApplication] = useState<TenantApplication>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      ssn: '',
      emergencyContact: ''
    },
    employment: {
      employer: '',
      position: '',
      monthlyIncome: 0,
      employmentLength: '',
      employmentType: '',
      supervisorContact: ''
    },
    financial: {
      creditScore: 0,
      bankBalance: 0,
      monthlyDebts: 0,
      bankruptcyHistory: false,
      evictionHistory: false
    },
    rental: {
      currentAddress: '',
      currentLandlord: '',
      currentRent: 0,
      moveInDate: '',
      reasonForMoving: '',
      rentalHistory: ''
    },
    references: {
      personalReferences: ['', '', ''],
      professionalReferences: ['', ''],
      previousLandlords: ['', '']
    },
    background: {
      criminalHistory: false,
      criminalDetails: '',
      petOwnership: false,
      petDetails: '',
      smokingStatus: false,
      vehicleInfo: ''
    }
  })
  
  // Results
  const [results, setResults] = useState<ScreeningResult | null>(null)
   

  const evaluateApplication = () => {
    const criteriaResults = {
      creditScore: evaluateCreditScore(),
      income: evaluateIncome(),
      employment: evaluateEmployment(),
      rentalHistory: evaluateRentalHistory(),
      references: evaluateReferences(),
      background: evaluateBackground()
    }
    
    // Calculate overall score
    const overallScore = Object.entries(criteriaResults).reduce((total, [key, result]) => {
      const weight = key === 'creditScore' ? criteria.creditScore.weight :
                   key === 'income' ? criteria.incomeRatio.weight :
                   key === 'employment' ? criteria.employmentLength.weight :
                   key === 'rentalHistory' ? criteria.rentalHistory.weight :
                   key === 'references' ? criteria.references.weight :
                   criteria.background.weight
      return total + (result.score * weight / 100)
    }, 0)
    
    // Determine recommendation
    let recommendation: 'approve' | 'conditional' | 'deny'
    if (overallScore >= 80) recommendation = 'approve'
    else if (overallScore >= 60) recommendation = 'conditional'
    else recommendation = 'deny'
    
    // Identify red flags
    const redFlags: string[] = []
    if (application.financial.evictionHistory) redFlags.push('Previous eviction history')
    if (application.financial.bankruptcyHistory) redFlags.push('Bankruptcy history')
    if (application.background.criminalHistory) redFlags.push('Criminal background')
    if (application.financial.creditScore < 500) redFlags.push('Very poor credit score')
    if (application.employment.monthlyIncome * 3 < monthlyRent) redFlags.push('Insufficient income')
    
    // Identify strengths
    const strengths: string[] = []
    if (application.financial.creditScore >= 750) strengths.push('Excellent credit score')
    if (application.employment.monthlyIncome >= monthlyRent * 4) strengths.push('Strong income')
    if (application.employment.employmentLength === '2+ years') strengths.push('Stable employment')
    if (application.financial.bankBalance >= monthlyRent * 3) strengths.push('Good savings')
    
    // Determine conditions
    const conditions: string[] = []
    if (overallScore >= 60 && overallScore < 80) {
      if (application.financial.creditScore < criteria.creditScore.minimum) {
        conditions.push('Require co-signer or additional security deposit')
      }
      if (application.employment.monthlyIncome * 3 < monthlyRent) {
        conditions.push('Require proof of additional income or assets')
      }
    }
    
    // Next steps
    const nextSteps: string[] = []
    nextSteps.push('Verify employment and income documentation')
    nextSteps.push('Contact previous landlords for references')
    nextSteps.push('Run comprehensive background and credit check')
    if (application.references.personalReferences.some(ref => ref)) {
      nextSteps.push('Contact personal and professional references')
    }
    
    const screeningResult: ScreeningResult = {
      overallScore,
      recommendation,
      criteriaResults,
      redFlags,
      strengths,
      conditions,
      nextSteps
    }
    
    setResults(screeningResult)
  }
  
  const evaluateCreditScore = () => {
    const score = application.financial.creditScore
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    if (score >= 750) {
      status = 'pass'
      notes = 'Excellent credit score'
      points = 100
    } else if (score >= criteria.creditScore.minimum) {
      status = 'pass'
      notes = 'Good credit score meets requirements'
      points = 85
    } else if (score >= 600) {
      status = 'warning'
      notes = 'Below preferred credit score'
      points = 60
    } else if (score >= 500) {
      status = 'warning'
      notes = 'Poor credit score, consider conditions'
      points = 40
    } else {
      status = 'fail'
      notes = 'Very poor credit score'
      points = 20
    }
    
    return { score: points, status, notes }
  }
  
  const evaluateIncome = () => {
    const incomeRatio = application.employment.monthlyIncome / monthlyRent
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    if (incomeRatio >= 4) {
      status = 'pass'
      notes = 'Excellent income-to-rent ratio'
      points = 100
    } else if (incomeRatio >= criteria.incomeRatio.minimum) {
      status = 'pass'
      notes = 'Good income meets requirements'
      points = 85
    } else if (incomeRatio >= 2.5) {
      status = 'warning'
      notes = 'Income slightly below preferred ratio'
      points = 60
    } else {
      status = 'fail'
      notes = 'Insufficient income for rent amount'
      points = 30
    }
    
    return { score: points, status, notes }
  }
  
  const evaluateEmployment = () => {
    const employment = application.employment
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    if (employment.employmentType === 'full-time' && employment.employmentLength === '2+ years') {
      status = 'pass'
      notes = 'Stable full-time employment'
      points = 100
    } else if (employment.employmentType === 'full-time' && employment.employmentLength === '1-2 years') {
      status = 'pass'
      notes = 'Good employment stability'
      points = 85
    } else if (employment.employmentType === 'full-time' && employment.employmentLength === '6-12 months') {
      status = 'warning'
      notes = 'Recent employment, verify stability'
      points = 70
    } else if (employment.employmentType === 'part-time' || employment.employmentType === 'contract') {
      status = 'warning'
      notes = 'Non-traditional employment, verify income stability'
      points = 60
    } else {
      status = 'fail'
      notes = 'Insufficient employment history'
      points = 40
    }
    
    return { score: points, status, notes }
  }
  
  const evaluateRentalHistory = () => {
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    if (application.financial.evictionHistory) {
      status = 'fail'
      notes = 'Previous eviction history'
      points = 20
    } else if (application.rental.rentalHistory === 'excellent') {
      status = 'pass'
      notes = 'Excellent rental history'
      points = 100
    } else if (application.rental.rentalHistory === 'good') {
      status = 'pass'
      notes = 'Good rental history'
      points = 85
    } else if (application.rental.rentalHistory === 'fair') {
      status = 'warning'
      notes = 'Fair rental history, verify details'
      points = 60
    } else {
      status = 'warning'
      notes = 'Limited rental history'
      points = 50
    }
    
    return { score: points, status, notes }
  }
  
  const evaluateReferences = () => {
    const personalRefs = application.references.personalReferences.filter(ref => ref.trim()).length
    const professionalRefs = application.references.professionalReferences.filter(ref => ref.trim()).length
    const landlordRefs = application.references.previousLandlords.filter(ref => ref.trim()).length
    
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    const totalRefs = personalRefs + professionalRefs + landlordRefs
    
    if (totalRefs >= 5 && landlordRefs >= 2) {
      status = 'pass'
      notes = 'Comprehensive references provided'
      points = 100
    } else if (totalRefs >= 3 && landlordRefs >= 1) {
      status = 'pass'
      notes = 'Adequate references provided'
      points = 85
    } else if (totalRefs >= 2) {
      status = 'warning'
      notes = 'Limited references, verify quality'
      points = 60
    } else {
      status = 'fail'
      notes = 'Insufficient references'
      points = 30
    }
    
    return { score: points, status, notes }
  }
  
  const evaluateBackground = () => {
    let status: 'pass' | 'warning' | 'fail'
    let notes: string
    let points: number
    
    if (application.background.criminalHistory) {
      status = 'warning'
      notes = 'Criminal history requires review'
      points = 50
    } else if (application.background.petOwnership && petPolicy === 'no-pets') {
      status = 'warning'
      notes = 'Pet ownership conflicts with property policy'
      points = 70
    } else if (application.background.smokingStatus && smokingPolicy === 'no-smoking') {
      status = 'warning'
      notes = 'Smoking conflicts with property policy'
      points = 70
    } else {
      status = 'pass'
      notes = 'Clean background check'
      points = 100
    }
    
    return { score: points, status, notes }
  }

  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-600" />
    }
  }

  const getStatusColor = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return 'text-green-600'
      case 'warning':
        return 'text-yellow-600'
      case 'fail':
        return 'text-red-600'
    }
  }

  const getRecommendationBadge = (recommendation: 'approve' | 'conditional' | 'deny') => {
    switch (recommendation) {
      case 'approve':
        return <Badge className="bg-green-100 text-green-800">Approve</Badge>
      case 'conditional':
        return <Badge className="bg-yellow-100 text-yellow-800">Conditional Approval</Badge>
      case 'deny':
        return <Badge className="bg-red-100 text-red-800">Deny</Badge>
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Users className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Tenant Screening Checklist</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tenant screening tool with qualification criteria, background verification, and professional evaluation guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Screening Setup
                </CardTitle>
                <CardDescription>
                  Configure property details and screening criteria
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="criteria">Criteria</TabsTrigger>
                    <TabsTrigger value="application">Application</TabsTrigger>
                    <TabsTrigger value="verification">Verify</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="property" className="space-y-4">
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(Number(e.target.value))}
                        placeholder="1500"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">Single Family House</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="petPolicy">Pet Policy</Label>
                      <Select value={petPolicy} onValueChange={setPetPolicy}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-pets">No Pets</SelectItem>
                          <SelectItem value="cats-only">Cats Only</SelectItem>
                          <SelectItem value="dogs-only">Dogs Only</SelectItem>
                          <SelectItem value="pets-allowed">Pets Allowed</SelectItem>
                          <SelectItem value="case-by-case">Case by Case</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="smokingPolicy">Smoking Policy</Label>
                      <Select value={smokingPolicy} onValueChange={setSmokingPolicy}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-smoking">No Smoking</SelectItem>
                          <SelectItem value="outdoor-only">Outdoor Only</SelectItem>
                          <SelectItem value="smoking-allowed">Smoking Allowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="criteria" className="space-y-4">
                    <div>
                      <Label>Minimum Credit Score: {criteria.creditScore.minimum}</Label>
                      <Input
                        type="range"
                        min="500"
                        max="800"
                        value={criteria.creditScore.minimum}
                        onChange={(e) => setCriteria(prev => ({
                          ...prev,
                          creditScore: { ...prev.creditScore, minimum: Number(e.target.value) }
                        }))}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label>Income-to-Rent Ratio: {criteria.incomeRatio.minimum}x</Label>
                      <Input
                        type="range"
                        min="2"
                        max="5"
                        step="0.5"
                        value={criteria.incomeRatio.minimum}
                        onChange={(e) => setCriteria(prev => ({
                          ...prev,
                          incomeRatio: { ...prev.incomeRatio, minimum: Number(e.target.value) }
                        }))}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label>Minimum Employment (months): {criteria.employmentLength.minimum}</Label>
                      <Input
                        type="range"
                        min="3"
                        max="24"
                        value={criteria.employmentLength.minimum}
                        onChange={(e) => setCriteria(prev => ({
                          ...prev,
                          employmentLength: { ...prev.employmentLength, minimum: Number(e.target.value) }
                        }))}
                        className="mt-2"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p><strong>Scoring Weights:</strong></p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Credit Score: {criteria.creditScore.weight}%</li>
                        <li>Income Ratio: {criteria.incomeRatio.weight}%</li>
                        <li>Employment: {criteria.employmentLength.weight}%</li>
                        <li>Rental History: {criteria.rentalHistory.weight}%</li>
                        <li>References: {criteria.references.weight}%</li>
                        <li>Background: {criteria.background.weight}%</li>
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="application" className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={application.personalInfo.firstName}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, firstName: e.target.value }
                          }))}
                          placeholder="John"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={application.personalInfo.lastName}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, lastName: e.target.value }
                          }))}
                          placeholder="Doe"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="monthlyIncome">Monthly Income</Label>
                        <Input
                          id="monthlyIncome"
                          type="number"
                          value={application.employment.monthlyIncome}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            employment: { ...prev.employment, monthlyIncome: Number(e.target.value) }
                          }))}
                          placeholder="5000"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="creditScore">Credit Score</Label>
                        <Input
                          id="creditScore"
                          type="number"
                          value={application.financial.creditScore}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            financial: { ...prev.financial, creditScore: Number(e.target.value) }
                          }))}
                          placeholder="720"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="employmentLength">Employment Length</Label>
                        <Select 
                          value={application.employment.employmentLength} 
                          onValueChange={(value) => setApplication(prev => ({
                            ...prev,
                            employment: { ...prev.employment, employmentLength: value }
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-3 months">0-3 months</SelectItem>
                            <SelectItem value="3-6 months">3-6 months</SelectItem>
                            <SelectItem value="6-12 months">6-12 months</SelectItem>
                            <SelectItem value="1-2 years">1-2 years</SelectItem>
                            <SelectItem value="2+ years">2+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="employmentType">Employment Type</Label>
                        <Select 
                          value={application.employment.employmentType} 
                          onValueChange={(value) => setApplication(prev => ({
                            ...prev,
                            employment: { ...prev.employment, employmentType: value }
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="self-employed">Self-employed</SelectItem>
                            <SelectItem value="retired">Retired</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="verification" className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="rentalHistory">Rental History</Label>
                        <Select 
                          value={application.rental.rentalHistory} 
                          onValueChange={(value) => setApplication(prev => ({
                            ...prev,
                            rental: { ...prev.rental, rentalHistory: value }
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                            <SelectItem value="none">No History</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="evictionHistory"
                          checked={application.financial.evictionHistory}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            financial: { ...prev.financial, evictionHistory: e.target.checked }
                          }))}
                          className="rounded"
                        />
                        <Label htmlFor="evictionHistory">Previous Eviction</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="bankruptcyHistory"
                          checked={application.financial.bankruptcyHistory}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            financial: { ...prev.financial, bankruptcyHistory: e.target.checked }
                          }))}
                          className="rounded"
                        />
                        <Label htmlFor="bankruptcyHistory">Bankruptcy History</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="criminalHistory"
                          checked={application.background.criminalHistory}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            background: { ...prev.background, criminalHistory: e.target.checked }
                          }))}
                          className="rounded"
                        />
                        <Label htmlFor="criminalHistory">Criminal History</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="petOwnership"
                          checked={application.background.petOwnership}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            background: { ...prev.background, petOwnership: e.target.checked }
                          }))}
                          className="rounded"
                        />
                        <Label htmlFor="petOwnership">Pet Owner</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="smokingStatus"
                          checked={application.background.smokingStatus}
                          onChange={(e) => setApplication(prev => ({
                            ...prev,
                            background: { ...prev.background, smokingStatus: e.target.checked }
                          }))}
                          className="rounded"
                        />
                        <Label htmlFor="smokingStatus">Smoker</Label>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button onClick={evaluateApplication} className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Evaluate Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {results && (
              <div className="space-y-6">
                {/* Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Screening Results
                      </span>
                      {getRecommendationBadge(results.recommendation)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{results.overallScore.toFixed(0)}</div>
                        <div className="text-sm text-blue-700">Overall Score</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{results.strengths.length}</div>
                        <div className="text-sm text-green-700">Strengths</div>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{results.redFlags.length}</div>
                        <div className="text-sm text-red-700">Red Flags</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Applicant Strengths</h4>
                        {results.strengths.length > 0 ? (
                          <ul className="space-y-1">
                            {results.strengths.map((strength, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">No notable strengths identified</p>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Red Flags</h4>
                        {results.redFlags.length > 0 ? (
                          <ul className="space-y-1">
                            {results.redFlags.map((flag, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <XCircle className="h-4 w-4 text-red-600 mr-2" />
                                {flag}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">No red flags identified</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Criteria Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="h-5 w-5 mr-2" />
                      Criteria Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(results.criteriaResults).map(([key, result]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(result.status)}
                            <div>
                              <div className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                              <div className="text-sm text-gray-600">{result.notes}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-semibold ${getStatusColor(result.status)}`}>
                              {result.score}/100
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Conditions & Next Steps */}
                {(results.conditions.length > 0 || results.nextSteps.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.conditions.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2" />
                            Approval Conditions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {results.conditions.map((condition, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5" />
                                {condition}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Next Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {results.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Financial Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Financial Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-blue-700">Monthly Income</div>
                        <div className="text-xl font-semibold text-blue-600">
                          {formatCurrency(application.employment.monthlyIncome)}
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-700">Monthly Rent</div>
                        <div className="text-xl font-semibold text-green-600">
                          {formatCurrency(monthlyRent)}
                        </div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="text-sm text-purple-700">Income Ratio</div>
                        <div className="text-xl font-semibold text-purple-600">
                          {(application.employment.monthlyIncome / monthlyRent).toFixed(1)}x
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
              <CardTitle className="text-2xl">Tenant Screening: Complete Landlord Guide</CardTitle>
              <CardDescription>
                Professional tenant screening best practices, legal compliance, and risk management strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Screening Process Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Effective tenant screening protects your investment by identifying qualified, reliable tenants who will pay rent on time, care for your property, and comply with lease terms.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Essential Screening Steps</h4>
                  <ol className="list-decimal pl-6 space-y-1 text-gray-600">
                    <li><strong>Application Review:</strong> Complete rental application with personal and financial information</li>
                    <li><strong>Credit Check:</strong> Credit score, payment history, and debt analysis</li>
                    <li><strong>Income Verification:</strong> Pay stubs, employment verification, bank statements</li>
                    <li><strong>Background Check:</strong> Criminal history, eviction records, sex offender registry</li>
                    <li><strong>Reference Verification:</strong> Previous landlords, employers, personal references</li>
                    <li><strong>Final Decision:</strong> Objective evaluation based on predetermined criteria</li>
                  </ol>
                  
                  <h4 className="text-lg font-semibold mb-2 mt-4">Key Qualification Criteria</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><strong>Income:</strong> 3x monthly rent minimum (some markets require 2.5-4x)</li>
                    <li><strong>Credit Score:</strong> 650+ preferred, 600+ acceptable with conditions</li>
                    <li><strong>Employment:</strong> Stable employment history (6+ months current job)</li>
                    <li><strong>Rental History:</strong> Positive references from previous landlords</li>
                    <li><strong>Background:</strong> No recent evictions, serious criminal convictions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Legal Compliance & Fair Housing</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Protected Classes</h4>
                  <p className="text-gray-600 mb-4">
                    Federal Fair Housing Act prohibits discrimination based on race, color, religion, sex, national origin, familial status, and disability. Many states and localities add additional protected classes.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Screening Best Practices</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Apply consistent criteria to all applicants</li>
                    <li>Document all screening decisions and rationale</li>
                    <li>Use objective, business-related criteria only</li>
                    <li>Provide adverse action notices when required</li>
                    <li>Follow state and local screening regulations</li>
                    <li>Obtain written consent for background checks</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2 mt-4">Criminal History Considerations</h4>
                  <p className="text-gray-600 mb-2">
                    Many jurisdictions have &quot;ban the box&quot; laws limiting criminal history inquiries. Consider:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Nature and severity of criminal activity</li>
                    <li>Time elapsed since conviction</li>
                    <li>Evidence of rehabilitation</li>
                    <li>Relationship to tenancy and property safety</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-6">Income & Employment Verification</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Required Documentation</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Recent pay stubs (2-3 months)</li>
                    <li>Employment verification letter</li>
                    <li>Bank statements (2-3 months)</li>
                    <li>Tax returns (self-employed applicants)</li>
                    <li>Offer letter (new employment)</li>
                    <li>Social Security/disability award letters</li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Screening Strategies</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Red Flags to Watch</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Incomplete or inconsistent application</li>
                      <li>Reluctance to provide references</li>
                      <li>Recent evictions or judgments</li>
                      <li>Insufficient income documentation</li>
                      <li>Poor communication or unprofessional behavior</li>
                      <li>Pressure to skip screening steps</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Reference Verification</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Contact previous landlords directly</li>
                      <li>Ask about payment history and property care</li>
                      <li>Verify employment with HR department</li>
                      <li>Check personal references for character</li>
                      <li>Be wary of fake references</li>
                      <li>Document all reference conversations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Special Situations</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Students: Require co-signers or guarantors</li>
                      <li>Self-employed: Additional income documentation</li>
                      <li>New graduates: Employment offer letters</li>
                      <li>International applicants: ITIN, visa status</li>
                      <li>Seniors: Fixed income considerations</li>
                      <li>Military: Deployment and PCS orders</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-blue-800">Screening Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-2">Before Showing Property</h5>
                    <ul className="list-disc pl-6 space-y-1 text-blue-600 text-sm">
                      <li>Pre-qualify income and credit requirements</li>
                      <li>Explain screening criteria and process</li>
                      <li>Provide rental application and disclosures</li>
                      <li>Collect application fee (where permitted)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-2">After Application Received</h5>
                    <ul className="list-disc pl-6 space-y-1 text-blue-600 text-sm">
                      <li>Review application for completeness</li>
                      <li>Run credit and background checks</li>
                      <li>Verify income and employment</li>
                      <li>Contact references and previous landlords</li>
                      <li>Make decision within reasonable timeframe</li>
                      <li>Provide written notice of decision</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}