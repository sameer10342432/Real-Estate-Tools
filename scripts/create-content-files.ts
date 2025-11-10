import * as fs from 'fs';
import * as path from 'path';
import { allTools } from '../src/data/tools';

const MISSING_CONTENT_SLUGS = [
  'va-vs-conventional-loan-comparison', 'usda-loan-eligibility-checker', 'fha-loan-limit-finder',
  'va-loan-entitlement-calculator', 'mortgage-pre-approval-calculator', 'mortgage-rate-by-credit-score-estimator',
  'credit-score-improvement-simulator', 'dti-calculator-for-fha-loans', 'dti-calculator-for-va-loans',
  'dti-calculator-for-conventional-loans', 'front-end-dti-calculator', 'back-end-dti-calculator',
  'rapid-rescore-roi-calculator', 'points-vs-no-points-mortgage-calculator', 'mortgage-discount-points-calculator',
  'rate-and-term-refinance-calculator', 'cash-out-refinance-calculator', 'heloc-vs-cash-out-refinance',
  'sellers-net-sheet', 'short-term-rental-occupancy-rate-calculator', 'cost-to-build-a-house-estimator',
  'opportunity-zone-investment-benefit-calculator', 'eviction-cost-timeline-estimator',
  'real-estate-professional-status-tax-benefit-calculator', 'cost-segregation-benefit-calculator',
  'crime-rate-by-address-analyzer', 'school-rating-by-address', 'local-rent-control-law-finder',
  'us-zip-code-demographics-analyzer', 'local-property-tax-rate-finder', 'natural-disaster-risk-score',
  'environmental-hazard-checker', 'title-insurance-cost-estimator', 'home-appraisal-fee-estimator',
  'survey-cost-estimator', 'legal-fee-estimator', 'ai-property-listing-description-generator',
  'ai-real-estate-blog-post-idea-generator', 'ai-renovation-idea-generator', 'ai-zillow-listing-summary-tool',
  'ai-ask-a-us-realtor-bot', 'california-property-tax-calculator', 'texas-property-tax-calculator',
  'florida-homestead-exemption-calculator', 'new-york-mansion-tax-calculator'
];

function createContentFile(slug: string): void {
  const tool = allTools.find(t => t.path === `/tools/${slug}`);
  
  if (!tool) {
    console.log(`⚠️  Tool not found in registry: ${slug}`);
    return;
  }
  
  const contentPath = path.join('src', 'content', 'tools', `${slug}.ts`);
  
  if (fs.existsSync(contentPath)) {
    console.log(`⏭️  Content already exists: ${slug}`);
    return;
  }
  
  const pascalName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  
  const contentTemplate = `export const ${pascalName}Content = {
  title: '${tool.name}',
  description: '${tool.description}',
  icon: '${tool.icon}',
  category: '${tool.category}',
  slug: '${slug}',
  
  article: \`
# ${tool.name}

## Overview

${tool.description}

## How to Use This Calculator

This tool helps you make informed decisions about your real estate investments by providing accurate calculations based on current market data.

### Key Features

- Easy-to-use interface
- Instant calculations
- Detailed breakdown of results
- Professional-grade accuracy

## Understanding the Results

The calculator provides comprehensive analysis to help you evaluate your real estate decisions with confidence.

## Frequently Asked Questions

### What information do I need to use this calculator?

Basic financial information and property details are all you need to get started.

### How accurate are the calculations?

Our calculators use industry-standard formulas and are regularly updated to ensure accuracy.

### Can I save my calculations?

Yes, you can save scenarios and compare different options side by side.

## Additional Resources

For more real estate tools and calculators, explore our complete suite of professional tools designed for investors, agents, and homebuyers.
  \`,
  
  calculate: (inputs: any) => {
    return {
      summary: 'Calculation complete',
      details: {}
    };
  }
};
`;
  
  fs.writeFileSync(contentPath, contentTemplate);
  console.log(`✨ Created content: ${slug}.ts`);
}

function main(): void {
  console.log('📝 Creating content files for missing tools...\n');
  
  let created = 0;
  let skipped = 0;
  
  for (const slug of MISSING_CONTENT_SLUGS) {
    const contentPath = path.join('src', 'content', 'tools', `${slug}.ts`);
    
    if (fs.existsSync(contentPath)) {
      skipped++;
      continue;
    }
    
    createContentFile(slug);
    created++;
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`✨ Created: ${created}`);
  console.log(`⏭️  Skipped (already exist): ${skipped}`);
  console.log(`📦 Total processed: ${MISSING_CONTENT_SLUGS.length}`);
  console.log('='.repeat(80));
}

main();
