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
import { Calculator, Home, Palette, DollarSign, TrendingUp, CheckCircle, Info, Lightbulb, BookOpen, RefreshCw, Sparkles } from 'lucide-react';

interface RenovationIdea {
  title: string;
  description: string;
  styleMatch: number;
  budgetLevel: string;
  estimatedCost: { low: number; high: number };
  estimatedROI: number;
  timeframe: string;
  keyFeatures: string[];
  materials: string[];
  laborComplexity: string;
  diyFriendly: boolean;
  impactAreas: string[];
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Renovation Idea Generator (by Photo)',
    description: 'Get AI-powered renovation ideas and design suggestions based on room type, style preferences, and budget constraints. Free online tool for real estate profes...',
  };
}

export default function AIRenovationIdeaGenerator() {
  const [roomType, setRoomType] = useState<string>('kitchen');
  const [currentStyle, setCurrentStyle] = useState<string>('traditional');
  const [desiredStyle, setDesiredStyle] = useState<string>('modern');
  const [budget, setBudget] = useState<number>(25000);
  const [squareFootage, setSquareFootage] = useState<number>(150);
  const [condition, setCondition] = useState<string>('average');
  const [priority, setPriority] = useState<string>('aesthetics');
  const [timeline, setTimeline] = useState<string>('flexible');
  const [includeStructural, setIncludeStructural] = useState<boolean>(false);
  const [focusOnROI, setFocusOnROI] = useState<boolean>(true);
  const [considerDIY, setConsiderDIY] = useState<boolean>(false);
  const [ecoFriendly, setEcoFriendly] = useState<boolean>(false);

  const [generatedIdeas, setGeneratedIdeas] = useState<RenovationIdea[]>([]);

  const renovationDatabase: { [key: string]: any } = {
    kitchen: {
      modern: {
        ideas: [
          {
            title: 'Contemporary Kitchen Transformation',
            description: 'Transform your kitchen with sleek flat-panel cabinets, quartz countertops, and stainless steel appliances. Add under-cabinet LED lighting and a neutral color palette with bold accent colors for a truly modern aesthetic.',
            features: ['Flat-panel cabinetry', 'Quartz countertops', 'Stainless steel appliances', 'LED under-cabinet lighting', 'Minimalist hardware'],
            materials: ['Quartz', 'Stainless steel', 'Glass tile backsplash', 'Engineered hardwood', 'Matte finishes'],
            roi: 75,
            complexity: 'High',
            diy: false,
            timeframe: '6-8 weeks',
          },
          {
            title: 'Open Concept Kitchen Remodel',
            description: 'Remove non-load-bearing walls to create an open kitchen-dining area. Install a waterfall-edge island with bar seating, modern pendant lighting, and seamless integration with living spaces.',
            features: ['Removed interior walls', 'Large kitchen island', 'Bar seating', 'Pendant lighting', 'Open shelving'],
            materials: ['Marble or quartz', 'Custom cabinetry', 'Designer fixtures', 'Floating shelves', 'Luxury vinyl plank flooring'],
            roi: 70,
            complexity: 'Very High',
            diy: false,
            timeframe: '8-12 weeks',
          },
        ],
      },
      farmhouse: {
        ideas: [
          {
            title: 'Rustic Farmhouse Kitchen Revival',
            description: 'Create a warm, inviting space with shaker-style cabinets painted in soft colors, butcher block or marble countertops, farmhouse sink, and vintage-inspired fixtures. Add open shelving and decorative range hood.',
            features: ['Shaker cabinets', 'Farmhouse sink', 'Open shelving', 'Butcher block counters', 'Vintage hardware'],
            materials: ['Reclaimed wood', 'Marble or butcher block', 'Subway tile', 'Brass fixtures', 'Beadboard'],
            roi: 72,
            complexity: 'Moderate',
            diy: true,
            timeframe: '4-6 weeks',
          },
        ],
      },
      traditional: {
        ideas: [
          {
            title: 'Classic Kitchen Upgrade',
            description: 'Maintain timeless elegance with raised-panel cabinets, granite countertops, and crown molding. Update with new hardware, modern appliances, and improved lighting while preserving traditional charm.',
            features: ['Raised-panel cabinets', 'Granite countertops', 'Crown molding', 'Classic hardware', 'Recessed lighting'],
            materials: ['Granite', 'Cherry or maple wood', 'Ceramic tile', 'Bronze fixtures', 'Traditional trim'],
            roi: 68,
            complexity: 'Moderate',
            diy: false,
            timeframe: '5-7 weeks',
          },
        ],
      },
    },
    bathroom: {
      modern: {
        ideas: [
          {
            title: 'Spa-Like Modern Bathroom',
            description: 'Create a luxurious retreat with a frameless glass shower, floating vanity, large-format tiles, and rainfall showerhead. Incorporate smart features like heated floors and digital shower controls.',
            features: ['Frameless glass shower', 'Floating vanity', 'Rainfall showerhead', 'Heated floors', 'Large-format tiles'],
            materials: ['Porcelain tile', 'Quartz countertop', 'Chrome fixtures', 'LED mirrors', 'Glass'],
            roi: 65,
            complexity: 'High',
            diy: false,
            timeframe: '4-6 weeks',
          },
          {
            title: 'Minimalist Bathroom Makeover',
            description: 'Embrace clean lines with wall-mounted fixtures, floating shelves, and a monochromatic color scheme. Add a backlit mirror and concealed storage for a clutter-free modern aesthetic.',
            features: ['Wall-mounted toilet', 'Floating vanity', 'Backlit mirror', 'Concealed storage', 'Walk-in shower'],
            materials: ['Large format tiles', 'Matte black fixtures', 'White quartz', 'Glass partitions', 'Epoxy flooring'],
            roi: 62,
            complexity: 'Moderate',
            diy: false,
            timeframe: '3-5 weeks',
          },
        ],
      },
      traditional: {
        ideas: [
          {
            title: 'Classic Bathroom Renovation',
            description: 'Update with traditional elements like a pedestal sink, clawfoot tub, wainscoting, and vintage-inspired fixtures. Use timeless materials and colors that won\'t go out of style.',
            features: ['Pedestal sink', 'Clawfoot tub', 'Wainscoting', 'Classic fixtures', 'Crown molding'],
            materials: ['Marble', 'Subway tile', 'Chrome fixtures', 'Wood trim', 'Ceramic flooring'],
            roi: 60,
            complexity: 'Moderate',
            diy: true,
            timeframe: '4-5 weeks',
          },
        ],
      },
    },
    bedroom: {
      modern: {
        ideas: [
          {
            title: 'Contemporary Bedroom Retreat',
            description: 'Design a peaceful sanctuary with a platform bed, built-in closet systems, accent wall with geometric patterns, smart lighting, and minimalist furniture. Focus on clean lines and functional storage.',
            features: ['Platform bed', 'Built-in closets', 'Accent wall', 'Smart lighting', 'Floating nightstands'],
            materials: ['Wood or upholstered headboard', 'Custom closet systems', 'Textured wall panels', 'LED strips', 'Luxury vinyl'],
            roi: 50,
            complexity: 'Moderate',
            diy: true,
            timeframe: '2-4 weeks',
          },
        ],
      },
      farmhouse: {
        ideas: [
          {
            title: 'Cozy Farmhouse Bedroom',
            description: 'Create warmth with shiplap accent walls, reclaimed wood beams, vintage lighting fixtures, and soft neutral tones. Add a barn door for the closet and rustic wood furniture.',
            features: ['Shiplap walls', 'Exposed beams', 'Barn door', 'Vintage lighting', 'Plank flooring'],
            materials: ['Reclaimed wood', 'Shiplap boards', 'Wrought iron hardware', 'Natural textiles', 'Wide plank flooring'],
            roi: 45,
            complexity: 'Moderate',
            diy: true,
            timeframe: '3-4 weeks',
          },
        ],
      },
    },
    'living room': {
      modern: {
        ideas: [
          {
            title: 'Open Concept Living Space',
            description: 'Maximize space with an open floor plan, built-in entertainment center, feature wall with linear fireplace, and large windows. Use neutral colors with bold accent pieces.',
            features: ['Built-in media center', 'Linear fireplace', 'Floor-to-ceiling windows', 'Hidden storage', 'Accent lighting'],
            materials: ['Stone veneer', 'Custom millwork', 'Hardwood or LVP', 'Glass', 'Metal accents'],
            roi: 55,
            complexity: 'High',
            diy: false,
            timeframe: '5-7 weeks',
          },
        ],
      },
      traditional: {
        ideas: [
          {
            title: 'Classic Living Room Update',
            description: 'Refresh with crown molding, wainscoting, traditional fireplace mantel, and built-in bookshelves. Use warm wood tones and elegant architectural details.',
            features: ['Crown molding', 'Wainscoting', 'Built-in shelving', 'Traditional fireplace', 'Coffered ceiling'],
            materials: ['Hardwood flooring', 'Wood trim', 'Stone or brick fireplace', 'Custom millwork', 'Paint'],
            roi: 52,
            complexity: 'Moderate',
            diy: true,
            timeframe: '4-6 weeks',
          },
        ],
      },
    },
    basement: {
      modern: {
        ideas: [
          {
            title: 'Modern Basement Conversion',
            description: 'Transform unused space into a multi-functional area with a home theater, bar area, gym space, or guest suite. Include proper insulation, lighting, and moisture control.',
            features: ['Home theater', 'Wet bar', 'Gym area', 'Guest bedroom', 'Full bathroom'],
            materials: ['Waterproof flooring', 'Insulation', 'Drywall', 'Recessed lighting', 'Luxury vinyl tile'],
            roi: 70,
            complexity: 'Very High',
            diy: false,
            timeframe: '8-12 weeks',
          },
        ],
      },
    },
    outdoor: {
      modern: {
        ideas: [
          {
            title: 'Contemporary Outdoor Living Space',
            description: 'Extend your living area with a covered patio, outdoor kitchen, fire pit area, and modern landscaping. Use composite decking and weather-resistant materials.',
            features: ['Covered patio', 'Outdoor kitchen', 'Fire pit', 'Built-in seating', 'Landscape lighting'],
            materials: ['Composite decking', 'Stainless steel appliances', 'Stone veneer', 'Concrete pavers', 'Weather-resistant fabrics'],
            roi: 65,
            complexity: 'High',
            diy: false,
            timeframe: '6-10 weeks',
          },
        ],
      },
    },
  };

  const generateRenovationIdeas = () => {
    const ideas: RenovationIdea[] = [];
    
    const roomData = renovationDatabase[roomType] || renovationDatabase['kitchen'];
    const styleData = roomData[desiredStyle] || roomData['modern'];
    const ideaTemplates = styleData.ideas || [];

    const budgetMultipliers: { [key: string]: number } = {
      'poor': 1.3,
      'fair': 1.15,
      'average': 1.0,
      'good': 0.85,
      'excellent': 0.7,
    };

    const baseMultiplier = budgetMultipliers[condition] || 1.0;
    const sqftFactor = squareFootage / 150;

    ideaTemplates.forEach((template, index) => {
      const baseLowCost = budget * 0.6;
      const baseHighCost = budget * 1.2;
      
      let estimatedLow = baseLowCost * baseMultiplier * sqftFactor;
      let estimatedHigh = baseHighCost * baseMultiplier * sqftFactor;

      if (ecoFriendly) {
        estimatedLow *= 1.15;
        estimatedHigh *= 1.15;
      }

      if (timeline === 'rush') {
        estimatedLow *= 1.25;
        estimatedHigh *= 1.25;
      }

      let budgetLevel = 'Moderate';
      if (budget < 15000) budgetLevel = 'Budget-Friendly';
      else if (budget > 50000) budgetLevel = 'High-End';

      const recommendations: string[] = [];

      if (template.complexity === 'Very High' || template.complexity === 'High') {
        recommendations.push('Hire licensed contractors for major work');
        recommendations.push('Get multiple quotes before starting');
      }

      if (focusOnROI && template.roi < 60) {
        recommendations.push('Consider more cost-effective alternatives for better ROI');
      } else if (focusOnROI && template.roi > 70) {
        recommendations.push('Excellent investment - high ROI potential');
      }

      if (considerDIY && template.diy) {
        recommendations.push('Some aspects suitable for DIY to reduce costs');
        recommendations.push('Consider doing demolition and painting yourself');
      } else if (considerDIY && !template.diy) {
        recommendations.push('Professional installation strongly recommended');
      }

      if (ecoFriendly) {
        recommendations.push('Choose energy-efficient appliances and fixtures');
        recommendations.push('Consider recycled or sustainable materials');
        recommendations.push('Look for low-VOC paints and finishes');
      }

      if (includeStructural) {
        recommendations.push('Structural changes require permits and engineering');
        recommendations.push('Budget extra for unexpected structural issues');
      }

      if (condition === 'poor') {
        recommendations.push('Address underlying issues before cosmetic updates');
        recommendations.push('Budget may need to increase for repairs');
      }

      recommendations.push('Always get proper permits for code compliance');
      recommendations.push('Plan for 10-20% budget contingency');
      recommendations.push('Schedule work during off-peak seasons for better rates');

      const impactAreas = ['Property Value', 'Functionality', 'Aesthetics'];
      if (priority === 'functionality') impactAreas.unshift('Daily Living');
      if (priority === 'resale') impactAreas.unshift('Market Appeal');

      const idea: RenovationIdea = {
        title: template.title,
        description: template.description,
        styleMatch: 95 - (index * 5),
        budgetLevel,
        estimatedCost: {
          low: Math.round(estimatedLow),
          high: Math.round(estimatedHigh),
        },
        estimatedROI: template.roi,
        timeframe: timeline === 'rush' ? '2-3 weeks (rushed)' : template.timeframe,
        keyFeatures: template.features,
        materials: template.materials,
        laborComplexity: template.complexity,
        diyFriendly: template.diy,
        impactAreas,
        recommendations: recommendations.slice(0, 6),
      };

      ideas.push(idea);
    });

    const sortedIdeas = ideas.sort((a, b) => {
      if (focusOnROI) {
        return b.estimatedROI - a.estimatedROI;
      }
      return b.styleMatch - a.styleMatch;
    });

    setGeneratedIdeas(sortedIdeas);
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-amber-600 p-3 rounded-full">
              <Palette className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Renovation Idea Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized renovation ideas based on your room type, style preferences, and budget. 
            Discover design concepts with cost estimates, ROI projections, and expert recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Renovation Idea Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="room" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="room">Room Info</TabsTrigger>
                    <TabsTrigger value="style">Style & Budget</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="room" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="roomType">Room Type</Label>
                        <select
                          id="roomType"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="kitchen">Kitchen</option>
                          <option value="bathroom">Bathroom</option>
                          <option value="bedroom">Bedroom</option>
                          <option value="living room">Living Room</option>
                          <option value="basement">Basement</option>
                          <option value="outdoor">Outdoor/Patio</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="squareFootage">Square Footage</Label>
                        <Input
                          id="squareFootage"
                          type="number"
                          value={squareFootage}
                          onChange={(e) => setSquareFootage(Number(e.target.value))}
                          placeholder="150"
                        />
                      </div>
                      <div>
                        <Label htmlFor="condition">Current Condition</Label>
                        <select
                          id="condition"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="average">Average</option>
                          <option value="fair">Fair</option>
                          <option value="poor">Poor/Needs Work</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="currentStyle">Current Style</Label>
                        <select
                          id="currentStyle"
                          value={currentStyle}
                          onChange={(e) => setCurrentStyle(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="traditional">Traditional</option>
                          <option value="modern">Modern</option>
                          <option value="farmhouse">Farmhouse</option>
                          <option value="contemporary">Contemporary</option>
                          <option value="transitional">Transitional</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="desiredStyle">Desired Style</Label>
                        <select
                          id="desiredStyle"
                          value={desiredStyle}
                          onChange={(e) => setDesiredStyle(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="modern">Modern/Contemporary</option>
                          <option value="farmhouse">Farmhouse/Rustic</option>
                          <option value="traditional">Traditional/Classic</option>
                          <option value="transitional">Transitional</option>
                          <option value="industrial">Industrial</option>
                          <option value="minimalist">Minimalist</option>
                          <option value="coastal">Coastal</option>
                          <option value="bohemian">Bohemian</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget</Label>
                        <Input
                          id="budget"
                          type="number"
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          placeholder="25000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <select
                          id="priority"
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="aesthetics">Aesthetics/Style</option>
                          <option value="functionality">Functionality</option>
                          <option value="resale">Resale Value</option>
                          <option value="comfort">Personal Comfort</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <select
                          id="timeline"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="flexible">Flexible</option>
                          <option value="standard">Standard (4-8 weeks)</option>
                          <option value="rush">Rush (2-4 weeks)</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Project Preferences</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="focusOnROI"
                          checked={focusOnROI}
                          onChange={(e) => setFocusOnROI(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="focusOnROI">Focus on high ROI projects</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="considerDIY"
                          checked={considerDIY}
                          onChange={(e) => setConsiderDIY(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="considerDIY">Consider DIY-friendly options</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="ecoFriendly"
                          checked={ecoFriendly}
                          onChange={(e) => setEcoFriendly(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="ecoFriendly">Prioritize eco-friendly materials</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeStructural"
                          checked={includeStructural}
                          onChange={(e) => setIncludeStructural(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeStructural">Include structural changes</Label>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={generateRenovationIdeas} 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      size="lg"
                    >
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Generate Renovation Ideas
                    </Button>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart Home Renovation Planning</h2>
                      
                      <p className="text-gray-700 mb-4">
                        Planning a home renovation requires balancing aesthetics, functionality, budget, and return on investment. 
                        Whether you're updating for personal enjoyment or preparing to sell, strategic renovation decisions can 
                        dramatically improve your home's value and livability while avoiding costly mistakes.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prioritizing Renovation Projects</h3>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Kitchen Renovations:</strong> Consistently deliver among the highest returns on investment, 
                        typically 60-80% for mid-range updates and 50-60% for upscale remodels. Focus on functional improvements 
                        like updated appliances, quality countertops, and efficient layouts rather than luxury finishes that may 
                        not appeal to future buyers. Modern, neutral aesthetics have broader appeal than trendy designs.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Bathroom Updates:</strong> Second only to kitchens in ROI potential, bathroom renovations typically 
                        return 60-70% of costs. Mid-range updates focusing on fixtures, vanities, tile, and lighting provide better 
                        returns than luxury spa bathrooms. Adding a bathroom where one is needed (homes with only one bathroom) 
                        provides exceptional value.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Curb Appeal Projects:</strong> Entry doors, garage doors, and exterior improvements often return 
                        90-100% of costs. These projects create crucial first impressions and are relatively affordable. Consider 
                        fresh exterior paint, updated landscaping, new front door, and improved outdoor lighting.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Understanding Renovation Costs</h3>

                      <p className="text-gray-700 mb-3">
                        Budget realistically by understanding typical cost ranges for your area. National averages provide guidelines, 
                        but local labor rates, material costs, and permit requirements vary significantly. Major kitchen renovations 
                        average $25,000-75,000, bathrooms $10,000-35,000, and basement finishing $30,000-75,000. Always budget an 
                        additional 10-20% for unexpected issues that emerge during demolition.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Labor typically represents 60-70% of total renovation costs, with materials comprising the remainder. 
                        Quality contractors charge premium rates but provide better workmanship, proper permitting, and warranties. 
                        Extremely low bids often indicate corner-cutting, unlicensed work, or incomplete scope understanding.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Selecting Design Styles</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Modern/Contemporary:</strong> Characterized by clean lines, minimal ornamentation, neutral color 
                        palettes, and functional design. Popular materials include stainless steel, glass, concrete, and engineered 
                        products. This style appeals to younger buyers and urban markets but may feel cold or impersonal if not 
                        executed thoughtfully.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Farmhouse/Rustic:</strong> Features natural materials, reclaimed wood, vintage-inspired fixtures, 
                        and warm, inviting aesthetics. Shiplap, barn doors, farmhouse sinks, and open shelving are signature 
                        elements. This style has broad appeal but can look dated if too trendy or poorly executed.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Transitional:</strong> Blends traditional and contemporary elements for timeless, versatile spaces. 
                        This style offers the widest market appeal, combining classic architecture with modern amenities. Neutral 
                        colors, quality materials, and balanced design elements characterize successful transitional renovations.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">DIY vs. Professional Installation</h3>

                      <p className="text-gray-700 mb-3">
                        Assess your skills honestly before attempting DIY renovations. Painting, installing new hardware, minor 
                        landscaping, and simple demolition are reasonable DIY projects that can save 20-40% on costs. However, 
                        electrical work, plumbing, structural changes, and precision finish work generally require licensed 
                        professionals.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Consider the cost of mistakes when evaluating DIY potential. Poor tile installation, incorrect electrical 
                        work, or improper plumbing can create expensive problems requiring professional correction. Your time 
                        also has value - complex DIY projects that take weeks may not justify modest savings compared to professional 
                        completion in days.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sustainable and Energy-Efficient Renovations</h3>

                      <p className="text-gray-700 mb-4">
                        Eco-friendly renovations typically cost 10-20% more upfront but provide ongoing energy savings and appeal 
                        to environmentally conscious buyers. LED lighting, Energy Star appliances, low-flow fixtures, improved 
                        insulation, and high-efficiency HVAC systems reduce utility costs while increasing home value. Some 
                        improvements qualify for tax credits or utility rebates, reducing effective costs.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Choose sustainable materials like bamboo flooring, recycled glass countertops, reclaimed wood, and 
                        low-VOC paints. These materials often match or exceed conventional options in durability while reducing 
                        environmental impact. Document eco-friendly features for future buyers who increasingly value sustainability.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Avoiding Common Renovation Mistakes</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Over-Improving for the Neighborhood:</strong> Avoid renovations that make your home the most 
                        expensive on the block. Buyers rarely pay premium prices for homes significantly nicer than surrounding 
                        properties. Align renovation budgets with neighborhood values to ensure you can recoup investments.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Ignoring Permits:</strong> Required permits exist for safety and code compliance. Unpermitted work 
                        creates liability, can prevent home sales, and may require expensive corrections or removal. Always verify 
                        permit requirements with local building departments before starting work.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Trendy Over Timeless:</strong> Ultra-trendy finishes and colors date quickly and limit buyer appeal. 
                        Choose classic, neutral foundations with personality added through easily changed elements like paint colors, 
                        hardware, and accessories. This approach maintains broader market appeal while allowing personal expression.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Maximizing Return on Investment</h3>

                      <p className="text-gray-700 mb-4">
                        Focus on visible improvements that affect daily living or create strong first impressions. Updated kitchens 
                        and bathrooms, fresh paint, new flooring, improved lighting, and enhanced curb appeal provide the best returns. 
                        Luxury upgrades like swimming pools, high-end appliances, or elaborate landscaping typically return less than 
                        50% of costs unless standard for the neighborhood.
                      </p>

                      <p className="text-gray-700">
                        Time renovations strategically. Complete major updates before listing properties for sale, but avoid renovating 
                        immediately before moving if you won't enjoy the improvements. For long-term residences, prioritize projects 
                        that enhance daily living, with resale value as a secondary consideration. Quality renovations performed 
                        thoughtfully create beautiful, functional spaces while protecting and enhancing property values.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {generatedIdeas.length > 0 && (
              <>
                {generatedIdeas.map((idea, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{idea.title}</CardTitle>
                        <Badge className="bg-amber-100 text-amber-700">
                          {idea.styleMatch}% Match
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-700">{idea.description}</p>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-xs text-gray-600 mb-1">Estimated Cost</p>
                          <p className="font-bold text-green-700">
                            {formatCurrency(idea.estimatedCost.low)} - {formatCurrency(idea.estimatedCost.high)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-xs text-gray-600 mb-1">Estimated ROI</p>
                          <p className="font-bold text-blue-700">{idea.estimatedROI}%</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{idea.budgetLevel}</Badge>
                        <Badge variant="outline">{idea.laborComplexity}</Badge>
                        <Badge variant="outline">{idea.timeframe}</Badge>
                        {idea.diyFriendly && <Badge className="bg-green-100 text-green-700">DIY-Friendly</Badge>}
                      </div>

                      <Separator />

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {idea.keyFeatures.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                              <CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Materials</h4>
                        <div className="flex flex-wrap gap-1">
                          {idea.materials.slice(0, 4).map((material, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Recommendations</h4>
                        <ul className="space-y-1">
                          {idea.recommendations.slice(0, 3).map((rec, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                              <Info className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button 
                  onClick={generateRenovationIdeas} 
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate Different Ideas
                </Button>
              </>
            )}

            {generatedIdeas.length === 0 && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Palette className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Enter room details and click Generate to see renovation ideas</p>
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
