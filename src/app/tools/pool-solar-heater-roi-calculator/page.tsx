'use client';
async function _generateMetadata() {
  return {
    title: 'Pool Solar Heater ROI Calculator',
    description: 'Calculate the return on investment for solar pool heating systems including installation costs, energy savings, and extended swimming season value. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT } from '@/content/tools/pool-solar-heater-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PoolSolarHeaterROICalculatorPage = () => {
  return (
    <CalculatorLayout content={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT.title}
        slug="pool-solar-heater-roi-calculator"
        category="Green & Sustainable"
        description={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT.description}
        inputs={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PoolSolarHeaterROICalculatorPage;
