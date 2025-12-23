'use client';
async function _generateMetadata() {
  return {
    title: 'Inflate-Proof Home (Energy) Calculator - Long-Term Energy Savings',
    description: 'Calculate long-term energy savings and protection against rising utility costs with energy-efficient home improvements. Plan your inflation-proof home upgrades.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT } from '@/content/tools/inflate-proof-home-energy-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const InflateProofHomeEnergyCalculatorPage = () => {
  return (
    <CalculatorLayout content={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT.title}
        slug="inflate-proof-home-energy-calculator"
        category="Sustainability"
        description={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT.description}
        inputs={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT.calculator.fields}
        results={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT.calculator.results}
        calculation={INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InflateProofHomeEnergyCalculatorPage;
