'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Shield, MapPin, AlertTriangle, CheckCircle, Phone, Users, TrendingUp, TrendingDown, Minus, Info, Star, Lightbulb } from 'lucide-react'

interface SafetyMetrics {
  overallScore: number
  crimeScore: number
  emergencyScore: number
  infrastructureScore: number
  communityScore: number
  riskLevel: 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High'
  recommendation: string
  strengths: string[]
  concerns: string[]
  improvements: string[]
}

interface CrimeData {
  violentCrime: number
  propertyCrime: number
  drugOffenses: number
  trafficViolations: number
  publicOrder: number
  trend: 'increasing' | 'decreasing' | 'stable'
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Neighborhood Safety Score Calculator',
    description: 'Analyze neighborhood safety and crime statistics. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function NeighborhoodSafetyScore() {
  // Location Input
  const [address, setAddress] = useState<string>('123 Collins Street, Melbourne VIC 3000')
  const [suburb, setSuburb] = useState<string>('Melbourne')
  const [state, setState] = useState<string>('VIC')
  const [postcode, setPostcode] = useState<string>('3000')
  
  // Crime Data Inputs
  const [violentCrimeRate, setViolentCrimeRate] = useState<number>(2.1)
  const [propertyCrimeRate, setPropertyCrimeRate] = useState<number>(15.3)
  const [drugOffenseRate, setDrugOffenseRate] = useState<number>(3.8)
  const [trafficViolationRate] = useState<number>(8.2)
  const [publicOrderRate] = useState<number>(5.4)
  const [crimeTrend, setCrimeTrend] = useState<string>('decreasing')
  
  // Emergency Services
  const [policeStationDistance, setPoliceStationDistance] = useState<number>(1.2)
  const [fireStationDistance, setFireStationDistance] = useState<number>(2.1)
  const [hospitalDistance, setHospitalDistance] = useState<number>(3.5)
  const [emergencyResponseTime, setEmergencyResponseTime] = useState<number>(8)
  
  // Infrastructure & Environment
  const [streetLightingQuality, setStreetLightingQuality] = useState<number>(8)
  const [cctvCoverage, setCctvCoverage] = useState<number>(6)
  const [pedestrianSafety] = useState<number>(7)
  const [trafficSafety] = useState<number>(7)
  const [publicTransportSafety] = useState<number>(6)
  
  // Community Factors
  const [neighborhoodWatch, setNeighborhoodWatch] = useState<boolean>(true)
  const [communityEngagement, setCommunityEngagement] = useState<number>(7)
  const [socialCohesion] = useState<number>(8)
  const [youthPrograms] = useState<number>(6)
  const [businessActivity] = useState<number>(8)
  
  // Additional Factors
  const [schoolSafety] = useState<number>(8)
  const [parkSafety] = useState<number>(7)
  const [nightlifeSafety] = useState<number>(5)
  const [homelessnessLevel] = useState<number>(3)

