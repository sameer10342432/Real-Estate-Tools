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
import { Phone, Home, Copy, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI FSBO Outreach Script Generator | Real Estate Prospecting Tool',
    description: 'Generate professional scripts for calling For-Sale-By-Owner (FSBO) sellers. Convert FSBO leads with proven prospecting strategies and value-driven messaging.',
  };
}

export default function AIFSBOOutreachScriptGenerator() {
  const [agentName, setAgentName] = useState<string>('');
  const [sellerName, setSellerName] = useState<string>('');
  const [propertyAddress, setPropertyAddress] = useState<string>('');
  const [scriptStyle, setScriptStyle] = useState<string>('professional');
  const [includeValueProp, setIncludeValueProp] = useState<boolean>(true);
  const [includeObjections, setIncludeObjections] = useState<boolean>(true);
  const [generatedScript, setGeneratedScript] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generateScript = () => {
    const sellerGreeting = sellerName ? sellerName : '[Seller Name]';
    const propertyRef = propertyAddress ? propertyAddress : '[Property Address]';

    const openings = {
      professional: `Hi ${sellerGreeting}, this is ${agentName || '[Your Name]'} with [Your Brokerage]. I hope I'm not catching you at a bad time?\n\n[Wait for response]\n\nGreat! I'm actually calling about your beautiful property at ${propertyRef}. I noticed you're selling it yourself, and I wanted to reach out with something that might be valuable to you.`,
      friendly: `Hello ${sellerGreeting}! My name is ${agentName || '[Your Name]'}, and I'm a local real estate agent here in the area. Do you have a quick minute?\n\n[Wait for response]\n\nAwesome! So I drove by your home at ${propertyRef} and I have to say, it really caught my eye. I see you're taking the FSBO route, which I totally respect - you're clearly a motivated and capable person.`,
      direct: `${sellerGreeting}? Hi, this is ${agentName || '[Your Name]'}, a real estate professional in your area. I'll be brief because I know your time is valuable.\n\n[Pause]\n\nI noticed your property at ${propertyRef} is for sale by owner. I work with several FSBO sellers, and I've found a way to help them that doesn't involve the traditional commission structure. Can I share it with you real quick?`,
    };

    const opening = openings[scriptStyle as keyof typeof openings] || openings.professional;

    const valuePropContent = `\n\n**VALUE PROPOSITION:**\n\n${scriptStyle === 'direct' ? 'Here's the thing' : 'Let me share why I'm calling'}. I specialize in helping FSBO sellers in a unique way. Rather than trying to convince you to list with me right away, I'd like to offer you some complimentary services:\n\n• A free professional market analysis of your home\n• Access to our marketing resources and buyer network\n• Advice on pricing strategy and negotiation tactics\n• Professional photography (if needed)\n\nEven if you decide to continue selling on your own, you'll have valuable information to help you succeed. And honestly, ${sellerGreeting}, many FSBO sellers I work with find that once they see the full scope of what's involved, they appreciate having a professional partner.\n\nThere's no obligation here - I'm just looking to build relationships in the community and help homeowners make informed decisions.`;

    const objectionHandlingContent = `\n\n**COMMON OBJECTIONS & RESPONSES:**\n\n**If they say "I don't want to pay commission":**\n"I completely understand. That's exactly why you're selling yourself, right? Let me ask you this - what if I could show you how professional representation could actually NET you more money even after commission? I've got case studies from this neighborhood. Would you be open to seeing the numbers?"\n\n**If they say "I'm saving money doing it myself":**\n"That makes total sense, and I respect the hustle! Can I ask - how many showings have you had so far? And are the buyers you're attracting pre-qualified? One thing I've noticed is that FSBO properties sometimes attract bargain hunters rather than serious, qualified buyers. Have you experienced that at all?"\n\n**If they say "I'm not interested":**\n"No problem at all, ${sellerGreeting}. I appreciate you being upfront. Before I let you go, can I leave you my contact info just in case? I've worked with several FSBO sellers who started out on their own but eventually wanted some help with negotiations or paperwork. No pressure - you'd be doing me a favor by keeping my card handy."\n\n**If they say "I already have too many agents calling":**\n"I bet you do! FSBO sellers are popular. Here's what makes my call different - I'm not trying to list your property today. I actually have a buyer client who's looking in this area, and your property might be perfect. Even if you're handling it yourself, would you want me to bring my buyer through?"\n\n**If they say "How did you get my number?":**\n"Great question. Your property is listed publicly, and I make it my business to know what's available in this area. Part of serving my clients well means staying on top of all inventory - whether it's listed with an agent or FSBO. Are you finding that you're getting enough qualified buyer traffic?"`;

    const closings = {
      professional: `\n\n**CLOSING:**\n\nSo here's what I'd like to propose, ${sellerGreeting}. Let me stop by with a comparative market analysis - completely free, no strings attached. We can spend 15 minutes going over what similar homes have actually sold for, and I can share some insights about our local market.\n\nAre you available sometime this week? I have openings on [Day] afternoon or [Day] morning. Which works better for you?\n\n[If they agree:]\nPerfect! I'll put you down for [Time] on [Day]. I'll bring some valuable information, and again, there's absolutely no obligation. I'm just here to help.\n\n[If they decline:]\nNo problem at all. Can I follow up with you in a couple of weeks to see how things are going? And if anything comes up in the meantime - questions about contracts, negotiating, anything - please don't hesitate to call me. I'm happy to help even if we never work together officially.\n\nThanks for your time, ${sellerGreeting}. Best of luck with your sale!`,
      friendly: `\n\n**CLOSING:**\n\nYou know what, ${sellerGreeting}? I really admire people who take initiative like you're doing. Whether you work with me or not, I'd love to be a resource for you.\n\nHow about this - let me bring you a free market report on your home. No sales pitch, I promise. Just good information that'll help you price it right and negotiate better. Plus, I'll bring some comps that show you exactly what buyers are paying in your neighborhood right now.\n\nWhen's good for you? I'm pretty flexible this week.\n\n[If they agree:]\nAwesome! Let's do [Day] at [Time]. I'll shoot you a text to confirm. Looking forward to meeting you!\n\n[If they decline:]\nTotally understand! Tell you what - I'll check back with you in a few weeks. And seriously, if you have any questions between now and then, shoot me a text or call anytime. Consider me your friendly neighborhood real estate advisor - no charge!\n\nGood luck with everything, ${sellerGreeting}!`,
      direct: `\n\n**CLOSING:**\n\n${sellerGreeting}, here's my suggestion. Let me come by with hard data on what homes like yours are actually selling for in today's market. I'll also show you the average FSBO vs. agent-sold price difference in this area - the numbers might surprise you.\n\nTakes 15 minutes, max. No obligation whatsoever.\n\n[Day] at [Time] or [Day] at [Time] - which is better?\n\n[If they agree:]\nDone. I'll be there [Day] at [Time]. I'll bring all the comps and market data. See you then.\n\n[If they decline:]\nUnderstood. I'll follow up in two weeks. In the meantime, if you get an offer and want a second opinion on the contract or terms, call me. That's a free service I provide - no strings attached.\n\nThanks for your time, ${sellerGreeting}.`,
    };

    const closing = closings[scriptStyle as keyof typeof closings] || closings.professional;

    const fullScript = `**FSBO OUTREACH SCRIPT**\n**Agent:** ${agentName || '[Your Name]'}\n**Property:** ${propertyRef}\n**Style:** ${scriptStyle.charAt(0).toUpperCase() + scriptStyle.slice(1)}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**OPENING:**\n\n${opening}${includeValueProp ? valuePropContent : ''}${includeObjections ? objectionHandlingContent : ''}${closing}`;

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
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
            <Home className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI FSBO Outreach Script Generator</h1>
            <p className="text-muted-foreground mt-2">
              Create professional scripts for calling For-Sale-By-Owner sellers
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI-Powered
          </Badge>
          <Badge variant="outline">FSBO Prospecting</Badge>
          <Badge variant="outline">Lead Generation</Badge>
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
                      placeholder="e.g., Sarah Johnson"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellerName">Seller Name (Optional)</Label>
                    <Input
                      id="sellerName"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                      placeholder="e.g., Mr. Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="propertyAddress">Property Address *</Label>
                    <Input
                      id="propertyAddress"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g., 123 Main Street"
                    />
                  </div>

                  <div>
                    <Label htmlFor="scriptStyle">Script Style</Label>
                    <Select value={scriptStyle} onValueChange={setScriptStyle}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-2">
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

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeObjections"
                        checked={includeObjections}
                        onChange={(e) => setIncludeObjections(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeObjections">Include Objection Handling</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={generateScript} className="w-full" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate FSBO Script
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
                      Fill in the details and click "Generate FSBO Script" to create your custom outreach script.
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
                Complete Guide to FSBO Prospecting
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h2>Understanding FSBO Sellers and Why They Matter</h2>
              
              <p>
                For-Sale-By-Owner (FSBO) sellers represent one of the most valuable yet challenging lead sources in real estate. 
                These are motivated property owners who have chosen to sell their homes without professional representation, 
                typically to save on commission costs. While FSBOs account for only 7-10% of home sales nationally, they 
                represent an enormous opportunity for agents who know how to approach them correctly.
              </p>

              <p>
                The key to FSBO prospecting success isn't aggressive sales tactics—it's understanding the seller's motivations, 
                challenges, and pain points, then positioning yourself as a helpful resource rather than just another agent 
                trying to win a listing.
              </p>

              <h2>Why Homeowners Choose FSBO</h2>

              <p>Understanding why sellers go the FSBO route is crucial for effective outreach:</p>

              <h3>1. Commission Savings</h3>
              <p>
                This is the primary motivator for most FSBO sellers. With typical commission rates of 5-6%, sellers see 
                potential savings of $15,000-$30,000 on an average-priced home. However, studies consistently show that 
                FSBO homes sell for 5-10% less on average than agent-listed homes, often negating the commission savings.
              </p>

              <h3>2. Control Over the Process</h3>
              <p>
                Some sellers want complete control over showing schedules, negotiations, and how their home is marketed. 
                They may have had negative experiences with agents in the past or simply prefer managing things themselves.
              </p>

              <h3>3. Perceived Simplicity</h3>
              <p>
                In today's digital age, online listing platforms make FSBO seem easier than ever. Sellers may underestimate 
                the complexity of pricing, marketing, negotiating, and navigating legal requirements.
              </p>

              <h3>4. Testing the Waters</h3>
              <p>
                Many FSBO sellers aren't completely committed to selling. They're testing the market to see what interest 
                they can generate before making a full commitment or investment in professional services.
              </p>

              <h2>Common FSBO Challenges (Your Value Proposition)</h2>

              <p>Understanding FSBO sellers' pain points helps you position your services effectively:</p>

              <h3>Pricing Difficulties</h3>
              <p>
                Without access to comprehensive MLS data and market expertise, FSBO sellers often misprice their properties. 
                Overpricing leads to extended market time and eventual price reductions; underpricing leaves money on the table. 
                Your CMA and pricing expertise become valuable here.
              </p>

              <h3>Limited Market Exposure</h3>
              <p>
                Despite online platforms, FSBO listings don't appear on the MLS, which is where most buyers and buyer's agents 
                search. This drastically limits exposure. Studies show that MLS-listed properties receive 60-70% more exposure 
                than FSBO listings.
              </p>

              <h3>Unqualified Buyer Traffic</h3>
              <p>
                FSBO sellers often waste time with unqualified lookers and bargain hunters. They lack the ability to pre-qualify 
                buyers or filter serious offers from lowball attempts. Your buyer screening process solves this.
              </p>

              <h3>Negotiation Inexperience</h3>
              <p>
                Most homeowners sell a house every 7-10 years; agents negotiate dozens of transactions annually. This experience 
                gap shows during offers, inspections, and closing negotiations. Emotional attachment to the property further 
                complicates negotiations for FSBO sellers.
              </p>

              <h3>Legal and Paperwork Complexity</h3>
              <p>
                Real estate transactions involve dozens of legal documents, disclosure requirements, and regulatory compliance 
                issues. Mistakes can lead to failed closings or even litigation. Your expertise navigating these complexities 
                is invaluable.
              </p>

              <h3>Time and Stress</h3>
              <p>
                FSBO sellers quickly realize that selling a home is essentially a part-time job. Between showings, inquiries, 
                marketing, negotiations, and paperwork, many sellers become overwhelmed—creating an opportunity for you to 
                step in as a solution.
              </p>

              <h2>The FSBO Conversion Timeline</h2>

              <p>Understanding the typical FSBO journey helps you time your outreach:</p>

              <h3>Week 1-2: High Optimism</h3>
              <p>
                Fresh listings with excited sellers who are confident in their ability to sell. They're typically resistant 
                to agent outreach. Your approach should be informational and helpful, not salesy.
              </p>

              <h3>Week 3-4: Reality Sets In</h3>
              <p>
                Sellers are dealing with time-wasters, lowball offers, and the complexity of the process. They're becoming 
                more receptive to help. This is an excellent time to offer specific value.
              </p>

              <h3>Week 5-8: Frustration Builds</h3>
              <p>
                If unsold, sellers are frustrated and reconsidering their approach. They're highly receptive to agent assistance. 
                Many convert to traditional listings during this period.
              </p>

              <h3>Week 9+: Decision Time</h3>
              <p>
                Sellers either commit to continuing FSBO with renewed energy (perhaps after a price reduction) or decide to 
                list with an agent. Your consistent, helpful presence throughout positions you as the obvious choice.
              </p>

              <h2>Best Practices for FSBO Outreach Calls</h2>

              <h3>1. Research Before You Call</h3>
              <p>
                Never make a cold FSBO call without preparation. Research the property, neighborhood, recent sales, and how 
                long it's been listed. This knowledge demonstrates professionalism and allows you to offer specific value.
              </p>

              <h3>2. Lead With Value, Not Commission</h3>
              <p>
                Don't immediately try to list the property. Instead, offer something valuable: a free CMA, market insights, 
                photography services, or advice. Build the relationship first.
              </p>

              <h3>3. Respect Their Decision</h3>
              <p>
                Acknowledge and respect their choice to sell FSBO. This diffuses defensiveness and positions you as different 
                from other agents. Say things like "I respect your decision to sell yourself" or "I admire your initiative."
              </p>

              <h3>4. Ask Questions, Don't Lecture</h3>
              <p>
                Use questions to help sellers discover challenges themselves rather than telling them what's wrong with FSBO. 
                "How many showings have you had?" is more effective than "FSBO properties don't get enough exposure."
              </p>

              <h3>5. Share Specific Data</h3>
              <p>
                Use local market statistics, not industry generalities. "FSBO homes in [Neighborhood] sold for an average of 
                $32,000 less last year" is more compelling than "FSBO homes typically sell for less."
              </p>

              <h3>6. Offer Hybrid Options</h3>
              <p>
                Consider offering limited service agreements, flat-fee MLS listing, or other creative arrangements. Meeting 
                sellers partway can lead to full representation later.
              </p>

              <h3>7. Timing Matters</h3>
              <p>
                Call during times when homeowners are likely available but not rushed—late morning (9-11 AM) or early evening 
                (6-8 PM) on weekdays often work well. Avoid dinner time and very early/late calls.
              </p>

              <h3>8. Be Pleasantly Persistent</h3>
              <p>
                Most FSBO conversions don't happen on the first call. Develop a follow-up schedule: initial call, follow-up 
                in one week, check-in at three weeks, touch base at six weeks. Persistence demonstrates commitment.
              </p>

              <h2>Effective FSBO Outreach Strategies</h2>

              <h3>The "Buyer Magnet" Approach</h3>
              <p>
                Call saying you have a buyer interested in their neighborhood. This is truthful if you have active buyers 
                (which you should always cultivate). It positions you as bringing value immediately, not asking for a listing.
              </p>

              <h3>The "Free Service" Approach</h3>
              <p>
                Offer something genuinely free: professional photos, a virtual tour, a market analysis, or staging advice. 
                Even if they don't list immediately, you've built goodwill and demonstrated your value.
              </p>

              <h3>The "Expert Advisor" Approach</h3>
              <p>
                Position yourself as an advisor willing to help them succeed with FSBO. Offer to review their listing, 
                suggest pricing adjustments, or provide contract review services. This builds trust and relationship.
              </p>

              <h3>The "Local Market Expert" Approach</h3>
              <p>
                Lead with hyperlocal expertise about their specific neighborhood. Share recent sales, buyer trends, and 
                market predictions. This establishes credibility and makes you the obvious expert.
              </p>

              <h3>The "Partnership" Approach</h3>
              <p>
                Propose working together rather than replacing their FSBO efforts. Offer to co-market the property, bring 
                your buyers through, or assist with just the negotiation and paperwork phases.
              </p>

              <h2>Handling Common FSBO Objections</h2>

              <h3>"I don't want to pay commission"</h3>
              <p>
                <strong>Response Strategy:</strong> Shift the conversation from commission cost to net proceeds. Use a simple 
                math exercise: "If I could net you $20,000 more after commission than you'd get selling yourself, would that 
                interest you?" Then back it up with local data.
              </p>

              <h3>"I can sell it myself"</h3>
              <p>
                <strong>Response Strategy:</strong> Agree with them! "You absolutely can. I'm just here to make it easier and 
                potentially more profitable. Can I ask—how's it going so far? What's been the biggest challenge?"
              </p>

              <h3>"I've already had lots of calls from agents"</h3>
              <p>
                <strong>Response Strategy:</strong> Differentiate yourself immediately. "I'm sure you have. Let me be different—
                I'm not calling to pressure you to list. I actually have [specific value offer]. Would that be helpful?"
              </p>

              <h3>"Now is not a good time"</h3>
              <p>
                <strong>Response Strategy:</strong> "I completely understand. When would be a better time for a brief 5-minute 
                conversation? Or would you prefer I just email you some market information you can review when convenient?"
              </p>

              <h3>"I'm saving money doing it myself"</h3>
              <p>
                <strong>Response Strategy:</strong> "That makes perfect sense—that's smart thinking. Can I share something 
                interesting though? Last year in this neighborhood, FSBO homes actually netted less than agent-sold homes even 
                after commission. Would you want to see those numbers?"
              </p>

              <h2>Building Your FSBO Prospecting System</h2>

              <h3>1. Set Up FSBO Alerts</h3>
              <p>
                Use platforms like Zillow, Craigslist, Facebook Marketplace, and FSBO-specific sites to get notified of new 
                listings daily. Speed matters—calling within 24-48 hours of listing shows professionalism and catches sellers 
                before they're overwhelmed with agent calls.
              </p>

              <h3>2. Create a Follow-Up Schedule</h3>
              <p>
                Develop a systematic approach: initial contact, one-week follow-up, three-week check-in, six-week review, 
                and monthly touches after that. Use a CRM to track every interaction and set automatic reminders.
              </p>

              <h3>3. Develop Your Value Add Resources</h3>
              <p>
                Create genuinely helpful resources you can offer FSBO sellers: a seller's guide, contract review checklist, 
                pricing worksheet, showing tips document, or negotiation strategies guide. These establish expertise and goodwill.
              </p>

              <h3>4. Track Your Metrics</h3>
              <p>
                Monitor your FSBO prospecting metrics: calls made, conversations had, appointments set, listings won, and 
                conversion timeline. This data helps you optimize your approach and justify the time investment.
              </p>

              <h3>5. Prepare Your CMA Templates</h3>
              <p>
                Have CMA templates ready to go for common price ranges and neighborhoods. When a FSBO seller agrees to a 
                market analysis, being able to deliver it within 24 hours demonstrates professionalism and keeps momentum.
              </p>

              <h2>Advanced FSBO Prospecting Tactics</h2>

              <h3>The Door Knock Follow-Up</h3>
              <p>
                After an initial phone conversation, consider a brief door knock with your promised market analysis or 
                resource. Face-to-face interaction builds stronger relationships than phone alone. Bring something of value, 
                keep it brief, and be respectful of their time.
              </p>

              <h3>The Neighborhood Expert Approach</h3>
              <p>
                When you contact a FSBO seller, also door knock or mail their immediate neighbors. Introduce yourself as the 
                agent helping with the property nearby (without claiming it's listed with you). This generates additional leads 
                and reinforces your presence in the neighborhood.
              </p>

              <h3>The Video Message Strategy</h3>
              <p>
                Create a personalized video message for FSBO sellers you've spoken with. Record a brief 60-90 second video 
                discussing their specific property and market, then text or email it to them. This memorable approach 
                differentiates you from other agents.
              </p>

              <h3>The Partial Service Agreement</h3>
              <p>
                Offer limited service options: MLS-only listing, consultation packages, or transaction coordination services 
                at reduced rates. This gets your foot in the door and often leads to full representation once sellers 
                experience your value.
              </p>

              <h3>The Market Report Series</h3>
              <p>
                After initial contact, send monthly market reports specific to their neighborhood. This keeps you top-of-mind 
                and positions you as the local expert. When they're ready for help, you're the obvious choice.
              </p>

              <h2>Common FSBO Prospecting Mistakes to Avoid</h2>

              <h3>1. Being Too Aggressive</h3>
              <p>
                Pushing for an immediate listing appointment ruins relationships. FSBO sellers are already defensive about 
                agent calls. Build rapport and trust first, then ask for the business.
              </p>

              <h3>2. Badmouthing FSBO</h3>
              <p>
                Never criticize their decision to sell FSBO. This creates defensiveness and positions you as adversarial. 
                Instead, respect their choice while offering to make it easier.
              </p>

              <h3>3. Generic Scripts</h3>
              <p>
                Reading from a script without personalization is obvious and ineffective. Use scripts as guides but customize 
                every call with specific property and market information.
              </p>

              <h3>4. Giving Up Too Soon</h3>
              <p>
                Most FSBO conversions happen after multiple contacts over weeks or months. Making one call and giving up means 
                missing opportunities. Persistence pays off in FSBO prospecting.
              </p>

              <h3>5. Failing to Deliver Promises</h3>
              <p>
                If you promise to send a CMA, market report, or other resource, deliver it promptly. Your credibility depends 
                on following through. Failure to deliver confirms sellers' negative perceptions about agents.
              </p>

              <h3>6. Not Having a Clear Value Proposition</h3>
              <p>
                "I can help you sell your home" isn't compelling—they're already trying to sell it themselves. Offer specific, 
                tangible value: "I can get your property in front of 47,000 active buyers in our MLS system" is much stronger.
              </p>

              <h2>Legal and Ethical Considerations</h2>

              <h3>Disclosure Requirements</h3>
              <p>
                Always identify yourself as a licensed real estate agent immediately. Failing to disclose your professional 
                status can violate licensing laws and create legal issues.
              </p>

              <h3>Do Not Call Lists</h3>
              <p>
                Respect Do Not Call registry requirements. While some exemptions apply to existing business relationships, 
                it's generally safer to avoid calling numbers on DNC lists unless you have prior relationship.
              </p>

              <h3>Honest Representation</h3>
              <p>
                Never misrepresent your intentions, services, or the market situation. If you claim to have a buyer, you must 
                actually have a buyer. Dishonesty destroys trust and can violate ethics codes.
              </p>

              <h3>Commission Discussions</h3>
              <p>
                Be transparent about commission structures when asked. Attempting to hide or minimize commission discussions 
                creates suspicion. Frame commissions in terms of value and net proceeds instead.
              </p>

              <h2>Measuring FSBO Prospecting Success</h2>

              <h3>Key Performance Indicators</h3>
              <ul>
                <li><strong>Contact Rate:</strong> Percentage of FSBO properties where you reach the actual seller</li>
                <li><strong>Conversation Rate:</strong> Percentage of contacts that lead to substantive conversations</li>
                <li><strong>Appointment Rate:</strong> Percentage of conversations that result in in-person meetings</li>
                <li><strong>Conversion Rate:</strong> Percentage of FSBO contacts that become listings</li>
                <li><strong>Time to Conversion:</strong> Average days from first contact to signed listing agreement</li>
              </ul>

              <h3>Industry Benchmarks</h3>
              <p>
                Successful FSBO prospectors typically achieve 10-15% conversion rates over a 90-day period. If you contact 100 
                FSBO sellers, expect to convert 10-15 into listings within three months. This requires consistent follow-up 
                and value delivery.
              </p>

              <h3>ROI Calculation</h3>
              <p>
                Track time invested versus commissions earned from FSBO conversions. While time-intensive, FSBO prospecting 
                often yields higher-quality clients who appreciate your expertise because they experienced the alternative.
              </p>

              <h2>Technology Tools for FSBO Prospecting</h2>

              <h3>CRM Systems</h3>
              <p>
                Use a robust CRM to track FSBO contacts, schedule follow-ups, and record conversation notes. Systems like 
                Follow Up Boss, LionDesk, or kvCORE can automate much of your follow-up sequence.
              </p>

              <h3>FSBO Aggregators</h3>
              <p>
                Services like REDX, Vulcan7, or FSBO.com aggregate FSBO listings from multiple sources, providing phone numbers 
                and saving research time. They're worth the investment if you're serious about FSBO prospecting.
              </p>

              <h3>Video Messaging Tools</h3>
              <p>
                Platforms like BombBomb or Vidyard allow you to send personalized video messages that stand out. These 
                significantly increase response rates compared to text-only emails.
              </p>

              <h3>Market Report Generators</h3>
              <p>
                Tools like Cloud CMA or HouseCanary generate professional market reports quickly. Having these ready to send 
                to FSBO sellers demonstrates professionalism and market expertise.
              </p>

              <h2>Conclusion: The Long Game of FSBO Prospecting</h2>

              <p>
                FSBO prospecting is not a quick win strategy—it's a relationship-building approach that rewards patience, 
                consistency, and genuine value delivery. The agents who succeed with FSBO leads are those who position themselves 
                as helpful advisors rather than commission-hungry salespeople.
              </p>

              <p>
                Remember that every FSBO seller is a homeowner who made an informed choice based on their circumstances and 
                understanding. Your job isn't to prove them wrong, but to make their journey easier and potentially more 
                profitable. When you approach FSBO prospecting with this mindset, you'll build meaningful relationships that 
                often extend beyond a single transaction.
              </p>

              <p>
                Start by committing to contact 5-10 FSBO sellers weekly. Track your conversations, deliver on your promises, 
                and follow up consistently. Within 90 days, you'll likely convert your first FSBO listing. Within a year, 
                FSBO prospecting can become a significant source of business and valuable sphere-of-influence referrals.
              </p>

              <p>
                The key is consistency, value, and patience. FSBO sellers are motivated people who need your expertise—they 
                just don't know it yet. Your job is to show them through actions, not words, that professional representation 
                delivers value worth far more than its cost.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
