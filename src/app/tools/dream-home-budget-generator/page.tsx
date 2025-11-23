export async function generateMetadata() {
  return {
    title: 'Dream Home Budget Generator - Custom Home Affordability Calculator | Property Tools',
    description: 'Generate a personalized budget for your dream home based on income, savings, lifestyle preferences, and financial goals. Plan your ideal home purchase realistically.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DreamHomeBudgetGeneratorContent } from '@/content/tools/dream-home-budget-generator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DreamHomeBudgetGeneratorPage = () => {
  return (
    <CalculatorLayout content={DreamHomeBudgetGeneratorContent}>
      <EnhancedCalculator
        title={DreamHomeBudgetGeneratorContent.title}
        slug="dream-home-budget-generator"
        category="Additional Tools"
        description={DreamHomeBudgetGeneratorContent.description}
        inputs={DreamHomeBudgetGeneratorContent.calculator.fields}
        results={DreamHomeBudgetGeneratorContent.calculator.results}
        calculation={DreamHomeBudgetGeneratorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DreamHomeBudgetGeneratorPage;
