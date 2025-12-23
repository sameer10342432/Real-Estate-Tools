'use client';
async function _generateMetadata() {
  return {
    title: 'Home Wind Turbine ROI Calculator - Residential Wind Power Investment',
    description: 'Calculate the cost and ROI of installing a residential wind turbine including equipment, tower, installation, energy production, and 30% federal tax credit.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-wind-turbine-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeWindTurbineRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT.title}
        slug="home-wind-turbine-roi-calculator"
        category="Energy Efficiency"
        description={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeWindTurbineRoiCalculatorPage;
