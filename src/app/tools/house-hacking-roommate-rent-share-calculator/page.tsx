'use client';
import { houseHackingRoommateRentShareCalculator } from '@/content/tools/house-hacking-roommate-rent-share-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const HouseHackingRoommateRentShareCalculatorPage = () => {
  return (
    <CalculatorLayout content={houseHackingRoommateRentShareCalculator}>
      <EnhancedCalculator
        title={houseHackingRoommateRentShareCalculator.title}
        slug="house-hacking-roommate-rent-share-calculator"
        category="Lifestyle & Housing"
        description={houseHackingRoommateRentShareCalculator.description}
        inputs={houseHackingRoommateRentShareCalculator.calculator.fields}
        results={houseHackingRoommateRentShareCalculator.calculator.results}
        calculation={houseHackingRoommateRentShareCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HouseHackingRoommateRentShareCalculatorPage;
