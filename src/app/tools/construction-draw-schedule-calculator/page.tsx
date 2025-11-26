'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT } from '@/content/tools/construction-draw-schedule-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ConstructionDrawScheduleCalculatorPage = () => {
  return (
    <CalculatorLayout content={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT.title}
        slug="construction-draw-schedule-calculator"
        category="Construction & Development"
        description={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT.description}
        inputs={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT.calculator.fields}
        results={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT.calculator.results}
        calculation={CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConstructionDrawScheduleCalculatorPage;
