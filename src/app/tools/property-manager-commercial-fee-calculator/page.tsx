import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Manager Fee Calculator - Commercial Property Management Costs',
    description: 'Calculate commercial property management fees including monthly management, leasing commissions, maintenance markups, and additional service costs.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT } from '@/content/tools/property-manager-commercial-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyManagerCommercialFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT.title}
        slug="property-manager-commercial-fee-calculator"
        category="Real Estate"
        description={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT.description}
        inputs={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={PROPERTY_MANAGER_COMMERCIAL_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyManagerCommercialFeeCalculatorPage;
