'use client'
import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { Button } from '@/components/ui/button';
import { db } from '@/firebase';

const DashboardPage = () => {
  return (
    <div>
        <Button onClick={async () => {
            
        }}> add Ada  </Button>
    </div>
  )
}

export default DashboardPage