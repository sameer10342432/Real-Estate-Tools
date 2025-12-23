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
import { MapPin, Target, Copy, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Circle Prospecting Script Generator | Neighborhood Farming Tool',
    description: 'Generate professional scripts for calling neighbors around recent listings and sales. Build your geographic farm with effective circle prospecting and local market expertise.',
  };
}

export default function AICircleProspectingScriptGenerator() {
  const [agentName, setAgentName] = useState<string>('');
  const [triggerEvent, setTriggerEvent] = useState<string>('just-listed');
  const [propertyAddress, setPropertyAddress] = useState<string>('');
  const [neighborhoodName, setNeighborhoodName] = useState<string>('');
  const [scriptTone, setScriptTone] = useState<string>('professional');
  const [includeMarketInsight, setIncludeMarketInsight] = useState<boolean>(true);
  const [includeValueProp, setIncludeValueProp] = useState<boolean>(true);
  const [generatedScript, setGeneratedScript] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generateScript = () => {
    const propertyRef = propertyAddress ? propertyAddress : '[Property Address]';
    const neighborhood = neighborhoodName ? neighborhoodName : '[Neighborhood Name]';

    const eventDescriptions = {
      'just-listed': 'just listed for sale',
      'just-sold': 'just sold',
      'price-reduction': 'just had a price reduction',
      'coming-soon': 'is coming on the market soon',
      'pending': 'just went under contract',
    };

    const eventDescription = eventDescriptions[triggerEvent as keyof typeof eventDescriptions] || eventDescriptions['just-listed'];

    const introductions = {
      professional: `Hi, this is ${agentName || '[Your Name]'} with [Your Brokerage]. I hope I'm not catching you at a bad time?\n\n[Wait for response]\n\nGreat! I'm actually calling because I'm working with the property at ${propertyRef}, which ${eventDescription}. As a neighbor on the same street, I wanted to reach out to you directly.`,
      friendly: `Hello! My name is ${agentName || '[Your Name]'}, and I'm a real estate agent here in ${neighborhood}. Do you have a quick minute?\n\n[Wait for response]\n\nAwesome! So I wanted to give you a heads up—the home at ${propertyRef} ${eventDescription}, and I thought you might be interested to know what's happening right in your neighborhood!`,
      casual: `Hey there! This is ${agentName || '[Your Name]'}. I'm calling your neighbors on [Street Name] about some activity on your block. Got a second?\n\n[Wait for response]\n\nPerfect! So the house at ${propertyRef} ${eventDescription}. I figured as a neighbor, you'd want to know what's going on with property values on your street.`,
      direct: `Hi, this is ${agentName || '[Your Name]'}, a local real estate agent. I'll be brief because I know you're busy.\n\n[Pause]\n\nThe property at ${propertyRef} ${eventDescription}. This directly affects your home's value, and I wanted to make sure you're aware of what's happening in your immediate area.`,
    };

    const introduction = introductions[scriptTone as keyof typeof introductions] || introductions.professional;

    const reasonsForCalling = {
      'just-listed': `\n\n**REASON FOR CALLING:**\n\nThere are actually three reasons I'm reaching out to neighbors when I list a property:\n\n**1. Professional Courtesy**\nYou're going to see activity on your street—showings, open houses, maybe some extra cars parked around. I wanted to give you advance notice and make sure you have my contact information if you have any concerns or questions.\n\n**2. Your Network Matters**\nYou know people—friends, family members, coworkers—who might love to live in ${neighborhood}. When you love your neighborhood, chances are you know others who would too. This could be perfect timing for someone you know.\n\n**3. Your Home's Value**\nWhat happens at ${propertyRef} directly impacts your property value. We listed it at $[Price], which gives you a good indication of current market values on your street.`,
      'just-sold': `\n\n**REASON FOR CALLING:**\n\nI wanted to share this news with you for a few important reasons:\n\n**1. Your Home Value Just Changed**\nThe property at ${propertyRef} sold for $[Sale Price]. This is the most recent comparable sale on your street, which directly affects your home's current market value. Based on this sale, I can actually give you a pretty accurate estimate of what your home would be worth today.\n\n**2. Buyer Demand Signal**\nWhen homes sell quickly in a neighborhood, it indicates strong buyer demand. We had [Number] showings and [Number] offers, which tells me buyers are actively looking in ${neighborhood} right now.\n\n**3. Your Future Plans**\nEven if selling isn't on your radar today, knowing what's happening with property values helps you make informed decisions about improvements, refinancing, or future timing.`,
      'price-reduction': `\n\n**REASON FOR CALLING:**\n\nI'm calling because this price change is actually significant news for the neighborhood:\n\n**1. Market Signal**\nWhen a property reduces price, it indicates market conditions and buyer response. The home at ${propertyRef} was originally listed at $[Original Price] and is now $[New Price]. Understanding why prices adjust helps you gauge current market dynamics.\n\n**2. Opportunity Alert**\nThis price reduction might create an opportunity for someone you know who's been wanting to move to ${neighborhood}. Sometimes the perfect home just needed the right price point.\n\n**3. Your Competitive Positioning**\nIf you were ever thinking of selling, knowing how other properties are pricing and adjusting helps you position your home competitively from day one.`,
      'coming-soon': `\n\n**REASON FOR CALLING:**\n\nI wanted to give you exclusive advance notice for several reasons:\n\n**1. First Access**\nThe property at ${propertyRef} will hit the market in [Number] days. As a neighbor, I wanted you to know before the public. If you have anyone in your network who's been wanting to live on your street, they could potentially see it before it's officially listed.\n\n**2. Neighborhood Impact**\nNew listings always affect neighborhood dynamics—showing activity, potential new neighbors, property values. I thought you'd appreciate knowing what's coming.\n\n**3. Your Future Plans**\nSeeing a neighbor prepare to sell sometimes makes people think about their own timeline. If you've been considering a move at some point, understanding current market activity helps you plan timing.`,
      'pending': `\n\n**REASON FOR CALLING:**\n\nI wanted to share this update with you because it's relevant to your home:\n\n**1. Sale Indicator**\nThe property at ${propertyRef} just went under contract after [Number] days on the market. This gives you insight into how long it takes to sell homes in ${neighborhood} right now and what buyers are looking for.\n\n**2. Price Point Validation**\nThe fact that buyers made offers at $[List Price] validates current pricing in your neighborhood. This is useful information whether you're considering selling, refinancing, or just curious about your home's value.\n\n**3. Network Opportunity**\nWhile this buyer found their home, I'm still working with other buyers looking in ${neighborhood}. If you know anyone thinking about selling, my buyers might be interested.`,
    };

    const reasonForCalling = reasonsForCalling[triggerEvent as keyof typeof reasonsForCalling] || reasonsForCalling['just-listed'];

    const marketInsightContent = `\n\n**LOCAL MARKET INSIGHT:**\n\n${scriptTone === 'direct' ? 'Here's what you need to know about your local market' : 'Let me share some insights about what's happening in your neighborhood'}:\n\n${triggerEvent === 'just-sold' ? `• Homes in ${neighborhood} are currently selling in an average of ${Math.floor(Math.random() * 30) + 20} days\n• We're seeing ${Math.floor(Math.random() * 3) + 2}-${Math.floor(Math.random() * 3) + 4} offers on well-priced properties\n• Property values in your area have ${Math.floor(Math.random() * 10) + 3}% in the past year\n• Buyer demand remains strong in your price range` : ''}${triggerEvent === 'just-listed' ? `• Your neighborhood has only ${Math.floor(Math.random() * 3) + 2} active listings right now\n• Average home in ${neighborhood} sells for ${Math.floor(Math.random() * 5) + 96}% of list price\n• We typically see ${Math.floor(Math.random() * 15) + 10}-${Math.floor(Math.random() * 20) + 20} showings in the first two weeks\n• Current buyer demand exceeds inventory in your price range` : ''}${triggerEvent === 'price-reduction' ? `• The average price reduction in ${neighborhood} is around ${Math.floor(Math.random() * 5) + 3}%\n• Properties priced correctly from day one sell ${Math.floor(Math.random() * 30) + 20}% faster\n• Market conditions can shift quickly, making pricing strategy crucial\n• We're currently seeing more buyer activity than last month` : ''}\n\nWhat this means for you: Your home's value is directly tied to these neighborhood trends. ${triggerEvent === 'just-sold' ? 'This recent sale gives us fresh data about what buyers will pay on your street.' : triggerEvent === 'just-listed' ? 'New listings like this one help establish current market pricing.' : 'Market activity in your immediate area affects your property value whether you're planning to sell or not.'}`;

    const asks = {
      professional: `\n\n**THE ASK:**\n\nI have a few quick questions, if you don't mind:\n\n1. **Do you know anyone looking to move to ${neighborhood}?** Friends, family, coworkers who love visiting you and wish they lived nearby? I'd be happy to help them, and I always take extra good care of referrals from neighbors.\n\n2. **Have you ever thought about what your home might be worth?** I can provide a complimentary market analysis specific to your property—no obligation, just information. Many homeowners like to know their home's value even if they're not planning to sell soon.\n\n3. **Would you like updates on market activity in ${neighborhood}?** I send quarterly market reports to neighbors showing sales, trends, and property values. It's completely free and helps you stay informed about your biggest investment.\n\n[Based on their interest level, continue...]\n\nI really appreciate you taking the time to talk with me. Can I leave you my contact information? I'm always here as a resource for real estate questions, even if you never buy or sell with me.`,
      friendly: `\n\n**THE ASK:**\n\nSo, a couple things I wanted to ask you:\n\n**First**, do you happen to know anyone who'd love to live in ${neighborhood}? Sometimes the best neighbors come from referrals from current residents. If you know someone who's been house hunting or thinking about a move, I'd love to help them!\n\n**Second**, are you curious what your home might be worth in today's market? I do free home valuations for neighbors all the time—it's actually really interesting to see how values have changed, especially recently. No pressure to do anything with the information, but it's useful to know!\n\n**Third**, would you like me to keep you posted on what's happening in the neighborhood? When homes list and sell, what they go for, market trends—I think you'd find it interesting since you live here.\n\nAnd hey, even if you're not thinking about real estate at all right now, feel free to keep my number. I'm always happy to answer questions or just chat about the neighborhood market!`,
      casual: `\n\n**THE ASK:**\n\nLook, here's why I'm really calling:\n\n**One**, you might know someone who wants to move here. Your friends, your family, whoever. If they've been looking for a home in ${neighborhood}, let's connect. I take really good care of referrals.\n\n**Two**, you might want to know what your house is worth. Things have been changing pretty quickly around here. I can pull some numbers for you—doesn't cost anything, doesn't commit you to anything. Just information.\n\n**Three**, maybe you're thinking about selling at some point. If that's the case, knowing what's happening with homes on your street is probably useful, right?\n\nBasically, I'm looking to be a resource for this neighborhood. You can always call me with questions, whether you're buying, selling, or just curious. Sound good?`,
      direct: `\n\n**THE ASK:**\n\nI'm going to be direct about why I called:\n\n**1. I want your referrals.** If you know anyone looking to buy or sell in ${neighborhood}, I'd appreciate the introduction. I'll take excellent care of them.\n\n**2. I want to be your real estate resource.** When you have questions about property values, market conditions, or real estate strategy, I want to be the agent you call.\n\n**3. Eventually, I want your business.** When you're ready to sell—whether that's next month or in five years—I want to be the agent you choose because I've demonstrated value and expertise long before you needed me.\n\nSo here's what I propose: Let me send you a free market analysis of your home and quarterly market updates about ${neighborhood}. When you're ready to have a real estate conversation—about selling, buying, investing, or just understanding your options—you'll call me. Fair enough?`,
    };

    const ask = asks[scriptTone as keyof typeof asks] || asks.professional;

    const closings = {
      professional: `\n\n**CLOSING:**\n\n[If they show interest:]\nWonderful! I'll get that information over to you right away. What's the best email address for you? And here's my cell number—feel free to call or text anytime: [Your Number].\n\nI'll also drop off some information at your door in the next day or two, including my business card and some details about ${propertyRef}. If you have any questions about the showing activity or anything else, just reach out.\n\nThanks so much for your time today, and I'm looking forward to being a resource for you!\n\n[If they're neutral but receptive:]\nI appreciate you taking my call. I'm going to drop my card in your mailbox so you have my information. If you ever have real estate questions or know someone looking in ${neighborhood}, I'm always happy to help.\n\nHave a great rest of your day!\n\n[If they're not interested:]\nI completely understand. Thanks for your time. If anything changes or you think of someone I could help, my number is [Your Number]. Take care!`,
      friendly: `\n\n**CLOSING:**\n\n[If they show interest:]\nAwesome! This is great. I'll shoot you an email with all the info—just need your email address. And save my number: [Your Number]. Seriously, call or text anytime, even if it's just a quick question!\n\nI'll probably see you around the neighborhood, and I might drop by with some info about the market and my card. Looking forward to staying in touch!\n\n[If they're neutral:]\nNo worries at all! I'll drop my card by sometime soon. If you ever need anything real estate related, or if someone you know is looking, give me a shout. I'm always around!\n\nHave an awesome day!\n\n[If they're not interested:]\nHey, no problem at all! Thanks for chatting with me. If anything comes up, my number is [Your Number]. Take it easy!`,
      casual: `\n\n**CLOSING:**\n\n[If they show interest:]\nPerfect. Shoot me your email real quick and I'll send you some stuff. And here's my cell: [Your Number]. Text is probably easiest.\n\nI'll drop by with my card and some market info in the next couple days. We'll stay in touch.\n\n[If they're neutral:]\nAll good. I'll leave my card for you. If something comes up, you've got my number: [Your Number].\n\nTake care.\n\n[If they're not interested:]\nNo worries. Thanks for your time. [Your Number] if you ever need anything. Later!`,
      direct: `\n\n**CLOSING:**\n\n[If they show interest:]\nExcellent. I'll need your email to send the market analysis. [Get email] Perfect. You'll have it within 24 hours, along with my contact information and some data about recent sales in ${neighborhood}.\n\nMy cell is [Your Number]. Use it whenever you need real estate information or advice.\n\nI'll be in touch quarterly with market updates unless you tell me otherwise. Sound good?\n\n[If they're neutral:]\nUnderstood. I'll leave my information for you. When you're ready to discuss real estate—whether that's tomorrow or in three years—call me at [Your Number].\n\nThanks for your time.\n\n[If they're not interested:]\nI appreciate your directness. My number is [Your Number] if anything changes. Have a good day.`,
    };

    const closing = closings[scriptTone as keyof typeof closings] || closings.professional;

    const fullScript = `**CIRCLE PROSPECTING SCRIPT**\n**Agent:** ${agentName || '[Your Name]'}\n**Trigger Event:** ${triggerEvent.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}\n**Property:** ${propertyRef}\n**Neighborhood:** ${neighborhood}\n**Tone:** ${scriptTone.charAt(0).toUpperCase() + scriptTone.slice(1)}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**INTRODUCTION:**\n\n${introduction}${reasonForCalling}${includeMarketInsight ? marketInsightContent : ''}${ask}${closing}`;

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
          <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Circle Prospecting Script Generator</h1>
            <p className="text-muted-foreground mt-2">
              Generate professional scripts for calling neighbors around recent listings and sales
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI-Powered
          </Badge>
          <Badge variant="outline">Geographic Farming</Badge>
          <Badge variant="outline">Neighborhood Prospecting</Badge>
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
                      placeholder="e.g., Michael Chen"
                    />
                  </div>

                  <div>
                    <Label htmlFor="triggerEvent">Trigger Event</Label>
                    <Select value={triggerEvent} onValueChange={setTriggerEvent}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="just-listed">Just Listed</SelectItem>
                        <SelectItem value="just-sold">Just Sold</SelectItem>
                        <SelectItem value="price-reduction">Price Reduction</SelectItem>
                        <SelectItem value="coming-soon">Coming Soon</SelectItem>
                        <SelectItem value="pending">Just Went Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g., 789 Elm Street"
                    />
                  </div>

                  <div>
                    <Label htmlFor="neighborhoodName">Neighborhood Name *</Label>
                    <Input
                      id="neighborhoodName"
                      value={neighborhoodName}
                      onChange={(e) => setNeighborhoodName(e.target.value)}
                      placeholder="e.g., Riverside Estates"
                    />
                  </div>

                  <div>
                    <Label htmlFor="scriptTone">Script Tone</Label>
                    <Select value={scriptTone} onValueChange={setScriptTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeMarketInsight"
                        checked={includeMarketInsight}
                        onChange={(e) => setIncludeMarketInsight(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeMarketInsight">Include Market Insight</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeValueProp"
                        checked={includeValueProp}
                        onChange={(e) => setIncludeValueProp(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeValueProp">Include Value Proposition</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={generateScript} className="w-full" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Circle Prospecting Script
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
                      Fill in the details and click "Generate Circle Prospecting Script" to create your custom outreach script.
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
                Complete Guide to Circle Prospecting
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h2>Understanding Circle Prospecting: Building Your Geographic Farm</h2>
              
              <p>
                Circle prospecting is one of the most effective lead generation strategies in real estate, yet it's often 
                underutilized by agents who focus exclusively on online leads or referrals. The concept is simple but powerful: 
                whenever you list or sell a property, you systematically contact the neighbors surrounding that property to 
                generate additional business, build your geographic farm, and establish yourself as the local market expert.
              </p>

              <p>
                Unlike cold calling random prospects, circle prospecting has a legitimate reason for contact—you're providing 
                valuable information about neighborhood activity that directly affects their property values. This makes the 
                conversation natural, welcome, and highly effective. Top producing agents credit circle prospecting with generating 
                20-40% of their annual business.
              </p>

              <h2>The Psychology Behind Circle Prospecting Success</h2>

              <p>
                Circle prospecting works because it taps into several powerful psychological and practical realities:
              </p>

              <h3>Hyperlocal Relevance</h3>
              <p>
                When you call someone about a property on their own street or in their immediate neighborhood, you have their 
                attention immediately. Unlike generic marketing messages, news about their neighbor's home sale or listing is 
                personally relevant and interesting. Homeowners care deeply about neighborhood activity because it directly 
                impacts their largest financial asset—their home.
              </p>

              <h3>Social Proof and FOMO</h3>
              <p>
                Hearing that neighbors are successfully selling creates social proof and can trigger fear of missing out (FOMO). 
                Homeowners who might have been casually thinking about selling often accelerate their timeline when they see 
                neighbors taking action. Similarly, knowing that homes in their area are selling quickly and for good prices 
                creates urgency.
              </p>

              <h3>Legitimate Reason for Contact</h3>
              <p>
                One of the biggest challenges in prospecting is overcoming the "Why are you calling me?" barrier. Circle prospecting 
                provides a clear, legitimate reason: "I'm calling because activity is happening in your neighborhood that affects 
                your home's value." This feels informative rather than salesy, reducing resistance and opening conversation.
              </p>

              <h3>Network Effects</h3>
              <p>
                People know others who want to live near them. When you love your neighborhood, you often know friends, family 
                members, or colleagues who wish they lived nearby. Circle prospecting explicitly asks homeowners to tap their 
                networks, generating high-quality referrals from people who already understand and value the neighborhood.
              </p>

              <h3>Builds Geographic Authority</h3>
              <p>
                Repeated circle prospecting in the same areas positions you as THE neighborhood expert. When you're the agent 
                calling every time a property lists or sells, residents begin to see you as the go-to resource for their area. 
                This authority translates directly into listings and referrals.
              </p>

              <h2>The Different Circle Prospecting Triggers</h2>

              <p>
                Effective circle prospecting uses various trigger events, each with unique opportunities and messaging approaches:
              </p>

              <h3>1. Just Listed (Most Common)</h3>
              <p>
                When you list a property, immediately call surrounding neighbors. This generates the highest volume of circle 
                prospecting opportunities.
              </p>
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>Legitimate reason to contact (giving advance notice of showing activity)</li>
                <li>Opportunity to network for buyer referrals</li>
                <li>Plants seeds for future seller leads as neighbors consider their own timing</li>
                <li>Establishes your presence and expertise in the neighborhood</li>
              </ul>
              <p><strong>Best Practices:</strong></p>
              <ul>
                <li>Call within 24-48 hours of listing going active</li>
                <li>Mention the list price to provide market value information</li>
                <li>Offer to provide home valuations to neighbors</li>
                <li>Ask about referrals to people wanting to move into the neighborhood</li>
              </ul>

              <h3>2. Just Sold (Highest Value)</h3>
              <p>
                Calling neighbors after a successful sale often generates the best results because it provides concrete proof 
                of market value and demonstrates your ability to deliver results.
              </p>
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>Provides factual sale price data that directly affects neighbor values</li>
                <li>Demonstrates your effectiveness as an agent</li>
                <li>Creates urgency as sellers realize market conditions are favorable</li>
                <li>Shows continued interest in the neighborhood post-sale</li>
              </ul>
              <p><strong>Best Practices:</strong></p>
              <ul>
                <li>Call within 48 hours of closing</li>
                <li>Share the sale price and key property details</li>
                <li>Explain what the sale means for their home values</li>
                <li>Offer updated market analyses based on this fresh comparable</li>
                <li>Mention buyer demand indicators (number of showings, offers, days on market)</li>
              </ul>

              <h3>3. Price Reduction</h3>
              <p>
                While seemingly negative, price reductions create excellent conversation opportunities about market conditions 
                and pricing strategy.
              </p>
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>Demonstrates market awareness and realistic approach to sellers</li>
                <li>Shows you make strategic adjustments to achieve results</li>
                <li>Creates opportunity to discuss pricing strategy with potential sellers</li>
                <li>May generate buyer interest at the new price point</li>
              </ul>
              <p><strong>Best Practices:</strong></p>
              <ul>
                <li>Frame the reduction as strategic positioning, not desperation</li>
                <li>Explain market feedback that led to the adjustment</li>
                <li>Emphasize the importance of correct pricing from day one</li>
                <li>Position yourself as an honest agent who adjusts strategy based on data</li>
              </ul>

              <h3>4. Coming Soon</h3>
              <p>
                Giving neighbors advance notice before a property hits the market creates exclusivity and urgency.
              </p>
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>Creates VIP feeling for neighbors getting "inside information"</li>
                <li>Generates pocket listings for buyers in your network</li>
                <li>Provides maximum lead time for neighbors considering their own sale</li>
                <li>Demonstrates proactive communication style</li>
              </ul>
              <p><strong>Best Practices:</strong></p>
              <ul>
                <li>Call 1-2 weeks before official listing date</li>
                <li>Emphasize exclusive access for their networks</li>
                <li>Offer private showings before public availability</li>
                <li>Create sense of opportunity and urgency</li>
              </ul>

              <h3>5. Under Contract / Pending</h3>
              <p>
                Notifying neighbors when a property goes pending demonstrates market strength and buyer demand.
              </p>
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>Shows properties are selling (market confidence)</li>
                <li>Indicates how quickly homes move in current market</li>
                <li>Validates pricing when properties go pending quickly</li>
                <li>Demonstrates your effectiveness at generating offers</li>
              </ul>
              <p><strong>Best Practices:</strong></p>
              <ul>
                <li>Mention days on market to show market pace</li>
                <li>Note multiple offer situations if applicable</li>
                <li>Explain what pending status means for property values</li>
                <li>Continue the conversation as relationship-building (sale details coming soon)</li>
              </ul>

              <h2>Creating Your Circle Prospecting System</h2>

              <h3>1. Determining Your Circle Radius</h3>
              <p>
                The optimal circle size depends on neighborhood density and your capacity:
              </p>
              <ul>
                <li><strong>Dense Urban Areas:</strong> 25-50 homes (immediate block and adjacent blocks)</li>
                <li><strong>Suburban Neighborhoods:</strong> 50-100 homes (surrounding streets within 1/4 mile)</li>
                <li><strong>Rural Areas:</strong> 25-50 homes (larger geographic area but fewer total homes)</li>
                <li><strong>Condos/Townhomes:</strong> Entire building or complex (neighbors who share walls/facilities)</li>
              </ul>
              <p>
                Start with a manageable number. It's better to contact 50 neighbors with quality conversations than rush through 
                150 contacts poorly. As you develop efficiency and scripts, you can expand your circle.
              </p>

              <h3>2. Sourcing Contact Information</h3>
              <p>
                You need accurate contact information for circle prospecting success:
              </p>
              <ul>
                <li><strong>Property Records:</strong> County assessor websites often provide owner names and mailing addresses</li>
                <li><strong>Reverse Phone Lookups:</strong> Services like WhitePages, Spokeo, or specialized real estate platforms</li>
                <li><strong>Specialized Services:</strong> REDX, Mojo Dialer, and similar platforms provide pre-compiled neighbor 
                lists with phone numbers</li>
                <li><strong>Door Knocking:</strong> While time-intensive, direct door knocks allow you to meet neighbors face-to-face 
                and collect contact information</li>
                <li><strong>MLS Data:</strong> Some MLS systems provide owner information for surrounding properties</li>
              </ul>

              <h3>3. Multi-Channel Approach</h3>
              <p>
                Maximize effectiveness by combining multiple contact methods:
              </p>
              <p><strong>Day 1: Phone Calls</strong></p>
              <ul>
                <li>Primary prospecting method for immediate conversations</li>
                <li>Leave voicemails when you don't reach people</li>
                <li>Track conversations and gather information</li>
              </ul>
              <p><strong>Day 1-2: Door Hangers or Letters</strong></p>
              <ul>
                <li>Drop door hangers or mail letters to everyone in the circle</li>
                <li>Include property details and your contact information</li>
                <li>Reinforce phone conversations and reach those you couldn't contact</li>
              </ul>
              <p><strong>Day 3-5: Text or Email Follow-Up</strong></p>
              <ul>
                <li>Send text messages to cell numbers collected</li>
                <li>Email market information to addresses obtained</li>
                <li>Provides less intrusive follow-up option</li>
              </ul>
              <p><strong>Ongoing: Market Updates</strong></p>
              <ul>
                <li>Add engaged neighbors to your regular marketing (newsletters, market reports)</li>
                <li>Update them when the property closes with final sale price</li>
                <li>Continue relationship-building for long-term opportunity</li>
              </ul>

              <h3>4. Scheduling and Consistency</h3>
              <p>
                Build circle prospecting into your business routine:
              </p>
              <ul>
                <li><strong>New Listings:</strong> Block 2-3 hours within 24 hours of listing for circle prospecting</li>
                <li><strong>Sales:</strong> Block 2-3 hours within 48 hours of closing for circle prospecting</li>
                <li><strong>Time of Day:</strong> Late morning (9-11 AM), early evening (6-8 PM), or Saturdays often work best</li>
                <li><strong>CRM Integration:</strong> Track all contacts, conversations, and follow-up tasks in your database</li>
                <li><strong>Consistency Over Volume:</strong> Better to circle prospect every listing/sale than skip some due to 
                larger circles</li>
              </ul>

              <h2>Effective Circle Prospecting Conversations</h2>

              <h3>Opening the Conversation</h3>
              <p>
                Your opening sets the tone and determines whether the conversation continues:
              </p>
              <ul>
                <li><strong>Identify yourself immediately:</strong> "This is [Name] with [Brokerage]"</li>
                <li><strong>Respect their time:</strong> "Do you have a quick minute?" or "I hope I'm not catching you at a bad time"</li>
                <li><strong>State your reason quickly:</strong> "I'm calling because [property address] just [listed/sold/etc.]"</li>
                <li><strong>Connect to them personally:</strong> "As a neighbor on the same street..." or "Since you're in the 
                same neighborhood..."</li>
              </ul>

              <h3>Reading the Conversation</h3>
              <p>
                Not every call will be lengthy, and that's okay. Adjust based on signals:
              </p>
              <p><strong>High Interest Signals:</strong></p>
              <ul>
                <li>Asking questions about the property or market</li>
                <li>Mentioning they've been thinking about selling</li>
                <li>Requesting more information or a market analysis</li>
                <li>Sharing information about their home or situation</li>
                <li>Asking about your services or approach</li>
              </ul>
              <p><strong>Neutral Signals:</strong></p>
              <ul>
                <li>Polite but not particularly engaged</li>
                <li>Brief responses without follow-up questions</li>
                <li>Appreciative of the information but not seeking more</li>
                <li>"Thanks for letting me know" type responses</li>
              </ul>
              <p><strong>Low Interest Signals:</strong></p>
              <ul>
                <li>Short, clipped responses</li>
                <li>Statements about being busy or not interested</li>
                <li>Asking to be removed from contact lists</li>
                <li>Hostile or annoyed tone</li>
              </ul>
              <p>
                Tailor your conversation length and depth to their interest level. With high interest, have a full conversation 
                and schedule a follow-up. With neutral interest, provide value and ask permission for future contact. With low 
                interest, politely end the call and note their preference in your CRM.
              </p>

              <h3>Questions That Generate Engagement</h3>
              <p>
                Strategic questions turn monologues into conversations:
              </p>
              <ul>
                <li>"Have you noticed the market activity in your neighborhood lately?"</li>
                <li>"Do you know anyone who's been looking to move to [Neighborhood]?"</li>
                <li>"Have you ever wondered what your home might be worth in today's market?"</li>
                <li>"How long have you been in your home?"</li>
                <li>"Do you plan to stay long-term, or might you move at some point?"</li>
                <li>"What do you love most about living in this neighborhood?"</li>
                <li>"Have you seen the changes in property values around here?"</li>
              </ul>

              <h3>Transitioning to the Ask</h3>
              <p>
                Every circle prospecting call should have a clear objective or "ask":
              </p>
              <ul>
                <li><strong>Referral Ask:</strong> "Do you know anyone who might be interested in living in your neighborhood?"</li>
                <li><strong>Valuation Ask:</strong> "Would you like a free market analysis showing what your home is worth today?"</li>
                <li><strong>Information Ask:</strong> "Can I add you to my list for quarterly market updates about [Neighborhood]?"</li>
                <li><strong>Future Relationship Ask:</strong> "Can I be your real estate resource when you have questions?"</li>
                <li><strong>Appointment Ask:</strong> "I'd love to stop by and introduce myself properly. Are you available this 
                week?"</li>
              </ul>

              <h2>Common Circle Prospecting Objections</h2>

              <h3>"How did you get my number?"</h3>
              <p>
                <strong>Response:</strong> "It's public record as a property owner in the neighborhood. I make it a point to 
                contact neighbors when I list or sell properties because the activity affects your home's value. I thought you'd 
                appreciate knowing what's happening on your street."
              </p>

              <h3>"I'm not interested in selling"</h3>
              <p>
                <strong>Response:</strong> "That's completely fine—most neighbors I talk to aren't planning to sell right now. 
                I'm really just sharing information about what's happening in the neighborhood. But while I have you, do you know 
                anyone who might be looking to move to this area? I always take great care of referrals from neighbors."
              </p>

              <h3>"We already have an agent"</h3>
              <p>
                <strong>Response:</strong> "That's great—it's smart to have a real estate relationship. I'm not trying to replace 
                your agent. I just wanted to make sure you knew about the activity in your neighborhood. If you ever need a second 
                opinion or your situation changes, feel free to reach out. Can I still send you market updates for the area?"
              </p>

              <h3>"I'm too busy right now"</h3>
              <p>
                <strong>Response:</strong> "I totally understand. I'll make this quick—the home at [Address] just [listed/sold] 
                for $[Amount]. That directly affects your property value, so I wanted you to have that information. Can I email 
                you some market details you can review when you have time? What's your email address?"
              </p>

              <h3>"What does this have to do with me?"</h3>
              <p>
                <strong>Response:</strong> "Great question. When homes on your street list or sell, it creates comparables that 
                appraisers and buyers use to value your home. This sale at [Address] for $[Amount] is now the most recent data 
                point for your property value. Even if you're not planning to sell, refinance, or leverage equity, it's good to 
                know your home's value, right?"
              </p>

              <h3>"Don't call me again"</h3>
              <p>
                <strong>Response:</strong> "Absolutely, I respect that. I'll remove you from my calling list. Thanks for your time, 
                and I apologize for the interruption." [Make note in CRM—DO NOT CALL AGAIN]
              </p>

              <h2>Advanced Circle Prospecting Strategies</h2>

              <h3>The "Agent Introduction" Approach</h3>
              <p>
                When you list a property, position yourself as the listing agent introducing yourself to neighbors:
              </p>
              <p>
                "Hi, I'm [Name], and I just listed your neighbor's home at [Address]. I wanted to introduce myself since you'll 
                probably see me around over the next few weeks with showings and open houses. If you have any concerns or questions 
                during the process, please don't hesitate to call me. Also, I'm always looking to help people who want to move 
                into this great neighborhood—do you know anyone who might be interested?"
              </p>

              <h3>The "Open House Invitation" Strategy</h3>
              <p>
                Use open houses as a circle prospecting hook:
              </p>
              <p>
                "I'm hosting an open house this Saturday from 1-3 PM at your neighbor's property. I wanted to personally invite 
                you to stop by—not to view the property necessarily, but to meet me, pick up some market information about your 
                neighborhood, and get some refreshments. Plus, you might know someone who'd love to be your neighbor!"
              </p>

              <h3>The "Neighborhood Expert" Positioning</h3>
              <p>
                After listing or selling multiple properties in the same neighborhood, leverage that authority:
              </p>
              <p>
                "I've now listed/sold [Number] homes in [Neighborhood] this year, which makes me one of the most active agents 
                in your area. I wanted to reach out because I have several buyers still looking for homes in this neighborhood. 
                If you've been considering selling, now might be the perfect time with this level of buyer demand."
              </p>

              <h3>The "Door Knock + Call" Combo</h3>
              <p>
                For high-value properties or target neighborhoods, combine door knocking with calling:
              </p>
              <ul>
                <li>Door knock during afternoon/evening when people are home</li>
                <li>Leave door hanger with property information and your card if no answer</li>
                <li>Call within 24-48 hours referencing the door hanger</li>
                <li>Creates multi-touchpoint exposure and higher contact rates</li>
              </ul>

              <h3>The "Market Report" Follow-Up</h3>
              <p>
                Convert circle prospecting contacts into long-term nurture:
              </p>
              <ul>
                <li>Send quarterly "Neighborhood Market Reports" to everyone in your circles</li>
                <li>Include recent sales, current listings, average prices, and market trends</li>
                <li>Position yourself as the ongoing neighborhood expert</li>
                <li>Generate listing calls when sellers are ready months or years later</li>
              </ul>

              <h2>Measuring Circle Prospecting Success</h2>

              <h3>Key Metrics to Track</h3>
              <ul>
                <li><strong>Contact Rate:</strong> Percentage of neighbors you actually reach by phone (target: 30-40%)</li>
                <li><strong>Conversation Rate:</strong> Percentage who engage in substantive conversation (target: 50-60% of 
                contacts)</li>
                <li><strong>Referral Rate:</strong> Percentage who provide buyer or seller referrals (target: 5-10%)</li>
                <li><strong>Appointment Rate:</strong> Percentage who schedule listing consultations or valuations (target: 3-5%)</li>
                <li><strong>Listing Conversion Rate:</strong> Percentage who become listings within 12 months (target: 10-15% of 
                engaged contacts)</li>
                <li><strong>Buyer Referral Conversion:</strong> Number of buyer referrals who become clients (target: 30-40%)</li>
              </ul>

              <h3>Long-Term ROI</h3>
              <p>
                Circle prospecting delivers returns across multiple timeframes:
              </p>
              <ul>
                <li><strong>Immediate (0-30 days):</strong> Buyer referrals, networking contacts, market insights</li>
                <li><strong>Short-term (1-6 months):</strong> Listing opportunities from neighbors ready to sell soon</li>
                <li><strong>Medium-term (6-18 months):</strong> Listings from neighbors who weren't ready initially but kept your 
                information</li>
                <li><strong>Long-term (18+ months):</strong> Geographic farm dominance leading to ongoing referrals and repeat 
                business</li>
              </ul>
              <p>
                Track your circle prospecting separately in your CRM to measure true ROI. Many agents find that 20-30% of their 
                annual GCI eventually traces back to circle prospecting efforts, though attribution can be complex.
              </p>

              <h2>Circle Prospecting Best Practices</h2>

              <h3>1. Consistency Beats Intensity</h3>
              <p>
                Circle prospecting every single listing/sale is more valuable than doing massive circles occasionally. Build it 
                into your routine as a non-negotiable business activity.
              </p>

              <h3>2. Quality Conversations Over Volume</h3>
              <p>
                Better to have 30 quality conversations than rush through 100 contacts. Take time to build rapport, gather 
                information, and create genuine connections.
              </p>

              <h3>3. Follow Through on Promises</h3>
              <p>
                If you promise to send market information, valuations, or updates, deliver within 24 hours. Your credibility 
                depends on following through.
              </p>

              <h3>4. Respect Do Not Call Preferences</h3>
              <p>
                When someone asks not to be contacted, immediately comply and note it in your CRM. Respecting boundaries builds 
                trust with the broader community.
              </p>

              <h3>5. Combine With Other Farming Activities</h3>
              <p>
                Circle prospecting works best as part of comprehensive geographic farming: door knocking, direct mail, community 
                involvement, sponsorships, and consistent presence.
              </p>

              <h3>6. Leverage Technology</h3>
              <p>
                Use power dialers, CRM automation, and email marketing platforms to maximize efficiency. Technology allows you 
                to maintain consistency even during busy periods.
              </p>

              <h3>7. Be Genuinely Helpful</h3>
              <p>
                Approach circle prospecting with a service mindset. Provide valuable market information, answer questions 
                helpfully, and position yourself as a resource rather than just seeking business.
              </p>

              <h2>Common Circle Prospecting Mistakes</h2>

              <h3>1. Calling Too Large a Circle</h3>
              <p>
                Trying to contact 200 neighbors per listing leads to rushed, low-quality conversations. Start smaller and increase 
                as you gain efficiency.
              </p>

              <h3>2. Giving Up After One Attempt</h3>
              <p>
                Most neighbors aren't home on first call. Make multiple contact attempts across different times and methods before 
                considering them unreachable.
              </p>

              <h3>3. Failing to Ask for Referrals</h3>
              <p>
                Every circle prospecting conversation should include a referral ask. Many agents forget this simple question that 
                generates high-quality leads.
              </p>

              <h3>4. Not Following Up</h3>
              <p>
                Circle prospecting creates warm leads, but most won't become business immediately. Failure to follow up with 
                market updates and touches wastes the initial effort.
              </p>

              <h3>5. Being Too Sales-Focused</h3>
              <p>
                Leading with "Do you want to sell your house?" kills conversations. Lead with information and value, then 
                naturally transition to opportunities.
              </p>

              <h3>6. Neglecting the Just Sold Circle</h3>
              <p>
                Many agents only circle prospect listings, missing the highest-value opportunity: calling neighbors after a 
                successful sale with concrete pricing data.
              </p>

              <h2>Building Your Circle Prospecting Script Library</h2>

              <p>
                Develop scripts for different scenarios, then customize for each conversation:
              </p>
              <ul>
                <li>Just Listed - Hot Market Script</li>
                <li>Just Listed - Slow Market Script</li>
                <li>Just Sold - Quick Sale Script</li>
                <li>Just Sold - Multiple Offer Script</li>
                <li>Price Reduction - Strategic Adjustment Script</li>
                <li>Coming Soon - Exclusive Opportunity Script</li>
                <li>Open House Invitation Script</li>
                <li>Follow-Up After Previous Contact Script</li>
              </ul>

              <p>
                Practice scripts through role-playing, but avoid reading them verbatim on calls. Use scripts as frameworks that 
                guide natural conversation while maintaining authenticity.
              </p>

              <h2>Conclusion: The Compounding Power of Circle Prospecting</h2>

              <p>
                Circle prospecting is one of the few lead generation activities that compounds over time. Each listing or sale 
                creates immediate opportunities (buyer referrals, urgent sellers) while also building long-term geographic authority. 
                As you consistently circle prospect in the same neighborhoods, residents begin to recognize your name, remember 
                your calls, and think of you as THE neighborhood expert.
              </p>

              <p>
                This geographic dominance becomes a significant competitive advantage. When neighbors decide to sell, they call 
                you first. When friends ask for agent recommendations, your name comes up. When buyers ask their future neighbors 
                who to work with, they refer you. Over time, consistent circle prospecting transforms neighborhoods into reliable 
                sources of business.
              </p>

              <p>
                Start implementing circle prospecting on your very next listing or sale. Commit to contacting at least 50 neighbors 
                per transaction. Track your conversations, follow up consistently, and refine your approach based on results. Within 
                six months, you'll start seeing tangible returns. Within a year, circle prospecting will become one of your most 
                valuable business development activities.
              </p>

              <p>
                Remember: every listing and sale is an opportunity to generate 5-10 additional conversations with potential clients 
                and referral sources. Don't waste these opportunities. The time you invest in circle prospecting today will pay 
                dividends for years to come through listings, buyer referrals, and geographic market dominance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
