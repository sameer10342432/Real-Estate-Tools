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
import { Share2, TrendingUp, AlertCircle, Copy, Sparkles, BookOpen, Hash, Loader2 } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIFacebookAdsCopyGenerator() {
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [price, setPrice] = useState(450000);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [location, setLocation] = useState('');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [adObjective, setAdObjective] = useState('Lead generation');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-facebook-ads-copy-generator',
  });

  const handleGenerate = async () => {
    await generate({
      propertyType,
      price,
      bedrooms,
      bathrooms,
      location,
      keyFeatures,
      targetAudience,
      adObjective,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Share2 className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Facebook & Instagram Ads Copy Generator</h1>
            <p className="text-muted-foreground mt-2">
              Create scroll-stopping social media ads for real estate listings
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Ad Generator
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property & Campaign Details</CardTitle>
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
                      <SelectItem value="Multi-family">Multi-family</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Luxury home">Luxury home</SelectItem>
                    </SelectContent>
                  </Select>
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

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., Wynwood Miami, FL or Scottsdale, AZ"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="adObjective">Campaign Objective *</Label>
                  <Select value={adObjective} onValueChange={setAdObjective}>
                    <SelectTrigger id="adObjective">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lead generation">Lead generation</SelectItem>
                      <SelectItem value="Traffic">Website traffic</SelectItem>
                      <SelectItem value="Engagement">Engagement</SelectItem>
                      <SelectItem value="Brand awareness">Brand awareness</SelectItem>
                      <SelectItem value="Conversions">Conversions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="keyFeatures">Key Features *</Label>
                  <Textarea
                    id="keyFeatures"
                    value={keyFeatures}
                    onChange={(e) => setKeyFeatures(e.target.value)}
                    placeholder="e.g., Waterfront, Gourmet kitchen, Smart home, Private pool, Mountain views"
                    rows={3}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Textarea
                    id="targetAudience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g., Young professionals, Families with children, Retirees, Luxury buyers"
                    rows={2}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !location || !keyFeatures || !targetAudience}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Ad Copy...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Facebook Ads Copy
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
                  <span>Your Facebook & Instagram Ad Copy</span>
                  <Badge variant="default">Ready to Use</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.primaryText && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-blue-900">Primary Text (Preview)</h3>
                      <span className="text-xs text-blue-700">First 125 characters shown</span>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm">{data.primaryText}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="mt-2"
                        onClick={() => copyToClipboard(data.primaryText)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                )}

                {data.headline && (
                  <>
                    <Separator />
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-green-900">Headline</h3>
                        <span className="text-xs text-green-700">Max 40 characters</span>
                      </div>
                      <div className="bg-white p-3 rounded flex items-center justify-between">
                        <span className="text-sm font-semibold">{data.headline}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(data.headline)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {data.description && (
                  <>
                    <Separator />
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-purple-900">Description</h3>
                        <span className="text-xs text-purple-700">Max 30 characters</span>
                      </div>
                      <div className="bg-white p-3 rounded flex items-center justify-between">
                        <span className="text-sm">{data.description}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(data.description)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {data.fullBody && (
                  <>
                    <Separator />
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Full Ad Body</h3>
                      <div className="bg-white p-4 rounded whitespace-pre-wrap text-sm">
                        {data.fullBody}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-3"
                        onClick={() => copyToClipboard(data.fullBody)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Full Body
                      </Button>
                    </div>
                  </>
                )}

                {data.hashtags && data.hashtags.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Hash className="h-5 w-5 text-blue-600" />
                        Recommended Hashtags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {data.hashtags.map((tag: string, idx: number) => (
                          <Badge key={idx} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {data.callToAction && (
                  <>
                    <Separator />
                    <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Call-to-Action Button</h3>
                      <Badge className="bg-indigo-600">{data.callToAction}</Badge>
                    </div>
                  </>
                )}

                {data.tips && data.tips.length > 0 && (
                  <>
                    <Separator />
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-yellow-600" />
                        Optimization Tips
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {data.tips.map((tip: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">💡</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
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
              <CardTitle>Complete Guide to Facebook & Instagram Ads for Real Estate</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>Why Facebook & Instagram Ads Are Essential for Real Estate Marketing</h2>
              <p>
                With over 3 billion active users across Facebook and Instagram, Meta's advertising platform offers real estate professionals unprecedented access to potential buyers and sellers. Unlike Google Ads where users are actively searching, social media ads excel at creating awareness, building relationships, and capturing buyers in the early stages of their property journey. This guide will teach you how to create scroll-stopping ads that generate qualified leads and listings.
              </p>

              <h2>The Power of Visual Storytelling in Real Estate</h2>
              <p>
                Facebook and Instagram are visual platforms where stunning photography and compelling stories win attention. Real estate is inherently visual, making it a perfect fit for social media advertising. Properties with beautiful photos, virtual tours, and lifestyle imagery dramatically outperform text-heavy ads. The key is to make people stop scrolling and imagine themselves in the space.
              </p>
              <p>Key advantages of Facebook & Instagram advertising for real estate:</p>
              <ul>
                <li><strong>Advanced Targeting</strong> - Reach specific demographics, interests, behaviors, and custom audiences</li>
                <li><strong>Visual Impact</strong> - Showcase properties with photos, videos, carousels, and Stories</li>
                <li><strong>Brand Building</strong> - Stay top-of-mind with potential clients over time</li>
                <li><strong>Cost-Effective</strong> - Often lower cost-per-lead than Google Ads in many markets</li>
                <li><strong>Retargeting Power</strong> - Re-engage website visitors and past leads</li>
                <li><strong>Mobile-First</strong> - Reach buyers where they spend most time: on their phones</li>
              </ul>

              <h2>Understanding Facebook Ads Manager for Real Estate</h2>
              
              <h3>Campaign Objectives</h3>
              <p>Facebook offers multiple campaign objectives. For real estate, the most effective are:</p>
              <ul>
                <li><strong>Lead Generation</strong> - Collect contact information directly on Facebook with lead forms</li>
                <li><strong>Traffic</strong> - Drive people to your website or listing pages</li>
                <li><strong>Engagement</strong> - Increase post interactions, video views, and event responses</li>
                <li><strong>Messages</strong> - Start conversations via Messenger or Instagram Direct</li>
                <li><strong>Conversions</strong> - Track specific actions like form submissions or scheduled showings</li>
              </ul>

              <h3>Campaign Structure</h3>
              <p>
                Like Google Ads, Facebook campaigns have three levels: Campaign (objective and budget), Ad Set (targeting, placement, schedule), and Ad (creative and copy). Organize campaigns by property type, price range, or marketing goal for better optimization.
              </p>

              <h2>Targeting Your Ideal Buyer on Facebook & Instagram</h2>

              <h3>Demographic Targeting</h3>
              <p>Target by age, gender, education, job title, life events (recently engaged, new parent), and more. For example, target first-time buyers with "recently engaged" or downsizers with "age 55-70."</p>

              <h3>Interest Targeting</h3>
              <p>Reach people interested in real estate, home improvement, luxury lifestyle, specific neighborhoods, or competitors. Combine interests for precision: "Real Estate" + "Home Renovation" + "Interior Design."</p>

              <h3>Behavioral Targeting</h3>
              <p>Target people who are likely to move based on Facebook's data, such as "Likely to move," "Recently moved," "Renting," or "First-time homebuyer."</p>

              <h3>Location Targeting</h3>
              <p>Target by city, zip code, radius around an address, or even people who recently visited specific locations. Use exclusions to avoid wasting budget on areas you don't serve.</p>

              <h3>Custom Audiences</h3>
              <p>Upload your email list, phone numbers, or website visitors to create warm audiences more likely to convert. Layer lookalike audiences to find new people similar to your best clients.</p>

              <h2>Writing Engaging Ad Copy for Social Media</h2>

              <h3>The Hook (First 125 Characters)</h3>
              <p>
                Facebook shows only the first 125 characters in the news feed preview. Your opening must grab attention immediately. Use questions, bold statements, numbers, or emotional triggers:
              </p>
              <ul>
                <li>"🏡 Imagine waking up to waterfront views every morning..."</li>
                <li>"This $500K home just hit the market in [Neighborhood]"</li>
                <li>"Looking for your dream home? We just listed 15 new properties..."</li>
                <li>"First-time buyers: Don't make this costly mistake..."</li>
              </ul>

              <h3>The Body (Full Primary Text)</h3>
              <p>
                After the hook, expand with specific details, benefits, and social proof. Use short paragraphs, bullet points, and emojis to improve readability. Address pain points and desires directly.
              </p>

              <h3>The Headline (40 Characters Max)</h3>
              <p>
                This appears below the image in a larger font. Make it punchy and benefit-driven: "Your Dream Home Awaits," "Move-In Ready Luxury," "Schedule Your Tour Today."
              </p>

              <h3>The Call-to-Action</h3>
              <p>
                Facebook provides CTA buttons like "Learn More," "Apply Now," "Send Message," or "Get Directions." Choose the button that matches your goal and make the next step crystal clear in your copy.
              </p>

              <h2>Creative Best Practices for Real Estate Ads</h2>

              <h3>Photo Ads</h3>
              <p>
                Use high-quality, professional photos that showcase the property's best features. Avoid cluttered images or too much text overlay (Facebook penalizes ads with >20% text on images). Lifestyle shots often outperform empty rooms.
              </p>

              <h3>Video Ads</h3>
              <p>
                Video ads generate 3-5x more engagement than static images. Create short walkthroughs (30-60 seconds), aerial drone footage, neighborhood tours, or client testimonials. Add captions since most users watch without sound.
              </p>

              <h3>Carousel Ads</h3>
              <p>
                Showcase multiple rooms, properties, or features in a swipeable format. Perfect for displaying different angles, highlighting amenities, or comparing before/after renovations. Each card can have its own headline and link.
              </p>

              <h3>Stories Ads</h3>
              <p>
                Vertical, full-screen ads that appear between organic Stories. Use eye-catching visuals, large text, and quick messages. Stories ads work great for open house announcements, quick property teasers, and agent branding.
              </p>

              <h2>Advanced Facebook Advertising Strategies</h2>

              <h3>Lead Generation Campaigns</h3>
              <p>
                Facebook Lead Ads let people submit their contact information without leaving the platform. Pre-fill forms with Facebook data to reduce friction. Ask only essential questions (name, email, phone) for higher completion rates. Integrate with your CRM for instant follow-up.
              </p>

              <h3>Retargeting Campaigns</h3>
              <p>
                Create custom audiences of people who visited your website, watched your videos, or engaged with your content. Show them different ads based on their behavior: property-specific ads for page visitors, testimonial ads for email subscribers, or special offers for long-time followers.
              </p>

              <h3>Lookalike Audiences</h3>
              <p>
                Upload your best clients and let Facebook find similar people. Start with 1% lookalikes (most similar) then expand to 2-5% as you scale. Combine with interest or demographic filters for even better results.
              </p>

              <h3>Dynamic Ads</h3>
              <p>
                Automatically show different properties to different people based on their browsing behavior. Requires a product catalog setup but powerful for brokerages with many listings.
              </p>

              <h2>Budgeting and Bidding on Facebook</h2>

              <h3>Budget Recommendations</h3>
              <p>
                Start with at least $10-20 per day per ad set to give Facebook's algorithm enough data to optimize. For lead generation campaigns, budget $500-1,000 per month minimum to see consistent results. High-end properties may require larger budgets for smaller, more affluent audiences.
              </p>

              <h3>Bidding Strategies</h3>
              <ul>
                <li><strong>Lowest Cost</strong> - Let Facebook get you the most results within your budget (best for most campaigns)</li>
                <li><strong>Cost Cap</strong> - Set a maximum cost per result while spending your full budget</li>
                <li><strong>Bid Cap</strong> - Control maximum bid amounts in the auction (advanced)</li>
              </ul>

              <h2>Measuring Success and Optimization</h2>

              <h3>Key Metrics to Track</h3>
              <ul>
                <li><strong>Cost Per Lead (CPL)</strong> - How much you pay for each contact. Real estate CPL typically ranges from $5-$50 depending on market and targeting</li>
                <li><strong>Click-Through Rate (CTR)</strong> - Percentage of people who click your ad. Aim for 1-3% or higher</li>
                <li><strong>Cost Per Click (CPC)</strong> - Usually $0.50-$3 for real estate audiences</li>
                <li><strong>Relevance Score</strong> - Facebook's quality rating (1-10). Higher scores = lower costs</li>
                <li><strong>Lead Quality</strong> - Not all leads are equal. Track which campaigns produce buyers vs. browsers</li>
              </ul>

              <h3>A/B Testing</h3>
              <p>
                Test one variable at a time: audience, creative, headline, or CTA. Facebook's split testing tool makes this easy. Run tests for at least 3-7 days and 500+ impressions per variant for statistical significance.
              </p>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li><strong>Targeting Too Broadly</strong> - "Everyone in New York" wastes money. Narrow your audience to motivated buyers</li>
                <li><strong>Using Poor Quality Images</strong> - Dark, blurry, or unprofessional photos kill ad performance</li>
                <li><strong>Writing Like a Listing</strong> - Social ads need storytelling, not MLS descriptions</li>
                <li><strong>Ignoring Mobile Users</strong> - 98% of Facebook users access via mobile. Test mobile experience first</li>
                <li><strong>Not Following Up Quickly</strong> - Facebook leads go cold fast. Respond within 5 minutes for best results</li>
                <li><strong>Boosting Posts Instead of Using Ads Manager</strong> - Ads Manager provides far better targeting and optimization</li>
                <li><strong>Sending Everyone to Your Homepage</strong> - Create dedicated landing pages for each campaign</li>
              </ul>

              <h2>Compliance and Best Practices</h2>

              <h3>Fair Housing Compliance</h3>
              <p>
                Real estate ads must comply with Fair Housing laws. Never target or exclude audiences based on protected classes (race, religion, familial status, etc.). Facebook restricts demographic targeting for housing ads to prevent discrimination.
              </p>

              <h3>Special Ad Category</h3>
              <p>
                All real estate ads must be designated as "Housing" in the special ad category. This limits targeting options but ensures compliance. Learn the restrictions before launching campaigns.
              </p>

              <h2>Integrating Facebook Ads Into Your Marketing Strategy</h2>
              <p>
                Facebook ads work best as part of a comprehensive digital marketing strategy. Combine with:
              </p>
              <ul>
                <li>Email nurture campaigns for leads generated</li>
                <li>Google Ads to capture bottom-funnel searches</li>
                <li>Organic social media content to build trust</li>
                <li>Landing pages optimized for conversion</li>
                <li>CRM systems for lead management and follow-up</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Facebook and Instagram advertising provides real estate professionals with powerful tools to reach potential buyers and sellers at scale. Success comes from combining compelling visual creative, targeted audience selection, persuasive copy, and consistent testing and optimization. Whether you're promoting individual listings, building your personal brand, or generating seller leads, social media ads can become one of your most cost-effective marketing channels.
              </p>
              <p>
                Start with small budgets, test different approaches, and scale what works. The AI Facebook Ads Copy Generator above helps you create engaging ad copy quickly, but remember that great creative, precise targeting, and rapid follow-up are equally important for campaign success. With patience and data-driven optimization, you can build a steady stream of qualified leads from Facebook and Instagram advertising.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
