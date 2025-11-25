import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT } from '@/content/tools/escrow-holdback-repairs-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Escrow Holdback Repairs Calculator | Repair Escrow Amount & Risk',
    description: 'Calculate escrow holdback amounts for repairs, analyze lender approval likelihood, and understand risks of closing with incomplete work. Evaluate repair timelines and costs.',
  };
}

const EscrowHoldbackRepairsCalculatorPage = () => {
  return (
    <CalculatorLayout content={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT.title}
        slug="escrow-holdback-repairs-calculator"
        category="Additional Tools"
        description={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT.description}
        inputs={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT.calculator.fields}
        results={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT.calculator.results}
        calculation={ESCROW_HOLDBACK_REPAIRS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EscrowHoldbackRepairsCalculatorPage;
