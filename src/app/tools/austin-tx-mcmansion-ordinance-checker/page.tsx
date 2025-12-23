'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT } from '@/content/tools/austin-tx-mcmansion-ordinance-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AustinTxMcmansionOrdinanceCheckerPage = () => {
  return (
    <CalculatorLayout content={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT.title}
        slug="austin-tx-mcmansion-ordinance-checker"
        category="State-Specific Tools"
        description={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT.description}
        inputs={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT.calculator.fields}
        results={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT.calculator.results}
        calculation={AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AustinTxMcmansionOrdinanceCheckerPage;

const _metadata = {
  title: 'Austin TX McMansion Ordinance Checker | Property Tools',
  description: 'Check if your Austin property complies with residential design standards and FAR (floor area ratio) limits',
};
