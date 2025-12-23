'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Apartment Hunting Checklist Generator',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT } from '@/content/tools/apartment-hunting-checklist-generator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT}>
      <EnhancedCalculator
        title={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT.title}
        slug="apartment-hunting-checklist-generator"
        category="Renter Tools"
        description={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT.description}
        inputs={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT.calculator.fields}
        results={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT.calculator.results}
        calculation={APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
