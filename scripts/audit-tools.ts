import * as fs from 'fs';
import * as path from 'path';

interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string;
  path: string;
}

interface AuditResult {
  toolName: string;
  slug: string;
  status: 'complete' | 'missing_page' | 'missing_content' | 'missing_metadata' | 'not_in_registry';
  hasToolsEntry: boolean;
  hasPageFile: boolean;
  hasContentFile: boolean;
  hasMetadata: boolean;
  issues: string[];
}

function normalizeToolName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim();
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function readUserProvidedTools(): string[] {
  const filePath = 'attached_assets/Pasted-FHA-Loan-Calculator-VA-Loan-Calculator-USDA-Loan-Calculator-Jumbo-Loan-Calculator-FHA-203k-Loan-Calc-1762778014383_1762778014387.txt';
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ User provided tools file not found:', filePath);
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n').filter(line => line.trim() !== '');
}

function readExistingTools(): Tool[] {
  const toolsFilePath = 'src/data/tools.ts';
  const content = fs.readFileSync(toolsFilePath, 'utf-8');
  
  const tools: Tool[] = [];
  const nameMatches = content.match(/name:\s*['"]([^'"]+)['"]/g);
  const descMatches = content.match(/description:\s*['"]([^'"]+)['"]/g);
  const categoryMatches = content.match(/category:\s*['"]([^'"]+)['"]/g);
  const pathMatches = content.match(/path:\s*['"]([^'"]+)['"]/g);
  
  if (nameMatches && descMatches && categoryMatches && pathMatches) {
    for (let i = 0; i < nameMatches.length; i++) {
      const name = nameMatches[i].match(/['"]([^'"]+)['"]/)?.[1] || '';
      const description = descMatches[i].match(/['"]([^'"]+)['"]/)?.[1] || '';
      const category = categoryMatches[i].match(/['"]([^'"]+)['"]/)?.[1] || '';
      const pathValue = pathMatches[i].match(/['"]([^'"]+)['"]/)?.[1] || '';
      
      if (name) {
        tools.push({
          name,
          description,
          category,
          icon: '',
          path: pathValue
        });
      }
    }
  }
  
  return tools;
}

function checkPageExists(slug: string): boolean {
  const pagePath = path.join('src', 'app', 'tools', slug, 'page.tsx');
  return fs.existsSync(pagePath);
}

function checkContentExists(slug: string): boolean {
  const contentPath = path.join('src', 'content', 'tools', `${slug}.ts`);
  return fs.existsSync(contentPath);
}

