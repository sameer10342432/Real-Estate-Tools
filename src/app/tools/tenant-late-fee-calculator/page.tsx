'use client';

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, AlertCircle, FileText, Scale, MapPin } from 'lucide-react';

interface StateLateFeeLaws {
  [key: string]: {
    maxPercentage: number | null;
    maxFlatFee: number | null;
    gracePeriod: number;
    notes: string;
    limitations: string;
  };
}

const STATE_LAWS: StateLateFeeLaws = {
  'AL': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Late fees must be specified in lease and reasonable' },
  'CA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 3, notes: 'Must be reasonable; typically 4-6% of rent', limitations: 'Cannot charge late fee until rent is 3 days late. Fee must be reasonable.' },
  'FL': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be specified in lease', limitations: 'Late fees must be specified in lease agreement' },
  'TX': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be specified in lease', limitations: 'Fees must be reasonable and specified in lease' },
  'NY': { maxPercentage: 5, maxFlatFee: 50, gracePeriod: 5, notes: 'Lesser of $50 or 5% of monthly rent', limitations: 'Cannot charge until 5 days after due date' },
  'PA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 10, notes: 'Must allow 10-day grace period', limitations: '10-day grace period mandatory before charging fees' },
  'IL': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No specific cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'OH': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'GA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'NC': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 5, notes: 'Max 5% of monthly rent after 5-day grace', limitations: 'Cannot exceed 5% of rent; 5-day grace period' },
  'MI': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'NJ': { maxPercentage: null, maxFlatFee: null, gracePeriod: 5, notes: 'Must allow 5-day grace period', limitations: '5-day grace period before charging fees' },
  'VA': { maxPercentage: 10, maxFlatFee: null, gracePeriod: 5, notes: 'Max 10% of monthly rent after 5 days', limitations: 'Cannot exceed 10% of rent; 5-day grace required' },
  'WA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'AZ': { maxPercentage: null, maxFlatFee: null, gracePeriod: 5, notes: 'Must allow 5-day grace period', limitations: '5-day grace period mandatory' },
  'MA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 30, notes: 'Cannot charge late fee until 30 days late', limitations: '30-day grace period required by state law' },
  'TN': { maxPercentage: 10, maxFlatFee: null, gracePeriod: 5, notes: 'Max 10% of rent after 5-day grace', limitations: 'Cannot exceed 10% of rent; 5-day grace period' },
  'IN': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'MO': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'MD': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 5, notes: 'Max 5% of rent after 5-day grace', limitations: 'Cannot exceed 5% of rent; 5-day grace period' },
  'WI': { maxPercentage: null, maxFlatFee: null, gracePeriod: 5, notes: 'Must allow 5-day grace period', limitations: '5-day grace period recommended' },
  'MN': { maxPercentage: 8, maxFlatFee: null, gracePeriod: 0, notes: 'Max 8% of monthly rent', limitations: 'Cannot exceed 8% of monthly rent' },
  'CO': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'SC': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'OR': { maxPercentage: null, maxFlatFee: null, gracePeriod: 4, notes: 'Max $20 or 6% after 4-day grace', limitations: '4-day grace period; max $20 or 6% of rent' },
  'OK': { maxPercentage: 10, maxFlatFee: null, gracePeriod: 0, notes: 'Max 10% of monthly rent', limitations: 'Cannot exceed 10% of monthly rent' },
  'CT': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 9, notes: 'Max 5% after 9-day grace period', limitations: '9-day grace period; max 5% of rent' },
  'IA': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'MS': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'AR': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'KS': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'UT': { maxPercentage: null, maxFlatFee: null, gracePeriod: 3, notes: 'Must allow 3-day grace period', limitations: '3-day grace period recommended' },
  'NV': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 0, notes: 'Max 5% of monthly rent', limitations: 'Cannot exceed 5% of monthly rent' },
  'NM': { maxPercentage: 10, maxFlatFee: null, gracePeriod: 0, notes: 'Max 10% of monthly rent', limitations: 'Cannot exceed 10% of monthly rent' },
  'WV': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'NE': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'ID': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'HI': { maxPercentage: null, maxFlatFee: null, gracePeriod: 5, notes: 'Must allow 5-day grace period', limitations: '5-day grace period recommended' },
  'NH': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'ME': { maxPercentage: 4, maxFlatFee: null, gracePeriod: 15, notes: 'Max 4% after 15-day grace period', limitations: '15-day grace period; max 4% of rent' },
  'RI': { maxPercentage: null, maxFlatFee: null, gracePeriod: 15, notes: 'Must allow 15-day grace period', limitations: '15-day grace period required' },
  'MT': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'DE': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 5, notes: 'Max 5% after 5-day grace period', limitations: '5-day grace period; max 5% of rent' },
  'SD': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'ND': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'AK': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'VT': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be reasonable', limitations: 'Fees must be reasonable and in lease' },
  'WY': { maxPercentage: null, maxFlatFee: null, gracePeriod: 0, notes: 'No state cap; must be in lease', limitations: 'Must be specified in lease agreement' },
  'DC': { maxPercentage: 5, maxFlatFee: null, gracePeriod: 5, notes: 'Max 5% after 5-day grace period', limitations: '5-day grace period; max 5% of rent' },
};

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tenant Late Fee Calculator by State Law - Legal Late Fee Limits | Property Tools',
    description: 'Calculate legal late fees for rental properties based on state-specific regulations. Ensure compliance with late fee caps, grace periods, and landlord-tenant laws across all 50 states.',
  };
}

