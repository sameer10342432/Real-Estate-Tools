'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Offer Strength Calculator | Home Offer Competitiveness Score',
    description: 'Calculate how competitive your home offer is by weighing price, contingencies, closing timeline, and other terms. Win in multiple offer situations with strategic offers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { OFFER_STRENGTH_CALCULATOR_CONTENT } from '@/content/tools/offer-strength-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OfferStrengthCalculatorPage = () => {
  return (
    <CalculatorLayout content={OFFER_STRENGTH_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OFFER_STRENGTH_CALCULATOR_CONTENT.title}
        slug="offer-strength-calculator"
        category="Real Estate"
        description={OFFER_STRENGTH_CALCULATOR_CONTENT.description}
        inputs={OFFER_STRENGTH_CALCULATOR_CONTENT.calculator.fields}
        results={OFFER_STRENGTH_CALCULATOR_CONTENT.calculator.results}
        calculation={OFFER_STRENGTH_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OfferStrengthCalculatorPage;
