'use client';
async function _generateMetadata() {
  return {
    title: 'Real Estate Contract Review Checklist',
    description: 'Comprehensive checklist to review purchase agreements, spot red flags, and ensure all critical contract elements are properly addressed before signing. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT } from '@/content/tools/real-estate-contract-review-checklist';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateContractReviewChecklistPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT.title}
        slug="real-estate-contract-review-checklist"
        category="Legal & Compliance"
        description={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT.description}
        inputs={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT.calculator.fields}
        results={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT.calculator.results}
        calculation={REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateContractReviewChecklistPage;
