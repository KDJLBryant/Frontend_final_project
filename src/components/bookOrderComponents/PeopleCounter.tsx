import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useOrderContext } from "@/context/OrderContext";
import { Order } from "../../../../orders-api/src/types";

const PeopleCounter = ({
  setConfirmedChoices
}: {
  setConfirmedChoices: Dispatch<SetStateAction<boolean>>;
}) => {
  const { order, setOrder } = useOrderContext()
  const [count, setCount] = useState(() => order?.count || 1);

  const incrementCount = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount = prevCount + 1)
      setConfirmedChoices(false)
    }
  }

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount = prevCount - 1)
      setConfirmedChoices(false)
    }
  }

  const updateOrder = () => {
    const updatedOrder: Order = {
      ...order,
      count: count,
    };
    setOrder(updatedOrder);
    setConfirmedChoices(true)
  }

  useEffect(() => {
    setConfirmedChoices(false)
  }, [count])

  return (
    <div className="content-card">
      <h1 className="content-card">Set number of people</h1>
      <div className="flex justify-center items-center">
        <button className="arrow-button" onClick={decrementCount}>{'<-'}</button>
        <p className="m-8 font-bold text-4xl">{count}</p>
        <button className="arrow-button" onClick={incrementCount}>{'->'}</button>
      </div>
      <button className="custom-button" onClick={updateOrder}>Confirm booking</button>
    </div>
  )
}

export default PeopleCounter
