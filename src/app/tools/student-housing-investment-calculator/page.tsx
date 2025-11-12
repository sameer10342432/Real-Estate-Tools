export async function generateMetadata() {
  return {
    title: 'Student Housing Investment Calculator - Calculate University Rental Returns | Property Tools',
    description: 'Calculate returns on student housing investments including rental income, occupancy rates, turnover costs, and cash flow for properties near universities.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/student-housing-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StudentHousingInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="student-housing-investment-calculator"
        category="Investment Analysis"
        description={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={STUDENT_HOUSING_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StudentHousingInvestmentCalculatorPage;
