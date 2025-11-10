
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Break-Even Analysis Calculator',
    description: 'Calculate break-even points for property investments. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  fixedCosts: z.number().min(0, { message: 'Fixed costs must be a positive number.' }),
  variableCostPerUnit: z.number().min(0, { message: 'Variable cost per unit must be a positive number.' }),
  pricePerUnit: z.number().min(0, { message: 'Price per unit must be a positive number.' }),
});

const BreakEvenCalculator = () => {
  const [breakEvenPoint, setBreakEvenPoint] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fixedCosts: 0,
      variableCostPerUnit: 0,
      pricePerUnit: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { fixedCosts, variableCostPerUnit, pricePerUnit } = values;
    if (pricePerUnit > variableCostPerUnit) {
      const calculatedBreakEvenPoint = fixedCosts / (pricePerUnit - variableCostPerUnit);
      setBreakEvenPoint(calculatedBreakEvenPoint);
    } else {
      setBreakEvenPoint(null); // or handle as an error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Break-Even Analysis Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fixedCosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Fixed Costs</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variableCostPerUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variable Cost Per Unit</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pricePerUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Per Unit</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Calculate Break-Even Point</Button>
            </form>
          </Form>
          {breakEvenPoint !== null && (
            <div className="mt-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold">Your Break-Even Point is: {breakEvenPoint.toFixed(2)} units</h3>
            </div>
          )}
        </CardContent>
      </Card>

      <article className="prose lg:prose-xl mx-auto mt-8">
        <h2>Understanding Break-Even Analysis</h2>
        <p>
          Break-even analysis is a financial calculation that tells you the point at which a company, or a new product or service, will be profitable. In other words, it’s the point where your revenue equals your costs.
        </p>
        <h3>How to Calculate the Break-Even Point</h3>
        <p>
          The formula for the break-even point is:
        </p>
        <p>
          <strong>Break-Even Point (in units) = Fixed Costs / (Price Per Unit - Variable Cost Per Unit)</strong>
        </p>
        <p>
          Where:
        </p>
        <ul>
          <li><strong>Fixed Costs:</strong> Costs that do not change with the number of units produced (e.g., rent, insurance, salaries).</li>
          <li><strong>Price Per Unit:</strong> The selling price of one unit.</li>
          <li><strong>Variable Cost Per Unit:</strong> The cost to produce one unit (e.g., materials, direct labor).</li>
        </ul>
        <h3>Why is Break-Even Analysis Important?</h3>
        <p>
          Break-even analysis is a crucial tool for business planning and decision-making. It helps you to:
        </p>
        <ul>
            <li>Determine the minimum number of units you need to sell to avoid a loss.</li>
            <li>Set realistic sales targets.</li>
            <li>Analyze the impact of price changes on your profitability.</li>
            <li>Make informed decisions about new investments or projects.</li>
        </ul>
      </article>
    </div>
  );
};

export default BreakEvenCalculator;