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
import { LayoutGrid, Sparkles, BookOpen, AlertCircle, Loader2, Home, Ruler } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIFloorPlanGenerator() {
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [totalSquareFeet, setTotalSquareFeet] = useState(2000);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [specialRequirements, setSpecialRequirements] = useState('');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-floor-plan-generator',
  });

  const handleGenerate = async () => {
    await generate({
      propertyType,
      totalSquareFeet,
      bedrooms,
      bathrooms,
      specialRequirements: specialRequirements || undefined,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <LayoutGrid className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Floor Plan Generator</h1>
            <p className="text-muted-foreground mt-2">
              Generate optimized floor plan layouts with AI-powered spatial design analysis
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Floor Plan Generator
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger id="propertyType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single-family home">Single-family home</SelectItem>
                      <SelectItem value="Condo">Condo</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Duplex">Duplex</SelectItem>
                      <SelectItem value="Multi-family">Multi-family</SelectItem>
                      <SelectItem value="ADU">ADU (Accessory Dwelling Unit)</SelectItem>
                      <SelectItem value="Tiny home">Tiny home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalSquareFeet">Total Square Feet *</Label>
                  <Input
                    id="totalSquareFeet"
                    type="number"
                    value={totalSquareFeet}
                    onChange={(e) => setTotalSquareFeet(Number(e.target.value))}
                    min={100}
                    step={100}
                  />
                  <p className="text-sm text-muted-foreground">
                    {totalSquareFeet.toLocaleString()} sq ft
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms *</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    min={1}
                    max={10}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms *</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    min={1}
                    max={10}
                    step={0.5}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                <Textarea
                  id="specialRequirements"
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder="e.g., Home office, open concept, wheelchair accessible, separate laundry room, walk-in closets"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !propertyType || !totalSquareFeet || !bedrooms || !bathrooms}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Floor Plan...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Floor Plan
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
                    <LayoutGrid className="h-6 w-6" />
                    Generated Floor Plan Layout
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{data.layoutName || 'Floor Plan Concept'}</h3>
                    <p className="text-muted-foreground">{data.description || data.overview}</p>
                  </div>

                  {data.roomDimensions && data.roomDimensions.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Ruler className="h-5 w-5 text-blue-600" />
                          Room Dimensions & Layout
                        </h3>
                        <div className="grid gap-3">
                          {data.roomDimensions.map((room: any, idx: number) => (
                            <div key={idx} className="p-4 border rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold">{room.name || room.room}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {room.dimensions || room.size}
                                  </p>
                                </div>
                                {room.squareFeet && (
                                  <Badge variant="outline">{room.squareFeet} sq ft</Badge>
                                )}
                              </div>
                              {room.notes && (
                                <p className="text-sm mt-2 text-muted-foreground">{room.notes}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data.features && data.features.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Home className="h-5 w-5 text-green-600" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {data.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.layoutPrinciples && data.layoutPrinciples.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Design Principles Applied</h3>
                        <ul className="space-y-2">
                          {data.layoutPrinciples.map((principle: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">→</span>
                              <span>{principle}</span>
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
                        <h3 className="font-semibold text-lg mb-3">Implementation Recommendations</h3>
                        <ul className="space-y-2">
                          {data.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.trafficFlow && (
                    <>
                      <Separator />
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Traffic Flow Analysis</h3>
                        <p className="text-sm">{data.trafficFlow}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {data.alternativeLayouts && data.alternativeLayouts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alternative Layout Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {data.alternativeLayouts.map((layout: any, idx: number) => (
                        <div key={idx} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">{layout.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{layout.description}</p>
                          {layout.pros && layout.pros.length > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-1">Advantages:</div>
                              <ul className="space-y-1">
                                {layout.pros.map((pro: string, pIdx: number) => (
                                  <li key={pIdx} className="text-sm flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
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
              <CardTitle>Complete Guide to AI Floor Plan Generation</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is AI Floor Plan Generation?</h2>
              <p>
                AI Floor Plan Generation uses artificial intelligence to design optimal spatial layouts for residential and commercial properties. By analyzing your property specifications, square footage requirements, and special needs, AI creates efficient, functional floor plans that maximize space utilization, enhance traffic flow, and meet building code requirements.
              </p>
              <p>
                Traditional architectural services for floor plan design can cost $1,500 to $5,000 or more, with multiple revision rounds and weeks of waiting. AI-powered floor plan generation provides instant, professional-quality layouts that consider spatial relationships, proportion guidelines, and functional zones - all at a fraction of the cost and time.
              </p>

              <h2>Why Use AI for Floor Plan Design?</h2>

              <h3>1. Instant Professional Spatial Design</h3>
              <p>
                AI floor plan generators have been trained on thousands of professionally designed homes, architectural standards, and building codes. They understand:
              </p>
              <ul>
                <li><strong>Space Planning Principles</strong> - Optimal room sizes and proportions</li>
                <li><strong>Traffic Flow Patterns</strong> - Efficient circulation between spaces</li>
                <li><strong>Functional Adjacencies</strong> - Which rooms should be near each other</li>
                <li><strong>Building Code Compliance</strong> - Minimum room sizes, egress requirements</li>
                <li><strong>Structural Efficiency</strong> - Logical placement of load-bearing elements</li>
              </ul>

              <h3>2. Optimization for Your Specific Needs</h3>
              <p>
                Unlike template floor plans, AI considers your unique requirements:
              </p>
              <ul>
                <li><strong>Total Square Footage</strong> - Maximizes efficiency within your constraints</li>
                <li><strong>Room Count</strong> - Balances bedroom/bathroom needs with living spaces</li>
                <li><strong>Property Type</strong> - Adjusts for single-family, condo, ADU characteristics</li>
                <li><strong>Special Requirements</strong> - Accommodates accessibility, home office, or unique needs</li>
                <li><strong>Lifestyle Factors</strong> - Considers how you actually use your space</li>
              </ul>

              <h3>3. Cost-Effective Design Exploration</h3>
              <p>
                Before committing to expensive architectural drawings:
              </p>
              <ul>
                <li>Explore multiple layout options quickly</li>
                <li>Test different room configurations</li>
                <li>Understand trade-offs between different approaches</li>
                <li>Validate your vision before hiring professionals</li>
                <li>Make informed decisions about space allocation</li>
              </ul>

              <h2>Key Components of Effective Floor Plans</h2>

              <h3>Functional Zones</h3>
              <p>
                Well-designed floor plans organize space into distinct functional zones:
              </p>
              <ul>
                <li><strong>Public Zones</strong> - Living room, dining room, kitchen (social spaces)</li>
                <li><strong>Private Zones</strong> - Bedrooms, bathrooms, home office (personal spaces)</li>
                <li><strong>Service Zones</strong> - Laundry, storage, garage, mudroom (functional spaces)</li>
                <li><strong>Transition Zones</strong> - Hallways, foyers, landings (circulation spaces)</li>
              </ul>

              <h3>Room Size Guidelines</h3>
              <p>
                Standard minimum sizes for comfortable, functional rooms:
              </p>
              <ul>
                <li><strong>Master Bedroom</strong> - 200-400 sq ft (14x14 to 16x20)</li>
                <li><strong>Secondary Bedrooms</strong> - 120-200 sq ft (10x12 to 12x14)</li>
                <li><strong>Master Bathroom</strong> - 100-150 sq ft (minimum 5x8)</li>
                <li><strong>Full Bathroom</strong> - 35-50 sq ft (minimum 5x7)</li>
                <li><strong>Half Bath</strong> - 20-30 sq ft (minimum 4x5)</li>
                <li><strong>Kitchen</strong> - 150-300 sq ft (varies by layout type)</li>
                <li><strong>Living Room</strong> - 250-400 sq ft (12x20 to 16x20)</li>
                <li><strong>Dining Room</strong> - 140-200 sq ft (10x14 to 12x16)</li>
              </ul>

              <h3>Circulation and Traffic Flow</h3>
              <p>
                Efficient movement through a home requires:
              </p>
              <ul>
                <li><strong>Hallway Width</strong> - Minimum 36 inches, 42-48 inches preferred</li>
                <li><strong>Doorways</strong> - Standard 32-36 inches, accessibility 36 inches minimum</li>
                <li><strong>Room Entry</strong> - Avoid walking through one bedroom to reach another</li>
                <li><strong>Kitchen Work Triangle</strong> - Fridge, sink, stove should form 12-26 ft triangle</li>
                <li><strong>Bathroom Privacy</strong> - Not visible from main living areas or entry</li>
              </ul>

              <h2>How to Use the AI Floor Plan Generator</h2>

              <h3>Step 1: Select Property Type</h3>
              <p>
                Different property types have different design considerations:
              </p>
              <ul>
                <li><strong>Single-Family Home</strong> - Maximum flexibility, can spread out, multiple stories possible</li>
                <li><strong>Condo</strong> - Shared walls, compact efficiency, vertical orientation common</li>
                <li><strong>Townhouse</strong> - Linear layouts, multiple levels, efficient vertical circulation</li>
                <li><strong>Duplex</strong> - Mirrored or stacked units, shared central wall, separate entrances</li>
                <li><strong>ADU</strong> - Compact, efficient, often open concept, code restrictions</li>
                <li><strong>Tiny Home</strong> - Maximum space efficiency, multi-function areas, creative storage</li>
              </ul>

              <h3>Step 2: Determine Total Square Footage</h3>
              <p>
                Your total square footage determines layout possibilities:
              </p>
              <ul>
                <li><strong>Under 1,000 sq ft</strong> - Compact layouts, open concept, combined spaces</li>
                <li><strong>1,000-1,500 sq ft</strong> - Modest homes, 2-3 bedrooms, efficient design critical</li>
                <li><strong>1,500-2,500 sq ft</strong> - Standard family homes, 3-4 bedrooms, good flexibility</li>
                <li><strong>2,500-4,000 sq ft</strong> - Spacious homes, 4-5 bedrooms, dedicated room options</li>
                <li><strong>4,000+ sq ft</strong> - Large homes, multiple living areas, luxury features possible</li>
              </ul>
              <p>
                <strong>Square Footage Rule of Thumb:</strong> Average American homes are 2,000-2,500 sq ft. Plan for 200-400 sq ft per person for comfortable living.
              </p>

              <h3>Step 3: Specify Bedroom and Bathroom Count</h3>
              <p>
                Consider current and future needs:
              </p>
              <ul>
                <li><strong>1 Bedroom</strong> - Singles, couples, small ADUs (600-900 sq ft typical)</li>
                <li><strong>2 Bedrooms</strong> - Small families, roommate situations (900-1,200 sq ft)</li>
                <li><strong>3 Bedrooms</strong> - Standard family home (1,200-2,000 sq ft)</li>
                <li><strong>4+ Bedrooms</strong> - Large families, home office, guest room (2,000+ sq ft)</li>
              </ul>
              <p>
                <strong>Bathroom Planning:</strong> Minimum one bathroom per two bedrooms. Consider powder rooms (half baths) for entertaining. Master bedrooms should have ensuite bathrooms in homes over 1,500 sq ft.
              </p>

              <h3>Step 4: Define Special Requirements</h3>
              <p>
                Be specific about unique needs and preferences:
              </p>
              <ul>
                <li><strong>Work-from-Home</strong> - Dedicated office with door, near exterior for light</li>
                <li><strong>Accessibility</strong> - Zero-step entry, wider halls/doors, bedroom/bath on main level</li>
                <li><strong>Multi-Generational</strong> - Separate suites, secondary kitchens, privacy zones</li>
                <li><strong>Entertaining</strong> - Open concept, flow to outdoor spaces, large kitchen</li>
                <li><strong>Large Family</strong> - Homework zones, storage, multiple bathrooms</li>
                <li><strong>Pets</strong> - Mudroom for washing, durable floors, fenced yard access</li>
              </ul>

              <h2>Floor Plan Layout Styles</h2>

              <h3>Open Concept</h3>
              <p>
                <strong>Description:</strong> Kitchen, dining, and living areas flow together in one large space with minimal walls.
              </p>
              <p>
                <strong>Advantages:</strong> Feels spacious, great for entertaining, excellent natural light, family connection, flexible furniture arrangement.
              </p>
              <p>
                <strong>Disadvantages:</strong> Noise travels, cooking smells spread, less privacy, requires tidiness, can feel cold/cavernous.
              </p>
              <p>
                <strong>Best For:</strong> Modern lifestyles, entertainers, small spaces that need to feel larger, families who want togetherness.
              </p>

              <h3>Traditional/Closed Floor Plan</h3>
              <p>
                <strong>Description:</strong> Separate, defined rooms with doors and walls between spaces.
              </p>
              <p>
                <strong>Advantages:</strong> Noise control, temperature zones, privacy, formal entertaining spaces, hides clutter, retains classic appeal.
              </p>
              <p>
                <strong>Disadvantages:</strong> Feels smaller, less natural light, isolated while cooking, harder to supervise kids.
              </p>
              <p>
                <strong>Best For:</strong> Historic homes, formal lifestyles, multi-generational living, those who value privacy.
              </p>

              <h3>Split Bedroom Plan</h3>
              <p>
                <strong>Description:</strong> Master suite on one side of home, other bedrooms on opposite side, living spaces in between.
              </p>
              <p>
                <strong>Advantages:</strong> Master privacy, noise separation, ideal for guests, great for families with teens, aging-in-place friendly.
              </p>
              <p>
                <strong>Disadvantages:</strong> Requires more square footage, longer hallways, kids farther from parents (young families).
              </p>
              <p>
                <strong>Best For:</strong> Families with older children, frequent hosts, those who value master suite privacy.
              </p>

              <h3>Single-Story vs. Multi-Story</h3>
              <p>
                <strong>Single-Story (Ranch) Advantages:</strong>
              </p>
              <ul>
                <li>Aging-in-place friendly (no stairs)</li>
                <li>Easier to evacuate in emergencies</li>
                <li>Lower maintenance costs</li>
                <li>Better for those with mobility issues</li>
                <li>Outdoor access from more rooms</li>
              </ul>
              <p>
                <strong>Multi-Story Advantages:</strong>
              </p>
              <ul>
                <li>More square footage on smaller lot</li>
                <li>Better views from upper floors</li>
                <li>Natural separation of public/private zones</li>
                <li>Lower heating/cooling costs</li>
                <li>Typically more affordable per square foot</li>
              </ul>

              <h2>Best Practices for Functional Floor Plans</h2>

              <h3>1. Kitchen Design Principles</h3>
              <p>
                The kitchen work triangle remains fundamental:
              </p>
              <ul>
                <li><strong>Refrigerator to Sink</strong> - 4-7 feet</li>
                <li><strong>Sink to Stove</strong> - 4-6 feet</li>
                <li><strong>Stove to Refrigerator</strong> - 4-9 feet</li>
                <li><strong>Total Triangle</strong> - 12-26 feet total perimeter</li>
                <li><strong>Traffic Flow</strong> - Don't allow major traffic through the triangle</li>
              </ul>

              <h3>2. Bathroom Placement Strategy</h3>
              <ul>
                <li>Stack bathrooms vertically (multi-story) to save on plumbing</li>
                <li>Group bathrooms near existing plumbing for renovations</li>
                <li>Ensure powder room isn't visible from main entry or living areas</li>
                <li>Master bath should connect directly to master bedroom only</li>
                <li>Jack-and-Jill bathrooms work for kids sharing, but hurt resale</li>
              </ul>

              <h3>3. Natural Light Optimization</h3>
              <ul>
                <li>Living areas benefit from south-facing windows (northern hemisphere)</li>
                <li>Kitchen should have windows over sink (most time-spent task)</li>
                <li>Bedrooms should have at least two windows for cross-ventilation</li>
                <li>Avoid north-facing windows in cold climates (heat loss)</li>
                <li>Consider skylights for interior bathrooms and hallways</li>
              </ul>

              <h3>4. Storage Planning</h3>
              <p>
                Adequate storage is crucial for home satisfaction:
              </p>
              <ul>
                <li><strong>Coat Closet</strong> - Near main entry, 2-3 feet deep</li>
                <li><strong>Linen Closet</strong> - Near bathrooms, 16-24 inches deep</li>
                <li><strong>Pantry</strong> - In or near kitchen, walk-in preferred if space allows</li>
                <li><strong>Bedroom Closets</strong> - Minimum 4 feet wide, master walk-in if possible</li>
                <li><strong>Utility Closet</strong> - For vacuum, cleaning supplies, water heater</li>
              </ul>

              <h2>Common Floor Plan Mistakes to Avoid</h2>

              <h3>1. Inadequate Entryway</h3>
              <p>
                <strong>The Problem:</strong> Front door opens directly into living room with no transition space.
              </p>
              <p>
                <strong>The Solution:</strong> Create a defined entry with coat closet, place for shoes/bags. Even small foyers (4x6 feet) make huge difference in functionality and home feel.
              </p>

              <h3>2. Wasted Hallway Space</h3>
              <p>
                <strong>The Problem:</strong> Long, wide hallways consume valuable square footage without adding utility.
              </p>
              <p>
                <strong>The Solution:</strong> Minimize hallway length by efficient room arrangement. If long hallways exist, add built-in storage, niches for art, or reading nooks.
              </p>

              <h3>3. Poor Kitchen-Dining Relationship</h3>
              <p>
                <strong>The Problem:</strong> Kitchen and dining room far apart or require walking through other spaces.
              </p>
              <p>
                <strong>The Solution:</strong> Kitchen and dining should be adjacent or open to each other. Maximum 15 feet between stove and table for practical serving.
              </p>

              <h3>4. Bathroom Visibility Issues</h3>
              <p>
                <strong>The Problem:</strong> Bathroom visible from living areas or front entry when door opens.
              </p>
              <p>
                <strong>The Solution:</strong> Position bathroom doors on hallways or private zones. Use pocket doors if swinging doors would be visible. Consider short privacy hallway.
              </p>

              <h3>5. Single-Purpose Rooms</h3>
              <p>
                <strong>The Problem:</strong> Formal dining rooms or living rooms used only on holidays waste valuable space.
              </p>
              <p>
                <strong>The Solution:</strong> Design flexible spaces: dining room doubles as home office, formal living becomes playroom, guest room includes office setup.
              </p>

              <h3>6. Inadequate Natural Light</h3>
              <p>
                <strong>The Problem:</strong> Deep floor plans create dark interior spaces dependent on artificial lighting.
              </p>
              <p>
                <strong>The Solution:</strong> Limit depth of floor plan to 30-32 feet for single-loaded (windows one side) rooms. Use skylights, clerestory windows, or interior windows for inner spaces.
              </p>

              <h3>7. Bedroom Over Garage</h3>
              <p>
                <strong>The Problem:</strong> Noise, temperature, and air quality issues from placing bedroom above garage.
              </p>
              <p>
                <strong>The Solution:</strong> Place bathrooms, closets, or storage above garage. If bedroom necessary, ensure heavy insulation and vapor barriers.
              </p>

              <h2>Real-World Applications</h2>

              <h3>For New Home Builders</h3>
              <p>
                <strong>Scenario:</strong> You're building a custom home on a lot you've purchased.
              </p>
              <p>
                <strong>AI Application:</strong> Generate multiple floor plan options before hiring an architect. Test different bedroom configurations, garage placements, and square footage allocations. Use AI concepts to communicate your vision clearly to professionals, saving design revision time and costs.
              </p>

              <h3>For Home Renovators</h3>
              <p>
                <strong>Scenario:</strong> Your layout feels cramped or dysfunctional, and you're considering walls removal or additions.
              </p>
              <p>
                <strong>AI Application:</strong> Input your current square footage and desired room count to see optimized layouts. Identify whether your issues stem from poor layout vs. insufficient space. Visualize how removing walls or adding square footage would improve flow before contracting work.
              </p>

              <h3>For ADU Developers</h3>
              <p>
                <strong>Scenario:</strong> You're adding an accessory dwelling unit to generate rental income or house family.
              </p>
              <p>
                <strong>AI Application:</strong> Generate efficient, code-compliant ADU layouts for your specific square footage limits (often 800-1,200 sq ft). Maximize livability while minimizing construction costs through efficient design.
              </p>

              <h3>For Real Estate Investors</h3>
              <p>
                <strong>Scenario:</strong> Evaluating a property's floor plan efficiency before purchase.
              </p>
              <p>
                <strong>AI Application:</strong> Compare existing floor plan to AI-optimized version with same square footage. Identify costly layout flaws that might impact resale. Estimate renovation potential to improve floor plan and increase property value.
              </p>

              <h3>For Tiny Home Enthusiasts</h3>
              <p>
                <strong>Scenario:</strong> Designing a 400-600 sq ft tiny home that doesn't feel cramped.
              </p>
              <p>
                <strong>AI Application:</strong> Generate space-efficient layouts with multi-function areas, clever storage, and good flow. Learn how professionals maximize small footprints. Test different configurations before committing to expensive custom builds.
              </p>

              <h2>Understanding Square Footage Allocation</h2>

              <h3>Typical Percentages for 2,000 Sq Ft Home</h3>
              <ul>
                <li><strong>Bedrooms</strong> - 25-30% (500-600 sq ft total)</li>
                <li><strong>Bathrooms</strong> - 10-12% (200-240 sq ft total)</li>
                <li><strong>Living/Family Rooms</strong> - 20-25% (400-500 sq ft)</li>
                <li><strong>Kitchen</strong> - 8-10% (160-200 sq ft)</li>
                <li><strong>Dining Room</strong> - 5-7% (100-140 sq ft)</li>
                <li><strong>Hallways/Circulation</strong> - 10-12% (200-240 sq ft)</li>
                <li><strong>Storage/Utility</strong> - 5-8% (100-160 sq ft)</li>
                <li><strong>Garage (if attached)</strong> - 20-25% (400-500 sq ft, not in living area)</li>
              </ul>

              <h3>Efficiency Ratio</h3>
              <p>
                A well-designed floor plan has a circulation efficiency of 12-15%, meaning hallways and other circulation space consume only 12-15% of total area. Higher percentages indicate wasted space; lower may feel cramped.
              </p>

              <h2>Working with AI Floor Plan Results</h2>

              <h3>Using AI Plans with Professionals</h3>
              <p>
                AI-generated floor plans are starting points, not construction documents:
              </p>
              <ul>
                <li><strong>Communication Tool</strong> - Show architects and builders what you envision</li>
                <li><strong>Budget Starting Point</strong> - Get preliminary cost estimates based on layout</li>
                <li><strong>Design Development</strong> - Refine AI concepts with professional expertise</li>
                <li><strong>Permitting</strong> - Hire licensed professionals for final stamped drawings</li>
              </ul>

              <h3>DIY Implementation</h3>
              <p>
                For smaller projects or DIY builders:
              </p>
              <ul>
                <li>Use AI plan as guide for room sizes and relationships</li>
                <li>Verify all dimensions meet local building codes</li>
                <li>Consider structural implications (load-bearing walls, beam spans)</li>
                <li>Plan electrical, plumbing, and HVAC based on layout</li>
                <li>Check with local permit office about professional plan requirements</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                AI floor plan generation democratizes professional spatial design, making it accessible whether you're building a new home, renovating an existing space, or simply exploring possibilities. By understanding fundamental design principles and using AI to generate optimized layouts, you can create homes that function beautifully for your specific needs.
              </p>
              <p>
                The key to successful floor plans isn't just fitting the required rooms into available space - it's creating logical relationships between spaces, ensuring efficient circulation, maximizing natural light, and designing flexibility for changing needs. AI tools help you achieve these goals quickly and affordably, allowing you to explore multiple options before committing to expensive construction or renovation work.
              </p>
              <p>
                Remember that great floor plans balance aesthetics with functionality, current needs with future flexibility, and personal preferences with resale considerations. Use AI-generated plans as sophisticated starting points, then refine them with professional input to create spaces you'll love living in for years to come.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
