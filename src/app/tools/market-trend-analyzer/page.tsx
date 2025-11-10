'use client';
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Target,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Market Trend Analyzer',
    description: 'Analyze local real estate market trends and data. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function MarketTrendAnalyzer() {
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <div className="flex flex-col h-full">
      <header className="bg-gray-100 dark:bg-gray-800 px-4 md:px-6 py-3">
        <h1 className="text-lg font-semibold">Market Trend Analyzer</h1>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <TabGroup onIndexChange={(index) => setActiveTab(['analyzer', 'insights', 'guide', 'article'][index])}>
            <TabList className="grid w-full grid-cols-4 bg-gray-200 p-2 rounded-lg">
              <Tab>Analyzer</Tab>
              <Tab>Insights</Tab>
              <Tab>Guide</Tab>
              <Tab>Article</Tab>
            </TabList>
            <TabPanels className="mt-6">
              <TabPanel>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Market Trend Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="location" defaultValue="New York, NY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                          <select id="propertyType" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>Single Family</option>
                            <option>Condo</option>
                            <option>Townhouse</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">Date Range</label>
                          <select id="dateRange" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>Last 30 days</option>
                            <option>Last 3 months</option>
                            <option>Last 6 months</option>
                            <option>Last 12 months</option>
                          </select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Median Sale Price</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">$550,000</p>
                        <p className="text-sm text-green-500 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +5.2% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Average Days on Market</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">45</p>
                        <p className="text-sm text-red-500 flex items-center">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          -3.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Active Listings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">1,234</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Minus className="h-4 w-4 mr-1" />
                          -1.5% from last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Market Opportunities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-1" />
                            <span><strong>Emerging Neighborhoods:</strong> Areas with high growth potential.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-blue-500 mt-1" />
                            <span><strong>Renovation Properties:</strong> Opportunities for value-add investments.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Risk Factors
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <TrendingDown className="h-4 w-4 text-red-500 mt-1" />
                            <span><strong>Market Saturation:</strong> Certain areas may be approaching price peaks.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Minus className="h-4 w-4 text-orange-500 mt-1" />
                            <span><strong>Regulatory Changes:</strong> Keep an eye on new zoning laws or taxes.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">A Comprehensive Guide to Real Estate Market Analysis</h2>
                    <p>This guide provides a step-by-step approach to analyzing the real estate market, helping you make informed decisions.</p>
                    <h3>1. Define Your Goals</h3>
                    <p>Start by identifying what you want to achieve. Are you looking to buy, sell, or invest? Your goals will determine the focus of your analysis.</p>
                    <h3>2. Gather Data</h3>
                    <p>Collect data on key market indicators such as median prices, days on market, and inventory levels. Use reliable sources for accurate information.</p>
                    <h3>3. Analyze Trends</h3>
                    <p>Look for patterns in the data. Are prices rising or falling? Is inventory increasing or decreasing? Understanding these trends is crucial for predicting future market behavior.</p>
                    <h3>4. Evaluate Market Conditions</h3>
                    <p>Determine whether it's a buyer's, seller's, or balanced market. This will help you strategize your negotiations and expectations.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Guide to Real Estate Market Trend Analysis</h2>
                    <p>An in-depth look at the methodologies and tools used for effective real estate market trend analysis.</p>
                    <h3>Advanced Data Analysis Techniques</h3>
                    <p>Explore advanced techniques such as regression analysis and predictive modeling to forecast market trends with greater accuracy.</p>
                    <h3>Using Technology for Market Analysis</h3>
                    <p>Leverage the latest technology, including AI-powered analytics platforms and data visualization tools, to gain a competitive edge.</p>
                    <h3>Case Studies</h3>
                    <p>Examine real-world case studies to understand how market analysis is applied in different scenarios and the impact it has on investment outcomes.</p>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </div>
  );
}