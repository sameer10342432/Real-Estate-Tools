
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Septic System Design vs Repair Calculator | Property Tools',
    description: 'Calculate and compare costs for designing a new septic system versus repairing your existing system. Get detailed breakdowns for installation, permits, and maintenance.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT } from '@/content/tools/septic-system-design-vs-repair-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SepticSystemDesignVsRepairCalculatorPage = () => {
  return (
    <CalculatorLayout content={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT.title}
        slug="septic-system-design-vs-repair-calculator"
        category="Home Inspection"
        description={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT.description}
        inputs={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT.calculator.fields}
        results={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT.calculator.results}
        calculation={SEPTIC_SYSTEM_DESIGN_VS_REPAIR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SepticSystemDesignVsRepairCalculatorPage;
