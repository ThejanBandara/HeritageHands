import React from 'react'
import './paymentAnimationStyle.css'

const PaymentAnimation = () => {
  return (
    <div className="container scale-[2.5]">
      <div className="left-side">
        <div className="card">
          <div className="card-line"></div>
          <div className="buttons"></div>
        </div>
        <div className="post">
          <div className="post-line"></div>
          <div className="screen">
            <div className="dollar">$</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 tick">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="numbers"></div>
          <div className="numbers-line2"></div>
        </div>
      </div>
    </div>
  )
}

export default PaymentAnimation