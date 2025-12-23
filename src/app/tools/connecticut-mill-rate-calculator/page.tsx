'use client';
import { connecticutMillRateCalculator } from '@/content/tools/connecticut-mill-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const ConnecticutMillRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={connecticutMillRateCalculator}>
      <EnhancedCalculator
        title={connecticutMillRateCalculator.title}
        slug="connecticut-mill-rate-calculator"
        category="State-Specific Tools"
        description={connecticutMillRateCalculator.description}
        inputs={connecticutMillRateCalculator.calculator.fields}
        results={connecticutMillRateCalculator.calculator.results}
        calculation={connecticutMillRateCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConnecticutMillRateCalculatorPage;
