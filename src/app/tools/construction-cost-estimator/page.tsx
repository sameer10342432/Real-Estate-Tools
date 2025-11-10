'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Home, 
  PieChart, 
  BarChart3,
  Target,
  AlertTriangle,
  CheckCircle,
  Building,
  Hammer,
  BookOpen
} from 'lucide-react'

interface ProjectData {
  projectType: string
  squareFootage: number
  location: string
  qualityLevel: string
  foundationType: string
  stories: number
  bathrooms: number
  bedrooms: number
  garageSpaces: number
  customFeatures: string[]
}

interface CostBreakdown {
  totalCost: number
  costPerSqFt: number
  materials: number
  labor: number
  permits: number
  contingency: number
  breakdown: {
    foundation: number
    framing: number
    roofing: number
    electrical: number
    plumbing: number
    hvac: number
    insulation: number
    drywall: number
    flooring: number
    kitchen: number
    bathrooms: number
    exterior: number
    landscaping: number
  }
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Construction Cost Estimator',
    description: 'Estimate construction and renovation costs. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function ConstructionCostEstimator() {
  const [projectData, setProjectData] = useState<ProjectData>({
    projectType: 'single-family',
    squareFootage: 2000,
    location: 'suburban',
    qualityLevel: 'standard',
    foundationType: 'slab',
    stories: 1,
    bathrooms: 2,
    bedrooms: 3,
    garageSpaces: 2,
    customFeatures: []
  })

  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown | null>(null)
  const [activeTab, setActiveTab] = useState('project')

  const calculateCosts = useCallback(() => {
    if (projectData.squareFootage <= 0) {
      setCostBreakdown(null)
      return
    }
    // Base cost per square foot based on quality level
    const baseCosts = {
      'basic': 120,
      'standard': 160,
      'premium': 220,
      'luxury': 300
    }

    const baseCostPerSqFt = baseCosts[projectData.qualityLevel as keyof typeof baseCosts]
    
    // Location multipliers
    const locationMultipliers = {
      'urban': 1.3,
      'suburban': 1.0,
      'rural': 0.85
    }

    const locationMultiplier = locationMultipliers[projectData.location as keyof typeof locationMultipliers]
    const adjustedCostPerSqFt = baseCostPerSqFt * locationMultiplier

    // Calculate total base cost
    const baseTotalCost = projectData.squareFootage * adjustedCostPerSqFt

    // Calculate detailed breakdown
    const breakdown = {
      foundation: baseTotalCost * 0.08,
      framing: baseTotalCost * 0.15,
      roofing: baseTotalCost * 0.08,
      electrical: baseTotalCost * 0.12,
      plumbing: baseTotalCost * 0.10,
      hvac: baseTotalCost * 0.10,
      insulation: baseTotalCost * 0.04,
      drywall: baseTotalCost * 0.08,
      flooring: baseTotalCost * 0.10,
      kitchen: baseTotalCost * 0.08,
      bathrooms: baseTotalCost * 0.06,
      exterior: baseTotalCost * 0.06,
      landscaping: baseTotalCost * 0.03
    }

    // Calculate materials vs labor split
    const materials = baseTotalCost * 0.45
    const labor = baseTotalCost * 0.35
    const permits = baseTotalCost * 0.03
    const contingency = baseTotalCost * 0.15

    const totalCost = baseTotalCost + permits + contingency

    setCostBreakdown({
      totalCost,
      costPerSqFt: totalCost / projectData.squareFootage,
      materials,
      labor,
      permits,
      contingency,
      breakdown
    })
  }, [projectData]);

