import { CalculatorContent } from '@/types';

export const FengShuiHomeCalculatorContent: CalculatorContent = {
  title: 'Feng Shui (Home) Calculator',
  description: 'Analyze your home\'s feng shui energy flow using the Bagua map, determine your Kua number, and get personalized recommendations for harmony and prosperity',
  icon: '☯️',
  category: 'Additional Tools',
  slug: 'feng-shui-home-calculator',
  
  metaTitle: 'Feng Shui Home Calculator - Bagua Map & Energy Analysis | Property Tools',
  metaDescription: 'Calculate your Kua number, map your home\'s Bagua, and get personalized feng shui recommendations to improve wealth, health, relationships, and career energy.',
  
  article: {
    title: 'Feng Shui Your Home for Harmony and Prosperity',
    content: `
      <h2>What is Feng Shui?</h2>
      <p>Feng Shui (pronounced "fung shway") is the ancient Chinese art of arranging spaces to create harmony between individuals and their environment. The practice aims to optimize the flow of energy (Chi) through your home to enhance prosperity, health, relationships, and overall well-being.</p>

      <h3>Why Use Feng Shui in Your Home?</h3>
      <ul>
        <li><strong>Improved Energy Flow:</strong> Create spaces that feel peaceful and energizing</li>
        <li><strong>Enhanced Prosperity:</strong> Activate wealth areas for financial abundance</li>
        <li><strong>Better Relationships:</strong> Strengthen marriage and family harmony</li>
        <li><strong>Career Success:</strong> Optimize workspace for professional growth</li>
        <li><strong>Health & Vitality:</strong> Design spaces that support physical well-being</li>
        <li><strong>Stress Reduction:</strong> Create calming, organized environments</li>
      </ul>

      <h3>The Bagua Map - Your Home's Energy Map</h3>
      <p>The Bagua is an octagonal energy map divided into 9 areas (8 sides + center), each corresponding to a different life aspect:</p>

      <h4>9 Bagua Areas</h4>
      
      <p><strong>1. Wealth & Prosperity (Southeast)</strong></p>
      <ul>
        <li>Element: Wood</li>
        <li>Colors: Purple, green, gold</li>
        <li>Enhance with: Plants, water features, purple accents</li>
        <li>Represents: Financial abundance, opportunities</li>
      </ul>

      <p><strong>2. Fame & Reputation (South)</strong></p>
      <ul>
        <li>Element: Fire</li>
        <li>Colors: Red, orange, bright colors</li>
        <li>Enhance with: Candles, lights, awards, certificates</li>
        <li>Represents: Recognition, social standing</li>
      </ul>

      <p><strong>3. Love & Relationships (Southwest)</strong></p>
      <ul>
        <li>Element: Earth</li>
        <li>Colors: Pink, red, white</li>
        <li>Enhance with: Pairs of objects, romantic artwork, roses</li>
        <li>Represents: Marriage, partnerships, romance</li>
      </ul>

      <p><strong>4. Family & Ancestors (East)</strong></p>
      <ul>
        <li>Element: Wood</li>
        <li>Colors: Green, teal, brown</li>
        <li>Enhance with: Family photos, plants, wood furniture</li>
        <li>Represents: Family harmony, health, new beginnings</li>
      </ul>

      <p><strong>5. Health & Center (Center)</strong></p>
      <ul>
        <li>Element: Earth</li>
        <li>Colors: Yellow, earth tones</li>
        <li>Enhance with: Keep clear and clutter-free, yellow accents</li>
        <li>Represents: Physical health, grounding, balance</li>
      </ul>

      <p><strong>6. Children & Creativity (West)</strong></p>
      <ul>
        <li>Element: Metal</li>
        <li>Colors: White, metallics, pastels</li>
        <li>Enhance with: Children's artwork, creative projects, metal objects</li>
        <li>Represents: Children, creativity, joy</li>
      </ul>

      <p><strong>7. Knowledge & Wisdom (Northeast)</strong></p>
      <ul>
        <li>Element: Earth</li>
        <li>Colors: Blue, green, black</li>
        <li>Enhance with: Books, meditation space, quiet area</li>
        <li>Represents: Personal growth, spirituality, education</li>
      </ul>

      <p><strong>8. Career & Life Path (North)</strong></p>
      <ul>
        <li>Element: Water</li>
        <li>Colors: Black, dark blue, charcoal</li>
        <li>Enhance with: Water features, mirrors, wavy shapes</li>
        <li>Represents: Career success, life journey</li>
      </ul>

      <p><strong>9. Helpful People & Travel (Northwest)</strong></p>
      <ul>
        <li>Element: Metal</li>
        <li>Colors: Gray, white, silver</li>
        <li>Enhance with: Photos of mentors, religious items, travel images</li>
        <li>Represents: Mentors, benefactors, synchronicity</li>
      </ul>

      <h3>Your Kua Number - Personal Feng Shui</h3>
      <p>Your Kua number determines your auspicious directions and elements based on birth year and gender:</p>

      <h4>How to Calculate Your Kua Number</h4>
      <p><strong>For Males Born After 2000:</strong></p>
      <ol>
        <li>Take last two digits of birth year</li>
        <li>Add them together until single digit</li>
        <li>Subtract from 9</li>
      </ol>

      <p><strong>For Females Born After 2000:</strong></p>
      <ol>
        <li>Take last two digits of birth year</li>
        <li>Add them together until single digit</li>
        <li>Add 6</li>
      </ol>

      <h4>Kua Number Meanings</h4>
      
      <p><strong>Kua 1 (Water)</strong></p>
      <ul>
        <li>Best Directions: North, East, Southeast, South</li>
        <li>Best Colors: Black, blue, green</li>
        <li>Personality: Flexible, social, communicative</li>
      </ul>

      <p><strong>Kua 2 (Earth)</strong></p>
      <ul>
        <li>Best Directions: Northeast, West, Northwest, Southwest</li>
        <li>Best Colors: Yellow, beige, brown</li>
        <li>Personality: Stable, nurturing, patient</li>
      </ul>

      <p><strong>Kua 3 (Wood)</strong></p>
      <ul>
        <li>Best Directions: East, South, North, Southeast</li>
        <li>Best Colors: Green, brown, blue</li>
        <li>Personality: Dynamic, ambitious, assertive</li>
      </ul>

      <p><strong>Kua 4 (Wood)</strong></p>
      <ul>
        <li>Best Directions: Southeast, North, South, East</li>
        <li>Best Colors: Green, brown, blue</li>
        <li>Personality: Gentle, creative, intuitive</li>
      </ul>

      <p><strong>Kua 6 (Metal)</strong></p>
      <ul>
        <li>Best Directions: West, Northeast, Southwest, Northwest</li>
        <li>Best Colors: White, gold, silver</li>
        <li>Personality: Strong, organized, authoritative</li>
      </ul>

      <p><strong>Kua 7 (Metal)</strong></p>
      <ul>
        <li>Best Directions: Northwest, Southwest, Northeast, West</li>
        <li>Best Colors: White, gold, silver</li>
        <li>Personality: Charming, artistic, expressive</li>
      </ul>

      <p><strong>Kua 8 (Earth)</strong></p>
      <ul>
        <li>Best Directions: Southwest, Northwest, West, Northeast</li>
        <li>Best Colors: Yellow, beige, brown, red</li>
        <li>Personality: Ambitious, determined, reliable</li>
      </ul>

      <p><strong>Kua 9 (Fire)</strong></p>
      <ul>
        <li>Best Directions: South, East, North, Southeast</li>
        <li>Best Colors: Red, orange, purple, pink</li>
        <li>Personality: Passionate, intelligent, charismatic</li>
      </ul>

      <h3>Essential Feng Shui Principles</h3>

      <h4>The Five Elements</h4>
      <p><strong>Wood:</strong> Growth, vitality, expansion (Green, brown, columnar shapes)</p>
      <p><strong>Fire:</strong> Passion, energy, transformation (Red, orange, triangles)</p>
      <p><strong>Earth:</strong> Stability, nourishment, grounding (Yellow, brown, square shapes)</p>
      <p><strong>Metal:</strong> Precision, efficiency, clarity (White, gray, circular shapes)</p>
      <p><strong>Water:</strong> Flow, wisdom, abundance (Black, blue, wavy shapes)</p>

      <h4>Element Cycles</h4>
      <p><strong>Productive Cycle:</strong> Wood feeds Fire, Fire creates Earth, Earth bears Metal, Metal enriches Water, Water nourishes Wood</p>
      <p><strong>Destructive Cycle:</strong> Wood depletes Earth, Earth dams Water, Water extinguishes Fire, Fire melts Metal, Metal chops Wood</p>

      <h3>Room-by-Room Feng Shui Tips</h3>

      <h4>Bedroom (Love & Health)</h4>
      <ul>
        <li>Bed placement: Headboard against solid wall, diagonal from door</li>
        <li>Avoid: Mirrors facing bed, bed under window, clutter</li>
        <li>Enhance: Pairs of objects, soft lighting, calming colors</li>
        <li>Never: Electronics in bedroom (disrupts sleep chi)</li>
      </ul>

      <h4>Kitchen (Wealth & Health)</h4>
      <ul>
        <li>Stove placement: Command position (see entrance while cooking)</li>
        <li>Keep clean: Dirty kitchen blocks wealth</li>
        <li>Fresh food: Represents abundance</li>
        <li>Avoid: Stove directly opposite sink (fire vs water conflict)</li>
      </ul>

      <h4>Living Room (Social & Family)</h4>
      <ul>
        <li>Seating: Circular arrangement promotes conversation</li>
        <li>Front door energy: Should feel welcoming</li>
        <li>Natural light: Opens energy flow</li>
        <li>Plants: Living energy, air purification</li>
      </ul>

      <h4>Home Office (Career & Wealth)</h4>
      <ul>
        <li>Desk position: Face door (command position)</li>
        <li>Solid wall behind: Support and stability</li>
        <li>Organized: Clutter blocks opportunities</li>
        <li>Water feature: Activate career area (North)</li>
      </ul>

      <h4>Bathroom (Energy Drain)</h4>
      <ul>
        <li>Keep toilet lid closed: Prevents wealth drainage</li>
        <li>Good ventilation: Releases stagnant energy</li>
        <li>Plants: Absorb excess water element</li>
        <li>Mirror outside, not inside: Doesn't amplify water energy</li>
      </ul>

      <h4>Front Entrance (First Impression)</h4>
      <ul>
        <li>Clear path: Energy (and people) can enter easily</li>
        <li>Good lighting: Attracts positive chi</li>
        <li>Plants: Welcome living energy</li>
        <li>Clean and inviting: Sets tone for entire home</li>
      </ul>

      <h3>Feng Shui Wealth Tips</h3>
      <p><strong>Activate Southeast Corner (Wealth Area):</strong></p>
      <ul>
        <li>Purple or gold accents</li>
        <li>Healthy plants (jade plant, money tree)</li>
        <li>Water fountain (flowing towards center of home)</li>
        <li>Symbols of abundance (full fruit bowl, piggy bank)</li>
        <li>Keep area clean and clutter-free</li>
      </ul>

      <p><strong>Front Door Wealth Enhancements:</strong></p>
      <ul>
        <li>Red door or red welcome mat (attracts prosperity)</li>
        <li>Address numbers clearly visible</li>
        <li>Doorbell working (opportunities can "ring")</li>
        <li>Door opens fully (not blocked by clutter)</li>
      </ul>

      <h3>Feng Shui Love & Relationship Tips</h3>
      <p><strong>Activate Southwest Corner (Love Area):</strong></p>
      <ul>
        <li>Pink, red, or white decor</li>
        <li>Pairs of objects (2 candles, 2 lamps, 2 nightstands)</li>
        <li>Romantic artwork or photos (happy couples)</li>
        <li>Fresh flowers (especially roses or peonies)</li>
        <li>Rose quartz crystals</li>
      </ul>

      <p><strong>Bedroom for Romance:</strong></p>
      <ul>
        <li>Two nightstands (balance)</li>
        <li>Artwork depicting pairs or love</li>
        <li>No photos of children, family, or ex-partners</li>
        <li>No work materials (separate romance from career)</li>
      </ul>

      <h3>What to Avoid (Feng Shui "Poison Arrows")</h3>
      <ul>
        <li>❌ Clutter anywhere (blocks energy flow)</li>
        <li>❌ Broken items (broken energy)</li>
        <li>❌ Sharp corners pointing at seating (poison arrows)</li>
        <li>❌ Dried flowers or dead plants (death energy)</li>
        <li>❌ Mirrors facing bed (disturbs sleep)</li>
        <li>❌ Toilet in center of home (drains health)</li>
        <li>❌ Staircase facing front door (energy rushes out)</li>
        <li>❌ Bed under exposed beams (pressure, stress)</li>
      </ul>

      <h3>Quick Feng Shui Fixes</h3>
      
      <h4>To Attract Wealth:</h4>
      <ul>
        <li>Place 3 Chinese coins tied with red ribbon in wallet</li>
        <li>Position desk facing door (command position)</li>
        <li>Add fish tank with 8 gold fish + 1 black (protection)</li>
        <li>Keep toilet lids closed</li>
        <li>Fix all leaky faucets (money draining away)</li>
      </ul>

      <h4>To Improve Relationships:</h4>
      <ul>
        <li>Remove all images of single people from bedroom</li>
        <li>Add pairs of objects throughout home</li>
        <li>Place rose quartz in Southwest corner of bedroom</li>
        <li>Display wedding or romantic photos in SW corner</li>
      </ul>

      <h4>To Boost Career:</h4>
      <ul>
        <li>Place water feature in North area</li>
        <li>Add black or dark blue accents to office</li>
        <li>Display awards and achievements</li>
        <li>Keep business cards near front door</li>
      </ul>

      <h3>Colors in Feng Shui</h3>
      <p><strong>Red:</strong> Passion, luck, courage (use sparingly - too yang)</p>
      <p><strong>Orange:</strong> Social, happy, creative</p>
      <p><strong>Yellow:</strong> Cheerful, intellectual, grounding</p>
      <p><strong>Green:</strong> Growth, health, renewal, balance</p>
      <p><strong>Blue:</strong> Calm, trust, wisdom, relaxation</p>
      <p><strong>Purple:</strong> Wealth, spirituality, nobility</p>
      <p><strong>Pink:</strong> Love, romance, softness</p>
      <p><strong>White:</strong> Purity, freshness, new beginnings</p>
      <p><strong>Black:</strong> Depth, power, mystery (use with care)</p>
      <p><strong>Brown:</strong> Stability, reliability, earthiness</p>

      <h3>Does Feng Shui Affect Home Value?</h3>
      <p>While not directly, feng shui principles often align with good design:</p>
      <ul>
        <li>✅ Clutter-free homes show better</li>
        <li>✅ Good lighting attracts buyers</li>
        <li>✅ Welcoming entrance creates positive first impression</li>
        <li>✅ Organized spaces feel larger</li>
        <li>✅ Plants and nature add appeal</li>
      </ul>

      <p>In Asian markets (especially Chinese buyers), good feng shui can add 10-20% to property value. Homes with lucky numbers (8), South-facing exposure, and good feng shui layouts sell faster and for more money.</p>

      <p><strong>Apply feng shui principles to create a harmonious, prosperous living space that supports your goals and well-being. Small adjustments can make big energy shifts.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'birthYear',
        label: 'Birth Year',
        type: 'number',
        defaultValue: '1990',
        placeholder: '1990',
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
        defaultValue: 'female',
      },
    ],
    results: [
      { label: 'Your Kua Number', isCurrency: false },
      { label: 'Element', isCurrency: false },
      { label: 'Best Directions', isCurrency: false },
      { label: 'Lucky Colors', isCurrency: false },
      { label: 'Personality Traits', isCurrency: false },
      { label: 'Feng Shui Tips', isCurrency: false },
    ],
    calculate: (values) => {
      const birthYear = Number(values.birthYear) || 1990;
      const gender = values.gender || 'female';
      
      const lastTwoDigits = birthYear % 100;
      const sumDigits = Math.floor(lastTwoDigits / 10) + (lastTwoDigits % 10);
      const singleDigit = sumDigits > 9 ? Math.floor(sumDigits / 10) + (sumDigits % 10) : sumDigits;
      
      let kuaNumber;
      if (birthYear >= 2000) {
        kuaNumber = gender === 'male' ? 9 - singleDigit : singleDigit + 6;
      } else {
        kuaNumber = gender === 'male' ? 10 - singleDigit : singleDigit + 5;
      }
      
      if (kuaNumber > 9) kuaNumber = kuaNumber - 9;
      if (kuaNumber === 5) kuaNumber = gender === 'male' ? 2 : 8;

      const kuaInfo: Record<number, any> = {
        1: {
          element: 'Water',
          directions: 'North (best), East, Southeast, South',
          colors: 'Black, Dark Blue, Green',
          traits: 'Flexible, social, communicative, intuitive. You thrive in flow and adaptability.',
          tips: '• Face North while working\n• Use water features for career boost\n• Decorate with blacks and blues\n• Sleep with head pointing North'
        },
        2: {
          element: 'Earth',
          directions: 'Northeast (best), West, Northwest, Southwest',
          colors: 'Yellow, Beige, Brown, Earth Tones',
          traits: 'Stable, nurturing, patient, reliable. You bring grounding energy to spaces.',
          tips: '• Face Northeast for best results\n• Use earth tones in decor\n• Add crystals and stones\n• Keep center of home clear'
        },
        3: {
          element: 'Wood',
          directions: 'East (best), South, North, Southeast',
          colors: 'Green, Brown, Blue',
          traits: 'Dynamic, ambitious, assertive, energetic. You grow and expand like wood.',
          tips: '• Face East when possible\n• Add plants and wood furniture\n• Use green accents\n• Sleep with head pointing East'
        },
        4: {
          element: 'Wood',
          directions: 'Southeast (best), North, South, East',
          colors: 'Green, Brown, Blue',
          traits: 'Gentle, creative, intuitive, harmonious. You bring growth and renewal.',
          tips: '• Face Southeast for wealth energy\n• Activate SE corner with plants\n• Use greens and natural materials\n• Purple accents for prosperity'
        },
        6: {
          element: 'Metal',
          directions: 'West (best), Northeast, Southwest, Northwest',
          colors: 'White, Gold, Silver, Metallic',
          traits: 'Strong, organized, authoritative, efficient. You bring structure and clarity.',
          tips: '• Face West when working\n• Use metallic decor elements\n• Add white and gold accents\n• Circular shapes enhance energy'
        },
        7: {
          element: 'Metal',
          directions: 'Northwest (best), Southwest, Northeast, West',
          colors: 'White, Gold, Silver, Gray',
          traits: 'Charming, artistic, expressive, sociable. You attract helpful people.',
          tips: '• Face Northwest for mentors\n• Display metallic objects\n• Use whites and silvers\n• Add photos of mentors/teachers'
        },
        8: {
          element: 'Earth',
          directions: 'Southwest (best), Northwest, West, Northeast',
          colors: 'Yellow, Beige, Brown, Red',
          traits: 'Ambitious, determined, reliable, strong. You build solid foundations.',
          tips: '• Face Southwest for relationships\n• Use earth tone colors\n• Add pairs of objects\n• Pink and red for romance'
        },
        9: {
          element: 'Fire',
          directions: 'South (best), East, North, Southeast',
          colors: 'Red, Orange, Purple, Pink',
          traits: 'Passionate, intelligent, charismatic, energetic. You shine bright like fire.',
          tips: '• Face South for recognition\n• Use reds and purples\n• Add lighting and candles\n• Display achievements in South'
        },
      };

      const info = kuaInfo[kuaNumber];

      return [
        { label: 'Your Kua Number', value: `${kuaNumber}`, isCurrency: false },
        { label: 'Element', value: info.element, isCurrency: false },
        { label: 'Best Directions', value: info.directions, isCurrency: false },
        { label: 'Lucky Colors', value: info.colors, isCurrency: false },
        { label: 'Personality Traits', value: info.traits, isCurrency: false },
        { label: 'Feng Shui Tips', value: info.tips, isCurrency: false },
      ];
    },
  },
};
