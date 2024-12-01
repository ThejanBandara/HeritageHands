'use client'

import { DeliveryInfo, Order } from "@/types/Order";
import { createContext, ReactNode, useContext, useState } from "react";

type checkoutStep = 'summary' | 'deliveryInfo' | 'payment' | 'success';

interface CheckoutcontextProps {
    currentStep: checkoutStep;
    nextStep: () => void;
    prevStep: () => void;
    setStep: (step: checkoutStep) => void;
    deliveryInfo: DeliveryInfo | null;
    setDeliveryInfo: (info: DeliveryInfo) => void;
    order: Order | null;
    setOrder: (order: Order) => void;
}

const CheckoutContext = createContext<CheckoutcontextProps | null>(null);

export const CheckoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<checkoutStep>('summary');
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null);
    const [order, setOrder] = useState<Order | null>(null);

    const nextStep = () => {
        setCurrentStep((prev) => {
            const steps: checkoutStep[] = ['summary', 'deliveryInfo', 'payment', 'success'];
            const currentIndex = steps.indexOf(prev);
            return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : prev;
        });
    };

    const prevStep = () => {
        setCurrentStep((prev) => {
            const steps: checkoutStep[] = ['summary', 'deliveryInfo', 'payment', 'success'];
            const currentIndex = steps.indexOf(prev);
            return currentIndex > 0 ? steps[currentIndex - 1] : prev;
        });
    };

    const setStep = (step: checkoutStep) => {
        setCurrentStep(step);
    };

    return(
        <CheckoutContext.Provider value={{
            currentStep,
            nextStep,
            prevStep,
            setStep,
            deliveryInfo,
            setDeliveryInfo,
            order,
            setOrder
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = () => {
    const context = useContext(CheckoutContext);

    if(!context){
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }

    return context;
}