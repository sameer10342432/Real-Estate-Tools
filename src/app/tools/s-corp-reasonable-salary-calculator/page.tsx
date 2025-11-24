import { S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT } from '@/content/tools/s-corp-reasonable-salary-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SCorpReasonableSalaryCalculator } from '@/components/calculators/SCorpReasonableSalaryCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'S-Corp Reasonable Salary Calculator | IRS Compliance Tool for Agents',
    description: 'Calculate IRS-compliant reasonable salary for S-Corporation real estate agents. Avoid audit risks with proper W-2 salary benchmarks based on your income and experience level.',
  };
}

const SCorpReasonableSalaryCalculatorPage = () => {
  return (
    <CalculatorLayout content={S_CORP_REASONABLE_SALARY_CALCULATOR_CONTENT}>
      <SCorpReasonableSalaryCalculator />
    </CalculatorLayout>
  );
};

export default SCorpReasonableSalaryCalculatorPage;
