'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Buyer Wish List vs Reality Tool | Budget vs Expectations Calculator',
    description: 'Compare your dream home wish list with what you can actually afford. Prioritize must-have features vs nice-to-haves and make realistic buying decisions within your budget.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT } from '@/content/tools/buyer-wishlist-vs-reality-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BuyerWishlistVsRealityPage = () => {
  return (
    <CalculatorLayout content={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT}>
      <EnhancedCalculator
        title={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT.title}
        slug="buyer-wishlist-vs-reality-tool"
        category="Real Estate"
        description={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT.description}
        inputs={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT.calculator.fields}
        results={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT.calculator.results}
        calculation={BUYER_WISHLIST_VS_REALITY_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BuyerWishlistVsRealityPage;
