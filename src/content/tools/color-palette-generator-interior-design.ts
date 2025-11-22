import { CalculatorContent } from '@/types';

export const ColorPaletteGeneratorInteriorDesignContent: CalculatorContent = {
  title: 'Color Palette Generator (Interior Design)',
  description: 'Generate professional interior design color palettes based on room type, style, mood, and lighting - get paint codes and coordinating recommendations',
  icon: '🎨',
  category: 'Additional Tools',
  slug: 'color-palette-generator-interior-design',
  
  metaTitle: 'Interior Design Color Palette Generator | Property Tools',
  metaDescription: 'Generate beautiful, professional color palettes for any room. Get coordinated paint colors, accent recommendations, and design tips for your space.',
  
  article: {
    title: 'Create Perfect Color Palettes for Interior Design',
    content: `
      <h2>Interior Design Color Palette Generator</h2>
      <p>Color is the foundation of great interior design. This tool generates professional, harmonious color palettes tailored to your room type, design style, desired mood, and lighting conditions. Get specific paint recommendations with color codes you can take directly to the store.</p>

      <h3>Why Color Palettes Matter</h3>
      <ul>
        <li><strong>Home Value:</strong> Professional color schemes increase perceived value 5-10%</li>
        <li><strong>Faster Sales:</strong> Well-colored homes sell 1-2 weeks faster</li>
        <li><strong>Emotional Impact:</strong> Colors affect mood, energy, and well-being</li>
        <li><strong>Space Perception:</strong> Right colors make rooms feel larger or cozier</li>
        <li><strong>Cohesion:</strong> Coordinated colors create flow throughout home</li>
        <li><strong>Avoid Costly Mistakes:</strong> Know before you paint</li>
      </ul>

      <h3>Color Psychology in Interior Design</h3>
      
      <h4>Warm Colors (Red, Orange, Yellow)</h4>
      <p><strong>Effects:</strong> Energizing, stimulating, cozy, inviting</p>
      <p><strong>Best For:</strong> Social spaces (living room, dining room, kitchen)</p>
      <p><strong>Avoid:</strong> Bedrooms (too stimulating for sleep), small rooms (can feel cramped)</p>

      <h4>Cool Colors (Blue, Green, Purple)</h4>
      <p><strong>Effects:</strong> Calming, relaxing, serene, spacious feeling</p>
      <p><strong>Best For:</strong> Bedrooms, bathrooms, offices, meditation spaces</p>
      <p><strong>Benefits:</strong> Make small rooms feel larger, reduce stress</p>

      <h4>Neutral Colors (White, Gray, Beige, Taupe)</h4>
      <p><strong>Effects:</strong> Versatile, timeless, sophisticated, clean</p>
      <p><strong>Best For:</strong> Any room, especially for resale value</p>
      <p><strong>Benefits:</strong> Easy to accessorize, broad appeal, never go out of style</p>

      <h3>Color Schemes Explained</h3>
      
      <h4>Monochromatic</h4>
      <ul>
        <li>Single color in varying shades, tints, and tones</li>
        <li>Example: Light gray walls, medium gray accents, dark gray furniture</li>
        <li>Effect: Sophisticated, calming, cohesive</li>
        <li>Best For: Modern, minimalist, Scandinavian styles</li>
      </ul>

      <h4>Analogous</h4>
      <ul>
        <li>Colors next to each other on color wheel</li>
        <li>Example: Blue, blue-green, green</li>
        <li>Effect: Harmonious, natural, easy on the eye</li>
        <li>Best For: Coastal, nature-inspired, transitional styles</li>
      </ul>

      <h4>Complementary</h4>
      <ul>
        <li>Colors opposite each other on color wheel</li>
        <li>Example: Blue and orange, purple and yellow</li>
        <li>Effect: High contrast, vibrant, energetic</li>
        <li>Best For: Eclectic, bold, contemporary styles</li>
      </ul>

      <h4>Triadic</h4>
      <ul>
        <li>Three colors equally spaced on color wheel</li>
        <li>Example: Red, yellow, blue (primary colors)</li>
        <li>Effect: Vibrant, balanced, playful</li>
        <li>Best For: Children's rooms, creative spaces</li>
      </ul>

      <h4>60-30-10 Rule</h4>
      <ul>
        <li>60% dominant color (walls)</li>
        <li>30% secondary color (furniture, curtains)</li>
        <li>10% accent color (pillows, art, accessories)</li>
        <li>Creates balanced, professional-looking spaces</li>
      </ul>

      <h3>Colors by Room Type</h3>
      
      <h4>Living Room</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>Warm Gray: Sophisticated, versatile (SW Agreeable Gray, BM Revere Pewter)</li>
        <li>Soft Beige: Timeless, warm (BM Manchester Tan, SW Accessible Beige)</li>
        <li>Sage Green: Trendy, calming (SW Clary Sage, BM Saybrook Sage)</li>
        <li>Navy Blue: Bold, elegant (SW Naval, BM Hale Navy)</li>
      </ul>

      <h4>Bedroom</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>Soft Blue: Promotes sleep, calming (BM Palladian Blue, SW Rainwashed)</li>
        <li>Warm White: Clean, serene (BM Simply White, SW Pure White)</li>
        <li>Lavender/Lilac: Restful, feminine (SW Potentially Purple, BM Violet Luster)</li>
        <li>Soft Gray: Modern, peaceful (BM Classic Gray, SW Repose Gray)</li>
      </ul>
      <p><strong>Avoid:</strong> Bright reds, oranges (too stimulating for sleep)</p>

      <h4>Kitchen</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>White: Classic, clean, bright (BM White Dove, SW Pure White)</li>
        <li>Light Gray: Modern, sophisticated (SW Passive, BM Stonington Gray)</li>
        <li>Soft Green: Fresh, organic (SW Softened Green, BM Guilford Green)</li>
        <li>Navy Cabinets + White Walls: Trendy, high contrast</li>
      </ul>

      <h4>Bathroom</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>Spa Blues/Greens: Serene, spa-like (BM Woodlawn Blue, SW Sea Salt)</li>
        <li>Crisp White: Clean, timeless (BM Chantilly Lace, SW High Reflective White)</li>
        <li>Warm Gray: Sophisticated (SW Amazing Gray, BM Gray Owl)</li>
        <li>Soft Aqua: Fresh, coastal (SW Tidewater, BM Palladian Blue)</li>
      </ul>

      <h4>Home Office</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>Soft Blue: Focus, productivity (BM Horizon, SW Respite)</li>
        <li>Sage Green: Calm concentration (SW Softened Green, BM Saybrook Sage)</li>
        <li>Warm Gray: Professional (BM Revere Pewter, SW Accessible Beige)</li>
        <li>Soft Yellow: Creative, cheerful (BM Hawthorne Yellow, SW Friendly Yellow)</li>
      </ul>

      <h4>Dining Room</h4>
      <p><strong>Popular Choices:</strong></p>
      <ul>
        <li>Deep Colors: Intimate, sophisticated (SW Urbane Bronze, BM Hale Navy)</li>
        <li>Warm Red/Burgundy: Stimulates appetite (SW Red Theatre, BM Caliente)</li>
        <li>Forest Green: Rich, classic (SW Hunt Club, BM Hunter Green)</li>
        <li>Charcoal Gray: Modern, dramatic (SW Peppercorn, BM Kendall Charcoal)</li>
      </ul>

      <h3>Colors by Design Style</h3>
      
      <h4>Modern Farmhouse</h4>
      <ul>
        <li>Main: White, Off-White (BM Simply White, SW Pure White)</li>
        <li>Accent: Black, Charcoal, Navy (creates contrast)</li>
        <li>Wood Tones: Natural, warm browns</li>
        <li>Pop: Greenery (plants), industrial metals</li>
      </ul>

      <h4>Coastal</h4>
      <ul>
        <li>Main: Whites, soft blues, aquas</li>
        <li>Accent: Navy, coral, sandy beige</li>
        <li>Avoid: Dark, heavy colors</li>
        <li>Palette: SW Sea Salt, BM Hale Navy, whites</li>
      </ul>

      <h4>Mid-Century Modern</h4>
      <ul>
        <li>Main: Warm whites, taupes</li>
        <li>Accent: Mustard yellow, teal, burnt orange</li>
        <li>Wood: Walnut, teak (warm browns)</li>
        <li>Palette: Retro colors with neutral base</li>
      </ul>

      <h4>Scandinavian</h4>
      <ul>
        <li>Main: White, light gray, pale wood</li>
        <li>Accent: Soft pastels, black (minimal)</li>
        <li>Effect: Bright, airy, minimalist</li>
        <li>Palette: BM Chantilly Lace, soft gray-blues</li>
      </ul>

      <h4>Traditional</h4>
      <ul>
        <li>Main: Warm neutrals (beige, cream, tan)</li>
        <li>Accent: Rich jewel tones (burgundy, forest green, navy)</li>
        <li>Wood: Dark cherry, mahogany</li>
        <li>Palette: Timeless, classic combinations</li>
      </ul>

      <h4>Industrial</h4>
      <ul>
        <li>Main: Gray, black, white, concrete</li>
        <li>Accent: Rust, copper, aged metals</li>
        <li>Materials: Exposed brick, metal, reclaimed wood</li>
        <li>Palette: Urban, edgy, raw</li>
      </ul>

      <h3>Lighting & Color</h3>
      
      <h4>Natural Light Considerations</h4>
      <p><strong>North-Facing Rooms:</strong></p>
      <ul>
        <li>Light: Cool, bluish, consistent all day</li>
        <li>Best Colors: Warm colors to balance coolness</li>
        <li>Avoid: Cool colors (will look dull and cold)</li>
      </ul>

      <p><strong>South-Facing Rooms:</strong></p>
      <ul>
        <li>Light: Warm, bright, changes throughout day</li>
        <li>Best Colors: Any color works, but cool colors prevent overheating feeling</li>
        <li>Benefit: Makes colors look their truest</li>
      </ul>

      <p><strong>East-Facing Rooms:</strong></p>
      <ul>
        <li>Light: Bright morning light, cooler in afternoon</li>
        <li>Best Colors: Warm colors that glow in morning</li>
      </ul>

      <p><strong>West-Facing Rooms:</strong></p>
      <ul>
        <li>Light: Warm afternoon/evening light, darker in morning</li>
        <li>Best Colors: Can handle both warm and cool</li>
      </ul>

      <h4>Artificial Lighting Impact</h4>
      <ul>
        <li><strong>Warm LED/Incandescent (2700K-3000K):</strong> Makes warm colors glow, can muddy cool colors</li>
        <li><strong>Neutral LED (3500K-4100K):</strong> Most versatile, true color rendering</li>
        <li><strong>Cool LED (5000K+):</strong> Enhances cool colors, can make warm colors look washed out</li>
      </ul>

      <h3>Paint Finish Guide</h3>
      
      <p><strong>Flat/Matte:</strong></p>
      <ul>
        <li>Best For: Ceilings, low-traffic areas, hiding imperfections</li>
        <li>Pros: Hides flaws, sophisticated look</li>
        <li>Cons: Hard to clean, shows marks</li>
      </ul>

      <p><strong>Eggshell:</strong></p>
      <ul>
        <li>Best For: Living rooms, bedrooms, dining rooms</li>
        <li>Pros: Subtle sheen, easier to clean than flat</li>
        <li>Cons: Still shows some imperfections</li>
      </ul>

      <p><strong>Satin:</strong></p>
      <ul>
        <li>Best For: Kitchens, bathrooms, kids' rooms, trim</li>
        <li>Pros: Durable, easy to clean, resists moisture</li>
        <li>Cons: Shows application flaws</li>
      </ul>

      <p><strong>Semi-Gloss:</strong></p>
      <ul>
        <li>Best For: Trim, doors, cabinets, high-moisture areas</li>
        <li>Pros: Very durable, easy to clean, moisture resistant</li>
        <li>Cons: Highlights imperfections</li>
      </ul>

      <p><strong>High-Gloss:</strong></p>
      <ul>
        <li>Best For: Cabinets, doors, furniture, accents</li>
        <li>Pros: Most durable, dramatic look</li>
        <li>Cons: Shows every flaw, can be too reflective</li>
      </ul>

      <h3>Popular Paint Brands & Collections</h3>
      
      <h4>Sherwin-Williams</h4>
      <ul>
        <li>Premium: Emerald (best coverage, durability)</li>
        <li>Mid-Range: Duration, Cashmere</li>
        <li>Budget: SuperPaint</li>
        <li>Top Sellers: Agreeable Gray, Repose Gray, Naval</li>
      </ul>

      <h4>Benjamin Moore</h4>
      <ul>
        <li>Premium: Aura, Regal Select</li>
        <li>Mid-Range: Ben, Natura</li>
        <li>Historical: Historical Collection (Williamsburg, etc.)</li>
        <li>Top Sellers: Simply White, Revere Pewter, Hale Navy</li>
      </ul>

      <h4>Behr</h4>
      <ul>
        <li>Widely Available: Home Depot exclusive</li>
        <li>Budget-Friendly: Good value</li>
        <li>Premium: Marquee (one-coat coverage)</li>
      </ul>

      <h3>Testing Paint Colors</h3>
      <ol>
        <li><strong>Buy Samples:</strong> Test 2-3 finalists ($5-8 each)</li>
        <li><strong>Paint Large Swatches:</strong> 2'x2' minimum on multiple walls</li>
        <li><strong>Observe 24 Hours:</strong> See color in all lighting conditions</li>
        <li><strong>Check Against Fixed Elements:</strong> Flooring, counters, cabinets</li>
        <li><strong>Live With It:</strong> A week if possible before committing</li>
      </ol>

      <h3>Common Color Mistakes to Avoid</h3>
      <ul>
        <li>❌ Choosing color from tiny paint chip (test on wall first)</li>
        <li>❌ Painting without primer (affects final color)</li>
        <li>❌ Ignoring undertones (greige vs gray vs beige)</li>
        <li>❌ Not considering lighting (color changes throughout day)</li>
        <li>❌ Too many colors (stick to 3-5 throughout home)</li>
        <li>❌ Trendy colors everywhere (use as accents only)</li>
        <li>❌ All white (can feel sterile - add warm neutrals)</li>
        <li>❌ Painting before deciding on finishes/furniture</li>
      </ul>

      <h3>2024-2025 Color Trends</h3>
      <ul>
        <li><strong>Warm Neutrals:</strong> Greige, warm grays replacing cool grays</li>
        <li><strong>Earth Tones:</strong> Terracotta, clay, warm browns</li>
        <li><strong>Soft Greens:</strong> Sage, olive, eucalyptus</li>
        <li><strong>Warm Whites:</strong> Creamy whites replacing stark whites</li>
        <li><strong>Navy & Deep Blues:</strong> Classic, sophisticated</li>
        <li><strong>Muted Pastels:</strong> Soft, dusty versions of bright colors</li>
      </ul>

      <h3>Colors for Resale Value</h3>
      <p><strong>Safest Choices (Broad Appeal):</strong></p>
      <ul>
        <li>SW Agreeable Gray / BM Revere Pewter (warm gray)</li>
        <li>BM Simply White / SW Pure White (warm white)</li>
        <li>SW Accessible Beige / BM Manchester Tan (beige)</li>
        <li>Soft blues and greens for bathrooms</li>
        <li>White or gray for kitchens</li>
      </ul>

      <p><strong>Avoid for Resale:</strong></p>
      <ul>
        <li>Bright, bold colors (red, orange, bright yellow)</li>
        <li>Very dark colors in small rooms</li>
        <li>Trendy colors that date quickly</li>
        <li>Personal taste colors (purple, pink, lime green)</li>
      </ul>

      <p><strong>Use this tool to create harmonious, professional color palettes that transform your space and maximize your home's appeal and value.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'roomType',
        label: 'Room Type',
        type: 'select',
        options: [
          { value: 'living', label: 'Living Room' },
          { value: 'bedroom', label: 'Bedroom' },
          { value: 'kitchen', label: 'Kitchen' },
          { value: 'bathroom', label: 'Bathroom' },
          { value: 'office', label: 'Home Office' },
          { value: 'dining', label: 'Dining Room' },
        ],
        defaultValue: 'living',
      },
      {
        name: 'style',
        label: 'Design Style',
        type: 'select',
        options: [
          { value: 'modern', label: 'Modern/Contemporary' },
          { value: 'farmhouse', label: 'Modern Farmhouse' },
          { value: 'traditional', label: 'Traditional' },
          { value: 'coastal', label: 'Coastal' },
          { value: 'scandinavian', label: 'Scandinavian' },
          { value: 'industrial', label: 'Industrial' },
        ],
        defaultValue: 'modern',
      },
      {
        name: 'mood',
        label: 'Desired Mood',
        type: 'select',
        options: [
          { value: 'calm', label: 'Calm & Relaxing' },
          { value: 'energizing', label: 'Energizing & Bold' },
          { value: 'cozy', label: 'Cozy & Warm' },
          { value: 'bright', label: 'Bright & Airy' },
        ],
        defaultValue: 'calm',
      },
    ],
    results: [
      { label: 'Recommended Color Palette', isCurrency: false },
      { label: 'Main Wall Color', isCurrency: false },
      { label: 'Accent Colors', isCurrency: false },
      { label: 'Trim & Details', isCurrency: false },
      { label: 'Complementary Elements', isCurrency: false },
    ],
    calculate: (values) => {
      const { roomType, style, mood } = values;

      let palette = '';
      let mainColor = '';
      let accentColors = '';
      let trim = '';
      let elements = '';

      if (roomType === 'living' && style === 'modern' && mood === 'calm') {
        palette = '🎨 Sophisticated Neutrals';
        mainColor = 'Warm Gray (SW Agreeable Gray 7029 or BM Revere Pewter HC-172)';
        accentColors = 'Navy Blue pillows, brass/gold metals, soft white textiles';
        trim = 'White (SW Pure White 7005 or BM Simply White OC-117)';
        elements = '• Natural wood furniture\n• Large plants (fiddle leaf fig)\n• Abstract art in blues and golds\n• Textured throws and pillows';
      } else if (roomType === 'bedroom' && mood === 'calm') {
        palette = '🌊 Serene Blue-Gray';
        mainColor = 'Soft Blue-Gray (BM Palladian Blue HC-144 or SW Rainwashed 6211)';
        accentColors = 'White bedding, warm wood tones, soft beige';
        trim = 'White (BM White Dove OC-17)';
        elements = '• Light wood or white furniture\n• Layered bedding in whites/blues\n• Minimal decor for calm\n• Blackout curtains in coordinating color';
      } else if (roomType === 'kitchen' && style === 'farmhouse') {
        palette = '🏡 Fresh Farmhouse';
        mainColor = 'White (SW Pure White 7005 or BM Simply White OC-117)';
        accentColors = 'Navy or black cabinets, natural wood, greenery';
        trim = 'Same as walls (monochromatic)';
        elements = '• Black or oil-rubbed bronze hardware\n• Wood open shelving\n• White subway tile backsplash\n• Butcher block or marble counters';
      } else if (roomType === 'bathroom' && mood === 'calm') {
        palette = '🌿 Spa Sanctuary';
        mainColor = 'Soft Green-Blue (SW Sea Salt 6204 or BM Woodlawn Blue HC-147)';
        accentColors = 'White fixtures, natural wood vanity, plants';
        trim = 'White (SW High Reflective White 7757)';
        elements = '• White or light gray tile\n• Chrome or brushed nickel fixtures\n• Natural fiber basket storage\n• Eucalyptus or bamboo plants';
      } else if (roomType === 'office') {
        palette = '📚 Productive Focus';
        mainColor = 'Soft Blue or Sage (BM Horizon 1478 or SW Softened Green 6177)';
        accentColors = 'White shelving, natural wood desk, brass accessories';
        trim = 'White (BM Chantilly Lace OC-65)';
        elements = '• Built-in or floating shelves\n• Task lighting (desk lamp)\n• Organized storage solutions\n• Inspiring artwork or vision board';
      } else {
        palette = '🎨 Custom Color Palette';
        mainColor = `${mood.charAt(0).toUpperCase() + mood.slice(1)} colors recommended for ${roomType} in ${style} style`;
        accentColors = 'Complementary tones and textures';
        trim = 'Coordinating trim color';
        elements = 'Style-appropriate furniture and accessories';
      }

      return [
        { label: 'Recommended Color Palette', value: palette, isCurrency: false },
        { label: 'Main Wall Color', value: mainColor, isCurrency: false },
        { label: 'Accent Colors', value: accentColors, isCurrency: false },
        { label: 'Trim & Details', value: trim, isCurrency: false },
        { label: 'Complementary Elements', value: elements, isCurrency: false },
      ];
    },
  },
};
