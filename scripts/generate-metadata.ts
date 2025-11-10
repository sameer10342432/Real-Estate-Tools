import * as fs from 'fs';
import * as path from 'path';
import { allTools } from '../src/data/tools';

interface MetadataConfig {
  title: string;
  description: string;
  slug: string;
}

function generateMetadataForTool(toolName: string, toolDescription: string, slug: string): MetadataConfig {
  let title = toolName;
  
  if (!title.toLowerCase().includes('calculator') && 
      !title.toLowerCase().includes('analyzer') &&
      !title.toLowerCase().includes('estimator') &&
      !title.toLowerCase().includes('tool') &&
      !title.toLowerCase().includes('checker') &&
      !title.toLowerCase().includes('finder') &&
      !title.toLowerCase().includes('generator')) {
    title = `${title} Calculator`;
  }
  
  if (title.length > 60) {
    title = title.substring(0, 57) + '...';
  }
  
  let description = toolDescription;
  
  if (description.length < 120) {
    description = `${description}. Free online tool for real estate professionals, investors, and homebuyers.`;
  }
  
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  if (description.length < 150) {
    const padding = 150 - description.length;
    if (padding > 20) {
      description += ' Make informed property decisions with accurate calculations.';
    }
  }
  
  return {
    title,
    description,
    slug
  };
}

function createMetadataFile(slug: string, config: MetadataConfig): void {
  const pageDir = path.join('src', 'app', 'tools', slug);
  
  if (!fs.existsSync(pageDir)) {
    console.log(`⏭️  Skipping ${slug} - no page directory exists`);
    return;
  }
  
  const pagePath = path.join(pageDir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipping ${slug} - no page.tsx exists`);
    return;
  }
  
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  if (content.includes('export async function generateMetadata') || content.includes('export const metadata')) {
    console.log(`✅ ${slug} - already has metadata`);
    return;
  }
  
  const metadataBlock = `
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '${config.title.replace(/'/g, "\\'")}',
    description: '${config.description.replace(/'/g, "\\'")}',
  };
}
`;
  
  const hasMetadataImport = content.includes("import type { Metadata }");
  
  if (!hasMetadataImport) {
    if (content.includes("import")) {
      content = content.replace(
        /(import.*from\s+['"].*['"];?\n)/,
        `$1import type { Metadata } from 'next';\n`
      );
    } else {
      content = `import type { Metadata } from 'next';\n\n${content}`;
    }
  }
  
  const exportDefaultMatch = content.match(/export default function/);
  if (exportDefaultMatch) {
    const insertPosition = content.indexOf(exportDefaultMatch[0]);
    content = content.slice(0, insertPosition) + metadataBlock + '\n' + content.slice(insertPosition);
  } else {
    content = metadataBlock + '\n' + content;
  }
  
  fs.writeFileSync(pagePath, content);
  console.log(`✨ Created metadata for ${slug}`);
}

function main(): void {
  console.log('🎯 Generating metadata for all tools...\n');
  
  let created = 0;
  let skipped = 0;
  let alreadyExists = 0;
  
  for (const tool of allTools) {
    const slug = tool.path.replace('/tools/', '');
    const config = generateMetadataForTool(tool.name, tool.description, slug);
    
    const pageDir = path.join('src', 'app', 'tools', slug);
    
    if (!fs.existsSync(pageDir)) {
      skipped++;
      continue;
    }
    
    const pagePath = path.join(pageDir, 'page.tsx');
    const content = fs.existsSync(pagePath) ? fs.readFileSync(pagePath, 'utf-8') : '';
    
    if (content.includes('export async function generateMetadata') || content.includes('export const metadata')) {
      alreadyExists++;
      continue;
    }
    
    createMetadataFile(slug, config);
    created++;
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`✨ Created: ${created}`);
  console.log(`✅ Already exists: ${alreadyExists}`);
  console.log(`⏭️  Skipped (no page): ${skipped}`);
  console.log(`📦 Total tools: ${allTools.length}`);
  console.log('='.repeat(80));
}

main();
