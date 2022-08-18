import { PaymentSession } from "@medusajs/medusa"
import React from "react"

type WrapperProps = {
  paymentSession?: PaymentSession | null
}

const Wrapper: React.FC<WrapperProps> = ({ paymentSession, children }) => {
  if (!paymentSession) {
    return <div>{children}</div>
  }

  switch (paymentSession.provider_id) {
    default:
      return <div>{children}</div>
  }
}

export default Wrapper
