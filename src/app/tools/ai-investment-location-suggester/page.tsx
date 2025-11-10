'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, TrendingUp, Sparkles, BookOpen, DollarSign, Home, CheckCircle, AlertTriangle, Target } from 'lucide-react';

interface LocationSuggestion {
  city: string;
  state: string;
  region: string;
  investmentScore: number;
  scoreBreakdown: {
    affordability: number;
    growthPotential: number;
    marketStability: number;
    rentYield: number;
    strategyFit: number;
  };
  keyReasons: string[];
  marketMetrics: {
    avgPrice: number;
    rentYield: number;
    appreciationRate: number;
    vacancyRate: number;
    medianIncome: number;
  };
  strengths: string[];
  challenges: string[];
  bestPropertyTypes: string[];
  actionItems: string[];
}

export default function AIInvestmentLocationSuggester() {
  const [minBudget, setMinBudget] = useState<number>(150000);
  const [maxBudget, setMaxBudget] = useState<number>(300000);
  const [investmentStrategy, setInvestmentStrategy] = useState<string>('cashflow');
  const [propertyTypes, setPropertyTypes] = useState<string[]>(['single-family']);
  const [climate, setClimate] = useState<string>('any');
  const [populationSize, setPopulationSize] = useState<string>('medium');
  const [jobMarket, setJobMarket] = useState<string>('strong');
  const [taxFriendliness, setTaxFriendliness] = useState<string>('moderate');
  const [riskTolerance, setRiskTolerance] = useState<string>('moderate');
  const [investmentTimeline, setInvestmentTimeline] = useState<string>('5-10-years');
  
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);

  const locationDatabase: { [key: string]: any } = {
    'Indianapolis, IN': {
      region: 'Midwest',
      climate: 'moderate',
      population: 'large',
      avgPrice: 225000,
      rentYield: 8.5,
      appreciation: 5.2,
      vacancy: 6.5,
      medianIncome: 58000,
      jobMarket: 'strong',
      taxes: 'low',
      strengths: [
        'Strong rental demand from growing tech and healthcare sectors',
        'Low property taxes and landlord-friendly regulations',
        'Stable market with consistent appreciation',
        'Affordable entry point for new investors'
      ],
      challenges: [
        'Some neighborhoods require careful selection',
        'Harsh winter weather can increase maintenance costs',
        'Limited luxury market compared to coastal cities'
      ],
      bestFor: ['cashflow', 'appreciation'],
      propertyTypes: ['single-family', 'duplex', 'multi-family']
    },
    'Tampa, FL': {
      region: 'Southeast',
      climate: 'warm',
      population: 'large',
      avgPrice: 385000,
      rentYield: 6.8,
      appreciation: 12.5,
      vacancy: 7.2,
      medianIncome: 62000,
      jobMarket: 'strong',
      taxes: 'none',
      strengths: [
        'No state income tax maximizes cash flow',
        'Strong population growth and job market',
        'Year-round tourism supports short-term rental market',
        'High appreciation potential in growing metro'
      ],
      challenges: [
        'Higher property insurance due to hurricane risk',
        'Competitive market with rising prices',
        'HOA fees can be substantial in newer communities'
      ],
      bestFor: ['appreciation', 'cashflow'],
      propertyTypes: ['single-family', 'condo', 'vacation-rental']
    },
    'Memphis, TN': {
      region: 'Southeast',
      climate: 'moderate',
      population: 'medium',
      avgPrice: 165000,
      rentYield: 10.2,
      appreciation: 4.8,
      vacancy: 8.5,
      medianIncome: 43000,
      jobMarket: 'moderate',
      taxes: 'none',
      strengths: [
        'Excellent cash flow with high rent-to-price ratios',
        'No state income tax',
        'Major distribution hub with stable employment',
        'Low entry costs perfect for first-time investors'
      ],
      challenges: [
        'Higher crime rates in certain areas require due diligence',
        'Slower appreciation compared to growth markets',
        'Property management essential for out-of-state investors'
      ],
      bestFor: ['cashflow'],
      propertyTypes: ['single-family', 'duplex', 'multi-family']
    },
    'Boise, ID': {
      region: 'Mountain West',
      climate: 'moderate',
      population: 'medium',
      avgPrice: 475000,
      rentYield: 5.5,
      appreciation: 15.8,
      vacancy: 4.2,
      medianIncome: 68000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Exceptional appreciation driven by migration from coastal cities',
        'Strong job market in tech and healthcare',
        'High quality of life attracts long-term tenants',
        'Low vacancy rates indicate strong demand'
      ],
      challenges: [
        'Higher purchase prices reduce cash flow potential',
        'Rapid appreciation may limit future growth',
        'Limited inventory in desirable neighborhoods'
      ],
      bestFor: ['appreciation'],
      propertyTypes: ['single-family', 'townhouse']
    },
    'Cleveland, OH': {
      region: 'Midwest',
      climate: 'moderate',
      population: 'large',
      avgPrice: 145000,
      rentYield: 11.5,
      appreciation: 3.2,
      vacancy: 9.8,
      medianIncome: 39000,
      jobMarket: 'moderate',
      taxes: 'moderate',
      strengths: [
        'Outstanding cash-on-cash returns for buy-and-hold investors',
        'Low acquisition costs enable portfolio scaling',
        'Established rental market with experienced property managers',
        'Major healthcare and manufacturing employment centers'
      ],
      challenges: [
        'Slow appreciation limits equity growth',
        'Higher vacancy rates require strong tenant screening',
        'Older housing stock may require significant repairs',
        'Population decline in some submarkets'
      ],
      bestFor: ['cashflow'],
      propertyTypes: ['single-family', 'duplex', 'multi-family']
    },
    'Charlotte, NC': {
      region: 'Southeast',
      climate: 'moderate',
      population: 'large',
      avgPrice: 345000,
      rentYield: 7.2,
      appreciation: 9.5,
      vacancy: 5.8,
      medianIncome: 65000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Balanced market with both cash flow and appreciation',
        'Major banking center with diverse economy',
        'Strong population growth from corporate relocations',
        'Landlord-friendly state laws and reasonable regulations'
      ],
      challenges: [
        'Increasing competition from institutional investors',
        'Rapid development changing neighborhood dynamics',
        'Property taxes rising with home values'
      ],
      bestFor: ['cashflow', 'appreciation'],
      propertyTypes: ['single-family', 'townhouse', 'duplex']
    },
    'Phoenix, AZ': {
      region: 'Southwest',
      climate: 'hot',
      population: 'large',
      avgPrice: 425000,
      rentYield: 6.5,
      appreciation: 11.2,
      vacancy: 6.5,
      medianIncome: 67000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Strong appreciation driven by population influx',
        'Diverse economy with tech, healthcare, and manufacturing',
        'Year-round climate attracts retirees and remote workers',
        'Multiple submarkets offer varied investment opportunities'
      ],
      challenges: [
        'Extreme heat increases cooling costs and maintenance',
        'Water scarcity concerns for long-term sustainability',
        'Highly competitive market with institutional buyers'
      ],
      bestFor: ['appreciation', 'flip'],
      propertyTypes: ['single-family', 'townhouse']
    },
    'Kansas City, MO': {
      region: 'Midwest',
      climate: 'moderate',
      population: 'medium',
      avgPrice: 235000,
      rentYield: 8.8,
      appreciation: 6.2,
      vacancy: 7.5,
      medianIncome: 61000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Excellent balance of cash flow and appreciation potential',
        'Strong job market with Google Fiber tech hub',
        'Affordable prices with room for value-add strategies',
        'Central location reduces logistics costs for management'
      ],
      challenges: [
        'State line creates different tax implications',
        'Tornado risk requires proper insurance coverage',
        'Some older neighborhoods need revitalization'
      ],
      bestFor: ['cashflow', 'appreciation', 'flip'],
      propertyTypes: ['single-family', 'duplex', 'multi-family']
    },
    'Austin, TX': {
      region: 'South',
      climate: 'hot',
      population: 'large',
      avgPrice: 565000,
      rentYield: 5.2,
      appreciation: 13.8,
      vacancy: 5.5,
      medianIncome: 78000,
      jobMarket: 'strong',
      taxes: 'none',
      strengths: [
        'Tech hub with Tesla, Apple, and numerous startups',
        'No state income tax enhances investor returns',
        'Exceptional appreciation potential in growth corridors',
        'Strong rental demand from high-income professionals'
      ],
      challenges: [
        'High property prices limit cash flow',
        'Property taxes among highest in Texas',
        'Intense competition from well-capitalized investors',
        'Rapid price increases may be unsustainable'
      ],
      bestFor: ['appreciation'],
      propertyTypes: ['single-family', 'condo', 'townhouse']
    },
    'Columbus, OH': {
      region: 'Midwest',
      climate: 'moderate',
      population: 'large',
      avgPrice: 255000,
      rentYield: 8.2,
      appreciation: 6.8,
      vacancy: 6.2,
      medianIncome: 58000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Strong and diverse economy anchored by Ohio State University',
        'Solid cash flow with moderate appreciation',
        'Stable population growth and low unemployment',
        'Multiple neighborhoods at various price points'
      ],
      challenges: [
        'Winter weather affects seasonal demand',
        'State income tax reduces overall returns',
        'Competition in hot submarkets near university'
      ],
      bestFor: ['cashflow', 'appreciation'],
      propertyTypes: ['single-family', 'duplex', 'multi-family']
    },
    'Atlanta, GA': {
      region: 'Southeast',
      climate: 'moderate',
      population: 'large',
      avgPrice: 365000,
      rentYield: 7.5,
      appreciation: 8.5,
      vacancy: 7.8,
      medianIncome: 69000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Major corporate headquarters and film industry hub',
        'Strong rental demand across all property types',
        'Diverse neighborhoods from urban to suburban',
        'International airport drives business and tourism'
      ],
      challenges: [
        'Traffic congestion affects desirability of some areas',
        'Property taxes vary widely by county',
        'Higher crime rates in certain submarkets'
      ],
      bestFor: ['cashflow', 'appreciation', 'flip'],
      propertyTypes: ['single-family', 'townhouse', 'condo', 'multi-family']
    },
    'Raleigh-Durham, NC': {
      region: 'Southeast',
      climate: 'moderate',
      population: 'large',
      avgPrice: 395000,
      rentYield: 6.8,
      appreciation: 10.2,
      vacancy: 5.2,
      medianIncome: 72000,
      jobMarket: 'strong',
      taxes: 'moderate',
      strengths: [
        'Research Triangle drives high-income job growth',
        'Top-tier universities ensure stable rental demand',
        'Strong appreciation with solid cash flow potential',
        'Low crime rates and excellent schools attract families'
      ],
      challenges: [
        'Competitive market with sophisticated investors',
        'Higher price points require larger down payments',
        'HOA fees common in newer developments'
      ],
      bestFor: ['appreciation', 'cashflow'],
      propertyTypes: ['single-family', 'townhouse', 'duplex']
    }
  };

  const generateSuggestions = () => {
    const locations: LocationSuggestion[] = [];
    
    const filteredLocations = Object.entries(locationDatabase).filter(([city, data]) => {
      if (data.avgPrice < minBudget * 0.8 || data.avgPrice > maxBudget * 1.5) return false;
      if (climate !== 'any' && data.climate !== climate) return false;
      if (populationSize !== 'any' && data.population !== populationSize) return false;
      if (jobMarket === 'strong' && data.jobMarket !== 'strong') return false;
      if (taxFriendliness === 'low' && data.taxes === 'high') return false;
      if (!data.bestFor.includes(investmentStrategy)) return false;
      
      return true;
    });

    const scoredLocations = filteredLocations.map(([cityState, data]) => {
      const [city, state] = cityState.split(', ');
      
      const affordabilityScore = Math.min(100, Math.max(0, 
        100 - ((data.avgPrice - minBudget) / (maxBudget - minBudget)) * 40
      ));
      
      let growthScore = 0;
      if (investmentStrategy === 'appreciation') {
        growthScore = Math.min(100, (data.appreciation / 15) * 100);
      } else if (investmentStrategy === 'cashflow') {
        growthScore = Math.min(100, (data.rentYield / 12) * 100);
      } else {
        growthScore = Math.min(100, (data.appreciation / 10) * 70 + (data.rentYield / 10) * 30);
      }
      
      const stabilityScore = Math.min(100, 100 - (data.vacancy * 5));
      
      const yieldScore = Math.min(100, (data.rentYield / 12) * 100);
      
      let strategyScore = 0;
      if (investmentStrategy === 'cashflow') {
        strategyScore = data.rentYield >= 8 ? 95 : data.rentYield >= 6 ? 75 : 50;
      } else if (investmentStrategy === 'appreciation') {
        strategyScore = data.appreciation >= 10 ? 95 : data.appreciation >= 7 ? 75 : 50;
      } else if (investmentStrategy === 'flip') {
        strategyScore = data.appreciation >= 8 && data.avgPrice <= maxBudget ? 90 : 60;
      } else {
        strategyScore = 70;
      }
      
      const totalScore = Math.round(
        affordabilityScore * 0.25 +
        growthScore * 0.25 +
        stabilityScore * 0.15 +
        yieldScore * 0.15 +
        strategyScore * 0.20
      );

      const keyReasons: string[] = [];
      if (data.rentYield >= 8) keyReasons.push('Excellent cash flow potential');
      if (data.appreciation >= 10) keyReasons.push('Strong appreciation trend');
      if (data.vacancy < 6) keyReasons.push('Low vacancy rates indicate high demand');
      if (data.taxes === 'none') keyReasons.push('No state income tax');
      if (data.jobMarket === 'strong') keyReasons.push('Robust job market and economy');
      if (data.avgPrice < maxBudget * 0.9) keyReasons.push('Within budget with room for multiple properties');

      const actionItems = [
        `Research neighborhoods within ${city} focusing on ${data.propertyTypes.slice(0, 2).join(' and ')} properties`,
        'Connect with local property management companies for market insights',
        `Analyze recent sales comps in the $${(data.avgPrice * 0.9).toLocaleString()} - $${(data.avgPrice * 1.1).toLocaleString()} range`,
        'Review local landlord-tenant laws and rental regulations',
        'Schedule visits to top 3-5 target neighborhoods'
      ];

      if (investmentStrategy === 'cashflow') {
        actionItems.push('Calculate cash-on-cash returns with 20-25% down payment scenarios');
      } else if (investmentStrategy === 'appreciation') {
        actionItems.push('Study 5-10 year price trends and growth corridors');
      } else if (investmentStrategy === 'flip') {
        actionItems.push('Identify distressed properties and estimate renovation costs');
      }

      const location: LocationSuggestion = {
        city,
        state,
        region: data.region,
        investmentScore: totalScore,
        scoreBreakdown: {
          affordability: Math.round(affordabilityScore),
          growthPotential: Math.round(growthScore),
          marketStability: Math.round(stabilityScore),
          rentYield: Math.round(yieldScore),
          strategyFit: Math.round(strategyScore)
        },
        keyReasons,
        marketMetrics: {
          avgPrice: data.avgPrice,
          rentYield: data.rentYield,
          appreciationRate: data.appreciation,
          vacancyRate: data.vacancy,
          medianIncome: data.medianIncome
        },
        strengths: data.strengths,
        challenges: data.challenges,
        bestPropertyTypes: data.propertyTypes,
        actionItems
      };

      return { location, score: totalScore };
    });

    scoredLocations.sort((a, b) => b.score - a.score);
    
    const topLocations = scoredLocations.slice(0, 8).map(item => item.location);
    
    setSuggestions(topLocations);
    setSelectedLocations([]);
  };

  const toggleLocationSelection = (index: number) => {
    if (selectedLocations.includes(index)) {
      setSelectedLocations(selectedLocations.filter(i => i !== index));
    } else {
      if (selectedLocations.length < 4) {
        setSelectedLocations([...selectedLocations, index]);
      }
    }
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-cyan-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (score: number): string => {
    if (score >= 80) return 'bg-emerald-100 text-emerald-800';
    if (score >= 60) return 'bg-cyan-100 text-cyan-800';
    if (score >= 40) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const togglePropertyType = (type: string) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter(t => t !== type));
    } else {
      setPropertyTypes([...propertyTypes, type]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-teal-600 p-3 rounded-full">
              <MapPin className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Investment Location Suggester
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best cities for real estate investment based on your budget, strategy, and 
            preferences. Get AI-powered market analysis and personalized location recommendations.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Investment Location Finder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="criteria" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="criteria">Your Criteria</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="compare">Compare Locations</TabsTrigger>
                <TabsTrigger value="guide" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Guide
                </TabsTrigger>
              </TabsList>

              <TabsContent value="criteria" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Budget Range</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minBudget">Minimum Budget</Label>
                      <Input
                        id="minBudget"
                        type="number"
                        value={minBudget}
                        onChange={(e) => setMinBudget(Number(e.target.value))}
                        placeholder="150000"
                      />
                      <p className="text-sm text-gray-500 mt-1">{formatCurrency(minBudget)}</p>
                    </div>
                    <div>
                      <Label htmlFor="maxBudget">Maximum Budget</Label>
                      <Input
                        id="maxBudget"
                        type="number"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(Number(e.target.value))}
                        placeholder="300000"
                      />
                      <p className="text-sm text-gray-500 mt-1">{formatCurrency(maxBudget)}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Investment Strategy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="strategy">Primary Strategy</Label>
                      <select
                        id="strategy"
                        value={investmentStrategy}
                        onChange={(e) => setInvestmentStrategy(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="cashflow">Cash Flow (Rental Income)</option>
                        <option value="appreciation">Appreciation (Long-term Growth)</option>
                        <option value="flip">Fix & Flip</option>
                        <option value="balanced">Balanced (Cash Flow + Appreciation)</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Investment Timeline</Label>
                      <select
                        id="timeline"
                        value={investmentTimeline}
                        onChange={(e) => setInvestmentTimeline(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="1-3-years">1-3 Years (Short-term)</option>
                        <option value="3-5-years">3-5 Years (Medium-term)</option>
                        <option value="5-10-years">5-10 Years (Long-term)</option>
                        <option value="10plus-years">10+ Years (Very Long-term)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Property Types (Select all that apply)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['single-family', 'duplex', 'multi-family', 'condo', 'townhouse', 'vacation-rental'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={type}
                          checked={propertyTypes.includes(type)}
                          onChange={() => togglePropertyType(type)}
                          className="rounded"
                        />
                        <Label htmlFor={type} className="capitalize">
                          {type.replace('-', ' ')}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                  <select
                    id="riskTolerance"
                    value={riskTolerance}
                    onChange={(e) => setRiskTolerance(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="conservative">Conservative (Stable, proven markets)</option>
                    <option value="moderate">Moderate (Balanced risk/reward)</option>
                    <option value="aggressive">Aggressive (High growth potential)</option>
                  </select>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="climate">Climate Preference</Label>
                    <select
                      id="climate"
                      value={climate}
                      onChange={(e) => setClimate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="any">Any Climate</option>
                      <option value="warm">Warm/Hot Year-Round</option>
                      <option value="moderate">Moderate (Four Seasons)</option>
                      <option value="cool">Cool/Temperate</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="population">Population Size</Label>
                    <select
                      id="population"
                      value={populationSize}
                      onChange={(e) => setPopulationSize(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="any">Any Size</option>
                      <option value="large">Large Metro (1M+)</option>
                      <option value="medium">Medium City (250K-1M)</option>
                      <option value="small">Small City (Under 250K)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="jobMarket">Job Market Strength</Label>
                    <select
                      id="jobMarket"
                      value={jobMarket}
                      onChange={(e) => setJobMarket(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="any">Any Job Market</option>
                      <option value="strong">Strong (Low unemployment, growing)</option>
                      <option value="moderate">Moderate (Stable employment)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="taxes">Tax Friendliness</Label>
                    <select
                      id="taxes"
                      value={taxFriendliness}
                      onChange={(e) => setTaxFriendliness(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="any">Any Tax Structure</option>
                      <option value="low">Low (No/low state income tax)</option>
                      <option value="moderate">Moderate Taxes</option>
                    </select>
                  </div>
                </div>

                <Separator className="my-6" />

                <Button 
                  onClick={generateSuggestions} 
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  size="lg"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Generate Location Recommendations
                </Button>
              </TabsContent>

              <TabsContent value="results" className="space-y-6">
                {suggestions.length === 0 ? (
                  <div className="text-center py-12">
                    <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Set your criteria and click "Generate Location Recommendations" to see results
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <h3 className="font-semibold text-teal-900 mb-2">
                        Found {suggestions.length} Great Investment Locations
                      </h3>
                      <p className="text-sm text-teal-700">
                        Based on your {investmentStrategy} strategy with a budget of {formatCurrency(minBudget)} - {formatCurrency(maxBudget)}
                      </p>
                    </div>

                    {suggestions.map((location, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-2xl flex items-center gap-2">
                                <MapPin className="h-6 w-6 text-teal-600" />
                                {location.city}, {location.state}
                              </CardTitle>
                              <p className="text-sm text-gray-600 mt-1">{location.region}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={`${getScoreBadgeColor(location.investmentScore)} text-lg px-3 py-1`}>
                                {location.investmentScore}/100
                              </Badge>
                              <p className="text-xs text-gray-500 mt-1">Investment Score</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                Score Breakdown
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                {Object.entries(location.scoreBreakdown).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className={`text-2xl font-bold ${getScoreColor(value)}`}>
                                      {value}
                                    </div>
                                    <div className="text-xs text-gray-600 capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold mb-3">Key Reasons to Invest</h4>
                              <ul className="space-y-2">
                                {location.keyReasons.map((reason, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{reason}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <TrendingUp className="h-4 w-4" />
                                Market Metrics
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                  <p className="text-sm text-gray-600">Avg Property Price</p>
                                  <p className="text-lg font-bold text-gray-900">
                                    {formatCurrency(location.marketMetrics.avgPrice)}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Rent Yield</p>
                                  <p className="text-lg font-bold text-teal-600">
                                    {location.marketMetrics.rentYield.toFixed(1)}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Annual Appreciation</p>
                                  <p className="text-lg font-bold text-emerald-600">
                                    {location.marketMetrics.appreciationRate.toFixed(1)}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Vacancy Rate</p>
                                  <p className="text-lg font-bold text-gray-900">
                                    {location.marketMetrics.vacancyRate.toFixed(1)}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Median Income</p>
                                  <p className="text-lg font-bold text-gray-900">
                                    {formatCurrency(location.marketMetrics.medianIncome)}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 text-emerald-700">Strengths</h4>
                                <ul className="space-y-2">
                                  {location.strengths.map((strength, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                      <span>{strength}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-3 text-amber-700">Challenges</h4>
                                <ul className="space-y-2">
                                  {location.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                      <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                      <span>{challenge}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Best Property Types for This Market
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {location.bestPropertyTypes.map((type, i) => (
                                  <Badge key={i} variant="outline" className="capitalize">
                                    {type.replace('-', ' ')}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold mb-3">Action Items</h4>
                              <ol className="space-y-2">
                                {location.actionItems.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm">
                                    <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold">
                                      {i + 1}
                                    </span>
                                    <span className="text-gray-700 mt-0.5">{item}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div className="pt-4">
                              <Button
                                onClick={() => toggleLocationSelection(index)}
                                variant={selectedLocations.includes(index) ? 'default' : 'outline'}
                                className="w-full"
                              >
                                {selectedLocations.includes(index) ? (
                                  <>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Selected for Comparison
                                  </>
                                ) : (
                                  'Select for Comparison'
                                )}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="compare" className="space-y-6">
                {selectedLocations.length === 0 ? (
                  <div className="text-center py-12">
                    <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Select 2-4 locations from the Results tab to compare them side-by-side
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Comparing {selectedLocations.length} Locations</h3>
                      <p className="text-sm text-gray-600">
                        Side-by-side comparison of your selected investment markets
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-teal-50">
                            <th className="border border-gray-300 p-3 text-left font-semibold">Metric</th>
                            {selectedLocations.map((index) => {
                              const loc = suggestions[index];
                              return (
                                <th key={index} className="border border-gray-300 p-3 text-left">
                                  <div className="font-semibold">{loc.city}, {loc.state}</div>
                                  <div className="text-xs font-normal text-gray-600">{loc.region}</div>
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Investment Score</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                <Badge className={getScoreBadgeColor(suggestions[index].investmentScore)}>
                                  {suggestions[index].investmentScore}/100
                                </Badge>
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Avg Property Price</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                {formatCurrency(suggestions[index].marketMetrics.avgPrice)}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Rent Yield</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3 text-teal-600 font-semibold">
                                {suggestions[index].marketMetrics.rentYield.toFixed(1)}%
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Annual Appreciation</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3 text-emerald-600 font-semibold">
                                {suggestions[index].marketMetrics.appreciationRate.toFixed(1)}%
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Vacancy Rate</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                {suggestions[index].marketMetrics.vacancyRate.toFixed(1)}%
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Median Income</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                {formatCurrency(suggestions[index].marketMetrics.medianIncome)}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Affordability Score</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                <span className={getScoreColor(suggestions[index].scoreBreakdown.affordability)}>
                                  {suggestions[index].scoreBreakdown.affordability}
                                </span>
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Growth Potential Score</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                <span className={getScoreColor(suggestions[index].scoreBreakdown.growthPotential)}>
                                  {suggestions[index].scoreBreakdown.growthPotential}
                                </span>
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Market Stability Score</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                <span className={getScoreColor(suggestions[index].scoreBreakdown.marketStability)}>
                                  {suggestions[index].scoreBreakdown.marketStability}
                                </span>
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-medium bg-gray-50">Best Property Types</td>
                            {selectedLocations.map((index) => (
                              <td key={index} className="border border-gray-300 p-3">
                                <div className="flex flex-wrap gap-1">
                                  {suggestions[index].bestPropertyTypes.slice(0, 3).map((type, i) => (
                                    <Badge key={i} variant="outline" className="text-xs capitalize">
                                      {type.replace('-', ' ')}
                                    </Badge>
                                  ))}
                                </div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-2">Comparison Insights</h4>
                      <p className="text-sm text-cyan-700">
                        Compare these markets based on your {investmentStrategy} strategy. 
                        {investmentStrategy === 'cashflow' && ' Focus on rent yield for best cash flow.'}
                        {investmentStrategy === 'appreciation' && ' Prioritize appreciation rate for growth.'}
                        {investmentStrategy === 'flip' && ' Look for high appreciation with affordable prices.'}
                        {investmentStrategy === 'balanced' && ' Balance both rent yield and appreciation.'}
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="guide" className="space-y-4">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Choosing the Best Investment Location: A Comprehensive Guide
                  </h2>
                  
                  <p className="text-gray-700 mb-4">
                    Selecting the right location is arguably the most critical decision in real estate investing. 
                    The location determines not just current value, but future appreciation potential, rental demand, 
                    vacancy rates, and overall return on investment. This comprehensive guide will help you evaluate 
                    investment markets systematically and make data-driven location decisions.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Understanding Investment Strategies and Location Fit
                  </h3>
                  
                  <p className="text-gray-700 mb-3">
                    <strong>Cash Flow Strategy:</strong> If your primary goal is generating monthly income, prioritize 
                    markets with high rent-to-price ratios (typically 1% or higher). Look for cities with strong rental 
                    demand, landlord-friendly regulations, and affordable entry points. Midwest cities like Cleveland, 
                    Memphis, and Indianapolis often excel in cash flow metrics due to low purchase prices relative to rents.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Appreciation Strategy:</strong> For long-term wealth building through property value growth, 
                    target markets with strong population influx, job growth, limited housing supply, and infrastructure 
                    development. Tech hubs, state capitals, and cities experiencing corporate relocations typically offer 
                    superior appreciation. Accept lower initial cash flow in exchange for equity accumulation.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Fix and Flip Strategy:</strong> Successful flipping requires markets with active buyer demand, 
                    properties needing cosmetic updates, and sufficient price spreads between distressed and updated homes. 
                    Look for areas with strong buyer demographics, low days on market for renovated properties, and 
                    accessible contractor networks.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Key Market Metrics to Analyze
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Population Trends:</strong> Growing populations indicate economic vitality and housing demand. 
                    Review 5-10 year population trends, not just current size. Cities gaining residents from other states 
                    or countries signal economic opportunity and sustainable rental demand. Declining populations often 
                    correlate with economic challenges and reduced investment returns.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Employment and Job Market:</strong> Diverse, growing employment bases create stable rental 
                    markets. Analyze unemployment rates, job growth trends, and employment diversity. Cities dependent on 
                    a single industry face higher risk. Look for tech, healthcare, education, and government employment 
                    centers that provide recession-resistant demand.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Median Household Income:</strong> Higher incomes support higher rents and home values. Compare 
                    median incomes to housing costs - ideal markets have income growth outpacing housing cost increases. 
                    This ratio indicates affordability for residents and sustainability of property values.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Price-to-Rent Ratio:</strong> This crucial metric divides median home price by annual rent. 
                    Ratios under 15 favor buying; over 20 favor renting. For investors, lower ratios (10-15) indicate 
                    better cash flow potential. However, very low ratios may signal weak appreciation or economic concerns.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Vacancy Rates:</strong> Low vacancy rates (under 5%) indicate strong demand but may limit 
                    available inventory. High vacancy (over 10%) suggests oversupply or economic weakness. Ideal vacancy 
                    rates of 5-7% balance healthy turnover with strong demand.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Days on Market:</strong> Properties selling quickly (under 30 days) signal strong demand and 
                    potential appreciation. Extended days on market may indicate pricing issues, inventory surplus, or 
                    economic softness. Track trends over time, not just current snapshots.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Regulatory and Tax Considerations
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>State Income Taxes:</strong> States without income tax (Florida, Texas, Tennessee, Nevada, 
                    Washington) enhance cash flow for investors by eliminating one layer of taxation. However, these states 
                    often compensate through higher property or sales taxes. Calculate total tax burden, not just one component.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Property Taxes:</strong> Property tax rates dramatically impact cash flow. Texas cities like 
                    Austin have no income tax but some of the nation's highest property taxes (2-3% annually). Northeastern 
                    states often combine high income and property taxes. Calculate actual dollar amounts based on property 
                    values, not just percentage rates.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Landlord-Tenant Laws:</strong> Research eviction processes, security deposit limits, rent control 
                    regulations, and required disclosures. California's strict tenant protections increase risk for landlords. 
                    Southern states typically favor property owners with streamlined eviction processes and fewer regulatory 
                    requirements.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Neighborhood-Level Analysis
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Crime Statistics:</strong> Review property crime, violent crime, and overall safety trends. 
                    Declining crime rates indicate improving neighborhoods with appreciation potential. Stable low-crime 
                    areas attract quality tenants. Avoid areas with increasing crime regardless of other metrics.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>School Quality:</strong> Even for non-family tenants, school ratings impact property values. 
                    Homes in top-rated school districts command premium prices and rents, experience stronger appreciation, 
                    and attract stable tenant demographics. Research school ratings, test scores, and trends.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Planned Development:</strong> Research city planning documents for future development - new 
                    employers, infrastructure projects, transit expansions, and commercial development. These catalysts 
                    often precede neighborhood transformation. Conversely, identify areas facing negative changes like 
                    major employer departures.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Market Timing Considerations
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Market Cycles:</strong> Real estate markets cycle through expansion, peak, contraction, and 
                    recovery phases. Buy during recovery or early expansion when prices are stable but demand is increasing. 
                    Avoid buying at market peaks when prices have outpaced fundamentals. However, strong markets remain 
                    viable at various cycle stages if cash flow is positive.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Interest Rate Environment:</strong> Rising rates reduce purchasing power and property values 
                    but may reduce competition from buyers. Falling rates increase competition but improve cash flow through 
                    refinancing. Focus on properties generating positive cash flow at current rates rather than speculating 
                    on rate changes.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Risk Assessment and Diversification
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Natural Disaster Risk:</strong> Evaluate exposure to hurricanes, earthquakes, floods, tornadoes, 
                    and wildfires. These risks impact insurance costs, property values, and long-term viability. Florida's 
                    hurricane risk requires expensive insurance. California earthquake and fire risk affects both costs and 
                    values. Budget for appropriate insurance and understand long-term implications.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Economic Diversity:</strong> Markets dependent on single industries (oil in Houston, auto in 
                    Detroit) face cyclical risk. Diversified economies with multiple employment sectors provide stability 
                    through economic cycles. Government, education, healthcare, and professional services offer recession 
                    resistance.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Geographic Diversification:</strong> Don't concentrate all investments in one city or region. 
                    Different markets perform differently through economic cycles. Diversifying across markets with varying 
                    economies, regulations, and demographics reduces portfolio risk.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Practical Steps for Location Selection
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Step 1: Define Your Strategy and Criteria:</strong> Clarify whether you prioritize cash flow, 
                    appreciation, or balance. Determine your budget, risk tolerance, and timeline. These parameters guide 
                    all subsequent location research.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Step 2: Screen Markets Nationally:</strong> Use data to identify 10-15 markets meeting your 
                    basic criteria. Analyze population growth, employment trends, housing affordability, and initial metrics. 
                    Eliminate markets with clear deal-breakers like declining population or single-industry dependence.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Step 3: Deep Dive on Top 3-5 Markets:</strong> Research regulations, property taxes, insurance 
                    costs, property management availability, and market-specific factors. Connect with local real estate 
                    agents, property managers, and investors. Visit markets if possible to understand neighborhoods firsthand.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Step 4: Identify Specific Neighborhoods:</strong> Within chosen markets, identify 3-5 target 
                    neighborhoods aligned with your strategy. Cash flow investors target working-class areas with strong 
                    rental demand. Appreciation investors focus on improving neighborhoods with catalysts. Research crime, 
                    schools, amenities, and future development.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Step 5: Build Local Networks:</strong> Success in unfamiliar markets requires reliable partners. 
                    Connect with experienced real estate agents, property managers, contractors, and lenders. These 
                    relationships provide market insights, deal flow, and operational support essential for out-of-state 
                    investing.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Common Location Selection Mistakes
                  </h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Investing Where You Live by Default:</strong> Your local market may not align with your 
                    investment strategy. Expensive coastal markets often provide poor cash flow despite strong appreciation. 
                    Evaluate your market objectively against alternatives nationwide.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Chasing Past Performance:</strong> Markets that appreciated 20% last year often face price 
                    corrections. Historical performance doesn't guarantee future results. Focus on current fundamentals - 
                    job growth, population trends, supply/demand balance - rather than trailing returns.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Ignoring Exit Strategy:</strong> Consider eventual property sale when selecting locations. 
                    Markets with broad buyer appeal (good schools, low crime, job centers) provide more exit options. 
                    Niche markets may limit resale opportunities.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Underestimating Management Complexity:</strong> Out-of-state investing requires excellent 
                    property management. Markets with poor property management infrastructure or difficult tenant bases 
                    create operational nightmares. Verify strong property management options before committing to distant 
                    markets.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Conclusion: The Systematic Approach
                  </h3>

                  <p className="text-gray-700">
                    Successful location selection combines quantitative analysis with qualitative judgment. Start with 
                    data to identify promising markets, then validate with local knowledge and on-the-ground research. 
                    Align location choice with your specific investment strategy rather than following generic "hot 
                    markets" lists. Remember that the best location for one investor may be poor for another with different 
                    goals. Systematic analysis, clear criteria, and thorough due diligence create the foundation for 
                    profitable real estate investing regardless of your chosen market.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
