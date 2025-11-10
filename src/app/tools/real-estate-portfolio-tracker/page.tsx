'use client';

import { Tab, TabList, TabGroup, TabPanels, TabPanel } from "@tremor/react";
import type { Metadata } from 'next';
import { useState } from 'react';
import PortfolioOverview from "./components/PortfolioOverview";
import AnalyticsTab from "./components/AnalyticsTab";
import PerformanceTab from "./components/PerformanceTab";
import CashFlowTab from "./components/CashFlowTab";
import Guide from "./components/Guide";
import { initialProperties } from './data';
import { Property } from "./components/types";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Portfolio Tracker Calculator',
    description: 'Track and manage your entire real estate portfolio. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function RealEstatePortfolioTracker() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [properties] = useState<Property[]>(initialProperties);

  const totalValue = properties.reduce((sum, p) => sum + p.value, 0);
  const totalEquity = properties.reduce((sum, p) => sum + p.equity, 0);
  const totalMonthlyRent = properties.reduce((sum, p) => sum + p.monthlyRent, 0);
  const totalMonthlyExpenses = properties.reduce((sum, p) => sum + p.monthlyExpenses, 0);
  const netMonthlyIncome = totalMonthlyRent - totalMonthlyExpenses;
  const totalAppreciation = properties.reduce((sum, p) => sum + (p.value - p.purchasePrice), 0);
  const totalPurchasePrice = properties.reduce((sum, p) => sum + p.purchasePrice, 0);
  const appreciationRate = totalPurchasePrice > 0 ? (totalAppreciation / totalPurchasePrice) * 100 : 0;

  const performanceData = properties.map(p => ({
    name: p.name,
    roi: p.purchasePrice > 0 ? ((p.value - p.purchasePrice + (p.monthlyRent - p.monthlyExpenses) * 12) / p.purchasePrice) * 100 : 0,
    appreciation: p.purchasePrice > 0 ? ((p.value - p.purchasePrice) / p.purchasePrice) * 100 : 0,
    cashFlow: p.monthlyRent - p.monthlyExpenses,
    equity: p.equity,
  }));

  const cashFlowData = properties.map(p => ({
    name: p.name,
    rent: p.monthlyRent,
    expenses: p.monthlyExpenses,
    netIncome: p.monthlyRent - p.monthlyExpenses,
  }));


  return (
    <main className="bg-gray-50 p-4 sm:p-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Real Estate Portfolio Tracker</h1>
      <p className="text-xl text-gray-600">Manage and analyze your property investments</p>

      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex} className="mt-6">
        <TabList>
          <Tab>Portfolio Overview</Tab>
          <Tab>Analytics</Tab>
          <Tab>Performance</Tab>
          <Tab>Cash Flow</Tab>
          <Tab>Guide</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PortfolioOverview 
              properties={properties}
              totalValue={totalValue}
              totalEquity={totalEquity}
              netMonthlyIncome={netMonthlyIncome}
              appreciationRate={appreciationRate}
              totalAppreciation={totalAppreciation}
              totalMonthlyRent={totalMonthlyRent}
              totalMonthlyExpenses={totalMonthlyExpenses}
            />
          </TabPanel>
          <TabPanel>
            <AnalyticsTab properties={properties} />
          </TabPanel>
          <TabPanel>
            <PerformanceTab performanceData={performanceData} />
          </TabPanel>
          <TabPanel>
            <CashFlowTab 
              cashFlowData={cashFlowData}
              totalMonthlyRent={totalMonthlyRent}
              totalMonthlyExpenses={totalMonthlyExpenses}
              netMonthlyIncome={netMonthlyIncome}
              totalInvestment={totalPurchasePrice}
            />
          </TabPanel>
          <TabPanel>
            <Guide />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}