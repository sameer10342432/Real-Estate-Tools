'use client';

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts'
import { Plus, Trash2, TrendingUp, DollarSign, Target, Shield } from 'lucide-react'

interface Property {
  id: string
  name: string
  type: 'residential' | 'commercial' | 'industrial' | 'mixed-use'
  location: string
  purchasePrice: number
  interestRate: number
  currentValue: number
  downPayment: number
  loanAmount: number
  monthlyRent: number
  monthlyExpenses: number
  vacancy: number
  appreciationRate: number
  capRate: number
  riskScore: number
  liquidityScore: number
  weight: number
}

interface OptimizationGoal {
  type: 'income' | 'growth' | 'balanced' | 'conservative' | 'aggressive'
  riskTolerance: number
  timeHorizon: number
  targetReturn: number
  maxRisk: number
}

interface RebalanceRecommendation {
  propertyId: string;
  currentWeight: number;
  targetWeight: number;
  action: 'buy' | 'sell' | 'hold';
  amount: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#8DD1E1']

export default function PropertyInvestmentPortfolioOptimizer() {
  const [properties, setProperties] = useState<Property[]>([])
  const [optimizationGoal, setOptimizationGoal] = useState<OptimizationGoal>({
    type: 'balanced',
    riskTolerance: 5,
    timeHorizon: 10,
    targetReturn: 8,
    maxRisk: 6
  })
  const [showAddForm, setShowAddForm] = useState(false)
  const [optimizedWeights, setOptimizedWeights] = useState<{[key: string]: number}>({})
  const [rebalanceRecommendations, setRebalanceRecommendations] = useState<RebalanceRecommendation[]>([])
  const [newProperty, setNewProperty] = useState<Partial<Property>>({
    name: '',
    type: 'residential',
    location: '',
    purchasePrice: 0,
    currentValue: 0,
    downPayment: 0,
    loanAmount: 0,
    monthlyRent: 0,
    monthlyExpenses: 0,
    vacancy: 5,
    appreciationRate: 3,
    capRate: 0,
    riskScore: 5,
    liquidityScore: 5,
    weight: 0
  })

  // Load sample portfolio
  useEffect(() => {
    const sampleProperties: Property[] = [
      {
        id: '1',
        name: 'Downtown Office Complex',
        type: 'commercial',
        location: 'Downtown Business District',
        purchasePrice: 2500000,
        currentValue: 2750000,
        downPayment: 500000,
        loanAmount: 2000000,
        interestRate: 3.5,
        monthlyRent: 25000,
        monthlyExpenses: 8000,
        vacancy: 3,
        appreciationRate: 4.5,
        capRate: 7.8,
        riskScore: 4,
        liquidityScore: 6,
        weight: 35
      },
      {
        id: '2',
        name: 'Suburban Rental Portfolio',
        type: 'residential',
        location: 'Suburban Area',
        purchasePrice: 1800000,
        currentValue: 1980000,
        downPayment: 360000,
        loanAmount: 1440000,
        interestRate: 4.0,
        monthlyRent: 18000,
        monthlyExpenses: 5400,
        vacancy: 5,
        appreciationRate: 3.8,
        capRate: 6.9,
        riskScore: 3,
        liquidityScore: 7,
        weight: 25
      },
      {
        id: '3',
        name: 'Industrial Warehouse',
        type: 'industrial',
        location: 'Industrial Zone',
        purchasePrice: 3200000,
        currentValue: 3520000,
        downPayment: 640000,
        loanAmount: 2560000,
        interestRate: 5.0,
        monthlyRent: 28000,
        monthlyExpenses: 6000,
        vacancy: 2,
        appreciationRate: 5.2,
        capRate: 8.2,
        riskScore: 5,
        liquidityScore: 4,
        weight: 30
      },
      {
        id: '4',
        name: 'Mixed-Use Development',
        type: 'mixed-use',
        location: 'Urban Center',
        purchasePrice: 1500000,
        currentValue: 1650000,
        downPayment: 300000,
        loanAmount: 1200000,
        interestRate: 4.5,
        monthlyRent: 15000,
        monthlyExpenses: 4500,
        vacancy: 4,
        appreciationRate: 4.0,
        capRate: 7.2,
        riskScore: 6,
        liquidityScore: 5,
        weight: 10
      }
    ]
    setProperties(sampleProperties)
  }, [])

  const optimizePortfolio = useCallback(() => {
    // Simplified portfolio optimization algorithm
    const totalValue = properties.reduce((sum, p) => sum + p.currentValue, 0)
    const optimized: {[key: string]: number} = {}
    const recommendations: RebalanceRecommendation[] = []

    properties.forEach(property => {
      const expectedReturn = property.capRate + property.appreciationRate
      const riskAdjustedReturn = expectedReturn - (property.riskScore * 0.5)
      
      let targetWeight = 0
      
      switch (optimizationGoal.type) {
        case 'income':
          targetWeight = (property.capRate / 10) * 100
          break
        case 'growth':
          targetWeight = (property.appreciationRate / 6) * 100
          break
        case 'conservative':
          targetWeight = ((10 - property.riskScore) / 10) * 100
          break
        case 'aggressive':
          targetWeight = (riskAdjustedReturn / 15) * 100
          break
        default: // balanced
          targetWeight = (riskAdjustedReturn / 12) * 100
      }

      // Normalize weights
      optimized[property.id] = Math.max(5, Math.min(40, targetWeight))

      // Generate rebalancing recommendations
      const currentWeight = (property.currentValue / totalValue) * 100
      const difference = targetWeight - currentWeight
      
      if (Math.abs(difference) > 5) {
        recommendations.push({
          propertyId: property.id,
          action: difference > 0 ? 'buy' : 'sell',
          currentWeight: currentWeight,
          targetWeight: targetWeight,
          amount: (totalValue * Math.abs(difference) / 100)
        })
      }
    })

    // Normalize optimized weights to sum to 100%
    const totalOptimized = Object.values(optimized).reduce((sum, weight) => sum + weight, 0)
    Object.keys(optimized).forEach(id => {
      optimized[id] = (optimized[id] / totalOptimized) * 100
    })

    setOptimizedWeights(optimized)
    setRebalanceRecommendations(recommendations)
  }, [properties, optimizationGoal])

  // Optimize portfolio weights based on goals
  useEffect(() => {
    if (properties.length > 0) {
      optimizePortfolio();
    }
  }, [properties, optimizationGoal, optimizePortfolio]);

  const handleAddProperty = () => {
    if (newProperty.name && newProperty.purchasePrice) {
      const property: Property = {
        id: Date.now().toString(),
        name: newProperty.name || '',
        type: newProperty.type || 'residential',
        location: newProperty.location || '',
        purchasePrice: newProperty.purchasePrice || 0,
        currentValue: newProperty.currentValue || newProperty.purchasePrice || 0,
        downPayment: newProperty.downPayment || 0,
        loanAmount: newProperty.loanAmount || 0,
        interestRate: newProperty.interestRate || 0,
        monthlyRent: newProperty.monthlyRent || 0,
        monthlyExpenses: newProperty.monthlyExpenses || 0,
        vacancy: newProperty.vacancy || 5,
        appreciationRate: newProperty.appreciationRate || 3,
        capRate: newProperty.capRate || 0,
        riskScore: newProperty.riskScore || 5,
        liquidityScore: newProperty.liquidityScore || 5,
        weight: 0
      }
      setProperties([...properties, property])
      setNewProperty({
        name: '',
        type: 'residential',
        location: '',
        purchasePrice: 0,
        currentValue: 0,
        downPayment: 0,
        loanAmount: 0,
        interestRate: 0,
        monthlyRent: 0,
        monthlyExpenses: 0,
        vacancy: 5,
        appreciationRate: 3,
        capRate: 0,
        riskScore: 5,
        liquidityScore: 5,
        weight: 0
      })
      setShowAddForm(false)
    }
  }

  const handleDeleteProperty = (id: string) => {
    setProperties(properties.filter(p => p.id !== id))
  }

  // Calculate portfolio metrics
  const calculatePortfolioMetrics = () => {
    if (properties.length === 0) return null

    const totalValue = properties.reduce((sum, p) => sum + p.currentValue, 0)
    const totalEquity = properties.reduce((sum, p) => sum + (p.currentValue - p.loanAmount), 0)
    const totalMonthlyIncome = properties.reduce((sum, p) => sum + (p.monthlyRent * (1 - p.vacancy / 100)), 0)
    const totalMonthlyExpenses = properties.reduce((sum, p) => sum + p.monthlyExpenses, 0)
    const netCashFlow = totalMonthlyIncome - totalMonthlyExpenses

    const weightedCapRate = properties.reduce((sum, p) => {
      const weight = p.currentValue / totalValue
      return sum + (p.capRate * weight)
    }, 0)

    const weightedAppreciation = properties.reduce((sum, p) => {
      const weight = p.currentValue / totalValue
      return sum + (p.appreciationRate * weight)
    }, 0)

    const weightedRisk = properties.reduce((sum, p) => {
      const weight = p.currentValue / totalValue
      return sum + (p.riskScore * weight)
    }, 0)

    const sharpeRatio = weightedRisk > 0 ? (weightedCapRate + weightedAppreciation) / weightedRisk : 0

    return {
      totalValue,
      totalEquity,
      totalMonthlyIncome,
      totalMonthlyExpenses,
      netCashFlow,
      weightedCapRate,
      weightedAppreciation,
      weightedRisk,
      sharpeRatio,
      leverageRatio: totalValue > 0 ? (totalValue - totalEquity) / totalValue : 0
    }
  }

  const portfolioMetrics = calculatePortfolioMetrics()

  // Prepare chart data
  const allocationData = properties.map(property => ({
    name: property.name,
    value: property.currentValue,
    percentage: portfolioMetrics ? (property.currentValue / portfolioMetrics.totalValue * 100).toFixed(1) : 0
  }))

  const performanceData = properties.map(property => ({
    name: property.name,
    capRate: property.capRate,
    appreciation: property.appreciationRate,
    totalReturn: property.capRate + property.appreciationRate,
    risk: property.riskScore,
    liquidity: property.liquidityScore
  }))

  const riskReturnData = properties.map(property => ({
    name: property.name,
    risk: property.riskScore,
    return: property.capRate + property.appreciationRate,
    value: property.currentValue / 1000000 // Size represents value
  }))

  const optimizationData = properties.map(property => ({
    name: property.name,
    current: portfolioMetrics ? (property.currentValue / portfolioMetrics.totalValue * 100) : 0,
    optimized: optimizedWeights[property.id] || 0
  }))

  // Scenario analysis
  const scenarioAnalysis = [
    { scenario: 'Bull Market', return: (portfolioMetrics?.weightedCapRate || 0) + (portfolioMetrics?.weightedAppreciation || 0) + 3 },
    { scenario: 'Base Case', return: (portfolioMetrics?.weightedCapRate || 0) + (portfolioMetrics?.weightedAppreciation || 0) },
    { scenario: 'Bear Market', return: (portfolioMetrics?.weightedCapRate || 0) + (portfolioMetrics?.weightedAppreciation || 0) - 4 },
    { scenario: 'Recession', return: (portfolioMetrics?.weightedCapRate || 0) - 2 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Property Investment Portfolio Optimizer</h1>
          <p className="text-xl text-gray-600">Advanced portfolio analysis and optimization for real estate investments</p>
        </div>

        {/* Portfolio Overview */}
        {portfolioMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${portfolioMetrics.totalValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  Equity: ${portfolioMetrics.totalEquity.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Cash Flow</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${portfolioMetrics.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${portfolioMetrics.netCashFlow.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Income: ${portfolioMetrics.totalMonthlyIncome.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weighted Cap Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{portfolioMetrics.weightedCapRate.toFixed(1)}%</div>
                <p className="text-xs text-muted-foreground">
                  Appreciation: {portfolioMetrics.weightedAppreciation.toFixed(1)}%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk-Adjusted Return</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{portfolioMetrics.sharpeRatio.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                  Risk Score: {portfolioMetrics.weightedRisk.toFixed(1)}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="rebalancing">Rebalancing</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percentage}) => `${name}: ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Value']} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="capRate" fill="#8884d8" name="Cap Rate %" />
                      <Bar dataKey="appreciation" fill="#82ca9d" name="Appreciation %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk-Return Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart data={riskReturnData}>
                      <CartesianGrid />
                      <XAxis dataKey="risk" name="Risk Score" />
                      <YAxis dataKey="return" name="Total Return %" />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter name="Properties" dataKey="return" fill="#8884d8" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Property Types Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['residential', 'commercial', 'industrial', 'mixed-use'].map(type => {
                      const typeProperties = properties.filter(p => p.type === type)
                      const typeValue = typeProperties.reduce((sum, p) => sum + p.currentValue, 0)
                      const percentage = portfolioMetrics ? (typeValue / portfolioMetrics.totalValue * 100) : 0
                      
                      return (
                        <div key={type} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            <span className="capitalize">{type}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{percentage.toFixed(1)}%</div>
                            <div className="text-sm text-gray-600">${typeValue.toLocaleString()}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Settings</CardTitle>
                <CardDescription>Configure your investment goals and risk preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="strategy">Investment Strategy</Label>
                    <Select value={optimizationGoal.type} onValueChange={(value) => setOptimizationGoal({...optimizationGoal, type: value as 'income' | 'growth' | 'balanced' | 'conservative' | 'aggressive'})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income Focused</SelectItem>
                        <SelectItem value="growth">Growth Focused</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="conservative">Conservative</SelectItem>
                        <SelectItem value="aggressive">Aggressive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeHorizon">Time Horizon (years)</Label>
                    <Input
                      type="number"
                      value={optimizationGoal.timeHorizon}
                      onChange={(e) => setOptimizationGoal({...optimizationGoal, timeHorizon: parseInt(e.target.value) || 10})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Risk Tolerance: {optimizationGoal.riskTolerance}</Label>
                    <Slider
                      value={[optimizationGoal.riskTolerance]}
                      onValueChange={(value) => setOptimizationGoal({...optimizationGoal, riskTolerance: value[0]})}
                      max={10}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Target Return (%): {optimizationGoal.targetReturn}</Label>
                    <Slider
                      value={[optimizationGoal.targetReturn]}
                      onValueChange={(value) => setOptimizationGoal({...optimizationGoal, targetReturn: value[0]})}
                      max={20}
                      min={3}
                      step={0.5}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimized vs Current Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={optimizationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, '']} />
                    <Legend />
                    <Bar dataKey="current" fill="#8884d8" name="Current Allocation %" />
                    <Bar dataKey="optimized" fill="#82ca9d" name="Optimized Allocation %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800">Expected Return</h4>
                    <p className="text-2xl font-bold text-green-700">
                      {portfolioMetrics ? (portfolioMetrics.weightedCapRate + portfolioMetrics.weightedAppreciation).toFixed(1) : 0}%
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Portfolio Risk</h4>
                    <p className="text-2xl font-bold text-blue-700">
                      {portfolioMetrics ? portfolioMetrics.weightedRisk.toFixed(1) : 0}/10
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Sharpe Ratio</h4>
                    <p className="text-2xl font-bold text-purple-700">
                      {portfolioMetrics ? portfolioMetrics.sharpeRatio.toFixed(2) : 0}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Diversification Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={[{
                      metric: 'Geographic',
                      score: Math.min(10, properties.length * 2),
                    }, {
                      metric: 'Property Type',
                      score: new Set(properties.map(p => p.type)).size * 2.5,
                    }, {
                      metric: 'Risk Level',
                      score: 10 - (portfolioMetrics?.weightedRisk || 5),
                    }, {
                      metric: 'Liquidity',
                      score: properties.reduce((sum, p) => sum + p.liquidityScore, 0) / properties.length || 5,
                    }, {
                      metric: 'Income Stability',
                      score: portfolioMetrics ? Math.min(10, portfolioMetrics.weightedCapRate) : 5,
                    }]}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <PolarRadiusAxis angle={90} domain={[0, 10]} />
                      <Radar name="Diversification" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cash Flow Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={Array.from({length: 10}, (_, i) => ({
                      year: 2024 + i,
                      cashFlow: (portfolioMetrics?.netCashFlow || 0) * Math.pow(1.03, i),
                      cumulative: (portfolioMetrics?.netCashFlow || 0) * 12 * (i + 1) * Math.pow(1.03, i/2)
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
                      <Legend />
                      <Line type="monotone" dataKey="cashFlow" stroke="#8884d8" name="Monthly Cash Flow" />
                      <Line type="monotone" dataKey="cumulative" stroke="#82ca9d" name="Cumulative Cash Flow" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leverage Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Portfolio Leverage Ratio</span>
                      <span className="font-bold">
                        {portfolioMetrics ? (portfolioMetrics.leverageRatio * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${portfolioMetrics ? portfolioMetrics.leverageRatio * 100 : 0}%`}}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Total Debt</p>
                        <p className="font-semibold">
                          ${properties.reduce((sum, p) => sum + p.loanAmount, 0).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total Equity</p>
                        <p className="font-semibold">
                          ${portfolioMetrics ? portfolioMetrics.totalEquity.toLocaleString() : 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">ROI</p>
                      <p className="text-xl font-bold">
                        {portfolioMetrics ? ((portfolioMetrics.netCashFlow * 12) / portfolioMetrics.totalEquity * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Cash-on-Cash</p>
                      <p className="text-xl font-bold">
                        {portfolioMetrics ? ((portfolioMetrics.netCashFlow * 12) / properties.reduce((sum, p) => sum + p.downPayment, 0) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Cap Rate</p>
                      <p className="text-xl font-bold">
                        {portfolioMetrics ? portfolioMetrics.weightedCapRate.toFixed(1) : 0}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Appreciation</p>
                      <p className="text-xl font-bold">
                        {portfolioMetrics ? portfolioMetrics.weightedAppreciation.toFixed(1) : 0}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scenario Analysis</CardTitle>
                <CardDescription>Portfolio performance under different market conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={scenarioAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="scenario" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}%`, 'Expected Return']} />
                    <Bar dataKey="return" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Stress Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { scenario: 'Interest Rate +2%', impact: -8.5 },
                      { scenario: 'Vacancy +5%', impact: -12.3 },
                      { scenario: 'Property Values -10%', impact: -15.2 },
                      { scenario: 'Recession', impact: -22.1 }
                    ].map(test => (
                      <div key={test.scenario} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>{test.scenario}</span>
                        <span className={`font-bold ${test.impact < -15 ? 'text-red-600' : test.impact < -10 ? 'text-yellow-600' : 'text-green-600'}`}>
                          {test.impact.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monte Carlo Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={Array.from({length: 20}, (_, i) => ({
                      year: i + 1,
                      p10: (portfolioMetrics?.totalValue || 0) * Math.pow(1.02, i),
                      p50: (portfolioMetrics?.totalValue || 0) * Math.pow(1.08, i),
                      p90: (portfolioMetrics?.totalValue || 0) * Math.pow(1.15, i)
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
                      <Area type="monotone" dataKey="p90" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="p50" stackId="2" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
                      <Area type="monotone" dataKey="p10" stackId="3" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>90th percentile (optimistic), 50th percentile (expected), 10th percentile (pessimistic)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rebalancing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rebalancing Recommendations</CardTitle>
                <CardDescription>Suggested portfolio adjustments based on optimization</CardDescription>
              </CardHeader>
              <CardContent>
                {rebalanceRecommendations.length > 0 ? (
                  <div className="space-y-4">
                    {rebalanceRecommendations.map((rec, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{properties.find(p => p.id === rec.propertyId)?.name}</h4>
                          <Badge variant={rec.action === 'buy' ? 'default' : 'destructive'}>
                            {rec.action.charAt(0).toUpperCase() + rec.action.slice(1)}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Current Weight</p>
                            <p className="font-semibold">{rec.currentWeight.toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Target Weight</p>
                            <p className="font-semibold">{rec.targetWeight.toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Difference</p>
                            <p className={`font-semibold ${(rec.targetWeight - rec.currentWeight) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {(rec.targetWeight - rec.currentWeight).toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Amount</p>
                            <p className="font-semibold">${rec.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Your portfolio is well-balanced. No major rebalancing needed.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rebalancing Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Immediate (0-30 days)</h4>
                      <p className="text-sm text-gray-600">Address major allocation imbalances</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Short-term (1-6 months)</h4>
                      <p className="text-sm text-gray-600">Fine-tune property weights and consider new acquisitions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Long-term (6+ months)</h4>
                      <p className="text-sm text-gray-600">Strategic portfolio expansion and diversification</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

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
                        placeholder="e.g., Downtown Office"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Property Type</Label>
                      <Select value={newProperty.type} onValueChange={(value) => setNewProperty({...newProperty, type: value as 'residential' | 'commercial' | 'industrial' | 'mixed-use'})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={newProperty.location || ''}
                        onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                        placeholder="City, State"
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
                      <Label htmlFor="currentValue">Current Value ($)</Label>
                      <Input
                        id="currentValue"
                        type="number"
                        value={newProperty.currentValue || ''}
                        onChange={(e) => setNewProperty({...newProperty, currentValue: parseFloat(e.target.value) || 0})}
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
                      <Label htmlFor="monthlyExpenses">Monthly Expenses ($)</Label>
                      <Input
                        id="monthlyExpenses"
                        type="number"
                        value={newProperty.monthlyExpenses || ''}
                        onChange={(e) => setNewProperty({...newProperty, monthlyExpenses: parseFloat(e.target.value) || 0})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="capRate">Cap Rate (%)</Label>
                      <Input
                        id="capRate"
                        type="number"
                        step="0.1"
                        value={newProperty.capRate || ''}
                        onChange={(e) => setNewProperty({...newProperty, capRate: parseFloat(e.target.value) || 0})}
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
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{property.name}</CardTitle>
                        <CardDescription>
                          <Badge variant="outline" className="mr-2 capitalize">{property.type}</Badge>
                          {property.location}
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteProperty(property.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Current Value</p>
                        <p className="font-semibold">${property.currentValue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Rent</p>
                        <p className="font-semibold">${property.monthlyRent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Net Cash Flow</p>
                        <p className={`font-semibold ${(property.monthlyRent * (1 - property.vacancy / 100) - property.monthlyExpenses) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ${(property.monthlyRent * (1 - property.vacancy / 100) - property.monthlyExpenses).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cap Rate</p>
                        <p className="font-semibold">{property.capRate.toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Appreciation</p>
                        <p className="font-semibold">{property.appreciationRate.toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Risk Score</p>
                        <p className="font-semibold">{property.riskScore}/10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}