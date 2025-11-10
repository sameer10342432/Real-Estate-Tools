'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Metadata } from 'next';

interface RentalYieldInputs {
  propertyValue: string;
  weeklyRent: string;
  monthlyRent: string;
  rentType: 'weekly' | 'monthly';
  purchaseCosts: string;
  annualExpenses: string;
  managementFees: string;
  councilRates: string;
  insurance: string;
  maintenance: string;
  maintenanceType: 'fixed' | 'percentage';
  maintenancePercentage: string;
  vacancy: string;
  downPayment: string;
  loanAmount: string;
  interestRate: string;
}

interface RentalYieldResults {
  grossRentalYield: number;
  netRentalYield: number;
  cashOnCashReturn: number;
  capRate: number;
  annualRentalIncome: number;
  totalAnnualExpenses: number;
  netAnnualIncome: number;
  monthlyNetIncome: number;
  weeklyNetIncome: number;
  totalCashInvested: number;
  annualMortgagePayments: number;
  cashFlow: number;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Yield Calculator',
    description: 'Calculate gross and net rental yields. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function RentalYieldCalculatorPage() {
  const [inputs, setInputs] = useState<RentalYieldInputs>({
    propertyValue: '',
    weeklyRent: '',
    monthlyRent: '',
    rentType: 'weekly',
    purchaseCosts: '',
    annualExpenses: '',
    managementFees: '',
    councilRates: '',
    insurance: '',
    maintenance: '',
    maintenanceType: 'fixed',
    maintenancePercentage: '0.5',
    vacancy: '4',
    downPayment: '',
    loanAmount: '',
    interestRate: ''
  });

  const [results, setResults] = useState<RentalYieldResults | null>(null);

