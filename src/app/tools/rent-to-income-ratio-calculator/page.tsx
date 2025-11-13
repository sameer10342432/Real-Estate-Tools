'use client'

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calculator, DollarSign, TrendingUp, AlertCircle, FileText, UserCheck } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rent-to-Income Ratio Calculator - 3x Rent Rule Checker | Property Tools',
    description: 'Calculate rent-to-income ratios to determine if tenant income meets the 3x rent rule. Analyze affordability and tenant qualification with detailed breakdowns.',
  };
}

export default function RentToIncomeRatioCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(1800);
  const [monthlyGrossIncome, setMonthlyGrossIncome] = useState<number>(6000);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState<number>(450);
  const [numberOfOccupants, setNumberOfOccupants] = useState<number>(2);
  const [utilitiesIncluded, setUtilitiesIncluded] = useState<boolean>(false);
  const [estimatedUtilities, setEstimatedUtilities] = useState<number>(200);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateRatio = () => {
    const totalHousingCost = utilitiesIncluded ? monthlyRent : monthlyRent + estimatedUtilities;
    
    const rentToIncomeRatio = (monthlyRent / monthlyGrossIncome) * 100;
    const housingToIncomeRatio = (totalHousingCost / monthlyGrossIncome) * 100;
    
    const annualIncome = monthlyGrossIncome * 12;
    const annualRent = monthlyRent * 12;
    
    const requiredIncomeFor3x = monthlyRent * 3;
    const incomeShortfall = Math.max(0, requiredIncomeFor3x - monthlyGrossIncome);
    const incomeExcess = Math.max(0, monthlyGrossIncome - requiredIncomeFor3x);
    
    const debtToIncomeRatio = ((otherMonthlyDebts + totalHousingCost) / monthlyGrossIncome) * 100;
    
    const afterRentIncome = monthlyGrossIncome - totalHousingCost - otherMonthlyDebts;
    const perPersonAfterRent = afterRentIncome / numberOfOccupants;
    
    let qualificationStatus = '';
    let recommendation = '';
    let riskLevel = '';
    
    if (rentToIncomeRatio <= 25) {
      qualificationStatus = 'EXCELLENT - Well below 30% threshold';
      recommendation = 'Tenant easily qualifies. Rent is very affordable relative to income.';
      riskLevel = 'Very Low';
    } else if (rentToIncomeRatio <= 30) {
      qualificationStatus = 'GOOD - Meets 3x rent rule';
      recommendation = 'Tenant qualifies. Rent-to-income ratio is within acceptable range.';
      riskLevel = 'Low';
    } else if (rentToIncomeRatio <= 33) {
      qualificationStatus = 'ACCEPTABLE - Slightly above ideal but manageable';
      recommendation = 'Tenant marginally qualifies. Consider other factors like credit score and rental history.';
      riskLevel = 'Medium';
    } else if (rentToIncomeRatio <= 40) {
      qualificationStatus = 'RISKY - Above recommended threshold';
      recommendation = 'Tenant may struggle with rent payments. Consider requiring co-signer or higher deposit.';
      riskLevel = 'High';
    } else {
      qualificationStatus = 'HIGH RISK - Does not qualify';
      recommendation = 'Tenant does not meet income requirements. Rent is not affordable at current income level.';
      riskLevel = 'Very High';
    }
    
    const meetsThreeTimesRule = rentToIncomeRatio <= 33.33;
    
    const affordabilityFactors = [];
    if (debtToIncomeRatio > 43) affordabilityFactors.push('High debt-to-income ratio (>43%)');
    if (perPersonAfterRent < 800) affordabilityFactors.push('Low discretionary income per person');
    if (rentToIncomeRatio > 30) affordabilityFactors.push('Rent exceeds 30% of gross income');
    if (housingToIncomeRatio > 35) affordabilityFactors.push('Total housing costs exceed 35% of income');
    
    const positiveFactors = [];
    if (rentToIncomeRatio < 25) positiveFactors.push('Rent well below 30% threshold');
    if (perPersonAfterRent > 1500) positiveFactors.push('Substantial discretionary income');
    if (debtToIncomeRatio < 36) positiveFactors.push('Healthy debt-to-income ratio');
    if (monthlyGrossIncome > requiredIncomeFor3x * 1.2) positiveFactors.push('Income significantly exceeds 3x rent requirement');
    
    setResults({
      rentToIncomeRatio,
      housingToIncomeRatio,
      debtToIncomeRatio,
      qualificationStatus,
      recommendation,
      riskLevel,
      meetsThreeTimesRule,
      requiredIncomeFor3x,
      incomeShortfall,
      incomeExcess,
      afterRentIncome,
      perPersonAfterRent,
      annualIncome,
      annualRent,
      totalHousingCost,
      affordabilityFactors,
      positiveFactors
    });
  };

  const getRiskColor = (riskLevel: string) => {
    switch(riskLevel) {
      case 'Very Low': return 'bg-green-500';
      case 'Low': return 'bg-blue-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-orange-500';
      case 'Very High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
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
          Rent-to-Income Ratio Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate whether tenant income meets the 3x rent rule and assess rental affordability with comprehensive income analysis.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            Qualification
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Affordability Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Rental & Income Information
                </CardTitle>
                <CardDescription>
                  Enter rent and tenant income details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="1800"
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyGrossIncome">Monthly Gross Income ($)</Label>
                  <Input
                    id="monthlyGrossIncome"
                    type="number"
                    value={monthlyGrossIncome}
                    onChange={(e) => setMonthlyGrossIncome(Number(e.target.value))}
                    placeholder="6000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Before taxes and deductions</p>
                </div>
                <div>
                  <Label htmlFor="otherMonthlyDebts">Other Monthly Debts ($)</Label>
                  <Input
                    id="otherMonthlyDebts"
                    type="number"
                    value={otherMonthlyDebts}
                    onChange={(e) => setOtherMonthlyDebts(Number(e.target.value))}
                    placeholder="450"
                  />
                  <p className="text-sm text-gray-500 mt-1">Car loan, credit cards, student loans</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Factors</CardTitle>
                <CardDescription>
                  Household and utility details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="numberOfOccupants">Number of Occupants</Label>
                  <Input
                    id="numberOfOccupants"
                    type="number"
                    value={numberOfOccupants}
                    onChange={(e) => setNumberOfOccupants(Number(e.target.value))}
                    placeholder="2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Adults and children</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="utilitiesIncluded"
                    checked={utilitiesIncluded}
                    onChange={(e) => setUtilitiesIncluded(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="utilitiesIncluded" className="font-normal">Utilities included in rent</Label>
                </div>
                {!utilitiesIncluded && (
                  <div>
                    <Label htmlFor="estimatedUtilities">Estimated Monthly Utilities ($)</Label>
                    <Input
                      id="estimatedUtilities"
                      type="number"
                      value={estimatedUtilities}
                      onChange={(e) => setEstimatedUtilities(Number(e.target.value))}
                      placeholder="200"
                    />
                    <p className="text-sm text-gray-500 mt-1">Electric, gas, water, internet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateRatio} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Rent-to-Income Ratio
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className={results.meetsThreeTimesRule ? 'border-green-500' : 'border-red-500'}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Qualification Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <Badge className={`${getRiskColor(results.riskLevel)} text-white text-lg px-4 py-2`}>
                      {results.qualificationStatus}
                    </Badge>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2"><strong>Recommendation:</strong></p>
                    <p className="text-gray-900">{results.recommendation}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rent-to-Income Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-600">{results.rentToIncomeRatio.toFixed(1)}%</p>
                      <p className="text-sm text-gray-600 mt-2">
                        {results.meetsThreeTimesRule ? '✓ Meets 3x rule (≤33%)' : '✗ Exceeds 3x rule'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Total Housing Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">{results.housingToIncomeRatio.toFixed(1)}%</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Rent + utilities as % of income
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Debt-to-Income Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-600">{results.debtToIncomeRatio.toFixed(1)}%</p>
                      <p className="text-sm text-gray-600 mt-2">
                        All debts + housing as % of income
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Income Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Gross Income:</span>
                      <span className="font-semibold">${monthlyGrossIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Required for 3x Rule:</span>
                      <span className="font-semibold">${results.requiredIncomeFor3x.toLocaleString()}</span>
                    </div>
                    {results.incomeShortfall > 0 ? (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Income Shortfall:</span>
                        <span className="font-semibold text-red-600">-${results.incomeShortfall.toLocaleString()}</span>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Income Excess:</span>
                        <span className="font-semibold text-green-600">+${results.incomeExcess.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-3 flex justify-between">
                      <span className="text-gray-600">After Rent & Debts:</span>
                      <span className="font-bold text-lg">${results.afterRentIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Per Person Discretionary:</span>
                      <span className="font-semibold">${results.perPersonAfterRent.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rent:</span>
                      <span className="font-semibold">${monthlyRent.toLocaleString()}</span>
                    </div>
                    {!utilitiesIncluded && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Utilities:</span>
                        <span className="font-semibold">${estimatedUtilities.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Housing Cost:</span>
                      <span className="font-semibold">${results.totalHousingCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Other Debts:</span>
                      <span className="font-semibold">${otherMonthlyDebts.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="text-gray-600">Annual Rent Obligation:</span>
                      <span className="font-bold text-lg">${results.annualRent.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {results.affordabilityFactors.length > 0 && (
                <Card className="border-yellow-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-700">
                      <AlertCircle className="h-5 w-5" />
                      Affordability Concerns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.affordabilityFactors.map((factor: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {results.positiveFactors.length > 0 && (
                <Card className="border-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <UserCheck className="h-5 w-5" />
                      Positive Indicators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.positiveFactors.map((factor: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <UserCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate ratio to see qualification analysis</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Rent-to-Income Ratios</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the Rent-to-Income Ratio?</h3>
                  <p>The rent-to-income ratio is a financial metric that measures the percentage of a tenant's gross monthly income spent on rent. It's one of the most fundamental tools landlords use to assess whether a prospective tenant can afford the rental property and is likely to pay rent consistently.</p>
                  <p>The calculation is simple: (Monthly Rent ÷ Monthly Gross Income) × 100 = Rent-to-Income Ratio (%)</p>
                  <p>For example, if an applicant pays $1,800 in rent and earns $6,000 per month, their rent-to-income ratio is (1,800 ÷ 6,000) × 100 = 30%. This is exactly at the threshold of the widely-used "3x rent rule," which requires tenants to earn at least three times the monthly rent in gross income.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The 3x Rent Rule: Industry Standard</h3>
                  <p>The "3x rent rule" or "3-to-1 rule" is the real estate industry's standard for tenant qualification. It states that a tenant's gross monthly income should be at least three times the monthly rent. This translates to a rent-to-income ratio of 33.3% or less.</p>
                  <p><strong>Why 3x?</strong> This ratio emerged from decades of landlord experience and financial analysis showing that tenants spending more than 33% of their gross income on rent face significantly higher risks of payment problems. The 3x rule provides a buffer for taxes, other debts, living expenses, and unexpected costs while ensuring rent remains affordable.</p>
                  <p>Many institutional landlords and property management companies have stricter requirements, often requiring 3.5x or even 4x rent in income, especially in competitive rental markets or for higher-end properties. This provides an additional safety margin and helps ensure tenant financial stability.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The 30% Housing Cost Guideline</h3>
                  <p>The 3x rent rule aligns closely with the broader "30% rule" for housing affordability, which states that households should spend no more than 30% of gross income on housing costs (rent plus utilities). This guideline is used by the U.S. Department of Housing and Urban Development (HUD) to define "cost-burdened" households.</p>
                  <p>When rent equals 30% of gross income, the tenant earns exactly 3.33x the rent (100% ÷ 30% = 3.33). This is why the 3x rule and 30% guideline are closely related but slightly different thresholds.</p>
                  <p><strong>Cost-Burdened vs. Severely Cost-Burdened:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Affordable:</strong> Housing costs ≤30% of income (3x rent or more)</li>
                    <li><strong>Cost-Burdened:</strong> Housing costs 30-50% of income (2x-3x rent)</li>
                    <li><strong>Severely Cost-Burdened:</strong> Housing costs >50% of income (less than 2x rent)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Rent-to-Income Ratios Matter for Landlords</h3>
                  <p>Rent-to-income ratios are predictive of tenant behavior and payment reliability:</p>
                  <h4 className="font-semibold mt-4 mb-2">Lower Ratios = Lower Default Risk</h4>
                  <p>Tenants with rent-to-income ratios below 25% have significantly lower rates of late payments and evictions. They have substantial discretionary income to absorb unexpected expenses without affecting rent payments.</p>
                  <h4 className="font-semibold mt-4 mb-2">Ratios Above 33% = Elevated Risk</h4>
                  <p>Once rent exceeds 33% of gross income, tenants face difficult trade-offs between rent and other necessities. Studies show late payment rates double when rent exceeds 35% of income and triple when it exceeds 40%.</p>
                  <h4 className="font-semibold mt-4 mb-2">Ratios Above 50% = High Default Probability</h4>
                  <p>Tenants spending more than half their income on rent are at extreme risk of default. Even minor financial disruptions (car repairs, medical bills, temporary job loss) can make rent unaffordable.</p>
                  <h4 className="font-semibold mt-4 mb-2">Legal and Practical Implications</h4>
                  <p>Using income verification protects landlords from fair housing violations. By applying the same income standards to all applicants (e.g., requiring 3x rent), landlords avoid discriminatory practices and can defend their screening decisions in court.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gross Income vs. Net Income: Always Use Gross</h3>
                  <p>The 3x rent rule and rent-to-income ratios should always be calculated using gross income (before taxes and deductions), not net income (take-home pay). Here's why:</p>
                  <p><strong>Consistency and Standardization:</strong> Gross income is consistent across tenants regardless of their tax situation. Two applicants earning the same gross income may have very different net incomes based on filing status, dependents, retirement contributions, and state taxes. Using gross income ensures fair, standardized comparisons.</p>
                  <p><strong>Documentation and Verification:</strong> Gross income is easier to verify. Pay stubs, W-2 forms, and employment verification letters all report gross income. Net income varies by pay period and is harder to standardize.</p>
                  <p><strong>Financial Capacity:</strong> Gross income better reflects earning capacity and ability to adjust spending. Tenants with high gross income but low net income (due to retirement contributions, HSA savings, etc.) can often reduce those voluntary deductions if needed to pay rent.</p>
                  <p><strong>Industry Standard:</strong> The 3x rule was developed using gross income. If you use net income, you're essentially applying a much stricter standard (closer to 5x rent) than intended.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Adjusting for Geographic and Market Variations</h3>
                  <p>Rent-to-income standards may need adjustment based on location and market conditions:</p>
                  <h4 className="font-semibold mt-4 mb-2">High-Cost Urban Markets</h4>
                  <p>In cities like San Francisco, New York, Boston, and Seattle, median rents often exceed 40-50% of median incomes. In these markets, landlords may reluctantly accept ratios up to 35-40% because finding tenants meeting the 3x rule is nearly impossible. However, this elevated risk should be offset by higher security deposits, stronger credit requirements, or guarantors.</p>
                  <h4 className="font-semibold mt-4 mb-2">Affordable and Moderate Markets</h4>
                  <p>In markets with more affordable housing (most of the Midwest, South, and smaller metros), landlords can and should maintain strict adherence to the 3x rule or even require 3.5x-4x rent, as the tenant pool includes many qualified applicants.</p>
                  <h4 className="font-semibold mt-4 mb-2">Luxury Rentals</h4>
                  <p>High-end properties often require 4x rent or more because the target tenant demographic expects to maintain a certain lifestyle. Spending 40-50% of income on housing leaves little for the discretionary spending luxury tenants typically expect.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Income Verification: Proving the Numbers</h3>
                  <p>Requiring documentation prevents fraud and ensures accuracy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>W-2 Employees:</strong> Request 2-3 recent pay stubs plus offer letter or employment verification letter. Calculate monthly income by multiplying weekly/biweekly gross by appropriate factor (weekly × 52 ÷ 12, biweekly × 26 ÷ 12).</li>
                    <li><strong>Self-Employed/1099 Contractors:</strong> Request 2 years of tax returns (1040 with Schedule C/E) and recent bank statements. Average the last 2 years' net income from self-employment to account for income variability.</li>
                    <li><strong>Hourly/Variable Income:</strong> Request 3 months of pay stubs and average the gross income. For tipped workers, use reported tip income from pay stubs or tax returns.</li>
                    <li><strong>Bonuses and Commissions:</strong> Only count if consistently received over 2+ years. Average bonus/commission income over 2 years and add to base salary.</li>
                    <li><strong>Non-Employment Income:</strong> Social Security, disability, child support, alimony, investments—all can count if documented with award letters, bank statements, or tax returns. Verify consistency and likelihood of continuation.</li>
                    <li><strong>Multiple Income Sources:</strong> Combine all verified income sources. Many tenants have multiple jobs, side gigs, and passive income streams.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Debt-to-Income Ratio: The Missing Piece</h3>
                  <p>While rent-to-income ratios assess housing affordability, debt-to-income (DTI) ratios provide a more complete picture of financial health. DTI includes all debt obligations:</p>
                  <p>DTI = (Monthly Rent + All Other Monthly Debt Payments) ÷ Monthly Gross Income × 100</p>
                  <p>A tenant might meet the 3x rent rule with a 30% housing ratio, but if they also have $1,000/month in car loans, credit cards, and student loans, their DTI is 47%—dangerously high. Mortgage lenders typically require DTI under 43%, and landlords should use similar standards.</p>
                  <p><strong>Recommended DTI Thresholds:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Excellent:</strong> DTI ≤36% (housing + debts)</li>
                    <li><strong>Good:</strong> DTI 36-43%</li>
                    <li><strong>Acceptable:</strong> DTI 43-50% (with strong credit and reserves)</li>
                    <li><strong>High Risk:</strong> DTI >50%</li>
                  </ul>
                  <p>Requesting a credit report as part of tenant screening automatically reveals debt obligations, allowing calculation of DTI alongside rent-to-income ratios.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Make Exceptions to the 3x Rule</h3>
                  <p>While the 3x rule is a strong guideline, there are situations where exceptions may be warranted:</p>
                  <h4 className="font-semibold mt-4 mb-2">1. Guarantors or Co-Signers</h4>
                  <p>If an applicant doesn't meet the income requirement but has a guarantor who does, the risk is mitigated. The guarantor should meet the 3x rule for both their own housing and the rental they're guaranteeing (combined). Guarantors must sign a legally binding lease guaranty.</p>
                  <h4 className="font-semibold mt-4 mb-2">2. Large Savings or Assets</h4>
                  <p>An applicant with 12+ months of rent in liquid savings poses low risk even with income slightly below 3x rent. Retirees often have lower incomes but substantial savings. Request bank statements showing sustained balances over several months.</p>
                  <h4 className="font-semibold mt-4 mb-2">3. Strong Credit History</h4>
                  <p>Applicants with credit scores above 750 and perfect payment histories may warrant flexibility. Their demonstrated financial responsibility reduces risk, though income should still be at least 2.5x rent.</p>
                  <h4 className="font-semibold mt-4 mb-2">4. Higher Security Deposit</h4>
                  <p>Where legal (some states limit deposits), requiring 2x-3x the standard deposit can offset income shortfalls. For example, if an applicant earns 2.8x rent instead of 3x, a double deposit provides a larger financial cushion.</p>
                  <h4 className="font-semibold mt-4 mb-2">5. Short-Term or Temporary Situations</h4>
                  <p>A tenant starting a new job with verified higher future income, or a graduating student with a signed job offer, may justify exception if they have savings to bridge the gap.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Cases: Students, Retirees, and Non-Traditional Applicants</h3>
                  <h4 className="font-semibold mt-4 mb-2">Students</h4>
                  <p>Full-time students often lack sufficient income. Options include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Requiring parental guarantors who meet the 3x rule</li>
                    <li>Accepting financial aid packages and part-time income combined</li>
                    <li>Requiring prepayment of several months' rent if family resources allow</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Retirees</h4>
                  <p>Fixed incomes from Social Security and pensions may not meet 3x rent, but retirees often have substantial savings and excellent credit. Acceptable approaches:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Count retirement account distributions as income if documented</li>
                    <li>Accept lower income ratios (2.5x rent) with proof of liquid assets</li>
                    <li>Consider perfect rental and credit histories as compensating factors</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Self-Employed and Gig Workers</h4>
                  <p>Income variability requires additional scrutiny. Use average income over 2 years from tax returns. Strong cash reserves and credit can compensate for income fluctuations.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Tenant's Perspective: Why Rent-to-Income Ratios Matter for Renters</h3>
                  <p>From the tenant's perspective, adhering to the 30% rule is crucial for financial stability:</p>
                  <p><strong>Financial Flexibility:</strong> Spending only 30% of income on housing leaves 70% for taxes (roughly 25-30%), food, transportation, healthcare, debt payments, savings, and discretionary spending. This provides a cushion for unexpected expenses and quality of life.</p>
                  <p><strong>Building Savings:</strong> Tenants who spend less than 30% on rent can save for emergencies, down payments on homes, retirement, and other financial goals. Those spending 40-50% on rent struggle to save and remain financially vulnerable.</p>
                  <p><strong>Avoiding Eviction:</strong> When rent consumes too much income, even small financial disruptions (car repairs, medical bills, temporary income loss) can trigger late payments and eventual eviction, damaging credit and rental history.</p>
                  <p><strong>Quality of Life:</strong> Excessive rent payments force trade-offs—skipping meals, avoiding healthcare, unable to afford car repairs, no entertainment or social activities. This stress affects mental health, job performance, and family stability.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Considerations: Fair Housing and Income Standards</h3>
                  <p>Income standards must be applied consistently to comply with fair housing laws:</p>
                  <p><strong>Consistent Standards:</strong> Apply the same income requirement (e.g., 3x rent) to all applicants regardless of race, national origin, familial status, religion, disability, or other protected classes. Inconsistent application can constitute illegal discrimination.</p>
                  <p><strong>Document Everything:</strong> Maintain records showing that all applicants were evaluated using the same criteria. If challenged, you can demonstrate non-discriminatory practices.</p>
                  <p><strong>Reasonable Accommodations:</strong> Fair housing laws may require reasonable accommodations for applicants with disabilities. For example, if an applicant receives disability income that falls slightly short of 3x rent but has a guarantor, refusing to consider the guarantor might violate disability discrimination laws.</p>
                  <p><strong>Source of Income Protections:</strong> Some states and cities prohibit discrimination based on source of income, requiring landlords to accept housing vouchers (Section 8) and other government assistance. If your area has such laws, you cannot require voucher recipients to meet higher income standards than other tenants.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Tips for Implementing Income Standards</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Set Clear Written Standards:</strong> Document your income requirements in writing (e.g., "Applicants must earn 3x monthly rent in gross income"). Include this in your rental application and screening criteria.</li>
                    <li><strong>Communicate Early:</strong> List income requirements in property advertisements and discuss them during showings. This prevents wasting time on unqualified applicants.</li>
                    <li><strong>Verify Income for All Applicants:</strong> Don't make exceptions or skip verification. Fraud is common, and self-reported income is often inflated.</li>
                    <li><strong>Consider Total Household Income:</strong> For multiple adult applicants, combine all incomes when assessing the 3x rule. All occupants over 18 should complete applications and verify income.</li>
                    <li><strong>Use Professional Screening Services:</strong> Third-party screening companies verify income, credit, and background more thoroughly than landlords can independently, reducing fraud risk.</li>
                    <li><strong>Review Annually:</strong> If you offer lease renewals, consider reviewing income annually, especially if you're increasing rent significantly. A tenant who qualified initially may no longer meet standards after a large increase.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion: The 3x Rule as a Foundation for Success</h3>
                  <p>The rent-to-income ratio and the 3x rent rule are fundamental tools in tenant screening because they're grounded in decades of data showing that tenants spending more than 30-33% of income on rent face significantly higher default rates. While the rule isn't absolute—geographic markets, credit quality, savings, and guarantors can justify exceptions—it remains the gold standard for assessing rental affordability.</p>
                  <p>Key takeaways:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Require tenants to earn at least 3x monthly rent in gross income</li>
                    <li>Calculate using gross income (before taxes), not net income</li>
                    <li>Verify income with pay stubs, tax returns, or employment letters</li>
                    <li>Consider debt-to-income ratios for a complete financial picture</li>
                    <li>Apply standards consistently to all applicants for fair housing compliance</li>
                    <li>Make exceptions only with compensating factors (guarantors, high credit, savings)</li>
                    <li>Higher ratios correlate with higher default rates; strict standards protect your investment</li>
                  </ul>
                  <p className="mt-4">By using this calculator and understanding the principles behind rent-to-income ratios, landlords can make informed decisions that balance maximizing occupancy with minimizing financial risk, while tenants can assess whether a rental truly fits their budget and financial goals.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
