'use client';

import { useState } from 'react'
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calculator, DollarSign, TrendingUp, AlertCircle, FileText, PawPrint } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pet Rent vs. Pet Deposit Calculator - Long-Term Comparison | Property Tools',
    description: 'Compare pet rent vs. pet deposit revenue over time. Calculate which pet fee structure generates more income for landlords while remaining competitive for tenants.',
  };
}

export default function PetRentVsDepositCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(1500);
  const [petDeposit, setPetDeposit] = useState<number>(500);
  const [monthlyPetRent, setMonthlyPetRent] = useState<number>(50);
  const [averageTenancyMonths, setAverageTenancyMonths] = useState<number>(24);
  const [estimatedPetDamage, setEstimatedPetDamage] = useState<number>(200);
  const [numberOfPets, setNumberOfPets] = useState<number>(1);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculatePetFees = () => {
    const totalPetRentRevenue = monthlyPetRent * numberOfPets * averageTenancyMonths;
    
    const totalPetDepositRevenue = petDeposit * numberOfPets;
    const depositReturnedToTenant = Math.max(0, totalPetDepositRevenue - estimatedPetDamage);
    const netDepositRevenue = totalPetDepositRevenue - depositReturnedToTenant;
    
    const difference = totalPetRentRevenue - netDepositRevenue;
    
    const breakEvenMonths = (petDeposit * numberOfPets) / (monthlyPetRent * numberOfPets);
    
    let recommendation = '';
    if (difference > 0) {
      recommendation = `Pet rent generates $${difference.toLocaleString()} more revenue over ${averageTenancyMonths} months`;
    } else if (difference < -100) {
      recommendation = `Pet deposit generates $${Math.abs(difference).toLocaleString()} more revenue`;
    } else {
      recommendation = 'Both options generate similar revenue';
    }
    
    const annualPetRentRevenue = monthlyPetRent * numberOfPets * 12;
    const tenantCostPetRent = totalPetRentRevenue;
    const tenantCostPetDeposit = estimatedPetDamage;
    const tenantSavings = tenantCostPetRent - tenantCostPetDeposit;
    
    setResults({
      totalPetRentRevenue,
      totalPetDepositRevenue,
      depositReturnedToTenant,
      netDepositRevenue,
      difference,
      breakEvenMonths,
      recommendation,
      annualPetRentRevenue,
      tenantCostPetRent,
      tenantCostPetDeposit,
      tenantSavings
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-orange-600 p-3 rounded-full">
            <PawPrint className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pet Rent vs. Pet Deposit Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare pet rent vs. pet deposit revenue over time to determine the most profitable pet fee structure for your rental property.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Comparison
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Pet Policy Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Information</CardTitle>
                <CardDescription>Base rental details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Base Rent</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="1500"
                  />
                </div>
                <div>
                  <Label htmlFor="averageTenancyMonths">Average Tenancy Length (months)</Label>
                  <Input
                    id="averageTenancyMonths"
                    type="number"
                    value={averageTenancyMonths}
                    onChange={(e) => setAverageTenancyMonths(Number(e.target.value))}
                    placeholder="24"
                  />
                  <p className="text-sm text-gray-500 mt-1">National average: 18-27 months</p>
                </div>
                <div>
                  <Label htmlFor="numberOfPets">Number of Pets</Label>
                  <Input
                    id="numberOfPets"
                    type="number"
                    value={numberOfPets}
                    onChange={(e) => setNumberOfPets(Number(e.target.value))}
                    placeholder="1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pet Fee Options</CardTitle>
                <CardDescription>Compare both pet fee structures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="petDeposit">One-Time Pet Deposit</Label>
                  <Input
                    id="petDeposit"
                    type="number"
                    value={petDeposit}
                    onChange={(e) => setPetDeposit(Number(e.target.value))}
                    placeholder="500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical: $200-$500 per pet</p>
                </div>
                <div>
                  <Label htmlFor="monthlyPetRent">Monthly Pet Rent</Label>
                  <Input
                    id="monthlyPetRent"
                    type="number"
                    value={monthlyPetRent}
                    onChange={(e) => setMonthlyPetRent(Number(e.target.value))}
                    placeholder="50"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical: $25-$75 per pet</p>
                </div>
                <div>
                  <Label htmlFor="estimatedPetDamage">Estimated Pet Damage</Label>
                  <Input
                    id="estimatedPetDamage"
                    type="number"
                    value={estimatedPetDamage}
                    onChange={(e) => setEstimatedPetDamage(Number(e.target.value))}
                    placeholder="200"
                  />
                  <p className="text-sm text-gray-500 mt-1">Carpet cleaning, repairs, etc.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculatePetFees} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Compare Pet Fee Options
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Comparison</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2"><strong>Recommendation:</strong></p>
                    <p className="text-lg">{results.recommendation}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Monthly Pet Rent Option</p>
                      <p className="text-3xl font-bold text-green-600">${results.totalPetRentRevenue.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Total revenue over {averageTenancyMonths} months</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Pet Deposit Option</p>
                      <p className="text-3xl font-bold text-blue-600">${results.netDepositRevenue.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Net revenue after damage costs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pet Rent Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Pet Rent:</span>
                      <span className="font-semibold">${monthlyPetRent * numberOfPets}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Revenue:</span>
                      <span className="font-semibold">${results.annualPetRentRevenue.toLocaleString()}/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Over {averageTenancyMonths} Months:</span>
                      <span className="font-bold text-lg text-green-600">${results.totalPetRentRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Refundable at Move-Out:</span>
                      <span className="font-semibold">$0</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pet Deposit Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">One-Time Deposit:</span>
                      <span className="font-semibold">${results.totalPetDepositRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Damage:</span>
                      <span className="font-semibold text-red-600">-${estimatedPetDamage.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Returned to Tenant:</span>
                      <span className="font-semibold">-${results.depositReturnedToTenant.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Revenue:</span>
                      <span className="font-bold text-lg text-blue-600">${results.netDepositRevenue.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Break-Even Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Break-Even Point:</p>
                    <p className="text-2xl font-bold">{results.breakEvenMonths.toFixed(1)} months</p>
                    <p className="text-sm text-gray-600 mt-1">After this point, pet rent generates more revenue than pet deposit</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">If tenant stays {Math.floor(results.breakEvenMonths / 2)} months:</p>
                      <p className="font-semibold">Pet Deposit is better (${(petDeposit * numberOfPets - estimatedPetDamage).toLocaleString()} vs ${(monthlyPetRent * numberOfPets * Math.floor(results.breakEvenMonths / 2)).toLocaleString()})</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">If tenant stays {Math.ceil(results.breakEvenMonths * 1.5)} months:</p>
                      <p className="font-semibold">Pet Rent is better (${(monthlyPetRent * numberOfPets * Math.ceil(results.breakEvenMonths * 1.5)).toLocaleString()} vs ${(petDeposit * numberOfPets - estimatedPetDamage).toLocaleString()})</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tenant Perspective</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost (Pet Rent):</span>
                    <span className="font-semibold">${results.tenantCostPetRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost (Pet Deposit):</span>
                    <span className="font-semibold">${results.tenantCostPetDeposit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenant Savings/Cost:</span>
                    <span className={`font-bold ${results.tenantSavings > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {results.tenantSavings > 0 ? `+$${results.tenantSavings.toLocaleString()} more with rent` : `$${Math.abs(results.tenantSavings).toLocaleString()} less with deposit`}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Note: Tenants typically prefer pet deposits (upfront but potentially refundable) over monthly pet rent (ongoing expense).
                  </p>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate to see pet fee comparison</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to Pet Policies and Fees</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Pet-Friendly Rental Market</h3>
                  <p>An estimated 67% of U.S. households own pets, yet many rental properties have restrictive or no-pet policies. This creates a significant market opportunity for landlords willing to accept pets—but only if properly structured with appropriate fees and policies.</p>
                  <p><strong>Statistics:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pet-friendly rentals command 20-30% higher rent</li>
                    <li>Pet-owning tenants stay 46% longer on average</li>
                    <li>72% of renters with pets would pay extra for pet-friendly housing</li>
                    <li>Landlords can increase tenant pool by 67% by accepting pets</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pet Rent vs. Pet Deposit: Key Differences</h3>
                  <h4 className="font-semibold mt-4 mb-2">Pet Rent</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Structure:</strong> Ongoing monthly fee added to base rent</li>
                    <li><strong>Amount:</strong> Typically $25-$75 per pet per month</li>
                    <li><strong>Refundable:</strong> No, it is non-refundable income</li>
                    <li><strong>Revenue Potential:</strong> Accumulates over time; more profitable for long-term tenancies</li>
                    <li><strong>Tenant Preference:</strong> Generally less preferred (ongoing cost)</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Pet Deposit</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Structure:</strong> One-time upfront payment</li>
                    <li><strong>Amount:</strong> Typically $200-$500 per pet</li>
                    <li><strong>Refundable:</strong> Yes, minus any pet damage costs</li>
                    <li><strong>Revenue Potential:</strong> Limited to actual damage; lower total revenue for long stays</li>
                    <li><strong>Tenant Preference:</strong> Generally preferred (potentially refundable)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Considerations by State</h3>
                  <p>Pet deposit and pet rent regulations vary significantly by state:</p>
                  <h4 className="font-semibold mt-4 mb-2">States with Security Deposit Caps (Including Pet Deposits)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>California:</strong> Total deposits (security + pet) cannot exceed 2x rent (unfurnished) or 3x rent (furnished). Pet deposits count toward this cap.</li>
                    <li><strong>Oregon:</strong> Combined deposits limited to 1-2 months' rent depending on property type</li>
                    <li><strong>Washington:</strong> No specific cap, but must be reasonable</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">States Distinguishing Pet Deposits from Security Deposits</h4>
                  <p>Some states allow separate pet deposits that don't count toward security deposit caps, but regulations vary. Always check local landlord-tenant law.</p>
                  <h4 className="font-semibold mt-4 mb-2">Pet Rent Regulations</h4>
                  <p>Pet rent is generally unregulated in most states, but some jurisdictions consider excessive pet rent (e.g., $200/month) potentially discriminatory or unreasonable.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Approach: Pet Deposit + Pet Rent</h3>
                  <p>Many landlords use a combination strategy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Upfront Pet Deposit:</strong> $200-$300 (refundable)</li>
                    <li><strong>Monthly Pet Rent:</strong> $25-$50 per pet</li>
                  </ul>
                  <p><strong>Advantages:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Deposit covers immediate damage; rent covers ongoing wear and tear</li>
                    <li>More competitive than pet rent alone (lower monthly cost)</li>
                    <li>Maximizes revenue over time</li>
                    <li>Provides tenant assurance (refundable component)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pet Fees vs. Service Animal Regulations</h3>
                  <p><strong>CRITICAL:</strong> You cannot charge pet fees for service animals or emotional support animals (ESAs) in most cases:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Animals (ADA):</strong> Cannot charge pet rent, pet deposits, or any fees. Cannot restrict breed or size. Must allow even in no-pet properties.</li>
                    <li><strong>Emotional Support Animals (Fair Housing Act):</strong> Cannot charge pet rent or fees. May charge for actual damage caused. Requires documentation from healthcare provider.</li>
                  </ul>
                  <p><strong>Legal Risk:</strong> Violating service/ESA animal protections can result in Fair Housing lawsuits with damages of $10,000-$50,000+.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Pet Policies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Screen Pets Like Tenants:</strong> Require pet application with vet records, photos, and references</li>
                    <li><strong>Breed/Size Restrictions:</strong> Base on legitimate insurance/risk factors, not stereotypes</li>
                    <li><strong>Pet Addendum:</strong> Use detailed pet addendum to lease specifying all rules and fees</li>
                    <li><strong>Pet Interviews:</strong> Meet pets before approval to assess temperament</li>
                    <li><strong>Vaccination Requirements:</strong> Require proof of rabies, distemper, and flea treatment</li>
                    <li><strong>Limit Number of Pets:</strong> 1-2 pets is standard; more may require higher fees</li>
                    <li><strong>Yard Maintenance:</strong> Specify tenant responsibility for pet waste cleanup</li>
                    <li><strong>Document Pet Damage:</strong> Detailed move-in/move-out inspections with photos</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Pet Damage and Costs</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Carpet Cleaning:</strong> $100-$400 (professional pet odor removal)</li>
                    <li><strong>Carpet Replacement:</strong> $1,000-$3,000+ (severe damage/staining)</li>
                    <li><strong>Hardwood Floor Scratches:</strong> $500-$2,000 (refinishing)</li>
                    <li><strong>Door/Trim Damage:</strong> $200-$800 (scratching, chewing)</li>
                    <li><strong>Yard Damage:</strong> $300-$1,500 (digging, dead grass from urine)</li>
                    <li><strong>Odor Remediation:</strong> $200-$1,000 (ozone treatment, sealing)</li>
                  </ul>
                  <p><strong>Average Pet Damage:</strong> Studies show average pet damage is $200-$600 per tenancy, but severe cases can exceed $5,000.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion: Which is Better?</h3>
                  <p>The choice between pet rent and pet deposit depends on your specific situation:</p>
                  <h4 className="font-semibold mt-4 mb-2">Choose Pet Rent If:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have long average tenancy (24+ months)</li>
                    <li>You want predictable monthly income</li>
                    <li>Your local market supports pet rent</li>
                    <li>You want to avoid deposit refund disputes</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Choose Pet Deposit If:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have short average tenancy (12-18 months)</li>
                    <li>You want to attract more pet-owning tenants</li>
                    <li>State law caps pet rent but not pet deposits</li>
                    <li>You expect minimal pet damage</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Consider Hybrid Approach If:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You want to balance revenue and competitiveness</li>
                    <li>You want upfront and ongoing income</li>
                    <li>You're in a competitive rental market</li>
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
