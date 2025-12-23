'use client';
async function _generateMetadata() {
  return {
    title: 'Sustainable Home Feature Value-Add Calculator',
    description: 'Calculate how much green and sustainable home features add to your property value including solar, smart tech, and energy-efficient upgrades. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT } from '@/content/tools/sustainable-home-feature-value-add';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SustainableHomeFeatureValueAddPage = () => {
  return (
    <CalculatorLayout content={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT}>
      <EnhancedCalculator
        title={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT.title}
        slug="sustainable-home-feature-value-add"
        category="Green & Sustainable"
        description={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT.description}
        inputs={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT.calculator.fields}
        results={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT.calculator.results}
        calculation={SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SustainableHomeFeatureValueAddPage;
