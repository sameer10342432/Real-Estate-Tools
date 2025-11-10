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
  MapPin, 
  AlertTriangle, 
  Factory,
  Droplet,
  Wind,
  Zap,
  Leaf,
  CheckCircle, 
  Info, 
  BookOpen,
  Shield,
  Activity,
  Skull,
  Radio
} from 'lucide-react';

interface HazardResult {
  overallHazardScore: number;
  riskLevel: string;
  riskColor: string;
  hazards: {
    airQuality: { score: number; level: string; description: string };
    waterQuality: { score: number; level: string; description: string };
    soilContamination: { score: number; level: string; description: string };
    radonRisk: { score: number; level: string; description: string };
    leadPaint: { score: number; level: string; description: string };
    asbestos: { score: number; level: string; description: string };
    emf: { score: number; level: string; description: string };
    noise: { score: number; level: string; description: string };
  };
  healthImpact: {
    severity: string;
    affectedSystems: string[];
    vulnerablePopulations: string[];
  };
  propertyImpact: {
    valueReduction: number;
    percentageReduction: number;
    remediationCost: number;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Environmental Hazard Checker',
    description: 'Check environmental hazards near properties including EPA Superfund sites, soil contamination, air quality issues, and toxic waste locations',
  };
}

export default function EnvironmentalHazardChecker() {
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('California');
  const [zipCode, setZipCode] = useState<string>('90001');
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [yearBuilt, setYearBuilt] = useState<number>(1980);
  const [propertyType, setPropertyType] = useState<string>('residential');
  
  const [distanceToIndustrial, setDistanceToIndustrial] = useState<number>(5);
  const [distanceToHighway, setDistanceToHighway] = useState<number>(2);
  const [distanceToLandfill, setDistanceToLandfill] = useState<number>(10);
  const [distanceToPowerLines, setDistanceToPowerLines] = useState<number>(0.5);
  const [distanceToAirport, setDistanceToAirport] = useState<number>(15);
  
  const [waterSource, setWaterSource] = useState<string>('municipal');
  const [wellDepth, setWellDepth] = useState<number>(0);
  const [previousIndustrialUse, setPreviousIndustrialUse] = useState<boolean>(false);
  const [nearSuperfundSite, setNearSuperfundSite] = useState<boolean>(false);
  const [superfundDistance, setSuperfundDistance] = useState<number>(10);
  
  const [hasLeadPipes, setHasLeadPipes] = useState<boolean>(false);
  const [hasAsbestos, setHasAsbestos] = useState<boolean>(false);
  const [radonTested, setRadonTested] = useState<boolean>(false);
  const [radonLevel, setRadonLevel] = useState<number>(0);
  const [leadPaintPresent, setLeadPaintPresent] = useState<boolean>(false);
  
  const [airQualityIndex, setAirQualityIndex] = useState<number>(50);
  const [industrialEmissions, setIndustrialEmissions] = useState<boolean>(false);
  const [trafficVolume, setTrafficVolume] = useState<string>('moderate');

  const [calculation, setCalculation] = useState<HazardResult | null>(null);

  const calculateEnvironmentalHazards = () => {
    let airQualityScore = airQualityIndex * 0.8;
    if (distanceToHighway < 1) airQualityScore += 15;
    if (distanceToIndustrial < 2) airQualityScore += 20;
    if (industrialEmissions) airQualityScore += 15;
    if (trafficVolume === 'high') airQualityScore += 10;
    airQualityScore = Math.min(100, airQualityScore);

    let waterQualityScore = 20;
    if (waterSource === 'well') {
      waterQualityScore += 25;
      if (wellDepth < 100) waterQualityScore += 15;
    }
    if (hasLeadPipes) waterQualityScore += 30;
    if (nearSuperfundSite && superfundDistance < 5) waterQualityScore += 25;
    if (distanceToLandfill < 5) waterQualityScore += 15;
    waterQualityScore = Math.min(100, waterQualityScore);

    let soilScore = 10;
    if (previousIndustrialUse) soilScore += 40;
    if (nearSuperfundSite) {
      if (superfundDistance < 1) soilScore += 50;
      else if (superfundDistance < 5) soilScore += 30;
      else if (superfundDistance < 10) soilScore += 15;
    }
    if (distanceToLandfill < 3) soilScore += 20;
    if (distanceToIndustrial < 1) soilScore += 15;
    soilScore = Math.min(100, soilScore);

    let radonScore = 0;
    if (radonTested && radonLevel > 0) {
      if (radonLevel >= 4) radonScore = 90;
      else if (radonLevel >= 2.7) radonScore = 60;
      else if (radonLevel >= 1.3) radonScore = 30;
      else radonScore = 10;
    } else {
      const radonStates = ['Pennsylvania', 'Ohio', 'Kentucky', 'Iowa', 'Illinois'];
      if (radonStates.includes(state)) radonScore = 50;
      else radonScore = 30;
    }

    let leadPaintScore = 0;
    if (yearBuilt < 1978) {
      leadPaintScore = 60;
      if (leadPaintPresent) leadPaintScore = 90;
    } else {
      leadPaintScore = 5;
    }

    let asbestosScore = 0;
    if (yearBuilt < 1980) {
      asbestosScore = 50;
      if (hasAsbestos) asbestosScore = 85;
    } else {
      asbestosScore = 10;
    }

    let emfScore = 0;
    if (distanceToPowerLines < 0.25) emfScore = 75;
    else if (distanceToPowerLines < 0.5) emfScore = 50;
    else if (distanceToPowerLines < 1) emfScore = 30;
    else emfScore = 10;

    let noiseScore = 0;
    if (distanceToAirport < 5) noiseScore += 40;
    else if (distanceToAirport < 10) noiseScore += 25;
    if (distanceToHighway < 0.5) noiseScore += 30;
    else if (distanceToHighway < 2) noiseScore += 15;
    if (trafficVolume === 'high') noiseScore += 20;
    noiseScore = Math.min(100, noiseScore);

    const weights = {
      air: 0.20,
      water: 0.20,
      soil: 0.15,
      radon: 0.15,
      lead: 0.10,
      asbestos: 0.10,
      emf: 0.05,
      noise: 0.05
    };

    const overallHazardScore = 
      airQualityScore * weights.air +
      waterQualityScore * weights.water +
      soilScore * weights.soil +
      radonScore * weights.radon +
      leadPaintScore * weights.lead +
      asbestosScore * weights.asbestos +
      emfScore * weights.emf +
      noiseScore * weights.noise;

    const getLevel = (score: number): string => {
      if (score >= 75) return 'Critical';
      if (score >= 60) return 'High';
      if (score >= 40) return 'Moderate';
      if (score >= 25) return 'Low';
      return 'Minimal';
    };

    const getDescription = (hazardType: string, score: number): string => {
      const level = getLevel(score);
      const descriptions: { [key: string]: { [key: string]: string } } = {
        air: {
          'Critical': 'Severe air quality concerns requiring immediate attention',
          'High': 'Poor air quality may affect health',
          'Moderate': 'Acceptable air quality with some concerns',
          'Low': 'Good air quality',
          'Minimal': 'Excellent air quality'
        },
        water: {
          'Critical': 'Serious water contamination risk',
          'High': 'Significant water quality concerns',
          'Moderate': 'Some water quality issues present',
          'Low': 'Generally safe water supply',
          'Minimal': 'Clean water supply'
        },
        soil: {
          'Critical': 'Severe soil contamination likely',
          'High': 'Significant soil contamination risk',
          'Moderate': 'Potential soil quality issues',
          'Low': 'Minimal soil concerns',
          'Minimal': 'Clean soil conditions'
        },
        radon: {
          'Critical': 'Dangerous radon levels detected',
          'High': 'Elevated radon levels',
          'Moderate': 'Moderate radon risk',
          'Low': 'Low radon exposure',
          'Minimal': 'Negligible radon risk'
        },
        lead: {
          'Critical': 'High lead paint hazard',
          'High': 'Lead paint likely present',
          'Moderate': 'Possible lead paint presence',
          'Low': 'Low lead paint risk',
          'Minimal': 'No lead paint concerns'
        },
        asbestos: {
          'Critical': 'Asbestos present and hazardous',
          'High': 'Likely asbestos presence',
          'Moderate': 'Potential asbestos in materials',
          'Low': 'Low asbestos risk',
          'Minimal': 'No asbestos concerns'
        },
        emf: {
          'Critical': 'Very high EMF exposure',
          'High': 'Elevated EMF levels',
          'Moderate': 'Moderate EMF exposure',
          'Low': 'Low EMF exposure',
          'Minimal': 'Negligible EMF exposure'
        },
        noise: {
          'Critical': 'Excessive noise pollution',
          'High': 'Significant noise issues',
          'Moderate': 'Moderate noise levels',
          'Low': 'Low noise impact',
          'Minimal': 'Quiet environment'
        }
      };
      return descriptions[hazardType][level];
    };

    const getRiskLevel = (score: number): { level: string; color: string } => {
      if (score >= 75) return { level: 'Critical', color: 'bg-red-600' };
      if (score >= 60) return { level: 'High', color: 'bg-orange-500' };
      if (score >= 40) return { level: 'Moderate', color: 'bg-yellow-500' };
      if (score >= 25) return { level: 'Low', color: 'bg-green-400' };
      return { level: 'Minimal', color: 'bg-green-500' };
    };

    const overallRisk = getRiskLevel(overallHazardScore);

    const affectedSystems: string[] = [];
    if (airQualityScore > 50) affectedSystems.push('Respiratory System');
    if (waterQualityScore > 50 || leadPaintScore > 50) affectedSystems.push('Nervous System');
    if (soilScore > 50 || asbestosScore > 50) affectedSystems.push('Cancer Risk');
    if (radonScore > 50) affectedSystems.push('Lung Health');
    if (emfScore > 50) affectedSystems.push('Cellular Function');

    const vulnerablePopulations: string[] = [];
    if (overallHazardScore > 40) {
      vulnerablePopulations.push('Children', 'Pregnant Women', 'Elderly', 'Those with Respiratory Conditions');
    }

    const valueReduction = (overallHazardScore / 100) * propertyValue * 0.15;
    const percentageReduction = (valueReduction / propertyValue) * 100;

    let remediationCost = 0;
    if (leadPaintScore > 60) remediationCost += 8000;
    if (asbestosScore > 60) remediationCost += 15000;
    if (radonScore > 60) remediationCost += 3000;
    if (waterQualityScore > 60) remediationCost += 5000;
    if (soilScore > 60) remediationCost += 25000;

    const recommendations: string[] = [];
    
    if (airQualityScore > 50) {
      recommendations.push('Install HEPA air filtration systems throughout home');
      recommendations.push('Consider air quality monitoring devices');
    }
    
    if (waterQualityScore > 50) {
      recommendations.push('Install whole-house water filtration system');
      recommendations.push('Test water annually for contaminants');
    }
    
    if (soilScore > 60) {
      recommendations.push('Conduct Phase I environmental site assessment');
      recommendations.push('Test soil for heavy metals and VOCs');
      recommendations.push('Consider soil remediation or capping');
    }
    
    if (radonScore > 60) {
      recommendations.push('Install radon mitigation system immediately');
      recommendations.push('Test radon levels every 2 years');
    }
    
    if (leadPaintScore > 60) {
      recommendations.push('Hire certified lead abatement professional');
      recommendations.push('Never sand or scrape lead paint');
      recommendations.push('Use lead-safe work practices for renovations');
    }
    
    if (asbestosScore > 60) {
      recommendations.push('Have asbestos inspection by certified professional');
      recommendations.push('Do not disturb suspected asbestos materials');
      recommendations.push('Plan for professional asbestos abatement');
    }
    
    if (emfScore > 50) {
      recommendations.push('Measure EMF levels professionally');
      recommendations.push('Increase distance from power lines if possible');
      recommendations.push('Use EMF shielding for sleeping areas');
    }
    
    if (noiseScore > 50) {
      recommendations.push('Install soundproofing windows');
      recommendations.push('Add acoustic insulation to walls');
    }

    if (overallHazardScore > 60) {
      recommendations.push('Obtain environmental disclosure documents');
      recommendations.push('Consult environmental health specialist');
      recommendations.push('Review homeowner insurance for environmental coverage');
    }

    const result: HazardResult = {
      overallHazardScore,
      riskLevel: overallRisk.level,
      riskColor: overallRisk.color,
      hazards: {
        airQuality: { score: airQualityScore, level: getLevel(airQualityScore), description: getDescription('air', airQualityScore) },
        waterQuality: { score: waterQualityScore, level: getLevel(waterQualityScore), description: getDescription('water', waterQualityScore) },
        soilContamination: { score: soilScore, level: getLevel(soilScore), description: getDescription('soil', soilScore) },
        radonRisk: { score: radonScore, level: getLevel(radonScore), description: getDescription('radon', radonScore) },
        leadPaint: { score: leadPaintScore, level: getLevel(leadPaintScore), description: getDescription('lead', leadPaintScore) },
        asbestos: { score: asbestosScore, level: getLevel(asbestosScore), description: getDescription('asbestos', asbestosScore) },
        emf: { score: emfScore, level: getLevel(emfScore), description: getDescription('emf', emfScore) },
        noise: { score: noiseScore, level: getLevel(noiseScore), description: getDescription('noise', noiseScore) }
      },
      healthImpact: {
        severity: overallRisk.level,
        affectedSystems,
        vulnerablePopulations
      },
      propertyImpact: {
        valueReduction,
        percentageReduction,
        remediationCost
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-green-600 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Environmental Hazard Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assess environmental health risks including air quality, water contamination, soil pollution, 
            radon, lead paint, asbestos, EMF exposure, and noise pollution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Environmental Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="location" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="location">Location</TabsTrigger>
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="hazards">Hazards</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Article
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="location" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="San Francisco"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="California">California</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Ohio">Ohio</option>
                          <option value="New York">New York</option>
                          <option value="Texas">Texas</option>
                          <option value="Florida">Florida</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="94102"
                        />
                      </div>
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
                    </div>

                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-3">Proximity to Pollution Sources</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="distanceToIndustrial">Distance to Industrial Area (miles)</Label>
                        <Input
                          id="distanceToIndustrial"
                          type="number"
                          step="0.1"
                          value={distanceToIndustrial}
                          onChange={(e) => setDistanceToIndustrial(Number(e.target.value))}
                          placeholder="5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceToHighway">Distance to Highway (miles)</Label>
                        <Input
                          id="distanceToHighway"
                          type="number"
                          step="0.1"
                          value={distanceToHighway}
                          onChange={(e) => setDistanceToHighway(Number(e.target.value))}
                          placeholder="2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceToLandfill">Distance to Landfill (miles)</Label>
                        <Input
                          id="distanceToLandfill"
                          type="number"
                          step="0.1"
                          value={distanceToLandfill}
                          onChange={(e) => setDistanceToLandfill(Number(e.target.value))}
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceToPowerLines">Distance to Power Lines (miles)</Label>
                        <Input
                          id="distanceToPowerLines"
                          type="number"
                          step="0.1"
                          value={distanceToPowerLines}
                          onChange={(e) => setDistanceToPowerLines(Number(e.target.value))}
                          placeholder="0.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceToAirport">Distance to Airport (miles)</Label>
                        <Input
                          id="distanceToAirport"
                          type="number"
                          step="0.1"
                          value={distanceToAirport}
                          onChange={(e) => setDistanceToAirport(Number(e.target.value))}
                          placeholder="15"
                        />
                      </div>
                      <div>
                        <Label htmlFor="superfundDistance">Distance to Superfund Site (miles)</Label>
                        <Input
                          id="superfundDistance"
                          type="number"
                          step="0.1"
                          value={superfundDistance}
                          onChange={(e) => setSuperfundDistance(Number(e.target.value))}
                          placeholder="10"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="yearBuilt">Year Built</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={yearBuilt}
                          onChange={(e) => setYearBuilt(Number(e.target.value))}
                          placeholder="1980"
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
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="mixed-use">Mixed Use</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="waterSource">Water Source</Label>
                        <select
                          id="waterSource"
                          value={waterSource}
                          onChange={(e) => setWaterSource(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="municipal">Municipal Water</option>
                          <option value="well">Private Well</option>
                          <option value="mixed">Mixed Sources</option>
                        </select>
                      </div>
                      {waterSource === 'well' && (
                        <div>
                          <Label htmlFor="wellDepth">Well Depth (feet)</Label>
                          <Input
                            id="wellDepth"
                            type="number"
                            value={wellDepth}
                            onChange={(e) => setWellDepth(Number(e.target.value))}
                            placeholder="150"
                          />
                        </div>
                      )}
                    </div>

                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="previousIndustrialUse"
                          checked={previousIndustrialUse}
                          onChange={(e) => setPreviousIndustrialUse(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="previousIndustrialUse">Previous industrial use of property</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="nearSuperfundSite"
                          checked={nearSuperfundSite}
                          onChange={(e) => setNearSuperfundSite(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="nearSuperfundSite">Near EPA Superfund site</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasLeadPipes"
                          checked={hasLeadPipes}
                          onChange={(e) => setHasLeadPipes(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasLeadPipes">Lead pipes present</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hazards" className="space-y-4">
                    <h4 className="font-semibold mb-3">Air Quality</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="airQualityIndex">Air Quality Index (AQI)</Label>
                        <Input
                          id="airQualityIndex"
                          type="number"
                          value={airQualityIndex}
                          onChange={(e) => setAirQualityIndex(Number(e.target.value))}
                          placeholder="50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="trafficVolume">Traffic Volume</Label>
                        <select
                          id="trafficVolume"
                          value={trafficVolume}
                          onChange={(e) => setTrafficVolume(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="low">Low</option>
                          <option value="moderate">Moderate</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="industrialEmissions"
                          checked={industrialEmissions}
                          onChange={(e) => setIndustrialEmissions(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="industrialEmissions">Industrial emissions nearby</Label>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    <h4 className="font-semibold mb-3">Building Materials</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="leadPaintPresent"
                          checked={leadPaintPresent}
                          onChange={(e) => setLeadPaintPresent(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="leadPaintPresent">Lead paint confirmed present</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasAsbestos"
                          checked={hasAsbestos}
                          onChange={(e) => setHasAsbestos(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasAsbestos">Asbestos confirmed present</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="radonTested"
                          checked={radonTested}
                          onChange={(e) => setRadonTested(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="radonTested">Radon testing completed</Label>
                      </div>
                    </div>

                    {radonTested && (
                      <div className="mt-4">
                        <Label htmlFor="radonLevel">Radon Level (pCi/L)</Label>
                        <Input
                          id="radonLevel"
                          type="number"
                          step="0.1"
                          value={radonLevel}
                          onChange={(e) => setRadonLevel(Number(e.target.value))}
                          placeholder="2.5"
                        />
                        <p className="text-xs text-gray-600 mt-1">EPA action level: 4.0 pCi/L</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">Understanding Environmental Hazards in Real Estate</h2>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-green-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Key Takeaways</h3>
                            <ul className="text-green-700 space-y-1">
                              <li>• Environmental hazards can seriously impact health and property values</li>
                              <li>• Many hazards are invisible and require professional testing</li>
                              <li>• Older properties face higher risks from lead and asbestos</li>
                              <li>• Location proximity to pollution sources is crucial</li>
                              <li>• Most environmental issues can be mitigated with proper remediation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Why Environmental Hazards Matter</h3>
                      <p className="mb-4">
                        Environmental hazards pose significant risks to both human health and property values. Unlike 
                        structural issues that are often visible, many environmental hazards are invisible, odorless, and 
                        can only be detected through professional testing. Understanding and addressing these hazards is 
                        essential for protecting your family's health and your real estate investment.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Major Environmental Hazards</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Air Quality</h4>
                      <p className="mb-4">
                        Indoor and outdoor air quality significantly affects health and quality of life. Poor air quality 
                        can result from proximity to highways, industrial facilities, or agricultural operations. Indoor 
                        air quality issues may stem from inadequate ventilation, off-gassing from materials, or biological 
                        contaminants. The Air Quality Index (AQI) provides daily information about outdoor air quality, 
                        with values above 100 considered unhealthy for sensitive groups.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Water Contamination</h4>
                      <p className="mb-4">
                        Water quality concerns vary by source. Municipal water systems are regulated by the EPA under the 
                        Safe Drinking Water Act, but contamination can still occur through aging infrastructure or local 
                        sources. Private wells are the owner's responsibility and should be tested annually. Lead pipes, 
                        common in older homes, can leach lead into drinking water, particularly in areas with corrosive 
                        water. PFAS, nitrates, bacteria, and other contaminants may also be present.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Soil Contamination</h4>
                      <p className="mb-4">
                        Soil contamination often results from previous industrial use, proximity to contaminated sites, 
                        or historical use of lead paint and pesticides. The EPA's Superfund program identifies and 
                        remediates severely contaminated sites, but many other contaminated properties exist. Soil 
                        contamination can affect property use, require expensive remediation, and impact property values 
                        significantly. Vapor intrusion from contaminated soil can also affect indoor air quality.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Radon Gas</h4>
                      <p className="mb-4">
                        Radon is a radioactive gas that naturally occurs from uranium decay in soil and rock. It's the 
                        second leading cause of lung cancer after smoking. Radon enters buildings through cracks in 
                        foundations and can accumulate to dangerous levels. The EPA recommends action when radon levels 
                        exceed 4 pCi/L, though no level is truly safe. Radon testing is inexpensive and should be 
                        performed during real estate transactions. Mitigation systems can effectively reduce radon levels.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Lead Paint</h4>
                      <p className="mb-4">
                        Lead paint was commonly used until banned for residential use in 1978. Homes built before this 
                        date likely contain lead paint, which becomes hazardous when deteriorating, being renovated, or 
                        disturbed. Lead exposure is particularly dangerous for children, causing developmental issues and 
                        learning disabilities. Federal law requires disclosure of known lead hazards in pre-1978 housing. 
                        Lead-safe work practices must be used during renovations.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Asbestos</h4>
                      <p className="mb-4">
                        Asbestos was widely used in building materials until the 1980s for its fire resistance and 
                        insulation properties. Common locations include pipe insulation, floor tiles, roofing materials, 
                        and textured coatings. Asbestos is only hazardous when disturbed and fibers become airborne. 
                        Exposure can cause asbestosis, lung cancer, and mesothelioma, often decades after exposure. 
                        Asbestos-containing materials in good condition can often be left undisturbed, but removal or 
                        encapsulation may be necessary during renovations.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Electromagnetic Fields (EMF)</h4>
                      <p className="mb-4">
                        High-voltage power lines and electrical equipment generate electromagnetic fields. While research 
                        on health effects remains inconclusive, some studies suggest potential links to childhood leukemia 
                        at very high exposure levels. Properties very close to major power lines (within 1/4 mile) may 
                        experience EMF levels above background. EMF strength decreases rapidly with distance from sources. 
                        Property values near high-voltage lines are often reduced regardless of health concerns.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Noise Pollution</h4>
                      <p className="mb-4">
                        Chronic noise exposure affects health, sleep quality, and property values. Major sources include 
                        highways, airports, railways, and industrial facilities. The WHO recommends outdoor noise levels 
                        below 55 dB during the day and 45 dB at night. Properties near airports may experience noise 
                        levels exceeding 65 dB. Noise pollution can be mitigated through soundproofing, but this can be 
                        expensive. Check noise contour maps for properties near airports.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Assessment and Testing</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Professional Inspections</h4>
                      <p className="mb-4">
                        Many environmental hazards require professional testing. Standard home inspections often don't 
                        include environmental testing, which must be ordered separately. Recommended tests include radon 
                        testing, lead paint inspection (for pre-1978 homes), water quality testing (especially for wells), 
                        asbestos survey (for pre-1980 homes undergoing renovation), and Phase I environmental site 
                        assessments for commercial properties or properties with industrial history.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Public Resources</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>EPA Superfund site database (online mapping available)</li>
                        <li>State environmental agency databases</li>
                        <li>Local health department water quality reports</li>
                        <li>Air quality monitoring websites (AirNow.gov)</li>
                        <li>Noise contour maps near airports</li>
                        <li>Historical use records from local archives</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Health Impacts</h3>
                      <p className="mb-4">
                        Environmental hazards affect various body systems differently. Respiratory issues may result from 
                        poor air quality, radon, and asbestos. Neurological effects can occur from lead, some water 
                        contaminants, and certain soil pollutants. Cancer risks are associated with radon, asbestos, and 
                        some chemical contaminants. Cardiovascular impacts may result from air pollution and noise. 
                        Children, pregnant women, elderly individuals, and those with existing health conditions are 
                        particularly vulnerable.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Property Value Impact</h3>
                      <p className="mb-4">
                        Environmental hazards significantly affect property values through direct remediation costs, 
                        reduced marketability, increased insurance costs, potential liability, and restricted use. 
                        Properties near Superfund sites may experience 10-20% value reductions. Homes requiring lead 
                        abatement or asbestos removal face costly remediation. However, properly remediated properties 
                        can recover value, especially with documentation of professional work.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Remediation and Mitigation</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Cost-Effective Solutions</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Radon:</strong> $800-2,500 for mitigation systems, highly effective</li>
                        <li><strong>Water:</strong> $1,000-5,000 for whole-house filtration systems</li>
                        <li><strong>Air Quality:</strong> $500-3,000 for HEPA filtration systems</li>
                        <li><strong>Lead Paint:</strong> $8,000-15,000 for abatement, or encapsulation as alternative</li>
                        <li><strong>Asbestos:</strong> $15,000-30,000 for removal, less for encapsulation</li>
                        <li><strong>Noise:</strong> $3,000-10,000 for soundproofing windows and doors</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Professional Requirements</h4>
                      <p className="mb-4">
                        Lead and asbestos work requires certified professionals due to health risks and regulations. Many 
                        states require licensing for environmental remediation contractors. DIY approaches are dangerous 
                        for lead, asbestos, and soil contamination. Professional remediation provides documentation 
                        valuable for resale and liability protection.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Legal and Disclosure Requirements</h3>
                      <p className="mb-4">
                        Federal law requires lead paint disclosure for pre-1978 housing. Many states require disclosure 
                        of known environmental hazards. Sellers may be liable for non-disclosure of known hazards. 
                        Environmental liens can attach to contaminated properties. Commercial properties often require 
                        Phase I environmental assessments for financing. Proper documentation of testing and remediation 
                        provides legal protection.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Making Informed Decisions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Before Purchasing</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Research property history and surrounding area</li>
                        <li>Review environmental disclosure documents carefully</li>
                        <li>Order appropriate environmental testing</li>
                        <li>Calculate potential remediation costs</li>
                        <li>Consider ongoing monitoring and maintenance costs</li>
                        <li>Negotiate price adjustments for known hazards</li>
                        <li>Obtain specialist inspections for high-risk properties</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">For Current Owners</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Test for radon every 2-5 years</li>
                        <li>Test well water annually</li>
                        <li>Use lead-safe practices during renovations</li>
                        <li>Document all environmental testing and remediation</li>
                        <li>Monitor air quality, especially near pollution sources</li>
                        <li>Maintain remediation systems properly</li>
                        <li>Stay informed about nearby environmental issues</li>
                      </ul>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                          <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                            <ul className="text-yellow-700 space-y-1">
                              <li>• This tool provides estimates only and cannot replace professional environmental assessments</li>
                              <li>• Always hire certified professionals for testing and remediation of hazardous materials</li>
                              <li>• Environmental conditions can change over time requiring ongoing monitoring</li>
                              <li>• Consult with environmental health specialists and attorneys for serious contamination issues</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button onClick={calculateEnvironmentalHazards} className="w-full bg-green-600 hover:bg-green-700">
                    Assess Environmental Hazards
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
                      <Activity className="h-5 w-5" />
                      Overall Hazard Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-4" style={{ color: calculation.overallHazardScore >= 60 ? '#dc2626' : calculation.overallHazardScore >= 40 ? '#ea580c' : '#059669' }}>
                        {calculation.overallHazardScore.toFixed(0)}
                      </div>
                      <Badge className={`${calculation.riskColor} text-white px-4 py-2 text-lg`}>
                        {calculation.riskLevel} Risk
                      </Badge>
                      <p className="text-sm text-gray-600 mt-4">
                        Score ranges from 0 (minimal risk) to 100 (critical risk)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Skull className="h-5 w-5" />
                      Hazard Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(calculation.hazards).map(([key, hazard]) => (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <div className="text-right">
                            <div className="font-bold">{hazard.score.toFixed(0)}</div>
                            <div className="text-xs text-gray-600">{hazard.level}</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{hazard.description}</p>
                        {key !== 'noise' && <Separator className="mt-3" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Property Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Estimated Value Reduction</div>
                      <div className="text-2xl font-bold text-red-600">
                        -{formatCurrency(calculation.propertyImpact.valueReduction)}
                      </div>
                      <div className="text-sm text-gray-600">
                        -{calculation.propertyImpact.percentageReduction.toFixed(2)}%
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Est. Remediation Cost</div>
                      <div className="text-xl font-bold text-orange-600">
                        {formatCurrency(calculation.propertyImpact.remediationCost)}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {calculation.healthImpact.affectedSystems.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Health Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">Affected Systems:</div>
                        <div className="flex flex-wrap gap-2">
                          {calculation.healthImpact.affectedSystems.map((system, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {system}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {calculation.healthImpact.vulnerablePopulations.length > 0 && (
                        <div>
                          <div className="text-sm font-semibold text-gray-700 mb-2">Vulnerable Groups:</div>
                          <div className="flex flex-wrap gap-2">
                            {calculation.healthImpact.vulnerablePopulations.map((pop, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-red-50">
                                {pop}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

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
                              <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
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
                    Enter your property information and click "Assess Environmental Hazards" to see your environmental risk assessment.
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
