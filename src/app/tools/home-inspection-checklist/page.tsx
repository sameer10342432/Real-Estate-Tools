'use client'

import React, { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Home, 
  CheckCircle, 
  AlertTriangle, 
  X, 
  Download, 
  Printer,
  Eye,
  Zap,
  Droplets,
  Thermometer,
  Shield,
  Hammer,
  Lightbulb
} from 'lucide-react'

interface ChecklistItem {
  id: string
  category: string
  item: string
  description: string
  status: 'not-checked' | 'pass' | 'fail' | 'na'
  notes: string
  priority: 'low' | 'medium' | 'high'
}

interface InspectionData {
  propertyAddress: string
  inspectionDate: string
  inspectorName: string
  clientName: string
  propertyType: string
  yearBuilt: string
  checklist: ChecklistItem[]
  overallNotes: string
}

const defaultChecklist: Omit<ChecklistItem, 'id' | 'status' | 'notes'>[] = [
  // Exterior
  { category: 'Exterior', item: 'Roof Condition', description: 'Check for missing shingles, damage, or wear', priority: 'high' },
  { category: 'Exterior', item: 'Gutters & Downspouts', description: 'Inspect for clogs, damage, or improper drainage', priority: 'medium' },
  { category: 'Exterior', item: 'Siding & Exterior Walls', description: 'Look for cracks, damage, or deterioration', priority: 'medium' },
  { category: 'Exterior', item: 'Windows & Doors', description: 'Check operation, seals, and weatherstripping', priority: 'medium' },
  { category: 'Exterior', item: 'Foundation', description: 'Inspect for cracks, settling, or water damage', priority: 'high' },
  
  // Interior
  { category: 'Interior', item: 'Walls & Ceilings', description: 'Look for cracks, stains, or damage', priority: 'low' },
  { category: 'Interior', item: 'Flooring', description: 'Check for damage, wear, or safety issues', priority: 'medium' },
  { category: 'Interior', item: 'Doors & Windows', description: 'Test operation and check for damage', priority: 'low' },
  { category: 'Interior', item: 'Stairs & Railings', description: 'Ensure safety and structural integrity', priority: 'high' },
  
  // Electrical
  { category: 'Electrical', item: 'Electrical Panel', description: 'Check for proper labeling and safety', priority: 'high' },
  { category: 'Electrical', item: 'Outlets & Switches', description: 'Test functionality and GFCI protection', priority: 'medium' },
  { category: 'Electrical', item: 'Light Fixtures', description: 'Check operation and installation', priority: 'low' },
  { category: 'Electrical', item: 'Smoke Detectors', description: 'Test functionality and battery status', priority: 'high' },
  
  // Plumbing
  { category: 'Plumbing', item: 'Water Pressure', description: 'Test water pressure throughout the home', priority: 'medium' },
  { category: 'Plumbing', item: 'Faucets & Fixtures', description: 'Check for leaks and proper operation', priority: 'medium' },
  { category: 'Plumbing', item: 'Toilets', description: 'Test flushing and check for leaks', priority: 'medium' },
  { category: 'Plumbing', item: 'Water Heater', description: 'Inspect age, condition, and safety features', priority: 'high' },
  
  // HVAC
  { category: 'HVAC', item: 'Heating System', description: 'Test operation and check maintenance', priority: 'high' },
  { category: 'HVAC', item: 'Cooling System', description: 'Test AC operation and check filters', priority: 'high' },
  { category: 'HVAC', item: 'Ductwork', description: 'Inspect for damage or poor connections', priority: 'medium' },
  { category: 'HVAC', item: 'Ventilation', description: 'Check bathroom and kitchen exhaust fans', priority: 'medium' },
  
  // Kitchen
  { category: 'Kitchen', item: 'Appliances', description: 'Test all built-in appliances', priority: 'medium' },
  { category: 'Kitchen', item: 'Cabinets & Counters', description: 'Check condition and functionality', priority: 'low' },
  { category: 'Kitchen', item: 'Sink & Disposal', description: 'Test operation and check for leaks', priority: 'medium' },
  
  // Bathrooms
  { category: 'Bathrooms', item: 'Shower/Tub', description: 'Check for leaks, damage, or mold', priority: 'medium' },
  { category: 'Bathrooms', item: 'Ventilation', description: 'Test exhaust fan operation', priority: 'medium' },
  { category: 'Bathrooms', item: 'Fixtures', description: 'Check all plumbing fixtures', priority: 'medium' },
  
  // Safety
  { category: 'Safety', item: 'Carbon Monoxide Detectors', description: 'Test functionality and placement', priority: 'high' },
  { category: 'Safety', item: 'Security System', description: 'Test alarm system if present', priority: 'low' },
  { category: 'Safety', item: 'Garage Door', description: 'Test safety features and operation', priority: 'medium' }
]


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Inspection Checklist Calculator',
    description: 'Comprehensive home inspection checklist and guide. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function HomeInspectionChecklist() {
  const [inspectionData, setInspectionData] = useState<InspectionData>({
    propertyAddress: '',
    inspectionDate: new Date().toISOString().split('T')[0],
    inspectorName: '',
    clientName: '',
    propertyType: 'single-family',
    yearBuilt: '',
    checklist: defaultChecklist.map((item, index) => ({
      ...item,
      id: `item-${index}`,
      status: 'not-checked' as const,
      notes: ''
    })),
    overallNotes: ''
  })

  const [activeTab, setActiveTab] = useState('inspection')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const categories = ['Exterior', 'Interior', 'Electrical', 'Plumbing', 'HVAC', 'Kitchen', 'Bathrooms', 'Safety']

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Exterior': return <Home className="w-4 h-4" />
      case 'Interior': return <Eye className="w-4 h-4" />
      case 'Electrical': return <Zap className="w-4 h-4" />
      case 'Plumbing': return <Droplets className="w-4 h-4" />
      case 'HVAC': return <Thermometer className="w-4 h-4" />
      case 'Kitchen': return <Hammer className="w-4 h-4" />
      case 'Bathrooms': return <Droplets className="w-4 h-4" />
      case 'Safety': return <Shield className="w-4 h-4" />
      default: return <CheckCircle className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-100 text-green-800'
      case 'fail': return 'bg-red-100 text-red-800'
      case 'na': return 'bg-gray-100 text-gray-800'
      default: return 'bg-yellow-100 text-yellow-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const updateChecklistItem = (id: string, field: keyof ChecklistItem, value: string | boolean) => {
    setInspectionData(prev => ({
      ...prev,
      checklist: prev.checklist.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }))
  }

  const filteredChecklist = inspectionData.checklist.filter(item => {
    const categoryMatch = filterCategory === 'all' || item.category === filterCategory
    const statusMatch = filterStatus === 'all' || item.status === filterStatus
    return categoryMatch && statusMatch
  })

  const getCompletionStats = () => {
    const total = inspectionData.checklist.length
    const completed = inspectionData.checklist.filter(item => item.status !== 'not-checked').length
    const passed = inspectionData.checklist.filter(item => item.status === 'pass').length
    const failed = inspectionData.checklist.filter(item => item.status === 'fail').length
    
    return { total, completed, passed, failed, percentage: Math.round((completed / total) * 100) }
  }

  const stats = getCompletionStats()

  const generateReport = () => {
    const reportData = {
      ...inspectionData,
      stats,
      generatedDate: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(reportData, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    
    const exportFileDefaultName = `home-inspection-${inspectionData.propertyAddress.replace(/\s+/g, '-')}-${inspectionData.inspectionDate}.json`
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Home className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Inspection Checklist
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home inspection checklist to ensure thorough property evaluation
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inspection">Inspection</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="guide">Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="inspection" className="space-y-6">
            {/* Property Information */}
            <Card>
              <CardHeader>
                <CardTitle>Property Information</CardTitle>
                <CardDescription>
                  Enter basic property details for the inspection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyAddress">Property Address</Label>
                    <Input
                      id="propertyAddress"
                      value={inspectionData.propertyAddress}
                      onChange={(e) => setInspectionData(prev => ({ ...prev, propertyAddress: e.target.value }))}
                      placeholder="Enter property address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inspectionDate">Inspection Date</Label>
                    <Input
                      id="inspectionDate"
                      type="date"
                      value={inspectionData.inspectionDate}
                      onChange={(e) => setInspectionData(prev => ({ ...prev, inspectionDate: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inspectorName">Inspector Name</Label>
                    <Input
                      id="inspectorName"
                      value={inspectionData.inspectorName}
                      onChange={(e) => setInspectionData(prev => ({ ...prev, inspectorName: e.target.value }))}
                      placeholder="Enter inspector name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={inspectionData.clientName}
                      onChange={(e) => setInspectionData(prev => ({ ...prev, clientName: e.target.value }))}
                      placeholder="Enter client name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select 
                      value={inspectionData.propertyType} 
                      onValueChange={(value) => setInspectionData(prev => ({ ...prev, propertyType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input
                      id="yearBuilt"
                      value={inspectionData.yearBuilt}
                      onChange={(e) => setInspectionData(prev => ({ ...prev, yearBuilt: e.target.value }))}
                      placeholder="Enter year built"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stats.completed}/{stats.total}</div>
                    <div className="text-sm text-gray-600">Items Checked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stats.passed}</div>
                    <div className="text-sm text-gray-600">Passed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
                    <div className="text-sm text-gray-600">Failed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stats.percentage}%</div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-2">
                    <Label>Filter by Category</Label>
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Filter by Status</Label>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="not-checked">Not Checked</SelectItem>
                        <SelectItem value="pass">Pass</SelectItem>
                        <SelectItem value="fail">Fail</SelectItem>
                        <SelectItem value="na">N/A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Items */}
            <div className="space-y-4">
              {categories.map(category => {
                const categoryItems = filteredChecklist.filter(item => item.category === category)
                if (categoryItems.length === 0) return null

                return (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {getCategoryIcon(category)}
                        {category}
                        <Badge variant="outline">{categoryItems.length} items</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {categoryItems.map(item => (
                        <div key={item.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.item}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <Badge className={`mt-2 ${getPriorityColor(item.priority)}`}>
                                {item.priority} priority
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Badge className={getStatusColor(item.status)}>
                                {item.status === 'not-checked' ? 'Not Checked' : 
                                 item.status === 'na' ? 'N/A' : item.status.toUpperCase()}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <Button
                              variant={item.status === 'pass' ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => updateChecklistItem(item.id, 'status', 'pass')}
                              className="w-full"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Pass
                            </Button>
                            <Button
                              variant={item.status === 'fail' ? 'destructive' : 'outline'}
                              size="sm"
                              onClick={() => updateChecklistItem(item.id, 'status', 'fail')}
                              className="w-full"
                            >
                              <X className="w-4 h-4 mr-1" />
                              Fail
                            </Button>
                            <Button
                              variant={item.status === 'na' ? 'secondary' : 'outline'}
                              size="sm"
                              onClick={() => updateChecklistItem(item.id, 'status', 'na')}
                              className="w-full"
                            >
                              N/A
                            </Button>
                            <Button
                              variant={item.status === 'not-checked' ? 'secondary' : 'outline'}
                              size="sm"
                              onClick={() => updateChecklistItem(item.id, 'status', 'not-checked')}
                              className="w-full"
                            >
                              Reset
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`notes-${item.id}`}>Notes</Label>
                            <Textarea
                              id={`notes-${item.id}`}
                              value={item.notes}
                              onChange={(e) => updateChecklistItem(item.id, 'notes', e.target.value)}
                              placeholder="Add inspection notes..."
                              rows={2}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Summary</CardTitle>
                <CardDescription>
                  Overview of inspection results and findings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                      <div className="text-sm text-gray-600">Total Items</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{stats.passed}</div>
                      <div className="text-sm text-gray-600">Passed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
                      <div className="text-sm text-gray-600">Failed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{stats.percentage}%</div>
                      <div className="text-sm text-gray-600">Complete</div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Failed Items</h3>
                  {inspectionData.checklist.filter(item => item.status === 'fail').length === 0 ? (
                    <p className="text-gray-600">No failed items found.</p>
                  ) : (
                    <div className="space-y-2">
                      {inspectionData.checklist.filter(item => item.status === 'fail').map(item => (
                        <div key={item.id} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="font-medium">{item.category}: {item.item}</span>
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority}
                            </Badge>
                          </div>
                          {item.notes && (
                            <p className="text-sm text-gray-600 mt-1">{item.notes}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="overallNotes">Overall Inspection Notes</Label>
                  <Textarea
                    id="overallNotes"
                    value={inspectionData.overallNotes}
                    onChange={(e) => setInspectionData(prev => ({ ...prev, overallNotes: e.target.value }))}
                    placeholder="Add overall inspection notes and recommendations..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button onClick={generateReport} className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Report
                  </Button>
                  <Button variant="outline" onClick={() => window.print()} className="flex items-center gap-2">
                    <Printer className="w-4 h-4" />
                    Print Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Comprehensive Home Inspection Guide
                </CardTitle>
                <CardDescription>
                  Everything you need to know about home inspections for a confident property purchase.
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <h2>What is a Home Inspection?</h2>
                <p>A home inspection is a non-invasive, visual examination of a residential property's physical structure and systems. A professional home inspector assesses the property from the foundation to the roof and provides a detailed report on its condition. This tool helps you create your own checklist, but a professional inspection is highly recommended for one of the biggest investments of your life.</p>

                <h2>Why is a Home Inspection Crucial?</h2>
                <p>A thorough inspection is vital for several reasons:</p>
                <ul>
                  <li><strong>Identifies Major Issues:</strong> It can uncover potentially costly problems like a faulty foundation, roofing issues, or outdated electrical and plumbing systems.</li>
                  <li><strong>Provides an "Out":</strong> Most real estate contracts include an inspection contingency, allowing you to back out of the deal if significant defects are found.</li>
                  <li><strong>Negotiating Power:</strong> The inspection report provides leverage to negotiate for repairs or a lower price with the seller.</li>
                  <li><strong>Future Budgeting:</strong> It gives you a clearer picture of the home's maintenance needs and potential future expenses.</li>
                  <li><strong>Peace of Mind:</strong> Knowing the true condition of the property provides confidence in your purchase decision.</li>
                </ul>

                <h2>Choosing a Qualified Home Inspector</h2>
                <p>Selecting the right inspector is critical. Look for:</p>
                <ul>
                  <li><strong>Certifications:</strong> Membership in professional organizations like the American Society of Home Inspectors (ASHI) or the International Association of Certified Home Inspectors (InterNACHI).</li>
                  <li><strong>Experience:</strong> An inspector with a long track record, especially with properties similar to the one you're considering.</li>
                  <li><strong>Sample Reports:</strong> Ask to see a sample report to ensure it's detailed, clear, and includes photos.</li>
                  <li><strong>Insurance:</strong> Verify they have errors and omissions (E&O) insurance.</li>
                  <li><strong>Good Reviews:</strong> Check online reviews and ask for references from real estate agents or friends.</li>
                </ul>

                <h2>The Inspection Process: A Step-by-Step Walkthrough</h2>
                <p>A typical inspection takes 2-4 hours. You should plan to attend.</p>
                <ol>
                  <li><strong>Exterior Review:</strong> The inspector examines the roof, gutters, siding, windows, foundation, and grading.</li>
                  <li><strong>Interior Examination:</strong> They check walls, ceilings, floors, doors, and windows.</li>
                  <li><strong>Systems Check:</strong> This is the core of the inspection, covering:
                      <ul>
                        <li><strong>Plumbing:</strong> Faucets, drains, water heater, and pipes are checked for leaks and functionality.</li>
                        <li><strong>Electrical:</strong> The electrical panel, outlets, switches, and fixtures are tested for safety and code compliance.</li>
                        <li><strong>HVAC:</strong> The heating and cooling systems are operated and evaluated for performance.</li>
                      </ul>
                  </li>
                  <li><strong>Attic and Basement/Crawlspace:</strong> The inspector looks for structural issues, insulation problems, and signs of moisture.</li>
                  <li><strong>Final Walk-through:</strong> The inspector will often summarize their initial findings with you on-site.</li>
                </ol>

                <h2>Understanding the Inspection Report</h2>
                <p>The report is a detailed document, often 30-50 pages long, with photos and descriptions of findings. It will typically categorize issues by severity:</p>
                <ul>
                  <li><strong>Major Defects:</strong> Significant problems that require immediate attention (e.g., structural failure).</li>
                  <li><strong>Safety Hazards:</strong> Issues that pose a risk to occupants (e.g., faulty wiring).</li>
                  <li><strong>Maintenance Items:</strong> Components that are aging or need routine service.</li>
                  <li><strong>Cosmetic Issues:</strong> Minor imperfections that don't affect functionality.</li>
                </ul>

                <h2>Common Issues & Red Flags</h2>
                <p>Be particularly aware of these common but potentially serious issues:</p>
                <ul>
                  <li><strong>Water Damage:</strong> Stains on ceilings, musty odors, or soft spots around tubs and toilets can indicate leaks or mold.</li>
                  <li><strong>Foundation Problems:</strong> Significant cracks in the foundation, uneven floors, or doors that stick can signal structural issues.</li>
                  <li><strong>Roofing Issues:</strong> Missing or damaged shingles, and signs of water intrusion in the attic are major concerns.</li>
                  <li><strong>Outdated Electrical Systems:</strong> Old knob-and-tube wiring or an undersized electrical panel can be a fire hazard.</li>
                  <li><strong>Aging HVAC and Water Heaters:</strong> These systems have a limited lifespan, and replacement can be expensive.</li>
                </ul>

                <h2>Negotiating Repairs After an Inspection</h2>
                <p>You have several options after receiving the report:</p>
                <ul>
                  <li><strong>Request Repairs:</strong> Ask the seller to fix specific issues before closing.</li>
                  <li><strong>Ask for a Credit:</strong> Negotiate a credit at closing to cover the cost of repairs, giving you control over the work.</li>
                  <li><strong>Reduce the Price:</strong> Ask for a reduction in the sale price to compensate for the needed work.</li>
                  <li><strong>Walk Away:</strong> If the issues are too significant, you can exercise your inspection contingency and cancel the contract.</li>
                </ul>
                <p>Focus on major defects and safety hazards in negotiations, rather than minor cosmetic items.</p>

                <h2>Limitations of a Home Inspection</h2>
                <p>A standard inspection is not exhaustive. It typically does not cover:</p>
                <ul>
                  <li>Pest control (termites, etc.)</li>
                  <li>Radon or asbestos testing</li>
                  <li>Mold testing (though inspectors will note visible signs)</li>
                  <li>Swimming pools or septic systems (these often require specialists)</li>
                  <li>Areas that are inaccessible (e.g., under heavy furniture or behind walls)</li>
                </ul>
                <p>Consider specialized inspections for these items if you have concerns.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}