  useEffect(() => {
    calculateCosts()
  }, [calculateCosts])

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
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Hammer className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Construction Cost Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate construction cost estimates for your building project with our comprehensive calculator
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="project">Project Details</TabsTrigger>
            <TabsTrigger value="results">Cost Breakdown</TabsTrigger>
            <TabsTrigger value="article">Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="project" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Project Configuration
                </CardTitle>
                <CardDescription>
                  Enter your project details to get an accurate cost estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select 
                      value={projectData.projectType} 
                      onValueChange={(value) => setProjectData(prev => ({ ...prev, projectType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="office">Office Building</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="squareFootage">Square Footage</Label>
                    <Input
                      id="squareFootage"
                      type="number"
                      value={projectData.squareFootage}
                      onChange={(e) => setProjectData(prev => ({ ...prev, squareFootage: Number(e.target.value) }))}
                      placeholder="Enter square footage"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location Type</Label>
                    <Select 
                      value={projectData.location} 
                      onValueChange={(value) => setProjectData(prev => ({ ...prev, location: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban</SelectItem>
                        <SelectItem value="suburban">Suburban</SelectItem>
                        <SelectItem value="rural">Rural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualityLevel">Quality Level</Label>
                    <Select 
                      value={projectData.qualityLevel} 
                      onValueChange={(value) => setProjectData(prev => ({ ...prev, qualityLevel: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic ($120/sq ft)</SelectItem>
                        <SelectItem value="standard">Standard ($160/sq ft)</SelectItem>
                        <SelectItem value="premium">Premium ($220/sq ft)</SelectItem>
                        <SelectItem value="luxury">Luxury ($300/sq ft)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stories">Number of Stories</Label>
                    <Input
                      id="stories"
                      type="number"
                      value={projectData.stories}
                      onChange={(e) => setProjectData(prev => ({ ...prev, stories: Number(e.target.value) }))}
                      min="1"
                      max="4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      value={projectData.bedrooms}
                      onChange={(e) => setProjectData(prev => ({ ...prev, bedrooms: Number(e.target.value) }))}
                      min="1"
                      max="10"
                    />
                  </div>
                </div>

                <Button onClick={calculateCosts} className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Construction Costs
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {costBreakdown && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Cost</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(costBreakdown.totalCost)}
                          </p>
                        </div>
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Cost per Sq Ft</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(costBreakdown.costPerSqFt)}
                          </p>
                        </div>
                        <Home className="w-8 h-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Materials</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(costBreakdown.materials)}
                          </p>
                        </div>
                        <Building className="w-8 h-8 text-orange-600" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font--medium text-gray-600">Labor</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(costBreakdown.labor)}
                          </p>
                        </div>
                        <Hammer className="w-8 h-8 text-purple-600" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Cost Breakdown</CardTitle>
                    <CardDescription>
                      Breakdown of construction costs by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(costBreakdown.breakdown).map(([category, cost]) => (
                        <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-bold">{formatCurrency(cost)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="article" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Construction Cost Estimation Guide
                </CardTitle>
                <CardDescription>
                  Learn the fundamentals of accurate construction cost estimation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Understanding Construction Costs</h3>
                  <p className="text-gray-600">
                    Construction cost estimation involves calculating all expenses associated with building a structure, 
                    from materials and labor to permits and contingencies. Accurate estimation is crucial for project 
                    success and financial planning.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Cost Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Direct Costs (75-80%)</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Materials and supplies (lumber, concrete, etc.)</li>
                        <li>• Labor wages for construction crew</li>
                        <li>• Equipment rental (excavators, cranes)</li>
                        <li>• Subcontractor fees (plumbing, electrical)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Indirect Costs (20-25%)</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Building permits and inspection fees</li>
                        <li>• Insurance (liability, builder's risk)</li>
                        <li>• Project management and administrative staff</li>
                        <li>• Contingency fund for unexpected costs (10-20%)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Factors Influencing Construction Costs</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-sm text-gray-600">
                          Costs vary significantly by region due to differences in labor rates, material availability, and local regulations. Urban areas are typically more expensive than rural locations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Quality of Materials</h4>
                        <p className="text-sm text-gray-600">
                          The choice of materials for finishes, fixtures, and structural components has a major impact on the budget. High-end materials can double or triple the cost per square foot.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Project Complexity</h4>
                        <p className="text-sm text-gray-600">
                          Custom designs, unusual site conditions, and complex architectural features increase labor and material costs. A simple rectangular design is more affordable than a multi-level, custom-shaped structure.
                        </p>
                      </div>
                    </div>
                     <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Labor Costs</h4>
                        <p className="text-sm text-gray-600">
                          Labor costs are a significant portion of the budget and are influenced by local wages, the availability of skilled workers, and the complexity of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Step-by-Step Estimation Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li><strong>Define Project Scope:</strong> Create a detailed project plan, including size, features, and quality level.</li>
                    <li><strong>Gather Initial Estimates:</strong> Use online calculators and rules of thumb for a preliminary budget.</li>
                    <li><strong>Consult Professionals:</strong> Work with an architect or designer to create detailed plans.</li>
                    <li><strong>Get Bids from Contractors:</strong> Solicit detailed bids from multiple general contractors based on your plans.</li>
                    <li><strong>Review and Refine:</strong> Analyze the bids, check references, and select a contractor.</li>
                    <li><strong>Finalize Budget:</strong> Create a final, detailed budget with a contingency fund before starting construction.</li>
                  </ol>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tips for Accurate Cost Estimation</h3>
                   <div className="p-4 bg-yellow-50 rounded-lg">
                    <ul className="text-sm text-yellow-800 space-y-2">
                      <li>• <strong>Be Detailed:</strong> The more detailed your project plan, the more accurate your estimate will be.</li>
                      <li>• <strong>Use Real-World Data:</strong> Research recent construction costs in your area for comparable projects.</li>
                      <li>• <strong>Include a Contingency:</strong> Always include a contingency of 10-20% to cover unexpected issues.</li>
                      <li>• <strong>Get Multiple Bids:</strong> Comparing bids from several contractors helps ensure a fair price.</li>
                      <li>• <strong>Account for All Costs:</strong> Don't forget indirect costs like permits, insurance, and design fees.</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Common Pitfalls to Avoid</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Underestimating Labor Costs</h4>
                      <p className="text-sm text-red-800">Labor is often more expensive than expected. Get detailed quotes from subcontractors.</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Forgetting Site Work</h4>
                      <p className="text-sm text-red-800">Costs for excavation, grading, and utilities can be substantial. Don't overlook them.</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Ignoring Market Changes</h4>
                      <p className="text-sm text-red-800">Material and labor costs can fluctuate. Build in a buffer for price increases.</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Making Late-Stage Changes</h4>
                      <p className="text-sm text-red-800">Changes during construction are expensive. Finalize your design before work begins.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}