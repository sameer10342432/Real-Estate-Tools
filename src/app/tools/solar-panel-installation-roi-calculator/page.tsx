'use client';
async function _generateMetadata() {
  return {
    title: 'Solar Panel Installation ROI Calculator - Calculate Solar Return on Investment',
    description: 'Calculate the return on investment for solar panel installation including energy savings, tax credits, home value increase, and payback period.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/solar-panel-installation-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SolarPanelInstallationRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT.title}
        slug="solar-panel-installation-roi-calculator"
        category="Home Improvement"
        description={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT.description}
        inputs={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SolarPanelInstallationRoiCalculatorPage;
