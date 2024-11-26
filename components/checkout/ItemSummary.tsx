'use client'
import React from 'react'
import { CardContent} from '@/components/ui/card'
import { useCart } from '@/context/cartContext'
import ItemSumaryItem from './ItemSumaryItem'
import { cartItem } from '@/types/Cart'
const ItemSummary = () => {
    const { state } = useCart();
  return (
    <></>
  )
}

export default ItemSummary