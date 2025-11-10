'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Search, BarChart, Copy, CheckCircle, AlertTriangle, TrendingUp, TrendingDown, BookOpen, Sparkles } from 'lucide-react';

interface ListingSummary {
  executiveSummary: string;
  detailedSummary: string;
  keyHighlights: string[];
  pros: string[];
  cons: string[];
  investmentScore: number;
  investmentRationale: string;
  pricingAnalysis: {
    pricePerSqft: number;
    marketPosition: string;
    valueAssessment: string;
  };
  targetBuyer: string;
  urgencyLevel: string;
}

export default function AIZillowListingSummary() {
  const [listingUrl, setListingUrl] = useState<string>('');
  const [listingText, setListingText] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [squareFeet, setSquareFeet] = useState<number>(0);
  const [yearBuilt, setYearBuilt] = useState<number>(0);
  const [lotSize, setLotSize] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('single-family');

  const [summaryStyle, setSummaryStyle] = useState<string>('professional');
  const [focusArea, setFocusArea] = useState<string>('balanced');
  const [includeInvestment, setIncludeInvestment] = useState<boolean>(true);
  const [includePricing, setIncludePricing] = useState<boolean>(true);
  const [includeNeighborhood, setIncludeNeighborhood] = useState<boolean>(true);

  const [generatedSummary, setGeneratedSummary] = useState<ListingSummary | null>(null);
  const [copiedSection, setCopiedSection] = useState<string>('');

  const extractFromText = () => {
    if (!listingText) return;

    const priceMatch = listingText.match(/\$[\d,]+/);
    if (priceMatch) {
      setPrice(parseInt(priceMatch[0].replace(/[$,]/g, '')));
    }

    const bedsMatch = listingText.match(/(\d+)\s*(bd|bed|bedroom)/i);
    if (bedsMatch) {
      setBedrooms(parseInt(bedsMatch[1]));
    }

    const bathsMatch = listingText.match(/(\d+(?:\.\d+)?)\s*(ba|bath|bathroom)/i);
    if (bathsMatch) {
      setBathrooms(parseFloat(bathsMatch[1]));
    }

    const sqftMatch = listingText.match(/([\d,]+)\s*sqft/i);
    if (sqftMatch) {
      setSquareFeet(parseInt(sqftMatch[1].replace(/,/g, '')));
    }

    const addressMatch = listingText.match(/\d+\s+[A-Za-z\s]+(?:St|Ave|Rd|Dr|Ln|Ct|Blvd|Way|Pl)/i);
    if (addressMatch) {
      setAddress(addressMatch[0]);
    }
  };

  const generateSummary = () => {
    if (!price || !bedrooms || !squareFeet) {
      alert('Please provide at least price, bedrooms, and square feet to generate a summary.');
      return;
    }

    const pricePerSqft = price / squareFeet;

    const styleTemplates: { [key: string]: any } = {
      professional: {
        prefix: 'This property represents',
        tone: 'analytical',
        adjectives: ['well-positioned', 'notable', 'competitive', 'attractive', 'solid'],
      },
      'investor-focused': {
        prefix: 'Investment Analysis:',
        tone: 'financial',
        adjectives: ['cash-flowing', 'value-add', 'high-potential', 'strategic', 'profitable'],
      },
      'buyer-friendly': {
        prefix: 'Welcome home to',
        tone: 'warm',
        adjectives: ['beautiful', 'wonderful', 'perfect', 'charming', 'lovely'],
      },
    };

    const currentStyle = styleTemplates[summaryStyle] || styleTemplates['professional'];

    const investmentScore = calculateInvestmentScore(pricePerSqft, yearBuilt, bedrooms, bathrooms);

    const executiveSummary = generateExecutiveSummary(currentStyle, investmentScore);
    const detailedSummary = generateDetailedSummary(currentStyle, investmentScore, pricePerSqft);
    const keyHighlights = generateHighlights();
    const { pros, cons } = generateProsAndCons(investmentScore, pricePerSqft);
    const investmentRationale = generateInvestmentRationale(investmentScore);
    const pricingAnalysis = analyzePricing(pricePerSqft);

    const summary: ListingSummary = {
      executiveSummary,
      detailedSummary,
      keyHighlights,
      pros,
      cons,
      investmentScore,
      investmentRationale,
      pricingAnalysis,
      targetBuyer: determineTargetBuyer(),
      urgencyLevel: determineUrgency(investmentScore, pricingAnalysis.marketPosition),
    };

    setGeneratedSummary(summary);
    setCopiedSection('');
  };

  const calculateInvestmentScore = (
    pricePerSqft: number,
    yearBuilt: number,
    beds: number,
    baths: number
  ): number => {
    let score = 50;

    if (pricePerSqft < 150) score += 20;
    else if (pricePerSqft < 200) score += 10;
    else if (pricePerSqft > 300) score -= 10;

    if (yearBuilt > 2010) score += 15;
    else if (yearBuilt > 2000) score += 10;
    else if (yearBuilt < 1980) score -= 5;

    if (beds >= 3 && baths >= 2) score += 10;
    if (beds >= 4 && baths >= 2.5) score += 5;

    return Math.min(Math.max(score, 0), 100);
  };

  const generateExecutiveSummary = (style: any, score: number): string => {
    const scoreDescriptor = score >= 75 ? 'excellent' : score >= 60 ? 'strong' : score >= 45 ? 'moderate' : 'limited';
    
    if (summaryStyle === 'investor-focused') {
      return `${propertyType === 'single-family' ? 'Single-family residence' : propertyType} at ${formatCurrency(price)} (${formatCurrency(price / squareFeet)}/sqft) with ${scoreDescriptor} investment potential (${score}/100). ${bedrooms}BR/${bathrooms}BA spanning ${squareFeet.toLocaleString()} sqft${yearBuilt ? `, built ${yearBuilt}` : ''}. ${score >= 70 ? 'Strong buy signal for cash flow and appreciation.' : score >= 50 ? 'Moderate opportunity with value-add potential.' : 'Requires careful due diligence before proceeding.'}`;
    } else if (summaryStyle === 'buyer-friendly') {
      return `${style.adjectives[0]} ${bedrooms}-bedroom, ${bathrooms}-bathroom home offering ${squareFeet.toLocaleString()} square feet of living space${address ? ` at ${address}` : ''}. Listed at ${formatCurrency(price)}, this property provides ${score >= 70 ? 'exceptional value' : score >= 50 ? 'good value' : 'competitive pricing'} in today's market. ${score >= 70 ? 'An outstanding opportunity you won\'t want to miss!' : score >= 50 ? 'A solid choice for your next home.' : 'Worth considering with the right offer.'}`;
    } else {
      return `${propertyType === 'single-family' ? 'Single-family home' : propertyType} featuring ${bedrooms} bedrooms and ${bathrooms} bathrooms across ${squareFeet.toLocaleString()} square feet. Listed at ${formatCurrency(price)} (${formatCurrency(price / squareFeet)}/sqft)${yearBuilt ? `, constructed in ${yearBuilt}` : ''}. Overall assessment score: ${score}/100 (${scoreDescriptor}). ${score >= 70 ? 'Well-positioned in current market conditions.' : score >= 50 ? 'Competitive offering with standard market attributes.' : 'May require additional evaluation of pricing and condition.'}`;
    }
  };

  const generateDetailedSummary = (style: any, score: number, pricePerSqft: number): string => {
    let summary = '';

    if (summaryStyle === 'investor-focused') {
      summary = `Investment Analysis: This ${bedrooms}BR/${bathrooms}BA ${propertyType} presents `;
      summary += score >= 70 ? 'a compelling investment opportunity ' : score >= 50 ? 'a moderate investment case ' : 'an opportunity requiring careful analysis ';
      summary += `at ${formatCurrency(price)} (${formatCurrency(pricePerSqft)}/sqft). `;
      
      if (includeInvestment) {
        summary += `With ${squareFeet.toLocaleString()} square feet of livable space, the property offers `;
        summary += pricePerSqft < 175 ? 'attractive per-square-foot pricing below market averages. ' : pricePerSqft < 225 ? 'competitive per-square-foot pricing aligned with market norms. ' : 'premium per-square-foot pricing above typical market rates. ';
      }

      if (yearBuilt) {
        summary += yearBuilt > 2015 ? 'Recent construction minimizes near-term capital expenditure requirements. ' : yearBuilt > 2000 ? 'Modern construction standards with manageable maintenance expectations. ' : 'Older construction may require reserve allocation for systems replacement. ';
      }

      summary += score >= 70 ? 'Strong fundamentals support both cash flow and appreciation potential. ' : score >= 50 ? 'Balanced risk-reward profile suitable for selective investors. ' : 'Higher risk profile requires enhanced due diligence and contingency planning. ';
      summary += 'Recommend comprehensive inspection, title review, and local market rent comps before proceeding.';

    } else if (summaryStyle === 'buyer-friendly') {
      summary = `Welcome to this ${style.adjectives[Math.floor(Math.random() * style.adjectives.length)]} ${bedrooms}-bedroom, ${bathrooms}-bathroom home! `;
      summary += `With ${squareFeet.toLocaleString()} square feet of comfortable living space, this property offers `;
      summary += bedrooms >= 4 ? 'plenty of room for a growing family. ' : bedrooms === 3 ? 'ideal space for families or home offices. ' : 'efficient use of space perfect for starters or downsizers. ';

      if (yearBuilt) {
        summary += yearBuilt > 2015 ? 'As a newer construction home, you can enjoy modern amenities and energy efficiency with peace of mind. ' : yearBuilt > 2000 ? 'This well-maintained home combines modern updates with established character. ' : 'This home offers classic charm with potential for personalization. ';
      }

      if (includePricing) {
        summary += `Priced at ${formatCurrency(price)}, `;
        summary += score >= 70 ? 'this represents excellent value in the current market - properties like this don\'t last long! ' : score >= 50 ? 'this is competitively priced and worth serious consideration. ' : 'there may be room for negotiation to reach the right price for you. ';
      }

      summary += 'Schedule a showing today to experience all this home has to offer!';

    } else {
      summary = `This ${propertyType} offers ${bedrooms} bedrooms and ${bathrooms} bathrooms within ${squareFeet.toLocaleString()} square feet of living space. `;
      summary += `Listed at ${formatCurrency(price)}, the per-square-foot price of ${formatCurrency(pricePerSqft)} `;
      summary += pricePerSqft < 175 ? 'positions this property below typical market rates, suggesting potential value. ' : pricePerSqft < 225 ? 'aligns with current market standards for comparable properties. ' : 'reflects premium positioning relative to area averages. ';

      if (yearBuilt) {
        summary += yearBuilt > 2015 ? `Construction year ${yearBuilt} indicates newer systems and modern building standards. ` : yearBuilt > 2000 ? `Built in ${yearBuilt}, the property represents contemporary construction with established infrastructure. ` : `The ${yearBuilt} construction date suggests potential considerations for system age and updates. `;
      }

      if (includeNeighborhood && address) {
        summary += `Located at ${address}, `;
        summary += 'proximity to amenities, schools, and transportation should be evaluated as part of comprehensive due diligence. ';
      }

      summary += `Overall assessment score of ${score}/100 reflects `;
      summary += score >= 70 ? 'strong market positioning and favorable attributes. ' : score >= 50 ? 'balanced characteristics with standard market appeal. ' : 'mixed attributes warranting careful evaluation. ';
      summary += 'Professional inspection and comparative market analysis recommended.';
    }

    return summary;
  };

  const generateHighlights = (): string[] => {
    const highlights: string[] = [];

    highlights.push(`${bedrooms} Bedrooms | ${bathrooms} Bathrooms`);
    highlights.push(`${squareFeet.toLocaleString()} Square Feet`);
    highlights.push(`${formatCurrency(price)} List Price`);
    highlights.push(`${formatCurrency(price / squareFeet)}/sqft Price Ratio`);

    if (yearBuilt) {
      highlights.push(`Built in ${yearBuilt}`);
    }

    if (lotSize) {
      highlights.push(`Lot Size: ${lotSize}`);
    }

    highlights.push(`Property Type: ${propertyType === 'single-family' ? 'Single-Family' : propertyType === 'condo' ? 'Condominium' : propertyType === 'townhouse' ? 'Townhouse' : 'Multi-Family'}`);

    const pricePerSqft = price / squareFeet;
    if (pricePerSqft < 175) {
      highlights.push('Below-Market Pricing Per Sqft');
    } else if (pricePerSqft > 275) {
      highlights.push('Premium Pricing Per Sqft');
    }

    return highlights;
  };

  const generateProsAndCons = (score: number, pricePerSqft: number) => {
    const pros: string[] = [];
    const cons: string[] = [];

    if (bedrooms >= 3 && bathrooms >= 2) {
      pros.push('Desirable bed/bath configuration appeals to broad buyer pool');
    } else if (bedrooms < 3) {
      cons.push('Limited bedroom count may reduce buyer appeal');
    }

    if (pricePerSqft < 175) {
      pros.push('Competitive per-square-foot pricing below market averages');
    } else if (pricePerSqft > 275) {
      cons.push('Premium pricing per square foot above typical market rates');
    }

    if (yearBuilt && yearBuilt > 2015) {
      pros.push('Recent construction with modern systems and energy efficiency');
    } else if (yearBuilt && yearBuilt < 1980) {
      cons.push('Older construction may require updates to systems and infrastructure');
    }

    if (squareFeet >= 2000) {
      pros.push('Spacious floor plan with ample living area');
    } else if (squareFeet < 1200) {
      cons.push('Compact square footage may limit functionality for larger families');
    }

    if (bedrooms >= 4) {
      pros.push('Extra bedrooms provide flexibility for home office, guests, or hobbies');
    }

    if (bathrooms >= 2.5) {
      pros.push('Multiple bathrooms enhance convenience and resale value');
    }

    if (propertyType === 'single-family') {
      pros.push('Single-family home typically appreciates well and offers more privacy');
    } else if (propertyType === 'condo') {
      cons.push('HOA fees and condo association rules may impact ownership flexibility');
    }

    if (score >= 70) {
      pros.push('Strong overall assessment score indicates favorable market positioning');
    } else if (score < 50) {
      cons.push('Moderate assessment score suggests careful evaluation needed');
    }

    if (pros.length === 0) {
      pros.push('Standard market offering with typical features for price point');
    }

    if (cons.length === 0) {
      cons.push('No significant concerns identified in initial analysis');
    }

    return { pros, cons };
  };

  const generateInvestmentRationale = (score: number): string => {
    if (score >= 75) {
      return 'Excellent investment potential. Strong fundamentals across pricing, condition, and market positioning. Low risk profile with favorable cash flow and appreciation prospects. Recommended for immediate consideration.';
    } else if (score >= 60) {
      return 'Strong investment case. Above-average metrics with balanced risk-reward profile. Suitable for investors seeking stable returns with moderate appreciation potential. Due diligence recommended.';
    } else if (score >= 45) {
      return 'Moderate investment opportunity. Mixed metrics requiring careful analysis. May be suitable for experienced investors who can identify value-add opportunities or accept higher risk tolerance. Comprehensive evaluation essential.';
    } else {
      return 'Limited investment appeal in current condition. Below-average scores suggest challenges with pricing, condition, or market positioning. Consider only with significant discounts, creative financing, or major renovation plans. High-risk profile.';
    }
  };

  const analyzePricing = (pricePerSqft: number) => {
    let marketPosition = '';
    let valueAssessment = '';

    if (pricePerSqft < 150) {
      marketPosition = 'Below Market';
      valueAssessment = 'Exceptional value opportunity. Significantly below typical market rates, suggesting motivated seller, condition issues, or undiscovered gem. Warrants immediate investigation.';
    } else if (pricePerSqft < 200) {
      marketPosition = 'Competitive';
      valueAssessment = 'Attractive pricing below market averages. Good value proposition for buyers. Likely to generate strong interest and potentially multiple offers.';
    } else if (pricePerSqft < 250) {
      marketPosition = 'At Market';
      valueAssessment = 'Fair market pricing aligned with comparable properties. Standard value proposition. Success depends on condition, location, and specific features.';
    } else if (pricePerSqft < 300) {
      marketPosition = 'Above Market';
      valueAssessment = 'Premium pricing above typical market rates. Justifiable only with exceptional condition, location, or unique features. May require price adjustment for timely sale.';
    } else {
      marketPosition = 'High Premium';
      valueAssessment = 'Significantly above market averages. Must offer exceptional attributes to justify pricing. Limited buyer pool. Consider negotiation strategy.';
    }

    return {
      pricePerSqft,
      marketPosition,
      valueAssessment,
    };
  };

  const determineTargetBuyer = (): string => {
    if (summaryStyle === 'investor-focused') {
      return 'Real estate investors, landlords, fix-and-flip professionals';
    } else if (bedrooms >= 4 && bathrooms >= 2.5) {
      return 'Growing families, multi-generational households';
    } else if (bedrooms <= 2 && squareFeet < 1500) {
      return 'First-time buyers, young professionals, downsizers';
    } else {
      return 'Traditional homebuyers, families, owner-occupants';
    }
  };

  const determineUrgency = (score: number, marketPosition: string): string => {
    if (score >= 75 && marketPosition === 'Below Market') {
      return 'HIGH - Exceptional opportunity, likely to receive multiple offers quickly';
    } else if (score >= 60 && (marketPosition === 'Below Market' || marketPosition === 'Competitive')) {
      return 'MODERATE-HIGH - Strong value proposition, should move quickly';
    } else if (score >= 45) {
      return 'MODERATE - Standard timeline expected, time for due diligence';
    } else {
      return 'LOW - Property may remain available, opportunity for negotiation';
    }
  };

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(''), 2000);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <Search className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Zillow Listing Summary Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze Zillow property listings instantly. Extract key details, generate comprehensive summaries,
            evaluate investment potential, and make faster, smarter buying decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Listing Analyzer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="input" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="input">Input</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="guide" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="input" className="space-y-4">
                    <div>
                      <Label htmlFor="listingUrl">Zillow Listing URL (Optional)</Label>
                      <Input
                        id="listingUrl"
                        value={listingUrl}
                        onChange={(e) => setListingUrl(e.target.value)}
                        placeholder="https://www.zillow.com/homedetails/..."
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Paste the Zillow listing URL for automatic extraction (manual entry also supported below)
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <Label htmlFor="listingText">Paste Listing Description (Optional)</Label>
                      <Textarea
                        id="listingText"
                        value={listingText}
                        onChange={(e) => setListingText(e.target.value)}
                        placeholder="Paste the full listing description here for automatic extraction..."
                        rows={4}
                      />
                      <Button 
                        onClick={extractFromText} 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        disabled={!listingText}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Auto-Extract Details
                      </Button>
                    </div>

                    <Separator />

                    <h3 className="text-lg font-semibold">Property Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="address">Property Address</Label>
                        <Input
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main St, Austin, TX"
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
                          <option value="single-family">Single-Family</option>
                          <option value="condo">Condo</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-family">Multi-Family</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="price">List Price ($) *</Label>
                        <Input
                          id="price"
                          type="number"
                          value={price || ''}
                          onChange={(e) => setPrice(Number(e.target.value))}
                          placeholder="450000"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms *</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={bedrooms || ''}
                          onChange={(e) => setBedrooms(Number(e.target.value))}
                          placeholder="3"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms *</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          step="0.5"
                          value={bathrooms || ''}
                          onChange={(e) => setBathrooms(Number(e.target.value))}
                          placeholder="2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="squareFeet">Square Feet *</Label>
                        <Input
                          id="squareFeet"
                          type="number"
                          value={squareFeet || ''}
                          onChange={(e) => setSquareFeet(Number(e.target.value))}
                          placeholder="1800"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearBuilt">Year Built</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={yearBuilt || ''}
                          onChange={(e) => setYearBuilt(Number(e.target.value))}
                          placeholder="2015"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lotSize">Lot Size</Label>
                        <Input
                          id="lotSize"
                          value={lotSize}
                          onChange={(e) => setLotSize(e.target.value)}
                          placeholder="0.25 acres"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-500">* Required fields</p>
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-4">
                    <div>
                      <Label htmlFor="summaryStyle">Summary Style</Label>
                      <select
                        id="summaryStyle"
                        value={summaryStyle}
                        onChange={(e) => setSummaryStyle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="professional">Professional - Balanced analysis for agents and buyers</option>
                        <option value="investor-focused">Investor-Focused - ROI and cash flow emphasis</option>
                        <option value="buyer-friendly">Buyer-Friendly - Warm, approachable tone for homebuyers</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="focusArea">Analysis Focus</Label>
                      <select
                        id="focusArea"
                        value={focusArea}
                        onChange={(e) => setFocusArea(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="balanced">Balanced - All aspects equally weighted</option>
                        <option value="value">Value - Emphasize pricing and ROI</option>
                        <option value="lifestyle">Lifestyle - Focus on livability and features</option>
                        <option value="investment">Investment - Financial metrics and potential</option>
                      </select>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Include in Summary</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeInvestment"
                          checked={includeInvestment}
                          onChange={(e) => setIncludeInvestment(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeInvestment">Investment potential analysis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includePricing"
                          checked={includePricing}
                          onChange={(e) => setIncludePricing(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includePricing">Comparable pricing analysis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeNeighborhood"
                          checked={includeNeighborhood}
                          onChange={(e) => setIncludeNeighborhood(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeNeighborhood">Neighborhood considerations</Label>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={generateSummary} 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      size="lg"
                    >
                      <BarChart className="mr-2 h-5 w-5" />
                      Generate Listing Summary
                    </Button>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6">
                    {!generatedSummary ? (
                      <div className="text-center py-12">
                        <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">
                          No summary generated yet. Fill in the property details and click "Generate Listing Summary".
                        </p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-purple-600" />
                              Executive Summary
                            </h3>
                            <Button
                              onClick={() => copyToClipboard(generatedSummary.executiveSummary, 'executive')}
                              variant="outline"
                              size="sm"
                            >
                              {copiedSection === 'executive' ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <Card className="bg-purple-50 border-purple-200">
                            <CardContent className="pt-6">
                              <p className="text-gray-800">{generatedSummary.executiveSummary}</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">Detailed Summary</h3>
                            <Button
                              onClick={() => copyToClipboard(generatedSummary.detailedSummary, 'detailed')}
                              variant="outline"
                              size="sm"
                            >
                              {copiedSection === 'detailed' ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-gray-700 leading-relaxed">{generatedSummary.detailedSummary}</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">Key Highlights</h3>
                            <Button
                              onClick={() => copyToClipboard(generatedSummary.keyHighlights.join('\n• '), 'highlights')}
                              variant="outline"
                              size="sm"
                            >
                              {copiedSection === 'highlights' ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <Card>
                            <CardContent className="pt-6">
                              <ul className="space-y-2">
                                {generatedSummary.keyHighlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Badge variant="outline" className="mt-0.5">✓</Badge>
                                    <span className="text-gray-700">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-green-600" />
                                Pros
                              </h3>
                              <Button
                                onClick={() => copyToClipboard(generatedSummary.pros.join('\n• '), 'pros')}
                                variant="outline"
                                size="sm"
                              >
                                {copiedSection === 'pros' ? (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <Card className="border-green-200 bg-green-50">
                              <CardContent className="pt-6">
                                <ul className="space-y-2">
                                  {generatedSummary.pros.map((pro, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                      <span className="text-green-600 mt-0.5">+</span>
                                      <span className="text-gray-700">{pro}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold flex items-center gap-2">
                                <TrendingDown className="h-5 w-5 text-orange-600" />
                                Cons
                              </h3>
                              <Button
                                onClick={() => copyToClipboard(generatedSummary.cons.join('\n• '), 'cons')}
                                variant="outline"
                                size="sm"
                              >
                                {copiedSection === 'cons' ? (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <Card className="border-orange-200 bg-orange-50">
                              <CardContent className="pt-6">
                                <ul className="space-y-2">
                                  {generatedSummary.cons.map((con, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                      <span className="text-orange-600 mt-0.5">-</span>
                                      <span className="text-gray-700">{con}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {includeInvestment && (
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Investment Potential</h3>
                            <Card className="border-blue-200 bg-blue-50">
                              <CardContent className="pt-6">
                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-gray-700 font-medium">Investment Score:</span>
                                  <div className="flex items-center gap-3">
                                    <div className="w-48 bg-gray-200 rounded-full h-3">
                                      <div
                                        className={`h-3 rounded-full ${
                                          generatedSummary.investmentScore >= 75
                                            ? 'bg-green-600'
                                            : generatedSummary.investmentScore >= 60
                                            ? 'bg-blue-600'
                                            : generatedSummary.investmentScore >= 45
                                            ? 'bg-yellow-600'
                                            : 'bg-red-600'
                                        }`}
                                        style={{ width: `${generatedSummary.investmentScore}%` }}
                                      />
                                    </div>
                                    <Badge
                                      variant={
                                        generatedSummary.investmentScore >= 75
                                          ? 'default'
                                          : 'outline'
                                      }
                                      className={
                                        generatedSummary.investmentScore >= 75
                                          ? 'bg-green-600'
                                          : generatedSummary.investmentScore >= 60
                                          ? 'bg-blue-600 text-white'
                                          : generatedSummary.investmentScore >= 45
                                          ? 'bg-yellow-600 text-white'
                                          : 'bg-red-600 text-white'
                                      }
                                    >
                                      {generatedSummary.investmentScore}/100
                                    </Badge>
                                  </div>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {generatedSummary.investmentRationale}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        )}

                        {includePricing && (
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Pricing Analysis</h3>
                            <Card>
                              <CardContent className="pt-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-500">Price per Sqft</p>
                                    <p className="text-2xl font-bold text-purple-600">
                                      {formatCurrency(generatedSummary.pricingAnalysis.pricePerSqft)}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-500">Market Position</p>
                                    <Badge
                                      className={
                                        generatedSummary.pricingAnalysis.marketPosition === 'Below Market'
                                          ? 'bg-green-600'
                                          : generatedSummary.pricingAnalysis.marketPosition === 'Competitive'
                                          ? 'bg-blue-600'
                                          : generatedSummary.pricingAnalysis.marketPosition === 'At Market'
                                          ? 'bg-gray-600'
                                          : 'bg-orange-600'
                                      }
                                    >
                                      {generatedSummary.pricingAnalysis.marketPosition}
                                    </Badge>
                                  </div>
                                </div>
                                <Separator />
                                <div>
                                  <p className="text-sm font-medium text-gray-700 mb-2">Value Assessment:</p>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {generatedSummary.pricingAnalysis.valueAssessment}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="border-purple-200">
                            <CardContent className="pt-6">
                              <p className="text-sm text-gray-500 mb-1">Target Buyer Profile</p>
                              <p className="text-gray-800 font-medium">{generatedSummary.targetBuyer}</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200">
                            <CardContent className="pt-6">
                              <p className="text-sm text-gray-500 mb-1">Urgency Level</p>
                              <div className="flex items-center gap-2">
                                {generatedSummary.urgencyLevel.startsWith('HIGH') ? (
                                  <AlertTriangle className="h-5 w-5 text-red-600" />
                                ) : generatedSummary.urgencyLevel.startsWith('MODERATE') ? (
                                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                                ) : (
                                  <AlertTriangle className="h-5 w-5 text-gray-400" />
                                )}
                                <p className="text-gray-800 font-medium">{generatedSummary.urgencyLevel}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="guide" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        How to Analyze Zillow Listings Like a Pro
                      </h2>

                      <p className="text-gray-700 mb-4">
                        Zillow is one of the most popular real estate platforms, with millions of listings and 
                        sophisticated data tools. However, the sheer volume of information can be overwhelming. 
                        This guide will help you efficiently analyze Zillow listings and make informed decisions 
                        whether you're a homebuyer, investor, or real estate professional.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Understanding Key Listing Metrics
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Price Per Square Foot:</strong> This is one of the most important metrics for 
                        evaluating whether a property is fairly priced. Calculate it by dividing the list price 
                        by the square footage. Compare this figure to similar properties in the same neighborhood. 
                        Properties priced below $150/sqft in many markets represent exceptional value, while those 
                        above $300/sqft are typically premium-priced or in high-demand areas.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Days on Market (DOM):</strong> This tells you how long a property has been listed. 
                        Short DOM (under 30 days) often indicates high demand or competitive pricing. Long DOM 
                        (over 90 days) may suggest overpricing, property issues, or weak market conditions. Use 
                        this metric to gauge negotiation leverage - sellers with high DOM are often more motivated.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Zestimate vs. List Price:</strong> The Zestimate is Zillow's automated home 
                        valuation. While not always accurate, significant discrepancies between Zestimate and 
                        list price warrant investigation. If the list price is 10%+ below the Zestimate, it could 
                        indicate a motivated seller or property issues. If it's 10%+ above, the seller may be 
                        testing the market or the property has unique features not captured by the algorithm.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Price History:</strong> Review past price changes on Zillow's timeline. Multiple 
                        price reductions indicate seller motivation and negotiation opportunities. Properties that 
                        have been relisted or taken off market may have fallen out of previous escrows, suggesting 
                        potential issues discovered during inspections.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Evaluating Property Features
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Bed/Bath Configuration:</strong> The ideal configuration depends on the market 
                        and buyer pool. In most markets, 3-bedroom, 2-bathroom homes have the broadest appeal. 
                        Properties with 4+ bedrooms attract families and command premiums in good school districts. 
                        Extra bathrooms (2.5+) add significant value and convenience, especially in multi-story homes.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Year Built and Updates:</strong> Newer construction (post-2010) typically features 
                        modern layouts, energy efficiency, and current building codes. Homes built 2000-2010 offer 
                        a balance of contemporary features and established neighborhoods. Pre-1980 homes may have 
                        charm and larger lots but often require systems updates (HVAC, electrical, plumbing). Always 
                        factor renovation costs into your analysis of older properties.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Lot Size and Land Value:</strong> In appreciating markets, lot size significantly 
                        impacts long-term value. Larger lots offer expansion possibilities, privacy, and scarcity 
                        value. Small lots are easier to maintain and may have lower property taxes, but limit future 
                        development. Consider local zoning - properties zoned for multi-family or mixed-use carry 
                        premium value for developers.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Investment Analysis Framework
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Cash Flow Potential:</strong> For rental properties, estimate monthly rent using 
                        Zillow's Rent Zestimate or comparable rentals. Calculate gross rental yield (annual rent / 
                        purchase price). A healthy rental property should yield 6-8%+ gross returns in most markets. 
                        Factor in property taxes, insurance, maintenance (1% of property value annually), vacancy 
                        (5-10%), and property management (8-10% of rent) for net cash flow analysis.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Appreciation Potential:</strong> Review Zillow's home value index for the ZIP code 
                        or neighborhood to understand historical appreciation trends. Markets with 5-7%+ annual 
                        appreciation over 5 years indicate strong growth. Consider economic factors: job growth, 
                        population trends, new development, and infrastructure improvements. Properties near planned 
                        transit, schools, or commercial development often outperform.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Value-Add Opportunities:</strong> Identify properties priced below market with 
                        cosmetic issues or deferred maintenance. Calculate renovation costs (use $50-100/sqft for 
                        moderate updates, $100-200/sqft for high-end). Ensure the after-repair value (ARV) supports 
                        a profitable exit. The 70% rule is helpful: purchase price + repairs should not exceed 70% 
                        of ARV for flip properties.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Reading Between the Lines
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Photo Analysis:</strong> High-quality professional photos suggest seller motivation 
                        and proper marketing. Poor photos, especially of key rooms (kitchen, bathrooms, master 
                        bedroom), may hide condition issues. Virtual staging indicates vacant properties - factor 
                        carrying costs if the home has been empty long. Wide-angle lens distortion can make rooms 
                        appear larger than reality.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Description Red Flags:</strong> Phrases like "handyman special," "investor 
                        opportunity," "motivated seller," or "priced to sell" often indicate condition issues or 
                        urgent sale needs. Vague descriptions lacking specific details about updates or features 
                        may mean there's nothing noteworthy to highlight. Overuse of adjectives ("stunning," 
                        "gorgeous," "must-see") without concrete details can signal compensation for lack of 
                        substance.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>School Ratings and Neighborhood:</strong> Use Zillow's school rating feature to 
                        assess education quality. Homes in top-rated school districts (8-10 ratings) command 10-20% 
                        premiums and appreciate faster. Review the walkability score - higher scores (70+) indicate 
                        urban amenities, lower car dependence, and appeal to millennials and retirees. Check crime 
                        data and recent sales trends in the immediate neighborhood.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Comparative Market Analysis (CMA)
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Finding True Comparables:</strong> Use Zillow's "Similar Sales" feature, but refine 
                        the results. True comparables should be within 0.5 miles, sold within 3-6 months, similar 
                        size (±20% square footage), same property type, and comparable condition. Weight recent sales 
                        more heavily - markets can shift quickly. Three to five strong comparables provide reliable 
                        data for valuation.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Adjusting for Differences:</strong> No two properties are identical. Adjust 
                        comparable prices for differences: add/subtract $5,000-15,000 per bedroom/bathroom 
                        difference, $20-50/sqft for size differences, $10,000-30,000 for garage spaces, and 
                        $5,000-20,000 for significant condition differences. Corner lots, cul-de-sac locations, 
                        and superior views add 5-10% premiums.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Analyzing Active Competition:</strong> Review similar active listings to understand 
                        your competition. If there are 10+ similar properties available, buyers have leverage and 
                        price negotiations are easier. Limited inventory (fewer than 3 comparables) creates 
                        seller's markets with bidding wars and above-ask offers. Track how quickly similar 
                        properties go under contract to gauge market temperature.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Due Diligence Checklist
                      </h3>

                      <p className="text-gray-700 mb-3">
                        Before making an offer based on Zillow analysis, complete these essential steps:
                      </p>

                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                        <li>Drive the neighborhood at different times (weekday, weekend, evening) to assess noise, 
                        traffic, and livability</li>
                        <li>Research property tax history and upcoming assessments that could increase costs</li>
                        <li>Check for HOA fees, restrictions, and financial health if applicable</li>
                        <li>Review flood zone maps, earthquake risks, and required insurance</li>
                        <li>Investigate recent permits for additions or major work - unpermitted work creates 
                        liability</li>
                        <li>Contact the listing agent for seller disclosures and ask about days on market, 
                        previous offers, and reason for selling</li>
                        <li>Get pre-approved for financing to move quickly in competitive markets</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Making Competitive Offers
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Offer Strategy:</strong> In balanced markets, offers at 95-98% of list price are 
                        standard starting points. Hot markets may require full-price or above-ask offers with 
                        minimal contingencies. Weak markets with high DOM support offers at 85-90% of list price. 
                        Include escalation clauses in competitive situations - agree to beat competing offers up 
                        to a maximum price.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Contingencies:</strong> Balance protection with competitiveness. Inspection 
                        contingencies are crucial for assessing condition - never waive completely, but consider 
                        limiting to major issues only in competitive markets. Appraisal contingencies protect 
                        against overpaying but may weaken offers. Finance contingencies are standard but cash 
                        offers or proof of funds strengthen your position dramatically.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Closing Timeline:</strong> Flexible closing dates appeal to sellers with specific 
                        needs. Quick closes (14-21 days) help sellers who need fast liquidity. Extended closes 
                        (45-60 days) accommodate sellers who need time to relocate. Offering leaseback options 
                        (seller rents from you post-closing) solves timing challenges and makes offers more 
                        attractive.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Common Zillow Listing Mistakes to Avoid
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Over-Reliance on Zestimate:</strong> The Zestimate is a helpful starting point but 
                        should never be your sole valuation method. The algorithm doesn't account for condition, 
                        upgrades, or unique features. In some markets, Zestimates have 10-20% error rates. Always 
                        validate with comparable sales and professional appraisals.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Ignoring Total Cost of Ownership:</strong> The list price is just one component. 
                        Factor property taxes (often 1-2% of value annually), HOA fees, insurance (especially in 
                        flood/fire zones), utilities, and maintenance. A $400,000 home with $800/month in taxes 
                        and HOA fees costs significantly more than a $450,000 home with $300/month in those 
                        expenses.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Falling for Virtual Staging:</strong> Virtually staged photos make empty homes 
                        look furnished and inviting but can be misleading. Vacant properties may have been on 
                        market longer or have issues that led previous buyers to walk away. Always view properties 
                        in person or request non-staged photos to understand true condition and spatial flow.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        Advanced Zillow Features
                      </h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Saved Searches and Alerts:</strong> Set up customized search criteria and receive 
                        instant notifications when new listings match your parameters. In fast markets, being 
                        among the first to view new listings provides significant advantages. Save multiple 
                        searches for different property types, locations, or price ranges to track market dynamics.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Price History Tracking:</strong> Use Zillow's timeline feature to see all previous 
                        listing prices, sales, and tax assessments. This historical data reveals seller motivation, 
                        market trends, and whether current pricing is realistic. Properties with multiple price 
                        cuts indicate either initial overpricing or changing market conditions.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>3D Home Tours and Street View:</strong> Virtual tours save time by allowing you 
                        to eliminate non-contenders before in-person viewings. Pay attention to room layouts, 
                        natural light, and flow between spaces. Use Google Street View integration to assess curb 
                        appeal, neighboring properties, and overall street condition.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Effective Zillow analysis combines quantitative metrics (price/sqft, DOM, appreciation 
                        rates) with qualitative assessment (photos, descriptions, neighborhood dynamics). Use this 
                        tool to generate comprehensive summaries that capture both numerical data and contextual 
                        insights, helping you make faster, more confident real estate decisions.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Search className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Paste URL or Text</h4>
                      <p className="text-sm text-gray-600">
                        Copy the Zillow listing URL or description text for automatic extraction
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Auto-Extract</h4>
                      <p className="text-sm text-gray-600">
                        Click "Auto-Extract Details" to parse property info from pasted text
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <BarChart className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Choose Your Style</h4>
                      <p className="text-sm text-gray-600">
                        Select Professional, Investor-Focused, or Buyer-Friendly tone
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Investment Score</h4>
                      <p className="text-sm text-gray-600">
                        Get a 0-100 score based on pricing, condition, and market factors
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Copy className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Copy Summaries</h4>
                      <p className="text-sm text-gray-600">
                        Each summary section has a copy button for easy sharing
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-purple-600" />
                    Pro Tip
                  </h4>
                  <p className="text-sm text-gray-700">
                    Compare the price per square foot to similar properties in the area. Values below 
                    $175/sqft often represent good deals, while those above $275/sqft are premium-priced.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
