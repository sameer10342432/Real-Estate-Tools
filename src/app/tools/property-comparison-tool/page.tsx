'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/footer/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Calculator, Plus, Trash2, BookOpen, BarChart3, Home, DollarSign } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  price: number;
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  propertyType: string;
  location: string;
  monthlyRent: number;
  expenses: number;
  downPayment: number;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
}

interface ComparisonMetrics {
  pricePerSqFt: number;
  monthlyPayment: number;
  totalCashRequired: number;
  monthlyNetCashFlow: number;
  capRate: number;
  cashOnCashReturn: number;
  totalReturn: number;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Comparison Tool',
    description: 'Compare multiple properties side by side. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyComparisonTool() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: '1',
      name: 'Property 1',
      price: 500000,
      squareFootage: 2000,
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2010,
      propertyType: 'single-family',
      location: 'Suburban',
      monthlyRent: 3500,
      expenses: 1200,
      downPayment: 100000,
      loanAmount: 400000,
      interestRate: 7.5,
      loanTerm: 30
    },
    {
      id: '2',
      name: 'Property 2',
      price: 650000,
      squareFootage: 2500,
      bedrooms: 4,
      bathrooms: 3,
      yearBuilt: 2015,
      propertyType: 'single-family',
      location: 'Urban',
      monthlyRent: 4200,
      expenses: 1500,
      downPayment: 130000,
      loanAmount: 520000,
      interestRate: 7.25,
      loanTerm: 30
    }
  ]);

  const addProperty = () => {
    const newProperty: Property = {
      id: Date.now().toString(),
      name: `Property ${properties.length + 1}`,
      price: 500000,
      squareFootage: 2000,
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2010,
      propertyType: 'single-family',
      location: 'Suburban',
      monthlyRent: 3500,
      expenses: 1200,
      downPayment: 100000,
      loanAmount: 400000,
      interestRate: 7.5,
      loanTerm: 30
    };
    setProperties([...properties, newProperty]);
  };

  const removeProperty = (id: string) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const updateProperty = (id: string, field: keyof Property, value: string | number) => {
    setProperties(properties.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const calculateMetrics = (property: Property): ComparisonMetrics => {
    const monthlyRate = property.interestRate / 100 / 12;
    const numberOfPayments = property.loanTerm * 12;
    
    const monthlyPayment = property.loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const pricePerSqFt = property.price / property.squareFootage;
    const totalCashRequired = property.downPayment + (property.price * 0.03); // Including closing costs
    const monthlyNetCashFlow = property.monthlyRent - property.expenses - monthlyPayment;
    const annualNetIncome = (property.monthlyRent - property.expenses) * 12;
    const capRate = (annualNetIncome / property.price) * 100;
    const annualCashFlow = monthlyNetCashFlow * 12;
    const cashOnCashReturn = (annualCashFlow / totalCashRequired) * 100;
    const totalReturn = capRate + (property.price * 0.03) / property.price * 100; // Assuming 3% appreciation

    return {
      pricePerSqFt,
      monthlyPayment,
      totalCashRequired,
      monthlyNetCashFlow,
      capRate,
      cashOnCashReturn,
      totalReturn
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Property Comparison Tool
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Compare multiple investment properties side-by-side with detailed financial analysis and key metrics
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="comparison" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="comparison" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Comparison
              </TabsTrigger>
              <TabsTrigger value="details" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Property Details
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Financial Analysis
              </TabsTrigger>
              <TabsTrigger value="metrics" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Key Metrics
              </TabsTrigger>
              <TabsTrigger value="article" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Article
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comparison" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Property Comparison</h2>
                <div className="space-x-4">
                  {properties.length < 4 && (
                    <Button onClick={addProperty} className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Property
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => {
                  const metrics = calculateMetrics(property);
                  return (
                    <Card key={property.id} className="shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{property.name}</CardTitle>
                          {properties.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeProperty(property.id)}
                              className="text-white hover:bg-white/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <CardDescription className="text-blue-100">
                          {formatCurrency(property.price)} • {property.squareFootage} sq ft
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Price/sq ft:</span>
                            <p className="font-semibold">{formatCurrency(metrics.pricePerSqFt)}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Monthly Payment:</span>
                            <p className="font-semibold">{formatCurrency(metrics.monthlyPayment)}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Cash Required:</span>
                            <p className="font-semibold">{formatCurrency(metrics.totalCashRequired)}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Net Cash Flow:</span>
                            <p className={`font-semibold ${metrics.monthlyNetCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrency(metrics.monthlyNetCashFlow)}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-600">Cap Rate:</span>
                            <p className="font-semibold">{formatPercentage(metrics.capRate)}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Cash-on-Cash:</span>
                            <p className="font-semibold">{formatPercentage(metrics.cashOnCashReturn)}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Property Details</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {properties.map((property) => (
                  <Card key={property.id} className="shadow-lg">
                    <CardHeader>
                      <CardTitle>{property.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`name-${property.id}`}>Property Name</Label>
                          <Input
                            id={`name-${property.id}`}
                            value={property.name}
                            onChange={(e) => updateProperty(property.id, 'name', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`price-${property.id}`}>Purchase Price</Label>
                          <Input
                            id={`price-${property.id}`}
                            type="number"
                            value={property.price}
                            onChange={(e) => updateProperty(property.id, 'price', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`sqft-${property.id}`}>Square Footage</Label>
                          <Input
                            id={`sqft-${property.id}`}
                            type="number"
                            value={property.squareFootage}
                            onChange={(e) => updateProperty(property.id, 'squareFootage', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`bedrooms-${property.id}`}>Bedrooms</Label>
                          <Input
                            id={`bedrooms-${property.id}`}
                            type="number"
                            value={property.bedrooms}
                            onChange={(e) => updateProperty(property.id, 'bedrooms', parseInt(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`bathrooms-${property.id}`}>Bathrooms</Label>
                          <Input
                            id={`bathrooms-${property.id}`}
                            type="number"
                            step="0.5"
                            value={property.bathrooms}
                            onChange={(e) => updateProperty(property.id, 'bathrooms', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`year-${property.id}`}>Year Built</Label>
                          <Input
                            id={`year-${property.id}`}
                            type="number"
                            value={property.yearBuilt}
                            onChange={(e) => updateProperty(property.id, 'yearBuilt', parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="financial" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Financial Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {properties.map((property) => (
                  <Card key={property.id} className="shadow-lg">
                    <CardHeader>
                      <CardTitle>{property.name} - Financial Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`rent-${property.id}`}>Monthly Rent</Label>
                          <Input
                            id={`rent-${property.id}`}
                            type="number"
                            value={property.monthlyRent}
                            onChange={(e) => updateProperty(property.id, 'monthlyRent', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`expenses-${property.id}`}>Monthly Expenses</Label>
                          <Input
                            id={`expenses-${property.id}`}
                            type="number"
                            value={property.expenses}
                            onChange={(e) => updateProperty(property.id, 'expenses', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`down-${property.id}`}>Down Payment</Label>
                          <Input
                            id={`down-${property.id}`}
                            type="number"
                            value={property.downPayment}
                            onChange={(e) => updateProperty(property.id, 'downPayment', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`loan-${property.id}`}>Loan Amount</Label>
                          <Input
                            id={`loan-${property.id}`}
                            type="number"
                            value={property.loanAmount}
                            onChange={(e) => updateProperty(property.id, 'loanAmount', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`rate-${property.id}`}>Interest Rate (%)</Label>
                          <Input
                            id={`rate-${property.id}`}
                            type="number"
                            step="0.01"
                            value={property.interestRate}
                            onChange={(e) => updateProperty(property.id, 'interestRate', parseFloat(e.target.value))}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`term-${property.id}`}>Loan Term (years)</Label>
                          <Input
                            id={`term-${property.id}`}
                            type="number"
                            value={property.loanTerm}
                            onChange={(e) => updateProperty(property.id, 'loanTerm', parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Key Investment Metrics</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price/Sq Ft
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monthly Payment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cash Required
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Net Cash Flow
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cap Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cash-on-Cash
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {properties.map((property) => {
                      const metrics = calculateMetrics(property);
                      return (
                        <tr key={property.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {property.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(metrics.pricePerSqFt)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(metrics.monthlyPayment)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(metrics.totalCashRequired)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${metrics.monthlyNetCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(metrics.monthlyNetCashFlow)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatPercentage(metrics.capRate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatPercentage(metrics.cashOnCashReturn)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="article" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <article className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Complete Guide to Property Comparison: Advanced Real Estate Investment Analysis
                  </h2>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Takeaways</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Systematic property comparison prevents emotional decision-making and ensures objective analysis</li>
                      <li>• Financial metrics like cap rate, cash-on-cash return, and IRR are crucial for investment evaluation</li>
                      <li>• Location factors significantly impact long-term investment success and property appreciation</li>
                      <li>• Consider both quantitative metrics and qualitative factors for comprehensive analysis</li>
                      <li>• Risk-adjusted returns provide better insights than raw return numbers alone</li>
                      <li>• Technology and data analytics enhance comparison accuracy and efficiency</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Why Property Comparison Is Essential
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Real estate investment success depends on making informed, data-driven decisions. Property comparison 
                    tools help investors systematically evaluate multiple opportunities, ensuring they choose properties 
                    that align with their financial goals and risk tolerance. Without proper comparison, investors often 
                    rely on gut feelings or incomplete information, leading to suboptimal investment outcomes.
                  </p>

                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Benefits of Systematic Property Comparison</h4>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Eliminates emotional bias from investment decisions</li>
                      <li>• Identifies the best opportunities within your criteria</li>
                      <li>• Reveals hidden costs and potential issues</li>
                      <li>• Enables better negotiation strategies</li>
                      <li>• Supports portfolio diversification goals</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Essential Financial Metrics for Property Comparison
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Cap Rate (Capitalization Rate)</h4>
                  <p className="text-gray-700 mb-4">
                    The cap rate measures a property's income-generating potential relative to its value. 
                    It's calculated as Net Operating Income ÷ Property Value × 100. This metric helps compare 
                    properties across different markets and price points.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <h5 className="font-semibold text-green-900 mb-2">Cap Rate Benchmarks by Market Type:</h5>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• 3-5%: Premium markets (Class A properties, low risk)</li>
                      <li>• 5-7%: Stable markets (Class B properties, moderate risk)</li>
                      <li>• 7-10%: Growth markets (Class C properties, higher risk)</li>
                      <li>• 10%+: Emerging/distressed markets (highest risk/reward)</li>
                    </ul>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Cash-on-Cash Return</h4>
                  <p className="text-gray-700 mb-4">
                    This metric measures the annual cash flow relative to the cash invested. It's particularly 
                    important for leveraged investments where you're using financing, as it shows the actual 
                    return on your invested capital.
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg mb-6 font-mono text-center">
                    Cash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested × 100
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Internal Rate of Return (IRR)</h4>
                  <p className="text-gray-700 mb-4">
                    IRR considers the time value of money and provides a comprehensive view of investment performance 
                    over the entire holding period, including cash flows and appreciation.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">4. Price Per Square Foot</h4>
                  <p className="text-gray-700 mb-4">
                    This metric normalizes property values across different sizes, making it easier to compare 
                    properties in similar markets. However, it should be used alongside other metrics as it 
                    doesn't account for income potential, property condition, or location premiums.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">5. Debt Service Coverage Ratio (DSCR)</h4>
                  <p className="text-gray-700 mb-6">
                    DSCR measures a property's ability to service its debt obligations. A ratio above 1.25 
                    indicates strong cash flow coverage, while below 1.0 suggests potential cash flow issues.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Advanced Financial Analysis Techniques
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Net Present Value (NPV) Analysis</h4>
                  <p className="text-gray-700 mb-4">
                    NPV calculates the present value of all future cash flows minus the initial investment. 
                    This helps compare properties with different cash flow patterns and holding periods.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Sensitivity Analysis</h4>
                  <p className="text-gray-700 mb-4">
                    Test how changes in key variables affect your returns. Consider scenarios with:
                  </p>

                  <ul className="text-gray-700 mb-6 space-y-1">
                    <li>• Different vacancy rates (5%, 10%, 15%)</li>
                    <li>• Varying rent growth assumptions (2%, 3%, 5%)</li>
                    <li>• Interest rate changes for refinancing</li>
                    <li>• Major repair or renovation needs</li>
                    <li>• Market appreciation scenarios</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Location and Market Analysis
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Micro-Location Factors</h4>
                  <p className="text-gray-700 mb-4">
                    Location remains the most critical factor in real estate success. Analyze these elements:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Neighborhood Quality</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Crime rates and safety statistics</li>
                        <li>• School district ratings</li>
                        <li>• Property maintenance standards</li>
                        <li>• Community amenities</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Economic Indicators</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Employment growth and diversity</li>
                        <li>• Population trends</li>
                        <li>• Income levels and growth</li>
                        <li>• Development pipeline</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Transportation and Accessibility</h4>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li><strong>Public Transit:</strong> Proximity to bus routes, subway, or light rail</li>
                    <li><strong>Highway Access:</strong> Distance to major highways and commute times</li>
                    <li><strong>Walkability:</strong> Walk Score and pedestrian-friendly infrastructure</li>
                    <li><strong>Airport Proximity:</strong> For business travelers and property accessibility</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Future Development Impact</h4>
                  <p className="text-gray-700 mb-6">
                    Research planned infrastructure, commercial developments, and zoning changes that could 
                    positively or negatively impact property values and rental demand.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Property-Specific Analysis Factors
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Physical Condition Assessment</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Structural Elements</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Foundation condition</li>
                        <li>• Roof age and condition</li>
                        <li>• HVAC system status</li>
                        <li>• Electrical and plumbing systems</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Cosmetic Factors</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Interior finishes and updates</li>
                        <li>• Exterior maintenance needs</li>
                        <li>• Landscaping condition</li>
                        <li>• Curb appeal factors</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Property Age and Lifecycle</h4>
                  <p className="text-gray-700 mb-4">
                    Consider the property's position in its lifecycle:
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h5 className="font-semibold text-yellow-900 mb-2">Property Age Considerations:</h5>
                    <ul className="text-yellow-800 text-sm space-y-1">
                      <li>• <strong>New (0-5 years):</strong> Lower maintenance, higher purchase price, modern features</li>
                      <li>• <strong>Established (5-20 years):</strong> Balanced maintenance needs, proven performance</li>
                      <li>• <strong>Mature (20-40 years):</strong> Potential for value-add improvements, higher maintenance</li>
                      <li>• <strong>Vintage (40+ years):</strong> Character properties, significant renovation potential</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Market Timing and Strategy Considerations
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Real Estate Market Cycles</h4>
                  <p className="text-gray-700 mb-4">
                    Understanding market cycles helps inform your comparison criteria and investment timing:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">Recovery & Expansion</h5>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Focus on value-add opportunities</li>
                        <li>• Prioritize cash flow stability</li>
                        <li>• Consider emerging markets</li>
                        <li>• Leverage favorable financing</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2">Peak & Recession</h5>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Be highly selective</li>
                        <li>• Focus on prime locations</li>
                        <li>• Consider selling existing properties</li>
                        <li>• Prepare for distressed opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Investment Strategy Alignment</h4>
                  <p className="text-gray-700 mb-4">
                    Your comparison criteria should align with your investment strategy:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">Cash Flow Focus</h5>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• High cap rates</li>
                        <li>• Strong rent-to-price ratios</li>
                        <li>• Stable tenant demand</li>
                        <li>• Low maintenance properties</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Appreciation Focus</h5>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Growth markets</li>
                        <li>• Development potential</li>
                        <li>• Gentrification areas</li>
                        <li>• Infrastructure improvements</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-orange-900 mb-2">Value-Add Strategy</h5>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Renovation potential</li>
                        <li>• Below-market rents</li>
                        <li>• Operational improvements</li>
                        <li>• Repositioning opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Risk Assessment and Management
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Risk Categories</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Market Risks</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Economic downturns</li>
                        <li>• Interest rate changes</li>
                        <li>• Supply/demand imbalances</li>
                        <li>• Regulatory changes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Property-Specific Risks</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Tenant turnover</li>
                        <li>• Maintenance issues</li>
                        <li>• Environmental concerns</li>
                        <li>• Obsolescence risk</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Risk-Adjusted Return Analysis</h4>
                  <p className="text-gray-700 mb-6">
                    Higher returns often come with higher risks. Use the Sharpe ratio or similar metrics to 
                    compare risk-adjusted returns. A stable property in a prime location with 6% returns 
                    might be preferable to a risky property promising 12% returns.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Technology and Data Analytics in Property Comparison
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Modern Comparison Tools</h4>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li><strong>Automated Valuation Models (AVMs):</strong> Quick property value estimates using algorithms</li>
                    <li><strong>Market Data Platforms:</strong> Real-time rental and sales comparables</li>
                    <li><strong>Demographic Analysis Tools:</strong> Population and income trend data</li>
                    <li><strong>Predictive Analytics:</strong> Future market performance indicators</li>
                    <li><strong>GIS Mapping:</strong> Spatial analysis of location factors</li>
                    <li><strong>AI-Powered Insights:</strong> Pattern recognition in market data</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Data Sources for Comparison</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Public Data Sources</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• MLS (Multiple Listing Service)</li>
                        <li>• County assessor records</li>
                        <li>• Census and demographic data</li>
                        <li>• Building permits and zoning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Commercial Data Providers</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• CoStar, LoopNet for commercial</li>
                        <li>• RentSpree, Apartments.com for rentals</li>
                        <li>• Zillow, Redfin for residential</li>
                        <li>• REIS, Yardi Matrix for analytics</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Common Comparison Mistakes to Avoid
                  </h3>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                    <h4 className="text-lg font-semibold text-red-900 mb-2">Critical Mistakes:</h4>
                    <ul className="text-red-800 space-y-2">
                      <li>• Focusing solely on purchase price without considering total returns</li>
                      <li>• Ignoring vacancy rates and market rental trends</li>
                      <li>• Underestimating renovation and maintenance costs</li>
                      <li>• Comparing properties in vastly different markets without context</li>
                      <li>• Making decisions based on outdated market data</li>
                      <li>• Overlooking exit strategy considerations</li>
                      <li>• Failing to account for transaction costs</li>
                      <li>• Ignoring tax implications and depreciation benefits</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Building Your Comparison Framework
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Process</h4>
                  <ol className="text-gray-700 mb-6 space-y-3">
                    <li><strong>1. Define Investment Criteria:</strong> Establish your goals, budget, and risk tolerance</li>
                    <li><strong>2. Create Standardized Metrics:</strong> Develop consistent evaluation criteria</li>
                    <li><strong>3. Gather Comprehensive Data:</strong> Collect financial, market, and property data</li>
                    <li><strong>4. Perform Quantitative Analysis:</strong> Calculate key financial metrics</li>
                    <li><strong>5. Assess Qualitative Factors:</strong> Evaluate location, condition, and market trends</li>
                    <li><strong>6. Conduct Risk Analysis:</strong> Identify and quantify potential risks</li>
                    <li><strong>7. Compare and Rank:</strong> Use weighted scoring to rank properties</li>
                    <li><strong>8. Validate Assumptions:</strong> Stress-test your analysis with different scenarios</li>
                  </ol>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Weighted Scoring System</h4>
                  <p className="text-gray-700 mb-4">
                    Create a weighted scoring system that reflects your priorities:
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h5 className="font-semibold text-gray-800 mb-2">Example Weighting (Cash Flow Investor):</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Cash-on-Cash Return: 25%</li>
                      <li>• Cap Rate: 20%</li>
                      <li>• Location Quality: 20%</li>
                      <li>• Property Condition: 15%</li>
                      <li>• Market Growth Potential: 10%</li>
                      <li>• Risk Factors: 10%</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Advanced Comparison Strategies
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Context Analysis</h4>
                  <p className="text-gray-700 mb-4">
                    Consider how each property fits within your existing portfolio:
                  </p>

                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li><strong>Geographic Diversification:</strong> Spread risk across different markets</li>
                    <li><strong>Property Type Mix:</strong> Balance residential, commercial, and mixed-use</li>
                    <li><strong>Cash Flow Timing:</strong> Stagger lease expirations and renovation cycles</li>
                    <li><strong>Risk Profile Balance:</strong> Mix stable and growth-oriented properties</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Scenario Planning</h4>
                  <p className="text-gray-700 mb-4">
                    Develop multiple scenarios for each property:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">Best Case</h5>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Maximum rent growth</li>
                        <li>• Minimal vacancy</li>
                        <li>• Strong appreciation</li>
                        <li>• Low maintenance costs</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-900 mb-2">Base Case</h5>
                      <ul className="text-yellow-800 text-sm space-y-1">
                        <li>• Market-rate rent growth</li>
                        <li>• Average vacancy rates</li>
                        <li>• Moderate appreciation</li>
                        <li>• Expected maintenance</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2">Worst Case</h5>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Declining rents</li>
                        <li>• High vacancy periods</li>
                        <li>• Property depreciation</li>
                        <li>• Major repair needs</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Professional Tools and Resources
                  </h3>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Industry-Standard Software</h4>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li><strong>ARGUS Enterprise:</strong> Commercial real estate cash flow modeling</li>
                    <li><strong>RealData:</strong> Investment property analysis software</li>
                    <li><strong>PropertyRadar:</strong> Market research and lead generation</li>
                    <li><strong>Reonomy:</strong> Commercial property intelligence platform</li>
                    <li><strong>BiggerPockets Calculators:</strong> Free online investment calculators</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Professional Services</h4>
                  <p className="text-gray-700 mb-6">
                    Consider engaging professionals for complex comparisons: real estate appraisers, 
                    market analysts, property inspectors, and investment advisors can provide valuable 
                    insights that enhance your comparison process.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h4>
                    <p className="text-blue-800">
                      Create a standardized comparison framework that you use for every property evaluation. 
                      This ensures consistency in your analysis and helps you make objective decisions based 
                      on data rather than emotions. Document your decision-making process to learn from 
                      both successful and unsuccessful investments.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Future Trends in Property Comparison
                  </h3>

                  <p className="text-gray-700 mb-4">
                    The property comparison landscape continues to evolve with technological advances:
                  </p>

                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li><strong>AI and Machine Learning:</strong> Automated pattern recognition and predictive modeling</li>
                    <li><strong>Blockchain Technology:</strong> Transparent property history and transaction records</li>
                    <li><strong>IoT Integration:</strong> Real-time property performance monitoring</li>
                    <li><strong>Virtual Reality:</strong> Remote property tours and assessment</li>
                    <li><strong>ESG Metrics:</strong> Environmental, social, and governance factors in analysis</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Conclusion
                  </h3>

                  <p className="text-gray-700 mb-4">
                    Effective property comparison is both an art and a science that requires systematic analysis, 
                    comprehensive data gathering, and strategic thinking. While financial metrics provide the 
                    foundation for sound investment decisions, successful investors also consider qualitative 
                    factors, market timing, risk assessment, and their personal investment goals.
                  </p>

                  <p className="text-gray-700 mb-4">
                    The key to successful property comparison lies in developing a consistent, comprehensive 
                    framework that can be applied across different properties and market conditions. This 
                    systematic approach helps eliminate emotional bias, ensures thorough analysis, and 
                    ultimately leads to better investment outcomes.
                  </p>

                  <p className="text-gray-700">
                    Use our property comparison tool to systematically evaluate your investment opportunities. 
                    Remember that the best property isn't necessarily the one with the highest returns, but 
                    the one that best fits your investment strategy, risk tolerance, and long-term goals. 
                    Continuous learning and refinement of your comparison process will improve your investment 
                    success over time.
                  </p>
                </article>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}