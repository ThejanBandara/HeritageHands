import DeliveryInfoForm from "@/components/checkout/DeliveryInfoForm"
import ItemSummary from "@/components/checkout/ItemSummary"
import PaymentGateway from "@/components/checkout/PaymentGateway"
import SuccessPage from "@/components/checkout/SuccessPage"

const CheckoutPage = () => {

    return (
        <div className='w-full h-screen bg-gray-50 flex items-center justify-center'>
            <DeliveryInfoForm/>
        </div>
    )
}

export default CheckoutPage