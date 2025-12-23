'use client';
import { wisconsinUseValueAssessment } from '@/content/tools/wisconsin-use-value-assessment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const WisconsinUseValueAssessmentPage = () => {
  return (
    <CalculatorLayout content={wisconsinUseValueAssessment}>
      <EnhancedCalculator
        title={wisconsinUseValueAssessment.title}
        slug="wisconsin-use-value-assessment-calculator"
        category="State-Specific Tools"
        description={wisconsinUseValueAssessment.description}
        inputs={wisconsinUseValueAssessment.calculator.fields}
        results={wisconsinUseValueAssessment.calculator.results}
        calculation={wisconsinUseValueAssessment.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WisconsinUseValueAssessmentPage;
