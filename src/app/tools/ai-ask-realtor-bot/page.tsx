'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Bot, Send, Trash2, Home, TrendingUp, DollarSign, Building, Scale, BarChart3, Key, BookOpen, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  category: string;
  timestamp: Date;
}

interface Answer {
  response: string;
  keyTakeaways: string[];
  relatedQuestions: string[];
}

interface Conversation {
  question: Question;
  answer: Answer;
}

type CategoryType = 'buying' | 'selling' | 'renting' | 'investing' | 'legal' | 'market' | 'financing';

export default function AIAskRealtorBot() {
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('buying');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const categories = [
    { id: 'buying' as CategoryType, name: 'Buying', icon: Home, emoji: '🏡', color: 'bg-emerald-100 text-emerald-700' },
    { id: 'selling' as CategoryType, name: 'Selling', icon: TrendingUp, emoji: '📈', color: 'bg-blue-100 text-blue-700' },
    { id: 'renting' as CategoryType, name: 'Renting', icon: Key, emoji: '🔑', color: 'bg-purple-100 text-purple-700' },
    { id: 'investing' as CategoryType, name: 'Investing', icon: DollarSign, emoji: '💰', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'legal' as CategoryType, name: 'Legal', icon: Scale, emoji: '⚖️', color: 'bg-red-100 text-red-700' },
    { id: 'market' as CategoryType, name: 'Market', icon: BarChart3, emoji: '📊', color: 'bg-indigo-100 text-indigo-700' },
    { id: 'financing' as CategoryType, name: 'Financing', icon: Building, emoji: '🏦', color: 'bg-teal-100 text-teal-700' },
  ];

  const commonQuestions: Record<CategoryType, string[]> = {
    buying: [
      'How much should I save for a down payment?',
      'What credit score do I need to buy a house?',
      'Should I get pre-approved before house hunting?',
      'What are closing costs and how much should I budget?',
      'How long does the home buying process take?',
      'What questions should I ask during a home viewing?',
      'Is it better to buy new construction or an existing home?',
      'How do I know if I\'m ready to buy a house?',
    ],
    selling: [
      'When is the best time to sell my home?',
      'How do I determine my home\'s value?',
      'Should I make repairs before selling?',
      'What are the costs of selling a home?',
      'How long will it take to sell my house?',
      'Should I stage my home before listing?',
      'Do I need to disclose all issues with the property?',
      'How do I choose the right listing price?',
    ],
    renting: [
      'How much rent can I afford?',
      'What should I look for during a rental inspection?',
      'Can I negotiate rent with my landlord?',
      'What are my rights as a tenant?',
      'How much is a typical security deposit?',
      'What should be included in a lease agreement?',
      'How do I handle maintenance issues?',
      'Can my landlord increase my rent?',
    ],
    investing: [
      'What is a good ROI for rental property?',
      'Should I invest in residential or commercial property?',
      'How do I analyze a potential investment property?',
      'What are the tax benefits of real estate investing?',
      'How much money do I need to start investing?',
      'What is the 1% rule in real estate investing?',
      'Should I invest locally or out of state?',
      'How do I find good investment properties?',
    ],
    legal: [
      'Do I need a real estate attorney?',
      'What is title insurance and do I need it?',
      'What happens if the seller backs out of the contract?',
      'What are contingencies in a purchase agreement?',
      'How do property taxes work?',
      'What is an easement on property?',
      'What are my rights if I find undisclosed issues?',
      'How does homestead exemption work?',
    ],
    market: [
      'Is now a good time to buy or sell?',
      'What are current mortgage interest rates?',
      'How do I research local market trends?',
      'What factors affect property values?',
      'How does inflation impact real estate?',
      'What are the signs of a housing bubble?',
      'How competitive is the current market?',
      'What neighborhoods are appreciating fastest?',
    ],
    financing: [
      'What types of mortgages are available?',
      'FHA vs conventional loan - which is better?',
      'What is PMI and how can I avoid it?',
      'How does a VA loan work?',
      'What is the difference between pre-qualified and pre-approved?',
      'Can I buy a house with bad credit?',
      'What is a good debt-to-income ratio?',
      'How do I improve my chances of loan approval?',
    ],
  };

  const generateAnswer = (questionText: string, category: CategoryType): Answer => {
    const answerTemplates: Record<CategoryType, any> = {
      buying: {
        responses: [
          `When it comes to ${questionText.toLowerCase()}, there are several important factors to consider. First, it's essential to understand that the home buying process typically requires careful planning and preparation. Most experts recommend having at least 3-6 months of research and financial preparation before making an offer.

For down payments, while the traditional 20% is ideal to avoid PMI, many programs allow as little as 3-5% down for qualified buyers. FHA loans require as little as 3.5% down, while conventional loans can go as low as 3% for first-time buyers. However, a larger down payment means lower monthly payments and less interest paid over time.

Your credit score plays a crucial role in your ability to buy a home and the interest rate you'll receive. Generally, a score of 620 or higher is needed for conventional loans, while FHA loans may accept scores as low as 580. The higher your score, the better your loan terms will be.

Working with an experienced real estate agent can make the process much smoother. They'll help you navigate the market, negotiate offers, and avoid common pitfalls that first-time buyers often encounter.`,
          `Great question about ${questionText.toLowerCase()}. Let me provide you with comprehensive guidance on this important topic.

The home buying journey begins with financial preparation. Before you start house hunting, it's crucial to get pre-approved for a mortgage. This not only shows sellers you're a serious buyer but also helps you understand exactly how much home you can afford. Pre-approval involves a lender reviewing your credit, income, employment history, and assets.

Closing costs are a significant expense that many first-time buyers overlook. These typically range from 2-5% of the purchase price and include items like appraisal fees, title insurance, attorney fees, loan origination fees, and prepaid property taxes and insurance. Always budget an additional amount beyond your down payment to cover these costs.

The typical home buying process takes 30-60 days from offer acceptance to closing, though it can vary. During this time, you'll complete inspections, finalize financing, and handle all necessary paperwork. Being prepared and responsive throughout this process can help ensure a smooth transaction.`,
        ],
        takeaways: [
          'Start saving early for both down payment and closing costs',
          'Get pre-approved before house hunting to understand your budget',
          'Work with experienced professionals (agent, lender, inspector)',
          'Budget for 2-5% of purchase price in closing costs',
          'Higher credit scores result in better loan terms',
          'Consider all monthly costs beyond just the mortgage payment',
        ],
        relatedQuestions: [
          'What documents do I need for mortgage pre-approval?',
          'How do I find a reputable real estate agent?',
          'What should I look for during a home inspection?',
          'How do I make a competitive offer in a hot market?',
        ],
      },
      selling: {
        responses: [
          `Regarding ${questionText.toLowerCase()}, timing and preparation are key to maximizing your home sale proceeds. The spring and early summer months (March through June) are traditionally the best times to sell, as inventory is high and buyer demand peaks during these months when families want to move before the new school year.

Determining your home's value requires a comprehensive market analysis. Your listing agent should provide a Comparative Market Analysis (CMA) that examines recent sales of similar homes in your area. Factors affecting value include location, square footage, condition, upgrades, and current market conditions. Online estimates can provide a ballpark figure, but aren't as accurate as a professional CMA.

Before listing, consider strategic improvements that offer the best return on investment. Fresh paint, minor repairs, professional cleaning, and curb appeal enhancements typically offer the best ROI. Major renovations usually aren't worth the investment if you're selling soon, unless they're necessary to make the home marketable.

Selling costs typically include agent commissions (usually 5-6% of sale price), title insurance, potential repairs from inspection, staging costs, and various closing fees. Plan for these expenses to avoid surprises and understand your net proceeds.`,
          `Let me address your question about ${questionText.toLowerCase()} with detailed insights from real estate professionals.

Home staging can significantly impact your sale. Staged homes typically sell 73% faster and for 1-5% more than non-staged homes. Even simple staging like decluttering, depersonalizing, and arranging furniture to showcase space can make a substantial difference. Professional staging services cost $1,500-$3,000 on average but often pay for themselves through faster sales and higher offers.

Disclosure requirements vary by state, but sellers are generally required to disclose any known material defects that affect the property's value or safety. This includes structural issues, water damage, pest problems, and neighborhood nuisances. Failure to disclose can lead to legal liability even after the sale. When in doubt, disclose.

Pricing your home correctly from the start is crucial. Overpricing can cause your listing to sit on the market, eventually requiring price reductions that may signal desperation. Underpricing might leave money on the table. Your agent's CMA should guide you to a competitive price that attracts buyers while maximizing your return.`,
        ],
        takeaways: [
          'Spring and early summer typically offer the best selling conditions',
          'Professional CMA provides accurate home valuation',
          'Budget 6-10% of sale price for selling costs and commissions',
          'Strategic staging can increase sale speed and price',
          'Disclose all known material defects to avoid legal issues',
          'Correct pricing from the start is crucial for success',
        ],
        relatedQuestions: [
          'Should I use a real estate agent or sell FSBO?',
          'How do I negotiate with buyers effectively?',
          'What repairs should I make before listing?',
          'How do I handle multiple offers on my home?',
        ],
      },
      renting: {
        responses: [
          `Concerning ${questionText.toLowerCase()}, understanding your rights and responsibilities as a tenant is essential for a positive rental experience.

The general rule for affordable rent is that it shouldn't exceed 30% of your gross monthly income. However, in high-cost areas, many renters spend 40-50% of income on rent. Remember to factor in utilities, renter's insurance, and other living expenses when budgeting. Some landlords require proof that your income is 2.5-3 times the monthly rent.

During a rental inspection, check all appliances, plumbing, electrical outlets, windows, doors, and locks. Document any existing damage with photos and written notes. Test water pressure, look for signs of mold or water damage, check for pest issues, and ensure proper heating and cooling. This documentation protects you from being charged for pre-existing damage when you move out.

Security deposits typically equal one to two months' rent, though this varies by state and local laws. The deposit must be returned within a specific timeframe after move-out (usually 14-30 days depending on state law), minus any deductions for damages beyond normal wear and tear. Always get a receipt for your deposit and understand the terms for its return.`,
          `Let me help you understand ${questionText.toLowerCase()} from a tenant's perspective.

Rent negotiation is possible, especially in markets with higher vacancy rates or if you're a strong tenant with excellent credit and rental history. Timing matters - negotiate before signing or at renewal when you have leverage. Offer to sign a longer lease, pay several months upfront, or take the unit as-is without requested repairs in exchange for lower rent.

Tenant rights vary significantly by state and locality, but generally include the right to a habitable living space, privacy, non-discrimination, and proper notice before entry or eviction. Landlords must maintain essential services like heat, water, and electricity. They cannot retaliate against you for asserting your legal rights.

Lease agreements should clearly specify rent amount, due date, security deposit, lease term, maintenance responsibilities, pet policies, subletting rules, and procedures for ending the tenancy. Read everything carefully before signing and keep a copy for your records. Never sign a lease with blank sections or unclear terms.`,
        ],
        takeaways: [
          'Rent should not exceed 30% of gross monthly income',
          'Document property condition with photos at move-in',
          'Understand your state-specific tenant rights',
          'Security deposits must be returned per state law timelines',
          'Maintenance requests should be submitted in writing',
          'Review lease agreements thoroughly before signing',
        ],
        relatedQuestions: [
          'What should I do if my landlord won\'t make repairs?',
          'Can I break my lease early without penalty?',
          'How do I get my security deposit back?',
          'What are my options if rent becomes unaffordable?',
        ],
      },
      investing: {
        responses: [
          `When it comes to ${questionText.toLowerCase()}, understanding key investment metrics and strategies is fundamental to success.

A good ROI for rental property typically ranges from 8-12% annually, though this varies by market and property type. The "1% rule" is a quick screening tool - monthly rent should equal at least 1% of the purchase price. However, this is just a starting point. Calculate cash-on-cash return, cap rate, and total ROI including appreciation to properly evaluate investments.

Analyzing investment properties requires examining multiple factors: purchase price, financing terms, monthly rental income, operating expenses (property taxes, insurance, maintenance, property management, vacancy), and potential appreciation. Don't forget to account for capital expenditures (roof, HVAC, appliances) that will eventually need replacement.

Tax benefits make real estate particularly attractive to investors. These include mortgage interest deductions, property tax deductions, depreciation (even while the property appreciates), and potential 1031 exchanges to defer capital gains. Consult with a tax professional to maximize these benefits.

Starting capital varies, but many investors begin with 20-25% down payment plus closing costs and reserves. Some use FHA loans (3.5% down) for house hacking, where you live in one unit and rent others. Building a cash reserve for vacancies and repairs is crucial - aim for 6 months of expenses.`,
          `Regarding ${questionText.toLowerCase()}, let me share insights on building a successful real estate investment portfolio.

Residential vs. commercial property each has advantages. Residential offers easier financing, lower entry costs, larger tenant pool, and simpler management. Commercial properties provide longer leases, less turnover, tenants who maintain the space, and potentially higher returns. Beginners typically start with residential before moving to commercial.

Local vs. out-of-state investing is a crucial decision. Local investing allows hands-on management, easier property inspections, and better market knowledge. Out-of-state investing can offer better cash flow, lower prices, and market diversification. If investing remotely, having a reliable property management team is essential.

Finding good investment properties requires networking with agents specializing in investment properties, analyzing MLS listings, driving for dollars to find distressed properties, attending auctions, and connecting with wholesalers. Build relationships with other investors who can alert you to opportunities.`,
        ],
        takeaways: [
          'Target 8-12% annual ROI for healthy rental property returns',
          'Use the 1% rule as initial screening (rent = 1% of price)',
          'Calculate all expenses including vacancy, maintenance, and CapEx',
          'Leverage tax benefits like depreciation and mortgage interest deductions',
          'Start with 20-25% down plus 6 months expense reserves',
          'Consider house hacking to begin with minimal capital',
        ],
        relatedQuestions: [
          'How do I find and vet good property managers?',
          'What are the best financing options for investment properties?',
          'How do I calculate cash-on-cash return?',
          'Should I form an LLC for my rental properties?',
        ],
      },
      legal: {
        responses: [
          `Regarding ${questionText.toLowerCase()}, understanding the legal aspects of real estate is crucial for protecting your interests.

While not always required, having a real estate attorney is highly recommended in complex transactions. Attorneys review contracts, handle title issues, negotiate terms, attend closings, and protect you from legal pitfalls. Some states require attorney involvement in real estate transactions. Even if not required, complex situations (foreclosures, short sales, estate sales, commercial properties) warrant legal counsel.

Title insurance protects you from defects in property title such as undisclosed liens, forged documents, errors in public records, or ownership disputes. Owner's title insurance is a one-time premium paid at closing and protects you for as long as you own the property. While lender's title insurance is required for mortgages, owner's title insurance is optional but strongly recommended. It costs approximately $1,000-$4,000 depending on property value.

Purchase agreement contingencies protect buyers by making the sale conditional on certain events. Common contingencies include financing (buyer must secure a loan), inspection (property must pass inspection or issues must be addressed), appraisal (property must appraise at or above purchase price), and sale of current home. These give buyers legal "outs" if conditions aren't met.`,
          `Let me explain ${questionText.toLowerCase()} in detail to help you navigate these important legal matters.

Property taxes are levied by local governments and based on assessed property value. Assessment occurs periodically (annually or every few years depending on jurisdiction). Tax rates vary widely by location. Property taxes fund schools, infrastructure, and local services. You can appeal your assessment if you believe it's too high - this typically requires providing comparable property values.

An easement grants someone else the right to use part of your property for a specific purpose. Common types include utility easements (power, water, sewer lines), access easements (neighbor's driveway crosses your land), and conservation easements. Easements typically run with the land, meaning they transfer to new owners. Review title reports carefully to understand any easements on a property.

If you discover undisclosed material defects after purchase, you may have legal recourse against the seller. Document everything, gather evidence of the defect and that the seller knew about it, review your disclosure forms, and consult an attorney. Many states have specific time limits for filing claims, so act quickly. Remedies may include monetary damages or, in severe cases, contract rescission.`,
        ],
        takeaways: [
          'Real estate attorneys provide crucial protection in complex transactions',
          'Owner\'s title insurance is optional but highly recommended',
          'Contingencies in contracts provide legal exit strategies',
          'Property taxes are based on assessed value and can be appealed',
          'Easements grant others specific rights to use your property',
          'You have legal recourse for undisclosed material defects',
        ],
        relatedQuestions: [
          'What should I look for in a real estate attorney?',
          'How do I appeal my property tax assessment?',
          'What disclosures are sellers required to provide?',
          'How long do I have to file a claim for undisclosed defects?',
        ],
      },
      market: {
        responses: [
          `Addressing ${questionText.toLowerCase()}, understanding market dynamics helps you make informed real estate decisions.

Whether it's a good time to buy or sell depends on your personal circumstances and local market conditions. Key indicators include inventory levels (months of supply), price trends, days on market, interest rates, and local economic factors. In a buyer's market (high inventory, longer days on market), buyers have negotiating power. In a seller's market (low inventory, quick sales), sellers command premium prices.

Current mortgage rates fluctuate based on economic conditions, Federal Reserve policy, and individual borrower qualifications. Rates are influenced by inflation, employment data, and global economic events. Even small rate differences significantly impact purchasing power - a 1% rate increase can reduce your buying power by 10-11%. Monitor rates from multiple lenders and consider rate locks when you find favorable terms.

Researching local trends involves analyzing recent sales data, inventory levels, price per square foot trends, average days on market, and absorption rates. Resources include MLS data, public records, real estate websites like Zillow and Realtor.com, and local housing reports. Work with agents who provide detailed market analyses for your specific area.

Property values are affected by location (neighborhood quality, schools, amenities), property condition and features, lot size and usability, recent comparable sales, local market supply and demand, interest rates, economic conditions, and development plans for the area.`,
          `Let me help you understand ${questionText.toLowerCase()} and how to interpret market signals.

Inflation impacts real estate in complex ways. Real estate often serves as an inflation hedge since property values and rents typically rise with inflation. However, inflation usually leads to higher interest rates, which can reduce purchasing power and slow price appreciation. Real estate investors often benefit from inflation through rental income increases and fixed-rate mortgage payments that become relatively cheaper over time.

Signs of a housing bubble include rapid price appreciation far exceeding income growth, excessive speculation with investors dominating purchases, easy credit and risky lending practices, overbuilding and rising inventory, and widespread belief that prices can only go up. However, bubbles are easier to identify in hindsight than in real-time.

Market competitiveness varies by location and price point. Indicators of a competitive market include low inventory (under 3 months supply), multiple offers on properties, homes selling above asking price, quick sales (under 30 days), and waived contingencies. In such markets, buyers should be pre-approved, act quickly, and make strong offers.`,
        ],
        takeaways: [
          'Personal circumstances matter more than trying to time the market perfectly',
          'Monitor inventory levels, days on market, and price trends',
          'Interest rate changes significantly impact buying power',
          'Real estate often serves as inflation hedge long-term',
          'Under 3 months inventory indicates a competitive seller\'s market',
          'Work with agents who provide detailed local market data',
        ],
        relatedQuestions: [
          'How do I know if a neighborhood is appreciating?',
          'What economic indicators affect real estate most?',
          'Should I wait for the market to crash before buying?',
          'How do I identify emerging neighborhoods with growth potential?',
        ],
      },
      financing: {
        responses: [
          `Regarding ${questionText.toLowerCase()}, understanding your financing options is crucial for making informed home buying decisions.

Mortgage types include conventional loans (not backed by government, typically requiring 620+ credit and 3-20% down), FHA loans (government-backed, 3.5% down, 580+ credit score), VA loans (for veterans, often 0% down, no PMI), USDA loans (rural properties, 0% down for qualified buyers), and jumbo loans (amounts exceeding conforming loan limits). Each has different requirements, costs, and benefits.

FHA vs. conventional comparison: FHA loans allow lower credit scores and down payments but require mortgage insurance for the loan's life if you put down less than 10%. Conventional loans require higher credit and down payments but PMI drops off at 20% equity. FHA has property condition requirements and loan limits. Conventional offers more flexibility and better terms for qualified borrowers.

PMI (Private Mortgage Insurance) protects lenders if you default on a conventional loan with less than 20% down. It typically costs 0.5-1.5% of the loan amount annually. Avoid PMI by putting 20% down, using a piggyback loan (80-10-10), lender-paid PMI (built into interest rate), or VA loans. Once you reach 20% equity, request PMI removal on conventional loans.`,
          `Let me explain ${questionText.toLowerCase()} to help you navigate the mortgage process successfully.

Pre-qualified vs. pre-approved are very different. Pre-qualification is an informal estimate based on self-reported financial information - it carries little weight. Pre-approval involves submitting documentation (pay stubs, tax returns, bank statements) for lender verification and credit checks. Pre-approval shows sellers you're a serious buyer who can actually close the deal.

Buying with bad credit is possible but more challenging and expensive. FHA loans accept scores as low as 580 (500-579 with 10% down). Some lenders offer bad credit programs with scores as low as 500, though with much higher rates and costs. Work on improving credit before buying if possible - even raising your score 50-100 points can save tens of thousands in interest.

A good debt-to-income (DTI) ratio is below 43% for most conventional loans, though some lenders go to 50%. FHA allows up to 43-50% DTI. This includes all monthly debt (housing, cars, credit cards, student loans, personal loans) divided by gross monthly income. Lower DTI means better loan terms and more financial cushion.

Improving loan approval chances: maintain stable employment (2+ years in same field), reduce debt and improve DTI, increase down payment, avoid new credit inquiries, save cash reserves (2-6 months), fix credit report errors, and get pre-approved early.`,
        ],
        takeaways: [
          'Different loan types serve different borrower needs and situations',
          'FHA offers easier qualification but requires mortgage insurance',
          'PMI can be avoided with 20% down or alternative structures',
          'Pre-approval carries far more weight than pre-qualification',
          'Target DTI below 43% for best loan terms',
          'Higher credit scores save thousands in interest over loan life',
        ],
        relatedQuestions: [
          'How much money do I need to close on a house?',
          'What documents do I need for mortgage approval?',
          'Should I choose a 15-year or 30-year mortgage?',
          'How do I find the best mortgage lender?',
        ],
      },
    };

    const categoryData = answerTemplates[category];
    const responseIndex = Math.floor(Math.random() * categoryData.responses.length);
    
    const response = categoryData.responses[responseIndex];
    const keyTakeaways = categoryData.takeaways.slice(0, 5);
    const relatedQuestions = categoryData.relatedQuestions;

    return {
      response,
      keyTakeaways,
      relatedQuestions,
    };
  };

  const handleAskQuestion = (questionText: string, category: CategoryType) => {
    if (!questionText.trim()) return;

    setIsProcessing(true);

    setTimeout(() => {
      const question: Question = {
        id: Date.now().toString(),
        text: questionText,
        category: category,
        timestamp: new Date(),
      };

      const answer = generateAnswer(questionText, category);

      const newConversation: Conversation = {
        question,
        answer,
      };

      setConversations([newConversation, ...conversations]);
      setCustomQuestion('');
      setIsProcessing(false);
    }, 1500);
  };

  const handleCustomQuestionSubmit = () => {
    handleAskQuestion(customQuestion, selectedCategory);
  };

  const clearConversations = () => {
    setConversations([]);
  };

  const getCategoryInfo = (categoryId: CategoryType) => {
    return categories.find(c => c.id === categoryId) || categories[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-emerald-600 p-3 rounded-full">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Ask a US Realtor Bot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant expert answers to your real estate questions. Our AI realtor provides professional 
            advice on buying, selling, renting, investing, legal matters, market trends, and financing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Ask Your Question
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="ask" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="ask">Ask Question</TabsTrigger>
                    <TabsTrigger value="common">Common Questions</TabsTrigger>
                    <TabsTrigger value="history">History ({conversations.length})</TabsTrigger>
                    <TabsTrigger value="guide" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="ask" className="space-y-4">
                    <div>
                      <Label htmlFor="category">Question Category</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                selectedCategory === cat.id
                                  ? 'border-emerald-600 bg-emerald-50'
                                  : 'border-gray-200 hover:border-emerald-300'
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl">{cat.emoji}</span>
                                <span className="text-xs font-medium">{cat.name}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div>
                      <Label htmlFor="customQuestion">Your Question</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="customQuestion"
                          value={customQuestion}
                          onChange={(e) => setCustomQuestion(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleCustomQuestionSubmit()}
                          placeholder="Type your real estate question here..."
                          className="flex-1"
                          disabled={isProcessing}
                        />
                        <Button
                          onClick={handleCustomQuestionSubmit}
                          disabled={!customQuestion.trim() || isProcessing}
                          className="bg-emerald-600 hover:bg-emerald-700"
                        >
                          {isProcessing ? (
                            <Sparkles className="h-5 w-5 animate-pulse" />
                          ) : (
                            <Send className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Ask any question about real estate - buying, selling, investing, legal matters, and more
                      </p>
                    </div>

                    {isProcessing && (
                      <div className="flex items-center justify-center p-8">
                        <div className="flex flex-col items-center gap-3">
                          <Bot className="h-12 w-12 text-emerald-600 animate-bounce" />
                          <p className="text-gray-600 font-medium">Generating expert answer...</p>
                        </div>
                      </div>
                    )}

                    {conversations.length > 0 && !isProcessing && (
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold">Latest Answer</h3>
                        </div>
                        {renderConversation(conversations[0])}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="common" className="space-y-4">
                    <div>
                      <Label>Select a Category</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                selectedCategory === cat.id
                                  ? 'border-emerald-600 bg-emerald-50'
                                  : 'border-gray-200 hover:border-emerald-300'
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl">{cat.emoji}</span>
                                <span className="text-xs font-medium">{cat.name}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div>
                      <h3 className="text-md font-semibold mb-3">
                        Common {getCategoryInfo(selectedCategory).name} Questions
                      </h3>
                      <div className="space-y-2">
                        {commonQuestions[selectedCategory].map((question, index) => (
                          <button
                            key={index}
                            onClick={() => handleAskQuestion(question, selectedCategory)}
                            disabled={isProcessing}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all disabled:opacity-50"
                          >
                            <div className="flex items-start gap-2">
                              <MessageCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{question}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4">
                    {conversations.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No conversation history yet</p>
                        <p className="text-sm text-gray-400 mt-2">Ask a question to get started!</p>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">
                            Conversation History ({conversations.length})
                          </h3>
                          <Button
                            onClick={clearConversations}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Clear History
                          </Button>
                        </div>

                        <div className="space-y-6">
                          {conversations.map((conv, index) => (
                            <div key={conv.question.id}>
                              {renderConversation(conv)}
                              {index < conversations.length - 1 && <Separator className="my-4" />}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="guide" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Working with Real Estate Professionals</h2>
                      
                      <p className="text-gray-700 mb-4">
                        Real estate agents and realtors play a crucial role in helping buyers and sellers navigate one of 
                        life's most significant financial transactions. Understanding how to work effectively with these 
                        professionals can save you time, money, and stress while ensuring the best possible outcome.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What is a Realtor?</h3>
                      
                      <p className="text-gray-700 mb-3">
                        While all realtors are real estate agents, not all real estate agents are realtors. A realtor is a 
                        licensed real estate professional who is a member of the National Association of Realtors (NAR) and 
                        adheres to its strict Code of Ethics. This membership signifies a commitment to professional standards, 
                        continuing education, and ethical conduct that goes beyond basic licensing requirements.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Real estate agents must be licensed by their state, which requires completing pre-licensing education, 
                        passing a state exam, and maintaining continuing education. Brokers have additional training and can 
                        supervise agents or run their own firms. When choosing representation, verify licensing status and 
                        look for designations that indicate specialized expertise.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Benefits of Working with a Realtor</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Market Expertise:</strong> Realtors have intimate knowledge of local market conditions, 
                        neighborhood trends, property values, and recent comparable sales. This expertise helps buyers avoid 
                        overpaying and helps sellers price competitively. They understand factors affecting property values 
                        that may not be apparent to those unfamiliar with the area.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Access to Listings:</strong> While many listings appear on public websites, realtors have access 
                        to the Multiple Listing Service (MLS), which often contains properties before they appear publicly, 
                        provides detailed property information, and shows accurate availability. They may also know about 
                        pocket listings or upcoming properties through their professional networks.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Negotiation Skills:</strong> Experienced realtors are skilled negotiators who can navigate 
                        complex offers, counteroffers, and contract terms. They provide an emotional buffer during negotiations, 
                        helping you make rational decisions rather than emotional ones. Their experience in similar transactions 
                        helps them anticipate issues and structure favorable terms.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Transaction Management:</strong> Real estate transactions involve extensive paperwork, strict 
                        timelines, legal requirements, and coordination among multiple parties (lenders, inspectors, appraisers, 
                        attorneys, title companies). A good realtor manages this complex process, ensuring nothing falls through 
                        the cracks and all deadlines are met.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Choosing the Right Realtor</h3>

                      <p className="text-gray-700 mb-3">
                        Interview at least three realtors before making your choice. Ask about their experience with properties 
                        in your price range and area, their approach to buyers or sellers (depending on your needs), their 
                        availability and communication style, their marketing strategies (for sellers), and references from 
                        recent clients. Don't automatically choose a friend or family member - professional competence matters 
                        more than personal relationships in this context.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Look for realtors with relevant specializations. Buyers' agents focus on representing purchasers, 
                        sellers' agents specialize in listing and marketing, and some agents have expertise in specific property 
                        types (luxury homes, investment properties, first-time buyers, commercial real estate). Designations 
                        like ABR (Accredited Buyer's Representative), CRS (Certified Residential Specialist), or SRES (Seniors 
                        Real Estate Specialist) indicate additional training.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Understanding Realtor Compensation</h3>

                      <p className="text-gray-700 mb-3">
                        Traditionally, sellers pay the commission for both the listing agent and buyer's agent, typically totaling 
                        5-6% of the sale price (split between both agents). However, this is negotiable. Some buyer's agents work 
                        on different fee structures, and discount brokerages offer reduced commission services with varying service 
                        levels.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Buyers should understand that while they typically don't directly pay their agent's commission, this cost 
                        is factored into the home's price. In competitive markets, some buyers offer to cover their agent's 
                        commission to make their offer more attractive to sellers. Always clarify compensation arrangements upfront.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Agency Relationships</h3>

                      <p className="text-gray-700 mb-3">
                        Understanding agency relationships is crucial. A seller's agent (listing agent) represents the seller's 
                        best interests and owes them fiduciary duties. A buyer's agent represents the buyer's interests exclusively. 
                        Dual agency occurs when one agent represents both buyer and seller - this is prohibited in some states and 
                        requires written consent where allowed, as it creates inherent conflicts of interest.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Transaction brokers provide services to both parties without representing either exclusively. They 
                        facilitate the transaction but don't provide the fiduciary duties of exclusive representation. Designated 
                        agency allows different agents from the same brokerage to represent buyer and seller separately. Each 
                        arrangement has implications for loyalty, confidentiality, and disclosure obligations.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Working Effectively with Your Realtor</h3>

                      <p className="text-gray-700 mb-3">
                        Clear communication is essential. Be upfront about your needs, timeline, budget, and deal-breakers. 
                        Respond promptly to your agent's communications, as real estate often moves quickly. Trust their expertise, 
                        but don't hesitate to ask questions if you don't understand something. Remember that while they're the 
                        expert on the market and process, you're the decision-maker on whether a property or offer meets your needs.
                      </p>

                      <p className="text-gray-700 mb-3">
                        For buyers, be prepared before house hunting. Get pre-approved for financing, understand your must-haves 
                        versus nice-to-haves, and be ready to move quickly in competitive markets. For sellers, be honest about 
                        your property's condition and any issues, follow staging and showing advice, and be realistic about pricing 
                        and feedback.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Issues Arise</h3>

                      <p className="text-gray-700 mb-3">
                        If you're unhappy with your realtor's service, first communicate your concerns directly. Many issues can 
                        be resolved through honest conversation about expectations. If problems persist, understand the terms of 
                        your agency agreement - some allow termination with notice, others may have penalties or require broker 
                        intervention.
                      </p>

                      <p className="text-gray-700 mb-4">
                        For serious ethical violations or legal concerns, you can file complaints with your state's real estate 
                        commission or, for realtors, the local realtor association. Document all communications and issues 
                        thoroughly. Consider seeking legal advice for significant disputes, especially those involving financial 
                        losses or contract disagreements.
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div className="ml-3">
                            <h3 className="text-sm font-semibold text-amber-800">Important Note</h3>
                            <p className="mt-2 text-sm text-amber-700">
                              While this AI bot provides general real estate information and guidance, it cannot replace the 
                              personalized service, local expertise, and legal representation that a licensed real estate 
                              professional provides. For specific transactions, complex situations, or legal questions, always 
                              consult with qualified realtors, attorneys, and other appropriate professionals.
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700">
                        A skilled realtor is an invaluable partner in your real estate journey. They bring expertise, market 
                        knowledge, negotiation skills, and transaction management that can save you significant time and money 
                        while reducing stress. Taking time to find the right realtor and working collaboratively with them sets 
                        the foundation for a successful real estate experience.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  About This Tool
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Get instant, expert-level answers to your real estate questions across multiple categories.
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">Question Categories</h3>
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className={`flex items-center gap-2 p-2 rounded-lg ${cat.color}`}>
                        <span className="text-lg">{cat.emoji}</span>
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>
                    );
                  })}
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-semibold mb-2">Each Answer Includes:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Detailed expert response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Key takeaways and action items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Related questions to explore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Professional disclaimer</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <AlertCircle className="h-5 w-5" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-800">
                  This AI tool provides general real estate information and guidance. It should not be considered 
                  legal, financial, or professional advice. For specific situations, always consult with licensed 
                  real estate professionals, attorneys, financial advisors, or other qualified experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  function renderConversation(conv: Conversation) {
    const categoryInfo = getCategoryInfo(conv.question.category as CategoryType);
    
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${categoryInfo.color}`}>
              <span className="text-xl">{categoryInfo.emoji}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {categoryInfo.name}
                </Badge>
                <span className="text-xs text-gray-500">
                  {conv.question.timestamp.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-900 font-medium">{conv.question.text}</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-emerald-900 mb-2">Expert Answer</h4>
              <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {conv.answer.response}
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Key Takeaways
              </h4>
              <ul className="space-y-2">
                {conv.answer.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Related Questions
              </h4>
              <div className="space-y-2">
                {conv.answer.relatedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleAskQuestion(question, conv.question.category as CategoryType)}
                    disabled={isProcessing}
                    className="w-full text-left text-sm text-emerald-700 hover:text-emerald-900 hover:underline disabled:opacity-50"
                  >
                    → {question}
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            <div className="bg-amber-50 border border-amber-200 rounded p-3">
              <p className="text-xs text-amber-800">
                <strong>Professional Disclaimer:</strong> This answer provides general information and should not 
                replace advice from licensed professionals. Real estate transactions involve legal and financial 
                complexities that require expert guidance tailored to your specific situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
