
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'School District vs Property Value Calculator | School Rating Impact Analysis - Free Tool',
    description: 'Analyze how school quality affects property values. Calculate the premium for top-rated school districts and make informed home buying decisions with school rating comparisons.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT } from '@/content/tools/school-district-vs-property-value';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SchoolDistrictVsPropertyValuePage = () => {
  return (
    <CalculatorLayout content={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT}>
      <EnhancedCalculator
        title={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT.title}
        slug="school-district-vs-property-value"
        category="Market Analysis"
        description={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT.description}
        inputs={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT.calculator.fields}
        results={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT.calculator.results}
        calculation={SCHOOL_DISTRICT_VS_PROPERTY_VALUE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SchoolDistrictVsPropertyValuePage;
