
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hottest ZIP Codes (US) Finder',
    description: 'Identify the hottest ZIP codes with rapid price appreciation and high demand across the United States. Free online tool for real estate professionals and investors.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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