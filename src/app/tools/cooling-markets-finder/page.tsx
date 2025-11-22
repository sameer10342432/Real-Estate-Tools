'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COOLING_MARKETS_FINDER_CONTENT } from '@/content/tools/cooling-markets-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoolingMarketsFinderPage = () => {
  return (
    <CalculatorLayout content={COOLING_MARKETS_FINDER_CONTENT}>
      <EnhancedCalculator
        title={COOLING_MARKETS_FINDER_CONTENT.title}
        slug="cooling-markets-finder"
        category="Market Analysis"
        description={COOLING_MARKETS_FINDER_CONTENT.description}
        inputs={COOLING_MARKETS_FINDER_CONTENT.calculator.fields}
        results={COOLING_MARKETS_FINDER_CONTENT.calculator.results}
        calculation={COOLING_MARKETS_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoolingMarketsFinderPage;