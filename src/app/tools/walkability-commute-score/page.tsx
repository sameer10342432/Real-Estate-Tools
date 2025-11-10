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
import { Slider } from '@/components/ui/slider'
import { MapPin, Car, Train, Bike, Clock, Star, CheckCircle, AlertTriangle, Info, Navigation, Coffee, ShoppingCart, GraduationCap, Landmark, Trees, FerrisWheel, Pill, Utensils, ShoppingBasket, School, Hospital } from 'lucide-react'

interface WalkabilityMetrics {
  overallScore: number
  walkScore: number
  transitScore: number
  bikeScore: number
  carDependency: number
  rating: "Walker\'s Paradise" | 'Very Walkable' | 'Somewhat Walkable' | 'Car-Dependent' | 'Car-Required'
  recommendation: string
  strengths: string[]
  improvements: string[]
  commuteAnalysis: CommuteAnalysis
}

interface CommuteAnalysis {
  averageCommuteTime: number
  publicTransitTime: number
  drivingTime: number
  cyclingTime: number
  walkingTime: number
  costAnalysis: {
    publicTransit: number
    driving: number
    cycling: number
    walking: number
  }
  carbonFootprint: {
    publicTransit: number
    driving: number
    cycling: number
    walking: number
  }
}

interface Amenity {
  name: string
  category: string
  distance: number
  walkTime: number
  rating: number
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Walkability & Commute Score Calculator',
    description: 'Evaluate walkability and commute options. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function WalkabilityCommuteScore() {
  // Location Input
  const [address, setAddress] = useState<string>('123 Collins Street, Melbourne VIC 3000')
  const [suburb, setSuburb] = useState<string>('Melbourne')
  const [state, setState] = useState<string>('VIC')
  const [shoppingDistance] = useState<number>(0.8)
  const [workDistance, setWorkDistance] = useState<number>(2.5)
  
  // Public Transport
  const [nearestTrainStation, setNearestTrainStation] = useState<number>(0.6)
  const [nearestBusStop, setNearestBusStop] = useState<number>(0.2)
  const [transitFrequency, setTransitFrequency] = useState<number>(8)
  const [transitReliability, setTransitReliability] = useState<number>(7)
  const [transitCoverage] = useState<number>(8)
  
  // Walking Infrastructure
  const [sidewalkQuality, setSidewalkQuality] = useState<number>(8)
  const [pedestrianCrossings, setPedestrianCrossings] = useState<number>(7)
  const [walkingSafety, setWalkingSafety] = useState<number>(8)
  const [streetConnectivity] = useState<number>(7)
  const [walkingComfort] = useState<number>(7)
  
  // Cycling Infrastructure
  const [bikeInfrastructure, setBikeInfrastructure] = useState<number>(6)
  const [bikeSafety] = useState<number>(6)
  const [bikeParking] = useState<number>(7)
  const [bikeSharing] = useState<boolean>(true)
  const [hilliness] = useState<number>(4)
  
  // Amenities Access
  const [groceryStores, setGroceryStores] = useState<number>(3)
  const [restaurants, setRestaurants] = useState<number>(8)
  const [cafes] = useState<number>(6)
  const [banks, setBanks] = useState<number>(4)
  const [pharmacies] = useState<number>(2)
  const [gyms] = useState<number>(3)
  const [parks, setParks] = useState<number>(4)
  const [libraries] = useState<number>(1)

