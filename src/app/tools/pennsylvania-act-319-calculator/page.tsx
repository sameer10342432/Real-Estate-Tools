import { PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT } from '@/content/tools/pennsylvania-act-319-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { PennsylvaniaAct319Calculator } from '@/components/calculators/PennsylvaniaAct319Calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pennsylvania Act 319 Calculator | Clean & Green Tax Program',
    description: 'Calculate Pennsylvania Act 319 Clean & Green preferential assessment tax savings. Estimate agricultural use assessment benefits and rollback tax liability.',
  };
}

const PennsylvaniaAct319CalculatorPage = () => {
  return (
    <CalculatorLayout content={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT}>
      <PennsylvaniaAct319Calculator />
    </CalculatorLayout>
  );
};

export default PennsylvaniaAct319CalculatorPage;
