import { Dispatch, SetStateAction, useState } from "react";
import api from "@/api/api";
import { useOrderContext } from "@/context/OrderContext"

const OrderCreator = ({
  setConfirmedChoices,
}: {
  setConfirmedChoices: Dispatch<SetStateAction<boolean>>;
}) => {
  const { order } = useOrderContext()
  const [successMessage, setSuccessMessage] = useState("")

  const handleOrderCreation = async () => {
    if (order) {
      await api.postNewOrder(order)
      setSuccessMessage("Created Successfully")
      setConfirmedChoices(true)
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderCreation}>Create</button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
    </div>
  )
}

export default OrderCreator
