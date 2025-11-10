'use client'

import { useState, useEffect } from "react";
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Plus, Trash2, DollarSign, Home, Target, Award, AlertTriangle } from 'lucide-react'

interface Property {
  id: string
  name: string
  address: string
  purchasePrice: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  monthlyRent: number
  vacancy: number
  propertyTax: number
  insurance: number
  maintenance: number
  propertyManagement: number
  otherExpenses: number
  appreciationRate: number
  capRate: number
  color: string
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Investment Property Comparison Tool',
    description: 'Advanced comparison tool for multiple investment properties. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function InvestmentPropertyComparisonTool() {
  const [properties, setProperties] = useState<Property[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProperty, setNewProperty] = useState<Partial<Property>>({
    name: '',
    address: '',
    purchasePrice: 0,
    downPayment: 0,
    loanAmount: 0,
    interestRate: 0,
    loanTerm: 30,
    monthlyRent: 0,
    vacancy: 5,
    propertyTax: 0,
    insurance: 0,
    maintenance: 0,
    propertyManagement: 0,
    otherExpenses: 0,
    appreciationRate: 3,
    capRate: 0
  })

  // Load sample properties
  useEffect(() => {
    const sampleProperties: Property[] = [
      {
        id: '1',
        name: 'Downtown Condo',
        address: '123 Main St, Downtown',
        purchasePrice: 350000,
        downPayment: 70000,
        loanAmount: 280000,
        interestRate: 3.5,
        loanTerm: 30,
        monthlyRent: 2800,
        vacancy: 5,
        propertyTax: 4200,
        insurance: 1200,
        maintenance: 2400,
        propertyManagement: 2520,
        otherExpenses: 600,
        appreciationRate: 4,
        capRate: 7.2,
        color: COLORS[0]
      },
      {
        id: '2',
        name: 'Suburban House',
        address: '456 Oak Ave, Suburbs',
        purchasePrice: 450000,
        downPayment: 90000,
        loanAmount: 360000,
        interestRate: 3.75,
        loanTerm: 30,
        monthlyRent: 3200,
        vacancy: 3,
        propertyTax: 5400,
        insurance: 1800,
        maintenance: 3600,
        propertyManagement: 2880,
        otherExpenses: 800,
        appreciationRate: 3.5,
        capRate: 6.8,
        color: COLORS[1]
      },
      {
        id: '3',
        name: 'Beach Rental',
        address: '789 Ocean Dr, Beachside',
        purchasePrice: 600000,
        downPayment: 120000,
        loanAmount: 480000,
        interestRate: 4.0,
        loanTerm: 30,
        monthlyRent: 4500,
        vacancy: 8,
        propertyTax: 7200,
        insurance: 2400,
        maintenance: 4800,
        propertyManagement: 4050,
        otherExpenses: 1200,
        appreciationRate: 5,
        capRate: 6.5,
        color: COLORS[2]
      }
    ]
    setProperties(sampleProperties)
  }, [])

  const handleAddProperty = () => {
    if (newProperty.name && newProperty.purchasePrice) {
      const property: Property = {
        id: Date.now().toString(),
        name: newProperty.name || '',
        address: newProperty.address || '',
        purchasePrice: newProperty.purchasePrice || 0,
        downPayment: newProperty.downPayment || 0,
        loanAmount: newProperty.loanAmount || 0,
        interestRate: newProperty.interestRate || 0,
        loanTerm: newProperty.loanTerm || 30,
        monthlyRent: newProperty.monthlyRent || 0,
        vacancy: newProperty.vacancy || 5,
        propertyTax: newProperty.propertyTax || 0,
        insurance: newProperty.insurance || 0,
        maintenance: newProperty.maintenance || 0,
        propertyManagement: newProperty.propertyManagement || 0,
        otherExpenses: newProperty.otherExpenses || 0,
        appreciationRate: newProperty.appreciationRate || 3,
        capRate: newProperty.capRate || 0,
        color: COLORS[properties.length % COLORS.length]
      }
      setProperties([...properties, property])
      setNewProperty({
        name: '',
        address: '',
        purchasePrice: 0,
        downPayment: 0,
        loanAmount: 0,
        interestRate: 0,
        loanTerm: 30,
        monthlyRent: 0,
        vacancy: 5,
        propertyTax: 0,
        insurance: 0,
        maintenance: 0,
        propertyManagement: 0,
        otherExpenses: 0,
        appreciationRate: 3,
        capRate: 0
      })
      setShowAddForm(false)
    }
  }

