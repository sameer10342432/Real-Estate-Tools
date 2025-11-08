[x] 1. Install the required packages
[x] 2. Restart the workflow to see if the project is working
[x] 3. Verify the project is working using the feedback tool
[x] 4. Inform user the import is completed and they can start building, mark the import as completed using the complete_project_import tool
[x] 5. Fixed dropdown transparency/overlap issue across all 69 tools:
    - Added complete shadcn UI color palette to globals.css with CSS variables
    - Added Tailwind color mappings in tailwind.config.ts including popover colors
    - Fixed body background to use hsl() wrapper for proper color rendering
    - SelectContent now has solid white background instead of transparent
    - Fix verified by architect - no regressions found