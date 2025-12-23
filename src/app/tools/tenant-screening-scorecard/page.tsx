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
import { Calculator, UserCheck, TrendingUp, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tenant Screening Scorecard - Evaluate Rental Applicants | Property Tools',
    description: 'Comprehensive tenant screening scorecard with weighted scoring system for credit, income, rental history, background checks, and references. Make data-driven rental decisions.',
  };
}

export default function TenantScreeningScorecard() {
  const [creditScore, setCreditScore] = useState<number>(680);
  const [income, setIncome] = useState<number>(5000);
  const [rentAmount, setRentAmount] = useState<number>(1500);
  const [employmentLength, setEmploymentLength] = useState<number>(24);
  const [previousRentalsCount, setPreviousRentalsCount] = useState<number>(2);
  const [evictionHistory, setEvictionHistory] = useState<string>('none');
  const [latePayments, setLatePayments] = useState<number>(0);
  const [criminalRecord, setCriminalRecord] = useState<string>('none');
  const [references, setReferences] = useState<number>(3);
  const [petsNumber, setPetsNumber] = useState<number>(0);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateScore = () => {
    let scores = {
      creditScore: 0,
      income: 0,
      employment: 0,
      rentalHistory: 0,
      background: 0,
      references: 0
    };
    
    if (creditScore >= 750) scores.creditScore = 100;
    else if (creditScore >= 700) scores.creditScore = 90;
    else if (creditScore >= 650) scores.creditScore = 75;
    else if (creditScore >= 600) scores.creditScore = 60;
    else if (creditScore >= 550) scores.creditScore = 40;
    else scores.creditScore = 20;
    
    const incomeToRentRatio = income / rentAmount;
    if (incomeToRentRatio >= 4) scores.income = 100;
    else if (incomeToRentRatio >= 3) scores.income = 85;
    else if (incomeToRentRatio >= 2.5) scores.income = 70;
    else if (incomeToRentRatio >= 2) scores.income = 50;
    else scores.income = 25;
    
    if (employmentLength >= 24) scores.employment = 100;
    else if (employmentLength >= 12) scores.employment = 80;
    else if (employmentLength >= 6) scores.employment = 60;
    else if (employmentLength >= 3) scores.employment = 40;
    else scores.employment = 20;
    
    let rentalScore = 100;
    if (previousRentalsCount < 1) rentalScore -= 20;
    if (evictionHistory === 'recent') rentalScore -= 50;
    else if (evictionHistory === 'past') rentalScore -= 25;
    if (latePayments > 0) rentalScore -= (latePayments * 10);
    scores.rentalHistory = Math.max(0, rentalScore);
    
    let backgroundScore = 100;
    if (criminalRecord === 'felony') backgroundScore -= 60;
    else if (criminalRecord === 'misdemeanor') backgroundScore -= 30;
    else if (criminalRecord === 'minor') backgroundScore -= 15;
    scores.background = Math.max(0, backgroundScore);
    
    if (references >= 3) scores.references = 100;
    else if (references >= 2) scores.references = 75;
    else if (references >= 1) scores.references = 50;
    else scores.references = 25;
    
    const weights = {
      creditScore: 0.25,
      income: 0.25,
      employment: 0.15,
      rentalHistory: 0.20,
      background: 0.10,
      references: 0.05
    };
    
    const totalScore = Math.round(
      scores.creditScore * weights.creditScore +
      scores.income * weights.income +
      scores.employment * weights.employment +
      scores.rentalHistory * weights.rentalHistory +
      scores.background * weights.background +
      scores.references * weights.references
    );
    
    let recommendation = '';
    let riskLevel = '';
    let depositRecommendation = '';
    
    if (totalScore >= 85) {
      recommendation = 'APPROVE - Excellent candidate with minimal risk';
      riskLevel = 'Very Low';
      depositRecommendation = 'Standard deposit acceptable';
    } else if (totalScore >= 70) {
      recommendation = 'APPROVE - Good candidate with acceptable risk';
      riskLevel = 'Low';
      depositRecommendation = 'Standard deposit recommended';
    } else if (totalScore >= 55) {
      recommendation = 'CONDITIONAL - Consider with higher deposit or co-signer';
      riskLevel = 'Medium';
      depositRecommendation = '1.5x to 2x deposit or require co-signer';
    } else if (totalScore >= 40) {
      recommendation = 'CAUTION - High risk, strong mitigation required';
      riskLevel = 'High';
      depositRecommendation = '2x deposit + co-signer + rent guarantee';
    } else {
      recommendation = 'DENY - Unacceptable risk level';
      riskLevel = 'Very High';
      depositRecommendation = 'Not recommended to approve';
    }
    
    const redFlags = [];
    if (creditScore < 600) redFlags.push('Low credit score (below 600)');
    if (incomeToRentRatio < 2.5) redFlags.push('Insufficient income (below 2.5x rent)');
    if (evictionHistory !== 'none') redFlags.push('Eviction history on record');
    if (latePayments > 2) redFlags.push(`${latePayments} late payments in rental history`);
    if (criminalRecord !== 'none') redFlags.push('Criminal record found');
    if (employmentLength < 6) redFlags.push('Short employment history (under 6 months)');
    if (references < 2) redFlags.push('Insufficient references (less than 2)');
    
    const positiveFactors = [];
    if (creditScore >= 700) positiveFactors.push('Excellent credit score');
    if (incomeToRentRatio >= 3) positiveFactors.push('Strong income-to-rent ratio');
    if (employmentLength >= 24) positiveFactors.push('Stable employment (2+ years)');
    if (evictionHistory === 'none' && latePayments === 0) positiveFactors.push('Perfect rental payment history');
    if (criminalRecord === 'none') positiveFactors.push('Clean background check');
    if (references >= 3) positiveFactors.push('Strong references');
    
    setResults({
      scores,
      totalScore,
      recommendation,
      riskLevel,
      depositRecommendation,
      redFlags,
      positiveFactors,
      incomeToRentRatio
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 55) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getBadgeColor = (score: number) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 55) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-purple-600 p-3 rounded-full">
            <UserCheck className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tenant Screening Scorecard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive tenant evaluation tool with weighted scoring for credit, income, employment, rental history, and background checks.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Screening
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Score & Decision
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Best Practices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Profile</CardTitle>
                <CardDescription>Credit and income verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="creditScore">Credit Score</Label>
                  <Input
                    id="creditScore"
                    type="number"
                    value={creditScore}
                    onChange={(e) => setCreditScore(Number(e.target.value))}
                    placeholder="680"
                  />
                  <p className="text-sm text-gray-500 mt-1">300-850 range</p>
                </div>
                <div>
                  <Label htmlFor="income">Monthly Gross Income</Label>
                  <Input
                    id="income"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    placeholder="5000"
                  />
                </div>
                <div>
                  <Label htmlFor="rentAmount">Monthly Rent</Label>
                  <Input
                    id="rentAmount"
                    type="number"
                    value={rentAmount}
                    onChange={(e) => setRentAmount(Number(e.target.value))}
                    placeholder="1500"
                  />
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm font-semibold">Income-to-Rent Ratio:</p>
                  <p className="text-2xl font-bold">{(income / rentAmount).toFixed(2)}x</p>
                  <p className="text-xs text-gray-600">Recommended: 3x or higher</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Employment History</CardTitle>
                <CardDescription>Employment verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="employmentLength">Employment Length (months)</Label>
                  <Input
                    id="employmentLength"
                    type="number"
                    value={employmentLength}
                    onChange={(e) => setEmploymentLength(Number(e.target.value))}
                    placeholder="24"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current employer</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rental History</CardTitle>
                <CardDescription>Previous landlord verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="previousRentalsCount">Previous Rentals</Label>
                  <Input
                    id="previousRentalsCount"
                    type="number"
                    value={previousRentalsCount}
                    onChange={(e) => setPreviousRentalsCount(Number(e.target.value))}
                    placeholder="2"
                  />
                </div>
                <div>
                  <Label htmlFor="evictionHistory">Eviction History</Label>
                  <Select value={evictionHistory} onValueChange={setEvictionHistory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="past">Past (3+ years ago)</SelectItem>
                      <SelectItem value="recent">Recent (within 3 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="latePayments">Late Payments (last 2 years)</Label>
                  <Input
                    id="latePayments"
                    type="number"
                    value={latePayments}
                    onChange={(e) => setLatePayments(Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Background Check</CardTitle>
                <CardDescription>Criminal and reference verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="criminalRecord">Criminal Record</Label>
                  <Select value={criminalRecord} onValueChange={setCriminalRecord}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="minor">Minor Infractions</SelectItem>
                      <SelectItem value="misdemeanor">Misdemeanor</SelectItem>
                      <SelectItem value="felony">Felony</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="references">References Provided</Label>
                  <Input
                    id="references"
                    type="number"
                    value={references}
                    onChange={(e) => setReferences(Number(e.target.value))}
                    placeholder="3"
                  />
                </div>
                <div>
                  <Label htmlFor="petsNumber">Number of Pets</Label>
                  <Input
                    id="petsNumber"
                    type="number"
                    value={petsNumber}
                    onChange={(e) => setPetsNumber(Number(e.target.value))}
                    placeholder="0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateScore} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Tenant Score
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className={`border-2 ${getBadgeColor(results.totalScore) === 'bg-green-500' ? 'border-green-500' : getBadgeColor(results.totalScore) === 'bg-blue-500' ? 'border-blue-500' : getBadgeColor(results.totalScore) === 'bg-yellow-500' ? 'border-yellow-500' : 'border-red-500'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Overall Tenant Score</span>
                    <Badge className={`${getBadgeColor(results.totalScore)} text-white text-2xl px-6 py-2`}>
                      {results.totalScore}/100
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2"><strong>Recommendation:</strong></p>
                    <p className="text-lg font-semibold">{results.recommendation}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Risk Level:</p>
                      <p className="text-xl font-bold">{results.riskLevel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deposit Recommendation:</p>
                      <p className="text-sm font-semibold">{results.depositRecommendation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Score Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(results.scores).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${value >= 80 ? 'bg-green-500' : value >= 60 ? 'bg-blue-500' : value >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className={`font-bold w-12 text-right ${getScoreColor(value)}`}>{value}/100</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {results.redFlags.length > 0 && (
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Red Flags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.redFlags.map((flag: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-red-600">⚠️</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {results.positiveFactors.length > 0 && (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Positive Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.positiveFactors.map((factor: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Scoring Weight Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Credit Score:</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Income Verification:</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rental History:</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employment Stability:</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Background Check:</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>References:</span>
                      <span className="font-semibold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Complete the screening form to calculate tenant score</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Tenant Screening Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Tenant Screening Matters</h3>
                  <p>Tenant screening is the most critical step in property management. A thorough screening process can save landlords thousands of dollars in lost rent, property damage, legal fees, and eviction costs. Studies show that proper tenant screening reduces eviction rates by up to 90% and late payments by over 70%.</p>
                  <p>The average cost of a bad tenant includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lost rent during vacancy and eviction: $5,000-$15,000</li>
                    <li>Legal and court fees: $2,000-$5,000</li>
                    <li>Property damage and repairs: $1,000-$10,000+</li>
                    <li>Time, stress, and opportunity costs: Incalculable</li>
                  </ul>
                  <p>Investing time and resources into comprehensive screening upfront prevents these costly problems.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance in Tenant Screening</h3>
                  <p>Tenant screening must comply with federal, state, and local Fair Housing laws. Landlords cannot discriminate based on:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Race, color, national origin</li>
                    <li>Religion</li>
                    <li>Sex (including sexual orientation and gender identity)</li>
                    <li>Familial status (families with children under 18)</li>
                    <li>Disability</li>
                    <li>Some states add: marital status, source of income, veteran status</li>
                  </ul>
                  <p><strong>Best Practice:</strong> Apply the same screening criteria uniformly to all applicants. Document your screening process and decisions thoroughly.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Score Evaluation</h3>
                  <p>Credit scores range from 300 to 850 and indicate financial responsibility. For rental purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>750+:</strong> Excellent - Very low risk, likely to pay on time</li>
                    <li><strong>700-749:</strong> Good - Low risk, reliable payment history</li>
                    <li><strong>650-699:</strong> Fair - Acceptable with caution</li>
                    <li><strong>600-649:</strong> Poor - Higher risk, consider co-signer or higher deposit</li>
                    <li><strong>Below 600:</strong> Very Poor - Significant risk, careful evaluation needed</li>
                  </ul>
                  <p><strong>Important:</strong> If you deny an applicant based on credit report information, you must provide an adverse action notice explaining the reasons and providing credit bureau contact information.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Income Verification Standards</h3>
                  <p>The 3x rule: Monthly gross income should be at least 3 times the monthly rent. This ensures tenants can afford rent while covering other living expenses.</p>
                  <p><strong>Income Verification Methods:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recent pay stubs (last 2-3 months)</li>
                    <li>Employment verification letter</li>
                    <li>Tax returns (for self-employed applicants)</li>
                    <li>Bank statements (last 2-3 months)</li>
                    <li>Offer letter for new employment</li>
                  </ul>
                  <p><strong>Alternative Income Sources:</strong> Social Security, disability, child support, alimony, investments. Be careful not to discriminate against legal income sources.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Employment History Verification</h3>
                  <p>Stable employment indicates reliability and consistent income. Contact current and previous employers to verify:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Current employment status</li>
                    <li>Job title and responsibilities</li>
                    <li>Length of employment</li>
                    <li>Income/salary (with applicant authorization)</li>
                    <li>Likelihood of continued employment</li>
                  </ul>
                  <p><strong>Red Flags:</strong> Frequent job changes, gaps in employment, employer refuses to verify, income doesn't match application.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rental History Investigation</h3>
                  <p>Past rental performance is the best predictor of future behavior. Contact previous landlords (not just the current one, who may be motivated to give a positive reference to get rid of a problem tenant).</p>
                  <p><strong>Questions to Ask Previous Landlords:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Did the tenant pay rent on time?</li>
                    <li>How many late payments occurred?</li>
                    <li>Did the tenant give proper notice before moving out?</li>
                    <li>Was the property kept in good condition?</li>
                    <li>Were there any noise complaints or lease violations?</li>
                    <li>Were there any disputes or conflicts?</li>
                    <li>Would you rent to this tenant again?</li>
                    <li>Was any security deposit withheld, and why?</li>
                  </ul>
                  <p><strong>Warning:</strong> Eviction filings appear on rental history reports and are major red flags, even if the eviction was dismissed or settled.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Background Checks and Criminal History</h3>
                  <p>Background checks reveal criminal history, but landlords must be cautious about blanket criminal history policies due to Fair Housing concerns.</p>
                  <p><strong>Legal Framework:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cannot have blanket bans on all criminal history (violates Fair Housing)</li>
                    <li>Must consider: nature of crime, time elapsed, evidence of rehabilitation</li>
                    <li>Can deny for crimes that pose direct threat to property or residents (violent crimes, drug trafficking, arson, property crimes)</li>
                    <li>Cannot discriminate against arrests without convictions</li>
                    <li>Some states ban consideration of certain types of convictions</li>
                  </ul>
                  <p><strong>Best Practice:</strong> Individualized assessment - evaluate the specific circumstances and relevance to tenancy.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reference Checks</h3>
                  <p>Personal and professional references provide additional insight into the applicant's character and reliability.</p>
                  <p><strong>Who to Contact:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Professional references (colleagues, supervisors)</li>
                    <li>Personal references (non-family)</li>
                    <li>Emergency contacts</li>
                  </ul>
                  <p><strong>Warning:</strong> References are often the least reliable screening component since applicants choose people who will speak favorably. Use as supplementary information, not primary decision factor.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dealing with Co-Signers and Guarantors</h3>
                  <p>For applicants who don't meet income or credit requirements, a co-signer or guarantor can mitigate risk.</p>
                  <p><strong>Co-Signer Requirements:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Screen co-signers as thoroughly as primary applicants</li>
                    <li>Verify co-signer income is 5-6x rent (higher than tenant requirement)</li>
                    <li>Check co-signer credit score (should be 700+)</li>
                    <li>Ensure co-signer understands full legal obligation</li>
                    <li>Have co-signer sign lease or separate guarantee agreement</li>
                  </ul>
                  <p><strong>Common Co-Signer Scenarios:</strong> Recent college graduates, students, applicants with limited credit history, tenants with past financial issues but demonstrable recovery.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Fees and Screening Costs</h3>
                  <p>Many states regulate application fees. Check your state's limits and requirements.</p>
                  <p><strong>Typical Costs:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Credit report: $20-$40 per applicant</li>
                    <li>Background check: $15-$50 per applicant</li>
                    <li>Eviction history search: $10-$30</li>
                    <li>Total screening cost: $45-$120 per applicant</li>
                  </ul>
                  <p><strong>State Limits:</strong> Some states cap application fees (e.g., California ~$55, Oregon ~$57). Some states require refunds if screening isn't performed.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Red Flags to Watch For</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Urgency:</strong> "I need to move in immediately" - may indicate eviction or emergency situation</li>
                    <li><strong>Cash Only:</strong> Offers to pay large sums in cash upfront to skip screening</li>
                    <li><strong>No Rental History:</strong> Claims to have always lived with family (verify)</li>
                    <li><strong>Reluctance to Provide Information:</strong> Hesitant about references, employment, or authorization for checks</li>
                    <li><strong>Inconsistent Information:</strong> Application details don't match verbal statements or documents</li>
                    <li><strong>Bad-mouthing Previous Landlords:</strong> Blames all past landlords for problems</li>
                    <li><strong>Evasive Answers:</strong> Vague or changing stories about employment, income, or rental history</li>
                    <li><strong>Pressure Tactics:</strong> "I have other offers" or "Can you waive the screening?"</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Landlords</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Use a Standardized Process:</strong> Same screening criteria and procedures for all applicants</li>
                    <li><strong>Get Everything in Writing:</strong> Use comprehensive rental applications</li>
                    <li><strong>Obtain Authorization:</strong> Have applicants sign consent for all background checks</li>
                    <li><strong>Document Decisions:</strong> Keep notes on why applicants were accepted or denied</li>
                    <li><strong>Meet Applicants in Person:</strong> View behavior, professionalism, and ask follow-up questions</li>
                    <li><strong>Trust Your Instincts:</strong> If something feels off, investigate further or decline</li>
                    <li><strong>Verify Everything:</strong> Don't rely on tenant-provided documents alone</li>
                    <li><strong>Check for Fraud:</strong> Use services that verify paystubs, employment letters, and bank statements</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p>Thorough tenant screening is your first and best defense against rental property problems. By evaluating credit, income, employment, rental history, background, and references using a standardized scoring system, you can make objective, data-driven decisions that minimize risk and maximize your chances of finding reliable, long-term tenants.</p>
                  <p>Remember: It's better to have a vacant unit for an extra few weeks than to rent to a problematic tenant who will cost you thousands in lost rent, legal fees, and property damage. Always prioritize quality over speed when screening applicants.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