  const handleDeleteProperty = (id: string) => {
    setProperties(properties.filter(p => p.id !== id))
  }

  // Calculate metrics for each property
  const calculateMetrics = (property: Property) => {
    const monthlyMortgage = property.loanAmount > 0 ? 
      (property.loanAmount * (property.interestRate / 100 / 12) * Math.pow(1 + property.interestRate / 100 / 12, property.loanTerm * 12)) / 
      (Math.pow(1 + property.interestRate / 100 / 12, property.loanTerm * 12) - 1) : 0

    const effectiveRent = property.monthlyRent * (1 - property.vacancy / 100)
    const monthlyExpenses = (property.propertyTax + property.insurance + property.maintenance + property.propertyManagement + property.otherExpenses) / 12
    const monthlyCashFlow = effectiveRent - monthlyMortgage - monthlyExpenses
    const annualCashFlow = monthlyCashFlow * 12
    
    const cashOnCashReturn = property.downPayment > 0 ? (annualCashFlow / property.downPayment) * 100 : 0
    const totalReturn = cashOnCashReturn + property.appreciationRate
    const roi = property.downPayment > 0 ? (annualCashFlow + (property.purchasePrice * property.appreciationRate / 100)) / property.downPayment * 100 : 0
    
    const onePercentRule = (property.monthlyRent / property.purchasePrice) * 100
    const twoPercentRule = onePercentRule >= 2
    const fiftyPercentRule = monthlyExpenses <= (property.monthlyRent * 0.5)

    return {
      monthlyMortgage,
      effectiveRent,
      monthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCashReturn,
      totalReturn,
      roi,
      onePercentRule,
      twoPercentRule,
      fiftyPercentRule
    }
  }

  // Prepare comparison data
  const comparisonData = properties.map(property => {
    const metrics = calculateMetrics(property)
    return {
      name: property.name,
      purchasePrice: property.purchasePrice,
      downPayment: property.downPayment,
      monthlyRent: property.monthlyRent,
      // monthlyCashFlow: metrics.monthlyCashFlow, // duplicate key removed
      // cashOnCashReturn: metrics.cashOnCashReturn, // duplicate key removed
      capRate: property.capRate,
      appreciationRate: property.appreciationRate,
      // totalReturn: metrics.totalReturn, // duplicate key removed
      // roi: metrics.roi  // duplicate key – already spread via ...metrics above
      // onePercentRule is already included via ...metrics
      color: property.color,
      ...metrics
    }
  })

  // Radar chart data for risk/return analysis
  const radarData = properties.map(property => {
    const metrics = calculateMetrics(property)
    return {
      property: property.name,
      'Cash Flow': Math.max(0, metrics.monthlyCashFlow / 100), // Normalized
      'Cap Rate': property.capRate,
      'Appreciation': property.appreciationRate,
      'Cash-on-Cash': Math.max(0, metrics.cashOnCashReturn),
      'Location Score': Math.random() * 10, // Simulated
      'Liquidity': Math.random() * 10 // Simulated
    }
  })

