'use client'
import Dashboard from "@/components/Dashboard"
import PageRouter from "@/components/PageRouter"
import { useOrderContext } from "@/context/OrderContext"

const OrderOverview = () => {
  const { order } = useOrderContext()

  return (order &&
    <div>
      <div className="flex items-center justify-around header-card">
        <p>{order.dish.name}</p>
        <img className="size-1/4 p-2" src={order.dish.imageSource} alt="Selected Dish"></img>
      </div>
      {order.drinks.map((drink) => (
        <div className="drink-item-card">
          <p>{drink.name}</p>
          <img className="drink-image" src={drink.imageSource} alt="Selected Drink"></img>
        </div>
      ))}
    </div>
  )
}

const Overview = () => {
  return (
    <div>
      <Dashboard currentPageId={4} />
      <OrderOverview />
    </div>
  )
}

export default Overview
