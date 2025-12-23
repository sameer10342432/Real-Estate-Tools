'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Security Deposit Return Checklist',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT } from '@/content/tools/security-deposit-return-checklist';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT}>
      <EnhancedCalculator
        title={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT.title}
        slug="security-deposit-return-checklist"
        category="Renter Tools"
        description={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT.description}
        inputs={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT.calculator.fields}
        results={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT.calculator.results}
        calculation={SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
