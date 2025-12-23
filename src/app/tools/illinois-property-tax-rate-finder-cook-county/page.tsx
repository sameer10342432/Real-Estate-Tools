'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT } from '@/content/tools/illinois-property-tax-rate-finder-cook-county';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IllinoisPropertyTaxRateFinderCookCountyPage = () => {
  return (
    <CalculatorLayout content={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT}>
      <EnhancedCalculator
        title={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT.title}
        slug="illinois-property-tax-rate-finder-cook-county"
        category="Tax Calculators"
        description={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT.description}
        inputs={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT.calculator.fields}
        results={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT.calculator.results}
        calculation={ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IllinoisPropertyTaxRateFinderCookCountyPage;
