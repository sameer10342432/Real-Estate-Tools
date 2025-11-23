'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SENSITIVITY_ANALYSIS_VACANCY_CONTENT } from '@/content/tools/sensitivity-analysis-vacancy';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SensitivityAnalysisVacancyPage = () => {
  return (
    <CalculatorLayout content={SENSITIVITY_ANALYSIS_VACANCY_CONTENT}>
      <EnhancedCalculator
        title={SENSITIVITY_ANALYSIS_VACANCY_CONTENT.title}
        slug="sensitivity-analysis-vacancy"
        category="Real Estate"
        description={SENSITIVITY_ANALYSIS_VACANCY_CONTENT.description}
        inputs={SENSITIVITY_ANALYSIS_VACANCY_CONTENT.calculator.fields}
        results={SENSITIVITY_ANALYSIS_VACANCY_CONTENT.calculator.results}
        calculation={SENSITIVITY_ANALYSIS_VACANCY_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SensitivityAnalysisVacancyPage;
