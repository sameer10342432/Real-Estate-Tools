'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, FileText, AlertCircle, MapPin, DollarSign, CheckCircle2 } from 'lucide-react';

interface StateApplicationFeeLaws {
  [key: string]: {
    allowed: boolean;
    maxFee: number | null;
    perAdult: boolean;
    refundable: boolean | string;
    limitations: string;
    notes: string;
  };
}

const STATE_LAWS: StateApplicationFeeLaws = {
  'AL': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable; typically covers screening costs' },
  'AK': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Fees must be reasonable and documented' },
  'AZ': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-75; must be specified in application' },
  'AR': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific limitations; market-driven' },
  'CA': { allowed: true, maxFee: null, perAdult: true, refundable: false, limitations: 'Actual screening costs only', notes: 'Can only charge actual costs of screening; must provide receipt if requested' },
  'CO': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $50-100 per application' },
  'CT': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally reasonable fees accepted' },
  'DE': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable and disclosed' },
  'DC': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Application fees allowed; must be reasonable' },
  'FL': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $50-100; must be disclosed before collecting' },
  'GA': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Commonly $30-75 per application' },
  'HI': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Market-driven; typically $30-50' },
  'ID': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
  'IL': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Chicago may have local restrictions; check ordinances' },
  'IN': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-75' },
  'IA': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally reasonable fees accepted' },
  'KS': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable' },
  'KY': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $30-50' },
  'LA': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific limitations' },
  'ME': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Fees must be reasonable' },
  'MD': { allowed: true, maxFee: 25, perAdult: false, refundable: false, limitations: 'Max $25 per application', notes: 'State cap of $25; cannot charge more' },
  'MA': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'Actual screening costs', notes: 'Can only charge actual and reasonable screening costs' },
  'MI': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-50' },
  'MN': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Minneapolis has local restrictions; check city ordinances' },
  'MS': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
  'MO': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally $30-75' },
  'MT': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable' },
  'NE': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-50' },
  'NV': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Fees must be disclosed in advance' },
  'NH': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally reasonable fees accepted' },
  'NJ': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Some municipalities have local caps; verify locally' },
  'NM': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $30-50' },
  'NY': { allowed: true, maxFee: 20, perAdult: false, refundable: false, limitations: 'Max $20', notes: 'State law caps application fees at $20' },
  'NC': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable; typically $30-75' },
  'ND': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
  'OH': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally $25-75' },
  'OK': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-50' },
  'OR': { allowed: true, maxFee: null, perAdult: true, refundable: 'partial', limitations: 'Actual screening costs; must refund if denied', notes: 'Must refund if not screened or if application withdrawn before screening' },
  'PA': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Philadelphia may have local restrictions' },
  'RI': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Fees must be reasonable' },
  'SC': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $30-50' },
  'SD': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
  'TN': { allowed: true, maxFee: null, perAdult: true, refundable: false, limitations: 'Actual costs only; max $50 if costs not documented', notes: 'Can charge actual screening costs; $50 cap if actual costs not provided to tenant' },
  'TX': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $40-100; Austin has local ordinances' },
  'UT': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Generally $30-50' },
  'VT': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Must be reasonable' },
  'VA': { allowed: true, maxFee: 50, perAdult: false, refundable: false, limitations: 'Max $50', notes: 'State cap of $50 per application' },
  'WA': { allowed: true, maxFee: 20, perAdult: true, refundable: 'partial', limitations: 'Max $20 per adult; refund if denied', notes: 'Cannot exceed $20 per adult applicant; must refund if application denied' },
  'WV': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
  'WI': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'Typically $25-50; Milwaukee may have local rules' },
  'WY': { allowed: true, maxFee: null, perAdult: false, refundable: false, limitations: 'No state cap', notes: 'No specific restrictions' },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Application Fee Checker by State - Legal Fee Limits & Rules | Property Tools',
    description: 'Check state-by-state rental application fee limits, legality, and requirements. Ensure compliance with application fee caps and refund rules across all 50 states.',
  };
}