export default function TenantLateFeeCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(1500);
  const [state, setState] = useState<string>('CA');
  const [daysLate, setDaysLate] = useState<number>(7);
  const [proposedFee, setProposedFee] = useState<number>(75);
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateLateFee = () => {
    const stateLaw = STATE_LAWS[state];
    
    const gracePeriodMet = daysLate > stateLaw.gracePeriod;
    
    let maxLegalFee = proposedFee;
    let isLegal = true;
    let recommendation = '';
    
    if (!gracePeriodMet) {
      isLegal = false;
      maxLegalFee = 0;
      recommendation = `Cannot charge late fee. ${state} requires a ${stateLaw.gracePeriod}-day grace period. Rent is only ${daysLate} days late.`;
    } else {
      if (stateLaw.maxPercentage !== null) {
        const percentCap = (monthlyRent * stateLaw.maxPercentage) / 100;
        
        if (stateLaw.maxFlatFee !== null) {
          maxLegalFee = Math.min(percentCap, stateLaw.maxFlatFee);
        } else {
          maxLegalFee = percentCap;
        }
        
        if (proposedFee > maxLegalFee) {
          isLegal = false;
          recommendation = `Your proposed fee of $${proposedFee} exceeds the ${state} legal maximum of $${maxLegalFee.toFixed(2)} (${stateLaw.maxPercentage}% of monthly rent${stateLaw.maxFlatFee ? ` or $${stateLaw.maxFlatFee}, whichever is less` : ''}).`;
        } else {
          recommendation = `Your proposed fee of $${proposedFee} is legal. Maximum allowed: $${maxLegalFee.toFixed(2)}`;
        }
      } else if (stateLaw.maxFlatFee !== null) {
        maxLegalFee = stateLaw.maxFlatFee;
        
        if (proposedFee > maxLegalFee) {
          isLegal = false;
          recommendation = `Your proposed fee of $${proposedFee} exceeds the ${state} legal maximum of $${maxLegalFee}.`;
        } else {
          recommendation = `Your proposed fee of $${proposedFee} is legal. Maximum allowed: $${maxLegalFee}`;
        }
      } else {
        const reasonableCap = monthlyRent * 0.05;
        if (proposedFee > reasonableCap) {
          recommendation = `No state cap exists, but courts typically consider 5% of rent ($${reasonableCap.toFixed(2)}) as reasonable. Your fee of $${proposedFee} may be challenged.`;
        } else {
          recommendation = `No state-mandated cap. Your fee of $${proposedFee} appears reasonable (under 5% of monthly rent).`;
        }
        maxLegalFee = reasonableCap;
      }
    }

    const annualImpact = (proposedFee * 6);
    const legalAnnualMax = (maxLegalFee * 6);
    
    setResults({
      isLegal,
      maxLegalFee,
      gracePeriodMet,
      gracePeriodDays: stateLaw.gracePeriod,
      daysOverGrace: Math.max(0, daysLate - stateLaw.gracePeriod),
      recommendation,
      stateLaw: stateLaw,
      annualImpact,
      legalAnnualMax
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full">
            <Scale className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tenant Late Fee Calculator (By State Law)
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate legal late fees for rental properties based on state-specific regulations. Ensure compliance with late fee caps, grace periods, and landlord-tenant laws.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Results
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Legal Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Rental Property Information
              </CardTitle>
              <CardDescription>
                Enter your property details and proposed late fee
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {Object.keys(STATE_LAWS).sort().map((stateCode) => (
                        <SelectItem key={stateCode} value={stateCode}>
                          {stateCode}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="1500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="daysLate">Days Late</Label>
                  <Input
                    id="daysLate"
                    type="number"
                    value={daysLate}
                    onChange={(e) => setDaysLate(Number(e.target.value))}
                    placeholder="7"
                  />
                </div>
                <div>
                  <Label htmlFor="proposedFee">Proposed Late Fee</Label>
                  <Input
                    id="proposedFee"
                    type="number"
                    value={proposedFee}
                    onChange={(e) => setProposedFee(Number(e.target.value))}
                    placeholder="75"
                  />
                </div>
              </div>
              <Button onClick={calculateLateFee} className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Legal Late Fee
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className={results.isLegal ? 'border-green-500' : 'border-red-500'}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Legal Compliance Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <Badge className={results.isLegal ? 'bg-green-500 text-white text-lg px-4 py-2' : 'bg-red-500 text-white text-lg px-4 py-2'}>
                      {results.isLegal ? '✓ LEGAL' : '✗ NOT LEGAL'}
                    </Badge>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2"><strong>Analysis:</strong></p>
                    <p className="text-gray-900">{results.recommendation}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fee Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rent:</span>
                      <span className="font-semibold">${monthlyRent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Days Late:</span>
                      <span className="font-semibold">{daysLate} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grace Period:</span>
                      <span className="font-semibold">{results.gracePeriodDays} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Days Over Grace:</span>
                      <span className="font-semibold">{results.daysOverGrace} days</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="text-gray-600">Your Proposed Fee:</span>
                      <span className="font-bold text-lg">${proposedFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Legal Maximum:</span>
                      <span className="font-bold text-lg text-green-600">${results.maxLegalFee.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{state} State Law</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Maximum Fee:</p>
                      <p className="font-semibold">
                        {results.stateLaw.maxPercentage ? `${results.stateLaw.maxPercentage}% of rent` : 'No percentage cap'}
                        {results.stateLaw.maxFlatFee ? ` or $${results.stateLaw.maxFlatFee}, whichever is less` : ''}
                        {!results.stateLaw.maxPercentage && !results.stateLaw.maxFlatFee ? 'No state-mandated cap (must be reasonable)' : ''}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Required Grace Period:</p>
                      <p className="font-semibold">{results.stateLaw.gracePeriod} days</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">State Notes:</p>
                      <p className="text-sm">{results.stateLaw.notes}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Limitations:</p>
                      <p className="text-sm">{results.stateLaw.limitations}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Annual Impact Projection</CardTitle>
                  <CardDescription>Assuming 6 late payments per year</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your Fee Annual Collection:</span>
                    <span className="font-semibold">${results.annualImpact.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Legal Maximum Annual:</span>
                    <span className="font-semibold text-green-600">${results.legalAnnualMax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Potential Risk:</span>
                    <span className="font-semibold text-red-600">
                      {results.annualImpact > results.legalAnnualMax ? 
                        `$${(results.annualImpact - results.legalAnnualMax).toFixed(2)} over limit` : 
                        'Compliant'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate late fees to see compliance analysis</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Tenant Late Fees by State Law</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Are Tenant Late Fees?</h3>
                  <p>Tenant late fees are charges imposed by landlords when rent is not paid by the due date specified in the lease agreement. These fees serve as both a deterrent to late payments and compensation for the landlord's administrative costs and potential lost interest. However, late fees are heavily regulated by state and local laws to prevent excessive charges that could be considered punitive or predatory.</p>
                  <p>Unlike security deposits (which are held in trust and returned), late fees are collected as revenue. This makes them subject to stricter scrutiny under landlord-tenant law. Courts across the United States have consistently ruled that late fees must be "reasonable" and cannot be used as a penalty or punishment mechanism.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Framework: Why State Laws Matter</h3>
                  <p>Landlord-tenant relationships are primarily governed by state law, which means late fee regulations vary significantly across the country. Some states impose strict caps on late fee amounts and require mandatory grace periods, while others have minimal regulations and rely on the "reasonableness" standard.</p>
                  <p><strong>States with Strict Regulations:</strong> States like New York, Massachusetts, and Oregon have explicit caps on late fees. For example, New York limits late fees to the lesser of $50 or 5% of monthly rent, and Massachusetts prohibits late fees entirely until rent is 30 days overdue.</p>
                  <p><strong>States with Minimal Regulations:</strong> States like Texas, Florida, and Georgia have no statutory caps but require that late fees be "reasonable" and specified in the lease agreement. In these states, courts evaluate reasonableness based on the actual administrative costs and industry standards (typically 4-6% of monthly rent).</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Reasonableness Standard</h3>
                  <p>Even in states without explicit caps, landlords cannot charge arbitrary late fees. Courts apply a "reasonableness" test that considers:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Administrative Costs:</strong> The actual cost to the landlord of processing late rent (accounting, notices, etc.)</li>
                    <li><strong>Lost Interest:</strong> Potential interest lost on delayed rental income</li>
                    <li><strong>Industry Standards:</strong> What other landlords in similar markets are charging</li>
                    <li><strong>Proportionality:</strong> Whether the fee is proportionate to the rent amount</li>
                    <li><strong>Punitive Nature:</strong> Whether the fee appears designed to punish rather than compensate</li>
                  </ul>
                  <p>As a general rule, late fees exceeding 10% of monthly rent are often considered unreasonable and may be struck down by courts, even in states with no statutory caps.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Grace Periods: State-by-State Requirements</h3>
                  <p>Many states require landlords to provide a grace period before charging late fees. This grace period typically ranges from 3 to 15 days after the rent due date. During this period, rent is technically late, but no late fee can be assessed.</p>
                  <p><strong>Common Grace Periods:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>3-5 Days:</strong> California (3 days), Arizona, Pennsylvania, New Jersey, Virginia (5 days)</li>
                    <li><strong>9-10 Days:</strong> Connecticut (9 days), Pennsylvania (10 days)</li>
                    <li><strong>15+ Days:</strong> Massachusetts (30 days), Maine (15 days), Rhode Island (15 days)</li>
                  </ul>
                  <p>Grace periods are designed to account for mail delays, bank processing times, and minor tenant oversights. Violating grace period requirements can result in the late fee being deemed illegal and potentially trigger tenant lawsuits.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lease Agreement Requirements</h3>
                  <p>In virtually all states, late fees must be explicitly stated in the written lease agreement. The lease should specify:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The exact amount of the late fee or the formula for calculating it</li>
                    <li>When rent is considered late (the due date)</li>
                    <li>Any applicable grace period before fees are assessed</li>
                    <li>Whether fees are charged once or daily after the grace period</li>
                    <li>Any additional fees for bounced checks or payment processing</li>
                  </ul>
                  <p>Failing to include late fee terms in the lease can make the fees unenforceable. Landlords cannot retroactively add late fees or change the late fee structure without amending the lease and obtaining tenant agreement.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Late Fee Structures</h3>
                  <p>Landlords typically structure late fees in one of three ways:</p>
                  <h4 className="font-semibold mt-4 mb-2">1. Flat Fee</h4>
                  <p>A fixed amount charged regardless of rent amount (e.g., $50 late fee). This is simple to administer but may be disproportionate for lower or higher rent amounts. For a $500/month apartment, a $50 fee (10%) may be reasonable, but the same $50 fee on a $3,000/month property (1.67%) might not adequately compensate the landlord.</p>
                  <h4 className="font-semibold mt-4 mb-2">2. Percentage of Rent</h4>
                  <p>A percentage of monthly rent (e.g., 5% late fee). This scales proportionally with rent amount and is generally considered more equitable. Industry standards typically range from 4-6% of monthly rent, with courts viewing anything over 10% as potentially excessive.</p>
                  <h4 className="font-semibold mt-4 mb-2">3. Tiered or Daily Fees</h4>
                  <p>Some landlords charge an initial flat fee, then add daily fees for each day rent remains unpaid (e.g., $50 on day 6, plus $10/day thereafter). This structure must be carefully calibrated to avoid becoming punitive. Many states prohibit or limit daily late fees.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Risks of Excessive Late Fees</h3>
                  <p>Charging excessive late fees exposes landlords to significant legal risks:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tenant Lawsuits:</strong> Tenants can sue to recover illegally charged fees, often with statutory damages multipliers</li>
                    <li><strong>Eviction Complications:</strong> Courts may dismiss evictions if late fees are found to be illegal</li>
                    <li><strong>Damage to Reputation:</strong> Word spreads quickly in rental markets about landlords who charge excessive fees</li>
                    <li><strong>Lease Voidability:</strong> In some jurisdictions, illegal late fees can void the entire lease agreement</li>
                    <li><strong>Fair Housing Violations:</strong> If fees are applied inconsistently across protected classes, discrimination claims may arise</li>
                    <li><strong>Regulatory Penalties:</strong> Some states impose fines on landlords who violate late fee regulations</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Landlords</h3>
                  <p>To ensure legal compliance and maintain positive tenant relationships, landlords should:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Research State and Local Laws:</strong> Understand your jurisdiction's specific requirements, including caps and grace periods</li>
                    <li><strong>Document in Writing:</strong> Include clear late fee terms in all lease agreements</li>
                    <li><strong>Be Consistent:</strong> Apply late fees uniformly to all tenants to avoid discrimination claims</li>
                    <li><strong>Communicate Proactively:</strong> Send reminders before rent is due and before grace periods expire</li>
                    <li><strong>Consider Hardship Cases:</strong> Have a policy for waiving fees in documented emergencies (medical issues, natural disasters)</li>
                    <li><strong>Review Annually:</strong> State laws change; review your late fee structure annually</li>
                    <li><strong>Keep Records:</strong> Document when rent is received and when fees are assessed</li>
                    <li><strong>Seek Legal Review:</strong> Have an attorney review your lease and late fee structure</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Alternative Approaches to Late Fees</h3>
                  <p>Some landlords are moving away from punitive late fees toward incentive-based approaches:</p>
                  <h4 className="font-semibold mt-4 mb-2">Early Payment Discounts</h4>
                  <p>Instead of charging late fees, offer a discount for rent paid early or on time (e.g., 2% discount if paid by the 1st). This frames the fee positively and may have better legal standing.</p>
                  <h4 className="font-semibold mt-4 mb-2">Rent Reporting to Credit Bureaus</h4>
                  <p>Report on-time payments to credit bureaus to help tenants build credit. This incentivizes timely payments without late fees.</p>
                  <h4 className="font-semibold mt-4 mb-2">Flexible Payment Plans</h4>
                  <p>For tenants experiencing financial hardship, offer payment plans that split rent into biweekly or weekly installments.</p>
                  <h4 className="font-semibold mt-4 mb-2">Automated Payment Systems</h4>
                  <p>Encourage ACH or credit card autopay to reduce late payments entirely. Some landlords waive late fees for tenants enrolled in autopay.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">State-Specific Late Fee Caps (Reference Table)</h3>
                  <p>Below is a summary of late fee regulations in states with explicit caps. For states not listed, no statutory cap exists, but the "reasonableness" standard applies (typically 4-6% of rent):</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4 text-sm">
                    <p><strong>New York:</strong> Lesser of $50 or 5% of rent; 5-day grace period</p>
                    <p><strong>California:</strong> No cap, but must be reasonable; 3-day grace period</p>
                    <p><strong>North Carolina:</strong> Max 5% of rent; 5-day grace period</p>
                    <p><strong>Virginia:</strong> Max 10% of rent; 5-day grace period</p>
                    <p><strong>Tennessee:</strong> Max 10% of rent; 5-day grace period</p>
                    <p><strong>Massachusetts:</strong> No fee until 30 days late</p>
                    <p><strong>Oregon:</strong> Max $20 or 6% of rent (whichever is greater); 4-day grace period</p>
                    <p><strong>Connecticut:</strong> Max 5% of rent; 9-day grace period</p>
                    <p><strong>Maryland:</strong> Max 5% of rent; 5-day grace period</p>
                    <p><strong>Minnesota:</strong> Max 8% of rent</p>
                    <p><strong>Maine:</strong> Max 4% of rent; 15-day grace period</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p>Tenant late fees are a legitimate tool for landlords to encourage timely rent payments and recoup administrative costs. However, they must be carefully structured to comply with state and local laws. The key principles are:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Always research your state's specific caps and grace period requirements</li>
                    <li>Keep fees reasonable (typically 4-6% of rent in states without caps)</li>
                    <li>Include clear late fee terms in every lease agreement</li>
                    <li>Apply fees consistently to all tenants</li>
                    <li>Document everything and keep thorough records</li>
                  </ul>
                  <p className="mt-4">By using this calculator and following the legal guidelines outlined in this guide, landlords can implement compliant late fee policies that protect their income while maintaining positive tenant relationships and avoiding costly legal disputes.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
