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
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { 
  Calculator, 
  Home, 
  Wrench, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  PieChart,
  BarChart3,
  Clock,
  Users,
  Lightbulb,
  FileText,
  BookOpen,
  Star,
  Target,
  Zap,
  Shield,
  Award
} from 'lucide-react'

interface RoomRenovation {
  id: string
  name: string
  selected: boolean
  size: number
  quality: 'basic' | 'mid-range' | 'high-end'
  items: RenovationItem[]
}

interface RenovationItem {
  id: string
  name: string
  selected: boolean
  baseCost: number
  laborMultiplier: number
  materialMultiplier: number
}

interface ProjectDetails {
  propertyType: string
  totalSquareFootage: number
  homeAge: number
  location: string
  timeline: string
  contractorType: string
  permitRequired: boolean
  notes: string
}

interface CostBreakdown {
  materials: number
  labor: number
  permits: number
  contingency: number
  total: number
}

const defaultRooms: RoomRenovation[] = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    selected: false,
    size: 150,
    quality: 'mid-range',
    items: [
      { id: 'cabinets', name: 'Cabinets', selected: true, baseCost: 8000, laborMultiplier: 1.5, materialMultiplier: 2.0 },
      { id: 'countertops', name: 'Countertops', selected: true, baseCost: 3000, laborMultiplier: 1.3, materialMultiplier: 1.8 },
      { id: 'appliances', name: 'Appliances', selected: true, baseCost: 5000, laborMultiplier: 1.2, materialMultiplier: 1.5 },
      { id: 'flooring', name: 'Flooring', selected: true, baseCost: 2500, laborMultiplier: 1.4, materialMultiplier: 1.6 },
      { id: 'plumbing', name: 'Plumbing', selected: false, baseCost: 2000, laborMultiplier: 2.0, materialMultiplier: 1.3 },
      { id: 'electrical', name: 'Electrical', selected: false, baseCost: 1500, laborMultiplier: 2.2, materialMultiplier: 1.2 },
      { id: 'painting', name: 'Painting', selected: true, baseCost: 800, laborMultiplier: 1.8, materialMultiplier: 1.1 }
    ]
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    selected: false,
    size: 50,
    quality: 'mid-range',
    items: [
      { id: 'vanity', name: 'Vanity & Sink', selected: true, baseCost: 1500, laborMultiplier: 1.4, materialMultiplier: 1.7 },
      { id: 'toilet', name: 'Toilet', selected: true, baseCost: 400, laborMultiplier: 1.3, materialMultiplier: 1.2 },
      { id: 'shower-tub', name: 'Shower/Tub', selected: true, baseCost: 2500, laborMultiplier: 1.8, materialMultiplier: 1.9 },
      { id: 'tiles', name: 'Tiles', selected: true, baseCost: 1200, laborMultiplier: 1.6, materialMultiplier: 1.5 },
      { id: 'fixtures', name: 'Fixtures', selected: true, baseCost: 800, laborMultiplier: 1.2, materialMultiplier: 1.4 },
      { id: 'ventilation', name: 'Ventilation', selected: false, baseCost: 300, laborMultiplier: 1.5, materialMultiplier: 1.3 }
    ]
  },
  {
    id: 'living-room',
    name: 'Living Room',
    selected: false,
    size: 200,
    quality: 'mid-range',
    items: [
      { id: 'flooring', name: 'Flooring', selected: true, baseCost: 3000, laborMultiplier: 1.4, materialMultiplier: 1.6 },
      { id: 'painting', name: 'Painting', selected: true, baseCost: 1000, laborMultiplier: 1.8, materialMultiplier: 1.1 },
      { id: 'lighting', name: 'Lighting', selected: false, baseCost: 800, laborMultiplier: 1.5, materialMultiplier: 1.3 },
      { id: 'windows', name: 'Windows', selected: false, baseCost: 2000, laborMultiplier: 1.3, materialMultiplier: 1.8 },
      { id: 'trim', name: 'Trim & Molding', selected: false, baseCost: 600, laborMultiplier: 1.7, materialMultiplier: 1.2 }
    ]
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    selected: false,
    size: 120,
    quality: 'mid-range',
    items: [
      { id: 'flooring', name: 'Flooring', selected: true, baseCost: 1800, laborMultiplier: 1.4, materialMultiplier: 1.6 },
      { id: 'painting', name: 'Painting', selected: true, baseCost: 600, laborMultiplier: 1.8, materialMultiplier: 1.1 },
      { id: 'closet', name: 'Closet System', selected: false, baseCost: 1200, laborMultiplier: 1.3, materialMultiplier: 1.5 },
      { id: 'lighting', name: 'Lighting', selected: false, baseCost: 400, laborMultiplier: 1.5, materialMultiplier: 1.3 }
    ]
  },
  {
    id: 'basement',
    name: 'Basement',
    selected: false,
    size: 400,
    quality: 'mid-range',
    items: [
      { id: 'framing', name: 'Framing', selected: false, baseCost: 2000, laborMultiplier: 1.6, materialMultiplier: 1.3 },
      { id: 'insulation', name: 'Insulation', selected: false, baseCost: 1500, laborMultiplier: 1.4, materialMultiplier: 1.2 },
      { id: 'drywall', name: 'Drywall', selected: false, baseCost: 1800, laborMultiplier: 1.5, materialMultiplier: 1.1 },
      { id: 'flooring', name: 'Flooring', selected: false, baseCost: 2500, laborMultiplier: 1.4, materialMultiplier: 1.6 },
      { id: 'electrical', name: 'Electrical', selected: false, baseCost: 2000, laborMultiplier: 2.2, materialMultiplier: 1.2 },
      { id: 'plumbing', name: 'Plumbing', selected: false, baseCost: 1500, laborMultiplier: 2.0, materialMultiplier: 1.3 }
    ]
  }
]


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Renovation Cost Estimator',
    description: 'Estimate costs for property renovations and improvements. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function RenovationCostEstimator() {
  const [rooms, setRooms] = useState<RoomRenovation[]>(defaultRooms)
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    propertyType: 'single-family',
    totalSquareFootage: 1500,
    homeAge: 20,
    location: 'suburban',
    timeline: '3-6-months',
    contractorType: 'general',
    permitRequired: false,
    notes: ''
  })
  const [results, setResults] = useState<CostBreakdown | null>(null)
  const [activeTab, setActiveTab] = useState('calculator')

  const qualityMultipliers = {
    basic: { material: 0.7, labor: 0.8 },
    'mid-range': { material: 1.0, labor: 1.0 },
    'high-end': { material: 1.8, labor: 1.3 }
  }

  const locationMultipliers = {
    urban: 1.3,
    suburban: 1.0,
    rural: 0.8
  }

  const contractorMultipliers = {
    diy: 0.3,
    handyman: 0.6,
    general: 1.0,
    specialist: 1.2
  }

  const calculateRenovationCosts = () => {
    let totalMaterials = 0
    let totalLabor = 0

    const selectedRooms = rooms.filter(room => room.selected)
    
    selectedRooms.forEach(room => {
      const qualityMult = qualityMultipliers[room.quality]
      const selectedItems = room.items.filter(item => item.selected)
      
      selectedItems.forEach(item => {
        const sizeMultiplier = room.size / 100 // Base size of 100 sq ft
        const materialCost = item.baseCost * item.materialMultiplier * qualityMult.material * sizeMultiplier
        const laborCost = item.baseCost * item.laborMultiplier * qualityMult.labor * sizeMultiplier
        
        totalMaterials += materialCost
        totalLabor += laborCost
      })
    })

    // Apply location and contractor multipliers
    const locationMult = locationMultipliers[projectDetails.location as keyof typeof locationMultipliers]
    const contractorMult = contractorMultipliers[projectDetails.contractorType as keyof typeof contractorMultipliers]
    
    totalMaterials *= locationMult
    totalLabor *= contractorMult

    // Calculate permits and contingency
    const permits = projectDetails.permitRequired ? (totalMaterials + totalLabor) * 0.02 : 0
    const contingency = (totalMaterials + totalLabor + permits) * 0.15

    const total = totalMaterials + totalLabor + permits + contingency

    setResults({
      materials: totalMaterials,
      labor: totalLabor,
      permits,
      contingency,
      total
    })
  }

  const updateRoom = (roomId: string, updates: Partial<RoomRenovation>) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId ? { ...room, ...updates } : room
    ))
  }

  const updateRoomItem = (roomId: string, itemId: string, selected: boolean) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? {
            ...room,
            items: room.items.map(item => 
              item.id === itemId ? { ...item, selected } : item
            )
          }
        : room
    ))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'basic': return 'bg-green-100 text-green-800'
      case 'mid-range': return 'bg-blue-100 text-blue-800'
      case 'high-end': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-orange-600 rounded-xl">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Renovation Cost Estimator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your home renovation project with detailed cost estimates by room, materials, and quality level
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Results
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Guide
            </TabsTrigger>
            <TabsTrigger value="article" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Article
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Project Details */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Project Details
                  </CardTitle>
                  <CardDescription>
                    Basic information about your renovation project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select 
                      value={projectDetails.propertyType} 
                      onValueChange={(value) => setProjectDetails(prev => ({ ...prev, propertyType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="totalSquareFootage">Total Square Footage</Label>
                    <Input
                      id="totalSquareFootage"
                      type="number"
                      value={projectDetails.totalSquareFootage}
                      onChange={(e) => setProjectDetails(prev => ({ 
                        ...prev, 
                        totalSquareFootage: parseInt(e.target.value) || 0 
                      }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="homeAge">Home Age (years)</Label>
                    <Input
                      id="homeAge"
                      type="number"
                      value={projectDetails.homeAge}
                      onChange={(e) => setProjectDetails(prev => ({ 
                        ...prev, 
                        homeAge: parseInt(e.target.value) || 0 
                      }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location Type</Label>
                    <Select 
                      value={projectDetails.location} 
                      onValueChange={(value) => setProjectDetails(prev => ({ ...prev, location: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban (+30% cost)</SelectItem>
                        <SelectItem value="suburban">Suburban (standard)</SelectItem>
                        <SelectItem value="rural">Rural (-20% cost)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select 
                      value={projectDetails.timeline} 
                      onValueChange={(value) => setProjectDetails(prev => ({ ...prev, timeline: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="12-plus-months">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contractorType">Contractor Type</Label>
                    <Select 
                      value={projectDetails.contractorType} 
                      onValueChange={(value) => setProjectDetails(prev => ({ ...prev, contractorType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diy">DIY (-70% labor)</SelectItem>
                        <SelectItem value="handyman">Handyman (-40% labor)</SelectItem>
                        <SelectItem value="general">General Contractor</SelectItem>
                        <SelectItem value="specialist">Specialist (+20% labor)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="permitRequired"
                      checked={projectDetails.permitRequired}
                      onCheckedChange={(checked) => 
                        setProjectDetails(prev => ({ ...prev, permitRequired: checked as boolean }))
                      }
                    />
                    <Label htmlFor="permitRequired">Permits Required (+2% cost)</Label>
                  </div>

                  <div>
                    <Label htmlFor="notes">Project Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Additional details about your renovation..."
                      value={projectDetails.notes}
                      onChange={(e) => setProjectDetails(prev => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Room Selection */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Room-by-Room Selection
                  </CardTitle>
                  <CardDescription>
                    Select rooms to renovate and customize the scope of work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {rooms.map((room) => (
                      <div key={room.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={room.selected}
                              onCheckedChange={(checked) => 
                                updateRoom(room.id, { selected: checked as boolean })
                              }
                            />
                            <h3 className="text-lg font-semibold">{room.name}</h3>
                            <Badge className={getQualityColor(room.quality)}>
                              {room.quality.replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>

                        {room.selected && (
                          <div className="space-y-4 ml-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Room Size (sq ft)</Label>
                                <Input
                                  type="number"
                                  value={room.size}
                                  onChange={(e) => 
                                    updateRoom(room.id, { size: parseInt(e.target.value) || 0 })
                                  }
                                />
                              </div>
                              <div>
                                <Label>Quality Level</Label>
                                <Select 
                                  value={room.quality} 
                                  onValueChange={(value: 'basic' | 'mid-range' | 'high-end') => 
                                    updateRoom(room.id, { quality: value })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="basic">Basic (-30% materials, -20% labor)</SelectItem>
                                    <SelectItem value="mid-range">Mid-Range (standard pricing)</SelectItem>
                                    <SelectItem value="high-end">High-End (+80% materials, +30% labor)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-2 block">Renovation Items</Label>
                              <div className="grid grid-cols-2 gap-2">
                                {room.items.map((item) => (
                                  <div key={item.id} className="flex items-center space-x-2">
                                    <Checkbox
                                      checked={item.selected}
                                      onCheckedChange={(checked) => 
                                        updateRoomItem(room.id, item.id, checked as boolean)
                                      }
                                    />
                                    <Label className="text-sm">{item.name}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button 
                      onClick={calculateRenovationCosts} 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      size="lg"
                    >
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculate Renovation Costs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            {results ? (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Cost</p>
                          <p className="text-2xl font-bold text-orange-600">
                            {formatCurrency(results.total)}
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-orange-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Materials</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {formatCurrency(results.materials)}
                          </p>
                        </div>
                        <Wrench className="h-8 w-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Labor</p>
                          <p className="text-2xl font-bold text-green-600">
                            {formatCurrency(results.labor)}
                          </p>
                        </div>
                        <Users className="h-8 w-8 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Contingency</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatCurrency(results.contingency)}
                          </p>
                        </div>
                        <Shield className="h-8 w-8 text-purple-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Cost Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Materials</span>
                          <span className="text-sm font-bold">{formatCurrency(results.materials)}</span>
                        </div>
                        <Progress 
                          value={(results.materials / results.total) * 100} 
                          className="h-2"
                        />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Labor</span>
                          <span className="text-sm font-bold">{formatCurrency(results.labor)}</span>
                        </div>
                        <Progress 
                          value={(results.labor / results.total) * 100} 
                          className="h-2"
                        />
                        
                        {results.permits > 0 && (
                          <>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Permits</span>
                              <span className="text-sm font-bold">{formatCurrency(results.permits)}</span>
                            </div>
                            <Progress 
                              value={(results.permits / results.total) * 100} 
                              className="h-2"
                            />
                          </>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Contingency (15%)</span>
                          <span className="text-sm font-bold">{formatCurrency(results.contingency)}</span>
                        </div>
                        <Progress 
                          value={(results.contingency / results.total) * 100} 
                          className="h-2"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Project Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Selected Rooms:</span>
                          <span className="text-sm font-medium">
                            {rooms.filter(room => room.selected).length}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Total Area:</span>
                          <span className="text-sm font-medium">
                            {rooms.filter(room => room.selected).reduce((sum, room) => sum + room.size, 0)} sq ft
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Cost per Sq Ft:</span>
                          <span className="text-sm font-medium">
                            {formatCurrency(results.total / rooms.filter(room => room.selected).reduce((sum, room) => sum + room.size, 0))}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Timeline:</span>
                          <span className="text-sm font-medium">
                            {projectDetails.timeline.replace('-', ' to ')}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Contractor Type:</span>
                          <span className="text-sm font-medium capitalize">
                            {projectDetails.contractorType.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Room-by-Room Costs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Room-by-Room Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {rooms.filter(room => room.selected).map((room) => {
                        const qualityMult = qualityMultipliers[room.quality]
                        const selectedItems = room.items.filter(item => item.selected)
                        
                        let roomMaterials = 0
                        let roomLabor = 0
                        
                        selectedItems.forEach(item => {
                          const sizeMultiplier = room.size / 100
                          roomMaterials += item.baseCost * item.materialMultiplier * qualityMult.material * sizeMultiplier
                          roomLabor += item.baseCost * item.laborMultiplier * qualityMult.labor * sizeMultiplier
                        })
                        
                        const locationMult = locationMultipliers[projectDetails.location as keyof typeof locationMultipliers]
                        const contractorMult = contractorMultipliers[projectDetails.contractorType as keyof typeof contractorMultipliers]
                        
                        roomMaterials *= locationMult
                        roomLabor *= contractorMult
                        
                        const roomTotal = roomMaterials + roomLabor
                        
                        return (
                          <div key={room.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{room.name}</h3>
                                <Badge className={getQualityColor(room.quality)}>
                                  {room.quality.replace('-', ' ')}
                                </Badge>
                                <span className="text-sm text-gray-500">({room.size} sq ft)</span>
                              </div>
                              <span className="font-bold text-lg">{formatCurrency(roomTotal)}</span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Materials: </span>
                                <span className="font-medium">{formatCurrency(roomMaterials)}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Labor: </span>
                                <span className="font-medium">{formatCurrency(roomLabor)}</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 text-xs text-gray-500">
                              Items: {selectedItems.map(item => item.name).join(', ')}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-green-600 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Cost-Saving Tips
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Consider DIY for painting and simple installations</li>
                          <li>• Shop for materials during sales seasons</li>
                          <li>• Get multiple contractor quotes</li>
                          <li>• Bundle projects to negotiate better rates</li>
                          <li>• Consider mid-range finishes for best value</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-orange-600 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Important Considerations
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Add 15-20% contingency for unexpected issues</li>
                          <li>• Factor in temporary living arrangements</li>
                          <li>• Check local permit requirements</li>
                          <li>• Consider seasonal timing for better pricing</li>
                          <li>• Plan for material delivery and storage</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No Results Yet</h3>
                  <p className="text-gray-500 mb-6">
                    Configure your renovation project and calculate costs to see detailed results here.
                  </p>
                  <Button 
                    onClick={() => setActiveTab('calculator')}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Go to Calculator
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Guide Tab */}
          <TabsContent value="guide" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Planning Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Renovation Planning Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Define Your Goals</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Clearly outline what you want to achieve with your renovation.
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Improve functionality</li>
                      <li>• Increase home value</li>
                      <li>• Update aesthetics</li>
                      <li>• Fix structural issues</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">2. Set Your Budget</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Determine how much you can realistically spend.
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Include 15-20% contingency</li>
                      <li>• Consider financing options</li>
                      <li>• Factor in temporary living costs</li>
                      <li>• Plan for permit fees</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">3. Research and Plan</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Gather information and create detailed plans.
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Get multiple quotes</li>
                      <li>• Check contractor references</li>
                      <li>• Obtain necessary permits</li>
                      <li>• Create realistic timeline</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Factors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Understanding Renovation Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Material Quality Levels</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Basic</span>
                        <Badge className="bg-green-100 text-green-800">-30% materials</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mid-Range</span>
                        <Badge className="bg-blue-100 text-blue-800">Standard pricing</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">High-End</span>
                        <Badge className="bg-purple-100 text-purple-800">+80% materials</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Location Impact</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Urban Areas</span>
                        <Badge variant="outline">+30% cost</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Suburban</span>
                        <Badge variant="outline">Standard cost</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Rural Areas</span>
                        <Badge variant="outline">-20% cost</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Labor Options</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">DIY</span>
                        <Badge variant="outline">-70% labor</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Handyman</span>
                        <Badge variant="outline">-40% labor</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">General Contractor</span>
                        <Badge variant="outline">Standard labor</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Specialist</span>
                        <Badge variant="outline">+20% labor</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Room-Specific Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Room-Specific Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Kitchen Renovations</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Cabinets are typically 35-40% of budget</li>
                      <li>• Consider cabinet refacing vs. replacement</li>
                      <li>• Plan for electrical and plumbing updates</li>
                      <li>• Factor in appliance delivery timing</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Bathroom Renovations</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Waterproofing is critical</li>
                      <li>• Tile work requires skilled labor</li>
                      <li>• Consider ventilation requirements</li>
                      <li>• Plan for fixture rough-in locations</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Basement Finishing</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Address moisture issues first</li>
                      <li>• Plan for adequate ceiling height</li>
                      <li>• Consider egress window requirements</li>
                      <li>• Factor in HVAC extensions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Expert Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Money-Saving Strategies
                    </h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Do demolition yourself</li>
                      <li>• Buy materials during off-season sales</li>
                      <li>• Consider open-box or discontinued items</li>
                      <li>• Bundle multiple projects</li>
                      <li>• Handle painting and simple installations</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Timeline Management
                    </h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Order materials 2-3 weeks in advance</li>
                      <li>• Schedule inspections early</li>
                      <li>• Plan for weather delays</li>
                      <li>• Have backup contractors identified</li>
                      <li>• Create realistic milestone dates</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Risk Management
                    </h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Always include contingency budget</li>
                      <li>• Verify contractor insurance</li>
                      <li>• Document everything with photos</li>
                      <li>• Keep detailed expense records</li>
                      <li>• Plan for temporary living arrangements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Article Tab */}
          <TabsContent value="article" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Complete Guide to Home Renovation Cost Planning
                </CardTitle>
                <CardDescription>
                  Master the art of renovation budgeting with expert strategies and insider tips
                </CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Renovation Costs</h3>
                    <p className="text-gray-700 mb-4">
                      Home renovation costs can vary dramatically based on scope, materials, labor, and location. 
                      Understanding the key cost drivers helps you make informed decisions and avoid budget overruns.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Major Cost Categories</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Materials (30-40% of budget)</li>
                          <li>• Labor (35-45% of budget)</li>
                          <li>• Permits & inspections (1-3%)</li>
                          <li>• Contingency (10-20%)</li>
                          <li>• Design & planning (5-10%)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Cost Per Square Foot Ranges</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Basic renovation: $15-30/sq ft</li>
                          <li>• Mid-range: $30-60/sq ft</li>
                          <li>• High-end: $60-150/sq ft</li>
                          <li>• Luxury: $150+ per sq ft</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Room-by-Room Cost Breakdown</h3>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Kitchen Renovations</h4>
                        <p className="text-gray-700 mb-3">
                          Kitchens typically offer the best return on investment but require the highest upfront costs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium mb-2">Budget Kitchen ($15,000-25,000)</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Laminate countertops</li>
                              <li>• Stock cabinets</li>
                              <li>• Basic appliances</li>
                              <li>• Vinyl or laminate flooring</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium mb-2">Mid-Range Kitchen ($25,000-50,000)</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Quartz countertops</li>
                              <li>• Semi-custom cabinets</li>
                              <li>• Energy-efficient appliances</li>
                              <li>• Hardwood or tile flooring</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium mb-2">High-End Kitchen ($50,000+)</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Natural stone countertops</li>
                              <li>• Custom cabinetry</li>
                              <li>• Professional appliances</li>
                              <li>• Premium flooring materials</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Bathroom Renovations</h4>
                        <p className="text-gray-700 mb-3">
                          Bathroom renovations vary widely based on size, fixtures, and plumbing complexity.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Half Bath ($3,000-8,000)</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• New vanity and mirror</li>
                              <li>• Updated fixtures</li>
                              <li>• Fresh paint and flooring</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Full Bath ($8,000-25,000)</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Tub/shower replacement</li>
                              <li>• New vanity and toilet</li>
                              <li>• Tile work and fixtures</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Living Areas & Bedrooms</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Flooring Costs</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Carpet: $2-8 per sq ft</li>
                              <li>• Laminate: $3-7 per sq ft</li>
                              <li>• Hardwood: $6-15 per sq ft</li>
                              <li>• Tile: $5-20 per sq ft</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Other Improvements</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Paint: $1-3 per sq ft</li>
                              <li>• Lighting: $100-500 per fixture</li>
                              <li>• Windows: $300-800 each</li>
                              <li>• Built-ins: $500-2,000 per linear ft</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Renovation Budget</h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-yellow-900 mb-2">The 20% Rule</h4>
                      <p className="text-yellow-800 text-sm">
                        Always add 20% to your initial budget estimate for unexpected costs, change orders, 
                        and material price fluctuations. This contingency fund is essential for project success.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Budget Allocation Strategy</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Labor</span>
                            <span className="text-sm text-gray-600">35-45%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Materials</span>
                            <span className="text-sm text-gray-600">30-40%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Contingency</span>
                            <span className="text-sm text-gray-600">15-20%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Permits & Fees</span>
                            <span className="text-sm text-gray-600">2-5%</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost-Saving Strategies</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• <strong>DIY where appropriate:</strong> Painting, demo, simple installations</li>
                          <li>• <strong>Shop sales:</strong> Buy materials during off-season or clearance</li>
                          <li>• <strong>Reuse existing:</strong> Refinish cabinets instead of replacing</li>
                          <li>• <strong>Phased approach:</strong> Complete renovation in stages</li>
                          <li>• <strong>Standard sizes:</strong> Avoid custom dimensions when possible</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Choosing the Right Contractor</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">General Contractor</h4>
                        <p className="text-sm text-blue-800 mb-2">Best for: Large, multi-trade projects</p>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Manages all subcontractors</li>
                          <li>• Handles permits and inspections</li>
                          <li>• Higher cost but less hassle</li>
                          <li>• Typically 15-25% markup</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Specialist Contractors</h4>
                        <p className="text-sm text-green-800 mb-2">Best for: Single-trade projects</p>
                        <ul className="text-xs text-green-700 space-y-1">
                          <li>• Expertise in specific areas</li>
                          <li>• Lower overhead costs</li>
                          <li>• You manage coordination</li>
                          <li>• 10-20% cost savings potential</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">DIY Approach</h4>
                        <p className="text-sm text-purple-800 mb-2">Best for: Simple, non-structural work</p>
                        <ul className="text-xs text-purple-700 space-y-1">
                          <li>• Significant labor savings</li>
                          <li>• Complete control over timeline</li>
                          <li>• Requires time and skills</li>
                          <li>• 30-50% cost reduction</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2">Contractor Selection Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>✓ Licensed and insured</li>
                          <li>✓ Local references and portfolio</li>
                          <li>✓ Detailed written estimates</li>
                          <li>✓ Clear timeline and milestones</li>
                        </ul>
                        <ul className="text-sm text-red-800 space-y-1">
                          <li>✓ Material specifications included</li>
                          <li>✓ Change order procedures defined</li>
                          <li>✓ Warranty terms specified</li>
                          <li>✓ Payment schedule reasonable</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Permits and Regulations</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">When Permits Are Required</h4>
                        <div className="space-y-3">
                          <div className="bg-red-50 p-3 rounded">
                            <h5 className="font-medium text-red-900 mb-1">Always Required</h5>
                            <ul className="text-sm text-red-800 space-y-1">
                              <li>• Structural changes</li>
                              <li>• Electrical work</li>
                              <li>• Plumbing modifications</li>
                              <li>• HVAC installations</li>
                              <li>• Room additions</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <h5 className="font-medium text-yellow-900 mb-1">Sometimes Required</h5>
                            <ul className="text-sm text-yellow-800 space-y-1">
                              <li>• Window replacements</li>
                              <li>• Deck construction</li>
                              <li>• Fence installation</li>
                              <li>• Shed construction</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Permit Process & Costs</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded">
                            <h5 className="font-medium text-blue-900 mb-1">Typical Timeline</h5>
                            <ul className="text-sm text-blue-800 space-y-1">
                              <li>• Application: 1-2 weeks</li>
                              <li>• Review process: 2-6 weeks</li>
                              <li>• Inspections: Throughout project</li>
                              <li>• Final approval: 1-2 weeks</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-3 rounded">
                            <h5 className="font-medium text-green-900 mb-1">Cost Estimates</h5>
                            <ul className="text-sm text-green-800 space-y-1">
                              <li>• Building permit: $100-2,000</li>
                              <li>• Electrical permit: $50-200</li>
                              <li>• Plumbing permit: $50-300</li>
                              <li>• Plan review fees: $200-1,000</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeline and Project Management</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Typical Renovation Timelines</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Small Projects (1-4 weeks)</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Painting and flooring</li>
                            <li>• Bathroom refresh</li>
                            <li>• Kitchen cabinet refacing</li>
                            <li>• Fixture updates</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Large Projects (2-6 months)</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Full kitchen renovation</li>
                            <li>• Master bathroom remodel</li>
                            <li>• Room additions</li>
                            <li>• Whole house renovations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Phases</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <span className="text-sm font-medium">Planning & Design (10-15%)</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <span className="text-sm font-medium">Permits & Approvals (5-10%)</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                            <span className="text-sm font-medium">Demolition (5-10%)</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                            <span className="text-sm font-medium">Structural Work (15-25%)</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                            <span className="text-sm font-medium">Systems (Electrical/Plumbing) (20-30%)</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
                            <span className="text-sm font-medium">Finishing Work (25-35%)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Managing Delays</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• <strong>Weather delays:</strong> Add 10-20% to outdoor work timelines</li>
                          <li>• <strong>Material delays:</strong> Order materials 2-4 weeks in advance</li>
                          <li>• <strong>Permit delays:</strong> Submit applications early in planning phase</li>
                          <li>• <strong>Change orders:</strong> Limit changes once work begins</li>
                          <li>• <strong>Inspection delays:</strong> Schedule inspections in advance</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Renovation Mistakes</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-red-900 mb-3">Budget Mistakes</h4>
                        <div className="space-y-3">
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">Underestimating Costs</h5>
                            <p className="text-sm text-red-800">Not including permits, disposal fees, or temporary living expenses</p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">No Contingency Fund</h5>
                            <p className="text-sm text-red-800">Failing to budget for unexpected issues or change orders</p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">Scope Creep</h5>
                            <p className="text-sm text-red-800">Adding features and upgrades without adjusting budget</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-900 mb-3">Planning Mistakes</h4>
                        <div className="space-y-3">
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">Poor Contractor Vetting</h5>
                            <p className="text-sm text-red-800">Not checking licenses, insurance, or references thoroughly</p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">Inadequate Planning</h5>
                            <p className="text-sm text-red-800">Starting work without detailed plans or material specifications</p>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <h5 className="font-medium text-red-900">Ignoring Building Codes</h5>
                            <p className="text-sm text-red-800">Skipping permits or not following local regulations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximizing Your Investment</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-900 mb-3">High-ROI Renovations</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium">Minor Kitchen Remodel</span>
                            <span className="text-sm text-green-700 font-bold">85-95% ROI</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium">Bathroom Remodel</span>
                            <span className="text-sm text-green-700 font-bold">70-80% ROI</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium">Deck Addition</span>
                            <span className="text-sm text-green-700 font-bold">75-85% ROI</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium">Entry Door Replacement</span>
                            <span className="text-sm text-green-700 font-bold">70-90% ROI</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span className="text-sm font-medium">Garage Door Replacement</span>
                            <span className="text-sm text-green-700 font-bold">85-95% ROI</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Value-Adding Features</h4>
                        <ul className="text-sm text-blue-800 space-y-2">
                          <li>• <strong>Energy efficiency:</strong> Insulation, windows, HVAC upgrades</li>
                          <li>• <strong>Smart home features:</strong> Thermostats, security systems</li>
                          <li>• <strong>Storage solutions:</strong> Built-in organizers, closet systems</li>
                          <li>• <strong>Outdoor living:</strong> Patios, landscaping, outdoor kitchens</li>
                          <li>• <strong>Curb appeal:</strong> Siding, roofing, front yard improvements</li>
                          <li>• <strong>Additional space:</strong> Finished basements, attic conversions</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                      <ul className="text-gray-700 space-y-2">
                        <li>• <strong>Plan thoroughly:</strong> Detailed planning prevents costly mistakes and delays</li>
                        <li>• <strong>Budget realistically:</strong> Include all costs plus 20% contingency</li>
                        <li>• <strong>Choose contractors carefully:</strong> Verify credentials and get multiple quotes</li>
                        <li>• <strong>Understand permits:</strong> Factor permit costs and timelines into your project</li>
                        <li>• <strong>Focus on ROI:</strong> Prioritize renovations that add the most value</li>
                        <li>• <strong>Manage expectations:</strong> Renovations take longer and cost more than expected</li>
                        <li>• <strong>Document everything:</strong> Keep detailed records of all expenses and changes</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}