export default function RentalApplicationFeeChecker() {
  const [state, setState] = useState<string>('CA');
  const [proposedFee, setProposedFee] = useState<number>(45);
  const [numberOfApplicants, setNumberOfApplicants] = useState<number>(1);
  const [actualScreeningCost, setActualScreeningCost] = useState<number>(30);
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const checkApplicationFee = () => {
    const stateLaw = STATE_LAWS[state];
    
    let isLegal = true;
    let maxAllowedFee = proposedFee;
    let recommendation = '';
    let totalFeeAllowed = 0;
    let totalFeeProposed = 0;

    if (stateLaw.maxFee !== null) {
      maxAllowedFee = stateLaw.maxFee;
      
      if (stateLaw.perAdult) {
        totalFeeAllowed = maxAllowedFee * numberOfApplicants;
        totalFeeProposed = proposedFee * numberOfApplicants;
      } else {
        totalFeeAllowed = maxAllowedFee;
        totalFeeProposed = proposedFee;
      }
      
      if (proposedFee > maxAllowedFee) {
        isLegal = false;
        recommendation = `Your proposed fee of $${proposedFee} exceeds ${state}'s legal maximum of $${maxAllowedFee} per application.`;
      } else {
        recommendation = `Your proposed fee of $${proposedFee} is legal. Maximum allowed: $${maxAllowedFee}`;
      }
    } else {
      if (stateLaw.limitations.includes('Actual')) {
        if (proposedFee > actualScreeningCost) {
          isLegal = false;
          recommendation = `${state} only allows charging actual screening costs ($${actualScreeningCost}). Your fee of $${proposedFee} exceeds actual costs.`;
          maxAllowedFee = actualScreeningCost;
        } else {
          recommendation = `Legal if you can document actual screening costs of $${proposedFee}. ${state} allows actual cost recovery only.`;
        }
        totalFeeAllowed = actualScreeningCost * (stateLaw.perAdult ? numberOfApplicants : 1);
        totalFeeProposed = proposedFee * (stateLaw.perAdult ? numberOfApplicants : 1);
      } else {
        const reasonableCap = 75;
        if (proposedFee > reasonableCap) {
          recommendation = `No state cap in ${state}, but fees over $75 may be challenged as unreasonable. Your fee: $${proposedFee}`;
        } else {
          recommendation = `No state cap. Your fee of $${proposedFee} appears reasonable (typically $25-75).`;
        }
        maxAllowedFee = reasonableCap;
        totalFeeAllowed = reasonableCap * (stateLaw.perAdult ? numberOfApplicants : 1);
        totalFeeProposed = proposedFee * (stateLaw.perAdult ? numberOfApplicants : 1);
      }
    }

    const refundRequired = stateLaw.refundable === true || stateLaw.refundable === 'partial';
    const refundDetails = refundRequired ? 
      (stateLaw.refundable === 'partial' ? 'Partial refund required in some circumstances' : 'Full refund may be required') :
      'No refund required';

    setResults({
      isLegal,
      maxAllowedFee,
      totalFeeAllowed,
      totalFeeProposed,
      recommendation,
      stateLaw,
      refundRequired,
      refundDetails
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-indigo-600 p-3 rounded-full">
            <FileText className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rental Application Fee Checker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Check state-by-state rental application fee limits and requirements. Ensure your application fees comply with state laws.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Fee Checker
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Compliance
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
                Application Fee Information
              </CardTitle>
              <CardDescription>
                Enter your state and proposed application fee
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
                  <Label htmlFor="proposedFee">Proposed Application Fee ($)</Label>
                  <Input
                    id="proposedFee"
                    type="number"
                    value={proposedFee}
                    onChange={(e) => setProposedFee(Number(e.target.value))}
                    placeholder="45"
                  />
                  <p className="text-sm text-gray-500 mt-1">Per application</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="numberOfApplicants">Number of Applicants</Label>
                  <Input
                    id="numberOfApplicants"
                    type="number"
                    value={numberOfApplicants}
                    onChange={(e) => setNumberOfApplicants(Number(e.target.value))}
                    placeholder="1"
                  />
                  <p className="text-sm text-gray-500 mt-1">Adults 18+ on application</p>
                </div>
                <div>
                  <Label htmlFor="actualScreeningCost">Actual Screening Cost ($)</Label>
                  <Input
                    id="actualScreeningCost"
                    type="number"
                    value={actualScreeningCost}
                    onChange={(e) => setActualScreeningCost(Number(e.target.value))}
                    placeholder="30"
                  />
                  <p className="text-sm text-gray-500 mt-1">Credit report + background check</p>
                </div>
              </div>
              <Button onClick={checkApplicationFee} className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Check Fee Legality
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
                    Compliance Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <Badge className={results.isLegal ? 'bg-green-500 text-white text-lg px-4 py-2' : 'bg-red-500 text-white text-lg px-4 py-2'}>
                      {results.isLegal ? '✓ COMPLIANT' : '✗ NON-COMPLIANT'}
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
                    <CardTitle>Fee Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Your Fee Per Application:</span>
                      <span className="font-semibold">${proposedFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Applicants:</span>
                      <span className="font-semibold">{numberOfApplicants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Fees Collected:</span>
                      <span className="font-semibold">${results.totalFeeProposed}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="text-gray-600">Max Legal Per Application:</span>
                      <span className="font-bold text-lg text-green-600">${results.maxAllowedFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Total Legal Fees:</span>
                      <span className="font-bold text-lg text-green-600">${results.totalFeeAllowed}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{state} State Law</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Fee Cap:</p>
                      <p className="font-semibold">
                        {results.stateLaw.maxFee ? `$${results.stateLaw.maxFee}` : 'No state cap'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Per Adult Applicant:</p>
                      <p className="font-semibold">{results.stateLaw.perAdult ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Refund Required:</p>
                      <p className="font-semibold">{results.refundDetails}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Limitations:</p>
                      <p className="text-sm">{results.stateLaw.limitations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Additional Notes:</p>
                      <p className="text-sm">{results.stateLaw.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Key Compliance Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Disclose application fee amount before collecting payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Only charge fees allowed by state law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Provide receipt or documentation of screening costs if required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Process refunds if required by state law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Check for local city/county ordinances that may be stricter</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Check your application fee to see compliance analysis</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Rental Application Fees by State</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Are Rental Application Fees?</h3>
                  <p>Rental application fees are non-refundable charges that landlords collect from prospective tenants to cover the costs of processing rental applications. These fees typically cover expenses such as credit reports, background checks, criminal history searches, eviction history reports, and administrative time spent reviewing applications and verifying information.</p>
                  <p>Application fees are distinct from other rental charges like security deposits, pet deposits, or first month's rent. While security deposits are refundable and held in trust, application fees are generally non-refundable payments that compensate landlords for their time and out-of-pocket expenses in evaluating potential tenants.</p>
                  <p>The legality and amount of application fees vary dramatically by state. Some states have strict caps on how much can be charged, while others have no limits but require fees to be "reasonable." Understanding your state's specific requirements is essential to avoid legal violations, tenant complaints, and potential lawsuits.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why States Regulate Application Fees</h3>
                  <p>States regulate rental application fees to protect consumers from predatory practices and to ensure fairness in the housing market. Without regulation, some landlords could charge excessive application fees as a profit center rather than a cost-recovery mechanism. This is particularly problematic in tight rental markets where desperate applicants might pay hundreds of dollars in application fees across multiple properties without securing housing.</p>
                  <p><strong>Consumer Protection Concerns:</strong> Application fees can create barriers to housing access, particularly for low-income applicants who may not be able to afford multiple $100+ application fees while searching for housing. States with caps recognize that excessive fees can price vulnerable populations out of the rental market entirely.</p>
                  <p><strong>Preventing Application Fee Scams:</strong> Some unscrupulous operators have been known to collect application fees from dozens of applicants for properties that were never actually available for rent. State regulations help prevent these scams by limiting fees and requiring disclosure of how fees are used.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">States with Strict Application Fee Caps</h3>
                  <p>Several states have enacted specific dollar limits on application fees to prevent excessive charges:</p>
                  <h4 className="font-semibold mt-4 mb-2">New York: $20 Maximum</h4>
                  <p>New York imposes one of the strictest caps in the nation, limiting application fees to just $20 per application. This reflects the state's strong tenant protections and recognition that screening costs have decreased significantly with online background check services. Landlords who charge more than $20 risk fines and tenant lawsuits.</p>
                  <h4 className="font-semibold mt-4 mb-2">Maryland: $25 Maximum</h4>
                  <p>Maryland caps application fees at $25 per application. This modest cap is designed to cover basic credit and background screening costs while preventing fees from becoming a barrier to housing access.</p>
                  <h4 className="font-semibold mt-4 mb-2">Virginia: $50 Maximum</h4>
                  <p>Virginia allows up to $50 per application, which generally covers comprehensive screening including credit reports, criminal background checks, and eviction history searches.</p>
                  <h4 className="font-semibold mt-4 mb-2">Washington: $20 Per Adult with Refund Requirement</h4>
                  <p>Washington limits fees to $20 per adult applicant and requires landlords to refund the fee if the application is denied. This unique refund requirement shifts the cost of screening to landlords who reject applicants, incentivizing efficient and fair screening processes.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">States Requiring "Actual Cost" Recovery Only</h3>
                  <p>Some states don't impose dollar caps but restrict application fees to actual, documented screening costs:</p>
                  <h4 className="font-semibold mt-4 mb-2">California</h4>
                  <p>California prohibits landlords from charging application fees that exceed their actual screening costs. If a landlord pays $30 for a combined credit and background check, they cannot charge more than $30 as an application fee. California also requires landlords to provide applicants with a receipt showing how the fee was used if requested. This transparency requirement prevents landlords from inflating fees for profit.</p>
                  <h4 className="font-semibold mt-4 mb-2">Massachusetts</h4>
                  <p>Massachusetts similarly restricts application fees to actual and reasonable costs incurred in screening the applicant. Landlords must be prepared to document these costs if challenged.</p>
                  <h4 className="font-semibold mt-4 mb-2">Tennessee</h4>
                  <p>Tennessee allows landlords to charge actual screening costs but caps fees at $50 if the landlord cannot document actual costs. This creates an incentive for transparency while providing a reasonable ceiling.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">States with No Specific Caps</h3>
                  <p>Many states have no statutory caps on application fees but require that fees be "reasonable." In these states, what constitutes a reasonable fee is determined by:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Market Standards:</strong> What other landlords in the area are charging (typically $25-$75)</li>
                    <li><strong>Actual Costs:</strong> The documented cost of screening services used</li>
                    <li><strong>Proportionality:</strong> Whether the fee is proportionate to the property's rent level</li>
                    <li><strong>Court Precedent:</strong> How local courts have ruled on challenged fees</li>
                  </ul>
                  <p>States without caps include Texas, Florida, Georgia, Ohio, Illinois, and many others. In these states, landlords typically charge $40-$100 per application, though some luxury properties may charge more if justified by comprehensive screening processes.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Per-Adult vs. Per-Application Fees</h3>
                  <p>An important distinction exists between states that allow fees per adult applicant versus per application:</p>
                  <h4 className="font-semibold mt-4 mb-2">Per-Adult States</h4>
                  <p>States like California, Oregon, Washington, and Tennessee allow landlords to charge screening fees for each adult applicant (typically 18+). This makes sense because each adult requires separate credit checks, background checks, and reference verification. A couple applying together would each pay the application fee.</p>
                  <h4 className="font-semibold mt-4 mb-2">Per-Application States</h4>
                  <p>In states like New York and Maryland, the cap applies per application rather than per adult. This means a couple applying together pays only one $20 fee (in New York) total, not $20 each. This can significantly reduce revenue for landlords screening multiple-adult households but provides better protection for applicants.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Requirements</h3>
                  <p>Most states treat application fees as non-refundable, but important exceptions exist:</p>
                  <h4 className="font-semibold mt-4 mb-2">Washington State Refunds</h4>
                  <p>Washington requires landlords to refund application fees if the applicant is denied. This shifts screening costs to the landlord when they reject applicants, encouraging thorough but efficient screening processes.</p>
                  <h4 className="font-semibold mt-4 mb-2">Oregon Partial Refunds</h4>
                  <p>Oregon requires refunds if the landlord does not actually screen the applicant or if the applicant withdraws the application before screening occurs. This prevents landlords from collecting fees they never actually use for screening.</p>
                  <h4 className="font-semibold mt-4 mb-2">Voluntary Refund Policies</h4>
                  <p>Some landlords voluntarily refund application fees to denied applicants as a goodwill gesture, even where not required by law. This can improve the landlord's reputation and reduce complaints.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Screening Costs Are Included?</h3>
                  <p>Application fees typically cover the following screening expenses:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Credit Reports:</strong> $10-30 per applicant from major bureaus (Experian, TransUnion, Equifax)</li>
                    <li><strong>Criminal Background Checks:</strong> $5-20 for state and national database searches</li>
                    <li><strong>Eviction History Reports:</strong> $5-15 from specialty tenant screening companies</li>
                    <li><strong>Employment Verification:</strong> Time spent calling employers or reviewing pay stubs</li>
                    <li><strong>Landlord References:</strong> Time spent contacting previous landlords</li>
                    <li><strong>Administrative Time:</strong> Staff time reviewing applications and documentation</li>
                    <li><strong>Screening Platform Fees:</strong> Costs of tenant screening software subscriptions</li>
                  </ul>
                  <p>The total actual cost typically ranges from $25-50 per applicant when using professional screening services. Landlords who conduct DIY screening may have lower direct costs but higher time investments.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Ordinances and City-Specific Rules</h3>
                  <p>Even in states without application fee caps, cities may impose their own restrictions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Seattle, WA:</strong> Must comply with state $20 cap plus additional disclosure requirements</li>
                    <li><strong>San Francisco, CA:</strong> Actual cost only, plus must provide detailed receipt</li>
                    <li><strong>Portland, OR:</strong> Enhanced screening notice requirements and refund rules</li>
                    <li><strong>Austin, TX:</strong> Special rules for certain subsidized or affordable housing</li>
                    <li><strong>Chicago, IL:</strong> Additional tenant protections beyond state law</li>
                  </ul>
                  <p>Landlords must research both state and local rules to ensure full compliance.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Disclosure Requirements</h3>
                  <p>Most states require landlords to disclose application fees before collecting them. Best practices include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clearly stating the fee amount in property advertisements</li>
                    <li>Providing written notice of the fee before accepting applications</li>
                    <li>Explaining what the fee covers (screening, credit check, etc.)</li>
                    <li>Disclosing whether the fee is refundable or non-refundable</li>
                    <li>Providing receipts showing how fees were used (if required by state)</li>
                  </ul>
                  <p>Failing to provide proper disclosure can result in the fee being deemed illegal and subject to refund.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Risks of Excessive Application Fees</h3>
                  <p>Landlords who charge excessive or illegal application fees face several risks:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tenant Lawsuits:</strong> Applicants can sue to recover illegal fees, often with statutory damages multipliers (2x-3x the amount charged)</li>
                    <li><strong>State Fines:</strong> Some states impose civil penalties for violating fee caps</li>
                    <li><strong>Class Action Risk:</strong> If a landlord routinely overcharges, multiple applicants may join together in a class action lawsuit</li>
                    <li><strong>Reputation Damage:</strong> Online reviews and tenant advocacy groups publicize illegal fee practices</li>
                    <li><strong>Fair Housing Claims:</strong> If fees are applied inconsistently, discrimination claims may arise</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Landlords</h3>
                  <p>To ensure compliance and maintain good tenant relations, landlords should:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Research State and Local Laws:</strong> Understand both state statutes and city ordinances</li>
                    <li><strong>Charge Reasonable Fees:</strong> Even where no cap exists, keep fees at or below $75</li>
                    <li><strong>Document Screening Costs:</strong> Keep records of credit report costs, background check fees, and administrative time</li>
                    <li><strong>Disclose Fees Upfront:</strong> Clearly communicate fees before accepting applications</li>
                    <li><strong>Provide Receipts:</strong> Offer documentation of how fees were used, especially in states requiring it</li>
                    <li><strong>Apply Fees Consistently:</strong> Charge the same fee to all applicants to avoid discrimination claims</li>
                    <li><strong>Consider Online Screening:</strong> Many online platforms allow tenants to pay for their own screening directly, avoiding fee regulations</li>
                    <li><strong>Review Annually:</strong> State and local laws change; review fee structures each year</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Alternative Screening Models</h3>
                  <p>To avoid application fee issues, some landlords are adopting alternative models:</p>
                  <h4 className="font-semibold mt-4 mb-2">Tenant-Paid Screening</h4>
                  <p>Platforms like RentSpree and MyRental allow applicants to pay for their own screening reports and share them with multiple landlords. This eliminates the need for landlords to collect application fees at all.</p>
                  <h4 className="font-semibold mt-4 mb-2">Included in Rent</h4>
                  <p>Some landlords build screening costs into their rental pricing rather than charging separate application fees, simplifying the process and avoiding fee regulations.</p>
                  <h4 className="font-semibold mt-4 mb-2">First-Come Acceptance</h4>
                  <p>Landlords who use a first-qualified-applicant approach screen only one applicant at a time, reducing screening costs and potentially eliminating the need for fees from rejected applicants.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">State-by-State Summary Table</h3>
                  <p>Here's a quick reference for states with specific caps or requirements:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4 text-sm space-y-2">
                    <p><strong>New York:</strong> $20 maximum per application</p>
                    <p><strong>Maryland:</strong> $25 maximum per application</p>
                    <p><strong>Virginia:</strong> $50 maximum per application</p>
                    <p><strong>Washington:</strong> $20 per adult; must refund if denied</p>
                    <p><strong>California:</strong> Actual screening costs only; must provide receipt if requested</p>
                    <p><strong>Oregon:</strong> Actual costs; must refund if not screened or application withdrawn</p>
                    <p><strong>Tennessee:</strong> Actual costs or $50 if costs not documented</p>
                    <p><strong>Massachusetts:</strong> Actual and reasonable costs only</p>
                    <p><strong>All Other States:</strong> No specific cap; fees must be "reasonable" (typically $25-75)</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p>Rental application fees serve a legitimate purpose in compensating landlords for screening costs, but they are subject to significant state and local regulation. The key principles for compliance are:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Know your state's specific cap or actual-cost requirement</li>
                    <li>Check for local city/county ordinances that may be stricter</li>
                    <li>Disclose fees clearly before collecting them</li>
                    <li>Keep fees reasonable even where no cap exists (typically $25-75)</li>
                    <li>Document screening costs in case of challenges</li>
                    <li>Provide receipts if required by state law</li>
                    <li>Apply fees consistently to all applicants</li>
                  </ul>
                  <p className="mt-4">By using this application fee checker and following the legal guidelines outlined in this guide, landlords can implement compliant fee policies that cover legitimate screening costs while respecting tenant rights and avoiding legal risks. When in doubt, consult with a local real estate attorney to ensure your application fee practices comply with all applicable laws.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
