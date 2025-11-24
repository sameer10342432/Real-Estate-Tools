import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Section 179 (Real Estate) Deduction Calculator | Property Tools',
    description: 'Calculate Section 179 deductions for qualifying real estate property improvements and equipment. Get instant tax savings with our free Section 179 calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT } from '@/content/tools/section-179-real-estate-deduction';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Section179DeductionPage = () => {
  return (
    <CalculatorLayout content={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT}>
      <EnhancedCalculator
        title={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT.title}
        slug="section-179-real-estate-deduction"
        category="Tax Strategy & Entity Planning"
        description={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT.description}
        inputs={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT.calculator.fields}
        results={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT.calculator.results}
        calculation={SECTION_179_REAL_ESTATE_DEDUCTION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Section179DeductionPage;