  const [walkabilityMetrics, setWalkabilityMetrics] = useState<WalkabilityMetrics | null>(null)
  const [nearbyAmenities, setNearbyAmenities] = useState<Amenity[]>([])
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  const calculateWalkabilityScore = useCallback(() => {
    setIsCalculating(true)
    
    setTimeout(() => {
      // Walk Score (40% weight)
      const walkScore = Math.max(0, Math.min(100,
        (sidewalkQuality * 8 + pedestrianCrossings * 8 + walkingSafety * 10 + 
         streetConnectivity * 8 + walkingComfort * 6 +
         Math.max(0, 50 - workDistance * 10) +
         Math.max(0, 30 - shoppingDistance * 20) +
         (groceryStores * 3 + restaurants * 2 + cafes * 2 + banks * 2 + 
          pharmacies * 3 + gyms * 2 + parks * 3 + libraries * 2)) / 8
      ))
      
      // Transit Score (30% weight)
      const transitScore = Math.max(0, Math.min(100,
        (Math.max(0, 100 - nearestTrainStation * 50) +
         Math.max(0, 100 - nearestBusStop * 100) +
         transitFrequency * 8 + transitReliability * 10 + transitCoverage * 8) / 5
      ))
      
      // Bike Score (20% weight)
      const bikeScore = Math.max(0, Math.min(100,
        (bikeInfrastructure * 10 + bikeSafety * 12 + bikeParking * 8 + 
         (bikeSharing ? 80 : 40) + Math.max(0, 100 - hilliness * 8)) / 5
      ))
      
      // Car Dependency (lower is better)
      const carDependency = Math.max(0, Math.min(100,
        100 - (walkScore * 0.5 + transitScore * 0.3 + bikeScore * 0.2)
      ))
      
      // Overall Score
      const overallScore = Math.round(
        walkScore * 0.4 + transitScore * 0.3 + bikeScore * 0.2 + (100 - carDependency) * 0.1
      )
      
      // Rating
      let rating: "Walker\'s Paradise" | 'Very Walkable' | 'Somewhat Walkable' | 'Car-Dependent' | 'Car-Required'
      if (overallScore >= 90) rating = "Walker\'s Paradise"
      else if (overallScore >= 70) rating = 'Very Walkable'
      else if (overallScore >= 50) rating = 'Somewhat Walkable'
      else if (overallScore >= 25) rating = 'Car-Dependent'
      else rating = 'Car-Required'
      
      // Commute Analysis
      const commuteAnalysis: CommuteAnalysis = {
        averageCommuteTime: Math.round(workDistance * 15 + Math.random() * 10),
        publicTransitTime: Math.round(workDistance * 20 + nearestTrainStation * 10),
        drivingTime: Math.round(workDistance * 8 + Math.random() * 5),
        cyclingTime: Math.round(workDistance * 12 + hilliness * 2),
        walkingTime: Math.round(workDistance * 60),
        costAnalysis: {
          publicTransit: Math.round(workDistance * 2.5 * 22), // Monthly cost
          driving: Math.round(workDistance * 1.2 * 22 + 200), // Fuel + parking
          cycling: 50, // Maintenance
          walking: 0
        },
        carbonFootprint: {
          publicTransit: Math.round(workDistance * 0.05 * 22), // kg CO2 monthly
          driving: Math.round(workDistance * 0.2 * 22),
          cycling: 0,
          walking: 0
        }
      }
      
      // Generate nearby amenities
      const amenityTypes = [
        { name: 'Woolworths Metro', category: 'Grocery Store', distance: 0.3, rating: 4.2 },
        { name: 'Collins Street Cafe', category: 'Cafe', distance: 0.1, rating: 4.5 },
        { name: 'Melbourne Central', category: 'Shopping', distance: 0.5, rating: 4.3 },
        { name: 'State Library Victoria', category: 'Library', distance: 0.4, rating: 4.7 },
        { name: 'Fitness First', category: 'Recreation', distance: 0.2, rating: 4.1 },
        { name: 'Commonwealth Bank', category: 'Bank', distance: 0.1, rating: 3.8 },
        { name: 'Priceline Pharmacy', category: 'Pharmacy', distance: 0.2, rating: 4.0 },
        { name: 'Flagstaff Gardens', category: 'Park', distance: 0.6, rating: 4.4 },
        { name: 'Primary School', category: 'School', distance: 0.8, rating: 4.6 },
      ]
      
      const amenities: Amenity[] = amenityTypes.map(amenity => ({
        ...amenity,
        walkTime: Math.round(amenity.distance * 12) // 12 minutes per km
      }))
      
      // Recommendations and Analysis
      const strengths: string[] = []
      const improvements: string[] = []
      
      if (walkScore >= 80) strengths.push('Excellent pedestrian infrastructure and walkability')
      else if (walkScore < 50) improvements.push('Improve sidewalk quality and pedestrian crossings')
      
      if (transitScore >= 80) strengths.push('Outstanding public transport connectivity')
      else if (transitScore < 50) improvements.push('Enhance public transport access and frequency')
      
      if (bikeScore >= 70) strengths.push('Good cycling infrastructure and bike-friendly environment')
      else if (bikeScore < 50) improvements.push('Develop better cycling lanes and bike parking')
      
      if (groceryStores >= 3) strengths.push('Multiple grocery options within walking distance')
      if (restaurants >= 6) strengths.push('Diverse dining and entertainment options nearby')
      if (nearestTrainStation <= 0.5) strengths.push('Excellent train station proximity')
      if (nearestBusStop <= 0.2) strengths.push('Convenient bus stop access')
      
      if (workDistance > 5) improvements.push('Consider transport options for longer commute')
      if (hilliness > 6) improvements.push('Challenging terrain for walking and cycling')
      if (transitFrequency < 6) improvements.push('Limited public transport frequency')
      
      let recommendation = ''
      if (overallScore >= 90) {
        recommendation = "Walker\'s Paradise! Daily errands can be easily accomplished on foot with excellent public transport options."
      } else if (overallScore >= 70) {
        recommendation = 'Very walkable with good public transport. Most errands can be accomplished on foot or by transit.'
      } else if (overallScore >= 50) {
        recommendation = 'Somewhat walkable with some public transport options. A car may be helpful for some activities.'
      } else if (overallScore >= 25) {
        recommendation = 'Car-dependent area with limited walkability. Most errands will require a car or significant planning.'
      } else {
        recommendation = 'Car-required location. Daily activities are difficult without a car due to limited walkability and transit.'
      }

      setWalkabilityMetrics({
        overallScore,
        walkScore: Math.round(walkScore),
        transitScore: Math.round(transitScore),
        bikeScore: Math.round(bikeScore),
        carDependency: Math.round(carDependency),
        rating,
        recommendation,
        strengths,
        improvements,
        commuteAnalysis
      })

      setNearbyAmenities(amenities)
      setIsCalculating(false)
    }, 1500)
  }, [
    workDistance,
    shoppingDistance,
    nearestTrainStation,
    nearestBusStop,
    transitFrequency,
    transitReliability,
    transitCoverage,
    sidewalkQuality,
    pedestrianCrossings,
    walkingSafety,
    streetConnectivity,
    walkingComfort,
    bikeInfrastructure,
    bikeSafety,
    bikeParking,
    bikeSharing,
    hilliness,
    groceryStores,
    restaurants,
    cafes,
    banks,
    pharmacies,
    gyms,
    parks,
    libraries,
  ])

