'use client'

import React, { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Calculator, 
  Truck, 
  Package, 
  Home, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Shield, 
  Clock, 
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Sofa,
  Bed,
  ChefHat,
  Monitor,
  Warehouse
} from 'lucide-react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

// Types
interface RoomInventory {
  id: string
  name: string
  icon: React.ElementType
  items: InventoryItem[]
}

interface InventoryItem {
  id: string
  name: string
  quantity: number
  weight: number
  fragile: boolean
  valuable: boolean
}

interface MoveDetails {
  moveType: string
  distance: number
  fromZip: string
  toZip: string
  moveDate: string
  flexibility: string
  homeSize: string
  accessDifficulty: string
}

interface ServiceOptions {
  packingService: string
  loadingService: string
  storageNeeded: boolean
  storageDuration: number
  insuranceLevel: string
  specialtyItems: string[]
  disassemblyService: boolean
  cleaningService: boolean
}

interface MovingEstimate {
  totalCost: number
  baseCost: number
  packingCost: number
  laborCost: number
  materialsCost: number
  insuranceCost: number
  storageCost: number
  specialtyCost: number
  additionalServicesCost: number
  timeline: number
  weight: number
  recommendations: string[]
  costBreakdown: {
    [key: string]: number
  }
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C']


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Moving Cost Estimator',
    description: 'Estimate costs for relocating to a new property. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function MovingCostEstimator() {
  const [moveDetails, setMoveDetails] = useState<MoveDetails>({
    moveType: 'local',
    distance: 50,
    fromZip: '',
    toZip: '',
    moveDate: '',
    flexibility: 'flexible',
    homeSize: '2-bedroom',
    accessDifficulty: 'easy'
  })

  const [serviceOptions, setServiceOptions] = useState<ServiceOptions>({
    packingService: 'partial',
    loadingService: 'full-service',
    storageNeeded: false,
    storageDuration: 1,
    insuranceLevel: 'basic',
    specialtyItems: [],
    disassemblyService: false,
    cleaningService: false
  })

  const [rooms, setRooms] = useState<RoomInventory[]>([
    {
      id: 'living-room',
      name: 'Living Room',
      icon: Sofa,
      items: [
        { id: 'sofa', name: 'Sofa/Couch', quantity: 1, weight: 150, fragile: false, valuable: false },
        { id: 'coffee-table', name: 'Coffee Table', quantity: 1, weight: 50, fragile: false, valuable: false },
        { id: 'tv', name: 'TV', quantity: 1, weight: 40, fragile: true, valuable: true },
        { id: 'bookshelf', name: 'Bookshelf', quantity: 1, weight: 80, fragile: false, valuable: false }
      ]
    }
  ])

  const [results, setResults] = useState<MovingEstimate | null>(null)

  const roomTypes = [
    { id: 'living-room', name: 'Living Room', icon: Sofa },
    { id: 'bedroom', name: 'Bedroom', icon: Bed },
    { id: 'kitchen', name: 'Kitchen', icon: ChefHat },
    { id: 'dining-room', name: 'Dining Room', icon: Home },
    { id: 'office', name: 'Office', icon: Monitor },
    { id: 'garage', name: 'Garage', icon: Warehouse },
    { id: 'basement', name: 'Basement', icon: Home },
    { id: 'attic', name: 'Attic', icon: Home }
  ]

