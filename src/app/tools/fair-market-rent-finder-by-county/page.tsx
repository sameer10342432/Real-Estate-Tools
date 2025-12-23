'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, DollarSign, Home, TrendingUp } from 'lucide-react';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fair Market Rent (FMR) Finder by County | Property Tools',
    description: 'Find Fair Market Rent rates by county. Compare HUD FMR data and analyze rental pricing for Section 8 and market-rate properties. Free FMR calculator.',
    keywords: [
      'Fair Market Rent finder',
      'FMR by county',
      'HUD FMR calculator',
      'rental market rates',
      'Section 8 FMR',
      'county rental rates',
      'HUD rent limits',
      'rental pricing data',
      'market rent comparison',
      'affordable housing rates'
    ],
  };
}

export default function FairMarketRentFinder() {
  const [state, setState] = useState<string>('CA');
  const [county, setCounty] = useState<string>('Los Angeles');
  const [bedrooms, setBedrooms] = useState<string>('2');

  const fmrData: { [key: string]: { [key: string]: number[] } } = {
    'CA': {
      'Los Angeles': [1362, 1517, 1947, 2531, 2904],
      'San Francisco': [2117, 2398, 3059, 4107, 4723],
      'San Diego': [1698, 1895, 2459, 3297, 3662],
      'Orange': [1995, 2159, 2797, 3838, 4275]
    },
    'NY': {
      'New York': [1584, 1677, 2026, 2599, 2987],
      'Kings': [1584, 1677, 2026, 2599, 2987],
      'Queens': [1584, 1677, 2026, 2599, 2987]
    },
    'TX': {
      'Harris': [963, 1079, 1347, 1838, 2133],
      'Dallas': [1113, 1248, 1570, 2109, 2389],
      'Travis': [1195, 1343, 1699, 2298, 2603]
    },
    'FL': {
      'Miami-Dade': [1381, 1545, 1946, 2543, 2856],
      'Broward': [1381, 1545, 1946, 2543, 2856],
      'Orange': [1253, 1405, 1761, 2352, 2638]
    }
  };

  const getFMR = () => {
    const bedroomIndex = parseInt(bedrooms);
    return fmrData[state]?.[county]?.[bedroomIndex] || 0;
  };

  const currentFMR = getFMR();
  const allSizes = fmrData[state]?.[county] || [0, 0, 0, 0, 0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fair Market Rent (FMR) Finder by County
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find HUD Fair Market Rent rates by county for rental pricing analysis
          </p>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">FMR Finder</TabsTrigger>
            <TabsTrigger value="guide">FMR Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="county">County</Label>
                  <Select value={county} onValueChange={setCounty}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(fmrData[state] || {}).map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
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
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 dark:bg-emerald-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Fair Market Rent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {county} County, {state} - {bedrooms === '0' ? 'Studio' : `${bedrooms} Bedroom${parseInt(bedrooms) > 1 ? 's' : ''}`}
                  </div>
                  <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    ${currentFMR.toLocaleString()}/mo
                  </div>
                  <p className="text-sm text-gray-500">
                    40th percentile of gross rents (rent + utilities)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  FMR by Unit Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms'].map((size, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">{size}</span>
                      <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        ${allSizes[idx]?.toLocaleString() || 0}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Payment Standard Range
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">90% of FMR</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${Math.round(currentFMR * 0.9).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">100% of FMR</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${currentFMR.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">110% of FMR</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ${Math.round(currentFMR * 1.1).toLocaleString()}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Public Housing Authorities typically set payment standards in this range
                </p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> This calculator uses sample FMR data for demonstration. For official, up-to-date Fair Market Rents, visit the HUD website at <span className="text-blue-600 dark:text-blue-400">www.huduser.gov/portal/datasets/fmr.html</span>
              </p>
            </div>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Complete Fair Market Rent Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h2>Understanding Fair Market Rents (FMR)</h2>
                <p>
                  Fair Market Rent (FMR) is the estimated amount a property in a given area would rent for on the open market. HUD publishes FMRs annually to determine payment standard amounts for the Housing Choice Voucher program and to calculate initial renewal rents for some subsidized programs. FMRs provide critical benchmarking data for landlords, property managers, real estate investors, and housing authorities.
                </p>

                <h3>How HUD Calculates FMR</h3>
                <p>
                  HUD determines FMR using complex methodology:
                </p>
                <ol>
                  <li>Collect gross rent data from American Community Survey (ACS)</li>
                  <li>Adjust for inflation to current dollars</li>
                  <li>Calculate 40th percentile of gross rents for standard quality units</li>
                  <li>Apply trend factors based on recent market changes</li>
                  <li>Review with local experts and stakeholders</li>
                  <li>Publish annually (effective October 1st)</li>
                </ol>

                <h3>What FMR Includes</h3>
                <p>
                  FMR represents <strong>gross rent</strong>, which includes:
                </p>
                <ul>
                  <li><strong>Contract Rent:</strong> Base monthly rent to landlord</li>
                  <li><strong>Tenant-Paid Utilities:</strong> Estimated cost of gas, electric, water, etc.</li>
                  <li><strong>Other Charges:</strong> Required fees (parking if not optional, etc.)</li>
                </ul>

                <p><strong>FMR Does NOT Include:</strong></p>
                <ul>
                  <li>Telephone or cable/internet service</li>
                  <li>Optional fees (garage if available separately)</li>
                  <li>Furniture or equipment rental</li>
                  <li>Security deposits</li>
                </ul>

                <h3>Geographic Coverage</h3>
                <p>
                  FMRs are published for different geographic levels:
                </p>
                <ul>
                  <li><strong>Metropolitan Statistical Areas (MSAs):</strong> Primary geographic unit</li>
                  <li><strong>HUD Metro FMR Areas (HMFAs):</strong> Subdivisions of large metro areas</li>
                  <li><strong>Counties:</strong> Non-metropolitan areas</li>
                  <li><strong>Small Area FMRs (SAFMRs):</strong> ZIP code level in select metro areas</li>
                </ul>

                <h3>Standard vs. Small Area FMRs</h3>
                
                <h4>Standard FMRs:</h4>
                <ul>
                  <li>Apply to entire metro area or county</li>
                  <li>Single FMR regardless of neighborhood</li>
                  <li>May not reflect variation within large areas</li>
                  <li>Easier to administer</li>
                </ul>

                <h4>Small Area FMRs (SAFMRs):</h4>
                <ul>
                  <li>ZIP code-level rent limits</li>
                  <li>Reflect neighborhood variation</li>
                  <li>Required in 24 metropolitan areas</li>
                  <li>Optional for other PHAs</li>
                  <li>Higher limits in expensive neighborhoods</li>
                  <li>Lower limits in affordable areas</li>
                </ul>

                <h3>Using FMR Data</h3>
                
                <h4>For Landlords:</h4>
                <ul>
                  <li><strong>Pricing Guidance:</strong> Benchmark for setting competitive rents</li>
                  <li><strong>Section 8 Planning:</strong> Determine if property qualifies for voucher program</li>
                  <li><strong>Market Analysis:</strong> Compare property performance to local market</li>
                  <li><strong>Rent Increases:</strong> Justify annual adjustments based on FMR changes</li>
                </ul>

                <h4>For Tenants:</h4>
                <ul>
                  <li><strong>Affordability Check:</strong> Determine if rent is reasonable for area</li>
                  <li><strong>Negotiation Tool:</strong> Leverage FMR data in rent discussions</li>
                  <li><strong>Section 8 Eligibility:</strong> Understand voucher payment limits</li>
                </ul>

                <h4>For Investors:</h4>
                <ul>
                  <li><strong>Market Research:</strong> Identify high-rent and affordable markets</li>
                  <li><strong>Investment Decisions:</strong> Evaluate rental potential before purchase</li>
                  <li><strong>Portfolio Diversification:</strong> Compare FMRs across markets</li>
                </ul>

                <h3>FMR Trends and Changes</h3>
                <p>
                  FMRs typically change 2-8% annually based on:
                </p>
                <ul>
                  <li>Local economic conditions</li>
                  <li>Housing supply and demand</li>
                  <li>Population growth or decline</li>
                  <li>New construction activity</li>
                  <li>Employment trends</li>
                  <li>Regional migration patterns</li>
                </ul>

                <h3>Payment Standards</h3>
                <p>
                  Public Housing Authorities (PHAs) use FMR to set payment standards:
                </p>
                <ul>
                  <li><strong>Basic Range:</strong> 90-110% of published FMR</li>
                  <li><strong>Exception Payment Standards:</strong> Up to 120% with HUD approval</li>
                  <li><strong>Success Rate Payment Standards:</strong> Based on local success in placing voucher holders</li>
                </ul>

                <h3>How to Access Official FMR Data</h3>
                <ol>
                  <li>Visit HUD User website: www.huduser.gov/portal/datasets/fmr.html</li>
                  <li>Select current fiscal year</li>
                  <li>Choose state and county/metro area</li>
                  <li>View FMRs for all bedroom sizes</li>
                  <li>Download complete datasets for analysis</li>
                </ol>

                <h3>Bedroom Size Definitions</h3>
                <p>
                  FMRs are published for unit sizes based on number of bedrooms:
                </p>
                <ul>
                  <li><strong>Studio (0-BR):</strong> No separate bedroom</li>
                  <li><strong>1-Bedroom:</strong> One separate bedroom</li>
                  <li><strong>2-Bedroom:</strong> Two separate bedrooms</li>
                  <li><strong>3-Bedroom:</strong> Three separate bedrooms</li>
                  <li><strong>4-Bedroom:</strong> Four separate bedrooms</li>
                </ul>

                <h3>FMR Limitations</h3>
                <p>
                  Important considerations when using FMR:
                </p>
                <ul>
                  <li><strong>Not Market Average:</strong> FMR is 40th percentile, not mean or median</li>
                  <li><strong>Includes All Units:</strong> New and old, luxury and basic</li>
                  <li><strong>Geographic Generalization:</strong> May not reflect specific neighborhoods</li>
                  <li><strong>Time Lag:</strong> Data is 1-2 years old when published</li>
                  <li><strong>Quality Neutral:</strong> Doesn't distinguish amenities or condition</li>
                </ul>

                <h3>Comparing Rent to FMR</h3>
                
                <h4>If Your Rent is Below FMR:</h4>
                <ul>
                  <li>Property may be underpriced for market</li>
                  <li>Excellent Section 8 opportunity</li>
                  <li>Potential for rent increase</li>
                  <li>May indicate lower quality or less desirable location</li>
                </ul>

                <h4>If Your Rent is At FMR:</h4>
                <ul>
                  <li>Competitively priced for market</li>
                  <li>Good Section 8 prospects</li>
                  <li>Reflects typical market conditions</li>
                </ul>

                <h4>If Your Rent is Above FMR:</h4>
                <ul>
                  <li>Premium property or location</li>
                  <li>May not qualify for Section 8</li>
                  <li>Justifiable if amenities/condition warrant</li>
                  <li>Verify with comparable market analysis</li>
                </ul>

                <h3>Recent FMR Policy Changes</h3>
                <ul>
                  <li><strong>SAFMR Expansion (2024):</strong> More areas required to use ZIP-based FMRs</li>
                  <li><strong>40th to 50th Percentile (Select Areas):</strong> Some high-cost areas shifted to 50th percentile</li>
                  <li><strong>Inflation Adjustments:</strong> Trend factors account for rapid rent increases</li>
                </ul>

                <h3>Best Practices for Landlords</h3>
                <ol>
                  <li><strong>Annual Review:</strong> Check new FMRs each October</li>
                  <li><strong>Market Comparison:</strong> Compare FMR to actual market rents in your area</li>
                  <li><strong>Documentation:</strong> Keep FMR data when justifying rent increases</li>
                  <li><strong>Section 8 Strategy:</strong> If below FMR, consider accepting vouchers</li>
                  <li><strong>Budget Planning:</strong> Use FMR trends to forecast future rents</li>
                </ol>

                <h3>State and Local Variations</h3>
                <p>
                  Some states and localities have additional rent regulations:
                </p>
                <ul>
                  <li><strong>Rent Control:</strong> Maximum allowable rents (NYC, San Francisco, etc.)</li>
                  <li><strong>Rent Stabilization:</strong> Limited annual increases (varies by jurisdiction)</li>
                  <li><strong>Just Cause Eviction:</strong> Restricts reasons for non-renewal</li>
                  <li><strong>Source of Income Protections:</strong> Cannot reject Section 8 vouchers</li>
                </ul>

                <h3>FMR in Investment Analysis</h3>
                <p>
                  Incorporate FMR into property analysis:
                </p>
                <ul>
                  <li><strong>Rent-to-FMR Ratio:</strong> Actual rent ÷ FMR (higher = premium property)</li>
                  <li><strong>FMR Growth Rate:</strong> Year-over-year FMR increase (market strength indicator)</li>
                  <li><strong>Section 8 Potential:</strong> Properties at or below FMR suitable for vouchers</li>
                  <li><strong>Market Positioning:</strong> Where property sits in local rent distribution</li>
                </ul>

                <h3>Resources</h3>
                <ul>
                  <li><strong>HUD User:</strong> Official FMR data and documentation</li>
                  <li><strong>Local PHA:</strong> Payment standards and Section 8 info</li>
                  <li><strong>Census ACS:</strong> Detailed housing cost data</li>
                  <li><strong>CoStar, Zillow:</strong> Private market rent data</li>
                  <li><strong>Apartment List:</strong> Rental market trends and data</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Fair Market Rent is a crucial metric for anyone involved in rental housing. Whether you're a landlord setting rents, a tenant evaluating affordability, or an investor analyzing markets, understanding FMR provides valuable context for decision-making. While FMR isn't a perfect reflection of every local market, it offers an objective, nationally consistent benchmark based on extensive data and methodology.
                </p>
                <p>
                  Use this calculator to quickly reference FMR levels across different markets, but always verify with official HUD data for the most current and accurate information. Combine FMR analysis with local market research, comparable property studies, and economic trends for a complete picture of rental market conditions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
