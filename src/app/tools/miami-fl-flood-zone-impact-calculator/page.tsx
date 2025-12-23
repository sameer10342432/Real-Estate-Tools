'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT } from '@/content/tools/miami-fl-flood-zone-impact-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MiamiFlFloodZoneImpactCalculatorPage = () => {
  return (
    <CalculatorLayout content={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT.title}
        slug="miami-fl-flood-zone-impact-calculator"
        category="State-Specific Tools"
        description={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT.description}
        inputs={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT.calculator.fields}
        results={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT.calculator.results}
        calculation={MIAMI_FL_FLOOD_ZONE_IMPACT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MiamiFlFloodZoneImpactCalculatorPage;

const _metadata = {
  title: 'Miami FL Flood Zone Impact Calculator | Property Tools',
  description: 'Calculate flood insurance costs and property value impacts for different FEMA flood zones in Miami',
};
