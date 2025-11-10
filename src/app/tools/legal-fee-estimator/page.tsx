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
import { Calculator, Scale, DollarSign, FileText, TrendingUp, AlertCircle, CheckCircle, Info, Briefcase, BookOpen, Building } from 'lucide-react';

interface LegalFeeCalculation {
  totalEstimate: number;
  hourlyFeeEstimate: number;
  flatFeeEstimate: number;
  recommendedStructure: string;
  breakdown: {
    baseFee: number;
    documentReview: number;
    negotiation: number;
    titleWork: number;
    closingAttendance: number;
    additionalServices: number;
  };
  hourlyBreakdown: {
    estimatedHours: number;
    hourlyRate: number;
  };
  comparisons: {
    lowEnd: number;
    average: number;
    highEnd: number;
  };
  recommendations: string[];
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Legal Fee Estimator (Real Estate)',
    description: 'Estimate real estate attorney fees for property transactions including purchase, sale, refinance, contract review, and title work Make informed property decisions with accurate calculations.',
  };
}

export default function LegalFeeEstimator() {
  const [transactionType, setTransactionType] = useState<string>('purchase');
  const [propertyValue, setPropertyValue] = useState<number>(400000);
  const [propertyType, setPropertyType] = useState<string>('residential');
  const [transactionComplexity, setTransactionComplexity] = useState<string>('standard');
  const [state, setState] = useState<string>('Texas');
  const [isCommercial, setIsCommercial] = useState<boolean>(false);
  const [needsTitleReview, setNeedsTitleReview] = useState<boolean>(true);
  const [needsContractReview, setNeedsContractReview] = useState<boolean>(true);
  const [needsNegotiation, setNeedsNegotiation] = useState<boolean>(true);
  const [needsClosingAttendance, setNeedsClosingAttendance] = useState<boolean>(true);
  const [needsDueDiligence, setNeedsDueDiligence] = useState<boolean>(false);
  const [needsEntityFormation, setNeedsEntityFormation] = useState<boolean>(false);
  const [needs1031Exchange, setNeeds1031Exchange] = useState<boolean>(false);
  const [hasLitigationRisk, setHasLitigationRisk] = useState<boolean>(false);
  const [numberOfParties, setNumberOfParties] = useState<number>(2);
  const [hasFinancing, setHasFinancing] = useState<boolean>(true);
  const [experienceLevel, setExperienceLevel] = useState<string>('mid-level');
  const [firmType, setFirmType] = useState<string>('small-firm');
  const [urgency, setUrgency] = useState<string>('normal');

  const [calculation, setCalculation] = useState<LegalFeeCalculation | null>(null);

  const calculateLegalFees = () => {
    let hourlyRate = 0;
    
    switch (experienceLevel) {
      case 'junior':
        hourlyRate = 200;
        break;
      case 'mid-level':
        hourlyRate = 300;
        break;
      case 'senior':
        hourlyRate = 450;
        break;
      case 'partner':
        hourlyRate = 600;
        break;
      default:
        hourlyRate = 300;
    }

    const firmMultiplier = {
      'solo': 0.8,
      'small-firm': 1.0,
      'mid-firm': 1.3,
      'large-firm': 1.6,
    }[firmType] || 1.0;

    hourlyRate *= firmMultiplier;

    const stateMultiplier: { [key: string]: number } = {
      'New York': 1.4,
      'California': 1.35,
      'Massachusetts': 1.25,
      'Illinois': 1.15,
      'Texas': 1.0,
      'Florida': 1.05,
      'Georgia': 0.95,
      'Ohio': 0.9,
    };

    hourlyRate *= (stateMultiplier[state] || 1.0);

    let baseFlatFee = 0;
    let estimatedHours = 0;

    switch (transactionType) {
      case 'purchase':
        baseFlatFee = 1500;
        estimatedHours = 8;
        break;
      case 'sale':
        baseFlatFee = 1200;
        estimatedHours = 6;
        break;
      case 'refinance':
        baseFlatFee = 800;
        estimatedHours = 4;
        break;
      case 'contract-review':
        baseFlatFee = 500;
        estimatedHours = 3;
        break;
      case 'lease-review':
        baseFlatFee = 600;
        estimatedHours = 4;
        break;
      case 'lease-negotiation':
        baseFlatFee = 1000;
        estimatedHours = 6;
        break;
      default:
        baseFlatFee = 1500;
        estimatedHours = 8;
    }

    if (propertyType === 'commercial') {
      baseFlatFee *= 2.0;
      estimatedHours *= 1.8;
    } else if (propertyType === 'multi-family') {
      baseFlatFee *= 1.5;
      estimatedHours *= 1.5;
    } else if (propertyType === 'land') {
      baseFlatFee *= 1.3;
      estimatedHours *= 1.2;
    }

    const complexityMultiplier = {
      'simple': 0.8,
      'standard': 1.0,
      'complex': 1.4,
      'very-complex': 2.0,
    }[transactionComplexity] || 1.0;

    baseFlatFee *= complexityMultiplier;
    estimatedHours *= complexityMultiplier;

    if (propertyValue > 1000000) {
      const valueFactor = 1 + ((propertyValue - 1000000) / 5000000) * 0.3;
      baseFlatFee *= Math.min(valueFactor, 1.5);
      estimatedHours *= Math.min(valueFactor, 1.3);
    }

    let documentReviewFee = 0;
    let documentReviewHours = 0;
    if (needsContractReview) {
      documentReviewFee = 400;
      documentReviewHours = 2;
    }

    let titleWorkFee = 0;
    let titleWorkHours = 0;
    if (needsTitleReview) {
      titleWorkFee = 350;
      titleWorkHours = 1.5;
    }

    let negotiationFee = 0;
    let negotiationHours = 0;
    if (needsNegotiation) {
      negotiationFee = 600;
      negotiationHours = 3;
    }

    let closingFee = 0;
    let closingHours = 0;
    if (needsClosingAttendance) {
      closingFee = 500;
      closingHours = 2;
    }

    let additionalServicesFee = 0;
    let additionalServicesHours = 0;

    if (needsDueDiligence) {
      additionalServicesFee += 800;
      additionalServicesHours += 4;
    }

    if (needsEntityFormation) {
      additionalServicesFee += 1200;
      additionalServicesHours += 5;
    }

    if (needs1031Exchange) {
      additionalServicesFee += 1500;
      additionalServicesHours += 6;
    }

    if (hasLitigationRisk) {
      additionalServicesFee += 1000;
      additionalServicesHours += 5;
    }

    if (numberOfParties > 2) {
      const extraParties = numberOfParties - 2;
      additionalServicesFee += extraParties * 300;
      additionalServicesHours += extraParties * 1.5;
    }

    if (urgency === 'rush') {
      baseFlatFee *= 1.35;
      estimatedHours *= 1.2;
    } else if (urgency === 'expedited') {
      baseFlatFee *= 1.2;
      estimatedHours *= 1.1;
    }

    const totalFlatFee = 
      baseFlatFee + 
      documentReviewFee + 
      titleWorkFee + 
      negotiationFee + 
      closingFee + 
      additionalServicesFee;

    const totalHours = 
      estimatedHours + 
      documentReviewHours + 
      titleWorkHours + 
      negotiationHours + 
      closingHours + 
      additionalServicesHours;

    const totalHourlyFee = totalHours * hourlyRate;

    const recommendedStructure = totalFlatFee < totalHourlyFee ? 'flat-fee' : 'hourly';

    const totalEstimate = Math.min(totalFlatFee, totalHourlyFee);

    const lowEnd = totalEstimate * 0.75;
    const average = totalEstimate;
    const highEnd = totalEstimate * 1.4;

    const recommendations: string[] = [];

    if (recommendedStructure === 'flat-fee') {
      recommendations.push('A flat fee arrangement may be more cost-effective for this transaction');
    } else {
      recommendations.push('An hourly billing structure may provide better value given the complexity');
    }

    if (transactionComplexity === 'complex' || transactionComplexity === 'very-complex') {
      recommendations.push('Consider requesting a detailed scope of work and cost estimate');
      recommendations.push('Ask about capping hourly fees to manage costs');
    }

    if (propertyValue > 500000) {
      recommendations.push('Given the property value, ensure your attorney has experience with similar transactions');
    }

    if (needsEntityFormation || needs1031Exchange) {
      recommendations.push('Consider consulting a tax attorney or CPA in addition to real estate counsel');
    }

    if (hasLitigationRisk) {
      recommendations.push('Discuss litigation experience and potential additional costs if disputes arise');
    }

    if (urgency === 'rush' || urgency === 'expedited') {
      recommendations.push('Rush services may compromise thoroughness - weigh urgency against risk');
    }

    recommendations.push('Always get fee agreements in writing before proceeding');
    recommendations.push('Ask about payment schedules and what services are included');
    recommendations.push('Request references from clients with similar transactions');
    recommendations.push('Verify attorney is licensed and in good standing with state bar');

    const result: LegalFeeCalculation = {
      totalEstimate,
      hourlyFeeEstimate: totalHourlyFee,
      flatFeeEstimate: totalFlatFee,
      recommendedStructure,
      breakdown: {
        baseFee: baseFlatFee,
        documentReview: documentReviewFee,
        negotiation: negotiationFee,
        titleWork: titleWorkFee,
        closingAttendance: closingFee,
        additionalServices: additionalServicesFee,
      },
      hourlyBreakdown: {
        estimatedHours: totalHours,
        hourlyRate,
      },
      comparisons: {
        lowEnd,
        average,
        highEnd,
      },
      recommendations,
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

  const getFeeLevel = (fee: number): { level: string; color: string; description: string } => {
    if (fee < 1000) return { level: 'Low', color: 'bg-green-500', description: 'Below average legal fees' };
    if (fee < 2500) return { level: 'Moderate', color: 'bg-yellow-500', description: 'Average legal fees' };
    if (fee < 5000) return { level: 'High', color: 'bg-orange-500', description: 'Above average legal fees' };
    return { level: 'Very High', color: 'bg-red-500', description: 'Premium legal fees' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <Scale className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real Estate Legal Fee Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estimate attorney fees for real estate transactions including purchases, sales, refinancing, 
            and contract reviews. Get detailed cost breakdowns for both flat-fee and hourly arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Legal Fee Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="transaction" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="transaction">Transaction</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="attorney">Attorney Info</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

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
                          <option value="purchase">Purchase</option>
                          <option value="sale">Sale</option>
                          <option value="refinance">Refinance</option>
                          <option value="contract-review">Contract Review Only</option>
                          <option value="lease-review">Lease Review</option>
                          <option value="lease-negotiation">Lease Negotiation</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="propertyValue">Property Value</Label>
                        <Input
                          id="propertyValue"
                          type="number"
                          value={propertyValue}
                          onChange={(e) => setPropertyValue(Number(e.target.value))}
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
                          <option value="residential">Residential</option>
                          <option value="condo">Condominium</option>
                          <option value="multi-family">Multi-Family</option>
                          <option value="commercial">Commercial</option>
                          <option value="land">Vacant Land</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="transactionComplexity">Transaction Complexity</Label>
                        <select
                          id="transactionComplexity"
                          value={transactionComplexity}
                          onChange={(e) => setTransactionComplexity(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="simple">Simple/Straightforward</option>
                          <option value="standard">Standard</option>
                          <option value="complex">Complex</option>
                          <option value="very-complex">Very Complex</option>
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
                          <option value="New York">New York</option>
                          <option value="Florida">Florida</option>
                          <option value="Illinois">Illinois</option>
                          <option value="Massachusetts">Massachusetts</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Ohio">Ohio</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="numberOfParties">Number of Parties</Label>
                        <Input
                          id="numberOfParties"
                          type="number"
                          value={numberOfParties}
                          onChange={(e) => setNumberOfParties(Number(e.target.value))}
                          placeholder="2"
                          min="2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency</Label>
                        <select
                          id="urgency"
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="normal">Normal Timeline</option>
                          <option value="expedited">Expedited (2-3 weeks)</option>
                          <option value="rush">Rush (1 week or less)</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="checkbox"
                        id="hasFinancing"
                        checked={hasFinancing}
                        onChange={(e) => setHasFinancing(e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="hasFinancing">Transaction involves financing</Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="services" className="space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">Required Services</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsContractReview"
                          checked={needsContractReview}
                          onChange={(e) => setNeedsContractReview(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsContractReview">Contract review and drafting</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsTitleReview"
                          checked={needsTitleReview}
                          onChange={(e) => setNeedsTitleReview(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsTitleReview">Title examination and opinion</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsNegotiation"
                          checked={needsNegotiation}
                          onChange={(e) => setNeedsNegotiation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsNegotiation">Negotiation assistance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsClosingAttendance"
                          checked={needsClosingAttendance}
                          onChange={(e) => setNeedsClosingAttendance(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsClosingAttendance">Closing attendance</Label>
                      </div>

                      <Separator className="my-4" />

                      <h3 className="text-lg font-semibold">Additional Services</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsDueDiligence"
                          checked={needsDueDiligence}
                          onChange={(e) => setNeedsDueDiligence(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsDueDiligence">Due diligence review</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needsEntityFormation"
                          checked={needsEntityFormation}
                          onChange={(e) => setNeedsEntityFormation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needsEntityFormation">Entity formation (LLC/Corporation)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="needs1031Exchange"
                          checked={needs1031Exchange}
                          onChange={(e) => setNeeds1031Exchange(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="needs1031Exchange">1031 Exchange assistance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hasLitigationRisk"
                          checked={hasLitigationRisk}
                          onChange={(e) => setHasLitigationRisk(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hasLitigationRisk">Litigation risk assessment</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="attorney" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="experienceLevel">Attorney Experience Level</Label>
                        <select
                          id="experienceLevel"
                          value={experienceLevel}
                          onChange={(e) => setExperienceLevel(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="junior">Junior Associate (1-3 years)</option>
                          <option value="mid-level">Mid-Level (4-7 years)</option>
                          <option value="senior">Senior Associate (8-12 years)</option>
                          <option value="partner">Partner (12+ years)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="firmType">Firm Type</Label>
                        <select
                          id="firmType"
                          value={firmType}
                          onChange={(e) => setFirmType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="solo">Solo Practitioner</option>
                          <option value="small-firm">Small Firm (2-10 attorneys)</option>
                          <option value="mid-firm">Mid-Size Firm (11-50 attorneys)</option>
                          <option value="large-firm">Large Firm (50+ attorneys)</option>
                        </select>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={calculateLegalFees} 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      size="lg"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate Legal Fees
                    </Button>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Real Estate Legal Fees</h2>
                      
                      <p className="text-gray-700 mb-4">
                        Legal representation in real estate transactions provides essential protection and expertise, but 
                        understanding fee structures and typical costs helps you budget appropriately and select the right attorney 
                        for your needs. Legal fees can vary dramatically based on transaction complexity, location, and attorney experience.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Fee Structures Explained</h3>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Flat Fees:</strong> Many real estate attorneys offer flat-fee arrangements for standard transactions. 
                        Residential purchases typically range from $800 to $2,500, while sales might cost $600 to $2,000. Flat fees 
                        provide cost certainty and are ideal for straightforward transactions. Ensure you understand exactly what 
                        services are included and what might incur additional charges.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Hourly Billing:</strong> Complex transactions often use hourly billing. Rates vary widely based on 
                        location and experience: $150-$300/hour for junior associates, $250-$450/hour for mid-level attorneys, 
                        $400-$700/hour for senior attorneys and partners. Large firms in major cities command premium rates, while 
                        solo practitioners and small firms may offer more competitive pricing.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Hybrid Arrangements:</strong> Some attorneys combine flat fees for standard services with hourly 
                        rates for additional work. This provides baseline cost certainty while allowing flexibility for unexpected 
                        complexities. Always request a detailed fee agreement outlining what's included in the flat fee.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Typical Services and Costs</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Contract Review and Drafting:</strong> Reviewing purchase agreements, addenda, and related documents 
                        typically costs $400-$800 as a standalone service. If you're using a flat-fee arrangement, this is usually 
                        included. Complex commercial contracts may cost $1,000-$3,000+ depending on length and complexity.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Title Examination:</strong> Attorneys review title reports to identify liens, encumbrances, or defects. 
                        This service typically costs $300-$600 for residential properties, more for commercial. Some attorneys include 
                        basic title review in flat fees but charge extra for resolving title issues.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Closing Attendance:</strong> Having an attorney present at closing provides valuable protection and 
                        ensures documents are properly executed. This typically adds $400-$800 to fees, though some flat-fee 
                        arrangements include attendance. Virtual closings may cost less than in-person representation.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Due Diligence:</strong> For investment properties or commercial transactions, thorough due diligence 
                        review of leases, financials, and property conditions can cost $800-$3,000+. This service is critical for 
                        identifying potential liabilities and negotiating price adjustments.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Factors Affecting Legal Fees</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Transaction Complexity:</strong> Simple residential purchases with clear title and standard contracts 
                        cost less than transactions involving multiple parties, complex financing, or title issues. Commercial 
                        transactions typically cost 50-100% more than comparable residential deals due to additional complexity.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Property Value:</strong> While not always directly proportional, higher-value properties often involve 
                        more complex negotiations and higher stakes, justifying higher legal fees. A $5 million property might have 
                        legal fees of $5,000-$15,000, while a $300,000 home might cost $1,000-$2,500.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Geographic Location:</strong> Legal fees vary significantly by region. Major metropolitan areas like 
                        New York, San Francisco, and Boston have rates 30-60% higher than smaller cities. State laws also matter - 
                        states requiring attorney involvement in closings (like New York and Massachusetts) have more competitive 
                        real estate legal markets.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Timeline and Urgency:</strong> Rush transactions requiring immediate attention may incur 20-50% 
                        premium fees. If you need a contract reviewed within 24 hours or closing documents prepared on short notice, 
                        expect to pay extra for expedited service.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Special Situations</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>1031 Exchanges:</strong> Tax-deferred exchanges require specialized knowledge and precise timing. 
                        Legal fees for 1031 exchanges typically range from $1,500 to $5,000 depending on complexity. This is separate 
                        from qualified intermediary fees and is essential for maintaining tax-deferred status.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Entity Formation:</strong> Creating an LLC or corporation to hold property adds $1,000-$3,000 to 
                        legal costs but provides liability protection and potential tax benefits. Discuss with both your attorney 
                        and CPA whether entity formation makes sense for your situation.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Litigation Risk:</strong> If your transaction involves potential disputes, boundary issues, or 
                        contested ownership, ensure your attorney has litigation experience. Initial assessment might cost $1,000-$2,000, 
                        with additional fees if disputes escalate.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Manage Legal Costs</h3>

                      <p className="text-gray-700 mb-3">
                        Request detailed fee agreements in writing before engaging an attorney. Understand what's included, what's extra, 
                        and how you'll be billed. Ask about payment schedules - many attorneys require retainers upfront with final 
                        payment at closing.
                      </p>

                      <p className="text-gray-700 mb-3">
                        For hourly arrangements, ask about capping fees or setting maximum charges to avoid surprises. Request monthly 
                        invoices detailing time spent on your matter. Don't hesitate to question charges that seem excessive or unclear.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Consider whether you need full-service representation or limited-scope assistance. If you're comfortable handling 
                        some aspects yourself, limited-scope representation for contract review only or specific legal questions can 
                        save significant money.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Selecting the Right Attorney</h3>

                      <p className="text-gray-700 mb-4">
                        Don't base your decision solely on price. An experienced attorney who charges more may save you money by 
                        identifying issues early, negotiating better terms, or preventing costly mistakes. Ask about their experience 
                        with similar transactions, their typical turnaround times, and how they communicate with clients.
                      </p>

                      <p className="text-gray-700 mb-4">
                        Request references from recent clients and verify the attorney is licensed and in good standing with the state 
                        bar. Check if they carry professional liability insurance. For complex transactions, specialized real estate 
                        attorneys provide better value than general practitioners, even if their hourly rates are higher.
                      </p>

                      <p className="text-gray-700">
                        Quality legal representation is an investment in protecting what's often your largest asset. Understanding fee 
                        structures and typical costs helps you budget appropriately while ensuring you receive the legal protection 
                        essential for successful real estate transactions.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {calculation && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Fee Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Estimated Legal Fees</p>
                      <p className="text-4xl font-bold text-purple-600">
                        {formatCurrency(calculation.totalEstimate)}
                      </p>
                      <div className="mt-2">
                        <Badge className={`${getFeeLevel(calculation.totalEstimate).color} text-white`}>
                          {getFeeLevel(calculation.totalEstimate).level}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Recommended: {calculation.recommendedStructure === 'flat-fee' ? 'Flat Fee' : 'Hourly'}
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-gray-700">Fee Comparison</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Flat Fee Total:</span>
                          <span className="font-medium">{formatCurrency(calculation.flatFeeEstimate)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hourly Total:</span>
                          <span className="font-medium">{formatCurrency(calculation.hourlyFeeEstimate)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Hourly Rate:</span>
                          <span>{formatCurrency(calculation.hourlyBreakdown.hourlyRate)}/hour</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Estimated Hours:</span>
                          <span>{calculation.hourlyBreakdown.estimatedHours.toFixed(1)} hours</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-gray-700">Service Breakdown</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Fee:</span>
                          <span className="font-medium">{formatCurrency(calculation.breakdown.baseFee)}</span>
                        </div>
                        {calculation.breakdown.documentReview > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Document Review:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.documentReview)}</span>
                          </div>
                        )}
                        {calculation.breakdown.titleWork > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Title Work:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.titleWork)}</span>
                          </div>
                        )}
                        {calculation.breakdown.negotiation > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Negotiation:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.negotiation)}</span>
                          </div>
                        )}
                        {calculation.breakdown.closingAttendance > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Closing Attendance:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.closingAttendance)}</span>
                          </div>
                        )}
                        {calculation.breakdown.additionalServices > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Additional Services:</span>
                            <span className="font-medium">{formatCurrency(calculation.breakdown.additionalServices)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Fee Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Low End:</span>
                        <span className="font-medium text-green-600">{formatCurrency(calculation.comparisons.lowEnd)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average:</span>
                        <span className="font-medium text-blue-600">{formatCurrency(calculation.comparisons.average)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">High End:</span>
                        <span className="font-medium text-orange-600">{formatCurrency(calculation.comparisons.highEnd)}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-600 mt-3">
                      <Info className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Actual fees may vary based on specific circumstances and attorney selection</span>
                    </div>
                  </CardContent>
                </Card>

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
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}

            {!calculation && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Scale className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Enter transaction details and click Calculate to see your legal fee estimate</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
