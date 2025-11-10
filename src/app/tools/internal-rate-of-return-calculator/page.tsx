
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Internal Rate of Return Calculator',
    description: 'Calculate IRR for investment properties. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}


"use client";

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const cashFlowSchema = z.object({
  amount: z.number(),
});

const schema = z.object({
  initialInvestment: z.number().min(1, 'Initial investment must be greater than 0'),
  cashFlows: z.array(cashFlowSchema).min(1, 'At least one cash flow is required'),
});

type FormValues = z.infer<typeof schema>;

// Function to calculate IRR using the Newton-Raphson method
const calculateIRR = (cashFlows: number[], guess = 0.1) => {
  const maxIterations = 100;
  const tolerance = 1e-6;

  let x0 = guess;

  for (let i = 0; i < maxIterations; i++) {
    const npv = cashFlows.reduce((acc, val, t) => acc + val / Math.pow(1 + x0, t), 0);
    const derivative = cashFlows.reduce((acc, val, t) => acc - (t * val) / Math.pow(1 + x0, t + 1), 0);

    if (Math.abs(derivative) < tolerance) {
      break;
    }

    const x1 = x0 - npv / derivative;

    if (Math.abs(x1 - x0) < tolerance) {
      return x1 * 100;
    }

    x0 = x1;
  }

  return null; // Failed to converge
};

const IRRCalculator: React.FC = () => {
  const [irr, setIrr] = useState<number | null>(null);
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      initialInvestment: 50000,
      cashFlows: [{ amount: 10000 }, { amount: 15000 }, { amount: 20000 }, { amount: 25000 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cashFlows",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { initialInvestment, cashFlows } = data;
    const allCashFlows = [-initialInvestment, ...cashFlows.map(cf => cf.amount)];
    const calculatedIrr = calculateIRR(allCashFlows);
    setIrr(calculatedIrr);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Internal Rate of Return (IRR) Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700">Initial Investment ($)</label>
                <input 
                  id="initialInvestment" 
                  type="number" 
                  {...register('initialInvestment', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.initialInvestment && <p className="mt-2 text-sm text-red-600">{errors.initialInvestment.message}</p>}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Cash Flows ($)</h3>
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <input 
                        type="number" 
                        {...register(`cashFlows.${index}.amount`, { valueAsNumber: true })} 
                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder={`Year ${index + 1}`}
                      />
                      <button type="button" onClick={() => remove(index)} className="text-red-600 hover:text-red-800 font-medium">Remove</button>
                    </div>
                  ))}
                </div>
                {errors.cashFlows && <p className="mt-2 text-sm text-red-600">{errors.cashFlows.message}</p>}
                <button 
                  type="button" 
                  onClick={() => append({ amount: 0 })} 
                  className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  + Add Cash Flow
                </button>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate IRR
              </button>
            </form>

            {irr !== null && (
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800">Calculation Result</h2>
                <p className="mt-2 text-lg text-gray-700">Internal Rate of Return (IRR): <span className="font-bold text-indigo-600">{irr.toFixed(2)}%</span></p>
                <p className="mt-2 text-sm text-gray-600">A higher IRR is generally better. If the IRR is greater than your required rate of return, the investment is considered attractive.</p>
              </div>
            )}
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800">Understanding the Internal Rate of Return (IRR)</h2>
            <p>The Internal Rate of Return (IRR) is a financial metric used to estimate the profitability of potential investments. It is the discount rate that makes the Net Present Value (NPV) of all cash flows from a particular project equal to zero.</p>
            
            <h3>How IRR Works</h3>
            <p>IRR calculations rely on the same formula as NPV does. The formula for NPV is:</p>
            <p><strong>NPV = Σ [Cash Flow / (1 + r)^t] - Initial Investment</strong></p>
            <p>Where 'r' is the discount rate and 't' is the number of time periods. To find the IRR, you set the NPV to zero and solve for the discount rate (r), which is the IRR.</p>

            <h3>Using IRR for Investment Decisions</h3>
            <p>IRR is a powerful tool for comparing the attractiveness of different projects. A project with a higher IRR is generally more desirable. When evaluating a single project, if the IRR is greater than the company's required rate of return or cost of capital, the project is usually considered a good investment.</p>
            <ul>
              <li><strong>Project Selection:</strong> When comparing mutually exclusive projects, the one with the higher IRR is typically chosen.</li>
              <li><strong>Profitability Benchmark:</strong> IRR provides a clear percentage return, making it easy to compare against other investment opportunities or your own benchmark returns.</li>
            </ul>

            <h3>Limitations of IRR</h3>
            <p>While useful, IRR has some limitations. It assumes that all future cash flows will be reinvested at the IRR itself, which may not be realistic. Additionally, for projects with unconventional cash flows (multiple changes in the sign of cash flows), there can be multiple IRRs, making the metric ambiguous.</p>
            <p>Therefore, it's often recommended to use IRR in conjunction with other metrics like Net Present Value (NPV) for a more complete picture of an investment's viability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRRCalculator;