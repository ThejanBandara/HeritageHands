import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useAuth } from '@/context/UserAuthContext'
import { Button } from '../ui/button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/cartContext';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

const SuccessPage = () => {

  const { user } = useAuth();
  const { deliveryInfo } = useCheckout();
  const { state, clearCart } = useCart();
  
    const saveOrder = async () => {
      const order = {
        userID: user?.uid,
        date: Date.now.toString(),
        amount: state.cartTotal,
        status: 'processing',
        orderItems: state.cartItems,
        deliveryInfo: deliveryInfo
      }

      try {
        await addDoc(collection(db, 'order'), order);
        console.log('Order saved in firestore')
        clearCart()
      }
      catch {
        console.log('Error saving data on firestore')
        toast.error('error placing order')
      }
      finally{
        redirect('/')
      }
    }

  return (
    <Card className='w-10/12 h-5/6 bg-white border-[1px] border-gray-400 '>

      <CardContent className='h-5/6 flex flex-col items-center justify-evenly'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 mx-4 text-green-700 animate-in animate-[bounce_1s_ease-in-out]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className='text-center w-full'>
          <h1 className='text-green-700 font-medium text-2xl mb-4'>Order Placement Successful !</h1>
          <p className='text-gray-500'>your package will be delivered to your loaction soon</p>
          <p className='text-gray-500'>a copy of the order is sent to your email</p>

        </div>
        <p className='text-gray-800 my-8'>You can track your order at <span className='font-medium underline cursor-pointer'>My Orders</span> section</p>
      </CardContent>
      <CardFooter className='flex items-center justify-center'>
        <Button onClick={() => saveOrder()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Back to home
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SuccessPage