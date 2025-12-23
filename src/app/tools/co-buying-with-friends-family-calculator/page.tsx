'use client';
import { coBuyingWithFriendsFamilyCalculator } from '@/content/tools/co-buying-with-friends-family-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const CoBuyingWithFriendsFamilyCalculatorPage = () => {
  return (
    <CalculatorLayout content={coBuyingWithFriendsFamilyCalculator}>
      <EnhancedCalculator
        title={coBuyingWithFriendsFamilyCalculator.title}
        slug="co-buying-with-friends-family-calculator"
        category="Lifestyle & Housing"
        description={coBuyingWithFriendsFamilyCalculator.description}
        inputs={coBuyingWithFriendsFamilyCalculator.calculator.fields}
        results={coBuyingWithFriendsFamilyCalculator.calculator.results}
        calculation={coBuyingWithFriendsFamilyCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoBuyingWithFriendsFamilyCalculatorPage;
