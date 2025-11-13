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
import { Search, TrendingUp, AlertCircle, Copy, Sparkles, BookOpen, CheckCircle, Loader2 } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIGoogleAdsCopyGenerator() {
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [price, setPrice] = useState(450000);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [location, setLocation] = useState('');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-google-ads-copy-generator',
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
            <Search className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Google Ads Copy Generator</h1>
            <p className="text-muted-foreground mt-2">
              Create high-converting Google Search ads for real estate listings
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
              <CardTitle>Property Details</CardTitle>
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
                    placeholder="e.g., Downtown Austin, TX or Coral Gables, FL"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="keyFeatures">Key Features *</Label>
                  <Textarea
                    id="keyFeatures"
                    value={keyFeatures}
                    onChange={(e) => setKeyFeatures(e.target.value)}
                    placeholder="e.g., Pool, Updated kitchen, Walk-in closets, Smart home features, Lake view"
                    rows={3}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Textarea
                    id="targetAudience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g., First-time homebuyers, Growing families, Luxury buyers, Investors"
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
                      Generate Google Ads Copy
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
                  <span>Your Google Ads Copy</span>
                  <Badge variant="default">Ready to Use</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-blue-900">Headlines</h3>
                    <span className="text-xs text-blue-700">Max 30 characters each</span>
                  </div>
                  <div className="space-y-2">
                    {data.headlines?.map((headline: string, idx: number) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-2 rounded">
                        <span className="text-sm">{headline}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(headline)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-900">Descriptions</h3>
                    <span className="text-xs text-green-700">Max 90 characters each</span>
                  </div>
                  <div className="space-y-2">
                    {data.descriptions?.map((desc: string, idx: number) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-2 rounded">
                        <span className="text-sm">{desc}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(desc)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {data.displayPath && (
                  <>
                    <Separator />
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Display Path</h3>
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span className="text-sm font-mono">{data.displayPath}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(data.displayPath)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {data.callToActions && data.callToActions.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Call-to-Action Ideas
                      </h3>
                      <ul className="space-y-2">
                        {data.callToActions.map((cta: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{cta}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {data.keywords && data.keywords.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Recommended Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.keywords.map((keyword: string, idx: number) => (
                          <Badge key={idx} variant="outline">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {data.tips && data.tips.length > 0 && (
                  <>
                    <Separator />
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Optimization Tips</h3>
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
              <CardTitle>Complete Guide to Google Ads for Real Estate</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>Introduction to Google Ads for Real Estate Professionals</h2>
              <p>
                Google Ads is one of the most powerful marketing tools available to real estate agents, brokers, and property developers. With over 8.5 billion searches per day on Google, the platform offers unparalleled reach to connect with potential buyers and sellers actively searching for properties. This comprehensive guide will teach you everything you need to know about creating high-converting Google Ads campaigns for real estate.
              </p>

              <h2>Why Google Ads Works for Real Estate</h2>
              <p>
                Unlike traditional advertising where you interrupt people, Google Ads lets you reach potential clients exactly when they're searching for what you offer. When someone types "3 bedroom home for sale in Austin" or "best real estate agent near me," they have high purchase intent. Google Ads allows you to appear at the top of search results for these valuable queries.
              </p>
              <p>Key advantages of Google Ads for real estate include:</p>
              <ul>
                <li><strong>Intent-Based Targeting</strong> - Reach people actively looking to buy, sell, or invest in real estate</li>
                <li><strong>Immediate Results</strong> - Unlike SEO which takes months, ads can drive traffic within hours</li>
                <li><strong>Precise Targeting</strong> - Target specific locations, demographics, and search behaviors</li>
                <li><strong>Measurable ROI</strong> - Track exactly which ads generate leads and calculate cost per acquisition</li>
                <li><strong>Budget Control</strong> - Set daily budgets and only pay when someone clicks your ad</li>
                <li><strong>Competitive Advantage</strong> - Appear above organic results and competitor listings</li>
              </ul>

              <h2>Understanding Google Ads Structure</h2>
              <p>
                Before creating ads, it's essential to understand how Google Ads campaigns are organized:
              </p>
              <h3>Campaign Level</h3>
              <p>
                At the campaign level, you set your budget, geographic targeting, and campaign type. For real estate, you'll typically use Search campaigns to appear in Google search results when people search for relevant keywords.
              </p>
              <h3>Ad Group Level</h3>
              <p>
                Within each campaign, you create ad groups focused on specific themes. For example, you might have separate ad groups for "luxury homes," "first-time buyers," "investment properties," and "commercial real estate." Each ad group contains related keywords and ads.
              </p>
              <h3>Ad Level</h3>
              <p>
                This is where you write the actual ad copy that users will see. Each ad consists of headlines (up to 15), descriptions (up to 4), and display paths. Google automatically tests different combinations to find the best performers.
              </p>

              <h2>Components of a High-Converting Real Estate Google Ad</h2>
              
              <h3>Headlines (Max 30 Characters Each)</h3>
              <p>
                Headlines are the most important element of your ad. You can provide up to 15 headlines, and Google will show 2-3 at a time in various combinations. Effective headlines for real estate should:
              </p>
              <ul>
                <li>Include the location (e.g., "Austin Luxury Homes")</li>
                <li>Mention key property features (e.g., "Pool & Modern Kitchen")</li>
                <li>Highlight price or value (e.g., "Under $500K" or "Best Value")</li>
                <li>Create urgency (e.g., "Just Listed" or "Open House Sunday")</li>
                <li>Address buyer needs (e.g., "Move-In Ready Homes")</li>
              </ul>

              <h3>Descriptions (Max 90 Characters Each)</h3>
              <p>
                Descriptions provide additional details about the property or your services. You can add up to 4 descriptions. Effective descriptions should:
              </p>
              <ul>
                <li>Expand on headline benefits with specific details</li>
                <li>Include a clear call-to-action</li>
                <li>Mention unique selling propositions</li>
                <li>Address common buyer questions or concerns</li>
                <li>Create emotional appeal while staying factual</li>
              </ul>

              <h3>Display Path (Max 15 Characters Per Path)</h3>
              <p>
                The display path appears in green text below your headline. It doesn't need to match your actual landing page URL but should reinforce your message. Examples: "propertytools.com/Austin/Luxury" or "youragency.com/New-Listings"
              </p>

              <h2>Keyword Strategy for Real Estate Google Ads</h2>
              <p>
                Choosing the right keywords is critical for ad success. Real estate keywords generally fall into several categories:
              </p>

              <h3>1. Location-Specific Keywords</h3>
              <p>Examples:</p>
              <ul>
                <li>"homes for sale in [city/neighborhood]"</li>
                <li>"[city] real estate agent"</li>
                <li>"apartments in [area]"</li>
                <li>"[neighborhood] condos"</li>
              </ul>

              <h3>2. Property-Type Keywords</h3>
              <p>Examples:</p>
              <ul>
                <li>"single family homes for sale"</li>
                <li>"luxury condos"</li>
                <li>"investment properties"</li>
                <li>"commercial real estate"</li>
              </ul>

              <h3>3. Feature-Based Keywords</h3>
              <p>Examples:</p>
              <ul>
                <li>"homes with pool"</li>
                <li>"waterfront properties"</li>
                <li>"new construction homes"</li>
                <li>"fixer upper houses"</li>
              </ul>

              <h3>4. Buyer Intent Keywords</h3>
              <p>Examples:</p>
              <ul>
                <li>"first time home buyer programs"</li>
                <li>"downsizing homes"</li>
                <li>"move in ready homes"</li>
                <li>"real estate investor properties"</li>
              </ul>

              <h3>Match Types Explained</h3>
              <p>
                Google offers different keyword match types that control how closely a search query must match your keyword:
              </p>
              <ul>
                <li><strong>Broad Match</strong> - Shows ads for searches related to your keyword, including synonyms. Most traffic but least targeted.</li>
                <li><strong>Phrase Match</strong> - Shows ads for searches that include your keyword phrase. Moderate targeting and traffic.</li>
                <li><strong>Exact Match</strong> - Shows ads only for searches very similar to your exact keyword. Most targeted but least traffic.</li>
              </ul>
              <p>
                For real estate, start with phrase match and exact match to maintain control over ad spend, then expand to broad match modified keywords once you identify what works.
              </p>

              <h2>Writing Compelling Ad Copy That Converts</h2>
              
              <h3>Principle 1: Speak to Buyer Motivations</h3>
              <p>
                Understand why people buy real estate and speak to those motivations in your copy. First-time buyers care about affordability and assistance programs. Luxury buyers care about exclusivity and premium features. Investors care about ROI and cash flow potential. Tailor your message accordingly.
              </p>

              <h3>Principle 2: Use Numbers and Specifics</h3>
              <p>
                Vague claims like "great homes" don't convert. Specific details like "3 bed, 2 bath, $350K" or "15+ homes under $500K" perform much better. Numbers catch attention and provide concrete information that helps buyers self-qualify.
              </p>

              <h3>Principle 3: Create Urgency and Scarcity</h3>
              <p>
                Phrases like "Just Listed," "Open House Sunday," "Limited Availability," or "Last Home in Community" encourage immediate action. Real estate is competitive, and buyers know good properties move quickly.
              </p>

              <h3>Principle 4: Include Strong Calls-to-Action</h3>
              <p>
                Tell people exactly what you want them to do: "Schedule Your Tour Today," "View Photos & Floor Plans," "Request Info," "Download Buyer's Guide," or "Book Free Consultation." Clear CTAs increase click-through and conversion rates.
              </p>

              <h3>Principle 5: Highlight What Makes You Different</h3>
              <p>
                What sets you or your listing apart? "5-Star Rated Agent," "No Buyer's Fee," "Virtual Tours Available," "Same-Day Showings," "Expert Local Knowledge - 20 Years." Differentiation helps you stand out in a crowded market.
              </p>

              <h2>Advanced Google Ads Features for Real Estate</h2>

              <h3>Ad Extensions</h3>
              <p>
                Extensions provide additional information and take up more space in search results, increasing visibility and click-through rates. Essential extensions for real estate include:
              </p>
              <ul>
                <li><strong>Sitelink Extensions</strong> - Add links to specific pages like "New Listings," "Buyer Resources," "Neighborhood Guide"</li>
                <li><strong>Callout Extensions</strong> - Highlight features like "Free Home Valuation," "24/7 Availability," "Expert Negotiators"</li>
                <li><strong>Call Extensions</strong> - Add your phone number so mobile users can call directly from the ad</li>
                <li><strong>Location Extensions</strong> - Display your business address and a map marker</li>
                <li><strong>Structured Snippet Extensions</strong> - List amenities, services, or neighborhood features</li>
              </ul>

              <h3>Remarketing Campaigns</h3>
              <p>
                Most website visitors won't convert on their first visit. Remarketing lets you show ads to people who previously visited your site as they browse other websites or use Google. This keeps you top-of-mind during their property search journey.
              </p>

              <h3>Audience Targeting</h3>
              <p>
                Layer audience targeting on your keyword campaigns to refine who sees your ads:
              </p>
              <ul>
                <li><strong>In-Market Audiences</strong> - Target people actively researching real estate purchases</li>
                <li><strong>Affinity Audiences</strong> - Reach people based on lifestyle and interests</li>
                <li><strong>Custom Intent Audiences</strong> - Create audiences based on specific searches and website visits</li>
                <li><strong>Customer Match</strong> - Upload your CRM lists to target past clients or leads</li>
              </ul>

              <h2>Budgeting and Bidding Strategies</h2>
              
              <h3>Setting Your Budget</h3>
              <p>
                How much should you spend on Google Ads? Consider these factors:
              </p>
              <ul>
                <li><strong>Average Commission</strong> - If you earn $15,000 per sale, spending $1,500 to acquire a client (10% of commission) might be worthwhile</li>
                <li><strong>Market Competition</strong> - Competitive markets like Miami or San Francisco have higher cost-per-click than smaller markets</li>
                <li><strong>Testing Phase</strong> - Start with $30-50/day minimum to gather meaningful data</li>
                <li><strong>Scaling</strong> - Once profitable, gradually increase budget to capture more traffic</li>
              </ul>

              <h3>Bidding Strategies</h3>
              <p>
                Google offers several automated bidding strategies:
              </p>
              <ul>
                <li><strong>Maximize Clicks</strong> - Good for building initial traffic and gathering data</li>
                <li><strong>Target CPA (Cost Per Acquisition)</strong> - Best once you have conversion tracking and want to control lead costs</li>
                <li><strong>Target ROAS (Return on Ad Spend)</strong> - Advanced strategy for optimizing based on revenue value</li>
                <li><strong>Manual CPC</strong> - Full control over individual keyword bids, time-intensive but powerful</li>
              </ul>

              <h2>Tracking and Measuring Success</h2>
              <p>
                Set up conversion tracking to measure which ads and keywords generate leads. Key metrics to monitor:
              </p>
              <ul>
                <li><strong>Click-Through Rate (CTR)</strong> - Percentage of people who click your ad. Aim for 5%+ for search ads</li>
                <li><strong>Cost Per Click (CPC)</strong> - How much you pay each time someone clicks. Real estate CPCs typically range from $2-$10+</li>
                <li><strong>Conversion Rate</strong> - Percentage of clicks that become leads. Target 5-15% depending on your funnel</li>
                <li><strong>Cost Per Lead</strong> - Total ad spend divided by number of leads. Track this against your average commission</li>
                <li><strong>Quality Score</strong> - Google's rating (1-10) of your keywords, ads, and landing pages. Higher scores = lower costs</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li><strong>Sending Traffic to Your Homepage</strong> - Create dedicated landing pages specific to each ad campaign</li>
                <li><strong>Not Using Negative Keywords</strong> - Exclude irrelevant searches like "jobs," "careers," "free," "cheap"</li>
                <li><strong>Writing Generic Ad Copy</strong> - Stand out with specific benefits, features, and offers</li>
                <li><strong>Ignoring Mobile Users</strong> - Over 60% of searches happen on mobile; ensure mobile-friendly landing pages</li>
                <li><strong>Not Testing Different Ads</strong> - Always run 2-3 ad variations per ad group and test what works</li>
                <li><strong>Targeting Too Broadly</strong> - Start with specific neighborhoods or property types, then expand</li>
                <li><strong>Neglecting Landing Page Quality</strong> - Fast-loading, mobile-friendly pages with clear CTAs convert better</li>
              </ul>

              <h2>Best Practices for Real Estate Google Ads Success</h2>
              <ul>
                <li>Create separate campaigns for different property types and price ranges</li>
                <li>Use location-specific ad copy that mentions neighborhood names</li>
                <li>Include prices in ads when possible to attract qualified buyers</li>
                <li>Update ads regularly with new listings and market conditions</li>
                <li>Use ad scheduling to show ads during peak browsing hours</li>
                <li>Implement call tracking to measure phone lead quality</li>
                <li>A/B test everything: headlines, descriptions, landing pages, and offers</li>
                <li>Monitor search terms report weekly and add negative keywords</li>
                <li>Create landing pages with high-quality photos and virtual tours</li>
                <li>Follow up with leads quickly (within 5 minutes dramatically increases conversion)</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Google Ads provides real estate professionals with a powerful platform to reach motivated buyers and sellers at the exact moment they're searching for properties or agents. By following the strategies outlined in this guide—from keyword research and ad copywriting to budget management and conversion tracking—you can create profitable campaigns that consistently generate high-quality leads.
              </p>
              <p>
                Remember that success with Google Ads comes from continuous testing and optimization. Start with a focused campaign, gather data, and refine your approach based on what works. The AI Google Ads Copy Generator tool above can help you create compelling ad copy quickly, but the real results come from combining great copy with strategic targeting, competitive bidding, and excellent landing pages.
              </p>
              <p>
                Whether you're an individual agent looking to grow your client base or a brokerage managing multiple listings, Google Ads can become one of your most valuable lead generation channels when implemented correctly.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
