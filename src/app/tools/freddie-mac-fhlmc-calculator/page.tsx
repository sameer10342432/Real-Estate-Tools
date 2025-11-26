'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT } from '@/content/tools/freddie-mac-fhlmc-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FreddieMacFhlmcCalculatorPage = () => {
  return (
    <CalculatorLayout content={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT.title}
        slug="freddie-mac-fhlmc-calculator"
        category="Mortgage Calculators"
        description={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT.description}
        inputs={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT.calculator.fields}
        results={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT.calculator.results}
        calculation={FREDDIE_MAC_FHLMC_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FreddieMacFhlmcCalculatorPage;
