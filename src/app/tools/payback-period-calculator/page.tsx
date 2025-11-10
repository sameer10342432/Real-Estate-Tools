
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Payback Period Calculator',
    description: 'Determine how long it will take to recover your initial investment. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const formSchema = z.object({
  initialInvestment: z.string().min(1, { message: 'Initial investment is required.' }),
  annualCashFlow: z.string().min(1, { message: 'Annual cash flow is required.' }),
});

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PAYBACK_PERIOD_CALCULATOR_CONTENT } from '@/content/tools/payback-period-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PaybackPeriodCalculatorPage = () => {
  return (
    <CalculatorLayout content={PAYBACK_PERIOD_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PAYBACK_PERIOD_CALCULATOR_CONTENT.title}
        slug="payback-period-calculator"
        category="Real Estate"
        description={PAYBACK_PERIOD_CALCULATOR_CONTENT.description}
        inputs={PAYBACK_PERIOD_CALCULATOR_CONTENT.calculator.fields}
        results={PAYBACK_PERIOD_CALCULATOR_CONTENT.calculator.results}
        calculation={PAYBACK_PERIOD_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PaybackPeriodCalculatorPage;