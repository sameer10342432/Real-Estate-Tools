'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Application Document Checklist',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT } from '@/content/tools/rental-application-document-checklist';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT}>
      <EnhancedCalculator
        title={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT.title}
        slug="rental-application-document-checklist"
        category="Renter Tools"
        description={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT.description}
        inputs={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT.calculator.fields}
        results={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT.calculator.results}
        calculation={RENTAL_APPLICATION_DOCUMENT_CHECKLIST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
