'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT } from '@/content/tools/los-angeles-ca-rent-stabilization-rso-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LosAngelesCaRentStabilizationRsoToolPage = () => {
  return (
    <CalculatorLayout content={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT}>
      <EnhancedCalculator
        title={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT.title}
        slug="los-angeles-ca-rent-stabilization-rso-tool"
        category="State-Specific Tools"
        description={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT.description}
        inputs={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT.calculator.fields}
        results={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT.calculator.results}
        calculation={LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LosAngelesCaRentStabilizationRsoToolPage;

const _metadata = {
  title: 'Los Angeles RSO Rent Stabilization Calculator | Property Tools',
  description: 'Calculate maximum allowable rent increases for Los Angeles Rent Stabilization Ordinance (RSO) properties',
};
