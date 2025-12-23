'use client';
import { montanaBiennialReappraisal } from '@/content/tools/montana-biennial-reappraisal-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const MontanaBiennialReappraisalPage = () => {
  return (
    <CalculatorLayout content={montanaBiennialReappraisal}>
      <EnhancedCalculator
        title={montanaBiennialReappraisal.title}
        slug="montana-biennial-reappraisal-calculator"
        category="State-Specific Tools"
        description={montanaBiennialReappraisal.description}
        inputs={montanaBiennialReappraisal.calculator.fields}
        results={montanaBiennialReappraisal.calculator.results}
        calculation={montanaBiennialReappraisal.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MontanaBiennialReappraisalPage;
