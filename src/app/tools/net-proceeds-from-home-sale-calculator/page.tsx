
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Net Proceeds from Home Sale Calculator',
    description: 'Calculate your net proceeds from selling your home after all costs, commissions, and fees. Free online tool for real estate professionals, investors, and hom...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT } from '@/content/tools/net-proceeds-from-home-sale-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NetProceedsFromHomeSaleCalculatorPage = () => {
  return (
    <CalculatorLayout content={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT.title}
        slug="net-proceeds-from-home-sale-calculator"
        category="Seller Tools"
        description={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT.description}
        inputs={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT.calculator.fields}
        results={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT.calculator.results}
        calculation={NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NetProceedsFromHomeSaleCalculatorPage;
