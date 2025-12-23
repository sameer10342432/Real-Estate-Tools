'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Home, TrendingUp, Users } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tenant Buyout Calculator (Rent Stabilized) | Property Tools',
    description: 'Calculate tenant buyout offers for rent-stabilized apartments. Analyze costs vs benefits, negotiate fair buyout agreements. Free calculator for NYC landlords.',
    keywords: [
      'tenant buyout calculator',
      'rent stabilized buyout',
      'NYC tenant buyout',
      'apartment buyout offer',
      'rent control buyout',
      'tenant negotiation',
      'buyout agreement',
      'stabilized apartment',
      'tenant relocation',
      'rent stabilization exit'
    ],
  };
}

export default function TenantBuyoutCalculator() {
  const [currentRent, setCurrentRent] = useState<string>('1200');
  const [marketRent, setMarketRent] = useState<string>('3500');
  const [yearsRemaining, setYearsRemaining] = useState<string>('10');
  const [renovationCost, setRenovationCost] = useState<string>('50000');
  const [expectedVacancyMonths, setExpectedVacancyMonths] = useState<string>('4');
  const [buyoutOffer, setBuyoutOffer] = useState<string>('75000');
  const [tenantAge, setTenantAge] = useState<string>('65');
  const [tenantYearsInUnit, setTenantYearsInUnit] = useState<string>('20');

  const calculate = () => {
    const current = parseFloat(currentRent) || 0;
    const market = parseFloat(marketRent) || 0;
    const years = parseFloat(yearsRemaining) || 0;
    const reno = parseFloat(renovationCost) || 0;
    const vacancy = parseFloat(expectedVacancyMonths) || 0;
    const offer = parseFloat(buyoutOffer) || 0;

    const monthlyLoss = market - current;
    const annualLoss = monthlyLoss * 12;
    const totalLossOverTerm = annualLoss * years;

    const discountRate = 0.05;
    let presentValue = 0;
    for (let year = 1; year <= years; year++) {
      presentValue += annualLoss / Math.pow(1 + discountRate, year);
    }

    const vacancyCost = market * vacancy;
    const totalCostWithoutBuyout = reno + vacancyCost;
    const totalCostWithBuyout = offer + reno + vacancyCost;

    const netBenefitOfBuyout = totalLossOverTerm - (offer + vacancyCost);
    const breakevenMonths = offer / monthlyLoss;
    const roiPercentage = totalLossOverTerm > 0 ? ((totalLossOverTerm - offer) / offer) * 100 : 0;

    const minReasonableOffer = monthlyLoss * 24;
    const maxReasonableOffer = monthlyLoss * 60;
    const suggestedOffer = monthlyLoss * 36;

    return {
      monthlyLoss,
      annualLoss,
      totalLossOverTerm,
      presentValue,
      vacancyCost,
      totalCostWithoutBuyout,
      totalCostWithBuyout,
      netBenefitOfBuyout,
      breakevenMonths,
      roiPercentage,
      minReasonableOffer,
      maxReasonableOffer,
      suggestedOffer
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tenant Buyout Calculator (Rent Stabilized)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze tenant buyout offers for rent-stabilized apartments and negotiate fair agreements
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Buyout Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Rent Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentRent">Current Stabilized Rent ($)</Label>
                    <Input
                      id="currentRent"
                      type="number"
                      value={currentRent}
                      onChange={(e) => setCurrentRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="marketRent">Market Rate Rent ($)</Label>
                    <Input
                      id="marketRent"
                      type="number"
                      value={marketRent}
                      onChange={(e) => setMarketRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearsRemaining">Expected Tenancy Years</Label>
                    <Input
                      id="yearsRemaining"
                      type="number"
                      value={yearsRemaining}
                      onChange={(e) => setYearsRemaining(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">How long tenant might stay</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Cost Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="renovationCost">Renovation Cost ($)</Label>
                    <Input
                      id="renovationCost"
                      type="number"
                      value={renovationCost}
                      onChange={(e) => setRenovationCost(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedVacancyMonths">Vacancy Period (months)</Label>
                    <Input
                      id="expectedVacancyMonths"
                      type="number"
                      value={expectedVacancyMonths}
                      onChange={(e) => setExpectedVacancyMonths(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="buyoutOffer">Proposed Buyout Offer ($)</Label>
                    <Input
                      id="buyoutOffer"
                      type="number"
                      value={buyoutOffer}
                      onChange={(e) => setBuyoutOffer(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Tenant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tenantAge">Tenant Age</Label>
                    <Input
                      id="tenantAge"
                      type="number"
                      value={tenantAge}
                      onChange={(e) => setTenantAge(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tenantYearsInUnit">Years in Unit</Label>
                    <Input
                      id="tenantYearsInUnit"
                      type="number"
                      value={tenantYearsInUnit}
                      onChange={(e) => setTenantYearsInUnit(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-indigo-50 dark:bg-indigo-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Financial Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monthly Loss:</span>
                    <span className="font-bold text-red-600">${results.monthlyLoss.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Annual Loss:</span>
                    <span className="font-bold">${results.annualLoss.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-medium">Total Loss Over Term:</span>
                    <span className="font-bold text-red-600">${results.totalLossOverTerm.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Present Value:</span>
                    <span className="font-bold">${results.presentValue.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Buyout Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Breakeven Period</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {results.breakevenMonths.toFixed(1)} months
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Time to recover buyout cost</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Net Benefit</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${results.netBenefitOfBuyout.toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Savings over full term</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">ROI</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {results.roiPercentage.toFixed(1)}%
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Return on buyout investment</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Suggested Buyout Range</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Minimum Offer</div>
                      <div className="text-lg font-bold">${results.minReasonableOffer.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">24 months loss</div>
                    </div>
                    <div className="text-center p-3 border-2 border-indigo-500 rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Suggested Offer</div>
                      <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        ${results.suggestedOffer.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">36 months loss</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Maximum Offer</div>
                      <div className="text-lg font-bold">${results.maxReasonableOffer.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">60 months loss</div>
                    </div>
                  </div>
                </div>

                {parseFloat(buyoutOffer) < results.minReasonableOffer && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-orange-800 dark:text-orange-200">
                      ⚠️ Your offer is below the typical range. Tenant may not accept.
                    </p>
                  </div>
                )}

                {parseFloat(buyoutOffer) > results.maxReasonableOffer && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-orange-800 dark:text-orange-200">
                      ⚠️ Your offer is above the typical range. Consider negotiating lower.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Tenant Buyout Guide (Rent-Stabilized Units)</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Rent-Stabilized Tenant Buyouts</h2>
                <p>
                  A tenant buyout is a negotiated agreement where a landlord pays a rent-stabilized tenant to vacate voluntarily. This allows the landlord to renovate and return the unit to market rate, potentially increasing rental income substantially. Buyouts must be conducted legally and ethically, with full transparency and fairness to tenants.
                </p>

                <h3>Why Consider a Tenant Buyout?</h3>
                <ul>
                  <li><strong>Rent Gap:</strong> Significant difference between stabilized and market rents</li>
                  <li><strong>Property Improvements:</strong> Major renovations easier without occupied unit</li>
                  <li><strong>Building Sales:</strong> Higher property values with market-rate units</li>
                  <li><strong>Portfolio Optimization:</strong> Convert stabilized units to market rate</li>
                  <li><strong>Voluntary Agreement:</strong> Less adversarial than eviction proceedings</li>
                </ul>

                <h3>Legal Framework (New York City Focus)</h3>
                <p>
                  Tenant buyouts are legal in NYC but heavily regulated:
                </p>
                <ul>
                  <li>Must be completely voluntary - no harassment or coercion</li>
                  <li>Offer must be in writing with clear terms</li>
                  <li>Tenant has right to legal counsel (landlord may need to provide)</li>
                  <li>14-day waiting period before agreement binding</li>
                  <li>Tenant can withdraw within 14 days of signing</li>
                  <li>All communications must be documented</li>
                  <li>Cannot reduce services or harass to force acceptance</li>
                </ul>

                <h3>Calculating Fair Buyout Offers</h3>
                
                <h4>Standard Formula</h4>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  Buyout = (Market Rent - Current Rent) × Multiplier
                </p>
                
                <h4>Common Multipliers</h4>
                <ul>
                  <li><strong>24-36 months:</strong> Young, mobile tenants likely to move soon anyway</li>
                  <li><strong>36-48 months:</strong> Standard offers for typical situations</li>
                  <li><strong>48-60 months:</strong> Senior citizens, long-term tenants, families</li>
                  <li><strong>60+ months:</strong> Special circumstances, unique properties</li>
                </ul>

                <h4>Factors Increasing Buyout Amount</h4>
                <ul>
                  <li>Senior citizens (62+) with decades of tenancy</li>
                  <li>Families with school-age children</li>
                  <li>Tenants with disabilities or health issues</li>
                  <li>Long tenancy (20+ years)</li>
                  <li>Extremely low rent relative to market</li>
                  <li>Limited affordable housing options in area</li>
                  <li>Tenant improvements to unit</li>
                </ul>

                <h4>Factors Decreasing Buyout Amount</h4>
                <ul>
                  <li>Recent move-in (under 5 years)</li>
                  <li>Tenant already planning to move</li>
                  <li>Comparable affordable units available</li>
                  <li>Smaller rent differential</li>
                  <li>Tenant violations or issues</li>
                </ul>

                <h3>Buyout Process Step-by-Step</h3>
                <ol>
                  <li>
                    <strong>Initial Assessment:</strong>
                    <ul>
                      <li>Calculate rent differential</li>
                      <li>Review tenant history and situation</li>
                      <li>Consult with attorney specializing in tenant buyouts</li>
                      <li>Determine realistic budget</li>
                    </ul>
                  </li>
                  <li>
                    <strong>First Contact:</strong>
                    <ul>
                      <li>Approach tenant respectfully in writing</li>
                      <li>Explain interest in buyout (not demand)</li>
                      <li>Provide information about tenant rights</li>
                      <li>Offer to answer questions</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Negotiation:</strong>
                    <ul>
                      <li>Present initial offer with justification</li>
                      <li>Listen to tenant concerns and needs</li>
                      <li>Consider non-monetary terms (moving assistance, time)</li>
                      <li>Be prepared to negotiate</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Written Agreement:</strong>
                    <ul>
                      <li>Draft comprehensive buyout agreement</li>
                      <li>Include all terms (amount, vacate date, condition)</li>
                      <li>Advise tenant to seek legal counsel</li>
                      <li>Provide 14-day review period</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Execution:</strong>
                    <ul>
                      <li>Both parties sign agreement</li>
                      <li>14-day waiting period begins</li>
                      <li>Coordinate move-out logistics</li>
                      <li>Schedule payment upon vacating</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Completion:</strong>
                    <ul>
                      <li>Verify unit is vacant and in agreed condition</li>
                      <li>Make buyout payment as specified</li>
                      <li>Obtain keys and signed acknowledgment</li>
                      <li>File proper documents with DHCR if required</li>
                    </ul>
                  </li>
                </ol>

                <h3>Common Buyout Package Components</h3>
                <p>
                  A complete buyout offer often includes:
                </p>
                <ul>
                  <li><strong>Cash Payment:</strong> Primary buyout amount</li>
                  <li><strong>Moving Expenses:</strong> $3,000-$10,000 for professional movers</li>
                  <li><strong>Broker Fee:</strong> Cover cost of finding new apartment</li>
                  <li><strong>Security Deposit:</strong> For new apartment (1-2 months rent)</li>
                  <li><strong>Extended Move-Out:</strong> 90-180 days to find new place</li>
                  <li><strong>Rent Differential:</strong> Cover difference if new rent higher (1-2 years)</li>
                  <li><strong>Legal Fees:</strong> Reimburse tenant's attorney costs</li>
                </ul>

                <h3>Tax Implications</h3>
                
                <h4>For Landlords</h4>
                <ul>
                  <li><strong>Deductibility:</strong> Buyouts may be deductible as business expense</li>
                  <li><strong>Capital Improvement:</strong> Or capitalized if part of renovation project</li>
                  <li><strong>Consult CPA:</strong> Treatment varies based on circumstances</li>
                </ul>

                <h4>For Tenants</h4>
                <ul>
                  <li><strong>Taxable Income:</strong> Buyout payments are generally taxable</li>
                  <li><strong>Moving Expenses:</strong> May or may not be deductible (tax law changes)</li>
                  <li><strong>Professional Advice:</strong> Consult tax professional before accepting</li>
                </ul>

                <h3>Common Mistakes to Avoid</h3>
                <ul>
                  <li><strong>Harassment:</strong> ANY coercive tactics are illegal and expensive</li>
                  <li><strong>Lowball Offers:</strong> Insultingly low offers damage negotiation</li>
                  <li><strong>No Written Agreement:</strong> Verbal deals are unenforceable and risky</li>
                  <li><strong>Ignoring Tenant Rights:</strong> Violations lead to fines and legal issues</li>
                  <li><strong>Rushing Process:</strong> Tenants need time to consider and plan</li>
                  <li><strong>Not Using Attorney:</strong> Complex legal issues require professional help</li>
                  <li><strong>Inadequate Documentation:</strong> Keep records of all communications</li>
                </ul>

                <h3>Alternative Approaches</h3>
                
                <h4>Senior Citizen Rent Increase Exemption (SCRIE)</h4>
                <p>
                  For tenants with SCRIE, buyouts may be only way to increase rent. However, these tenants have strongest legal protections and typically require highest buyouts.
                </p>

                <h4>Succession Rights</h4>
                <p>
                  Be aware of succession rights that allow family members to inherit rent-stabilized lease. Factor this into long-term analysis.
                </p>

                <h4>Natural Attrition</h4>
                <p>
                  Sometimes waiting for natural tenant turnover is more cost-effective than buyouts. Run the numbers both ways.
                </p>

                <h3>Red Flags and Warning Signs</h3>
                <p><strong>Proceed with Extreme Caution If:</strong></p>
                <ul>
                  <li>Tenant is elderly (70+) with very long tenancy</li>
                  <li>Tenant has disability requiring unit modifications</li>
                  <li>Significant rent differential ($2,000+/month)</li>
                  <li>Tenant is organized or connected to tenant advocacy groups</li>
                  <li>History of landlord-tenant disputes</li>
                  <li>Recent negative press about landlord buyouts in area</li>
                </ul>

                <h3>Ethical Considerations</h3>
                <p>
                  While legal, buyouts have ethical dimensions:
                </p>
                <ul>
                  <li>Consider tenant's age, health, and ability to relocate</li>
                  <li>Acknowledge impact on community and neighborhood</li>
                  <li>Be transparent about intentions for unit</li>
                  <li>Offer genuinely fair compensation</li>
                  <li>Don't target vulnerable populations</li>
                  <li>Respect tenant's decision to decline</li>
                </ul>

                <h3>Recent Legal Developments</h3>
                <p>
                  Stay current with laws governing buyouts:
                </p>
                <ul>
                  <li><strong>NYC Intro 7 (2021):</strong> Stronger tenant protections and disclosure requirements</li>
                  <li><strong>Housing Stability and Tenant Protection Act (2019):</strong> Limited rent increases after buyouts</li>
                  <li><strong>Right to Counsel:</strong> Tenants entitled to free legal representation in many cases</li>
                  <li><strong>DHCR Reporting:</strong> Some buyouts must be reported to Division of Housing and Community Renewal</li>
                </ul>

                <h3>Case Studies</h3>
                
                <h4>Case 1: Young Professional, Short Tenancy</h4>
                <ul>
                  <li>Rent: $1,800 stabilized, $3,200 market</li>
                  <li>Tenancy: 3 years</li>
                  <li>Buyout: $50,000 (24 months differential)</li>
                  <li>Outcome: Accepted, smooth transition</li>
                </ul>

                <h4>Case 2: Senior Couple, Long Tenancy</h4>
                <ul>
                  <li>Rent: $900 stabilized, $3,500 market</li>
                  <li>Tenancy: 35 years</li>
                  <li>Buyout: $180,000 (48 months + moving assistance)</li>
                  <li>Outcome: Declined, landlord waited for natural turnover</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Tenant buyouts can be a win-win solution when approached ethically and professionally. Landlords gain ability to increase rents and improve properties, while tenants receive substantial compensation for relocating. However, buyouts require careful analysis, legal compliance, and genuine fairness to be successful and avoid legal problems.
                </p>
                <p>
                  Use this calculator to determine reasonable buyout ranges, but remember that each situation is unique. Always consult with an experienced real estate attorney before proceeding with a buyout offer. The money spent on legal fees upfront can save tens of thousands in disputes and violations later.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
