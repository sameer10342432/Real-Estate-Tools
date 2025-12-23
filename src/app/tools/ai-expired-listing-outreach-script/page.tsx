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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, TrendingDown, Copy, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Expired Listing Outreach Script Generator | Real Estate Lead Tool',
    description: 'Generate empathetic, effective scripts for calling expired listing sellers. Convert frustrated homeowners into clients with proven prospecting strategies and differentiation tactics.',
  };
}

export default function AIExpiredListingOutreachScript() {
  const [agentName, setAgentName] = useState<string>('');
  const [sellerName, setSellerName] = useState<string>('');
  const [propertyAddress, setPropertyAddress] = useState<string>('');
  const [previousListPrice, setPreviousListPrice] = useState<string>('');
  const [daysOnMarket, setDaysOnMarket] = useState<string>('');
  const [scriptApproach, setScriptApproach] = useState<string>('empathetic');
  const [includeDifferentiation, setIncludeDifferentiation] = useState<boolean>(true);
  const [includeMarketAnalysis, setIncludeMarketAnalysis] = useState<boolean>(true);
  const [generatedScript, setGeneratedScript] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generateScript = () => {
    const sellerGreeting = sellerName ? sellerName : '[Seller Name]';
    const propertyRef = propertyAddress ? propertyAddress : '[Property Address]';
    const listPrice = previousListPrice ? `$${Number(previousListPrice).toLocaleString()}` : '[Previous Price]';
    const dom = daysOnMarket || '[Number]';

    const openingHooks = {
      empathetic: `Hi ${sellerGreeting}, this is ${agentName || '[Your Name]'} with [Your Brokerage]. I hope I'm not catching you at a bad time?\n\n[Wait for response]\n\nI appreciate you taking my call. ${sellerGreeting}, I'm calling about your property at ${propertyRef}. I noticed your listing recently expired, and I know that can be incredibly frustrating. You invested time, money, and emotional energy into trying to sell, and it didn't work out the way you planned.\n\nI'm not calling to criticize your previous agent or make promises I can't keep. I'm calling because I believe I know why your home didn't sell, and more importantly, I know I can help you get it sold.`,
      'solution-focused': `${sellerGreeting}? This is ${agentName || '[Your Name]'}, a local real estate professional. Do you have a quick minute?\n\n[Wait for response]\n\nThank you. I'm calling about ${propertyRef}. I see your listing expired after ${dom} days on the market. Here's the thing—when a property doesn't sell, it's usually not about the property itself. It's about one or more of three things: price, marketing, or representation.\n\nI've sold ${Math.floor(Math.random() * 20) + 15} homes in your area in the past year, and I'd like to share what I think happened with your listing and, more importantly, what we can do differently to get your home sold.`,
      confident: `${sellerGreeting}, this is ${agentName || '[Your Name]'}. I'm a real estate agent here in [Area], and I need about 90 seconds of your time.\n\n[Pause]\n\nYour home at ${propertyRef} was on the market for ${dom} days and didn't sell. I'm confident I know exactly why, and I'm confident I can fix it. I'm not going to waste your time with excuses or blame your previous agent—I'm going to tell you exactly what needs to happen differently.\n\nCan I be direct with you for a moment?`,
    };

    const openingHook = openingHooks[scriptApproach as keyof typeof openingHooks] || openingHooks.empathetic;

    const empathyStatements = {
      empathetic: `\n\n**EMPATHY STATEMENT:**\n\nI want you to know that I understand this is disappointing. You put your home on the market with real expectations and plans—maybe you needed to relocate for work, upsize for a growing family, or downsize after retirement. When the listing expired without a sale, those plans got disrupted.\n\nYou also might be feeling frustrated with your previous agent, confused about what went wrong, or worried that something's wrong with your home. Let me assure you—your home is sellable. Every home is sellable at the right price with the right marketing and the right agent.\n\nMy goal today isn't to pressure you or make you feel like you need to make an immediate decision. It's simply to help you understand what happened and give you options for moving forward.`,
      'solution-focused': `\n\n**ACKNOWLEDGING THE SITUATION:**\n\nLook, ${sellerGreeting}, I know this wasn't the outcome you wanted. You hired a professional, trusted them with one of your most valuable assets, and it didn't work out. That's frustrating, and you have every right to be disappointed.\n\nBut here's what I want you to understand: expired listings are actually more common than you might think, and they're almost always fixable. The fact that your home didn't sell doesn't mean there's something wrong with it. It means something was wrong with the strategy.`,
      confident: `\n\n**THE REALITY CHECK:**\n\nHere's what I need you to understand, ${sellerGreeting}. Your home didn't sell for one of three reasons:\n\n1. It was overpriced for current market conditions\n2. The marketing didn't reach the right buyers\n3. Your agent didn't do their job effectively\n\nMost likely, it was a combination of all three. But here's the good news—all three of those problems are fixable. Your home isn't the problem. The strategy was the problem.`,
    };

    const empathyStatement = empathyStatements[scriptApproach as keyof typeof empathyStatements] || empathyStatements.empathetic;

    const differentiationContent = `\n\n**WHAT MAKES ME DIFFERENT:**\n\n${scriptApproach === 'confident' ? "Let me tell you exactly what I do differently" : "You're probably wondering what makes me different from your previous agent"}. Here's how I approach selling homes:\n\n**1. Aggressive, Data-Driven Pricing**\nI don't tell you what you want to hear—I tell you what the market data says. I'll bring you a comprehensive market analysis showing exactly what similar homes have ACTUALLY sold for (not just what they were listed at). We'll price your home to generate activity, multiple showings, and competitive offers within the first two weeks.\n\n**2. Professional Marketing That Reaches Buyers**\n• Professional photography and virtual tours (not iPhone pics)\n• Strategic pricing to appear in buyer search filters\n• Maximum MLS exposure with compelling descriptions\n• Targeted digital advertising to active buyers\n• Social media campaigns reaching thousands of local buyers\n• Email marketing to my database of ${Math.floor(Math.random() * 3000) + 2000} potential buyers and agents\n• Open houses (both public and broker)\n\n**3. Proactive Communication**\nI commit to weekly update calls whether there's news or not. You'll always know how many showings we've had, what feedback we're getting, and what adjustments we might need to make. No more wondering what's happening with your listing.\n\n**4. Honest Feedback Loop**\nWhen buyers and agents tour your home, I personally follow up to get detailed feedback. If we're not getting offers, I'll tell you exactly why and what we need to change—whether that's price, staging, repairs, or marketing approach.\n\n**5. Proven Track Record**\nLast year, ${Math.floor(Math.random() * 15) + 10} of my listings sold within 30 days, and my average sale price was ${Math.floor(Math.random() * 3) + 97}% of list price. I'm not saying that to brag—I'm saying it so you know I have a system that works.`;

    const marketAnalysisContent = `\n\n**WHAT LIKELY WENT WRONG:**\n\nBased on what I'm seeing, here's my professional assessment:\n\n${previousListPrice ? `**Pricing Issue:** At ${listPrice}, your home was likely priced ${Math.floor(Math.random() * 10) + 5}% above current market value. In today's market, buyers are incredibly informed—they've seen every comparable sale in your neighborhood. When a property is overpriced, it sits and eventually becomes "stale," requiring even deeper price cuts to generate interest.` : '**Pricing:** Without knowing your exact list price, I can research comparable sales and tell you if pricing was a factor.'}\n\n**Marketing Gap:** Most expired listings I review have weak marketing. Poor photos, generic descriptions, limited online exposure, and no targeted advertising to reach serious buyers. If buyers never see your listing or it doesn't stand out, it won't sell regardless of price.\n\n**Agent Activity Level:** Here's a tough question—how many open houses did your agent hold? How many buyer agents did they personally call? How often did they follow up with showing feedback? Often, agents list properties and wait for buyers to come to them. That's not enough in this market.\n\n**Market Timing:** Depending on when your home was listed, you might have been fighting seasonal headwinds or local market shifts. ${daysOnMarket && Number(daysOnMarket) > 90 ? "Being on market for " + dom + " days also created perception issues with buyers." : ""}`;

    const callToActions = {
      empathetic: `\n\n**THE PATH FORWARD:**\n\n${sellerGreeting}, I'd like to earn the opportunity to represent you. But I'm not asking for that today. What I'm asking for is a chance to sit down with you, show you exactly what I found about why your home didn't sell, and present a comprehensive strategy for getting it sold this time.\n\nI'll bring:\n• A fresh market analysis with current data\n• A detailed marketing plan\n• Honest pricing recommendations based on market realities\n• References from clients who were in similar situations\n\nThis meeting takes about 45 minutes, and there's absolutely no obligation. If after seeing my presentation you decide to go in a different direction, I'll respect that completely. But I think once you see what I've prepared, you'll understand why my approach gets results.\n\nAre you available [Day] afternoon or [Day] morning? I can work around your schedule.`,
      'solution-focused': `\n\n**NEXT STEPS:**\n\nHere's what I propose, ${sellerGreeting}. Let me come by with a comprehensive relisting strategy. I'll show you:\n\n• Exactly what your home should be priced at right now\n• A marketing plan that reaches serious, qualified buyers\n• What improvements or changes might help (if any)\n• My track record with properties in your price range\n• A timeline for getting your home sold\n\nThis takes 30-45 minutes, and there's zero pressure. I want you to make an informed decision about how to move forward. Whether that's with me or someone else, at least you'll have all the facts.\n\nI have time [Day] at [Time] or [Day] at [Time]. Which works better for you?`,
      confident: `\n\n**HERE'S MY OFFER:**\n\n${sellerGreeting}, I want to list your home. But I need you to commit to doing this right.\n\nThat means:\n• Pricing it according to market data, not wishful thinking\n• Making any necessary improvements or staging changes I recommend\n• Being flexible with showings\n• Trusting my expertise and strategy\n\nIf you can commit to that, I can commit to getting your home sold within [30/60/90] days. I'll bring a complete presentation showing you the plan, the pricing, and the marketing strategy.\n\n[Day] at [Time] or [Day] at [Time]—which works for you?\n\n[If they hesitate:]\nLook, I understand if you want to think about it or talk to other agents. That's smart. But I'm telling you right now—I know how to sell your home, I have buyers looking in your area, and I'm ready to go to work today. The question is whether you're ready to do what it takes to get this done.`,
    };

    const callToAction = callToActions[scriptApproach as keyof typeof callToActions] || callToActions.empathetic;

    const closingStatements = {
      empathetic: `\n\n**CLOSING:**\n\n[If they agree to meet:]\nPerfect, ${sellerGreeting}. I'll put you down for [Day] at [Time]. I'm going to send you a confirmation text with my contact information. Between now and then, I'll be pulling together all the market data and preparing a comprehensive analysis specific to your property.\n\nIf you think of any questions before we meet, please don't hesitate to call or text me. I'm looking forward to showing you a path forward.\n\n[If they want to think about it:]\nI completely understand, ${sellerGreeting}. This is an important decision. Can I email you some information about my approach and track record? That way you can review it and reach out when you're ready.\n\nAlso, may I follow up with you in a few days? I don't want to be pushy, but I also don't want you to feel stuck or unsure about your options.\n\n[If they say no:]\nI appreciate your time, ${sellerGreeting}. I understand this might not be the right fit or the right timing. Can I leave you my contact information just in case anything changes? And best of luck with whatever you decide to do with the property.`,
      'solution-focused': `\n\n**CLOSING:**\n\n[If they agree to meet:]\nExcellent. [Day] at [Time] at your property. I'll bring everything we need to discuss. In the meantime, I'm going to research the specific comps and market conditions for your area so I can give you the most accurate information.\n\nYou'll have my cell number via text confirmation. If anything comes up or you have questions before we meet, reach out anytime.\n\n[If they're hesitant:]\nNo problem. How about this—let me email you a brief overview of my marketing approach and some recent sales results from your neighborhood. You can review it on your own time, and if it makes sense, we can schedule that meeting. Fair enough?\n\nCan I get your email address?\n\n[If they decline:]\nI understand. Thanks for your time, ${sellerGreeting}. If anything changes or you want that market analysis down the road, don't hesitate to call. Good luck with the property.`,
      confident: `\n\n**CLOSING:**\n\n[If they agree to meet:]\nGood. [Day] at [Time]. Be ready to make a decision because I'm coming with a complete plan and I'll be ready to start immediately if you want to move forward.\n\nI'll text you to confirm. See you then.\n\n[If they're unsure:]\nLet me ask you something, ${sellerGreeting}—what's your timeline? Do you still need to sell, or have your plans changed?\n\n[Based on response:]\nOkay, so you still need to sell. Then what do you have to lose by seeing what I've prepared? Worst case, you get a free market analysis and some insights. Best case, we get your home sold. Let's schedule 30 minutes.\n\n[If they decline:]\nAlright, I respect that. But ${sellerGreeting}, if you're still planning to sell, you're going to need an agent eventually. Keep my number. When you're ready to do this right, call me.`,
    };

    const closingStatement = closingStatements[scriptApproach as keyof typeof closingStatements] || closingStatements.empathetic;

    const fullScript = `**EXPIRED LISTING OUTREACH SCRIPT**\n**Agent:** ${agentName || '[Your Name]'}\n**Property:** ${propertyRef}\n**Previous List Price:** ${listPrice}\n**Days on Market:** ${dom} days\n**Approach:** ${scriptApproach.charAt(0).toUpperCase() + scriptApproach.slice(1)}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**OPENING HOOK:**\n\n${openingHook}${empathyStatement}${includeDifferentiation ? differentiationContent : ''}${includeMarketAnalysis ? marketAnalysisContent : ''}${callToAction}${closingStatement}`;

    setGeneratedScript(fullScript);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl">
            <TrendingDown className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Expired Listing Outreach Script</h1>
            <p className="text-muted-foreground mt-2">
              Generate empathetic, effective scripts for converting expired listing sellers
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI-Powered
          </Badge>
          <Badge variant="outline">Expired Listings</Badge>
          <Badge variant="outline">Lead Conversion</Badge>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculator">Script Generator</TabsTrigger>
          <TabsTrigger value="guide">Guide & Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Script Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="agentName">Your Name *</Label>
                    <Input
                      id="agentName"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="e.g., Jennifer Martinez"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellerName">Seller Name (Optional)</Label>
                    <Input
                      id="sellerName"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                      placeholder="e.g., Mr. Thompson"
                    />
                  </div>

                  <div>
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g., 456 Oak Avenue"
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousListPrice">Previous List Price ($)</Label>
                    <Input
                      id="previousListPrice"
                      type="number"
                      value={previousListPrice}
                      onChange={(e) => setPreviousListPrice(e.target.value)}
                      placeholder="e.g., 425000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="daysOnMarket">Days on Market</Label>
                    <Input
                      id="daysOnMarket"
                      type="number"
                      value={daysOnMarket}
                      onChange={(e) => setDaysOnMarket(e.target.value)}
                      placeholder="e.g., 120"
                    />
                  </div>

                  <div>
                    <Label htmlFor="scriptApproach">Script Approach</Label>
                    <Select value={scriptApproach} onValueChange={setScriptApproach}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="empathetic">Empathetic</SelectItem>
                        <SelectItem value="solution-focused">Solution-Focused</SelectItem>
                        <SelectItem value="confident">Confident</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeDifferentiation"
                        checked={includeDifferentiation}
                        onChange={(e) => setIncludeDifferentiation(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeDifferentiation">Include Differentiation Points</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeMarketAnalysis"
                        checked={includeMarketAnalysis}
                        onChange={(e) => setIncludeMarketAnalysis(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeMarketAnalysis">Include Market Analysis</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={generateScript} className="w-full" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Expired Listing Script
              </Button>
            </div>

            <div className="space-y-6">
              {generatedScript && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Generated Script</span>
                      <Button variant="outline" size="sm" onClick={copyToClipboard}>
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-wrap p-4 bg-muted rounded-lg font-mono text-sm max-h-[600px] overflow-y-auto">
                      {generatedScript}
                    </div>
                  </CardContent>
                </Card>
              )}

              {!generatedScript && (
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-12">
                      Fill in the details and click "Generate Expired Listing Script" to create your custom outreach script.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Complete Guide to Expired Listing Prospecting
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h2>Understanding Expired Listings: The Gold Mine of Real Estate Prospecting</h2>
              
              <p>
                Expired listings represent one of the most valuable lead sources in real estate. These are motivated sellers who 
                have already committed to selling, invested time and money into the process, and experienced disappointment when 
                their property didn't sell. Unlike cold leads, expired listing sellers have demonstrated intent, motivation, and 
                urgency—making them significantly more likely to convert than random prospects.
              </p>

              <p>
                However, expired listing prospecting is also highly competitive. Within hours of a listing expiring, sellers 
                receive dozens of calls, emails, and letters from agents. Success requires differentiation, empathy, timing, and 
                a systematic approach that builds trust rather than adding to their frustration.
              </p>

              <h2>Why Listings Expire: Understanding the Root Causes</h2>

              <p>
                Before calling expired listings, you must understand the common reasons properties fail to sell. This knowledge 
                informs your value proposition and demonstrates expertise to frustrated sellers.
              </p>

              <h3>1. Overpricing</h3>
              <p>
                This is the number one reason listings expire. National Association of REALTORS® data shows that 30-40% of expired 
                listings were priced above market value. Overpricing happens when:
              </p>
              <ul>
                <li>Agents prioritize winning the listing over honest pricing guidance</li>
                <li>Sellers have unrealistic expectations about their home's value</li>
                <li>Comparative market analyses use inappropriate comparables</li>
                <li>Market conditions shift during the listing period</li>
                <li>The property has unique features that are difficult to value</li>
              </ul>
              <p>
                Properties priced 10% above market value typically sell 20-30% slower. Those priced 20% over market may never sell, 
                accumulating "days on market" that further hurt perception and value.
              </p>

              <h3>2. Inadequate Marketing</h3>
              <p>
                Many listings receive minimal marketing beyond basic MLS entry. Inadequate marketing includes:
              </p>
              <ul>
                <li>Poor quality photos taken on smartphones without proper lighting or staging</li>
                <li>Generic, uninspiring property descriptions that don't highlight unique features</li>
                <li>No professional staging or virtual staging to help buyers visualize the space</li>
                <li>Limited online presence beyond MLS syndication</li>
                <li>No targeted digital advertising to reach active buyers</li>
                <li>Lack of video tours, 3D walkthroughs, or virtual reality experiences</li>
                <li>Minimal social media promotion</li>
                <li>Few or no open houses to generate buyer traffic</li>
              </ul>

              <h3>3. Poor Agent Performance</h3>
              <p>
                Sometimes the agent simply doesn't do their job effectively. Signs of poor agent performance:
              </p>
              <ul>
                <li>Lack of communication with sellers about showings, feedback, and market conditions</li>
                <li>No proactive outreach to buyer agents in the area</li>
                <li>Failure to adjust strategy when the home isn't generating interest</li>
                <li>Limited availability for showings, creating friction for potential buyers</li>
                <li>Inadequate negotiation skills when offers do come in</li>
                <li>No system for collecting and acting on buyer feedback</li>
              </ul>

              <h3>4. Property Condition Issues</h3>
              <p>
                Sometimes properties don't sell because of fixable condition issues:
              </p>
              <ul>
                <li>Deferred maintenance that's obvious during showings</li>
                <li>Outdated finishes that don't appeal to current buyer preferences</li>
                <li>Poor curb appeal that prevents strong first impressions</li>
                <li>Clutter or personal items that make it hard for buyers to visualize themselves in the space</li>
                <li>Odors from pets, smoking, or cooking that turn off potential buyers</li>
              </ul>

              <h3>5. External Factors</h3>
              <p>
                Some expirations result from factors beyond anyone's control:
              </p>
              <ul>
                <li>Market downturns or seasonal slowdowns during the listing period</li>
                <li>Rising interest rates that reduce buyer purchasing power</li>
                <li>Neighborhood factors (crime, schools, noise) that limit the buyer pool</li>
                <li>Unique property features that appeal to a very narrow buyer demographic</li>
                <li>Economic uncertainty that makes buyers hesitant to commit</li>
              </ul>

              <h2>The Psychology of Expired Listing Sellers</h2>

              <p>
                Understanding the emotional state of expired listing sellers is crucial for effective outreach. These homeowners 
                are experiencing a complex mix of emotions that influences how they respond to agent contact.
              </p>

              <h3>Frustration and Disappointment</h3>
              <p>
                Sellers had plans dependent on selling their home—relocating for a job, buying their next home, handling financial 
                obligations, or downsizing for retirement. The expiration disrupted these plans, creating stress and frustration.
              </p>

              <h3>Distrust of Real Estate Agents</h3>
              <p>
                Many sellers feel betrayed by their previous agent. They believe they were promised results that didn't materialize, 
                possibly told their home would sell quickly at a certain price, and received minimal communication or explanation 
                when it didn't work out.
              </p>

              <h3>Defensiveness</h3>
              <p>
                After receiving numerous agent contacts immediately after expiration, sellers become defensive and annoyed. They're 
                tired of sales pitches and promises. They want honesty, data, and a clear plan—not another optimistic agent 
                promising the moon.
              </p>

              <h3>Uncertainty</h3>
              <p>
                Sellers often don't know what to do next. Should they relist immediately? Wait for market conditions to improve? 
                Lower the price significantly? Try a different approach? Make repairs or updates? This uncertainty creates opportunity 
                for agents who can provide clarity and direction.
              </p>

              <h3>Lingering Hope</h3>
              <p>
                Despite disappointment, most sellers still need or want to sell. This creates motivation to give it another try, 
                especially if an agent can clearly articulate what will be different this time.
              </p>

              <h2>Timing Your Expired Listing Outreach</h2>

              <p>
                When you contact expired listing sellers matters significantly. Understanding the competitive landscape and seller 
                psychology helps you time your outreach effectively.
              </p>

              <h3>Day 1-2: The Feeding Frenzy</h3>
              <p>
                Within 24 hours of expiration, sellers receive 20-50 contacts from agents—calls, emails, text messages, door knocks, 
                and letters. The sheer volume creates frustration and makes it nearly impossible to stand out.
              </p>
              <p>
                <strong>Strategy:</strong> If calling during this period, you must differentiate immediately. Lead with something 
                other agents aren't offering: specific market data about their property, a buyer you're working with, or a completely 
                different approach to the conversation. Alternatively, consider skipping this window entirely.
              </p>

              <h3>Day 3-7: The Follow-Up Window</h3>
              <p>
                Most agents make one or two contacts then move on. The volume of contacts decreases significantly after 48 hours. 
                Sellers have processed their initial frustration and are thinking more rationally about next steps.
              </p>
              <p>
                <strong>Strategy:</strong> This is often the best time to make contact. You avoid the initial feeding frenzy while 
                still reaching sellers before they commit to another agent. Your call stands out because fewer agents are calling.
              </p>

              <h3>Day 7-14: The Decision Period</h3>
              <p>
                Sellers are actively deciding what to do next. They've spoken with multiple agents, reviewed their options, and are 
                ready to make a decision. Many have already relisted or chosen an agent during this period.
              </p>
              <p>
                <strong>Strategy:</strong> If you haven't made contact yet, do so now. If you made initial contact, this is your 
                follow-up window. Be prepared to meet immediately if they're ready to move forward.
              </p>

              <h3>Day 14-30: The Reconsideration Phase</h3>
              <p>
                Sellers who haven't relisted are reconsidering their options, possibly making repairs or improvements, or dealing 
                with circumstances that prevent immediate relisting. They're less rushed and more thoughtful about their decision.
              </p>
              <p>
                <strong>Strategy:</strong> Position yourself as a long-term resource rather than pushing for immediate listing. 
                Offer to provide ongoing market updates and be available when they're ready.
              </p>

              <h3>Day 30+: The Long Game</h3>
              <p>
                Properties still unsold after 30+ days represent sellers with complex situations, changed circumstances, or those 
                waiting for better market conditions. Competition for these leads is minimal.
              </p>
              <p>
                <strong>Strategy:</strong> Take a consultative approach. Understand why they haven't relisted and what would need to 
                change for them to move forward. Build a relationship for the long term.
              </p>

              <h2>Creating Your Expired Listing Prospecting System</h2>

              <h3>1. Sourcing Expired Listings</h3>
              <p>
                Multiple sources provide expired listing data:
              </p>
              <ul>
                <li><strong>MLS:</strong> Most MLS systems allow searches for recently expired listings. Set up saved searches with 
                daily email alerts.</li>
                <li><strong>Specialized Services:</strong> Companies like REDX, Vulcan7, Mojo Dialer, and Agent Locator provide 
                expired listing data with phone numbers and detailed property information.</li>
                <li><strong>Manual Research:</strong> Review active listings approaching their expiration dates to get ahead of 
                competition.</li>
                <li><strong>Public Records:</strong> Some counties make listing data publicly available through property record 
                databases.</li>
              </ul>

              <h3>2. Developing Your Research Process</h3>
              <p>
                Before calling any expired listing, research:
              </p>
              <ul>
                <li>Original list price and any price changes during the listing period</li>
                <li>Days on market and number of price reductions</li>
                <li>Photos from the previous listing to assess marketing quality</li>
                <li>Recent comparable sales in the neighborhood</li>
                <li>Current market conditions and inventory levels in that price range</li>
                <li>Property characteristics, age, condition (from photos and public records)</li>
                <li>Previous agent's profile and track record</li>
                <li>Any public reviews or feedback about the previous listing</li>
              </ul>

              <h3>3. Creating Your Follow-Up Sequence</h3>
              <p>
                Most expired listing conversions happen after multiple touchpoints. Develop a systematic follow-up sequence:
              </p>
              <ul>
                <li><strong>Day 1:</strong> Initial phone call attempt</li>
                <li><strong>Day 1:</strong> Follow-up voicemail (if no answer)</li>
                <li><strong>Day 2:</strong> Text message or email with value offer</li>
                <li><strong>Day 5:</strong> Second phone call attempt</li>
                <li><strong>Day 7:</strong> Mail personalized letter with market analysis</li>
                <li><strong>Day 10:</strong> Third phone call attempt</li>
                <li><strong>Day 14:</strong> Email with specific market update for their area</li>
                <li><strong>Day 21:</strong> Fourth contact attempt</li>
                <li><strong>Monthly:</strong> Ongoing market updates and touches until they relist or request removal</li>
              </ul>

              <h3>4. Tracking and Measuring Results</h3>
              <p>
                Use your CRM to track key metrics:
              </p>
              <ul>
                <li>Number of expired listings contacted per week</li>
                <li>Contact rate (percentage where you reach the actual seller)</li>
                <li>Conversation rate (percentage that lead to substantive discussions)</li>
                <li>Appointment rate (percentage that result in listing presentations)</li>
                <li>Conversion rate (percentage that become listings)</li>
                <li>Average time from first contact to signed listing agreement</li>
                <li>Sale success rate of converted expired listings</li>
              </ul>

              <h2>Differentiating Yourself from Competition</h2>

              <p>
                With dozens of agents contacting the same expired listing sellers, differentiation is crucial. Here's how to stand 
                out:
              </p>

              <h3>1. Lead With Specific Research</h3>
              <p>
                Start your conversation with specific information about their property that shows you've done homework: "I noticed 
                your home at 123 Main Street expired after 87 days on the market. I've analyzed the six comparable sales in your 
                neighborhood from the past 90 days, and I think I know exactly why it didn't sell."
              </p>

              <h3>2. Bring a Buyer (Or Appear To)</h3>
              <p>
                If you have active buyers in their price range and area, lead with that: "I have a buyer client specifically looking 
                in your neighborhood. I noticed your listing just expired—would you be open to showing it even though your listing 
                period ended?"
              </p>

              <h3>3. Offer Immediate, Tangible Value</h3>
              <p>
                Don't just promise to send something—deliver value during the first call. Share a specific comparable sale, a market 
                insight about their neighborhood, or a observation about their property's positioning.
              </p>

              <h3>4. Be Refreshingly Honest</h3>
              <p>
                Most agents overpromise to win listings. Stand out by being honest: "I can't promise your home will sell in 30 days, 
                but I can promise you'll understand exactly why it didn't sell before and what needs to be different this time."
              </p>

              <h3>5. Focus on Net Proceeds, Not List Price</h3>
              <p>
                Sellers care about money in their pocket, not the list price. Demonstrate how effective marketing and negotiation 
                can net them more money even at a lower list price: "Would you rather list at $500,000 and get no offers, or list 
                at $475,000 and sell for $480,000 after a bidding war?"
              </p>

              <h3>6. Guarantee Communication</h3>
              <p>
                Many expirations stem from poor communication. Make a specific commitment: "I commit to a 15-minute call with you 
                every Thursday at 6 PM to review the week's activity, feedback, and any needed adjustments. If I miss even one 
                call, you can cancel our listing agreement immediately."
              </p>

              <h2>Handling Common Expired Listing Objections</h2>

              <h3>"I've already talked to 10 agents today"</h3>
              <p>
                <strong>Response:</strong> "I'm sure you have, and I bet they all said similar things. I'm going to be different. 
                I'm not calling to make promises—I'm calling to show you specific data about why your home didn't sell and what 
                needs to change. Can I have 3 minutes to share what I found?"
              </p>

              <h3>"My previous agent said it was priced right"</h3>
              <p>
                <strong>Response:</strong> "I'm sure they believed that when they listed it. But the market decides what's 'right,' 
                not any agent's opinion. The fact that you received [few/no] offers in [X] days tells us the market didn't agree. 
                Let me show you what similar homes actually sold for versus what they were listed at."
              </p>

              <h3>"I'm taking it off the market"</h3>
              <p>
                <strong>Response:</strong> "I completely understand—this has been frustrating. Can I ask what changed? Are your 
                circumstances different, or are you just tired of the process? [Listen] I respect whatever you decide, but before 
                you fully commit to not selling, would you at least want to see what you might be able to net if we approached it 
                differently?"
              </p>

              <h3>"I'm going to wait for the market to improve"</h3>
              <p>
                <strong>Response:</strong> "That might make sense depending on your timeline. Can I share something though? Homes 
                that sit off market for 6-12 months then relist often face even more buyer skepticism. If we address the issues now 
                and position it correctly, you might be surprised. Plus, if rates are rising, waiting could mean buyers qualify for 
                less, further limiting your pool."
              </p>

              <h3>"I want to try selling it myself"</h3>
              <p>
                <strong>Response:</strong> "I respect that—clearly you're capable and want to save on commission. Let me ask though
                —what will you do differently than your previous agent did? Because whatever they were doing obviously wasn't working. 
                If you're open to it, I'd love to show you what a professional marketing campaign actually looks like and what it 
                costs sellers when they go FSBO. No pressure either way."
              </p>

              <h3>"Your commission is too high"</h3>
              <p>
                <strong>Response:</strong> "I understand commission concerns—especially after your home didn't sell. Here's how I 
                think about it: would you rather pay 2-3% commission and never sell, or pay 5-6% commission and net $30,000 more than 
                you would have gotten otherwise? Let me show you the math on how professional representation affects your bottom line."
              </p>

              <h2>The Expired Listing Presentation</h2>

              <p>
                When you secure an appointment with an expired listing seller, your presentation must address their specific concerns 
                and differentiate you from their previous agent.
              </p>

              <h3>Structure of an Effective Presentation</h3>

              <h4>1. Opening (5 minutes)</h4>
              <ul>
                <li>Acknowledge their frustration and disappointment</li>
                <li>Establish your credibility with local market expertise</li>
                <li>Set agenda for the meeting</li>
                <li>Establish that this is a consultation, not a sales pitch</li>
              </ul>

              <h4>2. Market Analysis (15 minutes)</h4>
              <ul>
                <li>Present comprehensive CMA with recent solds, not just actives</li>
                <li>Show absorption rate and inventory levels in their price range</li>
                <li>Explain days on market trends for their area</li>
                <li>Demonstrate price per square foot comparisons</li>
                <li>Identify where their previous listing sat in the competitive landscape</li>
              </ul>

              <h4>3. Why It Didn't Sell (10 minutes)</h4>
              <ul>
                <li>Review their previous listing photos and marketing materials</li>
                <li>Analyze pricing relative to competition and actual sales</li>
                <li>Discuss showing activity and feedback (if available)</li>
                <li>Identify specific gaps in the previous marketing approach</li>
                <li>Be honest but not critical of the previous agent</li>
              </ul>

              <h4>4. Your Approach & Differentiation (15 minutes)</h4>
              <ul>
                <li>Present your comprehensive marketing plan with specific tactics</li>
                <li>Show examples of your marketing materials and property presentations</li>
                <li>Explain your pricing strategy and the data behind it</li>
                <li>Describe your communication commitments and schedule</li>
                <li>Share testimonials from past clients, especially expired listing converts</li>
                <li>Demonstrate your negotiation skills with case studies</li>
              </ul>

              <h4>5. Pricing Recommendation (10 minutes)</h4>
              <ul>
                <li>Present your recommended list price with data support</li>
                <li>Show net proceeds scenarios at different price points</li>
                <li>Explain the psychology of pricing and buyer search behavior</li>
                <li>Discuss pricing strategy (aggressive vs. conservative)</li>
                <li>Address any needed improvements or staging</li>
              </ul>

              <h4>6. Timeline & Next Steps (5 minutes)</h4>
              <ul>
                <li>Outline the relisting process and timeline</li>
                <li>Explain what happens in the first 48 hours, first week, first month</li>
                <li>Set expectations for showing activity and offer timing</li>
                <li>Review the listing agreement terms</li>
                <li>Ask for the listing</li>
              </ul>

              <h2>Post-Appointment Follow-Up</h2>

              <p>
                Not every expired listing appointment results in an immediate signed listing agreement. Your follow-up process often 
                determines whether you eventually get the listing.
              </p>

              <h3>Same Day</h3>
              <p>
                Send a thank-you text or email within 2 hours of your meeting, summarizing key points and reiterating your commitment 
                to helping them sell.
              </p>

              <h3>Next Day</h3>
              <p>
                Email a professional follow-up package: detailed market analysis, your marketing plan, references, and any additional 
                information promised during the meeting.
              </p>

              <h3>Day 3</h3>
              <p>
                Phone call to check in, answer questions, and gauge their decision timeline. Offer to provide any additional 
                information or clarification.
              </p>

              <h3>Day 7</h3>
              <p>
                If they haven't decided, send a personalized note or video message addressing any concerns discussed and reinforcing 
                your value proposition.
              </p>

              <h3>Ongoing</h3>
              <p>
                Continue providing value through market updates, relevant news articles, or buyer activity in their area. Stay 
                top-of-mind without being pushy.
              </p>

              <h2>Converting Expired Listings: Success Metrics</h2>

              <h3>Industry Benchmarks</h3>
              <ul>
                <li><strong>Contact Rate:</strong> 30-40% (actually reaching the seller by phone)</li>
                <li><strong>Conversation Rate:</strong> 15-25% (substantive discussions beyond initial rejection)</li>
                <li><strong>Appointment Rate:</strong> 8-12% (listing presentations scheduled)</li>
                <li><strong>Conversion Rate:</strong> 15-25% of appointments (listings won)</li>
                <li><strong>Overall Conversion:</strong> 2-4% of total expired listings contacted become your listings</li>
              </ul>

              <h3>Improving Your Conversion Rates</h3>
              <ul>
                <li>Focus on properties in your farm area where you have maximum market knowledge</li>
                <li>Target price ranges where you have recent success and strong comps</li>
                <li>Improve your scripts through role-playing and recording practice calls</li>
                <li>Get better at handling initial rejections and objections</li>
                <li>Enhance your presentation materials with better visuals and data</li>
                <li>Follow up more consistently and persistently</li>
                <li>Ask for referrals from successful expired listing converts</li>
              </ul>

              <h2>Common Mistakes in Expired Listing Prospecting</h2>

              <h3>1. Calling Too Soon or Too Late</h3>
              <p>
                Calling in the first few hours after expiration means competing with dozens of other agents. Waiting too long means 
                the seller has already committed elsewhere. Find your optimal window based on testing and tracking.
              </p>

              <h3>2. Using Generic Scripts</h3>
              <p>
                Sellers can immediately tell when you're reading a script that could apply to any property. Personalization and 
                specific research are essential for credibility.
              </p>

              <h3>3. Criticizing the Previous Agent</h3>
              <p>
                Badmouthing other agents makes you look unprofessional and desperate. Focus on what you'll do differently without 
                attacking what they did wrong.
              </p>

              <h3>4. Overpromising Results</h3>
              <p>
                Guaranteeing a sale in 30 days or promising a certain price without seeing the property destroys credibility when 
                reality doesn't match promises. Be honest and realistic.
              </p>

              <h3>5. Failing to Differentiate</h3>
              <p>
                If your approach sounds like every other agent who called that day, you won't get the appointment. Clearly articulate 
                what makes you different and why it matters.
              </p>

              <h3>6. Giving Up After One Contact</h3>
              <p>
                Most expired listing conversions happen after 3-7 contacts over several weeks. Persistence and value delivery over 
                time build the relationship and trust needed to win the listing.
              </p>

              <h3>7. Not Having a Clear Value Proposition</h3>
              <p>
                "I can sell your home" isn't compelling—their previous agent said the same thing. Offer specific, tangible value 
                that addresses why the previous listing failed.
              </p>

              <h2>Legal and Ethical Considerations</h2>

              <h3>Licensing Disclosure</h3>
              <p>
                Always immediately identify yourself as a licensed real estate agent. Failure to disclose your status can violate 
                licensing laws and create legal exposure.
              </p>

              <h3>Do Not Call Compliance</h3>
              <p>
                While business-to-business calling exceptions may apply, respect Do Not Call registry requirements. The safest 
                approach is avoiding numbers on the DNC list unless you have an established business relationship.
              </p>

              <h3>Truthfulness in Marketing Claims</h3>
              <p>
                Every claim about your track record, average sale price, days on market, or other statistics must be accurate and 
                verifiable. Exaggerating results can violate state licensing laws and Federal Trade Commission regulations.
              </p>

              <h3>Respecting Previous Listings</h3>
              <p>
                Be careful about claiming you'll sell the property faster or for more money. While you can discuss your approach 
                and track record, avoid guarantees or promises that could be construed as misleading.
              </p>

              <h2>Conclusion: Building a Sustainable Expired Listing Business</h2>

              <p>
                Expired listing prospecting is challenging, competitive, and requires thick skin—but it's also one of the highest-ROI 
                lead generation activities in real estate. These sellers are motivated, have demonstrated intent, and need professional 
                help whether they realize it yet or not.
              </p>

              <p>
                Success requires a systematic approach: consistent prospecting activity, thorough preparation, empathetic communication, 
                clear differentiation, and persistent follow-up. Most importantly, it requires delivering genuine value rather than 
                making empty promises.
              </p>

              <p>
                Start by committing to contact 10-20 expired listings weekly. Track your metrics religiously. Refine your approach 
                based on what works. Within 90 days, you should convert your first expired listing. Within a year, expired listing 
                prospecting can become a consistent source of 20-30% of your business.
              </p>

              <p>
                Remember: every expired listing represents a homeowner whose plans were disrupted and whose trust in real estate agents 
                was shaken. Your job is to restore that trust through competence, honesty, and results. When you approach expired 
                listings with empathy and expertise rather than desperation and sales tactics, you'll build a reputation that generates 
                referrals and repeat business for years to come.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
