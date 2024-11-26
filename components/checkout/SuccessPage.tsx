import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'

const SuccessPage = () => {
  return (
    <Card className='w-10/12 h-5/6 bg-white border-[1px] border-gray-400 '>
    <CardHeader>
        <CardTitle>Order Placed!</CardTitle>
        <CardDescription> order placement successful! we sent a copy of the order to your email</CardDescription>
    </CardHeader>
    <CardContent className='h-5/6'>
        
    </CardContent>
    <CardFooter>

    </CardFooter>
</Card>
  )
}

export default SuccessPage