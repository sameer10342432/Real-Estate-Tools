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
import { Mail, Users, Copy, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Client Follow-up Email Generator | Real Estate CRM Tool',
    description: 'Generate personalized follow-up emails for real estate clients. Stay in touch after showings, closings, and consultations with professional, engaging communication.',
  };
}

export default function AIClientFollowupEmailGenerator() {
  const [clientName, setClientName] = useState<string>('');
  const [agentName, setAgentName] = useState<string>('');
  const [followupType, setFollowupType] = useState<string>('post-showing');
  const [propertyAddress, setPropertyAddress] = useState<string>('');
  const [daysAfter, setDaysAfter] = useState<number>(1);
  const [tone, setTone] = useState<string>('professional');
  const [includeNextSteps, setIncludeNextSteps] = useState<boolean>(true);
  const [includeFeedback, setIncludeFeedback] = useState<boolean>(true);
  const [generatedEmail, setGeneratedEmail] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generateEmail = () => {
    const greetings = {
      professional: `Dear ${clientName || '[Client Name]'},`,
      friendly: `Hi ${clientName || '[Client Name]'}!`,
      casual: `Hey ${clientName || '[Client Name]'},`,
    };

    const greeting = greetings[tone as keyof typeof greetings] || greetings.professional;

    const introTemplates: { [key: string]: string[] } = {
      'post-showing': [
        `I hope this email finds you well. I wanted to follow up on the property showing at ${propertyAddress || '[Property Address]'} from ${daysAfter === 1 ? 'yesterday' : `${daysAfter} days ago`}.`,
        `Thank you for taking the time to view ${propertyAddress || '[Property Address]'} with me ${daysAfter === 1 ? 'yesterday' : `${daysAfter} days ago`}. I'd love to hear your thoughts!`,
        `I wanted to check in after our showing at ${propertyAddress || '[Property Address]'}. What did you think of the property?`,
      ],
      'post-consultation': [
        `Thank you for meeting with me ${daysAfter === 1 ? 'yesterday' : `${daysAfter} days ago`} to discuss your real estate goals. I've been thinking about our conversation and wanted to follow up.`,
        `It was great speaking with you about your home ${followupType.includes('buy') ? 'search' : 'sale'} plans. I wanted to reach out with some next steps.`,
        `I really enjoyed our consultation ${daysAfter === 1 ? 'yesterday' : `${daysAfter} days ago`}. I'm excited to help you achieve your real estate goals!`,
      ],
      'post-offer': [
        `I wanted to update you on the status of your offer on ${propertyAddress || '[Property Address]'}. ${daysAfter <= 1 ? "We're awaiting the seller's response." : "Here's where things stand."}`,
        `Thank you for your patience as we navigate the offer process on ${propertyAddress || '[Property Address]'}. Let me bring you up to speed.`,
        `Quick update on your offer for ${propertyAddress || '[Property Address]'} - I wanted to keep you in the loop.`,
      ],
      'check-in': [
        `I hope you're doing well! I wanted to check in and see how your ${followupType.includes('buy') ? 'home search' : 'selling preparations'} are going.`,
        `Just touching base to see if there's anything I can help you with regarding your real estate needs.`,
        `I wanted to reach out and see where you are in your ${followupType.includes('buy') ? 'buying' : 'selling'} journey.`,
      ],
      'post-closing': [
        `Congratulations again on your ${followupType.includes('buy') ? 'new home purchase' : 'successful home sale'}! I hope ${daysAfter <= 7 ? "you're settling in nicely" : "everything is going smoothly"}.`,
        `I wanted to check in and see how things are going since we closed on ${propertyAddress || '[Property Address]'} ${daysAfter === 1 ? 'yesterday' : `${daysAfter} days ago`}.`,
        `Hope you're enjoying your ${followupType.includes('buy') ? 'new home' : 'fresh start'}! Just wanted to follow up and make sure everything is going well.`,
      ],
    };

    const intros = introTemplates[followupType] || introTemplates['check-in'];
    const intro = intros[Math.floor(Math.random() * intros.length)];

    let bodyContent = '';

    if (followupType === 'post-showing' && includeFeedback) {
      bodyContent += `\n\nI'd love to hear your feedback about the property:
• What did you like most about the home?
• Were there any concerns or drawbacks?
• Does it match what you're looking for?
• Would you like to schedule a second showing?

Your honest thoughts will help me find the perfect property for you.`;
    }

    if (followupType === 'post-consultation') {
      bodyContent += `\n\nBased on our discussion, here's what I've been working on for you:
• Researching properties in your preferred neighborhoods
• Preparing a customized home search strategy
• Analyzing current market conditions in your area
• Connecting with other professionals you might need (lenders, inspectors, etc.)

I'll be sending you some properties that match your criteria shortly.`;
    }

    if (followupType === 'post-offer') {
      bodyContent += `\n\nWe're currently in the ${daysAfter <= 2 ? 'waiting period for the seller to respond' : 'negotiation phase'}. ${daysAfter > 3 ? "The seller has responded, and we're working through the details." : "I'll notify you immediately once I hear back from the listing agent."}

In the meantime, if you have any questions or want to discuss strategy, I'm here for you.`;
    }

    if (followupType === 'post-closing') {
      bodyContent += `\n\nAs you settle in, here are a few reminders and resources:
• Save my contact information for any future real estate questions
• Consider scheduling regular home maintenance (HVAC, gutters, etc.)
• Get to know your new neighborhood and local amenities
• Update your address with important institutions
• Leave me a review if you were happy with my service!

I'm always here if you need anything, even after closing.`;
    }

    if (includeNextSteps) {
      const nextStepsContent: { [key: string]: string } = {
        'post-showing': `\n\n**Next Steps:**\n\nI have a few more properties lined up that I think you'll love. Are you available for showings ${daysAfter < 3 ? 'later this week' : 'next week'}? I can also set up a virtual tour if that's more convenient.`,
        'post-consultation': `\n\n**Next Steps:**\n\nLet's schedule a time to review some properties I've found. I'll send you a calendar link where you can pick a time that works best for you.`,
        'check-in': `\n\n**Next Steps:**\n\nLet's reconnect soon. Reply to this email or give me a call, and we can discuss where you are in the process and how I can best help you.`,
        'post-offer': `\n\n**Next Steps:**\n\nI'll keep you updated as soon as I hear anything. In the meantime, make sure your financing is ready to go so we can move quickly if needed.`,
        'post-closing': `\n\n**Next Steps:**\n\nIf you know anyone looking to buy or sell, I'd be honored to help them too. Referrals from happy clients like you are the best part of my job!`,
      };

      bodyContent += nextStepsContent[followupType] || '';
    }

    const closings = {
      professional: `\n\nPlease don't hesitate to reach out if you have any questions or concerns.\n\nBest regards,\n${agentName || '[Your Name]'}`,
      friendly: `\n\nLooking forward to hearing from you!\n\nWarm regards,\n${agentName || '[Your Name]'}`,
      casual: `\n\nTalk soon!\n\n${agentName || '[Your Name]'}`,
    };

    const closing = closings[tone as keyof typeof closings] || closings.professional;

    const subjectLines: { [key: string]: string[] } = {
      'post-showing': [
        `Following Up on ${propertyAddress || 'the Property Showing'}`,
        `Your Thoughts on ${propertyAddress || 'Yesterday's Showing'}?`,
        `Checking In After Your Property Tour`,
      ],
      'post-consultation': [
        `Next Steps for Your Home ${followupType.includes('buy') ? 'Search' : 'Sale'}`,
        `Great Meeting With You - Here's What's Next`,
        `Moving Forward with Your Real Estate Goals`,
      ],
      'post-offer': [
        `Update on Your Offer for ${propertyAddress || '[Property]'}`,
        `Status Update: ${propertyAddress || 'Your Offer'}`,
        `Your Offer - Latest News`,
      ],
      'check-in': [
        `Just Checking In on Your Home Search`,
        `Touching Base About Your Real Estate Plans`,
        `How Can I Help You Today?`,
      ],
      'post-closing': [
        `Congratulations Again! + A Quick Follow-Up`,
        `How's Everything Going at ${propertyAddress || 'Your New Home'}?`,
        `Post-Closing Check-In`,
      ],
    };

    const subjects = subjectLines[followupType] || subjectLines['check-in'];
    const subjectLine = subjects[Math.floor(Math.random() * subjects.length)];

    const fullEmail = `Subject: ${subjectLine}\n\n${greeting}\n\n${intro}${bodyContent}${closing}`;

    setGeneratedEmail(fullEmail);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Client Follow-up Email Generator</h1>
            <p className="text-muted-foreground mt-2">
              Create personalized follow-up emails to maintain strong client relationships
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI-Powered
          </Badge>
          <Badge variant="outline">Client Relations</Badge>
          <Badge variant="outline">Email Marketing</Badge>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculator">Email Generator</TabsTrigger>
          <TabsTrigger value="guide">Guide & Best Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Email Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Sarah Johnson"
                    />
                  </div>

                  <div>
                    <Label htmlFor="agentName">Your Name</Label>
                    <Input
                      id="agentName"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="e.g., John Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="followupType">Follow-up Type</Label>
                    <Select value={followupType} onValueChange={setFollowupType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="post-showing">After Property Showing</SelectItem>
                        <SelectItem value="post-consultation">After Consultation</SelectItem>
                        <SelectItem value="post-offer">After Offer Submitted</SelectItem>
                        <SelectItem value="check-in">General Check-In</SelectItem>
                        <SelectItem value="post-closing">After Closing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(followupType === 'post-showing' || followupType === 'post-offer' || followupType === 'post-closing') && (
                    <div>
                      <Label htmlFor="propertyAddress">Property Address (Optional)</Label>
                      <Input
                        id="propertyAddress"
                        value={propertyAddress}
                        onChange={(e) => setPropertyAddress(e.target.value)}
                        placeholder="e.g., 123 Main St"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="daysAfter">Days Since Event</Label>
                    <Input
                      id="daysAfter"
                      type="number"
                      value={daysAfter}
                      onChange={(e) => setDaysAfter(Number(e.target.value))}
                      min="1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tone">Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="includeNextSteps"
                        checked={includeNextSteps}
                        onChange={(e) => setIncludeNextSteps(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="includeNextSteps">Include Next Steps</Label>
                    </div>

                    {followupType === 'post-showing' && (
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeFeedback"
                          checked={includeFeedback}
                          onChange={(e) => setIncludeFeedback(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeFeedback">Request Feedback</Label>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Button onClick={generateEmail} className="w-full" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Follow-up Email
              </Button>
            </div>

            <div className="space-y-6">
              {generatedEmail && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Generated Email</span>
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
                    <div className="whitespace-pre-wrap p-4 bg-muted rounded-lg font-mono text-sm">
                      {generatedEmail}
                    </div>
                  </CardContent>
                </Card>
              )}

              {!generatedEmail && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center text-muted-foreground py-12">
                      <Mail className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>Fill in the details and click "Generate Follow-up Email"</p>
                      <p className="text-sm mt-2">Your personalized email will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Mastering Client Follow-up in Real Estate
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <h2>The Critical Importance of Timely Follow-up</h2>
              <p>
                In real estate, follow-up isn't just good practice—it's the difference between success and failure. Studies show that 80% of sales require at least five follow-ups after the initial contact, yet 44% of salespeople give up after just one follow-up. In real estate specifically, the agent who follows up first and most consistently typically wins the business. Prompt, personalized follow-up demonstrates professionalism, builds trust, and keeps you top-of-mind when clients are ready to make decisions.
              </p>

              <h2>The Psychology of Effective Follow-up</h2>
              <p>
                Understanding why follow-up works helps you craft more effective communications. When you follow up, you're accomplishing several psychological goals: showing that you care about the client as more than just a transaction, demonstrating reliability and consistency, building familiarity (which creates trust), providing value through information and insights, and creating opportunities for questions and concerns to surface. The key is balancing persistence with respect—following up enough to stay present without becoming annoying.
              </p>

              <h2>Optimal Timing for Different Follow-up Types</h2>
              <p>
                Timing dramatically affects follow-up effectiveness. After a property showing, follow up within 24 hours while the experience is fresh in their mind. Post-consultation follow-ups should happen within 1-2 days to capitalize on initial enthusiasm. After submitting an offer, update clients daily even if there's no news—silence creates anxiety. For general check-ins with leads, every 2-3 weeks maintains presence without overwhelming. Post-closing, follow up at 1 week, 1 month, 3 months, 6 months, and annually to build long-term relationships and referral sources.
              </p>

              <h2>Crafting Subject Lines That Get Opened</h2>
              <p>
                Your subject line determines whether your follow-up email gets read or deleted. Effective subject lines are specific to the situation, create curiosity without being clickbaity, keep it under 50 characters for mobile display, and personalize when possible with property addresses or specific details. For example, "Your Thoughts on 123 Main Street?" performs better than generic "Following Up." Test different approaches to learn what resonates with your audience, and avoid spam trigger words like "free," "urgent," or excessive punctuation.
              </p>

              <h2>Personalization Strategies for Maximum Impact</h2>
              <p>
                Generic follow-ups feel like spam; personalized communications build relationships. Reference specific details from your conversation, mention something unique about properties you discussed, acknowledge their specific situation and timeline, use their name and property preferences, and refer back to earlier communications to show continuity. The AI generator provides a template, but your personal touches—specific comments they made, unique features they liked, concerns they raised—transform a good email into a great one.
              </p>

              <h2>Multi-Channel Follow-up Strategies</h2>
              <p>
                While this tool focuses on email, the most effective follow-up uses multiple channels. Combine email with phone calls (especially for urgent matters or after offers), text messages for quick updates or confirmations, handwritten notes for special occasions or thank-yous, social media engagement to stay visible, and video messages for particularly important follow-ups. Different clients prefer different communication methods, so pay attention to how they respond and adjust accordingly.
              </p>

              <h2>What to Include in Post-Showing Follow-ups</h2>
              <p>
                Post-showing follow-ups should accomplish several objectives: thank them for their time, ask for specific feedback (what they liked, concerns, how it compares to their criteria), address any questions or concerns that arose, provide additional information they requested, suggest next steps (second showing, other properties, making an offer), and maintain enthusiasm without pressure. Include links to listing details, neighborhood information, or comparable sales data to add value beyond just checking in.
              </p>

              <h2>Following Up After Consultations</h2>
              <p>
                Initial consultation follow-ups set the tone for your entire relationship. Thank them for meeting with you, recap your understanding of their goals, outline your recommended strategy, provide promised resources (buyer guides, market reports, etc.), suggest concrete next steps with timeline, and demonstrate that you've been actively working for them. This is your opportunity to differentiate yourself from other agents they might be interviewing—show initiative and value immediately.
              </p>

              <h2>Keeping Offers on Track</h2>
              <p>
                The period after submitting an offer is anxiety-filled for buyers. Your follow-ups during this time should provide regular updates even when there's no news (which itself is information), explain what's happening behind the scenes, set realistic expectations for timing, prepare them for potential scenarios, keep them excited and confident in their decision, and answer questions promptly. Your calm, knowledgeable presence during this stressful time cements your value and builds trust for future referrals.
              </p>

              <h2>Post-Closing Follow-up for Long-Term Success</h2>
              <p>
                Many agents disappear after closing, missing huge opportunities. Post-closing follow-ups should congratulate them and celebrate the milestone, provide helpful resources for homeownership or selling, offer yourself as an ongoing resource, request reviews and testimonials while satisfaction is high, ask for referrals in a non-pushy way, and maintain regular contact through market updates and check-ins. Clients who closed years ago are valuable sources of referrals, repeat business, and testimonials—if you stay in touch.
              </p>

              <h2>Handling Non-Responsive Clients</h2>
              <p>
                Not everyone will respond to every follow-up. For non-responsive clients: vary your communication channel (email to phone to text), try different times and days, provide specific value in each contact, acknowledge the silence directly ("I haven't heard back, so I'm not sure where you are..."), give them an easy out ("If timing isn't right, just let me know"), but don't give up too quickly. Some clients need 5-10 touches before engaging. Track your follow-ups so you know your patterns and can adjust.
              </p>

              <h2>CRM Integration and Automation</h2>
              <p>
                While personalization is crucial, smart automation ensures consistency. Use your CRM to schedule automatic follow-up reminders, track all client interactions and preferences, segment clients by stage, need, and urgency, automate initial follow-ups while keeping them personalized, and measure response rates to improve over time. The AI generator helps create personalized content quickly, which you can store as templates in your CRM for even faster future use.
              </p>

              <h2>Common Follow-up Mistakes to Avoid</h2>
              <p>
                Several mistakes undermine follow-up effectiveness. Avoid being too salesy or pushy—focus on helping, not selling. Don't send completely generic messages that could go to anyone. Never follow up so infrequently that clients forget you or so frequently you become annoying. Always include value, not just "checking in." Don't make it all about you—focus on their needs. And never lie or exaggerate to create urgency—trust once lost is hard to rebuild.
              </p>

              <h2>Measuring Follow-up Effectiveness</h2>
              <p>
                Track metrics to improve your follow-up game: response rates to different types of follow-ups, time to response (faster is generally better), conversion rates from lead stages, number of touches before conversion, and ultimately, deals closed attributed to good follow-up. Review these metrics monthly and test different approaches. What works varies by market, client type, and even your personal style—find what works for you through testing and measurement.
              </p>

              <h2>Building a Systematic Follow-up Process</h2>
              <p>
                Consistency requires systems. Create a follow-up schedule for each client type and stage: immediate (within 24 hours) follow-ups for hot leads and post-showing, short-term (2-7 days) for warm leads and post-consultation, medium-term (weekly or biweekly) for lukewarm leads, and long-term (monthly or quarterly) for cold leads and past clients. Automate reminders so nothing falls through the cracks. Use tools like this AI generator to make creating personalized content quick and easy, eliminating the excuse of "too busy."
              </p>

              <h2>Adapting to Client Communication Preferences</h2>
              <p>
                Different clients have different preferences. Some want detailed emails with lots of information; others prefer brief texts with links for more details. Some clients want daily updates; others find that overwhelming. Pay attention to how clients respond: if they reply to texts but not emails, text them. If they ask lots of questions, provide detailed information. If they seem overwhelmed, simplify. The best follow-up matches the client's communication style and needs.
              </p>

              <h2>Creating Value in Every Follow-up</h2>
              <p>
                The most effective follow-ups provide genuine value beyond just "staying in touch." Include new market data relevant to their search, additional properties that match their criteria, helpful resources (lender contacts, moving companies, neighborhood guides), answers to questions they've asked, insights about market conditions affecting their situation, and success stories relevant to their goals. When every follow-up offers value, clients appreciate your contact rather than seeing it as a nuisance.
              </p>

              <h2>Following Up with Lost Deals</h2>
              <p>
                Not every deal closes, but that doesn't mean the relationship ends. When deals fall through, follow up to express disappointment, offer to discuss what happened if they're comfortable, remain available for future needs, continue providing value through market updates, and check in periodically without being pushy. Many "lost" clients eventually return when their situation changes—if you've maintained the relationship professionally.
              </p>

              <h2>The Long Game: Building a Referral Machine</h2>
              <p>
                Excellent follow-up isn't just about closing the current deal—it's about building a referral machine for future business. Past clients who feel well-cared-for become enthusiastic referral sources. Studies show that referred clients close at higher rates, have higher satisfaction, and provide more referrals themselves. Your follow-up strategy should extend years beyond closing, turning every client into a potential source of future business through referrals and repeat transactions.
              </p>

              <h2>Leveraging AI for Efficient, Personal Follow-up</h2>
              <p>
                This AI Follow-up Email Generator bridges the gap between personalization and efficiency. Instead of spending 30-45 minutes crafting each follow-up email, generate a personalized template in minutes, then customize with specific details about your conversation, property, or situation. This efficiency allows you to maintain consistent follow-up even during busy periods, when follow-up often falls by the wayside. The AI handles structure and messaging; you add the personal touches that build real relationships.
              </p>

              <p className="text-lg font-semibold mt-8">
                Mastering follow-up is perhaps the single most important skill for real estate success. Combined with this AI tool for efficiency and the personal touches that show you care, you can build a follow-up system that keeps you top-of-mind, builds lasting relationships, and generates a consistent flow of business through excellent client care.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
