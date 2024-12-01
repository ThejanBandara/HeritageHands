'use client' 
import DeliveryInfoForm from "@/components/checkout/DeliveryInfoForm"
import ItemSummary from "@/components/checkout/ItemSummary"
import PaymentGateway from "@/components/checkout/PaymentGateway"
import SuccessPage from "@/components/checkout/SuccessPage"
import { useCheckout } from "@/context/CheckoutContext"
import { useEffect } from "react"
import { toast } from "sonner"

const CheckoutPage = () => {
    const {currentStep, nextStep} = useCheckout();

    useEffect(() => {
        if(currentStep === 'payment'){
            const timer = setTimeout(() => {
                toast.success('Payment successful!');
                nextStep();
            }, 5000);

            return () => clearTimeout(timer)
        }
    },[currentStep, nextStep])

    return (
        <div className='w-full h-screen bg-gray-50 flex items-center justify-center'>
            {currentStep === 'summary' && <ItemSummary/>}
            {currentStep === 'deliveryInfo' && <DeliveryInfoForm/>}
            {currentStep === 'payment' && <PaymentGateway/>}
            {currentStep === 'success' && <SuccessPage/>}
        </div>
    )
}

export default CheckoutPage