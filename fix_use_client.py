
import os

def fix_use_client():
    root_dir = os.path.join(os.getcwd(), 'src', 'app', 'tools')
    
    count = 0
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(subdir, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                # Check for 'use client'
                has_client = False
                client_indices = []
                for i, line in enumerate(lines):
                    if "'use client'" in line or '"use client"' in line:
                        has_client = True
                        client_indices.append(i)
                
                if has_client:
                    # Remove old instances
                    new_lines = [line for i, line in enumerate(lines) if i not in client_indices]
                    
                    # Add to top
                    new_lines.insert(0, "'use client';\n")
                    
                    # Write back
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.writelines(new_lines)
                    count += 1
                        
    print(f"Fixed 'use client' in {count} files.")

if __name__ == "__main__":
    fix_use_client()
