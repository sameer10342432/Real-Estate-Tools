'use client';

import { S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT } from '@/content/tools/s-corp-reasonable-salary-calculator';
import { Calculator } from '@/components/calculators';

export const SCorpReasonableSalaryCalculator = () => {
  return (
    <Calculator
      title={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT.title}
      description={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT.description}
      inputs={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT.calculator.fields}
      results={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT.calculator.results}
      calculation={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
