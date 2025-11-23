export async function generateMetadata() {
  return {
    title: 'Van Life vs Renting Cost Calculator - Compare Living Expenses | Property Tools',
    description: 'Compare the total costs of van life vs traditional renting. Analyze vehicle costs, gas, insurance, gym memberships, rent, utilities, and lifestyle factors.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VanLifeVsRentingCostContent } from '@/content/tools/van-life-vs-renting-cost';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VanLifeVsRentingCostPage = () => {
  return (
    <CalculatorLayout content={VanLifeVsRentingCostContent}>
      <EnhancedCalculator
        title={VanLifeVsRentingCostContent.title}
        slug="van-life-vs-renting-cost"
        category="Additional Tools"
        description={VanLifeVsRentingCostContent.description}
        inputs={VanLifeVsRentingCostContent.calculator.fields}
        results={VanLifeVsRentingCostContent.calculator.results}
        calculation={VanLifeVsRentingCostContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VanLifeVsRentingCostPage;
