'use client';
import { utilityBillSplitterRoommates } from '@/content/tools/utility-bill-splitter-roommates';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const UtilityBillSplitterRoommatesPage = () => {
  return (
    <CalculatorLayout content={utilityBillSplitterRoommates}>
      <EnhancedCalculator
        title={utilityBillSplitterRoommates.title}
        slug="utility-bill-splitter-roommates"
        category="Lifestyle & Housing"
        description={utilityBillSplitterRoommates.description}
        inputs={utilityBillSplitterRoommates.calculator.fields}
        results={utilityBillSplitterRoommates.calculator.results}
        calculation={utilityBillSplitterRoommates.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UtilityBillSplitterRoommatesPage;