  const commonItems = {
    'living-room': [
      { name: 'Sofa/Couch', weight: 150, fragile: false, valuable: false },
      { name: 'Coffee Table', weight: 50, fragile: false, valuable: false },
      { name: 'TV', weight: 40, fragile: true, valuable: true },
      { name: 'Entertainment Center', weight: 120, fragile: false, valuable: false },
      { name: 'Bookshelf', weight: 80, fragile: false, valuable: false },
      { name: 'Armchair', weight: 75, fragile: false, valuable: false },
      { name: 'Side Table', weight: 25, fragile: false, valuable: false }
    ],
    'bedroom': [
      { name: 'Bed (Queen)', weight: 150, fragile: false, valuable: false },
      { name: 'Mattress', weight: 80, fragile: false, valuable: false },
      { name: 'Dresser', weight: 120, fragile: false, valuable: false },
      { name: 'Nightstand', weight: 40, fragile: false, valuable: false },
      { name: 'Wardrobe', weight: 200, fragile: false, valuable: false },
      { name: 'Mirror', weight: 30, fragile: true, valuable: false }
    ],
    'kitchen': [
      { name: 'Refrigerator', weight: 300, fragile: false, valuable: true },
      { name: 'Dishwasher', weight: 150, fragile: false, valuable: true },
      { name: 'Microwave', weight: 50, fragile: true, valuable: false },
      { name: 'Kitchen Table', weight: 80, fragile: false, valuable: false },
      { name: 'Chairs (set of 4)', weight: 60, fragile: false, valuable: false },
      { name: 'Small Appliances', weight: 20, fragile: true, valuable: false }
    ],
    'dining-room': [
      { name: 'Dining Table', weight: 120, fragile: false, valuable: false },
      { name: 'Dining Chairs (set of 6)', weight: 90, fragile: false, valuable: false },
      { name: 'China Cabinet', weight: 180, fragile: false, valuable: true },
      { name: 'Buffet', weight: 100, fragile: false, valuable: false }
    ],
    'office': [
      { name: 'Desk', weight: 80, fragile: false, valuable: false },
      { name: 'Office Chair', weight: 40, fragile: false, valuable: false },
      { name: 'Computer', weight: 30, fragile: true, valuable: true },
      { name: 'Filing Cabinet', weight: 60, fragile: false, valuable: false },
      { name: 'Bookshelf', weight: 80, fragile: false, valuable: false }
    ],
    'garage': [
      { name: 'Workbench', weight: 150, fragile: false, valuable: false },
      { name: 'Tool Chest', weight: 100, fragile: false, valuable: true },
      { name: 'Lawn Mower', weight: 80, fragile: false, valuable: true },
      { name: 'Bicycles', weight: 30, fragile: false, valuable: false },
      { name: 'Storage Boxes', weight: 40, fragile: false, valuable: false }
    ]
  }

