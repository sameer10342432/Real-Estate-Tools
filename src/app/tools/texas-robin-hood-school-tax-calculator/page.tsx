'use client';
import { TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT } from '@/content/tools/texas-robin-hood-school-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const TexasRobinHoodSchoolTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT.title}
        slug="texas-robin-hood-school-tax-calculator"
        category="Tax Calculators"
        description={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT.description}
        inputs={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TexasRobinHoodSchoolTaxCalculatorPage;
