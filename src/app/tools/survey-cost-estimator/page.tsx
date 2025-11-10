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
import { Calculator, MapPin, DollarSign, FileText, TrendingUp, AlertCircle, CheckCircle, Info, Map, BookOpen, Ruler, Trees, Mountain } from 'lucide-react';

interface SurveyCostCalculation {
  totalCost: number;
  baseCost: number;
  sizeAdjustment: number;
  terrainAdjustment: number;
  accessibilityAdjustment: number;
  rushFeeAdjustment: number;
  additionalServicesTotal: number;
  costPerAcre: number;
  breakdown: {
    boundarySurvey: number;
    topographicSurvey: number;
    monumentation: number;
    research: number;
    permits: number;
    additionalServices: number;
  };
  timeline: {
    estimatedDays: number;
    rushAvailable: boolean;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Survey Cost Estimator',
    description: 'Estimate property survey costs based on lot size, terrain, survey type (boundary, ALTA, topographic), and access difficulty Make informed property decisions with accurate calculations.',
  };
}

export default function SurveyCostEstimator() {
  const [lotSize, setLotSize] = useState<number>(1);
  const [lotUnit, setLotUnit] = useState<string>('acres');
  const [surveyType, setSurveyType] = useState<string>('boundary');
  const [propertyType, setPropertyType] = useState<string>('residential');
  const [terrain, setTerrain] = useState<string>('flat');
  const [accessibility, setAccessibility] = useState<string>('easy');
  const [vegetation, setVegetation] = useState<string>('light');
  const [boundaries, setBoundaries] = useState<number>(4);
  const [corners, setCorners] = useState<number>(4);
  const [state, setState] = useState<string>('Texas');
  const [county, setCounty] = useState<string>('Harris');
  const [needsMonumentation, setNeedsMonumentation] = useState<boolean>(true);
  const [needsTopographic, setNeedsTopographic] = useState<boolean>(false);
  const [needsElevation, setNeedsElevation] = useState<boolean>(false);
  const [needsFloodplain, setNeedsFloodplain] = useState<boolean>(false);
  const [needsUtilityLocate, setNeedsUtilityLocate] = useState<boolean>(false);
  const [rushService, setRushService] = useState<boolean>(false);
  const [hasExistingMarkers, setHasExistingMarkers] = useState<boolean>(false);
  const [hasPriorSurvey, setHasPriorSurvey] = useState<boolean>(false);
  const [priorSurveyAge, setPriorSurveyAge] = useState<number>(0);

  const [calculation, setCalculation] = useState<SurveyCostCalculation | null>(null);

  const calculateSurveyCost = () => {
    let lotSizeInAcres = lotSize;
    if (lotUnit === 'sqft') {
      lotSizeInAcres = lotSize / 43560;
    } else if (lotUnit === 'hectares') {
      lotSizeInAcres = lotSize * 2.47105;
    }

    let baseCost = 0;
    switch (surveyType) {
      case 'boundary':
        baseCost = 500;
        break;
      case 'mortgage':
        baseCost = 400;
        break;
      case 'topographic':
        baseCost = 800;
        break;
      case 'alta':
        baseCost = 1500;
        break;
      case 'subdivision':
        baseCost = 2000;
        break;
      case 'construction':
        baseCost = 1200;
        break;
      default:
        baseCost = 500;
    }

    const propertyTypeMultiplier = {
      residential: 1.0,
      commercial: 1.4,
      industrial: 1.6,
      agricultural: 0.9,
      vacant: 0.8,
    }[propertyType] || 1.0;

    baseCost *= propertyTypeMultiplier;

    let sizeAdjustment = 0;
    if (lotSizeInAcres <= 0.25) {
      sizeAdjustment = 0;
    } else if (lotSizeInAcres <= 1) {
      sizeAdjustment = 200;
    } else if (lotSizeInAcres <= 5) {
      sizeAdjustment = (lotSizeInAcres - 1) * 150;
    } else if (lotSizeInAcres <= 10) {
      sizeAdjustment = 600 + (lotSizeInAcres - 5) * 100;
    } else {
      sizeAdjustment = 1100 + (lotSizeInAcres - 10) * 75;
    }

    const terrainMultiplier = {
      flat: 0,
      rolling: 0.15,
      hilly: 0.30,
      mountainous: 0.50,
      steep: 0.70,
    }[terrain] || 0;

    const terrainAdjustment = (baseCost + sizeAdjustment) * terrainMultiplier;

    const accessibilityMultiplier = {
      easy: 0,
      moderate: 0.10,
      difficult: 0.25,
      'very-difficult': 0.40,
    }[accessibility] || 0;

    const accessibilityAdjustment = (baseCost + sizeAdjustment) * accessibilityMultiplier;

    const vegetationMultiplier = {
      none: 0,
      light: 0.05,
      moderate: 0.15,
      heavy: 0.30,
      dense: 0.45,
    }[vegetation] || 0;

    const vegetationAdjustment = (baseCost + sizeAdjustment) * vegetationMultiplier;

    const boundaryAdjustment = Math.max(0, (boundaries - 4) * 100);
    const cornerAdjustment = Math.max(0, (corners - 4) * 75);

    let additionalServicesTotal = 0;
    let monumentationCost = 0;
    if (needsMonumentation) {
      monumentationCost = corners * 150;
      additionalServicesTotal += monumentationCost;
    }

    let topographicCost = 0;
    if (needsTopographic) {
      topographicCost = 600 + (lotSizeInAcres * 200);
      additionalServicesTotal += topographicCost;
    }

    let elevationCost = 0;
    if (needsElevation) {
      elevationCost = 400;
      additionalServicesTotal += elevationCost;
    }

    let floodplainCost = 0;
    if (needsFloodplain) {
      floodplainCost = 350;
      additionalServicesTotal += floodplainCost;
    }

    let utilityCost = 0;
    if (needsUtilityLocate) {
      utilityCost = 250;
      additionalServicesTotal += utilityCost;
    }

    let researchCost = 200;
    if (hasPriorSurvey && priorSurveyAge < 10) {
      researchCost = 100;
    } else if (!hasPriorSurvey) {
      researchCost = 300;
    }

    const permitsCost = 150;

    let rushFeeAdjustment = 0;
    if (rushService) {
      rushFeeAdjustment = (baseCost + sizeAdjustment + terrainAdjustment + accessibilityAdjustment) * 0.35;
    }

    const totalBeforeDiscounts = 
      baseCost + 
      sizeAdjustment + 
      terrainAdjustment + 
      accessibilityAdjustment + 
      vegetationAdjustment +
      boundaryAdjustment +
      cornerAdjustment +
      additionalServicesTotal + 
      researchCost + 
      permitsCost + 
      rushFeeAdjustment;

    let discount = 0;
    if (hasExistingMarkers) {
      discount = totalBeforeDiscounts * 0.08;
    }

    const totalCost = totalBeforeDiscounts - discount;
    const costPerAcre = totalCost / lotSizeInAcres;

    let estimatedDays = 7;
    if (surveyType === 'mortgage') estimatedDays = 3;
    else if (surveyType === 'alta' || surveyType === 'subdivision') estimatedDays = 14;
    else if (surveyType === 'topographic') estimatedDays = 10;

    if (lotSizeInAcres > 5) estimatedDays += Math.ceil(lotSizeInAcres / 5) * 2;
    if (terrain === 'hilly' || terrain === 'mountainous') estimatedDays += 3;
    if (terrain === 'steep') estimatedDays += 5;
    if (rushService) estimatedDays = Math.ceil(estimatedDays / 2);

    const recommendations: string[] = [];
    
    if (totalCost > 3000) {
      recommendations.push('Consider getting quotes from multiple licensed surveyors to compare pricing');
    }
    
    if (!hasPriorSurvey) {
      recommendations.push('Check with your title company or county records for existing surveys');
    }
    
    if (needsTopographic && surveyType === 'boundary') {
      recommendations.push('Consider combining surveys to save on overall costs');
    }
    
    if (terrain === 'steep' || terrain === 'mountainous') {
      recommendations.push('Survey costs may be higher due to terrain difficulty - confirm with surveyor');
    }
    
    if (lotSizeInAcres > 10) {
      recommendations.push('Large properties may qualify for volume discounts - ask your surveyor');
    }
    
    if (!needsMonumentation && propertyType === 'residential') {
      recommendations.push('Consider adding monumentation to clearly mark property boundaries');
    }
    
    recommendations.push('Verify that surveyor is licensed and insured in your state');
    recommendations.push('Ask for references from recent similar projects');
    recommendations.push('Request detailed scope of work and deliverables in writing');

    const result: SurveyCostCalculation = {
      totalCost,
      baseCost,
      sizeAdjustment,
      terrainAdjustment,
      accessibilityAdjustment: accessibilityAdjustment + vegetationAdjustment + boundaryAdjustment + cornerAdjustment,
      rushFeeAdjustment,
      additionalServicesTotal,
      costPerAcre,
      breakdown: {
        boundarySurvey: baseCost + sizeAdjustment,
        topographicSurvey: topographicCost,
        monumentation: monumentationCost,
        research: researchCost,
        permits: permitsCost,
        additionalServices: elevationCost + floodplainCost + utilityCost,
      },
      timeline: {
        estimatedDays,
        rushAvailable: !rushService && estimatedDays > 5,
      },
      recommendations,
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

  const getCostLevel = (cost: number): { level: string; color: string; description: string } => {
    if (cost < 800) return { level: 'Low', color: 'bg-green-500', description: 'Below average survey cost' };
    if (cost < 1500) return { level: 'Moderate', color: 'bg-yellow-500', description: 'Average survey cost' };
    if (cost < 3000) return { level: 'High', color: 'bg-orange-500', description: 'Above average survey cost' };
    return { level: 'Very High', color: 'bg-red-500', description: 'Premium survey cost' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-emerald-600 p-3 rounded-full">
              <Map className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Land Survey Cost Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate accurate land survey costs based on lot size, survey type, terrain difficulty, 
            and additional services. Get detailed breakdowns and timeline estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Survey Cost Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="survey">Survey Details</TabsTrigger>
                    <TabsTrigger value="additional">Additional</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lotSize">Lot Size</Label>
                        <Input
                          id="lotSize"
                          type="number"
                          step="0.1"
                          value={lotSize}
                          onChange={(e) => setLotSize(Number(e.target.value))}
                          placeholder="1.0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lotUnit">Unit</Label>
                        <select
                          id="lotUnit"
                          value={lotUnit}
                          onChange={(e) => setLotUnit(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="acres">Acres</option>
                          <option value="sqft">Square Feet</option>
                          <option value="hectares">Hectares</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <select
                          id="propertyType"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="agricultural">Agricultural</option>
                          <option value="vacant">Vacant Land</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="surveyType">Survey Type</Label>
                        <select
                          id="surveyType"
                          value={surveyType}
                          onChange={(e) => setSurveyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="boundary">Boundary Survey</option>
                          <option value="mortgage">Mortgage Survey</option>
                          <option value="topographic">Topographic Survey</option>
                          <option value="alta">ALTA/NSPS Survey</option>
                          <option value="subdivision">Subdivision Survey</option>
                          <option value="construction">Construction Survey</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="Texas">Texas</option>
                          <option value="California">California</option>
                          <option value="Florida">Florida</option>
                          <option value="New York">New York</option>
                          <option value="Illinois">Illinois</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Georgia">Georgia</option>
                          <option value="North Carolina">North Carolina</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          value={county}
                          onChange={(e) => setCounty(e.target.value)}
                          placeholder="Enter county name"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="survey" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="terrain">Terrain Type</Label>
                        <select
                          id="terrain"
                          value={terrain}
                          onChange={(e) => setTerrain(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="flat">Flat</option>
                          <option value="rolling">Rolling Hills</option>
                          <option value="hilly">Hilly</option>
                          <option value="mountainous">Mountainous</option>
                          <option value="steep">Steep/Difficult</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="accessibility">Site Accessibility</Label>
                        <select
                          id="accessibility"
                          value={accessibility}
                          onChange={(e) => setAccessibility(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="easy">Easy Access</option>
                          <option value="moderate">Moderate Access</option>
                          <option value="difficult">Difficult Access</option>
                          <option value="very-difficult">Very Difficult Access</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="vegetation">Vegetation Density</Label>
                        <select
                          id="vegetation"
                          value={vegetation}
                          onChange={(e) => setVegetation(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="none">None/Cleared</option>
                          <option value="light">Light Vegetation</option>
                          <option value="moderate">Moderate Vegetation</option>
                          <option value="heavy">Heavy Vegetation</option>
                          <option value="dense">Dense Forest</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="boundaries">Number of Boundaries</Label>
                        <Input
                          id="boundaries"
                          type="number"
                          value={boundaries}
                          onChange={(e) => setBoundaries(Number(e.target.value))}
                          placeholder="4"
                          min="3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="corners">Number of Corners</Label>
                        <Input
                          id="corners"
                          type="number"
                          value={corners}
                          onChange={(e) => setCorners(Number(e.target.value))}
                          placeholder="4"
                          min="3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="priorSurveyAge">Prior Survey Age (years, 0 if none)</Label>
                        <Input
                          id="priorSurveyAge"
                          type="number"
                          value={priorSurveyAge}
                          onChange={(e) => setPriorSurveyAge(Number(e.target.value))}
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasExistingMarkers"
                          checked={hasExistingMarkers}
                          onChange={(e) => setHasExistingMarkers(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasExistingMarkers">Existing boundary markers present</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasPriorSurvey"
                          checked={hasPriorSurvey}
                          onChange={(e) => setHasPriorSurvey(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasPriorSurvey">Have prior survey documents</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="rushService"
                          checked={rushService}
                          onChange={(e) => setRushService(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="rushService">Need rush/expedited service</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="additional" className="space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">Additional Services</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsMonumentation"
                          checked={needsMonumentation}
                          onChange={(e) => setNeedsMonumentation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsMonumentation">Monumentation (setting boundary markers)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsTopographic"
                          checked={needsTopographic}
                          onChange={(e) => setNeedsTopographic(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsTopographic">Topographic mapping</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsElevation"
                          checked={needsElevation}
                          onChange={(e) => setNeedsElevation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsElevation">Elevation certificate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsFloodplain"
                          checked={needsFloodplain}
                          onChange={(e) => setNeedsFloodplain(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsFloodplain">Floodplain determination</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsUtilityLocate"
                          checked={needsUtilityLocate}
                          onChange={(e) => setNeedsUtilityLocate(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsUtilityLocate">Utility location services</Label>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={calculateSurveyCost} 
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      size="lg"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate Survey Cost
                    </Button>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Land Survey Costs</h2>
                      
                      <p className="text-gray-700 mb-4">
                        A land survey is a critical component of real estate transactions, property development, and boundary 
                        dispute resolution. Understanding the factors that influence survey costs can help you budget appropriately 
                        and select the right type of survey for your needs.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Land Surveys</h3>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Boundary Survey:</strong> The most common type, establishing property lines and corners. 
                        Essential for fence installation, additions, or resolving boundary disputes. Costs typically range 
                        from $500 to $2,000 depending on property size and complexity.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Mortgage Survey:</strong> A simplified survey required by lenders, showing building locations 
                        and major improvements relative to property lines. Generally less expensive than boundary surveys, 
                        ranging from $400 to $1,500.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Topographic Survey:</strong> Shows elevation changes, contours, and physical features. 
                        Required for construction projects and site development. Costs range from $800 to $3,000+ depending 
                        on terrain complexity and level of detail required.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>ALTA/NSPS Survey:</strong> The most comprehensive survey type, meeting standards set by 
                        the American Land Title Association and National Society of Professional Surveyors. Required for 
                        commercial real estate transactions. Costs typically $1,500 to $5,000+.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Cost Factors</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Property Size:</strong> Larger properties require more time and equipment to survey. 
                        Costs generally increase with acreage, though per-acre rates often decrease for very large parcels. 
                        A quarter-acre lot might cost $500-800, while a 10-acre parcel could cost $2,000-4,000.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Terrain and Accessibility:</strong> Flat, easily accessible properties cost less to survey 
                        than steep, heavily wooded, or remote locations. Mountainous terrain can increase costs by 30-70% 
                        due to additional time and specialized equipment requirements.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Vegetation and Site Conditions:</strong> Dense vegetation requires clearing lines of sight 
                        for surveying equipment. This can add 15-45% to the base cost. Seasonal considerations matter - 
                        surveying in winter when vegetation is dormant may reduce costs.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Research and Documentation:</strong> Surveyors must research property records, deeds, 
                        and prior surveys. Properties with unclear title history or missing documentation require more 
                        research time, increasing costs by $100-500.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Additional Services and Fees</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Monumentation:</strong> Setting permanent boundary markers (iron pins, concrete monuments) 
                        typically costs $100-200 per corner. While not always required, monumentation provides lasting 
                        evidence of property boundaries and can prevent future disputes.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Elevation Certificates:</strong> Required for flood insurance determinations in FEMA 
                        flood zones. Adds $300-600 to survey costs but may result in significant flood insurance savings.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Rush Services:</strong> Expedited surveys typically cost 25-50% more than standard service. 
                        Standard turnaround is 7-14 days; rush service may deliver in 3-7 days depending on survey complexity.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Regional Cost Variations</h3>

                      <p className="text-gray-700 mb-4">
                        Survey costs vary significantly by region due to labor rates, regulatory requirements, and market 
                        conditions. Urban areas generally have higher costs ($600-2,500 for boundary surveys) compared to 
                        rural areas ($400-1,500). States with complex property laws or extensive research requirements 
                        (like Texas with its unique land grant system) may have higher costs.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Reduce Survey Costs</h3>

                      <p className="text-gray-700 mb-3">
                        Provide any existing survey documents, deeds, or plats to your surveyor. This can save significant 
                        research time and reduce costs by $100-300. If possible, schedule surveys during optimal seasons 
                        when vegetation is minimal.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Clear obvious debris or obstacles from property lines if safe to do so. Mark any known boundary 
                        markers to help surveyors locate them quickly. Get multiple quotes from licensed surveyors, but 
                        don't base your decision solely on price - experience and accuracy are crucial.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Selecting a Surveyor</h3>

                      <p className="text-gray-700 mb-4">
                        Always verify that your surveyor is properly licensed in your state and carries professional 
                        liability insurance. Ask for references from recent similar projects. Request a detailed scope 
                        of work outlining what will be included in the survey and what deliverables you'll receive. 
                        Understand that the cheapest option may not provide the thorough documentation you need for 
                        future property transactions or dispute resolution.
                      </p>

                      <p className="text-gray-700">
                        A quality land survey is an investment in your property that provides legal protection and 
                        clarity about your boundaries. While costs can seem high, the peace of mind and legal documentation 
                        provided make professional surveying services essential for most real estate transactions and 
                        development projects.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {calculation && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Cost Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Estimated Total Cost</p>
                      <p className="text-4xl font-bold text-emerald-600">
                        {formatCurrency(calculation.totalCost)}
                      </p>
                      <div className="mt-2">
                        <Badge className={`${getCostLevel(calculation.totalCost).color} text-white`}>
                          {getCostLevel(calculation.totalCost).level}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {formatCurrency(calculation.costPerAcre)} per acre
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-gray-700">Cost Breakdown</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Survey Cost:</span>
                          <span className="font-medium">{formatCurrency(calculation.baseCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Size Adjustment:</span>
                          <span className="font-medium">{formatCurrency(calculation.sizeAdjustment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Terrain Factor:</span>
                          <span className="font-medium">{formatCurrency(calculation.terrainAdjustment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Site Conditions:</span>
                          <span className="font-medium">{formatCurrency(calculation.accessibilityAdjustment)}</span>
                        </div>
                        {calculation.breakdown.monumentation > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monumentation:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.monumentation)}</span>
                          </div>
                        )}
                        {calculation.breakdown.topographicSurvey > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Topographic:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.topographicSurvey)}</span>
                          </div>
                        )}
                        {calculation.breakdown.additionalServices > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Additional Services:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.additionalServices)}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Research & Permits:</span>
                          <span className="font-medium">
                            {formatCurrency(calculation.breakdown.research + calculation.breakdown.permits)}
                          </span>
                        </div>
                        {calculation.rushFeeAdjustment > 0 && (
                          <div className="flex justify-between text-orange-600">
                            <span>Rush Fee (35%):</span>
                            <span className="font-medium">{formatCurrency(calculation.rushFeeAdjustment)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Estimated Completion:</span>
                      <span className="text-lg font-bold text-blue-600">
                        {calculation.timeline.estimatedDays} days
                      </span>
                    </div>
                    {calculation.timeline.rushAvailable && !rushService && (
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Info className="h-4 w-4 mt-0.5 text-blue-500" />
                        <span>Rush service available for faster completion</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

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
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}

            {!calculation && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Calculator className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Enter property details and click Calculate to see your survey cost estimate</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
