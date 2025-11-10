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
  Home, 
  FileText, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  CloudRain,
  Flame,
  Wind,
  Waves,
  Mountain,
  BookOpen,
  Shield,
  Activity
} from 'lucide-react';

interface DisasterRiskCalculation {
  overallRiskScore: number;
  riskLevel: string;
  riskColor: string;
  individualRisks: {
    flood: { score: number; level: string };
    earthquake: { score: number; level: string };
    hurricane: { score: number; level: string };
    tornado: { score: number; level: string };
    wildfire: { score: number; level: string };
    winter: { score: number; level: string };
  };
  insuranceImpact: {
    estimatedPremiumIncrease: number;
    requiresFloodInsurance: boolean;
    requiresEarthquakeInsurance: boolean;
  };
  propertyValueImpact: {
    estimatedImpact: number;
    percentageImpact: number;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Natural Disaster Risk Score (by Address) Calculator',
    description: 'Assess comprehensive natural disaster risks for any property including flood zones, earthquake risk, wildfire hazard, hurricane exposure, and tornado probabi...',
  };
}

export default function NaturalDisasterRiskScore() {
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('California');
  const [zipCode, setZipCode] = useState<string>('90001');
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [yearBuilt, setYearBuilt] = useState<number>(2000);
  const [elevation, setElevation] = useState<number>(100);
  const [distanceToCoast, setDistanceToCoast] = useState<number>(50);
  const [distanceToFaultLine, setDistanceToFaultLine] = useState<number>(25);
  const [forestProximity, setForestProximity] = useState<number>(10);
  const [floodZone, setFloodZone] = useState<string>('X');
  const [hurricaneZone, setHurricaneZone] = useState<number>(0);
  const [tornadoAlleyProximity, setTornadoAlleyProximity] = useState<number>(100);
  const [historicalEvents, setHistoricalEvents] = useState<number>(2);
  const [buildingMaterials, setBuildingMaterials] = useState<string>('wood-frame');
  const [hasBasement, setHasBasement] = useState<boolean>(false);
  const [roofType, setRoofType] = useState<string>('asphalt-shingle');
  const [foundationType, setFoundationType] = useState<string>('slab');

  const [calculation, setCalculation] = useState<DisasterRiskCalculation | null>(null);

  const calculateDisasterRisk = () => {
    let floodScore = 0;
    if (floodZone === 'A' || floodZone === 'AE') floodScore = 80;
    else if (floodZone === 'B' || floodZone === 'X500') floodScore = 50;
    else if (floodZone === 'C' || floodZone === 'X') floodScore = 20;
    
    if (elevation < 50) floodScore += 20;
    if (distanceToCoast < 10) floodScore += 15;
    floodScore = Math.min(100, floodScore);

    let earthquakeScore = 0;
    if (distanceToFaultLine < 10) earthquakeScore = 85;
    else if (distanceToFaultLine < 25) earthquakeScore = 60;
    else if (distanceToFaultLine < 50) earthquakeScore = 35;
    else earthquakeScore = 15;
    
    if (state === 'California' || state === 'Alaska') earthquakeScore += 15;
    earthquakeScore = Math.min(100, earthquakeScore);

    let hurricaneScore = hurricaneZone * 20;
    if (distanceToCoast < 25) hurricaneScore += 20;
    if (state === 'Florida' || state === 'Louisiana' || state === 'Texas') hurricaneScore += 15;
    hurricaneScore = Math.min(100, hurricaneScore);

    let tornadoScore = 0;
    if (tornadoAlleyProximity < 50) tornadoScore = 70;
    else if (tornadoAlleyProximity < 150) tornadoScore = 40;
    else tornadoScore = 15;
    
    const tornadoStates = ['Oklahoma', 'Kansas', 'Texas', 'Nebraska', 'Missouri'];
    if (tornadoStates.includes(state)) tornadoScore += 20;
    tornadoScore = Math.min(100, tornadoScore);

    let wildfireScore = 0;
    if (forestProximity < 5) wildfireScore = 90;
    else if (forestProximity < 15) wildfireScore = 65;
    else if (forestProximity < 30) wildfireScore = 35;
    else wildfireScore = 10;
    
    if (state === 'California' || state === 'Colorado' || state === 'Oregon') wildfireScore += 15;
    wildfireScore = Math.min(100, wildfireScore);

    let winterScore = 0;
    const winterStates = ['Minnesota', 'Wisconsin', 'Michigan', 'Maine', 'Vermont', 'New York'];
    if (winterStates.includes(state)) winterScore = 60;
    else if (state === 'Illinois' || state === 'Ohio') winterScore = 40;
    else winterScore = 15;

    const weights = {
      flood: 0.25,
      earthquake: 0.20,
      hurricane: 0.20,
      tornado: 0.15,
      wildfire: 0.15,
      winter: 0.05
    };

    const overallRiskScore = 
      floodScore * weights.flood +
      earthquakeScore * weights.earthquake +
      hurricaneScore * weights.hurricane +
      tornadoScore * weights.tornado +
      wildfireScore * weights.wildfire +
      winterScore * weights.winter;

    const getRiskLevel = (score: number): { level: string; color: string } => {
      if (score >= 75) return { level: 'Very High', color: 'bg-red-500' };
      if (score >= 60) return { level: 'High', color: 'bg-orange-500' };
      if (score >= 40) return { level: 'Moderate', color: 'bg-yellow-500' };
      if (score >= 25) return { level: 'Low', color: 'bg-green-400' };
      return { level: 'Very Low', color: 'bg-green-500' };
    };

    const getIndividualRiskLevel = (score: number): string => {
      if (score >= 75) return 'Very High';
      if (score >= 60) return 'High';
      if (score >= 40) return 'Moderate';
      if (score >= 25) return 'Low';
      return 'Very Low';
    };

    const overallRisk = getRiskLevel(overallRiskScore);

    const basePremiumIncrease = (overallRiskScore / 100) * 2000;
    const requiresFloodInsurance = floodZone === 'A' || floodZone === 'AE' || floodScore > 60;
    const requiresEarthquakeInsurance = earthquakeScore > 60;

    const propertyImpact = (overallRiskScore / 100) * propertyValue * 0.10;
    const percentageImpact = (propertyImpact / propertyValue) * 100;

    const recommendations: string[] = [];
    
    if (floodScore > 50) {
      recommendations.push('Consider flood insurance even if not required by lender');
      recommendations.push('Install sump pumps and backflow preventers');
      recommendations.push('Elevate critical utilities and appliances');
    }
    
    if (earthquakeScore > 50) {
      recommendations.push('Retrofit home with earthquake-resistant features');
      recommendations.push('Secure heavy furniture and appliances to walls');
      recommendations.push('Consider earthquake insurance coverage');
    }
    
    if (hurricaneScore > 50) {
      recommendations.push('Install impact-resistant windows and doors');
      recommendations.push('Upgrade to hurricane-rated roofing');
      recommendations.push('Create and maintain an evacuation plan');
    }
    
    if (tornadoScore > 50) {
      recommendations.push('Install a safe room or storm shelter');
      recommendations.push('Reinforce garage doors and roof connections');
      recommendations.push('Keep emergency supplies readily accessible');
    }
    
    if (wildfireScore > 50) {
      recommendations.push('Create defensible space around property');
      recommendations.push('Use fire-resistant building materials');
      recommendations.push('Install ember-resistant vents');
    }
    
    if (overallRiskScore > 60) {
      recommendations.push('Conduct annual property risk assessment');
      recommendations.push('Maintain adequate emergency fund for repairs');
      recommendations.push('Review and update insurance coverage annually');
    }

    const result: DisasterRiskCalculation = {
      overallRiskScore,
      riskLevel: overallRisk.level,
      riskColor: overallRisk.color,
      individualRisks: {
        flood: { score: floodScore, level: getIndividualRiskLevel(floodScore) },
        earthquake: { score: earthquakeScore, level: getIndividualRiskLevel(earthquakeScore) },
        hurricane: { score: hurricaneScore, level: getIndividualRiskLevel(hurricaneScore) },
        tornado: { score: tornadoScore, level: getIndividualRiskLevel(tornadoScore) },
        wildfire: { score: wildfireScore, level: getIndividualRiskLevel(wildfireScore) },
        winter: { score: winterScore, level: getIndividualRiskLevel(winterScore) }
      },
      insuranceImpact: {
        estimatedPremiumIncrease: basePremiumIncrease,
        requiresFloodInsurance,
        requiresEarthquakeInsurance
      },
      propertyValueImpact: {
        estimatedImpact: propertyImpact,
        percentageImpact
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Natural Disaster Risk Score Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assess your property's vulnerability to natural disasters including floods, earthquakes, 
            hurricanes, tornadoes, wildfires, and severe winter weather.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Disaster Risk Assessment
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
                          placeholder="Los Angeles"
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
                          <option value="Texas">Texas</option>
                          <option value="Florida">Florida</option>
                          <option value="New York">New York</option>
                          <option value="Oklahoma">Oklahoma</option>
                          <option value="Louisiana">Louisiana</option>
                          <option value="Colorado">Colorado</option>
                          <option value="Oregon">Oregon</option>
                          <option value="Minnesota">Minnesota</option>
                          <option value="Alaska">Alaska</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="90001"
                        />
                      </div>
                      <div>
                        <Label htmlFor="elevation">Elevation (feet above sea level)</Label>
                        <Input
                          id="elevation"
                          type="number"
                          value={elevation}
                          onChange={(e) => setElevation(Number(e.target.value))}
                          placeholder="100"
                        />
                      </div>
                    </div>
                  </TabsContent>

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
                          <option value="single-family">Single Family</option>
                          <option value="condo">Condominium</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-family">Multi-Family</option>
                          <option value="manufactured">Manufactured Home</option>
                        </select>
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
                        <Label htmlFor="buildingMaterials">Building Materials</Label>
                        <select
                          id="buildingMaterials"
                          value={buildingMaterials}
                          onChange={(e) => setBuildingMaterials(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="wood-frame">Wood Frame</option>
                          <option value="brick">Brick</option>
                          <option value="concrete">Concrete</option>
                          <option value="steel">Steel Frame</option>
                          <option value="mixed">Mixed Materials</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="roofType">Roof Type</Label>
                        <select
                          id="roofType"
                          value={roofType}
                          onChange={(e) => setRoofType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="asphalt-shingle">Asphalt Shingle</option>
                          <option value="metal">Metal</option>
                          <option value="tile">Tile</option>
                          <option value="slate">Slate</option>
                          <option value="flat">Flat Roof</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="foundationType">Foundation Type</Label>
                        <select
                          id="foundationType"
                          value={foundationType}
                          onChange={(e) => setFoundationType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="slab">Slab</option>
                          <option value="crawlspace">Crawl Space</option>
                          <option value="basement">Basement</option>
                          <option value="pier">Pier & Beam</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2 pt-6">
                        <input
                          type="checkbox"
                          id="hasBasement"
                          checked={hasBasement}
                          onChange={(e) => setHasBasement(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasBasement">Property has basement</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hazards" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="floodZone">FEMA Flood Zone</Label>
                        <select
                          id="floodZone"
                          value={floodZone}
                          onChange={(e) => setFloodZone(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="X">Zone X (Low Risk)</option>
                          <option value="X500">Zone X500 (0.2% Annual Chance)</option>
                          <option value="AE">Zone AE (High Risk)</option>
                          <option value="A">Zone A (High Risk, No BFE)</option>
                          <option value="V">Zone V (Coastal High Hazard)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="distanceToCoast">Distance to Coast (miles)</Label>
                        <Input
                          id="distanceToCoast"
                          type="number"
                          value={distanceToCoast}
                          onChange={(e) => setDistanceToCoast(Number(e.target.value))}
                          placeholder="50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="distanceToFaultLine">Distance to Fault Line (miles)</Label>
                        <Input
                          id="distanceToFaultLine"
                          type="number"
                          value={distanceToFaultLine}
                          onChange={(e) => setDistanceToFaultLine(Number(e.target.value))}
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <Label htmlFor="forestProximity">Distance to Forest (miles)</Label>
                        <Input
                          id="forestProximity"
                          type="number"
                          value={forestProximity}
                          onChange={(e) => setForestProximity(Number(e.target.value))}
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="hurricaneZone">Hurricane Wind Zone (0-5)</Label>
                        <Input
                          id="hurricaneZone"
                          type="number"
                          min="0"
                          max="5"
                          value={hurricaneZone}
                          onChange={(e) => setHurricaneZone(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tornadoAlleyProximity">Tornado Alley Proximity (miles)</Label>
                        <Input
                          id="tornadoAlleyProximity"
                          type="number"
                          value={tornadoAlleyProximity}
                          onChange={(e) => setTornadoAlleyProximity(Number(e.target.value))}
                          placeholder="100"
                        />
                      </div>
                      <div>
                        <Label htmlFor="historicalEvents">Historical Events (last 20 years)</Label>
                        <Input
                          id="historicalEvents"
                          type="number"
                          value={historicalEvents}
                          onChange={(e) => setHistoricalEvents(Number(e.target.value))}
                          placeholder="2"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">Understanding Natural Disaster Risk Assessment</h2>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Takeaways</h3>
                            <ul className="text-blue-700 space-y-1">
                              <li>• Natural disaster risk significantly impacts property value and insurance costs</li>
                              <li>• Different regions face different primary disaster threats</li>
                              <li>• Proper mitigation can reduce both risk and insurance premiums</li>
                              <li>• Building codes and construction quality affect resilience</li>
                              <li>• Climate change is increasing disaster frequency and intensity</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Why Natural Disaster Risk Matters</h3>
                      <p className="mb-4">
                        Natural disasters pose significant financial and safety risks to property owners. Understanding your 
                        property's vulnerability to various natural hazards is crucial for making informed decisions about 
                        insurance coverage, mitigation investments, and long-term property planning. Each year, natural 
                        disasters cause billions of dollars in property damage across the United States, affecting millions 
                        of homeowners.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Major Natural Disaster Categories</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Flood Risk</h4>
                      <p className="mb-4">
                        Flooding is the most common and costly natural disaster in the United States. FEMA designates flood 
                        zones based on statistical flood risk, with Zone A and AE areas having a 1% annual chance of flooding 
                        (the 100-year floodplain). Properties in high-risk zones typically require flood insurance if 
                        financed through federally-backed mortgages. However, approximately 25% of flood insurance claims 
                        come from moderate-to-low risk areas, making flood insurance worth considering for many properties.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Earthquake Risk</h4>
                      <p className="mb-4">
                        Earthquake risk is primarily concentrated in specific regions, particularly California, Alaska, and 
                        the Pacific Northwest. The proximity to active fault lines is a key risk factor, but earthquakes can 
                        cause damage hundreds of miles from the epicenter. Older homes built before modern seismic codes are 
                        particularly vulnerable. Earthquake insurance is typically not included in standard homeowners 
                        policies and must be purchased separately.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Hurricane Risk</h4>
                      <p className="mb-4">
                        Hurricane risk affects coastal areas along the Atlantic Ocean and Gulf of Mexico. These powerful 
                        storms bring destructive winds, storm surge, and flooding. Properties within 25 miles of the coast 
                        face the highest risk, particularly in states like Florida, Louisiana, Texas, and the Carolinas. 
                        Hurricane-resistant construction features can significantly reduce damage risk and insurance costs.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Tornado Risk</h4>
                      <p className="mb-4">
                        Tornado risk is highest in "Tornado Alley," a region stretching from Texas to South Dakota. However, 
                        tornadoes can occur anywhere in the United States. Unlike hurricanes, tornadoes provide little 
                        warning time, making proper preparation and safe rooms critical. Modern building codes in high-risk 
                        areas now often require enhanced roof and wall connections to resist tornado forces.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Wildfire Risk</h4>
                      <p className="mb-4">
                        Wildfire risk has increased dramatically in recent years, particularly in Western states. Properties 
                        in the Wildland-Urban Interface (WUI), where development meets natural vegetation, face the highest 
                        risk. Creating defensible space, using fire-resistant materials, and maintaining proper vegetation 
                        management are critical mitigation strategies. Some insurance companies have stopped offering 
                        coverage in high-risk wildfire areas.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Winter Storm Risk</h4>
                      <p className="mb-4">
                        Severe winter weather, including ice storms, blizzards, and extreme cold, primarily affects northern 
                        and central states. These events can cause roof collapses from snow load, burst pipes, and extended 
                        power outages. Proper insulation, heating system maintenance, and roof design are important 
                        mitigation factors.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Risk Assessment Factors</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Location-Based Factors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Geographic Region:</strong> Certain disasters are more prevalent in specific areas</li>
                        <li><strong>Elevation:</strong> Higher elevations reduce flood risk but may increase wildfire exposure</li>
                        <li><strong>Proximity to Hazards:</strong> Distance to coasts, fault lines, and forests affects risk</li>
                        <li><strong>Local Topography:</strong> Hills, valleys, and water bodies influence disaster impact</li>
                        <li><strong>Climate Patterns:</strong> Historical weather data indicates future risk probability</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Property-Specific Factors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li><strong>Age of Construction:</strong> Newer buildings typically meet more stringent codes</li>
                        <li><strong>Building Materials:</strong> Some materials resist specific disasters better than others</li>
                        <li><strong>Foundation Type:</strong> Affects earthquake and flood vulnerability</li>
                        <li><strong>Roof Design:</strong> Critical for wind, snow, and fire resistance</li>
                        <li><strong>Structural Features:</strong> Basements, safe rooms, and reinforcements matter</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Insurance Implications</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Standard Coverage Gaps</h4>
                      <p className="mb-4">
                        Standard homeowners insurance policies typically exclude flood and earthquake damage, requiring 
                        separate policies. Understanding these gaps is crucial for adequate protection. In high-risk areas, 
                        insurance may be expensive, difficult to obtain, or require participation in state-run programs.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Premium Factors</h4>
                      <p className="mb-4">
                        Insurance premiums reflect disaster risk through multiple factors including location, construction 
                        type, age of home, claims history, and available mitigation features. Properties with higher risk 
                        scores typically face significantly higher premiums or may struggle to find coverage. Implementing 
                        mitigation measures can qualify for premium discounts.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Mitigation Strategies</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Structural Improvements</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Earthquake: Foundation bolting, cripple wall bracing, automatic gas shutoffs</li>
                        <li>Hurricane: Impact-resistant windows, roof reinforcement, storm shutters</li>
                        <li>Flood: Elevation, flood vents, sump pumps, waterproofing</li>
                        <li>Tornado: Safe rooms, reinforced connections, impact-resistant garage doors</li>
                        <li>Wildfire: Fire-resistant roofing, ember-resistant vents, defensible space</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Landscaping and Site Management</h4>
                      <p className="mb-4">
                        Proper landscaping can significantly reduce disaster risk. For wildfires, maintain defensible space 
                        and use fire-resistant plants. For floods, ensure proper drainage and avoid impermeable surfaces. 
                        For hurricanes, trim trees and remove debris that could become projectiles.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Financial Impact</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Property Value</h4>
                      <p className="mb-4">
                        High disaster risk can significantly impact property values, particularly after major events in an 
                        area. Properties in high-risk zones may be harder to sell or finance. Conversely, properties with 
                        strong mitigation features may command premium prices in risk-prone areas.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Long-Term Costs</h4>
                      <p className="mb-4">
                        Beyond insurance premiums, disaster risk affects maintenance costs, utility expenses, and potential 
                        repair costs. High-risk properties may require more frequent inspections, specialized maintenance, 
                        and costly retrofits to maintain insurance coverage or meet updated building codes.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Climate Change Considerations</h3>
                      <p className="mb-4">
                        Climate change is altering traditional disaster risk patterns. Areas previously considered low-risk 
                        are experiencing increased disasters, while traditional high-risk areas face more intense events. 
                        Rising sea levels increase coastal flood risk, while changing precipitation patterns affect inland 
                        flooding. Wildfire seasons are longer and more severe. When assessing long-term property risk, 
                        consider not just current conditions but projected future trends.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Making Informed Decisions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Before Purchasing</h4>
                      <p className="mb-4">
                        When buying property, research disaster history, review hazard maps, assess required insurance costs, 
                        evaluate mitigation features, and consider long-term risk trends. The lowest purchase price may not 
                        represent the best value if ongoing insurance and mitigation costs are high.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">For Current Owners</h4>
                      <p className="mb-4">
                        Existing homeowners should regularly reassess risk, maintain adequate insurance, implement 
                        cost-effective mitigation measures, and stay informed about changing regulations and risk factors. 
                        Proactive mitigation is almost always less expensive than post-disaster repairs.
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Considerations</h3>
                            <ul className="text-yellow-700 space-y-1">
                              <li>• This calculator provides estimates only and should not replace professional risk assessments</li>
                              <li>• Consult with insurance professionals, engineers, and local authorities for comprehensive evaluation</li>
                              <li>• Risk levels can change due to development, climate change, and updated hazard mapping</li>
                              <li>• Some mitigation improvements may require permits and professional installation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button onClick={calculateDisasterRisk} className="w-full bg-blue-600 hover:bg-blue-700">
                    Calculate Risk Score
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
                      Overall Risk Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-4" style={{ color: calculation.overallRiskScore >= 60 ? '#ef4444' : calculation.overallRiskScore >= 40 ? '#f97316' : '#10b981' }}>
                        {calculation.overallRiskScore.toFixed(0)}
                      </div>
                      <Badge className={`${calculation.riskColor} text-white px-4 py-2 text-lg`}>
                        {calculation.riskLevel} Risk
                      </Badge>
                      <p className="text-sm text-gray-600 mt-4">
                        Score ranges from 0 (lowest risk) to 100 (highest risk)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Individual Risk Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">Flood</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.flood.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.flood.level}</div>
                      </div>
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-amber-600" />
                        <span className="font-medium">Earthquake</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.earthquake.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.earthquake.level}</div>
                      </div>
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wind className="h-4 w-4 text-cyan-500" />
                        <span className="font-medium">Hurricane</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.hurricane.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.hurricane.level}</div>
                      </div>
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wind className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Tornado</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.tornado.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.tornado.level}</div>
                      </div>
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Flame className="h-4 w-4 text-red-500" />
                        <span className="font-medium">Wildfire</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.wildfire.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.wildfire.level}</div>
                      </div>
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CloudRain className="h-4 w-4 text-blue-300" />
                        <span className="font-medium">Winter Storms</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{calculation.individualRisks.winter.score.toFixed(0)}</div>
                        <div className="text-xs text-gray-600">{calculation.individualRisks.winter.level}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Insurance Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Est. Annual Premium Increase</div>
                      <div className="text-2xl font-bold text-orange-600">
                        {formatCurrency(calculation.insuranceImpact.estimatedPremiumIncrease)}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      {calculation.insuranceImpact.requiresFloodInsurance && (
                        <div className="flex items-center gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Flood insurance recommended</span>
                        </div>
                      )}
                      {calculation.insuranceImpact.requiresEarthquakeInsurance && (
                        <div className="flex items-center gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Earthquake insurance recommended</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Property Value Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-gray-600">Estimated Impact</div>
                        <div className="text-xl font-bold text-red-600">
                          -{formatCurrency(calculation.propertyValueImpact.estimatedImpact)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Percentage Impact</div>
                        <div className="text-lg font-semibold">
                          -{calculation.propertyValueImpact.percentageImpact.toFixed(2)}%
                        </div>
                      </div>
                    </div>
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
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
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
                    Enter your property information and click "Calculate Risk Score" to see your natural disaster risk assessment.
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
