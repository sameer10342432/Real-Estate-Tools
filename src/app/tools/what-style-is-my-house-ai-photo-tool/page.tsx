export async function generateMetadata() {
  return {
    title: 'What Style is My House? (AI Photo Tool) - Identify Architecture | Property Tools',
    description: 'Upload a photo and let AI identify your home\'s architectural style - from Victorian to Mid-Century Modern, Colonial to Contemporary. Instant results.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WhatStyleIsMyHouseAiPhotoToolContent } from '@/content/tools/what-style-is-my-house-ai-photo-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WhatStyleIsMyHouseAIPhotoToolPage = () => {
  return (
    <CalculatorLayout content={WhatStyleIsMyHouseAiPhotoToolContent}>
      <EnhancedCalculator
        title={WhatStyleIsMyHouseAiPhotoToolContent.title}
        slug="what-style-is-my-house-ai-photo-tool"
        category="Additional Tools"
        description={WhatStyleIsMyHouseAiPhotoToolContent.description}
        inputs={WhatStyleIsMyHouseAiPhotoToolContent.calculator.fields}
        results={WhatStyleIsMyHouseAiPhotoToolContent.calculator.results}
        calculation={WhatStyleIsMyHouseAiPhotoToolContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WhatStyleIsMyHouseAIPhotoToolPage;
