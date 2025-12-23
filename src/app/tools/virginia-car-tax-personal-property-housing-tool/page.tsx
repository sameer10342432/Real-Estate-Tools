'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT } from '@/content/tools/virginia-car-tax-personal-property-housing-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VirginiaCarTaxPersonalPropertyHousingToolPage = () => {
  return (
    <CalculatorLayout content={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT}>
      <EnhancedCalculator
        title={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT.title}
        slug="virginia-car-tax-personal-property-housing-tool"
        category="Tax Calculators"
        description={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT.description}
        inputs={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT.calculator.fields}
        results={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT.calculator.results}
        calculation={VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VirginiaCarTaxPersonalPropertyHousingToolPage;
