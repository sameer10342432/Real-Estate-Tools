import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Travel Deduction (Landlord) Calculator | Property Tools',
    description: 'Calculate tax-deductible travel expenses for landlords and property investors. Track mileage, airfare, and lodging deductions with our free travel calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT } from '@/content/tools/travel-deduction-landlord-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TravelDeductionPage = () => {
  return (
    <CalculatorLayout content={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT.title}
        slug="travel-deduction-landlord-calculator"
        category="Tax Strategy & Entity Planning"
        description={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT.description}
        inputs={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT.calculator.fields}
        results={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT.calculator.results}
        calculation={TRAVEL_DEDUCTION_LANDLORD_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TravelDeductionPage;
