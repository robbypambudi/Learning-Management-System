/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProductCard() {
  return (
    <div className='container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      <Card className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
        <CardHeader className='relative'>
          <img
            src='/watch.png'
            alt='Elegant Watch'
            className='w-full h-48 object-cover object-center transition duration-300 ease-in-out'
          />
          <div className='absolute top-0 right-0 bg-red-600 text-white p-2 rounded-bl-lg'>
            Sale
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <CardTitle className='text-xl font-semibold mb-2'>
            Product Title 2
          </CardTitle>
          <CardDescription className='text-gray-700 mb-4'>
            Another compelling product description here.
          </CardDescription>
          <p className='text-gray-800 mb-2'>$129.99</p>
        </CardContent>
        <CardFooter className='p-4 bg-gray-200'>
          <button className='bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out'>
            Add to Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
