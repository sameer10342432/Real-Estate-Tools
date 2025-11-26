'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT } from '@/content/tools/credit-repair-timeline-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function CreditRepairTimelineCalculatorPage() {
  return (
    <CalculatorLayout content={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT.title}
        slug="credit-repair-timeline-calculator"
        category="Financial Planning"
        description={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT.description}
        inputs={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT.calculator.fields}
        results={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT.calculator.results}
        calculation={CREDIT_REPAIR_TIMELINE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
