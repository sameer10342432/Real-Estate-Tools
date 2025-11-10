'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, BarChart3, Sparkles, BookOpen, AlertTriangle, CheckCircle, Activity, Target, ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface YearlyForecast {
  year: number;
  predictedPrice: number;
  appreciationRate: number;
  confidenceLevel: string;
}

interface MarketForecast {
  currentPrice: number;
  forecastPeriod: number;
  yearlyForecasts: YearlyForecast[];
  marketDirection: string;
  overallConfidence: string;
  avgAnnualAppreciation: number;
  totalAppreciation: number;
  finalPredictedPrice: number;
  keyDrivers: string[];
  marketSentiment: {
    overall: string;
    buyerDemand: string;
    sellerPressure: string;
    priceCompetition: string;
  };
  riskFactors: string[];
  opportunities: string[];
  investmentRecommendation: {
    rating: string;
    summary: string;
    timeline: string;
  };
  buyerTiming: {
    recommendation: string;
    rationale: string;
  };
  sellerTiming: {
    recommendation: string;
    rationale: string;
  };
}

export default function AIMarketTrendForecaster() {
  const [city, setCity] = useState<string>('Austin');
  const [state, setState] = useState<string>('Texas');
  const [zipCode, setZipCode] = useState<string>('78701');
  
  const [currentMedianPrice, setCurrentMedianPrice] = useState<number>(450000);
  const [avgPriceGrowth, setAvgPriceGrowth] = useState<number>(8.5);
  const [inventoryLevels, setInventoryLevels] = useState<string>('low');
  
  const [interestRates, setInterestRates] = useState<number>(6.5);
  const [jobGrowth, setJobGrowth] = useState<number>(3.2);
  const [populationGrowth, setPopulationGrowth] = useState<number>(2.8);
  const [newConstruction, setNewConstruction] = useState<string>('moderate');
  
  const [forecastPeriod, setForecastPeriod] = useState<number>(5);
  
  const [forecast, setForecast] = useState<MarketForecast | null>(null);

  const generateForecast = () => {
    const inventoryMultiplier = inventoryLevels === 'very-low' ? 1.3 : 
                                inventoryLevels === 'low' ? 1.15 : 
                                inventoryLevels === 'balanced' ? 1.0 : 
                                inventoryLevels === 'high' ? 0.85 : 0.7;
    
    const interestMultiplier = interestRates < 5 ? 1.2 : 
                               interestRates < 6.5 ? 1.05 : 
                               interestRates < 7.5 ? 0.95 : 0.8;
    
    const jobMultiplier = jobGrowth > 3 ? 1.15 : 
                          jobGrowth > 2 ? 1.05 : 
                          jobGrowth > 1 ? 1.0 : 0.9;
    
    const populationMultiplier = populationGrowth > 2.5 ? 1.15 : 
                                 populationGrowth > 1.5 ? 1.05 : 
                                 populationGrowth > 0.5 ? 1.0 : 0.9;
    
    const constructionMultiplier = newConstruction === 'very-high' ? 0.85 : 
                                   newConstruction === 'high' ? 0.92 : 
                                   newConstruction === 'moderate' ? 1.0 : 
                                   newConstruction === 'low' ? 1.08 : 1.15;
    
    const baseAnnualGrowth = avgPriceGrowth;
    
    const adjustedGrowth = baseAnnualGrowth * 
                           inventoryMultiplier * 
                           interestMultiplier * 
                           jobMultiplier * 
                           populationMultiplier * 
                           constructionMultiplier;
    
    const yearlyForecasts: YearlyForecast[] = [];
    let currentPrice = currentMedianPrice;
    
    for (let i = 1; i <= forecastPeriod; i++) {
      const yearFactor = 1 - (i * 0.02);
      const yearGrowth = adjustedGrowth * yearFactor * (0.85 + Math.random() * 0.3);
      
      const appreciationRate = Math.max(-5, Math.min(20, yearGrowth));
      const predictedPrice = currentPrice * (1 + appreciationRate / 100);
      
      let confidenceLevel = 'Medium';
      if (i <= 2) {
        confidenceLevel = 'High';
      } else if (i <= 5) {
        confidenceLevel = 'Medium';
      } else {
        confidenceLevel = 'Low';
      }
      
      yearlyForecasts.push({
        year: new Date().getFullYear() + i,
        predictedPrice: Math.round(predictedPrice),
        appreciationRate: parseFloat(appreciationRate.toFixed(2)),
        confidenceLevel
      });
      
      currentPrice = predictedPrice;
    }
    
    const totalAppreciationPercent = ((yearlyForecasts[forecastPeriod - 1].predictedPrice - currentMedianPrice) / currentMedianPrice) * 100;
    const avgAnnualAppreciation = totalAppreciationPercent / forecastPeriod;
    
    let marketDirection = 'Stable';
    let overallConfidence = 'Medium';
    
    if (avgAnnualAppreciation > 8) {
      marketDirection = 'Strong Growth';
      overallConfidence = forecastPeriod <= 3 ? 'High' : 'Medium';
    } else if (avgAnnualAppreciation > 4) {
      marketDirection = 'Moderate Growth';
      overallConfidence = forecastPeriod <= 5 ? 'High' : 'Medium';
    } else if (avgAnnualAppreciation > 0) {
      marketDirection = 'Stable';
      overallConfidence = 'Medium';
    } else if (avgAnnualAppreciation > -3) {
      marketDirection = 'Softening';
      overallConfidence = 'Low';
    } else {
      marketDirection = 'Declining';
      overallConfidence = 'Low';
    }
    
    const keyDrivers: string[] = [];
    
    if (inventoryLevels === 'very-low' || inventoryLevels === 'low') {
      keyDrivers.push('Limited housing inventory creating upward price pressure');
    } else if (inventoryLevels === 'very-high' || inventoryLevels === 'high') {
      keyDrivers.push('Abundant inventory giving buyers negotiating power');
    }
    
    if (interestRates < 5.5) {
      keyDrivers.push('Low interest rates boosting buyer affordability and demand');
    } else if (interestRates > 7) {
      keyDrivers.push('High interest rates reducing buyer purchasing power');
    } else {
      keyDrivers.push('Moderate interest rates maintaining steady market activity');
    }
    
    if (jobGrowth > 2.5) {
      keyDrivers.push('Strong job growth attracting new residents and increasing demand');
    } else if (jobGrowth < 1) {
      keyDrivers.push('Weak job market limiting population growth and housing demand');
    }
    
    if (populationGrowth > 2) {
      keyDrivers.push('Robust population growth driving long-term housing needs');
    } else if (populationGrowth < 0.5) {
      keyDrivers.push('Stagnant population growth limiting market expansion');
    }
    
    if (newConstruction === 'very-low' || newConstruction === 'low') {
      keyDrivers.push('Limited new construction failing to meet demand');
    } else if (newConstruction === 'very-high' || newConstruction === 'high') {
      keyDrivers.push('Aggressive new construction potentially saturating market');
    }
    
    if (avgPriceGrowth > 10) {
      keyDrivers.push('Strong historical appreciation momentum continuing');
    }
    
    const marketSentiment = {
      overall: marketDirection === 'Strong Growth' ? 'Very Bullish' : 
               marketDirection === 'Moderate Growth' ? 'Bullish' : 
               marketDirection === 'Stable' ? 'Neutral' : 
               marketDirection === 'Softening' ? 'Cautious' : 'Bearish',
      
      buyerDemand: inventoryLevels === 'very-low' || inventoryLevels === 'low' ? 'Very High' : 
                   inventoryLevels === 'balanced' ? 'Moderate' : 'Low',
      
      sellerPressure: inventoryLevels === 'very-high' || inventoryLevels === 'high' ? 'High' : 
                      inventoryLevels === 'balanced' ? 'Moderate' : 'Low',
      
      priceCompetition: avgAnnualAppreciation > 6 ? 'Intense - Multiple Offers Common' : 
                        avgAnnualAppreciation > 3 ? 'Moderate - Competitive Market' : 
                        avgAnnualAppreciation > 0 ? 'Low - Balanced Negotiations' : 
                        'Minimal - Buyer\'s Market'
    };
    
    const riskFactors: string[] = [];
    const opportunities: string[] = [];
    
    if (interestRates > 6.5) {
      riskFactors.push('Elevated interest rates may suppress buyer demand and slow appreciation');
    }
    
    if (inventoryLevels === 'very-high' || inventoryLevels === 'high') {
      riskFactors.push('Oversupply of inventory could lead to price corrections');
    }
    
    if (avgPriceGrowth > 12) {
      riskFactors.push('Rapid recent price growth may not be sustainable long-term');
    }
    
    if (newConstruction === 'very-high') {
      riskFactors.push('Excessive new construction may create market saturation');
    }
    
    if (jobGrowth < 1.5) {
      riskFactors.push('Weak job growth could limit income growth and housing demand');
    }
    
    if (riskFactors.length === 0) {
      riskFactors.push('Market fundamentals appear balanced with minimal major risks');
    }
    
    if (inventoryLevels === 'very-low' || inventoryLevels === 'low') {
      opportunities.push('Limited inventory creates opportunity for sellers to achieve premium prices');
    }
    
    if (marketDirection === 'Strong Growth' || marketDirection === 'Moderate Growth') {
      opportunities.push('Appreciation trend favors buy-and-hold investment strategy');
    }
    
    if (populationGrowth > 2) {
      opportunities.push('Population influx supports long-term rental demand and value appreciation');
    }
    
    if (interestRates > 7 && avgAnnualAppreciation > 4) {
      opportunities.push('High rates creating temporary buyer hesitation - opportunity for cash buyers');
    }
    
    if (jobGrowth > 2.5) {
      opportunities.push('Strong employment growth indicates rising incomes and housing affordability');
    }
    
    if (opportunities.length === 0) {
      opportunities.push('Consider waiting for clearer market signals before making major decisions');
    }
    
    let investmentRating = 'Hold';
    let investmentSummary = '';
    let investmentTimeline = '';
    
    if (avgAnnualAppreciation > 7) {
      investmentRating = 'Strong Buy';
      investmentSummary = `Excellent investment opportunity with projected ${avgAnnualAppreciation.toFixed(1)}% annual appreciation. Strong fundamentals support continued growth.`;
      investmentTimeline = 'Immediate - Market conditions favor early entry';
    } else if (avgAnnualAppreciation > 4) {
      investmentRating = 'Buy';
      investmentSummary = `Good investment potential with projected ${avgAnnualAppreciation.toFixed(1)}% annual appreciation. Market shows healthy growth trajectory.`;
      investmentTimeline = '3-6 months - Favorable window for investment';
    } else if (avgAnnualAppreciation > 1) {
      investmentRating = 'Hold';
      investmentSummary = `Modest growth projected at ${avgAnnualAppreciation.toFixed(1)}% annually. Market appears stable but not exceptionally strong.`;
      investmentTimeline = '6-12 months - Monitor for improved conditions';
    } else if (avgAnnualAppreciation > -2) {
      investmentRating = 'Cautious';
      investmentSummary = 'Market showing signs of weakness. Consider waiting for stabilization before investing.';
      investmentTimeline = '12+ months - Wait for market recovery signals';
    } else {
      investmentRating = 'Avoid';
      investmentSummary = 'Market fundamentals suggest declining prices. Investment not recommended at this time.';
      investmentTimeline = 'Indefinite - Seek alternative markets';
    }
    
    let buyerRecommendation = '';
    let buyerRationale = '';
    
    if (avgAnnualAppreciation > 6 && (inventoryLevels === 'very-low' || inventoryLevels === 'low')) {
      buyerRecommendation = 'Act Now - Excellent Time to Buy';
      buyerRationale = 'Strong appreciation forecast and limited inventory suggest prices will continue rising. Delaying may result in higher costs and reduced selection.';
    } else if (avgAnnualAppreciation > 3) {
      buyerRecommendation = 'Good Time to Buy';
      buyerRationale = 'Market fundamentals support steady appreciation. Current conditions offer reasonable entry point for long-term investment.';
    } else if (avgAnnualAppreciation > 0) {
      buyerRecommendation = 'Neutral - Proceed with Caution';
      buyerRationale = 'Market growth is modest. Buy if you find the right property at the right price, but don\'t feel pressured to rush.';
    } else if (avgAnnualAppreciation > -3) {
      buyerRecommendation = 'Wait - Market Softening';
      buyerRationale = 'Prices may decline further. Waiting 6-12 months could result in better opportunities and lower prices.';
    } else {
      buyerRecommendation = 'Avoid - Poor Timing';
      buyerRationale = 'Market in decline. Consider alternative markets or wait for clear recovery signals before purchasing.';
    }
    
    let sellerRecommendation = '';
    let sellerRationale = '';
    
    if (avgAnnualAppreciation > 7) {
      sellerRecommendation = 'Hold - Prices Rising';
      sellerRationale = 'Strong appreciation forecast suggests waiting will yield higher prices. Unless you have compelling reasons to sell, holding will likely maximize value.';
    } else if (avgAnnualAppreciation > 4 && (inventoryLevels === 'very-low' || inventoryLevels === 'low')) {
      sellerRecommendation = 'Good Time to Sell';
      sellerRationale = 'Limited inventory and steady appreciation create seller\'s market conditions. You should receive strong offers with favorable terms.';
    } else if (avgAnnualAppreciation > 1) {
      sellerRecommendation = 'Neutral - Fair Market';
      sellerRationale = 'Balanced market conditions. Sell if your timeline requires it, but you\'re not at significant advantage or disadvantage.';
    } else if (avgAnnualAppreciation > -2) {
      sellerRecommendation = 'Sell Soon - Market Weakening';
      sellerRationale = 'Market showing early signs of decline. If you need to sell in next 1-2 years, acting sooner rather than later is advisable.';
    } else {
      sellerRecommendation = 'Sell Now - Cut Losses';
      sellerRationale = 'Market in decline. If you must sell, do so promptly to minimize losses. Price aggressively to attract buyers in weak market.';
    }

    const forecastResult: MarketForecast = {
      currentPrice: currentMedianPrice,
      forecastPeriod,
      yearlyForecasts,
      marketDirection,
      overallConfidence,
      avgAnnualAppreciation: parseFloat(avgAnnualAppreciation.toFixed(2)),
      totalAppreciation: parseFloat(totalAppreciationPercent.toFixed(2)),
      finalPredictedPrice: yearlyForecasts[forecastPeriod - 1].predictedPrice,
      keyDrivers,
      marketSentiment,
      riskFactors,
      opportunities,
      investmentRecommendation: {
        rating: investmentRating,
        summary: investmentSummary,
        timeline: investmentTimeline
      },
      buyerTiming: {
        recommendation: buyerRecommendation,
        rationale: buyerRationale
      },
      sellerTiming: {
        recommendation: sellerRecommendation,
        rationale: sellerRationale
      }
    };

    setForecast(forecastResult);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (value: number): string => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  const getDirectionIcon = (direction: string) => {
    if (direction === 'Strong Growth' || direction === 'Moderate Growth') {
      return <ArrowUp className="h-5 w-5 text-emerald-600" />;
    } else if (direction === 'Stable') {
      return <Minus className="h-5 w-5 text-amber-600" />;
    } else {
      return <ArrowDown className="h-5 w-5 text-red-600" />;
    }
  };

  const getDirectionColor = (direction: string): string => {
    if (direction === 'Strong Growth') return 'bg-emerald-100 text-emerald-800';
    if (direction === 'Moderate Growth') return 'bg-green-100 text-green-800';
    if (direction === 'Stable') return 'bg-amber-100 text-amber-800';
    if (direction === 'Softening') return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getConfidenceColor = (confidence: string): string => {
    if (confidence === 'High') return 'bg-blue-100 text-blue-800';
    if (confidence === 'Medium') return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getRatingColor = (rating: string): string => {
    if (rating === 'Strong Buy') return 'bg-emerald-100 text-emerald-800';
    if (rating === 'Buy') return 'bg-green-100 text-green-800';
    if (rating === 'Hold') return 'bg-amber-100 text-amber-800';
    if (rating === 'Cautious') return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-amber-600 p-3 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Market Trend Forecaster
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Predict future real estate market trends and home prices with AI-powered analysis. Get comprehensive 
            forecasts based on market indicators, historical data, and economic trends.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Market Trend Forecaster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="location" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="location">Location & Data</TabsTrigger>
                <TabsTrigger value="indicators">Market Indicators</TabsTrigger>
                <TabsTrigger value="results">Forecast Results</TabsTrigger>
                <TabsTrigger value="guide" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Guide
                </TabsTrigger>
              </TabsList>

              <TabsContent value="location" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Location Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Austin"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Texas"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="78701"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Historical Market Data</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentMedianPrice">Current Median Home Price</Label>
                      <Input
                        id="currentMedianPrice"
                        type="number"
                        value={currentMedianPrice}
                        onChange={(e) => setCurrentMedianPrice(Number(e.target.value))}
                        placeholder="450000"
                      />
                      <p className="text-sm text-gray-500 mt-1">{formatCurrency(currentMedianPrice)}</p>
                    </div>
                    <div>
                      <Label htmlFor="avgPriceGrowth">Avg Annual Price Growth (Last 3 Years %)</Label>
                      <Input
                        id="avgPriceGrowth"
                        type="number"
                        step="0.1"
                        value={avgPriceGrowth}
                        onChange={(e) => setAvgPriceGrowth(Number(e.target.value))}
                        placeholder="8.5"
                      />
                      <p className="text-sm text-gray-500 mt-1">{avgPriceGrowth.toFixed(1)}% annually</p>
                    </div>
                    <div>
                      <Label htmlFor="inventoryLevels">Current Inventory Levels</Label>
                      <select
                        id="inventoryLevels"
                        value={inventoryLevels}
                        onChange={(e) => setInventoryLevels(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="very-low">Very Low (0-2 months supply)</option>
                        <option value="low">Low (2-4 months supply)</option>
                        <option value="balanced">Balanced (4-6 months supply)</option>
                        <option value="high">High (6-8 months supply)</option>
                        <option value="very-high">Very High (8+ months supply)</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="forecastPeriod">Forecast Period</Label>
                      <select
                        id="forecastPeriod"
                        value={forecastPeriod}
                        onChange={(e) => setForecastPeriod(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value={1}>1 Year</option>
                        <option value={3}>3 Years</option>
                        <option value={5}>5 Years</option>
                        <option value={10}>10 Years</option>
                      </select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="indicators" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Economic & Market Indicators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="interestRates">Current Mortgage Interest Rates (%)</Label>
                      <Input
                        id="interestRates"
                        type="number"
                        step="0.1"
                        value={interestRates}
                        onChange={(e) => setInterestRates(Number(e.target.value))}
                        placeholder="6.5"
                      />
                      <p className="text-sm text-gray-500 mt-1">{interestRates.toFixed(1)}% for 30-year fixed</p>
                    </div>
                    <div>
                      <Label htmlFor="jobGrowth">Local Job Growth Rate (Annual %)</Label>
                      <Input
                        id="jobGrowth"
                        type="number"
                        step="0.1"
                        value={jobGrowth}
                        onChange={(e) => setJobGrowth(Number(e.target.value))}
                        placeholder="3.2"
                      />
                      <p className="text-sm text-gray-500 mt-1">{jobGrowth.toFixed(1)}% employment growth</p>
                    </div>
                    <div>
                      <Label htmlFor="populationGrowth">Population Growth Rate (Annual %)</Label>
                      <Input
                        id="populationGrowth"
                        type="number"
                        step="0.1"
                        value={populationGrowth}
                        onChange={(e) => setPopulationGrowth(Number(e.target.value))}
                        placeholder="2.8"
                      />
                      <p className="text-sm text-gray-500 mt-1">{populationGrowth.toFixed(1)}% population increase</p>
                    </div>
                    <div>
                      <Label htmlFor="newConstruction">New Construction Activity</Label>
                      <select
                        id="newConstruction"
                        value={newConstruction}
                        onChange={(e) => setNewConstruction(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="very-low">Very Low (Limited Development)</option>
                        <option value="low">Low (Below Average Activity)</option>
                        <option value="moderate">Moderate (Steady Development)</option>
                        <option value="high">High (Active Construction)</option>
                        <option value="very-high">Very High (Aggressive Development)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Market Indicator Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <strong>Inventory:</strong> {inventoryLevels === 'very-low' ? 'Severe shortage' : 
                                                   inventoryLevels === 'low' ? 'Limited supply' : 
                                                   inventoryLevels === 'balanced' ? 'Healthy balance' : 
                                                   inventoryLevels === 'high' ? 'Abundant supply' : 
                                                   'Oversupply'} of available homes
                    </p>
                    <p className="text-gray-700">
                      <strong>Interest Rates:</strong> {interestRates < 5.5 ? 'Favorable' : 
                                                        interestRates < 7 ? 'Moderate' : 
                                                        'Elevated'} borrowing costs at {interestRates.toFixed(1)}%
                    </p>
                    <p className="text-gray-700">
                      <strong>Employment:</strong> {jobGrowth > 2.5 ? 'Strong' : 
                                                    jobGrowth > 1.5 ? 'Steady' : 
                                                    'Weak'} job market with {jobGrowth.toFixed(1)}% growth
                    </p>
                    <p className="text-gray-700">
                      <strong>Demographics:</strong> {populationGrowth > 2 ? 'Rapid' : 
                                                      populationGrowth > 1 ? 'Moderate' : 
                                                      'Slow'} population growth at {populationGrowth.toFixed(1)}%
                    </p>
                    <p className="text-gray-700">
                      <strong>Supply Pipeline:</strong> {newConstruction === 'very-high' || newConstruction === 'high' ? 'High' : 
                                                        newConstruction === 'moderate' ? 'Moderate' : 
                                                        'Limited'} new construction activity
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={generateForecast} 
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Market Forecast
                </Button>
              </TabsContent>

              <TabsContent value="results" className="space-y-6">
                {!forecast ? (
                  <div className="text-center py-12">
                    <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">
                      Configure your market data and indicators, then click "Generate Market Forecast" to see predictions.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">Market Direction</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            {getDirectionIcon(forecast.marketDirection)}
                            <Badge className={getDirectionColor(forecast.marketDirection)}>
                              {forecast.marketDirection}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">Overall Confidence</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Badge className={getConfidenceColor(forecast.overallConfidence)}>
                            {forecast.overallConfidence} Confidence
                          </Badge>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-medium text-gray-600">Avg Annual Appreciation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatPercent(forecast.avgAnnualAppreciation)}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          Price Forecast - {forecast.forecastPeriod} Year Projection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4">Year</th>
                                <th className="text-right py-3 px-4">Predicted Price</th>
                                <th className="text-right py-3 px-4">Annual Appreciation</th>
                                <th className="text-right py-3 px-4">Confidence</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b bg-gray-50">
                                <td className="py-3 px-4 font-semibold">Current</td>
                                <td className="text-right py-3 px-4 font-semibold">{formatCurrency(forecast.currentPrice)}</td>
                                <td className="text-right py-3 px-4">-</td>
                                <td className="text-right py-3 px-4">-</td>
                              </tr>
                              {forecast.yearlyForecasts.map((yearForecast) => (
                                <tr key={yearForecast.year} className="border-b hover:bg-gray-50">
                                  <td className="py-3 px-4">{yearForecast.year}</td>
                                  <td className="text-right py-3 px-4 font-semibold">
                                    {formatCurrency(yearForecast.predictedPrice)}
                                  </td>
                                  <td className="text-right py-3 px-4">
                                    <span className={yearForecast.appreciationRate >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                                      {formatPercent(yearForecast.appreciationRate)}
                                    </span>
                                  </td>
                                  <td className="text-right py-3 px-4">
                                    <Badge className={getConfidenceColor(yearForecast.confidenceLevel)} variant="outline">
                                      {yearForecast.confidenceLevel}
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                          <h4 className="font-semibold text-amber-900 mb-2">Forecast Summary</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-700">
                                <strong>Starting Price:</strong> {formatCurrency(forecast.currentPrice)}
                              </p>
                              <p className="text-gray-700">
                                <strong>Final Predicted Price:</strong> {formatCurrency(forecast.finalPredictedPrice)}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-700">
                                <strong>Total Appreciation:</strong> {formatPercent(forecast.totalAppreciation)}
                              </p>
                              <p className="text-gray-700">
                                <strong>Total Value Gain:</strong> {formatCurrency(forecast.finalPredictedPrice - forecast.currentPrice)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Key Trend Drivers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {forecast.keyDrivers.map((driver, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{driver}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Activity className="h-5 w-5" />
                            Market Sentiment Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-600">Overall Sentiment</p>
                            <p className="text-lg font-semibold text-gray-900">{forecast.marketSentiment.overall}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="text-sm font-medium text-gray-600">Buyer Demand</p>
                            <p className="text-base text-gray-900">{forecast.marketSentiment.buyerDemand}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Seller Pressure</p>
                            <p className="text-base text-gray-900">{forecast.marketSentiment.sellerPressure}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Price Competition</p>
                            <p className="text-base text-gray-900">{forecast.marketSentiment.priceCompetition}</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <AlertTriangle className="h-5 w-5" />
                            Risk Factors
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {forecast.riskFactors.map((risk, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Market Opportunities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {forecast.opportunities.map((opportunity, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{opportunity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-amber-200">
                      <CardHeader className="bg-amber-50">
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-amber-600" />
                          Investment Recommendation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge className={`${getRatingColor(forecast.investmentRecommendation.rating)} text-lg px-4 py-2`}>
                              {forecast.investmentRecommendation.rating}
                            </Badge>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {forecast.investmentRecommendation.summary}
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Recommended Timeline:</p>
                            <p className="text-sm text-gray-700">{forecast.investmentRecommendation.timeline}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Best Timing for Buyers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">
                              {forecast.buyerTiming.recommendation}
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {forecast.buyerTiming.rationale}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Best Timing for Sellers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">
                              {forecast.sellerTiming.recommendation}
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {forecast.sellerTiming.rationale}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="guide" className="space-y-4">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Real Estate Market Trend Forecasting</h2>
                  
                  <p className="text-gray-700 mb-4">
                    Real estate market trend forecasting combines historical data analysis, current market indicators, 
                    and economic trends to predict future home price movements. While no forecast is perfect, understanding 
                    the key drivers and methodologies can help investors, buyers, and sellers make more informed decisions.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Forecasting Components</h3>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">1. Historical Price Trends</h4>
                  <p className="text-gray-700 mb-3">
                    Past performance provides the foundation for future predictions. Markets with consistent appreciation 
                    over 3-5 years tend to continue those trends, though at potentially diminishing rates. Recent price 
                    growth above 10-15% annually often signals a hot market that may not be sustainable long-term. 
                    Conversely, markets with steady 3-5% annual growth often demonstrate stability and predictability.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">2. Inventory Levels</h4>
                  <p className="text-gray-700 mb-3">
                    Housing inventory, measured in months of supply, is one of the strongest predictors of near-term 
                    price direction:
                  </p>
                  <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1">
                    <li><strong>0-2 months:</strong> Severe seller's market - expect rapid price appreciation and bidding wars</li>
                    <li><strong>2-4 months:</strong> Seller's market - steady appreciation with competitive offers</li>
                    <li><strong>4-6 months:</strong> Balanced market - moderate appreciation with fair negotiations</li>
                    <li><strong>6-8 months:</strong> Buyer's market - slowing appreciation or flat prices</li>
                    <li><strong>8+ months:</strong> Strong buyer's market - potential price declines and concessions</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">3. Interest Rates</h4>
                  <p className="text-gray-700 mb-3">
                    Mortgage interest rates directly impact affordability and buyer demand. A 1% increase in rates can 
                    reduce buying power by approximately 10-11%. When rates rise quickly, demand often drops, slowing 
                    appreciation. Conversely, falling rates stimulate demand and can accelerate price growth. The 
                    relationship isn't always immediate - there's typically a 3-6 month lag between rate changes and 
                    their full market impact.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">4. Employment and Income Growth</h4>
                  <p className="text-gray-700 mb-3">
                    Job growth and rising incomes are fundamental drivers of housing demand. Markets with annual job 
                    growth above 2.5% typically see strong appreciation as new residents need housing. Tech hubs, 
                    healthcare centers, and government/education anchors provide stable employment bases. Rising median 
                    incomes increase the pool of qualified buyers who can afford higher prices.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">5. Population Growth</h4>
                  <p className="text-gray-700 mb-3">
                    Population growth creates sustained housing demand. Markets with 2%+ annual population growth 
                    consistently outperform due to continuous new buyer influx. Migration patterns matter - people moving 
                    from expensive coastal cities to affordable Sun Belt markets drive appreciation in destination cities. 
                    Young professional and family demographics particularly support sustained demand.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">6. New Construction Activity</h4>
                  <p className="text-gray-700 mb-3">
                    The balance between new supply and demand determines market direction. Limited construction in growing 
                    markets creates shortages that fuel appreciation. Excessive building can saturate markets and suppress 
                    prices. The construction pipeline (permitted but not yet built) provides insight into future supply. 
                    Geographic constraints (mountains, water, development restrictions) limit supply and support prices.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Interpreting Market Direction Classifications</h3>

                  <div className="space-y-3 mb-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-2">Strong Growth (8%+ annual appreciation)</h4>
                      <p className="text-sm text-gray-700">
                        Characterized by limited inventory, strong job/population growth, and high demand. These markets 
                        offer excellent appreciation potential but may have limited cash flow due to elevated prices. 
                        Competition is intense with frequent bidding wars.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Moderate Growth (4-8% annual appreciation)</h4>
                      <p className="text-sm text-gray-700">
                        Healthy, sustainable markets with balanced supply/demand. Good for both appreciation and cash flow. 
                        Less competitive than strong growth markets but still showing solid fundamentals and upward momentum.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">Stable (0-4% annual appreciation)</h4>
                      <p className="text-sm text-gray-700">
                        Mature or balanced markets with modest growth. Appreciation roughly matches inflation. These markets 
                        may offer better cash flow opportunities. Lower risk but also lower appreciation upside.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Softening (0 to -3% appreciation)</h4>
                      <p className="text-sm text-gray-700">
                        Early warning signs of market weakness. Inventory rising, days on market increasing, price 
                        reductions becoming common. May transition to buyer's market. Exercise caution with new purchases.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Declining (-3%+ depreciation)</h4>
                      <p className="text-sm text-gray-700">
                        Clear price declines due to oversupply, job losses, or economic distress. High risk for investors. 
                        Opportunities may exist for cash buyers who can wait out the downturn, but timing recovery is difficult.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Confidence Levels and Forecast Accuracy</h3>

                  <p className="text-gray-700 mb-3">
                    Forecast confidence decreases with time horizon. Near-term forecasts (1-2 years) can achieve reasonable 
                    accuracy when market fundamentals are stable. Long-term forecasts (5-10 years) face compounding 
                    uncertainties from economic cycles, policy changes, and unforeseen events.
                  </p>

                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>
                      <strong>High Confidence:</strong> 1-2 year forecasts in stable markets with clear trends and strong 
                      fundamentals. Data is recent and reliable. Unexpected shocks remain possible but unlikely.
                    </li>
                    <li>
                      <strong>Medium Confidence:</strong> 3-5 year forecasts or near-term forecasts in volatile markets. 
                      Economic cycles and policy changes introduce uncertainty. Directional trends likely correct but 
                      magnitude may vary.
                    </li>
                    <li>
                      <strong>Low Confidence:</strong> 5-10+ year forecasts or markets with contradictory signals. Multiple 
                      scenarios possible. Use as general guidance rather than precise predictions. Regular monitoring and 
                      adjustment essential.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Using Forecasts for Decision Making</h3>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">For Buyers</h4>
                  <p className="text-gray-700 mb-3">
                    Forecasts help buyers time purchases and set expectations. In strong growth markets, waiting often 
                    means paying more later - act decisively when you find the right property. In softening markets, 
                    patience can yield better prices and terms. Consider your timeline - if you plan to own 5-10+ years, 
                    short-term fluctuations matter less than long-term trends. Lock in fixed-rate financing in rising 
                    rate environments.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">For Sellers</h4>
                  <p className="text-gray-700 mb-3">
                    Sellers benefit from timing markets at or near peaks. Strong growth forecasts suggest holding for 
                    additional appreciation unless personal circumstances require selling. Softening forecasts indicate 
                    selling sooner rather than later to maximize proceeds. In declining markets, realistic pricing and 
                    quick decisions minimize losses. Consider opportunity cost - sometimes selling now to buy in a better 
                    market makes sense even if your current market is appreciating.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">For Investors</h4>
                  <p className="text-gray-700 mb-3">
                    Investors balance appreciation and cash flow based on strategy. Strong growth markets offer wealth 
                    building through appreciation but may have thin or negative cash flow initially. Stable markets with 
                    modest growth often provide better cash-on-cash returns through rental income. Match forecast 
                    expectations to your investment timeline and return requirements. Diversify across markets with 
                    different growth profiles to balance risk and return.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Limitations and Considerations</h3>

                  <p className="text-gray-700 mb-3">
                    <strong>Black Swan Events:</strong> Forecasts cannot predict pandemics, financial crises, natural 
                    disasters, or major policy changes. Maintain financial reserves and avoid over-leveraging.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Micromarket Variations:</strong> City-level forecasts may not apply to specific neighborhoods. 
                    Gentrification, new development, school changes, and infrastructure projects create localized trends. 
                    Always research specific areas within broader markets.
                  </p>

                  <p className="text-gray-700 mb-3">
                    <strong>Mean Reversion:</strong> Markets with extreme appreciation often experience corrections or 
                    periods of stagnation. Markets with declines eventually stabilize and recover. Don't assume current 
                    trends continue indefinitely.
                  </p>

                  <p className="text-gray-700 mb-4">
                    <strong>Personal Circumstances:</strong> Your individual situation (job security, family needs, 
                    financial position) should ultimately drive decisions more than market forecasts. The "best" time to 
                    buy or sell is when it aligns with your life goals and financial capacity.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Best Practices</h3>

                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Use forecasts as one input among many in your decision-making process</li>
                    <li>Regularly update assumptions as new data becomes available</li>
                    <li>Focus on trends and direction rather than precise numbers</li>
                    <li>Validate forecasts against multiple data sources and local market experts</li>
                    <li>Consider multiple scenarios (best case, base case, worst case)</li>
                    <li>Stress test your financial position against adverse scenarios</li>
                    <li>Monitor leading indicators (new listings, pending sales, price reductions) for trend changes</li>
                    <li>Maintain flexibility to adjust strategy as markets evolve</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
