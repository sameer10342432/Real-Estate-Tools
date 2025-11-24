'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT } from '@/content/tools/co-op-board-approval-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoOpBoardApprovalAnalyzerPage = () => {
  return (
    <CalculatorLayout content={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT.title}
        slug="co-op-board-approval-analyzer"
        category="Real Estate"
        description={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT.description}
        inputs={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT.calculator.fields}
        results={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT.calculator.results}
        calculation={CO_OP_BOARD_APPROVAL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoOpBoardApprovalAnalyzerPage;

