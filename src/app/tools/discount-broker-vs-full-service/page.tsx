import { DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT } from '@/content/tools/discount-broker-vs-full-service';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { DiscountBrokerVsFullServiceCalculator } from '@/components/calculators/DiscountBrokerVsFullServiceCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Discount Broker vs. Full Service Comparison - Property Tools',
    description: 'Compare discount brokers versus full-service real estate agents, calculate commission savings, analyze service trade-offs, and determine which option saves money',
  };
}

const DiscountBrokerVsFullServicePage = () => {
  return (
    <CalculatorLayout content={DISCOUNT_BROKER_VS_FULL_SERVICE_CONTENT}>
      <DiscountBrokerVsFullServiceCalculator />
    </CalculatorLayout>
  );
};

export default DiscountBrokerVsFullServicePage;
