'use client';

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calculator, DollarSign, Home, AlertCircle, FileText, TrendingDown, Clock } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cash for Keys Calculator - Eviction Alternative Cost-Benefit Analysis | Property Tools',
    description: 'Calculate whether offering cash for keys is more cost-effective than formal eviction. Compare costs, timeline, and stress levels for this eviction alternative strategy.',
  };
}

export default function CashForKeysCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(1800);
  const [monthsBehind, setMonthsBehind] = useState<number>(3);
  const [propertyValue, setPropertyValue] = useState<number>(250000);
  const [estimatedDamages, setEstimatedDamages] = useState<number>(2000);
  const [cashOffer, setCashOffer] = useState<number>(2000);
  const [daysToVacate, setDaysToVacate] = useState<number>(14);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateCashForKeys = () => {
    const rentOwed = monthlyRent * monthsBehind;
    const totalTenantDebt = rentOwed + estimatedDamages;
    
    const evictionCosts = {
      legalFees: 1500,
      courtFilingFees: 250,
      sheriffFees: 150,
      lostRent: monthlyRent * 2.5,
      propertyDamage: estimatedDamages * 1.5,
      cleaningAndRepairs: 1000,
      utilityCarrying: 200,
      total: 0,
      timeMonths: 3
    };
    
    evictionCosts.total = 
      evictionCosts.legalFees +
      evictionCosts.courtFilingFees +
      evictionCosts.sheriffFees +
      evictionCosts.lostRent +
      evictionCosts.propertyDamage +
      evictionCosts.cleaningAndRepairs +
      evictionCosts.utilityCarrying;
    
    const cashForKeysCosts = {
      cashPayment: cashOffer,
      lostRent: (daysToVacate / 30) * monthlyRent,
      minorCleanup: 500,
      total: 0,
      timeMonths: daysToVacate / 30
    };
    
    cashForKeysCosts.total = 
      cashForKeysCosts.cashPayment +
      cashForKeysCosts.lostRent +
      cashForKeysCosts.minorCleanup;
    
    const savings = evictionCosts.total - cashForKeysCosts.total;
    const timeSavings = (evictionCosts.timeMonths - cashForKeysCosts.timeMonths) * 30;
    
    const breakEvenCashOffer = evictionCosts.total - cashForKeysCosts.lostRent - cashForKeysCosts.minorCleanup;
    
    const recommendation = savings > 0 ? 
      'Cash for Keys is recommended - lower cost and faster resolution' :
      savings > -500 ?
      'Marginal - consider non-financial factors like stress and time' :
      'Formal eviction may be necessary';
    
    const rentRecoveryLikelihood = monthsBehind < 2 ? 'High' : monthsBehind < 4 ? 'Medium' : 'Low';
    const damageRisk = monthsBehind < 2 ? 'Low' : monthsBehind < 4 ? 'Medium' : 'High';
    
    setResults({
      evictionCosts,
      cashForKeysCosts,
      savings,
      timeSavings,
      rentOwed,
      totalTenantDebt,
      breakEvenCashOffer,
      recommendation,
      rentRecoveryLikelihood,
      damageRisk
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-green-600 p-3 rounded-full">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cash for Keys Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate whether offering cash incentives for voluntary move-out is more cost-effective than formal eviction proceedings.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            Comparison
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Strategy Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Current Situation
                </CardTitle>
                <CardDescription>
                  Enter details about the problematic tenancy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="1800"
                  />
                </div>
                <div>
                  <Label htmlFor="monthsBehind">Months Rent Behind</Label>
                  <Input
                    id="monthsBehind"
                    type="number"
                    value={monthsBehind}
                    onChange={(e) => setMonthsBehind(Number(e.target.value))}
                    placeholder="3"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyValue">Property Value</Label>
                  <Input
                    id="propertyValue"
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    placeholder="250000"
                  />
                </div>
                <div>
                  <Label htmlFor="estimatedDamages">Estimated Property Damage</Label>
                  <Input
                    id="estimatedDamages"
                    type="number"
                    value={estimatedDamages}
                    onChange={(e) => setEstimatedDamages(Number(e.target.value))}
                    placeholder="2000"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cash for Keys Offer
                </CardTitle>
                <CardDescription>
                  Your proposed cash incentive terms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cashOffer">Cash Payment Offer</Label>
                  <Input
                    id="cashOffer"
                    type="number"
                    value={cashOffer}
                    onChange={(e) => setCashOffer(Number(e.target.value))}
                    placeholder="2000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical range: $500-$3,000</p>
                </div>
                <div>
                  <Label htmlFor="daysToVacate">Days to Vacate</Label>
                  <Input
                    id="daysToVacate"
                    type="number"
                    value={daysToVacate}
                    onChange={(e) => setDaysToVacate(Number(e.target.value))}
                    placeholder="14"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical range: 7-30 days</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Cash for Keys Terms:</strong> Tenant receives ${cashOffer.toLocaleString()} upon vacating in {daysToVacate} days, leaving property in broom-clean condition with all keys returned.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateCashForKeys} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Cost Comparison
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className={results.savings > 0 ? 'border-green-500' : 'border-red-500'}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Cost-Benefit Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <Badge className={results.savings > 0 ? 'bg-green-500 text-white text-lg px-4 py-2' : 'bg-red-500 text-white text-lg px-4 py-2'}>
                      {results.savings > 0 ? `Save $${results.savings.toLocaleString()}` : `Cost $${Math.abs(results.savings).toLocaleString()} More`}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-2">vs. Formal Eviction</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2"><strong>Recommendation:</strong></p>
                    <p className="text-gray-900">{results.recommendation}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-700">Cash for Keys Option</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cash Payment:</span>
                      <span className="font-semibold">${cashOffer.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lost Rent ({daysToVacate} days):</span>
                      <span className="font-semibold">${results.cashForKeysCosts.lostRent.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cleanup Costs:</span>
                      <span className="font-semibold">${results.cashForKeysCosts.minorCleanup.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold">Total Cost:</span>
                      <span className="font-bold text-lg text-green-600">${results.cashForKeysCosts.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-semibold">{daysToVacate} days</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-700">Formal Eviction Option</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Legal & Court Fees:</span>
                      <span className="font-semibold">${(results.evictionCosts.legalFees + results.evictionCosts.courtFilingFees + results.evictionCosts.sheriffFees).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lost Rent (~2.5 months):</span>
                      <span className="font-semibold">${results.evictionCosts.lostRent.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Damage:</span>
                      <span className="font-semibold">${results.evictionCosts.propertyDamage.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repairs & Cleanup:</span>
                      <span className="font-semibold">${results.evictionCosts.cleaningAndRepairs.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utility Carrying Costs:</span>
                      <span className="font-semibold">${results.evictionCosts.utilityCarrying.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold">Total Cost:</span>
                      <span className="font-bold text-lg text-red-600">${results.evictionCosts.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-semibold">~90 days</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Time Savings</p>
                      <p className="text-2xl font-bold text-green-600">{results.timeSavings} days</p>
                      <p className="text-sm text-gray-600">Faster tenant turnover</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Break-Even Cash Offer</p>
                      <p className="text-2xl font-bold text-blue-600">${results.breakEvenCashOffer.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">Maximum offer before losing savings</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Rent Recovery Likelihood</p>
                      <p className="text-xl font-bold">{results.rentRecoveryLikelihood}</p>
                      <p className="text-sm text-gray-600">Chance of collecting ${results.rentOwed.toLocaleString()} owed rent</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Property Damage Risk</p>
                      <p className="text-xl font-bold">{results.damageRisk}</p>
                      <p className="text-sm text-gray-600">Risk of retaliatory damage</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Total Tenant Debt</p>
                    <p className="text-lg">Rent Owed: ${results.rentOwed.toLocaleString()} + Damages: ${estimatedDamages.toLocaleString()} = <strong>${results.totalTenantDebt.toLocaleString()}</strong></p>
                    <p className="text-sm text-gray-600 mt-2">Note: This debt is typically uncollectible. Cash for Keys accepts this loss to avoid escalating costs.</p>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate to see cost comparison and recommendation</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to Cash for Keys Strategy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Cash for Keys?</h3>
                  <p>Cash for Keys is an alternative to formal eviction where landlords offer tenants a financial incentive to voluntarily vacate the property by a specific date. Instead of pursuing costly and time-consuming legal proceedings, the landlord negotiates a mutually agreed-upon move-out with cash payment as motivation.</p>
                  <p>The typical Cash for Keys transaction involves the landlord offering between $500 and $3,000 to the tenant in exchange for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Voluntary vacation of the property within 7-30 days</li>
                    <li>Leaving the property in broom-clean condition</li>
                    <li>Returning all keys, remotes, and access devices</li>
                    <li>Signing a move-out agreement releasing all claims</li>
                    <li>Avoiding further property damage or unpaid utilities</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Consider Cash for Keys</h3>
                  <p>Cash for Keys is most effective in the following situations:</p>
                  <h4 className="font-semibold mt-4 mb-2">1. Non-Payment of Rent</h4>
                  <p>When tenants are multiple months behind on rent and show no ability or intention to catch up. Recovery of back rent through legal proceedings is often unsuccessful, making it more practical to cut losses and regain the property quickly.</p>
                  <h4 className="font-semibold mt-4 mb-2">2. Lease Violations</h4>
                  <p>For serious lease violations like unauthorized occupants, pets, or subletting where the tenant has otherwise been cooperative but made mistakes.</p>
                  <h4 className="font-semibold mt-4 mb-2">3. Property Sales or Renovations</h4>
                  <p>When you need to sell the property or complete major renovations and need tenants to leave before their lease naturally expires.</p>
                  <h4 className="font-semibold mt-4 mb-2">4. Holdover Tenants</h4>
                  <p>Month-to-month tenants who refuse to leave after receiving proper notice to vacate.</p>
                  <h4 className="font-semibold mt-4 mb-2">5. Foreclosure or Short Sale</h4>
                  <p>When the property is in foreclosure or you're attempting a short sale and need tenants to vacate quickly to complete the transaction.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advantages of Cash for Keys</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Speed:</strong> Resolution in 7-30 days vs. 60-180 days for formal eviction</li>
                    <li><strong>Cost Savings:</strong> Typically $2,000-$5,000 vs. $5,000-$10,000+ for eviction</li>
                    <li><strong>Reduced Property Damage:</strong> Cooperative exit minimizes retaliatory destruction</li>
                    <li><strong>No Court Records:</strong> Maintains clean legal record for both parties</li>
                    <li><strong>Lower Stress:</strong> Avoids adversarial court proceedings</li>
                    <li><strong>Flexibility:</strong> Terms can be customized to specific situations</li>
                    <li><strong>Certainty:</strong> Written agreement provides definite move-out date</li>
                    <li><strong>Goodwill:</strong> Tenant may leave with less hostility</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Disadvantages and Risks</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>No Rent Recovery:</strong> You forfeit the right to pursue back rent (usually uncollectible anyway)</li>
                    <li><strong>Tenant May Renege:</strong> No guarantee tenant will actually vacate even after accepting payment</li>
                    <li><strong>Sets Precedent:</strong> Other tenants may expect similar deals</li>
                    <li><strong>Upfront Cash Required:</strong> Immediate out-of-pocket expense</li>
                    <li><strong>Tax Implications:</strong> Cash payment may not be tax-deductible</li>
                    <li><strong>Appears Weak:</strong> May embolden tenants to violate lease expecting payouts</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Structure a Cash for Keys Offer</h3>
                  <h4 className="font-semibold mt-4 mb-2">Step 1: Assess the Situation</h4>
                  <p>Calculate the total cost of formal eviction vs. Cash for Keys:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Legal fees: $1,000-$3,000</li>
                    <li>Court costs: $200-$500</li>
                    <li>Sheriff fees: $100-$300</li>
                    <li>Lost rent during proceedings: 2-4 months</li>
                    <li>Property damage (estimated): Variable</li>
                    <li>Cleanup and repairs: $500-$3,000</li>
                    <li>Time and stress: Significant</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-2">Step 2: Determine Offer Amount</h4>
                  <p>Base your offer on:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>One month's rent is a typical starting point</li>
                    <li>Higher amounts ($2,000-$3,000) for urgent situations</li>
                    <li>Lower amounts ($500-$1,000) for minor violations or short timelines</li>
                    <li>Consider tenant's financial situation (unemployed tenants may accept less)</li>
                    <li>Factor in move-out timeline (faster = higher offer)</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-2">Step 3: Make the Offer</h4>
                  <p>Approach the conversation professionally:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Meet in person if possible (shows good faith)</li>
                    <li>Frame it as a mutually beneficial solution</li>
                    <li>Explain eviction consequences (court record, moving costs, difficulty finding housing)</li>
                    <li>Emphasize the benefits of a cooperative move-out</li>
                    <li>Be prepared to negotiate within a predetermined range</li>
                    <li>Set a deadline for acceptance (e.g., 48-72 hours)</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-2">Step 4: Document Everything</h4>
                  <p>Use a written Cash for Keys agreement that includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Exact move-out date and time</li>
                    <li>Cash payment amount and payment method</li>
                    <li>Condition requirements (broom-clean, no damage)</li>
                    <li>Key and access device return requirements</li>
                    <li>Utility transfer responsibilities</li>
                    <li>Release of claims and forfeit of security deposit</li>
                    <li>Consequences if tenant fails to vacate</li>
                    <li>Both parties' signatures and date</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-2">Step 5: Payment Timing</h4>
                  <p>Critical: Do not pay until move-out is complete:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Schedule a move-out inspection</li>
                    <li>Verify all possessions are removed</li>
                    <li>Check property condition</li>
                    <li>Collect all keys and access devices</li>
                    <li>Only then issue payment (cashier's check or cash)</li>
                    <li>Have tenant sign receipt acknowledging full payment and release of claims</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Considerations</h3>
                  <p>While Cash for Keys agreements are generally legal and enforceable, several legal issues warrant attention:</p>
                  <h4 className="font-semibold mt-4 mb-2">State and Local Laws</h4>
                  <p>Some jurisdictions have specific regulations regarding move-out incentives, particularly in rent-controlled areas. Check local tenant protection laws.</p>
                  <h4 className="font-semibold mt-4 mb-2">Written Agreement Required</h4>
                  <p>Always use a written agreement. Verbal Cash for Keys deals are difficult to enforce and create ambiguity.</p>
                  <h4 className="font-semibold mt-4 mb-2">Release of Claims</h4>
                  <p>Your agreement should include language releasing both parties from all claims related to the tenancy, including back rent, damages, and potential lawsuits.</p>
                  <h4 className="font-semibold mt-4 mb-2">Tax Implications</h4>
                  <p>Cash for Keys payments may be considered non-deductible expenses or may need to be structured as settlement payments. Consult a tax professional.</p>
                  <h4 className="font-semibold mt-4 mb-2">Backup Eviction Filing</h4>
                  <p>Consider filing for eviction simultaneously with the Cash for Keys offer. If the tenant accepts, you can dismiss the case. If they refuse or renege, you're already ahead in the eviction process.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What If the Tenant Refuses or Reneges?</h3>
                  <p>Not all tenants will accept a Cash for Keys offer, and some may accept but fail to follow through:</p>
                  <h4 className="font-semibold mt-4 mb-2">If Tenant Refuses Initial Offer</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Negotiate: They may counteroffer for a higher amount</li>
                    <li>Explain eviction consequences: Court records, attorney fees they'll owe</li>
                    <li>Set a firm deadline: "This offer expires in 48 hours"</li>
                    <li>Proceed with eviction if they refuse</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-2">If Tenant Accepts but Fails to Vacate</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your agreement should specify consequences (payment forfeited, eviction proceeds)</li>
                    <li>Do not make payment if they miss the deadline</li>
                    <li>Proceed immediately with formal eviction</li>
                    <li>Use the signed Cash for Keys agreement as evidence of their bad faith</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Cash for Keys Timeline</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4 text-sm">
                    <p><strong>Day 1:</strong> Make initial offer to tenant</p>
                    <p><strong>Day 2-3:</strong> Negotiate terms and payment amount</p>
                    <p><strong>Day 4:</strong> Sign written Cash for Keys agreement</p>
                    <p><strong>Day 5-14:</strong> Tenant packing and preparing to move</p>
                    <p><strong>Day 14:</strong> Move-out inspection, key return, payment issued</p>
                    <p><strong>Day 15-17:</strong> Final cleaning and minor repairs</p>
                    <p><strong>Day 18:</strong> List property for new tenant</p>
                    <p><strong>Total Time:</strong> ~18 days vs. 60-180 days for eviction</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices and Tips</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Move Fast:</strong> The longer you wait, the more rent you lose and the more damage accumulates</li>
                    <li><strong>Be Professional:</strong> Maintain a businesslike tone even if the situation is frustrating</li>
                    <li><strong>Document Everything:</strong> Written agreements, photos, emails, and receipts</li>
                    <li><strong>Don't Overpay:</strong> Calculate your break-even point and don't exceed it</li>
                    <li><strong>Set Clear Deadlines:</strong> Vague timelines lead to delays and reneging</li>
                    <li><strong>Inspect Before Paying:</strong> Never pay until you've verified the property condition and key return</li>
                    <li><strong>Use Cashier's Checks:</strong> Safer than cash and provides payment record</li>
                    <li><strong>Consult an Attorney:</strong> Have a lawyer review your Cash for Keys agreement template</li>
                    <li><strong>Know When to Walk Away:</strong> If negotiations stall or tenant is hostile, proceed with eviction</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p>Cash for Keys is a powerful tool in a landlord's arsenal for resolving problematic tenancies quickly, cost-effectively, and with minimal stress. While it involves accepting some financial loss upfront (typically uncollectible back rent), it often saves thousands of dollars in legal fees, lost rent, and property damage compared to formal eviction.</p>
                  <p>The key to success is careful cost-benefit analysis, professional negotiation, thorough documentation, and strategic payment timing. By offering tenants a dignified exit and financial assistance with moving costs, landlords can regain possession of their properties in a fraction of the time required for eviction while avoiding the adversarial court process.</p>
                  <p>Use this calculator to determine whether Cash for Keys makes financial sense for your specific situation, and always consult with a local real estate attorney to ensure compliance with state and local regulations.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
