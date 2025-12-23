'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT } from '@/content/tools/new-york-star-exemption-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'New York STAR Exemption Calculator | School Tax Relief Savings',
  description: 'Calculate your NY STAR exemption savings - Basic and Enhanced STAR property tax benefits. Estimate annual school tax relief for your home.',
};

const NewYorkStarExemptionCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT.title}
        slug="new-york-star-exemption-calculator"
        category="Tax Calculators"
        description={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT.description}
        inputs={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewYorkStarExemptionCalculatorPage;
