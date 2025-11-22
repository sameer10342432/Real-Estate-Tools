export async function generateMetadata() {
  return {
    title: 'Color Palette Generator (Interior Design) - Professional Color Schemes | Property Tools',
    description: 'Generate professional interior design color palettes based on room type, style, mood, and lighting - get paint codes and coordinating recommendations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ColorPaletteGeneratorInteriorDesignContent } from '@/content/tools/color-palette-generator-interior-design';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ColorPaletteGeneratorInteriorDesignPage = () => {
  return (
    <CalculatorLayout content={ColorPaletteGeneratorInteriorDesignContent}>
      <EnhancedCalculator
        title={ColorPaletteGeneratorInteriorDesignContent.title}
        slug="color-palette-generator-interior-design"
        category="Additional Tools"
        description={ColorPaletteGeneratorInteriorDesignContent.description}
        inputs={ColorPaletteGeneratorInteriorDesignContent.calculator.fields}
        results={ColorPaletteGeneratorInteriorDesignContent.calculator.results}
        calculation={ColorPaletteGeneratorInteriorDesignContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ColorPaletteGeneratorInteriorDesignPage;
