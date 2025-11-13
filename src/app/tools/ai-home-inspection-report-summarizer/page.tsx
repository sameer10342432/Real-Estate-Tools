'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Sparkles, BookOpen, AlertCircle, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AIHomeInspectionReportSummarizer() {
  const [inspectionReport, setInspectionReport] = useState('');
  const [propertyType, setPropertyType] = useState('Single-family home');
  const [yearBuilt, setYearBuilt] = useState(1990);

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-home-inspection-report-summarizer',
  });

  const handleSummarize = async () => {
    await generate({
      inspectionReport,
      propertyType,
      yearBuilt,
    });
  };

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'Major': 'bg-orange-100 text-orange-800 border-orange-200',
      'Moderate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Minor': 'bg-blue-100 text-blue-800 border-blue-200',
    };
    return colors[severity] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <FileText className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Home Inspection Report Summarizer</h1>
            <p className="text-muted-foreground mt-2">
              Get clear, actionable summaries of home inspection reports with AI-powered analysis
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Report Summarizer
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inspection Report Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inspectionReport">Paste Inspection Report *</Label>
                <Textarea
                  id="inspectionReport"
                  value={inspectionReport}
                  onChange={(e) => setInspectionReport(e.target.value)}
                  placeholder="Paste the full text of your home inspection report here. Include all sections: structural, electrical, plumbing, HVAC, roof, etc."
                  rows={10}
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 50 characters required for analysis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger id="propertyType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single-family home">Single-family home</SelectItem>
                      <SelectItem value="Condo">Condo</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Multi-family">Multi-family</SelectItem>
                      <SelectItem value="Mobile home">Mobile home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearBuilt">Year Built *</Label>
                  <Input
                    id="yearBuilt"
                    type="number"
                    value={yearBuilt}
                    onChange={(e) => setYearBuilt(Number(e.target.value))}
                    min={1800}
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleSummarize}
                  disabled={loading || inspectionReport.length < 50}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Report...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Summarize Report
                    </>
                  )}
                </Button>
                {data && (
                  <Button onClick={reset} variant="outline" size="lg">
                    Reset
                  </Button>
                )}
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Error</p>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {data && (
            <>
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Inspection Summary</span>
                    {data.overallCondition && (
                      <Badge className={getSeverityColor(data.overallCondition)} variant="outline">
                        {data.overallCondition}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {data.executiveSummary && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Executive Summary</h3>
                      <p className="text-sm">{data.executiveSummary}</p>
                    </div>
                  )}

                  {data.criticalIssues && data.criticalIssues.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          Critical Issues (Immediate Attention Required)
                        </h3>
                        <div className="space-y-3">
                          {data.criticalIssues.map((issue: any, idx: number) => (
                            <div key={idx} className="p-4 border-2 border-red-200 bg-red-50 rounded-lg">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-red-900">{issue.title || issue.issue}</h4>
                                  <p className="text-sm mt-1 text-red-800">{issue.description || issue.details}</p>
                                </div>
                                {issue.estimatedCost && (
                                  <Badge variant="outline" className="bg-white">
                                    ${issue.estimatedCost.toLocaleString()}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data.majorIssues && data.majorIssues.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600" />
                          Major Issues (Address Soon)
                        </h3>
                        <div className="space-y-3">
                          {data.majorIssues.map((issue: any, idx: number) => (
                            <div key={idx} className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-orange-900">{issue.title || issue.issue}</h4>
                                  <p className="text-sm mt-1 text-orange-800">{issue.description || issue.details}</p>
                                </div>
                                {issue.estimatedCost && (
                                  <Badge variant="outline" className="bg-white">
                                    ${issue.estimatedCost.toLocaleString()}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data.minorIssues && data.minorIssues.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                          Minor Issues (Monitor or Plan for Future)
                        </h3>
                        <ul className="space-y-2">
                          {data.minorIssues.map((issue: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-yellow-600 mt-1">•</span>
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.positiveFindings && data.positiveFindings.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Positive Findings
                        </h3>
                        <ul className="space-y-2">
                          {data.positiveFindings.map((finding: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.recommendations && data.recommendations.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Actions</h3>
                        <ul className="space-y-2">
                          {data.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">→</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.estimatedRepairCosts && (
                    <>
                      <Separator />
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Estimated Repair Costs</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Low Estimate</div>
                            <div className="text-2xl font-bold text-purple-900">
                              ${data.estimatedRepairCosts.low?.toLocaleString() || 'N/A'}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">High Estimate</div>
                            <div className="text-2xl font-bold text-purple-900">
                              ${data.estimatedRepairCosts.high?.toLocaleString() || 'N/A'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {data.negotiationPoints && data.negotiationPoints.length > 0 && (
                    <>
                      <Separator />
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Negotiation Points for Buyers</h3>
                        <ul className="space-y-1 text-sm">
                          {data.negotiationPoints.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to Home Inspection Report Analysis</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is AI Home Inspection Report Summarization?</h2>
              <p>
                AI Home Inspection Report Summarization uses artificial intelligence to analyze lengthy, technical home inspection documents and extract the most critical information into clear, prioritized summaries. This technology helps homebuyers, sellers, real estate agents, and investors quickly understand property conditions, identify deal-breakers, estimate repair costs, and make informed decisions without wading through 30-100 page technical reports filled with industry jargon.
              </p>
              <p>
                Professional home inspections are essential but challenging to interpret. A typical inspection report contains hundreds of observations across dozens of systems and components. Critical structural issues might be buried on page 47 between routine maintenance items. AI summarization cuts through the noise, highlighting what truly matters and organizing findings by urgency and cost impact.
              </p>

              <h2>Why Use AI for Inspection Report Analysis?</h2>

              <h3>1. Prioritization of Issues by Severity</h3>
              <p>
                Not all inspection findings are created equal. AI categorizes issues into clear priority levels:
              </p>
              <ul>
                <li><strong>Critical/Safety Issues</strong> - Immediate hazards or major system failures requiring urgent attention</li>
                <li><strong>Major Concerns</strong> - Significant defects affecting habitability or leading to expensive repairs if left unaddressed</li>
                <li><strong>Moderate Issues</strong> - Problems needing attention within 1-3 years to prevent escalation</li>
                <li><strong>Minor Items</strong> - Cosmetic defects or routine maintenance recommendations</li>
                <li><strong>Informational</strong> - Educational notes about systems and maintenance schedules</li>
              </ul>

              <h3>2. Translation from Technical to Plain Language</h3>
              <p>
                Inspection reports use construction terminology and building codes that confuse most readers. AI translates:
              </p>
              <ul>
                <li><strong>"Differential settlement in foundation"</strong> → Foundation is sinking unevenly, causing structural damage</li>
                <li><strong>"Knob and tube wiring observed"</strong> → Dangerous 1920s electrical system poses fire hazard, insurance may not cover</li>
                <li><strong>"Efflorescence on basement walls"</strong> → Water leaking through foundation, mold risk, structural concerns</li>
                <li><strong>"Flashing appears compromised at chimney"</strong> → Roof will leak at chimney during rain, water damage likely</li>
              </ul>

              <h3>3. Cost Estimation for Repairs</h3>
              <p>
                Understanding what repairs will cost is crucial for:
              </p>
              <ul>
                <li>Negotiating price reductions or repair credits</li>
                <li>Deciding whether to walk away from purchase</li>
                <li>Budgeting for post-purchase repairs</li>
                <li>Determining if investment property deal still works</li>
                <li>Planning renovation timeline and financing needs</li>
              </ul>

              <h3>4. Time Savings for Busy Professionals</h3>
              <p>
                Real estate transactions move quickly. AI provides:
              </p>
              <ul>
                <li>Instant summary available to buyers during inspection period deadlines</li>
                <li>Quick talking points for agents communicating with clients</li>
                <li>Rapid analysis for investors evaluating multiple properties</li>
                <li>Clear executive summary for busy buyers to share with family/advisors</li>
              </ul>

              <h2>Understanding Home Inspection Reports</h2>

              <h3>Standard Inspection Components</h3>
              <p>
                Professional home inspections cover multiple systems and structural elements:
              </p>

              <h4>1. Structural Components</h4>
              <ul>
                <li><strong>Foundation</strong> - Cracks, settling, water intrusion, structural integrity</li>
                <li><strong>Framing</strong> - Load-bearing walls, floor joists, roof trusses, structural modifications</li>
                <li><strong>Basement/Crawlspace</strong> - Moisture, ventilation, supports, drainage</li>
                <li><strong>Attic</strong> - Ventilation, insulation, structural issues, roof decking</li>
              </ul>

              <h4>2. Exterior Elements</h4>
              <ul>
                <li><strong>Roof</strong> - Shingles, flashing, chimneys, gutters, remaining lifespan</li>
                <li><strong>Siding</strong> - Condition, moisture damage, paint, caulking</li>
                <li><strong>Windows/Doors</strong> - Operation, seals, hardware, energy efficiency</li>
                <li><strong>Grading/Drainage</strong> - Slope away from foundation, downspout extensions</li>
              </ul>

              <h4>3. Major Systems</h4>
              <ul>
                <li><strong>HVAC</strong> - Heating and cooling equipment age, operation, safety</li>
                <li><strong>Electrical</strong> - Panel capacity, wiring type, safety issues, GFCI outlets</li>
                <li><strong>Plumbing</strong> - Pipe materials, water pressure, fixtures, water heater</li>
                <li><strong>Water/Sewer</strong> - Well systems, septic tanks, municipal connections</li>
              </ul>

              <h4>4. Interior Elements</h4>
              <ul>
                <li><strong>Kitchen/Bathrooms</strong> - Fixtures, cabinets, ventilation, safety features</li>
                <li><strong>Flooring</strong> - Condition, levelness, moisture issues</li>
                <li><strong>Walls/Ceilings</strong> - Cracks, water stains, proper insulation</li>
                <li><strong>Stairs/Railings</strong> - Safety, code compliance, structural soundness</li>
              </ul>

              <h2>How to Use the AI Inspection Report Summarizer</h2>

              <h3>Step 1: Obtain Full Inspection Report</h3>
              <p>
                Work with your home inspector to receive the complete digital report. Most inspectors provide:
              </p>
              <ul>
                <li><strong>PDF Report</strong> - Most common format with photos and descriptions</li>
                <li><strong>Online Portal</strong> - Web-based reports with clickable sections</li>
                <li><strong>Email Summary</strong> - Text-based report sent via email</li>
                <li><strong>Printed Report</strong> - Hardcopy (less ideal, requires manual transcription)</li>
              </ul>
              <p>
                <strong>Tip:</strong> Request the report in text-searchable PDF or plain text format for easiest copy/paste into the AI tool.
              </p>

              <h3>Step 2: Copy Complete Report Text</h3>
              <p>
                For best results, include the entire inspection report:
              </p>
              <ul>
                <li>All sections from structural to cosmetic</li>
                <li>Inspector's narrative descriptions of each finding</li>
                <li>Recommended actions and timelines</li>
                <li>Safety concerns and code violations</li>
                <li>Positive findings about well-maintained systems</li>
              </ul>
              <p>
                <strong>What to Exclude:</strong> Header/footer information, inspector credentials, legal disclaimers (unless they contain important liability limitations).
              </p>

              <h3>Step 3: Provide Property Context</h3>
              <p>
                Property type and age help AI calibrate expectations:
              </p>

              <h4>Property Type Considerations:</h4>
              <ul>
                <li><strong>Single-Family Home</strong> - Full system independence, all components buyer's responsibility</li>
                <li><strong>Condo</strong> - HOA maintains exterior/roof, unit owner responsible for interior</li>
                <li><strong>Townhouse</strong> - Shared walls, HOA handles some systems, mixed responsibility</li>
                <li><strong>Multi-Family</strong> - Commercial-grade systems, rental income at stake with repairs</li>
                <li><strong>Mobile Home</strong> - Different structural standards, specialized systems</li>
              </ul>

              <h4>Year Built Context:</h4>
              <ul>
                <li><strong>Pre-1950 Homes</strong> - Expect knob-and-tube wiring, galvanized plumbing, foundation settling, outdated systems</li>
                <li><strong>1950-1980 Homes</strong> - Aluminum wiring possible, asbestos materials, polybutylene plumbing</li>
                <li><strong>1980-2000 Homes</strong> - Modern systems reaching end of life, better insulation</li>
                <li><strong>2000+ Homes</strong> - Current code compliance, newer systems, energy efficiency</li>
              </ul>

              <h3>Step 4: Review Prioritized Summary</h3>
              <p>
                AI organizes findings by urgency and impact:
              </p>
              <ul>
                <li><strong>Critical Issues First</strong> - Safety hazards, structural failures, major system breakdowns</li>
                <li><strong>Cost Estimates</strong> - Ballpark repair costs to inform negotiations</li>
                <li><strong>Timeline Recommendations</strong> - When each repair should be addressed</li>
                <li><strong>Negotiation Points</strong> - Issues to leverage in purchase price discussions</li>
                <li><strong>Positive Findings</strong> - Well-maintained systems and recent updates</li>
              </ul>

              <h2>Critical vs. Cosmetic: What Really Matters</h2>

              <h3>Walk-Away Issues (Deal Breakers)</h3>
              <p>
                These findings often justify terminating a purchase contract:
              </p>
              <ul>
                <li><strong>Major Foundation Failure</strong> - Active structural movement, $30,000-100,000+ to repair</li>
                <li><strong>Knob-and-Tube Wiring</strong> - Fire hazard, uninsurable, $8,000-25,000 to rewire</li>
                <li><strong>Extensive Mold/Water Damage</strong> - Health hazard, hidden extent, $15,000-50,000 remediation</li>
                <li><strong>Failed Septic System</strong> - $10,000-30,000 replacement, permits required</li>
                <li><strong>Roof Near Failure</strong> - Imminent leaks, $10,000-30,000 replacement needed immediately</li>
                <li><strong>Active Termite Infestation</strong> - Structural damage extent unknown, $3,000-20,000+</li>
              </ul>

              <h3>Major Concerns (Negotiate Hard)</h3>
              <p>
                Significant issues requiring price reduction or seller repairs:
              </p>
              <ul>
                <li><strong>HVAC System Failure</strong> - No heat/AC, $5,000-15,000 replacement</li>
                <li><strong>Water Heater at End of Life</strong> - Risk of flooding, $800-2,500 replacement</li>
                <li><strong>Electrical Panel Undersized</strong> - Safety concern, $1,500-4,000 upgrade</li>
                <li><strong>Roof 3-5 Years Remaining</strong> - Plan for near-term expense, negotiate $5,000-10,000 credit</li>
                <li><strong>Drainage Problems</strong> - Water pooling at foundation, $2,000-8,000 to fix</li>
              </ul>

              <h3>Minor Issues (Budget for Future)</h3>
              <p>
                Problems to note but not worth killing a deal:
              </p>
              <ul>
                <li><strong>Cosmetic Repairs</strong> - Paint, minor drywall cracks, caulking</li>
                <li><strong>Weatherstripping Needed</strong> - $100-300 DIY project</li>
                <li><strong>GFCI Outlets Missing</strong> - $150-400 to add where required</li>
                <li><strong>Gutter Guards Recommended</strong> - $800-2,000 optional upgrade</li>
                <li><strong>Routine Maintenance</strong> - HVAC service, chimney cleaning, air filter replacement</li>
              </ul>

              <h2>Best Practices for Inspection Report Analysis</h2>

              <h3>1. Attend the Inspection in Person</h3>
              <p>
                Don't rely solely on the written report:
              </p>
              <ul>
                <li>Inspector will explain issues verbally in more detail</li>
                <li>You can ask questions about severity and repair urgency</li>
                <li>See problems firsthand to gauge true condition</li>
                <li>Inspector may point out things not included in formal report</li>
                <li>Build relationship with inspector for follow-up questions</li>
              </ul>

              <h3>2. Get Specialist Inspections for Red Flags</h3>
              <p>
                General inspectors identify problems but may recommend specialists:
              </p>
              <ul>
                <li><strong>Structural Engineer</strong> - For foundation cracks, sagging floors, concerning settlement ($500-1,500)</li>
                <li><strong>Roofer</strong> - For roof lifespan estimates and repair vs. replace decisions ($150-500)</li>
                <li><strong>HVAC Contractor</strong> - For system capacity, efficiency, remaining life ($100-300)</li>
                <li><strong>Electrician</strong> - For outdated wiring, panel issues, electrical hazards ($150-400)</li>
                <li><strong>Plumber</strong> - For sewer line camera inspection, well testing ($200-800)</li>
                <li><strong>Mold Inspector</strong> - For suspected mold, air quality testing ($300-1,000)</li>
              </ul>

              <h3>3. Understand Inspection Limitations</h3>
              <p>
                Home inspectors cannot and do not:
              </p>
              <ul>
                <li>Move furniture or stored items to inspect behind/under</li>
                <li>Inspect areas not safely accessible (steep roofs, sealed crawlspaces)</li>
                <li>Determine permit history or code compliance of past work</li>
                <li>Predict exactly when systems will fail</li>
                <li>Perform destructive testing (cutting walls to see inside)</li>
                <li>Inspect septic systems, wells, pool/spa equipment (separate specialists)</li>
              </ul>

              <h3>4. Use Reports for Negotiations</h3>
              <p>
                Leverage inspection findings strategically:
              </p>
              <ul>
                <li><strong>Request Repairs</strong> - Seller fixes critical items before closing</li>
                <li><strong>Ask for Credits</strong> - Reduce purchase price by estimated repair costs</li>
                <li><strong>Negotiate Price Reduction</strong> - Lower offer based on total repair estimates</li>
                <li><strong>Walk Away</strong> - Exercise inspection contingency if issues too severe</li>
                <li><strong>Request Extensions</strong> - More time to get specialist opinions on major concerns</li>
              </ul>

              <h2>Common Inspection Report Mistakes to Avoid</h2>

              <h3>1. Ignoring "Informational" Items</h3>
              <p>
                <strong>The Problem:</strong> Dismissing items marked "informational" as unimportant.
              </p>
              <p>
                <strong>The Reality:</strong> Inspectors use "informational" to describe system ages, maintenance needs, and future planning items. "Informational: Water heater installed 2005" means you're buying a 18-year-old water heater that could fail any day (typical life 10-15 years).
              </p>
              <p>
                <strong>The Solution:</strong> Read all sections. Budget for replacing systems at end of life even if currently functional.
              </p>

              <h3>2. Focusing Only on Big-Ticket Items</h3>
              <p>
                <strong>The Problem:</strong> Negotiating $5,000 roof credit while ignoring 15 smaller issues totaling $8,000.
              </p>
              <p>
                <strong>The Solution:</strong> Create comprehensive repair list. Multiple $500 items add up quickly. Negotiate total repair cost, not individual items.
              </p>

              <h3>3. Expecting Perfection</h3>
              <p>
                <strong>The Problem:</strong> Rejecting home because inspection found issues.
              </p>
              <p>
                <strong>The Reality:</strong> Every home has inspection findings. The question is whether they're manageable or deal-breakers. Even new construction has punch lists.
              </p>
              <p>
                <strong>The Solution:</strong> Evaluate issues in context of home age, price, and market. Focus on health/safety and major systems, not minor cosmetic items.
              </p>

              <h3>4. Not Budgeting for Deferred Maintenance</h3>
              <p>
                <strong>The Problem:</strong> Assuming everything working during inspection will keep working indefinitely.
              </p>
              <p>
                <strong>The Solution:</strong> Budget 1-3% of home value annually for maintenance and repairs. Create 5-year capital improvement plan based on system ages from inspection.
              </p>

              <h3>5. Skipping Inspection to "Save Money"</h3>
              <p>
                <strong>The Problem:</strong> Waiving inspection in competitive markets to make offer more attractive.
              </p>
              <p>
                <strong>The Risk:</strong> $300-600 inspection fee vs. $20,000 unknown foundation problem. False economy that can cost tens of thousands.
              </p>
              <p>
                <strong>The Solution:</strong> Always inspect. If you must waive contingency to compete, do pre-offer inspection or accept you're buying "as-is" with higher risk.
              </p>

              <h2>Real-World Applications</h2>

              <h3>For First-Time Homebuyers</h3>
              <p>
                <strong>Scenario:</strong> You received a 47-page inspection report and don't know what's serious vs. normal.
              </p>
              <p>
                <strong>AI Application:</strong> Get instant prioritization of all findings. Understand which items require immediate negotiation vs. future planning. Translate technical jargon into plain English for family discussions. Create talking points for agent conversations about seller repair requests.
              </p>

              <h3>For Real Estate Investors</h3>
              <p>
                <strong>Scenario:</strong> Evaluating multiple investment properties, need to quickly assess repair costs.
              </p>
              <p>
                <strong>AI Application:</strong> Rapidly summarize inspection reports to calculate accurate ARV (After Repair Value) scenarios. Identify deal-killing issues before closing. Create repair budgets for contractor bids. Determine if rehab costs still allow profitable flip or rental returns.
              </p>

              <h3>For Sellers</h3>
              <p>
                <strong>Scenario:</strong> Want to address major issues before listing to avoid deal-killing inspection surprises.
              </p>
              <p>
                <strong>AI Application:</strong> Get pre-listing inspection summary identifying what buyers will find. Prioritize which repairs deliver best ROI. Proactively fix critical items, disclose minor ones. Create seller disclosures based on inspection findings to build buyer trust.
              </p>

              <h3>For Real Estate Agents</h3>
              <p>
                <strong>Scenario:</strong> Client received inspection report at 6 PM, inspection period expires tomorrow at noon.
              </p>
              <p>
                <strong>AI Application:</strong> Quickly review and summarize report before calling client. Identify key negotiation points for buyer's agent. Prepare repair request list highlighting critical items. Help client understand which issues are normal vs. concerning. Make informed decision on tight timeline.
              </p>

              <h3>For Home Sellers Reviewing Buyer's Inspection Objections</h3>
              <p>
                <strong>Scenario:</strong> Buyer sent 2-page repair request list after inspection.
              </p>
              <p>
                <strong>AI Application:</strong> Evaluate which requested repairs are legitimate vs. unreasonable. Understand true cost and urgency of each item. Develop counter-offer strategy: what to fix, what to credit, what to refuse. Prepare evidence for why certain items are normal for home age.
              </p>

              <h2>Understanding System Lifespans</h2>

              <h3>Expected Useful Life of Home Components</h3>
              <p>
                Knowing typical lifespans helps budget for replacements:
              </p>

              <h4>Major Systems (15-30 years):</h4>
              <ul>
                <li><strong>Furnace (Gas)</strong> - 15-20 years</li>
                <li><strong>Air Conditioner</strong> - 15-20 years</li>
                <li><strong>Heat Pump</strong> - 15-20 years</li>
                <li><strong>Water Heater (Tank)</strong> - 10-15 years</li>
                <li><strong>Water Heater (Tankless)</strong> - 20-25 years</li>
                <li><strong>Electrical Panel</strong> - 25-40 years (if adequate capacity)</li>
              </ul>

              <h4>Exterior Elements (15-50 years):</h4>
              <ul>
                <li><strong>Asphalt Shingle Roof</strong> - 15-30 years</li>
                <li><strong>Metal Roof</strong> - 40-70 years</li>
                <li><strong>Vinyl Siding</strong> - 20-40 years</li>
                <li><strong>Wood Siding (Painted)</strong> - 10-20 years (with maintenance)</li>
                <li><strong>Windows</strong> - 15-30 years</li>
                <li><strong>Garage Door</strong> - 15-30 years</li>
              </ul>

              <h4>Interior Components (10-30 years):</h4>
              <ul>
                <li><strong>Dishwasher</strong> - 9-13 years</li>
                <li><strong>Refrigerator</strong> - 10-18 years</li>
                <li><strong>Washer/Dryer</strong> - 10-15 years</li>
                <li><strong>Carpet</strong> - 8-15 years</li>
                <li><strong>Hardwood Floors</strong> - 25-100 years (with refinishing)</li>
                <li><strong>Kitchen Cabinets</strong> - 20-50 years</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                AI home inspection report summarization transforms overwhelming technical documents into clear, actionable insights that empower better real estate decisions. By prioritizing issues by severity, translating jargon into plain language, and estimating repair costs, AI helps buyers avoid costly mistakes, investors calculate accurate deal numbers, and sellers address problems proactively.
              </p>
              <p>
                The key to successful home inspection analysis is understanding that no home is perfect. The goal isn't finding a defect-free property - it's identifying which issues are manageable maintenance items versus deal-breaking structural or safety concerns. AI summarization provides the clarity needed to make these critical distinctions quickly and confidently.
              </p>
              <p>
                Whether you're buying your first home, flipping investment properties, or selling a long-owned residence, professional home inspections are essential due diligence. AI-powered analysis ensures you extract maximum value from these reports, focusing attention on what truly matters and avoiding the paralysis that comes from information overload. Use inspection summaries as roadmaps for informed negotiations, realistic budgeting, and confident transaction decisions.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
