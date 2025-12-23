'use client';
import { PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT } from '@/content/tools/pet-ownership-cost-rental-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const PetOwnershipCostRentalCalculatorPage = () => {
  return (
    <CalculatorLayout content={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT.title}
        slug="pet-ownership-cost-rental-calculator"
        category="Lifestyle & Housing"
        description={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT.description}
        inputs={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT.calculator.fields}
        results={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT.calculator.results}
        calculation={PET_OWNERSHIP_COST_RENTAL_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PetOwnershipCostRentalCalculatorPage;
