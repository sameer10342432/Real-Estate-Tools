'use client';
async function _generateMetadata() {
  return {
    title: 'Non-Toxic Building Material Finder - Healthy Home Material Costs',
    description: 'Find and compare costs of healthy, non-toxic building materials vs conventional options. Calculate health benefits and payback periods.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT } from '@/content/tools/non-toxic-building-material-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NonToxicBuildingMaterialFinderPage = () => {
  return (
    <CalculatorLayout content={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT}>
      <EnhancedCalculator
        title={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT.title}
        slug="non-toxic-building-material-finder"
        category="Sustainability"
        description={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT.description}
        inputs={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT.calculator.fields}
        results={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT.calculator.results}
        calculation={NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NonToxicBuildingMaterialFinderPage;
