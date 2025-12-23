'use client';
import { mortgageCreditCertificateCalculator } from '@/content/tools/mortgage-credit-certificate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const MortgageCreditCertificateCalculatorPage = () => {
  return (
    <CalculatorLayout content={mortgageCreditCertificateCalculator}>
      <EnhancedCalculator
        title={mortgageCreditCertificateCalculator.title}
        slug="mortgage-credit-certificate-calculator"
        category="First-Time Homebuyer Tools"
        description={mortgageCreditCertificateCalculator.description}
        inputs={mortgageCreditCertificateCalculator.calculator.fields}
        results={mortgageCreditCertificateCalculator.calculator.results}
        calculation={mortgageCreditCertificateCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageCreditCertificateCalculatorPage;
