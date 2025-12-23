'use client';
import type { Metadata } from 'next';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Office (Agent/Investor) Deduction Calculator | Property Tools',
    description: 'Calculate home office deductions for real estate agents and investors. Compare simplified and regular methods with our free home office calculator.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT } from '@/content/tools/home-office-agent-investor-deduction';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeOfficeDeductionPage = () => {
  return (
    <CalculatorLayout content={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT}>
      <EnhancedCalculator
        title={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT.title}
        slug="home-office-agent-investor-deduction"
        category="Tax Strategy & Entity Planning"
        description={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT.description}
        inputs={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT.calculator.fields}
        results={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT.calculator.results}
        calculation={HOME_OFFICE_AGENT_INVESTOR_DEDUCTION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeOfficeDeductionPage;
