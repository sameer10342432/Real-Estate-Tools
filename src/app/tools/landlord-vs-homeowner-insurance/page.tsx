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
import { Calculator, Shield, Home, TrendingUp, AlertCircle, FileText, DollarSign } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Landlord vs Homeowner Insurance Calculator - Coverage & Cost Comparison | Property Tools',
    description: 'Compare landlord insurance vs homeowner insurance coverage, costs, and benefits. Calculate premium differences and understand what each policy covers for rental properties.',
  };
}

export default function LandlordVsHomeownerInsuranceCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(350000);
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [rentalIncome, setRentalIncome] = useState<number>(2400);
  const [location, setLocation] = useState<string>('moderate-risk');
  const [deductible, setDeductible] = useState<number>(2500);
  const [ownerOccupied, setOwnerOccupied] = useState<boolean>(false);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateInsurance = () => {
    const homeownerBasePremium = propertyValue * 0.0035;
    
    let landlordMultiplier = 1.25;
    if (propertyType === 'multi-family') landlordMultiplier = 1.35;
    if (propertyType === 'condo') landlordMultiplier = 1.15;
    
    let locationMultiplier = 1;
    if (location === 'high-risk') locationMultiplier = 1.3;
    if (location === 'low-risk') locationMultiplier = 0.85;
    
    const landlordBasePremium = homeownerBasePremium * landlordMultiplier * locationMultiplier;
    
    const lossOfIncomeValue = rentalIncome * 12;
    const lossOfIncomeCoverage = Math.min(lossOfIncomeValue, propertyValue * 0.25);
    const lossOfIncomePremium = lossOfIncomeCoverage * 0.02;
    
    let deductibleAdjustment = 1;
    if (deductible === 1000) deductibleAdjustment = 1.15;
    if (deductible === 5000) deductibleAdjustment = 0.88;
    
    const homeownerAnnualPremium = homeownerBasePremium * deductibleAdjustment;
    const landlordAnnualPremium = (landlordBasePremium + lossOfIncomePremium) * deductibleAdjustment;
    
    const annualDifference = landlordAnnualPremium - homeownerAnnualPremium;
    const percentIncrease = ((landlordAnnualPremium - homeownerAnnualPremium) / homeownerAnnualPremium) * 100;
    
    const fiveYearHomeowner = homeownerAnnualPremium * 5;
    const fiveYearLandlord = landlordAnnualPremium * 5;
    const fiveYearDifference = fiveYearLandlord - fiveYearHomeowner;
    
    const coverages = {
      homeowner: {
        dwelling: propertyValue,
        personalProperty: propertyValue * 0.5,
        liability: 300000,
        medicalPayments: 5000,
        lossOfUse: propertyValue * 0.20,
        lossOfIncome: 0,
        vandalism: 'Limited',
        maliciousMischief: 'Limited',
      },
      landlord: {
        dwelling: propertyValue,
        personalProperty: propertyValue * 0.1,
        liability: 1000000,
        medicalPayments: 5000,
        lossOfUse: 0,
        lossOfIncome: lossOfIncomeCoverage,
        vandalism: 'Full Coverage',
        maliciousMischief: 'Full Coverage',
      }
    };
    
    const recommendation = ownerOccupied ? 
      'Homeowner insurance is appropriate for owner-occupied properties' :
      'Landlord insurance is REQUIRED for rental properties - homeowner policies exclude rental activity';
    
    const wrongPolicyRisks = [
      'Claims will be DENIED if using homeowner policy on rental',
      'Policy may be cancelled if rental activity discovered',
      'No coverage for loss of rental income',
      'Higher liability exposure without proper coverage',
      'Vandalism and malicious damage not covered properly'
    ];
    
    setResults({
      homeownerAnnualPremium,
      landlordAnnualPremium,
      annualDifference,
      percentIncrease,
      fiveYearHomeowner,
      fiveYearLandlord,
      fiveYearDifference,
      coverages,
      recommendation,
      wrongPolicyRisks,
      lossOfIncomeCoverage
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Landlord vs. Homeowner Insurance Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare landlord insurance and homeowner insurance coverage, costs, and benefits to understand the right policy for your property.
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
            Coverage Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Information
                </CardTitle>
                <CardDescription>
                  Enter your property details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="propertyValue">Property Value ($)</Label>
                  <Input
                    id="propertyValue"
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    placeholder="350000"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single-Family Home</SelectItem>
                      <SelectItem value="multi-family">Multi-Family (2-4 units)</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rentalIncome">Monthly Rental Income ($)</Label>
                  <Input
                    id="rentalIncome"
                    type="number"
                    value={rentalIncome}
                    onChange={(e) => setRentalIncome(Number(e.target.value))}
                    placeholder="2400"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Coverage Options
                </CardTitle>
                <CardDescription>
                  Customize your insurance parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="location">Location Risk Level</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low-risk">Low Risk (Safe area, no natural disasters)</SelectItem>
                      <SelectItem value="moderate-risk">Moderate Risk (Average area)</SelectItem>
                      <SelectItem value="high-risk">High Risk (Flood zone, earthquake, hurricane)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deductible">Deductible ($)</Label>
                  <Select value={deductible.toString()} onValueChange={(val) => setDeductible(Number(val))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">$1,000</SelectItem>
                      <SelectItem value="2500">$2,500</SelectItem>
                      <SelectItem value="5000">$5,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">Higher deductible = lower premium</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="ownerOccupied"
                    checked={ownerOccupied}
                    onChange={(e) => setOwnerOccupied(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="ownerOccupied" className="font-normal">Property is owner-occupied</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateInsurance} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Compare Insurance Policies
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className="border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-blue-900">{results.recommendation}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Homeowner Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">
                        ${results.homeownerAnnualPremium.toLocaleString(undefined, {maximumFractionDigits: 0})}/year
                      </p>
                      <p className="text-sm text-gray-600">${(results.homeownerAnnualPremium/12).toFixed(0)}/month</p>
                    </div>
                    <div className="border-t pt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Dwelling Coverage:</span>
                        <span className="font-semibold">${results.coverages.homeowner.dwelling.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Personal Property:</span>
                        <span className="font-semibold">${results.coverages.homeowner.personalProperty.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Liability:</span>
                        <span className="font-semibold">${results.coverages.homeowner.liability.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loss of Use:</span>
                        <span className="font-semibold">${results.coverages.homeowner.lossOfUse.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loss of Income:</span>
                        <span className="font-semibold text-red-600">$0 (Not Covered)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Landlord Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-green-600">
                        ${results.landlordAnnualPremium.toLocaleString(undefined, {maximumFractionDigits: 0})}/year
                      </p>
                      <p className="text-sm text-gray-600">${(results.landlordAnnualPremium/12).toFixed(0)}/month</p>
                      <Badge className="mt-2 bg-green-500">Recommended for Rentals</Badge>
                    </div>
                    <div className="border-t pt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Dwelling Coverage:</span>
                        <span className="font-semibold">${results.coverages.landlord.dwelling.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Personal Property:</span>
                        <span className="font-semibold">${results.coverages.landlord.personalProperty.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Liability:</span>
                        <span className="font-semibold text-green-600">${results.coverages.landlord.liability.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loss of Income:</span>
                        <span className="font-semibold text-green-600">${results.lossOfIncomeCoverage.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vandalism Coverage:</span>
                        <span className="font-semibold text-green-600">{results.coverages.landlord.vandalism}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Annual Difference</p>
                      <p className="text-2xl font-bold text-orange-600">
                        +${results.annualDifference.toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                      <p className="text-sm text-gray-600">{results.percentIncrease.toFixed(1)}% more</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">5-Year Total (Homeowner)</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${results.fiveYearHomeowner.toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">5-Year Total (Landlord)</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${results.fiveYearLandlord.toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-5 w-5" />
                    Risks of Using Wrong Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {results.wrongPolicyRisks.map((risk: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate insurance to see comparison</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Landlord vs. Homeowner Insurance</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding the Fundamental Difference</h3>
                  <p>The single most important fact landlords must understand is this: homeowner insurance policies specifically exclude coverage for rental activities. Using a homeowner policy on a rental property is not just inadequate—it's a violation of your insurance contract that will result in denied claims and potential policy cancellation.</p>
                  <p>Homeowner insurance is designed for owner-occupied properties where the policyholder lives in the home full-time. These policies assume lower risk because owners have a vested interest in maintaining their property and are present to prevent and address problems quickly. Rental properties face different risks—tenant-caused damage, higher liability exposure, periods of vacancy, and loss of rental income—that homeowner policies simply don't cover.</p>
                  <p>Landlord insurance (also called dwelling fire insurance or rental property insurance) is specifically designed for investment properties. It provides coverage tailored to the unique risks landlords face, including vandalism by tenants, malicious mischief, loss of rental income during repairs, and higher liability limits to protect against tenant lawsuits.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Homeowner Insurance Covers (For Owner-Occupied Homes Only)</h3>
                  <p>A standard homeowner insurance policy (HO-3) provides comprehensive coverage for owner-occupied properties:</p>
                  <h4 className="font-semibold mt-4 mb-2">Dwelling Coverage</h4>
                  <p>Covers the physical structure of the home against named perils like fire, windstorm, hail, lightning, theft, and vandalism. This is the foundation of the policy and typically covers the full replacement cost of the home.</p>
                  <h4 className="font-semibold mt-4 mb-2">Personal Property Coverage</h4>
                  <p>Covers the homeowner's belongings—furniture, clothing, electronics, appliances—typically up to 50-70% of the dwelling coverage amount. This is a major component that changes dramatically for rental properties.</p>
                  <h4 className="font-semibold mt-4 mb-2">Liability Protection</h4>
                  <p>Protects the homeowner if someone is injured on the property or if the homeowner causes damage to someone else's property. Standard homeowner policies typically include $100,000-$300,000 in liability coverage.</p>
                  <h4 className="font-semibold mt-4 mb-2">Medical Payments</h4>
                  <p>Covers medical expenses for guests injured on the property, regardless of fault. Typical limits are $1,000-$5,000.</p>
                  <h4 className="font-semibold mt-4 mb-2">Additional Living Expenses (Loss of Use)</h4>
                  <p>If the home becomes uninhabitable due to a covered loss, the policy pays for temporary housing, meals, and other living expenses while repairs are made. This is typically 20-30% of dwelling coverage.</p>
                  <p className="mt-4"><strong>Critical Exclusion:</strong> Homeowner policies specifically exclude coverage when the property is rented out. The policy's definition section will explicitly state that coverage only applies to "your residence premises" where you live. Rental activity voids this coverage.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Landlord Insurance Covers</h3>
                  <p>Landlord insurance policies are structured differently to address rental property risks:</p>
                  <h4 className="font-semibold mt-4 mb-2">Dwelling Coverage</h4>
                  <p>Same as homeowner insurance—covers the physical structure against fire, storms, vandalism, etc. This remains the foundation of the policy.</p>
                  <h4 className="font-semibold mt-4 mb-2">Limited Personal Property Coverage</h4>
                  <p>Landlord policies typically only cover the landlord's property on-site, such as appliances, lawn equipment, and tools. Coverage is much lower than homeowner policies (typically 10-20% of dwelling coverage) because the landlord's personal belongings aren't in the rental. Tenant belongings are NOT covered—tenants need their own renters insurance.</p>
                  <h4 className="font-semibold mt-4 mb-2">Loss of Rental Income (Business Income)</h4>
                  <p>This is the most important addition for landlords. If the property becomes uninhabitable due to a covered loss (fire, storm damage, etc.), the policy pays the lost rental income during repairs. Coverage typically lasts 6-12 months and covers up to the actual rental income or a percentage of dwelling coverage (often 25%).</p>
                  <h4 className="font-semibold mt-4 mb-2">Higher Liability Limits</h4>
                  <p>Landlord policies typically offer higher liability limits ($1-2 million) because rental properties face greater liability exposure. Tenants and their guests can sue for injuries, and courts often view landlords as having deeper pockets than homeowners.</p>
                  <h4 className="font-semibold mt-4 mb-2">Vandalism and Malicious Mischief</h4>
                  <p>Landlord policies provide full coverage for vandalism and intentional damage by tenants, whereas homeowner policies often limit or exclude such coverage in rental situations.</p>
                  <h4 className="font-semibold mt-4 mb-2">Building Ordinance Coverage</h4>
                  <p>If the property is damaged and local building codes have changed since construction, this coverage pays for upgrades required to meet current codes during repairs. This is especially important for older rental properties.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Comparison: Why Landlord Insurance Costs More</h3>
                  <p>Landlord insurance typically costs 15-25% more than comparable homeowner insurance. For a $350,000 property:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Homeowner Insurance:</strong> $1,200-1,500/year ($100-125/month)</li>
                    <li><strong>Landlord Insurance:</strong> $1,500-2,000/year ($125-167/month)</li>
                  </ul>
                  <p className="mt-4">The premium difference reflects several factors:</p>
                  <h4 className="font-semibold mt-4 mb-2">Increased Risk</h4>
                  <p>Rental properties have higher claim frequencies. Tenants may not maintain properties as carefully as owners, leading to more maintenance issues and damage. The risk of vandalism, malicious damage, and neglect is significantly higher.</p>
                  <h4 className="font-semibold mt-4 mb-2">Loss of Income Coverage</h4>
                  <p>Adding loss of rental income coverage costs extra because it protects the landlord's cash flow. If a $2,400/month rental becomes uninhabitable for 6 months, this coverage pays $14,400—a significant benefit that justifies the added premium.</p>
                  <h4 className="font-semibold mt-4 mb-2">Higher Liability Exposure</h4>
                  <p>Rental properties face greater lawsuit risk. If a tenant's child is injured due to property conditions, or if a visitor slips and falls, the landlord can be sued for significant damages. Higher liability limits cost more but provide essential protection.</p>
                  <h4 className="font-semibold mt-4 mb-2">Vacancy Periods</h4>
                  <p>Vacant properties face higher risks of vandalism, theft, freezing pipes, and other damage. Landlord policies account for periodic vacancy between tenants.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Catastrophic Consequences of Using the Wrong Policy</h3>
                  <p>Using a homeowner policy on a rental property can lead to financial disaster:</p>
                  <h4 className="font-semibold mt-4 mb-2">Denied Claims</h4>
                  <p>If you file a claim and the insurance company discovers the property was rented, your claim will be denied in its entirety. This applies even to claims unrelated to tenants—if your rental burns down due to lightning, the claim will be denied because you violated the policy's owner-occupancy requirement.</p>
                  <h4 className="font-semibold mt-4 mb-2">Policy Cancellation and Rescission</h4>
                  <p>Insurance companies can cancel your policy retroactively if they discover you misrepresented the property as owner-occupied. This means they can void the policy from inception, refund your premiums, and leave you with no coverage for any period during which the property was rented.</p>
                  <h4 className="font-semibold mt-4 mb-2">Difficulty Obtaining Future Coverage</h4>
                  <p>If your homeowner policy is cancelled for fraud (misrepresenting occupancy), other insurers will view you as a high risk and may refuse coverage or charge dramatically higher premiums.</p>
                  <h4 className="font-semibold mt-4 mb-2">Personal Financial Liability</h4>
                  <p>Without insurance, you're personally liable for all damages. If your rental burns down and you have a $300,000 mortgage on a $350,000 property, you'll owe the bank $300,000 while receiving $0 from insurance. If a tenant is seriously injured and sues for $1 million, you'll pay that personally without insurance defense or coverage.</p>
                  <h4 className="font-semibold mt-4 mb-2">Mortgage Default</h4>
                  <p>Most mortgages require adequate insurance coverage. Using the wrong policy could trigger a default provision, allowing the lender to call the loan due immediately or purchase expensive force-placed insurance at your expense.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Situations and Hybrid Policies</h3>
                  <h4 className="font-semibold mt-4 mb-2">House Hacking (Owner-Occupied Multi-Family)</h4>
                  <p>If you live in one unit of a duplex or triplex and rent the others, you may be able to get an owner-occupied multi-family policy. These hybrid policies cost more than standard homeowner insurance but less than full landlord insurance because you're on-site managing the property.</p>
                  <h4 className="font-semibold mt-4 mb-2">Short-Term Rentals (Airbnb, VRBO)</h4>
                  <p>Neither standard homeowner nor landlord policies adequately cover short-term rentals. You need specialized short-term rental insurance or commercial hospitality coverage. Standard policies exclude or severely limit coverage for properties rented for less than 30 consecutive days.</p>
                  <h4 className="font-semibold mt-4 mb-2">Renting Out Your Primary Residence Temporarily</h4>
                  <p>If you rent out your primary residence for a short period (e.g., while traveling for work for 6-12 months), notify your homeowner insurer. They may add an endorsement for the rental period or require you to switch to a landlord policy. Failing to disclose the rental can void coverage.</p>
                  <h4 className="font-semibold mt-4 mb-2">Rent-to-Own or Lease-Purchase Properties</h4>
                  <p>These arrangements typically require landlord insurance because you maintain ownership and responsibility for the property even though tenant-buyers occupy it.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Loss of Rental Income Coverage: The Landlord's Safety Net</h3>
                  <p>Loss of rental income coverage is perhaps the most valuable component of landlord insurance. Consider this scenario:</p>
                  <p>Your $350,000 rental property renting for $2,400/month suffers major fire damage. Repairs take 8 months and cost $150,000. During this time:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Without Loss of Income Coverage:</strong> You lose $19,200 in rental income (8 months × $2,400) while still paying the mortgage, taxes, and insurance. Combined with your $5,000 deductible on property damage, your total loss is $24,200 plus ongoing mortgage payments.</li>
                    <li><strong>With Loss of Income Coverage:</strong> Your landlord insurance pays the $150,000 in property damage (minus deductible) AND the $19,200 in lost rent. You maintain cash flow and can cover mortgage payments while repairs proceed.</li>
                  </ul>
                  <p className="mt-4">Loss of income coverage typically has these parameters:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Covers actual rental income or a percentage of dwelling coverage (often 25%)</li>
                    <li>Coverage period typically 6-12 months (can be extended)</li>
                    <li>Begins after the property becomes uninhabitable, not when repairs start</li>
                    <li>Covers rent from existing leases, not speculative "market rent"</li>
                    <li>May have a waiting period (e.g., first 2 weeks not covered)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability Coverage: Protecting Your Assets</h3>
                  <p>Landlords face significant liability exposure that far exceeds typical homeowner risks:</p>
                  <h4 className="font-semibold mt-4 mb-2">Slip and Fall Injuries</h4>
                  <p>If a tenant or visitor slips on ice you failed to clear, trips on a broken step, or is injured due to property defects, you can be sued for medical expenses, lost wages, pain and suffering, and punitive damages. Awards can easily exceed $500,000 for serious injuries.</p>
                  <h4 className="font-semibold mt-4 mb-2">Property Defects</h4>
                  <p>Landlords are responsible for maintaining safe, habitable conditions. Failure to fix known hazards (electrical issues, structural problems, mold) can result in massive liability if tenants are harmed.</p>
                  <h4 className="font-semibold mt-4 mb-2">Lead Paint and Asbestos</h4>
                  <p>If your rental property contains lead paint (pre-1978 homes) or asbestos, and a child is poisoned or a tenant develops related illness, liability can reach millions of dollars.</p>
                  <h4 className="font-semibold mt-4 mb-2">Criminal Acts by Tenants</h4>
                  <p>If your tenant harms someone and you failed to conduct proper background checks or ignored warning signs, you may face liability for negligent screening.</p>
                  <p className="mt-4">For these reasons, landlord insurance typically includes $1-2 million in liability coverage as standard, with umbrella policies available for $3-5 million in additional protection. The extra cost is minimal compared to the risk—typically $150-300/year for an additional $1 million in umbrella coverage.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Factors That Affect Your Premium</h3>
                  <p>Several factors influence the cost of landlord insurance:</p>
                  <h4 className="font-semibold mt-4 mb-2">Location and Risk Factors</h4>
                  <p>Properties in flood zones, earthquake areas, hurricane regions, or high-crime neighborhoods cost significantly more to insure. A rental in coastal Florida or California wildfire zones might cost 50-100% more than identical properties in low-risk areas.</p>
                  <h4 className="font-semibold mt-4 mb-2">Property Age and Condition</h4>
                  <p>Older properties with outdated electrical, plumbing, or roofing systems cost more to insure. Insurers may require inspections and upgrades (especially for properties over 30 years old) or charge higher premiums to offset risk.</p>
                  <h4 className="font-semibold mt-4 mb-2">Claims History</h4>
                  <p>Your personal claims history affects premiums. Multiple claims in 3-5 years can increase premiums by 20-50% or make coverage difficult to obtain. This creates an incentive to pay for small repairs out-of-pocket rather than filing frequent small claims.</p>
                  <h4 className="font-semibold mt-4 mb-2">Coverage Limits and Deductibles</h4>
                  <p>Higher coverage limits increase premiums, while higher deductibles decrease them. A $5,000 deductible might save 10-15% compared to a $1,000 deductible, but means you pay more out-of-pocket for small claims.</p>
                  <h4 className="font-semibold mt-4 mb-2">Property Value and Replacement Cost</h4>
                  <p>More expensive properties cost more to insure because potential losses are greater. Replacement cost coverage (rebuilding at current costs) is more expensive than actual cash value (depreciated value) but provides better protection.</p>
                  <h4 className="font-semibold mt-4 mb-2">Number of Units</h4>
                  <p>Multi-family properties cost more because they have more tenants, more potential claims, and higher overall risk. A fourplex costs significantly more to insure than a single-family rental.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Coverage Options and Endorsements</h3>
                  <p>Beyond standard landlord insurance, consider these add-ons:</p>
                  <h4 className="font-semibold mt-4 mb-2">Umbrella Liability Policy</h4>
                  <p>Provides an additional $1-5 million in liability coverage beyond your base policy. Essential for landlords with significant assets to protect. Costs approximately $150-300/year per million in coverage.</p>
                  <h4 className="font-semibold mt-4 mb-2">Flood Insurance</h4>
                  <p>Standard policies exclude flood damage. If your rental is in a flood zone (or even near one), obtain separate flood insurance through the National Flood Insurance Program (NFIP) or private insurers. Costs range from $400-2,000+/year depending on flood risk.</p>
                  <h4 className="font-semibold mt-4 mb-2">Earthquake Coverage</h4>
                  <p>Standard policies exclude earthquake damage. In California and other seismic zones, earthquake insurance is essential but expensive (often 1-3% of property value annually).</p>
                  <h4 className="font-semibold mt-4 mb-2">Building Ordinance or Law Coverage</h4>
                  <p>Covers the cost of bringing damaged buildings up to current code during repairs. Older properties may require electrical, plumbing, or structural upgrades when repairs are made, adding significant costs not covered by standard policies.</p>
                  <h4 className="font-semibold mt-4 mb-2">Equipment Breakdown</h4>
                  <p>Covers mechanical breakdowns of HVAC systems, water heaters, appliances, and other equipment. Standard policies only cover sudden damage from external causes, not wear-and-tear failures.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Lower Your Landlord Insurance Premiums</h3>
                  <p>While landlord insurance costs more than homeowner insurance, you can reduce premiums through these strategies:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Bundle Policies:</strong> Insure multiple rental properties with the same carrier for multi-policy discounts of 10-20%</li>
                    <li><strong>Increase Deductibles:</strong> Raising your deductible from $1,000 to $2,500 or $5,000 can save 10-15% on premiums</li>
                    <li><strong>Install Safety Features:</strong> Smoke detectors, fire extinguishers, security systems, and storm shutters can earn discounts</li>
                    <li><strong>Maintain Claims-Free History:</strong> Avoid small claims; pay minor repairs yourself to maintain clean history</li>
                    <li><strong>Screen Tenants Thoroughly:</strong> Some insurers offer discounts for comprehensive tenant screening processes</li>
                    <li><strong>Maintain Property Condition:</strong> Regular maintenance and upgrades (new roof, updated electrical) can lower premiums</li>
                    <li><strong>Pay Annually:</strong> Annual payment often saves 5-10% compared to monthly installments</li>
                    <li><strong>Shop Annually:</strong> Compare quotes from multiple insurers each year; rates vary significantly</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Bottom Line: Landlord Insurance is Not Optional</h3>
                  <p>While landlord insurance costs 15-25% more than homeowner insurance, it's not a discretionary expense—it's a fundamental business requirement. The differences in coverage are not minor variations but rather fundamental protections that determine whether you survive a major loss or face financial ruin.</p>
                  <p>Key takeaways:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Homeowner policies explicitly exclude rental activity and will deny all claims on rental properties</li>
                    <li>Landlord insurance costs more but provides essential coverage for rental-specific risks</li>
                    <li>Loss of rental income coverage protects your cash flow during repairs</li>
                    <li>Higher liability limits protect your assets from tenant and visitor lawsuits</li>
                    <li>Using the wrong policy can result in denied claims, policy cancellation, and personal financial liability</li>
                    <li>The extra cost ($25-75/month) is minimal compared to the financial catastrophe of having no coverage</li>
                  </ul>
                  <p className="mt-4">Consider the $300-500/year additional cost of landlord insurance as a business expense that protects tens or hundreds of thousands of dollars in property value and shields your personal assets from liability. It's not just legally required—it's the foundation of a sustainable rental property business.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