function checkMetadata(slug: string): { hasMetadata: boolean; metaTitle?: string; metaDescription?: string } {
  const pagePath = path.join('src', 'app', 'tools', slug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    return { hasMetadata: false };
  }
  
  const content = fs.readFileSync(pagePath, 'utf-8');
  
  const hasMetadataExport = content.includes('export async function generateMetadata') || 
                            content.includes('export const metadata');
  
  const metaTitle = content.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
  const metaDescription = content.match(/description:\s*['"`]([^'"`]+)['"`]/)?.[1];
  
  return {
    hasMetadata: hasMetadataExport && !!metaTitle && !!metaDescription,
    metaTitle,
    metaDescription
  };
}

function auditTools(): void {
  console.log('🔍 Starting comprehensive tools audit...\n');
  
  const userTools = readUserProvidedTools();
  const existingTools = readExistingTools();
  
  console.log(`📋 User provided: ${userTools.length} tools`);
  console.log(`📦 Currently in registry: ${existingTools.length} tools\n`);
  
  const results: AuditResult[] = [];
  const existingToolsMap = new Map<string, Tool>();
  
  existingTools.forEach(tool => {
    const normalized = normalizeToolName(tool.name);
    existingToolsMap.set(normalized, tool);
  });
  
  for (const userTool of userTools) {
    const normalized = normalizeToolName(userTool);
    const slug = generateSlug(userTool);
    
    let matchedTool: Tool | undefined;
    
    // First, try exact slug/path match (most reliable)
    matchedTool = existingTools.find(tool => tool.path === `/tools/${slug}`);
    
    // If no slug match, try fuzzy name matching
    if (!matchedTool) {
      for (const [key, tool] of existingToolsMap.entries()) {
        const similarity = calculateSimilarity(normalized, key);
        if (similarity > 0.8) {
          matchedTool = tool;
          break;
        }
      }
    }
    
    const issues: string[] = [];
    let status: AuditResult['status'] = 'complete';
    
    if (!matchedTool) {
      status = 'not_in_registry';
      issues.push('Not found in tools.ts registry');
    }
    
    const hasToolsEntry = !!matchedTool;
    const hasPageFile = checkPageExists(slug);
    const hasContentFile = checkContentExists(slug);
    const metadataCheck = checkMetadata(slug);
    
    if (hasToolsEntry && !hasPageFile) {
      status = 'missing_page';
      issues.push('Missing page.tsx file');
    }
    
    if (hasToolsEntry && !hasContentFile) {
      status = 'missing_content';
      issues.push('Missing content file');
    }
    
    if (hasPageFile && !metadataCheck.hasMetadata) {
      status = 'missing_metadata';
      issues.push('Missing or incomplete metadata');
    }
    
    if (!metadataCheck.metaTitle) {
      issues.push('Missing meta title');
    }
    
    if (!metadataCheck.metaDescription) {
      issues.push('Missing meta description');
    }
    
    results.push({
      toolName: userTool,
      slug,
      status,
      hasToolsEntry,
      hasPageFile,
      hasContentFile,
      hasMetadata: metadataCheck.hasMetadata,
      issues
    });
  }
  
  const complete = results.filter(r => r.status === 'complete');
  const missing = results.filter(r => r.status !== 'complete');
  
  console.log('='.repeat(80));
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(80));
  console.log(`✅ Complete tools: ${complete.length}/${userTools.length}`);
  console.log(`⚠️  Tools needing attention: ${missing.length}`);
  console.log('');
  
  if (missing.length > 0) {
    console.log('='.repeat(80));
    console.log('🚨 TOOLS NEEDING ATTENTION');
    console.log('='.repeat(80));
    
    const notInRegistry = missing.filter(r => r.status === 'not_in_registry');
    const missingPage = missing.filter(r => r.status === 'missing_page');
    const missingContent = missing.filter(r => r.status === 'missing_content');
    const missingMetadata = missing.filter(r => r.status === 'missing_metadata');
    
    if (notInRegistry.length > 0) {
      console.log(`\n🔴 NOT IN REGISTRY (${notInRegistry.length} tools):`);
      notInRegistry.forEach((r, i) => {
        console.log(`${i + 1}. ${r.toolName}`);
        console.log(`   Slug: ${r.slug}`);
        console.log(`   Issues: ${r.issues.join(', ')}`);
        console.log('');
      });
    }
    
    if (missingPage.length > 0) {
      console.log(`\n🟡 MISSING PAGE (${missingPage.length} tools):`);
      missingPage.forEach((r, i) => {
        console.log(`${i + 1}. ${r.toolName} (${r.slug})`);
      });
    }
    
    if (missingContent.length > 0) {
      console.log(`\n🟡 MISSING CONTENT (${missingContent.length} tools):`);
      missingContent.forEach((r, i) => {
        console.log(`${i + 1}. ${r.toolName} (${r.slug})`);
      });
    }
    
    if (missingMetadata.length > 0) {
      console.log(`\n🟠 MISSING/INCOMPLETE METADATA (${missingMetadata.length} tools):`);
      missingMetadata.forEach((r, i) => {
        console.log(`${i + 1}. ${r.toolName} (${r.slug})`);
        console.log(`   Issues: ${r.issues.join(', ')}`);
      });
    }
  }
  
  const outputPath = 'tools-audit-report.json';
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Full report saved to: ${outputPath}`);
  
  console.log('\n='.repeat(80));
  console.log('✨ Audit complete!');
  console.log('='.repeat(80));
}

function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.replace(/\s+/g, '').toLowerCase();
  const s2 = str2.replace(/\s+/g, '').toLowerCase();
  
  if (s1.includes(s2) || s2.includes(s1)) return 0.95;
  
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

auditTools();