  // Best property recommendations
  const getBestProperty = (metric: string) => {
    if (comparisonData.length === 0) return null
    
    switch (metric) {
      case 'cashFlow':
        return comparisonData.reduce((best, current) => 
          current.monthlyCashFlow > best.monthlyCashFlow ? current : best
        )
      case 'cashOnCash':
        return comparisonData.reduce((best, current) => 
          current.cashOnCashReturn > best.cashOnCashReturn ? current : best
        )
      case 'totalReturn':
        return comparisonData.reduce((best, current) => 
          current.totalReturn > best.totalReturn ? current : best
        )
      case 'capRate':
        return comparisonData.reduce((best, current) => 
          current.capRate > best.capRate ? current : best
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Investment Property Comparison Tool</h1>
          <p className="text-xl text-gray-600">Compare multiple investment properties side-by-side</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Properties Compared</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Cash Flow</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {getBestProperty('cashFlow') ? `$${getBestProperty('cashFlow')!.monthlyCashFlow.toLocaleString()}` : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {getBestProperty('cashFlow')?.name}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Cash-on-Cash</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {getBestProperty('cashOnCash') ? `${getBestProperty('cashOnCash')!.cashOnCashReturn.toFixed(1)}%` : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {getBestProperty('cashOnCash')?.name}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Total Return</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {getBestProperty('totalReturn') ? `${getBestProperty('totalReturn')!.totalReturn.toFixed(1)}%` : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {getBestProperty('totalReturn')?.name}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="rankings">Rankings</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Property Management</h2>
              <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Property
              </Button>
            </div>

            {showAddForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="name">Property Name</Label>
                      <Input
                        id="name"
                        value={newProperty.name || ''}
                        onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                        placeholder="e.g., Downtown Condo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={newProperty.address || ''}
                        onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
                        placeholder="123 Main St, City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        value={newProperty.purchasePrice || ''}
                        onChange={(e) => setNewProperty({...newProperty, purchasePrice: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downPayment">Down Payment ($)</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={newProperty.downPayment || ''}
                        onChange={(e) => setNewProperty({...newProperty, downPayment: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={newProperty.loanAmount || ''}
                        onChange={(e) => setNewProperty({...newProperty, loanAmount: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.01"
                        value={newProperty.interestRate || ''}
                        onChange={(e) => setNewProperty({...newProperty, interestRate: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={newProperty.monthlyRent || ''}
                        onChange={(e) => setNewProperty({...newProperty, monthlyRent: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="vacancy">Vacancy Rate (%)</Label>
                      <Input
                        id="vacancy"
                        type="number"
                        value={newProperty.vacancy || ''}
                        onChange={(e) => setNewProperty({...newProperty, vacancy: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="propertyTax">Annual Property Tax ($)</Label>
                      <Input
                        id="propertyTax"
                        type="number"
                        value={newProperty.propertyTax || ''}
                        onChange={(e) => setNewProperty({...newProperty, propertyTax: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="insurance">Annual Insurance ($)</Label>
                      <Input
                        id="insurance"
                        type="number"
                        value={newProperty.insurance || ''}
                        onChange={(e) => setNewProperty({...newProperty, insurance: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="maintenance">Annual Maintenance ($)</Label>
                      <Input
                        id="maintenance"
                        type="number"
                        value={newProperty.maintenance || ''}
                        onChange={(e) => setNewProperty({...newProperty, maintenance: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="appreciationRate">Appreciation Rate (%)</Label>
                      <Input
                        id="appreciationRate"
                        type="number"
                        step="0.1"
                        value={newProperty.appreciationRate || ''}
                        onChange={(e) => setNewProperty({...newProperty, appreciationRate: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAddProperty}>Add Property</Button>
                    <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {properties.map((property) => {
                const metrics = calculateMetrics(property)
                return (
                  <Card key={property.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full" style={{backgroundColor: property.color}}></div>
                            {property.name}
                          </CardTitle>
                          <CardDescription>{property.address}</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteProperty(property.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Purchase Price</p>
                          <p className="font-semibold">${property.purchasePrice.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Rent</p>
                          <p className="font-semibold">${property.monthlyRent.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cash Flow</p>
                          <p className={`font-semibold ${metrics.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ${metrics.monthlyCashFlow.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cash-on-Cash</p>
                          <p className="font-semibold">{metrics.cashOnCashReturn.toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cap Rate</p>
                          <p className="font-semibold">{property.capRate.toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">1% Rule</p>
                          <p className={`font-semibold ${metrics.onePercentRule >= 1 ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.onePercentRule.toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Cash Flow Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Cash Flow']} />
                      <Bar dataKey="monthlyCashFlow" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cash-on-Cash Return Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, 'Cash-on-Cash Return']} />
                      <Bar dataKey="cashOnCashReturn" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cap Rate vs Appreciation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, '']} />
                      <Legend />
                      <Bar dataKey="capRate" fill="#8884d8" name="Cap Rate" />
                      <Bar dataKey="appreciationRate" fill="#82ca9d" name="Appreciation Rate" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Total Return Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, 'Total Return']} />
                      <Bar dataKey="totalReturn" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Side-by-Side Comparison Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2 text-left">Metric</th>
                        {properties.map(property => (
                          <th key={property.id} className="border border-gray-300 p-2 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{backgroundColor: property.color}}></div>
                              {property.name}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Purchase Price', key: 'purchasePrice', format: 'currency' },
                        { label: 'Down Payment', key: 'downPayment', format: 'currency' },
                        { label: 'Monthly Rent', key: 'monthlyRent', format: 'currency' },
                        { label: 'Monthly Cash Flow', key: 'monthlyCashFlow', format: 'currency' },
                        { label: 'Cash-on-Cash Return', key: 'cashOnCashReturn', format: 'percentage' },
                        { label: 'Cap Rate', key: 'capRate', format: 'percentage' },
                        { label: 'Appreciation Rate', key: 'appreciationRate', format: 'percentage' },
                        { label: 'Total Return', key: 'totalReturn', format: 'percentage' },
                        { label: '1% Rule', key: 'onePercentRule', format: 'percentage' }
                      ].map(metric => (
                        <tr key={metric.key}>
                          <td className="border border-gray-300 p-2 font-medium">{metric.label}</td>
                          {comparisonData.map(property => (
                            <td key={property.name} className="border border-gray-300 p-2 text-center">
                              {metric.format === 'currency' 
                                ? `$${property[metric.key as keyof typeof property].toLocaleString()}`
                                : `${Number(property[metric.key as keyof typeof property]).toFixed(1)}%`
                              }
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk-Return Analysis</CardTitle>
                <CardDescription>Multi-dimensional property comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData[0] ? Object.keys(radarData[0]).filter(key => key !== 'property').map(key => ({
                    metric: key,
                    ...radarData.reduce((acc, property) => ({
                      ...acc,
                      [property.property]: property[key as keyof typeof property]
                    }), {})
                  })) : []}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} />
                    {properties.map((property) => (
                      <Radar
                        key={property.id}
                        name={property.name}
                        dataKey={property.name}
                        stroke={property.color}
                        fill={property.color}
                        fillOpacity={0.1}
                        strokeWidth={2}
                      />
                    ))}
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Rules Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {comparisonData.map(property => {
                      const metrics = calculateMetrics(properties.find(p => p.name === property.name)!)
                      return (
                        <div key={property.name} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{backgroundColor: property.color}}></div>
                            {property.name}
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              {metrics.onePercentRule >= 1 ? (
                                <Badge variant="default">✓ 1% Rule</Badge>
                              ) : (
                                <Badge variant="secondary">✗ 1% Rule</Badge>
                              )}
                              <span>{metrics.onePercentRule.toFixed(2)}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {metrics.twoPercentRule ? (
                                <Badge variant="default">✓ 2% Rule</Badge>
                              ) : (
                                <Badge variant="secondary">✗ 2% Rule</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {metrics.fiftyPercentRule ? (
                                <Badge variant="default">✓ 50% Rule</Badge>
                              ) : (
                                <Badge variant="secondary">✗ 50% Rule</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {property.capRate >= 6 ? (
                                <Badge variant="default">✓ Cap Rate</Badge>
                              ) : (
                                <Badge variant="secondary">✗ Cap Rate</Badge>
                              )}
                              <span>{property.capRate.toFixed(1)}%</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {comparisonData.map(property => {
                      const riskScore = (
                        (property.monthlyCashFlow < 0 ? 2 : 0) +
                        (property.capRate < 5 ? 1 : 0) +
                        (property.onePercentRule < 0.8 ? 1 : 0) +
                        (property.cashOnCashReturn < 5 ? 1 : 0)
                      )
                      const riskLevel = riskScore <= 1 ? 'Low' : riskScore <= 3 ? 'Medium' : 'High'
                      const riskColor = riskLevel === 'Low' ? 'text-green-600' : riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'

                      return (
                        <div key={property.name} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{backgroundColor: property.color}}></div>
                              {property.name}
                            </h4>
                            <Badge className={riskColor}>{riskLevel} Risk</Badge>
                          </div>
                          <div className="text-sm space-y-1">
                            {property.monthlyCashFlow < 0 && (
                              <div className="flex items-center gap-2 text-red-600">
                                <AlertTriangle className="h-3 w-3" />
                                Negative cash flow
                              </div>
                            )}
                            {property.capRate < 5 && (
                              <div className="flex items-center gap-2 text-yellow-600">
                                <AlertTriangle className="h-3 w-3" />
                                Low cap rate
                              </div>
                            )}
                            {property.onePercentRule < 0.8 && (
                              <div className="flex items-center gap-2 text-yellow-600">
                                <AlertTriangle className="h-3 w-3" />
                                Below 1% rule
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rankings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Best Cash Flow', key: 'monthlyCashFlow', format: 'currency' },
                { title: 'Best Cash-on-Cash Return', key: 'cashOnCashReturn', format: 'percentage' },
                { title: 'Best Cap Rate', key: 'capRate', format: 'percentage' },
                { title: 'Best Total Return', key: 'totalReturn', format: 'percentage' }
              ].map(ranking => (
                <Card key={ranking.key}>
                  <CardHeader>
                    <CardTitle>{ranking.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {comparisonData
                        .sort((a, b) => Number(b[ranking.key as keyof typeof a]) - Number(a[ranking.key as keyof typeof a]))
                        .map((property, index) => (
                          <div key={property.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-sm font-bold">
                                {index + 1}
                              </div>
                              <div className="w-3 h-3 rounded-full" style={{backgroundColor: property.color}}></div>
                              <span className="font-medium">{property.name}</span>
                            </div>
                            <span className="font-bold">
                              {ranking.format === 'currency' 
                                ? `$${property[ranking.key as keyof typeof property].toLocaleString()}`
                                : `${Number(property[ranking.key as keyof typeof property]).toFixed(1)}%`
                              }
                            </span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Recommendations</CardTitle>
                <CardDescription>Based on your property comparison analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comparisonData.length > 0 && (
                    <>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Top Overall Recommendation
                        </h4>
                        <p className="text-green-700">
                          <strong>{getBestProperty('totalReturn')?.name}</strong> offers the best total return at{' '}
                          {getBestProperty('totalReturn')?.totalReturn.toFixed(1)}%, combining strong cash flow and appreciation potential.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Best for Cash Flow</h4>
                          <p className="text-blue-700">
                            <strong>{getBestProperty('cashFlow')?.name}</strong> generates the highest monthly cash flow of{' '}
                            ${getBestProperty('cashFlow')?.monthlyCashFlow.toLocaleString()}.
                          </p>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Best for Returns</h4>
                          <p className="text-purple-700">
                            <strong>{getBestProperty('cashOnCash')?.name}</strong> offers the highest cash-on-cash return at{' '}
                            {getBestProperty('cashOnCash')?.cashOnCashReturn.toFixed(1)}%.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Property-Specific Recommendations:</h4>
                        {comparisonData.map(property => {
                          const recommendations = []

                          if (property.monthlyCashFlow < 0) {
                            recommendations.push("Consider increasing rent or reducing expenses to improve cash flow")
                          }
                          if (property.onePercentRule < 1) {
                            recommendations.push("Property may be overpriced relative to rental income")
                          }
                          if (property.capRate < 5) {
                            recommendations.push("Low cap rate suggests focus on appreciation over income")
                          }
                          if (property.cashOnCashReturn > 10) {
                            recommendations.push("Excellent cash-on-cash return makes this a strong income property")
                          }
                          if (property.totalReturn > 12) {
                            recommendations.push("Strong total return potential with good balance of income and appreciation")
                          }

                          return (
                            <div key={property.name} className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{backgroundColor: property.color}}></div>
                                {property.name}
                              </h5>
                              <ul className="text-sm space-y-1">
                                {recommendations.map((rec, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-600">•</span>
                                    {rec}
                                  </li>
                                ))}
                                {recommendations.length === 0 && (
                                  <li className="text-gray-600">No specific recommendations - property metrics are within normal ranges</li>
                                )}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {comparisonData.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Add properties to see personalized recommendations
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comprehensive Article Section */}
          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Complete Guide to Investment Property Comparison
                </CardTitle>
                <p className="text-gray-600">
                  Master the art of comparing investment properties with comprehensive analysis techniques and key metrics
                </p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">Why Compare Properties?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800">
                        Property comparison helps investors make data-driven decisions by evaluating multiple opportunities 
                        side-by-side, identifying the best returns, and minimizing investment risks through thorough analysis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900">Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-800">
                        Systematic comparison reveals hidden opportunities, prevents emotional decisions, optimizes portfolio 
                        allocation, and ensures you select properties that align with your investment strategy and goals.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Essential Comparison Metrics</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card className="border-green-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-green-800">Cash Flow Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Monthly net cash flow</li>
                            <li>• Annual cash flow projections</li>
                            <li>• Cash flow stability</li>
                            <li>• Seasonal variations</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-800">Return Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Cash-on-cash return</li>
                            <li>• Cap rate analysis</li>
                            <li>• Total return (IRR)</li>
                            <li>• Return on equity (ROE)</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-purple-800">Risk Assessment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Market volatility</li>
                            <li>• Tenant quality/stability</li>
                            <li>• Property condition</li>
                            <li>• Location factors</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-orange-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-orange-800">Growth Potential</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Appreciation prospects</li>
                            <li>• Rent growth potential</li>
                            <li>• Market development</li>
                            <li>• Value-add opportunities</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Financial Analysis Framework</h3>
                    <div className="space-y-4">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Initial Investment Comparison</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Purchase Costs</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Down payment requirements</li>
                                <li>• Closing costs and fees</li>
                                <li>• Inspection and appraisal costs</li>
                                <li>• Initial renovation needs</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Financing Terms</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Interest rates and terms</li>
                                <li>• Loan-to-value ratios</li>
                                <li>• Monthly debt service</li>
                                <li>• Prepayment penalties</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Income Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Rental Income</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Current market rents</li>
                                <li>• Rent growth projections</li>
                                <li>• Vacancy rate assumptions</li>
                                <li>• Seasonal rental patterns</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Additional Income</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Parking fees</li>
                                <li>• Storage rentals</li>
                                <li>• Laundry income</li>
                                <li>• Pet fees and deposits</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-red-200 bg-red-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800">Expense Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-red-700 mb-2">Operating Expenses</h5>
                              <ul className="text-sm space-y-1 text-red-600">
                                <li>• Property taxes</li>
                                <li>• Insurance premiums</li>
                                <li>• Maintenance and repairs</li>
                                <li>• Property management fees</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-red-700 mb-2">Variable Costs</h5>
                              <ul className="text-sm space-y-1 text-red-600">
                                <li>• Utilities (if owner-paid)</li>
                                <li>• Marketing and advertising</li>
                                <li>• Legal and professional fees</li>
                                <li>• Capital expenditure reserves</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Location Comparison Factors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-teal-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-teal-800">Market Fundamentals</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Population growth trends</li>
                            <li>• Employment and job growth</li>
                            <li>• Economic diversification</li>
                            <li>• Infrastructure development</li>
                            <li>• Supply and demand balance</li>
                            <li>• Price-to-rent ratios</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-purple-800">Neighborhood Quality</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• School district ratings</li>
                            <li>• Crime rates and safety</li>
                            <li>• Walkability and amenities</li>
                            <li>• Transportation access</li>
                            <li>• Future development plans</li>
                            <li>• Property appreciation history</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Property-Specific Analysis</h3>
                    <div className="space-y-4">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Physical Condition Assessment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Structural Elements</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Foundation condition</li>
                                <li>• Roof age and condition</li>
                                <li>• HVAC system status</li>
                                <li>• Electrical and plumbing</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Cosmetic Factors</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Interior finishes</li>
                                <li>• Flooring condition</li>
                                <li>• Paint and fixtures</li>
                                <li>• Curb appeal</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-2">Improvement Needs</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Immediate repairs</li>
                                <li>• Deferred maintenance</li>
                                <li>• Upgrade opportunities</li>
                                <li>• Code compliance issues</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Tenant and Lease Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Current Tenants</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Lease terms and rates</li>
                                <li>• Tenant quality and history</li>
                                <li>• Lease expiration dates</li>
                                <li>• Security deposits held</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-700 mb-2">Market Position</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Rent vs. market rates</li>
                                <li>• Tenant demand level</li>
                                <li>• Competition analysis</li>
                                <li>• Rental history patterns</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Risk Comparison Matrix</h3>
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 p-3 text-left">Risk Factor</th>
                              <th className="border border-gray-300 p-3 text-center">Low Risk</th>
                              <th className="border border-gray-300 p-3 text-center">Medium Risk</th>
                              <th className="border border-gray-300 p-3 text-center">High Risk</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-3 font-semibold">Market Volatility</td>
                              <td className="border border-gray-300 p-3 text-green-600">Stable, diversified economy</td>
                              <td className="border border-gray-300 p-3 text-yellow-600">Moderate fluctuations</td>
                              <td className="border border-gray-300 p-3 text-red-600">High volatility, single industry</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-semibold">Tenant Risk</td>
                              <td className="border border-gray-300 p-3 text-green-600">Long-term, quality tenants</td>
                              <td className="border border-gray-300 p-3 text-yellow-600">Average tenant turnover</td>
                              <td className="border border-gray-300 p-3 text-red-600">High turnover, problem tenants</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-3 font-semibold">Property Condition</td>
                              <td className="border border-gray-300 p-3 text-green-600">Excellent condition, new systems</td>
                              <td className="border border-gray-300 p-3 text-yellow-600">Good condition, some updates needed</td>
                              <td className="border border-gray-300 p-3 text-red-600">Poor condition, major repairs needed</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-3 font-semibold">Liquidity</td>
                              <td className="border border-gray-300 p-3 text-green-600">High demand, quick sale potential</td>
                              <td className="border border-gray-300 p-3 text-yellow-600">Moderate demand</td>
                              <td className="border border-gray-300 p-3 text-red-600">Limited demand, slow to sell</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Investment Strategy Alignment</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Cash Flow Focus</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-1">Priority Metrics</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Monthly cash flow</li>
                                <li>• Cash-on-cash return</li>
                                <li>• Debt service coverage</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-700 mb-1">Property Types</h5>
                              <ul className="text-sm space-y-1 text-blue-600">
                                <li>• Multi-family properties</li>
                                <li>• Commercial rentals</li>
                                <li>• Stable residential areas</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Appreciation Focus</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-green-700 mb-1">Priority Metrics</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Historical appreciation</li>
                                <li>• Market growth trends</li>
                                <li>• Development pipeline</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-green-700 mb-1">Property Types</h5>
                              <ul className="text-sm space-y-1 text-green-600">
                                <li>• Emerging neighborhoods</li>
                                <li>• Transit-oriented development</li>
                                <li>• Gentrification areas</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 bg-purple-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-purple-800">Value-Add Focus</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-purple-700 mb-1">Priority Metrics</h5>
                              <ul className="text-sm space-y-1 text-purple-600">
                                <li>• Improvement ROI</li>
                                <li>• After-repair value</li>
                                <li>• Renovation costs</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-purple-700 mb-1">Property Types</h5>
                              <ul className="text-sm space-y-1 text-purple-600">
                                <li>• Distressed properties</li>
                                <li>• Outdated but solid bones</li>
                                <li>• Underutilized spaces</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Decision-Making Framework</h3>
                    <div className="space-y-4">
                      <Card className="border-gray-200 bg-gray-50">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-800">Weighted Scoring System</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-2">Step 1: Define Criteria Weights</h5>
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="font-medium text-gray-600 mb-1">Financial Metrics (40%)</p>
                                  <ul className="text-gray-600 space-y-1">
                                    <li>• Cash flow: 15%</li>
                                    <li>• ROI: 15%</li>
                                    <li>• Cap rate: 10%</li>
                                  </ul>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-600 mb-1">Location & Market (35%)</p>
                                  <ul className="text-gray-600 space-y-1">
                                    <li>• Market growth: 15%</li>
                                    <li>• Neighborhood quality: 10%</li>
                                    <li>• Liquidity: 10%</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-2">Step 2: Score Each Property (1-10)</h5>
                              <p className="text-sm text-gray-600">Rate each property on every criterion using a consistent 1-10 scale</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-2">Step 3: Calculate Weighted Scores</h5>
                              <p className="text-sm text-gray-600">Multiply each score by its weight and sum for total score</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Common Comparison Mistakes</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-red-800 mb-3">Mistakes to Avoid</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Analysis Errors</h5>
                            <ul className="text-sm space-y-1 text-red-600">
                              <li>• Comparing different property types</li>
                              <li>• Ignoring market timing</li>
                              <li>• Underestimating expenses</li>
                              <li>• Overestimating rental income</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Decision Biases</h5>
                            <ul className="text-sm space-y-1 text-red-600">
                              <li>• Emotional attachment to properties</li>
                              <li>• Focusing only on purchase price</li>
                              <li>• Ignoring exit strategy</li>
                              <li>• Inadequate due diligence</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Technology and Tools</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">Analysis Software</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Property analysis spreadsheets</li>
                            <li>• Real estate investment software</li>
                            <li>• Market data platforms</li>
                            <li>• Comparative market analysis tools</li>
                            <li>• Financial modeling applications</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800">Data Sources</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-2 text-gray-700">
                            <li>• MLS and property databases</li>
                            <li>• Rental market reports</li>
                            <li>• Economic and demographic data</li>
                            <li>• Property tax records</li>
                            <li>• Neighborhood statistics</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Use consistent criteria across all properties</li>
                        <li>• Weight metrics based on your investment strategy</li>
                        <li>• Consider both quantitative and qualitative factors</li>
                        <li>• Account for market timing and cycles</li>
                      </ul>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Perform thorough due diligence on top candidates</li>
                        <li>• Factor in your risk tolerance and experience</li>
                        <li>• Consider portfolio diversification needs</li>
                        <li>• Plan your exit strategy before purchasing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </div>
  )
}