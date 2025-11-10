import * as fs from 'fs';
import * as path from 'path';

interface ToolAsset {
  slug: string;
  toolName: string;
  category: string;
}

const MISSING_PAGES: ToolAsset[] = [
  { slug: 'airbnb-host-fee-calculator', toolName: 'Airbnb Host Fee Calculator', category: 'Investment Analysis' },
  { slug: 'multi-family-property-calculator', toolName: 'Multi-Family Property Calculator', category: 'Investment Analysis' },
  { slug: 'commercial-property-roi-calculator', toolName: 'Commercial Property ROI Calculator', category: 'Investment Analysis' },
  { slug: 'self-storage-facility-roi-calculator', toolName: 'Self-Storage Facility ROI Calculator', category: 'Investment Analysis' },
  { slug: 'mobile-home-park-investment-calculator', toolName: 'Mobile Home Park Investment Calculator', category: 'Investment Analysis' },
  { slug: 'adu-roi-calculator', toolName: 'ADU ROI Calculator', category: 'Investment Analysis' },
  { slug: 'cost-to-build-adu-estimator', toolName: 'Cost to Build ADU Estimator', category: 'Investment Analysis' },
  { slug: 'seller-financing-calculator', toolName: 'Seller Financing Calculator', category: 'Investment Analysis' },
  { slug: 'subject-to-deal-analyzer', toolName: 'Subject-To Deal Analyzer', category: 'Investment Analysis' },
  { slug: 'lease-option-calculator', toolName: 'Lease-Option Calculator', category: 'Investment Analysis' },
  { slug: 'ai-zillow-listing-summary-tool', toolName: 'AI Zillow Listing Summary Tool', category: 'Additional Tools' },
  { slug: 'ai-ask-a-us-realtor-bot', toolName: 'AI Ask a US Realtor Bot', category: 'Additional Tools' },
  { slug: 'california-property-tax-calculator', toolName: 'California Property Tax Calculator', category: 'Financial Planning' },
  { slug: 'texas-property-tax-calculator', toolName: 'Texas Property Tax Calculator', category: 'Financial Planning' },
];

function createPageFile(slug: string, toolName: string): void {
  const pageDir = path.join('src', 'app', 'tools', slug);
  
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  const pagePath = path.join(pageDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    console.log(`⏭️  Page already exists: ${slug}`);
    return;
  }
  
  const pageContent = `import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '${toolName} - Free Real Estate Tool',
    description: 'Use our free ${toolName.toLowerCase()} to make informed real estate investment decisions. Calculate accurate results instantly.',
  };
}

export default function ${toPascalCase(slug)}Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">${toolName}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-4">
            This tool is currently under development. Check back soon for the complete calculator.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
            <p className="text-sm text-gray-700">
              We're working on bringing you this comprehensive tool to help with your real estate calculations.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2>About This Tool</h2>
          <p>
            The ${toolName} will help you analyze and calculate important real estate metrics
            to make informed investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
`;
  
  fs.writeFileSync(pagePath, pageContent);
  console.log(`✨ Created page: ${slug}/page.tsx`);
}

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function main(): void {
  console.log('🏗️  Creating missing tool assets...\n');
  
  let pagesCreated = 0;
  let pagesSkipped = 0;
  
  for (const tool of MISSING_PAGES) {
    const pageDir = path.join('src', 'app', 'tools', tool.slug);
    const pagePath = path.join(pageDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      pagesSkipped++;
      continue;
    }
    
    createPageFile(tool.slug, tool.toolName);
    pagesCreated++;
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`✨ Pages created: ${pagesCreated}`);
  console.log(`⏭️  Pages skipped (already exist): ${pagesSkipped}`);
  console.log('='.repeat(80));
}

main();
