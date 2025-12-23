'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT } from '@/content/tools/san-francisco-ca-rent-control-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SanFranciscoCaRentControlCalculatorPage = () => {
  return (
    <CalculatorLayout content={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT.title}
        slug="san-francisco-ca-rent-control-calculator"
        category="State-Specific Tools"
        description={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT.description}
        inputs={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT.calculator.fields}
        results={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT.calculator.results}
        calculation={SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SanFranciscoCaRentControlCalculatorPage;

const _metadata = {
  title: 'San Francisco Rent Control Calculator | Property Tools',
  description: 'Calculate maximum allowable rent increases under San Francisco rent control ordinance',
};