  useEffect(() => {
    calculateWalkabilityScore()
  }, [calculateWalkabilityScore])

  const getRatingBadgeColor = (rating: string) => {
    switch (rating) {
      case "Walker\'s Paradise": return 'bg-green-100 text-green-800'
      case 'Very Walkable': return 'bg-blue-100 text-blue-800'
      case 'Somewhat Walkable': return 'bg-yellow-100 text-yellow-800'
      case 'Car-Dependent': return 'bg-orange-100 text-orange-800'
      case 'Car-Required': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-blue-600'
    if (score >= 40) return 'text-yellow-600'
    if (score >= 20) return 'text-orange-600'
    return 'text-red-600'
  }

  const getCategoryIcon = (category: string) => {
    const iconMapping: { [key: string]: React.ReactElement } = {
      "Grocery Store": <ShoppingCart className="h-5 w-5 text-blue-500" />,
      "Cafe": <Coffee className="h-5 w-5 text-yellow-500" />,
      "Shopping": <ShoppingBasket className="h-5 w-5 text-indigo-500" />,
      "Library": <GraduationCap className="h-5 w-5 text-purple-500" />,
      "Recreation": <FerrisWheel className="h-5 w-5 text-teal-500" />,
      "Bank": <Landmark className="h-5 w-5 text-green-500" />,
      "Restaurant": <Utensils className="h-5 w-5 text-red-500" />,
      "Hospital": <Hospital className="h-5 w-5 text-pink-500" />,
      "Pharmacy": <Pill className="h-5 w-5 text-pink-500" />,
      "Park": <Trees className="h-5 w-5 text-green-500" />,
      "School": <School className="h-5 w-5 text-orange-500" />,
      "Default": <MapPin className="h-5 w-5 text-gray-400" />
    };

    const icon = Object.entries(iconMapping).find(([key]) => category.toLowerCase().includes(key.toLowerCase()));
    return icon ? icon[1] : iconMapping["Default"];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-green-600 p-3 rounded-full">
              <Navigation className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Walkability & Commute Score Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluate neighborhood walkability, public transport access, and commute convenience for better location decisions
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 sticky top-4">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-2 h-5 w-5" />
                  Walkability Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="location" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="location">Location</TabsTrigger>
                    <TabsTrigger value="transport">Transport</TabsTrigger>
                    <TabsTrigger value="walking">Walking</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
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
                      <Label>Work Distance (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[workDistance]}
                          onValueChange={(value) => setWorkDistance(value[0])}
                          max={20}
                          min={0.1}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{workDistance} km</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="transport" className="space-y-4">
                    <div>
                      <Label>Nearest Train Station (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[nearestTrainStation]}
                          onValueChange={(value) => setNearestTrainStation(value[0])}
                          max={5}
                          min={0.1}
                          step={0.1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{nearestTrainStation} km</div>
                      </div>
                    </div>
                    <div>
                      <Label>Nearest Bus Stop (km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[nearestBusStop]}
                          onValueChange={(value) => setNearestBusStop(value[0])}
                          max={2}
                          min={0.05}
                          step={0.05}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{nearestBusStop} km</div>
                      </div>
                    </div>
                    <div>
                      <Label>Transit Frequency (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[transitFrequency]}
                          onValueChange={(value) => setTransitFrequency(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{transitFrequency}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>Transit Reliability (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[transitReliability]}
                          onValueChange={(value) => setTransitReliability(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{transitReliability}/10</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="walking" className="space-y-4">
                    <div>
                      <Label>Sidewalk Quality (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[sidewalkQuality]}
                          onValueChange={(value) => setSidewalkQuality(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{sidewalkQuality}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>Pedestrian Crossings (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[pedestrianCrossings]}
                          onValueChange={(value) => setPedestrianCrossings(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{pedestrianCrossings}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>Walking Safety (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[walkingSafety]}
                          onValueChange={(value) => setWalkingSafety(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{walkingSafety}/10</div>
                      </div>
                    </div>
                    <div>
                      <Label>Bike Infrastructure (1-10)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[bikeInfrastructure]}
                          onValueChange={(value) => setBikeInfrastructure(value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{bikeInfrastructure}/10</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="amenities" className="space-y-4">
                    <div>
                      <Label>Grocery Stores (within 1km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[groceryStores]}
                          onValueChange={(value) => setGroceryStores(value[0])}
                          max={10}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{groceryStores} stores</div>
                      </div>
                    </div>
                    <div>
                      <Label>Restaurants & Cafes (within 1km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[restaurants]}
                          onValueChange={(value) => setRestaurants(value[0])}
                          max={20}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{restaurants} venues</div>
                      </div>
                    </div>
                    <div>
                      <Label>Banks & ATMs (within 1km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[banks]}
                          onValueChange={(value) => setBanks(value[0])}
                          max={10}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{banks} locations</div>
                      </div>
                    </div>
                    <div>
                      <Label>Parks & Recreation (within 1km)</Label>
                      <div className="mt-2">
                        <Slider
                          value={[parks]}
                          onValueChange={(value) => setParks(value[0])}
                          max={10}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-600 mt-1">{parks} parks</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  onClick={calculateWalkabilityScore} 
                  className="w-full mt-6" 
                  disabled={isCalculating}
                >
                  {isCalculating ? 'Analyzing...' : 'Calculate Walkability Score'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {walkabilityMetrics && (
              <>
                {/* Overall Score */}
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Star className="mr-2 h-5 w-5" />
                        Overall Walkability Score
                      </span>
                      <Badge className={`${getRatingBadgeColor(walkabilityMetrics.rating)} text-lg px-3 py-1`}>
                        {walkabilityMetrics.rating}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`text-6xl font-bold ${getScoreColor(walkabilityMetrics.overallScore)} mb-2`}>
                        {walkabilityMetrics.overallScore}
                      </div>
                      <div className="text-gray-600">out of 100</div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(walkabilityMetrics.walkScore)}`}>
                          {walkabilityMetrics.walkScore}
                        </div>
                        <div className="text-sm text-gray-600">Walk Score</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(walkabilityMetrics.transitScore)}`}>
                          {walkabilityMetrics.transitScore}
                        </div>
                        <div className="text-sm text-gray-600">Transit Score</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(walkabilityMetrics.bikeScore)}`}>
                          {walkabilityMetrics.bikeScore}
                        </div>
                        <div className="text-sm text-gray-600">Bike Score</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(100 - walkabilityMetrics.carDependency)}`}>
                          {100 - walkabilityMetrics.carDependency}
                        </div>
                        <div className="text-sm text-gray-600">Car Independence</div>
                      </div>
                    </div>
                    
                    <Alert className="mb-4">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        {walkabilityMetrics.recommendation}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Commute Analysis */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Commute Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Travel Times to Work</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="flex items-center">
                              <Car className="mr-2 h-4 w-4" />
                              Driving
                            </span>
                            <span className="font-medium">{walkabilityMetrics.commuteAnalysis.drivingTime} min</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center">
                              <Train className="mr-2 h-4 w-4" />
                              Public Transit
                            </span>
                            <span className="font-medium">{walkabilityMetrics.commuteAnalysis.publicTransitTime} min</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center">
                              <Bike className="mr-2 h-4 w-4" />
                              Cycling
                            </span>
                            <span className="font-medium">{walkabilityMetrics.commuteAnalysis.cyclingTime} min</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Monthly Commute Costs</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Driving</span>
                            <span className="font-medium">${walkabilityMetrics.commuteAnalysis.costAnalysis.driving}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Public Transit</span>
                            <span className="font-medium">${walkabilityMetrics.commuteAnalysis.costAnalysis.publicTransit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cycling</span>
                            <span className="font-medium">${walkabilityMetrics.commuteAnalysis.costAnalysis.cycling}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Walking</span>
                            <span className="font-medium text-green-600">Free</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Nearby Amenities */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Nearby Amenities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {nearbyAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            {getCategoryIcon(amenity.category)}
                            <div className="ml-3">
                              <div className="font-medium">{amenity.name}</div>
                              <div className="text-sm text-gray-600">{amenity.category}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{amenity.distance} km</div>
                            <div className="text-sm text-gray-600">{amenity.walkTime} min walk</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-600">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Strengths
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {walkabilityMetrics.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-orange-600">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        Areas for Improvement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {walkabilityMetrics.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="mr-2 h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <Card className="shadow-xl border-0 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Understanding Walkability & Commute Scores</CardTitle>
            <CardDescription>
              Comprehensive guide to evaluating neighborhood walkability and transportation options
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4">What is Walkability?</h3>
              <p className="mb-4">
                Walkability measures how friendly an area is to walking. A walkable neighborhood has a center, 
                whether it&apos;s a main street or a public space. Most errands can be accomplished on foot, and 
                it&apos;s pleasant to be outside. The area is dense enough to support local businesses but not so 
                dense as to be overwhelming.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Key Factors in Walkability Assessment</h3>
              
              <h4 className="text-xl font-medium mb-3">1. Pedestrian Infrastructure</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Sidewalk Quality:</strong> Well-maintained, continuous sidewalks with adequate width</li>
                <li><strong>Pedestrian Crossings:</strong> Safe crossing points with proper signals and visibility</li>
                <li><strong>Street Connectivity:</strong> Grid-like street patterns that provide multiple route options</li>
                <li><strong>Lighting and Safety:</strong> Adequate street lighting and visibility for evening walks</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">2. Public Transportation Access</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Proximity to Stations:</strong> Distance to train stations, bus stops, and transit hubs</li>
                <li><strong>Service Frequency:</strong> How often public transport services run during peak and off-peak hours</li>
                <li><strong>Route Coverage:</strong> Number of destinations accessible via public transport</li>
                <li><strong>Reliability:</strong> On-time performance and service consistency</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">3. Cycling Infrastructure</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Bike Lanes:</strong> Dedicated cycling infrastructure and protected bike lanes</li>
                <li><strong>Bike Parking:</strong> Secure bicycle storage facilities</li>
                <li><strong>Bike Sharing:</strong> Availability of public bike-sharing programs</li>
                <li><strong>Terrain:</strong> Topography and gradient considerations for cycling</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Commute Analysis Components</h3>
              
              <h4 className="text-xl font-medium mb-3">Travel Time Comparison</h4>
              <p className="mb-4">
                Understanding different commute options helps in making informed transportation decisions:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Driving Time:</strong> Door-to-door travel time including parking</li>
                <li><strong>Public Transit:</strong> Total journey time including walking to/from stations</li>
                <li><strong>Cycling Time:</strong> Direct cycling route considering bike infrastructure</li>
                <li><strong>Walking Time:</strong> Pedestrian route for shorter distances</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Cost Analysis</h4>
              <p className="mb-4">
                Transportation costs vary significantly between different modes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Driving Costs:</strong> Fuel, parking fees, vehicle maintenance, and insurance</li>
                <li><strong>Public Transit:</strong> Monthly passes, daily tickets, and transfer fees</li>
                <li><strong>Cycling Costs:</strong> Bike maintenance, safety equipment, and storage</li>
                <li><strong>Walking:</strong> Minimal costs, primarily footwear and weather protection</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Environmental Impact</h3>
              <p className="mb-4">
                Transportation choices significantly impact carbon footprint and air quality:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Carbon Emissions:</strong> CO2 output per kilometer for different transport modes</li>
                <li><strong>Air Quality:</strong> Local pollution levels and health impacts</li>
                <li><strong>Noise Pollution:</strong> Traffic noise and its effect on quality of life</li>
                <li><strong>Urban Heat Island:</strong> How transportation infrastructure affects local temperature</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Amenity Access and Daily Errands</h3>
              
              <h4 className="text-xl font-medium mb-3">Essential Services</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Grocery Stores:</strong> Supermarkets, fresh food markets, and convenience stores</li>
                <li><strong>Healthcare:</strong> Medical centers, pharmacies, and emergency services</li>
                <li><strong>Banking:</strong> Bank branches, ATMs, and financial services</li>
                <li><strong>Education:</strong> Schools, libraries, and educational facilities</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Lifestyle Amenities</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Dining and Entertainment:</strong> Restaurants, cafes, bars, and cultural venues</li>
                <li><strong>Recreation:</strong> Parks, gyms, sports facilities, and community centers</li>
                <li><strong>Shopping:</strong> Retail stores, shopping centers, and specialty shops</li>
                <li><strong>Services:</strong> Post office, dry cleaning, hair salons, and repair services</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Health and Wellness Benefits</h3>
              
              <h4 className="text-xl font-medium mb-3">Physical Health</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Daily Exercise:</strong> Incorporating physical activity into daily routines</li>
                <li><strong>Cardiovascular Health:</strong> Benefits of regular walking and cycling</li>
                <li><strong>Weight Management:</strong> Active transportation and calorie burning</li>
                <li><strong>Air Quality:</strong> Reduced exposure to vehicle emissions in walkable areas</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Mental Health</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Stress Reduction:</strong> Lower stress from reduced driving and traffic</li>
                <li><strong>Social Interaction:</strong> Increased community engagement and social connections</li>
                <li><strong>Mental Stimulation:</strong> Varied environments and sensory experiences</li>
                <li><strong>Work-Life Balance:</strong> Active commuting as transition time</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Economic Considerations</h3>
              
              <h4 className="text-xl font-medium mb-3">Property Values</h4>
              <p className="mb-4">
                Walkability significantly impacts real estate values:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Premium for Walkability:</strong> Higher property values in walkable neighborhoods</li>
                <li><strong>Transit-Oriented Development:</strong> Properties near public transport command higher prices</li>
                <li><strong>Future Growth:</strong> Walkable areas often see stronger appreciation</li>
                <li><strong>Rental Demand:</strong> Higher rental yields in well-connected locations</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Cost Savings</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Transportation Costs:</strong> Reduced need for car ownership and maintenance</li>
                <li><strong>Parking Savings:</strong> Lower parking costs and fees</li>
                <li><strong>Health Costs:</strong> Reduced healthcare expenses from active lifestyle</li>
                <li><strong>Time Value:</strong> Productive use of commute time on public transport</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Technology and Smart Cities</h3>
              
              <h4 className="text-xl font-medium mb-3">Digital Integration</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Real-Time Transit:</strong> Apps providing live transport information</li>
                <li><strong>Route Planning:</strong> Multi-modal journey planning tools</li>
                <li><strong>Bike Sharing Apps:</strong> Digital access to shared mobility options</li>
                <li><strong>Walkability Apps:</strong> Tools for finding walkable routes and amenities</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Future Developments</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Autonomous Vehicles:</strong> Impact on walkability and urban design</li>
                <li><strong>Electric Mobility:</strong> E-bikes, e-scooters, and sustainable transport</li>
                <li><strong>Smart Infrastructure:</strong> Intelligent traffic systems and pedestrian priority</li>
                <li><strong>15-Minute Cities:</strong> Urban planning for local accessibility</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Assessment Tips</h3>
              
              <h4 className="text-xl font-medium mb-3">Site Visits</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Different Times:</strong> Visit during various times of day and week</li>
                <li><strong>Weather Conditions:</strong> Experience walkability in different weather</li>
                <li><strong>Actual Walking:</strong> Walk to nearby amenities and transport stops</li>
                <li><strong>Safety Assessment:</strong> Evaluate personal safety and comfort levels</li>
              </ul>

              <h4 className="text-xl font-medium mb-3">Research Methods</h4>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Online Tools:</strong> Use walkability websites and mapping services</li>
                <li><strong>Local Resources:</strong> Check council websites for transport and development plans</li>
                <li><strong>Community Feedback:</strong> Read local forums and resident reviews</li>
                <li><strong>Professional Assessment:</strong> Consider hiring location specialists for detailed analysis</li>
              </ul>

              <div className="bg-blue-100 border border-blue-200 p-6 rounded-lg mt-8">
                <h4 className="font-medium text-blue-900 mb-2">Key Takeaway</h4>
                <p className="text-blue-800">
                  Walkability and commute convenience significantly impact quality of life, health, finances, and 
                  property values. A comprehensive assessment considering all transportation modes, amenity access, 
                  and future development plans helps make informed location decisions that align with lifestyle 
                  preferences and long-term goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}