'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gutter Installation/Replacement Cost Calculator | Property Tools',
    description: 'Calculate the cost of installing or replacing gutters and downspouts for your home with various material options including aluminum, vinyl, and copper.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT } from '@/content/tools/gutter-installation-replacement-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GutterInstallationReplacementCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT.title}
        slug="gutter-installation-replacement-cost-calculator"
        category="Home Improvement"
        description={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT.description}
        inputs={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.fields}
        results={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={GUTTER_INSTALLATION_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GutterInstallationReplacementCostCalculatorPage;
