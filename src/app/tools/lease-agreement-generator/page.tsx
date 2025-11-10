
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lease Agreement Generator',
    description: 'Generate comprehensive lease agreements for rental properties. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const leaseSchema = z.object({
  landlordName: z.string().min(1, 'Landlord name is required'),
  tenantName: z.string().min(1, 'Tenant name is required'),
  propertyAddress: z.string().min(1, 'Property address is required'),
  leaseStartDate: z.string().min(1, 'Lease start date is required'),
  leaseEndDate: z.string().min(1, 'Lease end date is required'),
  rentAmount: z.number().min(0, 'Rent amount must be a positive number'),
  securityDeposit: z.number().min(0, 'Security deposit must be a positive number'),
});

type LeaseFormInputs = z.infer<typeof leaseSchema>;

const LeaseAgreementGenerator = () => {
  const [generatedLease, setGeneratedLease] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaseFormInputs>({
    resolver: zodResolver(leaseSchema),
  });

  const onSubmit: SubmitHandler<LeaseFormInputs> = (data) => {
    const leaseText = `
      **Residential Lease Agreement**

      This Lease Agreement (the "Agreement") is made and entered into on ${new Date().toLocaleDateString()} (the "Effective Date") by and between:

      **Landlord:** ${data.landlordName}
      
      and

      **Tenant:** ${data.tenantName}

      **1. Property.** Landlord agrees to lease to Tenant the property located at:
      ${data.propertyAddress}

      **2. Term.** The term of this lease shall be from ${data.leaseStartDate} to ${data.leaseEndDate}.

      **3. Rent.** Tenant shall pay Landlord a monthly rent of $${data.rentAmount.toFixed(2)}.

      **4. Security Deposit.** Tenant shall pay Landlord a security deposit of $${data.securityDeposit.toFixed(2)}.

      IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

      ____________________________
      ${data.landlordName} (Landlord)

      ____________________________
      ${data.tenantName} (Tenant)
    `;
    setGeneratedLease(leaseText);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Lease Agreement Generator</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="landlordName" className="block text-sm font-medium text-gray-700">Landlord Name</label>
          <input id="landlordName" {...register('landlordName')} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.landlordName && <p className="mt-2 text-sm text-red-600">{errors.landlordName.message}</p>}
        </div>
        <div>
          <label htmlFor="tenantName" className="block text-sm font-medium text-gray-700">Tenant Name</label>
          <input id="tenantName" {...register('tenantName')} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.tenantName && <p className="mt-2 text-sm text-red-600">{errors.tenantName.message}</p>}
        </div>
        <div>
          <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">Property Address</label>
          <input id="propertyAddress" {...register('propertyAddress')} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.propertyAddress && <p className="mt-2 text-sm text-red-600">{errors.propertyAddress.message}</p>}
        </div>
        <div>
          <label htmlFor="leaseStartDate" className="block text-sm font-medium text-gray-700">Lease Start Date</label>
          <input type="date" id="leaseStartDate" {...register('leaseStartDate')} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.leaseStartDate && <p className="mt-2 text-sm text-red-600">{errors.leaseStartDate.message}</p>}
        </div>
        <div>
          <label htmlFor="leaseEndDate" className="block text-sm font-medium text-gray-700">Lease End Date</label>
          <input type="date" id="leaseEndDate" {...register('leaseEndDate')} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.leaseEndDate && <p className="mt-2 text-sm text-red-600">{errors.leaseEndDate.message}</p>}
        </div>
        <div>
          <label htmlFor="rentAmount" className="block text-sm font-medium text-gray-700">Rent Amount ($)</label>
          <input type="number" id="rentAmount" {...register('rentAmount', { valueAsNumber: true })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.rentAmount && <p className="mt-2 text-sm text-red-600">{errors.rentAmount.message}</p>}
        </div>
        <div>
          <label htmlFor="securityDeposit" className="block text-sm font-medium text-gray-700">Security Deposit ($)</label>
          <input type="number" id="securityDeposit" {...register('securityDeposit', { valueAsNumber: true })} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.securityDeposit && <p className="mt-2 text-sm text-red-600">{errors.securityDeposit.message}</p>}
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Generate Lease</button>
      </form>
      {generatedLease && (
        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Generated Lease Agreement</h2>
          <pre className="whitespace-pre-wrap text-sm">{generatedLease}</pre>
        </div>
      )}
      <div className="mt-8 prose max-w-none">
        <h2>Understanding Lease Agreements</h2>
        <p>A lease agreement is a legally binding contract between a landlord and a tenant that outlines the terms and conditions of a rental property. It is a crucial document that protects both parties and ensures a clear understanding of their rights and responsibilities.</p>
        <h3>Key Components of a Lease Agreement</h3>
        <ul>
          <li><strong>Parties:</strong> The names of the landlord and tenant.</li>
          <li><strong>Property:</strong> The address of the rental property.</li>
          <li><strong>Term:</strong> The duration of the lease, including the start and end dates.</li>
          <li><strong>Rent:</strong> The amount of rent due, the due date, and how it should be paid.</li>
          <li><strong>Security Deposit:</strong> The amount of the security deposit and the conditions for its return.</li>
          <li><strong>Rules and Regulations:</strong> Any specific rules regarding pets, smoking, noise, etc.</li>
        </ul>
        <h3>Why Use a Lease Agreement Generator?</h3>
        <p>A lease agreement generator simplifies the process of creating a comprehensive and legally sound lease. It ensures that all essential clauses are included and helps you customize the agreement to your specific needs. This can save you time, reduce the risk of errors, and provide peace of mind for both you and your tenant.</p>
      </div>
    </div>
  );
};

export default LeaseAgreementGenerator;