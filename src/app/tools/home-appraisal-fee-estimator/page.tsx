'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calculator, 
  Home, 
  DollarSign, 
  FileText, 
  CheckCircle, 
  Info, 
  BookOpen,
  TrendingUp,
  AlertCircle,
  MapPin,
  Clock,
  Award
} from 'lucide-react';

interface AppraisalEstimate {
  baseFee: number;
  propertyComplexityAdjustment: number;
  rushFeeAdjustment: number;
  locationAdjustment: number;
  specialFeaturesFee: number;
  totalEstimatedFee: number;
  typicalRange: {
    low: number;
    high: number;
  };
  turnaroundTime: string;
  breakdown: {
    baseAppraisal: number;
    complexity: number;
    location: number;
    rush: number;
    additional: number;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Appraisal Fee Estimator',
    description: 'Estimate home appraisal costs based on property type, size, location, and loan program (FHA, VA, conventional, jumbo). Free online tool for real estate profe...',
  };
}

export default function HomeAppraisalFeeEstimator() {
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [squareFootage, setSquareFootage] = useState<number>(2000);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [lotSize, setLotSize] = useState<number>(0.25);
  const [yearBuilt, setYearBuilt] = useState<number>(2000);
  const [propertyCondition, setPropertyCondition] = useState<string>('average');
  
  const [state, setState] = useState<string>('California');
  const [location, setLocation] = useState<string>('suburban');
  const [marketType, setMarketType] = useState<string>('balanced');
  
  const [appraisalType, setAppraisalType] = useState<string>('full');
  const [loanType, setLoanType] = useState<string>('conventional');
  const [purposeType, setPurposeType] = useState<string>('purchase');
  const [rushOrder, setRushOrder] = useState<boolean>(false);
  const [complexProperty, setComplexProperty] = useState<boolean>(false);
  
  const [hasPool, setHasPool] = useState<boolean>(false);
  const [hasGuestHouse, setHasGuestHouse] = useState<boolean>(false);
  const [hasUnusualFeatures, setHasUnusualFeatures] = useState<boolean>(false);
  const [isWaterfront, setIsWaterfront] = useState<boolean>(false);
  const [isHistoric, setIsHistoric] = useState<boolean>(false);
  const [needsRental, setNeedsRental] = useState<boolean>(false);

  const [calculation, setCalculation] = useState<AppraisalEstimate | null>(null);

  const calculateAppraisalFee = () => {
    let baseFee = 300;

    if (propertyType === 'single-family') {
      if (propertyValue < 250000) baseFee = 300;
      else if (propertyValue < 500000) baseFee = 400;
      else if (propertyValue < 1000000) baseFee = 500;
      else if (propertyValue < 2000000) baseFee = 650;
      else baseFee = 800;
    } else if (propertyType === 'condo') {
      if (propertyValue < 250000) baseFee = 325;
      else if (propertyValue < 500000) baseFee = 425;
      else if (propertyValue < 1000000) baseFee = 525;
      else baseFee = 675;
    } else if (propertyType === 'townhouse') {
      if (propertyValue < 250000) baseFee = 325;
      else if (propertyValue < 500000) baseFee = 425;
      else if (propertyValue < 1000000) baseFee = 550;
      else baseFee = 700;
    } else if (propertyType === 'multi-family') {
      if (propertyValue < 500000) baseFee = 500;
      else if (propertyValue < 1000000) baseFee = 700;
      else if (propertyValue < 2000000) baseFee = 950;
      else baseFee = 1200;
    } else if (propertyType === 'manufactured') {
      baseFee = 350;
    } else if (propertyType === 'land') {
      baseFee = 400;
    }

    if (appraisalType === 'drive-by') {
      baseFee *= 0.60;
    } else if (appraisalType === 'desktop') {
      baseFee *= 0.50;
    } else if (appraisalType === 'full-with-photos') {
      baseFee *= 1.10;
    }

    if (loanType === 'fha') {
      baseFee += 50;
    } else if (loanType === 'va') {
      baseFee += 75;
    } else if (loanType === 'usda') {
      baseFee += 60;
    } else if (loanType === 'jumbo') {
      baseFee += 100;
    }

    let complexityAdjustment = 0;
    if (squareFootage > 4000) complexityAdjustment += 100;
    if (squareFootage > 6000) complexityAdjustment += 100;
    if (bedrooms > 5) complexityAdjustment += 50;
    if (lotSize > 1) complexityAdjustment += 75;
    if (lotSize > 5) complexityAdjustment += 125;
    
    if (propertyCondition === 'poor') {
      complexityAdjustment += 100;
    } else if (propertyCondition === 'excellent') {
      complexityAdjustment += 50;
    }

    if (complexProperty) {
      complexityAdjustment += 150;
    }

    if (yearBuilt < 1950) {
      complexityAdjustment += 75;
    }

    const stateMultipliers: { [key: string]: number } = {
      'California': 1.25,
      'New York': 1.30,
      'Hawaii': 1.40,
      'Massachusetts': 1.20,
      'Washington': 1.15,
      'Colorado': 1.10,
      'Texas': 0.95,
      'Florida': 1.05,
      'Arizona': 0.90,
      'Georgia': 0.90,
      'Ohio': 0.85,
      'Michigan': 0.85
    };

    const stateMultiplier = stateMultipliers[state] || 1.0;
    let locationAdjustment = 0;
    
    if (location === 'urban') {
      locationAdjustment = baseFee * 0.10;
    } else if (location === 'rural') {
      locationAdjustment = baseFee * 0.15;
    } else if (location === 'resort') {
      locationAdjustment = baseFee * 0.20;
    }

    locationAdjustment *= stateMultiplier;

    let rushFeeAdjustment = 0;
    if (rushOrder) {
      rushFeeAdjustment = (baseFee + complexityAdjustment) * 0.50;
    }

    let specialFeaturesFee = 0;
    if (hasPool) specialFeaturesFee += 75;
    if (hasGuestHouse) specialFeaturesFee += 150;
    if (hasUnusualFeatures) specialFeaturesFee += 100;
    if (isWaterfront) specialFeaturesFee += 200;
    if (isHistoric) specialFeaturesFee += 125;
    if (needsRental) specialFeaturesFee += 100;

    const totalEstimatedFee = Math.round(
      baseFee + 
      complexityAdjustment + 
      locationAdjustment + 
      rushFeeAdjustment + 
      specialFeaturesFee
    );

    const typicalRange = {
      low: Math.round(totalEstimatedFee * 0.85),
      high: Math.round(totalEstimatedFee * 1.15)
    };

    let turnaroundTime = rushOrder ? '2-3 business days' : '7-10 business days';
    if (complexProperty || propertyType === 'multi-family') {
      turnaroundTime = rushOrder ? '3-5 business days' : '10-14 business days';
    }
    if (propertyType === 'land' || isHistoric) {
      turnaroundTime = rushOrder ? '5-7 business days' : '14-21 business days';
    }

    const recommendations: string[] = [];
    
    if (rushOrder) {
      recommendations.push('Rush orders cost 50% more but deliver faster results');
      recommendations.push('Standard turnaround is usually sufficient for most transactions');
    }
    
    if (appraisalType === 'full') {
      recommendations.push('Full appraisal provides most comprehensive valuation');
    } else if (appraisalType === 'drive-by') {
      recommendations.push('Drive-by appraisals save money but provide less detail');
      recommendations.push('Not all lenders accept drive-by appraisals');
    } else if (appraisalType === 'desktop') {
      recommendations.push('Desktop appraisals are fastest but least comprehensive');
      recommendations.push('Best for refinance in stable markets');
    }
    
    if (propertyValue > 1000000 && loanType === 'conventional') {
      recommendations.push('Consider jumbo loan appraisal requirements');
    }
    
    if (specialFeaturesFee > 200) {
      recommendations.push('Complex properties require specialized appraiser expertise');
      recommendations.push('Budget extra time for comprehensive evaluation');
    }
    
    if (location === 'rural') {
      recommendations.push('Rural properties may have longer turnaround times');
      recommendations.push('Appraiser travel time affects cost and scheduling');
    }
    
    if (propertyCondition === 'poor') {
      recommendations.push('Significant repairs may impact appraised value');
      recommendations.push('Consider repairs before appraisal if time permits');
    }
    
    recommendations.push('Shop around - appraisal fees can vary by appraiser');
    recommendations.push('Ensure appraiser is licensed in your state');
    recommendations.push('Request appraiser credentials and experience with similar properties');

    const result: AppraisalEstimate = {
      baseFee,
      propertyComplexityAdjustment: complexityAdjustment,
      rushFeeAdjustment,
      locationAdjustment,
      specialFeaturesFee,
      totalEstimatedFee,
      typicalRange,
      turnaroundTime,
      breakdown: {
        baseAppraisal: baseFee,
        complexity: complexityAdjustment,
        location: locationAdjustment,
        rush: rushFeeAdjustment,
        additional: specialFeaturesFee
      },
      recommendations
    };

    setCalculation(result);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-orange-600 p-3 rounded-full">
              <Home className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Appraisal Fee Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estimate the cost of a professional home appraisal based on property characteristics, 
            location, appraisal type, and special requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Appraisal Fee Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="appraisal">Appraisal</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Article
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyValue">Property Value</Label>
                        <Input
                          id="propertyValue"
                          type="number"
                          value={propertyValue}
                          onChange={(e) => setPropertyValue(Number(e.target.value))}
                          placeholder="500000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <select
                          id="propertyType"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="single-family">Single Family Home</option>
                          <option value="condo">Condominium</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-family">Multi-Family (2-4 units)</option>
                          <option value="manufactured">Manufactured Home</option>
                          <option value="land">Vacant Land</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="squareFootage">Square Footage</Label>
                        <Input
                          id="squareFootage"
                          type="number"
                          value={squareFootage}
                          onChange={(e) => setSquareFootage(Number(e.target.value))}
                          placeholder="2000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={bedrooms}
                          onChange={(e) => setBedrooms(Number(e.target.value))}
                          placeholder="3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          step="0.5"
                          value={bathrooms}
                          onChange={(e) => setBathrooms(Number(e.target.value))}
                          placeholder="2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lotSize">Lot Size (acres)</Label>
                        <Input
                          id="lotSize"
                          type="number"
                          step="0.01"
                          value={lotSize}
                          onChange={(e) => setLotSize(Number(e.target.value))}
                          placeholder="0.25"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearBuilt">Year Built</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={yearBuilt}
                          onChange={(e) => setYearBuilt(Number(e.target.value))}
                          placeholder="2000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyCondition">Property Condition</Label>
                        <select
                          id="propertyCondition"
                          value={propertyCondition}
                          onChange={(e) => setPropertyCondition(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="poor">Poor</option>
                          <option value="fair">Fair</option>
                          <option value="average">Average</option>
                          <option value="good">Good</option>
                          <option value="excellent">Excellent</option>
                        </select>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-3">Location</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State</Label>
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="California">California</option>
                          <option value="New York">New York</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Massachusetts">Massachusetts</option>
                          <option value="Washington">Washington</option>
                          <option value="Colorado">Colorado</option>
                          <option value="Texas">Texas</option>
                          <option value="Florida">Florida</option>
                          <option value="Arizona">Arizona</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Ohio">Ohio</option>
                          <option value="Michigan">Michigan</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="location">Location Type</Label>
                        <select
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="urban">Urban</option>
                          <option value="suburban">Suburban</option>
                          <option value="rural">Rural</option>
                          <option value="resort">Resort/Vacation Area</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="marketType">Market Type</Label>
                        <select
                          id="marketType"
                          value={marketType}
                          onChange={(e) => setMarketType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="hot">Hot Market (Seller's)</option>
                          <option value="balanced">Balanced Market</option>
                          <option value="cool">Cool Market (Buyer's)</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="appraisal" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="appraisalType">Appraisal Type</Label>
                        <select
                          id="appraisalType"
                          value={appraisalType}
                          onChange={(e) => setAppraisalType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="full">Full Interior Appraisal</option>
                          <option value="full-with-photos">Full with Floor Plan/Photos</option>
                          <option value="drive-by">Exterior Only (Drive-by)</option>
                          <option value="desktop">Desktop Appraisal</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="loanType">Loan Type</Label>
                        <select
                          id="loanType"
                          value={loanType}
                          onChange={(e) => setLoanType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="conventional">Conventional</option>
                          <option value="fha">FHA</option>
                          <option value="va">VA</option>
                          <option value="usda">USDA</option>
                          <option value="jumbo">Jumbo</option>
                          <option value="cash">Cash (No Loan)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="purposeType">Purpose</Label>
                        <select
                          id="purposeType"
                          value={purposeType}
                          onChange={(e) => setPurposeType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="purchase">Purchase</option>
                          <option value="refinance">Refinance</option>
                          <option value="heloc">HELOC/Home Equity</option>
                          <option value="estate">Estate Planning</option>
                          <option value="tax">Tax Assessment Appeal</option>
                          <option value="divorce">Divorce Settlement</option>
                        </select>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="rushOrder"
                          checked={rushOrder}
                          onChange={(e) => setRushOrder(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="rushOrder">Rush Order (+50% fee)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="complexProperty"
                          checked={complexProperty}
                          onChange={(e) => setComplexProperty(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="complexProperty">Complex property (unique design, mixed-use, etc.)</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-4">
                    <h4 className="font-semibold mb-3">Special Features & Considerations</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Select any special features that may affect appraisal complexity and cost
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasPool"
                          checked={hasPool}
                          onChange={(e) => setHasPool(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasPool">Swimming Pool (+$75)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasGuestHouse"
                          checked={hasGuestHouse}
                          onChange={(e) => setHasGuestHouse(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasGuestHouse">Guest House/ADU (+$150)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasUnusualFeatures"
                          checked={hasUnusualFeatures}
                          onChange={(e) => setHasUnusualFeatures(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasUnusualFeatures">Unusual Features/Upgrades (+$100)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isWaterfront"
                          checked={isWaterfront}
                          onChange={(e) => setIsWaterfront(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="isWaterfront">Waterfront Property (+$200)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isHistoric"
                          checked={isHistoric}
                          onChange={(e) => setIsHistoric(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="isHistoric">Historic Property (+$125)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsRental"
                          checked={needsRental}
                          onChange={(e) => setNeedsRental(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsRental">Rental Analysis Needed (+$100)</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">Understanding Home Appraisal Fees and Costs</h2>
                      
                      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-orange-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-orange-800 mb-2">Key Takeaways</h3>
                            <ul className="text-orange-700 space-y-1">
                              <li>• Home appraisal fees typically range from $300 to $800+</li>
                              <li>• Costs vary by property type, location, and complexity</li>
                              <li>• Appraisals are required for most mortgage loans</li>
                              <li>• Rush orders cost significantly more (usually +50%)</li>
                              <li>• Choose appraisers carefully for accurate valuations</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">What is a Home Appraisal?</h3>
                      <p className="mb-4">
                        A home appraisal is a professional, unbiased estimate of a property's fair market value conducted 
                        by a licensed or certified appraiser. Appraisals are required by lenders before approving mortgage 
                        loans to ensure the property value supports the loan amount. The appraisal protects both the lender 
                        and the borrower from overpaying for a property.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Types of Appraisals</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Full Interior Appraisal</h4>
                      <p className="mb-4">
                        The most comprehensive type, a full appraisal involves the appraiser visiting the property, 
                        inspecting all interior and exterior areas, measuring the home, taking photographs, and analyzing 
                        comparable sales. This is the standard appraisal type for purchase transactions and most refinances. 
                        The appraiser examines the condition, features, upgrades, and any issues affecting value.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Exterior-Only (Drive-By) Appraisal</h4>
                      <p className="mb-4">
                        Drive-by appraisals involve exterior inspection only, without entering the home. These cost less 
                        but provide less detail. They're sometimes used for refinances when the homeowner has significant 
                        equity and the lender has confidence in the property's condition. Not all lenders accept exterior-only 
                        appraisals.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Desktop Appraisal</h4>
                      <p className="mb-4">
                        Desktop appraisals involve no property visit. The appraiser analyzes public records, tax data, 
                        comparable sales, and possibly photos provided by the homeowner or agent. These are fastest and 
                        least expensive but also least detailed. Desktop appraisals may be acceptable for low-risk 
                        refinances in stable markets.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Factors Affecting Appraisal Costs</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Property Value and Type</h4>
                      <p className="mb-4">
                        Higher-value properties typically cost more to appraise due to increased liability for the appraiser 
                        and more detailed analysis required. Multi-family properties, commercial properties, and unique homes 
                        require specialized expertise and cost more than standard single-family homes. Condominiums may cost 
                        slightly more due to additional documentation requirements.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Geographic Location</h4>
                      <p className="mb-4">
                        Appraisal fees vary significantly by state and region. High-cost-of-living areas like California, 
                        New York, and Hawaii have higher appraisal fees. Rural properties often cost more due to appraiser 
                        travel time and fewer comparable sales. Urban areas with many appraisers may have more competitive 
                        pricing.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Property Complexity</h4>
                      <p className="mb-4">
                        Large homes (over 4,000 square feet), properties on large lots (over 1 acre), homes with unusual 
                        features, waterfront properties, historic homes, and properties in poor condition all require more 
                        time and expertise to appraise accurately. Guest houses, pools, extensive upgrades, or unique 
                        architectural features add complexity and cost.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Loan Type</h4>
                      <p className="mb-4">
                        FHA, VA, and USDA appraisals have specific requirements beyond conventional appraisals, including 
                        additional forms, inspections for safety issues, and stricter guidelines. These government-backed 
                        loan appraisals typically cost $50-$100 more than conventional appraisals. Jumbo loans may also 
                        require enhanced appraisal procedures.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Rush Orders</h4>
                      <p className="mb-4">
                        Standard appraisals typically take 7-10 business days to complete. Rush orders requesting delivery 
                        in 2-5 days usually cost 50% more. In hot markets or during busy seasons, even rush fees may not 
                        guarantee faster delivery. Plan ahead when possible to avoid rush charges.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">The Appraisal Process</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Ordering the Appraisal</h4>
                      <p className="mb-4">
                        For purchase transactions, the lender typically orders the appraisal after the loan application is 
                        submitted and processing begins. The buyer pays for the appraisal, either upfront or at closing. 
                        Lenders must use appraisal management companies (AMCs) or follow strict independence requirements 
                        to prevent conflicts of interest.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Property Inspection</h4>
                      <p className="mb-4">
                        The appraiser schedules a visit to inspect the property, which typically takes 30-60 minutes for 
                        a standard home. They measure the exterior, photograph all rooms and significant features, note 
                        the condition of major systems and components, and document any issues affecting value. The 
                        appraiser also inspects the neighborhood and notes nearby amenities or detractors.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Comparable Sales Analysis</h4>
                      <p className="mb-4">
                        After the inspection, the appraiser researches recent sales of similar properties in the area 
                        (typically within the last 6 months and 1 mile radius). They analyze how differences between 
                        the subject property and comparables affect value, making adjustments for size, condition, 
                        features, and location. At least three comparable sales are typically required.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Report Preparation</h4>
                      <p className="mb-4">
                        The appraiser compiles findings into a detailed report documenting the property description, 
                        comparable sales analysis, final value opinion, and supporting data. The standard form is the 
                        Uniform Residential Appraisal Report (URAR). The report is submitted to the lender and becomes 
                        part of the loan file.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">What Appraisers Consider</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Property Characteristics</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Square footage and layout</li>
                        <li>Number and size of bedrooms and bathrooms</li>
                        <li>Lot size and usable land</li>
                        <li>Age and condition of the home</li>
                        <li>Construction quality and materials</li>
                        <li>Updates and improvements</li>
                        <li>Systems (HVAC, electrical, plumbing)</li>
                        <li>Special features (pool, fireplace, etc.)</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Location Factors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Neighborhood desirability and trends</li>
                        <li>School district quality</li>
                        <li>Proximity to amenities and employment</li>
                        <li>Traffic patterns and noise levels</li>
                        <li>Views and natural features</li>
                        <li>Zoning and land use</li>
                        <li>Future development plans</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Market Conditions</h4>
                      <p className="mb-4">
                        Appraisers consider current market trends, including whether it's a buyer's or seller's market, 
                        how quickly homes are selling, and whether prices are rising or falling. Days on market for 
                        comparable sales and recent price trends influence the final value opinion.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Common Appraisal Issues</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Low Appraisals</h4>
                      <p className="mb-4">
                        When the appraised value comes in below the purchase price, it creates a loan approval challenge. 
                        The lender will only finance based on the appraised value, not the contract price. Options include 
                        renegotiating the price, making a larger down payment, requesting a reconsideration of value with 
                        additional comparables, or ordering a second appraisal (if permitted by the lender).
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Required Repairs</h4>
                      <p className="mb-4">
                        FHA, VA, and USDA appraisals include safety and condition requirements. If the appraiser identifies 
                        health, safety, or structural issues, repairs must be completed before loan approval. Common issues 
                        include peeling paint (potential lead hazard), missing handrails, roof damage, or non-functioning 
                        systems. Conventional appraisals typically don't require repairs unless they significantly affect 
                        value.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Lack of Comparables</h4>
                      <p className="mb-4">
                        Rural properties, unique homes, or properties in areas with few recent sales can be challenging 
                        to appraise. Appraisers may need to expand the search radius, use older sales with time adjustments, 
                        or rely more heavily on cost approach methodology. These appraisals take longer and cost more.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Preparing for an Appraisal</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">What Homeowners Can Do</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Clean and declutter the property</li>
                        <li>Complete minor repairs and maintenance</li>
                        <li>Provide a list of recent upgrades and improvements</li>
                        <li>Make all areas accessible to the appraiser</li>
                        <li>Provide documentation of major systems (HVAC age, roof replacement, etc.)</li>
                        <li>Consider providing comparable sales if you know of recent nearby sales</li>
                        <li>Be present to answer questions but don't hover</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">What Not to Do</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Don't try to influence the appraiser's opinion</li>
                        <li>Don't make major changes during the appraisal period</li>
                        <li>Don't hide problems or defects</li>
                        <li>Don't expect immediate results - appraisals take time</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Choosing an Appraiser</h3>
                      <p className="mb-4">
                        While lenders typically select appraisers through AMCs for purchase and refinance transactions, 
                        you can choose your own appraiser for non-lending purposes like estate planning, divorce, or tax 
                        appeals. Look for state-licensed or certified appraisers with experience in your property type 
                        and area. Check credentials, ask for sample reports, and get fee quotes from multiple appraisers.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Appraisal vs. Home Inspection</h3>
                      <p className="mb-4">
                        Appraisals and home inspections serve different purposes. Appraisals determine market value for 
                        lending purposes and take a high-level view of condition. Home inspections provide detailed 
                        examination of systems and components to identify needed repairs and maintenance. Both are 
                        important in real estate transactions but serve different needs. Budget for both when buying 
                        a home.
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Reminders</h3>
                            <ul className="text-yellow-700 space-y-1">
                              <li>• This calculator provides estimates only; actual fees vary by appraiser</li>
                              <li>• Always get written fee quotes before ordering an appraisal</li>
                              <li>• Appraisers must be licensed or certified in your state</li>
                              <li>• Lenders typically select appraisers to maintain independence</li>
                              <li>• Appraisal fees are generally non-refundable even if the deal falls through</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button onClick={calculateAppraisalFee} className="w-full bg-orange-600 hover:bg-orange-700">
                    Calculate Appraisal Fee
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {calculation && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Estimated Fee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-orange-600 mb-4">
                        {formatCurrency(calculation.totalEstimatedFee)}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Estimated appraisal cost
                      </p>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-700 mb-1">Typical Range</div>
                        <div className="text-lg font-bold text-gray-800">
                          {formatCurrency(calculation.typicalRange.low)} - {formatCurrency(calculation.typicalRange.high)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Turnaround Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {calculation.turnaroundTime}
                      </div>
                      <p className="text-sm text-gray-600">
                        Typical completion time
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Cost Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Appraisal</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.baseAppraisal)}</span>
                    </div>
                    <Separator />
                    {calculation.breakdown.complexity > 0 && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Complexity Adjustment</span>
                          <span className="font-semibold">+{formatCurrency(calculation.breakdown.complexity)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    {calculation.breakdown.location > 0 && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location Adjustment</span>
                          <span className="font-semibold">+{formatCurrency(calculation.breakdown.location)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    {calculation.breakdown.rush > 0 && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600 flex items-center gap-1">
                            Rush Fee
                            <Badge variant="outline" className="text-xs">+50%</Badge>
                          </span>
                          <span className="font-semibold text-orange-600">+{formatCurrency(calculation.breakdown.rush)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    {calculation.breakdown.additional > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Special Features</span>
                        <span className="font-semibold">+{formatCurrency(calculation.breakdown.additional)}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {calculation.recommendations.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {calculation.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="mt-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                            </div>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {!calculation && (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center py-8">
                    Enter your property details and appraisal requirements, then click "Calculate Appraisal Fee" to see your estimated cost.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
