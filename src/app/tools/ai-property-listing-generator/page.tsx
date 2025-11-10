'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, Home, Sparkles, FileText, TrendingUp, Copy, CheckCircle, Info, Wand2, BookOpen, RefreshCw } from 'lucide-react';

interface GeneratedListing {
  headline: string;
  description: string;
  highlights: string[];
  callToAction: string;
  socialMediaCaption: string;
  keywords: string[];
  tone: string;
  wordCount: number;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Property Listing Description Generator',
    description: 'Generate professional, compelling property listing descriptions with AI assistance. Create engaging MLS listings that highlight features and attract buyers',
  };
}

export default function AIPropertyListingGenerator() {
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [squareFeet, setSquareFeet] = useState<number>(1800);
  const [lotSize, setLotSize] = useState<string>('0.25 acres');
  const [yearBuilt, setYearBuilt] = useState<number>(2015);
  const [price, setPrice] = useState<number>(450000);
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('Austin');
  const [state, setState] = useState<string>('Texas');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [keyFeatures, setKeyFeatures] = useState<string>('Granite countertops, hardwood floors, updated kitchen');
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState<string>('Corner lot, recently renovated, energy efficient');
  const [nearbyAmenities, setNearbyAmenities] = useState<string>('Schools, parks, shopping centers');
  const [targetAudience, setTargetAudience] = useState<string>('families');
  const [tone, setTone] = useState<string>('professional');
  const [style, setStyle] = useState<string>('descriptive');
  const [includeNeighborhood, setIncludeNeighborhood] = useState<boolean>(true);
  const [includeInvestment, setIncludeInvestment] = useState<boolean>(false);
  const [emphasizeLocation, setEmphasizeLocation] = useState<boolean>(true);

  const [generatedListing, setGeneratedListing] = useState<GeneratedListing | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const generateListing = () => {
    const toneAdjectives: { [key: string]: string[] } = {
      'professional': ['exceptional', 'stunning', 'impressive', 'remarkable', 'pristine'],
      'casual': ['amazing', 'beautiful', 'wonderful', 'fantastic', 'lovely'],
      'luxury': ['exquisite', 'magnificent', 'spectacular', 'prestigious', 'elegant'],
      'enthusiastic': ['incredible', 'breathtaking', 'extraordinary', 'fabulous', 'awesome'],
    };

    const selectedAdjectives = toneAdjectives[tone] || toneAdjectives['professional'];
    const mainAdjective = selectedAdjectives[Math.floor(Math.random() * selectedAdjectives.length)];

    const propertyTypeNames: { [key: string]: string } = {
      'single-family': 'single-family home',
      'condo': 'condominium',
      'townhouse': 'townhouse',
      'multi-family': 'multi-family property',
      'land': 'land parcel',
      'commercial': 'commercial property',
    };

    const propertyTypeName = propertyTypeNames[propertyType] || 'property';

    const headlineTemplates = [
      `${mainAdjective} ${bedrooms}-Bedroom ${propertyTypeName} in ${city}`,
      `${mainAdjective} ${propertyTypeName} | ${bedrooms} Bed ${bathrooms} Bath | ${city}, ${state}`,
      `Move-In Ready ${propertyTypeName} in Prime ${city} Location`,
      `${yearBuilt} ${propertyTypeName} with ${selectedAdjectives[1]} Updates`,
      `${city}'s Premier ${propertyTypeName} - ${bedrooms}BR/${bathrooms}BA`,
    ];

    const headline = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];

    const introTemplates = [
      `Welcome to this ${mainAdjective} ${bedrooms}-bedroom, ${bathrooms}-bathroom ${propertyTypeName} located in the heart of ${city}, ${state}.`,
      `Discover ${tone === 'luxury' ? 'unparalleled luxury' : 'your dream home'} in this beautifully maintained ${propertyTypeName} featuring ${bedrooms} bedrooms and ${bathrooms} bathrooms.`,
      `This ${mainAdjective} ${propertyTypeName} offers ${squareFeet.toLocaleString()} square feet of ${tone === 'luxury' ? 'refined' : 'comfortable'} living space in ${city}'s ${neighborhood || 'sought-after'} ${neighborhood ? 'neighborhood' : 'area'}.`,
      `Presenting a ${mainAdjective} ${yearBuilt} ${propertyTypeName} that perfectly blends style and functionality in ${city}, ${state}.`,
    ];

    const intro = introTemplates[Math.floor(Math.random() * introTemplates.length)];

    const featuresArray = keyFeatures.split(',').map(f => f.trim()).filter(f => f.length > 0);
    const uspArray = uniqueSellingPoints.split(',').map(u => u.trim()).filter(u => u.length > 0);
    const amenitiesArray = nearbyAmenities.split(',').map(a => a.trim()).filter(a => a.length > 0);

    const featuresDescription = featuresArray.length > 0 
      ? `Interior features include ${featuresArray.slice(0, -1).join(', ')}${featuresArray.length > 1 ? ', and ' + featuresArray[featuresArray.length - 1] : featuresArray[0]}.`
      : 'This property features modern amenities throughout.';

    const locationSentences = [];
    if (emphasizeLocation && amenitiesArray.length > 0) {
      locationSentences.push(`Perfectly positioned near ${amenitiesArray.slice(0, -1).join(', ')}${amenitiesArray.length > 1 ? ', and ' + amenitiesArray[amenitiesArray.length - 1] : amenitiesArray[0]}.`);
    }

    if (includeNeighborhood && neighborhood) {
      locationSentences.push(`The ${neighborhood} neighborhood is known for its ${targetAudience === 'families' ? 'family-friendly atmosphere and excellent schools' : 'vibrant community and convenient amenities'}.`);
    }

    const investmentSentence = includeInvestment 
      ? `This property represents an excellent investment opportunity in ${city}'s growing real estate market.`
      : '';

    const uspDescription = uspArray.length > 0
      ? `Special highlights include ${uspArray.slice(0, -1).join(', ')}${uspArray.length > 1 ? ', and ' + uspArray[uspArray.length - 1] : uspArray[0]}.`
      : '';

    const closingTemplates = [
      `Don't miss this opportunity to own a piece of ${city}. Schedule your showing today!`,
      `This ${mainAdjective} home won't last long. Contact us today to arrange a private viewing.`,
      `Experience ${tone === 'luxury' ? 'luxury' : 'quality'} living in ${city}. Book your tour now!`,
      `Make this ${propertyTypeName} your new home. Call for more information!`,
    ];

    const closing = closingTemplates[Math.floor(Math.random() * closingTemplates.length)];

    const descriptionParts = [
      intro,
      featuresDescription,
      uspDescription,
      ...locationSentences,
      investmentSentence,
      closing,
    ].filter(part => part.length > 0);

    const description = descriptionParts.join(' ');

    const highlights = [
      `${bedrooms} bedrooms, ${bathrooms} bathrooms`,
      `${squareFeet.toLocaleString()} square feet`,
      `Built in ${yearBuilt}`,
      `Lot size: ${lotSize}`,
      ...featuresArray.slice(0, 3),
      ...uspArray.slice(0, 2),
    ].filter((item, index) => index < 8);

    const callToActionTemplates = [
      `Schedule Your Private Showing Today - Call Now!`,
      `Contact Us to Learn More About This ${mainAdjective} Property`,
      `Book Your Tour - Limited Time Opportunity`,
      `Don't Wait - This Home Won't Last Long!`,
      `Get More Information - Reach Out Today`,
    ];

    const callToAction = callToActionTemplates[Math.floor(Math.random() * callToActionTemplates.length)];

    const socialCaptionTemplates = [
      `🏡 New Listing Alert! ${mainAdjective} ${bedrooms}BR/${bathrooms}BA ${propertyTypeName} in ${city}! ${selectedAdjectives[2]} features & prime location. Link in bio! #${city}RealEstate #NewListing #DreamHome`,
      `✨ Just Listed! ${squareFeet.toLocaleString()} sq ft of ${mainAdjective} living space in ${city}. ${bedrooms} bed, ${bathrooms} bath. Don't miss out! #RealEstate #HomesForSale #${state}Homes`,
      `🔑 Your next home awaits! ${mainAdjective} ${propertyTypeName} featuring ${featuresArray[0] || 'amazing upgrades'}. ${city}, ${state}. Schedule a showing today! #PropertyForSale #NewHome`,
      `💎 ${mainAdjective.toUpperCase()}! ${bedrooms}/${bathrooms} ${propertyTypeName} in prime ${city} location. Recently updated, move-in ready. Tap to learn more! #RealEstateListing #HomeHunting`,
    ];

    const socialMediaCaption = socialCaptionTemplates[Math.floor(Math.random() * socialCaptionTemplates.length)];

    const keywords = [
      city,
      state,
      propertyTypeName,
      `${bedrooms} bedroom`,
      `${bathrooms} bathroom`,
      neighborhood,
      ...featuresArray.slice(0, 3),
      targetAudience === 'families' ? 'family home' : 'investment property',
      tone === 'luxury' ? 'luxury home' : 'modern home',
    ].filter(k => k && k.length > 0);

    const wordCount = description.split(' ').length;

    const result: GeneratedListing = {
      headline,
      description,
      highlights,
      callToAction,
      socialMediaCaption,
      keywords,
      tone,
      wordCount,
    };

    setGeneratedListing(result);
    setCopied(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-rose-600 p-3 rounded-full">
              <Wand2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Property Listing Description Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create compelling, professional property listings in seconds. Generate attention-grabbing 
            headlines, detailed descriptions, and social media captions tailored to your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Listing Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <select
                          id="propertyType"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="single-family">Single-Family Home</option>
                          <option value="condo">Condominium</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="multi-family">Multi-Family</option>
                          <option value="land">Land/Lot</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="price">Listing Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={price}
                          onChange={(e) => setPrice(Number(e.target.value))}
                          placeholder="450000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={bedrooms}
                          onChange={(e) => setBedrooms(Number(e.target.value))}
                          placeholder="3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          step="0.5"
                          value={bathrooms}
                          onChange={(e) => setBathrooms(Number(e.target.value))}
                          placeholder="2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="squareFeet">Square Feet</Label>
                        <Input
                          id="squareFeet"
                          type="number"
                          value={squareFeet}
                          onChange={(e) => setSquareFeet(Number(e.target.value))}
                          placeholder="1800"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearBuilt">Year Built</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={yearBuilt}
                          onChange={(e) => setYearBuilt(Number(e.target.value))}
                          placeholder="2015"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lotSize">Lot Size</Label>
                        <Input
                          id="lotSize"
                          value={lotSize}
                          onChange={(e) => setLotSize(e.target.value)}
                          placeholder="0.25 acres"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Austin"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Texas"
                        />
                      </div>
                      <div>
                        <Label htmlFor="neighborhood">Neighborhood (Optional)</Label>
                        <Input
                          id="neighborhood"
                          value={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                          placeholder="Hyde Park"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
                    <div>
                      <Label htmlFor="keyFeatures">Key Features (comma-separated)</Label>
                      <Textarea
                        id="keyFeatures"
                        value={keyFeatures}
                        onChange={(e) => setKeyFeatures(e.target.value)}
                        placeholder="Granite countertops, hardwood floors, updated kitchen, stainless steel appliances"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="uniqueSellingPoints">Unique Selling Points (comma-separated)</Label>
                      <Textarea
                        id="uniqueSellingPoints"
                        value={uniqueSellingPoints}
                        onChange={(e) => setUniqueSellingPoints(e.target.value)}
                        placeholder="Corner lot, recently renovated, energy efficient, smart home features"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="nearbyAmenities">Nearby Amenities (comma-separated)</Label>
                      <Textarea
                        id="nearbyAmenities"
                        value={nearbyAmenities}
                        onChange={(e) => setNearbyAmenities(e.target.value)}
                        placeholder="Top-rated schools, parks, shopping centers, restaurants"
                        rows={3}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="targetAudience">Target Audience</Label>
                        <select
                          id="targetAudience"
                          value={targetAudience}
                          onChange={(e) => setTargetAudience(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="families">Families</option>
                          <option value="first-time-buyers">First-Time Buyers</option>
                          <option value="investors">Investors</option>
                          <option value="retirees">Retirees/Downsizers</option>
                          <option value="luxury">Luxury Buyers</option>
                          <option value="young-professionals">Young Professionals</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="tone">Writing Tone</Label>
                        <select
                          id="tone"
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="professional">Professional</option>
                          <option value="casual">Casual/Friendly</option>
                          <option value="luxury">Luxury/Upscale</option>
                          <option value="enthusiastic">Enthusiastic</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="style">Writing Style</Label>
                        <select
                          id="style"
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="descriptive">Descriptive</option>
                          <option value="concise">Concise</option>
                          <option value="storytelling">Storytelling</option>
                          <option value="feature-focused">Feature-Focused</option>
                        </select>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Additional Options</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeNeighborhood"
                          checked={includeNeighborhood}
                          onChange={(e) => setIncludeNeighborhood(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeNeighborhood">Include neighborhood highlights</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="emphasizeLocation"
                          checked={emphasizeLocation}
                          onChange={(e) => setEmphasizeLocation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="emphasizeLocation">Emphasize location benefits</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="includeInvestment"
                          checked={includeInvestment}
                          onChange={(e) => setIncludeInvestment(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="includeInvestment">Include investment angle</Label>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <Button 
                      onClick={generateListing} 
                      className="w-full bg-rose-600 hover:bg-rose-700"
                      size="lg"
                    >
                      <Wand2 className="mr-2 h-5 w-5" />
                      Generate Listing Description
                    </Button>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastering Property Listing Descriptions</h2>
                      
                      <p className="text-gray-700 mb-4">
                        Compelling property listing descriptions are essential for attracting potential buyers and generating 
                        interest in your listings. In today's competitive real estate market, where buyers often begin their 
                        search online, a well-crafted description can mean the difference between a quick sale and a property 
                        that lingers on the market.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Anatomy of an Effective Listing</h3>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Attention-Grabbing Headlines:</strong> Your headline is the first thing potential buyers see. 
                        Make it count by including key details like the number of bedrooms and bathrooms, property type, and 
                        location. Use powerful adjectives that evoke emotion without sounding over-the-top. "Stunning 3-Bedroom 
                        Home in Prime Neighborhood" works better than "House for Sale."
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Opening Hook:</strong> Start strong with a sentence that immediately draws readers in. Highlight 
                        the most impressive feature or create a vision of lifestyle. Instead of "This is a 3-bedroom house," 
                        try "Welcome to your dream home where modern elegance meets comfortable living."
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Key Features and Benefits:</strong> List important features, but more importantly, explain the 
                        benefits. Don't just say "granite countertops" - describe how they "provide a luxurious cooking 
                        experience perfect for entertaining guests." Transform features into lifestyle benefits that resonate 
                        with your target audience.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Location Advantages:</strong> Emphasize proximity to desirable amenities. Mention top-rated 
                        schools, parks, shopping, restaurants, and commute times to major employment centers. Location often 
                        matters more than the property itself, so dedicate adequate space to highlighting these advantages.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Writing for Your Target Audience</h3>

                      <p className="text-gray-700 mb-3">
                        Understanding your target buyer is crucial for effective copy. Families prioritize different features 
                        than retirees or investors. For families, emphasize spacious bedrooms, safe neighborhoods, and proximity 
                        to schools. For retirees, highlight low-maintenance features, accessibility, and peaceful surroundings.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Investors need different information entirely - focus on cash flow potential, appreciation trends, 
                        rental demand, and ROI metrics. First-time buyers appreciate move-in ready features and affordability 
                        factors. Luxury buyers expect emphasis on exclusivity, craftsmanship, and premium amenities.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tone and Style Considerations</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Professional Tone:</strong> Appropriate for most listings, striking a balance between 
                        informative and appealing. Uses industry-standard terminology and maintains credibility while 
                        highlighting property strengths. Best for mid-range properties and conventional buyers.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Luxury Tone:</strong> Employs sophisticated language and emphasizes exclusivity, craftsmanship, 
                        and premium features. Words like "exquisite," "bespoke," "prestigious," and "unparalleled" create an 
                        upscale impression. Focuses on unique architectural elements and high-end finishes.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Casual/Friendly Tone:</strong> Creates an approachable, warm feeling perfect for starter homes 
                        or properties targeting young families. Uses conversational language and focuses on lifestyle and 
                        comfort. Phrases like "perfect for" and "you'll love" create emotional connection.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Optimizing for Online Platforms</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Keywords and SEO:</strong> Include location-specific keywords, property type, and popular 
                        search terms naturally throughout your description. This helps your listing appear in relevant searches 
                        on real estate websites and search engines. Common keywords include city names, neighborhoods, school 
                        districts, and property features like "granite countertops" or "hardwood floors."
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Length Matters:</strong> Aim for 200-400 words for most listings. Too short and you miss 
                        opportunities to sell the property; too long and you risk losing reader attention. Luxury properties 
                        can support longer descriptions (400-600 words) detailing premium features and craftsmanship.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Formatting for Readability:</strong> Use short paragraphs and bullet points for key features. 
                        Online readers scan rather than read word-for-word, so make important information easily digestible. 
                        Break up long blocks of text and use white space effectively.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Social Media Adaptations</h3>

                      <p className="text-gray-700 mb-4">
                        Social media requires condensed, attention-grabbing copy. Use emojis strategically to increase 
                        engagement and visual appeal. Include relevant hashtags like #NewListing, #DreamHome, or 
                        location-specific tags. Keep captions under 150 characters for maximum impact, focusing on the 
                        single most compelling feature or benefit.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Common Mistakes to Avoid</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Overused Clichés:</strong> Avoid phrases like "must see," "won't last long," or "rare 
                        opportunity" unless you can back them up with specifics. These phrases have lost impact through 
                        overuse and can make your listing sound generic.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Excessive Capitalization or Exclamation Points:</strong> While enthusiasm is good, excessive 
                        punctuation or all-caps text appears unprofessional and can trigger spam filters. Use emphasis 
                        sparingly and strategically.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Vague Descriptions:</strong> Be specific. Instead of "great kitchen," say "recently updated 
                        kitchen featuring granite countertops, stainless steel appliances, and custom cabinetry." Specific 
                        details create vivid mental images and build credibility.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Focusing Only on Features:</strong> Remember to translate features into benefits. Buyers don't 
                        just want to know what the property has; they want to understand how it will improve their lives.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Testing and Refinement</h3>

                      <p className="text-gray-700 mb-4">
                        Track which descriptions generate the most interest, showings, and inquiries. A/B test different 
                        headlines and opening sentences. Pay attention to which features buyers ask about most frequently - 
                        these should be prominently featured in your descriptions. Continuously refine your approach based 
                        on market feedback and performance metrics.
                      </p>

                      <p className="text-gray-700">
                        Effective property listing descriptions combine art and science. They require understanding your 
                        audience, highlighting the right features, using appropriate tone, and optimizing for online platforms. 
                        With practice and attention to detail, you can create compelling listings that attract qualified buyers 
                        and help properties sell faster and for better prices.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {generatedListing && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Generated Listing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Label className="text-sm font-semibold">Headline</Label>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(generatedListing.headline)}
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-4">{generatedListing.headline}</p>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Label className="text-sm font-semibold">Full Description</Label>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(generatedListing.description)}
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{generatedListing.description}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline">{generatedListing.wordCount} words</Badge>
                        <Badge className="bg-rose-100 text-rose-700">{generatedListing.tone}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Key Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {generatedListing.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Call to Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-semibold text-gray-900">{generatedListing.callToAction}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(generatedListing.callToAction)}
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Social Media Caption
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-gray-700">{generatedListing.socialMediaCaption}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(generatedListing.socialMediaCaption)}
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      SEO Keywords
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {generatedListing.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={generateListing} 
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate New Version
                </Button>
              </>
            )}

            {!generatedListing && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Wand2 className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Fill in property details and click Generate to create your listing description</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
