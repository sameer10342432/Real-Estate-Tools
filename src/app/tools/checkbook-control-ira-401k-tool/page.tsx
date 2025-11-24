'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT } from '@/content/tools/checkbook-control-ira-401k-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CheckbookControlIra401kToolPage = () => {
  return (
    <CalculatorLayout content={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT}>
      <EnhancedCalculator
        title={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT.title}
        slug="checkbook-control-ira-401k-tool"
        category="Tax Planning"
        description={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT.description}
        inputs={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT.calculator.fields}
        results={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT.calculator.results}
        calculation={CHECKBOOK_CONTROL_IRA_401K_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CheckbookControlIra401kToolPage;
