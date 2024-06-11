import { Dispatch, SetStateAction, useState } from "react";
import api from "@/api/api";
import { useOrderContext } from "@/context/OrderContext"

const OrderUpdater = ({
  setConfirmedChoices,
}: {
  setConfirmedChoices: Dispatch<SetStateAction<boolean>>;
}) => {
  const { order } = useOrderContext()
  const [successMessage, setSuccessMessage] = useState("")

  const handleOrderUpdate = async () => {
    if (order) {
      await api.updateOrder(order)
      setSuccessMessage("Updated Succesfully")
      setConfirmedChoices(true)
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderUpdate}>Update</button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
    </div>
  )
}

export default OrderUpdater
