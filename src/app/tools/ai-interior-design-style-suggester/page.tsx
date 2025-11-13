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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette, Sparkles, BookOpen, AlertCircle, Loader2, Home, Lightbulb } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIInteriorDesignStyleSuggester() {
  const [roomType, setRoomType] = useState('Living Room');
  const [roomSize, setRoomSize] = useState('15x20 feet');
  const [currentStyle, setCurrentStyle] = useState('Outdated traditional');
  const [targetAudience, setTargetAudience] = useState('Young professionals');
  const [budget, setBudget] = useState(5000);

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-interior-design-style-suggester',
  });

  const handleGenerate = async () => {
    await generate({
      roomType,
      roomSize,
      currentStyle,
      targetAudience,
      budget,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Palette className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Interior Design Style Suggester</h1>
            <p className="text-muted-foreground mt-2">
              Get personalized interior design style recommendations with AI-powered analysis
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Style Suggester
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Room Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="roomType">Room Type *</Label>
                  <Select value={roomType} onValueChange={setRoomType}>
                    <SelectTrigger id="roomType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Living Room">Living Room</SelectItem>
                      <SelectItem value="Bedroom">Bedroom</SelectItem>
                      <SelectItem value="Kitchen">Kitchen</SelectItem>
                      <SelectItem value="Dining Room">Dining Room</SelectItem>
                      <SelectItem value="Home Office">Home Office</SelectItem>
                      <SelectItem value="Bathroom">Bathroom</SelectItem>
                      <SelectItem value="Nursery">Nursery</SelectItem>
                      <SelectItem value="Guest Room">Guest Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomSize">Room Size *</Label>
                  <Input
                    id="roomSize"
                    value={roomSize}
                    onChange={(e) => setRoomSize(e.target.value)}
                    placeholder="e.g., 15x20 feet or 300 sq ft"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentStyle">Current Style *</Label>
                  <Input
                    id="currentStyle"
                    value={currentStyle}
                    onChange={(e) => setCurrentStyle(e.target.value)}
                    placeholder="e.g., Traditional, Minimalist, Empty"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience / Who Lives Here *</Label>
                  <Input
                    id="targetAudience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g., Young family, Single professional"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="budget">Design Budget *</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    min={0}
                    step={500}
                  />
                  <p className="text-sm text-muted-foreground">
                    Budget: ${budget.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !roomType || !budget}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Design Ideas...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Design Suggestions
                    </>
                  )}
                </Button>
                {data && (
                  <Button onClick={reset} variant="outline" size="lg">
                    Reset
                  </Button>
                )}
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Error</p>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {data && (
            <>
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-6 w-6" />
                    Recommended Design Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                    <Badge className="mb-3">{data.primaryStyle?.name || 'Design Style'}</Badge>
                    <p className="text-lg">{data.primaryStyle?.description || data.description}</p>
                  </div>

                  {data.colorPalette && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Color Palette</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 border rounded-lg">
                            <div className="text-sm font-medium text-muted-foreground mb-2">Primary</div>
                            <div className="font-semibold">{data.colorPalette.primary}</div>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <div className="text-sm font-medium text-muted-foreground mb-2">Secondary</div>
                            <div className="font-semibold">{data.colorPalette.secondary}</div>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <div className="text-sm font-medium text-muted-foreground mb-2">Accent</div>
                            <div className="font-semibold">{data.colorPalette.accent}</div>
                          </div>
                        </div>
                        {data.colorPalette.description && (
                          <p className="mt-3 text-sm text-muted-foreground">{data.colorPalette.description}</p>
                        )}
                      </div>
                    </>
                  )}

                  {data.furnitureSuggestions && data.furnitureSuggestions.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Home className="h-5 w-5 text-blue-600" />
                          Furniture Suggestions
                        </h3>
                        <ul className="space-y-2">
                          {data.furnitureSuggestions.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.decorElements && data.decorElements.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-600" />
                          Decor Elements
                        </h3>
                        <ul className="space-y-2">
                          {data.decorElements.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.recommendations && data.recommendations.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Design Tips & Recommendations</h3>
                        <ul className="space-y-2">
                          {data.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">→</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.budgetBreakdown && (
                    <>
                      <Separator />
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-semibold mb-3">Budget Breakdown</h3>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground mb-1">Essential</div>
                            <div className="font-semibold">${data.budgetBreakdown.essential?.toLocaleString() || 'N/A'}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Recommended</div>
                            <div className="font-semibold">${data.budgetBreakdown.recommended?.toLocaleString() || 'N/A'}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Full Design</div>
                            <div className="font-semibold">${data.budgetBreakdown.full?.toLocaleString() || 'N/A'}</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {data.alternativeStyles && data.alternativeStyles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alternative Style Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {data.alternativeStyles.map((style: any, idx: number) => (
                        <div key={idx} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">{style.name || style.style}</h4>
                          <p className="text-sm text-muted-foreground">{style.description}</p>
                          {style.pros && style.pros.length > 0 && (
                            <ul className="mt-2 space-y-1">
                              {style.pros.map((pro: string, pIdx: number) => (
                                <li key={pIdx} className="text-sm flex items-start gap-2">
                                  <span className="text-green-600">✓</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to AI Interior Design Style Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is AI Interior Design Style Suggestion?</h2>
              <p>
                AI Interior Design Style Suggestion uses artificial intelligence to analyze your room specifications, preferences, and constraints to recommend personalized interior design styles, color palettes, furniture selections, and decor elements. This technology democratizes professional interior design expertise, making it accessible to homeowners, renters, real estate agents, and property stagers who want to create beautiful, functional spaces without hiring expensive design consultants.
              </p>
              <p>
                Traditional interior design services can cost anywhere from $50 to $200+ per hour, with full room designs ranging from $2,000 to $10,000 or more. AI-powered design suggestions provide instant, professional-quality recommendations at a fraction of the cost, allowing you to experiment with multiple styles and make informed decisions before investing in furniture and decor.
              </p>

              <h2>Why Use AI for Interior Design Recommendations?</h2>
              
              <h3>1. Instant Professional Expertise</h3>
              <p>
                AI design tools have been trained on millions of professional design projects, Pinterest boards, design magazines, and real-world implementations. They understand design principles like:
              </p>
              <ul>
                <li><strong>Color Theory</strong> - Harmonious color combinations that create desired moods</li>
                <li><strong>Spatial Planning</strong> - Optimal furniture arrangement for room flow and function</li>
                <li><strong>Style Coherence</strong> - Ensuring all elements work together cohesively</li>
                <li><strong>Proportion & Scale</strong> - Selecting appropriately sized pieces for your space</li>
                <li><strong>Lighting Design</strong> - Layering ambient, task, and accent lighting effectively</li>
              </ul>

              <h3>2. Personalization Based on Your Needs</h3>
              <p>
                Unlike generic design templates or Pinterest boards, AI considers your specific situation:
              </p>
              <ul>
                <li><strong>Room Dimensions</strong> - Recommendations scaled to your actual space size</li>
                <li><strong>Current Style</strong> - Building on what you have or starting fresh</li>
                <li><strong>Target Audience</strong> - Designs appropriate for families, professionals, seniors, etc.</li>
                <li><strong>Budget Constraints</strong> - Realistic suggestions within your financial parameters</li>
                <li><strong>Functional Requirements</strong> - Balancing aesthetics with practical needs</li>
              </ul>

              <h3>3. Cost-Effective Experimentation</h3>
              <p>
                Before committing thousands of dollars to furniture and decor, AI allows you to:
              </p>
              <ul>
                <li>Test multiple design styles virtually</li>
                <li>Compare different color schemes and palettes</li>
                <li>Evaluate furniture arrangements and layouts</li>
                <li>Understand what works best for your specific space</li>
                <li>Make confident purchasing decisions</li>
              </ul>

              <h2>Key Features of Our AI Design Tool</h2>

              <h3>Style Analysis & Recommendation</h3>
              <p>
                Our AI analyzes current design trends and classic styles to recommend the perfect aesthetic for your room. Whether you're drawn to:
              </p>
              <ul>
                <li><strong>Modern Minimalist</strong> - Clean lines, neutral colors, functional simplicity</li>
                <li><strong>Scandinavian</strong> - Light, airy, natural materials with hygge comfort</li>
                <li><strong>Mid-Century Modern</strong> - Retro-inspired with organic shapes and wood tones</li>
                <li><strong>Industrial</strong> - Exposed materials, metal accents, urban edge</li>
                <li><strong>Bohemian</strong> - Eclectic, colorful, layered textures and patterns</li>
                <li><strong>Transitional</strong> - Blend of traditional and contemporary elements</li>
                <li><strong>Coastal</strong> - Beach-inspired with blues, whites, and natural textures</li>
                <li><strong>Farmhouse</strong> - Rustic, warm, vintage-inspired comfort</li>
              </ul>

              <h3>Color Palette Generation</h3>
              <p>
                The AI generates comprehensive color palettes including:
              </p>
              <ul>
                <li><strong>Primary Colors</strong> - Main wall colors and large furniture pieces (60% of room)</li>
                <li><strong>Secondary Colors</strong> - Supporting colors for upholstery and medium-sized items (30%)</li>
                <li><strong>Accent Colors</strong> - Bold pops of color in accessories and artwork (10%)</li>
                <li><strong>Harmony Principles</strong> - Ensuring colors complement each other and create desired mood</li>
              </ul>

              <h3>Furniture Selection & Placement</h3>
              <p>
                Receive specific furniture recommendations with consideration for:
              </p>
              <ul>
                <li>Room dimensions and layout constraints</li>
                <li>Traffic flow and functional zones</li>
                <li>Appropriate scale and proportions</li>
                <li>Style consistency and material choices</li>
                <li>Budget-appropriate options</li>
              </ul>

              <h3>Decor & Accessory Suggestions</h3>
              <p>
                The finishing touches that bring a room together:
              </p>
              <ul>
                <li>Artwork and wall decor placement</li>
                <li>Window treatments and lighting fixtures</li>
                <li>Throw pillows, rugs, and textiles</li>
                <li>Plants and natural elements</li>
                <li>Storage and organizational pieces</li>
              </ul>

              <h2>How to Use the AI Interior Design Style Suggester</h2>

              <h3>Step 1: Define Your Room Type</h3>
              <p>
                Select the specific room you're designing. Different rooms have different functional requirements:
              </p>
              <ul>
                <li><strong>Living Room</strong> - Focus on conversation areas, entertainment, comfort</li>
                <li><strong>Bedroom</strong> - Prioritize relaxation, storage, personal retreat</li>
                <li><strong>Kitchen</strong> - Balance aesthetics with functionality and workflow</li>
                <li><strong>Home Office</strong> - Optimize for productivity, organization, professionalism</li>
                <li><strong>Bathroom</strong> - Emphasize spa-like atmosphere, storage, moisture resistance</li>
              </ul>

              <h3>Step 2: Provide Accurate Room Dimensions</h3>
              <p>
                Accurate measurements are crucial for appropriate furniture scaling. You can provide:
              </p>
              <ul>
                <li><strong>Length × Width</strong> - "15 x 20 feet" or "4.5 x 6 meters"</li>
                <li><strong>Total Square Footage</strong> - "300 sq ft" or "28 square meters"</li>
                <li><strong>Additional Details</strong> - Ceiling height, architectural features, windows</li>
              </ul>
              <p>
                <strong>Measuring Tip:</strong> For irregular rooms, measure the largest dimensions and note any alcoves, bay windows, or architectural quirks in the additional details.
              </p>

              <h3>Step 3: Describe Current Style</h3>
              <p>
                Be honest about what you're starting with:
              </p>
              <ul>
                <li><strong>Empty Room</strong> - Blank slate for complete design freedom</li>
                <li><strong>Outdated Traditional</strong> - Existing furniture needs updating or replacing</li>
                <li><strong>College Dorm Aesthetic</strong> - Mismatched, temporary pieces</li>
                <li><strong>Partially Furnished</strong> - Some good pieces to build around</li>
                <li><strong>Need Refresh</strong> - Good bones but needs updating</li>
              </ul>

              <h3>Step 4: Identify Target Audience</h3>
              <p>
                Who will be using this space? This influences both aesthetics and functionality:
              </p>
              <ul>
                <li><strong>Young Family with Kids</strong> - Durable, washable, child-safe materials</li>
                <li><strong>Professional Couple</strong> - Sophisticated, entertainer-friendly, low-maintenance</li>
                <li><strong>Empty Nesters</strong> - Comfort, elegance, display space for collections</li>
                <li><strong>College Student</strong> - Budget-friendly, multi-functional, style-conscious</li>
                <li><strong>Retiree</strong> - Comfortable, accessible, classic appeal</li>
                <li><strong>Rental Property</strong> - Durable, neutral, broad appeal, ROI-focused</li>
              </ul>

              <h3>Step 5: Set Realistic Budget</h3>
              <p>
                Budget parameters help the AI recommend achievable options:
              </p>
              <ul>
                <li><strong>Under $2,000</strong> - Budget-friendly, DIY-friendly, key pieces only</li>
                <li><strong>$2,000 - $5,000</strong> - Solid mid-range furniture, some custom pieces</li>
                <li><strong>$5,000 - $10,000</strong> - Quality furniture, professional touches, accessories</li>
                <li><strong>$10,000+</strong> - Premium materials, custom pieces, designer items</li>
              </ul>
              <p>
                <strong>Budget Allocation Rule:</strong> Typically, 60-70% should go to major furniture pieces, 20-25% to lighting and window treatments, and 10-15% to decor and accessories.
              </p>

              <h2>Best Practices for Interior Design Success</h2>

              <h3>1. Start with a Focal Point</h3>
              <p>
                Every room needs a focal point - the first thing your eye goes to when entering:
              </p>
              <ul>
                <li><strong>Living Room</strong> - Fireplace, large artwork, statement sofa, entertainment center</li>
                <li><strong>Bedroom</strong> - Headboard wall, window with great view, accent wall</li>
                <li><strong>Dining Room</strong> - Chandelier over table, buffet with artwork</li>
                <li><strong>Home Office</strong> - Desk area, bookshelf wall, window workspace</li>
              </ul>

              <h3>2. Follow the 60-30-10 Color Rule</h3>
              <p>
                This golden ratio creates visual harmony:
              </p>
              <ul>
                <li><strong>60% Dominant Color</strong> - Walls, large furniture (usually neutral)</li>
                <li><strong>30% Secondary Color</strong> - Upholstery, curtains, area rugs</li>
                <li><strong>10% Accent Color</strong> - Pillows, artwork, decorative objects</li>
              </ul>

              <h3>3. Layer Lighting Properly</h3>
              <p>
                Good lighting requires three layers:
              </p>
              <ul>
                <li><strong>Ambient Lighting</strong> - Overhead fixtures providing general illumination</li>
                <li><strong>Task Lighting</strong> - Focused light for specific activities (reading, cooking)</li>
                <li><strong>Accent Lighting</strong> - Decorative lighting highlighting art, architecture, plants</li>
              </ul>

              <h3>4. Scale Furniture to Your Space</h3>
              <p>
                Common sizing guidelines:
              </p>
              <ul>
                <li><strong>Small Room (under 200 sq ft)</strong> - Low-profile furniture, multi-functional pieces</li>
                <li><strong>Medium Room (200-400 sq ft)</strong> - Standard-sized furniture, sectionals okay</li>
                <li><strong>Large Room (400+ sq ft)</strong> - Oversized pieces, multiple seating areas</li>
                <li><strong>Rug Sizing</strong> - Front legs of furniture should sit on the rug</li>
                <li><strong>Coffee Table</strong> - Should be 2/3 the length of your sofa</li>
              </ul>

              <h3>5. Mix High and Low</h3>
              <p>
                You don't need to spend a fortune on everything:
              </p>
              <ul>
                <li><strong>Invest In</strong> - Sofa, bed, dining table (used daily, hard to replace)</li>
                <li><strong>Save On</strong> - Decor, side tables, lamps (easy to swap, less wear)</li>
                <li><strong>Splurge Items</strong> - Pieces that are focal points or high-traffic</li>
                <li><strong>Budget Items</strong> - Trendy pieces you'll want to update eventually</li>
              </ul>

              <h2>Common Interior Design Mistakes to Avoid</h2>

              <h3>1. Pushing All Furniture Against Walls</h3>
              <p>
                <strong>The Problem:</strong> Creates a bowling alley effect and makes rooms feel less intimate.
              </p>
              <p>
                <strong>The Solution:</strong> Float furniture away from walls to create conversation zones. Even pulling pieces out 12-18 inches makes a dramatic difference.
              </p>

              <h3>2. Choosing Paint Colors First</h3>
              <p>
                <strong>The Problem:</strong> It's easier to match paint to fabric than vice versa.
              </p>
              <p>
                <strong>The Solution:</strong> Select major furniture and textiles first, then choose paint colors that complement them. Paint is the easiest element to change.
              </p>

              <h3>3. Ignoring Lighting</h3>
              <p>
                <strong>The Problem:</strong> Relying only on overhead lighting creates harsh shadows and flat atmosphere.
              </p>
              <p>
                <strong>The Solution:</strong> Plan for at least 3-5 light sources per room at different heights. Include floor lamps, table lamps, and possibly wall sconces.
              </p>

              <h3>4. Wrong Rug Size</h3>
              <p>
                <strong>The Problem:</strong> Tiny rugs make rooms look choppy and furniture appear to float.
              </p>
              <p>
                <strong>The Solution:</strong> In living rooms, all front furniture legs should sit on the rug. In dining rooms, rug should extend 24-30 inches beyond the table on all sides.
              </p>

              <h3>5. Matching Everything Too Perfectly</h3>
              <p>
                <strong>The Problem:</strong> Furniture sets and perfectly matched items look showroom-stiff, not lived-in.
              </p>
              <p>
                <strong>The Solution:</strong> Mix different woods, metals, and finishes. Aim for coordinated, not identical. Layer textures and patterns for depth.
              </p>

              <h3>6. Neglecting Scale and Proportion</h3>
              <p>
                <strong>The Problem:</strong> Tiny furniture in a large room (or vice versa) throws off the entire design.
              </p>
              <p>
                <strong>The Solution:</strong> Create a floor plan to scale before purchasing. Consider visual weight, not just physical dimensions.
              </p>

              <h3>7. Hanging Artwork Too High</h3>
              <p>
                <strong>The Problem:</strong> Art hung too high disconnects from furniture and viewers.
              </p>
              <p>
                <strong>The Solution:</strong> Center artwork at 57-60 inches from the floor (eye level). Above furniture, leave 6-8 inches between the furniture top and bottom of frame.
              </p>

              <h2>Real-World Applications</h2>

              <h3>For Homeowners</h3>
              <p>
                <strong>Scenario:</strong> You've just bought your first home and need to furnish multiple rooms on a budget.
              </p>
              <p>
                <strong>AI Application:</strong> Generate designs for each room with budget constraints. The AI helps prioritize spending, suggesting where to invest (master bedroom, living room) versus save (guest bedroom, home office). You get a cohesive whole-house aesthetic without hiring a designer.
              </p>

              <h3>For Real Estate Agents</h3>
              <p>
                <strong>Scenario:</strong> Vacant listing isn't showing well; buyers can't visualize the potential.
              </p>
              <p>
                <strong>AI Application:</strong> Generate virtual staging concepts to show in listing photos or during showings. Demonstrate how awkward spaces can function as home offices, nurseries, or reading nooks. Justify the asking price by showing the home's potential.
              </p>

              <h3>For Property Stagers</h3>
              <p>
                <strong>Scenario:</strong> You need fresh design ideas for staging inventory and different property types.
              </p>
              <p>
                <strong>AI Application:</strong> Quickly generate multiple design concepts for various home styles and target buyers. Identify which existing inventory pieces work for upcoming projects. Plan furniture and decor purchases to maximize versatility across properties.
              </p>

              <h3>For Landlords & Property Managers</h3>
              <p>
                <strong>Scenario:</strong> Rental unit needs updating to justify higher rent and attract quality tenants.
              </p>
              <p>
                <strong>AI Application:</strong> Get design recommendations that balance style with durability and budget. Focus on high-impact, low-cost improvements. Create aspirational yet practical spaces that photograph well for listings.
              </p>

              <h3>For DIY Renovators</h3>
              <p>
                <strong>Scenario:</strong> You're comfortable with the work but unsure about design decisions.
              </p>
              <p>
                <strong>AI Application:</strong> Validate your design instincts before committing to purchases or paint colors. Discover professional tricks for making small spaces feel larger or awkward layouts more functional. Get specific product type recommendations to research and source yourself.
              </p>

              <h2>Understanding Design Styles in Depth</h2>

              <h3>Modern Minimalist</h3>
              <p>
                <strong>Core Principles:</strong> "Less is more" - clean lines, open space, functional simplicity, neutral color palette with strategic pops of color, lack of clutter and ornamentation.
              </p>
              <p>
                <strong>Best For:</strong> Small apartments, urban condos, professionals who value simplicity, people who don't accumulate many possessions.
              </p>
              <p>
                <strong>Key Elements:</strong> Sleek furniture with no visible hardware, monochromatic or neutral colors with one accent color, hidden storage solutions, statement lighting, large windows emphasized.
              </p>

              <h3>Scandinavian (Scandi)</h3>
              <p>
                <strong>Core Principles:</strong> Hygge (coziness), light and airy, natural materials, functional beauty, connection to nature, warm minimalism.
              </p>
              <p>
                <strong>Best For:</strong> Cold climates, small homes, families valuing comfort and function, people who like natural materials, anyone seeking a calming environment.
              </p>
              <p>
                <strong>Key Elements:</strong> Light wood tones (birch, ash, pine), white walls and lots of natural light, cozy textiles (wool, linen, sheepskin), simple lines with organic shapes, plants and natural elements.
              </p>

              <h3>Industrial</h3>
              <p>
                <strong>Core Principles:</strong> Raw, unfinished aesthetic, exposed structural elements, mix of old and new, urban warehouse vibe, emphasis on functionality.
              </p>
              <p>
                <strong>Best For:</strong> Lofts and urban apartments, creative professionals, those who like edgy aesthetics, open-concept spaces, vintage furniture collectors.
              </p>
              <p>
                <strong>Key Elements:</strong> Exposed brick, concrete, or ductwork, metal accents and fixtures, reclaimed wood, leather furniture, Edison bulb lighting, neutral color palette with metal tones.
              </p>

              <h3>Bohemian (Boho)</h3>
              <p>
                <strong>Core Principles:</strong> Eclectic, artistic, free-spirited, global influences, layered textures and patterns, vibrant colors, personal collections displayed.
              </p>
              <p>
                <strong>Best For:</strong> Creative types, world travelers, collectors, those who reject minimalism, renters who want personality, people comfortable with visual abundance.
              </p>
              <p>
                <strong>Key Elements:</strong> Mix of patterns (paisley, ikat, geometric), lots of plants, vintage and handmade items, floor pillows and poufs, macramé and woven textiles, warm jewel tones.
              </p>

              <h2>Maximizing Your Design Budget</h2>

              <h3>Phased Approach</h3>
              <p>
                You don't have to complete everything at once. Prioritize in this order:
              </p>
              <ol>
                <li><strong>Phase 1 - Essentials</strong> - Sofa, bed, dining table, basic lighting (60% of budget)</li>
                <li><strong>Phase 2 - Comfort</strong> - Additional seating, bedroom furniture, window treatments (25%)</li>
                <li><strong>Phase 3 - Finishing</strong> - Artwork, decor, plants, upgrades (15%)</li>
              </ol>

              <h3>High-Impact, Low-Cost Updates</h3>
              <p>
                These changes deliver major visual impact without breaking the bank:
              </p>
              <ul>
                <li><strong>Paint</strong> - $150-400 transforms an entire room</li>
                <li><strong>New Hardware</strong> - $50-200 updates kitchen/bathroom cabinets dramatically</li>
                <li><strong>Lighting Fixtures</strong> - $100-300 changes room's character completely</li>
                <li><strong>Textiles</strong> - $200-500 for new throw pillows, curtains, area rug adds freshness</li>
                <li><strong>Statement Piece</strong> - One bold furniture item or artwork ($300-800) elevates entire room</li>
              </ul>

              <h3>Smart Splurge vs. Save Decisions</h3>
              <p>
                <strong>Worth the Investment:</strong>
              </p>
              <ul>
                <li>Quality sofa - used daily, expensive to replace, visible focal point</li>
                <li>Good mattress - health impact, daily use, lasts 8-10 years</li>
                <li>Solid wood dining table - multi-generational durability, timeless</li>
                <li>Quality window treatments - custom fit, light control, insulation value</li>
                <li>Durable area rugs - high traffic, anchors room design</li>
              </ul>
              <p>
                <strong>Safe to Save On:</strong>
              </p>
              <ul>
                <li>Trendy accent chairs - styles change, easy to replace</li>
                <li>Side tables - low wear, less critical to comfort</li>
                <li>Decorative pillows - seasonal updates, personal preference changes</li>
                <li>Artwork and accessories - can upgrade over time</li>
                <li>Lamps - technology improves, style preferences evolve</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                AI interior design style suggestion democratizes professional design expertise, making beautiful, functional spaces accessible to everyone regardless of budget or design experience. By providing personalized recommendations based on your specific room, needs, and constraints, AI tools eliminate the guesswork from interior design decisions.
              </p>
              <p>
                Whether you're furnishing your first apartment, updating a single room, staging a property for sale, or planning a whole-home renovation, AI design suggestions provide the professional guidance you need to create spaces you'll love living in. The key is providing accurate information, being open to suggestions, and implementing recommendations in a phased approach that respects your budget and timeline.
              </p>
              <p>
                Remember, great design isn't about expensive furniture or following trends blindly - it's about creating spaces that function well, reflect your personality, and bring you joy every day. AI tools help you achieve that goal efficiently and affordably.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
