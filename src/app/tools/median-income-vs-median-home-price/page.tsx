'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT } from '@/content/tools/median-income-vs-median-home-price';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MedianIncomeVsMedianHomePricePage = () => {
  return (
    <CalculatorLayout content={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT}>
      <EnhancedCalculator
        title={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT.title}
        slug="median-income-vs-median-home-price"
        category="Market Analysis"
        description={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT.description}
        inputs={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT.calculator.fields}
        results={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT.calculator.results}
        calculation={MEDIAN_INCOME_VS_MEDIAN_HOME_PRICE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MedianIncomeVsMedianHomePricePage;
