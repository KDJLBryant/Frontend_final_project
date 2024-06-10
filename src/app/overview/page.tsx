'use client'
import { useState } from "react";
import api from "@/api/api";
import Dashboard from "@/components/Dashboard"
import PageRouter from "@/components/PageRouter"
import { useOrderContext } from "@/context/OrderContext"
import { formatDate } from "@/utils/formatDate";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return (
    order?.email && (
      <div className="page-navigator-component">
        <PageRouter route="/bookOrder" buttonText="Back" />
      </div>
    )
  );
};


const OrderOverview = () => {
  const { order } = useOrderContext()

  const calculatePrice = () => {
    let total = 0
    if (order) {
      total += order.dish.price
      order.drinks.map((drink) => (
        total += drink.price
      ))
      total *= order.count
    }
    return total
  }


  return (order &&
    <div>
      <p className="content-card">Order for email: {order.email}</p>
      <div className="lg:flex justify-center items-center">
        <div className="selected-dish-wrapper content-card lg:size-1/2">
          <p className="content-card">Selected dish:</p>
          <p>{order.dish.name}</p>
          <img className="size-1/4 p-2" src={order.dish.imageSource} alt="Selected Dish"></img>
          <p>{order.dish.description}</p>
        </div>
        <div className="selected-drinks-wrapper">
          <p className="content-card">Selected drinks:</p>
          {order.drinks.map((drink) => (
            <div className="drink-item-card">
              <p>{drink.name}</p>
              <img className="drink-image" src={drink.imageSource} alt="Selected Drink"></img>
            </div>
          ))}
        </div>
      </div>
      <div className="content-card">
        <p>Order for {order.count} people</p>
        <p>On {formatDate(new Date(order.date))}</p>
      </div>
      <div className="content-card">
        <p>Total price £{calculatePrice()}</p>
      </div>
    </div>
  )
}

const OrderCreator = () => {
  const { order } = useOrderContext()
  const [successMessage, setSuccessMessage] = useState("")

  const handleOrderCreation = async () => {
    if (order) {
      await api.postNewOrder(order)
      setSuccessMessage("Created Successfully")
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderCreation}>Create</button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
    </div>
  )
}

const OrderUpdater = () => {
  const { order } = useOrderContext()
  const [successMessage, setSuccessMessage] = useState("")

  const handleOrderUpdate = async () => {
    if (order) {
      await api.updateOrder(order)
      setSuccessMessage("Updated Succesfully")
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderUpdate}>Update</button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
    </div>
  )
}
const Overview = () => {
  const { orderFound } = useOrderContext()

  return (
    <div>
      <Dashboard currentPageId={4} />
      <OrderOverview />
      {orderFound ? (<OrderUpdater />) : (<OrderCreator />)}
      <PageNavigator />
    </div>
  )
}

export default Overview
