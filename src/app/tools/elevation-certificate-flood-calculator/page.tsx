import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT } from '@/content/tools/elevation-certificate-flood-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Elevation Certificate Flood Calculator | FEMA Flood Insurance Savings',
    description: 'Calculate elevation certificate costs, analyze flood insurance premium savings, and understand LOMA requirements. Evaluate ROI and break-even analysis for flood zones.',
  };
}

const ElevationCertificateFloodCalculatorPage = () => {
  return (
    <CalculatorLayout content={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT.title}
        slug="elevation-certificate-flood-calculator"
        category="Additional Tools"
        description={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT.description}
        inputs={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT.calculator.fields}
        results={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT.calculator.results}
        calculation={ELEVATION_CERTIFICATE_FLOOD_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ElevationCertificateFloodCalculatorPage;
