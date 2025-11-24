import { POCKET_LISTING_OFF_MARKET_CONTENT } from '@/content/tools/pocket-listing-off-market';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { PocketListingOffMarketCalculator } from '@/components/calculators/PocketListingOffMarketCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pocket Listing (Off-Market) Analyzer - Property Tools',
    description: 'Analyze pocket listing strategies, compare off-market versus public MLS listings, calculate privacy premium costs, and understand when pocket listings make sense',
  };
}

const PocketListingOffMarketPage = () => {
  return (
    <CalculatorLayout content={POCKET_LISTING_OFF_MARKET_CONTENT}>
      <PocketListingOffMarketCalculator />
    </CalculatorLayout>
  );
};

export default PocketListingOffMarketPage;
