'use client';
async function _generateMetadata() {
  return {
    title: 'Performing vs. Non-Performing Note Analyzer - Compare Note Investment Returns | Property Tools',
    description: 'Compare returns between performing and non-performing mortgage notes to make informed investment decisions.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT } from '@/content/tools/performing-vs-non-performing-note-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PerformingVsNonPerformingNoteAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT.title}
        slug="performing-vs-non-performing-note-analyzer"
        category="Investment Analysis"
        description={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT.description}
        inputs={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT.calculator.fields}
        results={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT.calculator.results}
        calculation={PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PerformingVsNonPerformingNoteAnalyzerPage;
