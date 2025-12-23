'use client';
async function _generateMetadata() {
  return {
    title: 'Community Solar vs Rooftop Solar Calculator - Solar Options Comparison',
    description: 'Compare costs and benefits of community solar programs vs installing rooftop solar panels. Analyze payback periods, savings, and environmental impact.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT } from '@/content/tools/community-solar-vs-rooftop-solar';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CommunitySolarVsRooftopSolarPage = () => {
  return (
    <CalculatorLayout content={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT}>
      <EnhancedCalculator
        title={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT.title}
        slug="community-solar-vs-rooftop-solar"
        category="Sustainability"
        description={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT.description}
        inputs={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT.calculator.fields}
        results={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT.calculator.results}
        calculation={COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CommunitySolarVsRooftopSolarPage;
