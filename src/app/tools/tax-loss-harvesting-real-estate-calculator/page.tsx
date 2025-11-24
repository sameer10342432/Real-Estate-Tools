'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/tax-loss-harvesting-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TaxLossHarvestingRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="tax-loss-harvesting-real-estate-calculator"
        category="Tax Planning"
        description={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={TAX_LOSS_HARVESTING_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TaxLossHarvestingRealEstateCalculatorPage;
