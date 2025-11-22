
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Population Growth vs Construction Analyzer | Housing Supply Demand Analysis - Free Tool',
    description: 'Analyze market dynamics by comparing population growth to new construction. Identify supply-demand imbalances and predict property value trends with free market analyzer.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
