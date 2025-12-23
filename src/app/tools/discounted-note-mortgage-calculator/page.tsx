'use client';
async function _generateMetadata() {
  return {
    title: 'Discounted Note (Mortgage) Calculator - Calculate Note Investment Returns | Property Tools',
    description: 'Calculate returns when purchasing mortgage notes at a discount, including yield, profit potential, and break-even analysis.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/discounted-note-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DiscountedNoteMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="discounted-note-mortgage-calculator"
        category="Investment Analysis"
        description={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DiscountedNoteMortgageCalculatorPage;
