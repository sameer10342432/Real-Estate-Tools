'use client';
async function _generateMetadata() {
  return {
    title: 'Title Search "Red Flag" Finder',
    description: 'Identify potential title issues, liens, encumbrances, and ownership problems before closing to protect your real estate investment. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TITLE_SEARCH_RED_FLAG_FINDER_CONTENT } from '@/content/tools/title-search-red-flag-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TitleSearchRedFlagFinderPage = () => {
  return (
    <CalculatorLayout content={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT}>
      <EnhancedCalculator
        title={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT.title}
        slug="title-search-red-flag-finder"
        category="Legal & Compliance"
        description={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT.description}
        inputs={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT.calculator.fields}
        results={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT.calculator.results}
        calculation={TITLE_SEARCH_RED_FLAG_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TitleSearchRedFlagFinderPage;
