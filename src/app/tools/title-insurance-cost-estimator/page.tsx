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
import { 
  Calculator, 
  Shield, 
  DollarSign, 
  Home, 
  FileText, 
  CheckCircle, 
  Info, 
  BookOpen,
  TrendingUp,
  AlertCircle,
  Building,
  Scale
} from 'lucide-react';

interface TitleInsuranceCalculation {
  ownersPolicyPremium: number;
  lendersPolicyPremium: number;
  simultaneousIssuePremium: number;
  titleSearchFee: number;
  settlementFee: number;
  recordingFees: number;
  endorsementsFees: number;
  totalCost: number;
  savingsSimultaneous: number;
  breakdown: {
    basePremium: number;
    riskAdjustments: number;
    endorsements: number;
    searches: number;
    administrative: number;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Title Insurance Cost Estimator',
    description: 'Estimate title insurance costs for home purchase including owner\'s policy, lender\'s policy, and optional endorsements based on purchase price and location',
  };
}

export default function TitleInsuranceCostEstimator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(500000);
  const [loanAmount, setLoanAmount] = useState<number>(400000);
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [state, setState] = useState<string>('Texas');
  const [county, setCounty] = useState<string>('Harris County');
  const [transactionType, setTransactionType] = useState<string>('purchase');
  const [isRefinance, setIsRefinance] = useState<boolean>(false);
  const [yearsOwnedProperty, setYearsOwnedProperty] = useState<number>(0);
  const [needsLendersPolicy, setNeedsLendersPolicy] = useState<boolean>(true);
  const [needsOwnersPolicy, setNeedsOwnersPolicy] = useState<boolean>(true);
  const [propertyLocation, setPropertyLocation] = useState<string>('urban');
  const [titleComplexity, setTitleComplexity] = useState<string>('standard');
  const [additionalEndorsements, setAdditionalEndorsements] = useState<string[]>([]);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState<boolean>(false);

  const [calculation, setCalculation] = useState<TitleInsuranceCalculation | null>(null);

  const endorsementOptions = [
    { id: 'survey', name: 'Survey Coverage', cost: 150 },
    { id: 'zoning', name: 'Zoning Endorsement', cost: 200 },
    { id: 'access', name: 'Access Endorsement', cost: 175 },
    { id: 'comprehensive', name: 'Comprehensive Endorsement', cost: 350 },
    { id: 'environmental', name: 'Environmental Protection', cost: 250 },
    { id: 'subdivision', name: 'Subdivision', cost: 225 }
  ];

  const calculateTitleInsurance = () => {
    const stateRates: { [key: string]: number } = {
      'Texas': 0.00550,
      'California': 0.00115,
      'Florida': 0.00575,
      'New York': 0.00500,
      'Pennsylvania': 0.00400,
      'Ohio': 0.00380,
      'Illinois': 0.00420,
      'Georgia': 0.00225,
      'North Carolina': 0.00200,
      'Arizona': 0.00275
    };

    const baseRate = stateRates[state] || 0.00400;
    
    let ownersBasePremium = purchasePrice * baseRate;
    let lendersBasePremium = loanAmount * (baseRate * 0.60);

    if (propertyType === 'commercial') {
      ownersBasePremium *= 1.25;
      lendersBasePremium *= 1.25;
    } else if (propertyType === 'multi-family') {
      ownersBasePremium *= 1.15;
      lendersBasePremium *= 1.15;
    } else if (propertyType === 'land') {
      ownersBasePremium *= 1.10;
      lendersBasePremium *= 1.10;
    }

    if (titleComplexity === 'complex') {
      ownersBasePremium *= 1.20;
      lendersBasePremium *= 1.15;
    } else if (titleComplexity === 'very-complex') {
      ownersBasePremium *= 1.40;
      lendersBasePremium *= 1.30;
    }

    if (propertyLocation === 'rural') {
      ownersBasePremium *= 1.10;
      lendersBasePremium *= 1.08;
    }

    let riskAdjustment = 0;
    if (transactionType === 'short-sale') {
      riskAdjustment = 300;
    } else if (transactionType === 'foreclosure') {
      riskAdjustment = 500;
    } else if (transactionType === 'estate-sale') {
      riskAdjustment = 250;
    }

    let ownersPolicyPremium = ownersBasePremium + riskAdjustment;
    let lendersPolicyPremium = lendersBasePremium;

    let simultaneousIssuePremium = ownersPolicyPremium;
    if (needsLendersPolicy && needsOwnersPolicy) {
      simultaneousIssuePremium = ownersPolicyPremium + (lendersPolicyPremium * 0.30);
    }

    let titleSearchFee = 300;
    if (titleComplexity === 'complex') titleSearchFee = 500;
    if (titleComplexity === 'very-complex') titleSearchFee = 750;
    if (propertyLocation === 'rural') titleSearchFee += 100;

    const settlementFee = state === 'Texas' ? 0 : 400;

    let recordingFees = 125;
    if (state === 'California' || state === 'New York') recordingFees = 200;
    if (propertyType === 'commercial') recordingFees *= 1.5;

    let endorsementsFees = 0;
    additionalEndorsements.forEach(endorsementId => {
      const endorsement = endorsementOptions.find(e => e.id === endorsementId);
      if (endorsement) endorsementsFees += endorsement.cost;
    });

    let refinanceDiscount = 0;
    if (isRefinance && yearsOwnedProperty <= 10) {
      const discountRate = Math.max(0.10, 0.60 - (yearsOwnedProperty * 0.05));
      refinanceDiscount = ownersPolicyPremium * discountRate;
      ownersPolicyPremium -= refinanceDiscount;
    }

    let totalCost = 0;
    if (needsLendersPolicy && needsOwnersPolicy) {
      totalCost = simultaneousIssuePremium;
    } else if (needsOwnersPolicy) {
      totalCost = ownersPolicyPremium;
    } else if (needsLendersPolicy) {
      totalCost = lendersPolicyPremium;
    }

    totalCost += titleSearchFee + settlementFee + recordingFees + endorsementsFees;

    const savingsSimultaneous = (needsLendersPolicy && needsOwnersPolicy) 
      ? (ownersPolicyPremium + lendersPolicyPremium) - simultaneousIssuePremium 
      : 0;

    const recommendations: string[] = [];
    
    if (needsLendersPolicy && needsOwnersPolicy) {
      recommendations.push('Get simultaneous issue discount by purchasing both policies together');
      recommendations.push(`You save ${formatCurrency(savingsSimultaneous)} with simultaneous issue`);
    }
    
    if (!needsOwnersPolicy) {
      recommendations.push('Consider purchasing owner\'s policy for long-term protection');
      recommendations.push('Lender\'s policy only protects the lender, not you as owner');
    }
    
    if (isRefinance && yearsOwnedProperty <= 10) {
      recommendations.push('You qualify for refinance discount on owner\'s policy');
      recommendations.push(`Discount rate: ${((refinanceDiscount / (ownersPolicyPremium + refinanceDiscount)) * 100).toFixed(0)}%`);
    }
    
    if (titleComplexity === 'complex' || titleComplexity === 'very-complex') {
      recommendations.push('Complex title may require additional review time');
      recommendations.push('Consider thorough title examination before closing');
    }
    
    if (transactionType === 'foreclosure' || transactionType === 'short-sale') {
      recommendations.push('Enhanced title search recommended for distressed property');
      recommendations.push('Budget extra time for title clearance');
    }
    
    recommendations.push('Compare quotes from multiple title companies');
    recommendations.push('Title rates may be negotiable in some states');
    recommendations.push('Review all endorsements for necessary coverage');

    const result: TitleInsuranceCalculation = {
      ownersPolicyPremium,
      lendersPolicyPremium,
      simultaneousIssuePremium,
      titleSearchFee,
      settlementFee,
      recordingFees,
      endorsementsFees,
      totalCost,
      savingsSimultaneous,
      breakdown: {
        basePremium: ownersBasePremium,
        riskAdjustments: riskAdjustment,
        endorsements: endorsementsFees,
        searches: titleSearchFee,
        administrative: settlementFee + recordingFees
      },
      recommendations
    };

    setCalculation(result);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const toggleEndorsement = (endorsementId: string) => {
    setAdditionalEndorsements(prev => 
      prev.includes(endorsementId) 
        ? prev.filter(id => id !== endorsementId)
        : [...prev, endorsementId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Title Insurance Cost Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the cost of owner's and lender's title insurance policies, including search fees, 
            endorsements, and closing costs for your real estate transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Title Insurance Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="transaction">Transaction</TabsTrigger>
                    <TabsTrigger value="coverage">Coverage</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Article
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="purchasePrice">Purchase Price</Label>
                        <Input
                          id="purchasePrice"
                          type="number"
                          value={purchasePrice}
                          onChange={(e) => setPurchasePrice(Number(e.target.value))}
                          placeholder="500000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanAmount">Loan Amount</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          placeholder="400000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <select
                          id="propertyType"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="single-family">Single Family</option>
                          <option value="condo">Condominium</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-family">Multi-Family (2-4 units)</option>
                          <option value="commercial">Commercial</option>
                          <option value="land">Vacant Land</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="propertyLocation">Property Location</Label>
                        <select
                          id="propertyLocation"
                          value={propertyLocation}
                          onChange={(e) => setPropertyLocation(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="urban">Urban</option>
                          <option value="suburban">Suburban</option>
                          <option value="rural">Rural</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="Texas">Texas</option>
                          <option value="California">California</option>
                          <option value="Florida">Florida</option>
                          <option value="New York">New York</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Ohio">Ohio</option>
                          <option value="Illinois">Illinois</option>
                          <option value="Georgia">Georgia</option>
                          <option value="North Carolina">North Carolina</option>
                          <option value="Arizona">Arizona</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          value={county}
                          onChange={(e) => setCounty(e.target.value)}
                          placeholder="Harris County"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="transaction" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="transactionType">Transaction Type</Label>
                        <select
                          id="transactionType"
                          value={transactionType}
                          onChange={(e) => setTransactionType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="purchase">Standard Purchase</option>
                          <option value="refinance">Refinance</option>
                          <option value="cash-purchase">Cash Purchase</option>
                          <option value="short-sale">Short Sale</option>
                          <option value="foreclosure">Foreclosure/REO</option>
                          <option value="estate-sale">Estate Sale</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="titleComplexity">Title Complexity</Label>
                        <select
                          id="titleComplexity"
                          value={titleComplexity}
                          onChange={(e) => setTitleComplexity(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="standard">Standard</option>
                          <option value="complex">Complex (liens, easements)</option>
                          <option value="very-complex">Very Complex (multiple issues)</option>
                        </select>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isRefinance"
                          checked={isRefinance}
                          onChange={(e) => setIsRefinance(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="isRefinance">This is a refinance transaction</Label>
                      </div>

                      {isRefinance && (
                        <div>
                          <Label htmlFor="yearsOwnedProperty">Years Owned Property</Label>
                          <Input
                            id="yearsOwnedProperty"
                            type="number"
                            value={yearsOwnedProperty}
                            onChange={(e) => setYearsOwnedProperty(Number(e.target.value))}
                            placeholder="5"
                          />
                          <p className="text-xs text-gray-600 mt-1">
                            Properties owned ≤10 years may qualify for refinance discount
                          </p>
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isFirstTimeBuyer"
                          checked={isFirstTimeBuyer}
                          onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="isFirstTimeBuyer">First-time home buyer</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="coverage" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Policy Types</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="needsOwnersPolicy"
                              checked={needsOwnersPolicy}
                              onChange={(e) => setNeedsOwnersPolicy(e.target.checked)}
                              className="rounded"
                            />
                            <Label htmlFor="needsOwnersPolicy">Owner's Title Insurance Policy</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="needsLendersPolicy"
                              checked={needsLendersPolicy}
                              onChange={(e) => setNeedsLendersPolicy(e.target.checked)}
                              className="rounded"
                            />
                            <Label htmlFor="needsLendersPolicy">Lender's Title Insurance Policy</Label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-3">Additional Endorsements</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Select optional endorsements for expanded coverage
                        </p>
                        <div className="space-y-2">
                          {endorsementOptions.map(endorsement => (
                            <div key={endorsement.id} className="flex items-center justify-between p-2 border rounded hover:bg-gray-50">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id={`endorsement-${endorsement.id}`}
                                  checked={additionalEndorsements.includes(endorsement.id)}
                                  onChange={() => toggleEndorsement(endorsement.id)}
                                  className="rounded"
                                />
                                <Label htmlFor={`endorsement-${endorsement.id}`} className="cursor-pointer">
                                  {endorsement.name}
                                </Label>
                              </div>
                              <span className="text-sm font-semibold">
                                +{formatCurrency(endorsement.cost)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold mb-6">Understanding Title Insurance Costs</h2>
                      
                      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                        <div className="flex">
                          <Info className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-purple-800 mb-2">Key Takeaways</h3>
                            <ul className="text-purple-700 space-y-1">
                              <li>• Title insurance is a one-time premium paid at closing</li>
                              <li>• Owner's policy protects you; lender's policy protects the lender</li>
                              <li>• Simultaneous issue of both policies saves money</li>
                              <li>• Costs vary significantly by state and property value</li>
                              <li>• Title insurance protects against ownership disputes and liens</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">What is Title Insurance?</h3>
                      <p className="mb-4">
                        Title insurance is a specialized insurance product that protects real estate owners and lenders 
                        against financial loss from defects in title to real property. Unlike other insurance types that 
                        protect against future events, title insurance protects against past events that could affect 
                        property ownership. It's a one-time premium paid at closing that provides coverage for as long 
                        as you or your heirs own the property.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Types of Title Insurance</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Owner's Policy</h4>
                      <p className="mb-4">
                        An owner's title insurance policy protects the property buyer. It covers the full purchase price 
                        and remains in effect as long as you or your heirs have an interest in the property. This policy 
                        protects against losses from title defects, liens, and encumbrances that existed before you 
                        purchased the property. The owner's policy is optional but strongly recommended.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Lender's Policy</h4>
                      <p className="mb-4">
                        A lender's policy protects the mortgage lender's investment in the property. It's typically 
                        required by lenders as a condition of the mortgage. Coverage equals the loan amount and decreases 
                        as the mortgage is paid down. This policy does not protect the property owner - only the lender's 
                        financial interest.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Cost Factors</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">State Variation</h4>
                      <p className="mb-4">
                        Title insurance costs vary dramatically by state. Some states regulate title insurance rates 
                        (rate-regulated states like Texas, Florida, and New Mexico), while others allow companies to set 
                        their own rates (file-and-use or competitive-rate states). In regulated states, all companies 
                        charge the same rate. In competitive states, shopping around can save hundreds or thousands of 
                        dollars.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Property Value</h4>
                      <p className="mb-4">
                        Title insurance premiums are typically calculated as a percentage of the purchase price or loan 
                        amount. Higher-value properties pay higher premiums, though the rate often decreases as property 
                        value increases. Most states use a tiered rate structure where the rate per thousand dollars 
                        decreases at higher value thresholds.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Simultaneous Issue Rate</h4>
                      <p className="mb-4">
                        When both owner's and lender's policies are issued simultaneously, significant savings occur. 
                        The lender's policy is typically issued at 30-40% of its normal cost when purchased with an 
                        owner's policy. This is because much of the cost involves the title search and examination, 
                        which only needs to be done once for both policies.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">What Title Insurance Covers</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Standard Coverage</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Forged deeds, releases, or wills</li>
                        <li>Undisclosed or missing heirs</li>
                        <li>Instruments executed under invalid or expired power of attorney</li>
                        <li>Mistakes in recording legal documents</li>
                        <li>Misinterpretations of wills</li>
                        <li>Deeds by persons of unsound mind or minors</li>
                        <li>Deeds by persons supposedly single but actually married</li>
                        <li>Fraud or impersonation</li>
                        <li>Undisclosed liens and encumbrances</li>
                        <li>Defective acknowledgments</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3">Enhanced Coverage (with Endorsements)</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Survey-related issues and boundary disputes</li>
                        <li>Zoning violations and setback issues</li>
                        <li>Access problems to/from the property</li>
                        <li>Subdivision map violations</li>
                        <li>Building permit violations</li>
                        <li>Encroachments onto neighboring property</li>
                        <li>Mineral rights issues</li>
                        <li>Environmental protection liens</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">The Title Search Process</h3>
                      <p className="mb-4">
                        Before issuing a title insurance policy, companies conduct a thorough title search. This examines 
                        public records including deeds, court records, property indexes, tax records, and other documents 
                        to verify legal ownership and identify any claims, liens, or encumbrances on the property. The 
                        search typically goes back 50+ years or to the property's origin.
                      </p>

                      <p className="mb-4">
                        Title professionals then examine the findings to determine if the title is "clear" or if issues 
                        need resolution before closing. Common issues include unpaid property taxes, contractor liens, 
                        judgment liens, easements, restrictions, or ownership disputes. Most issues can be resolved 
                        before closing, but some may require negotiation or legal action.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Additional Closing Costs</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Title Search and Examination Fees</h4>
                      <p className="mb-4">
                        Beyond the insurance premium, you'll pay for the actual title search and examination. This 
                        typically costs $200-$500 for residential properties but can be much higher for complex titles, 
                        commercial properties, or rural land. These fees cover the professional work of searching and 
                        analyzing public records.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Settlement or Closing Fees</h4>
                      <p className="mb-4">
                        Many title companies charge a settlement fee for coordinating the closing process. This covers 
                        administrative costs, document preparation, and the closing agent's time. Fees typically range 
                        from $300-$600 but vary by location and property type.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Recording Fees</h4>
                      <p className="mb-4">
                        Recording fees are charged by local government offices to officially record the deed and mortgage 
                        in public records. These are not controlled by title companies and vary by jurisdiction. Typical 
                        costs range from $50-$250 depending on the number of documents and local fee structures.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">When and How to Buy Title Insurance</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">During Purchase</h4>
                      <p className="mb-4">
                        Title insurance is typically purchased during the real estate closing process. The buyer usually 
                        pays for the lender's policy (required by the lender), while custom varies by state for who pays 
                        for the owner's policy. In some states, sellers traditionally pay; in others, buyers pay. This 
                        is often negotiable in the purchase agreement.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Refinance Discounts</h4>
                      <p className="mb-4">
                        When refinancing, lenders require a new lender's policy. However, many states offer "refinance 
                        rates" or "reissue rates" that discount the premium if the property was previously insured within 
                        a certain timeframe (usually 10 years). These discounts can range from 10-60% off the standard 
                        premium, depending on how recently the previous policy was issued.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Choosing a Title Company</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Shop Around</h4>
                      <p className="mb-4">
                        In competitive-rate states, shopping around for title insurance can save significant money. Get 
                        quotes from multiple companies and compare total costs, not just premiums. Look at all fees 
                        including search, examination, settlement, and endorsements. Service quality also matters - you 
                        want a company that will efficiently clear title issues and close on time.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Company Selection Factors</h4>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Total cost comparison (premiums plus all fees)</li>
                        <li>Company reputation and financial stability</li>
                        <li>Claims handling reputation</li>
                        <li>Closing coordination and efficiency</li>
                        <li>Technology and online access to documents</li>
                        <li>Customer service responsiveness</li>
                        <li>Experience with your property type</li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Regional Differences</h3>
                      <p className="mb-4">
                        Title insurance practices and costs vary significantly by region. In some states, attorneys 
                        traditionally handle closings; in others, title companies or escrow companies do. Some states 
                        use title insurance exclusively, while others also use attorney opinions on title. Understanding 
                        your state's practices helps you budget appropriately and ask informed questions.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">Common Questions and Misconceptions</h3>
                      
                      <h4 className="text-lg font-semibold mb-3">Isn't the lender's policy enough?</h4>
                      <p className="mb-4">
                        No. The lender's policy only protects the lender's investment. If a title defect arises, the 
                        lender's policy may pay off the mortgage, but you lose your equity and property. An owner's 
                        policy protects your investment.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Why is it a one-time premium?</h4>
                      <p className="mb-4">
                        Unlike other insurance protecting against future events, title insurance insures against past 
                        events. The risk doesn't change over time - either title problems exist or they don't. The 
                        premium pays for comprehensive research to identify and resolve issues before closing, providing 
                        lifetime protection against covered defects.
                      </p>

                      <h4 className="text-lg font-semibold mb-3">Can I switch title companies?</h4>
                      <p className="mb-4">
                        Yes, in most cases. While your lender may suggest a preferred title company, you typically have 
                        the right to choose your own, especially in competitive-rate states where shopping around can 
                        save money. Some purchase agreements may specify the title company, but this is often negotiable.
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
                            <ul className="text-yellow-700 space-y-1">
                              <li>• This calculator provides estimates only; actual costs may vary</li>
                              <li>• State regulations and company rates change periodically</li>
                              <li>• Always get official quotes from title companies before closing</li>
                              <li>• Ask about all fees and available discounts</li>
                              <li>• Review the title commitment carefully before closing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button onClick={calculateTitleInsurance} className="w-full bg-purple-600 hover:bg-purple-700">
                    Calculate Title Insurance Costs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {calculation && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Total Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-600 mb-4">
                        {formatCurrency(calculation.totalCost)}
                      </div>
                      <p className="text-sm text-gray-600">
                        One-time premium at closing
                      </p>
                      {calculation.savingsSimultaneous > 0 && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <div className="text-sm font-semibold text-green-800">Simultaneous Issue Savings</div>
                          <div className="text-2xl font-bold text-green-600">
                            {formatCurrency(calculation.savingsSimultaneous)}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Cost Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {needsOwnersPolicy && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Owner's Policy Premium</span>
                          <span className="font-semibold">{formatCurrency(calculation.ownersPolicyPremium)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    {needsLendersPolicy && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lender's Policy Premium</span>
                          <span className="font-semibold">{formatCurrency(calculation.lendersPolicyPremium)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    {needsOwnersPolicy && needsLendersPolicy && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Simultaneous Issue Total</span>
                          <span className="font-semibold text-green-600">{formatCurrency(calculation.simultaneousIssuePremium)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Title Search Fee</span>
                      <span className="font-semibold">{formatCurrency(calculation.titleSearchFee)}</span>
                    </div>
                    <Separator />
                    {calculation.settlementFee > 0 && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Settlement Fee</span>
                          <span className="font-semibold">{formatCurrency(calculation.settlementFee)}</span>
                        </div>
                        <Separator />
                      </>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recording Fees</span>
                      <span className="font-semibold">{formatCurrency(calculation.recordingFees)}</span>
                    </div>
                    {calculation.endorsementsFees > 0 && (
                      <>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-gray-600">Endorsements</span>
                          <span className="font-semibold">{formatCurrency(calculation.endorsementsFees)}</span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      Premium Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Premium</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.basePremium)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Risk Adjustments</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.riskAdjustments)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Endorsements</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.endorsements)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Search & Exam</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.searches)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Administrative</span>
                      <span className="font-semibold">{formatCurrency(calculation.breakdown.administrative)}</span>
                    </div>
                  </CardContent>
                </Card>

                {calculation.recommendations.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {calculation.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="mt-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                            </div>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {!calculation && (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center py-8">
                    Enter your property and transaction details, then click "Calculate Title Insurance Costs" to see your estimated costs.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
