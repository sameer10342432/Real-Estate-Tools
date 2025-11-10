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
import { Calculator, Lightbulb, FileText, TrendingUp, Copy, CheckCircle, Info, Sparkles, BookOpen, RefreshCw, Target } from 'lucide-react';

interface BlogPostIdea {
  title: string;
  angle: string;
  targetAudience: string;
  keyPoints: string[];
  seoKeywords: string[];
  contentType: string;
  estimatedWordCount: number;
  difficulty: string;
  callToAction: string;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Real Estate Blog Post Idea Generator',
    description: 'Generate creative real estate blog post ideas and content topics tailored to your market, audience, and expertise using AI assistance',
  };
}

export default function AIBlogPostIdeaGenerator() {
  const [topic, setTopic] = useState<string>('home buying');
  const [audienceType, setAudienceType] = useState<string>('first-time-buyers');
  const [contentGoal, setContentGoal] = useState<string>('educate');
  const [location, setLocation] = useState<string>('');
  const [season, setSeason] = useState<string>('any');
  const [contentLength, setContentLength] = useState<string>('medium');
  const [expertiseLevel, setExpertiseLevel] = useState<string>('beginner');
  const [includeLocation, setIncludeLocation] = useState<boolean>(false);
  const [includeTrends, setIncludeTrends] = useState<boolean>(true);
  const [includeData, setIncludeData] = useState<boolean>(false);

  const [generatedIdeas, setGeneratedIdeas] = useState<BlogPostIdea[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const blogIdeaDatabase: { [key: string]: any } = {
    'home buying': {
      titles: [
        '{count} Essential Steps for {audience} When Buying a Home in {year}',
        'The Ultimate Guide to {location} Home Buying: What You Need to Know',
        'Home Buying Mistakes to Avoid: Expert Advice for {audience}',
        'How to Get Pre-Approved for a Mortgage: A Complete Guide',
        'Understanding Closing Costs: A Breakdown for {audience}',
        '{season} Home Buying: Pros, Cons, and Tips for Success',
      ],
      keyPoints: [
        'Get pre-approved before house hunting',
        'Research neighborhoods and school districts',
        'Budget for closing costs and moving expenses',
        'Work with an experienced real estate agent',
        'Don\'t skip the home inspection',
        'Understand different loan types and requirements',
        'Make a competitive offer in hot markets',
        'Review all documents carefully before signing',
      ],
      seoKeywords: ['home buying process', 'mortgage pre-approval', 'closing costs', 'real estate agent', 'home inspection', 'first-time homebuyer'],
    },
    'investment': {
      titles: [
        '{count} Real Estate Investment Strategies for {audience} in {year}',
        'How to Analyze Investment Properties: A Step-by-Step Guide',
        'Cash Flow vs. Appreciation: Which Investment Strategy is Right for You?',
        'The {location} Real Estate Market: Investment Opportunities and Trends',
        'Building Passive Income Through Real Estate: A Beginner\'s Guide',
        'Fix and Flip vs. Buy and Hold: Comparing Investment Strategies',
      ],
      keyPoints: [
        'Calculate ROI and cash-on-cash return',
        'Analyze local market conditions and trends',
        'Understand financing options for investment properties',
        'Factor in property management costs',
        'Consider tax implications and deductions',
        'Diversify your real estate portfolio',
        'Screen tenants thoroughly',
        'Build relationships with contractors and vendors',
      ],
      seoKeywords: ['real estate investment', 'investment property', 'rental income', 'ROI', 'cash flow', 'property management', 'fix and flip'],
    },
    'selling': {
      titles: [
        '{count} Proven Tips to Sell Your Home Faster in {location}',
        'Home Staging Secrets That Attract Buyers and Maximize Value',
        'Pricing Your Home Right: A Strategic Guide for {season} Sellers',
        'FSBO vs. Using a Real Estate Agent: What\'s Best for {audience}?',
        'Preparing Your Home for Sale: A Room-by-Room Checklist',
        'Negotiating Multiple Offers: How to Get the Best Deal',
      ],
      keyPoints: [
        'Improve curb appeal and first impressions',
        'Declutter and depersonalize your space',
        'Make strategic repairs and updates',
        'Price competitively based on market analysis',
        'Professional photography is essential',
        'Time your listing for maximum exposure',
        'Be flexible with showings',
        'Understand negotiation strategies',
      ],
      seoKeywords: ['selling a home', 'home staging', 'curb appeal', 'real estate pricing', 'home valuation', 'listing strategy', 'seller tips'],
    },
    'market trends': {
      titles: [
        '{location} Real Estate Market Report: {season} {year} Trends and Predictions',
        'Understanding the Current Housing Market: Data and Insights for {audience}',
        'Interest Rates and Real Estate: How Changes Impact {audience}',
        'Emerging Neighborhoods in {location}: Where to Buy in {year}',
        'The Impact of Remote Work on Real Estate Trends',
        'Housing Affordability Crisis: Solutions and Opportunities',
      ],
      keyPoints: [
        'Analyze local market inventory levels',
        'Track median home prices and appreciation rates',
        'Monitor interest rate trends',
        'Identify emerging neighborhoods',
        'Understand demographic shifts',
        'Consider economic indicators',
        'Review days on market statistics',
        'Evaluate rental market conditions',
      ],
      seoKeywords: ['real estate market trends', 'housing market analysis', 'home prices', 'market forecast', 'real estate data', 'interest rates'],
    },
    'home improvement': {
      titles: [
        '{count} High-ROI Home Renovations for {audience}',
        'Kitchen Remodel Guide: Costs, Timeline, and Design Ideas',
        'Energy-Efficient Home Upgrades That Save Money and Add Value',
        'Bathroom Renovation on a Budget: Smart Solutions for {audience}',
        'Curb Appeal Projects with the Biggest Impact',
        'DIY vs. Hiring Professionals: Making Smart Renovation Decisions',
      ],
      keyPoints: [
        'Prioritize renovations by ROI',
        'Set a realistic budget with contingency',
        'Choose timeless materials and finishes',
        'Focus on kitchen and bathroom updates',
        'Improve energy efficiency',
        'Enhance curb appeal',
        'Get proper permits and inspections',
        'Plan for unexpected issues',
      ],
      seoKeywords: ['home renovation', 'remodeling costs', 'ROI', 'kitchen remodel', 'bathroom update', 'home improvement', 'property value'],
    },
    'financing': {
      titles: [
        'Understanding Different Mortgage Types: Which is Right for {audience}?',
        'FHA vs. Conventional Loans: A Complete Comparison for {year}',
        'How to Improve Your Credit Score Before Buying a Home',
        'Down Payment Assistance Programs in {location}',
        'Refinancing Your Mortgage: When Does It Make Sense?',
        'The Truth About Private Mortgage Insurance (PMI)',
      ],
      keyPoints: [
        'Compare loan types and requirements',
        'Understand interest rate structures',
        'Calculate total loan costs',
        'Review credit requirements',
        'Explore down payment options',
        'Consider loan terms (15 vs 30 year)',
        'Factor in PMI and insurance costs',
        'Shop multiple lenders for best rates',
      ],
      seoKeywords: ['mortgage types', 'home loan', 'FHA loan', 'conventional mortgage', 'interest rates', 'down payment', 'refinancing'],
    },
  };

  const generateBlogIdeas = () => {
    const ideas: BlogPostIdea[] = [];
    const currentYear = new Date().getFullYear();
    const database = blogIdeaDatabase[topic] || blogIdeaDatabase['home buying'];

    const audienceNames: { [key: string]: string } = {
      'first-time-buyers': 'First-Time Homebuyers',
      'investors': 'Real Estate Investors',
      'sellers': 'Home Sellers',
      'buyers': 'Home Buyers',
      'agents': 'Real Estate Agents',
      'millennials': 'Millennial Homebuyers',
      'retirees': 'Retirees',
    };

    const contentTypes = ['How-To Guide', 'Listicle', 'Ultimate Guide', 'Checklist', 'Comparison', 'Market Analysis'];
    const difficulties = ['Beginner-Friendly', 'Intermediate', 'Advanced'];

    const wordCounts: { [key: string]: number } = {
      'short': 800,
      'medium': 1500,
      'long': 2500,
    };

    const angles = [
      'Step-by-step instructional approach',
      'Data-driven analysis with statistics',
      'Common mistakes and how to avoid them',
      'Expert interview and insights',
      'Personal story and case study',
      'Comprehensive resource compilation',
      'Myth-busting and fact-checking',
      'Trend analysis and predictions',
    ];

    const ctas = [
      'Download our free homebuyer checklist',
      'Schedule a consultation with our team',
      'Subscribe for weekly market updates',
      'Get a free home valuation',
      'Join our real estate investor community',
      'Contact us for personalized advice',
      'Start your home search today',
      'Request our comprehensive guide',
    ];

    for (let i = 0; i < 5; i++) {
      const titleTemplate = database.titles[i % database.titles.length];
      let title = titleTemplate
        .replace('{count}', String(5 + (i * 2)))
        .replace('{audience}', audienceNames[audienceType] || 'Homebuyers')
        .replace('{location}', includeLocation && location ? location : 'Your Area')
        .replace('{year}', String(currentYear))
        .replace('{season}', season !== 'any' ? season.charAt(0).toUpperCase() + season.slice(1) : '');

      const selectedKeyPoints = [];
      const startIndex = i * 3;
      for (let j = 0; j < 5; j++) {
        const pointIndex = (startIndex + j) % database.keyPoints.length;
        selectedKeyPoints.push(database.keyPoints[pointIndex]);
      }

      const seoKeywords = [...database.seoKeywords];
      if (includeLocation && location) {
        seoKeywords.unshift(location + ' real estate');
      }
      if (season !== 'any') {
        seoKeywords.push(season + ' home buying');
      }

      const idea: BlogPostIdea = {
        title: title.trim(),
        angle: angles[i % angles.length],
        targetAudience: audienceNames[audienceType] || 'General Audience',
        keyPoints: selectedKeyPoints,
        seoKeywords: seoKeywords.slice(0, 8),
        contentType: contentTypes[i % contentTypes.length],
        estimatedWordCount: wordCounts[contentLength] || 1500,
        difficulty: difficulties[expertiseLevel === 'beginner' ? 0 : expertiseLevel === 'intermediate' ? 1 : 2],
        callToAction: ctas[i % ctas.length],
      };

      ideas.push(idea);
    }

    setGeneratedIdeas(ideas);
    setCopied(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAllIdeas = () => {
    const allIdeasText = generatedIdeas.map((idea, index) => {
      return `
IDEA ${index + 1}: ${idea.title}

Content Type: ${idea.contentType}
Target Audience: ${idea.targetAudience}
Angle: ${idea.angle}
Estimated Word Count: ${idea.estimatedWordCount}
Difficulty: ${idea.difficulty}

Key Points to Cover:
${idea.keyPoints.map((point, i) => `${i + 1}. ${point}`).join('\n')}

SEO Keywords: ${idea.seoKeywords.join(', ')}

Call to Action: ${idea.callToAction}

${'='.repeat(80)}
      `.trim();
    }).join('\n\n');

    copyToClipboard(allIdeasText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-cyan-600 p-3 rounded-full">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Real Estate Blog Post Idea Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generate creative, SEO-optimized blog post ideas for your real estate business. Get complete 
            content outlines with headlines, key points, keywords, and calls-to-action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Blog Idea Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="topic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="topic">Topic</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="topic" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="topic">Main Topic</Label>
                        <select
                          id="topic"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="home buying">Home Buying</option>
                          <option value="selling">Selling Homes</option>
                          <option value="investment">Real Estate Investment</option>
                          <option value="market trends">Market Trends & Analysis</option>
                          <option value="home improvement">Home Improvement & Renovation</option>
                          <option value="financing">Financing & Mortgages</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="audienceType">Target Audience</Label>
                        <select
                          id="audienceType"
                          value={audienceType}
                          onChange={(e) => setAudienceType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="first-time-buyers">First-Time Homebuyers</option>
                          <option value="investors">Real Estate Investors</option>
                          <option value="sellers">Home Sellers</option>
                          <option value="buyers">General Homebuyers</option>
                          <option value="agents">Real Estate Agents</option>
                          <option value="millennials">Millennials</option>
                          <option value="retirees">Retirees/Downsizers</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="contentGoal">Content Goal</Label>
                        <select
                          id="contentGoal"
                          value={contentGoal}
                          onChange={(e) => setContentGoal(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="educate">Educate</option>
                          <option value="inspire">Inspire</option>
                          <option value="convert">Convert Leads</option>
                          <option value="seo">SEO/Traffic</option>
                          <option value="establish-authority">Establish Authority</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="contentLength">Content Length</Label>
                        <select
                          id="contentLength"
                          value={contentLength}
                          onChange={(e) => setContentLength(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="short">Short (800 words)</option>
                          <option value="medium">Medium (1,500 words)</option>
                          <option value="long">Long-Form (2,500+ words)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="expertiseLevel">Reader Expertise Level</Label>
                        <select
                          id="expertiseLevel"
                          value={expertiseLevel}
                          onChange={(e) => setExpertiseLevel(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="season">Season/Timing</Label>
                        <select
                          id="season"
                          value={season}
                          onChange={(e) => setSeason(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="any">Any Time</option>
                          <option value="spring">Spring</option>
                          <option value="summer">Summer</option>
                          <option value="fall">Fall</option>
                          <option value="winter">Winter</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-4">
                    <div>
                      <Label htmlFor="location">Location (Optional)</Label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Austin, Texas"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Add location for geo-targeted content ideas
                      </p>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Content Options</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeLocation"
                          checked={includeLocation}
                          onChange={(e) => setIncludeLocation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeLocation">Include location-specific angles</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeTrends"
                          checked={includeTrends}
                          onChange={(e) => setIncludeTrends(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeTrends">Focus on current trends</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeData"
                          checked={includeData}
                          onChange={(e) => setIncludeData(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeData">Include data-driven ideas</Label>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={generateBlogIdeas} 
                      className="w-full bg-cyan-600 hover:bg-cyan-700"
                      size="lg"
                    >
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Generate Blog Post Ideas
                    </Button>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating Engaging Real Estate Blog Content</h2>
                      
                      <p className="text-gray-700 mb-4">
                        Consistent, high-quality blog content is essential for establishing authority in real estate, attracting 
                        organic traffic, and converting visitors into leads. A strategic approach to blog topics helps you create 
                        content that resonates with your audience while improving your search engine rankings and establishing 
                        your expertise.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Understanding Your Audience</h3>
                      
                      <p className="text-gray-700 mb-3">
                        Before generating blog ideas, clearly define your target audience. First-time homebuyers need educational 
                        content explaining the buying process, financing options, and common pitfalls. Investors seek data-driven 
                        analysis, ROI calculations, and market insights. Sellers want staging tips, pricing strategies, and market 
                        timing advice. Tailoring content to specific audience segments increases engagement and conversion rates.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Consider your audience's expertise level. Beginners appreciate step-by-step guides, definitions of industry 
                        terms, and comprehensive overviews. Experienced buyers and investors prefer in-depth analysis, advanced 
                        strategies, and nuanced market insights. Matching content complexity to audience expertise ensures your 
                        blog provides genuine value.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of High-Performing Real Estate Blog Posts</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>How-To Guides:</strong> Step-by-step instructional content performs exceptionally well in real 
                        estate. Examples include "How to Get Pre-Approved for a Mortgage," "How to Stage Your Home for Maximum 
                        Value," or "How to Analyze Investment Property Cash Flow." These posts establish your expertise while 
                        providing actionable value that readers can immediately implement.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Listicles:</strong> List-based posts generate high engagement and are easily scannable. "10 
                        Home Buying Mistakes to Avoid," "7 Kitchen Renovations with the Highest ROI," or "15 Questions to Ask 
                        Before Making an Offer" provide digestible information that readers can quickly consume and share.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Market Analysis:</strong> Data-driven content establishes authority and attracts serious buyers 
                        and investors. Monthly market reports, neighborhood comparisons, and trend analyses provide valuable 
                        insights while demonstrating your market expertise. Include charts, statistics, and specific data points 
                        to support your analysis.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Ultimate Guides:</strong> Comprehensive, long-form content (2,000+ words) covering topics 
                        thoroughly performs well in search rankings. "The Ultimate Guide to Buying Your First Home" or "Complete 
                        Real Estate Investment Guide for Beginners" become valuable resources that readers bookmark and reference 
                        repeatedly.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">SEO Optimization Strategies</h3>

                      <p className="text-gray-700 mb-3">
                        Identify relevant keywords your audience searches for. Use tools to research search volume and competition 
                        for terms like "first-time homebuyer tips," "real estate investment strategies," or location-specific 
                        phrases like "Austin real estate market trends." Incorporate these keywords naturally into your titles, 
                        headings, and throughout your content.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Location-specific content attracts highly qualified local leads. Create neighborhood guides, local market 
                        analyses, and city-specific buying or selling guides. These posts rank well for "long-tail" searches and 
                        position you as a local expert.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Optimize for featured snippets by structuring content to answer specific questions concisely. Use clear 
                        headings, bullet points, and direct answers to common questions. Featured snippets dramatically increase 
                        visibility and click-through rates.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Seasonal and Timely Content</h3>

                      <p className="text-gray-700 mb-3">
                        Create seasonal content aligned with real estate market cycles. Spring buying guides, winter selling tips, 
                        year-end tax planning, and summer moving advice address timely concerns while capitalizing on seasonal 
                        search trends. Plan content calendar several months ahead to publish seasonal posts before peak search periods.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Respond to current events, policy changes, and market shifts with timely analysis. Interest rate changes, 
                        new lending programs, or local development news provide opportunities for timely, relevant content that 
                        demonstrates your market awareness and expertise.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Content Structure and Formatting</h3>

                      <p className="text-gray-700 mb-3">
                        Use compelling headlines that clearly communicate value. "How to Save $10,000 on Your Home Purchase" 
                        outperforms "Home Buying Tips." Include numbers, benefits, and specific outcomes in headlines to increase 
                        click-through rates.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Break content into scannable sections with descriptive subheadings. Use bullet points, numbered lists, 
                        and short paragraphs. Most readers scan rather than read word-for-word, so formatting for scannability 
                        improves engagement and time on page.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Include visual elements like images, infographics, and charts. Visual content increases engagement, 
                        improves comprehension, and makes posts more shareable on social media. Original graphics and data 
                        visualizations establish professionalism and authority.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Calls-to-Action and Lead Generation</h3>

                      <p className="text-gray-700 mb-4">
                        Every blog post should include clear calls-to-action (CTAs) aligned with your business goals. Offer 
                        downloadable guides, home valuation tools, buyer/seller checklists, or consultation requests. Position 
                        CTAs naturally within content where readers have already gained value and trust your expertise.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Create content upgrades specific to each post. A mortgage guide post might offer a downloadable loan 
                        comparison spreadsheet; a home staging article could provide a printable room-by-room checklist. Content 
                        upgrades convert significantly better than generic CTAs because they're highly relevant to what readers 
                        just consumed.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Consistency and Content Calendar</h3>

                      <p className="text-gray-700 mb-4">
                        Publish consistently rather than sporadically. Weekly or bi-weekly posting schedules perform better than 
                        irregular publishing. Consistency builds audience expectations, improves search rankings, and establishes 
                        you as a reliable information source.
                      </p>

                      <p className="text-gray-700">
                        Develop a content calendar planning topics 3-6 months ahead. Balance evergreen content (remains relevant 
                        indefinitely) with timely posts addressing current market conditions. This strategic approach ensures 
                        consistent publishing while allowing flexibility for timely topics. Track performance metrics to identify 
                        which topics resonate most with your audience and generate the most leads.
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
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Generated Ideas ({generatedIdeas.length})
                      </CardTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyAllIdeas}
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {generatedIdeas.map((idea, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className="bg-cyan-100 text-cyan-700 mb-2">
                            Idea #{index + 1}
                          </Badge>
                        </div>

                        <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                          {idea.title}
                        </h3>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {idea.contentType}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {idea.estimatedWordCount} words
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {idea.difficulty}
                            </Badge>
                          </div>

                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700 mb-2">
                              <strong>Angle:</strong> {idea.angle}
                            </p>
                            <p className="text-gray-700">
                              <strong>Target:</strong> {idea.targetAudience}
                            </p>
                          </div>

                          <div>
                            <p className="font-semibold text-gray-700 mb-1">Key Points:</p>
                            <ul className="space-y-1 text-gray-600">
                              {idea.keyPoints.slice(0, 3).map((point, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <CheckCircle className="h-3 w-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-gray-700 mb-1">SEO Keywords:</p>
                            <div className="flex flex-wrap gap-1">
                              {idea.seoKeywords.slice(0, 4).map((keyword, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-cyan-50 p-2 rounded">
                            <p className="text-xs text-cyan-800">
                              <strong>CTA:</strong> {idea.callToAction}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button 
                  onClick={generateBlogIdeas} 
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate New Ideas
                </Button>
              </>
            )}

            {generatedIdeas.length === 0 && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Lightbulb className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Select your preferences and click Generate to create blog post ideas</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Mix evergreen and timely content for best results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Include local keywords to attract qualified leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Publish consistently (weekly or bi-weekly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Always include clear calls-to-action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Add visuals and data to increase engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
