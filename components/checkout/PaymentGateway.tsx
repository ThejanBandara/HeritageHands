import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'

const PaymentGateway = () => {
  return (
    <Card className='w-10/12 h-5/6 bg-white border-[1px] border-gray-400 '>
    <CardHeader>
        <CardTitle>Payment</CardTitle>
        <CardDescription>This is a fake payment gateway. you won't be charged</CardDescription>
    </CardHeader>
    <CardContent className='h-5/6'>
        
    </CardContent>
    <CardFooter>

    </CardFooter>
</Card>
  )
}

export default PaymentGateway