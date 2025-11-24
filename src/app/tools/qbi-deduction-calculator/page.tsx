import { QBI_DEDUCTION_CALCULATOR_CONTENT } from '@/content/tools/qbi-deduction-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { QBIDeductionCalculator } from '@/components/calculators/QBIDeductionCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'QBI Deduction Calculator | Qualified Business Income for Real Estate',
    description: 'Calculate your Qualified Business Income (QBI) deduction under Section 199A. Maximize your 20% deduction for real estate agents, investors, and rental property owners.',
  };
}

const QBIDeductionCalculatorPage = () => {
  return (
    <CalculatorLayout content={QBI_DEDUCTION_CALCULATOR_CONTENT}>
      <QBIDeductionCalculator />
    </CalculatorLayout>
  );
};

export default QBIDeductionCalculatorPage;
