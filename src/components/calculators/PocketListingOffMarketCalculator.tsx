'use client';

import { POCKET_LISTING_OFF_MARKET_CONTENT } from '@/content/tools/pocket-listing-off-market';
import { Calculator } from '@/components/calculators';

export const PocketListingOffMarketCalculator = () => {
  return (
    <Calculator
      title={POCKET_LISTING_OFF_MARKET_CONTENT.title}
      description={POCKET_LISTING_OFF_MARKET_CONTENT.description}
      inputs={POCKET_LISTING_OFF_MARKET_CONTENT.calculator.fields}
      results={POCKET_LISTING_OFF_MARKET_CONTENT.calculator.results}
      calculation={POCKET_LISTING_OFF_MARKET_CONTENT.calculator.calculate}
    />
  );
};
