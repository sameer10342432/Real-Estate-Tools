'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT } from '@/content/tools/philadelphia-pa-wage-tax-vs-suburb-commute';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PhiladelphiaPAWageTaxVsSuburbCommutePage = () => {
  return (
    <CalculatorLayout content={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT}>
      <EnhancedCalculator
        title={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT.title}
        slug="philadelphia-pa-wage-tax-vs-suburb-commute"
        category="Tax Calculators"
        description={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT.description}
        inputs={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT.calculator.fields}
        results={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT.calculator.results}
        calculation={PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PhiladelphiaPAWageTaxVsSuburbCommutePage;
