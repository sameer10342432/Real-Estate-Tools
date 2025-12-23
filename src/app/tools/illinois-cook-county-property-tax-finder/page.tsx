'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT } from '@/content/tools/illinois-cook-county-property-tax-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IllinoisCookCountyPropertyTaxFinderPage = () => {
  return (
    <CalculatorLayout content={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT}>
      <EnhancedCalculator
        title={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT.title}
        slug="illinois-cook-county-property-tax-finder"
        category="Tax Calculators"
        description={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT.description}
        inputs={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT.calculator.fields}
        results={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT.calculator.results}
        calculation={ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IllinoisCookCountyPropertyTaxFinderPage;
