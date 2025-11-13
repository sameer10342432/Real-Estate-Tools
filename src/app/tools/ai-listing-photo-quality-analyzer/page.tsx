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
import { Camera, TrendingUp, AlertCircle, CheckCircle, Sparkles, BookOpen, Image, Loader2 } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIListingPhotoQualityAnalyzer() {
  const [photoDescription, setPhotoDescription] = useState('');
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [numberOfPhotos, setNumberOfPhotos] = useState(25);
  const [photographyType, setPhotographyType] = useState('Professional');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-listing-photo-quality-analyzer',
  });

  const handleAnalyze = async () => {
    await generate({
      photoDescription,
      propertyType,
      numberOfPhotos,
      photographyType,
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeBadgeColor = (grade: string) => {
    const colors: Record<string, string> = {
      'Excellent': 'bg-green-100 text-green-800 border-green-200',
      'Good': 'bg-blue-100 text-blue-800 border-blue-200',
      'Fair': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Poor': 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[grade] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <Camera className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Listing Photo Quality Analyzer</h1>
            <p className="text-muted-foreground mt-2">
              Evaluate and optimize your property listing photos with AI-powered quality assessment
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Photo Analyzer
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Photo Collection Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="photoDescription">Photo Description *</Label>
                <Textarea
                  id="photoDescription"
                  value={photoDescription}
                  onChange={(e) => setPhotoDescription(e.target.value)}
                  placeholder="Describe the photos in your listing. What rooms/areas are shown? What's the lighting like? Any special features captured? Any issues you notice?"
                  rows={6}
                />
                <p className="text-sm text-muted-foreground">
                  Provide details about your current listing photos, their quality, composition, and coverage
                </p>
              </div>

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
                      <SelectItem value="Luxury home">Luxury home</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numberOfPhotos">Number of Photos *</Label>
                  <Input
                    id="numberOfPhotos"
                    type="number"
                    value={numberOfPhotos}
                    onChange={(e) => setNumberOfPhotos(Number(e.target.value))}
                    min={1}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">
                    {numberOfPhotos} photo{numberOfPhotos !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photographyType">Photography Type *</Label>
                  <Select value={photographyType} onValueChange={setPhotographyType}>
                    <SelectTrigger id="photographyType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Professional">Professional photographer</SelectItem>
                      <SelectItem value="Agent taken">Agent taken (DSLR/camera)</SelectItem>
                      <SelectItem value="Smartphone">Smartphone photos</SelectItem>
                      <SelectItem value="Mixed">Mixed quality</SelectItem>
                      <SelectItem value="MLS standard">MLS standard photos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAnalyze}
                  disabled={loading || !photoDescription}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Photos...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Analyze Photo Quality
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
                  <span>Photo Quality Assessment</span>
                  <Badge className={getGradeBadgeColor(data.qualityGrade)} variant="outline">
                    {data.qualityGrade}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Overall Quality Score</div>
                  <div className={`text-6xl font-bold ${getScoreColor(data.overallScore)}`}>
                    {data.overallScore}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">out of 100</div>
                </div>

                <Separator />

                {data.categoryScores && (
                  <>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Category Breakdown</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(data.categoryScores).map(([category, score]: [string, any]) => (
                          <div key={category} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <Badge variant="outline">{score}/100</Badge>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-blue-500' : score >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${score}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                  </>
                )}

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {data.strengths && data.strengths.map((strength: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    Issues Found
                  </h3>
                  <ul className="space-y-2">
                    {data.issues && data.issues.map((issue: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {data.missingShots && data.missingShots.length > 0 && (
                  <>
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Image className="h-5 w-5 text-orange-600" />
                        Missing Essential Shots
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {data.missingShots.map((shot: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            {shot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                  </>
                )}

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Improvement Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {data.recommendations && data.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {data.competitiveAnalysis && (
                  <>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Competitive Analysis</h3>
                      <p className="text-sm">{data.competitiveAnalysis}</p>
                    </div>
                    <Separator />
                  </>
                )}

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Summary</h3>
                  <p className="text-sm">{data.summary}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to Listing Photo Quality Analysis</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is Listing Photo Quality Analysis?</h2>
              <p>
                Listing photo quality analysis is the systematic evaluation of real estate property photographs based on professional photography standards, marketing effectiveness, and buyer engagement factors. In today&apos;s digital real estate market, photos are the first—and often only—impression potential buyers receive before deciding whether to schedule a showing or move to the next listing.
              </p>
              <p>
                Research consistently shows that listing photos directly impact sale outcomes. Properties with professional photography sell 32% faster and command prices up to 47% higher than comparable properties with amateur photos. Yet many agents and sellers underestimate photo quality&apos;s importance, posting dark, cluttered, or poorly composed images that actively repel buyers rather than attract them.
              </p>

              <h2>Why Use AI for Photo Quality Assessment?</h2>
              <p>
                Artificial intelligence brings several advantages to photo quality evaluation:
              </p>
              <ul>
                <li><strong>Objective Standards</strong> - AI applies consistent criteria across all photos, eliminating subjective bias. What seems &quot;good enough&quot; to one person might fall short of market standards that AI objectively identifies.</li>
                <li><strong>Comprehensive Analysis</strong> - AI evaluates dozens of quality factors simultaneously: lighting, composition, staging, coverage completeness, technical quality, and marketing effectiveness. Manual review might miss crucial details that AI catches instantly.</li>
                <li><strong>Competitive Benchmarking</strong> - AI can compare your photos against thousands of high-performing listings to identify gaps and opportunities. It knows what top listings in your market include and can measure your photos against those standards.</li>
                <li><strong>Pattern Recognition</strong> - Machine learning identifies subtle quality issues that human reviewers overlook: slight color imbalances, composition problems, clutter that diminishes appeal, or lighting that makes spaces feel smaller.</li>
                <li><strong>Actionable Feedback</strong> - Rather than simply rating photos as good or bad, AI provides specific, actionable recommendations for improvement, identifying exactly what to fix and how to fix it.</li>
              </ul>

              <h2>Key Photo Quality Categories</h2>

              <h3>1. Technical Quality (20-25% of score)</h3>
              <p>
                Technical quality encompasses the fundamental photography elements that create clear, professional images:
              </p>
              <p>
                <strong>Resolution and Sharpness:</strong> Photos must be high-resolution (minimum 1920x1080 pixels for web, higher for print materials) and critically sharp. Blurry or low-resolution photos immediately signal amateur work and reduce buyer confidence. Even slight motion blur or focus issues diminish perceived value.
              </p>
              <p>
                <strong>Proper Exposure:</strong> Images should have balanced exposure with detail visible in both highlights and shadows. Overexposed photos wash out features and make rooms look stark. Underexposed images hide details and make properties feel dark and uninviting. HDR (High Dynamic Range) processing often achieves ideal exposure balance.
              </p>
              <p>
                <strong>Color Accuracy:</strong> Colors should appear natural and true-to-life. Overly saturated images look artificial. Incorrect white balance creates color casts (too blue/cold or too yellow/warm) that distort buyer perception of spaces. Professional color correction ensures accurate representation.
              </p>
              <p>
                <strong>Lens Distortion:</strong> Wide-angle lenses (common in real estate photography) create barrel distortion, making straight lines curve. Professional photos correct this distortion in post-processing. Excessive fisheye effect makes photos look amateurish and misrepresents room dimensions.
              </p>

              <h3>2. Lighting Quality (25-30% of score)</h3>
              <p>
                Lighting dramatically affects how inviting and spacious properties appear:
              </p>
              <p>
                <strong>Natural Light Optimization:</strong> Professional photographers schedule shoots during optimal natural light conditions and blend ambient window light with artificial lighting. Photos should show bright, naturally lit spaces without harsh window glare or dark shadows. Proper lighting makes rooms feel larger and more welcoming.
              </p>
              <p>
                <strong>Artificial Light Balance:</strong> All light fixtures should be turned on, creating warm, lived-in ambiance. Flash photography should be avoided or carefully balanced to prevent harsh shadows and unnatural lighting. Lights should enhance rather than overpower natural illumination.
              </p>
              <p>
                <strong>Even Illumination:</strong> Professional photos avoid dark corners and shadowy areas. Every part of the room should be visible and well-lit. Strategic lighting placement and HDR techniques ensure even illumination throughout each shot.
              </p>

              <h3>3. Composition and Framing (20-25% of score)</h3>
              <p>
                How photos are framed and composed affects their visual appeal and effectiveness:
              </p>
              <p>
                <strong>Strategic Angles:</strong> Professional photographers shoot from corners to maximize apparent room size. Height matters too—camera positioned at 4-5 feet (chest level) provides natural perspective. Avoid extreme angles that distort spaces or create awkward compositions.
              </p>
              <p>
                <strong>Balanced Composition:</strong> Apply rule-of-thirds and leading lines to create visually pleasing images. Frame shots to include foreground interest while showcasing room depth. Avoid centered, static compositions that lack visual interest.
              </p>
              <p>
                <strong>Vertical and Horizontal Lines:</strong> Keep vertical lines (walls, doorframes) perfectly vertical and horizontal lines (countertops, floors) level. Tilted horizons and leaning walls look unprofessional and distract buyers from property features.
              </p>

              <h3>4. Staging and Presentation (15-20% of score)</h3>
              <p>
                How spaces are prepared before photography significantly impacts photo quality:
              </p>
              <p>
                <strong>Decluttering:</strong> Remove personal items, excess furniture, and clutter. Counter surfaces should be clear. Photos should showcase space, not possessions. Even attractive decor can distract if excessive.
              </p>
              <p>
                <strong>Strategic Styling:</strong> Minimal staging enhances photos without overwhelming spaces. Fresh flowers, neatly arranged pillows, and tasteful accessories add warmth. Avoid over-staging that makes rooms feel like showrooms rather than homes.
              </p>
              <p>
                <strong>Cleanliness:</strong> Everything must be immaculate. Dirty windows, dusty surfaces, unmade beds, or visible trash instantly diminish perceived value. Clean spaces photograph dramatically better and signal well-maintained properties.
              </p>

              <h3>5. Coverage Completeness (15-20% of score)</h3>
              <p>
                Comprehensive photo coverage gives buyers confidence and reduces questions:
              </p>
              <p>
                <strong>All Major Spaces:</strong> Include every room buyers expect: living areas, all bedrooms, all bathrooms, kitchen, dining areas, home office, and garage. Missing rooms creates suspicion about potential problems.
              </p>
              <p>
                <strong>Key Features:</strong> Highlight special features: fireplaces, built-ins, high-end finishes, unique architectural details, upgraded appliances, and luxury fixtures. Features not photographed might as well not exist to online buyers.
              </p>
              <p>
                <strong>Outdoor Spaces:</strong> Front exterior, backyard, patio, pool, landscaping, and curb appeal shots are essential. Many buyers prioritize outdoor living spaces and will skip listings without outdoor photos.
              </p>

              <h2>Optimal Photo Quantity by Property Type</h2>
              <ul>
                <li><strong>Small Condo/Apartment (under 1000 sq ft):</strong> 15-20 photos</li>
                <li><strong>Standard Home (1000-2000 sq ft):</strong> 25-35 photos</li>
                <li><strong>Large Home (2000-3500 sq ft):</strong> 35-50 photos</li>
                <li><strong>Luxury/Estate (3500+ sq ft):</strong> 50-75+ photos</li>
                <li><strong>Land/Lot:</strong> 10-15 photos showing different views and features</li>
                <li><strong>Commercial:</strong> 30-60 photos depending on size and complexity</li>
              </ul>

              <h2>Step-by-Step Usage Guide</h2>

              <h3>Step 1: Gather Current Listing Photos</h3>
              <p>
                Collect all photos currently used or planned for your listing. Review them systematically to understand what you have:
              </p>
              <ul>
                <li>Count total number of photos</li>
                <li>Note which rooms/areas are covered</li>
                <li>Identify photography type (professional, agent-taken, smartphone)</li>
                <li>Observe overall lighting quality</li>
                <li>Check for obvious issues (blur, poor angles, clutter)</li>
              </ul>

              <h3>Step 2: Describe Photo Collection</h3>
              <p>
                Provide comprehensive description of your photo set including:
              </p>
              <ul>
                <li>Which rooms and areas are photographed</li>
                <li>Lighting quality and sources (natural light, artificial, mixed)</li>
                <li>Any special features highlighted or missing</li>
                <li>Staging level and presentation quality</li>
                <li>Any known issues or concerns</li>
              </ul>

              <h3>Step 3: Select Property Type and Details</h3>
              <p>
                Accurate property type selection ensures appropriate benchmarking. Luxury homes require more photos and higher technical standards than starter condos. Commercial properties need different shots than residential.
              </p>

              <h3>Step 4: Specify Photo Count and Type</h3>
              <p>
                Enter exact number of photos and indicate whether they&apos;re professional, agent-taken, or smartphone photos. This context helps AI calibrate expectations and provide relevant recommendations.
              </p>

              <h3>Step 5: Review Quality Score and Grade</h3>
              <p>
                Examine your overall quality score and grade:
              </p>
              <ul>
                <li><strong>Excellent (80-100):</strong> Professional-grade photos ready to attract maximum buyer interest</li>
                <li><strong>Good (60-79):</strong> Solid photos with minor improvements recommended</li>
                <li><strong>Fair (40-59):</strong> Acceptable but significant improvements needed for competitive advantage</li>
                <li><strong>Poor (0-39):</strong> Photos require major overhaul or professional reshoot</li>
              </ul>

              <h3>Step 6: Analyze Category Breakdowns</h3>
              <p>
                Review individual category scores to identify specific weak areas:
              </p>
              <ul>
                <li>Low technical quality score → Consider professional photographer or better equipment</li>
                <li>Poor lighting score → Reschedule shoot for better natural light, add supplemental lighting</li>
                <li>Weak composition score → Study professional photography techniques or hire pro</li>
                <li>Low staging score → Declutter, clean, and add minimal tasteful staging</li>
                <li>Incomplete coverage → Identify and photograph missing rooms/features</li>
              </ul>

              <h3>Step 7: Address Identified Issues</h3>
              <p>
                Work through each identified issue systematically:
              </p>
              <ul>
                <li>Prioritize issues by impact on buyer perception</li>
                <li>Determine which issues you can fix yourself vs. requiring professional help</li>
                <li>Create action plan with timeline for improvements</li>
                <li>Budget for necessary professional services if DIY isn&apos;t sufficient</li>
              </ul>

              <h3>Step 8: Fill Coverage Gaps</h3>
              <p>
                If analysis reveals missing essential shots, schedule additional photography session to capture:
              </p>
              <ul>
                <li>Unphotographed rooms</li>
                <li>Key features mentioned in description but not shown</li>
                <li>Outdoor spaces and curb appeal</li>
                <li>Detail shots of upgrades and luxury features</li>
              </ul>

              <h3>Step 9: Implement Recommendations</h3>
              <p>
                Follow specific recommendations provided, which might include:
              </p>
              <ul>
                <li>Retaking certain photos with better lighting</li>
                <li>Correcting technical issues through editing software</li>
                <li>Reordering photos to lead with strongest images</li>
                <li>Removing weak photos that diminish overall impression</li>
                <li>Hiring professional photographer for complete reshoot</li>
              </ul>

              <h3>Step 10: Reanalyze After Improvements</h3>
              <p>
                After implementing changes, run analysis again to measure improvement and ensure you&apos;ve addressed all critical issues. Continue refining until you achieve Good or Excellent rating.
              </p>

              <h2>Best Practices for High-Quality Listing Photos</h2>

              <h3>Timing is Everything</h3>
              <p>
                Schedule photography during optimal conditions. For most homes, late morning to early afternoon (10 AM - 2 PM) provides the best natural light. Avoid early morning or late afternoon when harsh angular sunlight creates dramatic shadows. Overcast days provide soft, even lighting ideal for exterior shots. Consider seasonal factors—photograph pools in summer when they&apos;re filled and landscaping is lush.
              </p>

              <h3>Prepare Properties Thoroughly</h3>
              <p>
                Spend as much time preparing the property as shooting it. Deep clean everything, including windows, mirrors, and light fixtures. Remove all personal items, family photos, and unnecessary furniture. Store away trash cans, cleaning supplies, and pet accessories. Turn on all lights and open all curtains/blinds (unless facing harsh direct sun). Fresh flowers and tasteful staging accessories add warmth without clutter.
              </p>

              <h3>Invest in Professional Photography</h3>
              <p>
                For properties over $300,000, professional photography essentially pays for itself through faster sales and higher prices. Professionals have expertise, equipment, and editing skills that justify the $150-400 cost. Even for lower-priced properties, professional photos create competitive advantage in crowded markets.
              </p>

              <h3>Prioritize Photo Order</h3>
              <p>
                The first photo is the most important—it&apos;s the thumbnail image in search results. Use your absolute best, most impressive shot first. Typically this is an eye-catching living room or impressive exterior. Following photos should flow logically: exterior → entry/foyer → main living areas → kitchen → bedrooms → bathrooms → outdoor spaces → special features.
              </p>

              <h3>Capture Multiple Angles</h3>
              <p>
                For important rooms (kitchen, master bedroom, main living area), shoot from multiple angles. This gives buyers comprehensive understanding of space and allows you to select the most flattering perspective. Different angles may highlight different features or make rooms appear more spacious.
              </p>

              <h2>Common Mistakes to Avoid</h2>

              <h3>Using Too Few Photos</h3>
              <p>
                The most common mistake is posting too few photos, leaving buyers with questions about what you&apos;re hiding. Listings with 1-10 photos sell significantly slower than those with 25+ images. Buyers want to virtually tour every room and see all features before committing time to physical showing. Incomplete photo coverage costs showings and offers.
              </p>

              <h3>Photographing Unprepared Spaces</h3>
              <p>
                Rushing photography before properly preparing the property sabotages listing success. Cluttered counters, unmade beds, dirty windows, and personal items make properties look smaller, less valuable, and poorly maintained. Even expensive professional photography can&apos;t overcome unprepared spaces. Always deep clean and stage before shooting.
              </p>

              <h3>Shooting in Poor Lighting</h3>
              <p>
                Dark, dingy photos immediately repel buyers. Never photograph at dusk, night, or during storm conditions unless specifically highlighting evening ambiance for luxury properties. Turn on every light, open window treatments, and shoot during daytime when possible. If natural light is insufficient, add supplemental lighting or hire professional with proper equipment.
              </p>

              <h3>Using Extreme Wide-Angle Lenses</h3>
              <p>
                While wide-angle lenses help capture entire rooms, extreme fisheye effects distort spaces unrealistically and look unprofessional. Use moderate wide-angle (16-24mm equivalent) rather than ultra-wide (under 16mm). Correct lens distortion in post-processing to maintain straight lines.
              </p>

              <h3>Neglecting Exterior and Curb Appeal</h3>
              <p>
                Many listings include beautiful interior photos but omit or minimize exterior images. Buyers want to see front elevation, backyard, landscaping, and neighborhood context. Curb appeal photos set first impressions and help buyers envision approaching their potential new home. Include multiple exterior angles in various lighting conditions.
              </p>

              <h3>Forgetting Detail Shots</h3>
              <p>
                While room shots are essential, detail photos of luxury features add value: close-ups of granite countertops, hardwood floors, crown molding, fixtures, and appliances. These details help justify price and highlight quality that room shots might not capture. Include 3-5 detail shots in every listing.
              </p>

              <h2>Real-World Applications</h2>

              <h3>Competitive Market Differentiation</h3>
              <p>
                In competitive markets with multiple similar listings, photo quality becomes the differentiating factor. When ten comparable homes are available, buyers prioritize showings for properties with superior photos. Investing in professional photography and comprehensive coverage directly translates to more showings and faster sales.
              </p>

              <h3>Luxury Property Marketing</h3>
              <p>
                Luxury properties require exceptional photo quality. Wealthy buyers expect professional presentation that matches property value. Luxury photos should include drone aerials, twilight shots, lifestyle staging, and extensive coverage of every premium feature. Luxury sellers judge agent professionalism partially on photo quality, so excellence is non-negotiable.
              </p>

              <h3>Investment Property Presentation</h3>
              <p>
                For investment properties and rentals, photos serve dual purposes: attracting buyers AND documenting current condition for tenants. Comprehensive photos showing every room, all fixtures, and existing condition protect landlords from later disputes while marketing effectively to potential buyers.
              </p>

              <h3>Vacant Property Challenges</h3>
              <p>
                Vacant properties photograph poorly—empty rooms feel cold and smaller than furnished spaces. Consider virtual staging to add furniture digitally, or rent minimal furniture for photo session. If showing vacant, use ultra-wide angles to maximize apparent size and shoot during optimal light to warm sterile spaces.
              </p>

              <h3>Pre-listing Photo Analysis</h3>
              <p>
                Run photo analysis before listing to identify improvements needed. This might reveal that quick staging updates or waiting for better weather to reshoot exteriors is worth delaying launch. First impressions matter enormously—it&apos;s better to delay listing one week for perfect photos than launch with mediocre images that reduce buyer interest.
              </p>

              <h2>Conclusion</h2>
              <p>
                The AI Listing Photo Quality Analyzer provides objective, comprehensive assessment of your property photos against professional standards and market expectations. In the digital age where 90%+ of buyers begin their search online, photo quality directly determines whether your listing generates showings or gets scrolled past without a second glance.
              </p>
              <p>
                Excellent photos don&apos;t just attract more buyers—they attract better buyers. High-quality images signal a well-maintained, valuable property being marketed by professional, detail-oriented representation. Conversely, poor photos raise red flags about potential property problems and amateur representation, even when properties themselves are excellent.
              </p>
              <p>
                Use this tool to identify gaps, implement improvements, and ensure your listings present as professionally as possible. The investment in high-quality photography—whether through professional services or by improving your own photography skills—pays dividends through faster sales, higher prices, and enhanced professional reputation. In competitive real estate markets, exceptional photos aren&apos;t optional—they&apos;re essential for success.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
