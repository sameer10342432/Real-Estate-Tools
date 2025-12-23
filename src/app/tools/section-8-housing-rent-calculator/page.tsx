'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, DollarSign, Users, TrendingUp } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Section 8 Housing Rent Calculator (FMR) | Property Tools',
    description: 'Calculate Section 8 housing rent based on Fair Market Rent. Determine payment standards and optimize rental income for subsidized housing. Free HUD calculator.',
    keywords: [
      'Section 8 rent calculator',
      'Fair Market Rent',
      'FMR calculator',
      'HUD rental assistance',
      'housing choice voucher',
      'subsidized housing rent',
      'Section 8 payment standard',
      'affordable housing calculator',
      'HUD FMR',
      'rental assistance program'
    ],
  };
}

export default function Section8RentCalculator() {
  const [bedrooms, setBedrooms] = useState<string>('2');
  const [fmr, setFmr] = useState<string>('1500');
  const [requestedRent, setRequestedRent] = useState<string>('1650');
  const [utilities, setUtilities] = useState<string>('150');
  const [tenantIncome, setTenantIncome] = useState<string>('2400');
  const [paymentStandard, setPaymentStandard] = useState<string>('110');

  const calculate = () => {
    const fmrValue = parseFloat(fmr) || 0;
    const requested = parseFloat(requestedRent) || 0;
    const util = parseFloat(utilities) || 0;
    const income = parseFloat(tenantIncome) || 0;
    const standard = parseFloat(paymentStandard) / 100 || 1.1;

    const maxPaymentStandard = fmrValue * standard;
    const grossRent = requested + util;
    const tenantMinPayment = Math.max(income * 0.30, income * 0.10);
    const tenantPayment = Math.min(grossRent, tenantMinPayment);
    const housingAuthorityPayment = Math.min(grossRent - tenantPayment, maxPaymentStandard - tenantPayment);
    const totalToLandlord = requested;
    const isAffordable = grossRent <= maxPaymentStandard;
    const reasonableness = (requested / fmrValue) * 100;

    return {
      fmrValue,
      maxPaymentStandard,
      grossRent,
      tenantPayment,
      housingAuthorityPayment,
      totalToLandlord,
      isAffordable,
      reasonableness
    };
  };

  const results = calculate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-12 w-12 text-teal-600 dark:text-teal-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Section 8 Housing Rent Calculator (FMR)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate Section 8 rent based on Fair Market Rent and optimize subsidized housing income
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="guide">Section 8 Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Property Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                    <Select value={bedrooms} onValueChange={setBedrooms}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Studio</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4 Bedrooms</SelectItem>
                        <SelectItem value="5">5+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fmr">Fair Market Rent (FMR) ($)</Label>
                    <Input
                      id="fmr"
                      type="number"
                      value={fmr}
                      onChange={(e) => setFmr(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Check HUD website for your area</p>
                  </div>
                  <div>
                    <Label htmlFor="paymentStandard">Payment Standard (%)</Label>
                    <Input
                      id="paymentStandard"
                      type="number"
                      value={paymentStandard}
                      onChange={(e) => setPaymentStandard(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Typically 90-110% of FMR</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Rent & Utilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="requestedRent">Requested Rent ($)</Label>
                    <Input
                      id="requestedRent"
                      type="number"
                      value={requestedRent}
                      onChange={(e) => setRequestedRent(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="utilities">Tenant-Paid Utilities ($)</Label>
                    <Input
                      id="utilities"
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Utility allowance from PHA</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Tenant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tenantIncome">Monthly Household Income ($)</Label>
                    <Input
                      id="tenantIncome"
                      type="number"
                      value={tenantIncome}
                      onChange={(e) => setTenantIncome(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className={`${results.isAffordable ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Payment Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Tenant Payment:</span>
                    <span className="font-bold">${results.tenantPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Housing Authority Payment:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      ${results.housingAuthorityPayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total to Landlord:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      ${results.totalToLandlord.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Gross Rent:</span>
                    <span className="font-bold">${results.grossRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Max Payment Standard:</span>
                    <span className="font-bold">${results.maxPaymentStandard.toLocaleString()}</span>
                  </div>
                  {results.isAffordable ? (
                    <div className="bg-green-100 dark:bg-green-800/30 p-3 rounded-lg mt-3">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        ✓ Rent is within acceptable limits for Section 8
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-100 dark:bg-red-800/30 p-3 rounded-lg mt-3">
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        ✗ Rent exceeds payment standard - may not be approved
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Rent Reasonableness Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Fair Market Rent</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${results.fmrValue.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Payment Standard</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${results.maxPaymentStandard.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">% of FMR</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {results.reasonableness.toFixed(1)}%
                    </div>
                  </div>
                </div>
                {results.reasonableness > 120 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-orange-800 dark:text-orange-200">
                      ⚠️ Rent is significantly above FMR. Housing authority may require rent reduction.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Section 8 Housing Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Section 8 Housing Choice Voucher Program</h2>
                <p>
                  Section 8, officially the Housing Choice Voucher Program, is a federal rental assistance program administered by local Public Housing Authorities (PHAs). The program helps low-income families, elderly, and disabled individuals afford decent, safe housing in the private market. For landlords, Section 8 provides guaranteed rent payments and access to a large pool of potential tenants.
                </p>

                <h3>How Section 8 Works</h3>
                <ol>
                  <li>Eligible tenants receive vouchers from their local PHA</li>
                  <li>Tenants find housing in the private market that meets program requirements</li>
                  <li>PHA inspects property to ensure it meets Housing Quality Standards (HQS)</li>
                  <li>PHA determines rent reasonableness compared to similar unassisted units</li>
                  <li>Tenant pays 30-40% of their adjusted income toward rent</li>
                  <li>PHA pays the difference directly to landlord</li>
                </ol>

                <h3>Fair Market Rent (FMR)</h3>
                <p>
                  HUD establishes FMR annually for each metropolitan area and county. FMR represents the 40th percentile of gross rents (rent + utilities) for standard quality units. Key points:
                </p>
                <ul>
                  <li>Updated annually (usually October 1st)</li>
                  <li>Varies by number of bedrooms (0-4+)</li>
                  <li>Geographic variations (even within same county)</li>
                  <li>Small Area FMRs (SAFMRs) in some metro areas for zip code-level variation</li>
                </ul>

                <h3>Payment Standards</h3>
                <p>
                  PHAs set payment standards between 90-110% of FMR (can request HUD approval for higher). Payment standard is the maximum subsidy PHA will pay for a unit size. Factors affecting payment standards:
                </p>
                <ul>
                  <li>Local market conditions</li>
                  <li>PHA budget constraints</li>
                  <li>Housing availability</li>
                  <li>Exception payment standards for specific areas</li>
                </ul>

                <h3>Calculating Tenant and PHA Portions</h3>
                
                <h4>Tenant Payment (whichever is greater):</h4>
                <ul>
                  <li>30% of monthly adjusted income</li>
                  <li>10% of monthly gross income</li>
                  <li>Welfare rent (if applicable)</li>
                </ul>

                <h4>PHA Payment:</h4>
                <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  PHA Payment = Payment Standard - Tenant Payment
                </p>

                <h4>Important Exception:</h4>
                <p>
                  If gross rent (rent + utilities) exceeds payment standard, tenant must pay the difference out-of-pocket (if initial lease or PHA allows it).
                </p>

                <h3>Utility Allowances</h3>
                <p>
                  PHA establishes utility allowances for tenant-paid utilities:
                </p>
                <ul>
                  <li>Based on typical costs for energy-efficient units</li>
                  <li>Varies by unit size and utility type</li>
                  <li>Deducted from gross rent to calculate contract rent</li>
                  <li>Updated annually by PHA</li>
                </ul>

                <h3>Benefits of Accepting Section 8</h3>
                <ul>
                  <li><strong>Guaranteed Payment:</strong> PHA portion paid reliably and on time</li>
                  <li><strong>Reduced Vacancy:</strong> Large pool of voucher holders seeking housing</li>
                  <li><strong>Long-Term Tenancy:</strong> Voucher holders tend to stay longer</li>
                  <li><strong>Annual Inspections:</strong> Force you to maintain property properly</li>
                  <li><strong>Legal Protections:</strong> Clear lease requirements and dispute processes</li>
                  <li><strong>Social Impact:</strong> Provide housing for families in need</li>
                </ul>

                <h3>Requirements for Section 8 Landlords</h3>
                
                <h4>Property Requirements:</h4>
                <ul>
                  <li><strong>Housing Quality Standards (HQS):</strong> Pass initial and annual inspections</li>
                  <li><strong>Lead-Based Paint:</strong> Comply with disclosure and safety requirements</li>
                  <li><strong>Local Codes:</strong> Meet all applicable housing codes</li>
                  <li><strong>Utilities:</strong> Functioning and safe systems</li>
                  <li><strong>Security:</strong> Adequate locks, lighting, smoke detectors</li>
                </ul>

                <h4>Landlord Obligations:</h4>
                <ul>
                  <li>Sign Housing Assistance Payment (HAP) contract with PHA</li>
                  <li>Maintain property to HQS throughout tenancy</li>
                  <li>Make timely repairs (24-48 hours for emergencies)</li>
                  <li>Not charge rent above PHA-approved amount</li>
                  <li>Provide proper notice for lease termination</li>
                  <li>Not discriminate based on source of income</li>
                </ul>

                <h3>Housing Quality Standards (HQS) Inspection</h3>
                <p>
                  PHA inspects units for 13 aspects of quality and safety:
                </p>
                <ol>
                  <li><strong>Sanitary Facilities:</strong> Working bathroom, hot/cold water</li>
                  <li><strong>Food Preparation:</strong> Kitchen with sink, stove, refrigerator</li>
                  <li><strong>Space and Security:</strong> Adequate space, locks on doors/windows</li>
                  <li><strong>Thermal Environment:</strong> Heating system, weatherization</li>
                  <li><strong>Illumination and Electricity:</strong> Adequate lighting, safe wiring</li>
                  <li><strong>Structure and Materials:</strong> Sound structure, no hazards</li>
                  <li><strong>Interior Air Quality:</strong> Ventilation, no mold/dampness</li>
                  <li><strong>Water Supply:</strong> Running water, adequate pressure</li>
                  <li><strong>Lead-Based Paint:</strong> Compliance with lead regulations</li>
                  <li><strong>Access:</strong> Safe entry/exit routes</li>
                  <li><strong>Site and Neighborhood:</strong> Safe environment</li>
                  <li><strong>Sanitary Condition:</strong> Free from vermin, clean</li>
                  <li><strong>Smoke Detectors:</strong> Working detectors on every level</li>
                </ol>

                <h3>Common HQS Violations</h3>
                <ul>
                  <li>Missing or non-functional smoke detectors</li>
                  <li>Leaking faucets or pipes</li>
                  <li>Tripping hazards (loose carpet, broken steps)</li>
                  <li>Inadequate heating</li>
                  <li>Peeling paint (especially in pre-1978 buildings)</li>
                  <li>Broken windows or cracked glass</li>
                  <li>Electrical hazards (exposed wiring, missing covers)</li>
                  <li>Mold or water damage</li>
                </ul>

                <h3>Rent Reasonableness Determination</h3>
                <p>
                  PHA must determine that rent is reasonable compared to similar unassisted units. Factors considered:
                </p>
                <ul>
                  <li>Location</li>
                  <li>Size (square footage, number of bedrooms/bathrooms)</li>
                  <li>Type and age of unit</li>
                  <li>Amenities and appliances</li>
                  <li>Condition and quality</li>
                  <li>Utilities included</li>
                </ul>

                <h3>Setting Rent for Section 8 Properties</h3>
                <p><strong>Best Practices:</strong></p>
                <ul>
                  <li>Research comparable unassisted units in area</li>
                  <li>Know your local payment standard</li>
                  <li>Request at or slightly below FMR for easiest approval</li>
                  <li>Justify higher rents with amenities and condition</li>
                  <li>Be prepared to negotiate</li>
                  <li>Consider that utilities reduce effective rent</li>
                </ul>

                <h3>Annual Rent Adjustments</h3>
                <p>
                  Landlords can request rent increases annually:
                </p>
                <ul>
                  <li>Provide 60 days notice before lease anniversary</li>
                  <li>Complete rent reasonableness paperwork</li>
                  <li>PHA reviews comparable rents</li>
                  <li>Increase takes effect on lease anniversary if approved</li>
                  <li>Cannot increase more than comparable unassisted units</li>
                </ul>

                <h3>Source of Income Discrimination Laws</h3>
                <p>
                  Many jurisdictions prohibit discrimination based on source of income:
                </p>
                <ul>
                  <li>Cannot refuse to rent because tenant has voucher</li>
                  <li>Must apply same screening criteria as other tenants</li>
                  <li>Can still screen for creditworthiness, rental history, criminal background</li>
                  <li>Penalties for violations can be substantial</li>
                </ul>

                <h3>Working with PHAs</h3>
                <p><strong>Tips for Success:</strong></p>
                <ul>
                  <li>Build relationship with local PHA staff</li>
                  <li>Respond promptly to inspection requests</li>
                  <li>Keep detailed records of all communications</li>
                  <li>Address HQS violations within required timeframes</li>
                  <li>Attend landlord orientation sessions if offered</li>
                  <li>Join local landlord associations with Section 8 experience</li>
                </ul>

                <h3>Common Challenges and Solutions</h3>
                
                <h4>Challenge: Inspection Delays</h4>
                <p><strong>Solution:</strong> Pre-inspect unit yourself using HQS checklist before submitting to PHA</p>

                <h4>Challenge: Rent Below Market</h4>
                <p><strong>Solution:</strong> Factor guaranteed payment and reduced vacancy into ROI analysis</p>

                <h4>Challenge: Administrative Burden</h4>
                <p><strong>Solution:</strong> Use property management software to track inspections and deadlines</p>

                <h4>Challenge: Tenant Portion Non-Payment</h4>
                <p><strong>Solution:</strong> Enforce lease terms consistently; PHA payment continues during eviction</p>

                <h3>Section 8 Financial Analysis</h3>
                
                <h4>Pros:</h4>
                <ul>
                  <li>70-90% of rent guaranteed from PHA</li>
                  <li>Lower marketing costs (tenant finds you)</li>
                  <li>Potentially longer tenancy = less turnover</li>
                  <li>Forced property maintenance improves value</li>
                </ul>

                <h4>Cons:</h4>
                <ul>
                  <li>Rent may be below market rate</li>
                  <li>Additional inspections and paperwork</li>
                  <li>Tenant screening limited to non-discriminatory criteria</li>
                  <li>Lease terms partially dictated by PHA requirements</li>
                </ul>

                <h3>Tax Implications</h3>
                <ul>
                  <li>Section 8 income is taxable like any other rental income</li>
                  <li>PHA payments reported on 1099 or included in gross rents</li>
                  <li>Maintain records of all payments for tax reporting</li>
                  <li>Repairs to meet HQS are deductible expenses</li>
                </ul>

                <h3>Specialized Section 8 Programs</h3>
                
                <h4>Project-Based Vouchers (PBV):</h4>
                <p>
                  Vouchers attached to specific units rather than individual tenants. Landlord contracts with PHA for 15-20 years. Guaranteed occupancy and payments.
                </p>

                <h4>Homeownership Vouchers:</h4>
                <p>
                  Some PHAs allow voucher use toward mortgage payments for low-income homebuyers.
                </p>

                <h4>Veterans Affairs Supportive Housing (VASH):</h4>
                <p>
                  Combines HUD housing vouchers with VA supportive services for homeless veterans.
                </p>

                <h3>Resources for Landlords</h3>
                <ul>
                  <li><strong>HUD.gov:</strong> Official Fair Market Rents and program information</li>
                  <li><strong>Local PHA Website:</strong> Payment standards, forms, contacts</li>
                  <li><strong>GoSection8.com:</strong> Online platform connecting landlords and voucher holders</li>
                  <li><strong>Local Landlord Associations:</strong> Training and support for Section 8 landlords</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Participating in Section 8 can be a profitable and socially responsible choice for rental property owners. While it requires additional administrative work and compliance with quality standards, the guaranteed payments, reduced vacancy, and access to a large tenant pool often outweigh the challenges. Success with Section 8 requires understanding the program rules, maintaining properties to HQS, and building positive relationships with your local PHA.
                </p>
                <p>
                  Use this calculator to evaluate whether Section 8 makes financial sense for your property, understand the payment breakdown, and ensure your requested rent is within acceptable limits. With proper preparation and realistic expectations, Section 8 can become a valuable component of a diversified rental property portfolio.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
