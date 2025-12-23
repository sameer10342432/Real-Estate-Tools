'use client';
async function _generateMetadata() {
  return {
    title: 'EV Charger Installation ROI Calculator - Electric Vehicle Home Charging',
    description: 'Calculate the cost and ROI of installing a Level 2 EV charger at home including installation costs, energy savings vs gas, and federal tax credits up to $1,000.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/ev-charger-installation-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EvChargerInstallationRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT.title}
        slug="ev-charger-installation-roi-calculator"
        category="Energy Efficiency"
        description={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT.description}
        inputs={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EvChargerInstallationRoiCalculatorPage;
