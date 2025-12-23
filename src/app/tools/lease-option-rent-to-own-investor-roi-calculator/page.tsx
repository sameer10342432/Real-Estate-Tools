'use client';
async function _generateMetadata() {
  return {
    title: 'Lease Option (Rent-to-Own) Investor ROI Calculator - Sandwich Lease Returns | Property Tools',
    description: 'Calculate returns on lease option investments including option fees, monthly spreads, and total profit potential.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT } from '@/content/tools/lease-option-rent-to-own-investor-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LeaseOptionRentToOwnInvestorRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT.title}
        slug="lease-option-rent-to-own-investor-roi-calculator"
        category="Investment Analysis"
        description={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT.description}
        inputs={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={LEASE_OPTION_RENT_TO_OWN_INVESTOR_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LeaseOptionRentToOwnInvestorRoiCalculatorPage;
