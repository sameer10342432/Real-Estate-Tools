import { CalculatorContent } from '@/types';

export const WhatIsMyInvestorProfileQuizContent: CalculatorContent = {
  title: 'What\'s My Investor Profile? Quiz',
  description: 'Identify your real estate investor profile based on risk tolerance, capital, experience, goals, and time horizon for personalized investment strategies',
  icon: '📊',
  category: 'Additional Tools',
  slug: 'whats-my-investor-profile-quiz',
  
  metaTitle: 'What\'s My Investor Profile? Real Estate Risk Assessment Quiz | Property Tools',
  metaDescription: 'Identify your real estate investor profile based on risk tolerance, capital, experience, goals, and time horizon. Get personalized investment strategy recommendations.',
  
  article: {
    title: 'What\'s Your Real Estate Investor Profile? Complete Assessment',
    content: `
      <h2>What's My Investor Profile? Risk & Strategy Quiz</h2>
      <p>Not all real estate strategies fit all investors. This comprehensive quiz identifies your unique investor profile based on capital availability, risk tolerance, experience level, time commitment, and financial goals to match you with the optimal investment strategy.</p>

      <h3>The 6 Real Estate Investor Profiles</h3>
      
      <h4>1. The Conservative Cash Flow Investor</h4>
      <p><strong>Profile:</strong> Low risk tolerance, seeks steady passive income, long time horizon</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>Buy-and-hold single-family rentals in stable markets</li>
        <li>Turnkey rental properties</li>
        <li>Triple-net lease commercial properties</li>
        <li>Real estate syndications (passive LP)</li>
        <li>REITs and real estate funds</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $50,000-$200,000+</li>
        <li>Risk tolerance: Low</li>
        <li>Time commitment: 5-10 hours/month</li>
        <li>Goal: Steady 6-10% annual returns + appreciation</li>
        <li>Timeline: 10+ years</li>
      </ul>

      <h4>2. The Aggressive Wealth Builder</h4>
      <p><strong>Profile:</strong> High risk tolerance, seeks rapid equity growth, active involvement</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>House flipping in hot markets</li>
        <li>BRRRR method (buy, rehab, rent, refinance, repeat)</li>
        <li>New construction speculation</li>
        <li>Short-term rentals (Airbnb arbitrage)</li>
        <li>Development and land banking</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $100,000-$500,000+</li>
        <li>Risk tolerance: High</li>
        <li>Time commitment: 20-40 hours/week</li>
        <li>Goal: 20-50%+ annual returns</li>
        <li>Timeline: 6 months - 3 years per project</li>
      </ul>

      <h4>3. The Balanced Portfolio Builder</h4>
      <p><strong>Profile:</strong> Moderate risk, diversified approach, scalable growth</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>Mix of buy-and-hold + occasional flip</li>
        <li>Small multifamily (2-4 units)</li>
        <li>Medium-term rentals (furnished, 30+ day)</li>
        <li>Commercial NNN + residential rentals</li>
        <li>Self-storage facilities</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $75,000-$300,000+</li>
        <li>Risk tolerance: Moderate</li>
        <li>Time commitment: 10-20 hours/week</li>
        <li>Goal: 12-20% annual returns</li>
        <li>Timeline: 5-10 years</li>
      </ul>

      <h4>4. The Hands-Off Passive Investor</h4>
      <p><strong>Profile:</strong> Full-time career, seeks true passive income, minimal involvement</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>Turnkey rentals with property management</li>
        <li>Real estate syndications (LP)</li>
        <li>REITs and eREITs</li>
        <li>Crowdfunding platforms (Fundrise, RealtyMogul)</li>
        <li>Private lending/note investing</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $25,000-$150,000+</li>
        <li>Risk tolerance: Low to Moderate</li>
        <li>Time commitment: 1-5 hours/month</li>
        <li>Goal: 7-12% annual returns</li>
        <li>Timeline: 5-20+ years</li>
      </ul>

      <h4>5. The High-Leverage Opportunist</h4>
      <p><strong>Profile:</strong> Limited capital, high energy, uses creative financing</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>Wholesaling (flip contracts, not properties)</li>
        <li>House hacking (live in one unit, rent others)</li>
        <li>Seller financing and subject-to deals</li>
        <li>Lease options and rent-to-own</li>
        <li>Partnership deals (bring effort, partner brings capital)</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $5,000-$50,000</li>
        <li>Risk tolerance: High</li>
        <li>Time commitment: 30-50 hours/week</li>
        <li>Goal: Build capital rapidly, then shift strategies</li>
        <li>Timeline: 1-3 years to accumulate capital</li>
      </ul>

      <h4>6. The Commercial/Niche Specialist</h4>
      <p><strong>Profile:</strong> Experienced investor, seeks higher returns, willing to specialize</p>
      <p><strong>Best Strategies:</strong></p>
      <ul>
        <li>Large multifamily (5+ units)</li>
        <li>Self-storage facilities</li>
        <li>Mobile home parks</li>
        <li>Commercial office/retail (NNN)</li>
        <li>Industrial and warehouse properties</li>
      </ul>
      <p><strong>Characteristics:</strong></p>
      <ul>
        <li>Capital: $200,000-$1,000,000+</li>
        <li>Risk tolerance: Moderate to High</li>
        <li>Time commitment: 15-30 hours/week</li>
        <li>Goal: 15-25% annual returns at scale</li>
        <li>Timeline: 5-15 years</li>
      </ul>

      <h3>Matching Strategies to Your Situation</h3>
      
      <h4>If You Have Full-Time Job & Limited Time</h4>
      <p><strong>Best Fit:</strong> Hands-Off Passive Investor</p>
      <ul>
        <li>Turnkey rentals with property manager</li>
        <li>REITs and syndications</li>
        <li>Private lending</li>
        <li>Crowdfunding platforms</li>
      </ul>

      <h4>If You Have High Capital, Low Time</h4>
      <p><strong>Best Fit:</strong> Conservative Cash Flow or Commercial Specialist</p>
      <ul>
        <li>Triple-net lease commercial</li>
        <li>Large multifamily with professional management</li>
        <li>Real estate syndication GP (general partner)</li>
        <li>Self-storage facilities</li>
      </ul>

      <h4>If You Have Low Capital, High Energy</h4>
      <p><strong>Best Fit:</strong> High-Leverage Opportunist</p>
      <ul>
        <li>Wholesaling (low capital entry)</li>
        <li>House hacking (reduce living expenses)</li>
        <li>Partnership deals (sweat equity)</li>
        <li>Seller financing</li>
      </ul>

      <h4>If You Want Rapid Wealth Building</h4>
      <p><strong>Best Fit:</strong> Aggressive Wealth Builder</p>
      <ul>
        <li>House flipping</li>
        <li>BRRRR method</li>
        <li>Short-term rentals (Airbnb)</li>
        <li>New construction spec homes</li>
      </ul>

      <h4>If You Want Balance & Diversification</h4>
      <p><strong>Best Fit:</strong> Balanced Portfolio Builder</p>
      <ul>
        <li>Mix: 70% buy-and-hold, 30% flips</li>
        <li>Small multifamily (2-4 units)</li>
        <li>Combination residential + commercial</li>
        <li>Medium-term rentals</li>
      </ul>

      <h3>Risk vs. Return by Strategy</h3>
      
      <h4>Lowest Risk, Lowest Return (5-10% annual)</h4>
      <ul>
        <li>REITs and real estate funds</li>
        <li>Triple-net lease commercial</li>
        <li>Private lending (secured)</li>
        <li>Turnkey rentals in stable markets</li>
      </ul>

      <h4>Moderate Risk, Moderate Return (10-20% annual)</h4>
      <ul>
        <li>Buy-and-hold single-family/small multifamily</li>
        <li>House hacking</li>
        <li>Real estate syndications</li>
        <li>Self-storage facilities</li>
      </ul>

      <h4>High Risk, High Return (20-50%+ annual)</h4>
      <ul>
        <li>House flipping</li>
        <li>BRRRR method</li>
        <li>New construction speculation</li>
        <li>Short-term rentals (Airbnb arbitrage)</li>
        <li>Development projects</li>
      </ul>

      <h3>Evolution Path for Investors</h3>
      
      <h4>Stage 1: Capital Accumulation (Years 1-3)</h4>
      <ul>
        <li>House hacking or wholesaling</li>
        <li>1-2 buy-and-hold properties</li>
        <li>Build credit and capital</li>
        <li>Learn fundamentals</li>
      </ul>

      <h4>Stage 2: Active Growth (Years 3-7)</h4>
      <ul>
        <li>BRRRR method or occasional flips</li>
        <li>3-10 rental properties</li>
        <li>Small multifamily (2-4 units)</li>
        <li>Build systems and team</li>
      </ul>

      <h4>Stage 3: Scaling & Specialization (Years 7-15)</h4>
      <ul>
        <li>Large multifamily or commercial</li>
        <li>10-50+ doors</li>
        <li>Property manager and full team</li>
        <li>Syndications (GP)</li>
      </ul>

      <h4>Stage 4: Passive Income & Legacy (Years 15+)</h4>
      <ul>
        <li>Debt payoff and cash flow maximization</li>
        <li>Triple-net lease properties</li>
        <li>Limited active involvement</li>
        <li>Wealth preservation focus</li>
      </ul>

      <h3>Common Profile Mismatches</h3>
      
      <h4>The Mistake: Passive Investor Tries Flipping</h4>
      <p><strong>Problem:</strong> Flipping requires active involvement. Passive investors get overwhelmed by contractor management, timeline pressures, and decisions.</p>
      <p><strong>Solution:</strong> Stick to turnkey rentals, REITs, or syndications.</p>

      <h4>The Mistake: Aggressive Investor Buys Turnkey Rentals</h4>
      <p><strong>Problem:</strong> Low returns (6-8%) frustrate aggressive investors seeking 20%+ returns. They overpay for convenience.</p>
      <p><strong>Solution:</strong> Focus on flips, BRRRR, or development for higher returns.</p>

      <h4>The Mistake: Low Capital Investor Tries Large Multifamily</h4>
      <p><strong>Problem:</strong> Can't qualify for commercial loans. Needs $200K+ for down payment and reserves.</p>
      <p><strong>Solution:</strong> Start with house hacking or wholesaling to build capital first.</p>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Can I change my investor profile over time?</h4>
      <p>Absolutely! Most investors evolve from aggressive (capital building) to passive (income preservation) as they build wealth and age. Your profile should match your current life stage.</p>

      <h4>What if I'm risk-averse but want high returns?</h4>
      <p>You can't have both. Higher returns require higher risk. Consider moderate strategies (buy-and-hold, small multifamily) for balanced risk/return, or partner with experienced investors to reduce risk.</p>

      <h4>Should I diversify across multiple strategies?</h4>
      <p>Initially, focus on ONE strategy to build expertise and capital. After 3-5 years and 5+ deals, diversify to reduce risk (70% core strategy, 30% experimental).</p>

      <h4>What's the best investor profile for beginners?</h4>
      <p>Depends on capital and time. Low capital: House hacking or wholesaling. High capital: Buy-and-hold with property manager. Learn fundamentals before advancing to aggressive strategies.</p>

      <p><strong>Take this quiz to discover your unique real estate investor profile and get personalized strategy recommendations aligned with your capital, risk tolerance, and goals.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'availableCapital',
        label: 'Available Investment Capital ($)',
        type: 'number',
        defaultValue: '75000',
        placeholder: '75000',
      },
      {
        name: 'timeAvailability',
        label: 'Time Available per Week (Hours)',
        type: 'number',
        defaultValue: '10',
        placeholder: '10',
      },
      {
        name: 'riskTolerance',
        label: 'Risk Tolerance',
        type: 'select',
        options: [
          { value: 'conservative', label: 'Conservative - Preserve capital' },
          { value: 'moderate', label: 'Moderate - Balanced approach' },
          { value: 'aggressive', label: 'Aggressive - Maximum growth' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'investmentGoal',
        label: 'Primary Investment Goal',
        type: 'select',
        options: [
          { value: 'income', label: 'Passive income & cash flow' },
          { value: 'appreciation', label: 'Long-term appreciation' },
          { value: 'wealth', label: 'Rapid wealth building' },
        ],
        defaultValue: 'income',
      },
      {
        name: 'experience',
        label: 'Real Estate Experience',
        type: 'select',
        options: [
          { value: 'none', label: 'No experience' },
          { value: 'beginner', label: 'Beginner (1-2 deals)' },
          { value: 'experienced', label: 'Experienced (3+ deals)' },
        ],
        defaultValue: 'none',
      },
    ],
    results: [
      { label: 'Your Investor Profile', isCurrency: false },
      { label: 'Recommended Strategies', isCurrency: false },
      { label: 'Profile Analysis', isCurrency: false },
      { label: 'Next Steps', isCurrency: false },
    ],
    calculate: (values) => {
      const capital = Number(values.availableCapital) || 75000;
      const timeAvailable = Number(values.timeAvailability) || 10;
      const riskTolerance = values.riskTolerance || 'moderate';
      const investmentGoal = values.investmentGoal || 'income';
      const experience = values.experience || 'none';

      let profile = '';
      let strategies = '';
      let analysis = '';
      let nextSteps = '';

      // Determine profile based on inputs
      if (riskTolerance === 'conservative' && timeAvailable < 15 && investmentGoal === 'income') {
        profile = `🛡️ THE CONSERVATIVE CASH FLOW INVESTOR

You prioritize capital preservation and steady passive income over rapid growth. You prefer proven, low-risk strategies with predictable returns.`;

        strategies = `💰 Best Strategies for You:
1. Turnkey Rental Properties ($${Math.round(capital * 0.8).toLocaleString()} budget)
   • Buy professionally renovated, tenant-occupied properties
   • Hire property manager (8-12% of rent)
   • Expected return: 6-10% annually

2. Real Estate Syndications (Passive LP)
   • Invest $${capital >= 50000 ? capital.toLocaleString() : '25,000-50,000'} in multifamily syndications
   • 100% passive, professional operators
   • Expected return: 7-12% cash-on-cash + appreciation

3. REITs & Real Estate Funds
   • Highly liquid, diversified exposure
   • Minimum: $5,000-$10,000
   • Expected return: 8-12% annually

4. Private Lending (Secured Notes)
   • Lend to fix-and-flippers or developers
   • 8-12% interest, secured by property
   • Passive income, low time commitment`;

        analysis = `📊 Profile Match Analysis:
• Capital Level: $${capital.toLocaleString()} ${capital >= 50000 ? '(Sufficient for turnkey or syndication) ✅' : '(Consider REITs or crowdfunding)'}
• Time Commitment: ${timeAvailable} hrs/week (Perfect for passive strategies ✅)
• Risk Profile: Conservative (Aligned with steady income strategies ✅)
• Investment Goal: ${investmentGoal === 'income' ? 'Passive income ✅' : investmentGoal}
• Experience: ${experience} ${experience === 'none' ? '(Passive strategies perfect for beginners ✅)' : ''}

Your Profile Strengths:
• Realistic expectations (6-10% vs. 30%+ promises)
• Values time over maximum returns
• Understands risk management
• Long-term mindset`;

        nextSteps = `🎯 Action Plan (Next 90 Days):
1. Research turnkey rental markets
   • Memphis, Indianapolis, Kansas City, Birmingham
   • Look for $150K-$250K properties with 8%+ cap rates
   • Interview 3-5 turnkey providers

2. Explore real estate syndications
   • Research platforms: CrowdStreet, RealtyMogul
   • Review 5-10 syndication offerings
   • Attend syndication webinars

3. Set up passive income systems
   • Open self-directed IRA if investing retirement funds
   • Build $${Math.round(capital * 0.15).toLocaleString()} emergency reserve
   • Interview 2-3 property managers (if buying turnkey)

4. Education (low-time commitment)
   • Read: "The Book on Rental Property Investing"
   • Join BiggerPockets (free)
   • Set up automated deal alerts`;

      } else if (riskTolerance === 'aggressive' && timeAvailable >= 20 && investmentGoal === 'wealth') {
        profile = `🚀 THE AGGRESSIVE WEALTH BUILDER

You seek maximum returns and are willing to take significant risks and commit serious time to build wealth rapidly through active real estate strategies.`;

        strategies = `⚡ Best Strategies for You:
1. House Flipping ($${Math.round(capital * 0.6).toLocaleString()} per flip)
   • Buy distressed properties
   • Renovate in 60-90 days
   • Expected return: 20-50% per flip
   • Timeline: 4-6 months per project

2. BRRRR Method (Buy, Rehab, Rent, Refinance, Repeat)
   • Forced appreciation through renovations
   • Pull capital out via refinance
   • Rinse and repeat
   • Expected return: 15-25% annually + infinite ROI

3. Short-Term Rentals (Airbnb)
   • 2-3x higher income than long-term rentals
   • Active management or co-hosting
   • Expected return: 15-30% cash-on-cash

4. New Construction Speculation
   • Buy pre-construction, sell at completion
   • High risk, high reward
   • Expected return: 20-40% (if market cooperates)`;

        analysis = `📊 Profile Match Analysis:
• Capital Level: $${capital.toLocaleString()} ${capital >= 100000 ? '(Strong for flipping ✅)' : '(Consider partnership or start with BRRRR)'}
• Time Commitment: ${timeAvailable} hrs/week ${timeAvailable >= 20 ? '(Excellent for active strategies ✅)' : '(Need more time ⚠️)'}
• Risk Profile: Aggressive (Perfect for wealth-building strategies ✅)
• Investment Goal: ${investmentGoal} ${investmentGoal === 'wealth' ? '(Aligned ✅)' : ''}
• Experience: ${experience} ${experience === 'experienced' ? '(Ready for advanced strategies ✅)' : '(Start with BRRRR, avoid flipping until experienced)'}

Your Profile Strengths:
• High risk tolerance (essential for aggressive strategies)
• Significant time commitment (20+ hrs/week)
• Wealth-building focus (vs. immediate income)
• Active involvement mindset`;

        nextSteps = `🎯 Action Plan (Next 90 Days):
1. ${experience === 'none' || experience === 'beginner' ? 'Shadow experienced flipper (critical!)' : 'Set up flipping operation'}
   • ${experience === 'none' ? 'Offer to help on 1-2 flips (learn before investing)' : 'Form LLC for liability protection'}
   • ${experience === 'none' ? 'Learn contractor management' : 'Get pre-approved with hard money lender'}
   • ${experience === 'none' ? 'Practice estimating repair costs on 20+ properties' : 'Build contractor network (GC, plumber, electrician)'}

2. Build flipping infrastructure
   • Set up deal analysis spreadsheet
   • Join wholesaler email lists
   • Attend foreclosure auctions (observe first)
   • Research 70% Rule: Buy ≤ 70% ARV - Repairs - Profit

3. Start analyzing deals
   • Analyze 10-20 properties per week
   • Make 5-10 offers per week (practice)
   • Walk 5+ distressed properties weekly
   • Build "power team" (agent, lender, attorney, contractors)

4. Financial preparation
   • Secure $${Math.round(capital * 0.3).toLocaleString()} liquid emergency fund
   • Line up hard money lender (pre-approval)
   • Research private money investors
   • Budget 30% contingency for first flip`;

      } else if (timeAvailable < 10 && capital >= 50000) {
        profile = `🤝 THE HANDS-OFF PASSIVE INVESTOR

You have capital but limited time due to full-time career or other commitments. You seek true passive income with minimal involvement.`;

        strategies = `🔒 Best Strategies for You:
1. Turnkey Rentals with Property Manager
   • Buy $${Math.round(capital * 0.75).toLocaleString()} turnkey property
   • Professional property management (8-12% fee)
   • Expected return: 6-9% cash-on-cash
   • Time: 2-5 hours/month

2. Real Estate Syndications (LP)
   • Invest $${capital >= 50000 ? '50,000+' : '25,000-50,000'} in multifamily deals
   • 100% passive, quarterly distributions
   • Expected return: 7-12% + appreciation
   • Time: 1-2 hours/month

3. REITs & Crowdfunding Platforms
   • Fundrise, RealtyMogul, CrowdStreet
   • Minimum: $500-$25,000
   • Expected return: 8-12% annually
   • Time: 0-1 hours/month

4. Private Lending
   • Lend to experienced investors
   • 8-12% interest, secured by property
   • Expected return: 8-12% annually
   • Time: 2-5 hours/month`;

        analysis = `📊 Profile Match Analysis:
• Capital Level: $${capital.toLocaleString()} (Sufficient for passive strategies ✅)
• Time Commitment: ${timeAvailable} hrs/week (Limited - passive strategies essential ✅)
• Risk Profile: ${riskTolerance} ${riskTolerance === 'conservative' ? '(Perfect for turnkey/syndications ✅)' : ''}
• Investment Goal: ${investmentGoal}
• Experience: ${experience}

Your Profile Strengths:
• Realistic about time constraints
• Sufficient capital for quality passive deals
• Understanding that passive = lower returns but less hassle
• Focus on systems and professionals`;

        nextSteps = `🎯 Action Plan (Next 90 Days):
1. Research passive investment options
   • Review 3-5 turnkey providers (Roofstock, etc.)
   • Analyze 5-10 syndication opportunities
   • Compare crowdfunding platforms

2. Set up passive systems
   • Open self-directed IRA (if using retirement funds)
   • Interview 2-3 property managers
   • Set up automated deal alerts
   • Build $${Math.round(capital * 0.15).toLocaleString()} reserve fund

3. Due diligence process
   • Verify turnkey provider track records
   • Review syndication sponsor experience
   • Check references and past performance
   • Understand fee structures

4. Start small, scale up
   • First investment: $${Math.round(capital * 0.4).toLocaleString()} (40% of capital)
   • Monitor for 6 months
   • Scale if performing well
   • Diversify across 2-3 operators`;

      } else if (capital < 50000 && timeAvailable >= 20) {
        profile = `💪 THE HIGH-LEVERAGE OPPORTUNIST

You have limited capital but high energy and willingness to grind. You use creative strategies and sweat equity to build wealth despite financial constraints.`;

        strategies = `🎯 Best Strategies for You:
1. Wholesaling (Flip Contracts, Not Properties)
   • $5,000-$15,000 startup (marketing + earnest money)
   • Find deals, assign contracts to buyers
   • Expected profit: $5,000-$15,000 per deal
   • Build capital for future investments

2. House Hacking (Live-in, Rent Out Others)
   • FHA loan (3.5% down on 2-4 unit property)
   • Live in one unit, rent others
   • Reduce/eliminate housing expense
   • Expected ROI: Infinite (free housing + cash flow)

3. Partnership Deals (Sweat Equity)
   • Find capital partner (50/50 split)
   • You manage project, they fund it
   • Build experience and capital
   • Expected return: $10,000-$30,000 per flip

4. Seller Financing & Creative Deals
   • Low/no money down
   • Subject-to, lease options
   • Expected return: Varies (capital building)`;

        analysis = `📊 Profile Match Analysis:
• Capital Level: $${capital.toLocaleString()} (Limited but workable with creative strategies ✅)
• Time Commitment: ${timeAvailable} hrs/week ${timeAvailable >= 20 ? '(Excellent - can hustle ✅)' : ''}
• Risk Profile: ${riskTolerance} ${riskTolerance === 'aggressive' ? '(Perfect for sweat equity strategies ✅)' : ''}
• Investment Goal: ${investmentGoal}
• Experience: ${experience}

Your Profile Strengths:
• High work ethic and time availability
• Creative mindset for low/no money strategies
• Building capital phase (3-5 years)
• Can pivot to traditional investing once capital built`;

        nextSteps = `🎯 Capital Building Plan (Next 12-18 Months):
1. Start wholesaling immediately
   • Build buyer's list (20+ cash buyers)
   • Direct mail campaign (500+ letters/month)
   • Analyze 50+ deals per week
   • Goal: 1-2 deals per month ($5K-$15K each)

2. Explore house hacking
   • Get pre-approved for FHA loan (3.5% down)
   • Find 2-4 unit property in $${capital >= 25000 ? '200-300K' : '150-250K'} range
   • Live in one, rent others
   • Save $500-$1,500/month in housing costs

3. Build network aggressively
   • Attend 2-3 investor meetups per month
   • Find potential capital partners
   • Build contractor relationships
   • Join BiggerPockets and local REIA

4. 18-month goal: Build to $100K+ capital
   • Wholesaling: $60,000-$120,000 (1-2 deals/month × 12 months)
   • House hacking: Save $10,000-$20,000 in housing costs
   • Partner on 1-2 flips: $20,000-$40,000
   • Total capital: $90,000-$180,000
   • Then pivot to buy-and-hold or flipping`;

      } else {
        // Default: Balanced Portfolio Builder
        profile = `⚖️ THE BALANCED PORTFOLIO BUILDER

You seek a diversified approach balancing risk and return, with mix of passive income and active wealth building. You want scalability and flexibility.`;

        strategies = `🏗️ Best Strategies for You:
1. Core: Buy-and-Hold Rentals (70% of capital)
   • Purchase $${Math.round(capital * 0.6).toLocaleString()} in rental properties
   • Build passive income base
   • Expected return: 8-12% cash-on-cash

2. Growth: Occasional Flips (30% of capital)
   • 1-2 flips per year with $${Math.round(capital * 0.3).toLocaleString()}
   • Build capital for more rentals
   • Expected return: 20-30% per flip

3. Small Multifamily (2-4 Units)
   • Economies of scale
   • House hack initially, then transition to full rental
   • Expected return: 10-15% cash-on-cash

4. Medium-Term Rentals (30+ Day)
   • Furnished rentals for traveling professionals
   • Higher income than long-term, less work than Airbnb
   • Expected return: 12-18% cash-on-cash`;

        analysis = `📊 Profile Match Analysis:
• Capital Level: $${capital.toLocaleString()} (Good for balanced approach ✅)
• Time Commitment: ${timeAvailable} hrs/week (Workable for semi-active investing ✅)
• Risk Profile: ${riskTolerance} (Balanced strategies align ✅)
• Investment Goal: ${investmentGoal}
• Experience: ${experience}

Your Profile Strengths:
• Balanced risk/return mindset
• Diversification focus reduces risk
• Moderate time commitment (sustainable long-term)
• Scalable approach (can grow portfolio systematically)`;

        nextSteps = `🎯 Balanced Growth Plan (Next 12 Months):
1. Foundation: First rental property (Months 1-4)
   • Purchase $${Math.round(capital * 0.5).toLocaleString()} small multifamily (2-4 units)
   • House hack if possible (live in one unit)
   • Expected cash flow: $200-$800/month

2. Growth: First flip (Months 5-8)
   • Allocate $${Math.round(capital * 0.3).toLocaleString()} for flip
   • Target $20,000-$30,000 profit
   • Use profits to fund second rental

3. Scale: Second rental (Months 9-12)
   • Use flip profits + remaining capital
   • Purchase another rental property
   • Build passive income to $500-$1,500/month

4. Infrastructure building
   • Form LLC
   • Build contractor network
   • Set up property management systems
   • Join local investor community

5-Year Vision:
• Year 1-2: 2-4 rental properties + 1-2 flips/year
• Year 3-4: 5-10 rental properties + 2-3 flips/year
• Year 5: 10-15 rental properties + transition to more passive`;
      }

      return [
        { label: 'Your Investor Profile', value: profile, isCurrency: false },
        { label: 'Recommended Strategies', value: strategies, isCurrency: false },
        { label: 'Profile Analysis', value: analysis, isCurrency: false },
        { label: 'Next Steps', value: nextSteps, isCurrency: false },
      ];
    },
  },
};
