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
import { Calculator, DollarSign, TrendingUp, AlertCircle, FileText, Users } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Management Fee Calculator - Compare Management Pricing Structures | Property Tools',
    description: 'Calculate property management fees with different pricing structures including flat fees, percentage-based, and hybrid models. Compare costs and services.',
  };
}

export default function PropertyManagementFeeCalculator() {
  const [monthlyRent, setMonthlyRent] = useState<number>(2500);
  const [numberOfUnits, setNumberOfUnits] = useState<number>(1);
  const [managementFeeType, setManagementFeeType] = useState<string>('percentage');
  const [feePercentage, setFeePercentage] = useState<number>(10);
  const [flatMonthlyFee, setFlatMonthlyFee] = useState<number>(150);
  const [leasingFee, setLeasingFee] = useState<number>(100);
  const [tenantPlacementFee, setTenantPlacementFee] = useState<number>(1250);
  const [maintenanceMarkup, setMaintenanceMarkup] = useState<number>(10);
  const [includeLeasingFee, setIncludeLeasingFee] = useState<boolean>(true);
  
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const calculateFees = () => {
    const totalMonthlyRent = monthlyRent * numberOfUnits;
    
    let monthlyManagementFee = 0;
    if (managementFeeType === 'percentage') {
      monthlyManagementFee = totalMonthlyRent * (feePercentage / 100);
    } else if (managementFeeType === 'flat') {
      monthlyManagementFee = flatMonthlyFee * numberOfUnits;
    } else if (managementFeeType === 'hybrid') {
      monthlyManagementFee = (flatMonthlyFee * numberOfUnits) + (totalMonthlyRent * (feePercentage / 100));
    }
    
    const annualManagementFee = monthlyManagementFee * 12;
    
    const annualTenantPlacementFee = includeLeasingFee ? 
      (tenantPlacementFee * numberOfUnits * 0.33) :
      0;
    
    const estimatedMaintenanceCosts = totalMonthlyRent * 0.1 * 12;
    const maintenanceMarkupFee = estimatedMaintenanceCosts * (maintenanceMarkup / 100);
    
    const annualLeasingAdminFee = includeLeasingFee ? (leasingFee * numberOfUnits) : 0;
    
    const totalAnnualCost = 
      annualManagementFee + 
      annualTenantPlacementFee + 
      maintenanceMarkupFee + 
      annualLeasingAdminFee;
    
    const totalAnnualRent = totalMonthlyRent * 12;
    const effectiveFeePercentage = (totalAnnualCost / totalAnnualRent) * 100;
    
    const perUnitMonthlyCost = (totalAnnualCost / 12) / numberOfUnits;
    const perUnitAnnualCost = totalAnnualCost / numberOfUnits;
    
    const servicesIncluded = [];
    servicesIncluded.push('Rent collection and accounting');
    servicesIncluded.push('Maintenance coordination');
    servicesIncluded.push('Tenant communication');
    servicesIncluded.push('Monthly financial reporting');
    if (includeLeasingFee) {
      servicesIncluded.push('Tenant screening and placement');
      servicesIncluded.push('Lease agreement preparation');
    }
    servicesIncluded.push('Property inspections');
    servicesIncluded.push('Eviction processing assistance');
    
    const additionalFees = [];
    if (annualTenantPlacementFee > 0) {
      additionalFees.push({
        name: 'Tenant Placement Fee (annual avg)',
        amount: annualTenantPlacementFee,
        description: 'Assuming 33% annual turnover'
      });
    }
    if (maintenanceMarkupFee > 0) {
      additionalFees.push({
        name: 'Maintenance Coordination Markup',
        amount: maintenanceMarkupFee,
        description: `${maintenanceMarkup}% markup on maintenance costs`
      });
    }
    if (annualLeasingAdminFee > 0) {
      additionalFees.push({
        name: 'Lease Administration Fee',
        amount: annualLeasingAdminFee,
        description: 'Annual lease renewal processing'
      });
    }
    
    setResults({
      monthlyManagementFee,
      annualManagementFee,
      totalAnnualCost,
      effectiveFeePercentage,
      perUnitMonthlyCost,
      perUnitAnnualCost,
      totalAnnualRent,
      servicesIncluded,
      additionalFees,
      annualTenantPlacementFee,
      maintenanceMarkupFee,
      annualLeasingAdminFee
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-purple-600 p-3 rounded-full">
            <Users className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Property Management Fee Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate property management fees with different pricing structures. Compare percentage-based, flat fee, and hybrid management models.
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
            Fee Breakdown
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Management Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Information</CardTitle>
                <CardDescription>
                  Enter your rental property details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent">Monthly Rent Per Unit ($)</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    placeholder="2500"
                  />
                </div>
                <div>
                  <Label htmlFor="numberOfUnits">Number of Units</Label>
                  <Input
                    id="numberOfUnits"
                    type="number"
                    value={numberOfUnits}
                    onChange={(e) => setNumberOfUnits(Number(e.target.value))}
                    placeholder="1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Management Fee Structure</CardTitle>
                <CardDescription>
                  Select pricing model
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="managementFeeType">Fee Type</Label>
                  <Select value={managementFeeType} onValueChange={setManagementFeeType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage of Rent</SelectItem>
                      <SelectItem value="flat">Flat Monthly Fee</SelectItem>
                      <SelectItem value="hybrid">Hybrid (Flat + Percentage)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {(managementFeeType === 'percentage' || managementFeeType === 'hybrid') && (
                  <div>
                    <Label htmlFor="feePercentage">Management Fee Percentage (%)</Label>
                    <Input
                      id="feePercentage"
                      type="number"
                      value={feePercentage}
                      onChange={(e) => setFeePercentage(Number(e.target.value))}
                      placeholder="10"
                    />
                    <p className="text-sm text-gray-500 mt-1">Typical: 8-12% of monthly rent</p>
                  </div>
                )}
                {(managementFeeType === 'flat' || managementFeeType === 'hybrid') && (
                  <div>
                    <Label htmlFor="flatMonthlyFee">Flat Monthly Fee Per Unit ($)</Label>
                    <Input
                      id="flatMonthlyFee"
                      type="number"
                      value={flatMonthlyFee}
                      onChange={(e) => setFlatMonthlyFee(Number(e.target.value))}
                      placeholder="150"
                    />
                    <p className="text-sm text-gray-500 mt-1">Fixed monthly fee regardless of rent</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Fees</CardTitle>
                <CardDescription>
                  Leasing and tenant placement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="includeLeasingFee"
                    checked={includeLeasingFee}
                    onChange={(e) => setIncludeLeasingFee(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="includeLeasingFee" className="font-normal">Include leasing/placement fees</Label>
                </div>
                {includeLeasingFee && (
                  <>
                    <div>
                      <Label htmlFor="tenantPlacementFee">Tenant Placement Fee ($)</Label>
                      <Input
                        id="tenantPlacementFee"
                        type="number"
                        value={tenantPlacementFee}
                        onChange={(e) => setTenantPlacementFee(Number(e.target.value))}
                        placeholder="1250"
                      />
                      <p className="text-sm text-gray-500 mt-1">One-time fee per new tenant (50-100% of first month)</p>
                    </div>
                    <div>
                      <Label htmlFor="leasingFee">Lease Renewal Fee ($)</Label>
                      <Input
                        id="leasingFee"
                        type="number"
                        value={leasingFee}
                        onChange={(e) => setLeasingFee(Number(e.target.value))}
                        placeholder="100"
                      />
                      <p className="text-sm text-gray-500 mt-1">Annual fee for lease renewals</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Fees</CardTitle>
                <CardDescription>
                  Coordination and markup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="maintenanceMarkup">Maintenance Coordination Markup (%)</Label>
                  <Input
                    id="maintenanceMarkup"
                    type="number"
                    value={maintenanceMarkup}
                    onChange={(e) => setMaintenanceMarkup(Number(e.target.value))}
                    placeholder="10"
                  />
                  <p className="text-sm text-gray-500 mt-1">Typical: 10-20% markup on contractor costs</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Estimated annual maintenance: ${(monthlyRent * numberOfUnits * 0.1 * 12).toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Based on 10% of annual rent industry standard</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button onClick={calculateFees} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Management Fees
          </Button>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              <Card className="border-purple-500">
                <CardHeader>
                  <CardTitle>Total Annual Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className="text-5xl font-bold text-purple-600">
                      ${results.totalAnnualCost.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </p>
                    <p className="text-gray-600 mt-2">
                      Effective rate: {results.effectiveFeePercentage.toFixed(2)}% of annual rent
                    </p>
                    <div className="mt-4 space-y-1">
                      <p className="text-lg text-gray-700">
                        ${results.perUnitMonthlyCost.toLocaleString(undefined, {maximumFractionDigits: 0})}/month per unit
                      </p>
                      <p className="text-sm text-gray-600">
                        (${results.perUnitAnnualCost.toLocaleString(undefined, {maximumFractionDigits: 0})}/year per unit)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Management Fee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-blue-600">
                      ${results.monthlyManagementFee.toLocaleString(undefined, {maximumFractionDigits: 0})}/mo
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Annual: ${results.annualManagementFee.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Total Annual Rent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-600">
                      ${results.totalAnnualRent.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      From {numberOfUnits} unit{numberOfUnits > 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {results.additionalFees.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Annual Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {results.additionalFees.map((fee: any, index: number) => (
                      <div key={index} className="flex justify-between items-start border-b pb-2">
                        <div>
                          <p className="font-semibold">{fee.name}</p>
                          <p className="text-sm text-gray-600">{fee.description}</p>
                        </div>
                        <p className="font-bold text-lg">${fee.amount.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Complete Fee Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Management Fee (Annual):</span>
                    <span className="font-semibold">${results.annualManagementFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  {results.annualTenantPlacementFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tenant Placement (Annualized):</span>
                      <span className="font-semibold">${results.annualTenantPlacementFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                  )}
                  {results.maintenanceMarkupFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maintenance Markup:</span>
                      <span className="font-semibold">${results.maintenanceMarkupFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                  )}
                  {results.annualLeasingAdminFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lease Administration:</span>
                      <span className="font-semibold">${results.annualLeasingAdminFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t-2 pt-3 text-lg font-bold">
                    <span>Total Annual Cost:</span>
                    <span className="text-purple-600">${results.totalAnnualCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <TrendingUp className="h-5 w-5" />
                    Services Typically Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {results.servicesIncluded.map((service: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Calculate fees to see detailed breakdown</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Guide to Property Management Fees</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding Property Management Fee Structures</h3>
                  <p>Property management fees are the costs landlords pay to professional management companies for handling day-to-day operations of rental properties. These fees compensate managers for services including tenant placement, rent collection, maintenance coordination, accounting, legal compliance, and tenant communication.</p>
                  <p>Understanding fee structures is essential for landlords evaluating whether to self-manage or hire professionals, and for comparing different management companies. Fees typically range from 8-12% of monthly rent for single-family homes, with variations based on property type, location, and services included.</p>
                  <p>The "true cost" of management extends beyond the base monthly fee to include tenant placement fees, maintenance markups, lease renewal fees, and other ancillary charges that can add 2-5% to the effective annual cost. A thorough understanding of all fees is necessary for accurate cost comparison and investment analysis.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Fee Structures Explained</h3>
                  
                  <h4 className="font-semibold mt-4 mb-2">1. Percentage-Based Fees (Most Common)</h4>
                  <p>The most prevalent model charges a percentage of collected rent each month. This aligns the manager's incentives with the landlord—managers earn more when properties stay occupied at market rents, incentivizing good tenant retention and aggressive rent collection.</p>
                  <p><strong>Typical Ranges:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Single-Family Homes:</strong> 8-12% of monthly rent</li>
                    <li><strong>Multi-Family (2-4 units):</strong> 7-10% (economies of scale)</li>
                    <li><strong>Apartments (5+ units):</strong> 6-8% (larger portfolios command lower rates)</li>
                    <li><strong>Luxury Properties:</strong> 10-15% (higher service expectations)</li>
                    <li><strong>Student/Short-Term Rentals:</strong> 15-25% (higher management intensity)</li>
                  </ul>
                  <p className="mt-4"><strong>Example:</strong> A $2,000/month rental with a 10% management fee costs $200/month ($2,400/year) in management fees.</p>
                  <p><strong>Pros:</strong> Simple, transparent, scales with rent increases, aligns incentives</p>
                  <p><strong>Cons:</strong> No fee reduction during vacancies when manager work may actually increase</p>

                  <h4 className="font-semibold mt-4 mb-2">2. Flat Monthly Fees</h4>
                  <p>Some managers charge a fixed monthly fee regardless of rent amount. This is more common for lower-rent properties where percentage-based fees would be too small to justify the service level.</p>
                  <p><strong>Typical Flat Fees:</strong> $75-200/month per unit</p>
                  <p><strong>When Used:</strong> Often for properties renting under $1,000/month, or in markets where managers want predictable revenue regardless of rent fluctuations</p>
                  <p><strong>Example:</strong> A $800/month rental with a $100 flat fee represents a 12.5% effective rate, while a $1,500/month rental with the same $100 fee is only 6.67%.</p>
                  <p><strong>Pros:</strong> Predictable cost, may be cheaper for high-rent properties</p>
                  <p><strong>Cons:</strong> Less alignment of incentives, may not scale with property value</p>

                  <h4 className="font-semibold mt-4 mb-2">3. Hybrid Models</h4>
                  <p>Combining flat fees and percentage-based components, hybrid models might charge a base monthly fee plus a smaller percentage of rent, or different rates for different service tiers.</p>
                  <p><strong>Example Structure:</strong> $75/month base fee + 5% of monthly rent = $75 + $125 = $200/month for a $2,500 rental</p>
                  <p><strong>When Used:</strong> For portfolios mixing high and low-rent properties, or for tiered service packages</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Fees and Hidden Costs</h3>
                  <p>Beyond the base management fee, landlords should understand these common additional charges:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Tenant Placement/Leasing Fees</h4>
                  <p>One-time fees for finding and placing new tenants, typically 50-100% of first month's rent:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>50% of First Month:</strong> $1,250 for a $2,500/month rental</li>
                    <li><strong>75% of First Month:</strong> $1,875 for a $2,500/month rental</li>
                    <li><strong>100% of First Month:</strong> $2,500 for a $2,500/month rental (full month)</li>
                  </ul>
                  <p className="mt-2">This fee covers marketing, showings, screening, lease preparation, and move-in coordination. If tenants turn over annually, this adds 4-8% to the effective annual management cost.</p>

                  <h4 className="font-semibold mt-4 mb-2">Lease Renewal Fees</h4>
                  <p>Charged when existing tenants renew leases, typically $50-200 per renewal. This covers lease preparation, negotiation, and administrative processing.</p>

                  <h4 className="font-semibold mt-4 mb-2">Maintenance Coordination Markups</h4>
                  <p>Many management companies add 10-20% markup to contractor invoices as compensation for coordinating repairs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>$500 plumbing repair becomes $550-600 after markup</li>
                    <li>$3,000 HVAC replacement becomes $3,300-3,600 after markup</li>
                  </ul>
                  <p className="mt-2">For properties with $3,000/year in maintenance costs, a 15% markup adds $450 annually to management expenses.</p>

                  <h4 className="font-semibold mt-4 mb-2">Eviction Processing Fees</h4>
                  <p>Fees for initiating and processing evictions, often $300-800, covering legal filing, court appearances, and administrative work. Some managers include this in base fees; others charge separately.</p>

                  <h4 className="font-semibold mt-4 mb-2">Inspection Fees</h4>
                  <p>Some managers charge $50-150 per property inspection (move-in, move-out, annual). Premium managers include inspections in base fees.</p>

                  <h4 className="font-semibold mt-4 mb-2">Setup/Onboarding Fees</h4>
                  <p>One-time fees when transitioning a property to management, typically $100-500, covering property assessment, documentation, accounting setup, and initial marketing preparation.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculating Effective Annual Cost</h3>
                  <p>To accurately compare management companies, calculate the total effective cost including all fees:</p>
                  <p><strong>Example Calculation for $2,500/Month Rental:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Base Management Fee (10%):</strong> $250/month × 12 = $3,000/year</li>
                    <li><strong>Tenant Placement (50% first month, assuming 33% annual turnover):</strong> $1,250 × 0.33 = $413/year</li>
                    <li><strong>Lease Renewal Fee:</strong> $100/year</li>
                    <li><strong>Maintenance Markup (15% on $2,000 annual maintenance):</strong> $300/year</li>
                    <li><strong>Total Annual Cost:</strong> $3,813</li>
                    <li><strong>Effective Rate:</strong> $3,813 ÷ $30,000 annual rent = 12.7%</li>
                  </ul>
                  <p className="mt-4">This reveals that a "10% management fee" actually costs 12.7% when all fees are included—a significant difference when evaluating profitability.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Services Should Be Included?</h3>
                  <p>Standard property management should include these services in the base fee:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Core Services (Always Included)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rent Collection:</strong> Online payment processing, late fee enforcement, payment tracking</li>
                    <li><strong>Tenant Communication:</strong> 24/7 emergency contact, maintenance request handling, general inquiries</li>
                    <li><strong>Maintenance Coordination:</strong> Contractor scheduling, quality oversight, emergency response (markup fees may apply to invoices)</li>
                    <li><strong>Financial Reporting:</strong> Monthly statements showing income, expenses, and distributions</li>
                    <li><strong>Accounting:</strong> Expense tracking, 1099 preparation, year-end owner statements</li>
                    <li><strong>Legal Compliance:</strong> Adherence to fair housing laws, lease law compliance, habitability standards</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Tenant Placement Services (Often Separate Fee)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Marketing and advertising</li>
                    <li>Property showings and open houses</li>
                    <li>Tenant screening (credit, background, rental history)</li>
                    <li>Lease preparation and execution</li>
                    <li>Move-in inspections and documentation</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Value-Added Services (Vary by Company)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Quarterly or annual property inspections</li>
                    <li>Preventive maintenance programs</li>
                    <li>Renovation/improvement project management</li>
                    <li>Eviction processing and court representation</li>
                    <li>Owner portal with real-time financial data</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Negotiating Management Fees</h3>
                  <p>Management fees are often negotiable, especially for larger portfolios or in competitive markets:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Portfolio Discounts</h4>
                  <p>Landlords with multiple properties can negotiate reduced rates:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>2-3 Properties:</strong> 1% reduction (9% instead of 10%)</li>
                    <li><strong>4-6 Properties:</strong> 1.5-2% reduction (8-8.5%)</li>
                    <li><strong>7-10 Properties:</strong> 2-3% reduction (7-8%)</li>
                    <li><strong>10+ Properties:</strong> 3-4% reduction or flat fee structures</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Long-Term Contracts</h4>
                  <p>Committing to 2-3 year management agreements may yield 0.5-1% fee reductions, as managers value stable, long-term clients.</p>

                  <h4 className="font-semibold mt-4 mb-2">Bundled Services</h4>
                  <p>Including tenant placement in the base fee (rather than paying separate placement fees) can reduce overall costs if turnover is low. Conversely, excluding placement and paying only when needed saves money if tenants stay long-term.</p>

                  <h4 className="font-semibold mt-4 mb-2">Fee Caps on Low-Rent Properties</h4>
                  <p>For properties renting under $1,000/month, negotiate flat fees rather than percentages that may be too low to motivate quality service.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Management vs. Professional Management Cost Analysis</h3>
                  <p>While professional management costs 10-15% of rent, self-management has hidden costs often overlooked:</p>
                  
                  <h4 className="font-semibold mt-4 mb-2">DIY Time Investment</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rent Collection & Accounting:</strong> 2-3 hours/month</li>
                    <li><strong>Maintenance Coordination:</strong> 3-5 hours/month</li>
                    <li><strong>Tenant Communication:</strong> 2-4 hours/month</li>
                    <li><strong>Tenant Placement (annual avg):</strong> 20-40 hours/year</li>
                    <li><strong>Total Time:</strong> 10-15 hours/month average</li>
                  </ul>
                  <p className="mt-2">At $50/hour opportunity cost, this represents $500-750/month in time value—potentially more expensive than professional management for higher-earning landlords.</p>

                  <h4 className="font-semibold mt-4 mb-2">Expertise and Legal Risk</h4>
                  <p>Professional managers understand fair housing law, eviction procedures, habitability requirements, and local regulations. Legal mistakes by DIY landlords (improper evictions, discrimination claims, lease violations) can cost thousands in attorney fees and damages.</p>

                  <h4 className="font-semibold mt-4 mb-2">Longer Vacancies</h4>
                  <p>Professional managers often lease properties faster through better marketing, immediate showing availability, and efficient screening. If professional management reduces average vacancy from 45 days to 30 days, the 15-day rent savings ($1,000 for a $2,000/month rental) offsets 4-5 months of management fees.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Red Flags to Watch For</h3>
                  <p>When evaluating management companies, beware of these warning signs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Excessive Maintenance Markups:</strong> 20%+ markups are high; 10-15% is reasonable for coordination work</li>
                    <li><strong>Unclear Fee Structures:</strong> If a company can't clearly explain all fees upfront, expect hidden charges</li>
                    <li><strong>High Tenant Placement Fees for Renewals:</strong> Charging full placement fees when tenants renew is unreasonable</li>
                    <li><strong>Requiring Long-Term Contracts with Early Termination Penalties:</strong> Quality managers earn retention through service, not contracts</li>
                    <li><strong>No Itemized Billing:</strong> Managers should provide detailed monthly statements showing all income and expenses</li>
                    <li><strong>Kickbacks from Contractors:</strong> Managers should disclose any financial relationships with preferred vendors</li>
                    <li><strong>Poor Communication:</strong> If they're hard to reach during the sales process, it won't improve after signing</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions to Ask When Evaluating Managers</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>What is your base management fee percentage and what does it include?</li>
                    <li>What is your tenant placement fee and what does that process entail?</li>
                    <li>Do you charge maintenance markups? If so, what percentage?</li>
                    <li>Are inspections included in the base fee, and how often are they conducted?</li>
                    <li>What is your average vacancy time, and how do you market properties?</li>
                    <li>How do you screen tenants (credit score requirements, income verification, etc.)?</li>
                    <li>Do you have in-house maintenance staff or use outside contractors?</li>
                    <li>What financial reporting do you provide and how frequently?</li>
                    <li>What is your eviction process and associated costs?</li>
                    <li>What happens if the property remains vacant—do fees continue?</li>
                    <li>What are your contract terms and cancellation policies?</li>
                    <li>Can you provide references from current clients?</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion: Evaluating the Value Proposition</h3>
                  <p>Property management fees typically range from 10-15% of annual rent when all costs are included, but the value delivered varies dramatically. The decision to hire professional management should consider:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Time Value:</strong> Is your time worth more than the fee percentage? For high-earning professionals, paying 10% to save 15 hours/month is economically rational.</li>
                    <li><strong>Expertise Value:</strong> Professional managers reduce legal risk, place tenants faster, and handle problems more efficiently.</li>
                    <li><strong>Scale:</strong> Self-management becomes increasingly difficult with multiple properties; professional management becomes more economical at scale.</li>
                    <li><strong>Distance:</strong> Out-of-area landlords have little choice but to hire managers; local landlords have more flexibility.</li>
                    <li><strong>Property Type:</strong> High-maintenance properties (student rentals, short-term rentals) benefit more from professional management.</li>
                  </ul>
                  <p className="mt-4">When comparing management companies, focus on effective annual cost (including all fees) rather than base percentages, evaluate service quality through references and reviews, and ensure fee structures align with your property portfolio and investment goals. A quality manager earning 12% who reduces vacancy by 15 days and prevents one expensive legal mistake is worth far more than a discount manager charging 8% who provides poor service.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
