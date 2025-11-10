
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property ROI Calculator',
    description: 'Calculate the ROI for your property investment. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for validation
const ROISchema = z.object({
  purchasePrice: z.number().min(1, 'Purchase price is required'),
  closingCosts: z.number().min(0, 'Closing costs must be a positive number'),
  renovationCosts: z.number().min(0, 'Renovation costs must be a positive number'),
  salePrice: z.number().min(1, 'Sale price is required'),
  holdingCosts: z.number().min(0, 'Holding costs must be a positive number'),
});

type ROIFormInputs = z.infer<typeof ROISchema>;

interface ROIResult {
  totalInvestment: number;
  netProfit: number;
  roi: number;
}

const PropertyROICalculator: React.FC = () => {
  const [result, setResult] = useState<ROIResult | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ROIFormInputs>({
    resolver: zodResolver(ROISchema),
  });

  const onSubmit: SubmitHandler<ROIFormInputs> = (data) => {
    const { purchasePrice, closingCosts, renovationCosts, salePrice, holdingCosts } = data;
    const totalInvestment = purchasePrice + closingCosts + renovationCosts + holdingCosts;
    const netProfit = salePrice - totalInvestment;
    const roi = (netProfit / totalInvestment) * 100;
    setResult({ totalInvestment, netProfit, roi });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Property ROI Calculator</h1>
      <p className="mb-6 text-gray-600 text-center">Calculate the Return on Investment for your property.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">Purchase Price ($)</label>
          <input
            type="number"
            id="purchasePrice"
            {...register('purchasePrice', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.purchasePrice && <p className="text-red-500 text-xs mt-1">{errors.purchasePrice.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="closingCosts" className="block text-sm font-medium text-gray-700">Closing Costs ($)</label>
          <input
            type="number"
            id="closingCosts"
            {...register('closingCosts', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.closingCosts && <p className="text-red-500 text-xs mt-1">{errors.closingCosts.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="renovationCosts" className="block text-sm font-medium text-gray-700">Renovation Costs ($)</label>
          <input
            type="number"
            id="renovationCosts"
            {...register('renovationCosts', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.renovationCosts && <p className="text-red-500 text-xs mt-1">{errors.renovationCosts.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Sale Price ($)</label>
          <input
            type="number"
            id="salePrice"
            {...register('salePrice', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.salePrice && <p className="text-red-500 text-xs mt-1">{errors.salePrice.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="holdingCosts" className="block text-sm font-medium text-gray-700">Holding Costs ($)</label>
          <input
            type="number"
            id="holdingCosts"
            {...register('holdingCosts', { valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.holdingCosts && <p className="text-red-500 text-xs mt-1">{errors.holdingCosts.message}</p>}
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Calculate ROI
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Calculation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg text-gray-600">Total Investment</p>
              <p className="text-3xl font-bold text-indigo-600">${result.totalInvestment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">Net Profit</p>
              <p className="text-3xl font-bold text-green-600">${result.netProfit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">Return on Investment (ROI)</p>
              <p className="text-3xl font-bold text-blue-600">{result.roi.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 prose max-w-none">
        <h2>Understanding Property ROI</h2>
        <p>Return on Investment (ROI) is a key metric used to evaluate the profitability of an investment. In real estate, it measures the return on a property relative to the cost of the investment. A higher ROI indicates a more profitable investment.</p>
        
        <h3>How is Property ROI Calculated?</h3>
        <p>The formula for property ROI is: <strong>(Net Profit / Total Investment) x 100%</strong></p>
        <p>Where:</p>
        <ul>
          <li><strong>Total Investment:</strong> The sum of the purchase price, closing costs, renovation costs, and any other expenses associated with acquiring and preparing the property.</li>
          <li><strong>Net Profit:</strong> The sale price of the property minus the total investment.</li>
        </ul>

        <h3>Factors to Consider When Calculating ROI</h3>
        <ul>
          <li><strong>Purchase Price:</strong> The amount you paid for the property.</li>
          <li><strong>Closing Costs:</strong> Fees associated with the purchase, such as legal fees, title insurance, and appraisal fees.</li>
          <li><strong>Renovation Costs:</strong> The cost of any improvements or repairs made to the property.</li>
          <li><strong>Holding Costs:</strong> Expenses incurred while you own the property, such as property taxes, insurance, and utilities.</li>
          <li><strong>Sale Price:</strong> The price at which you sell the property.</li>
        </ul>

        <h3>Why is ROI Important?</h3>
        <p>Calculating ROI helps you:</p>
        <ul>
          <li><strong>Evaluate Profitability:</strong> Determine whether a potential investment is likely to be profitable.</li>
          <li><strong>Compare Investments:</strong> Compare the potential returns of different properties to make an informed decision.</li>
          <li><strong>Measure Performance:</strong> Track the performance of your investments over time.</li>
        </ul>
        <p>Our Property ROI Calculator makes it easy to estimate the potential return on your real estate investments. By inputting the relevant figures, you can get a clear picture of the financial viability of a property.</p>
      </div>
    </div>
  );
};

export default PropertyROICalculator;