'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT } from '@/content/tools/tennessee-hall-income-tax-real-estate';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TennesseeHallIncomeTaxRealEstatePage = () => {
  return (
    <CalculatorLayout content={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT}>
      <EnhancedCalculator
        title={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT.title}
        slug="tennessee-hall-income-tax-real-estate"
        category="State-Specific Tools"
        description={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT.description}
        inputs={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT.calculator.fields}
        results={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT.calculator.results}
        calculation={TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TennesseeHallIncomeTaxRealEstatePage;

const _metadata = {
  title: 'Tennessee Hall Income Tax (Real Estate) Calculator | Property Tools',
  description: 'Calculate the former Tennessee Hall Income Tax on real estate investment income before its 2021 repeal',
};
