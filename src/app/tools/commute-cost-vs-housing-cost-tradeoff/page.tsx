'use client';
import { commuteCostVsHousingCostTradeoff } from '@/content/tools/commute-cost-vs-housing-cost-tradeoff';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const CommuteCostVsHousingCostTradeoffPage = () => {
  return (
    <CalculatorLayout content={commuteCostVsHousingCostTradeoff}>
      <EnhancedCalculator
        title={commuteCostVsHousingCostTradeoff.title}
        slug="commute-cost-vs-housing-cost-tradeoff"
        category="Lifestyle & Housing"
        description={commuteCostVsHousingCostTradeoff.description}
        inputs={commuteCostVsHousingCostTradeoff.calculator.fields}
        results={commuteCostVsHousingCostTradeoff.calculator.results}
        calculation={commuteCostVsHousingCostTradeoff.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CommuteCostVsHousingCostTradeoffPage;
