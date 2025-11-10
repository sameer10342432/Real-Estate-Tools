'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/footer/Footer';


interface Property {
  id: string;
  address: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  lotSize: string;
  yearBuilt: string;
  propertyType: string;
  monthlyRent: string;
  propertyTax: string;
  hoaFees: string;
  walkScore: string;
  schoolRating: string;
  crimeRate: string;
  commute: string;
  notes: string;
}

const initialProperty: Property = {
  id: '',
  address: '',
  price: '',
  bedrooms: '',
  bathrooms: '',
  sqft: '',
  lotSize: '',
  yearBuilt: '',
  propertyType: 'Single Family',
  monthlyRent: '',
  propertyTax: '',
  hoaFees: '',
  walkScore: '',
  schoolRating: '',
  crimeRate: '',
  commute: '',
  notes: ''
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Comparison Calculator',
    description: 'Advanced property comparison with detailed metrics. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function PropertyComparisonPage() {
  const [properties, setProperties] = useState<Property[]>([
    { ...initialProperty, id: '1' },
    { ...initialProperty, id: '2' }
  ]);

  const addProperty = () => {
    if (properties.length < 4) {
      setProperties([...properties, { ...initialProperty, id: Date.now().toString() }]);
    }
  };

  const removeProperty = (id: string) => {
    if (properties.length > 2) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const updateProperty = (id: string, field: keyof Property, value: string) => {
    setProperties(properties.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };



  const calculatePricePerSqft = (price: string, sqft: string) => {
    const priceNum = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    const sqftNum = parseFloat(sqft);
    if (isNaN(priceNum) || isNaN(sqftNum) || sqftNum === 0) return 'N/A';
    return `$${Math.round(priceNum / sqftNum)}`;
  };

  const calculateCapRate = (rent: string, price: string, tax: string, hoa: string) => {
    const annualRent = parseFloat(rent) * 12;
    const propertyPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    const annualTax = parseFloat(tax);
    const annualHoa = parseFloat(hoa) * 12;
    
    if (isNaN(annualRent) || isNaN(propertyPrice) || propertyPrice === 0) return 'N/A';
    
    const noi = annualRent - (annualTax || 0) - (annualHoa || 0);
    const capRate = (noi / propertyPrice) * 100;
    
    return `${capRate.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Comparison Tool
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Compare multiple properties side by side to make informed real estate decisions
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Property Comparison</h2>
            <div className="space-x-4">
              {properties.length < 4 && (
                <button
                  onClick={addProperty}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Add Property
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-48">
                      Feature
                    </th>
                    {properties.map((property, index) => (
                      <th key={property.id} className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider min-w-64">
                        <div className="flex items-center justify-between">
                          <span>Property {index + 1}</span>
                          {properties.length > 2 && (
                            <button
                              onClick={() => removeProperty(property.id)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Basic Information */}
                  <tr className="bg-blue-50">
                    <td className="px-6 py-3 font-semibold text-gray-900" colSpan={properties.length + 1}>
                      Basic Information
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Address</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <textarea
                          value={property.address}
                          onChange={(e) => updateProperty(property.id, 'address', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          rows={2}
                          placeholder="Enter property address"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Price</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="text"
                          value={property.price}
                          onChange={(e) => updateProperty(property.id, 'price', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="$500,000"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Property Type</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <select
                          value={property.propertyType}
                          onChange={(e) => updateProperty(property.id, 'propertyType', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="Single Family">Single Family</option>
                          <option value="Condo">Condo</option>
                          <option value="Townhouse">Townhouse</option>
                          <option value="Multi-Family">Multi-Family</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                      </td>
                    ))}
                  </tr>

                  {/* Property Details */}
                  <tr className="bg-green-50">
                    <td className="px-6 py-3 font-semibold text-gray-900" colSpan={properties.length + 1}>
                      Property Details
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Bedrooms</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.bedrooms}
                          onChange={(e) => updateProperty(property.id, 'bedrooms', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="3"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Bathrooms</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          step="0.5"
                          value={property.bathrooms}
                          onChange={(e) => updateProperty(property.id, 'bathrooms', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="2.5"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Square Feet</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.sqft}
                          onChange={(e) => updateProperty(property.id, 'sqft', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="2000"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Lot Size (sq ft)</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.lotSize}
                          onChange={(e) => updateProperty(property.id, 'lotSize', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="8000"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Year Built</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.yearBuilt}
                          onChange={(e) => updateProperty(property.id, 'yearBuilt', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="2010"
                        />
                      </td>
                    ))}
                  </tr>

                  {/* Financial Information */}
                  <tr className="bg-yellow-50">
                    <td className="px-6 py-3 font-semibold text-gray-900" colSpan={properties.length + 1}>
                      Financial Information
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Rent</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.monthlyRent}
                          onChange={(e) => updateProperty(property.id, 'monthlyRent', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="2500"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Property Tax</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.propertyTax}
                          onChange={(e) => updateProperty(property.id, 'propertyTax', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="6000"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly HOA Fees</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.hoaFees}
                          onChange={(e) => updateProperty(property.id, 'hoaFees', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="200"
                        />
                      </td>
                    ))}
                  </tr>

                  {/* Calculated Metrics */}
                  <tr className="bg-purple-50">
                    <td className="px-6 py-3 font-semibold text-gray-900" colSpan={properties.length + 1}>
                      Calculated Metrics
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Price per Sq Ft</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4 text-sm font-semibold text-purple-600">
                        {calculatePricePerSqft(property.price, property.sqft)}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cap Rate</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4 text-sm font-semibold text-green-600">
                        {calculateCapRate(property.monthlyRent, property.price, property.propertyTax, property.hoaFees)}
                      </td>
                    ))}
                  </tr>

                  {/* Location & Lifestyle */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-3 font-semibold text-gray-900" colSpan={properties.length + 1}>
                      Location & Lifestyle
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Walk Score (0-100)</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={property.walkScore}
                          onChange={(e) => updateProperty(property.id, 'walkScore', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="75"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">School Rating (1-10)</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={property.schoolRating}
                          onChange={(e) => updateProperty(property.id, 'schoolRating', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="8"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Crime Rate (Low/Med/High)</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <select
                          value={property.crimeRate}
                          onChange={(e) => updateProperty(property.id, 'crimeRate', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="">Select</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Commute Time (minutes)</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <input
                          type="number"
                          value={property.commute}
                          onChange={(e) => updateProperty(property.id, 'commute', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          placeholder="25"
                        />
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Notes</td>
                    {properties.map(property => (
                      <td key={property.id} className="px-6 py-4">
                        <textarea
                          value={property.notes}
                          onChange={(e) => updateProperty(property.id, 'notes', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                          rows={3}
                          placeholder="Additional notes..."
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Article */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Guide to Property Comparison: Making Smart Real Estate Decisions
            </h2>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Key Takeaways</h3>
              <ul className="text-purple-800 space-y-1">
                <li>• Systematic comparison prevents emotional decision-making</li>
                <li>• Consider both quantitative metrics and qualitative factors</li>
                <li>• Location factors often outweigh property features in long-term value</li>
                <li>• Financial metrics help identify the best investment opportunities</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Property Comparison Matters
            </h3>
            
            <p className="text-gray-700 mb-6">
              Comparing properties systematically is crucial for making informed real estate decisions. 
              Whether you're buying your first home, investing in rental properties, or expanding your 
              portfolio, a structured comparison helps you evaluate options objectively and identify 
              the best value for your money.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Systematic Comparison</h4>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• <strong>Objective Decision Making:</strong> Reduces emotional bias in property selection</li>
              <li>• <strong>Value Identification:</strong> Helps spot undervalued or overpriced properties</li>
              <li>• <strong>Risk Assessment:</strong> Identifies potential issues before purchase</li>
              <li>• <strong>Negotiation Power:</strong> Provides data to support price negotiations</li>
              <li>• <strong>Long-term Planning:</strong> Ensures alignment with investment goals</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Essential Comparison Categories
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Financial Metrics</h4>
            <p className="text-gray-700 mb-4">
              Financial analysis forms the foundation of property comparison. Key metrics include:
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">Price per Square Foot</h5>
              <p className="text-green-800 text-sm">
                Divides the purchase price by the property's square footage. This metric helps 
                normalize pricing across different-sized properties and identify value opportunities.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-blue-900 mb-2">Cap Rate (For Investment Properties)</h5>
              <p className="text-blue-800 text-sm">
                Net Operating Income ÷ Property Value. This metric helps compare the income-generating 
                potential of different investment properties.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h5 className="font-semibold text-yellow-900 mb-2">Cash Flow Analysis</h5>
              <p className="text-yellow-800 text-sm">
                Monthly rental income minus all expenses (mortgage, taxes, insurance, maintenance). 
                Positive cash flow indicates a profitable rental property.
              </p>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Physical Property Features</h4>
            <p className="text-gray-700 mb-4">
              Compare the physical characteristics that affect both livability and value:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Size:</strong> Square footage, number of bedrooms and bathrooms</li>
              <li>• <strong>Age and Condition:</strong> Year built, recent renovations, maintenance needs</li>
              <li>• <strong>Layout:</strong> Floor plan efficiency, room sizes, storage space</li>
              <li>• <strong>Lot Size:</strong> Outdoor space, privacy, expansion potential</li>
              <li>• <strong>Special Features:</strong> Garage, basement, pool, energy efficiency</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Location Analysis</h4>
            <p className="text-gray-700 mb-4">
              Location often determines long-term property value more than the property itself:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Neighborhood Quality</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Crime rates and safety</li>
                  <li>• School district ratings</li>
                  <li>• Property value trends</li>
                  <li>• Future development plans</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Accessibility</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Commute times to work</li>
                  <li>• Public transportation access</li>
                  <li>• Proximity to amenities</li>
                  <li>• Walk Score ratings</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Advanced Comparison Techniques
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Weighted Scoring System</h4>
            <p className="text-gray-700 mb-4">
              Create a scoring system that weights different factors based on your priorities:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h5 className="font-semibold mb-2">Example Weighting for Investment Property:</h5>
              <ul className="text-sm space-y-1">
                <li>• Cash Flow Potential: 30%</li>
                <li>• Location Quality: 25%</li>
                <li>• Property Condition: 20%</li>
                <li>• Appreciation Potential: 15%</li>
                <li>• Management Ease: 10%</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Market Comparison Analysis</h4>
            <p className="text-gray-700 mb-4">
              Compare your target properties against recent sales and current listings in the same area:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Recent comparable sales (within 6 months)</li>
              <li>• Days on market for similar properties</li>
              <li>• Price trends in the neighborhood</li>
              <li>• Rental rates for similar properties</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Red Flags to Watch For
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Financial Red Flags</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Significantly higher price per square foot than comparable properties</li>
              <li>• Negative cash flow with no clear path to profitability</li>
              <li>• Unusually high property taxes or HOA fees</li>
              <li>• Recent significant price reductions</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Property Red Flags</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Major structural issues or needed repairs</li>
              <li>• Outdated electrical, plumbing, or HVAC systems</li>
              <li>• Poor layout or functional obsolescence</li>
              <li>• Environmental concerns (flood zone, contamination)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Location Red Flags</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Declining neighborhood or high crime rates</li>
              <li>• Poor school districts affecting resale value</li>
              <li>• Limited transportation or employment options</li>
              <li>• Oversupply of similar properties</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Making the Final Decision
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Quantitative vs. Qualitative Factors</h4>
            <p className="text-gray-700 mb-4">
              While numbers are important, don't ignore qualitative factors:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Quantitative Factors</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Purchase price and financing terms</li>
                  <li>• Cash flow and ROI projections</li>
                  <li>• Property taxes and insurance costs</li>
                  <li>• Maintenance and repair estimates</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Qualitative Factors</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Neighborhood character and stability</li>
                  <li>• Property management complexity</li>
                  <li>• Personal comfort and preferences</li>
                  <li>• Future development potential</li>
                </ul>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h4>
            <p className="text-gray-700 mb-4">
              Evaluate the risk profile of each property:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Market Risk:</strong> Local economic conditions and market volatility</li>
              <li>• <strong>Property Risk:</strong> Condition, age, and maintenance requirements</li>
              <li>• <strong>Liquidity Risk:</strong> How quickly you could sell if needed</li>
              <li>• <strong>Tenant Risk:</strong> Vacancy rates and tenant quality in the area</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tools and Resources for Property Comparison
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Online Resources</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• MLS listings and property history</li>
              <li>• Zillow, Redfin, and other real estate platforms</li>
              <li>• Walk Score for walkability ratings</li>
              <li>• GreatSchools.org for school district information</li>
              <li>• Local crime statistics and neighborhood data</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Professional Services</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Real estate agents with local market expertise</li>
              <li>• Property inspectors for condition assessment</li>
              <li>• Appraisers for accurate property valuation</li>
              <li>• Property managers for rental market insights</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Pro Tip</h4>
              <p className="text-orange-800">
                Don't let analysis paralysis prevent you from making decisions. Set a reasonable 
                timeframe for comparison and stick to it. The perfect property rarely exists, 
                but the right property for your situation and goals does.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h3>

            <p className="text-gray-700 mb-4">
              Systematic property comparison is essential for making smart real estate decisions. 
              Our comparison tool helps you organize and analyze multiple properties side by side, 
              ensuring you consider all relevant factors before making one of life's largest 
              financial commitments.
            </p>

            <p className="text-gray-700">
              Remember that the best property isn't necessarily the cheapest or the most expensive – 
              it's the one that best aligns with your financial goals, lifestyle needs, and risk 
              tolerance. Use this tool to make data-driven decisions while trusting your instincts 
              about qualitative factors that matter to you.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}