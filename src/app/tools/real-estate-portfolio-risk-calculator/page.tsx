'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { REAL_ESTATE_PORTFOLIO_RISK_CALCULATOR_CONTENT } from '@/content/tools/real-estate-portfolio-risk-calculator';

export default function RealEstatePortfolioRiskCalculatorPage() {
  return (
    <CalculatorLayout content={REAL_ESTATE_PORTFOLIO_RISK_CALCULATOR_CONTENT}>
      <GenericCalculator content={REAL_ESTATE_PORTFOLIO_RISK_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
