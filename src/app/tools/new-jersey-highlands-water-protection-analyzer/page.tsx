'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT } from '@/content/tools/new-jersey-highlands-water-protection-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewJerseyHighlandsWaterProtectionAnalyzerPage = () => {
  return (
    <CalculatorLayout content={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT.title}
        slug="new-jersey-highlands-water-protection-analyzer"
        category="Legal & Compliance"
        description={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT.description}
        inputs={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT.calculator.fields}
        results={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT.calculator.results}
        calculation={NEW_JERSEY_HIGHLANDS_WATER_PROTECTION_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewJerseyHighlandsWaterProtectionAnalyzerPage;
