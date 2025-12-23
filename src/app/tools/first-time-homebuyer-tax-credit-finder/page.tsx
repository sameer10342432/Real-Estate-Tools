'use client';
import { firstTimeHomebuyerTaxCreditFinder } from '@/content/tools/first-time-homebuyer-tax-credit-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const FirstTimeHomebuyerTaxCreditFinderPage = () => {
  return (
    <CalculatorLayout content={firstTimeHomebuyerTaxCreditFinder}>
      <EnhancedCalculator
        title={firstTimeHomebuyerTaxCreditFinder.title}
        slug="first-time-homebuyer-tax-credit-finder"
        category="First-Time Homebuyer Tools"
        description={firstTimeHomebuyerTaxCreditFinder.description}
        inputs={firstTimeHomebuyerTaxCreditFinder.calculator.fields}
        results={firstTimeHomebuyerTaxCreditFinder.calculator.results}
        calculation={firstTimeHomebuyerTaxCreditFinder.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FirstTimeHomebuyerTaxCreditFinderPage;
