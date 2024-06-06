'use client'
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
      <p className="content-card">Selected dish:</p>
      <div className="flex items-center justify-around content-card">
        <p>{order.dish.name}</p>
        <img className="size-1/4 p-2" src={order.dish.imageSource} alt="Selected Dish"></img>
      </div>
      <p className="content-card">Selected drinks:</p>
      {order.drinks.map((drink) => (
        <div className="drink-item-card">
          <p>{drink.name}</p>
          <img className="drink-image" src={drink.imageSource} alt="Selected Drink"></img>
        </div>
      ))}
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

  const handleOrderCreation = async () => {
    if (order) {
      await api.postNewOrder(order)
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderCreation}>Create</button>
    </div>
  )
}

const OrderUpdater = () => {
  const { order } = useOrderContext()

  const handleOrderUpdate = async () => {
    if (order) {
      await api.postNewOrder(order)
    }
  }

  return (
    <div className="content-card">
      <button className="custom-button" onClick={handleOrderUpdate}>Update</button>
    </div>
  )
}
const Overview = () => {
  const { orderFound } = useOrderContext()

  return (
    <div>
      <Dashboard currentPageId={4} />
      <OrderOverview />
      {!orderFound ? (<OrderCreator />) : (<OrderUpdater />)}
      <PageNavigator />
    </div>
  )
}

export default Overview
