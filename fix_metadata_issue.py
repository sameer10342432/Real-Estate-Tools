
import os
import re

def fix_files():
    root_dir = os.path.join(os.getcwd(), 'src', 'app', 'tools')
    
    count = 0
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(subdir, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has 'use client' and 'generateMetadata'
                if "'use client'" in content or '"use client"' in content:
                    new_content = content
                    if "export async function generateMetadata" in content:
                        print(f"Fixing {filepath}...")
                        # Remove the function block.
                        # We use regex to match the function up to its closing brace?
                        # Hard to match braces with regex. 
                        # We can just match the signature and return block roughly?
                        # Most look like:
                        # export async function generateMetadata(): Promise<Metadata> {
                        #   return { ... };
                        # }
                        
                        # We will comment it out or remove lines.
                        # Simple approach: Replace the function signature with a dummy variable or remove export.
                        # Without 'export', Next.js won't try to use it as metadata.
                        # But it's an async function, not valid to simple-rename?
                        # If I remove "export " prefix, it becomes local function, unused.
                        # That solves the "exporting" issue!
                        
                        new_content = content.replace("export async function generateMetadata", "async function _generateMetadata")
                    
                    if "export const metadata" in content or "export let metadata" in content:
                        print(f"Fixing metadata const in {filepath}...")
                        new_content = new_content.replace("export const metadata", "const _metadata")
                        new_content = new_content.replace("export let metadata", "let _metadata")

                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        count += 1
                        
    print(f"Fixed {count} files.")

if __name__ == "__main__":
    fix_files()
