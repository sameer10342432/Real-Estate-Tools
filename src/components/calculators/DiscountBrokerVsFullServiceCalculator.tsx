'use client';

import { DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT } from '@/content/tools/discount-broker-vs-full-service';
import { Calculator } from '@/components/calculators';

export const DiscountBrokerVsFullServiceCalculator = () => {
  return (
    <Calculator
      title={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT.title}
      description={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT.description}
      inputs={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT.calculator.fields}
      results={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT.calculator.results}
      calculation={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT.calculator.calculate}
    />
  );
};
