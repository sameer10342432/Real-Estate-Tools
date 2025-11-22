export async function generateMetadata() {
  return {
    title: 'Feng Shui (Home) Calculator - Energy Flow Analysis | Property Tools',
    description: 'Analyze your home\'s feng shui energy flow using the Bagua map, determine your Kua number, and get personalized recommendations for harmony and prosperity.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FengShuiHomeCalculatorContent } from '@/content/tools/feng-shui-home-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FengShuiHomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={FengShuiHomeCalculatorContent}>
      <EnhancedCalculator
        title={FengShuiHomeCalculatorContent.title}
        slug="feng-shui-home-calculator"
        category="Additional Tools"
        description={FengShuiHomeCalculatorContent.description}
        inputs={FengShuiHomeCalculatorContent.calculator.fields}
        results={FengShuiHomeCalculatorContent.calculator.results}
        calculation={FengShuiHomeCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FengShuiHomeCalculatorPage;
