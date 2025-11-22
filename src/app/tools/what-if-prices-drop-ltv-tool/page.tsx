export async function generateMetadata() {
  return {
    title: 'What if Prices Drop (LTV) Calculator - Price Protection Analysis | Property Tools',
    description: 'Calculate how falling home prices affect your loan-to-value ratio, equity, and potential underwater mortgage risk. Protect yourself from market downturns.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WhatIfPricesDropLtvToolContent } from '@/content/tools/what-if-prices-drop-ltv-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WhatIfPricesDropLTVToolPage = () => {
  return (
    <CalculatorLayout content={WhatIfPricesDropLtvToolContent}>
      <EnhancedCalculator
        title={WhatIfPricesDropLtvToolContent.title}
        slug="what-if-prices-drop-ltv-tool"
        category="Additional Tools"
        description={WhatIfPricesDropLtvToolContent.description}
        inputs={WhatIfPricesDropLtvToolContent.calculator.fields}
        results={WhatIfPricesDropLtvToolContent.calculator.results}
        calculation={WhatIfPricesDropLtvToolContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WhatIfPricesDropLTVToolPage;