  const handleInputChange = (field: keyof RentalYieldInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateRentalYield = useCallback(() => {
    const propertyValue = parseFloat(inputs.propertyValue) || 0;
    const purchaseCosts = parseFloat(inputs.purchaseCosts) || 0;
    const downPayment = parseFloat(inputs.downPayment) || 0;
    const loanAmount = parseFloat(inputs.loanAmount) || 0;
    const interestRate = parseFloat(inputs.interestRate) || 0;
    const vacancy = parseFloat(inputs.vacancy) || 0;

    if (propertyValue === 0) {
      setResults(null);
      return;
    }

    // Calculate annual rental income
    let annualRentalIncome = 0;
    if (inputs.rentType === 'weekly') {
      const weeklyRent = parseFloat(inputs.weeklyRent) || 0;
      annualRentalIncome = weeklyRent * 52;
    } else {
      const monthlyRent = parseFloat(inputs.monthlyRent) || 0;
      annualRentalIncome = monthlyRent * 12;
    }

    // Apply vacancy rate
    annualRentalIncome = annualRentalIncome * (1 - vacancy / 100);

    // Calculate total annual expenses
    const managementFees = parseFloat(inputs.managementFees) || 0;
    const councilRates = parseFloat(inputs.councilRates) || 0;
    const insurance = parseFloat(inputs.insurance) || 0;
    const additionalExpenses = parseFloat(inputs.annualExpenses) || 0;

    let maintenanceCost;
    if (inputs.maintenanceType === 'fixed') {
      maintenanceCost = parseFloat(inputs.maintenance) || 0;
    } else {
      const maintenancePercentage = parseFloat(inputs.maintenancePercentage) || 0;
      maintenanceCost = propertyValue * (maintenancePercentage / 100);
    }

    const totalAnnualExpenses = managementFees + councilRates + insurance + maintenanceCost + additionalExpenses;

    // Calculate net annual income
    const netAnnualIncome = annualRentalIncome - totalAnnualExpenses;

    // Calculate yields
    const grossRentalYield = (annualRentalIncome / propertyValue) * 100;
    const netRentalYield = (netAnnualIncome / propertyValue) * 100;
    const capRate = netRentalYield; // Cap rate is essentially the same as net yield

    // Calculate cash-on-cash return
    const totalCashInvested = downPayment + purchaseCosts;
    const annualMortgagePayments = loanAmount > 0 ? (loanAmount * interestRate / 100) : 0;
    const cashFlow = netAnnualIncome - annualMortgagePayments;
    const cashOnCashReturn = totalCashInvested > 0 ? (cashFlow / totalCashInvested) * 100 : 0;

    // Calculate monthly and weekly figures
    const monthlyNetIncome = netAnnualIncome / 12;
    const weeklyNetIncome = netAnnualIncome / 52;

    setResults({
      grossRentalYield,
      netRentalYield,
      cashOnCashReturn,
      capRate,
      annualRentalIncome,
      totalAnnualExpenses,
      netAnnualIncome,
      monthlyNetIncome,
      weeklyNetIncome,
      totalCashInvested,
      annualMortgagePayments,
      cashFlow
    });
  }, [inputs]);

  useEffect(() => {
    calculateRentalYield();
  }, [inputs, calculateRentalYield]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rental Yield Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Calculate gross yield, net yield, and cash-on-cash returns for your investment property
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Investment Details</h2>
              
              <div className="space-y-6">
                {/* Property Value */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Value (AUD)
                  </label>
                  <input
                    type="number"
                    value={inputs.propertyValue}
                    onChange={(e) => handleInputChange('propertyValue', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    placeholder="750000"
                  />
                </div>

                {/* Rental Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Income
                  </label>
                  <div className="flex space-x-2 mb-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('rentType', 'weekly')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        inputs.rentType === 'weekly'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Weekly
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('rentType', 'monthly')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        inputs.rentType === 'monthly'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                  {inputs.rentType === 'weekly' ? (
                    <input
                      type="number"
                      value={inputs.weeklyRent}
                      onChange={(e) => handleInputChange('weeklyRent', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="650"
                    />
                  ) : (
                    <input
                      type="number"
                      value={inputs.monthlyRent}
                      onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="2800"
                    />
                  )}
                </div>

                {/* Purchase Costs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Costs (Stamp Duty, Legal, etc.)
                  </label>
                  <input
                    type="number"
                    value={inputs.purchaseCosts}
                    onChange={(e) => handleInputChange('purchaseCosts', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="35000"
                  />
                </div>

                {/* Financing Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment
                    </label>
                    <input
                      type="number"
                      value={inputs.downPayment}
                      onChange={(e) => handleInputChange('downPayment', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="150000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount
                    </label>
                    <input
                      type="number"
                      value={inputs.loanAmount}
                      onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="600000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="6.5"
                  />
                </div>

                {/* Annual Expenses */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Annual Expenses</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Management Fees
                      </label>
                      <input
                        type="number"
                        value={inputs.managementFees}
                        onChange={(e) => handleInputChange('managementFees', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="2500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Council Rates
                      </label>
                      <input
                        type="number"
                        value={inputs.councilRates}
                        onChange={(e) => handleInputChange('councilRates', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="2000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Insurance
                      </label>
                      <input
                        type="number"
                        value={inputs.insurance}
                        onChange={(e) => handleInputChange('insurance', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="1200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maintenance & Repairs
                      </label>
                      <div className="flex space-x-2 mb-2">
                        <button
                          type="button"
                          onClick={() => handleInputChange('maintenanceType', 'fixed')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            inputs.maintenanceType === 'fixed'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Fixed ($)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange('maintenanceType', 'percentage')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            inputs.maintenanceType === 'percentage'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Percentage (%)
                        </button>
                      </div>
                      {inputs.maintenanceType === 'fixed' ? (
                        <input
                          type="number"
                          value={inputs.maintenance}
                          onChange={(e) => handleInputChange('maintenance', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="3000"
                        />
                      ) : (
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.maintenancePercentage}
                          onChange={(e) => handleInputChange('maintenancePercentage', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="0.5"
                        />
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vacancy Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.vacancy}
                      onChange={(e) => handleInputChange('vacancy', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="4"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Other Annual Expenses
                    </label>
                    <input
                      type="number"
                      value={inputs.annualExpenses}
                      onChange={(e) => handleInputChange('annualExpenses', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rental Yield Analysis</h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg text-center">
                      <h3 className="text-sm font-semibold mb-1">Gross Yield</h3>
                      <p className="text-2xl font-bold">{formatPercentage(results.grossRentalYield)}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg text-center">
                      <h3 className="text-sm font-semibold mb-1">Net Yield</h3>
                      <p className="text-2xl font-bold">{formatPercentage(results.netRentalYield)}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center">
                      <h3 className="text-sm font-semibold mb-1">Cash-on-Cash</h3>
                      <p className="text-2xl font-bold">{formatPercentage(results.cashOnCashReturn)}</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg text-center">
                      <h3 className="text-sm font-semibold mb-1">Cap Rate</h3>
                      <p className="text-2xl font-bold">{formatPercentage(results.capRate)}</p>
                    </div>
                  </div>

                  {/* Income Analysis */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-900 mb-4">Income Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Rental Income:</span>
                        <span className="font-semibold text-green-700">
                          {formatCurrency(results.annualRentalIncome)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Net Income:</span>
                        <span className="font-semibold text-green-700">
                          {formatCurrency(results.monthlyNetIncome)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weekly Net Income:</span>
                        <span className="font-semibold text-green-700">
                          {formatCurrency(results.weeklyNetIncome)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expense Analysis */}
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-900 mb-4">Expense Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Annual Expenses:</span>
                        <span className="font-semibold text-red-700">
                          {formatCurrency(results.totalAnnualExpenses)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Mortgage Payments:</span>
                        <span className="font-semibold text-red-700">
                          {formatCurrency(results.annualMortgagePayments)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expense Ratio:</span>
                        <span className="font-semibold text-red-700">
                          {formatPercentage((results.totalAnnualExpenses / results.annualRentalIncome) * 100)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cash Flow Analysis */}
                  <div className={`p-4 rounded-lg ${results.cashFlow >= 0 ? 'bg-blue-50' : 'bg-orange-50'}`}>
                    <h4 className={`text-lg font-semibold mb-4 ${results.cashFlow >= 0 ? 'text-blue-900' : 'text-orange-900'}`}>
                      Cash Flow Analysis
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Cash Invested:</span>
                        <span className="font-semibold">
                          {formatCurrency(results.totalCashInvested)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Cash Flow:</span>
                        <span className={`font-semibold ${results.cashFlow >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>
                          {formatCurrency(results.cashFlow)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Cash Flow:</span>
                        <span className={`font-semibold ${results.cashFlow >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>
                          {formatCurrency(results.cashFlow / 12)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Indicators */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Indicators</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${results.grossRentalYield >= 6 ? 'text-green-600' : results.grossRentalYield >= 4 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {results.grossRentalYield >= 6 ? '✓' : results.grossRentalYield >= 4 ? '⚠' : '✗'}
                        </div>
                        <p className="text-gray-600">Gross Yield</p>
                        <p className="text-xs text-gray-500">Good: 6%+</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${results.netRentalYield >= 4 ? 'text-green-600' : results.netRentalYield >= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {results.netRentalYield >= 4 ? '✓' : results.netRentalYield >= 2 ? '⚠' : '✗'}
                        </div>
                        <p className="text-gray-600">Net Yield</p>
                        <p className="text-xs text-gray-500">Good: 4%+</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${results.cashOnCashReturn >= 8 ? 'text-green-600' : results.cashOnCashReturn >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {results.cashOnCashReturn >= 8 ? '✓' : results.cashOnCashReturn >= 5 ? '⚠' : '✗'}
                        </div>
                        <p className="text-gray-600">Cash-on-Cash</p>
                        <p className="text-xs text-gray-500">Good: 8%+</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${results.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {results.cashFlow >= 0 ? '✓' : '✗'}
                        </div>
                        <p className="text-gray-600">Cash Flow</p>
                        <p className="text-xs text-gray-500">Positive</p>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> These calculations are estimates based on the information provided. 
                      Actual returns may vary due to market conditions, unexpected expenses, and other factors.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Enter property details to calculate rental yield</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Article */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Complete Guide to Rental Yield Analysis
            </h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Key Takeaways</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Rental yield is the cornerstone metric for evaluating investment property performance</li>
                <li>• Gross yield provides a quick comparison, while net yield shows true profitability</li>
                <li>• Cash-on-cash return reveals the efficiency of your actual cash investment</li>
                <li>• Yield benchmarks vary significantly by location, property type, and market conditions</li>
                <li>• Successful investors balance yield with capital growth potential and risk factors</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Rental Yield: The Foundation of Property Investment
            </h3>
            
            <p className="text-gray-700 mb-6">
                Rental yield is the fundamental metric that measures the annual return on your property 
                investment, expressed as a percentage of the property&apos;s value. It serves as the primary 
                tool for comparing investment opportunities, assessing property performance, and making 
                informed decisions about buying, holding, or selling investment properties.
              </p>

            <p className="text-gray-700 mb-6">
              Unlike other investment metrics that may be complex or industry-specific, rental yield 
              provides a standardized, easily understood measure that allows investors to compare 
              properties across different price points, locations, and market segments. This makes 
              it an invaluable tool for both novice and experienced property investors.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Why Rental Yield Is Critical</h4>
            <p className="text-gray-700 mb-4">
              Rental yield serves multiple crucial functions in property investment:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Performance Measurement:</strong> Quantifies how well your property generates income</li>
              <li><strong>Comparative Analysis:</strong> Enables comparison between different properties and investment options</li>
              <li><strong>Market Assessment:</strong> Helps identify undervalued or overpriced markets</li>
              <li><strong>Portfolio Management:</strong> Assists in optimizing your property portfolio mix</li>
              <li><strong>Financial Planning:</strong> Supports cash flow projections and investment strategy</li>
              <li><strong>Risk Evaluation:</strong> Higher yields often indicate higher risk profiles</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Rental Yield: A Comprehensive Breakdown
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Gross Rental Yield</h4>
            <p className="text-gray-700 mb-4">
                Gross rental yield is the simplest calculation, showing the annual rental income 
                as a percentage of the property&apos;s purchase price:
              </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-900 font-semibold text-center">
                Gross Rental Yield = (Annual Rental Income ÷ Property Value) × 100
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              <strong>Example:</strong> A property worth $500,000 that generates $26,000 in annual 
              rent has a gross rental yield of 5.2% ($26,000 ÷ $500,000 × 100).
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Net Rental Yield</h4>
            <p className="text-gray-700 mb-4">
              Net rental yield provides a more accurate picture by deducting all property-related 
              expenses from the rental income:
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-900 font-semibold text-center">
                Net Rental Yield = ((Annual Rental Income - Annual Expenses) ÷ Property Value) × 100
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              Net yield accounts for expenses such as property management fees, council rates, 
              insurance, maintenance, repairs, and vacancy periods. This gives investors a 
              realistic view of their actual returns.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Cash-on-Cash Return</h4>
            <p className="text-gray-700 mb-4">
              Cash-on-cash return measures the annual return on the actual cash invested, 
              particularly relevant for leveraged investments:
            </p>

            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <p className="text-purple-900 font-semibold text-center">
                Cash-on-Cash Return = (Annual Cash Flow ÷ Total Cash Invested) × 100
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              This metric is crucial for investors using mortgages, as it shows the return 
              on their down payment and purchase costs rather than the total property value.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Factors Affecting Rental Yield
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Location Factors</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• <strong>Proximity to amenities:</strong> Schools, transport, shopping centers</li>
              <li>• <strong>Employment hubs:</strong> Areas with strong job markets</li>
              <li>• <strong>Infrastructure development:</strong> New transport links or facilities</li>
              <li>• <strong>Population growth:</strong> Areas experiencing demographic expansion</li>
              <li>• <strong>Rental demand:</strong> High tenant demand relative to supply</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Property Characteristics</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Property type:</strong> Units often yield higher than houses</li>
              <li>• <strong>Size and layout:</strong> Functional spaces that appeal to tenants</li>
              <li>• <strong>Condition:</strong> Well-maintained properties command higher rents</li>
              <li>• <strong>Features:</strong> Parking, outdoor space, modern amenities</li>
              <li>• <strong>Age:</strong> Newer properties may have lower maintenance costs</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Rental Yield Benchmarks by Location
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Gross Yield</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Market Characteristics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Sydney Inner</td>
                    <td className="border border-gray-300 px-4 py-2">3.0% - 4.5%</td>
                    <td className="border border-gray-300 px-4 py-2">High capital growth, lower yields</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Melbourne Inner</td>
                    <td className="border border-gray-300 px-4 py-2">3.5% - 5.0%</td>
                    <td className="border border-gray-300 px-4 py-2">Strong rental demand, moderate yields</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Brisbane</td>
                    <td className="border border-gray-300 px-4 py-2">4.0% - 6.0%</td>
                    <td className="border border-gray-300 px-4 py-2">Balanced growth and yield market</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Perth</td>
                    <td className="border border-gray-300 px-4 py-2">4.5% - 6.5%</td>
                    <td className="border border-gray-300 px-4 py-2">Resource-driven, cyclical market</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Adelaide</td>
                    <td className="border border-gray-300 px-4 py-2">4.0% - 6.0%</td>
                    <td className="border border-gray-300 px-4 py-2">Steady market, good yields</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Regional Areas</td>
                    <td className="border border-gray-300 px-4 py-2">5.0% - 8.0%+</td>
                    <td className="border border-gray-300 px-4 py-2">Higher yields, variable growth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Calculating Property Expenses
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Essential Expense Categories</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-900 mb-2">Ongoing Expenses</h5>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Property management fees (6-10% of rent)</li>
                  <li>• Council rates ($1,000-$4,000 annually)</li>
                  <li>• Insurance ($800-$2,000 annually)</li>
                  <li>• Maintenance and repairs (1-3% of property value)</li>
                  <li>• Strata fees (for units/townhouses)</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-900 mb-2">Periodic Expenses</h5>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Vacancy periods (2-6 weeks annually)</li>
                  <li>• Tenant acquisition costs</li>
                  <li>• Major repairs and renovations</li>
                  <li>• Professional services (accounting, legal)</li>
                  <li>• Depreciation and capital improvements</li>
                </ul>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Expense Estimation Guidelines</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Total expenses:</strong> Typically 20-40% of gross rental income</li>
              <li>• <strong>Maintenance:</strong> Budget 1-3% of property value annually</li>
              <li>• <strong>Vacancy rate:</strong> Allow for 2-8% depending on location and property type</li>
              <li>• <strong>Management fees:</strong> 6-10% of rental income if using an agent</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Strategies to Improve Rental Yield
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Increasing Rental Income</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• <strong>Property improvements:</strong> Modern kitchens, bathrooms, flooring</li>
              <li>• <strong>Additional features:</strong> Air conditioning, dishwashers, storage</li>
              <li>• <strong>Outdoor spaces:</strong> Decks, gardens, entertaining areas</li>
              <li>• <strong>Parking solutions:</strong> Secure parking, additional spaces</li>
              <li>• <strong>Regular rent reviews:</strong> Keep rents at market levels</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Reducing Expenses</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Preventive maintenance:</strong> Regular upkeep to avoid major repairs</li>
              <li>• <strong>Energy efficiency:</strong> LED lighting, insulation, efficient appliances</li>
              <li>• <strong>Quality tenants:</strong> Thorough screening to reduce turnover</li>
              <li>• <strong>Self-management:</strong> Managing the property yourself (if feasible)</li>
              <li>• <strong>Bulk purchasing:</strong> Insurance, maintenance contracts</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Rental Yield vs Capital Growth
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">The Trade-off</h4>
            <p className="text-gray-700 mb-4">
              There&apos;s often an inverse relationship between rental yield and capital growth potential:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">High Yield Properties</h5>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Regional and outer suburban areas</li>
                  <li>• Older properties with lower purchase prices</li>
                  <li>• Areas with strong rental demand</li>
                  <li>• Properties requiring some improvement</li>
                  <li>• <strong>Focus:</strong> Immediate cash flow</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">High Growth Properties</h5>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Inner city and premium suburbs</li>
                  <li>• New or recently renovated properties</li>
                  <li>• Areas with infrastructure development</li>
                  <li>• Properties with unique features</li>
                  <li>• <strong>Focus:</strong> Long-term wealth building</li>
                </ul>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Balanced Investment Strategy</h4>
            <p className="text-gray-700 mb-6">
              Many successful investors aim for a balanced portfolio combining both yield and 
              growth properties. This approach provides immediate cash flow while building 
              long-term wealth through capital appreciation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tax Implications of Rental Yield
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Rental Income Taxation</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Rental income is taxed as ordinary income at your marginal tax rate</li>
              <li>• All legitimate property expenses are tax-deductible</li>
              <li>• Depreciation can be claimed on building and fixtures</li>
              <li>• Negative gearing allows losses to offset other income</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Deductible Expenses</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Interest on investment property loans</li>
              <li>• Property management and maintenance costs</li>
              <li>• Insurance premiums and council rates</li>
              <li>• Depreciation on building and fixtures</li>
              <li>• Professional services (accounting, legal)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Using Technology to Optimize Yields
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Property Management Technology</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• <strong>Online platforms:</strong> Streamlined rent collection and communication</li>
              <li>• <strong>Maintenance apps:</strong> Efficient repair coordination and tracking</li>
              <li>• <strong>Market analysis tools:</strong> Regular rent benchmarking</li>
              <li>• <strong>Tenant screening:</strong> Automated background checks and references</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Home Features</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Smart thermostats for energy efficiency</li>
              <li>• Security systems for tenant peace of mind</li>
              <li>• Smart locks for convenient access management</li>
              <li>• Energy monitoring to optimize utility costs</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Rental Yield Mistakes
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Calculation Errors</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Using gross yield instead of net yield for decision-making</li>
              <li>• Underestimating ongoing expenses and maintenance costs</li>
              <li>• Ignoring vacancy periods in calculations</li>
              <li>• Not accounting for capital expenditure requirements</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Investment Mistakes</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Focusing solely on yield without considering capital growth</li>
              <li>• Buying in areas with declining rental demand</li>
              <li>• Overestimating rental income potential</li>
              <li>• Neglecting due diligence on local market conditions</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Market Analysis and Research
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Essential Research Areas</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• <strong>Rental market trends:</strong> Historical and projected rental growth</li>
              <li>• <strong>Vacancy rates:</strong> Current and historical vacancy data</li>
              <li>• <strong>Demographics:</strong> Population growth and tenant profiles</li>
              <li>• <strong>Economic indicators:</strong> Employment, infrastructure, development</li>
              <li>• <strong>Comparable properties:</strong> Similar properties and their yields</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Information Sources</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Real estate websites and rental platforms</li>
              <li>• Government statistics and census data</li>
              <li>• Local real estate agents and property managers</li>
              <li>• Property research companies and reports</li>
              <li>• Local council development plans</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Investment Reminder</h4>
              <p className="text-orange-800">
                Rental yield is just one metric in property investment analysis. Consider it 
                alongside capital growth potential, location fundamentals, market conditions, 
                and your personal investment goals. Always conduct thorough due diligence 
                and consider seeking professional advice for significant investment decisions.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h3>

            <p className="text-gray-700 mb-4">
              Rental yield is a powerful tool for evaluating investment properties, but it&apos;s 
              most effective when used as part of a comprehensive analysis. Understanding 
              the different types of yield calculations, local market conditions, and the 
              factors that influence returns will help you make more informed investment decisions.
            </p>

            <p className="text-gray-700">
              Our rental yield calculator helps you analyze potential investments by providing 
              detailed calculations of gross yield, net yield, cash-on-cash returns, and cash 
              flow projections. Use these insights to compare properties, optimize your 
              investment strategy, and build a successful property portfolio.
            </p>
          </article>
        </div>
      </section>


    </div>
  );
}