  const specialtyItems = [
    'Piano',
    'Pool Table',
    'Hot Tub',
    'Artwork/Antiques',
    'Wine Collection',
    'Gun Safe',
    'Exercise Equipment',
    'Motorcycle/ATV'
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const addRoom = () => {
    const newRoom: RoomInventory = {
      id: `room-${Date.now()}`,
      name: 'Living Room',
      icon: Sofa,
      items: []
    }
    setRooms([...rooms, newRoom])
  }

  const removeRoom = (roomId: string) => {
    setRooms(rooms.filter(room => room.id !== roomId))
  }

  const updateRoom = (roomId: string, updates: Partial<RoomInventory>) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, ...updates } : room
    ))
  }

  const addItemToRoom = (roomId: string, itemName: string) => {
    const roomType = rooms.find(r => r.id === roomId)?.name.toLowerCase().replace(' ', '-')
    const itemTemplate = commonItems[roomType as keyof typeof commonItems]?.find(
      item => item.name === itemName
    )
    
    if (itemTemplate) {
      const newItem: InventoryItem = {
        id: `item-${Date.now()}`,
        name: itemName,
        quantity: 1,
        weight: itemTemplate.weight,
        fragile: itemTemplate.fragile,
        valuable: itemTemplate.valuable
      }
      
      setRooms(rooms.map(room => 
        room.id === roomId 
          ? { ...room, items: [...room.items, newItem] }
          : room
      ))
    }
  }

  const updateItem = (roomId: string, itemId: string, updates: Partial<InventoryItem>) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? {
            ...room,
            items: room.items.map(item => 
              item.id === itemId ? { ...item, ...updates } : item
            )
          }
        : room
    ))
  }

  const removeItem = (roomId: string, itemId: string) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? { ...room, items: room.items.filter(item => item.id !== itemId) }
        : room
    ))
  }

  const calculateEstimate = () => {
    // Calculate total weight
    const totalWeight = rooms.reduce((total, room) => 
      total + room.items.reduce((roomTotal, item) => 
        roomTotal + (item.weight * item.quantity), 0
      ), 0
    )

    // Base cost calculation
    let baseCost = 0
    if (moveDetails.moveType === 'local') {
      baseCost = Math.max(500, totalWeight * 0.8 + moveDetails.distance * 2)
    } else if (moveDetails.moveType === 'long-distance') {
      baseCost = totalWeight * 1.2 + moveDetails.distance * 1.5
    } else {
      baseCost = totalWeight * 2.0 + 2000 // International base
    }

    // Apply multipliers
    const homeSizeMultipliers = {
      'studio': 0.6,
      '1-bedroom': 0.8,
      '2-bedroom': 1.0,
      '3-bedroom': 1.3,
      '4-bedroom': 1.6,
      '5-bedroom': 2.0
    }
    
    const accessMultipliers = {
      'easy': 1.0,
      'moderate': 1.2,
      'difficult': 1.5
    }

    const flexibilityMultipliers = {
      'flexible': 0.9,
      'somewhat-flexible': 1.0,
      'fixed': 1.2
    }

    baseCost *= homeSizeMultipliers[moveDetails.homeSize as keyof typeof homeSizeMultipliers] || 1.0
    baseCost *= accessMultipliers[moveDetails.accessDifficulty as keyof typeof accessMultipliers] || 1.0
    baseCost *= flexibilityMultipliers[moveDetails.flexibility as keyof typeof flexibilityMultipliers] || 1.0

    // Packing costs
    let packingCost = 0
    if (serviceOptions.packingService === 'full') {
      packingCost = totalWeight * 0.5
    } else if (serviceOptions.packingService === 'partial') {
      packingCost = totalWeight * 0.25
    }

    // Labor costs
    let laborCost = 0
    if (serviceOptions.loadingService === 'full-service') {
      laborCost = baseCost * 0.3
    } else if (serviceOptions.loadingService === 'loading-only') {
      laborCost = baseCost * 0.15
    }

    // Materials cost
    const materialsCost = totalWeight * 0.1 + rooms.length * 25

    // Insurance cost
    const valuableItems = rooms.reduce((total, room) => 
      total + room.items.filter(item => item.valuable).length, 0
    )
    let insuranceCost = 0
    if (serviceOptions.insuranceLevel === 'basic') {
      insuranceCost = baseCost * 0.02
    } else if (serviceOptions.insuranceLevel === 'full') {
      insuranceCost = baseCost * 0.05 + valuableItems * 50
    }

    // Storage cost
    let storageCost = 0
    if (serviceOptions.storageNeeded) {
      const storageRate = moveDetails.moveType === 'local' ? 150 : 200
      storageCost = storageRate * serviceOptions.storageDuration
    }

    // Specialty items cost
    const specialtyCost = serviceOptions.specialtyItems.length * 200

    // Additional services
    let additionalServicesCost = 0
    if (serviceOptions.disassemblyService) additionalServicesCost += 300
    if (serviceOptions.cleaningService) additionalServicesCost += 400

    const totalCost = baseCost + packingCost + laborCost + materialsCost + 
                     insuranceCost + storageCost + specialtyCost + additionalServicesCost

    // Timeline calculation
    let timeline = Math.ceil(totalWeight / 1000) + 1
    if (moveDetails.moveType === 'long-distance') timeline += 2
    if (moveDetails.moveType === 'international') timeline += 14

    // Generate recommendations
    const recommendations = []
    if (totalWeight > 8000) {
      recommendations.push('Consider decluttering before the move to reduce costs')
    }
    if (serviceOptions.packingService === 'none') {
      recommendations.push('Professional packing can save time and reduce damage risk')
    }
    if (moveDetails.flexibility === 'fixed') {
      recommendations.push('Flexible dates can save 10-20% on moving costs')
    }
    if (!serviceOptions.storageNeeded && moveDetails.moveType === 'long-distance') {
      recommendations.push('Consider temporary storage if there\'s a gap between move-out and move-in dates')
    }

    const estimate: MovingEstimate = {
      totalCost,
      baseCost,
      packingCost,
      laborCost,
      materialsCost,
      insuranceCost,
      storageCost,
      specialtyCost,
      additionalServicesCost,
      timeline,
      weight: totalWeight,
      recommendations,
      costBreakdown: {
        baseCost,
        packingCost,
        laborCost,
        materialsCost,
        insuranceCost,
        storageCost,
        specialtyCost,
        additionalServicesCost
      }
    }

    setResults(estimate)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Truck className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Moving Cost Estimator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate estimates for your relocation expenses. Calculate costs for local, long-distance, 
            and international moves with detailed breakdowns and professional recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Move Configuration
                </CardTitle>
                <CardDescription>
                  Configure your moving details and inventory
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="inventory">Inventory</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="space-y-4">
                    <div>
                      <Label htmlFor="moveType">Move Type</Label>
                      <Select 
                        value={moveDetails.moveType} 
                        onValueChange={(value) => setMoveDetails(prev => ({ ...prev, moveType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">Local Move (under 100 miles)</SelectItem>
                          <SelectItem value="long-distance">Long Distance (100+ miles)</SelectItem>
                          <SelectItem value="international">International Move</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="distance">Distance (miles)</Label>
                      <Input
                        type="number"
                        value={moveDetails.distance}
                        onChange={(e) => setMoveDetails(prev => ({ ...prev, distance: Number(e.target.value) }))}
                        placeholder="50"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="fromZip">From ZIP</Label>
                        <Input
                          value={moveDetails.fromZip}
                          onChange={(e) => setMoveDetails(prev => ({ ...prev, fromZip: e.target.value }))}
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <Label htmlFor="toZip">To ZIP</Label>
                        <Input
                          value={moveDetails.toZip}
                          onChange={(e) => setMoveDetails(prev => ({ ...prev, toZip: e.target.value }))}
                          placeholder="67890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="moveDate">Preferred Move Date</Label>
                      <Input
                        type="date"
                        value={moveDetails.moveDate}
                        onChange={(e) => setMoveDetails(prev => ({ ...prev, moveDate: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="flexibility">Date Flexibility</Label>
                      <Select 
                        value={moveDetails.flexibility} 
                        onValueChange={(value) => setMoveDetails(prev => ({ ...prev, flexibility: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flexible">Flexible (10% savings)</SelectItem>
                          <SelectItem value="somewhat-flexible">Somewhat Flexible</SelectItem>
                          <SelectItem value="fixed">Fixed Date (20% premium)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="homeSize">Home Size</Label>
                      <Select 
                        value={moveDetails.homeSize} 
                        onValueChange={(value) => setMoveDetails(prev => ({ ...prev, homeSize: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio Apartment</SelectItem>
                          <SelectItem value="1-bedroom">1 Bedroom</SelectItem>
                          <SelectItem value="2-bedroom">2 Bedroom</SelectItem>
                          <SelectItem value="3-bedroom">3 Bedroom</SelectItem>
                          <SelectItem value="4-bedroom">4 Bedroom</SelectItem>
                          <SelectItem value="5-bedroom">5+ Bedroom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="accessDifficulty">Access Difficulty</Label>
                      <Select 
                        value={moveDetails.accessDifficulty} 
                        onValueChange={(value) => setMoveDetails(prev => ({ ...prev, accessDifficulty: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy (ground floor, close parking)</SelectItem>
                          <SelectItem value="moderate">Moderate (stairs, some distance)</SelectItem>
                          <SelectItem value="difficult">Difficult (multiple flights, long carry)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="inventory" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Rooms & Inventory</Label>
                      <Button size="sm" variant="outline" onClick={addRoom}>
                        Add Room
                      </Button>
                    </div>
                    
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {rooms.map((room) => (
                        <Card key={room.id} className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <room.icon className="h-4 w-4 mr-2 text-blue-600" />
                              <Select 
                                value={room.name} 
                                onValueChange={(value) => {
                                  const roomType = roomTypes.find(rt => rt.name === value)
                                  updateRoom(room.id, { 
                                    name: value,
                                    icon: roomType?.icon || Home
                                  })
                                }}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {roomTypes.map(type => (
                                    <SelectItem key={type.id} value={type.name}>
                                      {type.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            {rooms.length > 1 && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeRoom(room.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </Button>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            {room.items.map((item) => (
                              <div key={item.id} className="flex items-center space-x-2 text-sm">
                                <span className="flex-1">{item.name}</span>
                                <Input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => updateItem(room.id, item.id, { quantity: Number(e.target.value) })}
                                  className="w-16 h-8"
                                  min="0"
                                />
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeItem(room.id, item.id)}
                                  className="h-8 w-8 p-0 text-red-500"
                                >
                                  ×
                                </Button>
                              </div>
                            ))}
                            
                            <Select onValueChange={(value) => addItemToRoom(room.id, value)}>
                              <SelectTrigger className="h-8">
                                <SelectValue placeholder="Add item..." />
                              </SelectTrigger>
                              <SelectContent>
                                {(commonItems[room.name.toLowerCase().replace(' ', '-') as keyof typeof commonItems] || []).map((item, index) => (
                                  <SelectItem key={index} value={item.name}>
                                    {item.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="services" className="space-y-4">
                    <div>
                      <Label htmlFor="packingService">Packing Service</Label>
                      <Select 
                        value={serviceOptions.packingService} 
                        onValueChange={(value) => setServiceOptions(prev => ({ ...prev, packingService: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Self-Pack</SelectItem>
                          <SelectItem value="partial">Partial Packing</SelectItem>
                          <SelectItem value="full">Full Packing Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="loadingService">Loading Service</Label>
                      <Select 
                        value={serviceOptions.loadingService} 
                        onValueChange={(value) => setServiceOptions(prev => ({ ...prev, loadingService: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diy">DIY (Truck Rental)</SelectItem>
                          <SelectItem value="loading-only">Loading/Unloading Only</SelectItem>
                          <SelectItem value="full-service">Full Service Move</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="insuranceLevel">Insurance Level</Label>
                      <Select 
                        value={serviceOptions.insuranceLevel} 
                        onValueChange={(value) => setServiceOptions(prev => ({ ...prev, insuranceLevel: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Coverage</SelectItem>
                          <SelectItem value="full">Full Value Protection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="storageNeeded"
                          checked={serviceOptions.storageNeeded}
                          onCheckedChange={(checked) => setServiceOptions(prev => ({ ...prev, storageNeeded: !!checked }))}
                        />
                        <Label htmlFor="storageNeeded">Temporary Storage Needed</Label>
                      </div>
                      
                      {serviceOptions.storageNeeded && (
                        <div>
                          <Label htmlFor="storageDuration">Storage Duration (months)</Label>
                          <Input
                            type="number"
                            value={serviceOptions.storageDuration}
                            onChange={(e) => setServiceOptions(prev => ({ ...prev, storageDuration: Number(e.target.value) }))}
                            min="1"
                            max="12"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="disassemblyService"
                          checked={serviceOptions.disassemblyService}
                          onCheckedChange={(checked) => setServiceOptions(prev => ({ ...prev, disassemblyService: !!checked }))}
                        />
                        <Label htmlFor="disassemblyService">Furniture Disassembly/Assembly</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="cleaningService"
                          checked={serviceOptions.cleaningService}
                          onCheckedChange={(checked) => setServiceOptions(prev => ({ ...prev, cleaningService: !!checked }))}
                        />
                        <Label htmlFor="cleaningService">Post-Move Cleaning</Label>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Specialty Items</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {specialtyItems.map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox
                              id={item}
                              checked={serviceOptions.specialtyItems.includes(item)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setServiceOptions(prev => ({
                                    ...prev,
                                    specialtyItems: [...prev.specialtyItems, item]
                                  }))
                                } else {
                                  setServiceOptions(prev => ({
                                    ...prev,
                                    specialtyItems: prev.specialtyItems.filter(i => i !== item)
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor={item} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button onClick={calculateEstimate} className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Moving Costs
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-2">
            {results ? (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <DollarSign className="h-8 w-8 text-green-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Total Cost</p>
                          <p className="text-2xl font-bold text-gray-900">{formatCurrency(results.totalCost)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Package className="h-8 w-8 text-blue-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Total Weight</p>
                          <p className="text-2xl font-bold text-gray-900">{results.weight.toLocaleString()} lbs</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Calendar className="h-8 w-8 text-purple-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Timeline</p>
                          <p className="text-2xl font-bold text-gray-900">{results.timeline} days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Truck className="h-8 w-8 text-orange-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Move Type</p>
                          <p className="text-lg font-bold text-gray-900 capitalize">{moveDetails.moveType.replace('-', ' ')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Cost Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cost Breakdown</CardTitle>
                    <CardDescription>Detailed analysis of your moving expenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Pie Chart */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Cost Distribution</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={Object.entries(results.costBreakdown)
                                .filter(([, value]) => value > 0)
                                .map(([key, value]) => ({
                                  name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                                  value: value,
                                  percentage: ((value / results.totalCost) * 100).toFixed(1)
                                }))}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {Object.entries(results.costBreakdown).map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      
                      {/* Cost Details */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Cost Details</h4>
                        <div className="space-y-3">
                          {Object.entries(results.costBreakdown)
                            .filter(([, value]) => value > 0)
                            .map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">
                                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </span>
                                <span className="font-bold text-blue-600">{formatCurrency(value)}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      Recommendations & Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Cost-Saving Tips
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {results.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Important Considerations
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            Get quotes from at least 3 moving companies
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            Book your move 4-6 weeks in advance
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            Verify insurance coverage and licensing
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            Read the fine print for additional fees
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline & Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Moving Timeline & Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-2">8 weeks before</div>
                          <p className="text-sm">Research and book moving company</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-2">4 weeks before</div>
                          <p className="text-sm">Start decluttering and packing non-essentials</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-2">1 week before</div>
                          <p className="text-sm">Confirm details and pack essentials box</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Immediate Next Steps:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Get 3+ moving quotes</span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Check company licenses & reviews</span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Schedule in-home estimates</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Review insurance options</span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Create moving binder/checklist</span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span>Start collecting moving supplies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Truck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to Calculate Your Moving Costs?</h3>
                  <p className="text-gray-500 mb-6">
                    Fill out the form on the left to get a detailed estimate for your move.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Distance & Location</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Package className="h-4 w-4 mr-2" />
                      <span>Inventory & Weight</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="h-4 w-4 mr-2" />
                      <span>Services & Insurance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center">
                Complete Moving Guide
              </CardTitle>
            <CardDescription>
              Everything you need to know about planning and executing a successful move
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="planning" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="costs">Costs</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
              </TabsList>
              
              <TabsContent value="planning" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Moving Planning Essentials</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Timeline Planning</h4>
                      <p className="mb-4">
                        A successful move requires careful timing and coordination. Start planning at least 8 weeks 
                        before your move date to ensure availability and better rates.
                      </p>
                      
                      <h5 className="font-medium mb-2">8 Weeks Before:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Research and compare moving companies</li>
                        <li>Get multiple quotes and estimates</li>
                        <li>Check company credentials and reviews</li>
                        <li>Book your preferred moving company</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">6 Weeks Before:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Confirm moving date and services</li>
                        <li>Start decluttering and organizing</li>
                        <li>Begin collecting moving supplies</li>
                        <li>Notify schools and transfer records</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">4 Weeks Before:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Submit change of address forms</li>
                        <li>Transfer or set up utilities</li>
                        <li>Update address with banks and services</li>
                        <li>Start packing non-essential items</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Choosing the Right Moving Company</h4>
                      <p className="mb-4">
                        Selecting a reputable moving company is crucial for a successful move. Here's what to look for:
                      </p>
                      
                      <h5 className="font-medium mb-2">Essential Credentials:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Valid DOT number for interstate moves</li>
                        <li>State licensing for local moves</li>
                        <li>Proper insurance coverage</li>
                        <li>Better Business Bureau rating</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Red Flags to Avoid:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Door-to-door solicitation</li>
                        <li>Estimates without seeing inventory</li>
                        <li>Large upfront deposits required</li>
                        <li>No written estimates or contracts</li>
                        <li>Prices significantly below others</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Getting Accurate Estimates:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Schedule in-home surveys for accuracy</li>
                        <li>Get binding vs. non-binding estimates</li>
                        <li>Understand additional fee structures</li>
                        <li>Compare apples-to-apples services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="costs" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Understanding Moving Costs</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Cost Factors</h4>
                      
                      <h5 className="font-medium mb-2">Distance & Location:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Local moves:</strong> Typically charged by the hour</li>
                        <li><strong>Long-distance:</strong> Based on weight and distance</li>
                        <li><strong>International:</strong> Complex pricing with customs fees</li>
                        <li><strong>Urban vs. rural:</strong> Accessibility affects costs</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Inventory & Weight:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Total weight of belongings</li>
                        <li>Number and size of rooms</li>
                        <li>Specialty items requiring special handling</li>
                        <li>Fragile or valuable items</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Timing & Seasonality:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Peak season:</strong> Summer months (May-September)</li>
                        <li><strong>Off-peak:</strong> Fall and winter months</li>
                        <li><strong>Day of week:</strong> Weekends typically cost more</li>
                        <li><strong>Month-end:</strong> Higher demand and prices</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Hidden Costs to Consider</h4>
                      
                      <h5 className="font-medium mb-2">Access & Logistics:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Long carry charges (over 75 feet)</li>
                        <li>Stair charges for multiple flights</li>
                        <li>Elevator fees and reservations</li>
                        <li>Shuttle service for large trucks</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Additional Services:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Packing and unpacking services</li>
                        <li>Furniture disassembly/assembly</li>
                        <li>Appliance disconnection/connection</li>
                        <li>Storage services and fees</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Insurance & Protection:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Basic liability vs. full value protection</li>
                        <li>Third-party insurance options</li>
                        <li>Deductibles and claim processes</li>
                        <li>High-value item declarations</li>
                      </ul>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                        <h5 className="font-medium text-yellow-800 mb-2">💡 Cost-Saving Tips:</h5>
                        <ul className="list-disc list-inside text-yellow-700 space-y-1">
                          <li>Move during off-peak times</li>
                          <li>Declutter before the move</li>
                          <li>Pack yourself when possible</li>
                          <li>Compare multiple quotes</li>
                          <li>Be flexible with dates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Moving Services Explained</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Service Levels</h4>
                      
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <h5 className="font-medium text-green-600 mb-2">DIY Move</h5>
                          <p className="text-sm mb-2">You handle everything yourself</p>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Rent truck or trailer</li>
                            <li>Pack all belongings</li>
                            <li>Load and unload</li>
                            <li>Drive to destination</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2"><strong>Best for:</strong> Local moves, tight budgets</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h5 className="font-medium text-blue-600 mb-2">Hybrid Move</h5>
                          <p className="text-sm mb-2">Mix of DIY and professional services</p>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>You pack, they move</li>
                            <li>They pack, you move</li>
                            <li>Loading/unloading only</li>
                            <li>Truck rental with labor</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2"><strong>Best for:</strong> Budget-conscious with some flexibility</p>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h5 className="font-medium text-purple-600 mb-2">Full-Service Move</h5>
                          <p className="text-sm mb-2">Complete professional service</p>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Professional packing</li>
                            <li>Loading and transportation</li>
                            <li>Unloading and unpacking</li>
                            <li>Furniture assembly</li>
                          </ul>
                          <p className="text-xs text-gray-600 mt-2"><strong>Best for:</strong> Convenience, valuable items, long distance</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Specialty Services</h4>
                      
                      <h5 className="font-medium mb-2">Packing Services:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Full packing:</strong> Everything packed professionally</li>
                        <li><strong>Partial packing:</strong> Fragile/valuable items only</li>
                        <li><strong>Custom crating:</strong> Artwork, antiques, electronics</li>
                        <li><strong>Unpacking:</strong> Unpack and place items</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Storage Solutions:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Short-term:</strong> 1-3 months during transition</li>
                        <li><strong>Long-term:</strong> Extended storage needs</li>
                        <li><strong>Climate-controlled:</strong> Sensitive items protection</li>
                        <li><strong>Warehouse services:</strong> Professional facilities</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Special Item Handling:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Pianos:</strong> Specialized equipment and expertise</li>
                        <li><strong>Artwork:</strong> Custom crating and climate control</li>
                        <li><strong>Vehicles:</strong> Auto transport services</li>
                        <li><strong>Plants:</strong> Special care and regulations</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Additional Services:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Furniture disassembly/assembly</li>
                        <li>Appliance disconnection/connection</li>
                        <li>Cleaning services</li>
                        <li>Debris removal</li>
                        <li>Handyman services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tips" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Expert Moving Tips</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Packing Like a Pro</h4>
                      
                      <h5 className="font-medium mb-2">Essential Supplies:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Various box sizes (small, medium, large)</li>
                        <li>Packing tape (3+ rolls per room)</li>
                        <li>Bubble wrap and packing paper</li>
                        <li>Markers and labels</li>
                        <li>Mattress and furniture covers</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Packing Strategies:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Heavy items:</strong> Use small boxes</li>
                        <li><strong>Light items:</strong> Use large boxes</li>
                        <li><strong>Fill empty spaces:</strong> Prevent shifting</li>
                        <li><strong>Label clearly:</strong> Room and contents</li>
                        <li><strong>Pack essentials last:</strong> Unpack first</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">Room-by-Room Tips:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Kitchen:</strong> Wrap dishes individually</li>
                        <li><strong>Bedroom:</strong> Use wardrobe boxes for clothes</li>
                        <li><strong>Living room:</strong> Disassemble furniture</li>
                        <li><strong>Office:</strong> Back up computer files</li>
                        <li><strong>Garage:</strong> Drain fluids from equipment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Moving Day Success</h4>
                      
                      <h5 className="font-medium mb-2">Preparation:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Pack a survival kit with essentials</li>
                        <li>Keep important documents with you</li>
                        <li>Take photos of valuable items</li>
                        <li>Confirm details with moving company</li>
                        <li>Prepare cash for tips</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">During the Move:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Be present for the entire process</li>
                        <li>Check inventory lists carefully</li>
                        <li>Take photos of any damage</li>
                        <li>Keep receipts and documentation</li>
                        <li>Stay hydrated and take breaks</li>
                      </ul>
                      
                      <h5 className="font-medium mb-2">First Week After:</h5>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Unpack essentials first</li>
                        <li>Check for missing or damaged items</li>
                        <li>Update voter registration</li>
                        <li>Find new local services</li>
                        <li>Leave reviews for your movers</li>
                      </ul>
                      
                      <div className="bg-green-50 p-4 rounded-lg mt-4">
                        <h5 className="font-medium text-green-800 mb-2">🎯 Pro Tips:</h5>
                        <ul className="list-disc list-inside text-green-700 space-y-1">
                          <li>Take photos of electronic setups</li>
                          <li>Use clothes to wrap fragile items</li>
                          <li>Keep a "first day" box accessible</li>
                          <li>Number boxes and keep a master list</li>
                          <li>Pack a cooler with snacks and drinks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="checklist" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Complete Moving Checklist</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">8 Weeks Before Moving</h4>
                      <div className="space-y-2">
                        {[
                          'Research moving companies',
                          'Get multiple quotes',
                          'Check company credentials',
                          'Read reviews and ratings',
                          'Book your moving company',
                          'Create a moving binder',
                          'Start decluttering process'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`week8-${index}`} />
                            <Label htmlFor={`week8-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-3 mt-6">6 Weeks Before Moving</h4>
                      <div className="space-y-2">
                        {[
                          'Confirm moving date and services',
                          'Order moving supplies',
                          'Start using up perishables',
                          'Research new area services',
                          'Notify schools of transfer',
                          'Begin collecting important documents'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`week6-${index}`} />
                            <Label htmlFor={`week6-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-3 mt-6">4 Weeks Before Moving</h4>
                      <div className="space-y-2">
                        {[
                          'Submit change of address form',
                          'Transfer or set up utilities',
                          'Update address with banks',
                          'Notify insurance companies',
                          'Update voter registration',
                          'Start packing non-essentials',
                          'Arrange time off work'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`week4-${index}`} />
                            <Label htmlFor={`week4-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">2 Weeks Before Moving</h4>
                      <div className="space-y-2">
                        {[
                          'Confirm moving company details',
                          'Arrange child/pet care for moving day',
                          'Pack everything except essentials',
                          'Use up frozen and refrigerated food',
                          'Get cash for moving day tips',
                          'Backup computer files',
                          'Return borrowed items'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`week2-${index}`} />
                            <Label htmlFor={`week2-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-3 mt-6">1 Week Before Moving</h4>
                      <div className="space-y-2">
                        {[
                          'Pack a survival kit',
                          'Confirm utility disconnection/connection',
                          'Pack a suitcase for first few days',
                          'Clean out safety deposit box',
                          'Get medical records',
                          'Charge all electronic devices',
                          'Prepare snacks and drinks'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`week1-${index}`} />
                            <Label htmlFor={`week1-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-3 mt-6">Moving Day</h4>
                      <div className="space-y-2">
                        {[
                          'Be present for entire move',
                          'Check inventory lists',
                          'Take photos of valuable items',
                          'Keep important documents with you',
                          'Do final walkthrough',
                          'Get copies of all paperwork',
                          'Tip the moving crew'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`moving-day-${index}`} />
                            <Label htmlFor={`moving-day-${index}`} className="text-sm">{item}</Label>
                          </div>
                        ))}
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
  )
}