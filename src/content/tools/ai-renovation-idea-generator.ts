import { CalculatorContent } from '@/types';

export const AiRenovationIdeaGeneratorContent: CalculatorContent = {
  title: 'AI Renovation Idea Generator (by Photo)',
  description: 'Get AI-powered renovation ideas and design suggestions based on room type, style preferences, and budget constraints',
  icon: '🎨',
  category: 'Additional Tools',
  slug: 'ai-renovation-idea-generator',
  
  article: {
    title: 'Transform Your Space with AI-Powered Design Ideas',
    content: `
      <h2>AI Renovation Idea Generator</h2>
      <p>The AI Renovation Idea Generator is an innovative tool that uses artificial intelligence to provide personalized renovation and design suggestions for your property. Whether you're looking to update a single room or plan a complete home makeover, this tool analyzes your preferences, budget, and space requirements to generate creative, practical renovation ideas that align with current design trends and maximize your return on investment.</p>

      <h3>How It Works</h3>
      <p>Simply specify the room type you want to renovate, select your preferred design style, and input your budget range. The AI algorithm will analyze these parameters along with current design trends, material costs, and renovation best practices to generate customized renovation ideas tailored to your specific needs.</p>

      <h3>Room Types Supported</h3>
      <ul>
        <li><strong>Kitchen:</strong> Cabinets, countertops, appliances, backsplash, and layout optimization</li>
        <li><strong>Bathroom:</strong> Fixtures, tile work, vanities, lighting, and storage solutions</li>
        <li><strong>Living Room:</strong> Flooring, wall treatments, built-ins, and layout improvements</li>
        <li><strong>Bedroom:</strong> Closet systems, lighting, accent walls, and functional improvements</li>
        <li><strong>Outdoor Spaces:</strong> Decks, patios, landscaping, and outdoor living areas</li>
        <li><strong>Basement:</strong> Finishing ideas, egress windows, moisture control, and multi-purpose designs</li>
      </ul>

      <h3>Design Styles Available</h3>
      <p>Choose from popular design aesthetics including Modern, Contemporary, Traditional, Farmhouse, Industrial, Minimalist, Mid-Century Modern, Scandinavian, Coastal, and Transitional styles. Each style recommendation includes specific color palettes, material suggestions, and design elements that define that aesthetic.</p>

      <h3>Budget-Conscious Recommendations</h3>
      <p>The AI considers your budget constraints and provides tiered recommendations ranging from cost-effective updates to high-end renovations. You'll receive ideas that maximize visual impact while staying within your financial parameters, including DIY-friendly options and professional-grade suggestions.</p>

      <h3>ROI Considerations</h3>
      <p>Beyond aesthetics, the tool evaluates renovation ideas based on their potential return on investment. It prioritizes updates that not only improve your living space but also increase your property's market value. Popular high-ROI renovations include kitchen updates, bathroom remodels, adding curb appeal, and creating functional outdoor living spaces.</p>

      <h3>Implementation Guidance</h3>
      <p>Each renovation idea comes with practical implementation suggestions, including estimated timelines, recommended materials, potential challenges to anticipate, and whether the project is suitable for DIY or requires professional contractors. This helps you move from inspiration to action with confidence.</p>

      <h3>Staying Current with Trends</h3>
      <p>The AI is regularly updated with the latest design trends, sustainable materials, smart home integration options, and energy-efficient solutions. This ensures your renovation ideas are both timeless and contemporary, incorporating modern conveniences while maintaining lasting appeal.</p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'roomType',
        label: 'Room Type',
        type: 'select',
        defaultValue: 'kitchen',
        options: [
          { value: 'kitchen', label: 'Kitchen' },
          { value: 'bathroom', label: 'Bathroom' },
          { value: 'living-room', label: 'Living Room' },
          { value: 'bedroom', label: 'Bedroom' },
          { value: 'basement', label: 'Basement' },
          { value: 'outdoor', label: 'Outdoor Space' },
        ],
      },
      {
        name: 'stylePreference',
        label: 'Design Style',
        type: 'select',
        defaultValue: 'modern',
        options: [
          { value: 'modern', label: 'Modern' },
          { value: 'traditional', label: 'Traditional' },
          { value: 'farmhouse', label: 'Farmhouse' },
          { value: 'industrial', label: 'Industrial' },
          { value: 'minimalist', label: 'Minimalist' },
          { value: 'coastal', label: 'Coastal' },
        ],
      },
      {
        name: 'budget',
        label: 'Budget ($)',
        type: 'number',
        defaultValue: 15000,
        placeholder: 'Enter your renovation budget',
      },
    ],
    results: [
      { 
        label: 'Renovation Ideas', 
        isCurrency: false 
      },
      { 
        label: 'Estimated Cost Range', 
        isCurrency: true 
      },
    ],
    calculate: (values) => {
      const { roomType, stylePreference, budget } = values;
      
      const roomLabels: Record<string, string> = {
        'kitchen': 'Kitchen',
        'bathroom': 'Bathroom',
        'living-room': 'Living Room',
        'bedroom': 'Bedroom',
        'basement': 'Basement',
        'outdoor': 'Outdoor Space',
      };

      const styleLabels: Record<string, string> = {
        'modern': 'Modern',
        'traditional': 'Traditional',
        'farmhouse': 'Farmhouse',
        'industrial': 'Industrial',
        'minimalist': 'Minimalist',
        'coastal': 'Coastal',
      };

      const costRange = `$${(budget * 0.8).toLocaleString()} - $${(budget * 1.2).toLocaleString()}`;
      
      const ideas = `AI-Generated Ideas for ${roomLabels[roomType] || roomType} in ${styleLabels[stylePreference] || stylePreference} style:
      
This is a demo response. In production, this would provide detailed renovation suggestions including:
- Specific material recommendations
- Color palette suggestions
- Layout optimization ideas
- Fixture and finish selections
- DIY vs. professional guidance
- Timeline estimates
- ROI projections

Based on your budget of $${budget.toLocaleString()}, we would recommend prioritizing high-impact updates that align with ${styleLabels[stylePreference] || stylePreference} design principles.`;

      return [
        { 
          label: 'Renovation Ideas', 
          value: ideas, 
          isCurrency: false 
        },
        { 
          label: 'Estimated Cost Range', 
          value: costRange, 
          isCurrency: false 
        },
      ];
    },
  },
};