  const [safetyMetrics, setSafetyMetrics] = useState<SafetyMetrics | null>(null)
  const [crimeData, setCrimeData] = useState<CrimeData | null>(null)
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  const calculateSafetyScore = useCallback(() => {
    setIsCalculating(true)
    
    setTimeout(() => {
      // Crime Score (40% weight)
      const crimeScore = Math.max(0, Math.min(100, 
        100 - (violentCrimeRate * 8 + propertyCrimeRate * 2 + drugOffenseRate * 4 + 
               trafficViolationRate * 1.5 + publicOrderRate * 2)
      ))
      
      // Emergency Services Score (25% weight)
      const emergencyScore = Math.max(0, Math.min(100,
        (Math.max(0, 100 - policeStationDistance * 15) +
         Math.max(0, 100 - fireStationDistance * 10) +
         Math.max(0, 100 - hospitalDistance * 8) +
         Math.max(0, 100 - emergencyResponseTime * 5)) / 4
      ))
      
      // Infrastructure Score (20% weight)
      const infrastructureScore = Math.max(0, Math.min(100,
        (streetLightingQuality * 10 + cctvCoverage * 10 + pedestrianSafety * 10 + 
         trafficSafety * 10 + publicTransportSafety * 10) / 5
      ))
      
      // Community Score (15% weight)
      const communityScore = Math.max(0, Math.min(100,
        (communityEngagement * 10 + socialCohesion * 10 + youthPrograms * 10 + 
         businessActivity * 10 + (neighborhoodWatch ? 80 : 40) +
         schoolSafety * 10 + parkSafety * 10 + nightlifeSafety * 10 - 
         homelessnessLevel * 8) / 8
      ))
      
      // Overall Score
      const overallScore = Math.round(
        crimeScore * 0.4 + emergencyScore * 0.25 + infrastructureScore * 0.2 + communityScore * 0.15
      )
      
      // Risk Level
      let riskLevel: 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High'
      if (overallScore >= 85) riskLevel = 'Very Low'
      else if (overallScore >= 70) riskLevel = 'Low'
      else if (overallScore >= 55) riskLevel = 'Moderate'
      else if (overallScore >= 40) riskLevel = 'High'
      else riskLevel = 'Very High'
      
      // Recommendations and Analysis
      const strengths: string[] = []
      const concerns: string[] = []
      const improvements: string[] = []
      
      if (crimeScore >= 80) strengths.push('Low crime rates across all categories')
      else if (crimeScore < 60) concerns.push('Higher than average crime rates')
      
      if (emergencyScore >= 80) strengths.push('Excellent emergency service access')
      else if (emergencyScore < 60) concerns.push('Limited emergency service coverage')
      
      if (infrastructureScore >= 80) strengths.push('Well-maintained safety infrastructure')
      else if (infrastructureScore < 60) improvements.push('Improve street lighting and CCTV coverage')
      
      if (communityScore >= 80) strengths.push('Strong community engagement and cohesion')
      else if (communityScore < 60) improvements.push('Enhance community programs and neighborhood watch')
      
      if (violentCrimeRate > 5) concerns.push('Elevated violent crime rates')
      if (propertyCrimeRate > 20) concerns.push('High property crime rates')
      if (streetLightingQuality < 6) improvements.push('Upgrade street lighting systems')
      if (cctvCoverage < 5) improvements.push('Install additional security cameras')
      if (!neighborhoodWatch) improvements.push('Establish neighborhood watch program')
      
      let recommendation = ''
      if (overallScore >= 85) {
        recommendation = 'Excellent safety profile. This neighborhood offers very low risk with strong community support and infrastructure.'
      } else if (overallScore >= 70) {
        recommendation = 'Good safety profile with low risk. Minor improvements could enhance overall security.'
      } else if (overallScore >= 55) {
        recommendation = 'Moderate safety profile. Consider the specific factors important to you and potential improvements.'
      } else if (overallScore >= 40) {
        recommendation = 'Below average safety profile. Significant concerns exist that should be carefully evaluated.'
      } else {
        recommendation = 'Poor safety profile with high risk. Consider alternative locations or wait for substantial improvements.'
      }

      setSafetyMetrics({
        overallScore,
        crimeScore: Math.round(crimeScore),
        emergencyScore: Math.round(emergencyScore),
        infrastructureScore: Math.round(infrastructureScore),
        communityScore: Math.round(communityScore),
        riskLevel,
        recommendation,
        strengths,
        concerns,
        improvements
      })

      setCrimeData({
        violentCrime: violentCrimeRate,
        propertyCrime: propertyCrimeRate,
        drugOffenses: drugOffenseRate,
        trafficViolations: trafficViolationRate,
        publicOrder: publicOrderRate,
        trend: crimeTrend as 'increasing' | 'decreasing' | 'stable'
      })

      setIsCalculating(false)
    }, 1500)
  }, [violentCrimeRate, propertyCrimeRate, drugOffenseRate, trafficViolationRate, publicOrderRate, crimeTrend, policeStationDistance, fireStationDistance, hospitalDistance, emergencyResponseTime, streetLightingQuality, cctvCoverage, pedestrianSafety, trafficSafety, publicTransportSafety, neighborhoodWatch, communityEngagement, socialCohesion, youthPrograms, businessActivity, schoolSafety, parkSafety, nightlifeSafety, homelessnessLevel])

