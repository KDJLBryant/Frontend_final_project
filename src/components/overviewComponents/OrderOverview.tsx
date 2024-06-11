import { useOrderContext } from "@/context/OrderContext"
import { formatDate } from "@/utils/formatDate";

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

export default OrderOverview
