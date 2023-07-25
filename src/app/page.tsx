import Image from 'next/image'
import StripeCheckOutButton from './Checkout'
export default function Home() {
  return (
    <div className="flex min-h-screen mb-7 flex-col items-center p-24">
      <div className="">Stripe checkOut</div>
      <StripeCheckOutButton/> 
    </div>
  )
}
