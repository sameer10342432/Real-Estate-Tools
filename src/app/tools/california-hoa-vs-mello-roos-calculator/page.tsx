import { CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT } from '@/content/tools/california-hoa-vs-mello-roos-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CaliforniaHOAVsMelloRoosCalculator } from '@/components/calculators/CaliforniaHOAVsMelloRoosCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'California HOA Fee vs Mello-Roos Calculator | Tax & Fee Comparison',
    description: 'Compare California HOA fees and Mello-Roos special taxes. Calculate total monthly costs and tax deductibility for California homebuyers.',
  };
}

const CaliforniaHOAVsMelloRoosCalculatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT}>
      <CaliforniaHOAVsMelloRoosCalculator />
    </CalculatorLayout>
  );
};

export default CaliforniaHOAVsMelloRoosCalculatorPage;
