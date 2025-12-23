'use client';
import { ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT } from '@/content/tools/energy-efficient-mortgage-eem-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const EnergyEfficientMortgageEEMCalculatorPage = () => {
  return (
    <CalculatorLayout content={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT.title}
        slug="energy-efficient-mortgage-eem-calculator"
        category="Mortgage Calculators"
        description={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT.description}
        inputs={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT.calculator.fields}
        results={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT.calculator.results}
        calculation={ENERGY_EFFICIENT_MORTGAGE_EEM_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EnergyEfficientMortgageEEMCalculatorPage;
