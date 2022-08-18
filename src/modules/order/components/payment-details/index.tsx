import { Payment, PaymentStatus } from "@medusajs/medusa"

type PaymentDetailsProps = {
  payments: Payment[]
  paymentStatus: PaymentStatus
}

const PaymentDetails = ({ payments, paymentStatus }: PaymentDetailsProps) => {
  return (
    <div>
      <h2 className="text-base-semi">Payment</h2>
      <div className="my-2">
        {payments.map((p) => {
          switch (p.provider_id) {
            case "paypal":
              return <PayPalDetails key={p.id} />
            case "manual":
              return <TestDetails key={p.id} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}

const PayPalDetails = () => {
  return (
    <div className="flex flex-col text-base-regular">
      <span className="text-small-regular text-gray-700">PayPal</span>
      <span>PayPal payment</span>
    </div>
  )
}

const TestDetails = () => {
  return (
    <div className="flex flex-col text-base-regular">
      <span className="text-small-regular text-gray-700">Test</span>
      <span>Test payment using medusa-payment-manual</span>
    </div>
  )
}

export default PaymentDetails
