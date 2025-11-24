'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT } from '@/content/tools/hoa-architectural-review-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HoaArchitecturalReviewToolPage = () => {
  return (
    <CalculatorLayout content={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT}>
      <EnhancedCalculator
        title={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT.title}
        slug="hoa-architectural-review-tool"
        category="HOA & Community"
        description={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT.description}
        inputs={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT.calculator.fields}
        results={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT.calculator.results}
        calculation={HOA_ARCHITECTURAL_REVIEW_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HoaArchitecturalReviewToolPage;
