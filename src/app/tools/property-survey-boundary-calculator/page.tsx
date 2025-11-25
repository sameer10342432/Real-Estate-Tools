import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT } from '@/content/tools/property-survey-boundary-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Survey Boundary Calculator | Land Survey Cost Estimator',
    description: 'Calculate property survey costs based on lot size, terrain, and survey type. Analyze boundary dispute risks and understand survey requirements for real estate transactions.',
  };
}

const PropertySurveyBoundaryCalculatorPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT.title}
        slug="property-survey-boundary-calculator"
        category="Additional Tools"
        description={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT.description}
        inputs={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT.calculator.fields}
        results={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT.calculator.results}
        calculation={PROPERTY_SURVEY_BOUNDARY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertySurveyBoundaryCalculatorPage;
