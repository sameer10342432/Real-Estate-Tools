'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT } from '@/content/tools/population-growth-vs-construction';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PopulationGrowthVsConstructionPage = () => {
  return (
    <CalculatorLayout content={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT}>
      <EnhancedCalculator
        title={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT.title}
        slug="population-growth-vs-construction"
        category="Market Analysis"
        description={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT.description}
        inputs={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT.calculator.fields}
        results={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT.calculator.results}
        calculation={POPULATION_GROWTH_VS_CONSTRUCTION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PopulationGrowthVsConstructionPage;
