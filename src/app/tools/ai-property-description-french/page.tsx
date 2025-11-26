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
import { Globe, Copy, AlertCircle, Sparkles, BookOpen, CheckCircle, Loader2, Languages } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIPropertyDescriptionFrench() {
  const [propertyType, setPropertyType] = useState('Single Family');
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [squareFeet, setSquareFeet] = useState(2000);
  const [lotSize, setLotSize] = useState('0.25 acres');
  const [yearBuilt, setYearBuilt] = useState(2010);
  const [location, setLocation] = useState('');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [price, setPrice] = useState(450000);
  const [propertyHighlights, setPropertyHighlights] = useState('');
  const [targetAudience, setTargetAudience] = useState('Families');
  const [tone, setTone] = useState('Professional');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-property-description-french',
  });

  const handleGenerate = async () => {
    await generate({
      propertyType,
      bedrooms,
      bathrooms,
      squareFeet,
      lotSize,
      yearBuilt,
      location,
      keyFeatures,
      price,
      propertyHighlights,
      targetAudience,
      tone,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <Languages className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Property Description Generator (French)</h1>
            <p className="text-muted-foreground mt-2">
              Generate professional property descriptions in French for Francophone buyers
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="mt-2">
          <Globe className="h-3 w-3 mr-1" />
          Français
        </Badge>
      </div>

      <Tabs defaultValue="generator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="generator">
            <Sparkles className="h-4 w-4 mr-2" />
            Generator
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger id="propertyType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single Family">Single Family</SelectItem>
                      <SelectItem value="Condo">Condo</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Multi-Family">Multi-Family</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms *</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    min={0}
                    max={20}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms *</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    min={0}
                    max={20}
                    step={0.5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="squareFeet">Square Feet *</Label>
                  <Input
                    id="squareFeet"
                    type="number"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(Number(e.target.value))}
                    min={0}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lotSize">Lot Size *</Label>
                  <Input
                    id="lotSize"
                    value={lotSize}
                    onChange={(e) => setLotSize(e.target.value)}
                    placeholder="e.g., 0.25 acres or 10,000 sq ft"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearBuilt">Year Built *</Label>
                  <Input
                    id="yearBuilt"
                    type="number"
                    value={yearBuilt}
                    onChange={(e) => setYearBuilt(Number(e.target.value))}
                    min={1800}
                    max={2030}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    min={0}
                    step={10000}
                  />
                  <p className="text-sm text-muted-foreground">
                    ${price.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Select value={targetAudience} onValueChange={setTargetAudience}>
                    <SelectTrigger id="targetAudience">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="First-time Buyers">First-time Buyers</SelectItem>
                      <SelectItem value="Investors">Investors</SelectItem>
                      <SelectItem value="Luxury Buyers">Luxury Buyers</SelectItem>
                      <SelectItem value="Families">Families</SelectItem>
                      <SelectItem value="Retirees">Retirees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone *</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger id="tone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Professional">Professional</SelectItem>
                      <SelectItem value="Warm">Warm</SelectItem>
                      <SelectItem value="Luxury">Luxury</SelectItem>
                      <SelectItem value="Casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location/Neighborhood *</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Miami Beach, FL or Fort Lauderdale, FL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keyFeatures">Key Features *</Label>
                <Textarea
                  id="keyFeatures"
                  value={keyFeatures}
                  onChange={(e) => setKeyFeatures(e.target.value)}
                  placeholder="e.g., Gourmet kitchen, wine cellar, elegant architectural details, private garden"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyHighlights">Property Highlights *</Label>
                <Textarea
                  id="propertyHighlights"
                  value={propertyHighlights}
                  onChange={(e) => setPropertyHighlights(e.target.value)}
                  placeholder="e.g., Near beach, excellent investment potential, resort-style amenities, privacy"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !location || !keyFeatures || !propertyHighlights}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating French Description...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate French Description
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
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Generated French Description</span>
                  <Badge variant="default" className="bg-indigo-600">
                    <Globe className="h-3 w-3 mr-1" />
                    Français
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.headline && (
                  <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-indigo-900">Headline / Titre</h3>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(data.headline)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-lg font-medium">{data.headline}</p>
                  </div>
                )}

                {data.description && (
                  <>
                    <Separator />
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-blue-900">Property Description / Description</h3>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(data.description)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="whitespace-pre-wrap text-sm">{data.description}</div>
                    </div>
                  </>
                )}

                {data.highlights && data.highlights.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Property Highlights / Points Forts
                      </h3>
                      <ul className="space-y-2">
                        {data.highlights.map((highlight: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {data.seoKeywords && data.seoKeywords.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">SEO Keywords / Mots-clés SEO</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.seoKeywords.map((keyword: string, idx: number) => (
                          <Badge key={idx} variant="outline">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {data.callToActions && data.callToActions.length > 0 && (
                  <>
                    <Separator />
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="font-semibold mb-3">Call-to-Actions / Appels à l'action</h3>
                      <ul className="space-y-2">
                        {data.callToActions.map((cta: string, idx: number) => (
                          <li key={idx} className="flex items-center justify-between bg-white p-2 rounded">
                            <span className="text-sm">{cta}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(cta)}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {data.translationNote && (
                  <>
                    <Separator />
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Cultural Notes / Notes Culturelles</h3>
                      <p className="text-sm text-gray-700">{data.translationNote}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Guide to French Property Descriptions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>Why French Property Descriptions Matter</h2>
              <p>
                French-speaking buyers represent diverse and significant real estate demographics including French Canadians, Haitian-Americans, and European French investors. French Canadian snowbirds are particularly active in Florida and Arizona markets, while the Haitian-American community represents over 1 million buyers concentrated in Florida and New York.
              </p>

              <h2>Key Markets</h2>
              <ul>
                <li><strong>Florida:</strong> Miami, Fort Lauderdale, Palm Beach - French Canadian snowbirds and Haitian community</li>
                <li><strong>New York:</strong> Brooklyn, Queens - Large Haitian-American population</li>
                <li><strong>Louisiana:</strong> New Orleans, Lafayette - Historic French-speaking communities</li>
                <li><strong>Maine/Vermont:</strong> Border proximity to Quebec</li>
                <li><strong>Arizona:</strong> Phoenix, Scottsdale - French Canadian winter residents</li>
              </ul>

              <h2>Cultural Considerations</h2>
              <p>
                When marketing to French-speaking buyers, consider these communication styles:
              </p>
              <ul>
                <li><strong>Elegant Language:</strong> French real estate descriptions use refined, literary language</li>
                <li><strong>Quality of Life:</strong> Emphasis on lifestyle, ambiance, and cultural amenities</li>
                <li><strong>Privacy:</strong> Gardens, private settings, and outdoor spaces valued</li>
                <li><strong>Gastronomy:</strong> Gourmet kitchens, wine storage, entertaining spaces</li>
                <li><strong>Investment:</strong> French Canadians focus on seasonal properties and retirement</li>
              </ul>

              <h2>How to Use This Tool</h2>
              <p>
                Enter your property details, select your target audience and preferred tone, and the AI will generate an elegant French property description complete with SEO keywords and call-to-actions. The generated content follows sophisticated French real estate conventions and appeals to diverse Francophone audiences.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
