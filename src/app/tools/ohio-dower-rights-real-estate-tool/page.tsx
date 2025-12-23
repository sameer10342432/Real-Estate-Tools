'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT } from '@/content/tools/ohio-dower-rights-real-estate-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'Ohio Dower Rights Real Estate Tool | Spousal Property Rights Calculator',
  description: 'Calculate Ohio dower rights impact on real estate transactions. Understand spousal property rights, release requirements, and dower interest valuation.',
};

const OhioDowerRightsRealEstateToolPage = () => {
  return (
    <CalculatorLayout content={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT}>
      <EnhancedCalculator
        title={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT.title}
        slug="ohio-dower-rights-real-estate-tool"
        category="Legal Tools"
        description={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT.description}
        inputs={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT.calculator.fields}
        results={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT.calculator.results}
        calculation={OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OhioDowerRightsRealEstateToolPage;
