import { z } from 'zod';
import { AIToolDefinition } from './types';

export const BuyerLeadScoringSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  budget: z.number().positive(),
  preApproved: z.boolean(),
  timeline: z.string(),
  motivation: z.string(),
  location: z.string(),
  propertyType: z.string(),
  additionalNotes: z.string().optional(),
});

export const GoogleAdsCopySchema = z.object({
  propertyType: z.string(),
  price: z.number().positive(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  location: z.string(),
  keyFeatures: z.string(),
  targetAudience: z.string(),
});

export const FacebookAdsCopySchema = z.object({
  propertyType: z.string(),
  price: z.number().positive(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  location: z.string(),
  keyFeatures: z.string(),
  targetAudience: z.string(),
  adObjective: z.string(),
});

export const PropertyValuationSchema = z.object({
  address: z.string(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  squareFeet: z.number().positive(),
  lotSize: z.number().positive(),
  yearBuilt: z.number().int().min(1800),
  condition: z.string(),
  features: z.string(),
  location: z.string(),
});

export const RenovationROISchema = z.object({
  propertyValue: z.number().positive(),
  renovationType: z.string(),
  estimatedCost: z.number().positive(),
  location: z.string(),
  propertyType: z.string(),
  currentCondition: z.string(),
});

export const PriceAppreciationSchema = z.object({
  currentPrice: z.number().positive(),
  location: z.string(),
  propertyType: z.string(),
  yearsPrediction: z.number().int().positive(),
});

export const GentrificationSchema = z.object({
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
});

export const HotNeighborhoodSchema = z.object({
  city: z.string(),
  state: z.string(),
  budget: z.number().positive().optional(),
  investmentGoal: z.string().optional(),
});

export const CompSelectionSchema = z.object({
  subjectAddress: z.string(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  squareFeet: z.number().positive(),
  yearBuilt: z.number().int().min(1800),
  propertyType: z.string(),
});

export const CMAReportSchema = z.object({
  subjectAddress: z.string(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  squareFeet: z.number().positive(),
  yearBuilt: z.number().int().min(1800),
  propertyType: z.string(),
  location: z.string(),
});

export const aiToolDefinitions: Record<string, AIToolDefinition> = {
  'ai-buyer-lead-scoring-tool': {
    slug: 'ai-buyer-lead-scoring-tool',
    name: 'AI Buyer Lead Scoring Tool',
    systemPrompt: `You are an expert real estate lead scoring analyst. Analyze buyer leads and provide a comprehensive score from 0-100 based on qualification factors including budget, pre-approval status, timeline, motivation, and property preferences. Return your response as a JSON object with the following structure:
{
  "score": number (0-100),
  "grade": string ("A", "B", "C", or "D"),
  "priority": string ("High", "Medium", or "Low"),
  "strengths": string[],
  "concerns": string[],
  "recommendations": string[],
  "summary": string
}`,
    buildUserPrompt: (input: z.infer<typeof BuyerLeadScoringSchema>) => `
Analyze this buyer lead:
- Name: ${input.name}
- Budget: $${input.budget.toLocaleString()}
- Pre-approved: ${input.preApproved ? 'Yes' : 'No'}
- Timeline: ${input.timeline}
- Motivation: ${input.motivation}
- Location: ${input.location}
- Property Type: ${input.propertyType}
${input.additionalNotes ? `- Additional Notes: ${input.additionalNotes}` : ''}

Provide a detailed lead scoring analysis.`,
    inputSchema: BuyerLeadScoringSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-google-ads-copy-generator': {
    slug: 'ai-google-ads-copy-generator',
    name: 'AI Real Estate Ad Copy Generator (Google Ads)',
    systemPrompt: `You are an expert Google Ads copywriter specializing in real estate. Create high-converting ad copy optimized for Google Search campaigns. Return your response as a JSON object with:
{
  "headlines": string[] (up to 15 headlines, max 30 characters each),
  "descriptions": string[] (up to 4 descriptions, max 90 characters each),
  "displayPath": string (max 15 characters),
  "callToActions": string[],
  "keywords": string[],
  "tips": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof GoogleAdsCopySchema>) => `
Create Google Ads copy for this property:
- Type: ${input.propertyType}
- Price: $${input.price.toLocaleString()}
- Bedrooms: ${input.bedrooms}
- Bathrooms: ${input.bathrooms}
- Location: ${input.location}
- Key Features: ${input.keyFeatures}
- Target Audience: ${input.targetAudience}

Generate compelling, click-worthy ad copy that drives qualified leads.`,
    inputSchema: GoogleAdsCopySchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-facebook-ads-copy-generator': {
    slug: 'ai-facebook-ads-copy-generator',
    name: 'AI Real Estate Ad Copy (Facebook Ads)',
    systemPrompt: `You are an expert Facebook & Instagram Ads copywriter for real estate. Create scroll-stopping, engaging ad copy optimized for social media. Return your response as a JSON object with:
{
  "primaryText": string (engaging opening, max 125 characters for preview),
  "headline": string (max 40 characters),
  "description": string (max 30 characters),
  "fullBody": string (complete ad text with emojis and formatting),
  "hashtags": string[],
  "callToAction": string,
  "tips": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof FacebookAdsCopySchema>) => `
Create Facebook/Instagram ad copy for this property:
- Type: ${input.propertyType}
- Price: $${input.price.toLocaleString()}
- Bedrooms: ${input.bedrooms}
- Bathrooms: ${input.bathrooms}
- Location: ${input.location}
- Key Features: ${input.keyFeatures}
- Target Audience: ${input.targetAudience}
- Campaign Objective: ${input.adObjective}

Create engaging, social-media-friendly copy that stops the scroll.`,
    inputSchema: FacebookAdsCopySchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-property-valuation-avm': {
    slug: 'ai-property-valuation-avm',
    name: 'AI Property Valuation (AVM) Model',
    systemPrompt: `You are an AI-powered automated valuation model (AVM) expert. Analyze property details and provide a comprehensive valuation estimate. Return your response as a JSON object with:
{
  "estimatedValue": number,
  "valuationRange": { "low": number, "high": number },
  "confidenceLevel": string ("High", "Medium", or "Low"),
  "confidenceScore": number (0-100),
  "valuationFactors": { "positive": string[], "negative": string[] },
  "marketComparison": string,
  "recommendations": string[],
  "disclaimer": string
}`,
    buildUserPrompt: (input: z.infer<typeof PropertyValuationSchema>) => `
Estimate the value of this property:
- Address: ${input.address}
- Bedrooms: ${input.bedrooms}
- Bathrooms: ${input.bathrooms}
- Square Feet: ${input.squareFeet.toLocaleString()}
- Lot Size: ${input.lotSize.toLocaleString()} sq ft
- Year Built: ${input.yearBuilt}
- Condition: ${input.condition}
- Features: ${input.features}
- Location/Neighborhood: ${input.location}

Provide a detailed valuation analysis with estimated value and confidence level.`,
    inputSchema: PropertyValuationSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-renovation-roi-predictor': {
    slug: 'ai-renovation-roi-predictor',
    name: 'AI Renovation ROI Predictor',
    systemPrompt: `You are a home renovation ROI expert. Analyze renovation projects and predict return on investment. Return your response as a JSON object with:
{
  "projectedROI": number (percentage),
  "estimatedValueIncrease": number,
  "costRecoveryPercentage": number,
  "paybackPeriod": string,
  "marketDemand": string ("High", "Medium", or "Low"),
  "pros": string[],
  "cons": string[],
  "recommendations": string[],
  "alternativeOptions": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof RenovationROISchema>) => `
Analyze the ROI for this renovation:
- Current Property Value: $${input.propertyValue.toLocaleString()}
- Renovation Type: ${input.renovationType}
- Estimated Cost: $${input.estimatedCost.toLocaleString()}
- Location: ${input.location}
- Property Type: ${input.propertyType}
- Current Condition: ${input.currentCondition}

Predict the return on investment and provide detailed analysis.`,
    inputSchema: RenovationROISchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-home-price-appreciation-forecaster': {
    slug: 'ai-home-price-appreciation-forecaster',
    name: 'AI Home Price Appreciation Forecaster',
    systemPrompt: `You are a real estate market forecasting expert. Predict home price appreciation based on market trends, economic indicators, and historical data. Return your response as a JSON object with:
{
  "currentValue": number,
  "predictions": {
    "oneYear": { "value": number, "appreciation": number },
    "fiveYear": { "value": number, "appreciation": number },
    "tenYear": { "value": number, "appreciation": number }
  },
  "confidenceLevel": string,
  "marketFactors": { "positive": string[], "negative": string[] },
  "assumptions": string[],
  "recommendations": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof PriceAppreciationSchema>) => `
Forecast price appreciation for this property:
- Current Price: $${input.currentPrice.toLocaleString()}
- Location: ${input.location}
- Property Type: ${input.propertyType}
- Forecast Period: ${input.yearsPrediction} years

Provide detailed appreciation forecasts for 1, 5, and 10 year periods.`,
    inputSchema: PriceAppreciationSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-neighborhood-gentrification-predictor': {
    slug: 'ai-neighborhood-gentrification-predictor',
    name: 'AI Neighborhood Gentrification Predictor',
    systemPrompt: `You are an urban development and gentrification analysis expert. Analyze neighborhoods for gentrification indicators. Return your response as a JSON object with:
{
  "gentrificationScore": number (0-100),
  "stage": string ("Pre-gentrification", "Early", "Active", "Advanced", "Mature"),
  "indicators": { "positive": string[], "negative": string[] },
  "investmentPotential": string ("High", "Medium", or "Low"),
  "timeline": string,
  "risks": string[],
  "opportunities": string[],
  "recommendations": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof GentrificationSchema>) => `
Analyze gentrification indicators for:
- Neighborhood: ${input.neighborhood}
- City: ${input.city}
- State: ${input.state}

Provide a comprehensive gentrification analysis with investment insights.`,
    inputSchema: GentrificationSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-next-hot-neighborhood-finder': {
    slug: 'ai-next-hot-neighborhood-finder',
    name: 'AI "Next Hot Neighborhood" Finder',
    systemPrompt: `You are a real estate market trend analyst specializing in identifying emerging neighborhoods. Analyze market data and trends to find the next hot investment areas. Return your response as a JSON object with:
{
  "topNeighborhoods": Array<{
    "name": string,
    "score": number (0-100),
    "medianPrice": number,
    "priceGrowth": string,
    "indicators": string[],
    "investmentRationale": string
  }>,
  "marketTrends": string[],
  "recommendations": string[],
  "riskFactors": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof HotNeighborhoodSchema>) => `
Find emerging hot neighborhoods in:
- City: ${input.city}
- State: ${input.state}
${input.budget ? `- Budget: $${input.budget.toLocaleString()}` : ''}
${input.investmentGoal ? `- Investment Goal: ${input.investmentGoal}` : ''}

Identify the top 3-5 emerging neighborhoods with high investment potential.`,
    inputSchema: HotNeighborhoodSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-comp-selection-tool': {
    slug: 'ai-comp-selection-tool',
    name: 'AI Comp (Comparable) Selection Tool',
    systemPrompt: `You are a real estate appraisal expert specializing in comparable property selection. Analyze subject property and provide criteria for selecting the best comps. Return your response as a JSON object with:
{
  "selectionCriteria": {
    "location": string[],
    "features": string[],
    "adjustments": string[]
  },
  "idealComps": Array<{
    "criteria": string,
    "importance": string ("Critical", "Important", or "Nice to have"),
    "reasoning": string
  }>,
  "searchRadius": string,
  "timeFrame": string,
  "redFlags": string[],
  "tips": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof CompSelectionSchema>) => `
Find selection criteria for comparable properties for:
- Subject Address: ${input.subjectAddress}
- Bedrooms: ${input.bedrooms}
- Bathrooms: ${input.bathrooms}
- Square Feet: ${input.squareFeet.toLocaleString()}
- Year Built: ${input.yearBuilt}
- Property Type: ${input.propertyType}

Provide detailed criteria for selecting the most accurate comparable properties.`,
    inputSchema: CompSelectionSchema,
    responseFormat: 'json_object',
    maxTokens: 2048,
  },

  'ai-cma-report-generator': {
    slug: 'ai-cma-report-generator',
    name: 'AI CMA (Comparative Market Analysis) Report Generator',
    systemPrompt: `You are a professional real estate agent creating a comprehensive CMA report. Generate a detailed market analysis with insights and recommendations. Return your response as a JSON object with:
{
  "executiveSummary": string,
  "propertyOverview": {
    "strengths": string[],
    "weaknesses": string[],
    "uniqueFeatures": string[]
  },
  "marketAnalysis": {
    "trend": string ("Seller's Market", "Buyer's Market", or "Balanced"),
    "inventoryLevel": string,
    "daysOnMarket": string,
    "priceDirection": string
  },
  "recommendedPrice": {
    "listing": number,
    "low": number,
    "high": number
  },
  "pricingStrategy": string,
  "marketingRecommendations": string[],
  "competitiveAdvantages": string[],
  "potentialChallenges": string[]
}`,
    buildUserPrompt: (input: z.infer<typeof CMAReportSchema>) => `
Generate a comprehensive CMA report for:
- Subject Address: ${input.subjectAddress}
- Bedrooms: ${input.bedrooms}
- Bathrooms: ${input.bathrooms}
- Square Feet: ${input.squareFeet.toLocaleString()}
- Year Built: ${input.yearBuilt}
- Property Type: ${input.propertyType}
- Location/Market: ${input.location}

Create a professional CMA report with market analysis and pricing recommendations.`,
    inputSchema: CMAReportSchema,
    responseFormat: 'json_object',
    maxTokens: 3072,
  },
};
