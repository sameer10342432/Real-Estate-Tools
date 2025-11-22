'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOTTEST_ZIP_CODES_FINDER_CONTENT } from '@/content/tools/hottest-zip-codes-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HottestZipCodesFinderPage = () => {
  return (
    <CalculatorLayout content={HOTTEST_ZIP_CODES_FINDER_CONTENT}>
      <EnhancedCalculator
        title={HOTTEST_ZIP_CODES_FINDER_CONTENT.title}
        slug="hottest-zip-codes-finder"
        category="Market Analysis"
        description={HOTTEST_ZIP_CODES_FINDER_CONTENT.description}
        inputs={HOTTEST_ZIP_CODES_FINDER_CONTENT.calculator.fields}
        results={HOTTEST_ZIP_CODES_FINDER_CONTENT.calculator.results}
        calculation={HOTTEST_ZIP_CODES_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HottestZipCodesFinderPage;