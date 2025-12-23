'use client';
import { remoteWorkHomeSavingsCalculator } from '@/content/tools/remote-work-home-savings-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const RemoteWorkHomeSavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={remoteWorkHomeSavingsCalculator}>
      <EnhancedCalculator
        title={remoteWorkHomeSavingsCalculator.title}
        slug="remote-work-home-savings-calculator"
        category="Lifestyle & Housing"
        description={remoteWorkHomeSavingsCalculator.description}
        inputs={remoteWorkHomeSavingsCalculator.calculator.fields}
        results={remoteWorkHomeSavingsCalculator.calculator.results}
        calculation={remoteWorkHomeSavingsCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RemoteWorkHomeSavingsCalculatorPage;
