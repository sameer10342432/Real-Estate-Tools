export async function generateMetadata() {
  return {
    title: 'Mortgage Application Document Checklist - Complete Guide | Property Tools',
    description: 'Complete checklist of all documents needed for mortgage application - tailored by loan type, employment status, and property type. Never miss a required document.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MortgageApplicationDocumentChecklistContent } from '@/content/tools/mortgage-application-document-checklist';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MortgageApplicationDocumentChecklistPage = () => {
  return (
    <CalculatorLayout content={MortgageApplicationDocumentChecklistContent}>
      <EnhancedCalculator
        title={MortgageApplicationDocumentChecklistContent.title}
        slug="mortgage-application-document-checklist"
        category="Additional Tools"
        description={MortgageApplicationDocumentChecklistContent.description}
        inputs={MortgageApplicationDocumentChecklistContent.calculator.fields}
        results={MortgageApplicationDocumentChecklistContent.calculator.results}
        calculation={MortgageApplicationDocumentChecklistContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageApplicationDocumentChecklistPage;
