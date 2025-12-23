'use client';
async function _generateMetadata() {
  return {
    title: 'Smart Thermostat ROI Calculator - Energy Savings & Payback Period',
    description: 'Calculate the cost and energy savings of installing a smart thermostat, reducing HVAC costs by 10-23% annually and earning utility rebates up to $125.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT } from '@/content/tools/smart-thermostat-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SmartThermostatRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT.title}
        slug="smart-thermostat-roi-calculator"
        category="Energy Efficiency"
        description={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT.description}
        inputs={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={SMART_THERMOSTAT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SmartThermostatRoiCalculatorPage;
