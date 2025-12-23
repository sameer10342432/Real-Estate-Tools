'use client';
import { prenuptialAgreementRealEstateTool } from '@/content/tools/prenuptial-agreement-real-estate-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const PrenuptialAgreementRealEstateToolPage = () => {
  return (
    <CalculatorLayout content={prenuptialAgreementRealEstateTool}>
      <EnhancedCalculator
        title={prenuptialAgreementRealEstateTool.title}
        slug="prenuptial-agreement-real-estate-tool"
        category="Lifestyle & Housing"
        description={prenuptialAgreementRealEstateTool.description}
        inputs={prenuptialAgreementRealEstateTool.calculator.fields}
        results={prenuptialAgreementRealEstateTool.calculator.results}
        calculation={prenuptialAgreementRealEstateTool.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PrenuptialAgreementRealEstateToolPage;
