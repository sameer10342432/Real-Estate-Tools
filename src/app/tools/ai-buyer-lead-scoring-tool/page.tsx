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
import { Target, TrendingUp, AlertCircle, CheckCircle, Sparkles, BookOpen, Info, Loader2 } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIBuyerLeadScoringTool() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState(350000);
  const [preApproved, setPreApproved] = useState(false);
  const [timeline, setTimeline] = useState('1-3 months');
  const [motivation, setMotivation] = useState('First-time homebuyer looking to start a family');
  const [location, setLocation] = useState('Austin, TX');
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-buyer-lead-scoring-tool',
  });

  const handleAnalyze = async () => {
    await generate({
      name,
      email: email || undefined,
      phone: phone || undefined,
      budget,
      preApproved,
      timeline,
      motivation,
      location,
      propertyType,
      additionalNotes: additionalNotes || undefined,
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
      'A': 'bg-green-100 text-green-800 border-green-200',
      'B': 'bg-blue-100 text-blue-800 border-blue-200',
      'C': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'D': 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[grade] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Target className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Buyer Lead Scoring Tool</h1>
            <p className="text-muted-foreground mt-2">
              Score and prioritize buyer leads using AI analysis of qualification factors
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Lead Scorer
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Lead Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget *</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    min={0}
                    step={10000}
                  />
                  <p className="text-sm text-muted-foreground">
                    ${budget.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline *</Label>
                  <Select value={timeline} onValueChange={setTimeline}>
                    <SelectTrigger id="timeline">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediately">Immediately (0-30 days)</SelectItem>
                      <SelectItem value="1-3 months">1-3 months</SelectItem>
                      <SelectItem value="3-6 months">3-6 months</SelectItem>
                      <SelectItem value="6-12 months">6-12 months</SelectItem>
                      <SelectItem value="Just looking">Just looking (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location *</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State"
                  />
                </div>

                <div className="space-y-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="preApproved"
                    checked={preApproved}
                    onChange={(e) => setPreApproved(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="preApproved" className="font-normal cursor-pointer">
                    Pre-approved for financing
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation / Needs *</Label>
                <Textarea
                  id="motivation"
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  placeholder="Describe why they're buying, what they're looking for, family situation, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                <Textarea
                  id="additionalNotes"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Any other relevant information about this lead"
                  rows={2}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAnalyze}
                  disabled={loading || !name || !budget}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Lead...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Score This Lead
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
                  <span>Lead Scoring Results</span>
                  <Badge className={getGradeBadgeColor(data.grade)} variant="outline">
                    Grade: {data.grade}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Lead Score</div>
                  <div className={`text-6xl font-bold ${getScoreColor(data.score)}`}>
                    {data.score}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">out of 100</div>
                  <Badge className="mt-4" variant={data.priority === 'High' ? 'default' : 'secondary'}>
                    {data.priority} Priority
                  </Badge>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {data.strengths.map((strength: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {data.concerns && data.concerns.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Concerns
                      </h3>
                      <ul className="space-y-2">
                        {data.concerns.map((concern: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">⚠</span>
                            <span>{concern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {data.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">→</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

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
              <CardTitle>Complete Guide to AI Buyer Lead Scoring</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is Buyer Lead Scoring?</h2>
              <p>
                Buyer lead scoring is a systematic method of ranking potential homebuyers based on their likelihood to purchase. By evaluating multiple qualification factors, real estate professionals can prioritize their time and resources on the most promising leads, resulting in higher conversion rates and more efficient business operations.
              </p>

              <h2>Why Use AI for Lead Scoring?</h2>
              <p>
                Artificial intelligence brings objectivity, consistency, and speed to the lead scoring process. Unlike manual evaluation, AI can analyze multiple data points simultaneously, identify patterns that humans might miss, and provide instant scores without bias or fatigue. Our AI Buyer Lead Scoring Tool evaluates:</p>
              <ul>
                <li><strong>Financial Qualification</strong> - Budget, pre-approval status, and ability to purchase</li>
                <li><strong>Timeline Readiness</strong> - How soon the buyer intends to make a purchase</li>
                <li><strong>Motivation Level</strong> - Why they're buying and how committed they are</li>
                <li><strong>Property Preferences</strong> - Clarity and realism of their requirements</li>
                <li><strong>Location Specificity</strong> - How defined their target area is</li>
              </ul>

              <h2>Key Scoring Factors Explained</h2>
              
              <h3>1. Financial Qualification (35-40% weight)</h3>
              <p>
                <strong>Budget:</strong> Buyers with clearly defined budgets score higher than those still exploring. A specific number indicates serious consideration and research.
              </p>
              <p>
                <strong>Pre-Approval Status:</strong> Pre-approved buyers score significantly higher because they've already completed the most significant barrier to purchase. Lenders have verified their income, credit, and down payment funds.
              </p>

              <h3>2. Timeline (25-30% weight)</h3>
              <p>Urgency directly correlates with conversion probability:</p>
              <ul>
                <li><strong>Immediately (0-30 days)</strong> - Highest score. These buyers are ready to act.</li>
                <li><strong>1-3 months</strong> - High score. Active shopping phase.</li>
                <li><strong>3-6 months</strong> - Medium score. Serious but not urgent.</li>
                <li><strong>6-12 months</strong> - Lower score. Long nurture cycle required.</li>
                <li><strong>Just looking (12+ months)</strong> - Lowest score. Educational phase only.</li>
              </ul>

              <h3>3. Motivation (20-25% weight)</h3>
              <p>
                Understanding why someone is buying reveals their commitment level. High-scoring motivations include:
              </p>
              <ul>
                <li>Job relocation with firm start date</li>
                <li>Growing family expecting a baby</li>
                <li>Lease ending with specific date</li>
                <li>Selling current home (under contract)</li>
                <li>Divorce or marriage requiring change</li>
              </ul>
              <p>Lower-scoring motivations include vague desires like "someday owning" or "just curious about the market."</p>

              <h3>4. Property Specificity (10-15% weight)</h3>
              <p>
                Buyers who know exactly what they want (specific neighborhoods, must-have features, school districts) score higher than those with vague preferences. Specificity indicates research and readiness.
              </p>

              <h2>Understanding Your Lead Score</h2>
              
              <h3>Grade A (80-100 points): Hot Lead</h3>
              <p>
                <strong>Priority: Immediate Contact Required</strong>
              </p>
              <p>
                Grade A leads are your best prospects. They typically have pre-approval, clear budgets, urgent timelines, and strong motivation. These leads should receive immediate personal attention, including same-day follow-up calls and property matches.
              </p>
              <p><strong>Action Steps:</strong></p>
              <ul>
                <li>Contact within 1 hour of inquiry</li>
                <li>Schedule in-person meeting or video call</li>
                <li>Send curated property matches immediately</li>
                <li>Add to priority CRM category with daily follow-up</li>
              </ul>

              <h3>Grade B (60-79 points): Warm Lead</h3>
              <p>
                <strong>Priority: Same-Day or Next-Day Contact</strong>
              </p>
              <p>
                Grade B leads are qualified but may need one or two elements to move forward—perhaps they need pre-approval or are a few months out. They deserve prompt attention and nurturing.
              </p>
              <p><strong>Action Steps:</strong></p>
              <ul>
                <li>Contact within 4-6 hours</li>
                <li>Assess missing qualification elements</li>
                <li>Provide resources (lender referrals, market reports)</li>
                <li>Weekly check-ins to monitor progress</li>
              </ul>

              <h3>Grade C (40-59 points): Cool Lead</h3>
              <p>
                <strong>Priority: Weekly Nurture Campaign</strong>
              </p>
              <p>
                Grade C leads have potential but require significant nurturing. They may lack pre-approval, have distant timelines, or unclear requirements. Focus on education and relationship building.
              </p>
              <p><strong>Action Steps:</strong></p>
              <ul>
                <li>Add to email nurture campaign</li>
                <li>Send market updates bi-weekly</li>
                <li>Provide educational content (buying guides, market trends)</li>
                <li>Monthly check-in calls to gauge progress</li>
              </ul>

              <h3>Grade D (0-39 points): Cold Lead</h3>
              <p>
                <strong>Priority: Automated Drip Campaign Only</strong>
              </p>
              <p>
                Grade D leads are unqualified or very early in their journey. Rather than investing personal time, place them in automated marketing sequences and reassess if they engage.
              </p>
              <p><strong>Action Steps:</strong></p>
              <ul>
                <li>Add to long-term email drip campaign</li>
                <li>Send valuable content monthly</li>
                <li>Monitor engagement (email opens, link clicks)</li>
                <li>Manually follow up only if they show renewed interest</li>
              </ul>

              <h2>How to Use This Tool Effectively</h2>
              
              <h3>Step 1: Gather Complete Information</h3>
              <p>
                The more data you provide, the more accurate the AI score. During initial conversations, ask qualifying questions:
              </p>
              <ul>
                <li>"What's your target budget for a home?"</li>
                <li>"Have you spoken with a lender about pre-approval?"</li>
                <li>"What's your ideal timeline for purchasing?"</li>
                <li>"What's motivating you to buy right now?"</li>
                <li>"Which neighborhoods are you considering?"</li>
                <li>"What type of property are you looking for?"</li>
              </ul>

              <h3>Step 2: Input Data Accurately</h3>
              <p>
                Be honest and complete when entering lead information. Don't inflate scores by omitting concerns or negative factors—accurate scoring helps you allocate time appropriately.
              </p>

              <h3>Step 3: Review AI Analysis</h3>
              <p>
                The AI provides not just a score, but detailed analysis including strengths, concerns, and recommendations. Use this insight to craft personalized follow-up strategies.
              </p>

              <h3>Step 4: Take Action Based on Priority</h3>
              <p>
                Don't let high-priority leads sit. The tool identifies urgency—act on it immediately. Lower-priority leads benefit from systematic nurturing rather than intensive time investment.
              </p>

              <h2>Common Lead Scoring Mistakes to Avoid</h2>
              
              <h3>1. Ignoring Low Scores</h3>
              <p>
                A low score doesn't mean "bad person"—it means "wrong timing." Grade C and D leads can become A leads with proper nurturing. Don't delete them; cultivate them.
              </p>

              <h3>2. Over-Prioritizing "Nice" Leads</h3>
              <p>
                Sometimes pleasant, friendly leads who enjoy chatting aren't actually qualified buyers. Don't let likability bias override objective scoring.
              </p>

              <h3>3. Neglecting Pre-Approval</h3>
              <p>
                No factor predicts conversion better than pre-approval. A buyer without it is speculative. Always encourage this critical step before investing significant time.
              </p>

              <h3>4. Failing to Re-Score</h3>
              <p>
                Lead scores change as circumstances evolve. Re-score leads every 30-60 days or when major changes occur (got pre-approved, timeline moved up, etc.).
              </p>

              <h2>Advanced Lead Management Strategies</h2>
              
              <h3>Segmentation by Score</h3>
              <p>
                Create CRM segments or email lists by grade. This allows targeted communication:
              </p>
              <ul>
                <li><strong>A-Grade:</strong> Personal calls, custom property matches</li>
                <li><strong>B-Grade:</strong> Lender introductions, market updates</li>
                <li><strong>C-Grade:</strong> Educational content, buying guides</li>
                <li><strong>D-Grade:</strong> Automated newsletters, seasonal check-ins</li>
              </ul>

              <h3>Time Allocation Framework</h3>
              <p>
                Use the 80/20 rule: Spend 80% of your time on A and B leads who represent 80% of potential revenue. The remaining 20% maintains nurture campaigns for C and D leads.
              </p>

              <h3>Conversion Tracking</h3>
              <p>
                Monitor which scores actually convert to transactions. Over time, you may discover patterns specific to your market that allow you to refine your follow-up strategies.
              </p>

              <h2>Real-World Example Scenarios</h2>
              
              <h3>Example 1: Grade A Lead</h3>
              <p>
                <strong>Profile:</strong> Sarah, budget $475K, pre-approved, timeline 30 days, motivated by job relocation starting next month, looking for 3BR home in specific suburb.
              </p>
              <p>
                <strong>Score:</strong> 92/100 (Grade A)
              </p>
              <p>
                <strong>Action:</strong> Immediate call, schedule same-day showing appointment, send 5-7 curated listings matching exact criteria. This lead has high conversion probability.
              </p>

              <h3>Example 2: Grade B Lead</h3>
              <p>
                <strong>Profile:</strong> Mike, budget $350K, not yet pre-approved, timeline 2-3 months, motivated by growing family, open to several neighborhoods.
              </p>
              <p>
                <strong>Score:</strong> 68/100 (Grade B)
              </p>
              <p>
                <strong>Action:</strong> Call within 24 hours, refer to trusted lender, send area comparison guide, schedule meeting after pre-approval. Strong potential requiring one critical step.
              </p>

              <h3>Example 3: Grade C Lead</h3>
              <p>
                <strong>Profile:</strong> Jennifer, budget "under $300K maybe," no pre-approval, timeline 6-8 months, motivation "tired of renting," vague location preferences.
              </p>
              <p>
                <strong>Score:</strong> 44/100 (Grade C)
              </p>
              <p>
                <strong>Action:</strong> Add to nurture email campaign, send first-time buyer guide, provide lender referral list, check in monthly. Needs education and preparation.
              </p>

              <h3>Example 4: Grade D Lead</h3>
              <p>
                <strong>Profile:</strong> Tom, no clear budget, no pre-approval, timeline "just looking for now," motivation "someday want to own," no specific requirements.
              </p>
              <p>
                <strong>Score:</strong> 22/100 (Grade D)
              </p>
              <p>
                <strong>Action:</strong> Automated drip campaign only. Valuable content but minimal personal time until engagement signals change.
              </p>

              <h2>Integration with Your CRM</h2>
              <p>
                For maximum effectiveness, integrate lead scores into your customer relationship management system:
              </p>
              <ul>
                <li>Create custom fields for score, grade, and priority level</li>
                <li>Set up automated workflows triggered by score thresholds</li>
                <li>Establish reminder tasks based on priority (A = daily, B = weekly, etc.)</li>
                <li>Track score changes over time to measure progress</li>
              </ul>

              <h2>Conclusion: Work Smarter, Not Harder</h2>
              <p>
                The AI Buyer Lead Scoring Tool transforms your approach from reactive to strategic. By objectively evaluating every lead against consistent criteria, you ensure that qualified buyers receive the attention they deserve while unqualified prospects receive appropriate nurturing without draining your time.
              </p>
              <p>
                Remember: Not every lead is ready to buy today, but proper scoring and nurturing converts tomorrow's C leads into today's A leads. Use this tool to build a systematic, scalable approach to lead management that grows your business efficiently.
              </p>

              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="font-semibold text-lg mb-2">Pro Tip</p>
                <p>
                  Score new leads within 15 minutes of inquiry. Speed-to-lead is critical—the first agent to respond with relevant information often wins the client. Use this tool to immediately identify which leads warrant instant personal attention versus automated follow-up.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