  useEffect(() => {
    calculateSafetyScore()
  }, [calculateSafetyScore])

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Very Low': return 'bg-green-100 text-green-800'
      case 'Low': return 'bg-blue-100 text-blue-800'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800'
      case 'High': return 'bg-orange-100 text-orange-800'
      case 'Very High': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600'
    if (score >= 70) return 'text-blue-600'
    if (score >= 55) return 'text-yellow-600'
    if (score >= 40) return 'text-orange-600'
    return 'text-red-600'
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="h-4 w-4 text-red-500" />
      case 'decreasing': return <TrendingDown className="h-4 w-4 text-green-500" />
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />
      default: return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Neighborhood Safety Score Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluate neighborhood safety with comprehensive crime analysis, emergency services assessment, and community factors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 sticky top-4">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-2 h-5 w-5" />
                  Safety Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="location" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="location">Location</TabsTrigger>
                    <TabsTrigger value="crime">Crime</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="location" className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1"
                        placeholder="Enter property address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="suburb">Suburb</Label>
                        <Input
                          id="suburb"
                          value={suburb}
                          onChange={(e) => setSuburb(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select value={state} onValueChange={setState}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NSW">NSW</SelectItem>
                            <SelectItem value="VIC">VIC</SelectItem>
                            <SelectItem value="QLD">QLD</SelectItem>
                            <SelectItem value="WA">WA</SelectItem>
                            <SelectItem value="SA">SA</SelectItem>
                            <SelectItem value="TAS">TAS</SelectItem>
                            <SelectItem value="ACT">ACT</SelectItem>
                            <SelectItem value="NT">NT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="postcode">Postcode</Label>
                      <Input
                        id="postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="crime" className="space-y-4">
                    <div>
                      <Label>Violent Crime Rate (per 1000)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[violentCrimeRate]}
                          onValueChange={(value) => setViolentCrimeRate(value[0])}
                          max={20}
                          min={0}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{violentCrimeRate}</div>
                      </div>
                    </div>
                    <div>
                      <Label>Property Crime Rate (per 1000)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[propertyCrimeRate]}
                          onValueChange={(value) => setPropertyCrimeRate(value[0])}
                          max={50}
                          min={0}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{propertyCrimeRate}</div>
                      </div>
                    </div>
                    <div>
                      <Label>Drug Offense Rate (per 1000)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[drugOffenseRate]}
                          onValueChange={(value) => setDrugOffenseRate(value[0])}
                          max={15}
                          min={0}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{drugOffenseRate}</div>
                      </div>
                    </div>
                    <div>
                      <Label>Crime Trend</Label>
                      <Select value={crimeTrend} onValueChange={setCrimeTrend}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="decreasing">Decreasing</SelectItem>
                          <SelectItem value="stable">Stable</SelectItem>
                          <SelectItem value="increasing">Increasing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="services" className="space-y-4">
                    <div>
                      <Label>Police Station Distance (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[policeStationDistance]}
                          onValueChange={(value) => setPoliceStationDistance(value[0])}
                          max={10}
                          min={0.1}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{policeStationDistance} km</div>
                      </div>
                    </div>
                    <div>
                      <Label>Fire Station Distance (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[fireStationDistance]}
                          onValueChange={(value) => setFireStationDistance(value[0])}
                          max={15}
                          min={0.1}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{fireStationDistance} km</div>
                      </div>
                    </div>
                    <div>
                      <Label>Hospital Distance (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[hospitalDistance]}
                          onValueChange={(value) => setHospitalDistance(value[0])}
                          max={20}
                          min={0.1}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{hospitalDistance} km</div>
                      </div>
                    </div>
                    <div>
                      <Label>Emergency Response Time (minutes)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[emergencyResponseTime]}
                          onValueChange={(value) => setEmergencyResponseTime(value[0])}
                          max={30}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{emergencyResponseTime} minutes</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="community" className="space-y-4">
                    <div>
                      <Label>Street Lighting Quality (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[streetLightingQuality]}
                          onValueChange={(value) => setStreetLightingQuality(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{streetLightingQuality}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>CCTV Coverage (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[cctvCoverage]}
                          onValueChange={(value) => setCctvCoverage(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{cctvCoverage}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>Community Engagement (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[communityEngagement]}
                          onValueChange={(value) => setCommunityEngagement(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{communityEngagement}/10</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="neighborhoodWatch"
                        checked={neighborhoodWatch}
                        onChange={(e) => setNeighborhoodWatch(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="neighborhoodWatch">Neighborhood Watch Active</Label>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  onClick={calculateSafetyScore} 
                  className="w-full mt-6" 
                  disabled={isCalculating}
                >
                  {isCalculating ? 'Analyzing...' : 'Calculate Safety Score'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Overall Score */}
              {safetyMetrics && (
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <CardTitle className="flex items-center justify-between text-2xl">
                      <span className="flex items-center">
                        <Shield className="mr-3 h-6 w-6" />
                        Safety Score
                      </span>
                      <div className="text-right">
                        <div className="text-4xl font-bold">{safetyMetrics.overallScore}</div>
                        <div className="text-sm opacity-90">out of 100</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Risk Level</span>
                          <Badge className={getRiskBadgeColor(safetyMetrics.riskLevel)}>
                            {safetyMetrics.riskLevel}
                          </Badge>
                        </div>
                        <Progress 
                          value={safetyMetrics.overallScore} 
                          className="h-3"
                        />
                      </div>
                      <div className="flex items-center">
                        {safetyMetrics.riskLevel === 'Very Low' && <CheckCircle className="h-8 w-8 text-green-500 mr-3" />}
                        {safetyMetrics.riskLevel === 'Low' && <CheckCircle className="h-8 w-8 text-blue-500 mr-3" />}
                        {safetyMetrics.riskLevel === 'Moderate' && <Info className="h-8 w-8 text-yellow-500 mr-3" />}
                        {(safetyMetrics.riskLevel === 'High' || safetyMetrics.riskLevel === 'Very High') && <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />}
                        <div>
                          <div className="font-semibold">Safety Assessment</div>
                          <div className="text-sm text-gray-600">Based on comprehensive analysis</div>
                        </div>
                      </div>
                    </div>
                    
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        {safetyMetrics.recommendation}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )}

              {/* Detailed Scores */}
              {safetyMetrics && (
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-5 w-5 text-blue-600" />
                      Detailed Safety Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                          <div className="flex items-center">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                            <span className="font-medium">Crime Score</span>
                          </div>
                          <div className={`text-2xl font-bold ${getScoreColor(safetyMetrics.crimeScore)}`}>
                            {safetyMetrics.crimeScore}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-blue-600 mr-3" />
                            <span className="font-medium">Emergency Services</span>
                          </div>
                          <div className={`text-2xl font-bold ${getScoreColor(safetyMetrics.emergencyScore)}`}>
                            {safetyMetrics.emergencyScore}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center">
                            <Lightbulb className="h-5 w-5 text-green-600 mr-3" />
                            <span className="font-medium">Infrastructure</span>
                          </div>
                          <div className={`text-2xl font-bold ${getScoreColor(safetyMetrics.infrastructureScore)}`}>
                            {safetyMetrics.infrastructureScore}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-purple-600 mr-3" />
                            <span className="font-medium">Community</span>
                          </div>
                          <div className={`text-2xl font-bold ${getScoreColor(safetyMetrics.communityScore)}`}>
                            {safetyMetrics.communityScore}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Crime Data */}
              {crimeData && (
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                        Crime Statistics
                      </span>
                      <div className="flex items-center">
                        {getTrendIcon(crimeData.trend)}
                        <span className="ml-2 text-sm capitalize">{crimeData.trend}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{crimeData.violentCrime}</div>
                        <div className="text-sm text-gray-600">Violent Crime</div>
                        <div className="text-xs text-gray-500">per 1000 residents</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{crimeData.propertyCrime}</div>
                        <div className="text-sm text-gray-600">Property Crime</div>
                        <div className="text-xs text-gray-500">per 1000 residents</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{crimeData.drugOffenses}</div>
                        <div className="text-sm text-gray-600">Drug Offenses</div>
                        <div className="text-xs text-gray-500">per 1000 residents</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Strengths, Concerns, and Improvements */}
              {safetyMetrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-xl border-0">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center text-green-800">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Strengths
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {safetyMetrics.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0">
                    <CardHeader className="bg-red-50">
                      <CardTitle className="flex items-center text-red-800">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        Concerns
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {safetyMetrics.concerns.map((concern, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{concern}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center text-blue-800">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Improvements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {safetyMetrics.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comprehensive Guide */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-900">
                Complete Neighborhood Safety Assessment Guide
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Master the evaluation of neighborhood safety for informed property decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none p-8">
              <h2>Understanding Neighborhood Safety</h2>
              <p>
                Neighborhood safety is a critical factor in property values, quality of life, and long-term investment success. A comprehensive safety assessment goes beyond crime statistics to include emergency services, infrastructure, community engagement, and environmental factors that contribute to overall security and well-being.
              </p>

              <h2>Crime Analysis and Statistics</h2>
              
              <h3>Types of Crime to Monitor</h3>
              <p>
                Different types of crime have varying impacts on neighborhood safety and property values:
              </p>
              <ul>
                <li><strong>Violent Crime:</strong> Assault, robbery, homicide - highest impact on safety perception</li>
                <li><strong>Property Crime:</strong> Burglary, theft, vandalism - directly affects residents and property</li>
                <li><strong>Drug Offenses:</strong> Possession, trafficking - indicator of broader social issues</li>
                <li><strong>Traffic Violations:</strong> Speeding, DUI - affects pedestrian and road safety</li>
                <li><strong>Public Order:</strong> Noise complaints, public intoxication - quality of life issues</li>
              </ul>

              <h3>Crime Rate Interpretation</h3>
              <p>
                Understanding crime statistics requires context and proper interpretation:
              </p>
              <ul>
                <li><strong>Rate vs. Numbers:</strong> Focus on rates per capita rather than absolute numbers</li>
                <li><strong>Trend Analysis:</strong> Look at multi-year trends rather than single-year data</li>
                <li><strong>Seasonal Patterns:</strong> Some crimes fluctuate with seasons and events</li>
                <li><strong>Reporting Rates:</strong> Consider that not all crimes are reported to police</li>
                <li><strong>Comparative Context:</strong> Compare to similar neighborhoods and regional averages</li>
              </ul>

              <h2>Emergency Services Assessment</h2>
              
              <h3>Police Services</h3>
              <p>
                Evaluate police presence and response capabilities:
              </p>
              <ul>
                <li><strong>Station Proximity:</strong> Distance to nearest police station</li>
                <li><strong>Response Times:</strong> Average emergency and non-emergency response</li>
                <li><strong>Patrol Frequency:</strong> Regular police presence in the area</li>
                <li><strong>Community Policing:</strong> Programs that engage with residents</li>
                <li><strong>Specialized Units:</strong> Traffic, drug, domestic violence specialists</li>
              </ul>

              <h3>Fire and Medical Services</h3>
              <ul>
                <li><strong>Fire Station Access:</strong> Distance and response time to fire services</li>
                <li><strong>Hospital Proximity:</strong> Access to emergency medical care</li>
                <li><strong>Ambulance Services:</strong> Paramedic response times and coverage</li>
                <li><strong>Emergency Preparedness:</strong> Disaster response capabilities</li>
              </ul>

              <h2>Infrastructure and Environmental Safety</h2>
              
              <h3>Lighting and Visibility</h3>
              <p>
                Proper lighting is fundamental to neighborhood safety:
              </p>
              <ul>
                <li><strong>Street Lighting:</strong> Adequate illumination on all streets and pathways</li>
                <li><strong>Public Spaces:</strong> Well-lit parks, bus stops, and gathering areas</li>
                <li><strong>Maintenance:</strong> Regular upkeep and prompt repair of lighting</li>
                <li><strong>Dark Spots:</strong> Identification and elimination of poorly lit areas</li>
                <li><strong>Energy Efficiency:</strong> Modern LED systems with consistent coverage</li>
              </ul>

              <h3>Surveillance and Security</h3>
              <ul>
                <li><strong>CCTV Coverage:</strong> Security cameras in public areas and commercial districts</li>
                <li><strong>Monitoring Systems:</strong> Active monitoring vs. recording-only systems</li>
                <li><strong>Private Security:</strong> Security guards in commercial and residential areas</li>
                <li><strong>Access Control:</strong> Gated communities, building security systems</li>
              </ul>

              <h2>Transportation and Pedestrian Safety</h2>
              
              <h3>Road Safety</h3>
              <p>
                Traffic safety affects both residents and property values:
              </p>
              <ul>
                <li><strong>Traffic Calming:</strong> Speed bumps, roundabouts, narrow streets</li>
                <li><strong>Crosswalks:</strong> Safe pedestrian crossing points with signals</li>
                <li><strong>School Zones:</strong> Special safety measures near educational facilities</li>
                <li><strong>Parking:</strong> Adequate parking to prevent street congestion</li>
                <li><strong>Public Transport:</strong> Safe and well-maintained transit stops</li>
              </ul>

              <h3>Walkability and Cycling</h3>
              <ul>
                <li><strong>Sidewalks:</strong> Well-maintained pedestrian pathways</li>
                <li><strong>Bike Lanes:</strong> Dedicated cycling infrastructure</li>
                <li><strong>Connectivity:</strong> Safe routes to schools, shops, and services</li>
                <li><strong>Accessibility:</strong> Infrastructure for people with disabilities</li>
              </ul>

              <h2>Community Factors and Social Cohesion</h2>
              
              <h3>Neighborhood Watch and Community Programs</h3>
              <p>
                Active communities are safer communities:
              </p>
              <ul>
                <li><strong>Neighborhood Watch:</strong> Organized resident surveillance programs</li>
                <li><strong>Community Groups:</strong> Resident associations and local organizations</li>
                <li><strong>Youth Programs:</strong> Activities and support for young people</li>
                <li><strong>Senior Services:</strong> Programs for elderly residents</li>
                <li><strong>Cultural Events:</strong> Community gatherings and celebrations</li>
              </ul>

              <h3>Social Indicators</h3>
              <ul>
                <li><strong>Population Stability:</strong> Low turnover rates indicate community investment</li>
                <li><strong>Home Ownership:</strong> Higher ownership rates correlate with community care</li>
                <li><strong>Property Maintenance:</strong> Well-kept properties indicate pride and resources</li>
                <li><strong>Business Activity:</strong> Thriving local businesses create natural surveillance</li>
                <li><strong>School Quality:</strong> Good schools attract stable families</li>
              </ul>

              <h2>Environmental and Health Safety</h2>
              
              <h3>Environmental Hazards</h3>
              <p>
                Consider environmental factors that affect safety and health:
              </p>
              <ul>
                <li><strong>Air Quality:</strong> Pollution levels from traffic and industry</li>
                <li><strong>Water Quality:</strong> Safe drinking water and proper drainage</li>
                <li><strong>Noise Pollution:</strong> Traffic, aircraft, and industrial noise</li>
                <li><strong>Contamination:</strong> Soil contamination from past industrial use</li>
                <li><strong>Natural Hazards:</strong> Flood zones, earthquake risks, fire danger</li>
              </ul>

              <h3>Public Health Infrastructure</h3>
              <ul>
                <li><strong>Healthcare Access:</strong> Proximity to medical facilities and services</li>
                <li><strong>Recreation Facilities:</strong> Parks, gyms, and sports facilities</li>
                <li><strong>Food Access:</strong> Availability of healthy food options</li>
                <li><strong>Waste Management:</strong> Proper garbage collection and disposal</li>
              </ul>

              <h2>Research Methods and Data Sources</h2>
              
              <h3>Official Crime Data</h3>
              <p>
                Use reliable sources for crime and safety information:
              </p>
              <ul>
                <li><strong>Police Departments:</strong> Official crime statistics and reports</li>
                <li><strong>Government Websites:</strong> State and local crime databases</li>
                <li><strong>Court Records:</strong> Public records of criminal proceedings</li>
                <li><strong>Emergency Services:</strong> Response time data and incident reports</li>
              </ul>

              <h3>Community Intelligence</h3>
              <ul>
                <li><strong>Local Residents:</strong> First-hand experiences and observations</li>
                <li><strong>Business Owners:</strong> Commercial perspective on area safety</li>
                <li><strong>Real Estate Agents:</strong> Market knowledge and buyer concerns</li>
                <li><strong>School Officials:</strong> Safety measures and community involvement</li>
                <li><strong>Community Leaders:</strong> Local government and organization insights</li>
              </ul>

              <h2>Technology and Modern Safety Tools</h2>
              
              <h3>Digital Safety Resources</h3>
              <p>
                Leverage technology for comprehensive safety assessment:
              </p>
              <ul>
                <li><strong>Crime Mapping:</strong> Online tools showing crime locations and patterns</li>
                <li><strong>Safety Apps:</strong> Community reporting and alert systems</li>
                <li><strong>Social Media:</strong> Local groups discussing safety concerns</li>
                <li><strong>Review Platforms:</strong> Resident reviews of neighborhood safety</li>
                <li><strong>Government Portals:</strong> Official data and community resources</li>
              </ul>

              <h3>Smart City Initiatives</h3>
              <ul>
                <li><strong>Smart Lighting:</strong> Adaptive lighting systems with sensors</li>
                <li><strong>Emergency Systems:</strong> Automated emergency response and alerts</li>
                <li><strong>Traffic Management:</strong> Intelligent traffic control systems</li>
                <li><strong>Environmental Monitoring:</strong> Air and noise quality sensors</li>
              </ul>

              <h2>Property Investment Considerations</h2>
              
              <h3>Safety Impact on Property Values</h3>
              <p>
                Safety directly affects property investment returns:
              </p>
              <ul>
                <li><strong>Price Premiums:</strong> Safe neighborhoods command higher prices</li>
                <li><strong>Rental Demand:</strong> Tenants prioritize safety in location decisions</li>
                <li><strong>Appreciation Rates:</strong> Safe areas tend to appreciate more consistently</li>
                <li><strong>Insurance Costs:</strong> Lower crime areas have reduced insurance premiums</li>
                <li><strong>Resale Value:</strong> Safety reputation affects future marketability</li>
              </ul>

              <h3>Risk Assessment for Investors</h3>
              <ul>
                <li><strong>Trend Analysis:</strong> Improving vs. declining safety trends</li>
                <li><strong>Development Impact:</strong> How new developments affect safety</li>
                <li><strong>Economic Factors:</strong> Unemployment and poverty correlation with crime</li>
                <li><strong>Demographic Changes:</strong> Population shifts and their safety implications</li>
                <li><strong>Infrastructure Investment:</strong> Government spending on safety improvements</li>
              </ul>

              <h2>Improving Neighborhood Safety</h2>
              
              <h3>Individual Actions</h3>
              <p>
                Property owners can contribute to neighborhood safety:
              </p>
              <ul>
                <li><strong>Property Maintenance:</strong> Keep properties well-maintained and secure</li>
                <li><strong>Lighting:</strong> Install adequate exterior lighting</li>
                <li><strong>Landscaping:</strong> Maintain clear sightlines and eliminate hiding spots</li>
                <li><strong>Security Systems:</strong> Install and maintain security equipment</li>
                <li><strong>Community Participation:</strong> Join neighborhood watch and community groups</li>
              </ul>

              <h3>Community Initiatives</h3>
              <ul>
                <li><strong>Advocacy:</strong> Work with local government for safety improvements</li>
                <li><strong>Partnerships:</strong> Collaborate with police and emergency services</li>
                <li><strong>Education:</strong> Safety awareness and crime prevention programs</li>
                <li><strong>Events:</strong> Community activities that build social cohesion</li>
                <li><strong>Reporting:</strong> Encourage reporting of suspicious activities</li>
              </ul>

              <h2>Common Safety Assessment Mistakes</h2>
              
              <h3>Data Interpretation Errors</h3>
              <p>
                Avoid these common mistakes in safety evaluation:
              </p>
              <ul>
                <li><strong>Single Source Reliance:</strong> Don't depend on only one data source</li>
                <li><strong>Outdated Information:</strong> Ensure data is current and relevant</li>
                <li><strong>Statistical Misunderstanding:</strong> Properly interpret rates and trends</li>
                <li><strong>Anecdotal Evidence:</strong> Balance personal stories with objective data</li>
                <li><strong>Bias Confirmation:</strong> Seek diverse perspectives and sources</li>
              </ul>

              <h3>Investment Pitfalls</h3>
              <ul>
                <li><strong>Overreacting to Incidents:</strong> Don't let single events drive decisions</li>
                <li><strong>Ignoring Trends:</strong> Consider long-term safety trajectory</li>
                <li><strong>Neglecting Context:</strong> Understand local factors affecting crime</li>
                <li><strong>Assumption Errors:</strong> Verify safety claims and perceptions</li>
              </ul>

              <h2>Future Trends in Neighborhood Safety</h2>
              
              <h3>Technology Integration</h3>
              <p>
                Emerging technologies are reshaping neighborhood safety:
              </p>
              <ul>
                <li><strong>AI Surveillance:</strong> Intelligent video analysis and threat detection</li>
                <li><strong>Predictive Policing:</strong> Data-driven crime prevention strategies</li>
                <li><strong>IoT Sensors:</strong> Connected devices monitoring environmental conditions</li>
                <li><strong>Mobile Integration:</strong> Smartphone apps for community safety</li>
                <li><strong>Drone Surveillance:</strong> Aerial monitoring for large areas</li>
              </ul>

              <h3>Community Evolution</h3>
              <ul>
                <li><strong>Social Networks:</strong> Digital platforms for community organization</li>
                <li><strong>Shared Resources:</strong> Community sharing of safety resources</li>
                <li><strong>Environmental Focus:</strong> Green infrastructure improving safety</li>
                <li><strong>Inclusive Design:</strong> Safety solutions for diverse communities</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Neighborhood safety assessment is a complex but essential component of property decision-making. A comprehensive evaluation considers crime statistics, emergency services, infrastructure, community factors, and environmental conditions to provide a complete picture of area safety.
              </p>
              <p>
                Use this tool to systematically evaluate safety factors, but remember that safety is both objective and subjective. What feels safe to one person may not to another, and personal circumstances affect safety priorities.
              </p>
              <p>
                Stay informed about changing conditions, engage with the community, and consider both current safety levels and future trends when making property decisions. A safe neighborhood is not just about low crime rates—it's about a community that actively works together to maintain security and quality of life for all residents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}