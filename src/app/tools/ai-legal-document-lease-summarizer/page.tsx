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
import { Scale, Sparkles, BookOpen, AlertCircle, Loader2, FileText, AlertTriangle } from 'lucide-react';
import { useAITool } from '@/hooks/useAITool';

export default function AILegalDocumentLeaseSummarizer() {
  const [documentText, setDocumentText] = useState('');
  const [documentType, setDocumentType] = useState('Residential Lease Agreement');
  const [focusAreas, setFocusAreas] = useState('');

  const { generate, loading, error, data, reset } = useAITool({
    slug: 'ai-legal-document-lease-summarizer',
  });

  const handleSummarize = async () => {
    await generate({
      documentText,
      documentType,
      focusAreas: focusAreas || undefined,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <Scale className="h-8 w-8 text-amber-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">AI Legal Document / Lease Summarizer</h1>
            <p className="text-muted-foreground mt-2">
              Get clear summaries of complex legal documents and lease agreements with AI analysis
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="calculator">
            <Sparkles className="h-4 w-4 mr-2" />
            Document Summarizer
          </TabsTrigger>
          <TabsTrigger value="guide">
            <BookOpen className="h-4 w-4 mr-2" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Legal Document Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="documentText">Paste Legal Document or Lease Agreement *</Label>
                <Textarea
                  id="documentText"
                  value={documentText}
                  onChange={(e) => setDocumentText(e.target.value)}
                  placeholder="Paste the full text of your lease agreement, rental contract, or legal document here..."
                  rows={12}
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 100 characters required for analysis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="documentType">Document Type *</Label>
                  <Select value={documentType} onValueChange={setDocumentType}>
                    <SelectTrigger id="documentType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential Lease Agreement">Residential Lease Agreement</SelectItem>
                      <SelectItem value="Commercial Lease Agreement">Commercial Lease Agreement</SelectItem>
                      <SelectItem value="Month-to-Month Rental Agreement">Month-to-Month Rental Agreement</SelectItem>
                      <SelectItem value="Sublease Agreement">Sublease Agreement</SelectItem>
                      <SelectItem value="Roommate Agreement">Roommate Agreement</SelectItem>
                      <SelectItem value="Property Management Agreement">Property Management Agreement</SelectItem>
                      <SelectItem value="Purchase Agreement">Purchase Agreement</SelectItem>
                      <SelectItem value="HOA Documents">HOA Documents</SelectItem>
                      <SelectItem value="Other Legal Document">Other Legal Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="focusAreas">Focus Areas (Optional)</Label>
                  <Input
                    id="focusAreas"
                    value={focusAreas}
                    onChange={(e) => setFocusAreas(e.target.value)}
                    placeholder="e.g., Early termination, pet policy, utilities"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleSummarize}
                  disabled={loading || documentText.length < 100}
                  className="flex-1"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Document...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Summarize Document
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
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Document Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {data.executiveSummary && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h3 className="font-semibold mb-2">Executive Summary</h3>
                      <p className="text-sm">{data.executiveSummary}</p>
                    </div>
                  )}

                  {data.keyTerms && data.keyTerms.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          Key Terms & Conditions
                        </h3>
                        <div className="space-y-3">
                          {data.keyTerms.map((term: any, idx: number) => (
                            <div key={idx} className="p-4 border rounded-lg">
                              <h4 className="font-semibold mb-1">{term.title || term.term}</h4>
                              <p className="text-sm text-muted-foreground">{term.description || term.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data.financialTerms && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Financial Obligations</h3>
                        <div className="grid gap-3">
                          {data.financialTerms.rent && (
                            <div className="p-3 border rounded-lg flex justify-between items-center">
                              <span className="font-medium">Monthly Rent</span>
                              <span className="text-lg font-semibold">${data.financialTerms.rent.toLocaleString()}</span>
                            </div>
                          )}
                          {data.financialTerms.deposit && (
                            <div className="p-3 border rounded-lg flex justify-between items-center">
                              <span className="font-medium">Security Deposit</span>
                              <span className="text-lg font-semibold">${data.financialTerms.deposit.toLocaleString()}</span>
                            </div>
                          )}
                          {data.financialTerms.otherFees && data.financialTerms.otherFees.length > 0 && (
                            <div className="p-3 border rounded-lg">
                              <div className="font-medium mb-2">Other Fees</div>
                              <ul className="space-y-1 text-sm">
                                {data.financialTerms.otherFees.map((fee: any, idx: number) => (
                                  <li key={idx} className="flex justify-between">
                                    <span>{fee.name || fee}</span>
                                    {fee.amount && <span>${fee.amount.toLocaleString()}</span>}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {data.importantClauses && data.importantClauses.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Important Clauses to Note</h3>
                        <ul className="space-y-2">
                          {data.importantClauses.map((clause: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{clause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.redFlags && data.redFlags.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          Potential Concerns / Red Flags
                        </h3>
                        <div className="space-y-2">
                          {data.redFlags.map((flag: string, idx: number) => (
                            <div key={idx} className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{flag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data.tenantRights && data.tenantRights.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Your Rights & Protections</h3>
                        <ul className="space-y-2">
                          {data.tenantRights.map((right: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{right}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.landlordObligations && data.landlordObligations.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Landlord Obligations</h3>
                        <ul className="space-y-2">
                          {data.landlordObligations.map((obligation: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1">→</span>
                              <span>{obligation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {data.terminationClauses && (
                    <>
                      <Separator />
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Termination & Exit Terms</h3>
                        <p className="text-sm">{data.terminationClauses}</p>
                      </div>
                    </>
                  )}

                  {data.recommendations && data.recommendations.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Recommendations & Next Steps</h3>
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

                  <Separator />
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Important Disclaimer
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      This summary is provided for informational purposes only and does not constitute legal advice. 
                      For questions about your specific situation or before signing any legal document, consult with 
                      a qualified attorney licensed in your jurisdiction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {data.questionsToAsk && data.questionsToAsk.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Questions to Ask Before Signing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.questionsToAsk.map((question: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">?</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Guide to Legal Document & Lease Analysis</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2>What is AI Legal Document Summarization?</h2>
              <p>
                AI Legal Document Summarization uses artificial intelligence to analyze complex legal documents, lease agreements, and contracts, translating dense legal language into clear, understandable summaries that highlight key terms, obligations, risks, and rights. This technology helps tenants, landlords, homebuyers, and real estate professionals quickly understand what they're agreeing to without spending hours deciphering legal jargon or paying hundreds of dollars for attorney review of routine documents.
              </p>
              <p>
                Legal documents are intentionally written in precise but complex language that protects parties legally while being difficult for non-lawyers to interpret. A typical residential lease agreement can be 15-40 pages of dense text filled with terms like "force majeure," "quiet enjoyment," "joint and several liability," and nested clauses that obscure practical implications. AI summarization cuts through the complexity to extract what actually matters for your situation.
              </p>

              <h2>Why Use AI for Legal Document Analysis?</h2>

              <h3>1. Translation from Legalese to Plain English</h3>
              <p>
                AI explains legal terms in language anyone can understand:
              </p>
              <ul>
                <li><strong>"Joint and several liability"</strong> → If you have roommates, landlord can sue any one of you for the entire rent if others don't pay</li>
                <li><strong>"Right of quiet enjoyment"</strong> → Landlord can't constantly disturb you or enter without proper notice</li>
                <li><strong>"Holdover tenant"</strong> → If you stay after lease ends without new agreement, you might pay double rent</li>
                <li><strong>"Force majeure"</strong> → If natural disaster or war happens, parties may not be held responsible for failure to perform</li>
                <li><strong>"Subordination clause"</strong> → If landlord defaults on mortgage, bank could evict you even though you paid rent</li>
              </ul>

              <h3>2. Identification of Unusual or Unfair Clauses</h3>
              <p>
                AI flags potentially problematic provisions:
              </p>
              <ul>
                <li><strong>Automatic Renewal Clauses</strong> - Lease auto-renews unless you give notice 90+ days early</li>
                <li><strong>Excessive Penalties</strong> - $100/day late fees or entire security deposit forfeited for minor violations</li>
                <li><strong>Broad Landlord Access</strong> - Landlord can enter "at any time" without specific notice requirements</li>
                <li><strong>Non-Refundable Fees</strong> - Security deposit called "non-refundable fee" (may be illegal in many states)</li>
                <li><strong>Waiver of Rights</strong> - Tenant waives right to sue for landlord negligence or habitability issues</li>
              </ul>

              <h3>3. Cost Savings on Legal Review</h3>
              <p>
                While never a replacement for an attorney when needed, AI summarization:
              </p>
              <ul>
                <li>Provides instant understanding of standard agreements (residential leases, basic contracts)</li>
                <li>Helps you identify if document has unusual terms requiring attorney review</li>
                <li>Costs $0 vs. $200-500 for attorney to review routine lease</li>
                <li>Allows you to ask more informed questions if you do consult an attorney</li>
                <li>Helps you understand which sections need legal clarification</li>
              </ul>

              <h3>4. Faster, More Confident Decision-Making</h3>
              <p>
                Rental markets move fast. AI provides:
              </p>
              <ul>
                <li>Instant summary while viewing apartment (read lease on your phone)</li>
                <li>Quick comparison of lease terms between multiple properties</li>
                <li>Clear understanding of what you're signing before pressure to commit</li>
                <li>Identification of negotiable terms and deal-breakers</li>
              </ul>

              <h2>Types of Documents AI Can Summarize</h2>

              <h3>Residential Lease Agreements</h3>
              <p>
                <strong>What AI Analyzes:</strong>
              </p>
              <ul>
                <li>Rent amount, due date, accepted payment methods, late fees</li>
                <li>Security deposit amount, conditions for return, deductions allowed</li>
                <li>Lease term, renewal options, early termination penalties</li>
                <li>Utilities included vs. tenant-paid, how they're calculated</li>
                <li>Pet policies, deposits, restrictions, additional fees</li>
                <li>Maintenance responsibilities (who fixes what)</li>
                <li>Guest policies, subletting rules, occupancy limits</li>
                <li>Landlord entry rights, notice requirements</li>
                <li>Parking, storage, amenity access</li>
              </ul>

              <h3>Commercial Lease Agreements</h3>
              <p>
                <strong>What AI Analyzes:</strong>
              </p>
              <ul>
                <li>Base rent, common area maintenance (CAM) charges, other fees</li>
                <li>Lease type: Triple net (NNN), gross, modified gross</li>
                <li>Permitted uses and restrictions on business type</li>
                <li>Tenant improvement allowances and responsibilities</li>
                <li>Operating hours, signage rights, exclusivity clauses</li>
                <li>Assignment and subletting provisions</li>
                <li>Insurance requirements and liability allocation</li>
                <li>Renewal options, rent escalation formulas</li>
              </ul>

              <h3>HOA Documents (CC&Rs, Bylaws)</h3>
              <p>
                <strong>What AI Analyzes:</strong>
              </p>
              <ul>
                <li>Monthly/annual fees and special assessment authority</li>
                <li>Architectural control and approval processes</li>
                <li>Pet restrictions, noise rules, parking regulations</li>
                <li>Rental restrictions or short-term rental bans</li>
                <li>Landscaping requirements and exterior maintenance rules</li>
                <li>Common area usage rights and limitations</li>
                <li>Dispute resolution procedures and enforcement mechanisms</li>
              </ul>

              <h3>Property Management Agreements</h3>
              <p>
                <strong>What AI Analyzes:</strong>
              </p>
              <ul>
                <li>Management fees: percentage of rent vs. flat fee</li>
                <li>Leasing fees, tenant placement fees</li>
                <li>Scope of services: what's included, what costs extra</li>
                <li>Owner vs. manager responsibilities</li>
                <li>Financial reporting frequency and detail</li>
                <li>Contract term, termination notice requirements</li>
                <li>Liability limitations and insurance requirements</li>
              </ul>

              <h2>How to Use the AI Legal Document Summarizer</h2>

              <h3>Step 1: Obtain Complete Document</h3>
              <p>
                For best results, paste the entire document:
              </p>
              <ul>
                <li><strong>Digital Documents</strong> - Copy text directly from PDF or Word doc</li>
                <li><strong>Paper Documents</strong> - Use smartphone scanner app (Adobe Scan, CamScanner) with OCR</li>
                <li><strong>Email Attachments</strong> - Download and extract text</li>
                <li><strong>Online Forms</strong> - Copy all sections including fine print</li>
              </ul>
              <p>
                <strong>Important:</strong> Include all pages, even boilerplate sections. "Standard" clauses often contain important terms that vary between landlords or agreements.
              </p>

              <h3>Step 2: Select Document Type</h3>
              <p>
                Accurate categorization helps AI focus on relevant concerns:
              </p>
              <ul>
                <li><strong>Residential Lease</strong> - Apartment, house, condo rental for living</li>
                <li><strong>Commercial Lease</strong> - Office, retail, warehouse, business use</li>
                <li><strong>Month-to-Month</strong> - No fixed term, either party can terminate with notice</li>
                <li><strong>Sublease</strong> - You're renting from current tenant, not property owner</li>
                <li><strong>Roommate Agreement</strong> - Contract between co-tenants (separate from lease)</li>
                <li><strong>Property Management</strong> - Landlord hiring company to manage rental</li>
                <li><strong>Purchase Agreement</strong> - Contract to buy real estate</li>
                <li><strong>HOA Documents</strong> - Community rules and regulations</li>
              </ul>

              <h3>Step 3: Specify Focus Areas (Optional)</h3>
              <p>
                If you have specific concerns, mention them:
              </p>
              <ul>
                <li><strong>Early Termination</strong> - Need to break lease for job relocation, military deployment</li>
                <li><strong>Pet Policy</strong> - Want to understand restrictions, fees, liability</li>
                <li><strong>Maintenance</strong> - Unclear who's responsible for repairs</li>
                <li><strong>Utilities</strong> - How charges are calculated, what's included</li>
                <li><strong>Subletting</strong> - Whether allowed, under what conditions</li>
                <li><strong>Renewal Terms</strong> - How rent increases, notification requirements</li>
              </ul>

              <h3>Step 4: Review Prioritized Summary</h3>
              <p>
                AI organizes findings into actionable sections:
              </p>
              <ul>
                <li><strong>Executive Summary</strong> - Quick overview of document purpose and key terms</li>
                <li><strong>Financial Obligations</strong> - All costs you'll pay, when, and how</li>
                <li><strong>Your Rights</strong> - What you're entitled to as tenant/buyer/member</li>
                <li><strong>Red Flags</strong> - Unusual, potentially unfair, or concerning clauses</li>
                <li><strong>Important Dates</strong> - Deadlines, notice periods, renewal dates</li>
                <li><strong>Questions to Ask</strong> - What to clarify before signing</li>
              </ul>

              <h2>Understanding Common Lease Clauses</h2>

              <h3>Financial Terms</h3>

              <h4>Rent and Fees</h4>
              <ul>
                <li><strong>Base Rent</strong> - Your monthly payment, when it's due, accepted payment methods</li>
                <li><strong>Late Fees</strong> - How much, when they kick in (grace period), maximum allowed by law</li>
                <li><strong>Application Fee</strong> - One-time charge for credit/background check (usually non-refundable)</li>
                <li><strong>Move-In Costs</strong> - First month, last month, security deposit due at signing</li>
                <li><strong>Pet Deposit/Rent</strong> - Refundable deposit vs. non-refundable monthly pet rent</li>
                <li><strong>Amenity Fees</strong> - Parking, storage, gym, trash, pest control charges</li>
              </ul>

              <h4>Security Deposit Rules</h4>
              <ul>
                <li><strong>Amount</strong> - Typically 1-2 months' rent (some states limit maximum)</li>
                <li><strong>Interest</strong> - Some states require landlord to pay interest on deposits held</li>
                <li><strong>Allowable Deductions</strong> - Unpaid rent, damages beyond normal wear and tear, cleaning</li>
                <li><strong>Return Timeline</strong> - State laws typically require 14-60 days after move-out</li>
                <li><strong>Documentation</strong> - Itemized list of deductions, receipts, photos required</li>
              </ul>

              <h3>Lease Duration and Termination</h3>

              <h4>Fixed-Term Lease</h4>
              <ul>
                <li><strong>Lease Period</strong> - Usually 6 months or 1 year</li>
                <li><strong>Early Termination</strong> - Penalties (often 2 months' rent), buyout options</li>
                <li><strong>Exceptions</strong> - Military deployment, domestic violence, uninhabitable conditions</li>
                <li><strong>Subletting</strong> - Whether allowed, landlord approval required, your ongoing liability</li>
              </ul>

              <h4>Renewal and Rent Increases</h4>
              <ul>
                <li><strong>Notice Requirements</strong> - How much advance notice to renew or not renew (30-90 days typical)</li>
                <li><strong>Rent Increase Limits</strong> - Some cities have rent control restricting increases</li>
                <li><strong>Automatic Renewal</strong> - Whether lease auto-renews if you don't give notice</li>
                <li><strong>Month-to-Month Conversion</strong> - What happens when fixed term ends</li>
              </ul>

              <h3>Maintenance and Repairs</h3>

              <h4>Landlord Responsibilities</h4>
              <ul>
                <li>Maintain habitability (heat, water, electricity, structural soundness)</li>
                <li>Repair major systems (HVAC, plumbing, electrical)</li>
                <li>Comply with building and housing codes</li>
                <li>Maintain common areas</li>
                <li>Make repairs in reasonable timeframe</li>
              </ul>

              <h4>Tenant Responsibilities</h4>
              <ul>
                <li>Report maintenance issues promptly</li>
                <li>Keep unit clean and sanitary</li>
                <li>Replace light bulbs, smoke detector batteries (typically)</li>
                <li>Prevent freezing pipes, report leaks quickly</li>
                <li>Pay for damages you cause beyond normal wear and tear</li>
              </ul>

              <h2>Red Flags in Lease Agreements</h2>

              <h3>Terms to Negotiate or Avoid</h3>

              <h4>Excessive Penalties</h4>
              <p>
                <strong>Red Flag:</strong> "Late fee of $100 per day" or "Parking in wrong spot: $500 fine"
              </p>
              <p>
                <strong>Why It's Problematic:</strong> Disproportionate to actual harm, may be unenforceable, shows landlord focused on penalties over relationship.
              </p>
              <p>
                <strong>What's Reasonable:</strong> Late fees 5-10% of monthly rent or $50-100, reasonable fines for actual violations.
              </p>

              <h4>Waiver of Legal Rights</h4>
              <p>
                <strong>Red Flag:</strong> "Tenant waives right to sue landlord for any reason" or "Tenant agrees landlord not liable for injuries or property damage"
              </p>
              <p>
                <strong>Why It's Problematic:</strong> You can't sign away rights to safe, habitable housing. Such clauses may be void and unenforceable, but signal problematic landlord.
              </p>
              <p>
                <strong>What to Do:</strong> Consult attorney. These clauses are often illegal but indicate landlord trying to avoid responsibilities.
              </p>

              <h4>Unreasonable Entry Rights</h4>
              <p>
                <strong>Red Flag:</strong> "Landlord may enter at any time without notice" or "Landlord reserves right to show unit to prospective tenants with 1 hour notice"
              </p>
              <p>
                <strong>Why It's Problematic:</strong> Most states require 24-48 hours notice except emergencies. Tenant has right to quiet enjoyment and privacy.
              </p>
              <p>
                <strong>What's Reasonable:</strong> Landlord may enter with 24-48 hours notice for repairs, inspections, showings. Emergency entry allowed without notice.
              </p>

              <h4>Automatic Renewal with Long Notice Period</h4>
              <p>
                <strong>Red Flag:</strong> "Lease automatically renews for one year unless tenant gives notice 90 days before lease end"
              </p>
              <p>
                <strong>Why It's Problematic:</strong> Easy to miss deadline, locks you in for another year. 90 days is longer than typical 30-60 days.
              </p>
              <p>
                <strong>What to Do:</strong> Set calendar reminder for 100 days before lease end. Negotiate shorter notice period (60 days). Confirm in writing your intent to vacate.
              </p>

              <h4>Joint and Several Liability Without Protection</h4>
              <p>
                <strong>Red Flag:</strong> In roommate situations, lease states "all tenants jointly and severally liable" but provides no mechanism to remove non-paying roommate.
              </p>
              <p>
                <strong>Why It's Problematic:</strong> If roommate stops paying, landlord can sue you for full rent, force eviction of everyone, or only evict you while keeping others.
              </p>
              <p>
                <strong>What to Do:</strong> Have separate roommate agreement addressing how to handle non-payment. Consider individual leases if possible. Screen roommates carefully.
              </p>

              <h2>Best Practices for Lease Review</h2>

              <h3>Before Signing</h3>
              <ul>
                <li><strong>Read Everything</strong> - Don't skip attachments, addendums, or "standard" sections</li>
                <li><strong>Ask Questions</strong> - Get clarification in writing on anything confusing</li>
                <li><strong>Compare to State Law</strong> - Some lease provisions may be unenforceable under local tenant protection laws</li>
                <li><strong>Document Everything</strong> - Take photos/video of unit condition before move-in</li>
                <li><strong>Get Promises in Writing</strong> - Verbal agreements about repairs, included utilities, amenities mean nothing without written documentation</li>
                <li><strong>Negotiate</strong> - Leases aren't necessarily take-it-or-leave-it; try negotiating problematic clauses</li>
              </ul>

              <h3>During Tenancy</h3>
              <ul>
                <li><strong>Keep Records</strong> - Save all communications, receipts, payment confirmations</li>
                <li><strong>Report Issues in Writing</strong> - Email creates paper trail for maintenance requests</li>
                <li><strong>Know Your Rights</strong> - Research tenant laws in your state/city</li>
                <li><strong>Understand Renewal Timeline</strong> - Set reminders for notice deadlines</li>
                <li><strong>Document Everything</strong> - Photos of damages, communications about repairs</li>
              </ul>

              <h3>Moving Out</h3>
              <ul>
                <li><strong>Give Proper Notice</strong> - Written notice meeting lease requirements</li>
                <li><strong>Clean Thoroughly</strong> - Professional cleaning often costs less than deposit deductions</li>
                <li><strong>Document Final Condition</strong> - Photos/video of entire unit, date stamped</li>
                <li><strong>Attend Walk-Through</strong> - Be present when landlord inspects, note any disagreements</li>
                <li><strong>Provide Forwarding Address</strong> - Required for deposit return, written communication</li>
                <li><strong>Know Timeline</strong> - Most states require deposit return within 14-60 days</li>
              </ul>

              <h2>Common Legal Document Mistakes to Avoid</h2>

              <h3>1. Not Reading the Entire Document</h3>
              <p>
                <strong>The Problem:</strong> Signing after reading only the first page or trusting "it's standard."
              </p>
              <p>
                <strong>The Reality:</strong> Critical terms are often buried in middle sections. "Standard" leases vary dramatically between landlords. The devil is in the details.
              </p>
              <p>
                <strong>The Solution:</strong> Read every page. Use AI summarization to speed up comprehension, but verify by reading actual document sections highlighted as important.
              </p>

              <h3>2. Trusting Verbal Promises</h3>
              <p>
                <strong>The Problem:</strong> Landlord says "Don't worry about that clause, we never enforce it" or "We'll fix that before you move in."
              </p>
              <p>
                <strong>The Reality:</strong> Verbal promises are nearly impossible to enforce. Properties change hands. Nice leasing agents get replaced.
              </p>
              <p>
                <strong>The Solution:</strong> Get everything in writing as addendum to lease. "Landlord agrees to replace all carpet before tenant move-in date." Signed by both parties.
              </p>

              <h3>3. Not Understanding Financial Obligations</h3>
              <p>
                <strong>The Problem:</strong> Focusing only on monthly rent, ignoring total move-in costs and additional fees.
              </p>
              <p>
                <strong>The Reality:</strong> First month + last month + security deposit + pet deposit + application fee = $6,000-10,000 for a $2,000/month apartment.
              </p>
              <p>
                <strong>The Solution:</strong> Calculate total move-in costs. Ask about ALL fees: trash, pest control, parking, amenities, utilities, late fees, guest fees.
              </p>

              <h3>4. Ignoring State/Local Tenant Laws</h3>
              <p>
                <strong>The Problem:</strong> Assuming lease is the final word on all rights and obligations.
              </p>
              <p>
                <strong>The Reality:</strong> State and local laws often override lease terms. Landlord can't waive habitability obligations or security deposit return requirements via lease clause.
              </p>
              <p>
                <strong>The Solution:</strong> Research tenant rights in your jurisdiction. Organizations like Legal Aid offer free tenant resources. Some lease clauses are unenforceable.
              </p>

              <h3>5. Not Documenting Unit Condition</h3>
              <p>
                <strong>The Problem:</strong> Moving in without photos, trusting landlord's move-in checklist.
              </p>
              <p>
                <strong>The Reality:</strong> When security deposit disputes arise, photos are everything. Landlord may claim damage you didn't cause.
              </p>
              <p>
                <strong>The Solution:</strong> Take comprehensive photos/video on move-in day with date stamp. Email to landlord with "Please confirm receipt of documented unit condition."
              </p>

              <h2>When to Consult an Attorney</h2>

              <h3>You Should Hire a Lawyer If:</h3>
              <ul>
                <li>Commercial lease over 3 years or $100,000+ in total obligation</li>
                <li>Lease contains unusual clauses AI flags as concerning</li>
                <li>You're signing personal guarantee for business lease</li>
                <li>Lease includes purchase option or right of first refusal</li>
                <li>You're a landlord creating lease template for multiple properties</li>
                <li>Dispute with landlord escalates to legal threats</li>
                <li>Facing eviction or withholding rent due to uninhabitable conditions</li>
              </ul>

              <h3>AI Summary Is Usually Sufficient For:</h3>
              <ul>
                <li>Standard residential lease from established property management company</li>
                <li>Month-to-month rental agreement</li>
                <li>Roommate agreement between co-tenants</li>
                <li>Simple sublease for remainder of your lease term</li>
                <li>HOA documents for existing community (reviewing before purchase)</li>
              </ul>

              <h2>Real-World Applications</h2>

              <h3>For Renters</h3>
              <p>
                <strong>Scenario:</strong> You found perfect apartment, but landlord needs lease signed today to hold it.
              </p>
              <p>
                <strong>AI Application:</strong> Paste 35-page lease into AI tool during apartment viewing. Get instant summary of key terms, red flags, financial obligations. Ask informed questions before signing. Identify which unusual clauses to negotiate or seek attorney review for.
              </p>

              <h3>For Landlords</h3>
              <p>
                <strong>Scenario:</strong> You inherited rental property with existing tenant on old lease. Need to understand current obligations.
              </p>
              <p>
                <strong>AI Application:</strong> Summarize existing lease to understand: current rent, renewal terms, maintenance responsibilities, termination options. Plan strategy for updating lease to current standards when renewal comes.
              </p>

              <h3>For Real Estate Investors</h3>
              <p>
                <strong>Scenario:</strong> Evaluating multi-family property purchase. Need to review all tenant leases to understand rental income stability.
              </p>
              <p>
                <strong>AI Application:</strong> Quickly summarize 12 different tenant leases. Identify: lease expiration dates, rent amounts, special agreements, tenant improvement obligations, early termination rights. Assess risk of tenant turnover affecting property value.
              </p>

              <h3>For Homebuyers</h3>
              <p>
                <strong>Scenario:</strong> Received 200-page HOA CC&R document with condo purchase contract. Need to understand restrictions before buying.
              </p>
              <p>
                <strong>AI Application:</strong> Summarize HOA rules to identify: rental restrictions (can you Airbnb?), pet policies, parking rules, special assessment history, architectural approval process for renovations. Determine if restrictions are deal-breakers.
              </p>

              <h2>Conclusion</h2>
              <p>
                AI legal document summarization empowers renters, landlords, homebuyers, and investors to quickly understand complex legal agreements without law degrees or expensive attorney fees for routine documents. By translating legalese into plain English, highlighting key terms, flagging unusual clauses, and extracting financial obligations, AI tools help you make informed decisions about agreements that significantly impact your housing, finances, and legal rights.
              </p>
              <p>
                The key to successful document review is understanding that AI summarization is a powerful tool for comprehension and identification of issues, but it's not legal advice. Use AI to understand what you're signing, identify areas of concern, and determine when professional legal counsel is necessary. For standard residential leases and straightforward agreements, AI summary combined with your own careful reading is often sufficient. For complex commercial agreements, unusual terms, or high-stakes situations, AI summary helps you ask better questions when you do consult an attorney.
              </p>
              <p>
                Remember that signing a legal document creates binding obligations. Never sign anything you don't fully understand, regardless of pressure from landlords, sellers, or other parties. Take the time to read, summarize, ask questions, and negotiate terms. The few hours invested in document review can save you thousands of dollars and years of legal headaches down the road.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
