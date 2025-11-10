
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rental Price Estimator',
    description: 'Estimate optimal rental prices for your property. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
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
  propertyValue: z.string().min(1, { message: 'Property value is required.' }),
  bedrooms: z.string().min(1, { message: 'Number of bedrooms is required.' }),
  bathrooms: z.string().min(1, { message: 'Number of bathrooms is required.' }),
  squareFootage: z.string().min(1, { message: 'Square footage is required.' }),
})

const RentalPriceEstimatorPage: NextPage = () => {
  const [estimatedRent, setEstimatedRent] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyValue: '',
      bedrooms: '',
      bathrooms: '',
      squareFootage: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { propertyValue, bedrooms, bathrooms, squareFootage } = values
    // This is a simplified model. A real-world application would use a more sophisticated algorithm
    // with market data, location factors, amenities, etc.
    const baseRent = parseFloat(propertyValue) * 0.008
    const bedroomBonus = parseFloat(bedrooms) * 100
    const bathroomBonus = parseFloat(bathrooms) * 50
    const sqftBonus = parseFloat(squareFootage) * 0.1
    const estimated = baseRent + bedroomBonus + bathroomBonus + sqftBonus
    setEstimatedRent(estimated)
  }

  return (
    <>
      <Head>
        <title>Rental Price Estimator</title>
        <meta
          name="description"
          content="Estimate the optimal rental price for your property based on its features and market trends."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Rental Price Estimator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Estimate Your Rental Price</CardTitle>
              <CardDescription>
                Enter your property's details to get an estimated monthly rental
                price.
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
                    name="propertyValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Value</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the property value"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the number of bedrooms"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the number of bathrooms"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="squareFootage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Square Footage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter the total square footage"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Estimate Rent
                  </Button>
                </form>
              </Form>
            </CardContent>
            {estimatedRent !== null && (
              <CardFooter>
                <div className="w-full text-center text-2xl font-bold">
                  Estimated Monthly Rent: ${estimatedRent.toFixed(2)}
                </div>
              </CardFooter>
            )}
          </Card>
          <div className="prose lg:prose-xl">
            <h2>How to Price Your Rental Property</h2>
            <p>
              Setting the right rental price is key to maximizing your return
              on investment. Price it too high, and you risk long vacancies.
              Price it too low, and you're leaving money on the table. This
              calculator provides a baseline estimate, but you should also
              consider other factors.
            </p>
            <h3>Factors Influencing Rental Price</h3>
            <ul>
              <li>
                <strong>Location:</strong> Proximity to amenities, schools, and
                public transport.
              </li>
              <li>
                <strong>Market Demand:</strong> The current rental market in
                your area.
              </li>
              <li>
                <strong>Property Condition:</strong> The age, condition, and
                features of your property.
              </li>
              <li>
                <strong>Amenities:</strong> In-unit laundry, parking, and other
                perks.
              </li>
            </ul>
            <h3>Using the Estimator</h3>
            <p>
              Our estimator uses a simplified model to give you a starting
              point. For a more precise estimate, we recommend conducting a
              comparative market analysis (CMA) by looking at similar rental
              listings in your area.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RentalPriceEstimatorPage