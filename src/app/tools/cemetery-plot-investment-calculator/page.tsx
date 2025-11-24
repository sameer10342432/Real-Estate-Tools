'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/cemetery-plot-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CemeteryPlotInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="cemetery-plot-investment-calculator"
        category={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.category}
        description={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={CEMETERY_PLOT_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CemeteryPlotInvestmentCalculatorPage;
