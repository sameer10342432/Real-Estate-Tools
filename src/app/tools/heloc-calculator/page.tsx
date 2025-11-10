
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HELOC Calculator',
    description: 'Estimate your Home Equity Line of Credit. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Zod schema for validation
const HelocSchema = z.object({
  propertyValue: z.number().min(1, 'Property value is required'),
  mortgageBalance: z.number().min(0, 'Mortgage balance must be a positive number'),
  ltvRatio: z.number().min(1).max(100, 'LTV ratio must be between 1 and 100'),
});

type HelocFormInputs = z.infer<typeof HelocSchema>;

interface HelocResult {
  maxHeloc: number;
  availableCredit: number;
}

const HELOCCalculator: React.FC = () => {
  const [result, setResult] = useState<HelocResult | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelocFormInputs>({
    resolver: zodResolver(HelocSchema),
    defaultValues: {
      ltvRatio: 85,
    },
  });

  const onSubmit: SubmitHandler<HelocFormInputs> = (data) => {
    const { propertyValue, mortgageBalance, ltvRatio } = data;
    const maxHeloc = propertyValue * (ltvRatio / 100);
    const availableCredit = maxHeloc - mortgageBalance;
    setResult({ maxHeloc, availableCredit });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">HELOC Calculator</h1>
      <p className="mb-6 text-gray-600 text-center">Estimate your Home Equity Line of Credit.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">Property Value ($)</label>
          <input
            type="number"
            id="propertyValue"
            {...register('propertyValue', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.propertyValue && <p className="text-red-500 text-xs mt-1">{errors.propertyValue.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mortgageBalance" className="block text-sm font-medium text-gray-700">Current Mortgage Balance ($)</label>
          <input
            type="number"
            id="mortgageBalance"
            {...register('mortgageBalance', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.mortgageBalance && <p className="text-red-500 text-xs mt-1">{errors.mortgageBalance.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ltvRatio" className="block text-sm font-medium text-gray-700">Loan-to-Value (LTV) Ratio (%)</label>
          <input
            type="number"
            id="ltvRatio"
            {...register('ltvRatio', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.ltvRatio && <p className="text-red-500 text-xs mt-1">{errors.ltvRatio.message}</p>}
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Calculate HELOC
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Calculation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-lg text-gray-600">Maximum HELOC Amount</p>
              <p className="text-3xl font-bold text-indigo-600">${result.maxHeloc.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">Available Credit</p>
              <p className="text-3xl font-bold text-green-600">${result.availableCredit.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 prose max-w-none">
        <h2>Understanding a Home Equity Line of Credit (HELOC)</h2>
        <p>A Home Equity Line of Credit (HELOC) is a revolving line of credit, much like a credit card, that is secured by your home. It allows you to borrow against your home's equity, which is the difference between your home's current market value and the amount you still owe on your mortgage.</p>
        
        <h3>How is a HELOC Calculated?</h3>
        <p>Lenders typically use a loan-to-value (LTV) ratio to determine the maximum amount you can borrow. The LTV ratio is the percentage of your home's appraised value that a lender is willing to lend. Most lenders allow you to borrow up to 85% of your home's value, minus your outstanding mortgage balance.</p>
        <p>The formula is: <strong>(Home Value x LTV Ratio) - Mortgage Balance = Available HELOC Credit</strong></p>

        <h3>Pros and Cons of a HELOC</h3>
        <h4>Pros:</h4>
        <ul>
          <li><strong>Flexibility:</strong> Borrow what you need, when you need it, during the draw period.</li>
          <li><strong>Lower Interest Rates:</strong> HELOCs often have lower interest rates compared to personal loans or credit cards because they are secured by your home.</li>
          <li><strong>Interest-Only Payments:</strong> During the draw period, you may only be required to make interest-only payments.</li>
          <li><strong>Potential Tax Deductions:</strong> The interest paid on a HELOC may be tax-deductible if the funds are used to buy, build, or substantially improve your home.</li>
        </ul>
        <h4>Cons:</h4>
        <ul>
          <li><strong>Variable Interest Rates:</strong> Most HELOCs have variable interest rates, meaning your payments can increase if interest rates rise.</li>
          <li><strong>Risk of Foreclosure:</strong> Since your home is used as collateral, you risk foreclosure if you default on your payments.</li>
          <li><strong>Fees:</strong> HELOCs can come with various fees, including application fees, annual fees, and closing costs.</li>
          <li><strong>Temptation to Overspend:</strong> The easy access to funds can lead to overspending on non-essential items.</li>
        </ul>

        <h3>When to Consider a HELOC</h3>
        <p>A HELOC can be a smart financial tool for various purposes, such as:</p>
        <ul>
          <li><strong>Home Renovations:</strong> Funding home improvement projects that can increase your property value.</li>
          <li><strong>Debt Consolidation:</strong> Consolidating high-interest debt from credit cards or personal loans into a single, lower-interest payment.</li>
          <li><strong>Education Expenses:</strong> Paying for college tuition or other educational costs.</li>
          <li><strong>Major Purchases:</strong> Financing a significant purchase, like a car or a wedding.</li>
          <li><strong>Emergency Fund:</strong> Having a line of credit available for unexpected expenses.</li>
        </ul>
        <p>Before taking out a HELOC, it's crucial to assess your financial situation, understand the terms of the loan, and have a clear plan for how you will use and repay the funds. Our HELOC calculator can help you get a better understanding of how much you might be able to borrow.</p>
      </div>
    </div>
  );
};

export default HELOCCalculator;