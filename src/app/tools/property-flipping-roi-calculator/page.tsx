
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Flipping ROI Calculator',
    description: 'Calculate the ROI and net profit of your property flipping projects. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { useState } from 'react'
import type { Metadata } from 'next';
import { NextPage } from 'next'
import Head from 'next/head'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const formSchema = z.object({
  purchasePrice: z.string().min(1, { message: 'Purchase price is required.' }),
  renovationCosts: z.string().min(1, { message: 'Renovation costs are required.' }),
  sellingPrice: z.string().min(1, { message: 'Selling price is required.' }),
  holdingCosts: z.string().min(1, { message: 'Holding costs are required.' }),
})

const PropertyFlippingROICalculatorPage: NextPage = () => {
  const [roi, setRoi] = useState<number | null>(null)
  const [netProfit, setNetProfit] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchasePrice: '',
      renovationCosts: '',
      sellingPrice: '',
      holdingCosts: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { purchasePrice, renovationCosts, sellingPrice, holdingCosts } = values
    const totalInvestment = parseFloat(purchasePrice) + parseFloat(renovationCosts) + parseFloat(holdingCosts)
    const profit = parseFloat(sellingPrice) - totalInvestment
    const calculatedRoi = (profit / totalInvestment) * 100
    setNetProfit(profit)
    setRoi(calculatedRoi)
  }

  return (
    <>
      <Head>
        <title>Property Flipping ROI Calculator</title>
        <meta
          name="description"
          content="Calculate the ROI and net profit of your property flipping projects to make informed investment decisions."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Property Flipping ROI Calculator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Flipping ROI</CardTitle>
              <CardDescription>
                Enter the details of your flip to calculate the potential ROI
                and net profit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="purchasePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purchase Price</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the purchase price"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="renovationCosts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Renovation Costs</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter total renovation costs"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sellingPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Selling Price</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the expected selling price"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="holdingCosts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Holding Costs</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter total holding costs"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Calculate ROI
                  </Button>
                </form>
              </Form>
            </CardContent>
            {roi !== null && netProfit !== null && (
              <CardFooter className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">Net Profit</p>
                  <p className="text-3xl font-bold text-green-600">
                    ${netProfit.toFixed(2)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">Return on Investment (ROI)</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {roi.toFixed(2)}%
                  </p>
                </div>
              </CardFooter>
            )}
          </Card>
          <div className="prose lg:prose-xl">
            <h2>Understanding Property Flipping ROI</h2>
            <p>
              Property flipping can be a lucrative investment strategy, but it's
              essential to understand the numbers. The Return on Investment
              (ROI) is a key metric that tells you how profitable your flip is
              in relation to your total investment.
            </p>
            <h3>How to Calculate Flipping ROI</h3>
            <p>
              The formula for ROI in property flipping is:
            </p>
            <p className="text-center font-mono bg-gray-100 p-4 rounded">
              ROI = (Net Profit / Total Investment) * 100
            </p>
            <p>
              Where:
            </p>
            <ul>
              <li>
                <strong>Net Profit</strong> = Selling Price - Total Investment
              </li>
              <li>
                <strong>Total Investment</strong> = Purchase Price + Renovation
                Costs + Holding Costs
              </li>
            </ul>
            <h3>Key Costs to Consider</h3>
            <ul>
              <li>
                <strong>Purchase Price:</strong> The amount you paid for the
                property.
              </li>
              <li>
                <strong>Renovation Costs:</strong> All expenses related to
                improving the property.
              </li>
              <li>
                <strong>Holding Costs:</strong> Costs incurred while you own the
                property, such as taxes, insurance, and utilities.
              </li>
              <li>
                <strong>Closing Costs:</strong> Fees associated with buying and
                selling the property.
              </li>
            </ul>
            <h3>Tips for a Successful Flip</h3>
            <p>
              To maximize your ROI, focus on smart renovations that add value,
              keep your holding period short, and accurately estimate your
              after-repair value (ARV).
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyFlippingROICalculatorPage