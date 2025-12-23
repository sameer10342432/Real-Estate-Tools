'use client';
async function _generateMetadata() {
  return {
    title: 'Home Air Quality (IAQ) Improvement ROI Calculator',
    description: 'Calculate the return on investment for improving indoor air quality with air purifiers, HVAC upgrades, and ventilation systems. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT } from '@/content/tools/home-air-quality-iaq-improvement-roi';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeAirQualityIAQImprovementROIPage = () => {
  return (
    <CalculatorLayout content={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT}>
      <EnhancedCalculator
        title={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT.title}
        slug="home-air-quality-iaq-improvement-roi"
        category="Green & Sustainable"
        description={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT.description}
        inputs={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT.calculator.fields}
        results={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT.calculator.results}
        calculation={HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeAirQualityIAQImprovementROIPage;
