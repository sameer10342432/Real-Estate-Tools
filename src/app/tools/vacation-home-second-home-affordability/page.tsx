'use client';
import { vacationHomeSecondHomeAffordability } from '@/content/tools/vacation-home-second-home-affordability';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const VacationHomeSecondHomeAffordabilityPage = () => {
  return (
    <CalculatorLayout content={vacationHomeSecondHomeAffordability}>
      <EnhancedCalculator
        title={vacationHomeSecondHomeAffordability.title}
        slug="vacation-home-second-home-affordability"
        category="Lifestyle & Housing"
        description={vacationHomeSecondHomeAffordability.description}
        inputs={vacationHomeSecondHomeAffordability.calculator.fields}
        results={vacationHomeSecondHomeAffordability.calculator.results}
        calculation={vacationHomeSecondHomeAffordability.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VacationHomeSecondHomeAffordabilityPage;
