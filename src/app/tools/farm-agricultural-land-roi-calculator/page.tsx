export async function generateMetadata() {
  return {
    title: 'Farm/Agricultural Land ROI Calculator - Calculate Farmland Investment Returns | Property Tools',
    description: 'Calculate returns on farmland investments including crop income, land appreciation, government payments, and tax benefits.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT } from '@/content/tools/farm-agricultural-land-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FarmAgriculturalLandROICalculatorPage = () => {
  return (
    <CalculatorLayout content={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT.title}
        slug="farm-agricultural-land-roi-calculator"
        category="Investment Analysis"
        description={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT.description}
        inputs={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={FARM_AGRICULTURAL_LAND_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FarmAgriculturalLandROICalculatorPage;
