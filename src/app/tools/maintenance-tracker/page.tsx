
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Maintenance Tracker Calculator',
    description: 'Track property maintenance costs and schedules. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client'

import React, { useState, useEffect } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Wrench, Plus, Search, CheckCircle, AlertTriangle, DollarSign, MapPin, Calendar, Phone, Edit, Trash2, Mail } from 'lucide-react'

interface MaintenanceItem {
  id: string
  propertyId: string
  propertyName: string
  type: 'preventive' | 'repair' | 'emergency' | 'inspection'
  category: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'scheduled' | 'in-progress' | 'completed' | 'overdue'
  scheduledDate: string
  completedDate?: string
  estimatedCost: number
  actualCost?: number
  vendorId?: string
  notes: string
  recurringInterval?: number // days
  nextDueDate?: string
}

interface Vendor {
  id: string
  name: string
  category: string
  phone: string
  email: string
  address: string
  rating: number
  notes: string
}

interface Property {
  id: string
  name: string
  address: string
  type: string
}

const MaintenanceTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tracker')
  const [maintenanceItems, setMaintenanceItems] = useState<MaintenanceItem[]>([])
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [properties, setProperties] = useState<Property[]>([])
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterType, setFilterType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingItem, setEditingItem] = useState<MaintenanceItem | null>(null)
  const [showVendorForm, setShowVendorForm] = useState(false)
  const [editingVendor, setEditingVendor] = useState<Vendor | null>(null)

  // Form states
  const [newItem, setNewItem] = useState<Partial<MaintenanceItem>>({
    type: 'preventive',
    category: '',
    title: '',
    description: '',
    priority: 'medium',
    status: 'scheduled',
    scheduledDate: '',
    estimatedCost: 0,
    notes: ''
  })

  const [newVendor, setNewVendor] = useState<Partial<Vendor>>({
    name: '',
    category: '',
    phone: '',
    email: '',
    address: '',
    rating: 5,
    notes: ''
  })

  const maintenanceCategories = [
    'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Flooring', 'Painting',
    'Appliances', 'Landscaping', 'Security', 'Cleaning', 'Pest Control', 'Other'
  ]

  const vendorCategories = [
    'General Contractor', 'HVAC Technician', 'Plumber', 'Electrician', 'Roofer',
    'Painter', 'Flooring Specialist', 'Landscaper', 'Cleaner', 'Pest Control', 'Other'
  ]

  useEffect(() => {
    // Initialize with sample data
    const sampleProperties: Property[] = [
      { id: '1', name: 'Sunset Apartments Unit 1A', address: '123 Main St, Apt 1A', type: 'Apartment' },
      { id: '2', name: 'Oak Street House', address: '456 Oak St', type: 'Single Family' },
      { id: '3', name: 'Downtown Condo 5B', address: '789 City Ave, Unit 5B', type: 'Condo' }
    ]

    const sampleVendors: Vendor[] = [
      {
        id: '1',
        name: 'ABC Plumbing Services',
        category: 'Plumber',
        phone: '(555) 123-4567',
        email: 'contact@abcplumbing.com',
        address: '123 Service St',
        rating: 4.5,
        notes: 'Reliable, good pricing'
      },
      {
        id: '2',
        name: 'Cool Air HVAC',
        category: 'HVAC Technician',
        phone: '(555) 987-6543',
        email: 'service@coolairhvac.com',
        address: '456 Tech Blvd',
        rating: 4.8,
        notes: '24/7 emergency service'
      }
    ]

    const sampleItems: MaintenanceItem[] = [
      {
        id: '1',
        propertyId: '1',
        propertyName: 'Sunset Apartments Unit 1A',
        type: 'preventive',
        category: 'HVAC',
        title: 'HVAC Filter Replacement',
        description: 'Replace air filters in all units',
        priority: 'medium',
        status: 'scheduled',
        scheduledDate: '2024-01-15',
        estimatedCost: 150,
        vendorId: '2',
        notes: 'Use high-efficiency filters',
        recurringInterval: 90,
        nextDueDate: '2024-04-15'
      },
      {
        id: '2',
        propertyId: '2',
        propertyName: 'Oak Street House',
        type: 'repair',
        category: 'Plumbing',
        title: 'Kitchen Faucet Repair',
        description: 'Fix leaking kitchen faucet',
        priority: 'high',
        status: 'in-progress',
        scheduledDate: '2024-01-10',
        estimatedCost: 200,
        actualCost: 185,
        vendorId: '1',
        notes: 'Tenant reported dripping'
      }
    ]

    setProperties(sampleProperties)
    setVendors(sampleVendors)
    setMaintenanceItems(sampleItems)
  }, [])

  const addMaintenanceItem = () => {
    if (!newItem.title || !newItem.scheduledDate || !newItem.propertyId) return

    const property = properties.find(p => p.id === newItem.propertyId)
    const item: MaintenanceItem = {
      id: Date.now().toString(),
      propertyId: newItem.propertyId!,
      propertyName: property?.name || '',
      type: newItem.type as MaintenanceItem['type'],
      category: newItem.category!,
      title: newItem.title!,
      description: newItem.description || '',
      priority: newItem.priority as MaintenanceItem['priority'],
      status: newItem.status as MaintenanceItem['status'],
      scheduledDate: newItem.scheduledDate!,
      estimatedCost: newItem.estimatedCost || 0,
      vendorId: newItem.vendorId,
      notes: newItem.notes || '',
      recurringInterval: newItem.recurringInterval
    }

    if (item.recurringInterval) {
      const nextDate = new Date(item.scheduledDate)
      nextDate.setDate(nextDate.getDate() + item.recurringInterval)
      item.nextDueDate = nextDate.toISOString().split('T')[0]
    }

    setMaintenanceItems([...maintenanceItems, item])
    setNewItem({
      type: 'preventive',
      category: '',
      title: '',
      description: '',
      priority: 'medium',
      status: 'scheduled',
      scheduledDate: '',
      estimatedCost: 0,
      notes: ''
    })
    setShowAddForm(false)
  }

  const updateMaintenanceItem = (id: string, updates: Partial<MaintenanceItem>) => {
    setMaintenanceItems(items =>
      items.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    )
  }

  const deleteMaintenanceItem = (id: string) => {
    setMaintenanceItems(items => items.filter(item => item.id !== id))
  }

  const addVendor = () => {
    if (!newVendor.name || !newVendor.category) return

    const vendor: Vendor = {
      id: Date.now().toString(),
      name: newVendor.name!,
      category: newVendor.category!,
      phone: newVendor.phone || '',
      email: newVendor.email || '',
      address: newVendor.address || '',
      rating: newVendor.rating || 5,
      notes: newVendor.notes || ''
    }

    setVendors([...vendors, vendor])
    setNewVendor({
      name: '',
      category: '',
      phone: '',
      email: '',
      address: '',
      rating: 5,
      notes: ''
    })
    setShowVendorForm(false)
  }

  const filteredItems = maintenanceItems.filter(item => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus
    const matchesType = filterType === 'all' || item.type === filterType
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.propertyName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-800'
      case 'medium': return 'bg-blue-100 text-blue-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'urgent': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const calculateStats = () => {
    const total = maintenanceItems.length
    const completed = maintenanceItems.filter(item => item.status === 'completed').length
    const overdue = maintenanceItems.filter(item => {
      const today = new Date().toISOString().split('T')[0]
      return item.status !== 'completed' && item.scheduledDate < today
    }).length
    const totalCost = maintenanceItems.reduce((sum, item) => sum + (item.actualCost || item.estimatedCost), 0)
    const avgCost = total > 0 ? totalCost / total : 0

    return { total, completed, overdue, totalCost, avgCost }
  }

  const stats = calculateStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Maintenance Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule preventive maintenance, track repairs, manage vendors, and maintain comprehensive maintenance records for all your properties.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tracker">Maintenance Tracker</TabsTrigger>
            <TabsTrigger value="vendors">Vendor Management</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
            <TabsTrigger value="guide">Maintenance Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Items</p>
                      <p className="text-2xl font-bold">{stats.total}</p>
                    </div>
                    <Wrench className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Overdue</p>
                      <p className="text-2xl font-bold text-red-600">{stats.overdue}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Cost</p>
                      <p className="text-2xl font-bold">${stats.totalCost.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Add Button */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search maintenance items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-64"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="overdue">Overdue</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="preventive">Preventive</SelectItem>
                        <SelectItem value="repair">Repair</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="inspection">Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Maintenance Item
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add/Edit Form */}
            {(showAddForm || editingItem) && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem ? 'Edit Maintenance Item' : 'Add New Maintenance Item'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="property">Property</Label>
                      <Select
                        value={editingItem?.propertyId || newItem.propertyId}
                        onValueChange={(value) => editingItem 
                          ? setEditingItem({...editingItem, propertyId: value, propertyName: properties.find(p => p.id === value)?.name || ''})
                          : setNewItem({...newItem, propertyId: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property" />
                        </SelectTrigger>
                        <SelectContent>
                          {properties.map(property => (
                            <SelectItem key={property.id} value={property.id}>
                              {property.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={editingItem?.type || newItem.type}
                        onValueChange={(value) => editingItem 
                          ? setEditingItem({...editingItem, type: value as MaintenanceItem['type']})
                          : setNewItem({...newItem, type: value as MaintenanceItem['type']})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preventive">Preventive</SelectItem>
                          <SelectItem value="repair">Repair</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="inspection">Inspection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={editingItem?.category || newItem.category}
                        onValueChange={(value) => editingItem 
                          ? setEditingItem({...editingItem, category: value})
                          : setNewItem({...newItem, category: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {maintenanceCategories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={editingItem?.priority || newItem.priority}
                        onValueChange={(value) => editingItem 
                          ? setEditingItem({...editingItem, priority: value as MaintenanceItem['priority']})
                          : setNewItem({...newItem, priority: value as MaintenanceItem['priority']})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={editingItem?.title || newItem.title}
                        onChange={(e) => editingItem 
                          ? setEditingItem({...editingItem, title: e.target.value})
                          : setNewItem({...newItem, title: e.target.value})
                        }
                        placeholder="Enter maintenance title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="scheduledDate">Scheduled Date</Label>
                      <Input
                        id="scheduledDate"
                        type="date"
                        value={editingItem?.scheduledDate || newItem.scheduledDate}
                        onChange={(e) => editingItem 
                          ? setEditingItem({...editingItem, scheduledDate: e.target.value})
                          : setNewItem({...newItem, scheduledDate: e.target.value})
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="estimatedCost">Estimated Cost ($)</Label>
                      <Input
                        id="estimatedCost"
                        type="number"
                        value={editingItem?.estimatedCost || newItem.estimatedCost}
                        onChange={(e) => editingItem 
                          ? setEditingItem({...editingItem, estimatedCost: Number(e.target.value)})
                          : setNewItem({...newItem, estimatedCost: Number(e.target.value)})
                        }
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendor">Vendor (Optional)</Label>
                      <Select
                        value={editingItem?.vendorId || newItem.vendorId}
                        onValueChange={(value) => editingItem 
                          ? setEditingItem({...editingItem, vendorId: value})
                          : setNewItem({...newItem, vendorId: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vendor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">No vendor selected</SelectItem>
                          {vendors.map(vendor => (
                            <SelectItem key={vendor.id} value={vendor.id}>
                              {vendor.name} - {vendor.category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={editingItem?.description || newItem.description}
                      onChange={(e) => editingItem 
                        ? setEditingItem({...editingItem, description: e.target.value})
                        : setNewItem({...newItem, description: e.target.value})
                      }
                      placeholder="Describe the maintenance work needed"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={editingItem?.notes || newItem.notes}
                      onChange={(e) => editingItem 
                        ? setEditingItem({...editingItem, notes: e.target.value})
                        : setNewItem({...newItem, notes: e.target.value})
                      }
                      placeholder="Additional notes or instructions"
                      rows={2}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={editingItem ? () => {
                        updateMaintenanceItem(editingItem.id, editingItem)
                        setEditingItem(null)
                      } : addMaintenanceItem}
                    >
                      {editingItem ? 'Update Item' : 'Add Item'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowAddForm(false)
                        setEditingItem(null)
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Maintenance Items List */}
            <div className="space-y-4">
              {filteredItems.map(item => {
                const vendor = vendors.find(v => v.id === item.vendorId)
                return (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status.replace('-', ' ')}
                            </Badge>
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority}
                            </Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span>{item.propertyName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-gray-500" />
                              <span>{new Date(item.scheduledDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-gray-500" />
                              <span>${item.actualCost || item.estimatedCost}</span>
                            </div>
                            {vendor && (
                              <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <span>{vendor.name}</span>
                              </div>
                            )}
                          </div>
                          {item.notes && (
                            <p className="text-sm text-gray-500 mt-2">
                              <strong>Notes:</strong> {item.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingItem(item)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteMaintenanceItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Vendor Management</h2>
              <Button onClick={() => setShowVendorForm(true)} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Vendor
              </Button>
            </div>

            {/* Add/Edit Vendor Form */}
            {(showVendorForm || editingVendor) && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingVendor ? 'Edit Vendor' : 'Add New Vendor'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vendorName">Vendor Name</Label>
                      <Input
                        id="vendorName"
                        value={editingVendor?.name || newVendor.name}
                        onChange={(e) => editingVendor 
                          ? setEditingVendor({...editingVendor, name: e.target.value})
                          : setNewVendor({...newVendor, name: e.target.value})
                        }
                        placeholder="Enter vendor name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendorCategory">Category</Label>
                      <Select
                        value={editingVendor?.category || newVendor.category}
                        onValueChange={(value) => editingVendor 
                          ? setEditingVendor({...editingVendor, category: value})
                          : setNewVendor({...newVendor, category: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {vendorCategories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="vendorPhone">Phone</Label>
                      <Input
                        id="vendorPhone"
                        value={editingVendor?.phone || newVendor.phone}
                        onChange={(e) => editingVendor 
                          ? setEditingVendor({...editingVendor, phone: e.target.value})
                          : setNewVendor({...newVendor, phone: e.target.value})
                        }
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendorEmail">Email</Label>
                      <Input
                        id="vendorEmail"
                        type="email"
                        value={editingVendor?.email || newVendor.email}
                        onChange={(e) => editingVendor 
                          ? setEditingVendor({...editingVendor, email: e.target.value})
                          : setNewVendor({...newVendor, email: e.target.value})
                        }
                        placeholder="vendor@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="vendorAddress">Address</Label>
                    <Input
                      id="vendorAddress"
                      value={editingVendor?.address || newVendor.address}
                      onChange={(e) => editingVendor 
                        ? setEditingVendor({...editingVendor, address: e.target.value})
                        : setNewVendor({...newVendor, address: e.target.value})
                      }
                      placeholder="123 Service St, City, State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="vendorNotes">Notes</Label>
                    <Textarea
                      id="vendorNotes"
                      value={editingVendor?.notes || newVendor.notes}
                      onChange={(e) => editingVendor 
                        ? setEditingVendor({...editingVendor, notes: e.target.value})
                        : setNewVendor({...newVendor, notes: e.target.value})
                      }
                      placeholder="Notes about this vendor"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={editingVendor ? () => {
                        setVendors(vendors.map(v => v.id === editingVendor.id ? editingVendor : v))
                        setEditingVendor(null)
                      } : addVendor}
                    >
                      {editingVendor ? 'Update Vendor' : 'Add Vendor'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowVendorForm(false)
                        setEditingVendor(null)
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Vendors List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vendors.map(vendor => (
                <Card key={vendor.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{vendor.name}</h3>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingVendor(vendor)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setVendors(vendors.filter(v => v.id !== vendor.id))}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2">{vendor.category}</Badge>
                    <div className="space-y-1 text-sm">
                      {vendor.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{vendor.phone}</span>
                        </div>
                      )}
                      {vendor.email && (
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>{vendor.email}</span>
                        </div>
                      )}
                      {vendor.address && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{vendor.address}</span>
                        </div>
                      )}
                    </div>
                    {vendor.notes && (
                      <p className="text-sm text-gray-500 mt-2">{vendor.notes}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold">Reports & Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Maintenance Items:</span>
                      <span className="font-semibold">{stats.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed Items:</span>
                      <span className="font-semibold text-green-600">{stats.completed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overdue Items:</span>
                      <span className="font-semibold text-red-600">{stats.overdue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completion Rate:</span>
                      <span className="font-semibold">
                        {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Maintenance Cost:</span>
                      <span className="font-semibold">${stats.totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Cost per Item:</span>
                      <span className="font-semibold">${Math.round(stats.avgCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preventive Maintenance:</span>
                      <span className="font-semibold">
                        ${maintenanceItems
                          .filter(item => item.type === 'preventive')
                          .reduce((sum, item) => sum + (item.actualCost || item.estimatedCost), 0)
                          .toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Repairs:</span>
                      <span className="font-semibold">
                        ${maintenanceItems
                          .filter(item => item.type === 'emergency')
                          .reduce((sum, item) => sum + (item.actualCost || item.estimatedCost), 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {maintenanceCategories.map(category => {
                    const categoryItems = maintenanceItems.filter(item => item.category === category)
                    const categoryCount = categoryItems.length
                    const categoryCost = categoryItems.reduce((sum, item) => sum + (item.actualCost || item.estimatedCost), 0)
                    
                    if (categoryCount === 0) return null
                    
                    return (
                      <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">{category}</h4>
                        <p className="text-2xl font-bold text-blue-600">{categoryCount}</p>
                        <p className="text-sm text-gray-600">${categoryCost.toLocaleString()}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Property Maintenance Guide</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Preventive Maintenance Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cost Savings</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Prevents major repairs</li>
                          <li>• Extends equipment lifespan</li>
                          <li>• Reduces emergency call-outs</li>
                          <li>• Maintains property value</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tenant Satisfaction</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Fewer unexpected breakdowns</li>
                          <li>• Improved living conditions</li>
                          <li>• Demonstrates care for property</li>
                          <li>• Reduces tenant turnover</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Maintenance Schedule Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Monthly Tasks</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Test smoke and CO detectors</li>
                            <li>• Check HVAC filters</li>
                            <li>• Inspect plumbing for leaks</li>
                            <li>• Test GFCI outlets</li>
                          </ul>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Check exterior lighting</li>
                            <li>• Inspect common areas</li>
                            <li>• Review security systems</li>
                            <li>• Clean dryer vents</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Quarterly Tasks</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Deep clean HVAC systems</li>
                            <li>• Inspect roof and gutters</li>
                            <li>• Check caulking and weatherstripping</li>
                            <li>• Test water heater</li>
                          </ul>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Inspect exterior paint</li>
                            <li>• Check deck/patio safety</li>
                            <li>• Service garage doors</li>
                            <li>• Pest control inspection</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Annual Tasks</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Professional HVAC service</li>
                            <li>• Water heater maintenance</li>
                            <li>• Chimney inspection/cleaning</li>
                            <li>• Septic system pumping</li>
                          </ul>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Professional carpet cleaning</li>
                            <li>• Exterior power washing</li>
                            <li>• Tree trimming/landscaping</li>
                            <li>• Safety equipment updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-orange-600" />
                      Emergency Maintenance Protocol
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Immediate Response Required</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Gas leaks or electrical hazards</li>
                        <li>• Major water leaks or flooding</li>
                        <li>• Heating/cooling system failures</li>
                        <li>• Security system malfunctions</li>
                        <li>• Structural damage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Steps</h4>
                      <ol className="space-y-1 text-sm text-gray-600">
                        <li>1. Ensure tenant safety first</li>
                        <li>2. Contact emergency services if needed</li>
                        <li>3. Shut off utilities if necessary</li>
                        <li>4. Contact emergency repair vendor</li>
                        <li>5. Document everything with photos</li>
                        <li>6. Follow up with permanent repairs</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Cost Management Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Budget Planning</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Set aside 1-3% of property value annually</li>
                          <li>• Track all maintenance expenses</li>
                          <li>• Plan for major replacements</li>
                          <li>• Get multiple quotes for large jobs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Vendor Management</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Build relationships with reliable vendors</li>
                          <li>• Negotiate volume discounts</li>
                          <li>• Verify licenses and insurance</li>
                          <li>• Keep detailed vendor records</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      Common Maintenance Mistakes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-red-600">Delaying Preventive Maintenance</h4>
                        <p className="text-sm text-gray-600">
                          Skipping regular maintenance leads to expensive emergency repairs and tenant complaints.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600">Using Unqualified Contractors</h4>
                        <p className="text-sm text-gray-600">
                          Always verify licenses, insurance, and references before hiring contractors.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600">Poor Documentation</h4>
                        <p className="text-sm text-gray-600">
                          Keep detailed records of all maintenance work for warranty claims and tax purposes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600">Ignoring Tenant Reports</h4>
                        <p className="text-sm text-gray-600">
                          Address tenant maintenance requests promptly to prevent small issues from becoming major problems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MaintenanceTracker